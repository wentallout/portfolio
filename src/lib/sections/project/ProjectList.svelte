<script>
	import Button from '$components/button/Button.svelte';
	import ProjectCard from '$components/project/ProjectCard.svelte';
	import devPortfolioSquare from '$lib/assets/images/project/dev-portfolio/thumbnail.png';
	import nvaultThumbnail from '$lib/assets/images/project/nvault/thumbnail.png';
	import rezaSquare from '$lib/assets/images/project/reza/rezaSquare.jpg';
	import stockGrabberThumbnail from '$lib/assets/images/project/stock-grabber/thumbnail.jpg';
	import superTabManagerThumbnail from '$lib/assets/images/project/super-tab-manager/thumbnail.png';

	let { hasMoreButton = false } = $props();
</script>

<div class="projects">
	<ProjectCard
		desc="NVAULT is a modern NFT marketplace that allows users to buy, sell, and trade NFTs."
		linkToDetail="project/nvault"
		output="5 Pages: Home, Shop, About, Contact, Product Detail"
		projectName="NVAULT - Modern NFT Market"
		role="Designer, Developer"
		thumbnail={nvaultThumbnail} />

	<ProjectCard
		desc="A sleek, minimal, user-friendly Chrome extension that makes managing multiple browser tabs easier"
		linkToDetail="project/super-tab-manager"
		output="Features: Group similar tabs, close duplicated or harmful tabs, search tabs. UI that adapts to user's dark/light preference."
		projectName="Super Tab Manager"
		role="Designer, Developer"
		thumbnail={superTabManagerThumbnail} />

	<ProjectCard
		desc="A simple app to help you download multiple stock images at the same time."
		linkToDetail="project/stock-grabber"
		output="Features: Search, select/unselect all images, download multiple images in one zip file."
		projectName="Stock Grabber"
		role="Designer, Developer"
		thumbnail={stockGrabberThumbnail} />

	<ProjectCard
		desc="Mobile app that lets people book restaurant tables easily."
		linkToDetail="project/reza"
		output="UI, Research, Persona, User Flow, Wireframe, Design System, Prototype, Test"
		projectName="Reza - Restaurant Reservation App"
		role="UI/UX Designer"
		thumbnail={rezaSquare} />

	<ProjectCard
		desc="A clean, minimal, highly customizable portfolio website for developers."
		linkToDetail="project/dev-portfolio"
		output="3 screens: Home, Projects, Contact"
		projectName="Developer Portfolio"
		role="UI/UX Designer"
		thumbnail={devPortfolioSquare} />

	{#if hasMoreButton}
		<div class="more">
			<a href="/project">
				<Button
					backgroundColor="var(--color-primary)"
					glowColor="var(--color-primary)"
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
		gap: var(--space-xl);
	}
</style>
