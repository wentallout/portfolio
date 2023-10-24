<script>
	import Button from '$components/Button/Button.svelte';
	import ProjectCard from '$lib/components/Project/Card/ProjectCard.svelte';
	import rezaSquare from '$lib/assets/images/project/rezaSquare.png';

	import devPortfolioSquare from '$lib/assets/images/project/dev-portfolio/thumbnail.png';

	// linkToFigma="https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=2%3A9&t=a8W16CMSWgxzoLKB-1"

	export let hasMoreButton = false;
</script>

<div class="projects">
	<ProjectCard
		projectName="Reza - Restaurant Reservation App"
		linkToDetail="project/reza"
		role="UI, Research, Persona, User Flow, Wireframe, Design System, Prototype, Test"
		what="Reza is an app that lets people book restaurant tables easily."
		output="Home, Search, Detail, Reservation"
		thumbnail={rezaSquare} />

	<ProjectCard
		projectName="Developer Portfolio"
		linkToDetail="project/dev-portfolio"
		what="A clean, minimal, highly customizable portfolio website for developers."
		role="UI, Design System"
		output="3 screens: Home, Projects, Contact"
		thumbnail={devPortfolioSquare} />

	{#if hasMoreButton}
		<div class="more">
			<a href="/project">
				<Button
					backgroundColor="var(--colorPrimary)"
					glowColor="var(--colorPrimary)"
					label="See more projects" />
			</a>
		</div>
	{/if}
</div>

<style>
	.more {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.more a {
		display: contents;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXL);
	}
</style>
