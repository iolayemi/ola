// @ts-check
const { test, expect } = require('@playwright/test');

test('hero section text verification', async ({ page }) => {
  // Navigate to the site
  await page.goto('http://localhost:3000/');
  
  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');
  
  // Wait for the typing animation to complete
  await page.waitForTimeout(3000);
  
  // Take a screenshot of the hero section
  const heroSection = await page.locator('section').first();
  await heroSection.screenshot({ path: 'screenshot-hero-test.png' });
  
  // Check the name text
  const nameText = await page.locator('h1.text-cyanTech.text-3xl').textContent();
  console.log(`Name text: ${nameText}`);
  
  // Check the title text
  const titleText = await page.locator('h2.text-solarTangerine').textContent();
  console.log(`Title text: ${titleText}`);

  // Verify correct text
  expect(nameText?.trim()).toBe('Olayemi Lasisi');
  expect(titleText?.trim()).toBe('Full Stack Engineer & DevOps Specialist');
});