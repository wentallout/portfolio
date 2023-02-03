<script>
	export let src = '';
	export let alt = 'insert alt here';
	export let width = 480;
	export let height = 480;

	import { lazyLoad } from '$lib/actions/lazyLoad';
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<ExLink href={src}>
	<figure>
		<img
			class="lazy-img"
			use:lazyLoad={src}
			{width}
			{height}
			loading="lazy"
			decoding="async"
			{alt} />

		<figcaption class="caption xs-text">{alt}</figcaption>
	</figure>
</ExLink>

<style>
	.lazy-img {
		/* LAZY LOAD */
		opacity: 0;
		transition: opacity 0.1s ease;
		/* --- */
	}

	figure {
		position: relative;
		margin: 0;
	}

	.caption {
		position: absolute;
		bottom: 0;
		left: 0;
		width: fit-content;
		background: rgba(0, 0, 0, 0.7);
		color: var(--text-color);
		padding: 4px 8px;
		font-weight: 300;
		scale: 0;
		transition: ease-in-out 0.3s;
		backdrop-filter: blur(5px);
	}

	figure:hover .caption {
		scale: 1;
	}
</style>
