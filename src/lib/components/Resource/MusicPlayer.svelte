<script>
	import { onMount } from 'svelte';
	import { musicList } from '$components/Resource/musiclist.js';
	import PlayFill from '~icons/ph/play-fill';
	import Download from '~icons/ph/download';
	import SkipBack from '~icons/ph/skip-back';
	import SkipForward from '~icons/ph/skip-forward';
	import Pause from '~icons/ph/pause-fill';
	import SpeakerHigh from '~icons/ph/speaker-high';
	import SpeakerX from '~icons/ph/speaker-x';

	let currentSongIndex = 0;
	let playing = false;
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
		playing = true;
		audioEle.play();
	}

	function pauseMusic() {
		playing = false;
		audioEle.pause();
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;
		return `${minutes}:${seconds}`;
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
		audioEle.pause();
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

<audio
	bind:muted
	bind:currentTime
	bind:duration
	bind:volume
	autoplay="false"
	onended={next}
	src={'/ringtones/' + $musicList[currentSongIndex].audio}
	bind:this={audioEle} />
<div class="player">
	<div class="current">
		<div class="info">
			<div class="info__name xxl-text">{$musicList[currentSongIndex].name}</div>

			<div class="info__time">
				<div class="info__current xl-text">{format(currentTime)}</div>
				<div class="info__duration xl-text">{format(duration)}</div>
			</div>
		</div>
	</div>

	<div class="seekBar">
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
	<div class="controls">
		<button type="button" class="mp-btn other-btn" on:click={prev}>
			<SkipBack width="24" height="24" color="var(--colorTextSecondary)" />
		</button>

		{#if playing}
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

	<div class="song-list">
		{#each $musicList as music, i}
			<div
				class={i == currentSongIndex ? 'cs song-active' : 'cs song'}
				on:click={() => setSong(i)}
				on:keydown={() => setSong(i)}>
				<div class="song-name small-text">{music.name}</div>
				<a
					class="download"
					href={'/ringtones/' + $musicList[i].audio}
					download={$musicList[i].audio}>
					<Download width="16" height="16" color="var(--colorWhite)" />
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.mute__btn {
		all: unset;
		cursor: pointer;
	}

	.seekBar {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		padding: var(--spaceSmall) var(--spaceL);
		gap: var(--spaceSmall);
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
		gap: var(--spaceSmall);
	}

	.info__current {
		font-weight: var(--fontWeightXS);
		color: var(--colorPrimary);
	}

	.info__name {
		font-weight: var(--fontWeightLarge);
	}

	.info__duration {
		font-weight: var(--fontWeightXS);
		color: var(--colorWhite);
	}

	.download {
		background-color: var(--colorBlack);
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		z-index: 2;

		margin-left: auto;
	}

	.download:hover {
		filter: brightness(1.3);
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--spaceSmall);
		width: fit-content;
		align-items: center;
		justify-content: center;
		padding: var(--spaceL);
		color: var(--colorWhite);
	}

	.info__time {
		display: flex;
		flex-direction: row;
		gap: var(--spaceSmall);
		color: var(--colorWhite);
	}

	.current {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;

		background: url(/images/retro.gif);

		background-repeat: repeat;
	}

	/* MUSIC PLAYER BUTTONS */

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--spaceM);
		gap: var(--spaceSmall);

		width: 100%;
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
		border-radius: var(--border-radius);
		overflow: hidden;
	}

	.song-list {
		display: flex;
		flex-direction: column;
		background-color: transparent;
		width: 100%;
	}

	.song-active {
		padding: var(--spaceSmall) var(--spaceL);

		position: relative;
		background: var(--colorPrimary);
		color: var(--colorBlack);
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
	}

	.song:hover {
		background-color: var(--colorBgElevated);
		cursor: pointer;
	}
</style>
