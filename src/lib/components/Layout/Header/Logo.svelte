<a aria-label="home" href="/" class="cover__logo">
	<!-- <official-logo class="official-logo" width="100%" height="100%" color="var(--colorText)" /> -->

	<img
		class="official-logo rotate"
		width="300px"
		height="300px"
		src="/images/coolLogo.svg"
		alt="2nd logo" />
</a>

<style>
	.official-logo {
		filter: drop-shadow(0px 0px 10px var(--colorText));

		transition: var(--transition);
	}

	.official-logo:hover {
		color: var(--colorPrimary);
		filter: drop-shadow(0px 0px 10px var(--colorPrimary));
	}

	.cover__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		transition: var(--transition);

		aspect-ratio: 1/1;
		width: 200px;
	}

	.cover__logo:hover {
		filter: brightness(1.2);
	}
</style>
