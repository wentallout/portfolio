<script>
</script>

<div class="small-text tag">
	<slot />
</div>

<style>
	.tag {
		display: inline-block;
		font-weight: 500;
		width: fit-content;

		border-radius: var(--border-radius-light);
		padding: 8px 14px;
		line-height: normal;
		background: var(--bg-400);

		color: var(--text-color);
		transition: var(--transition);
	}

	.tag:before {
		content: '#';
	}

	.tag:hover {
		background: var(--accent-400);
		color: var(--black);
	}
</style>
