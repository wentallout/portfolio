<script lang="ts">
	import EssentialList from '#lib/sections/blogs/EssentialList.svelte';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';

	/** @type {{as?: 'h1' | 'h2'}} */
	let { as = 'h2' } = $props();
</script>

<section class="w-full relative border-grid-b">
	<SectionTitle {as} sectionTitle="Resource" />

	<div class="w-full relative">
		<EssentialList />
	</div>
</section>
