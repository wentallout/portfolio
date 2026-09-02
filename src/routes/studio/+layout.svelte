<script lang="ts">
	import { page } from '$app/state';
	let { children, data } = $props();
	const isLogin = $derived(page.url.pathname.startsWith('/studio/login'));
</script>

{#if isLogin}
	{@render children()}
{:else}
	<div class="min-h-screen bg-background text-foreground">
		<header class="border-b">
			<div class="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
				<a href="/studio" class="font-bold text-lg">Studio</a>
				<nav class="flex gap-4 text-sm">
					<a href="/studio/posts" class="hover:underline">Posts</a>
					<a href="/studio/projects" class="hover:underline">Projects</a>
					<a href="/studio/media" class="hover:underline">Media</a>
					<a href="/" class="text-muted-foreground hover:underline">↗ View site</a>
				</nav>
				<div class="text-sm text-muted-foreground">{data.user?.email}</div>
			</div>
		</header>
		<main class="mx-auto max-w-6xl px-6 py-8">
			{@render children()}
		</main>
	</div>
{/if}
