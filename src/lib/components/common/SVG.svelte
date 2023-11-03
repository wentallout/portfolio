<script>
	export let src = '';

	export let width;
	export let height;
	// export let fill = 'var(--colorText)';

	export let alt = '';
</script>

<img {src} {width} {height} loading="lazy" decoding="async" alt="SVG of {alt}" />
