<script>
	export let data;
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import Folder from '~icons/ph/folder';
	import BlogTagsList from '$lib/components/Blog/BlogTagsList.svelte';
</script>

<SectionTitle sectionTitle="Category" let:sectionIcon>
	<Folder {...sectionIcon} />
</SectionTitle>

<BlogTagsList {data} />
