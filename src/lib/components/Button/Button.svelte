<script>
	export let label = 'exampleLabel';
	export let labelColor = 'var(--black)';
	export let backgroundColor = 'transparent';
	export let width = '';

	export let type = 'submit';
	export let border = '';

	let btnEle;

	function handleButtonEffect(e) {
		const x = e.pageX;
		const y = e.pageY;

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const circle = window.document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';
		this.appendChild(circle);
		setTimeout(() => circle.remove(), 500);
	}
</script>

<button
	class="btn glow-effect"
	style="background-color: {backgroundColor}; border: {border}; color: {labelColor};width: {width}"
	on:click={handleButtonEffect}
	bind:this={btnEle}
	{type}>
	<slot />
	{label}

	<svg class="glow-container">
		<rect pathLength="100" stroke-linecap="round" class="glow-blur" />
		<rect pathLength="100" stroke-linecap="round" class="glow-line" />
	</svg>
</button>

<style>
	.glow-effect {
		--glow-line-color: #fff;
		--glow-line-thickness: 2px;
		--glow-line-length: 20px;
		--glow-blur-color: #fff;
		--glow-blur-size: 5px;
		--glow-offset: 10px;
		--animation-speed: 1200ms;
		/* do not change, used for calculations */
		--container-offset: 100px;
		position: relative;
	}

	.glow-container {
		pointer-events: none;
		position: absolute;
		inset: calc(var(--container-offset) / -2);
		width: calc(100% + var(--container-offset));
		height: calc(100% + var(--container-offset));
		opacity: 0;
	}

	.glow-blur,
	.glow-line {
		width: calc(100% - var(--container-offset) + var(--glow-offset));
		height: calc(100% - var(--container-offset) + var(--glow-offset));
		x: calc((var(--container-offset) / 2) + calc(var(--glow-offset) / -2));
		y: calc((var(--container-offset) / 2) + calc(var(--glow-offset) / -2));
		rx: var(--border-radius);
		fill: transparent;
		stroke: black;
		stroke-width: 5px;
		stroke-dasharray: var(--glow-line-length) calc(50px - var(--glow-line-length));
	}

	.glow-effect:is(:hover, :focus) :is(.glow-line, .glow-blur) {
		stroke-dashoffset: -80px;
		transition: stroke-dashoffset var(--animation-speed) ease-in;
	}

	.glow-line {
		stroke: var(--glow-line-color);
		stroke-width: var(--glow-line-thickness);
	}

	.glow-blur {
		filter: blur(var(--glow-blur-size));
		stroke: var(--glow-blur-color);
		stroke-width: var(--glow-blur-size);
	}

	@keyframes glow-visibility {
		0%,
		100% {
			opacity: 0;
		}

		25%,
		75% {
			opacity: 1;
		}
	}

	.glow-effect:is(:hover, :focus) .glow-container {
		animation: glow-visibility ease-in-out var(--animation-speed);
	}

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
		max-width: 640px;

		/* FONT */
		font-weight: 600;
		line-height: normal;
		font-size: var(--font-size-small);
		/* --- */

		appearance: none;

		border: 1px solid transparent;
		border-radius: var(--border-radius);

		cursor: pointer;
		transition: var(--transition);

		/* make sure the text doesn't wrap */
		white-space: nowrap;

		/* weird */
		outline-color: transparent;
	}
</style>
