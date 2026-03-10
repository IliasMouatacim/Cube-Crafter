// ============================================================
// Inventory & Crafting System (supports blocks + items)
// ============================================================

import { BlockType, BlockData, CraftingRecipes } from './blocks.js';
import { ItemType, ItemData, ItemCategory, SmeltingRecipes, FuelValues, ArmorSlot } from './items.js';

// Slot format: { id: number, isBlock: boolean, count: number, durability?: number } or null
// Positive id = BlockType, Negative id = ItemType

export class Inventory {
  constructor(size = 36) {
    this.size = size;
    this.hotbarSize = 9;
    this.selectedSlot = 0;

    // Each slot: { id, isBlock, count, durability? } or null
    this.slots = new Array(size).fill(null);

    // Crafting grid: 3x3
    this.craftingGrid = new Array(9).fill(null);
    this.craftingResult = null;

    // Furnace state
    this.furnaceInput = null;   // { id, isBlock, count }
    this.furnaceFuel = null;    // { id, isBlock, count }
    this.furnaceOutput = null;  // { id, isBlock, count }
    this.furnaceBurnTime = 0;   // remaining burn time of current fuel
    this.furnaceMaxBurnTime = 0;
    this.furnaceSmeltTime = 0;  // progress toward smelting current item
    this.furnaceSmeltTotal = 3; // seconds to smelt one item
  }

  // Give player starting items (survival mode — minimal)
  giveStarterKit() {
    this.addBlock(BlockType.WOOD, 8);
    this.addBlock(BlockType.PLANKS, 4);
    this.addBlock(BlockType.TORCH, 4);
  }

  // Helper: get max stack size for an id
  _maxStack(id, isBlock) {
    if (isBlock) return 64;
    const data = ItemData[id];
    return data ? data.stackSize : 64;
  }

  // Add a block to inventory
  addBlock(blockType, count = 1) {
    return this._addSlotItem(blockType, true, count);
  }

  // Add an item to inventory
  addItem(id, count = 1, durability = undefined) {
    if (id > 0) return this.addBlock(id, count); // positive = block
    return this._addSlotItem(id, false, count, durability);
  }

  // Internal: add to inventory with stacking
  _addSlotItem(id, isBlock, count, durability) {
    if (isBlock && (id === BlockType.AIR || !BlockData[id])) return count;
    if (!isBlock && !ItemData[id]) return count;

    const maxStack = this._maxStack(id, isBlock);

    // For non-stackable items (tools), fill empty slots directly
    if (maxStack === 1) {
      for (let i = 0; i < this.size; i++) {
        if (count <= 0) break;
        if (!this.slots[i]) {
          const dur = durability !== undefined ? durability : (isBlock ? undefined : (ItemData[id]?.durability || undefined));
          this.slots[i] = { id, isBlock, count: 1, durability: dur };
          count--;
        }
      }
      return count;
    }

    // Try to stack with existing slots
    for (let i = 0; i < this.size; i++) {
      if (count <= 0) break;
      const slot = this.slots[i];
      if (slot && slot.id === id && slot.isBlock === isBlock) {
        const space = maxStack - slot.count;
        const toAdd = Math.min(space, count);
        slot.count += toAdd;
        count -= toAdd;
      }
    }

    // Fill empty slots
    for (let i = 0; i < this.size; i++) {
      if (count <= 0) break;
      if (!this.slots[i]) {
        const toAdd = Math.min(maxStack, count);
        this.slots[i] = { id, isBlock, count: toAdd };
        count -= toAdd;
      }
    }

    return count;
  }

  // Remove one item from a specific slot
  removeFromSlot(slotIndex, count = 1) {
    const slot = this.slots[slotIndex];
    if (!slot) return null;

    const result = { id: slot.id, isBlock: slot.isBlock };
    slot.count -= count;
    if (slot.count <= 0) {
      this.slots[slotIndex] = null;
    }
    return result;
  }

  // Get the currently held slot data (full object)
  getHeldSlot() {
    return this.slots[this.selectedSlot] || null;
  }

  // Get the currently held block type (for backwards compat)
  getHeldItem() {
    const slot = this.slots[this.selectedSlot];
    if (!slot) return BlockType.AIR;
    return slot.isBlock ? slot.id : BlockType.AIR;
  }

  // Use one of the held item (consume 1)
  useHeldItem() {
    return this.removeFromSlot(this.selectedSlot, 1);
  }

  // Damage the held tool by 1 durability
  damageHeldTool() {
    const slot = this.slots[this.selectedSlot];
    if (!slot || slot.isBlock || slot.durability === undefined) return;

    slot.durability--;
    if (slot.durability <= 0) {
      this.slots[this.selectedSlot] = null; // tool breaks
    }
  }

  // Select hotbar slot (0-8)
  selectSlot(index) {
    this.selectedSlot = Math.max(0, Math.min(this.hotbarSize - 1, index));
  }

  // Place item into crafting grid
  setCraftingSlot(index, slotData) {
    if (index < 0 || index >= 9) return;
    this.craftingGrid[index] = slotData ? { id: slotData.id, isBlock: slotData.isBlock, count: 1 } : null;
    this._checkCrafting();
  }

  // Check crafting grid against recipes
  _checkCrafting() {
    this.craftingResult = null;

    for (const recipe of CraftingRecipes) {
      if (recipe.shapeless) {
        if (this._matchShapeless(recipe)) {
          this.craftingResult = {
            id: recipe.result,
            isBlock: recipe.resultIsBlock !== false,
            count: recipe.count,
            recipe
          };
          return;
        }
      } else {
        if (this._matchShaped(recipe)) {
          this.craftingResult = {
            id: recipe.result,
            isBlock: recipe.resultIsBlock !== false,
            count: recipe.count,
            recipe
          };
          return;
        }
      }
    }
  }

  _matchShaped(recipe) {
    for (let oRow = 0; oRow <= 2; oRow++) {
      for (let oCol = 0; oCol <= 2; oCol++) {
        if (this._matchAtOffset(recipe.pattern, oRow, oCol)) return true;
      }
    }
    return false;
  }

  _matchAtOffset(pattern, oRow, oCol) {
    let minRow = 3, maxRow = 0, minCol = 3, maxCol = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (pattern[r * 3 + c] !== 0) {
          minRow = Math.min(minRow, r);
          maxRow = Math.max(maxRow, r);
          minCol = Math.min(minCol, c);
          maxCol = Math.max(maxCol, c);
        }
      }
    }

    const pH = maxRow - minRow + 1;
    const pW = maxCol - minCol + 1;
    if (oRow + pH > 3 || oCol + pW > 3) return false;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const gridSlot = this.craftingGrid[r * 3 + c];
        const gridId = gridSlot ? gridSlot.id : 0;

        const pr = r - oRow + minRow;
        const pc = c - oCol + minCol;
        if (pr >= minRow && pr <= maxRow && pc >= minCol && pc <= maxCol) {
          const patternId = pattern[pr * 3 + pc];
          if (gridId !== patternId) return false;
        } else {
          if (gridId !== 0) return false;
        }
      }
    }

    return true;
  }

  _matchShapeless(recipe) {
    const needed = {};
    for (const id of recipe.pattern) {
      if (id !== 0) needed[id] = (needed[id] || 0) + 1;
    }

    const have = {};
    for (const slot of this.craftingGrid) {
      if (slot) have[slot.id] = (have[slot.id] || 0) + 1;
    }

    const neededKeys = Object.keys(needed);
    const haveKeys = Object.keys(have);
    if (neededKeys.length !== haveKeys.length) return false;

    for (const key of neededKeys) {
      if (Number(have[key]) !== Number(needed[key])) return false;
    }
    return true;
  }

  // Craft the item: consume ingredients, return result
  craft() {
    if (!this.craftingResult) return null;

    const result = { ...this.craftingResult };

    // Clear crafting grid
    for (let i = 0; i < 9; i++) {
      this.craftingGrid[i] = null;
    }
    this.craftingResult = null;

    // Add crafted item to inventory
    if (result.isBlock) {
      this.addBlock(result.id, result.count);
    } else {
      this.addItem(result.id, result.count);
    }

    return result;
  }

  // Drop the held item
  dropHeldItem() {
    return this.removeFromSlot(this.selectedSlot, 1);
  }

  // Update furnace smelting (call every game tick)
  updateFurnace(dt) {
    // Burn fuel
    if (this.furnaceBurnTime > 0) {
      this.furnaceBurnTime -= dt;
    }

    // Start new fuel if needed and we have input to smelt
    if (this.furnaceBurnTime <= 0 && this.furnaceInput && this.furnaceFuel) {
      const recipe = SmeltingRecipes.find(r => r.input === this.furnaceInput.id);
      if (recipe) {
        const fuelTime = FuelValues[this.furnaceFuel.id];
        if (fuelTime) {
          this.furnaceBurnTime = fuelTime;
          this.furnaceMaxBurnTime = fuelTime;
          this.furnaceFuel.count--;
          if (this.furnaceFuel.count <= 0) this.furnaceFuel = null;
        }
      }
    }

    // Progress smelting
    if (this.furnaceBurnTime > 0 && this.furnaceInput) {
      const recipe = SmeltingRecipes.find(r => r.input === this.furnaceInput.id);
      if (recipe) {
        this.furnaceSmeltTime += dt;
        if (this.furnaceSmeltTime >= this.furnaceSmeltTotal) {
          this.furnaceSmeltTime = 0;
          // Produce output
          const resultId = recipe.result;
          const isBlock = recipe.resultIsBlock !== false;
          if (!this.furnaceOutput) {
            this.furnaceOutput = { id: resultId, isBlock, count: 1 };
          } else if (this.furnaceOutput.id === resultId && this.furnaceOutput.count < 64) {
            this.furnaceOutput.count++;
          } else {
            return; // Output full
          }
          // Consume input
          this.furnaceInput.count--;
          if (this.furnaceInput.count <= 0) this.furnaceInput = null;
        }
      }
    } else {
      this.furnaceSmeltTime = 0;
    }
  }

  // Take furnace output
  takeFurnaceOutput() {
    if (!this.furnaceOutput) return null;
    const out = this.furnaceOutput;
    this.furnaceOutput = null;
    if (out.isBlock) {
      this.addBlock(out.id, out.count);
    } else {
      this.addItem(out.id, out.count);
    }
    return out;
  }

  // Put item into furnace input slot
  setFurnaceInput(slot) {
    this.furnaceInput = slot ? { id: slot.id, isBlock: slot.isBlock, count: slot.count || 1 } : null;
  }

  // Put item into furnace fuel slot
  setFurnaceFuel(slot) {
    this.furnaceFuel = slot ? { id: slot.id, isBlock: slot.isBlock, count: slot.count || 1 } : null;
  }

  // Equip armor from a given inventory slot index to the player's armor slots
  equipArmor(slotIndex, playerArmorSlots) {
    const slot = this.slots[slotIndex];
    if (!slot || slot.isBlock) return false;
    const itemData = ItemData[slot.id];
    if (!itemData || itemData.armorSlot === undefined) return false;

    const armorIdx = itemData.armorSlot;
    // Swap: put old armor back, equip new one
    const old = playerArmorSlots[armorIdx];
    playerArmorSlots[armorIdx] = { id: slot.id, durability: slot.durability || itemData.durability };
    this.slots[slotIndex] = null;

    if (old) {
      this.addItem(old.id, 1, old.durability);
    }
    return true;
  }
}
