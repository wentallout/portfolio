<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';

	export let thumbnailUrl = '';
	export let title = 'insert title';
	export let desc = 'author';
	export let href = '';

	ExLink;
</script>

<ExLink {href}>
	<div class="fcard">
		<img class="fcard__thumbnail" src={thumbnailUrl} alt="" />

		<div class="fcard__info">
			<div class="fcard__title small-text">{title}</div>
			<div class="fcard__desc xs-text">{desc}</div>
		</div>
	</div>
</ExLink>

<style>
	.fcard {
		border: 1px solid var(--colorBorder);
		transition: var(--transition);
	}

	.fcard:hover {
		background-color: var(--colorBgElevated);
		box-shadow: -5px 5px var(--colorPrimaryHover);
		transform: translate(5px, -5px);
	}

	.fcard__info {
		/* padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 16px;
		padding-right: 16px; */

		padding: var(--space2XS) var(--spaceXS);
	}

	.fcard__title {
		color: var(--colorText);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		height: 52px;
	}

	.fcard__desc {
		color: var(--colorTextSecondary);
	}

	.fcard__thumbnail {
		/* flex: 1 0 auto; */
		width: 100%;
		aspect-ratio: 2/1;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
