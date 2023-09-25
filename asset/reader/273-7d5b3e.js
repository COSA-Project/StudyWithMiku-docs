(self.webpackChunk_topwrite_reader=self.webpackChunk_topwrite_reader||[]).push([[273],{22273:function(e,t,n){var r;r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var c=u.get;if(void 0===c)return;return c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return;e=l,t=i,n=a,r=!0,u=l=void 0}};function i(e){return e&&e.__esModule?e:{default:e}}var a=n(2),u=i(a),c=i(n(3)),l=i(n(12)),s=i(n(17)),f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.state={size:0,disappearDelayHide:!1,percent:0,appearDelayWidth:0}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.show;e.change&&(t?this.show():this.hide())}},{key:"shouldComponentUpdate",value:function(e,t){return e.change||!(0,l.default)(t,this.state)}},{key:"show",value:function(){var e=this,t=this.state,n=t.size,r=t.percent,o=0===n;r=this.calculatePercent(r),this.setState({size:++n,appearDelayWidth:o,percent:r}),o&&setTimeout((function(){e.setState({appearDelayWidth:!1})}))}},{key:"hide",value:function(){var e=this,t=this.state.size;--t<0?this.setState({size:0}):(this.setState({size:0,disappearDelayHide:!0,percent:1}),setTimeout((function(){e.setState({disappearDelayHide:!1,percent:0})}),500))}},{key:"getBarStyle",value:function(){var e=this.state,t=e.disappearDelayHide,n=e.appearDelayWidth,r=e.percent;return{background:this.props.color,width:n?0:100*r+"%",display:t||r>0?"block":"none"}}},{key:"getSpinnerStyle",value:function(){return{display:this.state.size>0?"block":"none",borderColor:this.props.color}}},{key:"calculatePercent",value:function(e){return e=e||0,e+=e>=0&&e<.25?(3*Math.random()+10)/100:e>=.25&&e<.65?3*Math.random()/100:e>=.65&&e<.9?2*Math.random()/100:e>=.9&&e<.99?.005:0}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("div",{className:s.default.loading},u.default.createElement("div",{className:s.default.bar,style:this.getBarStyle()},u.default.createElement("div",{className:s.default.peg}))),this.props.showSpinner&&u.default.createElement("div",{className:s.default.spinner},u.default.createElement("div",{className:s.default.icon,style:this.getSpinnerStyle()})))}}],[{key:"propTypes",value:{change:c.default.bool,color:c.default.string.isRequired,show:c.default.bool,showSpinner:c.default.bool},enumerable:!0},{key:"defaultProps",value:{change:!0,showSpinner:!0},enumerable:!0}]),t}(a.Component);t.default=f,e.exports=t.default},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(5)((function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}),!0)}else e.exports=n(11)()}).call(t,n(4))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],s=!1,f=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!s){var e=u(p);s=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new y(e,t)),1!==l.length||s||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(t){"use strict";var r=n(6),o=n(7),i=n(8),a=n(9),u=n(10);e.exports=function(e,n){var c="function"==typeof Symbol&&Symbol.iterator,l="@@iterator",s="<<anonymous>>",f={array:v("array"),bool:v("boolean"),func:v("function"),number:v("number"),object:v("object"),string:v("string"),symbol:v("symbol"),any:y(r.thatReturnsNull),arrayOf:function(e){return y((function(t,n,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new d("Invalid "+o+" `"+i+"` of type `"+b(u)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<u.length;c++){var l=e(u,c,r,o,i+"["+c+"]",a);if(l instanceof Error)return l}return null}))},element:y((function(t,n,r,o,i){var a=t[n];return e(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return y((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||s;return new d("Invalid "+o+" `"+i+"` of type `"+((u=t[n]).constructor&&u.constructor.name?u.constructor.name:s)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var u;return null}))},node:y((function(e,t,n,r,o){return h(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,n,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=b(u);if("object"!==c)return new d("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var s=e(u,l,r,o,i+"."+l,a);if(s instanceof Error)return s}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(p(a,e[u]))return null;return new d("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")})):("production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",g(o),n),r.thatReturnsNull}return y((function(t,n,r,o,i){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,n,r,o,i,a))return null;return new d("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return y((function(t,n,r,o,i){var u=t[n],c=b(u);if("object"!==c)return new d("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var s=e[l];if(s){var f=s(u,l,r,o,i+"."+l,a);if(f)return f}}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function y(e){if("production"!==t.env.NODE_ENV)var r={},u=0;function c(c,l,f,p,y,v,h){if(p=p||s,v=v||f,h!==a)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=p+":"+f;!r[b]&&u<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",v,p),r[b]=!0,u++)}return null==l[f]?c?null===l[f]?new d("The "+y+" `"+v+"` is marked as required in `"+p+"`, but its value is `null`."):new d("The "+y+" `"+v+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(l,f,p,y,v)}var l=c.bind(null,!1);return l.isRequired=c.bind(null,!0),l}function v(e){return y((function(t,n,r,o,i,a){var u=t[n];return b(u)!==e?new d("Invalid "+o+" `"+i+"` of type `"+m(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var n=function(e){var t=e&&(c&&e[c]||e[l]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!h(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function m(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=m(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,f.checkPropTypes=u,f.PropTypes=f,f}}).call(t,n(4))},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,o,i,a,u,c){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,o,i,a,u,c],f=0;(l=new Error(t.replace(/%s/g,(function(){return s[f++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}}).call(t,n(4))},function(e,t,n){(function(t){"use strict";var r=n(6);if("production"!==t.env.NODE_ENV){var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];o.apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(4))},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(function(t){"use strict";if("production"!==t.env.NODE_ENV)var r=n(7),o=n(8),i=n(9),a={};e.exports=function(e,n,u,c,l){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var f;try{r("function"==typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",c||"React class",u,s),f=e[s](n,s,c,u,null,i)}catch(e){f=e}if(o(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",u,s,typeof f),f instanceof Error&&!(f.message in a)){a[f.message]=!0;var p=l?l():"";o(!1,"Failed %s type: %s%s",u,f.message,null!=p?p:"")}}}}).call(t,n(4))},function(e,t,n){"use strict";var r=n(6),o=n(7),i=n(9);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";var r=n(13);e.exports=function(e,t,n,o){var i=n?n.call(o,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=r(e),u=r(t),c=a.length;if(c!==u.length)return!1;o=o||null;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<c;s++){var f=a[s];if(!l(f))return!1;var p=e[f],d=t[f],y=n?n.call(o,p,d,f):void 0;if(!1===y||void 0===y&&p!==d)return!1}return!0}},function(e,t,n){var r,o=n(14),i=n(15),a=n(16),u=/^\d+$/,c=Object.prototype.hasOwnProperty,l=o(Object,"keys"),s=9007199254740991,f=(r="length",function(e){return null==e?void 0:e[r]});function p(e,t){return e="number"==typeof e||u.test(e)?+e:-1,t=null==t?s:t,e>-1&&e%1==0&&e<t}function d(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=s}function y(e){for(var t=function(e){if(null==e)return[];v(e)||(e=Object(e));var t=e.length;t=t&&d(t)&&(a(e)||i(e))&&t||0;for(var n=e.constructor,r=-1,o="function"==typeof n&&n.prototype===e,u=Array(t),l=t>0;++r<t;)u[r]=r+"";for(var s in e)l&&p(s,t)||"constructor"==s&&(o||!c.call(e,s))||u.push(s);return u}(e),n=t.length,r=n&&e.length,o=!!r&&d(r)&&(a(e)||i(e)),u=-1,l=[];++u<n;){var s=t[u];(o&&p(s,r)||c.call(e,s))&&l.push(s)}return l}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var h=l?function(e){var t,n=null==e?void 0:e.constructor;return"function"==typeof n&&n.prototype===e||"function"!=typeof e&&null!=(t=e)&&d(f(t))?y(e):v(e)?l(e):[]}:y;e.exports=h},function(e,t){var n="[object Function]",r=/^\[object .+?Constructor\]$/,o=Object.prototype,i=Function.prototype.toString,a=o.hasOwnProperty,u=o.toString,c=RegExp("^"+i.call(a).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e,t){var o=null==e?void 0:e[t];return function(e){return null!=e&&(function(e){return function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)&&u.call(e)==n}(e)?c.test(i.call(e)):function(e){return!!e&&"object"==typeof e}(e)&&r.test(e))}(o)?o:void 0}},function(e,t){var n=9007199254740991,r="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a=Object.prototype,u=a.hasOwnProperty,c=a.toString,l=a.propertyIsEnumerable;e.exports=function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?c.call(e):"";return t==o||t==i}(e)}(e)}(e)&&u.call(e,"callee")&&(!l.call(e,"callee")||c.call(e)==r)}},function(e,t){var n="[object Function]",r=/^\[object .+?Constructor\]$/;function o(e){return!!e&&"object"==typeof e}var i,a,u,c=Object.prototype,l=Function.prototype.toString,s=c.hasOwnProperty,f=c.toString,p=RegExp("^"+l.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),d=(a="isArray",function(e){return null!=e&&(function(e){return function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)&&f.call(e)==n}(e)?p.test(l.call(e)):o(e)&&r.test(e))}(u=null==(i=Array)?void 0:i[a])?u:void 0),y=9007199254740991,v=d||function(e){return o(e)&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=y}(e.length)&&"[object Array]"==f.call(e)};e.exports=v},function(e,t){e.exports={loading:"Loading__loading___1m_fZ",bar:"Loading__bar___21yOt",peg:"Loading__peg___3Y_28",spinner:"Loading__spinner___11Pm4",icon:"Loading__icon___3OOyu","loading-bar-spinner":"Loading__loading-bar-spinner___1hKY9"}}])},e.exports=r(n(87363))}}]);
//# sourceMappingURL=273-7d5b3e.js.map