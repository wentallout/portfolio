<script>
	import Atropos from 'atropos/svelte';
	import TerminalWindow from '~icons/ph/terminal-window';

	import X from '~icons/ph/x';
	let introEle;

	function close() {
		introEle.remove();
	}
</script>

<section bind:this={introEle} class="intro-container">
	<Atropos rotateTouch="scroll-y" rotateXMax="2" rotateYMax="2">
		<div class="window-bar">
			<div class="bar__name small-text">
				<TerminalWindow width="24" height="24" color="var(--black)" /> cmd.exe
			</div>
			<div class="bar__button" on:click={close} on:keydown={close}>
				<X width="24" height="24" color="var(--black)" />
			</div>
		</div>
		<div class="intro">
			<div class="intro__block">
				<div class="name xxl-text">
					Khoa is a <span class="focus">UI/UX Designer</span>
				</div>
				<div class="mission small-text">
					Focused on creating useful and accessible products that have real value and improve
					people's lives.
				</div>
				<div class="other small-text">
					Former <span class="focus">backend developer</span>. Based in Ho Chi Minh City, Vietnam.
				</div>
				<div class="other small-text">Loves A.I and electronic music.</div>
			</div>
		</div>
	</Atropos>
</section>

<style>
	/* .intro-container {
	} */

	.bar__name {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 4px;
		color: var(--black);
	}

	.bar__button {
		border: 1px solid var(--black);
		height: 100%;
		aspect-ratio: 1/1;
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bar__button:hover {
		cursor: pointer;
		background-color: var(--error);
	}

	.window-bar {
		position: relative;
		border: 1px solid var(--primary-500);
		border-bottom: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-2xs);
		background-color: var(--primary-500);
		color: var(--bg-500);
	}

	.intro {
		border: 1px solid var(--primary-500);
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: var(--black);
		position: relative;
	}

	.intro__block {
		display: flex;
		padding: var(--space-s) var(--space-xl);
		flex-direction: column;
		position: relative;
	}

	.name {
		font-family: 'Fancy';
		margin-bottom: var(--space-l);
	}

	.focus {
		color: var(--primary-500);
	}

	.mission {
		color: var(--text-color-low);
		max-width: var(--text-width);
		margin-bottom: var(--space-s);
	}

	.other {
		opacity: 0;
		color: var(--text-color-low);
		max-width: var(--text-width);
		transition: var(--transition);
		margin-bottom: var(--space-s);
	}
	.intro:hover .other {
		opacity: 1;
	}
</style>
