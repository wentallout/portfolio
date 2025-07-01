import { json, error } from '@sveltejs/kit';
import { securityMonitor } from '$lib/security/securityMonitor.js';

// Simple authentication - in production, use proper auth
const ADMIN_TOKEN = process.env.SECURITY_DASHBOARD_TOKEN || 'your-secure-token-here';

export async function GET({ request, url }) {
	// Basic authentication check
	const authHeader = request.headers.get('authorization');
	const token = authHeader?.replace('Bearer ', '');
	
	if (!token || token !== ADMIN_TOKEN) {
		throw error(401, 'Unauthorized');
	}
	
	// Get query parameters
	const hours = parseInt(url.searchParams.get('hours') || '24');
	const severity = url.searchParams.get('severity') || null;
	
	try {
		// Generate comprehensive security report
		const report = securityMonitor.generateSecurityReport(hours);
		const recentEvents = securityMonitor.getRecentEvents(hours, severity);
		const activeAlerts = securityMonitor.getActiveAlerts();
		
		return json({
			success: true,
			data: {
				...report,
				recentEvents: recentEvents.slice(0, 50), // Limit to 50 most recent
				pagination: {
					total: recentEvents.length,
					showing: Math.min(50, recentEvents.length),
					hours
				}
			}
		});
		
	} catch (err) {
		console.error('Security dashboard error:', err);
		throw error(500, 'Failed to generate security report');
	}
}

export async function POST({ request }) {
	// Handle alert acknowledgment
	const authHeader = request.headers.get('authorization');
	const token = authHeader?.replace('Bearer ', '');
	
	if (!token || token !== ADMIN_TOKEN) {
		throw error(401, 'Unauthorized');
	}
	
	try {
		const { action, alertId } = await request.json();
		
		if (action === 'acknowledge' && alertId) {
			const success = securityMonitor.acknowledgeAlert(alertId);
			return json({ success, message: success ? 'Alert acknowledged' : 'Alert not found' });
		}
		
		throw error(400, 'Invalid action');
		
	} catch (err) {
		console.error('Security dashboard action error:', err);
		throw error(500, 'Failed to process action');
	}
}