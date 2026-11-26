// ============================================================
// World Manager: chunk loading/unloading, block access
// ============================================================

import {
  CHUNK_SIZE, CHUNK_HEIGHT, RENDER_DISTANCE,
  BlockType, BlockData,
} from './blocks.js';
import { Chunk } from './chunk.js';
import { WorldGenerator } from './worldgen.js';

const FLUID_BUDGET = 128;
const FLUID_NEIGHBORS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

export class World {
  constructor(scene, seed = 42, materials = null) {
    this.scene = scene;
    this.materials = materials;
    this.generator = new WorldGenerator(seed);
    this.renderDistance = RENDER_DISTANCE;
    this.chunks = new Map(); // key: "cx,cz" -> Chunk
    this.seed = seed;

    this.loadQueue = [];
    this.terrainWorker = null;
    this.pendingTerrain = new Map();
    this.pendingMesh = null;
    this.nextTerrainId = 0;
    this.workerUnavailable = typeof Worker === 'undefined';
    this.fluidQueue = new Set();

    // Cache player chunks to avoid rebuilding set every frame
    this.lastPlayerChunks = [];

    // Door open/closed states: key "x,y,z" -> true (open)
    this.doorStates = new Map();

    // Player modifications: key "x,y,z" -> BlockType
    this.modifications = new Map();
    this.chunkEdits = new Map();

    // Chest contents: key "x,y,z" -> array of items
    this.chests = new Map();
  }

  saveModification(wx, wy, wz, type) {
    this.modifications.set(`${wx},${wy},${wz}`, type);
    this._indexEdit(wx, wy, wz, type);
  }

  restoreModifications(entries) {
    this.modifications = new Map(entries);
    this.chunkEdits.clear();
    for (const [position, type] of this.modifications) {
      const [x, y, z] = position.split(',').map(Number);
      this._indexEdit(x, y, z, type);
    }
  }

  _indexEdit(x, y, z, type) {
    if (!Number.isInteger(x) || !Number.isInteger(z) || !Number.isInteger(y) || y < 0 || y >= CHUNK_HEIGHT) return;
    const cx = Math.floor(x / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const key = this.chunkKey(cx, cz);
    if (!this.chunkEdits.has(key)) this.chunkEdits.set(key, new Map());
    this.chunkEdits.get(key).set(WorldGenerator.blockIndex(x - cx * CHUNK_SIZE, y, z - cz * CHUNK_SIZE), type);
  }

  applyChunkEdits(chunk) {
    const edits = this.chunkEdits.get(this.chunkKey(chunk.cx, chunk.cz));
    if (!edits) return;
    for (const [index, type] of edits) chunk.blocks[index] = type;
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
    this.terrainWorker?.terminate();
    this.terrainWorker = null;
    this.pendingTerrain.clear();
    this.pendingMesh = null;
    this.fluidQueue.clear();
    this.lastPlayerChunks = [];
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
    if (wy < 0 || wy >= CHUNK_HEIGHT) return false;
    if (!Number.isInteger(wx) || !Number.isInteger(wy) || !Number.isInteger(wz)) return false;
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.getChunk(cx, cz);
    if (!chunk || !chunk.blocks) return false;
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
    const dx = lx === 0 ? -1 : lx === CHUNK_SIZE - 1 ? 1 : 0;
    const dz = lz === 0 ? -1 : lz === CHUNK_SIZE - 1 ? 1 : 0;
    if (dx) this._markDirty(cx + dx, cz);
    if (dz) this._markDirty(cx, cz + dz);
    if (dx && dz) this._markDirty(cx + dx, cz + dz);
    return true;
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
    if (wy >= 0 && wy < CHUNK_HEIGHT &&
        this.getChunk(Math.floor(wx / CHUNK_SIZE), Math.floor(wz / CHUNK_SIZE))?.generated) {
      this.fluidQueue.add(`${wx},${wy},${wz}`);
    }
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
    this._markDirty(cx, cz);
    this._markDirty(cx - 1, cz);
    this._markDirty(cx + 1, cz);
    this._markDirty(cx, cz - 1);
    this._markDirty(cx, cz + 1);
    return isOpen;
  }

  // Update chunk loading based on player position(s)
  // Accepts optional extra positions for co-op
  update(playerX, playerZ, extraPositions) {
    // Gather all player positions to load around
    const positions = [{ x: playerX, z: playerZ }];
    if (extraPositions) {
      for (const p of extraPositions) positions.push(p);
    }

    // Check if players have moved to new chunks
    let chunksChanged = this.lastRenderDistance !== this.renderDistance;
    if (this.lastPlayerChunks.length !== positions.length) {
      chunksChanged = true;
    } else {
      for (let i = 0; i < positions.length; i++) {
        const pcx = Math.floor(positions[i].x / CHUNK_SIZE);
        const pcz = Math.floor(positions[i].z / CHUNK_SIZE);
        if (this.lastPlayerChunks[i].cx !== pcx || this.lastPlayerChunks[i].cz !== pcz) {
          chunksChanged = true;
          break;
        }
      }
    }

    if (chunksChanged) {
      // Determine which chunks should be loaded
      const neededChunks = new Set();
      this.lastPlayerChunks = [];
      this.lastRenderDistance = this.renderDistance;

      for (const pos of positions) {
        const pcx = Math.floor(pos.x / CHUNK_SIZE);
        const pcz = Math.floor(pos.z / CHUNK_SIZE);
        this.lastPlayerChunks.push({ cx: pcx, cz: pcz });

        for (let dx = -this.renderDistance; dx <= this.renderDistance; dx++) {
          for (let dz = -this.renderDistance; dz <= this.renderDistance; dz++) {
            if (dx * dx + dz * dz > this.renderDistance ** 2) continue;
            const cx = pcx + dx;
            const cz = pcz + dz;
            const key = this.chunkKey(cx, cz);
            neededChunks.add(key);

            if (!this.chunks.has(key)) {
              const chunk = new Chunk(cx, cz, this);
              this.chunks.set(key, chunk);
              }
          }
        }
      }

      // Unload distant chunks
      for (const [key, chunk] of this.chunks) {
        if (!neededChunks.has(key)) {
          chunk.dispose(this.scene);
          this.chunks.delete(key);
          if (chunk.generated) this._refreshChunkBorders(chunk.cx, chunk.cz);
        }
      }
    }

    if (chunksChanged) {
      this.loadQueue = [...this.chunks.values()]
        .filter(chunk => !chunk.generated && !chunk.terrainPending)
        .sort((a, b) => this._chunkDistance(a) - this._chunkDistance(b));
    }

    // Always have collision data under the players, even after a teleport.
    for (const pos of positions) this.ensureTerrainAt(pos.x, pos.z);
    this._streamTerrain();

    // Keep one mesh job in flight and select the nearest dirty chunk next.
    if (this.pendingMesh) return;
    let next;
    let nearest = Infinity;
    for (const chunk of this.chunks.values()) {
      if (!chunk.generated || !(chunk.dirty || chunk.borderDirty)) continue;
      const distance = this._chunkDistance(chunk) + (chunk.dirty ? 0 : 1);
      if (distance < nearest) {
        next = chunk;
        nearest = distance;
      }
    }
    if (!next) return;
    if (!this.terrainWorker) {
      next.buildMesh(this.scene, this.materials);
      return;
    }

    const adjacent = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        if (!dx && !dz) continue;
        const neighbor = this.getChunk(next.cx + dx, next.cz + dz);
        if (neighbor?.blocks) adjacent.push([this.chunkKey(neighbor.cx, neighbor.cz), neighbor.blocks]);
      }
    }
    const openDoors = [];
    for (const [position, open] of this.doorStates) {
      if (!open) continue;
      const [x, , z] = position.split(',').map(Number);
      if (Math.floor(x / CHUNK_SIZE) === next.cx && Math.floor(z / CHUNK_SIZE) === next.cz) {
        openDoors.push(position);
      }
    }
    next.dirty = false;
    next.borderDirty = false;
    this.pendingMesh = next;
    this.terrainWorker.postMessage({
      kind: 'mesh', cx: next.cx, cz: next.cz,
      blocks: next.blocks, metadata: next.metadata, adjacent, openDoors,
    });
  }

  _chunkDistance(chunk) {
    let distance = Infinity;
    for (const pos of this.lastPlayerChunks) {
      distance = Math.min(distance, (pos.cx - chunk.cx) ** 2 + (pos.cz - chunk.cz) ** 2);
    }
    return distance;
  }

  ensureTerrainAt(x, z) {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const key = this.chunkKey(cx, cz);
    let chunk = this.chunks.get(key);
    if (!chunk) {
      chunk = new Chunk(cx, cz, this);
      this.chunks.set(key, chunk);
    }
    if (!chunk.generated) {
      chunk.generate(this.generator);
      this._refreshChunkBorders(cx, cz);
    }
    return chunk;
  }

  _refreshChunkBorders(cx, cz) {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const chunk = this.getChunk(cx + dx, cz + dz);
        if (chunk?.generated) chunk.borderDirty = true;
      }
    }
  }

  _streamTerrain() {
    if (!this.workerUnavailable && !this.terrainWorker) {
      try {
        const worker = new Worker(new URL('./terrain.worker.js', import.meta.url), { type: 'module' });
        worker.onmessage = ({ data: { kind, id, blocks, mesh } }) => {
          if (kind === 'mesh') {
            const chunk = this.pendingMesh;
            this.pendingMesh = null;
            if (chunk && !chunk.dirty && this.getChunk(chunk.cx, chunk.cz) === chunk) {
              chunk.installMesh(this.scene, this.materials, mesh);
            }
            return;
          }

          const chunk = this.pendingTerrain.get(id);
          if (!chunk) return;
          this.pendingTerrain.delete(id);
          chunk.terrainPending = false;
          if (chunk.generated || this.getChunk(chunk.cx, chunk.cz) !== chunk) return;
          chunk.installBlocks(blocks);
          this._refreshChunkBorders(chunk.cx, chunk.cz);
        };
        worker.onerror = () => {
          worker.terminate();
          this.terrainWorker = null;
          this.workerUnavailable = true;
          for (const chunk of this.pendingTerrain.values()) chunk.terrainPending = false;
          this.pendingTerrain.clear();
          if (this.pendingMesh) this.pendingMesh.dirty = true;
          this.pendingMesh = null;
          this.loadQueue = [...this.chunks.values()].filter(chunk => !chunk.generated)
            .sort((a, b) => this._chunkDistance(a) - this._chunkDistance(b));
        };
        this.terrainWorker = worker;
      } catch {
        this.workerUnavailable = true;
      }
    }

    while (this.loadQueue.length && this.pendingTerrain.size < 2) {
      const chunk = this.loadQueue.shift();
      if (chunk.generated || this.getChunk(chunk.cx, chunk.cz) !== chunk) continue;
      if (!this.terrainWorker) {
        this.ensureTerrainAt(chunk.cx * CHUNK_SIZE, chunk.cz * CHUNK_SIZE);
        break;
      }
      const id = ++this.nextTerrainId;
      chunk.terrainPending = true;
      this.pendingTerrain.set(id, chunk);
      this.terrainWorker.postMessage({ kind: 'terrain', id, seed: this.seed, cx: chunk.cx, cz: chunk.cz });
    }
  }

  // Snapshot a bounded batch before updating so changes run on the next tick.
  simulateFluids() {
    const batch = [];
    for (const key of this.fluidQueue) {
      batch.push(key);
      this.fluidQueue.delete(key);
      if (batch.length === FLUID_BUDGET) break;
    }

    for (const key of batch) {
      const [x, y, z] = key.split(',').map(Number);
      const block = this.getBlock(x, y, z);
      if (block !== BlockType.WATER && block !== BlockType.LAVA) continue;
      const meta = this.getMetadata(x, y, z);
      if (this._checkFluidDrying(x, y, z, block, meta)) continue;
      const below = this.getBlock(x, y - 1, z);
      if (y > 0 && this._canFluidFlowInto(below)) {
        this.setBlock(x, y - 1, z, block);
        this.setMetadata(x, y - 1, z, 1);
      } else if (below !== block) {
        this._flowFluidHorizontally(x, y, z, block, meta);
      }
    }
  }

  _canFluidFlowInto(block) {
    return block === BlockType.AIR || block === BlockType.TORCH ||
      block === BlockType.COBWEB || block === BlockType.LADDER;
  }

  _flowFluidHorizontally(x, y, z, block, meta) {
    const next = meta + 1;
    if (next > 7) return;
    for (const [dx, dz] of FLUID_NEIGHBORS) {
      const nx = x + dx;
      const nz = z + dz;
      if (!this.getChunk(Math.floor(nx / CHUNK_SIZE), Math.floor(nz / CHUNK_SIZE))?.generated) continue;
      const neighbor = this.getBlock(nx, y, nz);
      if (this._canFluidFlowInto(neighbor)) {
        this.setBlock(nx, y, nz, block);
        this.setMetadata(nx, y, nz, next);
      } else if (neighbor === block && this.getMetadata(nx, y, nz) > next) {
        this.setMetadata(nx, y, nz, next);
        this.scheduleFluidUpdate(nx, y, nz);
      }
    }
  }

  _checkFluidDrying(wx, wy, wz, blockType, meta) {
    if (meta === 0 || this.getBlock(wx, wy + 1, wz) === blockType) return false;
    for (const [dx, dz] of FLUID_NEIGHBORS) {
      const x = wx + dx;
      const z = wz + dz;
      if (this.getBlock(x, wy, z) === blockType && this.getMetadata(x, wy, z) < meta) return false;
    }
    this.setBlock(wx, wy, wz, BlockType.AIR);
    return true;
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
    this.ensureTerrainAt(wx, wz);

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
