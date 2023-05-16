<script>
	import ExLink from '$components/Common/ExLink.svelte';

	export let href = '';
	export let name = '';
	export let desc = '';
</script>

<ExLink {href} ariaLabel={name}>
	<div class="tool">
		<h2 class="tool__name base-text">{name}</h2>
		<div class="tool__description small-text">
			{desc}
		</div>
	</div>
</ExLink>

<style>
	.tool {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: var(--spaceM);
		height: 200px;
		transition: var(--transition);

		outline: 1px solid var(--colorBorder);
		box-shadow: var(--boxShadow);
	}
	.tool__name {
		color: var(--colorText);
		font-weight: var(--fontWeightMid);
		margin-bottom: var(--spaceXS);
	}

	.tool__description {
		color: var(--colorTextSecondary);
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		font-weight: var(--fontWeightSmall);
		margin: 0;
	}

	.tool:hover {
		background-color: var(--colorBgElevated);

		box-shadow: -5px 5px var(--colorPrimaryHover);
		transform: translate(5px, -5px);
	}
</style>
