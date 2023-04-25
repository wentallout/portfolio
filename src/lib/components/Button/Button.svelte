<script>
	export let label = 'exampleLabel';
	export let labelColor = 'var(--bg-500)';
	export let backgroundColor = 'transparent';
	export let width = '';

	export let type = 'submit';

	export let borderColor = backgroundColor;
	export let border = `1px solid ${borderColor}`;
</script>

<button {type} class="pushable" style="--glow-color:{borderColor}; width:{width}">
	<span class="shadow" />
	<span class="edge" />
	<span
		style="background-color: {backgroundColor}; border: {border}; color: {labelColor};"
		class="front">
		<slot />
		{label}
	</span>
</button>

<style>
	.pushable {
		position: relative;
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
		transition: filter 250ms;
		width: 100%;
	}

	@media (min-width: 992px) {
		.pushable {
			width: fit-content;
		}
	}

	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius-light);
		background: var(--glow-color);
		filter: brightness(0.8);

		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius-light);

		background: var(--glow-color);
		filter: brightness(0.8);
	}
	.front {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		gap: 4px;
		position: relative;
		padding: 12px 42px;
		border-radius: var(--border-radius-light);

		color: white;

		will-change: transform;
		transform: translateY(-2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
		text-transform: capitalize;

		/* FONT */
		font-weight: 600;
		line-height: normal;
		font-size: var(--font-size-small);
		/* --- */
	}
	.pushable:hover {
		filter: brightness(110%);

		filter: drop-shadow(0 0 5px var(--glow-color));
	}
	.pushable:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	.pushable:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	.pushable:focus:not(:focus-visible) {
		outline: none;
	}
</style>
