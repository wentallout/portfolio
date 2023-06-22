<script>
	import ProjectCardList from '$lib/components/Project/List/ProjectCardList.svelte';
	import PageTitle from '$components/Common/PageTitle.svelte';
	import ProjectorScreen from '~icons/ph/projector-screen';

	import CodePen from '~icons/ph/codepen-logo';

	// import FigmaLogo from '~icons/ph/figma-logo';
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';

	import SEO from '$components/SEO/SEO.svelte';
	import SnippetList from '$lib/components/Project/List/SnippetList.svelte';

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
		sectionDesc="UI/UX case studies built with clear business goal and empathy."
		sectionTitle="Case Studies"
		let:sectionIcon>
		<ProjectorScreen {...sectionIcon} />
	</SectionTitle>

	<ProjectCardList />
</section>

<section>
	<SectionTitle
		sectionDesc="CSS solutions to niche problems."
		sectionTitle="CSS Snippets"
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
