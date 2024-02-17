<script>
	import Time from 'svelte-time';

	import ExLink from '$components/common/ExLink.svelte';
	import Tag from '$components/common/Tag.svelte';

	export let data;

	export let hasCategory = false;

	import Pen from '~icons/ph/pen';

	import CalendarBlank from '~icons/ph/calendar-blank';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';
</script>

<Breadcrumb />
<header class="container full-width">
	<div class="pad skew">
		<h1 class="post-title">{data.title}</h1>
		<div class="post-info text-small">
			<div class="info__section">
				<CalendarBlank height="20" width="20" />
				Last updated:
				<Time relative timestamp={data.date} />
			</div>
			<div class="info__section">
				<Pen height="20" width="20" />
				Written by:
				<ExLink href="https://www.linkedin.com/in/wentallout/">Dang Khoa (@wentallout)</ExLink>
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
		align-items: center;
	}
</style>
