<script>
	export let src = '';
	export let alt = 'insert alt here';

	export let width;
	export let height;

	export let hasCaption = true;

	export let imagePreset = '';

	import { Lightbox } from 'svelte-lightbox';

	import { lazyLoad } from '$lib/actions/lazyLoad';
</script>

<figure>
	<Lightbox
		enableClickToClose="true"
		{imagePreset}
		enableImageExpand="true"
		title={alt}
		transitionDuration="5">
		<img
			class="lazy-img"
			use:lazyLoad={src}
			{width}
			{height}
			loading="lazy"
			decoding="async"
			{alt} />

		{#if hasCaption}
			<figcaption class="caption xs-text">{alt}</figcaption>
		{/if}
	</Lightbox>
</figure>

<style>
	.lazy-img {
		/* LAZY LOAD */
		opacity: 0;
		transition: opacity 0.3s ease;
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
