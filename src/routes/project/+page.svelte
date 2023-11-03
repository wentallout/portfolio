<script>
	import ProjectCardList from '$components/sections/project/ProjectCardList.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import ProjectorScreen from '~icons/ph/projector-screen';

	import CodePen from '~icons/ph/codepen-logo';

	import SectionTitle from '$components/sections/SectionTitle.svelte';

	import SEO from '$components/seo/SEO.svelte';
	import SnippetList from '$components/sections/project/SnippetList.svelte';

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
<PageTitle pageTitle="Project" />

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
		sectionDesc="Some solutions to niche Frontend problems."
		sectionTitle="Snippets"
		let:sectionIcon>
		<CodePen {...sectionIcon} />
	</SectionTitle>

	<SnippetList />
</section>

<!-- <section>
	<SectionTitle sectionTitle="UI" let:sectionIcon>
		<FigmaLogo {...sectionIcon} />
	</SectionTitle>
</section> -->
