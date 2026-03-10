// ============================================================
// Items System: Tools, Food, Materials (non-block items)
// Items use NEGATIVE IDs to distinguish from block types (positive)
// ============================================================

export const ItemCategory = {
    TOOL: 0,
    FOOD: 1,
    MATERIAL: 2,
};

export const ToolType = {
    NONE: 0,
    PICKAXE: 1,
    AXE: 2,
    SHOVEL: 3,
    SWORD: 4,
    BOW: 5,
};

export const ArmorSlot = {
    HELMET: 0,
    CHESTPLATE: 1,
    LEGGINGS: 2,
    BOOTS: 3,
};

// Item IDs (negative to avoid collision with BlockType)
export const ItemType = {
    STICK: -1,
    WOODEN_PICKAXE: -2,
    STONE_PICKAXE: -3,
    IRON_PICKAXE: -4,
    DIAMOND_PICKAXE: -5,
    WOODEN_AXE: -6,
    STONE_AXE: -7,
    IRON_AXE: -8,
    DIAMOND_AXE: -9,
    WOODEN_SHOVEL: -10,
    STONE_SHOVEL: -11,
    IRON_SHOVEL: -12,
    DIAMOND_SHOVEL: -13,
    WOODEN_SWORD: -14,
    STONE_SWORD: -15,
    IRON_SWORD: -16,
    DIAMOND_SWORD: -17,
    IRON_INGOT: -18,
    GOLD_INGOT: -19,
    DIAMOND: -20,
    COAL: -21,
    RAW_BEEF: -22,
    COOKED_BEEF: -23,
    RAW_PORK: -24,
    COOKED_PORK: -25,
    APPLE: -26,
    BREAD: -27,
    BERRIES: -28,
    WHEAT: -29,
    // Armor
    LEATHER_HELMET: -30,
    LEATHER_CHESTPLATE: -31,
    LEATHER_LEGGINGS: -32,
    LEATHER_BOOTS: -33,
    IRON_HELMET: -34,
    IRON_CHESTPLATE: -35,
    IRON_LEGGINGS: -36,
    IRON_BOOTS: -37,
    DIAMOND_HELMET: -38,
    DIAMOND_CHESTPLATE: -39,
    DIAMOND_LEGGINGS: -40,
    DIAMOND_BOOTS: -41,
    // Ranged weapons
    BOW: -42,
    ARROW: -43,
    // New materials
    LEATHER: -44,
    STRING: -45,
    FEATHER: -46,
    FLINT: -47,
    GUNPOWDER: -48,
    BONE: -49,
    ENDER_PEARL: -50,
    EMERALD: -51,
    LAPIS: -52,
    QUARTZ_ITEM: -53,
    // New food
    GOLDEN_APPLE: -54,
    RAW_CHICKEN: -55,
    COOKED_CHICKEN: -56,
    RAW_MUTTON: -57,
    COOKED_MUTTON: -58,
    MUSHROOM_STEW: -59,
    BOWL: -60,
    CAKE: -61,
    SUGAR: -62,
    // Boss drops
    NETHER_STAR: -63,
    DRAGON_SCALE: -64,
    BOSS_KEY: -65,
};

// Block categories for tool effectiveness
export const BlockCategory = {
    STONE: 'stone',   // pickaxe
    WOOD: 'wood',     // axe
    DIRT: 'dirt',     // shovel
    OTHER: 'other',
};

// Item data definitions
export const ItemData = {
    [ItemType.STICK]: {
        name: 'Stick', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x8B6B3E, icon: '/'
    },

    // ── Pickaxes ──
    [ItemType.WOODEN_PICKAXE]: {
        name: 'Wooden Pickaxe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 60, miningSpeed: 1.0, attackDamage: 2,
        toolType: ToolType.PICKAXE, color: 0xB8945A, icon: '⛏'
    },
    [ItemType.STONE_PICKAXE]: {
        name: 'Stone Pickaxe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 132, miningSpeed: 1.5, attackDamage: 3,
        toolType: ToolType.PICKAXE, color: 0x808080, icon: '⛏'
    },
    [ItemType.IRON_PICKAXE]: {
        name: 'Iron Pickaxe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 250, miningSpeed: 2.0, attackDamage: 4,
        toolType: ToolType.PICKAXE, color: 0xC0C0C0, icon: '⛏'
    },
    [ItemType.DIAMOND_PICKAXE]: {
        name: 'Diamond Pickaxe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 1562, miningSpeed: 3.0, attackDamage: 5,
        toolType: ToolType.PICKAXE, color: 0x60C0E0, icon: '⛏'
    },

    // ── Axes ──
    [ItemType.WOODEN_AXE]: {
        name: 'Wooden Axe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 60, miningSpeed: 1.0, attackDamage: 3,
        toolType: ToolType.AXE, color: 0xB8945A, icon: '🪓'
    },
    [ItemType.STONE_AXE]: {
        name: 'Stone Axe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 132, miningSpeed: 1.5, attackDamage: 4,
        toolType: ToolType.AXE, color: 0x808080, icon: '🪓'
    },
    [ItemType.IRON_AXE]: {
        name: 'Iron Axe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 250, miningSpeed: 2.0, attackDamage: 5,
        toolType: ToolType.AXE, color: 0xC0C0C0, icon: '🪓'
    },
    [ItemType.DIAMOND_AXE]: {
        name: 'Diamond Axe', category: ItemCategory.TOOL,
        stackSize: 1, durability: 1562, miningSpeed: 3.0, attackDamage: 6,
        toolType: ToolType.AXE, color: 0x60C0E0, icon: '🪓'
    },

    // ── Shovels ──
    [ItemType.WOODEN_SHOVEL]: {
        name: 'Wooden Shovel', category: ItemCategory.TOOL,
        stackSize: 1, durability: 60, miningSpeed: 1.0, attackDamage: 1,
        toolType: ToolType.SHOVEL, color: 0xB8945A, icon: '🔨'
    },
    [ItemType.STONE_SHOVEL]: {
        name: 'Stone Shovel', category: ItemCategory.TOOL,
        stackSize: 1, durability: 132, miningSpeed: 1.5, attackDamage: 2,
        toolType: ToolType.SHOVEL, color: 0x808080, icon: '🔨'
    },
    [ItemType.IRON_SHOVEL]: {
        name: 'Iron Shovel', category: ItemCategory.TOOL,
        stackSize: 1, durability: 250, miningSpeed: 2.0, attackDamage: 3,
        toolType: ToolType.SHOVEL, color: 0xC0C0C0, icon: '🔨'
    },
    [ItemType.DIAMOND_SHOVEL]: {
        name: 'Diamond Shovel', category: ItemCategory.TOOL,
        stackSize: 1, durability: 1562, miningSpeed: 3.0, attackDamage: 4,
        toolType: ToolType.SHOVEL, color: 0x60C0E0, icon: '🔨'
    },

    // ── Swords ──
    [ItemType.WOODEN_SWORD]: {
        name: 'Wooden Sword', category: ItemCategory.TOOL,
        stackSize: 1, durability: 60, miningSpeed: 0.5, attackDamage: 5,
        toolType: ToolType.SWORD, color: 0xB8945A, icon: '🗡'
    },
    [ItemType.STONE_SWORD]: {
        name: 'Stone Sword', category: ItemCategory.TOOL,
        stackSize: 1, durability: 132, miningSpeed: 0.5, attackDamage: 6,
        toolType: ToolType.SWORD, color: 0x808080, icon: '🗡'
    },
    [ItemType.IRON_SWORD]: {
        name: 'Iron Sword', category: ItemCategory.TOOL,
        stackSize: 1, durability: 250, miningSpeed: 0.5, attackDamage: 7,
        toolType: ToolType.SWORD, color: 0xC0C0C0, icon: '🗡'
    },
    [ItemType.DIAMOND_SWORD]: {
        name: 'Diamond Sword', category: ItemCategory.TOOL,
        stackSize: 1, durability: 1562, miningSpeed: 0.5, attackDamage: 8,
        toolType: ToolType.SWORD, color: 0x60C0E0, icon: '🗡'
    },

    // ── Materials ──
    [ItemType.IRON_INGOT]: {
        name: 'Iron Ingot', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xC0C0C0, icon: '▬'
    },
    [ItemType.GOLD_INGOT]: {
        name: 'Gold Ingot', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xFFD700, icon: '▬'
    },
    [ItemType.DIAMOND]: {
        name: 'Diamond', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x60C0E0, icon: '◆'
    },
    [ItemType.COAL]: {
        name: 'Coal', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x2a2a2a, icon: '●'
    },
    [ItemType.WHEAT]: {
        name: 'Wheat', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xDAA520, icon: '🌾'
    },

    // ── Food ──
    [ItemType.RAW_BEEF]: {
        name: 'Raw Beef', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 3, color: 0xAA3333, icon: '🥩'
    },
    [ItemType.COOKED_BEEF]: {
        name: 'Cooked Beef', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 8, color: 0x8B4513, icon: '🥩'
    },
    [ItemType.RAW_PORK]: {
        name: 'Raw Pork', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 3, color: 0xEE9999, icon: '🍖'
    },
    [ItemType.COOKED_PORK]: {
        name: 'Cooked Pork', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 8, color: 0xCD853F, icon: '🍖'
    },
    [ItemType.APPLE]: {
        name: 'Apple', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 4, color: 0xCC2222, icon: '🍎'
    },
    [ItemType.BREAD]: {
        name: 'Bread', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 5, color: 0xDAA520, icon: '🍞'
    },
    [ItemType.BERRIES]: {
        name: 'Berries', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 2, color: 0x8B0000, icon: '🫐'
    },

    // ── Armor ──
    [ItemType.LEATHER_HELMET]: {
        name: 'Leather Helmet', category: ItemCategory.TOOL,
        stackSize: 1, durability: 56, armorSlot: ArmorSlot.HELMET, armorPoints: 1,
        color: 0x8B6B3E, icon: '⛑'
    },
    [ItemType.LEATHER_CHESTPLATE]: {
        name: 'Leather Chestplate', category: ItemCategory.TOOL,
        stackSize: 1, durability: 81, armorSlot: ArmorSlot.CHESTPLATE, armorPoints: 3,
        color: 0x8B6B3E, icon: '🦺'
    },
    [ItemType.LEATHER_LEGGINGS]: {
        name: 'Leather Leggings', category: ItemCategory.TOOL,
        stackSize: 1, durability: 76, armorSlot: ArmorSlot.LEGGINGS, armorPoints: 2,
        color: 0x8B6B3E, icon: '👖'
    },
    [ItemType.LEATHER_BOOTS]: {
        name: 'Leather Boots', category: ItemCategory.TOOL,
        stackSize: 1, durability: 66, armorSlot: ArmorSlot.BOOTS, armorPoints: 1,
        color: 0x8B6B3E, icon: '👢'
    },
    [ItemType.IRON_HELMET]: {
        name: 'Iron Helmet', category: ItemCategory.TOOL,
        stackSize: 1, durability: 166, armorSlot: ArmorSlot.HELMET, armorPoints: 2,
        color: 0xC0C0C0, icon: '⛑'
    },
    [ItemType.IRON_CHESTPLATE]: {
        name: 'Iron Chestplate', category: ItemCategory.TOOL,
        stackSize: 1, durability: 241, armorSlot: ArmorSlot.CHESTPLATE, armorPoints: 6,
        color: 0xC0C0C0, icon: '🦺'
    },
    [ItemType.IRON_LEGGINGS]: {
        name: 'Iron Leggings', category: ItemCategory.TOOL,
        stackSize: 1, durability: 226, armorSlot: ArmorSlot.LEGGINGS, armorPoints: 5,
        color: 0xC0C0C0, icon: '👖'
    },
    [ItemType.IRON_BOOTS]: {
        name: 'Iron Boots', category: ItemCategory.TOOL,
        stackSize: 1, durability: 196, armorSlot: ArmorSlot.BOOTS, armorPoints: 2,
        color: 0xC0C0C0, icon: '👢'
    },
    [ItemType.DIAMOND_HELMET]: {
        name: 'Diamond Helmet', category: ItemCategory.TOOL,
        stackSize: 1, durability: 364, armorSlot: ArmorSlot.HELMET, armorPoints: 3,
        color: 0x60C0E0, icon: '⛑'
    },
    [ItemType.DIAMOND_CHESTPLATE]: {
        name: 'Diamond Chestplate', category: ItemCategory.TOOL,
        stackSize: 1, durability: 529, armorSlot: ArmorSlot.CHESTPLATE, armorPoints: 8,
        color: 0x60C0E0, icon: '🦺'
    },
    [ItemType.DIAMOND_LEGGINGS]: {
        name: 'Diamond Leggings', category: ItemCategory.TOOL,
        stackSize: 1, durability: 496, armorSlot: ArmorSlot.LEGGINGS, armorPoints: 6,
        color: 0x60C0E0, icon: '👖'
    },
    [ItemType.DIAMOND_BOOTS]: {
        name: 'Diamond Boots', category: ItemCategory.TOOL,
        stackSize: 1, durability: 430, armorSlot: ArmorSlot.BOOTS, armorPoints: 3,
        color: 0x60C0E0, icon: '👢'
    },

    // ── Ranged Weapons ──
    [ItemType.BOW]: {
        name: 'Bow', category: ItemCategory.TOOL,
        stackSize: 1, durability: 384, attackDamage: 6,
        toolType: ToolType.BOW, color: 0x8B6B3E, icon: '🏹'
    },
    [ItemType.ARROW]: {
        name: 'Arrow', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x8B6B3E, icon: '➜'
    },

    // ── New Materials ──
    [ItemType.LEATHER]: {
        name: 'Leather', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x8B6B3E, icon: '🟫'
    },
    [ItemType.STRING]: {
        name: 'String', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xE0E0E0, icon: '〰'
    },
    [ItemType.FEATHER]: {
        name: 'Feather', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xF0F0F0, icon: '🪶'
    },
    [ItemType.FLINT]: {
        name: 'Flint', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x404040, icon: '◆'
    },
    [ItemType.GUNPOWDER]: {
        name: 'Gunpowder', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x606060, icon: '✦'
    },
    [ItemType.BONE]: {
        name: 'Bone', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xE0DCC8, icon: '🦴'
    },
    [ItemType.ENDER_PEARL]: {
        name: 'Ender Pearl', category: ItemCategory.MATERIAL,
        stackSize: 16, color: 0x1A5A5A, icon: '⬤'
    },
    [ItemType.EMERALD]: {
        name: 'Emerald', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x30D030, icon: '◆'
    },
    [ItemType.LAPIS]: {
        name: 'Lapis Lazuli', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x2050A0, icon: '●'
    },
    [ItemType.QUARTZ_ITEM]: {
        name: 'Quartz', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xF0E8E0, icon: '◇'
    },
    [ItemType.SUGAR]: {
        name: 'Sugar', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xF0F0F0, icon: '⁎'
    },
    [ItemType.BOWL]: {
        name: 'Bowl', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x8B6B3E, icon: '🥣'
    },

    // ── New Food ──
    [ItemType.GOLDEN_APPLE]: {
        name: 'Golden Apple', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 4, color: 0xFFD700, icon: '🍎'
    },
    [ItemType.RAW_CHICKEN]: {
        name: 'Raw Chicken', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 2, color: 0xEEBBBB, icon: '🍗'
    },
    [ItemType.COOKED_CHICKEN]: {
        name: 'Cooked Chicken', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 6, color: 0xCD9A3F, icon: '🍗'
    },
    [ItemType.RAW_MUTTON]: {
        name: 'Raw Mutton', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 2, color: 0xCC8888, icon: '🥩'
    },
    [ItemType.COOKED_MUTTON]: {
        name: 'Cooked Mutton', category: ItemCategory.FOOD,
        stackSize: 64, foodValue: 6, color: 0x9A7040, icon: '🥩'
    },
    [ItemType.MUSHROOM_STEW]: {
        name: 'Mushroom Stew', category: ItemCategory.FOOD,
        stackSize: 1, foodValue: 6, color: 0x9A6A4A, icon: '🍲'
    },
    [ItemType.CAKE]: {
        name: 'Cake', category: ItemCategory.FOOD,
        stackSize: 1, foodValue: 14, color: 0xF0E0D0, icon: '🎂'
    },

    // ── Boss Drops ──
    [ItemType.NETHER_STAR]: {
        name: 'Nether Star', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0xFFFFE0, icon: '⭐'
    },
    [ItemType.DRAGON_SCALE]: {
        name: 'Dragon Scale', category: ItemCategory.MATERIAL,
        stackSize: 64, color: 0x4A2060, icon: '🐉'
    },
    [ItemType.BOSS_KEY]: {
        name: 'Boss Key', category: ItemCategory.MATERIAL,
        stackSize: 1, color: 0xFFD700, icon: '🔑'
    },
};

// Map block types to their mining category
import { BlockType } from './blocks.js';

export const BlockMiningCategory = {
    [BlockType.STONE]: BlockCategory.STONE,
    [BlockType.COBBLESTONE]: BlockCategory.STONE,
    [BlockType.COAL_ORE]: BlockCategory.STONE,
    [BlockType.IRON_ORE]: BlockCategory.STONE,
    [BlockType.GOLD_ORE]: BlockCategory.STONE,
    [BlockType.DIAMOND_ORE]: BlockCategory.STONE,
    [BlockType.OBSIDIAN]: BlockCategory.STONE,
    [BlockType.SANDSTONE]: BlockCategory.STONE,
    [BlockType.BRICK]: BlockCategory.STONE,
    [BlockType.FURNACE]: BlockCategory.STONE,
    [BlockType.BEDROCK]: BlockCategory.STONE,
    [BlockType.ICE]: BlockCategory.STONE,
    [BlockType.MOSSY_COBBLESTONE]: BlockCategory.STONE,
    [BlockType.STONE_BRICK]: BlockCategory.STONE,
    [BlockType.MOSSY_STONE_BRICK]: BlockCategory.STONE,
    [BlockType.CRACKED_STONE_BRICK]: BlockCategory.STONE,
    [BlockType.PACKED_ICE]: BlockCategory.STONE,
    [BlockType.BLUE_ICE]: BlockCategory.STONE,
    [BlockType.NETHERRACK]: BlockCategory.STONE,
    [BlockType.IRON_BLOCK]: BlockCategory.STONE,
    [BlockType.GOLD_BLOCK]: BlockCategory.STONE,
    [BlockType.DIAMOND_BLOCK]: BlockCategory.STONE,
    [BlockType.EMERALD_ORE]: BlockCategory.STONE,
    [BlockType.EMERALD_BLOCK]: BlockCategory.STONE,
    [BlockType.REDSTONE_ORE]: BlockCategory.STONE,
    [BlockType.LAPIS_ORE]: BlockCategory.STONE,
    [BlockType.LAPIS_BLOCK]: BlockCategory.STONE,
    [BlockType.QUARTZ]: BlockCategory.STONE,
    [BlockType.PRISMARINE]: BlockCategory.STONE,
    [BlockType.TERRACOTTA]: BlockCategory.STONE,

    [BlockType.WOOD]: BlockCategory.WOOD,
    [BlockType.PLANKS]: BlockCategory.WOOD,
    [BlockType.CRAFTING_TABLE]: BlockCategory.WOOD,
    [BlockType.JUNGLE_WOOD]: BlockCategory.WOOD,
    [BlockType.BIRCH_WOOD]: BlockCategory.WOOD,
    [BlockType.SPRUCE_WOOD]: BlockCategory.WOOD,
    [BlockType.ACACIA_WOOD]: BlockCategory.WOOD,
    [BlockType.CHEST]: BlockCategory.WOOD,
    [BlockType.BOOKSHELF]: BlockCategory.WOOD,
    [BlockType.FENCE]: BlockCategory.WOOD,
    [BlockType.DOOR]: BlockCategory.WOOD,
    [BlockType.BAMBOO]: BlockCategory.WOOD,

    [BlockType.GRASS]: BlockCategory.DIRT,
    [BlockType.DIRT]: BlockCategory.DIRT,
    [BlockType.SAND]: BlockCategory.DIRT,
    [BlockType.GRAVEL]: BlockCategory.DIRT,
    [BlockType.CLAY]: BlockCategory.DIRT,
    [BlockType.SNOW]: BlockCategory.DIRT,
    [BlockType.MYCELIUM]: BlockCategory.DIRT,
    [BlockType.PODZOL]: BlockCategory.DIRT,
    [BlockType.RED_SAND]: BlockCategory.DIRT,
    [BlockType.SOUL_SAND]: BlockCategory.DIRT,
};

// Tool type → effective block category
export const ToolEffectiveness = {
    [ToolType.PICKAXE]: BlockCategory.STONE,
    [ToolType.AXE]: BlockCategory.WOOD,
    [ToolType.SHOVEL]: BlockCategory.DIRT,
    [ToolType.SWORD]: null, // swords don't mine faster
};

// Get mining speed multiplier for a given item slot vs block type
export function getMiningSpeed(slot, blockType) {
    if (!slot || slot.isBlock) return 0.25; // bare hands or block = slow

    const itemData = ItemData[slot.id];
    if (!itemData || itemData.category !== ItemCategory.TOOL) return 0.25;

    const blockCat = BlockMiningCategory[blockType] || BlockCategory.OTHER;
    const toolEffect = ToolEffectiveness[itemData.toolType];

    if (toolEffect && toolEffect === blockCat) {
        return itemData.miningSpeed; // right tool for the job
    }
    return 0.25; // wrong tool
}

// Get attack damage for held item
export function getAttackDamage(slot) {
    if (!slot || slot.isBlock) return 1; // bare hands

    const itemData = ItemData[slot.id];
    if (!itemData) return 1;
    return itemData.attackDamage || 1;
}

// Smelting recipes: input → output
export const SmeltingRecipes = [
    { input: BlockType.IRON_ORE, inputIsBlock: true, output: ItemType.IRON_INGOT, outputIsBlock: false, time: 10 },
    { input: BlockType.GOLD_ORE, inputIsBlock: true, output: ItemType.GOLD_INGOT, outputIsBlock: false, time: 10 },
    { input: BlockType.SAND, inputIsBlock: true, output: BlockType.GLASS, outputIsBlock: true, time: 10 },
    { input: BlockType.CLAY, inputIsBlock: true, output: BlockType.BRICK, outputIsBlock: true, time: 10 },
    { input: BlockType.COBBLESTONE, inputIsBlock: true, output: BlockType.STONE, outputIsBlock: true, time: 10 },
    { input: BlockType.WOOD, inputIsBlock: true, output: ItemType.COAL, outputIsBlock: false, time: 10 },
    { input: BlockType.COAL_ORE, inputIsBlock: true, output: ItemType.COAL, outputIsBlock: false, time: 10 },
    { input: BlockType.DIAMOND_ORE, inputIsBlock: true, output: ItemType.DIAMOND, outputIsBlock: false, time: 10 },
    { input: ItemType.RAW_BEEF, inputIsBlock: false, output: ItemType.COOKED_BEEF, outputIsBlock: false, time: 8 },
    { input: ItemType.RAW_PORK, inputIsBlock: false, output: ItemType.COOKED_PORK, outputIsBlock: false, time: 8 },
    { input: ItemType.RAW_CHICKEN, inputIsBlock: false, output: ItemType.COOKED_CHICKEN, outputIsBlock: false, time: 8 },
    { input: ItemType.RAW_MUTTON, inputIsBlock: false, output: ItemType.COOKED_MUTTON, outputIsBlock: false, time: 8 },
    { input: BlockType.EMERALD_ORE, inputIsBlock: true, output: ItemType.EMERALD, outputIsBlock: false, time: 10 },
    { input: BlockType.REDSTONE_ORE, inputIsBlock: true, output: ItemType.GUNPOWDER, outputIsBlock: false, time: 10 },
    { input: BlockType.LAPIS_ORE, inputIsBlock: true, output: ItemType.LAPIS, outputIsBlock: false, time: 10 },
    { input: BlockType.NETHERRACK, inputIsBlock: true, output: BlockType.BRICK, outputIsBlock: true, time: 10 },
];

// Fuel values (burn time in seconds)
export const FuelValues = {
    // Blocks as fuel
    [BlockType.WOOD]: 15,
    [BlockType.PLANKS]: 15,
    [BlockType.LEAVES]: 5,
    [BlockType.JUNGLE_WOOD]: 15,
    [BlockType.BIRCH_WOOD]: 15,
    [BlockType.SPRUCE_WOOD]: 15,
    [BlockType.ACACIA_WOOD]: 15,
    [BlockType.BOOKSHELF]: 15,
    [BlockType.FENCE]: 10,
    [BlockType.BAMBOO]: 5,
    // Items as fuel
    [ItemType.STICK]: 5,
    [ItemType.COAL]: 80,
    [ItemType.BOW]: 10,
};

// Check if an id is a fuel (works for both blocks and items)
export function getFuelTime(id) {
    return FuelValues[id] || 0;
}

// Calculate total armor points from armor slots
export function getArmorReduction(armorSlots) {
    let total = 0;
    for (const slot of armorSlots) {
        if (slot) {
            const data = ItemData[slot.id];
            if (data && data.armorPoints) {
                total += data.armorPoints;
            }
        }
    }
    // Max 20 armor points = 80% damage reduction
    return Math.min(0.8, total * 0.04);
}

// Mob drop tables: mob name → array of {item, isBlock, chance, min, max}
export const MobDrops = {
    'Zombie': [
        { item: ItemType.LEATHER, isBlock: false, chance: 0.5, min: 0, max: 2 },
    ],
    'Skeleton': [
        { item: ItemType.BONE, isBlock: false, chance: 0.8, min: 0, max: 2 },
        { item: ItemType.ARROW, isBlock: false, chance: 0.5, min: 0, max: 2 },
    ],
    'Spider': [
        { item: ItemType.STRING, isBlock: false, chance: 0.7, min: 0, max: 2 },
    ],
    'Creeper': [
        { item: ItemType.GUNPOWDER, isBlock: false, chance: 0.8, min: 0, max: 2 },
    ],
    'Enderman': [
        { item: ItemType.ENDER_PEARL, isBlock: false, chance: 0.5, min: 0, max: 1 },
    ],
    'Cow': [
        { item: ItemType.RAW_BEEF, isBlock: false, chance: 1.0, min: 1, max: 3 },
        { item: ItemType.LEATHER, isBlock: false, chance: 0.8, min: 0, max: 2 },
    ],
    'Pig': [
        { item: ItemType.RAW_PORK, isBlock: false, chance: 1.0, min: 1, max: 3 },
    ],
    'Sheep': [
        { item: ItemType.RAW_MUTTON, isBlock: false, chance: 1.0, min: 1, max: 2 },
        { item: BlockType.WOOL, isBlock: true, chance: 0.8, min: 1, max: 1 },
    ],
    'Chicken': [
        { item: ItemType.RAW_CHICKEN, isBlock: false, chance: 1.0, min: 1, max: 1 },
        { item: ItemType.FEATHER, isBlock: false, chance: 0.7, min: 0, max: 2 },
    ],
    'Witch': [
        { item: ItemType.GUNPOWDER, isBlock: false, chance: 0.5, min: 0, max: 2 },
        { item: ItemType.SUGAR, isBlock: false, chance: 0.5, min: 0, max: 2 },
    ],
    'Rabbit': [
        { item: ItemType.LEATHER, isBlock: false, chance: 0.5, min: 0, max: 1 },
    ],
};

// Look up item name by ID
export function getItemName(id, isBlock) {
    if (isBlock) {
        return 'Block'; // caller should use BlockData directly
    }
    return ItemData[id] ? ItemData[id].name : 'Unknown';
}
