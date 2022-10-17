<script>
	export let src = '';
	export let alt = 'insert alt here';

	export let width = 600;
	export let height = 'auto';

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
		<img {width} {height} {src} loading="lazy" decoding="async" {alt} />
		<figcaption class="xs-text">{alt}</figcaption>
	</Lightbox>
</figure>

<style>
	figure {
		position: relative;
		margin: 0;
	}

	figcaption {
		position: absolute;
		bottom: 0;
		left: 0;
		width: fit-content;
		background: rgba(0, 0, 0, 0.7);
		color: var(--neutral-100);
		border-radius: 5px;
		padding: 4px 8px;
		font-weight: 300;
		scale: 0;
		transition: ease-in-out 0.3s;

		backdrop-filter: blur(5px);
	}

	figure:hover figcaption {
		scale: 1;
		/* transition: ease-in-out 0.3s; */
	}
</style>
