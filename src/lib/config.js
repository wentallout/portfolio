// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Project',
		path: '/project',
	},
	{
		title: 'Resource',
		path: '/resource',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
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
	siteTitle: 'Khoa Portfolio',
	siteShortTitle: 'Portfolio',
	siteUrl: 'www.wentallout.tech',
	icon: 'static/icon-512.png',
	backgroundColor: '#1b1b1d',
	themeColor: '#b4883c',
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
	twitterUserId: '1391413398286471168',
};

export { website as default };
