(self.webpackChunkTopWritePlugins_components=self.webpackChunkTopWritePlugins_components||[]).push([[738],{6738:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Container:()=>L,Content:()=>z,Controller:()=>R,Summary:()=>I,default:()=>D});t(8194),t(75),t(9963),t(3708),t(6746),t(2208),t(1022),t(6877),t(2793),t(2990),t(2674);var r,o=t(3183),i=t.n(o),c=t(9460),s=t.n(c),l=t(3309),a=t.n(l),p=t(4685),u=t.n(p),f=t(9483),d=t(4099),b=t(9196);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}var y=function(e){return b.createElement("svg",h({className:"up_svg__icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200},e),r||(r=b.createElement("path",{d:"M755.2 544 390.4 874.667c-17.067 14.933-44.8 14.933-59.733-2.134-6.4-8.533-10.667-19.2-10.667-29.866V181.333c0-23.466 19.2-42.666 42.667-42.666 10.666 0 21.333 4.266 27.733 10.666L753.067 480c17.066 14.933 19.2 42.667 2.133 59.733 2.133 2.134 0 2.134 0 4.267z"})))};var g;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}var O=function(e){return b.createElement("svg",v({className:"down_svg__icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200},e),g||(g=b.createElement("path",{d:"m482.133 738.133-345.6-345.6c-17.066-17.066-17.066-42.666 0-59.733 8.534-8.533 19.2-12.8 29.867-12.8h689.067c23.466 0 42.666 19.2 42.666 42.667 0 10.666-4.266 21.333-12.8 29.866l-343.466 345.6c-17.067 17.067-42.667 17.067-59.734 0z"})))};var j,m,w,x,_,P,k,E=["open","onClick"];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e){var n=e.props,t=n.label,r=n.children,o=n.close,i=(0,b.useState)(null==o),c=u()(i,2),s=c[0],l=c[1];return(0,f.jsxs)(L,{$open:s,children:[(0,f.jsx)(R,{open:s,onClick:function(){return l(!s)}}),(0,f.jsxs)(z,{children:[(0,f.jsx)(I,{children:t}),r]})]})}var N=d.styled.div(j||(j=a()(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 2em;\n  cursor: pointer;\n"]))),F=d.styled.div(m||(m=a()(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #5e5e5e;\n\n  &:hover {\n    background-color: #EFF0F0;\n    border-radius: 4px;\n  }\n\n  svg {\n    fill: currentColor;\n    width: 14px;\n    height: 14px;\n  }\n"]))),T=d.styled.div(w||(w=a()(["\n  width: 30px;\n  user-select: none;\n  position: absolute;\n  top: 0.75em;\n  left: 0.5em;\n"]))),R=function(e){var n=e.open,t=e.onClick,r=s()(e,E),o=(0,b.useCallback)((function(e){e.preventDefault(),t()}),[n,t]);return(0,f.jsx)(T,S(S({},r),{},{children:(0,f.jsx)(N,{children:(0,f.jsx)(F,{onMouseDown:o,children:n?(0,f.jsx)(O,{}):(0,f.jsx)(y,{})})})}))},z=d.styled.div(x||(x=a()(["\n  margin-left: 30px;\n"]))),I=d.styled.div(_||(_=a()(["\n  display: block !important;\n  height: 2em;\n  line-height: 2em;\n\n  p:empty:before {\n    content: '无标题折叠块';\n    color: #5e5e5e;\n  }\n"]))),L=d.styled.div(P||(P=a()(["\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.75em 0.5em;\n  position: relative;\n  margin: 1em 0;\n  ","\n"])),(function(e){return!e.$open&&(0,d.css)(k||(k=a()(["\n    ","",""," > * {\n      display: none;\n    }\n  "])),z,z,z)}))},7875:e=>{"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var a in i=Object(arguments[l]))t.call(i,a)&&(s[a]=i[a]);if(n){c=n(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},8065:(e,n,t)=>{"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t(7875);var r=t(9196),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,p=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:p,props:i,_owner:c.current}}n.jsx=a,n.jsxs=a},9483:(e,n,t)=>{"use strict";e.exports=t(8065)},3309:e=>{e.exports=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=738-a94652.js.map