<script>
	import ExLink from '$components/common/ExLink.svelte';
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { fade } from 'svelte/transition';

	let { desc = 'author', href, thumbnailUrl, title = 'insert title' } = $props();

	$effect(() => {
		if (href.includes('codepen.io')) {
			thumbnailUrl = href.replace('codepen.io', 'shots.codepen.io') + '-800.jpg';
		}
	});
</script>

<ExLink style="display:flex; border-radius: var(--border-radius-light);" {href}>
	<MouseGlow />

	<article class="fcard">
		<img
			class="fcard__thumbnail"
			alt={title}
			height="142"
			loading="lazy"
			src={thumbnailUrl}
			{title}
			width="800" />

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
		border-radius: var(--border-radius-light);
		overflow: hidden;
		flex-grow: 1;
		position: relative;
		background: var(--color-bg-gradient-subtle);
	}

	.fcard__thumbnail {
		width: 100%;
		aspect-ratio: 2/1;

		transition: opacity 1s ease-in-out;
	}

	.fcard__info {
		width: 100%;
		padding: var(--space-2xs) var(--space-s);
	}

	.fcard__title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-weight: 500;
	}

	.fcard:hover .fcard__title {
		color: var(--color-primary-hover);
	}

	.fcard__desc {
		color: var(--color-text-secondary);
	}
</style>
