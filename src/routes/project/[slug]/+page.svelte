<script>
	import PostContainer from '$components/Common/PostContainer.svelte';
	import SEO from '$components/SEO/SEO.svelte';
	import Comments from '$lib/components/Comments/Comments.svelte';
	import PostInfo from '$lib/components/Blog/PostInfo.svelte';
	export let data;
</script>

<SEO title={data.title} />

<article>
	<PostInfo {data} />

	<PostContainer>
		<svelte:component this={data.content} />
	</PostContainer>

	<Comments category="Projects" />
</article>
