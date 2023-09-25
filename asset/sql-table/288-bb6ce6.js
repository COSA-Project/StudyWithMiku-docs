"use strict";(self.webpackChunkTopWritePlugins_sql_table=self.webpackChunkTopWritePlugins_sql_table||[]).push([[288],{1288:(n,e,t)=>{t.r(e),t.d(e,{default:()=>E});var r=t(3309),i=t.n(r),o=(t(9573),t(8602),t(9483)),a=t(4099),s=t(9196);t(3279),t(2378),t(1675),t(2993),t(8372),t(9525),t(4176),t(6403),t(2208),t(1022),t(3708),t(6877),t(477),t(1916),t(3238),t(8097),t(4209),t(805),t(75),t(5005),t(5256),t(1605),t(8972),t(2491),t(883),t(3726);function c(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){s=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw o}}}}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var u=function(n){return n=n.replace(/\/\*(.*)/g,"").replace(/([ \t]*\n){3,}/g,"\n\n")};function f(n){return decodeURIComponent(n).replace(/['`"]/gi,"")}var d,m,p=["NOT NULL","UNIQUE","INDEX","KEY","PRIMARY KEY","FOREIGN KEY","CHECK","DEFAULT","COMMENT","CHARACTER SET","COLLATE"].join(" ").split(" ");function h(n){var e={name:"",type:"",options:{},required:!1},t=(n=n.replace(/(['"])(.*?)\1/g,(function(n){return encodeURIComponent(n)}))).trim().split(/\s+/),r=f(t.shift());if(!p.includes(r.toUpperCase())){e.name=r;var i,o=[],a=c(t);try{for(a.s();!(i=a.n()).done;){var s=i.value;if(p.includes(s.toUpperCase()))break;o.push(f(s))}}catch(n){a.e(n)}finally{a.f()}e.type=o.join(" "),n.match(/.*NOT\s+NULL.*/i)&&!n.match(/AUTO_INCREMENT/i)&&(e.required=!0);var l=n.match(/.*DEFAULT\s+(\S+).*/i);l&&(e.options.default=f(l[1]));var u=n.match(/.*COMMENT\s+(\S+).*/i);return u&&(e.options.comment=f(u[1])),e}}function v(n){var e=(n=u(n)).split(";"),t=[];return e.forEach((function(n){var e=n.match(/.*CREATE\s+(TEMPORARY)?[\s+]?TABLE\s+(IF\s+NOT\s+EXISTS)?[\s+]?([^\s(]+).*/i);if(e){var r=f(e[3]),i=n.substring(n.lastIndexOf(")")+1).trim(),o=n.substring(n.indexOf("(")).trim().replace(/^\(/g,"").replace(/\).*?;?$/g,"");t.push(function(n,e,t){var r=[],i=0,o={name:n,fields:[],options:{}},a=(t=t.replace(/(['"])(.*?)\1/g,(function(n){return encodeURIComponent(n)}))).match(/.*COMMENT\s*=\s*(\S+).*/i);a&&(o.options.comment=f(a[1]));var s,l=c((e=e.replace(/(enum|set|index\s.*?)\(.*?\)/gi,(function(n){return i++,r[i]=n,"__PLACEHOLDER_".concat(i,"__")}))).split(/,[$|"|`|'|\s+]/i));try{for(l.s();!(s=l.n()).done;){var u=s.value,d=h(u=u.replace(/__PLACEHOLDER_(\d+)__/g,(function(n,e){return r[e]})));d&&o.fields.push(d)}}catch(n){l.e(n)}finally{l.f()}return o}(r,o,i))}})),e.forEach((function(n){var e=n.match(/comment\s+on\s+(column|table)\s+((\S+)\.)?(\S+)\s+is\s+(.+)/i);if(e)switch(e[1]){case"table":for(var r=0,i=t;r<i.length;r++){var o=i[r];o.name===e[4]&&(o.options.comment=f(e[5]))}break;case"column":for(var a=0,s=t;a<s.length;a++){var l=s[a];if(l.name===e[3]){var u,d=c(l.fields);try{for(d.s();!(u=d.n()).done;){var m=u.value;m.name===e[4]&&(m.options.comment=f(e[5]))}}catch(n){d.e(n)}finally{d.f()}}}}})),t}function E(n){var e=n.props.value,t=(0,s.useMemo)((function(){return v(e)}),[e]);return(0,o.jsx)(g,{children:t.map((function(n){return(0,o.jsxs)(s.Fragment,{children:[(0,o.jsxs)("h2",{children:[n.name,n.options.comment?":".concat(n.options.comment):null]}),(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"字段"}),(0,o.jsx)("th",{children:"类型"}),(0,o.jsx)("th",{children:"默认值"}),(0,o.jsx)("th",{children:"注释"})]})}),(0,o.jsx)("tbody",{children:n.fields.map((function(n){return(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[n.required?(0,o.jsx)(y,{children:"*"}):null,n.name]}),(0,o.jsx)("td",{children:n.type}),(0,o.jsx)("td",{children:n.options.default}),(0,o.jsx)("td",{children:n.options.comment})]},n.name)}))})]})]},n.name)}))})}var y=a.styled.span(d||(d=i()(["\n  color: red;\n"]))),g=a.styled.div(m||(m=i()(["\n  margin-bottom: 14px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])))}}]);
//# sourceMappingURL=288-bb6ce6.js.map