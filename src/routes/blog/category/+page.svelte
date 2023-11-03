<script>
	export let data;
	import SectionTitle from '$components/sections/SectionTitle.svelte';
	import Folder from '~icons/ph/folder';
	import BlogTagsList from '$lib/sections/blog/BlogTagsList.svelte';
</script>

<SectionTitle sectionTitle="Category" let:sectionIcon>
	<Folder {...sectionIcon} />
</SectionTitle>

<BlogTagsList {data} />
