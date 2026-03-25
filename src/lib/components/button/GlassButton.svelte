<script>
	import { haptics } from '$lib/actions/haptics';
	import { gsap } from 'gsap';

	/** @type {{label?: string, labelColor?: string, width?: any, glassColor?: string, glowColor?: string, type?: "button" | "submit" | "reset", glassOpacity?: number, borderWidth?: string, children?: import('svelte').Snippet, hapticPattern?: string | number | number[] | object}} */
	let {
		borderWidth = '1px',
		children,
		glassColor = 'rgba(255, 255, 255, 0.1)',
		glassOpacity = 0.7,
		glowColor = 'rgba(255, 255, 255, 0.5)',
		hapticPattern = 'medium',
		label = '',
		labelColor = 'var(--color-text)',
		type = 'submit',
		width = undefined
	} = $props();

	let buttonEl;
	let isHovered = false;
	let hoverInterval;

	function createRainDrop() {
		if (!isHovered || !buttonEl) return;

		const drop = document.createElement('div');
		drop.className = 'raindrop';
		buttonEl.appendChild(drop);

		const x = Math.random() * buttonEl.offsetWidth;
		const y = Math.random() * buttonEl.offsetHeight;

		gsap.set(drop, {
			left: x,
			opacity: 1,
			scale: 0,
			top: y
		});

		gsap.to(drop, {
			duration: 1.5,
			ease: 'power1.out',
			onComplete: () => drop.remove(),
			opacity: 0,
			scale: 4
		});
	}

	function createSplash(x, y) {
		if (!buttonEl) return;
		const splashes = 8;
		const angleStep = (2 * Math.PI) / splashes;

		for (let i = 0; i < splashes; i++) {
			const splash = document.createElement('div');
			splash.className = 'splash';
			buttonEl.appendChild(splash);

			const angle = angleStep * i;
			const distance = 50;
			const targetX = x + Math.cos(angle) * distance;
			const targetY = y + Math.sin(angle) * distance;

			gsap.set(splash, {
				left: x,
				opacity: 0.8,
				scale: 0.5,
				top: y
			});

			gsap.to(splash, {
				duration: 0.8,
				ease: 'power2.out',
				left: targetX,
				onComplete: () => splash.remove(),
				opacity: 0,
				scale: 0,
				top: targetY
			});
		}
	}

	function onMouseEnter() {
		isHovered = true;
		hoverInterval = setInterval(createRainDrop, 200);
	}

	function onMouseLeave() {
		isHovered = false;
		clearInterval(hoverInterval);
	}

	function onMouseDown(e) {
		const rect = buttonEl.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		createSplash(x, y);
		haptics.trigger(hapticPattern);
	}
</script>

<button
	bind:this={buttonEl}
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
	onmousedown={onMouseDown}
	style:--glass-color={glassColor}
	style:--glass-opacity={glassOpacity}
	style:--border-width={borderWidth}
	style:--label-color={labelColor}
	style:--glow-color={glowColor}
	style:width
	class="glass-btn"
	aria-label={`button for ${label}`}
	{type}>
	<span class="glass-content">
		{@render children?.()}
		{label}
	</span>
</button>

<style>
	.glass-btn {
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		position: relative;
		padding: 12px 32px;
		background: var(--glass-color);
		border: var(--border-width) solid rgba(255, 255, 255, 0.2);
		border-radius: var(--border-radius-light);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow:
			0 8px 32px 0 rgba(0, 0, 0, 0.1),
			inset 0 0 0 1px rgba(255, 255, 255, 0.1);
		cursor: pointer;
		overflow: hidden;
		width: 100%;
		transform-origin: center;
		transition:
			transform 160ms var(--ease-out-custom),
			filter 160ms var(--ease-out-custom),
			box-shadow 160ms var(--ease-out-custom);
		filter: brightness(1);
	}

	@media (min-width: 768px) {
		.glass-btn {
			width: fit-content;
		}
	}

	.glass-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		color: var(--label-color);
		font-weight: var(--fontWeightLarge);
		font-size: var(--font-size-small);
		z-index: 1;
		position: relative;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.glass-btn:hover {
		filter: brightness(1.1);
		transform: scale(1.02);
		box-shadow:
			0 10px 40px 0 rgba(0, 0, 0, 0.15),
			inset 0 0 0 1px rgba(255, 255, 255, 0.2);
	}

	.glass-btn:active {
		filter: brightness(0.95);
		transform: scale(0.97);
		transition-duration: 80ms;
	}

	.glass-btn:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	:global(.raindrop) {
		position: absolute;
		width: 10px;
		height: 10px;
		border: 2px solid var(--glow-color);
		background: transparent;
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
		filter: blur(0.5px);
	}

	:global(.splash) {
		position: absolute;
		width: 8px;
		height: 8px;
		border: 1.5px solid var(--glow-color);
		background: transparent;
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
		filter: blur(0.5px);
	}
</style>
