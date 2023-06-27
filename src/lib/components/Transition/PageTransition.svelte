<script>
	import { fade, blur } from 'svelte/transition';

	export let data;
</script>

{#key data.pathname}
	<div in:fade|global={{ duration: 150, delay: 150 }} out:blur|global={{ duration: 200 }}>
		<slot />
	</div>
{/key}
