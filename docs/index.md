---
layout: home
title: Create Your App
titleTemplate: 快速创建各种应用和组件的CLI工具

hero:
  name: Create Your App
  text: 前端开发的效率工具
  tagline: 快速创建项目、组件和管理 monorepo，降低前端开发的前置成本
  image:
    src: /logo.svg
    alt: Create Your App
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/real-jacket/create-your-app

features:
  - icon: 🚀
    title: 快速创建项目
    details: 支持多种模板，包括 React、Vue 等，一键创建项目，无需繁琐配置
  - icon: 🧩
    title: 组件生成
    details: 快速创建组件，支持多种组件类型，提高开发效率
  - icon: 📦
    title: Monorepo 支持
    details: 完整的 monorepo 工作流支持，轻松管理多包项目
  - icon: 🛠️
    title: 可定制化
    details: 灵活的配置选项，满足不同需求，支持自定义模板
  - icon: ⚡
    title: 高性能
    details: 基于现代构建工具，提供快速的开发体验和构建性能
  - icon: 🔄
    title: 模板转换
    details: 将现有项目转换为模板，方便团队复用和分享
---

<div class="vp-doc">

## 简单易用的命令行工具

<div class="terminal-container">
  <img src="/terminal.svg" alt="Terminal Demo" class="terminal-image" />
</div>

## 丰富的模板选择

<div class="template-container">
  <div class="template-grid">
    <div class="template-card">
      <img src="/template-icons/react.svg" alt="React Webpack" class="template-icon" />
      <h3>React Webpack</h3>
      <p>基于 Webpack 5 的 React 项目模板</p>
      <a href="/templates/react-webpack" class="template-link">查看详情</a>
    </div>
    <div class="template-card">
      <img src="/template-icons/react.svg" alt="React CRA" class="template-icon" />
      <h3>React CRA</h3>
      <p>基于 Create React App 的 H5 项目模板</p>
      <a href="/templates/react-cra" class="template-link">查看详情</a>
    </div>
    <div class="template-card">
      <img src="/template-icons/react.svg" alt="React Vite" class="template-icon" />
      <h3>React Vite</h3>
      <p>基于 Vite 的 React H5 项目模板</p>
      <a href="/templates/react-vite" class="template-link">查看详情</a>
    </div>
    <div class="template-card">
      <img src="/template-icons/lib.svg" alt="库模板" class="template-icon" />
      <h3>库模板</h3>
      <p>基于 Rollup 的 TypeScript 库模板</p>
      <a href="/templates/lib" class="template-link">查看详情</a>
    </div>
  </div>
  <div class="template-more">
    <a href="/templates/" class="more-link">查看所有模板</a>
  </div>
</div>

## 完整的工作流支持

<div class="workflow-container">
  <div class="workflow-steps">
    <div class="workflow-step">
      <div class="step-number">1</div>
      <h3>创建项目</h3>
      <p>选择适合的模板，快速创建项目</p>
    </div>
    <div class="workflow-step">
      <div class="step-number">2</div>
      <h3>开发组件</h3>
      <p>使用组件生成命令，快速创建组件</p>
    </div>
    <div class="workflow-step">
      <div class="step-number">3</div>
      <h3>管理依赖</h3>
      <p>在 monorepo 中轻松管理多包依赖</p>
    </div>
    <div class="workflow-step">
      <div class="step-number">4</div>
      <h3>构建发布</h3>
      <p>一键构建和发布项目</p>
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
