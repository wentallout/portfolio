<script>
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { haptic } from '$lib/actions/haptics';

	let {
		blogLink = '',
		blogTags = ['blogTag1', 'blogTag2'],
		blogTitle = 'blogTitle',
		hasTags = true
	} = $props();
</script>

<a href={blogLink} use:haptic={'selection'}>
	<article class="blog">
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
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 140px;
		padding: var(--space-2xs) var(--space-mid);
		position: relative;
		overflow: hidden;
		box-shadow: var(--boxShadow);
		background: var(--color-bg-gradient-subtle);
		border-radius: var(--border-radius-light);
		transition:
			transform 250ms var(--ease-out-custom),
			box-shadow 250ms var(--ease-out-custom),
			background-color 250ms var(--ease-out-custom);
		transform-origin: center;
		will-change: transform;
	}

	a:active .blog {
		transform: translateY(-2px) scale(0.98);
		transition-duration: 80ms;
	}

	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-2xs);
		margin-bottom: var(--space-xs);
	}

	.tag {
		font-weight: 300;
		font-size: var(--font-size-xs);
		color: var(--color-text-secondary);
		transition: color 200ms var(--ease-out-custom);
	}

	a:hover .tag {
		color: var(--color-primary-hover);
	}

	.blog__info {
		display: flex;
		flex-direction: column;
	}

	.blog__title {
		overflow: hidden;
		font-weight: var(--fontWeightMid);
		color: var(--color-text);
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		text-wrap: pretty;
		transition: color 200ms var(--ease-out-custom);
	}

	a:hover .blog__title {
		color: var(--color-primary);
	}
</style>
