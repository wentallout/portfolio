<script>
	import ProjectCardList from '$lib/components/Project/ProjectCardList.svelte';
	import HomeSectionTitle from '$lib/components/Home/HomeSectionTitle.svelte';
</script>

<section>
	<div class="featured">
		<HomeSectionTitle title="Featured Projects" />
		<ProjectCardList hasMoreButton={true} />
	</div>
</section>

<style>
	.featured {
		display: flex;
		flex-direction: column;
	}
</style>
