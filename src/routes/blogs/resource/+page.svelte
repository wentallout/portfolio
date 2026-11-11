<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import ResourceList from '#lib/sections/blogs/ResourceList.svelte';
</script>

<div class="w-full bg-background relative">
	<div class="px-6 py-4 border-grid-b bg-background">
		<Breadcrumb minDepth={1} />
	</div>

	<ResourceList as="h1" />
</div>
