<script>
	import PaginationNav from '$components/common/PaginationNav.svelte';
	let { onsetPage, ...rest } = $props();
</script>

<div class="flex justify-center items-center">
	<PaginationNav {...rest} {onsetPage} />
</div>
