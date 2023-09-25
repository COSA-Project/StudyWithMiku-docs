(self.webpackChunkTopWritePlugins_lunrjs=self.webpackChunkTopWritePlugins_lunrjs||[]).push([[161],{161:function(e,r,t){var n,i;
/*!
 * Lunr languages, `Chinese` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2019, Felix Lian (repairearth)
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball zhvaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */n=function(e){return function(r,t){if(void 0===r)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===r.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var n="2"==r.version[0];r.zh=function(){this.pipeline.reset(),this.pipeline.add(r.zh.trimmer,r.zh.stopWordFilter,r.zh.stemmer),n?this.tokenizer=r.zh.tokenizer:(r.tokenizer&&(r.tokenizer=r.zh.tokenizer),this.tokenizerFn&&(this.tokenizerFn=r.zh.tokenizer))},r.zh.tokenizer=function(i){if(!arguments.length||null==i||null==i)return[];if(Array.isArray(i))return i.map((function(e){return n?new r.Token(e.toLowerCase()):e.toLowerCase()}));t&&e.load(t);var o=i.toString().trim().toLowerCase(),s=[];e.cut(o,!0).forEach((function(e){s=s.concat(e.split(" "))})),s=s.filter((function(e){return!!e}));var u=0;return s.map((function(e,t){if(n){var i=o.indexOf(e,u),s={};return s.position=[i,e.length],s.index=t,u=i,new r.Token(e,s)}return e}))},r.zh.wordCharacters="\\w一-龥",r.zh.trimmer=r.trimmerSupport.generateTrimmer(r.zh.wordCharacters),r.Pipeline.registerFunction(r.zh.trimmer,"trimmer-zh"),r.zh.stemmer=function(e){return e},r.Pipeline.registerFunction(r.zh.stemmer,"stemmer-zh"),r.zh.stopWordFilter=r.generateStopWordFilter("的 一 不 在 人 有 是 为 以 于 上 他 而 后 之 来 及 了 因 下 可 到 由 这 与 也 此 但 并 个 其 已 无 小 我 们 起 最 再 今 去 好 只 又 或 很 亦 某 把 那 你 乃 它 吧 被 比 别 趁 当 从 到 得 打 凡 儿 尔 该 各 给 跟 和 何 还 即 几 既 看 据 距 靠 啦 了 另 么 每 们 嘛 拿 哪 那 您 凭 且 却 让 仍 啥 如 若 使 谁 虽 随 同 所 她 哇 嗡 往 哪 些 向 沿 哟 用 于 咱 则 怎 曾 至 致 着 诸 自".split(" ")),r.Pipeline.registerFunction(r.zh.stopWordFilter,"stopWordFilter-zh")}},void 0===(i="function"==typeof n?n.call(r,t,r,e):n)||(e.exports=i)}}]);
//# sourceMappingURL=161-7cae42.js.map