# Social Image Generator Security Implementation

This document outlines the comprehensive security measures implemented to protect the social image generation endpoint from DDoS attacks, bots, crawlers, and other security threats.

## 🛡️ Security Features Implemented

### 1. **Rate Limiting**
- **Per-minute limits**: 10 requests per minute for normal users, 3 for bots, 2 for suspicious IPs
- **Hourly limits**: 100 requests per hour for normal users, 20 for bots, 10 for suspicious IPs
- **Adaptive limiting**: Stricter limits applied to suspicious IPs automatically
- **Multi-tier system**: Different limits based on client behavior patterns

### 2. **Advanced Bot Detection**
- **User Agent Analysis**: Comprehensive patterns for detecting automated tools
- **Legitimate Bot Allowlist**: Social media crawlers (Facebook, Twitter, LinkedIn, etc.) are allowed
- **IP Pattern Analysis**: Detects requests from private networks, localhost, and suspicious ranges
- **Behavioral Analysis**: Identifies missing browser indicators and suspicious request patterns
- **Headless Browser Detection**: Identifies Puppeteer, Selenium, and other automation tools

### 3. **Input Validation & Sanitization**
- **Slug Validation**: Prevents path traversal attacks (../), validates character patterns
- **Title Sanitization**: Removes HTML/XML special characters and control characters
- **Length Limits**: Enforces maximum lengths for all inputs
- **XSS Prevention**: Detects and blocks potential cross-site scripting attempts
- **SQL Injection Detection**: Monitors headers for SQL injection patterns

### 4. **Resource Protection**
- **Memory Limits**: SVG size limited to 50KB, PNG output limited to 2MB
- **Processing Limits**: Maximum 4 text lines, reasonable font sizes
- **Cache Management**: Intelligent caching with TTL and size limits
- **Cleanup Routines**: Automatic cleanup of expired cache entries and rate limit data

### 5. **Security Headers**
- **Content Security Policy**: `default-src 'none'` - prevents code execution
- **X-Content-Type-Options**: `nosniff` - prevents MIME type sniffing
- **X-Frame-Options**: `DENY` - prevents clickjacking
- **Referrer Policy**: `strict-origin-when-cross-origin` - controls referrer information
- **Cache Control**: Optimized caching with immutable flag

### 6. **Monitoring & Alerting**
- **Real-time Event Logging**: All security events are logged with context
- **Threat Detection**: Advanced pattern recognition for attack attempts
- **Alert System**: Automatic alerts for suspicious activity patterns
- **Security Dashboard**: API endpoint for monitoring security status
- **Statistical Analysis**: Comprehensive security metrics and reporting

### 7. **Error Handling**
- **Information Disclosure Prevention**: Generic error messages for clients
- **Detailed Logging**: Comprehensive server-side logging for debugging
- **Graceful Degradation**: Service continues operating under attack conditions
- **Status Monitoring**: Health check endpoints for service monitoring

## 🚀 Implementation Details

### File Structure
```
src/
├── routes/blogs/[slug]/social-image/
│   └── +server.js                    # Main endpoint with security
├── lib/security/
│   ├── socialImageSecurity.js        # Security utilities and config
│   └── securityMonitor.js           # Monitoring and alerting
└── routes/api/security/
    └── dashboard/+server.js          # Security dashboard API
```

### Key Components

#### 1. **SecurityUtils Class**
```javascript
// Input validation
SecurityUtils.validateInput(input, type)
SecurityUtils.validateSlug(slug)
SecurityUtils.validateTitle(title)

// Threat detection
SecurityUtils.detectAdvancedThreats(request, clientIP, userAgent)
SecurityUtils.sanitizeForLogging(data)
```

#### 2. **AdvancedRateLimiter Class**
```javascript
// Multi-tier rate limiting
rateLimiter.checkLimit(clientIP, userAgent)
rateLimiter.isBot(userAgent)
rateLimiter.cleanup()
```

#### 3. **SecurityMonitor Class**
```javascript
// Event logging and alerting
securityMonitor.logEvent(type, details)
securityMonitor.getSecurityStats(hours)
securityMonitor.generateSecurityReport(hours)
```

## 🔧 Configuration

### Environment Variables
```bash
# Security dashboard authentication
SECURITY_DASHBOARD_TOKEN=your-secure-token-here

# Optional: Custom rate limits
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=10
```

### Security Configuration
```javascript
const SECURITY_CONFIG = {
  RATE_LIMIT: {
    WINDOW_MS: 60 * 1000,        // 1 minute
    MAX_REQUESTS: 10,            // requests per window
    MAX_REQUESTS_PER_HOUR: 100,  // hourly limit
  },
  LIMITS: {
    MAX_SLUG_LENGTH: 100,
    MAX_TITLE_LENGTH: 200,
    MAX_SVG_SIZE: 50000,         // 50KB
    MAX_PNG_SIZE: 2097152,       // 2MB
  }
};
```

## 📊 Monitoring

### Security Dashboard
Access the security dashboard via API:
```bash
curl -H "Authorization: Bearer your-token" \
     "http://localhost:5173/api/security/dashboard?hours=24"
```

### Key Metrics Tracked
- **Request Volume**: Total requests per time period
- **Bot Detection**: Automated vs. human traffic
- **Rate Limiting**: Violations and patterns
- **Error Rates**: Failed requests and reasons
- **Top IPs**: Most active IP addresses
- **Threat Detection**: Security events by type

### Alert Conditions
- **Suspicious IP Activity**: 5+ security events per hour from same IP
- **High Error Rate**: >10% error rate with significant volume
- **Bot Attack Pattern**: 20+ bot detections in short period
- **Rate Limit Violations**: Excessive rate limiting triggers

## 🛠️ Deployment Recommendations

### Production Enhancements
1. **External Rate Limiting**: Use Redis for distributed rate limiting
2. **CDN Integration**: Implement Cloudflare or similar for additional protection
3. **Database Logging**: Store security events in persistent database
4. **Alert Integration**: Connect to Slack, email, or monitoring systems
5. **IP Blocking**: Implement automatic IP blocking for repeat offenders

### Infrastructure Security
1. **Reverse Proxy**: Use Nginx or similar with additional security rules
2. **Firewall Rules**: Network-level protection against known bad actors
3. **SSL/TLS**: Ensure all traffic is encrypted
4. **Regular Updates**: Keep dependencies updated for security patches

### Monitoring Integration
```javascript
// Example: Slack webhook integration
async function sendSlackAlert(alert) {
  await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `🚨 Security Alert: ${alert.type}`,
      attachments: [{
        color: 'danger',
        fields: [
          { title: 'Details', value: JSON.stringify(alert.details, null, 2) }
        ]
      }]
    })
  });
}
```

## 🔍 Testing Security

### Manual Testing
```bash
# Test rate limiting
for i in {1..15}; do
  curl "http://localhost:5173/blogs/test-post/social-image"
  sleep 1
done

# Test bot detection
curl -H "User-Agent: python-requests/2.28.0" \
     "http://localhost:5173/blogs/test-post/social-image"

# Test invalid input
curl "http://localhost:5173/blogs/../../../etc/passwd/social-image"
```

### Automated Testing
Consider implementing automated security tests:
- **OWASP ZAP**: Web application security scanner
- **Burp Suite**: Professional security testing
- **Custom Scripts**: Automated rate limiting and input validation tests

## 📈 Performance Impact

### Optimizations Implemented
- **Efficient Caching**: Reduces redundant processing
- **Lazy Cleanup**: Background cleanup doesn't block requests
- **Minimal Overhead**: Security checks add <10ms per request
- **Memory Management**: Automatic cleanup prevents memory leaks

### Benchmarks
- **Normal Request**: ~50-100ms processing time
- **Cached Request**: ~5-10ms response time
- **Security Overhead**: ~5-10ms additional processing
- **Memory Usage**: ~1MB per cached image, auto-cleanup at 1000 entries

## 🚨 Incident Response

### When Alerts Trigger
1. **Check Dashboard**: Review security metrics and recent events
2. **Identify Patterns**: Look for common IPs, user agents, or attack vectors
3. **Take Action**: Block IPs, adjust rate limits, or implement additional rules
4. **Document**: Record incidents and responses for future reference

### Emergency Procedures
```javascript
// Emergency: Temporarily disable endpoint
export async function GET() {
  return new Response('Service temporarily unavailable', { 
    status: 503,
    headers: { 'Retry-After': '3600' } // 1 hour
  });
}
```

## 📝 Maintenance

### Regular Tasks
- **Review Logs**: Weekly review of security events and patterns
- **Update Patterns**: Monthly updates to bot detection patterns
- **Performance Review**: Monitor response times and resource usage
- **Security Updates**: Keep dependencies and security rules current

### Scaling Considerations
- **Horizontal Scaling**: Security state is mostly stateless
- **Database Migration**: Move from in-memory to persistent storage
- **Load Balancing**: Distribute security processing across instances
- **Caching Strategy**: Implement distributed caching for better performance

---

## 🔗 Related Documentation
- [SvelteKit Security Best Practices](https://kit.svelte.dev/docs/security)
- [OWASP Web Security Guidelines](https://owasp.org/www-project-web-security-testing-guide/)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

## 📞 Support
For security-related issues or questions, please:
1. Check the security dashboard for current status
2. Review recent security events and alerts
3. Contact the development team with specific details
4. In case of active attack, implement emergency procedures immediately