<script>
	import MusicVisualizer from '$components/music/MusicVisualizer.svelte';
	import {
		Download,
		Pause,
		PlayFill,
		SkipBack,
		SkipForward,
		SpeakerHigh,
		SpeakerX
	} from '$lib/assets/icons/icons';
	import { audioPlayerEl, formatMusicTime, isPlaying, musicList } from '$lib/stores/musicStore.js';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let currentSongIndex = $state(0);
	let duration = $state();
	let currentTime = $state();
	let volume = $state(0.4);
	let volumeEle = $state();
	let seekBarEle = $state();
	let muted = $state();

	function mute() {
		muted = !muted;

		if (muted === true) {
			volume = 0;
		} else {
			volume = 0.4;
		}
	}

	function playMusic() {
		$isPlaying = true;
		let playPromise = $audioPlayerEl.play();

		if (playPromise !== undefined) {
			playPromise
				.then((_) => {
					// Automatic playback started!
					// Show playing UI.
					// We can now safely pause video...
					video.pause();
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	function pauseMusic() {
		$isPlaying = false;
		$audioPlayerEl.pause();
	}

	function prev() {
		if (currentSongIndex == 0) {
			currentSongIndex = $musicList.length - 1;
		} else {
			currentSongIndex = (currentSongIndex - 1) % $musicList.length;
		}
		playMusic();
	}
	function next() {
		currentSongIndex = (currentSongIndex + 1) % $musicList.length;
		playMusic();
	}

	function setSong(i) {
		currentSongIndex = i;
		playMusic();
	}

	onMount(() => {
		$audioPlayerEl.pause();
	});

	function handleSeekBar() {
		currentTime = duration * (seekBarEle.value / 100);
	}

	function handleVolume() {
		volume = volumeEle.value / 100;
	}

	let seekBarValue = $state();

	$effect(() => {
		seekBarValue = (currentTime / duration) * 100;
	});
</script>

<MusicVisualizer />

<audio
	bind:this={$audioPlayerEl}
	autoplay="false"
	crossorigin="anonymous"
	onended={next}
	src={$musicList[currentSongIndex].audio}
	bind:muted
	bind:currentTime
	bind:duration
	bind:volume></audio>

<div class="player">
	<div class="player__current">
		<div class="info">
			{#if $isPlaying}
				<div class="info__name text-xl" transition:slide>{$musicList[currentSongIndex].name}</div>
			{/if}

			<div class="info__time">
				<div class="info__current text-base">{formatMusicTime(currentTime)}</div>
				<input
					bind:this={seekBarEle}
					class="seekBar__control"
					list="marker"
					max="100"
					min="0"
					oninput={handleSeekBar}
					step="any"
					type="range"
					value={seekBarValue} />
				<div class="info__duration text-base">{formatMusicTime(duration)}</div>
			</div>
		</div>

		<div class="player__btns">
			<div class="controls">
				<button class="mp-btn other-btn" onclick={prev} type="button">
					<SkipBack color="var(--color-text-quaternary)" height="24" width="24" />
				</button>

				{#if $isPlaying}
					<button class="mp-btn play-btn" onclick={pauseMusic} type="button">
						<Pause color="var(--color-black)" height="24" width="24" />
					</button>
				{:else}
					<button class="mp-btn play-btn" onclick={playMusic} type="button">
						<PlayFill color="var(--color-black)" height="24" width="24" />
					</button>
				{/if}

				<button class="mp-btn other-btn" onclick={next} type="button">
					<SkipForward color="var(--color-text-quaternary)" height="24" width="24" />
				</button>
			</div>

			<div class="player__volume">
				<button class="mute__btn" onclick={mute} onkeydown={mute} type="button">
					{#if muted}
						<SpeakerX color="var(--color-text-quaternary)" height="24" width="24" />
					{:else}
						<SpeakerHigh color="var(--color-text)" height="24" width="24" />
					{/if}
				</button>
				<input
					bind:this={volumeEle}
					id="volume-control"
					max="100"
					min="0"
					oninput={handleVolume}
					step="any"
					type="range"
					value={volume * 100} />
			</div>
		</div>
	</div>

	<div class="player__list">
		{#each $musicList as music, i}
			<button
				class={i == currentSongIndex ? 'cs song-active' : 'cs song'}
				onclick={() => setSong(i)}
				type="button">
				<div class="song-name text-small">{music.name}</div>
				<a class="download" download={$musicList[i].audio} href={$musicList[i].audio}>
					<Download color="currentColor" height="16" width="16" />
				</a>
			</button>
		{/each}
	</div>
</div>

<style lang="postcss">
	.mute__btn {
		all: unset;
		cursor: pointer;
	}

	.player__btns {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-small);
		margin-bottom: var(--space-mid);
		width: 100%;
	}

	@media (min-width: 768px) {
		.player__btns {
			grid-template-columns: 1fr auto;
		}
	}

	.seekBar__control {
		display: flex;
		flex-grow: 1;
		transition: 0.3s;
		height: 3rem;
		background: transparent;
	}

	.player__volume {
		display: flex;
		align-items: center;
		gap: var(--space-small);
	}

	.info__current {
		font-weight: var(--fontWeightXS);
		color: var(--color-primary);
	}

	.info__name {
		color: var(--color-text);
		font-weight: var(--fontWeightLarge);
		text-align: center;
	}

	.info {
		width: 100%;
	}

	.info__duration {
		font-weight: var(--fontWeightXS);
		color: var(--color-text-quaternary);
	}

	.info__time {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-small);
		color: var(--color-white);
		width: 100%;
		margin-bottom: var(--space-mid);
	}

	.player__current {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: var(--space-mid) var(--space-small);
	}

	/* MUSIC PLAYER BUTTONS */

	.controls {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-radius: var(--border-radius-light);
		overflow: hidden;
		border: 1px solid var(--color-border);
	}

	.mp-btn {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: var(--space-xs);
		flex-direction: row;
		background-color: var(--color-bg-container);
		border: 0;
		transition: var(--transition);
	}

	.mp-btn:hover {
		cursor: pointer;
		filter: brightness(1.3);
	}

	.play-btn {
		background-color: var(--color-primary);
	}

	.player {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: var(--color-bg-container);

		overflow: hidden;
	}

	.player__list {
		display: flex;
		flex-direction: column;
		background-color: transparent;
		width: 100%;
		max-height: 70vh;
		overflow-y: scroll;
	}

	.song-active {
		position: relative;
		background: var(--color-primary);
		color: var(--color-black);
	}

	.song-active::before {
		content: 'Playing';
		z-index: 0;

		font-size: 3em;
		position: absolute;

		right: 0;
		opacity: 0.4;

		font-family: var(--font-fancy);
		-webkit-text-stroke: 1px var(--color-text);
		-webkit-text-fill-color: transparent;
		font-weight: 100;
	}

	.song-name {
		z-index: 1;
		font-weight: var(--fontWeightXS);
		color: var(--color-text);
	}

	.song-active .song-name {
		font-weight: var(--fontWeightLarge);
		color: var(--color-black);
	}

	.cs {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		padding: var(--space-xs) var(--space-small);
	}

	.song {
		transition: var(--transition);

		&:hover {
			background-color: var(--color-bg-elevated);
			cursor: pointer;
		}
	}

	.download {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		z-index: 2;
		margin-left: auto;
		transition: var(--transition);
		outline: 1px solid var(--color-text-quaternary);

		&:hover {
			scale: 1.2;
		}
	}
</style>
