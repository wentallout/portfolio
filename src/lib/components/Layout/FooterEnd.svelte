<script>
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities.js';
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<div class="end">
	<div class="end__text small-text">
		Copyright {`${COPYRIGHT_ENTITY}`} 1999-2023 wentallout, All Rights Reserved. 全力を尽くす.
	</div>

	<ExLink href="/doc/privacy-policy.pdf">
		<div class="end__text small-text">Privacy Policy</div>
	</ExLink>
</div>

<style>
	.end {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.end__text {
		user-select: none;
		margin-top: var(--space-s);
		color: var(--text-color-low);
	}

	.end__text:hover {
		filter: brightness(1.2);
	}
</style>
