<script>
	export let data;
	import SectionTitle from '$components/sections/SectionTitle.svelte';
	import Folder from '~icons/ph/folder';
	import BlogTagsList from '$components/sections/blog/BlogTagsList.svelte';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';
</script>

<Breadcrumb />

<SectionTitle sectionTitle="Blog categories" let:sectionIcon>
	<Folder {...sectionIcon} />
</SectionTitle>

<BlogTagsList {data} />
