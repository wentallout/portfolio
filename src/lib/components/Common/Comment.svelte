<script>
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="comment">
	<slot />
	<Utterances reponame="wentallout/portfolio" theme="gruvbox-dark" />
</div>

<style>
	.comment {
		margin-top: var(--space-3xl);
	}
</style>
