<script>
	import { fade } from 'svelte/transition';

	export let data;
</script>

{#key data.pathname}
	<div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
{/key}
