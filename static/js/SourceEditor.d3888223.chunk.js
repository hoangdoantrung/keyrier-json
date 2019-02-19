(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{180:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(19),l=n(50),c=n(10),o=n(52),u=n(0),i=n(2),m=n(13),s=n.n(m),d=n(21),b=n(6),h=n(14),f=n(51),E=n(49),p=Object(r.memo)(Object(E.a)(function(e){var t=e.header,n=e.onRemove,a=e.onChange,l=e.id;return r.createElement("div",{className:"row align-items-center",key:l},r.createElement("div",{className:"col-sm-5"},r.createElement("input",{className:"form-control-lg form-control",value:t.key,id:"headerName".concat(l),type:"text",name:"headerName".concat(l),placeholder:"enter an name",onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a(Object(u.a)({},t,{key:e.target.value}))})})),r.createElement("div",{className:"col-sm-5"},r.createElement("input",{className:"form-control-lg form-control",value:t.value,type:"text",name:"headerValue".concat(l),id:"headerValue".concat(l),placeholder:"enter an value",onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a(Object(u.a)({},t,{value:e.target.value}))})})),r.createElement("div",{className:"col-sm-2"},r.createElement(f.b,{outline:!0,color:"danger",onClick:n},"remove")))})),g=n(56),O=Object(a.b)(null,{setSource:l.i})(Object(r.memo)(Object(E.a)(function(e){var t=e.onRequestSucceed,n=e.setSource,a=Object(g.a)("GET"),l=Object(o.a)(a,2),c=l[0],m=l[1],E=Object(g.a)("https://rickandmortyapi.com/api/character/"),O=Object(o.a)(E,2),v=O[0],j=O[1],y=Object(g.a)(""),k=Object(o.a)(y,2),C=k[0],N=k[1],w=Object(r.useState)([{key:"Accept",value:"application/json"}]),S=Object(o.a)(w,2),q=S[0],x=S[1],R=Object(r.useState)(null),F=Object(o.a)(R,2),T=F[0],P=F[1],A=Object(g.b)(),L=Object(o.a)(A,2),U=L[0],M=L[1],_=function(){var e=Object(d.a)(s.a.mark(function e(){var r,a,l,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return P(null),r={method:c,headers:q.map(function(e){return[e.key,e.value]}),body:U?C:null},a=new Request(v,r),Object(b.b)("request",{url:a.url,method:a.method,mode:a.mode,body:a.body,headers:Array.from(a.headers.entries()),cache:a.cache,credentials:a.credentials,redirect:a.redirect,referrer:a.referrer}),e.prev=4,e.next=7,fetch(a);case 7:return o=e.sent,e.next=10,o.json();case 10:l=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),Object(b.a)("HttpRequestSource.submit",e.t0),P(e.t0),e.abrupt("return");case 18:n(Object(h.b)(l)),t();case 20:case"end":return e.stop()}},e,this,[[4,13]])}));return function(){return e.apply(this,arguments)}}();return r.createElement(r.Fragment,null,r.createElement(f.k,null,r.createElement("label",{htmlFor:"requestMethod"},"Method"),r.createElement("select",{className:"form-control-lg form-control",defaultValue:c,name:"requestMethod",id:"requestMethod",onChange:m},r.createElement("option",null,"GET"),r.createElement("option",null,"POST"),r.createElement("option",null,"PUT"),r.createElement("option",null,"OPTIONS"))),r.createElement(f.k,null,r.createElement("label",{htmlFor:"requestUrl"},"Request URL"),r.createElement("input",{defaultValue:v,className:"form-control-lg form-control",type:"url",name:"requestUrl",id:"requestUrl",placeholder:"enter an URL",onChange:j})),r.createElement("div",{className:"position-relative form-check"},r.createElement("label",{className:"form-check-label"},r.createElement("input",{type:"checkbox",className:"form-check-input",onChange:M})," Add body")),r.createElement(f.j,{inline:!0,hidden:!U},r.createElement(f.k,null,r.createElement("label",null,"Body"),r.createElement("input",{className:"form-control-lg form-control",type:"textarea",value:C,onChange:N})," ")),r.createElement("label",{htmlFor:"headers"},"Request headers")," ",r.createElement(f.b,{outline:!0,color:"primary",onClick:function(){return x([].concat(Object(i.a)(q),[{key:"name-".concat(q.length+1),value:"value"}]))}},"Add header"),r.createElement("br",null),r.createElement("br",null),q.map(function(e,t){return r.createElement(p,{header:e,key:t,id:t,onChange:function(e){q[t]=Object(u.a)({},e),x(Object(i.a)(q))},onRemove:function(){return x(q.filter(function(t){return t!==e}))}})}),r.createElement("br",null),r.createElement(f.b,{block:!0,color:"primary",onClick:_},"Submit"),function(e){return e?r.createElement(f.a,{color:"danger"},"Error: ",e.message?e.message:"",e.stack?e.stack:""):r.createElement(r.Fragment,null)}(T))}))),v=(n(180),function(e,t){return function(n){if(Object(b.b)("onFileChange"),e(),n.target.files&&n.target.files.length>0){var r=new FileReader;Object(b.b)("e.target.files",n.target.files[0].name),r.onload=function(){r.result&&t(r.result.toString())},r.readAsText(n.target.files[0])}}}),j=Object(a.b)(function(){return{}},{onFileContentReady:l.i,onReset:l.b,onClear:l.a})(Object(r.memo)(Object(E.a)(function(e){var t=e.onReset,n=e.onFileContentReady,a=e.onClear,l=Object(g.b)(),c=Object(o.a)(l,2),u=c[0],i=c[1],m=Object(g.b)(),s=Object(o.a)(m,2),d=s[0],b=s[1];return r.createElement(r.Fragment,null,r.createElement(f.d,{vertical:!0},r.createElement(f.c,{isOpen:u,toggle:i},r.createElement(f.i,{caret:!0,color:"primary"},"Import"),r.createElement(f.h,null,r.createElement(f.g,{toggle:!1},r.createElement("label",null,"Browse JSON file...",r.createElement("input",{type:"file",name:"file",id:"sourceFile",style:{display:"none"},onChange:v(i,n)}))),r.createElement(f.g,{onClick:b},r.createElement("label",null,"HTTP request")),r.createElement(f.g,{onClick:t},r.createElement("label",null,"Reset")))),r.createElement(f.b,{color:"primary",onClick:a},"Clear")),r.createElement(f.l,{id:"requestModal",role:"dialog",size:"lg",isOpen:d,toggle:b},r.createElement(f.o,{toggle:b},"Import JSON from an HTTP request"),r.createElement(f.m,null,r.createElement(O,{onRequestSucceed:b})),r.createElement(f.n,null,r.createElement(f.b,{color:"secondary",onClick:b},"Cancel"))))}))),y=n(64),k=n(20);t.default=Object(a.b)(function(e){return{sourceText:Object(k.l)(e)}},{onChange:l.i})(Object(r.memo)(function(e){var t=e.onChange,n=e.sourceText;return r.createElement(r.Fragment,null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-10 offset-sm-2"},r.createElement("h3",null,"1. Paste your JSON:"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-2"},r.createElement(j,null)),r.createElement("div",{className:"col-sm-10"},r.createElement(y.a,{mode:"json",theme:"monokai",name:"sourceAceEditor",onChange:t,fontSize:13,cursorStart:1,showPrintMargin:!1,showGutter:!0,highlightActiveLine:!0,value:Object(c.a)(n),debounceChangePeriod:1e3,minLines:35,maxLines:35,wrapEnabled:!0,setOptions:{showLineNumbers:!0},editorProps:{$blockScrolling:1/0},annotations:[],width:"100%"}))))}))},53:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(1),a=n(57),l=n.n(a),c=function(e){return function(e){return e.error?r.createElement("div",null,e.error):r.createElement("div",{className:l.a.loader},"")}}},57:function(e,t,n){e.exports={loader:"Loading_loader__zsQ18",spin:"Loading_spin__3n9Ub"}},64:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(13),a=n.n(r),l=n(21),c=n(53),o=n(22),u=function(){var e=Object(l.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(16).then(n.t.bind(null,75,7));case 2:return t=e.sent,e.next=5,Promise.all([n.e(10).then(n.t.bind(null,81,7)),n.e(9).then(n.t.bind(null,82,7)),n.e(37).then(n.t.bind(null,83,7)),n.e(36).then(n.t.bind(null,84,7)),n.e(6).then(n.t.bind(null,85,7)),n.e(40).then(n.t.bind(null,86,7)),n.e(5).then(n.t.bind(null,87,7)),n.e(7).then(n.t.bind(null,88,7)),n.e(8).then(n.t.bind(null,89,7))]);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),i=o({loading:Object(c.a)("AceEditor"),loader:u})}}]);
//# sourceMappingURL=SourceEditor.d3888223.chunk.js.map