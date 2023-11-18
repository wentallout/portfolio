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
		display: flex;
		font-size: inherit;
		position: relative;
		color: inherit;
	}
</style>
