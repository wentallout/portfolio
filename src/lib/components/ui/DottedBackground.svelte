<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import {
		Renderer,
		Camera,
		Mesh,
		Plane,
		Program,
		RenderTarget as OglRenderTarget,
		Texture
	} from 'ogl';

	/**
	 * @typedef {Object} DottedBackgroundProps
	 * @property {number} [frequency=1]
	 * @property {number} [speed=6]
	 * @property {string} [bgColor="#000000"]
	 * @property {string[]} [colors=["#FFFFFF", "#E07000", "#000000"]]
	 * @property {number} [cellSize=1]
	 * @property {number} [gamma=4]
	 * @property {number} [paletteBias=10]
	 * @property {boolean} [useGlyphAtlas=false]
	 * @property {string} [characters="●○•·"]
	 * @property {string} [fontFamily="monospace"]
	 * @property {string | number} [fontWeight=400]
	 * @property {number} [fontSizePx=42]
	 * @property {string} [class=""]
	 */

	/** @type {DottedBackgroundProps} */
	let {
		frequency = 1,
		speed = 6,
		bgColor = '#000000',
		colors = ['#FFFFFF', '#E07000', '#000000'],
		cellSize = 1,
		gamma = 4,
		paletteBias = 10,
		useGlyphAtlas = false,
		characters = '●○•·',
		fontFamily = 'monospace',
		fontWeight = 400,
		fontSizePx = 42,
		class: className = ''
	} = $props();

	/** @type {HTMLDivElement | null} */
	let containerRef = $state(null);

	const INTRINSIC_WIDTH = 600;
	const INTRINSIC_HEIGHT = 400;
	const DEFAULT_GLYPH_PADDING_PX = 2;
	const DEFAULT_CHARACTERS = '●○•·';
	const MAX_COLORS = 10;
	const DEFAULT_COLORS = ['#FFFFFF', '#E07000', '#000000'];

	const perlinVertexShader = `#version 300 es
in vec2 uv;
in vec2 position;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0., 1.);
}`;

	const perlinFragmentShader = `#version 300 es
precision mediump float;
uniform float uFrequency;
uniform float uTime;
uniform float uSpeed;
uniform float uValue;
uniform vec2 uResolution;
in vec2 vUv;
out vec4 fragColor;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  uv = (uv - 0.5) * vec2(aspect, 1.0) + 0.5;
  float hue = abs(snoise(vec3(uv * uFrequency, uTime * uSpeed)));
  vec3 rainbowColor = hsv2rgb(vec3(hue, 1.0, uValue));
  fragColor = vec4(rainbowColor, 1.0);
}`;

	const dotVertexShader = `#version 300 es
in vec2 uv;
in vec2 position;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0., 1.);
}`;

	const dotFragmentShader = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform int uPaletteCount;
uniform vec3 uPalette[10];
uniform float uPaletteA[10];
uniform float uCellSize;
uniform float uGamma;
uniform float uPaletteBias;
uniform int uUseGlyphAtlas;
uniform sampler2D uGlyphAtlas;
uniform ivec2 uGlyphGrid;
uniform int uCharCount;
out vec4 fragColor;

void main() {
  vec2 pix = gl_FragCoord.xy;
  float cell = max(uCellSize, 1.0);

  vec2 cellIdx = floor(pix / cell);
  vec2 cellCenter = (cellIdx + 0.5) * cell;
  vec3 col = texture(uTexture, cellCenter / uResolution.xy).rgb;
  float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
  gray = pow(clamp(gray, 0.0001, 1.0), uGamma);

  float mark = 0.0;
  if (uUseGlyphAtlas == 1 && uCharCount > 0 && uGlyphGrid.x > 0 && uGlyphGrid.y > 0) {
    float g = clamp(gray + uPaletteBias, 0.0, 1.0);
    int idx = int(clamp(floor(g * float(uCharCount - 1) + 0.5), 0.0, float(uCharCount - 1)));
    vec2 cellUV = fract(pix / cell);
    vec2 grid = vec2(uGlyphGrid);
    vec2 tileSize = 1.0 / grid;
    float colIdx = float(idx % uGlyphGrid.x);
    float rowIdx = floor(float(idx) / float(uGlyphGrid.x));
    vec2 atlasUV = (vec2(colIdx, rowIdx) + cellUV) * tileSize;
    vec3 glyphSample = texture(uGlyphAtlas, atlasUV).rgb;
    mark = dot(glyphSample, vec3(0.299, 0.587, 0.114));
  } else {
    vec2 cellUV = fract(pix / cell) - 0.5;
    float dist = length(cellUV);
    float radius = clamp(gray + uPaletteBias, 0.0, 1.0) * 0.5;
    float aa = fwidth(dist) + 1e-4;
    mark = 1.0 - smoothstep(radius - aa, radius + aa, dist);
  }

  float g2 = clamp(gray + uPaletteBias, 0.0, 1.0);
  int cnt = max(uPaletteCount, 1);
  vec3 dotCol;
  float dotOpacity;
  if (cnt <= 1) {
    dotCol = uPalette[0];
    dotOpacity = uPaletteA[0];
  } else {
    float scaled = g2 * float(cnt - 1);
    int i0 = int(floor(scaled));
    i0 = clamp(i0, 0, cnt - 2);
    float f = scaled - float(i0);
    dotCol = mix(uPalette[i0], uPalette[i0 + 1], f);
    dotOpacity = mix(uPaletteA[i0], uPaletteA[i0 + 1], f);
  }
  fragColor = vec4(dotCol, mark * dotOpacity);
}`;

	function parseColorToRgba(input) {
		if (!input) return { r: 0, g: 0, b: 0, a: 1 };
		const str = input.trim();
		const rgbaMatch = str.match(
			/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i
		);
		if (rgbaMatch) {
			const r = Math.max(0, Math.min(255, parseFloat(rgbaMatch[1]))) / 255;
			const g = Math.max(0, Math.min(255, parseFloat(rgbaMatch[2]))) / 255;
			const b = Math.max(0, Math.min(255, parseFloat(rgbaMatch[3]))) / 255;
			const a = rgbaMatch[4] !== undefined ? Math.max(0, Math.min(1, parseFloat(rgbaMatch[4]))) : 1;
			return { r, g, b, a };
		}
		const hex = str.replace(/^#/, '');
		if (hex.length === 8) {
			return {
				r: parseInt(hex.slice(0, 2), 16) / 255,
				g: parseInt(hex.slice(2, 4), 16) / 255,
				b: parseInt(hex.slice(4, 6), 16) / 255,
				a: parseInt(hex.slice(6, 8), 16) / 255
			};
		}
		if (hex.length === 6) {
			return {
				r: parseInt(hex.slice(0, 2), 16) / 255,
				g: parseInt(hex.slice(2, 4), 16) / 255,
				b: parseInt(hex.slice(4, 6), 16) / 255,
				a: 1
			};
		}
		if (hex.length === 4) {
			return {
				r: parseInt(hex[0] + hex[0], 16) / 255,
				g: parseInt(hex[1] + hex[1], 16) / 255,
				b: parseInt(hex[2] + hex[2], 16) / 255,
				a: parseInt(hex[3] + hex[3], 16) / 255
			};
		}
		if (hex.length === 3) {
			return {
				r: parseInt(hex[0] + hex[0], 16) / 255,
				g: parseInt(hex[1] + hex[1], 16) / 255,
				b: parseInt(hex[2] + hex[2], 16) / 255,
				a: 1
			};
		}
		return { r: 0, g: 0, b: 0, a: 1 };
	}

	function colorStringToVec4(input) {
		const { r, g, b, a } = parseColorToRgba(input);
		return [r, g, b, a];
	}

	function mapLinear(value, inMin, inMax, outMin, outMax) {
		if (inMax === inMin) return outMin;
		const t = (value - inMin) / (inMax - inMin);
		return outMin + t * (outMax - outMin);
	}

	function mapFrequencyUiToShader(ui) {
		return mapLinear(ui, 1, 10, 0.3, 6);
	}
	function mapSpeedUiToShader(ui) {
		return ui * 0.05;
	}
	function mapCellSizeUiToShader(ui) {
		return mapLinear(ui, 1, 100, 6, 60);
	}
	function mapGammaUiToShader(ui) {
		return mapLinear(ui, 1, 20, 0.5, 8);
	}
	function mapPaletteBiasUiToShader(ui) {
		return ui * 0.05;
	}

	function buildGlyphAtlas(gl, chars, fontFam, fontWt, fontSzPx, paddingPx) {
		const count = Math.max(1, chars.length);
		const cols = Math.ceil(Math.sqrt(count));
		const rows = Math.ceil(count / cols);
		const cellPx = Math.max(8, fontSzPx + paddingPx * 2);
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const canvas = document.createElement('canvas');
		canvas.width = cols * cellPx * dpr;
		canvas.height = rows * cellPx * dpr;
		const ctx = canvas.getContext('2d');
		if (!ctx) return null;
		ctx.scale(dpr, dpr);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
		ctx.fillStyle = '#fff';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.font = `${fontWt} ${fontSzPx}px ${fontFam}`;
		for (let i = 0; i < count; i++) {
			const cx = i % cols;
			const cy = Math.floor(i / cols);
			const x = cx * cellPx + cellPx / 2;
			const y = cy * cellPx + cellPx / 2;
			ctx.fillText(chars[i], x, y);
		}
		const texture = new Texture(gl, {
			image: canvas,
			wrapS: gl.CLAMP_TO_EDGE,
			wrapT: gl.CLAMP_TO_EDGE,
			generateMipmaps: false,
			flipY: true
		});
		return { texture, cols, rows, cellPx, count };
	}

	function buildPaletteUniforms(colorList) {
		const rgb = [];
		const alpha = [];
		for (let i = 0; i < MAX_COLORS; i++) {
			const src = colorList[i];
			if (src != null) {
				const [r, g, b, a] = colorStringToVec4(src);
				rgb.push([r, g, b]);
				alpha.push(a);
			} else {
				rgb.push([0, 0, 0]);
				alpha.push(0);
			}
		}
		return { rgb, alpha };
	}

	let perlinProgramRef = null;
	let dotProgramRef = null;
	let rendererRef = null;
	let cameraRef = null;
	let perlinMeshRef = null;
	let dotMeshRef = null;
	let renderTargetRef = null;
	let glRef = null;
	let rafIdRef = null;
	let lastTimeRef = 0;
	let glyphTextureRef = null;
	let dummyGlyphTextureRef = null;

	let paletteColors = $derived(
		Array.isArray(colors) && colors.length > 0 ? colors : DEFAULT_COLORS
	);
	let effPaletteCount = $derived(Math.min(MAX_COLORS, Math.max(1, paletteColors.length)));
	let palette = $derived(buildPaletteUniforms(paletteColors));

	let effectiveCharacters = $derived(
		(() => {
			const raw = typeof characters === 'string' ? characters : '';
			const sanitized = Array.from(raw)
				.filter((ch) => !/\s/.test(ch))
				.join('');
			return sanitized.length > 0 ? sanitized : DEFAULT_CHARACTERS;
		})()
	);

	function renderOnce() {
		if (
			!rendererRef ||
			!cameraRef ||
			!perlinMeshRef ||
			!dotMeshRef ||
			!renderTargetRef ||
			!glRef ||
			!dotProgramRef
		)
			return;
		rendererRef.render({ scene: perlinMeshRef, camera: cameraRef, target: renderTargetRef });
		dotProgramRef.uniforms.uResolution.value = [glRef.canvas.width, glRef.canvas.height];
		rendererRef.render({ scene: dotMeshRef, camera: cameraRef });
	}

	onMount(() => {
		if (!containerRef) return;

		const renderer = new Renderer({
			dpr: Math.min(window.devicePixelRatio || 1, 2),
			alpha: true,
			premultipliedAlpha: false
		});
		const gl = renderer.gl;
		containerRef.appendChild(gl.canvas);
		rendererRef = renderer;
		glRef = gl;

		const camera = new Camera(gl, { near: 0.1, far: 100 });
		camera.position.set(0, 0, 3);
		cameraRef = camera;

		let resizeObserver = null;
		const doResize = () => {
			if (!containerRef || !glRef) return;
			const width = containerRef.clientWidth || window.innerWidth;
			const height = containerRef.clientHeight || window.innerHeight;
			renderer.setSize(width, height);
			camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
			if (renderTargetRef && renderTargetRef.setSize) {
				renderTargetRef.setSize(gl.canvas.width, gl.canvas.height);
			}
			if (perlinProgramRef) {
				perlinProgramRef.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];
			}
		};

		let resizePending = false;
		const scheduleResize = () => {
			if (resizePending) return;
			resizePending = true;
			requestAnimationFrame(() => {
				resizePending = false;
				doResize();
				renderOnce();
			});
		};

		window.addEventListener('resize', scheduleResize);
		if (typeof window.ResizeObserver !== 'undefined') {
			resizeObserver = new window.ResizeObserver(scheduleResize);
			resizeObserver.observe(containerRef);
		}
		doResize();

		const perlinProgram = new Program(gl, {
			vertex: perlinVertexShader,
			fragment: perlinFragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uFrequency: { value: mapFrequencyUiToShader(frequency) },
				uSpeed: { value: mapSpeedUiToShader(speed) },
				uValue: { value: 1 },
				uResolution: { value: [gl.canvas.width, gl.canvas.height] }
			}
		});
		perlinProgramRef = perlinProgram;
		const perlinMesh = new Mesh(gl, {
			geometry: new Plane(gl, { width: 2, height: 2 }),
			program: perlinProgram
		});
		perlinMeshRef = perlinMesh;

		const renderTarget = new OglRenderTarget(gl);
		renderTargetRef = renderTarget;

		const dummyGlyphTexture = new Texture(gl, {
			width: 1,
			height: 1,
			generateMipmaps: false,
			flipY: false
		});
		dummyGlyphTextureRef = dummyGlyphTexture;

		const dotProgram = new Program(gl, {
			vertex: dotVertexShader,
			fragment: dotFragmentShader,
			uniforms: {
				uResolution: { value: [gl.canvas.width, gl.canvas.height] },
				uTexture: { value: renderTarget.texture },
				uPaletteCount: { value: effPaletteCount },
				uPalette: { value: palette.rgb },
				uPaletteA: { value: palette.alpha },
				uCellSize: { value: mapCellSizeUiToShader(cellSize) },
				uGamma: { value: mapGammaUiToShader(gamma) },
				uPaletteBias: { value: mapPaletteBiasUiToShader(paletteBias) },
				uUseGlyphAtlas: { value: useGlyphAtlas ? 1 : 0 },
				uGlyphAtlas: { value: dummyGlyphTexture },
				uGlyphGrid: { value: [0, 0] },
				uCharCount: { value: 0 }
			}
		});
		dotProgramRef = dotProgram;
		const dotMesh = new Mesh(gl, {
			geometry: new Plane(gl, { width: 2, height: 2 }),
			program: dotProgram
		});
		dotMeshRef = dotMesh;

		if (useGlyphAtlas) {
			const atlas = buildGlyphAtlas(
				gl,
				effectiveCharacters,
				fontFamily,
				fontWeight,
				fontSizePx,
				DEFAULT_GLYPH_PADDING_PX
			);
			if (atlas) {
				glyphTextureRef = atlas.texture;
				dotProgram.uniforms.uGlyphAtlas.value = atlas.texture;
				dotProgram.uniforms.uGlyphGrid.value = [atlas.cols, atlas.rows];
				dotProgram.uniforms.uCharCount.value = atlas.count;
				dotProgram.uniforms.uUseGlyphAtlas.value = 1;
			}
		}

		const frameInterval = 1e3 / 30;
		const update = (time) => {
			const last = lastTimeRef;
			if (time - last < frameInterval) {
				rafIdRef = requestAnimationFrame(update);
				return;
			}
			lastTimeRef = time;
			perlinProgram.uniforms.uTime.value = time * 0.001;
			renderer.render({
				scene: perlinMesh,
				camera,
				target: renderTarget
			});
			dotProgram.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];
			perlinProgram.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];
			renderer.render({ scene: dotMesh, camera });
			rafIdRef = requestAnimationFrame(update);
		};

		renderOnce();
		rafIdRef = requestAnimationFrame(update);

		return () => {
			if (rafIdRef) cancelAnimationFrame(rafIdRef);
			window.removeEventListener('resize', scheduleResize);
			if (resizeObserver) resizeObserver.disconnect();
			if (glyphTextureRef) {
				try {
					glyphTextureRef.destroy?.();
				} catch {}
			}
			if (dummyGlyphTextureRef) {
				try {
					dummyGlyphTextureRef.destroy?.();
				} catch {}
			}
			if (gl && gl.canvas && gl.canvas.parentElement === containerRef) {
				containerRef.removeChild(gl.canvas);
			}
		};
	});

	$effect(() => {
		const perlin = perlinProgramRef;
		if (perlin) {
			perlin.uniforms.uFrequency.value = mapFrequencyUiToShader(frequency);
			perlin.uniforms.uSpeed.value = mapSpeedUiToShader(speed);
		}
		const dot = dotProgramRef;
		if (dot) {
			dot.uniforms.uPaletteCount.value = effPaletteCount;
			dot.uniforms.uPalette.value = palette.rgb;
			dot.uniforms.uPaletteA.value = palette.alpha;
			dot.uniforms.uCellSize.value = mapCellSizeUiToShader(cellSize);
			dot.uniforms.uGamma.value = mapGammaUiToShader(gamma);
			dot.uniforms.uPaletteBias.value = mapPaletteBiasUiToShader(paletteBias);
		}
	});
</script>

<div
	style="position: relative; width: 100%; height: 100%; background: {bgColor}; line-height: 0; min-width: 0; min-height: 0; overflow: hidden;"
	class={className}>
	<div
		style="width: {INTRINSIC_WIDTH}px; height: {INTRINSIC_HEIGHT}px; min-width: {INTRINSIC_WIDTH}px; min-height: {INTRINSIC_HEIGHT}px; visibility: hidden; position: absolute; pointer-events: none;">
	</div>
	<div bind:this={containerRef} style="position: absolute; inset: 0; width: 100%; height: 100%;">
	</div>
</div>
