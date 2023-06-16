<script>
	import PageTitle from '$components/Common/PageTitle.svelte';

	import OtherCardList from '$lib/components/Resource/List/OtherCardList.svelte';
	import BookList from '$lib/components/Resource/List/BookList.svelte';
	import ToolCardList from '$lib/components/Resource/List/ResourceCardList.svelte';
	import Books from '~icons/ph/books';
	import HardDrives from '~icons/ph/hard-drives';
	import Flask from '~icons/ph/flask';

	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';

	import BoundingBox from '~icons/ph/bounding-box';

	import SEO from '$components/SEO/SEO.svelte';
	import EssentialList from '$lib/components/Resource/List/EssentialList.svelte';
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
	<SectionTitle
		sectionDesc="User research helps you understand user behaviors, needs, and motivations through various qualitative and quantitative methods (interviews, observation, forms, etc)."
		sectionTitle="User Research Tool"
		let:sectionIcon>
		<Flask {...sectionIcon} />
	</SectionTitle>

	<ToolCardList />
</section>

<section>
	<SectionTitle sectionTitle="Other" let:sectionIcon>
		<HardDrives {...sectionIcon} />
	</SectionTitle>

	<OtherCardList />
</section>
