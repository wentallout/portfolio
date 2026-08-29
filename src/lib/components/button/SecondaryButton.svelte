<script>
	import GlassButton from './GlassButton.svelte';

	/** @type {{children?: import('svelte').Snippet, label?: string, type?: "button" | "submit" | "reset", hapticPattern?: string | number | number[] | object}} */
	let { children, hapticPattern = 'light', label, type = 'button' } = $props();
</script>

<GlassButton {hapticPattern} {label} {type} variant="secondary">
	{@render children?.()}
</GlassButton>

