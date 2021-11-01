/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  defaultSidebar: [
    { type: "doc", id: "overview", label: "Overview" },
    "geofences",
    {
      type: "category",
      label: "Places",
      items: [
        { type: "doc", id: "places", label: "Overview" },
        "places/categories",
        "places/chains",
        "places/groups"
      ],
    },
    {
      type: "category",
      label: "Regions",
      items: [
        { type: "doc", id: "regions", label: "Overview" },
        "regions/countries",
        "regions/states",
        "regions/dmas",
      ],
    },
    "beacons",
    "trip-tracking",
    {
      type: "category",
      label: "SDK Reference",
      items: [
        "sdk/sdk-overview",
        "sdk/ios",
        "sdk/android",
        "sdk/react-native",
        "sdk/web",
        "sdk/cordova",
        "sdk/capacitor",
        "sdk/flutter",
        "sdk/xamarin",
        "sdk/tracking",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        { type: "doc", id: "api", label: "Overview" },
        "api/track",
        "api/context",
        "api/geocoding",
        "api/search",
        "api/routing",
        "api/users",
        "api/trips",
        "api/geofences",
        "api/events",
        "api/beacons",
        "api/place-settings",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        { type: "doc", id: "integrations", label: "Overview" },
        "integrations/webhooks",
        "integrations/braze",
        "integrations/urban-airship",
        "integrations/onesignal",
        "integrations/mparticle",
        "integrations/segment",
        "integrations/branch",
        "integrations/lytics",
        "integrations/iterable",
        "integrations/leanplum",
        "integrations/salesforce",
        "integrations/amplitude",
        "integrations/mixpanel",
        "integrations/pinpoint",
        "integrations/yext",
        "integrations/brandify",
        "integrations/olo",
      ],
    },
    "toolkit",
    {
      type: "category",
      label: "Tutorials",
      items: [
        { type: "doc", id: "tutorials", label: "Overview" },
        "tutorials/showing-a-notification-when-a-user-enters-a-geofence",
        "tutorials/building-an-app-with-location-enabled-curbside-pickup",
        "tutorials/building-a-delivery-tracker-with-live-location-and-etas",
        "tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",
        "tutorials/building-a-store-locator-on-ios",
        "tutorials/localizing-a-website-based-on-current-country-or-city",
      ],
    },
    "dashboard",
    "faqs",
  ],
  miscSidebar: [
    { type: "doc", id: "overview", label: "Overview" },
    "geofences",
    {
      type: "category",
      label: "Places",
      items: [
        { type: "doc", id: "places", label: "Overview" },
        "places/categories",
        "places/chains",
        "places/groups"
      ],
    },
    {
      type: "category",
      label: "Regions",
      items: [
        { type: "doc", id: "regions", label: "Overview" },
        "regions/countries",
        "regions/dmas",
        "regions/states",
      ],
    },
    "beacons",
    "trip-tracking",
    {
      type: "category",
      label: "SDK Reference",
      items: [
        "sdk/sdk-overview",
        "sdk/ios",
        "sdk/android",
        "sdk/react-native",
        "sdk/web",
        "sdk/cordova",
        "sdk/capacitor",
        "sdk/flutter",
        "sdk/tracking",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        { type: "doc", id: "api", label: "Overview" },
        "api/track",
        "api/context",
        "api/geocoding",
        "api/search",
        "api/routing",
        "api/users",
        "api/trips",
        "api/geofences",
        "api/events",
        "api/beacons",
        "api/place-settings",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        { type: "doc", id: "integrations", label: "Overview" },
        "integrations/webhooks",
        "integrations/braze",
        "integrations/urban-airship",
        "integrations/onesignal",
        "integrations/mparticle",
        "integrations/segment",
        "integrations/branch",
        "integrations/lytics",
        "integrations/iterable",
        "integrations/leanplum",
        "integrations/salesforce",
        "integrations/amplitude",
        "integrations/mixpanel",
        "integrations/pinpoint",
        "integrations/yext",
        "integrations/brandify",
        "integrations/olo",
      ],
    },
    "toolkit",
    {
      type: "category",
      label: "Tutorials",
      items: [
        { type: "doc", id: "tutorials", label: "Overview" },
        "tutorials/building-a-delivery-tracker-with-live-location-and-etas",
        "tutorials/building-a-store-locator-on-ios",
        "tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",
        "tutorials/building-an-app-with-location-enabled-curbside-pickup",
        "tutorials/localizing-a-website-based-on-current-country-or-city",
        "tutorials/showing-a-notification-when-a-user-enters-a-geofence",
      ],
    },
    "faqs",
    "insights", // deprecated
    "vulnerability-disclosure-policy",
  ],
};
