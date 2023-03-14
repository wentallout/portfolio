<script>
	export let label = 'label';
	export let type = 'text';
</script>

<label for={label} class="label small-text">{label}</label>
<input class="input small-text" {type} name={label} id={label} required />

<style>
	.label {
		font-weight: 500;
		margin-bottom: var(--space-3xs);
	}

	.input {
		font-family: inherit;
		padding: var(--space-xs) var(--space-xs);
		color: var(--text-color) !important;
		margin-bottom: var(--space-s);
		background-color: var(--bg-400);
		height: 3.5rem;
		border: 0;
		border-radius: var(--border-radius-light);
		transition: var(--transition);
	}

	.input:focus-visible {
		outline: 1px solid var(--primary-500);
	}
</style>
