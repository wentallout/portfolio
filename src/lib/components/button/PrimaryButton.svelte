<script>
	import GlassButton from './GlassButton.svelte';

	/** @type {{label?: string, children?: import('svelte').Snippet, hapticPattern?: string | number | number[] | object}} */
	let { children, hapticPattern = 'medium', label } = $props();
</script>

<GlassButton
	glassColor="var(--color-primary)"
	glowColor="var(--color-black)"
	{hapticPattern}
	{label}
	labelColor="var(--color-black)">
	{@render children?.()}
</GlassButton>
