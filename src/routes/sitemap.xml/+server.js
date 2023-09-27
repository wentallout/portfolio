export const prerender = true;
import * as sitemap from 'super-sitemap';

export const GET = async () => {
	return await sitemap.response({
		origin: 'wentallout.io.vn'
	});
};
