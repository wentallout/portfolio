<script>
	import ProjectCardList from '$components/Project/ProjectCardList.svelte';
	import PageTitle from '$components/Common/PageTitle.svelte';
	import Brain from '~icons/ph/brain';

	// import FigmaLogo from '~icons/ph/figma-logo';
	import SectionTitle from '$components/Common/SectionTitle.svelte';

	import SEO from '$components/SEO/SEO.svelte';
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
	<SectionTitle sectionTitle="Case Study" let:sectionIcon>
		<Brain {...sectionIcon} />
	</SectionTitle>

	<ProjectCardList />
</section>

<!-- <section>
	<SectionTitle sectionTitle="UI" let:sectionIcon>
		<FigmaLogo {...sectionIcon} />
	</SectionTitle>
</section> -->
