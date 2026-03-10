// ============================================================
// Day/Night Cycle System
// ============================================================

import * as THREE from 'three';

// Full day cycle = 600 seconds (10 minutes)
export const DAY_DURATION = 600;
const SUNRISE_START = 0.20;
const SUNRISE_END = 0.30;
const SUNSET_START = 0.70;
const SUNSET_END = 0.80;

export class DayNightCycle {
  constructor(scene) {
    this.scene = scene;
    this.time = 0.25; // Start at morning (0=midnight, 0.5=noon, 1.0=next midnight)
    this.dayCount = 1;

    // Weather system
    this.weather = 'clear'; // 'clear', 'rain', 'snow', 'thunder'
    this.weatherTimer = 0;
    this.weatherDuration = 0;
    this.nextWeatherCheck = 60 + Math.random() * 120;
    this._weatherOverlay = document.getElementById('weather-overlay');

    // Store references to lights we'll control
    this.ambientLight = null;
    this.sunLight = null;
    this.hemiLight = null;

    // Find existing lights in scene
    scene.traverse((child) => {
      if (child instanceof THREE.AmbientLight) this.ambientLight = child;
      if (child instanceof THREE.DirectionalLight) this.sunLight = child;
      if (child instanceof THREE.HemisphereLight) this.hemiLight = child;
    });

    // Color targets
    this.skyColors = {
      night:   new THREE.Color(0x0a0a1a),
      dawn:    new THREE.Color(0xFF7744),
      day:     new THREE.Color(0x87CEEB),
      dusk:    new THREE.Color(0xFF5533),
    };

    this.fogColors = {
      night:   new THREE.Color(0x080818),
      dawn:    new THREE.Color(0xCC6644),
      day:     new THREE.Color(0x87CEEB),
      dusk:    new THREE.Color(0xCC4433),
    };

    // Stars (small points visible at night)
    this.stars = this._createStars();
    this.scene.add(this.stars);

    // Temp colors for interpolation (avoid per-frame clone)
    this._tmpSky = new THREE.Color();
    this._tmpFog = new THREE.Color();
  }

  _createStars() {
    const geo = new THREE.BufferGeometry();
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 0.8 + 0.2); // upper hemisphere
      const r = 180;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, sizeAttenuation: false });
    const stars = new THREE.Points(geo, mat);
    stars.visible = false;
    return stars;
  }

  get isNight() {
    return this.time < SUNRISE_START || this.time > SUNSET_END;
  }

  get isDawn() {
    return this.time >= SUNRISE_START && this.time < SUNRISE_END;
  }

  get isDusk() {
    return this.time >= SUNSET_START && this.time <= SUNSET_END;
  }

  get isDay() {
    return this.time >= SUNRISE_END && this.time < SUNSET_START;
  }

  // 0 at night, 1 during full day, smooth transition at dawn/dusk
  get sunIntensity() {
    if (this.isDay) return 1.0;
    if (this.isNight) return 0.0;
    if (this.isDawn) {
      return (this.time - SUNRISE_START) / (SUNRISE_END - SUNRISE_START);
    }
    // dusk
    return 1.0 - (this.time - SUNSET_START) / (SUNSET_END - SUNSET_START);
  }

  update(dt) {
    this.time += dt / DAY_DURATION;
    if (this.time >= 1.0) {
      this.time -= 1.0;
      this.dayCount++;
    }

    // Weather updates
    this._updateWeather(dt);

    const intensity = this.sunIntensity;

    // Sky & fog color
    let skyColor, fogColor;
    if (this.isNight) {
      skyColor = this.skyColors.night;
      fogColor = this.fogColors.night;
    } else if (this.isDawn) {
      const t = (this.time - SUNRISE_START) / (SUNRISE_END - SUNRISE_START);
      skyColor = this._tmpSky.copy(this.skyColors.night).lerp(this.skyColors.day, t);
      const orangeT = Math.sin(t * Math.PI);
      skyColor.lerp(this.skyColors.dawn, orangeT * 0.4);
      fogColor = this._tmpFog.copy(this.fogColors.night).lerp(this.fogColors.day, t);
      fogColor.lerp(this.fogColors.dawn, orangeT * 0.3);
    } else if (this.isDusk) {
      const t = (this.time - SUNSET_START) / (SUNSET_END - SUNSET_START);
      skyColor = this._tmpSky.copy(this.skyColors.day).lerp(this.skyColors.night, t);
      const orangeT = Math.sin(t * Math.PI);
      skyColor.lerp(this.skyColors.dusk, orangeT * 0.4);
      fogColor = this._tmpFog.copy(this.fogColors.day).lerp(this.fogColors.night, t);
      fogColor.lerp(this.fogColors.dusk, orangeT * 0.3);
    } else {
      skyColor = this.skyColors.day;
      fogColor = this.fogColors.day;
    }

    this.scene.background = skyColor;
    if (this.scene.fog) {
      this.scene.fog.color.copy(fogColor);
    }

    // Lighting
    if (this.ambientLight) {
      this.ambientLight.intensity = 0.15 + intensity * 0.65;
      this.ambientLight.color.setHex(this.isNight ? 0x304060 : 0x808090);
    }

    if (this.sunLight) {
      this.sunLight.intensity = intensity * 1.0;
      // Move sun across the sky
      const sunAngle = (this.time - 0.25) * Math.PI * 2;
      this.sunLight.position.set(
        Math.cos(sunAngle) * 100,
        Math.sin(sunAngle) * 200,
        50
      );

      // Warm light at dawn/dusk
      if (this.isDawn || this.isDusk) {
        this.sunLight.color.setHex(0xFFAA66);
      } else {
        this.sunLight.color.setHex(0xFFFFDD);
      }
    }

    if (this.hemiLight) {
      this.hemiLight.intensity = 0.1 + intensity * 0.3;
    }

    // Stars
    this.stars.visible = intensity < 0.5;
    if (this.stars.visible) {
      this.stars.material.opacity = 1.0 - intensity * 2;
    }
  }

  _updateWeather(dt) {
    this.weatherTimer += dt;
    this.nextWeatherCheck -= dt;

    if (this.weather !== 'clear') {
      this.weatherDuration -= dt;
      if (this.weatherDuration <= 0) {
        this.weather = 'clear';
        this._applyWeatherOverlay();
      }
    }

    if (this.nextWeatherCheck <= 0) {
      this.nextWeatherCheck = 60 + Math.random() * 180;
      // 30% chance of weather event
      if (Math.random() < 0.3 && this.weather === 'clear') {
        const types = ['rain', 'rain', 'snow', 'thunder'];
        this.weather = types[Math.floor(Math.random() * types.length)];
        this.weatherDuration = 30 + Math.random() * 120;
        this._applyWeatherOverlay();
      }
    }

    // Darken scene during rain/thunder
    if (this.weather === 'rain' || this.weather === 'thunder') {
      if (this.ambientLight) {
        this.ambientLight.intensity *= 0.85;
      }
      if (this.sunLight) {
        this.sunLight.intensity *= 0.6;
      }
    }
  }

  _applyWeatherOverlay() {
    if (!this._weatherOverlay) return;
    this._weatherOverlay.className = 'weather-overlay';
    if (this.weather === 'rain' || this.weather === 'thunder') {
      this._weatherOverlay.classList.add('rain');
    } else if (this.weather === 'snow') {
      this._weatherOverlay.classList.add('snow');
    }
  }

  getTimeString() {
    const hours = Math.floor(this.time * 24);
    const minutes = Math.floor((this.time * 24 - hours) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}
