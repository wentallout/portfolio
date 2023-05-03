<script>
	import ProjectCardList from '$lib/components/Project/ProjectCardList.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	import Star from '~icons/ph/star';
</script>

<section>
	<div class="featured">
		<SectionTitle sectionTitle="Featured Projects" let:sectionIcon>
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
