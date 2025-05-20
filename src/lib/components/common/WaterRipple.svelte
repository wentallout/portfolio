<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let containerEl;
	let isActive = false;
	let lastRippleTime = 0;
	const RIPPLE_DELAY = 200; // Minimum time between ripples in ms

	function createRipple(e) {
		if (!isActive) return;

		const currentTime = Date.now();
		if (currentTime - lastRippleTime < RIPPLE_DELAY) return;
		lastRippleTime = currentTime;

		const rect = containerEl.getBoundingClientRect();
		const baseX = e.clientX - rect.left;
		const baseY = e.clientY - rect.top;

		// Create multiple ripples with random offsets
		const rippleCount = Math.floor(Math.random() * 2) + 1; // 1-2 ripples per move
		for (let i = 0; i < rippleCount; i++) {
			const ripple = document.createElement('div');
			ripple.className = 'ripple';
			containerEl.appendChild(ripple);

			// Add random offset from mouse position
			const offsetX = baseX + (Math.random() - 0.5) * 100; // ±50px offset
			const offsetY = baseY + (Math.random() - 0.5) * 100;

			// Random size and duration variations
			const scale = 2 + Math.random() * 3; // Scale between 2-5
			const duration = 1 + Math.random() * 1; // Duration between 1-2s
			const initialOpacity = 0.4 + Math.random() * 0.4; // Opacity between 0.4-0.8

			gsap.set(ripple, {
				left: offsetX,
				opacity: initialOpacity,
				scale: 0,
				top: offsetY
			});

			gsap.to(ripple, {
				duration,
				ease: 'power1.out',
				onComplete: () => ripple.remove(),
				opacity: 0,
				scale,
				x: (Math.random() - 0.5) * 40, // Drift ±20px
				y: (Math.random() - 0.5) * 40
			});
		}
	}

	onMount(() => {
		containerEl.addEventListener('mouseenter', () => {
			isActive = true;
		});

		containerEl.addEventListener('mouseleave', () => {
			isActive = false;
		});

		containerEl.addEventListener('mousemove', createRipple);

		return () => {
			containerEl.removeEventListener('mousemove', createRipple);
		};
	});
</script>

<div bind:this={containerEl} class="ripple-container">
	<slot />
</div>

<style>
	.ripple-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	:global(.ripple) {
		position: absolute;
		width: 10px;
		height: 10px;
		border: 1px solid var(--color-text); /* Changed to use theme color variable */
		background: transparent;
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
		filter: blur(0.5px);
		will-change: transform, opacity;
	}
</style>
