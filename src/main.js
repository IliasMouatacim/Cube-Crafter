// ============================================================
// VoxelCraft - Main Entry Point
// Sets up Three.js scene, game loop, and ties all systems together
// ============================================================

import * as THREE from 'three';
import { World } from './world.js';
import { Player, P1_KEYS, P2_KEYS } from './player.js';
import { Inventory } from './inventory.js';
import { UI } from './ui.js';
import { BlockType, BlockData, REACH_DISTANCE, CHUNK_SIZE, Biome } from './blocks.js';
import { DayNightCycle } from './daynight.js';
import { MobManager } from './mobs.js';
import { ItemData, ItemCategory, ItemType, ToolType, getMiningSpeed, getAttackDamage, FuelValues, SmeltingRecipes } from './items.js';
import { SoundFX } from './sound.js';
import { ParticleSystem } from './particles.js';
import { TouchControls } from './touch.js';

// Reusable temp vector for main loop
const _tmpDir = new THREE.Vector3();

// NPC trade offers (input → output)
const NPC_TRADES = [
  { costId: ItemType.EMERALD, costCount: 1, costIsBlock: false, resultId: ItemType.BREAD, resultCount: 6, resultIsBlock: false },
  { costId: ItemType.EMERALD, costCount: 3, costIsBlock: false, resultId: ItemType.IRON_PICKAXE, resultCount: 1, resultIsBlock: false },
  { costId: ItemType.EMERALD, costCount: 5, costIsBlock: false, resultId: ItemType.DIAMOND, resultCount: 1, resultIsBlock: false },
  { costId: ItemType.EMERALD, costCount: 2, costIsBlock: false, resultId: ItemType.GOLDEN_APPLE, resultCount: 2, resultIsBlock: false },
  { costId: ItemType.EMERALD, costCount: 1, costIsBlock: false, resultId: ItemType.ARROW, resultCount: 16, resultIsBlock: false },
  { costId: ItemType.COAL, costCount: 10, costIsBlock: false, resultId: ItemType.EMERALD, resultCount: 1, resultIsBlock: false },
  { costId: ItemType.IRON_INGOT, costCount: 4, costIsBlock: false, resultId: ItemType.EMERALD, resultCount: 1, resultIsBlock: false },
  { costId: ItemType.WHEAT, costCount: 20, costIsBlock: false, resultId: ItemType.EMERALD, resultCount: 1, resultIsBlock: false },
];

class Game {
  constructor() {
    this.running = false;
    this.coopMode = false;
    this.lastTime = 0;
    this.frameCount = 0;
    this.fpsTime = 0;
    this.fps = 0;

    // Three.js setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.Fog(0x87CEEB, 60, 120);

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 200);
    this.camera2 = new THREE.PerspectiveCamera(70, (window.innerWidth / 2) / window.innerHeight, 0.1, 200);

    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setScissorTest(false);
    document.body.insertBefore(this.renderer.domElement, document.body.firstChild);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x808090, 0.8);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFFFDD, 1.0);
    sunLight.position.set(100, 200, 100);
    this.scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x556B2F, 0.4);
    this.scene.add(hemiLight);

    // World seed
    this.seed = Math.floor(Math.random() * 100000);

    // Core systems
    this.world = new World(this.scene, this.seed);
    this.dayNight = new DayNightCycle(this.scene);
    this.mobs = new MobManager(this.scene, this.world);
    // Sound & particles
    this.particles = new ParticleSystem(this.scene);

    // Mobile touch controls
    this.touch = new TouchControls();

    // Player 1
    this.inventory = new Inventory(36);
    this.player = new Player(this.camera, this.world, P1_KEYS, 0);
    this.ui = new UI(this.inventory);

    // Player 2 (initialized on co-op start)
    this.inventory2 = null;
    this.player2 = null;
    this.ui2 = null;

    // Add P1 highlight + character model
    this.scene.add(this.player.highlightMesh);
    this.player.characterModel.addToScene(this.scene);

    this.inventory.giveStarterKit();

    // Cheat code input buffer
    this._cheatBuffer = '';
    this._cheatTimer = 0;
    this._cheatCodes = {
      'day': () => { this.dayNight.time = 0.30; },
      'night': () => { this.dayNight.time = 0.80; },
      'sword': () => { this.inventory.addItem(ItemType.DIAMOND_SWORD, 1); this.ui.updateHotbar(); },
      'house': () => { this._spawnHouse(); },
      'doors': () => { this.inventory.addBlock(BlockType.DOOR, 64); this.ui.updateHotbar(); },
    };
    this._maxCheatLen = Math.max(...Object.keys(this._cheatCodes).map(k => k.length));

    // Progressive mining state (per-player)
    this.breaking = false;
    this.breakProgress = 0;
    this.breakTarget = null;
    this._breakProgressEl = document.getElementById('break-progress');
    this._breakFill = this._breakProgressEl ? this._breakProgressEl.querySelector('.break-progress-fill') : null;
    this._miningSoundTimer = 0;

    // Continuous placement state
    this.placing = false;
    this._placeCooldown = 0;

    // Player arrows (bow projectiles)
    this.playerArrows = [];

    // Persistent chest storage — key: "x,y,z" → Array<slot>
    this.chestStorage = {};

    // NPC trading state
    this.tradeOpen = false;
    this._tradeScreen = document.getElementById('trade-screen');
    this._tradeList = document.getElementById('trade-list');

    this._setupEvents();

    // Start screen buttons
    document.getElementById('play-btn').addEventListener('click', () => this.start(false));
    document.getElementById('coop-btn').addEventListener('click', () => this.start(true));
  }

  _initPlayer2() {
    this.inventory2 = new Inventory(36);
    this.player2 = new Player(this.camera2, this.world, P2_KEYS, 1);
    this.ui2 = new UI(this.inventory2, 'p2');
    this.scene.add(this.player2.highlightMesh);
    this.player2.characterModel.addToScene(this.scene);
    this.inventory2.giveStarterKit();
    // Mark both players as co-op so gamepads bind strictly
    this.player.coopMode = true;
    this.player2.coopMode = true;
  }

  _setupEvents() {
    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (this.coopMode) {
        this.camera.aspect = (w / 2) / h;
        this.camera2.aspect = (w / 2) / h;
        this.camera2.updateProjectionMatrix();
      } else {
        this.camera.aspect = w / h;
      }
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    // Pointer lock (P1 mouse)
    document.addEventListener('pointerlockchange', () => {
      this.player.mouseLocked = !!document.pointerLockElement;
    });

    // Mouse buttons: P1 break (left) and place (right) — desktop only
    document.addEventListener('mousedown', (e) => {
      if (!this.running || this.touch.isMobile) return;

      // Close trade screen on click outside
      if (this.tradeOpen) return;

      // Re-lock pointer if lost (e.g. tabbed out and came back)
      if (!this.player.mouseLocked && !this.ui.inventoryOpen) {
        this.renderer.domElement.requestPointerLock();
        return;
      }

      if (!this.player.mouseLocked) return;

      if (e.button === 0) {
        // Trigger punch animation
        this.player.characterModel.triggerPunch();
        SoundFX.hit();
        // Use player position (not camera) for attack origin
        const attackOrigin = this.player.position.clone();
        attackOrigin.y += 1.5;
        _tmpDir.set(0, 0, -1).applyQuaternion(this.camera.quaternion);

        // Check if holding bow — shoot arrow
        const heldSlot = this.inventory.getHeldSlot();
        if (heldSlot && !heldSlot.isBlock && ItemData[heldSlot.id] && ItemData[heldSlot.id].toolType === ToolType.BOW) {
          this._shootBow(this.player, this.inventory, this.ui);
          return;
        }

        // Use weapon damage from held item
        const damage = getAttackDamage(heldSlot);
        const hitMob = this.mobs.playerAttack(attackOrigin, _tmpDir, damage);
        if (hitMob) {
          // Damage weapon on hit
          this.inventory.damageHeldTool();
        } else {
          // Start progressive mining
          this.breaking = true;
        }
      } else if (e.button === 2) {
        this._handleRightClick(this.player, this.inventory, this.ui);
        this.placing = true;
        this._placeCooldown = 0.25; // initial place already happened
      }
    });

    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Stop progressive mining on mouse release
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.breaking = false;
        this.breakProgress = 0;
        this.breakTarget = null;
        if (this._breakProgressEl) this._breakProgressEl.style.display = 'none';
      }
      if (e.button === 2) {
        this.placing = false;
      }
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (!this.running) return;

      // Cheat code detection — typed letters while playing
      if (!this.ui.inventoryOpen && !this.tradeOpen && e.key.length === 1 && /^[a-z]$/i.test(e.key)) {
        this._cheatBuffer += e.key.toLowerCase();
        this._cheatTimer = 1.5; // reset timeout
        // Keep buffer trimmed to max cheat length
        if (this._cheatBuffer.length > this._maxCheatLen) {
          this._cheatBuffer = this._cheatBuffer.slice(-this._maxCheatLen);
        }
        // Check if buffer ends with any cheat code
        for (const [code, fn] of Object.entries(this._cheatCodes)) {
          if (this._cheatBuffer.endsWith(code)) {
            fn();
            this._cheatBuffer = '';
            break;
          }
        }
      }

      // P1: Number keys for hotbar
      if (e.code >= 'Digit1' && e.code <= 'Digit9') {
        const slot = parseInt(e.code.replace('Digit', '')) - 1;
        this.inventory.selectSlot(slot);
        this.ui.updateHotbar();
      }

      // P1: E = inventory toggle
      if (e.code === 'KeyE') {
        const isOpen = this.ui.toggleInventory();
        if (isOpen) {
          document.exitPointerLock();
          this.player.mouseLocked = false;
        } else {
          this.renderer.domElement.requestPointerLock();
        }
      }

      // F3 = debug toggle
      if (e.code === 'F3') {
        e.preventDefault();
        this.ui.toggleDebug();
        if (this.ui2) this.ui2.toggleDebug();
      }

      // P1: Q = drop item
      if (e.code === 'KeyQ') {
        this.inventory.dropHeldItem();
        this.ui.updateHotbar();
      }

      // G = toggle creative mode
      if (e.code === 'KeyG') {
        this.player.creativeMode = !this.player.creativeMode;
        if (this.player.creativeMode) {
          this.player.health = this.player.maxHealth;
          this.player.hunger = this.player.maxHunger;
        }
      }

      // R = equip held armor
      if (e.code === 'KeyR') {
        const equipped = this.inventory.equipArmor(this.inventory.selectedSlot, this.player.armorSlots);
        if (equipped) {
          this.ui.updateHotbar();
          this.ui.updateArmorSlots(this.player.armorSlots);
        }
      }

      // F = close furnace if open
      if (e.code === 'KeyF' && this.ui.furnaceOpen) {
        this.ui.toggleFurnace();
        this.renderer.domElement.requestPointerLock();
      }

      // T = close trade screen if open, or interact with NPC
      if (e.code === 'KeyT' || (e.code === 'Escape' && this.tradeOpen)) {
        if (this.tradeOpen) {
          this._closeTrade();
        } else if (e.code === 'KeyT' && this._checkNPCInteraction()) {
          this._openTrade();
        }
      }

      // === P2 controls (co-op) ===
      if (this.coopMode && this.player2) {
        // P2: Numpad 1-9 for hotbar
        if (e.code >= 'Numpad1' && e.code <= 'Numpad9') {
          const slot = parseInt(e.code.replace('Numpad', '')) - 1;
          this.inventory2.selectSlot(slot);
          this.ui2.updateHotbar();
        }

        // P2: U = break block, O = place block
        if (e.code === 'KeyU') {
          this.player2.characterModel.triggerPunch();
          const attackOrigin2 = this.player2.position.clone();
          attackOrigin2.y += 1.5;
          _tmpDir.set(0, 0, -1).applyQuaternion(this.camera2.quaternion);
          const hitMob2 = this.mobs.playerAttack(attackOrigin2, _tmpDir);
          if (!hitMob2) {
            this._breakBlock(this.player2, this.inventory2, this.ui2);
          }
        }
        if (e.code === 'KeyO') {
          this._placeBlock(this.player2, this.inventory2, this.ui2);
        }

        // P2: P = inventory toggle
        if (e.code === 'KeyP') {
          this.ui2.toggleInventory();
        }
      }
    });

    // Scroll wheel for P1 hotbar
    document.addEventListener('wheel', (e) => {
      if (!this.running || this.ui.inventoryOpen) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      let newSlot = this.inventory.selectedSlot + dir;
      if (newSlot < 0) newSlot = this.inventory.hotbarSize - 1;
      if (newSlot >= this.inventory.hotbarSize) newSlot = 0;
      this.inventory.selectSlot(newSlot);
      this.ui.updateHotbar();
    });
  }

  _breakBlock(player, inventory, ui) {
    if (!player.targetBlock) return;
    const { blockPos, blockType } = player.targetBlock;

    const bd = BlockData[blockType];
    if (!bd || bd.hardness < 0) return;

    const dropType = bd.drops !== undefined ? bd.drops : blockType;
    this.world.setBlock(blockPos.x, blockPos.y, blockPos.z, BlockType.AIR);

    // Particles + sound
    SoundFX.blockBreak();
    this.particles.spawnBlockBreak(blockPos.x, blockPos.y, blockPos.z, bd.topColor || bd.color);

    if (dropType !== BlockType.AIR) {
      inventory.addBlock(dropType, 1);
      SoundFX.pickup();
    }
    if (!player.creativeMode) {
      inventory.damageHeldTool();
    }
    ui.updateHotbar();
  }

  // Progressive mining: called every frame while LMB held for P1
  _updateMining(dt) {
    if (!this.breaking || this.ui.inventoryOpen || this.tradeOpen) {
      this.breakProgress = 0;
      this.breakTarget = null;
      if (this._breakProgressEl) this._breakProgressEl.style.display = 'none';
      return;
    }
    const tb = this.player.targetBlock;
    if (!tb) {
      this.breakProgress = 0;
      this.breakTarget = null;
      if (this._breakProgressEl) this._breakProgressEl.style.display = 'none';
      return;
    }

    const { blockPos, blockType } = tb;
    const bd = BlockData[blockType];
    if (!bd || bd.hardness < 0) return;

    // Creative = instant break
    if (this.player.creativeMode) {
      this._breakBlock(this.player, this.inventory, this.ui);
      return;
    }

    // Check target changed
    const key = `${blockPos.x},${blockPos.y},${blockPos.z}`;
    if (this.breakTarget !== key) {
      this.breakTarget = key;
      this.breakProgress = 0;
    }

    // Calculate break speed based on tool
    const heldSlot = this.inventory.getHeldSlot();
    const speed = getMiningSpeed(heldSlot, blockType);
    this.breakProgress += (speed / Math.max(0.05, bd.hardness)) * dt;

    // Mining tick particles + sound
    this._miningSoundTimer -= dt;
    if (this._miningSoundTimer <= 0) {
      SoundFX.mining();
      this.particles.spawnMiningTick(blockPos.x, blockPos.y, blockPos.z, bd.topColor || bd.color);
      this._miningSoundTimer = 0.25;
    }

    // Show progress bar
    if (this._breakProgressEl && this._breakFill) {
      this._breakProgressEl.style.display = 'block';
      this._breakFill.style.width = `${Math.min(100, this.breakProgress * 100)}%`;
    }

    if (this.breakProgress >= 1.0) {
      this._breakBlock(this.player, this.inventory, this.ui);
      this.breakProgress = 0;
      this.breakTarget = null;
      if (this._breakProgressEl) this._breakProgressEl.style.display = 'none';
    }
  }

  _updatePlacing(dt) {
    if (!this.placing || this.ui.inventoryOpen || this.tradeOpen) return;
    this._placeCooldown -= dt;
    if (this._placeCooldown > 0) return;
    this._placeCooldown = 0.2; // 200ms between placements
    this._placeBlock(this.player, this.inventory, this.ui);
  }

  // Right-click handler extracted for reuse
  _handleRightClick(player, inventory, ui) {
    // Check furnace
    if (player.targetBlock && player.targetBlock.blockType === BlockType.FURNACE) {
      const isOpen = ui.toggleFurnace();
      if (player === this.player) {
        if (isOpen) { document.exitPointerLock(); player.mouseLocked = false; }
        else this.renderer.domElement.requestPointerLock();
      }
      return;
    }
    // Check chest (persistent storage)
    if (player.targetBlock && player.targetBlock.blockType === BlockType.CHEST) {
      const bp = player.targetBlock.blockPos;
      const chestKey = `${bp.x},${bp.y},${bp.z}`;
      this._openChest(chestKey, inventory, ui);
      return;
    }
    // Check door
    if (player.targetBlock && player.targetBlock.blockType === BlockType.DOOR) {
      const bp = player.targetBlock.blockPos;
      const isOpen = this.world.toggleDoor(bp.x, bp.y, bp.z);
      // Play a sound based on whether it is opening or closing
      // Reusing block place/break sounds for doors
      if (isOpen) SoundFX.blockBreak();
      else SoundFX.blockPlace();
      return;
    }
    // Try eat food
    const held = inventory.getHeldSlot();
    if (held && !held.isBlock && ItemData[held.id] && ItemData[held.id].category === ItemCategory.FOOD) {
      if (player.hunger < player.maxHunger) {
        player.hunger = Math.min(player.maxHunger, player.hunger + (ItemData[held.id].foodValue || 0));
        inventory.useHeldItem();
        ui.updateHotbar();
      }
    } else {
      this._placeBlock(player, inventory, ui);
    }
  }

  _placeBlock(player, inventory, ui) {
    if (!player.targetBlock) return;
    const { blockPos, normal } = player.targetBlock;

    const heldSlot = inventory.getHeldSlot();
    // Can only place blocks, not items
    if (!heldSlot || !heldSlot.isBlock) return;
    const placeType = heldSlot.id;
    if (placeType === BlockType.AIR) return;

    const px = blockPos.x + normal.x;
    const py = blockPos.y + normal.y;
    const pz = blockPos.z + normal.z;

    // Don't place inside any player
    const players = [this.player];
    if (this.player2) players.push(this.player2);

    for (const p of players) {
      const pMinX = p.position.x - 0.3;
      const pMaxX = p.position.x + 0.3;
      const pMinY = p.position.y;
      const pMaxY = p.position.y + 1.7;
      const pMinZ = p.position.z - 0.3;
      const pMaxZ = p.position.z + 0.3;

      if (px + 1 > pMinX && px < pMaxX &&
        py + 1 > pMinY && py < pMaxY &&
        pz + 1 > pMinZ && pz < pMaxZ) {
        return;
      }
    }

    if (this.world.getBlock(px, py, pz) !== BlockType.AIR) return;

    this.world.setBlock(px, py, pz, placeType);
    SoundFX.blockPlace();
    if (!player.creativeMode) {
      inventory.useHeldItem();
    }
    ui.updateHotbar();
  }

  // ── Bow Shooting ──────────────────────────────────────────
  _shootBow(player, inventory, ui) {
    // Check for arrows in inventory
    let arrowSlotIdx = -1;
    for (let i = 0; i < inventory.size; i++) {
      const s = inventory.slots[i];
      if (s && !s.isBlock && s.id === ItemType.ARROW && s.count > 0) {
        arrowSlotIdx = i;
        break;
      }
    }
    if (arrowSlotIdx < 0 && !player.creativeMode) return;

    SoundFX.bowShoot();
    inventory.damageHeldTool();
    if (!player.creativeMode) inventory.removeFromSlot(arrowSlotIdx, 1);
    ui.updateHotbar();

    // Create arrow projectile
    const origin = player.position.clone();
    origin.y += 1.5;
    _tmpDir.set(0, 0, -1).applyQuaternion(player.camera.quaternion);
    const speed = 25;
    const geo = new THREE.BoxGeometry(0.08, 0.08, 0.5);
    const mat = new THREE.MeshLambertMaterial({ color: 0x8b6914 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(origin);
    this.scene.add(mesh);

    this.playerArrows.push({
      position: origin.clone(),
      velocity: _tmpDir.clone().multiplyScalar(speed).add(new THREE.Vector3(0, 2, 0)),
      mesh,
      damage: getAttackDamage(inventory.getHeldSlot()) || 6,
      life: 5,
    });
  }

  _updatePlayerArrows(dt) {
    for (let i = this.playerArrows.length - 1; i >= 0; i--) {
      const a = this.playerArrows[i];
      a.position.addScaledVector(a.velocity, dt);
      a.velocity.y -= 9.8 * dt;
      a.life -= dt;
      a.mesh.position.copy(a.position);

      // Hit mob
      let hitMob = false;
      for (const mob of this.mobs.mobs) {
        if (!mob.alive) continue;
        const dist = a.position.distanceTo(mob.position);
        if (dist < 1.2) {
          const kb = _tmpDir.copy(a.velocity).normalize();
          mob.takeDamage(a.damage, kb);
          this.scene.remove(a.mesh);
          this.playerArrows.splice(i, 1);
          hitMob = true;
          break;
        }
      }
      if (hitMob) continue;

      // Hit ground
      const bx = Math.floor(a.position.x);
      const by = Math.floor(a.position.y);
      const bz = Math.floor(a.position.z);
      const block = this.world.getBlock(bx, by, bz);
      if (block !== undefined && block !== BlockType.AIR && block !== BlockType.WATER) {
        this.scene.remove(a.mesh);
        this.playerArrows.splice(i, 1);
        continue;
      }

      if (a.life <= 0) {
        this.scene.remove(a.mesh);
        this.playerArrows.splice(i, 1);
      }
    }
  }

  // ── Persistent Chest Storage ─────────────────────────────
  _openChest(chestKey, inventory, ui) {
    // Initialize chest if first open — give random loot
    if (!this.chestStorage[chestKey]) {
      const lootTable = [
        { id: BlockType.IRON_ORE, isBlock: true, count: 1 + Math.floor(Math.random() * 4) },
        { id: BlockType.GOLD_ORE, isBlock: true, count: 1 + Math.floor(Math.random() * 3) },
        { id: BlockType.DIAMOND_ORE, isBlock: true, count: Math.random() < 0.3 ? 1 : 0 },
        { id: BlockType.TORCH, isBlock: true, count: 2 + Math.floor(Math.random() * 4) },
        { id: BlockType.PLANKS, isBlock: true, count: 4 + Math.floor(Math.random() * 8) },
        { id: ItemType.BREAD, isBlock: false, count: Math.floor(Math.random() * 4) },
        { id: ItemType.IRON_INGOT, isBlock: false, count: Math.floor(Math.random() * 3) },
        { id: ItemType.ARROW, isBlock: false, count: Math.floor(Math.random() * 8) },
      ];
      this.chestStorage[chestKey] = lootTable.filter(l => l.count > 0);
    }

    // Transfer all items from chest to player
    const items = this.chestStorage[chestKey];
    for (const item of items) {
      if (item.isBlock) inventory.addBlock(item.id, item.count);
      else inventory.addItem(item.id, item.count);
    }
    SoundFX.pickup();
    // Clear chest
    this.chestStorage[chestKey] = [];
    ui.updateHotbar();
  }

  // ── NPC Trading ──────────────────────────────────────────
  _openTrade() {
    if (this.tradeOpen) return;
    this.tradeOpen = true;
    document.exitPointerLock();
    this.player.mouseLocked = false;
    this._tradeScreen.classList.remove('hidden');
    this._buildTradeUI();
  }

  _closeTrade() {
    this.tradeOpen = false;
    this._tradeScreen.classList.add('hidden');
    this.renderer.domElement.requestPointerLock();
  }

  _buildTradeUI() {
    if (!this._tradeList) return;
    this._tradeList.innerHTML = '';
    for (let i = 0; i < NPC_TRADES.length; i++) {
      const t = NPC_TRADES[i];
      const costName = t.costIsBlock ? (BlockData[t.costId]?.name || '?') : (ItemData[t.costId]?.name || '?');
      const resultName = t.resultIsBlock ? (BlockData[t.resultId]?.name || '?') : (ItemData[t.resultId]?.name || '?');

      // Check if player can afford
      const canAfford = this._canAffordTrade(t);

      const row = document.createElement('div');
      row.className = 'trade-row' + (canAfford ? '' : ' disabled');
      row.innerHTML = `<span>${t.costCount}× ${costName}</span><span class="trade-arrow">→</span><span>${t.resultCount}× ${resultName}</span>`;
      if (canAfford) {
        row.addEventListener('click', () => {
          this._executeTrade(t);
          this._buildTradeUI(); // refresh
        });
      }
      this._tradeList.appendChild(row);
    }
  }

  _canAffordTrade(trade) {
    let have = 0;
    for (let i = 0; i < this.inventory.size; i++) {
      const s = this.inventory.slots[i];
      if (s && s.id === trade.costId && s.isBlock === trade.costIsBlock) {
        have += s.count;
      }
    }
    return have >= trade.costCount;
  }

  _executeTrade(trade) {
    // Remove cost
    let toRemove = trade.costCount;
    for (let i = 0; i < this.inventory.size && toRemove > 0; i++) {
      const s = this.inventory.slots[i];
      if (s && s.id === trade.costId && s.isBlock === trade.costIsBlock) {
        const take = Math.min(s.count, toRemove);
        s.count -= take;
        toRemove -= take;
        if (s.count <= 0) this.inventory.slots[i] = null;
      }
    }
    // Give result
    if (trade.resultIsBlock) this.inventory.addBlock(trade.resultId, trade.resultCount);
    else this.inventory.addItem(trade.resultId, trade.resultCount);
    SoundFX.trade();
    this.ui.updateHotbar();
  }

  _trySpawnVillageNPCs() {
    const px = this.player.position.x;
    const pz = this.player.position.z;
    const pcx = Math.floor(px / CHUNK_SIZE);
    const pcz = Math.floor(pz / CHUNK_SIZE);
    const radius = 3;
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dz = -radius; dz <= radius; dz++) {
        const cx = pcx + dx;
        const cz = pcz + dz;
        const key = `${cx},${cz}`;
        if (this.mobs._npcSpawnedChunks.has(key)) continue;
        this.mobs._npcSpawnedChunks.add(key);
        const wx = cx * CHUNK_SIZE + 8;
        const wz = cz * CHUNK_SIZE + 8;
        const biome = this.world.generator.getBiome(wx, wz);
        if (biome !== Biome.PLAINS && biome !== Biome.SAVANNA) continue;
        const sv = this.world.generator.structureNoise.noise2D(wx * 0.008, wz * 0.008);
        if (sv > 0.55) {
          this.mobs.spawnNPC(wx, wz);
        }
      }
    }
  }

  // Check if player is near an NPC and press T
  _checkNPCInteraction() {
    for (const mob of this.mobs.mobs) {
      if (!mob.alive || !mob.isNPC) continue;
      const dist = this.player.position.distanceTo(mob.position);
      if (dist < 3.5) return true;
    }
    return false;
  }

  // ── Cheat: Spawn a big furnished house ──────────────────────
  _spawnHouse() {
    const px = Math.floor(this.player.position.x);
    const py = Math.floor(this.player.position.y);
    const pz = Math.floor(this.player.position.z);

    // Determine forward direction from camera yaw
    const fwdX = Math.round(-Math.sin(this.player.yaw));
    const fwdZ = Math.round(-Math.cos(this.player.yaw));

    // House origin: 5 blocks ahead of player
    const ox = px + fwdX * 5;
    const oy = py - 1; // ground level
    const oz = pz + fwdZ * 5;

    const B = BlockType;
    const w = this.world;

    // Quick helpers
    const set = (x, y, z, t) => w.setBlock(ox + x, oy + y, oz + z, t);
    const fill = (x1, y1, z1, x2, y2, z2, t) => {
      for (let x = x1; x <= x2; x++)
        for (let y = y1; y <= y2; y++)
          for (let z = z1; z <= z2; z++)
            set(x, y, z, t);
    };

    // House dimensions: 20 wide (x), 5 tall walls (y), 15 deep (z)
    const W = 20, H = 6, D = 15;

    // === CLEAR INTERIOR + ABOVE ===
    fill(-1, 0, -1, W + 1, H + 3, D + 1, B.AIR);

    // === FOUNDATION ===
    fill(0, 0, 0, W, 0, D, B.STONE_BRICK);

    // === FLOOR ===
    fill(1, 1, 1, W - 1, 1, D - 1, B.PLANKS);

    // === WALLS (stone brick shell) ===
    // Front wall (z=0)
    fill(0, 1, 0, W, H, 0, B.STONE_BRICK);
    // Back wall (z=D)
    fill(0, 1, D, W, H, D, B.STONE_BRICK);
    // Left wall (x=0)
    fill(0, 1, 0, 0, H, D, B.STONE_BRICK);
    // Right wall (x=W)
    fill(W, 1, 0, W, H, D, B.STONE_BRICK);

    // === ROOF ===
    fill(0, H + 1, 0, W, H + 1, D, B.SPRUCE_WOOD);
    // Roof ridge (peaked center)
    for (let i = 0; i <= 3; i++) {
      fill(i, H + 2, 0, W - i, H + 2, D, i < 3 ? B.SPRUCE_WOOD : B.AIR);
    }

    // === FRONT DOOR (center of front wall) ===
    const doorX = Math.floor(W / 2);
    set(doorX, 2, 0, B.DOOR);
    set(doorX, 3, 0, B.AIR);
    set(doorX, 4, 0, B.AIR);
    // Porch overhang
    fill(doorX - 2, H + 1, -1, doorX + 2, H + 1, -1, B.PLANKS);
    // Porch torches
    set(doorX - 2, H, -1, B.TORCH);
    set(doorX + 2, H, -1, B.TORCH);
    // Welcome mat
    set(doorX, 1, -1, B.WOOL);

    // === WINDOWS (front wall) ===
    for (let wx of [3, 5, W - 5, W - 3]) {
      set(wx, 3, 0, B.GLASS);
      set(wx, 4, 0, B.GLASS);
    }
    // Side windows
    for (let wz of [3, 7, 11]) {
      set(0, 3, wz, B.GLASS);
      set(0, 4, wz, B.GLASS);
      set(W, 3, wz, B.GLASS);
      set(W, 4, wz, B.GLASS);
    }
    // Back windows
    for (let wx of [4, 8, 12, 16]) {
      set(wx, 3, D, B.GLASS);
      set(wx, 4, D, B.GLASS);
    }

    // === INTERIOR DIVIDING WALLS ===
    // Hallway runs along x at z=8, dividing front/back rooms
    fill(1, 2, 8, W - 1, H, 8, B.PLANKS);
    // Door in hallway (center)
    set(doorX, 2, 8, B.AIR);
    set(doorX, 3, 8, B.AIR);
    set(doorX, 4, 8, B.AIR);
    // Side doorways in hallway
    set(5, 2, 8, B.AIR); set(5, 3, 8, B.AIR);
    set(15, 2, 8, B.AIR); set(15, 3, 8, B.AIR);

    // Front room divider at x=10
    fill(10, 2, 1, 10, H, 7, B.PLANKS);
    set(10, 2, 4, B.AIR); set(10, 3, 4, B.AIR); // doorway

    // Back room divider at x=10
    fill(10, 2, 9, 10, H, D - 1, B.PLANKS);
    set(10, 2, 11, B.AIR); set(10, 3, 11, B.AIR); // doorway

    // === INTERIOR LIGHTING ===
    for (let lx of [3, 7, 13, 17]) {
      for (let lz of [4, 12]) {
        set(lx, H, lz, B.GLOWSTONE);
      }
    }

    // === ROOM 1: LIVING ROOM (front-left, x:1-9, z:1-7) ===
    // Carpet (wool floor)
    fill(2, 1, 2, 8, 1, 6, B.WOOL);
    // Sofa (stone brick bench along wall)
    fill(1, 2, 6, 4, 2, 6, B.PLANKS);
    fill(1, 3, 7, 4, 3, 7, B.WOOL); // back cushions
    // Coffee table
    set(3, 2, 4, B.PLANKS);
    // Fireplace
    set(1, 2, 1, B.COBBLESTONE);
    set(1, 3, 1, B.COBBLESTONE);
    set(1, 4, 1, B.COBBLESTONE);
    set(1, 2, 2, B.TORCH);
    // Bookshelf corner
    set(1, 2, 5, B.BOOKSHELF);
    set(1, 3, 5, B.BOOKSHELF);

    // === ROOM 2: KITCHEN (front-right, x:11-19, z:1-7) ===
    // Kitchen counter (cobblestone base)
    fill(11, 2, 1, 15, 2, 1, B.COBBLESTONE);
    // Stove/furnace
    set(13, 2, 1, B.FURNACE);
    // Crafting table
    set(15, 2, 1, B.CRAFTING_TABLE);
    // Sink (water)
    set(12, 2, 1, B.WATER);
    // Kitchen table
    fill(13, 2, 4, 15, 2, 4, B.PLANKS);
    // Chest (pantry)
    set(W - 1, 2, 1, B.CHEST);
    set(W - 1, 2, 2, B.CHEST);
    // Overhead lighting
    set(14, H, 3, B.GLOWSTONE);

    // === ROOM 3: BEDROOM (back-left, x:1-9, z:9-14) ===
    // Bed (wool on planks)
    fill(1, 2, 10, 2, 2, 11, B.PLANKS); // bed frame
    fill(1, 3, 10, 2, 3, 11, B.WOOL);    // mattress (white)
    // Second bed
    fill(1, 2, 13, 2, 2, 14, B.PLANKS);
    fill(1, 3, 13, 2, 3, 14, B.WOOL);
    // Nightstand
    set(3, 2, 10, B.PLANKS);
    set(3, 3, 10, B.TORCH);
    // Wardrobe (bookshelves as wardrobe)
    fill(8, 2, D - 1, 9, 4, D - 1, B.PLANKS);
    // Carpet
    fill(3, 1, 10, 8, 1, 13, B.WOOL);

    // === ROOM 4: LIBRARY (back-right, x:11-19, z:9-14) ===
    // Bookshelves along walls
    fill(11, 2, D - 1, 18, 2, D - 1, B.BOOKSHELF);
    fill(11, 3, D - 1, 18, 3, D - 1, B.BOOKSHELF);
    fill(11, 4, D - 1, 18, 4, D - 1, B.BOOKSHELF);
    fill(W - 1, 2, 9, W - 1, 4, 13, B.BOOKSHELF);
    // Reading desk
    set(14, 2, 11, B.CRAFTING_TABLE);
    set(15, 2, 11, B.PLANKS);
    // Chair
    set(14, 2, 12, B.PLANKS);
    // Torch
    set(12, 2, 9, B.TORCH);
    // Enchanting table aesthetic (diamond block)
    set(16, 2, 12, B.DIAMOND_BLOCK);

    // === FRONT GARDEN ===
    // Garden fence
    fill(-3, 1, -1, -1, 1, -1, B.FENCE);
    fill(W + 1, 1, -1, W + 3, 1, -1, B.FENCE);
    fill(-3, 1, -1, -3, 1, -5, B.FENCE);
    fill(W + 3, 1, -1, W + 3, 1, -5, B.FENCE);
    fill(-3, 1, -5, W + 3, 1, -5, B.FENCE);
    // Garden floor (grass)
    fill(-2, 0, -2, W + 2, 0, -4, B.GRASS);
    // Flower beds (colorful leaves on ground)
    for (let gx = -1; gx <= W + 1; gx += 3) {
      set(gx, 1, -3, B.LEAVES);
      set(gx + 1, 1, -4, B.BIRCH_LEAVES);
    }
    // Garden torches
    set(-2, 2, -2, B.TORCH);
    set(W + 2, 2, -2, B.TORCH);
    // Garden path to door
    fill(doorX - 1, 0, -1, doorX + 1, 0, -4, B.COBBLESTONE);

    // === SWIMMING POOL (behind the house) ===
    // Pool border
    fill(3, 0, D + 2, W - 3, 0, D + 8, B.QUARTZ);
    // Pool walls (quartz)
    fill(4, -1, D + 3, W - 4, -1, D + 7, B.QUARTZ);
    fill(4, -2, D + 3, W - 4, -2, D + 7, B.QUARTZ);
    // Pool floor
    fill(5, -3, D + 4, W - 5, -3, D + 6, B.PRISMARINE);
    fill(5, -2, D + 4, W - 5, -2, D + 6, B.PRISMARINE);
    // Pool walls inner
    for (let pd = -2; pd <= -1; pd++) {
      fill(4, pd, D + 3, W - 4, pd, D + 3, B.QUARTZ);
      fill(4, pd, D + 7, W - 4, pd, D + 7, B.QUARTZ);
      fill(4, pd, D + 3, 4, pd, D + 7, B.QUARTZ);
      fill(W - 4, pd, D + 3, W - 4, pd, D + 7, B.QUARTZ);
    }
    // Fill pool with water
    fill(5, -1, D + 4, W - 5, -1, D + 6, B.WATER);
    fill(5, 0, D + 4, W - 5, 0, D + 6, B.WATER);
    // Pool deck chairs (planks)
    set(3, 1, D + 3, B.PLANKS);
    set(3, 1, D + 5, B.PLANKS);
    set(W - 3, 1, D + 3, B.PLANKS);
    set(W - 3, 1, D + 5, B.PLANKS);
    // Pool lighting
    set(6, -3, D + 5, B.SEA_LANTERN);
    set(W - 6, -3, D + 5, B.SEA_LANTERN);
    // Pool fence
    fill(2, 1, D + 1, W - 2, 1, D + 1, B.FENCE);
    // Gate opening
    set(doorX, 1, D + 1, B.AIR);

    // Back door to pool
    set(doorX, 2, D, B.DOOR);
    set(doorX, 3, D, B.AIR);
    set(doorX, 4, D, B.AIR);

    // === STAIRCASE to roof (inside, near back-left) ===
    for (let s = 0; s < 5; s++) {
      set(9, 2 + s, 9 + s, B.COBBLESTONE);
    }
  }

  start(coop) {
    this.coopMode = coop;
    document.getElementById('start-screen').style.display = 'none';
    this.running = true;

    // Lock pointer for P1 (skip on mobile — uses touch controls)
    if (!this.touch.isMobile) {
      this.renderer.domElement.requestPointerLock();
    }

    const spawn = this.world.getSpawnPoint();
    this.player.spawn(spawn);

    // Camera aspect for split-screen
    if (this.coopMode) {
      this.camera.aspect = (window.innerWidth / 2) / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.camera2.aspect = (window.innerWidth / 2) / window.innerHeight;
      this.camera2.updateProjectionMatrix();
      this.renderer.setScissorTest(true);

      this._initPlayer2();
      // Spawn P2 slightly offset
      this.player2.spawn({ x: spawn.x + 2, y: spawn.y, z: spawn.z + 2 });

      // Show split-screen divider and P2 UI
      document.getElementById('split-divider').style.display = 'block';
      document.getElementById('p2-hud').style.display = 'block';
      document.body.classList.add('coop-mode');

      this.ui2.show();
      this.ui2.updateHotbar();
      this.ui2.updateHealth(this.player2.health);
    }

    this.ui.show();
    this.ui.updateHotbar();
    this.ui.updateHealth(this.player.health);

    // Show touch controls on mobile
    this.touch.show();
    // On mobile, skip pointer lock and mark mouse as "locked" so game input works
    if (this.touch.isMobile) {
      this.player.mouseLocked = true;
    }
    this.lastTime = performance.now();
    this._loop();
  }

  _loop() {
    if (!this.running) return;
    requestAnimationFrame(() => this._loop());

    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    // FPS counter
    this.frameCount++;
    this.fpsTime += dt;
    if (this.fpsTime >= 1.0) {
      this.fps = Math.round(this.frameCount / this.fpsTime);
      this.frameCount = 0;
      this.fpsTime = 0;
    }

    // Cheat code buffer timeout
    if (this._cheatTimer > 0) {
      this._cheatTimer -= dt;
      if (this._cheatTimer <= 0) this._cheatBuffer = '';
    }

    // Apply mobile touch input to P1
    if (this.touch.isMobile) {
      this.touch.applyToPlayer(this.player);
    }

    // Update P1
    if (!this.ui.inventoryOpen && !this.tradeOpen) {
      this.player.update(dt);
    }
    // Sync held item visual on character model
    this.player.characterModel.setHeldItem(this.inventory.getHeldSlot());

    // Handle mobile touch actions
    if (this.touch.isMobile) {
      this._handleTouchActions(dt);
    }

    // Progressive mining (P1 only — P2 uses instant break for simplicity)
    this._updateMining(dt);

    // Continuous block placement while holding right-click
    this._updatePlacing(dt);

    // Handle P1 gamepad button actions
    this._handleGamepadActions(this.player, this.inventory, this.ui);

    // Update P2
    if (this.coopMode && this.player2) {
      if (!this.ui2.inventoryOpen) {
        this.player2.update(dt);
      }
      this.player2.characterModel.setHeldItem(this.inventory2.getHeldSlot());
      this._handleGamepadActions(this.player2, this.inventory2, this.ui2);
    }

    // Day/night
    this.dayNight.update(dt);

    // Mobs (use P1 position for spawning/AI)
    this.mobs.update(dt, this.player.position, this.dayNight.isNight, this.camera);

    // Update projectiles
    this.mobs.updateProjectiles(dt, this.player.position);

    // Mob damage to P1
    const mobDamage = this.mobs.getPlayerDamage();
    const explosionDmg = this.mobs.getExplosionDamage();
    if (mobDamage + explosionDmg > 0 && !this.player.creativeMode) {
      this.player.takeDamage(mobDamage + explosionDmg);
      SoundFX.playerHurt();
    }
    if (explosionDmg > 0) SoundFX.explosion();

    // Arrow damage to P1
    let arrowDmg = 0;
    for (let i = this.mobs.projectiles.length - 1; i >= 0; i--) {
      if (this.mobs.projectiles[i]._hitPlayer) {
        arrowDmg += this.mobs.projectiles[i]._hitPlayer;
        this.mobs.projectiles.splice(i, 1);
      }
    }
    if (arrowDmg > 0 && !this.player.creativeMode) {
      this.player.takeDamage(arrowDmg);
      SoundFX.playerHurt();
    }

    // Collect mob drops
    const drops = this.mobs.collectDrops();
    for (const drop of drops) {
      this.inventory.addItem(drop.id, drop.count);
    }
    if (drops.length > 0) {
      SoundFX.pickup();
      this.ui.updateHotbar();
    }

    // Update particles
    this.particles.update(dt);

    // Update player arrows (bow projectiles)
    this._updatePlayerArrows(dt);

    // Furnace update
    this.inventory.updateFurnace(dt);
    if (this.ui.furnaceOpen) {
      this.ui.updateFurnaceUI();
    }

    // Mob damage to P2 (check proximity to P2)
    if (this.coopMode && this.player2) {
      this._applyMobDamageToP2();
    }

    // World chunks - load around all players in a single pass
    const extraPos = (this.coopMode && this.player2)
      ? [{ x: this.player2.position.x, z: this.player2.position.z }]
      : undefined;
    this.world.update(this.player.position.x, this.player.position.z, extraPos);

    // NPC spawning: check nearby village chunks
    this._trySpawnVillageNPCs();

    // Update P1 UI
    this.ui.updateHealth(this.player.health);
    this.ui.updateHunger(this.player.hunger);
    this.ui.updateTimeDisplay(this.dayNight);
    const debugInfo = this.player.getDebugInfo();
    debugInfo.fps = this.fps;
    debugInfo.hunger = this.player.hunger;
    debugInfo.time = this.dayNight.getTimeString();
    debugInfo.day = this.dayNight.dayCount;
    debugInfo.period = this.dayNight.isNight ? 'Night' : this.dayNight.isDawn ? 'Dawn' : this.dayNight.isDusk ? 'Dusk' : 'Day';
    const mobCount = this.mobs.getMobCount();
    debugInfo.mobs = `${mobCount.monsters}M / ${mobCount.animals}A`;
    debugInfo.mode = this.player.creativeMode ? 'Creative' : 'Survival';
    this.ui.updateDebug(debugInfo);
    this.ui.updateArmorSlots(this.player.armorSlots);

    // Minimap update (every 10 frames to save perf)
    if (this.frameCount % 10 === 0) {
      this.ui.updateMinimap(this.player.position, this.world.generator);
    }

    // Update P2 UI
    if (this.coopMode && this.player2 && this.ui2) {
      this.ui2.updateHealth(this.player2.health);
      this.ui2.updateHunger(this.player2.hunger);
      const d2 = this.player2.getDebugInfo();
      d2.fps = this.fps;
      d2.time = this.dayNight.getTimeString();
      d2.day = this.dayNight.dayCount;
      d2.period = debugInfo.period;
      d2.mobs = debugInfo.mobs;
      this.ui2.updateDebug(d2);
    }

    // Respawn P1
    if (this.player.health <= 0 && !this.player.creativeMode) {
      const spawn = this.world.getSpawnPoint();
      this.player.spawn(spawn);
      this.player.hunger = this.player.maxHunger;
      this.ui.updateHealth(this.player.health);
    }

    // Respawn P2
    if (this.coopMode && this.player2 && this.player2.health <= 0) {
      const spawn = this.world.getSpawnPoint();
      this.player2.spawn({ x: spawn.x + 2, y: spawn.y, z: spawn.z + 2 });
      this.player2.hunger = this.player2.maxHunger;
      this.ui2.updateHealth(this.player2.health);
    }

    // Render
    if (this.coopMode) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const hw = Math.floor(w / 2);

      // Left viewport: Player 1's view
      // P1 sees own body (head hidden), P2 fully visible
      this.player.characterModel.setFirstPerson(true);
      if (this.player2) this.player2.characterModel.setFirstPerson(false);
      this.renderer.setViewport(0, 0, hw, h);
      this.renderer.setScissor(0, 0, hw, h);
      this.renderer.render(this.scene, this.camera);

      // Right viewport: Player 2's view
      // P2 sees own body (head hidden), P1 fully visible
      this.player.characterModel.setFirstPerson(false);
      if (this.player2) this.player2.characterModel.setFirstPerson(true);
      this.renderer.setViewport(hw, 0, w - hw, h);
      this.renderer.setScissor(hw, 0, w - hw, h);
      this.renderer.render(this.scene, this.camera2);
    } else {
      // Solo: show full character in 3rd person, hide head in 1st person
      this.player.characterModel.setFirstPerson(!this.player.thirdPerson);
      this.renderer.render(this.scene, this.camera);
    }
  }

  _handleGamepadActions(player, inventory, ui) {
    // Attack (X button)
    if (player.gpPressed('_gp_attack')) {
      player.characterModel.triggerPunch();
      SoundFX.hit();
      const attackOrigin = player.position.clone();
      attackOrigin.y += 1.5;
      _tmpDir.set(0, 0, -1).applyQuaternion(player.camera.quaternion);

      // Bow check
      const held = inventory.getHeldSlot();
      if (held && !held.isBlock && ItemData[held.id] && ItemData[held.id].toolType === ToolType.BOW) {
        this._shootBow(player, inventory, ui);
      } else {
        const damage = getAttackDamage(held);
        const hitMob = this.mobs.playerAttack(attackOrigin, _tmpDir, damage);
        if (hitMob) {
          inventory.damageHeldTool();
        } else {
          this._breakBlock(player, inventory, ui);
        }
      }
    }

    // Place (Y button)
    if (player.gpPressed('_gp_place')) {
      this._handleRightClick(player, inventory, ui);
    }

    // Drop (B button)
    if (player.gpPressed('_gp_drop')) {
      inventory.dropHeldItem();
      ui.updateHotbar();
    }

    // Inventory (RB)
    if (player.gpPressed('_gp_inventory')) {
      const isOpen = ui.toggleInventory();
      if (player === this.player) {
        if (isOpen) {
          document.exitPointerLock();
          player.mouseLocked = false;
        } else {
          this.renderer.domElement.requestPointerLock();
        }
      }
    }

    // Toggle camera (Back/Select)
    if (player.gpPressed('_gp_camera')) {
      player.thirdPerson = !player.thirdPerson;
    }

    // Creative mode (Start)
    if (player.gpPressed('_gp_creative')) {
      player.creativeMode = !player.creativeMode;
      if (player.creativeMode) {
        player.health = player.maxHealth;
        player.hunger = player.maxHunger;
      }
    }

    // DPad hotbar scroll
    if (player.gpPressed('_gp_hotbar_right')) {
      let s = inventory.selectedSlot + 1;
      if (s >= inventory.hotbarSize) s = 0;
      inventory.selectSlot(s);
      ui.updateHotbar();
    }
    if (player.gpPressed('_gp_hotbar_left')) {
      let s = inventory.selectedSlot - 1;
      if (s < 0) s = inventory.hotbarSize - 1;
      inventory.selectSlot(s);
      ui.updateHotbar();
    }
  }

  _applyMobDamageToP2() {
    // Check each mob for proximity to P2 and deal damage
    for (const mob of this.mobs.mobs) {
      if (!mob.alive || mob.category !== 0) continue; // 0 = MONSTER
      _tmpDir.subVectors(this.player2.position, mob.position);
      if (_tmpDir.length() < 1.5 && mob.attackCooldown <= 0) {
        this.player2.takeDamage(mob.type.damage);
        mob.attackCooldown = 1.0;
      }
    }
  }

  _handleTouchActions(dt) {
    const touch = this.touch;

    // Attack / mine
    if (touch.consumeAttack()) {
      this.player.characterModel.triggerPunch();
      SoundFX.hit();
      const attackOrigin = this.player.position.clone();
      attackOrigin.y += 1.5;
      _tmpDir.set(0, 0, -1).applyQuaternion(this.camera.quaternion);

      const heldSlot = this.inventory.getHeldSlot();
      if (heldSlot && !heldSlot.isBlock && ItemData[heldSlot.id] && ItemData[heldSlot.id].toolType === ToolType.BOW) {
        this._shootBow(this.player, this.inventory, this.ui);
      } else {
        const damage = getAttackDamage(heldSlot);
        const hitMob = this.mobs.playerAttack(attackOrigin, _tmpDir, damage);
        if (hitMob) {
          this.inventory.damageHeldTool();
        } else {
          // Start progressive mining via touch hold
          this.breaking = true;
        }
      }
    }

    // Stop mining when attack button released
    if (!touch.attackHeld && this.breaking) {
      this.breaking = false;
      this.breakProgress = 0;
      this.breakTarget = null;
      if (this._breakProgressEl) this._breakProgressEl.style.display = 'none';
    }

    // Place / interact
    if (touch.consumePlace()) {
      this._handleRightClick(this.player, this.inventory, this.ui);
    }

    // Inventory toggle
    if (touch.consumeInventory()) {
      this.ui.toggleInventory();
    }

    // Hotbar scroll
    const hDelta = touch.consumeHotbarDelta();
    if (hDelta !== 0) {
      let s = this.inventory.selectedSlot + hDelta;
      if (s < 0) s = this.inventory.hotbarSize - 1;
      if (s >= this.inventory.hotbarSize) s = 0;
      this.inventory.selectSlot(s);
      this.ui.updateHotbar();
    }
  }
}

// Boot the game
const game = new Game();
