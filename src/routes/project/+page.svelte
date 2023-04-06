<script>
	import ProjectCardList from '$lib/components/Project/ProjectCardList.svelte';
	import PageTitle from '$lib/components/Common/PageTitle.svelte';
	import Brain from '~icons/ph/brain';

	// import FigmaLogo from '~icons/ph/figma-logo';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	import SEO from '$lib/components/SEO/SEO.svelte';
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
<PageTitle pageTitle="Project" decoImageUrl="/images/project.svg" />

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
