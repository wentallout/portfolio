<script>
	import ExLink from '$components/common/ExLink.svelte';
	import Tag from '$components/common/Tag.svelte';
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import { parallaxBg } from '$lib/actions/parallaxEffect';
	import { CalendarBlank, Pen } from '$lib/assets/icons/icons';
	import { onMount } from 'svelte';

	/** @type {{data: any, hasCategory?: boolean}} */
	let { data, hasCategory = false } = $props();

	function formatRelativeTime(dateString) {
		const date = new Date(dateString);
		const now = new Date();
		now.setHours(0, 0, 0, 0); // reset time to midnight
		date.setHours(0, 0, 0, 0); // reset time to midnight

		const diff = now - date;

		const units = [
			{ factor: 31536000000, name: 'year' }, // 1000 * 60 * 60 * 24 * 365
			{ factor: 2628000000, name: 'month' }, // 1000 * 60 * 60 * 24 * 30
			{ factor: 86400000, name: 'day' } // 1000 * 60 * 60 * 24
		];

		for (const unit of units) {
			const value = Math.floor(diff / unit.factor);
			if (value >= 1) {
				if (diff > 0) {
					return `${value} ${unit.name} ago`;
				} else {
					return `in ${-value} ${unit.name}`;
				}
			}
		}

		if (diff === 0) {
			return 'today';
		} else if (diff > 0) {
			return 'yesterday';
		} else {
			return 'tomorrow';
		}
	}

	function getDate(dateString) {
		let input = new Date(dateString);

		const formattedDate = new Intl.DateTimeFormat('en-GB', {
			dateStyle: 'medium'
		}).format(input);

		return formattedDate;
	}

	import { page } from '$app/state';
	import Sunset from '$lib/assets/icons/Sunset.svelte';
</script>

<header class="blog full-width">
	<div class="blog__gradient"></div>
	<div class="g-container">
		<Breadcrumb />
		<h1 class="blog__title">
			{data.title}
		</h1>
		<div class="blog__info text-small">
			<div class="info__section">
				<CalendarBlank height="20" width="20" />
				{#if data.date}
					<time>
						{getDate(data.date)}
						({formatRelativeTime(data.date)})
					</time>
				{/if}
				<!-- <Time relative timestamp={data.date} /> -->
			</div>
			<div class="info__section">
				<Pen height="20" width="20" />
				<ExLink href="https://www.linkedin.com/in/wentallout/">Dang Khoa (@wentallout)</ExLink>
			</div>
		</div>
		{#if hasCategory}
			{#if data.categories.length}
				<div class="category">
					{#each data.categories as category}
						<a class="category__tag" href="/blogs/category/{category}">
							<Tag>
								{category}
							</Tag>
						</a>
					{/each}
				</div>
			{/if}
		{/if}
	</div>

	<div class="blog__deco2">
		<Sunset />
	</div>
</header>

<style>
	.blog__deco2 {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: -1;
		opacity: 0.05;
		width: 100%;
		height: 30%;
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
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		overflow: hidden;
	}

	.category {
		display: flex;
		flex-direction: row;
		gap: var(--space-xs);
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
		gap: var(--space-mid);
		margin-bottom: var(--space-s);
		color: var(--color-text-secondary);

		& .info__section {
			display: flex;
			flex-direction: row;
			gap: 4px;
			align-items: center;
		}
	}

	.blog__title {
		text-wrap: balance;
		color: var(--color-primary);
	}
</style>
