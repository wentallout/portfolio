<div class="bg-deco-grid"></div>

<!-- <div class="bg-noise"></div> -->

<div class="wave-background">
	<div class="wave-container">
		<svg
			height="100%"
			preserveAspectRatio="none"
			viewBox="0 0 1200 600"
			width="100%"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="ocean-gradient-1" x1="0%" x2="100%" y1="0%" y2="0%">
					<stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.1" />
					<stop offset="100%" stop-color="var(--color-info)" stop-opacity="0.1" />
				</linearGradient>
				<linearGradient id="ocean-gradient-2" x1="0%" x2="100%" y1="0%" y2="0%">
					<stop offset="0%" stop-color="var(--color-info)" stop-opacity="0.1" />
					<stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0.1" />
				</linearGradient>
				<linearGradient id="ocean-gradient-3" x1="0%" x2="100%" y1="0%" y2="0%">
					<stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.1" />
					<stop offset="100%" stop-color="var(--color-info)" stop-opacity="0.1" />
				</linearGradient>
			</defs>

			<path
				d="M0,400 C50,380 100,420 150,400 C200,380 250,420 300,400 C350,380 400,420 450,400 C500,380 550,420 600,400 C650,380 700,420 750,400 C800,380 850,420 900,400 C950,380 1000,420 1050,400 C1100,380 1150,420 1200,400 V600 H0 Z"
				fill="url(#ocean-gradient-1)" />
			<path
				d="M0,450 C50,430 100,470 150,450 C200,430 250,470 300,450 C350,430 400,470 450,450 C500,430 550,470 600,450 C650,430 700,470 750,450 C800,430 850,470 900,450 C950,430 1000,470 1050,450 C1100,430 1150,470 1200,450 V600 H0 Z"
				fill="url(#ocean-gradient-2)" />
			<path
				d="M0,500 C50,480 100,520 150,500 C200,480 250,520 300,500 C350,480 400,520 450,500 C500,480 550,520 600,500 C650,480 700,520 750,500 C800,480 850,520 900,500 C950,480 1000,520 1050,500 C1100,480 1150,520 1200,500 V600 H0 Z"
				fill="url(#ocean-gradient-3)" />
		</svg>
	</div>
	<div class="wave-gradient-overlay"></div>
</div>

<style>
	.wave-background {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-bg-layout);
		overflow: hidden;
		z-index: -1;
	}

	.wave-container {
		position: absolute;
		inset: 0;
		opacity: 0.5;
	}

	:global([color-scheme='dark'] .wave-container) {
		opacity: 0.3;
	}

	.wave-gradient-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			var(--color-bg-layout) 0%,
			transparent 50%,
			var(--color-bg-layout) 100%
		);
	}
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
	}
</style>
