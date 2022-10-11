export const manifest = {
	appDir: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","fonts/RecoletaAlt-SemiBold.eot","fonts/RecoletaAlt-SemiBold.ttf","fonts/RecoletaAlt-SemiBold.woff","fonts/RecoletaAlt-SemiBold.woff2","icon-192.png","icon-512.png","images/dot.svg","images/fuji.svg","images/headerBottom.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/noise.svg","images/noise2.svg","images/rhombus_line.png","robots.txt","styles/markdown.css","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-7138e0a4.js","imports":["_app/immutable/start-7138e0a4.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-386a9ed8.js","_app/immutable/chunks/singletons-7088e46d.js","_app/immutable/chunks/index-24f79c9d.js"],"stylesheets":[]},
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
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js')
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
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "exp",
				pattern: /^\/exp\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "project",
				pattern: /^\/project\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "resource",
				pattern: /^\/resource\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "api/blog",
				pattern: /^\/api\/blog\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/blog/_server.js')
			},
			{
				id: "blog/category",
				pattern: /^\/blog\/category\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "resource/tool",
				pattern: /^\/resource\/tool\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				names: ["category"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "project/[slug]",
				pattern: /^\/project\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
