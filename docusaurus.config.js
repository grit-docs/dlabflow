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
  tagline: `데이터 수집부터 라벨링, 모델 학습과 평가까지.
AI 개발의 모든 과정을 하나의 플랫폼에서 완성해보세요.

D-Lab Flow는 AI 모델 개발에 필요한 핵심 기능을 직관적인 인터페이스로 제공합니다.
복잡한 개발 환경이나 코드 작성 없이도, 클릭 몇 번으로 고성능 AI 모델을 생성할 수 있습니다.`,
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  url: 'https://grit-docs.github.io',
  baseUrl: '/dlabflow/',

  organizationName: 'gritdevops',
  projectName: 'dlabflow',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Algolia 사이트 소유권 확인을 위한 메타 태그 추가
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '139F10EE611CB946',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'FBcr1wZm2BNh7GnWcGHPij6d3Rl9M1dpNtbWHI__4fc',
      },
    },

  ],

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
        navbar: {
          // title: 'D-Lab Flow',
          logo: {
            alt: 'D-Lab Flow Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'search',
              position: 'right',
            },
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
                {
                  label: '데이터 관리',
                  href: 'https://grit-docs.github.io/dlabflow/docs/category/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B4%80%EB%A6%AC',
                },
                {
                  label: '학습 데이터 관리',
                  href: 'https://grit-docs.github.io/dlabflow/docs/category/%ED%95%99%EC%8A%B5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B4%80%EB%A6%AC',
                },
                {
                  label: 'AI 학습관리',
                  href: 'https://grit-docs.github.io/dlabflow/docs/category/ai-%ED%95%99%EC%8A%B5-%EA%B4%80%EB%A6%AC',
                },
                {
                  label: '데이터 수집 장치 관리',
                  href: 'https://grit-docs.github.io/dlabflow/docs/category/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A7%91-%EC%9E%A5%EC%B9%98-%EA%B4%80%EB%A6%AC',
                },
                {
                  label: '시스템 관리',
                  href: 'https://grit-docs.github.io/dlabflow/docs/category/%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B4%80%EB%A6%AC',
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
                {
                  label: '기업 지원 소개',
                  href: 'https://grit.gwnu.ac.kr/contents?bmcode=support',
                },
                {
                  label: 'SW 시험 소개',
                  href: 'https://grit.gwnu.ac.kr/contents?bmcode=kolas1',
                },
                {
                  label: '공지사항',
                  href: 'https://grit.gwnu.ac.kr/board/list?bmcode=notice',
                },
              ],
            },
            {
              title: '보유 플랫폼',
              items: [
                {
                  label: 'D-Lab FLow',
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
        // Algolia 검색 설정 추가
        algolia: {
          appId: '3ZSG61BAL0',
          apiKey: '9dfd1cb74fc410d92dc14ecb0918468c',
          indexName: 'dlab_flow_index',
          contextualSearch: false,
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
