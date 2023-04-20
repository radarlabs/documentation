"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6271],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},970:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",s="alertSuccess_7EZp",c=function(e){var t=e.children,a=e.alertType;return"warning"===a?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"info"===a?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"success"===a?n.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},9058:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(970),s={sidebar_position:13,title:"Dashboard",id:"dashboard"},c=void 0,l={unversionedId:"dashboard",id:"dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Use the Radar dashboard to manage, explore, and analyze your Radar data, such as geofences, users, events, and trips.",source:"@site/docs/dashboard.mdx",sourceDirName:".",slug:"/dashboard",permalink:"/documentation/dashboard",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/dashboard.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Dashboard",id:"dashboard"},sidebar:"defaultSidebar",previous:{title:"Logging and analyzing where conversions occur",permalink:"/documentation/tutorials/logging-and-analyzing-where-conversions-occur"},next:{title:"Troubleshooting",permalink:"/documentation/troubleshooting"}},p=[{value:"Simulator",id:"simulator",children:[{value:"How it works",id:"how-it-works",children:[]}]},{value:"User Activity",id:"user-activity",children:[{value:"How it works",id:"how-it-works-1",children:[]},{value:"Location sources",id:"location-sources",children:[]}]},{value:"Place matching",id:"place-matching",children:[{value:"How it works",id:"how-it-works-2",children:[]},{value:"Geofence types",id:"geofence-types",children:[]},{value:"Advanced options",id:"advanced-options",children:[]}]}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use the Radar ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard"},"dashboard")," to manage, explore, and analyze your Radar data, such as ",(0,o.kt)("a",{parentName:"p",href:"/geofences"},"geofences"),", ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/users"},"users"),", ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/events"},"events"),", and ",(0,o.kt)("a",{parentName:"p",href:"/trip-tracking"},"trips"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard"},"dashboard")," can also be used to configure ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"integrations"),", ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"project settings")," such as enabled features (e.g., ",(0,o.kt)("a",{parentName:"p",href:"/places"},"places"),") and event types (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"user.exited_place"),"), and ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/privacy"},"custom data retention windows"),"."),(0,o.kt)("h2",{id:"simulator"},"Simulator"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/simulate"},"simulator")," is the easiest way to generate location updates to test and visualize entry and exit events at will. Gone are the days of needing to drive around or download spoofing apps to try out location-enabled features. The simulator acts as a playground to experiment with our API without any code!"),(0,o.kt)("h3",{id:"how-it-works"},"How it works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Click around the map to generate locations and events.")," The activity feed is populated in real-time to mirror how our APIs would surface locations and events in your app. The data generated flows through to your enabled ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"integrations")," in the corresponding environment. The locations and events generated abide by your project's ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"settings")," and will persist across the dashboard. To avoid any production side effects, use the test environment with the default user provided (",(0,o.kt)("inlineCode",{parentName:"p"},"simulated-user-id"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Simulate a target user.")," To simulate a given ",(0,o.kt)("a",{parentName:"p",href:"/api#users"},"user"),", click into that specific user on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/users"},"users"),' page and hit the "Simulate" button. You can also set custom user metadata, app-specific information that downstream systems can act upon, such as whether a user has been activated or membership in a target cohort.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Simulate a trip.")," There are 3 fields necessary to simulate a ",(0,o.kt)("a",{parentName:"p",href:"/trip-tracking"},"trip"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"externalId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationGeofenceTag"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationGeofenceExternalId"),'. You can enter them manually or select a geofence on the map and click "Set as trip destination" to autofill these values. Then, click "Start Trip" to officially kick off and activate the trip! As you click around, you\'ll notice events such as ',(0,o.kt)("inlineCode",{parentName:"p"},"user.approaching_trip_destination")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user.arrived_at_trip_destination"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator.gif",src:a(7586).Z})),(0,o.kt)("h2",{id:"user-activity"},"User Activity"),(0,o.kt)("p",null,"The User Activity page is the most straightforward way to debug a user's recent locations and events. Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/users"},"Users page")," and select ",(0,o.kt)("em",{parentName:"p"},"View")," within the desired user row. Then, click ",(0,o.kt)("em",{parentName:"p"},"View Activity"),". Filter the user's recent activity down to the minute to investigate why events did or did not fire, and understand ",(0,o.kt)("a",{parentName:"p",href:"/geofences#confidence-and-accuracy"},"confidence levels")," for events in real-world scenarios."),(0,o.kt)("h3",{id:"how-it-works-1"},"How it works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"See a unified view of locations, events, and geofences.")," The User Activity map displays a user's recent locations and events alongside geofences to pin down exactly when entries and exits occurred.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Focus on an individual location or event.")," Hover over a row in the Activity Feed to center the map view around those coordinates and to display the accuracy bubble for that location or event. An Event's ",(0,o.kt)("a",{parentName:"p",href:"/geofences#confidence-and-accuracy"},"confidence level")," is a function of the accuracy of the location and the geometry of the geofence. The smaller the geofence and the less accurate the location, the lower the confidence.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filter to a specific time period.")," Move the bounds of the slider to isolate a range of time for investigation. The slider supports granularity down to the minute."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UserActivity.gif",src:a(2765).Z})),(0,o.kt)("h3",{id:"location-sources"},"Location sources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"FOREGROUND_LOCATION")),": location update triggered by ",(0,o.kt)("inlineCode",{parentName:"li"},"Radar.trackOnce")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"BACKGROUND_LOCATION")),": location updated triggered by ",(0,o.kt)("inlineCode",{parentName:"li"},"Radar.startTracking")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GEOFENCE_ENTER")),': location update triggered by a client-side geofence entry, either nearby geofences synced from the server or a "bubble" geofence around the device\'s current location'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GEOFENCE_EXIT")),': location updated triggered by client-side geofence exit, either nearby geofences synced from the server or a "bubble" geofence around the device\'s current location'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"BEACON_ENTER")),": location update triggered by a client-side beacon entry"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"BEACON_EXIT")),": location update triggered by a client-side beacon exit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"VISIT_ARRIVAL"))," (iOS only): location update triggered by an arrival from the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/corelocation/getting_the_user_s_location/using_the_visits_location_service"},"iOS visit monitoring service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"VISIT_DEPARTURE"))," (iOS only): location update triggered by a departure ",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/corelocation/getting_the_user_s_location/using_the_visits_location_service"},"iOS visit monitoring service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"MANUAL_LOCATION")),": location update triggered by ",(0,o.kt)("inlineCode",{parentName:"li"},"Radar.trackOnce")," passing in a location not collected by the Radar SDK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"MOCK_LOCATION")),": location update triggered by ",(0,o.kt)("inlineCode",{parentName:"li"},"Radar.mockTracking"))),(0,o.kt)("h2",{id:"place-matching"},"Place matching"),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Place matching is available on the "," ",(0,o.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,o.kt)("p",null,"Place matching is the simplest way to make sure your geofence coordinates and geometries are accurate and stay up-to-date over time. Cleaning your geofence datasets via Radar's import process will reduce false positives. Entry and exit events will be more reliable, trip approaching and arrived signals will be more accurate, and messaging for nearby locations will be more relevant."),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofences"},"geofences")," page and select ",(0,o.kt)("em",{parentName:"p"},"Import"),". If ",(0,o.kt)("a",{parentName:"p",href:"/places"},"places")," are enabled for your project, opt-in to this feature by toggling on ",(0,o.kt)("em",{parentName:"p"},"Enable place matching"),". Select ",(0,o.kt)("a",{parentName:"p",href:"/places/chains"},"chains")," to match your geofences against. The import process will attempt to match each geofence against Radar's places for those chains."),(0,o.kt)("h3",{id:"how-it-works-2"},"How it works"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Import your geofences against Radar's places data.")," Upon importing your geofences into Radar, select ",(0,o.kt)("a",{parentName:"p",href:"/places/chains"},"chains")," to match your geofences against. By default, Radar will search for ",(0,o.kt)("a",{parentName:"p",href:"/places"},"places")," for those chains within 10 kilometers (~6 miles) of each geofence and match to the nearest location. The search radius can be configured as an advanced option at the time of import.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"View the results of the place matching import.")," After the import has completed, examine the results on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofences/imports"},"import history")," page. Click ",(0,o.kt)("em",{parentName:"p"},"View import")," to see a summary as well as logs that indicate the outcome for each row. If the place match was successful, the import log will contain details such as a link to the Radar place and the distance that the geofence center was corrected. Select ",(0,o.kt)("em",{parentName:"p"},"Expand all")," to display the input data and a map UI representing the transformation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filter and export the results for further analysis.")," To perform more granular investigations, apply ",(0,o.kt)("em",{parentName:"p"},"Filters")," to isolate rows that were not place matched, geofences that have large center correction values, or errors. Click ",(0,o.kt)("em",{parentName:"p"},"Export rows")," to download a CSV of the filtered results to perform additional analysis in other tools."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PlaceMatching.gif",src:a(7389).Z})),(0,o.kt)("h3",{id:"geofence-types"},"Geofence types"),(0,o.kt)("h4",{id:"circle"},"Circle"),(0,o.kt)("p",null,"By default, when a ",(0,o.kt)("strong",{parentName:"p"},"circle")," geofence is matched, the geofence will take on the geometry of the Radar place. As an advanced option, a geofence can adopt the center of the Radar place only, while retaining its original geometry. This behavior can be toggled by editing the geofence after the import."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Place matching circle",src:a(7007).Z})),(0,o.kt)("h4",{id:"isochrone"},"Isochrone"),(0,o.kt)("p",null,"When an ",(0,o.kt)("strong",{parentName:"p"},"isochrone")," geofence is matched, the geofence will only adopt the center of the Radar place, regenerating the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isochrone_map"},"isochrone")," geometry from the new center."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Place matching isochrone",src:a(7216).Z})),(0,o.kt)("h4",{id:"polygon"},"Polygon"),(0,o.kt)("p",null,"When a ",(0,o.kt)("strong",{parentName:"p"},"polygon")," geofence is matched, the geofence will be linked to the Radar place, but not adopt the place center or geometry. This behavior supports geofences that represent areas such as parking lots and drive-thru lanes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Place matching polygon",src:a(9955).Z})),(0,o.kt)("h3",{id:"advanced-options"},"Advanced options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search radius.")," By default, place matching will look for the nearest location within 10 kilometers, the maximum radius provided by the ",(0,o.kt)("a",{parentName:"li",href:"/api#search-places"},"search places")," endpoint. This value can be reduced to enforce a tighter search distance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Geofence tag(s).")," Filter the rows for which place matching is attempted. For example, only perform place matching on rows where the ",(0,o.kt)("em",{parentName:"li"},"tag")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"store")," but not ",(0,o.kt)("inlineCode",{parentName:"li"},"parking lot"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use Radar's place geometry.")," By default, if a place match is found, ",(0,o.kt)("a",{parentName:"li",href:"/dashboard#circle"},"circle geofences")," will adopt both the center and geometry of the Radar place. This behavior can be changed so that circle geofences only take on the center but not the geometry.")))}h.isMDXComponent=!0},7586:function(e,t,a){t.Z=a.p+"assets/images/mock_tracking-27989319c377a3282192a9eeb7f4cbe1.gif"},7389:function(e,t,a){t.Z=a.p+"assets/images/place_matching-1a7ff3c17395613f92a014adcf36bbc8.gif"},2765:function(e,t,a){t.Z=a.p+"assets/images/user_activity-2c86caded825e3e12382332edf0721da.gif"},7007:function(e,t,a){t.Z=a.p+"assets/images/place_matching_circle-32a1c47daead91d79bfb872064088634.png"},7216:function(e,t,a){t.Z=a.p+"assets/images/place_matching_isochrone-a7f3f96157e3c88d9d18ca26fdfdf1e2.png"},9955:function(e,t,a){t.Z=a.p+"assets/images/place_matching_polygon-31eba58c6ee3e680ceeb91898301e8c9.png"}}]);