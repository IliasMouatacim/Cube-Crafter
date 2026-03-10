// ============================================================
// Player: FPS camera, physics, movement, collision detection
// Supports configurable key bindings for split-screen co-op
// ============================================================

import * as THREE from 'three';
import {
  GRAVITY, JUMP_FORCE, PLAYER_SPEED, SPRINT_MULTIPLIER,
  PLAYER_HEIGHT, PLAYER_WIDTH, REACH_DISTANCE,
  BlockType, BlockData,
} from './blocks.js';
import { getArmorReduction } from './items.js';
import { CharacterModel } from './character.js';

// Reusable temp objects (avoid per-frame allocations)
const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();
const _moveDir = new THREE.Vector3();
const _euler = new THREE.Euler(0, 0, 0, 'YXZ');
const _tmpNewPos = new THREE.Vector3();
const _rayDir = new THREE.Vector3();
const _camOffset = new THREE.Vector3();
const _camTarget = new THREE.Vector3();
const _camRayDir = new THREE.Vector3();
const _camRayOrigin = new THREE.Vector3();

// 3rd-person camera constants
const TP_DISTANCE = 4.0;    // distance behind the player
const TP_HEIGHT = 1.8;      // height above the player's feet
const TP_LOOK_HEIGHT = 1.3; // point on the character the camera looks at

// Default key bindings for Player 1 (WASD + mouse)
export const P1_KEYS = {
  forward: 'KeyW',
  back: 'KeyS',
  left: 'KeyA',
  right: 'KeyD',
  jump: 'Space',
  sprint: 'ShiftLeft',
  lookUp: null,    // uses mouse
  lookDown: null,
  lookLeft: null,
  lookRight: null,
  useMouse: true,
};

// Key bindings for Player 2 (Arrow keys + IJKL look)
export const P2_KEYS = {
  forward: 'ArrowUp',
  back: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  jump: 'Numpad0',
  sprint: 'ShiftRight',
  lookUp: 'KeyI',
  lookDown: 'KeyK',
  lookLeft: 'KeyJ',
  lookRight: 'KeyL',
  useMouse: false,
};

export class Player {
  constructor(camera, world, keyBindings = P1_KEYS, playerIndex = 0) {
    this.camera = camera;
    this.world = world;
    this.keyBindings = keyBindings;
    this.playerIndex = playerIndex;

    // Position & velocity
    this.position = new THREE.Vector3(0, 60, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);

    // Camera control
    this.pitch = 0;
    this.yaw = 0;
    this.facingYaw = 0; // character body direction (separate from camera)

    // 3rd person mode (default on)
    this.thirdPerson = true;

    // State
    this.onGround = false;
    this.health = 20;
    this.maxHealth = 20;
    this.inWater = false;
    this.feetInWater = false;
    this.headUnderwater = false;
    this.sprinting = false;

    // Hunger system
    this.hunger = 20;
    this.maxHunger = 20;
    this.hungerTimer = 0;
    this.starvationTimer = 0;
    this.regenTimer = 0;

    // Armor slots: [helmet, chestplate, leggings, boots] — each is { id, durability } or null
    this.armorSlots = [null, null, null, null];

    // Creative mode
    this.creativeMode = false;
    this.flying = false;
    this._lastJumpTime = 0;
    this._jumpReleased = true;

    // Step sound throttle
    this._stepTimer = 0;

    // Underwater overlay
    this._waterOverlay = document.getElementById(
      playerIndex === 0 ? 'water-overlay' : 'water-overlay-p2'
    );

    // Fall damage tracking
    this.fallStartY = 0;
    this.wasFalling = false;

    // Input state
    this.keys = {};
    this.mouseLocked = false;

    // Block highlight
    this.highlightMesh = this._createHighlight();

    // 3D character model
    this.characterModel = new CharacterModel(playerIndex);

    // Gamepad state
    this.gamepadIndex = null;
    this.gamepadDeadzone = 0.15;
    this.gamepadLookSpeed = 3.0;
    this.gamepadPrevButtons = [];
    this.coopMode = false;

    this._setupInput();
  }

  _createHighlight() {
    const geom = new THREE.BoxGeometry(1.005, 1.005, 1.005);
    const edges = new THREE.EdgesGeometry(geom);
    const mat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
    const mesh = new THREE.LineSegments(edges, mat);
    mesh.visible = false;
    return mesh;
  }

  _setupInput() {
    document.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      // V = toggle 1st/3rd person (only for mouse players)
      if (e.code === 'KeyV' && this.keyBindings.useMouse) {
        this.thirdPerson = !this.thirdPerson;
      }
    });
    document.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
    if (this.keyBindings.useMouse) {
      document.addEventListener('mousemove', (e) => {
        if (!this.mouseLocked) return;
        const sensitivity = 0.002;
        this.yaw -= e.movementX * sensitivity;
        this.pitch -= e.movementY * sensitivity;
        this.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this.pitch));
      });
    }
  }

  spawn(pos) {
    this.position.set(pos.x, pos.y, pos.z);
    this.velocity.set(0, 0, 0);
    this.health = this.maxHealth;
    this.fallStartY = pos.y;
  }

  update(dt) {
    if (dt > 0.1) dt = 0.1; // clamp large delta

    const kb = this.keyBindings;

    // Keyboard-based look (for P2 or non-mouse players)
    if (!kb.useMouse) {
      const lookSpeed = 2.5; // radians/sec
      if (kb.lookLeft && this.keys[kb.lookLeft]) this.yaw += lookSpeed * dt;
      if (kb.lookRight && this.keys[kb.lookRight]) this.yaw -= lookSpeed * dt;
      if (kb.lookUp && this.keys[kb.lookUp]) {
        this.pitch += lookSpeed * dt;
        this.pitch = Math.min(Math.PI / 2 - 0.01, this.pitch);
      }
      if (kb.lookDown && this.keys[kb.lookDown]) {
        this.pitch -= lookSpeed * dt;
        this.pitch = Math.max(-Math.PI / 2 + 0.01, this.pitch);
      }
    }

    // Gamepad input
    this._pollGamepad(dt);

    // Movement input
    _forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    this.sprinting = (!!this.keys[kb.sprint] || !!this.keys['_gp_sprint']) && this.hunger >= 6;
    const speed = PLAYER_SPEED * (this.sprinting ? SPRINT_MULTIPLIER : 1.0);

    // Hunger system
    this.hungerTimer += dt;
    const hungerRate = this.sprinting ? 15 : 30; // seconds per hunger point
    if (this.hungerTimer >= hungerRate) {
      this.hungerTimer = 0;
      this.hunger = Math.max(0, this.hunger - 1);
    }
    // Starvation damage
    if (this.hunger <= 0) {
      this.starvationTimer += dt;
      if (this.starvationTimer >= 2) {
        this.starvationTimer = 0;
        this.takeDamage(1);
      }
    }
    // Health regen when well-fed
    if (this.hunger >= 18 && this.health < this.maxHealth) {
      this.regenTimer += dt;
      if (this.regenTimer >= 3) {
        this.regenTimer = 0;
        this.heal(1);
      }
    } else {
      this.regenTimer = 0;
    }
    _moveDir.set(0, 0, 0);

    if (this.keys[kb.forward] || this.keys['_gp_forward']) _moveDir.add(_forward);
    if (this.keys[kb.back] || this.keys['_gp_back']) _moveDir.sub(_forward);
    if (this.keys[kb.left] || this.keys['_gp_left']) _moveDir.sub(_right);
    if (this.keys[kb.right] || this.keys['_gp_right']) _moveDir.add(_right);

    // Update character facing direction toward movement direction (third-person freelook)
    if (_moveDir.lengthSq() > 0.01 && this.thirdPerson) {
      const targetFacing = Math.atan2(-_moveDir.x, -_moveDir.z);
      // Smooth rotation toward target facing
      let diff = targetFacing - this.facingYaw;
      // Wrap to [-PI, PI]
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.facingYaw += diff * Math.min(1, dt * 12);
    } else if (!this.thirdPerson) {
      // In first person, character faces camera direction
      this.facingYaw = this.yaw;
    }

    // Water detection at multiple body levels
    const px = Math.floor(this.position.x);
    const pz = Math.floor(this.position.z);
    const feetBlock = this.world.getBlock(px, Math.floor(this.position.y), pz);
    const bodyBlock = this.world.getBlock(px, Math.floor(this.position.y + PLAYER_HEIGHT * 0.5), pz);
    const headBlock = this.world.getBlock(px, Math.floor(this.position.y + PLAYER_HEIGHT * 0.8), pz);

    this.feetInWater = feetBlock === BlockType.WATER;
    this.headUnderwater = headBlock === BlockType.WATER;
    this.inWater = this.feetInWater || bodyBlock === BlockType.WATER || this.headUnderwater;

    // Underwater overlay
    if (this._waterOverlay) {
      this._waterOverlay.style.display = this.headUnderwater ? 'block' : 'none';
    }

    // Swim speed is slower than land speed
    const swimFactor = this.inWater ? 0.55 : 1.0;
    if (_moveDir.lengthSq() > 0) {
      _moveDir.normalize().multiplyScalar(speed * swimFactor);
    }

    // Creative double-tap jump to toggle fly
    const jumpPressed = !!(this.keys[kb.jump] || this.keys['_gp_jump']);
    if (this.creativeMode && jumpPressed && this._jumpReleased) {
      const now = performance.now();
      if (now - this._lastJumpTime < 300) {
        this.flying = !this.flying;
        this.velocity.y = 0;
        this._lastJumpTime = 0;
      } else {
        this._lastJumpTime = now;
      }
      this._jumpReleased = false;
    }
    if (!jumpPressed) this._jumpReleased = true;
    if (!this.creativeMode) this.flying = false;

    // Flying mode (creative)
    if (this.flying) {
      this.velocity.x = _moveDir.x;
      this.velocity.z = _moveDir.z;
      this.velocity.y = 0;
      const flySpeed = 10;
      if (jumpPressed) this.velocity.y = flySpeed;
      if (this.keys[kb.sprint] || this.keys['_gp_sprint']) this.velocity.y = -flySpeed;
      this.wasFalling = false;
      this.onGround = false;
    } else if (this.inWater) {
      // Horizontal movement with drag
      this.velocity.x = _moveDir.x;
      this.velocity.z = _moveDir.z;

      // Vertical: gentle sink + swim controls
      this.velocity.y *= 0.85; // water drag
      this.velocity.y += GRAVITY * 0.15 * dt; // gentle sink

      // Space = swim up
      if (this.keys[kb.jump] || this.keys['_gp_jump']) {
        this.velocity.y = 3.5;
      }
      // Shift = dive down
      if (this.keys[kb.sprint]) {
        this.velocity.y = -3.5;
      }

      // If moving forward and looking up/down, swim in look direction
      if (this.keys[kb.forward] && Math.abs(this.pitch) > 0.3) {
        this.velocity.y += -Math.sin(this.pitch) * speed * swimFactor * 0.5;
        this.velocity.y = Math.max(-5, Math.min(5, this.velocity.y));
      }

      // Cancel fall tracking in water
      this.wasFalling = false;
    } else {
      // Normal land movement
      this.velocity.x = _moveDir.x;
      this.velocity.z = _moveDir.z;

      this.velocity.y += GRAVITY * dt;
      if ((this.keys[kb.jump] || this.keys['_gp_jump']) && this.onGround) {
        this.velocity.y = JUMP_FORCE;
        this.onGround = false;
      }
    }

    // Fall damage tracking (not in water, not flying)
    if (!this.inWater && !this.flying && !this.onGround && this.velocity.y < 0 && !this.wasFalling) {
      this.fallStartY = this.position.y;
      this.wasFalling = true;
    }

    // Collision detection & response
    this._moveWithCollision(dt);

    // Fall damage on landing (cancelled if landing in water)
    if (this.onGround && this.wasFalling) {
      if (!this.inWater) {
        const fallDist = this.fallStartY - this.position.y;
        if (fallDist > 3) {
          const damage = Math.floor(fallDist - 3);
          this.takeDamage(damage);
        }
      }
      this.wasFalling = false;
    }

    // Update 3D character model (before camera, so model is positioned first)
    const moving = _moveDir.lengthSq() > 0.01;
    this.characterModel.update(
      dt, this.position, this.facingYaw, this.pitch,
      moving, this.sprinting, this.inWater, this.onGround
    );

    // Update camera
    if (this.thirdPerson) {
      this._updateThirdPersonCamera();
    } else {
      // First-person: camera at eye height
      this.camera.position.copy(this.position);
      this.camera.position.y += PLAYER_HEIGHT * 0.9;
      _euler.set(this.pitch, this.yaw, 0);
      this.camera.quaternion.setFromEuler(_euler);
    }

    // Update block highlight
    this._updateHighlight();
  }

  _moveWithCollision(dt) {
    const hw = PLAYER_WIDTH / 2;
    _tmpNewPos.copy(this.position);

    // Move X
    _tmpNewPos.x += this.velocity.x * dt;
    if (this._collides(_tmpNewPos.x, this.position.y, this.position.z, hw)) {
      _tmpNewPos.x = this.position.x;
      this.velocity.x = 0;
    }

    // Move Z
    _tmpNewPos.z += this.velocity.z * dt;
    if (this._collides(_tmpNewPos.x, this.position.y, _tmpNewPos.z, hw)) {
      _tmpNewPos.z = this.position.z;
      this.velocity.z = 0;
    }

    // Move Y
    _tmpNewPos.y += this.velocity.y * dt;
    this.onGround = false;
    if (this._collides(_tmpNewPos.x, _tmpNewPos.y, _tmpNewPos.z, hw)) {
      if (this.velocity.y < 0) {
        this.onGround = true;
      }
      _tmpNewPos.y = this.position.y;
      this.velocity.y = 0;
    }

    this.position.copy(_tmpNewPos);
  }

  _collides(px, py, pz, hw) {
    // Check all corners of the player AABB
    for (let dx = -1; dx <= 1; dx += 2) {
      for (let dz = -1; dz <= 1; dz += 2) {
        const cx = px + dx * hw;
        const cz = pz + dz * hw;

        // Check feet and head and middle
        for (let dy = 0; dy < PLAYER_HEIGHT; dy += 0.5) {
          const cy = py + dy;
          if (this.world.isSolid(cx, cy, cz)) {
            return true;
          }
        }
        // Check exact top
        if (this.world.isSolid(cx, py + PLAYER_HEIGHT, cz)) {
          return true;
        }
      }
    }
    return false;
  }

  _pollGamepad(dt) {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    let gp = null;

    // Always prefer the gamepad that matches our player index
    if (gamepads[this.playerIndex]) {
      gp = gamepads[this.playerIndex];
      this.gamepadIndex = this.playerIndex;
    } else if (this.gamepadIndex !== null && gamepads[this.gamepadIndex]) {
      // Keep previously bound gamepad only in solo mode
      if (!this.coopMode) {
        gp = gamepads[this.gamepadIndex];
      } else {
        this.gamepadIndex = null;
      }
    } else {
      this.gamepadIndex = null;
      // Solo fallback: Player 0 can use any available gamepad
      if (!this.coopMode && this.playerIndex === 0) {
        for (let i = 0; i < gamepads.length; i++) {
          if (gamepads[i]) { gp = gamepads[i]; this.gamepadIndex = i; break; }
        }
      }
    }

    if (!gp) {
      // Clear stale gamepad keys so the player stops moving
      for (const k of Object.keys(this.keys)) {
        if (k.startsWith('_gp_')) this.keys[k] = false;
      }
      return;
    }

    const dz = this.gamepadDeadzone;

    // Left stick: movement (axes 0, 1)
    const lx = Math.abs(gp.axes[0]) > dz ? gp.axes[0] : 0;
    const ly = Math.abs(gp.axes[1]) > dz ? gp.axes[1] : 0;
    if (lx !== 0 || ly !== 0) {
      _forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
      // Forward on stick-up (negative Y), right on stick-right (positive X)
      this.keys['_gp_forward'] = -ly > dz ? true : false;
      this.keys['_gp_back'] = ly > dz ? true : false;
      this.keys['_gp_left'] = -lx > dz ? true : false;
      this.keys['_gp_right'] = lx > dz ? true : false;
    } else {
      this.keys['_gp_forward'] = false;
      this.keys['_gp_back'] = false;
      this.keys['_gp_left'] = false;
      this.keys['_gp_right'] = false;
    }

    // Right stick: look (axes 2, 3)
    const rx = Math.abs(gp.axes[2]) > dz ? gp.axes[2] : 0;
    const ry = Math.abs(gp.axes[3]) > dz ? gp.axes[3] : 0;
    if (rx !== 0) this.yaw -= rx * this.gamepadLookSpeed * dt;
    if (ry !== 0) {
      this.pitch -= ry * this.gamepadLookSpeed * dt;
      this.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this.pitch));
    }

    // Buttons (standard gamepad mapping)
    // A (0) = Jump, B (1) = Drop, X (2) = Break/Attack, Y (3) = Place
    // LB (4) = Sprint, RB (5) = Inventory, LT (6) = unused, RT (7) = unused
    // Back (8) = toggle camera, Start (9) = creative toggle
    // L3 (10), R3 (11), DPad Up(12),Down(13),Left(14),Right(15)
    const btn = gp.buttons;
    const prev = this.gamepadPrevButtons;
    const pressed = (i) => btn[i] && btn[i].pressed && !(prev[i] && prev[i].pressed);

    this.keys['_gp_jump'] = btn[0] && btn[0].pressed;
    this.keys['_gp_sprint'] = btn[4] && btn[4].pressed;
    this.keys['_gp_attack'] = pressed(2);
    this.keys['_gp_place'] = pressed(3);
    this.keys['_gp_drop'] = pressed(1);
    this.keys['_gp_inventory'] = pressed(5);
    this.keys['_gp_camera'] = pressed(8);
    this.keys['_gp_creative'] = pressed(9);

    // DPad left/right for hotbar
    this.keys['_gp_hotbar_left'] = pressed(14);
    this.keys['_gp_hotbar_right'] = pressed(15);

    // Save button state for edge detection
    this.gamepadPrevButtons = btn.length ? Array.from(btn, b => ({ pressed: b.pressed })) : [];
  }

  // Check if a gamepad button was pressed (one-shot this frame)
  gpPressed(name) {
    if (this.keys[name]) {
      this.keys[name] = false;
      return true;
    }
    return false;
  }

  _updateThirdPersonCamera() {
    // The point the camera looks at (character center-chest)
    _camTarget.copy(this.position);
    _camTarget.y += TP_LOOK_HEIGHT;

    // Calculate ideal camera position: behind and above based on yaw & pitch
    // Spherical offset from character — use full pitch for responsive look
    const horizontalDist = TP_DISTANCE * Math.cos(this.pitch * 0.8);
    const verticalOffset = TP_HEIGHT + TP_DISTANCE * Math.sin(-this.pitch * 0.8) * 0.7;

    _camOffset.set(
      Math.sin(this.yaw) * horizontalDist,
      verticalOffset,
      Math.cos(this.yaw) * horizontalDist
    );

    const idealPos = _camRayOrigin.copy(_camTarget).add(_camOffset);

    // Collision check: raycast from target toward ideal camera position
    // If a block is in the way, pull camera closer
    _camRayDir.copy(idealPos).sub(_camTarget).normalize();
    const maxDist = idealPos.distanceTo(_camTarget);
    const rayResult = this.world.raycast(_camTarget, _camRayDir, maxDist);

    if (rayResult.hit) {
      // Place camera just in front of the hit point
      const safeDist = Math.max(0.5, rayResult.distance - 0.3);
      this.camera.position.copy(_camTarget).addScaledVector(_camRayDir, safeDist);
    } else {
      this.camera.position.copy(idealPos);
    }

    // Look at the character
    this.camera.lookAt(_camTarget);
  }

  _updateHighlight() {
    _rayDir.set(0, 0, -1);
    _rayDir.applyQuaternion(this.camera.quaternion);

    // In 3rd person the camera is behind the player, so extend the ray
    // by the camera-to-player gap, then verify the hit is within reach of the player.
    let maxDist = REACH_DISTANCE;
    if (this.thirdPerson) {
      maxDist += this.camera.position.distanceTo(this.position);
    }

    const result = this.world.raycast(this.camera.position, _rayDir, maxDist);
    if (result.hit) {
      // Check the block is within reach of the player, not just the camera
      const bx = result.blockPos.x + 0.5;
      const by = result.blockPos.y + 0.5;
      const bz = result.blockPos.z + 0.5;
      const dx = bx - this.position.x;
      const dy = by - (this.position.y + 1.5);
      const dz = bz - this.position.z;
      const playerDist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (playerDist <= REACH_DISTANCE) {
        this.highlightMesh.visible = true;
        this.highlightMesh.position.set(bx, by, bz);
        this.targetBlock = result;
      } else {
        this.highlightMesh.visible = false;
        this.targetBlock = null;
      }
    } else {
      this.highlightMesh.visible = false;
      this.targetBlock = null;
    }
  }

  takeDamage(amount) {
    // Armor damage reduction
    if (!this.creativeMode) {
      const reduction = getArmorReduction(this.armorSlots);
      amount = Math.max(1, Math.round(amount * (1 - reduction)));
      // Damage armor pieces
      for (let i = 0; i < 4; i++) {
        if (this.armorSlots[i]) {
          this.armorSlots[i].durability--;
          if (this.armorSlots[i].durability <= 0) {
            this.armorSlots[i] = null;
          }
        }
      }
    }
    this.health = Math.max(0, this.health - amount);
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  // Get position info for debug display
  getDebugInfo() {
    const biome = this.world.generator.getBiome(
      Math.floor(this.position.x),
      Math.floor(this.position.z)
    );
    const biomeNames = ['Plains', 'Desert', 'Forest', 'Mountains', 'Tundra', 'Ocean',
      'Jungle', 'Savanna', 'Taiga', 'Mushroom Island', 'Birch Forest', 'Mesa',
      'Frozen Ocean', 'Swamp'];
    return {
      x: this.position.x.toFixed(1),
      y: this.position.y.toFixed(1),
      z: this.position.z.toFixed(1),
      chunks: this.world.chunks.size,
      biome: biomeNames[biome] || 'Unknown',
      health: this.health,
    };
  }
}
