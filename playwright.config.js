import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	forbidOnly: !!process.env.CI,
	fullyParallel: false,
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	],
	reporter: 'html',
	retries: process.env.CI ? 2 : 1,
	timeout: 30000,
	expect: { timeout: 8000 },
	testDir: './e2e',
	use: {
		baseURL: 'http://localhost:4173',
		screenshot: 'only-on-failure',
		trace: 'on-first-retry',
		video: 'on-first-retry',
		actionTimeout: 10000,
		navigationTimeout: 15000
	},
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		port: 4173,
		reuseExistingServer: !process.env.CI,
		timeout: 120000
	},
	workers: process.env.CI ? 2 : 2
});
