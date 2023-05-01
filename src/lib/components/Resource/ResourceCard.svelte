<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';

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
		padding: var(--space-m);
		height: 200px;
		transition: var(--transition);

		outline: 1px solid var(--colorTextQuaternary);
	}
	.tool__name {
		font-weight: 500;
		margin-bottom: var(--space-xs);
		color: var(--colorText);
	}

	.tool__description {
		color: var(--colorTextSecondary);
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		font-weight: 400;
		margin: 0;
	}

	.tool:hover {
		border: 1px solid var(--colorPrimary);
	}

	.tool:hover .tool__name {
		color: var(--colorPrimary);
	}
</style>
