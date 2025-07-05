// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wanderers of the Rift Docs',
  tagline: 'A living design & gameplay archive',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://wanderers-of-the-rift.github.io',
  baseUrl: '/wotr-docs/',
  organizationName: 'Wanderers-Of-The-Rift', // GitHub org/user
  projectName: 'wotr-docs',                  // repo name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Wanderers-Of-The-Rift/wotr-docs/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'WotR Docs',
      logo: {
        alt: 'WotR Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Wanderers-Of-The-Rift/wotr-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/yourserver' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/Wanderers-Of-The-Rift/wotr-docs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wanderers of the Rift. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
