<script>
	/** @type {{label?: string, placeholder?: string, name?: string}} */
	let {
		label = 'message',
		name = '',
		placeholder = 'Something you want to tell me. Ex: jobs, ideas'
	} = $props();
</script>

<label class="label text-small" for={label}>{label}</label>
<textarea id={label} {name} class="textarea text-small" {placeholder} required></textarea>

<style>
	.label {
		font-weight: var(--fontWeightMid);
		margin-bottom: var(--space-3xs);
	}

	.textarea {
		height: 7rem;
		font-family: inherit;
		padding: var(--space-xs);
		color: var(--color-text) !important;
		margin-bottom: var(--space-small);
		background-color: transparent;
		border: 1px solid var(--color-border);

		transition: outline 0.3s;
		resize: vertical;

		border-radius: var(--border-radius-lighter);
		background-color: var(--color-bg-layout);
	}

	.textarea:focus-visible {
		outline: 1px solid var(--color-primary);
		box-shadow: 0px 0px 4px var(--color-primary);
	}
</style>
