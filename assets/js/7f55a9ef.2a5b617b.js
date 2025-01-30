"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4160],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||g[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(2263),i=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,l=r.absolute,d=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+c:c}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},2204:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i="Card_ShZN",r=function(e){var t=e.children,n=e.className;return a.createElement("div",{className:i+" "+n},t)}},708:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i="LinkCard_75d5",r=n(4996),o=function(e){var t=e.linkTo,n=e.children;e.title;return a.createElement("a",{href:(0,r.Z)(t),className:i},n)}},1821:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),i="TileCard_3eEi",r="CardContent_2Ki1",o="CardTitle_1W1S",s=n(2204),l=function(e){var t=e.children,n=e.title;return a.createElement(s.Z,{className:i},a.createElement("div",{className:r},t),n&&a.createElement("div",{className:o},n))}},843:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return g},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(708),s=n(1821),l={title:"Integrations"},d=void 0,c={unversionedId:"integrations",id:"integrations",isDocsHomePage:!1,title:"Integrations",description:"Radar supports a number of server-side integrations. Event integrations like webhooks, mParticle, and Braze allow you to send events from Radar to other systems. Geofence integrations like geofence sync and Yext allow you to sync geofences from other systems to Radar. Finally, trip integrations allow you to start and stop trips and send live ETAs to other platforms.",source:"@site/docs/integrations.mdx",sourceDirName:".",slug:"/integrations",permalink:"/documentation/integrations",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/integrations.mdx",tags:[],version:"current",frontMatter:{title:"Integrations"},sidebar:"defaultSidebar",previous:{title:"Campaigns",permalink:"/documentation/campaigns"},next:{title:"Webhooks",permalink:"/documentation/integrations/webhooks"}},g=[{value:"Event integrations",id:"event-integrations",children:[{value:"Filters",id:"filters",children:[]}]},{value:"Geofence integrations",id:"geofence-integrations",children:[]},{value:"Trip integrations",id:"trip-integrations",children:[]}],p={toc:g};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Radar supports a number of server-side integrations. ",(0,r.kt)("em",{parentName:"p"},"Event integrations")," like webhooks, mParticle, and Braze allow you to send events from Radar to other systems. ",(0,r.kt)("em",{parentName:"p"},"Geofence integrations")," like geofence sync and Yext allow you to sync geofences from other systems to Radar. Finally, ",(0,r.kt)("em",{parentName:"p"},"trip integrations")," allow you to ",(0,r.kt)("a",{parentName:"p",href:"/trip-tracking"},"start and stop trips")," and send live ETAs to other platforms."),(0,r.kt)("h2",{id:"event-integrations"},"Event integrations"),(0,r.kt)("div",{className:"deck"},(0,r.kt)(o.Z,{linkTo:"/integrations/webhooks",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Webhooks",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/75HOdPFYSWCFbXAoOIQhCM/15ae35fdef8e0a7d2e173018174aeee6/webhooks.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/braze",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Braze",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/72J5q7LqJM5NrfdPiqVyTP/a3a67ededa4ffb126200196196c042a1/braze.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/urban-airship",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Airship",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/45UBZEAVnVKlEHtil1iz0M/e5b001bac96c4da50143d4ac14d9fc4e/airship.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/onesignal",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"OneSignal",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/80pHUR3gSl4z15J2cVa68/ea54ea0d92e223b2f4d32832e7ae53a4/onesignal.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/mparticle",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"mParticle",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/29R4KVZ3aR1joNXfNuZw2G/4bac743a3df61229f0879aed5eeeabe9/mparticle.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/segment",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Segment",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/27XQ1zGeHIhjm5LtLF3bgU/cbaeb56d29be5babd074b9643137b493/segment.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/branch",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Branch",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/6w8utKLdZulCfgKb8xFxws/6224af9b6dbd808e8982afdc2d6124c1/branch.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/lytics",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Lytics",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/6OH5TKmnhmdIPwt5AmDRKg/86045c964b5df9d4bd8a44a4b6d743bf/lytics.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/iterable",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Iterable",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/5JkL4nN6sFxdFP1FvWTsgI/77e1bc68e8e237fffad48f826ee22e8c/iterable.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/leanplum",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Leanplum",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/3gsuQKmyyKbC9DxHeCGAMj/87bf2fa85899171df260fe2a465dd92f/leanplum-logo.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/salesforce",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Salesforce",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/ejJlxW8GiFw6y93xitjto/5fb51966020c0a1973977439dda45b74/salesforce.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/amplitude",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Amplitude",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/1daVtiOrTk4AXHLCpYyJrk/84e1f637cb1db99afa9dbc118c3bbd0c/amplitude.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/mixpanel",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Mixpanel",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/3FE3T0zASXVYWhQFHyKc32/18d2d4ba0db0a8ce2ba23057155a7d23/mixpanel.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/aws-pinpoint",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Amazon Pinpoint",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/33MFOwGnSEZjMw1ccr6tNY/8a506cdb4d5d41db0b61e153cedec55b/amazonPinpointLogo.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/attentive",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Attentive",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/1NPgxCxK9wqf5yrbvi9DJw/4fa7d5746e5f995463a003eb2d08014c/attentive.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/cordial",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Cordial",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/7q9O8Y2nkjNGjalieEGug6/02a8e1d6277e5aabf4ca813b98b0998f/cordial.png"})))),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("p",null,"Click ",(0,r.kt)("em",{parentName:"p"},"Show Advanced")," on the ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"Integrations page")," under an integration to show advanced filters."),(0,r.kt)("p",null,"To filter event types sent to an integration, select or unselect event types under ",(0,r.kt)("em",{parentName:"p"},"Event Type Allowlist"),"."),(0,r.kt)("p",null,"To filter keys from the request body sent to an integration, add keys, comma-separated, to ",(0,r.kt)("em",{parentName:"p"},"Request Key Blocklist"),". For example, to skip sending ",(0,r.kt)("inlineCode",{parentName:"p"},"radar_geofence_ids")," to the Segment ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," call and to skip sending ",(0,r.kt)("inlineCode",{parentName:"p"},"geofence_id")," to the Segment ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," call, add ",(0,r.kt)("inlineCode",{parentName:"p"},"radar_geofence_ids,geofence_id")," to ",(0,r.kt)("em",{parentName:"p"},"Request Key Blocklist"),"."),(0,r.kt)("p",null,"To filter events sent to an integration based upon a ",(0,r.kt)("a",{parentName:"p",href:"/geofences"},"Geofence")," tag, add tags, comma-separated to ",(0,r.kt)("em",{parentName:"p"},"Geofence Tag Blocklist"),". For example, to skip sending all events to the Amplitude integration for geofences tagged ",(0,r.kt)("inlineCode",{parentName:"p"},"gas-station")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cafe"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"gas-station,cafe")," to ",(0,r.kt)("em",{parentName:"p"},"Geofence Tag Blocklist"),"."),(0,r.kt)("h2",{id:"geofence-integrations"},"Geofence integrations"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Geofence integrations")," allow you to sync geofences from other systems to Radar."),(0,r.kt)("div",{className:"deck"},(0,r.kt)(o.Z,{linkTo:"/integrations/yext",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Yext",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/79yasKMxHXJfO0VXdovKX5/bd28de435af26bfe101543050fd5f519/yext.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/brandify",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Brandify",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/5dm9ubBk9xEXOZIS0ii4kO/dca3cd457248b3e2f12679d575e48dad/brandify.png"}))),(0,r.kt)(o.Z,{linkTo:"/integrations/census",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Census",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://assets-global.website-files.com/60c8cc686ce111bf81e2fcac/6255ea1aa451c9714d959a73_census-mark-flamingo.svg"})))),(0,r.kt)("h2",{id:"trip-integrations"},"Trip integrations"),(0,r.kt)("div",{className:"deck"},(0,r.kt)(o.Z,{linkTo:"/integrations/olo",mdxType:"LinkCard"},(0,r.kt)(s.Z,{title:"Olo",mdxType:"TileCard"},(0,r.kt)("img",{className:"logo integrations-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/Ddk41H23DrKONqUsmJfY4/4877547cb981c489177b9d5dbfe01c8b/olo-logo.png"})))))}m.isMDXComponent=!0}}]);