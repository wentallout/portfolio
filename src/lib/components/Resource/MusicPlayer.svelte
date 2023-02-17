<script>
	import { onMount } from 'svelte';
	import { musicList } from '$lib/components/Resource/musiclist.js';
	import PlayFill from '~icons/ph/play-fill';
	import Download from '~icons/ph/download';
	import SkipBack from '~icons/ph/skip-back';
	import SkipForward from '~icons/ph/skip-forward';
	import Pause from '~icons/ph/pause';
	import SpeakerHigh from '~icons/ph/speaker-high';

	let currentSongIndex = 0;
	let playing = false;

	// audioEle
	let duration;
	let currentTime;
	let volume = 0.4;

	//
	let audioEle;
	let volumeEle;
	let positionEle;

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

		volumeEle.addEventListener('input', () => {
			volume = volumeEle.value / 100;
		});

		positionEle.addEventListener('input', () => {
			currentTime = duration * (positionEle.value / 100);
		});
	});
</script>

<div class="player">
	<audio
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

				<div class="song-time">
					<div class="current-time xl-text">{format(currentTime)}</div>
					<div class="duration xl-text">{format(duration)}</div>
				</div>
			</div>
			<div class="controls">
				<button class="mp-btn mp-btn-small" on:click={prev}>
					<SkipBack width="24" height="24" color="var(--text-color)" />
				</button>

				{#if playing}
					<button class="mp-btn" on:click={pauseMusic}>
						<Pause width="24" height="24" color="var(--text-color)" />
					</button>
				{:else}
					<button class="mp-btn play-btn" on:click={playMusic}>
						<PlayFill width="24" height="24" color="var(--black-500)" />
					</button>
				{/if}

				<button class="mp-btn mp-btn-small" on:click={next}>
					<SkipForward width="24" height="24" color="var(--text-color)" />
				</button>
			</div>
			<div class="volume">
				<SpeakerHigh width="24" height="24" color="var(--text-color)" />
				<input
					bind:this={volumeEle}
					type="range"
					id="volume-control"
					min="0"
					max="100"
					value={volume * 100} />
			</div>
		</div>

		<div class="position">
			<input
				bind:this={positionEle}
				class="position__input"
				type="range"
				value={(currentTime / duration) * 100 || 0} />
		</div>

		<div class="song-list">
			{#each $musicList as music, i}
				<div
					class={i == currentSongIndex ? 'song-active' : 'song'}
					on:click={() => setSong(i)}
					on:keydown={() => setSong(i)}>
					<div class="song-name small-text">{music.name}</div>
					<a
						class="download"
						href={'/ringtones/' + $musicList[i].audio}
						download={$musicList[i].audio}>
						<Download width="16" height="16" color="var(--text-color)" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.position {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding: var(--space-s);
	}

	.position__input {
		width: 100%;
		transition: 0.3s;
	}

	.volume {
		display: flex;

		align-items: center;
		gap: var(--space-s);
	}

	.current-time {
		font-weight: 300;
		color: var(--primary-500);
	}

	.info__name {
		font-weight: 600;
	}

	.duration {
		font-weight: 300;
		color: var(--neutral-900);
	}

	.controls {
		padding: var(--space-m);
	}

	.download {
		position: absolute;
		top: 50%;
		right: 0%;
		transform: translate(-50%, -50%);
		background-color: var(--black-500);
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		z-index: 2;
	}

	.download:hover {
		filter: brightness(1.3);
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: var(--space-l);
	}

	.song-time {
		display: flex;
		flex-direction: row;
		gap: var(--space-s);
	}

	.current {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-bottom: var(--space-xl);
	}

	.mp-btn-small {
		scale: 0.8;
	}

	.mp-btn {
		width: 80px;
		height: 80px;
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
		background-color: var(--black-100);
		border: 0;
		transition: var(--transition);
	}

	.mp-btn:hover {
		cursor: pointer;
		filter: brightness(1.3);
	}

	.play-btn {
		background-color: var(--primary-500);
	}

	.player {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: var(--black-400);
		border-radius: var(--border-radius-light);
		overflow: hidden;
	}

	.song-list {
		display: flex;
		flex-direction: column;
		background-color: var(--black-300);
		width: 100%;
	}

	.song-active {
		padding: var(--space-s) var(--space-l);

		position: relative;
		background: var(--primary-500);
	}

	.song-name {
		font-weight: 300;
		color: var(--text-color);
	}

	.song-active .song-name {
		font-weight: 600;
		color: var(--black-500);
	}

	.song {
		padding: var(--space-s) var(--space-l);

		transition: var(--transition);
		position: relative;
	}

	.song:hover {
		background-color: var(--primary-900);
		cursor: pointer;
	}
</style>
