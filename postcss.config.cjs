const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const config = {
	plugins: [
		autoprefixer,
		cssnano,
		postcssPresetEnv({
			stage: 5,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		})
	]
};

module.exports = config;
