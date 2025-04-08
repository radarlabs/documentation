"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8346],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:e},c),{},{components:n})):r.createElement(h,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},4996:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+c:c}(i,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},9749:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4996),l={title:"Routing APIs"},s=void 0,u={unversionedId:"maps/routing",id:"maps/routing",isDocsHomePage:!1,title:"Routing APIs",description:"Use Radar's routing APIs to calculate travel distances between origins and destinations.",source:"@site/docs/maps/routing.mdx",sourceDirName:"maps",slug:"/maps/routing",permalink:"/maps/routing",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/routing.mdx",tags:[],version:"current",frontMatter:{title:"Routing APIs"},sidebar:"defaultSidebar",previous:{title:"Search APIs",permalink:"/maps/search"},next:{title:"Maps",permalink:"/maps/maps"}},c=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"Distance",id:"distance",children:[]},{value:"Matrix",id:"matrix",children:[]},{value:"Route matching",id:"route-matching",children:[]},{value:"Directions",id:"directions",children:[]},{value:"Route optimization",id:"route-optimization",children:[]}]},{value:"Coverage",id:"coverage",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Report an issue",id:"report-an-issue",children:[]},{value:"Support",id:"support",children:[]}],p={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use Radar's routing APIs to calculate travel distances between origins and destinations."),(0,i.kt)("img",{className:"hero-image--small",src:(0,o.Z)("/img/routing_api.png")}),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,i.kt)("p",null,"Then, call one of the routing APIs below, either ",(0,i.kt)("a",{parentName:"p",href:"/api"},"directly")," or ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"using the SDK"),"."),(0,i.kt)("p",null,"From there, use the APIs to build location features in your app or website, such as store locators, address autocomplete, or delivery tracking."),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("h3",{id:"distance"},"Distance"),(0,i.kt)("p",null,"Use the distance API to calculate the travel distance and duration between an origin and a destination. You can specify one or more travel modes, including ",(0,i.kt)("inlineCode",{parentName:"p"},"foot"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bike"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"car"),"."),(0,i.kt)("p",null,"Use cases for this endpoint include calculating the distance and duration of a trip from point A to point B, calculating the ETA for a pickup or delivery, or calculating the walking and driving distance to a nearby store."),(0,i.kt)("p",null,"See the distance API reference ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"here"),"."),(0,i.kt)("h3",{id:"matrix"},"Matrix"),(0,i.kt)("p",null,"Use the matrix API to calculate travel distances and durations between multiple origins and destinations."),(0,i.kt)("p",null,"Use cases for this endpoint include calculating the walking or driving distance to multiple nearby stores (e.g., in a store locator) or optimizing routes."),(0,i.kt)("p",null,"See the matrix API reference ",(0,i.kt)("a",{parentName:"p",href:"/api#matrix"},"here"),"."),(0,i.kt)("h3",{id:"route-matching"},"Route matching"),(0,i.kt)("p",null,"Use the route matching API to snap points collected along a route to roads that were most likely traveled on. Returns the matched path and road information."),(0,i.kt)("p",null,"Use cases for this endpoint include producing clean paths that can be displayed on a map, used for accurate mileage tracking and other analysis, as well as retrieving road context such as speed limits and road names along a traveled path."),(0,i.kt)("p",null,"See the route matching API reference ",(0,i.kt)("a",{parentName:"p",href:"/api#route-match"},"here"),"."),(0,i.kt)("h3",{id:"directions"},"Directions"),(0,i.kt)("p",null,"Use the directions API to calculate the most efficient route between two or more locations to visit in order."),(0,i.kt)("p",null,"Use cases for this endpoint include calculating and displaying paths between locations on a map."),(0,i.kt)("p",null,"See the directions API reference ",(0,i.kt)("a",{parentName:"p",href:"/api#directions"},"here"),"."),(0,i.kt)("h3",{id:"route-optimization"},"Route optimization"),(0,i.kt)("p",null,"Use the route optimization API to calculate the optimal ordering and route to visit a list of locations."),(0,i.kt)("p",null,"Use cases for this endpoint include determining the best sequence for several pickups or deliveries, or calculating the optimal route to visit multiple stops."),(0,i.kt)("p",null,"See the route optimization API reference ",(0,i.kt)("a",{parentName:"p",href:"/api#optimize-route"},"here"),"."),(0,i.kt)("h2",{id:"coverage"},"Coverage"),(0,i.kt)("p",null,"Radar's routing APIs incorporate both open and commercial datasets for maximum coverage at an affordable price relative to alternatives."),(0,i.kt)("p",null,"The following table describes data coverage for routing APIs, by country, for consumer use cases (e.g., store locators) and logistics use cases (e.g., ride sharing, delivery)."),(0,i.kt)("h4",{id:"legend"},"Legend"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Icon"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,i.kt)("td",{parentName:"tr",align:null},"Great data quality and availability")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,i.kt)("td",{parentName:"tr",align:null},"Good data quality and availability")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,i.kt)("td",{parentName:"tr",align:null},"Approximate data quality and availability")))),(0,i.kt)("h4",{id:"coverage-1"},"Coverage"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"Distance and matrix"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"125%"}},"\u25d0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"125%"}},"\u25d0"))))),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"You can cache API responses for up to 30 days. For more information, see our terms of use ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/terms"},"here"),"."),(0,i.kt)("h2",{id:"report-an-issue"},"Report an issue"),(0,i.kt)("p",null,"The Radar team is constantly working to improve data coverage for our geocoding, search, and routing APIs. Bad response? Unexpected error? Report it ",(0,i.kt)("a",{parentName:"p",href:"https://forms.gle/9ZfHi95wd8xgEERb6"},"here"),", and our team will fix it ASAP."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Contact us at ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/support"},"radar.com/support"),"."))}d.isMDXComponent=!0}}]);