import {
	c as create_ssr_component,
	e as spread,
	f as escape_object,
	v as validate_component,
	d as add_attribute,
	b as subscribe,
	h as escape,
	g as each,
	j as null_to_empty
} from '../../../../chunks/index3.js';
import { S as SectionDesc } from '../../../../chunks/SectionDesc.js';
import { S as SectionTitle } from '../../../../chunks/SectionTitle.js';
import { G as General_observer } from '../../../../chunks/gist.svelte_svelte_type_style_lang.js';
import { w as writable } from '../../../../chunks/index2.js';
const Music_notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M212.9 25.7a8 8 0 0 0-6.8-1.5l-128 32A8 8 0 0 0 72 64v110.1a35.3 35.3 0 0 0-20-6.1a36 36 0 1 0 36 36v-85.8l112-28v51.9a35.3 35.3 0 0 0-20-6.1a36 36 0 1 0 36 36V32a7.8 7.8 0 0 0-3.1-6.3ZM52 224a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Zm36-122.2V70.2l112-28v31.6Zm92 90.2a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const File_audio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M216 88a7.8 7.8 0 0 0-2.4-5.7l-55.9-56A8.1 8.1 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88Zm-56-36.7L188.7 80H160Zm-60.6 93.5a7.8 7.8 0 0 0-8.5 1.1L69.1 164H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h21.1l21.8 18.1A7.5 7.5 0 0 0 96 232a6.8 6.8 0 0 0 3.4-.8a7.9 7.9 0 0 0 4.6-7.2v-72a7.9 7.9 0 0 0-4.6-7.2ZM88 206.9l-10.9-9A7.8 7.8 0 0 0 72 196H56v-16h16a7.8 7.8 0 0 0 5.1-1.9l10.9-9Zm60-18.9a39.8 39.8 0 0 1-15 31.2a7.9 7.9 0 0 1-5 1.8a7.8 7.8 0 0 1-6.2-3a8.1 8.1 0 0 1 1.2-11.3a23.9 23.9 0 0 0 0-37.4a8 8 0 0 1 10-12.5a39.8 39.8 0 0 1 15 31.2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Spotify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { spotifyLink = '' } = $$props;
	let { width = '320' } = $$props;
	let { height = '380' } = $$props;
	if ($$props.spotifyLink === void 0 && $$bindings.spotifyLink && spotifyLink !== void 0)
		$$bindings.spotifyLink(spotifyLink);
	if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0)
		$$bindings.height(height);
	return `${validate_component(General_observer, 'GeneralObserver').$$render(
		$$result,
		{ height, width },
		{},
		{
			default: () => {
				return `<iframe data-testid="${'spotify'}"${add_attribute(
					'title',
					`spotify-${spotifyLink}`,
					0
				)} class="${'spotify-sveltekit-embed'}"${add_attribute(
					'src',
					`https://open.spotify.com/embed/${spotifyLink}`,
					0
				)}${add_attribute('width', width, 0)}${add_attribute(
					'height',
					height,
					0
				)} frameborder="${'0'}" allow="${'encrypted-media'}"></iframe>`;
			}
		}
	)}`;
});
let musicList = writable([
	{
		audio: 'PerfectGirl.mp3',
		name: 'Perfect Girl'
	},
	{
		audio: 'Belt.mp3',
		name: 'Belt'
	}
]);
const Play_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16Zm-117.7-2.3a8.2 8.2 0 0 0 11.4 0l48-48a8.1 8.1 0 0 0-11.4-11.4L136 108.7V24a8 8 0 0 0-16 0v84.7L85.7 74.3a8.1 8.1 0 0 0-11.4 11.4ZM200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Skip_back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M199.8 40.3a16 16 0 0 0-16.1.3L64 113.7V40a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-73.7l119.7 73.1a16.2 16.2 0 0 0 8.3 2.3a15.4 15.4 0 0 0 7.8-2a15.9 15.9 0 0 0 8.2-14V54.3a15.9 15.9 0 0 0-8.2-14ZM192 201.7L71.3 128L192 54.3Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Skip_forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M200 32a8 8 0 0 0-8 8v73.7L72.3 40.6A16 16 0 0 0 48 54.3v147.4a15.9 15.9 0 0 0 8.2 14a15.4 15.4 0 0 0 7.8 2a16.2 16.2 0 0 0 8.3-2.3L192 142.3V216a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8ZM64 201.7V54.3L184.7 128Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Pause = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M200 32h-36a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h36a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176h-36V48h36ZM92 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h36a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H56V48h36Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Speaker_high = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M248 128a79.6 79.6 0 0 1-23.5 56.6a8 8 0 0 1-5.6 2.3a8.3 8.3 0 0 1-5.7-2.3a8 8 0 0 1 0-11.3a64 64 0 0 0 0-90.6a8 8 0 0 1 11.3-11.3A79.6 79.6 0 0 1 248 128Zm-88-96v192a8 8 0 0 1-4.5 7.2a8.5 8.5 0 0 1-3.5.8a8.1 8.1 0 0 1-4.9-1.7L77.3 176H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h45.3l69.8-54.3A8 8 0 0 1 160 32ZM32 160h40V96H32ZM144 48.4L88 91.9v72.2l56 43.5Zm40.9 51.3a8 8 0 0 0 0 11.3a23.9 23.9 0 0 1 0 34a8 8 0 0 0 0 11.3a8.3 8.3 0 0 0 5.7 2.3a8.5 8.5 0 0 0 5.7-2.3a40.1 40.1 0 0 0 0-56.6a8.1 8.1 0 0 0-11.4 0Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const MusicPlayer_svelte_svelte_type_style_lang = '';
const css = {
	code: '.position.svelte-70ezuv.svelte-70ezuv{display:flex;flex-direction:row;padding:var(--space-s);width:100%}.position__input.svelte-70ezuv.svelte-70ezuv{transition:.3s;width:100%}.volume.svelte-70ezuv.svelte-70ezuv{align-items:center;display:flex;gap:var(--space-s)}.current-time.svelte-70ezuv.svelte-70ezuv{color:var(--primary-500);font-weight:300}.info__name.svelte-70ezuv.svelte-70ezuv{font-weight:600}.duration.svelte-70ezuv.svelte-70ezuv{color:var(--neutral-900);font-weight:300}.controls.svelte-70ezuv.svelte-70ezuv{padding:var(--space-m)}.download.svelte-70ezuv.svelte-70ezuv{align-items:center;background-color:var(--bg-500);border-radius:100%;display:flex;height:40px;justify-content:center;position:absolute;right:0;top:50%;transform:translate(-50%,-50%);width:40px;z-index:2}.download.svelte-70ezuv.svelte-70ezuv:hover{filter:brightness(1.3)}.info.svelte-70ezuv.svelte-70ezuv{align-items:center;flex-direction:column;justify-content:center;padding:var(--space-l);width:100%}.info.svelte-70ezuv.svelte-70ezuv,.song-time.svelte-70ezuv.svelte-70ezuv{display:flex;gap:var(--space-s)}.song-time.svelte-70ezuv.svelte-70ezuv{flex-direction:row}.current.svelte-70ezuv.svelte-70ezuv{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:var(--space-xl);width:100%}.mp-btn-small.svelte-70ezuv.svelte-70ezuv{scale:.8}.mp-btn.svelte-70ezuv.svelte-70ezuv{background-color:var(--bg-100);border:0;-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);height:80px;transition:var(--transition);width:80px}.mp-btn.svelte-70ezuv.svelte-70ezuv:hover{cursor:pointer;filter:brightness(1.3)}.play-btn.svelte-70ezuv.svelte-70ezuv{background-color:var(--primary-500)}.player.svelte-70ezuv.svelte-70ezuv{align-items:center;background-color:var(--bg-400);border-radius:var(--border-radius);justify-content:center;overflow:hidden}.player.svelte-70ezuv.svelte-70ezuv,.song-list.svelte-70ezuv.svelte-70ezuv{display:flex;flex-direction:column;width:100%}.song-list.svelte-70ezuv.svelte-70ezuv{background-color:var(--bg-300)}.song-active.svelte-70ezuv.svelte-70ezuv{background:var(--primary-500);padding:var(--space-s) var(--space-l);position:relative}.song-name.svelte-70ezuv.svelte-70ezuv{color:var(--text-color);font-weight:300}.song-active.svelte-70ezuv .song-name.svelte-70ezuv{color:var(--bg-500);font-weight:600}.song.svelte-70ezuv.svelte-70ezuv{padding:var(--space-s) var(--space-l);position:relative;transition:var(--transition)}.song.svelte-70ezuv.svelte-70ezuv:hover{background-color:var(--primary-900);cursor:pointer}',
	map: null
};
function format(seconds) {
	if (isNaN(seconds)) return '...';
	const minutes = Math.floor(seconds / 60);
	seconds = Math.floor(seconds % 60);
	if (seconds < 10) seconds = '0' + seconds;
	return `${minutes}:${seconds}`;
}
const MusicPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $musicList, $$unsubscribe_musicList;
	$$unsubscribe_musicList = subscribe(musicList, (value) => ($musicList = value));
	let currentSongIndex = 0;
	let playing = false;
	let duration;
	let currentTime;
	let volume = 0.4;
	let audioEle;
	let volumeEle;
	let positionEle;
	function playMusic() {
		playing = true;
		audioEle.play();
	}
	function next() {
		currentSongIndex = (currentSongIndex + 1) % $musicList.length;
		playMusic();
	}
	$$result.css.add(css);
	$$unsubscribe_musicList();
	return `<div class="${'player svelte-70ezuv'}"><audio autoplay="${'false'}"${add_attribute(
		'onended',
		next,
		0
	)}${add_attribute('src', '/ringtones/' + $musicList[currentSongIndex].audio, 0)}${add_attribute(
		'currentTime',
		currentTime,
		0
	)}${add_attribute('volume', volume, 0)}${add_attribute('this', audioEle, 0)}></audio>
	<div class="${'player svelte-70ezuv'}"><div class="${'current svelte-70ezuv'}"><div class="${'info svelte-70ezuv'}"><div class="${'info__name xxl-text svelte-70ezuv'}">${escape(
		$musicList[currentSongIndex].name
	)}</div>

				<div class="${'song-time svelte-70ezuv'}"><div class="${'current-time xl-text svelte-70ezuv'}">${escape(
		format(currentTime)
	)}</div>
					<div class="${'duration xl-text svelte-70ezuv'}">${escape(format(duration))}</div></div></div>
			<div class="${'controls svelte-70ezuv'}"><button class="${'mp-btn mp-btn-small svelte-70ezuv'}">${validate_component(
		Skip_back,
		'SkipBack'
	).$$render(
		$$result,
		{
			width: '24',
			height: '24',
			color: 'var(--text-color)'
		},
		{},
		{}
	)}</button>

				${
					playing
						? `<button class="${'mp-btn svelte-70ezuv'}">${validate_component(
								Pause,
								'Pause'
						  ).$$render(
								$$result,
								{
									width: '24',
									height: '24',
									color: 'var(--text-color)'
								},
								{},
								{}
						  )}</button>`
						: `<button class="${'mp-btn play-btn svelte-70ezuv'}">${validate_component(
								Play_fill,
								'PlayFill'
						  ).$$render(
								$$result,
								{
									width: '24',
									height: '24',
									color: 'var(--bg-500)'
								},
								{},
								{}
						  )}</button>`
				}

				<button class="${'mp-btn mp-btn-small svelte-70ezuv'}">${validate_component(
		Skip_forward,
		'SkipForward'
	).$$render(
		$$result,
		{
			width: '24',
			height: '24',
			color: 'var(--text-color)'
		},
		{},
		{}
	)}</button></div>
			<div class="${'volume svelte-70ezuv'}">${validate_component(Speaker_high, 'SpeakerHigh').$$render(
		$$result,
		{
			width: '24',
			height: '24',
			color: 'var(--text-color)'
		},
		{},
		{}
	)}
				<input type="${'range'}" id="${'volume-control'}" min="${'0'}" max="${'100'}"${add_attribute(
		'value',
		volume * 100,
		0
	)}${add_attribute('this', volumeEle, 0)}></div></div>

		<div class="${'position svelte-70ezuv'}"><input class="${'position__input svelte-70ezuv'}" type="${'range'}"${add_attribute(
		'value',
		0,
		0
	)}${add_attribute('this', positionEle, 0)}></div>

		<div class="${'song-list svelte-70ezuv'}">${each($musicList, (music, i) => {
		return `<div class="${
			escape(null_to_empty(i == currentSongIndex ? 'song-active' : 'song'), true) + ' svelte-70ezuv'
		}"><div class="${'song-name small-text svelte-70ezuv'}">${escape(music.name)}</div>
					<a class="${'download svelte-70ezuv'}"${add_attribute(
			'href',
			'/ringtones/' + $musicList[i].audio,
			0
		)}${add_attribute('download', $musicList[i].audio, 0)}>${validate_component(
			Download,
			'Download'
		).$$render(
			$$result,
			{
				width: '16',
				height: '16',
				color: 'var(--text-color)'
			},
			{},
			{}
		)}</a>
				</div>`;
	})}</div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<section>${validate_component(SectionTitle, 'SectionTitle').$$render(
		$$result,
		{ sectionTitle: 'Ringtone' },
		{},
		{
			default: ({ sectionIcon }) => {
				return `${validate_component(File_audio, 'FileAudio').$$render(
					$$result,
					Object.assign({}, sectionIcon),
					{},
					{}
				)}`;
			}
		}
	)}
	${validate_component(SectionDesc, 'SectionDesc').$$render(
		$$result,
		{
			text: 'Custom ringtones made by Khoa for your phone. Intros are removed. Free download enabled.'
		},
		{},
		{}
	)}

	${validate_component(MusicPlayer, 'MusicPlayer').$$render($$result, {}, {}, {})}</section>
<section>${validate_component(SectionTitle, 'SectionTitle').$$render(
		$$result,
		{ sectionTitle: 'Spotify Playlist' },
		{},
		{
			default: ({ sectionIcon }) => {
				return `${validate_component(Music_notes, 'MusicNotes').$$render(
					$$result,
					Object.assign({}, sectionIcon),
					{},
					{}
				)}`;
			}
		}
	)}

	<div class="${'embed'}">${validate_component(Spotify, 'Spotify').$$render(
		$$result,
		{
			spotifyLink: 'playlist/37i9dQZF1DWWY64wDtewQt?si=67ed3300e96e43ec',
			width: '100%',
			height: '500px'
		},
		{},
		{}
	)}</div>

	<div class="${'embed'}">${validate_component(Spotify, 'Spotify').$$render(
		$$result,
		{
			spotifyLink: 'playlist/4rVu705DBrGDeNSec40ooy',
			width: '100%',
			height: '500px'
		},
		{},
		{}
	)}</div>
</section>`;
});
export { Page as default };
