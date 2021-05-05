/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation | Radar',
  tagline: 'Dinosaurs are cool',
  url: 'https://radar.io/',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'radarlabs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://radar.io/pricing',
          label: 'Pricing',
          position: 'right',
        },
        {
          href: 'https://radar.io/contact',
          label: 'Contact Sales',
          position: 'right',
        },
        {
          href: 'https://radar.io/login',
          label: 'Dashboard',
          position: 'right',
        },
        // Note: Disabled this in CSS since hiding this will just fallback to default search positioning
        {
          type: 'search',
          position: 'left',
        },
      ],
    },
    algolia: {
      apiKey: 'c6ef22def89d89fa4c79364b415590aa',
      indexName: 'radar',
      appId: 'BH4D9OD16A',

      // Optional: see doc section below
      contextualSearch: true,


      // Optional: Algolia search parameters
      searchParameters: {},
    },
    colorMode: {
      disableSwitch: true
    },
    prism: {
      additionalLanguages: ['kotlin', 'java', 'swift'],
      theme: require('prism-react-renderer/themes/github'),
      // additionalLanguages: [`csv`, 'java', 'kotlin', 'objc', 'swift', 'xml']
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/radarlabs/docs/edit/main/',
          routeBasePath: '/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/websitehttps://radar.io/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
