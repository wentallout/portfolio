<script>
	import LogoNotAi from '$lib/assets/images/badge/LogoNotAI.svelte';
	import LogoSvelte from '$lib/assets/images/badge/LogoSvelte.svelte';
	import ExLink from '$components/common/ExLink.svelte';
</script>

<div class="badge">
	<ExLink ariaLabel="not by ai" style="display:block" href="https://notbyai.fyi">
		<LogoNotAi />
	</ExLink>
	<ExLink ariaLabel="Vite" style="display:block" href="https://vitejs.dev/">
		<img class="badge__img" alt="vite" src="/images/vite.svg" />
	</ExLink>
	<ExLink ariaLabel="SvelteKit" style="display:block" href="https://kit.svelte.dev">
		<LogoSvelte height="42" width="100%" />
	</ExLink>

	<ExLink ariaLabel="Svelte Vietnam" style="display:block" href="https://www.sveltevietnam.dev">
		<img class="badge__img" alt="svelte vietnam" src="/images/sveltevn.png" />
	</ExLink>
</div>

<style>
	.badge {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		gap: var(--spaceM);
	}

	.badge__img {
		height: 42px;
		width: auto;
	}
</style>
