<script>
	import ExLink from '$components/common/ExLink.svelte';

	export let href = '';
	export let name = '';
	export let desc = '';
</script>

<ExLink ariaLabel={name} {href}>
	<div class="tool">
		<h2 class="tool__name text-base">{name}</h2>
		<div class="tool__description text-small">
			{desc}
		</div>
	</div>
</ExLink>

<style lang="postcss">
	.tool {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: var(--spaceM);
		height: 200px;
		transition: var(--transition);
		border-radius: var(--borderRadius);
		outline: 1px solid var(--colorBorder);
		box-shadow: var(--boxShadow);

		&:hover {
			background-color: var(--colorBgElevated);
			box-shadow: -5px 5px var(--colorPrimaryHover);
			transform: translate(5px, -5px);
		}
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
</style>
