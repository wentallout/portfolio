<script>
	import ProjectList from '$sections/project/ProjectList.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';

	import Star from '~icons/ph/star';
</script>

<section>
	<div class="featured">
		<SectionTitle sectionTitle="Featured" let:sectionIcon>
			<Star {...sectionIcon} />
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
