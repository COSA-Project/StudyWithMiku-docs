"use strict";(self.webpackChunkTopWritePlugins_bilibili=self.webpackChunkTopWritePlugins_bilibili||[]).push([[6],{6:(r,e,t)=>{t.r(e),t.d(e,{PATTERN:()=>p,default:()=>f});var n,o,a=t(483),i=t(99),c=t(196);function s(){return s=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},s.apply(this,arguments)}var l=function(r){return c.createElement("svg",s({className:"icon_svg__icon",viewBox:"0 0 1129 1024",xmlns:"http://www.w3.org/2000/svg",width:18,height:18},r),n||(n=c.createElement("path",{d:"M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0zm0 0",fill:"#20B0E3"})),o||(o=c.createElement("path",{d:"M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593zm416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812zm0 0",fill:"#20B0E3"})))};var u=t(815);const p=/^https:\/\/www\.bilibili\.com\/video\/([^\/]+)/;function f(r){let{Component:e}=r;const t=(0,i.useEditor)();return(0,a.jsx)(e,{title:"哔哩哔哩视频",handler:async()=>{const{insertXBlock:r}=(0,i.useEditorActions)(),e=await i.Modal.prompt({title:"插入哔哩哔哩视频",schema:{type:"string",title:"视频地址"},validate:(r,e)=>(r&&!r.match(p)&&e.addError("视频地址有误，请检查"),e)});if(e){const n=u.parseUrl(e).url;r(t,{name:"bilibili",value:n})}},children:(0,a.jsx)(l,{})})}},875:r=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,o){for(var a,i,c=function(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}(r),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))t.call(a,l)&&(c[l]=a[l]);if(e){i=e(a);for(var u=0;u<i.length;u++)n.call(a,i[u])&&(c[i[u]]=a[i[u]])}}return c}},65:(r,e,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(875);var n=t(196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(r,e,t){var n,a={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)c.call(e,n)&&!s.hasOwnProperty(n)&&(a[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps)void 0===a[n]&&(a[n]=e[n]);return{$$typeof:o,type:r,key:l,ref:u,props:a,_owner:i.current}}e.jsx=l},483:(r,e,t)=>{r.exports=t(65)},18:r=>{var e="%[a-f0-9]{2}",t=new RegExp("("+e+")|([^%]+?)","gi"),n=new RegExp("("+e+")+","gi");function o(r,e){try{return[decodeURIComponent(r.join(""))]}catch(r){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],o(t),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var e=r.match(t)||[],n=1;n<e.length;n++)e=(r=o(e,n).join("")).match(t)||[];return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},t=n.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(r){var o=a(t[0]);o!==t[0]&&(e[t[0]]=o)}t=n.exec(r)}e["%C2"]="�";for(var i=Object.keys(e),c=0;c<i.length;c++){var s=i[c];r=r.replace(new RegExp(s,"g"),e[s])}return r}(r)}}},739:r=>{r.exports=function(r,e){for(var t={},n=Object.keys(r),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],c=r[i];(o?-1!==e.indexOf(i):e(i,c,r))&&(t[i]=c)}return t}},815:(r,e,t)=>{const n=t(602),o=t(18),a=t(882),i=t(739),c=Symbol("encodeFragmentIdentifier");function s(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(r,e){return e.encode?e.strict?n(r):encodeURIComponent(r):r}function u(r,e){return e.decode?o(r):r}function p(r){return Array.isArray(r)?r.sort():"object"==typeof r?p(Object.keys(r)).sort(((r,e)=>Number(r)-Number(e))).map((e=>r[e])):r}function f(r){const e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function y(r){const e=(r=f(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function d(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function m(r,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const t=function(r){let e;switch(r.arrayFormat){case"index":return(r,t,n)=>{e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return(r,t,n)=>{e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return(r,t,n)=>{e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return(e,t,n)=>{const o="string"==typeof t&&t.includes(r.arrayFormatSeparator),a="string"==typeof t&&!o&&u(t,r).includes(r.arrayFormatSeparator);t=a?u(t,r):t;const i=o||a?t.split(r.arrayFormatSeparator).map((e=>u(e,r))):null===t?t:u(t,r);n[e]=i};case"bracket-separator":return(e,t,n)=>{const o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o)return void(n[e]=t?u(t,r):t);const a=null===t?[]:t.split(r.arrayFormatSeparator).map((e=>u(e,r)));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a};default:return(r,e,t)=>{void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!=typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;for(const o of r.split("&")){if(""===o)continue;let[r,i]=a(e.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?i:u(i,e),t(u(r,e),i,n)}for(const r of Object.keys(n)){const t=n[r];if("object"==typeof t&&null!==t)for(const r of Object.keys(t))t[r]=d(t[r],e);else n[r]=d(t,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(((r,e)=>{const t=n[e];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?r[e]=p(t):r[e]=t,r}),Object.create(null))}e.extract=y,e.parse=m,e.stringify=(r,e)=>{if(!r)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const t=t=>e.skipNull&&null==r[t]||e.skipEmptyString&&""===r[t],n=function(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const o=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[l(e,r),"[",o,"]"].join("")]:[...t,[l(e,r),"[",l(o,r),"]=",l(n,r)].join("")]};case"bracket":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[l(e,r),"[]"].join("")]:[...t,[l(e,r),"[]=",l(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[l(e,r),":list="].join("")]:[...t,[l(e,r),":list=",l(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===r.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[l(t,r),e,l(o,r)].join("")]:[[n,l(o,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,l(e,r)]:[...t,[l(e,r),"=",l(n,r)].join("")]}}(e),o={};for(const e of Object.keys(r))t(e)||(o[e]=r[e]);const a=Object.keys(o);return!1!==e.sort&&a.sort(e.sort),a.map((t=>{const o=r[t];return void 0===o?"":null===o?l(t,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?l(t,e)+"[]":o.reduce(n(t),[]).join("&"):l(t,e)+"="+l(o,e)})).filter((r=>r.length>0)).join("&")},e.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);const[t,n]=a(r,"#");return Object.assign({url:t.split("?")[0]||"",query:m(y(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,e)}:{})},e.stringifyUrl=(r,t)=>{t=Object.assign({encode:!0,strict:!0,[c]:!0},t);const n=f(r.url).split("?")[0]||"",o=e.extract(r.url),a=e.parse(o,{sort:!1}),i=Object.assign(a,r.query);let s=e.stringify(i,t);s&&(s=`?${s}`);let u=function(r){let e="";const t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(u=`#${t[c]?l(r.fragmentIdentifier,t):r.fragmentIdentifier}`),`${n}${s}${u}`},e.pick=(r,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:s}=e.parseUrl(r,n);return e.stringifyUrl({url:o,query:i(a,t),fragmentIdentifier:s},n)},e.exclude=(r,t,n)=>{const o=Array.isArray(t)?r=>!t.includes(r):(r,e)=>!t(r,e);return e.pick(r,o,n)}},882:r=>{r.exports=(r,e)=>{if("string"!=typeof r||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];const t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},602:r=>{r.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,(r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=6-f4a44b.js.map