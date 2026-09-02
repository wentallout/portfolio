<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	type ActiveShard = {
		wrapper: HTMLDivElement;
		x: number;
		y: number;
		vx: number;
		vy: number;
		rot: number;
		av: number;
	};

	let shards = $state<ActiveShard[]>([]);
	let cracks: HTMLDivElement[] = [];
	let reduceMotion = false;
	let lastTick = 0;
	let ticker: (() => void) | null = null;

	function rand(min: number, max: number) {
		return min + Math.random() * (max - min);
	}

	function ensureTicker() {
		if (ticker) return;
		ticker = () => {
			const now = performance.now();
			const delta = lastTick ? (now - lastTick) / 1000 : 0.016;
			lastTick = now;
			const d = Math.min(delta, 0.033);
			let alive = 0;
			for (const s of shards) {
				s.vy += 900 * d;
				s.x += s.vx * d;
				s.y += s.vy * d;
				s.rot += s.av * d * 60;
				gsap.set(s.wrapper, { x: s.x, y: s.y, rotation: s.rot });
				if (s.y > window.innerHeight * 0.7) {
					gsap.set(s.wrapper, { opacity: Math.max(0, 1 - (s.y - window.innerHeight * 0.7) / 220) });
				}
				if (s.y < window.innerHeight + 260) alive++;
				else s.wrapper.remove();
			}
			shards = shards.filter((s) => s.y < window.innerHeight + 260);
			if (alive === 0 && ticker) {
				gsap.ticker.remove(ticker);
				ticker = null;
				lastTick = 0;
			}
		};
		gsap.ticker.add(ticker);
	}

	function shakeScreen() {
		const main = document.getElementById('main-content');
		if (!main || reduceMotion) return;
		gsap.killTweensOf(main);
		const tl = gsap.timeline();
		tl.to(main, { x: 2, y: -1, duration: 0.05 })
			.to(main, { x: -2, y: 1, duration: 0.05 })
			.to(main, { x: 1, y: 0.5, duration: 0.04 })
			.to(main, { x: 0, y: 0, duration: 0.06, ease: 'power2.out' });
	}

	function spawnGlassCrack(cx: number, cy: number) {
		const size = 72;
		const pageX = window.scrollX + cx;
		const pageY = window.scrollY + cy;
		const wrap = document.createElement('div');
		wrap.className = 'glass-crack';
		Object.assign(wrap.style, {
			position: 'absolute',
			left: pageX - size / 2 + 'px',
			top: pageY - size / 2 + 'px',
			width: size + 'px',
			height: size + 'px',
			pointerEvents: 'none',
			zIndex: '9997',
			opacity: '0'
		} as CSSStyleDeclaration);
		document.body.appendChild(wrap);
		cracks.push(wrap);
		if (cracks.length > 18) {
			const old = cracks.shift()!;
			gsap.to(old, { opacity: 0, duration: 0.6, onComplete: () => old.remove() });
		}
		const ns = 'http://www.w3.org/2000/svg';
		const svg = document.createElementNS(ns, 'svg') as unknown as SVGSVGElement;
		svg.setAttribute('width', String(size));
		svg.setAttribute('height', String(size));
		svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
		(svg.style as CSSStyleDeclaration).overflow = 'visible';
		wrap.appendChild(svg as unknown as HTMLElement);
		const cx0 = size / 2;
		const cy0 = size / 2;
		const branches = 3 + Math.floor(Math.random() * 2);
		for (let i = 0; i < branches; i++) {
			const baseAng = (i / branches) * Math.PI * 2 + rand(-0.35, 0.35);
			const len = rand(18, 30);
			const midLen = len * rand(0.45, 0.62);
			const midAng = baseAng + rand(-0.25, 0.25);
			const x1 = cx0 + Math.cos(midAng) * midLen + rand(-2, 2);
			const y1 = cy0 + Math.sin(midAng) * midLen + rand(-2, 2);
			const x2 = cx0 + Math.cos(baseAng) * len + rand(-1.5, 1.5);
			const y2 = cy0 + Math.sin(baseAng) * len + rand(-1.5, 1.5);
			const p = document.createElementNS(ns, 'path');
			p.setAttribute('d', `M${cx0} ${cy0} L${x1} ${y1} L${x2} ${y2}`);
			p.setAttribute('fill', 'none');
			p.setAttribute('stroke', 'rgba(255,255,255,0.52)');
			p.setAttribute('stroke-width', '0.7');
			p.setAttribute('stroke-linecap', 'round');
			p.setAttribute('stroke-linejoin', 'round');
			(p.style as CSSStyleDeclaration).filter =
				'drop-shadow(0 0 1px rgba(255,255,255,0.65)) drop-shadow(0 0 2px rgba(180,220,255,0.22))';
			(p.style as CSSStyleDeclaration).opacity = '0.85';
			p.style.mixBlendMode = 'screen' as unknown as string;
			svg.appendChild(p);
			const p2 = document.createElementNS(ns, 'path');
			p2.setAttribute('d', `M${cx0} ${cy0} L${x1} ${y1} L${x2} ${y2}`);
			p2.setAttribute('fill', 'none');
			p2.setAttribute('stroke', 'color-mix(in oklch, var(--foreground) 18%, transparent)');
			p2.setAttribute('stroke-width', '0.45');
			p2.setAttribute('stroke-linecap', 'round');
			p2.style.opacity = '0.32';
			svg.insertBefore(p2, p);
			if (Math.random() > 0.45) {
				const bAng = baseAng + rand(0.7, 1.1) * (Math.random() > 0.5 ? 1 : -1);
				const bLen = rand(6, 11);
				const bx = x1 + Math.cos(bAng) * bLen;
				const by = y1 + Math.sin(bAng) * bLen;
				const bp = document.createElementNS(ns, 'path');
				bp.setAttribute('d', `M${x1} ${y1} L${bx} ${by}`);
				bp.setAttribute('fill', 'none');
				bp.setAttribute('stroke', 'rgba(255,255,255,0.38)');
				bp.setAttribute('stroke-width', '0.5');
				bp.setAttribute('stroke-linecap', 'round');
				bp.style.filter = 'drop-shadow(0 0 0.6px rgba(255,255,255,0.5))';
				bp.style.opacity = '0.6';
				svg.appendChild(bp);
			}
		}
		const dot = document.createElementNS(ns, 'circle');
		dot.setAttribute('cx', String(cx0));
		dot.setAttribute('cy', String(cy0));
		dot.setAttribute('r', '0.9');
		dot.setAttribute('fill', 'rgba(255,255,255,0.72)');
		(dot.style as CSSStyleDeclaration).filter = 'blur(0.3px)';
		svg.appendChild(dot);
		gsap.fromTo(wrap, { opacity: 0, scale: 0.88 }, { opacity: 1, scale: 1, duration: 0.22, ease: 'power2.out' });
		setTimeout(() => {
			if (wrap.parentElement) gsap.to(wrap, { opacity: 0.42, duration: 0.5 });
		}, 300);
		setTimeout(() => {
			if (!wrap.parentElement) return;
			gsap.to(wrap, {
				opacity: 0,
				duration: 0.35,
				onComplete: () => {
					wrap.remove();
					cracks = cracks.filter((c) => c !== wrap);
				}
			});
		}, 2000);
	}

	function findTarget(x: number, y: number): HTMLElement | null {
		const els = document.elementsFromPoint(x, y);
		for (const el of els) {
			if (!(el instanceof HTMLElement)) continue;
			if (el.classList.contains('shard-wrapper')) continue;
			if (el.closest('[data-no-shatter]')) continue;
			if (el.id === 'main-content') continue;
			const rect = el.getBoundingClientRect();
			if (rect.width < 12 || rect.height < 12) continue;
			if (rect.width > window.innerWidth * 0.95 && rect.height > window.innerHeight * 0.7) continue;
			const style = getComputedStyle(el);
			if (style.visibility === 'hidden' || style.opacity === '0') continue;
			if (
				el.matches('a, button, [role="button"], .card, [data-shatter]') ||
				style.backgroundColor !== 'rgba(0, 0, 0, 0)' ||
				style.borderWidth !== '0px' ||
				style.boxShadow !== 'none'
			) {
				return el;
			}
			const parent = el.closest('a, button, [class*="card"], [class*="Card"], section, article, div') as HTMLElement | null;
			if (parent) {
				const pr = parent.getBoundingClientRect();
				if (pr.width >= 40 && pr.height >= 30 && pr.width <= 600 && pr.height <= 500) return parent;
			}
			return el;
		}
		return null;
	}

	function deepCloneWithStyles(source: HTMLElement): HTMLElement {
		const clone = source.cloneNode(true) as HTMLElement;
		const srcNodes = [source, ...Array.from(source.querySelectorAll<HTMLElement>('*'))];
		const cloneNodes = [clone, ...Array.from(clone.querySelectorAll<HTMLElement>('*'))];
		srcNodes.forEach((src, i) => {
			const dst = cloneNodes[i];
			if (!dst) return;
			const cs = getComputedStyle(src);
			// copy critical visual properties to preserve text exactly
			dst.style.background = cs.background;
			dst.style.backgroundColor = cs.backgroundColor;
			dst.style.color = cs.color;
			dst.style.border = cs.border;
			dst.style.borderColor = cs.borderColor;
			dst.style.borderWidth = cs.borderWidth;
			dst.style.borderStyle = cs.borderStyle;
			dst.style.borderRadius = cs.borderRadius;
			dst.style.boxShadow = cs.boxShadow;
			dst.style.font = cs.font;
			dst.style.fontSize = cs.fontSize;
			dst.style.fontWeight = cs.fontWeight;
			dst.style.fontFamily = cs.fontFamily;
			dst.style.lineHeight = cs.lineHeight;
			dst.style.letterSpacing = cs.letterSpacing;
			dst.style.textAlign = cs.textAlign;
			dst.style.padding = cs.padding;
			dst.style.margin = cs.margin;
			dst.style.display = cs.display;
			dst.style.opacity = cs.opacity;
		});
		return clone;
	}

	function generateSquareClip(cx: number, cy: number, w: number, h: number): string {
		const hw = w / 2;
		const hh = h / 2;
		const j = 6;
		const pts = [
			`${cx - hw + rand(1, j)}px ${cy - hh + rand(1, j)}px`,
			`${cx + hw - rand(1, j)}px ${cy - hh + rand(1, j)}px`,
			`${cx + hw - rand(1, j)}px ${cy + hh - rand(1, j)}px`,
			`${cx - hw + rand(1, j)}px ${cy + hh - rand(1, j)}px`
		];
		return `polygon(${pts.join(', ')})`;
	}

	function spawnImpactDust(cx: number, cy: number) {
		for (let i = 0; i < 7; i++) {
			const d = document.createElement('div');
			const size = rand(2, 6);
			Object.assign(d.style, {
				position: 'fixed',
				left: cx + rand(-6, 6) + 'px',
				top: cy + rand(-6, 6) + 'px',
				width: size + 'px',
				height: size + 'px',
				borderRadius: '50%',
				background: `color-mix(in oklch, var(--muted-foreground) ${rand(35, 65)}%, transparent)`,
				filter: 'blur(0.6px)',
				pointerEvents: 'none',
				zIndex: '9998',
				opacity: '0.7'
			} as CSSStyleDeclaration);
			document.body.appendChild(d);
			gsap.to(d, {
				x: rand(-22, 22),
				y: rand(-18, 18) - 10,
				scale: rand(0.6, 1.4),
				opacity: 0,
				duration: rand(0.5, 0.9),
				ease: 'power1.out',
				delay: rand(0, 0.08),
				onComplete: () => d.remove()
			});
		}
		// impact smoke puff
		for (let i = 0; i < 2; i++) {
			const s = document.createElement('div');
			Object.assign(s.style, {
				position: 'fixed',
				left: cx + rand(-4, 4) + 'px',
				top: cy + rand(-4, 4) + 'px',
				width: rand(16, 28) + 'px',
				height: rand(16, 28) + 'px',
				borderRadius: '50%',
				background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45) 0%, rgba(180,180,180,0.22) 40%, transparent 70%)',
				filter: 'blur(1px)',
				pointerEvents: 'none',
				zIndex: '9998',
				opacity: '0.35'
			} as CSSStyleDeclaration);
			document.body.appendChild(s);
			gsap.to(s, {
				y: rand(-14, -26),
				x: rand(-10, 10),
				scale: 1.8,
				opacity: 0,
				duration: rand(0.6, 0.85),
				ease: 'power1.out',
				delay: i * 0.05,
				onComplete: () => s.remove()
			});
		}
	}

	function spawnRealisticShard(cx: number, cy: number) {
		const target = findTarget(cx, cy);
		if (!target) {
			spawnFallbackShards(cx, cy);
			return;
		}
		const rect = target.getBoundingClientRect();
		const localX = cx - rect.left;
		const localY = cy - rect.top;

		spawnImpactDust(cx, cy);

		// Multiple small fractures — real tempered glass shatters into 5-7 chunks around impact
		const count = 5 + Math.floor(rand(0, 3)); // 5-7 pieces
		for (let n = 0; n < count; n++) {
			const side = rand(14, 28);
			// distribute around impact point in circular pattern
			const ang = (n / count) * Math.PI * 2 + rand(-0.5, 0.5);
			const dist = rand(6, 18);
			const fragX = Math.max(side / 2 + 3, Math.min(rect.width - side / 2 - 3, localX + Math.cos(ang) * dist + rand(-4, 4)));
			const fragY = Math.max(side / 2 + 3, Math.min(rect.height - side / 2 - 3, localY + Math.sin(ang) * dist + rand(-4, 4)));
			const clip = generateSquareClip(fragX, fragY, side, side);

			const wrapper = document.createElement('div');
			wrapper.className = 'shard-wrapper';
			Object.assign(wrapper.style, {
				position: 'fixed',
				left: rect.left + 'px',
				top: rect.top + 'px',
				width: rect.width + 'px',
				height: rect.height + 'px',
				clipPath: clip,
				overflow: 'hidden',
				pointerEvents: 'none',
				zIndex: '9999',
				willChange: 'transform, opacity',
				border: '0.5px solid color-mix(in oklch, var(--foreground) 10%, transparent)',
				boxShadow:
					'0 0 0 1px color-mix(in oklch, var(--foreground) 16%, transparent), 0 6px 18px rgba(0,0,0,0.28), 0 1px 4px rgba(0,0,0,0.18)',
				transform: 'translate(0,0)'
			} as CSSStyleDeclaration);

			const clone = deepCloneWithStyles(target);
			clone.style.margin = '0';
			clone.style.width = rect.width + 'px';
			clone.style.height = rect.height + 'px';
			clone.style.maxWidth = rect.width + 'px';
			clone.style.maxHeight = rect.height + 'px';
			clone.style.boxSizing = 'border-box';
			clone.style.pointerEvents = 'none';
			// keep true colors — no invert, add subtle glass gloss
			clone.style.filter = 'brightness(1.02) contrast(1.04)';
			// prevent svelte-toc from counting cloned headings (headingSelector=".prose h2,h3,h4")
			// clones retain .prose class and headings — mark them toc-exclude + strip .prose
			clone.classList.remove('prose');
			clone.classList.add('toc-exclude');
			clone.setAttribute('data-no-shatter', '');
			clone.setAttribute('aria-hidden', 'true');
			clone.querySelectorAll('h2,h3,h4').forEach((h) => h.classList.add('toc-exclude'));
			// also hide from svelte-toc observer by marking wrapper
			wrapper.setAttribute('data-no-shatter', '');
			wrapper.setAttribute('aria-hidden', 'true');

			wrapper.appendChild(clone);

			// glass highlight / reflection
			const gloss = document.createElement('div');
			Object.assign(gloss.style, {
				position: 'absolute',
				inset: '0',
				pointerEvents: 'none',
				background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 42%, transparent 58%, rgba(255,255,255,0.08) 100%)',
				mixBlendMode: 'screen',
				opacity: '0.9'
			} as CSSStyleDeclaration);
			wrapper.appendChild(gloss);

			// scorch burn edge — subtle
			const edge = document.createElement('div');
			Object.assign(edge.style, {
				position: 'absolute',
				inset: '-0.5px',
				pointerEvents: 'none',
				border: '1px solid color-mix(in oklch, var(--foreground) 12%, transparent)',
				opacity: '0.7'
			} as CSSStyleDeclaration);
			wrapper.appendChild(edge);

			document.body.appendChild(wrapper);

			const state: ActiveShard = {
				wrapper,
				x: 0,
				y: 0,
				vx: Math.cos(ang) * rand(70, 150) + rand(-20, 20),
				vy: Math.sin(ang) * rand(30, 80) - rand(40, 75),
				rot: 0,
				av: rand(-9, 9)
			};
			shards.push(state);
			gsap.fromTo(wrapper, { scale: 0.88 }, { scale: 1, duration: 0.13, ease: 'power2.out', delay: n * 0.015 });
			setTimeout(() => {
				if (wrapper.parentElement) {
					gsap.to(wrapper, { opacity: 0, duration: 0.32, onComplete: () => wrapper.remove() });
					shards = shards.filter((s) => s.wrapper !== wrapper);
				}
			}, 2000);
		}
		ensureTicker();
		// SOUND HOOK: play shatter sound here
	}

	function spawnFallbackShards(cx: number, cy: number) {
		spawnImpactDust(cx, cy);
		const count = 4 + Math.floor(rand(0, 3));
		for (let n = 0; n < count; n++) {
			const side = rand(14, 26);
			const wrapper = document.createElement('div');
			wrapper.className = 'shard-wrapper';
			Object.assign(wrapper.style, {
				position: 'fixed',
				left: cx - side / 2 + rand(-8, 8) + 'px',
				top: cy - side / 2 + rand(-8, 8) + 'px',
				width: side + 'px',
				height: side + 'px',
				background: 'color-mix(in oklch, var(--card) 88%, var(--foreground))',
				border: '0.5px solid var(--border)',
				borderRadius: '2px',
				boxShadow: '0 0 0 1px rgba(0,0,0,0.14), 0 6px 14px rgba(0,0,0,0.28)',
				pointerEvents: 'none',
				zIndex: '9999',
				willChange: 'transform',
				transform: `rotate(${rand(-10, 10)}deg)`
			} as CSSStyleDeclaration);
			// small gloss
			const gloss = document.createElement('div');
			Object.assign(gloss.style, {
				position: 'absolute',
				inset: '0',
				background: 'linear-gradient(135deg, rgba(255,255,255,0.28) 0%, transparent 55%)',
				pointerEvents: 'none'
			} as CSSStyleDeclaration);
			wrapper.appendChild(gloss);
			document.body.appendChild(wrapper);
			const s: ActiveShard = {
				wrapper,
				x: 0,
				y: 0,
				vx: Math.cos((n / count) * Math.PI * 2) * rand(70, 130) + rand(-10, 10),
				vy: rand(-70, -20),
				rot: 0,
				av: rand(-8, 8)
			};
			shards.push(s);
			gsap.fromTo(wrapper, { scale: 0.85 }, { scale: 1, duration: 0.12, ease: 'power2.out', delay: n * 0.02 });
			setTimeout(() => {
				if (wrapper.parentElement) {
					gsap.to(wrapper, { opacity: 0, duration: 0.3, onComplete: () => wrapper.remove() });
					shards = shards.filter((sh) => sh.wrapper !== wrapper);
				}
			}, 2000);
		}
		ensureTicker();
	}

	function isMobileDevice(): boolean {
		if (typeof window === 'undefined') return false;
		const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		const small = window.innerWidth <= 768;
		const ua = navigator.userAgent || (navigator.vendor as string) || '';
		return (hasTouch && small) || /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase());
	}

	onMount(() => {
		if (isMobileDevice()) return;
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const onShoot = (e: Event) => {
			const d = (e as CustomEvent).detail as { x: number; y: number };
			if (!d) return;
			// SOUND HOOK: play shoot/crack sound
			// new Audio('/sounds/crack.mp3').play().catch(()=>{});
			shakeScreen();
			spawnGlassCrack(d.x, d.y);
			if (!reduceMotion) spawnRealisticShard(d.x, d.y);
		};
		window.addEventListener('game:shoot', onShoot as EventListener);
		return () => {
			window.removeEventListener('game:shoot', onShoot as EventListener);
			if (ticker) gsap.ticker.remove(ticker);
		};
	});
</script>

<!-- no visible container needed; shards are appended to body -->
