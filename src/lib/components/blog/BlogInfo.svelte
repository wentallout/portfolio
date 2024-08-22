<script>
	import Time from 'svelte-time';

	import ExLink from '$components/common/ExLink.svelte';
	import Tag from '$components/common/Tag.svelte';

	export let data;

	export let hasCategory = false;

	import Pen from '~icons/ph/pen';

	import CalendarBlank from '~icons/ph/calendar-blank';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';

	import { onMount } from 'svelte';

	function getRandomColor() {
		let color, luminance;

		do {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			color = `rgb(${r}, ${g}, ${b})`;

			// Calculate luminance
			const rNorm = r / 255;
			const gNorm = g / 255;
			const bNorm = b / 255;
			luminance = 0.2126 * rNorm + 0.7152 * gNorm + 0.0722 * bNorm;
		} while (luminance < 0.3 || luminance > 0.7);

		return color;
	}

	function applyRandomGradient() {
		const color1 = getRandomColor();
		const color2 = getRandomColor();
		const gradient = `linear-gradient(${color1}, ${color2})`;
		document.documentElement.style.setProperty('--random-background', gradient);
	}

	onMount(() => {
		applyRandomGradient();
	});
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
	}

	:root {
		--random-background: linear-gradient(rgb(4, 93, 211), rgb(19, 35, 128));
	}

	.blog__gradient {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100px;
		background: var(--smooth-border);
	}

	.blog {
		position: relative;
		padding-top: var(--spaceXL);
		padding-bottom: var(--spaceXL);
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 9999;
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
		background-size: 500px;

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
		pointer-events: none;
		background-image: var(--random-background);
		z-index: -9999;
	}

	:global([color-scheme='dark'] .blog:after) {
		filter: brightness(0.6);
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
	}
</style>
