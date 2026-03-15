<script>
	// export let fill = 'var(--color-text)';

	/** @type {{src?: string, width: any, height: any, alt?: string}} */
	let { src = '', width, height, alt = '' } = $props();
</script>

<img alt="SVG of {alt}" decoding="async" {height} loading="lazy" {src} {width} />
