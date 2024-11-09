<script>
	import SectionTitle from '$sections/SectionTitle.svelte';

	import { SoundCloud } from 'sveltekit-embed';
	import MusicPlayer from '$components/music/MusicPlayer.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import { FileAudio } from '$lib/assets/icons/icons';
</script>

<PageTitle pageTitle="Musics" />

<section>
	<SectionTitle
		sectionTitle="Music Player"
		sectionDesc="Now you can listen and download Khoa's favorite songs. Live Radio included. Enjoy!">
		{#snippet children({ sectionIcon })}
			<FileAudio {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<MusicPlayer />
</section>

<section>
	<SectionTitle sectionTitle="SoundCloud">
		{#snippet children({ sectionIcon })}
			<MusicNotes {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<SoundCloud
		soundcloudLink="https://soundcloud.com/falxce/falxce-berylxx-serenity?si=e37c4665ee3e4a87a5e76a302267f96f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />

	<SoundCloud
		soundcloudLink="https://soundcloud.com/falxce/osaka?si=476a413a993d433da0c6e7d8f388507e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
</section>

<style>
</style>
