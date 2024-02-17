<script>
	export let src = '';

	export let width;
	export let height;
	// export let fill = 'var(--colorText)';

	export let alt = '';
</script>

<img alt="SVG of {alt}" decoding="async" {height} loading="lazy" {src} {width} />
