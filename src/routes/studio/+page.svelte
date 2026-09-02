<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	let { data } = $props();
</script>

<h1 class="text-3xl font-bold">Dashboard</h1>
<p class="text-sm text-muted-foreground mt-2">Welcome, {data.user?.email}</p>

<div class="grid grid-cols-3 gap-4 mt-8">
	<Card.Root class="rounded-none p-6 hover:bg-muted/50 transition-colors">
		<a href="/studio/posts" class="block">
			<div class="text-sm text-muted-foreground">Blog Posts</div>
			<div class="text-2xl font-bold mt-1">{data.counts?.posts ?? '—'}</div>
		</a>
	</Card.Root>
	<Card.Root class="rounded-none p-6 hover:bg-muted/50 transition-colors">
		<a href="/studio/projects" class="block">
			<div class="text-sm text-muted-foreground">Projects</div>
			<div class="text-2xl font-bold mt-1">{data.counts?.projects ?? '—'}</div>
		</a>
	</Card.Root>
</div>

<div class="mt-8">
	<h2 class="text-lg font-semibold">Quick actions</h2>
	<div class="flex gap-3 mt-3">
		<Button href="/studio/posts/new" class="rounded-none">New Blog Post</Button>
		<Button href="/studio/projects/new" variant="outline" class="rounded-none">New Project</Button>
	</div>
</div>
