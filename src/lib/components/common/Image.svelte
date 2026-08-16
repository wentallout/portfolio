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
	<figure class="my-6 border border-neutral-800 bg-neutral-950 overflow-hidden relative group">
		<span class="grid-plus grid-plus-tl">+</span>
		<span class="grid-plus grid-plus-tr">+</span>
		<span class="grid-plus grid-plus-bl">+</span>
		<span class="grid-plus grid-plus-br">+</span>
		<img alt="Image of {alt}" class="w-full h-auto block m-0 transition-opacity duration-200 group-hover:opacity-90" {decoding} {height} {loading} {src} {width} />
		{#if alt !== ''}
			<figcaption class="text-sm text-neutral-400 bg-neutral-900 border-t border-neutral-800 p-2.5 font-sans">
				{alt}
			</figcaption>
		{/if}
	</figure>
</ExLink>
