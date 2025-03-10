<script>
	/** @type {{label?: string, labelColor?: string, width?: any, glowColor?: string, type?: string, backgroundColor?: string, borderColor?: any, border?: any, shadowColor?: any, children?: import('svelte').Snippet}} */
	let {
		backgroundColor = 'transparent',
		borderColor = backgroundColor,
		border = `1px solid ${borderColor}`,
		children,
		glowColor = 'var(--color-bg-elevated)',
		label = 'exampleLabel',
		labelColor = 'var(--color-black)',
		shadowColor = backgroundColor,
		type = 'submit',
		width = undefined
	} = $props();
</script>

<button style:--glow-color={glowColor} style:width class="pushable" {type}>
	<span style:background-color={shadowColor} class="shadow"></span>

	<span
		style:background-color={backgroundColor}
		style:border
		style:color={labelColor}
		class="front">
		{@render children?.()}
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
		border-radius: var(--border-radius-light);

		box-shadow: var(--boxShadow);
	}

	@media (min-width: 768px) {
		.pushable {
			width: fit-content;
		}
	}

	.shadow {
		/* POSITION */
		position: absolute;
		top: 0;
		left: 0;
		/* --- */

		width: 100%;
		height: 100%;
		border-radius: var(--border-radius-light);
		filter: brightness(0.7);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
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

		/* FONT */
		font-weight: var(--fontWeightLarge);
		line-height: normal;
		font-size: var(--font-size-small);
		text-box: trim-both cap alphabetic;
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
