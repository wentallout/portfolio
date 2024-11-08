<script>
	import Time from 'svelte-time';

	import { fade } from 'svelte/transition';
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { CaretRight } from '$lib/assets/icons/icons';
	/** @type {{blogLink?: string, blogTitle?: string, blogDate?: string, blogTags?: any, hasTags?: boolean}} */
	let {
		blogLink = '',
		blogTitle = 'blogTitle',
		blogDate = '',
		blogTags = ['category1', 'category2'],
		hasTags = true
	} = $props();
</script>

<a class="blog custom-border" href={blogLink} transition:fade={{ duration: 300 }}>
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
		<div class="blog__date text-xs">
			<Time format="YYYY" timestamp={blogDate} />
		</div>
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

		&:hover {
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

	.blog__date {
		/* FLEX */
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: row;
		/* --- */

		/* FONT */
		font-weight: var(--fontWeightLarge);
		color: var(--colorTextTertiary);
		font-size: var(--fontSizeXL);
		/* --- */

		opacity: 0;
		position: absolute;
		top: 50%;
		bottom: 50%;
		right: 1%;
		transform: rotate(90deg);
	}

	.blog:hover .blog__date {
		opacity: 0.1;
	}
</style>
