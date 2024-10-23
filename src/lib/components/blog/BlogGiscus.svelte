<script>
	import { onMount } from 'svelte';

	/** @type {{id?: any, host?: string, repo: any, repoId: any, category?: any, categoryId?: any, mapping?: string, term?: any, strict?: string, reactionsEnabled?: string, emitMetadata?: string, inputPosition?: string, theme?: string, lang?: string, loading?: string}} */
	let {
		id = undefined,
		host = 'https://giscus.app',
		repo,
		repoId,
		category = undefined,
		categoryId = undefined,
		mapping = 'pathname',
		term = undefined,
		strict = '0',
		reactionsEnabled = '1',
		emitMetadata = '0',
		inputPosition = 'bottom',
		theme = 'light',
		lang = 'en',
		loading = 'eager'
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
