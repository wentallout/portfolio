<script>
	import GlassButton from './GlassButton.svelte';

	/** @type {{children?: import('svelte').Snippet, label?: string, type?: string, hapticPattern?: string | number | number[] | object}} */
	let { children, hapticPattern = 'light', label, type } = $props();
</script>

<GlassButton
	glassColor="var(--color-bg-layout)"
	glowColor="var(--color-bg-layout)"
	{hapticPattern}
	{label}
	labelColor="var(--color-bg-elevated)"
	{type}>
	{@render children?.()}
</GlassButton>
