<script>
	import RezaPhoneAtropos from '$lib/components/Atropos/RezaPhoneAtropos.svelte';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
</script>

<section>
	<div class="featured">
		<h2 class="featured__title xl-text rainbow">Featured</h2>
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
		font-family: var(--fancy-font);
	}
</style>
