<script>
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities.js';
	import ExLink from '$components/Common/ExLink.svelte';

	import Badges from '$lib/components/Layout/Footer/Badges.svelte';
</script>

<Badges />
<div class="end xs-text">
	<div class="end__text">
		Copyright {`${COPYRIGHT_ENTITY}`} 2023 全力を尽くす, All Rights Reserved. Built with SvelteKit by
		<ExLink href="https://www.linkedin.com/in/wentallout/">
			<span class="link"> @wentallout </span>
		</ExLink>
	</div>

	<ExLink href="/policy">
		<div class="end__text">Privacy Policy</div>
	</ExLink>
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
</style>
