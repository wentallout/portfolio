import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	const pathname = url.pathname;
	return {
		pathname
	};
};
