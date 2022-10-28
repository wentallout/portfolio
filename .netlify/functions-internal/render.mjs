import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","fonts/RecoletaAlt-SemiBold.eot","fonts/RecoletaAlt-SemiBold.ttf","fonts/RecoletaAlt-SemiBold.woff","fonts/RecoletaAlt-SemiBold.woff2","icon-192-any.png","icon-192-maskable.png","icon-512-any.png","icon-512-maskable.png","images/dot.svg","images/error.gif","images/exp.webp","images/headerBottom.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/music.webp","images/noise.svg","images/noise2.svg","images/rhombus_line.png","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-804d179a.js","imports":["_app/immutable/start-804d179a.js","_app/immutable/chunks/index-8295f668.js","_app/immutable/chunks/singletons-92100df6.js","_app/immutable/chunks/index-da81e281.js","_app/immutable/chunks/preload-helper-b21cceae.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js'),
			() => import('../server/nodes/14.js'),
			() => import('../server/nodes/15.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
