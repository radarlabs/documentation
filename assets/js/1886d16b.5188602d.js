"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8346],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,o(o({ref:e},c),{},{components:a})):n.createElement(g,o({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9749:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o={title:"Routing APIs"},l=void 0,s={unversionedId:"maps/routing",id:"maps/routing",isDocsHomePage:!1,title:"Routing APIs",description:"Use Radar's routing APIs to calculate travel distances between origins and destinations.",source:"@site/docs/maps/routing.mdx",sourceDirName:"maps",slug:"/maps/routing",permalink:"/documentation/maps/routing",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/routing.mdx",tags:[],version:"current",frontMatter:{title:"Routing APIs"},sidebar:"defaultSidebar",previous:{title:"Search APIs",permalink:"/documentation/maps/search"},next:{title:"Maps (Beta)",permalink:"/documentation/maps/maps"}},p=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"Distance",id:"distance",children:[]},{value:"Matrix",id:"matrix",children:[]}]},{value:"Coverage",id:"coverage",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Report an issue",id:"report-an-issue",children:[]},{value:"Support",id:"support",children:[]}],c={toc:p};function u(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use Radar's routing APIs to calculate travel distances between origins and destinations."),(0,i.kt)("img",{className:"hero-image--small",src:"https://images.ctfassets.net/f2vbu16fzuly/F5Vs2tcMFHDS6t2Pi9UFc/e1c4cc6fd8246f747f7fbdef7e16ced5/routing_api.svg"}),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,i.kt)("p",null,"Then, call one of the routing APIs below, either ",(0,i.kt)("a",{parentName:"p",href:"/documentation/api"},"directly")," or ",(0,i.kt)("a",{parentName:"p",href:"/documentation/sdk"},"using the SDK"),"."),(0,i.kt)("p",null,"From there, use the APIs to build location features in your app or website, such as store locators, address autocomplete, or delivery tracking."),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("h3",{id:"distance"},"Distance"),(0,i.kt)("p",null,"Use the distance API to calculate the travel distance and duration between an origin and a destination. You can specify one or more travel modes, including ",(0,i.kt)("inlineCode",{parentName:"p"},"foot"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bike"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"car"),"."),(0,i.kt)("p",null,"Use cases for this endpoint include calculating the distance and duration of a trip from point A to point B, calculating the ETA for a pickup or delivery, or calculating the walking and driving distance to a nearby store."),(0,i.kt)("p",null,"See the distance API reference ",(0,i.kt)("a",{parentName:"p",href:"/documentation/api#distance"},"here"),"."),(0,i.kt)("h3",{id:"matrix"},"Matrix"),(0,i.kt)("p",null,"Use the matrix API to calculate travel distances and durations between multiple origins and destinations."),(0,i.kt)("p",null,"Use cases for this endpoint include calculating the walking or driving distance to multiple nearby stores (e.g., in a store locator) or optimizing routes."),(0,i.kt)("p",null,"See the matrix API reference ",(0,i.kt)("a",{parentName:"p",href:"/documentation/api#matrix"},"here"),"."),(0,i.kt)("h2",{id:"coverage"},"Coverage"),(0,i.kt)("p",null,"Radar's routing APIs incorporate both open and commercial datasets for maximum coverage at an affordable price relative to alternatives."),(0,i.kt)("p",null,"The following table describes data coverage for routing APIs, by country, for consumer use cases (e.g., store locators) and logistics use cases (e.g., ride sharing, delivery)."),(0,i.kt)("h4",{id:"legend"},"Legend"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Icon"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,i.kt)("td",{parentName:"tr",align:null},"Great data quality and availability")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,i.kt)("td",{parentName:"tr",align:null},"Good data quality and availability")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,i.kt)("td",{parentName:"tr",align:null},"Approximate data quality and availability")))),(0,i.kt)("h4",{id:"coverage-1"},"Coverage"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"Distance and matrix"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (consumer)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"125%"}},"\u25d0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (logistics)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{style:{"font-size":"125%"}},"\u25d0"))))),(0,i.kt)("h2",{id:"caching"},"Caching"),(0,i.kt)("p",null,"You can cache API responses for up to 30 days. For more information, see our terms of use ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/terms"},"here"),"."),(0,i.kt)("h2",{id:"report-an-issue"},"Report an issue"),(0,i.kt)("p",null,"The Radar team is constantly working to improve data coverage for our geocoding, search, and routing APIs. Bad response? Unexpected error? Report it ",(0,i.kt)("a",{parentName:"p",href:"https://forms.gle/9ZfHi95wd8xgEERb6"},"here"),", and our team will fix it ASAP."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}u.isMDXComponent=!0}}]);