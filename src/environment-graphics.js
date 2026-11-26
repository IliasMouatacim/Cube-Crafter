import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

export const WATER_LAYER = 1;

export class EnvironmentGraphics {
  constructor(scene, sun) {
    this.sun = sun;
    this.elapsed = 0;
    this.nextShadowUpdate = 0;
    this.views = new WeakMap();
    this.frustum = new THREE.Frustum();
    this.projection = new THREE.Matrix4();
    this.lightOffset = new THREE.Vector3();
    this.shadowAnchor = new THREE.Vector3();
    this.dayZenith = new THREE.Color(0x205d9c);

    const uniforms = {
      horizon: { value: new THREE.Color() },
      zenith: { value: new THREE.Color() },
      sunDirection: { value: new THREE.Vector3() },
      daylight: { value: 0 },
    };
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(155, 24, 16), new THREE.ShaderMaterial({
      uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      vertexShader: `
        varying vec3 skyDirection;
        void main() {
          skyDirection = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 horizon, zenith, sunDirection;
        uniform float daylight;
        varying vec3 skyDirection;
        void main() {
          vec3 ray = normalize(skyDirection);
          float altitude = pow(max(ray.y, 0.0), 0.65);
          float facingSun = max(dot(ray, sunDirection), 0.0);
          vec3 sky = mix(horizon, zenith, altitude);
          sky += vec3(1.0, 0.68, 0.32) * daylight *
            (0.14 * pow(facingSun, 12.0) + 0.85 * smoothstep(0.998, 0.9995, facingSun));
          gl_FragColor = vec4(sky, 1.0);
          #include <colorspace_fragment>
        }`,
    }));
    this.sky.renderOrder = 10;
    scene.add(this.sky);

    this.water = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
        time: { value: 0 },
        daylight: { value: 0 },
        horizon: { value: new THREE.Color() },
        sunDirection: { value: new THREE.Vector3() },
        mirror: { value: null },
        mirrorMatrix: { value: new THREE.Matrix4() },
        mirrorHeight: { value: 0 },
        mirrorEnabled: { value: false },
      }]),
      transparent: true,
      depthWrite: false,
      fog: true,
      side: THREE.DoubleSide,
      vertexShader: `
        uniform mat4 mirrorMatrix;
        varying vec3 surfacePosition, surfaceNormal;
        varying vec4 mirrorPosition;
        #include <fog_pars_vertex>
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          surfacePosition = world.xyz;
          surfaceNormal = mat3(modelMatrix) * normal;
          mirrorPosition = mirrorMatrix * world;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: `
        uniform float time, daylight, mirrorHeight;
        uniform bool mirrorEnabled;
        uniform vec3 horizon, sunDirection;
        uniform sampler2D mirror;
        varying vec3 surfacePosition, surfaceNormal;
        varying vec4 mirrorPosition;
        #include <fog_pars_fragment>
        void main() {
          vec2 p = surfacePosition.xz;
          float swell = sin(p.x * 1.6 + p.y * 0.8 + time * 1.4);
          float ripple = cos(p.y * 2.4 - p.x * 0.4 - time * 1.1);
          vec2 waves = vec2(swell, ripple);
          vec3 normal = normalize(surfaceNormal + vec3(waves.x, 0.0, waves.y) * 0.075);
          vec3 view = normalize(cameraPosition - surfacePosition);
          bool topSurface = surfaceNormal.y > 0.9 && view.y > 0.0;
          float fresnel = pow(1.0 - clamp(abs(dot(normal, view)), 0.0, 1.0), 3.0);
          vec3 reflected = horizon;
          if (mirrorEnabled && topSurface && abs(surfacePosition.y - mirrorHeight) < 0.04 && mirrorPosition.w > 0.0) {
            vec2 uv = mirrorPosition.xy / mirrorPosition.w + waves * 0.009;
            float edge = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
            reflected = mix(horizon, texture2D(mirror, clamp(uv, 0.0, 1.0)).rgb, smoothstep(0.0, 0.05, edge));
          }
          vec3 water = mix(vec3(0.009, 0.037, 0.064), vec3(0.021, 0.27, 0.32), daylight);
          water *= 1.0 + 0.10 * swell + 0.06 * ripple;
          float sparkle = pow(max(dot(normalize(sunDirection + view), normal), 0.0), 95.0) * daylight;
          vec3 color = mix(water, reflected, topSurface ? 0.23 + fresnel * 0.67 : 0.09);
          gl_FragColor = vec4(color + vec3(1.0, 0.76, 0.45) * sparkle * 0.48, 0.66 + fresnel * 0.32);
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
    });
  }

  update(dt, cycle, camera, reducedMotion) {
    this.elapsed += dt;
    this.sky.position.copy(camera.position);
    cycle.stars.position.copy(camera.position);
    const sky = this.sky.material.uniforms;
    sky.horizon.value.copy(cycle.scene.fog.color);
    sky.zenith.value.copy(sky.horizon.value).lerp(this.dayZenith, cycle.sunIntensity * 0.67);
    sky.sunDirection.value.copy(this.sun.position).normalize();
    sky.daylight.value = this.sun.intensity;
    const water = this.water.uniforms;
    water.daylight.value = cycle.sunIntensity;
    water.horizon.value.copy(sky.horizon.value);
    water.sunDirection.value.copy(sky.sunDirection.value);
    if (!reducedMotion) water.time.value = (water.time.value + dt) % 1000;
  }

  updateShadows(renderer, playerPosition, enabled) {
    if (renderer.shadowMap.enabled !== enabled) {
      renderer.shadowMap.enabled = enabled;
      renderer.shadowMap.needsUpdate = enabled;
    }
    this.sun.castShadow = enabled && this.sun.intensity > 0.18;
    if (!this.sun.castShadow) return;
    if (this.elapsed >= this.nextShadowUpdate || renderer.shadowMap.needsUpdate) {
      this.nextShadowUpdate = this.elapsed + 0.16;
      this.shadowAnchor.copy(playerPosition).divideScalar(2).floor().multiplyScalar(2);
      renderer.shadowMap.needsUpdate = true;
    }
    this.lightOffset.copy(this.sun.position);
    this.sun.target.position.copy(this.shadowAnchor);
    this.sun.position.copy(this.shadowAnchor).add(this.lightOffset);
  }

  prepareView(renderer, scene, world, camera, reflections) {
    const uniforms = this.water.uniforms;
    uniforms.mirrorEnabled.value = false;
    if (!reflections) return;

    camera.updateMatrixWorld();
    this.frustum.setFromProjectionMatrix(this.projection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    let distance = 58 ** 2;
    let height;
    for (const chunk of world.chunks.values()) {
      for (const bounds of chunk.waterMesh?.userData.surfaceBounds ?? []) {
        if (camera.position.y <= bounds.max.y + 0.15 || !this.frustum.intersectsBox(bounds)) continue;
        const candidate = bounds.distanceToPoint(camera.position) ** 2;
        if (candidate >= distance) continue;
        distance = candidate;
        height = bounds.max.y;
      }
    }
    if (height === undefined) return;

    let view = this.views.get(camera);
    if (!view) {
      const reflector = new Reflector(new THREE.PlaneGeometry(), {
        textureWidth: 384, textureHeight: 224, clipBias: 0.003, multisample: 0,
      });
      reflector.rotation.x = -Math.PI / 2;
      view = { reflector, nextUpdate: 0, height: NaN };
      this.views.set(camera, view);
    }
    const { reflector } = view;
    if (view.height !== height || this.elapsed >= view.nextUpdate) {
      reflector.position.y = height;
      reflector.updateMatrixWorld();
      // The mirror camera uses layer 0; water only renders on the main cameras.
      const refreshShadows = renderer.shadowMap.needsUpdate;
      renderer.shadowMap.needsUpdate = false;
      try {
        reflector.onBeforeRender(renderer, scene, camera);
      } finally {
        renderer.shadowMap.needsUpdate = refreshShadows;
      }
      view.nextUpdate = this.elapsed + 0.12;
      view.height = height;
    }
    uniforms.mirrorMatrix.value.copy(reflector.material.uniforms.textureMatrix.value).multiply(this.projection.copy(reflector.matrixWorld).invert());
    uniforms.mirrorHeight.value = height;
    uniforms.mirror.value = reflector.getRenderTarget().texture;
    uniforms.mirrorEnabled.value = true;
  }
}
