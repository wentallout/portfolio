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
	}

	.container:before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		z-index: -1;
		left: 0;

		--s: 80px; /* the size */
		--c: var(--colorBgLayout);
		opacity: 0.4;
		--_s: calc(2 * var(--s)) calc(2 * var(--s));
		--_g: 35.36% 35.36% at;
		--_c: #0000 66%, var(--colorBgElevated) 68% 70%, #0000 72%;
		background: radial-gradient(var(--_g) 100% 25%, var(--_c)) var(--s) var(--s) / var(--_s),
			radial-gradient(var(--_g) 0 75%, var(--_c)) var(--s) var(--s) / var(--_s),
			radial-gradient(var(--_g) 100% 25%, var(--_c)) 0 0 / var(--_s),
			radial-gradient(var(--_g) 0 75%, var(--_c)) 0 0 / var(--_s),
			repeating-conic-gradient(var(--c) 0 25%, #0000 0 50%) 0 0 / var(--_s),
			radial-gradient(var(--_c)) 0 calc(var(--s) / 2) / var(--s) var(--s) var(--c);
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
