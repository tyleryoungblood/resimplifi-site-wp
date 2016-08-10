//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
;
window.wp = window.wp || {};

(function( exports, $ ){
	var api = {}, ctor, inherits,
		slice = Array.prototype.slice;

	// Shared empty constructor function to aid in prototype-chain creation.
	ctor = function() {};

	/**
	 * Helper function to correctly set up the prototype chain, for subclasses.
	 * Similar to `goog.inherits`, but uses a hash of prototype properties and
	 * class properties to be extended.
	 *
	 * @param  object parent      Parent class constructor to inherit from.
	 * @param  object protoProps  Properties to apply to the prototype for use as class instance properties.
	 * @param  object staticProps Properties to apply directly to the class constructor.
	 * @return child              The subclassed constructor.
	 */
	inherits = function( parent, protoProps, staticProps ) {
		var child;

		// The constructor function for the new subclass is either defined by you
		// (the "constructor" property in your `extend` definition), or defaulted
		// by us to simply call `super()`.
		if ( protoProps && protoProps.hasOwnProperty( 'constructor' ) ) {
			child = protoProps.constructor;
		} else {
			child = function() {
				// Storing the result `super()` before returning the value
				// prevents a bug in Opera where, if the constructor returns
				// a function, Opera will reject the return value in favor of
				// the original object. This causes all sorts of trouble.
				var result = parent.apply( this, arguments );
				return result;
			};
		}

		// Inherit class (static) properties from parent.
		$.extend( child, parent );

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		ctor.prototype  = parent.prototype;
		child.prototype = new ctor();

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if ( protoProps )
			$.extend( child.prototype, protoProps );

		// Add static properties to the constructor function, if supplied.
		if ( staticProps )
			$.extend( child, staticProps );

		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;

		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;

		return child;
	};

	/**
	 * Base class for object inheritance.
	 */
	api.Class = function( applicator, argsArray, options ) {
		var magic, args = arguments;

		if ( applicator && argsArray && api.Class.applicator === applicator ) {
			args = argsArray;
			$.extend( this, options || {} );
		}

		magic = this;

		/*
		 * If the class has a method called "instance",
		 * the return value from the class' constructor will be a function that
		 * calls the "instance" method.
		 *
		 * It is also an object that has properties and methods inside it.
		 */
		if ( this.instance ) {
			magic = function() {
				return magic.instance.apply( magic, arguments );
			};

			$.extend( magic, this );
		}

		magic.initialize.apply( magic, args );
		return magic;
	};

	/**
	 * Creates a subclass of the class.
	 *
	 * @param  object protoProps  Properties to apply to the prototype.
	 * @param  object staticProps Properties to apply directly to the class.
	 * @return child              The subclass.
	 */
	api.Class.extend = function( protoProps, classProps ) {
		var child = inherits( this, protoProps, classProps );
		child.extend = this.extend;
		return child;
	};

	api.Class.applicator = {};

	/**
	 * Initialize a class instance.
	 *
	 * Override this function in a subclass as needed.
	 */
	api.Class.prototype.initialize = function() {};

	/*
	 * Checks whether a given instance extended a constructor.
	 *
	 * The magic surrounding the instance parameter causes the instanceof
	 * keyword to return inaccurate results; it defaults to the function's
	 * prototype instead of the constructor chain. Hence this function.
	 */
	api.Class.prototype.extended = function( constructor ) {
		var proto = this;

		while ( typeof proto.constructor !== 'undefined' ) {
			if ( proto.constructor === constructor )
				return true;
			if ( typeof proto.constructor.__super__ === 'undefined' )
				return false;
			proto = proto.constructor.__super__;
		}
		return false;
	};

	/**
	 * An events manager object, offering the ability to bind to and trigger events.
	 *
	 * Used as a mixin.
	 */
	api.Events = {
		trigger: function( id ) {
			if ( this.topics && this.topics[ id ] )
				this.topics[ id ].fireWith( this, slice.call( arguments, 1 ) );
			return this;
		},

		bind: function( id ) {
			this.topics = this.topics || {};
			this.topics[ id ] = this.topics[ id ] || $.Callbacks();
			this.topics[ id ].add.apply( this.topics[ id ], slice.call( arguments, 1 ) );
			return this;
		},

		unbind: function( id ) {
			if ( this.topics && this.topics[ id ] )
				this.topics[ id ].remove.apply( this.topics[ id ], slice.call( arguments, 1 ) );
			return this;
		}
	};

	/**
	 * Observable values that support two-way binding.
	 *
	 * @constuctor
	 */
	api.Value = api.Class.extend({
		/**
		 * @param {mixed}  initial The initial value.
		 * @param {object} options
		 */
		initialize: function( initial, options ) {
			this._value = initial; // @todo: potentially change this to a this.set() call.
			this.callbacks = $.Callbacks();
			this._dirty = false;

			$.extend( this, options || {} );

			this.set = $.proxy( this.set, this );
		},

		/*
		 * Magic. Returns a function that will become the instance.
		 * Set to null to prevent the instance from extending a function.
		 */
		instance: function() {
			return arguments.length ? this.set.apply( this, arguments ) : this.get();
		},

		/**
		 * Get the value.
		 *
		 * @return {mixed}
		 */
		get: function() {
			return this._value;
		},

		/**
		 * Set the value and trigger all bound callbacks.
		 *
		 * @param {object} to New value.
		 */
		set: function( to ) {
			var from = this._value;

			to = this._setter.apply( this, arguments );
			to = this.validate( to );

			// Bail if the sanitized value is null or unchanged.
			if ( null === to || _.isEqual( from, to ) ) {
				return this;
			}

			this._value = to;
			this._dirty = true;

			this.callbacks.fireWith( this, [ to, from ] );

			return this;
		},

		_setter: function( to ) {
			return to;
		},

		setter: function( callback ) {
			var from = this.get();
			this._setter = callback;
			// Temporarily clear value so setter can decide if it's valid.
			this._value = null;
			this.set( from );
			return this;
		},

		resetSetter: function() {
			this._setter = this.constructor.prototype._setter;
			this.set( this.get() );
			return this;
		},

		validate: function( value ) {
			return value;
		},

		/**
		 * Bind a function to be invoked whenever the value changes.
		 *
		 * @param {...Function} A function, or multiple functions, to add to the callback stack.
		 */
		bind: function() {
			this.callbacks.add.apply( this.callbacks, arguments );
			return this;
		},

		/**
		 * Unbind a previously bound function.
		 *
		 * @param {...Function} A function, or multiple functions, to remove from the callback stack.
		 */
		unbind: function() {
			this.callbacks.remove.apply( this.callbacks, arguments );
			return this;
		},

		link: function() { // values*
			var set = this.set;
			$.each( arguments, function() {
				this.bind( set );
			});
			return this;
		},

		unlink: function() { // values*
			var set = this.set;
			$.each( arguments, function() {
				this.unbind( set );
			});
			return this;
		},

		sync: function() { // values*
			var that = this;
			$.each( arguments, function() {
				that.link( this );
				this.link( that );
			});
			return this;
		},

		unsync: function() { // values*
			var that = this;
			$.each( arguments, function() {
				that.unlink( this );
				this.unlink( that );
			});
			return this;
		}
	});

	/**
	 * A collection of observable values.
	 *
	 * @constuctor
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Values = api.Class.extend({

		/**
		 * The default constructor for items of the collection.
		 *
		 * @type {object}
		 */
		defaultConstructor: api.Value,

		initialize: function( options ) {
			$.extend( this, options || {} );

			this._value = {};
			this._deferreds = {};
		},

		/**
		 * Get the instance of an item from the collection if only ID is specified.
		 *
		 * If more than one argument is supplied, all are expected to be IDs and
		 * the last to be a function callback that will be invoked when the requested
		 * items are available.
		 *
		 * @see {api.Values.when}
		 *
		 * @param  {string}   id ID of the item.
		 * @param  {...}         Zero or more IDs of items to wait for and a callback
		 *                       function to invoke when they're available. Optional.
		 * @return {mixed}    The item instance if only one ID was supplied.
		 *                    A Deferred Promise object if a callback function is supplied.
		 */
		instance: function( id ) {
			if ( arguments.length === 1 )
				return this.value( id );

			return this.when.apply( this, arguments );
		},

		/**
		 * Get the instance of an item.
		 *
		 * @param  {string} id The ID of the item.
		 * @return {[type]}    [description]
		 */
		value: function( id ) {
			return this._value[ id ];
		},

		/**
		 * Whether the collection has an item with the given ID.
		 *
		 * @param  {string}  id The ID of the item to look for.
		 * @return {Boolean}
		 */
		has: function( id ) {
			return typeof this._value[ id ] !== 'undefined';
		},

		/**
		 * Add an item to the collection.
		 *
		 * @param {string} id    The ID of the item.
		 * @param {mixed}  value The item instance.
		 * @return {mixed} The new item's instance.
		 */
		add: function( id, value ) {
			if ( this.has( id ) )
				return this.value( id );

			this._value[ id ] = value;
			value.parent = this;

			// Propagate a 'change' event on an item up to the collection.
			if ( value.extended( api.Value ) )
				value.bind( this._change );

			this.trigger( 'add', value );

			// If a deferred object exists for this item,
			// resolve it.
			if ( this._deferreds[ id ] )
				this._deferreds[ id ].resolve();

			return this._value[ id ];
		},

		/**
		 * Create a new item of the collection using the collection's default constructor
		 * and store it in the collection.
		 *
		 * @param  {string} id    The ID of the item.
		 * @param  {mixed}  value Any extra arguments are passed into the item's initialize method.
		 * @return {mixed}  The new item's instance.
		 */
		create: function( id ) {
			return this.add( id, new this.defaultConstructor( api.Class.applicator, slice.call( arguments, 1 ) ) );
		},

		/**
		 * Iterate over all items in the collection invoking the provided callback.
		 *
		 * @param  {Function} callback Function to invoke.
		 * @param  {object}   context  Object context to invoke the function with. Optional.
		 */
		each: function( callback, context ) {
			context = typeof context === 'undefined' ? this : context;

			$.each( this._value, function( key, obj ) {
				callback.call( context, obj, key );
			});
		},

		/**
		 * Remove an item from the collection.
		 *
		 * @param  {string} id The ID of the item to remove.
		 */
		remove: function( id ) {
			var value;

			if ( this.has( id ) ) {
				value = this.value( id );
				this.trigger( 'remove', value );
				if ( value.extended( api.Value ) )
					value.unbind( this._change );
				delete value.parent;
			}

			delete this._value[ id ];
			delete this._deferreds[ id ];
		},

		/**
		 * Runs a callback once all requested values exist.
		 *
		 * when( ids*, [callback] );
		 *
		 * For example:
		 *     when( id1, id2, id3, function( value1, value2, value3 ) {} );
		 *
		 * @returns $.Deferred.promise();
		 */
		when: function() {
			var self = this,
				ids  = slice.call( arguments ),
				dfd  = $.Deferred();

			// If the last argument is a callback, bind it to .done()
			if ( $.isFunction( ids[ ids.length - 1 ] ) )
				dfd.done( ids.pop() );

			/*
			 * Create a stack of deferred objects for each item that is not
			 * yet available, and invoke the supplied callback when they are.
			 */
			$.when.apply( $, $.map( ids, function( id ) {
				if ( self.has( id ) )
					return;

				/*
				 * The requested item is not available yet, create a deferred
				 * object to resolve when it becomes available.
				 */
				return self._deferreds[ id ] = self._deferreds[ id ] || $.Deferred();
			})).done( function() {
				var values = $.map( ids, function( id ) {
						return self( id );
					});

				// If a value is missing, we've used at least one expired deferred.
				// Call Values.when again to generate a new deferred.
				if ( values.length !== ids.length ) {
					// ids.push( callback );
					self.when.apply( self, ids ).done( function() {
						dfd.resolveWith( self, values );
					});
					return;
				}

				dfd.resolveWith( self, values );
			});

			return dfd.promise();
		},

		/**
		 * A helper function to propagate a 'change' event from an item
		 * to the collection itself.
		 */
		_change: function() {
			this.parent.trigger( 'change', this );
		}
	});

	// Create a global events bus on the Customizer.
	$.extend( api.Values.prototype, api.Events );


	/**
	 * Cast a string to a jQuery collection if it isn't already.
	 *
	 * @param {string|jQuery collection} element
	 */
	api.ensure = function( element ) {
		return typeof element == 'string' ? $( element ) : element;
	};

	/**
	 * An observable value that syncs with an element.
	 *
	 * Handles inputs, selects, and textareas by default.
	 *
	 * @constuctor
	 * @augments wp.customize.Value
	 * @augments wp.customize.Class
	 */
	api.Element = api.Value.extend({
		initialize: function( element, options ) {
			var self = this,
				synchronizer = api.Element.synchronizer.html,
				type, update, refresh;

			this.element = api.ensure( element );
			this.events = '';

			if ( this.element.is('input, select, textarea') ) {
				this.events += 'change';
				synchronizer = api.Element.synchronizer.val;

				if ( this.element.is('input') ) {
					type = this.element.prop('type');
					if ( api.Element.synchronizer[ type ] ) {
						synchronizer = api.Element.synchronizer[ type ];
					}
					if ( 'text' === type || 'password' === type ) {
						this.events += ' keyup';
					} else if ( 'range' === type ) {
						this.events += ' input propertychange';
					}
				} else if ( this.element.is('textarea') ) {
					this.events += ' keyup';
				}
			}

			api.Value.prototype.initialize.call( this, null, $.extend( options || {}, synchronizer ) );
			this._value = this.get();

			update  = this.update;
			refresh = this.refresh;

			this.update = function( to ) {
				if ( to !== refresh.call( self ) )
					update.apply( this, arguments );
			};
			this.refresh = function() {
				self.set( refresh.call( self ) );
			};

			this.bind( this.update );
			this.element.bind( this.events, this.refresh );
		},

		find: function( selector ) {
			return $( selector, this.element );
		},

		refresh: function() {},

		update: function() {}
	});

	api.Element.synchronizer = {};

	$.each( [ 'html', 'val' ], function( index, method ) {
		api.Element.synchronizer[ method ] = {
			update: function( to ) {
				this.element[ method ]( to );
			},
			refresh: function() {
				return this.element[ method ]();
			}
		};
	});

	api.Element.synchronizer.checkbox = {
		update: function( to ) {
			this.element.prop( 'checked', to );
		},
		refresh: function() {
			return this.element.prop( 'checked' );
		}
	};

	api.Element.synchronizer.radio = {
		update: function( to ) {
			this.element.filter( function() {
				return this.value === to;
			}).prop( 'checked', true );
		},
		refresh: function() {
			return this.element.filter( ':checked' ).val();
		}
	};

	$.support.postMessage = !! window.postMessage;

	/**
	 * A communicator for sending data from one window to another over postMessage.
	 *
	 * @constuctor
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Messenger = api.Class.extend({
		/**
		 * Create a new Value.
		 *
		 * @param  {string} key     Unique identifier.
		 * @param  {mixed}  initial Initial value.
		 * @param  {mixed}  options Options hash. Optional.
		 * @return {Value}          Class instance of the Value.
		 */
		add: function( key, initial, options ) {
			return this[ key ] = new api.Value( initial, options );
		},

		/**
		 * Initialize Messenger.
		 *
		 * @param  {object} params        Parameters to configure the messenger.
		 *         {string} .url          The URL to communicate with.
		 *         {window} .targetWindow The window instance to communicate with. Default window.parent.
		 *         {string} .channel      If provided, will send the channel with each message and only accept messages a matching channel.
		 * @param  {object} options       Extend any instance parameter or method with this object.
		 */
		initialize: function( params, options ) {
			// Target the parent frame by default, but only if a parent frame exists.
			var defaultTarget = window.parent == window ? null : window.parent;

			$.extend( this, options || {} );

			this.add( 'channel', params.channel );
			this.add( 'url', params.url || '' );
			this.add( 'origin', this.url() ).link( this.url ).setter( function( to ) {
				return to.replace( /([^:]+:\/\/[^\/]+).*/, '$1' );
			});

			// first add with no value
			this.add( 'targetWindow', null );
			// This avoids SecurityErrors when setting a window object in x-origin iframe'd scenarios.
			this.targetWindow.set = function( to ) {
				var from = this._value;

				to = this._setter.apply( this, arguments );
				to = this.validate( to );

				if ( null === to || from === to ) {
					return this;
				}

				this._value = to;
				this._dirty = true;

				this.callbacks.fireWith( this, [ to, from ] );

				return this;
			};
			// now set it
			this.targetWindow( params.targetWindow || defaultTarget );


			// Since we want jQuery to treat the receive function as unique
			// to this instance, we give the function a new guid.
			//
			// This will prevent every Messenger's receive function from being
			// unbound when calling $.off( 'message', this.receive );
			this.receive = $.proxy( this.receive, this );
			this.receive.guid = $.guid++;

			$( window ).on( 'message', this.receive );
		},

		destroy: function() {
			$( window ).off( 'message', this.receive );
		},

		/**
		 * Receive data from the other window.
		 *
		 * @param  {jQuery.Event} event Event with embedded data.
		 */
		receive: function( event ) {
			var message;

			event = event.originalEvent;

			if ( ! this.targetWindow || ! this.targetWindow() ) {
				return;
			}

			// Check to make sure the origin is valid.
			if ( this.origin() && event.origin !== this.origin() )
				return;

			// Ensure we have a string that's JSON.parse-able
			if ( typeof event.data !== 'string' || event.data[0] !== '{' ) {
				return;
			}

			message = JSON.parse( event.data );

			// Check required message properties.
			if ( ! message || ! message.id || typeof message.data === 'undefined' )
				return;

			// Check if channel names match.
			if ( ( message.channel || this.channel() ) && this.channel() !== message.channel )
				return;

			this.trigger( message.id, message.data );
		},

		/**
		 * Send data to the other window.
		 *
		 * @param  {string} id   The event name.
		 * @param  {object} data Data.
		 */
		send: function( id, data ) {
			var message;

			data = typeof data === 'undefined' ? null : data;

			if ( ! this.url() || ! this.targetWindow() )
				return;

			message = { id: id, data: data };
			if ( this.channel() )
				message.channel = this.channel();

			this.targetWindow().postMessage( JSON.stringify( message ), this.origin() );
		}
	});

	// Add the Events mixin to api.Messenger.
	$.extend( api.Messenger.prototype, api.Events );

	// The main API object is also a collection of all customizer settings.
	api = $.extend( new api.Values(), api );

	/**
	 * Get all customize settings.
	 *
	 * @return {object}
	 */
	api.get = function() {
		var result = {};

		this.each( function( obj, key ) {
			result[ key ] = obj.get();
		});

		return result;
	};

	// Expose the API publicly on window.wp.customize
	exports.customize = api;
})( wp, jQuery );
;
/*
 * Script run inside a Customizer preview frame.
 */
(function( exports, $ ){
	var api = wp.customize,
		debounce;

	/**
	 * Returns a debounced version of the function.
	 *
	 * @todo Require Underscore.js for this file and retire this.
	 */
	debounce = function( fn, delay, context ) {
		var timeout;
		return function() {
			var args = arguments;

			context = context || this;

			clearTimeout( timeout );
			timeout = setTimeout( function() {
				timeout = null;
				fn.apply( context, args );
			}, delay );
		};
	};

	/**
	 * @constructor
	 * @augments wp.customize.Messenger
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Preview = api.Messenger.extend({
		/**
		 * @param {object} params  - Parameters to configure the messenger.
		 * @param {object} options - Extend any instance parameter or method with this object.
		 */
		initialize: function( params, options ) {
			var self = this;

			api.Messenger.prototype.initialize.call( this, params, options );

			this.body = $( document.body );
			this.body.on( 'click.preview', 'a', function( event ) {
				var link, isInternalJumpLink;
				link = $( this );
				isInternalJumpLink = ( '#' === link.attr( 'href' ).substr( 0, 1 ) );
				event.preventDefault();

				if ( isInternalJumpLink && '#' !== link.attr( 'href' ) ) {
					$( link.attr( 'href' ) ).each( function() {
						this.scrollIntoView();
					} );
				}

				/*
				 * Note the shift key is checked so shift+click on widgets or
				 * nav menu items can just result on focusing on the corresponding
				 * control instead of also navigating to the URL linked to.
				 */
				if ( event.shiftKey || isInternalJumpLink ) {
					return;
				}
				self.send( 'scroll', 0 );
				self.send( 'url', link.prop( 'href' ) );
			});

			// You cannot submit forms.
			// @todo: Allow form submissions by mixing $_POST data with the customize setting $_POST data.
			this.body.on( 'submit.preview', 'form', function( event ) {
				event.preventDefault();
			});

			this.window = $( window );
			this.window.on( 'scroll.preview', debounce( function() {
				self.send( 'scroll', self.window.scrollTop() );
			}, 200 ));

			this.bind( 'scroll', function( distance ) {
				self.window.scrollTop( distance );
			});
		}
	});

	$( function() {
		var bg, setValue;

		api.settings = window._wpCustomizeSettings;
		if ( ! api.settings ) {
			return;
		}

		api.preview = new api.Preview({
			url: window.location.href,
			channel: api.settings.channel
		});

		/**
		 * Create/update a setting value.
		 *
		 * @param {string}  id            - Setting ID.
		 * @param {*}       value         - Setting value.
		 * @param {boolean} [createDirty] - Whether to create a setting as dirty. Defaults to false.
		 */
		setValue = function( id, value, createDirty ) {
			var setting = api( id );
			if ( setting ) {
				setting.set( value );
			} else {
				createDirty = createDirty || false;
				setting = api.create( id, value, {
					id: id
				} );

				// Mark dynamically-created settings as dirty so they will get posted.
				if ( createDirty ) {
					setting._dirty = true;
				}
			}
		};

		api.preview.bind( 'settings', function( values ) {
			$.each( values, setValue );
		});

		api.preview.trigger( 'settings', api.settings.values );

		$.each( api.settings._dirty, function( i, id ) {
			var setting = api( id );
			if ( setting ) {
				setting._dirty = true;
			}
		} );

		api.preview.bind( 'setting', function( args ) {
			var createDirty = true;
			setValue.apply( null, args.concat( createDirty ) );
		});

		api.preview.bind( 'sync', function( events ) {
			$.each( events, function( event, args ) {
				api.preview.trigger( event, args );
			});
			api.preview.send( 'synced' );
		});

		api.preview.bind( 'active', function() {
			api.preview.send( 'nonce', api.settings.nonce );

			api.preview.send( 'documentTitle', document.title );
		});

		api.preview.bind( 'saved', function( response ) {
			api.trigger( 'saved', response );
		} );

		api.bind( 'saved', function() {
			api.each( function( setting ) {
				setting._dirty = false;
			} );
		} );

		api.preview.bind( 'nonce-refresh', function( nonce ) {
			$.extend( api.settings.nonce, nonce );
		} );

		/*
		 * Send a message to the parent customize frame with a list of which
		 * containers and controls are active.
		 */
		api.preview.send( 'ready', {
			activePanels: api.settings.activePanels,
			activeSections: api.settings.activeSections,
			activeControls: api.settings.activeControls
		} );

		// Display a loading indicator when preview is reloading, and remove on failure.
		api.preview.bind( 'loading-initiated', function () {
			$( 'body' ).addClass( 'wp-customizer-unloading' );
		});
		api.preview.bind( 'loading-failed', function () {
			$( 'body' ).removeClass( 'wp-customizer-unloading' );
		});

		/* Custom Backgrounds */
		bg = $.map(['color', 'image', 'position_x', 'repeat', 'attachment'], function( prop ) {
			return 'background_' + prop;
		});

		api.when.apply( api, bg ).done( function( color, image, position_x, repeat, attachment ) {
			var body = $(document.body),
				head = $('head'),
				style = $('#custom-background-css'),
				update;

			update = function() {
				var css = '';

				// The body will support custom backgrounds if either
				// the color or image are set.
				//
				// See get_body_class() in /wp-includes/post-template.php
				body.toggleClass( 'custom-background', !! ( color() || image() ) );

				if ( color() )
					css += 'background-color: ' + color() + ';';

				if ( image() ) {
					css += 'background-image: url("' + image() + '");';
					css += 'background-position: top ' + position_x() + ';';
					css += 'background-repeat: ' + repeat() + ';';
					css += 'background-attachment: ' + attachment() + ';';
				}

				// Refresh the stylesheet by removing and recreating it.
				style.remove();
				style = $('<style type="text/css" id="custom-background-css">body.custom-background { ' + css + ' }</style>').appendTo( head );
			};

			$.each( arguments, function() {
				this.bind( update );
			});
		});

		/**
		 * Custom Logo
		 *
		 * Toggle the wp-custom-logo body class when a logo is added or removed.
		 *
		 * @since 4.5.0
		 */
		api( 'custom_logo', function( setting ) {
			$( 'body' ).toggleClass( 'wp-custom-logo', !! setting.get() );
			setting.bind( function( attachmentId ) {
				$( 'body' ).toggleClass( 'wp-custom-logo', !! attachmentId );
			} );
		} );

		api.trigger( 'preview-ready' );
	});

})( wp, jQuery );
;
( function ( $ ) {

	$( document ).on( 'click', '.wpcw-widgets', function() {

		wp.customize.WidgetCustomizerPreview.preview.send( 'focus-widget-control', $( this ).prop( 'id' ) );

	});

} )( jQuery );
;
/* global _wpUtilSettings */
window.wp = window.wp || {};

(function ($) {
	// Check for the utility settings.
	var settings = typeof _wpUtilSettings === 'undefined' ? {} : _wpUtilSettings;

	/**
	 * wp.template( id )
	 *
	 * Fetch a JavaScript template for an id, and return a templating function for it.
	 *
	 * @param  {string} id   A string that corresponds to a DOM element with an id prefixed with "tmpl-".
	 *                       For example, "attachment" maps to "tmpl-attachment".
	 * @return {function}    A function that lazily-compiles the template requested.
	 */
	wp.template = _.memoize(function ( id ) {
		var compiled,
			/*
			 * Underscore's default ERB-style templates are incompatible with PHP
			 * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
			 *
			 * @see trac ticket #22344.
			 */
			options = {
				evaluate:    /<#([\s\S]+?)#>/g,
				interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
				escape:      /\{\{([^\}]+?)\}\}(?!\})/g,
				variable:    'data'
			};

		return function ( data ) {
			compiled = compiled || _.template( $( '#tmpl-' + id ).html(), null, options );
			return compiled( data );
		};
	});

	// wp.ajax
	// ------
	//
	// Tools for sending ajax requests with JSON responses and built in error handling.
	// Mirrors and wraps jQuery's ajax APIs.
	wp.ajax = {
		settings: settings.ajax || {},

		/**
		 * wp.ajax.post( [action], [data] )
		 *
		 * Sends a POST request to WordPress.
		 *
		 * @param  {string} action The slug of the action to fire in WordPress.
		 * @param  {object} data   The data to populate $_POST with.
		 * @return {$.promise}     A jQuery promise that represents the request,
		 *                         decorated with an abort() method.
		 */
		post: function( action, data ) {
			return wp.ajax.send({
				data: _.isObject( action ) ? action : _.extend( data || {}, { action: action })
			});
		},

		/**
		 * wp.ajax.send( [action], [options] )
		 *
		 * Sends a POST request to WordPress.
		 *
		 * @param  {string} action  The slug of the action to fire in WordPress.
		 * @param  {object} options The options passed to jQuery.ajax.
		 * @return {$.promise}      A jQuery promise that represents the request,
		 *                          decorated with an abort() method.
		 */
		send: function( action, options ) {
			var promise, deferred;
			if ( _.isObject( action ) ) {
				options = action;
			} else {
				options = options || {};
				options.data = _.extend( options.data || {}, { action: action });
			}

			options = _.defaults( options || {}, {
				type:    'POST',
				url:     wp.ajax.settings.url,
				context: this
			});

			deferred = $.Deferred( function( deferred ) {
				// Transfer success/error callbacks.
				if ( options.success )
					deferred.done( options.success );
				if ( options.error )
					deferred.fail( options.error );

				delete options.success;
				delete options.error;

				// Use with PHP's wp_send_json_success() and wp_send_json_error()
				deferred.jqXHR = $.ajax( options ).done( function( response ) {
					// Treat a response of `1` as successful for backwards
					// compatibility with existing handlers.
					if ( response === '1' || response === 1 )
						response = { success: true };

					if ( _.isObject( response ) && ! _.isUndefined( response.success ) )
						deferred[ response.success ? 'resolveWith' : 'rejectWith' ]( this, [response.data] );
					else
						deferred.rejectWith( this, [response] );
				}).fail( function() {
					deferred.rejectWith( this, arguments );
				});
			});

			promise = deferred.promise();
			promise.abort = function() {
				deferred.jqXHR.abort();
				return this;
			};

			return promise;
		}
	};

}(jQuery));
;
/* global jQuery, JSON, _customizePartialRefreshExports, console */

wp.customize.selectiveRefresh = ( function( $, api ) {
	'use strict';
	var self, Partial, Placement;

	self = {
		ready: $.Deferred(),
		data: {
			partials: {},
			renderQueryVar: '',
			l10n: {
				shiftClickToEdit: ''
			},
			refreshBuffer: 250
		},
		currentRequest: null
	};

	_.extend( self, api.Events );

	/**
	 * A Customizer Partial.
	 *
	 * A partial provides a rendering of one or more settings according to a template.
	 *
	 * @see PHP class WP_Customize_Partial.
	 *
	 * @class
	 * @augments wp.customize.Class
	 * @since 4.5.0
	 *
	 * @param {string} id                              Unique identifier for the control instance.
	 * @param {object} options                         Options hash for the control instance.
	 * @param {object} options.params
	 * @param {string} options.params.type             Type of partial (e.g. nav_menu, widget, etc)
	 * @param {string} options.params.selector         jQuery selector to find the container element in the page.
	 * @param {array}  options.params.settings         The IDs for the settings the partial relates to.
	 * @param {string} options.params.primarySetting   The ID for the primary setting the partial renders.
	 * @param {bool}   options.params.fallbackRefresh  Whether to refresh the entire preview in case of a partial refresh failure.
	 */
	Partial = self.Partial = api.Class.extend({

		id: null,

		 /**
		 * Constructor.
		 *
		 * @since 4.5.0
		 *
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this;
			options = options || {};
			partial.id = id;

			partial.params = _.extend(
				{
					selector: null,
					settings: [],
					primarySetting: null,
					containerInclusive: false,
					fallbackRefresh: true // Note this needs to be false in a front-end editing context.
				},
				options.params || {}
			);

			partial.deferred = {};
			partial.deferred.ready = $.Deferred();

			partial.deferred.ready.done( function() {
				partial.ready();
			} );
		},

		/**
		 * Set up the partial.
		 *
		 * @since 4.5.0
		 */
		ready: function() {
			var partial = this;
			_.each( _.pluck( partial.placements(), 'container' ), function( container ) {
				$( container ).attr( 'title', self.data.l10n.shiftClickToEdit );
			} );
			$( document ).on( 'click', partial.params.selector, function( e ) {
				if ( ! e.shiftKey ) {
					return;
				}
				e.preventDefault();
				_.each( partial.placements(), function( placement ) {
					if ( $( placement.container ).is( e.currentTarget ) ) {
						partial.showControl();
					}
				} );
			} );
		},

		/**
		 * Find all placements for this partial int he document.
		 *
		 * @since 4.5.0
		 *
		 * @return {Array.<Placement>}
		 */
		placements: function() {
			var partial = this, selector;

			selector = partial.params.selector || '';
			if ( selector ) {
				selector += ', ';
			}
			selector += '[data-customize-partial-id="' + partial.id + '"]'; // @todo Consider injecting customize-partial-id-${id} classnames instead.

			return $( selector ).map( function() {
				var container = $( this ), context;

				context = container.data( 'customize-partial-placement-context' );
				if ( _.isString( context ) && '{' === context.substr( 0, 1 ) ) {
					throw new Error( 'context JSON parse error' );
				}

				return new Placement( {
					partial: partial,
					container: container,
					context: context
				} );
			} ).get();
		},

		/**
		 * Get list of setting IDs related to this partial.
		 *
		 * @since 4.5.0
		 *
		 * @return {String[]}
		 */
		settings: function() {
			var partial = this;
			if ( partial.params.settings && 0 !== partial.params.settings.length ) {
				return partial.params.settings;
			} else if ( partial.params.primarySetting ) {
				return [ partial.params.primarySetting ];
			} else {
				return [ partial.id ];
			}
		},

		/**
		 * Return whether the setting is related to the partial.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value|string} setting  ID or object for setting.
		 * @return {boolean} Whether the setting is related to the partial.
		 */
		isRelatedSetting: function( setting /*... newValue, oldValue */ ) {
			var partial = this;
			if ( _.isString( setting ) ) {
				setting = api( setting );
			}
			if ( ! setting ) {
				return false;
			}
			return -1 !== _.indexOf( partial.settings(), setting.id );
		},

		/**
		 * Show the control to modify this partial's setting(s).
		 *
		 * This may be overridden for inline editing.
		 *
		 * @since 4.5.0
		 */
		showControl: function() {
			var partial = this, settingId = partial.params.primarySetting;
			if ( ! settingId ) {
				settingId = _.first( partial.settings() );
			}
			api.preview.send( 'focus-control-for-setting', settingId );
		},

		/**
		 * Prepare container for selective refresh.
		 *
		 * @since 4.5.0
		 *
		 * @param {Placement} placement
		 */
		preparePlacement: function( placement ) {
			$( placement.container ).addClass( 'customize-partial-refreshing' );
		},

		/**
		 * Reference to the pending promise returned from self.requestPartial().
		 *
		 * @since 4.5.0
		 * @private
		 */
		_pendingRefreshPromise: null,

		/**
		 * Request the new partial and render it into the placements.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.selectiveRefresh.Partial}
		 * @return {jQuery.Promise}
		 */
		refresh: function() {
			var partial = this, refreshPromise;

			refreshPromise = self.requestPartial( partial );

			if ( ! partial._pendingRefreshPromise ) {
				_.each( partial.placements(), function( placement ) {
					partial.preparePlacement( placement );
				} );

				refreshPromise.done( function( placements ) {
					_.each( placements, function( placement ) {
						partial.renderContent( placement );
					} );
				} );

				refreshPromise.fail( function( data, placements ) {
					partial.fallback( data, placements );
				} );

				// Allow new request when this one finishes.
				partial._pendingRefreshPromise = refreshPromise;
				refreshPromise.always( function() {
					partial._pendingRefreshPromise = null;
				} );
			}

			return refreshPromise;
		},

		/**
		 * Apply the addedContent in the placement to the document.
		 *
		 * Note the placement object will have its container and removedNodes
		 * properties updated.
		 *
		 * @since 4.5.0
		 *
		 * @param {Placement}             placement
		 * @param {Element|jQuery}        [placement.container]  - This param will be empty if there was no element matching the selector.
		 * @param {string|object|boolean} placement.addedContent - Rendered HTML content, a data object for JS templates to render, or false if no render.
		 * @param {object}                [placement.context]    - Optional context information about the container.
		 * @returns {boolean} Whether the rendering was successful and the fallback was not invoked.
		 */
		renderContent: function( placement ) {
			var partial = this, content, newContainerElement;
			if ( ! placement.container ) {
				partial.fallback( new Error( 'no_container' ), [ placement ] );
				return false;
			}
			placement.container = $( placement.container );
			if ( false === placement.addedContent ) {
				partial.fallback( new Error( 'missing_render' ), [ placement ] );
				return false;
			}

			// Currently a subclass needs to override renderContent to handle partials returning data object.
			if ( ! _.isString( placement.addedContent ) ) {
				partial.fallback( new Error( 'non_string_content' ), [ placement ] );
				return false;
			}

			/* jshint ignore:start */
			self.orginalDocumentWrite = document.write;
			document.write = function() {
				throw new Error( self.data.l10n.badDocumentWrite );
			};
			/* jshint ignore:end */
			try {
				content = placement.addedContent;
				if ( wp.emoji && wp.emoji.parse && ! $.contains( document.head, placement.container[0] ) ) {
					content = wp.emoji.parse( content );
				}

				if ( partial.params.containerInclusive ) {

					// Note that content may be an empty string, and in this case jQuery will just remove the oldContainer
					newContainerElement = $( content );

					// Merge the new context on top of the old context.
					placement.context = _.extend(
						placement.context,
						newContainerElement.data( 'customize-partial-placement-context' ) || {}
					);
					newContainerElement.data( 'customize-partial-placement-context', placement.context );

					placement.removedNodes = placement.container;
					placement.container = newContainerElement;
					placement.removedNodes.replaceWith( placement.container );
					placement.container.attr( 'title', self.data.l10n.shiftClickToEdit );
				} else {
					placement.removedNodes = document.createDocumentFragment();
					while ( placement.container[0].firstChild ) {
						placement.removedNodes.appendChild( placement.container[0].firstChild );
					}

					placement.container.html( content );
				}

				placement.container.removeClass( 'customize-render-content-error' );
			} catch ( error ) {
				if ( 'undefined' !== typeof console && console.error ) {
					console.error( partial.id, error );
				}
			}
			/* jshint ignore:start */
			document.write = self.orginalDocumentWrite;
			self.orginalDocumentWrite = null;
			/* jshint ignore:end */

			placement.container.removeClass( 'customize-partial-refreshing' );

			// Prevent placement container from being being re-triggered as being rendered among nested partials.
			placement.container.data( 'customize-partial-content-rendered', true );

			/**
			 * Announce when a partial's placement has been rendered so that dynamic elements can be re-built.
			 */
			self.trigger( 'partial-content-rendered', placement );
			return true;
		},

		/**
		 * Handle fail to render partial.
		 *
		 * The first argument is either the failing jqXHR or an Error object, and the second argument is the array of containers.
		 *
		 * @since 4.5.0
		 */
		fallback: function() {
			var partial = this;
			if ( partial.params.fallbackRefresh ) {
				self.requestFullRefresh();
			}
		}
	} );

	/**
	 * A Placement for a Partial.
	 *
	 * A partial placement is the actual physical representation of a partial for a given context.
	 * It also may have information in relation to how a placement may have just changed.
	 * The placement is conceptually similar to a DOM Range or MutationRecord.
	 *
	 * @class
	 * @augments wp.customize.Class
	 * @since 4.5.0
	 */
	self.Placement = Placement = api.Class.extend({

		/**
		 * The partial with which the container is associated.
		 *
		 * @param {wp.customize.selectiveRefresh.Partial}
		 */
		partial: null,

		/**
		 * DOM element which contains the placement's contents.
		 *
		 * This will be null if the startNode and endNode do not point to the same
		 * DOM element, such as in the case of a sidebar partial.
		 * This container element itself will be replaced for partials that
		 * have containerInclusive param defined as true.
		 */
		container: null,

		/**
		 * DOM node for the initial boundary of the placement.
		 *
		 * This will normally be the same as endNode since most placements appear as elements.
		 * This is primarily useful for widget sidebars which do not have intrinsic containers, but
		 * for which an HTML comment is output before to mark the starting position.
		 */
		startNode: null,

		/**
		 * DOM node for the terminal boundary of the placement.
		 *
		 * This will normally be the same as startNode since most placements appear as elements.
		 * This is primarily useful for widget sidebars which do not have intrinsic containers, but
		 * for which an HTML comment is output before to mark the ending position.
		 */
		endNode: null,

		/**
		 * Context data.
		 *
		 * This provides information about the placement which is included in the request
		 * in order to render the partial properly.
		 *
		 * @param {object}
		 */
		context: null,

		/**
		 * The content for the partial when refreshed.
		 *
		 * @param {string}
		 */
		addedContent: null,

		/**
		 * DOM node(s) removed when the partial is refreshed.
		 *
		 * If the partial is containerInclusive, then the removedNodes will be
		 * the single Element that was the partial's former placement. If the
		 * partial is not containerInclusive, then the removedNodes will be a
		 * documentFragment containing the nodes removed.
		 *
		 * @param {Element|DocumentFragment}
		 */
		removedNodes: null,

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 *
		 * @param {object}                   args
		 * @param {Partial}                  args.partial
		 * @param {jQuery|Element}           [args.container]
		 * @param {Node}                     [args.startNode]
		 * @param {Node}                     [args.endNode]
		 * @param {object}                   [args.context]
		 * @param {string}                   [args.addedContent]
		 * @param {jQuery|DocumentFragment}  [args.removedNodes]
		 */
		initialize: function( args ) {
			var placement = this;

			args = _.extend( {}, args || {} );
			if ( ! args.partial || ! args.partial.extended( Partial ) ) {
				throw new Error( 'Missing partial' );
			}
			args.context = args.context || {};
			if ( args.container ) {
				args.container = $( args.container );
			}

			_.extend( placement, args );
		}

	});

	/**
	 * Mapping of type names to Partial constructor subclasses.
	 *
	 * @since 4.5.0
	 *
	 * @type {Object.<string, wp.customize.selectiveRefresh.Partial>}
	 */
	self.partialConstructor = {};

	self.partial = new api.Values({ defaultConstructor: Partial });

	/**
	 * Get the POST vars for a Customizer preview request.
	 *
	 * @since 4.5.0
	 * @see wp.customize.previewer.query()
	 *
	 * @return {object}
	 */
	self.getCustomizeQuery = function() {
		var dirtyCustomized = {};
		api.each( function( value, key ) {
			if ( value._dirty ) {
				dirtyCustomized[ key ] = value();
			}
		} );

		return {
			wp_customize: 'on',
			nonce: api.settings.nonce.preview,
			theme: api.settings.theme.stylesheet,
			customized: JSON.stringify( dirtyCustomized )
		};
	};

	/**
	 * Currently-requested partials and their associated deferreds.
	 *
	 * @since 4.5.0
	 * @type {Object<string, { deferred: jQuery.Promise, partial: wp.customize.selectiveRefresh.Partial }>}
	 */
	self._pendingPartialRequests = {};

	/**
	 * Timeout ID for the current requesr, or null if no request is current.
	 *
	 * @since 4.5.0
	 * @type {number|null}
	 * @private
	 */
	self._debouncedTimeoutId = null;

	/**
	 * Current jqXHR for the request to the partials.
	 *
	 * @since 4.5.0
	 * @type {jQuery.jqXHR|null}
	 * @private
	 */
	self._currentRequest = null;

	/**
	 * Request full page refresh.
	 *
	 * When selective refresh is embedded in the context of front-end editing, this request
	 * must fail or else changes will be lost, unless transactions are implemented.
	 *
	 * @since 4.5.0
	 */
	self.requestFullRefresh = function() {
		api.preview.send( 'refresh' );
	};

	/**
	 * Request a re-rendering of a partial.
	 *
	 * @since 4.5.0
	 *
	 * @param {wp.customize.selectiveRefresh.Partial} partial
	 * @return {jQuery.Promise}
	 */
	self.requestPartial = function( partial ) {
		var partialRequest;

		if ( self._debouncedTimeoutId ) {
			clearTimeout( self._debouncedTimeoutId );
			self._debouncedTimeoutId = null;
		}
		if ( self._currentRequest ) {
			self._currentRequest.abort();
			self._currentRequest = null;
		}

		partialRequest = self._pendingPartialRequests[ partial.id ];
		if ( ! partialRequest || 'pending' !== partialRequest.deferred.state() ) {
			partialRequest = {
				deferred: $.Deferred(),
				partial: partial
			};
			self._pendingPartialRequests[ partial.id ] = partialRequest;
		}

		// Prevent leaking partial into debounced timeout callback.
		partial = null;

		self._debouncedTimeoutId = setTimeout(
			function() {
				var data, partialPlacementContexts, partialsPlacements, request;

				self._debouncedTimeoutId = null;
				data = self.getCustomizeQuery();

				/*
				 * It is key that the containers be fetched exactly at the point of the request being
				 * made, because the containers need to be mapped to responses by array indices.
				 */
				partialsPlacements = {};

				partialPlacementContexts = {};

				_.each( self._pendingPartialRequests, function( pending, partialId ) {
					partialsPlacements[ partialId ] = pending.partial.placements();
					if ( ! self.partial.has( partialId ) ) {
						pending.deferred.rejectWith( pending.partial, [ new Error( 'partial_removed' ), partialsPlacements[ partialId ] ] );
					} else {
						/*
						 * Note that this may in fact be an empty array. In that case, it is the responsibility
						 * of the Partial subclass instance to know where to inject the response, or else to
						 * just issue a refresh (default behavior). The data being returned with each container
						 * is the context information that may be needed to render certain partials, such as
						 * the contained sidebar for rendering widgets or what the nav menu args are for a menu.
						 */
						partialPlacementContexts[ partialId ] = _.map( partialsPlacements[ partialId ], function( placement ) {
							return placement.context || {};
						} );
					}
				} );

				data.partials = JSON.stringify( partialPlacementContexts );
				data[ self.data.renderQueryVar ] = '1';

				request = self._currentRequest = wp.ajax.send( null, {
					data: data,
					url: api.settings.url.self
				} );

				request.done( function( data ) {

					/**
					 * Announce the data returned from a request to render partials.
					 *
					 * The data is filtered on the server via customize_render_partials_response
					 * so plugins can inject data from the server to be utilized
					 * on the client via this event. Plugins may use this filter
					 * to communicate script and style dependencies that need to get
					 * injected into the page to support the rendered partials.
					 * This is similar to the 'saved' event.
					 */
					self.trigger( 'render-partials-response', data );

					// Relay errors (warnings) captured during rendering and relay to console.
					if ( data.errors && 'undefined' !== typeof console && console.warn ) {
						_.each( data.errors, function( error ) {
							console.warn( error );
						} );
					}

					/*
					 * Note that data is an array of items that correspond to the array of
					 * containers that were submitted in the request. So we zip up the
					 * array of containers with the array of contents for those containers,
					 * and send them into .
					 */
					_.each( self._pendingPartialRequests, function( pending, partialId ) {
						var placementsContents;
						if ( ! _.isArray( data.contents[ partialId ] ) ) {
							pending.deferred.rejectWith( pending.partial, [ new Error( 'unrecognized_partial' ), partialsPlacements[ partialId ] ] );
						} else {
							placementsContents = _.map( data.contents[ partialId ], function( content, i ) {
								var partialPlacement = partialsPlacements[ partialId ][ i ];
								if ( partialPlacement ) {
									partialPlacement.addedContent = content;
								} else {
									partialPlacement = new Placement( {
										partial: pending.partial,
										addedContent: content
									} );
								}
								return partialPlacement;
							} );
							pending.deferred.resolveWith( pending.partial, [ placementsContents ] );
						}
					} );
					self._pendingPartialRequests = {};
				} );

				request.fail( function( data, statusText ) {

					/*
					 * Ignore failures caused by partial.currentRequest.abort()
					 * The pending deferreds will remain in self._pendingPartialRequests
					 * for re-use with the next request.
					 */
					if ( 'abort' === statusText ) {
						return;
					}

					_.each( self._pendingPartialRequests, function( pending, partialId ) {
						pending.deferred.rejectWith( pending.partial, [ data, partialsPlacements[ partialId ] ] );
					} );
					self._pendingPartialRequests = {};
				} );
			},
			self.data.refreshBuffer
		);

		return partialRequest.deferred.promise();
	};

	/**
	 * Add partials for any nav menu container elements in the document.
	 *
	 * This method may be called multiple times. Containers that already have been
	 * seen will be skipped.
	 *
	 * @since 4.5.0
	 *
	 * @param {jQuery|HTMLElement} [rootElement]
	 * @param {object}             [options]
	 * @param {boolean=true}       [options.triggerRendered]
	 */
	self.addPartials = function( rootElement, options ) {
		var containerElements;
		if ( ! rootElement ) {
			rootElement = document.documentElement;
		}
		rootElement = $( rootElement );
		options = _.extend(
			{
				triggerRendered: true
			},
			options || {}
		);

		containerElements = rootElement.find( '[data-customize-partial-id]' );
		if ( rootElement.is( '[data-customize-partial-id]' ) ) {
			containerElements = containerElements.add( rootElement );
		}
		containerElements.each( function() {
			var containerElement = $( this ), partial, id, Constructor, partialOptions, containerContext;
			id = containerElement.data( 'customize-partial-id' );
			if ( ! id ) {
				return;
			}
			containerContext = containerElement.data( 'customize-partial-placement-context' ) || {};

			partial = self.partial( id );
			if ( ! partial ) {
				partialOptions = containerElement.data( 'customize-partial-options' ) || {};
				partialOptions.constructingContainerContext = containerElement.data( 'customize-partial-placement-context' ) || {};
				Constructor = self.partialConstructor[ containerElement.data( 'customize-partial-type' ) ] || self.Partial;
				partial = new Constructor( id, partialOptions );
				self.partial.add( partial.id, partial );
			}

			/*
			 * Only trigger renders on (nested) partials that have been not been
			 * handled yet. An example where this would apply is a nav menu
			 * embedded inside of a custom menu widget. When the widget's title
			 * is updated, the entire widget will re-render and then the event
			 * will be triggered for the nested nav menu to do any initialization.
			 */
			if ( options.triggerRendered && ! containerElement.data( 'customize-partial-content-rendered' ) ) {

				/**
				 * Announce when a partial's nested placement has been re-rendered.
				 */
				self.trigger( 'partial-content-rendered', new Placement( {
					partial: partial,
					context: containerContext,
					container: containerElement
				} ) );
			}
			containerElement.data( 'customize-partial-content-rendered', true );
		} );
	};

	api.bind( 'preview-ready', function() {
		var handleSettingChange, watchSettingChange, unwatchSettingChange;

		// Polyfill for IE8 to support the document.head attribute.
		if ( ! document.head ) {
			document.head = $( 'head:first' )[0];
		}

		_.extend( self.data, _customizePartialRefreshExports );

		// Create the partial JS models.
		_.each( self.data.partials, function( data, id ) {
			var Constructor, partial = self.partial( id );
			if ( ! partial ) {
				Constructor = self.partialConstructor[ data.type ] || self.Partial;
				partial = new Constructor( id, { params: data } );
				self.partial.add( id, partial );
			} else {
				_.extend( partial.params, data );
			}
		} );

		/**
		 * Handle change to a setting.
		 *
		 * Note this is largely needed because adding a 'change' event handler to wp.customize
		 * will only include the changed setting object as an argument, not including the
		 * new value or the old value.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Setting}
		 *
		 * @param {*|null} newValue New value, or null if the setting was just removed.
		 * @param {*|null} oldValue Old value, or null if the setting was just added.
		 */
		handleSettingChange = function( newValue, oldValue ) {
			var setting = this;
			self.partial.each( function( partial ) {
				if ( partial.isRelatedSetting( setting, newValue, oldValue ) ) {
					partial.refresh();
				}
			} );
		};

		/**
		 * Trigger the initial change for the added setting, and watch for changes.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Values}
		 *
		 * @param {wp.customize.Setting} setting
		 */
		watchSettingChange = function( setting ) {
			handleSettingChange.call( setting, setting(), null );
			setting.bind( handleSettingChange );
		};

		/**
		 * Trigger the final change for the removed setting, and unwatch for changes.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Values}
		 *
		 * @param {wp.customize.Setting} setting
		 */
		unwatchSettingChange = function( setting ) {
			handleSettingChange.call( setting, null, setting() );
			setting.unbind( handleSettingChange );
		};

		api.bind( 'add', watchSettingChange );
		api.bind( 'remove', unwatchSettingChange );
		api.each( function( setting ) {
			setting.bind( handleSettingChange );
		} );

		// Add (dynamic) initial partials that are declared via data-* attributes.
		self.addPartials( document.documentElement, {
			triggerRendered: false
		} );

		// Add new dynamic partials when the document changes.
		if ( 'undefined' !== typeof MutationObserver ) {
			self.mutationObserver = new MutationObserver( function( mutations ) {
				_.each( mutations, function( mutation ) {
					self.addPartials( $( mutation.target ) );
				} );
			} );
			self.mutationObserver.observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
		}

		/**
		 * Handle rendering of partials.
		 *
		 * @param {api.selectiveRefresh.Placement} placement
		 */
		api.selectiveRefresh.bind( 'partial-content-rendered', function( placement ) {
			if ( placement.container ) {
				self.addPartials( placement.container );
			}
		} );

		api.preview.bind( 'active', function() {

			// Make all partials ready.
			self.partial.each( function( partial ) {
				partial.deferred.ready.resolve();
			} );

			// Make all partials added henceforth as ready upon add.
			self.partial.bind( 'add', function( partial ) {
				partial.deferred.ready.resolve();
			} );
		} );

	} );

	return self;
}( jQuery, wp.customize ) );
;
/* global _wpWidgetCustomizerPreviewSettings */
wp.customize.widgetsPreview = wp.customize.WidgetCustomizerPreview = (function( $, _, wp, api ) {

	var self;

	self = {
		renderedSidebars: {},
		renderedWidgets: {},
		registeredSidebars: [],
		registeredWidgets: {},
		widgetSelectors: [],
		preview: null,
		l10n: {
			widgetTooltip: ''
		},
		selectiveRefreshableWidgets: {}
	};

	/**
	 * Init widgets preview.
	 *
	 * @since 4.5.0
	 */
	self.init = function() {
		var self = this;

		self.preview = api.preview;
		if ( ! _.isEmpty( self.selectiveRefreshableWidgets ) ) {
			self.addPartials();
		}

		self.buildWidgetSelectors();
		self.highlightControls();

		self.preview.bind( 'highlight-widget', self.highlightWidget );

		api.preview.bind( 'active', function() {
			self.highlightControls();
		} );
	};

	/**
	 * Partial representing a widget instance.
	 *
	 * @class
	 * @augments wp.customize.selectiveRefresh.Partial
	 * @since 4.5.0
	 */
	self.WidgetPartial = api.selectiveRefresh.Partial.extend({

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this, matches;
			matches = id.match( /^widget\[(.+)]$/ );
			if ( ! matches ) {
				throw new Error( 'Illegal id for widget partial.' );
			}

			partial.widgetId = matches[1];
			partial.widgetIdParts = self.parseWidgetId( partial.widgetId );
			options = options || {};
			options.params = _.extend(
				{
					settings: [ self.getWidgetSettingId( partial.widgetId ) ],
					containerInclusive: true
				},
				options.params || {}
			);

			api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );
		},

		/**
		 * Refresh widget partial.
		 *
		 * @returns {Promise}
		 */
		refresh: function() {
			var partial = this, refreshDeferred;
			if ( ! self.selectiveRefreshableWidgets[ partial.widgetIdParts.idBase ] ) {
				refreshDeferred = $.Deferred();
				refreshDeferred.reject();
				partial.fallback();
				return refreshDeferred.promise();
			} else {
				return api.selectiveRefresh.Partial.prototype.refresh.call( partial );
			}
		},

		/**
		 * Send widget-updated message to parent so spinner will get removed from widget control.
		 *
		 * @inheritdoc
		 * @param {wp.customize.selectiveRefresh.Placement} placement
		 */
		renderContent: function( placement ) {
			var partial = this;
			if ( api.selectiveRefresh.Partial.prototype.renderContent.call( partial, placement ) ) {
				api.preview.send( 'widget-updated', partial.widgetId );
				api.selectiveRefresh.trigger( 'widget-updated', partial );
			}
		}
	});

	/**
	 * Partial representing a widget area.
	 *
	 * @class
	 * @augments wp.customize.selectiveRefresh.Partial
	 * @since 4.5.0
	 */
	self.SidebarPartial = api.selectiveRefresh.Partial.extend({

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this, matches;
			matches = id.match( /^sidebar\[(.+)]$/ );
			if ( ! matches ) {
				throw new Error( 'Illegal id for sidebar partial.' );
			}
			partial.sidebarId = matches[1];

			options = options || {};
			options.params = _.extend(
				{
					settings: [ 'sidebars_widgets[' + partial.sidebarId + ']' ]
				},
				options.params || {}
			);

			api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );

			if ( ! partial.params.sidebarArgs ) {
				throw new Error( 'The sidebarArgs param was not provided.' );
			}
			if ( partial.params.settings.length > 1 ) {
				throw new Error( 'Expected SidebarPartial to only have one associated setting' );
			}
		},

		/**
		 * Set up the partial.
		 *
		 * @since 4.5.0
		 */
		ready: function() {
			var sidebarPartial = this;

			// Watch for changes to the sidebar_widgets setting.
			_.each( sidebarPartial.settings(), function( settingId ) {
				api( settingId ).bind( _.bind( sidebarPartial.handleSettingChange, sidebarPartial ) );
			} );

			// Trigger an event for this sidebar being updated whenever a widget inside is rendered.
			api.selectiveRefresh.bind( 'partial-content-rendered', function( placement ) {
				var isAssignedWidgetPartial = (
					placement.partial.extended( self.WidgetPartial ) &&
					( -1 !== _.indexOf( sidebarPartial.getWidgetIds(), placement.partial.widgetId ) )
				);
				if ( isAssignedWidgetPartial ) {
					api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
				}
			} );

			// Make sure that a widget partial has a container in the DOM prior to a refresh.
			api.bind( 'change', function( widgetSetting ) {
				var widgetId, parsedId;
				parsedId = self.parseWidgetSettingId( widgetSetting.id );
				if ( ! parsedId ) {
					return;
				}
				widgetId = parsedId.idBase;
				if ( parsedId.number ) {
					widgetId += '-' + String( parsedId.number );
				}
				if ( -1 !== _.indexOf( sidebarPartial.getWidgetIds(), widgetId ) ) {
					sidebarPartial.ensureWidgetPlacementContainers( widgetId );
				}
			} );
		},

		/**
		 * Get the before/after boundary nodes for all instances of this sidebar (usually one).
		 *
		 * Note that TreeWalker is not implemented in IE8.
		 *
		 * @since 4.5.0
		 * @returns {Array.<{before: Comment, after: Comment, instanceNumber: number}>}
		 */
		findDynamicSidebarBoundaryNodes: function() {
			var partial = this, regExp, boundaryNodes = {}, recursiveCommentTraversal;
			regExp = /^(dynamic_sidebar_before|dynamic_sidebar_after):(.+):(\d+)$/;
			recursiveCommentTraversal = function( childNodes ) {
				_.each( childNodes, function( node ) {
					var matches;
					if ( 8 === node.nodeType ) {
						matches = node.nodeValue.match( regExp );
						if ( ! matches || matches[2] !== partial.sidebarId ) {
							return;
						}
						if ( _.isUndefined( boundaryNodes[ matches[3] ] ) ) {
							boundaryNodes[ matches[3] ] = {
								before: null,
								after: null,
								instanceNumber: parseInt( matches[3], 10 )
							};
						}
						if ( 'dynamic_sidebar_before' === matches[1] ) {
							boundaryNodes[ matches[3] ].before = node;
						} else {
							boundaryNodes[ matches[3] ].after = node;
						}
					} else if ( 1 === node.nodeType ) {
						recursiveCommentTraversal( node.childNodes );
					}
				} );
			};

			recursiveCommentTraversal( document.body.childNodes );
			return _.values( boundaryNodes );
		},

		/**
		 * Get the placements for this partial.
		 *
		 * @since 4.5.0
		 * @returns {Array}
		 */
		placements: function() {
			var partial = this;
			return _.map( partial.findDynamicSidebarBoundaryNodes(), function( boundaryNodes ) {
				return new api.selectiveRefresh.Placement( {
					partial: partial,
					container: null,
					startNode: boundaryNodes.before,
					endNode: boundaryNodes.after,
					context: {
						instanceNumber: boundaryNodes.instanceNumber
					}
				} );
			} );
		},

		/**
		 * Get the list of widget IDs associated with this widget area.
		 *
		 * @since 4.5.0
		 *
		 * @returns {Array}
		 */
		getWidgetIds: function() {
			var sidebarPartial = this, settingId, widgetIds;
			settingId = sidebarPartial.settings()[0];
			if ( ! settingId ) {
				throw new Error( 'Missing associated setting.' );
			}
			if ( ! api.has( settingId ) ) {
				throw new Error( 'Setting does not exist.' );
			}
			widgetIds = api( settingId ).get();
			if ( ! _.isArray( widgetIds ) ) {
				throw new Error( 'Expected setting to be array of widget IDs' );
			}
			return widgetIds.slice( 0 );
		},

		/**
		 * Reflow widgets in the sidebar, ensuring they have the proper position in the DOM.
		 *
		 * @since 4.5.0
		 *
		 * @return {Array.<wp.customize.selectiveRefresh.Placement>} List of placements that were reflowed.
		 */
		reflowWidgets: function() {
			var sidebarPartial = this, sidebarPlacements, widgetIds, widgetPartials, sortedSidebarContainers = [];
			widgetIds = sidebarPartial.getWidgetIds();
			sidebarPlacements = sidebarPartial.placements();

			widgetPartials = {};
			_.each( widgetIds, function( widgetId ) {
				var widgetPartial = api.selectiveRefresh.partial( 'widget[' + widgetId + ']' );
				if ( widgetPartial ) {
					widgetPartials[ widgetId ] = widgetPartial;
				}
			} );

			_.each( sidebarPlacements, function( sidebarPlacement ) {
				var sidebarWidgets = [], needsSort = false, thisPosition, lastPosition = -1;

				// Gather list of widget partial containers in this sidebar, and determine if a sort is needed.
				_.each( widgetPartials, function( widgetPartial ) {
					_.each( widgetPartial.placements(), function( widgetPlacement ) {

						if ( sidebarPlacement.context.instanceNumber === widgetPlacement.context.sidebar_instance_number ) {
							thisPosition = widgetPlacement.container.index();
							sidebarWidgets.push( {
								partial: widgetPartial,
								placement: widgetPlacement,
								position: thisPosition
							} );
							if ( thisPosition < lastPosition ) {
								needsSort = true;
							}
							lastPosition = thisPosition;
						}
					} );
				} );

				if ( needsSort ) {
					_.each( sidebarWidgets, function( sidebarWidget ) {
						sidebarPlacement.endNode.parentNode.insertBefore(
							sidebarWidget.placement.container[0],
							sidebarPlacement.endNode
						);

						// @todo Rename partial-placement-moved?
						api.selectiveRefresh.trigger( 'partial-content-moved', sidebarWidget.placement );
					} );

					sortedSidebarContainers.push( sidebarPlacement );
				}
			} );

			if ( sortedSidebarContainers.length > 0 ) {
				api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
			}

			return sortedSidebarContainers;
		},

		/**
		 * Make sure there is a widget instance container in this sidebar for the given widget ID.
		 *
		 * @since 4.5.0
		 *
		 * @param {string} widgetId
		 * @returns {wp.customize.selectiveRefresh.Partial} Widget instance partial.
		 */
		ensureWidgetPlacementContainers: function( widgetId ) {
			var sidebarPartial = this, widgetPartial, wasInserted = false, partialId = 'widget[' + widgetId + ']';
			widgetPartial = api.selectiveRefresh.partial( partialId );
			if ( ! widgetPartial ) {
				widgetPartial = new self.WidgetPartial( partialId, {
					params: {}
				} );
				api.selectiveRefresh.partial.add( widgetPartial.id, widgetPartial );
			}

			// Make sure that there is a container element for the widget in the sidebar, if at least a placeholder.
			_.each( sidebarPartial.placements(), function( sidebarPlacement ) {
				var foundWidgetPlacement, widgetContainerElement;

				foundWidgetPlacement = _.find( widgetPartial.placements(), function( widgetPlacement ) {
					return ( widgetPlacement.context.sidebar_instance_number === sidebarPlacement.context.instanceNumber );
				} );
				if ( foundWidgetPlacement ) {
					return;
				}

				widgetContainerElement = $(
					sidebarPartial.params.sidebarArgs.before_widget.replace( '%1$s', widgetId ).replace( '%2$s', 'widget' ) +
					sidebarPartial.params.sidebarArgs.after_widget
				);

				widgetContainerElement.attr( 'data-customize-partial-id', widgetPartial.id );
				widgetContainerElement.attr( 'data-customize-partial-type', 'widget' );
				widgetContainerElement.attr( 'data-customize-widget-id', widgetId );

				/*
				 * Make sure the widget container element has the customize-container context data.
				 * The sidebar_instance_number is used to disambiguate multiple instances of the
				 * same sidebar are rendered onto the template, and so the same widget is embedded
				 * multiple times.
				 */
				widgetContainerElement.data( 'customize-partial-placement-context', {
					'sidebar_id': sidebarPartial.sidebarId,
					'sidebar_instance_number': sidebarPlacement.context.instanceNumber
				} );

				sidebarPlacement.endNode.parentNode.insertBefore( widgetContainerElement[0], sidebarPlacement.endNode );
				wasInserted = true;
			} );

			if ( wasInserted ) {
				sidebarPartial.reflowWidgets();
			}

			return widgetPartial;
		},

		/**
		 * Handle change to the sidebars_widgets[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {Array} newWidgetIds New widget ids.
		 * @param {Array} oldWidgetIds Old widget ids.
		 */
		handleSettingChange: function( newWidgetIds, oldWidgetIds ) {
			var sidebarPartial = this, needsRefresh, widgetsRemoved, widgetsAdded, addedWidgetPartials = [];

			needsRefresh = (
				( oldWidgetIds.length > 0 && 0 === newWidgetIds.length ) ||
				( newWidgetIds.length > 0 && 0 === oldWidgetIds.length )
			);
			if ( needsRefresh ) {
				sidebarPartial.fallback();
				return;
			}

			// Handle removal of widgets.
			widgetsRemoved = _.difference( oldWidgetIds, newWidgetIds );
			_.each( widgetsRemoved, function( removedWidgetId ) {
				var widgetPartial = api.selectiveRefresh.partial( 'widget[' + removedWidgetId + ']' );
				if ( widgetPartial ) {
					_.each( widgetPartial.placements(), function( placement ) {
						var isRemoved = (
							placement.context.sidebar_id === sidebarPartial.sidebarId ||
							( placement.context.sidebar_args && placement.context.sidebar_args.id === sidebarPartial.sidebarId )
						);
						if ( isRemoved ) {
							placement.container.remove();
						}
					} );
				}
			} );

			// Handle insertion of widgets.
			widgetsAdded = _.difference( newWidgetIds, oldWidgetIds );
			_.each( widgetsAdded, function( addedWidgetId ) {
				var widgetPartial = sidebarPartial.ensureWidgetPlacementContainers( addedWidgetId );
				addedWidgetPartials.push( widgetPartial );
			} );

			_.each( addedWidgetPartials, function( widgetPartial ) {
				widgetPartial.refresh();
			} );

			api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
		},

		/**
		 * Note that the meat is handled in handleSettingChange because it has the context of which widgets were removed.
		 *
		 * @since 4.5.0
		 */
		refresh: function() {
			var partial = this, deferred = $.Deferred();

			deferred.fail( function() {
				partial.fallback();
			} );

			if ( 0 === partial.placements().length ) {
				deferred.reject();
			} else {
				_.each( partial.reflowWidgets(), function( sidebarPlacement ) {
					api.selectiveRefresh.trigger( 'partial-content-rendered', sidebarPlacement );
				} );
				deferred.resolve();
			}

			return deferred.promise();
		}
	});

	api.selectiveRefresh.partialConstructor.sidebar = self.SidebarPartial;
	api.selectiveRefresh.partialConstructor.widget = self.WidgetPartial;

	/**
	 * Add partials for the registered widget areas (sidebars).
	 *
	 * @since 4.5.0
	 */
	self.addPartials = function() {
		_.each( self.registeredSidebars, function( registeredSidebar ) {
			var partial, partialId = 'sidebar[' + registeredSidebar.id + ']';
			partial = api.selectiveRefresh.partial( partialId );
			if ( ! partial ) {
				partial = new self.SidebarPartial( partialId, {
					params: {
						sidebarArgs: registeredSidebar
					}
				} );
				api.selectiveRefresh.partial.add( partial.id, partial );
			}
		} );
	};

	/**
	 * Calculate the selector for the sidebar's widgets based on the registered sidebar's info.
	 *
	 * @since 3.9.0
	 */
	self.buildWidgetSelectors = function() {
		var self = this;

		$.each( self.registeredSidebars, function( i, sidebar ) {
			var widgetTpl = [
					sidebar.before_widget.replace( '%1$s', '' ).replace( '%2$s', '' ),
					sidebar.before_title,
					sidebar.after_title,
					sidebar.after_widget
				].join( '' ),
				emptyWidget,
				widgetSelector,
				widgetClasses;

			emptyWidget = $( widgetTpl );
			widgetSelector = emptyWidget.prop( 'tagName' );
			widgetClasses = emptyWidget.prop( 'className' );

			// Prevent a rare case when before_widget, before_title, after_title and after_widget is empty.
			if ( ! widgetClasses ) {
				return;
			}

			widgetClasses = widgetClasses.replace( /^\s+|\s+$/g, '' );

			if ( widgetClasses ) {
				widgetSelector += '.' + widgetClasses.split( /\s+/ ).join( '.' );
			}
			self.widgetSelectors.push( widgetSelector );
		});
	};

	/**
	 * Highlight the widget on widget updates or widget control mouse overs.
	 *
	 * @since 3.9.0
	 * @param  {string} widgetId ID of the widget.
	 */
	self.highlightWidget = function( widgetId ) {
		var $body = $( document.body ),
			$widget = $( '#' + widgetId );

		$body.find( '.widget-customizer-highlighted-widget' ).removeClass( 'widget-customizer-highlighted-widget' );

		$widget.addClass( 'widget-customizer-highlighted-widget' );
		setTimeout( function() {
			$widget.removeClass( 'widget-customizer-highlighted-widget' );
		}, 500 );
	};

	/**
	 * Show a title and highlight widgets on hover. On shift+clicking
	 * focus the widget control.
	 *
	 * @since 3.9.0
	 */
	self.highlightControls = function() {
		var self = this,
			selector = this.widgetSelectors.join( ',' );

		$( selector ).attr( 'title', this.l10n.widgetTooltip );

		$( document ).on( 'mouseenter', selector, function() {
			self.preview.send( 'highlight-widget-control', $( this ).prop( 'id' ) );
		});

		// Open expand the widget control when shift+clicking the widget element
		$( document ).on( 'click', selector, function( e ) {
			if ( ! e.shiftKey ) {
				return;
			}
			e.preventDefault();

			self.preview.send( 'focus-widget-control', $( this ).prop( 'id' ) );
		});
	};

	/**
	 * Parse a widget ID.
	 *
	 * @since 4.5.0
	 *
	 * @param {string} widgetId Widget ID.
	 * @returns {{idBase: string, number: number|null}}
	 */
	self.parseWidgetId = function( widgetId ) {
		var matches, parsed = {
			idBase: '',
			number: null
		};

		matches = widgetId.match( /^(.+)-(\d+)$/ );
		if ( matches ) {
			parsed.idBase = matches[1];
			parsed.number = parseInt( matches[2], 10 );
		} else {
			parsed.idBase = widgetId; // Likely an old single widget.
		}

		return parsed;
	};

	/**
	 * Parse a widget setting ID.
	 *
	 * @since 4.5.0
	 *
	 * @param {string} settingId Widget setting ID.
	 * @returns {{idBase: string, number: number|null}|null}
	 */
	self.parseWidgetSettingId = function( settingId ) {
		var matches, parsed = {
			idBase: '',
			number: null
		};

		matches = settingId.match( /^widget_([^\[]+?)(?:\[(\d+)])?$/ );
		if ( ! matches ) {
			return null;
		}
		parsed.idBase = matches[1];
		if ( matches[2] ) {
			parsed.number = parseInt( matches[2], 10 );
		}
		return parsed;
	};

	/**
	 * Convert a widget ID into a Customizer setting ID.
	 *
	 * @since 4.5.0
	 *
	 * @param {string} widgetId Widget ID.
	 * @returns {string} settingId Setting ID.
	 */
	self.getWidgetSettingId = function( widgetId ) {
		var parsed = this.parseWidgetId( widgetId ), settingId;

		settingId = 'widget_' + parsed.idBase;
		if ( parsed.number ) {
			settingId += '[' + String( parsed.number ) + ']';
		}

		return settingId;
	};

	api.bind( 'preview-ready', function() {
		$.extend( self, _wpWidgetCustomizerPreviewSettings );
		self.init();
	});

	return self;
})( jQuery, _, wp, wp.customize );
;
/* global _wpCustomizePreviewNavMenusExports */
wp.customize.navMenusPreview = wp.customize.MenusCustomizerPreview = ( function( $, _, wp, api ) {
	'use strict';

	var self = {
		data: {
			navMenuInstanceArgs: {}
		}
	};
	if ( 'undefined' !== typeof _wpCustomizePreviewNavMenusExports ) {
		_.extend( self.data, _wpCustomizePreviewNavMenusExports );
	}

	/**
	 * Initialize nav menus preview.
	 */
	self.init = function() {
		var self = this;

		if ( api.selectiveRefresh ) {
			// Listen for changes to settings related to nav menus.
			api.each( function( setting ) {
				self.bindSettingListener( setting );
			} );
			api.bind( 'add', function( setting ) {
				self.bindSettingListener( setting, { fire: true } );
			} );
			api.bind( 'remove', function( setting ) {
				self.unbindSettingListener( setting );
			} );

			/*
			 * Ensure that wp_nav_menu() instances nested inside of other partials
			 * will be recognized as being present on the page.
			 */
			api.selectiveRefresh.bind( 'render-partials-response', function( response ) {
				if ( response.nav_menu_instance_args ) {
					_.extend( self.data.navMenuInstanceArgs, response.nav_menu_instance_args );
				}
			} );
		}

		api.preview.bind( 'active', function() {
			self.highlightControls();
		} );
	};

	if ( api.selectiveRefresh ) {

		/**
		 * Partial representing an invocation of wp_nav_menu().
		 *
		 * @class
		 * @augments wp.customize.selectiveRefresh.Partial
		 * @since 4.5.0
		 */
		self.NavMenuInstancePartial = api.selectiveRefresh.Partial.extend({

			/**
			 * Constructor.
			 *
			 * @since 4.5.0
			 * @param {string} id - Partial ID.
			 * @param {Object} options
			 * @param {Object} options.params
			 * @param {Object} options.params.navMenuArgs
			 * @param {string} options.params.navMenuArgs.args_hmac
			 * @param {string} [options.params.navMenuArgs.theme_location]
			 * @param {number} [options.params.navMenuArgs.menu]
			 * @param {object} [options.constructingContainerContext]
			 */
			initialize: function( id, options ) {
				var partial = this, matches, argsHmac;
				matches = id.match( /^nav_menu_instance\[([0-9a-f]{32})]$/ );
				if ( ! matches ) {
					throw new Error( 'Illegal id for nav_menu_instance partial. The key corresponds with the args HMAC.' );
				}
				argsHmac = matches[1];

				options = options || {};
				options.params = _.extend(
					{
						selector: '[data-customize-partial-id="' + id + '"]',
						navMenuArgs: options.constructingContainerContext || {},
						containerInclusive: true
					},
					options.params || {}
				);
				api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );

				if ( ! _.isObject( partial.params.navMenuArgs ) ) {
					throw new Error( 'Missing navMenuArgs' );
				}
				if ( partial.params.navMenuArgs.args_hmac !== argsHmac ) {
					throw new Error( 'args_hmac mismatch with id' );
				}
			},

			/**
			 * Return whether the setting is related to this partial.
			 *
			 * @since 4.5.0
			 * @param {wp.customize.Value|string} setting  - Object or ID.
			 * @param {number|object|false|null}  newValue - New value, or null if the setting was just removed.
			 * @param {number|object|false|null}  oldValue - Old value, or null if the setting was just added.
			 * @returns {boolean}
			 */
			isRelatedSetting: function( setting, newValue, oldValue ) {
				var partial = this, navMenuLocationSetting, navMenuId, isNavMenuItemSetting;
				if ( _.isString( setting ) ) {
					setting = api( setting );
				}

				/*
				 * Prevent nav_menu_item changes only containing type_label differences triggering a refresh.
				 * These settings in the preview do not include type_label property, and so if one of these
				 * nav_menu_item settings is dirty, after a refresh the nav menu instance would do a selective
				 * refresh immediately because the setting from the pane would have the type_label whereas
				 * the setting in the preview would not, thus triggering a change event. The following
				 * condition short-circuits this unnecessary selective refresh and also prevents an infinite
				 * loop in the case where a nav_menu_instance partial had done a fallback refresh.
				 * @todo Nav menu item settings should not include a type_label property to begin with.
				 */
				isNavMenuItemSetting = /^nav_menu_item\[/.test( setting.id );
				if ( isNavMenuItemSetting && _.isObject( newValue ) && _.isObject( oldValue ) ) {
					delete newValue.type_label;
					delete oldValue.type_label;
					if ( _.isEqual( oldValue, newValue ) ) {
						return false;
					}
				}

				if ( partial.params.navMenuArgs.theme_location ) {
					if ( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' === setting.id ) {
						return true;
					}
					navMenuLocationSetting = api( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' );
				}

				navMenuId = partial.params.navMenuArgs.menu;
				if ( ! navMenuId && navMenuLocationSetting ) {
					navMenuId = navMenuLocationSetting();
				}

				if ( ! navMenuId ) {
					return false;
				}
				return (
					( 'nav_menu[' + navMenuId + ']' === setting.id ) ||
					( isNavMenuItemSetting && (
						( newValue && newValue.nav_menu_term_id === navMenuId ) ||
						( oldValue && oldValue.nav_menu_term_id === navMenuId )
					) )
				);
			},

			/**
			 * Make sure that partial fallback behavior is invoked if there is no associated menu.
			 *
			 * @since 4.5.0
			 *
			 * @returns {Promise}
			 */
			refresh: function() {
				var partial = this, menuId, deferred = $.Deferred();

				// Make sure the fallback behavior is invoked when the partial is no longer associated with a menu.
				if ( _.isNumber( partial.params.navMenuArgs.menu ) ) {
					menuId = partial.params.navMenuArgs.menu;
				} else if ( partial.params.navMenuArgs.theme_location && api.has( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' ) ) {
					menuId = api( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' ).get();
				}
				if ( ! menuId ) {
					partial.fallback();
					deferred.reject();
					return deferred.promise();
				}

				return api.selectiveRefresh.Partial.prototype.refresh.call( partial );
			},

			/**
			 * Render content.
			 *
			 * @inheritdoc
			 * @param {wp.customize.selectiveRefresh.Placement} placement
			 */
			renderContent: function( placement ) {
				var partial = this, previousContainer = placement.container;

				// Do fallback behavior to refresh preview if menu is now empty.
				if ( '' === placement.addedContent ) {
					placement.partial.fallback();
				}

				if ( api.selectiveRefresh.Partial.prototype.renderContent.call( partial, placement ) ) {

					// Trigger deprecated event.
					$( document ).trigger( 'customize-preview-menu-refreshed', [ {
						instanceNumber: null, // @deprecated
						wpNavArgs: placement.context, // @deprecated
						wpNavMenuArgs: placement.context,
						oldContainer: previousContainer,
						newContainer: placement.container
					} ] );
				}
			}
		});

		api.selectiveRefresh.partialConstructor.nav_menu_instance = self.NavMenuInstancePartial;

		/**
		 * Request full refresh if there are nav menu instances that lack partials which also match the supplied args.
		 *
		 * @param {object} navMenuInstanceArgs
		 */
		self.handleUnplacedNavMenuInstances = function( navMenuInstanceArgs ) {
			var unplacedNavMenuInstances;
			unplacedNavMenuInstances = _.filter( _.values( self.data.navMenuInstanceArgs ), function( args ) {
				return ! api.selectiveRefresh.partial.has( 'nav_menu_instance[' + args.args_hmac + ']' );
			} );
			if ( _.findWhere( unplacedNavMenuInstances, navMenuInstanceArgs ) ) {
				api.selectiveRefresh.requestFullRefresh();
				return true;
			}
			return false;
		};

		/**
		 * Add change listener for a nav_menu[], nav_menu_item[], or nav_menu_locations[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value} setting
		 * @param {object}             [options]
		 * @param {boolean}            options.fire Whether to invoke the callback after binding.
		 *                                          This is used when a dynamic setting is added.
		 * @return {boolean} Whether the setting was bound.
		 */
		self.bindSettingListener = function( setting, options ) {
			var matches;
			options = options || {};

			matches = setting.id.match( /^nav_menu\[(-?\d+)]$/ );
			if ( matches ) {
				setting._navMenuId = parseInt( matches[1], 10 );
				setting.bind( this.onChangeNavMenuSetting );
				if ( options.fire ) {
					this.onChangeNavMenuSetting.call( setting, setting(), false );
				}
				return true;
			}

			matches = setting.id.match( /^nav_menu_item\[(-?\d+)]$/ );
			if ( matches ) {
				setting._navMenuItemId = parseInt( matches[1], 10 );
				setting.bind( this.onChangeNavMenuItemSetting );
				if ( options.fire ) {
					this.onChangeNavMenuItemSetting.call( setting, setting(), false );
				}
				return true;
			}

			matches = setting.id.match( /^nav_menu_locations\[(.+?)]/ );
			if ( matches ) {
				setting._navMenuThemeLocation = matches[1];
				setting.bind( this.onChangeNavMenuLocationsSetting );
				if ( options.fire ) {
					this.onChangeNavMenuLocationsSetting.call( setting, setting(), false );
				}
				return true;
			}

			return false;
		};

		/**
		 * Remove change listeners for nav_menu[], nav_menu_item[], or nav_menu_locations[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value} setting
		 */
		self.unbindSettingListener = function( setting ) {
			setting.unbind( this.onChangeNavMenuSetting );
			setting.unbind( this.onChangeNavMenuItemSetting );
			setting.unbind( this.onChangeNavMenuLocationsSetting );
		};

		/**
		 * Handle change for nav_menu[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuSetting = function() {
			var setting = this;

			self.handleUnplacedNavMenuInstances( {
				menu: setting._navMenuId
			} );

			// Ensure all nav menu instances with a theme_location assigned to this menu are handled.
			api.each( function( otherSetting ) {
				if ( ! otherSetting._navMenuThemeLocation ) {
					return;
				}
				if ( setting._navMenuId === otherSetting() ) {
					self.handleUnplacedNavMenuInstances( {
						theme_location: otherSetting._navMenuThemeLocation
					} );
				}
			} );
		};

		/**
		 * Handle change for nav_menu_item[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @param {object} newItem New value for nav_menu_item[] setting.
		 * @param {object} oldItem Old value for nav_menu_item[] setting.
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuItemSetting = function( newItem, oldItem ) {
			var item = newItem || oldItem, navMenuSetting;
			navMenuSetting = api( 'nav_menu[' + String( item.nav_menu_term_id ) + ']' );
			if ( navMenuSetting ) {
				self.onChangeNavMenuSetting.call( navMenuSetting );
			}
		};

		/**
		 * Handle change for nav_menu_locations[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuLocationsSetting = function() {
			var setting = this, hasNavMenuInstance;
			self.handleUnplacedNavMenuInstances( {
				theme_location: setting._navMenuThemeLocation
			} );

			// If there are no wp_nav_menu() instances that refer to the theme location, do full refresh.
			hasNavMenuInstance = !! _.findWhere( _.values( self.data.navMenuInstanceArgs ), {
				theme_location: setting._navMenuThemeLocation
			} );
			if ( ! hasNavMenuInstance ) {
				api.selectiveRefresh.requestFullRefresh();
			}
		};
	}

	/**
	 * Connect nav menu items with their corresponding controls in the pane.
	 *
	 * Setup shift-click on nav menu items which are more granular than the nav menu partial itself.
	 * Also this applies even if a nav menu is not partial-refreshable.
	 *
	 * @since 4.5.0
	 */
	self.highlightControls = function() {
		var selector = '.menu-item';

		// Focus on the menu item control when shift+clicking the menu item.
		$( document ).on( 'click', selector, function( e ) {
			var navMenuItemParts;
			if ( ! e.shiftKey ) {
				return;
			}

			navMenuItemParts = $( this ).attr( 'class' ).match( /(?:^|\s)menu-item-(\d+)(?:\s|$)/ );
			if ( navMenuItemParts ) {
				e.preventDefault();
				e.stopPropagation(); // Make sure a sub-nav menu item will get focused instead of parent items.
				api.preview.send( 'focus-nav-menu-item-control', parseInt( navMenuItemParts[1], 10 ) );
			}
		});
	};

	api.bind( 'preview-ready', function() {
		self.init();
	} );

	return self;

}( jQuery, _, wp, wp.customize ) );
;
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD Build: http://modernizr.com/download/#-touch-mq */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(l.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},t=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return s("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:s(["@media (",l.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in m)v(m,B)&&(r=B.toLowerCase(),e[r]=m[B](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,e._version=d,e._prefixes=l,e.mq=t,e.testStyles=s,e}(this,this.document);

/*! Backstretch - v2.0.4 - 2013-06-19  */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);;
