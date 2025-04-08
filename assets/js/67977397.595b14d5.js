"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2408],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1363:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o={title:"Testing"},s=void 0,l={unversionedId:"geofencing/testing",id:"geofencing/testing",isDocsHomePage:!1,title:"Testing",description:"Use this guide to troubleshoot issues with location tracking and event generation.",source:"@site/docs/geofencing/testing.mdx",sourceDirName:"geofencing",slug:"/geofencing/testing",permalink:"/geofencing/testing",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/geofencing/testing.mdx",tags:[],version:"current",frontMatter:{title:"Testing"},sidebar:"defaultSidebar",previous:{title:"Yext",permalink:"/integrations/yext"},next:{title:"Overview",permalink:"/maps/overview"}},d=[{value:"Device is not showing up in the dashboard",id:"device-is-not-showing-up-in-the-dashboard",children:[{value:"Common issues",id:"common-issues",children:[]},{value:"Troubleshooting steps",id:"troubleshooting-steps",children:[]}]},{value:"Events are not firing when the app is backgrounded",id:"events-are-not-firing-when-the-app-is-backgrounded",children:[{value:"Common issues",id:"common-issues-1",children:[]},{value:"Troubleshooting steps",id:"troubleshooting-steps-1",children:[]}]},{value:"Event listeners are not delivering",id:"event-listeners-are-not-delivering",children:[{value:"Common issues",id:"common-issues-2",children:[]},{value:"Troubleshooting steps",id:"troubleshooting-steps-2",children:[]}]},{value:"Troubleshooting other behavior",id:"troubleshooting-other-behavior",children:[{value:"Multiple Radar users have the same user ID or device ID",id:"multiple-radar-users-have-the-same-user-id-or-device-id",children:[]},{value:"Rate limit errors are occurring when tracking location",id:"rate-limit-errors-are-occurring-when-tracking-location",children:[]}]},{value:"Simulator",id:"simulator",children:[{value:"How it works",id:"how-it-works",children:[]}]},{value:"User Activity",id:"user-activity",children:[{value:"How it works",id:"how-it-works-1",children:[]},{value:"Location sources",id:"location-sources",children:[]}]}],c={toc:d};function p(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this guide to troubleshoot issues with location tracking and event generation."),(0,r.kt)("h2",{id:"device-is-not-showing-up-in-the-dashboard"},"Device is not showing up in the dashboard"),(0,r.kt)("p",null,"A device will show up in the Radar dashboard once a successful ",(0,r.kt)("a",{parentName:"p",href:"/api#track"},"track API")," call has been sent to the server. The Radar ",(0,r.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," collects location updates and then sends them to the server via the track API."),(0,r.kt)("h3",{id:"common-issues"},"Common issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Location permissions have not been granted."),(0,r.kt)("li",{parentName:"ul"},"The Radar SDK has not been properly initialized."),(0,r.kt)("li",{parentName:"ul"},"Radar tracking methods have not been implemented correctly.")),(0,r.kt)("h3",{id:"troubleshooting-steps"},"Troubleshooting steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify location permissions have been granted."),(0,r.kt)("li",{parentName:"ol"},"Verify that initializing the SDK uses the correct publishable key and happens during application launch. This initialization should happen in the ",(0,r.kt)("inlineCode",{parentName:"li"},"onCreate()")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," class on ",(0,r.kt)("a",{parentName:"li",href:"/sdk/android#initialize-sdk"},"Android")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"didFinishLaunchingWithOptions()")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"AppDelegate")," on ",(0,r.kt)("a",{parentName:"li",href:"/sdk/ios#initialize-sdk"},"iOS"),"."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.trackOnce()")," on application launch and log the status in the callback. Refer to the ",(0,r.kt)("a",{parentName:"li",href:"/sdk/ios#foreground-tracking"},"iOS")," and ",(0,r.kt)("a",{parentName:"li",href:"/sdk/android#foreground-tracking"},"Android")," implementations to understand the status values returned."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.setLogLevel()")," with a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"debug")," and monitor for errors in the logs. Refer to the debug logging sections of ",(0,r.kt)("a",{parentName:"li",href:"/sdk/ios#debug-logging"},"iOS")," and ",(0,r.kt)("a",{parentName:"li",href:"/sdk/android#debug-logging"},"Android")," for more detail.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A successful Radar API request log looks like the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-11-08 11:33:01.784759-0500 RadarImplementation[6947:250060] \ud83d\udccd Radar API response | method = POST; url = https://api.radar.io/v1/track; statusCode = 200;\n")),(0,r.kt)("p",null,"Once a successful API call is made, there will be a corresponding user on the ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/users"},"Users page")," in the dashboard."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Verify that Radar is registering users on the Users page:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Users Page",src:a(380).Z})),(0,r.kt)("h2",{id:"events-are-not-firing-when-the-app-is-backgrounded"},"Events are not firing when the app is backgrounded"),(0,r.kt)("p",null,"As the Radar SDK collects location updates and sends them to the server, it will generate events based on location context (e.g., the device moves into or out of a geofence or starts a trip). Generated events will appear on the ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/events"},"Events page")," in the dashboard if location updates are triggering events as expected. If the device's last location is in a geofence or a place, that information will be displayed on the details page for that user."),(0,r.kt)("h3",{id:"common-issues-1"},"Common issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Background location permissions have not been granted."),(0,r.kt)("li",{parentName:"ul"},"Radar events are not enabled on the ",(0,r.kt)("a",{parentName:"li",href:"https://radar.com/dashboard/settings"},"Settings page")," in the dashboard."),(0,r.kt)("li",{parentName:"ul"},"Radar tracking methods have not been implemented correctly."),(0,r.kt)("li",{parentName:"ul"},"The test device has issues collecting location updates (e.g., location sensors are not working in the simulator)."),(0,r.kt)("li",{parentName:"ul"},"Flawed testing based on the ",(0,r.kt)("a",{parentName:"li",href:"/sdk/tracking"},"tracking options")," applied (e.g., geofence stop detection is on, but the device is not dwelling long enough to detect a stop).")),(0,r.kt)("h3",{id:"troubleshooting-steps-1"},"Troubleshooting steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify that initializing the SDK uses the correct publishable key and happens during application launch. This initialization should happen in the ",(0,r.kt)("inlineCode",{parentName:"li"},"onCreate()")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," class on ",(0,r.kt)("a",{parentName:"li",href:"/sdk/android#initialize-sdk"},"Android")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"didFinishLaunchingWithOptions()")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"AppDelegate")," on ",(0,r.kt)("a",{parentName:"li",href:"/sdk/ios#initialize-sdk"},"iOS"),". On iOS, verify that the ",(0,r.kt)("em",{parentName:"li"},"Location updates")," ",(0,r.kt)("a",{parentName:"li",href:"/sdk/ios#background-modes"},"background mode")," has been enabled if using the responsive or continuous presets."),(0,r.kt)("li",{parentName:"ol"},"Confirm that events are enabled for the context type you are testing on the ",(0,r.kt)("a",{parentName:"li",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,r.kt)("li",{parentName:"ol"},"Confirm that you are calling ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.startTracking()"),"."),(0,r.kt)("li",{parentName:"ol"},"Determine the behavior needed to trigger location updates based on the ",(0,r.kt)("a",{parentName:"li",href:"/sdk/tracking"},"tracking options")," in use and verify that they appear in the Radar dashboard. For example, if the device is stopped in responsive mode, move over 200 meters to trigger a location update. Location updates can be verified on the ",(0,r.kt)("a",{parentName:"li",href:"https://radar.com/dashboard/users"},"Users page")," in the dashboard or on the ",(0,r.kt)("a",{parentName:"li",href:"/geofencing/testing#user-activity"},"User Activity")," page."),(0,r.kt)("li",{parentName:"ol"},"If location updates are still not appearing, call ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.setLogLevel()")," with a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"debug")," and monitor for errors in the logs. Refer to the debug logging sections of ",(0,r.kt)("a",{parentName:"li",href:"/sdk/ios#debug-logging"},"iOS")," and ",(0,r.kt)("a",{parentName:"li",href:"/sdk/android#debug-logging"},"Android")," for more detail.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Verify that events are firing on the Events page:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Recent Events",src:a(6722).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Verify a device's current geofences on the User details page:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User Details",src:a(5696).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: a device needs to exit a geofence before generating a subsequent entry event, so ensure that the device has been detected outside of the geofence prior to testing another entry.")),(0,r.kt)("h2",{id:"event-listeners-are-not-delivering"},"Event listeners are not delivering"),(0,r.kt)("h3",{id:"common-issues-2"},"Common issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Radar event listeners are not implemented correctly."),(0,r.kt)("li",{parentName:"ul"},"Radar events are not generating from location updates.")),(0,r.kt)("h3",{id:"troubleshooting-steps-2"},"Troubleshooting steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify the ",(0,r.kt)("inlineCode",{parentName:"li"},"RadarDelegate")," on ",(0,r.kt)("a",{parentName:"li",href:"/sdk/ios#listening-for-events-with-a-delegate"},"iOS")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"RadarReceiver")," on ",(0,r.kt)("a",{parentName:"li",href:"/sdk/android#listening-for-events-with-a-receiver"},"Android")," are implemented correctly. For cross-platform frameworks such as ",(0,r.kt)("a",{parentName:"li",href:"/sdk/react-native#background-tracking"},"React Native")," and ",(0,r.kt)("a",{parentName:"li",href:"/sdk/capacitor#background-tracking"},"Capacitor"),", ensure that the listeners are set up outside of the view lifecycle. Verify that you are using the correct native SDK version via the ",(0,r.kt)("a",{parentName:"li",href:"https://radar.com/dashboard/users"},"Users page")," in the dashboard."),(0,r.kt)("li",{parentName:"ol"},"Verify that expected events are firing when testing the listeners."),(0,r.kt)("li",{parentName:"ol"},"Understand the behavior of each of the listeners. The client location listener (",(0,r.kt)("inlineCode",{parentName:"li"},"onClientLocationUpdated")," on Android, ",(0,r.kt)("inlineCode",{parentName:"li"},"didUpdateClientLocation")," on iOS) is triggered whenever the Radar SDK receives an update from the device. The location updated listener (",(0,r.kt)("inlineCode",{parentName:"li"},"onLocationUpdated")," on Android, ",(0,r.kt)("inlineCode",{parentName:"li"},"didUpdateLocation")," on iOS) delivers location updates processed by Radar servers and will return refreshed user context. The Radar events listener (",(0,r.kt)("inlineCode",{parentName:"li"},"didReceiveEvents")," on Android and iOS) will only fire if events are triggered from location updates."),(0,r.kt)("li",{parentName:"ol"},"Implement the error listener methods (",(0,r.kt)("inlineCode",{parentName:"li"},"onError")," on Android, ",(0,r.kt)("inlineCode",{parentName:"li"},"didFail")," on iOS) to determine if errors are firing. Review the error messages returned to diagnose the root cause.")),(0,r.kt)("h2",{id:"troubleshooting-other-behavior"},"Troubleshooting other behavior"),(0,r.kt)("h3",{id:"multiple-radar-users-have-the-same-user-id-or-device-id"},"Multiple Radar users have the same user ID or device ID"),(0,r.kt)("p",null,"Learn more about when Radar creates new user records ","[here]","/faqs#what-is-a-unique-user-when-does-radar-create-a-new-user-record)."),(0,r.kt)("h3",{id:"rate-limit-errors-are-occurring-when-tracking-location"},"Rate limit errors are occurring when tracking location"),(0,r.kt)("p",null,"Radar has device specific rate limits per second, hour and day for the ",(0,r.kt)("a",{parentName:"p",href:"/api#track"},"track API endpoint"),", which sends location updates to Radar. To mitigate rate limits, adjust ",(0,r.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options")," to collect locations less frequently. If you hit the per hour or day limits while testing, reinstalling the application with the Radar SDK will reset the rate limits."),(0,r.kt)("h2",{id:"simulator"},"Simulator"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/simulate"},"simulator")," is the easiest way to generate location updates to test and visualize entry and exit events at will. Gone are the days of needing to drive around or download spoofing apps to try out location-enabled features. The simulator acts as a playground to experiment with our API without any code!"),(0,r.kt)("h3",{id:"how-it-works"},"How it works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Click around the map to generate locations and events.")," The activity feed is populated in real-time to mirror how our APIs would surface locations and events in your app. The data generated flows through to your enabled ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"integrations")," in the corresponding environment. The locations and events generated abide by your project's ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"settings")," and will persist across the dashboard. To avoid any production side effects, use the test environment with the default user provided (",(0,r.kt)("inlineCode",{parentName:"p"},"simulated-user-id"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Simulate a target user.")," To simulate a given ",(0,r.kt)("a",{parentName:"p",href:"/api#users"},"user"),", click into that specific user on the ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/users"},"users"),' page and hit the "Simulate" button. You can also set custom user metadata, app-specific information that downstream systems can act upon, such as whether a user has been activated or membership in a target cohort.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Simulate a trip.")," There are 3 fields necessary to simulate a ",(0,r.kt)("a",{parentName:"p",href:"/trip-tracking"},"trip"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"externalId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"destinationGeofenceTag"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"destinationGeofenceExternalId"),'. You can enter them manually or select a geofence on the map and click "Set as trip destination" to autofill these values. Then, click "Start Trip" to officially kick off and activate the trip! As you click around, you\'ll notice events such as ',(0,r.kt)("inlineCode",{parentName:"p"},"user.approaching_trip_destination")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"user.arrived_at_trip_destination"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simulator.gif",src:a(5579).Z})),(0,r.kt)("h2",{id:"user-activity"},"User Activity"),(0,r.kt)("p",null,"The User Activity page is the most straightforward way to debug a user's recent locations and events. Navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/users"},"Users page")," and select ",(0,r.kt)("em",{parentName:"p"},"View")," within the desired user row. Then, click ",(0,r.kt)("em",{parentName:"p"},"View Activity"),". Filter the user's recent activity down to the minute to investigate why events did or did not fire, and understand ",(0,r.kt)("a",{parentName:"p",href:"/geofences#confidence-and-accuracy"},"confidence levels")," for events in real-world scenarios."),(0,r.kt)("h3",{id:"how-it-works-1"},"How it works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"See a unified view of locations, events, and geofences.")," The User Activity map displays a user's recent locations and events alongside geofences to pin down exactly when entries and exits occurred.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Focus on an individual location or event.")," Hover over a row in the Activity Feed to center the map view around those coordinates and to display the accuracy bubble for that location or event. An Event's ",(0,r.kt)("a",{parentName:"p",href:"/geofences#confidence-and-accuracy"},"confidence level")," is a function of the accuracy of the location and the geometry of the geofence. The smaller the geofence and the less accurate the location, the lower the confidence.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filter to a specific time period.")," Move the bounds of the slider to isolate a range of time for investigation. The slider supports granularity down to the minute."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UserActivity.gif",src:a(4938).Z})),(0,r.kt)("h3",{id:"location-sources"},"Location sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"FOREGROUND_LOCATION")),": location update triggered by ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.trackOnce")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"BACKGROUND_LOCATION")),": location updated triggered by ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.startTracking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"GEOFENCE_ENTER")),': location update triggered by a client-side geofence entry, either nearby geofences synced from the server or a "bubble" geofence around the device\'s current location'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"GEOFENCE_EXIT")),': location updated triggered by client-side geofence exit, either nearby geofences synced from the server or a "bubble" geofence around the device\'s current location'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"BEACON_ENTER")),": location update triggered by a client-side beacon entry"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"BEACON_EXIT")),": location update triggered by a client-side beacon exit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"VISIT_ARRIVAL"))," (iOS only): location update triggered by an arrival from the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/corelocation/clvisit"},"iOS visit monitoring service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"VISIT_DEPARTURE"))," (iOS only): location update triggered by a departure from the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/corelocation/clvisit"},"iOS visit monitoring service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"MANUAL_LOCATION")),": location update triggered by ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.trackOnce")," passing in a location not collected by the Radar SDK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"MOCK_LOCATION")),": location update triggered by ",(0,r.kt)("inlineCode",{parentName:"li"},"Radar.mockTracking"))))}p.isMDXComponent=!0},5579:function(e,t,a){t.Z=a.p+"assets/images/simulator-2674659db05c1ee82e4ff3ee900f4e46.gif"},4938:function(e,t,a){t.Z=a.p+"assets/images/user_activity-f2bd510e6027b73607f2632351158c13.gif"},6722:function(e,t,a){t.Z=a.p+"assets/images/dashboard_events_feed-e4207fa1e2b2540e78dadf74d3d57e92.png"},5696:function(e,t,a){t.Z=a.p+"assets/images/dashboard_user_geofences-4a932ba5b7fafd95227332923c64dcae.png"},380:function(e,t,a){t.Z=a.p+"assets/images/dashboard_users_page-5bcc7ad96306f57e6ecdc60cd0cbeb7f.png"}}]);