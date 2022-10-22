// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Project',
		path: '/project'
	},
	{
		title: 'Blog',
		path: '/blog'
	},
	{
		title: 'Resource',
		path: '/resource'
	},
	{
		title: 'Contact',
		path: '/contact'
	}
];

// METADATA

const facebookPageName = 'wentallout';
const facebookAuthorPageName = 'wentallout.uiux';

const website = {
	author: 'Nguyen Dang Khoa',
	ogLanguage: 'en_US',
	siteLanguage: 'en-US',
	contactEmail: 'wentallout@gmail.com',

	// PWA
	siteTitle: 'Dang Khoa - Portfolio',
	siteShortTitle: 'Portfolio',
	siteUrl: 'https://wentallout.tech',
	icon: 'static/icon-512.png',
	backgroundColor: '#fcfcfa',
	themeColor: '#e88615',
	//

	//SOCIAL
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: 'wentallout',
	linkedinProfile: 'wentallout',
	telegramUsername: 'wentallout',
	tiktokUsername: '@wentallout',
	twitterUsername: 'wentallout',
	twitterUserId: '1391413398286471168'
};

export { website as default };
