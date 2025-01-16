"use strict";(self.webpackChunkrust_tutorial=self.webpackChunkrust_tutorial||[]).push([["48"],{5872:function(e,n,t){t.d(n,{Z:()=>f});var i=t("5893");t("7294");var s=t("7026"),l=t("6171"),a=t("5771"),r=t("3868"),o=t("3367"),c=t("7670"),d=t("3187");function u(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function h(){let e=(0,d.ZP)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(u,{className:"breadcrumbHomeIcon_YNFT"})})})}function m(e){let{children:n,href:t,isLast:s}=e,l="breadcrumbs__link";return s?(0,i.jsx)("span",{className:l,itemProp:"name",children:n}):t?(0,i.jsx)(o.Z,{className:l,href:t,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:n})}):(0,i.jsx)("span",{className:l,children:n})}function x(e){let{children:n,active:t,index:l,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,i.jsx)("meta",{itemProp:"position",content:String(l+1)})]})}function f(){let e=(0,a.s1)(),n=(0,r.Ns)();return e?(0,i.jsx)("nav",{className:(0,s.Z)(l.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,i.jsx)(h,{}),e.map((n,t)=>{let s=t===e.length-1,l="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,i.jsx)(x,{active:s,index:t,addMicrodata:!!l,children:(0,i.jsx)(m,{href:l,isLast:s,children:n.label})},t)})]})}):null}},624:function(e,n,t){t.r(n),t.d(n,{default:()=>eI});var i=t("5893"),s=t("7294"),l=t("9258"),a=t("1934");let r=s.createContext(null);function o(e){let{children:n,content:t}=e,l=(0,s.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}),[t]);return(0,i.jsx)(r.Provider,{value:l,children:n})}function c(){let e=(0,s.useContext)(r);if(null===e)throw new a.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:n,assets:t}=c();return(0,i.jsx)(l.d,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t("7026"),h=t("7550"),m=t("2368");function x(){let{metadata:e}=c();return(0,i.jsx)(m.Z,{previous:e.previous,next:e.next})}var f=t("9548"),j=t("1987"),p=t("6171"),v=t("7670"),b=t("3367");let g={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function N(e){let{permalink:n,label:t,count:s,description:l}=e;return(0,i.jsxs)(b.Z,{href:n,title:l,className:(0,u.Z)(g.tag,s?g.tagWithCount:g.tagRegular),children:[t,s&&(0,i.jsx)("span",{children:s})]})}function Z(e){let{tags:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.Z)("tags_jXut","padding--none","margin-left--sm"),children:n.map(e=>(0,i.jsx)("li",{className:"tag_QGVx",children:(0,i.jsx)(N,{...e})},e.permalink))})]})}function _(e){let{className:n,...t}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)("iconEdit_Z9Sw",n),"aria-hidden":"true",...t,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function C(e){let{editUrl:n}=e;return(0,i.jsxs)(b.Z,{to:n,className:p.k.common.editThisPage,children:[(0,i.jsx)(_,{}),(0,i.jsx)(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var k=t("7262");function T(e){let{lastUpdatedAt:n}=e,t=new Date(n),s=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:n}}=(0,k.Z)(),t=function(){let{i18n:{currentLocale:e,localeConfigs:n}}=(0,k.Z)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,i.jsx)(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:n}=e;return(0,i.jsx)(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:n})},children:" by {user}"})}function L(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,i.jsxs)("span",{className:p.k.common.lastUpdated,children:[(0,i.jsx)(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,i.jsx)(T,{lastUpdatedAt:n}):"",byUser:t?(0,i.jsx)(y,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}function w(e){let{className:n,editUrl:t,lastUpdatedAt:s,lastUpdatedBy:l}=e;return(0,i.jsxs)("div",{className:(0,u.Z)("row",n),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(C,{editUrl:t})}),(0,i.jsx)("div",{className:(0,u.Z)("col","lastUpdated_JAkA"),children:(s||l)&&(0,i.jsx)(L,{lastUpdatedAt:s,lastUpdatedBy:l})})]})}function B(){let{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:l}=e,a=l.length>0,r=!!(n||t||s);return a||r?(0,i.jsxs)("footer",{className:(0,u.Z)(p.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,i.jsx)("div",{className:(0,u.Z)("row margin-top--sm",p.k.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(Z,{tags:l})})}),r&&(0,i.jsx)(w,{className:(0,u.Z)("margin-top--sm",p.k.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var E=t("6850"),M=t("6009");function A(e){let n=e.getBoundingClientRect();return n.top===n.bottom?A(e.parentNode):n}let H=s.memo(function e(n){let{toc:t,className:s,linkClassName:l,isChild:a}=n;return t.length?(0,i.jsx)("ul",{className:a?void 0:s,children:t.map(n=>(0,i.jsxs)("li",{children:[(0,i.jsx)(b.Z,{to:`#${n.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,i.jsx)(e,{isChild:!0,toc:n.children,className:s,linkClassName:l})]},n.id))}):null});function I(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:o,...c}=e,d=(0,M.L)(),u=r??d.tableOfContents.minHeadingLevel,h=o??d.tableOfContents.maxHeadingLevel,m=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,s.useMemo)(()=>(function e(n){let{toc:t,minHeadingLevel:i,maxHeadingLevel:s}=n;return t.flatMap(n=>{let t=e({toc:n.children,minHeadingLevel:i,maxHeadingLevel:s});return n.level>=i&&n.level<=s?[{...n,children:t}]:t})})({toc:function(e){let n=e.map(e=>({...e,parentIndex:-1,children:[]})),t=Array(7).fill(-1);n.forEach((e,n)=>{let i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n});let i=[];return n.forEach(e=>{let{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)}),i}(n),minHeadingLevel:t,maxHeadingLevel:i}),[n,t,i])}({toc:n,minHeadingLevel:u,maxHeadingLevel:h});return!function(e){let n=(0,s.useRef)(void 0),t=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,M.L)();return(0,s.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:a}=e;function r(){let e=Array.from(document.getElementsByClassName(i)),r=function(e,n){let{anchorTopOffset:t}=n,i=e.find(e=>A(e).top>=t);if(i){var s;return(s=A(i)).top>0&&s.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e,i=[];for(let e=n;e<=t;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:t.current}),o=e.find(e=>r&&r.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===o?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)})}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}},[e,t])}((0,s.useMemo)(()=>{if(l&&a)return{linkClassName:l,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:h}},[l,a,u,h])),(0,i.jsx)(H,{toc:m,className:t,linkClassName:l,...c})}let z={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function U(e){let{collapsed:n,...t}=e;return(0,i.jsx)("button",{type:"button",...t,className:(0,u.Z)("clean-btn",z.tocCollapsibleButton,!n&&z.tocCollapsibleButtonExpanded,t.className),children:(0,i.jsx)(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let V={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function R(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:l}=e,{collapsed:a,toggleCollapsed:r}=(0,E.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(V.tocCollapsible,!a&&V.tocCollapsibleExpanded,t),children:[(0,i.jsx)(U,{collapsed:a,onClick:r}),(0,i.jsx)(E.z,{lazy:!0,className:V.tocCollapsibleContent,collapsed:a,children:(0,i.jsx)(I,{toc:n,minHeadingLevel:s,maxHeadingLevel:l})})]})}function S(){let{toc:e,frontMatter:n}=c();return(0,i.jsx)(R,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(p.k.docs.docTocMobile,"tocMobile_ITEo")})}function D(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,u.Z)("tableOfContents_bqdL","thin-scrollbar",n),children:(0,i.jsx)(I,{...t,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function F(){let{toc:e,frontMatter:n}=c();return(0,i.jsx)(D,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var P=t("6055"),O=t("65"),q=t("1199"),G=t("1705");function J(e){return(0,i.jsx)("code",{...e})}var W=t("4961"),$=t("6735");let Y={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Q(e){return!!e&&("SUMMARY"===e.tagName||Q(e.parentElement))}function X(e){let{summary:n,children:t,...l}=e;(0,W.Z)().collectAnchor(l.id);let a=(0,$.Z)(),r=(0,s.useRef)(null),{collapsed:o,setCollapsed:c}=(0,E.u)({initialState:!l.open}),[d,h]=(0,s.useState)(l.open),m=s.isValidElement(n)?n:(0,i.jsx)("summary",{children:n??"Details"});return(0,i.jsxs)("details",{...l,ref:r,open:d,"data-collapsed":o,className:(0,u.Z)(Y.details,a&&Y.isBrowser,l.className),onMouseDown:e=>{Q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let n=e.target;Q(n)&&function e(n,t){return!!n&&(n===t||e(n.parentElement,t))}(n,r.current)&&(e.preventDefault(),o?(c(!1),h(!0)):c(!0))},children:[m,(0,i.jsx)(E.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),h(!e)},children:(0,i.jsx)("div",{className:Y.collapsibleContent,children:t})})]})}function K(e){let{...n}=e;return(0,i.jsx)(X,{...n,className:(0,u.Z)("alert alert--info","details_b_Ee",n.className)})}function ee(e){let n=s.Children.toArray(e.children),t=n.find(e=>s.isValidElement(e)&&"summary"===e.type),l=(0,i.jsx)(i.Fragment,{children:n.filter(e=>e!==t)});return(0,i.jsx)(K,{...e,summary:t,children:l})}function en(e){return(0,i.jsx)(P.Z,{...e})}let et={containsTaskList:"containsTaskList_mC6p"},ei={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function es(e){let{type:n,className:t,children:s}=e;return(0,i.jsx)("div",{className:(0,u.Z)(p.k.common.admonition,p.k.common.admonitionType(n),ei.admonition,t),children:s})}function el(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:ei.admonitionHeading,children:[(0,i.jsx)("span",{className:ei.admonitionIcon,children:n}),t]})}function ea(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:ei.admonitionContent,children:n}):null}function er(e){let{type:n,icon:t,title:s,children:l,className:a}=e;return(0,i.jsxs)(es,{type:n,className:a,children:[s||t?(0,i.jsx)(el,{title:s,icon:t}):null,(0,i.jsx)(ea,{children:l})]})}let eo={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function ec(e){return(0,i.jsx)(er,{...eo,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}let ed={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function eu(e){return(0,i.jsx)(er,{...ed,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}let eh={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function em(e){return(0,i.jsx)(er,{...eh,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function ex(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let ef={icon:(0,i.jsx)(ex,{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},ej={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},ep={icon:(0,i.jsx)(ex,{}),title:(0,i.jsx)(v.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},ev={note:ec,tip:eu,info:em,warning:function(e){return(0,i.jsx)(er,{...ef,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(er,{...ej,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,i.jsx)(ec,{title:"secondary",...e}),important:e=>(0,i.jsx)(em,{title:"important",...e}),success:e=>(0,i.jsx)(eu,{title:"success",...e}),caution:function(e){return(0,i.jsx)(er,{...ep,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}};function eb(e){let n=function(e){let{mdxAdmonitionTitle:n,rest:t}=function(e){let n=s.Children.toArray(e),t=n.find(e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),l=n.filter(e=>e!==t);return{mdxAdmonitionTitle:t?.props.children,rest:l.length>0?(0,i.jsx)(i.Fragment,{children:l}):null}}(e.children),l=e.title??n;return{...e,...l&&{title:l},children:t}}(e),t=function(e){let n=ev[e];return n||(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),ev.info)}(n.type);return(0,i.jsx)(t,{...n})}let eg={Head:q.Z,details:ee,Details:ee,code:function(e){return void 0!==e.children&&s.Children.toArray(e.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,i.jsx)(J,{...e}):(0,i.jsx)(G.Z,{...e})},a:function(e){return(0,i.jsx)(b.Z,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&et.containsTaskList)}(e.className)})},li:function(e){return(0,W.Z)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){var n;return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,u.Z)(n,"img_ev3q"))})},h1:e=>(0,i.jsx)(en,{as:"h1",...e}),h2:e=>(0,i.jsx)(en,{as:"h2",...e}),h3:e=>(0,i.jsx)(en,{as:"h3",...e}),h4:e=>(0,i.jsx)(en,{as:"h4",...e}),h5:e=>(0,i.jsx)(en,{as:"h5",...e}),h6:e=>(0,i.jsx)(en,{as:"h6",...e}),admonition:eb,mermaid:()=>null};function eN(e){let{children:n}=e;return(0,i.jsx)(O.Z,{components:eg,children:n})}function eZ(e){let{children:n}=e,t=function(){let{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(p.k.docs.docMarkdown,"markdown"),children:[t&&(0,i.jsx)("header",{children:(0,i.jsx)(P.Z,{as:"h1",children:t})}),(0,i.jsx)(eN,{children:n})]})}var e_=t("5872");function eC(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ek(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function eT(){return(0,i.jsx)(q.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function ey(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function eL(){return(0,i.jsx)(v.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function ew(e){let{className:n}=e;return(0,i.jsx)(eb,{type:"caution",title:(0,i.jsx)(ey,{}),className:(0,u.Z)(n,p.k.common.draftBanner),children:(0,i.jsx)(eL,{})})}function eB(e){let{className:n}=e;return(0,i.jsx)(eb,{type:"caution",title:(0,i.jsx)(eC,{}),className:(0,u.Z)(n,p.k.common.unlistedBanner),children:(0,i.jsx)(ek,{})})}function eE(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eT,{}),(0,i.jsx)(eB,{...e})]})}function eM(e){let{metadata:n}=e,{unlisted:t,frontMatter:s}=n;return(0,i.jsxs)(i.Fragment,{children:[(t||s.unlisted)&&(0,i.jsx)(eE,{}),s.draft&&(0,i.jsx)(ew,{})]})}let eA={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function eH(e){let{children:n}=e,t=function(){let{frontMatter:e,toc:n}=c(),t=(0,h.i)(),s=e.hide_table_of_contents,l=!s&&n.length>0;return{hidden:s,mobile:l?(0,i.jsx)(S,{}):void 0,desktop:l&&("desktop"===t||"ssr"===t)?(0,i.jsx)(F,{}):void 0}}(),{metadata:s}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!t.hidden&&eA.docItemCol),children:[(0,i.jsx)(eM,{metadata:s}),(0,i.jsx)(f.Z,{}),(0,i.jsxs)("div",{className:eA.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(e_.Z,{}),(0,i.jsx)(j.Z,{}),t.mobile,(0,i.jsx)(eZ,{children:n}),(0,i.jsx)(B,{})]}),(0,i.jsx)(x,{})]})]}),t.desktop&&(0,i.jsx)("div",{className:"col col--3",children:t.desktop})]})}function eI(e){let n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,i.jsx)(o,{content:e.content,children:(0,i.jsxs)(l.FG,{className:n,children:[(0,i.jsx)(d,{}),(0,i.jsx)(eH,{children:(0,i.jsx)(t,{})})]})})}},2368:function(e,n,t){t.d(n,{Z:()=>o});var i=t("5893");t("7294");var s=t("7670"),l=t("7026"),a=t("3367");function r(e){let{permalink:n,title:t,subLabel:s,isNext:r}=e;return(0,i.jsxs)(a.Z,{className:(0,l.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}function o(e){let{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(r,{...n,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(r,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},1987:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(5893);t(7294);var s=t(7026),l=t(7670),a=t(6171),r=t(9873);function o(e){let{className:n}=e,t=(0,r.E)();return t.badge?(0,i.jsx)("span",{className:(0,s.Z)(n,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},9548:function(e,n,t){t.d(n,{Z:function(){return j}});var i=t(5893);t(7294);var s=t(7026),l=t(7262),a=t(3367),r=t(7670),o=t(8854),c=t(6171),d=t(7137),u=t(9873);let h={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,i.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,i.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){let n=h[e.versionMetadata.banner];return(0,i.jsx)(n,{...e})}function x(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,i.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(a.Z,{to:t,onClick:s,children:(0,i.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:n,versionMetadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{pluginId:r}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(r),{latestDocSuggestion:h,latestVersionSuggestion:f}=(0,o.Jo)(r),j=h??f.docs.find(e=>e.id===f.mainDocId);return(0,i.jsxs)("div",{className:(0,s.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(m,{siteTitle:a,versionMetadata:t})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(x,{versionLabel:f.label,to:j.path,onClick:()=>u(f.name)})})]})}function j(e){let{className:n}=e,t=(0,u.E)();return t.banner?(0,i.jsx)(f,{className:n,versionMetadata:t}):null}}}]);