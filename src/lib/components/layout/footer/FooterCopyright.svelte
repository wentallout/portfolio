<script lang="ts">
	import { VERSION } from '@sveltejs/kit';
	import ExLink from '#lib/components/common/ExLink.svelte';
	import Badges from '#lib/components/layout/footer/Badges.svelte';
	import LogoSvelte from '#lib/assets/icons/LogoSvelte.svelte';

	let currentYear = new Date().getFullYear();
</script>

<div
	class="flex flex-col md:flex-row items-center justify-between gap-4 w-full text-sm text-foreground/65 dark:text-foreground/70 font-sans select-none">
	<div class="flex flex-wrap items-center gap-4">
		<span>Copyright © {currentYear} Nguyen Dang Khoa (wentallout), All Rights Reserved.</span>
		<Badges />
	</div>

	<ExLink ariaLabel="SvelteKit" href="https://kit.svelte.dev">
		<div class="flex items-center gap-1.5 hover:text-foreground transition-colors">
			<span>Made by Khoa with</span>
			<LogoSvelte height="14" width="14" />
			<span>{VERSION}</span>
		</div>
	</ExLink>
</div>
