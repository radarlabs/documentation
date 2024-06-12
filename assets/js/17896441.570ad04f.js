"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{6742:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3366),r=n(7294),i=n(3727),l=n(2263),o=n(3919),s=n(412),c=(0,r.createContext)({collectLink:function(){}}),d=n(4996),u=n(8780);var m=function(e){var t,n,m=e.isNavLink,v=e.to,f=e.href,p=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,b=void 0===E||E,_=(0,a.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,l.Z)().siteConfig,N=k.trailingSlash,Z=k.baseUrl,U=(0,d.C)().withBaseUrl,y=(0,r.useContext)(c),w=v||f,L=(0,o.Z)(w),C=null==w?void 0:w.replace("pathname://",""),T=void 0!==C?(n=C,b&&function(e){return e.startsWith("/")}(n)?U(n):n):void 0;T&&L&&(T=(0,u.applyTrailingSlash)(T,{trailingSlash:N,baseUrl:Z}));var M,A=(0,r.useRef)(!1),O=m?i.OL:i.rU,B=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!B&&L&&null!=T&&window.docusaurus.prefetch(T),function(){B&&M&&M.disconnect()}}),[T,B,L]);var S=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,x=!T||!L||S;return T&&L&&!S&&!g&&y.collectLink(T),x?r.createElement("a",Object.assign({href:T},w&&!L&&{target:"_blank",rel:"noopener noreferrer"},_)):r.createElement(O,Object.assign({},_,{onMouseEnter:function(){A.current||null==T||(window.docusaurus.preload(T),A.current=!0)},innerRef:function(e){var t,n;B&&e&&L&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(M=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))}))).observe(t))},to:T||""},m&&{isActive:h,activeClassName:p}))}},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},6159:function(e,t,n){n.d(t,{N:function(){return u},Z:function(){return m}});var a=n(3366),r=n(7462),i=n(7294),l=n(6010),o=n(4973),s=n(941),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},m=function(e){return"h1"===e?u:(t=e,function(e){var n,r=e.id,u=(0,a.Z)(e,["id"]),m=(0,s.LU)().navbar.hideOnScroll;return r?i.createElement(t,u,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(n={},n[d]=m,n[c]=!m,n)),id:r}),u.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,u)});var t}},7211:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(6010),i=n(6742),l="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,n=e.permalink,c=e.name,d=e.count;return a.createElement(i.Z,{href:n,className:(0,r.Z)(l,(t={},t[o]=!d,t[s]=d,t))},c,d&&a.createElement("span",null,d))}},3783:function(e,t,n){var a=n(7294),r=n(412),i="desktop",l="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?i:l:o}t.Z=function(){var e=(0,a.useState)((function(){return s()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){function e(){n(s())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3760:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var a=n(7294),r=n(6010),i=n(3783),l=n(6742),o=n(4973);var s=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=n(2263),d=n(907),u=n(941);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,n=e.versionMetadata,i=(0,c.Z)().siteConfig.title,l=(0,d.gA)({failfast:!0}).pluginId,o=(0,u.J)(l).savePreferredVersionName,s=(0,d.Jo)(l),m=s.latestDocSuggestion,p=s.latestVersionSuggestion,h=null!=m?m:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:i,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:p.label,to:h.path,onClick:function(){return o(p.name)}})))}var h=function(e){var t=e.versionMetadata;return t.banner?a.createElement(p,{versionMetadata:t}):a.createElement(a.Fragment,null)};function g(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function b(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:u.kM.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var _=n(7462),k=n(3366),N="iconEdit_2_ui",Z=function(e){var t=e.className,n=(0,k.Z)(e,["className"]);return a.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(N,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(Z,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=n(7211),w="tags_2ga9",L="tag_11ep";function C(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(w,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:L},a.createElement(y.Z,{name:t,permalink:n}))}))))}var T="lastUpdated_13-_";function M(e){return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(C,e)))}function A(e){var t=e.editUrl,n=e.lastUpdatedAt,i=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(U,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",T)},(n||i)&&a.createElement(b,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:i})))}function O(e){var t=e.content.metadata,n=t.editUrl,i=t.lastUpdatedAt,l=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,d=!!(n||i||o);return c||d?a.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(M,{tags:s}),d&&a.createElement(A,{editUrl:n,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:l})):a.createElement(a.Fragment,null)}function B(e){var t=e.getBoundingClientRect();return t.top===t.bottom?B(e.parentNode):t}function S(e){var t,n=e.anchorTopOffset,a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((function(e){return B(e).top>=n}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(B(r))?r:null!=(t=a[a.indexOf(r)-1])?t:null:a[a.length-1]}function x(){var e=(0,a.useRef)(0),t=(0,u.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var D=function(e){var t=(0,a.useRef)(void 0),n=x();(0,a.useEffect)((function(){var a=e.linkClassName,r=e.linkActiveClassName;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=S({anchorTopOffset:n.current}),l=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===l)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])},I="tableOfContents_35-E",R="table-of-contents__link",P={linkClassName:R,linkActiveClassName:"table-of-contents__link--active"};function j(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:R,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(j,{isChild:!0,toc:e.children}))}))):null}var F=function(e){var t=e.toc;return D(P),a.createElement("div",{className:(0,r.Z)(I,"thin-scrollbar")},a.createElement(j,{toc:t}))},V="tocCollapsible_1PrD",W="tocCollapsibleButton_2O1e",z="tocCollapsibleContent_2Ydz",q="tocCollapsibleExpanded_3GYr";function H(e){var t,n=e.toc,i=e.className,l=(0,u.uR)({initialState:!0}),s=l.collapsed,c=l.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(V,(t={},t[q]=!s,t),i)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",W),onClick:c},a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:z,collapsed:s},a.createElement(j,{toc:n})))}var J=n(6159),X="docItemContainer_1EXp",Y="docItemCol_2rXS",G="tocMobile_Ftrd",K=n(9105),Q=n(4996),$={name:"Radar",path:"/"},ee={"/regions/countries":"noindex"},te=function(e){return void 0===e&&(e=""),(e[0]||"").toUpperCase()+e.slice(1)},ne=function(e){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:e.map((function(e,t){var n=(e.name||""||"").split(/[\s+]/).map(te).join(" ");return{"@type":"ListItem",position:t+1,name:n,item:{"@id":"https://radar.com"+e.path,name:n}}}))}},ae=function(e){var t,n=e.title,r=(e._description,e.keywords),i=e.image,l=e.slug,o=(0,u.LU)().image,s=(0,Q.Z)(i||o,{absolute:!0}),c="Documentation | Radar";n&&("Documentation"==n?t="Overview":(t=n,c="Documentation - "+n+" | Radar"));var d,m=ee[l];return a.createElement(K.Z,null,a.createElement("title",null,c),n&&a.createElement("meta",{property:"og:title",content:t}),n&&a.createElement("meta",{property:"twitter:title",content:t}),r&&a.createElement("meta",{name:"keywords",content:Array.isArray(r)?r.join(","):r}),m&&a.createElement("meta",{name:"robots",content:m}),s&&a.createElement("meta",{property:"og:image",content:s}),s&&a.createElement("meta",{name:"twitter:image",content:s}),s&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),(d=function(e,t){var n=[$,{name:"Documentation",path:(0,Q.Z)("/")}];return e&&t&&("places/categories"!==e&&"places/chains"!==e||n.push({name:"Places",path:(0,Q.Z)("places")}),n.push({name:t,path:(0,Q.Z)(e)})),ne(n)}(l,n),a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(d)}})))};function re(e){var t,n=e.content,l=e.versionMetadata,o=n.metadata,c=n.frontMatter,d=c.image,m=c.keywords,v=c.hide_title,f=c.hide_table_of_contents,p=o.description,g=o.title,E=o.slug,b=!v&&void 0===n.contentTitle,_=(0,i.Z)(),k=!f&&n.toc&&n.toc.length>0,N=k&&("desktop"===_||"ssr"===_);return a.createElement(a.Fragment,null,a.createElement(ae,{slug:E,title:c.title||g,description:p,keywords:m,image:d}),a.createElement("div",{className:"row fs-unmask"},a.createElement("div",{className:(0,r.Z)("col",(t={},t[Y]=!f,t))},a.createElement(h,{versionMetadata:l}),a.createElement("div",{className:X},a.createElement("article",null,l.badge&&a.createElement("span",{className:(0,r.Z)(u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",l.label),k&&a.createElement(H,{toc:n.toc,className:(0,r.Z)(u.kM.docs.docTocMobile,G)}),a.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},b&&a.createElement(J.N,null,g),a.createElement(n,null)),a.createElement(O,e)),a.createElement(s,{metadata:o}))),N&&a.createElement("div",{className:"col col--3"},a.createElement(F,{toc:n.toc,className:u.kM.docs.docTocDesktop}))))}}}]);