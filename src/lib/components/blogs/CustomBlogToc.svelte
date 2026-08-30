<script lang="ts">
	import { ListBullets } from '#lib/assets/icons/icons.js';
	import Toc from 'svelte-toc';
</script>

<Toc
	--activeHeadingScrollOffset="80px"
	--toc-active-bg="transparent"
	--toc-active-border-radius="0"
	--toc-active-color="var(--primary)"
	--toc-active-font-weight="500"
	--toc-desktop-bg="transparent"
	--toc-desktop-sticky-top="0px"
	--toc-font-size="0.875rem"
	--toc-li-border-radius="0"
	--toc-li-color="var(--muted-foreground)"
	--toc-li-font-size-base="0.875rem"
	--toc-li-font-size-min="0.875rem"
	--toc-li-font-size-step="0rem"
	--toc-li-hover-bg="transparent"
	--toc-li-hover-color="var(--foreground)"
	--toc-li-padding="0.25rem 0"
	--toc-mobile-bg="var(--popover)"
	--toc-mobile-bottom="24px"
	--toc-mobile-btn-bg="var(--card)"
	--toc-mobile-btn-border-radius="0px"
	--toc-mobile-btn-padding="8px 12px"
	--toc-mobile-right="24px"
	--toc-padding="0"
	--toc-z-index="9999"
	breakpoint="1024"
	flashClickedHeadingsFor="1500"
	headingSelector=".prose :is(h2, h3, h4):not(.toc-exclude)"
	keepActiveTocItemInView={true}
	scrollBehavior="smooth"
	title={null}>
	<span slot="open-toc-icon" class="flex justify-center items-center">
		<ListBullets color="currentColor" height="16" width="16" />
	</span>
</Toc>

<style>
	:global(aside.toc),
	:global(aside.toc > nav > ol > li) {
		font-size: 0.875rem !important;
	}
</style>
