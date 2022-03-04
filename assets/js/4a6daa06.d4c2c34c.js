"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3958],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},970:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r="alert_19nB",i="alertWarning_1tiz",o="alertInfo_1EfW",s="alertSuccess_7EZp",l=function(e){var t=e.children,a=e.alertType;return"warning"===a?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===a?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"success"===a?n.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},8930:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(970),s={sidebar_position:3,title:"Places",id:"places"},l=void 0,c={unversionedId:"places",id:"places",isDocsHomePage:!1,title:"Places",description:"Places is available on the { }",source:"@site/docs/places.mdx",sourceDirName:".",slug:"/places",permalink:"/documentation/places",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/places.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Places",id:"places"},sidebar:"defaultSidebar",previous:{title:"Geofences",permalink:"/documentation/geofences"},next:{title:"Categories",permalink:"/documentation/places/categories"}},p=[{value:"How it works",id:"how-it-works",children:[]},{value:"Confidence",id:"confidence",children:[]},{value:"Categories",id:"categories",children:[]},{value:"Chains",id:"chains",children:[{value:"Mappings",id:"mappings",children:[]},{value:"Metadata",id:"metadata",children:[]}]},{value:"Groups",id:"groups",children:[]},{value:"Place filters",id:"place-filters",children:[]},{value:"Verify events",id:"verify-events",children:[]}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"Places is available on the "," ",(0,i.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,i.kt)("p",null,"Places uses our place database to detect when a user visits a place, chain, or category, even if you haven't set up geofences for those places."),(0,i.kt)("p",null,"Radar ingests and curates place data from multiple sources, providing you with a comprehensive view of the world."),(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/2E2wGOcbv5OEJZYWSTXBB/4007d02b24d65d7097e6658b9da7f242/places.svg",className:"hero-image"}),(0,i.kt)("p",null,"Places provides the following user context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "place": {\n    "name": "Starbucks",\n    "chain": {\n      "name": "Starbucks",\n      "slug": "starbucks",\n      "externalId": "123",\n      "metadata": {\n        "customFlag": true\n      }\n    },\n    "categories": ["food-beverage", "coffee-shop"],\n    "location": {\n      "type": "Point",\n      "coordinates": [-73.977797, 40.783826]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Places also provides the following events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.entered_place")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.exited_place"))),(0,i.kt)("p",null,"You can receive events client-side via the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or server-side via ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"event integrations"),", including webhooks."),(0,i.kt)("p",null,"You can enable Places on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"Alternatively, if you have your own custom place data, you can create geofences instead. Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/geofences"},"Geofences"),"."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Radar generates a place entry event if a user stops at a place (i.e., when ",(0,i.kt)("inlineCode",{parentName:"p"},"stopped")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," based on ",(0,i.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options")," or when ",(0,i.kt)("inlineCode",{parentName:"p"},"foreground")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),") matching ",(0,i.kt)("a",{parentName:"p",href:"#place-filters"},"filters")," with sufficient confidence, then a place exit event when the user leaves the place with sufficient confidence."),(0,i.kt)("p",null,"All place events have ",(0,i.kt)("a",{parentName:"p",href:"#confidence"},"confidence levels"),", and places may have one or more ",(0,i.kt)("a",{parentName:"p",href:"/places#categories"},"categories")," and a ",(0,i.kt)("a",{parentName:"p",href:"/places#chains"},"chain"),"."),(0,i.kt)("h2",{id:"confidence"},"Confidence"),(0,i.kt)("p",null,"All place events have confidence levels. Confidence levels range from ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," (low) to ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," (high). Confidence is a function of the accuracy of the location reported by the device, the footprint of the place, the density of the area, the popularity of the place, and other signals."),(0,i.kt)("p",null,"You may decide to ignore events based on confidence levels."),(0,i.kt)("h2",{id:"categories"},"Categories"),(0,i.kt)("p",null,"Places may have one or more categories. Radar supports hundreds of categories, organized in a hierarchy. View the ",(0,i.kt)("a",{parentName:"p",href:"/places/categories"},"full list of categories"),"."),(0,i.kt)("p",null,"You can listen for place events with specific categories. For example, to do something if a user is at an airport, on ",(0,i.kt)("a",{parentName:"p",href:"/sdk#ios"},"iOS"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'Radar.trackOnce { (status, location, events, user) in\n    if let place = user?.place,\n       place.hasCategory("airport") {\n        // do something\n    }\n}\n')),(0,i.kt)("h2",{id:"chains"},"Chains"),(0,i.kt)("p",null,"Places may have a chain. Radar supports thousands of U.S. and international chains. View the ",(0,i.kt)("a",{parentName:"p",href:"/places/chains"},"full list of chains"),"."),(0,i.kt)("p",null,"You can listen for place events with specific chains. For example, to do something when a user stops at a Starbucks, on ",(0,i.kt)("a",{parentName:"p",href:"/sdk#android"},"Android"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public void onEventsReceived(Context context,\n                             RadarEvent[] events,\n                             RadarUser user) {\n    for (RadarEvent event : events) {\n        if (event.type == RadarEventType.USER_ENTERED_PLACE &&\n            event.confidence == RadarEventConfidence.HIGH &&\n            event.place.isChain("starbucks")) {\n            // do something\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"mappings"},"Mappings"),(0,i.kt)("p",null,"To map Radar chain slugs to custom IDs, set ",(0,i.kt)("em",{parentName:"p"},"Chain Mappings")," under ",(0,i.kt)("em",{parentName:"p"},"Places")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"You can set a JSON string representing a dictionary with keys and values of type string."),(0,i.kt)("p",null,"For example, to map ",(0,i.kt)("inlineCode",{parentName:"p"},"burger-king")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mcdonalds")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"456"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "burger-king": "123", "mcdonalds": "456" }\n')),(0,i.kt)("p",null,"Custom chain IDs will be exposed as ",(0,i.kt)("inlineCode",{parentName:"p"},"place.chain.externalId")," in user context and events."),(0,i.kt)("h3",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"To map Radar chain slugs to custom metadata, set ",(0,i.kt)("em",{parentName:"p"},"Chain Metadata")," under ",(0,i.kt)("em",{parentName:"p"},"Places")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"You can set a JSON string with values of type dictionary, each with between 1 and 16 keys and values of type string, boolean, or number."),(0,i.kt)("p",null,"For example, to map ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.offers")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"burger-king")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mcdonalds"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "burger-king": { "category": "Restaurant", "offers": true },\n  "mcdonalds": { "category": "Restaurant", "offers": false }\n}\n')),(0,i.kt)("p",null,"Custom chain metadata will be exposed as ",(0,i.kt)("inlineCode",{parentName:"p"},"place.chain.metadata")," in user context and events."),(0,i.kt)("h2",{id:"groups"},"Groups"),(0,i.kt)("p",null,"Finally, places may have a group, distinct from chain or categories. A group is a curated list of places with special metadata, like ",(0,i.kt)("inlineCode",{parentName:"p"},"major-us-airport")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"major-us-sports-venue-stadium"),". View the ",(0,i.kt)("a",{parentName:"p",href:"/places/groups"},"full list of groups"),"."),(0,i.kt)("h2",{id:"place-filters"},"Place filters"),(0,i.kt)("p",null,"We recommend filtering events to specific categories or chains under ",(0,i.kt)("em",{parentName:"p"},"Places")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"For example, to monitor only fast food restaurants, you might add ",(0,i.kt)("inlineCode",{parentName:"p"},"fast-food-restaurant")," to category filters, or add ",(0,i.kt)("inlineCode",{parentName:"p"},"burger-king"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mcdonalds"),", and others to chain filters."),(0,i.kt)("p",null,"View the ",(0,i.kt)("a",{parentName:"p",href:"/places#categories"},"full list of categories")," and the ",(0,i.kt)("a",{parentName:"p",href:"/places#chains"},"full list of chains"),"."),(0,i.kt)("h2",{id:"verify-events"},"Verify events"),(0,i.kt)("p",null,"You can accept or reject places events after user check-ins or other forms of verification. Event verifications will be used to improve the accuracy and confidence level of future events."),(0,i.kt)("p",null,"For example, to accept an event on iOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"Radar.acceptEventId(event._id, verifiedPlaceId: event.alternatePlaces[0]._id)\n")))}u.isMDXComponent=!0}}]);