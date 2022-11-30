<script>
	import PageTitle from '$lib/components/Common/PageTitle.svelte';
	import Brain from '~icons/ph/brain';
	import RezaPhoneAtropos from '$lib/components/Atropos/RezaPhoneAtropos.svelte';
	import FigmaLogo from '~icons/ph/figma-logo';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<PageTitle pageTitle="Project" />

<section>
	<SectionTitle sectionTitle="Case Study" let:sectionIcon>
		<Brain {...sectionIcon} />
	</SectionTitle>

	<div class="projects">
		<ProjectCard
			projectName="Reza - Restaurant Reservation App"
			linkToDetail="project/reza"
			what="Reza is an app that lets people book restaurant tables easily."
			who="Age 18-30, busy office workers or tourists visiting a new city."
			result="Persona, User Flow, Wireframe, Prototype">
			<RezaPhoneAtropos />
		</ProjectCard>
	</div>
</section>

<section>
	<SectionTitle sectionTitle="UI" let:sectionIcon>
		<FigmaLogo {...sectionIcon} />
	</SectionTitle>
</section>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		flex-wrap: wrap;
		width: 100%;
	}
</style>
