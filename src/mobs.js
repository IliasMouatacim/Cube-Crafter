// ============================================================
// Mob System: Monsters (night), Animals (day), AI, Combat
// ============================================================

import * as THREE from 'three';
import { BlockType, Biome, CHUNK_SIZE, CHUNK_HEIGHT } from './blocks.js';
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
const SPAWN_RADIUS_MIN = 15;
const SPAWN_RADIUS_MAX = 38;
const DESPAWN_RADIUS = 70;
const SPAWN_INTERVAL = 2.0; // seconds between spawn attempts
const ATTACK_COOLDOWN = 1.0; // seconds between mob attacks
const PLAYER_ATTACK_COOLDOWN = 0.4;
const PLAYER_ATTACK_DAMAGE = 4;
const PLAYER_ATTACK_RANGE = 4.0;
const HABITAT = {
  [Biome.PLAINS]: ['Cow', 'Pig', 'Sheep', 'Chicken', 'Horse', 'Rabbit'],
  [Biome.FOREST]: ['Deer', 'Fox', 'Pig', 'Chicken'],
  [Biome.BIRCH_FOREST]: ['Deer', 'Fox', 'Sheep', 'Chicken'],
  [Biome.TAIGA]: ['Deer', 'Fox', 'Rabbit'],
  [Biome.TUNDRA]: ['Fox', 'Rabbit', 'Sheep'],
  [Biome.JUNGLE]: ['Pig', 'Chicken'],
  [Biome.SAVANNA]: ['Horse', 'Cow', 'Chicken'],
  [Biome.SWAMP]: ['Pig', 'Chicken', 'Rabbit'],
  [Biome.MOUNTAINS]: ['Sheep', 'Deer', 'Rabbit'],
  [Biome.DESERT]: ['Rabbit'],
  [Biome.MESA]: ['Rabbit', 'Horse'],
  [Biome.MUSHROOM_ISLAND]: ['Cow', 'Pig'],
};

const NIGHT_HABITAT = {
  [Biome.DESERT]: ['Skeleton', 'Spider', 'Blaze', 'Wither Skeleton'],
  [Biome.MOUNTAINS]: ['Ogre', 'Troll', 'Phantom', 'Dark Knight'],
  [Biome.SWAMP]: ['Slime', 'Witch', 'Wraith', 'Banshee'],
  [Biome.FOREST]: ['Werewolf', 'Spider', 'Goblin', 'Vampire'],
  [Biome.TUNDRA]: ['Shadow', 'Wraith', 'Dark Knight', 'Skeleton'],
};
const COMMON_MONSTERS = ['Zombie', 'Skeleton', 'Spider', 'Creeper', 'Goblin'];
const NATURAL_GROUND = new Set([
  BlockType.GRASS, BlockType.DIRT, BlockType.STONE, BlockType.SAND, BlockType.SNOW,
  BlockType.SANDSTONE, BlockType.GRAVEL, BlockType.CLAY, BlockType.MYCELIUM,
  BlockType.PODZOL, BlockType.RED_SAND, BlockType.TERRACOTTA,
]);
const ATTACK_WARNINGS = new Set(['Aiming', 'Preparing to strike', 'About to explode']);
const SKITTISH = new Set(['Deer', 'Rabbit', 'Fox']);
const FLYERS = new Set(['Phantom', 'Blaze', 'Wraith', 'Banshee', 'Dragon']);
const SUN_SENSITIVE = new Set(['Zombie', 'Skeleton', 'Wither Skeleton', 'Vampire']);
const KNOCKBACK_FORCE = 8;

// ── Reusable temp vectors (avoid per-frame allocations) ──
const UP = new THREE.Vector3(0, 1, 0);
const attackOffset = new THREE.Vector3();

function coveredAt(world, x, y, z) {
  for (let height = Math.floor(y); height < CHUNK_HEIGHT; height++) {
    if (world.isSolid(x, height, z)) return true;
  }
  return false;
}
const _tmpVec = new THREE.Vector3();
const _tmpVec2 = new THREE.Vector3();
const _tmpVec3 = new THREE.Vector3();
const sightOrigin = new THREE.Vector3();
const sightDirection = new THREE.Vector3();

function clearPath(world, origin, target, targetHeight = 0) {
  sightDirection.subVectors(target, origin);
  sightDirection.y += targetHeight;
  const distance = sightDirection.length();
  return distance < 0.01 || !world.raycast(origin, sightDirection.multiplyScalar(1 / distance), distance).hit;
}

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
  const m = _getMat(key, () => new THREE.MeshStandardMaterial({ color, roughness: 0.82 }));
  return new THREE.Mesh(g, m);
}

// Helper: add pair of eyes
function _addEyes(group, x, y, z, size, color) {
  const g = _getGeo(`meye${size}`, () => new THREE.BoxGeometry(size, size, size * 0.5));
  const m = _getMat(`meye${color}`, () => new THREE.MeshBasicMaterial({ color }));
  group.add(new THREE.Mesh(g, m).translateX(-x).translateY(y).translateZ(z));
  group.add(new THREE.Mesh(g, m).translateX(x).translateY(y).translateZ(z));
}

function addLimb(group, x, y, z, width, height, color, phase) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y + height / 2, z);
  const limb = _box(`limb_${width}_${height}_${color}`, width, height, width, color);
  limb.position.y = -height / 2;
  pivot.add(limb);
  group.add(pivot);
  (group.userData.limbs ??= []).push({ pivot, phase });
}

function _addLegs4(group, w, legH, legW, frontZ, backZ, y, color) {
  const x = w * 0.3;
  addLimb(group, -x, y, frontZ, legW, legH, color, 1);
  addLimb(group, x, y, frontZ, legW, legH, color, -1);
  addLimb(group, -x, y, backZ, legW, legH, color, -1);
  addLimb(group, x, y, backZ, legW, legH, color, 1);
}

function _addLegs2(group, spacing, legH, legW, y, color) {
  addLimb(group, -spacing, y, 0, legW, legH, color, 1);
  addLimb(group, spacing, y, 0, legW, legH, color, -1);
}

function _addArms(group, spacing, armH, armW, y, color) {
  addLimb(group, -spacing, y, 0, armW, armH, color, -1);
  addLimb(group, spacing, y, 0, armW, armH, color, 1);
  for (const arm of group.userData.limbs.slice(-2)) arm.isArm = true;
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
    for (const side of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.26, 0.29, z);
      const leg = new THREE.Mesh(lg, lm);
      leg.position.set(side * 0.22, -0.08, 0);
      leg.rotation.z = -side * 0.45;
      pivot.add(leg);
      g.add(pivot);
      (g.userData.spiderLegs ??= []).push({ pivot, phase: side * (i % 2 === 0 ? 1 : -1) });
    }
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

function addWings(group, geometry, material, x, y, span) {
  group.userData.wings = [-1, 1].map(sign => {
    const pivot = new THREE.Group();
    pivot.position.set(sign * x, y, 0);
    const wing = new THREE.Mesh(geometry, material);
    wing.position.x = sign * span / 2;
    pivot.add(wing);
    group.add(pivot);
    return { pivot, sign };
  });
}

MOB_BUILDERS['Phantom'] = (g) => {
  const body = _box('pha_body', 0.3, 0.15, 0.6, 0x4466aa); body.position.set(0, 0.2, 0); g.add(body);
  // Wings
  const wg = _getGeo('pha_wing', () => new THREE.BoxGeometry(0.6, 0.04, 0.35));
  const wm = _getMat('pha_wing', () => new THREE.MeshLambertMaterial({ color: 0x3355aa, transparent: true, opacity: 0.8 }));
  addWings(g, wg, wm, 0.11, 0.22, 0.60);
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
  addWings(g, wg, wm, 0.53, 1.8, 1.5);
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

const MODEL_DETAILS = {
  Cow: [
    [0.34, 0.18, 0.58, -0.23, 0.82, -0.12, 0xfcdec0],
    [0.10, 0.055, 0.14, -0.22, 1.14, 0.36, 0xc58c70],
    [0.10, 0.055, 0.14, 0.22, 1.14, 0.36, 0xc58c70],
  ],
  Pig: [
    [0.095, 0.13, 0.075, -0.12, 0.87, 0.28, 0xce788b],
    [0.095, 0.13, 0.075, 0.12, 0.87, 0.28, 0xce788b],
  ],
  Sheep: [
    [0.23, 0.16, 0.35, -0.24, 0.92, -0.1, 0xfff1d2],
    [0.29, 0.18, 0.33, 0.15, 0.93, 0.09, 0xfff5dd],
  ],
  Fox: [
    [0.20, 0.16, 0.19, 0, 0.41, -0.49, 0xffead1],
    [0.20, 0.084, 0.1, 0, 0.51, 0.38, 0xffead1],
  ],
  Deer: [
    [0.025, 0.08, 0.07, -0.306, 0.96, -0.18, 0xffe2ad],
    [0.025, 0.08, 0.07, 0.306, 0.96, -0.18, 0xffe2ad],
    [0.14, 0.19, 0.12, 0, 0.89, -0.39, 0xf9dfaf],
  ],
  Zombie: [
    [0.31, 0.13, 0.035, 0.07, 1.08, 0.155, 0x32666a],
    [0.14, 0.21, 0.035, -0.13, 1.24, 0.16, 0x658044],
  ],
  Creeper: [
    [0.18, 0.35, 0.06, 0.10, 0.68, 0.20, 0x689543],
    [0.19, 0.19, 0.06, -0.10, 0.43, 0.21, 0x23573e],
  ],
  Skeleton: [
    [0.37, 0.065, 0.07, 0, 1.18, 0.155, 0xffe4bc],
    [0.34, 0.065, 0.07, 0, 1.06, 0.15, 0xe0c698],
    [0.30, 0.065, 0.07, 0, 0.94, 0.15, 0xe0c698],
  ],
  'Dark Knight': [
    [0.21, 0.15, 0.30, -0.29, 1.38, 0, 0x65728c],
    [0.21, 0.15, 0.30, 0.29, 1.38, 0, 0x65728c],
    [0.12, 0.28, 0.07, 0, 1.12, 0.19, 0xc98e50],
  ],
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
    this.simTime = 0;

    // AI
    this.aiTimer = 0;
    this.wanderDir = new THREE.Vector3(
      Math.random() * 2 - 1, 0, Math.random() * 2 - 1
    ).normalize();
    this.wanderTime = 2 + Math.random() * 3;
    this.gait = Math.random() * Math.PI * 2;
    this.lastSeen = position.clone();
    this.alertTime = 0;
    this.knockbackTime = 0;
    this.windup = 0;
    this.intent = 'Roaming';
    this.pack = null;
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
    this.shadeTimer = 0;
    this.shadeDirection = new THREE.Vector3();

    // Visual - build a simple box mob
    this.mesh = this._buildMesh();
    this.mesh.position.copy(this.position);

    // Clone materials to prevent shared mutation
    this.mesh.traverse(c => {
      if (c.isMesh && c.material) {
        c.material = c.material.clone();
        if (c !== this._hpBar && c !== this._hpBarBg && !c.material.transparent) {
          c.castShadow = true;
          c.receiveShadow = true;
        }
      }
    });

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

    (MODEL_DETAILS[name] ?? []).forEach(([sx, sy, sz, x, y, z, color], index) => {
      const detail = _box(`detail_${name}_${index}`, sx, sy, sz, color);
      detail.position.set(x, y, z);
      group.add(detail);
    });

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
    barBg.visible = hpBar.visible = false;

    return group;
  }

  takeDamage(amount, knockbackDir) {
    if (!this.alive) return;
    this.hp = Math.max(0, this.hp - amount);
    this.hurtTimer = 0.2;

    // Knockback (reuse temp vector)
    if (knockbackDir) {
      _tmpVec.copy(knockbackDir).normalize().multiplyScalar(KNOCKBACK_FORCE);
      this.knockbackTime = 0.18;
      this.windup = 0;
      this.velocity.x += _tmpVec.x;
      this.velocity.y += 4;
      this.velocity.z += _tmpVec.z;
    }

    // Flash red — only set if not already flashing
    if (!this.reducedMotion && !this._flashing) {
      this._flashing = true;
      this.mesh.traverse((c) => {
        if (c.isMesh && c.material && c !== this._hpBar && c !== this._hpBarBg) {
          if (c.material._origColor === undefined) c.material._origColor = c.material.color.getHex();
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
        if (this.pack) {
          this.pack.alarm.copy(this.wanderDir);
          this.pack.until = this.simTime + 2.5;
        }
      }
    }
  }

  _generateDrops() {
    const drops = [];
    const mobDrops = MobDrops[this.type.name];
    if (!mobDrops) return drops;
    for (const drop of mobDrops) {
      if (Math.random() <= drop.chance) {
        let itemId = drop.item;
        if (this.onFire) {
          if (itemId === -22) itemId = -23; // RAW_BEEF -> COOKED_BEEF
          if (itemId === -24) itemId = -25; // RAW_PORK -> COOKED_PORK
        }
        const count = drop.min + Math.floor(Math.random() * (drop.max - drop.min + 1));
        if (count > 0) {
          drops.push({ id: itemId, isBlock: drop.isBlock, count });
        }
      }
    }
    return drops;
  }

  update(dt, playerPos, isNight, reducedMotion, simTime, playerMoving) {
    this.reducedMotion = reducedMotion;
    this.simTime = simTime;
    if (!this.alive) {
      this.deathTimer -= dt;
      // Sink into ground
      this.mesh.position.y -= dt * 2;
      if (!reducedMotion) this.mesh.rotation.z += dt * 3;
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
    this.nearestPlayerY = playerPos.y;
    _tmpVec.subVectors(playerPos, this.position);
    _tmpVec.y = 0;
    const distToPlayer = _tmpVec.length();

    this.knockbackTime = Math.max(0, this.knockbackTime - dt);
    if (this.knockbackTime > 0) {
      this.intent = 'Staggered';
    } else if (this.category === MOB_CATEGORY.MONSTER) {
      this._monsterAI(dt, _tmpVec, distToPlayer, playerPos, isNight);
    } else if (this.isNPC) {
      this._npcAI(dt);
    } else {
      this._animalAI(dt, _tmpVec, distToPlayer, playerMoving);
    }

    // Gravity
    const flying = FLYERS.has(this.type.name);
    const swimming = this.world.getBlock(Math.floor(this.position.x), Math.floor(this.position.y + 0.2), Math.floor(this.position.z)) === BlockType.WATER;
    if (swimming) {
      this.velocity.y = Math.min(3, this.velocity.y + 16 * dt);
      this.velocity.x *= 0.65;
      this.velocity.z *= 0.65;
    } else if (flying && this.knockbackTime === 0) {
      const ground = this.world.generator.getHeight(this.position.x, this.position.z, this.world.generator.getBiome(this.position.x, this.position.z));
      const engaged = this.intent === 'Chasing' || this.intent === 'Preparing to strike';
      const desired = engaged && distToPlayer < 8 ? Math.max(ground + 1.8, playerPos.y + 0.25) : ground + 4;
      this.velocity.y = THREE.MathUtils.clamp((desired - this.position.y) * 2, -4, 5);
    } else {
      this.velocity.y -= 24 * dt;
    }

    // Keep fast creatures and knockback from stepping through thin ledges.
    const steps = Math.ceil(dt / 0.034);
    for (let step = 0; step < steps; step++) this._moveWithCollision(dt / steps);

    // Update mesh
    this.mesh.position.copy(this.position);

    // Face movement direction
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.z) > 0.1) {
      const heading = Math.atan2(this.velocity.x, this.velocity.z);
      const delta = Math.atan2(Math.sin(heading - this.mesh.rotation.y), Math.cos(heading - this.mesh.rotation.y));
      this.mesh.rotation.y += delta * Math.min(1, dt * 12);
    }

    const pace = Math.hypot(this.velocity.x, this.velocity.z);
    this.gait = (this.gait + pace * dt * 7) % (Math.PI * 2);
    for (const { pivot, phase, isArm } of this.mesh.userData.limbs ?? []) {
      const stride = Math.sin(this.gait) * phase * Math.min(0.72, pace * 0.26);
      const attackPose = isArm && this.windup > 0 ? -0.85 - this.windup * 0.8 : null;
      pivot.rotation.x = attackPose ?? (reducedMotion ? 0 : stride);
    }
    for (const { pivot, sign } of this.mesh.userData.wings ?? []) {
      pivot.rotation.z = reducedMotion ? 0 : sign * Math.sin(simTime * 5 + this.gait) * 0.4;
    }
    for (const { pivot, phase } of this.mesh.userData.spiderLegs ?? []) {
      pivot.rotation.y = reducedMotion ? 0 : Math.sin(this.gait) * phase * Math.min(0.42, pace * 0.2);
    }
    if (this.type.name === 'Creeper') {
      this.mesh.scale.setScalar(reducedMotion ? 1 : 1 + this.fuseTimer * 0.13);
    } else if (this.type.name === 'Slime') {
      const squash = reducedMotion ? 0 : THREE.MathUtils.clamp(this.velocity.y * 0.025, -0.17, 0.17);
      this.mesh.scale.set(1 - squash * 0.5, 1 + squash, 1 - squash * 0.5);
    }

    // Update HP bar
    const hpFrac = this.hp / this.maxHp;
    this._hpBar.scale.x = Math.max(0.01, hpFrac);
    this._hpBar.position.copy(this._hpBarBg.position);
    this._hpBarBg.visible = this.hp < this.maxHp;
    this._hpBar.visible = this.hp < this.maxHp;

    // Make HP bar face camera (billboard) - handled in MobManager

    return true; // still active
  }

  _monsterAI(dt, toPlayer, distance, playerPos, isNight) {
    this.shootCooldown = Math.max(0, this.shootCooldown - dt);
    this.alertTime = Math.max(0, this.alertTime - dt);
    const name = this.type.name;
    const heightGap = Math.abs(playerPos.y - this.position.y);
    const nearStrikeHeight = Math.abs(playerPos.y + 0.8 - this.position.y - this.type.h * 0.65) < 1.35;
    const seesPlayer = distance < 28 && heightGap < 10 &&
      clearPath(this.world, sightOrigin.copy(this.position).addScaledVector(UP, this.type.h * 0.75), playerPos, 0.9);
    if (seesPlayer) {
      this.lastSeen.copy(playerPos);
      this.alertTime = 3.5;
    }

    if (name === 'Creeper') {
      this.fusing = seesPlayer && distance < 2.8 && heightGap < 2;
      this.fuseTimer = THREE.MathUtils.clamp(this.fuseTimer + (this.fusing ? dt : -dt * 2), 0, 1.5);
      if (this.fusing) {
        this.intent = 'About to explode';
        this._face(toPlayer);
        if (this.fuseTimer >= 1.5) {
          this._pendingExplosion = { radius: 3, damage: this.type.damage };
          this.alive = false;
          this.deathTimer = 0.1;
        }
        return;
      }
    }

    if (!isNight && this.onFire && SUN_SENSITIVE.has(name)) {
      this.intent = 'Seeking shade';
      this.windup = 0;
      this.shadeTimer -= dt;
      if (this.shadeTimer <= 0) {
        this.shadeTimer = 0.6;
        this.shadeDirection.set(0, 0, 0);
        for (let i = 0; i < 8; i++) {
          const heading = i * Math.PI / 4;
          const x = Math.cos(heading);
          const z = Math.sin(heading);
          if (this._stepAhead(x, z, true) < 0) continue;
          if (coveredAt(this.world, this.position.x + x * 4, this.position.y + this.type.h, this.position.z + z * 4)) {
            this.shadeDirection.set(x, 0, z);
            break;
          }
        }
      }
      if (this.shadeDirection.lengthSq()) this._steer(this.shadeDirection, this.type.speed, true);
      else this._wander(dt, 0.9);
      return;
    }

    const ranged = name === 'Skeleton' && distance >= 4 && distance < 19;
    const melee = name !== 'Creeper' && distance < 1.65 && nearStrikeHeight;
    if (seesPlayer && (ranged || melee)) {
      this._face(toPlayer);
      this.intent = ranged ? 'Aiming' : 'Preparing to strike';
      const cooldown = ranged ? this.shootCooldown : this.attackCooldown;
      if (cooldown <= 0) {
        this.windup += dt;
        if (this.windup >= (ranged ? 0.65 : 0.4)) {
          this.windup = 0;
          if (ranged) {
            this.shootCooldown = 2.5;
            const target = playerPos.clone();
            target.y += 0.85;
            this._pendingProjectile = { target, damage: this.type.damage };
          } else {
            this.attackCooldown = ATTACK_COOLDOWN;
            this._pendingAttack = this.type.damage;
          }
        }
      }
      return;
    }

    this.windup = 0;
    if (this.alertTime > 0) {
      this.intent = seesPlayer ? 'Chasing' : 'Searching';
      _tmpVec2.subVectors(this.lastSeen, this.position).setY(0);
      if (_tmpVec2.lengthSq() > 0.5) {
        const stalking = name === 'Werewolf' && seesPlayer && distance > 8;
        const retreating = name === 'Skeleton' && seesPlayer && distance < 4 && !melee;
        if (stalking) this.intent = 'Stalking';
        if (retreating) this.intent = 'Backing away';
        const direction = _tmpVec2.normalize().multiplyScalar(retreating ? -1 : 1);
        this._steer(direction, this.type.speed * (stalking ? 0.65 : 1), true);
      } else {
        this._wander(dt);
      }
    } else {
      this.intent = 'Roaming';
      this._wander(dt);
    }
  }

  _face(direction) {
    this.velocity.x = 0;
    this.velocity.z = 0;
    this.mesh.rotation.y = Math.atan2(direction.x, direction.z);
  }

  _animalAI(dt, toPlayer, distance, playerMoving) {
    this.fleeTimer = Math.max(0, this.fleeTimer - dt);
    this.fleeing = this.fleeTimer > 0;
    const skittish = SKITTISH.has(this.type.name);
    const near = Math.abs(this.position.y - this.nearestPlayerY) < 3;
    const seesPlayer = near && distance < 8 &&
      clearPath(this.world, sightOrigin.copy(this.position).addScaledVector(UP, this.type.h * 0.7), playerPos, 0.85);
    const heardSprint = near && skittish && playerMoving && distance < 8;
    const startled = heardSprint || (seesPlayer && distance < (skittish ? 4 : 2));
    if (startled || this.fleeing || this.pack?.until > this.simTime) {
      this.intent = 'Fleeing';
      if (startled) _tmpVec2.copy(toPlayer).negate().normalize();
      else _tmpVec2.copy(this.fleeing ? this.wanderDir : this.pack.alarm);
      this._steer(_tmpVec2, this.type.speed * 1.55, true);
      return;
    }
    if (seesPlayer && distance < 7) {
      this.intent = 'Watching';
      this._face(toPlayer);
      return;
    }
    if (this.pack) {
      _tmpVec2.subVectors(this.pack.home, this.position).setY(0);
      if (_tmpVec2.lengthSq() > 12 ** 2) {
        this.intent = 'Returning to herd';
        this._steer(_tmpVec2.normalize(), this.type.speed * 0.65, true);
        return;
      }
    }
    this.intent = this.wanderDir.lengthSq() > 0 ? 'Foraging' : 'Resting';
    this._wander(dt);
  }

  _npcAI(dt) {
    // NPCs just wander slowly within a small area
    this.intent = 'Roaming';
    this._wander(dt);
  }

  _wander(dt, pace = 0.4) {
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

    this._steer(this.wanderDir, this.type.speed * pace, true);
  }

  _steer(direction, speed, cautious) {
    let x = direction.x;
    let z = direction.z;
    if (this.onGround && (x || z)) {
      let step = this._stepAhead(x, z, cautious);
      if (step < 0) {
        const sign = Math.sin(this.gait) < 0 ? -1 : 1;
        const sideX = z * sign;
        const sideZ = -x * sign;
        step = this._stepAhead(sideX, sideZ, cautious);
        x = sideX;
        z = sideZ;
        if (step < 0) {
          step = this._stepAhead(-x, -z, cautious);
          x = -x;
          z = -z;
        }
      }
      if (step < 0) x = z = 0;
      const hopping = (x || z) && ((this.type.name === 'Rabbit' && speed > 2) || this.type.name === 'Slime');
      if (step > 0 || hopping) {
        this.velocity.y = step > 0 ? (this.type.name === 'Spider' ? 9 : 7.6) : 5.8;
      }
    }
    this.velocity.x = x * speed;
    this.velocity.z = z * speed;
  }

  _stepAhead(dx, dz, cautious) {
    const reach = this.type.w / 2 + 0.46;
    const x = Math.floor(this.position.x + dx * reach);
    const y = Math.floor(this.position.y + 0.2);
    const z = Math.floor(this.position.z + dz * reach);
    if (!this.world.getChunk(Math.floor(x / CHUNK_SIZE), Math.floor(z / CHUNK_SIZE))?.generated) return -1;
    const block = this.world.getBlock(x, y, z);
    if (block === BlockType.LAVA || (cautious && block === BlockType.WATER)) return -1;
    if (this.world.isSolid(x, y, z)) {
      for (let layer = 1; layer <= Math.ceil(this.type.h); layer++) {
        if (this.world.isSolid(x, y + layer, z)) return -1;
      }
      return 1;
    }
    if (cautious && !this.world.isSolid(x, y - 1, z) && !this.world.isSolid(x, y - 2, z)) return -1;
    return 0;
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
    this.mesh.traverse(child => {
      if (child.isMesh) child.material.dispose();
    });
  }
}

// ── Mob Manager ───────────────────────────────────────────

export class MobManager {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.mobs = [];
    this.spawnTimer = 0;
    this.spawnAroundSecondPlayer = false;
    this.simTime = 0;
    this.pendingArrowDamage = [0, 0];
    this.playerAttackCooldown = 0;
    this.burnTimer = 0;
    this.projectiles = []; // arrow projectiles
    this.pendingDrops = []; // items to give player
    this.pendingExplosionDamage = [0, 0];
    this.pendingMeleeDamage = [0, 0];
    this.bossSpawnTimer = 0;
    this._npcSpawnedChunks = new Set(); // track which chunks have had NPCs spawned
  }

  update(dt, playerPos, isNight, camera, { peaceful = false, reducedMotion = false, playerMoving = false, secondPlayer = null } = {}) {
    this.simTime += dt;
    this.spawnTimer += dt;
    this.playerAttackCooldown = Math.max(0, this.playerAttackCooldown - dt);
    this.burnTimer += dt;
    if (isNight && !peaceful) {
      this.bossSpawnTimer += dt;
    }
    const doBurn = this.burnTimer >= 0.5;
    if (doBurn) this.burnTimer = 0;

    // Spawn mobs periodically
    if (this.spawnTimer >= SPAWN_INTERVAL) {
      this.spawnTimer = 0;
      const aroundSecond = secondPlayer && this.spawnAroundSecondPlayer;
      this._trySpawn(aroundSecond ? secondPlayer : playerPos, isNight && !peaceful, aroundSecond ? playerPos : secondPlayer);
      if (secondPlayer) this.spawnAroundSecondPlayer = !this.spawnAroundSecondPlayer;
    }

    // Rare boss spawn (every 5 minutes of nighttime)
    if (isNight && !peaceful && this.bossSpawnTimer >= 300) {
      this.bossSpawnTimer = 0;
      this._trySpawnBoss(playerPos);
    }

    this.pendingExplosionDamage.fill(0);
    this.pendingMeleeDamage.fill(0);
    if (peaceful && this.projectiles.length) {
      for (const projectile of this.projectiles) this.scene.remove(projectile.mesh);
      this.projectiles.length = 0;
    }

    // Update all mobs
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const mob = this.mobs[i];

      const dist = mob.position.distanceToSquared(playerPos);
      const secondDist = secondPlayer ? mob.position.distanceToSquared(secondPlayer) : Infinity;
      const target = secondDist < dist ? 1 : 0;
      if ((!mob.isTNT && Math.min(dist, secondDist) > (mob.isBoss ? 110 : DESPAWN_RADIUS) ** 2) ||
          (peaceful && mob.category === MOB_CATEGORY.MONSTER)) {
        if (mob.isNPC && mob.alive) this._npcSpawnedChunks.delete(mob.npcChunkKey);
        mob.dispose(this.scene);
        this.mobs.splice(i, 1);
        continue;
      }
      if (mob.targetPlayer !== target) {
        mob.windup = 0;
        mob.targetPlayer = target;
      }

      // Check if burning (daylight or lava)
      let burning = false;
      const blockId = this.world.getBlock(Math.floor(mob.position.x), Math.floor(mob.position.y), Math.floor(mob.position.z));
      if (blockId === BlockType.LAVA) burning = true;
      if (!isNight && SUN_SENSITIVE.has(mob.type.name)) {
        burning ||= !coveredAt(this.world, mob.position.x, mob.position.y + mob.type.h, mob.position.z);
      }
      
      mob.onFire = burning;
      mob.reducedMotion = reducedMotion;

      if (burning && mob.alive && doBurn && !mob.isTNT) mob.takeDamage(1, null);

      const active = mob.update(dt, target ? secondPlayer : playerPos, isNight, reducedMotion, this.simTime, !target && playerMoving);
      if (mob._pendingAttack) {
        this.pendingMeleeDamage[target] += mob._pendingAttack;
        mob._pendingAttack = 0;
      }

      // Handle projectile from skeleton
      if (mob._pendingProjectile) {
        this._createProjectile(mob.position, mob._pendingProjectile);
        mob._pendingProjectile = null;
      }

      // Handle creeper explosion
      if (mob._pendingExplosion) {
        const expl = mob._pendingExplosion;
        if (mob.position.distanceToSquared(playerPos) < expl.radius ** 2) this.pendingExplosionDamage[0] += expl.damage;
        if (secondPlayer && mob.position.distanceToSquared(secondPlayer) < expl.radius ** 2) this.pendingExplosionDamage[1] += expl.damage;
        // Destroy blocks in radius
        this._explodeBlocks(mob.position, expl.radius);
        mob._pendingExplosion = null;
      }

      // Collect drops from dead mobs
      if (!mob.alive && mob._drops && mob._drops.length > 0) {
        for (const drop of mob._drops) {
          this.pendingDrops.push({ ...drop, position: mob.position.clone() });
        }
        mob._drops = null;
      }

      if (!active) {
        mob.dispose(this.scene);
        this.mobs.splice(i, 1);
        continue;
      }

      // Billboard HP bars to face camera
      if (camera && mob._hpBar?.visible) {
        mob._hpBarBg.lookAt(camera.position);
        mob._hpBar.quaternion.copy(mob._hpBarBg.quaternion);
        mob._hpBar.translateZ(0.012);
      }
    }
  }

  // Check and consume pending attacks from monsters
  getPlayerDamage(playerIndex = 0) {
    const damage = this.pendingMeleeDamage[playerIndex];
    this.pendingMeleeDamage[playerIndex] = 0;
    return damage;
  }

  describeNearby(playerPos, eye, direction) {
    let target = null;
    let best = 11 ** 2;
    for (const mob of this.mobs) {
      if (!mob.alive || mob.isTNT) continue;
      const distance = mob.position.distanceToSquared(playerPos);
      if (distance >= 11 ** 2 || Math.abs(mob.position.y - playerPos.y) > 5) continue;
      const warning = distance < 8 ** 2 && ATTACK_WARNINGS.has(mob.intent);
      const priority = warning ? distance - 121 : distance;
      if (priority >= best) continue;
      _tmpVec.subVectors(mob.position, eye);
      _tmpVec.y += mob.type.h * 0.6;
      const onTarget = _tmpVec.normalize().dot(direction) > 0.82;
      if (!(warning || onTarget) || !clearPath(this.world, eye, mob.position, mob.type.h * 0.6)) continue;
      target = mob;
      best = priority;
    }
    if (!target) return '';
    const kind = target.isNPC ? 'Trader' : target.category === MOB_CATEGORY.MONSTER ? 'Hostile' : 'Wildlife';
    return `${target.type.name} · ${kind} · ${target.intent}`;
  }

  // Player attacks (called from main on left click)
  playerAttack(playerPos, cameraPos, cameraDir, damage = PLAYER_ATTACK_DAMAGE) {
    if (this.playerAttackCooldown > 0) return false;
    this.playerAttackCooldown = PLAYER_ATTACK_COOLDOWN;

    let closestMob = null;
    let closestDist = PLAYER_ATTACK_RANGE;

    // Find closest mob in front of player
    for (const mob of this.mobs) {
      if (!mob.alive || mob.isTNT) continue;

      // Distance from player to mob for reach limit
      const distFromPlayer = mob.position.distanceTo(playerPos);
      if (distFromPlayer > PLAYER_ATTACK_RANGE) continue;

      _tmpVec.subVectors(mob.position, cameraPos);
      // Add mob center offset
      _tmpVec.y += mob.type.h * 0.5;

      // Check angle - must be roughly in front (~75 degree cone, forgiving for 3rd person)
      const dot = _tmpVec.normalize().dot(cameraDir);
      if (dot < 0.25 || !clearPath(this.world, cameraPos, mob.position, mob.type.h * 0.5)) continue;

      if (distFromPlayer < closestDist) {
        closestDist = distFromPlayer;
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

  _trySpawn(playerPos, isNight, otherPlayer = null) {
    if (this.mobs.length >= MAX_MOBS) return;
    const counts = this.getMobCount();
    const remaining = isNight ? 18 - counts.monsters : 21 - counts.animals;
    if (remaining <= 0) return;

    const category = isNight ? MOB_CATEGORY.MONSTER : MOB_CATEGORY.ANIMAL;
    const species = isNight ? MONSTER_TYPES : ANIMAL_TYPES;
    for (let attempt = 0; attempt < 7; attempt++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = SPAWN_RADIUS_MIN + Math.random() * (SPAWN_RADIUS_MAX - SPAWN_RADIUS_MIN);
      const x = Math.floor(playerPos.x + Math.cos(angle) * distance) + 0.5;
      const z = Math.floor(playerPos.z + Math.sin(angle) * distance) + 0.5;
      if (otherPlayer && Math.hypot(x - otherPlayer.x, z - otherPlayer.z) < SPAWN_RADIUS_MIN + 4) continue;
      const biome = this.world.generator.getBiome(x, z);
      const names = isNight
        ? NIGHT_HABITAT[biome] ?? COMMON_MONSTERS
        : HABITAT[biome];
      if (!names) continue;
      const r = Math.random();
      const candidates = isNight && r < 0.18 ? species :
        species.filter(entry => (isNight && r < 0.56 ? COMMON_MONSTERS : names).includes(entry.name));
      const type = candidates[Math.floor(Math.random() * candidates.length)];
      const y = this._findGround(x, z, type, true);
      if (y < 0 || Math.abs(y - playerPos.y) > 15 || this._nearMob(x, y, z, 3)) continue;

      const groupSize = isNight || type.name === 'Fox' ? 1 : Math.min(remaining, MAX_MOBS - this.mobs.length, 2 + Math.floor(Math.random() * 3));
      const pack = groupSize > 1 ? { home: new THREE.Vector3(x, y, z), alarm: new THREE.Vector3(), until: 0 } : null;
      this._addMob(type, category, x, y, z, pack);
      for (let member = 1; member < groupSize; member++) {
        const heading = angle + member * 2.4;
        const mx = Math.floor(x + Math.cos(heading) * 4) + 0.5;
        const mz = Math.floor(z + Math.sin(heading) * 4) + 0.5;
        const my = this._findGround(mx, mz, type, true);
        if (my > 0 && Math.abs(my - y) <= 3 && !this._nearMob(mx, my, mz, 2)) this._addMob(type, category, mx, my, mz, pack);
      }
      return;
    }
  }

  _addMob(type, category, x, y, z, pack = null) {
    const mob = new Mob(type, category, new THREE.Vector3(x, y, z), this.world);
    mob.pack = pack;
    mob.simTime = this.simTime;
    this.mobs.push(mob);
    this.scene.add(mob.mesh);
    return mob;
  }

  _nearMob(x, y, z, distance) {
    return this.mobs.some(mob => mob.alive && mob.position.distanceToSquared(sightOrigin.set(x, y, z)) < distance ** 2);
  }

  _findGround(wx, wz, type, naturalOnly = false) {
    const ix = Math.floor(wx);
    const iz = Math.floor(wz);
    if (!this.world.getChunk(Math.floor(ix / CHUNK_SIZE), Math.floor(iz / CHUNK_SIZE))?.generated) return -1;
    const biome = this.world.generator.getBiome(ix, iz);
    const start = naturalOnly ? Math.min(CHUNK_HEIGHT - 2, this.world.generator.getHeight(ix, iz, biome) + 1) : CHUNK_HEIGHT - 2;
    const bottom = naturalOnly ? Math.max(1, start - 4) : 1;
    for (let y = start; y >= bottom; y--) {
      const ground = this.world.getBlock(ix, y, iz);
      if (naturalOnly ? !NATURAL_GROUND.has(ground) : !this.world.isSolid(ix, y, iz)) continue;
      let clear = true;
      const radius = type.w / 2;
      for (const dx of [-radius, radius]) {
        for (const dz of [-radius, radius]) {
          for (let dy = 1; dy <= Math.ceil(type.h); dy++) {
            const x = Math.floor(wx + dx);
            const z = Math.floor(wz + dz);
            const block = this.world.getBlock(x, y + dy, z);
            if (block !== BlockType.AIR || !this.world.getChunk(Math.floor(x / CHUNK_SIZE), Math.floor(z / CHUNK_SIZE))?.generated) clear = false;
          }
        }
      }
      if (clear && y + Math.ceil(type.h) < CHUNK_HEIGHT) return y + 1;
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
  getExplosionDamage(playerIndex = 0) {
    return this.pendingExplosionDamage[playerIndex];
  }

  // Update projectiles (arrows from skeletons)
  updateProjectiles(dt, playerPos, secondPlayer = null) {
    this.pendingArrowDamage.fill(0);
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const projectile = this.projectiles[i];
      const distance = projectile.velocity.length() * dt;
      _tmpVec.copy(projectile.velocity).normalize();
      const hit = this.world.raycast(projectile.position, _tmpVec, distance);
      const reach = hit.hit ? hit.distance : distance;
      const first = this._arrowHitDistance(playerPos, projectile.position, _tmpVec, reach);
      const second = secondPlayer ? this._arrowHitDistance(secondPlayer, projectile.position, _tmpVec, reach) : Infinity;
      const strikesPlayer = Number.isFinite(Math.min(first, second));
      projectile.life -= dt;
      if (strikesPlayer || hit.hit || projectile.life <= 0) {
        if (strikesPlayer) this.pendingArrowDamage[Number(second < first)] += projectile.damage;
        this.scene.remove(projectile.mesh);
        this.projectiles.splice(i, 1);
        continue;
      }
      projectile.position.addScaledVector(projectile.velocity, dt);
      projectile.velocity.y -= 9.8 * dt;
      projectile.mesh.position.copy(projectile.position);
      projectile.mesh.lookAt(_tmpVec2.copy(projectile.position).add(projectile.velocity));
    }
  }

  _arrowHitDistance(player, origin, heading, reach) {
    attackOffset.copy(player).addScaledVector(UP, 0.85).sub(origin);
    const approach = attackOffset.dot(heading);
    const lateral = attackOffset.lengthSq() - approach ** 2;
    if (lateral > 0.57 ** 2) return Infinity;
    const margin = Math.sqrt(0.57 ** 2 - lateral);
    const entry = Math.max(0, approach - margin);
    return approach + margin >= 0 && entry <= reach ? entry : Infinity;
  }

  getArrowDamage(playerIndex = 0) {
    const damage = this.pendingArrowDamage[playerIndex];
    this.pendingArrowDamage[playerIndex] = 0;
    return damage;
  }

  _createProjectile(fromPos, data) {
    const origin = _tmpVec3.copy(fromPos).addScaledVector(UP, 1.1);
    const speed = 15;
    const dir = _tmpVec.copy(data.target).sub(origin);
    const flightTime = Math.hypot(dir.x, dir.z) / speed;
    dir.y += 4.9 * flightTime ** 2;
    dir.normalize();
    const arrowGeo = _getGeo('arrow_proj', () => new THREE.BoxGeometry(0.1, 0.1, 0.5));
    const arrowMat = _getMat('arrow_proj', () => new THREE.MeshLambertMaterial({ color: 0x8b6914 }));
    const mesh = new THREE.Mesh(arrowGeo, arrowMat);
    mesh.position.copy(origin);
    this.scene.add(mesh);

    this.projectiles.push({
      position: mesh.position.clone(),
      velocity: dir.clone().multiplyScalar(speed),
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
            if (this.world.saveModification) {
              this.world.saveModification(cx + dx, cy + dy, cz + dz, BlockType.AIR);
            }
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
    for (let attempt = 0; attempt < 8; attempt++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 17;
      const x = Math.floor(playerPos.x + Math.cos(angle) * distance) + 0.5;
      const z = Math.floor(playerPos.z + Math.sin(angle) * distance) + 0.5;
      const y = this._findGround(x, z, type, true);
      if (y < 0 || Math.abs(y - playerPos.y) > 16 || this._nearMob(x, y, z, 4)) continue;
      this._addMob(type, MOB_CATEGORY.MONSTER, x, y, z);
      return;
    }
  }

  dispose() {
    for (const mob of this.mobs) {
      mob.dispose(this.scene);
    }
    this.mobs = [];
    for (const projectile of this.projectiles) this.scene.remove(projectile.mesh);
    this.projectiles = [];
    this._npcSpawnedChunks.clear();
  }

  // Spawn a Villager NPC at a world position (called by game for village chunks)
  spawnNPC(wx, wz) {
    const chunkKey = `${Math.floor(wx / CHUNK_SIZE)},${Math.floor(wz / CHUNK_SIZE)}`;
    if (this._npcSpawnedChunks.has(chunkKey)) return;
    this._npcSpawnedChunks.add(chunkKey);

    const x = Math.floor(wx) + 0.5;
    const z = Math.floor(wz) + 0.5;
    const y = this._findGround(x, z, NPC_TYPE);
    if (y < 0) {
      this._npcSpawnedChunks.delete(chunkKey);
      return;
    }
    const villager = this._addMob(NPC_TYPE, MOB_CATEGORY.ANIMAL, x, y, z);
    villager.isNPC = true;
    villager.npcChunkKey = chunkKey;
  }
}
