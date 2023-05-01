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
	<div class="icon"><CaretRight color="var(--colorText)" /></div>
</a>

<style>
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

		outline: 1px solid var(--colorTextQuaternary);

		box-shadow: var(--boxShadow);
	}

	/* @media (min-width: 992px) {
		.blog {
			width: 50%;
		}
	} */

	.blog:hover {
		background-color: var(--colorBgElevated);
		transform: scale(1.1);
		z-index: 2;
	}

	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-xs);
	}

	.tag {
		color: var(--colorPrimary);
	}

	.blog__info {
		display: flex;
		flex-direction: column;
	}

	.icon {
		transition: var(--transition);
	}

	.blog__title {
		font-weight: 500;
		overflow: hidden;
		color: var(--colorText);

		/* LINE CLAMP */
		display: -webkit-box;
		-webkit-line-clamp: 1;
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
		color: var(--colorTextSecondary);
		/* --- */
	}
</style>
