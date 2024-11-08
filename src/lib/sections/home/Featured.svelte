<script>
	import { Star } from '$lib/assets/icons/icons';
	import ProjectList from '$sections/project/ProjectList.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<section>
	<div class="featured">
		<SectionTitle sectionTitle="Featured">
			{#snippet children({ sectionIcon })}
				<Star {...sectionIcon} />
			{/snippet}
		</SectionTitle>
		<ProjectList hasMoreButton={true} />
	</div>
</section>

<style>
	.featured {
		display: flex;
		flex-direction: column;
	}
</style>
