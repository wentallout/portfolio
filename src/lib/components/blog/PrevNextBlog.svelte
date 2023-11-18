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
				<div class="prev__deco">Previous</div>
				<div class="prev__text prevnext__title">
					{prevBlog.meta.title}
				</div>
			</a>
		{/if}

		{#if nextBlog}
			<a class="prevnext__btn" href={nextBlog.path}>
				<div class="next__deco">Next</div>
				<div class="next__text prevnext__title">
					{nextBlog.meta.title}
				</div>
			</a>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.prevnext {
		--min: 20ch;
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

		padding: var(--spaceS);
		transition: var(--transition);

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		min-height: 132px;
		border-right: 1px solid var(--colorBorder);

		&:hover {
			background-color: var(--colorBgElevated);
			color: var(--colorPrimaryHover);
		}
	}

	.prevnext__title {
		color: var(--colorText);
		font-weight: 500;
	}

	.next__text {
		position: relative;
		text-align: right;
		width: 100%;
	}

	.prev__text {
		position: relative;
		text-align: left;
		width: 100%;
	}

	.prev__deco {
		position: absolute;
		top: 0;
		left: var(--spaceS);

		font-weight: 600;
		font-size: 3em;
		opacity: 0.4;
		font-family: var(--fontFancy);
		-webkit-text-stroke: 1px var(--colorText);
		-webkit-text-fill-color: transparent;
	}

	.next__deco {
		position: absolute;
		top: 0;
		right: var(--spaceS);

		font-weight: 600;
		font-size: 3em;
		opacity: 0.4;
		font-family: var(--fontFancy);
		-webkit-text-stroke: 1px var(--colorText);
		-webkit-text-fill-color: transparent;
	}
</style>
