// ============================================================
// Chunk block storage and visible-face meshing
// Optimized: only emits faces between solid and non-solid blocks
// ============================================================

import * as THREE from 'three';
import {
  CHUNK_SIZE, CHUNK_HEIGHT,
  BlockType, BlockData,
} from './blocks.js';
import { WATER_LAYER } from './environment-graphics.js';
import { WorldGenerator } from './worldgen.js';

const _surfacePoint = new THREE.Vector3();

// Face directions: [dx, dy, dz], corners (relative), and base UV mapping for each corner
const FACES = [
  { dir: [1, 0, 0], corners: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], uvs: [[1, 0], [1, 1], [0, 1], [0, 0]] }, // +X right
  { dir: [-1, 0, 0], corners: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]], uvs: [[1, 0], [1, 1], [0, 1], [0, 0]] }, // -X left
  { dir: [0, 1, 0], corners: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]], uvs: [[0, 0], [1, 0], [1, 1], [0, 1]] }, // +Y top
  { dir: [0, -1, 0], corners: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], uvs: [[0, 1], [1, 1], [1, 0], [0, 0]] }, // -Y bottom
  { dir: [0, 0, 1], corners: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], uvs: [[0, 0], [1, 0], [1, 1], [0, 1]] }, // +Z front
  { dir: [0, 0, -1], corners: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]], uvs: [[0, 0], [1, 0], [1, 1], [0, 1]] }, // -Z back
];

export class Chunk {
  constructor(cx, cz, world) {
    this.cx = cx;
    this.cz = cz;
    this.world = world;
    this.blocks = null;
    this.metadata = null;
    this.mesh = null;
    this.waterMesh = null;
    this.dirty = true;
    this.generated = false;
  }

  generate(generator) {
    this.installBlocks(generator.generateChunkData(this.cx, this.cz));
  }

  installBlocks(blocks) {
    this.blocks = blocks;
    this.metadata = new Uint8Array(blocks.length);
    this.world.applyChunkEdits(this);
    this.generated = true;
    this.dirty = true;
  }

  getBlock(lx, ly, lz) {
    if (lx < 0 || lx >= CHUNK_SIZE || lz < 0 || lz >= CHUNK_SIZE || ly < 0 || ly >= CHUNK_HEIGHT) {
      // Fetch from neighbor chunk
      return this.world.getBlock(
        this.cx * CHUNK_SIZE + lx,
        ly,
        this.cz * CHUNK_SIZE + lz
      );
    }
    if (!this.blocks) return BlockType.AIR;
    return this.blocks[WorldGenerator.blockIndex(lx, ly, lz)];
  }

  setBlock(lx, ly, lz, type) {
    if (!this.blocks) return;
    if (lx < 0 || lx >= CHUNK_SIZE || lz < 0 || lz >= CHUNK_SIZE || ly < 0 || ly >= CHUNK_HEIGHT) return;
    const idx = WorldGenerator.blockIndex(lx, ly, lz);
    this.blocks[idx] = type;
    this.metadata[idx] = 0; // reset metadata on place
    this.dirty = true;
  }

  getMetadata(lx, ly, lz) {
    if (lx < 0 || lx >= CHUNK_SIZE || lz < 0 || lz >= CHUNK_SIZE || ly < 0 || ly >= CHUNK_HEIGHT) {
      return this.world.getMetadata(
        this.cx * CHUNK_SIZE + lx,
        ly,
        this.cz * CHUNK_SIZE + lz
      );
    }
    if (!this.metadata) return 0;
    return this.metadata[WorldGenerator.blockIndex(lx, ly, lz)];
  }

  setMetadata(lx, ly, lz, value) {
    if (!this.metadata) return;
    if (lx < 0 || lx >= CHUNK_SIZE || lz < 0 || lz >= CHUNK_SIZE || ly < 0 || ly >= CHUNK_HEIGHT) return;
    const index = WorldGenerator.blockIndex(lx, ly, lz);
    if (this.metadata[index] === value) return;
    this.metadata[index] = value;
    this.dirty = true;
  }

  buildMesh(scene, materials) {
    if (!this.blocks) return;
    this.installMesh(scene, materials, this.createMeshData());
    this.dirty = false;
    this.borderDirty = false;
  }

  // Cull hidden faces and return transferable arrays for the renderer.
  createMeshData() {

    const positions = [];
    const normals = [];
    const colors = [];
    const uvs = [];
    const indices = [];
    // Water gets a separate transparent mesh
    const waterPositions = [];
    const waterNormals = [];
    const surfaceBounds = new Map();
    const waterUvs = [];
    const waterIndices = [];

    let vertCount = 0;
    let waterVertCount = 0;

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let ly = 0; ly < CHUNK_HEIGHT; ly++) {
        for (let lz = 0; lz < CHUNK_SIZE; lz++) {
          const blockType = this.blocks[WorldGenerator.blockIndex(lx, ly, lz)];
          if (blockType === BlockType.AIR) continue;

          const bd = BlockData[blockType];
          if (!bd) continue;

          const isWater = blockType === BlockType.WATER;
          const wx = this.cx * CHUNK_SIZE + lx;
          const wz = this.cz * CHUNK_SIZE + lz;

          for (const face of FACES) {
            const nx = lx + face.dir[0];
            const ny = ly + face.dir[1];
            const nz = lz + face.dir[2];

            const neighbor = this.getBlock(nx, ny, nz);
            const neighborData = BlockData[neighbor];

            // Only emit face if neighbor is transparent (and not same block type for water)
            const shouldRender = isWater
              ? (neighbor !== BlockType.WATER && (!neighborData || !neighborData.solid))
              : (!neighborData || neighborData.transparent);

            if (!shouldRender) continue;

            const pArr = isWater ? waterPositions : positions;
            const nArr = isWater ? waterNormals : normals;
            const uArr = isWater ? waterUvs : uvs;
            const iArr = isWater ? waterIndices : indices;
            const vc = isWater ? waterVertCount : vertCount;

            // --- TEXTURE UV CALCULATIONS ---
            let blockUV = bd.uv;
            if (face.dir[1] === 1 && bd.uvTop) blockUV = bd.uvTop;
            else if (face.dir[1] === -1 && bd.uvBottom) blockUV = bd.uvBottom;
            else if (face.dir[2] === 1 && bd.uvFront) blockUV = bd.uvFront; // mostly for furnace
            else if (face.dir[1] === 0 && bd.uvSide) blockUV = bd.uvSide;

            if (!blockUV) blockUV = [0, 0]; // fallback

            // Texture atlas is 16 tiles by 16 tiles
            const uOffset = blockUV[0] * (1 / 16);
            const vOffset = 1.0 - (blockUV[1] * (1 / 16)) - (1 / 16);

            // --- THIN BLOCK LOGIC ---
            // If the block is thin, we adjust the corner offsets
            let offsetZ1 = 0, offsetZ2 = 1;
            let offsetX1 = 0, offsetX2 = 1;

            if (bd.thin) {
              const isOpenDoor = blockType === BlockType.DOOR && this.world.isDoorOpen(wx, ly, wz);
              // A closed door is thin along Z, an open door is thin along X
              const axis = isOpenDoor ? 'x' : bd.thin;

              if (axis === 'z') {
                // Flat against the Z edge
                offsetZ1 = 0.4;
                offsetZ2 = 0.6;
              } else if (axis === 'x') {
                // Flat against the X edge
                offsetX1 = 0.4;
                offsetX2 = 0.6;
              }
            }

            for (let c = 0; c < 4; c++) {
              const corner = face.corners[c];
              const baseUv = face.uvs[c];
              const cx = corner[0] === 0 ? offsetX1 : offsetX2;
              const cz = corner[2] === 0 ? offsetZ1 : offsetZ2;

              let cy = corner[1];
              if (isWater) {
                // Slope water based on flow level. 0 = full, 7 = almost flat.
                // Only slope the top face vertices (where corner[1] == 1)
                if (cy === 1) {
                  const meta = this.metadata ? this.metadata[WorldGenerator.blockIndex(lx, ly, lz)] : 0;
                  // Source blocks (0) and falling water (1) are near full height.
                  // Spreading water (2-7) gets lower.
                  if (meta > 0 && meta < 7) {
                    // Try to make it a bit lower if down flow
                    cy = 1.0 - (meta * 0.125); // Drops by 1/8th of a block per step
                  } else if (meta === 7) {
                    cy = 0.15; // Lowest noticeable sliver
                  }

                  // Also want to average with neighbors for true smooth slope, but simple slope per block is okay for VoxelCraft initially.
                }

                // Entire water block is slightly lowered to avoid z-fighting with shore
                cy -= 0.1;
              }

              pArr.push(wx + cx, ly + cy, wz + cz);
              if (isWater && face.dir[1] === 1) {
                const height = ly + cy;
                if (!surfaceBounds.has(height)) surfaceBounds.set(height, new THREE.Box3());
                const bounds = surfaceBounds.get(height);
                bounds.min.min(_surfacePoint.set(wx + cx, height, wz + cz));
                bounds.max.max(_surfacePoint);
              } else if (!isWater) {
                const [dx, dy, dz] = face.dir;
                const vx = corner[0] * 2 - 1;
                const vy = corner[1] * 2 - 1;
                const vz = corner[2] * 2 - 1;
                const sideA = this._occludes(nx + (dx === 0 ? vx : 0), ny + (dx !== 0 ? vy : 0), nz);
                const sideB = this._occludes(nx, ny + (dz !== 0 ? vy : 0), nz + (dz === 0 ? vz : 0));
                const diagonal = this._occludes(nx + (dx === 0 ? vx : 0), ny + (dy === 0 ? vy : 0), nz + (dz === 0 ? vz : 0));
                const shade = 1 - 0.14 * (sideA && sideB ? 3 : sideA + sideB + diagonal);
                const light = Math.round(shade * 255);
                colors.push(light, light, light);
              }
              nArr.push(face.dir[0] * 127, face.dir[1] * 127, face.dir[2] * 127);

              const finalU = uOffset + baseUv[0] * (1 / 16);
              const finalV = vOffset + baseUv[1] * (1 / 16);
              uArr.push(finalU, finalV);
            }

            iArr.push(vc, vc + 1, vc + 2, vc, vc + 2, vc + 3);

            if (isWater) waterVertCount += 4;
            else vertCount += 4;
          }
        }
      }
    }

    const solid = positions.length ? {
      positions: new Float32Array(positions),
      normals: new Int8Array(normals),
      colors: new Uint8Array(colors),
      uvs: new Float32Array(uvs),
      indices: vertCount > 65535 ? new Uint32Array(indices) : new Uint16Array(indices),
    } : null;
    const water = waterPositions.length ? {
      positions: new Float32Array(waterPositions),
      normals: new Int8Array(waterNormals),
      uvs: new Float32Array(waterUvs),
      indices: waterVertCount > 65535 ? new Uint32Array(waterIndices) : new Uint16Array(waterIndices),
    } : null;
    const bounds = [...surfaceBounds.values()].map(box => [...box.min.toArray(), ...box.max.toArray()]);
    return { solid, water, bounds };
  }

  installMesh(scene, materials, { solid, water, bounds }) {
    this._removeMeshes(scene);
    if (solid) {
      const material = materials?.solid ?? new THREE.MeshLambertMaterial({ vertexColors: true });
      this.mesh = this._meshFromData(solid, material, !materials);
      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;
      scene.add(this.mesh);
    }

    if (water) {
      const material = materials?.water ?? new THREE.MeshLambertMaterial({
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      this.waterMesh = this._meshFromData(water, material, !materials);
      this.waterMesh.userData.surfaceBounds = bounds.map(([x0, y0, z0, x1, y1, z1]) =>
        new THREE.Box3(new THREE.Vector3(x0, y0, z0), new THREE.Vector3(x1, y1, z1)));
      if (materials) this.waterMesh.layers.set(WATER_LAYER);
      scene.add(this.waterMesh);
    }
  }

  _meshFromData(data, material, ownsMaterial) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3, true));
    geometry.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
    geometry.setIndex(new THREE.BufferAttribute(data.indices, 1));
    if (data.colors) geometry.setAttribute('color', new THREE.BufferAttribute(data.colors, 3, true));

    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData.isChunk = true;
    mesh.userData.ownsMaterial = ownsMaterial;
    return mesh;
  }

  _occludes(x, y, z) {
    const block = BlockData[this.getBlock(x, y, z)];
    return Number(Boolean(block?.solid && !block.transparent && !block.thin));
  }

  _removeMeshes(scene) {
    if (this.mesh) {
      scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      if (this.mesh.userData.ownsMaterial) this.mesh.material.dispose();
      this.mesh = null;
    }
    if (this.waterMesh) {
      scene.remove(this.waterMesh);
      this.waterMesh.geometry.dispose();
      if (this.waterMesh.userData.ownsMaterial) this.waterMesh.material.dispose();
      this.waterMesh = null;
    }
  }

  dispose(scene) {
    this._removeMeshes(scene);
    this.blocks = null;
  }
}
