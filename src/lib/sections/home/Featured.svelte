<script>
	import { Star } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import ProjectList from '$sections/projects/ProjectList.svelte';
	import VideoDemoList from '$sections/projects/VideoDemoList.svelte';
</script>

<section class="featured">
	<SectionTitle sectionTitle="Featured">
		{#snippet children({ sectionIcon })}
			<Star {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<ProjectList />
</section>

<section>
	<SectionTitle sectionTitle="Web Animations">
		{#snippet children({ sectionIcon })}
			<ProjectorScreen {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<VideoDemoList />
</section>

<style>
	.featured {
		display: flex;
		flex-direction: column;
	}
</style>
