<a class="skip-link" href="#main-content"> Skip to main content </a>

<style>
	.skip-link {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

		background-color: var(--colorPrimary);
		opacity: 0.9;
		color: var(--colorTextSecondary);
		font-weight: 600;
		padding: var(--space-s);
		translate: 0 -100%;
		transition: translate 150ms ease-in-out;
		transition: background-color 0.5s;
		z-index: 11;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.skip-link:hover {
		background-color: var(--colorPrimary-400);
	}

	.skip-link:focus {
		translate: 0;
		outline: none;
	}
</style>
