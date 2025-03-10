<div class="bg-deco"></div>
<div class="bg-noise"></div>

<style>
	.bg-deco {
		display: block;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		background:
			linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
			linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px);
		background-size: var(--space-small) var(--space-large);
		mask-image: radial-gradient(ellipse 70% 40% at 50% 0%, #000 35%, transparent 100%);
		background-repeat: repeat;
		height: 100dvh;
		width: 100%;
		pointer-events: none;
	}

	.bg-noise {
		width: 100%;
		height: 100%;
		background-size: 40px;
		background-repeat: repeat;
		background-image: url(/images/noise.png);
		opacity: 0.06;

		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		pointer-events: none;
	}
</style>
