// ============================================================
// Particle System — Block break / mining particles
// ============================================================

import * as THREE from 'three';

const MAX_PARTICLES = 200;
const PARTICLE_LIFE = 0.6;

const _geo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
const _matCache = new Map();

function _getMat(color) {
  if (!_matCache.has(color)) {
    _matCache.set(color, new THREE.MeshLambertMaterial({ color }));
  }
  return _matCache.get(color);
}

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
  }

  spawnBlockBreak(x, y, z, color, count = 12) {
    for (let i = 0; i < count && this.particles.length < MAX_PARTICLES; i++) {
      const mesh = new THREE.Mesh(_geo, _getMat(color));
      mesh.position.set(
        x + 0.5 + (Math.random() - 0.5) * 0.6,
        y + 0.5 + (Math.random() - 0.5) * 0.6,
        z + 0.5 + (Math.random() - 0.5) * 0.6
      );
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 2,
        vz: (Math.random() - 0.5) * 4,
        life: PARTICLE_LIFE,
      });
    }
  }

  spawnMiningTick(x, y, z, color) {
    if (this.particles.length >= MAX_PARTICLES) return;
    const mesh = new THREE.Mesh(_geo, _getMat(color));
    mesh.position.set(
      x + 0.5 + (Math.random() - 0.5) * 0.3,
      y + 0.5 + (Math.random() - 0.5) * 0.3,
      z + 0.5 + (Math.random() - 0.5) * 0.3
    );
    this.scene.add(mesh);
    this.particles.push({
      mesh,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 2 + 1,
      vz: (Math.random() - 0.5) * 2,
      life: 0.35,
    });
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this.particles.splice(i, 1);
        continue;
      }
      p.vy -= 15 * dt;
      p.mesh.position.x += p.vx * dt;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;
      const s = Math.max(0.01, p.life / PARTICLE_LIFE);
      p.mesh.scale.setScalar(s);
    }
  }
}
