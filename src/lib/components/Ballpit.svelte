<script lang="ts" module>
	import {
		ACESFilmicToneMapping,
		AmbientLight,
		Color,
		InstancedMesh,
		MathUtils,
		MeshPhysicalMaterial,
		Object3D,
		PerspectiveCamera as ThreePerspectiveCamera,
		Plane,
		PMREMGenerator,
		PointLight,
		Raycaster,
		Scene,
		ShaderChunk,
		SphereGeometry,
		SRGBColorSpace,
		Timer,
		Vector2,
		Vector3,
		WebGLRenderer,
		type WebGLRendererParameters
	} from 'three';
	import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

	type SizeData = {
		width: number;
		height: number;
		wWidth: number;
		wHeight: number;
		ratio: number;
		pixelRatio: number;
	};

	type XConfig = {
		canvas?: HTMLCanvasElement;
		rendererOptions?: Partial<WebGLRendererParameters>;
		size?: 'parent' | { width: number; height: number };
	};

	class X {
		#config: XConfig;
		#postprocessing: {
			render: () => void;
			setSize?: (w: number, h: number) => void;
			dispose?: () => void;
		} | null = null;
		#resizeObserver?: ResizeObserver;
		#intersectionObserver?: IntersectionObserver;
		#resizeTimer?: number;
		#animationFrameId = 0;
		#timer = new Timer();
		#animationState = { elapsed: 0, delta: 0 };
		#isAnimating = false;
		#isVisible = false;
		#boundOnResize = this.#onResize.bind(this);
		#boundOnVisibility = this.#onVisibilityChange.bind(this);
		#boundOnContextLost = this.#onContextLost.bind(this);
		#boundOnContextRestored = this.#onContextRestored.bind(this);

		canvas!: HTMLCanvasElement;
		camera!: ThreePerspectiveCamera;
		cameraMinAspect?: number;
		cameraMaxAspect?: number;
		cameraFov!: number;
		maxPixelRatio?: number;
		minPixelRatio?: number;
		scene!: Scene;
		renderer!: WebGLRenderer;
		size: SizeData = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
		render: () => void = this.#render.bind(this);
		onBeforeRender: (s: { elapsed: number; delta: number }) => void = () => {};
		onAfterRender: (s: { elapsed: number; delta: number }) => void = () => {};
		onAfterResize: (s: SizeData) => void = () => {};
		isDisposed = false;

		constructor(config: XConfig) {
			this.#config = { ...config };
			this.camera = new ThreePerspectiveCamera();
			this.cameraFov = this.camera.fov;
			this.scene = new Scene();
			this.canvas = this.#config.canvas!;
			this.canvas.style.display = 'block';
			this.renderer = new WebGLRenderer({
				canvas: this.canvas,
				powerPreference: 'high-performance',
				...(this.#config.rendererOptions ?? {})
			});
			this.renderer.outputColorSpace = SRGBColorSpace;
			this.renderer.setClearColor(0x000000, 0);
			// Prevent browser default handling of context lost; we manage restore ourselves.
			// This also silences noisy CONTEXT_LOST logs in some browsers.
			this.canvas.addEventListener('webglcontextlost', this.#boundOnContextLost as EventListener);
			this.canvas.addEventListener('webglcontextrestored', this.#boundOnContextRestored as EventListener);
			// Timer: let it handle Page Visibility to avoid large deltas after tab hidden
			if (typeof document !== 'undefined') this.#timer.connect(document);
			this.resize();
			this.#initObservers();
		}

		#initObservers() {
			if (!(this.#config.size instanceof Object)) {
				window.addEventListener('resize', this.#boundOnResize);
				if (this.#config.size === 'parent' && this.canvas.parentNode) {
					// Use ResizeObserver entry rect to avoid forced reflow from offsetWidth/offsetHeight
					this.#resizeObserver = new ResizeObserver((entries) => {
						const e = entries[0];
						if (e) {
							// contentRect is already layout-computed, no extra reflow
							this.resize(e.contentRect.width, e.contentRect.height);
						} else {
							this.#boundOnResize();
						}
					});
					this.#resizeObserver.observe(this.canvas.parentNode as Element);
				}
			}
			this.#intersectionObserver = new IntersectionObserver(
				(entries) => {
					this.#isAnimating = entries[0].isIntersecting;
					if (this.#isAnimating) this.#startAnimation();
					else this.#stopAnimation();
				},
				{ root: null, rootMargin: '0px', threshold: 0 }
			);
			this.#intersectionObserver.observe(this.canvas);
			document.addEventListener('visibilitychange', this.#boundOnVisibility);
		}

		#onResize() {
			if (this.#resizeTimer) clearTimeout(this.#resizeTimer);
			// Debounce + schedule on next frame to batch layout reads/writes and avoid forced reflow
			this.#resizeTimer = window.setTimeout(() => {
				requestAnimationFrame(() => this.resize());
			}, 100);
		}

		resize(explicitW?: number, explicitH?: number) {
			let w: number, h: number;
			if (this.#config.size instanceof Object) {
				w = this.#config.size.width;
				h = this.#config.size.height;
			} else if (explicitW !== undefined && explicitH !== undefined) {
				// From ResizeObserver – no DOM read, avoids forced reflow
				w = explicitW;
				h = explicitH;
			} else if (this.#config.size === 'parent' && this.canvas.parentNode) {
				// Fallback read – use getBoundingClientRect which batches better than offsetWidth,
				// but still forces layout; prefer the ResizeObserver path above.
				const rect = (this.canvas.parentNode as HTMLElement).getBoundingClientRect();
				w = rect.width;
				h = rect.height;
			} else {
				w = window.innerWidth;
				h = window.innerHeight;
			}
			// Guard against 0 size during hidden/detached state
			if (w === 0 || h === 0) return;
			this.size.width = w;
			this.size.height = h;
			this.size.ratio = w / h;
			this.camera.aspect = w / h;
			if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
				const tanFov = Math.tan(MathUtils.degToRad(this.cameraFov / 2));
				const newTan = tanFov / (this.camera.aspect / this.cameraMinAspect);
				this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(newTan));
			} else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
				const tanFov = Math.tan(MathUtils.degToRad(this.cameraFov / 2));
				const newTan = tanFov / (this.camera.aspect / this.cameraMaxAspect);
				this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(newTan));
			} else {
				this.camera.fov = this.cameraFov;
			}
			this.camera.updateProjectionMatrix();
			const fovRad = (this.camera.fov * Math.PI) / 180;
			this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
			this.size.wWidth = this.size.wHeight * this.camera.aspect;
			// setSize(false) avoids mutating canvas style which can trigger extra reflow;
			// caller (ResizeObserver) already sized the parent.
			this.renderer.setSize(this.size.width, this.size.height, false);
			this.#postprocessing?.setSize?.(this.size.width, this.size.height);
			let pr = window.devicePixelRatio;
			if (this.maxPixelRatio && pr > this.maxPixelRatio) pr = this.maxPixelRatio;
			else if (this.minPixelRatio && pr < this.minPixelRatio) pr = this.minPixelRatio;
			this.renderer.setPixelRatio(pr);
			this.size.pixelRatio = pr;
			this.onAfterResize(this.size);
		}

		#onVisibilityChange() {
			if (this.#isAnimating) {
				if (document.hidden) this.#stopAnimation();
				else this.#startAnimation();
			}
		}

		#onContextLost(e: Event) {
			// Prevent default which would permanently lose context
			e.preventDefault();
			this.#stopAnimation();
		}

		#onContextRestored() {
			this.resize();
			if (this.#isAnimating) this.#startAnimation();
		}

		#startAnimation() {
			if (this.#isVisible) return;
			this.#isVisible = true;
			// Reset timer base so delta after pause/visibility doesn't spike
			this.#timer.reset();
			const animateFrame = (ts: number) => {
				this.#animationFrameId = requestAnimationFrame(animateFrame);
				this.#timer.update(ts);
				this.#animationState.delta = this.#timer.getDelta();
				this.#animationState.elapsed = this.#timer.getElapsed();
				this.onBeforeRender(this.#animationState);
				this.render();
				this.onAfterRender(this.#animationState);
			};
			this.#animationFrameId = requestAnimationFrame(animateFrame);
		}

		#stopAnimation() {
			if (this.#isVisible) {
				cancelAnimationFrame(this.#animationFrameId);
				this.#isVisible = false;
			}
		}

		#render() {
			this.renderer.render(this.scene, this.camera);
		}

		clear() {
			// If context is already lost, GPU resources are gone – avoid INVALID_OPERATION:
			// "object does not belong to this context" by skipping GL deletes.
			const gl = this.renderer.getContext() as WebGLRenderingContext | WebGL2RenderingContext | null;
			const contextLost = gl ? (gl as WebGLRenderingContext & { isContextLost?: () => boolean }).isContextLost?.() : false;
			if (contextLost) {
				this.scene.clear();
				return;
			}
			try {
				this.scene.traverse((obj) => {
					const m = obj as unknown as {
						isMesh?: boolean;
						material?: { dispose?: () => void; envMap?: { dispose?: () => void }; [k: string]: unknown };
						geometry?: { dispose?: () => void };
					};
					if (m.isMesh && m.material && typeof m.material === 'object') {
						// Dispose textures held on material (e.g. envMap) but guard each dispose
						for (const k of Object.keys(m.material)) {
							try {
								const p = (m.material as Record<string, unknown>)[k];
								if (
									p &&
									typeof p === 'object' &&
									typeof (p as { dispose?: () => void }).dispose === 'function'
								)
									(p as { dispose: () => void }).dispose();
							} catch {}
						}
						try {
							m.material.dispose?.();
						} catch {}
						try {
							m.geometry?.dispose?.();
						} catch {}
					}
				});
			} catch {}
			this.scene.clear();
		}

		dispose() {
			if (this.isDisposed) return;
			window.removeEventListener('resize', this.#boundOnResize);
			if (this.#resizeTimer) clearTimeout(this.#resizeTimer);
			this.#resizeObserver?.disconnect();
			this.#intersectionObserver?.disconnect();
			document.removeEventListener('visibilitychange', this.#boundOnVisibility);
			this.canvas.removeEventListener('webglcontextlost', this.#boundOnContextLost as EventListener);
			this.canvas.removeEventListener('webglcontextrestored', this.#boundOnContextRestored as EventListener);
			this.#stopAnimation();
			this.#timer.disconnect();
			this.#timer.dispose();
			try {
				this.clear();
			} catch {}
			this.#postprocessing?.dispose?.();
			try {
				this.renderer.dispose();
			} catch {}
			// forceContextLoss triggers the CONTEXT_LOST_WEBGL logs you saw. Only force it
			// if you really need to free GPU immediately (e.g. HMR). Wrap in try/catch and
			// only call if context is still valid, otherwise it throws INVALID_OPERATION.
			try {
				const gl = this.renderer.getContext() as WebGLRenderingContext | null;
				const isLost = gl
					? (gl as WebGLRenderingContext & { isContextLost?: () => boolean }).isContextLost?.()
					: true;
				if (!isLost) this.renderer.forceContextLoss();
			} catch {}
			this.isDisposed = true;
		}
	}

	type WConfig = {
		count: number;
		maxX: number;
		maxY: number;
		maxZ: number;
		maxSize: number;
		minSize: number;
		size0: number;
		gravity: number;
		friction: number;
		wallBounce: number;
		maxVelocity: number;
		controlSphere0?: boolean;
		followCursor?: boolean;
	};

	class W {
		config: WConfig;
		positionData: Float32Array;
		velocityData: Float32Array;
		sizeData: Float32Array;
		center = new Vector3();

		constructor(config: WConfig) {
			this.config = config;
			this.positionData = new Float32Array(3 * config.count);
			this.velocityData = new Float32Array(3 * config.count);
			this.sizeData = new Float32Array(config.count).fill(1);
			this.center.toArray(this.positionData, 0);
			for (let i = 1; i < config.count; i++) {
				const idx = 3 * i;
				this.positionData[idx] = MathUtils.randFloatSpread(2 * config.maxX);
				this.positionData[idx + 1] = MathUtils.randFloatSpread(2 * config.maxY);
				this.positionData[idx + 2] = MathUtils.randFloatSpread(2 * config.maxZ);
			}
			this.sizeData[0] = config.size0;
			for (let i = 1; i < config.count; i++) {
				this.sizeData[i] = MathUtils.randFloat(config.minSize, config.maxSize);
			}
		}

		update(deltaInfo: { delta: number }) {
			const { config, center, positionData, sizeData, velocityData } = this;
			let startIdx = 0;
			if (config.controlSphere0) {
				startIdx = 1;
				const firstVec = new Vector3().fromArray(positionData, 0);
				firstVec.lerp(center, 0.1).toArray(positionData, 0);
				new Vector3(0, 0, 0).toArray(velocityData, 0);
			}
			for (let idx = startIdx; idx < config.count; idx++) {
				const base = 3 * idx;
				const pos = new Vector3().fromArray(positionData, base);
				const vel = new Vector3().fromArray(velocityData, base);
				vel.y -= deltaInfo.delta * config.gravity * sizeData[idx];
				vel.multiplyScalar(config.friction);
				vel.clampLength(0, config.maxVelocity);
				pos.add(vel);
				pos.toArray(positionData, base);
				vel.toArray(velocityData, base);
			}
			for (let idx = startIdx; idx < config.count; idx++) {
				const base = 3 * idx;
				const pos = new Vector3().fromArray(positionData, base);
				const vel = new Vector3().fromArray(velocityData, base);
				const radius = sizeData[idx];
				for (let jdx = idx + 1; jdx < config.count; jdx++) {
					const otherBase = 3 * jdx;
					const otherPos = new Vector3().fromArray(positionData, otherBase);
					const otherVel = new Vector3().fromArray(velocityData, otherBase);
					const diff = new Vector3().copy(otherPos).sub(pos);
					const dist = diff.length();
					const sumRadius = radius + sizeData[jdx];
					if (dist < sumRadius) {
						const overlap = sumRadius - dist;
						const correction = diff.normalize().multiplyScalar(0.5 * overlap);
						const velCorrection = correction.clone().multiplyScalar(Math.max(vel.length(), 1));
						pos.sub(correction);
						vel.sub(velCorrection);
						pos.toArray(positionData, base);
						vel.toArray(velocityData, base);
						otherPos.add(correction);
						otherVel.add(correction.clone().multiplyScalar(Math.max(otherVel.length(), 1)));
						otherPos.toArray(positionData, otherBase);
						otherVel.toArray(velocityData, otherBase);
					}
				}
				if (config.controlSphere0) {
					const diff = new Vector3().copy(new Vector3().fromArray(positionData, 0)).sub(pos);
					const d = diff.length();
					const sumRadius0 = radius + sizeData[0];
					if (d < sumRadius0) {
						const correction = diff.normalize().multiplyScalar(sumRadius0 - d);
						const velCorrection = correction.clone().multiplyScalar(Math.max(vel.length(), 2));
						pos.sub(correction);
						vel.sub(velCorrection);
					}
				}
				if (Math.abs(pos.x) + radius > config.maxX) {
					pos.x = Math.sign(pos.x) * (config.maxX - radius);
					vel.x = -vel.x * config.wallBounce;
				}
				if (config.gravity === 0) {
					if (Math.abs(pos.y) + radius > config.maxY) {
						pos.y = Math.sign(pos.y) * (config.maxY - radius);
						vel.y = -vel.y * config.wallBounce;
					}
				} else if (pos.y - radius < -config.maxY) {
					pos.y = -config.maxY + radius;
					vel.y = -vel.y * config.wallBounce;
				}
				const maxBoundary = Math.max(config.maxZ, config.maxSize);
				if (Math.abs(pos.z) + radius > maxBoundary) {
					pos.z = Math.sign(pos.z) * (config.maxZ - radius);
					vel.z = -vel.z * config.wallBounce;
				}
				pos.toArray(positionData, base);
				vel.toArray(velocityData, base);
			}
		}

		applyExplosion(center: Vector3, radius = 4.2, force = 0.42) {
			let popped = 0;
			for (let idx = 1; idx < this.config.count; idx++) {
				const base = 3 * idx;
				const size = this.sizeData[idx];
				if (size < 0.05) continue;
				const pos = new Vector3().fromArray(this.positionData, base);
				const vel = new Vector3().fromArray(this.velocityData, base);
				const diff = new Vector3().copy(pos).sub(center);
				const dist = diff.length();
				const hitRadius = radius + size;
				if (dist < hitRadius) {
					const dir = dist === 0 ? new Vector3(randSpread(), randSpread(), randSpread()).normalize() : diff.normalize();
					const falloff = 1 - dist / hitRadius;
					// strong outward + slight upward lift for satisfying blow-up
					const impulse = dir.multiplyScalar(force * (0.7 + falloff * 1.6));
					impulse.y += 0.06;
					vel.add(impulse);
					vel.add(new Vector3(randSpread() * 0.05, randSpread() * 0.05, randSpread() * 0.05));
					// pop close balls dramatically
					if (dist < radius * 0.62) {
						this.sizeData[idx] *= 0.35;
						popped++;
						setTimeout(() => {
							this.sizeData[idx] = 0;
						}, 120);
						setTimeout(() => {
							this.sizeData[idx] = MathUtils.randFloat(this.config.minSize, this.config.maxSize);
							new Vector3(MathUtils.randFloatSpread(3), MathUtils.randFloatSpread(2), MathUtils.randFloatSpread(2)).toArray(this.velocityData, base);
						}, 1800);
					}
					vel.toArray(this.velocityData, base);
				}
			}
			return popped;
		}
	}

	function randSpread() {
		return (Math.random() - 0.5) * 2;
	}

	class Y extends MeshPhysicalMaterial {
		uniforms: Record<string, { value: unknown }> = {
			thicknessDistortion: { value: 0.1 },
			thicknessAmbient: { value: 0 },
			thicknessAttenuation: { value: 0.1 },
			thicknessPower: { value: 2 },
			thicknessScale: { value: 10 }
		};
		defines: { USE_UV: string };
		constructor(params: ConstructorParameters<typeof MeshPhysicalMaterial>[0]) {
			super(params);
			this.defines = { USE_UV: '' };
			this.onBeforeCompile = (shader) => {
				Object.assign(shader.uniforms, this.uniforms);
				shader.fragmentShader =
					`
uniform float thicknessPower;
uniform float thicknessScale;
uniform float thicknessDistortion;
uniform float thicknessAmbient;
uniform float thicknessAttenuation;
` + shader.fragmentShader;
				shader.fragmentShader = shader.fragmentShader.replace(
					'void main() {',
					`
void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
  vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
  float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
  #ifdef USE_COLOR
    vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor.rgb;
  #else
    vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
  #endif
  reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
}
void main() {
`
				);
				const lightsChunk = ShaderChunk.lights_fragment_begin.replaceAll(
					'RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );',
					'RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\nRE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);'
				);
				shader.fragmentShader = shader.fragmentShader.replace(
					'#include <lights_fragment_begin>',
					lightsChunk
				);
			};
		}
	}

	const DEFAULT_CONFIG = {
		count: 200,
		colors: [0xffbb00, 0xe0a400, 0xc79200],
		ambientColor: 0xffffff,
		ambientIntensity: 1,
		lightIntensity: 200,
		materialParams: { metalness: 0.5, roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.15 },
		minSize: 0.5,
		maxSize: 1,
		size0: 1,
		gravity: 0.5,
		friction: 0.9975,
		wallBounce: 0.95,
		maxVelocity: 0.35,
		maxX: 5,
		maxY: 5,
		maxZ: 2,
		controlSphere0: false,
		followCursor: true
	};

	const TEMP_OBJ = new Object3D();

	class Z extends InstancedMesh {
		config: typeof DEFAULT_CONFIG;
		physics: W;
		ambientLight: AmbientLight;
		light: PointLight;
		constructor(renderer: WebGLRenderer, params: Partial<typeof DEFAULT_CONFIG> = {}) {
			const config = {
				...DEFAULT_CONFIG,
				...params,
				materialParams: { ...DEFAULT_CONFIG.materialParams, ...(params.materialParams ?? {}) }
			};
			const roomEnv = new RoomEnvironment();
			const pmrem = new PMREMGenerator(renderer);
			const envTexture = pmrem.fromScene(roomEnv).texture;
			// PMREMGenerator is only needed to bake the env – dispose immediately to free its
			// internal render targets and avoid the leak that eventually exhausts WebGL contexts.
			pmrem.dispose();
			const geometry = new SphereGeometry();
			const material = new Y({ envMap: envTexture, ...config.materialParams });
			material.envMapRotation.x = -Math.PI / 2;
			// Keep a reference for disposal: material.envMap will be cleaned in X.clear()
			// but we also ensure pmrem resources are freed now.
			super(geometry, material, config.count);
			this.config = config;
			this.physics = new W(config);
			this.ambientLight = new AmbientLight(config.ambientColor, config.ambientIntensity);
			this.add(this.ambientLight);
			this.light = new PointLight(config.colors[0], config.lightIntensity);
			this.add(this.light);
			this.setColors(config.colors);
		}

		setColors(colors: number[]) {
			if (Array.isArray(colors) && colors.length > 1) {
				const objs = colors.map((c) => new Color(c));
				const getColorAt = (ratio: number, out = new Color()) => {
					const clamped = Math.max(0, Math.min(1, ratio));
					const scaled = clamped * (colors.length - 1);
					const idx = Math.floor(scaled);
					const start = objs[idx];
					if (idx >= colors.length - 1) return start.clone();
					const alpha = scaled - idx;
					const end = objs[idx + 1];
					out.r = start.r + alpha * (end.r - start.r);
					out.g = start.g + alpha * (end.g - start.g);
					out.b = start.b + alpha * (end.b - start.b);
					return out;
				};
				for (let i = 0; i < this.count; i++) {
					this.setColorAt(i, getColorAt(i / this.count));
					if (i === 0) this.light.color.copy(getColorAt(i / this.count));
				}
				if (this.instanceColor) this.instanceColor.needsUpdate = true;
			}
		}

		update(deltaInfo: { delta: number }) {
			this.physics.update(deltaInfo);
			for (let idx = 0; idx < this.count; idx++) {
				TEMP_OBJ.position.fromArray(this.physics.positionData, 3 * idx);
				if (idx === 0 && this.config.followCursor === false) TEMP_OBJ.scale.setScalar(0);
				else TEMP_OBJ.scale.setScalar(this.physics.sizeData[idx]);
				TEMP_OBJ.updateMatrix();
				this.setMatrixAt(idx, TEMP_OBJ.matrix);
				if (idx === 0) this.light.position.copy(TEMP_OBJ.position);
			}
			this.instanceMatrix.needsUpdate = true;
		}
	}

	export type BallpitInstance = {
		three: X;
		spheres: Z;
		setCount: (count: number) => void;
		togglePause: () => void;
		dispose: () => void;
	};

	export function createBallpit(
		canvas: HTMLCanvasElement,
		config: Partial<typeof DEFAULT_CONFIG> = {}
	): BallpitInstance {
		const threeInstance = new X({
			canvas,
			size: 'parent',
			rendererOptions: { antialias: true, alpha: true }
		});
		threeInstance.renderer.toneMapping = ACESFilmicToneMapping;
		threeInstance.camera.position.set(0, 0, 20);
		threeInstance.camera.lookAt(0, 0, 0);
		threeInstance.cameraMaxAspect = 1.5;
		threeInstance.resize();
		let spheres!: Z;
		const initialize = (cfg: Partial<typeof DEFAULT_CONFIG>) => {
			if (spheres) {
				threeInstance.clear();
				threeInstance.scene.remove(spheres);
			}
			spheres = new Z(threeInstance.renderer, cfg);
			threeInstance.scene.add(spheres);
		};
		initialize(config);
		const raycaster = new Raycaster();
		const plane = new Plane(new Vector3(0, 0, 1), 0);
		const intersection = new Vector3();
		let isPaused = false;

		canvas.style.touchAction = 'none';
		canvas.style.userSelect = 'none';

		const nPos = new Vector2();
		// Hover pickup disabled — balls float freely until shot
		spheres.config.controlSphere0 = false;
		spheres.config.followCursor = false;
		// Global shoot → world explosion (every click) — disabled on mobile for perf
		const isMobileShoot = () =>
			('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
			window.innerWidth <= 768;
		const onShoot = (e: Event) => {
			if (isMobileShoot()) return;
			const detail = (e as CustomEvent).detail as { x: number; y: number } | undefined;
			if (!detail) return;
			// SOUND HOOK: play ball pop / explosion sound here
			// e.g. new Audio('/sounds/pop.mp3').play().catch(()=>{});
			const rect = canvas.getBoundingClientRect();
			// proper canvas-space mapping for accurate hit
			nPos.set(
				((detail.x - rect.left) / rect.width) * 2 - 1,
				(-(detail.y - rect.top) / rect.height) * 2 + 1
			);
			raycaster.setFromCamera(nPos, threeInstance.camera);
			threeInstance.camera.getWorldDirection(plane.normal);
			raycaster.ray.intersectPlane(plane, intersection);
			// stronger blow-up: larger radius + higher force
			spheres.physics.applyExplosion(intersection, 4.2, 0.42);
		};
		window.addEventListener('game:shoot', onShoot as EventListener);

		threeInstance.onBeforeRender = (deltaInfo) => {
			if (!isPaused) spheres.update(deltaInfo);
		};
		threeInstance.onAfterResize = (size) => {
			spheres.config.maxX = size.wWidth / 2;
			spheres.config.maxY = size.wHeight / 2;
		};

		return {
			three: threeInstance,
			get spheres() {
				return spheres;
			},
			setCount(count) {
				initialize({ ...spheres.config, count });
			},
			togglePause() {
				isPaused = !isPaused;
			},
			dispose() {
				window.removeEventListener('game:shoot', onShoot as EventListener);
				threeInstance.dispose();
			}
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	type Props = {
		class?: string;
		count?: number;
		colors?: number[];
		ambientColor?: number;
		ambientIntensity?: number;
		lightIntensity?: number;
		minSize?: number;
		maxSize?: number;
		size0?: number;
		gravity?: number;
		friction?: number;
		wallBounce?: number;
		maxVelocity?: number;
		maxX?: number;
		maxY?: number;
		maxZ?: number;
		controlSphere0?: boolean;
		followCursor?: boolean;
		materialParams?: {
			metalness?: number;
			roughness?: number;
			clearcoat?: number;
			clearcoatRoughness?: number;
		};
	};

	let {
		class: className = '',
		count,
		colors,
		ambientColor,
		ambientIntensity,
		lightIntensity,
		minSize,
		maxSize,
		size0,
		gravity,
		friction,
		wallBounce,
		maxVelocity,
		maxX,
		maxY,
		maxZ,
		controlSphere0,
		followCursor = true,
		materialParams
	}: Props = $props();

	let canvasRef: HTMLCanvasElement;

	onMount(() => {
		const cfg: Partial<typeof DEFAULT_CONFIG> = { followCursor };
		if (count !== undefined) cfg.count = count;
		if (colors !== undefined) cfg.colors = colors;
		if (ambientColor !== undefined) cfg.ambientColor = ambientColor;
		if (ambientIntensity !== undefined) cfg.ambientIntensity = ambientIntensity;
		if (lightIntensity !== undefined) cfg.lightIntensity = lightIntensity;
		if (minSize !== undefined) cfg.minSize = minSize;
		if (maxSize !== undefined) cfg.maxSize = maxSize;
		if (size0 !== undefined) cfg.size0 = size0;
		if (gravity !== undefined) cfg.gravity = gravity;
		if (friction !== undefined) cfg.friction = friction;
		if (wallBounce !== undefined) cfg.wallBounce = wallBounce;
		if (maxVelocity !== undefined) cfg.maxVelocity = maxVelocity;
		if (maxX !== undefined) cfg.maxX = maxX;
		if (maxY !== undefined) cfg.maxY = maxY;
		if (maxZ !== undefined) cfg.maxZ = maxZ;
		if (controlSphere0 !== undefined) cfg.controlSphere0 = controlSphere0;
		if (materialParams !== undefined)
			cfg.materialParams = materialParams as typeof DEFAULT_CONFIG.materialParams;
		const inst = createBallpit(canvasRef, cfg);
		return () => inst.dispose();
	});
</script>

<canvas bind:this={canvasRef} class="h-full w-full {className}"></canvas>
