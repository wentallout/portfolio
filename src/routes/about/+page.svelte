<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import { getKhoaAge } from '$lib/utils/time';
</script>

<div class="w-full bg-black relative">
	<PageTitle pageTitle="About Me" />

	<!-- 2-Column Matrix Row -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-0 border-grid-b relative items-stretch">
		<!-- Bio Card -->
		<div class="border-grid-r p-6 md:p-8 flex flex-col justify-between relative bg-black h-full">
			<span class="grid-plus grid-plus-tl">+</span>
			<span class="grid-plus grid-plus-tr">+</span>
			<div>
				<div class="flex items-center justify-between text-sm mb-4">
					<span
						class="uppercase tracking-widest text-sm text-neutral-400 font-semibold">
						PROFILE
					</span>
				</div>

				<h3 class="text-2xl font-semibold text-white mb-4">Hi there! Nice to meet you.</h3>
				<ul class="space-y-3 text-sm text-neutral-400 font-normal">
					<li class="flex items-center gap-2">
						<span class="text-white">▹</span>
						<span>Khoa Nguyen ({getKhoaAge()} years old).</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="text-white">▹</span>
						<span>Based in vibrant Ho Chi Minh City, Vietnam.</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="text-white">▹</span>
						<span>Independent Web Designer & Frontend Developer.</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Mission Card -->
		<div class="p-6 md:p-8 flex flex-col justify-between relative bg-black h-full">
			<span class="grid-plus grid-plus-tr">+</span>
			<div>
				<div class="flex items-center justify-between text-sm mb-4">
					<span
						class="uppercase tracking-widest text-sm text-neutral-400 font-semibold">
						PURPOSE & PASSION
					</span>
				</div>

				<h3 class="text-2xl font-semibold text-white mb-4">My Philosophy</h3>
				<p class="text-sm text-neutral-400 leading-relaxed font-normal">
					I believe building for the web should be an exercise in clarity, care, and precision. My focus is on turning complex ideas into clean, fast, accessible, and delightful digital experiences that serve people well.
				</p>
			</div>
		</div>
	</div>

	<!-- Bookmarks & Aesthetic Card -->
	<div class="p-6 md:p-8 border-grid-b relative bg-black">
		<span class="grid-plus grid-plus-tl">+</span>
		<span class="grid-plus grid-plus-tr">+</span>
		<div class="flex items-center justify-between text-sm mb-4">
			<span class="uppercase tracking-widest text-sm text-neutral-400 font-semibold">
				CURATED INSPIRATION
			</span>
		</div>

		<h3 class="text-xl font-semibold text-white mb-4">Bookmarks & Visual References</h3>
		<div class="flex flex-wrap gap-4 text-sm">
			<a
				class="inline-flex items-center gap-2 px-4 py-2 border-grid-all bg-neutral-950 text-white hover:bg-neutral-900 transition-colors cursor-pointer"
				href="https://www.are.na/khoa-nguyen-wwy5oc6w38/aesthetics-bbiz2b048_c"
				rel="noreferrer"
				target="_blank">
				<span>Are.na Moodboard</span>
			</a>

			<a
				class="inline-flex items-center gap-2 px-4 py-2 border-grid-all bg-neutral-950 text-white hover:bg-neutral-900 transition-colors cursor-pointer"
				href="https://open.spotify.com/playlist/4rVu705DBrGDeNSec40ooy?si=6qAYnTnJT5OKiItwhOk37w"
				rel="noreferrer"
				target="_blank">
				<span>Listen on Spotify</span>
			</a>
		</div>
	</div>
</div>
