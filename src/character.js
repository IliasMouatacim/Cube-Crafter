// ============================================================
// Character Model: Minecraft-style 3D player body
// Head, torso, arms, legs with walk/swim/idle animations
// ============================================================

import * as THREE from 'three';
import { PLAYER_HEIGHT } from './blocks.js';
import { ToolType, ItemData } from './items.js';

// Shared geometries & materials (all characters reuse these)
const _geoCache = {};
const _matCache = {};

function _geo(key, factory) {
  if (!_geoCache[key]) _geoCache[key] = factory();
  return _geoCache[key];
}
function _mat(key, factory) {
  if (!_matCache[key]) _matCache[key] = factory();
  return _matCache[key];
}

// Skin color palettes per player index
const SKIN_PALETTES = [
  { skin: 0xd4a574, shirt: 0x3b82f6, pants: 0x1e3a5f, shoes: 0x4a3728, hair: 0x4a2810, eye: 0x2563eb },
  { skin: 0xc68e5a, shirt: 0xef4444, pants: 0x374151, shoes: 0x3a2a1e, hair: 0x1a1a2e, eye: 0x16a34a },
];

export class CharacterModel {
  constructor(playerIndex = 0) {
    this.playerIndex = playerIndex;
    const pal = SKIN_PALETTES[playerIndex] || SKIN_PALETTES[0];

    this.group = new THREE.Group();
    this.animTime = 0;
    this.isMoving = false;
    this.isSprinting = false;
    this.isSwimming = false;
    this.punchTimer = 0; // punch animation timer

    // Inner body container — tilts for swimming prone pose
    // Main group handles position + yaw, bodyContainer handles body tilt
    this.bodyContainer = new THREE.Group();
    this.group.add(this.bodyContainer);

    // === Build body parts (all added to bodyContainer) ===
    // All Y values are relative to feet at Y=0

    // ── Torso ──
    const torsoGeo = _geo('torso', () => new THREE.BoxGeometry(0.5, 0.65, 0.28));
    const torsoMat = _mat(`shirt${playerIndex}`, () => new THREE.MeshLambertMaterial({ color: pal.shirt }));
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.y = 0.95; // center of torso
    this.bodyContainer.add(this.torso);

    // ── Head group (head + hair + eyes + mouth — hidden in 1st person) ──
    // Pivot at the neck so pitch rotation looks natural
    this.headGroup = new THREE.Group();
    this.headGroup.position.y = 1.28; // neck pivot point

    const headGeo = _geo('head', () => new THREE.BoxGeometry(0.42, 0.42, 0.42));
    const headMat = _mat(`skin${playerIndex}`, () => new THREE.MeshLambertMaterial({ color: pal.skin }));
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 0.21; // 1.49 - 1.28
    this.headGroup.add(this.head);

    // ── Hair (top of head) ──
    const hairGeo = _geo('hair', () => new THREE.BoxGeometry(0.44, 0.12, 0.44));
    const hairMat = _mat(`hair${playerIndex}`, () => new THREE.MeshLambertMaterial({ color: pal.hair }));
    this.hair = new THREE.Mesh(hairGeo, hairMat);
    this.hair.position.y = 0.44; // 1.72 - 1.28
    this.headGroup.add(this.hair);

    // ── Eyes ──
    const eyeGeo = _geo('eye', () => new THREE.BoxGeometry(0.06, 0.06, 0.02));
    const eyeWhiteGeo = _geo('eyeW', () => new THREE.BoxGeometry(0.1, 0.08, 0.02));
    const eyeWhiteMat = _mat('eyeWhite', () => new THREE.MeshBasicMaterial({ color: 0xffffff }));
    const eyeMat = _mat(`eye${playerIndex}`, () => new THREE.MeshBasicMaterial({ color: pal.eye }));

    // Left eye
    const eyeWhiteL = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    eyeWhiteL.position.set(-0.09, 0.24, 0.215); // 1.52 - 1.28 = 0.24
    this.headGroup.add(eyeWhiteL);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.09, 0.24, 0.225);
    this.headGroup.add(eyeL);

    // Right eye
    const eyeWhiteR = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    eyeWhiteR.position.set(0.09, 0.24, 0.215);
    this.headGroup.add(eyeWhiteR);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.09, 0.24, 0.225);
    this.headGroup.add(eyeR);

    // ── Mouth ──
    const mouthGeo = _geo('mouth', () => new THREE.BoxGeometry(0.12, 0.03, 0.02));
    const mouthMat = _mat('mouth', () => new THREE.MeshBasicMaterial({ color: 0x8b4513 }));
    this.mouth = new THREE.Mesh(mouthGeo, mouthMat);
    this.mouth.position.set(0, 0.14, 0.225); // 1.42 - 1.28 = 0.14
    this.headGroup.add(this.mouth);

    this.bodyContainer.add(this.headGroup);

    // ── Arms (pivot at shoulder) ──
    const armGeo = _geo('arm', () => new THREE.BoxGeometry(0.18, 0.6, 0.22));
    const armSkinGeo = _geo('hand', () => new THREE.BoxGeometry(0.18, 0.14, 0.22));

    // Left arm pivot
    this.leftArmPivot = new THREE.Group();
    this.leftArmPivot.position.set(-0.34, 1.22, 0);
    const leftArm = new THREE.Mesh(armGeo, torsoMat);
    leftArm.position.y = -0.3;  // hang down from pivot
    this.leftArmPivot.add(leftArm);
    // Left hand (skin color)
    const leftHand = new THREE.Mesh(armSkinGeo, headMat);
    leftHand.position.y = -0.67;
    this.leftArmPivot.add(leftHand);
    this.bodyContainer.add(this.leftArmPivot);

    // Right arm pivot
    this.rightArmPivot = new THREE.Group();
    this.rightArmPivot.position.set(0.34, 1.22, 0);
    const rightArm = new THREE.Mesh(armGeo, torsoMat);
    rightArm.position.y = -0.3;
    this.rightArmPivot.add(rightArm);
    // Right hand (skin color)
    const rightHand = new THREE.Mesh(armSkinGeo, headMat);
    rightHand.position.y = -0.67;
    this.rightArmPivot.add(rightHand);

    // ── Held item (attached to right hand) ──
    this.heldItemGroup = new THREE.Group();
    this.heldItemGroup.position.set(0, -0.5, 0.2); // handle at hand level
    this.heldItemGroup.rotation.x = -Math.PI * 0.75; // blade angled 45° up-forward
    this.heldItemGroup.visible = false;
    this.rightArmPivot.add(this.heldItemGroup);
    this._currentHeldType = null;

    this.bodyContainer.add(this.rightArmPivot);

    // ── Legs (pivot at hip) ──
    const legGeo = _geo('leg', () => new THREE.BoxGeometry(0.22, 0.6, 0.24));
    const legMat = _mat(`pants${playerIndex}`, () => new THREE.MeshLambertMaterial({ color: pal.pants }));
    const shoeGeo = _geo('shoe', () => new THREE.BoxGeometry(0.24, 0.12, 0.3));
    const shoeMat = _mat(`shoe${playerIndex}`, () => new THREE.MeshLambertMaterial({ color: pal.shoes }));

    // Left leg pivot
    this.leftLegPivot = new THREE.Group();
    this.leftLegPivot.position.set(-0.13, 0.62, 0);
    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.y = -0.3;
    this.leftLegPivot.add(leftLeg);
    const leftShoe = new THREE.Mesh(shoeGeo, shoeMat);
    leftShoe.position.set(0, -0.62, 0.03);
    this.leftLegPivot.add(leftShoe);
    this.bodyContainer.add(this.leftLegPivot);

    // Right leg pivot
    this.rightLegPivot = new THREE.Group();
    this.rightLegPivot.position.set(0.13, 0.62, 0);
    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.y = -0.3;
    this.rightLegPivot.add(rightLeg);
    const rightShoe = new THREE.Mesh(shoeGeo, shoeMat);
    rightShoe.position.set(0, -0.62, 0.03);
    this.rightLegPivot.add(rightShoe);
    this.bodyContainer.add(this.rightLegPivot);

    // ── Name tag (optional — shown in co-op) ──
    this.nameTag = null;

    // ── Shadow disc (grounds the character visually) ──
    const shadowGeo = _geo('shadow', () => new THREE.CircleGeometry(0.35, 16));
    const shadowMat = _mat('shadow', () => new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.25,
      depthWrite: false,
    }));
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.01; // just above ground
    this.group.add(this.shadow); // shadow stays on ground, not in bodyContainer

    // Cast shadows (cheap)
    this.group.traverse((c) => {
      if (c.isMesh) c.castShadow = true;
    });
  }

  update(dt, position, yaw, pitch, isMoving, isSprinting, isSwimming, isOnGround) {
    this.isMoving = isMoving;
    this.isSprinting = isSprinting;
    this.isSwimming = isSwimming;

    // Position the character at the player's feet
    this.group.position.copy(position);

    // Rotate body to face yaw direction (+PI so face points forward, not at camera)
    this.group.rotation.y = yaw + Math.PI;

    // Head pitches up/down (sign flipped to match the PI body rotation)
    this.headGroup.rotation.x = pitch * 0.8;

    // Animate
    if (isSwimming) {
      this._animateSwim(dt);
    } else if (isMoving) {
      this._animateWalk(dt, isSprinting);
    } else {
      this._animateIdle(dt);
    }

    // Punch overlay animation (applies on top of other animations)
    if (this.punchTimer > 0) {
      this.punchTimer -= dt;
      // Fast swing forward then ease back
      const t = Math.max(0, this.punchTimer / 0.3); // 0.3s duration
      const swing = Math.sin(t * Math.PI) * -1.8; // negative = forward swing
      this.rightArmPivot.rotation.x = swing;
    }
  }

  // Call this to trigger the arm swing animation
  triggerPunch() {
    this.punchTimer = 0.3;
  }

  _animateWalk(dt, sprinting) {
    const speed = sprinting ? 12 : 8;
    const amplitude = sprinting ? 0.7 : 0.5;
    this.animTime += dt * speed;

    const swing = Math.sin(this.animTime) * amplitude;

    // Arms swing opposite to legs
    this.leftArmPivot.rotation.x = swing;
    this.rightArmPivot.rotation.x = -swing;

    // Legs
    this.leftLegPivot.rotation.x = -swing;
    this.rightLegPivot.rotation.x = swing;

    // Slight torso bob
    this.torso.position.y = 0.95 + Math.abs(Math.sin(this.animTime * 2)) * 0.02;
    this.torso.rotation.x = 0;

    // Smoothly reset swim tilt
    this.bodyContainer.rotation.x *= 0.85;
    this.bodyContainer.position.y *= 0.85;

    // Reset arm splay
    this.leftArmPivot.rotation.z *= 0.85;
    this.rightArmPivot.rotation.z *= 0.85;
  }

  _animateIdle(dt) {
    this.animTime += dt * 1.5;

    // Gentle breathing bob
    const bob = Math.sin(this.animTime) * 0.01;
    this.torso.position.y = 0.95 + bob;
    this.torso.rotation.x = 0;

    // Arms relax to sides
    this.leftArmPivot.rotation.x *= 0.9;
    this.rightArmPivot.rotation.x *= 0.9;
    this.leftLegPivot.rotation.x *= 0.9;
    this.rightLegPivot.rotation.x *= 0.9;

    // Slight arm sway
    this.leftArmPivot.rotation.z = Math.sin(this.animTime * 0.7) * 0.03;
    this.rightArmPivot.rotation.z = -Math.sin(this.animTime * 0.7) * 0.03;

    // Smoothly reset swim tilt
    this.bodyContainer.rotation.x *= 0.85;
    this.bodyContainer.position.y *= 0.85;
  }

  _animateSwim(dt) {
    this.animTime += dt * 5;

    const t = this.animTime;
    const stroke = Math.sin(t);

    // Tilt the ENTIRE body container forward for prone swimming
    // ~80 degrees forward so the character lays nearly flat
    const targetTilt = Math.PI / 2 * 0.85;
    this.bodyContainer.rotation.x += (targetTilt - this.bodyContainer.rotation.x) * 0.08;

    // Raise the body container so the character floats at water surface
    this.bodyContainer.position.y += (0.6 - this.bodyContainer.position.y) * 0.08;

    // Reset torso sub-rotation
    this.torso.rotation.x = 0;

    // Front crawl — arms extend FORWARD (negative X = up/forward in tilted body)
    // Alternating stroke: one arm reaches ahead, the other pulls back
    this.leftArmPivot.rotation.x = -2.0 + stroke * 0.8;
    this.rightArmPivot.rotation.x = -2.0 - stroke * 0.8;

    // Slight outward splay during stroke
    this.leftArmPivot.rotation.z = 0.1 + Math.abs(stroke) * 0.1;
    this.rightArmPivot.rotation.z = -0.1 - Math.abs(stroke) * 0.1;

    // Flutter kick
    this.leftLegPivot.rotation.x = Math.sin(t * 2) * 0.3;
    this.rightLegPivot.rotation.x = -Math.sin(t * 2) * 0.3;
  }

  addToScene(scene) {
    scene.add(this.group);
  }

  removeFromScene(scene) {
    scene.remove(this.group);
  }

  // Hide parts that would clip into first-person camera
  setFirstPerson(isFirstPerson) {
    this.headGroup.visible = !isFirstPerson;
  }

  // Update the held item visual based on the player's selected inventory slot
  setHeldItem(slotData) {
    const itemData = slotData && !slotData.isBlock ? ItemData[slotData.id] : null;
    const toolType = itemData?.toolType ?? null;

    // No change needed
    if (toolType === this._currentHeldType) return;
    this._currentHeldType = toolType;

    // Clear previous held item meshes
    while (this.heldItemGroup.children.length > 0) {
      this.heldItemGroup.remove(this.heldItemGroup.children[0]);
    }

    if (toolType == null) {
      this.heldItemGroup.visible = false;
      return;
    }

    const color = itemData.color || 0xcccccc;
    const mat = new THREE.MeshLambertMaterial({ color });
    const handleMat = new THREE.MeshLambertMaterial({ color: 0x8B6B3E });

    if (toolType === ToolType.SWORD) {
      // Blade
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.12), mat);
      blade.position.y = -0.1;
      this.heldItemGroup.add(blade);
      // Handle
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.2, 0.06), handleMat);
      handle.position.y = 0.28;
      this.heldItemGroup.add(handle);
      // Guard
      const guardMat = new THREE.MeshLambertMaterial({ color: 0x555555 });
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.2), guardMat);
      guard.position.y = 0.16;
      this.heldItemGroup.add(guard);
    } else if (toolType === ToolType.PICKAXE) {
      // Stick
      const stick = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.06), handleMat);
      this.heldItemGroup.add(stick);
      // Head
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.08), mat);
      head.position.y = -0.28;
      this.heldItemGroup.add(head);
    } else if (toolType === ToolType.AXE) {
      // Stick
      const stick = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.06), handleMat);
      this.heldItemGroup.add(stick);
      // Head
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.22, 0.08), mat);
      head.position.set(0.08, -0.25, 0);
      this.heldItemGroup.add(head);
    } else if (toolType === ToolType.SHOVEL) {
      // Stick
      const stick = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.06), handleMat);
      this.heldItemGroup.add(stick);
      // Head
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.06), mat);
      head.position.y = -0.28;
      this.heldItemGroup.add(head);
    } else if (toolType === ToolType.BOW) {
      // Simple arc shape using a stick
      const bowStick = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.6, 0.04), handleMat);
      this.heldItemGroup.add(bowStick);
      // String
      const stringMat = new THREE.MeshBasicMaterial({ color: 0xdddddd });
      const string = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.5, 0.02), stringMat);
      string.position.z = 0.08;
      this.heldItemGroup.add(string);
    } else {
      // Generic item
      const generic = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.1), mat);
      this.heldItemGroup.add(generic);
    }

    this.heldItemGroup.visible = true;
  }

  dispose() {
    // Shared geo/mat — don't dispose
  }
}
