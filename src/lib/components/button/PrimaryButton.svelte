<script>
	import GlassButton from './GlassButton.svelte';

	/** @type {{label?: string, children?: import('svelte').Snippet, hapticPattern?: string | number | number[] | object}} */
	let { children, hapticPattern = 'medium', label } = $props();
</script>

<GlassButton
	glassColor="#ffffff"
	glowColor="#ffffff"
	{hapticPattern}
	{label}
	labelColor="#000000">
	{@render children?.()}
</GlassButton>

