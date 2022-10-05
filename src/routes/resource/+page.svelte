<script>
	import BookGallery from '$lib/components/Resource/BookGallery.svelte';
	import ToolCardList from '$lib/components/Resource/ToolCardList.svelte';
	import Books from '~icons/ph/books';
	import Flask from '~icons/ph/flask';

	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Resource</title>
</svelte:head>

<section>
	<SectionTitle sectionTitle="Book" let:sectionIcon>
		<Books {...sectionIcon} />
	</SectionTitle>

	<BookGallery />
</section>

<section>
	<SectionTitle sectionTitle="User Research" let:sectionIcon>
		<Flask {...sectionIcon} />
	</SectionTitle>
	<p class="section-description small-text">
		User research helps you understand user behaviors, needs, and motivations through various
		qualitative and quantitative methods (interviews, observation, forms, etc).
	</p>

	<ToolCardList />
</section>

<style>
	.section-description {
		max-width: 60ch;
		text-align: left;
		margin-bottom: var(--space-s);
	}
</style>
