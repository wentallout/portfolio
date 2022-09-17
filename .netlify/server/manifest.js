export const manifest = {
	appDir: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","icon-192.png","icon-512.png","images/frame2corner.png","images/fuji.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/rhombus_line.png","robots.txt","styles/markdown.css","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".txt":"text/plain",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-d14c4ed8.js","imports":["_app/immutable/start-d14c4ed8.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-8af63517.js","_app/immutable/chunks/singletons-310a2781.js","_app/immutable/chunks/index-c3dc6353.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "manifest.webmanifest",
				pattern: /^\/manifest\.webmanifest$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/manifest.webmanifest/_server.js')
			},
			{
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "project",
				pattern: /^\/project\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "resource",
				pattern: /^\/resource\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "resource/tool",
				pattern: /^\/resource\/tool\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "project/[slug]",
				pattern: /^\/project\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
