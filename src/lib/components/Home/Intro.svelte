<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Atropos from 'atropos/svelte';
	import TerminalWindow from '~icons/ph/terminal-window';

	import X from '~icons/ph/x';
	let introEle;

	function close() {
		introEle.remove();
	}
</script>

<section bind:this={introEle} class="intro-container">
	<Atropos rotateTouch="scroll-y" rotateXMax="2" rotateYMax="2" activeOffset="10" highlight="false">
		<div class="window-bar">
			<div class="bar__name small-text">
				<TerminalWindow width="24" height="24" color="var(--text-color)" />NguyenDangKhoa.exe
			</div>
			<div class="bar__button" on:click={close} on:keydown={close}>
				<X width="24" height="24" color="var(--text-color)" />
			</div>
		</div>
		<div class="intro">
			<div class="intro__block">
				<div data-atropos-offset="2" class="name xxl-text">
					Khoa is a <span class="focus">UI/UX Designer</span>
				</div>
				<div data-atropos-offset="1" class="mission small-text">
					I create practical and user-friendly products that bring real value and enhance people's
					lives.
				</div>

				<a class="intro__btn" href="/project">
					<Button
						width="100%"
						label="View case studies"
						labelColor="var(--bg-500)"
						backgroundColor="var(--primary-500)" />
				</a>
			</div>
		</div>
	</Atropos>
</section>

<style>
	.intro__btn {
		margin-top: var(--space-l);
		display: flex;
		width: 100%;
	}

	.intro-container {
		user-select: none;
	}

	.bar__name {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 12px;
		color: var(--text-color);
	}

	.bar__button {
		/* SIZE */
		height: 100%;
		aspect-ratio: 1/1;
		/* --- */

		/* POSITION */
		position: absolute;
		top: 0;
		right: 0;
		/* --- */

		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/* --- */
	}

	.bar__button:hover {
		cursor: pointer;
		background-color: var(--error);
	}

	.window-bar {
		position: relative;

		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-2xs);
		background-color: var(--bg-300);

		border-top-left-radius: var(--border-radius-light);
		border-top-right-radius: var(--border-radius-light);
		overflow: hidden;
	}

	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--bg-400);
		position: relative;

		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}

	.intro__block {
		display: flex;
		padding: var(--space-m) var(--space-xl);
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
</style>
