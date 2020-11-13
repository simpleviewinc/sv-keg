import{omitKeys as e,pickKeys as r,isArr as t,exists as o,isStr as n,eitherArr as a,isObj as i}from"@keg-hub/jsutils";import{j as l,C as u,m as d,u as s,n as f,a as c}from"./useTheme-b64f084d.js";import p,{useMemo as m}from"react";var g,v={important:[],filter:["aspectRatio","elevation","overlayColor","resizeMode","tintColor","backgroundSize","animationKeyframes","placeholderTextColor","pointerEvents","scrollbarWidth"]},h=d(),b=new Set,getKegSheet=function(){return g=g||document.head.querySelector(u.KEG_STYLES_TAG_ID)},y=/[A-Z]/g,x=/^ms-/,w={},toHyphenLower=function(e){return"-"+e.toLowerCase()},getSelector=function(e,r,a){var filterWithPrefix=function(e){return e&&a?e.startsWith(a):e},i=!!o(e)&&(t(e)?e.filter(filterWithPrefix).pop():n(e)&&e.split(" ").filter(filterWithPrefix).pop()),l="keg-".concat(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!n(e)||0==e.length)return 0;e=e.split("").reverse().join("");for(var t=0,o=0;o<e.length;o++){var a=e.charCodeAt(o);t=(t<<5)-t+a,t="".concat(Math.abs(t&t))}return r?t.slice(0,r):t}(r));return{hashClass:l,selector:i?".".concat(i.trim(),".").concat(l).trim():".".concat(l).trim()}},addStylesToDom=function(e,r){if(h&&r&&!function(e){return b.has(e)}(e)){b.add(e);var t=getKegSheet();t.sheet.insertRule("@media all {".concat(r.all,"}"))}};function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,r){return e(r={exports:{}},r.exports),r.exports}l(u.BUILD_EVENT,(function(){b.clear(),getKegSheet().textContent=""})),function(){if(h){if(g=document.head.querySelector(u.KEG_STYLES_TAG_ID))return g;(g=document.createElement("style")).id=u.KEG_STYLES_TAG_ID,document.head.append(g)}}();var _=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}));unwrapExports(_);var S=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,t){if(e.hasOwnProperty(r)){for(var n={},a=e[r],i=(0,o.default)(r),l=Object.keys(t),u=0;u<l.length;u++){var d=l[u];if(d===r)for(var s=0;s<a.length;s++)n[a[s]+i]=t[r];n[d]=t[d]}return n}return t};var t,o=(t=_)&&t.__esModule?t:{default:t}}));unwrapExports(S);var k=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,t,o,n){for(var a=0,i=e.length;a<i;++a){var l=e[a](r,t,o,n);if(l)return l}}}));unwrapExports(k);var M=createCommonjsModule((function(e,r){function addIfNew(e,r){-1===e.indexOf(r)&&e.push(r)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if(Array.isArray(r))for(var t=0,o=r.length;t<o;++t)addIfNew(e,r[t]);else addIfNew(e,r)}}));unwrapExports(M);var C=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e instanceof Object&&!Array.isArray(e)}}));unwrapExports(C);var E=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r=e.prefixMap,i=e.plugins;return function prefix(e){for(var l in e){var u=e[l];if((0,a.default)(u))e[l]=prefix(u);else if(Array.isArray(u)){for(var d=[],s=0,f=u.length;s<f;++s){var c=(0,o.default)(i,l,u[s],e,r);(0,n.default)(d,c||u[s])}d.length>0&&(e[l]=d)}else{var p=(0,o.default)(i,l,u,e,r);p&&(e[l]=p),e=(0,t.default)(r,l,e)}}return e}};var t=_interopRequireDefault(S),o=_interopRequireDefault(k),n=_interopRequireDefault(M),a=_interopRequireDefault(C);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}}));unwrapExports(E);var O=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("string"==typeof r&&"text"===r)return["-webkit-text","text"]}}));unwrapExports(O);var R=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return"string"==typeof e&&t.test(e)};var t=/-webkit-|-moz-|-ms-/;e.exports=r.default}));unwrapExports(R);var j=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("string"==typeof r&&!(0,o.default)(r)&&r.indexOf("cross-fade(")>-1)return n.map((function(e){return r.replace(/cross-fade\(/g,e+"cross-fade(")}))};var t,o=(t=R)&&t.__esModule?t:{default:t};var n=["-webkit-",""]}));unwrapExports(j);var P=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("cursor"===e&&o.hasOwnProperty(r))return t.map((function(e){return e+r}))};var t=["-webkit-","-moz-",""],o={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0}}));unwrapExports(P);var B=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("string"==typeof r&&!(0,o.default)(r)&&r.indexOf("filter(")>-1)return n.map((function(e){return r.replace(/filter\(/g,e+"filter(")}))};var t,o=(t=R)&&t.__esModule?t:{default:t};var n=["-webkit-",""]}));unwrapExports(B);var T=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("display"===e&&t.hasOwnProperty(r))return t[r]};var t={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]}}));unwrapExports(T);var D=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,i){Object.prototype.hasOwnProperty.call(o,e)&&(i[o[e]]=t[r]||r);if("flex"===e){if(Object.prototype.hasOwnProperty.call(n,r))return void(i.msFlex=n[r]);if(a.test(r))return void(i.msFlex=r+" 1 0%");var l=r.split(/\s/);switch(l.length){case 1:return void(i.msFlex="1 1 "+r);case 2:return void(a.test(l[1])?i.msFlex=l[0]+" "+l[1]+" 0%":i.msFlex=l[0]+" 1 "+l[1]);default:i.msFlex=r}}};var t={"space-around":"distribute","space-between":"justify","flex-start":"start","flex-end":"end"},o={alignContent:"msFlexLinePack",alignSelf:"msFlexItemAlign",alignItems:"msFlexAlign",justifyContent:"msFlexPack",order:"msFlexOrder",flexGrow:"msFlexPositive",flexShrink:"msFlexNegative",flexBasis:"msFlexPreferredSize"},n={auto:"1 1 auto",inherit:"inherit",initial:"0 1 auto",none:"0 0 auto",unset:"unset"},a=/^\d+(\.\d+)?$/}));unwrapExports(D);var W=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,n){"flexDirection"===e&&"string"==typeof r&&(r.indexOf("column")>-1?n.WebkitBoxOrient="vertical":n.WebkitBoxOrient="horizontal",r.indexOf("reverse")>-1?n.WebkitBoxDirection="reverse":n.WebkitBoxDirection="normal");o.hasOwnProperty(e)&&(n[o[e]]=t[r]||r)};var t={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"},o={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"}}));unwrapExports(W);var A=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("string"==typeof r&&!(0,o.default)(r)&&a.test(r))return n.map((function(e){return r.replace(a,(function(r){return e+r}))}))};var t,o=(t=R)&&t.__esModule?t:{default:t};var n=["-webkit-","-moz-",""],a=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi}));unwrapExports(A);var I=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var _slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(n)throw a}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function isSimplePositionValue(e){return"number"==typeof e&&!isNaN(e)}function isComplexSpanValue(e){return"string"==typeof e&&e.includes("/")}r.default=function(e,r,t){if("display"===e&&r in o)return o[r];if(e in n){(0,n[e])(r,t)}};var t=["center","end","start","stretch"],o={"inline-grid":["-ms-inline-grid","inline-grid"],grid:["-ms-grid","grid"]},n={alignSelf:function(e,r){t.indexOf(e)>-1&&(r.msGridRowAlign=e)},gridColumn:function(e,r){if(isSimplePositionValue(e))r.msGridColumn=e;else if(isComplexSpanValue(e)){var t=e.split("/"),o=_slicedToArray(t,2),a=o[0],i=o[1];n.gridColumnStart(+a,r);var l=i.split(/ ?span /),u=_slicedToArray(l,2),d=u[0],s=u[1];""===d?n.gridColumnEnd(+a+ +s,r):n.gridColumnEnd(+i,r)}else n.gridColumnStart(e,r)},gridColumnEnd:function(e,r){var t=r.msGridColumn;isSimplePositionValue(e)&&isSimplePositionValue(t)&&(r.msGridColumnSpan=e-t)},gridColumnStart:function(e,r){isSimplePositionValue(e)&&(r.msGridColumn=e)},gridRow:function(e,r){if(isSimplePositionValue(e))r.msGridRow=e;else if(isComplexSpanValue(e)){var t=e.split("/"),o=_slicedToArray(t,2),a=o[0],i=o[1];n.gridRowStart(+a,r);var l=i.split(/ ?span /),u=_slicedToArray(l,2),d=u[0],s=u[1];""===d?n.gridRowEnd(+a+ +s,r):n.gridRowEnd(+i,r)}else n.gridRowStart(e,r)},gridRowEnd:function(e,r){var t=r.msGridRow;isSimplePositionValue(e)&&isSimplePositionValue(t)&&(r.msGridRowSpan=e-t)},gridRowStart:function(e,r){isSimplePositionValue(e)&&(r.msGridRow=e)},gridTemplateColumns:function(e,r){r.msGridColumns=e},gridTemplateRows:function(e,r){r.msGridRows=e},justifySelf:function(e,r){t.indexOf(e)>-1&&(r.msGridColumnAlign=e)}}}));unwrapExports(I);var F=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("string"==typeof r&&!(0,o.default)(r)&&r.indexOf("image-set(")>-1)return n.map((function(e){return r.replace(/image-set\(/g,e+"image-set(")}))};var t,o=(t=R)&&t.__esModule?t:{default:t};var n=["-webkit-",""]}));unwrapExports(F);var q=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,o){if(Object.prototype.hasOwnProperty.call(t,e))for(var n=t[e],a=0,i=n.length;a<i;++a)o[n[a]]=r};var t={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]}}));unwrapExports(q);var z=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if("position"===e&&"sticky"===r)return["-webkit-sticky","sticky"]}}));unwrapExports(z);var N=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if(o.hasOwnProperty(e)&&n.hasOwnProperty(r))return t.map((function(e){return e+r}))};var t=["-webkit-","-moz-",""],o={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},n={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0}}));unwrapExports(N);var L=/[A-Z]/g,G=/^ms-/,V={};function toHyphenLower$1(e){return"-"+e.toLowerCase()}function hyphenateStyleName(e){if(V.hasOwnProperty(e))return V[e];var r=e.replace(L,toHyphenLower$1);return V[e]=G.test(r)?"-"+r:r}var Y=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return(0,o.default)(e)};var t,o=(t=hyphenateStyleName)&&t.__esModule?t:{default:t};e.exports=r.default}));unwrapExports(Y);var K=createCommonjsModule((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,l,u){if("string"==typeof r&&a.hasOwnProperty(e)){var d=function(e,r){if((0,o.default)(e))return e;for(var n=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g),a=0,l=n.length;a<l;++a){var u=n[a],d=[u];for(var s in r){var f=(0,t.default)(s);if(u.indexOf(f)>-1&&"order"!==f)for(var c=r[s],p=0,m=c.length;p<m;++p)d.unshift(u.replace(f,i[c[p]]+f))}n[a]=d.join(",")}return n.join(",")}(r,u),s=d.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(e){return!/-moz-|-ms-/.test(e)})).join(",");if(e.indexOf("Webkit")>-1)return s;var f=d.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(e){return!/-webkit-|-ms-/.test(e)})).join(",");return e.indexOf("Moz")>-1?f:(l["Webkit"+(0,n.default)(e)]=s,l["Moz"+(0,n.default)(e)]=f,d)}};var t=_interopRequireDefault(Y),o=_interopRequireDefault(R),n=_interopRequireDefault(_);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var a={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},i={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"}}));unwrapExports(K);var H=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t=_interopRequireDefault(O),o=_interopRequireDefault(j),n=_interopRequireDefault(P),a=_interopRequireDefault(B),i=_interopRequireDefault(T),l=_interopRequireDefault(D),u=_interopRequireDefault(W),d=_interopRequireDefault(A),s=_interopRequireDefault(I),f=_interopRequireDefault(F),c=_interopRequireDefault(q),p=_interopRequireDefault(z),m=_interopRequireDefault(N),g=_interopRequireDefault(K);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var v=["Webkit"],h=["Moz"],b=["ms"],y=["Webkit","Moz"],x=["Webkit","ms"],w=["Webkit","Moz","ms"],_={plugins:[t.default,o.default,n.default,a.default,i.default,l.default,u.default,d.default,s.default,f.default,c.default,p.default,m.default,g.default],prefixMap:{animation:v,animationDelay:v,animationDirection:v,animationFillMode:v,animationDuration:v,animationIterationCount:v,animationName:v,animationPlayState:v,animationTimingFunction:v,appearance:y,userSelect:w,textEmphasisPosition:v,textEmphasis:v,textEmphasisStyle:v,textEmphasisColor:v,boxDecorationBreak:v,clipPath:v,maskImage:v,maskMode:v,maskRepeat:v,maskPosition:v,maskClip:v,maskOrigin:v,maskSize:v,maskComposite:v,mask:v,maskBorderSource:v,maskBorderMode:v,maskBorderSlice:v,maskBorderWidth:v,maskBorderOutset:v,maskBorderRepeat:v,maskBorder:v,maskType:v,textDecorationStyle:v,textDecorationSkip:v,textDecorationLine:v,textDecorationColor:v,filter:v,fontFeatureSettings:v,breakAfter:w,breakBefore:w,breakInside:w,columnCount:y,columnFill:y,columnGap:y,columnRule:y,columnRuleColor:y,columnRuleStyle:y,columnRuleWidth:y,columns:y,columnSpan:y,columnWidth:y,writingMode:x,flex:x,flexBasis:v,flexDirection:x,flexGrow:v,flexFlow:x,flexShrink:v,flexWrap:x,alignContent:v,alignItems:v,alignSelf:v,justifyContent:v,order:v,transform:v,transformOrigin:v,transformOriginX:v,transformOriginY:v,backfaceVisibility:v,perspective:v,perspectiveOrigin:v,transformStyle:v,transformOriginZ:v,backdropFilter:v,fontKerning:v,scrollSnapType:x,scrollSnapPointsX:x,scrollSnapPointsY:x,scrollSnapDestination:x,scrollSnapCoordinate:x,shapeImageThreshold:v,shapeImageMargin:v,shapeImageOutside:v,hyphens:w,flowInto:x,flowFrom:x,regionFragment:x,textOrientation:v,textAlignLast:h,tabSize:h,wrapFlow:b,wrapThrough:b,wrapMargin:b,touchAction:b,textSizeAdjust:["ms","Webkit"],borderImage:v,borderImageOutset:v,borderImageRepeat:v,borderImageSlice:v,borderImageSource:v,borderImageWidth:v,transitionDelay:v,transitionDuration:v,transitionProperty:v,transitionTimingFunction:v}};r.default=_,e.exports=r.default}));unwrapExports(H);var U=createCommonjsModule((function(e,r){r.__esModule=!0,r.prefixInlineStyles=r.default=void 0;var t=_interopRequireDefault(E),o=_interopRequireDefault(H);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n=(0,t.default)(o.default),a=n;r.default=a;r.prefixInlineStyles=function(e){var r=n(e);return Object.keys(r).forEach((function(e){var t=r[e];Array.isArray(t)&&(r[e]=t[t.length-1])})),r}})),X=unwrapExports(U),$=(U.prefixInlineStyles,unwrapExports(createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var _default=function(e){return function flattenDown(e,r){for(var t=0;t<e.length;t++){var o=e[t];Array.isArray(o)?flattenDown(o,r):null!=o&&!1!==o&&r.push(o)}return r}(e,[])};r.default=_default,e.exports=r.default})))),Z=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t={},o={},n=1,createKey=function(e){return"r-"+e},a=function(){function ReactNativePropRegistry(){}return ReactNativePropRegistry.register=function(e){var r=n++,t=createKey(r);return o[t]=e,r},ReactNativePropRegistry.getByID=function(e){if(!e)return t;var r=createKey(e),n=o[r];return n||(console.warn("Invalid style with id `"+e+"`. Skipping ..."),t)},ReactNativePropRegistry}();r.default=a,e.exports=r.default}));unwrapExports(Z);var validateFormat=function(e){if(void 0===e)throw new Error("invariant(...): Second argument must be a string.")};var invariant_1=function(e,r){for(var t=arguments.length,o=new Array(t>2?t-2:0),n=2;n<t;n++)o[n-2]=arguments[n];if(validateFormat(r),!e){var a;if(void 0===r)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=0;(a=new Error(r.replace(/%s/g,(function(){return String(o[i++])})))).name="Invariant Violation"}throw a.framesToPop=1,a}},J=unwrapExports(createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t=_interopRequireDefault(Z);_interopRequireDefault(invariant_1);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=function flattenStyle(e){if(e){if(!Array.isArray(e))return function(e){return"number"==typeof e?t.default.getByID(e):e}(e);for(var r={},o=0,n=e.length;o<n;++o){var a=flattenStyle(e[o]);if(a)for(var i in a){var l=a[i];r[i]=l}}return r}};r.default=o,e.exports=r.default}))),Q=!("undefined"==typeof window||!window.document||!window.document.createElement),ee={canUseDOM:Q,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:Q&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:Q&&!!window.screen,isInWorker:!Q},re=createCommonjsModule((function(e,r){r.__esModule=!0,r.SYSTEM_FONT_STACK=r.MONOSPACE_FONT_STACK=r.STYLE_SHORT_FORM_EXPANSIONS=r.STYLE_GROUPS=r.STYLE_ELEMENT_ID=void 0;r.STYLE_ELEMENT_ID="react-native-stylesheet";r.STYLE_GROUPS={reset:0,modality:.1,classicReset:.5,classic:1,atomic:2.2,custom:{borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,marginHorizontal:2.1,marginVertical:2.1,paddingHorizontal:2.1,paddingVertical:2.1}};r.STYLE_SHORT_FORM_EXPANSIONS={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],margin:["marginTop","marginRight","marginBottom","marginLeft"],marginHorizontal:["marginRight","marginLeft"],marginVertical:["marginTop","marginBottom"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"],paddingHorizontal:["paddingRight","paddingLeft"],paddingVertical:["paddingTop","paddingBottom"]};r.MONOSPACE_FONT_STACK="monospace,monospace";r.SYSTEM_FONT_STACK='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif'}));unwrapExports(re);re.SYSTEM_FONT_STACK,re.MONOSPACE_FONT_STACK,re.STYLE_SHORT_FORM_EXPANSIONS,re.STYLE_GROUPS,re.STYLE_ELEMENT_ID;var te=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridColumn:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},o=["ms","Moz","O","Webkit"];Object.keys(t).forEach((function(e){o.forEach((function(r){t[function(e,r){return e+r.charAt(0).toUpperCase()+r.substring(1)}(r,e)]=t[e]}))}));var n=t;r.default=n,e.exports=r.default}));unwrapExports(te);var oe=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var _default=function(e){return"currentcolor"===e||"currentColor"===e||"inherit"===e||0===e.indexOf("var(")};r.default=_default,e.exports=r.default}));function normalizeColor(e){var r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=ae.hex6.exec(e))?parseInt(r[1]+"ff",16)>>>0:ie.hasOwnProperty(e)?ie[e]:(r=ae.rgb.exec(e))?(parse255(r[1])<<24|parse255(r[2])<<16|parse255(r[3])<<8|255)>>>0:(r=ae.rgba.exec(e))?(parse255(r[1])<<24|parse255(r[2])<<16|parse255(r[3])<<8|parse1(r[4]))>>>0:(r=ae.hex3.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=ae.hex8.exec(e))?parseInt(r[1],16)>>>0:(r=ae.hex4.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=ae.hsl.exec(e))?(255|hslToRgb(parse360(r[1]),parsePercentage(r[2]),parsePercentage(r[3])))>>>0:(r=ae.hsla.exec(e))?(hslToRgb(parse360(r[1]),parsePercentage(r[2]),parsePercentage(r[3]))|parse1(r[4]))>>>0:null}function hue2rgb(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function hslToRgb(e,r,t){var o=t<.5?t*(1+r):t+r-t*r,n=2*t-o,a=hue2rgb(n,o,e+1/3),i=hue2rgb(n,o,e),l=hue2rgb(n,o,e-1/3);return Math.round(255*a)<<24|Math.round(255*i)<<16|Math.round(255*l)<<8}unwrapExports(oe);var ne="[-+]?\\d*\\.?\\d+";function toArray(e){return Array.prototype.slice.call(e,0)}function call(){return"\\(\\s*("+toArray(arguments).join(")\\s*,\\s*(")+")\\s*\\)"}var ae={rgb:new RegExp("rgb"+call(ne,ne,ne)),rgba:new RegExp("rgba"+call(ne,ne,ne,ne)),hsl:new RegExp("hsl"+call(ne,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%")),hsla:new RegExp("hsla"+call(ne,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%",ne)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/};function parse255(e){var r=parseInt(e,10);return r<0?0:r>255?255:r}function parse360(e){return(parseFloat(e)%360+360)%360/360}function parse1(e){var r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function parsePercentage(e){var r=parseFloat(e,10);return r<0?0:r>100?1:r/100}var ie={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199};normalizeColor.rgba=function(e){return{r:Math.round((4278190080&e)>>>24),g:Math.round((16711680&e)>>>16),b:Math.round((65280&e)>>>8),a:((255&e)>>>0)/255}};var le=normalizeColor,ue=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t,o=(t=le)&&t.__esModule?t:{default:t};var _default=function(e){if(null==e)return e;var r=(0,o.default)(e);return null!=r?r=(r<<24|r>>>8)>>>0:void 0};r.default=_default,e.exports=r.default}));unwrapExports(ue);var de=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t=_interopRequireDefault(oe),o=_interopRequireDefault(ue);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default=function(e,r){if(void 0===r&&(r=1),null!=e){if("string"==typeof e&&(0,t.default)(e))return e;var n=(0,o.default)(e);if(null!=n)return"rgba("+(n>>16&255)+","+(n>>8&255)+","+(255&n)+","+((n>>24&255)/255*r).toFixed(2)+")"}};r.default=_default,e.exports=r.default}));unwrapExports(de);var se=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=function(e,r){var a=e;null!=r&&t.default[r]||"number"!=typeof e?null!=r&&n[r]&&(a=(0,o.default)(e)):a=e+"px";return a};var t=_interopRequireDefault(te),o=_interopRequireDefault(de);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};e.exports=r.default}));unwrapExports(se);var fe=unwrapExports(createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t,o=(t=se)&&t.__esModule?t:{default:t};var n={},a=!ee.canUseDOM||null!=window.CSS&&null!=window.CSS.supports&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),mapTransform=function(e){var r=Object.keys(e)[0],t=e[r];return"matrix"===r||"matrix3d"===r?r+"("+t.join(",")+")":r+"("+(0,o.default)(t,r)+")"},_default=function(e){if(!e)return n;var r={};return Object.keys(e).sort().forEach((function(t){var n=(0,o.default)(e[t],t);if(null!=n)switch(t){case"aspectRatio":case"elevation":case"overlayColor":case"resizeMode":case"tintColor":break;case"backgroundClip":"text"===n&&(r.backgroundClip=n,r.WebkitBackgroundClip=n);break;case"flex":-1===n?(r.flexGrow=0,r.flexShrink=1,r.flexBasis="auto"):r.flex=n;break;case"font":r[t]=n.replace("System",re.SYSTEM_FONT_STACK);break;case"fontFamily":if(n.indexOf("System")>-1){var i=n.split(/,\s*/);i[i.indexOf("System")]=re.SYSTEM_FONT_STACK,r[t]=i.join(",")}else r[t]="monospace"===n?re.MONOSPACE_FONT_STACK:n;break;case"fontVariant":Array.isArray(n)&&n.length>0&&(r.fontVariant=n.join(" "));break;case"textAlignVertical":r.verticalAlign="center"===n?"middle":n;break;case"textDecorationLine":a?r.textDecorationLine=n:r.textDecoration=n;break;case"transform":case"transformMatrix":!function(e,r){var t=r.transform;Array.isArray(r.transform)&&(t=r.transform.map(mapTransform).join(" ")),e.transform=t}(r,e);break;case"writingDirection":r.direction=n;break;default:var l=re.STYLE_SHORT_FORM_EXPANSIONS[t];l?l.forEach((function(t,o){void 0===e[t]&&(r[t]=n)})):r[t]=Array.isArray(n)?n.join(","):n}})),r};r.default=_default,e.exports=r.default}))),ce=createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t=_interopRequireDefault(de),o=_interopRequireDefault(se);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n={height:0,width:0},_default=function(e){var r=e.shadowColor,a=e.shadowOffset,i=e.shadowOpacity,l=e.shadowRadius,u=a||n,d=u.height,s=u.width,f=(0,o.default)(s),c=(0,o.default)(d),p=(0,o.default)(l||0),m=(0,t.default)(r||"black",i);if(null!=m&&null!=f&&null!=c&&null!=p)return f+" "+c+" "+p+" "+m};r.default=_default,e.exports=r.default}));unwrapExports(ce);var pe=unwrapExports(createCommonjsModule((function(e,r){r.__esModule=!0,r.default=void 0;var t=_interopRequireDefault(se),o=_interopRequireDefault(ce);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var n={height:0,width:0};var _default=function(e){var r,a,i,l,u=e.shadowColor,d=e.shadowOffset,s=e.shadowOpacity,f=e.shadowRadius,c=e.textShadowColor,p=e.textShadowOffset,m=e.textShadowRadius,g=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["shadowColor","shadowOffset","shadowOpacity","shadowRadius","textShadowColor","textShadowOffset","textShadowRadius"]);return null==u&&null==d&&null==s&&null==f||(r=g,i=(a=e).boxShadow,null!=(l=(0,o.default)(a))&&(r.boxShadow=i?i+", "+l:l)),null==c&&null==p&&null==m||function(e,r){var o=r.textShadowColor,a=r.textShadowOffset,i=r.textShadowRadius,l=a||n,u=l.height,d=l.width,s=i||0,f=(0,t.default)(d),c=(0,t.default)(u),p=(0,t.default)(s),m=(0,t.default)(o,"textShadowColor");!m||0===u&&0===d&&0===s||null==f||null==c||null==p||(e.textShadow=f+" "+c+" "+p+" "+m)}(g,e),g};r.default=_default,e.exports=r.default}))),me=Object.freeze({}),createBlock=function(e,r){var o=v.important.concat(null==r?void 0:r.important),n=X(fe(e)),a=Object.keys(n).map((function(e){var r=function(e,r,t){return t.includes(e)?"".concat(r," !important"):r}(e,n[e],o),a=function(e){if(w.hasOwnProperty(e))return w[e];var r=e.replace(y,toHyphenLower);return w[e]=x.test(r)?"-"+r:r}(e);return t(r)?r.map((function(e){return"".concat(a,":").concat(e)})).join(";"):"".concat(a,":").concat(r)})).sort().join(";");return"{".concat(a,"}")},convertToCss=function(o,n){return $(a(o,[o])).reduce((function(o,a){if(!i(a))return o;var l=function(o,n){var a=t(n)?v.filter.concat(n):v.filter;return{style:e(o,a),filtered:r(o,a)}}(a,null==n?void 0:n.filter),u=l.style,d=l.filtered;Object.assign(o.filtered,d);var s=J(u),f=pe(s);return o.blocks.push(createBlock(f,n)),o}),{blocks:[],filtered:{}})},useStyleTag=function(e){var r,t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;n=i(n)?n:me;var l=s(),u=null==l||null===(r=l.RTMeta)||void 0===r?void 0:r.size,d=null==l||null===(t=l.RTMeta)||void 0===t?void 0:t.key;return m((function(){var r=convertToCss(e,n),t=r.blocks,i=r.filtered,l=getSelector(o,t.join(""),"keg"),u=l.hashClass,d=l.selector,s=t.reduce((function(e,r){var t="".concat(d).concat(r);return e.all+=t,e.rules.push(t),e}),{all:"",rules:[]});return addStylesToDom(d,s),{css:s,filteredStyle:i,classList:a(o,[o]).concat([u])}}),[e,o,u,d,n])},ge=p.forwardRef((function(e,r){var t=e.Component,o=e.children,n=e.config,a=e.className,i=e.style,l=f(e,["Component","children","config","className","style"]),u=n.className,d=useStyleTag(i,a||u,n),s=d.classList,m=d.filteredStyle;return p.createElement(t,c({},l,{style:m,ref:r,className:s}),o)})),StyleInjector=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p.forwardRef((function(t,o){var n=t.style,a=f(t,["style"]);return n?p.createElement(ge,c({},a,{style:n,config:r,Component:e,ref:o})):p.createElement(e,c({},a,{style:n,ref:o}))}))};export{StyleInjector,convertToCss,createBlock,useStyleTag};
//# sourceMappingURL=styleInjector.js.map
