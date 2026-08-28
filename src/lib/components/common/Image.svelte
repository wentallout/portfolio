<script>
	import ExLink from '$components/common/ExLink.svelte';

	/** @type {{src?: string, alt?: string, width?: string, height?: string, loading?: string, decoding?: string}} */
	let {
		alt = '',
		decoding = 'async',
		height = 'auto',
		loading = 'lazy',
		src = '',
		width = 'auto'
	} = $props();
</script>

<ExLink ariaLabel={alt} href={src}>
	<figure class="my-6 border border-border bg-card overflow-hidden relative group">
		<img alt="Image of {alt}" class="w-full h-auto block m-0 transition-opacity duration-200 group-hover:opacity-90" {decoding} {height} {loading} {src} {width} />
		{#if alt !== ''}
			<figcaption class="text-sm text-muted-foreground bg-muted border-t border-border p-2.5 font-sans">
				{alt}
			</figcaption>
		{/if}
	</figure>
</ExLink>
