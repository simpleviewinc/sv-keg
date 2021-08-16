import e,{useContext as r}from"react";import{isFunc as t,isNum as n,isArr as o,deepFreeze as i,isObj as a,logData as u,mapObj as f,softFalsy as l,toNum as s,reduceObj as c,unset as d,deepMerge as p,isEmpty as y,get as m,isStr as h,checkCall as b}from"@keg-hub/jsutils";var v,loadReactNativeDimensions=function(){return require("react-native").Dimensions},checkDimensions=function(e){return function(){return(v=v||loadReactNativeDimensions())?e.apply(void 0,arguments):console.error("[ ReTheme ERROR ] - Missing Dimensions","\n   - You must initialize 'Dimensions' before using the 'ReThemeProvider'","\n   - Do this by calling 'setRNDimensions(Dimensions)'","\n   - The first argument must be the 'Dimensions' export of 'react-native'","\n   - Or an Object with a matching API")}},g={get:checkDimensions((function(){var e;return v?(e=v).get.apply(e,arguments):{width:0,height:0}})),set:checkDimensions((function(){var e;v&&(e=v).set.apply(e,arguments)})),update:checkDimensions((function(){var e;v&&(e=v).update.apply(e,arguments)})),addEventListener:checkDimensions((function(){var e;v&&(e=v).addEventListener.apply(e,arguments)})),removeEventListener:checkDimensions((function(){var e;v&&(e=v).removeEventListener.apply(e,arguments)}))};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _extends(){return(_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function _slicedToArray(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,r)||_unsupportedIterableToArray(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(e){return function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_unsupportedIterableToArray(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var _={},addThemeEvent=function(e,r){if(e&&t(r))return _[e]=_[e]||[],_[e].push(r),_[e].length-1},removeThemeEvent=function(e,r){e&&_[e]&&(r||0===r)&&(n(r)?_[e].splice(r,1):t(r)&&o(_[e])&&(_[e]=_[e].filter((function(e){return e!==r}))))},fireThemeEvent=function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];o(_[e])&&_[e].forEach((function(e){return e.apply(void 0,t)}))},P=i({BUILD_EVENT:"build",CHANGE_EVENT:"change",RESIZE_EVENT:"resize",ADD_EVENT:"addEventListener",REMOVE_EVENT:"removeEventListener",KEG_STYLES_TAG_ID:"keg-components-stylesheet",PLATFORM:{NATIVE:"$native",IOS:"$ios",android:"$android",WEB:"$web",ALL:"$all"}}),O={entries:[["$xsmall",1],["$small",320],["$medium",768],["$large",1024],["$xlarge",1366]],hash:{},indexes:{}},buildSizeMapParts=function(){O.indexes=O.entries.reduce((function(e,r,t){return e[r[0]]=t,e[t]=r[0],O.hash[r[0]]=r[1],e}),{})},setSizes=function(e){return a(e)?(f(e,(function(r,t){var n=O.indexes[r];if(!l(n))return u("Invalid ".concat(r," for theme size! Allowed keys are xsmall | small | medium | large | xlarge"),"warn");var o=s(e[r]);if(!o||!O.entries[n])return u("Invalid size entry. Size must be a number and the size entry must exist!","Size: ".concat(o),"Entry: ".concat(O.entries[n]),"warn");O.entries[n]=[r,o]})),buildSizeMapParts(),O):u("setDimensions method requires an argument of type 'Object'.\nReceived: ",e,"error")},getSize=function(e){var r=n(e)&&e||s(e),t=O.entries.reduce((function(e,t){var n=_slicedToArray(t,2),o=n[0],i=n[1];return r>=i&&(e?i>O.hash[e]&&(e=o):e=o),e}),"$xsmall");return[t,O.hash[t]]},getMergeSizes=function(e){return O.entries.slice(0,O.indexes[e]+1).map((function(e){var r=_slicedToArray(e,2),t=r[0];return r[1],t}))};buildSizeMapParts();var x,T,getSizeMap=function(){return O},w=(_defineProperty(x={m:"margin",mT:"marginTop",mB:"marginBottom",mR:"marginRight",mL:"marginLeft",mH:"marginHorizontal",mV:"marginVertical",p:"padding",pT:"paddingTop",pB:"paddingBottom",pR:"paddingRight",pL:"paddingLeft",pH:"paddingHorizontal",pV:"paddingVertical",bC:"borderColor",bCT:"borderTopColor",bCB:"borderBottomColor",bCR:"borderRightColor",bCL:"borderLeftColor",bW:"borderWidth",bS:"borderStyle"},"bC","borderColor"),_defineProperty(x,"bRad","borderRadius"),_defineProperty(x,"c","color"),_defineProperty(x,"bg","background"),_defineProperty(x,"bgC","backgroundColor"),_defineProperty(x,"d","display"),_defineProperty(x,"ovf","overflow"),_defineProperty(x,"ovfX","overflowX"),_defineProperty(x,"ovfY","overflowY"),_defineProperty(x,"pos","position"),_defineProperty(x,"z","zIndex"),_defineProperty(x,"tp","top"),_defineProperty(x,"bt","bottom"),_defineProperty(x,"btm","bottom"),_defineProperty(x,"lt","left"),_defineProperty(x,"rt","right"),_defineProperty(x,"bxS","boxShadow"),_defineProperty(x,"op","opacity"),_defineProperty(x,"ptrE","pointerEvents"),_defineProperty(x,"otl","outline"),_defineProperty(x,"fl","flex"),_defineProperty(x,"flD","flexDirection"),_defineProperty(x,"flWr","flexWrap"),_defineProperty(x,"flB","flexBasis"),_defineProperty(x,"flS","flexShrink"),_defineProperty(x,"jtC","justifyContent"),_defineProperty(x,"alC","alignContent"),_defineProperty(x,"alS","alignSelf"),_defineProperty(x,"alI","alignItems"),_defineProperty(x,"w","width"),_defineProperty(x,"h","height"),_defineProperty(x,"minH","minHeight"),_defineProperty(x,"maxH","maxHeight"),_defineProperty(x,"minW","minWidth"),_defineProperty(x,"maxW","maxWidth"),_defineProperty(x,"ftF","fontFamily"),_defineProperty(x,"ftSz","fontSize"),_defineProperty(x,"ftS","fontStyle"),_defineProperty(x,"ftWt","fontWeight"),_defineProperty(x,"lnH","lineHeight"),_defineProperty(x,"ltrS","letterSpacing"),_defineProperty(x,"txAl","textAlign"),_defineProperty(x,"txDc","textDecoration"),_defineProperty(x,"txDL","textDecorationLine"),x),getRNPlatform=function(){return T||(e=require("react-native").Platform,T=e);var e},A=["$class","$className"],buildPlatforms=function(e){var r,t,n=Object.keys(e).filter((function(r){return e[r]}));return(r=getRNPlatform(),t=["$"+m(r,"OS")],"web"!==m(r,"OS")&&t.push("$native"),t.concat([P.PLATFORM.ALL])).reduce((function(r,t){return!1!==e[t]&&-1===r.indexOf(t)&&r.unshift(t),r}),n)},E=function buildSizedThemes(e,r,t){return c(e,(function(r,n,o){if(w[r]&&(d(e,r),e[w[r]]=n),!a(n))return o;if(r===t){var i=p(o,n);return d(e,[t]),i}var u=buildSizedThemes(n,o[r]||{},t);return y(u)||(o[r]=u),o}),r)},updatePlatformTheme=function(e,r,t){if(!a(t))return t;var n=t.$class,o=t.$className,i=_objectWithoutProperties(t,A),u=getPlatformTheme(function(e,r){var t=getSizeMap(),n=[],o=Object.keys(e).reduce((function(o,i){return"$"!==i[0]||t.hash[i]?o[i]=e[i]:-1!==r.indexOf(i)&&n.push(e[i]),o}),{});return n.length?p.apply(void 0,n):o}(i,e),e,r),f=o||n;return f&&(u.$class=f),u},getPlatformTheme=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e?c(e,(function(e,n,o){return o[e]=updatePlatformTheme(r,t,n),o}),e):e},S={},getCurrentTheme=function(){return S},getTheme=function(){for(var e=getCurrentTheme(),r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return p.apply(void 0,_toConsumableArray(t.reduce((function(r,t){var n=a(t)?t:h(t)||o(t)?m(e,t):null;return n&&r.push(n),r}),[])))},j=["$xsmall","$small","$medium","$large","$xlarge"],$={},mergeWithDefault=function(e,r,t){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=getRNPlatform();return Object.keys(getSizeMap().hash).reduce((function(r,t){var n=E(e,e[t]||{},t);return y(n)||(r[t]=n),r}),getPlatformTheme(e,buildPlatforms(r),t))}(p(r&&e!==r?r:{},e),t)},buildTheme=function(e,r,t,n,o){if(!a(e))return e;a(o)||(o={});var i=_slicedToArray(getSize(r),2),u=i[0],f={key:u,size:i[1],width:r,height:t};if($&&e===$.theme)return useCachedTheme($,f);var l=mergeWithDefault(e,n,o);l.$xsmall,l.$small,l.$medium,l.$large,l.$xlarge;var s=_objectWithoutProperties(l,j);return configureBuiltTheme($={extraTheme:s,mergedTheme:l,theme:e,key:u},f)},useCachedTheme=function(e,r){return r.key!==e.key?configureBuiltTheme(e,r):b((function(){var e=getCurrentTheme();return fireThemeEvent(P.BUILD_EVENT,e),e}))},configureBuiltTheme=function(e,r){var t=e.mergedTheme,n=e.extraTheme;$.key=r.key;var o=r.size?function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=getMergeSizes(r);return p.apply(void 0,[t].concat(_toConsumableArray(n.reduce((function(r,t){return e[t]&&r.push(e[t]),r}),[]))))}(t,r.key,n):n;return o.get=getTheme,o.RTMeta=_objectSpread2(_objectSpread2({},o.RTMeta),r),S=o,fireThemeEvent(P.BUILD_EVENT,o),o},L={},setDefaultTheme=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!a(e))return console.warn("setDefaultTheme method requires an theme object as the first argument. Received: ",e);L=r?p(L,e):e;var t=g.get("window"),n=buildTheme(L,t.width,t.height);return n},getDefaultTheme=function(){return L},D=e.createContext(getDefaultTheme()),useTheme=function(){return r(D)};export{g as D,D as R,_slicedToArray as _,_extends as a,buildTheme as b,getDefaultTheme as c,getCurrentTheme as d,_toConsumableArray as e,getSizeMap as f,getSize as g,getMergeSizes as h,addThemeEvent as i,fireThemeEvent as j,setDefaultTheme as k,_defineProperty as l,removeThemeEvent as r,setSizes as s,useTheme as u};
//# sourceMappingURL=useTheme-25c2cf0e.js.map
