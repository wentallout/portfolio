<script>
	import Button from '$components/button/Button.svelte';
	import CopyToClipboard from '$components/common/CopyToClipboard.svelte';
	import ExLink from '$components/common/ExLink.svelte';
	import TextArea from '$components/input/TextArea.svelte';
	import TextInput from '$components/input/TextInput.svelte';
	import {
		ArrowCounterClockwise,
		At,
		Clock,
		EnvelopeSimple,
		PaperPlaneRight,
		Phone,
		User
	} from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
	import { slide } from 'svelte/transition';

	import ContactInfo from './ContactInfo.svelte';
</script>

<section>
	<SectionTitle
		sectionDesc="If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly at wentallout@gmail.com"
		sectionTitle="Get in touch">
		{#snippet children({ sectionIcon })}
			<EnvelopeSimple {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="form-container">
		<form name="contact" class="contact" data-netlify="true" method="post">
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

			<div class="contact__btn">
				<Button
					backgroundColor="var(--color-primary)"
					glowColor="var(--color-primary)"
					label="Send message"
					type="submit">
					<PaperPlaneRight color="var(--color-black)" height="16" width="16" />
				</Button>

				<Button
					backgroundColor="var(--color-bg-layout)"
					borderColor="var(--color-error)"
					glowColor="var(--color-error)"
					label="Reset"
					labelColor="var(--color-error)"
					shadowColor="var(--color-error)"
					type="reset">
					<ArrowCounterClockwise color="var(--color-error)" height="16" width="16" />
				</Button>
			</div>
		</form>

		<ContactInfo />
	</div>
</section>

<style>
	.form-container {
		display: grid;
		gap: var(--space-xl);
		align-items: start;
		grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
		.form-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	.contact {
		width: 100%;
		display: flex;
		flex-direction: column;
		max-width: var(--text-width);
	}

	.contact__btn {
		margin-top: var(--space-mid);
		width: 100%;

		display: flex;
		flex-wrap: wrap;
		gap: var(--space-small);
	}
</style>
