<script>
	import BlurText from '$components/BlurText.svelte';
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import { PROFILE_COPY } from '$lib/constants/labels';
	import { getKhoaAge } from '$lib/utils/time';
</script>

<div class="w-full bg-background relative">
	<div class="px-6 py-4 border-grid-b bg-background">
		<Breadcrumb minDepth={1} />
	</div>

	<!-- 2-Column Matrix Row -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-0 border-grid-b relative items-stretch">
		<!-- Bio Card -->
		<div class="signature-padding flex flex-col justify-between relative bg-background h-full">
			<div>
				<div class="flex items-center justify-between text-sm mb-4">
					<span class="text-sm text-muted-foreground font-medium">
						{PROFILE_COPY.profileBadge}
					</span>
				</div>

				<h3 class="text-2xl font-medium text-foreground mb-4">
					<BlurText
						text={PROFILE_COPY.profileHeading}
						animateBy="words"
						direction="top"
						class="font-medium tracking-tight text-foreground text-2xl" />
				</h3>
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
					<span class="text-sm text-muted-foreground font-medium">
						{PROFILE_COPY.purposeBadge}
					</span>
				</div>

				<h3 class="text-2xl font-medium text-foreground mb-4">
					<BlurText
						text={PROFILE_COPY.purposeHeading}
						animateBy="words"
						direction="top"
						class="font-medium tracking-tight text-foreground text-2xl" />
				</h3>
				<p class="text-sm text-muted-foreground leading-relaxed font-normal">
					{PROFILE_COPY.purposeBody}
				</p>
			</div>
		</div>
	</div>

	<!-- Bookmarks & Aesthetic Card -->
	<div class="signature-padding border-grid-b relative bg-background">
		<div class="flex items-center justify-between text-sm mb-4">
			<span class="text-sm text-muted-foreground font-medium">
				{PROFILE_COPY.inspirationBadge}
			</span>
		</div>

		<h3 class="text-2xl font-medium text-foreground mb-4">
			<BlurText
				text={PROFILE_COPY.inspirationHeading}
				animateBy="words"
				direction="top"
				class="font-medium tracking-tight text-foreground text-2xl" />
		</h3>
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
