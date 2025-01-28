const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');
const postcssGlobalData = require('@csstools/postcss-global-data');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [
		// postcssGlobalData({
		// 	files: ['src/styles/global-postcss.css']
		// }),
		postcssCascadeLayers(),
		atImport(),
		postcssPresetEnv({
			features: {
				'cascade-layers': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
				'nesting-rules': true
			},
			stage: 3
		}),
		autoprefixer
	]
};

module.exports = config;
