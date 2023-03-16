<script>
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import rezaSquare from '$lib/assets/images/project/rezaSquare.png';

	// linkToFigma="https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=2%3A9&t=a8W16CMSWgxzoLKB-1"
</script>

<div class="projects">
	<ProjectCard
		projectName="Reza - Restaurant Reservation App"
		linkToDetail="project/reza"
		what="Reza is an app that lets people book restaurant tables easily."
		result="Persona, User Flow, Wireframe, Prototype"
		thumbnail={rezaSquare} />
	<!-- <ProjectCard projectName="Work in progress" linkToDetail="" what="" who="" result="" />
	<ProjectCard projectName="Work in progress" linkToDetail="" what="" who="" result="" /> -->
</div>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}
</style>
