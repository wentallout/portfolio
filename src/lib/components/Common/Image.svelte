<script>
	export let src = '';

	export let width;
	export let height;
	export let loading = 'lazy';

	import { page } from '$app/stores';

	// SEO
	export let alt = 'alt';

	import { lazyLoad } from '$lib/actions/lazyLoad';
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<ExLink href={src} aria-label={alt}>
	<div class="image-with-caption">
		{#key page.path}
			<img class="lazy-img" use:lazyLoad={src} {width} {height} {loading} decoding="async" {alt} />
		{/key}
		<div class="caption">{alt}</div>
	</div>
</ExLink>

<style>
	img {
		margin-bottom: 0;
		transition: var(--transition);
	}

	.lazy-img {
		opacity: 0;
	}

	.image-with-caption {
		position: relative;
		margin-bottom: var(--space-s);
	}

	.caption {
		opacity: 0;
		padding: 4px 8px;
		font-size: var(--font-size-xs);
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		width: fit-content;

		transition: var(--transition);
	}
	.image-with-caption:hover .caption {
		opacity: 1;
	}
</style>
