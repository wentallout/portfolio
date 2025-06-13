import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	forbidOnly: !!process.env.CI,
	fullyParallel: true,
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] }
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] }
		}
	],
	reporter: 'html',
	retries: process.env.CI ? 2 : 0,
	testDir: './tests',
	use: {
		baseURL: 'http://localhost:3000',
		screenshot: 'only-on-failure',
		trace: 'on-first-retry',
		video: 'on-first-retry'
	},

	webServer: {
		command: 'npm run dev',
		port: 3000,
		reuseExistingServer: !process.env.CI
	},

	workers: process.env.CI ? 1 : undefined
});
