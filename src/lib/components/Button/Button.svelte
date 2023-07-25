<script>
	export let label = 'exampleLabel';
	export let labelColor = 'var(--colorBlack)';

	export let width = undefined;
	export let glowColor = 'var(--colorBgElevated)';
	export let type = 'submit';

	export let backgroundColor = 'transparent';
	export let borderColor = backgroundColor;
	export let border = `1px solid ${borderColor}`;
</script>

<button {type} class="pushable" style:--glow-color={glowColor} style:width>
	<span class="shadow" />
	<span class="edge" />
	<span
		class="front"
		style:background-color={backgroundColor}
		style:border
		style:color={labelColor}>
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

		box-shadow: var(--boxShadow);
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
		border-radius: var(--borderRadiusLight);
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
		border-radius: var(--borderRadiusLight);

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
		border-radius: var(--borderRadiusLight);

		color: white;

		will-change: transform;
		transform: translateY(-2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
		text-transform: capitalize;

		/* FONT */
		font-weight: var(--fontWeightLarge);
		line-height: normal;
		font-size: var(--fontSizeSmall);
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
