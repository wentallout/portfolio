<script>
	import SaosContainer from '$components/common/SaosContainer.svelte';

	// try not to touch this

	import ExLink from '$components/common/ExLink.svelte';
	/** @type {{src?: string, alt?: string, width?: string, height?: string, loading?: string, decoding?: string}} */
	let {
		src = '',
		alt = '',
		width = 'auto',
		height = 'auto',
		loading = 'lazy',
		decoding = 'async'
	} = $props();
</script>

<SaosContainer animation="imgAni 0.3s">
	<ExLink ariaLabel={alt} href={src}>
		<figure>
			<img alt="Image of {alt}" {decoding} {height} {loading} {src} {width} />
			{#if alt !== ''}
				<figcaption class="caption text-xs">
					{alt}
				</figcaption>
			{/if}
		</figure>
	</ExLink>
</SaosContainer>

<style>
	figure {
		max-width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--space3XL);
		border-radius: var(--borderRadiusSM);
		overflow: hidden;
		box-shadow: var(--boxShadow);
	}

	img {
		max-width: inherit;
	}

	.caption {
		font-size: var(--fontSizeXS);
		color: var(--color-text-secondary);
		width: 100%;
		padding: var(--space3XS) var(--space2XS);

		background-color: var(--color-bg-elevated);
	}
</style>
