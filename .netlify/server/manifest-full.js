export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","fonts/Mona-Sans.woff2","fonts/RecoletaAlt-SemiBold.woff","fonts/RecoletaAlt-SemiBold.woff2","icon-192-any.png","icon-192-maskable.png","icon-512-any.png","icon-512-maskable.png","images/bg-title.jpg","images/bg_pattern_rhombus_beta.webp","images/dot.svg","images/error.gif","images/exp.webp","images/headerBottom.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/music.webp","images/portrait.png","images/rhombus_line.png","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".woff2":"font/woff2",".woff":"font/woff",".jpg":"image/jpeg",".webp":"image/webp",".gif":"image/gif",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-3330919c.js","imports":["_app/immutable/start-3330919c.js","_app/immutable/chunks/index-c4c52311.js","_app/immutable/chunks/singletons-d68e3acd.js","_app/immutable/chunks/index-ff4de04e.js","_app/immutable/chunks/preload-helper-9b728935.js"],"stylesheets":[],"fonts":[]},
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
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/blog",
				pattern: /^\/api\/blog\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/blog/_server.js')
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/category",
				pattern: /^\/blog\/category\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/manifest.webmanifest",
				pattern: /^\/manifest\.webmanifest\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/manifest.webmanifest/_server.js')
			},
			{
				id: "/project",
				pattern: /^\/project\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/project/[slug]",
				pattern: /^\/project\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/resource",
				pattern: /^\/resource\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/resource/exp",
				pattern: /^\/resource\/exp\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/resource/music",
				pattern: /^\/resource\/music\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/resource/tool",
				pattern: /^\/resource\/tool\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
