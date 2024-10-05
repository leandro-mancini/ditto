import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ditto',
  tagline: 'Crie aplicativos escaláveis ​​e acessíveis com facilidade.',
  url: 'https://chakra-ui.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'styling',
        path: 'styling',
        routeBasePath: 'styling',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'theming',
        path: 'theming',
        routeBasePath: 'theming',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'components',
        path: 'components',
        routeBasePath: 'components',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: true,
          editUrl: 'https://github.com/leandro-mancini/ditto/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ditto',
      hideOnScroll: false,
      logo: {
        alt: 'Ditto Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/overview',
          activeBasePath: 'getting-started',
          label: 'Começando',
          position: 'left',
        },
        {
          to: '/styling/overview',
          activeBasePath: 'styling',
          label: 'Estilo',
          position: 'left',
        },
        {
          to: '/theming/overview',
          activeBasePath: 'theming',
          label: 'Tema',
          position: 'left',
        },
        {
          to: '/components/overview',
          activeBasePath: 'components',
          label: 'Components',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/leandro-mancini/ditto',
              icon: 'github',
            },
          ],
        },
      ],
      copyright: '© 2024 Ditto - Feito com ☕',
    },
    colorMode: {
      defaultMode: 'dark',
      // disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      indexName: 'chakra-ui',
      apiKey: 'df1dcc41f7b8e5d68e73dd56d1e19701',
      appId: 'BH4D9OD16A',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
