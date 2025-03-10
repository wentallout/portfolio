<script>
	import SectionTitle from '$sections/SectionTitle.svelte';

	import BlogTagsList from '$sections/blog/BlogTagsList.svelte';
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import { Folder } from '$lib/assets/icons/icons';
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
