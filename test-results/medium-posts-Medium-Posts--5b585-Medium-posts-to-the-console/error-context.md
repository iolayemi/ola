# Test info

- Name: Medium Posts Fetching >> should log fetched Medium posts to the console
- Location: C:\Users\i_olayemi\source\repos\OlaDev\olayemi-portfolio\tests\medium-posts.spec.js:26:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: undefined
    at C:\Users\i_olayemi\source\repos\OlaDev\olayemi-portfolio\tests\medium-posts.spec.js:45:25
```

# Page snapshot

```yaml
- navigation:
  - link "Olayemi":
    - /url: "#home"
  - list:
    - listitem:
      - link "// home":
        - /url: "#home"
    - listitem:
      - link "// expertise":
        - /url: "#skills"
    - listitem:
      - link "// projects":
        - /url: "#projects"
    - listitem:
      - link "// experience":
        - /url: "#companies"
    - listitem:
      - link "// contact":
        - /url: "#contact"
- main:
  - text: terminal ~ olayemi-portfolio
  - img "Olayemi Lasisi"
  - paragraph: $ whoami
  - heading "O |" [level=1]
  - heading "F |" [level=2]
  - heading "M |" [level=3]
  - paragraph: $ cat about-me.txt
  - paragraph: Engineer passionate about building modern, scalable applications and infrastructure across multiple platforms and technologies.
  - paragraph: Specializing in cloud architecture, microservice design, and event-driven systems - creating elegant solutions to complex problems.
  - paragraph: Open for speaking gigs and collaborations on quirky projects that make the world a bit more awesome! 🚀
  - paragraph: $ ls skills/
  - text: .NET C# Azure AWS Kubernetes Docker React Node.js Python SQL Kafka Terraform Microservices
  - link "Let's Chat!":
    - /url: "#contact"
  - link "See My Skills":
    - /url: "#skills"
  - img
  - heading "//Expertise" [level=2]
  - heading "Technical Versatility" [level=3]
  - paragraph: Versatile engineer with experience across multiple programming languages and frameworks including .NET Core, focusing on building distributed systems and cloud-native applications. I enjoy crafting robust solutions that solve complex business problems with elegant technical approaches.
  - heading "Languages" [level=3]
  - text: C# JavaScript TypeScript Python Go Java SQL Bash
  - heading "Frontend" [level=3]
  - text: React Angular Vue Next.js TailwindCSS Redux
  - heading "Backend & APIs" [level=3]
  - text: .NET Core Node.js Express.js GraphQL REST FileMaker ProcessMaker
  - heading "Databases" [level=3]
  - text: PostgreSQL MySQL TSQL MongoDB DynamoDB Redis
  - heading "Cloud Platforms" [level=3]
  - text: Azure AWS (EC2, S3, Lambda, RDS) GCP
  - heading "DevOps & CI/CD" [level=3]
  - text: Docker Kubernetes Terraform GitHub Actions Azure DevOps
  - heading "Monitoring & Analytics" [level=3]
  - text: Prometheus Grafana Datadog Splunk ELK Stack
  - heading "Messaging & Streaming" [level=3]
  - text: Kafka Flink RabbitMQ
  - paragraph: My versatile technical background allows me to navigate complex challenges across the software development spectrum. I enjoy blending multiple technologies to create optimal solutions, from frontend interfaces to complex backend systems, and implementing scalable infrastructure across multiple cloud platforms.
  - heading "//Experience" [level=2]
  - heading "Senior DevOps Engineer" [level=3]
  - link "Hootsuite":
    - /url: https://hootsuite.com
  - list:
    - listitem: Led migration to containerized microservices architecture
    - listitem: Implemented GitOps workflows and automated CI/CD pipelines
  - heading "Cloud Solutions Architect" [level=3]
  - link "Access Bank":
    - /url: https://accessbankplc.com
  - list:
    - listitem: Designed hybrid cloud infrastructure supporting millions of customers
    - listitem: Modernized legacy applications with container technologies
  - link "Download Resume":
    - /url: "#"
    - img
    - text: Download Resume
  - heading "//Testimonials" [level=2]
  - img "Sarah Johnson"
  - img
  - blockquote: "\"Olayemi's DevOps insights saved us weeks of toil! The migration to Kubernetes was seamless and dramatically improved our deployment reliability.\""
  - paragraph: Sarah Johnson
  - paragraph: CTO, FinTech Innovations
  - button "Go to testimonial 1"
  - button "Go to testimonial 2"
  - button "Go to testimonial 3"
  - heading "//Latest Articles" [level=2]
  - link "All articles":
    - /url: https://medium.com/@i.am.ola
    - text: All articles
    - img
  - link "blog post 1 Building Scalable Microservices with Kubernetes and gRPC Read article":
    - /url: https://medium.com/@i.am.ola
    - img
    - text: blog post 1
    - heading "Building Scalable Microservices with Kubernetes and gRPC" [level=3]
    - img
    - text: Read article
  - link "blog post 2 Advanced DevOps Patterns for Cloud-Native Applications Read article":
    - /url: https://medium.com/@i.am.ola
    - img
    - text: blog post 2
    - heading "Advanced DevOps Patterns for Cloud-Native Applications" [level=3]
    - img
    - text: Read article
  - link "blog post 3 Fine-tuning LLMs for Domain-Specific Knowledge Work Read article":
    - /url: https://medium.com/@i.am.ola
    - img
    - text: blog post 3
    - heading "Fine-tuning LLMs for Domain-Specific Knowledge Work" [level=3]
    - img
    - text: Read article
  - heading "//Contact" [level=2]
  - heading "Let's Connect!" [level=3]
  - paragraph: I'm always open to discussing new projects, opportunities in software engineering, DevOps, or technology consulting.
  - paragraph: $ echo "fun_fact.txt"
  - paragraph: 🎤 I'm available for speaking gigs!
  - paragraph: 💻 Open to collaborate on quirky & interesting projects
  - paragraph: 🚀 Will work for good coffee and dad jokes
  - link "olayemi.lasisi@outlook.com":
    - /url: mailto:olayemi.lasisi@outlook.com
    - img
    - text: olayemi.lasisi@outlook.com
  - link "LinkedIn":
    - /url: https://www.linkedin.com/in/iolayemi
    - img
    - text: LinkedIn
  - link "GitHub":
    - /url: https://github.com/iolayemi
    - img
    - text: GitHub
  - heading "Send me a message" [level=3]
  - text: Name
  - textbox "Name"
  - text: Email
  - textbox "Email"
  - text: Message
  - textbox "Message"
  - button "Open Email Client"
  - paragraph: © 2025 Olayemi Lasisi. All Rights Reserved.
  - paragraph: Built with ❤ using Next.js and TailwindCSS
- contentinfo:
  - paragraph: © 2025 Olayemi Lasisi. All rights reserved.
- link "Back to top":
  - /url: "#home"
  - img
- alert
- button "Open Next.js Dev Tools":
  - img
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test.describe('Medium Posts Fetching', () => {
   4 |   test('should fetch and display Medium posts', async ({ page }) => {
   5 |     // Navigate to the homepage
   6 |     await page.goto('http://localhost:3000');
   7 |
   8 |     // Wait for the blog section to load
   9 |     const blogSection = page.locator('section:has-text("Latest Articles")');
  10 |     await expect(blogSection).toBeVisible();
  11 |
  12 |     // Check if at least one blog post is displayed
  13 |     const blogPosts = blogSection.locator('h3');
  14 |     const blogPostCount = await blogPosts.count();
  15 |     expect(blogPostCount).toBeGreaterThan(0);
  16 |
  17 |     // Verify the first blog post has a title and a link
  18 |     const firstPost = blogPosts.first();
  19 |     await expect(firstPost).toBeVisible();
  20 |     await expect(firstPost).toHaveText(/.+/); // Ensure it has some text
  21 |
  22 |     const firstPostLink = firstPost.locator('a');
  23 |     await expect(firstPostLink).toHaveAttribute('href', /medium\.com/);
  24 |   });
  25 |
  26 |   test('should log fetched Medium posts to the console', async ({ page }) => {
  27 |     // Intercept console logs
  28 |     const logs = [];
  29 |     page.on('console', msg => {
  30 |       if (msg.type() === 'log') {
  31 |         logs.push(msg.text());
  32 |       }
  33 |     });
  34 |
  35 |     // Navigate to the homepage
  36 |     await page.goto('http://localhost:3000');
  37 |
  38 |     // Wait for the blog section to load
  39 |     const blogSection = page.locator('section:has-text("Latest Articles")');
  40 |     await expect(blogSection).toBeVisible();
  41 |
  42 |     // Check if the console log contains the fetched Medium posts
  43 |     const expectedLog = 'Fetched Medium posts:'; // Adjust this to match the exact log format
  44 |     const matchingLog = logs.find(log => log.includes(expectedLog));
> 45 |     expect(matchingLog).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  46 |   });
  47 | });
```