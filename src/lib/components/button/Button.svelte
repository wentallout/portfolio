<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	/** @type {{label?: string, labelColor?: string, width?: any, glassColor?: string, glowColor?: string, type?: string, glassOpacity?: number, borderWidth?: string, children?: import('svelte').Snippet}} */
	let {
		label = 'exampleLabel',
		labelColor = 'var(--color-text)',
		glassColor = 'rgba(255, 255, 255, 0.1)',
		glowColor = 'rgba(255, 255, 255, 0.5)',
		glassOpacity = 0.7,
		borderWidth = '1px',
		type = 'submit',
		width = undefined,
		children
	} = $props();

	let buttonEl;
	let contentEl;

	onMount(() => {
		// Initial setup
		gsap.set(contentEl, { opacity: 0.9, scale: 1 });

		// Hover animation
		buttonEl.addEventListener('mouseenter', () => {
			gsap.to(contentEl, {
				opacity: 1,
				scale: 1.02,
				duration: 0.3,
				ease: 'power2.out'
			});

			// Create floating particles effect
			createParticles();
		});

		buttonEl.addEventListener('mouseleave', () => {
			gsap.to(contentEl, {
				opacity: 0.9,
				scale: 1,
				duration: 0.3,
				ease: 'power2.in'
			});
		});
	});

	function createParticles() {
		const particles = 5;
		for (let i = 0; i < particles; i++) {
			const particle = document.createElement('div');
			particle.className = 'particle';
			buttonEl.appendChild(particle);

			const randomX = Math.random() * 100 - 50;
			const randomDelay = Math.random() * 0.2;

			gsap.set(particle, {
				left: '50%',
				top: '50%',
				scale: 0,
				opacity: 1
			});

			gsap.to(particle, {
				x: randomX,
				y: -60,
				scale: 2,
				opacity: 0,
				duration: 1,
				delay: randomDelay,
				ease: 'power2.out',
				onComplete: () => particle.remove()
			});
		}
	}
</script>

<button
	bind:this={buttonEl}
	class="glass-btn"
	style:--glass-color={glassColor}
	style:--glass-opacity={glassOpacity}
	style:--border-width={borderWidth}
	style:--label-color={labelColor}
	style:--glow-color={glowColor}
	style:width
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
		border: var(--border-width) solid rgba(255, 255, 255, 0.1);
		border-radius: var(--border-radius-light);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: all 0.3s ease;
		overflow: hidden;
		width: 100%;
	}

	@media (min-width: 768px) {
		.glass-btn {
			width: fit-content;
		}
	}

	.glass-btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			120deg,
			transparent,
			rgba(255, 255, 255, 0.2),
			transparent
		);
		transform: translateX(-100%);
		transition: 0.6s;
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
	}

	/* Hover Effects */
	.glass-btn:hover {
		transform: translateY(-2px);
		box-shadow: 
			0 10px 40px 0 rgba(0, 0, 0, 0.2),
			0 0 20px var(--glow-color),
			0 0 40px rgba(var(--glow-color), 0.5);
		background: color-mix(in srgb, var(--glass-color), transparent calc((1 - var(--glass-opacity)) * 100%));
	}

	.glass-btn:hover::before {
		transform: translateX(100%);
	}

	.glass-btn:active {
		transform: translateY(0);
	}

	/* Focus styles */
	.glass-btn:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	/* Particle effect */
	.particle {
		position: absolute;
		width: 4px;
		height: 4px;
		background: var(--glow-color);
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
	}
</style>

