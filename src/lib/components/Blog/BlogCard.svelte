<script>
	export let blogLink = '';
	export let blogTitle = 'blogTitle';
	export let blogDate = '';
	import Time from 'svelte-time';
	import { fade } from 'svelte/transition';
	import CaretRight from '~icons/ph/caret-right';
	export let blogTags = ['category1', 'category2'];
	export let hasTags = true;
</script>

<a transition:fade href={blogLink} class="blog">
	<article class="blog__info">
		{#if hasTags}
			<div class="tags">
				{#each blogTags as tag}
					<span class="tag xs-text">
						#{tag}
					</span>
				{/each}
			</div>
		{/if}

		<div class="blog__title base-text">{blogTitle}</div>
		<div class="blog__date xs-text">
			<Time timestamp={blogDate} relative />
		</div>
	</article>
	<div class="icon"><CaretRight color="var(--colorText)" /></div>
</a>

<style>
	.blog {
		/* FLEX */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* --- */

		/* SIZE */
		width: 100%;
		height: 120px;
		padding: var(--spaceS) var(--spaceXS);
		/* --- */

		/* OTHER */
		transition: var(--transition);
		position: relative;
		overflow: hidden;
		/* --- */

		outline: 1px solid var(--colorBorder);

		box-shadow: var(--boxShadow);
	}

	.blog:hover {
		background-color: var(--colorBgElevated);

		box-shadow: -5px 5px var(--colorPrimaryHover);
		transform: translate(5px, -5px);
	}

	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--spaceXS);
	}

	.tag {
		color: var(--colorPrimary);
	}

	.blog__info {
		display: flex;
		flex-direction: column;
	}

	.icon {
		transition: var(--transition);
	}

	.blog__title {
		font-weight: var(--fontWeightMid);
		overflow: hidden;
		color: var(--colorText);

		/* LINE CLAMP */
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		/* --- */
	}

	.blog__date {
		/* FLEX */
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: row;
		/* --- */

		/* FONT */
		font-weight: var(--fontWeightSmall);
		color: var(--colorTextSecondary);
		/* --- */
	}
</style>
