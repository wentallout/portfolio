<script>
	import CardListContainer from '$components/layout/container/CardListContainer.svelte';
	import FigmaCard from '$components/resource/FigmaCard.svelte';

	let snippetList = [
		{
			title: 'Auto Fit Text',
			href: 'https://codepen.io/wentallout/pen/KKOBVxq',
			desc: 'Text that fit to its container width.'
		},
		{
			title: '3D Card Tilt On Hover',
			href: 'https://codepen.io/wentallout/pen/MWdvEzN',
			desc: '3D card that tilts on hover'
		},
		{
			title: 'Truncating Long Text with CSS Ellipsis',
			href: 'https://codepen.io/wentallout/pen/MWdpQWW',
			desc: 'truncate long text with css ellipsis'
		},
		{
			title: 'Pancake Stack Layout',
			href: 'https://codepen.io/wentallout/pen/KKrqXMj',
			desc: 'a commonly used layout in both desktop and mobile'
		},
		{
			title: 'Sidebar Layout',
			href: 'https://codepen.io/wentallout/pen/LYXLzLj',
			desc: 'quick way to achieve a left sidebar + right main layout'
		},
		{
			title: 'Holy Grail Layout',
			href: 'https://codepen.io/wentallout/pen/yLQXzqe',
			desc: 'classic holy grail layout using grid'
		},
		{
			title: 'Responsive Hamburger Navbar without JS',
			href: 'https://codepen.io/wentallout/pen/ExOmjXv',
			desc: 'hamburger navbar that skip JS.'
		},
		{
			title: 'Switcher',
			href: 'https://codepen.io/wentallout/pen/WNYjKVd',
			desc: 'typicial iOS style switcher with 2 state on/off'
		},
		{
			title: 'Avatar',
			href: 'https://codepen.io/wentallout/pen/dyQWjdx',
			desc: 'avatar pure CSS'
		},
		{
			title: 'Voting Bar',
			href: 'https://codepen.io/wentallout/pen/dyQRzEv',
			desc: 'voting element like reddit'
		},
		{
			title: 'Panoramic Animation',
			href: 'https://codepen.io/wentallout/pen/xxQEOzq',
			desc: "animate an img from left to right when it's wider than its container"
		},
		{
			title: 'Smooth Scroll',
			href: 'https://codepen.io/wentallout/pen/ExNNvzR',
			desc: 'smooth scroll with vanilla JS'
		},
		{
			title: 'Glitchy Text Animation',
			href: 'https://codepen.io/wentallout/pen/rNzBQOQ',
			desc: 'futuristic glitchy text'
		},
		{
			title: 'Clock',
			href: 'https://codepen.io/wentallout/pen/rNQjbPW',
			desc: 'a clock in VanillaJS'
		}
	];
</script>

<CardListContainer>
	{#each snippetList as snippet}
		<FigmaCard {...snippet} />
	{/each}
</CardListContainer>
