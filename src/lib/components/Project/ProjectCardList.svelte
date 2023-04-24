<script>
	import Button from '$lib/components/Button/Button.svelte';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import rezaSquare from '$lib/assets/images/project/rezaSquare.png';

	// linkToFigma="https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=2%3A9&t=a8W16CMSWgxzoLKB-1"

	export let hasMoreButton = false;
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
	{#if hasMoreButton}
		<div class="more">
			<a href="/project">
				<Button backgroundColor="var(--primary-500)" label="See full portfolio" />
			</a>
		</div>
	{/if}
</div>

<style>
	.more {
		--min: 30ch;
		--gap: var(--space-s);

		display: grid;
		grid-gap: var(--gap);

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		width: 100%;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}
</style>
