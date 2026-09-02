<script lang="ts">
	import ExLink from '#lib/components/common/ExLink.svelte';
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import { CalendarBlank, Pen, Tag as TagIcon } from '#lib/assets/icons/icons.js';
	import { SvelteDate } from 'svelte/reactivity';

	/** @type {{data: any, hasCategory?: boolean, hasTags?: boolean}} */
	let { data, hasCategory = false, hasTags = true } = $props();
	const _hasTags = $derived(hasTags || hasCategory);
	const _tags = $derived(data.tags ?? data.categories ?? []);

	function formatRelativeTime(dateString) {
		const date = new SvelteDate(dateString);
		const now = new SvelteDate();
		now.setHours(0, 0, 0, 0);
		date.setHours(0, 0, 0, 0);

		const diff = now - date;

		const units = [
			{ factor: 31536000000, name: 'year' },
			{ factor: 2628000000, name: 'month' },
			{ factor: 86400000, name: 'day' }
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
		return new Intl.DateTimeFormat('en-GB', {
			dateStyle: 'medium'
		}).format(input);
	}
</script>

<header
	class="w-full border-grid-b signature-padding flex flex-col gap-4 select-none bg-background relative">
	<Breadcrumb />

	<h1
		class="text-6xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight font-fancy">
		{data.title}
	</h1>

	<div class="flex items-center gap-4 flex-wrap text-sm text-muted-foreground font-sans pt-2">
		{#if data.date}
			<div class="flex items-center gap-1.5">
				<CalendarBlank color="#9ca3af" height="16" width="16" />
				<time>
					{getDate(data.date)} ({formatRelativeTime(data.date)})
				</time>
			</div>
		{/if}

		<div class="flex items-center gap-1.5">
			<Pen color="#9ca3af" height="16" width="16" />
			<ExLink href="https://www.linkedin.com/in/wentallout/">Dang Khoa (@wentallout)</ExLink>
		</div>

		{#if _hasTags && _tags && _tags.length}
			<div class="flex items-center gap-2">
				<TagIcon color="#9ca3af" height="16" width="16" />
				{#each _tags as tag (tag)}
					<a class="blueprint-pill" href="/blogs/tags/{tag}">
						#{tag}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</header>
