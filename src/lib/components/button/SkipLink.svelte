<a class="skipper" href="#main-content" tabindex="0"> Skip to main content </a>

<style>
	.skipper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

		background-color: var(--colorPrimary);

		color: var(--colorBlack);
		font-weight: var(--fontWeightLarge);
		padding: var(--spaceS);
		translate: 0 -100%;
		transition: translate 150ms ease-in-out;

		z-index: var(--zIndexMax);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.skipper:hover {
		background-color: var(--colorPrimaryHover);
	}

	.skipper:focus {
		translate: 0;
		outline: none;
	}
</style>
