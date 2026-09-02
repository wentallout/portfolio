// Legacy static OG fallbacks (kept for offline/build fallback, not used for SEO now)
import staticOgImage from '#lib/assets/images/seo/1200x627.png';
import staticOgSquareImage from '#lib/assets/images/seo/400x400.png';

export const CAL_BOOKING_LINK = 'https://cal.com/wentallout/web';

export const author = 'Khoa Nguyen';
export const backgroundColor = '#121212';
export const contactEmail = 'wentallout@gmail.com';
export const description =
	'Nguyen Dang Khoa - Professional UI/UX Designer and Frontend Developer since 2022';

export const facebookAuthorPage = 'https://www.facebook.com/wentallout.uiux';
export const facebookPage = 'https://www.facebook.com/wentallout';
export const githubPage = 'wentallout';
export const icon = 'static/icon-512.png';
export const linkedinProfile = 'wentallout';

export const ogLanguage = 'en_US';
export const siteLanguage = 'en-US';
export const siteShortTitle = 'Tailor-made websites for your business';
export const siteTitle = 'Tailor-made websites for your business - Khoa Nguyen';
export const siteUrl = 'https://wentallout.io.vn';

export const telegramUsername = 'wentallout';
export const themeColor = '#ffbb00';
export const tiktokUsername = '@wentallout';
export const twitterUserId = '1391413398286471168';
export const twitterUsername = 'wentallout';

export const defaultAlt = 'Khoa Nguyen';

// sveltekit-og dynamic OG URLs — replaces static PNGs
// See https://sveltekit-og.dev/docs and /og.png route (prerendered) + dynamic /blogs/[slug]/og.png
export const defaultOgImage = `${siteUrl}/og.png`;
export const defaultOgSquareImage = `${siteUrl}/og.png`;
export const defaultTwitterImage = `${siteUrl}/og.png`;

// Helpers for dynamic OG
export const ogUrlForBlog = (slug: string) => `${siteUrl}/blogs/${slug}/og.png`;
export const ogUrlForProject = (slug: string) => `${siteUrl}/projects/${slug}/og.png`;

// Keep static fallbacks exported for legacy callers
export { staticOgImage, staticOgSquareImage };
