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
	<div class="prevnext">
		{#if prevBlog}
			<a class="prevnext__btn" href={prevBlog.path}>
				<div class="prev__icon">
					<CaretLeft class="icon" width="24" height="24" />
				</div>

				<div class="prev__text">
					<div class="prevnext__title text-base">{prevBlog.meta.title}</div>
				</div>
			</a>
		{/if}

		{#if nextBlog}
			<a class="prevnext__btn" href={nextBlog.path}>
				<div class="next__text">
					<div class="prevnext__title text-base">{nextBlog.meta.title}</div>
				</div>
				<div class="next__icon">
					<CaretRight class="icon" width="24" height="24" />
				</div>
			</a>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.prevnext {
		--min: 20ch;
		--gap: var(--spaceS);

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}

	.next__icon {
		flex-shrink: 0;
		color: var(--colorText);
	}

	.prev__icon {
		flex-shrink: 0;
		color: var(--colorText);
	}

	.prevnext__btn {
		text-decoration: none !important;
		border: 1px solid var(--colorBorder);
		padding: var(--spaceS);
		transition: var(--transition);

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		min-height: 132px;
		border-radius: var(--borderRadius);

		&:hover {
			background-color: var(--colorBgElevated);
		}
	}

	.prevnext__title {
		color: var(--colorText);
		font-weight: 600;
	}

	.next__text {
		margin-left: auto;
	}
</style>
