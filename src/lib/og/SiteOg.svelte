<svelte:options css="injected" />

<script lang="ts">
	let {
		title = 'Tailor-made websites for your business — Khoa Nguyen',
		description = 'Professional UI/UX Designer and Frontend Developer since 2022',
		siteUrl = 'wentallout.io.vn'
	}: {
		title?: string;
		description?: string;
		siteUrl?: string;
	} = $props();
</script>

<!-- Design system: 1 font (Inter), 1 weight (500), 2 sizes (40px / 14px), palette: Urushi #161D22 / Washi #FAF9F5 / Kintsugi #D4AF37 / Border #2a3439 -->
<div
	style="display:flex;flex-direction:column;width:100%;height:100%;background:#161D22;color:#FAF9F5;font-family:Inter,sans-serif;font-weight:500">
	<div style="display:flex;width:100%;height:4px;background:#D4AF37"></div>
	<div style="display:flex;flex-direction:column;flex:1;padding:40px;justify-content:space-between">
		<div style="display:flex;justify-content:space-between;align-items:center">
			<span style="font-size:14px;color:#8a9ba8">{siteUrl}</span>
		</div>
		<div style="display:flex;flex-direction:column;gap:16px">
			<h1 style="font-size:40px;line-height:1.05;margin:0;color:#FAF9F5;max-width:1020px">
				{title}
			</h1>
			<p style="font-size:14px;line-height:1.6;margin:0;color:#8a9ba8;max-width:840px">
				{description}
			</p>
		</div>
		<div
			style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #2a3439;padding-top:16px">
			<span style="font-size:14px;color:#8a9ba8">Khoa Nguyen — UI/UX · Frontend · Svelte</span>
			<span style="font-size:14px;color:#D4AF37">wentallout.io.vn</span>
		</div>
	</div>
</div>
