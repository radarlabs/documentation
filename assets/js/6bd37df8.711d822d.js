"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8752],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",s="alertSuccess_7EZp",c=function(e){var t=e.children,n=e.alertType;return"warning"===n?r.createElement("div",{className:"alert "+a+" "+o,role:"alert"},t):"info"===n?r.createElement("div",{className:"alert "+a+" "+i,role:"alert"},t):"success"===n?r.createElement("div",{className:"alert "+a+" "+s,role:"alert"},t):null}},8736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(970),s={title:"AWS S3"},c=void 0,l={unversionedId:"integrations/aws-s3",id:"integrations/aws-s3",isDocsHomePage:!1,title:"AWS S3",description:"The AWS S3 integration is currently in beta and available on the { }",source:"@site/docs/integrations/aws-s3.mdx",sourceDirName:"integrations",slug:"/integrations/aws-s3",permalink:"/documentation/integrations/aws-s3",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/integrations/aws-s3.mdx",tags:[],version:"current",frontMatter:{title:"AWS S3"},sidebar:"defaultSidebar",previous:{title:"AWS Pinpoint",permalink:"/documentation/integrations/aws-pinpoint"},next:{title:"Attentive",permalink:"/documentation/integrations/attentive"}},u=[{value:"Configuration",id:"configuration",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"The AWS S3 integration is currently in ",(0,o.kt)("b",null,"beta")," and available on the "," ",(0,o.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,o.kt)("p",null,"Radar can stream both events and locations to ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3"),"."),(0,o.kt)("p",null,"Use the AWS S3 integration to make Radar data available in a simple object storage format within your own systems, making your locations and events data more easily accessible by your engineers and data scientists."),(0,o.kt)("p",null,"By having all of your event and location data in S3, you can integrate your location data with other analysis tools like Snowflake or Tableau. This can enable you to do custom dashboarding with visualizations of data like foot traffic, trip duration, or dwell time in a location."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"While in beta, contact your customer success manager to enable this feature."),(0,o.kt)("p",null,"The AWS S3 integration uses an ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/kinesis/data-firehose/"},"AWS Kinesis Data Firehose")," to stream new Radar locations and events. Additionally, ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/kms/"},"AWS KMS")," can be used ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html"},"to encrypt Kinesis data streams server-side"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS S3 configuration diagram",src:n(9783).Z})))}d.isMDXComponent=!0},9783:function(e,t,n){t.Z=n.p+"assets/images/aws_s3_diagram-986ab7cca2152056e92bfb5c40905bbb.png"}}]);