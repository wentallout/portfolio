<script>
	import EnvelopeSimple from '~icons/ph/envelope-simple';
	import Button from '$lib/components/Button/Button.svelte';
	import PaperPlaneRight from '~icons/ph/paper-plane-right';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionTitle="Contact me" let:sectionIcon>
		<EnvelopeSimple {...sectionIcon} />
	</SectionTitle>

	<div class="form-container">
		<form
			name="contact"
			method="post"
			netlify-honeypot="bot-field"
			data-netlify="true"
			class="contact"
		>
			<input type="hidden" name="form-name" value="contact" />

			<label for="name" class="label base-text">Name</label>
			<input class="small-text" type="text" name="name" id="name" required />

			<label for="email" class="label base-text">Email</label>
			<input
				placeholder="username@email.com"
				class="small-text"
				type="email"
				name="email"
				id="email"
				required
			/>

			<label for="message" class="label base-text">Message</label>
			<textarea class="small-text" required name="message" id="message" placeholder="" />

			<div class="btn-container">
				<Button label="Send" backgroundColor="var(--primary-500)">
					<PaperPlaneRight color="var(--neutral-900)" />
				</Button>

				<!-- <button class="btn btn-reset" type="reset">Reset</button> -->
				<Button
					label="Reset"
					backgroundColor="transparent"
					labelColor="var(--error)"
					type="reset"
				/>
			</div>
		</form>
	</div>
</section>

<style>
	.form-container {
		display: flex;
		justify-content: left;
		width: 100%;
		margin-bottom: var(--space-m);
	}

	.contact {
		border-radius: var(--border-radius);
		border: var(--border);
		box-shadow: var(--box-shadow);
		padding: var(--space-m);

		width: 100%;
		max-width: 80rem;
		display: flex;
		flex-direction: column;
	}

	.btn-container {
		display: flex;
		flex-direction: row;
		gap: var(--space-xs);
	}
</style>
