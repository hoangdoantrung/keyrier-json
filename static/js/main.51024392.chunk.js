(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{10:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r=n(6),a=function(e){if(!e||""===e.trim())return"";var t=o(e);if("string"===typeof t)return t;try{return JSON.stringify(t,null,2)}catch(n){Object(r.a)(n,e)}return e},o=function(e){if(!e||""===e.trim())return null;var t=e.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f").replace(/[\u0000-\u0019]+/g,"");try{return JSON.parse(t)}catch(n){return e}}},14:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function e(t){return Array.isArray(t)?t.map(function(t){return e(t)}).join(","):"object"===typeof t?JSON.stringify(t):"undefined"===typeof t?"":null!==t&&void 0!==t?t.toString():""},a=function(e,t){return!(!e||!t)&&!!e.toLocaleLowerCase().includes(t.toLocaleLowerCase())}},20:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"h",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"p",function(){return f}),n.d(t,"n",function(){return d}),n.d(t,"o",function(){return p}),n.d(t,"m",function(){return b}),n.d(t,"a",function(){return m}),n.d(t,"b",function(){return y}),n.d(t,"k",function(){return g}),n.d(t,"l",function(){return h}),n.d(t,"j",function(){return v});var r=n(2),a=function(e){return e.app.output.errorMessage},o=function(e){return e.app.output.table.isArray},i=function(e){return e.app.output.selectedTab},u=function(e){return e.app.output.obj},c=function(e){return e.app.output.searchTerm},l=function(e){return e.app.output.match},s=function(e){return Object(r.a)(e.app.output.table.array)},f=function(e){return e.app.output.table.isModalOpen},d=function(e){return e.userSettings.globalTheme},p=function(e){return Object(r.a)(e.app.output.table.displayedColumns)},b=function(e){return Object(r.a)(e.app.output.table.array)},m=function(e){return Object(r.a)(e.app.output.table.columns)},y=function(e){return Object(r.a)(e.app.output.table.groupBy)},g=function(e){return e.app.query.text},h=function(e){return e.app.source.text},v=function(e){return e.app.query.mode}},28:function(e){e.exports={output:{selectedTab:"RawJson",text:"",obj:{},searchTerm:"",match:!1,table:{array:[],isArray:!0,isModalOpen:!1,displayedColumns:[],columns:[],groupBy:[]}},query:{mode:"Javascript",text:"\n// data is your JSON object\n// you can use any correct javascript code to query it\n// in addition of that,\n// you can use lodash helper functions. see https://lodash.com/docs/\n// ex: _.chain(data).orderBy('age', 'desc')\n\n      data\n    "},source:{text:'[{"_id":"5c69793d391abc9e9506a163","guid":"c016ad93-0763-4fea-887a-1d60662482ef","isActive":true,"balance":"$2,388.85","age":28,"eyeColor":"green","name":"Bonita Frye","tags":["quis","qui","ad"],"friends":[{"id":0,"name":"Odonnell Nieves"},{"id":1,"name":"Hurst Bonner"},{"id":2,"name":"Florine Sullivan"}]},{"_id":"5c69793db0b97bb35739b95b","guid":"32a064a0-5c72-4369-9fd9-99dc5734ae4e","isActive":false,"balance":"$1,070.37","age":35,"eyeColor":"brown","name":"Marcia Barker","tags":["tempor","laborum","Lorem"],"friends":[{"id":0,"name":"Kate Howard"},{"id":1,"name":"Dena Barnes"},{"id":2,"name":"Duffy Kelley"}]},{"_id":"5c69793dd0fe69ee37e3ed32","guid":"f50182d4-52bc-4b1a-a8b8-dd0f00b160e7","isActive":false,"balance":"$2,732.52","age":31,"eyeColor":"blue","name":"Davenport Suarez","tags":["culpa","officia","incididunt"],"friends":[{"id":0,"name":"Leonard Spencer"},{"id":1,"name":"Marissa Dunlap"},{"id":2,"name":"Gould Blair"}]},{"_id":"5c69793d05fc5c520356a51a","guid":"6357b8dd-1881-44af-818e-dc6260516029","isActive":false,"balance":"$2,902.90","age":21,"eyeColor":"green","name":"Davis Vincent","tags":["ad","incididunt","dolore"],"friends":[{"id":0,"name":"Deanna Vinson"},{"id":1,"name":"Kidd Wilder"},{"id":2,"name":"Martinez Foley"}]},{"_id":"5c69793d808000d0700c69e0","guid":"3694c060-b55c-49c1-b036-a978b2685424","isActive":false,"balance":"$1,269.85","age":36,"eyeColor":"blue","name":"Chaney Russo","tags":["cillum","fugiat","duis"],"friends":[{"id":0,"name":"Snider Finch"},{"id":1,"name":"Velazquez Rowe"},{"id":2,"name":"Patricia Rasmussen"}]},{"_id":"5c69793dc31d32a958a70548","guid":"47d1cef6-3404-4e60-9c05-e82b428b81b8","isActive":false,"balance":"$1,759.68","age":29,"eyeColor":"green","name":"Carmela Mayer","tags":["enim","occaecat","consequat"],"friends":[{"id":0,"name":"Jones Melton"},{"id":1,"name":"Battle Durham"},{"id":2,"name":"House Wagner"}]}]'}}},30:function(e,t,n){e.exports=n(46)},38:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n.n(r),o=n(21),i=n(19),u=(n(38),n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(){if("serviceWorker"in navigator){if(new URL(".",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");u?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):l(e)})}}function l(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=n(7),f=n(2),d=n(0),p=n(3),b=n.n(p),m=n(17),y=n(10),g=function(e,t){var n=e;if(t[0].constructor!==m.nodes.Star){var r={};t.forEach(function(e){var t=b.a.get(n,e.field.values),a=e.field.value;e.field.value2&&(a=e.field.value2),e.name&&(a=e.name.value),r[a]=t}),n=r}return n},h=function(e,t){try{var n=Object(m.parse)(t);if("data"!==n.source.name.values[0])return new Error("".concat(n.source.name.values[0]," table does not exist"));var r=function(e,t){var n=[];e.source.name.values&&e.source.name.values.length>1&&"data"===e.source.name.values[0]&&(n=Object(f.a)(e.source.name.values)).shift();var r=b.a.chain(t);return n&&n.length>0&&(r=r.get(n)),b.a.isArray(t)?r.filter(function(t){if(!e.where||!e.where.conditions)return!0;var n=e.where.conditions.left,r=e.where.conditions.right,a=e.where.conditions.operation;return v(a,n,r,t)}).map(function(t){return g(t,e.fields)}).value():g(r.value(),e.fields)}(n,Object(y.b)(e));return JSON.stringify(r)}catch(a){return a}},v=function e(t,n,r,a){if(t){if("or"===t.toLowerCase())return e(n.operation,n.left,n.right,a)||e(r.operation,r.left,r.right,a);if("and"===t.toLowerCase())return e(n.operation,n.left,n.right,a)&&e(r.operation,r.left,r.right,a)}if(!n.value)return!1;var o=b.a.get(a,function(e){if(!e||0===e.length)return[];if("data"===e[0]){var t=Object(f.a)(e);return t.shift(),t}return e}(n.values));if("="===t&&o===r.value)return!0;if("!="===t&&o!==r.value)return!0;if("<>"===t&&o!==r.value)return!0;if(r.value){if(">"===t&&o>r.value)return!0;if(">="===t&&o>=r.value)return!0;if("<"===t&&o<r.value)return!0;if("<="===t&&o<=r.value)return!0}return!1},O=function(e,t){if(!e||""===e.trim())return null;if(!t||""===t.trim())return null;try{window._=b.a;var n="\n      \n        const data = eval(".concat(e,")\n        JSON.stringify(").concat(t,")\n      "),r=eval.apply(null,[n]);return"string"!==typeof r?null:r}catch(a){return a}finally{window._=void 0}},w=n(28),T=function(){return w},j={source:{text:""},query:{text:"",mode:"Javascript"},output:{match:!1,text:"",obj:{},searchTerm:"",selectedTab:"RawJson",table:{isArray:!1,array:[],columns:[],displayedColumns:[],isModalOpen:!1,groupBy:[]}}},E=n(6),_=n(14),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T(),t=arguments.length>1?arguments[1]:void 0;if("CLEAR_EDITOR"===t.type)return j;var n=Object(d.a)({},e,{query:C(e.query,t),source:S(e.source,t)}),r=x(n.output,n.source.text,n.query.text,t,n.query.mode);return Object(d.a)({},n,{output:Object(d.a)({},r,{table:D(r.table,t)})})},S=function(e,t){switch(t.type){case"UPDATE_SOURCE_TEXT":return function(e,t){return Object(d.a)({},e,{text:t.source})}(e,t);default:return e}},C=function(e,t){switch(t.type){case"UPDATE_QUERY":return Object(d.a)({},e,{text:t.query});case"UPDATE_QUERY_MODE":return Object(d.a)({},e,{mode:t.mode,text:"Javascript"===t.mode?T().query.text:"select * from data"});default:return e}},U=function(e,t,n,r,a){var o=function(e,t,n){return"Javascript"===n?O(e,t):"SQL"===n?h(e,t):new Error("unsupported mode")}(t,n,a);if(null===o)return{selectedTab:"RawJson",text:"",obj:null,searchTerm:"",match:!1,table:{array:[],isArray:!1,isModalOpen:!1,displayedColumns:[],columns:[],groupBy:[]}};if(o instanceof Error)return{selectedTab:"RawJson",text:"",obj:null,searchTerm:"",match:!1,errorMessage:o.message,table:{isArray:!1,array:[],isModalOpen:!1,displayedColumns:[],columns:[],groupBy:[]}};var i=new Array,u=Object(y.b)(o),c=Array.isArray(u);if(c){var l={};u.filter(function(e){return e}).filter(function(e){return"object"===typeof e}).filter(function(e){return!Object.is(e,{})}).filter(function(e){return!Array.isArray(e)}).map(function(e){return e?Object.keys(e):[]}).forEach(function(e){e.forEach(function(e){return l[e]=e})}),i=Object.keys(l).filter(function(e){return e}).filter(function(e){return"string"===typeof e}).filter(function(e){return""!==e.trim()}).sort(function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())})}var s="TOGGLE_OUTPUT_TABLE_MODAL"===r.type?!e.table.isModalOpen:e.table.isModalOpen,f=c?"Table":"RawJson";return"UPDATE_OUTPUT_TAB_SELECTION"===r.type&&(f=r.tab),{selectedTab:f,text:o,obj:Object(y.b)(o),searchTerm:"",match:!1,table:{array:c?u:[],isArray:c,isModalOpen:s,displayedColumns:i,columns:i,groupBy:[]}}},x=function(e,t,n,r,a){switch(r.type){case"@@INIT":case"EVALUATE_CODE":case"RESET_EDITOR":case"UPDATE_QUERY":case"UPDATE_SOURCE_TEXT":case"UPDATE_OUTPUT_TAB_SELECTION":return U(e,t,n,r,a);case"TOGGLE_OUTPUT_TABLE_MODAL":return Object(d.a)({},e,{table:Object(d.a)({},e.table,{isModalOpen:!e.table.isModalOpen})});case"UPDATE_OUTPUT_TAB_SELECTION":return Object(d.a)({},e,{selectedTab:r.tab});case"UPDATE_OUTPUT_SEARCH_TERM":return Object(d.a)({},L(U(e,t,n,r,a),r.searchTerm),{searchTerm:r.searchTerm,selectedTab:"RawJson"});default:return e}},L=function(e,t){if(!t&&""===t.trim())return Object(d.a)({},e,{match:!1});var n=function e(t,n){if("string"!==typeof t&&"object"!==typeof t)return{match:!1,filteredObj:t};if("string"===typeof t)return Object(_.a)(t,n)?{match:!0,filteredObj:t}:{match:!1,filteredObj:t};var r=Array.isArray(t)?Object(f.a)(t):Object(d.a)({},t),a=Array.isArray(r)?Array.from({length:r.length},function(e,t){return t}):Object.getOwnPropertyNames(r).filter(function(e){return e}),o=!1,i=!0,u=!1,c=void 0;try{for(var l,s=a[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var p=l.value,b="string"===typeof p&&Object(_.a)(p,n);if(b)o=!0;else{var m=e(r[p],n),y=m.match,g=m.filteredObj;b||y?(o=!0,r[p]=g):Array.isArray(r)&&"number"===typeof p?r.splice(p,1):delete r[p]}}}catch(h){u=!0,c=h}finally{try{i||null==s.return||s.return()}finally{if(u)throw c}}return o||(Array.isArray(r)?r.length=0:a.forEach(function(e){return delete r[e]})),{match:o,filteredObj:r}}(e.obj,t),r=n.filteredObj,a=n.match;return a?Object(d.a)({},e,{obj:r,match:a}):e},D=function(e,t){switch(t.type){case"UPDATE_TABLE_COLUMNS":var n=e.groupBy;return n.forEach(function(e){-1===t.columns.indexOf(e)&&(n=n.filter(function(e){return-1!==t.columns.indexOf(e)}))}),Object(d.a)({},e,{displayedColumns:t.columns,groupBy:n});case"UPDATE_TABLE_GROUP_BY":return Object(d.a)({},e,{groupBy:t.groupBy.filter(function(t){return-1!==e.displayedColumns.indexOf(t)}).filter(function(e){return"Group by..."!==e})});default:return e}},B=Object(s.b)({app:function(e,t){return"RESET_EDITOR"===t.type?A(Object(d.a)({},T()),t):A(e,t)},userSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{globalTheme:"materia"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_GLOBAL_THEME":return Object(d.a)({},e,{globalTheme:t.theme});default:return e}}}),M=function(e){return window.localStorage?localStorage.getItem(e):null},R=function(e,t){var n=t;try{var r=M(e);r&&(n=JSON.parse(r),n=b.a.merge({},T(),n))}catch(a){Object(E.a)(a)}return n},P=function(){var e=R("keyrier-json.app.state",T()),t=R("keyrier-json.user.settings",{globalTheme:"materia"}),n="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.c,r=Object(s.d)(B,{app:e,userSettings:t},n());return r.subscribe(function(){var e,t;e=r.getState().app,window.localStorage&&localStorage.setItem("keyrier-json.app.state",JSON.stringify(e)),t=r.getState().userSettings,window.localStorage&&localStorage.setItem("keyrier-json.user.settings",JSON.stringify(t))}),r},J=n(1),N=n(20),k=new Map;k.set("materia",function(){return n.e(27).then(n.t.bind(null,206,7))}),k.set("darkly",function(){return n.e(21).then(n.t.bind(null,207,7))}),k.set("sandstone",function(){return n.e(29).then(n.t.bind(null,208,7))}),k.set("cosmo",function(){return n.e(19).then(n.t.bind(null,209,7))}),k.set("cyborg",function(){return n.e(20).then(n.t.bind(null,210,7))}),k.set("flatly",function(){return n.e(22).then(n.t.bind(null,211,7))}),k.set("journal",function(){return n.e(23).then(n.t.bind(null,212,7))}),k.set("litera",function(){return n.e(24).then(n.t.bind(null,213,7))}),k.set("lumen",function(){return n.e(25).then(n.t.bind(null,214,7))}),k.set("lux",function(){return n.e(26).then(n.t.bind(null,215,7))}),k.set("minty",function(){return n.e(28).then(n.t.bind(null,216,7))}),k.set("pulse",function(){return n.e(38).then(n.t.bind(null,217,7))}),k.set("simplex",function(){return n.e(30).then(n.t.bind(null,218,7))}),k.set("slate",function(){return n.e(39).then(n.t.bind(null,219,7))}),k.set("solar",function(){return n.e(31).then(n.t.bind(null,220,7))}),k.set("spacelab",function(){return n.e(32).then(n.t.bind(null,221,7))}),k.set("superhero",function(){return n.e(33).then(n.t.bind(null,222,7))}),k.set("united",function(){return n.e(34).then(n.t.bind(null,223,7))}),k.set("yeti",function(){return n.e(35).then(n.t.bind(null,224,7))});var q=function(e){if(null!==e){var t=k.get(e);if(t)return t()}return Promise.reject("theme is not defined")},I=n(22);(function(){var e=Object(o.a)(a.a.mark(function e(){var t,r,o,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=P(),e.next=3,Promise.all([n.e(0).then(n.t.bind(null,54,7)),Promise.all([n.e(0),n.e(15),n.e(1)]).then(n.bind(null,231)),q(Object(N.n)(t.getState()))]);case 3:return r=e.sent,e.next=6,I.preloadAll();case 6:o=r[0],u=r[1].default,o.render(J.createElement(J.StrictMode,null,J.createElement(i.a,{store:t},J.createElement(u,null))),document.getElementById("root")),c();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}})()()},6:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o});var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;console.error("Keyrier error",e),"undefined"!==typeof t&&console.error(t)},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;"undefined"===typeof t&&console.warn(e),console.warn(e,t)},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;"undefined"===typeof t&&console.info(e),console.info(e,t)}}},[[30,12,14]]]);
//# sourceMappingURL=main.51024392.chunk.js.map