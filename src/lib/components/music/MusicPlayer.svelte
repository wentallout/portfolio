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
	import { slide } from 'svelte/transition';

	let currentSongIndex = 0;

	let duration;
	let currentTime;
	let volume = 0.4;

	let volumeEle;
	let seekBarEle;
	let muted;

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
	autoplay="false"
	crossorigin="anonymous"
	src={$musicList[currentSongIndex].audio}
	bind:muted
	bind:currentTime
	bind:duration
	bind:volume
	on:ended={next} />

<div class="player">
	<div class="player__current">
		<div class="info">
			{#if $isPlaying}
				<div transition:slide class="info__name text-xl">{$musicList[currentSongIndex].name}</div>
			{/if}

			<div class="info__time">
				<div class="info__current text-base">{formatMusicTime(currentTime)}</div>
				<input
					bind:this={seekBarEle}
					class="seekBar__control"
					list="marker"
					max="100"
					min="0"
					step="any"
					type="range"
					on:input={handleSeekBar}
					bind:value={seekBarValue} />
				<div class="info__duration text-base">{formatMusicTime(duration)}</div>
			</div>
		</div>

		<div class="player__btns">
			<div class="controls">
				<button class="mp-btn other-btn" type="button" on:click={prev}>
					<SkipBack color="var(--colorTextSecondary)" height="24" width="24" />
				</button>

				{#if $isPlaying}
					<button class="mp-btn play-btn" type="button" on:click={pauseMusic}>
						<Pause color="var(--colorBlack)" height="24" width="24" />
					</button>
				{:else}
					<button class="mp-btn play-btn" type="button" on:click={playMusic}>
						<PlayFill color="var(--colorBlack)" height="24" width="24" />
					</button>
				{/if}

				<button class="mp-btn other-btn" type="button" on:click={next}>
					<SkipForward color="var(--colorTextSecondary)" height="24" width="24" />
				</button>
			</div>

			<div class="volume">
				<button class="mute__btn" type="button" on:click={mute} on:keydown={mute}>
					{#if muted}
						<SpeakerX color="var(--colorTextQuaternary)" height="24" width="24" />
					{:else}
						<SpeakerHigh color="var(--colorText)" height="24" width="24" />
					{/if}
				</button>
				<input
					bind:this={volumeEle}
					id="volume-control"
					max="100"
					min="0"
					step="any"
					type="range"
					value={volume * 100}
					on:input={handleVolume} />
			</div>
		</div>
	</div>

	<div class="player__list">
		{#each $musicList as music, i}
			<button
				class={i == currentSongIndex ? 'cs song-active' : 'cs song'}
				type="button"
				on:click={() => setSong(i)}>
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
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		gap: var(--spaceS);
		margin-bottom: var(--spaceM);
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
		text-align: center;
	}

	.info {
		width: 100%;
	}

	.info__duration {
		font-weight: var(--fontWeightXS);
		color: var(--colorTextQuaternary);
	}

	.player__info {
		display: flex;
		flex-direction: column;
		gap: var(--spaceS);
		width: 100%;
		align-items: center;
		justify-content: center;
		color: var(--colorWhite);
	}

	.info__time {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--spaceS);
		color: var(--colorWhite);
		width: 100%;
		margin-bottom: var(--spaceM);
	}

	.player__current {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: var(--spaceM) var(--spaceS);
	}

	/* MUSIC PLAYER BUTTONS */

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
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

	.player__list {
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

		font-size: 3em;
		position: absolute;

		right: 0;
		opacity: 0.4;

		font-family: var(--fontFancy);
		-webkit-text-stroke: 1px var(--colorText);
		-webkit-text-fill-color: transparent;
		font-weight: 100;
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
</style>
