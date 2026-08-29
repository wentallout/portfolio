import { PAGE_TITLES } from './labels.js';

// Unified UX copy — single source of truth for navigation labels and site copy
// Edit titles in labels.js to update both desktop (NavBar) and mobile (BottomNav)

export const navItems = [
	{
		path: '/blogs',
		title: PAGE_TITLES.blogs
	},
	{
		path: '/projects',
		title: PAGE_TITLES.projects
	},
	{
		path: '/contact',
		title: PAGE_TITLES.contact
	}
];
