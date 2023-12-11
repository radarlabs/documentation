"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7306],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),k=r,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(944),i=a(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=function(e){var t,a=e.lazy,s=e.block,d=e.defaultValue,c=e.values,u=e.groupId,p=e.className,k=n.Children.toArray(e.children),m=null!=c?c:k.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value,g=(0,r.Z)(),h=g.tabGroupChoices,y=g.setTabGroupChoices,v=(0,n.useState)(f),N=v[0],b=v[1],w=[];if(null!=u){var C=h[u];null!=C&&C!==N&&m.some((function(e){return e.value===C}))&&b(C)}var T=function(e){var t=e.currentTarget,a=w.indexOf(t),n=m[a].value;b(n),null!=u&&(y(u,n),setTimeout((function(){var e,a,n,r,i,o,s,d;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,d=o.innerWidth,a>=0&&i<=d&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},p)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:R,onFocus:T,onClick:T},null!=a?a:t)}))),a?(0,n.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},970:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r="alert_19nB",i="alertWarning_1tiz",o="alertInfo_1EfW",l="alertTip_1W6d",s="alertSuccess_7EZp",d=function(e){var t=e.children,a=e.alertType;return"warning"===a?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===a?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"tip"===a?n.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):"success"===a?n.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},1535:function(e,t,a){var n=a(7294),r=a(944);t.Z=function(e){e.test;var t=e.groupId,a=e.value,i=e.children,o=(0,r.Z)(),l=o.tabGroupChoices,s=(o.setTabGroupChoices,l[t]);return null!=t&&s==a?n.createElement("span",null,i):""}},3604:function(e,t,a){var n=a(7294),r=a(944);t.Z=function(e){e.groupId;var t=e.children,a=(0,r.Z)();a.tabGroupChoices,a.setTabGroupChoices;return n.createElement("span",null,t)}},3441:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(970),l=a(1395),s=a(8215),d=(a(3604),a(1535),{title:"Fraud"}),c=void 0,u={unversionedId:"fraud",id:"fraud",isDocsHomePage:!1,title:"Fraud",description:"Fraud is available on the { }",source:"@site/docs/fraud.mdx",sourceDirName:".",slug:"/fraud",permalink:"/documentation/fraud",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/fraud.mdx",tags:[],version:"current",frontMatter:{title:"Fraud"},sidebar:"defaultSidebar",previous:{title:"Beacons",permalink:"/documentation/beacons"},next:{title:"Notifications",permalink:"/documentation/notifications"}},p=[{value:"Quickstart",id:"quickstart",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Fraud flags",id:"fraud-flags",children:[]},{value:"Bypassing checks for testing",id:"bypassing-checks-for-testing",children:[]},{value:"Blocking users",id:"blocking-users",children:[]},{value:"Allowed states and countries",id:"allowed-states-and-countries",children:[]},{value:"Platform-specific configuration",id:"platform-specific-configuration",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Web and desktop",id:"web-and-desktop",children:[]}]},{value:"Verifying user locations",id:"verifying-user-locations",children:[{value:"Manual tracking",id:"manual-tracking",children:[]},{value:"Automatic tracking",id:"automatic-tracking",children:[]}]},{value:"Error handling",id:"error-handling",children:[]}],k={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"Fraud is available on the "," ",(0,i.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,i.kt)("p",null,"With Fraud, you can detect GPS spoofing, proxy and VPN usage, and device tampering."),(0,i.kt)("p",null,"Along with ",(0,i.kt)("a",{parentName:"p",href:"/documentation/regions"},"Regions"),", you can also detect a user's country and state and mark specific regions as allowed or denied to comply with regulations."),(0,i.kt)("img",{className:"hero-image--small",src:"https://images.ctfassets.net/f2vbu16fzuly/6JxBGTIUBytkLEqvEA56fU/d20d42b9d1cb8926ca57bc547b1c0a5b/fraud_event.svg"}),(0,i.kt)("p",null,"Together, Fraud and Regions provide the following user context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fraud": {\n    "verified": true,\n    "passed": false,\n    "bypassed": false,\n    "blocked": false,\n    "mocked": true,\n    "jumped": false,\n    "compromised": false,\n    "inaccurate": false,\n    "proxy": false,\n    "sharing": false,\n    "lastMockedAt": "2023-07-27T17:18:28.536Z",\n    "lastJumpedAt": "2023-07-27T17:18:28.536Z",\n    "lastCompromisedAt": null,\n    "lastInaccurateAt": null,\n    "lastProxyAt": null,\n    "lastSharingAt": null\n  },\n  "country": {\n    "code": "US",\n    "name": "United States",\n    "flag": "\ud83c\uddfa\ud83c\uddf8",\n    "passed": true,\n    "allowed": true\n  },\n  "state": {\n    "code": "RI",\n    "name": "Rhode Island",\n    "passed": false,\n    "allowed": true,\n    "distanceToBorder": 192.3,\n    "inBufferZone": true,\n    "inExclusionZone": false\n  }\n}\n')),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,i.kt)("p",null,"Then, enable Fraud on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"From there, ",(0,i.kt)("a",{parentName:"p",href:"/documentation/sdk"},"integrate the SDK"),", complete the steps below, and call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerifiedToken()"),". Radar will perform fraud and jurisdiction checks as described below."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"You can call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()")," to accurately detect a user's current ",(0,i.kt)("a",{parentName:"p",href:"/documentation/geofences"},"geofences"),", current ",(0,i.kt)("a",{parentName:"p",href:"/documentation/places"},"place"),", or current ",(0,i.kt)("a",{parentName:"p",href:"/documentation/regions"},"country and state"),"."),(0,i.kt)("p",null,"However, users can spoof a device's location. For example, a gaming app user may spoof their location to access sports betting features only available in specific states. Or, a retail app user may spoof their location to access offers only available inside a store geofence."),(0,i.kt)("p",null,"To ensure you can trust a user's location, you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerifiedToken()")," instead. Radar will collect a variety of fraud signals and perform fraud and jurisdiction checks, calculating flags that you can use for fraud detection and geo-compliance in your app."),(0,i.kt)("h2",{id:"fraud-flags"},"Fraud flags"),(0,i.kt)("p",null,"If you call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerifiedToken()"),", Radar exposes the following flags in ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"mocked")),": Indicates whether a user's location is being mocked, such as in a simulator or using a location spoofing app (e.g., ",(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.lexa.fakegps&hl=en_US&gl=US"},"Fake GPS location"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"jumped")),': Indicates whether the user moved too far too fast (e.g., "jumped" across the country in only a few seconds).'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"compromised")),": Indicates whether the user's device or app has been compromised according to the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/google/play/integrity"},"Play Integrity API")," on Android or ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/devicecheck/preparing_to_use_the_app_attest_service"},"App Attest service")," on iOS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"inaccurate")),": Indicates whether the user's location accuracy is too low to pass verification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"sharing")),": Indicates whether the user is screen sharing (e.g., using ",(0,i.kt)("a",{parentName:"li",href:"https://www.teamviewer.com/en-us/"},"TeamViewer"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"proxy")),": Indicates whether the user's IP address is a known proxy or VPN."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"verified")),": Indicates whether the request was made with ",(0,i.kt)("a",{parentName:"li",href:"#configuring-ssl-pinning"},"SSL pinning configured successfully"),".")),(0,i.kt)("p",null,"While you can work with individual flags, Radar also exposes a single ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.passed")," flag that indicates whether all fraud checks passed."),(0,i.kt)("p",null,"Additionally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"lastMockedAt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lastJumpedAt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lastCompromisedAt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lastInaccurateAt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lastProxyAt"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"lastSharingAt")," timestamps indicate the last time that the user failed each fraud check."),(0,i.kt)("h2",{id:"bypassing-checks-for-testing"},"Bypassing checks for testing"),(0,i.kt)("p",null,"If desired, you can bypass fraud checks for individual users using the ",(0,i.kt)("em",{parentName:"p"},"Mark as Bypassed")," button on the user detail page."),(0,i.kt)("p",null,"If a user is marked as bypassed, ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.bypassed = true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.passed = true"),", regardless of whether the user passes fraud checks."),(0,i.kt)("h2",{id:"blocking-users"},"Blocking users"),(0,i.kt)("p",null,"You can also manually block a user using the ",(0,i.kt)("em",{parentName:"p"},"Mark as Blocked")," button on the user detail page."),(0,i.kt)("p",null,"If a user is blocked, ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.blocked = true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.passed = false"),", regardless of whether the user passes fraud checks."),(0,i.kt)("h2",{id:"allowed-states-and-countries"},"Allowed states and countries"),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"/documentation/regions"},"Regions"),", gaming customers can mark specific jurisdictions (i.e., countries and states) as allowed or denied to comply with regulations. For example, a sportsbook or daily fantasy sports app may only be allowed to operate in specific US states."),(0,i.kt)("p",null,"If you call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerifiedToken()"),", Radar exposes your settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"user.country.allowed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.state.allowed"),"."),(0,i.kt)("p",null,"Additionally, you can enable buffer zones and exclusion zones for different states. If buffer zones and exclusion zones are enabled, ",(0,i.kt)("inlineCode",{parentName:"p"},"user.state.inBufferZone")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.state.inExclusionZone")," indicates whether the user is within a buffer zone or exclusion zone."),(0,i.kt)("p",null,"While you can work with individual flags, Radar also exposes ",(0,i.kt)("inlineCode",{parentName:"p"},"user.state.passed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.country.passed")," flags that indicate whether all jurisdiction checks passed."),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"Contact your customer success manager for access to buffer zones and exclusion zones."),(0,i.kt)("h2",{id:"platform-specific-configuration"},"Platform-specific configuration"),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("h4",{id:"initialize-sdk"},"Initialize SDK"),(0,i.kt)("p",null,"To support the ",(0,i.kt)("inlineCode",{parentName:"p"},"sharing")," flag on Android, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"fraud = true")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.initialize()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Radar.initialize(\n  context = this,\n  publishableKey = "prj_test_pk...",\n  fraud = true\n)\n')),(0,i.kt)("h4",{id:"play-integrity-api"},"Play Integrity API"),(0,i.kt)("p",null,"To support the ",(0,i.kt)("inlineCode",{parentName:"p"},"compromised")," flag on Android, enable the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/google/play/integrity"},"Play Integrity API")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"If the user's device or app does not meet ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/google/play/integrity/verdict#device-integrity-field"},"basic integrity checks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.compromised = true"),"."),(0,i.kt)("p",null,"You must add the Play Integrity API dependency before calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()"),"."),(0,i.kt)("p",null,"Add the dependency to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," section of your app's ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"dependencies {\n    implementation 'com.google.android.play:integrity:1.2.0'\n}\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR_FORBIDDEN"),", check the logs. The Play Services version on the device may be out of date."),(0,i.kt)("h4",{id:"ssl-pinning"},"SSL pinning"),(0,i.kt)("p",null,"To enable SSL pinning and prevent man-in-the-middle attacks, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"res/xml/network_security_config.xml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<network-security-config>\n    \x3c!-- for React Native --\x3e\n    <domain-config cleartextTrafficPermitted="true">\n        <domain includeSubdomains="true">localhost</domain>\n    </domain-config>\n\n    \x3c!-- for SSL pinning --\x3e\n    <domain-config cleartextTrafficPermitted="false">\n        <domain includeSubdomains="true">api-verified.radar.io</domain>\n        <pin-set>\n            <pin digest="SHA-256">15ktYXSSU2llpy7YyCgeqUKDBkjcimK/weUcec960sI=</pin>\n            <pin digest="SHA-256">15ktYXSSU2llpy7YyCgeqUKDBkjcimK/weUcec960sI=</pin>\n        </pin-set>\n    </domain-config>\n</network-security-config>\n')),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/training/articles/security-config"},"Network Security Configuration on Android"),"."),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("h4",{id:"app-attest"},"App Attest"),(0,i.kt)("p",null,"To support the ",(0,i.kt)("inlineCode",{parentName:"p"},"compromised")," flag on iOS, enable ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/devicecheck/preparing_to_use_the_app_attest_service"},"App Attest")," and configure a list of valid ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/AppID.html"},"App IDs")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"A1B2C3D4E5.com.yourapp.app1,A1B2C3D4E5.com.yourapp.app2"),") on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"If App Attest indicates that the user's device or app has been compromised, ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.compromised = true"),"."),(0,i.kt)("p",null,"App Attest requires iOS 14 and above. If ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR_FORBIDDEN"),", check the logs. The iOS version on the device may not support App Attest."),(0,i.kt)("h4",{id:"ssl-pinning-1"},"SSL pinning"),(0,i.kt)("p",null,"To enable SSL pinning and prevent man-in-the-middle attacks, add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSAppTransportSecurity</key>\n<dict>\n    <key>NSAllowsArbitraryLoads</key>\n    <false/>\n    <key>NSPinnedDomains</key>\n    <dict>\n        <key>api-verified.radar.io</key>\n        <dict>\n            <key>NSIncludesSubdomains</key>\n            <true/>\n            <key>NSPinnedLeafIdentities</key>\n            <array>\n                <dict>\n                    <key>SPKI-SHA256-BASE64</key>\n                    <string>15ktYXSSU2llpy7YyCgeqUKDBkjcimK/weUcec960sI=</string>\n                </dict>\n                <dict>\n                    <key>SPKI-SHA256-BASE64</key>\n                    <string>15ktYXSSU2llpy7YyCgeqUKDBkjcimK/weUcec960sI=</string>\n                </dict>\n            </array>\n        </dict>\n    </dict>\n</dict>\n")),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/news/?id=g9ejcf8y"},"SSL pinning on iOS"),"."),(0,i.kt)("h3",{id:"web-and-desktop"},"Web and desktop"),(0,i.kt)("p",null,"The web SDK supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"mocked"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"jumped")," flags with ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()"),"."),(0,i.kt)("p",null,"On desktop, if the end user installs the Radar Verify Mac or Windows app, the web SDK also supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"sharing")," flag with ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR_DESKTOP_APP"),", it means the Radar Verify app is not running."),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"Contact your customer success manager for access to the Radar Verify Mac or Windows app."),(0,i.kt)("h2",{id:"verifying-user-locations"},"Verifying user locations"),(0,i.kt)("p",null,"Once the above configuration is complete, you can verify a user's location with just a few lines of code."),(0,i.kt)("h3",{id:"manual-tracking"},"Manual tracking"),(0,i.kt)("h4",{id:"standard-callback"},"Standard callback"),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," on app open, periodically, or before sensitive transactions. Then, check ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.passed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"user.state.allowed"),", and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"user.country.allowed")," to allow or deny access."),(0,i.kt)(l.Z,{groupId:"fraud",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"},{label:"Web",value:"web"},{label:"React Native",value:"react-native"},{label:"Capacitor",value:"capacitor"},{label:"Flutter",value:"flutter"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"Radar.trackVerified { (status, location, events, user) in\n  if user?.fraud?.passed == true &&\n    user?.country?.allowed == true &&\n    user?.state?.allowed == true {\n    // allow access to feature\n  } else {\n    // deny access to feature, show error message\n  }\n}\n"))),(0,i.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"Radar.trackVerified { status, location, events, user ->\n  if (user?.fraud?.passed == true &&\n    user.country?.allowed == true &&\n    user.state?.allowed == true) {\n    // allow access to feature\n  } else {\n    // deny access to feature, show error message\n  }\n}\n"))),(0,i.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackVerified().then((result) => {\n  const { user } = result;\n  if (user.fraud.passed && user.country.allowed && user.state.allowed) {\n    // allow access to feature\n  } else {\n    // deny access to feature, show error message\n  }\n}).catch((err) => {\n  // deny access to feature, show error message\n});\n"))),(0,i.kt)(s.Z,{value:"react-native",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackVerified().then((result) => {\n  const { user } = result;\n  if (user.fraud.passed && user.country.allowed && user.state.allowed) {\n    // allow access to feature\n  } else {\n    // deny access to feature, show error message\n  }\n}).catch((err) => {\n  // deny access to feature, show error message\n});\n"))),(0,i.kt)(s.Z,{value:"capacitor",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackVerified().then((result) => {\n  const { user } = result;\n  if (user?.fraud?.passed && user?.country?.allowed && user?.state?.allowed) {\n    // allow access to feature\n  } else {\n    // deny access to feature, show error message\n  }\n}).catch((err) => {\n  // deny access to feature, show error message\n});\n"))),(0,i.kt)(s.Z,{value:"flutter",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var res = await Radar.trackVerified();\n// do something with res['status'], res['location'], res['events'], res['user']\n")))),(0,i.kt)("p",null,"Then, ",(0,i.kt)("a",{parentName:"p",href:"/documentation/api#get-a-user"},"look up the user")," and check fraud flags server-side for an additional layer of verification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.radar.io/v1/users/56db1f4613012711002229f4" \\\n  -H "Authorization: prj_live_sk_..."\n')),(0,i.kt)("h4",{id:"token-callback"},"Token callback"),(0,i.kt)("p",null,"Alternatively, set a JSON Web Token (JWT) secret key on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,i.kt)("p",null,"Then, call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerifiedToken()")," to get a signed JWT containing a payload with ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"user.state"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.country")," instead. Send the JWT to your server to verify and decode it."),(0,i.kt)(l.Z,{groupId:"fraud",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"},{label:"Web",value:"web"},{label:"React Native",value:"react-native"},{label:"Capacitor",value:"capacitor"},{label:"Flutter",value:"flutter"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"Radar.trackVerifiedToken { (status, token) in\n  // send token to server\n}\n"))),(0,i.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"Radar.trackVerifiedToken { status, token ->\n  // send token to server\n}\n"))),(0,i.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackVerified().then((result) => {\n  const { token } = result;\n  // send token to server\n}).catch((err) => {\n  // deny access to feature, show error message\n});\n"))),(0,i.kt)(s.Z,{value:"react-native",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackVerified().then((result) => {\n  const { token } = result;\n  // send token to server\n}).catch((err) => {\n  // deny access to feature, show error message\n});\n"))),(0,i.kt)(s.Z,{value:"capacitor",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackVerifiedToken().then((result) => {\n  const { token } = result;\n  // send token to server\n}).catch((err) => {\n  // deny access to feature, show error message\n});\n"))),(0,i.kt)(s.Z,{value:"flutter",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var res = await Radar.trackVerifiedToken();\n// do something with res['status'], res['token']\n")))),(0,i.kt)("p",null,"Finally, verify and decode the JWT server-side using your secret key and a ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/libraries"},"JWT library"),". If the token is valid, check ",(0,i.kt)("inlineCode",{parentName:"p"},"user.fraud.passed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"user.state.passed"),", and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"user.country.passed")," in the payload to allow or deny access."),(0,i.kt)("p",null,"For example, in JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const jwt = require('jsonwebtoken');\n\ntry {\n    const decoded = jwt.verify(token, SECRET_KEY);\n    const { user } = decoded;\n    // token is valid, check user.fraud, user.state, user.country to allow or deny access\n} catch(err) {\n    // token is invalid, deny access to feature, show error message\n}\n")),(0,i.kt)("h3",{id:"automatic-tracking"},"Automatic tracking"),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"Contact your customer success manager for access to automatic tracking."),(0,i.kt)("p",null,"In addition to manually calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerified()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackVerifiedToken()"),", you can also call ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.startTrackingVerified()")," and Radar will automatically verify the user's location periodically (e.g., on network connection changes or at regular intervals)."),(0,i.kt)(l.Z,{groupId:"fraud",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"},{label:"Web",value:"web"},{label:"React Native",value:"react-native"},{label:"Flutter",value:"flutter"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"Radar.setVerifiedDelegate(delegate)\n\nRadar.startTrackingVerified(token: true)\n\n// in delegate\n\nfunc didUpdateToken(_ token: String) {\n  // send token to server\n}\n"))),(0,i.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"Radar.setVerifiedReceiver(receiver)\n\nRadar.startTrackingVerified(true)\n\n// in receiver\n\noverride fun onTokenUpdated(context: Context, token: String) {\n  // send token to server\n}\n"))),(0,i.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.on('token', (token) => {\n  // send token to server\n});\n\nRadar.startTrackingVerified(true);\n"))),(0,i.kt)(s.Z,{value:"react-native",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.on('token', (result) => {\n  // send result.token to server\n});\n\nRadar.startTrackingVerified(true);\n"))),(0,i.kt)(s.Z,{value:"flutter",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"static void onToken(Map result) {\n  // do something with result.token\n}\n\nRadar.onToken(onToken);\n")))),(0,i.kt)("h2",{id:"error-handling"},"Error handling"),(0,i.kt)("p",null,"On errors or failed fraud checks, you may want to display a message to the end user. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PERMISSIONS")),": Unable to determine your location. Please make sure you've granted location permissions and try again."),(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_LOCATION")),": Unable to determine your location. Please make sure location services and wi-fi are enabled and try again."),(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_NETWORK")),": Unable to determine your location. Please make sure you're connected to the Internet and try again."),(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"country.allowed == false"))," or ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"state.allowed == false")),": Unable to verify your location. Please make sure you're in an allowed area and try again."),(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"fraud.proxy == true")),": Unable to verify your location. Please disconnect from any VPNs or proxy servers you may be using and try again."),(0,i.kt)("li",{parentName:"ul"},"On other error cases, or as a fallback: Unable to verify your location. Please contact support.")))}m.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);