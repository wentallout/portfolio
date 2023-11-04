<script>
	export let width = '160px';
	export let height = width;
</script>

<div aria-label="home" class="cover__logo">
	<img
		id="personlogo"
		class="official-logo rotate"
		{width}
		{height}
		src="/images/coolLogo.svg"
		alt="2nd logo" />
	<div class="logo__deco">went all out</div>
</div>

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

	.logo__deco {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: var(--colorBgLayout);
		color: var(--colorText);
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: var(--transition);
		font-weight: 600;
	}
</style>
