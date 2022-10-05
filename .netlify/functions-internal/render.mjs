import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","fonts/BlackerProDisplayTrial-Bold.eot","fonts/BlackerProDisplayTrial-Bold.ttf","fonts/BlackerProDisplayTrial-Bold.woff","fonts/BlackerProDisplayTrial-Bold.woff2","icon-192.png","icon-512.png","images/dot.svg","images/fuji.svg","images/headerBottom.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/noise.svg","images/rhombus_line.png","robots.txt","styles/markdown.css","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".eot":"application/vnd.ms-fontobject",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-04e288ce.js","imports":["_app/immutable/start-04e288ce.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-abfb7864.js","_app/immutable/chunks/singletons-e3118715.js","_app/immutable/chunks/index-661fcb16.js"],"stylesheets":[]},
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
			() => import('../server/nodes/11.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
