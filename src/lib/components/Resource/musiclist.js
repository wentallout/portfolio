import { writable } from 'svelte/store';

export let musicList = writable([
	{
		audio: 'PerfectGirl.mp3',
		name: 'Perfect Girl'
	},
	{
		audio: 'Belt.mp3',
		name: 'Belt'
	}
]);
