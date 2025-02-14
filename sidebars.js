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
        "campaigns",
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
            "integrations/cordial",
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
        },
        "geofencing/testing"
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
        "maps/maps",
        "maps/static-maps",
        "maps/autocomplete",
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
        "sdk/maui",
        "sdk/tracking",
        "sdk/remote-configuration",
      ],
    },
    "api",
    {
      type: "category",
      label: "Tutorials",
      items: [
        { type: "doc", id: "tutorials", label: "Overview" },
        "tutorials/building-an-on-premise-mode",
        "tutorials/building-menuboard-detection-with-in-geofence-tracking-options",
        "tutorials/showing-a-notification-when-a-user-enters-a-geofence",
        "tutorials/building-an-app-with-location-enabled-curbside-pickup",
        "tutorials/building-a-delivery-tracking-app",
        "tutorials/building-a-store-locator-on-ios",
        "tutorials/localizing-a-website-based-on-current-country-or-city",
        "tutorials/logging-and-analyzing-where-conversions-occur",
        "tutorials/migrate-from-google-maps",
        "tutorials/displaying-radar-maps-on-ios",
        "tutorials/displaying-radar-maps-on-android",
        "tutorials/displaying-radar-maps-with-react-native",
        "tutorials/displaying-radar-maps-with-flutter",
        "tutorials/create-a-custom-map-style",
      ],
    },
    "waypoint",
    "faqs"
  ]
};
