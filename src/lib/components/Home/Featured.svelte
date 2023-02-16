<script>
	import RezaPhoneAtropos from '$lib/components/Atropos/RezaPhoneAtropos.svelte';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
</script>

<section>
	<div class="featured">
		<div class="title__section">
			<h2 class="featured__title xl-text rainbow">Featured projects</h2>
			<a href="/project">
				<div class="title__see small-text">See all</div>
			</a>
		</div>
		<div class="projects">
			<ProjectCard
				projectName="Reza - Restaurant Reservation App"
				linkToDetail="project/reza"
				linkToFigma="https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=2%3A9&t=a8W16CMSWgxzoLKB-1"
				what="Reza is an app that lets people book restaurant tables easily."
				who="Age 18-30, busy office workers or tourists visiting a new city."
				result="Persona, User Flow, Wireframe, Prototype">
				<RezaPhoneAtropos />
			</ProjectCard>
		</div>
	</div>
</section>

<style>
	.featured {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}

	.featured__title {
		width: fit-content;
		font-family: var(--fancy-font);
	}

	.title__section {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.title__see {
		color: var(--accent-500);
	}
</style>
