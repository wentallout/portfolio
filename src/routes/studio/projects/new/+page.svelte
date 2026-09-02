<script lang="ts">
	import { goto } from '$app/navigation';
	// @ts-ignore
	import PostEditor from '#lib/components/cms/PostEditor.svelte';
</script>

<h1 class="text-2xl font-bold">New Project</h1>
<PostEditor mode="create" entryType="project" onSaved={(id)=> goto(`/studio/projects/${id}/edit`)} />
