<script lang="ts">
	import ProjectCard from '#lib/components/projects/ProjectCard.svelte';
	import devPortfolioSquare from '#lib/assets/images/projects/dev-portfolio/thumbnail.png';
	import nvaultThumbnail from '#lib/assets/images/projects/nvault/thumbnail.png';
	import rezaSquare from '#lib/assets/images/projects/reza/rezaSquare.jpg';
	import stockGrabberThumbnail from '#lib/assets/images/projects/stock-grabber/thumbnail.jpg';
	import superTabManagerThumbnail from '#lib/assets/images/projects/super-tab-manager/thumbnail.png';

	const projects = [
		{
			desc: 'NVAULT is a modern NFT marketplace that allows users to buy, sell, and trade NFTs.',
			linkToDetail: '/projects/nvault',
			output: '5 Pages: Home, Shop, About, Contact, Product Detail',
			projectName: 'NVAULT - Modern NFT Market',
			role: 'DESIGN SYSTEM',
			thumbnail: nvaultThumbnail
		},
		{
			desc: 'A sleek, minimal, user-friendly Chrome extension that makes managing multiple browser tabs easier.',
			linkToDetail: '/projects/super-tab-manager',
			output: 'Group similar tabs, close duplicate tabs, search tabs effortlessly.',
			projectName: 'Super Tab Manager',
			role: 'BROWSER EXTENSION',
			thumbnail: superTabManagerThumbnail
		},
		{
			desc: 'A simple app to help you download multiple stock images at the same time.',
			linkToDetail: '/projects/stock-grabber',
			output: 'Search, multi-select, and download stock images in one ZIP.',
			projectName: 'Stock Grabber',
			role: 'UTILITY APP',
			thumbnail: stockGrabberThumbnail
		},
		{
			desc: 'Mobile app that lets people book restaurant tables easily with real-time reservation system.',
			linkToDetail: '/projects/reza',
			output: 'User research, wireframing, design system, interactive prototyping.',
			projectName: 'Reza - Table Reservation',
			role: 'MOBILE APP',
			thumbnail: rezaSquare
		},
		{
			desc: 'A clean, minimal, highly customizable portfolio website for developers.',
			linkToDetail: '/projects/dev-portfolio',
			output: 'Minimalist web design system.',
			projectName: 'Developer Portfolio',
			role: 'WEB DESIGN',
			thumbnail: devPortfolioSquare
		}
	];
</script>

<div class="flex flex-col w-full relative">
	{#each projects as project, i (project.projectName)}
		<div class="w-full relative bg-background">
			<ProjectCard {...project} index={i + 1} />
		</div>
	{/each}
</div>
