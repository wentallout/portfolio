import type { Handle, HandleServerError } from '@sveltejs/kit';
import { error, type RequestEvent } from '@sveltejs/kit';
import { securityMiddleware } from '$lib/security/securityMiddleware.js';
import { securityMonitor, SecurityEvents } from '$lib/security/securityMonitor.js';
import { dev } from '$app/environment';

// Generate nonce for CSP
function generateNonce(): string {
	return crypto.randomUUID().replace(/-/g, '');
}

export const handle: Handle = async ({ event, resolve }) => {
	const startTime = Date.now();
	const nonce = generateNonce();
	
	// Add nonce to event locals for use in templates
	event.locals.nonce = nonce;
	
	try {
		// Security validation
		const validation = securityMiddleware.validateRequest(event.request);
		
		if (!validation.valid) {
			// Log security event
			securityMonitor.logEvent(SecurityEvents.RATE_LIMIT_EXCEEDED, {
				ip: validation.ip || 'unknown',
				userAgent: event.request.headers.get('user-agent') || '',
				url: event.url.pathname,
				reason: validation.error
			});
			
			return new Response(JSON.stringify({ 
				error: validation.error,
				code: 'SECURITY_VIOLATION'
			}), {
				status: validation.status || 403,
				headers: {
					'Content-Type': 'application/json',
					...validation.headers
				}
			});
		}
		
		// Log successful request
		securityMonitor.logEvent(SecurityEvents.SUCCESSFUL_GENERATION, {
			ip: validation.ip,
			userAgent: event.request.headers.get('user-agent') || '',
			url: event.url.pathname,
			method: event.request.method,
			processingTime: Date.now() - startTime
		});
		
		// Resolve the request
		const response = await resolve(event, {
			preload: ({ type }) => {
				return type === 'font' || type === 'js' || type === 'css';
			},
			transformPageChunk: ({ html }) => {
				// Inject nonce into script tags
				return html.replace(/%sveltekit\.nonce%/g, nonce);
			}
		});
		
		// Apply security headers
		return securityMiddleware.applySecurityHeaders(response, nonce);
		
	} catch (err) {
		// Log security error
		securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
			ip: event.getClientAddress(),
			userAgent: event.request.headers.get('user-agent') || '',
			url: event.url.pathname,
			error: err instanceof Error ? err.message : 'Unknown error',
			processingTime: Date.now() - startTime
		});
		
		// Don't expose internal errors in production
		if (!dev) {
			return new Response(JSON.stringify({ 
				error: 'Internal server error',
				code: 'INTERNAL_ERROR'
			}), {
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			});
		}
		
		throw err;
	}
};

export const handleError: HandleServerError = async ({ error, event, status, message }) => {
	// Log error for security monitoring
	securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
		ip: event.getClientAddress(),
		userAgent: event.request.headers.get('user-agent') || '',
		url: event.url.pathname,
		error: error instanceof Error ? error.message : 'Unknown error',
		status,
		message
	});
	
	// Return generic error message in production
	if (!dev) {
		return {
			message: 'An unexpected error occurred',
			code: 'INTERNAL_ERROR'
		};
	}
	
	return {
		message,
		code: error instanceof Error ? error.name : 'UNKNOWN_ERROR'
	};
};