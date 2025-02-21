<script>
	import ExLink from '$components/common/ExLink.svelte';
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { fade } from 'svelte/transition';

	/** @type {{title?: string, desc?: string, href?: string, thumbnailUrl?: string}} */
	let { desc = 'author', href, thumbnailUrl, title = 'insert title' } = $props();

	let imageEl = $state();

	let imageLoaded = $state();

	$effect(() => {
		if (href.includes('codepen.io')) {
			thumbnailUrl = href.replace('codepen.io', 'shots.codepen.io') + '-800.jpg';
		}
	});

	function onImgLoaded() {
		imageLoaded = true;
	}
</script>

<ExLink style="display:flex;position:relative" {href}>
	<MouseGlow />

	<article class="fcard">
		{#if thumbnailUrl && thumbnailUrl.length > 0}
			<img
				bind:this={imageEl}
				class="fcard__thumbnail {imageLoaded ? 'fade-in' : ''}"
				alt={title}
				height="45"
				loading="lazy"
				onload={onImgLoaded}
				src={thumbnailUrl}
				{title}
				width="800" />
		{/if}

		<div class="fcard__info">
			<div class="fcard__title text-small">{title}</div>
			<div class="fcard__desc text-xs">{desc}</div>
		</div>
	</article>
</ExLink>

<style lang="postcss">
	.fcard {
		transition: var(--transition);
		box-shadow: var(--boxShadow);

		position: relative;
		border-radius: var(--borderRadiusLight);
		border: 1px solid var(--colorBorderSecondary);

		overflow: hidden;
		flex-grow: 1;
		position: relative;

		background: var(--colorBgGradientSubtle);

		&:hover {
			box-shadow: -5px 5px var(--colorPrimaryHover);
			transform: translate(5px, -5px);
		}
	}

	.fcard__thumbnail {
		width: 100%;
		aspect-ratio: 2/1;

		opacity: 0;
		transition: opacity 1s ease-in-out;
	}

	.fcard__thumbnail.fade-in {
		opacity: 1;
	}

	.fcard__info {
		width: 100%;
		padding: var(--space2XS) var(--spaceS);
	}

	.fcard__title {
		color: var(--colorPrimary);
		font-family: var(--fontFancy);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-weight: 500;
	}

	.fcard__desc {
		color: var(--colorTextSecondary);
	}
</style>
