const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","icon-192.png","icon-512.png","images/frame2corner.png","images/fuji.svg","images/khoa-biolink.png","images/rhombus_line.png","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-197b04e9.js","imports":["_app/immutable/start-197b04e9.js","_app/immutable/chunks/index-b513d948.js","_app/immutable/chunks/singletons-39e4142d.js","_app/immutable/chunks/index-5b584455.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js"],"stylesheets":[]},
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
					id: "manifest.webmanifest",
					pattern: /^\/manifest\.webmanifest$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => Promise.resolve().then(() => require('../server/entries/endpoints/manifest.webmanifest/_server.js'))
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
