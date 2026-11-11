import { plugin as shadcn } from '@shadcn/lint';
import tsParser from '@typescript-eslint/parser';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	...eslintPluginSvelte.configs['flat/recommended'],

	{
		languageOptions: {
			ecmaVersion: 2022,
			globals: {
				...globals.browser,
				...globals.node,
				myCustomGlobal: 'readonly'
			},
			sourceType: 'module'
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: { parser: tsParser }
		},
		plugins: { shadcn },
		settings: {
			shadcn: {
				// Our own className helpers, in addition to the built-in
				// cn/cva/tv/etc. so the linter can resolve their output.
				variantFunctions: ['buttonVariants']
			}
		},
		rules: {
			'shadcn/no-restyle': [
				'error',
				{ allow: ['layout'], componentImports: ['^#lib/components/'] }
			],
			'shadcn/no-raw-colors': 'error',
			'shadcn/no-arbitrary-values': 'error',
			'shadcn/no-unknown-classes': 'error',
			'shadcn/require-static-classes': 'error'
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: { parser: tsParser },
		plugins: { shadcn },
		settings: {
			shadcn: {
				variantFunctions: ['buttonVariants']
			}
		},
		rules: {
			'shadcn/no-restyle': [
				'error',
				{ allow: ['layout'], componentImports: ['^#lib/components/'] }
			],
			'shadcn/no-raw-colors': 'error',
			'shadcn/no-arbitrary-values': 'error',
			'shadcn/no-unknown-classes': 'error',
			'shadcn/require-static-classes': 'error'
		}
	},
	// Vendored code. `components/ui/**` is generated from shadcn/ui and
	// `components/edra/**` is a third-party editor we vendor in as-is, so the
	// design-system rules only report upstream styling decisions we will not
	// act on. Correctness rules (button-has-type, each keys, ...) stay on.
	{
		files: ['src/lib/components/ui/**', 'src/lib/components/edra/**'],
		rules: {
			'shadcn/no-restyle': 'off',
			'shadcn/no-raw-colors': 'off',
			'shadcn/no-arbitrary-values': 'off',
			'shadcn/no-unknown-classes': 'off',
			'shadcn/require-static-classes': 'off'
		}
	},

	// Brand and logo SVGs carry fixed brand colors on purpose; they are not
	// design-system tokens and must not follow the theme.
	{
		files: ['src/lib/assets/icons/**'],
		rules: {
			'shadcn/no-raw-colors': 'off'
		}
	},

	{
		rules: {
			'svelte/button-has-type': 'error',
			'svelte/no-dupe-else-if-blocks': 'error',
			'svelte/sort-attributes': 1
		}
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			// Generated build output. Flat config needs glob patterns here; the
			// previous leading-slash form matched nothing, so generated Svelte files
			// (e.g. .svelte-kit/generated/root.svelte) were being linted.
			'**/build/**',
			'**/.svelte-kit/**',
			'**/.netlify/**',
			'**/package/**',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml'
		]
	}
];
