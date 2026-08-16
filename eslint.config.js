
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
			'/build',
			'/.svelte-kit',
			'/package',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	}
];
