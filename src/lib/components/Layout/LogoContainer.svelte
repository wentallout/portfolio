<script>
	import { YinYang, Sun, Moon } from 'phosphor-svelte';

	let svgColor = 'var(--white)';

	function handleMouseOver(e) {
		svgColor = 'var(--primary)';
	}
	function handleMouseOut(e) {
		svgColor = 'var(--white)';
	}
	let isDarkMode = true;

	function handleDarkMode() {
		isDarkMode = !isDarkMode;
	}
</script>

<div class="logo-container">
	<div class="svg-container">
		<YinYang class="rotate" color="var(--black)" size="60" />
	</div>

	<div
		on:mouseover={handleMouseOver}
		on:mouseout={handleMouseOut}
		on:focus={handleMouseOver}
		on:blur={handleMouseOut}
		on:click={handleDarkMode}
		class="side-buttons"
	>
		<div class="darkmode-btn">
			{#if isDarkMode}
				<Moon size="32" color={svgColor} />
			{:else}
				<Sun size="32" color={svgColor} />
			{/if}
		</div>
	</div>
</div>

<style>
	.svg-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60%;
		height: 60%;
		background-color: transparent;
	}

	@media (min-width: 768px) {
		.svg-container {
			width: 100%;
			height: 100%;
		}
	}

	.logo-container {
		position: relative;
		max-width: 100vw;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
	}

	.side-buttons {
		position: absolute;
		right: 30px;
		margin-top: auto;
		margin-bottom: auto;
		padding: 4px;
		border: 1px solid var(--black);
	}

	.side-buttons:hover {
		background: var(--black);
		cursor: pointer;
	}

	.darkmode-btn {
		width: 32px;
		height: 32px;
		transition: all 0.3s;
	}
</style>
