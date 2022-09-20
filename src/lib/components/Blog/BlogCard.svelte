<script>
	export let blogLink = '';

	export let blogTitle = 'blogTitle';
	export let blogDate = 'blogDate';
</script>

<a href={blogLink}>
	<div class="blog">
		<div class="blog__title base-text">{blogTitle}</div>
		<div class="blog__date small-text">{blogDate}</div>
	</div>
</a>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		width: 100%;
		border-radius: var(--border-radius);
		border: var(--border);
		padding: 0.5rem 1rem;
		background-color: var(--neutral-200);
	}

	.blog:hover {
		border: var(--border-hover);
	}

	.blog__title {
		font-weight: 600;
	}

	.blog__date {
		font-weight: 400;
		color: var(--neutral-700);
	}
</style>
