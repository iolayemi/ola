// @ts-check
const { test, expect } = require('@playwright/test');

test('portfolio website styling and components test', async ({ page }) => {
  // Navigate to the site
  await page.goto('http://localhost:3000/');
  
  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot of the full page
  await page.screenshot({ path: 'screenshot-full-page.png', fullPage: true });
  
  // Check the title
  const title = await page.title();
  console.log(`Page title: ${title}`);
  expect(title).toContain('Olayemi Lasisi');
  
  // Test 1: Verify that the navbar is visible and has the correct styling
  const navbar = await page.locator('nav');
  await expect(navbar).toBeVisible();
  // Take a screenshot of just the navbar
  await navbar.screenshot({ path: 'screenshot-navbar.png' });
  
  // Test 2: Verify that the terminal hero section is visible
  const heroSection = await page.locator('section').first();
  await expect(heroSection).toBeVisible();
  await heroSection.screenshot({ path: 'screenshot-hero.png' });
  
  // Test 3: Verify that the skills section is visible
  const skillsSection = await page.getByText('Expertise', { exact: false }).locator('xpath=ancestor::section');
  await expect(skillsSection).toBeVisible();
  await skillsSection.screenshot({ path: 'screenshot-skills.png' });
  
  // Test 4: Verify that the projects section is visible and has the correct projects
  const projectsSection = await page.getByText('Featured Projects', { exact: false }).locator('xpath=ancestor::section');
  await expect(projectsSection).toBeVisible();
  await projectsSection.screenshot({ path: 'screenshot-projects.png' });
  
  // Check if the project images are loading (not placeholder URLs)
  const projectImages = await projectsSection.locator('img').all();
  for (const img of projectImages) {
    const src = await img.getAttribute('src');
    console.log(`Project image src: ${src}`);
    expect(src).not.toContain('via.placeholder.com');
  }
  
  // Test 5: Verify that the case studies section is visible
  const caseStudiesSection = await page.getByText('Case Studies', { exact: false }).locator('xpath=ancestor::section');
  await expect(caseStudiesSection).toBeVisible();
  await caseStudiesSection.screenshot({ path: 'screenshot-case-studies.png' });
  
  // Check if the case study images are loading (not placeholder URLs)
  const caseImages = await caseStudiesSection.locator('img').all();
  for (const img of caseImages) {
    const src = await img.getAttribute('src');
    console.log(`Case study image src: ${src}`);
    expect(src).not.toContain('via.placeholder.com');
  }
  
  // Test 6: Verify that the blog section is visible
  const blogSection = await page.getByText('Latest Articles', { exact: false }).locator('xpath=ancestor::section');
  await expect(blogSection).toBeVisible();
  await blogSection.screenshot({ path: 'screenshot-blog.png' });
  
  // Test 7: Verify that the contact section is visible
  const contactSection = await page.getByText('Get in Touch', { exact: false }).locator('xpath=ancestor::section');
  await expect(contactSection).toBeVisible();
  await contactSection.screenshot({ path: 'screenshot-contact.png' });
  
  // Test 8: Check if all animations and transitions are working
  // This is hard to test automatically, but we can check if Framer Motion is working
  const animatedElements = await page.locator('[style*="transform"]').all();
  console.log(`Number of animated elements found: ${animatedElements.length}`);
  expect(animatedElements.length).toBeGreaterThan(0);
});