"use strict";(self.webpackChunkTopWritePlugins_jsfiddle=self.webpackChunkTopWritePlugins_jsfiddle||[]).push([[390],{390:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var n=t(159);const o=/^(?:http|https):(\/\/jsfiddle\.net\/(?:.+?\/)?\w{8}\/(?:\d+\/)?)(.*)/;function c(e){let{props:{value:r}}=e;const t=r.trim(),c=o.exec(t);return c?(0,n.jsx)("iframe",{width:"100%",height:"300",src:"".concat(c[1],"embedded/").concat(c[2]),allowFullScreen:!0}):null}},2:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,c){for(var a,i,l=o(e),f=1;f<arguments.length;f++){for(var s in a=Object(arguments[f]))t.call(a,s)&&(l[s]=a[s]);if(r){i=r(a);for(var u=0;u<i.length;u++)n.call(a,i[u])&&(l[i[u]]=a[i[u]])}}return l}},709:(e,r,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(2);var n=t(196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,c={},f=null,s=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(s=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:s,props:c,_owner:a.current}}r.jsx=f},159:(e,r,t)=>{e.exports=t(709)}}]);
//# sourceMappingURL=390-f042e0.js.map