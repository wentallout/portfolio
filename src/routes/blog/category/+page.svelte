<script>
	import SectionTitle from '$sections/SectionTitle.svelte';
	import Folder from '~icons/ph/folder';
	import BlogTagsList from '$sections/blog/BlogTagsList.svelte';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<Breadcrumb />

<SectionTitle sectionTitle="Blog categories" >
	{#snippet children({ sectionIcon })}
		<Folder {...sectionIcon} />
	{/snippet}
</SectionTitle>

<BlogTagsList {data} />
