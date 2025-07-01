<script>
	import { browser } from '$app/environment';
	import PrimaryButton from '$components/button/PrimaryButton.svelte';
	import SecondaryButton from '$components/button/SecondaryButton.svelte';
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
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import ContactInfo from './ContactInfo.svelte';

	// Security state
	let csrfToken = '';
	let isSubmitting = false;
	let submitMessage = '';
	let submitError = '';

	// Form validation
	let formErrors = {
		email: '',
		message: '',
		name: ''
	};

	// Get CSRF token on mount
	onMount(async () => {
		if (browser) {
			try {
				const response = await fetch('/contact', {
					headers: {
						Accept: 'application/json'
					},
					method: 'GET'
				});

				if (response.ok) {
					const data = await response.json();
					csrfToken = data.csrfToken;
				}
			} catch (error) {
				console.warn('Failed to get CSRF token:', error);
			}
		}
	});

	// Form validation functions
	function validateName(name) {
		if (!name || name.trim().length < 2) {
			return 'Name must be at least 2 characters long';
		}
		if (name.length > 100) {
			return 'Name must be less than 100 characters';
		}
		return '';
	}

	function validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !emailRegex.test(email)) {
			return 'Please enter a valid email address';
		}
		if (email.length > 254) {
			return 'Email address is too long';
		}
		return '';
	}

	function validateMessage(message) {
		if (!message || message.trim().length < 10) {
			return 'Message must be at least 10 characters long';
		}
		if (message.length > 2000) {
			return 'Message must be less than 2000 characters';
		}
		// Check for suspicious content
		const suspiciousPatterns = [/<script/i, /javascript:/i, /vbscript:/i, /onload=/i, /onerror=/i];
		for (const pattern of suspiciousPatterns) {
			if (pattern.test(message)) {
				return 'Message contains invalid content';
			}
		}
		return '';
	}

	// Handle form submission
	async function handleSubmit(event) {
		event.preventDefault();

		if (isSubmitting) return;

		const formData = new FormData(event.target);
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		// Validate form
		formErrors = {
			email: validateEmail(email),
			message: validateMessage(message),
			name: validateName(name)
		};

		const hasErrors = Object.values(formErrors).some((error) => error !== '');
		if (hasErrors) {
			submitError = 'Please fix the errors above';
			return;
		}

		isSubmitting = true;
		submitError = '';
		submitMessage = '';

		try {
			// Add CSRF token to form data
			if (csrfToken) {
				formData.append('csrf_token', csrfToken);
			}

			const response = await fetch('/contact', {
				body: formData,
				headers: {
					'X-CSRF-Token': csrfToken
				},
				method: 'POST'
			});

			const result = await response.json();

			if (response.ok) {
				submitMessage = result.message || 'Thank you for your message!';
				event.target.reset();
			} else {
				submitError = result.error || 'Failed to send message. Please try again.';
			}
		} catch (error) {
			console.error('Form submission error:', error);
			submitError = 'Network error. Please check your connection and try again.';
		} finally {
			isSubmitting = false;
		}
	}
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
		<form name="contact" class="contact" data-netlify="true" method="post" on:submit={handleSubmit}>
			<input name="form-name" type="hidden" value="contact" />
			{#if csrfToken}
				<input name="csrf_token" type="hidden" value={csrfToken} />
			{/if}

			<TextInput
				name="name"
				error={formErrors.name}
				label="Name"
				placeholder="John Doe"
				required
				type="text">
				{#snippet icon()}
					<span>
						<User />
					</span>
				{/snippet}
			</TextInput>

			<TextInput
				name="email"
				error={formErrors.email}
				label="Email"
				placeholder="username@gmail.com"
				required
				type="email">
				{#snippet icon()}
					<span>
						<At />
					</span>
				{/snippet}
			</TextInput>

			<TextArea name="message" error={formErrors.message} label="Message" required />

			{#if submitMessage}
				<div class="success-message" transition:slide>
					{submitMessage}
				</div>
			{/if}

			{#if submitError}
				<div class="error-message" transition:slide>
					{submitError}
				</div>
			{/if}

			<div class="contact__btn">
				<PrimaryButton
					disabled={isSubmitting}
					label={isSubmitting ? 'Sending...' : 'Send message'}
					type="submit">
					<PaperPlaneRight color="var(--color-black)" height="16" width="16" />
				</PrimaryButton>

				<SecondaryButton disabled={isSubmitting} type="reset">
					<ArrowCounterClockwise color="var(--color-error)" height="16" width="16" />
				</SecondaryButton>
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
		gap: var(--space-s);
	}

	.success-message {
		padding: var(--space-s);
		background-color: var(--color-success, #10b981);
		color: white;
		border-radius: var(--border-radius);
		margin-top: var(--space-s);
	}

	.error-message {
		padding: var(--space-s);
		background-color: var(--color-error, #ef4444);
		color: white;
		border-radius: var(--border-radius);
		margin-top: var(--space-s);
	}
</style>
