<script lang="ts">
	import website from '#lib/config.js';
	const { themeColor } = website;
</script>

<svelte:head>
	<meta name="theme-color" content={themeColor} />
</svelte:head>
