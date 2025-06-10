<script>
	import { Star } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import ProjectList from '$sections/projects/ProjectList.svelte';
</script>

<section>
	<div class="featured">
		<SectionTitle sectionTitle="Featured">
			{#snippet children({ sectionIcon })}
				<Star {...sectionIcon} />
			{/snippet}
		</SectionTitle>
		<ProjectList />
	</div>
</section>

<style>
	.featured {
		display: flex;
		flex-direction: column;
	}
</style>
