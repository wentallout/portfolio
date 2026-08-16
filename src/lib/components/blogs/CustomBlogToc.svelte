<script>
	import { ListBullets } from '$lib/assets/icons/icons';
	import Toc from 'svelte-toc';
</script>

<Toc
	--activeHeadingScrollOffset="80px"
	--toc-active-bg="transparent"
	--toc-active-border-radius="0"
	--toc-active-color="#f43f5e"
	--toc-active-font-weight="500"
	--toc-desktop-bg="transparent"
	--toc-desktop-sticky-top="0px"
	--toc-font-size="0.875rem"
	--toc-li-border-radius="0"
	--toc-li-color="#a3a3a3"
	--toc-li-hover-bg="transparent"
	--toc-li-hover-color="#ffffff"
	--toc-li-padding="0.25rem 0"
	--toc-mobile-bg="#09090b"
	--toc-mobile-bottom="24px"
	--toc-mobile-btn-bg="#18181b"
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
	<span slot="open-toc-icon" class="open-toc-icon">
		<ListBullets color="#ffffff" height="16" width="16" />
	</span>
</Toc>

<style>
	:global(.toc ::-webkit-scrollbar) {
		width: 6px;
	}

	:global(button[aria-label='Open table of contents']) {
		background: #18181b !important;
		border: 1px solid #27272a !important;
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
	}

	:global(aside.toc) {
		font-size: 0.875rem !important;
	}

	:global(aside.toc > nav) {
		overflow-y: auto !important;
		scrollbar-gutter: stable;
	}

	:global(aside.toc h2) {
		font-size: 0.875rem !important;
		font-weight: 500 !important;
		margin: 0 !important;
		padding: 0 !important;
	}

	:global(aside.toc li) {
		line-height: 1.6 !important;
		font-size: 0.875rem !important;
		font-family: 'Inter', sans-serif !important;
		margin: 0 !important;
	}

	:global(aside.toc a) {
		font-size: 0.875rem !important;
		font-weight: 400 !important;
		line-height: 1.6 !important;
		text-decoration: none !important;
		color: #a3a3a3 !important;
		transition: color 150ms ease !important;
	}

	:global(aside.toc a:hover) {
		color: #ffffff !important;
	}

	:global(aside.toc li.active > a),
	:global(aside.toc a.active) {
		color: #f43f5e !important;
		font-weight: 500 !important;
	}

	.open-toc-icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
