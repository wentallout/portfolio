<script>
	export let href;
	export let ariaLabel;
</script>

<a aria-label={ariaLabel} {href} rel="external nofollow noopener noreferrer" target="_blank"
	><slot /></a>
