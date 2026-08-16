<script>
	import NoiseOverlay from '$lib/components/ui/NoiseOverlay.svelte';
</script>

<NoiseOverlay />

<div class="bg-deco-grid"></div>

<style>
	.bg-deco-grid {
		display: block;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		background:
			linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
			linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px);
		background-size: var(--space-s) var(--space-large);
		mask-image: radial-gradient(ellipse 70% 40% at 50% 0%, #000 35%, transparent 100%);
		background-repeat: repeat;
		height: 100dvh;
		width: 100%;
		pointer-events: none;
		opacity: 0.4;
		z-index: -1;
	}
</style>
