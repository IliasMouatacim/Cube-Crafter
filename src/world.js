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
  constructor(scene, seed = 42) {
    this.scene = scene;
    this.generator = new WorldGenerator(seed);
    this.chunks = new Map(); // key: "cx,cz" -> Chunk
    this.seed = seed;

    // Queue-based chunk loading for smooth frame rate
    this.loadQueue = [];
    this.meshQueue = [];
    this.maxChunkLoadsPerFrame = 4;
    this.maxMeshBuildsPerFrame = 3;

    // Door open/closed states: key "x,y,z" -> true (open)
    this.doorStates = new Map();
  }

  chunkKey(cx, cz) {
    return `${cx},${cz}`;
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

    // Mark adjacent chunks dirty if block is on boundary
    if (lx === 0) this._markDirty(cx - 1, cz);
    if (lx === CHUNK_SIZE - 1) this._markDirty(cx + 1, cz);
    if (lz === 0) this._markDirty(cx, cz - 1);
    if (lz === CHUNK_SIZE - 1) this._markDirty(cx, cz + 1);
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
        this.meshQueue.push(chunk);
        loaded++;
      }
    }

    // Process mesh build queue + rebuild dirty chunks
    let built = 0;
    while (this.meshQueue.length > 0 && built < this.maxMeshBuildsPerFrame) {
      const chunk = this.meshQueue.shift();
      if (!this.chunks.has(this.chunkKey(chunk.cx, chunk.cz))) continue;
      chunk.buildMesh(this.scene);
      built++;
    }

    // Rebuild dirty chunks (from block modifications)
    for (const chunk of this.chunks.values()) {
      if (chunk.dirty && chunk.generated && built < this.maxMeshBuildsPerFrame + 2) {
        chunk.buildMesh(this.scene);
        built++;
      }
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
