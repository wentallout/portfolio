<script>
	export let src = '';
	export let alt = '';
	export let width;
	export let height;
	export let style = '';
	export let loading = 'lazy';
	export let decoding = 'async';
</script>

<img {src} {width} {height} {style} {loading} {decoding} alt="SVG of {alt}" />
