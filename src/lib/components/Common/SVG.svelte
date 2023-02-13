<script>
	export let src = '';
	export let alt = '';
	export let width;
	export let height;
	export let style = '';
</script>

<img {src} {width} {height} {style} loading="lazy" decoding="async" alt="SVG {alt}" />
