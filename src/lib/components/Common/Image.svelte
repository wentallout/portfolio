<script>
	import SaosContainer from '$components/Common/SaosContainer.svelte';

	export let src = '';
	export let alt = '';
	export let width;
	export let height;

	export let loading = 'lazy';
	export let decoding = 'async';

	import ExLink from '$components/Common/ExLink.svelte';
</script>

<SaosContainer animation="imgAni 0.3s">
	<ExLink href={src} aria-label={alt}>
		<figure>
			<img {src} {width} {height} {loading} {decoding} alt="Image of {alt}" />
			<figcaption class="caption text-xs">
				{alt}
			</figcaption>
		</figure>
	</ExLink>
</SaosContainer>

<style>
	figure {
		max-width: 100%;

		margin-bottom: var(--spaceS);
	}

	figure > img {
		max-width: inherit;
	}

	figure {
		border: 1px solid var(--colorBorder);
	}

	.caption {
		border-top: 1px solid var(--colorBorder);
		font-size: var(--fontSizeXS);
		color: var(--colorTextSecondary);
		width: 100%;
		padding: 4px 8px;
	}
</style>
