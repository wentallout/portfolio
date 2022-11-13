<script>
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}>
	{#if isInView}
		<div in:fade>
			<slot />
		</div>
	{/if}
</div>
