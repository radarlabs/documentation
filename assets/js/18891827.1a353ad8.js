"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9081],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(s,".").concat(p)]||u[p]||f[p]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,d=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2204:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a="Card_ShZN",i=function(e){var t=e.children,n=e.className;return r.createElement("div",{className:a+" "+n},t)}},3056:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a="IconCard_fzjg",i="icon_1qTl",o="content_240e",c="description_1JUI",s="CardTitle_3LAi",d=n(2204),l=function(e){var t=e.icon,n=e.children,l=e.title;return r.createElement(d.Z,{title:l,className:a},r.createElement("div",{className:i},t),r.createElement("div",{className:o},r.createElement("h3",{className:s},l),r.createElement("p",{className:c},n)))}},708:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a="LinkCard_75d5",i=n(4996),o=function(e){var t=e.linkTo,n=e.children;e.title;return r.createElement("a",{href:(0,i.Z)(t),className:a},n)}},1821:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a="TileCard_3eEi",i="CardContent_2Ki1",o="CardTitle_1W1S",c=n(2204),s=function(e){var t=e.children,n=e.title;return r.createElement(c.Z,{className:a},r.createElement("div",{className:i},t),n&&r.createElement("div",{className:o},n))}},4826:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return f},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(708),c=n(3056),s=(n(1821),{id:"overview",title:"Documentation",slug:"/"}),d=void 0,l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Documentation",description:"Radar is full-stack location infrastructure for every product and service. Our SDKs and APIs make it easy to add location-based experiences to your app or website, from pickup and delivery tracking to location-based messaging to store locators and more.",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Documentation",slug:"/"},sidebar:"defaultSidebar",next:{title:"Overview",permalink:"/documentation/geofencing/overview"}},f=[{value:"Geofencing Platform",id:"geofencing-platform",children:[]},{value:"Maps Platform",id:"maps-platform",children:[]},{value:"For developers",id:"for-developers",children:[]}],u={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://radar.com"},"Radar")," is full-stack location infrastructure for every product and service. Our ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDKs")," and ",(0,i.kt)("a",{parentName:"p",href:"/api"},"APIs")," make it easy to add location-based experiences to your app or website, from pickup and delivery tracking to location-based messaging to store locators and more."),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"/documentation/geofencing/overview"},"Geofencing Platform")," is the industry-leading geofencing and location tracking platform, including geofencing, place visit detection, trip tracking, fraud detection, and analytics."),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"/documentation/maps/overview"},"Maps Platform")," is a cost-effective solution for geocoding APIs, search APIs, routing APIs, and base maps."),(0,i.kt)("p",null,"We power location-based experiences for ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/customers"},"enterprises and startups")," across hundreds of millions of devices worldwide."),(0,i.kt)("p",null,"Start exploring our building blocks and developer tools below."),(0,i.kt)("h2",{id:"geofencing-platform"},"Geofencing Platform"),(0,i.kt)("div",{className:"card-stack"},(0,i.kt)(o.Z,{linkTo:"/geofences",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Geofences",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/5Pe7iZ2B8GrqsMzZmOTznl/856b91bc6836b2cda629913d17556a12/geofences_icon.svg"}),mdxType:"IconCard"},"Industry-leading accuracy with unlimited geofences, polygon geofences, and more")),(0,i.kt)(o.Z,{linkTo:"/trip-tracking",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Trips",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/303Tiq7g4yf2RvJ21oF8mI/f0326a58b816c6febf8c8aa895d3865a/trips_icon.svg"}),mdxType:"IconCard"},"Trip tracking, live ETAs, arrival detection, and routing for pickups and deliveries")),(0,i.kt)(o.Z,{linkTo:"/places",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Places",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/524lVvFi8hIqifiS05WlXE/3f5cd50bbbddd4450c965a426e80da8e/places_icon.svg"}),mdxType:"IconCard"},"Points-of-interest (POI) dataset to detect visits to millions of places")),(0,i.kt)(o.Z,{linkTo:"/regions",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Regions",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/4uyNtLrfjWYoy1AXsBmnBh/ef6105071ad552836b64401d55b53a03/regions_icon.svg"}),mdxType:"IconCard"},"Admin boundary dataset for country, state, and postal code detection")),(0,i.kt)(o.Z,{linkTo:"/beacons",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Beacons",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/5PxLi7iWjrMb8YhHX1re0L/ae30a4f0ce1927df9ae052f6e149e4f9/beacons_icon.svg"}),mdxType:"IconCard"},"Hardware-enabled micro-geofences accurately detect location down to a meter or less")),(0,i.kt)(o.Z,{linkTo:"/fraud",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Fraud",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/1gOMCghrBk6V5WZvf0wqSZ/be03abfcb88cf015e0c6ddb98b0d625c/fraud_icon.svg"}),mdxType:"IconCard"},"Detect GPS spoofing, proxy and VPN usage, and device tampering")),(0,i.kt)(o.Z,{linkTo:"/integrations",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Integrations",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/7Mw0PrZSYSYyf13f2mXDdV/c61fa44dc45ebf92ddb792b6bbc4da09/integrations_icon.svg"}),mdxType:"IconCard"},"Send Radar events and user context to other systems server-to-server"))),(0,i.kt)("h2",{id:"maps-platform"},"Maps Platform"),(0,i.kt)("div",{className:"card-stack"},(0,i.kt)(o.Z,{linkTo:"/maps/geocoding",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Geocoding APIs",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/2BpF1DXUmZzKShVYLsf5NP/cf1ee07496b4b346eb1d082e78950bc0/geocoding_icon.svg"}),mdxType:"IconCard"},"Forward, reverse, and IP geocoding APIs")),(0,i.kt)(o.Z,{linkTo:"/maps/search",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Search APIs",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/7hLiKMDJig70Gt45YlwPis/3a17c101a7c224d90f5ed7fadea9bf39/search_icon.svg"}),mdxType:"IconCard"},"Autocomplete, address validation, and place search APIs")),(0,i.kt)(o.Z,{linkTo:"/maps/routing",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Distance APIs",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/52q8kQwSqL7GmIoMIBz7mw/407c05a97d2ae2e4bcb94f643d37bb6f/routing_icon.svg"}),mdxType:"IconCard"},"Distance and matrix APIs to calculate travel distance and duration")),(0,i.kt)(o.Z,{linkTo:"/maps/maps",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Maps",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/408xzoqNCbQfNBH2JXghce/4e70d1fb17350193df6b37b778c8d065/maps_icon.svg"}),mdxType:"IconCard"},"A cost-effective alternative to Google Maps and Mapbox"))),(0,i.kt)("h2",{id:"for-developers"},"For developers"),(0,i.kt)("div",{className:"card-stack"},(0,i.kt)(o.Z,{linkTo:"/sdk",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"SDK Reference",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/6NiXDqs0ZTXwykOxuNk2mb/864621004218217ec7d70d1dfff8786e/sdk_icon.svg"}),mdxType:"IconCard"},"Add location to your apps and websites with just a few lines of code")),(0,i.kt)(o.Z,{linkTo:"/api",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"API Reference",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/33o8UTrssFr9WZbdLgSfcG/389ab0dd300f6a8197eea5612489de1e/api_icon.svg"}),mdxType:"IconCard"},"APIs for server-side implementations")),(0,i.kt)(o.Z,{linkTo:"/tutorials",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Tutorials",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/1d12A02dnZC12S5GnYz3mV/bf040eaa1d7dc24b1ee60447c1669ece/tutorials_icon.svg"}),mdxType:"IconCard"},"APIs for server-side implementations")),(0,i.kt)(o.Z,{linkTo:"/toolkit",mdxType:"LinkCard"},(0,i.kt)(c.Z,{title:"Toolkit",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/cTt3E7nKLPKMYgr9OuUhv/76ca645dd3704cd6ade57690f908d83e/toolkit_icon.svg"}),mdxType:"IconCard"},"Use our toolkit apps to test Radar before integrating the SDK"))))}p.isMDXComponent=!0}}]);