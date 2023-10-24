<script>
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';
	import MusicNotes from '~icons/ph/music-notes';
	import FileAudio from '~icons/ph/file-audio';

	// import { Spotify } from 'sveltekit-embed';
	import MusicPlayer from '$lib/components/Resource/MusicPlayer/MusicPlayer.svelte';
	// import PageTitle from '$components/Common/PageTitle.svelte'

	import { SoundCloud } from 'sveltekit-embed';

	
</script>

<section>
	<SectionTitle
		sectionTitle="Music"
		let:sectionIcon
		sectionDesc="Khoa's favorite songs that you can download. Live Radio included">
		<FileAudio {...sectionIcon} />
	</SectionTitle>

	<MusicPlayer />
</section>

<section>
	<SectionTitle sectionTitle="SoundCloud" let:sectionIcon>
		<MusicNotes {...sectionIcon} />
	</SectionTitle>

	<SoundCloud
		soundcloudLink="https://soundcloud.com/falxce/falxce-berylxx-serenity?si=e37c4665ee3e4a87a5e76a302267f96f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />

	<SoundCloud
		soundcloudLink="https://soundcloud.com/falxce/osaka?si=476a413a993d433da0c6e7d8f388507e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
</section>

<style>
</style>
