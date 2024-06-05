<script>
	import { onMount } from 'svelte';

	export let id = undefined;
	export let host = 'https://giscus.app';
	export let repo;
	export let repoId;
	export let category = undefined;
	export let categoryId = undefined;
	export let mapping = 'pathname';
	export let term = undefined;
	export let strict = '0';
	export let reactionsEnabled = '1';
	export let emitMetadata = '0';
	export let inputPosition = 'bottom';
	export let theme = 'light';
	export let lang = 'en';
	export let loading = 'eager';

	let mounted = false;

	onMount(() => {
		mounted = true;
		import('giscus');
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
		{theme} />
{/if}
