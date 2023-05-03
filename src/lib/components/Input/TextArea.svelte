<script>
	export let label = 'message';
	export let placeholder = 'Something you want to tell me. Ex: jobs, ideas';

	export let name = '';
</script>

<label for={label} class="label small-text">{label}</label>
<textarea class="textarea small-text" {name} id={label} {placeholder} required />

<style>
	.label {
		font-weight: 500;
		margin-bottom: var(--space-3xs);
	}

	.textarea {
		height: 7rem;
		font-family: inherit;
		padding: var(--space-xs);
		color: var(--colorText) !important;
		margin-bottom: var(--space-s);
		background-color: transparent;
		border: 1px solid var(--colorBorder);

		transition: outline 0.3s;
		resize: vertical;
	}

	.textarea:focus-visible {
		outline: 1px solid var(--colorPrimary);
		box-shadow: 0px 0px 4px var(--colorPrimary);
	}
</style>
