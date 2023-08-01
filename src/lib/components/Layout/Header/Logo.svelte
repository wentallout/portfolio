<script>
	export let width = '200px';
	export let height = width;
</script>

<a aria-label="home" href="/" class="cover__logo">
	<img class="official-logo rotate" {width} {height} src="/images/coolLogo.svg" alt="2nd logo" />
</a>

<style lang="postcss">
	.official-logo {
		filter: drop-shadow(0px 0px 10px var(--colorPrimary));
		transition: var(--transition);

		&:hover {
			color: var(--colorPrimaryHover);
			filter: drop-shadow(0px 0px 10px var(--colorPrimary));
			animation: glitch 1.5s ease infinite;
		}
	}

	.cover__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		transition: var(--transition);
		aspect-ratio: 1/1;

		&:hover {
			filter: brightness(1.2);
		}
	}
</style>
