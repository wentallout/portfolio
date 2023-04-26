<script>
	export let blogLink = '';
	export let blogTitle = 'blogTitle';
	export let blogDate = '';
	import Time from 'svelte-time';

	import CaretRight from '~icons/ph/caret-right';

	export let blogTags = ['cat1', 'cat2'];

	export let hasTags = true;
</script>

<a href={blogLink} class="blog">
	<article class="blog__info">
		{#if hasTags}
			<div class="tags">
				{#each blogTags as tag}
					<span class="tag xs-text">
						#{tag}
					</span>
				{/each}
			</div>
		{/if}

		<div class="blog__title base-text">{blogTitle}</div>
		<div class="blog__date xs-text">
			<Time timestamp={blogDate} relative />
		</div>
	</article>
	<div class="icon"><CaretRight color="var(--text-color)" /></div>
</a>

<style>
	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-xs);
	}

	.tag {
		color: var(--primary-500);
	}

	.blog__info {
		display: flex;
		flex-direction: column;
	}

	.blog {
		/* FLEX */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* --- */

		/* SIZE */
		width: 100%;
		height: 120px;
		padding: var(--space-s) var(--space-xs);
		/* --- */

		/* OTHER */
		transition: var(--transition);
		position: relative;
		overflow: hidden;
		/* --- */

		border-bottom: 1px solid var(--bg-400);
		box-shadow: var(--box-shadow-1);
	}

	.blog:hover {
		background-color: var(--bg-300);
	}

	.icon {
		transition: var(--transition);
	}

	.blog:hover .icon {
		padding-right: 5%;
	}

	.blog:hover .blog__date {
		color: var(--text-color-low);
	}

	.blog__title {
		font-weight: 500;
		overflow: hidden;
		color: var(--text-color);

		/* LINE CLAMP */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		/* --- */
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
