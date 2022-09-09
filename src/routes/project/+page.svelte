<script>
	import FigmaLogo from '~icons/ph/figma-logo';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<SectionTitle sectionTitle="UI + UX">
	<FigmaLogo color="var(--primary-600)" width="32" height="32" />
</SectionTitle>

<div class="projects">
	<ProjectCard projectName="Reza" projectDesc="This is Reza project" />
	<ProjectCard projectName="Project 2: WIP" />
</div>
