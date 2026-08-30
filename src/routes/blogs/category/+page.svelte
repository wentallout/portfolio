<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import BlogTagsList from '#lib/sections/blogs/BlogTagsList.svelte';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<Breadcrumb />

<SectionTitle sectionTitle="Blog categories" />

<BlogTagsList {data} />
