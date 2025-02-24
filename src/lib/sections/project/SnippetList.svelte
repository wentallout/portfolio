<script>
	import CardListContainer from '$components/layout/container/CardListContainer.svelte';
	import FigmaCard from '$components/resource/FigmaCard.svelte';

	let snippetList = [
		{
			desc: 'cool UI to compare 2 images',
			href: 'https://codepen.io/wentallout/pen/wBvWOxG',
			title: 'Compare component'
		},
		{
			desc: 'generate a palette using one hue',
			href: 'https://codepen.io/wentallout/pen/NPWrpdX',
			title: 'Dynamic OKLCH Color Palette'
		},
		{
			desc: 'cool sparkle that follows your mouse',
			href: 'https://codepen.io/Hyperplexed/pen/OJdpEME',
			title: 'Canva Magic Mouse effect'
		},
		{
			desc: 'Text that fit to its container width.',
			href: 'https://codepen.io/wentallout/pen/KKOBVxq',
			title: 'Auto Fit Text'
		},
		{
			desc: '3D card that tilts on hover',
			href: 'https://codepen.io/wentallout/pen/MWdvEzN',
			title: '3D Card Tilt On Hover'
		},
		{
			desc: 'truncate long text with css ellipsis',
			href: 'https://codepen.io/wentallout/pen/MWdpQWW',
			title: 'Truncating Long Text with CSS Ellipsis'
		},
		{
			desc: 'a commonly used layout in both desktop and mobile',
			href: 'https://codepen.io/wentallout/pen/KKrqXMj',
			title: 'Pancake Stack Layout'
		},
		{
			desc: 'quick way to achieve a left sidebar + right main layout',
			href: 'https://codepen.io/wentallout/pen/LYXLzLj',
			title: 'Sidebar Layout'
		},
		{
			desc: 'classic holy grail layout using grid',
			href: 'https://codepen.io/wentallout/pen/yLQXzqe',
			title: 'Holy Grail Layout'
		},
		{
			desc: 'hamburger navbar that skip JS.',
			href: 'https://codepen.io/wentallout/pen/ExOmjXv',
			title: 'Responsive Hamburger Navbar without JS'
		},
		{
			desc: 'typicial iOS style switcher with 2 state on/off',
			href: 'https://codepen.io/wentallout/pen/WNYjKVd',
			title: 'Switcher'
		},
		{
			desc: 'avatar pure CSS',
			href: 'https://codepen.io/wentallout/pen/dyQWjdx',
			title: 'Avatar'
		},
		{
			desc: 'voting element like reddit',
			href: 'https://codepen.io/wentallout/pen/dyQRzEv',
			title: 'Voting Bar'
		},
		{
			desc: "animate an img from left to right when it's wider than its container",
			href: 'https://codepen.io/wentallout/pen/xxQEOzq',
			title: 'Panoramic Animation'
		},
		{
			desc: 'smooth scroll with vanilla JS',
			href: 'https://codepen.io/wentallout/pen/ExNNvzR',
			title: 'Smooth Scroll'
		},
		{
			desc: 'futuristic glitchy text',
			href: 'https://codepen.io/wentallout/pen/rNzBQOQ',
			title: 'Glitchy Text Animation'
		},
		{
			desc: 'a clock in VanillaJS',
			href: 'https://codepen.io/wentallout/pen/rNQjbPW',
			title: 'Clock'
		}
	];
</script>

<CardListContainer>
	{#each snippetList as snippet}
		<FigmaCard {...snippet} />
	{/each}
</CardListContainer>
