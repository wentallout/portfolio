<div class="container">
	<form netlify class="contact" action="https://formsubmit.co/wentallout@gmail.com" method="POST">
		<!-- hidden -->
		<input type="hidden" name="_captcha" value="false" />
		<input type="hidden" name="_subject" value="New email from Khoa's website" />
		<!-- start here -->

		<div class="label">Name</div>
		<input class="contact__input" type="text" name="name" required />
		<div class="label">Email</div>
		<input
			placeholder="username@email.com"
			class="contact__input"
			type="email"
			name="email"
			required
		/>
		<div class="label">Message</div>
		<textarea class="contact__message" required name="message" placeholder="" />

		<div class="btn-container">
			<button class="btn btn-send" type="submit">Send</button>
			<button class="btn btn-reset" type="reset">Reset</button>
		</div>
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: left;
		width: 100%;
	}

	.contact {
		box-shadow: var(--box-shadow);
		width: 100%;
		max-width: 70rem;
		display: flex;
		flex-direction: column;

		padding: 2rem;
	}

	.contact__input {
		border: 1px solid var(--gray);
		margin-bottom: 1rem;
	}

	.contact__message {
		margin-bottom: 1rem;
		border: 1px solid var(--gray);
	}

	/* FOCUS */
	.contact__input:focus,
	.contact__message:focus {
		border: 2px solid var(--black);
	}

	/*  */

	.btn-send {
		border: 0;
		background-color: var(--primary);
		margin-right: 1rem;
	}

	.btn-send:hover {
		/* background-color: hsl(38, 50%, 47%); */
		background-color: hsl(38, 50%, 37%);
	}

	.btn-reset {
		border: 1px solid var(--error);
		color: var(--error);
		background-color: transparent;
	}

	.btn-reset:hover {
		background-color: var(--error);
		color: var(--white);
	}

	.btn-container {
		display: flex;
		flex-direction: row;
		margin-top: 2rem;
	}
</style>
