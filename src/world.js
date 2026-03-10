// ============================================================
// World Manager: chunk loading/unloading, block access
// ============================================================

import {
  CHUNK_SIZE, CHUNK_HEIGHT, RENDER_DISTANCE,
  BlockType, BlockData,
} from './blocks.js';
import { Chunk } from './chunk.js';
import { WorldGenerator } from './worldgen.js';

export class World {
  constructor(scene, seed = 42, materials = null) {
    this.scene = scene;
    this.materials = materials;
    this.generator = new WorldGenerator(seed);
    this.chunks = new Map(); // key: "cx,cz" -> Chunk
    this.seed = seed;

    // Queue-based chunk loading for smooth frame rate
    this.loadQueue = [];
    this.meshQueue = [];
    this.maxChunkLoadsPerFrame = 4;
    this.maxMeshBuildsPerFrame = 3;

    // Fluid simulation sets containing world coordinates "wx,wy,wz"
    this.fluidQueue = new Set();
    this.nextFluidQueue = new Set();
    this.tickCount = 0;

    // Door open/closed states: key "x,y,z" -> true (open)
    this.doorStates = new Map();
  }

  chunkKey(cx, cz) {
    return `${cx},${cz}`;
  }

  dispose() {
    for (const [, chunk] of this.chunks) {
      chunk.dispose(this.scene);
    }
    this.chunks.clear();
    this.loadQueue = [];
    this.meshQueue = [];
  }

  getChunk(cx, cz) {
    return this.chunks.get(this.chunkKey(cx, cz));
  }

  // Get block at world coordinates
  getBlock(wx, wy, wz) {
    if (wy < 0 || wy >= CHUNK_HEIGHT) return BlockType.AIR;
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.getChunk(cx, cz);
    if (!chunk || !chunk.blocks) return BlockType.AIR;
    const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    return chunk.getBlock(lx, wy, lz);
  }

  // Set block at world coordinates
  setBlock(wx, wy, wz, type) {
    if (wy < 0 || wy >= CHUNK_HEIGHT) return;
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.getChunk(cx, cz);
    if (!chunk || !chunk.blocks) return;
    const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    chunk.setBlock(lx, wy, lz, type);

    // Queue update for this block and neighbors for fluids
    this.scheduleFluidUpdate(wx, wy, wz);
    this.scheduleFluidUpdate(wx + 1, wy, wz);
    this.scheduleFluidUpdate(wx - 1, wy, wz);
    this.scheduleFluidUpdate(wx, wy + 1, wz);
    this.scheduleFluidUpdate(wx, wy - 1, wz);
    this.scheduleFluidUpdate(wx, wy, wz + 1);
    this.scheduleFluidUpdate(wx, wy, wz - 1);

    // Mark adjacent chunks dirty if block is on boundary
    if (lx === 0) this._markDirty(cx - 1, cz);
    if (lx === CHUNK_SIZE - 1) this._markDirty(cx + 1, cz);
    if (lz === 0) this._markDirty(cx, cz - 1);
    if (lz === CHUNK_SIZE - 1) this._markDirty(cx, cz + 1);
  }

  getMetadata(wx, wy, wz) {
    if (wy < 0 || wy >= CHUNK_HEIGHT) return 0;
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.getChunk(cx, cz);
    if (!chunk || !chunk.metadata) return 0;
    const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    return chunk.getMetadata(lx, wy, lz);
  }

  setMetadata(wx, wy, wz, value) {
    if (wy < 0 || wy >= CHUNK_HEIGHT) return;
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.getChunk(cx, cz);
    if (!chunk || !chunk.metadata) return;
    const lx = ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    chunk.setMetadata(lx, wy, lz, value);

    // Mark adjacent chunks dirty if block is on boundary
    if (lx === 0) this._markDirty(cx - 1, cz);
    if (lx === CHUNK_SIZE - 1) this._markDirty(cx + 1, cz);
    if (lz === 0) this._markDirty(cx, cz - 1);
    if (lz === CHUNK_SIZE - 1) this._markDirty(cx, cz + 1);
  }

  scheduleFluidUpdate(wx, wy, wz) {
    this.fluidQueue.add(`${wx},${wy},${wz}`);
  }

  _markDirty(cx, cz) {
    const chunk = this.getChunk(cx, cz);
    if (chunk) chunk.dirty = true;
  }

  // Check if a block is solid at world coordinates
  isSolid(wx, wy, wz) {
    const bx = Math.floor(wx), by = Math.floor(wy), bz = Math.floor(wz);
    const block = this.getBlock(bx, by, bz);
    const bd = BlockData[block];
    if (!bd || !bd.solid) return false;
    // Open doors are not solid
    if (block === BlockType.DOOR && this.isDoorOpen(bx, by, bz)) return false;
    return true;
  }

  // Door state helpers
  isDoorOpen(wx, wy, wz) {
    return !!this.doorStates.get(`${wx},${wy},${wz}`);
  }

  toggleDoor(wx, wy, wz) {
    const key = `${wx},${wy},${wz}`;
    const isOpen = !this.doorStates.get(key);
    this.doorStates.set(key, isOpen);
    // Rebuild the chunk so the visual updates
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.getChunk(cx, cz);
    if (chunk) chunk.dirty = true;
    this._markDirty(cx - 1, cz);
    this._markDirty(cx + 1, cz);
    this._markDirty(cx, cz - 1);
    this._markDirty(cx, cz + 1);
    return isOpen;
  }

  // Update chunk loading based on player position(s)
  // Accepts optional extra positions for co-op
  update(playerX, playerZ, extraPositions) {
    // Determine which chunks should be loaded
    const neededChunks = new Set();

    // Gather all player positions to load around
    const positions = [{ x: playerX, z: playerZ }];
    if (extraPositions) {
      for (const p of extraPositions) positions.push(p);
    }

    for (const pos of positions) {
      const pcx = Math.floor(pos.x / CHUNK_SIZE);
      const pcz = Math.floor(pos.z / CHUNK_SIZE);

      for (let dx = -RENDER_DISTANCE; dx <= RENDER_DISTANCE; dx++) {
        for (let dz = -RENDER_DISTANCE; dz <= RENDER_DISTANCE; dz++) {
          if (dx * dx + dz * dz > RENDER_DISTANCE * RENDER_DISTANCE) continue;
          const cx = pcx + dx;
          const cz = pcz + dz;
          const key = this.chunkKey(cx, cz);
          neededChunks.add(key);

          if (!this.chunks.has(key)) {
            const chunk = new Chunk(cx, cz, this);
            this.chunks.set(key, chunk);
            this.loadQueue.push(chunk);
          }
        }
      }
    }

    // Unload distant chunks
    for (const [key, chunk] of this.chunks) {
      if (!neededChunks.has(key)) {
        chunk.dispose(this.scene);
        this.chunks.delete(key);
      }
    }

    // Process load queue
    let loaded = 0;
    while (this.loadQueue.length > 0 && loaded < this.maxChunkLoadsPerFrame) {
      const chunk = this.loadQueue.shift();
      if (!this.chunks.has(this.chunkKey(chunk.cx, chunk.cz))) continue;
      if (!chunk.generated) {
        chunk.generate(this.generator);

        // Scan newly generated chunk for water blocks to add to queue
        for (let lx = 0; lx < CHUNK_SIZE; lx++) {
          for (let ly = 0; ly < CHUNK_HEIGHT; ly++) {
            for (let lz = 0; lz < CHUNK_SIZE; lz++) {
              if (chunk.getBlock(lx, ly, lz) === BlockType.WATER) {
                this.fluidQueue.add(`${chunk.cx * CHUNK_SIZE + lx},${ly},${chunk.cz * CHUNK_SIZE + lz}`);
              }
            }
          }
        }

        this.meshQueue.push(chunk);
        loaded++;
      }
    }

    // Process mesh build queue + rebuild dirty chunks
    let built = 0;
    while (this.meshQueue.length > 0 && built < this.maxMeshBuildsPerFrame) {
      const chunk = this.meshQueue.shift();
      if (!this.chunks.has(this.chunkKey(chunk.cx, chunk.cz))) continue;
      chunk.buildMesh(this.scene, this.materials);
      built++;
    }

    // Rebuild dirty chunks (from block modifications)
    for (const chunk of this.chunks.values()) {
      if (chunk.dirty && chunk.generated && built < this.maxMeshBuildsPerFrame + 2) {
        chunk.buildMesh(this.scene, this.materials);
        built++;
      }
    }
  }

  // Called periodically from main game loop (e.g. 5 times per second)
  simulateFluids() {
    if (this.fluidQueue.size === 0) return;

    // Swap queues
    const queue = Array.from(this.fluidQueue);
    this.fluidQueue.clear();

    for (const key of queue) {
      const [wx, wy, wz] = key.split(',').map(Number);
      const block = this.getBlock(wx, wy, wz);

      if (block === BlockType.WATER || block === BlockType.LAVA) {
        const meta = this.getMetadata(wx, wy, wz);

        // Max spread distance
        if (meta >= 7) {
          // Check if neighbors need to dry up if a source was removed
          this._checkFluidDrying(wx, wy, wz, block, meta);
          continue;
        }

        const downBlock = this.getBlock(wx, wy - 1, wz);
        const canFlowDown = this._canFluidFlowInto(downBlock);

        if (canFlowDown) {
          this.setBlock(wx, wy - 1, wz, block);
          this.setMetadata(wx, wy - 1, wz, 1); // Falling water is level 1
          this.fluidQueue.add(`${wx},${wy - 1},${wz}`);
        } else if (downBlock === block) {
          // Ensure falling water combines into full column
          // Horizontal flow
          this._flowFluidHorizontally(wx, wy, wz, block, meta);
        } else {
          // Flow horizontally
          this._flowFluidHorizontally(wx, wy, wz, block, meta);
        }

        this._checkFluidDrying(wx, wy, wz, block, meta);
      } else {
        // Was water, now something else/air, check neighbors if they need to dry
        // Handled naturally by the drying loop on next tick since source is gone
      }
    }
  }

  _canFluidFlowInto(blockType) {
    return blockType === BlockType.AIR || blockType === BlockType.WATER || blockType === BlockType.LAVA ||
      blockType === BlockType.TORCH || blockType === BlockType.GRASS || blockType === BlockType.SNOW || blockType === BlockType.COBWEB || blockType === BlockType.LADDER;
  }

  _flowFluidHorizontally(wx, wy, wz, blockType, meta) {
    const nextMeta = meta + 1;
    if (nextMeta >= 7) return;

    const neighbors = [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]];
    let flowStateChanged = false;

    for (const n of neighbors) {
      const nx = wx + n[0];
      const nz = wz + n[2];
      const nBlock = this.getBlock(nx, wy, nz);

      // Don't overwrite same fluid if the neighbor is a lower or equal flow level (meaning it's closer to or IS a source)
      if (this._canFluidFlowInto(nBlock)) {
        if (nBlock === blockType) {
          const nMeta = this.getMetadata(nx, wy, nz);
          // Neighbor is further from source, overwrite it
          if (nMeta > nextMeta && nMeta !== 0) {
            this.setMetadata(nx, wy, nz, nextMeta);
            this.fluidQueue.add(`${nx},${wy},${nz}`);
            flowStateChanged = true;
          }
        } else {
          // It's air or something replaceable
          this.setBlock(nx, wy, nz, blockType);
          this.setMetadata(nx, wy, nz, nextMeta);
          this.fluidQueue.add(`${nx},${wy},${nz}`);
          flowStateChanged = true;
        }
      }
    }
  }

  _checkFluidDrying(wx, wy, wz, blockType, meta) {
    // If we are a flowing fluid (meta > 0), verify we have a valid source supplying us
    if (meta === 0) return; // Source block, doesn't dry

    const upBlock = this.getBlock(wx, wy + 1, wz);
    // If water above us, we are supplied
    if (upBlock === blockType) return;

    let hasValidSource = false;
    const neighbors = [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]];

    for (const n of neighbors) {
      const nx = wx + n[0];
      const nz = wz + n[2];
      if (this.getBlock(nx, wy, nz) === blockType) {
        const nMeta = this.getMetadata(nx, wy, nz);
        // Valid source if the neighbor's level is exactly one less than ours
        // Or if the neighbor is falling water and we are spreading from it
        if (nMeta < meta) {
          hasValidSource = true;
          break;
        }
      }
    }

    if (!hasValidSource) {
      // Dry up completely
      this.setBlock(wx, wy, wz, BlockType.AIR);
      this.setMetadata(wx, wy, wz, 0);

      // Tell neighbors to check themselves since we just vanished
      for (const n of neighbors) {
        this.scheduleFluidUpdate(wx + n[0], wy, wz + n[2]);
      }
      this.scheduleFluidUpdate(wx, wy - 1, wz);
    }
  }

  // Raycast through the voxel world (DDA algorithm)
  raycast(origin, direction, maxDist = 8) {
    let x = Math.floor(origin.x);
    let y = Math.floor(origin.y);
    let z = Math.floor(origin.z);

    const stepX = direction.x > 0 ? 1 : -1;
    const stepY = direction.y > 0 ? 1 : -1;
    const stepZ = direction.z > 0 ? 1 : -1;

    const tDeltaX = direction.x !== 0 ? Math.abs(1 / direction.x) : Infinity;
    const tDeltaY = direction.y !== 0 ? Math.abs(1 / direction.y) : Infinity;
    const tDeltaZ = direction.z !== 0 ? Math.abs(1 / direction.z) : Infinity;

    let tMaxX = direction.x !== 0
      ? ((direction.x > 0 ? (x + 1 - origin.x) : (origin.x - x)) * tDeltaX)
      : Infinity;
    let tMaxY = direction.y !== 0
      ? ((direction.y > 0 ? (y + 1 - origin.y) : (origin.y - y)) * tDeltaY)
      : Infinity;
    let tMaxZ = direction.z !== 0
      ? ((direction.z > 0 ? (z + 1 - origin.z) : (origin.z - z)) * tDeltaZ)
      : Infinity;

    let lastX = x, lastY = y, lastZ = z;
    let dist = 0;

    while (dist < maxDist) {
      const block = this.getBlock(x, y, z);
      if (block !== BlockType.AIR && block !== BlockType.WATER) {
        return {
          hit: true,
          blockPos: { x, y, z },
          normal: { x: lastX - x, y: lastY - y, z: lastZ - z },
          blockType: block,
          distance: dist,
        };
      }

      lastX = x; lastY = y; lastZ = z;

      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) {
          dist = tMaxX;
          x += stepX;
          tMaxX += tDeltaX;
        } else {
          dist = tMaxZ;
          z += stepZ;
          tMaxZ += tDeltaZ;
        }
      } else {
        if (tMaxY < tMaxZ) {
          dist = tMaxY;
          y += stepY;
          tMaxY += tDeltaY;
        } else {
          dist = tMaxZ;
          z += stepZ;
          tMaxZ += tDeltaZ;
        }
      }
    }

    return { hit: false };
  }

  // Get spawn point (find solid ground near origin)
  getSpawnPoint() {
    const wx = 0;
    const wz = 0;
    // Ensure spawn chunk is generated
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const key = this.chunkKey(cx, cz);
    if (!this.chunks.has(key)) {
      const chunk = new Chunk(cx, cz, this);
      chunk.generate(this.generator);
      this.chunks.set(key, chunk);
    }

    // Find surface
    for (let y = CHUNK_HEIGHT - 1; y > 0; y--) {
      const block = this.getBlock(wx, y, wz);
      const bd = BlockData[block];
      if (bd && bd.solid) {
        return { x: wx + 0.5, y: y + 2, z: wz + 0.5 };
      }
    }
    return { x: wx + 0.5, y: 60, z: wz + 0.5 };
  }
}
