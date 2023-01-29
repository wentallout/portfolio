export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3d/plastic_monobloc_chair_01.bin","3d/plastic_monobloc_chair_01_4k.gltf","3d/textures/plastic_monobloc_chair_01_arm_4k.jpg","3d/textures/plastic_monobloc_chair_01_diff_4k.jpg","3d/textures/plastic_monobloc_chair_01_nor_gl_4k.jpg","apple-touch-icon.png","favicon.ico","favicon.svg","fonts/Beaufort.woff2","fonts/Mona-Sans.woff2","icon-192-any.png","icon-192-maskable.png","icon-512-any.png","icon-512-maskable.png","images/bg_decor_flower_l.png","images/bg_decor_flower_r.png","images/bg_decor_line_l.png","images/bg_decor_line_r.png","images/diamonds.svg","images/dot.svg","images/error.gif","images/exp.webp","images/headerBottom.svg","images/music.webp","images/wall.svg","robots.txt","service-worker.js"]),
	mimeTypes: {".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpg":"image/jpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".woff2":"font/woff2",".gif":"image/gif",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-c775b703.js","imports":["_app/immutable/start-c775b703.js","_app/immutable/chunks/index-9b2adc1a.js","_app/immutable/chunks/singletons-dd063cbb.js","_app/immutable/chunks/index-7b9d3f1d.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
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
