import { expect, test } from '@playwright/test';

// Increase timeout for debugging
test.setTimeout(60000);

test('debug blog page structure', async ({ page }) => {
  // Navigate to the blog page
  await page.goto('/blogs');
  
  // Take a screenshot of the page
  await page.screenshot({ path: 'blog-page.png' });
  
  // Log the page title
  console.log('Page title:', await page.title());
  
  // Check if blog section exists
  const blogListExists = await page.locator('.blog-list').isVisible();
  console.log('Blog list exists:', blogListExists);
  
  // Check for blog cards
  const blogCards = await page.locator('article.blog').count();
  console.log('Blog card count:', blogCards);
  
  if (blogCards > 0) {
    // Get the first blog card
    const firstBlogCard = page.locator('article.blog').first();
    
    // Check if it's visible
    const isVisible = await firstBlogCard.isVisible();
    console.log('First blog card visible:', isVisible);
    
    // Get the blog title
    try {
      const blogTitle = await firstBlogCard.locator('h5.blog__title').textContent();
      console.log('Blog title:', blogTitle);
    } catch (error) {
      console.error('Error getting blog title:', error);
      
      // Try to get the HTML structure
      const html = await firstBlogCard.evaluate(node => node.outerHTML);
      console.log('Blog card HTML:', html);
    }
    
    // Try to get the parent anchor
    const parentAnchor = page.locator('a:has(article.blog)').first();
    const anchorExists = await parentAnchor.count() > 0;
    console.log('Parent anchor exists:', anchorExists);
    
    if (anchorExists) {
      // Get the href attribute
      const href = await parentAnchor.getAttribute('href');
      console.log('Blog link href:', href);
    }
  }
});
