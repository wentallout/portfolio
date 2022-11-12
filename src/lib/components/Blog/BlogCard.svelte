<script>
	export let blogLink = '';

	export let blogTitle = 'blogTitle';
	export let blogDate = 'blogDate';
</script>

<a href={blogLink} class="blog">
	<div class="blog__date xs-text">{blogDate}</div>
	<div class="blog__title base-text">{blogTitle}</div>
</a>

<style>
	.blog {
		border-radius: var(--border-radius-light);
		box-shadow: var(--box-shadow);
		background-color: var(--bg);
		/* FLEX */
		display: flex;
		flex-direction: column;

		/* SIZE */
		width: 100%;

		transition: 0.3s;
		position: relative;

		height: 140px;

		position: relative;
		border: 1px solid transparent;

		padding: var(--space-s) var(--space-m);
	}

	.blog:before {
		position: absolute;
		content: '';
		background: url('/images/bg_pattern_rhombus_beta.webp') repeat top center/20px 52px;
		top: 0;
		right: 0;
		width: var(--space-m);
		height: 100%;
		z-index: 2;
		opacity: 0;
		transition: 0.3s;
		border-radius: var(--border-radius-light);
	}

	.blog:hover::before {
		opacity: 1;
		background-color: var(--primary-500);
	}

	@media (min-width: 768px) {
		.blog {
			width: 40%;
		}
	}

	.blog:hover {
		box-shadow: var(--box-shadow-hover);
		color: var(--primary-500);
		border: 1px solid var(--primary-500);
	}

	/* .blog:hover .blog__title {
		background: var(--gradient);
		background-clip: text;
		color: transparent;
	} */

	.blog__title {
		font-weight: 500;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;

		z-index: 3;
	}

	.blog__date {
		z-index: 3;

		/* flex */
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: row;
		/* typography */
		font-weight: 300;
		color: var(--neutral-800);
	}
</style>
