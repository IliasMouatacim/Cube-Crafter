// ============================================================
// UI Manager: HUD, hotbar, inventory screen, crafting UI
// Supports both block and item slots
// ============================================================

import { BlockType, BlockData } from './blocks.js';
import { ItemData, ItemCategory, ArmorSlot } from './items.js';

export class UI {
  constructor(inventory, prefix = '') {
    this.inventory = inventory;
    this.inventoryOpen = false;
    this.furnaceOpen = false;
    this.creativeOpen = false;
    this.debugVisible = true;
    this.prefix = prefix;

    const pf = prefix ? prefix + '-' : '';
    this.hotbarEl = document.getElementById(pf + 'hotbar');
    this.healthBarEl = document.getElementById(pf + 'health-bar');
    this.hungerBarEl = document.getElementById(pf + 'hunger-bar');
    this.debugEl = document.getElementById(pf + 'debug-info');
    this.crosshairEl = document.getElementById(pf + 'crosshair');
    this.inventoryScreen = document.getElementById(pf + 'inventory-screen');
    this.inventoryGrid = document.getElementById(pf + 'inventory-grid');
    this.craftingGrid = document.getElementById(pf + 'crafting-grid');
    this.craftingOutput = document.getElementById(pf + 'crafting-output');
    this.timeDisplay = document.getElementById(pf + 'time-display');
    this.furnaceScreen = document.getElementById(pf + 'furnace-screen');
    this.armorSlotsEl = document.getElementById(pf + 'armor-slots');
    this.minimapEl = document.getElementById(pf + 'minimap');

    this._buildHotbar();
    this._buildHealthBar();
    this._buildHungerBar();
    if (this.inventoryGrid) this._buildInventoryGrid();
    if (this.craftingGrid) this._buildCraftingGrid();
  }

  show() {
    if (this.hotbarEl) this.hotbarEl.classList.add('active');
    if (this.healthBarEl) this.healthBarEl.classList.add('active');
    if (this.hungerBarEl) this.hungerBarEl.classList.add('active');
    if (this.crosshairEl) {
      if (this.prefix) {
        this.crosshairEl.classList.add('active');
      } else {
        this.crosshairEl.style.display = 'block';
      }
    }
    if (this.timeDisplay) this.timeDisplay.classList.add('active');
    if (this.debugVisible && this.debugEl) this.debugEl.classList.add('active');
  }

  updateTimeDisplay(dayNight) {
    if (!this.timeDisplay) return;
    const timeStr = dayNight.getTimeString();
    const icon = dayNight.isNight ? '🌙' : dayNight.isDawn || dayNight.isDusk ? '🌅' : '☀️';
    this.timeDisplay.innerHTML = `${icon} Day ${dayNight.dayCount} - ${timeStr}`;
  }

  // Create an icon for a slot (works for both blocks and items)
  _createSlotIcon(slot) {
    const div = document.createElement('div');
    div.className = 'block-icon';
    if (!slot) return div;

    if (slot.isBlock) {
      // Block icon — colored square
      const bd = BlockData[slot.id];
      if (bd) {
        const color = bd.topColor || bd.color;
        div.style.background = `#${color.toString(16).padStart(6, '0')}`;
      }
    } else {
      // Item icon — emoji/symbol with colored background
      const itemData = ItemData[slot.id];
      if (itemData) {
        div.style.background = `#${itemData.color.toString(16).padStart(6, '0')}30`;
        div.style.border = `1px solid #${itemData.color.toString(16).padStart(6, '0')}`;
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.fontSize = '16px';
        div.textContent = itemData.icon || '?';
      }
    }
    return div;
  }

  // Get name for a slot
  _getSlotName(slot) {
    if (!slot) return '';
    if (slot.isBlock) {
      const bd = BlockData[slot.id];
      return bd ? bd.name : '';
    }
    const itemData = ItemData[slot.id];
    return itemData ? itemData.name : '';
  }

  _buildHotbar() {
    if (!this.hotbarEl) return;
    this.hotbarEl.innerHTML = '';
    for (let i = 0; i < this.inventory.hotbarSize; i++) {
      const slot = document.createElement('div');
      slot.className = 'hotbar-slot';
      slot.dataset.index = i;

      const numEl = document.createElement('span');
      numEl.className = 'slot-number';
      numEl.textContent = i + 1;
      slot.appendChild(numEl);

      this.hotbarEl.appendChild(slot);
    }
  }

  _buildHealthBar() {
    if (!this.healthBarEl) return;
    this.healthBarEl.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = '❤';
      this.healthBarEl.appendChild(heart);
    }
  }

  _buildHungerBar() {
    if (!this.hungerBarEl) return;
    this.hungerBarEl.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const drum = document.createElement('span');
      drum.className = 'hunger-icon';
      drum.textContent = '🍗';
      this.hungerBarEl.appendChild(drum);
    }
  }

  _buildInventoryGrid() {
    this.inventoryGrid.innerHTML = '';
    for (let i = 0; i < this.inventory.size; i++) {
      const slot = document.createElement('div');
      slot.className = 'inv-slot';
      slot.dataset.index = i;
      slot.addEventListener('click', () => this._onInventorySlotClick(i));
      this.inventoryGrid.appendChild(slot);
    }
  }

  _buildCraftingGrid() {
    this.craftingGrid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const slot = document.createElement('div');
      slot.className = 'inv-slot';
      slot.dataset.craftIndex = i;
      slot.addEventListener('click', () => this._onCraftingSlotClick(i));
      this.craftingGrid.appendChild(slot);
    }

    this.craftingOutput.addEventListener('click', () => this._onCraftOutputClick());
  }

  _onInventorySlotClick(index) {
    const invSlot = this.inventory.slots[index];
    if (!invSlot) return;

    // Find first empty crafting slot and move item there
    for (let i = 0; i < 9; i++) {
      if (!this.inventory.craftingGrid[i]) {
        this.inventory.setCraftingSlot(i, invSlot);
        this.inventory.removeFromSlot(index, 1);
        this.updateAll();
        return;
      }
    }
  }

  _onCraftingSlotClick(index) {
    const slot = this.inventory.craftingGrid[index];
    if (slot) {
      // Return item to inventory
      if (slot.isBlock) {
        this.inventory.addBlock(slot.id, 1);
      } else {
        this.inventory.addItem(slot.id, 1);
      }
      this.inventory.setCraftingSlot(index, null);
      this.updateAll();
    }
  }

  _onCraftOutputClick() {
    if (this.inventory.craftingResult) {
      this.inventory.craft();
      this.updateAll();
    }
  }

  toggleInventory() {
    if (!this.inventoryScreen) return false;
    this.inventoryOpen = !this.inventoryOpen;
    if (this.inventoryOpen) {
      this.inventoryScreen.classList.remove('hidden');
      this.updateAll();
    } else {
      this.inventoryScreen.classList.add('hidden');
      // Return crafting grid items to inventory
      for (let i = 0; i < 9; i++) {
        const slot = this.inventory.craftingGrid[i];
        if (slot) {
          if (slot.isBlock) {
            this.inventory.addBlock(slot.id, 1);
          } else {
            this.inventory.addItem(slot.id, 1);
          }
          this.inventory.setCraftingSlot(i, null);
        }
      }
    }
    return this.inventoryOpen;
  }

  toggleDebug() {
    this.debugVisible = !this.debugVisible;
    if (this.debugEl) this.debugEl.classList.toggle('active', this.debugVisible);
  }

  toggleFurnace() {
    if (!this.furnaceScreen) return false;
    this.furnaceOpen = !this.furnaceOpen;
    if (this.furnaceOpen) {
      this.furnaceScreen.classList.remove('hidden');
      this.updateFurnaceUI();
    } else {
      this.furnaceScreen.classList.add('hidden');
      // Return furnace items to inventory
      if (this.inventory.furnaceInput) {
        if (this.inventory.furnaceInput.isBlock) {
          this.inventory.addBlock(this.inventory.furnaceInput.id, this.inventory.furnaceInput.count);
        } else {
          this.inventory.addItem(this.inventory.furnaceInput.id, this.inventory.furnaceInput.count);
        }
        this.inventory.furnaceInput = null;
      }
      if (this.inventory.furnaceFuel) {
        if (this.inventory.furnaceFuel.isBlock) {
          this.inventory.addBlock(this.inventory.furnaceFuel.id, this.inventory.furnaceFuel.count);
        } else {
          this.inventory.addItem(this.inventory.furnaceFuel.id, this.inventory.furnaceFuel.count);
        }
        this.inventory.furnaceFuel = null;
      }
    }
    return this.furnaceOpen;
  }

  updateFurnaceUI() {
    if (!this.furnaceScreen) return;
    const inputEl = this.furnaceScreen.querySelector('.furnace-input');
    const fuelEl = this.furnaceScreen.querySelector('.furnace-fuel');
    const outputEl = this.furnaceScreen.querySelector('.furnace-output');
    const progressEl = this.furnaceScreen.querySelector('.furnace-progress');
    const fireEl = this.furnaceScreen.querySelector('.furnace-fire');

    if (inputEl) {
      inputEl.innerHTML = '';
      if (this.inventory.furnaceInput) {
        const icon = this._createSlotIcon(this.inventory.furnaceInput);
        inputEl.appendChild(icon);
        if (this.inventory.furnaceInput.count > 1) {
          const c = document.createElement('span');
          c.className = 'slot-count';
          c.textContent = this.inventory.furnaceInput.count;
          inputEl.appendChild(c);
        }
      }
    }
    if (fuelEl) {
      fuelEl.innerHTML = '';
      if (this.inventory.furnaceFuel) {
        const icon = this._createSlotIcon(this.inventory.furnaceFuel);
        fuelEl.appendChild(icon);
        if (this.inventory.furnaceFuel.count > 1) {
          const c = document.createElement('span');
          c.className = 'slot-count';
          c.textContent = this.inventory.furnaceFuel.count;
          fuelEl.appendChild(c);
        }
      }
    }
    if (outputEl) {
      outputEl.innerHTML = '';
      if (this.inventory.furnaceOutput) {
        const icon = this._createSlotIcon(this.inventory.furnaceOutput);
        outputEl.appendChild(icon);
        if (this.inventory.furnaceOutput.count > 1) {
          const c = document.createElement('span');
          c.className = 'slot-count';
          c.textContent = this.inventory.furnaceOutput.count;
          outputEl.appendChild(c);
        }
      }
    }
    if (progressEl) {
      const pct = this.inventory.furnaceSmeltTotal > 0
        ? (this.inventory.furnaceSmeltTime / this.inventory.furnaceSmeltTotal) * 100 : 0;
      progressEl.style.width = `${pct}%`;
    }
    if (fireEl) {
      const pct = this.inventory.furnaceMaxBurnTime > 0
        ? (this.inventory.furnaceBurnTime / this.inventory.furnaceMaxBurnTime) * 100 : 0;
      fireEl.style.opacity = pct > 0 ? '1' : '0.3';
    }
  }

  updateArmorSlots(playerArmorSlots) {
    if (!this.armorSlotsEl) return;
    const slotNames = ['Helmet', 'Chestplate', 'Leggings', 'Boots'];
    this.armorSlotsEl.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      const slotEl = document.createElement('div');
      slotEl.className = 'armor-slot';
      slotEl.title = slotNames[i];
      if (playerArmorSlots[i]) {
        const itemData = ItemData[playerArmorSlots[i].id];
        if (itemData) {
          slotEl.textContent = itemData.icon || '?';
          slotEl.style.background = `#${itemData.color.toString(16).padStart(6, '0')}30`;
        }
      } else {
        slotEl.textContent = ['🪖', '🦺', '👖', '👢'][i];
        slotEl.style.opacity = '0.3';
      }
      this.armorSlotsEl.appendChild(slotEl);
    }
  }

  updateMinimap(playerPos, worldGen) {
    if (!this.minimapEl) return;
    const canvas = this.minimapEl.querySelector('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const half = Math.floor(size / 2);
    const px = Math.floor(playerPos.x);
    const pz = Math.floor(playerPos.z);

    for (let dx = -half; dx < half; dx++) {
      for (let dz = -half; dz < half; dz++) {
        const wx = px + dx * 2;
        const wz = pz + dz * 2;
        const biome = worldGen.getBiome(wx, wz);
        const colors = [0x7ec850, 0xc2b280, 0x228b22, 0x808080, 0xdcdcdc, 0x4169e1,
          0x006400, 0x9acd32, 0x2f4f2f, 0x8b0000, 0x90ee90, 0xcd853f, 0x87ceeb, 0x556b2f];
        const color = colors[biome] || 0x808080;
        const r = (color >> 16) & 0xff;
        const g = (color >> 8) & 0xff;
        const b = color & 0xff;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(half + dx, half + dz, 1, 1);
      }
    }
    // Player dot
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(half - 1, half - 1, 3, 3);
  }

  updateHotbar() {
    if (!this.hotbarEl) return;
    const slots = this.hotbarEl.children;
    for (let i = 0; i < this.inventory.hotbarSize; i++) {
      const slotEl = slots[i];
      if (!slotEl) continue;
      slotEl.className = `hotbar-slot${i === this.inventory.selectedSlot ? ' selected' : ''}`;

      // Clean old elements
      const oldIcon = slotEl.querySelector('.block-icon');
      if (oldIcon) oldIcon.remove();
      const oldCount = slotEl.querySelector('.slot-count');
      if (oldCount) oldCount.remove();
      const oldDur = slotEl.querySelector('.durability-bar');
      if (oldDur) oldDur.remove();
      const oldName = slotEl.querySelector('.slot-name');
      if (oldName) oldName.remove();

      const item = this.inventory.slots[i];
      if (item) {
        const icon = this._createSlotIcon(item);
        slotEl.appendChild(icon);

        if (item.count > 1) {
          const countEl = document.createElement('span');
          countEl.className = 'slot-count';
          countEl.textContent = item.count;
          slotEl.appendChild(countEl);
        }

        // Durability bar for tools
        if (!item.isBlock && item.durability !== undefined) {
          const itemData = ItemData[item.id];
          if (itemData && itemData.durability) {
            const pct = item.durability / itemData.durability;
            const durBar = document.createElement('div');
            durBar.className = 'durability-bar';
            const fill = document.createElement('div');
            fill.className = 'durability-fill';
            fill.style.width = `${pct * 100}%`;
            fill.style.background = pct > 0.5 ? '#0f0' : pct > 0.25 ? '#ff0' : '#f00';
            durBar.appendChild(fill);
            slotEl.appendChild(durBar);
          }
        }

        // Show item name when selected
        if (i === this.inventory.selectedSlot) {
          const nameEl = document.createElement('div');
          nameEl.className = 'slot-name';
          nameEl.textContent = this._getSlotName(item);
          slotEl.appendChild(nameEl);
        }
      }
    }
  }

  updateHealth(health) {
    if (!this.healthBarEl) return;
    const hearts = this.healthBarEl.children;
    for (let i = 0; i < 10; i++) {
      const hp = (i + 1) * 2;
      if (health >= hp) {
        hearts[i].textContent = '❤';
        hearts[i].style.color = '#e00';
      } else if (health >= hp - 1) {
        hearts[i].textContent = '❤';
        hearts[i].style.color = '#a00';
      } else {
        hearts[i].textContent = '❤';
        hearts[i].style.color = '#444';
      }
    }
  }

  updateHunger(hunger) {
    if (!this.hungerBarEl) return;
    const icons = this.hungerBarEl.children;
    for (let i = 0; i < 10; i++) {
      const hp = (i + 1) * 2;
      if (hunger >= hp) {
        icons[i].style.opacity = '1';
      } else if (hunger >= hp - 1) {
        icons[i].style.opacity = '0.5';
      } else {
        icons[i].style.opacity = '0.2';
      }
    }
  }

  updateDebug(info) {
    if (!this.debugVisible || !this.debugEl) return;
    this.debugEl.innerHTML = `
      XYZ: ${info.x} / ${info.y} / ${info.z}<br>
      Biome: ${info.biome}<br>
      Chunks: ${info.chunks}<br>
      Health: ${info.health}/${20}<br>
      Hunger: ${info.hunger}/${20}<br>
      FPS: ${info.fps || '?'}<br>
      Time: ${info.time || '?'} (${info.period || '?'})<br>
      Day: ${info.day || 1}<br>
      Mobs: ${info.mobs || '0'}<br>
      Mode: ${info.mode || 'Survival'}
    `;
  }

  updateInventoryScreen() {
    // Update inventory slots
    const invSlots = this.inventoryGrid.children;
    for (let i = 0; i < this.inventory.size; i++) {
      const slotEl = invSlots[i];
      const oldIcon = slotEl.querySelector('.block-icon');
      if (oldIcon) oldIcon.remove();
      const oldCount = slotEl.querySelector('.slot-count');
      if (oldCount) oldCount.remove();

      const item = this.inventory.slots[i];
      if (item) {
        const icon = this._createSlotIcon(item);
        slotEl.appendChild(icon);
        if (item.count > 1) {
          const countEl = document.createElement('span');
          countEl.className = 'slot-count';
          countEl.textContent = item.count;
          slotEl.appendChild(countEl);
        }
      }
    }

    // Update crafting grid
    const craftSlots = this.craftingGrid.children;
    for (let i = 0; i < 9; i++) {
      const slotEl = craftSlots[i];
      const oldIcon = slotEl.querySelector('.block-icon');
      if (oldIcon) oldIcon.remove();

      const item = this.inventory.craftingGrid[i];
      if (item) {
        const icon = this._createSlotIcon(item);
        slotEl.appendChild(icon);
      }
    }

    // Update crafting output
    const oldOutput = this.craftingOutput.querySelector('.block-icon');
    if (oldOutput) oldOutput.remove();
    const oldLabel = this.craftingOutput.querySelector('.slot-count');
    if (oldLabel) oldLabel.remove();

    if (this.inventory.craftingResult) {
      const icon = this._createSlotIcon(this.inventory.craftingResult);
      this.craftingOutput.appendChild(icon);
      if (this.inventory.craftingResult.count > 1) {
        const countEl = document.createElement('span');
        countEl.className = 'slot-count';
        countEl.textContent = this.inventory.craftingResult.count;
        this.craftingOutput.appendChild(countEl);
      }
    }
  }

  updateAll() {
    this.updateHotbar();
    if (this.inventoryOpen) {
      this.updateInventoryScreen();
    }
  }
}
