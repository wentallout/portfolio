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
		background: var(--bg-400);

		color: var(--text-color-low);
		transition: var(--transition);
	}

	.tag:before {
		content: '#';
		font-weight: 600;
	}

	.tag:hover {
		background: var(--accent-400);
	}
</style>
