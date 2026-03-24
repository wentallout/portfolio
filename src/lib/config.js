import * as personal from '$lib/constants/personal';

export const navItems = [
	{
		path: '/',
		title: 'Home'
	},
	{
		path: '/projects',
		title: 'Projects'
	},
	{
		path: '/blogs',
		title: 'Blogs'
	},
	{
		path: '/contact',
		title: 'Contact'
	}
];

const website = {
	author: personal.author,
	backgroundColor: personal.backgroundColor,
	contactEmail: personal.contactEmail,
	description: personal.description,

	facebookAuthorPage: personal.facebookAuthorPage,
	facebookPage: personal.facebookPage,
	githubPage: personal.githubPage,
	icon: personal.icon,
	linkedinProfile: personal.linkedinProfile,

	ogLanguage: personal.ogLanguage,
	siteLanguage: personal.siteLanguage,
	siteShortTitle: personal.siteShortTitle,
	siteTitle: personal.siteTitle,
	siteUrl: personal.siteUrl,
	telegramUsername: personal.telegramUsername,
	themeColor: personal.themeColor,
	tiktokUsername: personal.tiktokUsername,
	twitterUserId: personal.twitterUserId,
	twitterUsername: personal.twitterUsername
};

export default website;
