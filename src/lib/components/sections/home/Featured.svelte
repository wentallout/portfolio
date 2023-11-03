<script>
	import ProjectCardList from '$components/sections/project/ProjectCardList.svelte';
	import SectionTitle from '$components/sections/SectionTitle.svelte';

	import Star from '~icons/ph/star';
</script>

<section>
	<div class="featured">
		<SectionTitle sectionTitle="Featured" let:sectionIcon>
			<Star {...sectionIcon} />
		</SectionTitle>
		<ProjectCardList hasMoreButton={true} />
	</div>
</section>

<style>
	.featured {
		display: flex;
		flex-direction: column;
	}
</style>
