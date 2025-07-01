// Comprehensive security middleware for SvelteKit
import { dev } from '$app/environment';

// Security configuration
const SECURITY_CONFIG = {
	// Content Security Policy
	CSP: {
		'default-src': ["'self'"],
		'script-src': [
			"'self'",
			"'unsafe-inline'", // Required for SvelteKit
			"'unsafe-eval'", // Required for dev mode
			'https://giscus.app',
			'https://www.googletagmanager.com',
			'https://www.google-analytics.com'
		],
		'style-src': [
			"'self'",
			"'unsafe-inline'", // Required for component styles
			'https://fonts.googleapis.com'
		],
		'font-src': [
			"'self'",
			'https://fonts.gstatic.com',
			'data:'
		],
		'img-src': [
			"'self'",
			'data:',
			'https:',
			'blob:'
		],
		'media-src': [
			"'self'",
			'data:',
			'blob:'
		],
		'connect-src': [
			"'self'",
			'https://api.github.com',
			'https://giscus.app',
			'wss://giscus.app'
		],
		'frame-src': [
			'https://giscus.app'
		],
		'worker-src': [
			"'self'",
			'blob:'
		],
		'object-src': ["'none'"],
		'base-uri': ["'self'"],
		'form-action': ["'self'"],
		'frame-ancestors': ["'none'"],
		'upgrade-insecure-requests': []
	},
	
	// Security headers
	HEADERS: {
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'X-XSS-Protection': '1; mode=block',
		'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
		'Cross-Origin-Embedder-Policy': 'credentialless',
		'Cross-Origin-Opener-Policy': 'same-origin',
		'Cross-Origin-Resource-Policy': 'same-origin'
	}
};

// Generate CSP string
function generateCSP() {
	const cspParts = [];
	
	for (const [directive, sources] of Object.entries(SECURITY_CONFIG.CSP)) {
		if (sources.length === 0) {
			cspParts.push(directive.replace(/([A-Z])/g, '-$1').toLowerCase());
		} else {
			const sourcesStr = sources.join(' ');
			cspParts.push(`${directive.replace(/([A-Z])/g, '-$1').toLowerCase()} ${sourcesStr}`);
		}
	}
	
	return cspParts.join('; ');
}

// Input validation utilities
export const InputValidator = {
	// Sanitize HTML content
	sanitizeHtml(input) {
		if (typeof input !== 'string') return '';
		
		return input
			.replace(/[<>]/g, '') // Remove HTML tags
			.replace(/javascript:/gi, '') // Remove javascript: URLs
			.replace(/on\w+\s*=/gi, '') // Remove event handlers
			.trim();
	},
	
	// Validate email format
	isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email) && email.length <= 254;
	},
	
	// Validate URL format
	isValidUrl(url) {
		try {
			const urlObj = new URL(url);
			return ['http:', 'https:'].includes(urlObj.protocol);
		} catch {
			return false;
		}
	},
	
	// Validate slug format
	isValidSlug(slug) {
		const slugRegex = /^[a-zA-Z0-9._-]+$/;
		return slugRegex.test(slug) && 
			   slug.length <= 100 && 
			   !slug.includes('..') &&
			   !slug.startsWith('.') &&
			   !slug.endsWith('.');
	},
	
	// Sanitize user input
	sanitizeInput(input, maxLength = 1000) {
		if (typeof input !== 'string') return '';
		
		return input
			.replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
			.replace(/[<>&"']/g, (match) => {
				const entities = {
					'<': '&lt;',
					'>': '&gt;',
					'&': '&amp;',
					'"': '&quot;',
					"'": '&#x27;'
				};
				return entities[match];
			})
			.slice(0, maxLength)
			.trim();
	}
};

// CSRF protection
export class CSRFProtection {
	constructor() {
		this.tokens = new Map();
		this.cleanup();
	}
	
	generateToken() {
		const token = crypto.randomUUID();
		const expiry = Date.now() + (60 * 60 * 1000); // 1 hour
		this.tokens.set(token, expiry);
		return token;
	}
	
	validateToken(token) {
		const expiry = this.tokens.get(token);
		if (!expiry || Date.now() > expiry) {
			this.tokens.delete(token);
			return false;
		}
		return true;
	}
	
	cleanup() {
		setInterval(() => {
			const now = Date.now();
			for (const [token, expiry] of this.tokens.entries()) {
				if (now > expiry) {
					this.tokens.delete(token);
				}
			}
		}, 15 * 60 * 1000); // Cleanup every 15 minutes
	}
}

// Enhanced rate limiting
export class EnhancedRateLimiter {
	constructor() {
		this.requests = new Map();
		this.blockedIPs = new Set();
		this.suspiciousIPs = new Map();
	}
	
	checkRateLimit(ip, endpoint = 'default') {
		const key = `${ip}:${endpoint}`;
		const now = Date.now();
		
		// Check if IP is blocked
		if (this.blockedIPs.has(ip)) {
			return { allowed: false, reason: 'IP blocked', resetTime: null };
		}
		
		// Get or create request record
		let record = this.requests.get(key);
		if (!record) {
			record = {
				count: 0,
				windowStart: now,
				violations: 0
			};
		}
		
		// Define limits based on endpoint
		const limits = this.getLimitsForEndpoint(endpoint);
		
		// Reset window if expired
		if (now - record.windowStart > limits.window) {
			record.count = 0;
			record.windowStart = now;
		}
		
		// Check if limit exceeded
		if (record.count >= limits.max) {
			record.violations++;
			
			// Progressive penalties
			if (record.violations >= 3) {
				this.blockedIPs.add(ip);
				this.scheduleUnblock(ip, 60 * 60 * 1000); // Block for 1 hour
			} else if (record.violations >= 2) {
				this.suspiciousIPs.set(ip, now + (10 * 60 * 1000)); // Mark suspicious for 10 minutes
			}
			
			this.requests.set(key, record);
			return { 
				allowed: false, 
				reason: 'Rate limit exceeded', 
				resetTime: record.windowStart + limits.window 
			};
		}
		
		// Increment counter
		record.count++;
		this.requests.set(key, record);
		
		return { allowed: true };
	}
	
	getLimitsForEndpoint(endpoint) {
		const limits = {
			'api/blogs': { max: 30, window: 60000 }, // 30 requests per minute
			'social-image': { max: 10, window: 60000 }, // 10 requests per minute
			'contact': { max: 5, window: 300000 }, // 5 requests per 5 minutes
			'rss.xml': { max: 10, window: 300000 }, // 10 requests per 5 minutes
			'default': { max: 60, window: 60000 } // 60 requests per minute
		};
		
		return limits[endpoint] || limits.default;
	}
	
	scheduleUnblock(ip, duration) {
		setTimeout(() => {
			this.blockedIPs.delete(ip);
		}, duration);
	}
	
	isSuspicious(ip) {
		const suspiciousUntil = this.suspiciousIPs.get(ip);
		if (suspiciousUntil && Date.now() < suspiciousUntil) {
			return true;
		}
		this.suspiciousIPs.delete(ip);
		return false;
	}
}

// Security middleware function
export function createSecurityMiddleware() {
	const csrfProtection = new CSRFProtection();
	const rateLimiter = new EnhancedRateLimiter();
	
	return {
		// Apply security headers
		applySecurityHeaders(response, nonce = null) {
			// Generate CSP with nonce if provided
			let csp = generateCSP();
			if (nonce) {
				csp = csp.replace("'unsafe-inline'", `'nonce-${nonce}'`);
			}
			
			// Apply all security headers
			response.headers.set('Content-Security-Policy', csp);
			
			for (const [header, value] of Object.entries(SECURITY_CONFIG.HEADERS)) {
				response.headers.set(header, value);
			}
			
			// Add HSTS in production
			if (!dev) {
				response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
			}
			
			return response;
		},
		
		// Validate and sanitize request
		validateRequest(request, options = {}) {
			const url = new URL(request.url);
			const ip = request.headers.get('x-forwarded-for') || 
					  request.headers.get('cf-connecting-ip') || 
					  'unknown';
			
			// Rate limiting
			const endpoint = this.getEndpointFromPath(url.pathname);
			const rateLimitResult = rateLimiter.checkRateLimit(ip, endpoint);
			
			if (!rateLimitResult.allowed) {
				return {
					valid: false,
					error: rateLimitResult.reason,
					status: 429,
					headers: rateLimitResult.resetTime ? {
						'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
					} : {}
				};
			}
			
			// CSRF protection for state-changing requests
			if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
				const csrfToken = request.headers.get('x-csrf-token') || 
								 url.searchParams.get('csrf_token');
				
				if (!csrfToken || !csrfProtection.validateToken(csrfToken)) {
					return {
						valid: false,
						error: 'Invalid CSRF token',
						status: 403
					};
				}
			}
			
			return { valid: true, ip, endpoint };
		},
		
		// Get endpoint identifier from path
		getEndpointFromPath(pathname) {
			if (pathname.includes('/api/blogs')) return 'api/blogs';
			if (pathname.includes('/social-image')) return 'social-image';
			if (pathname.includes('/contact')) return 'contact';
			if (pathname.includes('/rss.xml')) return 'rss.xml';
			return 'default';
		},
		
		// Generate CSRF token
		generateCSRFToken() {
			return csrfProtection.generateToken();
		},
		
		// Sanitize form data
		sanitizeFormData(formData) {
			const sanitized = {};
			
			for (const [key, value] of formData.entries()) {
				if (typeof value === 'string') {
					sanitized[key] = InputValidator.sanitizeInput(value);
				}
			}
			
			return sanitized;
		},
		
		// Check if IP is suspicious
		isSuspiciousIP(ip) {
			return rateLimiter.isSuspicious(ip);
		}
	};
}

// Export singleton instance
export const securityMiddleware = createSecurityMiddleware();