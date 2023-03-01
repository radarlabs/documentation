"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8282],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,l=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,f=r.Children.toArray(e.children),m=null!=c?c:f.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,h=(0,a.Z)(),g=h.tabGroupChoices,y=h.setTabGroupChoices,b=(0,r.useState)(k),v=b[0],w=b[1],x=[];if(null!=p){var N=g[p];null!=N&&N!==v&&m.some((function(e){return e.value===N}))&&w(N)}var S=function(e){var t=e.currentTarget,n=x.indexOf(t),r=m[n].value;w(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:S,onClick:S},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(1395),s=n(8215),l={sidebar_position:5,title:"Detecting location-based fraud"},u=void 0,c={unversionedId:"tutorials/detecting-location-based-fraud",id:"tutorials/detecting-location-based-fraud",isDocsHomePage:!1,title:"Detecting location-based fraud",description:"In this tutorial, we show you how to use the Radar iOS SDK to detect location-based fraud. Location-based fraud in this context includes users who are either using a proxy server or GPS spoofing (mocking) to fake their location in order to gain access to certain app features.",source:"@site/docs/tutorials/detecting-location-based-fraud.md",sourceDirName:"tutorials",slug:"/tutorials/detecting-location-based-fraud",permalink:"/documentation/tutorials/detecting-location-based-fraud",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/tutorials/detecting-location-based-fraud.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Detecting location-based fraud"},sidebar:"defaultSidebar",previous:{title:"Localizing a website based on current country or city",permalink:"/documentation/tutorials/localizing-a-website-based-on-current-country-or-city"},next:{title:"Analyzing where key customer interactions occur",permalink:"/documentation/tutorials/analyzing-where-key-customer-interactions-occur"}},p=[{value:"Languages used",id:"languages-used",children:[]},{value:"Features used",id:"features-used",children:[]},{value:"Steps",id:"steps",children:[{value:"Step 1: Sign up for Radar",id:"step-1-sign-up-for-radar",children:[]},{value:"Step 2: Install the Radar SDK",id:"step-2-install-the-radar-sdk",children:[]},{value:"Step 3: Check to see if a user is mocking or proxying",id:"step-3-check-to-see-if-a-user-is-mocking-or-proxying",children:[]},{value:"(Optional) Step 4: Use Radar Regions to perform a third location check",id:"optional-step-4-use-radar-regions-to-perform-a-third-location-check",children:[]}]},{value:"Support",id:"support",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we show you how to use the Radar ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"iOS SDK")," to detect location-based fraud. Location-based fraud in this context includes users who are either using a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server"},"proxy server")," or GPS spoofing (",(0,o.kt)("em",{parentName:"p"},"mocking"),") to fake their location in order to gain access to certain app features."),(0,o.kt)("h2",{id:"languages-used"},"Languages used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Swift"),(0,o.kt)("li",{parentName:"ul"},"Kotlin")),(0,o.kt)("h2",{id:"features-used"},"Features used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdk/ios"},"iOS SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdk/android"},"Android SDK"))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"step-1-sign-up-for-radar"},"Step 1: Sign up for Radar"),(0,o.kt)("p",null,"If you haven't already, sign up for Radar to get your API key. You can create up to 1,000 geofences and make up to 100,000 API requests per month for free."),(0,o.kt)("a",{className:"btn btn-large btn-primary",href:"https://radar.com/signup"},"Get API Keys"),(0,o.kt)("h3",{id:"step-2-install-the-radar-sdk"},"Step 2: Install the Radar SDK"),(0,o.kt)("h4",{id:"ios"},"iOS"),(0,o.kt)("p",null,"If you're starting from scratch, create a new Xcode project of type Single View App."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/sdk"},"Install the Radar SDK")," using CocoaPods or Carthage (recommended) or by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/radar-sdk-ios/releases"},"downloading the framework")," and dragging it into your project."),(0,o.kt)("p",null,"Initialize the SDK in your ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate")," class with your publishable API key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        Radar.initialize(publishableKey: "prj_test_pk_...")\n\n        return true\n    }\n\n}\n')),(0,o.kt)("h4",{id:"android"},"Android"),(0,o.kt)("p",null,"The best way to add the SDK to your project is via Gradle. See the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/android#install-sdk"},"SDK installation guide"),"."),(0,o.kt)("p",null,"When your app starts, in application ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreate()"),", initialize the SDK with your publishable API key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.radar.sdk.Radar\n\nclass MyApplication : Application() {\n\n    override fun onCreate() {\n        super.onCreate()\n\n        Radar.initialize(this, "prj_test_pk...")\n    }\n\n}\n')),(0,o.kt)("h3",{id:"step-3-check-to-see-if-a-user-is-mocking-or-proxying"},"Step 3: Check to see if a user is mocking or proxying"),(0,o.kt)("p",null,"If monitoring location in the foreground (i.e. using ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()"),"):"),(0,o.kt)(i.Z,{groupId:"ios",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"Radar.trackOnce(completionHandler: {(status,location,events,user) in\n    if let user = user {\n        if !user.mocked && !user.proxy {\n        } else {\n            // user is spoofing location or on a proxy. Message about block.\n        }\n    }   \n}\n"))),(0,o.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"Radar.trackOnce { status, location, events, user ->\n    if (user != null) {\n        if (!user.mocked && !user.proxy) {\n\n        } else {\n            // user is spoofing location or on a proxy. Message about block.\n        }\n    }\n}\n")))),(0,o.kt)("p",null,"If monitoring location in the background (i.e. using ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.startTracking()"),"): "),(0,o.kt)(i.Z,{groupId:"ios",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func didUpdateLocation(_ location: CLLocation, user: RadarUser) {\n    // check to ensure a user is neither proxying nor mocking\n    if !user.mocked && !user.proxy {\n        // let the user proceed with app action\n    } else {\n        // user is spoofing location or on a proxy. Message about block.\n    }\n}\n"))),(0,o.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun onLocationUpdated(context: Context, location: Location, user: RadarUser) {\n    // check to ensure a user is neither proxying nor mocking\n    if (!user.mocked && !user.proxy) {\n        // let the user proceed with app action\n    } else {\n        // user is spoofing location or on a proxy. Message about block.\n    }\n}\n")))),(0,o.kt)("h3",{id:"optional-step-4-use-radar-regions-to-perform-a-third-location-check"},"(Optional) Step 4: Use Radar Regions to perform a third location check"),(0,o.kt)("p",null," Radar's ",(0,o.kt)("a",{parentName:"p",href:"/regions"},"Regions")," functionality can be used to determine a user's regional context. Let's say your application requires a user to be in a specific city or region to unlock certain app functionality. An example solution would be to first check for proxying and mocking, and then as a third check, verify the user's regional location allows them to be eligible for your app's services:"),(0,o.kt)(i.Z,{groupId:"ios",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'func didUpdateLocation(_ location: CLLocation, user: RadarUser) {\n    // check to ensure a user is neither proxying nor mocking\n    if !user.mocked && !user.proxy {\n        // check to make sure the user is in the state of Maryland\n        if user.state?.code == "MD" {\n            // let the user proceed with app action\n        }\n    }\n}\n'))),(0,o.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'override fun onLocationUpdated(context: Context, location: Location, user: RadarUser) {\n    // check to ensure a user is neither proxying nor mocking\n    if (!user.mocked && !user.proxy) {\n        // check to make sure the user is in the state of Maryland\n        if (user.state?.code == "MD"){\n            // let the user proceed with app action\n        }\n    }\n}\n')))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions or feedback on this documentation? Let us know! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);