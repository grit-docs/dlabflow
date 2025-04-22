// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'D-Lab Flow 도움말 센터',
  tagline: 'AI 학습, 디랩플로우에서 간편하고 빠르게!',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  url: 'https://grit-docs.github.io',
  baseUrl: '/dlabflow/',

  organizationName: 'gritdevops',
  projectName: 'dlabflow',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/grit-docs/dlabflow/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/grit-docs/dlabflow/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-zooming",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'D-Lab Flow',
        logo: {
          alt: 'D-Lab Flow Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://dlabflow.grit.re.kr',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '도움말 센터',
            items: [
              {
                label: '빠르게 시작하기',
                href: 'https://grit-docs.github.io/dlabflow/docs/intro',
              },
            ],
          },
          {
            title: '강원ICT융합연구원',
            items: [
              {
                label: '연구원 소개',
                href: 'https://grit.gwnu.ac.kr/contents?bmcode=about',
              },
              {
                label: '찾아오시는 길',
                href: 'https://grit.gwnu.ac.kr/contents?bmcode=location',
              },
              {
                label: '보유 기술 소개',
                href: 'https://grit.gwnu.ac.kr/contents?bmcode=tech',
              },
            ],
          },
          {
            title: '보유 플랫폼',
            items: [
              {
                label: 'DLab-FLow',
                href: 'https://dlabflow.grit.re.kr/',
              },
              {
                label: 'MEDBIZ',
                href: 'https://medbiz.or.kr/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 강원 ICT 융합 연구원 All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zooming: {
        selector: '.markdown img',
        delay: 500,
        background: {
          light: 'rgba(101,108,133,0.8)',
          dark: 'rgba(9,10,17,0.8)'
        },
        options: {
          // See the docs of zooming for all available options: https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    }),

};

export default config;
