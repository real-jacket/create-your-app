import{_ as a,c as e,o as t,aj as i}from"./chunks/framework.CM7BdzdB.js";const u=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/getting-started.md","filePath":"en/guide/getting-started.md"}'),s={name:"en/guide/getting-started.md"},p=i('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p>This guide will help you get started with Create Your App and create your first project.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>You can use Create Your App without installing it by using <code>npx</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span></span></code></pre></div><p>Or you can install it globally:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span></span></code></pre></div><p>Then you can use it directly:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span></span></code></pre></div><h2 id="creating-a-project" tabindex="-1">Creating a Project <a class="header-anchor" href="#creating-a-project" aria-label="Permalink to &quot;Creating a Project&quot;">​</a></h2><p>To create a new project, use the <code>create</code> command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span></span></code></pre></div><p>This will start an interactive process that will guide you through the project creation.</p><h3 id="using-a-specific-template" tabindex="-1">Using a Specific Template <a class="header-anchor" href="#using-a-specific-template" aria-label="Permalink to &quot;Using a Specific Template&quot;">​</a></h3><p>You can specify a template when creating a project:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/cya-react-webpack-template</span></span></code></pre></div><p>Available templates:</p><ul><li><code>@rjkt/cya-react-webpack-template</code>: React project based on Webpack 5</li><li><code>@rjkt/cya-react-cra-template</code>: React project based on Create React App</li><li><code>@rjkt/cya-react-vite-template</code>: React project based on Vite</li><li><code>@rjkt/cya-lib-template</code>: TypeScript library based on Rollup</li><li><code>@rjkt/cya-lib-monorepo-template</code>: Monorepo library template</li></ul><h3 id="template-shortcuts" tabindex="-1">Template Shortcuts <a class="header-anchor" href="#template-shortcuts" aria-label="Permalink to &quot;Template Shortcuts&quot;">​</a></h3><p>You can use shortcuts for templates:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react-webpack</span></span></code></pre></div><p>Available shortcuts:</p><ul><li><code>react-webpack</code>: React project based on Webpack 5</li><li><code>react-cra</code>: React project based on Create React App</li><li><code>react-vite</code>: React project based on Vite</li><li><code>lib</code>: TypeScript library based on Rollup</li><li><code>lib-monorepo</code>: Monorepo library template</li></ul><h2 id="creating-components" tabindex="-1">Creating Components <a class="header-anchor" href="#creating-components" aria-label="Permalink to &quot;Creating Components&quot;">​</a></h2><p>Once you have created a project, you can use Create Your App to generate components:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> component</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Button</span></span></code></pre></div><p>This will create a component named <code>Button</code> in your project.</p><h3 id="component-options" tabindex="-1">Component Options <a class="header-anchor" href="#component-options" aria-label="Permalink to &quot;Component Options&quot;">​</a></h3><p>You can specify options when creating a component:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> component</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Button</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --style</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> css</span></span></code></pre></div><p>Available options:</p><ul><li><code>--type</code>: Component type (<code>function</code> or <code>class</code>)</li><li><code>--style</code>: Style type (<code>css</code>, <code>scss</code>, <code>less</code>, or <code>none</code>)</li><li><code>--path</code>: Path to create the component (default: <code>src/components</code>)</li></ul><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next Steps&quot;">​</a></h2><p>Now that you have created your first project, you can:</p><ul><li>Check out the <a href="./configuration.html">Configuration</a> guide to learn how to customize your project</li><li>Explore the <a href="./../templates/">Templates</a> section to learn more about available templates</li><li>Read the <a href="./../api/">API</a> documentation to learn about all available commands and options</li></ul>',35),n=[p];function l(o,c,h,r,d,k){return t(),e("div",null,n)}const y=a(s,[["render",l]]);export{u as __pageData,y as default};
