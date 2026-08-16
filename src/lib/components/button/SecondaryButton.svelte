<script>
	import GlassButton from './GlassButton.svelte';

	/** @type {{children?: import('svelte').Snippet, label?: string, type?: string, hapticPattern?: string | number | number[] | object}} */
	let { children, hapticPattern = 'light', label, type } = $props();
</script>

<GlassButton
	glassColor="#171717"
	glowColor="#262626"
	{hapticPattern}
	{label}
	labelColor="#ffffff"
	{type}>
	{@render children?.()}
</GlassButton>

