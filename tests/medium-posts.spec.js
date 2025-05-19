const { test, expect } = require('@playwright/test');

test.describe('Medium Posts Fetching', () => {
  test('should fetch and display Medium posts', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');

    // Wait for the blog section to load
    const blogSection = page.locator('section:has-text("Latest Articles")');
    await expect(blogSection).toBeVisible();

    // Check if at least one blog post is displayed
    const blogPosts = blogSection.locator('h3');
    const blogPostCount = await blogPosts.count();
    expect(blogPostCount).toBeGreaterThan(0);

    // Verify the first blog post has a title and a link
    const firstPost = blogPosts.first();
    await expect(firstPost).toBeVisible();
    await expect(firstPost).toHaveText(/.+/); // Ensure it has some text

    const firstPostLink = firstPost.locator('a');
    await expect(firstPostLink).toHaveAttribute('href', /medium\.com/);
  });

  test('should log fetched Medium posts to the console', async ({ page }) => {
    // Intercept console logs
    const logs = [];
    page.on('console', msg => {
      if (msg.type() === 'log') {
        logs.push(msg.text());
      }
    });

    // Navigate to the homepage
    await page.goto('http://localhost:3000');

    // Wait for the blog section to load
    const blogSection = page.locator('section:has-text("Latest Articles")');
    await expect(blogSection).toBeVisible();

    // Check if the console log contains the fetched Medium posts
    const expectedLogStart = 'Fetched Medium posts:'; // Adjusted to match the exact log format
    const matchingLog = logs.find(log => log.startsWith(expectedLogStart));
    expect(matchingLog).toBeTruthy();
  });
});