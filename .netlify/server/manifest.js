export const manifest = {
	appDir: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","fonts/AuxMono-Regular.eot","fonts/AuxMono-Regular.ttf","fonts/AuxMono-Regular.woff","fonts/AuxMono-Regular.woff2","icon-192.png","icon-512.png","images/dot.svg","images/fuji.svg","images/headerBottom.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/rhombus_line.png","robots.txt","styles/markdown.css","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-4a8c6b36.js","imports":["_app/immutable/start-4a8c6b36.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-5c48e935.js","_app/immutable/chunks/singletons-8e756c88.js","_app/immutable/chunks/index-b581fe17.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
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
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "project",
				pattern: /^\/project\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "resource",
				pattern: /^\/resource\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "resource/tool",
				pattern: /^\/resource\/tool\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "project/[slug]",
				pattern: /^\/project\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
