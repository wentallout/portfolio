<script lang="ts">
	/** @type {{href: any, ariaLabel?: string, style?: string, children?: import('svelte').Snippet}} */
	let { ariaLabel = '', children, href, style = '' } = $props();
</script>

<a
	{style}
	class="block relative isolate"
	aria-label={ariaLabel}
	{href}
	rel="external nofollow noopener noreferrer"
	target="_blank">
	{@render children?.()}
</a>
