<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import OtherCardList from '$lib/sections/resource/OtherCardList.svelte';
	import BookList from '$lib/sections/resource/BookList.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import EssentialList from '$lib/sections/resource/EssentialList.svelte';
	import SectionTitle from '$components/common/Section/SectionTitle.svelte';

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
		let:sectionIcon
		sectionDesc="Essential libraries for my work">
		<BoundingBox {...sectionIcon} />
	</SectionTitle>

	<EssentialList />
</section>

<section>
	<SectionTitle
		sectionTitle="Book"
		let:sectionIcon
		sectionDesc="Here are some of my favorite books">
		<Books {...sectionIcon} />
	</SectionTitle>

	<BookList />
</section>

<section>
	<SectionTitle sectionTitle="Other" let:sectionIcon>
		<HardDrives {...sectionIcon} />
	</SectionTitle>

	<OtherCardList />
</section>
