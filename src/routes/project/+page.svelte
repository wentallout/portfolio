<script>
	import ProjectList from '$sections/project/ProjectList.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import { ProjectorScreen, CodePen } from '$lib/assets/icons/icons';

	import SectionTitle from '$sections/SectionTitle.svelte';

	import SEO from '$components/seo/SEO.svelte';
	import SnippetList from '$sections/project/SnippetList.svelte';

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
		title: 'Project',
		metadescription: 'Look at projects made by Khoa',
		slug: 'project'
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
	<SectionTitle
		sectionDesc="Code snippets for common frontend problems"
		sectionTitle="Code Snippets">
		{#snippet children({ sectionIcon })}
			<CodePen {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<SnippetList />
</section>
