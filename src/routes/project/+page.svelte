<script>
	import ProjectCardList from '$sections/project/ProjectCardList.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import ProjectorScreen from '~icons/ph/projector-screen';

	import CodePen from '~icons/ph/codepen-logo';

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
	<SectionTitle
		sectionDesc="UI/UX case studies built with business goal and empathy."
		sectionTitle="Case Studies"
		let:sectionIcon>
		<ProjectorScreen {...sectionIcon} />
	</SectionTitle>

	<ProjectCardList />
</section>

<section>
	<SectionTitle
		sectionDesc="Code snippets for common frontend problems"
		sectionTitle="Code Snippets"
		let:sectionIcon>
		<CodePen {...sectionIcon} />
	</SectionTitle>

	<SnippetList />
</section>
