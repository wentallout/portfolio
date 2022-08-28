<script>
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	import { FigmaLogo } from 'phosphor-svelte';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<SectionTitle sectionTitle="UI/UX">
	<FigmaLogo size="32px" />
</SectionTitle>

<div class="projects">
	<ProjectCard projectName="Reza" projectDesc="This is Reza project" />
	<ProjectCard projectName="Project 2: WIP" />
</div>
