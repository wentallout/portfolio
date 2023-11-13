<div class="scrollbar" />

<style global>
	::-webkit-scrollbar {
		width: 16px;
		outline: 1px solid var(--colorTextQuaternary);
	}

	::-webkit-scrollbar-thumb {
		background: var(--colorPrimary);
		box-shadow:
			inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
			inset -2px -2px 2px rgba(0, 0, 0, 0.25);
	}

	::-webkit-scrollbar-thumb:hover {
		background: var(--colorPrimaryHover);
	}

	::-webkit-scrollbar-thumb:active {
		background: var(--colorPrimaryActive);
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}
</style>
