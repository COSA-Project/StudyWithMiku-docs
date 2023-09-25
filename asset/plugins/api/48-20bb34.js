"use strict";(self.webpackChunkTopWritePlugins_api=self.webpackChunkTopWritePlugins_api||[]).push([[48],{48:(e,r,n)=>{function t(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}n.r(r),n.d(r,{default:()=>ge});var o,s,a,i=n(159),c=n(99),l=n(196);function d(){return d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}var p=function(e){return l.createElement("svg",d({className:"compass_svg__icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200},e),o||(o=l.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"})),s||(s=l.createElement("path",{d:"M710.4 295.9c-8-3.1-16.7-2.9-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271c3.6-8.2 3.6-17.5 0-25.7-3.5-7.9-9.8-13.9-17.7-17zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4z"})),a||(a=l.createElement("path",{d:"M464.4 422 422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"})))};function u(){const{config:e}=(0,c.useBook)();return function(e){const r=n(181);return e.getPluginConfig("api",r)}(e)}var f=n(891);let h=0;const g=document.getElementById("kancloud-proxy");const m=(0,l.createContext)(void 0);let x={};if(window.sessionStorage)try{const e=window.sessionStorage.getItem("api-plugin-securities");e&&(x=JSON.parse(e))}catch{}function y(e){let{value:r,group:n,children:t}=e;const o=u().getValue(n)||{},[s,a]=(0,l.useState)(!1),[d,p]=(0,l.useState)(),y=(0,l.useMemo)((()=>{const e=function(e){let r={},n=e.split("\n<<<\n"),t=n.shift().split("\n"),o=t.shift();o.replace(/^(!)?(get|post|delete|put|patch):(.*)$/i,(function(e,n,t,o){return r.insecure=!!n,r.method=t.toLowerCase(),r.url=o,e})),r.method||(r.method="get",r.url=o);let s=[];for(let e of t){const r=e.match(/^(\*)?(?:([a-z_-]+)?:)?(\w[0-9a-z\w_-]*)(?:=([^#]+))?#(.*)$/);if(r){let[,e,n,t,o,a]=r;"bool"==n&&(n="boolean"),s.push({required:!!e,type:n||"string",name:t,default:o||"",desc:a||""})}}r.params=s;let a=[];for(let e of n){const[r,...n]=e.split("\n");a.push({title:r,code:n.join("\n")})}return r.results=a,r}(r);return e.group=n,e.host=o.url||"",e.params=(o.params||[]).concat(e.params||[]),e.explore=void 0===o.explore||o.explore,e.contentType=o.contentType||"application/x-www-form-urlencoded",e.headers=o.headers||{},o.security&&!1!==e.security&&(e.security=o.security),e}),[r,n,o]),b=function(){const e=(0,l.useRef)(),r=(0,l.useRef)();return(0,l.useEffect)((()=>{if(g){const n=++h,t=function(){if(parseInt(g.getAttribute("proxy-id"))===n){const e=JSON.parse(g.getAttribute("data"));g.removeAttribute("data"),g.removeAttribute("proxy-id"),r.current&&r.current.resolve(e)}};return g.addEventListener("fetchEnd",t),e.current=n,()=>{g.removeEventListener("fetchEnd",t)}}}),[]),async n=>{if(g){g.setAttribute("proxy-id",String(e.current)),g.setAttribute("data",JSON.stringify(n));const t=new CustomEvent("fetchStart",{bubbles:!0,cancelable:!0});return g.dispatchEvent(t),new Promise(((e,n)=>{r.current={resolve:e,reject:n}}))}const{url:t,method:o,params:s,headers:a,contentType:l}=n,d={accept:"*/*",...a,"content-type":l};try{let e;switch(l){case"application/x-www-form-urlencoded":e=new URLSearchParams(s);break;case"multipart/form-data":e=new FormData;for(let r in s)e.append(r,s[r]);break;default:e=s}const{status:r,statusText:n,headers:a,request:{responseText:i}}=await(0,c.request)({url:t,method:o,data:e,headers:d});return{method:o,params:s,url:t,status:r,statusText:n,ok:"OK"===n,body:i,requestHeaders:d,responseHeaders:a}}catch(e){return{method:o,params:s,url:t,status:500,statusText:"Server Error",ok:!1,body:(0,i.jsxs)("span",{children:[e.message,(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"请求失败，具体错误信息请查看控制台",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"如果错误信息中包含有类似以下信息的",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"No 'Access-Control-Allow-Origin' header is present on the requested resource.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This request has been blocked; the content must be served over HTTPS.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"则该api不支持跨域或者为非HTTPS请求，请安装我们的chrome浏览器扩展代理请求，",(0,i.jsx)("a",{href:"https://chrome.google.com/webstore/detail/看云api插件代理/ocdkhocoglmchdnemmgnpkdnkdbpbkin",target:"_blank",children:"立即安装"}),"，安装完成后请刷新当前页后调试"]}),requestHeaders:d}}}}();return(0,i.jsx)(m.Provider,{value:{info:y,fetching:s,result:d,clearResult:()=>{p(void 0)}},children:(0,i.jsx)("form",{onSubmit:async e=>{if(e.preventDefault(),!s)try{a(!0);const r=new FormData(e.currentTarget);let n={};const t=e=>{let r=y.params.find((r=>r.name===e));if(r)return r.default};for(const[e,o]of r.entries())if(o&&"string"==typeof o)n[e]=o;else{let r=t(e);r&&(n[e]=r)}let o=y.host+y.url.replace(/([\/=]):([^/]+)/gi,(function(e,r,t){return void 0!==n[t]&&(e=r+n[t],delete n[t]),e}));const s=y.method,i={...y.headers};if(y.security){let e=y.security,r=x[y.group]||e.default;switch(e.type){case"apiKey":"header"===e.in?i[e.name]=r:o=f.stringifyUrl({url:o,query:{[e.name]:r}});break;case"oauth2":i.Authorization="Bearer ".concat(r)}}"get"===s&&(o=f.stringifyUrl({url:o,query:n}),n={});const c=await b({method:s,url:o,headers:i,params:n,contentType:y.contentType});let l;try{if(c.responseHeaders["content-type"]&&c.responseHeaders["content-type"].match(/^application\/json/)){let e=c.body.match(/^\w+?\((.*)\);$/);l=e?JSON.parse(e[1]):JSON.parse(c.body)}}catch(e){}l&&(c.body=JSON.stringify(l,null,4)),c.params=JSON.stringify(c.params,null,4),c.requestHeaders=JSON.stringify(c.requestHeaders,null,4),c.responseHeaders=JSON.stringify(c.responseHeaders,null,4),p(c)}finally{a(!1)}},children:t})})}function b(){const e=(0,l.useContext)(m);if(!e)throw new Error;return e}var j,v,w,k,O;function S(){const{info:e,fetching:r}=b();return(0,i.jsxs)(q,{children:[(0,i.jsx)(N,{type:e.method,children:e.method}),(0,i.jsx)(F,{children:e.url}),e.explore&&(0,i.jsx)(E,{children:(0,i.jsxs)("button",{disabled:r,children:[(0,i.jsx)(p,{}),"调试"]})})]})}const E=c.styled.span(j||(j=t(["\n  display: flex;\n  align-items: center;\n\n  button {\n    background-color: var(--ttw-primary-color);\n    color: #fff;\n    outline: none;\n    border: none;\n    padding: .5em 1em;\n    border-radius: 0.25em;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    line-height: 1;\n    font-size: 14px;\n\n    svg {\n      fill: currentColor;\n      width: 14px;\n      height: 14px;\n    }\n\n    &:hover {\n      opacity: 0.9;\n    }\n\n    &[disabled] {\n      opacity: 0.8;\n    }\n  }\n"]))),F=c.styled.span(v||(v=t(["\n  font-weight: 500;\n  font-size: 1em;\n  color: rgb(168, 167, 167);\n  flex: 1;\n"]))),C={get:"#6bbd5b",post:"#248fb2",put:"#9b708b",patch:"#e09d43",delete:"#e27a7a"},N=c.styled.span(w||(w=t(["\n  width: 60px;\n  display: inline-block;\n  background-color: rgb(51, 51, 51);\n  color: rgb(255, 255, 255);\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-align: center;\n  border-radius: 3px;\n\n  ","\n"])),(e=>e.type&&C[e.type]&&(0,c.css)(k||(k=t(["\n    background-color: ",";\n  "])),C[e.type]))),q=c.styled.div(O||(O=t(["\n  display: flex;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 12px;\n  gap: 12px;\n  flex-wrap: nowrap;\n  align-items: center;\n"])));var T,z;function _(e){let{param:r}=e;return"boolean"===r.type?(0,i.jsxs)(A,{name:r.name,required:r.required&&!r.default,children:[(0,i.jsx)("option",{}),(0,i.jsx)("option",{value:"true",children:"true"}),(0,i.jsx)("option",{value:"false",children:"false"})]}):(0,i.jsx)(I,{name:r.name,required:r.required&&!r.default,placeholder:r.default,type:"text"})}const A=c.styled.select(T||(T=t(["\n  display: block;\n  height: auto;\n  width: 100%;\n  background: #fff;\n  border: 1px solid rgba(34, 36, 38, .15);\n  border-radius: 5px;\n  padding: 8px 14px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, .87);\n"]))),I=c.styled.input(z||(z=t(["\n  display: block;\n  width: 100%;\n  margin: 0;\n  outline: none;\n  line-height: 1.2;\n  padding: 8px 14px;\n  background: #fff;\n  border: 1px solid rgba(34, 36, 38, .15);\n  color: rgba(0, 0, 0, .87);\n  border-radius: 5px;\n  font-size: 14px;\n"])));var R,P,$,U,H,L;function B(){const{info:{params:e,explore:r}}=b();return 0===e.length?null:(0,i.jsx)(V,{children:e.map(((e,n)=>(0,i.jsxs)(K,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(J,{children:e.name}),(0,i.jsx)(W,{children:e.type})]}),(0,i.jsxs)("div",{children:[e.required?(0,i.jsx)(D,{children:"required"}):null,(0,i.jsx)(M,{children:e.desc})]}),(0,i.jsx)("div",{children:r?(0,i.jsx)(_,{param:e}):e.default})]},n)))})}const J=c.styled.div(R||(R=t(["\n  font-weight: bold;\n"]))),M=c.styled.div(P||(P=t(["\n  color: #767676;\n  font-size: .85em;\n"]))),D=c.styled.div($||($=t(["\n  color: #db2828;\n  font-size: .85em;\n"]))),W=c.styled.div(U||(U=t(["\n  color: #a9a9a9;\n  font-size: .85em;\n"]))),K=c.styled.div(H||(H=t(["\n  display: flex;\n  border: 1px solid rgba(0, 0, 0, .1);\n  border-top: none;\n  line-height: 1.8;\n\n  & > div {\n    padding: 5px 12px;\n    flex: 1;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n\n    &:last-child {\n      text-align: right;\n    }\n  }\n\n  &:hover {\n    background-color: rgb(241, 241, 241);\n  }\n"]))),V=c.styled.div(L||(L=t(["\n\n"])));var Y;function G(){return G=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},G.apply(this,arguments)}var Q=function(e){return l.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"currentColor",viewBox:"0 0 16 16"},e),Y||(Y=l.createElement("circle",{cx:8,cy:8,r:8})))};var X;function Z(){return Z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Z.apply(this,arguments)}var ee=function(e){return l.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,fill:"currentColor",viewBox:"0 0 16 16"},e),X||(X=l.createElement("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})))};var re,ne,te,oe,se,ae;const ie=()=>{const{info:{results:e}}=b(),[r,n]=(0,l.useState)(0);return(0,i.jsxs)(fe,{children:[(0,i.jsx)(ue,{children:e.map(((e,t)=>(0,i.jsx)(pe,{active:r===t,onClick:()=>n(t),children:e.title},t)))}),(0,i.jsx)(de,{children:e.map(((e,n)=>n!==r?null:(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:e.code})},n)))})]})};function ce(){const{result:e,clearResult:r}=b(),[n,t]=(0,l.useState)(0);return(0,l.useEffect)((()=>{t(0)}),[e]),e?(0,i.jsxs)(fe,{children:[(0,i.jsxs)(ue,{children:[(0,i.jsxs)(pe,{active:0===n,onClick:()=>t(0),children:[(0,i.jsx)(Q,{fill:e.ok?"green":"#db2828"}),e.status,"  ",e.statusText]}),(0,i.jsx)(pe,{active:1===n,onClick:()=>t(1),children:"Metadata"}),(0,i.jsxs)(le,{onClick:()=>r(),children:[(0,i.jsx)(ee,{}),"返回示例"]})]}),(0,i.jsx)(de,{children:0===n?(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:e.body})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Method"}),(0,i.jsx)("dd",{children:e.method})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Url"}),(0,i.jsx)("dd",{children:e.url})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Request Headers"}),(0,i.jsx)("dd",{children:(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:e.requestHeaders})})})]}),"get"!==e.method?(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Request Data"}),(0,i.jsx)("dd",{children:(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:e.params})})})]}):null,(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Status"}),(0,i.jsxs)("dd",{children:[(0,i.jsx)(Q,{fill:e.ok?"green":"#db2828"}),e.status,"  ",e.statusText]})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Response Headers"}),(0,i.jsx)("dd",{children:(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:e.responseHeaders})})})]})]})})]}):(0,i.jsx)(ie,{})}const le=c.styled.div(re||(re=t(["\n  color: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  padding: 0 1em;\n  line-height: 35px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-left: auto;\n\n  &:hover {\n    color: rgb(255, 255, 255);\n  }\n"]))),de=c.styled.div(ne||(ne=t(["\n  pre {\n    color: rgb(195, 198, 196);\n    border-radius: 0px;\n    background: transparent !important;\n  }\n"]))),pe=c.styled.div(te||(te=t(["\n  cursor: pointer;\n  color: hsla(0, 0%, 100%, .9);\n  background: transparent;\n  padding: 0 1em;\n  line-height: 35px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n\n  &:hover {\n    background: hsla(0, 0%, 100%, .08);\n    color: #fff;\n  }\n\n  ","\n"])),(e=>e.active&&(0,c.css)(oe||(oe=t(["\n    background-color: rgba(0, 0, 0, 0.4);\n    color: #FFFFFF;\n  "]))))),ue=c.styled.div(se||(se=t(["\n  height: 35px;\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n"]))),fe=c.styled.div(ae||(ae=t(["\n  &&& {\n    background: rgb(54, 61, 68);\n\n    pre {\n      color: rgb(195, 198, 196) !important;\n      margin-bottom: 0;\n\n      code {\n        white-space: pre-wrap !important;\n        word-wrap: break-word !important;\n      }\n    }\n\n    dl {\n      color: rgb(255, 255, 255);\n      font-size: 11px;\n      margin: 0px 15px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n      padding: 15px 0px;\n\n      dt {\n        color: rgba(255, 255, 255, 0.4);\n        text-transform: uppercase;\n        font-size: 11px;\n        display: block;\n        margin-bottom: 3px;\n        font-weight: normal;\n        margin-top: 0;\n        font-style: normal;\n      }\n\n      dd {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        padding: 0;\n        margin-bottom: 0;\n      }\n    }\n  }\n"])));var he;function ge(e){let{props:{value:r,parameter:n}}=e;return(0,i.jsx)(me,{children:(0,i.jsxs)(y,{group:n||"default",value:r,children:[(0,i.jsx)(S,{}),(0,i.jsx)(B,{}),(0,i.jsx)(ce,{})]})})}const me=c.styled.div(he||(he=t(["\n  &&& {\n    line-height: 1.5em;\n    margin-bottom: 20px;\n\n    * {\n      font-size: 14px;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"])))},2:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,s){for(var a,i,c=o(e),l=1;l<arguments.length;l++){for(var d in a=Object(arguments[l]))n.call(a,d)&&(c[d]=a[d]);if(r){i=r(a);for(var p=0;p<i.length;p++)t.call(a,i[p])&&(c[i[p]]=a[i[p]])}}return c}},709:(e,r,n)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
n(2);var t=n(196),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}r.jsx=l,r.jsxs=l},159:(e,r,n)=>{e.exports=n(709)},998:e=>{var r="%[a-f0-9]{2}",n=new RegExp(r,"gi"),t=new RegExp("("+r+")+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;r=r||1;var n=e.slice(0,r),t=e.slice(r);return Array.prototype.concat.call([],o(n),o(t))}function s(e){try{return decodeURIComponent(e)}catch(s){for(var r=e.match(n),t=1;t<r.length;t++)r=(e=o(r,t).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=t.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var o=s(n[0]);o!==n[0]&&(r[n[0]]=o)}n=t.exec(e)}r["%C2"]="�";for(var a=Object.keys(r),i=0;i<a.length;i++){var c=a[i];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},728:e=>{e.exports=function(e,r){for(var n={},t=Object.keys(e),o=Array.isArray(r),s=0;s<t.length;s++){var a=t[s],i=e[a];(o?-1!==r.indexOf(a):r(a,i,e))&&(n[a]=i)}return n}},891:(e,r,n)=>{const t=n(742),o=n(998),s=n(400),a=n(728),i=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,r){return r.encode?r.strict?t(e):encodeURIComponent(e):e}function d(e,r){return r.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function u(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function f(e){const r=(e=u(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function h(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,r){c((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);const n=function(e){let r;switch(e.arrayFormat){case"index":return(e,n,t)=>{r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===t[e]&&(t[e]={}),t[e][r[1]]=n):t[e]=n};case"bracket":return(e,n,t)=>{r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=[n]:t[e]=n};case"colon-list-separator":return(e,n,t)=>{r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=[n]:t[e]=n};case"comma":case"separator":return(r,n,t)=>{const o="string"==typeof n&&n.includes(e.arrayFormatSeparator),s="string"==typeof n&&!o&&d(n,e).includes(e.arrayFormatSeparator);n=s?d(n,e):n;const a=o||s?n.split(e.arrayFormatSeparator).map((r=>d(r,e))):null===n?n:d(n,e);t[r]=a};case"bracket-separator":return(r,n,t)=>{const o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!o)return void(t[r]=n?d(n,e):n);const s=null===n?[]:n.split(e.arrayFormatSeparator).map((r=>d(r,e)));void 0!==t[r]?t[r]=[].concat(t[r],s):t[r]=s};default:return(e,r,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=r}}}(r),t=Object.create(null);if("string"!=typeof e)return t;if(!(e=e.trim().replace(/^[?#&]/,"")))return t;for(const o of e.split("&")){if(""===o)continue;let[e,a]=s(r.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?a:d(a,r),n(d(e,r),a,t)}for(const e of Object.keys(t)){const n=t[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=h(n[e],r);else t[e]=h(n,r)}return!1===r.sort?t:(!0===r.sort?Object.keys(t).sort():Object.keys(t).sort(r.sort)).reduce(((e,r)=>{const n=t[r];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[r]=p(n):e[r]=n,e}),Object.create(null))}r.extract=f,r.parse=g,r.stringify=(e,r)=>{if(!e)return"";c((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);const n=n=>r.skipNull&&null==e[n]||r.skipEmptyString&&""===e[n],t=function(e){switch(e.arrayFormat){case"index":return r=>(n,t)=>{const o=n.length;return void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:null===t?[...n,[l(r,e),"[",o,"]"].join("")]:[...n,[l(r,e),"[",l(o,e),"]=",l(t,e)].join("")]};case"bracket":return r=>(n,t)=>void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:null===t?[...n,[l(r,e),"[]"].join("")]:[...n,[l(r,e),"[]=",l(t,e)].join("")];case"colon-list-separator":return r=>(n,t)=>void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:null===t?[...n,[l(r,e),":list="].join("")]:[...n,[l(r,e),":list=",l(t,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(t,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?t:(o=null===o?"":o,0===t.length?[[l(n,e),r,l(o,e)].join("")]:[[t,l(o,e)].join(e.arrayFormatSeparator)])}default:return r=>(n,t)=>void 0===t||e.skipNull&&null===t||e.skipEmptyString&&""===t?n:null===t?[...n,l(r,e)]:[...n,[l(r,e),"=",l(t,e)].join("")]}}(r),o={};for(const r of Object.keys(e))n(r)||(o[r]=e[r]);const s=Object.keys(o);return!1!==r.sort&&s.sort(r.sort),s.map((n=>{const o=e[n];return void 0===o?"":null===o?l(n,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?l(n,r)+"[]":o.reduce(t(n),[]).join("&"):l(n,r)+"="+l(o,r)})).filter((e=>e.length>0)).join("&")},r.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);const[n,t]=s(e,"#");return Object.assign({url:n.split("?")[0]||"",query:g(f(e),r)},r&&r.parseFragmentIdentifier&&t?{fragmentIdentifier:d(t,r)}:{})},r.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0,[i]:!0},n);const t=u(e.url).split("?")[0]||"",o=r.extract(e.url),s=r.parse(o,{sort:!1}),a=Object.assign(s,e.query);let c=r.stringify(a,n);c&&(c=`?${c}`);let d=function(e){let r="";const n=e.indexOf("#");return-1!==n&&(r=e.slice(n)),r}(e.url);return e.fragmentIdentifier&&(d=`#${n[i]?l(e.fragmentIdentifier,n):e.fragmentIdentifier}`),`${t}${c}${d}`},r.pick=(e,n,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[i]:!1},t);const{url:o,query:s,fragmentIdentifier:c}=r.parseUrl(e,t);return r.stringifyUrl({url:o,query:a(s,n),fragmentIdentifier:c},t)},r.exclude=(e,n,t)=>{const o=Array.isArray(n)?e=>!n.includes(e):(e,r)=>!n(e,r);return r.pick(e,o,t)}},400:e=>{e.exports=(e,r)=>{if("string"!=typeof e||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];const n=e.indexOf(r);return-1===n?[e]:[e.slice(0,n),e.slice(n+r.length)]}},742:e=>{e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=48-20bb34.js.map