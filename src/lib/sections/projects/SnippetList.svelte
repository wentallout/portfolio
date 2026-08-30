<script lang="ts">
	let snippetList = [
		{
			desc: 'cool trendy glassy card',
			href: 'https://codepen.io/kevinpowell/pen/XJJwaxG',
			title: 'Frosted Glass Card'
		},
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

<ul class="flex flex-col w-full">
	{#each snippetList as snippet (snippet.href)}
		<li class="w-full">
			<a
				class="group flex items-center justify-between gap-4 p-6 hover:bg-card transition-colors duration-200"
				href={snippet.href}
				rel="external nofollow noopener noreferrer"
				target="_blank">
				<span class="flex items-center gap-3 min-w-0 flex-1">
					<span class="text-sm md:text-base font-medium text-foreground shrink-0 truncate">
						{snippet.title}
					</span>
					<span class="text-sm text-muted-foreground truncate hidden sm:inline"
						>— {snippet.desc}</span>
					<span class="text-sm text-muted-foreground truncate sm:hidden">{snippet.desc}</span>
				</span>
				<span
					class="text-sm text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
					aria-hidden="true">↗</span>
			</a>
		</li>
	{/each}
</ul>
