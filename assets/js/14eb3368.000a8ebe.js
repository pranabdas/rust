"use strict";(self.webpackChunkrust_tutorial=self.webpackChunkrust_tutorial||[]).push([["983"],{2520:function(e,t,n){n.d(t,{Z:()=>f});var r=n("5893");n("7294");var s=n("7026"),i=n("4681"),a=n("3413"),l=n("9246"),o=n("3012"),c=n("6025"),d=n("4757");function u(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let m="breadcrumbHomeIcon_YNFT";function h(){let e=(0,d.ZP)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(u,{className:m})})})}let p="breadcrumbsContainer_Z_bl";function b(e){let{children:t,href:n,isLast:s}=e,i="breadcrumbs__link";return s?(0,r.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,r.jsx)(o.Z,{className:i,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:i,children:t})}function x(e){let{children:t,active:n,index:i,addMicrodata:a}=e;return(0,r.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function f(){let e=(0,a.s1)(),t=(0,l.Ns)();return e?(0,r.jsx)("nav",{className:(0,s.Z)(i.k.docs.docBreadcrumbs,p),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(h,{}),e.map((t,n)=>{let s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(x,{active:s,index:n,addMicrodata:!!i,children:(0,r.jsx)(b,{href:i,isLast:s,children:t.label})},n)})]})}):null}},9140:function(e,t,n){n.r(t),n.d(t,{default:()=>C});var r=n("5893");n("7294");var s=n("4713"),i=n("3413"),a=n("4757"),l=n("7026"),o=n("3012"),c=n("3115"),d=n("3150"),u=n("6025"),m=n("4403");let h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return(0,r.jsx)(o.Z,{href:t,className:(0,l.Z)("card padding--lg",h.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:s,description:i}=e;return(0,r.jsxs)(p,{href:t,children:[(0,r.jsxs)(m.Z,{as:"h2",className:(0,l.Z)("text--truncate",h.cardTitle),title:s,children:[n," ",s]}),i&&(0,r.jsx)("p",{className:(0,l.Z)("text--truncate",h.cardDescription),title:i,children:i})]})}function x(e){let{item:t}=e,n=(0,i.LM)(t),s=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,u.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(b,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e,n=(0,d.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(f,{item:t});case"category":return(0,r.jsx)(x,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,{...e});let s=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,l.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(v,{item:e})},t))})}var Z=n("3944"),N=n("9580"),_=n("6035"),k=n("2520");let L="generatedIndexPage_vN6x",T="list_eTzJ",w="title_kItE";function y(e){let{categoryGeneratedIndex:t}=e;return(0,r.jsx)(s.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.ZP)(t.image)})}function I(e){let{categoryGeneratedIndex:t}=e,n=(0,i.jA)();return(0,r.jsxs)("div",{className:L,children:[(0,r.jsx)(N.Z,{}),(0,r.jsx)(k.Z,{}),(0,r.jsx)(_.Z,{}),(0,r.jsxs)("header",{children:[(0,r.jsx)(m.Z,{as:"h1",className:w,children:t.title}),t.description&&(0,r.jsx)("p",{children:t.description})]}),(0,r.jsx)("article",{className:"margin-top--lg",children:(0,r.jsx)(j,{items:n.items,className:T})}),(0,r.jsx)("footer",{className:"margin-top--lg",children:(0,r.jsx)(Z.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function C(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{...e}),(0,r.jsx)(I,{...e})]})}},3944:function(e,t,n){n.d(t,{Z:()=>o});var r=n("5893");n("7294");var s=n("6025"),i=n("7026"),a=n("3012");function l(e){let{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,r.jsxs)(a.Z,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}function o(e){let{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(l,{...t,subLabel:(0,r.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(l,{...n,subLabel:(0,r.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},6035:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5893);n(7294);var s=n(7026),i=n(6025),a=n(4681),l=n(8529);function o(e){let{className:t}=e,n=(0,l.E)();return n.badge?(0,r.jsx)("span",{className:(0,s.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},9580:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(5893);n(7294);var s=n(7026),i=n(2933),a=n(3012),l=n(6025),o=n(8057),c=n(4681),d=n(3896),u=n(8529);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,r.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,r.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(a.Z,{to:n,onClick:s,children:(0,r.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let t,{className:n,versionMetadata:a}=e,{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:u}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(u),{latestDocSuggestion:b,latestVersionSuggestion:x}=(0,o.Jo)(u);let f=b??(t=x).docs.find(e=>e.id===t.mainDocId);return(0,r.jsxs)("div",{className:(0,s.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(h,{siteTitle:l,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(p,{versionLabel:x.label,to:f.path,onClick:()=>m(x.name)})})]})}function x(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,r.jsx)(b,{className:t,versionMetadata:n}):null}},3115:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(7294),s=n(2933);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let s=n.select(t);return r[Math.min(n.pluralForms.indexOf(s),r.length-1)]})(n,t,e)}}}}]);