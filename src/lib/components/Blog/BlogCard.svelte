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
		padding: 1rem 2rem;
		box-shadow: var(--box-shadow);
		transition: 0.3s;
	}

	.blog:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.blog__title {
		font-weight: 500;
	}

	.blog__date {
		font-weight: 300;
		color: var(--neutral-800);
	}
</style>
