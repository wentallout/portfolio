<script>
</script>

<div class="xs-text tag">
	<slot />
</div>

<style>
	.tag {
		color: var(--colorPrimary);
		display: inline-block;
		font-weight: var(--fontWeightSmall);
		width: fit-content;

		border-radius: var(--border-radius-light);
		padding: 8px 12px;
		line-height: normal;

		border: 1px solid var(--colorBorder);
		transition: var(--transition);

		box-shadow: var(--boxShadow);
	}

	.tag:before {
		content: '#';
	}

	.tag:hover {
		background: var(--colorBgElevated);
		color: var(--colorPrimaryHover);
	}
</style>
