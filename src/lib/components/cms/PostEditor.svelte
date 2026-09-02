<script lang="ts">
	// @ts-ignore — #lib alias resolves at build time
	import { createEditor, Edra } from '#lib/components/edra/shadcn/index.js';
	// @ts-ignore
	import Tiptap from '#lib/components/edra/tiptap/components/Tiptap.svelte';
	import type { Content } from '@tiptap/core';
	import { onMount } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Label } from '#lib/components/ui/label/index.js';
	import { Textarea } from '#lib/components/ui/textarea/index.js';
	import * as Select from '#lib/components/ui/select/index.js';

	let { mode = 'create', post = null, onSaved, entryType = 'post' } = $props<{
		mode: 'create' | 'edit';
		post?: Record<string, unknown> | null;
		onSaved?: (id: string) => void;
		entryType?: 'post' | 'project';
	}>();

	let title = $state<string>(String(post?.title ?? ''));
	let slug = $state<string>(String(post?.slug ?? ''));
	let excerpt = $state<string>(String(post?.excerpt ?? ''));
	let seoTitle = $state<string>(String((post as any)?.seo_title ?? (post as any)?.seoTitle ?? ''));
	let seoDescription = $state<string>(String((post as any)?.seo_description ?? (post as any)?.seoDescription ?? ''));
	let status = $state<string>(String(post?.status ?? 'draft'));
	let publishedAt = $state<string>(post?.published_at ? String(post?.published_at).slice(0,16) : '');
	let scheduledAt = $state<string>((post as any)?.scheduled_at ? String((post as any).scheduled_at).slice(0,16) : '');
	let coverImageUrl = $state<string>(String((post as any)?.cover_image_url ?? (post as any)?.coverImageUrl ?? ''));
	let repoUrl = $state<string>(String((post as any)?.repo_url ?? (post as any)?.repoUrl ?? ''));
	let demoUrl = $state<string>(String((post as any)?.demo_url ?? (post as any)?.demoUrl ?? ''));
	let techStack = $state<string>(Array.isArray((post as any)?.tech_stack) ? (post as any).tech_stack.join(', ') : Array.isArray((post as any)?.techStack) ? (post as any).techStack.join(', ') : String((post as any)?.tech_stack ?? (post as any)?.techStack ?? ''));
	let saving = $state(false);
	let message = $state('');

	const initialJson = (post?.content_json ?? (post as any)?.contentJson) as Content | undefined;
	let editor: any = $state(null);

	async function compressImage(file: File): Promise<File> {
		if (!file.type.startsWith('image/') || file.size < 300 * 1024) return file;
		try {
			const bitmap = await createImageBitmap(file);
			const max = 1600;
			let { width, height } = bitmap;
			if (width > max || height > max) {
				const scale = Math.min(max / width, max / height);
				width = Math.round(width * scale);
				height = Math.round(height * scale);
			}
			const canvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(width, height) : Object.assign(document.createElement('canvas'), { width, height });
			const ctx = (canvas as HTMLCanvasElement).getContext('2d');
			if (!ctx) return file;
			ctx.drawImage(bitmap, 0, 0, width, height);
			bitmap.close?.();
			const blob: Blob | null = canvas instanceof OffscreenCanvas ? await (canvas as OffscreenCanvas).convertToBlob({ type: 'image/webp', quality: 0.82 }) : await new Promise((res) => (canvas as HTMLCanvasElement).toBlob(res, 'image/webp', 0.82));
			if (!blob || blob.size >= file.size) return file;
			return new File([blob], file.name.replace(/\.\w+$/, '.webp'), { type: 'image/webp' });
		} catch { return file; }
	}

	onMount(() => {
		const e: any = createEditor({
			onUpdate: () => {},
			onFileUpload: async (file: File) => {
				const optimized = await compressImage(file);
				try {
					const fd = new FormData();
					fd.append('file', optimized);
					const res = await fetch('/api/cms/upload', { method: 'POST', body: fd });
					if (res.ok) {
						const j = await res.json();
						if (j.url) return j.url;
					}
				} catch {}
				return await new Promise<string>((resolve) => {
					const r = new FileReader();
					r.onload = () => resolve(String(r.result));
					r.readAsDataURL(optimized);
				});
			}
		});
		try {
			if (initialJson) e.commands.setContent(initialJson as never, false);
		} catch {}
		editor = e;
		return () => {
			try { e.destroy(); } catch {}
			editor = null;
		};
	});

	function autoSlug() {
		if (mode === 'create' && title && !slug) {
			slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
		}
	}

	async function save() {
		saving = true;
		message = '';
		try {
			const json = editor?.getJSON();
			const html = editor?.getHTML() ?? '';
			let md = '';
			try {
				md = editor?.storage?.markdown?.getMarkdown?.() ?? '';
			} catch {}
			const payload: Record<string, unknown> = {
				title,
				slug,
				excerpt: excerpt || null,
				contentJson: json,
				contentHtml: html,
				contentMarkdown: md || html,
				status,
				publishedAt: publishedAt ? new Date(publishedAt).toISOString() : status === 'published' ? new Date().toISOString() : null,
				scheduledAt: scheduledAt ? new Date(scheduledAt).toISOString() : null,
				seoTitle: seoTitle || title,
				seoDescription: seoDescription || excerpt?.slice(0,155) || null,
				coverImageUrl: coverImageUrl || null,
				type: entryType,
				...(entryType === 'project' ? { repoUrl: repoUrl || null, demoUrl: demoUrl || null, techStack: techStack ? techStack.split(',').map((s:string)=>s.trim()).filter(Boolean) : [] } : {})
			};
			const base = entryType === 'project' ? '/api/cms/projects' : '/api/cms/posts';
			const url = mode === 'create' ? base : `${base}/${String(post?.id)}`;
			const method = mode === 'create' ? 'POST' : 'PUT';
			const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
			const j = await res.json();
			if (!res.ok) throw new Error(j.error ?? 'Save failed');
			message = 'Saved';
			if (mode === 'create' && j.id) onSaved?.(j.id);
			else onSaved?.(String(post?.id));
		} catch (e) {
			message = String((e as Error).message);
		} finally {
			saving = false;
		}
	}
</script>

<div class="space-y-6 w-full">
	<div class="space-y-6">
			<div class="grid gap-2">
				<Label for="post-title" class="text-sm">Title</Label>
				<Input id="post-title" bind:value={title} oninput={autoSlug} placeholder="Post title" class="text-sm" />
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="grid gap-2">
					<Label for="post-slug" class="text-sm">Slug</Label>
					<Input id="post-slug" bind:value={slug} placeholder="kebab-case-slug" class="text-sm" />
					<p class="text-sm text-muted-foreground">Used in URL /blogs/{slug || 'your-slug'}</p>
				</div>
				<div class="grid gap-2">
					<Label class="text-sm">Status</Label>
					<Select.Root type="single" bind:value={status}>
						<Select.Trigger class="text-sm rounded-none">
							{status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Select status'}
						</Select.Trigger>
						<Select.Content class="rounded-none">
							<Select.Item value="draft" class="text-sm">Draft</Select.Item>
							<Select.Item value="published" class="text-sm">Published</Select.Item>
							<Select.Item value="archived" class="text-sm">Archived</Select.Item>
							<Select.Item value="scheduled" class="text-sm">Scheduled</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>

			<div class="grid gap-2">
				<Label for="post-excerpt" class="text-sm">Excerpt</Label>
				<Textarea id="post-excerpt" bind:value={excerpt} rows={3} placeholder="Short description — fallback for SEO if empty" class="text-sm min-h-[80px]" />
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="grid gap-2">
					<Label for="seo-title" class="text-sm">SEO Title</Label>
					<Input id="seo-title" bind:value={seoTitle} placeholder="Optional — defaults to title" class="text-sm" />
				</div>
				<div class="grid gap-2">
					<Label for="seo-desc" class="text-sm">SEO Description</Label>
					<Input id="seo-desc" bind:value={seoDescription} placeholder="~155 chars" class="text-sm" />
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div class="grid gap-2">
					<Label for="pub-at" class="text-sm">Published At</Label>
					<Input id="pub-at" type="datetime-local" bind:value={publishedAt} class="text-sm" />
				</div>
				<div class="grid gap-2">
					<Label for="sched-at" class="text-sm">Scheduled At</Label>
					<Input id="sched-at" type="datetime-local" bind:value={scheduledAt} class="text-sm" />
				</div>
				<div class="grid gap-2">
					<Label for="cover-url" class="text-sm">Cover Image URL</Label>
					<Input id="cover-url" bind:value={coverImageUrl} placeholder="https://..." class="text-sm" />
				</div>
			</div>
			{#if entryType === 'project'}
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="grid gap-2">
						<Label for="repo-url" class="text-sm">Repo URL</Label>
						<Input id="repo-url" bind:value={repoUrl} placeholder="https://github.com/..." class="text-sm" />
					</div>
					<div class="grid gap-2">
						<Label for="demo-url" class="text-sm">Demo URL</Label>
						<Input id="demo-url" bind:value={demoUrl} placeholder="https://..." class="text-sm" />
					</div>
					<div class="grid gap-2">
						<Label for="tech-stack" class="text-sm">Tech Stack (comma)</Label>
						<Input id="tech-stack" bind:value={techStack} placeholder="Svelte, TypeScript, Tailwind" class="text-sm" />
					</div>
				</div>
			{/if}
		</div>

	<div class="space-y-2">
		<div>
			<h3 class="text-sm font-medium">Content</h3>
			<p class="text-sm text-muted-foreground">Edra — slash “/” for commands, drag handle on hover, paste/drop images.</p>
		</div>
		<div class="border rounded-none overflow-hidden">
				{#if editor}
					<Tiptap {editor}>
						<Edra.Toolbar class="flex flex-wrap gap-1 p-2 border-b bg-muted/20" />
						<div class="min-h-[500px] p-4">
							<Edra.Content class="prose prose-sm dark:prose-invert max-w-none focus:outline-none min-h-[480px] text-sm" />
						</div>
					</Tiptap>
				{:else}
					<div class="p-8 text-sm text-muted-foreground">Loading editor…</div>
				{/if}
		</div>
	</div>

	<div class="flex items-center gap-3">
		<Button onclick={save} disabled={saving} size="default">
			{saving ? 'Saving…' : mode === 'create' ? (entryType === 'project' ? 'Create project' : 'Create post') : 'Save changes'}
		</Button>
		{#if message}<span class="text-sm text-muted-foreground">{message}</span>{/if}
		<Button variant="ghost" href={entryType === 'project' ? '/studio/projects' : '/studio/posts'} class="text-sm">Back to list</Button>
	</div>

	<p class="text-sm text-muted-foreground">Images: drag/drop, paste (Ctrl+V), or slash “/” → Image. Uploads go to Cloudinary (portfolio/cms) and are stored as CDN URLs. Falls back to inline data URL if Cloudinary not configured.</p>
</div>
