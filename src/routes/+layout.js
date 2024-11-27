import { browser } from '$app/environment';
import posthog from 'posthog-js';

export function load({ url }) {
	if (browser && import.meta.env.MODE !== 'development') {
		posthog.init('phc_mme4LlwanCuevCif1sYvl4RniLD8FhkzaAOmh1ArPX3', {
			api_host: 'https://us.i.posthog.com'
		});
	}

	const pathname = url.pathname;

	return {
		pathname
	};
}
