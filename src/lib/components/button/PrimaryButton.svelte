<script>
	import GlassButton from './GlassButton.svelte';

	/** @type {{children?: import('svelte').Snippet, label?: string, type?: "button" | "submit" | "reset", hapticPattern?: string | number | number[] | object}} */
	let { children, hapticPattern = 'medium', label, type = 'submit' } = $props();
</script>

<GlassButton {hapticPattern} {label} {type} variant="primary">
	{@render children?.()}
</GlassButton>

