import { writable } from 'svelte/store';

export const isPlaying = writable(false);

/**
 * @type {HTMLElement}
 */
export const audioPlayerEl = writable();

export const musicList = writable([
	{
		audio: '/ringtones/MemoryReboot.flac',
		name: 'Memory Reboot'
	},
	{
		audio: '/ringtones/ChaChaCha.flac',
		name: 'Cha Cha Cha'
	},

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
		audio: '/ringtones/9Mm.flac',
		name: '9Mm'
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
	},
	{
		audio: 'https://uk2.internet-radio.com/proxy/esvive?mp=/stream',
		name: '[Radio] Esvive Radio'
	},
	{
		audio: 'http://163.172.77.142:8724/stream/1/',
		name: '[Radio] HanaPOP KPOP'
	}
]);
