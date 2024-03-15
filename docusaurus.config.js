import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Principal',
  tagline: 'Guia para levantar Facturalo Perú.',
  favicon: 'img/logofavi.ico',

  // Set the production url of your site here
  url: 'https://facturaloperu.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'https://github.com/LuisLopez-developer', // Usually your GitHub org/user name.
  projectName: 'Facturalo Perú', // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  '',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        //title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Logo_buho_.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            to: '/contact',
            position: 'left',
            label: 'Contacto',
            
          },
          {
            href: 'https://gitlab.com/b.mendoza/facturadorpro3',
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
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@carlomagno835/featured',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/facturaloperu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://gitlab.com/b.mendoza/facturadorpro3',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FacturaloPerú`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
