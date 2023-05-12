"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[951],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5329:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i={title:"Toolkit"},p=void 0,s={unversionedId:"toolkit",id:"toolkit",isDocsHomePage:!1,title:"Toolkit",description:"You can use our Radar Toolkit apps for iOS and Android to test Radar before integrating the SDK, or to test your implementation of Radar side-by-side with a complete implementation.",source:"@site/docs/toolkit.mdx",sourceDirName:".",slug:"/toolkit",permalink:"/documentation/toolkit",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/toolkit.mdx",tags:[],version:"current",frontMatter:{title:"Toolkit"},sidebar:"defaultSidebar",previous:{title:"Logging and analyzing where conversions occur",permalink:"/documentation/tutorials/logging-and-analyzing-where-conversions-occur"},next:{title:"Dashboard",permalink:"/documentation/dashboard"}},l=[{value:"Instructions",id:"instructions",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use our Radar Toolkit apps for iOS and Android to test Radar before integrating the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),", or to test your implementation of Radar side-by-side with a complete implementation."),(0,o.kt)("a",{href:"https://itunes.apple.com/us/app/radar-toolkit/id1179413551?mt=8",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_ios.svg",style:{display:"inline-block",height:"60px",marginRight:"30px",marginBottom:"20px",marginTop:"10px",width:"180px"}})),(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.onradar.app",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_android.svg",style:{display:"inline-block",height:"60px",marginBottom:"20px",marginTop:"10px",width:"202.5px"}})),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("p",null,"To get started, you'll need a Radar account. Don't have a Radar account yet? ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"Sign up")," first."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the app from the ",(0,o.kt)("a",{href:"https://itunes.apple.com/us/app/radar-toolkit/id1179413551?mt=8",target:"_blank"},"App Store (iOS)")," or ",(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.onradar.app",target:"_blank"},"Play Store (Android)"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the app and grant notification permissions and location permissions by following the onboarding prompts.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your 6-digit onboarding code from the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard"},"Radar dashboard")," and enter it to link your ",(0,o.kt)("em",{parentName:"p"},"test publishable API key")," to Toolkit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After completing onboarding, you should see your location on the map in the toolkit app along with your user on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/users"},"Users page")," in the dashboard. If you are in a geofence or at a place, you will see events in the app and see events on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/events"},"Events page")," in the dashboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To generate a new track call in the foreground, tap the refresh button!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To track in the background, move more than 100 meters! ",(0,o.kt)("strong",{parentName:"p"},"Note that location updates may be delayed significantly by Android ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.android.com/training/monitoring-device-state/doze-standby.html"},"Doze Mode and App Standby"),", iOS ",(0,o.kt)("a",{parentName:"strong",href:"https://support.apple.com/en-us/HT205234"},"Low Power Mode"),", or if the device has connectivity issues, low battery, or wi-fi disabled."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To try out different presets, open the ",(0,o.kt)("em",{parentName:"p"},"Settings")," screen. Then, select the ",(0,o.kt)("em",{parentName:"p"},"Tracking Options")," preset to use, one of ",(0,o.kt)("em",{parentName:"p"},"Efficient"),", ",(0,o.kt)("em",{parentName:"p"},"Responsive"),", or ",(0,o.kt)("em",{parentName:"p"},"Continuous"),". Learn about ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking#ios-presets"},"iOS tracking presets")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking#android-presets"},"Android tracking presets"),". Manage the the notifications you want to receive, including ",(0,o.kt)("em",{parentName:"p"},"Events")," (events received from Radar), ",(0,o.kt)("em",{parentName:"p"},"Locations")," (location updates sent to Radar), and ",(0,o.kt)("em",{parentName:"p"},"Errors")," (network, location, and permissions errors)."))),(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/toolkit_small.png",className:"large"}))}d.isMDXComponent=!0}}]);