<script>
	export let src = '';
	export let alt = '';
	export let width;
	export let height;

	export let loading = 'lazy';
	export let decoding = 'async';

	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<ExLink href={src} aria-label={alt}>
	<div class="image-with-caption">
		<img {src} {width} {height} {loading} {decoding} alt="Image of {alt}" />

		<div class="caption">{alt}</div>
	</div>
</ExLink>

<style>
	img {
		margin-bottom: 0;
		transition: all 0.3s ease;
		user-select: none;
	}

	.image-with-caption {
		position: relative;
		margin-bottom: var(--space-s);
	}

	.caption {
		opacity: 0;
		padding: 4px 8px;
		font-size: var(--font-size-xs);

		/* POSITION */
		position: absolute;
		left: 0;
		bottom: 0;
		/* --- */

		background-color: rgba(0, 0, 0, 0.8);
		width: fit-content;

		/* OTHER */
		transition: var(--transition);
		/* --- */
	}
	.image-with-caption:hover .caption {
		opacity: 1;
	}
</style>
