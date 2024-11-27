<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import { Books, BoundingBox, HardDrives } from '$lib/assets/icons/icons';
	import BookList from '$sections/resource/BookList.svelte';
	import EssentialList from '$sections/resource/EssentialList.svelte';
	import OtherCardList from '$sections/resource/OtherCardList.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Resource',
			slug: 'resource'
		}
	];
	const seoProps = {
		breadcrumbs,
		metadescription: 'Read what Khoa have learned',
		slug: 'resource',
		title: 'Resource'
	};
</script>

<SEO {...seoProps} />

<PageTitle pageTitle="Resource" />

<section>
	<SectionTitle sectionDesc="Essential libraries for my work" sectionTitle="Essential">
		{#snippet children({ sectionIcon })}
			<BoundingBox {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<EssentialList />
</section>

<section>
	<SectionTitle sectionDesc="Here are some of my favorite books" sectionTitle="Book">
		{#snippet children({ sectionIcon })}
			<Books {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<BookList />
</section>

<section>
	<SectionTitle sectionTitle="Other">
		{#snippet children({ sectionIcon })}
			<HardDrives {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<OtherCardList />
</section>
