// Security monitoring and alerting system
// This helps track and respond to security events

export class SecurityMonitor {
	constructor() {
		this.events = [];
		this.alerts = new Map();
		this.thresholds = {
			SUSPICIOUS_ACTIVITY_THRESHOLD: 5, // events per hour
			RATE_LIMIT_VIOLATIONS_THRESHOLD: 10,
			BOT_DETECTION_THRESHOLD: 20,
			ERROR_RATE_THRESHOLD: 0.1 // 10% error rate
		};
		
		// Start periodic cleanup
		setInterval(() => this.cleanup(), 60 * 60 * 1000); // Every hour
	}
	
	// Log security events
	logEvent(type, details) {
		const event = {
			id: this.generateEventId(),
			type,
			timestamp: Date.now(),
			details: this.sanitizeDetails(details),
			severity: this.calculateSeverity(type, details)
		};
		
		this.events.push(event);
		this.checkForAlerts(event);
		
		// Log to console with appropriate level
		const logMethod = event.severity === 'high' ? 'error' : 
						 event.severity === 'medium' ? 'warn' : 'info';
		console[logMethod](`[SECURITY] ${type}:`, event.details);
		
		return event.id;
	}
	
	// Generate unique event ID
	generateEventId() {
		return `sec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}
	
	// Sanitize sensitive details for logging
	sanitizeDetails(details) {
		const sanitized = { ...details };
		
		// Remove or mask sensitive data
		const sensitiveFields = ['password', 'token', 'key', 'secret', 'auth'];
		for (const field of sensitiveFields) {
			if (sanitized[field]) {
				sanitized[field] = '[REDACTED]';
			}
		}
		
		// Truncate long strings
		Object.keys(sanitized).forEach(key => {
			if (typeof sanitized[key] === 'string' && sanitized[key].length > 500) {
				sanitized[key] = sanitized[key].substring(0, 500) + '...[TRUNCATED]';
			}
		});
		
		return sanitized;
	}
	
	// Calculate event severity
	calculateSeverity(type, details) {
		const highSeverityTypes = [
			'SQL_INJECTION_ATTEMPT',
			'XSS_ATTEMPT',
			'PATH_TRAVERSAL_ATTEMPT',
			'BRUTE_FORCE_ATTACK',
			'MALICIOUS_IP_DETECTED'
		];
		
		const mediumSeverityTypes = [
			'RATE_LIMIT_EXCEEDED',
			'SUSPICIOUS_BOT_DETECTED',
			'INVALID_INPUT_PATTERN',
			'UNUSUAL_REQUEST_PATTERN'
		];
		
		if (highSeverityTypes.includes(type)) {
			return 'high';
		} else if (mediumSeverityTypes.includes(type)) {
			return 'medium';
		} else {
			return 'low';
		}
	}
	
	// Check for alert conditions
	checkForAlerts(event) {
		const now = Date.now();
		const oneHour = 60 * 60 * 1000;
		const recentEvents = this.events.filter(e => now - e.timestamp < oneHour);
		
		// Check for suspicious activity from same IP
		if (event.details.clientIP) {
			const ipEvents = recentEvents.filter(e => 
				e.details.clientIP === event.details.clientIP &&
				e.severity !== 'low'
			);
			
			if (ipEvents.length >= this.thresholds.SUSPICIOUS_ACTIVITY_THRESHOLD) {
				this.triggerAlert('SUSPICIOUS_IP_ACTIVITY', {
					ip: event.details.clientIP,
					eventCount: ipEvents.length,
					events: ipEvents.slice(-5) // Last 5 events
				});
			}
		}
		
		// Check for high error rates
		const errorEvents = recentEvents.filter(e => e.type.includes('ERROR'));
		const errorRate = errorEvents.length / Math.max(recentEvents.length, 1);
		
		if (errorRate > this.thresholds.ERROR_RATE_THRESHOLD && recentEvents.length > 10) {
			this.triggerAlert('HIGH_ERROR_RATE', {
				errorRate: Math.round(errorRate * 100),
				totalEvents: recentEvents.length,
				errorEvents: errorEvents.length
			});
		}
		
		// Check for bot attack patterns
		const botEvents = recentEvents.filter(e => e.type === 'BOT_DETECTED');
		if (botEvents.length >= this.thresholds.BOT_DETECTION_THRESHOLD) {
			this.triggerAlert('BOT_ATTACK_PATTERN', {
				botDetections: botEvents.length,
				uniqueIPs: new Set(botEvents.map(e => e.details.clientIP)).size
			});
		}
	}
	
	// Trigger security alert
	triggerAlert(alertType, details) {
		const alertKey = `${alertType}_${Date.now()}`;
		
		// Prevent duplicate alerts within short time frame
		const recentAlerts = Array.from(this.alerts.values())
			.filter(alert => Date.now() - alert.timestamp < 5 * 60 * 1000); // 5 minutes
		
		const duplicateAlert = recentAlerts.find(alert => 
			alert.type === alertType && 
			JSON.stringify(alert.details) === JSON.stringify(details)
		);
		
		if (duplicateAlert) {
			return; // Skip duplicate alert
		}
		
		const alert = {
			id: alertKey,
			type: alertType,
			timestamp: Date.now(),
			details,
			acknowledged: false
		};
		
		this.alerts.set(alertKey, alert);
		
		// Log alert
		console.error(`[SECURITY ALERT] ${alertType}:`, details);
		
		// In production, you might want to:
		// - Send email notifications
		// - Post to Slack/Discord
		// - Write to external monitoring system
		// - Trigger automated responses
		
		return alertKey;
	}
	
	// Get recent security events
	getRecentEvents(hours = 24, severity = null) {
		const cutoff = Date.now() - (hours * 60 * 60 * 1000);
		let events = this.events.filter(e => e.timestamp > cutoff);
		
		if (severity) {
			events = events.filter(e => e.severity === severity);
		}
		
		return events.sort((a, b) => b.timestamp - a.timestamp);
	}
	
	// Get active alerts
	getActiveAlerts() {
		return Array.from(this.alerts.values())
			.filter(alert => !alert.acknowledged)
			.sort((a, b) => b.timestamp - a.timestamp);
	}
	
	// Acknowledge alert
	acknowledgeAlert(alertId) {
		const alert = this.alerts.get(alertId);
		if (alert) {
			alert.acknowledged = true;
			alert.acknowledgedAt = Date.now();
			return true;
		}
		return false;
	}
	
	// Get security statistics
	getSecurityStats(hours = 24) {
		const cutoff = Date.now() - (hours * 60 * 60 * 1000);
		const recentEvents = this.events.filter(e => e.timestamp > cutoff);
		
		const stats = {
			totalEvents: recentEvents.length,
			eventsByType: {},
			eventsBySeverity: { high: 0, medium: 0, low: 0 },
			topIPs: {},
			topUserAgents: {},
			alertCount: this.getActiveAlerts().length
		};
		
		recentEvents.forEach(event => {
			// Count by type
			stats.eventsByType[event.type] = (stats.eventsByType[event.type] || 0) + 1;
			
			// Count by severity
			stats.eventsBySeverity[event.severity]++;
			
			// Count by IP
			if (event.details.clientIP) {
				stats.topIPs[event.details.clientIP] = (stats.topIPs[event.details.clientIP] || 0) + 1;
			}
			
			// Count by User Agent
			if (event.details.userAgent) {
				const ua = event.details.userAgent.substring(0, 50); // Truncate for grouping
				stats.topUserAgents[ua] = (stats.topUserAgents[ua] || 0) + 1;
			}
		});
		
		// Sort top IPs and User Agents
		stats.topIPs = Object.entries(stats.topIPs)
			.sort(([,a], [,b]) => b - a)
			.slice(0, 10)
			.reduce((obj, [ip, count]) => ({ ...obj, [ip]: count }), {});
			
		stats.topUserAgents = Object.entries(stats.topUserAgents)
			.sort(([,a], [,b]) => b - a)
			.slice(0, 10)
			.reduce((obj, [ua, count]) => ({ ...obj, [ua]: count }), {});
		
		return stats;
	}
	
	// Cleanup old events and alerts
	cleanup() {
		const now = Date.now();
		const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
		
		// Clean old events
		this.events = this.events.filter(event => now - event.timestamp < maxAge);
		
		// Clean old acknowledged alerts
		for (const [key, alert] of this.alerts.entries()) {
			if (alert.acknowledged && now - alert.timestamp > maxAge) {
				this.alerts.delete(key);
			}
		}
		
		console.log(`[SECURITY] Cleanup completed. Events: ${this.events.length}, Alerts: ${this.alerts.size}`);
	}
	
	// Export security report
	generateSecurityReport(hours = 24) {
		const stats = this.getSecurityStats(hours);
		const recentEvents = this.getRecentEvents(hours);
		const activeAlerts = this.getActiveAlerts();
		
		return {
			generatedAt: new Date().toISOString(),
			timeRange: `${hours} hours`,
			summary: stats,
			recentHighSeverityEvents: recentEvents.filter(e => e.severity === 'high').slice(0, 10),
			activeAlerts,
			recommendations: this.generateRecommendations(stats, activeAlerts)
		};
	}
	
	// Generate security recommendations
	generateRecommendations(stats, alerts) {
		const recommendations = [];
		
		if (stats.eventsBySeverity.high > 0) {
			recommendations.push({
				priority: 'high',
				message: `${stats.eventsBySeverity.high} high-severity security events detected. Immediate investigation required.`
			});
		}
		
		if (alerts.length > 5) {
			recommendations.push({
				priority: 'medium',
				message: `${alerts.length} active security alerts. Consider reviewing and acknowledging resolved issues.`
			});
		}
		
		const topIP = Object.keys(stats.topIPs)[0];
		const topIPCount = stats.topIPs[topIP];
		if (topIPCount > 50) {
			recommendations.push({
				priority: 'medium',
				message: `IP ${topIP} has generated ${topIPCount} security events. Consider investigating or blocking.`
			});
		}
		
		if (stats.eventsByType.BOT_DETECTED > 20) {
			recommendations.push({
				priority: 'low',
				message: `High bot activity detected (${stats.eventsByType.BOT_DETECTED} events). Consider implementing stricter bot detection.`
			});
		}
		
		return recommendations;
	}
}

// Singleton instance
export const securityMonitor = new SecurityMonitor();

// Convenience functions for common security events
export const SecurityEvents = {
	RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
	BOT_DETECTED: 'BOT_DETECTED',
	INVALID_INPUT: 'INVALID_INPUT',
	PATH_TRAVERSAL_ATTEMPT: 'PATH_TRAVERSAL_ATTEMPT',
	XSS_ATTEMPT: 'XSS_ATTEMPT',
	SQL_INJECTION_ATTEMPT: 'SQL_INJECTION_ATTEMPT',
	SUSPICIOUS_REQUEST: 'SUSPICIOUS_REQUEST',
	GENERATION_ERROR: 'GENERATION_ERROR',
	CACHE_HIT: 'CACHE_HIT',
	CACHE_MISS: 'CACHE_MISS',
	SUCCESSFUL_GENERATION: 'SUCCESSFUL_GENERATION'
};

export default {
	SecurityMonitor,
	securityMonitor,
	SecurityEvents
};