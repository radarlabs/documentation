"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6701],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6014:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i={title:"Geocoding APIs"},l=void 0,s={unversionedId:"maps/geocoding",id:"maps/geocoding",isDocsHomePage:!1,title:"Geocoding APIs",description:"Use Radar's geocoding APIs to convert addresses to latitude and longitude coordinates, or vice versa.",source:"@site/docs/maps/geocoding.mdx",sourceDirName:"maps",slug:"/maps/geocoding",permalink:"/documentation/maps/geocoding",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/geocoding.mdx",tags:[],version:"current",frontMatter:{title:"Geocoding APIs"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/documentation/maps/overview"},next:{title:"Search APIs",permalink:"/documentation/maps/search"}},d=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"Forward geocoding",id:"forward-geocoding",children:[]},{value:"Reverse geocoding",id:"reverse-geocoding",children:[]},{value:"IP geocoding",id:"ip-geocoding",children:[]}]},{value:"Coverage",id:"coverage",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Report an issue",id:"report-an-issue",children:[]},{value:"Support",id:"support",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use Radar's geocoding APIs to convert addresses to latitude and longitude coordinates, or vice versa."),(0,o.kt)("img",{className:"hero-image--small",src:"https://images.ctfassets.net/f2vbu16fzuly/5C7iiFARsAB5qoK98zsdEo/f88e7d099884ff45b59ab6bae1b12f13/geocoding_api.svg"}),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,o.kt)("p",null,"Then, call one of the geocoding APIs below, either ",(0,o.kt)("a",{parentName:"p",href:"/documentation/api"},"directly")," or ",(0,o.kt)("a",{parentName:"p",href:"/documentation/sdk"},"using the SDK"),"."),(0,o.kt)("p",null,"From there, use the APIs to build location features in your app or website, such as store locators, address autocomplete, or delivery tracking."),(0,o.kt)("h2",{id:"endpoints"},"Endpoints"),(0,o.kt)("h3",{id:"forward-geocoding"},"Forward geocoding"),(0,o.kt)("p",null,"Use the forward geocoding API to convert addresses to coordinates."),(0,o.kt)("p",null,"This endpoint is best for complete addresses. For partial addresses, call the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/maps/search#autocomplete"},"autocomplete API")," instead."),(0,o.kt)("p",null,"Use cases for this endpoint include converting an address to coordinates to drop a pin on a map or search nearby the address."),(0,o.kt)("p",null,"See the forward geocoding API reference ",(0,o.kt)("a",{parentName:"p",href:"/documentation/api#forward-geocode"},"here"),"."),(0,o.kt)("h3",{id:"reverse-geocoding"},"Reverse geocoding"),(0,o.kt)("p",null,"Use the reverse geocoding API to convert coordinates to an address."),(0,o.kt)("p",null,"Use cases for this endpoint include displaying an address for a pin dropped on a map."),(0,o.kt)("p",null,"See the reverse geocoding API reference ",(0,o.kt)("a",{parentName:"p",href:"/documentation/api#reverse-geocode"},"here"),"."),(0,o.kt)("h3",{id:"ip-geocoding"},"IP geocoding"),(0,o.kt)("p",null,"Use the IP geocoding API to convert IP address to city, state, and country."),(0,o.kt)("p",null,"Use cases for this endpoint include localizing content on a website or in an app without requesting location permissions."),(0,o.kt)("p",null,"See the IP geocoding API reference ",(0,o.kt)("a",{parentName:"p",href:"/documentation/api#ip-geocode"},"here"),"."),(0,o.kt)("h2",{id:"coverage"},"Coverage"),(0,o.kt)("p",null,"Radar's geocoding APIs incorporate both open and commercial datasets for maximum coverage at an affordable price relative to alternatives."),(0,o.kt)("p",null,"The following table describes data coverage for geocoding APIs, by country, for consumer use cases (e.g., store locators) and logistics use cases (e.g., ride sharing, delivery)."),(0,o.kt)("h4",{id:"legend"},"Legend"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Icon"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,o.kt)("td",{parentName:"tr",align:null},"Great data quality and availability")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},"Good data quality and availability")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,o.kt)("td",{parentName:"tr",align:null},"Approximate data quality and availability")))),(0,o.kt)("h4",{id:"coverage-1"},"Coverage"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("th",{parentName:"tr",align:null},"Coarse (city-level) forward and reverse geocoding"),(0,o.kt)("th",{parentName:"tr",align:null},"Fine (address-level) forward and reverse geocoding"),(0,o.kt)("th",{parentName:"tr",align:null},"IP geocoding"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")))),(0,o.kt)("h2",{id:"caching"},"Caching"),(0,o.kt)("p",null,"You can cache API responses for up to 30 days. For more information, see our terms of use ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/terms"},"here"),"."),(0,o.kt)("h2",{id:"report-an-issue"},"Report an issue"),(0,o.kt)("p",null,"The Radar team is constantly working to improve data coverage for our geocoding, search, and routing APIs. Bad response? Unexpected error? Report it ",(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/9ZfHi95wd8xgEERb6"},"here"),", and our team will fix it ASAP."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}c.isMDXComponent=!0}}]);