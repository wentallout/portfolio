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

	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022
	},
	env: {
		browser: true,
		es2022: true,
		node: true
	}
};
