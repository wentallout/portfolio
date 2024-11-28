const postcssGlobalData = require('@csstools/postcss-global-data');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [
		// postcssGlobalData({
		// 	files: ['src/styles/global-postcss.css']
		// }),
		atImport(),
		postcssPresetEnv({
			features: {
				'cascade-layers': false,
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
