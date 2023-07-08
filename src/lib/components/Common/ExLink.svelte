<script>
	export let href;
	export let ariaLabel = '';
	export let style = '';
</script>

<a
	{style}
	aria-label={ariaLabel}
	{href}
	rel="external nofollow noopener noreferrer"
	target="_blank">
	<slot />
</a>

<style>
	a {
		font-size: inherit;

		gap: var(--space2XS);
		flex-direction: row;
		position: relative;
	}
</style>
