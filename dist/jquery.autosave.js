!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define("Autosave",["jquery"],t):"object"==typeof exports?exports.Autosave=t(require("jquery")):e.Autosave=t(e.jquery)}(self,(function(e){return function(){"use strict";var t={794:function(t){t.exports=e},558:function(e){e.exports=JSON.parse('{"ru":{"The changes you have made may not be saved.":"Возможно, внесенные изменения не сохранятся."}}')}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){o.r(n),o.d(n,{default:function(){return l}});var e=o(794),t=o(558);function r(e){return t.en&&t.en[e]||e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,f(o.key),o)}}function u(e,t,r){return(t=f(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var s=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var o,n;return o=t,n=[{key:"_setItem",value:function(r){var o=t._getFullItem(),n=e(r).closest("form").attr(t.DEFAULTS.formAttr),a=e(r).index(),i=!1,u=r.value;e.each(o,(function(e,t){t.id===n&&t.i===a&&(t.text=u,t.reset=!1,i=!0)})),i||o.push({id:n,i:a,text:u,reset:!1}),t.onPage=""!==u,window.localStorage.setItem(t.DEFAULTS.storageName,JSON.stringify(o))}},{key:"_getFullItem",value:function(){return JSON.parse(window.localStorage.getItem(t.DEFAULTS.storageName))||[]}},{key:"_getText",value:function(r,o){var n=e(r).closest("form").attr(t.DEFAULTS.formAttr),a=e(r).index(),i="";return e.each(this._getFullItem(),(function(e,t){t.id!==n||t.i!==a||(!o||!1!==t.reset)&&o||(i=t.text)})),i}},{key:"bind",value:function(e){if(90===e.keyCode&&e.ctrlKey){if(""!==this.value)return!0;this.value=t._getText(this,!1),t._setItem(this)}else e.ctrlKey||t._setItem(this)}},{key:"restore",value:function(){if(""===this.value){var e=t._getText(this,!0);this.value=e,t.onPage=""!==e}}},{key:"reset",value:function(){var r=t._getFullItem(),o=e(this).closest("form").attr(t.DEFAULTS.formAttr);e.each(r,(function(e,r){r.id===o&&(r.reset=!0,t.onPage=!1)})),window.localStorage.setItem(t.DEFAULTS.storageName,JSON.stringify(r))}},{key:"remove",value:function(r){var o=t._getFullItem(),n=e(r).attr(t.DEFAULTS.formAttr);e.each(o,(function(e,r){if(r&&r.id===n){var a=o.indexOf(r);a>-1&&o.splice(a,1),t.onPage=!1}})),window.localStorage.setItem(t.DEFAULTS.storageName,JSON.stringify(o))}},{key:"exitAjax",value:function(){return!(!t.onPage||confirm(r("The changes you have made may not be saved."))&&(t.onPage=!1,1))}}],null&&i(o.prototype,null),n&&i(o,n),Object.defineProperty(o,"prototype",{writable:!1}),t}();u(s,"DEFAULTS",{storageName:"autosave",formClass:".autosave-form",formAttr:"data-autosave"}),u(s,"onPage",!1);var l=s;e(document).on("keyup",s.DEFAULTS.formClass+" textarea",s.bind),e(document).on("reset",s.DEFAULTS.formClass,s.reset),e((function(){e(s.DEFAULTS.formClass).has(":visible").find("textarea").each(s.restore)})),e(window).on("beforeunload",(function(){if(s.onPage)return r("The changes you have made may not be saved.")}))}(),n}()}));