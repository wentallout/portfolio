module.exports = {
	root: true,
	extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier'],
	rules: {
		'svelte/no-dupe-else-if-blocks': 'error',
		'svelte/button-has-type': 'error'
	},
	settings: {
		svelte: {}
	},
	// overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
