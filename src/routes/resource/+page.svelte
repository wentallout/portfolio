<script>
	import PageTitle from '$components/Common/PageTitle.svelte';
	import SectionDesc from '$components/Common/SectionDesc.svelte';
	import OtherCardList from '$components/Resource/OtherCardList.svelte';
	import BookGallery from '$components/Resource/BookGallery.svelte';
	import ToolCardList from '$components/Resource/ResourceCardList.svelte';
	import Books from '~icons/ph/books';
	import HardDrives from '~icons/ph/hard-drives';
	import Flask from '~icons/ph/flask';

	import SectionTitle from '$components/Common/SectionTitle.svelte';

	import SEO from '$components/SEO/SEO.svelte';
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
	<SectionTitle sectionTitle="Book" let:sectionIcon>
		<Books {...sectionIcon} />
	</SectionTitle>
	<SectionDesc text="Here are some of my favorite books" />

	<BookGallery />
</section>

<section>
	<SectionTitle sectionTitle="User Research Tool" let:sectionIcon>
		<Flask {...sectionIcon} />
	</SectionTitle>

	<SectionDesc
		text="User research helps you understand user behaviors, needs, and motivations through various qualitative and quantitative methods (interviews, observation, forms, etc)." />

	<ToolCardList />
</section>

<section>
	<SectionTitle sectionTitle="Other" let:sectionIcon>
		<HardDrives {...sectionIcon} />
	</SectionTitle>

	<OtherCardList />
</section>
