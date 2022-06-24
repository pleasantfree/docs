"use strict";(self.webpackChunkhtdocs=self.webpackChunkhtdocs||[]).push([[325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,h=m["".concat(u,".").concat(p)]||m[p]||l[p]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={description:"You may have bought your own domain to use for your Hosting Account. This article describes how to add your own custom domain and leverage the free hosting benefits!"},i="Use Your Own Domain",s={unversionedId:"domains-and-dns/use-custom-domain",id:"domains-and-dns/use-custom-domain",title:"Use Your Own Domain",description:"You may have bought your own domain to use for your Hosting Account. This article describes how to add your own custom domain and leverage the free hosting benefits!",source:"@site/docs/domains-and-dns/use-custom-domain.md",sourceDirName:"domains-and-dns",slug:"/domains-and-dns/use-custom-domain",permalink:"/domains-and-dns/use-custom-domain",draft:!1,tags:[],version:"current",frontMatter:{description:"You may have bought your own domain to use for your Hosting Account. This article describes how to add your own custom domain and leverage the free hosting benefits!"},sidebar:"tutorialSidebar",previous:{title:"Removing An Existing Domain",permalink:"/domains-and-dns/remove-domain"},next:{title:"What's A BotNet Attack",permalink:"/fair-usage-limits/botnet-attack"}},u={},d=[{value:"1. Setting the Nameservers",id:"1-setting-the-nameservers",level:2},{value:"2. Add the domain to your account",id:"2-add-the-domain-to-your-account",level:2},{value:"3. Uploading files to your new custom domain",id:"3-uploading-files-to-your-new-custom-domain",level:2}],c={toc:d};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-your-own-domain"},"Use Your Own Domain"),(0,r.kt)("p",null,"You may have bought your own domain to use for your Hosting Account. This article describes how to add your own custom domain and leverage the free hosting benefits!"),(0,r.kt)("h2",{id:"1-setting-the-nameservers"},"1. Setting the Nameservers"),(0,r.kt)("p",null,"In order to add your own domain to the account, you must first set the nameservers. This must be done through your Domain Registrars, such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.namesilo.com/register.php?rid=06f3020up"},"NameSilo")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.hostinger.com/domain-checker"},"Hostinger"),".The nameservers are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ns1.crwth.net"),(0,r.kt)("li",{parentName:"ul"},"ns2.crwth.net")),(0,r.kt)("p",null,"Please note that any DNS changes, such as changing the nameservers, can take up to 72 hours (3 days) to fully propagate around the world. If you wish to check the propagation status of your site, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://dnschecker.org/"},"dnschecker.org"),"."),(0,r.kt)("h2",{id:"2-add-the-domain-to-your-account"},"2. Add the domain to your account"),(0,r.kt)("p",null,"Now that you have set the nameservers, you can add the domain to your account. This must be done from the Control Panel."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the Client Area and click the ",(0,r.kt)("kbd",null,"Control Panel")," button."),(0,r.kt)("li",{parentName:"ol"},"Locate the Domains section. Click on ",(0,r.kt)("kbd",null,"Addon Domains")),(0,r.kt)("li",{parentName:"ol"},"Type your domain in the box and click ",(0,r.kt)("kbd",null,"Add Domain"))),(0,r.kt)("h2",{id:"3-uploading-files-to-your-new-custom-domain"},"3. Uploading files to your new custom domain"),(0,r.kt)("p",null,"Uploading files to an Addon Domain is quite easy. You must log in to FTP and then navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"/yourdomain.com/htdocs/")," and upload your files!"))}l.isMDXComponent=!0}}]);