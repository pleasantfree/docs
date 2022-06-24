"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={description:"When you visit a website hosted by us, you may see a parameter appended to the URL."},i="?i=1 Parameter In My URL",s={unversionedId:"websites-and-php/query-parameter",id:"websites-and-php/query-parameter",title:"?i=1 Parameter In My URL",description:"When you visit a website hosted by us, you may see a parameter appended to the URL.",source:"@site/docs/websites-and-php/query-parameter.md",sourceDirName:"websites-and-php",slug:"/websites-and-php/query-parameter",permalink:"/websites-and-php/query-parameter",draft:!1,tags:[],version:"current",frontMatter:{description:"When you visit a website hosted by us, you may see a parameter appended to the URL."},sidebar:"tutorialSidebar",previous:{title:"Why Is My Memory Exhausted",permalink:"/websites-and-php/memory-exhausted"},next:{title:"Security Enforcement System",permalink:"/websites-and-php/security-system"}},p={},c=[{value:"What does this parameter do?",id:"what-does-this-parameter-do",level:2},{value:"Can I remove this parameter?",id:"can-i-remove-this-parameter",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"i1-parameter-in-my-url"},"?i=1 Parameter In My URL"),(0,n.kt)("p",null,"When you visit a website hosted by us, you may see a parameter appended to the URL. It can be ",(0,n.kt)("inlineCode",{parentName:"p"},"?i=1")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"?i=2")," or nonexistent but still maybe present in other forms."),(0,n.kt)("h2",{id:"what-does-this-parameter-do"},"What does this parameter do?"),(0,n.kt)("p",null,"This parameter helps ensure that your website is only accessible by ",(0,n.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/"},"Web Browsers"),"."),(0,n.kt)("p",null,"When you access your website, you may notice that the ",(0,n.kt)("inlineCode",{parentName:"p"},"?i=1")," parameter is appended. This means it is the first attempt to verify your browser."),(0,n.kt)("p",null,"This is achieved by setting a cookie (called ",(0,n.kt)("inlineCode",{parentName:"p"},"_test"),") to observe if the JavaScript challenge is completed and passed. If the parameter shows ",(0,n.kt)("inlineCode",{parentName:"p"},"?i=2"),", this means that the JavaScript security system cannot validate the cookie."),(0,n.kt)("p",null,"This can be because the cookie has not been found or it did not match the value provided by the JavaScript system."),(0,n.kt)("p",null,"If the parameter reaches 3+ and the browser has not been validated, you will be redirected to a Google Support article with instructions regarding enabling cookies in your browser. This makes sure the browser does not get stuck in a redirect loop."),(0,n.kt)("h2",{id:"can-i-remove-this-parameter"},"Can I remove this parameter?"),(0,n.kt)("p",null,"Because we (PleasantFree) provide our service free of charge, we must ensure that our service isn\u2019t abused. Our service is for Website hosting only, therefore we do not permit programmatic access."),(0,n.kt)("p",null,"This security system is mandatory and cannot be turned off, blocked, or disabled, even with the ",(0,n.kt)("inlineCode",{parentName:"p"},".htaccess")," code."),(0,n.kt)("p",null,"If you need this system to be removed, please upgrade to ",(0,n.kt)("a",{parentName:"p",href:"https://pleasantfree.com/go/ifastnet"},"premium hosting")," where it is not present."))}u.isMDXComponent=!0}}]);