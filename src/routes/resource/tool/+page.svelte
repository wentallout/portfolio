<script>
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	// import { resourceData, getResource } from '$lib/stores/resourceStore.js';
	import Wrench from '~icons/ph/wrench';
</script>

<SectionTitle sectionTitle="Tool" let:sectionIcon>
	<Wrench {...sectionIcon} />
</SectionTitle>



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
