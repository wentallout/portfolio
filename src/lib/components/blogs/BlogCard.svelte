<script>
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { CaretRight } from '$lib/assets/icons/icons';

	let {
		blogDate = '',
		blogId = '',
		blogLink = '',
		blogTags = ['blogTag1', 'blogTag2'],
		blogTitle = 'blogTitle',
		hasTags = true
	} = $props();
</script>

<a href={blogLink}>
	<article class="blog fancy-border">
		<MouseGlow />
		<div class="blog__info">
			{#if hasTags}
				<div class="tags">
					{#each blogTags as tag}
						<span class="tag text-xs">
							#{tag}
						</span>
					{/each}
				</div>
			{/if}

			<h5 class="blog__title text-small">
				{blogTitle}
			</h5>
		</div>
	</article>
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
		padding: var(--space-2xs) var(--space-mid);
		/* --- */

		/* OTHER */
		transition: var(--transition);
		position: relative;
		overflow: hidden;

		box-shadow: var(--boxShadow);
		background: var(--color-bg-gradient-subtle);
		/* --- */

		position: relative;
		border-radius: var(--border-radius-light);
	}

	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-2xs);
		transition: var(--transition);
	}

	.tag {
		font-weight: 300;
		font-size: var(--font-size-xs);
		color: var(--color-text-secondary);
	}

	.blog__info {
		display: flex;
		flex-direction: column;
	}

	.blog__title {
		overflow: hidden;

		/* FONT */
		font-weight: var(--fontWeightMid);
		color: var(--color-text);
		/* --- */

		/* LINE CLAMP */
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		/* --- */

		text-wrap: pretty;
	}
</style>
