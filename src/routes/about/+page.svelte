<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import { getKhoaAge } from '$lib/utils/time';
</script>

<div class="w-full bg-background relative">
	<PageTitle pageTitle="About Me" />

	<!-- 2-Column Matrix Row -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-0 border-grid-b relative items-stretch">
		<!-- Bio Card -->
		<div class="signature-padding flex flex-col justify-between relative bg-background h-full">
			<div>
				<div class="flex items-center justify-between text-sm mb-4">
					<span class="uppercase tracking-widest text-sm text-muted-foreground font-medium">
						PROFILE
					</span>
				</div>

				<h3 class="text-2xl font-medium text-foreground mb-4">Hi there! Nice to meet you.</h3>
				<ul class="space-y-3 text-sm text-muted-foreground font-normal">
					<li class="flex items-center gap-2">
						<span class="text-foreground">▹</span>
						<span>Khoa Nguyen ({getKhoaAge()} years old).</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="text-foreground">▹</span>
						<span>Based in vibrant Ho Chi Minh City, Vietnam.</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="text-foreground">▹</span>
						<span>Independent Web Designer & Frontend Developer.</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Mission Card -->
		<div class="signature-padding flex flex-col justify-between relative bg-background h-full">
			<div>
				<div class="flex items-center justify-between text-sm mb-4">
					<span class="uppercase tracking-widest text-sm text-muted-foreground font-medium">
						PURPOSE & PASSION
					</span>
				</div>

				<h3 class="text-2xl font-medium text-foreground mb-4">My Philosophy</h3>
				<p class="text-sm text-muted-foreground leading-relaxed font-normal">
					I believe building for the web should be an exercise in clarity, care, and precision. My
					focus is on turning complex ideas into clean, fast, accessible, and delightful digital
					experiences that serve people well.
				</p>
			</div>
		</div>
	</div>

	<!-- Bookmarks & Aesthetic Card -->
	<div class="signature-padding border-grid-b relative bg-background">
		<div class="flex items-center justify-between text-sm mb-4">
			<span class="uppercase tracking-widest text-sm text-muted-foreground font-medium">
				CURATED INSPIRATION
			</span>
		</div>

		<h3 class="text-2xl font-medium text-foreground mb-4">Bookmarks & Visual References</h3>
		<div class="flex flex-wrap gap-4 text-sm">
			<a
				class="inline-flex items-center gap-2 px-4 py-2 border-grid-all bg-card text-foreground hover:bg-accent transition-colors cursor-pointer"
				href="https://www.are.na/khoa-nguyen-wwy5oc6w38/aesthetics-bbiz2b048_c"
				rel="noreferrer"
				target="_blank">
				<span>Are.na Moodboard</span>
			</a>

			<a
				class="inline-flex items-center gap-2 px-4 py-2 border-grid-all bg-card text-foreground hover:bg-accent transition-colors cursor-pointer"
				href="https://open.spotify.com/playlist/4rVu705DBrGDeNSec40ooy?si=6qAYnTnJT5OKiItwhOk37w"
				rel="noreferrer"
				target="_blank">
				<span>Listen on Spotify</span>
			</a>
		</div>
	</div>
</div>
