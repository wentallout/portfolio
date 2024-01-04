<script>
	export let data;
	import SectionTitle from '$sections/SectionTitle.svelte';
	import Folder from '~icons/ph/folder';
	import BlogTagsList from '$sections/blog/BlogTagsList.svelte';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';
</script>

<Breadcrumb />

<SectionTitle sectionTitle="Blog categories" let:sectionIcon>
	<Folder {...sectionIcon} />
</SectionTitle>

<BlogTagsList {data} />
