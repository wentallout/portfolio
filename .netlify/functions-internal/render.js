const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.svg","images/frame2corner.png","images/fuji.svg","images/khoa-biolink.png","images/rhombus_line.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-14092c68.js","imports":["_app/immutable/start-14092c68.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-b6e5fdaf.js","_app/immutable/chunks/singletons-1891ab1d.js","_app/immutable/chunks/index-7f48f867.js"],"stylesheets":[]},
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
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				},
			{
					id: "contact",
					pattern: /^\/contact\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":3},
					endpoint: null
				},
			{
					id: "project",
					pattern: /^\/project\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":4},
					endpoint: null
				},
			{
					id: "resource",
					pattern: /^\/resource\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":5},
					endpoint: null
				},
			{
					id: "resource/tool",
					pattern: /^\/resource\/tool\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":6},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
