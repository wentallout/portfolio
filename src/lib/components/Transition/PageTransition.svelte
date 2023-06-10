<script>
	import { fade, blur, scale } from 'svelte/transition';

	export let data;
</script>

{#key data.pathname}
	<div in:fade={{ duration: 150, delay: 150 }} out:blur={{ duration: 200 }}>
		<slot />
	</div>
{/key}
