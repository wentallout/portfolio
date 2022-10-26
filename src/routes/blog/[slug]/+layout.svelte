<script>
	import MarkdownContainer from '$lib/components/Markdown/MarkdownContainer.svelte';

	import lazyload from 'vanilla-lazyload';
	import { browser } from '$app/environment';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<MarkdownContainer>
	<slot />
</MarkdownContainer>

<style>
</style>
