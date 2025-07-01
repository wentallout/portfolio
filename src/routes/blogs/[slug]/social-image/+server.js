import * as resvg from '@resvg/resvg-js';
import { error } from '@sveltejs/kit';
import { SecurityEvents, securityMonitor } from '$lib/security/securityMonitor.js';
import {
	AdvancedRateLimiter,
	BOT_PATTERNS,
	SECURITY_CONFIG,
	SecurityUtils
} from '$lib/security/socialImageSecurity.js';

// Initialize security components
const rateLimiter = new AdvancedRateLimiter();
const imageCache = new Map();

// Clean up expired entries periodically
function cleanupExpiredEntries() {
	const now = Date.now();

	// Clean image cache
	for (const [key, value] of imageCache.entries()) {
		if (now > value.expiry) {
			imageCache.delete(key);
		}
	}

	// Clean rate limiter
	rateLimiter.cleanup();
}

// Enhanced bot detection
function detectBot(userAgent, clientIP) {
	if (!userAgent) return { isBot: true, isLegitimate: false };

	// Check for legitimate social media crawlers first
	for (const pattern of BOT_PATTERNS.LEGITIMATE_BOTS) {
		if (pattern.test(userAgent)) {
			return { isBot: true, isLegitimate: true };
		}
	}

	// Check for general bot patterns
	for (const pattern of BOT_PATTERNS.USER_AGENTS) {
		if (pattern.test(userAgent)) {
			return { isBot: true, isLegitimate: false };
		}
	}

	// Check for suspicious IP patterns
	for (const pattern of BOT_PATTERNS.SUSPICIOUS_IPS) {
		if (pattern.test(clientIP)) {
			return { isBot: true, isLegitimate: false };
		}
	}

	// Additional heuristics
	if (userAgent.length < 10 || userAgent.length > 500) {
		return { isBot: true, isLegitimate: false };
	}

	// Check for missing common browser indicators
	const browserIndicators = ['Mozilla', 'Chrome', 'Safari', 'Firefox', 'Edge'];
	const hasIndicator = browserIndicators.some((indicator) => userAgent.includes(indicator));

	if (!hasIndicator) {
		return { isBot: true, isLegitimate: false };
	}

	return { isBot: false, isLegitimate: false };
}

// Get client IP with proxy support
function getClientIP(request) {
	const headers = [
		'cf-connecting-ip', // Cloudflare
		'x-real-ip', // Nginx
		'x-forwarded-for', // Standard proxy header
		'x-client-ip',
		'x-forwarded',
		'forwarded-for',
		'forwarded'
	];

	for (const header of headers) {
		const value = request.headers.get(header);
		if (value) {
			const ip = value.split(',')[0].trim();
			if (ip && ip !== 'unknown') {
				return ip;
			}
		}
	}

	return 'unknown';
}

// Run cleanup every 5 minutes
setInterval(cleanupExpiredEntries, SECURITY_CONFIG.CACHE.CLEANUP_INTERVAL_MS);

export async function GET({ getClientAddress, params, request }) {
	const startTime = Date.now();
	let clientIP = 'unknown';
	let userAgent = '';

	try {
		// Get client information
		clientIP = getClientAddress?.() || getClientIP(request);
		userAgent = request.headers.get('user-agent') || '';
		const referer = request.headers.get('referer') || '';

		// 1. Input validation
		const slugValidation = SecurityUtils.validateInput(params.slug, 'slug');
		if (!slugValidation.valid) {
			securityMonitor.logEvent(SecurityEvents.INVALID_INPUT, {
				clientIP,
				reason: slugValidation.reason,
				slug: params.slug,
				userAgent
			});
			throw error(400, 'Invalid slug parameter');
		}

		// 2. Advanced threat detection
		const threats = SecurityUtils.detectAdvancedThreats(request, clientIP, userAgent);
		if (threats.length > 0) {
			securityMonitor.logEvent(SecurityEvents.SUSPICIOUS_REQUEST, {
				clientIP,
				slug: params.slug,
				threats,
				userAgent
			});
		}

		// 3. Rate limiting
		const rateLimitResult = rateLimiter.checkLimit(clientIP, userAgent);
		if (!rateLimitResult.allowed) {
			securityMonitor.logEvent(SecurityEvents.RATE_LIMIT_EXCEEDED, {
				clientIP,
				reason: rateLimitResult.reason,
				slug: params.slug,
				userAgent
			});
			throw error(429, 'Too many requests. Please try again later.');
		}

		// 4. Bot detection
		const botDetection = detectBot(userAgent, clientIP);
		if (botDetection.isBot && !botDetection.isLegitimate) {
			securityMonitor.logEvent(SecurityEvents.BOT_DETECTED, {
				clientIP,
				isLegitimate: botDetection.isLegitimate,
				slug: params.slug,
				userAgent
			});
			return new Response('Access denied for automated requests', {
				headers: {
					'Cache-Control': 'no-cache',
					'Content-Type': 'text/plain'
				},
				status: 403
			});
		}

		// 5. Check cache first
		const cacheKey = `social_image_${params.slug}`;
		const cachedImage = imageCache.get(cacheKey);

		if (cachedImage && Date.now() < cachedImage.expiry) {
			securityMonitor.logEvent(SecurityEvents.CACHE_HIT, {
				clientIP,
				slug: params.slug,
				userAgent
			});
			return new Response(cachedImage.buffer, {
				headers: {
					...SECURITY_CONFIG.HEADERS,
					'Cache-Control': SECURITY_CONFIG.HEADERS.CACHE_CONTROL,
					'Content-Security-Policy': SECURITY_CONFIG.HEADERS.CSP,
					'Content-Type': 'image/png',
					'Referrer-Policy': SECURITY_CONFIG.HEADERS.REFERRER_POLICY,
					'X-Cache': 'HIT',
					'X-Content-Type-Options': SECURITY_CONFIG.HEADERS.X_CONTENT_TYPE_OPTIONS,
					'X-Frame-Options': SECURITY_CONFIG.HEADERS.X_FRAME_OPTIONS
				}
			});
		}

		// 6. Validate blog post exists
		let post;
		try {
			post = await import(`../../${params.slug}.svx`);
		} catch (importError) {
			securityMonitor.logEvent(SecurityEvents.INVALID_INPUT, {
				clientIP,
				reason: 'Blog post not found',
				slug: params.slug,
				userAgent
			});
			throw error(404, 'Blog post not found');
		}

		const { date, title } = post.metadata;

		// 7. Validate metadata
		const titleValidation = SecurityUtils.validateInput(title, 'title');
		if (!titleValidation.valid) {
			securityMonitor.logEvent(SecurityEvents.INVALID_INPUT, {
				clientIP,
				reason: `Invalid title: ${titleValidation.reason}`,
				slug: params.slug,
				userAgent
			});
			throw error(400, 'Invalid blog post metadata');
		}

		// 8. Generate image with security constraints
		const { fontSize, lines } = wrapText(title);
		const lineHeight = fontSize * 1.2;
		const totalHeight = lines.length * lineHeight;
		const startY = 315 - totalHeight / 2 + lineHeight / 2;

		const svg = generateSVG(lines, fontSize, lineHeight, startY);

		// 9. Size validation
		if (svg.length > SECURITY_CONFIG.LIMITS.MAX_SVG_SIZE) {
			securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
				clientIP,
				reason: `SVG too large: ${svg.length} bytes`,
				slug: params.slug,
				userAgent
			});
			throw error(400, 'Generated image too large');
		}

		// 10. Render image
		const renderer = new resvg.Resvg(svg, {
			font: {
				defaultFontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
				loadSystemFonts: true
			},
			logLevel: 'error'
		});

		const pngData = renderer.render();
		const pngBuffer = pngData.asPng();

		// 11. Output size validation
		if (pngBuffer.length > SECURITY_CONFIG.LIMITS.MAX_PNG_SIZE) {
			securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
				clientIP,
				reason: `PNG too large: ${pngBuffer.length} bytes`,
				slug: params.slug,
				userAgent
			});
			throw error(500, 'Generated image too large');
		}

		// 12. Cache the result
		if (imageCache.size < SECURITY_CONFIG.CACHE.MAX_ENTRIES) {
			imageCache.set(cacheKey, {
				buffer: pngBuffer,
				expiry: Date.now() + SECURITY_CONFIG.CACHE.TTL_MS
			});
		}

		// 13. Log successful generation
		const processingTime = Date.now() - startTime;
		securityMonitor.logEvent(SecurityEvents.SUCCESSFUL_GENERATION, {
			cached: false,
			clientIP,
			imageSize: pngBuffer.length,
			processingTime,
			slug: params.slug,
			userAgent
		});

		return new Response(pngBuffer, {
			headers: {
				'Cache-Control': SECURITY_CONFIG.HEADERS.CACHE_CONTROL,
				'Content-Security-Policy': SECURITY_CONFIG.HEADERS.CSP,
				'Content-Type': 'image/png',
				'Referrer-Policy': SECURITY_CONFIG.HEADERS.REFERRER_POLICY,
				'X-Cache': 'MISS',
				'X-Content-Type-Options': SECURITY_CONFIG.HEADERS.X_CONTENT_TYPE_OPTIONS,
				'X-Frame-Options': SECURITY_CONFIG.HEADERS.X_FRAME_OPTIONS,
				'X-Processing-Time': `${processingTime}ms`
			}
		});
	} catch (err) {
		// Enhanced error logging with security context
		const processingTime = Date.now() - startTime;
		securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
			clientIP,
			error: err.message,
			processingTime,
			slug: params.slug,
			status: err.status,
			userAgent
		});

		// Don't expose internal errors to clients
		if (err.status) {
			throw err;
		}

		throw error(500, 'Failed to generate social image');
	}
}

// Health check endpoint
export async function HEAD({ request }) {
	const clientIP = getClientIP(request);

	// Basic rate limiting for health checks too
	const rateLimitResult = rateLimiter.checkLimit(clientIP, 'health-check');
	if (!rateLimitResult.allowed) {
		return new Response(null, { status: 429 });
	}

	return new Response(null, {
		headers: {
			'Cache-Control': 'no-cache',
			'Content-Type': 'text/plain',
			'X-Service': 'social-image-generator'
		},
		status: 200
	});
}

// Secure SVG generation
function generateSVG(lines, fontSize, lineHeight, startY) {
	// XML encoding function
	function encodeXML(str) {
		return str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;');
	}

	// Generate text elements with proper encoding
	const textElements = lines
		.map((line, i) => {
			const encodedLine = encodeXML(line);
			const yPosition = startY + i * lineHeight;

			return `<text 
				x="80" 
				y="${yPosition}"
				fill="#ffffff" 
				font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
				font-size="${fontSize}" 
				font-weight="bold"
			>${encodedLine}</text>`;
		})
		.join('');

	return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
		<rect width="1200" height="630" fill="#1a1a1a"/>
		
		<!-- Favicon in top left -->
		<g transform="translate(80, 80)">
			<path d="M31.9093 134.669L0 25.3308H31.0019L55.7278 109.565L75.5388 25.3308H104.197L125.898 110.321L149.263 25.3308H160L129.754 134.669H101.248L80.2268 53.535L60.4159 134.669H31.9093ZM38.5633 126.427H51.569L24.3478 33.5728H11.4934L38.5633 126.427ZM107.75 126.427H120.756L97.0889 33.5728H84.2344L107.75 126.427Z" fill="#FFBB00" transform="scale(0.5)"/>
		</g>
		
		<!-- Title text -->
		<g>${textElements}</g>
		
		<!-- Website URL -->
		<text 
			x="80" 
			y="550" 
			fill="#666666" 
			font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
			font-size="36"
		>wentallout.io.vn</text>
	</svg>`;
}

// Secure text wrapping function
function wrapText(text, maxWidth = 800) {
	// Sanitize and validate input
	if (!text || typeof text !== 'string') {
		return { fontSize: 64, lines: ['Untitled'] };
	}

	// Remove potentially dangerous characters and normalize
	const sanitizedText = text
		.replace(/[<>&"']/g, '') // Remove HTML/XML special chars
		.replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
		.trim();

	if (!sanitizedText || sanitizedText.length === 0) {
		return { fontSize: 64, lines: ['Untitled'] };
	}

	// Limit text length
	const limitedText =
		sanitizedText.length > SECURITY_CONFIG.LIMITS.MAX_TITLE_LENGTH
			? sanitizedText.substring(0, SECURITY_CONFIG.LIMITS.MAX_TITLE_LENGTH) + '...'
			: sanitizedText;

	const words = limitedText.split(' ').filter((word) => word.length > 0);
	const lines = [];
	let currentLine = words[0] || '';

	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		const width = currentLine.length * 35; // Rough estimate

		if (width < maxWidth) {
			currentLine += ' ' + word;
		} else {
			lines.push(currentLine);
			currentLine = word;
		}
	}

	if (currentLine) {
		lines.push(currentLine);
	}

	// Limit number of lines and calculate font size
	const limitedLines = lines.slice(0, SECURITY_CONFIG.LIMITS.MAX_LINES);
	const fontSize = limitedText.length > 60 ? 48 : 64;

	return { fontSize, lines: limitedLines };
}
