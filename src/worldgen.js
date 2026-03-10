// ============================================================
// Procedural World Generation
// Biomes, terrain, caves, ores, trees
// ============================================================

import { SimplexNoise } from './noise.js';
import {
  CHUNK_SIZE, CHUNK_HEIGHT, SEA_LEVEL, WORLD_HEIGHT,
  BlockType, Biome, BiomeData,
} from './blocks.js';

export class WorldGenerator {
  constructor(seed = 42) {
    this.seed = seed;
    this.terrainNoise = new SimplexNoise(seed);
    this.biomeNoise = new SimplexNoise(seed + 1);
    this.caveNoise = new SimplexNoise(seed + 2);
    this.oreNoise = new SimplexNoise(seed + 3);
    this.detailNoise = new SimplexNoise(seed + 4);
    this.treeNoise = new SimplexNoise(seed + 5);
    this.cavernNoise = new SimplexNoise(seed + 6);
    this.structureNoise = new SimplexNoise(seed + 7);
  }

  // Determine biome at a world (x, z) position
  getBiome(wx, wz) {
    const temp = this.biomeNoise.fractal2D(wx * 0.003, wz * 0.003, 3);
    const moisture = this.biomeNoise.fractal2D(wx * 0.003 + 500, wz * 0.003 + 500, 3);
    const elev = this.terrainNoise.fractal2D(wx * 0.005, wz * 0.005, 2);
    const weirdness = this.detailNoise.fractal2D(wx * 0.004 + 1000, wz * 0.004 + 1000, 2);

    // Mushroom island — rare, needs specific conditions
    if (weirdness > 0.55 && moisture > 0.3 && elev < -0.2) return Biome.MUSHROOM_ISLAND;

    // Frozen
    if (temp < -0.4) {
      if (elev < -0.35) return Biome.FROZEN_OCEAN;
      return Biome.TUNDRA;
    }

    // Cold
    if (temp < -0.15) {
      if (moisture > 0.1) return Biome.TAIGA;
      if (elev > 0.4) return Biome.MOUNTAINS;
      return Biome.TUNDRA;
    }

    // Hot
    if (temp > 0.4) {
      if (moisture > 0.3) return Biome.JUNGLE;
      if (moisture < -0.2) {
        if (weirdness > 0.2) return Biome.MESA;
        return Biome.DESERT;
      }
      return Biome.SAVANNA;
    }

    // Temperate
    if (temp > 0.1) {
      if (moisture > 0.3) return Biome.BIRCH_FOREST;
      if (moisture > 0.05) return Biome.FOREST;
      if (moisture < -0.2) return Biome.DESERT;
      return Biome.PLAINS;
    }

    // Moderate
    if (moisture > 0.2) return Biome.FOREST;
    if (elev > 0.4) return Biome.MOUNTAINS;
    if (elev < -0.35) return Biome.OCEAN;
    if (moisture > 0.0 && elev < -0.1) return Biome.SWAMP;
    return Biome.PLAINS;
  }

  // Get terrain height at world (x, z)
  getHeight(wx, wz, biome) {
    const bd = BiomeData[biome];
    const n1 = this.terrainNoise.fractal2D(wx * 0.01, wz * 0.01, 4);
    const n2 = this.detailNoise.fractal2D(wx * 0.05, wz * 0.05, 2) * 0.3;

    let height = bd.baseHeight + (n1 + n2) * bd.heightVariation;

    if (biome === Biome.MOUNTAINS) {
      const ridge = Math.abs(this.terrainNoise.fractal2D(wx * 0.015, wz * 0.015, 3));
      height += ridge * 20;
    }

    if (biome === Biome.MESA) {
      // Layered terrain with plateaus
      const plateau = Math.abs(this.detailNoise.fractal2D(wx * 0.02, wz * 0.02, 2));
      if (plateau > 0.3) height += 8;
    }

    return Math.floor(Math.max(1, Math.min(height, WORLD_HEIGHT - 2)));
  }

  // Check if a cave exists at world (x, y, z)
  isCave(wx, wy, wz) {
    if (wy <= 1 || wy >= WORLD_HEIGHT - 1) return false;
    // Regular tunnels
    const cave1 = this.caveNoise.noise3D(wx * 0.05, wy * 0.07, wz * 0.05);
    const cave2 = this.caveNoise.noise3D(wx * 0.08, wy * 0.05, wz * 0.08);
    if (Math.abs(cave1) < 0.08 && Math.abs(cave2) < 0.08) return true;
    return false;
  }

  // Large caverns — open underground spaces
  isCavern(wx, wy, wz) {
    if (wy <= 2 || wy > 45) return false;
    const v = this.cavernNoise.noise3D(wx * 0.02, wy * 0.03, wz * 0.02);
    const flatness = this.cavernNoise.noise3D(wx * 0.01, wy * 0.015, wz * 0.01);
    // Large open spaces below Y=40
    return v > 0.55 && flatness > 0.3;
  }

  // Underground lake check
  isUndergroundLake(wx, wy, wz) {
    if (wy <= 5 || wy > 35) return false;
    const v = this.cavernNoise.noise3D(wx * 0.02, wy * 0.02, wz * 0.02);
    const flat = this.cavernNoise.noise3D(wx * 0.015, 0.5, wz * 0.015);
    return v > 0.55 && flat > 0.35 && wy < 25;
  }

  // Determine ore type at position
  getOre(wx, wy, wz) {
    const v = this.oreNoise.noise3D(wx * 0.1, wy * 0.1, wz * 0.1);
    if (wy < 16 && v > 0.78) return BlockType.DIAMOND_ORE;
    if (wy < 16 && v > 0.75) return BlockType.EMERALD_ORE;
    if (wy < 32 && v > 0.72) return BlockType.GOLD_ORE;
    if (wy < 32 && v > 0.69) return BlockType.LAPIS_ORE;
    if (wy < 48 && v > 0.66) return BlockType.REDSTONE_ORE;
    if (wy < 64 && v > 0.65) return BlockType.IRON_ORE;
    if (wy < 80 && v > 0.6) return BlockType.COAL_ORE;
    return null;
  }

  // Generate a full chunk of block data
  generateChunkData(cx, cz) {
    const blocks = new Uint8Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE);

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;

        const biome = this.getBiome(wx, wz);
        const surfaceHeight = this.getHeight(wx, wz, biome);
        const bd = BiomeData[biome];

        for (let y = 0; y < CHUNK_HEIGHT; y++) {
          const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + y * CHUNK_SIZE + lz;

          // Bedrock layer
          if (y === 0) {
            blocks[idx] = BlockType.BEDROCK;
            continue;
          }

          // Check for caves + caverns
          const inCave = y < surfaceHeight - 5 && this.isCave(wx, y, wz);
          const inCavern = this.isCavern(wx, y, wz);

          if (inCave || inCavern) {
            // Underground lake: fill cavern bottom with water
            if (inCavern && this.isUndergroundLake(wx, y, wz)) {
              blocks[idx] = BlockType.WATER;
            } else {
              blocks[idx] = BlockType.AIR;
            }
            continue;
          }

          if (y > surfaceHeight) {
            if (y <= SEA_LEVEL) {
              // Frozen ocean gets ice on top
              if (biome === Biome.FROZEN_OCEAN && y === SEA_LEVEL) {
                blocks[idx] = BlockType.ICE;
              } else {
                blocks[idx] = BlockType.WATER;
              }
            } else {
              blocks[idx] = BlockType.AIR;
            }
          } else if (y === surfaceHeight) {
            // Surface block
            if (surfaceHeight <= SEA_LEVEL + 1 && biome !== Biome.OCEAN && biome !== Biome.FROZEN_OCEAN && biome !== Biome.SWAMP) {
              blocks[idx] = BlockType.SAND;
            } else if (biome === Biome.MOUNTAINS && surfaceHeight > 70) {
              blocks[idx] = BlockType.SNOW;
            } else if (biome === Biome.MESA) {
              // Layered terracotta
              if (y % 4 === 0) blocks[idx] = BlockType.TERRACOTTA;
              else if (y % 4 === 2) blocks[idx] = BlockType.RED_SAND;
              else blocks[idx] = BlockType.TERRACOTTA;
            } else {
              blocks[idx] = bd.surfaceBlock;
            }
          } else if (y > surfaceHeight - 4) {
            // Subsurface
            if (biome === Biome.MESA) {
              blocks[idx] = BlockType.TERRACOTTA;
            } else {
              blocks[idx] = bd.subBlock;
            }
          } else {
            // Deep underground: stone + ores
            const ore = this.getOre(wx, y, wz);
            blocks[idx] = ore || BlockType.STONE;
          }
        }
      }
    }

    // Generate trees & vegetation
    this._generateTrees(blocks, cx, cz);
    // Generate structures
    this._generateStructures(blocks, cx, cz);

    return blocks;
  }

  _generateTrees(blocks, cx, cz) {
    for (let lx = 2; lx < CHUNK_SIZE - 2; lx++) {
      for (let lz = 2; lz < CHUNK_SIZE - 2; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const biome = this.getBiome(wx, wz);
        const bd = BiomeData[biome];

        if (bd.treeChance <= 0) continue;

        const treeVal = (this.treeNoise.noise2D(wx * 0.5, wz * 0.5) + 1) / 2;
        if (treeVal > bd.treeChance * 10) continue;

        // Find surface
        let surfaceY = -1;
        for (let y = CHUNK_HEIGHT - 1; y > SEA_LEVEL; y--) {
          const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + y * CHUNK_SIZE + lz;
          const block = blocks[idx];
          if (block === BlockType.GRASS || block === BlockType.DIRT || block === BlockType.SNOW ||
              block === BlockType.PODZOL || block === BlockType.MYCELIUM) {
            surfaceY = y;
            break;
          }
        }

        if (surfaceY < SEA_LEVEL + 2) continue;

        // Place tree based on biome
        switch (biome) {
          case Biome.DESERT:
            this._placeCactus(blocks, lx, surfaceY + 1, lz);
            break;
          case Biome.JUNGLE:
            this._placeJungleTree(blocks, lx, surfaceY + 1, lz);
            break;
          case Biome.BIRCH_FOREST:
            this._placeBirchTree(blocks, lx, surfaceY + 1, lz);
            break;
          case Biome.TAIGA:
            this._placeSpruceTree(blocks, lx, surfaceY + 1, lz);
            break;
          case Biome.SAVANNA:
            this._placeAcaciaTree(blocks, lx, surfaceY + 1, lz);
            break;
          case Biome.MUSHROOM_ISLAND:
            this._placeGiantMushroom(blocks, lx, surfaceY + 1, lz);
            break;
          case Biome.SWAMP:
            this._placeSwampTree(blocks, lx, surfaceY + 1, lz);
            break;
          default:
            this._placeTree(blocks, lx, surfaceY + 1, lz);
            break;
        }
      }
    }
  }

  _placeTree(blocks, lx, baseY, lz) {
    const trunkHeight = 4 + Math.floor(Math.random() * 3);
    for (let y = 0; y < trunkHeight; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz;
      blocks[idx] = BlockType.WOOD;
    }
    const leafStart = baseY + trunkHeight - 2;
    for (let dy = 0; dy < 4; dy++) {
      const ly = leafStart + dy;
      if (ly >= CHUNK_HEIGHT) break;
      const radius = dy < 3 ? 2 : 1;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < 2) continue;
          const nx = lx + dx;
          const nz = lz + dz;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
          if (Math.abs(dx) === radius && Math.abs(dz) === radius && dy < 3) continue;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + ly * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) {
            blocks[idx] = BlockType.LEAVES;
          }
        }
      }
    }
  }

  _placeJungleTree(blocks, lx, baseY, lz) {
    const trunkHeight = 7 + Math.floor(Math.random() * 5);
    for (let y = 0; y < trunkHeight; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz;
      blocks[idx] = BlockType.JUNGLE_WOOD;
    }
    // Large canopy
    const leafStart = baseY + trunkHeight - 3;
    for (let dy = 0; dy < 5; dy++) {
      const ly = leafStart + dy;
      if (ly >= CHUNK_HEIGHT) break;
      const radius = dy < 4 ? 3 : 1;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < 3) continue;
          const nx = lx + dx;
          const nz = lz + dz;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
          if (Math.abs(dx) === radius && Math.abs(dz) === radius) continue;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + ly * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) {
            blocks[idx] = BlockType.JUNGLE_LEAVES;
          }
        }
      }
    }
    // Vines (bamboo blocks) hanging from leaves
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        const nx = lx + dx; const nz = lz + dz;
        if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
        if (Math.abs(dx) < 2 && Math.abs(dz) < 2) continue;
        if (Math.random() > 0.3) continue;
        for (let vy = 0; vy < 3; vy++) {
          const y = leafStart - vy;
          if (y < baseY) break;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + y * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) blocks[idx] = BlockType.BAMBOO;
        }
      }
    }
  }

  _placeBirchTree(blocks, lx, baseY, lz) {
    const trunkHeight = 5 + Math.floor(Math.random() * 3);
    for (let y = 0; y < trunkHeight; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      blocks[lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz] = BlockType.BIRCH_WOOD;
    }
    const leafStart = baseY + trunkHeight - 2;
    for (let dy = 0; dy < 4; dy++) {
      const ly = leafStart + dy;
      if (ly >= CHUNK_HEIGHT) break;
      const radius = dy < 3 ? 2 : 1;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < 2) continue;
          const nx = lx + dx; const nz = lz + dz;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
          if (Math.abs(dx) === radius && Math.abs(dz) === radius && dy < 3) continue;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + ly * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) blocks[idx] = BlockType.BIRCH_LEAVES;
        }
      }
    }
  }

  _placeSpruceTree(blocks, lx, baseY, lz) {
    const trunkHeight = 6 + Math.floor(Math.random() * 4);
    for (let y = 0; y < trunkHeight; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      blocks[lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz] = BlockType.SPRUCE_WOOD;
    }
    // Conical canopy
    for (let dy = 1; dy < trunkHeight; dy++) {
      const ly = baseY + dy;
      if (ly >= CHUNK_HEIGHT) break;
      const radius = Math.max(0, Math.floor((trunkHeight - dy) / 2));
      if (radius === 0) {
        // Top
        const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + (baseY + trunkHeight) * CHUNK_SIZE + lz;
        if (baseY + trunkHeight < CHUNK_HEIGHT && blocks[idx] === BlockType.AIR)
          blocks[idx] = BlockType.SPRUCE_LEAVES;
        continue;
      }
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0) continue;
          const nx = lx + dx; const nz = lz + dz;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
          if (Math.abs(dx) === radius && Math.abs(dz) === radius) continue;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + ly * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) blocks[idx] = BlockType.SPRUCE_LEAVES;
        }
      }
    }
  }

  _placeAcaciaTree(blocks, lx, baseY, lz) {
    const trunkHeight = 4 + Math.floor(Math.random() * 2);
    for (let y = 0; y < trunkHeight; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      blocks[lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz] = BlockType.ACACIA_WOOD;
    }
    // Flat canopy
    const ly = baseY + trunkHeight;
    for (let dy = 0; dy < 2; dy++) {
      const cy = ly + dy;
      if (cy >= CHUNK_HEIGHT) break;
      const radius = dy === 0 ? 3 : 2;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          const nx = lx + dx; const nz = lz + dz;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
          if (Math.abs(dx) + Math.abs(dz) > radius + 1) continue;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + cy * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) blocks[idx] = BlockType.ACACIA_LEAVES;
        }
      }
    }
  }

  _placeGiantMushroom(blocks, lx, baseY, lz) {
    const height = 5 + Math.floor(Math.random() * 3);
    for (let y = 0; y < height; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      blocks[lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz] = BlockType.MUSHROOM_STEM;
    }
    // Mushroom cap
    const capY = baseY + height;
    for (let dy = 0; dy < 2; dy++) {
      const cy = capY + dy;
      if (cy >= CHUNK_HEIGHT) break;
      const radius = dy === 0 ? 3 : 2;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          const nx = lx + dx; const nz = lz + dz;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
          if (Math.abs(dx) === radius && Math.abs(dz) === radius) continue;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + cy * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) blocks[idx] = BlockType.MUSHROOM_BLOCK;
        }
      }
    }
  }

  _placeSwampTree(blocks, lx, baseY, lz) {
    const trunkHeight = 3 + Math.floor(Math.random() * 2);
    for (let y = 0; y < trunkHeight; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      blocks[lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz] = BlockType.WOOD;
    }
    // Wider, droopy canopy
    const leafStart = baseY + trunkHeight - 1;
    for (let dy = 0; dy < 3; dy++) {
      const ly = leafStart + dy;
      if (ly >= CHUNK_HEIGHT) break;
      const radius = dy === 0 ? 2 : (dy === 1 ? 3 : 1);
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy === 0) continue;
          const nx = lx + dx; const nz = lz + dz;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) continue;
          const idx = nx * CHUNK_HEIGHT * CHUNK_SIZE + ly * CHUNK_SIZE + nz;
          if (blocks[idx] === BlockType.AIR) blocks[idx] = BlockType.LEAVES;
        }
      }
    }
  }

  _placeCactus(blocks, lx, baseY, lz) {
    const height = 2 + Math.floor(Math.random() * 2);
    for (let y = 0; y < height; y++) {
      const ty = baseY + y;
      if (ty >= CHUNK_HEIGHT) break;
      const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + ty * CHUNK_SIZE + lz;
      blocks[idx] = BlockType.LEAVES;
    }
  }

  // Procedural structures: dungeons, ruins, village hints
  _generateStructures(blocks, cx, cz) {
    const wx = cx * CHUNK_SIZE + 8;
    const wz = cz * CHUNK_SIZE + 8;

    // Use structure noise for deterministic placement
    const structVal = this.structureNoise.noise2D(wx * 0.02, wz * 0.02);
    const structVal2 = this.structureNoise.noise2D(wx * 0.008, wz * 0.008);

    // Dungeon (underground)
    if (structVal > 0.72 && structVal2 > 0.3) {
      this._placeDungeon(blocks, cx, cz);
    }

    // Surface ruins
    if (structVal < -0.7 && structVal2 < -0.2) {
      this._placeRuin(blocks, cx, cz);
    }

    // Village house
    const biome = this.getBiome(wx, wz);
    if ((biome === Biome.PLAINS || biome === Biome.SAVANNA) && structVal2 > 0.55) {
      this._placeVillageHouse(blocks, cx, cz, biome);
    }
  }

  _placeDungeon(blocks, cx, cz) {
    // Small underground room at Y=20-30
    const roomY = 20 + Math.floor(Math.random() * 10);
    const roomX = 4; const roomZ = 4;
    const roomW = 5; const roomD = 5; const roomH = 4;

    for (let dx = 0; dx < roomW; dx++) {
      for (let dz = 0; dz < roomD; dz++) {
        for (let dy = 0; dy < roomH; dy++) {
          const lx = roomX + dx;
          const lz = roomZ + dz;
          const y = roomY + dy;
          if (lx >= CHUNK_SIZE || lz >= CHUNK_SIZE || y >= CHUNK_HEIGHT) continue;
          const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + y * CHUNK_SIZE + lz;

          // Walls
          if (dx === 0 || dx === roomW - 1 || dz === 0 || dz === roomD - 1 || dy === 0) {
            blocks[idx] = (dx + dy + dz) % 3 === 0 ? BlockType.MOSSY_COBBLESTONE : BlockType.COBBLESTONE;
          } else if (dy === roomH - 1) {
            blocks[idx] = BlockType.CRACKED_STONE_BRICK;
          } else {
            blocks[idx] = BlockType.AIR;
          }
        }
      }
    }

    // Place chest in dungeon center
    const chestIdx = (roomX + 2) * CHUNK_HEIGHT * CHUNK_SIZE + (roomY + 1) * CHUNK_SIZE + (roomZ + 2);
    if (chestIdx < blocks.length) blocks[chestIdx] = BlockType.CHEST;

    // Place torch
    const torchIdx = (roomX + 1) * CHUNK_HEIGHT * CHUNK_SIZE + (roomY + 2) * CHUNK_SIZE + (roomZ + 1);
    if (torchIdx < blocks.length) blocks[torchIdx] = BlockType.TORCH;
  }

  _placeRuin(blocks, cx, cz) {
    const wx = cx * CHUNK_SIZE + 5;
    const wz = cz * CHUNK_SIZE + 5;
    const biome = this.getBiome(wx, wz);
    const surfaceHeight = this.getHeight(wx, wz, biome);
    if (surfaceHeight <= SEA_LEVEL) return;

    const baseY = surfaceHeight + 1;
    const ruinW = 4; const ruinD = 4; const ruinH = 3;

    for (let dx = 0; dx < ruinW; dx++) {
      for (let dz = 0; dz < ruinD; dz++) {
        const lx = 5 + dx; const lz = 5 + dz;
        if (lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) continue;
        for (let dy = 0; dy < ruinH; dy++) {
          const y = baseY + dy;
          if (y >= CHUNK_HEIGHT) continue;
          const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + y * CHUNK_SIZE + lz;
          // Crumbling walls with gaps
          if ((dx === 0 || dx === ruinW - 1 || dz === 0 || dz === ruinD - 1) && Math.random() > 0.3) {
            blocks[idx] = Math.random() > 0.5 ? BlockType.MOSSY_STONE_BRICK : BlockType.CRACKED_STONE_BRICK;
          }
        }
      }
    }

    // Loot chest inside ruin
    const chestIdx = 6 * CHUNK_HEIGHT * CHUNK_SIZE + baseY * CHUNK_SIZE + 6;
    if (chestIdx < blocks.length) blocks[chestIdx] = BlockType.CHEST;
  }

  _placeVillageHouse(blocks, cx, cz, biome) {
    const wx = cx * CHUNK_SIZE + 6;
    const wz = cz * CHUNK_SIZE + 6;
    const surfaceHeight = this.getHeight(wx, wz, biome);
    if (surfaceHeight <= SEA_LEVEL) return;

    const baseY = surfaceHeight + 1;
    const houseW = 5; const houseD = 5; const houseH = 4;
    const wallBlock = biome === Biome.SAVANNA ? BlockType.ACACIA_WOOD : BlockType.PLANKS;
    const roofBlock = biome === Biome.SAVANNA ? BlockType.ACACIA_LEAVES : BlockType.COBBLESTONE;

    for (let dx = 0; dx < houseW; dx++) {
      for (let dz = 0; dz < houseD; dz++) {
        const lx = 6 + dx; const lz = 6 + dz;
        if (lx >= CHUNK_SIZE || lz >= CHUNK_SIZE) continue;
        for (let dy = 0; dy < houseH; dy++) {
          const y = baseY + dy;
          if (y >= CHUNK_HEIGHT) continue;
          const idx = lx * CHUNK_HEIGHT * CHUNK_SIZE + y * CHUNK_SIZE + lz;

          if (dy === 0) {
            blocks[idx] = BlockType.COBBLESTONE; // Floor
          } else if (dy === houseH - 1) {
            blocks[idx] = roofBlock; // Roof
          } else if (dx === 0 || dx === houseW - 1 || dz === 0 || dz === houseD - 1) {
            // Door opening
            if (dx === 2 && dz === 0 && dy <= 2) {
              blocks[idx] = BlockType.AIR;
            } else {
              blocks[idx] = wallBlock;
            }
          } else {
            blocks[idx] = BlockType.AIR;
          }
        }
      }
    }

    // Torch inside
    const torchIdx = 8 * CHUNK_HEIGHT * CHUNK_SIZE + (baseY + 2) * CHUNK_SIZE + 8;
    if (torchIdx < blocks.length) blocks[torchIdx] = BlockType.TORCH;
    
    // Chest inside
    const chestIdx = 7 * CHUNK_HEIGHT * CHUNK_SIZE + (baseY + 1) * CHUNK_SIZE + 9;
    if (chestIdx < blocks.length) blocks[chestIdx] = BlockType.CHEST;
  }

  // Get block index within chunk data array
  static blockIndex(lx, ly, lz) {
    return lx * CHUNK_HEIGHT * CHUNK_SIZE + ly * CHUNK_SIZE + lz;
  }
}
