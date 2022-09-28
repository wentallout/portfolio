<script>
	export let src = '';
	export let alt = '';

	export let width;
	export let height;

	import { Lightbox } from 'svelte-lightbox';
</script>

<Lightbox title={alt} description={src} enableImageExpand="true" transitionDuration="50">
	<img {width} {height} {src} loading="lazy" decoding="async" {alt} />
</Lightbox>
