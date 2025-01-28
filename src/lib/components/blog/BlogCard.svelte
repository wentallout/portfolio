<script>
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { CaretRight } from '$lib/assets/icons/icons';

	/** @type {{blogLink?: string, blogTitle?: string, blogDate?: string, blogTags?: any, hasTags?: boolean}} */
	let {
		blogDate = '',
		blogId = '',
		blogLink = '',
		blogTags = ['blogTag1', 'blogTag2'],
		blogTitle = 'blogTitle',
		hasTags = true
	} = $props();
</script>

<a class="blog" href={blogLink}>
	<MouseGlow />
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

		<div class="blog__title text-small">{blogTitle}</div>
	</article>
	<span class="blog__icon">
		<CaretRight color="var(--colorText)" height="16" width="16" />
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
		height: 140px;
		padding: var(--space2XS) var(--spaceM);
		/* --- */

		/* OTHER */
		transition: var(--transition);
		position: relative;
		overflow: hidden;

		box-shadow: var(--boxShadow);
		background: var(--colorBgGradientSubtle);
		/* --- */

		position: relative;
		border-radius: var(--borderRadiusLight);
		border: 1px solid var(--colorBorderSecondary);

		&:hover {
			box-shadow: -5px 5px var(--colorPrimaryHover);
			transform: translate(5px, -5px);
			border: 1px solid var(--colorBorder);
		}
	}

	.blog:hover .blog__icon {
		opacity: 1;
	}

	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space2XS);
		transition: var(--transition);
	}

	.tag {
		font-weight: 300;
		font-size: var(--fontSizeXS);
		color: var(--colorTextQuaternary);
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
		overflow: hidden;

		/* FONT */
		font-weight: var(--fontWeightMid);
		color: var(--colorText);
		/* --- */

		/* LINE CLAMP */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		/* --- */

		text-wrap: balance;
	}
</style>
