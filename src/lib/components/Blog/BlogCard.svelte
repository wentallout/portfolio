<script>
	export let blogLink = '';

	export let blogTitle = 'blogTitle';

	export let blogDate = '';
	import Time from 'svelte-time';
</script>

<a href={blogLink} class="blog">
	<div class="blog__date xs-text">
		<Time timestamp={blogDate} />
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
		height: 144px;
		border: 1px solid transparent;
		padding: var(--space-s) var(--space-m);
		/* --- */

		/* OTHER */
		transition: var(--transition);
		position: relative;
		border-radius: var(--border-radius-light);
		overflow: hidden;
		/* --- */

		box-shadow: var(--box-shadow);

		background-color: var(--bg);
	}

	.blog:before {
		position: absolute;
		content: '';
		background-size: contain;
		background: url('/images/diamonds.svg') center;
		top: 0;
		right: 0;
		width: var(--space-m);
		height: 100%;
		z-index: 2;
		opacity: 0;
		transition: var(--transition);
	}

	.blog:hover::before {
		opacity: 1;
		background-color: var(--primary-500);
	}

	.blog:hover {
		background-color: var(--neutral-900);
		border: 1px solid var(--primary-500);
		box-shadow: var(--box-shadow-hover);
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
		z-index: 3;
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

		z-index: 3;
	}
</style>
