<script>
	import TextInput from '$lib/components/Input/TextInput.svelte';
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	import PageTitle from '$lib/components/Common/PageTitle.svelte';
	import BlogTagsList from '$lib/components/Blog/BlogTagsList.svelte';

	export let data;

	let allBlogs = data.blogs;

	import { onMount } from 'svelte';

	let searchTerm = '';
	let filteredBlogs = [];

	onMount(() => {
		filteredBlogs = [...allBlogs];
	});

	function handleSearchInput(event) {
		searchTerm = event.target.value.toLowerCase();
		filteredBlogs = allBlogs.filter((blog) => blog.meta.title.toLowerCase().includes(searchTerm));
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<PageTitle pageTitle="Blog" />

<TextInput bind:value={searchTerm} placeholder="Search blogs..." on:input={handleSearchInput} />

<section class="blog-list">
	<BlogTagsList {data} />
	<BlogListContainer>
		{#if filteredBlogs.length === 0}
			<div class="not-found small-text">No blogs found.</div>
		{:else}
			{#each filteredBlogs as blog}
				<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
			{/each}
		{/if}
	</BlogListContainer>
</section>

<style>
	.blog-list {
		margin-top: var(--space-m);
		min-height: 100vh;
	}

	.not-found {
		padding: var(--space-s) 0;
		color: var(--text-color-low);
	}
</style>
