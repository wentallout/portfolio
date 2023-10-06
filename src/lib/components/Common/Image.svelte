<script>
	import SaosContainer from '$components/Common/SaosContainer.svelte';

	export let src = '';
	export let alt = '';
	export let width;
	export let height;

	// try not to touch this
	export let loading = 'lazy';
	export let decoding = 'async';

	import ExLink from '$components/Common/ExLink.svelte';
</script>

<SaosContainer animation="imgAni 0.3s">
	<ExLink href={src} aria-label={alt}>
		<figure>
			<img {src} {width} {height} {loading} {decoding} alt="Image of {alt}" />
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
	}

	img {
		max-width: inherit;
	}

	.caption {
		font-size: var(--fontSizeXS);
		color: var(--colorTextSecondary);
		width: 100%;
		padding: 4px var(--spaceS);
		border: 1px solid var(--colorBorder);
		background-color: var(--colorBgElevated);
	}
</style>
