import { test, expect } from '@playwright/test';

test.describe('API Endpoints', () => {
  test('should fetch blog data correctly', async ({ request }) => {
    const response = await request.get('/api/blog');
    
    expect(response.status()).toBe(200);
    
    const blogs = await response.json();
    expect(Array.isArray(blogs)).toBeTruthy();
    expect(blogs.length).toBeGreaterThan(0);
    
    // Check if blog items have the required properties
    const firstBlog = blogs[0];
    expect(firstBlog).toHaveProperty('meta');
    expect(firstBlog.meta).toHaveProperty('title');
    expect(firstBlog.meta).toHaveProperty('date');
    expect(firstBlog).toHaveProperty('path');
  });

  test('should handle arcjet API correctly', async ({ request }) => {
    const response = await request.get('/api/arcjet');
    
    // The API might return 200 or an error code depending on the rate limiting
    // We just check that it returns a valid response
    expect(response.status()).toBeLessThan(500);
  });
});
