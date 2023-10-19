import { writable } from 'svelte/store';

export const musicList = writable([
	{
		audio: 'PerfectGirl.mp3',
		name: 'Perfect Girl'
	},
	{
		audio: 'Belt.mp3',
		name: 'Belt'
	},
	{
		audio: 'IllDoIt.mp3',
		name: 'Ill Do It'
	}
]);
