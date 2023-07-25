<script>
	export let blogLink = '';
	export let blogTitle = 'blogTitle';
	export let blogDate = '';
	import Time from 'svelte-time';

	import CaretRight from '~icons/ph/caret-right';
	export let blogTags = ['category1', 'category2'];
	export let hasTags = true;
</script>

<a href={blogLink} class="blog">
	<article class="blog__info">
		{#if hasTags}
			<div class="tags">
				{#each blogTags as tag}
					<span class="tag text-xs">
						#{tag}
					</span>
				{/each}
			</div>
		{/if}

		<div class="blog__title text-base">{blogTitle}</div>
		<div class="blog__date text-xs">
			<Time timestamp={blogDate} relative />
		</div>
	</article>
	<span class="blog__icon">
		<CaretRight color="var(--colorText)" width="16" height="16" />
	</span>
</a>

<style lang="postcss">
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
		padding: var(--spaceS) var(--spaceXS);
		/* --- */

		/* OTHER */
		transition: var(--transition);
		position: relative;
		overflow: hidden;
		border-radius: var(--borderRadius);
		/* --- */

		outline: 1px solid var(--colorBorder);

		box-shadow: var(--boxShadow);

		&:hover {
			background-color: var(--colorBgElevated);
			box-shadow: -5px 5px var(--colorPrimaryHover);
			transform: translate(5px, -5px);
		}
	}

	.blog:hover .blog__icon {
		opacity: 1;
	}

	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--spaceXS);
	}

	.tag {
		color: var(--colorPrimary);
	}

	.blog__info {
		display: flex;
		flex-direction: column;
	}

	.blog__icon {
		opacity: 0;
		transition: var(--transition);
		flex: none;
	}

	.blog__title {
		font-weight: var(--fontWeightMid);
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
		font-weight: var(--fontWeightSmall);
		color: var(--colorTextSecondary);
		/* --- */
	}
</style>
