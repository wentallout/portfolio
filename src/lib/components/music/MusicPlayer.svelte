<script>
	import { onMount } from 'svelte';
	import { musicList, isPlaying, audioPlayerEl, formatMusicTime } from '$lib/stores/musicStore.js';

	import PlayFill from '~icons/ph/play-fill';
	import Download from '~icons/ph/download';
	import SkipBack from '~icons/ph/skip-back';
	import SkipForward from '~icons/ph/skip-forward';
	import Pause from '~icons/ph/pause-fill';
	import SpeakerHigh from '~icons/ph/speaker-high';
	import SpeakerX from '~icons/ph/speaker-x';

	import MusicVisualizer from '$components/music/MusicVisualizer.svelte';

	let currentSongIndex = 0;

	let duration;
	let currentTime;
	let volume = 0.4;

	let volumeEle;
	let seekBarEle;
	let muted;

	function mute() {
		muted = !muted;
	}

	function playMusic() {
		$isPlaying = true;
		$audioPlayerEl.play();
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

	let seekBarValue;
	$: seekBarValue = (currentTime / duration) * 100 || 0;
</script>

<MusicVisualizer />

<audio
	bind:this={$audioPlayerEl}
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
				<a class="download" href={$musicList[i].audio} download={$musicList[i].audio}>
					<Download width="16" height="16" color="currentColor" />
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

	.seekBar {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		padding: 0 var(--spaceL);
		gap: var(--spaceS);
		box-shadow: var(--boxShadow);
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
		max-height: 70vh;
		overflow-y: scroll;
	}

	.song-active {
		padding: var(--space2XS) var(--spaceL);

		position: relative;
		background: var(--colorPrimary);
		color: var(--colorBlack);
	}

	.song-active::before {
		content: 'Playing';
		z-index: 0;
		font-weight: 600;
		font-size: 3em;
		position: absolute;
		top: 50%;
		right: 0;
		opacity: 0.4;
		transform: translate(-50%, -50%);
		font-family: var(--fontFancy);
		-webkit-text-stroke: 1px var(--colorText);
		-webkit-text-fill-color: transparent;
	}

	.song-name {
		z-index: 1;
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
