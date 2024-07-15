<div class="stars"></div>

<style>
	.stars {
		height: 31px;
		width: 100%;
		background-image: url(/images/patterns/stars.svg);
		background-size: auto 15px;
		background-repeat: repeat-x;
		background-position: 100%;
		margin-bottom: var(--spaceM);
		opacity: 0.5;
	}

	:global([color-scheme='dark'] .stars) {
		filter: invert(1);
	}
</style>
