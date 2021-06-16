/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation | Radar',
  tagline: 'Location data infrastructure | Geofencing SDK and API',
  url: 'https://radar.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'radarlabs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    metadatas: [
      { name: "description", content: "Location data infrastructure | Geofencing SDK and API"},
      { name: "fb:app_id", content: "1026503440803301" },
      { name: "og:site_name", content: "Radar" },
      { name: "og:type", content: "website" },
      { name: "og:description", content: "Location data infrastructure | Geofencing SDK and API" },
      { name: "og:image", content: "https://radar.io/static/image/logo-social.png"},
      { name: "og:image:url", content: "https://radar.io/static/image/logo-social.png"},
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@radarlabs" },
      { name: "twitter:image", content: "https://radar.io/static/image/logo.png" },
      { name: "twitter:description", content: "Location data infrastructure | Geofencing SDK and API"}
    ],
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
