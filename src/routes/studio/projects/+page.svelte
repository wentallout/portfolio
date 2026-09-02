<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import * as Select from '#lib/components/ui/select/index.js';
	let { data } = $props();
	let items = $state(data.items);
	const totalPages = $derived(Math.ceil(data.total / 20));
	let q = $state(data.q ?? '');
	let status = $state(data.status ?? '');
	async function del(id: string) {
		if (!confirm('Delete this project?')) return;
		const res = await fetch(`/api/cms/projects/${id}`, { method: 'DELETE' });
		if (res.ok) items = items.filter((i:any)=>i.id!==id);
	}
</script>

<div class="flex items-center justify-between">
	<h1 class="text-2xl font-bold">Projects ({data.total})</h1>
	<Button href="/studio/projects/new">New Project</Button>
</div>

<form method="GET" class="flex gap-2 mt-4">
	<Input name="q" bind:value={q} placeholder="Search title/slug" class="flex-1" />
	<input type="hidden" name="q" value={q} style="display:none" />
	<Select.Root type="single" bind:value={status}>
		<Select.Trigger class="w-[160px] rounded-none text-sm">
			{status ? status.charAt(0).toUpperCase() + status.slice(1) : 'All statuses'}
		</Select.Trigger>
		<Select.Content class="rounded-none">
			<Select.Item value="" class="text-sm">All</Select.Item>
			<Select.Item value="draft" class="text-sm">Draft</Select.Item>
			<Select.Item value="published" class="text-sm">Published</Select.Item>
			<Select.Item value="archived" class="text-sm">Archived</Select.Item>
		</Select.Content>
	</Select.Root>
	<input type="hidden" name="status" value={status} />
	<Button variant="outline" type="submit">Filter</Button>
</form>

<div class="border rounded-none mt-6 overflow-hidden">
	<table class="w-full text-sm">
		<thead class="bg-muted/50">
			<tr>
				<th class="text-left p-3">Title</th>
				<th class="text-left p-3">Slug</th>
				<th class="text-left p-3">Status</th>
				<th class="text-left p-3">Updated</th>
				<th class="p-3"></th>
			</tr>
		</thead>
		<tbody>
			{#each items as item (item.id)}
				<tr class="border-t">
					<td class="p-3">{item.title}</td>
					<td class="p-3 text-muted-foreground">{item.slug}</td>
					<td class="p-3"><span class="rounded-none border px-2 py-1 text-sm">{item.status}</span></td>
					<td class="p-3 text-muted-foreground">{new Date(item.updated_at).toLocaleDateString()}</td>
					<td class="p-3 text-right flex gap-2 justify-end">
						<a href={`/projects/${item.slug}`} target="_blank" class="underline">View</a>
						<a href={`/studio/projects/${item.id}/edit`} class="underline">Edit</a>
						<Button variant="ghost" size="sm" onclick={()=>del(item.id)} class="text-destructive hover:text-destructive h-auto p-0 underline">Delete</Button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

{#if totalPages > 1}
	<div class="flex gap-2 mt-4">
		{#each Array(totalPages) as _, i}
			<Button href={`?page=${i + 1}${data.q ? `&q=${data.q}` : ''}${data.status ? `&status=${data.status}` : ''}`} variant={data.page === i + 1 ? "default" : "outline"} size="sm" class="rounded-none min-w-9">{i + 1}</Button>
		{/each}
	</div>
{/if}
