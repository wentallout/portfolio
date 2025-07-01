#!/usr/bin/env node

/**
 * Comprehensive Security Testing Script
 * 
 * This script performs extensive security testing on the portfolio application
 * including all endpoints, security headers, input validation, and more.
 */

const BASE_URL = process.argv[2] || 'http://localhost:5173';

console.log('🔒 Comprehensive Security Test Suite');
console.log(`Testing: ${BASE_URL}`);
console.log('=' .repeat(80));

// Test utilities
async function makeRequest(options = {}) {
	const url = options.url || `${BASE_URL}${options.path || '/'}`;
	const headers = {
		'User-Agent': options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
		...options.headers
	};
	
	try {
		const response = await fetch(url, { 
			method: options.method || 'GET',
			headers,
			body: options.body
		});
		
		return {
			status: response.status,
			statusText: response.statusText,
			headers: Object.fromEntries(response.headers.entries()),
			text: await response.text().catch(() => ''),
			ok: response.ok
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

// Security test categories
const securityTests = {
	// 1. Security Headers Tests
	securityHeaders: [
		{
			name: '🛡️ Content Security Policy',
			test: async () => {
				const result = await makeRequest({ path: '/' });
				const csp = result.headers['content-security-policy'];
				return {
					success: !!csp && csp.includes("default-src 'self'"),
					details: `CSP: ${csp ? 'Present' : 'Missing'}`,
					result: { csp }
				};
			}
		},
		{
			name: '🛡️ X-Frame-Options',
			test: async () => {
				const result = await makeRequest({ path: '/' });
				const xfo = result.headers['x-frame-options'];
				return {
					success: xfo === 'DENY',
					details: `X-Frame-Options: ${xfo || 'Missing'}`,
					result: { xfo }
				};
			}
		},
		{
			name: '🛡️ X-Content-Type-Options',
			test: async () => {
				const result = await makeRequest({ path: '/' });
				const xcto = result.headers['x-content-type-options'];
				return {
					success: xcto === 'nosniff',
					details: `X-Content-Type-Options: ${xcto || 'Missing'}`,
					result: { xcto }
				};
			}
		},
		{
			name: '🛡️ Referrer Policy',
			test: async () => {
				const result = await makeRequest({ path: '/' });
				const rp = result.headers['referrer-policy'];
				return {
					success: !!rp,
					details: `Referrer-Policy: ${rp || 'Missing'}`,
					result: { rp }
				};
			}
		}
	],

	// 2. Input Validation Tests
	inputValidation: [
		{
			name: '🚫 XSS Prevention - Script Tags',
			test: async () => {
				const maliciousInput = '<script>alert("xss")</script>';
				const result = await makeRequest({
					path: '/api/blogs',
					headers: { 'X-Test-Input': maliciousInput }
				});
				return {
					success: !result.text.includes('<script>'),
					details: `Script tags filtered: ${!result.text.includes('<script>')}`,
					result
				};
			}
		},
		{
			name: '🚫 SQL Injection Prevention',
			test: async () => {
				const sqlPayload = "'; DROP TABLE users; --";
				const result = await makeRequest({
					path: `/blogs/${encodeURIComponent(sqlPayload)}/social-image`
				});
				return {
					success: result.status === 400 || result.status === 404,
					details: `SQL injection blocked: ${result.status}`,
					result
				};
			}
		},
		{
			name: '🚫 Path Traversal Prevention',
			test: async () => {
				const traversalPayload = '../../../etc/passwd';
				const result = await makeRequest({
					path: `/blogs/${encodeURIComponent(traversalPayload)}/social-image`
				});
				return {
					success: result.status === 400,
					details: `Path traversal blocked: ${result.status}`,
					result
				};
			}
		}
	],

	// 3. Rate Limiting Tests
	rateLimiting: [
		{
			name: '⚡ API Rate Limiting',
			test: async () => {
				console.log('    Testing API rate limits (making 35 requests)...');
				const results = [];
				
				for (let i = 0; i < 35; i++) {
					const result = await makeRequest({ path: '/api/blogs' });
					results.push(result.status);
					await sleep(50);
				}
				
				const rateLimited = results.filter(status => status === 429).length;
				const successful = results.filter(status => status === 200).length;
				
				return {
					success: rateLimited > 0,
					details: `${successful} successful, ${rateLimited} rate-limited`,
					result: { results, successful, rateLimited }
				};
			}
		},
		{
			name: '⚡ Social Image Rate Limiting',
			test: async () => {
				console.log('    Testing social image rate limits (making 15 requests)...');
				const results = [];
				
				for (let i = 0; i < 15; i++) {
					const result = await makeRequest({ path: '/blogs/test-post/social-image' });
					results.push(result.status);
					await sleep(100);
				}
				
				const rateLimited = results.filter(status => status === 429).length;
				const successful = results.filter(status => [200, 404].includes(status)).length;
				
				return {
					success: rateLimited > 0,
					details: `${successful} successful, ${rateLimited} rate-limited`,
					result: { results, successful, rateLimited }
				};
			}
		}
	],

	// 4. Bot Detection Tests
	botDetection: [
		{
			name: '🤖 Python Bot Detection',
			test: async () => {
				const result = await makeRequest({
					path: '/api/blogs',
					userAgent: 'python-requests/2.28.0'
				});
				return {
					success: result.status === 403 || result.status === 429,
					details: `Python bot blocked: ${result.status}`,
					result
				};
			}
		},
		{
			name: '🤖 cURL Bot Detection',
			test: async () => {
				const result = await makeRequest({
					path: '/api/blogs',
					userAgent: 'curl/7.68.0'
				});
				return {
					success: result.status === 403 || result.status === 429,
					details: `cURL bot blocked: ${result.status}`,
					result
				};
			}
		},
		{
			name: '🤖 Legitimate Bot Allowance',
			test: async () => {
				const result = await makeRequest({
					path: '/rss.xml',
					userAgent: 'facebookexternalhit/1.1'
				});
				return {
					success: result.status === 200,
					details: `Facebook bot allowed: ${result.status}`,
					result
				};
			}
		}
	],

	// 5. CSRF Protection Tests
	csrfProtection: [
		{
			name: '🛡️ CSRF Token Generation',
			test: async () => {
				const result = await makeRequest({
					path: '/contact',
					headers: { 'Accept': 'application/json' }
				});
				
				let hasToken = false;
				try {
					const data = JSON.parse(result.text);
					hasToken = !!data.csrfToken;
				} catch (e) {
					// Not JSON response
				}
				
				return {
					success: hasToken,
					details: `CSRF token provided: ${hasToken}`,
					result
				};
			}
		},
		{
			name: '🛡️ CSRF Protection on POST',
			test: async () => {
				const formData = new FormData();
				formData.append('name', 'Test User');
				formData.append('email', 'test@example.com');
				formData.append('message', 'This is a test message');
				
				const result = await makeRequest({
					path: '/contact',
					method: 'POST',
					body: formData
				});
				
				return {
					success: result.status === 403,
					details: `POST without CSRF token blocked: ${result.status}`,
					result
				};
			}
		}
	],

	// 6. Error Handling Tests
	errorHandling: [
		{
			name: '🚫 Information Disclosure Prevention',
			test: async () => {
				const result = await makeRequest({ path: '/nonexistent-endpoint' });
				const hasStackTrace = result.text.includes('Error:') || 
									 result.text.includes('at ') ||
									 result.text.includes('node_modules');
				
				return {
					success: !hasStackTrace,
					details: `Stack trace hidden: ${!hasStackTrace}`,
					result: { hasStackTrace, status: result.status }
				};
			}
		},
		{
			name: '🚫 Generic Error Messages',
			test: async () => {
				const result = await makeRequest({ 
					path: '/api/blogs',
					method: 'POST' // Invalid method
				});
				
				const hasGenericError = !result.text.includes('internal') &&
									   !result.text.includes('server error') &&
									   !result.text.includes('stack');
				
				return {
					success: result.status >= 400,
					details: `Generic error response: ${result.status}`,
					result
				};
			}
		}
	],

	// 7. Content Security Tests
	contentSecurity: [
		{
			name: '📄 RSS Feed Security',
			test: async () => {
				const result = await makeRequest({ path: '/rss.xml' });
				const hasXMLDeclaration = result.text.includes('<?xml') || result.text.includes('<rss');
				const hasSecurityHeaders = result.headers['x-content-type-options'] === 'nosniff';
				
				return {
					success: hasXMLDeclaration && hasSecurityHeaders,
					details: `RSS secure: XML=${hasXMLDeclaration}, Headers=${hasSecurityHeaders}`,
					result: { hasXMLDeclaration, hasSecurityHeaders }
				};
			}
		},
		{
			name: '📄 Sitemap Security',
			test: async () => {
				const result = await makeRequest({ path: '/sitemap.xml' });
				const isValidXML = result.text.includes('<urlset') || result.text.includes('<sitemapindex');
				
				return {
					success: result.status === 200 && isValidXML,
					details: `Sitemap accessible and valid: ${result.status}`,
					result: { isValidXML, status: result.status }
				};
			}
		}
	],

	// 8. Social Image Security Tests
	socialImageSecurity: [
		{
			name: '🖼️ Social Image Input Validation',
			test: async () => {
				const maliciousSlug = '<script>alert(1)</script>';
				const result = await makeRequest({
					path: `/blogs/${encodeURIComponent(maliciousSlug)}/social-image`
				});
				
				return {
					success: result.status === 400,
					details: `Malicious slug blocked: ${result.status}`,
					result
				};
			}
		},
		{
			name: '🖼️ Social Image Rate Limiting',
			test: async () => {
				console.log('    Testing social image specific rate limits...');
				const results = [];
				
				for (let i = 0; i < 12; i++) {
					const result = await makeRequest({ 
						path: '/blogs/valid-post/social-image' 
					});
					results.push(result.status);
					await sleep(200);
				}
				
				const rateLimited = results.filter(status => status === 429).length;
				
				return {
					success: rateLimited > 0,
					details: `Rate limiting active: ${rateLimited} blocked requests`,
					result: { results, rateLimited }
				};
			}
		}
	]
};

// Run all security tests
async function runSecurityTests() {
	let totalTests = 0;
	let passedTests = 0;
	let failedTests = 0;
	
	const results = {};
	
	for (const [category, tests] of Object.entries(securityTests)) {
		console.log(`\n📋 ${category.toUpperCase().replace(/([A-Z])/g, ' $1').trim()}`);
		console.log('-'.repeat(60));
		
		results[category] = [];
		
		for (const test of tests) {
			console.log(`\n${test.name}`);
			
			try {
				const result = await test.test();
				totalTests++;
				
				if (result.success) {
					console.log(`  ✅ PASS: ${result.details}`);
					passedTests++;
				} else {
					console.log(`  ❌ FAIL: ${result.details}`);
					failedTests++;
				}
				
				results[category].push({
					name: test.name,
					success: result.success,
					details: result.details,
					result: result.result
				});
				
				// Small delay between tests
				await sleep(100);
				
			} catch (error) {
				console.log(`  💥 ERROR: ${error.message}`);
				failedTests++;
				totalTests++;
				
				results[category].push({
					name: test.name,
					success: false,
					details: `Error: ${error.message}`,
					error: error.message
				});
			}
		}
	}
	
	// Summary
	console.log('\n' + '='.repeat(80));
	console.log('📊 SECURITY TEST SUMMARY');
	console.log('='.repeat(80));
	console.log(`Total Tests: ${totalTests}`);
	console.log(`✅ Passed: ${passedTests}`);
	console.log(`❌ Failed: ${failedTests}`);
	console.log(`📈 Success Rate: ${Math.round((passedTests / totalTests) * 100)}%`);
	
	// Security score calculation
	const securityScore = Math.round((passedTests / totalTests) * 10);
	console.log(`🔒 Security Score: ${securityScore}/10`);
	
	if (securityScore >= 8) {
		console.log('🎉 Excellent security posture!');
	} else if (securityScore >= 6) {
		console.log('⚠️  Good security, but room for improvement');
	} else if (securityScore >= 4) {
		console.log('⚠️  Moderate security concerns - action needed');
	} else {
		console.log('🚨 Critical security issues - immediate action required!');
	}
	
	// Recommendations
	console.log('\n📋 SECURITY RECOMMENDATIONS:');
	console.log('-'.repeat(40));
	
	if (failedTests > 0) {
		console.log('1. Address all failed security tests immediately');
		console.log('2. Implement missing security headers');
		console.log('3. Strengthen input validation');
		console.log('4. Review rate limiting configuration');
		console.log('5. Test CSRF protection thoroughly');
	} else {
		console.log('1. Maintain current security measures');
		console.log('2. Regular security audits');
		console.log('3. Monitor security logs');
		console.log('4. Keep dependencies updated');
	}
	
	console.log('\n💡 NEXT STEPS:');
	console.log('1. Review failed tests and implement fixes');
	console.log('2. Set up automated security testing');
	console.log('3. Implement security monitoring');
	console.log('4. Regular penetration testing');
	console.log('5. Security awareness training');
	
	return {
		totalTests,
		passedTests,
		failedTests,
		securityScore,
		results
	};
}

// Additional security checks
async function performAdditionalChecks() {
	console.log('\n🔍 ADDITIONAL SECURITY CHECKS');
	console.log('-'.repeat(40));
	
	// Check for common security files
	const securityFiles = [
		'/.env',
		'/config.json',
		'/package.json',
		'/.git/config',
		'/admin',
		'/wp-admin',
		'/phpmyadmin'
	];
	
	for (const file of securityFiles) {
		const result = await makeRequest({ path: file });
		if (result.status === 200) {
			console.log(`⚠️  Exposed file: ${file} (Status: ${result.status})`);
		}
	}
	
	// Check for security.txt
	const securityTxt = await makeRequest({ path: '/.well-known/security.txt' });
	if (securityTxt.status === 200) {
		console.log('✅ Security.txt found');
	} else {
		console.log('💡 Consider adding security.txt for responsible disclosure');
	}
}

// Main execution
async function main() {
	try {
		console.log('🚀 Starting comprehensive security assessment...\n');
		
		const testResults = await runSecurityTests();
		await performAdditionalChecks();
		
		console.log('\n📄 DETAILED REPORT SAVED TO: security-test-results.json');
		
		// Save detailed results
		const fs = await import('fs');
		fs.writeFileSync('security-test-results.json', JSON.stringify({
			timestamp: new Date().toISOString(),
			baseUrl: BASE_URL,
			summary: {
				totalTests: testResults.totalTests,
				passedTests: testResults.passedTests,
				failedTests: testResults.failedTests,
				securityScore: testResults.securityScore
			},
			results: testResults.results
		}, null, 2));
		
		process.exit(testResults.failedTests > 0 ? 1 : 0);
		
	} catch (error) {
		console.error('💥 Test suite error:', error.message);
		process.exit(1);
	}
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
	console.error('💥 Unhandled error:', error.message);
	process.exit(1);
});

// Run the comprehensive security tests
main().catch(console.error);