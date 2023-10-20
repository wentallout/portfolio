<script>
	import { formatMusicTime } from './musicUtils.js';
	import { onMount } from 'svelte';
	import { musicList, isPlaying } from '$lib/components/Resource/MusicPlayer/musicStores.js';
	import PlayFill from '~icons/ph/play-fill';
	import Download from '~icons/ph/download';
	import SkipBack from '~icons/ph/skip-back';
	import SkipForward from '~icons/ph/skip-forward';
	import Pause from '~icons/ph/pause-fill';
	import SpeakerHigh from '~icons/ph/speaker-high';
	import SpeakerX from '~icons/ph/speaker-x';
	import AudioMotionAnalyzer from 'audiomotion-analyzer';

	import MusicVisualizer from './MusicVisualizer.svelte';

	let visualizerEl;
	let currentSongIndex = 0;

	let duration;
	let currentTime;
	let volume = 0.4;
	let audioEle;
	let volumeEle;
	let seekBarEle;
	let muted;

	function mute() {
		muted = !muted;
	}

	function playMusic() {
		$isPlaying = true;
		audioEle.play();
	}

	function pauseMusic() {
		$isPlaying = false;
		audioEle.pause();
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

	let energy;
	let energyHeight;

	onMount(() => {
		audioEle.pause();

		function drawCallback(analyzer) {
			energy = analyzer.getEnergy();
		}

		let analyzer = new AudioMotionAnalyzer(visualizerEl, {
			source: audioEle,
			height: 300,
			mode: 4,
			barSpace: 0,
			ledBars: true,
			colorMode: 'gradient',
			showBgColor: false,
			overlay: true,
			roundBars: true,
			mirror: 1,
			gradient: 'rainbow',
			showPeaks: false,
			showScaleX: false,
			onCanvasDraw: drawCallback
		});
	});

	function handleSeekBar() {
		currentTime = duration * (seekBarEle.value / 100);
	}

	function handleVolume() {
		volume = volumeEle.value / 100;
	}

	let seekBarValue;
	$: seekBarValue = (currentTime / duration) * 100 || 0;
	$: energyHeight = 120 + energy * 150;
	$: audioEle;
</script>

<!-- <MusicVisualizer audioEleProp={audioEle} /> -->

<div class="visualizer" bind:this={visualizerEl}>
	<img
		style="--energyHeight:{energyHeight}px;"
		class="visualizer__logo"
		src="/images/coolLogo.svg"
		alt="music visualizer logo" />
</div>

<audio
	bind:this={audioEle}
	crossorigin="anonymous"
	bind:muted
	bind:currentTime
	bind:duration
	bind:volume
	autoplay="false"
	on:ended={next}
	src={$musicList[currentSongIndex].audio} />
<div class="player">
	<div class="current">
		<div class="info">
			<div class="info__name text-2xl">{$musicList[currentSongIndex].name}</div>

			<div class="info__time">
				<div class="info__current text-xl">{formatMusicTime(currentTime)}</div>
				<div class="info__duration text-xl">{formatMusicTime(duration)}</div>
			</div>
		</div>
	</div>

	<div class="seekBar">
		<div class="controls">
			<button type="button" class="mp-btn other-btn" on:click={prev}>
				<SkipBack width="24" height="24" color="var(--colorTextSecondary)" />
			</button>

			{#if $isPlaying}
				<button type="button" class="mp-btn play-btn" on:click={pauseMusic}>
					<Pause width="24" height="24" color="var(--colorBlack)" />
				</button>
			{:else}
				<button type="button" class="mp-btn play-btn" on:click={playMusic}>
					<PlayFill width="24" height="24" color="var(--colorBlack)" />
				</button>
			{/if}

			<button type="button" class="mp-btn other-btn" on:click={next}>
				<SkipForward width="24" height="24" color="var(--colorTextSecondary)" />
			</button>
		</div>
		<input
			bind:this={seekBarEle}
			on:input={handleSeekBar}
			class="seekBar__control"
			type="range"
			min="0"
			max="100"
			step="any"
			list="marker"
			bind:value={seekBarValue} />

		<div class="volume">
			<button type="button" class="mute__btn" on:click={mute} on:keydown={mute}>
				{#if muted}
					<SpeakerX width="24" height="24" color="var(--colorTextSecondary)" />
				{:else}
					<SpeakerHigh width="24" height="24" color="var(--colorText)" />
				{/if}
			</button>
			<input
				bind:this={volumeEle}
				on:input={handleVolume}
				type="range"
				id="volume-control"
				min="0"
				max="100"
				step="any"
				value={volume * 100} />
		</div>
	</div>

	<div class="song-list">
		{#each $musicList as music, i}
			<button
				type="button"
				class={i == currentSongIndex ? 'cs song-active' : 'cs song'}
				on:click={() => setSong(i)}>
				<div class="song-name text-small">{music.name}</div>
				<a
					class="download"
					href={'/ringtones/' + $musicList[i].audio}
					download={$musicList[i].audio}>
					<Download width="16" height="16" color="currentColor" />
				</a>
			</button>
		{/each}
	</div>
</div>

<style lang="postcss">
	.visualizer__logo {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		height: var(--energyHeight);
		--shadow: calc(var(--energyHeight) - 100px);
		filter: drop-shadow(0 0 var(--shadow) var(--colorPrimaryHover));
		z-index: -1;
	}

	.visualizer {
		position: relative;
		height: 300px;
		background: url(/images/dancing.webp);
		background-size: contain;
		background-position-x: center;
		background-repeat: no-repeat;
	}

	.mute__btn {
		all: unset;
		cursor: pointer;
	}

	.seekBar {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		padding: var(--spaceS) var(--spaceL);
		gap: var(--spaceS);
	}

	.seekBar__control {
		display: flex;
		flex-grow: 1;
		transition: 0.3s;
		height: 3rem;
		background: transparent;
	}

	.volume {
		display: flex;
		align-items: center;
		gap: var(--spaceS);
	}

	.info__current {
		font-weight: var(--fontWeightXS);
		color: var(--colorPrimary);
	}

	.info__name {
		color: var(--colorText);
		font-weight: var(--fontWeightLarge);
	}

	.info__duration {
		font-weight: var(--fontWeightXS);
		color: var(--colorTextQuaternary);
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
		outline: 1px solid var(--colorTextQuaternary);

		&:hover {
			scale: 1.2;
		}
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--spaceS);
		width: fit-content;
		align-items: center;
		justify-content: center;
		padding: var(--spaceM);
		color: var(--colorWhite);
	}

	.info__time {
		display: flex;
		flex-direction: row;
		gap: var(--spaceS);
		color: var(--colorWhite);
	}

	.current {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	/* MUSIC PLAYER BUTTONS */

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spaceS) 0;
		gap: var(--spaceXS);
	}

	.mp-btn {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: var(--spaceXS);
		flex-direction: row;
		background-color: var(--colorBgContainer);
		border: 0;
		transition: var(--transition);
		border-radius: 100%;
	}

	.mp-btn:hover {
		cursor: pointer;
		filter: brightness(1.3);
	}

	.play-btn {
		background-color: var(--colorPrimary);
	}

	.other-btn {
		scale: 0.8;
		background-color: var(--colorBgElevated);
	}

	.player {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: var(--colorBgContainer);

		overflow: hidden;
	}

	.song-list {
		display: flex;
		flex-direction: column;
		background-color: transparent;
		width: 100%;
	}

	.song-active {
		padding: var(--space2XS) var(--spaceL);

		position: relative;
		background: var(--colorPrimary);
		color: var(--colorBlack);
	}

	.song-active::before {
		content: '🎵';
		color: var(--colorTextSecondary);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.song-name {
		font-weight: var(--fontWeightXS);
		color: var(--colorText);
	}

	.song-active .song-name {
		font-weight: var(--fontWeightLarge);
		color: var(--colorBlack);
	}

	.cs {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
	}

	.song {
		padding: var(--spaceXS) var(--spaceL);
		transition: var(--transition);

		&:hover {
			background-color: var(--colorBgElevated);
			cursor: pointer;
		}
	}
</style>
