<script>
	export let src = '';

	export let width;
	export let height;
	export let loading = 'lazy';

	// SEO
	export let alt = 'alt';

	import { lazyLoad } from '$lib/actions/lazyLoad';
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<ExLink href={src} aria-label={alt}>
	<img class="lazy-img" use:lazyLoad={src} {width} {height} {loading} decoding="async" {alt} />
</ExLink>

<style>
	.lazy-img {
		opacity: 0;
	}
</style>
