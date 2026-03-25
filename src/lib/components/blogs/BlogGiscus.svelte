<script>
	import Giscus from '@giscus/svelte';

	let {
		category = undefined,
		categoryId = undefined,
		emitMetadata = '0',
		host = 'https://giscus.app',
		id = undefined,
		inputPosition = 'top',
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
</script>

<!-- {#if mounted}
	<giscus-widget
		
		{category}
		
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
{/if} -->

<Giscus
	{id}
	{category}
	{categoryId}
	{emitMetadata}
	{inputPosition}
	{lang}
	{loading}
	{mapping}
	{reactionsEnabled}
	{repo}
	{repoId}
	{term}
	{theme} />
