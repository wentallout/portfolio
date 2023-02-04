<script>
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	import MusicNotes from '~icons/ph/music-notes';

	import FileAudio from '~icons/ph/file-audio';

	import { Spotify } from 'sveltekit-embed';
</script>

<section>
	<SectionTitle sectionTitle="Music" let:sectionIcon>
		<MusicNotes {...sectionIcon} />
	</SectionTitle>

	<Spotify
		spotifyLink="playlist/37i9dQZF1DWWY64wDtewQt?si=67ed3300e96e43ec"
		width="100%"
		height="500px" />
</section>

<section>
	<SectionTitle sectionTitle="Ringtone" let:sectionIcon>
		<FileAudio {...sectionIcon} />
	</SectionTitle>
</section>

<style>
</style>
