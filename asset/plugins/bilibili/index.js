(()=>{"use strict";var e,t,r={196:e=>{e.exports=window.React},99:e=>{e.exports=window.TopWrite}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"-"+{6:"f4a44b",551:"ad834c"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="TopWritePlugins.bilibili:",o.l=(r,i,n,a)=>{if(e[r])e[r].push(i);else{var l,u;if(void 0!==n)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){l=d;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+n),l.src=r),e[r]=[i];var p=(t,i)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(i))),t)return t(i)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((r,o)=>i=e[t]=[r,o]));r.push(i[2]=n);var a=o.p+o.u(t),l=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,i[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,n,[a,l,u]=r,s=0;if(a.some((t=>0!==e[t]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(u)u(o)}for(t&&t(r);s<a.length;s++)n=a[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkTopWritePlugins_bilibili=self.webpackChunkTopWritePlugins_bilibili||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n={};(()=>{o.d(n,{default:()=>r});var e=o(99),t=o(196);const r=function(r){let{components:i,localize:o,locales:n,...a}=r,l={};if(i)for(const[e,r]of Object.entries(i))r&&(l[e]=r instanceof Array?[(0,t.lazy)(r[0]),r[1]]:(0,t.lazy)(r));return new e.Plugin({name:"bilibili",meta:void 0,components:l,localize:o,config:undefined,...a})}({components:{"block:bilibili":()=>o.e(551).then(o.bind(o,551)),"editor:tool":()=>o.e(6).then(o.bind(o,6))}})})(),(window.TopWritePlugins=window.TopWritePlugins||{}).bilibili=n.default})();
//# sourceMappingURL=index.js.map