<script>
	import Brain from '~icons/ph/brain';
	import RezaPhoneAtropos from '$lib/components/Atropos/RezaPhoneAtropos.svelte';
	import FigmaLogo from '~icons/ph/figma-logo';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	// images
	import rezaThumbnail from '$lib/assets/images/project/reza/thumbnail.png?webp';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<section>
	<SectionTitle sectionTitle="Case Study" let:sectionIcon>
		<Brain {...sectionIcon} />
	</SectionTitle>

	<div class="projects">
		<ProjectCard
			projectName="Reza"
			projectImage={rezaThumbnail}
			linkToFigma="https://www.figma.com/proto/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=738%3A11894&scaling=contain&page-id=607%3A7637"
			linkToDetail="/project/reza"
			what="Reza is a restaurant reservation app"
			who="People who want to reserve a restaurant table online"
			result="Persona, User Flow, Wireframe, Prototype, Presentation slides"
		>
			<span slot="atropos">
				<RezaPhoneAtropos />
			</span>
		</ProjectCard>

		<!-- <ProjectCard projectName="Project 2: WIP" what="wip" who="wip" result="wip" /> -->
	</div>
</section>

<section>
	<SectionTitle sectionTitle="UI" let:sectionIcon>
		<FigmaLogo {...sectionIcon} />
	</SectionTitle>
</section>

<style>
	
</style>
