import{isArr as e,isFunc as r,camelCase as t,exists as a,checkCall as s,isObj as n}from"@keg-hub/jsutils";import{h as c,_ as l,e as o,c as i,b as u}from"./_rollupPluginBabelHelpers-cd4ddb53.js";var getStyleContent=function(r){var t=u(r.matchAll(/\{(.+?)\}/gi));return e(t)&&e(t[0])?t[0][1]:""},cssToJs=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=getStyleContent(e).trim().split(";");return s.reduce((function(e,r){if(-1===r.indexOf(":"))return e;var s=r.split(":"),n=l(s,2),c=n[0],u=n[1];return c=t(c.trim()),u=u.trim(),a(c)&&a(u)&&""!==c&&""!==u?o(o({},e),{},i({},c,u)):e}),r)},styleSheetParser=function(t){var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c()&&e(t.classNames)?r(t.callback)?t:(console.error("[ Error ] styleSheetParser requires a function callback.\nIt received:",t.callback),{valid:!1}):(console.error("[ Error ] styleSheetParser requires Dom Access and an array of class names!"),{valid:!1})}(t),l=a.classNames,o=a.callback,i=a.toDom,u=void 0===i||i;if(!1===a.valid)return{};var d,m,f=e(l)&&Array.from(document.styleSheets).reduce((function(e,r){return function(e,r,t,a){return Array.from(r.cssRules).reduce((function(e,r){if(!r.selectorText||!r.cssText)return e;var n=r.selectorText.split(" ").shift();return t.includes(n)?s(a,r,n,e,cssToJs):e}),e)}(e,r,l,o)}),{asStr:""});return u&&n(f)&&f.asStr&&(d=f.asStr,(m=document.createElement("style")).styleSheet?m.styleSheet.cssText=d:m.appendChild(document.createTextNode(d)),document.getElementsByTagName("head")[0].appendChild(m)),f};export{styleSheetParser};
//# sourceMappingURL=styleParser.js.map
