<script>
</script>

<div class="xs-text tag">
	<slot />
</div>

<style>
	.tag {
		display: inline-block;
		font-weight: 400;
		width: fit-content;

		border-radius: var(--border-radius-light);
		padding: 8px 12px;
		line-height: normal;
		background: var(--accent);

		color: var(--colorPrimary);
		border: 1px solid var(--colorTextQuaternary);
		transition: var(--transition);
	}

	.tag:before {
		content: '#';
	}

	.tag:hover {
		background: var(--colorBgElevated);
	}
</style>
