<script>
	import Breadcrumb from '$components/other/Breadcrumb.svelte';

	/** @type {{pageTitle?: string}} */
	let { pageTitle = 'pageTitle' } = $props();
</script>

<div
	class="w-full border-grid-b signature-padding flex flex-col gap-3 select-none bg-background relative transition-colors duration-200">
	<Breadcrumb />
	<h1
		class="text-6xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground font-fancy">
		{pageTitle}<span class="text-primary">.</span>
	</h1>
</div>
