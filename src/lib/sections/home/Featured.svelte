<script>
	import { MonitorPlay, Star } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import ProjectList from '$sections/projects/ProjectList.svelte';
	import VideoDemoList from '$sections/projects/VideoDemoList.svelte';
</script>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle="Featured">
		{#snippet children({ sectionIcon })}
			<Star {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<ProjectList />
</section>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle="Web Animations">
		{#snippet children({ sectionIcon })}
			<MonitorPlay {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<VideoDemoList />
</section>



