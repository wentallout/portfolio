<script lang="ts">
	import Giscus from '@giscus/svelte';

	let {
		category = undefined,
		categoryId = undefined,
		emitMetadata = '0',
		host = 'https://giscus.app',
		id = undefined,
		inputPosition = 'top',
		lang = 'en',
		loading = 'lazy',
		mapping = 'pathname',
		reactionsEnabled = '1',
		repo,
		repoId,
		strict = '0',
		term = undefined,
		theme = 'light'
	} = $props();
</script>

<Giscus
	{id}
	{category}
	{categoryId}
	{emitMetadata}
	{host}
	{inputPosition}
	{lang}
	{loading}
	{mapping}
	{reactionsEnabled}
	{repo}
	{repoId}
	{strict}
	{term}
	{theme} />
