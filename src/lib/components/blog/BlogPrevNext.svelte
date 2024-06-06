<script>
	import CaretLeft from '~icons/ph/caret-left';
	import CaretRight from '~icons/ph/caret-right';
	import { allBlogStore } from '$lib/stores/blogStore';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let allBlogs;
	let nextBlog;
	let prevBlog;
	let currentBlogIndex;
	let currentPath = $page.url.pathname;

	function findCurrentBlog() {
		if (allBlogs) {
			for (let i = 0; i < allBlogs.length; i++) {
				if (currentPath === allBlogs[i].path) {
					currentBlogIndex = i;
				}
			}
		}
	}

	function findPrevBlog() {
		prevBlog = allBlogs[currentBlogIndex - 1];
	}
	function findNextBlog() {
		nextBlog = allBlogs[currentBlogIndex + 1];
	}

	onMount(() => {
		findCurrentBlog();
		findNextBlog();
		findPrevBlog();
	});

	$: allBlogs = $allBlogStore;

	$: if (prevBlog === undefined) {
		prevBlog = allBlogs[allBlogs.length - 1];
	}

	$: if (nextBlog === undefined) {
		nextBlog = allBlogs[0];
	}
</script>

{#if allBlogs}
	<div class="prevnext text-small">
		{#if prevBlog}
			<a class="prevnext__btn" href={prevBlog.path}>
				<div class="prevnext__sign">← Previous</div>
				<div class="prev__text prevnext__title">
					{prevBlog.meta.title}
				</div>
			</a>
		{/if}

		{#if nextBlog}
			<a class="prevnext__btn next" href={nextBlog.path}>
				<div class="prevnext__sign">Next →</div>
				<div class="next__text prevnext__title">
					{nextBlog.meta.title}
				</div>
			</a>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.prevnext {
		--min: 16ch;
		--gap: 0;
		border: 1px solid var(--colorBorder);
		display: grid;
		grid-gap: var(--gap);
		border-radius: var(--borderRadius);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		overflow: hidden;
		border-right: 0;
	}
	.prevnext__btn {
		position: relative;
		text-decoration: none !important;
		padding: var(--spaceXS) var(--spaceS);
		transition: var(--transition);
		display: flex;
		gap: var(--spaceS);
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		min-height: 132px;
		border-right: 1px solid var(--colorBorder);

		&:hover {
			background-color: var(--colorBgElevated);
			color: var(--colorPrimaryHover);
		}
	}

	.prevnext__sign {
		color: var(--colorTextSecondary);
	}

	.prevnext__title {
		font-weight: 500;
	}

	.next {
		align-items: flex-end;
	}
</style>
