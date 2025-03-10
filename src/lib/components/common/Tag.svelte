<script>
	import { Tag } from '$lib/assets/icons/icons';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="text-xs tag">
	<!-- <Tag height="16" width="16" /> -->

	<span class="tag__text">
		{@render children?.()}
	</span>
</div>

<style>
	.tag {
		color: var(--color-text-secondary);
		display: inline-block;
		font-weight: var(--fontWeightXS);
		width: fit-content;
		border-radius: var(--border-radius-light);
		padding: 6px 8px;
		line-height: normal;
		border: 1px solid var(--color-border);
		transition: var(--transition);
		display: flex;
		flex-direction: row;
		gap: var(--space-2xs);
		font-size: var(--font-size-xs);
		box-shadow: var(--boxShadow);
	}

	.tag__text:before {
		content: '#';
	}

	.tag:hover {
		background: var(--color-bg-elevated);
		color: var(--color-primary-hover);
	}
</style>
