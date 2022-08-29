<script>
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import CustomLoading from '$lib/components/Loading/CustomLoading.svelte';
	import { resourceData, getResource } from '$lib/stores/resourceStore.js';

	import { Wrench } from 'phosphor-svelte';
</script>

<SectionTitle sectionTitle="Tool">
	<Wrench size="32px" />
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
		<p>Something went wrong while fetching the data:</p>
		<pre>{error}</pre>
	{/await}
</div>
