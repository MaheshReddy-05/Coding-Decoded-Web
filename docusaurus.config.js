// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coding Decoded',
  tagline: 'Let\'s Show our Coding Power',
  favicon: 'img/LogD.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mahesh Reddy', // Usually your GitHub org/user name.
  projectName: 'Coding-Decoded-Web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MaheshReddy-05/Coding-Decoded-Web',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MaheshReddy-05/Coding-Decoded-Web',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Coding Decoded',
        logo: {
          alt: 'My Site Logo',
          src: 'img/LogW.svg',
          srcDark:'img/LogD.svg',
        },
        items: [
          // {
          //   label: 'Solutions',
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          // },
          {
            label: 'Solutions',
            to: '/solutions/category/0000---0099',
            position: 'left',
          },
          {
            label: 'SDLC',
            // type: 'docSidebar',
            // sidebarId: 'tutorialSidebar',
            to:'/SDLC/2023/Jan/h',
            footer:false,
            position: 'left',
          },
          {
            label: 'LLD',
            to:'/LLD/questions',
            position: 'left',
          },
          { 
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
         },

          {
            href: 'https://github.com/MaheshReddy-05/Coding-Decoded-Web',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
    //   footer: {
    //     style: 'dark',
    //     links: [
    //       {
    //         title: 'Docs',
    //         items: [
    //           {
    //             label: 'Tutorial',
    //             to: '/docs/intro',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'Community',
    //         items: [
    //           {
    //             label: 'Stack Overflow',
    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //           },
    //           {
    //             label: 'Discord',
    //             href: 'https://discordapp.com/invite/docusaurus',
    //           },
    //           {
    //             label: 'Twitter',
    //             href: 'https://twitter.com/docusaurus',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'More',
    //         items: [
    //           {
    //             label: 'Blog',
    //             to: '/blog',
    //           },
    //           {
    //             label: 'GitHub',
    //             href: 'https://github.com/facebook/docusaurus',
    //           },
    //         ],
    //       },
    //     ],
    //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    //   },
    //   prism: {
    //     theme: lightCodeTheme,
    //     darkTheme: darkCodeTheme,
    //   },
    }
    ),
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'solutions',
          path: 'solutions',
          routeBasePath: 'solutions',
          sidebarPath: require.resolve('./sidebars.js'),
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/MaheshReddy-05',
        }, 
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'SDLC',
          path: 'SDLC',
          routeBasePath: 'SDLC',
          sidebarPath: require.resolve('./sidebars.js'),
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/MaheshReddy-05',
        }, 
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'LLD',
          path: 'LLD',
          routeBasePath: 'LLD',
          sidebarPath: require.resolve('./sidebars.js'),
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/MaheshReddy-05',
        }, 
      ],
      // [
      //   '@docusaurus/plugin-content-docs',
      //   {
      //     id: 'collections',
      //     path: 'collections',
      //     routeBasePath: 'collections',
      //     sidebarPath: require.resolve('./sidebars.js'),
      //     // remarkPlugins: [math],
      //     // rehypePlugins: [katex],
      //     // showLastUpdateTime: true,
      //     // showLastUpdateAuthor: true,
      //     editUrl:
      //       'https://github.com/MaheshReddy-05',
      //   }, 
      // ],

      // [
      //   '@docusaurus/plugin-content-docs',
      //   {
      //     id: 'templates',
      //     path: 'templates',
      //     routeBasePath: 'templates',
      //     sidebarPath: require.resolve('./sidebars.js'),
      //     // remarkPlugins: [math],
      //     // rehypePlugins: [katex],
      //     // showLastUpdateTime: true,
      //     // showLastUpdateAuthor: true,
      //     editUrl:
      //       'https://github.com/MaheshReddy-05',
      //   }, 
      // ],
  ],
};

module.exports = config;
