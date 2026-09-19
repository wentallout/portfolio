<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { gsap } from 'gsap';

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

	let containerRef: HTMLDivElement | null = $state(null);

	const MAX_COLORS = 10;
	const DEFAULT_COLORS = ['#FFFFFF', '#E07000', '#000000'];
	const DEFAULT_CHARACTERS = '●○•·';

	const quadVertex = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`;

	const perlinFragment = /* glsl */ `
precision mediump float;
uniform float uFrequency;
uniform float uTime;
uniform float uSpeed;
uniform float uValue;
uniform vec2 uResolution;
varying vec2 vUv;

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
  gl_FragColor = vec4(rainbowColor, 1.0);
}`;

	const dotFragment = /* glsl */ `
precision highp float;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform int uPaletteCount;
uniform vec3 uPalette[${MAX_COLORS}];
uniform float uPaletteA[${MAX_COLORS}];
uniform float uCellSize;
uniform float uGamma;
uniform float uPaletteBias;
uniform int uUseGlyphAtlas;
uniform sampler2D uGlyphAtlas;
uniform ivec2 uGlyphGrid;
uniform int uCharCount;
varying vec2 vUv;

void main() {
  vec2 pix = gl_FragCoord.xy;
  float cell = max(uCellSize, 1.0);

  vec2 cellIdx = floor(pix / cell);
  vec2 cellCenter = (cellIdx + 0.5) * cell;
  vec3 col = texture2D(uTexture, cellCenter / uResolution.xy).rgb;
  float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
  gray = pow(clamp(gray, 0.0001, 1.0), uGamma);

  float mark = 0.0;
  if (uUseGlyphAtlas == 1 && uCharCount > 0 && uGlyphGrid.x > 0 && uGlyphGrid.y > 0) {
    float g = clamp(gray + uPaletteBias, 0.0, 1.0);
    int idx = int(clamp(floor(g * float(uCharCount - 1) + 0.5), 0.0, float(uCharCount - 1)));
    vec2 cellUV = fract(pix / cell);
    vec2 grid = vec2(uGlyphGrid);
    vec2 tileSize = 1.0 / grid;
    float colIdx = float(idx - (idx / uGlyphGrid.x) * uGlyphGrid.x);
    float rowIdx = floor(float(idx) / float(uGlyphGrid.x));
    vec2 atlasUV = (vec2(colIdx, rowIdx) + cellUV) * tileSize;
    vec3 glyphSample = texture2D(uGlyphAtlas, atlasUV).rgb;
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
    int i0 = int(clamp(floor(scaled), 0.0, float(cnt - 2)));
    float f = scaled - float(i0);
    vec3 c0 = uPalette[0];
    vec3 c1 = uPalette[0];
    float a0 = uPaletteA[0];
    float a1 = uPaletteA[0];
    for (int i = 0; i < ${MAX_COLORS} - 1; i++) {
      if (i == i0) {
        c0 = uPalette[i];
        c1 = uPalette[i + 1];
        a0 = uPaletteA[i];
        a1 = uPaletteA[i + 1];
      }
    }
    dotCol = mix(c0, c1, f);
    dotOpacity = mix(a0, a1, f);
  }
  gl_FragColor = vec4(dotCol, mark * dotOpacity);
}`;

	function parseColorToRgba(input: string) {
		if (!input) return { r: 0, g: 0, b: 0, a: 1 };
		const str = input.trim();
		// Resolve CSS vars / oklch / color-mix etc. via the browser so
		// `var(--muted)` doesn't fall through to white. Computed color
		// always comes back as rgb()/rgba().
		if (typeof document !== 'undefined' && /var\(|oklch|oklab|color-mix|hsl|hsla/.test(str)) {
			try {
				const probe = document.createElement('div');
				probe.style.cssText =
					'position:absolute;visibility:hidden;pointer-events:none;';
				probe.style.color = str;
				document.body.appendChild(probe);
				const computed = getComputedStyle(probe).color;
				probe.remove();
				if (computed && computed !== str) {
					const parsed = parseColorToRgba(computed);
					// Guard: if browser couldn't resolve (returns black for unknown), fall back to muted gray
					if (computed !== 'rgb(0, 0, 0)' || str.includes('black') || str.includes('0, 0, 0')) {
						return parsed;
					}
				}
			} catch {
				// fall through to manual parsing
			}
			if (str.startsWith('var(')) return { r: 0.5, g: 0.5, b: 0.5, a: 1 };
		}
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
		return { r: 1, g: 1, b: 1, a: 1 };
	}

	function mapLinear(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
		if (inMax === inMin) return outMin;
		const t = (value - inMin) / (inMax - inMin);
		return outMin + t * (outMax - outMin);
	}

	const mapFrequencyUiToShader = (ui: number) => mapLinear(ui, 1, 10, 0.3, 6);
	const mapSpeedUiToShader = (ui: number) => ui * 0.05;
	const mapCellSizeUiToShader = (ui: number) => mapLinear(ui, 1, 100, 6, 60);
	const mapGammaUiToShader = (ui: number) => mapLinear(ui, 1, 20, 0.5, 8);
	const mapPaletteBiasUiToShader = (ui: number) => ui * 0.05;

	function buildPaletteUniforms(colorList: string[]) {
		const rgb: Array<[number, number, number]> = [];
		const alpha: number[] = [];
		for (let i = 0; i < MAX_COLORS; i++) {
			const src = colorList[i];
			if (src != null) {
				const { r, g, b, a } = parseColorToRgba(src);
				rgb.push([r, g, b]);
				alpha.push(a);
			} else {
				rgb.push([0, 0, 0]);
				alpha.push(0);
			}
		}
		return { rgb: rgb.map(([r, g, b]) => new THREE.Vector3(r, g, b)), alpha };
	}

	function buildGlyphAtlasTexture(
		chars: string,
		fontFam: string,
		fontWt: string | number,
		fontSzPx: number
	): { texture: THREE.CanvasTexture; cols: number; rows: number; count: number } | null {
		const list = Array.from(chars);
		const count = Math.max(1, list.length);
		const cols = Math.ceil(Math.sqrt(count));
		const rows = Math.ceil(count / cols);
		const paddingPx = 2;
		const cellPx = Math.max(8, fontSzPx + paddingPx * 2);
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const canvas = document.createElement('canvas');
		canvas.width = Math.max(1, Math.floor(cols * cellPx * dpr));
		canvas.height = Math.max(1, Math.floor(rows * cellPx * dpr));
		const ctx = canvas.getContext('2d');
		if (!ctx) return null;
		ctx.scale(dpr, dpr);
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
		ctx.fillStyle = '#fff';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.font = `${fontWt} ${fontSzPx}px ${fontFam}`;
		for (let i = 0; i < count; i++) {
			const cx = i % cols;
			const cy = Math.floor(i / cols);
			ctx.fillText(list[i], cx * cellPx + cellPx / 2, cy * cellPx + cellPx / 2);
		}
		const texture = new THREE.CanvasTexture(canvas);
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		texture.wrapS = THREE.ClampToEdgeWrapping;
		texture.wrapT = THREE.ClampToEdgeWrapping;
		texture.flipY = true;
		texture.needsUpdate = true;
		return { texture, cols, rows, count };
	}

	let paletteColors = $derived(
		Array.isArray(colors) && colors.length > 0 ? colors : DEFAULT_COLORS
	);
	let effPaletteCount = $derived(Math.min(MAX_COLORS, Math.max(1, paletteColors.length)));

	let effectiveCharacters = $derived(
		(() => {
			const raw = typeof characters === 'string' ? characters : '';
			const sanitized = Array.from(raw)
				.filter((ch) => !/\s/.test(ch))
				.join('');
			return sanitized.length > 0 ? sanitized : DEFAULT_CHARACTERS;
		})()
	);

	onMount(() => {
		if (!containerRef) return;

		const renderer = new THREE.WebGLRenderer({ alpha: true, premultipliedAlpha: false });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
		containerRef.appendChild(renderer.domElement);

		const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		const geometry = new THREE.PlaneGeometry(2, 2);

		const palette = buildPaletteUniforms(paletteColors);

		const perlinUniforms = {
			uTime: { value: 0 },
			uFrequency: { value: mapFrequencyUiToShader(frequency) },
			uSpeed: { value: mapSpeedUiToShader(speed) },
			uValue: { value: 1 },
			uResolution: { value: new THREE.Vector2(1, 1) }
		};
		const perlinMaterial = new THREE.ShaderMaterial({
			vertexShader: quadVertex,
			fragmentShader: perlinFragment,
			uniforms: perlinUniforms
		});
		const perlinScene = new THREE.Scene();
		perlinScene.add(new THREE.Mesh(geometry, perlinMaterial));

		let glyphTex: THREE.CanvasTexture | null = null;
		let glyphCols = 0;
		let glyphRows = 0;
		let glyphCount = 0;
		if (useGlyphAtlas) {
			const atlas = buildGlyphAtlasTexture(
				effectiveCharacters,
				fontFamily,
				fontWeight,
				fontSizePx
			);
			if (atlas) {
				glyphTex = atlas.texture;
				glyphCols = atlas.cols;
				glyphRows = atlas.rows;
				glyphCount = atlas.count;
			}
		}
		const dummyTex = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
		dummyTex.needsUpdate = true;

		const rt = new THREE.WebGLRenderTarget(2, 2);
		const dotUniforms: Record<string, { value: unknown }> = {
			uResolution: { value: new THREE.Vector2(1, 1) },
			uTexture: { value: rt.texture },
			uPaletteCount: { value: effPaletteCount },
			uPalette: { value: palette.rgb },
			uPaletteA: { value: palette.alpha },
			uCellSize: { value: mapCellSizeUiToShader(cellSize) },
			uGamma: { value: mapGammaUiToShader(gamma) },
			uPaletteBias: { value: mapPaletteBiasUiToShader(paletteBias) },
			uUseGlyphAtlas: { value: useGlyphAtlas && glyphTex ? 1 : 0 },
			uGlyphAtlas: { value: glyphTex ?? dummyTex },
			uGlyphGrid: { value: new THREE.Vector2(glyphCols, glyphRows) },
			uCharCount: { value: glyphCount }
		};
		const dotMaterial = new THREE.ShaderMaterial({
			vertexShader: quadVertex,
			fragmentShader: dotFragment,
			uniforms: dotUniforms,
			transparent: true
		});
		const dotScene = new THREE.Scene();
		dotScene.add(new THREE.Mesh(geometry.clone(), dotMaterial));

		const doResize = () => {
			if (!containerRef) return;
			const width = containerRef.clientWidth || window.innerWidth;
			const height = containerRef.clientHeight || window.innerHeight;
			renderer.setSize(width, height, false);
			const size = new THREE.Vector2();
			renderer.getDrawingBufferSize(size);
			rt.setSize(size.x, size.y);
			(perlinUniforms.uResolution.value as THREE.Vector2).set(size.x, size.y);
			(dotUniforms.uResolution.value as THREE.Vector2).set(size.x, size.y);
		};
		doResize();

		let resizePending = false;
		const scheduleResize = () => {
			if (resizePending) return;
			resizePending = true;
			requestAnimationFrame(() => {
				resizePending = false;
				doResize();
				renderFrame(performance.now() * 0.001);
			});
		};
		window.addEventListener('resize', scheduleResize);
		let resizeObserver: ResizeObserver | null = null;
		if (typeof window.ResizeObserver !== 'undefined' && containerRef) {
			resizeObserver = new window.ResizeObserver(scheduleResize);
			resizeObserver.observe(containerRef);
		}

		const renderFrame = (elapsed: number) => {
			perlinUniforms.uTime.value = elapsed;
			renderer.setRenderTarget(rt);
			renderer.render(perlinScene, camera);
			renderer.setRenderTarget(null);
			renderer.render(dotScene, camera);
		};

		// gsap drives the loop — throttled to ~30fps like before
		let last = 0;
		const frameInterval = 1 / 30;
		const onTick = (time: number) => {
			if (time - last < frameInterval) return;
			last = time;
			renderFrame(time);
		};
		gsap.ticker.add(onTick);
		renderFrame(0);

		// Re-resolve CSS-var palette when theme toggles (.dark on <html>)
		const refreshPalette = () => {
			const next = buildPaletteUniforms(paletteColors);
			(dotUniforms.uPalette.value as THREE.Vector3[]).forEach((v, i) => v.copy(next.rgb[i]));
			(dotUniforms.uPaletteA.value as number[]).forEach((_, i) => {
				(dotUniforms.uPaletteA.value as number[])[i] = next.alpha[i];
			});
			renderFrame(performance.now() * 0.001);
		};
		const themeObserver = new MutationObserver(refreshPalette);
		themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });

		return () => {
			gsap.ticker.remove(onTick);
			themeObserver.disconnect();
			window.removeEventListener('resize', scheduleResize);
			resizeObserver?.disconnect();
			geometry.dispose();
			perlinMaterial.dispose();
			dotMaterial.dispose();
			rt.dispose();
			glyphTex?.dispose();
			dummyTex.dispose();
			renderer.dispose();
			if (containerRef && renderer.domElement.parentElement === containerRef) {
				containerRef.removeChild(renderer.domElement);
			}
		};
	});

	$effect(() => {
		// reactive prop sync handled on next mount; live uniform sync skipped for simplicity
		void frequency;
		void speed;
		void cellSize;
		void gamma;
		void paletteBias;
		void paletteColors;
		void effPaletteCount;
	});
</script>

<div
	style="position: relative; width: 100%; height: 100%; background: {bgColor}; line-height: 0; min-width: 0; min-height: 0; overflow: hidden;"
	class={className}>
	<div
		style="width: 600px; height: 400px; min-width: 600px; min-height: 400px; visibility: hidden; position: absolute; pointer-events: none;">
	</div>
	<div bind:this={containerRef} style="position: absolute; inset: 0; width: 100%; height: 100%;">
	</div>
</div>
