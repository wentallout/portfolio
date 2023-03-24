<script>
	export let blogLink = '';
	export let blogTitle = 'blogTitle';
	export let blogDate = '';
	import Time from 'svelte-time';
</script>

<a href={blogLink} class="blog">
	<div class="blog__date xs-text">
		<Time timestamp={blogDate} relative />
	</div>
	<div class="blog__title base-text">{blogTitle}</div>
</a>

<style>
	.blog {
		/* FLEX */
		display: flex;
		flex-direction: column;
		/* --- */

		/* SIZE */
		width: 100%;
		height: 120px;

		padding: var(--space-s);
		/* --- */

		/* OTHER */
		transition: var(--transition);
		position: relative;
		border-radius: var(--border-radius);
		overflow: hidden;
		/* --- */

		background-color: var(--bg-400);
		border: 1px solid transparent;

		box-shadow: var(--box-shadow-1);
	}

	.blog:hover {
		border: 1px solid var(--primary-500);
	}

	.blog:hover .blog__title {
		color: var(--primary-500);
	}

	.blog:hover .blog__date {
		color: var(--text-color-low);
	}

	.blog__title {
		font-weight: 500;
		overflow: hidden;

		/* LINE CLAMP */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		/* --- */
		color: var(--text-color);
	}

	.blog__date {
		/* FLEX */
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: row;
		/* --- */

		/* FONT */
		font-weight: 400;
		color: var(--text-color-low);
		/* --- */
	}
</style>
