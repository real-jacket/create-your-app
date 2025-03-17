import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/create-your-app/',
  title: 'Create Your App',
  description: '一个用于创建各种应用模板的工具',

  // 国际化配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Create Your App',
      description: '一个用于创建各种应用模板的工具',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: '模板', link: '/templates/' },
          {
            text: 'GitHub',
            link: 'https://github.com/real-jacket/create-your-app'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/guide/' },
                { text: '快速开始', link: '/guide/getting-started' },
                { text: '配置', link: '/guide/configuration' },
                { text: '开发环境配置', link: '/guide/development' },
                { text: '版本管理策略', link: '/guide/versioning' }
              ]
            }
          ],
          '/api/': [
            {
              text: 'API',
              items: [
                { text: '命令行', link: '/api/' },
                { text: '配置选项', link: '/api/options' }
              ]
            }
          ],
          '/templates/': [
            {
              text: '模板',
              items: [
                { text: '概览', link: '/templates/' },
                { text: 'React Webpack', link: '/templates/react-webpack' },
                { text: 'React CRA', link: '/templates/react-cra' },
                { text: 'React Vite', link: '/templates/react-vite' },
                {
                  text: 'React Vite Admin',
                  link: '/templates/react-vite-admin'
                },
                { text: '库模板', link: '/templates/lib' },
                { text: 'Monorepo 库模板', link: '/templates/lib-monorepo' }
              ]
            }
          ]
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        outline: {
          level: 'deep',
          label: '本页目录'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Create Your App',
      description: 'A tool for creating various application templates',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'API', link: '/en/api/' },
          { text: 'Templates', link: '/en/templates/' },
          {
            text: 'GitHub',
            link: 'https://github.com/real-jacket/create-your-app'
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/en/guide/' },
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Configuration', link: '/en/guide/configuration' },
                {
                  text: 'Development Environment',
                  link: '/en/guide/development'
                },
                { text: 'Versioning Strategy', link: '/en/guide/versioning' }
              ]
            }
          ],
          '/en/api/': [
            {
              text: 'API',
              items: [
                { text: 'Command Line', link: '/en/api/' },
                { text: 'Configuration Options', link: '/en/api/options' }
              ]
            }
          ],
          '/en/templates/': [
            {
              text: 'Templates',
              items: [
                { text: 'Overview', link: '/en/templates/' },
                { text: 'React Webpack', link: '/en/templates/react-webpack' },
                { text: 'React CRA', link: '/en/templates/react-cra' },
                { text: 'React Vite', link: '/en/templates/react-vite' },
                {
                  text: 'React Vite Admin',
                  link: '/en/templates/react-vite-admin'
                },
                { text: 'Library Template', link: '/en/templates/lib' },
                {
                  text: 'Monorepo Library Template',
                  link: '/en/templates/lib-monorepo'
                }
              ]
            }
          ]
        },
        docFooter: {
          prev: 'Previous Page',
          next: 'Next Page'
        },
        lastUpdated: {
          text: 'Last Updated',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        outline: {
          level: 'deep',
          label: 'On This Page'
        }
      }
    }
  },

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/create-your-app/favicon.svg'
      }
    ],
    ['meta', { name: 'theme-color', content: '#3178C6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Create Your App' }],
    [
      'meta',
      { name: 'og:description', content: '一个用于创建各种应用模板的工具' }
    ],
    ['meta', { name: 'og:image', content: '/create-your-app/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/real-jacket/create-your-app' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2023-present Real Jacket'
    },
    search: {
      provider: 'local'
    }
  }
});
