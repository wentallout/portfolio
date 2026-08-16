<script>
	import { onMount } from 'svelte';

	/**
	 * @typedef {Object} DitherProps
	 * @property {string} [background="#000000"]
	 * @property {string} [color="#00FFC0"]
	 * @property {number} [size=34]
	 * @property {number} [speed=56]
	 * @property {number} [scale=32]
	 * @property {number} [offsetX=0]
	 * @property {number} [offsetY=0]
	 * @property {string} [shape="swirl"] - "simplex" | "warp" | "dots" | "wave" | "ripple" | "swirl" | "sphere"
	 * @property {string} [type="4x4"] - "random" | "2x2" | "4x4" | "8x8"
	 * @property {string} [class=""]
	 */

	/** @type {DitherProps} */
	let {
		background = '#000000',
		color = '#00FFC0',
		size = 34,
		speed = 56,
		scale = 32,
		offsetX = 0,
		offsetY = 0,
		shape = 'swirl',
		type = '4x4',
		class: className = ''
	} = $props();

	/** @type {HTMLDivElement | null} */
	let containerRef = $state(null);
	let isInView = $state(true);

	const DitheringShapes = {
		simplex: 1,
		warp: 2,
		dots: 3,
		wave: 4,
		ripple: 5,
		swirl: 6,
		sphere: 7,
		seigaiha: 8
	};

	const DitheringTypes = {
		random: 1,
		'2x2': 2,
		'4x4': 3,
		'8x8': 4
	};

	const ShaderFitOptions = { none: 0, contain: 1, cover: 2 };

	const declarePI = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`;

	const proceduralHash11 = `
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`;

	const proceduralHash21 = `
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`;

	const simplexNoise = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;

	const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) {
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) {
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  v_patternUV *= .01;

  vec2 imageBoxSize;
  if (u_fit == 1.) {
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) {
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`;

	const ditheringFragmentShader = `#version 300 es
precision mediump float;

uniform float u_time;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;

out vec4 fragColor;

${simplexNoise}
${declarePI}
${proceduralHash11}
${proceduralHash21}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {
  float t = .5 * u_time;

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec2 shapeUV = normalizedUV;

  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 boxSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  
  if (u_shape > 3.5) {
    vec2 objectBoxSize = vec2(0.);
    objectBoxSize.x = min(boxSize.x, boxSize.y);
    if (u_fit == 1.) {
      objectBoxSize.x = min(u_resolution.x, u_resolution.y);
    } else if (u_fit == 2.) {
      objectBoxSize.x = max(u_resolution.x, u_resolution.y);
    }
    objectBoxSize.y = objectBoxSize.x;
    vec2 objectWorldScale = u_resolution.xy / objectBoxSize;

    shapeUV *= objectWorldScale;
    shapeUV += boxOrigin * (objectWorldScale - 1.);
    shapeUV += vec2(-u_offsetX, u_offsetY);
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
  } else {
    vec2 patternBoxSize = vec2(0.);
    patternBoxSize.x = patternBoxRatio * min(boxSize.x / patternBoxRatio, boxSize.y);
    float patternWorldNoFitBoxWidth = patternBoxSize.x;
    if (u_fit == 1.) {
      patternBoxSize.x = patternBoxRatio * min(u_resolution.x / patternBoxRatio, u_resolution.y);
    } else if (u_fit == 2.) {
      patternBoxSize.x = patternBoxRatio * max(u_resolution.x / patternBoxRatio, u_resolution.y);
    }
    patternBoxSize.y = patternBoxSize.x / patternBoxRatio;
    vec2 patternWorldScale = u_resolution.xy / patternBoxSize;

    shapeUV += vec2(-u_offsetX, u_offsetY) / patternWorldScale;
    shapeUV += boxOrigin;
    shapeUV -= boxOrigin / patternWorldScale;
    shapeUV *= u_resolution.xy;
    shapeUV /= u_pixelRatio;
    if (u_fit > 0.) {
      shapeUV *= (patternWorldNoFitBoxWidth / patternBoxSize.x);
    }
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
    shapeUV += boxOrigin / patternWorldScale;
    shapeUV -= boxOrigin;
    shapeUV += .5;
  }

  float shape = 0.;
  if (u_shape < 1.5) {
    shapeUV *= .001;

    shape = 0.5 + 0.5 * getSimplexNoise(shapeUV, t);
    shape = smoothstep(0.3, 0.9, shape);

  } else if (u_shape < 2.5) {
    shapeUV *= .003;

    for (float i = 1.0; i < 6.0; i++) {
      shapeUV.x += 0.6 / i * cos(i * 2.5 * shapeUV.y + t);
      shapeUV.y += 0.6 / i * cos(i * 1.5 * shapeUV.x + t);
    }

    shape = .15 / max(0.001, abs(sin(t - shapeUV.y - shapeUV.x)));
    shape = smoothstep(0.02, 1., shape);

  } else if (u_shape < 3.5) {
    shapeUV *= .05;

    float stripeIdx = floor(2. * shapeUV.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shapeUV.x) * cos(shapeUV.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);

  } else if (u_shape < 4.5) {
    shapeUV *= 4.;

    float wave = cos(.5 * shapeUV.x - 2. * t) * sin(1.5 * shapeUV.x + t) * (.75 + .25 * cos(3. * t));
    shape = 1. - smoothstep(-1., 1., shapeUV.y + wave);

  } else if (u_shape < 5.5) {

    float dist = length(shapeUV);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {

    float l = length(shapeUV);
    float angle = 6. * atan(shapeUV.y, shapeUV.x) + 4. * t;
    float twist = 1.2;
    float offset = 1. / pow(max(l, 1e-6), twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);

  } else if (u_shape < 7.5) {
    shapeUV *= 2.;

    float d = 1. - pow(length(shapeUV), 2.);
    vec3 pos = vec3(shapeUV, sqrt(max(0., d)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  } else {
    // Seigaiha Procedural Arch Formula
    vec2 p = shapeUV * 10.0;
    p.y += t * 0.5;
    vec2 cell = floor(p);
    vec2 f = fract(p);
    float row = cell.y;
    if (mod(row, 2.0) > 0.5) {
      f.x = fract(f.x + 0.5);
    }
    float distToArchCenter = length(f - vec2(0.5, 0.0));
    shape = sin(distToArchCenter * 25.0 - t * 2.0) * 0.5 + 0.5;
  }


  int type = int(floor(u_type));
  float dithering = 0.0;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), shape);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  dithering -= .5;
  float res = step(.5, shape + dithering);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`;

	function getShaderColorFromString(colorString) {
		if (Array.isArray(colorString)) {
			if (colorString.length === 4) return colorString;
			if (colorString.length === 3) return [...colorString, 1];
			return [0, 0, 0, 1];
		}
		if (typeof colorString !== 'string') return [0, 0, 0, 1];
		let r = 0, g = 0, b = 0, a = 1;
		if (colorString.startsWith('#')) {
			let hex = colorString.replace(/^#/, '');
			if (hex.length === 3)
				hex = hex
					.split('')
					.map((c) => c + c)
					.join('');
			if (hex.length === 6) hex = hex + 'ff';
			r = parseInt(hex.slice(0, 2), 16) / 255;
			g = parseInt(hex.slice(2, 4), 16) / 255;
			b = parseInt(hex.slice(4, 6), 16) / 255;
			a = parseInt(hex.slice(6, 8), 16) / 255;
		}
		return [
			Math.min(Math.max(r, 0), 1),
			Math.min(Math.max(g, 0), 1),
			Math.min(Math.max(b, 0), 1),
			Math.min(Math.max(a, 0), 1)
		];
	}

	function clampVal(n, min, max, fallback) {
		const v = typeof n === 'number' ? n : parseFloat(String(n));
		if (!Number.isFinite(v)) return fallback;
		return Math.min(max, Math.max(min, v));
	}

	class ShaderInstance {
		constructor(parentElement, uniforms, speed) {
			this.parentElement = parentElement;
			this.canvasElement = document.createElement('canvas');
			this.parentElement.style.position = this.parentElement.style.position || 'relative';
			this.canvasElement.style.position = 'absolute';
			this.canvasElement.style.inset = '0';
			this.canvasElement.style.width = '100%';
			this.canvasElement.style.height = '100%';
			this.canvasElement.style.display = 'block';
			this.parentElement.prepend(this.canvasElement);

			const gl = this.canvasElement.getContext('webgl2', { preserveDrawingBuffer: false });
			if (!gl) return;
			this.gl = gl;

			const vert = gl.createShader(gl.VERTEX_SHADER);
			gl.shaderSource(vert, vertexShaderSource);
			gl.compileShader(vert);

			const frag = gl.createShader(gl.FRAGMENT_SHADER);
			gl.shaderSource(frag, ditheringFragmentShader);
			gl.compileShader(frag);

			const program = gl.createProgram();
			gl.attachShader(program, vert);
			gl.attachShader(program, frag);
			gl.linkProgram(program);

			this.program = program;

			const posLoc = gl.getAttribLocation(program, 'a_position');
			const posBuf = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
			gl.bufferData(
				gl.ARRAY_BUFFER,
				new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
				gl.STATIC_DRAW
			);
			gl.enableVertexAttribArray(posLoc);
			gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

			this.uniformLocations = {
				u_time: gl.getUniformLocation(program, 'u_time'),
				u_pixelRatio: gl.getUniformLocation(program, 'u_pixelRatio'),
				u_resolution: gl.getUniformLocation(program, 'u_resolution')
			};

			Object.keys(uniforms).forEach((key) => {
				this.uniformLocations[key] = gl.getUniformLocation(program, key);
			});

			this.currentFrame = 0;
			this.speed = speed;
			this.currentSpeed = speed;
			this.lastRenderTime = performance.now();
			this.rafId = null;

			this.setUniforms(uniforms);

			this.resizeObserver = new ResizeObserver(() => this.handleResize());
			this.resizeObserver.observe(this.parentElement);
			this.handleResize();
			this.start();
		}

		setUniforms(uniforms) {
			if (!this.gl || !this.program) return;
			this.gl.useProgram(this.program);
			Object.entries(uniforms).forEach(([key, val]) => {
				const loc = this.uniformLocations[key];
				if (!loc) return;
				if (Array.isArray(val)) {
					if (val.length === 2) this.gl.uniform2fv(loc, val);
					else if (val.length === 3) this.gl.uniform3fv(loc, val);
					else if (val.length === 4) this.gl.uniform4fv(loc, val);
				} else if (typeof val === 'number') {
					this.gl.uniform1f(loc, val);
				}
			});
		}

		handleResize() {
			if (!this.canvasElement || !this.gl) return;
			const rect = this.parentElement.getBoundingClientRect();
			const dpr = Math.max(1, window.devicePixelRatio || 1);
			const width = Math.round(rect.width * dpr);
			const height = Math.round(rect.height * dpr);

			if (this.canvasElement.width !== width || this.canvasElement.height !== height) {
				this.canvasElement.width = width;
				this.canvasElement.height = height;
				this.gl.viewport(0, 0, width, height);
				this.gl.useProgram(this.program);
				this.gl.uniform2f(this.uniformLocations.u_resolution, width, height);
				this.gl.uniform1f(this.uniformLocations.u_pixelRatio, dpr);
			}
		}

		setSpeed(s) {
			this.speed = s;
			this.currentSpeed = s;
		}

		render = (now) => {
			if (!this.gl || !this.program) return;
			const dt = now - this.lastRenderTime;
			this.lastRenderTime = now;

			if (this.currentSpeed !== 0) {
				this.currentFrame += dt * this.currentSpeed;
			}

			this.gl.clear(this.gl.COLOR_BUFFER_BIT);
			this.gl.useProgram(this.program);
			this.gl.uniform1f(this.uniformLocations.u_time, this.currentFrame * 0.001);
			this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

			if (this.currentSpeed !== 0) {
				this.rafId = requestAnimationFrame(this.render);
			} else {
				this.rafId = null;
			}
		};

		start() {
			if (this.rafId === null && this.currentSpeed !== 0) {
				this.lastRenderTime = performance.now();
				this.rafId = requestAnimationFrame(this.render);
			}
		}

		stop() {
			if (this.rafId !== null) {
				cancelAnimationFrame(this.rafId);
				this.rafId = null;
			}
		}

		dispose() {
			this.stop();
			if (this.resizeObserver) {
				this.resizeObserver.disconnect();
			}
			if (this.gl && this.program) {
				this.gl.deleteProgram(this.program);
			}
			if (this.canvasElement) {
				this.canvasElement.remove();
			}
		}
	}

	/** @type {ShaderInstance | null} */
	let shaderInstance = null;

	let computedUniforms = $derived({
		u_colorBack: getShaderColorFromString(background),
		u_colorFront: getShaderColorFromString(color),
		u_shape: DitheringShapes[shape] || 6,
		u_type: DitheringTypes[type] || 3,
		u_pxSize: clampVal(size, 10, 200, 34) / 10,
		u_fit: ShaderFitOptions.cover,
		u_scale: clampVal(scale, 1, 200, 32) / 100,
		u_rotation: 0,
		u_offsetX: clampVal(offsetX, -100, 100, 0) / 100,
		u_offsetY: clampVal(offsetY, -100, 100, 0) / 100,
		u_originX: 0.5,
		u_originY: 0.5,
		u_worldWidth: 0,
		u_worldHeight: 0
	});

	let computedSpeed = $derived(
		isInView ? clampVal(speed, 1, 100, 56) / 20 : 0
	);

	onMount(() => {
		if (!containerRef) return;

		const observer = new IntersectionObserver(([entry]) => {
			isInView = entry.isIntersecting;
		});
		observer.observe(containerRef);

		shaderInstance = new ShaderInstance(containerRef, computedUniforms, computedSpeed);

		return () => {
			observer.disconnect();
			shaderInstance?.dispose();
			shaderInstance = null;
		};
	});

	$effect(() => {
		const uniforms = computedUniforms;
		if (shaderInstance) {
			shaderInstance.setUniforms(uniforms);
		}
	});

	$effect(() => {
		const spd = computedSpeed;
		if (shaderInstance) {
			shaderInstance.setSpeed(spd);
		}
	});
</script>

<div
	bind:this={containerRef}
	class="relative w-full h-full overflow-hidden pointer-events-none {className}"
></div>
