<script>
	import { onMount } from 'svelte';

	/** @type {{id?: any, host?: string, repo: any, repoId: any, category?: any, categoryId?: any, mapping?: string, term?: any, strict?: string, reactionsEnabled?: string, emitMetadata?: string, inputPosition?: string, theme?: string, lang?: string, loading?: string}} */
	let {
		category = undefined,
		categoryId = undefined,
		emitMetadata = '0',
		host = 'https://giscus.app',
		id = undefined,
		inputPosition = 'bottom',
		lang = 'en',
		loading = 'eager',
		mapping = 'pathname',
		reactionsEnabled = '1',
		repo,
		repoId,
		strict = '0',
		term = undefined,
		theme = 'light'
	} = $props();

	let mounted = $state(false);

	onMount(async () => {
		mounted = true;
		await import('giscus');
	});
</script>

{#if mounted}
	<giscus-widget
		{id}
		{category}
		categoryid={categoryId}
		emitmetadata={emitMetadata}
		{host}
		inputposition={inputPosition}
		{lang}
		{loading}
		{mapping}
		reactionsenabled={reactionsEnabled}
		{repo}
		repoid={repoId}
		{strict}
		{term}
		{theme}></giscus-widget>
{/if}
