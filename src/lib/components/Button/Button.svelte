<script>
	import { onMount } from 'svelte';

	export let label = 'exampleLabel';
	export let labelColor = 'var(--neutral-900)';
	export let backgroundColor = 'transparent';

	export let type = 'submit';
	export let border = '';

	let btnEle;
	onMount(() => {});

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
	class="btn"
	style="background-color: {backgroundColor}; border: {border}; color: {labelColor}"
	on:click={handleButtonEffect}
	bind:this={btnEle}
	{type}>
	<slot />
	{label}
</button>

<style>
	.btn {
		/* flex */
		display: flex;
		justify-content: center;
		align-items: center;

		/* padding */
		padding: 12px 24px;

		/* width */
		width: fit-content;

		transition: 0.3s;
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		font-weight: 500;

		border: 1px solid transparent;
		border-radius: var(--border-radius);
		overflow: hidden;
		position: relative;

		cursor: pointer;
	}

	.btn:hover {
		filter: brightness(80%);
	}
</style>
