<script>
	export let label = 'message';
	export let placeholder = 'Something you want to tell me. Ex: jobs, ideas';
</script>

<label for={label} class="label small-text">{label}</label>
<textarea class="textarea small-text" name={label} id={label} {placeholder} required />

<style>
	.label {
		font-weight: 500;
		margin-bottom: var(--space-3xs);
	}

	.textarea {
		height: 7rem;

		font-family: inherit;
		padding: var(--space-xs) var(--space-xs);
		color: var(--text-color) !important;
		margin-bottom: var(--space-s);
		background-color: var(--bg-400);
		border: 0;
		border-radius: var(--border-radius-light);
		transition: var(--transition);
	}

	.textarea:focus {
		outline: 1px solid var(--primary-500);
	}
</style>
