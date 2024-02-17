<script>
	import Tag from '~icons/ph/tag';
</script>

<div class="text-xs tag">
	<Tag height="16" width="16" />

	<slot />
</div>

<style>
	.tag {
		color: var(--colorPrimary);
		display: inline-block;
		font-weight: var(--fontWeightSmall);
		width: fit-content;

		border-radius: var(--borderRadiusLight);
		padding: 8px 12px;
		line-height: normal;

		border: 1px solid var(--colorBorder);
		transition: var(--transition);
		display: flex;
		flex-direction: row;
		gap: var(--space2XS);
		box-shadow: var(--boxShadow);
	}

	/* .tag:before {
		content: '#';
	} */

	.tag:hover {
		background: var(--colorBgElevated);
		color: var(--colorPrimaryHover);
	}
</style>
