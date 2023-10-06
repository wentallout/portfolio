<div class="chain" />

<style>
	.chain {
		--chainHeight: 35px;
		background-image: url(/images/chain.svg);
		background-repeat: repeat-x;
		width: 100%;
		height: var(--chainHeight);
		opacity: 0.1;

		position: absolute;
		top: 0;
		left: 0;
	}

	:global([color-scheme='light'] .chain) {
		filter: invert();
	}
</style>
