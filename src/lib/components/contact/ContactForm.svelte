<script>
	import PrimaryButton from '$components/button/PrimaryButton.svelte';
	import SecondaryButton from '$components/button/SecondaryButton.svelte';
	import TextArea from '$components/input/TextArea.svelte';
	import TextInput from '$components/input/TextInput.svelte';
	import {
		ArrowCounterClockwise,
		At,
		EnvelopeSimple,
		PaperPlaneRight,
		User
	} from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import ContactInfo from './ContactInfo.svelte';
</script>



<section class="w-full relative border-grid-b">
	<SectionTitle
		sectionDesc="Whether you have a specific project in mind, need advice on website design, or just want to say hello, feel free to send a message below or email me directly at wentallout@gmail.com. I'd love to hear from you!"
		sectionTitle="Get in touch">
		{#snippet children({ sectionIcon })}
			<EnvelopeSimple {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="grid grid-cols-1 md:grid-cols-12 gap-0 relative items-stretch">
		<!-- Form Side -->
		<div class="md:col-span-7 relative bg-background signature-padding flex flex-col justify-between h-full">

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
						<PaperPlaneRight color="#000000" height="16" width="16" />
					</PrimaryButton>

					<SecondaryButton hapticPattern="nudge" label="Reset" type="reset">
						<ArrowCounterClockwise color="#ffffff" height="16" width="16" />
					</SecondaryButton>
				</div>
			</form>
		</div>

		<!-- Info Side (Gapless Blueprint Matrix Column) -->
		<div class="md:col-span-5 relative bg-background flex flex-col h-full">
			<ContactInfo />
		</div>
	</div>
</section>





