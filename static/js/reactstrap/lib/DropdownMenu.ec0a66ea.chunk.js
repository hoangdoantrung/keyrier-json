(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{159:function(e,t,i){"use strict";var o=i(13);t.__esModule=!0,t.default=void 0;var a=o(i(23)),d=o(i(25)),l=o(i(39)),s=o(i(0)),r=o(i(6)),n=o(i(11)),u=i(83),p=i(14),f={tag:p.tagPropType,children:r.default.node.isRequired,right:r.default.bool,flip:r.default.bool,modifiers:r.default.object,className:r.default.string,cssModule:r.default.object,persist:r.default.bool},c={isOpen:r.default.bool.isRequired,direction:r.default.oneOf(["up","down","left","right"]).isRequired,inNavbar:r.default.bool.isRequired},m={flip:{enabled:!1}},b={up:"top",left:"left",right:"right",down:"bottom"},g=function(e,t){var i=e.className,o=e.cssModule,r=e.right,f=e.tag,c=e.flip,g=e.modifiers,h=e.persist,w=(0,l.default)(e,["className","cssModule","right","tag","flip","modifiers","persist"]),v=(0,p.mapToCssModules)((0,n.default)(i,"dropdown-menu",{"dropdown-menu-right":r,show:t.isOpen}),o),N=f;if(h||t.isOpen&&!t.inNavbar){N=u.Popper;var M=b[t.direction]||"bottom",O=r?"end":"start";w.placement=M+"-"+O,w.component=f,w.modifiers=c?g:(0,d.default)({},g,m)}return s.default.createElement(N,(0,a.default)({tabIndex:"-1",role:"menu"},w,{"aria-hidden":!t.isOpen,className:v,"x-placement":w.placement}))};g.propTypes=f,g.defaultProps={tag:"div",flip:!0},g.contextTypes=c;var h=g;t.default=h}}]);
//# sourceMappingURL=DropdownMenu.ec0a66ea.chunk.js.map