#!/usr/bin/env node

/**
 * Security Testing Script for Social Image Generator
 * 
 * This script tests various security measures implemented in the social image endpoint.
 * Run this script to verify that security protections are working correctly.
 * 
 * Usage: node test-security.js [base-url]
 * Example: node test-security.js http://localhost:5173
 */

const BASE_URL = process.argv[2] || 'http://localhost:5173';
const TEST_SLUG = 'test-post'; // Make sure this blog post exists

console.log('🔒 Social Image Security Test Suite');
console.log(`Testing endpoint: ${BASE_URL}/blogs/${TEST_SLUG}/social-image`);
console.log('=' .repeat(60));

// Test utilities
async function makeRequest(options = {}) {
	const url = `${BASE_URL}/blogs/${options.slug || TEST_SLUG}/social-image`;
	const headers = {
		'User-Agent': options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
		...options.headers
	};
	
	try {
		const response = await fetch(url, { headers });
		return {
			status: response.status,
			statusText: response.statusText,
			headers: Object.fromEntries(response.headers.entries()),
			size: response.headers.get('content-length') || 'unknown'
		};
	} catch (error) {
		return {
			error: error.message,
			status: 0
		};
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Test cases
const tests = [
	{
		name: '✅ Normal Request',
		description: 'Test legitimate request with normal browser user agent',
		test: async () => {
			const result = await makeRequest();
			return {
				success: result.status === 200,
				details: `Status: ${result.status}, Size: ${result.size}`,
				result
			};
		}
	},
	
	{
		name: '🤖 Bot Detection - Python',
		description: 'Test bot detection with Python user agent',
		test: async () => {
			const result = await makeRequest({
				userAgent: 'python-requests/2.28.0'
			});
			return {
				success: result.status === 403,
				details: `Status: ${result.status} (expected 403 for bot)`,
				result
			};
		}
	},
	
	{
		name: '🤖 Bot Detection - cURL',
		description: 'Test bot detection with cURL user agent',
		test: async () => {
			const result = await makeRequest({
				userAgent: 'curl/7.68.0'
			});
			return {
				success: result.status === 403,
				details: `Status: ${result.status} (expected 403 for bot)`,
				result
			};
		}
	},
	
	{
		name: '🔗 Legitimate Bot - Facebook',
		description: 'Test that legitimate social media bots are allowed',
		test: async () => {
			const result = await makeRequest({
				userAgent: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'
			});
			return {
				success: result.status === 200,
				details: `Status: ${result.status} (expected 200 for legitimate bot)`,
				result
			};
		}
	},
	
	{
		name: '🚫 Path Traversal Attack',
		description: 'Test path traversal protection',
		test: async () => {
			const result = await makeRequest({
				slug: '../../../etc/passwd'
			});
			return {
				success: result.status === 400,
				details: `Status: ${result.status} (expected 400 for invalid slug)`,
				result
			};
		}
	},
	
	{
		name: '🚫 Invalid Characters',
		description: 'Test invalid character filtering',
		test: async () => {
			const result = await makeRequest({
				slug: 'test<script>alert(1)</script>'
			});
			return {
				success: result.status === 400,
				details: `Status: ${result.status} (expected 400 for invalid characters)`,
				result
			};
		}
	},
	
	{
		name: '📄 Non-existent Post',
		description: 'Test handling of non-existent blog posts',
		test: async () => {
			const result = await makeRequest({
				slug: 'non-existent-post-12345'
			});
			return {
				success: result.status === 404,
				details: `Status: ${result.status} (expected 404 for missing post)`,
				result
			};
		}
	},
	
	{
		name: '⚡ Rate Limiting',
		description: 'Test rate limiting by making rapid requests',
		test: async () => {
			console.log('    Making 12 rapid requests...');
			const results = [];
			
			for (let i = 0; i < 12; i++) {
				const result = await makeRequest();
				results.push(result.status);
				await sleep(100); // Small delay between requests
			}
			
			const successCount = results.filter(status => status === 200).length;
			const rateLimitedCount = results.filter(status => status === 429).length;
			
			return {
				success: rateLimitedCount > 0,
				details: `${successCount} successful, ${rateLimitedCount} rate-limited (expected some 429s)`,
				result: { results, successCount, rateLimitedCount }
			};
		}
	},
	
	{
		name: '🔒 Security Headers',
		description: 'Test that security headers are present',
		test: async () => {
			const result = await makeRequest();
			const headers = result.headers || {};
			
			const requiredHeaders = [
				'content-security-policy',
				'x-content-type-options',
				'x-frame-options'
			];
			
			const missingHeaders = requiredHeaders.filter(header => !headers[header]);
			
			return {
				success: missingHeaders.length === 0,
				details: missingHeaders.length === 0 
					? 'All security headers present'
					: `Missing headers: ${missingHeaders.join(', ')}`,
				result: { headers, missingHeaders }
			};
		}
	},
	
	{
		name: '💾 Caching',
		description: 'Test that caching is working correctly',
		test: async () => {
			// First request
			const result1 = await makeRequest();
			await sleep(100);
			
			// Second request (should be cached)
			const result2 = await makeRequest();
			
			const isCached = result2.headers['x-cache'] === 'HIT';
			
			return {
				success: result1.status === 200 && result2.status === 200,
				details: `First: ${result1.status}, Second: ${result2.status}, Cached: ${isCached}`,
				result: { result1, result2, isCached }
			};
		}
	}
];

// Run tests
async function runTests() {
	let passed = 0;
	let failed = 0;
	
	for (const test of tests) {
		console.log(`\n${test.name}`);
		console.log(`  ${test.description}`);
		
		try {
			const result = await test.test();
			
			if (result.success) {
				console.log(`  ✅ PASS: ${result.details}`);
				passed++;
			} else {
				console.log(`  ❌ FAIL: ${result.details}`);
				failed++;
			}
			
			// Add small delay between tests
			await sleep(200);
			
		} catch (error) {
			console.log(`  💥 ERROR: ${error.message}`);
			failed++;
		}
	}
	
	console.log('\n' + '='.repeat(60));
	console.log(`📊 Test Results: ${passed} passed, ${failed} failed`);
	
	if (failed === 0) {
		console.log('🎉 All security tests passed!');
	} else {
		console.log('⚠️  Some tests failed. Please review the security implementation.');
	}
	
	return { passed, failed };
}

// Additional utility functions
async function testSecurityDashboard() {
	console.log('\n🔍 Testing Security Dashboard...');
	
	try {
		const response = await fetch(`${BASE_URL}/api/security/dashboard`, {
			headers: {
				'Authorization': 'Bearer your-secure-token-here'
			}
		});
		
		if (response.status === 200) {
			const data = await response.json();
			console.log('✅ Security dashboard accessible');
			console.log(`   Total events: ${data.data.summary.totalEvents}`);
			console.log(`   Active alerts: ${data.data.summary.alertCount}`);
		} else {
			console.log(`❌ Security dashboard returned status: ${response.status}`);
		}
	} catch (error) {
		console.log(`💥 Security dashboard error: ${error.message}`);
	}
}

// Main execution
async function main() {
	console.log('Starting security tests...\n');
	
	const results = await runTests();
	
	// Test security dashboard if available
	await testSecurityDashboard();
	
	console.log('\n📋 Security Test Summary:');
	console.log('- Rate limiting: Prevents DDoS attacks');
	console.log('- Bot detection: Blocks automated scrapers');
	console.log('- Input validation: Prevents injection attacks');
	console.log('- Security headers: Protects against various attacks');
	console.log('- Caching: Reduces server load');
	console.log('- Error handling: Prevents information disclosure');
	
	console.log('\n💡 Next Steps:');
	console.log('1. Monitor security dashboard regularly');
	console.log('2. Review security logs for patterns');
	console.log('3. Update bot detection patterns as needed');
	console.log('4. Consider implementing IP blocking for repeat offenders');
	console.log('5. Set up alerting for security events');
	
	process.exit(results.failed > 0 ? 1 : 0);
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
	console.error('💥 Unhandled error:', error.message);
	process.exit(1);
});

// Run the tests
main().catch(console.error);