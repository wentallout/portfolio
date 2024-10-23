<script>
	import Tag from '~icons/ph/tag';
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
		color: var(--colorTextSecondary);
		display: inline-block;
		font-weight: var(--fontWeightSmall);
		width: fit-content;
		border-radius: var(--borderRadiusLight);
		padding: 6px 8px;
		line-height: normal;
		border: 1px solid var(--colorBorder);
		transition: var(--transition);
		display: flex;
		flex-direction: row;
		gap: var(--space2XS);
		font-size: var(--fontSizeXS);
		box-shadow: var(--boxShadow);
	}

	.tag__text:before {
		content: '#';
	}

	.tag:hover {
		background: var(--colorBgElevated);
		color: var(--colorPrimaryHover);
	}
</style>
