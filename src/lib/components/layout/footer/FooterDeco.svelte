<div class="stars"></div>

<style>
	.stars {
		height: 72px;
		background-size: contain;
		width: 100%;
		background-image: url(/images/water-waves.svg);
		background-repeat: repeat-x;
		background-position: 0;
		margin-bottom: var(--space-mid);

		position: absolute;
		top: 0;
		opacity: 0.1;
		z-index: 1;
		pointer-events: none;
		rotate: 180deg;
	}

	:global([color-scheme='dark'] .stars) {
		filter: invert(1);
	}
</style>
