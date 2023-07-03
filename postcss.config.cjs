const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const postcssPresetEnv = require('postcss-preset-env');
const postcssGlobalData = require('@csstools/postcss-global-data');

const config = {
	plugins: [
		postcssGlobalData({
			files: ['src/lib/styles/global-postcss.css']
		}),
		postcssPresetEnv({
			stage: 5,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		}),
		autoprefixer,
		csso()
	]
};

module.exports = config;
