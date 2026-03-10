// ============================================================
// Block Type Definitions & Game Constants
// ============================================================

export const CHUNK_SIZE = 16;
export const CHUNK_HEIGHT = 128;
export const WORLD_HEIGHT = 128;
export const SEA_LEVEL = 40;
export const RENDER_DISTANCE = 6; // chunks
export const GRAVITY = -24;
export const JUMP_FORCE = 9;
export const PLAYER_SPEED = 5;
export const SPRINT_MULTIPLIER = 1.6;
export const PLAYER_HEIGHT = 1.7;
export const PLAYER_WIDTH = 0.6;
export const REACH_DISTANCE = 6;
export const TICK_RATE = 20; // game ticks per second

// Block type IDs
export const BlockType = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  SAND: 4,
  WATER: 5,
  WOOD: 6,
  LEAVES: 7,
  COBBLESTONE: 8,
  PLANKS: 9,
  COAL_ORE: 10,
  IRON_ORE: 11,
  GOLD_ORE: 12,
  DIAMOND_ORE: 13,
  BEDROCK: 14,
  SNOW: 15,
  ICE: 16,
  CLAY: 17,
  GRAVEL: 18,
  CRAFTING_TABLE: 19,
  FURNACE: 20,
  GLASS: 21,
  BRICK: 22,
  OBSIDIAN: 23,
  TORCH: 24,
  SANDSTONE: 25,
  // New block types
  LAVA: 26,
  MOSSY_COBBLESTONE: 27,
  STONE_BRICK: 28,
  MOSSY_STONE_BRICK: 29,
  CRACKED_STONE_BRICK: 30,
  JUNGLE_WOOD: 31,
  JUNGLE_LEAVES: 32,
  BIRCH_WOOD: 33,
  BIRCH_LEAVES: 34,
  SPRUCE_WOOD: 35,
  SPRUCE_LEAVES: 36,
  ACACIA_WOOD: 37,
  ACACIA_LEAVES: 38,
  MUSHROOM_BLOCK: 39,
  MUSHROOM_STEM: 40,
  MYCELIUM: 41,
  PODZOL: 42,
  RED_SAND: 43,
  TERRACOTTA: 44,
  PACKED_ICE: 45,
  BLUE_ICE: 46,
  SOUL_SAND: 47,
  NETHERRACK: 48,
  GLOWSTONE: 49,
  CHEST: 50,
  BOOKSHELF: 51,
  COBWEB: 52,
  IRON_BLOCK: 53,
  GOLD_BLOCK: 54,
  DIAMOND_BLOCK: 55,
  EMERALD_ORE: 56,
  EMERALD_BLOCK: 57,
  WOOL: 58,
  HAY_BALE: 59,
  TNT: 60,
  LADDER: 61,
  FENCE: 62,
  DOOR: 63,
  REDSTONE_ORE: 64,
  LAPIS_ORE: 65,
  LAPIS_BLOCK: 66,
  QUARTZ: 67,
  PRISMARINE: 68,
  SEA_LANTERN: 69,
  CORAL: 70,
  BAMBOO: 71,
};

// Block properties: color (hex), hardness (seconds to break), transparent, tool, drops
export const BlockData = {
  [BlockType.AIR]: { name: 'Air', color: 0x000000, hardness: 0, transparent: true, solid: false },
  [BlockType.GRASS]: { name: 'Grass', color: 0x5B8C3E, hardness: 0.6, transparent: false, solid: true, topColor: 0x5B8C3E, sideColor: 0x8B6B3E, bottomColor: 0x8B6B3E, uvTop: [0, 0], uvSide: [2, 0], uvBottom: [1, 0] },
  [BlockType.DIRT]: { name: 'Dirt', color: 0x8B6B3E, hardness: 0.5, transparent: false, solid: true, uv: [1, 0] },
  [BlockType.STONE]: { name: 'Stone', color: 0x808080, hardness: 1.5, transparent: false, solid: true, drops: BlockType.COBBLESTONE, uv: [0, 1] },
  [BlockType.SAND]: { name: 'Sand', color: 0xDBC67B, hardness: 0.5, transparent: false, solid: true, uv: [3, 0] },
  [BlockType.WATER]: { name: 'Water', color: 0x3366AA, hardness: -1, transparent: true, solid: false, uv: [7, 3] },
  [BlockType.WOOD]: { name: 'Wood', color: 0x6B4226, hardness: 2.0, transparent: false, solid: true, topColor: 0x9B7B3E, sideColor: 0x6B4226, bottomColor: 0x9B7B3E, uvTop: [0, 2], uvSide: [1, 2], uvBottom: [0, 2] },
  [BlockType.LEAVES]: { name: 'Leaves', color: 0x3A7D32, hardness: 0.2, transparent: true, solid: true, uv: [5, 2] },
  [BlockType.COBBLESTONE]: { name: 'Cobblestone', color: 0x6B6B6B, hardness: 2.0, transparent: false, solid: true, uv: [1, 1] },
  [BlockType.PLANKS]: { name: 'Planks', color: 0xB8945A, hardness: 2.0, transparent: false, solid: true, uv: [4, 2] },
  [BlockType.COAL_ORE]: { name: 'Coal Ore', color: 0x4A4A4A, hardness: 3.0, transparent: false, solid: true, uv: [3, 1] },
  [BlockType.IRON_ORE]: { name: 'Iron Ore', color: 0xA08070, hardness: 3.0, transparent: false, solid: true, uv: [4, 1] },
  [BlockType.GOLD_ORE]: { name: 'Gold Ore', color: 0xC0A040, hardness: 3.0, transparent: false, solid: true, uv: [5, 1] },
  [BlockType.DIAMOND_ORE]: { name: 'Diamond Ore', color: 0x60C0E0, hardness: 3.0, transparent: false, solid: true, uv: [6, 1] },
  [BlockType.BEDROCK]: { name: 'Bedrock', color: 0x333333, hardness: -1, transparent: false, solid: true, uv: [2, 1] },
  [BlockType.SNOW]: { name: 'Snow', color: 0xF0F0F0, hardness: 0.5, transparent: false, solid: true, uv: [0, 5] },
  [BlockType.ICE]: { name: 'Ice', color: 0xA0D0F0, hardness: 0.5, transparent: true, solid: true, uv: [0, 3] },
  [BlockType.CLAY]: { name: 'Clay', color: 0xA0A0B0, hardness: 0.6, transparent: false, solid: true, uv: [1, 1] },
  [BlockType.GRAVEL]: { name: 'Gravel', color: 0x909090, hardness: 0.6, transparent: false, solid: true, uv: [4, 3] },
  [BlockType.CRAFTING_TABLE]: { name: 'Crafting Table', color: 0x9B7B3E, hardness: 2.5, transparent: false, solid: true, topColor: 0xB08840, sideColor: 0x9B7B3E, uvTop: [0, 4], uvSide: [1, 4], uvBottom: [4, 2] },
  [BlockType.FURNACE]: { name: 'Furnace', color: 0x7A7A7A, hardness: 3.5, transparent: false, solid: true, sideColor: 0x5A5A5A, uvFront: [2, 4], uvSide: [3, 4], uvTop: [3, 4], uvBottom: [3, 4] },
  [BlockType.GLASS]: { name: 'Glass', color: 0xD0E8F0, hardness: 0.3, transparent: true, solid: true, thin: 'z', uv: [0, 3] },
  [BlockType.BRICK]: { name: 'Brick', color: 0xA04030, hardness: 2.0, transparent: false, solid: true, uv: [1, 3] },
  [BlockType.OBSIDIAN]: { name: 'Obsidian', color: 0x1A0A2E, hardness: 10, transparent: false, solid: true, uv: [2, 3] },
  [BlockType.TORCH]: { name: 'Torch', color: 0xFFA500, hardness: 0.0, transparent: true, solid: false, uv: [4, 4] },
  [BlockType.SANDSTONE]: { name: 'Sandstone', color: 0xD4C476, hardness: 0.8, transparent: false, solid: true, uv: [3, 0] },
  // New blocks
  [BlockType.LAVA]: { name: 'Lava', color: 0xFF4400, hardness: -1, transparent: true, solid: false, uv: [7, 3] },
  [BlockType.MOSSY_COBBLESTONE]: { name: 'Mossy Cobblestone', color: 0x5B6B4B, hardness: 2.0, transparent: false, solid: true, uv: [1, 1] },
  [BlockType.STONE_BRICK]: { name: 'Stone Brick', color: 0x7A7A7A, hardness: 1.5, transparent: false, solid: true, uv: [3, 3] },
  [BlockType.MOSSY_STONE_BRICK]: { name: 'Mossy Stone Brick', color: 0x5A6A5A, hardness: 1.5, transparent: false, solid: true, uv: [3, 3] },
  [BlockType.CRACKED_STONE_BRICK]: { name: 'Cracked Stone Brick', color: 0x6A6A6A, hardness: 1.5, transparent: false, solid: true, uv: [3, 3] },
  [BlockType.JUNGLE_WOOD]: { name: 'Jungle Wood', color: 0x6B5030, hardness: 2.0, transparent: false, solid: true, topColor: 0x8B7040, sideColor: 0x6B5030, bottomColor: 0x8B7040, uvTop: [0, 2], uvSide: [1, 2], uvBottom: [0, 2] },
  [BlockType.JUNGLE_LEAVES]: { name: 'Jungle Leaves', color: 0x2A6B22, hardness: 0.2, transparent: true, solid: true, uv: [5, 2] },
  [BlockType.BIRCH_WOOD]: { name: 'Birch Wood', color: 0xD0C8B0, hardness: 2.0, transparent: false, solid: true, topColor: 0xC0B898, sideColor: 0xD0C8B0, bottomColor: 0xC0B898, uvTop: [2, 2], uvSide: [3, 2], uvBottom: [2, 2] },
  [BlockType.BIRCH_LEAVES]: { name: 'Birch Leaves', color: 0x5A9A42, hardness: 0.2, transparent: true, solid: true, uv: [5, 2] },
  [BlockType.SPRUCE_WOOD]: { name: 'Spruce Wood', color: 0x4A3520, hardness: 2.0, transparent: false, solid: true, topColor: 0x6A5530, sideColor: 0x4A3520, bottomColor: 0x6A5530, uvTop: [0, 2], uvSide: [1, 2], uvBottom: [0, 2] },
  [BlockType.SPRUCE_LEAVES]: { name: 'Spruce Leaves', color: 0x2A4A22, hardness: 0.2, transparent: true, solid: true, uv: [5, 2] },
  [BlockType.ACACIA_WOOD]: { name: 'Acacia Wood', color: 0x9A5A30, hardness: 2.0, transparent: false, solid: true, topColor: 0x8A6A40, sideColor: 0x9A5A30, bottomColor: 0x8A6A40, uvTop: [0, 2], uvSide: [1, 2], uvBottom: [0, 2] },
  [BlockType.ACACIA_LEAVES]: { name: 'Acacia Leaves', color: 0x6A9A32, hardness: 0.2, transparent: true, solid: true, uv: [5, 2] },
  [BlockType.MUSHROOM_BLOCK]: { name: 'Mushroom Block', color: 0xAA3030, hardness: 0.2, transparent: false, solid: true, uv: [5, 6] },
  [BlockType.MUSHROOM_STEM]: { name: 'Mushroom Stem', color: 0xD0C8B8, hardness: 0.2, transparent: false, solid: true, uv: [4, 2] },
  [BlockType.MYCELIUM]: { name: 'Mycelium', color: 0x7A6A80, hardness: 0.6, transparent: false, solid: true, topColor: 0x8A7A90, sideColor: 0x8B6B3E, bottomColor: 0x8B6B3E, uvTop: [5, 0], uvSide: [4, 0], uvBottom: [1, 0] },
  [BlockType.PODZOL]: { name: 'Podzol', color: 0x6A5030, hardness: 0.6, transparent: false, solid: true, topColor: 0x6A5030, sideColor: 0x8B6B3E, bottomColor: 0x8B6B3E, uvTop: [5, 0], uvSide: [4, 0], uvBottom: [1, 0] },
  [BlockType.RED_SAND]: { name: 'Red Sand', color: 0xC4783C, hardness: 0.5, transparent: false, solid: true, uv: [5, 6] },
  [BlockType.TERRACOTTA]: { name: 'Terracotta', color: 0xBA6B44, hardness: 1.25, transparent: false, solid: true, uv: [6, 6] },
  [BlockType.PACKED_ICE]: { name: 'Packed Ice', color: 0x8AB8E0, hardness: 0.5, transparent: false, solid: true, uv: [0, 3] },
  [BlockType.BLUE_ICE]: { name: 'Blue Ice', color: 0x6090D0, hardness: 2.8, transparent: false, solid: true, uv: [0, 3] },
  [BlockType.SOUL_SAND]: { name: 'Soul Sand', color: 0x5A4A3A, hardness: 0.5, transparent: false, solid: true, uv: [2, 6] },
  [BlockType.NETHERRACK]: { name: 'Netherrack', color: 0x8A3030, hardness: 0.4, transparent: false, solid: true, uv: [3, 6] },
  [BlockType.GLOWSTONE]: { name: 'Glowstone', color: 0xFFDD80, hardness: 0.3, transparent: false, solid: true, uv: [4, 6] },
  [BlockType.CHEST]: { name: 'Chest', color: 0x9B7B3E, hardness: 2.5, transparent: false, solid: true, topColor: 0xA08840, sideColor: 0x9B7B3E, uvTop: [4, 2], uvSide: [4, 2], uvBottom: [4, 2] },
  [BlockType.BOOKSHELF]: { name: 'Bookshelf', color: 0xB8945A, hardness: 1.5, transparent: false, solid: true, sideColor: 0x8A4A2A, uvTop: [4, 2], uvSide: [5, 3], uvBottom: [4, 2] },
  [BlockType.COBWEB]: { name: 'Cobweb', color: 0xE0E0E0, hardness: 4.0, transparent: true, solid: false, uv: [0, 3] },
  [BlockType.IRON_BLOCK]: { name: 'Iron Block', color: 0xD0D0D0, hardness: 5.0, transparent: false, solid: true, uv: [0, 5] },
  [BlockType.GOLD_BLOCK]: { name: 'Gold Block', color: 0xFFD700, hardness: 3.0, transparent: false, solid: true, uv: [1, 5] },
  [BlockType.DIAMOND_BLOCK]: { name: 'Diamond Block', color: 0x60E0F0, hardness: 5.0, transparent: false, solid: true, uv: [2, 5] },
  [BlockType.EMERALD_ORE]: { name: 'Emerald Ore', color: 0x60A060, hardness: 3.0, transparent: false, solid: true, uv: [9, 1] },
  [BlockType.EMERALD_BLOCK]: { name: 'Emerald Block', color: 0x30D030, hardness: 5.0, transparent: false, solid: true, uv: [3, 5] },
  [BlockType.WOOL]: { name: 'Wool', color: 0xF0F0F0, hardness: 0.8, transparent: false, solid: true, uv: [0, 5] },
  [BlockType.HAY_BALE]: { name: 'Hay Bale', color: 0xC8A830, hardness: 0.5, transparent: false, solid: true, uv: [1, 5] },
  [BlockType.TNT]: { name: 'TNT', color: 0xCC2222, hardness: 0.0, transparent: false, solid: true, sideColor: 0xCC2222, topColor: 0xAA1111, uvTop: [3, 6], uvSide: [3, 6], uvBottom: [3, 6] },
  [BlockType.LADDER]: { name: 'Ladder', color: 0x9B7B3E, hardness: 0.4, transparent: true, solid: false, uv: [1, 2] },
  [BlockType.FENCE]: { name: 'Fence', color: 0xB8945A, hardness: 2.0, transparent: true, solid: true, uv: [4, 2] },
  [BlockType.DOOR]: { name: 'Door', color: 0x8B6B3E, hardness: 3.0, transparent: true, solid: true, thin: 'z', topColor: 0x7A5A2D, sideColor: 0x6B4A1D, uv: [5, 4] },
  [BlockType.REDSTONE_ORE]: { name: 'Redstone Ore', color: 0xA04040, hardness: 3.0, transparent: false, solid: true, uv: [7, 1] },
  [BlockType.LAPIS_ORE]: { name: 'Lapis Ore', color: 0x4060A0, hardness: 3.0, transparent: false, solid: true, uv: [8, 1] },
  [BlockType.LAPIS_BLOCK]: { name: 'Lapis Block', color: 0x2050A0, hardness: 3.0, transparent: false, solid: true, uv: [4, 5] },
  [BlockType.QUARTZ]: { name: 'Quartz', color: 0xF0E8E0, hardness: 0.8, transparent: false, solid: true, uv: [5, 5] },
  [BlockType.PRISMARINE]: { name: 'Prismarine', color: 0x4A9A8A, hardness: 1.5, transparent: false, solid: true, uv: [0, 6] },
  [BlockType.SEA_LANTERN]: { name: 'Sea Lantern', color: 0xB0E0E8, hardness: 0.3, transparent: false, solid: true, uv: [1, 6] },
  [BlockType.CORAL]: { name: 'Coral', color: 0xE04080, hardness: 0.0, transparent: true, solid: true, uv: [5, 2] },
  [BlockType.BAMBOO]: { name: 'Bamboo', color: 0x6A9A30, hardness: 1.0, transparent: true, solid: true, uv: [5, 2] },
};

// Crafting recipes
// Pattern: 3x3 grid row-major. Positive = BlockType, negative = ItemType, 0 = empty
// resultIsBlock: true = result is a block, false = result is an item
// ItemType values inlined to avoid circular dependency with items.js
const IT = {
  STICK: -1, WOODEN_PICKAXE: -2, STONE_PICKAXE: -3, IRON_PICKAXE: -4, DIAMOND_PICKAXE: -5,
  WOODEN_AXE: -6, STONE_AXE: -7, IRON_AXE: -8, DIAMOND_AXE: -9,
  WOODEN_SHOVEL: -10, STONE_SHOVEL: -11, IRON_SHOVEL: -12, DIAMOND_SHOVEL: -13,
  WOODEN_SWORD: -14, STONE_SWORD: -15, IRON_SWORD: -16, DIAMOND_SWORD: -17,
  IRON_INGOT: -18, GOLD_INGOT: -19, DIAMOND: -20, COAL: -21,
  WHEAT: -29,
  LEATHER_HELMET: -30, LEATHER_CHESTPLATE: -31, LEATHER_LEGGINGS: -32, LEATHER_BOOTS: -33,
  IRON_HELMET: -34, IRON_CHESTPLATE: -35, IRON_LEGGINGS: -36, IRON_BOOTS: -37,
  DIAMOND_HELMET: -38, DIAMOND_CHESTPLATE: -39, DIAMOND_LEGGINGS: -40, DIAMOND_BOOTS: -41,
  BOW: -42, ARROW: -43, LEATHER: -44, STRING: -45, FEATHER: -46, FLINT: -47,
  GUNPOWDER: -48, APPLE: -26, GOLDEN_APPLE: -54, MUSHROOM_STEW: -59, BOWL: -60,
  CAKE: -61, SUGAR: -62, QUARTZ_ITEM: -53, EMERALD: -51, LAPIS: -52, BREAD: -27,
};

const S = IT.STICK;
const P = BlockType.PLANKS;
const C = BlockType.COBBLESTONE;
const I = IT.IRON_INGOT;
const G = IT.GOLD_INGOT;
const D = IT.DIAMOND;
const W = BlockType.WOOD;

export const CraftingRecipes = [
  // ── Basic materials ──
  { name: 'Planks', pattern: [0, 0, 0, 0, W, 0, 0, 0, 0], result: P, count: 4, resultIsBlock: true, shapeless: true },
  { name: 'Sticks', pattern: [0, 0, 0, 0, P, 0, 0, P, 0], result: IT.STICK, count: 4, resultIsBlock: false },

  // ── Building ──
  { name: 'Crafting Table', pattern: [0, 0, 0, P, P, 0, P, P, 0], result: BlockType.CRAFTING_TABLE, count: 1, resultIsBlock: true },
  { name: 'Furnace', pattern: [C, C, C, C, 0, C, C, C, C], result: BlockType.FURNACE, count: 1, resultIsBlock: true },
  { name: 'Sandstone', pattern: [0, 0, 0, BlockType.SAND, BlockType.SAND, 0, BlockType.SAND, BlockType.SAND, 0], result: BlockType.SANDSTONE, count: 4, resultIsBlock: true },
  { name: 'Torch', pattern: [0, 0, 0, 0, IT.COAL, 0, 0, S, 0], result: BlockType.TORCH, count: 4, resultIsBlock: true },
  { name: 'Chest', pattern: [P, P, P, P, 0, P, P, P, P], result: BlockType.CHEST, count: 1, resultIsBlock: true },
  { name: 'Stone Brick', pattern: [0, 0, 0, BlockType.STONE, BlockType.STONE, 0, BlockType.STONE, BlockType.STONE, 0], result: BlockType.STONE_BRICK, count: 4, resultIsBlock: true },
  { name: 'Glass Pane (Glass)', pattern: [0, 0, 0, BlockType.GLASS, BlockType.GLASS, BlockType.GLASS, BlockType.GLASS, BlockType.GLASS, BlockType.GLASS], result: BlockType.GLASS, count: 16, resultIsBlock: true },
  { name: 'Bookshelf', pattern: [P, P, P, IT.LEATHER, IT.LEATHER, IT.LEATHER, P, P, P], result: BlockType.BOOKSHELF, count: 1, resultIsBlock: true },
  { name: 'Wool', pattern: [0, 0, 0, IT.STRING, IT.STRING, 0, IT.STRING, IT.STRING, 0], result: BlockType.WOOL, count: 1, resultIsBlock: true },
  { name: 'Ladder', pattern: [S, 0, S, S, S, S, S, 0, S], result: BlockType.LADDER, count: 3, resultIsBlock: true },
  { name: 'Fence', pattern: [0, 0, 0, P, S, P, P, S, P], result: BlockType.FENCE, count: 3, resultIsBlock: true },
  { name: 'Door', pattern: [P, P, 0, P, P, 0, P, P, 0], result: BlockType.DOOR, count: 3, resultIsBlock: true },
  { name: 'Iron Block', pattern: [I, I, I, I, I, I, I, I, I], result: BlockType.IRON_BLOCK, count: 1, resultIsBlock: true },
  { name: 'Gold Block', pattern: [G, G, G, G, G, G, G, G, G], result: BlockType.GOLD_BLOCK, count: 1, resultIsBlock: true },
  { name: 'Diamond Block', pattern: [D, D, D, D, D, D, D, D, D], result: BlockType.DIAMOND_BLOCK, count: 1, resultIsBlock: true },
  { name: 'TNT', pattern: [IT.GUNPOWDER, BlockType.SAND, IT.GUNPOWDER, BlockType.SAND, IT.GUNPOWDER, BlockType.SAND, IT.GUNPOWDER, BlockType.SAND, IT.GUNPOWDER], result: BlockType.TNT, count: 1, resultIsBlock: true },
  { name: 'Hay Bale', pattern: [IT.WHEAT, IT.WHEAT, IT.WHEAT, IT.WHEAT, IT.WHEAT, IT.WHEAT, IT.WHEAT, IT.WHEAT, IT.WHEAT], result: BlockType.HAY_BALE, count: 1, resultIsBlock: true },

  // ── Wooden tools ──
  { name: 'Wooden Pickaxe', pattern: [P, P, P, 0, S, 0, 0, S, 0], result: IT.WOODEN_PICKAXE, count: 1, resultIsBlock: false },
  { name: 'Wooden Axe', pattern: [P, P, 0, P, S, 0, 0, S, 0], result: IT.WOODEN_AXE, count: 1, resultIsBlock: false },
  { name: 'Wooden Shovel', pattern: [0, P, 0, 0, S, 0, 0, S, 0], result: IT.WOODEN_SHOVEL, count: 1, resultIsBlock: false },
  { name: 'Wooden Sword', pattern: [0, P, 0, 0, P, 0, 0, S, 0], result: IT.WOODEN_SWORD, count: 1, resultIsBlock: false },

  // ── Stone tools ──
  { name: 'Stone Pickaxe', pattern: [C, C, C, 0, S, 0, 0, S, 0], result: IT.STONE_PICKAXE, count: 1, resultIsBlock: false },
  { name: 'Stone Axe', pattern: [C, C, 0, C, S, 0, 0, S, 0], result: IT.STONE_AXE, count: 1, resultIsBlock: false },
  { name: 'Stone Shovel', pattern: [0, C, 0, 0, S, 0, 0, S, 0], result: IT.STONE_SHOVEL, count: 1, resultIsBlock: false },
  { name: 'Stone Sword', pattern: [0, C, 0, 0, C, 0, 0, S, 0], result: IT.STONE_SWORD, count: 1, resultIsBlock: false },

  // ── Iron tools ──
  { name: 'Iron Pickaxe', pattern: [I, I, I, 0, S, 0, 0, S, 0], result: IT.IRON_PICKAXE, count: 1, resultIsBlock: false },
  { name: 'Iron Axe', pattern: [I, I, 0, I, S, 0, 0, S, 0], result: IT.IRON_AXE, count: 1, resultIsBlock: false },
  { name: 'Iron Shovel', pattern: [0, I, 0, 0, S, 0, 0, S, 0], result: IT.IRON_SHOVEL, count: 1, resultIsBlock: false },
  { name: 'Iron Sword', pattern: [0, I, 0, 0, I, 0, 0, S, 0], result: IT.IRON_SWORD, count: 1, resultIsBlock: false },

  // ── Diamond tools ──
  { name: 'Diamond Pickaxe', pattern: [D, D, D, 0, S, 0, 0, S, 0], result: IT.DIAMOND_PICKAXE, count: 1, resultIsBlock: false },
  { name: 'Diamond Axe', pattern: [D, D, 0, D, S, 0, 0, S, 0], result: IT.DIAMOND_AXE, count: 1, resultIsBlock: false },
  { name: 'Diamond Shovel', pattern: [0, D, 0, 0, S, 0, 0, S, 0], result: IT.DIAMOND_SHOVEL, count: 1, resultIsBlock: false },
  { name: 'Diamond Sword', pattern: [0, D, 0, 0, D, 0, 0, S, 0], result: IT.DIAMOND_SWORD, count: 1, resultIsBlock: false },

  // ── Armor ──
  { name: 'Leather Helmet', pattern: [0, 0, 0, IT.LEATHER, IT.LEATHER, IT.LEATHER, IT.LEATHER, 0, IT.LEATHER], result: IT.LEATHER_HELMET, count: 1, resultIsBlock: false },
  { name: 'Leather Chestplate', pattern: [IT.LEATHER, 0, IT.LEATHER, IT.LEATHER, IT.LEATHER, IT.LEATHER, IT.LEATHER, IT.LEATHER, IT.LEATHER], result: IT.LEATHER_CHESTPLATE, count: 1, resultIsBlock: false },
  { name: 'Leather Leggings', pattern: [IT.LEATHER, IT.LEATHER, IT.LEATHER, IT.LEATHER, 0, IT.LEATHER, IT.LEATHER, 0, IT.LEATHER], result: IT.LEATHER_LEGGINGS, count: 1, resultIsBlock: false },
  { name: 'Leather Boots', pattern: [0, 0, 0, IT.LEATHER, 0, IT.LEATHER, IT.LEATHER, 0, IT.LEATHER], result: IT.LEATHER_BOOTS, count: 1, resultIsBlock: false },
  { name: 'Iron Helmet', pattern: [0, 0, 0, I, I, I, I, 0, I], result: IT.IRON_HELMET, count: 1, resultIsBlock: false },
  { name: 'Iron Chestplate', pattern: [I, 0, I, I, I, I, I, I, I], result: IT.IRON_CHESTPLATE, count: 1, resultIsBlock: false },
  { name: 'Iron Leggings', pattern: [I, I, I, I, 0, I, I, 0, I], result: IT.IRON_LEGGINGS, count: 1, resultIsBlock: false },
  { name: 'Iron Boots', pattern: [0, 0, 0, I, 0, I, I, 0, I], result: IT.IRON_BOOTS, count: 1, resultIsBlock: false },
  { name: 'Diamond Helmet', pattern: [0, 0, 0, D, D, D, D, 0, D], result: IT.DIAMOND_HELMET, count: 1, resultIsBlock: false },
  { name: 'Diamond Chestplate', pattern: [D, 0, D, D, D, D, D, D, D], result: IT.DIAMOND_CHESTPLATE, count: 1, resultIsBlock: false },
  { name: 'Diamond Leggings', pattern: [D, D, D, D, 0, D, D, 0, D], result: IT.DIAMOND_LEGGINGS, count: 1, resultIsBlock: false },
  { name: 'Diamond Boots', pattern: [0, 0, 0, D, 0, D, D, 0, D], result: IT.DIAMOND_BOOTS, count: 1, resultIsBlock: false },

  // ── Weapons ──
  { name: 'Bow', pattern: [0, S, IT.STRING, S, 0, IT.STRING, 0, S, IT.STRING], result: IT.BOW, count: 1, resultIsBlock: false },
  { name: 'Arrow', pattern: [0, IT.FLINT, 0, 0, S, 0, 0, IT.FEATHER, 0], result: IT.ARROW, count: 4, resultIsBlock: false },

  // ── Food ──
  { name: 'Bread', pattern: [0, 0, 0, IT.WHEAT, IT.WHEAT, IT.WHEAT, 0, 0, 0], result: IT.BREAD, count: 1, resultIsBlock: false },
  { name: 'Golden Apple', pattern: [G, G, G, G, IT.APPLE, G, G, G, G], result: IT.GOLDEN_APPLE, count: 1, resultIsBlock: false },
  { name: 'Mushroom Stew', pattern: [0, 0, 0, BlockType.MUSHROOM_BLOCK, BlockType.MUSHROOM_BLOCK, 0, 0, IT.BOWL, 0], result: IT.MUSHROOM_STEW, count: 1, resultIsBlock: false, shapeless: true },
  { name: 'Bowl', pattern: [0, 0, 0, P, 0, P, 0, P, 0], result: IT.BOWL, count: 4, resultIsBlock: false },
  { name: 'Cake', pattern: [IT.WHEAT, IT.WHEAT, IT.WHEAT, IT.SUGAR, IT.APPLE, IT.SUGAR, 0, 0, 0], result: IT.CAKE, count: 1, resultIsBlock: false },

  // ── Misc ──
  { name: 'Quartz Block', pattern: [0, 0, 0, IT.QUARTZ_ITEM, IT.QUARTZ_ITEM, 0, IT.QUARTZ_ITEM, IT.QUARTZ_ITEM, 0], result: BlockType.QUARTZ, count: 1, resultIsBlock: true },
  { name: 'Emerald Block', pattern: [IT.EMERALD, IT.EMERALD, IT.EMERALD, IT.EMERALD, IT.EMERALD, IT.EMERALD, IT.EMERALD, IT.EMERALD, IT.EMERALD], result: BlockType.EMERALD_BLOCK, count: 1, resultIsBlock: true },
  { name: 'Lapis Block', pattern: [IT.LAPIS, IT.LAPIS, IT.LAPIS, IT.LAPIS, IT.LAPIS, IT.LAPIS, IT.LAPIS, IT.LAPIS, IT.LAPIS], result: BlockType.LAPIS_BLOCK, count: 1, resultIsBlock: true },
];

// Biome definitions
export const Biome = {
  PLAINS: 0,
  DESERT: 1,
  FOREST: 2,
  MOUNTAINS: 3,
  TUNDRA: 4,
  OCEAN: 5,
  JUNGLE: 6,
  SAVANNA: 7,
  TAIGA: 8,
  MUSHROOM_ISLAND: 9,
  BIRCH_FOREST: 10,
  MESA: 11,
  FROZEN_OCEAN: 12,
  SWAMP: 13,
};

export const BiomeData = {
  [Biome.PLAINS]: { name: 'Plains', baseHeight: 42, heightVariation: 4, surfaceBlock: BlockType.GRASS, subBlock: BlockType.DIRT, treeChance: 0.005 },
  [Biome.DESERT]: { name: 'Desert', baseHeight: 41, heightVariation: 3, surfaceBlock: BlockType.SAND, subBlock: BlockType.SANDSTONE, treeChance: 0.001 },
  [Biome.FOREST]: { name: 'Forest', baseHeight: 43, heightVariation: 5, surfaceBlock: BlockType.GRASS, subBlock: BlockType.DIRT, treeChance: 0.03 },
  [Biome.MOUNTAINS]: { name: 'Mountains', baseHeight: 55, heightVariation: 25, surfaceBlock: BlockType.STONE, subBlock: BlockType.STONE, treeChance: 0.002 },
  [Biome.TUNDRA]: { name: 'Tundra', baseHeight: 42, heightVariation: 3, surfaceBlock: BlockType.SNOW, subBlock: BlockType.DIRT, treeChance: 0.003 },
  [Biome.OCEAN]: { name: 'Ocean', baseHeight: 30, heightVariation: 5, surfaceBlock: BlockType.SAND, subBlock: BlockType.SAND, treeChance: 0 },
  [Biome.JUNGLE]: { name: 'Jungle', baseHeight: 44, heightVariation: 6, surfaceBlock: BlockType.GRASS, subBlock: BlockType.DIRT, treeChance: 0.06 },
  [Biome.SAVANNA]: { name: 'Savanna', baseHeight: 42, heightVariation: 3, surfaceBlock: BlockType.GRASS, subBlock: BlockType.DIRT, treeChance: 0.008 },
  [Biome.TAIGA]: { name: 'Taiga', baseHeight: 43, heightVariation: 5, surfaceBlock: BlockType.PODZOL, subBlock: BlockType.DIRT, treeChance: 0.025 },
  [Biome.MUSHROOM_ISLAND]: { name: 'Mushroom Island', baseHeight: 44, heightVariation: 4, surfaceBlock: BlockType.MYCELIUM, subBlock: BlockType.DIRT, treeChance: 0.015 },
  [Biome.BIRCH_FOREST]: { name: 'Birch Forest', baseHeight: 43, heightVariation: 4, surfaceBlock: BlockType.GRASS, subBlock: BlockType.DIRT, treeChance: 0.03 },
  [Biome.MESA]: { name: 'Mesa', baseHeight: 48, heightVariation: 12, surfaceBlock: BlockType.RED_SAND, subBlock: BlockType.TERRACOTTA, treeChance: 0 },
  [Biome.FROZEN_OCEAN]: { name: 'Frozen Ocean', baseHeight: 30, heightVariation: 5, surfaceBlock: BlockType.SAND, subBlock: BlockType.SAND, treeChance: 0 },
  [Biome.SWAMP]: { name: 'Swamp', baseHeight: 40, heightVariation: 2, surfaceBlock: BlockType.GRASS, subBlock: BlockType.DIRT, treeChance: 0.015 },
};
