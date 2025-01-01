<script>
	import ExLink from '$components/common/ExLink.svelte';
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { fade } from 'svelte/transition';

	/** @type {{title?: string, desc?: string, href?: string, thumbnailUrl?: string}} */
	let { desc = 'author', href, thumbnailUrl, title = 'insert title' } = $props();

	$effect(() => {
		if (href.includes('codepen.io')) {
			thumbnailUrl = href.replace('codepen.io', 'shots.codepen.io') + '-800.jpg';
		}
	});
</script>

<ExLink style="display:flex;position:relative" {href}>
	<MouseGlow />

	<div class="fcard custom-border">
		{#if thumbnailUrl && thumbnailUrl.length > 0}
			<img
				class="fcard__thumbnail"
				alt={title}
				height="45"
				loading="lazy"
				src={thumbnailUrl}
				{title}
				width="800"
				transition:fade />
		{/if}

		<div class="fcard__info">
			<div class="fcard__title text-small">{title}</div>
			<div class="fcard__desc text-xs">{desc}</div>
		</div>
	</div>
</ExLink>

<style lang="postcss">
	.fcard {
		transition: var(--transition);
		box-shadow: var(--boxShadow);

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
	}

	.fcard__info {
		width: 100%;
		padding: var(--space2XS) var(--spaceS);
	}

	.fcard__title {
		color: var(--colorText);
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
