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
	on:click={handleButtonEffect}
	bind:this={btnEle}
	style="background-color: {backgroundColor}; border: {border}; color: {labelColor}"
	class="btn"
	type={type}>
	<slot />
	{label}
</button>

<style>
	.btn {
		border: 1px solid transparent;
		margin-right: var(--space-xs);
		overflow: hidden;
		position: relative;
	}

	.btn:hover {
		filter: brightness(70%);
	}
</style>
