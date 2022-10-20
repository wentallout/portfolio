<script>
	export let blogLink = '';

	export let blogTitle = 'blogTitle';
	export let blogDate = 'blogDate';
</script>

<a href={blogLink}>
	<div class="blog">
		<div class="blog__date xs-text">{blogDate}</div>
		<div class="blog__title base-text">{blogTitle}</div>
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

		position: relative;
	}

	.blog:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.blog__title {
		font-weight: 500;
	}

	.blog__date {
		/* flex */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;

		width: fit-content;
		height: 20px;

		/* typography */
		font-weight: 300;
		color: var(--neutral-700);
		border: 1px solid var(--neutral-700);
		background-color: var(--neutral-100);
		padding: 4px 8px;
		border-radius: var(--border-radius);
	}
</style>
