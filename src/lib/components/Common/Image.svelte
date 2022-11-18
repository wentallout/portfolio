<script>
	export let src = '';
	export let alt = 'insert alt here';

	export let width = 600;
	export let height = 600;

	export let hasCaption = true;

	export let imagePreset = 'fullscreen';

	import { Lightbox } from 'svelte-lightbox';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	onMount(() => {
		if (browser) {
			document.lazyloadInstance.update();
		}
	});
</script>

<figure>
	<Lightbox
		enableClickToClose="true"
		{imagePreset}
		enableImageExpand="true"
		transitionDuration="50">
		<img class="lazy" {width} {height} {src} loading="lazy" decoding="async" {alt} />

		{#if hasCaption}
			<figcaption class="caption xs-text">{alt}</figcaption>
		{/if}
	</Lightbox>
</figure>

<style>
	figure {
		position: relative;
		margin: 0;
	}

	.caption {
		position: absolute;
		bottom: 0;
		left: 0;
		width: fit-content;
		background: rgba(0, 0, 0, 0.7);
		color: var(--neutral-100);
		padding: 4px 8px;
		font-weight: 300;
		scale: 0;
		transition: ease-in-out 0.3s;
		backdrop-filter: blur(5px);
	}

	figure:hover .caption {
		scale: 1;
	}
</style>
