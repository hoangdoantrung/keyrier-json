(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},s=d(t(0)),n=d(t(5)),o=d(t(15)),r=t(43),u=d(t(55));function d(e){return e&&e.__esModule?e:{default:e}}var f={children:n.default.node,className:n.default.string,closeClassName:n.default.string,closeAriaLabel:n.default.string,cssModule:n.default.object,color:n.default.string,fade:n.default.bool,isOpen:n.default.bool,toggle:n.default.func,tag:n.default.oneOfType([n.default.func,n.default.string]),transition:n.default.shape(u.default.propTypes),innerRef:n.default.oneOfType([n.default.object,n.default.string,n.default.func])},i={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:l({},u.default.defaultProps,{unmountOnExit:!0})};function c(e){var a=e.className,t=e.closeClassName,n=e.closeAriaLabel,d=e.cssModule,f=e.tag,i=e.color,c=e.isOpen,p=e.toggle,b=e.children,g=e.transition,m=e.fade,O=e.innerRef,v=function(e,a){var t={};for(var l in e)a.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=(0,r.mapToCssModules)((0,o.default)(a,"alert","alert-"+i,{"alert-dismissible":p}),d),h=(0,r.mapToCssModules)((0,o.default)("close",t),d),C=l({},u.default.defaultProps,g,{baseClass:m?g.baseClass:"",timeout:m?g.timeout:0});return s.default.createElement(u.default,l({},v,C,{tag:f,className:y,in:c,role:"alert",innerRef:O}),p?s.default.createElement("button",{type:"button",className:h,"aria-label":n,onClick:p},s.default.createElement("span",{"aria-hidden":"true"},"\xd7")):null,b)}c.propTypes=f,c.defaultProps=i,a.default=c}}]);
//# sourceMappingURL=Alert.cfa6d70f.chunk.js.map