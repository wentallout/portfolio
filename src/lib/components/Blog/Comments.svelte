<!-- Comments.svelte -->
<script>
	import { onMount } from 'svelte';

	// Translate the user's dark mode preference to a theme
	const siteTheme = 'github-dark';

	// An object with all the utterances options I want
	const options = {
		src: 'https://utteranc.es/client.js',
		repo: 'wentallout/portfolio',
		label: 'comments',
		crossorigin: 'anonymous',
		theme: siteTheme,
		async: '',
		'issue-term': 'pathname'
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

<div id="utterances-comments" />
