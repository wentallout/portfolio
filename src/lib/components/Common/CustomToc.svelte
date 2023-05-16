<script>
	import Toc from 'svelte-toc';
	import ListBullets from '~icons/ph/list-bullets';
</script>

<Toc
	breakpoint="992"
	flashClickedHeadingsFor="0"
	--toc-mobile-bg="var(--colorBgElevated)"
	--toc-mobile-btn-bg="var(--colorPrimary)"
	--toc-mobile-bottom="100px"
	--toc-mobile-right="var(--spaceSmall)"
	--toc-mobile-btn-border-radius="100%"
	--toc-mobile-btn-padding=""
	--toc-max-height="80vh"
	--toc-font-size="calc(var(--fontSizeSmall)*90/100)"
	--toc-padding="var(--spaceM)"
	--toc-li-border-radius="0"
	--toc-li-hover-bg="transparent"
	--toc-li-hover-color="var(--colorPrimaryHover)"
	--toc-desktop-bg="transparent"
	--toc-li-padding="var(--space2XS) 0"
	--toc-li-color="var(--colorTextSecondary)"
	--toc-active-color="var(--colorPrimary)"
	--toc-active-bg="transparent"
	--toc-active-font-weight="400"
	--toc-active-border-radius="0"
	--activeHeadingScrollOffset="var(--scroll-padding)"
	--toc-desktop-sticky-top="var(--scroll-padding)">
	<span class="toc-title base-text" slot="title">
		<ListBullets color="var(--colorText)" width="24" height="24" />
		Contents</span>

	<span class="open-toc-icon" slot="open-toc-icon">
		<ListBullets color="var(--colorBlack)" width="24" height="24" />
	</span>
</Toc>

<style>
	:global(.toc ::-webkit-scrollbar) {
		width: 12px;
	}

	.open-toc-icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.toc-title {
		display: flex;
		align-items: center;
		gap: var(--space2XS);
		font-family: var(--fontFancy);
		border-style: solid;
		border-width: 0 0 4px 0;
		border-image: linear-gradient(to right, var(--colorTextTertiary), transparent) 1 0%;
	}
</style>
