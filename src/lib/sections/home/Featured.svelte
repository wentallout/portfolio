<script>
	import { SECTION_TITLES } from '$lib/constants/labels';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import ProjectList from '$sections/projects/ProjectList.svelte';
	import VideoDemoList from '$sections/projects/VideoDemoList.svelte';
</script>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle={SECTION_TITLES.featured} />
	<ProjectList />
</section>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle={SECTION_TITLES.webDemos} />
	<VideoDemoList />
</section>



