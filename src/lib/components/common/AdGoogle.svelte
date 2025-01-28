<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let scriptLoaded = false;

	export let slotId;
	export let adFormat = 'auto';
	export let adStyle = 'display:block;';
	export let responsive = true;

	// Initialize queue if not exists
	if (browser && !window.adsbygoogle) {
		window.adsbygoogle = [];
	}

	onMount(() => {
		if (browser) {
			// Load script once
			if (!scriptLoaded) {
				const script = document.createElement('script');
				script.src =
					'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2238795577080818';
				script.async = true;
				script.crossOrigin = 'anonymous';
				document.head.appendChild(script);
				scriptLoaded = true;
			}

			// Push ad configuration
			window.adsbygoogle.push({});
		}
	});
</script>

<div class="ad-container">
	<ins
		style={adStyle}
		class="adsbygoogle"
		data-ad-client="ca-pub-2238795577080818"
		data-ad-format={adFormat}
		data-ad-slot={slotId}
		data-full-width-responsive={responsive.toString()}>
	</ins>
</div>

<style>
	.ad-container {
		width: 100%;
		min-height: 100px;
		margin: 1rem 0;
	}
</style>
