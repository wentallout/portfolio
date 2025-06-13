<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import { FileAudio, MusicNotes } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import { SoundCloud } from 'sveltekit-embed';
</script>

<PageTitle pageTitle="Music" />

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
