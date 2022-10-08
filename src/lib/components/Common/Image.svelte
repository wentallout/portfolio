<script>
	export let src = '';
	export let alt = '';

	export let width = 600;
	export let height = 'auto';

	export let imagePreset = '';

	import { Lightbox } from 'svelte-lightbox';
</script>

<Lightbox
	enableClickToClose="true"
	title={alt}
	description={src}
	{imagePreset}
	enableImageExpand="true"
	transitionDuration="50">
	<img {width} {height} {src} loading="lazy" decoding="async" {alt} />
</Lightbox>
