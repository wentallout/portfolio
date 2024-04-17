<script>
	import LogoNotAi from '$lib/assets/images/badge/LogoNotAI.svelte';
	import LogoSvelte from '$lib/assets/images/badge/LogoSvelte.svelte';
	import ExLink from '$components/common/ExLink.svelte';
</script>

<div class="badge">
	<ExLink style="display:block" ariaLabel="not by ai" href="https://notbyai.fyi">
		<LogoNotAi />
	</ExLink>
	<ExLink style="display:block" ariaLabel="Vite" href="https://vitejs.dev/">
		<img class="badge__img" alt="vite" src="/images/vite.svg" />
	</ExLink>
	<ExLink style="display:block" ariaLabel="SvelteKit" href="https://kit.svelte.dev">
		<LogoSvelte height="42" width="100%" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Svelte Vietnam" href="https://www.sveltevietnam.dev">
		<img class="badge__img" alt="svelte vietnam" src="/images/sveltevn.webp" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Netlify" href="https://netlify.com">
		<img class="badge__img" alt="built with netlify" src="/images/netlify.svg" />
	</ExLink>
</div>
<img
	alt="This website runs on green hosting - verified by thegreenwebfoundation.org"
	height="95px"
	src="https://app.greenweb.org/api/v3/greencheckimage/wentallout.io.vn?nocache=true"
	width="200px" />

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
