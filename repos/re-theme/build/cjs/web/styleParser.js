"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@keg-hub/jsutils"),r=require("./_rollupPluginBabelHelpers-dd04b2bb.js"),warnOfStylesheetError=function(e,r){!function(e){var r;return e instanceof DOMException&&(null===(r=e.name)||void 0===r?void 0:r.includes("SecurityError"))}(r)?console.warn("Cannot parse stylesheet from source:",null==e?void 0:e.href,"\n Reason: ".concat(r.name," - ").concat(r.message)):console.warn("Cannot parse cross-origin restricted stylesheet from source:",null==e?void 0:e.href,"\nThis stylesheet will be safely ignored, but if you need access to it, then you should either ensure the domains match or adjust the stylesheet server's security policy.")},getStyleContent=function(r){var t=/\{(.+?)\}/,s=new RegExp(t,"gi"),n=[],a=r.match(s);for(var c in a){var o=a[c];n[c]=o.match(new RegExp(t))}return e.isArr(n[0])?n[0][1]:""},cssToJs=function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=getStyleContent(t).trim().split(";");return n.reduce((function(t,s){if(-1===s.indexOf(":"))return t;var n=s.split(":"),a=r._slicedToArray(n,2),c=a[0],o=a[1];return c=e.camelCase(c.trim()),o=o.trim(),e.exists(c)&&e.exists(o)&&""!==c&&""!==o?r._objectSpread2(r._objectSpread2({},t),{},r._defineProperty({},c,o)):t}),s)},loopSheetCssRules=function(r,t,s,n){var a=function(e){try{return e?e.cssRules:[]}catch(r){warnOfStylesheetError(e,r)}return[]}(t);return Array.from(a).reduce((function(r,t){if(!t.selectorText||!t.cssText)return r;var a=t.selectorText.split(" ").shift();return s.includes(a)?e.checkCall(n,t,a,r,cssToJs):r}),r)};exports.styleSheetParser=function(t){var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.hasDomAccess()&&e.isArr(t.classNames)?e.isFunc(t.callback)?t:(console.error("[ Error ] styleSheetParser requires a function callback.\nIt received:",t.callback),{valid:!1}):(console.error("[ Error ] styleSheetParser requires Dom Access and an array of class names!"),{valid:!1})}(t),n=s.classNames,a=s.callback,c=s.toDom,o=void 0===c||c;if(!1===s.valid)return{};var i,l,u=e.isArr(n)&&Array.from(document.styleSheets).reduce((function(e,r){return loopSheetCssRules(e,r,n,a)}),{asStr:""});return o&&e.isObj(u)&&u.asStr&&(i=u.asStr,(l=document.createElement("style")).styleSheet?l.styleSheet.cssText=i:l.appendChild(document.createTextNode(i)),document.getElementsByTagName("head")[0].appendChild(l)),u};
//# sourceMappingURL=styleParser.js.map
