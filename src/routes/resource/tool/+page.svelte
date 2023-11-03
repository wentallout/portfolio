<script>
	import RemConverter from '$components/tool/RemConverter.svelte';

	// import { resourceData, getResource } from '$lib/stores/resourceStore.js';
</script>

<RemConverter />

<!-- <div>
	{#await getResource()}
		{#each $resourceData as resource (resource.id)}
			<div>
				{resource.title}
				{resource.type}
				{resource.description}
			</div>
		{/each}
	{:catch error}
		<p>Something went wrong while fetching the data</p>
		<pre>{error}</pre>
	{/await}
</div> -->

<style>
</style>
