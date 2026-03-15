<script>
	import GlassButton from './GlassButton.svelte';

	/** @type {{label?: string, children?: import('svelte').Snippet}} */
	let { children, label } = $props();
</script>

<GlassButton
	glassColor="var(--color-primary)"
	glowColor="var(--color-black)"
	{label}
	labelColor="var(--color-black)">
	{@render children?.()}
</GlassButton>
