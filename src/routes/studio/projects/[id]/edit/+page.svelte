<script lang="ts">
	// @ts-ignore
	import PostEditor from '#lib/components/cms/PostEditor.svelte';
	let { data } = $props();
</script>

<h1 class="text-2xl font-bold">Edit: {String(data.post.title)}</h1>
<PostEditor mode="edit" post={data.post as any} entryType="project" />
