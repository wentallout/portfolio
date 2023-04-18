<script>
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	export let data;

	const duration = 200;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	// in:fade={{ duration: 150, delay: 150 }}
	// out:fade={{ duration: 150 }}
</script>

{#key data.pathname}
	<div in:fly={transitionIn} out:fly={transitionOut}>
		<slot />
	</div>
{/key}
