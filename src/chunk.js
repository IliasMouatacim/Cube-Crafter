// ============================================================
// Chunk: data storage + greedy mesh generation
// Optimized: only emits faces between solid and non-solid blocks
// ============================================================

import * as THREE from 'three';
import {
  CHUNK_SIZE, CHUNK_HEIGHT,
  BlockType, BlockData,
} from './blocks.js';
import { WorldGenerator } from './worldgen.js';

// Reusable temp color for mesh building
const _tmpColor = new THREE.Color();

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
    this.blocks = generator.generateChunkData(this.cx, this.cz);
    this.metadata = new Uint8Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE);
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
    this.metadata[WorldGenerator.blockIndex(lx, ly, lz)] = value;
    this.dirty = true;
  }

  // Build optimized mesh using greedy-ish face culling
  buildMesh(scene, materials) {
    if (!this.blocks) return;

    const positions = [];
    const normals = [];
    const colors = [];
    const uvs = [];
    const indices = [];
    // Water gets a separate transparent mesh
    const waterPositions = [];
    const waterNormals = [];
    const waterColors = [];
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

            // Choose face color based on direction
            if (face.dir[1] === 1 && bd.topColor !== undefined) {
              _tmpColor.set(bd.topColor);
            } else if (face.dir[1] === -1 && bd.bottomColor !== undefined) {
              _tmpColor.set(bd.bottomColor);
            } else if (face.dir[1] === 0 && bd.sideColor !== undefined) {
              _tmpColor.set(bd.sideColor);
            } else {
              _tmpColor.set(bd.color);
            }

            // Simple ambient occlusion: darken based on face direction
            const ao = face.dir[1] === 1 ? 1.0 : face.dir[1] === -1 ? 0.6 : 0.8;
            _tmpColor.multiplyScalar(ao);

            const pArr = isWater ? waterPositions : positions;
            const nArr = isWater ? waterNormals : normals;
            const cArr = isWater ? waterColors : colors;
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
              nArr.push(face.dir[0], face.dir[1], face.dir[2]);

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

    // Remove old meshes
    this._removeMeshes(scene);

    // Create solid mesh
    if (positions.length > 0) {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geom.setIndex(indices);

      let mat = materials ? materials.solid : new THREE.MeshLambertMaterial();
      this.mesh = new THREE.Mesh(geom, mat);
      this.mesh.userData.isChunk = true;
      scene.add(this.mesh);
    }

    // Create water mesh (transparent)
    if (waterPositions.length > 0) {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(waterPositions, 3));
      geom.setAttribute('normal', new THREE.Float32BufferAttribute(waterNormals, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(waterUvs, 2));
      geom.setIndex(waterIndices);

      let mat = materials ? materials.water : new THREE.MeshLambertMaterial({
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      this.waterMesh = new THREE.Mesh(geom, mat);
      this.waterMesh.userData.isChunk = true;
      scene.add(this.waterMesh);
    }

    this.dirty = false;
  }

  _removeMeshes(scene) {
    if (this.mesh) {
      scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
      this.mesh = null;
    }
    if (this.waterMesh) {
      scene.remove(this.waterMesh);
      this.waterMesh.geometry.dispose();
      this.waterMesh.material.dispose();
      this.waterMesh = null;
    }
  }

  dispose(scene) {
    this._removeMeshes(scene);
    this.blocks = null;
  }
}
