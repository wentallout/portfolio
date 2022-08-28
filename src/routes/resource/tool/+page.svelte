<script>
	import CustomLoading from '$lib/components/Loading/CustomLoading.svelte';
	import { resourceData, getResource } from '$lib/stores/resourceStore.js';
</script>

<p>This is tools page</p>
<p>Resource:</p>
<!-- <div>
	{#if $resourceData}
		{#each $resourceData as resource (resource.id)}
			<div>
				{resource.title}
				{resource.type}
				{resource.description}
			</div>
		{/each}
	{:else}
		
	{/if}
</div> -->

{#await getResource()}
	<CustomLoading />
{:then}
	{#each $resourceData as resource (resource.id)}
		<div>
			{resource.title}
			{resource.type}
			{resource.description}
		</div>
	{/each}
{:catch error}
	<p>Something went wrong while fetching the data:</p>
	<pre>{error}</pre>
{/await}
