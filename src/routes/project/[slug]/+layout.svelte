<script>
	import { browser } from '$app/environment';
	import MarkdownContainer from '$lib/components/Markdown/MarkdownContainer.svelte';

	

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<MarkdownContainer>
	<slot />
</MarkdownContainer>
