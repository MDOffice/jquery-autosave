!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Autosave=t():e.Autosave=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,o=[{key:"_setItem",value:function(t){var r=e._getFullItem(),n=!function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(t).closest("form").attr(e.DEFAULTS.formAttr),o=!function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(t).index(),u=!1,a=t.value;(function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e})().each(r,function(e,t){t.id===n&&t.i===o&&(t.text=a,t.reset=!1,u=!0)}),u||r.push({id:n,i:o,text:a,reset:!1}),e.onPage=""!==a,window.localStorage.setItem(e.DEFAULTS.storageName,JSON.stringify(r))}},{key:"_getFullItem",value:function(){return JSON.parse(window.localStorage.getItem(e.DEFAULTS.storageName))||[]}},{key:"_getText",value:function(t,r){var n=!function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(t).closest("form").attr(e.DEFAULTS.formAttr),o=!function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(t).index(),u="";return function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}().each(this._getFullItem(),function(e,t){t.id!==n||t.i!==o||(!r||!1!==t.reset)&&r||(u=t.text)}),u}},{key:"bind",value:function(t){if(90===t.keyCode&&t.ctrlKey){if(""!==this.value)return!0;this.value=e._getText(this,!1),e._setItem(this)}else t.ctrlKey||e._setItem(this)}},{key:"restore",value:function(){if(""===this.value){var t=e._getText(this,!0);this.value=t,e.onPage=""!==t}}},{key:"reset",value:function(){var t=e._getFullItem(),r=!function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(this).closest("form").attr(e.DEFAULTS.formAttr);(function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e})().each(t,function(t,n){n.id===r&&(n.reset=!0,e.onPage=!1)}),window.localStorage.setItem(e.DEFAULTS.storageName,JSON.stringify(t))}},{key:"remove",value:function(t){var r=e._getFullItem(),n=!function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(t).attr(e.DEFAULTS.formAttr);(function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e})().each(r,function(t,o){if(o&&o.id===n){var u=r.indexOf(o);u>-1&&r.splice(u,1),e.onPage=!1}}),window.localStorage.setItem(e.DEFAULTS.storageName,JSON.stringify(r))}},{key:"exitAjax",value:function(){return!!e.onPage&&(!confirm(e.DEFAULTS.msgExit)||(e.onPage=!1,!1))}}],(r=null)&&n(t.prototype,r),o&&n(t,o),e}();t.default=o,o.DEFAULTS={storageName:"autosave",formClass:".autosave-form",formAttr:"data-autosave",msgExit:"Возможно, внесенные изменения не сохранятся."},o.onPage=!1,function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(document).on("keyup",o.DEFAULTS.formClass+" textarea",o.bind),function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(document).on("reset",o.DEFAULTS.formClass,o.reset),function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(function(){(function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e})()(o.DEFAULTS.formClass).has(":visible").find("textarea").each(o.restore)}),function(){var e=new Error("Cannot find module 'jquery'");throw e.code="MODULE_NOT_FOUND",e}()(window).on("beforeunload",function(){if(o.onPage)return o.DEFAULTS.msgExit})}])});