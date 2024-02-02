// ./src/lib/i18n.ts
import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';
import * as runtime from '$paraglide/runtime';

export const i18n = createI18n(runtime);
