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
		margin-bottom: var(--space3XS);
	}

	.textarea {
		height: 7rem;
		font-family: inherit;
		padding: var(--spaceXS);
		color: var(--colorText) !important;
		margin-bottom: var(--spaceS);
		background-color: transparent;
		border: 1px solid var(--colorBorder);

		transition: outline 0.3s;
		resize: vertical;

		border-radius: var(--borderRadiusSM);
		background-color: var(--colorBgLayout);
	}

	.textarea:focus-visible {
		outline: 1px solid var(--colorPrimary);
		box-shadow: 0px 0px 4px var(--colorPrimary);
	}
</style>
