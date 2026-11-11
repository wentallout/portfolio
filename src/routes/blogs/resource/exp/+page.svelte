<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
</script>

<div class="px-6 py-4 border-grid-b bg-background">
	<Breadcrumb minDepth={1} />
</div>

<section class="w-full relative border-grid-b">
	<SectionTitle as="h1" sectionTitle="Experiments" />
</section>
