<script>
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import { Folder } from '$lib/assets/icons/icons';
	import BlogTagsList from '$sections/blogs/BlogTagsList.svelte';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<Breadcrumb />

<SectionTitle sectionTitle="Blog categories">
	{#snippet children({ sectionIcon })}
		<Folder {...sectionIcon} />
	{/snippet}
</SectionTitle>

<BlogTagsList {data} />
