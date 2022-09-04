<script>
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import CustomLoading from '$lib/components/Loading/CustomLoading.svelte';
	import { resourceData, getResource } from '$lib/stores/resourceStore.js';

	import Wrench from '~icons/ph/wrench';
</script>

<SectionTitle sectionTitle="Tool">
	<Wrench color="var(--black)" width="32" height="32" />
</SectionTitle>

<div>
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
		<p>Something went wrong while fetching the data</p>
		<pre>{error}</pre>
	{/await}
</div>
