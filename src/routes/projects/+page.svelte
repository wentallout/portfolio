<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import { CodePen, ProjectorScreen } from '$lib/assets/icons/icons';
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
<PageTitle pageTitle="Projects" />

<section>
	<SectionTitle sectionTitle="Things I built">
		{#snippet children({ sectionIcon })}
			<ProjectorScreen {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<ProjectList />
</section>

<section>
	<SectionTitle sectionTitle="Web Animations">
		{#snippet children({ sectionIcon })}
			<ProjectorScreen {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<VideoDemoList />
</section>

<section>
	<SectionTitle
		sectionDesc="Code snippets for common frontend problems"
		sectionTitle="Code Snippets">
		{#snippet children({ sectionIcon })}
			<CodePen {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<SnippetList />
</section>
