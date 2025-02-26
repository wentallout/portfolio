<script>
	import ExLink from '$components/common/ExLink.svelte';

	/** @type {{href?: string, name?: string, desc?: string}} */
	let { href = '', name = '', desc = '' } = $props();
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
		outline: 1px solid var(--color-border);
		box-shadow: var(--boxShadow);

		&:hover {
			background-color: var(--color-bg-elevated);
			box-shadow: -5px 5px var(--color-primary-hover);
			transform: translate(5px, -5px);
		}
	}
	.tool__name {
		color: var(--color-text);
		font-weight: var(--fontWeightMid);
		margin-bottom: var(--spaceXS);
	}

	.tool__description {
		color: var(--color-text-secondary);
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		font-weight: var(--fontWeightSmall);
		margin: 0;
	}
</style>
