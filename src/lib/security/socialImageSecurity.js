// Security configuration for social image generation
// This file contains reusable security utilities

export const SECURITY_CONFIG = {
	// Rate limiting
	RATE_LIMIT: {
		WINDOW_MS: 60 * 1000, // 1 minute
		MAX_REQUESTS: 10, // requests per window
		MAX_REQUESTS_PER_HOUR: 100, // additional hourly limit
		STRICT_MODE: true // Enable stricter limits for suspicious IPs
	},
	
	// Cache settings
	CACHE: {
		TTL_MS: 24 * 60 * 60 * 1000, // 24 hours
		MAX_ENTRIES: 1000, // Maximum cached images
		CLEANUP_INTERVAL_MS: 5 * 60 * 1000 // 5 minutes
	},
	
	// Size limits
	LIMITS: {
		MAX_SLUG_LENGTH: 100,
		MAX_TITLE_LENGTH: 200,
		MAX_SVG_SIZE: 50000, // 50KB
		MAX_PNG_SIZE: 2 * 1024 * 1024, // 2MB
		MAX_LINES: 4 // Maximum text lines in image
	},
	
	// Security headers
	HEADERS: {
		CACHE_CONTROL: 'public, max-age=31536000, immutable',
		CSP: "default-src 'none'",
		X_CONTENT_TYPE_OPTIONS: 'nosniff',
		X_FRAME_OPTIONS: 'DENY',
		REFERRER_POLICY: 'strict-origin-when-cross-origin'
	}
};

// Enhanced bot detection patterns
export const BOT_PATTERNS = {
	USER_AGENTS: [
		// Generic bots
		/bot/i, /crawler/i, /spider/i, /scraper/i, /curl/i, /wget/i,
		
		// Programming languages/tools
		/python/i, /java/i, /php/i, /ruby/i, /perl/i, /go-http-client/i,
		/http_request/i, /node/i, /axios/i, /fetch/i,
		
		// Social media bots (some are legitimate)
		/facebookexternalhit/i, /twitterbot/i, /linkedinbot/i, /whatsapp/i,
		/telegrambot/i, /slackbot/i, /discordbot/i,
		
		// Search engine bots
		/googlebot/i, /bingbot/i, /yandexbot/i, /baiduspider/i,
		/duckduckbot/i, /applebot/i,
		
		// SEO/Analysis bots
		/semrushbot/i, /ahrefsbot/i, /mj12bot/i, /dotbot/i,
		/blexbot/i, /petalbot/i, /screaming frog/i,
		
		// Security scanners
		/nmap/i, /masscan/i, /zmap/i, /nikto/i, /sqlmap/i,
		/burp/i, /owasp/i, /nessus/i,
		
		// Monitoring tools
		/pingdom/i, /uptimerobot/i, /statuscake/i, /newrelic/i,
		
		// Headless browsers (often used by bots)
		/headlesschrome/i, /phantomjs/i, /puppeteer/i, /playwright/i,
		/selenium/i, /webdriver/i
	],
	
	// Legitimate social media crawlers (allow these)
	LEGITIMATE_BOTS: [
		/facebookexternalhit/i,
		/twitterbot/i,
		/linkedinbot/i,
		/slackbot/i,
		/discordbot/i,
		/whatsapp/i,
		/telegrambot/i,
		/skypebot/i,
		/pinterest/i,
		/redditbot/i
	],
	
	// Suspicious IP patterns
	SUSPICIOUS_IPS: [
		/^10\./, /^172\.16\./, /^192\.168\./, // Private networks
		/^127\./, // Localhost
		/^169\.254\./, // Link-local
		/^224\./, /^239\./, // Multicast
		/^0\./, /^255\./, // Invalid ranges
		/^::1/, /^fc00:/, /^fe80:/ // IPv6 private/local
	],
	
	// Known malicious IP ranges (you can expand this with threat intelligence)
	BLOCKED_IP_RANGES: [
		// Add known malicious IP ranges here
		// Example: /^185\.220\./ // Tor exit nodes (if you want to block Tor)
	]
};

// Advanced security utilities
export class SecurityUtils {
	static validateInput(input, type = 'slug') {
		if (!input || typeof input !== 'string') {
			return { valid: false, reason: 'Invalid input type' };
		}
		
		switch (type) {
			case 'slug':
				return this.validateSlug(input);
			case 'title':
				return this.validateTitle(input);
			default:
				return { valid: false, reason: 'Unknown validation type' };
		}
	}
	
	static validateSlug(slug) {
		// Length check
		if (slug.length > SECURITY_CONFIG.LIMITS.MAX_SLUG_LENGTH) {
			return { valid: false, reason: 'Slug too long' };
		}
		
		// Pattern validation
		const validPattern = /^[a-zA-Z0-9._-]+$/;
		if (!validPattern.test(slug)) {
			return { valid: false, reason: 'Invalid characters in slug' };
		}
		
		// Path traversal check
		const pathTraversalPattern = /\.\.|\/|\\|%2e|%2f|%5c/i;
		if (pathTraversalPattern.test(slug)) {
			return { valid: false, reason: 'Path traversal attempt detected' };
		}
		
		// Additional security checks
		if (slug.startsWith('.') || slug.endsWith('.')) {
			return { valid: false, reason: 'Invalid slug format' };
		}
		
		// Check for common attack patterns
		const attackPatterns = [
			/script/i, /javascript/i, /vbscript/i, /onload/i, /onerror/i,
			/eval/i, /expression/i, /url\(/i, /import/i, /@import/i
		];
		
		for (const pattern of attackPatterns) {
			if (pattern.test(slug)) {
				return { valid: false, reason: 'Potential XSS attempt detected' };
			}
		}
		
		return { valid: true };
	}
	
	static validateTitle(title) {
		if (title.length > SECURITY_CONFIG.LIMITS.MAX_TITLE_LENGTH) {
			return { valid: false, reason: 'Title too long' };
		}
		
		// Check for potential XSS
		const xssPatterns = [
			/<script/i, /<\/script/i, /javascript:/i, /vbscript:/i,
			/onload=/i, /onerror=/i, /onclick=/i, /onmouseover=/i,
			/<iframe/i, /<object/i, /<embed/i, /<link/i, /<meta/i
		];
		
		for (const pattern of xssPatterns) {
			if (pattern.test(title)) {
				return { valid: false, reason: 'Potential XSS in title' };
			}
		}
		
		return { valid: true };
	}
	
	static detectAdvancedThreats(request, clientIP, userAgent) {
		const threats = [];
		
		// Check for SQL injection patterns in headers
		const sqlPatterns = [
			/union\s+select/i, /or\s+1\s*=\s*1/i, /drop\s+table/i,
			/insert\s+into/i, /delete\s+from/i, /update\s+set/i,
			/exec\s*\(/i, /script\s*\(/i
		];
		
		const headers = Object.fromEntries(request.headers.entries());
		for (const [key, value] of Object.entries(headers)) {
			for (const pattern of sqlPatterns) {
				if (pattern.test(value)) {
					threats.push(`SQL injection pattern in header ${key}`);
				}
			}
		}
		
		// Check for suspicious header combinations
		if (!userAgent || userAgent.length < 10) {
			threats.push('Missing or suspicious user agent');
		}
		
		// Check for automated tool signatures
		const automationSignatures = [
			'python-requests', 'curl/', 'wget/', 'libwww-perl',
			'Go-http-client', 'Java/', 'Apache-HttpClient',
			'okhttp/', 'node-fetch', 'axios/'
		];
		
		for (const signature of automationSignatures) {
			if (userAgent.toLowerCase().includes(signature.toLowerCase())) {
				threats.push(`Automation tool detected: ${signature}`);
			}
		}
		
		// Check for rapid-fire requests (would need to be implemented with proper storage)
		// This is a placeholder for more advanced rate limiting
		
		return threats;
	}
	
	static sanitizeForLogging(data) {
		// Remove sensitive information from logs
		const sanitized = { ...data };
		
		// Remove or mask sensitive headers
		if (sanitized.headers) {
			const sensitiveHeaders = ['authorization', 'cookie', 'x-api-key'];
			for (const header of sensitiveHeaders) {
				if (sanitized.headers[header]) {
					sanitized.headers[header] = '[REDACTED]';
				}
			}
		}
		
		// Truncate long values
		Object.keys(sanitized).forEach(key => {
			if (typeof sanitized[key] === 'string' && sanitized[key].length > 1000) {
				sanitized[key] = sanitized[key].substring(0, 1000) + '...[TRUNCATED]';
			}
		});
		
		return sanitized;
	}
}

// Rate limiting with multiple tiers
export class AdvancedRateLimiter {
	constructor() {
		this.store = new Map();
		this.hourlyStore = new Map();
		this.suspiciousIPs = new Set();
	}
	
	checkLimit(clientIP, userAgent = '') {
		const now = Date.now();
		const isBot = this.isBot(userAgent);
		const isSuspicious = this.suspiciousIPs.has(clientIP);
		
		// Different limits for different types of clients
		let limits;
		if (isSuspicious) {
			limits = { window: 60000, max: 2, hourlyMax: 10 }; // Very strict
		} else if (isBot) {
			limits = { window: 60000, max: 3, hourlyMax: 20 }; // Strict for bots
		} else {
			limits = { window: 60000, max: 10, hourlyMax: 100 }; // Normal for humans
		}
		
		// Check minute-based limit
		const minuteKey = `${clientIP}_minute`;
		if (!this.checkWindowLimit(minuteKey, limits.window, limits.max, now)) {
			return { allowed: false, reason: 'Rate limit exceeded (per minute)' };
		}
		
		// Check hourly limit
		const hourKey = `${clientIP}_hour`;
		if (!this.checkWindowLimit(hourKey, 3600000, limits.hourlyMax, now)) {
			// Mark as suspicious if they hit hourly limit
			this.suspiciousIPs.add(clientIP);
			return { allowed: false, reason: 'Rate limit exceeded (per hour)' };
		}
		
		return { allowed: true };
	}
	
	checkWindowLimit(key, windowMs, maxRequests, now) {
		if (!this.store.has(key)) {
			this.store.set(key, { count: 1, resetTime: now + windowMs });
			return true;
		}
		
		const data = this.store.get(key);
		
		if (now > data.resetTime) {
			this.store.set(key, { count: 1, resetTime: now + windowMs });
			return true;
		}
		
		if (data.count >= maxRequests) {
			return false;
		}
		
		data.count++;
		return true;
	}
	
	isBot(userAgent) {
		if (!userAgent) return true;
		
		for (const pattern of BOT_PATTERNS.USER_AGENTS) {
			if (pattern.test(userAgent)) {
				// Check if it's a legitimate bot
				for (const legitPattern of BOT_PATTERNS.LEGITIMATE_BOTS) {
					if (legitPattern.test(userAgent)) {
						return false; // It's legitimate, don't treat as bot
					}
				}
				return true;
			}
		}
		
		return false;
	}
	
	cleanup() {
		const now = Date.now();
		
		for (const [key, value] of this.store.entries()) {
			if (now > value.resetTime) {
				this.store.delete(key);
			}
		}
		
		// Clean suspicious IPs after 24 hours
		// (In a real implementation, you'd want more sophisticated logic)
	}
}

export default {
	SECURITY_CONFIG,
	BOT_PATTERNS,
	SecurityUtils,
	AdvancedRateLimiter
};