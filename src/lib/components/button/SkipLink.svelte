<a class="skip-link" tabindex="0" href="#main-content"> Skip to main content </a>

<style>
	.skip-link {
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

	.skip-link:hover {
		background-color: var(--colorPrimaryHover);
	}

	.skip-link:focus {
		translate: 0;
		outline: none;
	}
</style>
