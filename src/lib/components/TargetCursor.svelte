<script lang="ts">
import { gsap } from 'gsap';
import { tryShoot, reloading } from '#lib/stores/revolver.svelte.js';
import { get } from 'svelte/store';

	type Props = {
		targetSelector?: string;
		spinDuration?: number;
		hideDefaultCursor?: boolean;
		hoverDuration?: number;
		parallaxOn?: boolean;
		enableShooting?: boolean;
	};

	let {
		targetSelector = '.cursor-target',
		spinDuration = 2,
		hideDefaultCursor = true,
		hoverDuration = 0.2,
		parallaxOn = true,
		enableShooting = true
	}: Props = $props();

	// Programmatic auto-target: broaden default `.cursor-target` to all interactive
	// elements so you don't have to spam `cursor-target` classes manually.
	// Keeps user-provided selector + adds globals. Covers: links, buttons, cards (a-wrapped),
	// inputs, and any [data-cursor-target] opt-in.
	const GLOBAL_TARGETS =
		'a, button, [role="button"], input:not([type="hidden"]):not(:disabled), textarea:not(:disabled), select:not(:disabled), summary, label, [tabindex]:not([tabindex="-1"])';
	const effectiveSelector = $derived(
		targetSelector.trim() === '.cursor-target'
			? `${GLOBAL_TARGETS}, ${targetSelector}, [data-cursor-target]`
			: targetSelector
	);

	// svelte-ignore non_reactive_update
	let cursor: HTMLDivElement;
	// svelte-ignore non_reactive_update
	let dot: HTMLDivElement;
	let bullet: HTMLDivElement;
	// svelte-ignore non_reactive_update
	let casing: HTMLDivElement;
	// svelte-ignore non_reactive_update
	let barrelIcon: HTMLDivElement;

	const isMobile = (() => {
		if (typeof window === 'undefined') return false;
		const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		const small = window.innerWidth <= 768;
		const ua =
			navigator.userAgent ||
			navigator.vendor ||
			(window as unknown as { opera?: string }).opera ||
			'';
		const re = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
		return (hasTouch && small) || re.test(ua.toLowerCase());
	})();

	// Barrel cursor during reload — don't hide default cursor, just swap visuals; never block clicks
	let unsubscribeReload: (() => void) | null = null;

	// Only a link or button press counts as a "real shoot"
	const SHOOT_TARGETS = 'a[href], button:not(:disabled), [role="button"]:not([aria-disabled="true"])';

	$effect(() => {
		if (isMobile || !cursor) return;
		// crosshair is only visible for 2s after a real shoot
		let crosshairActive = false;
		let crosshairHideTimer: ReturnType<typeof setTimeout> | null = null;

		const getCorners = () => cursor.querySelectorAll<HTMLDivElement>('.target-cursor-corner');

		const setCrosshairVisible = (visible: boolean) => {
			if (!cursor || !dot) return;
			const corners = getCorners();
			// don't interfere while reloading — barrel is shown instead
			if (get(reloading)) return;
			if (visible) {
				gsap.to(dot, { opacity: 1, scale: 1, duration: 0.18, overwrite: true });
				corners.forEach((c) => gsap.to(c, { opacity: 1, scale: 1, duration: 0.18, overwrite: true }));
			} else {
				gsap.to(dot, { opacity: 0, scale: 0, duration: 0.15, overwrite: true });
				corners.forEach((c) => gsap.to(c, { opacity: 0, scale: 0, duration: 0.15, overwrite: true }));
			}
		};

		const triggerCrosshair = () => {
			crosshairActive = true;
			if (crosshairHideTimer) {
				clearTimeout(crosshairHideTimer);
				crosshairHideTimer = null;
			}
			setCrosshairVisible(true);
			crosshairHideTimer = setTimeout(() => {
				crosshairActive = false;
				setCrosshairVisible(false);
				crosshairHideTimer = null;
			}, 2000);
		};

		// initially hide crosshair — only shown for 2s after a real shoot
		const _initialCorners = getCorners();
		if (dot) gsap.set(dot, { opacity: 0, scale: 0 });
		_initialCorners.forEach((c) => gsap.set(c, { opacity: 0, scale: 0 }));
		if (barrelIcon) gsap.set(barrelIcon, { opacity: 0, scale: 0.7, rotation: 0 });

		// subscribe to reloading to swap cursor -> barrel
		unsubscribeReload?.();
		unsubscribeReload = reloading.subscribe((isReloadingNow) => {
			if (!cursor || !dot) return;
			const corners = getCorners();
			if (isReloadingNow) {
				gsap.to(dot, { opacity: 0, scale: 0, duration: 0.15, overwrite: true });
				corners.forEach((c) => gsap.to(c, { opacity: 0, scale: 0, duration: 0.15, overwrite: true }));
				if (barrelIcon) gsap.to(barrelIcon, { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(1.4)', overwrite: true });
				if (barrelIcon) {
					gsap.to(barrelIcon, { rotation: 360, duration: 0.9, ease: 'power2.inOut', repeat: -1 });
				}
			} else {
				if (barrelIcon) {
					gsap.killTweensOf(barrelIcon);
					gsap.to(barrelIcon, { opacity: 0, scale: 0.7, rotation: 0, duration: 0.15, overwrite: true });
				}
				if (crosshairActive) {
					gsap.to(dot, { opacity: 1, scale: 1, duration: 0.15, overwrite: true });
					corners.forEach((c) => gsap.to(c, { opacity: 1, scale: 1, duration: 0.15, overwrite: true }));
				} else {
					gsap.to(dot, { opacity: 0, scale: 0, duration: 0.15, overwrite: true });
					corners.forEach((c) => gsap.to(c, { opacity: 0, scale: 0, duration: 0.15, overwrite: true }));
				}
			}
		});

		const corners = cursor.querySelectorAll<HTMLDivElement>('.target-cursor-corner');
		const constants = { borderWidth: 3, cornerSize: 12 };

		let activeTarget: Element | null = null;
		let currentLeaveHandler: (() => void) | null = null;
		let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
		let targetCornerPositions: { x: number; y: number }[] | null = null;
		const activeStrength = { current: 0 };
		let tickerFn: (() => void) | null = null;
		let spinTl: gsap.core.Timeline | undefined;

		const originalCursor = document.body.style.cursor;
		if (hideDefaultCursor) document.body.style.cursor = 'none';

		const cleanupTarget = (target: Element) => {
			if (currentLeaveHandler) target.removeEventListener('mouseleave', currentLeaveHandler);
			currentLeaveHandler = null;
		};

		gsap.set(cursor, {
			xPercent: -50,
			yPercent: -50,
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		});

		gsap.set(cursor, { rotation: 0 });

		tickerFn = () => {
			if (!targetCornerPositions || !cursor) return;
			const strength = activeStrength.current;
			if (strength === 0) return;
			const cx = gsap.getProperty(cursor, 'x') as number;
			const cy = gsap.getProperty(cursor, 'y') as number;
			Array.from(corners).forEach((corner, i) => {
				const curX = gsap.getProperty(corner, 'x') as number;
				const curY = gsap.getProperty(corner, 'y') as number;
				const tx = targetCornerPositions![i].x - cx;
				const ty = targetCornerPositions![i].y - cy;
				const finalX = curX + (tx - curX) * strength;
				const finalY = curY + (ty - curY) * strength;
				const dur = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;
				gsap.to(corner, {
					x: finalX,
					y: finalY,
					duration: dur,
					ease: dur === 0 ? 'none' : 'power1.out',
					overwrite: 'auto'
				});
			});
		};

		const moveHandler = (e: MouseEvent) => {
			gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power3.out' });
		};
		window.addEventListener('mousemove', moveHandler);

		const scrollHandler = () => {
			if (!activeTarget || !cursor) return;
			const mx = gsap.getProperty(cursor, 'x') as number;
			const my = gsap.getProperty(cursor, 'y') as number;
			const under = document.elementFromPoint(mx, my);
			const still =
				under && (under === activeTarget || under.closest(effectiveSelector) === activeTarget);
			if (!still) currentLeaveHandler?.();
		};
		window.addEventListener('scroll', scrollHandler, { passive: true });

		const mouseDown = () => {
			if (!dot) return;
			gsap.to(dot, { scale: 0.7, duration: 0.3 });
			gsap.to(cursor, { scale: 0.9, duration: 0.2 });
		};
		const mouseUp = () => {
			if (!dot) return;
			gsap.to(dot, { scale: 1, duration: 0.3 });
			gsap.to(cursor, { scale: 1, duration: 0.2 });
		};
		window.addEventListener('mousedown', mouseDown);
		window.addEventListener('mouseup', mouseUp);

		// Shooting: only on link/button press spawns bullet + 2s crosshair (revolver-limited)
		let lastShot = 0;
		const onShootClick = (e: MouseEvent) => {
			if (!enableShooting) return;
			if (e.button !== 0) return;
			// user only actually shoots when pressing a link or button
			const shootTarget = (e.target as Element)?.closest?.(SHOOT_TARGETS);
			if (!shootTarget) return;
			const now = Date.now();
			if (now - lastShot < 100) return;
			lastShot = now;

			// revolver ammo check — blocks shoot when empty/reloading and auto-triggers reload
			// Sound is handled globally by SfxProvider listening to `revolver:*` events
			if (!tryShoot()) {
				gsap.to(cursor, { x: '+=2', duration: 0.06, yoyo: true, repeat: 3, ease: 'power2.out' });
				return;
			}

			// only shows the crosshair for 2s when user actually shoots
			triggerCrosshair();

			// muzzle flash
			if (dot) {
				gsap.killTweensOf(dot);
				gsap.to(dot, { scale: 1.9, duration: 0.07, yoyo: true, repeat: 1, ease: 'power2.out' });
			}
			if (cursor) gsap.to(cursor, { scale: 1.18, duration: 0.07, yoyo: true, repeat: 1, ease: 'power2.out' });

			// realistic revolver bullet trail (brass + tip)
			if (bullet) {
				gsap.killTweensOf(bullet);
				gsap.set(bullet, { opacity: 1, scaleY: 1, y: 0, x: 0, scaleX: 1 });
				gsap.to(bullet, {
					y: -46,
					opacity: 0,
					scaleY: 0.6,
					duration: 0.28,
					ease: 'power2.out',
					overwrite: true
				});
			}
			// casing eject puff
			if (casing) {
				gsap.killTweensOf(casing);
				gsap.set(casing, { opacity: 1, x: 0, y: 0, rotation: 0 });
				gsap.to(casing, {
					x: 14 + Math.random() * 10,
					y: 10 + Math.random() * 8,
					rotation: 180 + Math.random() * 180,
					opacity: 0,
					duration: 0.45,
					ease: 'power1.out'
				});
			}
			// real muzzle smoke at cursor (gunpowder puff)
			{
				const mx = e.clientX;
				const my = e.clientY;
				for (let i = 0; i < 2; i++) {
					const puff = document.createElement('div');
					Object.assign(puff.style, {
						position: 'fixed',
						left: mx + (Math.random() - 0.5) * 8 + 'px',
						top: my + (Math.random() - 0.5) * 8 + 'px',
						width: 10 + Math.random() * 14 + 'px',
						height: 10 + Math.random() * 14 + 'px',
						borderRadius: '50%',
						background:
							'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.65) 0%, rgba(200,200,195,0.38) 38%, transparent 70%)',
						filter: 'blur(0.8px)',
						pointerEvents: 'none',
						zIndex: '9998',
						opacity: '0.5'
					} as CSSStyleDeclaration);
					document.body.appendChild(puff);
					gsap.to(puff, {
						y: -18 - Math.random() * 14,
						x: (Math.random() - 0.5) * 12,
						scale: 1.5,
						opacity: 0,
						duration: 0.45 + Math.random() * 0.2,
						ease: 'power1.out',
						delay: i * 0.04,
						onComplete: () => puff.remove()
					});
				}
			}

			window.dispatchEvent(new CustomEvent('game:shoot', { detail: { x: e.clientX, y: e.clientY } }));
		};
		window.addEventListener('click', onShootClick, { capture: true });

		const enterHandler = (ev: MouseEvent) => {
			const direct = ev.target as Element;
			let target: Element | null = null;
			let cur: Element | null = direct;
			while (cur && cur !== document.body) {
				if (cur.matches(effectiveSelector)) {
					target = cur;
					break;
				}
				cur = cur.parentElement;
			}
			if (!target || !cursor) return;
			if (activeTarget === target) return;
			if (activeTarget) cleanupTarget(activeTarget);
			if (resumeTimeout) {
				clearTimeout(resumeTimeout);
				resumeTimeout = null;
			}
			activeTarget = target;
			Array.from(corners).forEach((c) => gsap.killTweensOf(c));
			gsap.killTweensOf(cursor, 'rotation');
			spinTl?.pause();
			gsap.set(cursor, { rotation: 0 });

			const rect = target.getBoundingClientRect();
			const { borderWidth, cornerSize } = constants;
			const cx = gsap.getProperty(cursor, 'x') as number;
			const cy = gsap.getProperty(cursor, 'y') as number;

			targetCornerPositions = [
				{ x: rect.left - borderWidth, y: rect.top - borderWidth },
				{ x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
				{ x: rect.right + borderWidth - cornerSize, y: rect.bottom + borderWidth - cornerSize },
				{ x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize }
			];

			gsap.ticker.add(tickerFn!);
			gsap.to(activeStrength, { current: 1, duration: hoverDuration, ease: 'power2.out' });

			Array.from(corners).forEach((corner, i) => {
				gsap.to(corner, {
					x: targetCornerPositions![i].x - cx,
					y: targetCornerPositions![i].y - cy,
					duration: 0.2,
					ease: 'power2.out'
				});
			});

			const leaveHandler = () => {
				gsap.ticker.remove(tickerFn!);
				targetCornerPositions = null;
				gsap.set(activeStrength, { current: 0, overwrite: true });
				activeTarget = null;
				const cs = Array.from(corners);
				gsap.killTweensOf(cs);
				const { cornerSize } = constants;
				const positions = [
					{ x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
					{ x: cornerSize * 0.5, y: -cornerSize * 1.5 },
					{ x: cornerSize * 0.5, y: cornerSize * 0.5 },
					{ x: -cornerSize * 1.5, y: cornerSize * 0.5 }
				];
				const tl = gsap.timeline();
				cs.forEach((c, i) => {
					tl.to(c, { x: positions[i].x, y: positions[i].y, duration: 0.3, ease: 'power3.out' }, 0);
				});

				resumeTimeout = setTimeout(() => {
					if (!activeTarget && cursor) {
						gsap.set(cursor, { rotation: 0 });
					}
					resumeTimeout = null;
				}, 50);
				cleanupTarget(target!);
			};
			currentLeaveHandler = leaveHandler;
			target.addEventListener('mouseleave', leaveHandler);
		};

		window.addEventListener('mouseover', enterHandler as EventListener);

		// Programmatically spam `.cursor-target` onto all interactive elements
		// so existing CSS / selector logic keeps working without manual edits.
		// Runs once + on DOM mutations (SPA navigation, async content).
		const spamTargetClass = () => {
			try {
				document.querySelectorAll(GLOBAL_TARGETS).forEach((el) => {
					if (!el.classList.contains('cursor-target')) el.classList.add('cursor-target');
				});
			} catch {
				// ignore invalid selector edge cases
			}
		};
		spamTargetClass();
		const observer = new MutationObserver(spamTargetClass);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			if (crosshairHideTimer) clearTimeout(crosshairHideTimer);
			unsubscribeReload?.();
			observer.disconnect();
			if (tickerFn) gsap.ticker.remove(tickerFn);
			window.removeEventListener('mousemove', moveHandler);
			window.removeEventListener('mouseover', enterHandler as EventListener);
			window.removeEventListener('scroll', scrollHandler);
			window.removeEventListener('mousedown', mouseDown);
			window.removeEventListener('mouseup', mouseUp);
			window.removeEventListener('click', onShootClick, { capture: true } as unknown as EventListenerOptions);
			if (activeTarget) cleanupTarget(activeTarget);
			spinTl?.kill();
			document.body.style.cursor = originalCursor;
		};
	});
</script>

{#if !isMobile}
	<div
		bind:this={cursor}
		class="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]"
		style="will-change:transform;">
		<div
			bind:this={bullet}
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none"
			style="will-change:transform, opacity; width: 5px; height: 14px;">
			<div class="w-full h-[9px] rounded-[1px]" style="background: linear-gradient(90deg, #854d0e, #facc15 50%, #a16207); box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);"></div>
			<div class="w-[5px] h-[5px] mx-auto -mt-[1px]" style="background: #e5e7eb; clip-path: polygon(10% 0%, 90% 0%, 50% 100%); box-shadow: 0 1px 2px rgba(0,0,0,0.3);"></div>
		</div>
		<div
			bind:this={casing}
			class="absolute top-1/2 left-1/2 w-[4px] h-[7px] rounded-[1px] bg-amber-400 opacity-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 border border-amber-700"
			style="will-change:transform, opacity;">
		</div>
		<div
			bind:this={dot}
			class="absolute top-1/2 left-1/2 w-1 h-1 bg-foreground rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
			style="will-change:transform;">
		</div>
		<!-- Reload barrel — replaces dot/corners during reload -->
		<div
			bind:this={barrelIcon}
			class="absolute top-1/2 left-1/2 w-[28px] h-[28px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 scale-70"
			style="will-change:transform, opacity;">
			<div
				class="absolute inset-0 rounded-full"
				style="border: 1px solid var(--border); background: color-mix(in oklch, var(--muted) 72%, transparent);">
			</div>
			<div class="absolute inset-[3px] rounded-full flex items-center justify-center">
				{#each Array(6) as _, i (i)}
					<div
						class="absolute w-[5px] h-[5px] rounded-full"
						style="left:50%; top:50%; transform: translate(-50%,-50%) rotate({i * 60}deg) translateY(-8px); background: color-mix(in oklch, var(--muted-foreground) 70%, transparent); border: 0.5px solid var(--border);">
					</div>
				{/each}
				<div class="w-[5px] h-[5px] rounded-full" style="background: var(--muted-foreground); opacity:0.7;"></div>
			</div>
		</div>
		<div
			class="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[1px] border-foreground -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0 transition-colors duration-200"
			style="will-change:transform;">
		</div>
		<div
			class="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[1px] border-foreground translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0 transition-colors duration-200"
			style="will-change:transform;">
		</div>
		<div
			class="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[1px] border-foreground translate-x-1/2 translate-y-1/2 border-l-0 border-t-0 transition-colors duration-200"
			style="will-change:transform;">
		</div>
		<div
			class="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[1px] border-foreground -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0 transition-colors duration-200"
			style="will-change:transform;">
		</div>
	</div>
{/if}
