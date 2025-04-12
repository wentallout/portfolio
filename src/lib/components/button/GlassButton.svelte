<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	/** @type {{label?: string, labelColor?: string, width?: any, glassColor?: string, glowColor?: string, type?: string, glassOpacity?: number, borderWidth?: string, children?: import('svelte').Snippet}} */
	let {
		borderWidth = '1px',
		children,
		glassColor = 'rgba(255, 255, 255, 0.1)',
		glassOpacity = 0.7,
		glowColor = 'rgba(255, 255, 255, 0.5)',
		label = '',
		labelColor = 'var(--color-text)',
		type = 'submit',
		width = undefined
	} = $props();

	let buttonEl;
	let contentEl;
	let isHovered = false;
	let hoverInterval;

	function createRainDrop() {
		if (!isHovered) return;

		const drop = document.createElement('div');
		drop.className = 'raindrop';
		buttonEl.appendChild(drop);

		// Random position along the button
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
		const splashes = 8; // Increased number of splashes
		const angleStep = (2 * Math.PI) / splashes;

		for (let i = 0; i < splashes; i++) {
			const splash = document.createElement('div');
			splash.className = 'splash';
			buttonEl.appendChild(splash);

			const angle = angleStep * i;
			const distance = 50; // Increased distance
			const targetX = x + Math.cos(angle) * distance;
			const targetY = y + Math.sin(angle) * distance;

			gsap.set(splash, {
				left: x,
				opacity: 0.8,
				scale: 0.5,
				top: y
			});

			gsap.to(splash, {
				duration: 0.8, // Increased duration
				ease: 'power2.out',
				left: targetX,
				onComplete: () => splash.remove(),
				opacity: 0,
				scale: 0,
				top: targetY
			});
		}
	}

	onMount(() => {
		buttonEl.addEventListener('mouseenter', () => {
			isHovered = true;
			hoverInterval = setInterval(createRainDrop, 200); // Increased frequency

			gsap.to(buttonEl, {
				duration: 0.15, // Reduced from 0.3
				ease: 'power2.out',
				scale: 1.02
			});
		});

		buttonEl.addEventListener('mouseleave', () => {
			isHovered = false;
			clearInterval(hoverInterval);

			gsap.to(buttonEl, {
				duration: 0.15, // Reduced from 0.3
				ease: 'power2.in',
				scale: 1
			});
		});

		buttonEl.addEventListener('mousedown', (e) => {
			const rect = buttonEl.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			gsap.to(buttonEl, {
				duration: 0.1,
				scale: 0.97 // More pronounced push effect
			});

			createSplash(x, y);
		});

		buttonEl.addEventListener('mouseup', () => {
			gsap.to(buttonEl, {
				duration: 0.15, // Reduced from 0.2
				scale: 1.02
			});
		});
	});
</script>

<button
	bind:this={buttonEl}
	style:--glass-color={glassColor}
	style:--glass-opacity={glassOpacity}
	style:--border-width={borderWidth}
	style:--label-color={labelColor}
	style:--glow-color={glowColor}
	style:width
	class="glass-btn"
	{type}>
	<span bind:this={contentEl} class="glass-content">
		{@render children?.()}
		{label}
	</span>
</button>

<style>
	.glass-btn {
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
		transition: all 0.15s ease; /* Reduced from 0.3s */
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
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Added subtle text shadow for better readability */
	}

	.glass-btn:hover {
		filter: brightness(1.2);
		box-shadow:
			0 10px 40px 0 rgba(0, 0, 0, 0.1),
			inset 0 0 0 1px rgba(255, 255, 255, 0.2);
	}

	.glass-btn:active {
		filter: brightness(0.9);
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
