<script>
	export let src = '';
	export let alt = '';

	export let width = 600;
	export let height = 'auto';

	import { Lightbox } from 'svelte-lightbox';
</script>

<Lightbox
	enableClickToClose="true"
	imagePreset="fullscreen"
	title={alt}
	description={src}
	enableImageExpand="true"
	transitionDuration="50"
>
	<img {width} {height} {src} loading="lazy" decoding="async" {alt} />
</Lightbox>
