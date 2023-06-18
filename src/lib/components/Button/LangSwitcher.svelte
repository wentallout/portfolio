<script>
	import FlagGb from '$lib/assets/images/flags/FlagGb.svelte';
	import FlagVn from '$lib/assets/images/flags/FlagVn.svelte';
	import { switchLanguage } from '@inlang/sdk-js';

	let isEn;
	let isVi;

	function handleSwitchLanguage(lang) {
		switchLanguage(lang);
		if (lang === 'en') {
			isEn = true;
			isVi = false;
		} else {
			isVi = true;
			isEn = false;
		}
	}
</script>

<div class="lang">
	<button
		class="lang__btn xs-text"
		class:active={isEn}
		type="button"
		on:click={() => handleSwitchLanguage('en')}>
		<FlagGb />
	</button>
	<button
		class="lang__btn xs-text"
		class:active={isVi}
		type="button"
		on:click={() => handleSwitchLanguage('vi')}>
		<FlagVn />
	</button>
</div>

<style>
	.lang {
		display: flex;
		flex-direction: row;

		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 99;

		border-top: 1px solid var(--colorBorder);
		border-left: 1px solid var(--colorBorder);
	}

	.lang__btn {
		background-color: transparent;
		color: var(--colorText);
		border: 0;
		cursor: pointer;
		padding: var(--space2XS) var(--space2XS);
		border-right: 1px solid var(--colorBorder);
		border-bottom: 1px solid var(--colorBorder);

		opacity: 0.5;
	}

	.lang__btn:hover {
		background-color: var(--colorBgElevated);
	}

	.active {
		opacity: 1;
	}
</style>
