<a class="skipper" href="#main-content" tabindex="0"> Skip to main content </a>

<style>
	.skipper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

		background-color: var(--color-primary);

		color: var(--color-black);
		font-weight: var(--fontWeightLarge);
		padding: var(--space-small);
		translate: 0 -100%;
		transition: translate 150ms ease-in-out;

		z-index: var(--z-index-max);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.skipper:hover {
		background-color: var(--color-primary-hover);
	}

	.skipper:focus {
		translate: 0;
		outline: none;
	}
</style>
