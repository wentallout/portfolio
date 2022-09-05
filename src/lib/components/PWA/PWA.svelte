<script>
	import website from '$lib/config.js';
	const { themeColor } = website;
</script>

<svelte:head>
	<meta name="theme-color" content={themeColor} />
	<link rel="apple-touch-icon" href="%sveltekit.assets%/apple-touch-icon.png" />
</svelte:head>
