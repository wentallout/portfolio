<script>
	import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="container">
	<slot />
	<Utterances reponame="wentallout/portfolio" theme="gruvbox-dark" />
</div>
