<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import { CodePen, ProjectorScreen } from '$lib/assets/icons/icons';
	import ProjectList from '$sections/project/ProjectList.svelte';
	import SnippetList from '$sections/project/SnippetList.svelte';
	import VideoDemoList from '$sections/project/VideoDemoList.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Project',
			slug: 'project'
		}
	];
	const seoProps = {
		breadcrumbs,
		metadescription: 'Look at projects made by Khoa',
		slug: 'project',
		title: 'Project'
	};
</script>

<SEO {...seoProps} />
<PageTitle pageTitle="Projects" />

<section>
	<SectionTitle sectionTitle="Projects">
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
