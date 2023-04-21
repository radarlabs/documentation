"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",s="alertSuccess_7EZp",l=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},9226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(970),s={sidebar_position:2,sidebar_label:"Generate an event",title:"Generate an event",id:"generate-an-event"},l=void 0,c={unversionedId:"quickstarts/generate-an-event",id:"quickstarts/generate-an-event",isDocsHomePage:!1,title:"Generate an event",description:"If you haven't done so already, sign up for a free Radar account to get access to the Radar Dashboard and your API keys. You'll also need a geofence to start generating events, so make sure to create a geofence.",source:"@site/docs/quickstarts/generate-an-event.mdx",sourceDirName:"quickstarts",slug:"/quickstarts/generate-an-event",permalink:"/documentation/quickstarts/generate-an-event",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/quickstarts/generate-an-event.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Generate an event",title:"Generate an event",id:"generate-an-event"},sidebar:"defaultSidebar",previous:{title:"Create a geofence",permalink:"/documentation/quickstarts/create-a-geofence"},next:{title:"Make an API call",permalink:"/documentation/quickstarts/make-an-api-call"}},u=[{value:"How to generate events",id:"how-to-generate-events",children:[]},{value:"How to view, analyze, and debug events",id:"how-to-view-analyze-and-debug-events",children:[]}],d={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you haven't done so already, ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for a free Radar account to get access to the Radar Dashboard and your API keys. You'll also need a geofence to start generating events, so make sure to ",(0,o.kt)("a",{parentName:"p",href:"/quickstarts/create-a-geofence"},"create a geofence"),"."),(0,o.kt)("h2",{id:"how-to-generate-events"},"How to generate events"),(0,o.kt)("p",null,"The quickest way to generate location updates to test and visualize entry and exit events is with the Radar Simulator, though you can also generate events through the ",(0,o.kt)("a",{parentName:"p",href:"/toolkit"},"Toolkit")," app, the API, or by installing the SDK in your own application."),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("em",{parentName:"p"},"Simulate")," from the Radar Dashboard."),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"The simulator is scoped to the environment you've selected in the left navigation (",(0,o.kt)("i",null,"Live")," or ",(0,o.kt)("i",null,"Test"),"). To avoid any production side effects, use the ",(0,o.kt)("i",null,"Test")," environment with the default user provided (",(0,o.kt)("code",null,"simulated-user-id"),")."),(0,o.kt)("p",null,"Start by clicking anywhere on the map to generate locations and events. Clicking within the boundary of a geofence will generate a geofence entry event. The activity feed is populated in real-time to mirror how our APIs would surface locations and events in your app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator",src:n(3007).Z})),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"The data generated from the simulator flows through to your enabled ",(0,o.kt)("a",{href:"https://radar.com/dashboard/integrations"},"integrations")," in the corresponding environment. The events enabled for your project on the ",(0,o.kt)("a",{href:"https://radar.com/dashboard/settings"},"Settings page")," determine which events are generated and suppressed."),(0,o.kt)("p",null,"For extra credit, download the Radar ",(0,o.kt)("a",{parentName:"p",href:"/toolkit"},"Toolkit")," iOS or Android app to generate events in real life right from your own phone!"),(0,o.kt)("h2",{id:"how-to-view-analyze-and-debug-events"},"How to view, analyze, and debug events"),(0,o.kt)("p",null,"Once you've started generating events in the simulator, you will see them on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/events"},"Events page"),". Select ",(0,o.kt)("em",{parentName:"p"},"View")," from an event in the simulator or navigate to ",(0,o.kt)("em",{parentName:"p"},"Events")," from the left navigation. You will see the list of events generated from the simulator or Toolkit app."),(0,o.kt)("p",null,"You can also analyze events over time by selecting the view type menu, ",(0,o.kt)("em",{parentName:"p"},"Recent"),", and changing to ",(0,o.kt)("em",{parentName:"p"},"Analysis"),"."),(0,o.kt)("p",null,"If you need to debug a specific user, you can also view their detailed ",(0,o.kt)("a",{parentName:"p",href:"/dashboard#user-activity"},"activity")," by navigating to ",(0,o.kt)("em",{parentName:"p"},"Users"),", selecting the user of interest, and clicking ",(0,o.kt)("em",{parentName:"p"},"View user activity"),". Similar to the simulator, user activity allows you interactively traverse user locations and events for a given time window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"User activity",src:n(2798).Z})),(0,o.kt)("p",null,"To learn more about geofences and their events, reference the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/geofences"},"geofences documentation"),"."))}p.isMDXComponent=!0},3007:function(e,t,n){t.Z=n.p+"assets/images/simulator-b6b8b7f52d116e24f8a0beff9b9a1604.png"},2798:function(e,t,n){t.Z=n.p+"assets/images/user_activity-95b600f08f4a6647b4fc4a874aad1d79.png"}}]);