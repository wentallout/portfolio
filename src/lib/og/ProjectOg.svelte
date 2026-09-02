<svelte:options css="injected" />

<script lang="ts">
	let {
		title = 'Untitled Project',
		description = '',
		techStack = [],
		siteUrl = 'wentallout.io.vn'
	}: {
		title: string;
		description?: string;
		techStack?: string[];
		siteUrl?: string;
	} = $props();
</script>

<!-- 1 font Inter / 1 weight 500 / 2 sizes 40px + 14px -->
<div
	style="display:flex;flex-direction:column;width:100%;height:100%;background:#161D22;color:#FAF9F5;font-family:Inter,sans-serif;font-weight:500"
>
	<div style="display:flex;width:100%;height:4px;background:#D4AF37"></div>
	<div style="display:flex;flex-direction:column;flex:1;padding:40px;justify-content:space-between">
		<div style="display:flex;justify-content:space-between;align-items:center">
			<span style="font-size:14px;color:#D4AF37;letter-spacing:3px">PROJECT — wentallout.io.vn</span>
			<span style="font-size:14px;color:#8a9ba8">{siteUrl}</span>
		</div>
		<div style="display:flex;flex-direction:column;gap:14px">
			<h1 style="font-size:40px;line-height:1.05;margin:0;color:#FAF9F5">{title}</h1>
			{#if description}
				<p style="font-size:14px;line-height:1.6;margin:0;color:#8a9ba8">{description}</p>
			{/if}
		</div>
		<div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #2a3439;padding-top:16px">
			<span style="font-size:14px;color:#8a9ba8">
				{#if techStack.length}{techStack.slice(0, 4).join('  ·  ')}{:else}khoa nguyen — product & engineering{/if}
			</span>
			<span style="font-size:14px;color:#D4AF37">wentallout.io.vn</span>
		</div>
	</div>
</div>
