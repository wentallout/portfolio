<script lang="ts">
	import ExLink from '#lib/components/common/ExLink.svelte';

	let {
		alt = '',
		decoding = 'async',
		height = 'auto',
		loading = 'lazy',
		src = '',
		width = 'auto',
		imagePreset = ''
	} = $props();
</script>

<ExLink ariaLabel={alt || 'Image link'} href={src}>
	<figure
		class="my-6 max-w-full mx-auto rounded-xl overflow-hidden border border-border bg-muted/30 shadow-sm">
		<img
			class="max-w-full h-auto w-full object-cover"
			alt={alt ? `Image of ${alt}` : ''}
			{decoding}
			{height}
			{loading}
			{src}
			{width} />
		{#if alt !== ''}
			<figcaption class="w-full px-3 py-2 text-sm text-muted-foreground border-t border-border">
				{alt}
			</figcaption>
		{/if}
	</figure>
</ExLink>
