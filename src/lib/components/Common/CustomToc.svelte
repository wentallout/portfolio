<script>
	import Toc from 'svelte-toc';
	import ListBullets from '~icons/ph/list-bullets';
</script>

<Toc
	breakpoint="992"
	flashClickedHeadingsFor="0"
	--toc-max-height="80vh"
	--toc-font-size="calc(var(--font-size-small)*90/100)"
	--toc-padding="var(--space-m)"
	--toc-li-border-radius="0"
	--toc-li-hover-bg="transparent"
	--toc-li-hover-color="var(--colorPrimary)"
	--toc-desktop-bg="transparent"
	--toc-mobile-bg="var(--colorTextQuaternary)"
	--toc-mobile-btn-bg="var(--colorPrimary)"
	--toc-li-padding="var(--space-2xs) 0"
	--toc-li-color="var(--colorTextSecondary)"
	--toc-active-color="var(--colorPrimary)"
	--toc-active-bg="transparent"
	--toc-active-font-weight="400"
	--toc-active-border-radius="0"
	--activeHeadingScrollOffset="var(--scroll-padding)"
	--toc-desktop-sticky-top="var(--scroll-padding)"
	--toc-mobile-bottom="100px"
	--toc-mobile-btn-border-radius="100%"
	--toc-mobile-btn-padding="var(-space-m)">
	<span class="toc-title base-text" slot="title">
		<ListBullets color="var(--colorText)" width="24" height="24" />
		Contents</span>

	<span slot="open-toc-icon">
		<ListBullets color="var(--colorTextSecondary)" width="24" height="24" />
	</span>
</Toc>

<style>
	:global(.toc ::-webkit-scrollbar) {
		width: 12px;
	}

	.toc-title {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		font-family: var(--fancy-font);

		border-style: solid;
		border-width: 0 0 4px 0;
		border-image: linear-gradient(to right, var(--colorTextTertiary), transparent) 1 0%;
	}
</style>
