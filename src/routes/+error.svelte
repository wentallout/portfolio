<script>
	import { page } from '$app/stores';
</script>

<h1 class="large-text status">{$page.status}</h1>
<h2 class="error-info mix-text">Oops! This is awkward...</h2>
<p>{$page.error.message}</p>

<a class="btn btn-back" href="/">Go back</a>

<style>
	.status {
		color: var(--error);
	}

	.btn-back {
		background-color: var(--primary-500);
		color: var(--neutral-900);
	}

	.btn-back:hover {
		background-color: var(--primary-600);
	}
</style>
