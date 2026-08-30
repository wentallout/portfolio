<script lang="ts">
	import Comments from '#lib/components/blogs/BlogComments.svelte';
	import PostContainer from '#lib/components/blogs/BlogContainer.svelte';
	import PostInfo from '#lib/components/blogs/BlogInfo.svelte';
	import SEO from '#lib/components/seo/SEO.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<SEO path={`/blogs/${data.slug}`} title={data.title} />

<article class="w-full bg-background relative">
	<PostInfo {data} hasCategory={true} />

	<PostContainer>
		<data.content />
	</PostContainer>

	<Comments category="Blogs" />
</article>
