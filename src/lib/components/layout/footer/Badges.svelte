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
		<img loading="lazy" class="badge__img" alt="vite" src="/images/vite.svg" />
	</ExLink>
	<ExLink style="display:block" ariaLabel="SvelteKit" href="https://kit.svelte.dev">
		<LogoSvelte height="42" width="100%" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Svelte Vietnam" href="https://www.sveltevietnam.dev">
		<img loading="lazy" class="badge__img" alt="svelte vietnam" src="/images/sveltevn.webp" />
	</ExLink>

	<ExLink style="display:block" ariaLabel="Netlify" href="https://netlify.com">
		<img loading="lazy" class="badge__img" alt="built with netlify" src="/images/netlify.svg" />
	</ExLink>
</div>
<img
	loading="lazy"
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
