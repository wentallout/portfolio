<script>
	import LogoNotAi from '$lib/assets/images/badge/LogoNotAI.svelte';
	import LogoSvelte from '$lib/assets/images/badge/LogoSvelte.svelte';
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<div class="badge">
	<ExLink href="https://notbyai.fyi">
		<LogoNotAi />
	</ExLink>
	<ExLink href="https://kit.svelte.dev/">
		<LogoSvelte height="42" width="auto" />
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
</style>
