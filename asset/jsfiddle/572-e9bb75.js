"use strict";(self.webpackChunkTopWritePlugins_jsfiddle=self.webpackChunkTopWritePlugins_jsfiddle||[]).push([[572],{572:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n,o=t(159),i=t(99),a=t(196);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}var l=function(e){return a.createElement("svg",c({className:"icon_svg__icon",viewBox:"0 0 1025 1024",xmlns:"http://www.w3.org/2000/svg",width:18,height:18},e),n||(n=a.createElement("path",{d:"M915.2 478.4c-8-4.8-9.6-11.2-11.2-19.2-4.8-30.4-6.4-60.8-16-89.6-65.6-180.8-280-259.2-448-166.4-49.6 27.2-88 65.6-118.4 115.2-6.4-3.2-9.6-4.8-14.4-6.4-54.4-22.4-107.2-17.6-155.2 16-46.4 33.6-65.6 80-59.2 139.2 0 4.8-3.2 14.4-8 17.6C12.8 539.2-16 627.2 9.6 712c25.6 83.2 104 144 192 147.2 54.4 1.6 110.4 1.6 164.8 1.6 152 0 304 1.6 457.6-1.6 96-1.6 174.4-67.2 196.8-158.4 19.2-88-22.4-176-105.6-222.4zm38.4 284.8c-33.6 40-76.8 64-129.6 64-102.4 1.6-206.4 0-308.8 0 0 1.6-296 0-297.6 0-80 0-139.2-35.2-172.8-108.8-33.6-75.2-8-164.8 62.4-211.2 16-11.2 22.4-20.8 17.6-41.6-9.6-48 8-86.4 48-113.6 41.6-28.8 86.4-28.8 131.2-4.8 19.2 9.6 27.2 20.8 40-4.8 25.6-48 62.4-84.8 110.4-110.4 176-99.2 414.4 14.4 417.6 240 0 14.4 4.8 22.4 17.6 28.8 105.6 48 136 174.4 64 262.4zM795.2 617.6c-11.2 56-62.4 99.2-121.6 99.2-30.4 0-57.6-11.2-80-32-49.6-46.4-129.6-136-174.4-169.6-36.8-27.2-76.8-22.4-108.8 6.4-91.2 80 28.8 220.8 121.6 139.2 8-6.4 14.4-17.6 22.4-24 14.4-9.6 38.4-1.6 24 19.2-32 48-89.6 68.8-142.4 52.8-52.8-16-88-65.6-88-128 1.6-40 22.4-78.4 64-100.8 41.6-22.4 84.8-24 121.6 4.8 92.8 70.4 137.6 148.8 195.2 184 44.8 27.2 97.6 12.8 124.8-32 52.8-89.6-62.4-190.4-142.4-115.2-8 6.4-12.8 16-20.8 20.8-19.2 12.8-32-8-24-19.2 36.8-51.2 91.2-73.6 150.4-51.2 57.6 24 89.6 83.2 78.4 145.6z"})))};function s(e){let{Component:r}=e;const t=(0,i.useEditor)();return(0,o.jsx)(r,{title:"JSFiddle",handler:async()=>{const{insertXBlock:e}=(0,i.useEditorActions)(),r=await i.Modal.prompt({title:"插入JSFiddle",schema:{type:"string",title:"JSFiddle地址"}});r&&e(t,{name:"jsfiddle",value:r})},children:(0,o.jsx)(l,{})})}},2:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,l=o(e),s=1;s<arguments.length;s++){for(var f in a=Object(arguments[s]))t.call(a,f)&&(l[f]=a[f]);if(r){c=r(a);for(var u=0;u<c.length;u++)n.call(a,c[u])&&(l[c[u]]=a[c[u]])}}return l}},709:(e,r,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(2);var n=t(196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,i={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:i,_owner:a.current}}r.jsx=s},159:(e,r,t)=>{e.exports=t(709)}}]);
//# sourceMappingURL=572-e9bb75.js.map