import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../src/pages/generated');

// Create pages directory if it doesn't exist
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Define an array of IT technology topics
const itTopics = [
  "Artificial Intelligence (AI)",
  "Machine Learning (ML)",
  "Cloud Computing",
  "Cybersecurity",
  "Internet of Things (IoT)",
  "Blockchain Technology",
  "5G Technology",
  "DevOps Practices",
  "Big Data Analytics",
  "Edge Computing",
  "Augmented Reality (AR) and Virtual Reality (VR)",
];

function generateTechnologyContent(index) {
  const topic = itTopics[index % itTopics.length]; // Loop through topics
  return `
  <h2>${topic}</h2>
  <p>${topic} is transforming industries by enabling new capabilities and efficiencies. Companies are leveraging ${topic.toLowerCase()} to drive innovation and improve their operational performance.</p>
  <p>For instance, in the field of ${topic.toLowerCase()}, businesses are now able to automate tasks, enhance decision-making, and provide personalized customer experiences. As technology continues to evolve, understanding the implications of ${topic.toLowerCase()} is essential for professionals and organizations alike.</p>
  `;
}

for (let i = 1; i <= 2000; i++) {
  const content = `---
layout: '../layouts/Layout.astro'
title: 'Page ${i} - IT Technology'
---

<main class="container">
  <h1>Page ${i} - Exploring IT Technology</h1>
  <div class="content">
    ${generateTechnologyContent(i)}
  </div>
  <div class="navigation">
    ${i > 1 ? `<a href="/generated/${i-1}">Previous</a>` : ''}
    ${i < 2000 ? `<a href="/generated/${i+1}">Next</a>` : ''}
  </div>
</main>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  .content {
    margin: 2rem 0;
    line-height: 1.6;
  }
  .navigation {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  a {
    color: rgb(var(--accent));
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>`;

  fs.writeFileSync(path.join(pagesDir, `${i}.astro`), content);
}

console.log('Generated 2000 pages successfully!');
