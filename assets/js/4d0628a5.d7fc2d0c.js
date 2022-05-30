"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[828],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="Max Limit For Files/Uploads",c={unversionedId:"files-and-ftp/file-max-limits",id:"files-and-ftp/file-max-limits",title:"Max Limit For Files/Uploads",description:"All PleasantFree servers have file upload limit of 10 MB. It\u2019s important to note that this is a upload size limit and not a file size limit.",source:"@site/docs/files-and-ftp/file-max-limits.md",sourceDirName:"files-and-ftp",slug:"/files-and-ftp/file-max-limits",permalink:"/files-and-ftp/file-max-limits",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Your Disk Quota Is Exceeded",permalink:"/files-and-ftp/disk-quota-exceeded"},next:{title:"Files Deleted After Uploading",permalink:"/files-and-ftp/files-deleted-automatically"}},f={},u=[{value:"Can the limit be increased?",id:"can-the-limit-be-increased",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"max-limit-for-filesuploads"},"Max Limit For Files/Uploads"),(0,a.kt)("p",null,"All PleasantFree servers have file upload limit of 10 MB. It\u2019s important to note that ",(0,a.kt)("strong",{parentName:"p"},"this is a upload size limit and not a file size limit"),"."),(0,a.kt)("p",null,"An upload limit can be set through PHP or ",(0,a.kt)("inlineCode",{parentName:"p"},".htaccess")," settings, but we enforce this limit at the file system level. No configuration can override it and applies to files uploaded through FTP or the file manager as well."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".html")," files are limited to their max-size of 1 MB. Same goes with other extensions like ",(0,a.kt)("inlineCode",{parentName:"p"},".php")," etc."),(0,a.kt)("h2",{id:"can-the-limit-be-increased"},"Can the limit be increased?"),(0,a.kt)("p",null,"No. The size limit is fixed and cannot be increased in any way. 10 MB is more than enough for regular website files (scripts, images, HTML files, etc.)."),(0,a.kt)("p",null,"If you need to upload a larger script, plugin or theme, you can work around it. If you want to upload large, downloadable files or video files, please use a specialized service for that (e.g. YouTube for video or Google Drive for downloadable files)."))}d.isMDXComponent=!0}}]);