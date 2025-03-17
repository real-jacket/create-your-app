import{_ as s,c as a,o as i,aj as n}from"./chunks/framework.CM7BdzdB.js";const u=JSON.parse('{"title":"React CRA TypeScript H5 Template","description":"","frontmatter":{},"headers":[],"relativePath":"en/templates/react-cra.md","filePath":"en/templates/react-cra.md"}'),e={name:"en/templates/react-cra.md"},t=n(`<h1 id="react-cra-typescript-h5-template" tabindex="-1">React CRA TypeScript H5 Template <a class="header-anchor" href="#react-cra-typescript-h5-template" aria-label="Permalink to &quot;React CRA TypeScript H5 Template&quot;">​</a></h1><p>A mobile H5 project template based on create-react-app + craco + typescript, providing a complete mobile development environment and build configuration.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>⚛️ React 18</li><li>📱 Mobile adaptation (using postcss-px-to-viewport)</li><li>🔢 TypeScript support</li><li>🎨 Style support (Less, CSS Modules)</li><li>📦 Craco configuration override</li><li>🧪 Jest testing framework</li><li>🔍 ESLint + Prettier code standards</li><li>📱 Mobile debugging tools (eruda)</li><li>📊 Performance monitoring and analysis</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Create project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/cya-react-cra-ts-h5-template</span></span></code></pre></div><h2 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-label="Permalink to &quot;Project Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-app/</span></span>
<span class="line"><span>  ├── public/                # Static assets</span></span>
<span class="line"><span>  │   ├── index.html         # HTML template</span></span>
<span class="line"><span>  │   └── favicon.ico        # Website icon</span></span>
<span class="line"><span>  ├── src/                   # Source code</span></span>
<span class="line"><span>  │   ├── assets/            # Asset files</span></span>
<span class="line"><span>  │   ├── components/        # Components</span></span>
<span class="line"><span>  │   ├── pages/             # Pages</span></span>
<span class="line"><span>  │   ├── services/          # Services</span></span>
<span class="line"><span>  │   ├── utils/             # Utility functions</span></span>
<span class="line"><span>  │   ├── App.tsx            # Application entry component</span></span>
<span class="line"><span>  │   └── index.tsx          # Entry file</span></span>
<span class="line"><span>  ├── craco.config.js        # Craco configuration</span></span>
<span class="line"><span>  ├── .eslintrc.js           # ESLint configuration</span></span>
<span class="line"><span>  ├── .prettierrc.js         # Prettier configuration</span></span>
<span class="line"><span>  ├── tsconfig.json          # TypeScript configuration</span></span>
<span class="line"><span>  ├── package.json           # Package information</span></span>
<span class="line"><span>  └── README.md              # Project documentation</span></span></code></pre></div><h2 id="available-scripts" tabindex="-1">Available Scripts <a class="header-anchor" href="#available-scripts" aria-label="Permalink to &quot;Available Scripts&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Start development server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Build production version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Run tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Code linting</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Code formatting</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span></span></code></pre></div><h2 id="mobile-adaptation" tabindex="-1">Mobile Adaptation <a class="header-anchor" href="#mobile-adaptation" aria-label="Permalink to &quot;Mobile Adaptation&quot;">​</a></h2><p>This template uses <code>postcss-px-to-viewport</code> for mobile adaptation, with a default design width of 375px. You can modify the related configuration in <code>craco.config.js</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pxToViewport</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;postcss-px-to-viewport&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  style: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    postcss: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        pxToViewport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          viewportWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">375</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Design draft width</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          unitPrecision: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          viewportUnit: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          selectorBlackList: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          minPixelValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          mediaQuery: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...other configurations</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="custom-configuration" tabindex="-1">Custom Configuration <a class="header-anchor" href="#custom-configuration" aria-label="Permalink to &quot;Custom Configuration&quot;">​</a></h2><h3 id="craco-configuration" tabindex="-1">Craco Configuration <a class="header-anchor" href="#craco-configuration" aria-label="Permalink to &quot;Craco Configuration&quot;">​</a></h3><p>You can modify the default CRA configuration in the <code>craco.config.js</code> file, including webpack, babel, postcss, etc.</p><h3 id="typescript-configuration" tabindex="-1">TypeScript Configuration <a class="header-anchor" href="#typescript-configuration" aria-label="Permalink to &quot;TypeScript Configuration&quot;">​</a></h3><p>You can modify the TypeScript configuration in the <code>tsconfig.json</code> file.</p><h3 id="eslint-configuration" tabindex="-1">ESLint Configuration <a class="header-anchor" href="#eslint-configuration" aria-label="Permalink to &quot;ESLint Configuration&quot;">​</a></h3><p>You can modify the ESLint configuration in the <code>.eslintrc.js</code> file.</p><h3 id="prettier-configuration" tabindex="-1">Prettier Configuration <a class="header-anchor" href="#prettier-configuration" aria-label="Permalink to &quot;Prettier Configuration&quot;">​</a></h3><p>You can modify the Prettier configuration in the <code>.prettierrc.js</code> file.</p><h2 id="adding-dependencies" tabindex="-1">Adding Dependencies <a class="header-anchor" href="#adding-dependencies" aria-label="Permalink to &quot;Adding Dependencies&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add production dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add development dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><h2 id="creating-components" tabindex="-1">Creating Components <a class="header-anchor" href="#creating-components" aria-label="Permalink to &quot;Creating Components&quot;">​</a></h2><p>You can use Create Your App&#39;s component creation feature:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @rjkt/create-your-app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> component</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MyComponent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ts-react</span></span></code></pre></div><p>This will create a new TypeScript React component in the <code>src/components</code> directory.</p>`,28),p=[t];function l(h,r,o,c,k,d){return i(),a("div",null,p)}const E=s(e,[["render",l]]);export{u as __pageData,E as default};
