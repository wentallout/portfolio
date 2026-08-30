<script lang="ts">
	import PaginationNav from '#lib/components/common/PaginationNav.svelte';
	let { onsetPage, ...rest } = $props();
</script>

<div class="flex justify-center items-center">
	<PaginationNav {...rest} {onsetPage} />
</div>
