<script>
	/** @type {{href: any, ariaLabel?: string, style?: string, children?: import('svelte').Snippet}} */
	let { ariaLabel = '', children, href, style = '' } = $props();
</script>

<a
	{style}
	aria-label={ariaLabel}
	{href}
	rel="external nofollow noopener noreferrer"
	target="_blank">
	{@render children?.()}
</a>

<style>
	a {
		display: block;
		position: relative;
	}
</style>
