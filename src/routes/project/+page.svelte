<script>
	import ProjectCardList from '$lib/components/Project/ProjectCardList.svelte';
	import PageTitle from '$lib/components/Common/PageTitle.svelte';
	import Brain from '~icons/ph/brain';

	// import FigmaLogo from '~icons/ph/figma-logo';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

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
