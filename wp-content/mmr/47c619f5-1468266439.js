/*! imagesLoaded PACKAGED v3.1.8 */
(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a,b,c,d){"use strict";function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(){var c=a(b);return c.stellar.apply(c,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);

/*! Bootstrap v3.1.1 (http://getbootstrap.com) */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

/*! Lightbox for Bootstrap 3 by @ashleydw */
(function(){"use strict";var a,b;a=jQuery,b=function(b,c){var d,e,f,g=this;return this.options=a.extend({title:null,footer:null,remote:null},a.fn.ekkoLightbox.defaults,c||{}),this.$element=a(b),d="",this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1e3*Math.random()+1),f='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+(this.options.title||"&nbsp;")+"</h4></div>",e='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",a(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+f+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+e+"</div></div></div>"),this.modal=a("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.showLoading(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",function(){return g.modal_shown(),g.options.onShown.call(g)}).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",function(){return g.gallery&&a(document).off("keydown.ekkoLightbox"),g.modal.remove(),g.options.onHidden.call(g)}).modal("show",c),this.modal},b.prototype={modal_shown:function(){var b,c=this;return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&("document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?this.gallery_items=a(document.body).find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'):this.gallery_items=this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),a(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.append('<div class="flex-direction-nav"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",function(a){return a.preventDefault(),c.navigate_left()}),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",function(a){return a.preventDefault(),c.navigate_right()}))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(b=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(b):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):"instagram"===this.options.type?this.showInstagramVideo(this.options.remote):"url"===this.options.type?this.loadRemoteContent(this.options.remote):"video"===this.options.type?this.showVideoIframe(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|instagram|url|video"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")},strip_stops:function(a){return a.replace(/\./g,"")},strip_spaces:function(a){return a.replace(/\s/g,"")},isImage:function(a){return a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSwf:function(a){return a.match(/\.(swf)((\?|#).*)?$/i)},getYoutubeId:function(a){var b;return b=a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),b&&11===b[2].length?b[2]:!1},getVimeoId:function(a){return a.indexOf("vimeo")>0?a:!1},getInstagramId:function(a){return a.indexOf("instagram")>0?a:!1},navigate:function(a){if(a=a||window.event,39===a.keyCode||37===a.keyCode){if(39===a.keyCode)return this.navigate_right();if(37===a.keyCode)return this.navigate_left()}},navigateTo:function(b){var c,d;return 0>b||b>this.gallery_items.length-1?this:(this.showLoading(),this.gallery_index=b,this.$element=a(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),d=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(d,this.$element.attr("data-type")||!1),this.gallery_index+1<this.gallery_items.length&&(c=a(this.gallery_items.get(this.gallery_index+1),!1),d=c.attr("data-remote")||c.attr("href"),"image"===c.attr("data-type")||this.isImage(d))?this.preloadImage(d,!1):void 0)},navigate_left:function(){return 1!==this.gallery_items.length?(0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.options.onNavigate.call(this,"left",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},navigate_right:function(){return 1!==this.gallery_items.length?(this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.options.onNavigate.call(this,"right",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},detectRemoteType:function(a,b){var c;return b=b||!1,"image"===b||this.isImage(a)?(this.options.type="image",this.preloadImage(a,!0)):"youtube"===b||(c=this.getYoutubeId(a))?(this.options.type="youtube",this.showYoutubeVideo(c)):"vimeo"===b||(c=this.getVimeoId(a))?(this.options.type="vimeo",this.showVimeoVideo(c)):"instagram"===b||(c=this.getInstagramId(a))?(this.options.type="instagram",this.showInstagramVideo(c)):"video"===b?(this.options.type="video",this.showVideoIframe(c)):(this.options.type="url",this.loadRemoteContent(a))},updateTitleAndFooter:function(){var a,b,c,d;return c=this.modal_content.find(".modal-header"),b=this.modal_content.find(".modal-footer"),d=this.$element.data("title")||"",a=this.$element.data("footer")||"",d||this.options.always_show_close?c.css("display","").find(".modal-title").html(d||"&nbsp;"):c.css("display","none"),a?b.css("display","").html(a):b.css("display","none"),this},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">'+this.options.loadingMessage+"</div>"),this},showYoutubeVideo:function(a){var b,c;return c=this.checkDimensions(this.$element.data("width")||560),b=c/(560/315),this.showVideoIframe("//www.youtube.com/embed/"+a+"?badge=0&autoplay=1&html5=1",c,b)},showVimeoVideo:function(a){var b,c;return c=this.checkDimensions(this.$element.data("width")||560),b=c/(500/281),this.showVideoIframe(a+"?autoplay=1",c,b)},showInstagramVideo:function(a){var b,c;return c=this.checkDimensions(this.$element.data("width")||612),this.resize(c),b=c+80,this.lightbox_body.html('<iframe width="'+c+'" height="'+b+'" src="'+this.addTrailingSlash(a)+'embed/" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showVideoIframe:function(a,b,c){return c=c||b,this.resize(b),this.lightbox_body.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+b+'" height="'+c+'" src="'+a+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'),this.options.onContentLoaded.call(this),this.modal_arrows&&this.modal_arrows.css("display","none"),this},loadRemoteContent:function(b){var c,d,e=this;return d=this.$element.data("width")||560,this.resize(d),c=this.$element.data("disableExternalCheck")||!1,c||this.isExternal(b)?(this.lightbox_body.html('<iframe width="'+d+'" height="'+d+'" src="'+b+'" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this)):this.lightbox_body.load(b,a.proxy(function(){return e.$element.trigger("loaded.bs.modal")})),this.modal_arrows&&this.modal_arrows.css("display","none"),this},isExternal:function(a){var b;return b=a.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/),"string"==typeof b[1]&&b[1].length>0&&b[1].toLowerCase()!==location.protocol?!0:"string"==typeof b[2]&&b[2].length>0&&b[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host?!0:!1},error:function(a){return this.lightbox_body.html(a),this},preloadImage:function(b,c){var d,e=this;return d=new Image,(null==c||c===!0)&&(d.onload=function(){var b;return b=a("<img />"),b.attr("src",d.src),b.addClass("img-responsive"),e.lightbox_body.html(b),e.modal_arrows&&e.modal_arrows.css("display","block"),b.load(function(){return e.resize(d.width),e.options.onContentLoaded.call(e)})},d.onerror=function(){return e.error("Failed to load image: "+b)}),d.src=b,d},resize:function(b){var c;return c=b+this.border.left+this.padding.left+this.padding.right+this.border.right,this.modal_dialog.css("width","auto").css("max-width",c),this.lightbox_container.find("a").css("line-height",function(){return a(this).parent().height()+"px"}),this},checkDimensions:function(a){var b,c;return c=a+this.border.left+this.padding.left+this.padding.right+this.border.right,b=document.body.clientWidth,c>b&&(a=this.modal_body.width()),a},close:function(){return this.modal.modal("hide")},addTrailingSlash:function(a){return"/"!==a.substr(-1)&&(a+="/"),a}},a.fn.ekkoLightbox=function(c){return this.each(function(){var d;return d=a(this),c=a.extend({remote:d.attr("data-remote")||d.attr("href"),gallery_parent_selector:d.attr("data-parent"),type:d.attr("data-type")},c,d.data()),new b(this,c),this})},a.fn.ekkoLightbox.defaults={gallery_parent_selector:"document.body",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,loadingMessage:"Loading...",onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}}}).call(this);


/*  jQuery FlexSlider v2.4.0 */
!function($){$.flexslider=function(e,t){var a=$(e);a.vars=$.extend({},$.flexslider.defaults,t);var n=a.vars.namespace,i=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||i||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,r="click touchend MSPointerUp keyup",o="",l,c="vertical"===a.vars.direction,d=a.vars.reverse,u=a.vars.itemWidth>0,v="fade"===a.vars.animation,p=""!==a.vars.asNavFor,m={},f=!0;$.data(e,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=parseInt(a.vars.startAt?a.vars.startAt:0,10),isNaN(a.currentSlide)&&(a.currentSlide=0),a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" ")),a.slides=$(a.vars.selector,a),a.container=$(a.containerSelector,a),a.count=a.slides.length,a.syncExists=$(a.vars.sync).length>0,"slide"===a.vars.animation&&(a.vars.animation="swing"),a.prop=c?"top":"marginLeft",a.args={},a.manualPause=!1,a.stopped=!1,a.started=!1,a.startTimeout=null,a.transitions=!a.vars.video&&!v&&a.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return a.pfx=t[n].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}(),a.ensureAnimationEnd="",""!==a.vars.controlsContainer&&(a.controlsContainer=$(a.vars.controlsContainer).length>0&&$(a.vars.controlsContainer)),""!==a.vars.manualControls&&(a.manualControls=$(a.vars.manualControls).length>0&&$(a.vars.manualControls)),a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),a.setup("init"),a.vars.controlNav&&m.controlNav.setup(),a.vars.directionNav&&m.directionNav.setup(),a.vars.keyboard&&(1===$(a.containerSelector).length||a.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!a.animating&&(39===t||37===t)){var n=39===t?a.getTarget("next"):37===t?a.getTarget("prev"):!1;a.flexAnimate(n,a.vars.pauseOnAction)}}),a.vars.mousewheel&&a.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=a.getTarget(0>t?"next":"prev");a.flexAnimate(s,a.vars.pauseOnAction)}),a.vars.pausePlay&&m.pausePlay.setup(),a.vars.slideshow&&a.vars.pauseInvisible&&m.pauseInvisible.init(),a.vars.slideshow&&(a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(a.vars.initDelay>0?a.startTimeout=setTimeout(a.play,a.vars.initDelay):a.play())),p&&m.asNav.setup(),s&&a.vars.touch&&m.touch(),(!v||v&&a.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",m.resize),a.find("img").attr("draggable","false"),setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(n+"active-slide").eq(a.currentItem).addClass(n+"active-slide"),i?(e._slider=a,a.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),n=t.index();$(a.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(a.direction=a.currentItem<n?"next":"prev",a.flexAnimate(n,a.vars.pauseOnAction,!1,!0,!0))})})):a.slides.on(r,function(e){e.preventDefault();var t=$(this),i=t.index(),s=t.offset().left-$(a).scrollLeft();0>=s&&t.hasClass(n+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):$(a.vars.asNavFor).data("flexslider").animating||t.hasClass(n+"active-slide")||(a.direction=a.currentItem<i?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===a.vars.controlNav?"control-thumbs":"control-paging",t=1,i,s;if(a.controlNavScaffold=$('<ol class="'+n+"control-nav "+n+e+'"></ol>'),a.pagingCount>1)for(var l=0;l<a.pagingCount;l++){if(s=a.slides.eq(l),i="thumbnails"===a.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"/>':"<a>"+t+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!=c&&void 0!=c&&(i+='<span class="'+n+'caption">'+c+"</span>")}a.controlNavScaffold.append("<li>"+i+"</li>"),t++}a.controlsContainer?$(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.bind(r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===a.vars.controlNav?"img":"a";a.controlNav=$("."+n+"control-nav li "+e,a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(n+"active").eq(a.animatingTo).addClass(n+"active")},update:function(e,t){a.pagingCount>1&&"add"===e?a.controlNavScaffold.append($("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(t).closest("li").remove(),m.controlNav.set(),a.pagingCount>1&&a.pagingCount!==a.controlNav.length?a.update(t,e):m.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+n+'direction-nav"><li class="'+n+'nav-prev"><a class="'+n+'prev" href="#">'+a.vars.prevText+'</a></li><li class="'+n+'nav-next"><a class="'+n+'next" href="#">'+a.vars.nextText+"</a></li></ul>");a.controlsContainer?($(a.controlsContainer).append(e),a.directionNav=$("."+n+"direction-nav li a",a.controlsContainer)):(a.append(e),a.directionNav=$("."+n+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(e){e.preventDefault();var t;(""===o||o===e.type)&&(t=a.getTarget($(this).hasClass(n+"next")?"next":"prev"),a.flexAnimate(t,a.vars.pauseOnAction)),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(){var e=n+"disabled";1===a.pagingCount?a.directionNav.addClass(e).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(e).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+n+"prev").addClass(e).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+n+"next").addClass(e).attr("tabindex","-1"):a.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+n+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(e),a.pausePlay=$("."+n+"pauseplay a",a.controlsContainer)):(a.append(e),a.pausePlay=$("."+n+"pauseplay a",a)),m.pausePlay.update(a.vars.slideshow?n+"pause":n+"play"),a.pausePlay.bind(r,function(e){e.preventDefault(),(""===o||o===e.type)&&($(this).hasClass(n+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(e){"play"===e?a.pausePlay.removeClass(n+"pause").addClass(n+"play").html(a.vars.playText):a.pausePlay.removeClass(n+"play").addClass(n+"pause").html(a.vars.pauseText)}},touch:function(){function t(t){a.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(a.pause(),g=c?a.h:a.w,S=Number(new Date),x=t.touches[0].pageX,b=t.touches[0].pageY,f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g,p=c?b:x,m=c?x:b,e.addEventListener("touchmove",n,!1),e.addEventListener("touchend",s,!1))}function n(e){x=e.touches[0].pageX,b=e.touches[0].pageY,h=c?p-b:p-x,y=c?Math.abs(h)<Math.abs(x-m):Math.abs(h)<Math.abs(b-m);var t=500;(!y||Number(new Date)-S>t)&&(e.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h/=0===a.currentSlide&&0>h||a.currentSlide===a.last&&h>0?Math.abs(h)/g+2:1),a.setProps(f+h,"setTouch")))}function s(t){if(e.removeEventListener("touchmove",n,!1),a.animatingTo===a.currentSlide&&!y&&null!==h){var i=d?-h:h,r=a.getTarget(i>0?"next":"prev");a.canAdvance(r)&&(Number(new Date)-S<550&&Math.abs(i)>50||Math.abs(i)>g/2)?a.flexAnimate(r,a.vars.pauseOnAction):v||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}e.removeEventListener("touchend",s,!1),p=null,m=null,h=null,f=null}function r(t){t.stopPropagation(),a.animating?t.preventDefault():(a.pause(),e._gesture.addPointer(t.pointerId),w=0,g=c?a.h:a.w,S=Number(new Date),f=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*g:(a.currentSlide+a.cloneOffset)*g)}function o(t){t.stopPropagation();var a=t.target._slider;if(a){var n=-t.translationX,i=-t.translationY;return w+=c?i:n,h=w,y=c?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!y||Number(new Date)-S>500)&&(t.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(h=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/g+2:1)),a.setProps(f+h,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==h){var a=d?-h:h,n=t.getTarget(a>0?"next":"prev");t.canAdvance(n)&&(Number(new Date)-S<550&&Math.abs(a)>50||Math.abs(a)>g/2)?t.flexAnimate(n,t.vars.pauseOnAction):v||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}p=null,m=null,h=null,f=null,w=0}}var p,m,f,g,h,S,y=!1,x=0,b=0,w=0;i?(e.style.msTouchAction="none",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",r,!1),e._slider=a,e.addEventListener("MSGestureChange",o,!1),e.addEventListener("MSGestureEnd",l,!1)):e.addEventListener("touchstart",t,!1)},resize:function(){!a.animating&&a.is(":visible")&&(u||a.doMath(),v?m.smoothHeight():u?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):c?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(a.vars.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!c||v){var t=v?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(e){var t=$(a.vars.sync).data("flexslider"),n=a.animatingTo;switch(e){case"animate":t.flexAnimate(n,a.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=m.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){m.pauseInvisible.isHidden()?a.startTimeout?clearTimeout(a.startTimeout):a.pause():a.started?a.play():a.vars.initDelay>0?setTimeout(a.play,a.vars.initDelay):a.play()})}},isHidden:function(){var e=m.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(l),l=setTimeout(function(){o=""},3e3)}},a.flexAnimate=function(e,t,i,r,o){if(a.vars.animationLoop||e===a.currentSlide||(a.direction=e>a.currentSlide?"next":"prev"),p&&1===a.pagingCount&&(a.direction=a.currentItem<e?"next":"prev"),!a.animating&&(a.canAdvance(e,o)||i)&&a.is(":visible")){if(p&&r){var l=$(a.vars.asNavFor).data("flexslider");if(a.atEnd=0===e||e===a.count-1,l.flexAnimate(e,!0,!1,!0,o),a.direction=a.currentItem<e?"next":"prev",l.direction=a.direction,Math.ceil((e+1)/a.visible)-1===a.currentSlide||0===e)return a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),!1;a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),e=Math.floor(e/a.visible)}if(a.animating=!0,a.animatingTo=e,t&&a.pause(),a.vars.before(a),a.syncExists&&!o&&m.sync("animate"),a.vars.controlNav&&m.controlNav.active(),u||a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),a.atEnd=0===e||e===a.last,a.vars.directionNav&&m.directionNav.update(),e===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause()),v)s?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(e).css({opacity:1,zIndex:2}),a.wrapup(f)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,a.vars.easing),a.slides.eq(e).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing,a.wrapup));else{var f=c?a.slides.filter(":first").height():a.computedW,g,h,S;u?(g=a.vars.itemMargin,S=(a.itemW+g)*a.move*a.animatingTo,h=S>a.limit&&1!==a.visible?a.limit:S):h=0===a.currentSlide&&e===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?d?(a.count+a.cloneOffset)*f:0:a.currentSlide===a.last&&0===e&&a.vars.animationLoop&&"prev"!==a.direction?d?0:(a.count+1)*f:d?(a.count-1-e+a.cloneOffset)*f:(e+a.cloneOffset)*f,a.setProps(h,"",a.vars.animationSpeed),a.transitions?(a.vars.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(a.ensureAnimationEnd),a.wrapup(f)}),clearTimeout(a.ensureAnimationEnd),a.ensureAnimationEnd=setTimeout(function(){a.wrapup(f)},a.vars.animationSpeed+100)):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(f)})}a.vars.smoothHeight&&m.smoothHeight(a.vars.animationSpeed)}},a.wrapup=function(e){v||u||(0===a.currentSlide&&a.animatingTo===a.last&&a.vars.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,a.vars.after(a)},a.animateSlides=function(){!a.animating&&f&&a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.animatedSlides=null,a.playing=!1,a.vars.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.playing&&clearInterval(a.animatedSlides),a.animatedSlides=a.animatedSlides||setInterval(a.animateSlides,a.vars.slideshowSpeed),a.started=a.playing=!0,a.vars.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.stop=function(){a.pause(),a.stopped=!0},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var i=function(){var n=e?e:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo,i=function(){if(u)return"setTouch"===t?e:d&&a.animatingTo===a.last?0:d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:n;switch(t){case"setTotal":return d?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return d?e:e;case"jumpEnd":return d?e:a.count*e;case"jumpStart":return d?a.count*e:e;default:return e}}();return-1*i+"px"}();a.transitions&&(i=c?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n),a.container.css("transition-duration",n)),a.args[a.prop]=i,(a.transitions||void 0===n)&&a.container.css(a.args),a.container.css("transform",i)},a.setup=function(e){if(v)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):0==a.vars.fadeFirstSlide?a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).css({opacity:1}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&m.smoothHeight();else{var t,i;"init"===e&&(a.viewport=$('<div class="'+n+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,d&&(i=$.makeArray(a.slides).reverse(),a.slides=$(i),a.container.empty().append(a.slides))),a.vars.animationLoop&&!u&&(a.cloneCount=2,a.cloneOffset=1,"init"!==e&&a.container.find(".clone").remove(),a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),a.newSlides=$(a.vars.selector,a),t=d?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,c&&!u?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(t*a.h,"init")},"init"===e?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(t*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),a.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}u||a.slides.removeClass(n+"active-slide").eq(a.currentSlide).addClass(n+"active-slide"),a.vars.init(a)},a.doMath=function(){var e=a.slides.first(),t=a.vars.itemMargin,n=a.vars.minItems,i=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),u?(a.itemT=a.vars.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=i?i*a.itemT-t:a.w,a.itemW=a.minW>a.w?(a.w-t*(n-1))/n:a.maxW<a.w?(a.w-t*(i-1))/i:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=a.vars.move>0&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+t*(a.count-1):(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),u||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),a.vars.controlNav&&!a.manualControls&&("add"===t&&!u||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!u||a.pagingCount<a.controlNav.length)&&(u&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),a.vars.directionNav&&m.directionNav.update()},a.addSlide=function(e,t){var n=$(e);a.count+=1,a.last=a.count-1,c&&d?void 0!==t?a.slides.eq(a.count-t).after(n):a.container.prepend(n):void 0!==t?a.slides.eq(t).before(n):a.container.append(n),a.update(t,"add"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.added(a)},a.removeSlide=function(e){var t=isNaN(e)?a.slides.index($(e)):e;a.count-=1,a.last=a.count-1,isNaN(e)?$(e,a.slides).remove():c&&d?a.slides.eq(a.last).remove():a.slides.eq(e).remove(),a.doMath(),a.update(t,"remove"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.removed(a)},m.init()},$(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);


/*! Masonry PACKAGED v3.2.2 */
!function(a){"use strict";function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(this),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){for(var b in a)return!1;return b=null,!0}function d(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function e(a,e,f){function h(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}var i=f("transition"),j=f("transform"),k=i&&j,l=!!f("perspective"),m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[i],n=["transform","transition","transitionDuration","transitionProperty"],o=function(){for(var a={},b=0,c=n.length;c>b;b++){var d=n[b],e=f(d);e&&e!==d&&(a[d]=e)}return a}();b(h.prototype,a.prototype),h.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},h.prototype.getSize=function(){this.size=e(this.element)},h.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=o[c]||c;b[d]=a[c]}},h.prototype.getPosition=function(){var a=g(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=parseInt(a[c?"left":"right"],10),f=parseInt(a[d?"top":"bottom"],10);e=isNaN(e)?0:e,f=isNaN(f)?0:f;var h=this.layout.size;e-=c?h.paddingLeft:h.paddingRight,f-=d?h.paddingTop:h.paddingBottom,this.position.x=e,this.position.y=f},h.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={};b.isOriginLeft?(c.left=this.position.x+a.paddingLeft+"px",c.right=""):(c.right=this.position.x+a.paddingRight+"px",c.left=""),b.isOriginTop?(c.top=this.position.y+a.paddingTop+"px",c.bottom=""):(c.bottom=this.position.y+a.paddingBottom+"px",c.top=""),this.css(c),this.emitEvent("layout",[this])};var p=l?function(a,b){return"translate3d("+a+"px, "+b+"px, 0)"}:function(a,b){return"translate("+a+"px, "+b+"px)"};h.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={},k=this.layout.options;h=k.isOriginLeft?h:-h,i=k.isOriginTop?i:-i,j.transform=p(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},h.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},h.prototype.moveTo=k?h.prototype._transitionTo:h.prototype.goTo,h.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},h.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},h.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var q=j&&d(j)+",opacity";h.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:q,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(m,this,!1))},h.prototype.transition=h.prototype[i?"_transition":"_nonTransition"],h.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},h.prototype.onotransitionend=function(a){this.ontransitionend(a)};var r={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};h.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,d=r[a.propertyName]||a.propertyName;if(delete b.ingProperties[d],c(b.ingProperties)&&this.disableTransition(),d in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[d]),d in b.onEnd){var e=b.onEnd[d];e.call(this),delete b.onEnd[d]}this.emitEvent("transitionEnd",[this])}},h.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(m,this,!1),this.isTransitioning=!1},h.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var s={transitionProperty:"",transitionDuration:""};return h.prototype.removeTransitionStyles=function(){this.css(s)},h.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},h.prototype.remove=function(){if(!i||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.on("transitionEnd",function(){return a.removeElem(),!0}),this.hide()},h.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options;this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0})},h.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options;this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},h.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h}var f=a.getComputedStyle,g=f?function(a){return f(a,null)}:function(a){return a.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property")):(a.Outlayer={},a.Outlayer.Item=e(a.EventEmitter,a.getSize,a.getStyleProperty))}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){return"[object Array]"===l.call(a)}function d(a){var b=[];if(c(a))b=a;else if(a&&"number"==typeof a.length)for(var d=0,e=a.length;e>d;d++)b.push(a[d]);else b.push(a);return b}function e(a,b){var c=n(b,a);-1!==c&&b.splice(c,1)}function f(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()}function g(c,g,l,n,o,p){function q(a,c){if("string"==typeof a&&(a=h.querySelector(a)),!a||!m(a))return void(i&&i.error("Bad "+this.constructor.namespace+" element: "+a));this.element=a,this.options=b({},this.constructor.defaults),this.option(c);var d=++r;this.element.outlayerGUID=d,s[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var r=0,s={};return q.namespace="outlayer",q.Item=p,q.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},b(q.prototype,l.prototype),q.prototype.option=function(a){b(this.options,a)},q.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),b(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},q.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},q.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},q.prototype._filterFindItemElements=function(a){a=d(a);for(var b=this.options.itemSelector,c=[],e=0,f=a.length;f>e;e++){var g=a[e];if(m(g))if(b){o(g,b)&&c.push(g);for(var h=g.querySelectorAll(b),i=0,j=h.length;j>i;i++)c.push(h[i])}else c.push(g)}return c},q.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},q.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},q.prototype._init=q.prototype.layout,q.prototype._resetLayout=function(){this.getSize()},q.prototype.getSize=function(){this.size=n(this.element)},q.prototype._getMeasurement=function(a,b){var c,d=this.options[a];d?("string"==typeof d?c=this.element.querySelector(d):m(d)&&(c=d),this[a]=c?n(c)[b]:d):this[a]=0},q.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},q.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},q.prototype._layoutItems=function(a,b){function c(){d.emitEvent("layoutComplete",[d,a])}var d=this;if(!a||!a.length)return void c();this._itemsOn(a,"layout",c);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f],i=this._getItemLayoutPosition(h);i.item=h,i.isInstant=b||h.isLayoutInstant,e.push(i)}this._processLayoutQueue(e)},q.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},q.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},q.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},q.prototype._postLayout=function(){this.resizeContainer()},q.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},q.prototype._getContainerSize=k,q.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},q.prototype._itemsOn=function(a,b,c){function d(){return e++,e===f&&c.call(g),!0}for(var e=0,f=a.length,g=this,h=0,i=a.length;i>h;h++){var j=a[h];j.on(b,d)}},q.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},q.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},q.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},q.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e(d,this.stamps),this.unignore(d)}},q.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=d(a)):void 0},q.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},q.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},q.prototype._manageStamp=k,q.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,d=n(a),e={left:b.left-c.left-d.marginLeft,top:b.top-c.top-d.marginTop,right:c.right-b.right-d.marginRight,bottom:c.bottom-b.bottom-d.marginBottom};return e},q.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},q.prototype.bindResize=function(){this.isResizeBound||(c.bind(a,"resize",this),this.isResizeBound=!0)},q.prototype.unbindResize=function(){this.isResizeBound&&c.unbind(a,"resize",this),this.isResizeBound=!1},q.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},q.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},q.prototype.needsResizeLayout=function(){var a=n(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},q.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},q.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},q.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},q.prototype.reveal=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.reveal()}},q.prototype.hide=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.hide()}},q.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},q.prototype.getItems=function(a){if(a&&a.length){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c],f=this.getItem(e);f&&b.push(f)}return b}},q.prototype.remove=function(a){a=d(a);var b=this.getItems(a);if(b&&b.length){this._itemsOn(b,"remove",function(){this.emitEvent("removeComplete",[this,b])});for(var c=0,f=b.length;f>c;c++){var g=b[c];g.remove(),e(g,this.items)}}},q.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete s[e],delete this.element.outlayerGUID,j&&j.removeData(this.element,this.constructor.namespace)},q.data=function(a){var b=a&&a.outlayerGUID;return b&&s[b]},q.create=function(a,c){function d(){q.apply(this,arguments)}return Object.create?d.prototype=Object.create(q.prototype):b(d.prototype,q.prototype),d.prototype.constructor=d,d.defaults=b({},q.defaults),b(d.defaults,c),d.prototype.settings={},d.namespace=a,d.data=q.data,d.Item=function(){p.apply(this,arguments)},d.Item.prototype=new p,g(function(){for(var b=f(a),c=h.querySelectorAll(".js-"+b),e="data-"+b+"-options",g=0,k=c.length;k>g;g++){var l,m=c[g],n=m.getAttribute(e);try{l=n&&JSON.parse(n)}catch(o){i&&i.error("Error parsing "+e+" on "+m.nodeName.toLowerCase()+(m.id?"#"+m.id:"")+": "+o);continue}var p=new d(m,l);j&&j.data(m,a,p)}}),j&&j.bridget&&j.bridget(a,d),d},q.Item=p,q}var h=a.document,i=a.console,j=a.jQuery,k=function(){},l=Object.prototype.toString,m="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},n=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],g):"object"==typeof exports?module.exports=g(require("eventie"),require("doc-ready"),require("wolfy87-eventemitter"),require("get-size"),require("desandro-matches-selector"),require("./item")):a.Outlayer=g(a.eventie,a.docReady,a.EventEmitter,a.getSize,a.matchesSelector,a.Outlayer.Item)}(window),function(a){function b(a,b){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}var c=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(e===b)return c}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size")):a.Masonry=b(a.Outlayer,a.getSize)}(window);

/*! scrollup v2.4.0 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);

/*! jQuery Smooth Scroll - v1.5.5 - 2015-02-19 */
(function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?t(require("jquery")):t(jQuery)})(function(t){function e(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var l="1.5.5",o={},n={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},s=function(e){var l=[],o=!1,n=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var e=t(this);e[n]()>0?l.push(this):(e[n](1),o=e[n]()>0,o&&l.push(this),e[n](0))}}),l.length||this.each(function(){"BODY"===this.nodeName&&(l=[this])}),"first"===e.el&&l.length>1&&(l=[l[0]]),l};t.fn.extend({scrollable:function(t){var e=s.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=s.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(l,o){if(l=l||{},"options"===l)return o?this.each(function(){var e=t(this),l=t.extend(e.data("ssOpts")||{},o);t(this).data("ssOpts",l)}):this.first().data("ssOpts");var n=t.extend({},t.fn.smoothScroll.defaults,l),s=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(l){var o=this,r=t(this),i=t.extend({},n,r.data("ssOpts")||{}),c=n.exclude,a=i.excludeWithin,f=0,h=0,u=!0,d={},p=location.hostname===o.hostname||!o.hostname,m=i.scrollTarget||t.smoothScroll.filterPath(o.pathname)===s,S=e(o.hash);if(i.scrollTarget||p&&m&&S){for(;u&&c.length>f;)r.is(e(c[f++]))&&(u=!1);for(;u&&a.length>h;)r.closest(a[h++]).length&&(u=!1)}else u=!1;u&&(i.preventDefault&&l.preventDefault(),t.extend(d,i,{scrollTarget:i.scrollTarget||S,link:o}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,l){if("options"===e&&"object"==typeof l)return t.extend(o,l);var n,s,r,i,c,a=0,f="offset",h="scrollTop",u={},d={};"number"==typeof e?(n=t.extend({link:null},t.fn.smoothScroll.defaults,o),r=e):(n=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},o),n.scrollElement&&(f="position","static"===n.scrollElement.css("position")&&n.scrollElement.css("position","relative"))),h="left"===n.direction?"scrollLeft":h,n.scrollElement?(s=n.scrollElement,/^(?:HTML|BODY)$/.test(s[0].nodeName)||(a=s[h]())):s=t("html, body").firstScrollable(n.direction),n.beforeScroll.call(s,n),r="number"==typeof e?e:l||t(n.scrollTarget)[f]()&&t(n.scrollTarget)[f]()[n.direction]||0,u[h]=r+a+n.offset,i=n.speed,"auto"===i&&(c=u[h]-s.scrollTop(),0>c&&(c*=-1),i=c/n.autoCoefficient),d={duration:i,easing:n.easing,complete:function(){n.afterScroll.call(n.link,n)}},n.step&&(d.step=n.step),s.length?s.stop().animate(u,d):n.afterScroll.call(n.link,n)},t.smoothScroll.version=l,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=n});

/* jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010 */
(function($,p){"use strict";var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);

/* jQuery hashchange event - v1.2 - 2/11/2010 http://benalman.com/projects/jquery-hashchange-plugin/ */
(function($,i,b){"use strict";var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);

/*! jQuery Waypoints - v2.0.5 */
(function(){"use strict";var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);

/*! Retina.js v1.3.0 */
!function(){"use strict";function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();

/*! Isotope PACKAGED v2.1.1 */
(function(t){"use strict";function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):"object"==typeof exports?i(require("jquery")):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||o()}function o(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var o=s[t];o()}}function n(n){return"complete"===r.readyState?o():(n.bind(r,"DOMContentLoaded",i),n.bind(r,"readystatechange",i),n.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],n):"object"==typeof exports?module.exports=n(require("eventie")):t.docReady=n(t.eventie)}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function n(i){function n(){if(!d){d=!0;var o=t.getComputedStyle;if(p=function(){var t=o?function(t){return o(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||r("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1"),i}}(),h=i("boxSizing")){var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[h]="border-box";var s=document.body||document.documentElement;s.appendChild(n);var a=p(n);f=200===e(a.width),s.removeChild(n)}}}function a(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=p(t);if("none"===i.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var a=r.isBorderBox=!(!h||!i[h]||"border-box"!==i[h]),d=0,l=s.length;l>d;d++){var c=s[d],y=i[c];y=u(t,y);var m=parseFloat(y);r[c]=isNaN(m)?0:m}var g=r.paddingLeft+r.paddingRight,v=r.paddingTop+r.paddingBottom,_=r.marginLeft+r.marginRight,I=r.marginTop+r.marginBottom,L=r.borderLeftWidth+r.borderRightWidth,z=r.borderTopWidth+r.borderBottomWidth,b=a&&f,x=e(i.width);x!==!1&&(r.width=x+(b?0:g+L));var S=e(i.height);return S!==!1&&(r.height=S+(b?0:v+z)),r.innerWidth=r.width-(g+L),r.innerHeight=r.height-(v+z),r.outerWidth=r.width+_,r.outerHeight=r.height+I,r}}function u(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var o=e.style,n=o.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),o.left=i,i=o.pixelLeft,o.left=n,s&&(r.left=s),i}var p,h,f,d=!1;return a}var r="undefined"==typeof console?i:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("desandro-get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t){function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){i(t);for(var o=t.parentNode.querySelectorAll(e),n=0,r=o.length;r>n;n++)if(o[n]===t)return!0;return!1}function n(t,o){return i(t),e(t,o)}var r,s=function(){if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,o=e.length;o>i;i++){var n=e[i],r=n+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),u=e(a,"div");r=u?e:n}else r=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var o=l[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=c[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property")):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=l(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):d(o)&&(i=o),this[t]=i?l(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=l(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize();var n=this.element.outlayerGUID;delete v[n],delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,d=i[s],l=d.getAttribute(n);try{f=l&&JSON.parse(l)}catch(c){u&&u.error("Error parsing "+n+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var y=new o(d,f);p&&p.data(d,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,d="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):"object"==typeof exports?module.exports=s(require("eventie"),require("doc-ready"),require("wolfy87-eventemitter"),require("get-size"),require("desandro-matches-selector"),require("./item")):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):"object"==typeof exports?module.exports=i(require("../layout-mode"),require("masonry-layout")):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var d=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=u,d.LayoutMode=h,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},d.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e
},d.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){function e(){o.reveal(i.needReveal),o.hide(i.needHide)}this.option(t),this._getIsInstant();var i=this._filter(this.items);this.filteredItems=i.matches;var o=this;this._isInstant?this._noTransition(e):e(),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],r=this._getFilterTest(e),s=0,a=t.length;a>s;s++){var u=t[s];if(!u.isIgnored){var p=r(u);p&&i.push(u),p&&u.isHidden?o.push(u):p||u.isHidden||n.push(u)}}return{matches:i,needReveal:o,needHide:n}},d.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.prototype.updateSortData=function(t){var e;t?(t=o(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=d.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},d.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e).matches;for(i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(c.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):"object"==typeof exports?module.exports=r(require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);;
"use strict";
/**
 * General Custom JS Functions
 *
 * @author     Themovation <themovation@gmail.com>
 * @copyright  2014 Themovation INC.
 * @license    http://themeforest.net/licenses/regular
 * @version    1.1
 */

/*
 # Helper Functions
 # On Window Resize
 # On Window Load
 */

//======================================================================
// Helper Functions
//======================================================================


//-----------------------------------------------------
// NAVIGATION - Adds support for Mobile Navigation
// Detect screen size, add / subtract data-toggle
// for mobile dropdown menu.
//-----------------------------------------------------	
function themo_support_mobile_navigation(){
	
	// If mobile navigation is active, add data attributes for mobile touch / toggle
	if (Modernizr.mq('(max-width: 767px)')) {
		//console.log('Adding data-toggle, data-target');
		jQuery("li.dropdown .dropdown-toggle").attr("data-toggle", "dropdown");
		jQuery("li.dropdown .dropdown-toggle").attr("data-target", "#");
	}
	
	// If mobile navigation is NOT active, remove data attributes for mobile touch / toggle
	if (Modernizr.mq('(min-width:768px)')) {
		//console.log('Removing data-toggle, data-target');
		jQuery("li.dropdown .dropdown-toggle").removeAttr("data-toggle", "dropdown");
		jQuery("li.dropdown .dropdown-toggle").removeAttr("data-target", "#");
	}
	
	/*
	Support for Old Browsers | OLD IE | Might need this after testing.
	var windowWidth = jQuery( window ).width();
	if(windowWidth > 767){
		console.log('Remove data-toggle');		
		jQuery("li.dropdown .dropdown-toggle").removeAttr("data-toggle", "dropdown");
		jQuery("li.dropdown .dropdown-toggle").removeAttr("data-target", "#");
	}else {
		if(windowWidth < 767){
			console.log('Adding data-toggle');
			jQuery("li.dropdown .dropdown-toggle").attr("data-toggle", "dropdown");
			jQuery("li.dropdown .dropdown-toggle").attr("data-target", "#");
		}
	}*/
}



//-----------------------------------------------------
// ANIMATION - Adds support for CS3 Animations
// Check if element is visible after scrolling
//-----------------------------------------------------	
function themo_animate_scrolled_into_view(elem,animation,time_to_delay){

    // If elem does not exist, break.
    if(!jQuery(elem).length){
        return false;
    }

		// If an anmiated class has already beed added, then skip it.
		if (jQuery(elem).is('.slideUp, .slideDown, .slideLeft, .slideRight, .fadeIn')) { 
			//console.log('skip');
		}else{
		
			var offset = 0; // Off set from bottom of screen
			var offset_large = jQuery(window).height() - 700; // Offset for tall images.
			//console.log('Window Height '+jQuery(window).height())
			
			var docViewTop = jQuery(window).scrollTop(); // top of window position
			//console.log('Window Top '+docViewTop)
			
			var docViewBottom = docViewTop + jQuery(window).height(); // bottom of window position
			//console.log('Window Bottom '+docViewBottom)

			var elemTop = jQuery(elem).offset().top; // Top of element position
			//console.log(elem.selector + ' Top '+elemTop)
			
			var elemBottom = elemTop + jQuery(elem).height(); // bottom of element position
			//console.log(elem.selector + ' Height '+jQuery(elem).height())
			//console.log(elem.selector + ' Bottom '+elemBottom)
		
			//console.log("----------------------------");
			
			/*
			Caveat:	We are working with a numbered positions so if X has highter numbered pos (100) than Y does(50), it actually has a lower phyisial position on the screen.
					If the top of the windows position is 100 is X has a position of 150, it means that X is lower on the page than the top of the window.
			
				1) IF the bottom of element is physically lower than the top of the Window.
					> e.g. Bottom elem = 100 and the top of window is 50, means bottom of elem has a lower physical position than the top of window
					> This could happen when the element bottom enters from the top of the window.
					
				2) IF the top of element is physically higher than the bottom of (the Window + offset).
					> e.g. Top elem = 100 and the bottom of window is 150, means top of elem is above the bottom of the window
					> This could happen when the element top enteres from the bottom of the window.
				
				#3 and #4 ensure that the entire element is inside the window so the animation won't kick in until the whole thing is visible and between the top and bottom of the window.
				
				3) IF the bottom of the element is above the bottom of the screen.
					> e.g. bottom of elem = 100 and bottom of window = 150, means bottom of elem is above the bottom of the window
					> This could happen when the element bottom enteres from the bottom of the window.
				
				4) IF the top of the element is lower than the top of the window.
					> e.g. top of elem = 100 and top of window = 50, means top of elem is lower than the top of the window
					> This could happen when the element top enteres from the top of the window.
					
				#5 & #6	For the edge case where the elem is taller than the window, so at one point the top is above the window and bottom is below.
					To resovle this we use offset, to prompt the elme to animate once we know its top or bottom is into the screen deep enough to be animated.
				
				5) IF top of elem is above (bottom of window - large offset)
				
				6) If bottom of elem is below (top of window + large offest) */
			
		
			if(((elemBottom >= docViewTop) && (elemTop <= docViewBottom-offset) && (elemBottom <= docViewBottom-offset) &&  (elemTop >= docViewTop)) ||
				((elemTop <= docViewBottom-offset_large) && (elemBottom >= docViewTop+offset_large))){
				  
				  setTimeout(
				  function() 
				  {
					//console.log(elem.selector)
					jQuery(elem).addClass(animation);
				  }, time_to_delay);
				  
			  }
		}
	 
};



//-----------------------------------------------------
// VERTICAL ALIGN TOUR Meta Copy - Adds support for
// vertical alignment by detecting height of tour boxes
// and setting container box height
//-----------------------------------------------------	

function themo_vertical_align_tour(){
	
	// Loop through all .float-block's
	jQuery( ".float-block" ).each(function() {
	
		//grab #parentID
		var parentID = jQuery( this ).closest("section").attr("id");
		//console.log("Parent ID is: "+parentID);
		
		jQuery("#"+parentID).css('height','auto');
		
		// Get height of #parentID .container
		var containerHeight = jQuery("#"+parentID+' .container').height();
		//console.log("Parent container height is: "+containerHeight);
		
		// Set #parentID height from .container
		jQuery("#"+parentID).height(containerHeight+'px');
		//console.log("Parent ID height is set at : "+containerHeight);
		
		//console.log("----------------------------");
	
	});
}

//-----------------------------------------------------
// VERTICAL ALIGN PORTFOLIO Meta Copy - Adds support for
// vertical alignment by detecting height of project boxes
// and setting container box height
//-----------------------------------------------------

function themo_vertical_align_project_thumb(){

    // Loop through all .float-block's
    jQuery( ".portfolio-item" ).each(function() {

        //grab #parentID
        var parentID = jQuery( this ).closest("div").attr("id");
        console.log("Parent ID is: "+parentID);

        jQuery("#"+parentID).css('height','auto');

        // Get height of #parentID .container
        var containerHeight = jQuery("#"+parentID+' .port-wrap').height();
        console.log("Parent container height is: "+containerHeight);

        // Set #parentID height from .container
        jQuery("#"+parentID).height(containerHeight+'px');
        jQuery("#"+parentID + " .port-inner").height(containerHeight+'px');

        console.log("Parent "+parentID+" ID height is set at : "+containerHeight);

        //console.log("----------------------------");

    });

    jQuery(".port-center").css('visibility','visible');
}


//-----------------------------------------------------
// Adjust Padding for Transparent Header
// Need to adjust padding if transparent header is enabled,
// since we'll be using position: absolute and that will cause
// padding issues with the first page header or slider.
//-----------------------------------------------------	

function themo_adjust_padding_transparent_header(elem){
	
	// Check if Transparency is enabled.
	if(jQuery('body').find('header.banner[data-transparent-header="true"]').length > 0) {
		
		// Get the height of the navigation header
		var headerHeight = parseInt(jQuery("header.banner").height());
		//console.log('DIGGITY DOG!');
		//console.log('Header Height '+headerHeight);
		
		// Adjust Padding for all sliders and page headers.

		
		
		//jQuery( "#main-flex-slider .themo_slider_0, section#themo_page_header_1" ).each(function() {
		jQuery( elem ).each(function() {	
			// Get current padding			
			var currentPadding = parseInt(jQuery(this).css("padding-top").replace(/[^-\d\.]/g, ''));
			//console.log('Current Padding '+currentPadding);
			
			// Calculate
			var newPadding = currentPadding+headerHeight;
			//console.log('New Padding '+newPadding);
		
			// Adjust and set new padding.
			jQuery(this).css({
				"padding-top":newPadding+"px"
			});
			
			//console.log("----------------------------");
		
		});	
		
	};

}

//-----------------------------------------------------
// Detect if touch device via modernizr, return true
//-----------------------------------------------------	
function themo_is_touch_device(checkScreenSize){

	if (typeof checkScreenSize === "undefined" || checkScreenSize === null) { 
    	checkScreenSize = true; 
	}

	var deviceAgent = navigator.userAgent.toLowerCase();
 
	var isTouch = Modernizr.touch ||
		(deviceAgent.match(/(iphone|ipod|ipad)/) ||
		deviceAgent.match(/(android)/)  || 
		deviceAgent.match(/iphone/i) || 
		deviceAgent.match(/ipad/i) || 
		deviceAgent.match(/ipod/i) || 
		deviceAgent.match(/blackberry/i));
	
	if(checkScreenSize){
		var isMobileSize = Modernizr.mq('(max-width:767px)');
	}else{
		var isMobileSize = false;
	}
	
	if(isTouch || isMobileSize ){
		return true;
	}

	return false;
}

//-----------------------------------------------------
// Initiate PARALLAX
//-----------------------------------------------------
function themo_start_parallax(isTouch){

	var $body = jQuery(".parallax-bg").parents(".preloader");
	
	//-----------------------------------------------------
	// Select all parallax elemnts and start stellar script
	// Don't start stellar if viewer is a touch device
	// Use imagesLoaded to detect when images are loaded, until
	// then use a preloader gif
	//-----------------------------------------------------
	var posts = document.querySelectorAll('.parallax-bg');
		imagesLoaded( posts, function() { // Detect when images have been loaded (preloader)
			// Do not use if a touch device!
			if(!isTouch){ 
				themo_startStellar();
			}
			$body.removeClass('loading').addClass('loaded'); // once images are loaded, remove preloader animation
		});
}


//-----------------------------------------------------
// Disable Transparent Header for Mobile
//-----------------------------------------------------
function themo_no_transparent_header_for_mobile(isTouch){
	
	if (jQuery(".navbar[data-transparent-header]").length) {
		if(isTouch){ 
			jQuery('.navbar').attr("data-transparent-header", "false");		
		}
		else{
			jQuery('.navbar').attr("data-transparent-header", "true");		
		}
	}
}

//-----------------------------------------------------
// Initiate Steller (PARALLAX library)
//-----------------------------------------------------
function themo_startStellar(){
	jQuery.stellar({
		horizontalScrolling: false,
		//verticalOffset: 145
	});
}	

//-----------------------------------------------------
// Initiate Masonry
//-----------------------------------------------------	
function themo_start_masonry(){
	// If masonry elements exist, start using script.
	if (jQuery('.mas-blog').length > 0) {  // it exists 
		var container = document.querySelector('.mas-blog');
		var msnry = new Masonry( container, {
		  // options
		  columnWidth: '.mas-blog-post',
		  itemSelector: '.mas-blog-post'
		});
	}
}

//-----------------------------------------------------
// Active Lightbox
//-----------------------------------------------------	
function themo_active_lightbox(){
	// delegate calls to data-toggle="lightbox"
	jQuery(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		return jQuery(this).ekkoLightbox({
			always_show_close: true,
			gallery_parent_selector: '.gallery',
            right_arrow_class: '.flex-next',
            left_arrow_class: '.flex-prev'
		});
	});
}

//-----------------------------------------------------
// Adjust Pricing Table Height
//-----------------------------------------------------

function themo_adjust_pricing_table_height(){
		
	var $tallestCol;
	
	// For each pricing-table element
	jQuery('.pricing-table').each(function(){
		$tallestCol = 0;
		
		// Find the plan name
		jQuery(this).find('> div .pricing-title').each(function(){
			(jQuery(this).height() > $tallestCol) ? $tallestCol = jQuery(this).height() : $tallestCol = $tallestCol;	
		});	
		
		// Safety net increase pricing tables height couldn't be determined
		if($tallestCol == 0) $tallestCol = 'auto';
		
		// set even height
		jQuery(this).find('> div .pricing-title').css('height',$tallestCol);
		
		// FEATURES UL
		jQuery(this).find('> div .features').each(function(){
			(jQuery(this).height() > $tallestCol) ? $tallestCol = jQuery(this).height() : $tallestCol = $tallestCol;	
		});	
		
		// Safety net incase pricing tables height couldn't be determined
		if($tallestCol == 0) $tallestCol = 'auto';
		
		// Set even height
		jQuery(this).find('> div .features').css('height',$tallestCol);
		
		// END FEATURES UL
		
	});
}

//-----------------------------------------------------
// Initiate Thumbnail Slider (flexslider)
//-----------------------------------------------------

function themo_start_thumb_slider(id) {
	 jQuery(id).flexslider({
			animation: "slide",
            controlNav: false,
            animationLoop: true,
            slideshow: false,
            itemWidth: 255,
            itemMargin: 40,
			maxItems: 4,
			prevText: '',
			nextText: '',
			 start: function(){
				 jQuery('.thumb-flex-slider .slides img').show();

			 }
			//controlsContainer: '.flex-container'
			//useCSS: false
	  });
}

//-----------------------------------------------------
// Initiate Slider (flexslider)
//-----------------------------------------------------
function themo_start_flex_slider(flex_selector,themo_flex_animation, themo_flex_easing,
					themo_flex_animationloop, themo_flex_smoothheight, themo_flex_slideshowspeed, themo_flex_animationspeed,
					themo_flex_randomize, themo_flex_pauseonhover, themo_flex_touch, themo_flex_directionnav,themo_flex_controlNav){
	// SETUP FLEXSLIDER OPTIONS
    // Remove ajax_loader.gif from Formidable Plugin
	jQuery("img.frm_ajax_loading").remove();
	jQuery(flex_selector).flexslider({
		animation: themo_flex_animation,
		smoothHeight: themo_flex_smoothheight,
		easing: themo_flex_easing,
		animationLoop: themo_flex_animationloop,
		slideshowSpeed: themo_flex_slideshowspeed,
		animationSpeed: themo_flex_animationspeed,
		randomize: themo_flex_randomize,
		pauseOnHover: themo_flex_pauseonhover,
		touch: themo_flex_touch,
		directionNav: themo_flex_directionnav,
		controlNav: themo_flex_controlNav,
		//directionNav: false,
		prevText: '',
		nextText: '',
		start: function (slider) {
			//slider.removeClass( "flexpreloader");
			jQuery('body').addClass('loaded');
		},
		after: function (slider) {
		},
		before: function () {
		}
	});
}

//-----------------------------------------------------
// Scroll Up
//-----------------------------------------------------
function themo_start_scrollup() {
	
	jQuery.scrollUp({
		animationSpeed: 200,
		animation: 'fade',
		scrollSpeed: 500,
		scrollImg: { active: true, type: 'background', src: '../../images/top.png' }
	});
};



function themo_disable_animation_for_mobile() {
		
	//console.log('Disable touch for mobile');
	// Detect and set isTouch for touch screens
	var isTouchAnimation = themo_is_touch_device(false);

	if(isTouchAnimation){ 
			jQuery(".hide-animation").removeClass("hide-animation");
			//jQuery.each.removeClass("hide-animation");
		}
};


function themo_init_one_page_scroll(){

	/* When page loads, set first link to active. */
	if(jQuery('nav ul.navbar-nav .th-anchor').hasClass( "active" )){ 
		jQuery('nav ul.navbar-nav .th-anchor').removeClass('active');
		jQuery('nav ul.navbar-nav .th-anchor-top').addClass('active');
	}
		

    /* Cache some variables */
    var slide = jQuery('section').parent('div') ;
    var mywindow = jQuery(window);
    var htmlbody = jQuery('html,body');
	var isTouch = themo_is_touch_device(false);
	
	/* Smooth Scroll */
	jQuery(document)
        .on('click', 'a[href*="#"]', function() {

            // if th-anchor-top scroll to top
            var isTop = jQuery(this).parent('li').hasClass('th-anchor-top');
            if (isTop) {
                //console.log('call top top JS');
                jQuery( "#scrollUp" ).trigger( "click" );
                return false;
            }

            /* If click originates from Accordion Toggle, exit. */
            var isAccordion = jQuery( this ).hasClass( "accordion-toggle" );

            var isTab = jQuery( this ).attr('data-toggle');

            if (isAccordion || isTab) {
                //console.log('abort, exit completely out of click handler');
                return;
            }
		
            if ( this.hash && this.pathname === location.pathname && this.host === location.host) {
        var slashedHash = '#/' + this.hash.slice(1);
        if ( this.hash ) {
          if ( slashedHash === location.hash ) {
				
				// There are a few offsets that need to be calculated
				var smoothScroll_offset = 0;
				var navbar_collapse_offset = 0;
				if (jQuery("header").hasClass("headhesive--clone")) {
					smoothScroll_offset = jQuery(".headhesive--clone").height() ;
					if(jQuery("header nav.navbar-collapse").hasClass("in")){
						navbar_collapse_offset = jQuery("header nav.navbar-collapse.in").height() ;
						smoothScroll_offset =  smoothScroll_offset - navbar_collapse_offset;
					}	

				}
							
				jQuery.smoothScroll({offset: -smoothScroll_offset, scrollTarget: this.hash,
				 	beforeScroll: function() { // Close Mobile Menu
						var bsNav = jQuery('header .navbar-collapse');
		  
						if (bsNav.hasClass("collapse in")) {
							bsNav.removeClass("in");
							//mainNav.removeClass("open");
						}
					},
					afterScroll: function() {  // Update Active Links, but not for mobile / touch
						if(!isTouch){ 
							var links = jQuery('nav ul.navbar-nav').find('li.th-anchor a');
					
							jQuery(links).each(function() {
								var hashtag = jQuery(this).attr('href').split('#')[1];
								if(hashtag === this.hash){
									jQuery(this).parent('li').addClass('active');
								}else{
									jQuery(this).parent('li').removeClass('active');
								}
							});
						}
					}
					
				});
          } else {
            jQuery.bbq.pushState(slashedHash);
          }
          return false;
        }
      }
    })
    .ready(function() {
      jQuery(window).bind('hashchange', function(event) {
        var tgt = location.hash.replace(/^#\/?/,'');
        
		if ( document.getElementById(tgt) ) {
        	
			// There are a few offsets that need to be calculated
			var smoothScroll_offset = 0;
			var navbar_collapse_offset = 0;
			if (jQuery("header").hasClass("headhesive--clone")) {
				smoothScroll_offset = jQuery(".headhesive--clone").height() ;
				if(jQuery("header nav.navbar-collapse").hasClass("in")){
					navbar_collapse_offset = jQuery("header nav.navbar-collapse.in").height() ;
					smoothScroll_offset =  smoothScroll_offset - navbar_collapse_offset;
				}
			}
			
						

			jQuery.smoothScroll({offset: -smoothScroll_offset, scrollTarget: '#' + tgt,
				beforeScroll: function() { // Close Mobile Menu
					var bsNav = jQuery('header .navbar-collapse');
		  
					if (bsNav.hasClass("collapse in")) {
						bsNav.removeClass("in");
						//mainNav.removeClass("open");
					}
				},
				afterScroll: function() {  // Update Active Links, but not for mobile / touch
					if(!isTouch){ 
					var links = jQuery('nav ul.navbar-nav').find('li.th-anchor a');
				
						jQuery(links).each(function() {
							var hashtag = jQuery(this).attr('href').split('#')[1];
							if(hashtag === tgt){
								jQuery(this).parent('li').addClass('active');
							}else{
								jQuery(this).parent('li').removeClass('active');
							}
						});
					}
				}
				
			});
        }
      });
      jQuery(window).trigger('hashchange'); 
    });
 
	 
 	if(!isTouch){
		//Setup waypoints plugin
		slide.waypoint(function (direction) {
			
			var links = jQuery('nav ul.navbar-nav').find('li.th-anchor a');
			//cache the variable of the data-slide attribute associated with each slide
			var dataslide = jQuery(this).attr('id');
			if(typeof dataslide != 'undefined'){
				
				jQuery(links).each(function() {
					var hashtag = jQuery(this).attr('href').split('#')[1];
					if(hashtag === dataslide){
						//console.log('Add Class to '+ hashtag);
						jQuery(this).parent('li').addClass('active');
					}else{
						//console.log('Remove Class from '+ hashtag);
						jQuery(this).parent('li').removeClass('active');
					}
				});
			}
		}, { 
			offset: function() {
				if (jQuery("header").hasClass("headhesive--clone")) {
					return jQuery(".headhesive--clone").height() ;
				}else{
					return 0;
				}
			}
			
		});
	}
	
	//waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
	if(!isTouch){
		mywindow.scroll(function () {
			if (mywindow.scrollTop() == 0) {
				if(jQuery('nav ul.navbar-nav .th-anchor').hasClass('active')){
					jQuery('nav ul.navbar-nav .th-anchor').removeClass('active');
					jQuery('nav ul.navbar-nav .th-anchor-top').addClass('active');
				}
			}
		});
	}

};

function themo_init_isotope() {
	// filter items on click handler
    jQuery('.portfolio-filters').on( 'click', 'a', function(e) {

		e.preventDefault();

		// Get Data-filter value
        var filterValue = jQuery(this).attr('data-filter');

		// Get Parent Class
        if (filterValue == '*') {
            console.log('NOTHING')
            var parent_class = jQuery(this).closest('section').attr("id");
        } else {
            var parent_class = jQuery(filterValue).closest('section').attr("id");
        }

		// Remove .current class from all a links inside .portfolio-filters
		jQuery('#'+parent_class+' .portfolio-filters a').removeClass( "current" );

		// Add .current class to current filter link.
		jQuery(this).addClass( "current" );

        //console.log(filterValue);
        //console.log(parent_class);

		// Get the container element to initialize isotope.
        var $container = jQuery('#'+parent_class+' .portfolio-row');
        // init
        $container.isotope({
            // options
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
        });

        $container.isotope({ filter: filterValue });

    });
}

var nice = false;

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function() {
	if (!window.console) {
		window.console = {};
	}
	// union of Chrome, FF, IE, and Safari console methods
	var m = [
		"log", "info", "warn", "error", "debug", "trace", "dir", "group",
		"groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
		"dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
	];
	// define undefined methods as noops to prevent errors
	for (var i = 0; i < m.length; i++) {
		if (!window.console[m[i]]) {
			window.console[m[i]] = function() {};
		}
	}
})();

//======================================================================
// Executes when HTML-Document is loaded and DOM is ready
//======================================================================
jQuery(document).ready(function($) {
	"use strict";

	// If flex slider loading then wait a max of 5 seconds.
	// else check if images are loaded
	if (jQuery("#main-flex-slider")[0]){
		// Do nothing / flex will figure it out.
		//console.log('Let Flex Take Care of It');
		setTimeout(function(){
			console.log('Took too long, timeout and clear preloader');
			jQuery('body').addClass('loaded');
		}, 10000);
	}else{
		jQuery('body').addClass('loaded');
	}



	// Add support for mobile navigation
	themo_support_mobile_navigation($);

	
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		console.log('Smooth Scroll Off (Safari).');
	}else{
		try 
		{
			// Initialise with options
			nice = jQuery("html").niceScroll({
			zindex:20000,
			scrollspeed:60,
			mousescrollstep:60,
			cursorborderradius: '10px', // Scroll cursor radius
			cursorborder: '1px solid rgba(255, 255, 255, 0.4)',
			cursorcolor: 'rgba(0, 0, 0, 0.6)',     // Scroll cursor color
			//autohidemode: 'true',     // Do not hide scrollbar when mouse out
			cursorwidth: '10px',       // Scroll cursor width
			
				});
		} 
		catch (err) {
			console.log('Smooth Scroll Off.');
		}
	}
	
});


//======================================================================
// On Window Load - executes when complete page is fully loaded, including all frames, objects and images
//======================================================================
 jQuery(window).load(function($) {
	 "use strict";

	// Disable animation for mobile.
	themo_disable_animation_for_mobile();

	// Vertically Align Tour Copy
	themo_vertical_align_tour();

	// Vertically Align Project Thumb
	themo_vertical_align_project_thumb();

	// Adjust padding for transparent header
	themo_adjust_padding_transparent_header('section#themo_page_header_1');

	 // Preloader for background images.
	 var $header_preloader = jQuery(".full-header-img").parents(".preloader");

	 //-----------------------------------------------------
	 // Select all full header img classes and wait until images are loaded
	 // before updating loading class to loaded
	 //-----------------------------------------------------
	 var full_header_imgs = document.querySelectorAll('.full-header-img');
	 imagesLoaded( full_header_imgs, function() { // Detect when images have been loaded (preloader)
		 $header_preloader.removeClass('loading').addClass('loaded'); // once images are loaded, remove preloader animation
	 });

	// Detect and set isTouch for touch screens
	var isTouch = themo_is_touch_device();

	// Initiate Parallax Script
	themo_start_parallax(isTouch);

	// Disable Transparent Header for Mobile / touch
	themo_no_transparent_header_for_mobile(isTouch);

	// Initiate Masonry Script
	themo_start_masonry();

	// Initiate Lightbox
	themo_active_lightbox();

	// Adjust Pricing Table Height
	themo_adjust_pricing_table_height();

	// Start Scroll Up
	themo_start_scrollup();

	
	// Headhesive
	//var header = new Headhesive('.navbar-static-top');
	
	// Set options
	if(!isTouch){
		var options = {
			// Scroll offset. Accepts Number or "String" (for class/ID)
			offset: 125, // OR — offset: '.classToActivateAt',
	
			classes: {
				clone:   'headhesive--clone',
				stick:   'headhesive--stick',
				unstick: 'headhesive--unstick'
			}
		};
	
		try 
		{
			// Initialise with options
			var banner = new Headhesive('.banner', options);
			jQuery('body').addClass('headhesive');
		} 
		catch (err) {
			console.log('Sticky Header Off.');
		}
	}else{
		console.log('Sticky Header Off.');
	}
	

	// setup one page scrolling
	themo_init_one_page_scroll();

	// Headhesive destroy
	// banner.destroy();

    // start isotope
     themo_init_isotope();
	
});
 
//======================================================================
// On Window Resize
//======================================================================
 jQuery(window).resize(function($){
	 "use strict";
	// Detect and set isTouch for touch screens
	var isTouch = themo_is_touch_device();


	// Add support for mobile navigation
	themo_support_mobile_navigation();

	// Vertically Align Tour Copy
	themo_vertical_align_tour();

	// Vertically Align Project Thumb
	themo_vertical_align_project_thumb();

	// Disable Transparent Header for Mobile / touch
	themo_no_transparent_header_for_mobile(isTouch);
});


;
/*!
 * headhesive v1.1.1 - An on-demand sticky header
 * Url: http://markgoodyear.com/labs/headhesive
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function(t,s,e){"use strict";function i(t){for(var s=0;t;)s+=t.offsetTop,t=t.offsetParent;return s}var o=function(t,s){for(var e in s)s.hasOwnProperty(e)&&(t[e]="object"==typeof s[e]?o(t[e],s[e]):s[e]);return t},n=function(t,s){var e,i,o,n=Date.now||function(){return(new Date).getTime()},l=null,c=0,h=function(){c=n(),l=null,o=t.apply(e,i),e=i=null};return function(){var r=n(),f=s-(r-c);return e=this,i=arguments,0>=f?(clearTimeout(l),l=null,c=r,o=t.apply(e,i),e=i=null):l||(l=setTimeout(h,f)),o}},l=function(){return t.pageYOffset!==e?t.pageYOffset:(s.documentElement||s.body.parentNode||s.body).scrollTop},c=function(e,i){"querySelector"in s&&"addEventListener"in t&&(this.visible=!1,this.options={offset:300,classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function(){},onStick:function(){},onUnstick:function(){},onDestroy:function(){}},this.elem="string"==typeof e?s.querySelector(e):e,this.options=o(this.options,i),this.init())};c.prototype={constructor:c,init:function(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,s.body.insertBefore(this.clonedElem,s.body.firstChild),"number"==typeof this.options.offset)this.scrollOffset=this.options.offset;else{if("string"!=typeof this.options.offset)throw new Error("Invalid offset: "+this.options.offset);this.scrollOffset=i(s.querySelector(this.options.offset))}this._throttleUpdate=n(this.update.bind(this),this.options.throttle),t.addEventListener("scroll",this._throttleUpdate,!1),this.options.onInit.call(this)},destroy:function(){s.body.removeChild(this.clonedElem),t.removeEventListener("scroll",this._throttleUpdate),this.options.onDestroy.call(this)},stick:function(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this))},unstick:function(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this))},update:function(){l()>this.scrollOffset?this.stick():this.unstick()}},t.Headhesive=c}(window,document);;
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";function u(){var e=document.getElementsByTagName("script");var t=e[e.length-1].src.split("?")[0];return t.split("/").length>0?t.split("/").slice(0,-1).join("/")+"/":""}function S(e,t,n){for(var r=0;r<t.length;r++)n(e,t[r])}var t=false;var n=false;var r=0;var i=2e3;var s=0;var o=e;var a=["ms","moz","webkit","o"];var f=window.requestAnimationFrame||false;var l=window.cancelAnimationFrame||false;if(!f){for(var c in a){var h=a[c];if(!f)f=window[h+"RequestAnimationFrame"];if(!l)l=window[h+"CancelAnimationFrame"]||window[h+"CancelRequestAnimationFrame"]}}var p=window.MutationObserver||window.WebKitMutationObserver||false;var d={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:8*3,touchbehavior:false,hwacceleration:true,usetransition:true,boxzoom:false,dblclickzoom:true,gesturezoom:true,grabcursorenabled:true,autohidemode:true,background:"",iframeautoresize:true,cursorminheight:32,preservenativescrolling:true,railoffset:false,railhoffset:false,bouncescroll:true,spacebarenabled:true,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:true,horizrailenabled:true,railalign:"right",railvalign:"bottom",enabletranslate3d:true,enablemousewheel:true,enablekeyboard:true,smoothscroll:true,sensitiverail:true,enablemouselockapi:true,cursorfixedheight:false,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:true,enablescrollonselection:true,overflowx:true,overflowy:true,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:false,oneaxismousemode:"auto",scriptpath:u(),preventmultitouchscrolling:true};var v=false;var m=function(){function o(){var n=["-moz-grab","-webkit-grab","grab"];if(t.ischrome&&!t.ischrome22||t.isie)n=[];for(var r=0;r<n.length;r++){var i=n[r];e.style.cursor=i;if(e.style.cursor==i)return i}return"url(//mail.google.com/mail/images/2/openhand.cur),n-resize"}if(v)return v;var e=document.createElement("DIV");var t={};t.haspointerlock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document;t.isopera="opera"in window;t.isopera12=t.isopera&&"getUserMedia"in navigator;t.isoperamini=Object.prototype.toString.call(window.operamini)==="[object OperaMini]";t.isie="all"in document&&"attachEvent"in e&&!t.isopera;t.isieold=t.isie&&!("msInterpolationMode"in e.style);t.isie7=t.isie&&!t.isieold&&(!("documentMode"in document)||document.documentMode==7);t.isie8=t.isie&&"documentMode"in document&&document.documentMode==8;t.isie9=t.isie&&"performance"in window&&document.documentMode>=9;t.isie10=t.isie&&"performance"in window&&document.documentMode==10;t.isie11="msRequestFullscreen"in e&&document.documentMode>=11;t.isie9mobile=/iemobile.9/i.test(navigator.userAgent);if(t.isie9mobile)t.isie9=false;t.isie7mobile=!t.isie9mobile&&t.isie7&&/iemobile/i.test(navigator.userAgent);t.ismozilla="MozAppearance"in e.style;t.iswebkit="WebkitAppearance"in e.style;t.ischrome="chrome"in window;t.ischrome22=t.ischrome&&t.haspointerlock;t.ischrome26=t.ischrome&&"transition"in e.style;t.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;t.hasmstouch=window.MSPointerEvent||false;t.hasw3ctouch=window.PointerEvent||false;t.ismac=/^mac$/i.test(navigator.platform);t.isios=t.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);t.isios4=t.isios&&!("seal"in Object);t.isios7=t.isios&&"webkitHidden"in document;t.isandroid=/android/i.test(navigator.userAgent);t.trstyle=false;t.hastransform=false;t.hastranslate3d=false;t.transitionstyle=false;t.hastransition=false;t.transitionend=false;var n;var r=["transform","msTransform","webkitTransform","MozTransform","OTransform"];for(n=0;n<r.length;n++){if(typeof e.style[r[n]]!="undefined"){t.trstyle=r[n];break}}t.hastransform=!!t.trstyle;if(t.hastransform){e.style[t.trstyle]="translate3d(1px,2px,3px)";t.hastranslate3d=/translate3d/.test(e.style[t.trstyle])}t.transitionstyle=false;t.prefixstyle="";t.transitionend=false;r=["transition","webkitTransition","MozTransition","OTransition","OTransition","msTransition","KhtmlTransition"];var i=["","-webkit-","-moz-","-o-","-o","-ms-","-khtml-"];var s=["transitionend","webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd","msTransitionEnd","KhtmlTransitionEnd"];for(n=0;n<r.length;n++){if(r[n]in e.style){t.transitionstyle=r[n];t.prefixstyle=i[n];t.transitionend=s[n];break}}if(t.ischrome26){t.prefixstyle=i[1]}t.hastransition=t.transitionstyle;t.cursorgrabvalue=o();t.hasmousecapture="setCapture"in e;t.hasMutationObserver=p!==false;e=null;v=t;return t};var g=function(e,u){function b(){var e=a.doc.css(h.trstyle);if(e&&e.substr(0,6)=="matrix"){return e.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}return false}function E(){var e=a.win;if("zIndex"in e)return e.zIndex();while(e.length>0){if(e[0].nodeType==9)return false;var t=e.css("zIndex");if(!isNaN(t)&&t!=0)return parseInt(t);e=e.parent()}return false}function x(e,t,n){var r=e.css(t);var i=parseFloat(r);if(isNaN(i)){i=S[r]||0;var s=i==3?n?a.win.outerHeight()-a.win.innerHeight():a.win.outerWidth()-a.win.innerWidth():1;if(a.isie8&&i)i+=1;return s?i:0}return i}function T(e,t,n,r){a._bind(e,t,function(r){var r=r?r:window.event;var i={original:r,target:r.target||r.srcElement,type:"wheel",deltaMode:r.type=="MozMousePixelScroll"?0:1,deltaX:0,deltaZ:0,preventDefault:function(){r.preventDefault?r.preventDefault():r.returnValue=false;return false},stopImmediatePropagation:function(){r.stopImmediatePropagation?r.stopImmediatePropagation():r.cancelBubble=true}};if(t=="mousewheel"){i.deltaY=-1/40*r.wheelDelta;r.wheelDeltaX&&(i.deltaX=-1/40*r.wheelDeltaX)}else{i.deltaY=r.detail}return n.call(e,i)},r)}function N(e,t,n){var r,i;var s=1;if(e.deltaMode==0){r=-Math.floor(e.deltaX*(a.opt.mousescrollstep/(18*3)));i=-Math.floor(e.deltaY*(a.opt.mousescrollstep/(18*3)))}else if(e.deltaMode==1){r=-Math.floor(e.deltaX*a.opt.mousescrollstep);i=-Math.floor(e.deltaY*a.opt.mousescrollstep)}if(t&&a.opt.oneaxismousemode&&r==0&&i){r=i;i=0}if(r){if(a.scrollmom){a.scrollmom.stop()}a.lastdeltax+=r;a.debounced("mousewheelx",function(){var e=a.lastdeltax;a.lastdeltax=0;if(!a.rail.drag){a.doScrollLeftBy(e)}},15)}if(i){if(a.opt.nativeparentscrolling&&n&&!a.ispage&&!a.zoomactive){if(i<0){if(a.getScrollTop()>=a.page.maxh)return true}else{if(a.getScrollTop()<=0)return true}}if(a.scrollmom){a.scrollmom.stop()}a.lastdeltay+=i;a.debounced("mousewheely",function(){var e=a.lastdeltay;a.lastdeltay=0;if(!a.rail.drag){a.doScrollBy(e)}},15)}e.stopImmediatePropagation();return e.preventDefault()}var a=this;this.version="3.5.8 [BE.5]";this.name="nicescroll";this.me=u;this.opt={doc:o("body"),win:false};o.extend(this.opt,d);this.opt.snapbackspeed=80;if(e||false){for(var c in a.opt){if(typeof e[c]!="undefined")a.opt[c]=e[c]}}this.doc=a.opt.doc;this.iddoc=this.doc&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/^BODY|HTML/.test(a.opt.win?a.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=a.opt.win!==false;this.win=a.opt.win||(this.ispage?o(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?o(window):this.win;this.body=o("body");this.viewport=false;this.isfixed=false;this.iframe=false;this.isiframe=this.doc[0].nodeName=="IFRAME"&&this.win[0].nodeName=="IFRAME";this.istextarea=this.win[0].nodeName=="TEXTAREA";this.forcescreen=false;this.canshowonmouseevent=a.opt.autohidemode!="scroll";this.onmousedown=false;this.onmouseup=false;this.onmousemove=false;this.onmousewheel=false;this.onkeypress=false;this.ongesturezoom=false;this.onclick=false;this.onscrollstart=false;this.onscrollend=false;this.onscrollcancel=false;this.onzoomin=false;this.onzoomout=false;this.view=false;this.page=false;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.isrtlmode=this.opt.rtlmode=="auto"?(this.win[0]==window?this.body:this.win).css("direction")=="rtl":this.opt.rtlmode===true;this.scrollrunning=false;this.scrollmom=false;this.observer=false;this.observerremover=false;do{this.id="ascrail"+i++}while(document.getElementById(this.id));this.rail=false;this.cursor=false;this.cursorfreezed=false;this.selectiondrag=false;this.zoom=false;this.zoomactive=false;this.hasfocus=false;this.hasmousefocus=false;this.visibility=true;this.locked=false;this.hidden=false;this.cursoractive=true;this.wheelprevented=false;this.overflowx=a.opt.overflowx;this.overflowy=a.opt.overflowy;this.nativescrollingarea=false;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltax=0;this.lastdeltay=0;this.detected=m();var h=o.extend({},this.detected);this.canhwscroll=h.hastransform&&a.opt.hwacceleration;this.ishwscroll=this.canhwscroll&&a.haswrapper;this.hasreversehr=this.isrtlmode&&!h.iswebkit;this.istouchcapable=false;if(h.cantouch&&h.iswebkit&&!h.isios&&!h.isandroid){this.istouchcapable=true;h.cantouch=false}if(h.cantouch&&h.ismozilla&&!h.isios&&!h.isandroid){this.istouchcapable=true;h.cantouch=false}if(!a.opt.enablemouselockapi){h.hasmousecapture=false;h.haspointerlock=false}this.delayed=function(e,t,n,r){var i=a.delaylist[e];var s=(new Date).getTime();if(!r&&i&&i.tt)return false;if(i&&i.tt)clearTimeout(i.tt);if(i&&i.last+n>s&&!i.tt){a.delaylist[e]={last:s+n,tt:setTimeout(function(){if(a||false){a.delaylist[e].tt=0;t.call()}},n)}}else if(!i||!i.tt){a.delaylist[e]={last:s,tt:0};setTimeout(function(){t.call()},0)}};this.debounced=function(e,t,n){var r=a.delaylist[e];a.delaylist[e]=t;if(!r){setTimeout(function(){var t=a.delaylist[e];a.delaylist[e]=false;t.call()},n)}};var v=false;this.synched=function(e,t){function n(){if(v)return;f(function(){v=false;for(var e in a.synclist){var t=a.synclist[e];if(t)t.call(a);a.synclist[e]=false}});v=true}a.synclist[e]=t;n();return e};this.unsynched=function(e){if(a.synclist[e])a.synclist[e]=false};this.css=function(e,t){for(var n in t){a.saved.css.push([e,n,e.css(n)]);e.css(n,t[n])}};this.scrollTop=function(e){return typeof e=="undefined"?a.getScrollTop():a.setScrollTop(e)};this.scrollLeft=function(e){return typeof e=="undefined"?a.getScrollLeft():a.setScrollLeft(e)};var g=function(e,t,n,r,i,s,o){this.st=e;this.ed=t;this.spd=n;this.p1=r||0;this.p2=i||1;this.p3=s||0;this.p4=o||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};g.prototype={B2:function(e){return 3*e*e*(1-e)},B3:function(e){return 3*e*(1-e)*(1-e)},B4:function(e){return(1-e)*(1-e)*(1-e)},getNow:function(){var e=(new Date).getTime();var t=1-(e-this.ts)/this.spd;var n=this.B2(t)+this.B3(t)+this.B4(t);return t<0?this.ed:this.st+Math.round(this.df*n)},update:function(e,t){this.st=this.getNow();this.ed=e;this.spd=t;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};if(h.hastranslate3d&&h.isios)this.doc.css("-webkit-backface-visibility","hidden");this.getScrollTop=function(e){if(!e){var t=b();if(t)return t.length==16?-t[13]:-t[5];if(a.timerscroll&&a.timerscroll.bz)return a.timerscroll.bz.getNow()}return a.doc.translate.y};this.getScrollLeft=function(e){if(!e){var t=b();if(t)return t.length==16?-t[12]:-t[4];if(a.timerscroll&&a.timerscroll.bh)return a.timerscroll.bh.getNow()}return a.doc.translate.x};if(document.createEvent){this.notifyScrollEvent=function(e){var t=document.createEvent("UIEvents");t.initUIEvent("scroll",false,true,window,1);e.dispatchEvent(t)}}else if(document.fireEvent){this.notifyScrollEvent=function(e){var t=document.createEventObject();e.fireEvent("onscroll");t.cancelBubble=true}}else{this.notifyScrollEvent=function(e,t){}}var w=this.isrtlmode?1:-1;if(h.hastranslate3d&&a.opt.enabletranslate3d){this.setScrollTop=function(e,t){a.doc.translate.y=e;a.doc.translate.ty=e*-1+"px";a.doc.css(h.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");if(!t)a.notifyScrollEvent(a.win[0])};this.setScrollLeft=function(e,t){a.doc.translate.x=e;a.doc.translate.tx=e*w+"px";a.doc.css(h.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");if(!t)a.notifyScrollEvent(a.win[0])}}else{this.setScrollTop=function(e,t){a.doc.translate.y=e;a.doc.translate.ty=e*-1+"px";a.doc.css(h.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");if(!t)a.notifyScrollEvent(a.win[0])};this.setScrollLeft=function(e,t){a.doc.translate.x=e;a.doc.translate.tx=e*w+"px";a.doc.css(h.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");if(!t)a.notifyScrollEvent(a.win[0])}}}else{this.getScrollTop=function(){return a.docscroll.scrollTop()};this.setScrollTop=function(e){return a.docscroll.scrollTop(e)};this.getScrollLeft=function(){if(a.detected.ismozilla&&a.isrtlmode)return Math.abs(a.docscroll.scrollLeft());return a.docscroll.scrollLeft()};this.setScrollLeft=function(e){return a.docscroll.scrollLeft(a.detected.ismozilla&&a.isrtlmode?-e:e)}}this.getTarget=function(e){if(!e)return false;if(e.target)return e.target;if(e.srcElement)return e.srcElement;return false};this.hasParent=function(e,t){if(!e)return false;var n=e.target||e.srcElement||e||false;while(n&&n.id!=t){n=n.parentNode||false}return n!==false};var S={thin:1,medium:3,thick:5};this.getOffset=function(){if(a.isfixed)return{top:parseFloat(a.win.css("top")),left:parseFloat(a.win.css("left"))};var e=a.win.offset();if(!a.viewport)return e;var t=a.viewport.offset();return{top:e.top-t.top,left:e.left-t.left}};this.updateScrollBar=function(e){if(a.ishwscroll){a.rail.css({height:a.win.innerHeight()-(a.opt.railpadding.top+a.opt.railpadding.bottom)});if(a.railh)a.railh.css({width:a.win.innerWidth()-(a.opt.railpadding.left+a.opt.railpadding.right)})}else{var t=a.getOffset();var n={top:t.top,left:t.left-(a.opt.railpadding.left+a.opt.railpadding.right)};n.top+=x(a.win,"border-top-width",true);n.left+=a.rail.align?a.win.outerWidth()-x(a.win,"border-right-width")-a.rail.width:x(a.win,"border-left-width");var r=a.opt.railoffset;if(r){if(r.top)n.top+=r.top;if(a.rail.align&&r.left)n.left+=r.left}if(!a.locked)a.rail.css({top:n.top,left:n.left,height:(e?e.h:a.win.innerHeight())-(a.opt.railpadding.top+a.opt.railpadding.bottom)});if(a.zoom){a.zoom.css({top:n.top+1,left:a.rail.align==1?n.left-20:n.left+a.rail.width+4})}if(a.railh&&!a.locked){var n={top:t.top,left:t.left};var r=a.opt.railhoffset;if(!!r){if(!!r.top)n.top+=r.top;if(!!r.left)n.left+=r.left}var i=a.railh.align?n.top+x(a.win,"border-top-width",true)+a.win.innerHeight()-a.railh.height:n.top+x(a.win,"border-top-width",true);var s=n.left+x(a.win,"border-left-width");a.railh.css({top:i-(a.opt.railpadding.top+a.opt.railpadding.bottom),left:s,width:a.railh.width})}}};this.doRailClick=function(e,t,n){var r,i,s,o;if(a.locked)return;a.cancelEvent(e);if(t){r=n?a.doScrollLeft:a.doScrollTop;s=n?(e.pageX-a.railh.offset().left-a.cursorwidth/2)*a.scrollratio.x:(e.pageY-a.rail.offset().top-a.cursorheight/2)*a.scrollratio.y;r(s)}else{r=n?a.doScrollLeftBy:a.doScrollBy;s=n?a.scroll.x:a.scroll.y;o=n?e.pageX-a.railh.offset().left:e.pageY-a.rail.offset().top;i=n?a.view.w:a.view.h;r(s>=o?i:-i)}};a.hasanimationframe=f;a.hascancelanimationframe=l;if(!a.hasanimationframe){f=function(e){return setTimeout(e,15-Math.floor(+(new Date)/1e3)%16)};l=clearInterval}else if(!a.hascancelanimationframe)l=function(){a.cancelAnimationFrame=true};this.init=function(){a.saved.css=[];if(h.isie7mobile)return true;if(h.isoperamini)return true;if(h.hasmstouch)a.css(a.ispage?o("html"):a.win,{"-ms-touch-action":"none"});a.zindex="auto";if(!a.ispage&&a.opt.zindex=="auto"){a.zindex=E()||"auto"}else{a.zindex=a.opt.zindex}if(!a.ispage&&a.zindex!="auto"){if(a.zindex>s)s=a.zindex}if(a.isie&&a.zindex==0&&a.opt.zindex=="auto"){a.zindex="auto"}if(!a.ispage||!h.cantouch&&!h.isieold&&!h.isie9mobile){var e=a.docscroll;if(a.ispage)e=a.haswrapper?a.win:a.doc;if(!h.isie9mobile)a.css(e,{"overflow-y":"hidden"});if(a.ispage&&h.isie7){if(a.doc[0].nodeName=="BODY")a.css(o("html"),{"overflow-y":"hidden"});else if(a.doc[0].nodeName=="HTML")a.css(o("body"),{"overflow-y":"hidden"})}if(h.isios&&!a.ispage&&!a.haswrapper)a.css(o("body"),{"-webkit-overflow-scrolling":"touch"});var i=o(document.createElement("div"));i.css({position:"relative",top:0,"float":"right",width:a.opt.cursorwidth,height:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});i.hborder=parseFloat(i.outerHeight()-i.innerHeight());a.cursor=i;var u=o(document.createElement("div"));u.attr("id",a.id);u.addClass("nicescroll-rails");var f,l,c=["left","right","top","bottom"];for(var d in c){l=c[d];f=a.opt.railpadding[l];f?u.css("padding-"+l,f+"px"):a.opt.railpadding[l]=0}u.append(i);u.width=Math.max(parseFloat(a.opt.cursorwidth),i.outerWidth());u.css({width:u.width+"px",zIndex:a.zindex,background:a.opt.background,cursor:"default"});u.visibility=true;u.scrollable=true;u.align=a.opt.railalign=="left"?0:1;a.rail=u;a.rail.drag=false;var v=false;if(a.opt.boxzoom&&!a.ispage&&!h.isieold){v=document.createElement("div");a.bind(v,"click",a.doZoom);a.bind(v,"mouseenter",function(){a.zoom.css("opacity",a.opt.cursoropacitymax)});a.bind(v,"mouseleave",function(){a.zoom.css("opacity",a.opt.cursoropacitymin)});a.zoom=o(v);a.zoom.css({cursor:"pointer","z-index":a.zindex,backgroundImage:"url("+a.opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"});if(a.opt.dblclickzoom)a.bind(a.win,"dblclick",a.doZoom);if(h.cantouch&&a.opt.gesturezoom){a.ongesturezoom=function(e){if(e.scale>1.5)a.doZoomIn(e);if(e.scale<.8)a.doZoomOut(e);return a.cancelEvent(e)};a.bind(a.win,"gestureend",a.ongesturezoom)}}a.railh=false;var m;if(a.opt.horizrailenabled){a.css(e,{"overflow-x":"hidden"});var i=o(document.createElement("div"));i.css({position:"absolute",top:0,height:a.opt.cursorwidth,width:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});i.wborder=parseFloat(i.outerWidth()-i.innerWidth());a.cursorh=i;m=o(document.createElement("div"));m.attr("id",a.id+"-hr");m.addClass("nicescroll-rails");m.height=Math.max(parseFloat(a.opt.cursorwidth),i.outerHeight());m.css({height:m.height+"px",zIndex:a.zindex,background:a.opt.background});m.append(i);m.visibility=true;m.scrollable=true;m.align=a.opt.railvalign=="top"?0:1;a.railh=m;a.railh.drag=false}if(a.ispage){u.css({position:"fixed",top:"0px",height:"100%"});u.align?u.css({right:"0px"}):u.css({left:"0px"});a.body.append(u);if(a.railh){m.css({position:"fixed",left:"0px",width:"100%"});m.align?m.css({bottom:"0px"}):m.css({top:"0px"});a.body.append(m)}}else{if(a.ishwscroll){if(a.win.css("position")=="static")a.css(a.win,{position:"relative"});var g=a.win[0].nodeName=="HTML"?a.body:a.win;if(a.zoom){a.zoom.css({position:"absolute",top:1,right:0,"margin-right":u.width+4});g.append(a.zoom)}u.css({position:"absolute",top:0});u.align?u.css({right:0}):u.css({left:0});g.append(u);if(m){m.css({position:"absolute",left:0,bottom:0});m.align?m.css({bottom:0}):m.css({top:0});g.append(m)}}else{a.isfixed=a.win.css("position")=="fixed";var b=a.isfixed?"fixed":"absolute";if(!a.isfixed)a.viewport=a.getViewport(a.win[0]);if(a.viewport){a.body=a.viewport;if(/fixed|absolute/.test(a.viewport.css("position"))==false)a.css(a.viewport,{position:"relative"})}u.css({position:b});if(a.zoom)a.zoom.css({position:b});a.updateScrollBar();a.body.append(u);if(a.zoom)a.body.append(a.zoom);if(a.railh){m.css({position:b});a.body.append(m)}}if(h.isios)a.css(a.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"});if(h.isie&&a.opt.disableoutline)a.win.attr("hideFocus","true");if(h.iswebkit&&a.opt.disableoutline)a.win.css({outline:"none"})}if(a.opt.autohidemode===false){a.autohidedom=false;a.rail.css({opacity:a.opt.cursoropacitymax});if(a.railh)a.railh.css({opacity:a.opt.cursoropacitymax})}else if(a.opt.autohidemode===true||a.opt.autohidemode==="leave"){a.autohidedom=o().add(a.rail);if(h.isie8)a.autohidedom=a.autohidedom.add(a.cursor);if(a.railh)a.autohidedom=a.autohidedom.add(a.railh);if(a.railh&&h.isie8)a.autohidedom=a.autohidedom.add(a.cursorh)}else if(a.opt.autohidemode=="scroll"){a.autohidedom=o().add(a.rail);if(a.railh)a.autohidedom=a.autohidedom.add(a.railh)}else if(a.opt.autohidemode=="cursor"){a.autohidedom=o().add(a.cursor);if(a.railh)a.autohidedom=a.autohidedom.add(a.cursorh)}else if(a.opt.autohidemode=="hidden"){a.autohidedom=false;a.hide();a.locked=false}if(h.isie9mobile){a.scrollmom=new y(a);a.onmangotouch=function(){var e=a.getScrollTop();var t=a.getScrollLeft();if(e==a.scrollmom.lastscrolly&&t==a.scrollmom.lastscrollx)return true;var n=e-a.mangotouch.sy;var r=t-a.mangotouch.sx;var i=Math.round(Math.sqrt(Math.pow(r,2)+Math.pow(n,2)));if(i==0)return;var s=n<0?-1:1;var o=r<0?-1:1;var u=+(new Date);if(a.mangotouch.lazy)clearTimeout(a.mangotouch.lazy);if(u-a.mangotouch.tm>80||a.mangotouch.dry!=s||a.mangotouch.drx!=o){a.scrollmom.stop();a.scrollmom.reset(t,e);a.mangotouch.sy=e;a.mangotouch.ly=e;a.mangotouch.sx=t;a.mangotouch.lx=t;a.mangotouch.dry=s;a.mangotouch.drx=o;a.mangotouch.tm=u}else{a.scrollmom.stop();a.scrollmom.update(a.mangotouch.sx-r,a.mangotouch.sy-n);a.mangotouch.tm=u;var f=Math.max(Math.abs(a.mangotouch.ly-e),Math.abs(a.mangotouch.lx-t));a.mangotouch.ly=e;a.mangotouch.lx=t;if(f>2){a.mangotouch.lazy=setTimeout(function(){a.mangotouch.lazy=false;a.mangotouch.dry=0;a.mangotouch.drx=0;a.mangotouch.tm=0;a.scrollmom.doMomentum(30)},100)}}};var w=a.getScrollTop();var S=a.getScrollLeft();a.mangotouch={sy:w,ly:w,dry:0,sx:S,lx:S,drx:0,lazy:false,tm:0};a.bind(a.docscroll,"scroll",a.onmangotouch)}else{if(h.cantouch||a.istouchcapable||a.opt.touchbehavior||h.hasmstouch){a.scrollmom=new y(a);a.ontouchstart=function(e){if(e.pointerType&&e.pointerType!=2&&e.pointerType!="touch")return false;a.hasmoving=false;if(!a.locked){var t;if(h.hasmstouch){t=e.target?e.target:false;while(t){var n=o(t).getNiceScroll();if(n.length>0&&n[0].me==a.me)break;if(n.length>0)return false;if(t.nodeName=="DIV"&&t.id==a.id)break;t=t.parentNode?t.parentNode:false}}a.cancelScroll();t=a.getTarget(e);if(t){var r=/INPUT/i.test(t.nodeName)&&/range/i.test(t.type);if(r)return a.stopPropagation(e)}if(!("clientX"in e)&&"changedTouches"in e){e.clientX=e.changedTouches[0].clientX;e.clientY=e.changedTouches[0].clientY}if(a.forcescreen){var i=e;e={original:e.original?e.original:e};e.clientX=i.screenX;e.clientY=i.screenY}a.rail.drag={x:e.clientX,y:e.clientY,sx:a.scroll.x,sy:a.scroll.y,st:a.getScrollTop(),sl:a.getScrollLeft(),pt:2,dl:false};if(a.ispage||!a.opt.directionlockdeadzone){a.rail.drag.dl="f"}else{var s={w:o(window).width(),h:o(window).height()};var u={w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)};var f=Math.max(0,u.h-s.h);var l=Math.max(0,u.w-s.w);if(!a.rail.scrollable&&a.railh.scrollable)a.rail.drag.ck=f>0?"v":false;else if(a.rail.scrollable&&!a.railh.scrollable)a.rail.drag.ck=l>0?"h":false;else a.rail.drag.ck=false;if(!a.rail.drag.ck)a.rail.drag.dl="f"}if(a.opt.touchbehavior&&a.isiframe&&h.isie){var c=a.win.position();a.rail.drag.x+=c.left;a.rail.drag.y+=c.top}a.hasmoving=false;a.lastmouseup=false;a.scrollmom.reset(e.clientX,e.clientY);if(!h.cantouch&&!this.istouchcapable&&!h.hasmstouch){var p=t?/INPUT|SELECT|TEXTAREA/i.test(t.nodeName):false;if(!p){if(!a.ispage&&h.hasmousecapture)t.setCapture();if(a.opt.touchbehavior){if(t.onclick&&!(t._onclick||false)){t._onclick=t.onclick;t.onclick=function(e){if(a.hasmoving)return false;t._onclick.call(this,e)}}return a.cancelEvent(e)}return a.stopPropagation(e)}if(/SUBMIT|CANCEL|BUTTON/i.test(o(t).attr("type"))){pc={tg:t,click:false};a.preventclick=pc}}}};a.ontouchend=function(e){if(e.pointerType&&e.pointerType!=2&&e.pointerType!="touch")return false;if(a.rail.drag&&a.rail.drag.pt==2){a.scrollmom.doMomentum();a.rail.drag=false;if(a.hasmoving){a.lastmouseup=true;a.hideCursor();if(h.hasmousecapture)document.releaseCapture();if(!h.cantouch)return a.cancelEvent(e)}}};var x=a.opt.touchbehavior&&a.isiframe&&!h.hasmousecapture;a.ontouchmove=function(e,t){if(e.pointerType&&e.pointerType!=2&&e.pointerType!="touch")return false;if(e.targetTouches&&a.opt.preventmultitouchscrolling){if(e.targetTouches.length>1)return false}if(a.rail.drag&&a.rail.drag.pt==2){if(h.cantouch&&typeof e.original=="undefined")return true;a.hasmoving=true;if(a.preventclick&&!a.preventclick.click){a.preventclick.click=a.preventclick.tg.onclick||false;a.preventclick.tg.onclick=a.onpreventclick}var n=o.extend({original:e},e);e=n;if("changedTouches"in e){e.clientX=e.changedTouches[0].clientX;e.clientY=e.changedTouches[0].clientY}if(a.forcescreen){var r=e;e={original:e.original?e.original:e};e.clientX=r.screenX;e.clientY=r.screenY}var i,s;s=i=0;if(x&&!t){var u=a.win.position();s=-u.left;i=-u.top}var f=e.clientY+i;var l=f-a.rail.drag.y;var c=e.clientX+s;var p=c-a.rail.drag.x;var d=a.rail.drag.st-l;if(a.ishwscroll&&a.opt.bouncescroll){if(d<0){d=Math.round(d/2)}else if(d>a.page.maxh){d=a.page.maxh+Math.round((d-a.page.maxh)/2)}}else{if(d<0){d=0;f=0}if(d>a.page.maxh){d=a.page.maxh;f=0}}var v;if(a.railh&&a.railh.scrollable){v=a.isrtlmode?p-a.rail.drag.sl:a.rail.drag.sl-p;if(a.ishwscroll&&a.opt.bouncescroll){if(v<0){v=Math.round(v/2)}else if(v>a.page.maxw){v=a.page.maxw+Math.round((v-a.page.maxw)/2)}}else{if(v<0){v=0;c=0}if(v>a.page.maxw){v=a.page.maxw;c=0}}}var m=false;if(a.rail.drag.dl){m=true;if(a.rail.drag.dl=="v")v=a.rail.drag.sl;else if(a.rail.drag.dl=="h")d=a.rail.drag.st}else{var g=Math.abs(l);var y=Math.abs(p);var b=a.opt.directionlockdeadzone;if(a.rail.drag.ck=="v"){if(g>b&&y<=g*.3){a.rail.drag=false;return true}else if(y>b){a.rail.drag.dl="f";o("body").scrollTop(o("body").scrollTop())}}else if(a.rail.drag.ck=="h"){if(y>b&&g<=y*.3){a.rail.drag=false;return true}else if(g>b){a.rail.drag.dl="f";o("body").scrollLeft(o("body").scrollLeft())}}}a.synched("touchmove",function(){if(a.rail.drag&&a.rail.drag.pt==2){if(a.prepareTransition)a.prepareTransition(0);if(a.rail.scrollable)a.setScrollTop(d);a.scrollmom.update(c,f);if(a.railh&&a.railh.scrollable){a.setScrollLeft(v);a.showCursor(d,v)}else{a.showCursor(d)}if(h.isie10)document.selection.clear()}});if(h.ischrome&&a.istouchcapable)m=false;if(m)return a.cancelEvent(e)}}}a.onmousedown=function(e,t){if(a.rail.drag&&a.rail.drag.pt!=1)return;if(a.locked)return a.cancelEvent(e);a.cancelScroll();a.rail.drag={x:e.clientX,y:e.clientY,sx:a.scroll.x,sy:a.scroll.y,pt:1,hr:!!t};var n=a.getTarget(e);if(!a.ispage&&h.hasmousecapture)n.setCapture();if(a.isiframe&&!h.hasmousecapture){a.saved.csspointerevents=a.doc.css("pointer-events");a.css(a.doc,{"pointer-events":"none"})}a.hasmoving=false;return a.cancelEvent(e)};a.onmouseup=function(e){if(a.rail.drag){if(h.hasmousecapture)document.releaseCapture();if(a.isiframe&&!h.hasmousecapture)a.doc.css("pointer-events",a.saved.csspointerevents);if(a.rail.drag.pt!=1)return;a.rail.drag=false;if(a.hasmoving)a.triggerScrollEnd();return a.cancelEvent(e)}};a.onmousemove=function(e){if(a.rail.drag){if(a.rail.drag.pt!=1)return;if(h.ischrome&&e.which==0)return a.onmouseup(e);a.cursorfreezed=true;a.hasmoving=true;if(a.rail.drag.hr){a.scroll.x=a.rail.drag.sx+(e.clientX-a.rail.drag.x);if(a.scroll.x<0)a.scroll.x=0;var t=a.scrollvaluemaxw;if(a.scroll.x>t)a.scroll.x=t}else{a.scroll.y=a.rail.drag.sy+(e.clientY-a.rail.drag.y);if(a.scroll.y<0)a.scroll.y=0;var n=a.scrollvaluemax;if(a.scroll.y>n)a.scroll.y=n}a.synched("mousemove",function(){if(a.rail.drag&&a.rail.drag.pt==1){a.showCursor();if(a.rail.drag.hr){if(a.hasreversehr){a.doScrollLeft(a.scrollvaluemaxw-Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed)}else{a.doScrollLeft(Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed)}}else a.doScrollTop(Math.round(a.scroll.y*a.scrollratio.y),a.opt.cursordragspeed)}});return a.cancelEvent(e)}};if(h.cantouch||a.opt.touchbehavior){a.onpreventclick=function(e){if(a.preventclick){a.preventclick.tg.onclick=a.preventclick.click;a.preventclick=false;return a.cancelEvent(e)}};a.bind(a.win,"mousedown",a.ontouchstart);a.onclick=h.isios?false:function(e){if(a.lastmouseup){a.lastmouseup=false;return a.cancelEvent(e)}else{return true}};if(a.opt.grabcursorenabled&&h.cursorgrabvalue){a.css(a.ispage?a.doc:a.win,{cursor:h.cursorgrabvalue});a.css(a.rail,{cursor:h.cursorgrabvalue})}}else{var T=function(e){if(!a.selectiondrag)return;if(e){var t=a.win.outerHeight();var n=e.pageY-a.selectiondrag.top;if(n>0&&n<t)n=0;if(n>=t)n-=t;a.selectiondrag.df=n}if(a.selectiondrag.df==0)return;var r=-Math.floor(a.selectiondrag.df/6)*2;a.doScrollBy(r);a.debounced("doselectionscroll",function(){T()},50)};if("getSelection"in document){a.hasTextSelected=function(){return document.getSelection().rangeCount>0}}else if("selection"in document){a.hasTextSelected=function(){return document.selection.type!="None"}}else{a.hasTextSelected=function(){return false}}a.onselectionstart=function(e){if(!a.haswrapper&&e.which&&e.which==2){a.win.css({overflow:"auto"});setTimeout(function(){a.win.css({overflow:""})},10);return true}if(a.ispage)return;a.selectiondrag=a.win.offset()};a.onselectionend=function(e){a.selectiondrag=false};a.onselectiondrag=function(e){if(!a.selectiondrag)return;if(a.hasTextSelected())a.debounced("selectionscroll",function(){T(e)},250)}}if(h.hasw3ctouch){a.css(a.rail,{"touch-action":"none"});a.css(a.cursor,{"touch-action":"none"});a.bind(a.win,"pointerdown",a.ontouchstart);a.bind(document,"pointerup",a.ontouchend);a.bind(document,"pointermove",a.ontouchmove)}else if(h.hasmstouch){a.css(a.rail,{"-ms-touch-action":"none"});a.css(a.cursor,{"-ms-touch-action":"none"});a.bind(a.win,"MSPointerDown",a.ontouchstart);a.bind(document,"MSPointerUp",a.ontouchend);a.bind(document,"MSPointerMove",a.ontouchmove);a.bind(a.cursor,"MSGestureHold",function(e){e.preventDefault()});a.bind(a.cursor,"contextmenu",function(e){e.preventDefault()})}else if(this.istouchcapable){a.bind(a.win,"touchstart",a.ontouchstart);a.bind(document,"touchend",a.ontouchend);a.bind(document,"touchcancel",a.ontouchend);a.bind(document,"touchmove",a.ontouchmove)}a.bind(a.cursor,"mousedown",a.onmousedown);a.bind(a.cursor,"mouseup",a.onmouseup);if(a.railh){a.bind(a.cursorh,"mousedown",function(e){a.onmousedown(e,true)});a.bind(a.cursorh,"mouseup",a.onmouseup)}if(a.opt.cursordragontouch||!h.cantouch&&!a.opt.touchbehavior){a.rail.css({cursor:"default"});a.railh&&a.railh.css({cursor:"default"});a.jqbind(a.rail,"mouseenter",function(){if(!a.win.is(":visible"))return false;if(a.canshowonmouseevent)a.showCursor();a.rail.active=true});a.jqbind(a.rail,"mouseleave",function(){a.rail.active=false;if(!a.rail.drag)a.hideCursor()});if(a.opt.sensitiverail){a.bind(a.rail,"click",function(e){a.doRailClick(e,false,false)});a.bind(a.rail,"dblclick",function(e){a.doRailClick(e,true,false)});a.bind(a.cursor,"click",function(e){a.cancelEvent(e)});a.bind(a.cursor,"dblclick",function(e){a.cancelEvent(e)})}if(a.railh){a.jqbind(a.railh,"mouseenter",function(){if(!a.win.is(":visible"))return false;if(a.canshowonmouseevent)a.showCursor();a.rail.active=true});a.jqbind(a.railh,"mouseleave",function(){a.rail.active=false;if(!a.rail.drag)a.hideCursor()});if(a.opt.sensitiverail){a.bind(a.railh,"click",function(e){a.doRailClick(e,false,true)});a.bind(a.railh,"dblclick",function(e){a.doRailClick(e,true,true)});a.bind(a.cursorh,"click",function(e){a.cancelEvent(e)});a.bind(a.cursorh,"dblclick",function(e){a.cancelEvent(e)})}}}if(!h.cantouch&&!a.opt.touchbehavior){a.bind(h.hasmousecapture?a.win:document,"mouseup",a.onmouseup);a.bind(document,"mousemove",a.onmousemove);if(a.onclick)a.bind(document,"click",a.onclick);if(!a.ispage&&a.opt.enablescrollonselection){a.bind(a.win[0],"mousedown",a.onselectionstart);a.bind(document,"mouseup",a.onselectionend);a.bind(a.cursor,"mouseup",a.onselectionend);if(a.cursorh)a.bind(a.cursorh,"mouseup",a.onselectionend);a.bind(document,"mousemove",a.onselectiondrag)}if(a.zoom){a.jqbind(a.zoom,"mouseenter",function(){if(a.canshowonmouseevent)a.showCursor();a.rail.active=true});a.jqbind(a.zoom,"mouseleave",function(){a.rail.active=false;if(!a.rail.drag)a.hideCursor()})}}else{a.bind(h.hasmousecapture?a.win:document,"mouseup",a.ontouchend);a.bind(document,"mousemove",a.ontouchmove);if(a.onclick)a.bind(document,"click",a.onclick);if(a.opt.cursordragontouch){a.bind(a.cursor,"mousedown",a.onmousedown);a.bind(a.cursor,"mousemove",a.onmousemove);a.cursorh&&a.bind(a.cursorh,"mousedown",function(e){a.onmousedown(e,true)});a.cursorh&&a.bind(a.cursorh,"mousemove",a.onmousemove)}}if(a.opt.enablemousewheel){if(!a.isiframe)a.bind(h.isie&&a.ispage?document:a.win,"mousewheel",a.onmousewheel);a.bind(a.rail,"mousewheel",a.onmousewheel);if(a.railh)a.bind(a.railh,"mousewheel",a.onmousewheelhr)}if(!a.ispage&&!h.cantouch&&!/HTML|^BODY/.test(a.win[0].nodeName)){if(!a.win.attr("tabindex"))a.win.attr({tabindex:r++});a.jqbind(a.win,"focus",function(e){t=a.getTarget(e).id||true;a.hasfocus=true;if(a.canshowonmouseevent)a.noticeCursor()});a.jqbind(a.win,"blur",function(e){t=false;a.hasfocus=false});a.jqbind(a.win,"mouseenter",function(e){n=a.getTarget(e).id||true;a.hasmousefocus=true;if(a.canshowonmouseevent)a.noticeCursor()});a.jqbind(a.win,"mouseleave",function(){n=false;a.hasmousefocus=false;if(!a.rail.drag)a.hideCursor()})}}a.onkeypress=function(e){if(a.locked&&a.page.maxh==0)return true;e=e?e:window.e;var r=a.getTarget(e);if(r&&/INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName)){var i=r.getAttribute("type")||r.type||false;if(!i||!/submit|button|cancel/i.tp)return true}if(o(r).attr("contenteditable"))return true;if(a.hasfocus||a.hasmousefocus&&!t||a.ispage&&!t&&!n){var s=e.keyCode;if(a.locked&&s!=27)return a.cancelEvent(e);var u=e.ctrlKey||false;var f=e.shiftKey||false;var l=false;switch(s){case 38:case 63233:a.doScrollBy(24*3);l=true;break;case 40:case 63235:a.doScrollBy(-24*3);l=true;break;case 37:case 63232:if(a.railh){u?a.doScrollLeft(0):a.doScrollLeftBy(24*3);l=true}break;case 39:case 63234:if(a.railh){u?a.doScrollLeft(a.page.maxw):a.doScrollLeftBy(-24*3);l=true}break;case 33:case 63276:a.doScrollBy(a.view.h);l=true;break;case 34:case 63277:a.doScrollBy(-a.view.h);l=true;break;case 36:case 63273:a.railh&&u?a.doScrollPos(0,0):a.doScrollTo(0);l=true;break;case 35:case 63275:a.railh&&u?a.doScrollPos(a.page.maxw,a.page.maxh):a.doScrollTo(a.page.maxh);l=true;break;case 32:if(a.opt.spacebarenabled){f?a.doScrollBy(a.view.h):a.doScrollBy(-a.view.h);l=true}break;case 27:if(a.zoomactive){a.doZoom();l=true}break}if(l)return a.cancelEvent(e)}};if(a.opt.enablekeyboard)a.bind(document,h.isopera&&!h.isopera12?"keypress":"keydown",a.onkeypress);a.bind(document,"keydown",function(e){var t=e.ctrlKey||false;if(t)a.wheelprevented=true});a.bind(document,"keyup",function(e){var t=e.ctrlKey||false;if(!t)a.wheelprevented=false});a.bind(window,"blur",function(e){a.wheelprevented=false});a.bind(window,"resize",a.lazyResize);a.bind(window,"orientationchange",a.lazyResize);a.bind(window,"load",a.lazyResize);if(h.ischrome&&!a.ispage&&!a.haswrapper){var N=a.win.attr("style");var C=parseFloat(a.win.css("width"))+1;a.win.css("width",C);a.synched("chromefix",function(){a.win.attr("style",N)})}a.onAttributeChange=function(e){a.lazyResize(250)};if(!a.ispage&&!a.haswrapper){if(p!==false){a.observer=new p(function(e){e.forEach(a.onAttributeChange)});a.observer.observe(a.win[0],{childList:true,characterData:false,attributes:true,subtree:false});a.observerremover=new p(function(e){e.forEach(function(e){if(e.removedNodes.length>0){for(var t in e.removedNodes){if(!!a&&e.removedNodes[t]==a.win[0])return a.remove()}}})});a.observerremover.observe(a.win[0].parentNode,{childList:true,characterData:false,attributes:false,subtree:false})}else{a.bind(a.win,h.isie&&!h.isie9?"propertychange":"DOMAttrModified",a.onAttributeChange);if(h.isie9)a.win[0].attachEvent("onpropertychange",a.onAttributeChange);a.bind(a.win,"DOMNodeRemoved",function(e){if(e.target==a.win[0])a.remove()})}}if(!a.ispage&&a.opt.boxzoom)a.bind(window,"resize",a.resizeZoom);if(a.istextarea)a.bind(a.win,"mouseup",a.lazyResize);a.lazyResize(30)}if(this.doc[0].nodeName=="IFRAME"){var k=function(){a.iframexd=false;var e;try{e="contentDocument"in this?this.contentDocument:this.contentWindow.document;var t=e.domain}catch(n){a.iframexd=true;e=false}if(a.iframexd){if("console"in window)console.log("NiceScroll error: policy restriced iframe");return true}a.forcescreen=true;if(a.isiframe){a.iframe={doc:o(e),html:a.doc.contents().find("html")[0],body:a.doc.contents().find("body")[0]};a.getContentSize=function(){return{w:Math.max(a.iframe.html.scrollWidth,a.iframe.body.scrollWidth),h:Math.max(a.iframe.html.scrollHeight,a.iframe.body.scrollHeight)}};a.docscroll=o(a.iframe.body)}if(!h.isios&&a.opt.iframeautoresize&&!a.isiframe){a.win.scrollTop(0);a.doc.height("");var r=Math.max(e.getElementsByTagName("html")[0].scrollHeight,e.body.scrollHeight);a.doc.height(r)}a.lazyResize(30);if(h.isie7)a.css(o(a.iframe.html),{"overflow-y":"hidden"});a.css(o(a.iframe.body),{"overflow-y":"hidden"});if(h.isios&&a.haswrapper){a.css(o(e.body),{"-webkit-transform":"translate3d(0,0,0)"})}if("contentWindow"in this){a.bind(this.contentWindow,"scroll",a.onscroll)}else{a.bind(e,"scroll",a.onscroll)}if(a.opt.enablemousewheel){a.bind(e,"mousewheel",a.onmousewheel)}if(a.opt.enablekeyboard)a.bind(e,h.isopera?"keypress":"keydown",a.onkeypress);if(h.cantouch||a.opt.touchbehavior){a.bind(e,"mousedown",a.ontouchstart);a.bind(e,"mousemove",function(e){a.ontouchmove(e,true)});if(a.opt.grabcursorenabled&&h.cursorgrabvalue)a.css(o(e.body),{cursor:h.cursorgrabvalue})}a.bind(e,"mouseup",a.ontouchend);if(a.zoom){if(a.opt.dblclickzoom)a.bind(e,"dblclick",a.doZoom);if(a.ongesturezoom)a.bind(e,"gestureend",a.ongesturezoom)}};if(this.doc[0].readyState&&this.doc[0].readyState=="complete"){setTimeout(function(){k.call(a.doc[0],false)},500)}a.bind(this.doc,"load",k)}};this.showCursor=function(e,t){if(a.cursortimeout){clearTimeout(a.cursortimeout);a.cursortimeout=0}if(!a.rail)return;if(a.autohidedom){a.autohidedom.stop().css({opacity:a.opt.cursoropacitymax});a.cursoractive=true}if(!a.rail.drag||a.rail.drag.pt!=1){if(typeof e!="undefined"&&e!==false){a.scroll.y=Math.round(e*1/a.scrollratio.y)}if(typeof t!="undefined"){a.scroll.x=Math.round(t*1/a.scrollratio.x)}}a.cursor.css({height:a.cursorheight,top:a.scroll.y});if(a.cursorh){var n=a.hasreversehr?a.scrollvaluemaxw-a.scroll.x:a.scroll.x;!a.rail.align&&a.rail.visibility?a.cursorh.css({width:a.cursorwidth,left:n+a.rail.width}):a.cursorh.css({width:a.cursorwidth,left:n});a.cursoractive=true}if(a.zoom)a.zoom.stop().css({opacity:a.opt.cursoropacitymax})};this.hideCursor=function(e){if(a.cursortimeout)return;if(!a.rail)return;if(!a.autohidedom)return;if(a.hasmousefocus&&a.opt.autohidemode=="leave")return;a.cursortimeout=setTimeout(function(){if(!a.rail.active||!a.showonmouseevent){a.autohidedom.stop().animate({opacity:a.opt.cursoropacitymin});if(a.zoom)a.zoom.stop().animate({opacity:a.opt.cursoropacitymin});a.cursoractive=false}a.cursortimeout=0},e||a.opt.hidecursordelay)};this.noticeCursor=function(e,t,n){a.showCursor(t,n);if(!a.rail.active)a.hideCursor(e)};this.getContentSize=a.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:a.haswrapper?function(){return{w:a.doc.outerWidth()+parseInt(a.win.css("paddingLeft"))+parseInt(a.win.css("paddingRight")),h:a.doc.outerHeight()+parseInt(a.win.css("paddingTop"))+parseInt(a.win.css("paddingBottom"))}}:function(){return{w:a.docscroll[0].scrollWidth,h:a.docscroll[0].scrollHeight}};this.onResize=function(e,t){if(!a||!a.win)return false;if(!a.haswrapper&&!a.ispage){if(a.win.css("display")=="none"){if(a.visibility)a.hideRail().hideRailHr();return false}else{if(!a.hidden&&!a.visibility)a.showRail().showRailHr()}}var n=a.page.maxh;var r=a.page.maxw;var i={h:a.view.h,w:a.view.w};a.view={w:a.ispage?a.win.width():parseInt(a.win[0].clientWidth),h:a.ispage?a.win.height():parseInt(a.win[0].clientHeight)};a.page=t?t:a.getContentSize();a.page.maxh=Math.max(0,a.page.h-a.view.h);a.page.maxw=Math.max(0,a.page.w-a.view.w);if(a.page.maxh==n&&a.page.maxw==r&&a.view.w==i.w){if(!a.ispage){var s=a.win.offset();if(a.lastposition){var o=a.lastposition;if(o.top==s.top&&o.left==s.left)return a}a.lastposition=s}else{return a}}if(a.page.maxh==0){a.hideRail();a.scrollvaluemax=0;a.scroll.y=0;a.scrollratio.y=0;a.cursorheight=0;a.setScrollTop(0);a.rail.scrollable=false}else{a.page.maxh-=a.opt.railpadding.top+a.opt.railpadding.bottom;a.rail.scrollable=true}if(a.page.maxw==0){a.hideRailHr();a.scrollvaluemaxw=0;a.scroll.x=0;a.scrollratio.x=0;a.cursorwidth=0;a.setScrollLeft(0);a.railh.scrollable=false}else{a.page.maxw-=a.opt.railpadding.left+a.opt.railpadding.right;a.railh.scrollable=true}a.locked=a.locked||a.page.maxh==0&&a.page.maxw==0;if(a.locked){if(!a.ispage)a.updateScrollBar(a.view);return false}if(!a.hidden&&!a.visibility){a.showRail().showRailHr()}else if(!a.hidden&&!a.railh.visibility)a.showRailHr();if(a.istextarea&&a.win.css("resize")&&a.win.css("resize")!="none")a.view.h-=20;a.cursorheight=Math.min(a.view.h,Math.round(a.view.h*(a.view.h/a.page.h)));a.cursorheight=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorheight);a.cursorwidth=Math.min(a.view.w,Math.round(a.view.w*(a.view.w/a.page.w)));a.cursorwidth=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorwidth);a.scrollvaluemax=a.view.h-a.cursorheight-a.cursor.hborder-(a.opt.railpadding.top+a.opt.railpadding.bottom);if(a.railh){a.railh.width=a.page.maxh>0?a.view.w-a.rail.width:a.view.w;a.scrollvaluemaxw=a.railh.width-a.cursorwidth-a.cursorh.wborder-(a.opt.railpadding.left+a.opt.railpadding.right)}if(!a.ispage)a.updateScrollBar(a.view);a.scrollratio={x:a.page.maxw/a.scrollvaluemaxw,y:a.page.maxh/a.scrollvaluemax};var u=a.getScrollTop();if(u>a.page.maxh){a.doScrollTop(a.page.maxh)}else{a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x));if(a.cursoractive)a.noticeCursor()}if(a.scroll.y&&a.getScrollTop()==0)a.doScrollTo(Math.floor(a.scroll.y*a.scrollratio.y));return a};this.resize=a.onResize;this.lazyResize=function(e){e=isNaN(e)?30:e;a.delayed("resize",a.resize,e);return a};this._bind=function(e,t,n,r){a.events.push({e:e,n:t,f:n,b:r,q:false});if(e.addEventListener){e.addEventListener(t,n,r||false)}else if(e.attachEvent){e.attachEvent("on"+t,n)}else{e["on"+t]=n}};this.jqbind=function(e,t,n){a.events.push({e:e,n:t,f:n,q:true});o(e).bind(t,n)};this.bind=function(e,t,n,r){var i="jquery"in e?e[0]:e;if(t=="mousewheel"){if("onwheel"in document||document.documentMode>=9){a._bind(i,"wheel",n,r||false)}else{var s=typeof document.onmousewheel!="undefined"?"mousewheel":"DOMMouseScroll";T(i,s,n,r||false);if(s=="DOMMouseScroll")T(i,"MozMousePixelScroll",n,r||false)}}else if(i.addEventListener){if(h.cantouch&&/mouseup|mousedown|mousemove/.test(t)){var o=t=="mousedown"?"touchstart":t=="mouseup"?"touchend":"touchmove";a._bind(i,o,function(e){if(e.touches){if(e.touches.length<2){var t=e.touches.length?e.touches[0]:e;t.original=e;n.call(this,t)}}else if(e.changedTouches){var t=e.changedTouches[0];t.original=e;n.call(this,t)}},r||false)}a._bind(i,t,n,r||false);if(h.cantouch&&t=="mouseup")a._bind(i,"touchcancel",n,r||false)}else{a._bind(i,t,function(e){e=e||window.event||false;if(e){if(e.srcElement)e.target=e.srcElement}if(!("pageY"in e)){e.pageX=e.clientX+document.documentElement.scrollLeft;e.pageY=e.clientY+document.documentElement.scrollTop}return n.call(i,e)===false||r===false?a.cancelEvent(e):true})}};this._unbind=function(e,t,n,r){if(e.removeEventListener){e.removeEventListener(t,n,r)}else if(e.detachEvent){e.detachEvent("on"+t,n)}else{e["on"+t]=false}};this.unbindAll=function(){for(var e=0;e<a.events.length;e++){var t=a.events[e];t.q?t.e.unbind(t.n,t.f):a._unbind(t.e,t.n,t.f,t.b)}};this.cancelEvent=function(e){var e=e.original?e.original:e?e:window.event||false;if(!e)return false;if(e.preventDefault)e.preventDefault();if(e.stopPropagation)e.stopPropagation();if(e.preventManipulation)e.preventManipulation();e.cancelBubble=true;e.cancel=true;e.returnValue=false;return false};this.stopPropagation=function(e){var e=e.original?e.original:e?e:window.event||false;if(!e)return false;if(e.stopPropagation)return e.stopPropagation();if(e.cancelBubble)e.cancelBubble=true;return false};this.showRail=function(){if(a.page.maxh!=0&&(a.ispage||a.win.css("display")!="none")){a.visibility=true;a.rail.visibility=true;a.rail.css("display","block")}return a};this.showRailHr=function(){if(!a.railh)return a;if(a.page.maxw!=0&&(a.ispage||a.win.css("display")!="none")){a.railh.visibility=true;a.railh.css("display","block")}return a};this.hideRail=function(){a.visibility=false;a.rail.visibility=false;a.rail.css("display","none");return a};this.hideRailHr=function(){if(!a.railh)return a;a.railh.visibility=false;a.railh.css("display","none");return a};this.show=function(){a.hidden=false;a.locked=false;return a.showRail().showRailHr()};this.hide=function(){a.hidden=true;a.locked=true;return a.hideRail().hideRailHr()};this.toggle=function(){return a.hidden?a.show():a.hide()};this.remove=function(){a.stop();if(a.cursortimeout)clearTimeout(a.cursortimeout);a.doZoomOut();a.unbindAll();if(h.isie9)a.win[0].detachEvent("onpropertychange",a.onAttributeChange);if(a.observer!==false)a.observer.disconnect();if(a.observerremover!==false)a.observerremover.disconnect();a.events=null;if(a.cursor){a.cursor.remove()}if(a.cursorh){a.cursorh.remove()}if(a.rail){a.rail.remove()}if(a.railh){a.railh.remove()}if(a.zoom){a.zoom.remove()}for(var e=0;e<a.saved.css.length;e++){var t=a.saved.css[e];t[0].css(t[1],typeof t[2]=="undefined"?"":t[2])}a.saved=false;a.me.data("__nicescroll","");var n=o.nicescroll;n.each(function(e){if(!this)return;if(this.id===a.id){delete n[e];for(var t=++e;t<n.length;t++,e++)n[e]=n[t];n.length--;if(n.length)delete n[n.length]}});for(var r in a){a[r]=null;delete a[r]}a=null};this.scrollstart=function(e){this.onscrollstart=e;return a};this.scrollend=function(e){this.onscrollend=e;return a};this.scrollcancel=function(e){this.onscrollcancel=e;return a};this.zoomin=function(e){this.onzoomin=e;return a};this.zoomout=function(e){this.onzoomout=e;return a};this.isScrollable=function(e){var t=e.target?e.target:e;if(t.nodeName=="OPTION")return true;while(t&&t.nodeType==1&&!/^BODY|HTML/.test(t.nodeName)){var n=o(t);var r=n.css("overflowY")||n.css("overflowX")||n.css("overflow")||"";if(/scroll|auto/.test(r))return t.clientHeight!=t.scrollHeight;t=t.parentNode?t.parentNode:false}return false};this.getViewport=function(e){var t=e&&e.parentNode?e.parentNode:false;while(t&&t.nodeType==1&&!/^BODY|HTML/.test(t.nodeName)){var n=o(t);if(/fixed|absolute/.test(n.css("position")))return n;var r=n.css("overflowY")||n.css("overflowX")||n.css("overflow")||"";if(/scroll|auto/.test(r)&&t.clientHeight!=t.scrollHeight)return n;if(n.getNiceScroll().length>0)return n;t=t.parentNode?t.parentNode:false}return false};this.triggerScrollEnd=function(){if(!a.onscrollend)return;var e=a.getScrollLeft();var t=a.getScrollTop();var n={type:"scrollend",current:{x:e,y:t},end:{x:e,y:t}};a.onscrollend.call(a,n)};this.onmousewheel=function(e){if(a.wheelprevented)return;if(a.locked){a.debounced("checkunlock",a.resize,250);return true}if(a.rail.drag)return a.cancelEvent(e);if(a.opt.oneaxismousemode=="auto"&&e.deltaX!=0)a.opt.oneaxismousemode=false;if(a.opt.oneaxismousemode&&e.deltaX==0){if(!a.rail.scrollable){if(a.railh&&a.railh.scrollable){return a.onmousewheelhr(e)}else{return true}}}var t=+(new Date);var n=false;if(a.opt.preservenativescrolling&&a.checkarea+600<t){a.nativescrollingarea=a.isScrollable(e);n=true}a.checkarea=t;if(a.nativescrollingarea)return true;var r=N(e,false,n);if(r)a.checkarea=0;return r};this.onmousewheelhr=function(e){if(a.wheelprevented)return;if(a.locked||!a.railh.scrollable)return true;if(a.rail.drag)return a.cancelEvent(e);var t=+(new Date);var n=false;if(a.opt.preservenativescrolling&&a.checkarea+600<t){a.nativescrollingarea=a.isScrollable(e);n=true}a.checkarea=t;if(a.nativescrollingarea)return true;if(a.locked)return a.cancelEvent(e);return N(e,true,n)};this.stop=function(){a.cancelScroll();if(a.scrollmon)a.scrollmon.stop();a.cursorfreezed=false;a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.noticeCursor();return a};this.getTransitionSpeed=function(e){var t=Math.round(a.opt.scrollspeed*10);var n=Math.min(t,Math.round(e/20*a.opt.scrollspeed));return n>20?n:0};if(!a.opt.smoothscroll){this.doScrollLeft=function(e,t){var n=a.getScrollTop();a.doScrollPos(e,n,t)};this.doScrollTop=function(e,t){var n=a.getScrollLeft();a.doScrollPos(n,e,t)};this.doScrollPos=function(e,t,n){var r=e>a.page.maxw?a.page.maxw:e;if(r<0)r=0;var i=t>a.page.maxh?a.page.maxh:t;if(i<0)i=0;a.synched("scroll",function(){a.setScrollTop(i);a.setScrollLeft(r)})};this.cancelScroll=function(){}}else if(a.ishwscroll&&h.hastransition&&a.opt.usetransition&&!!a.opt.smoothscroll){this.prepareTransition=function(e,t){var n=t?e>20?e:0:a.getTransitionSpeed(e);var r=n?h.prefixstyle+"transform "+n+"ms ease-out":"";if(!a.lasttransitionstyle||a.lasttransitionstyle!=r){a.lasttransitionstyle=r;a.doc.css(h.transitionstyle,r)}return n};this.doScrollLeft=function(e,t){var n=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(e,n,t)};this.doScrollTop=function(e,t){var n=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(n,e,t)};this.doScrollPos=function(e,t,n){var r=a.getScrollTop();var i=a.getScrollLeft();if((a.newscrolly-r)*(t-r)<0||(a.newscrollx-i)*(e-i)<0)a.cancelScroll();if(a.opt.bouncescroll==false){if(t<0)t=0;else if(t>a.page.maxh)t=a.page.maxh;if(e<0)e=0;else if(e>a.page.maxw)e=a.page.maxw}if(a.scrollrunning&&e==a.newscrollx&&t==a.newscrolly)return false;a.newscrolly=t;a.newscrollx=e;a.newscrollspeed=n||false;if(a.timer)return false;a.timer=setTimeout(function(){var n=a.getScrollTop();var r=a.getScrollLeft();var i={};i.x=e-r;i.y=t-n;i.px=r;i.py=n;var s=Math.round(Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2)));var o=a.newscrollspeed&&a.newscrollspeed>1?a.newscrollspeed:a.getTransitionSpeed(s);if(a.newscrollspeed&&a.newscrollspeed<=1)o*=a.newscrollspeed;a.prepareTransition(o,true);if(a.timerscroll&&a.timerscroll.tm)clearInterval(a.timerscroll.tm);if(o>0){if(!a.scrollrunning&&a.onscrollstart){var u={type:"scrollstart",current:{x:r,y:n},request:{x:e,y:t},end:{x:a.newscrollx,y:a.newscrolly},speed:o};a.onscrollstart.call(a,u)}if(h.transitionend){if(!a.scrollendtrapped){a.scrollendtrapped=true;a.bind(a.doc,h.transitionend,a.onScrollTransitionEnd,false)}}else{if(a.scrollendtrapped)clearTimeout(a.scrollendtrapped);a.scrollendtrapped=setTimeout(a.onScrollTransitionEnd,o)}var f=n;var l=r;a.timerscroll={bz:new g(f,a.newscrolly,o,0,0,.58,1),bh:new g(l,a.newscrollx,o,0,0,.58,1)};if(!a.cursorfreezed)a.timerscroll.tm=setInterval(function(){a.showCursor(a.getScrollTop(),a.getScrollLeft())},60)}a.synched("doScroll-set",function(){a.timer=0;if(a.scrollendtrapped)a.scrollrunning=true;a.setScrollTop(a.newscrolly);a.setScrollLeft(a.newscrollx);if(!a.scrollendtrapped)a.onScrollTransitionEnd()})},50)};this.cancelScroll=function(){if(!a.scrollendtrapped)return true;var e=a.getScrollTop();var t=a.getScrollLeft();a.scrollrunning=false;if(!h.transitionend)clearTimeout(h.transitionend);a.scrollendtrapped=false;a._unbind(a.doc,h.transitionend,a.onScrollTransitionEnd);a.prepareTransition(0);a.setScrollTop(e);if(a.railh)a.setScrollLeft(t);if(a.timerscroll&&a.timerscroll.tm)clearInterval(a.timerscroll.tm);a.timerscroll=false;a.cursorfreezed=false;a.showCursor(e,t);return a};this.onScrollTransitionEnd=function(){if(a.scrollendtrapped)a._unbind(a.doc,h.transitionend,a.onScrollTransitionEnd);a.scrollendtrapped=false;a.prepareTransition(0);if(a.timerscroll&&a.timerscroll.tm)clearInterval(a.timerscroll.tm);a.timerscroll=false;var e=a.getScrollTop();var t=a.getScrollLeft();a.setScrollTop(e);if(a.railh)a.setScrollLeft(t);a.noticeCursor(false,e,t);a.cursorfreezed=false;if(e<0)e=0;else if(e>a.page.maxh)e=a.page.maxh;if(t<0)t=0;else if(t>a.page.maxw)t=a.page.maxw;if(e!=a.newscrolly||t!=a.newscrollx)return a.doScrollPos(t,e,a.opt.snapbackspeed);if(a.onscrollend&&a.scrollrunning){a.triggerScrollEnd()}a.scrollrunning=false}}else{this.doScrollLeft=function(e,t){var n=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(e,n,t)};this.doScrollTop=function(e,t){var n=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(n,e,t)};this.doScrollPos=function(e,t,n){function p(){if(a.cancelAnimationFrame)return true;a.scrollrunning=true;h=1-h;if(h)return a.timer=f(p)||1;var e=0;var t,n;var r=n=a.getScrollTop();if(a.dst.ay){r=a.bzscroll?a.dst.py+a.bzscroll.getNow()*a.dst.ay:a.newscrolly;var i=r-n;if(i<0&&r<a.newscrolly||i>0&&r>a.newscrolly)r=a.newscrolly;a.setScrollTop(r);if(r==a.newscrolly)e=1}else{e=1}var s=t=a.getScrollLeft();if(a.dst.ax){s=a.bzscroll?a.dst.px+a.bzscroll.getNow()*a.dst.ax:a.newscrollx;var i=s-t;if(i<0&&s<a.newscrollx||i>0&&s>a.newscrollx)s=a.newscrollx;a.setScrollLeft(s);if(s==a.newscrollx)e+=1}else{e+=1}if(e==2){a.timer=0;a.cursorfreezed=false;a.bzscroll=false;a.scrollrunning=false;if(r<0)r=0;else if(r>a.page.maxh)r=a.page.maxh;if(s<0)s=0;else if(s>a.page.maxw)s=a.page.maxw;if(s!=a.newscrollx||r!=a.newscrolly)a.doScrollPos(s,r);else{if(a.onscrollend){a.triggerScrollEnd()}}}else{a.timer=f(p)||1}}var t=typeof t=="undefined"||t===false?a.getScrollTop(true):t;if(a.timer&&a.newscrolly==t&&a.newscrollx==e)return true;if(a.timer)l(a.timer);a.timer=0;var r=a.getScrollTop();var i=a.getScrollLeft();if((a.newscrolly-r)*(t-r)<0||(a.newscrollx-i)*(e-i)<0)a.cancelScroll();a.newscrolly=t;a.newscrollx=e;if(!a.bouncescroll||!a.rail.visibility){if(a.newscrolly<0){a.newscrolly=0}else if(a.newscrolly>a.page.maxh){a.newscrolly=a.page.maxh}}if(!a.bouncescroll||!a.railh.visibility){if(a.newscrollx<0){a.newscrollx=0}else if(a.newscrollx>a.page.maxw){a.newscrollx=a.page.maxw}}a.dst={};a.dst.x=e-i;a.dst.y=t-r;a.dst.px=i;a.dst.py=r;var s=Math.round(Math.sqrt(Math.pow(a.dst.x,2)+Math.pow(a.dst.y,2)));a.dst.ax=a.dst.x/s;a.dst.ay=a.dst.y/s;var o=0;var u=s;if(a.dst.x==0){o=r;u=t;a.dst.ay=1;a.dst.py=0}else if(a.dst.y==0){o=i;u=e;a.dst.ax=1;a.dst.px=0}var c=a.getTransitionSpeed(s);if(n&&n<=1)c*=n;if(c>0){a.bzscroll=a.bzscroll?a.bzscroll.update(u,c):new g(o,u,c,0,1,0,1)}else{a.bzscroll=false}if(a.timer)return;if(r==a.page.maxh&&t>=a.page.maxh||i==a.page.maxw&&e>=a.page.maxw)a.checkContentSize();var h=1;a.cancelAnimationFrame=false;a.timer=1;if(a.onscrollstart&&!a.scrollrunning){var d={type:"scrollstart",current:{x:i,y:r},request:{x:e,y:t},end:{x:a.newscrollx,y:a.newscrolly},speed:c};a.onscrollstart.call(a,d)}p();if(r==a.page.maxh&&t>=r||i==a.page.maxw&&e>=i)a.checkContentSize();a.noticeCursor()};this.cancelScroll=function(){if(a.timer)l(a.timer);a.timer=0;a.bzscroll=false;a.scrollrunning=false;return a}}this.doScrollBy=function(e,t){var n=0;if(t){n=Math.floor((a.scroll.y-e)*a.scrollratio.y)}else{var r=a.timer?a.newscrolly:a.getScrollTop(true);n=r-e}if(a.bouncescroll){var i=Math.round(a.view.h/2);if(n<-i)n=-i;else if(n>a.page.maxh+i)n=a.page.maxh+i}a.cursorfreezed=false;var s=a.getScrollTop(true);if(n<0&&s<=0)return a.noticeCursor();else if(n>a.page.maxh&&s>=a.page.maxh){a.checkContentSize();return a.noticeCursor()}a.doScrollTop(n)};this.doScrollLeftBy=function(e,t){var n=0;if(t){n=Math.floor((a.scroll.x-e)*a.scrollratio.x)}else{var r=a.timer?a.newscrollx:a.getScrollLeft(true);n=r-e}if(a.bouncescroll){var i=Math.round(a.view.w/2);if(n<-i)n=-i;else if(n>a.page.maxw+i)n=a.page.maxw+i}a.cursorfreezed=false;var s=a.getScrollLeft(true);if(n<0&&s<=0)return a.noticeCursor();else if(n>a.page.maxw&&s>=a.page.maxw)return a.noticeCursor();a.doScrollLeft(n)};this.doScrollTo=function(e,t){var n=t?Math.round(e*a.scrollratio.y):e;if(n<0)n=0;else if(n>a.page.maxh)n=a.page.maxh;a.cursorfreezed=false;a.doScrollTop(e)};this.checkContentSize=function(){var e=a.getContentSize();if(e.h!=a.page.h||e.w!=a.page.w)a.resize(false,e)};a.onscroll=function(e){if(a.rail.drag)return;if(!a.cursorfreezed){a.synched("scroll",function(){a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));if(a.railh)a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x));a.noticeCursor()})}};a.bind(a.docscroll,"scroll",a.onscroll);this.doZoomIn=function(e){if(a.zoomactive)return;a.zoomactive=true;a.zoomrestore={style:{}};var t=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"];var n=a.win[0].style;for(var r in t){var i=t[r];a.zoomrestore.style[i]=typeof n[i]!="undefined"?n[i]:""}a.zoomrestore.style.width=a.win.css("width");a.zoomrestore.style.height=a.win.css("height");a.zoomrestore.padding={w:a.win.outerWidth()-a.win.width(),h:a.win.outerHeight()-a.win.height()};if(h.isios4){a.zoomrestore.scrollTop=o(window).scrollTop();o(window).scrollTop(0)}a.win.css({position:h.isios4?"absolute":"fixed",top:0,left:0,"z-index":s+100,margin:"0px"});var u=a.win.css("backgroundColor");if(u==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(u))a.win.css("backgroundColor","#fff");a.rail.css({"z-index":s+101});a.zoom.css({"z-index":s+102});a.zoom.css("backgroundPosition","0px -18px");a.resizeZoom();if(a.onzoomin)a.onzoomin.call(a);return a.cancelEvent(e)};this.doZoomOut=function(e){if(!a.zoomactive)return;a.zoomactive=false;a.win.css("margin","");a.win.css(a.zoomrestore.style);if(h.isios4){o(window).scrollTop(a.zoomrestore.scrollTop)}a.rail.css({"z-index":a.zindex});a.zoom.css({"z-index":a.zindex});a.zoomrestore=false;a.zoom.css("backgroundPosition","0px 0px");a.onResize();if(a.onzoomout)a.onzoomout.call(a);return a.cancelEvent(e)};this.doZoom=function(e){return a.zoomactive?a.doZoomOut(e):a.doZoomIn(e)};this.resizeZoom=function(){if(!a.zoomactive)return;var e=a.getScrollTop();a.win.css({width:o(window).width()-a.zoomrestore.padding.w+"px",height:o(window).height()-a.zoomrestore.padding.h+"px"});a.onResize();a.setScrollTop(Math.min(a.page.maxh,e))};this.init();o.nicescroll.push(this)};var y=function(e){var t=this;this.nc=e;this.lastx=0;this.lasty=0;this.speedx=0;this.speedy=0;this.lasttime=0;this.steptime=0;this.snapx=false;this.snapy=false;this.demulx=0;this.demuly=0;this.lastscrollx=-1;this.lastscrolly=-1;this.chkx=0;this.chky=0;this.timer=0;this.time=function(){return+(new Date)};this.reset=function(e,n){t.stop();var r=t.time();t.steptime=0;t.lasttime=r;t.speedx=0;t.speedy=0;t.lastx=e;t.lasty=n;t.lastscrollx=-1;t.lastscrolly=-1};this.update=function(e,n){var r=t.time();t.steptime=r-t.lasttime;t.lasttime=r;var i=n-t.lasty;var s=e-t.lastx;var o=t.nc.getScrollTop();var u=t.nc.getScrollLeft();var a=o+i;var f=u+s;t.snapx=f<0||f>t.nc.page.maxw;t.snapy=a<0||a>t.nc.page.maxh;t.speedx=s;t.speedy=i;t.lastx=e;t.lasty=n};this.stop=function(){t.nc.unsynched("domomentum2d");if(t.timer)clearTimeout(t.timer);t.timer=0;t.lastscrollx=-1;t.lastscrolly=-1};this.doSnapy=function(e,n){var r=false;if(n<0){n=0;r=true}else if(n>t.nc.page.maxh){n=t.nc.page.maxh;r=true}if(e<0){e=0;r=true}else if(e>t.nc.page.maxw){e=t.nc.page.maxw;r=true}r?t.nc.doScrollPos(e,n,t.nc.opt.snapbackspeed):t.nc.triggerScrollEnd()};this.doMomentum=function(e){var n=t.time();var r=e?n+e:t.lasttime;var i=t.nc.getScrollLeft();var s=t.nc.getScrollTop();var o=t.nc.page.maxh;var u=t.nc.page.maxw;t.speedx=u>0?Math.min(60,t.speedx):0;t.speedy=o>0?Math.min(60,t.speedy):0;var a=r&&n-r<=60;if(s<0||s>o||i<0||i>u)a=false;var f=t.speedy&&a?t.speedy:false;var l=t.speedx&&a?t.speedx:false;if(f||l){var c=Math.max(16,t.steptime);if(c>50){var h=c/50;t.speedx*=h;t.speedy*=h;c=50}t.demulxy=0;t.lastscrollx=t.nc.getScrollLeft();t.chkx=t.lastscrollx;t.lastscrolly=t.nc.getScrollTop();t.chky=t.lastscrolly;var p=t.lastscrollx;var d=t.lastscrolly;var v=function(){var e=t.time()-n>600?.04:.02;if(t.speedx){p=Math.floor(t.lastscrollx-t.speedx*(1-t.demulxy));t.lastscrollx=p;if(p<0||p>u)e=.1}if(t.speedy){d=Math.floor(t.lastscrolly-t.speedy*(1-t.demulxy));t.lastscrolly=d;if(d<0||d>o)e=.1}t.demulxy=Math.min(1,t.demulxy+e);t.nc.synched("domomentum2d",function(){if(t.speedx){var e=t.nc.getScrollLeft();if(e!=t.chkx)t.stop();t.chkx=p;t.nc.setScrollLeft(p)}if(t.speedy){var n=t.nc.getScrollTop();if(n!=t.chky)t.stop();t.chky=d;t.nc.setScrollTop(d)}if(!t.timer){t.nc.hideCursor();t.doSnapy(p,d)}});if(t.demulxy<1){t.timer=setTimeout(v,c)}else{t.stop();t.nc.hideCursor();t.doSnapy(p,d)}};v()}else{t.doSnapy(t.nc.getScrollLeft(),t.nc.getScrollTop())}}};var b=e.fn.scrollTop;e.cssHooks["pageYOffset"]={get:function(e,t,n){var r=o.data(e,"__nicescroll")||false;return r&&r.ishwscroll?r.getScrollTop():b.call(e)},set:function(e,t){var n=o.data(e,"__nicescroll")||false;n&&n.ishwscroll?n.setScrollTop(parseInt(t)):b.call(e,t);return this}};e.fn.scrollTop=function(e){if(typeof e=="undefined"){var t=this[0]?o.data(this[0],"__nicescroll")||false:false;return t&&t.ishwscroll?t.getScrollTop():b.call(this)}else{return this.each(function(){var t=o.data(this,"__nicescroll")||false;t&&t.ishwscroll?t.setScrollTop(parseInt(e)):b.call(o(this),e)})}};var w=e.fn.scrollLeft;o.cssHooks.pageXOffset={get:function(e,t,n){var r=o.data(e,"__nicescroll")||false;return r&&r.ishwscroll?r.getScrollLeft():w.call(e)},set:function(e,t){var n=o.data(e,"__nicescroll")||false;n&&n.ishwscroll?n.setScrollLeft(parseInt(t)):w.call(e,t);return this}};e.fn.scrollLeft=function(e){if(typeof e=="undefined"){var t=this[0]?o.data(this[0],"__nicescroll")||false:false;return t&&t.ishwscroll?t.getScrollLeft():w.call(this)}else{return this.each(function(){var t=o.data(this,"__nicescroll")||false;t&&t.ishwscroll?t.setScrollLeft(parseInt(e)):w.call(o(this),e)})}};var E=function(e){var t=this;this.length=0;this.name="nicescrollarray";this.each=function(e){for(var n=0,r=0;n<t.length;n++)e.call(t[n],r++);return t};this.push=function(e){t[t.length]=e;t.length++};this.eq=function(e){return t[e]};if(e){for(var n=0;n<e.length;n++){var r=o.data(e[n],"__nicescroll")||false;if(r){this[this.length]=r;this.length++}}}return this};S(E.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(e,t){e[t]=function(){var e=arguments;return this.each(function(){this[t].apply(this,e)})}});e.fn.getNiceScroll=function(e){if(typeof e=="undefined"){return new E(this)}else{var t=this[e]&&o.data(this[e],"__nicescroll")||false;return t}};e.extend(e.expr[":"],{nicescroll:function(e){return o.data(e,"__nicescroll")?true:false}});o.fn.niceScroll=function(e,t){if(typeof t=="undefined"){if(typeof e=="object"&&!("jquery"in e)){t=e;e=false}}t=o.extend({},t);var n=new E;if(typeof t=="undefined")t={};if(e||false){t.doc=o(e);t.win=o(this)}var r=!("doc"in t);if(!r&&!("win"in t))t.win=o(this);this.each(function(){var e=o(this).data("__nicescroll")||false;if(!e){t.doc=r?o(this):t.doc;e=new g(t,o(this));o(this).data("__nicescroll",e)}n.push(e)});return n.length==1?n[0]:n};window.NiceScroll={getjQuery:function(){return e}};if(!o.nicescroll){o.nicescroll=new E;o.nicescroll.options=d}});
/**
 * WordPress inline HTML embed
 *
 * @since 4.4.0
 *
 * This file cannot have ampersands in it. This is to ensure
 * it can be embedded in older versions of WordPress.
 * See https://core.trac.wordpress.org/changeset/35708.
 */
(function ( window, document ) {
	'use strict';

	var supportedBrowser = false,
		loaded = false;

		if ( document.querySelector ) {
			if ( window.addEventListener ) {
				supportedBrowser = true;
			}
		}

	window.wp = window.wp || {};

	if ( !! window.wp.receiveEmbedMessage ) {
		return;
	}

	window.wp.receiveEmbedMessage = function( e ) {
		var data = e.data;
		if ( ! ( data.secret || data.message || data.value ) ) {
			return;
		}

		if ( /[^a-zA-Z0-9]/.test( data.secret ) ) {
			return;
		}

		var iframes = document.querySelectorAll( 'iframe[data-secret="' + data.secret + '"]' ),
			blockquotes = document.querySelectorAll( 'blockquote[data-secret="' + data.secret + '"]' ),
			i, source, height, sourceURL, targetURL;

		for ( i = 0; i < blockquotes.length; i++ ) {
			blockquotes[ i ].style.display = 'none';
		}

		for ( i = 0; i < iframes.length; i++ ) {
			source = iframes[ i ];

			if ( e.source !== source.contentWindow ) {
				continue;
			}

			source.removeAttribute( 'style' );

			/* Resize the iframe on request. */
			if ( 'height' === data.message ) {
				height = parseInt( data.value, 10 );
				if ( height > 1000 ) {
					height = 1000;
				} else if ( ~~height < 200 ) {
					height = 200;
				}

				source.height = height;
			}

			/* Link to a specific URL on request. */
			if ( 'link' === data.message ) {
				sourceURL = document.createElement( 'a' );
				targetURL = document.createElement( 'a' );

				sourceURL.href = source.getAttribute( 'src' );
				targetURL.href = data.value;

				/* Only continue if link hostname matches iframe's hostname. */
				if ( targetURL.host === sourceURL.host ) {
					if ( document.activeElement === source ) {
						window.top.location.href = data.value;
					}
				}
			}
		}
	};

	function onLoad() {
		if ( loaded ) {
			return;
		}

		loaded = true;

		var isIE10 = -1 !== navigator.appVersion.indexOf( 'MSIE 10' ),
			isIE11 = !!navigator.userAgent.match( /Trident.*rv:11\./ ),
			iframes = document.querySelectorAll( 'iframe.wp-embedded-content' ),
			iframeClone, i, source, secret;

		for ( i = 0; i < iframes.length; i++ ) {
			source = iframes[ i ];

			if ( source.getAttribute( 'data-secret' ) ) {
				continue;
			}

			/* Add secret to iframe */
			secret = Math.random().toString( 36 ).substr( 2, 10 );
			source.src += '#?secret=' + secret;
			source.setAttribute( 'data-secret', secret );

			/* Remove security attribute from iframes in IE10 and IE11. */
			if ( ( isIE10 || isIE11 ) ) {
				iframeClone = source.cloneNode( true );
				iframeClone.removeAttribute( 'security' );
				source.parentNode.replaceChild( iframeClone, source );
			}
		}
	}

	if ( supportedBrowser ) {
		window.addEventListener( 'message', window.wp.receiveEmbedMessage, false );
		document.addEventListener( 'DOMContentLoaded', onLoad, false );
		window.addEventListener( 'load', onLoad, false );
	}
})( window, document );
;
function frmFrontFormJS(){
	'use strict';
	var currentlyAddingRow = false;
	var action = '';
	var jsErrors = [];

	function setNextPage(e){
		/*jshint validthis:true */
		var $thisObj = jQuery(this);
		var thisType = $thisObj.attr('type');
		if ( thisType !== 'submit' ) {
			e.preventDefault();
		}

		var f = $thisObj.parents('form:first');
		var v = '';
		var d = '';
		var thisName = this.name;
		if ( thisName === 'frm_prev_page' || this.className.indexOf('frm_prev_page') !== -1 ) {
			v = jQuery(f).find('.frm_next_page').attr('id').replace('frm_next_p_', '');
		} else if ( thisName === 'frm_save_draft' || this.className.indexOf('frm_save_draft') !== -1 ) {
			d = 1;
		}

		jQuery('.frm_next_page').val(v);
		jQuery('.frm_saving_draft').val(d);

		if ( thisType !== 'submit' ) {
			f.trigger('submit');
		}
	}
	
	function toggleSection(){
		/*jshint validthis:true */
		jQuery(this).parent().children('.frm_toggle_container').slideToggle('fast');
		jQuery(this).toggleClass('active').children('.ui-icon-triangle-1-e, .ui-icon-triangle-1-s')
			.toggleClass('ui-icon-triangle-1-s ui-icon-triangle-1-e');
	}

	function loadUniqueTimeFields() {
		if ( typeof __frmUniqueTimes === 'undefined' ) {
			return;
		}

		var timeFields = __frmUniqueTimes;
		for ( var i = 0; i < timeFields.length; i++ ) {
			jQuery( document.getElementById( timeFields[i].dateID ) ).change( maybeTriggerUniqueTime );
		}
	}

	function maybeTriggerUniqueTime() {
		/*jshint validthis:true */
		var timeFields = __frmUniqueTimes;
		for ( var i = 0; i < timeFields.length; i++ ) {
			if ( timeFields[i].dateID == this.id ) {
				frmFrontForm.removeUsedTimes( this, timeFields[i].timeID );
			}
		}
	}

	function loadDateFields() {
		jQuery(document).on( 'focusin', '.frm_date', triggerDateField );
		loadUniqueTimeFields();
	}

	function triggerDateField() {
		/*jshint validthis:true */
		if ( this.className.indexOf('frm_custom_date') !== -1 || typeof __frmDatepicker === 'undefined' ) {
			return;
		}

		var dateFields = __frmDatepicker;
		var id = this.id;
		var idParts = id.split('-');
		var lastPart = idParts.pop();
		var altID = 'input[id^="'+ idParts.join('-') +'"]';

		jQuery.datepicker.setDefaults(jQuery.datepicker.regional['']);

		var opt_key = 0;
		for ( var i = 0; i < dateFields.length; i++ ) {
			if ( dateFields[i].triggerID == '#' + id || dateFields[i].triggerID == altID ) {
				opt_key = i;
			}
		}

		if ( dateFields[ opt_key ].options.defaultDate !== '' ) {
			dateFields[ opt_key ].options.defaultDate = new Date( dateFields[ opt_key ].options.defaultDate );
		}

		jQuery(this).datepicker( jQuery.extend(
			jQuery.datepicker.regional[ dateFields[ opt_key ].locale ],
			dateFields[ opt_key ].options
		) );
	}

	function loadDropzones( repeatRow ) {
		if ( typeof __frmDropzone === 'undefined'  ) {
			return;
		}

		var uploadFields = __frmDropzone;
		for ( var i = 0; i < uploadFields.length; i++ ) {
			loadDropzone( i, repeatRow );
		}
	}

	function loadDropzone( i, repeatRow ) {
		var uploadFields = __frmDropzone;
		var selector = '#'+ uploadFields[i].htmlID + '_dropzone';
		var fieldName = uploadFields[i].fieldName;

		if ( typeof repeatRow !== 'undefined' && selector.indexOf('-0_dropzone') !== -1 ) {
			selector = selector.replace( '-0_dropzone', '-' + repeatRow +'_dropzone' );
			fieldName = fieldName.replace('[0]', '['+ repeatRow +']');
			delete uploadFields[i].mockFiles;
		}

		var field = jQuery(selector);
		if ( field.length < 1 || field.hasClass('dz-clickable') ) {
			return;
		}

		var max = uploadFields[i].maxFiles;
		if ( typeof uploadFields[i].mockFiles !== 'undefined' ) {
			var uploadedCount = uploadFields[i].mockFiles.length;
			if ( max > 0 ) {
				max = max - uploadedCount;
			}
		}

		var form = field.closest('form');
		var submitButton = form.find('input[type="submit"], .frm_submit input[type="button"]');
		var loading = form.find('.frm_ajax_loading');

		field.dropzone({
			url:frm_js.ajax_url,
			addRemoveLinks: true,
			paramName: field.attr('id').replace('_dropzone', ''),
			maxFilesize: uploadFields[i].maxFilesize,
			maxFiles: max,
			uploadMultiple: uploadFields[i].uploadMultiple,
			dictCancelUpload: uploadFields[i].cancel,
			dictCancelUploadConfirmation: uploadFields[i].cancelConfirm,
			dictRemoveFile: uploadFields[i].remove,
			dictMaxFilesExceeded: uploadFields[i].maxFilesExceeded,
			fallback: function() {
				// Force ajax submit to turn off
				jQuery(this.element).closest('form').removeClass('frm_ajax_submit');
			},
			init: function() {
				this.on('sending', function(file, xhr, formData) {
					formData.append('action', 'frm_submit_dropzone' );
					formData.append('field_id', uploadFields[i].fieldID );
					formData.append('form_id', uploadFields[i].formID );
				});

				this.on('success', function( file, response ) {
					var mediaIDs = jQuery.parseJSON(response);
					for ( var m = 0; m < mediaIDs.length; m++ ) {
						if ( uploadFields[i].uploadMultiple !== true ) {
							jQuery('input[name="'+ fieldName +'"]').val( mediaIDs[m] );
						}
					}
				});

				this.on('successmultiple', function( files, response ) {
					var mediaIDs = jQuery.parseJSON(response);
					for ( var m = 0; m < files.length; m++ ) {
						jQuery(files[m].previewElement).append( getHiddenUploadHTML( uploadFields[i], mediaIDs[m] ) );
					}
				});

				this.on('removedfile', function( file ) {
					if ( uploadFields[i].uploadMultiple !== true ) {
						jQuery('input[name="'+ fieldName +'"]').val('');
					}
				});

				this.on('complete', function( file ) {
					if ( typeof file.mediaID !== 'undefined' ) {
						if ( uploadFields[i].uploadMultiple ) {
							jQuery(file.previewElement).append( getHiddenUploadHTML( uploadFields[i], file.mediaID ) );
						}

						// Add download link to the file
						var fileName = file.previewElement.querySelectorAll('[data-dz-name]');
						for ( var _i = 0, _len = fileName.length; _i < _len; _i++ ) {
							var node = fileName[_i];
							node.innerHTML = '<a href="'+ file.url +'">'+ file.name +'</a>';
						}
					}
				});

				this.on('addedfile', function(){
					loading.addClass('frm_loading_now');
					submitButton.attr('disabled', 'disabled');
				});

				this.on('queuecomplete', function(){
					loading.removeClass('frm_loading_now');
					submitButton.removeAttr('disabled');
				});

				this.on('removedfile', function( file ) {
					if ( typeof file.mediaID !== 'undefined' ) {
						jQuery(file.previewElement).remove();
						var fileCount = this.files.length;
						this.options.maxFiles = uploadFields[i].maxFiles - fileCount;
					}
				});

				if ( typeof uploadFields[i].mockFiles !== 'undefined' ) {
					for ( var f = 0; f < uploadFields[i].mockFiles.length; f++ ) {
						var mockFile = {
							name: uploadFields[i].mockFiles[f].name,
							size: uploadFields[i].mockFiles[f].size,
							url:uploadFields[i].mockFiles[f].file_url,
							mediaID: uploadFields[i].mockFiles[f].id
						};

						this.emit('addedfile', mockFile);
						this.emit('thumbnail', mockFile, uploadFields[i].mockFiles[f].url);
						this.emit('complete', mockFile);
						this.files.push(mockFile);
					}
				}
			}
		});
	}

	function getHiddenUploadHTML( field, mediaID ) {
		return '<input name="'+ field.fieldName +'[]" type="hidden" value="'+ mediaID +'" data-frmfile="'+ field.fieldID +'" />';
	}

	function removeFile(){
		/*jshint validthis:true */
		var fieldName = jQuery(this).data('frm-remove');
		fadeOut(jQuery(this).parent('.dz-preview'));
		var singleField = jQuery('input[name="'+ fieldName +'"]');
		if ( singleField.length ) {
			singleField.val('');
		}
	}

	/**
	 * Show "Other" text box when Other item is checked/selected
	 * Hide and clear text box when item is unchecked/unselected
	 */
	function showOtherText(){
        /*jshint validthis:true */
        var type = this.type;
        var other = false;
        var select = false;

        // Dropdowns
        if ( type === 'select-one' ) {
            select = true;
            var curOpt = this.options[this.selectedIndex];
            if ( curOpt.className === 'frm_other_trigger' ) {
                other = true;
            }
        } else if ( type === 'select-multiple' ) {
            select = true;
            var allOpts = this.options;
            other = false;
            for ( var i = 0; i < allOpts.length; i++ ) {
                if ( allOpts[i].className === 'frm_other_trigger' ) {
                    if ( allOpts[i].selected ) {
                        other = true;
                        break;
                    }
                }
            }
        }
        if ( select ) {
			var otherField = jQuery(this).parent().children('.frm_other_input');

			if ( otherField.length ) {
				if ( other ) {
					// Remove frm_pos_none
					otherField[0].className = otherField[0].className.replace( 'frm_pos_none', '' );
				} else {
					// Add frm_pos_none
					if ( otherField[0].className.indexOf( 'frm_pos_none' ) < 1 ) {
						otherField[0].className = otherField[0].className + ' frm_pos_none';
					}
					otherField[0].value = '';
				}
			}

        // Radio
        } else if ( type === 'radio' ) {
			if ( jQuery(this).is(':checked' ) ) {
				jQuery(this).closest('.frm_radio').children('.frm_other_input').removeClass('frm_pos_none');
				jQuery(this).closest('.frm_radio').siblings().children('.frm_other_input').addClass('frm_pos_none').val('');
			}
        // Checkboxes
        } else if ( type === 'checkbox' ) {
            if ( this.checked ) {
                jQuery(this).closest('.frm_checkbox').children('.frm_other_input').removeClass('frm_pos_none'); 
            } else {
                jQuery(this).closest('.frm_checkbox').children('.frm_other_input').addClass('frm_pos_none').val('');
            }
        }
	}

	function maybeCheckDependent(e){
		/*jshint validthis:true */

		var field_id = getFieldId( this, false );
		if ( ! field_id || typeof field_id === 'undefined' ) {
			return;
		}

		var reset = 'reset';
		if ( e.frmTriggered ) {
			if ( e.frmTriggered == field_id ) {
				return;
			}
			reset = 'persist';
		}

		checkFieldsWithConditionalLogicDependentOnThis( field_id, jQuery(this) );
		var originalEvent = getOriginalEvent( e );
		checkFieldsWatchingLookup( field_id, jQuery(this), originalEvent );
		doCalculation(field_id, jQuery(this));
		maybeValidateChange( field_id, this );
	}

	function maybeValidateChange( field_id, field ) {
		if ( jQuery(field).closest('form').hasClass('frm_js_validate') ) {
			validateField( field_id, field );
		}
	}

	function getOriginalEvent( e ) {
		var originalEvent;
		if ( typeof e.originalEvent !== 'undefined' || e.currentTarget.className.indexOf( 'frm_chzn') > -1 ) {
			originalEvent = 'value changed';
		} else {
			originalEvent = 'other';
		}
		return originalEvent;
	}

	/* Get the ID of the field that changed*/
	function getFieldId( field, fullID ) {
		var fieldName = '';
		if ( field instanceof jQuery ) {
			fieldName = field.attr('name');
		} else {
			fieldName = field.name;
		}

		if ( fieldName === '' ) {
			if ( field instanceof jQuery ) {
				fieldName = field.data('name');
			} else {
				fieldName = field.getAttribute('data-name');
			}

			if ( fieldName !== '' && fieldName ) {
				return fieldName;
			}
			return 0;
		}

		var nameParts = fieldName.replace('item_meta[', '').replace('[]', '').split(']');
		//TODO: Fix this for checkboxes and address fields
		if ( nameParts.length < 1 ) {
			return 0;
		}
		nameParts = nameParts.filter(function(n){ return n !== ''; });

		var field_id = nameParts[0];
		var isRepeating = false;

		if ( nameParts.length === 1 || nameParts[1] == '[form' || nameParts[1] == '[id' ) {
			return field_id;
		}

		// Check if 'this' is in a repeating section
		if ( jQuery('input[name="item_meta['+ field_id +'][form]"]').length ) {
			// If item_meta[370][0]
			if ( nameParts.length === 2 && nameParts[1] == '[0' ) {
				return 0;
			}

			// this is a repeatable section with name: item_meta[370][0][414]
			field_id = nameParts[2].replace('[', '');
			isRepeating = true;
		}

		// Check if 'this' is an other text field and get field ID for it
		if ( 'other' === field_id ) {
			if ( isRepeating ) {
				// name for other fields: item_meta[370][0][other][414]
				field_id = nameParts[3].replace('[', '');
			} else {
				// Other field name: item_meta[other][370]
				field_id = nameParts[1].replace('[', '');
			}
		}

		if ( fullID === true ) {
			// For use in the container div id
			if ( field_id === nameParts[0] ) {
				field_id = field_id +'-'+ nameParts[1].replace('[', '');
			} else {
				field_id = field_id +'-'+ nameParts[0] +'-'+ nameParts[1].replace('[', '');
			}
		}

		return field_id;
	}

	/*****************************************************
	 Conditional Logic Functions
	 ******************************************************/

	// Check if a changed field has other fields depending on it
	function checkFieldsWithConditionalLogicDependentOnThis( field_id, changedInput ){
		if ( typeof __FRMRULES  === 'undefined' ||
			typeof __FRMRULES[field_id] === 'undefined' ||
			__FRMRULES[field_id].dependents.length < 1 ||
			changedInput === null ||
			typeof(changedInput) === 'undefined'
		) {
			return;
		}

		var triggerFieldArgs = __FRMRULES[field_id];
		var repeatArgs = getRepeatArgsFromFieldName( changedInput[0].name );

		for ( var i = 0, l = triggerFieldArgs.dependents.length; i < l; i++ ) {
			hideOrShowFieldById( triggerFieldArgs.dependents[ i ], repeatArgs );
		}
	}

	/**
	 * Hide or show all instances of a field using the field ID
	 *
	 * @param fieldId
	 * @param triggerFieldRepeatArgs
     */
	function hideOrShowFieldById( fieldId, triggerFieldRepeatArgs ) {
		var depFieldArgs = getRulesForSingleField( fieldId );

		if ( depFieldArgs === false || depFieldArgs.conditions.length < 1 ) {
			// If field has no logic on it, stop now
			return;
		}

		var childFieldDivs = getAllFieldDivs( depFieldArgs, triggerFieldRepeatArgs );

		var childFieldNum = childFieldDivs.length;
		for ( var i = 0; i<childFieldNum; i++ ) {
			depFieldArgs.containerId = childFieldDivs[i];
			addRepeatRow( depFieldArgs, childFieldDivs[i] );
			hideOrShowSingleField( depFieldArgs );
		}
	}

	/**
	 * Get all the field divs that should be hidden or shown, regardless of whether they're on the current page
	 *
	 * @param {Object} depFieldArgs
	 * @param {bool} depFieldArgs.isRepeating
	 * @param {string} depFieldArgs.fieldId
	 * @param {object} triggerFieldArgs
	 * @param {string} triggerFieldArgs.repeatingSection
	 * @param {string} triggerFieldArgs.repeatRow
	 * @param {string} depFieldArgs.inEmbedForm
	 * @returns {Array}
     */
	function getAllFieldDivs( depFieldArgs, triggerFieldArgs ) {
		var childFieldDivs = [];

		if ( depFieldArgs.isRepeating ) {
			if ( triggerFieldArgs.repeatingSection !== '' ) {
				// If trigger field is repeating/embedded, use its section row in selector
				var container = 'frm_field_' + depFieldArgs.fieldId + '-';
				container += triggerFieldArgs.repeatingSection + '-' + triggerFieldArgs.repeatRow + '_container';
				childFieldDivs.push( container );
			} else {
				// If trigger field is not repeating/embedded, get all repeating/embedded field divs
				if ( depFieldArgs.inEmbedForm !== '0' ) {
					childFieldDivs = getEmbeddedFieldDivs( depFieldArgs );
				} else {
					childFieldDivs = getAllRepeatingFieldDivs(depFieldArgs);
				}
			}
		} else {
			childFieldDivs.push( 'frm_field_' + depFieldArgs.fieldId + '_container' );
		}

		return childFieldDivs;
	}

	/**
	 * Get the field div for an embedded field
	 *
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldId
	 * @returns {Array}
	 */
	function getEmbeddedFieldDivs( depFieldArgs ) {
		var containerFieldId = getContainerFieldId( depFieldArgs );
		var fieldDiv = 'frm_field_' + depFieldArgs.fieldId + '-' + containerFieldId + '-';

		var childFieldDivs = [ fieldDiv + '0_container' ];

		return childFieldDivs;

	}

	/**
	 * Get all instances of a repeating field
	 *
	 * @since 2.01.0
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldId
     */
	function getAllRepeatingFieldDivs( depFieldArgs ) {
		var childFieldDivs = [];
		var containerFieldId = getContainerFieldId( depFieldArgs );

		// TODO: what if section is inside embedded form?

		// Check if we're on the current page
		var sectionOnPage = document.getElementById( 'frm_field_' + containerFieldId + '_container' );
		if ( sectionOnPage !== null ) {
			// On the current page
			var childFields = document.querySelectorAll( '.frm_field_' + depFieldArgs.fieldId + '_container' );
			for ( var i = 0, l=childFields.length; i<l; i++ ) {
				childFieldDivs.push( childFields[i].id );
			}
		} else {
			childFieldDivs = getRepeatingFieldDivsAcrossPage( depFieldArgs );
		}

		return childFieldDivs;
	}

	/**
	 * Get the field divs for repeating fields across a page
	 *
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldId
	 * @param {string} depFieldArgs.inSectionKey
	 * @returns {Array}
	 * TODO: Maybe improve this by inserting hidden fields for each field in a repeating section, even if section is on pg 2
	 */
	function getRepeatingFieldDivsAcrossPage( depFieldArgs ) {
		var childFieldDivs = [];
		var containerFieldId = getContainerFieldId( depFieldArgs );
		var fieldDiv = 'frm_field_' + depFieldArgs.fieldId + '-' + containerFieldId + '-';

		var allRows = document.querySelectorAll( '[id^="field_' + depFieldArgs.inSectionKey + '-rowid-"]' );

		// If no rows have been added to the repeating section yet, assume just one row
		if ( allRows.length < 1 ) {
			childFieldDivs.push( fieldDiv + '0_container' );
			return childFieldDivs;
		}

		var currentIdParts = [];
		for ( var i = 0, l = allRows.length; i<l; i++ ) {
			currentIdParts = allRows[i].id.split( '-' );

			if ( currentIdParts.length != 3 ) {
				continue;
			}

			childFieldDivs.push(fieldDiv + currentIdParts[2] + '_container');
		}

		return childFieldDivs;
	}

	/**
	 *
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.inSection
	 * @param {string} depFieldArgs.inEmbedForm
	 * @returns {string}
     */
	function getContainerFieldId( depFieldArgs ){
		var containerFieldId = '';
		if ( depFieldArgs.inEmbedForm !== '0' ) {
			containerFieldId = depFieldArgs.inEmbedForm;
		} else if ( depFieldArgs.inSection !== '0' ) {
			containerFieldId = depFieldArgs.inSection;
		}

		return containerFieldId;
	}

	/**
	 *
	 * @param depFieldArgs
	 * @param {bool} depFieldArgs.isRepeating
	 * @param childFieldDivId
     */
	function addRepeatRow( depFieldArgs, childFieldDivId ) {
		if ( depFieldArgs.isRepeating ) {
			var divParts = childFieldDivId.replace( '_container', '' ).split( '-' );
			depFieldArgs.repeatRow = divParts[2];
		} else {
			depFieldArgs.repeatRow = '';
		}
	}

	function hideOrShowSingleField( depFieldArgs ){
		var logicOutcomes = [];
		var len = depFieldArgs.conditions.length;
		for ( var i = 0; i < len; i++ ) {
			logicOutcomes.push( checkLogicCondition( depFieldArgs.conditions[ i ], depFieldArgs ) );
		}

		routeToHideOrShowField( depFieldArgs, logicOutcomes );
	}

	function getRulesForSingleField( fieldId ) {
		if ( typeof __FRMRULES  === 'undefined' || typeof __FRMRULES[fieldId] === 'undefined' ) {
			return false;
		}

		return __FRMRULES[fieldId];
	}

	/**
	 * @param {Array} logicCondition
	 * @param {string} logicCondition.fieldId
	 * @param depFieldArgs
	 * @returns {*}
     */
	function checkLogicCondition( logicCondition, depFieldArgs ) {
		var fieldId = logicCondition.fieldId;

		var logicFieldArgs = getRulesForSingleField( fieldId );

		var fieldValue = getFieldValue( logicFieldArgs, depFieldArgs );

		return getLogicConditionOutcome( logicCondition, fieldValue, depFieldArgs, logicFieldArgs );
	}

	/**
	 * Get the value from any field
	 *
	 * @param logicFieldArgs
	 * @param {string} logicFieldArgs.inputType
	 * @param depFieldArgs
	 * @returns {string}
     */
	function getFieldValue( logicFieldArgs, depFieldArgs ){
		var fieldValue = '';

		if ( logicFieldArgs.inputType == 'radio' || logicFieldArgs.inputType == 'checkbox' ) {
			fieldValue = getValueFromRadioOrCheckbox( logicFieldArgs, depFieldArgs );
		} else {
			fieldValue = getValueFromTextOrDropdown( logicFieldArgs, depFieldArgs );
		}

		fieldValue = cleanFinalFieldValue( fieldValue );

		return fieldValue;
	}

	/**
	 * Get the value from a Text or Dropdown field
	 *
	 * @param logicFieldArgs
	 * @param {string} logicFieldArgs.fieldKey
	 * @param {bool} logicFieldArgs.isRepeating
	 * @param {bool} logicFieldArgs.isMultiSelect
	 * @param depFieldArgs
	 * @param {string} depFieldArgs.repeatRow
 	 */
	function getValueFromTextOrDropdown( logicFieldArgs, depFieldArgs ) {
		var logicFieldValue = '';

		if ( logicFieldArgs.isMultiSelect === true ) {
			return getValueFromMultiSelectDropdown( logicFieldArgs, depFieldArgs );
		}

		var fieldCall = 'field_' + logicFieldArgs.fieldKey;
		if ( logicFieldArgs.isRepeating ) {
			// If trigger field is repeating, dependent field is repeating too
			fieldCall += '-' + depFieldArgs.repeatRow;
		}

		var logicFieldInput = document.getElementById( fieldCall );

		if ( logicFieldInput !== null ) {
			logicFieldValue = logicFieldInput.value;
		}

		return logicFieldValue;
	}

	function getValueFromMultiSelectDropdown( logicFieldArgs, depFieldArgs ) {
		var inputName = buildLogicFieldInputName( logicFieldArgs, depFieldArgs );
		var logicFieldInputs = document.querySelectorAll( '[name^="' + inputName + '"]' );
		var selectedVals = [];

		// TODO: What about if it's read-only?

		if ( logicFieldInputs.length == 1 && logicFieldInputs[0].type != 'hidden' ) {
			selectedVals = jQuery( '[name^="' + inputName + '"]' ).val();
			if ( selectedVals === null ) {
				selectedVals = '';
			}
		} else {
			selectedVals = getValuesFromCheckboxInputs( logicFieldInputs );
		}

		return selectedVals;
	}

	/**
	 * Get the value from a Radio or Checkbox field trigger field
	 *
	 * @param {Object} logicFieldArgs
	 * @param {string} logicFieldArgs.inputType
	 * @param {Object} depFieldArgs
	 * @returns {String|Array}
     */
	function getValueFromRadioOrCheckbox( logicFieldArgs, depFieldArgs ) {
		var inputName = buildLogicFieldInputName( logicFieldArgs, depFieldArgs );

		var logicFieldInputs = document.querySelectorAll( 'input[name^="' + inputName + '"]' );

		var logicFieldValue;
		if ( logicFieldArgs.inputType == 'checkbox' ) {
			logicFieldValue = getValuesFromCheckboxInputs( logicFieldInputs );
		} else {
			logicFieldValue = getValueFromRadioInputs( logicFieldInputs );
		}

		return logicFieldValue;
	}

	/**
	 * Build a logic field's input name
	 * Does not include full name for checkbox, address, or multi-select fields
	 *
	 * @param {object} logicFieldArgs
	 * @param {boolean} logicFieldArgs.isRepeating
	 * @param {string} logicFieldArgs.fieldId
	 * @param {object} depFieldArgs
	 * @param {string} depFieldArgs.inEmbedForm
	 * @param {string} depFieldArgs.inSection
	 * @param {string} depFieldArgs.repeatRow
	 * @returns {string}
     */
	function buildLogicFieldInputName( logicFieldArgs, depFieldArgs ) {
		var inputName = '';

		if ( logicFieldArgs.isRepeating ) {
			// If the trigger field is repeating, the child must be repeating as well
			var sectionId = '';
			if ( depFieldArgs.inEmbedForm !== "0" ) {
				sectionId = depFieldArgs.inEmbedForm;
			} else {
				sectionId = depFieldArgs.inSection;
			}
			var rowId = depFieldArgs.repeatRow;
			inputName = 'item_meta[' + sectionId + '][' + rowId + '][' + logicFieldArgs.fieldId + ']';
		} else {
			inputName = 'item_meta[' + logicFieldArgs.fieldId + ']';
		}

		return inputName;
	}

	function getValuesFromCheckboxInputs( inputs ) {
		var checkedVals = [];

		for ( var i = 0, l=inputs.length; i<l; i++ ) {
			if ( inputs[i].type == 'hidden' || inputs[i].checked ) {
				checkedVals.push( inputs[i].value );
			}
		}

		if ( checkedVals.length === 0 ) {
			checkedVals = '';
		}

		return checkedVals;
	}

	function cleanFinalFieldValue( fieldValue ) {
		if ( typeof fieldValue === 'undefined' ) {
			fieldValue = '';
		} else if ( typeof fieldValue === 'string' ) {
			fieldValue = fieldValue.trim();
		}

		return fieldValue;
	}

	/**
	 * Check whether a particular conditional logic condition is true or false
	 *
	 * @param {Array} logicCondition
	 * @param {operator:string} logicCondition.operator
	 * @param {value:string} logicCondition.value
	 * @param {String|Array} fieldValue
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldType
	 * @param {Object} logicFieldArgs
	 * @param {fieldType:string} logicFieldArgs.fieldType
     * @returns {Boolean}
     */
	function getLogicConditionOutcome( logicCondition, fieldValue, depFieldArgs, logicFieldArgs ) {
		var outcome;

		if ( depFieldArgs.fieldType == 'data' && logicFieldArgs.fieldType == 'data' ) {
			// If dep field is Dynamic and logic field is Dynamic
			outcome = getDynamicFieldLogicOutcome( logicCondition, fieldValue, depFieldArgs );
		} else {
			outcome = operators(logicCondition.operator, logicCondition.value, fieldValue);
		}

		return outcome;
	}

	/**
	 * @param {Array} logicCondition
	 * @param {string} logicCondition.operator
	 * @param {string} logicCondition.value
	 * @param {string|Array} fieldValue
	 * @param {object} depFieldArgs
	 * @param {Array} depFieldArgs.dataLogic
	 * @returns {boolean}
     */
	function getDynamicFieldLogicOutcome( logicCondition, fieldValue, depFieldArgs ) {
		var outcome = false;
		if ( logicCondition.value === '' ) {
			// Logic: "Dynamic field is equal to/not equal to anything"

			if ( fieldValue === '' || ( fieldValue.length == 1 && fieldValue[0] === '' ) ) {
				outcome = false;
			} else {
				outcome = true;
			}
		} else {
			// Logic: "Dynamic field is equal to/not equal to specific option"
			outcome = operators( logicCondition.operator, logicCondition.value, fieldValue );
		}
		depFieldArgs.dataLogic = logicCondition;
		depFieldArgs.dataLogic.actualValue = fieldValue;

		return outcome;
	}

	function operators(op, a, b){
		a = prepareLogicValueForComparison( a );
		b = prepareEnteredValueForComparison( a, b );

		if ( typeof a === 'string' && a.indexOf('&quot;') != '-1' && operators(op, a.replace('&quot;', '"'), b) ) {
			return true;
		}

		var theOperators = {
			'==': function(c,d){ return c == d; },
			'!=': function(c,d){ return c != d; },
			'<': function(c,d){ return c > d; },
			'>': function(c,d){ return c < d; },
			'LIKE': function(c,d){
				if(!d){
					/* If no value, then assume no match */
					return false;
				}

				d = prepareValueForLikeComparison( d );
				c = prepareValueForLikeComparison( c );

				return d.indexOf( c ) != -1;
			},
			'not LIKE': function(c,d){
				if(!d){
					/* If no value, then assume no match */
					return true;
				}

				d = prepareValueForLikeComparison( d );
				c = prepareValueForLikeComparison( c );

				return d.indexOf( c ) == -1;
			}
		};
		return theOperators[op](a, b);
	}

	function prepareLogicValueForComparison( a ) {
		if ( String(a).search(/^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/) !== -1 ) {
			a = parseFloat(a);
		} else if ( typeof a === 'string' ) {
			a = a.trim();
		}

		return a;
	}

	function prepareEnteredValueForComparison( a, b ) {
		if ( typeof b === 'undefined' ) {
			b = '';
		}

		if ( jQuery.isArray(b) && jQuery.inArray( String(a), b) > -1 ) {
			b = a;
		}

		if ( typeof a === 'number' && typeof b === 'string' ) {
			b = parseFloat(b);
		}

		if ( typeof b === 'string' ) {
			b = b.trim();
		}

		return b;
	}


	function prepareValueForLikeComparison( val ) {
		if ( typeof val === 'string' ) {
			val = val.toLowerCase();
		} else if ( typeof val === 'number' ) {
			val = val.toString();
		}
		return val;
	}

	/**
	 *
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.containerId
	 * @param {string} depFieldArgs.fieldType
	 * @param logicOutcomes
     */
	function routeToHideOrShowField( depFieldArgs, logicOutcomes ) {
		var action = getHideOrShowAction( depFieldArgs, logicOutcomes );

		var onCurrentPage = isFieldDivOnPage( depFieldArgs.containerId );

		if ( action == 'show' ) {
			if ( depFieldArgs.fieldType == 'data' && depFieldArgs.hasOwnProperty('dataLogic') ) {
				// Only update dynamic field options/value if it is dependent on another Dynamic field
				updateDynamicField( depFieldArgs, onCurrentPage );
			} else {
				showFieldAndSetValue( depFieldArgs, onCurrentPage );
			}
		} else {
			hideFieldAndClearValue( depFieldArgs, onCurrentPage );
		}
	}

	function isFieldDivOnPage( containerId ) {
		var fieldDiv = document.getElementById( containerId );

		return fieldDiv !== null;
	}

	/**
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.anyAll
	 * @param {string} depFieldArgs.showHide
	 * @param {Array} logicOutcomes
	 * @returns {string}
     */
	function getHideOrShowAction( depFieldArgs, logicOutcomes ) {
		if ( depFieldArgs.anyAll == 'any' ) {
			// If any of the following match logic
			if ( logicOutcomes.indexOf( true ) > -1 ) {
				action = depFieldArgs.showHide;
			} else {
				action = reverseAction( depFieldArgs.showHide );
			}
		} else {
			// If all of the following match logic
			if ( logicOutcomes.indexOf( false ) > -1 ) {
				action = reverseAction( depFieldArgs.showHide );
			} else {
				action = depFieldArgs.showHide;
			}
		}

		return action;
	}

	function reverseAction( action ) {
		if ( action == 'show' ) {
			action = 'hide';
		} else {
			action = 'show';
		}
		return action;
	}

	/**
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.containerId
	 * @param {string} depFieldArgs.formId
	 * @param {bool} onCurrentPage
     */
	function showFieldAndSetValue( depFieldArgs, onCurrentPage ){
		if ( isFieldCurrentlyShown( depFieldArgs.containerId, depFieldArgs.formId ) ) {
			return;
		}

		removeFromHideFields(depFieldArgs.containerId, depFieldArgs.formId);
		if ( onCurrentPage ) {
			// Set value, then show field
			setValuesInsideFieldOnPage(depFieldArgs.containerId, depFieldArgs);
			showFieldContainer(depFieldArgs.containerId);
		} else {
			setValuesInsideFieldAcrossPage( depFieldArgs );
		}
	}

	/**
	 * Set the value for all inputs inside of a field div on the current page
	 *
	 * @param {string} container
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldType
	 * @param {string} depFieldArgs.formId
 	 */
	function setValuesInsideFieldOnPage( container, depFieldArgs ) {
		var inputs = getInputsInFieldOnPage( container );
		var inContainer = ( depFieldArgs.fieldType == 'divider' || depFieldArgs.fieldType == 'form' );

		setValueForInputs( inputs, inContainer, depFieldArgs.formId );
	}

	/**
	 * Set the value for all inputs inside of a field across a page
	 *
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldType
	 * @param {string} depFieldArgs.formId
	 */
	function setValuesInsideFieldAcrossPage( depFieldArgs ) {
		var inputs = getInputsInFieldAcrossPage( depFieldArgs );
		var inContainer = ( depFieldArgs.fieldType == 'divider' || depFieldArgs.fieldType == 'form' );

		setValueForInputs( inputs, inContainer, depFieldArgs.formId );
	}

	function getInputsInFieldOnPage( containerId ) {
		var container = document.getElementById( containerId );
		return container.querySelectorAll('select[name^="item_meta"], textarea[name^="item_meta"], input[name^="item_meta"]');
	}

	/**
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldType
	 * @returns {Array}
     */
	function getInputsInFieldAcrossPage( depFieldArgs ){
		var inputs = [];

		if ( depFieldArgs.fieldType == 'divider' ) {
			inputs = getInputsInHiddenSection(depFieldArgs);
		} else if ( depFieldArgs.fieldType == 'form' ) {
			inputs = getInputsInHiddenEmbeddedForm(depFieldArgs);
		} else {
			inputs = getHiddenInputs( depFieldArgs );
		}

		return inputs;
	}

	/**
	 * Get the inputs for a non-repeating field that is type=hidden
	 * @param {object} depFieldArgs
	 * @param {bool} depFieldArgs.isRepeating
	 * @param {string} depFieldArgs.inSection
	 * @param {string} depFieldArgs.repeatRow
	 * @param {string} depFieldArgs.fieldId
	 * @returns {NodeList}
     */
	function getHiddenInputs( depFieldArgs ) {
		var name = '';
		if ( depFieldArgs.isRepeating ) {
			//item_meta[section-id][row-id][field-id]
			name = 'item_meta[' + depFieldArgs.inSection +'][' + depFieldArgs.repeatRow + '][' + depFieldArgs.fieldId + ']';
		} else {
			// item_meta[field-id]
			name = 'item_meta[' + depFieldArgs.fieldId + ']';
		}
		return document.querySelectorAll( '[name^="' + name + '"]' );
	}

	function setValueForInputs( inputs, inContainer, formId ) {
		if ( inputs.length ) {

			var prevInput;
			var typeArray = ['checkbox','radio'];
			for ( var i = 0; i < inputs.length; i++ ) {
				// Don't loop through every input in a radio/checkbox field
				// TODO: Improve this for checkboxes and address fields
				if ( i > 0 && typeof prevInput !== 'undefined' && prevInput.name == inputs[i].name && typeArray.indexOf( prevInput.type ) > -1 ) {
					continue;
				}

				// Don't set the value if the field is in a section and it's conditionally hidden
				if ( inContainer && isChildInputConditionallyHidden( inputs[i], formId ) ) {
					continue;
				}

				setDefaultValue( inputs[i] );
				maybeSetWatchingFieldValue( inputs[i] );
				maybeDoCalcForSingleField( inputs[i] );

				prevInput = inputs[i];
			}
		}
	}

	// Check if a field input inside of a section or embedded form is conditionally hidden
	function isChildInputConditionallyHidden( input, formId ) {
		var fieldDivPart = getFieldId( input, true );
		var fieldDivId = 'frm_field_' + fieldDivPart + '_container';

		return isFieldConditionallyHidden( fieldDivId, formId );
	}

	function showFieldContainer( containerId ) {
		jQuery( '#' + containerId ).show();
	}

	/**
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.containerId
	 * @param {string} depFieldArgs.formId
	 * @param onCurrentPage
     */
	function hideFieldAndClearValue( depFieldArgs, onCurrentPage ){
		if ( isFieldConditionallyHidden( depFieldArgs.containerId, depFieldArgs.formId ) ) {
			return;
		}

		if ( onCurrentPage ) {
			hideFieldContainer( depFieldArgs.containerId );
			clearInputsInFieldOnPage( depFieldArgs.containerId );
		} else {
			clearInputsInFieldAcrossPage( depFieldArgs );
		}

		addToHideFields( depFieldArgs.containerId, depFieldArgs.formId );
	}

	function hideFieldContainer( containerId ) {
		jQuery( '#' + containerId ).hide();
	}

	function clearInputsInFieldOnPage( containerId ) {
		var inputs = getInputsInFieldOnPage( containerId );
		clearValueForInputs( inputs );
	}

	function clearInputsInFieldAcrossPage( depFieldArgs ) {
		var inputs = getInputsInFieldAcrossPage( depFieldArgs );
		clearValueForInputs(inputs);
	}

	/**
	 * Get all the child inputs in a hidden section (across a page)
	 *
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldType
	 * @param {string} depFieldArgs.fieldId
 	 */
	function getInputsInHiddenSection( depFieldArgs ) {
		// If a section, get all inputs with data attribute
		var inputs = [];
		if ( depFieldArgs.fieldType == 'divider' ) {
			inputs = document.querySelectorAll( '[data-sectionid="' + depFieldArgs.fieldId + '"]' );
		}

		return inputs;
	}

	// Get all the child inputs in a hidden embedded form (across a page)
	function getInputsInHiddenEmbeddedForm( depFieldArgs ) {
		// TODO: maybe remove form and [0]?
		// TODO: what if someone is using embeddedformfieldkey-moretext as their field key? Add data attribute for this
		return document.querySelectorAll( '[id^="field_' + depFieldArgs.fieldKey + '-"]' );
	}

	function clearValueForInputs( inputs ) {
		if ( inputs.length < 1 ){
			return;
		}

		var prevInput;
		var valueChanged = true;
		for ( var i= 0, l=inputs.length; i<l; i++ ){
			if ( i>0 && prevInput.name != inputs[i].name && valueChanged === true ) {
				// Only trigger a change after all inputs in a field are cleared
				triggerChange( jQuery(prevInput) );
			}

			valueChanged = true;

			if ( inputs[i].type == 'radio' || inputs[i].type == 'checkbox' ) {
				inputs[i].checked = false;
			} else if ( inputs[i].tagName == 'SELECT' ) {
				if ( inputs[i].selectedIndex === 0 ) {
					valueChanged = false;
				} else {
					inputs[i].selectedIndex = 0;
				}

				var autocomplete = document.getElementById( inputs[i].id + '_chosen' );
				if ( autocomplete !== null ) {
					jQuery(inputs[i]).trigger('chosen:updated');
				}
			} else {
				inputs[i].value = '';
			}

			prevInput = inputs[i];
		}

		// trigger a change for the final input in the loop
		if ( valueChanged === true ) {
			triggerChange(jQuery(prevInput));
		}
	}

	function isFieldCurrentlyShown( containerId, formId ){
		return isFieldConditionallyHidden( containerId, formId ) === false;
	}

	function isFieldConditionallyHidden( containerId, formId ) {
		var hidden = false;

		var hiddenFields = getHiddenFields( formId );

		if ( hiddenFields.indexOf( containerId ) > -1 ) {
			hidden = true;
		}

		return hidden;
	}

	function clearHideFields() {
		var hideFieldInputs = document.querySelectorAll( '[id^="frm_hide_fields_"]' );
		clearValueForInputs( hideFieldInputs );
	}

	function addToHideFields( htmlFieldId, formId ) {//TODO: why is this run on submit?
		// Get all currently hidden fields
		var hiddenFields = getHiddenFields( formId );

		if ( hiddenFields.indexOf( htmlFieldId ) > -1 ) {
			// If field id is already in the array, move on

		} else {
			// Add new conditionally hidden field to array
			hiddenFields.push( htmlFieldId );

			// Set the hiddenFields value in the frm_hide_field_formID input
			hiddenFields = JSON.stringify( hiddenFields );
			var frmHideFieldsInput = document.getElementById('frm_hide_fields_' + formId);
			if ( frmHideFieldsInput !== null ) {
				frmHideFieldsInput.value = hiddenFields;
			}
		}
	}

	function getAllHiddenFields() {
		var hiddenFields = [];
		var hideFieldInputs = document.querySelectorAll('*[id^="frm_hide_fields_"]');
		var formTotal = hideFieldInputs.length;
		var formId;
		for ( var i=0; i<formTotal; i++ ) {
			formId = hideFieldInputs[ i].id.replace( 'frm_hide_fields_', '' );
			hiddenFields = hiddenFields.concat( getHiddenFields( formId ) );
		}

		return hiddenFields;
	}

	function getHiddenFields( formId ) {
		var hiddenFields = [];

		// Fetch the hidden fields from the frm_hide_fields_formId input
		var frmHideFieldsInput = document.getElementById('frm_hide_fields_' + formId);
		if ( frmHideFieldsInput === null ) {
			return hiddenFields;
		}

		hiddenFields = frmHideFieldsInput.value;
		if ( hiddenFields ) {
			hiddenFields = JSON.parse( hiddenFields );
		} else {
			hiddenFields = [];
		}

		return hiddenFields;
	}

	function setDefaultValue( input ) {
		var $input = jQuery( input );
		var defaultValue = $input.data('frmval');

		if ( typeof defaultValue !== 'undefined' ) {

			if ( input.type == 'checkbox' || input.type == 'radio' ) {
				setCheckboxOrRadioDefaultValue( input.name, defaultValue );

			} else if ( input.name.indexOf( '[]' ) > -1 ) {
				// TODO: fix this for checkboxes, address, and multi-select fields
				setHiddenCheckboxDefaultValue( input.name, defaultValue );

			} else {
				if ( defaultValue.constructor === Object ) {
					var addressType = input.getAttribute('name').split('[').slice(-1)[0];
					if ( addressType !== null ) {
						addressType = addressType.replace(']', '');
						defaultValue = defaultValue[addressType];
						if ( typeof defaultValue == 'undefined' ) {
							defaultValue = '';
						}
					}
				}

				input.value = defaultValue;
			}

			if ( input.tagName == 'SELECT' ) {
				maybeUpdateChosenOptions( input );
			}

			triggerChange( $input );
		}
	}

	function setCheckboxOrRadioDefaultValue( inputName, defaultValue ) {
		// Get all checkbox/radio inputs for this field
		var radioInputs = document.getElementsByName( inputName );

		// Loop through options and set the default value
		for ( var i = 0, l = radioInputs.length; i < l; i++ ) {
			if ( radioInputs[i].type == 'hidden' ) {
				// If field is read-only and there is a hidden input
				if ( jQuery.isArray(defaultValue) && defaultValue[i] !== null ) {
					radioInputs[i].value = defaultValue[i];
				} else {
					radioInputs[i].value = defaultValue;
				}
			} else if (radioInputs[i].value == defaultValue ||
				( jQuery.isArray(defaultValue) && defaultValue.indexOf( radioInputs[i].value ) > -1 ) ) {
				// If input's value matches the default value, set checked to true

				radioInputs[i].checked = true;
				if ( radioInputs[i].type == 'radio') {
					break;
				}
			}
		}
	}

	// Set the default value for hidden checkbox or multi-select dropdown fields
	function setHiddenCheckboxDefaultValue( inputName, defaultValue ){
		// Get all the hidden inputs with the same name
		var hiddenInputs = document.getElementsByName( inputName );

		if ( jQuery.isArray(defaultValue) ) {
			for ( var i = 0, l = defaultValue.length; i < l; i++ ) {
				if ( i in hiddenInputs ) {
					hiddenInputs[i].value = defaultValue[i];
				} else {
					// TODO: accommodate for when there are multiple default values but the user has removed some
				}
			}
		} else if ( hiddenInputs[0] !== null ) {
			hiddenInputs[0].value = defaultValue;
		}
	}

	function removeFromHideFields( htmlFieldId, formId ) {
		// Get all currently hidden fields
		var hiddenFields = getHiddenFields( formId );

		// If field id is in the array, delete it
		var item_index = hiddenFields.indexOf( htmlFieldId );
		if ( item_index > -1 ) {
			// Remove field from the hiddenFields array
			hiddenFields.splice(item_index, 1);

			// Update frm_hide_fields_formId input
			hiddenFields = JSON.stringify( hiddenFields );
			var frmHideFieldsInput = document.getElementById('frm_hide_fields_' + formId);
			frmHideFieldsInput.value = hiddenFields;
		}
	}

	/*****************************************************
	 * Lookup Field Functions
	 ******************************************************/

	/**
	 * Check all fields that are "watching" a lookup field that changed
 	 */
	function checkFieldsWatchingLookup(field_id, changedInput, originalEvent ) {
		if ( typeof __FRMLOOKUP  === 'undefined' ||
			typeof __FRMLOOKUP[field_id] === 'undefined' ||
			__FRMLOOKUP[field_id].dependents.length < 1 ||
			changedInput === null ||
			typeof(changedInput) === 'undefined'
		) {
			return;
		}

		var triggerFieldArgs = __FRMLOOKUP[field_id];

		var parentRepeatArgs = getRepeatArgsFromFieldName( changedInput[0].name );

		for ( var i = 0, l = triggerFieldArgs.dependents.length; i < l; i++ ) {
			updateWatchingFieldById( triggerFieldArgs.dependents[ i ], parentRepeatArgs, originalEvent );
		}
	}

	/**
	 * Update all instances of a "watching" field
	 *
	 * @since 2.01.0
	 * @param {string} field_id
	 * @param {Object} parentRepeatArgs
	 * @param {string} originalEvent
     */
	function updateWatchingFieldById(field_id, parentRepeatArgs, originalEvent ) {
		var childFieldArgs = getLookupArgsForSingleField( field_id );

		// If lookup field has no parents, no need to update this field
		if ( childFieldArgs === false || childFieldArgs.parents.length < 1 ) {
			return;
		}

		if ( childFieldArgs.fieldType == 'lookup' ) {
			updateLookupFieldOptions( childFieldArgs, parentRepeatArgs );
		} else {
			// If the original event was NOT triggered from a direct value change to the Lookup field,
			// do not update the text field value
			if ( originalEvent === 'value changed' ) {
				updateWatchingFieldValue( childFieldArgs, parentRepeatArgs );
			}
		}
	}

	function updateLookupFieldOptions( childFieldArgs, parentRepeatArgs ) {
		var childFieldElements = [];
		if ( parentRepeatArgs.repeatRow !== '' ) {
			childFieldElements = getRepeatingFieldDivOnCurrentPage( childFieldArgs, parentRepeatArgs );
		} else {
			childFieldElements = getAllFieldDivsOnCurrentPage(childFieldArgs);
		}

		for ( var i = 0, l=childFieldElements.length; i<l; i++ ) {
			addRepeatRow( childFieldArgs, childFieldElements[i].id );
			updateSingleLookupField( childFieldArgs, childFieldElements[i] );
		}
	}

	/**
	 * Get the div for a repeating field on the current page
	 * @param {Object} childFieldArgs
	 * @param {string} childFieldArgs.fieldId
	 * @param {Object} parentRepeatArgs
	 * @param {string} parentRepeatArgs.repeatingSection
	 * @param {string} parentRepeatArgs.repeatRow
	 * @returns {Array}
     */
	function getRepeatingFieldDivOnCurrentPage( childFieldArgs, parentRepeatArgs ) {
		var childFieldDivs = [];

		var selector = 'frm_field_' + childFieldArgs.fieldId + '-';
		selector += parentRepeatArgs.repeatingSection + '-' + parentRepeatArgs.repeatRow + '_container';
		var container = document.getElementById( selector );
		if ( container !== null ) {
			childFieldDivs.push( container );
		}

		return childFieldDivs;
	}

	function updateWatchingFieldValue( childFieldArgs, parentRepeatArgs ) {
		var childFieldElements = getAllTextFieldInputs( childFieldArgs, parentRepeatArgs );

		for ( var i = 0, l=childFieldElements.length; i<l; i++ ) {
			addRepeatRowForInput( childFieldElements[i].name, childFieldArgs );
			updateSingleWatchingField( childFieldArgs, childFieldElements[i] );
		}
	}

	/**
	 * Get the Lookup Args for a field ID
	 *
	 * @param {string} field_id
	 * @return {boolean|Object}
     */
	function getLookupArgsForSingleField( field_id ) {
		if ( typeof __FRMLOOKUP  === 'undefined' || typeof __FRMLOOKUP[field_id] === 'undefined' ) {
			return false;
		}

		return __FRMLOOKUP[field_id];
	}

	/**
	 * Update a single Lookup field
	 *
	 * @since 2.01.0
	 * @param {Object} childFieldArgs
	 * @param {string} childFieldArgs.inputType
	 * @param {object} childElement
     */
	function updateSingleLookupField( childFieldArgs, childElement ) {
		childFieldArgs.parentVals = getParentLookupFieldVals( childFieldArgs );

		if ( childFieldArgs.inputType == 'select' ) {
			maybeReplaceSelectLookupFieldOptions( childFieldArgs, childElement );
		} else if ( childFieldArgs.inputType == 'radio' || childFieldArgs.inputType == 'checkbox' ) {
			maybeReplaceCbRadioLookupOptions( childFieldArgs, childElement );
		}
	}

	/**
	 * Update a standard field that is "watching" a Lookup
	 *
	 * @since 2.01.0
	 * @param {Object} childFieldArgs
	 * @param {object} childElement
	 */
	function updateSingleWatchingField( childFieldArgs, childElement ) {
		childFieldArgs.parentVals = getParentLookupFieldVals( childFieldArgs );

		maybeInsertValueInFieldWatchingLookup( childFieldArgs, childElement );
	}

	/**
	 * Get all the occurences of a specific Text field
	 *
	 * @since 2.01.0
	 * @param {Object} childFieldArgs
	 * @param {boolean} childFieldArgs.isRepeating
	 * @param {string} childFieldArgs.fieldKey
	 * @param {Object} parentRepeatArgs
	 * @param {string} parentRepeatArgs.repeatingSection
	 * @param {string} parentRepeatArgs.repeatRow
	 * @return {NodeList}
 	 */
	function getAllTextFieldInputs( childFieldArgs, parentRepeatArgs ) {
		var selector = 'field_' + childFieldArgs.fieldKey;
		if ( childFieldArgs.isRepeating ) {
			if ( parentRepeatArgs.repeatingSection !== '' ) {
				// If trigger field is repeating/embedded, use its section row in selector
				selector = '[id="' + selector + '-' + parentRepeatArgs.repeatRow + '"]';
			} else {
				// If trigger field is not repeating/embedded, get all repeating field inputs
				selector = '[id^="' + selector + '-"]';
			}
		} else {
			selector = '[id="' + selector + '"]';
		}

		return document.querySelectorAll( selector );
	}

	// Set the value in a regular field that is watching a lookup field when it is conditionally shown
	function maybeSetWatchingFieldValue( input ) {
		var fieldId = getFieldId( input, false );

		var childFieldArgs = getLookupArgsForSingleField( fieldId );

		// If lookup field has no parents, no need to update this field
		if ( childFieldArgs === false || childFieldArgs.fieldType == 'lookup' ) {
			return;
		}

		updateSingleWatchingField( childFieldArgs, input, 'value changed' );
	}

	/**
	 * Get all divs on the current page for a given field
	 *
	 * @since 2.01.0
	 * @param {Object} childFieldArgs
	 * @param {boolean} childFieldArgs.isRepeating
	 * @param {string} childFieldArgs.fieldId
	 * @returns {Array}
     */
	function getAllFieldDivsOnCurrentPage( childFieldArgs ) {
		var childFieldDivs = [];

		if ( childFieldArgs.isRepeating ) {
			childFieldDivs = document.querySelectorAll( '.frm_field_' + childFieldArgs.fieldId + '_container' );
		} else {
			var container = document.getElementById( 'frm_field_' + childFieldArgs.fieldId + '_container' );
			if ( container !== null ) {
				childFieldDivs.push( container );
			}
		}

		return childFieldDivs;
	}

	// Get the field values from all parents
	function getParentLookupFieldVals( childFieldArgs ) {
		var parentVals = [];
		var parentIds = childFieldArgs.parents;

		var parentFieldArgs, currentParentId;
		var parentValue = false;
		for ( var i = 0, l = parentIds.length; i < l; i++ ) {
			parentFieldArgs = getLookupArgsForSingleField( parentIds[i] );
			parentValue = getFieldValue( parentFieldArgs, childFieldArgs );

			// If any parents have blank values, don't waste time looking for values
			if ( parentValue === '' || parentValue === false ) {
				parentVals = false;
				break;
			}

			parentVals[i] = parentValue;
		}

		return parentVals;
	}

	// Get the value from array of radio inputs (could be type="hidden" or type="radio")
	function getValueFromRadioInputs( radioInputs ) {
		var radioValue = false;

		var l = radioInputs.length;
		for ( var i = 0; i<l; i++ ) {
			if ( radioInputs[i].type == 'hidden' || radioInputs[i].checked ) {
				radioValue = radioInputs[i].value;
				break;
			}
		}

		return radioValue;
	}

	/**
	 * Maybe replace the options in a Select Lookup field
	 *
	 * @since 2.01.0
	 * @param {Object} childFieldArgs
	 * @param {Array} childFieldArgs.parents
	 * @param {Array} childFieldArgs.parentVals
	 * @param {string} childFieldArgs.fieldId
	 * @param {string} childFieldArgs.fieldKey
	 * @param {object} childDiv
	 */
	function maybeReplaceSelectLookupFieldOptions( childFieldArgs, childDiv ) {
		// Get select within childDiv
		var childSelect = childDiv.getElementsByTagName( 'SELECT' )[0];
		if ( childSelect === null ) {
			return;
		}

		var currentValue = childSelect.value;

		if ( childFieldArgs.parentVals === false  ) {
			// If any parents have blank values, don't waste time looking for values
			childSelect.options.length = 1;

			if ( currentValue !== '' ) {
				childSelect.value = '';
				maybeUpdateChosenOptions(childSelect);
				triggerChange(jQuery(childSelect), childFieldArgs.fieldKey);
			}
		} else {
			addLoadingTextToLookup( childSelect );

			// If all parents have values, check for updated options
			jQuery.ajax({
				type:'POST',
				url:frm_js.ajax_url,
				data:{
					action:'frm_replace_lookup_field_options',
					parent_fields:childFieldArgs.parents,
					parent_vals:childFieldArgs.parentVals,
					field_id:childFieldArgs.fieldId,
					nonce:frm_js.nonce
				},
				success:function(newOptions){
					replaceSelectLookupFieldOptions( childFieldArgs.fieldKey, childSelect, newOptions );
				}
			});
		}
	}

	// Update chosen options if autocomplete is enabled
	function maybeUpdateChosenOptions( childSelect ) {
		if ( childSelect.className.indexOf( 'frm_chzn' ) > -1 && jQuery().chosen ) {
			jQuery( childSelect ).trigger('chosen:updated');
		}
	}

	function addLoadingTextToLookup( childSelect ) {
		if ( ! childSelect.value ) {
			childSelect.options.length = 1;
			childSelect.options[1] = new Option(frm_js.loading, '', false, false);
		}
	}

	/**
	 * Replace the options in a Select Lookup field
	 *
	 * @since 2.01.0
	 * @param {string} fieldKey
	 * @param {object} childSelect
	 * @param {Array} newOptions
	 */
	function replaceSelectLookupFieldOptions( fieldKey, childSelect, newOptions ) {
		var origVal = childSelect.value;

		newOptions = JSON.parse( newOptions );

		// Remove old options
		for ( var i = childSelect.options.length; i>0; i-- ) {
			childSelect.remove(i);
		}

		// Add new options
		var optsLength = newOptions.length;
		for ( i = 0; i<optsLength; i++ ) {
			childSelect.options[i+1]=new Option(newOptions[i], newOptions[i], false, false);
		}

		setSelectLookupVal( childSelect, origVal );

		maybeUpdateChosenOptions( childSelect );

		// Trigger a change if the new value is different from the old value
		if ( childSelect.value != origVal ) {
			triggerChange( jQuery(childSelect), fieldKey );
		}
	}

	// Set the value in a refreshed Lookup Field
	function setSelectLookupVal( childSelect, origVal ) {
		// Try setting the dropdown to the original value
		childSelect.value = origVal;
		if ( childSelect.value === '' ) {
			// If the original value is no longer present, try setting to default value
			var defaultValue = childSelect.getAttribute('data-frmval');
			if ( defaultValue !== null ) {
				childSelect.value = defaultValue;
			}
		}
	}

	/**
	 * Either hide checkbox/radio Lookup field or update its options
	 *
	 * @since 2.01.01
	 * @param {Object} childFieldArgs
	 * @param {object} childDiv
     */
	function maybeReplaceCbRadioLookupOptions( childFieldArgs, childDiv ) {
		if ( childFieldArgs.parentVals === false  ) {
			// If any parents have blank values, don't waste time looking for values

			var inputs = childDiv.getElementsByTagName( 'input' );
			maybeHideRadioLookup( childFieldArgs, childDiv );
			clearValueForInputs( inputs);

		} else {
			replaceCbRadioLookupOptions( childFieldArgs, childDiv );
		}
	}

	/**
	 * Update the options in a checkbox/radio lookup field
	 *
	 * @since 2.01.01
	 * @param {Object} childFieldArgs
	 * @param {string} childFieldArgs.inputType
	 * @param {Array} childFieldArgs.parents
	 * @param {Array} childFieldArgs.parentVals
	 * @param {string} childFieldArgs.fieldId
	 * @param {string} childFieldArgs.repeatRow
	 * @param {string} childFieldArgs.fieldKey
	 * @param {object} childDiv
     */
	function replaceCbRadioLookupOptions( childFieldArgs, childDiv ) {
		var optContainer = childDiv.getElementsByClassName( 'frm_opt_container' )[0];
		var inputs = optContainer.getElementsByTagName( 'input' );

		addLoadingIconJS( childDiv, optContainer );

		var currentValue = '';
		if ( childFieldArgs.inputType == 'radio' ) {
			currentValue = getValueFromRadioInputs( inputs );
		} else {
			currentValue = getValuesFromCheckboxInputs(inputs);
		}

		jQuery.ajax({
			type:'POST',
			url:frm_js.ajax_url,
			data:{
				action:'frm_replace_cb_radio_lookup_options',
				parent_fields:childFieldArgs.parents,
				parent_vals:childFieldArgs.parentVals,
				field_id:childFieldArgs.fieldId,
				row_index:childFieldArgs.repeatRow,
				current_value:currentValue,
				nonce:frm_js.nonce
			},
			success:function(newHtml){
				optContainer.innerHTML = newHtml;

				removeLoadingIconJS( childDiv, optContainer );

				if ( inputs.length == 1 && inputs[0].value === '' ) {
					maybeHideRadioLookup( childFieldArgs, childDiv );
				} else {
					maybeShowRadioLookup( childFieldArgs, childDiv );
				}

				triggerChange( jQuery( inputs[0] ), childFieldArgs.fieldKey );
			}
		});
	}

	/**
	 * Hide a Radio Lookup field if it doesn't have any options
	 *
	 * @since 2.01.01
	 * @param {Object} childFieldArgs
	 * @param {string} childFieldArgs.formId
	 * @param {object} childDiv
	 */
	function maybeHideRadioLookup( childFieldArgs, childDiv ) {
		if ( isFieldConditionallyHidden( childDiv.id, childFieldArgs.formId ) ) {
			return;
		}

		hideFieldContainer( childDiv.id );
		addToHideFields( childDiv.id, childFieldArgs.formId );
	}

	/**
	 * Show a radio Lookup field if it has options and conditional logic says it should be shown
	 *
	 * @since 2.01.01
	 * @param {Object} childFieldArgs
	 * @param {string} childFieldArgs.formId
	 * @param {string} childFieldArgs.fieldId
	 * @param {string} childFieldArgs.repeatRow
	 * @param {object} childDiv
	 */
	function maybeShowRadioLookup( childFieldArgs, childDiv ) {
		if ( isFieldCurrentlyShown( childDiv.id, childFieldArgs.formId ) ) {
			return;
		}

		var logicArgs = getRulesForSingleField( childFieldArgs.fieldId );
		if ( logicArgs === false || logicArgs.conditions.length < 1 ) {
			removeFromHideFields( childDiv.id, childFieldArgs.formId);
			showFieldContainer( childDiv.id );
		} else {
			logicArgs.containerId = childDiv.id;
			logicArgs.repeatRow = childFieldArgs.repeatRow;
			hideOrShowSingleField( logicArgs );
		}
	}

	/**
	 * Get new value for a text field if all Lookup Field parents have a value
	 *
	 * @since 2.01.0
	 * @param {Object} childFieldArgs
	 * @param {string} childFieldArgs.formId
	 * @param {Array} childFieldArgs.parents
	 * @param {Array} childFieldArgs.parentVals
	 * @param {string} childFieldArgs.fieldKey
	 * @param {string} childFieldArgs.fieldId
	 * @param {object} childInput
     */
	function maybeInsertValueInFieldWatchingLookup( childFieldArgs, childInput ) {
		if ( isChildInputConditionallyHidden( childInput, childFieldArgs.formId ) ) {
			// TODO: What if field is in conditionally hidden section?
			return;
		}

		if ( childFieldArgs.parentVals === false  ) {
			// If any parents have blank values, set the field value to the default value
			var newValue = childInput.getAttribute('data-frmval');
			if ( newValue === null ) {
				newValue = '';
			}
			insertValueInFieldWatchingLookup( childFieldArgs, childInput, newValue );
		} else {
			// If all parents have values, check for a new value
			jQuery.ajax({
				type:'POST',
				url:frm_js.ajax_url,
				data:{
					action:'frm_get_lookup_text_value',
					parent_fields:childFieldArgs.parents,
					parent_vals:childFieldArgs.parentVals,
					field_id:childFieldArgs.fieldId,
					nonce:frm_js.nonce
				},
				success:function(newValue){
					if ( childInput.value != newValue ) {
						insertValueInFieldWatchingLookup( childFieldArgs.fieldKey, childInput, newValue );
					}
				}
			});
		}
	}

	/**
	 * Insert a new text field Lookup value
	 *
	 * @since 2.01.0
	 * @param {string} fieldKey
	 * @param {object} childInput
	 * @param {string} newValue
 	 */
	function insertValueInFieldWatchingLookup( fieldKey, childInput, newValue ) {
		childInput.value = newValue;
		triggerChange( jQuery( childInput ), fieldKey );
	}

	/**
	 * Add the repeat Row to the child field args
	 *
	 * @since 2.01.0
	 * @param {string} fieldName
	 * @param {Object} childFieldArgs
     */
	function addRepeatRowForInput( fieldName, childFieldArgs ) {
		var repeatArgs = getRepeatArgsFromFieldName( fieldName );

		if ( repeatArgs.repeatRow !== '' ) {
			childFieldArgs.repeatRow = repeatArgs.repeatRow;
		} else {
			childFieldArgs.repeatRow = '';
		}
	}

	/*******************************************************
	 Dynamic Field Functions
	 *******************************************************/

	// Update a Dynamic field's data or options
	function updateDynamicField( depFieldArgs, onCurrentPage ) {
		var depFieldArgsCopy = cloneObjectForDynamicFields( depFieldArgs );

		if ( depFieldArgsCopy.inputType == 'data' ) {
			updateDynamicListData( depFieldArgsCopy, onCurrentPage );
		} else {
			// Only update the options if field is on the current page
			if ( onCurrentPage ) {
				updateDynamicFieldOptions( depFieldArgsCopy );
			}
		}
	}

	/**
	 * Clone the depFieldArgs object for use in ajax requests
	 *
	 * @since 2.01.0
	 * @param {Object} depFieldArgs
	 * @param {string|Array} depFieldArgs.dataLogic.actualValue
	 * @param {string} depFieldArgs.fieldId
	 * @param {string} depFieldArgs.fieldKey
	 * @param {string} depFieldArgs.formId
	 * @param {string} depFieldArgs.containerId
	 * @param {string} depFieldArgs.repeatRow
	 * @param {string} depFieldArgs.inputType
	 * @return {Object} dynamicFieldArgs
	 */
	function cloneObjectForDynamicFields( depFieldArgs ){
		var dataLogic = {
			actualValue:depFieldArgs.dataLogic.actualValue,
			fieldId:depFieldArgs.dataLogic.fieldId
		};

		var dynamicFieldArgs = {
			fieldId:depFieldArgs.fieldId,
			fieldKey:depFieldArgs.fieldKey,
			formId:depFieldArgs.formId,
			containerId:depFieldArgs.containerId,
			repeatRow:depFieldArgs.repeatRow,
			dataLogic:dataLogic,
			children:'',
			inputType:depFieldArgs.inputType
		};

		return dynamicFieldArgs;
	}

	/**
	 * Update a Dynamic List field
	 *
	 * @since 2.01
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.containerId
	 * @param {string|Array} depFieldArgs.dataLogic.actualValue
	 * @param {string} depFieldArgs.fieldId
 	 */
	function updateDynamicListData( depFieldArgs, onCurrentPage ){
		if ( onCurrentPage ) {
			var $fieldDiv = jQuery( '#' + depFieldArgs.containerId);
			addLoadingIcon( $fieldDiv );
		}

		jQuery.ajax({
			type:'POST',url:frm_js.ajax_url,
			data:{
				action:'frm_fields_ajax_get_data',
				entry_id:depFieldArgs.dataLogic.actualValue,
				current_field:depFieldArgs.fieldId,
				hide_id:depFieldArgs.containerId,
				nonce:frm_js.nonce
			},
			success:function(html){
				if ( onCurrentPage ) {
					var $optContainer = $fieldDiv.find('.frm_opt_container');
					$optContainer.html(html);
					var $listInputs = $optContainer.children('input');
					var listVal = $listInputs.val();

					removeLoadingIcon( $optContainer );

					if (html === '' || listVal === '') {
						hideDynamicField(depFieldArgs);
					} else {
						showDynamicField( depFieldArgs, $fieldDiv, $listInputs, true );
					}
				} else {
					updateHiddenDynamicListField( depFieldArgs, html );
				}
			}
		});
	}

	/**
	 * Update a Dynamic dropdown, radio, or checkbox options
	 *
	 * @since 2.01
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.containerId
	 * @param {string} depFieldArgs.dataLogic.fieldId
	 * @param {string|Array} depFieldArgs.dataLogic.actualValue
	 * @param {string} depFieldArgs.fieldId
	 */
	function updateDynamicFieldOptions( depFieldArgs, fieldElement ){
		var $fieldDiv = jQuery( '#' + depFieldArgs.containerId );

		var $fieldInputs = $fieldDiv.find( 'select[name^="item_meta"], input[name^="item_meta"]' );
		var prevValue = getFieldValueFromInputs( $fieldInputs );
		var defaultVal = $fieldInputs.data('frmval');

		addLoadingIcon( $fieldDiv );

		jQuery.ajax({
			type:'POST',
			url:frm_js.ajax_url,
			data:{
				action:'frm_fields_ajax_data_options',
				trigger_field_id:depFieldArgs.dataLogic.fieldId,
				entry_id:depFieldArgs.dataLogic.actualValue,
				field_id:depFieldArgs.fieldId,
				default_value:defaultVal,
				container_id:depFieldArgs.containerId,
				prev_val:prevValue,
				nonce:frm_js.nonce
			},
			success:function(html){
				var $optContainer = $fieldDiv.find('.frm_opt_container');
				$optContainer.html(html);
				var $dynamicFieldInputs = $optContainer.find( 'select, input[type="checkbox"], input[type="radio"]' );

				removeLoadingIcon( $optContainer );

				if ( html === '' || $dynamicFieldInputs.length < 1 ) {
					hideDynamicField( depFieldArgs );
				} else {
					var valueChanged = dynamicFieldValueChanged( depFieldArgs, $dynamicFieldInputs, prevValue );
					showDynamicField( depFieldArgs, $fieldDiv, $dynamicFieldInputs, valueChanged );
				}
			}
		});

	}

	function dynamicFieldValueChanged( depFieldArgs, $dynamicFieldInputs, prevValue ) {
		var newValue = getFieldValueFromInputs( $dynamicFieldInputs );
		return ( prevValue !== newValue );
	}

	/**
	 * Update the value in a hidden Dynamic List field
	 *
	 * @since 2.01.01
	 * @param {Object} depFieldArgs
	 * @param {string} depFieldArgs.fieldKey
	 * @param {string} depFieldArgs.repeatRow
	 * @param {string} depFieldArgs.containerId
	 * @param {string} depFieldArgs.formId
     */
	function updateHiddenDynamicListField( depFieldArgs, newValue ) {
		// Get the Dynamic List input
		var inputId = 'field_' + depFieldArgs.fieldKey;
		if ( depFieldArgs.repeatRow !== '' ) {
			inputId += '-' + depFieldArgs.repeatRow;
		}
		var listInput = document.getElementById(inputId);

		// Set the new value
		listInput.value = newValue;

		// Remove field from hidden field list
		if ( isFieldConditionallyHidden( depFieldArgs.containerId, depFieldArgs.formId ) ) {
			removeFromHideFields( depFieldArgs.containerId, depFieldArgs.formId );
		}

		triggerChange( jQuery( listInput ) );
	}

	// Add the loading icon with jQuery
	function addLoadingIcon( $fieldDiv ) {
		var currentHTML = $fieldDiv.html();

		if ( currentHTML.indexOf( 'frm-loading-img' ) > -1 ) {
			// Loading image already present
		} else {
			var loadingIcon = '<span class="frm-loading-img"></span>';
			$fieldDiv.html( currentHTML + loadingIcon );

			var $optContainer = $fieldDiv.find('.frm_opt_container');
			$optContainer.hide();
		}
	}

	// Add the loading icon with JavaScript
	function addLoadingIconJS( fieldDiv, optContainer ) {
		var currentHTML = fieldDiv.innerHTML;

		if ( currentHTML.indexOf( 'frm-loading-img' ) > -1 ) {
			// Loading image already present
		} else {
			optContainer.style.display = "none";

			var loadingIcon = document.createElement('span');
			loadingIcon.setAttribute("class", "frm-loading-img");
			fieldDiv.insertBefore(loadingIcon, optContainer.nextSibling);
		}
	}

	// Remove the loading icon with jQuery
	function removeLoadingIcon( $optContainer ) {
		$optContainer.parent().children( '.frm-loading-img').remove();
		$optContainer.show();
	}

	// Remove the loading icon with JavaScript
	function removeLoadingIconJS( fieldDiv, optContainer ) {
		var loadingIcon = fieldDiv.getElementsByClassName( 'frm-loading-img' )[0];
		if ( loadingIcon !== null && loadingIcon !== undefined ) {
			loadingIcon.parentNode.removeChild( loadingIcon );
		}

		optContainer.style.display = "block";
	}

	// Get the field value from all the inputs
	function getFieldValueFromInputs( $inputs ) {
		var fieldValue = [];
		var currentValue = '';
		$inputs.each(function(){
			currentValue = this.value;
			if ( this.type === 'radio' || this.type === 'checkbox' ) {
				if ( this.checked === true ) {
					fieldValue.push( currentValue );
				}
			} else {
				if ( currentValue !== '' ) {
					fieldValue.push( currentValue );
				}
			}
		});

		if ( fieldValue.length === 0 ) {
			fieldValue = '';
		}

		return fieldValue;
	}

	// Hide and clear a Dynamic Field
	function hideDynamicField( depFieldArgs ) {
		hideFieldAndClearValue( depFieldArgs, true );
	}

	// Show Dynamic field
	function showDynamicField( depFieldArgs, $fieldDiv, $fieldInputs, valueChanged ) {
		if ( isFieldConditionallyHidden( depFieldArgs.containerId, depFieldArgs.formId ) ) {
			removeFromHideFields( depFieldArgs.containerId, depFieldArgs.formId );
			$fieldDiv.show();
		}

		if( $fieldInputs.hasClass('frm_chzn') ) {
			loadChosen();
		}

		if ( valueChanged === true ) {
			triggerChange($fieldInputs);
		}
	}

	/*************************************************
	 Calculations
	 ************************************************/

	function triggerCalc(){
		if ( typeof __FRMCALC === 'undefined' ) {
			// there are no calculations on this page
			return;
		}

		var triggers = __FRMCALC.triggers;
		if ( triggers ) {
			jQuery(triggers.join()).trigger({type:'change',selfTriggered:true});
		}

		triggerCalcWithoutFields();
	}

	function triggerCalcWithoutFields() {
		var calcs = __FRMCALC.calc;
		var vals = [];

		for ( var field_key in calcs ) {
			if ( calcs[field_key].fields.length < 1 ) {
				var totalField = document.getElementById( 'field_'+ field_key );
				if ( totalField !== null && ! isChildInputConditionallyHidden( totalField, calcs[field_key].form_id ) ) {
					// if field is not hidden, do calculation
					doSingleCalculation( __FRMCALC, field_key, vals );
				}
			}
		}
	}

	function doCalculation(field_id, triggerField){
		if ( typeof __FRMCALC === 'undefined' ) {
			// there are no calculations on this page
			return;
		}

		var all_calcs = __FRMCALC;
		var calc = all_calcs.fields[field_id];
		if ( typeof calc === 'undefined' ) {
			// this field is not used in a calculation
			return;
		}

		var keys = calc.total;
		var len = keys.length;
		var vals = [];

		// loop through each calculation this field is used in
		for ( var i = 0, l = len; i < l; i++ ) {

			// Proceed with calculation if total field is not conditionally hidden
			if ( isTotalFieldConditionallyHidden( all_calcs.calc[ keys[i] ], triggerField.attr('name') ) === false ) {
				doSingleCalculation( all_calcs, keys[i], vals, triggerField );
			}
		}
	}

	/**
	 * Check if a total field is conditionally hidden
	 * @param {Object} calcDetails
	 * @param {string} calcDetails.field_id
	 * @param {string} calcDetails.form_id
	 * @param {string} calcDetails.inSection
	 * @param {string} calcDetails.inEmbedForm
	 * @param {string} triggerFieldName
	 * @returns {boolean}
     */
	function isTotalFieldConditionallyHidden( calcDetails, triggerFieldName ) {
		var hidden = false;
		var fieldId = calcDetails.field_id;
		var formId = calcDetails.form_id;

		// Check if there are any conditionally hidden fields
		var hiddenFields = getHiddenFields( formId );
		if ( hiddenFields.length < 1 ) {
			return hidden;
		}

		if ( calcDetails.inSection === '0' && calcDetails.inEmbedForm === '0' ) {
			// Field is not in a section or embedded form
			hidden = isNonRepeatingFieldConditionallyHidden( fieldId, hiddenFields );

		} else {
			// Field is in a section or embedded form
			var repeatArgs = getRepeatArgsFromFieldName( triggerFieldName );

			if ( isNonRepeatingFieldConditionallyHidden( fieldId, hiddenFields ) ) {
				// Check standard field
				hidden = true;
			} else if ( isRepeatingFieldConditionallyHidden( fieldId, repeatArgs, hiddenFields ) ){
				// Check repeating field
				hidden = true;
			} else if ( calcDetails.inSection !== '0' && calcDetails.inEmbedForm !== '0' ) {
				// Check section in embedded form
				hidden = isRepeatingFieldConditionallyHidden( calcDetails.inSection, repeatArgs, hiddenFields );
			} else if ( calcDetails.inSection !== '0' ) {
				// Check section
				hidden = isNonRepeatingFieldConditionallyHidden( calcDetails.inSection, hiddenFields);
			} else if ( calcDetails.inEmbedForm !== '0' ) {
				// Check embedded form
				hidden = isNonRepeatingFieldConditionallyHidden( calcDetails.inEmbedForm, hiddenFields);
			}
		}

		return hidden;
	}

	// Check if a non-repeating field is conditionally hidden
	function isNonRepeatingFieldConditionallyHidden( fieldId, hiddenFields ) {
		var htmlID = 'frm_field_' + fieldId + '_container';
		return ( hiddenFields.indexOf( htmlID ) > -1 );
	}

	// Check if a repeating field is conditionally hidden
	function isRepeatingFieldConditionallyHidden( fieldId, repeatArgs, hiddenFields ) {
		var hidden = false;

		if ( repeatArgs.repeatingSection ) {
			var fieldRepeatId = 'frm_field_' + fieldId + '-' + repeatArgs.repeatingSection;
			fieldRepeatId += '-' + repeatArgs.repeatRow + '_container';
			hidden = ( hiddenFields.indexOf( fieldRepeatId ) > -1 );
		}

		return hidden;
	}

	function doSingleCalculation( all_calcs, field_key, vals, triggerField ) {
		var thisCalc = all_calcs.calc[ field_key ];
		var thisFullCalc = thisCalc.calc;

		var totalField = jQuery( document.getElementById('field_'+ field_key) );
		// TODO: update this to work more like conditional logic
		var fieldInfo = { 'triggerField': triggerField, 'inSection': false, 'thisFieldCall': 'input[id^="field_'+ field_key+'-"]' };
		if ( totalField.length < 1 && typeof triggerField !== 'undefined' ) {
			// check if the total field is inside of a repeating/embedded form
			fieldInfo.inSection = true;
			fieldInfo.thisFieldId = objectSearch( all_calcs.fieldsWithCalc, field_key );
			totalField = getSiblingField( fieldInfo );
		}

		if ( totalField.length < 1 ) {
			return;
		}

		// loop through the fields in this calculation
		thisFullCalc = getValsForSingleCalc( thisCalc, thisFullCalc, all_calcs, vals, fieldInfo );

		var total = '';

		if ( thisCalc.calc_type == 'text' ) {
			total = thisFullCalc;
		} else {
			// Set the number of decimal places
			var dec = thisCalc.calc_dec;

			// allow .toFixed for reverse compatability
			if ( thisFullCalc.indexOf(').toFixed(') ) {
				var calcParts = thisFullCalc.split(').toFixed(');
				if ( isNumeric(calcParts[1]) ) {
					dec = calcParts[1];
					thisFullCalc = thisFullCalc.replace(').toFixed(' + dec, '');
				}
			}

			total = parseFloat(eval(thisFullCalc));

			if ( typeof total === 'undefined' || isNaN(total) ) {
				total = 0;
			}

			// Set decimal points
			if ( isNumeric( dec ) ) {
				total = total.toFixed(dec);
			}
		}

		if ( totalField.val() != total ) {
			totalField.val(total);
			triggerChange( totalField, field_key );
		}
	}

	function getValsForSingleCalc( thisCalc, thisFullCalc, all_calcs, vals, fieldInfo ) {
		var fCount = thisCalc.fields.length;
		for ( var f = 0, c = fCount; f < c; f++ ) {
			var field = {
				'triggerField': fieldInfo.triggerField, 'thisFieldId': thisCalc.fields[f],
				'inSection': fieldInfo.inSection,
				'valKey': fieldInfo.inSection +''+ thisCalc.fields[f],
				'thisField': all_calcs.fields[ thisCalc.fields[f] ],
				'thisFieldCall': 'input'+ all_calcs.fieldKeys[ thisCalc.fields[f] ]
			};

			field = getCallForField( field, all_calcs );
			if ( thisCalc.calc_type == 'text' ) {
				field.valKey = 'text' + field.valKey;
				vals = getTextCalcFieldId( field, vals );
				if ( typeof vals[field.valKey] === 'undefined' ) {
					vals[field.valKey] = '';
				}
			} else {
				field.valKey = 'num' + field.valKey;
				vals = getCalcFieldId(field, all_calcs, vals);
				if ( typeof vals[field.valKey] === 'undefined' || isNaN(vals[field.valKey]) ) {
					vals[field.valKey] = 0;
				}
				if ( field.thisField.type == 'date' && vals[field.valKey] === 0 ) {
					thisFullCalc = '';
				}
			}

			var findVar = '['+ field.thisFieldId +']';
			findVar = findVar.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
			thisFullCalc = thisFullCalc.replace(new RegExp(findVar, 'g'), vals[field.valKey]);
		}
		return thisFullCalc;
	}

	function getCallForField( field, all_calcs ) {
		if ( field.thisField.type == 'checkbox' || field.thisField.type == 'select' ) {
			field.thisFieldCall = field.thisFieldCall +':checked,select'+ all_calcs.fieldKeys[field.thisFieldId] +' option:selected,'+ field.thisFieldCall+'[type=hidden]';
		} else if ( field.thisField.type == 'radio' || field.thisField.type == 'scale' ) {
			field.thisFieldCall = field.thisFieldCall +':checked,'+ field.thisFieldCall +'[type=hidden]';
		} else if ( field.thisField.type == 'textarea' ) {
			field.thisFieldCall = field.thisFieldCall + ',textarea'+ all_calcs.fieldKeys[field.thisFieldId];
		}
		return field;
	}

	function maybeDoCalcForSingleField( field_input ) {
		if ( typeof __FRMCALC === 'undefined' ) {
			// there are no calculations on this page
			return;
		}

		// Exit now if field is a type that can't do calculations
		if ( ! fieldCanDoCalc( field_input.type ) ) {
			return;
		}

		var all_calcs = __FRMCALC;
		var field_key = getFieldKey( field_input.id, field_input.name );
		var triggerField = maybeGetTriggerField( field_input );

		if ( all_calcs.calc[ field_key ] === undefined ) {
			// This field doesn't have any calculations
			return;
		}

		var vals = [];
		doSingleCalculation( all_calcs, field_key, vals, triggerField );
	}

	function fieldCanDoCalc( fieldType ) {
		var canDoCalc = false;

		if ( fieldType == 'text' || fieldType == 'hidden' || fieldType == 'number' ) {
			canDoCalc = true;
		}

		return canDoCalc;
	}

	function getFieldKey( fieldHtmlId, fieldName ) {
		var field_key = fieldHtmlId.replace( 'field_', '' );

		if ( isRepeatingFieldByName( fieldName ) ) {
			var fieldKeyParts = field_key.split('-');
			var newFieldKey = '';
			for ( var i=0; i<fieldKeyParts.length-1; i++ ){
				if ( newFieldKey === '' ) {
					newFieldKey = fieldKeyParts[i];
				} else {
					newFieldKey = newFieldKey + '-' + fieldKeyParts[i];
				}
			}
			field_key = newFieldKey;
		}

		return field_key;
	}

	function maybeGetTriggerField( fieldInput ) {
		var triggerField = null;
		if ( isRepeatingFieldByName( fieldInput.name ) ) {
			if ( fieldInput.type != 'hidden' ) {
				triggerField = jQuery( fieldInput ).closest('.frm_form_field');
			} else {
				triggerField = jQuery( fieldInput );
			}
		}

		return triggerField;
	}

	function isRepeatingFieldByName( fieldName ) {
		var fieldNameParts = fieldName.split( '][' );
		return fieldNameParts.length >= 3;
	}

	function getCalcFieldId( field, all_calcs, vals ) {
		if ( typeof vals[field.valKey] !== 'undefined' && vals[field.valKey] !== 0 ) {
			return vals;
		}

		vals[field.valKey] = 0;

		var calcField = getCalcField( field );
		if ( calcField === false ) {
			return vals;
		}

		calcField.each(function(){
			var thisVal = getOptionValue( field.thisField, this );

			if ( field.thisField.type == 'date' ) {
				var d = getDateFieldValue( all_calcs.date, thisVal );
                if ( d !== null ) {
					vals[field.valKey] = Math.ceil(d/(1000*60*60*24));
                }
			} else {
				var n = thisVal;

				if ( n !== '' && n !== 0 ) {
					n = n.trim();
					n = parseFloat(n.replace(/,/g,'').match(/-?[\d\.]+$/));
				}

				if ( typeof n === 'undefined' || isNaN(n) || n === '' ) {
					n = 0;
				}
				vals[field.valKey] += n;
			}

		});

		return vals;
    }

	function getTextCalcFieldId( field, vals ) {
		if ( typeof vals[field.valKey] !== 'undefined' && vals[field.valKey] !== '' ) {
			return vals;
		}

		vals[field.valKey] = '';

		var calcField = getCalcField( field );
		if ( calcField === false ) {
			return vals;
		}

		calcField.each(function(){
			var thisVal = getOptionValue( field.thisField, this );
			thisVal = thisVal.trim();
			vals[field.valKey] += thisVal;
		});

		return vals;
    }

	function getCalcField( field ) {
		var calcField;
		if ( field.inSection === false ) {
			calcField = jQuery(field.thisFieldCall);
		} else {
			calcField = getSiblingField( field );
			if ( calcField === null || typeof calcField === 'undefined' ) {
				calcField = jQuery(field.thisFieldCall);
			}
		}

		if ( calcField === null || typeof calcField === 'undefined' || calcField.length < 1 ) {
			calcField = false;
		}

		return calcField;
	}

	/**
	* Get the value from a date field regardless of whether datepicker is defined for it
	* Limitations: If using a format with a 2-digit date, '20' will be added to the front if the year is prior to 70
	*/
	function getDateFieldValue( dateFormat, thisVal ) {
		var d = 0;

		if ( ! thisVal ) {
			// If no value was selected in date field, use 0
		} else if ( typeof jQuery.datepicker === 'undefined' ) {
			// If date field is not on the current page

			var splitAt = '-';
			if ( dateFormat.indexOf( '/' ) > -1 ) {
				splitAt = '/';
			}

			var formatPieces = dateFormat.split( splitAt );
			var datePieces = thisVal.split( splitAt );

			var year, month, day;
			year = month = day = '';

			for ( var i = 0; i < formatPieces.length; i++ ) {
				if ( formatPieces[ i ] == 'y' ) {
					var currentYear = new Date().getFullYear() + 15;
					var currentYearPlusFifteen = currentYear.toString().substr(2,2);

					if ( datePieces[ i ] > currentYearPlusFifteen ) {
						year = '19' + datePieces[ i ];
					} else {
						year = '20' + datePieces[ i ];
					}
				} else if ( formatPieces[ i ] == 'yy' ) {
					year = datePieces[ i ];
				} else if ( formatPieces[ i ] == 'm' || formatPieces[ i ] == 'mm' ) {
					month = datePieces[ i ];
					if ( month.length < 2 ) {
						month = '0' + month;
					}
				} else if ( formatPieces[ i ] == 'd' || formatPieces[ i ] == 'dd' ) {
					day = datePieces[ i ];
					if ( day.length < 2 ) {
						day = '0' + day;
					}
				}
			}

			d = Date.parse( year + '-' + month + '-' + day );

		} else {
		    d = jQuery.datepicker.parseDate(dateFormat, thisVal);
		}
		return d;
	}

	function getSiblingField( field ) {
		if ( typeof field.triggerField === 'undefined' ) {
			return null;
		}

		var container = field.triggerField.closest('.frm_repeat_sec, .frm_repeat_inline, .frm_repeat_grid');
		if ( container.length ) {
			var siblingFieldCall = field.thisFieldCall.replace('[id=', '[id^=');

			return container.find(siblingFieldCall);
		}
		return null;
	}

	function getOptionValue( thisField, currentOpt ) {
		var thisVal;

		// If current option is an other option, get other value
		if ( isOtherOption( thisField, currentOpt ) ) {
			thisVal = getOtherValueAnyField( thisField, currentOpt );
		} else if ( (currentOpt.type === 'checkbox' || currentOpt.type === 'radio') && currentOpt.checked ) {
			thisVal = currentOpt.value;
		} else {
			thisVal = jQuery(currentOpt).val();
		}

		if ( typeof thisVal === 'undefined' ) {
			thisVal = '';
		}
		return thisVal;
	}

	/* Check if current option is an "Other" option (not an Other text field) */
	function isOtherOption( thisField, currentOpt ) {
		var isOtherOpt = false;

		// If hidden, check for a value
		if ( currentOpt.type == 'hidden' ) {
			if ( getOtherValueLimited( currentOpt ) !== '' ) {
				isOtherOpt = true;
			}
		} else if ( thisField.type == 'select' ) {
			// If a visible dropdown field
			var optClass = currentOpt.className;
			if ( optClass && optClass.indexOf( 'frm_other_trigger' ) > -1 ) {
				isOtherOpt = true;
			}
		} else if ( thisField.type == 'checkbox' || thisField.type == 'radio' ) {
			// If visible checkbox/radio field
			if ( currentOpt.id.indexOf( '-other_' ) > -1 && currentOpt.id.indexOf( '-otext' ) < 0 ) {
				isOtherOpt = true;
			}
		}

		return isOtherOpt;
	}

	/* Get the value from an "Other" text field */
	/* Does NOT work for visible select fields */
	function getOtherValueLimited( currentOpt ){
		var otherVal = '';
		var otherText = document.getElementById( currentOpt.id + '-otext' );
		if ( otherText !== null && otherText.value !== '' ) {
			otherVal = otherText.value;
		}
		return otherVal;
	}

	/* Get value from Other text field */
	function getOtherValueAnyField( thisField, currentOpt ) {
		var otherVal = 0;

		if ( thisField.type == 'select' ) {
			if ( currentOpt.type == 'hidden' ) {
				if ( isCurrentOptRepeating( currentOpt ) ) {
					// Do nothing because regular doCalculation code takes care of it
				} else {
					otherVal = getOtherValueLimited( currentOpt );
				}
			} else {
				otherVal = getOtherSelectValue( currentOpt );
			}
		} else if ( thisField.type == 'checkbox' || thisField.type == 'radio' ) {
			if ( currentOpt.type == 'hidden' ) {
				// Do nothing because regular doCalculation code takes care of it
			} else {
				otherVal = getOtherValueLimited( currentOpt );
			}
		}

		return otherVal;
	}

	/* Check if current option is in a repeating section */
	function isCurrentOptRepeating( currentOpt ) {
		var isRepeating = false;
		var parts = currentOpt.name.split( '[' );
		if ( parts.length > 2 ) {
			isRepeating = true;
		}
		return isRepeating;
	}

	/* Get value from Other text field in a visible dropdown field */
	function getOtherSelectValue( currentOpt ) {
		return jQuery(currentOpt).closest('.frm_other_container').find('.frm_other_input').val();
	}

	function shouldJSValidate( object ) {
		var validate = jQuery(object).hasClass('frm_js_validate');
		if ( validate ) {
			if ( savingDraftEntry( object ) || goingToPrevPage( object ) ) {
				validate = false;
			}
		}

		return validate;
	}

	function savingDraftEntry( object ) {
		var isDraft = false;
		var savingDraft = jQuery(object).find('.frm_saving_draft');
		if ( savingDraft.length ) {
			isDraft = savingDraft.val();
		}
		return isDraft;
	}

	function goingToPrevPage( object ) {
		var goingBack = false;
		var nextPage = jQuery(object).find('.frm_next_page');
		if ( nextPage.length && nextPage.val() ) {
			var formID = jQuery(object).find('input[name="form_id"]').val();
			var prevPage = jQuery(object).find('input[name="frm_page_order_'+ formID +'"]');
			if ( prevPage.length ) {
				prevPage = prevPage.val();
			} else {
				prevPage = 0;
			}

			if ( ! prevPage || ( nextPage.val() < prevPage ) ) {
				goingBack = true;
			}
		}

		return goingBack;
	}

	function validateForm( object ) {
		var errors = [];

		// Make sure required text field is filled in
		var requiredFields = jQuery(object).find(
			'.frm_required_field:visible input, .frm_required_field:visible select, .frm_required_field:visible textarea'
		).filter(':not(.frm_optional)');
		if ( requiredFields.length ) {
			for ( var r = 0, rl = requiredFields.length; r < rl; r++ ) {
				errors = checkRequiredField( requiredFields[r], errors );
			}
		}

		var emailFields = jQuery(object).find('input[type=email]').filter(':visible');
		var fields = jQuery(object).find('input,select,textarea');
		if ( fields.length ) {
			for ( var n = 0, nl = fields.length; n < nl; n++ ) {
				var field = fields[n];
				var value = field.value;
				if ( value !== '' ) {
					if ( field.type == 'hidden' ) {
						// don't vaidate
					} else if ( field.type == 'number' ) {
						errors = checkNumberField( field, errors );
					} else if ( field.type == 'email' ) {
						errors = checkEmailField( field, errors, emailFields );
					} else if ( field.pattern !== null ) {
						errors = checkPatternField( field, errors );
					}
				}
			}
		}

		errors = validateRecaptcha( object, errors );

		return errors;
	}

	function validateField( fieldId, field ) {
		var errors = [];

		var $fieldCont = jQuery(field).closest('.frm_form_field');
		if ( $fieldCont.hasClass('frm_required_field') && ! jQuery(field).hasClass('frm_optional') ) {
			errors = checkRequiredField( field, errors );
		}

		if ( errors.length < 1 ) {
			if ( field.type == 'email' ) {
				var emailFields = jQuery(field).closest('form').find('input[type=email]');
				errors = checkEmailField( field, errors, emailFields );
			} else if ( field.type == 'number' ) {
				errors = checkNumberField( field, errors );
			} else if ( field.pattern !== null ) {
				errors = checkPatternField( field, errors );
			}
		}

		removeFieldError( $fieldCont );
		if (  Object.keys(errors).length > 0 ) {
			for ( var key in errors ) {
				addFieldError( $fieldCont, key, errors );
			}
		}
	}

	function checkRequiredField( field, errors ) {
		var fileID = field.getAttribute('data-frmfile');
		if ( field.type == 'hidden' && fileID === null ) {
			return errors;
		}

		var val = '';
		var fieldID = '';
		if ( field.type == 'checkbox' || field.type == 'radio' ) {
			var checkGroup = jQuery('input[name="'+field.name+'"]').closest('.frm_required_field').find('input:checked');
			jQuery(checkGroup).each(function() {
			    val = this.value;
			});
		} else if ( field.type == 'file' || fileID ) {
			if ( typeof fileID === 'undefined' ) {
				fileID = getFieldId( field, true );
				fileID = fileID.replace('file', '');
			}

			if ( typeof errors[ fileID ] === 'undefined' ) {
				val = getFileVals( fileID );
			}
			fieldID = fileID;
		} else {
			var fieldClasses = field.className;
			if ( fieldClasses.indexOf('frm_pos_none') !== -1 ) {
				// skip hidden other fields
				return errors;
			}

			val = jQuery(field).val();
			if ( typeof val !== 'string' ) {
				var tempVal = val;
				val = '';
				for ( var i = 0; i < tempVal.length; i++ ) {
					if ( tempVal[i] !== '' ) {
						val = tempVal[i];
					}
				}
			}

			if ( fieldClasses.indexOf('frm_other_input') === -1 ) {
				fieldID = getFieldId( field, true );
			} else {
				fieldID = getFieldId( field, false );
			}
		}

		if ( val === '' ) {
			if ( fieldID === '' ) {
				fieldID = getFieldId( field, true );
			}
			if ( !(fieldID in errors) ) {
				errors[ fieldID ] = getFieldValidationMessage( field, 'data-reqmsg' );
			}
		}

		return errors;
	}

	function getFileVals( fileID ) {
		var val = '';
		var fileFields = jQuery('input[name="file'+ fileID +'"], input[name="file'+ fileID +'[]"], input[name^="item_meta['+ fileID +']"]');
		fileFields.each(function(){
			if ( val === '' ) {
				val = this.value;
			}
		});
		return val;
	}

	function checkEmailField( field, errors, emailFields ) {
		var emailAddress = field.value;
		var fieldID = getFieldId( field, true );
		if ( fieldID in errors ) {
			return errors;
		}

		var isConf = (fieldID.indexOf('conf_') === 0);
		if ( emailAddress !== '' || isConf ) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
			var invalidMsg = getFieldValidationMessage( field, 'data-invmsg' );
			if ( emailAddress !== '' && re.test( emailAddress ) === false ) {
				errors[ fieldID ] = invalidMsg;
				if ( isConf ) {
					errors[ fieldID.replace('conf_', '') ] = '';
				}
			} else if ( isConf ) {
				var confName = field.name.replace('conf_', '');
				var match = emailFields.filter('[name="'+ confName +'"]').val();
				if ( match !== emailAddress ) {
					errors[ fieldID ] = '';
					errors[ fieldID.replace('conf_', '') ] = '';
				}
			}
		}
		return errors;
	}

	function checkNumberField( field, errors ) {
		var number = field.value;
		if ( number !== '' && isNaN(number / 1) !== false ) {
			var fieldID = getFieldId( field, true );
			if ( !(fieldID in errors) ) {
				errors[ fieldID ] = getFieldValidationMessage( field, 'data-invmsg' );
			}
		}
		return errors;
	}

	function checkPatternField( field, errors ) {
		var text = field.value;
		var format = getFieldValidationMessage( field, 'pattern' );

		if ( format !== '' && text !== '' ) {
			var fieldID = getFieldId( field, true );
			if ( !(fieldID in errors) ) {
				format = new RegExp( '^'+ format +'$', 'i' );
				if ( format.test( text ) === false ) {
					errors[ fieldID ] = getFieldValidationMessage( field, 'data-invmsg' );
				}
			}
		}
		return errors;
	}

	function validateRecaptcha( form, errors ) {
		var $recaptcha = jQuery(form).find('.frm-g-recaptcha');
		if ( $recaptcha.length ) {
			var recaptchaID = $recaptcha.data('rid');
			var response = grecaptcha.getResponse( recaptchaID );

			if ( response.length === 0 ) {
				var fieldContainer = $recaptcha.closest('.frm_form_field');
				var fieldID = fieldContainer.attr('id').replace('frm_field_', '').replace('_container', '');
				errors[ fieldID ] = '';
			}
		}
		return errors;
	}

	function getFieldValidationMessage( field, messageType ) {
		var msg = field.getAttribute(messageType);
		if ( msg === null ) {
			msg = '';
		}
		return msg;
	}

	function getFormErrors(object, action){
		jQuery(object).find('input[type="submit"], input[type="button"]').attr('disabled','disabled');

		if(typeof action == 'undefined'){
			jQuery(object).find('input[name="frm_action"]').val();
		}

		jQuery.ajax({
			type:'POST',url:frm_js.ajax_url,
			data:jQuery(object).serialize() +'&action=frm_entries_'+ action +'&nonce='+frm_js.nonce,
			success:function(response){
				var defaultResponse = {'content':'', 'errors':{}, 'pass':false };
				if ( response === null ) {
					response = defaultResponse;
				}

				response = response.replace(/^\s+|\s+$/g,'');
				if ( response.indexOf('{') === 0 ) {
					response = jQuery.parseJSON(response);
				}else{
					response = defaultResponse;
				}

				if ( typeof response.redirect != 'undefined' ) {
					window.location = response.redirect;
				} else if ( response.content !== '' ) {
					// the form or success message was returned

					jQuery(object).find('.frm_ajax_loading').removeClass('frm_loading_now');
					var formID = jQuery(object).find('input[name="form_id"]').val();
					jQuery(object).closest( '#frm_form_'+ formID +'_container' ).replaceWith( response.content );
					frmFrontForm.scrollMsg( formID );

					if(typeof(frmThemeOverride_frmAfterSubmit) == 'function'){
						var pageOrder = jQuery('input[name="frm_page_order_'+ formID +'"]').val();
						var formReturned = jQuery(response.content).find('input[name="form_id"]').val();
						frmThemeOverride_frmAfterSubmit(formReturned, pageOrder, response.content, object);
					}

					var entryIdField = jQuery(object).find('input[name="id"]');
					if(entryIdField.length){
						jQuery(document.getElementById('frm_edit_'+ entryIdField.val())).find('a').addClass('frm_ajax_edited').click();
					}

					var formCompleted = jQuery(response.content).find('.frm_message');
					if ( formCompleted.length ) {
						// if the success message is showing, run the logic
						checkConditionalLogic( 'pageLoad' );
					}
					checkFieldsOnPage();
				} else if ( Object.keys(response.errors).length ) {
					// errors were returned

					jQuery(object).find('input[type="submit"], input[type="button"]').removeAttr('disabled');
					jQuery(object).find('.frm_ajax_loading').removeClass('frm_loading_now');

					//show errors
					var cont_submit = true;
					removeAllErrors();

					var show_captcha = false;
					var $fieldCont = null;

					for ( var key in response.errors ) {
						$fieldCont = jQuery(object).find('#frm_field_'+key+'_container');

						if ( $fieldCont.length ) {
							if ( ! $fieldCont.is(':visible') ) {
								var inCollapsedSection = $fieldCont.closest('.frm_toggle_container');
								if ( inCollapsedSection.length ) {
									var frmTrigger = inCollapsedSection.prev();
									if ( ! frmTrigger.hasClass('frm_trigger') ) {
										// If the frmTrigger object is the section description, check to see if the previous element is the trigger
										frmTrigger = frmTrigger.prev('.frm_trigger');
									}
									frmTrigger.click();
								}
							}

							if ( $fieldCont.is(':visible') ) {
								addFieldError( $fieldCont, key, response.errors );

								cont_submit = false;

								var $recaptcha = jQuery(object).find('#frm_field_'+key+'_container .frm-g-recaptcha, #frm_field_'+key+'_container .g-recaptcha');
								if ( $recaptcha.length ) {
									show_captcha = true;
									var recaptchaID = $recaptcha.data('rid');
									if ( jQuery().grecaptcha ) {
										if ( recaptchaID ) {
											grecaptcha.reset( recaptchaID );
										} else {
											grecaptcha.reset();
										}
									}
								}
							}
						}
					}

					scrollToFirstField( object );

					if(show_captcha !== true){
						replaceCheckedRecaptcha( object, false );
					}

					if(cont_submit){
						object.submit();
					}else{
						jQuery(object).prepend(response.error_message);
					}
				} else {
					// there may have been a plugin conflict, or the form is not set to submit with ajax

					showFileLoading( object );
					replaceCheckedRecaptcha( object, true );

					object.submit();
				}
			},
			error:function(){
				jQuery(object).find('input[type="submit"], input[type="button"]').removeAttr('disabled');
				object.submit();
			}
		});
	}

	function addFieldError( $fieldCont, key, jsErrors ) {
		if ( $fieldCont.length && $fieldCont.is(':visible') ) {
			$fieldCont.addClass('frm_blank_field');
			if ( typeof frmThemeOverride_frmPlaceError == 'function' ) {
				frmThemeOverride_frmPlaceError( key, jsErrors );
			} else {
				$fieldCont.append( '<div class="frm_error">'+ jsErrors[key] +'</div>' );
			}
		}
	}

	function removeFieldError( $fieldCont ) {
		$fieldCont.removeClass('frm_blank_field');
		$fieldCont.find('.frm_error').remove();
	}

	function removeAllErrors() {
		jQuery('.form-field').removeClass('frm_blank_field');
		jQuery('.form-field .frm_error').replaceWith('');
		jQuery('.frm_error_style').remove();
	}

	function scrollToFirstField( object ) {
		var field = jQuery(object).find('.frm_blank_field:first');
		if ( field.length ) {
			frmFrontForm.scrollMsg( field, object, true );
		}
	}

	function showFileLoading( object ) {
		var loading = document.getElementById('frm_loading');
		if ( loading !== null ) {
			var file_val = jQuery(object).find('input[type=file]').val();
			if ( typeof file_val != 'undefined' && file_val !== '' ) {
				setTimeout(function(){
					jQuery(loading).fadeIn('slow');
				},2000);
			}
		}
	}

	function replaceCheckedRecaptcha( object, checkPage ) {
		var $recapField = jQuery(object).find('.frm-g-recaptcha, .g-recaptcha');
		if($recapField.length ){
			if ( checkPage ) {
				var morePages = jQuery(object).find('.frm_next_page').length < 1 || jQuery(object).find('.frm_next_page').val() < 1;
				if ( ! morePages ) {
					return;
				}
			}
			$recapField.closest('.frm_form_field').replaceWith('<input type="hidden" name="recaptcha_checked" value="'+ frm_js.nonce +'">');
		}
	}

	function clearDefault(){
		/*jshint validthis:true */
		toggleDefault(jQuery(this), 'clear');
	}

	function replaceDefault(){
		/*jshint validthis:true */
		toggleDefault(jQuery(this), 'replace');
	}
	
	function toggleDefault($thisField, e){
		// TODO: Fix this for a default value that is a number or array
		var v = $thisField.data('frmval').replace(/(\n|\r\n)/g, '\r');
		if ( v === '' || typeof v == 'undefined' ) {
			return false;
		}
		var thisVal = $thisField.val().replace(/(\n|\r\n)/g, '\r');
		
		if ( 'replace' == e ) {
			if ( thisVal === '' ) {
				$thisField.addClass('frm_default').val(v);
			}
		} else if ( thisVal == v ) {
			$thisField.removeClass('frm_default').val('');
		}
	}

	function resendEmail(){
		/*jshint validthis:true */
		var $link = jQuery(this);
		var entry_id = $link.data('eid');
		var form_id = $link.data('fid');
		$link.append('<span class="spinner" style="display:inline"></span>');
		jQuery.ajax({
			type:'POST',url:frm_js.ajax_url,
			data:{action:'frm_entries_send_email', entry_id:entry_id, form_id:form_id, nonce:frm_js.nonce},
			success:function(msg){
				$link.replaceWith(msg);
			}
		});
		return false;
	}

    /* Google Tables */

	function prepareGraphTypes( graphs, graphType ) {
		for ( var num = 0; num < graphs.length; num++ ) {
			prepareGraphs( graphs[num], graphType );
		}
	}

	function prepareGraphs( opts, type ) {
		google.load('visualization', '1.0', {'packages':[type], 'callback': function(){
			if ( type == 'table' ) {
				compileGoogleTable( opts );
			} else {
				compileGraph( opts );
			}
		}});
	}

    function compileGoogleTable(opts){
        var data = new google.visualization.DataTable();

        var showID = false;
        if ( jQuery.inArray('id', opts.options.fields) !== -1 ) {
            showID = true;
            data.addColumn('number',frm_js.id);
        }

        var colCount = opts.fields.length;
        var type = 'string';
        for ( var i = 0, l = colCount; i < l; i++ ) {
            var thisCol = opts.fields[i];
            type = getGraphType(thisCol);

            data.addColumn(type, thisCol.name);
        }

        var showEdit = false;
        if ( opts.options.edit_link ) {
            showEdit = true;
            data.addColumn('string', opts.options.edit_link);
        }

        var showDelete = false;
        if ( opts.options.delete_link ) {
            showDelete = true;
            data.addColumn('string', opts.options.delete_link);
        }

        var col = 0;
        if ( opts.entries !== null ) {
            var entryCount = opts.entries.length;
            data.addRows(entryCount);

            var row = 0;

            for ( var e = 0, len = entryCount; e < len; e++ ) {
                col = 0;
                var entry = opts.entries[e];
                if ( showID ) {
                    data.setCell(row, col, entry.id);
                    col++;
                }

                for ( var field = 0, fieldCount = colCount; field < fieldCount; field++ ) {
                    var thisEntryCol = opts.fields[field];
                    type = getGraphType(thisEntryCol);

                    var fieldVal = entry.metas[thisEntryCol.id];
                    if ( type == 'number' && ( fieldVal === null || fieldVal === '' ) ) {
                        fieldVal = 0;
                    } else if ( type == 'boolean' ) {
                        if ( fieldVal === null || fieldVal == 'false' || fieldVal === false ) {
                            fieldVal = false;
                        } else {
                            fieldVal = true;
                        }
                    }

                    data.setCell(row, col, fieldVal);

                    col++;
                }

                if ( showEdit ) {
					if ( typeof entry.editLink !== 'undefined' ) {
                    	data.setCell(row, col, '<a href="'+ entry.editLink +'">'+ opts.options.edit_link +'</a>');
					} else {
						data.setCell(row, col, '');
					}
         		    col++;
        	    }

                if ( showDelete ) {
					if ( typeof entry.deleteLink !== 'undefined' ) {
                    	data.setCell(row, col,'<a href="'+ entry.deleteLink +'" class="frm_delete_link" data-frmconfirm="'+ opts.options.confirm +'">'+ opts.options.delete_link +'</a>');
					} else {
						data.setCell(row, col, '');
					}
                }

                row++;
            }
        } else {
            data.addRows(1);
            col = 0;

            for ( i = 0, l = colCount; i < l; i++ ) {
                if ( col > 0 ) {
                    data.setCell(0, col, '');
                } else {
                    data.setCell(0, col, opts.options.no_entries);
                }
                col++;
            }
        }

        var chart = new google.visualization.Table(document.getElementById('frm_google_table_'+ opts.options.form_id));
        chart.draw( data, opts.graphOpts );
    }

    function getGraphType(field){
        var type = 'string';
        if ( field.type == 'number' ){
            type = 'number';
        } else if ( field.type == 'checkbox' || field.type == 'select' ) {
            var optCount = field.options.length;
            if ( field.type == 'select' && field.options[0] === '' ) {
                if ( field.field_options.post_field == 'post_status' ) {
                    optCount = 3;
                } else {
                    optCount = optCount - 1;
                }
            }
            if ( optCount == 1 ) {
                type = 'boolean';
            }
        }
        return type;
    }

    function compileGraph(opts){
        var data = new google.visualization.DataTable();
        var useSepCol = false;
		var useTooltip = false;

        // add the rows
        var rowCount = opts.rows.length;
        if ( rowCount > 0 ) {
            if ( opts.type == 'table' ) {
                useSepCol = true;
                var lastRow = opts.rows[rowCount - 1];
                var count = lastRow[0] + 1;
                data.addRows(count);

                for ( var r = 0, len = rowCount; r < len; r++ ) {
                    data.setCell( opts.rows[r] ); //data.setCell(0, 0, 'Mike');
                }
            }else{
                var firstRow = opts.rows[0];
                if ( typeof firstRow.tooltip != 'undefined' ) {
                    useSepCol = true;
					useTooltip = true;

					// reset the tooltip key to numeric
					for ( var row = 0, rc = rowCount; row < rc; row++ ) {
						var tooltip = opts.rows[row].tooltip;
						delete opts.rows[row].tooltip;

						var rowArray = Object.keys(opts.rows[row]).map( function(k){
							return opts.rows[row][k];
						} );

						opts.rows[row] = rowArray;
						opts.rows[row].push(tooltip);
					}
                }
            }
        }

        // add the columns
        var colCount = opts.cols.length;
        if ( useSepCol ) {
            if ( colCount > 0 ) {
                for ( var i = 0, l = colCount; i < l; i++ ) {
                    var col = opts.cols[i];
                    data.addColumn(col.type, col.name);
                }
            }
			if ( useTooltip ) {
				data.addColumn({type:'string',role:'tooltip'});
				data.addRows(opts.rows);
			}
        } else {
            var graphData = [];
            graphData[0] = [];
            for ( var c = 0, cur = colCount; c < cur; c++ ) {
                graphData[0].push(opts.cols[c].name);
            }
            graphData = graphData.concat(opts.rows);
            data = google.visualization.arrayToDataTable(graphData);
        }

        var type = (opts.type.charAt(0).toUpperCase() + opts.type.slice(1)) + 'Chart';
        var chart = new google.visualization[type](document.getElementById('chart_'+ opts.graph_id));

        chart.draw(data, opts.options);
    }
	
	/* Repeating Fields */
	function removeRow(){
		/*jshint validthis:true */
		var id = 'frm_section_'+ jQuery(this).data('parent') +'-'+ jQuery(this).data('key');
		var thisRow = jQuery(document.getElementById(id));
		var fields = thisRow.find('input, select, textarea');

		thisRow.fadeOut('slow', function(){
			thisRow.remove();

			fields.each(function(){
				/* update calculations when a row is removed */
				if ( this.type != 'file' ) {
					var fieldID = getFieldId( this, false );
					doCalculation(fieldID, jQuery(this));
				}
			});

			if(typeof(frmThemeOverride_frmRemoveRow) == 'function'){
				frmThemeOverride_frmRemoveRow(id, thisRow);
			}
		});

		return false;
	}

	function addRow(){
		/*jshint validthis:true */

		// If row is currently being added, leave now
		if ( currentlyAddingRow === true ) {
			return false;
		}

		// Indicate that a row is being added (so double clicking Add button doesn't cause problems)
		currentlyAddingRow = true;

		var id = jQuery(this).data('parent');
		var i = 0;
		if ( jQuery('.frm_repeat_'+id).length > 0 ) {
			var lastRowIndex = jQuery('.frm_repeat_'+ id +':last').attr('id').replace('frm_section_'+ id +'-', '');
			if ( lastRowIndex.indexOf( 'i' ) > -1 ) {
				i = 1;
			} else {
				i = 1 + parseInt( lastRowIndex );
			}
		}

		jQuery.ajax({
			type:'POST',url:frm_js.ajax_url,
			dataType: 'json',
			data:{action:'frm_add_form_row', field_id:id, i:i, nonce:frm_js.nonce},
			success:function(r){
				var html = r.html;
				var item = jQuery(html).hide().fadeIn('slow');
				jQuery('.frm_repeat_'+ id +':last').after(item);

                var checked = ['other'];
                var fieldID, fieldObject;
                var reset = 'reset';

				var repeatArgs = {
					repeatingSection: id.toString(),
					repeatRow: i.toString(),
				};

                // hide fields with conditional logic
                jQuery(html).find('input, select, textarea').each(function(){
					if ( this.type != 'file' ) {

						// Readonly dropdown fields won't have a name attribute
						if ( this.name === '' ) {
							return true;
						}
						fieldID = this.name.replace('item_meta[', '').split(']')[2].replace('[', '');
						if ( jQuery.inArray(fieldID, checked ) == -1 ) {
							if ( this.id === false || this.id === '' ) {
								return;
							}
							fieldObject = jQuery( '#' + this.id );
							checked.push(fieldID);
							hideOrShowFieldById( fieldID, repeatArgs );
							updateWatchingFieldById( fieldID, repeatArgs, 'value changed' );
							// TODO: maybe trigger a change instead of running these three functions
							checkFieldsWithConditionalLogicDependentOnThis( fieldID, fieldObject );
							checkFieldsWatchingLookup( fieldID, fieldObject, 'value changed' );
							doCalculation(fieldID, fieldObject);
							reset = 'persist';
						}
					}
                });

				loadDropzones( repeatArgs.repeatRow );
				loadStars();

				// trigger autocomplete
				loadChosen();

				if(typeof(frmThemeOverride_frmAddRow) == 'function'){
					frmThemeOverride_frmAddRow(id, r);
				}

				currentlyAddingRow = false;
			},
			error: function() {
				currentlyAddingRow = false;
			}
		});

		return false;
	}

	/*****************************************************
	 * In-place edit
	 ******************************************************/
	function editEntry(){
		/*jshint validthis:true */
		var $edit = jQuery(this);
		var entry_id = $edit.data('entryid');
		var prefix = $edit.data('prefix');
		var post_id = $edit.data('pageid');
		var form_id = $edit.data('formid');
		var cancel = $edit.data('cancel');
		var fields = $edit.data('fields');
		var exclude_fields = $edit.data('excludefields');

		var $cont = jQuery(document.getElementById(prefix+entry_id));
		var orig = $cont.html();
		$cont.html('<span class="frm-loading-img" id="'+prefix+entry_id+'"></span><div class="frm_orig_content" style="display:none">'+orig+'</div>');
		jQuery.ajax({
			type:'POST',url:frm_js.ajax_url,dataType:'html',
			data:{
				action:'frm_entries_edit_entry_ajax', post_id:post_id,
				entry_id:entry_id, id:form_id, nonce:frm_js.nonce,
				fields:fields, exclude_fields:exclude_fields
			},
			success:function(html){
				$cont.children('.frm-loading-img').replaceWith(html);
				$edit.removeClass('frm_inplace_edit').addClass('frm_cancel_edit');
				$edit.html(cancel);
				checkConditionalLogic( 'editInPlace' );

				// Make sure fields just loaded are properly bound
				jQuery(document).on('change', '.frm-show-form input[name^="item_meta"], .frm-show-form select[name^="item_meta"], .frm-show-form textarea[name^="item_meta"]', maybeCheckDependent);
				checkFieldsOnPage();
			}
		});
		return false;
	}

	function cancelEdit(){
		/*jshint validthis:true */
		var $edit = jQuery(this);
		var entry_id = $edit.data('entryid');
		var prefix = $edit.data('prefix');
		var label = $edit.data('edit');

		if(!$edit.hasClass('frm_ajax_edited')){
			var $cont = jQuery(document.getElementById(prefix+entry_id));
			$cont.children('.frm_forms').replaceWith('');
			$cont.children('.frm_orig_content').fadeIn('slow').removeClass('frm_orig_content');
		}
		$edit.removeClass('frm_cancel_edit').addClass('frm_inplace_edit');
		$edit.html(label);
		return false;
	}

	function deleteEntry(){
		/*jshint validthis:true */
		var $link = jQuery(this);
		var confirmText = $link.data('deleteconfirm');
		if ( confirm( confirmText ) ) {
			var entry_id = $link.data('entryid');
			var prefix = $link.data('prefix');

			$link.replaceWith('<span class="frm-loading-img" id="frm_delete_'+entry_id+'"></span>');
			jQuery.ajax({
				type:'POST',url:frm_js.ajax_url,
				data:{action:'frm_entries_destroy', entry:entry_id, nonce:frm_js.nonce},
				success:function(html){
					if(html.replace(/^\s+|\s+$/g,'') == 'success'){
						jQuery(document.getElementById(prefix+entry_id)).fadeOut('slow');
						jQuery(document.getElementById('frm_delete_'+entry_id)).fadeOut('slow');
					}else{
						jQuery(document.getElementById('frm_delete_'+entry_id)).replaceWith(html);
					}
				}
			});
		}
		return false;
	}

	/**********************************************
	 * General Helpers
	 *********************************************/

	function checkFieldsOnPage(){
		checkPreviouslyHiddenFields();
		loadDateFields();
		loadCustomInputMasks();
		loadStars();
		loadChosen();
		checkDynamicFields();
		checkLookupFields();
		triggerCalc();
		loadDropzones();
	}

	function checkPreviouslyHiddenFields() {
		if (typeof __frmHideFields !== 'undefined') {
			frmFrontForm.hidePreviouslyHiddenFields();
		}
	}

	function loadChosen() {
		if ( jQuery().chosen ) {
			var opts = {allow_single_deselect:true};
			if ( typeof __frmChosen !== 'undefined' ) {
				opts = '{' + __frmChosen + '}';
			}
			jQuery('.frm_chzn').chosen(opts);
		}
	}

	function loadStars() {
		if ( jQuery().rating ) {
			var star = jQuery('.star');
			if ( star.length ) {
				// trigger star fields
				star.rating();
			}
		}
	}

	function checkConditionalLogic( event ) {
		if (typeof __frmHideOrShowFields !== 'undefined') {
			frmFrontForm.hideOrShowFields( __frmHideOrShowFields, event );
		}
	}

	function checkDynamicFields() {
		if (typeof __frmDepDynamicFields !== 'undefined') {
			frmFrontForm.checkDependentDynamicFields(__frmDepDynamicFields);
		}
	}

	function checkLookupFields() {
		if (typeof __frmDepLookupFields !== 'undefined') {
			frmFrontForm.checkDependentLookupFields(__frmDepLookupFields);
		}
	}

	function triggerChange( input, fieldKey ) {
		if ( typeof fieldKey === 'undefined' ) {
			fieldKey = 'dependent';
		}

		if ( input.length > 1 ) {
			input = input.eq(0);
		}

		input.trigger({ type:'change', selfTriggered:true, frmTriggered:fieldKey });
	}

	function loadCustomInputMasks() {
		if ( typeof __frmMasks === 'undefined' ) {
			return;
		}

		var maskFields = __frmMasks;
		for ( var i = 0; i < maskFields.length; i++ ) {
			jQuery( maskFields[i].trigger ).attr( 'data-frmmask', maskFields[i].mask );
		}
	}

	// Get the section ID and repeat row from a field name
	function getRepeatArgsFromFieldName( fieldName ) {
		var repeatArgs = {repeatingSection:"", repeatRow:""};

		if ( typeof fieldName !== 'undefined' && isRepeatingFieldByName( fieldName ) ) {
			var inputNameParts = fieldName.split( '][' );
			repeatArgs.repeatingSection = inputNameParts[0].replace('item_meta[', '');
			repeatArgs.repeatRow = inputNameParts[1];
		}

		return repeatArgs;
	}

	function fadeOut($remove){
		$remove.fadeOut('slow', function(){
			$remove.remove();
		});
	}

	function confirmClick() {
		/*jshint validthis:true */
		var message = jQuery(this).data('frmconfirm');
		return confirm(message);
	}

	function toggleDiv(){
		/*jshint validthis:true */
		var div=jQuery(this).data('frmtoggle');
		if(jQuery(div).is(':visible')){
			jQuery(div).slideUp('fast');
		}else{
			jQuery(div).slideDown('fast');
		}
		return false;
	}

	function objectSearch( array, value ) {
		for( var prop in array ) {
			if( array.hasOwnProperty( prop ) ) {
				if( array[ prop ] === value ) {
					return prop;
				}
			}
		}
		return null;
	}

	function isNumeric( obj ) {
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	}

	/**********************************************
	 * Fallback functions
	 *********************************************/

	function addIndexOfFallbackForIE8() {
		if ( !Array.prototype.indexOf ) {
			Array.prototype.indexOf = function(elt /*, from*/) {
				var len = this.length >>> 0;

				var from = Number(arguments[1]) || 0;
				from = (from < 0) ? Math.ceil(from) : Math.floor(from);
				if (from < 0) {
					from += len;
				}

				for (; from < len; from++) {
					if ( from in this && this[from] === elt ) {
						return from;
					}
				}
				return -1;
			};
		}
	}

	function addTrimFallbackForIE8(){
		if ( typeof String.prototype.trim !== 'function' ) {
			String.prototype.trim = function() {
				return this.replace(/^\s+|\s+$/g, '');
			};
		}
	}

	function addFilterFallbackForIE8(){
		if ( !Array.prototype.filter ) {

			Array.prototype.filter = function(fun /*, thisp */) {

				if ( this === void 0 || this === null ) {
					throw new TypeError();
				}

				var t = Object( this );
				var len = t.length >>> 0;
				if ( typeof fun !== 'function' ) {
					throw new TypeError();
				}

				var res = [];
				var thisp = arguments[1];
				for (var i = 0; i < len; i++) {
					if ( i in t ) {
						var val = t[i]; // in case fun mutates this
						if (fun.call(thisp, val, i, t))
							res.push(val);
					}
				}

				return res;
			};
		}
	}

	function addKeysFallbackForIE8(){
		if ( !Object.keys ) {
		  Object.keys = function(obj) {
		    var keys = [];

		    for (var i in obj) {
		      if (obj.hasOwnProperty(i)) {
		        keys.push(i);
		      }
		    }

		    return keys;
		  };
		}
	}

	return{
		init: function(){
			jQuery(document).off('submit.formidable','.frm-show-form');
			jQuery(document).on('submit.formidable','.frm-show-form', frmFrontForm.submitForm);

			jQuery(document).on('click', '.frm_trigger', toggleSection);
			var $blankField = jQuery('.frm_blank_field');
			if ( $blankField.length ) {
				$blankField.closest('.frm_toggle_container').prev('.frm_trigger').click();
			}

			if ( jQuery.isFunction(jQuery.fn.placeholder) ) {
				jQuery('.frm-show-form input, .frm-show-form textarea').placeholder();
			} else {
				jQuery('.frm-show-form input[onblur], .frm-show-form textarea[onblur]').each(function(){
					if(jQuery(this).val() === '' ){
						jQuery(this).blur();
					}
				});
			}
			
			jQuery(document).on('focus', '.frm_toggle_default', clearDefault);
			jQuery(document).on('blur', '.frm_toggle_default', replaceDefault);
			jQuery('.frm_toggle_default').blur();

			jQuery(document.getElementById('frm_resend_email')).click(resendEmail);

			jQuery(document).on('click', '.frm_remove_link', removeFile);

			jQuery(document).on('focusin', 'input[data-frmmask]', function(){
				jQuery(this).mask( jQuery(this).data('frmmask').toString() );
			});

			jQuery(document).on('change', '.frm-show-form input[name^="item_meta"], .frm-show-form select[name^="item_meta"], .frm-show-form textarea[name^="item_meta"]', maybeCheckDependent);

			jQuery(document).on('click', '.frm-show-form input[type="submit"], .frm-show-form input[name="frm_prev_page"], .frm-show-form .frm_save_draft', setNextPage);
            
            jQuery(document).on('change', '.frm_other_container input[type="checkbox"], .frm_other_container input[type="radio"], .frm_other_container select', showOtherText);

			jQuery(document).on('click', '.frm_remove_form_row', removeRow);
			jQuery(document).on('click', '.frm_add_form_row', addRow);

			jQuery(document).on('click', 'a[data-frmconfirm]', confirmClick);
			jQuery('a[data-frmtoggle]').click(toggleDiv);

			// In place edit
			jQuery('.frm_edit_link_container').on('click', 'a.frm_inplace_edit', editEntry);
			jQuery('.frm_edit_link_container').on('click', 'a.frm_cancel_edit', cancelEdit);
			jQuery(document).on('click', '.frm_ajax_delete', deleteEntry);

			// toggle collapsible entries shortcode
			jQuery('.frm_month_heading, .frm_year_heading').click( function(){
				var content = jQuery(this).children('.ui-icon-triangle-1-e, .ui-icon-triangle-1-s');
				if ( content.hasClass('ui-icon-triangle-1-e') ) {
					content.addClass('ui-icon-triangle-1-s').removeClass('ui-icon-triangle-1-e');
					jQuery(this).next('.frm_toggle_container').fadeIn('slow');
				} else {
					content.addClass('ui-icon-triangle-1-e').removeClass('ui-icon-triangle-1-s');
					jQuery(this).next('.frm_toggle_container').hide();
				}
			});

			checkConditionalLogic( 'pageLoad' );
			checkFieldsOnPage();

			// Add fallbacks for the beloved IE8
			addIndexOfFallbackForIE8();
			addTrimFallbackForIE8();
			addFilterFallbackForIE8();
			addKeysFallbackForIE8();
		},

		submitForm: function(e){
			frmFrontForm.submitFormManual( e, this );
		},

		submitFormManual: function(e, object){
			var classList = object.className.trim().split(/\s+/gi);
			if ( classList ) {
				var isPro = classList.indexOf('frm_pro_form') > -1;
				if ( ! isPro ) {
					return;
				}
			}

			if ( jQuery('body').hasClass('wp-admin') ) {
				return;
			}

			e.preventDefault();
			var errors = frmFrontForm.validateFormSubmit( object );

			if ( Object.keys(errors).length === 0 ) {
				jQuery(object).find('.frm_ajax_loading').addClass('frm_loading_now');
				if ( classList.indexOf('frm_ajax_submit') > -1 ) {
					var hasFileFields = jQuery(object).find('input[type="file"]').length;
					if ( hasFileFields < 1 ) {
						action = jQuery(object).find('input[name="frm_action"]').val();
						frmFrontForm.checkFormErrors( object, action );
					} else {
						object.submit();
					}
				} else {
					object.submit();
				}
			}
		},

		validateFormSubmit: function( object ){
			if ( typeof tinyMCE != 'undefined' && jQuery(this).find('.wp-editor-wrap').length ) {
				tinyMCE.triggerSave();
			}

			jsErrors = [];

			if ( shouldJSValidate( object ) ) {
				frmFrontForm.getAjaxFormErrors( object );

				if ( Object.keys(jsErrors).length ) {
					frmFrontForm.addAjaxFormErrors( object );
				}
			}

			return jsErrors;
		},

		getAjaxFormErrors: function( object ) {
			jsErrors = validateForm( object );
			if ( typeof frmThemeOverride_jsErrors == 'function' ) {
				action = jQuery(object).find('input[name="frm_action"]').val();
				var customErrors = frmThemeOverride_jsErrors( action, object );
				if ( Object.keys(customErrors).length  ) {
					for ( var key in customErrors ) {
						jsErrors[ key ] = customErrors[ key ];
					}
				}
			}

			return jsErrors;
		},

		addAjaxFormErrors: function( object ) {
			removeAllErrors();

			for ( var key in jsErrors ) {
				var $fieldCont = jQuery(object).find('#frm_field_'+key+'_container');

				if ( $fieldCont.length ) {
					addFieldError( $fieldCont, key, jsErrors );
				} else {
					// we are unable to show the error, so remove it
					delete jsErrors[ key ];
				}
			}

			scrollToFirstField( object );
		},

		checkFormErrors: function(object, action){
			getFormErrors( object, action );
		},

        scrollToID: function(id){
            var object = jQuery(document.getElementById(id));
            frmFrontForm.scrollMsg( object, false );
        },

		scrollMsg: function( id, object, animate ) {
			var scrollObj = '';
			if(typeof(object) == 'undefined'){
				scrollObj = jQuery(document.getElementById('frm_form_'+id+'_container'));
			} else if ( typeof id == 'string' ) {
				scrollObj = jQuery(object).find('#frm_field_'+id+'_container');
			} else {
				scrollObj = id;
			}
			var newPos = scrollObj.offset().top;

			if(!newPos){
				return;
			}
			newPos = newPos-frm_js.offset;

			var m=jQuery('html').css('margin-top');
			var b=jQuery('body').css('margin-top');
			if(m || b){
				newPos = newPos - parseInt(m) - parseInt(b);
			}

			if ( newPos && window.innerHeight ) {
				var screenTop = document.documentElement.scrollTop || document.body.scrollTop;
				var screenBottom = screenTop + window.innerHeight;

				if( newPos > screenBottom || newPos < screenTop ) {
					// Not in view
					if ( typeof animate === 'undefined' ) {
						jQuery(window).scrollTop(newPos);
					}else{
						jQuery('html,body').animate({scrollTop: newPos}, 500);
					}
					return false;
				}
			}
		},

		savingDraft: function(object){
			return savingDraftEntry(object);
		},

		goingToPreviousPage: function(object){
			return goingToPrevPage(object);
		},

		hideOrShowFields: function(ids, event ){
			if ( 'pageLoad' === event ) {
				clearHideFields();
			}
			var len = ids.length;
			var repeatArgs = { repeatingSection: '', repeatRow: '' };
			for ( var i = 0, l = len; i < l; i++ ) {
				hideOrShowFieldById( ids[i], repeatArgs );
			}
		},

		hidePreviouslyHiddenFields: function(){
			var hiddenFields = getAllHiddenFields();
			var len = hiddenFields.length;
			for ( var i = 0, l = len; i < l; i++ ) {
				var container = document.getElementById( hiddenFields[ i ] );
				if ( container !== null ) {
					container.style.display = 'none';
				}
			}
		},

		checkDependentDynamicFields: function(ids){
			var len = ids.length;
			var repeatArgs = { repeatingSection: '', repeatRow: '' };
			for ( var i = 0, l = len; i < l; i++ ) {
				hideOrShowFieldById( ids[i], repeatArgs );
			}
		},

		checkDependentLookupFields: function(ids){
			var fieldId;
			var repeatArgs = { repeatingSection: '', repeatRow: '' };
			for ( var i = 0, l = ids.length; i < l; i++ ) {
				fieldId = ids[i];
				updateWatchingFieldById( fieldId, repeatArgs, 'value changed' );
			}
		},

		loadGoogle: function(){
			if ( typeof google !== 'undefined' && google && google.load ) {
				var graphs = __FRMTABLES;
				var packages = Object.keys( graphs );
				//google.load('visualization', '1.0', {'packages':packages});
				for ( var i = 0; i < packages.length; i++ ) {
					prepareGraphTypes( graphs[ packages[i] ], packages[i] );
				}
			} else {
				setTimeout( frmFrontForm.loadGoogle, 30 );
			}
		},
		
		/* Time fields */
		removeUsedTimes: function( obj, timeField ) {
			var e = jQuery(obj).parents('form:first').find('input[name="id"]');
			jQuery.ajax({
				type:'POST',
				url:frm_js.ajax_url,
				dataType:'json',
				data:{
					action:'frm_fields_ajax_time_options',
					time_field:timeField, date_field:obj.id,
					entry_id: (e ? e.val() : ''), date: jQuery(obj).val(),
					nonce:frm_js.nonce
				},
				success:function(opts){
					var $timeField = jQuery(document.getElementById(timeField));
					$timeField.find('option').removeAttr('disabled');
					if(opts && opts !== ''){
						for(var opt in opts){
							$timeField.find('option[value="'+opt+'"]').attr('disabled', 'disabled');
						}
					}
				}
			});
		},
		
		escapeHtml: function(text){
			return text
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#039;');
		},
		
		invisible: function(classes) {
			jQuery(classes).css('visibility', 'hidden');
		},
		
		visible: function(classes) {
			jQuery(classes).css('visibility', 'visible');
		}
	};
}
var frmFrontForm = frmFrontFormJS();

jQuery(document).ready(function($){
	frmFrontForm.init();
});

function frmRecaptcha() {
	var captchas = jQuery('.frm-g-recaptcha');
	for ( var c = 0, cl = captchas.length; c < cl; c++ ) {
		var recaptchaID = grecaptcha.render( captchas[c].id, {
			'sitekey': captchas[c].getAttribute('data-sitekey'),
			'size': captchas[c].getAttribute('data-size'),
			'theme': captchas[c].getAttribute('data-theme')
		} );
		captchas[c].setAttribute('data-rid', recaptchaID);
	}
}

function frmUpdateField(entry_id,field_id,value,message,num){
	jQuery(document.getElementById('frm_update_field_'+entry_id+'_'+field_id)).html('<span class="frm-loading-img"></span>');
	jQuery.ajax({
		type:'POST',url:frm_js.ajax_url,
		data:{action:'frm_entries_update_field_ajax', entry_id:entry_id, field_id:field_id, value:value, nonce:frm_js.nonce},
		success:function(){
			if(message.replace(/^\s+|\s+$/g,'') === ''){
				jQuery(document.getElementById('frm_update_field_'+entry_id+'_'+field_id+'_'+num)).fadeOut('slow');
			}else{
				jQuery(document.getElementById('frm_update_field_'+entry_id+'_'+field_id+'_'+num)).replaceWith(message);
			}
		}
	});
}

function frmEditEntry(entry_id,prefix,post_id,form_id,cancel,hclass){
	console.warn('DEPRECATED: function frmEditEntry in v2.0.13 use frmFrontForm.editEntry');
	var $edit = jQuery(document.getElementById('frm_edit_'+entry_id));
	var label = $edit.html();
	var $cont = jQuery(document.getElementById(prefix+entry_id));
	var orig = $cont.html();
	$cont.html('<span class="frm-loading-img" id="'+prefix+entry_id+'"></span><div class="frm_orig_content" style="display:none">'+orig+'</div>');
	jQuery.ajax({
		type:'POST',url:frm_js.ajax_url,dataType:'html',
		data:{action:'frm_entries_edit_entry_ajax', post_id:post_id, entry_id:entry_id, id:form_id, nonce:frm_js.nonce},
		success:function(html){
			$cont.children('.frm-loading-img').replaceWith(html);
			$edit.replaceWith('<span id="frm_edit_'+entry_id+'"><a onclick="frmCancelEdit('+entry_id+',\''+prefix+'\',\''+ frmFrontForm.escapeHtml(label) +'\','+post_id+','+form_id+',\''+hclass+'\')" class="'+hclass+'">'+cancel+'</a></span>');
		}
	});
}

function frmCancelEdit(entry_id,prefix,label,post_id,form_id,hclass){
	console.warn('DEPRECATED: function frmCancelEdit in v2.0.13 use frmFrontForm.cancelEdit');
	var $edit = jQuery(document.getElementById('frm_edit_'+entry_id));
	var $link = $edit.find('a');
	var cancel = $link.html();
	
	if(!$link.hasClass('frm_ajax_edited')){
		var $cont = jQuery(document.getElementById(prefix+entry_id));
		$cont.children('.frm_forms').replaceWith('');
		$cont.children('.frm_orig_content').fadeIn('slow').removeClass('frm_orig_content');
	}
	$edit.replaceWith('<a id="frm_edit_'+entry_id+'" class="frm_edit_link '+hclass+'" href="javascript:frmEditEntry('+entry_id+',\''+prefix+'\','+post_id+','+form_id+',\''+ frmFrontForm.escapeHtml(cancel) +'\',\''+hclass+'\')">'+label+'</a>');
}

function frmDeleteEntry(entry_id,prefix){
	console.warn('DEPRECATED: function frmDeleteEntry in v2.0.13 use frmFrontForm.deleteEntry');
	jQuery(document.getElementById('frm_delete_'+entry_id)).replaceWith('<span class="frm-loading-img" id="frm_delete_'+entry_id+'"></span>');
	jQuery.ajax({
		type:'POST',url:frm_js.ajax_url,
		data:{action:'frm_entries_destroy', entry:entry_id, nonce:frm_js.nonce},
		success:function(html){
			if(html.replace(/^\s+|\s+$/g,'') == 'success')
				jQuery(document.getElementById(prefix+entry_id)).fadeOut('slow');
			else
				jQuery(document.getElementById('frm_delete_'+entry_id)).replaceWith(html);
			
		}
	});
}

function frmOnSubmit(e){
	console.warn('DEPRECATED: function frmOnSubmit in v2.0 use frmFrontForm.submitForm'); 
	frmFrontForm.submitForm(e, this);
}

function frm_resend_email(entry_id,form_id){
	console.warn('DEPRECATED: function frm_resend_email in v2.0'); 
	$link = jQuery(document.getElementById('frm_resend_email'));
	$link.append('<span class="spinner" style="display:inline"></span>');
	jQuery.ajax({
		type:'POST',url:frm_js.ajax_url,
		data:{action:'frm_entries_send_email', entry_id:entry_id, form_id:form_id, nonce:frm_js.nonce},
		success:function(msg){
			$link.replaceWith(msg);
		}
	});
}
;
