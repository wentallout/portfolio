<script>
	import Time from 'svelte-time';

	import ExLink from '$components/Common/ExLink.svelte';
	import Tag from '$components/Common/Tag.svelte';

	export let data;

	export let hasCategory = false;
</script>

<header class="container full-width">
	<div class="global-container">
		<h1>{data.title}</h1>
		<div class="post-info text-small">
			<div class="info__section">
				<div class="section__title">Last updated:</div>
				<Time relative timestamp={data.date} />
			</div>
			<div class="info__section">
				<div class="section__title">Written by:</div>
				<ExLink href="https://www.linkedin.com/in/wentallout/">
					<div class="link">Dang Khoa (@wentallout)</div>
				</ExLink>
			</div>
		</div>
		{#if hasCategory}
			{#if data.categories.length}
				<div class="category">
					{#each data.categories as category}
						<a class="tag__content" href="/blog/category/{category}">
							<Tag>
								{category}
							</Tag>
						</a>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
</header>

<style>
	.tag__content {
		text-decoration: none !important;
	}

	.container {
		padding-top: var(--spaceXL);
		padding-bottom: var(--spaceXL);

		position: relative;

		background-color: transparent;
		background-image: url('/images/space.svg');
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
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
</style>
