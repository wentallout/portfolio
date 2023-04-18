<script>
	import { Utterances } from '@codewithshin/svelte-utterances';
	let reponame = 'portfolio';
	let issueTerm = 'pathname';
	let label = 'comments';
	let theme = 'github-dark';
</script>

<div class="comment">
	<Utterances {reponame} {issueTerm} {label} {theme} />
</div>

<style>
	.comment {
		display: block;
	}
</style>
