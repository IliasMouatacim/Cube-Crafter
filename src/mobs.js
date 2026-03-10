// ============================================================
// Mob System: Monsters (night), Animals (day), AI, Combat
// ============================================================

import * as THREE from 'three';
import { PLAYER_HEIGHT, PLAYER_WIDTH, BlockType } from './blocks.js';
import { MobDrops } from './items.js';

// ── Mob type definitions ──────────────────────────────────

const MOB_CATEGORY = { MONSTER: 0, ANIMAL: 1 };

// 20 Monster types (spawn at night, hostile, chase player)
const MONSTER_TYPES = [
  { name: 'Zombie', color: 0x4a7a3a, hp: 20, speed: 3.0, damage: 3, w: 0.6, h: 1.8, xp: 5 },
  { name: 'Skeleton', color: 0xd0d0c0, hp: 16, speed: 3.2, damage: 3, w: 0.5, h: 1.8, xp: 5 },
  { name: 'Spider', color: 0x4a3030, hp: 14, speed: 4.0, damage: 2, w: 0.9, h: 0.6, xp: 5 },
  { name: 'Creeper', color: 0x30aa30, hp: 20, speed: 2.8, damage: 8, w: 0.5, h: 1.5, xp: 5 },
  { name: 'Enderman', color: 0x1a0a2e, hp: 40, speed: 4.5, damage: 7, w: 0.5, h: 2.8, xp: 8 },
  { name: 'Witch', color: 0x6a3a8a, hp: 22, speed: 2.5, damage: 4, w: 0.5, h: 1.8, xp: 7 },
  { name: 'Phantom', color: 0x4466aa, hp: 16, speed: 5.0, damage: 3, w: 0.8, h: 0.4, xp: 6 },
  { name: 'Slime', color: 0x55cc55, hp: 12, speed: 2.0, damage: 2, w: 0.8, h: 0.8, xp: 3 },
  { name: 'Blaze', color: 0xff8800, hp: 18, speed: 3.5, damage: 5, w: 0.5, h: 1.6, xp: 8 },
  { name: 'Wither Skeleton', color: 0x2a2a2e, hp: 24, speed: 3.0, damage: 5, w: 0.6, h: 2.2, xp: 7 },
  { name: 'Wraith', color: 0x808090, hp: 18, speed: 4.2, damage: 4, w: 0.5, h: 1.8, xp: 6 },
  { name: 'Goblin', color: 0x6a8a30, hp: 10, speed: 4.8, damage: 2, w: 0.4, h: 1.0, xp: 3 },
  { name: 'Ogre', color: 0x8a6a3a, hp: 40, speed: 1.8, damage: 8, w: 1.0, h: 2.5, xp: 10 },
  { name: 'Dark Knight', color: 0x202020, hp: 30, speed: 2.8, damage: 6, w: 0.6, h: 1.9, xp: 9 },
  { name: 'Banshee', color: 0xd0d0ff, hp: 14, speed: 5.5, damage: 3, w: 0.5, h: 1.6, xp: 6 },
  { name: 'Werewolf', color: 0x5a4a3a, hp: 28, speed: 5.0, damage: 5, w: 0.7, h: 1.6, xp: 8 },
  { name: 'Vampire', color: 0x3a0a0a, hp: 25, speed: 4.5, damage: 4, w: 0.5, h: 1.8, xp: 7 },
  { name: 'Troll', color: 0x5a8a5a, hp: 50, speed: 1.5, damage: 10, w: 1.2, h: 2.8, xp: 12 },
  { name: 'Shadow', color: 0x101020, hp: 15, speed: 6.0, damage: 3, w: 0.5, h: 1.2, xp: 5 },
  { name: 'Demon', color: 0xaa2020, hp: 35, speed: 3.5, damage: 7, w: 0.7, h: 2.0, xp: 10 },
];

// Animal types (spawn during day, passive, wander)
const ANIMAL_TYPES = [
  { name: 'Cow', color: 0x8a6a4a, hp: 10, speed: 1.5, w: 0.8, h: 1.2, xp: 1 },
  { name: 'Pig', color: 0xee9999, hp: 8, speed: 1.8, w: 0.6, h: 0.8, xp: 1 },
  { name: 'Sheep', color: 0xe0e0e0, hp: 8, speed: 1.5, w: 0.7, h: 1.0, xp: 1 },
  { name: 'Chicken', color: 0xf0f0f0, hp: 4, speed: 2.0, w: 0.3, h: 0.5, xp: 1 },
  { name: 'Horse', color: 0x8a5a2a, hp: 20, speed: 4.0, w: 0.9, h: 1.5, xp: 2 },
  { name: 'Rabbit', color: 0xc0a080, hp: 3, speed: 3.5, w: 0.3, h: 0.3, xp: 1 },
  { name: 'Fox', color: 0xcc6622, hp: 8, speed: 3.0, w: 0.5, h: 0.6, xp: 1 },
  { name: 'Deer', color: 0x9a7a4a, hp: 12, speed: 4.5, w: 0.7, h: 1.4, xp: 2 },
];

// Boss mob types (special spawns)
const BOSS_TYPES = [
  { name: 'Wither Boss', color: 0x1a1a1a, hp: 300, speed: 3.0, damage: 12, w: 1.5, h: 3.5, xp: 50, boss: true },
  { name: 'Dragon', color: 0x2a0a4a, hp: 200, speed: 5.0, damage: 10, w: 2.0, h: 2.5, xp: 100, boss: true },
  { name: 'Elder Guardian', color: 0x5a8a7a, hp: 150, speed: 2.0, damage: 8, w: 1.2, h: 1.2, xp: 40, boss: true },
];

// NPC (villager) type
const NPC_TYPE = { name: 'Villager', color: 0x8a6a4a, hp: 20, speed: 1.0, w: 0.6, h: 1.8, xp: 0 };

// ── Spawn config ──────────────────────────────────────────

const MAX_MOBS = 40;
const SPAWN_RADIUS_MIN = 20;
const SPAWN_RADIUS_MAX = 50;
const DESPAWN_RADIUS = 70;
const SPAWN_INTERVAL = 2.0; // seconds between spawn attempts
const ATTACK_COOLDOWN = 1.0; // seconds between mob attacks
const PLAYER_ATTACK_COOLDOWN = 0.4;
const PLAYER_ATTACK_DAMAGE = 4;
const PLAYER_ATTACK_RANGE = 4.0;
const KNOCKBACK_FORCE = 8;

// ── Reusable temp vectors (avoid per-frame allocations) ──
const _tmpVec = new THREE.Vector3();
const _tmpVec2 = new THREE.Vector3();
const _tmpVec3 = new THREE.Vector3();

// ── Shared geometry / material caches ─────────────────────
const _geoCache = new Map();   // key -> BufferGeometry
const _matCache = new Map();   // key -> MeshLambertMaterial / MeshBasicMaterial

function _getGeo(key, factory) {
  if (!_geoCache.has(key)) _geoCache.set(key, factory());
  return _geoCache.get(key);
}
function _getMat(key, factory) {
  if (!_matCache.has(key)) _matCache.set(key, factory());
  return _matCache.get(key);
}

// ── Mob Entity ────────────────────────────────────────────

// Helper: create box mesh
function _box(key, sx, sy, sz, color) {
  const g = _getGeo(key, () => new THREE.BoxGeometry(sx, sy, sz));
  const m = _getMat(key, () => new THREE.MeshLambertMaterial({ color }));
  return new THREE.Mesh(g, m);
}

// Helper: add pair of eyes
function _addEyes(group, x, y, z, size, color) {
  const g = _getGeo(`meye${size}`, () => new THREE.BoxGeometry(size, size, size * 0.5));
  const m = _getMat(`meye${color}`, () => new THREE.MeshBasicMaterial({ color }));
  group.add(new THREE.Mesh(g, m).translateX(-x).translateY(y).translateZ(z));
  group.add(new THREE.Mesh(g, m).translateX(x).translateY(y).translateZ(z));
}

// Helper: add 4 legs (animals)
function _addLegs4(group, w, legH, legW, frontZ, backZ, y, color) {
  const g = _getGeo(`mleg${legW}${legH}`, () => new THREE.BoxGeometry(legW, legH, legW));
  const m = _getMat(`mleg${color}`, () => new THREE.MeshLambertMaterial({ color }));
  const xs = w * 0.3;
  for (const [xm, zm] of [[-xs, frontZ], [xs, frontZ], [-xs, backZ], [xs, backZ]]) {
    group.add(new THREE.Mesh(g, m).translateX(xm).translateY(y).translateZ(zm));
  }
}

// Helper: add 2 legs (humanoid)
function _addLegs2(group, spacing, legH, legW, y, color) {
  const g = _getGeo(`mleg2_${legW}${legH}`, () => new THREE.BoxGeometry(legW, legH, legW));
  const m = _getMat(`mleg2_${color}`, () => new THREE.MeshLambertMaterial({ color }));
  group.add(new THREE.Mesh(g, m).translateX(-spacing).translateY(y));
  group.add(new THREE.Mesh(g, m).translateX(spacing).translateY(y));
}

// Helper: add 2 arms (humanoid)
function _addArms(group, spacing, armH, armW, y, color) {
  const g = _getGeo(`marm_${armW}${armH}`, () => new THREE.BoxGeometry(armW, armH, armW));
  const m = _getMat(`marm_${color}`, () => new THREE.MeshLambertMaterial({ color }));
  group.add(new THREE.Mesh(g, m).translateX(-spacing).translateY(y));
  group.add(new THREE.Mesh(g, m).translateX(spacing).translateY(y));
}

// Fallback generic mob
function _buildGenericMob(group, type, cat) {
  const { w, h, color } = type;
  const body = _box(`gen_b_${type.name}`, w, h * 0.6, w * 0.6, color);
  body.position.y = h * 0.3; group.add(body);
  const hs = Math.min(w * 0.5, 0.4);
  const head = _box(`gen_h_${type.name}`, hs, hs, hs, color);
  head.position.y = h * 0.6 + hs * 0.5; group.add(head);
  const ec = cat === MOB_CATEGORY.MONSTER ? 0xff0000 : 0x111111;
  _addEyes(group, hs * 0.2, h * 0.6 + hs * 0.55, hs * 0.5, hs * 0.15, ec);
  const legC = new THREE.Color(color).multiplyScalar(0.7).getHex();
  if (cat === MOB_CATEGORY.ANIMAL) {
    _addLegs4(group, w, h * 0.25, w * 0.15, -w * 0.15, w * 0.15, h * 0.25 / 2, legC);
  } else {
    _addLegs2(group, w * 0.15, h * 0.25, w * 0.15, h * 0.25 / 2, legC);
  }
}

// ── Specific Mob Builders ─────────────────────────────────

const MOB_BUILDERS = {};

// === ANIMALS ===

MOB_BUILDERS['Cow'] = (g) => {
  // Brown body, white patches, udder
  const body = _box('cow_body', 0.9, 0.55, 0.5, 0x6b4226); body.position.set(0, 0.72, 0); g.add(body);
  const patch = _box('cow_patch', 0.4, 0.3, 0.52, 0xf0e8d0); patch.position.set(0.1, 0.75, 0); g.add(patch);
  const head = _box('cow_head', 0.4, 0.38, 0.35, 0x6b4226); head.position.set(0, 1.05, 0.35); g.add(head);
  const snout = _box('cow_snout', 0.25, 0.15, 0.1, 0xd4a07a); snout.position.set(0, 0.95, 0.55); g.add(snout);
  // Horns
  const hg = _getGeo('cow_horn', () => new THREE.BoxGeometry(0.05, 0.15, 0.05));
  const hm = _getMat('cow_horn', () => new THREE.MeshLambertMaterial({ color: 0xf5f0dc }));
  g.add(new THREE.Mesh(hg, hm).translateX(-0.18).translateY(1.28).translateZ(0.35));
  g.add(new THREE.Mesh(hg, hm).translateX(0.18).translateY(1.28).translateZ(0.35));
  _addEyes(g, 0.12, 1.08, 0.53, 0.04, 0x111111);
  _addLegs4(g, 0.7, 0.45, 0.12, 0.18, -0.18, 0.22, 0x4a2e16);
  // Udder
  const udder = _box('cow_udder', 0.2, 0.1, 0.15, 0xffb6c1); udder.position.set(0, 0.42, -0.1); g.add(udder);
};

MOB_BUILDERS['Pig'] = (g) => {
  const body = _box('pig_body', 0.6, 0.4, 0.45, 0xf0a0a0); body.position.set(0, 0.5, 0); g.add(body);
  const head = _box('pig_head', 0.35, 0.3, 0.3, 0xf0a0a0); head.position.set(0, 0.7, 0.3); g.add(head);
  const snout = _box('pig_snout', 0.18, 0.12, 0.08, 0xe07070); snout.position.set(0, 0.63, 0.46); g.add(snout);
  // Nostrils
  const ng = _getGeo('pig_nos', () => new THREE.BoxGeometry(0.04, 0.04, 0.02));
  const nm = _getMat('pig_nos', () => new THREE.MeshBasicMaterial({ color: 0x8b4040 }));
  g.add(new THREE.Mesh(ng, nm).translateX(-0.04).translateY(0.63).translateZ(0.51));
  g.add(new THREE.Mesh(ng, nm).translateX(0.04).translateY(0.63).translateZ(0.51));
  _addEyes(g, 0.1, 0.75, 0.45, 0.035, 0x111111);
  _addLegs4(g, 0.45, 0.28, 0.1, 0.15, -0.15, 0.14, 0xd08080);
  // Curly tail
  const tail = _box('pig_tail', 0.06, 0.06, 0.12, 0xf0a0a0); tail.position.set(0, 0.6, -0.28); g.add(tail);
};

MOB_BUILDERS['Sheep'] = (g) => {
  // Fluffy wool body (larger than actual body)
  const wool = _box('sheep_wool', 0.75, 0.5, 0.55, 0xe8e8e8); wool.position.set(0, 0.65, 0); g.add(wool);
  const head = _box('sheep_head', 0.3, 0.28, 0.25, 0xc0b0a0); head.position.set(0, 0.85, 0.35); g.add(head);
  _addEyes(g, 0.09, 0.88, 0.48, 0.035, 0x111111);
  // Ears
  const eg = _getGeo('sheep_ear', () => new THREE.BoxGeometry(0.12, 0.06, 0.04));
  const em = _getMat('sheep_ear', () => new THREE.MeshLambertMaterial({ color: 0xc0b0a0 }));
  g.add(new THREE.Mesh(eg, em).translateX(-0.2).translateY(0.88).translateZ(0.32));
  g.add(new THREE.Mesh(eg, em).translateX(0.2).translateY(0.88).translateZ(0.32));
  _addLegs4(g, 0.55, 0.38, 0.1, 0.18, -0.18, 0.19, 0x8a7a6a);
};

MOB_BUILDERS['Chicken'] = (g) => {
  const body = _box('chk_body', 0.25, 0.22, 0.3, 0xf5f5f0); body.position.set(0, 0.28, 0); g.add(body);
  const head = _box('chk_head', 0.15, 0.15, 0.12, 0xf5f5f0); head.position.set(0, 0.48, 0.12); g.add(head);
  // Red comb
  const comb = _box('chk_comb', 0.06, 0.08, 0.06, 0xdd2222); comb.position.set(0, 0.58, 0.14); g.add(comb);
  // Beak
  const beak = _box('chk_beak', 0.06, 0.04, 0.08, 0xffaa00); beak.position.set(0, 0.45, 0.2); g.add(beak);
  // Wattle
  const wat = _box('chk_wat', 0.04, 0.06, 0.03, 0xdd2222); wat.position.set(0, 0.4, 0.18); g.add(wat);
  _addEyes(g, 0.06, 0.5, 0.18, 0.025, 0x111111);
  // Legs (thin, yellow)
  _addLegs2(g, 0.06, 0.16, 0.04, 0.08, 0xddaa00);
  // Tail feathers
  const tail = _box('chk_tail', 0.08, 0.12, 0.06, 0xd0d0c0); tail.position.set(0, 0.38, -0.18); tail.rotation.x = -0.4; g.add(tail);
};

MOB_BUILDERS['Horse'] = (g) => {
  const body = _box('hrs_body', 0.7, 0.55, 0.9, 0x8a5a2a); body.position.set(0, 0.9, 0); g.add(body);
  const head = _box('hrs_head', 0.25, 0.4, 0.25, 0x8a5a2a); head.position.set(0, 1.25, 0.5); g.add(head);
  // Muzzle
  const muz = _box('hrs_muz', 0.2, 0.15, 0.12, 0xa07040); muz.position.set(0, 1.1, 0.6); g.add(muz);
  // Mane
  const mane = _box('hrs_mane', 0.08, 0.35, 0.5, 0x3a2a10); mane.position.set(0, 1.35, 0.15); g.add(mane);
  _addEyes(g, 0.1, 1.3, 0.63, 0.04, 0x111111);
  // Ears
  const eg = _getGeo('hrs_ear', () => new THREE.BoxGeometry(0.06, 0.12, 0.04));
  const em = _getMat('hrs_ear', () => new THREE.MeshLambertMaterial({ color: 0x8a5a2a }));
  g.add(new THREE.Mesh(eg, em).translateX(-0.08).translateY(1.5).translateZ(0.48));
  g.add(new THREE.Mesh(eg, em).translateX(0.08).translateY(1.5).translateZ(0.48));
  _addLegs4(g, 0.5, 0.6, 0.1, 0.3, -0.3, 0.3, 0x6a4020);
  // Tail
  const tail = _box('hrs_tail', 0.06, 0.4, 0.06, 0x3a2a10); tail.position.set(0, 0.7, -0.48); g.add(tail);
};

MOB_BUILDERS['Rabbit'] = (g) => {
  const body = _box('rab_body', 0.2, 0.15, 0.25, 0xc0a080); body.position.set(0, 0.18, 0); g.add(body);
  const head = _box('rab_head', 0.16, 0.14, 0.14, 0xc0a080); head.position.set(0, 0.3, 0.12); g.add(head);
  // Long ears
  const eg = _getGeo('rab_ear', () => new THREE.BoxGeometry(0.04, 0.16, 0.03));
  const em = _getMat('rab_ear', () => new THREE.MeshLambertMaterial({ color: 0xc0a080 }));
  const ei = _getMat('rab_eari', () => new THREE.MeshLambertMaterial({ color: 0xeeb8b8 }));
  g.add(new THREE.Mesh(eg, em).translateX(-0.05).translateY(0.45).translateZ(0.12));
  g.add(new THREE.Mesh(eg, em).translateX(0.05).translateY(0.45).translateZ(0.12));
  _addEyes(g, 0.05, 0.33, 0.19, 0.025, 0x111111);
  // Fluffy tail
  const tail = _box('rab_tail', 0.08, 0.08, 0.08, 0xf0e8e0); tail.position.set(0, 0.2, -0.14); g.add(tail);
  // Small legs
  _addLegs4(g, 0.14, 0.1, 0.05, 0.08, -0.08, 0.05, 0xa08060);
};

MOB_BUILDERS['Fox'] = (g) => {
  const body = _box('fox_body', 0.4, 0.28, 0.55, 0xcc6622); body.position.set(0, 0.38, 0); g.add(body);
  // White chest
  const chest = _box('fox_chest', 0.25, 0.2, 0.15, 0xf5e8d0); chest.position.set(0, 0.35, 0.2); g.add(chest);
  const head = _box('fox_head', 0.25, 0.2, 0.22, 0xcc6622); head.position.set(0, 0.55, 0.3); g.add(head);
  // Pointed snout
  const snout = _box('fox_snout', 0.12, 0.1, 0.12, 0x222222); snout.position.set(0, 0.5, 0.44); g.add(snout);
  // Pointy ears
  const eg = _getGeo('fox_ear', () => new THREE.BoxGeometry(0.06, 0.1, 0.04));
  const em = _getMat('fox_ear', () => new THREE.MeshLambertMaterial({ color: 0xcc6622 }));
  g.add(new THREE.Mesh(eg, em).translateX(-0.08).translateY(0.68).translateZ(0.28));
  g.add(new THREE.Mesh(eg, em).translateX(0.08).translateY(0.68).translateZ(0.28));
  _addEyes(g, 0.07, 0.57, 0.42, 0.03, 0x33aa33);
  _addLegs4(g, 0.3, 0.22, 0.06, 0.18, -0.18, 0.11, 0x222222);
  // Bushy tail
  const tail = _box('fox_tail', 0.12, 0.12, 0.3, 0xcc6622); tail.position.set(0, 0.4, -0.38); g.add(tail);
  const tailTip = _box('fox_tailtip', 0.1, 0.1, 0.08, 0xf5f5f0); tailTip.position.set(0, 0.4, -0.52); g.add(tailTip);
};

MOB_BUILDERS['Deer'] = (g) => {
  const body = _box('deer_body', 0.6, 0.45, 0.7, 0x9a7a4a); body.position.set(0, 0.85, 0); g.add(body);
  // White belly
  const belly = _box('deer_belly', 0.45, 0.15, 0.6, 0xe8dcc8); belly.position.set(0, 0.68, 0); g.add(belly);
  const head = _box('deer_head', 0.22, 0.25, 0.2, 0x9a7a4a); head.position.set(0, 1.2, 0.4); g.add(head);
  const nose = _box('deer_nose', 0.14, 0.1, 0.08, 0x5a4020); nose.position.set(0, 1.12, 0.52); g.add(nose);
  // Antlers
  const ag = _getGeo('deer_antler', () => new THREE.BoxGeometry(0.03, 0.25, 0.03));
  const am = _getMat('deer_antler', () => new THREE.MeshLambertMaterial({ color: 0x8a7050 }));
  g.add(new THREE.Mesh(ag, am).translateX(-0.1).translateY(1.45).translateZ(0.38));
  g.add(new THREE.Mesh(ag, am).translateX(0.1).translateY(1.45).translateZ(0.38));
  // Antler branches
  const bg = _getGeo('deer_abranch', () => new THREE.BoxGeometry(0.1, 0.03, 0.03));
  g.add(new THREE.Mesh(bg, am).translateX(-0.14).translateY(1.5).translateZ(0.38));
  g.add(new THREE.Mesh(bg, am).translateX(0.14).translateY(1.5).translateZ(0.38));
  _addEyes(g, 0.08, 1.23, 0.5, 0.03, 0x111111);
  _addLegs4(g, 0.4, 0.6, 0.08, 0.25, -0.25, 0.3, 0x7a5a30);
  const tail = _box('deer_tail', 0.08, 0.06, 0.1, 0xf5f0e0); tail.position.set(0, 1.0, -0.38); g.add(tail);
};

// === MONSTERS ===

MOB_BUILDERS['Zombie'] = (g) => {
  // Green humanoid, torn blue shirt, dark pants
  const torso = _box('zom_torso', 0.5, 0.6, 0.28, 0x3a6a3a); torso.position.set(0, 1.0, 0); g.add(torso);
  const shirt = _box('zom_shirt', 0.52, 0.3, 0.29, 0x2a4a6a); shirt.position.set(0, 1.1, 0); g.add(shirt);
  const head = _box('zom_head', 0.4, 0.4, 0.4, 0x4a7a3a); head.position.set(0, 1.5, 0); g.add(head);
  _addEyes(g, 0.1, 1.55, 0.21, 0.06, 0x111111);
  _addArms(g, 0.35, 0.55, 0.16, 1.0, 0x4a7a3a);
  _addLegs2(g, 0.13, 0.55, 0.18, 0.28, 0x2a2a3a);
};

MOB_BUILDERS['Skeleton'] = (g) => {
  const torso = _box('skel_torso', 0.35, 0.55, 0.2, 0xd0d0c0); torso.position.set(0, 1.0, 0); g.add(torso);
  // Ribs
  const rib = _box('skel_rib', 0.36, 0.04, 0.21, 0xa0a090); rib.position.set(0, 1.05, 0); g.add(rib);
  const rib2 = _box('skel_rib2', 0.36, 0.04, 0.21, 0xa0a090); rib2.position.set(0, 0.9, 0); g.add(rib2);
  const head = _box('skel_head', 0.35, 0.35, 0.35, 0xd0d0c0); head.position.set(0, 1.48, 0); g.add(head);
  _addEyes(g, 0.08, 1.52, 0.18, 0.06, 0x111111);
  _addArms(g, 0.28, 0.5, 0.1, 1.0, 0xc0c0b0);
  _addLegs2(g, 0.1, 0.55, 0.1, 0.28, 0xc0c0b0);
};

MOB_BUILDERS['Spider'] = (g) => {
  const body = _box('spi_body', 0.7, 0.3, 0.5, 0x4a3030); body.position.set(0, 0.3, 0); g.add(body);
  const head = _box('spi_head', 0.35, 0.25, 0.3, 0x3a2020); head.position.set(0, 0.35, 0.35); g.add(head);
  _addEyes(g, 0.08, 0.4, 0.5, 0.05, 0xff0000);
  _addEyes(g, 0.04, 0.35, 0.5, 0.04, 0xff0000);
  // 8 legs (4 per side)
  const lg = _getGeo('spi_leg', () => new THREE.BoxGeometry(0.5, 0.06, 0.06));
  const lm = _getMat('spi_leg', () => new THREE.MeshLambertMaterial({ color: 0x3a2020 }));
  for (let i = 0; i < 4; i++) {
    const z = -0.15 + i * 0.1;
    const ll = new THREE.Mesh(lg, lm); ll.position.set(-0.5, 0.2, z); ll.rotation.z = 0.4; g.add(ll);
    const lr = new THREE.Mesh(lg, lm); lr.position.set(0.5, 0.2, z); lr.rotation.z = -0.4; g.add(lr);
  }
};

MOB_BUILDERS['Creeper'] = (g) => {
  const body = _box('crp_body', 0.4, 0.8, 0.3, 0x30aa30); body.position.set(0, 0.7, 0); g.add(body);
  const head = _box('crp_head', 0.42, 0.42, 0.42, 0x30aa30); head.position.set(0, 1.32, 0); g.add(head);
  // Creeper face (dark pixels)
  _addEyes(g, 0.08, 1.38, 0.22, 0.07, 0x111111);
  const mouth = _box('crp_mouth', 0.1, 0.12, 0.02, 0x111111); mouth.position.set(0, 1.22, 0.21); g.add(mouth);
  _addLegs4(g, 0.3, 0.3, 0.12, 0.1, -0.1, 0.15, 0x208820);
};

MOB_BUILDERS['Enderman'] = (g) => {
  const body = _box('end_body', 0.35, 1.0, 0.2, 0x1a0a2e); body.position.set(0, 1.4, 0); g.add(body);
  const head = _box('end_head', 0.4, 0.35, 0.4, 0x1a0a2e); head.position.set(0, 2.3, 0); g.add(head);
  _addEyes(g, 0.1, 2.32, 0.21, 0.08, 0xcc44ff);
  _addArms(g, 0.28, 0.9, 0.1, 1.3, 0x1a0a2e);
  _addLegs2(g, 0.1, 0.8, 0.1, 0.4, 0x1a0a2e);
};

MOB_BUILDERS['Witch'] = (g) => {
  const body = _box('wit_body', 0.45, 0.7, 0.3, 0x6a3a8a); body.position.set(0, 0.9, 0); g.add(body);
  const head = _box('wit_head', 0.35, 0.35, 0.35, 0xd4a574); head.position.set(0, 1.45, 0); g.add(head);
  // Witch hat
  const hat = _box('wit_hat', 0.4, 0.08, 0.4, 0x222222); hat.position.set(0, 1.66, 0); g.add(hat);
  const hatTop = _box('wit_hattop', 0.2, 0.25, 0.2, 0x222222); hatTop.position.set(0, 1.78, 0); g.add(hatTop);
  // Nose
  const nose = _box('wit_nose', 0.08, 0.1, 0.1, 0xd4a574); nose.position.set(0, 1.4, 0.2); g.add(nose);
  _addEyes(g, 0.08, 1.48, 0.18, 0.05, 0x44ff44);
  _addLegs2(g, 0.12, 0.5, 0.15, 0.25, 0x4a2a5a);
};

MOB_BUILDERS['Phantom'] = (g) => {
  const body = _box('pha_body', 0.3, 0.15, 0.6, 0x4466aa); body.position.set(0, 0.2, 0); g.add(body);
  // Wings
  const wg = _getGeo('pha_wing', () => new THREE.BoxGeometry(0.6, 0.04, 0.35));
  const wm = _getMat('pha_wing', () => new THREE.MeshLambertMaterial({ color: 0x3355aa, transparent: true, opacity: 0.8 }));
  g.add(new THREE.Mesh(wg, wm).translateX(-0.4).translateY(0.22));
  g.add(new THREE.Mesh(wg, wm).translateX(0.4).translateY(0.22));
  _addEyes(g, 0.06, 0.24, 0.3, 0.04, 0x44ff44);
};

MOB_BUILDERS['Slime'] = (g) => {
  const body = _box('slm_body', 0.7, 0.7, 0.7, 0x55cc55);
  body.position.set(0, 0.35, 0); body.material.transparent = true; body.material.opacity = 0.7;
  g.add(body);
  // Inner core
  const core = _box('slm_core', 0.3, 0.3, 0.3, 0x338833); core.position.set(0, 0.3, 0); g.add(core);
  _addEyes(g, 0.12, 0.45, 0.36, 0.08, 0x111111);
  const mouth = _box('slm_mouth', 0.2, 0.06, 0.02, 0x111111); mouth.position.set(0, 0.3, 0.36); g.add(mouth);
};

MOB_BUILDERS['Blaze'] = (g) => {
  const head = _box('blz_head', 0.4, 0.4, 0.4, 0xff8800); head.position.set(0, 1.2, 0); g.add(head);
  _addEyes(g, 0.1, 1.25, 0.21, 0.06, 0xffff00);
  // Floating rods
  const rg = _getGeo('blz_rod', () => new THREE.BoxGeometry(0.08, 0.4, 0.08));
  const rm = _getMat('blz_rod', () => new THREE.MeshLambertMaterial({ color: 0xffaa00 }));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const rod = new THREE.Mesh(rg, rm);
    rod.position.set(Math.cos(a) * 0.3, 0.8 + (i % 2) * 0.3, Math.sin(a) * 0.3);
    g.add(rod);
  }
  // Smoke/body
  const smoke = _box('blz_smoke', 0.25, 0.5, 0.25, 0xcc6600);
  smoke.position.set(0, 0.8, 0); smoke.material.transparent = true; smoke.material.opacity = 0.5;
  g.add(smoke);
};

MOB_BUILDERS['Wither Skeleton'] = (g) => {
  const torso = _box('wskel_torso', 0.4, 0.7, 0.22, 0x2a2a2e); torso.position.set(0, 1.2, 0); g.add(torso);
  const head = _box('wskel_head', 0.38, 0.38, 0.38, 0x2a2a2e); head.position.set(0, 1.75, 0); g.add(head);
  _addEyes(g, 0.09, 1.78, 0.2, 0.06, 0xff4444);
  _addArms(g, 0.32, 0.6, 0.12, 1.2, 0x2a2a2e);
  _addLegs2(g, 0.12, 0.7, 0.12, 0.35, 0x1a1a1e);
  // Sword
  const sword = _box('wskel_sword', 0.06, 0.6, 0.06, 0x555555); sword.position.set(0.4, 1.0, 0.15); g.add(sword);
};

MOB_BUILDERS['Wraith'] = (g) => {
  const body = _box('wra_body', 0.4, 0.9, 0.25, 0x808090);
  body.position.set(0, 0.9, 0); body.material.transparent = true; body.material.opacity = 0.6;
  g.add(body);
  const head = _box('wra_head', 0.35, 0.35, 0.35, 0xa0a0b0);
  head.position.set(0, 1.55, 0); head.material.transparent = true; head.material.opacity = 0.7;
  g.add(head);
  _addEyes(g, 0.08, 1.58, 0.18, 0.06, 0x66ffff);
};

MOB_BUILDERS['Goblin'] = (g) => {
  const body = _box('gob_body', 0.3, 0.35, 0.2, 0x6a8a30); body.position.set(0, 0.5, 0); g.add(body);
  const head = _box('gob_head', 0.28, 0.25, 0.25, 0x7a9a40); head.position.set(0, 0.8, 0); g.add(head);
  // Big pointy ears
  const eg = _getGeo('gob_ear', () => new THREE.BoxGeometry(0.15, 0.06, 0.04));
  const em = _getMat('gob_ear', () => new THREE.MeshLambertMaterial({ color: 0x7a9a40 }));
  g.add(new THREE.Mesh(eg, em).translateX(-0.2).translateY(0.82));
  g.add(new THREE.Mesh(eg, em).translateX(0.2).translateY(0.82));
  const nose = _box('gob_nose', 0.08, 0.08, 0.06, 0x8aaa50); nose.position.set(0, 0.76, 0.14); g.add(nose);
  _addEyes(g, 0.07, 0.83, 0.13, 0.04, 0xff4444);
  _addLegs2(g, 0.08, 0.3, 0.1, 0.15, 0x5a7a20);
};

MOB_BUILDERS['Ogre'] = (g) => {
  const body = _box('ogr_body', 0.9, 1.0, 0.6, 0x8a6a3a); body.position.set(0, 1.2, 0); g.add(body);
  const head = _box('ogr_head', 0.55, 0.5, 0.5, 0x8a6a3a); head.position.set(0, 2.0, 0); g.add(head);
  // Underbite
  const jaw = _box('ogr_jaw', 0.45, 0.15, 0.2, 0x7a5a2a); jaw.position.set(0, 1.78, 0.2); g.add(jaw);
  _addEyes(g, 0.12, 2.05, 0.26, 0.08, 0xffaa00);
  _addArms(g, 0.6, 0.8, 0.2, 1.3, 0x7a5a2a);
  _addLegs2(g, 0.2, 0.6, 0.22, 0.3, 0x6a4a2a);
};

MOB_BUILDERS['Dark Knight'] = (g) => {
  const body = _box('dk_body', 0.5, 0.65, 0.3, 0x202020); body.position.set(0, 1.0, 0); g.add(body);
  const head = _box('dk_head', 0.38, 0.38, 0.38, 0x303030); head.position.set(0, 1.5, 0); g.add(head);
  // Helmet visor
  const visor = _box('dk_visor', 0.3, 0.08, 0.04, 0x111111); visor.position.set(0, 1.5, 0.2); g.add(visor);
  _addEyes(g, 0.08, 1.53, 0.2, 0.04, 0xff0000);
  _addArms(g, 0.35, 0.55, 0.15, 1.0, 0x252525);
  _addLegs2(g, 0.13, 0.55, 0.16, 0.28, 0x1a1a1a);
  // Sword
  const sword = _box('dk_sword', 0.05, 0.7, 0.05, 0x888888); sword.position.set(0.42, 1.0, 0.1); g.add(sword);
  // Shield
  const shield = _box('dk_shield', 0.04, 0.4, 0.3, 0x333333); shield.position.set(-0.4, 1.0, 0.05); g.add(shield);
};

MOB_BUILDERS['Banshee'] = (g) => {
  const body = _box('ban_body', 0.4, 0.8, 0.25, 0xd0d0ff);
  body.position.set(0, 0.8, 0); body.material.transparent = true; body.material.opacity = 0.5;
  g.add(body);
  const head = _box('ban_head', 0.35, 0.35, 0.32, 0xe0e0ff);
  head.position.set(0, 1.38, 0); head.material.transparent = true; head.material.opacity = 0.6;
  g.add(head);
  // Hair
  const hair = _box('ban_hair', 0.38, 0.3, 0.34, 0xaaaacc);
  hair.position.set(0, 1.35, -0.05); hair.material.transparent = true; hair.material.opacity = 0.4;
  g.add(hair);
  _addEyes(g, 0.08, 1.42, 0.17, 0.06, 0x8888ff);
  // Open mouth
  const mouth = _box('ban_mouth', 0.12, 0.1, 0.02, 0x111111); mouth.position.set(0, 1.28, 0.17); g.add(mouth);
};

MOB_BUILDERS['Werewolf'] = (g) => {
  const body = _box('ww_body', 0.55, 0.65, 0.35, 0x5a4a3a); body.position.set(0, 0.9, 0); g.add(body);
  const head = _box('ww_head', 0.38, 0.32, 0.35, 0x5a4a3a); head.position.set(0, 1.35, 0.05); g.add(head);
  // Snout
  const snout = _box('ww_snout', 0.18, 0.14, 0.18, 0x4a3a2a); snout.position.set(0, 1.28, 0.22); g.add(snout);
  // Pointy ears
  const eg = _getGeo('ww_ear', () => new THREE.BoxGeometry(0.06, 0.12, 0.04));
  const em = _getMat('ww_ear', () => new THREE.MeshLambertMaterial({ color: 0x5a4a3a }));
  g.add(new THREE.Mesh(eg, em).translateX(-0.14).translateY(1.55).translateZ(0.05));
  g.add(new THREE.Mesh(eg, em).translateX(0.14).translateY(1.55).translateZ(0.05));
  _addEyes(g, 0.1, 1.38, 0.23, 0.05, 0xffaa00);
  _addArms(g, 0.38, 0.55, 0.16, 0.9, 0x5a4a3a);
  _addLegs2(g, 0.14, 0.5, 0.16, 0.25, 0x4a3a2a);
  // Tail
  const tail = _box('ww_tail', 0.08, 0.08, 0.25, 0x5a4a3a); tail.position.set(0, 0.8, -0.25); g.add(tail);
};

MOB_BUILDERS['Vampire'] = (g) => {
  const body = _box('vam_body', 0.45, 0.65, 0.28, 0x1a1a1a); body.position.set(0, 0.95, 0); g.add(body);
  // Red interior of cape
  const cape = _box('vam_cape', 0.55, 0.7, 0.05, 0x8a0a0a); cape.position.set(0, 0.95, -0.15); g.add(cape);
  const head = _box('vam_head', 0.35, 0.35, 0.35, 0xd0b0a0); head.position.set(0, 1.5, 0); g.add(head);
  // Hair
  const hair = _box('vam_hair', 0.36, 0.15, 0.36, 0x1a0a0a); hair.position.set(0, 1.68, -0.02); g.add(hair);
  _addEyes(g, 0.08, 1.53, 0.18, 0.05, 0xff0000);
  // Fangs
  const fg = _getGeo('vam_fang', () => new THREE.BoxGeometry(0.03, 0.06, 0.02));
  const fm = _getMat('vam_fang', () => new THREE.MeshBasicMaterial({ color: 0xffffff }));
  g.add(new THREE.Mesh(fg, fm).translateX(-0.05).translateY(1.4).translateZ(0.18));
  g.add(new THREE.Mesh(fg, fm).translateX(0.05).translateY(1.4).translateZ(0.18));
  _addLegs2(g, 0.12, 0.55, 0.15, 0.28, 0x1a1a1a);
};

MOB_BUILDERS['Troll'] = (g) => {
  const body = _box('trl_body', 1.0, 1.2, 0.7, 0x5a8a5a); body.position.set(0, 1.4, 0); g.add(body);
  const head = _box('trl_head', 0.6, 0.5, 0.5, 0x5a8a5a); head.position.set(0, 2.3, 0); g.add(head);
  const nose = _box('trl_nose', 0.15, 0.2, 0.15, 0x6a9a6a); nose.position.set(0, 2.2, 0.28); g.add(nose);
  _addEyes(g, 0.14, 2.35, 0.26, 0.08, 0xaaaa00);
  _addArms(g, 0.65, 1.0, 0.22, 1.5, 0x4a7a4a);
  _addLegs2(g, 0.25, 0.7, 0.25, 0.35, 0x4a7a4a);
  // Club
  const club = _box('trl_club', 0.12, 0.8, 0.12, 0x6a5030); club.position.set(0.7, 1.4, 0.1); g.add(club);
};

MOB_BUILDERS['Shadow'] = (g) => {
  const body = _box('shd_body', 0.4, 0.6, 0.25, 0x101020);
  body.position.set(0, 0.6, 0); body.material.transparent = true; body.material.opacity = 0.5;
  g.add(body);
  const head = _box('shd_head', 0.3, 0.3, 0.3, 0x101020);
  head.position.set(0, 1.05, 0); head.material.transparent = true; head.material.opacity = 0.6;
  g.add(head);
  _addEyes(g, 0.07, 1.08, 0.16, 0.05, 0xaa44ff);
};

MOB_BUILDERS['Demon'] = (g) => {
  const body = _box('dem_body', 0.6, 0.8, 0.4, 0xaa2020); body.position.set(0, 1.0, 0); g.add(body);
  const head = _box('dem_head', 0.42, 0.4, 0.4, 0xaa2020); head.position.set(0, 1.6, 0); g.add(head);
  // Horns
  const hg = _getGeo('dem_horn', () => new THREE.BoxGeometry(0.06, 0.2, 0.06));
  const hm = _getMat('dem_horn', () => new THREE.MeshLambertMaterial({ color: 0x222222 }));
  g.add(new THREE.Mesh(hg, hm).translateX(-0.15).translateY(1.88));
  g.add(new THREE.Mesh(hg, hm).translateX(0.15).translateY(1.88));
  _addEyes(g, 0.1, 1.65, 0.21, 0.06, 0xffff00);
  _addArms(g, 0.42, 0.65, 0.18, 1.0, 0x881818);
  _addLegs2(g, 0.16, 0.55, 0.18, 0.28, 0x661010);
  // Tail
  const tail = _box('dem_tail', 0.06, 0.06, 0.35, 0xaa2020); tail.position.set(0, 0.7, -0.3); g.add(tail);
  const tailTip = _box('dem_tailtip', 0.1, 0.1, 0.06, 0x661010); tailTip.position.set(0, 0.7, -0.5); g.add(tailTip);
};

// === BOSS MOBS ===

MOB_BUILDERS['Wither Boss'] = (g) => {
  // Three-headed wither boss
  const body = _box('wb_body', 1.2, 1.5, 0.8, 0x1a1a1a); body.position.set(0, 1.8, 0); g.add(body);
  // Three heads
  for (let i = -1; i <= 1; i++) {
    const head = _box(`wb_head${i}`, 0.5, 0.5, 0.5, 0x2a2a2a);
    head.position.set(i * 0.5, 3.0, 0.1); g.add(head);
    _addEyes(g, 0.12, 3.05, 0.36 + (i === 0 ? 0 : 0), 0.06, 0x44ccff);
  }
  // Ribcage
  for (let i = 0; i < 3; i++) {
    const rib = _box(`wb_rib${i}`, 1.3, 0.06, 0.82, 0x333333);
    rib.position.set(0, 1.5 + i * 0.25, 0); g.add(rib);
  }
  _addArms(g, 0.75, 1.0, 0.2, 2.0, 0x2a2a2a);
};

MOB_BUILDERS['Dragon'] = (g) => {
  // Purple dragon
  const body = _box('drg_body', 1.8, 1.0, 1.5, 0x2a0a4a); body.position.set(0, 1.3, 0); g.add(body);
  const head = _box('drg_head', 0.6, 0.5, 0.7, 0x3a1a5a); head.position.set(0, 2.0, 0.9); g.add(head);
  const snout = _box('drg_snout', 0.3, 0.2, 0.4, 0x4a2a6a); snout.position.set(0, 1.9, 1.3); g.add(snout);
  _addEyes(g, 0.18, 2.1, 1.2, 0.1, 0xff00ff);
  // Wings
  const wg = _getGeo('drg_wing', () => new THREE.BoxGeometry(1.5, 0.05, 1.0));
  const wm = _getMat('drg_wing', () => new THREE.MeshLambertMaterial({ color: 0x3a0a5a, transparent: true, opacity: 0.7 }));
  g.add(new THREE.Mesh(wg, wm).translateX(-1.2).translateY(1.8));
  g.add(new THREE.Mesh(wg, wm).translateX(1.2).translateY(1.8));
  // Tail
  const tail = _box('drg_tail', 0.3, 0.3, 1.0, 0x2a0a4a); tail.position.set(0, 1.1, -1.0); g.add(tail);
  // Legs
  _addLegs4(g, 1.2, 0.7, 0.25, 0.5, -0.5, 0.35, 0x1a0a3a);
};

MOB_BUILDERS['Elder Guardian'] = (g) => {
  // Large spiky fish-like boss
  const body = _box('eg_body', 1.0, 1.0, 1.0, 0x5a8a7a); body.position.set(0, 0.6, 0); g.add(body);
  // Spikes
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const spike = _box(`eg_spike${i}`, 0.08, 0.3, 0.08, 0x7aaa9a);
    spike.position.set(Math.cos(a) * 0.5, 0.6, Math.sin(a) * 0.5);
    g.add(spike);
  }
  // Eye
  const eye = _box('eg_eye', 0.3, 0.3, 0.05, 0x44aaff);
  eye.position.set(0, 0.7, 0.51); g.add(eye);
  const pupil = _box('eg_pupil', 0.12, 0.12, 0.06, 0x111111);
  pupil.position.set(0, 0.7, 0.53); g.add(pupil);
  // Tail
  const tail = _box('eg_tail', 0.5, 0.4, 0.1, 0x5a8a7a); tail.position.set(0, 0.5, -0.55); g.add(tail);
};

class Mob {
  constructor(type, category, position, world) {
    this.type = type;
    this.category = category;
    this.world = world;
    this.hp = type.hp;
    this.maxHp = type.hp;
    this.alive = true;
    this.deathTimer = 0;

    // Physics
    this.position = position.clone();
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.onGround = false;

    // AI
    this.aiTimer = 0;
    this.wanderDir = new THREE.Vector3(
      Math.random() * 2 - 1, 0, Math.random() * 2 - 1
    ).normalize();
    this.wanderTime = 2 + Math.random() * 3;
    this.idleTime = 0;
    this.attackCooldown = 0;
    this.hurtTimer = 0;
    this._flashing = false;

    // Skeleton ranged attack
    this.shootCooldown = 0;
    // Creeper explosion
    this.fuseTimer = 0;
    this.fusing = false;
    // Boss special
    this.isBoss = !!type.boss;
    this.specialTimer = 0;

    // Visual - build a simple box mob
    this.mesh = this._buildMesh();
    this.mesh.position.copy(this.position);

    // Name label
    this.label = null;

    // Flee direction for animals hit by player
    this.fleeing = false;
    this.fleeTimer = 0;

    // NPC flag
    this.isNPC = false;
  }

  _buildMesh() {
    const { w, h, name } = this.type;
    const group = new THREE.Group();

    // Dispatch to specific model builder
    const builder = MOB_BUILDERS[name];
    if (builder) {
      builder(group, this.type, this.category);
    } else {
      _buildGenericMob(group, this.type, this.category);
    }

    // HP bar
    const barW = w;
    const barGeo = _getGeo(`hpbg_${name}`, () => new THREE.PlaneGeometry(barW, 0.08));
    const barBg = new THREE.Mesh(barGeo, _getMat('hpbg', () => new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide })));
    barBg.position.y = h + 0.3;
    group.add(barBg);
    this._hpBarBg = barBg;

    const hpGeo = _getGeo(`hp_${name}`, () => new THREE.PlaneGeometry(barW, 0.08));
    const hpHex = this.category === MOB_CATEGORY.MONSTER ? 0xff3333 : 0x33ff33;
    const hpBar = new THREE.Mesh(hpGeo, _getMat(`hp_${this.category}`, () => new THREE.MeshBasicMaterial({ color: hpHex, side: THREE.DoubleSide })));
    hpBar.position.y = h + 0.3;
    group.add(hpBar);
    this._hpBar = hpBar;
    this._hpBarWidth = barW;

    return group;
  }

  takeDamage(amount, knockbackDir) {
    this.hp = Math.max(0, this.hp - amount);
    this.hurtTimer = 0.2;

    // Knockback (reuse temp vector)
    if (knockbackDir) {
      _tmpVec.copy(knockbackDir).normalize().multiplyScalar(KNOCKBACK_FORCE);
      this.velocity.x += _tmpVec.x;
      this.velocity.y += 4;
      this.velocity.z += _tmpVec.z;
    }

    // Flash red — only set if not already flashing
    if (!this._flashing) {
      this._flashing = true;
      this.mesh.traverse((c) => {
        if (c.isMesh && c.material && c !== this._hpBar && c !== this._hpBarBg) {
          if (!c.material._origColor) c.material._origColor = c.material.color.getHex();
          c.material.color.setHex(0xff0000);
        }
      });
    }

    if (this.hp <= 0) {
      this.alive = false;
      this.deathTimer = 0.5;
      // Generate drops
      this._drops = this._generateDrops();
    }

    // Animals flee when hit
    if (this.category === MOB_CATEGORY.ANIMAL && this.alive) {
      this.fleeing = true;
      this.fleeTimer = 4;
      if (knockbackDir) {
        this.wanderDir.copy(knockbackDir).normalize();
      }
    }
  }

  _generateDrops() {
    const drops = [];
    const mobDrops = MobDrops[this.type.name];
    if (!mobDrops) return drops;
    for (const drop of mobDrops) {
      if (Math.random() <= drop.chance) {
        const count = drop.min + Math.floor(Math.random() * (drop.max - drop.min + 1));
        if (count > 0) {
          drops.push({ id: drop.item, count });
        }
      }
    }
    return drops;
  }

  update(dt, playerPos, isNight) {
    if (!this.alive) {
      this.deathTimer -= dt;
      // Sink into ground
      this.mesh.position.y -= dt * 2;
      this.mesh.rotation.z += dt * 3;
      return this.deathTimer > 0;
    }

    // Hurt flash reset
    if (this.hurtTimer > 0) {
      this.hurtTimer -= dt;
      if (this.hurtTimer <= 0 && this._flashing) {
        this._flashing = false;
        this.mesh.traverse((c) => {
          if (c.isMesh && c.material && c.material._origColor !== undefined) {
            c.material.color.setHex(c.material._origColor);
          }
        });
      }
    }

    this.attackCooldown = Math.max(0, this.attackCooldown - dt);

    // AI behavior (use temp vectors — no allocations)
    _tmpVec.subVectors(playerPos, this.position);
    _tmpVec.y = 0;
    const distToPlayer = _tmpVec.length();

    if (this.category === MOB_CATEGORY.MONSTER) {
      this._monsterAI(dt, _tmpVec, distToPlayer, playerPos);
    } else if (this.isNPC) {
      this._npcAI(dt);
    } else {
      this._animalAI(dt, _tmpVec, distToPlayer);
    }

    // Gravity
    this.velocity.y += -24 * dt;

    // Move with simple collision
    this._moveWithCollision(dt);

    // Update mesh
    this.mesh.position.copy(this.position);

    // Face movement direction
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.z) > 0.1) {
      this.mesh.rotation.y = Math.atan2(this.velocity.x, this.velocity.z);
    }

    // Update HP bar
    const hpFrac = this.hp / this.maxHp;
    this._hpBar.scale.x = Math.max(0.01, hpFrac);
    this._hpBar.position.x = -this._hpBarWidth * (1 - hpFrac) / 2;
    this._hpBarBg.visible = this.hp < this.maxHp;
    this._hpBar.visible = this.hp < this.maxHp;

    // Make HP bar face camera (billboard) - handled in MobManager

    return true; // still active
  }

  _monsterAI(dt, toPlayer, distToPlayer, playerPos) {
    this.shootCooldown = Math.max(0, this.shootCooldown - dt);

    // Skeleton: ranged attack — stop and shoot arrows from distance
    if (this.type.name === 'Skeleton' && distToPlayer < 20 && distToPlayer > 5 && this.shootCooldown <= 0) {
      this.shootCooldown = 2.5;
      this.velocity.x *= 0.3;
      this.velocity.z *= 0.3;
      // Signal arrow shot — handled by MobManager
      this._pendingProjectile = { target: playerPos.clone(), damage: this.type.damage };
      return;
    }

    // Creeper: approach + fuse
    if (this.type.name === 'Creeper') {
      if (distToPlayer < 3) {
        this.fusing = true;
        this.fuseTimer += dt;
        this.velocity.x *= 0.2;
        this.velocity.z *= 0.2;
        // Flash white when fusing
        if (Math.floor(this.fuseTimer * 4) % 2 === 0 && !this._flashing) {
          this.mesh.traverse((c) => {
            if (c.isMesh && c.material && c !== this._hpBar && c !== this._hpBarBg) {
              if (!c.material._origColor) c.material._origColor = c.material.color.getHex();
              c.material.color.setHex(0xffffff);
            }
          });
        }
        if (this.fuseTimer >= 1.5) {
          // Explode!
          this._pendingExplosion = { radius: 3, damage: this.type.damage };
          this.alive = false;
          this.deathTimer = 0.1;
        }
        return;
      } else {
        if (this.fusing) {
          this.fuseTimer = Math.max(0, this.fuseTimer - dt * 2);
          if (this.fuseTimer <= 0) this.fusing = false;
        }
      }
    }

    // Chase player
    if (distToPlayer < 40 && distToPlayer > 1.2) {
      _tmpVec2.copy(toPlayer).normalize();
      const speedMult = this.isBoss ? 0.8 : 1.0;
      this.velocity.x = _tmpVec2.x * this.type.speed * speedMult;
      this.velocity.z = _tmpVec2.z * this.type.speed * speedMult;

      // Jump if blocked
      if (this.onGround && this._isBlockedAhead(_tmpVec2)) {
        this.velocity.y = 7;
      }
    } else if (distToPlayer <= 1.2) {
      this.velocity.x *= 0.5;
      this.velocity.z *= 0.5;
    } else {
      this._wander(dt);
    }
  }

  _animalAI(dt, toPlayer, distToPlayer) {
    // Flee if recently hit
    if (this.fleeing) {
      this.fleeTimer -= dt;
      if (this.fleeTimer <= 0) {
        this.fleeing = false;
      } else {
        this.velocity.x = this.wanderDir.x * this.type.speed * 2;
        this.velocity.z = this.wanderDir.z * this.type.speed * 2;
        if (this.onGround && this._isBlockedAhead(this.wanderDir)) {
          this.velocity.y = 7;
        }
        return;
      }
    }

    // Flee if player very close
    if (distToPlayer < 5) {
      _tmpVec2.copy(toPlayer).negate().normalize();
      this.velocity.x = _tmpVec2.x * this.type.speed * 1.5;
      this.velocity.z = _tmpVec2.z * this.type.speed * 1.5;
      if (this.onGround && this._isBlockedAhead(_tmpVec2)) {
        this.velocity.y = 7;
      }
      return;
    }

    this._wander(dt);
  }

  _npcAI(dt) {
    // NPCs just wander slowly within a small area
    this._wander(dt);
  }

  _wander(dt) {
    this.aiTimer += dt;
    if (this.aiTimer > this.wanderTime) {
      this.aiTimer = 0;
      this.wanderTime = 2 + Math.random() * 4;
      if (Math.random() < 0.4) {
        // Idle
        this.wanderDir.set(0, 0, 0);
      } else {
        this.wanderDir.set(Math.random() * 2 - 1, 0, Math.random() * 2 - 1).normalize();
      }
    }

    this.velocity.x = this.wanderDir.x * this.type.speed * 0.4;
    this.velocity.z = this.wanderDir.z * this.type.speed * 0.4;

    if (this.onGround && this.wanderDir.lengthSq() > 0 && this._isBlockedAhead(this.wanderDir)) {
      this.velocity.y = 7;
    }
  }

  _isBlockedAhead(dir) {
    const checkX = Math.floor(this.position.x + dir.x * 0.8);
    const checkY = Math.floor(this.position.y + 0.5);
    const checkZ = Math.floor(this.position.z + dir.z * 0.8);
    return this.world.isSolid(checkX, checkY, checkZ);
  }

  _moveWithCollision(dt) {
    const hw = this.type.w / 2;
    const h = this.type.h;
    // Reuse _tmpVec3 as newPos to avoid per-frame allocation
    const newPos = _tmpVec3.copy(this.position);

    // X
    newPos.x += this.velocity.x * dt;
    if (this._collides(newPos.x, this.position.y, this.position.z, hw, h)) {
      newPos.x = this.position.x;
      this.velocity.x = 0;
    }

    // Z
    newPos.z += this.velocity.z * dt;
    if (this._collides(newPos.x, this.position.y, newPos.z, hw, h)) {
      newPos.z = this.position.z;
      this.velocity.z = 0;
    }

    // Y
    newPos.y += this.velocity.y * dt;
    this.onGround = false;
    if (this._collides(newPos.x, newPos.y, newPos.z, hw, h)) {
      if (this.velocity.y < 0) this.onGround = true;
      newPos.y = this.position.y;
      this.velocity.y = 0;
    }

    this.position.copy(newPos);
  }

  _collides(px, py, pz, hw, h) {
    for (let dx = -1; dx <= 1; dx += 2) {
      for (let dz = -1; dz <= 1; dz += 2) {
        const cx = px + dx * hw;
        const cz = pz + dz * hw;
        for (let dy = 0; dy < h; dy += 0.5) {
          if (this.world.isSolid(cx, py + dy, cz)) return true;
        }
        if (this.world.isSolid(cx, py + h, cz)) return true;
      }
    }
    return false;
  }

  dispose(scene) {
    scene.remove(this.mesh);
    // Geometries & materials are shared — don't dispose them per mob
  }
}

// ── Mob Manager ───────────────────────────────────────────

export class MobManager {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.mobs = [];
    this.spawnTimer = 0;
    this.playerAttackCooldown = 0;
    this.burnTimer = 0;
    this.projectiles = []; // arrow projectiles
    this.pendingDrops = []; // items to give player
    this.pendingExplosionDamage = 0;
    this.bossSpawnTimer = 0;
    this._npcSpawnedChunks = new Set(); // track which chunks have had NPCs spawned
  }

  update(dt, playerPos, isNight, camera) {
    this.spawnTimer += dt;
    this.playerAttackCooldown = Math.max(0, this.playerAttackCooldown - dt);
    this.burnTimer += dt;
    this.bossSpawnTimer += dt;
    const doBurn = this.burnTimer >= 0.5;
    if (doBurn) this.burnTimer = 0;

    // Spawn mobs periodically
    if (this.spawnTimer >= SPAWN_INTERVAL) {
      this.spawnTimer = 0;
      this._trySpawn(playerPos, isNight);
    }

    // Rare boss spawn (every 5 minutes of nighttime)
    if (isNight && this.bossSpawnTimer >= 300) {
      this.bossSpawnTimer = 0;
      this._trySpawnBoss(playerPos);
    }

    this.pendingExplosionDamage = 0;

    // Update all mobs
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const mob = this.mobs[i];

      // Despawn if too far (but not bosses)
      const dist = mob.position.distanceTo(playerPos);
      if (dist > DESPAWN_RADIUS && !mob.isBoss && !mob.isNPC) {
        mob.dispose(this.scene);
        this.mobs.splice(i, 1);
        continue;
      }

      // Despawn day monsters (slowly remove them) — bosses are immune
      if (!isNight && mob.category === MOB_CATEGORY.MONSTER && mob.alive && !mob.isBoss) {
        if (doBurn) {
          mob.takeDamage(1, null);
        }
      }

      // Despawn night animals
      if (isNight && mob.category === MOB_CATEGORY.ANIMAL && mob.alive && dist > 40) {
        mob.dispose(this.scene);
        this.mobs.splice(i, 1);
        continue;
      }

      const active = mob.update(dt, playerPos, isNight);

      // Handle projectile from skeleton
      if (mob._pendingProjectile) {
        this._createProjectile(mob.position, mob._pendingProjectile);
        mob._pendingProjectile = null;
      }

      // Handle creeper explosion
      if (mob._pendingExplosion) {
        const expl = mob._pendingExplosion;
        const distToPlayer = mob.position.distanceTo(playerPos);
        if (distToPlayer < expl.radius) {
          this.pendingExplosionDamage += expl.damage;
        }
        // Destroy blocks in radius
        this._explodeBlocks(mob.position, expl.radius);
        mob._pendingExplosion = null;
      }

      // Collect drops from dead mobs
      if (!mob.alive && mob._drops && mob._drops.length > 0) {
        for (const drop of mob._drops) {
          this.pendingDrops.push(drop);
        }
        mob._drops = null;
      }

      if (!active) {
        mob.dispose(this.scene);
        this.mobs.splice(i, 1);
        continue;
      }

      // Monster attacks player
      if (mob.category === MOB_CATEGORY.MONSTER && mob.alive && mob.attackCooldown <= 0) {
        _tmpVec.subVectors(playerPos, mob.position);
        if (_tmpVec.length() < 1.5) {
          mob.attackCooldown = ATTACK_COOLDOWN;
          mob._pendingAttack = mob.type.damage;
        }
      }

      // Billboard HP bars to face camera
      if (camera && (mob._hpBar.visible || mob._hpBarBg.visible)) {
        mob._hpBar.lookAt(camera.position);
        mob._hpBarBg.lookAt(camera.position);
      }
    }
  }

  // Check and consume pending attacks from monsters
  getPlayerDamage() {
    let totalDamage = 0;
    for (const mob of this.mobs) {
      if (mob._pendingAttack) {
        totalDamage += mob._pendingAttack;
        mob._pendingAttack = 0;
      }
    }
    return totalDamage;
  }

  // Player attacks (called from main on left click)
  playerAttack(cameraPos, cameraDir, damage = PLAYER_ATTACK_DAMAGE) {
    if (this.playerAttackCooldown > 0) return false;
    this.playerAttackCooldown = PLAYER_ATTACK_COOLDOWN;

    let closestMob = null;
    let closestDist = PLAYER_ATTACK_RANGE;

    // Find closest mob in front of player
    for (const mob of this.mobs) {
      if (!mob.alive) continue;

      _tmpVec.subVectors(mob.position, cameraPos);
      // Add mob center offset
      _tmpVec.y += mob.type.h * 0.5;
      const dist = _tmpVec.length();
      if (dist > PLAYER_ATTACK_RANGE) continue;

      // Check angle - must be roughly in front (~75 degree cone, forgiving for 3rd person)
      const dot = _tmpVec.normalize().dot(cameraDir);
      if (dot < 0.25) continue;

      if (dist < closestDist) {
        closestDist = dist;
        closestMob = mob;
      }
    }

    if (closestMob) {
      _tmpVec.subVectors(closestMob.position, cameraPos);
      _tmpVec.y = 0;
      closestMob.takeDamage(damage, _tmpVec);
      return true;
    }
    return false;
  }

  _trySpawn(playerPos, isNight) {
    if (this.mobs.length >= MAX_MOBS) return;

    // Choose category based on time
    const category = isNight ? MOB_CATEGORY.MONSTER : MOB_CATEGORY.ANIMAL;
    const typeList = category === MOB_CATEGORY.MONSTER ? MONSTER_TYPES : ANIMAL_TYPES;
    const type = typeList[Math.floor(Math.random() * typeList.length)];

    // Pick spawn position in a ring around player
    const angle = Math.random() * Math.PI * 2;
    const dist = SPAWN_RADIUS_MIN + Math.random() * (SPAWN_RADIUS_MAX - SPAWN_RADIUS_MIN);
    const sx = playerPos.x + Math.cos(angle) * dist;
    const sz = playerPos.z + Math.sin(angle) * dist;

    // Find ground level
    const sy = this._findGround(sx, sz);
    if (sy < 0) return; // no valid ground

    const mob = new Mob(type, category, new THREE.Vector3(sx, sy, sz), this.world);
    this.mobs.push(mob);
    this.scene.add(mob.mesh);
  }

  _findGround(wx, wz) {
    const ix = Math.floor(wx);
    const iz = Math.floor(wz);
    // Search from top down
    for (let y = 100; y > 0; y--) {
      if (this.world.isSolid(ix, y, iz) && !this.world.isSolid(ix, y + 1, iz) && !this.world.isSolid(ix, y + 2, iz)) {
        return y + 1;
      }
    }
    return -1;
  }

  getMobCount() {
    let monsters = 0, animals = 0;
    for (const m of this.mobs) {
      if (!m.alive) continue;
      if (m.category === MOB_CATEGORY.MONSTER) monsters++;
      else animals++;
    }
    return { total: this.mobs.length, monsters, animals };
  }

  // Collect pending drops (called by main to give to player inventory)
  collectDrops() {
    const drops = this.pendingDrops.slice();
    this.pendingDrops = [];
    return drops;
  }

  // Get explosion damage for this frame
  getExplosionDamage() {
    return this.pendingExplosionDamage;
  }

  // Update projectiles (arrows from skeletons)
  updateProjectiles(dt, playerPos) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      proj.position.addScaledVector(proj.velocity, dt);
      proj.velocity.y -= 9.8 * dt;
      proj.life -= dt;
      proj.mesh.position.copy(proj.position);

      // Hit player
      const distToPlayer = proj.position.distanceTo(playerPos);
      if (distToPlayer < 1.0) {
        this.projectiles[i]._hitPlayer = proj.damage;
        this.scene.remove(proj.mesh);
        this.projectiles.splice(i, 1);
        continue;
      }

      // Hit ground
      const block = this.world.getBlock(
        Math.floor(proj.position.x),
        Math.floor(proj.position.y),
        Math.floor(proj.position.z)
      );
      if (block !== 0 && block !== undefined) {
        this.scene.remove(proj.mesh);
        this.projectiles.splice(i, 1);
        continue;
      }

      if (proj.life <= 0) {
        this.scene.remove(proj.mesh);
        this.projectiles.splice(i, 1);
      }
    }
    // Return total arrow damage hitting player
    let arrowDmg = 0;
    // Check was already spliced, so iterate separately
    return arrowDmg;
  }

  // Get arrow damage from projectiles that hit player  
  getArrowDamage() {
    let total = 0;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      if (this.projectiles[i]._hitPlayer) {
        total += this.projectiles[i]._hitPlayer;
        this.scene.remove(this.projectiles[i].mesh);
        this.projectiles.splice(i, 1);
      }
    }
    return total;
  }

  _createProjectile(fromPos, data) {
    const dir = _tmpVec.copy(data.target).sub(fromPos).normalize();
    const speed = 15;
    const arrowGeo = _getGeo('arrow_proj', () => new THREE.BoxGeometry(0.1, 0.1, 0.5));
    const arrowMat = _getMat('arrow_proj', () => new THREE.MeshLambertMaterial({ color: 0x8b6914 }));
    const mesh = new THREE.Mesh(arrowGeo, arrowMat);
    mesh.position.copy(fromPos);
    mesh.position.y += 1.0;
    this.scene.add(mesh);

    this.projectiles.push({
      position: mesh.position.clone(),
      velocity: dir.clone().multiplyScalar(speed).add(new THREE.Vector3(0, 2, 0)),
      mesh,
      damage: data.damage,
      life: 5,
    });
  }

  _explodeBlocks(center, radius) {
    const cx = Math.floor(center.x);
    const cy = Math.floor(center.y);
    const cz = Math.floor(center.z);
    const r = Math.ceil(radius);
    for (let dx = -r; dx <= r; dx++) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dz = -r; dz <= r; dz++) {
          if (dx * dx + dy * dy + dz * dz > radius * radius) continue;
          const block = this.world.getBlock(cx + dx, cy + dy, cz + dz);
          if (block !== BlockType.AIR && block !== BlockType.BEDROCK) {
            this.world.setBlock(cx + dx, cy + dy, cz + dz, BlockType.AIR);
          }
        }
      }
    }
  }

  _trySpawnBoss(playerPos) {
    // Only spawn if no boss already exists
    const hasBoss = this.mobs.some(m => m.isBoss && m.alive);
    if (hasBoss) return;

    const type = BOSS_TYPES[Math.floor(Math.random() * BOSS_TYPES.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = 30 + Math.random() * 20;
    const sx = playerPos.x + Math.cos(angle) * dist;
    const sz = playerPos.z + Math.sin(angle) * dist;
    const sy = this._findGround(sx, sz);
    if (sy < 0) return;

    const mob = new Mob(type, MOB_CATEGORY.MONSTER, new THREE.Vector3(sx, sy, sz), this.world);
    this.mobs.push(mob);
    this.scene.add(mob.mesh);
  }

  dispose() {
    for (const mob of this.mobs) {
      mob.dispose(this.scene);
    }
    this.mobs = [];
  }

  // Spawn a Villager NPC at a world position (called by game for village chunks)
  spawnNPC(wx, wz) {
    const chunkKey = `${Math.floor(wx / 16)},${Math.floor(wz / 16)}`;
    if (this._npcSpawnedChunks.has(chunkKey)) return;
    this._npcSpawnedChunks.add(chunkKey);

    const sy = this._findGround(wx, wz);
    if (sy < 0) return;

    const mob = new Mob(NPC_TYPE, MOB_CATEGORY.ANIMAL, new THREE.Vector3(wx, sy, wz), this.world);
    mob.isNPC = true;
    // Give the NPC a simple robe color
    mob.mesh.traverse(child => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.color.setHex(0x8a6a4a);
      }
    });
    this.mobs.push(mob);
    this.scene.add(mob.mesh);
  }
}
