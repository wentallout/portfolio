<script>
	export let duration = '300ms';
	export let offset = 0;
	export let tolerance = 0;

	let headerClass = 'show';
	let y = 0;
	let lastY = 0;

	function deriveClass(y, dy) {
		if (y < offset) {
			return 'show';
		}

		if (Math.abs(dy) <= tolerance) {
			return headerClass;
		}

		if (dy < 0) {
			return 'hide';
		}

		return 'show';
	}

	function updateClass(y) {
		const dy = lastY - y;
		lastY = y;
		return deriveClass(y, dy);
	}

	function setTransitionDuration(node) {
		node.style.transitionDuration = duration;
	}

	$: headerClass = updateClass(y);
</script>

<svelte:window bind:scrollY={y} />

<div use:setTransitionDuration class={headerClass}>
	<slot />
</div>

<style>
	div {
		/* POSITION */
		position: fixed;
		top: 0;
		z-index: 10;
		width: 100%;

		transition: transform 100ms linear;
	}
	.show {
		transform: translateY(0%);
	}
	.hide {
		transform: translateY(-100%);
	}
</style>
