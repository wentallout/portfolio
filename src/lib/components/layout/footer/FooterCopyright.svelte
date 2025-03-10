<script>
	import { VERSION } from '@sveltejs/kit';
	import ExLink from '$components/common/ExLink.svelte';
	import Badges from '$components/layout/footer/Badges.svelte';
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities.js';

	let currentYear = new Date().getFullYear();
</script>

<Badges />
<div class="end text-xs">
	<div class="end__text">
		Copyright {`${COPYRIGHT_ENTITY}`}
		{currentYear} Nguyen Dang Khoa (wentallout), All Rights Reserved.
	</div>

	<div class="end__text">
		Made by Khoa with
		<a href="https://svelte.dev" target="_blank">
			<span class="end__svelte">SvelteKit {VERSION}</span>
		</a>
	</div>
</div>

<style>
	.end {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.end__text {
		user-select: none;
		margin-top: var(--space-small);
		color: var(--color-text-secondary);
	}

	.end__svelte {
		color: var(--color-svelte);
		font-weight: 600;
	}
</style>
