<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import { haptics, hapticPatterns } from '#lib/actions/haptics.js';

	let {
		children,
		hapticPattern = 'light',
		label = '',
		type = 'button',
		href = undefined,
		class: className = '',
		...restProps
	}: {
		children?: import('svelte').Snippet;
		label?: string;
		type?: 'button' | 'submit' | 'reset';
		hapticPattern?: string | number | number[] | object;
		href?: string;
		class?: string;
		[key: string]: unknown;
	} = $props();

	function handlePointerDown() {
		const pattern =
			typeof hapticPattern === 'string' && hapticPattern in hapticPatterns
				? hapticPatterns[hapticPattern as keyof typeof hapticPatterns]
				: hapticPattern;
		if (pattern) haptics.trigger(pattern);
	}
</script>

<Button
	variant="secondary"
	size="lg"
	{type}
	{href}
	aria-label={label ? `button for ${label}` : undefined}
	class="h-auto px-7 py-3 text-sm has-[>svg]:px-7 {className}"
	onmousedown={handlePointerDown}
	{...restProps}
>
	{@render children?.()}
	{label}
</Button>
