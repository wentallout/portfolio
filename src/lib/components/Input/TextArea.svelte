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
		padding: var(--space-xs);
		color: var(--text-color) !important;
		margin-bottom: var(--space-s);
		background-color: transparent;
		border: 0;
		border-radius: var(--border-radius-light);
		transition: outline 0.3s;
		resize: vertical;

		background-color: var(--bg-400);
	}

	.textarea:focus-visible {
		outline: 1px solid var(--primary-500);
		filter: drop-shadow(0px 0px 4px var(--primary-500));
	}
</style>
