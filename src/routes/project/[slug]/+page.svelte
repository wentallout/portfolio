<script>
	export let data;
</script>

<article>
	<h1 class="large-text">{data.title}</h1>
	<span class="small-text date">Published: {data.date}</span>
	<svelte:component this={data.content} />
</article>

<style>
	.date {
		font-weight: 300;
	}
</style>
