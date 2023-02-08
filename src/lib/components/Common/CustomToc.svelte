<script>
	import Toc from 'svelte-toc';
	import ListBullets from '~icons/ph/list-bullets';
</script>

<Toc
	breakpoint="992"
	flashClickedHeadingsFor="0"
	--toc-max-height="80vh"
	--toc-font-size="var(--font-size-small)"
	--toc-padding="var(--space-m)"
	--toc-li-border-radius="0"
	--toc-li-hover-bg="transparent"
	--toc-li-hover-color="var(--primary-500)"
	--toc-li-padding="var(--space-2xs) 0"
	--toc-active-bg="transparent"
	--toc-active-color="var(--primary-500)"
	--toc-desktop-bg="var(--black-400)"
	--toc-desktop-sticky-top="var(--scroll-padding)"
	--toc-mobile-bottom="100px"
	--toc-active-font-weight="600"
	--toc-mobile-btn-border-radius="100%"
	--toc-mobile-bg="var(--black-400)"
	--toc-mobile-btn-bg="var(--primary-500)"
	--toc-mobile-btn-padding="var(-space-m)">
	<span class="toc-title mid-text" slot="title">
		<ListBullets color="var(--text-color)" width="24" height="24" />
		Contents</span>

	<span slot="open-toc-icon">
		<ListBullets color="var(--black-500)" width="24" height="24" />
	</span>
</Toc>

<style>
	.toc-title {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		font-family: 'Fancy';
	}
</style>
