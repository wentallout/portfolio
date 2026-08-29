<script>
	import { haptics } from '$lib/actions/haptics';
	import { gsap } from 'gsap';

	/** @type {{label?: string, type?: "button" | "submit" | "reset", variant?: "primary" | "secondary" | "glass", children?: import('svelte').Snippet, hapticPattern?: string | number | number[] | object}} */
	let { children, hapticPattern = 'medium', label = '', type = 'submit', variant = 'glass' } = $props();

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
	class="relative w-full md:w-fit px-7 py-3 cursor-pointer overflow-hidden origin-center transition-all duration-150 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 {variant === 'primary' ? 'bg-primary text-primary-foreground font-semibold border border-primary hover:brightness-110 hover:scale-[1.02] active:brightness-95 active:scale-[0.97]' : variant === 'secondary' ? 'bg-secondary text-secondary-foreground font-medium border border-border hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.97]' : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] active:brightness-95 active:scale-[0.97]'}"
	aria-label={`button for ${label}`}
	{type}>
	<span class="flex items-center justify-center gap-2 text-sm font-medium relative z-10 {variant === 'primary' ? 'text-primary-foreground' : variant === 'secondary' ? 'text-secondary-foreground' : 'text-foreground'}">
		{@render children?.()}
		{label}
	</span>
</button>
