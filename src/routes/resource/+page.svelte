<script>
	import PageTitle from './../../lib/components/Common/PageTitle.svelte';
	import SectionDesc from '$lib/components/Common/SectionDesc.svelte';
	import OtherCardList from '$lib/components/Resource/OtherCardList.svelte';
	import BookGallery from '$lib/components/Resource/BookGallery.svelte';
	import ToolCardList from '$lib/components/Resource/ResourceCardList.svelte';
	import Books from '~icons/ph/books';
	import HardDrives from '~icons/ph/hard-drives';
	import Flask from '~icons/ph/flask';

	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Resource</title>
</svelte:head>

<PageTitle pageTitle="Resource" />

<section>
	<SectionTitle sectionTitle="Book" let:sectionIcon>
		<Books {...sectionIcon} />
	</SectionTitle>
	<SectionDesc text="Knowledge should be free so I'm sharing it." />

	<BookGallery />
</section>

<section>
	<SectionTitle sectionTitle="User Research Tool" let:sectionIcon>
		<Flask {...sectionIcon} />
	</SectionTitle>

	<SectionDesc
		text="User research helps you understand user behaviors, needs, and motivations through various
	qualitative and quantitative methods (interviews, observation, forms, etc)." />

	<ToolCardList />
</section>

<section>
	<SectionTitle sectionTitle="Other" let:sectionIcon>
		<HardDrives {...sectionIcon} />
	</SectionTitle>

	<OtherCardList />
</section>
