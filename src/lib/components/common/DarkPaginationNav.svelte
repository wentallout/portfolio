<script>
	import PaginationNav from '$components/common/PaginationNav.svelte';
</script>

<div class="dark-pagination-nav">
	<PaginationNav {...$$props} on:setPage />
</div>

<style>
	.dark-pagination-nav :global(.pagination-nav) {
		display: flex;
		justify-content: center;
		background: hsl(200, 80%, 5%);

		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}
	.dark-pagination-nav :global(.option) {
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s all ease-out;
		user-select: none;
		color: hsl(200, 90%, 90%);
	}
	.dark-pagination-nav :global(.option svg path) {
		fill: hsl(200, 90%, 90%);
	}
	.dark-pagination-nav :global(.option:first-child) {
		border-radius: 8px 0 0 8px;
	}
	.dark-pagination-nav :global(.option:last-child) {
		border-radius: 0 8px 8px 0;
	}
	.dark-pagination-nav :global(.option.number),
	.dark-pagination-nav :global(.option.ellipsis) {
		padding: 0.7rem 1rem;
	}
	.dark-pagination-nav :global(.option:hover) {
		background: #000;
		cursor: pointer;
	}
	.dark-pagination-nav :global(.option.active) {
		color: hsl(200, 100%, 50%);
	}
</style>
