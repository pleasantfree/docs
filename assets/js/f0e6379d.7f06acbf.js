"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[470],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,p=d["".concat(l,".").concat(f)]||d[f]||m[f]||o;return n?r.createElement(p,a(a({ref:t},c),{},{components:n})):r.createElement(p,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},l="What\u2019s The Inode Limit",u={unversionedId:"fair-usage-limits/inode-limit",id:"fair-usage-limits/inode-limit",title:"What\u2019s The Inode Limit",description:"In the most basic sense, an inode is \u201ca data structure that stores information about a file or directory except its name and its actual data\u201d.",source:"@site/docs/fair-usage-limits/inode-limit.md",sourceDirName:"fair-usage-limits",slug:"/fair-usage-limits/inode-limit",permalink:"/fair-usage-limits/inode-limit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What's The Hit Limit",permalink:"/fair-usage-limits/hit-limit"},next:{title:"What's The MySQL Limit",permalink:"/fair-usage-limits/mysql-limit"}},c={},m=[{value:"Why do I have a limited number of inodes?",id:"why-do-i-have-a-limited-number-of-inodes",level:2},{value:"How can I get more inodes?",id:"how-can-i-get-more-inodes",level:2}],d={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whats-the-inode-limit"},"What\u2019s The Inode Limit"),(0,o.kt)("p",null,"In the most basic sense, an inode is \u201ca data structure that stores information about a file or directory except its name and its actual data\u201d."),(0,o.kt)("p",null,"This essentially means that an inode represents any one file or any one directory. For example, a file in a directory totals two inodes."),(0,o.kt)("h2",{id:"why-do-i-have-a-limited-number-of-inodes"},"Why do I have a limited number of inodes?"),(0,o.kt)("p",null,"We limit the number of inodes because we need our servers to stay fast, reliable, and free of spam for all of our customers. Currently, all accounts are limited to 30,019 inodes."),(0,o.kt)("h2",{id:"how-can-i-get-more-inodes"},"How can I get more inodes?"),(0,o.kt)("p",null,"If you require more than 30,019 inodes, please consider upgrading your account to ",(0,o.kt)("a",{parentName:"p",href:"https://pleasantfree.com/go/ifastnet"},"premium hosting"),", where you get many more ~ 200, 000 (unlimited)."))}f.isMDXComponent=!0}}]);