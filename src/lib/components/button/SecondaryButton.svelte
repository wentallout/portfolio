<script>
	import GlassButton from './GlassButton.svelte';

	
	let { children, label, type } = $props();
</script>

<GlassButton
	glassColor="var(--color-bg-layout)"
	glowColor="var(--color-bg-layout)"
	{label}
	labelColor="var(--color-bg-elevated)"
	{type}>
	{@render children?.()}
</GlassButton>
