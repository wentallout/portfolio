import * as universal from '../entries/pages/blog/_page.js';

export const index = 5;
export const component = async () =>
	(await import('../entries/pages/blog/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/blog/_page.svelte-1fff5675.js';
export { universal };
export const imports = [
	'_app/immutable/components/pages/blog/_page.svelte-1fff5675.js',
	'_app/immutable/chunks/index-97804da4.js',
	'_app/immutable/chunks/BlogCard-4b5a49f9.js',
	'_app/immutable/chunks/Time-433cc2cb.js',
	'_app/immutable/chunks/_commonjsHelpers-28e086c5.js',
	'_app/immutable/chunks/PageTitle-16873b8a.js',
	'_app/immutable/chunks/index-c4c36248.js',
	'_app/immutable/modules/pages/blog/_page.js-bbfad6a7.js',
	'_app/immutable/chunks/_page-e2eefa0d.js'
];
export const stylesheets = [
	'_app/immutable/assets/_page-6da35a96.css',
	'_app/immutable/assets/BlogCard-69e4de3f.css',
	'_app/immutable/assets/PageTitle-ad923b2a.css'
];
export const fonts = [];
