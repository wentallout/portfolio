<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import SEO from '#lib/components/seo/SEO.svelte';
	import { META_DESCRIPTIONS, PAGE_TITLES, SECTION_TITLES } from '#lib/constants/labels.js';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	import ProjectList from '#lib/sections/projects/ProjectList.svelte';
	import SnippetList from '#lib/sections/projects/SnippetList.svelte';
	import VideoDemoList from '#lib/sections/projects/VideoDemoList.svelte';

	const breadcrumbs = [
		{
			name: PAGE_TITLES.home,
			slug: ''
		},
		{
			name: PAGE_TITLES.projects,
			slug: 'projects'
		}
	];
	const seoProps = {
		breadcrumbs,
		metadescription: META_DESCRIPTIONS.projects,
		slug: 'projects',
		title: PAGE_TITLES.projects
	};
</script>

<SEO {...seoProps} />

<div class="w-full bg-background relative">
	<div class="px-6 py-4 border-grid-b bg-background">
		<Breadcrumb minDepth={1} />
	</div>

	<section class="border-grid-b w-full relative">
		<SectionTitle sectionTitle={SECTION_TITLES.featured} />
		<ProjectList />
	</section>

	<section class="border-grid-b w-full relative">
		<SectionTitle sectionTitle={SECTION_TITLES.webDemos} />
		<VideoDemoList />
	</section>

	<section class="border-grid-b w-full relative">
		<SectionTitle sectionTitle={SECTION_TITLES.codeSnippets} />
		<SnippetList />
	</section>
</div>
