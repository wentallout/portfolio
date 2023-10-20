<script>
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';
	import MusicNotes from '~icons/ph/music-notes';
	import FileAudio from '~icons/ph/file-audio';

	// import { Spotify } from 'sveltekit-embed';
	import MusicPlayer from '$lib/components/Resource/MusicPlayer/MusicPlayer.svelte';
	// import PageTitle from '$components/Common/PageTitle.svelte';
</script>

<section>
	<SectionTitle
		sectionTitle="Music"
		let:sectionIcon
		sectionDesc="Khoa's favorite ringtones that you can download. Live Radio included">
		<FileAudio {...sectionIcon} />
	</SectionTitle>

	<MusicPlayer />
</section>

<!-- <section>
	<SectionTitle sectionTitle="Spotify Playlist" let:sectionIcon>
		<MusicNotes {...sectionIcon} />
	</SectionTitle>

	<div class="embed">
		<Spotify
			spotifyLink="playlist/37i9dQZF1DWWY64wDtewQt?si=67ed3300e96e43ec"
			width="100%"
			height="500px" />
	</div>

	<div class="embed">
		<Spotify spotifyLink="playlist/4rVu705DBrGDeNSec40ooy" width="100%" height="500px" />
	</div>
</section> -->

<style>
</style>
