<script>
	import Breadcrumb from '$components/other/Breadcrumb.svelte';

	/** @type {{pageTitle?: string}} */
	let { pageTitle = 'pageTitle' } = $props();
</script>

<div
	class="w-full border-grid-b p-8 md:p-10 flex flex-col gap-3 select-none bg-background relative transition-colors duration-200">
	<span class="grid-plus grid-plus-tl">+</span>
	<span class="grid-plus grid-plus-tr">+</span>
	<Breadcrumb />
	<h1
		class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground font-fancy">
		{pageTitle}<span class="text-primary">.</span>
	</h1>
</div>
