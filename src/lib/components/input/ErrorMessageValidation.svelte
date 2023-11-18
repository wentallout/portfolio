<script>
	export let errors;
</script>

<div class="invalid text-xs">{errors}</div>

<style>
	.invalid {
		color: var(--colorError);
		margin-top: -12px;
		margin-bottom: var(--spaceM);
	}
</style>
