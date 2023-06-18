<script>
	import Time from 'svelte-time';

	import ExLink from '$components/Common/ExLink.svelte';
	import Tag from '$components/Common/Tag.svelte';

	export let data;

	export let hasCategory = false;
</script>

<div class="container full-width">
	<h1>{data.title}</h1>
	<div class="post-info small-text">
		<div class="info__section">
			<div class="section__title">Last updated:</div>
			<Time relative timestamp={data.date} />
		</div>
		<div class="info__section">
			<div class="section__title">Written by:</div>
			<ExLink href="https://www.linkedin.com/in/wentallout/">
				<div class="underline">Khoa (@wentallout)</div>
			</ExLink>
		</div>
	</div>
	{#if hasCategory}
		{#if data.categories.length}
			<div class="category">
				{#each data.categories as category}
					<a class="content-tag" href="/blog/category/{category}">
						<Tag>
							{category}
						</Tag>
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.container {
		padding-inline: var(--page-padding);
		padding-top: var(--spaceXL);
		padding-bottom: var(--spaceXL);
		background-color: var(--colorBgLayout);
		position: relative;
	}

	.container:before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		z-index: -1;
		left: 0;
		opacity: 0.8;
		background-image: linear-gradient(var(--colorBgElevated) 1px, transparent 1px),
			linear-gradient(to right, var(--colorBgElevated) 1px, var(--colorBgLayout) 1px);
		background-size: 40px 40px;
	}

	.post-info {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--spaceM);
		margin-bottom: var(--spaceS);
		color: var(--colorTextSecondary);
	}

	.info__section {
		display: flex;
		flex-direction: row;
		gap: 4px;
	}

	.section__title {
		font-weight: var(--fontWeightLarge);
	}

	.underline:hover {
		color: var(--colorPrimaryHover);
	}
</style>
