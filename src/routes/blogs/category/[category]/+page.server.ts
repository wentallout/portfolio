import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { category } = params;
	// Renamed: category -> tags. Permanent redirect to new URL.
	throw redirect(308, `/blogs/tags/${category}`);
};
