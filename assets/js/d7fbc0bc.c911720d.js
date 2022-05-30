"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[451],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),l=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=n,h=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?i.createElement(h,o(o({ref:t},c),{},{components:r})):i.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2934:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],s={},u="What's The Hit Limit",l={unversionedId:"fair-usage-limits/hit-limit",id:"fair-usage-limits/hit-limit",title:"What's The Hit Limit",description:"Hits is one of the limits imposed by PleasantFree to keep our servers abuse-free and to stop the over usage of server resources by a certain account that may affect other websites on the same server.",source:"@site/docs/fair-usage-limits/hit-limit.md",sourceDirName:"fair-usage-limits",slug:"/fair-usage-limits/hit-limit",permalink:"/fair-usage-limits/hit-limit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What\u2019s The CPU Limit",permalink:"/fair-usage-limits/cpu-limit"},next:{title:"What\u2019s The Inode Limit",permalink:"/fair-usage-limits/inode-limit"}},c={},p=[{value:"What Is A Hit?",id:"what-is-a-hit",level:2},{value:"What Are The Limitations?",id:"what-are-the-limitations",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whats-the-hit-limit"},"What's The Hit Limit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hits")," is one of the limits imposed by PleasantFree to keep our servers abuse-free and to stop the over usage of server resources by a certain account that may affect other websites on the same server."),(0,a.kt)("h2",{id:"what-is-a-hit"},"What Is A Hit?"),(0,a.kt)("p",null,"A hit is a simple file request to your website, it could be a ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".php")," page, or even a ",(0,a.kt)("inlineCode",{parentName:"p"},".css")," file or something like that. Do not consider a hit as a page view or a visitor. Both request different files and the number of hits differs every time (if dynamic)."),(0,a.kt)("p",null,"Say if a visitor open your website and your code load 5 ",(0,a.kt)("inlineCode",{parentName:"p"},".css"),", 3 ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," and 2 ",(0,a.kt)("inlineCode",{parentName:"p"},".png")," files. That will generate a total of 9 hits (sum of all file requests). This happens upon every refresh or single page view. If your code makes background requests (like in chat scripts), those too count as hits."),(0,a.kt)("h2",{id:"what-are-the-limitations"},"What Are The Limitations?"),(0,a.kt)("p",null,"We impose a limit of ",(0,a.kt)("inlineCode",{parentName:"p"},"50,000")," hits per day. This hits usage counter is reset every day at 00:00 ",(0,a.kt)("strong",{parentName:"p"},"UTC"),". The counter is not real-time and usually updates with new data in a few hours."),(0,a.kt)("p",null,"If you reach the limit or even exceed it, your account will be temporarily suspended for 24 hours. It will be automatically re-activated after 24 hours. So nothing much to worry about \ud83d\ude05"),(0,a.kt)("p",null,"If your website gets suspended on regular basis for getting huge traffic and generating a lot of hits, we may ask you to move/upgrade to ",(0,a.kt)("a",{parentName:"p",href:"https://pleasantfree.com/go/ifastnet"},"premium hosting")," or permanently suspend your account."))}m.isMDXComponent=!0}}]);