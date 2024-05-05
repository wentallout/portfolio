import posthog from 'posthog-js'
import { browser } from '$app/environment'

export const prerender = 'auto'

export function load({ url }) {
  if (browser) {
    posthog.init(
		  'phc_mme4LlwanCuevCif1sYvl4RniLD8FhkzaAOmh1ArPX3',
		  { api_host: 'https://us.i.posthog.com' },
    )
	  }

  const pathname = url.pathname

  return {
    pathname,
  }
}
