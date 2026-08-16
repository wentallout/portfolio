<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import { CodePen, MonitorPlay, ProjectorScreen } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import ProjectList from '$sections/projects/ProjectList.svelte';
	import SnippetList from '$sections/projects/SnippetList.svelte';
	import VideoDemoList from '$sections/projects/VideoDemoList.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Projects',
			slug: 'projects'
		}
	];
	const seoProps = {
		breadcrumbs,
		metadescription: 'Look at projects made by Khoa',
		slug: 'projects',
		title: 'Projects'
	};
</script>

<SEO {...seoProps} />

<div class="w-full bg-black relative">
	<PageTitle pageTitle="Projects" />

	<section class="border-grid-b w-full relative">
		<SectionTitle
			sectionDesc="A curated collection of client websites, digital applications, and personal tools built with precision."
			sectionTitle="Selected Client & Personal Work">
			{#snippet children({ sectionIcon })}
				<ProjectorScreen {...sectionIcon} />
			{/snippet}
		</SectionTitle>
		<ProjectList />
	</section>

	<section class="border-grid-b w-full relative">
		<SectionTitle
			sectionDesc="Interactive experiments focusing on fluid interactions, micro-animations, and visual delight."
			sectionTitle="Web Animations & Demos">
			{#snippet children({ sectionIcon })}
				<MonitorPlay {...sectionIcon} />
			{/snippet}
		</SectionTitle>
		<VideoDemoList />
	</section>

	<section class="border-grid-b w-full relative">
		<SectionTitle
			sectionDesc="Handcrafted, open-source code snippets and components for common frontend challenges."
			sectionTitle="Code Snippets & Utilities">
			{#snippet children({ sectionIcon })}
				<CodePen {...sectionIcon} />
			{/snippet}
		</SectionTitle>
		<SnippetList />
	</section>
</div>
