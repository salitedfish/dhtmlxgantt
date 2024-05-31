/*
@license

dhtmlxGantt v.6.3.5 Professional

This software is covered by DHTMLX Ultimate License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Gantt.plugin(function(t){!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ext/dhtmlxgantt_click_drag",[],e):"object"==typeof exports?exports["ext/dhtmlxgantt_click_drag"]=e():t["ext/dhtmlxgantt_click_drag"]=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/codebase/",n(n.s=233)}({2:function(t,e){var n={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};function i(t){return!(!t||"object"!=typeof t)&&!!(t.getFullYear&&t.getMonth&&t.getDate)}function o(t,e){var n=[];if(t.filter)return t.filter(e);for(var i=0;i<t.length;i++)e(t[i],i)&&(n[n.length]=t[i]);return n}t.exports={getSecondsInUnit:function(t){return n[t]||n.hour},forEach:function(t,e){if(t.forEach)t.forEach(e);else for(var n=t.slice(),i=0;i<n.length;i++)e(n[i],i)},arrayMap:function(t,e){if(t.map)return t.map(e);for(var n=t.slice(),i=[],o=0;o<n.length;o++)i.push(e(n[o],o));return i},arrayFind:function(t,e){if(t.find)return t.find(e);for(var n=0;n<t.length;n++)if(e(t[n],n))return t[n]},arrayFilter:o,arrayDifference:function(t,e){return o(t,function(t,n){return!e(t,n)})},arraySome:function(t,e){if(0===t.length)return!1;for(var n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1},hashToArray:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e},sortArrayOfHash:function(t,e,n){var i=function(t,e){return t<e};t.sort(function(t,o){return t[e]===o[e]?0:n?i(t[e],o[e]):i(o[e],t[e])})},throttle:function(t,e){var n=!1;return function(){n||(t.apply(null,arguments),n=!0,setTimeout(function(){n=!1},e))}},isArray:function(t){return Array.isArray?Array.isArray(t):t&&void 0!==t.length&&t.pop&&t.push},isDate:i,isValidDate:function(t){return i(t)&&!isNaN(t.getTime())},isStringObject:function(t){return t&&"object"==typeof t&&"function String() { [native code] }"===Function.prototype.toString.call(t.constructor)},isNumberObject:function(t){return t&&"object"==typeof t&&"function Number() { [native code] }"===Function.prototype.toString.call(t.constructor)},isBooleanObject:function(t){return t&&"object"==typeof t&&"function Boolean() { [native code] }"===Function.prototype.toString.call(t.constructor)},delay:function(t,e){var n,i=function(){i.$cancelTimeout(),t.$pending=!0;var o=Array.prototype.slice.call(arguments);n=setTimeout(function(){t.apply(this,o),i.$pending=!1},e)};return i.$pending=!1,i.$cancelTimeout=function(){clearTimeout(n),t.$pending=!1},i.$execute=function(){t(),t.$cancelTimeout()},i},objectKeys:function(t){if(Object.keys)return Object.keys(t);var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n},requestAnimationFrame:function(t){var e=window;return(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)})(t)},isEventable:function(t){return t.attachEvent&&t.detachEvent}}},231:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=i(4),r=i(2);function a(t,e){var n=t-e;return n>=0?n:-n}var s=function(){function e(t){var e=this;this._el=document.createElement("div"),this._viewPort=t.viewPort,this._el.classList.add(t.className),"function"==typeof t.callback&&(this._callback=t.callback),"function"==typeof t.render&&(this.render=function(){e._el=t.render(e._startPoint,e._endPoint),""!==t.className&&e._el.classList.add(t.className),e.draw()}),r.isEventable(this._viewPort)||o(this._viewPort),this._singleRow=t.singleRow,this._useRequestAnimationFrame=t.useRequestAnimationFrame}return e.prototype.setStyles=function(){if(this._singleRow){var e=t.config.row_height;this._el.style.height=e+"px",this._el.style.top=(Math.ceil(this._positionPoint.relative.top/e)-1)*e+"px"}else this._el.style.height=a(this._endPoint.relative.top,this._startPoint.relative.top)+"px",this._el.style.top=this._positionPoint.relative.top+"px";this._el.style.width=a(this._endPoint.relative.left,this._startPoint.relative.left)+"px",this._el.style.left=this._positionPoint.relative.left+"px"},e.prototype.render=function(){this.setStyles(),this.draw()},e.prototype.draw=function(){var t=this;if(this._useRequestAnimationFrame)return r.requestAnimationFrame(function(){t._viewPort.appendChild(t.getElement())});this._viewPort.appendChild(this.getElement())},e.prototype.clear=function(){var t=this;if(this._useRequestAnimationFrame)return r.requestAnimationFrame(function(){t._el.parentNode&&t._viewPort.removeChild(t._el)});this._el.parentNode&&this._viewPort.removeChild(this._el)},e.prototype.getElement=function(){return this._el},e.prototype.getViewPort=function(){return this._viewPort},e.prototype.setStart=function(e){this._startPoint=e,this._startDate=t.dateFromPos(this._startPoint.relative.left),this._viewPort.callEvent("onBeforeDrag",[this._startPoint])},e.prototype.setEnd=function(e){if(this._endPoint=e,this._singleRow){var n=t.config.row_height;this._endPoint.relative.top=Math.ceil(this._startPoint.relative.top/n)*n}this._endDate=t.dateFromPos(this._endPoint.relative.left),this._startPoint.relative.left>this._endPoint.relative.left&&(this._positionPoint={relative:{left:this._endPoint.relative.left,top:this._positionPoint.relative.top},absolute:{left:this._endPoint.absolute.left,top:this._positionPoint.absolute.top}}),this._startPoint.relative.top>this._endPoint.relative.top&&(this._positionPoint={relative:{left:this._positionPoint.relative.left,top:this._endPoint.relative.top},absolute:{left:this._positionPoint.absolute.left,top:this._endPoint.absolute.top}}),this._viewPort.callEvent("onDrag",[this._startPoint,this._endPoint])},e.prototype.setPosition=function(t){this._positionPoint=t},e.prototype.dragEnd=function(e){var n;e.relative.left<0&&(e.relative.left=0),this._viewPort.callEvent("onBeforeDragEnd",[this._startPoint,e]),this.setEnd(e),this._startDate.valueOf()>this._endDate.valueOf()&&(n=[this._endDate,this._startDate],this._startDate=n[0],this._endDate=n[1]),this.clear();var i=t.getTaskByTime(this._startDate,this._endDate),o=this._getTasksByTop(this._startPoint.relative.top,this._endPoint.relative.top);this._viewPort.callEvent("onDragEnd",[this._startPoint,this._endPoint]),this._callback&&this._callback(this._startPoint,this._endPoint,this._startDate,this._endDate,i,o)},e.prototype.getInBounds=function(){return this._singleRow},e.prototype._getTasksByTop=function(e,n){var i=e,o=n;e>n&&(i=n,o=e);for(var r=t.config.row_height,a=Math.ceil(i/r)-1,s=Math.ceil(o/r)-1,l=[],c=a;c<=s;c++){t.getTaskByIndex(c)&&l.push(t.getTaskByIndex(c))}return l},e}();n.SelectedRegion=s},232:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(){this._mouseDown=!1,this._domEvents=t._createDomEventScope()}return e.prototype.attach=function(e,n){var i=this,o=e.getViewPort();this._originPosition=window.getComputedStyle(o).display,this._restoreOriginPosition=function(){o.style.position=i._originPosition},"static"===this._originPosition&&(o.style.position="relative");var r=t.$services.getService("state");r.registerProvider("clickDrag",function(){return{autoscroll:!1}});var a=null;this._domEvents.attach(o,"mousedown",function(o){a=null,t.utils.dom.closest(o.target,".gantt_task_line, .gantt_task_link")||(r.registerProvider("clickDrag",function(){return{autoscroll:i._mouseDown}}),n&&!0!==o[n]||(a=i._getCoordinates(o,e)))}),this._domEvents.attach(document.body,"mouseup",function(t){if(a=null,(!n||!0===t[n])&&!0===i._mouseDown){i._mouseDown=!1;var o=i._getCoordinates(t,e);e.dragEnd(o)}}),this._domEvents.attach(o,"mousemove",function(t){if(!n||!0===t[n]){var o=null;if(!i._mouseDown&&a)return o=i._getCoordinates(t,e),void(Math.abs(a.relative.left-o.relative.left)>5&&a&&(i._mouseDown=!0,e.setStart(a),e.setPosition(a),e.setEnd(a),a=null));!0===i._mouseDown&&(o=i._getCoordinates(t,e),e.setEnd(o),e.render())}})},e.prototype.detach=function(){this._domEvents.detachAll(),this._restoreOriginPosition&&this._restoreOriginPosition(),t.$services.getService("state").unregisterProvider("clickDrag")},e.prototype.destructor=function(){this.detach()},e.prototype._getCoordinates=function(t,e){var n=e.getViewPort(),i=n.getBoundingClientRect(),o=t.clientX,r=t.clientY;return{absolute:{left:o,top:r},relative:{left:o-i.left+n.scrollLeft,top:r-i.top+n.scrollTop}}},e}();n.EventsManager=o},233:function(e,n,i){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var r=i(232),a=i(231);t.ext||(t.ext={});var s={className:"gantt_click_drag_rect",useRequestAnimationFrame:!0,callback:void 0,singleRow:!1},l=new r.EventsManager;t.ext.clickDrag=l,t.attachEvent("onGanttReady",function(){var e=o({viewPort:t.$task_data},s);if(t.config.click_drag){var n=t.config.click_drag;e.render=n.render||s.render,e.className=n.className||s.className,e.callback=n.callback||s.callback,e.viewPort=n.viewPort||t.$task_data,e.useRequestAnimationFrame=void 0===n.useRequestAnimationFrame?s.useRequestAnimationFrame:n.useRequestAnimationFrame,e.singleRow=void 0===n.singleRow?s.singleRow:n.singleRow;var i=new a.SelectedRegion(e);t.ext.clickDrag.attach(i,n.useKey)}}),t.attachEvent("onDestroy",function(){l.destructor()})},4:function(t,e){var n=function(){this._connected=[],this._silent_mode=!1};n.prototype={_silentStart:function(){this._silent_mode=!0},_silentEnd:function(){this._silent_mode=!1}};var i=function(t){var e=[],n=function(){for(var n=!0,i=0;i<e.length;i++)if(e[i]){var o=e[i].apply(t,arguments);n=n&&o}return n};return n.addEvent=function(t){return"function"==typeof t&&e.push(t)-1},n.removeEvent=function(t){e[t]=null},n};t.exports=function(t){var e=new n;t.attachEvent=function(t,n,o){return t="ev_"+t.toLowerCase(),e[t]||(e[t]=i(o||this)),t+":"+e[t].addEvent(n)},t.attachAll=function(t,e){this.attachEvent("listen_all",t,e)},t.callEvent=function(t,n,i){if(e._silent_mode)return!0;var o="ev_"+t.toLowerCase();return e.ev_listen_all&&e.ev_listen_all.apply(i||this,[t].concat(n)),!e[o]||e[o].apply(i||this,n)},t.checkEvent=function(t){return!!e["ev_"+t.toLowerCase()]},t.detachEvent=function(t){if(t){var n=t.split(":"),i=n[0],o=n[1];e[i]&&e[i].removeEvent(o)}},t.detachAllEvents=function(){for(var t in e)0===t.indexOf("ev_")&&delete e[t]}}}})})});
//# sourceMappingURL=dhtmlxgantt_click_drag.js.map