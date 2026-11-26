import * as THREE from 'three';

const MAX_PARTICLES = 200;
const PARTICLE_LIFE = 0.6;

export class ParticleSystem {
  constructor(scene) {
    this.particles = [];
    this.mesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.08),
      new THREE.MeshLambertMaterial(),
      MAX_PARTICLES,
    );
    this.mesh.count = 0;
    this.mesh.visible = false;
    this.mesh.frustumCulled = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.transform = new THREE.Matrix4();
    this.color = new THREE.Color();
    scene.add(this.mesh);
  }

  spawnBlockBreak(x, y, z, color, count = 12) {
    for (let i = 0; i < count && this.particles.length < MAX_PARTICLES; i++) {
      this._spawn(x, y, z, color, 0.6, 4, 2, PARTICLE_LIFE);
    }
  }

  spawnMiningTick(x, y, z, color) {
    if (this.particles.length < MAX_PARTICLES) this._spawn(x, y, z, color, 0.3, 2, 1, 0.35);
  }

  _spawn(x, y, z, color, spread, speed, lift, life) {
    this.particles.push({
      x: x + 0.5 + (Math.random() - 0.5) * spread,
      y: y + 0.5 + (Math.random() - 0.5) * spread,
      z: z + 0.5 + (Math.random() - 0.5) * spread,
      vx: (Math.random() - 0.5) * speed,
      vy: Math.random() * speed + lift,
      vz: (Math.random() - 0.5) * speed,
      color,
      life,
    });
  }

  update(dt) {
    if (this.particles.length === 0) {
      this.mesh.visible = false;
      return;
    }

    let count = 0;
    for (const p of this.particles) {
      p.life -= dt;
      if (p.life <= 0) continue;
      p.vy -= 15 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      const scale = Math.max(0.01, p.life / PARTICLE_LIFE);
      this.transform.makeScale(scale, scale, scale).setPosition(p.x, p.y, p.z);
      this.mesh.setMatrixAt(count, this.transform);
      this.mesh.setColorAt(count, this.color.set(p.color));
      this.particles[count++] = p;
    }
    this.particles.length = count;
    this.mesh.count = count;
    this.mesh.visible = count > 0;
    if (count > 0) {
      this.mesh.instanceMatrix.needsUpdate = true;
      this.mesh.instanceColor.needsUpdate = true;
    }
  }
}
