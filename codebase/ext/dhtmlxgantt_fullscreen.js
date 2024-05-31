/*
@license

dhtmlxGantt v.6.2.7 Professional

This software is covered by DHTMLX Ultimate License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Gantt.plugin(function(e){!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(window,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(o,l,function(n){return e[n]}.bind(null,l));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/codebase/",t(t.s=247)}({247:function(n,t){!function(){var n=e.getState;function t(){var e=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;return e&&e===document.body}e.getState=function(){var e=n.apply(this,arguments);return e.fullscreen=t(),e};var o=!1,l={width:null,height:null,top:null,position:null,modified:!1};function u(n){n?(!function(){var n=e.$root;l.width=n.style.width,l.height=n.style.height,l.top=n.style.top,l.position=n.style.position,n.style.width="100vw",n.style.height="100vh",n.style.top="0",n.style.position="absolute",l.modified=!0}(),setTimeout(function(){e.render()})):(!function(){var n=e.$root;l.modified&&(n.style.width=l.width,n.style.height=l.height,n.style.top=l.top,n.style.position=l.position,l.modified=!1)}(),e.render())}function r(){if(e.$container){var n=t();u(n),n?(o=!0,setTimeout(function(){e.callEvent("onExpand")})):o&&(o=!1,setTimeout(function(){e.callEvent("onCollapse")}))}}function c(){return!e.$container||!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&((console.warning||console.log)("The `fullscreen` feature not being allowed, or full-screen mode not being supported"),!0)}e.attachEvent("onGanttReady",function(){e.event(document,"webkitfullscreenchange",r),e.event(document,"mozfullscreenchange",r),e.event(document,"MSFullscreenChange",r),e.event(document,"fullscreenChange",r),e.event(document,"fullscreenchange",r)}),e.expand=function(){if(!c()&&e.callEvent("onBeforeExpand",[])){var n=document.body;n.requestFullscreen?n.requestFullscreen():n.msRequestFullscreen?n.msRequestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}},e.collapse=function(){c()||t()&&e.callEvent("onBeforeCollapse",[])&&(document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen())}}()}})})});
//# sourceMappingURL=dhtmlxgantt_fullscreen.js.map