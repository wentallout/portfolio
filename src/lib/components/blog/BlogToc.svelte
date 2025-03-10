<script>
	import { ListBullets } from '$lib/assets/icons/icons';
	import Toc from 'svelte-toc';
</script>

<Toc
	--activeHeadingScrollOffset="var(--scroll-padding)"
	--toc-active-bg="transparent"
	--toc-active-border-radius="0"
	--toc-active-color="var(--color-primary)"
	--toc-active-font-weight="400"
	--toc-desktop-bg="transparent"
	--toc-desktop-sticky-top="var(--scroll-padding)"
	--toc-font-size="calc(var(--font-size-small)*90/100)"
	--toc-li-border-radius="0"
	--toc-li-color="var(--color-text-secondary)"
	--toc-li-hover-bg="transparent"
	--toc-li-hover-color="var(--color-primary-hover)"
	--toc-li-padding="var(--space-2xs) 0"
	--toc-mobile-bg="var(--color-bg-container)"
	--toc-mobile-bottom="56px"
	--toc-mobile-btn-bg="var(--color-primary)"
	--toc-mobile-btn-border-radius="16px"
	--toc-mobile-btn-padding="0px"
	--toc-mobile-right="8px"
	--toc-padding="var(--space-mid)"
	breakpoint="992"
	flashClickedHeadingsFor="1500"
	keepActiveTocItemInView={false}
	scrollBehavior="smooth">
	{#snippet title()}
		<span class="toc-title text-base">
			<ListBullets color="var(--color-text)" />
			Contents
		</span>
	{/snippet}

	<span slot="open-toc-icon" class="open-toc-icon">
		<ListBullets color="var(--color-text)" />
	</span>
</Toc>

<style>
	:global(.toc ::-webkit-scrollbar) {
		width: 12px;
	}

	:global(button[aria-label='Open table of contents']) {
		background: color-mix(in srgb, var(--color-bg-elevated) 100%, transparent);
		z-index: var(--z-index-max);
	}

	:global(aside.toc > nav) {
		overflow-y: auto !important;
		scrollbar-gutter: stable;
	}

	:global(aside.toc li) {
		line-height: 1.5;
	}

	.open-toc-icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.toc-title {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		font-family: var(--font-fancy);
		border-style: solid;
		border-width: 0 0 1px 0;
		border-image: linear-gradient(to right, var(--color-text-tertiary), transparent) 1 0%;
	}
</style>
