<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import OtherCardList from '$sections/resource/OtherCardList.svelte';
	import BookList from '$sections/resource/BookList.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import EssentialList from '$sections/resource/EssentialList.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';

	// ICONS
	import Books from '~icons/ph/books';
	import HardDrives from '~icons/ph/hard-drives';
	import BoundingBox from '~icons/ph/bounding-box';
	//

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
		title: 'Resource',
		metadescription: 'Read what Khoa have learned',
		slug: 'resource'
	};
</script>

<SEO {...seoProps} />

<PageTitle pageTitle="Resource" />

<section>
	<SectionTitle
		sectionTitle="Essential"
		
		sectionDesc="Essential libraries for my work">
		{#snippet children({ sectionIcon })}
				<BoundingBox {...sectionIcon} />
		{/snippet}
		</SectionTitle>

	<EssentialList />
</section>

<section>
	<SectionTitle
		sectionTitle="Book"
		
		sectionDesc="Here are some of my favorite books">
		{#snippet children({ sectionIcon })}
				<Books {...sectionIcon} />
					{/snippet}
		</SectionTitle>

	<BookList />
</section>

<section>
	<SectionTitle sectionTitle="Other" >
		{#snippet children({ sectionIcon })}
				<HardDrives {...sectionIcon} />
					{/snippet}
		</SectionTitle>

	<OtherCardList />
</section>
