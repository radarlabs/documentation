/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation | Radar',
  tagline: 'Location data infrastructure | Geofencing SDK and API',
  url: 'https://radar.com',
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
      { name: "og:image", content: "https://radar.com/static/image/logo-social.png"},
      { name: "og:image:url", content: "https://radar.com/static/image/logo-social.png"},
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@radarlabs" },
      { name: "twitter:image", content: "https://radar.com/static/image/logo.png" },
      { name: "twitter:description", content: "Location data infrastructure | Geofencing SDK and API"}
    ],
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          // Use to instead of href to disable the external link icon; see: https://github.com/facebook/docusaurus/pull/4949
          to: 'https://radar.com/pricing',
          label: 'Pricing',
          position: 'right',
        },
        {
          // Use to instead of href to disable the external link icon; see: https://github.com/facebook/docusaurus/pull/4949
          to: 'https://radar.com/contact',
          label: 'Contact Sales',
          position: 'right',
        },
        {
          // Use to instead of href to disable the external link icon; see: https://github.com/facebook/docusaurus/pull/4949
          to: 'https://radar.com/login',
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
      appId: 'BH4D9OD16A',
      indexName: 'radar',
    },
    colorMode: {
      disableSwitch: true
    },
    prism: {
      additionalLanguages: ['kotlin', 'java', 'swift'],
      theme: require('prism-react-renderer/themes/github'),
    },
    googleAnalytics: {
      trackingID: 'UA-83017101-1',
      anonymizeIP: true,
    },
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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'js/fullstory.js',
      async: true,
    }
  ]
};
