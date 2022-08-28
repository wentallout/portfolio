const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.svg","images/frame2corner.png","images/fuji.svg","images/khoa-biolink.png","images/rhombus_line.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-22613e7e.js","imports":["_app/immutable/start-22613e7e.js","_app/immutable/chunks/index-07386ddb.js","_app/immutable/chunks/index-f6da9534.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "project",
				pattern: /^\/project\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "resource",
				pattern: /^\/resource\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 5
			},
			{
				type: 'page',
				id: "resource/tool",
				pattern: /^\/resource\/tool\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 6
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
