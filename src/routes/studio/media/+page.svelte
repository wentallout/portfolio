<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	let { data } = $props();
	let items = $state(data.items);
	let uploading = $state(false);
	let msg = $state('');
	let dragOver = $state(false);

	async function uploadFiles(files: FileList) {
		uploading = true;
		msg = '';
		for (const file of Array.from(files)) {
			const fd = new FormData();
			fd.append('file', file);
			const res = await fetch('/api/cms/media', { method: 'POST', body: fd });
			if (!res.ok) msg = (await res.json()).error ?? 'Upload failed';
		}
		if (!msg) location.reload();
		uploading = false;
	}

	async function onInput(e: Event) {
		const input = e.target as HTMLInputElement;
		if (input.files?.length) await uploadFiles(input.files);
	}

	function onDrop(e: DragEvent) {
		dragOver = false;
		if (e.dataTransfer?.files?.length) uploadFiles(e.dataTransfer.files);
	}

	async function copy(url: string) {
		await navigator.clipboard.writeText(url);
		msg = 'Copied URL';
		setTimeout(() => msg = '', 1500);
	}

	async function del(id: string) {
		if (!confirm('Delete this image?')) return;
		const res = await fetch(`/api/cms/media/${id}`, { method: 'DELETE' });
		if (res.ok) items = items.filter(i => i.id !== id);
		else msg = 'Delete failed';
	}

	const totalPages = $derived(Math.ceil(data.total / 24));
</script>

<div class="flex items-center justify-between">
	<h1 class="text-2xl font-bold">Media ({data.total})</h1>
	<div class="flex items-center gap-2">
		<input id="studio-media-input" type="file" accept="image/*" multiple class="hidden" onchange={onInput} disabled={uploading} />
		<Button onclick={() => document.getElementById('studio-media-input')?.click()} disabled={uploading} class="rounded-none">
			{uploading ? 'Uploading…' : 'Upload'}
		</Button>
	</div>
</div>

{#if msg}<p class="text-sm text-muted-foreground mt-2">{msg}</p>{/if}

<div
	class="border-2 border-dashed rounded-none mt-6 p-8 text-center {dragOver ? 'bg-muted' : ''}"
	ondragover={(e)=>{e.preventDefault(); dragOver=true}}
	ondragleave={()=>dragOver=false}
	ondrop={(e)=>{e.preventDefault(); onDrop(e)}}
	role="region"
>
	<p class="text-sm">Drag & drop images here or click Upload</p>
	<p class="text-sm text-muted-foreground mt-1">Images are compressed to webp 1600px max before upload. Up to 5MB, stored as data URL (Neon storage unavailable in ap-southeast-1).</p>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
	{#each items as item (item.id)}
		<div class="border rounded-none overflow-hidden group">
			<div class="aspect-square bg-muted overflow-hidden">
				<img src={item.url} alt={item.alt ?? ''} class="w-full h-full object-cover" loading="lazy" />
			</div>
			<div class="p-2 space-y-1">
				<p class="text-sm truncate" title={item.key}>{item.key}</p>
				<p class="text-sm text-muted-foreground">{item.bytes ? (item.bytes/1024).toFixed(0)+' KB' : ''} · {item.mime ?? ''}</p>
				<div class="flex gap-1">
					<Button variant="outline" size="sm" onclick={()=>copy(item.url)} class="flex-1">Copy</Button>
					<Button variant="destructive" size="sm" onclick={()=>del(item.id)}>Delete</Button>
				</div>
			</div>
		</div>
	{/each}
</div>

{#if items.length === 0}
	<p class="text-sm text-muted-foreground mt-8">No media yet. Upload or paste images in the editor — they are auto-saved here.</p>
{/if}

{#if totalPages > 1}
	<div class="flex gap-2 mt-6">
		{#each Array(totalPages) as _, i}
			<Button href={`?page=${i+1}`} variant={data.page === i+1 ? "default" : "outline"} size="sm" class="rounded-none min-w-9">{i+1}</Button>
		{/each}
	</div>
{/if}
