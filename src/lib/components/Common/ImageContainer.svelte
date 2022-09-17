<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Image } from '@rodneylab/sveltekit-components';

	import meta from '$lib/assets/your-image.jpg?w=768&metadata';
	import srcsetJpeg from '$lib/assets/your-image.jpg?w=1536;1280;768;640&jpeg&srcset';
	import srcsetWebp from '$lib/assets/your-image.jpg?w=1536;1280;768;640&webp&srcset';

	export let imageData;

	export let alt = '';

	onMount(() => {
		if (browser) {
			document.lazyloadInstance.update();
		}
	});

	const { width, height, src } = meta;
	const sources = [
		{ srcset: srcsetWebp, type: 'image/webp' },
		{ srcset: srcsetJpeg, type: 'image/jpeg' },
	];

	const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<Image
	alt={alt}
	width={width}
	height={height}
	src={src}
	sources={sources}
	placeholder={placeholder}
	sizes={sizes}
	style={'border-radius:12px'} />
