"use strict";(self.webpackChunkTopWritePlugins_knowledge=self.webpackChunkTopWritePlugins_knowledge||[]).push([[527],{2527:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});t(8194),t(75),t(9963),t(3708),t(6746),t(2208),t(1022),t(6877),t(2793),t(2990),t(2674);var n=t(3183),o=t.n(n),c=t(9483),a=t(4099);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){var r=e.props,t=e.Component,n=r.item;return"new_article"===r.eventKey&&n instanceof a.SummaryPart&&n.getMetadata("reference")?null:(0,c.jsx)(t,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},r))}},7875:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),f=1;f<arguments.length;f++){for(var p in c=Object(arguments[f]))t.call(c,p)&&(i[p]=c[p]);if(r){a=r(c);for(var s=0;s<a.length;s++)n.call(c,a[s])&&(i[a[s]]=c[a[s]])}}return i}},8065:(e,r,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(7875);var n=t(9196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,c={},p=null,s=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(s=r.ref),r)i.call(r,n)&&!f.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:p,ref:s,props:c,_owner:a.current}}r.jsx=p,r.jsxs=p},9483:(e,r,t)=>{e.exports=t(8065)}}]);
//# sourceMappingURL=527-25a164.js.map