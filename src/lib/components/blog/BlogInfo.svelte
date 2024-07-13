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

<header class="blog full-width">
	<div class="blog__bg"></div>
	<div class="pad">
		<Breadcrumb />
		<h1 class="blog__title">{data.title}</h1>
		<div class="blog__info text-small">
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
						<a class="category__tag" href="/blog/category/{category}">
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
	.blog {
		padding-top: var(--spaceXL);
		padding-bottom: var(--spaceXL);
		position: relative;
		background-color: transparent;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	


	.blog__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/images/patterns/wao-pattern.svg');
		background-repeat: repeat;
		background-size: 400px;
		opacity: 0.04;
		z-index: -9999;
		filter: grayscale(1);
	}

	.category {
		display: flex;
		flex-direction: row;
		gap: var(--spaceXS);
	}

	.category__tag {
		text-decoration: none !important;
	}

	.blog__info {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--spaceM);
		margin-bottom: var(--spaceS);
		color: var(--colorTextSecondary);

		& .info__section {
			display: flex;
			flex-direction: row;
			gap: 4px;
			align-items: center;
		}
	}

	.blog__title {
		text-wrap: balance;
	}
</style>
