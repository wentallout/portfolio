<script>
	export let label = 'exampleLabel';
	export let labelColor = 'var(--black)';
	export let backgroundColor = 'transparent';
	export let width = '';

	export let type = 'submit';
	export let border = '';

	let btnEle;
</script>

<button
	class="btn"
	style="background-color: {backgroundColor}; border: {border}; color: {labelColor};width: {width}"
	bind:this={btnEle}
	{type}>
	<slot />
	{label}
</button>

<style>
	.btn {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/* --- */

		/* PADDING */
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		/* --- */

		/* WIDTH */
		width: 100%;

		/* FONT */
		font-weight: 600;
		line-height: normal;
		font-size: var(--font-size-small);
		/* --- */

		appearance: none;

		border: 1px solid transparent;
		border-radius: var(--border-radius-light);

		cursor: pointer;
		transition: var(--transition);

		/* make sure the text doesn't wrap */
		white-space: nowrap;

		/* weird */
		outline-color: transparent;
	}

	.btn:hover {
		filter: brightness(1.2);
		box-shadow: 0 0 5px var(--text-color);
	}

	.btn:focus-visible {
		outline: 4px dashed var(--primary-500);
	}
</style>
