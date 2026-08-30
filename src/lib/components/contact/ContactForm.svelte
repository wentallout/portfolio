<script lang="ts">
	import PrimaryButton from '#lib/components/button/PrimaryButton.svelte';
	import SecondaryButton from '#lib/components/button/SecondaryButton.svelte';
	import TextArea from '#lib/components/input/TextArea.svelte';
	import TextInput from '#lib/components/input/TextInput.svelte';
	import { ArrowCounterClockwise, At, PaperPlaneRight, User } from '#lib/assets/icons/icons.js';
	import { SECTION_TITLES } from '#lib/constants/labels.js';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	import ContactInfo from './ContactInfo.svelte';
</script>

<section class="w-full relative border-grid-b">
	<SectionTitle sectionTitle={SECTION_TITLES.getInTouch} />

	<div class="grid grid-cols-1 md:grid-cols-2 gap-0 relative items-stretch">
		<!-- Form Side -->
		<div class="relative bg-background signature-padding flex flex-col justify-between h-full">
			<form name="contact" class="space-y-4 w-full" data-netlify="true" method="post">
				<input name="form-name" type="hidden" value="contact" />

				<TextInput name="name" label="Name" placeholder="John Doe" type="text">
					{#snippet icon()}
						<span>
							<User />
						</span>
					{/snippet}
				</TextInput>

				<TextInput name="email" label="Email" placeholder="username@gmail.com" type="email">
					{#snippet icon()}
						<span>
							<At />
						</span>
					{/snippet}
				</TextInput>

				<TextArea name="message" label="Message" />

				<div class="pt-2 flex flex-wrap items-center gap-3">
					<PrimaryButton hapticPattern="success" label="Send message">
						<PaperPlaneRight color="currentColor" height="16" width="16" />
					</PrimaryButton>

					<SecondaryButton hapticPattern="nudge" label="Reset" type="reset">
						<ArrowCounterClockwise color="currentColor" height="16" width="16" />
					</SecondaryButton>
				</div>
			</form>
		</div>

		<!-- Info Side (Gapless Blueprint Matrix Column) -->
		<div class="relative bg-background flex flex-col h-full">
			<ContactInfo />
		</div>
	</div>
</section>
