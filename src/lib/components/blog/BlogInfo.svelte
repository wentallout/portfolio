<script>
	import Time from 'svelte-time';

	import ExLink from '$components/common/ExLink.svelte';
	import Tag from '$components/common/Tag.svelte';

	import Pen from '~icons/ph/pen';

	import CalendarBlank from '~icons/ph/calendar-blank';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';

	import { onMount } from 'svelte';
	/** @type {{data: any, hasCategory?: boolean}} */
	let { data, hasCategory = false } = $props();
</script>

<header class="blog full-width">
	<div class="blog__gradient"></div>
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
	<div class="blog__deco"></div>
</header>

<style>
	.blog__deco {
		width: 100%;
		height: 150px;
		background-image: url('/images/beat-mix.png');
		background-repeat: repeat-x;
		rotate: 360deg;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -1;
		opacity: 0.2;
		filter: grayscale(1);
	}

	.blog__gradient {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100px;
		background: var(--smooth-border);
		pointer-events: none;
	}

	.blog {
		position: relative;
		padding-top: var(--spaceXL);
		padding-bottom: var(--spaceXL);
	}

	.blog:before {
		content: '';
		position: absolute;
		pointer-events: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/images/patterns/wao-pattern.svg');
		background-repeat: repeat;
		background-size: 200px;
		opacity: 0.05;
		filter: grayscale(1);
		z-index: -9998;
	}

	.blog:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -9999;
		background: url('/images/dither_it_bg-sky.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		opacity: 0.2;
	}

	:global([color-scheme='dark'] .blog:after) {
		filter: brightness(0.5);
	}

	:global([color-scheme='light'] .blog:after) {
		filter: greyscale(1);
		opacity: 0.2;
	}

	.category {
		display: flex;
		flex-direction: row;
		gap: var(--spaceXS);
		z-index: 9999;
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
		text-shadow:
			-2px -2px 0 var(--colorBgLayout),
			2px -2px 0 var(--colorBgLayout),
			-2px 2px 0 var(--colorBgLayout),
			2px 2px 0 var(--colorBgLayout);

		color: var(--colorPrimary);
	}
</style>
