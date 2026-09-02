<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { bullets, reloading, maxBullets } from '#lib/stores/revolver.svelte.js';

	let cylinder: HTMLDivElement;
	let chambers: HTMLDivElement[] = [];
	let root: HTMLDivElement;
	let hideTimer: ReturnType<typeof setTimeout> | null = null;

	function showBriefly() {
		if (root) gsap.to(root, { opacity: 0.55, duration: 0.18, overwrite: true });
		if (hideTimer) clearTimeout(hideTimer);
		hideTimer = setTimeout(() => {
			if (root) gsap.to(root, { opacity: 0, duration: 0.4, overwrite: true });
		}, 1000);
	}

	function spawnBarrelSmoke() {
		if (!root) return;
		const rect = root.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + 8;
		for (let i = 0; i < 3; i++) {
			const puff = document.createElement('div');
			Object.assign(puff.style, {
				position: 'fixed',
				left: cx + (Math.random() - 0.5) * 10 + 'px',
				top: cy + (Math.random() - 0.5) * 6 + 'px',
				width: 14 + Math.random() * 18 + 'px',
				height: 14 + Math.random() * 18 + 'px',
				borderRadius: '50%',
				background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55) 0%, color-mix(in oklch, var(--muted-foreground) 22%, transparent) 45%, transparent 72%)',
				filter: 'blur(1.2px)',
				pointerEvents: 'none',
				zIndex: '9998',
				opacity: '0.45'
			} as CSSStyleDeclaration);
			document.body.appendChild(puff);
			gsap.to(puff, {
				y: -28 - Math.random() * 22,
				x: (Math.random() - 0.5) * 18,
				scale: 1.6 + Math.random() * 0.7,
				opacity: 0,
				duration: 0.7 + Math.random() * 0.35,
				ease: 'power1.out',
				delay: i * 0.06,
				onComplete: () => puff.remove()
			});
		}
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
		if (root) gsap.set(root, { opacity: 0 });

		const onShoot = () => {
			showBriefly();
			spawnBarrelSmoke();
			if (!cylinder) return;
			gsap.killTweensOf(cylinder);
			gsap.to(cylinder, {
				rotation: `+=60`,
				duration: 0.22,
				ease: 'power2.out',
				transformOrigin: '50% 50%'
			});
			gsap.fromTo(cylinder, { scale: 0.97 }, { scale: 1, duration: 0.16, ease: 'back.out(1.4)' });
		};

		const onReloadStart = () => {
			showBriefly();
			if (!cylinder) return;
			gsap.to(cylinder, { rotation: `+=360`, duration: 0.9, ease: 'power2.inOut' });
		};

		window.addEventListener('revolver:shoot', onShoot as EventListener);
		window.addEventListener('revolver:reload-start', onReloadStart as EventListener);
		window.addEventListener('revolver:reload-done', onReloadStart as EventListener);
		return () => {
			window.removeEventListener('revolver:shoot', onShoot as EventListener);
			window.removeEventListener('revolver:reload-start', onReloadStart as EventListener);
			window.removeEventListener('revolver:reload-done', onReloadStart as EventListener);
			if (hideTimer) clearTimeout(hideTimer);
		};
	});
</script>

<div
	bind:this={root}
	class="fixed bottom-3 left-3 z-[9999] pointer-events-none select-none"
	aria-hidden="true"
	style="opacity: 0;">
	<div class="relative w-[52px] h-[52px] flex items-center justify-center">
		<div
			class="absolute inset-0 rounded-full"
			style="border: 1px solid var(--border); background: color-mix(in oklch, var(--muted) 55%, transparent);">
		</div>
		<div
			bind:this={cylinder}
			class="absolute inset-[3px] rounded-full will-change-transform"
			style="transform-origin: 50% 50%;">
			{#each Array(maxBullets) as _, i (i)}
				<div
					bind:this={chambers[i]}
					class="absolute w-[10px] h-[10px] rounded-full flex items-center justify-center"
					style="
						left: 50%; top: 50%;
						transform: translate(-50%, -50%) rotate({i * 60}deg) translateY(-15px) rotate(-{i * 60}deg);
						{$reloading
						? 'background: color-mix(in oklch, var(--muted) 80%, transparent); border: 1px solid var(--border);'
						: i < $bullets
							? 'background: var(--muted-foreground); border: 1px solid var(--border); opacity: 0.85;'
							: 'background: transparent; border: 1px solid var(--border); opacity: 0.35;'}
					">
					{#if !$reloading && i < $bullets}
						<div class="w-[4px] h-[4px] rounded-full" style="background: var(--foreground); opacity: 0.9;"></div>
					{:else}
						<div class="w-[5px] h-[5px] rounded-full" style="background: var(--border);"></div>
					{/if}
				</div>
			{/each}
			<div
				class="absolute left-1/2 top-1/2 w-[7px] h-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full"
				style="background: var(--muted-foreground); opacity: 0.5; border: 1px solid var(--border);">
			</div>
		</div>
	</div>
</div>
