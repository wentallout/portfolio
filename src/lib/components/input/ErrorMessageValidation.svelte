<script>
	/** @type {{errors: any}} */
	let { errors } = $props();
</script>

<div class="invalid text-xs">{errors}</div>

<style>
	.invalid {
		color: var(--color-error);
		margin-top: -12px;
		margin-bottom: var(--space-mid);
	}
</style>
