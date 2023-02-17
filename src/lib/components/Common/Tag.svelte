<script>
</script>

<div class="small-text tag">
	<slot />
</div>

<style>
	.tag {
		display: inline-block;
		font-weight: 300;
		width: fit-content;
		padding-left: var(--space-2xs);
		padding-right: var(--space-2xs);
		padding-top: var(--space-3xs);
		padding-bottom: var(--space-3xs);
		line-height: normal;
		background: var(--black-400);
		border-radius: var(--border-radius);
		color: var(--text-color-low);
		transition: var(--transition);
	}

	.tag:before {
		content: '#';
	}

	.tag:hover {
		background: var(--primary-500);
		color: var(--black);
		font-weight: 600;
	}
</style>
