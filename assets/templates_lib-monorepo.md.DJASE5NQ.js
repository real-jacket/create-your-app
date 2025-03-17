import{_ as s,c as a,o as i,aj as n}from"./chunks/framework.CM7BdzdB.js";const F=JSON.parse('{"title":"Monorepo 库模板","description":"","frontmatter":{},"headers":[],"relativePath":"templates/lib-monorepo.md","filePath":"templates/lib-monorepo.md"}'),p={name:"templates/lib-monorepo.md"},e=n(`<h1 id="monorepo-库模板" tabindex="-1">Monorepo 库模板 <a class="header-anchor" href="#monorepo-库模板" aria-label="Permalink to &quot;Monorepo 库模板&quot;">​</a></h1><p>基于 pnpm + TypeScript 的 monorepo 库模板，用于创建和管理多包 JavaScript/TypeScript 库项目。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>📦 基于 pnpm workspace</li><li>🔄 统一的构建流程</li><li>📘 TypeScript 支持</li><li>🧪 Jest 测试框架</li><li>📊 代码覆盖率报告</li><li>📏 ESLint + Prettier 代码规范</li><li>📝 自动生成类型声明文件</li><li>🔄 版本管理（Changesets）</li><li>🚀 CI/CD 工作流（GitHub Actions）</li><li>📚 文档站点（VitePress）</li></ul><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建 monorepo 库项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-lib-monorepo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/cya-lib-monorepo-template</span></span></code></pre></div><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-lib-monorepo/</span></span>
<span class="line"><span>  ├── .changeset/           # Changesets 配置</span></span>
<span class="line"><span>  ├── .github/              # GitHub 工作流配置</span></span>
<span class="line"><span>  ├── docs/                 # 文档</span></span>
<span class="line"><span>  │   ├── .vitepress/       # VitePress 配置</span></span>
<span class="line"><span>  │   └── index.md          # 文档首页</span></span>
<span class="line"><span>  ├── packages/             # 子包</span></span>
<span class="line"><span>  │   ├── core/             # 核心包</span></span>
<span class="line"><span>  │   │   ├── src/          # 源代码</span></span>
<span class="line"><span>  │   │   ├── tests/        # 测试</span></span>
<span class="line"><span>  │   │   └── package.json  # 包信息</span></span>
<span class="line"><span>  │   ├── utils/            # 工具包</span></span>
<span class="line"><span>  │   │   ├── src/          # 源代码</span></span>
<span class="line"><span>  │   │   ├── tests/        # 测试</span></span>
<span class="line"><span>  │   │   └── package.json  # 包信息</span></span>
<span class="line"><span>  │   └── template/         # 子包模板</span></span>
<span class="line"><span>  ├── .eslintrc.js          # ESLint 配置</span></span>
<span class="line"><span>  ├── .prettierrc.js        # Prettier 配置</span></span>
<span class="line"><span>  ├── jest.config.js        # Jest 配置</span></span>
<span class="line"><span>  ├── tsconfig.json         # TypeScript 配置</span></span>
<span class="line"><span>  ├── package.json          # 根包信息</span></span>
<span class="line"><span>  ├── pnpm-workspace.yaml   # pnpm workspace 配置</span></span>
<span class="line"><span>  └── README.md             # 项目说明</span></span></code></pre></div><h2 id="可用脚本" tabindex="-1">可用脚本 <a class="header-anchor" href="#可用脚本" aria-label="Permalink to &quot;可用脚本&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建所有包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开发模式（监听文件变化）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 代码检查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 代码格式化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建变更集</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changeset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 版本更新</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version-packages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 发布包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动文档开发服务器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre></div><h2 id="创建新包" tabindex="-1">创建新包 <a class="header-anchor" href="#创建新包" aria-label="Permalink to &quot;创建新包&quot;">​</a></h2><p>你可以使用 Create Your App 的包创建功能：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在项目根目录执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-new-package</span></span></code></pre></div><p>或者手动复制 <code>packages/template</code> 目录：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages/template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages/my-new-package</span></span></code></pre></div><p>然后修改 <code>packages/my-new-package/package.json</code> 中的包名和其他信息。</p><h2 id="版本管理" tabindex="-1">版本管理 <a class="header-anchor" href="#版本管理" aria-label="Permalink to &quot;版本管理&quot;">​</a></h2><p>该模板使用 Changesets 进行版本管理：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建变更集</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changeset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新版本号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version-packages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 发布包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> release</span></span></code></pre></div><h2 id="包间依赖" tabindex="-1">包间依赖 <a class="header-anchor" href="#包间依赖" aria-label="Permalink to &quot;包间依赖&quot;">​</a></h2><p>在子包之间添加依赖：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 utils 包中添加对 core 包的依赖</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages/utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @my-scope/core@workspace:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span></code></pre></div><h2 id="ci-cd-工作流" tabindex="-1">CI/CD 工作流 <a class="header-anchor" href="#ci-cd-工作流" aria-label="Permalink to &quot;CI/CD 工作流&quot;">​</a></h2><p>该模板包含以下 GitHub Actions 工作流：</p><ul><li><strong>CI</strong>：在 Pull Request 时运行测试和构建</li><li><strong>Release</strong>：在合并到主分支时发布包</li><li><strong>Docs</strong>：在合并到主分支时构建和部署文档</li></ul><h2 id="自定义配置" tabindex="-1">自定义配置 <a class="header-anchor" href="#自定义配置" aria-label="Permalink to &quot;自定义配置&quot;">​</a></h2><h3 id="pnpm-配置" tabindex="-1">pnpm 配置 <a class="header-anchor" href="#pnpm-配置" aria-label="Permalink to &quot;pnpm 配置&quot;">​</a></h3><p>你可以在 <code>pnpm-workspace.yaml</code> 文件中修改 workspace 配置。</p><h3 id="typescript-配置" tabindex="-1">TypeScript 配置 <a class="header-anchor" href="#typescript-配置" aria-label="Permalink to &quot;TypeScript 配置&quot;">​</a></h3><p>你可以在根目录的 <code>tsconfig.json</code> 和各个包中的 <code>tsconfig.json</code> 文件中修改 TypeScript 配置。</p><h3 id="eslint-配置" tabindex="-1">ESLint 配置 <a class="header-anchor" href="#eslint-配置" aria-label="Permalink to &quot;ESLint 配置&quot;">​</a></h3><p>你可以在 <code>.eslintrc.js</code> 文件中修改 ESLint 配置。</p><h3 id="prettier-配置" tabindex="-1">Prettier 配置 <a class="header-anchor" href="#prettier-配置" aria-label="Permalink to &quot;Prettier 配置&quot;">​</a></h3><p>你可以在 <code>.prettierrc.js</code> 文件中修改 Prettier 配置。</p><h3 id="jest-配置" tabindex="-1">Jest 配置 <a class="header-anchor" href="#jest-配置" aria-label="Permalink to &quot;Jest 配置&quot;">​</a></h3><p>你可以在 <code>jest.config.js</code> 文件中修改 Jest 配置。</p><h2 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h2><p>该模板使用 VitePress 构建文档站点，文档源文件位于 <code>docs</code> 目录。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动文档开发服务器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre></div>`,39),l=[e];function t(h,k,c,r,o,d){return i(),a("div",null,l)}const y=s(p,[["render",t]]);export{F as __pageData,y as default};
