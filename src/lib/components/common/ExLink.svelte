<script>
	/** @type {{href: any, ariaLabel?: string, style?: string, children?: import('svelte').Snippet}} */
	let { href, ariaLabel = '', style = '', children } = $props();
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
