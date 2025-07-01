import { json, error } from '@sveltejs/kit';
import { securityMiddleware, InputValidator } from '$lib/security/securityMiddleware.js';
import { securityMonitor, SecurityEvents } from '$lib/security/securityMonitor.js';

export async function POST({ request, getClientAddress }) {
	const clientIP = getClientAddress();
	const userAgent = request.headers.get('user-agent') || '';
	
	try {
		// Security validation
		const validation = securityMiddleware.validateRequest(request);
		if (!validation.valid) {
			securityMonitor.logEvent(SecurityEvents.RATE_LIMIT_EXCEEDED, {
				ip: clientIP,
				userAgent,
				endpoint: 'contact',
				reason: validation.error
			});
			throw error(validation.status || 403, validation.error);
		}
		
		// Parse and validate form data
		const formData = await request.formData();
		const sanitizedData = securityMiddleware.sanitizeFormData(formData);
		
		// Validate required fields
		const { name, email, message } = sanitizedData;
		
		if (!name || name.length < 2 || name.length > 100) {
			securityMonitor.logEvent(SecurityEvents.INVALID_INPUT, {
				ip: clientIP,
				userAgent,
				field: 'name',
				reason: 'Invalid name length'
			});
			throw error(400, 'Name must be between 2 and 100 characters');
		}
		
		if (!email || !InputValidator.isValidEmail(email)) {
			securityMonitor.logEvent(SecurityEvents.INVALID_INPUT, {
				ip: clientIP,
				userAgent,
				field: 'email',
				reason: 'Invalid email format'
			});
			throw error(400, 'Please provide a valid email address');
		}
		
		if (!message || message.length < 10 || message.length > 2000) {
			securityMonitor.logEvent(SecurityEvents.INVALID_INPUT, {
				ip: clientIP,
				userAgent,
				field: 'message',
				reason: 'Invalid message length'
			});
			throw error(400, 'Message must be between 10 and 2000 characters');
		}
		
		// Additional security checks
		const suspiciousPatterns = [
			/<script/i, /javascript:/i, /vbscript:/i, /onload=/i, /onerror=/i,
			/union\s+select/i, /drop\s+table/i, /insert\s+into/i,
			/http[s]?:\/\//i // URLs in message might be spam
		];
		
		const fullText = `${name} ${email} ${message}`;
		for (const pattern of suspiciousPatterns) {
			if (pattern.test(fullText)) {
				securityMonitor.logEvent(SecurityEvents.SUSPICIOUS_REQUEST, {
					ip: clientIP,
					userAgent,
					reason: 'Suspicious content detected',
					pattern: pattern.toString()
				});
				throw error(400, 'Message contains invalid content');
			}
		}
		
		// Check for spam indicators
		const spamIndicators = [
			message.includes('http') && message.split('http').length > 3, // Multiple URLs
			/(.)\1{10,}/.test(message), // Repeated characters
			message.split(' ').length < 3, // Too short
			/[A-Z]{10,}/.test(message) // Excessive caps
		];
		
		if (spamIndicators.some(indicator => indicator)) {
			securityMonitor.logEvent(SecurityEvents.SUSPICIOUS_REQUEST, {
				ip: clientIP,
				userAgent,
				reason: 'Potential spam detected'
			});
			throw error(400, 'Message appears to be spam');
		}
		
		// Log successful contact form submission
		securityMonitor.logEvent(SecurityEvents.SUCCESSFUL_GENERATION, {
			ip: clientIP,
			userAgent,
			endpoint: 'contact',
			action: 'form_submission'
		});
		
		// In a real application, you would:
		// 1. Send email notification
		// 2. Store in database
		// 3. Send confirmation to user
		
		// For now, return success (Netlify will handle the form)
		return json({
			success: true,
			message: 'Thank you for your message! I\'ll get back to you soon.'
		});
		
	} catch (err) {
		securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
			ip: clientIP,
			userAgent,
			endpoint: 'contact',
			error: err.message || 'Unknown error'
		});
		
		if (err.status) {
			throw err; // Re-throw SvelteKit errors
		}
		
		throw error(500, 'Failed to process contact form');
	}
}

// Generate CSRF token for forms
export async function GET({ getClientAddress }) {
	const clientIP = getClientAddress();
	
	try {
		const csrfToken = securityMiddleware.generateCSRFToken();
		
		return json({
			csrfToken,
			timestamp: Date.now()
		});
		
	} catch (err) {
		securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
			ip: clientIP,
			endpoint: 'contact',
			action: 'csrf_token_generation',
			error: err.message || 'Unknown error'
		});
		
		throw error(500, 'Failed to generate security token');
	}
}