<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';

	export let title = 'insert title';
	export let desc = 'author';
	export let href = '';
	export let thumbnailUrl = '';

	$: if (href.includes('codepen.io')) {
		thumbnailUrl = href.replace('codepen.io', 'shots.codepen.io') + '-800.jpg';
	}
</script>

<ExLink {href}>
	<div class="fcard">
		<img class="fcard__thumbnail" src={thumbnailUrl} alt="" />

		<div class="fcard__info">
			<div class="fcard__title text-small">{title}</div>
			<div class="fcard__desc text-xs">{desc}</div>
		</div>
	</div>
</ExLink>

<style lang="postcss">
	.fcard {
		border: 1px solid var(--colorBorder);
		transition: var(--transition);
		box-shadow: var(--boxShadow);
		border-radius: var(--borderRadius);
		overflow: hidden;

		&:hover {
			background-color: var(--colorBgElevated);
			box-shadow: -5px 5px var(--colorPrimaryHover);
			transform: translate(5px, -5px);
		}
	}

	.fcard__thumbnail {
		width: 100%;
		aspect-ratio: 2/1;
	}

	.fcard__info {
		padding: var(--space2XS) var(--spaceXS);
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
