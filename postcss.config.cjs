const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const postcssGlobalData = require('@csstools/postcss-global-data');
const atImport = require('postcss-import');

const config = {
	plugins: [
		postcssGlobalData({
			files: ['src/styles/global-postcss.css']
		}),
		atImport(),
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true,
				'cascade-layers': false
			}
		}),
		autoprefixer
	]
};

module.exports = config;
