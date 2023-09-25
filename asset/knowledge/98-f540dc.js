"use strict";(self.webpackChunkTopWritePlugins_knowledge=self.webpackChunkTopWritePlugins_knowledge||[]).push([[98],{3098:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});t(8194),t(75),t(9963),t(3708),t(6746),t(2208),t(1022),t(6877),t(2793),t(2990),t(2674);var n=t(3183),o=t.n(n),c=t(9483);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e){var r=e.props,t=e.Component,n=r.canDrop;return(0,c.jsx)(t,f(f({},r),{},{canDrop:function(e){return!e.getMetadata("reference")&&(!n||n(e))}}))}},7875:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var c,a,f=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var p in c=Object(arguments[i]))t.call(c,p)&&(f[p]=c[p]);if(r){a=r(c);for(var s=0;s<a.length;s++)n.call(c,a[s])&&(f[a[s]]=c[a[s]])}}return f}},8065:(e,r,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(7875);var n=t(9196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,c={},p=null,s=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(s=r.ref),r)f.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:p,ref:s,props:c,_owner:a.current}}r.jsx=p,r.jsxs=p},9483:(e,r,t)=>{e.exports=t(8065)}}]);
//# sourceMappingURL=98-f540dc.js.map