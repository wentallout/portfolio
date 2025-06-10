<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import { Books, BoundingBox, HardDrives } from '$lib/assets/icons/icons';
	import BookList from '$sections/blogs/BookList.svelte';
	import EssentialList from '$sections/blogs/EssentialList.svelte';
	import OtherCardList from '$sections/blogs/OtherCardList.svelte';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionDesc="Other essential stuff for my work." sectionTitle="Resource">
		{#snippet children({ sectionIcon })}
			<BoundingBox {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="list-container">
		<OtherCardList />
		<EssentialList />
		<BookList />
	</div>
</section>

<style>
	.list-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-large);
	}
</style>
