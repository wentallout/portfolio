<script lang="ts">
	import { onMount } from 'svelte';

	let opacity = 0.1;
	let parentHeight;
	let size = 100;
	let glowElement: HTMLElement;
	let parentElement: HTMLElement;
	const updateGlowPosition = (e: MouseEvent) => {
		if (!parentElement) return;

		parentHeight = parentElement.offsetHeight;
		parentElement.style.overflow = `hidden`;
		size = parentHeight;
		const rect = parentElement.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		glowElement.style.background = `radial-gradient(${size}px at ${x}px ${y}px, rgba(255, 255, 255, ${opacity}), transparent 80%)`;
		glowElement.style.borderRadius = 'inherit';
		glowElement.style.opacity = '1';
	};

	const resetGlow = () => {
		glowElement.style.opacity = '0';
	};

	onMount(() => {
		if (!parentElement) return;
		parentElement = glowElement.parentElement;
		parentElement.addEventListener('mousemove', updateGlowPosition);
		parentElement.addEventListener('mouseleave', resetGlow);

		return () => {
			parentElement.removeEventListener('mousemove', updateGlowPosition);
			parentElement.removeEventListener('mouseleave', resetGlow);
		};
	});
</script>

<div bind:this={glowElement} class="mouse-glow"></div>

<style>
	.mouse-glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		transition: opacity 0.3s ease;
		z-index: 2;
	}
</style>
