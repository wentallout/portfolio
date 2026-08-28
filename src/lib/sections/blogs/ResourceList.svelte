<script>
	import { BoundingBox } from '$lib/assets/icons/icons';
	import EssentialList from '$sections/blogs/EssentialList.svelte';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
</script>

<section class="w-full relative border-grid-b">
	<SectionTitle sectionDesc="Design templates and essential resources." sectionTitle="Resource">
		{#snippet children({ sectionIcon })}
			<BoundingBox {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="w-full relative">
		<EssentialList />
	</div>
</section>


