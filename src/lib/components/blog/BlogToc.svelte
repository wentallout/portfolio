<script>
	import Toc from 'svelte-toc';
	import ListBullets from '~icons/ph/list-bullets';
</script>

<Toc
	--activeHeadingScrollOffset="var(--scroll-padding)"
	--toc-active-bg="transparent"
	--toc-active-border-radius="0"
	--toc-active-color="var(--colorPrimary)"
	--toc-active-font-weight="400"
	--toc-desktop-bg="transparent"
	--toc-desktop-sticky-top="var(--scroll-padding)"
	--toc-font-size="calc(var(--fontSizeSmall)*90/100)"
	--toc-li-border-radius="0"
	--toc-li-color="var(--colorTextSecondary)"
	--toc-li-hover-bg="transparent"
	--toc-li-hover-color="var(--colorPrimaryHover)"
	--toc-li-padding="var(--space2XS) 0"
	--toc-mobile-bg="var(--colorBgContainer)"
	--toc-mobile-bottom="100px"
	--toc-mobile-btn-bg="var(--colorPrimary)"
	--toc-mobile-btn-border-radius="16px"
	--toc-mobile-btn-padding="0px"
	--toc-mobile-right="8px"
	--toc-padding="var(--spaceM)"
	breakpoint="992"
	flashClickedHeadingsFor="1500"
	keepActiveTocItemInView={false}
	scrollBehavior="smooth">
	{#snippet title()}
		<span  class="toc-title text-base">
			<ListBullets color="var(--colorText)" />
			Contents
		</span>
	{/snippet}

	<!-- @migration-task: migrate this slot by hand, `open-toc-icon` is an invalid identifier -->
	<span slot="open-toc-icon" class="open-toc-icon">
		<ListBullets color="#000" height="16" width="16" />
	</span>
</Toc>

<style>
	:global(.toc ::-webkit-scrollbar) {
		width: 12px;
	}

	:global(aside.toc > nav) {
		overflow-y: auto !important;
		scrollbar-gutter: stable;
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
		border-width: 0 0 1px 0;
		border-image: linear-gradient(to right, var(--colorTextTertiary), transparent) 1 0%;
	}
</style>
