<script>
	import ExLink from '$components/common/ExLink.svelte';
	import { imageReveal } from '$lib/actions/gsapAnimation';

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
	<figure>
		<img alt="Image of {alt}" {decoding} {height} {loading} {src} {width} use:imageReveal />
		{#if alt !== ''}
			<figcaption class="caption text-xs">
				{alt}
			</figcaption>
		{/if}
	</figure>
</ExLink>

<style>
	figure {
		max-width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--space-xl);
		border-radius: var(--border-radius-lighter);
		overflow: hidden;
		box-shadow: var(--boxShadow);
	}

	img {
		max-width: inherit;
	}

	.caption {
		font-size: var(--font-size-xs);
		color: var(--color-text-secondary);
		width: 100%;
		padding: var(--space-3xs) var(--space-2xs);

		background-color: var(--color-bg-elevated);
	}
</style>
