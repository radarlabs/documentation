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
    {
      type: "category",
      label: "Geofencing Platform",
      items: [
        "geofencing/overview",
        "geofences",
        "trip-tracking",
        "places",
        "regions",
        "beacons",
        "fraud",
        "geofencing/testing",
        {
          type: "category",
          label: "Integrations",
          items: [
            { type: "doc", id: "integrations", label: "Overview" },
            "integrations/webhooks",
            "integrations/urban-airship",
            "integrations/amplitude",
            "integrations/aws-pinpoint",
            "integrations/aws-s3",
            "integrations/attentive",
            "integrations/branch",
            "integrations/brandify",
            "integrations/braze",
            "integrations/census",
            "integrations/iterable",
            "integrations/leanplum",
            "integrations/lytics",
            "integrations/mixpanel",
            "integrations/mparticle",
            "integrations/olo",
            "integrations/onesignal",
            "integrations/salesforce",
            "integrations/segment",
            "integrations/yext",
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Maps Platform",
      items: [
        "maps/overview",
        "maps/geocoding",
        "maps/search",
        "maps/routing",
        "maps/maps"
      ],
    },
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
    "api",
    "toolkit",
    {
      type: "category",
      label: "Tutorials",
      items: [
        { type: "doc", id: "tutorials", label: "Overview" },
        "tutorials/showing-a-notification-when-a-user-enters-a-geofence",
        "tutorials/building-an-app-with-location-enabled-curbside-pickup",
        "tutorials/building-a-delivery-tracking-app",
        "tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",
        "tutorials/building-a-store-locator-on-ios",
        "tutorials/localizing-a-website-based-on-current-country-or-city",
        "tutorials/logging-and-analyzing-where-conversions-occur",
      ],
    },
    "faqs"
  ]
};
