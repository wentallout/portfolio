<script>
	import Button from '$components/button/Button.svelte';
	import ProjectCard from '$components/project/ProjectCard.svelte';
	import rezaSquare from '$lib/assets/images/project/reza/rezaSquare.png';

	import devPortfolioSquare from '$lib/assets/images/project/dev-portfolio/thumbnail.png';

	import superTabManagerThumbnail from '$lib/assets/images/project/super-tab-manager/thumbnail.png';

	export let hasMoreButton = false;
</script>

<div class="projects">
	<ProjectCard
		linkToDetail="https://chrome.google.com/webstore/detail/supertabmanager/bkjlmdjfdppebnijgnhgfdnojfneppaa?hl=en"
		output="Features: Group similar tabs, close duplicated or harmful tabs, search tabs. UI that adapts to user's dark/light preference."
		projectName="Super Tab Manager"
		role="Designer, Developer"
		thumbnail={superTabManagerThumbnail}
		what="A sleek, minimal, user-friendly Chrome extension that makes managing multiple browser tabs easier" />

	<ProjectCard
		linkToDetail="project/reza"
		output="UI, Research, Persona, User Flow, Wireframe, Design System, Prototype, Test"
		projectName="Reza - Restaurant Reservation App"
		role="UI/UX Designer"
		thumbnail={rezaSquare}
		what="Mobile app that lets people book restaurant tables easily." />

	<ProjectCard
		linkToDetail="project/dev-portfolio"
		output="3 screens: Home, Projects, Contact"
		projectName="Developer Portfolio"
		role="UI/UX Designer"
		thumbnail={devPortfolioSquare}
		what="A clean, minimal, highly customizable portfolio website for developers." />

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
