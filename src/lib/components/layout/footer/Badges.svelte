<script>
	import LogoNotAi from '$lib/assets/icons/LogoNotAI.svelte';
	import LogoSvelte from '$lib/assets/icons/LogoSvelte.svelte';
	import ExLink from '$components/common/ExLink.svelte';
</script>

<div class="badge">
	<ExLink style="display:block" ariaLabel="not by ai" href="https://notbyai.fyi">
		<LogoNotAi />
	</ExLink>
	<ExLink style="display:block" ariaLabel="Vite" href="https://vitejs.dev/">
		<img
			loading="lazy"
			class="badge__img"
			height="42"
			width="auto"
			alt="vite logo"
			title="vite logo"
			src="/images/vite.svg" />
	</ExLink>
	<ExLink style="display:block" ariaLabel="SvelteKit" href="https://kit.svelte.dev">
		<LogoSvelte height="42" width="100%" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Svelte Vietnam" href="https://www.sveltevietnam.dev">
		<img
			height="42"
			width="auto"
			loading="lazy"
			class="badge__img"
			alt="svelte vietnam"
			title="svelte vietnam"
			src="/images/sveltevn.webp" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Netlify" href="https://netlify.com">
		<img
			height="42"
			width="auto"
			loading="lazy"
			class="badge__img"
			alt="built with netlify"
			title="built with netlify"
			src="/images/netlify.svg" />
	</ExLink>
</div>

<ExLink
	style="display:block"
	ariaLabel="green web foundation"
	href="https://www.thegreenwebfoundation.org/green-web-check/?url=https%3A%2F%2Fwentallout.io.vn">
	<img
		loading="lazy"
		title="green hosting"
		alt="This website runs on green hosting - verified by thegreenwebfoundation.org"
		height="95px"
		src="https://app.greenweb.org/api/v3/greencheckimage/wentallout.io.vn?nocache=true"
		width="200px" />
</ExLink>

<style>
	.badge {
		display: flex;
		flex-direction: row;

		flex-wrap: wrap;
		width: 100%;
		gap: var(--spaceM);
		margin-bottom: var(--spaceS);
	}

	.badge__img {
		height: 42px;
		width: auto;
	}
</style>
