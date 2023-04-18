<script>
	import { onMount } from 'svelte';

	const siteTheme = 'github-dark';

	const options = {
		src: 'https://utteranc.es/client.js',
		repo: 'wentallout/portfolio',
		label: 'comments',
		crossorigin: 'anonymous',
		theme: siteTheme,
		async: '',
		'issue-term': 'url'
	};

	onMount(() => {
		const utteranceScript = document.createElement('script');
		const targetTag = document.getElementById('utterances-comments');

		// Loop over the options & apply each property as an attribute
		for (const prop in options) {
			utteranceScript.setAttribute(prop, options[prop]);
		}

		targetTag.appendChild(utteranceScript);
	});
</script>

<noscript>JavaScript must be enabled to leave comments.</noscript>
<div id="utterances-comments" />
