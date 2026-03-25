class MusicStore {
	audioPlayerEl = $state();
	isPlaying = $state(false);
	musicList = $state([
		{
			audio: '',
			name: 'Cant See'
		}
	]);

	formatTime(seconds) {
		if (isNaN(seconds)) {
			return '0:00';
		}

		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);

		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}

	togglePlay() {
		this.isPlaying = !this.isPlaying;
	}
}

export const music = new MusicStore();
