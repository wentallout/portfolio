import { writable } from 'svelte/store';

export const musicList = writable([
	{
		audio: '/ringtones/PerfectGirl.mp3',
		name: 'Perfect Girl'
	},
	{
		audio: '/ringtones/Belt.mp3',
		name: 'Belt'
	},
	{
		audio: '/ringtones/IllDoIt.mp3',
		name: 'Ill Do It'
	},

	{
		audio: 'https://prclive4.listenon.in/Dance',
		name: '[Radio] City Dance'
	},

	{
		audio: 'https://media-ice.musicradio.com/CapitalMP3',
		name: '[Radio] Capital FM'
	},
	{
		audio: 'http://113.164.229.226:7005/stream',
		name: '[Radio] VOV3 Music'
	}
]);
