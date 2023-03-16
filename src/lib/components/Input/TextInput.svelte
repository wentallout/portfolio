<script>
	export let label = 'label';
	export let type = 'text';
	export let placeholder = '';
</script>

<label for={label} class="label small-text">{label}</label>
<input {placeholder} class="input small-text" {type} name={label} id={label} required />

<style>
	.label {
		font-weight: 500;
		margin-bottom: var(--space-3xs);
	}

	.input {
		background-color: var(--bg-400);

		/* FONT */
		font-family: inherit;
		color: var(--text-color) !important;
		/* --- */

		/* SPACING */
		padding: var(--space-xs) var(--space-xs);
		margin-bottom: var(--space-s);
		/* --- */

		height: 3.5rem;
		border: 0;
		border-radius: var(--border-radius-light);

		/* OTHER */
		transition: var(--transition);
	}

	.input:focus-visible {
		outline: 1px solid var(--primary-500);
	}
</style>
