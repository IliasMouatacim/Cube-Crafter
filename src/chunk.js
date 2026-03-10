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

// Face directions: [dx, dy, dz, faceIndex]
const FACES = [
  { dir: [1, 0, 0], corners: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], uvRow: 0 }, // +X right
  { dir: [-1, 0, 0], corners: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]], uvRow: 1 }, // -X left
  { dir: [0, 1, 0], corners: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]], uvRow: 2 }, // +Y top
  { dir: [0, -1, 0], corners: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], uvRow: 3 }, // -Y bottom
  { dir: [0, 0, 1], corners: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], uvRow: 4 }, // +Z front
  { dir: [0, 0, -1], corners: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]], uvRow: 5 }, // -Z back
];

export class Chunk {
  constructor(cx, cz, world) {
    this.cx = cx;
    this.cz = cz;
    this.world = world;
    this.blocks = null;
    this.mesh = null;
    this.waterMesh = null;
    this.dirty = true;
    this.generated = false;
  }

  generate(generator) {
    this.blocks = generator.generateChunkData(this.cx, this.cz);
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
    this.blocks[WorldGenerator.blockIndex(lx, ly, lz)] = type;
    this.dirty = true;
  }

  // Build optimized mesh using greedy-ish face culling
  buildMesh(scene) {
    if (!this.blocks) return;

    const positions = [];
    const normals = [];
    const colors = [];
    const indices = [];
    // Water gets a separate transparent mesh
    const waterPositions = [];
    const waterNormals = [];
    const waterColors = [];
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
            const iArr = isWater ? waterIndices : indices;
            const vc = isWater ? waterVertCount : vertCount;

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

            for (const corner of face.corners) {
              const cx = corner[0] === 0 ? offsetX1 : offsetX2;
              const cz = corner[2] === 0 ? offsetZ1 : offsetZ2;
              pArr.push(wx + cx, ly + corner[1] - (isWater ? 0.1 : 0), wz + cz);
              nArr.push(face.dir[0], face.dir[1], face.dir[2]);
              cArr.push(_tmpColor.r, _tmpColor.g, _tmpColor.b);
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
      geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geom.setIndex(indices);

      const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
      this.mesh = new THREE.Mesh(geom, mat);
      this.mesh.userData.isChunk = true;
      scene.add(this.mesh);
    }

    // Create water mesh (transparent)
    if (waterPositions.length > 0) {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(waterPositions, 3));
      geom.setAttribute('normal', new THREE.Float32BufferAttribute(waterNormals, 3));
      geom.setAttribute('color', new THREE.Float32BufferAttribute(waterColors, 3));
      geom.setIndex(waterIndices);

      const mat = new THREE.MeshLambertMaterial({
        vertexColors: true,
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
