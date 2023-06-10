<script>
	import ProjectCardList from '$components/Project/ProjectCardList.svelte';
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';

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
