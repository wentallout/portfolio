<script>
	import FigmaLogo from '~icons/ph/figma-logo';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	import RezaThumbnail from '$lib/assets/images/project/reza/reza-thumbnail.png';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<SectionTitle sectionTitle="UI + UX">
	<FigmaLogo color="var(--primary-600)" width="32" height="32" />
</SectionTitle>

<div class="projects">
	<ProjectCard
		projectName="Reza"
		projectImage={RezaThumbnail}
		linkToFigma="https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App"
		linkToDetail="/project/reza"
		what="Reza is a restaurant reservation app"
		who="People who want to reserve a restaurant table online"
		result="Persona, User Flow, Wireframe, Prototype, Presentation slides" />

	<!-- <ProjectCard projectName="Project 2: WIP" what="wip" who="wip" result="wip" /> -->
</div>
