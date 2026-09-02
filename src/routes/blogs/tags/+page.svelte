<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import BlogTagsList from '#lib/sections/blogs/BlogTagsList.svelte';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	import { getBlogs } from '#lib/remotes/blogs.remote.js';

	const blogs = await getBlogs();
</script>

<Breadcrumb />

<SectionTitle sectionTitle="Blog tags" />

<BlogTagsList data={{ blogs }} />
