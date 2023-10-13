"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7527],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",s="alertTip_1W6d",l="alertSuccess_7EZp",p=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"tip"===n?a.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):null}},9197:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(970),s={sidebar_label:"Cordova",title:"Cordova Plugin",description:"Documentation for Cordova Plugin"},l=void 0,p={unversionedId:"sdk/cordova",id:"sdk/cordova",isDocsHomePage:!1,title:"Cordova Plugin",description:"Documentation for Cordova Plugin",source:"@site/docs/sdk/cordova.mdx",sourceDirName:"sdk",slug:"/sdk/cordova",permalink:"/documentation/sdk/cordova",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/sdk/cordova.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Cordova",title:"Cordova Plugin",description:"Documentation for Cordova Plugin"},sidebar:"defaultSidebar",previous:{title:"Web",permalink:"/documentation/sdk/web"},next:{title:"Capacitor",permalink:"/documentation/sdk/capacitor"}},d=[{value:"Install",id:"install",children:[]},{value:"Integrate",id:"integrate",children:[{value:"Initialize",id:"initialize",children:[]},{value:"Identify user",id:"identify-user",children:[]},{value:"Request permissions",id:"request-permissions",children:[]},{value:"Foreground tracking",id:"foreground-tracking",children:[]},{value:"Background tracking",id:"background-tracking",children:[]},{value:"Trip tracking",id:"trip-tracking",children:[]},{value:"Manual tracking",id:"manual-tracking",children:[]},{value:"Other APIs",id:"other-apis",children:[]}]},{value:"Support",id:"support",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the documentation for the Cordova plugin. Before integrating, read the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"native SDK documentation")," to familiarize yourself with the platform."),(0,o.kt)("p",null,"See the source on GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/cordova-plugin-radar"},"here"),". Or, see the ",(0,o.kt)("inlineCode",{parentName:"p"},"@radarlabs/cordova-plugin-radar")," package on npm ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@radarlabs/cordova-plugin-radar"},"here"),"."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Install the Cordova plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cordova plugin add @radarlabs/cordova-plugin-radar\n")),(0,o.kt)("p",null,"Before writing any JavaScript, you must integrate the Radar SDK with your iOS and Android apps as described in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,o.kt)("p",null,"On iOS, you must add location usage descriptions and background modes to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist"),". Initialize the SDK in ",(0,o.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),", passing in your Radar publishable API key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"#import <RadarSDK/RadarSDK.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  [Radar initializeWithPublishableKey:publishableKey];\n  // ...\n}\n")),(0,o.kt)("p",null,"On Android, you must add the Google Play Services library to your project, then add the SDK to your project, preferably using Gradle. Finally, initialize the SDK in ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate()")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),", passing in your Radar publishable API key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import io.radar.sdk.Radar;\n\npublic class MainActivity extends CordovaActivity {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    Radar.initialize(this, publishableKey);\n    // ...\n  }\n\n}\n")),(0,o.kt)("h2",{id:"integrate"},"Integrate"),(0,o.kt)("h3",{id:"initialize"},"Initialize"),(0,o.kt)("p",null,"When your app starts, initialize the SDK with your publishable key."),(0,o.kt)("p",null,"Use your ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Publishable")," key for testing and non-production environments. Use your ",(0,o.kt)("inlineCode",{parentName:"p"},"Live Publishable")," key for production environments."),(0,o.kt)(i.Z,{alertType:"warning",mdxType:"Alert"},"Note that you should always use your publishable API keys, which are restricted in scope, in the SDK. Do not use your secret API keys, which are unrestricted in scope, in any client-side code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.initialize(publishableKey);\n")),(0,o.kt)("h3",{id:"identify-user"},"Identify user"),(0,o.kt)("p",null,"To identify the user when logged in, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.setUserId(userId);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," is a stable unique ID for the user."),(0,o.kt)("p",null,"To set an optional dictionary of custom metadata for the user, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.setMetadata(metadata);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," is a JSON object with up to 16 keys and values of type string, boolean, or number."),(0,o.kt)("p",null,"Finally, to set an optional description for the user, displayed in the dashboard, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.setDescription(description);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," is a string."),(0,o.kt)("p",null,"You only need to call these functions once, as these settings will be persisted across app sessions."),(0,o.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,o.kt)("h3",{id:"request-permissions"},"Request permissions"),(0,o.kt)("p",null,"Before tracking the user's location, the user must have granted location permissions for the app."),(0,o.kt)("p",null,"To determine the whether user has granted location permissions for the app, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.getPermissionsStatus((status) => {\n  // do something with status\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"status")," will be a string, one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GRANTED_BACKGROUND"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GRANTED_FOREGROUND"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"DENIED"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"UNKNOWN")))),(0,o.kt)("p",null,"To request location permissions for the app, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.requestPermissions(background);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"background")," is a boolean indicating whether to request background location permissions or foreground location permissions."),(0,o.kt)("p",null,"Learn about platform-specific permissions in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,o.kt)("h3",{id:"foreground-tracking"},"Foreground tracking"),(0,o.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can track the user's location."),(0,o.kt)("p",null,"To track the user's location in the foreground, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.trackOnce((result) => {\n  // do something with result.status, result.location, result.events, result.user\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"err")," will be a string, one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_PUBLISHABLE_KEY")),": SDK not initialized"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_PERMISSIONS")),": location permissions not granted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_LOCATION")),": location services error or timeout (10 seconds)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_NETWORK")),": network error or timeout (10 seconds)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_BAD_REQUEST")),": bad request (missing or invalid params)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_UNAUTHORIZED")),": unauthorized (invalid API key)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_PAYMENT_REQUIRED")),": payment required (organization disabled or usage exceeded)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_FORBIDDEN")),": forbidden (insufficient permissions or no beta access)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_NOT_FOUND")),": not found"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_RATE_LIMIT")),": too many requests (",(0,o.kt)("a",{parentName:"li",href:"/api#track"},"rate limit")," exceeded)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_SERVER")),": internal server error"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ERROR_UNKNOWN")),": unknown error")),(0,o.kt)("p",null,"Learn about platform-specific implementations of this function in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,o.kt)("h3",{id:"background-tracking"},"Background tracking"),(0,o.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can start tracking the user's location in the background."),(0,o.kt)("p",null,"For background tracking, the SDK supports custom tracking options as well as three presets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"EFFICIENT")),": A low frequency of location updates and lowest battery usage. On Android, avoids Android vitals bad behavior thresholds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"RESPONSIVE")),": A medium frequency of location updates and low battery usage. Suitable for most consumer use cases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"CONTINUOUS")),': A high frequency of location updates and higher battery usage. Suitable for on-demand use cases (e.g., delivery tracking) and some consumer use cases (e.g., order ahead, "mall mode").')),(0,o.kt)("p",null,"Learn about platform-specific implementations of these presets in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,o.kt)("p",null,"To start tracking the user's location in the background, call one of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.startTrackingEfficient();\n\ncordova.plugins.radar.startTrackingResponsive();\n\ncordova.plugins.radar.startTrackingContinuous();\n")),(0,o.kt)("p",null,"You only need to call these methods once, as these settings will be persisted across app sessions."),(0,o.kt)("p",null,"Though we recommend using presets for most use cases, you can customize the tracking options. See the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options reference"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// optionally adjust foreground service options for android\ncordova.plugins.radar.setForegroundServiceOptions({\n  options: {\n    text: \"Location tracking started\",\n    title: \"Location updates\",\n    updatesOnly: false,\n    importance: 2,\n    activity: 'com.yourapp.MainActivity'\n  }\n});\n\ncordova.plugins.radar.startTrackingCustom({\n  desiredStoppedUpdateInterval: 180,\n  desiredMovingUpdateInterval: 60,\n  desiredSyncInterval: 50,\n  desiredAccuracy: 'high',\n  stopDuration: 140,\n  stopDistance: 70,\n  sync: 'all',\n  replay: 'none',\n  showBlueBar: true,\n  foregroundServiceEnabled: true\n});\n")),(0,o.kt)("p",null,"To stop tracking the user's location in the background (e.g., when the user logs out), call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.stopTracking();\n")),(0,o.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,o.kt)("p",null,"To listen for events, location updates, and errors, you can add event listeners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.onClientLocation((location, stopped, source) => {\n  // do something with location, stopped, source\n});\n\ncordova.plugins.radar.onLocation((location, user) => {\n  // do something with location, user\n});\n\ncordova.plugins.radar.onEvents((events, user) => {\n  // do something with events, user\n});\n\ncordova.plugins.radar.onError((err) => {\n  // do something with err\n});\n")),(0,o.kt)(i.Z,{alertType:"warning",mdxType:"Alert"},"Listeners should be set only once and before tracking begins."),(0,o.kt)("p",null,"Add event listeners outside of your view lifecycle if you want them to work when the app is in the background."),(0,o.kt)("p",null,"You can also remove event listeners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.offClientLocation();\n\ncordova.plugins.radar.offLocation();\n\ncordova.plugins.radar.offEvents();\n\ncordova.plugins.radar.offError();\n")),(0,o.kt)("h3",{id:"trip-tracking"},"Trip tracking"),(0,o.kt)("p",null,"On iOS and Android, to start a trip to a destination, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.startTrip({\n  externalId: '299',\n  destinationGeofenceTag: 'store',\n  destinationGeofenceExternalId: '123',\n  mode: 'car'\n}).then((result) => {\n  // do something with result.status\n});\ncordova.plugins.radar.startTrackingContinuous();\n")),(0,o.kt)("p",null,"Update information about the trip. Status can be set to 'unknown' to leave the status unchanged as it will update via location tracking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.updateTrip({\n  status:'arrived',\n  options: {\n    externalId: '299',\n    metadata: {\n      parkingSpot: '5'\n    }\n  }\n}).then((result) => {\n  // do something with result.status\n});\n")),(0,o.kt)("p",null,"Later, to complete the trip and stop tracking, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.completeTrip().then((result) => {\n  // do something with result.status\n});\ncordova.plugins.radar.stopTracking();\n")),(0,o.kt)("p",null,"Or, to cancel the trip and stop tracking, call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.cancelTrip().then((result) => {\n  // do something with result.status\n});\ncordova.plugins.radar.stopTracking();\n")),(0,o.kt)("p",null,"Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/trip-tracking"},"trip tracking"),"."),(0,o.kt)("h3",{id:"manual-tracking"},"Manual tracking"),(0,o.kt)("p",null,"You can manually update the user's location by calling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.trackOnce({\n  latitude: 39.2904,\n  longitude: -76.6122,\n  accuracy: 65\n}, (result) => {\n  // do something with result.status, result.location, result.events, result.user\n});\n")),(0,o.kt)("p",null,"Learn about platform-specific implementation of this function in the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,o.kt)("h3",{id:"other-apis"},"Other APIs"),(0,o.kt)("p",null,"The Cordova plugin also exposes APIs for anonymous context, geocoding, search, and distance."),(0,o.kt)("h4",{id:"get-location"},"Get location"),(0,o.kt)("p",null,"Get a single location update without sending it to the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.getLocation((result) => {\n  // do something with result.status, result.location\n});\n")),(0,o.kt)("h4",{id:"context"},"Context"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#context"},"context API"),", get context for a location without sending device or user identifiers to the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.getContext({\n  latitude: 40.783826,\n  longitude: -73.975363,\n  accuracy: 65\n}, (result) => {\n  // do something with result.status, result.context\n});\n")),(0,o.kt)("h4",{id:"geocoding"},"Geocoding"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocoding API"),", geocode an address, converting address to coordinates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.geocode('20 jay st brooklyn ny', (result) => {\n  // do something with result.status, result.addresses\n});\n")),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#reverse-geocode"},"reverse geocoding API"),", reverse geocode a location, converting coordinates to address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.reverseGeocode({\n  latitude: 40.783826,\n  longitude: -73.975363\n}, (result) => {\n  // do something with result.status, result.addresses\n});\n")),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API"),", geocode the device's current IP address, converting IP address to city, state, and country:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.ipGeocode((result) => {\n  // do something with result.status, result.address\n});\n")),(0,o.kt)("h4",{id:"search"},"Search"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#autocomplete"},"autocomplete API"),", autocomplete partial addresses and place names, sorted by relevance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.autocomplete({\n  query: 'brooklyn roasting',\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  limit: 10\n}, (result) => {\n  // do something with result.status, result.addresses\n});\n")),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API"),", search for geofences near a location, sorted by distance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.searchGeofences({\n  radius: 1000,\n  tags: ['venue'],\n  limit: 10\n}, (result) => {\n  // do something with result.status, result.geofences\n});\n")),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#search-places"},"places search API"),", search for places near a location, sorted by distance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.searchPlaces({\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  radius: 1000,\n  chains: ['starbucks'],\n  limit: 10\n}, (result) => {\n  // do something with result.status, result.places\n});\n")),(0,o.kt)("h4",{id:"distance"},"Distance"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),", calculate the travel distance and duration from an origin to a destination:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.getDistance({\n  origin: {\n    latitude: 40.78382,\n    longitude: -73.97536\n  },\n  destination: {\n    latitude: 40.70390,\n    longitude: -73.98670\n  },\n  modes: [\n    'foot',\n    'car'\n  ],\n  units: 'imperial'\n}, (result) => {\n  // do something with result.status, result.routes\n});\n")),(0,o.kt)("h4",{id:"matrix"},"Matrix"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"/api#matrix"},"matrix API"),", calculate the travel distance and duration between multiple origins and destinations for up to 25 routes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.radar.getMatrix({\n  origins: [\n    {\n      latitude: 40.78382,\n      longitude: -73.97536\n    }\n  ],\n  destinations: [\n    [\n      {\n        latitude: 40.70390,\n        longitude: -73.98670\n      },\n      {\n        latitude: 40.73237,\n        longitude: -73.94884\n      }\n    ]\n  ],\n  mode: 'car',\n  units: 'imperial'\n}, (result) => {\n  // do something with result.status, result.matrix\n});\n")),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}c.isMDXComponent=!0}}]);