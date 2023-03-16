<script>
	import ProjectCardList from '$lib/components/Project/ProjectCardList.svelte';
	import HomeSectionTitle from '$lib/components/Home/HomeSectionTitle.svelte';
</script>

<section>
	<div class="featured">
		<a href="/project">
			<HomeSectionTitle title="Featured" extraClass="rainbow" />
		</a>

		<ProjectCardList />
	</div>
</section>

<style>
	.featured {
		display: flex;
		flex-direction: column;
	}
</style>
