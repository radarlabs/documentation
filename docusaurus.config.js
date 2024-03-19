const fetch = require('node-fetch');

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
      apiKey: '604d5f6f90cc8e49f532cd33b4b6c37e',
      appId: 'HNJN02FL1I',
      indexName: 'radar',
    },
    colorMode: {
      disableSwitch: true
    },
    prism: {
      additionalLanguages: ['kotlin', 'java', 'swift', 'csharp', 'dart'],
      theme: require('prism-react-renderer/themes/github'),
    },
    googleAnalytics: {
      trackingID: 'UA-83017101-1',
      anonymizeIP: true,
    },
  },
  plugins: [
    // it should be possible to have this plugin
    // live under src/plugins, but I (Greg) wasn't able to
    // do that -- this is maybe related to our version of
    // docusaurus. declaring the plugin "inline" below works.
    () => ({
        // `name` is crucial here for CodeBlock/index.js to get this plugin data
        name: 'radar-version-injector',
        async contentLoaded({ actions }) {
            const { setGlobalData } = actions;
            const RADAR_SDK_REPOS = {
                'web': 'radar-sdk-js',
                'ios': 'radar-sdk-ios',
                'android': 'radar-sdk-android',
                'reactnative': 'react-native-radar',
                'cordova': 'cordova-plugin-radar',
                'capacitor': 'capacitor-radar',
                'flutter': 'flutter-radar',
                'xamarin': 'radar-sdk-xamarin'
            }

            // fetch latest release version number from github.
            // there are two issues at play while doing this:
            // fetching all of the sdk versions one after another from github
            // will hit github's rate limit. we purposely delay each fetch below.
            // the second issue is that while developing, docusaurus will reload
            // this plugin continuously - that will also lead to rate limiting issues.
            // use a local cache file to avoid this.

            const fs = require('fs');
            PATH_TO_CACHE_FILE = 'radar-github-releases.json';

            let radarGitHubReleases = null;
            let foundCache = false;

            if (fs.existsSync(PATH_TO_CACHE_FILE)) {
                const cachedGithubReleases = JSON.parse(fs.readFileSync(PATH_TO_CACHE_FILE));
                // check timestamp, if it's older than 24 hours, then ignore cached versions
                if (Date.now() - cachedGithubReleases.timestamp < 24 * 60 * 60 * 1000) {
                    radarGitHubReleases = cachedGithubReleases.data;
                    foundCache = true;
                }
            }

            // we haven't found a cache, so fetch everything from github
            if (!radarGitHubReleases) {
                console.log(`Fetching versions from GitHub, this should take less than 30 seconds...`);

                radarGitHubReleases = {};
                for (const [sdkName, repo] of Object.entries(RADAR_SDK_REPOS)) {
                    const [response] = await Promise.all([
                        fetch(`https://api.github.com/repos/radarlabs/${repo}/releases/latest`),
                        // delay between each api call to avoid rate limiting
                        new Promise(resolve => setTimeout(resolve, 1000))
                    ]);
                    // check that response status code is 200, otherwise throw / stop immediately
                    if (response.status !== 200) {
                        throw new Error(`An error occurred while fetching versions from GitHub! ${response.status} -- ${response.statusText}`);
                    }
                    const data = await response.json();
                    radarGitHubReleases[`RADAR_${sdkName.toUpperCase()}_SDK_VERSION`] = data.name;
                }
            }

            // only write cache if we hadn't found one originally,
            // otherwise we'll keep incorrectly updating the timestamp
            if(!foundCache) {
                fs.writeFileSync(PATH_TO_CACHE_FILE, JSON.stringify({data: radarGitHubReleases, timestamp: Date.now()}));
            }

            // sanity check -- check that web sdk version looks reasonable and isn't undefined
            if (!radarGitHubReleases.RADAR_WEB_SDK_VERSION) {
                throw new Error('Web SDK version is undefined! Something went wrong while fetching versions from GitHub.');
            }

            setGlobalData({radarGitHubReleases});
        },
    }),
  ],
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
      src: '/documentation/js/fullstory.js',
      async: true,
    }
  ]
};
