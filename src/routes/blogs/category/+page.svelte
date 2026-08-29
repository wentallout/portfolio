<script>
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import BlogTagsList from '$sections/blogs/BlogTagsList.svelte';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<Breadcrumb />

<SectionTitle sectionTitle="Blog categories" />

<BlogTagsList {data} />
