---
layout: home
title: Create Your App
titleTemplate: CLI Tool for Quickly Creating Various Apps and Components

hero:
  name: Create Your App
  text: Frontend Development Efficiency Tool
  tagline: Quickly create projects, components and manage monorepo, reducing frontend development setup costs
  image:
    src: /logo.svg
    alt: Create Your App
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/real-jacket/create-your-app

features:
  - icon: 🚀
    title: Quick Project Creation
    details: Support for multiple templates including React, Vue, etc., create projects with one click, no complex configuration
  - icon: 🧩
    title: Component Generation
    details: Quickly create components, support for multiple component types, improve development efficiency
  - icon: 📦
    title: Monorepo Support
    details: Complete monorepo workflow support, easily manage multi-package projects
  - icon: 🛠️
    title: Customizable
    details: Flexible configuration options to meet different needs, support for custom templates
  - icon: ⚡
    title: High Performance
    details: Based on modern build tools, providing fast development experience and build performance
  - icon: 🔄
    title: Template Conversion
    details: Convert existing projects into templates for team reuse and sharing
---

<div class="vp-doc">

## Easy-to-use Command Line Tool

<div class="terminal-container">
  <img src="/terminal-en.svg" alt="Terminal Demo" class="terminal-image" />
</div>

## Rich Template Selection

<div class="template-container">
  <div class="template-grid">
    <div class="template-card">
      <img src="/template-icons/react.svg" alt="React Webpack" class="template-icon" />
      <h3>React Webpack</h3>
      <p>React project template based on Webpack 5</p>
      <a href="/create-your-app/en/templates/react-webpack" class="template-link">View Details</a>
    </div>
    <div class="template-card">
      <img src="/template-icons/react.svg" alt="React CRA" class="template-icon" />
      <h3>React CRA</h3>
      <p>H5 project template based on Create React App</p>
      <a href="/create-your-app/en/templates/react-cra" class="template-link">View Details</a>
    </div>
    <div class="template-card">
      <img src="/template-icons/react.svg" alt="React Vite" class="template-icon" />
      <h3>React Vite</h3>
      <p>React H5 project template based on Vite</p>
      <a href="/create-your-app/en/templates/react-vite" class="template-link">View Details</a>
    </div>
    <div class="template-card">
      <img src="/template-icons/lib.svg" alt="Library Template" class="template-icon" />
      <h3>Library Template</h3>
      <p>TypeScript library template based on Rollup</p>
      <a href="/create-your-app/en/templates/lib" class="template-link">View Details</a>
    </div>
  </div>
  <div class="template-more">
    <a href="/create-your-app/en/templates/" class="more-link">View All Templates</a>
  </div>
</div>

## Complete Workflow Support

<div class="workflow-container">
  <div class="workflow-steps">
    <div class="workflow-step">
      <div class="step-number">1</div>
      <h3>Create Project</h3>
      <p>Choose a suitable template and quickly create a project</p>
    </div>
    <div class="workflow-step">
      <div class="step-number">2</div>
      <h3>Develop Components</h3>
      <p>Use component generation commands to quickly create components</p>
    </div>
    <div class="workflow-step">
      <div class="step-number">3</div>
      <h3>Manage Dependencies</h3>
      <p>Easily manage multi-package dependencies in monorepo</p>
    </div>
    <div class="workflow-step">
      <div class="step-number">4</div>
      <h3>Build and Publish</h3>
      <p>Build and publish projects with one click</p>
    </div>
  </div>
</div>

</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #41B883, #3178C6);
  --vp-home-hero-image-background-image: linear-gradient(to right, rgba(65, 184, 131, 0.2), rgba(49, 120, 198, 0.2));
  --vp-home-hero-image-filter: blur(72px);
}

.vp-doc {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.vp-doc h2 {
  margin-top: 48px;
  margin-bottom: 24px;
  font-size: 28px;
  text-align: center;
  background: linear-gradient(120deg, #41B883, #3178C6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.terminal-container {
  max-width: 800px;
  margin: 32px auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.terminal-image {
  width: 100%;
  height: auto;
  display: block;
}

.template-container {
  margin: 32px auto;
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.template-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.template-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.template-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
}

.template-card h3 {
  font-size: 20px;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.template-card p {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
  line-height: 1.5;
}

.template-link {
  display: inline-block;
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-brand);
  transition: background-color 0.2s;
}

.template-link:hover {
  background-color: var(--vp-c-brand);
  color: white;
}

.template-more {
  text-align: center;
  margin-top: 24px;
}

.more-link {
  display: inline-block;
  padding: 10px 24px;
  background: linear-gradient(120deg, #41B883, #3178C6);
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.more-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(49, 120, 198, 0.2);
}

.workflow-container {
  margin: 32px auto;
}

.workflow-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.workflow-step {
  flex: 1;
  min-width: 200px;
  max-width: 240px;
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(120deg, #41B883, #3178C6);
  color: white;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.workflow-step h3 {
  font-size: 18px;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.workflow-step p {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .template-grid {
    grid-template-columns: 1fr;
  }
  
  .workflow-steps {
    flex-direction: column;
    align-items: center;
  }
  
  .workflow-step {
    width: 100%;
    max-width: 100%;
  }
}
</style>
