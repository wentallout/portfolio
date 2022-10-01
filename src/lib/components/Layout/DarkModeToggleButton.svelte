<script>
	function toggle() {
		window.document.querySelector('.main-content').classList.toggle('dark-mode');
	}
</script>

<button class="darkModeToggleBtn" on:click={toggle}>
	<slot />
</button>

<style>
	.darkModeToggleBtn {
		background-color: #f76027;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		
	}
	:global(#main-content.dark-mode) button {
		background-color: #0084f6;
		color: white;
	}
</style>
