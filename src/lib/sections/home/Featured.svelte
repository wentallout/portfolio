<script lang="ts">
	import { SECTION_TITLES } from '#lib/constants/labels.js';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	import ProjectList from '#lib/sections/projects/ProjectList.svelte';
	import VideoDemoList from '#lib/sections/projects/VideoDemoList.svelte';
</script>

<div class="flex flex-col gap-10 md:gap-16 w-full">
	<section class="w-full relative border border-border bg-background overflow-hidden">
		<SectionTitle sectionTitle={SECTION_TITLES.featured} />
		<ProjectList />
	</section>

	<section class="w-full relative border border-border bg-background overflow-hidden">
		<SectionTitle sectionTitle={SECTION_TITLES.webDemos} />
		<VideoDemoList />
	</section>
</div>
