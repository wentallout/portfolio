<script lang="ts">
	import { SECTION_TITLES } from '#lib/constants/labels.js';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	import ProjectList from '#lib/sections/projects/ProjectList.svelte';
	import VideoDemoList from '#lib/sections/projects/VideoDemoList.svelte';
</script>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle={SECTION_TITLES.featured} />
	<ProjectList />
</section>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle={SECTION_TITLES.webDemos} />
	<VideoDemoList />
</section>
