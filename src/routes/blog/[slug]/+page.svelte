<script>
	import Comments from '$components/Blog/Comments.svelte';
	import SEO from '$components/SEO/SEO.svelte';
	import Line from '$components/Common/Line.svelte';
	import PostContainer from '$components/Common/PostContainer.svelte';
	import Tag from '$components/Common/Tag.svelte';
	export let data;
	import Time from 'svelte-time';

	let article;
</script>

<SEO title={data.title} />

<article bind:this={article} class="info">
	{#if data.categories.length}
		<div class="category">
			{#each data.categories as category}
				<a class="content-tag" href="/blog/category/{category}">
					<Tag>
						{category}
					</Tag>
				</a>
			{/each}
		</div>
	{/if}
	<div class="date small-text">
		<strong>Published:</strong>
		<Time relative timestamp={data.date} />
	</div>

	<h1>{data.title}</h1>
	<Line />

	<PostContainer>
		<svelte:component this={data.content} />
	</PostContainer>

	<Comments category="Blogs" />
</article>

<style>
	.content-tag:after {
		content: none !important;
	}

	.info {
		display: block;
	}

	.date {
		display: block;
		margin: 0;
		color: var(--colorTextSecondary);
	}

	.category {
		color: var(--colorTextSecondary);
		gap: var(--space-xs);
		margin: 0;
		margin-bottom: var(--space-s);
	}
</style>
