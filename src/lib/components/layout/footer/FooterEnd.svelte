<script>
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities.js';
	import ExLink from '$components/common/ExLink.svelte';

	import Badges from '$components/layout/footer/Badges.svelte';
</script>

<Badges />
<div class="end text-xs">
	<div class="end__text">
		Copyright {`${COPYRIGHT_ENTITY}`} 2023 Nguyen Dang Khoa (wentallout), All Rights Reserved.
	</div>

	<div class="end__text">
		Made by Khoa with
		<a target="_blank" href="https://svelte.dev">
			<span class="end__svelte">SvelteKit</span>
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
		margin-top: var(--spaceS);
		color: var(--colorTextSecondary);
	}

	.end__svelte {
		color: var(--colorSvelte);
		font-weight: 600;
	}
</style>
