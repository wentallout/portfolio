<script>
	export let data;
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';
	import Folder from '~icons/ph/folder';
	import BlogTagsList from '$components/Blog/BlogTagsList.svelte';
</script>

<SectionTitle sectionTitle="Category" let:sectionIcon>
	<Folder {...sectionIcon} />
</SectionTitle>

<BlogTagsList {data} />
