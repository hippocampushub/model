(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{48818:function(t,e,r){"use strict";r.d(e,{G$:function(){return i},I:function(){return a}});var n=r(67294),o=r(47591);const c=(0,n.createContext)(null),i=({nexusClient:t,children:e})=>(0,n.createElement)(c.Provider,{value:t},e);function a(){const t=(0,n.useContext)(c);return(0,o.ZP)(t,"No Nexus client found. To use react-nexus components, make sure you wrap your React app with the NexusProvider component like: <NexusProvider nexusClient={myClient)><App /></NexusProvider>. "),t}},67066:function(t,e,r){"use strict";var n=r(85893),o=r(64121),c=r(67294),i=r(51649);e.Z=function(t){var e=t.collapsed,r=t.title,a=t.children,s=t.color,u=void 0===s?"":s,l=t.className,f=void 0===l?"":l,d=c.useState(e),p=(0,o.Z)(d,2),h=p[0],b=p[1];return(0,n.jsxs)("div",{id:"data",className:"".concat("collapsible__").concat(h?"collapsed":"expanded"," ").concat(u," ").concat(f),children:[(0,n.jsxs)("div",{className:"header",title:r,onClick:function(){return b(!h)},children:[r,(0,n.jsx)("span",{className:"arrow",children:(0,n.jsx)(i.Vmf,{})})]}),(0,n.jsx)("div",{className:"content",children:a})]})}},60681:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(85893),o=(r(67294),r(51649)),c="scroll-to__",i=function(t){var e=t.anchor,r=t.direction,i=t.children,a=t.color,s=void 0===a?"":a;return(0,n.jsxs)("div",{onClick:function(){var t=document.querySelector("#".concat(e));t&&t.scrollIntoView()},className:"".concat(c,"basis bg-").concat(s),children:[i,(0,n.jsxs)("span",{className:"".concat(c,"direction"),children:["up"===r&&(0,n.jsx)(o.Vmf,{}),"down"===r&&(0,n.jsx)(o.OId,{})]})]})},a=function(t){var e=t.children;return(0,n.jsxs)("div",{className:"".concat("data-container__","basis"),children:[(0,n.jsx)("div",{className:"center",children:e}),(0,n.jsx)("div",{className:"scroll-to",children:(0,n.jsx)(i,{anchor:"filters",direction:"up",children:"Return to selectors"})})]})}},861:function(t,e,r){"use strict";var n=r(85893),o=r(26265),c=r(64121),i=r(67294),a=r(48818),s=r(71134);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.Z=function(t){var e=t.query,r=t.children,o=i.useState({data:null,loading:!1,error:null}),u=(0,c.Z)(o,2),f=u[0],d=u[1],p=(0,a.I)();return i.useEffect((function(){e&&(d(l(l({},f),{},{loading:!0,data:null})),p.View.elasticSearchQuery(s.a.org,s.a.project,s.a.datasetViewId,e).then((function(t){return d(l(l({},f),{},{loading:!1,data:t.hits.hits}))})).catch((function(t){return d(l(l({},f),{},{loading:!1,error:t}))})))}),[e]),(0,n.jsx)(n.Fragment,{children:r(f.data,f.loading,f.error)})}},30760:function(t,e,r){"use strict";var n=r(85893),o=(r(67294),r(95737)),c=r.n(o);e.Z=function(t){var e=t.title,r=t.text,o=t.color,i=void 0===o?"":o;return(0,n.jsxs)("div",{className:"".concat(c().container," bg-").concat(i),children:[e&&(0,n.jsx)("h3",{children:e}),(0,n.jsx)("p",{children:r})]})}},84032:function(t,e,r){"use strict";var n=r(85893),o=(r(67294),"list__");e.Z=function(t){var e=t.title,r=t.list,c=t.value,i=t.onSelect,a=void 0===i?function(){}:i,s=t.color,u=t.anchor,l=void 0===u?"":u,f=t.className,d=void 0===f?"":f,p=e?e.replace(/\s/g,""):"no_title";return(0,n.jsxs)("div",{className:"".concat(o,"basis bg-").concat(s," ").concat(d),role:"radiogroup","aria-labelledby":"".concat(o).concat(p),children:[e&&(0,n.jsx)("p",{children:e}),(0,n.jsx)("div",{className:"elements",children:r.map((function(t){return(0,n.jsx)("div",{role:"radio","aria-checked":c===t,tabIndex:0,className:"".concat("list-element__","basis ").concat(c===t?"selected":""),onClick:function(){return function(t){var e=l&&document.querySelector("#".concat(l));e&&window.setTimeout((function(){return e.scrollIntoView(!0)}),0),a(t)}(t)},title:t,children:t},t)}))})]})}},85332:function(t,e,r){"use strict";var n=r(26265),o=r(85893);r(67294);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var i=(0,r(5152).default)((function(){return r.e(19).then(r.bind(r,62019))}),{ssr:!1,loadableGenerated:{webpack:function(){return[62019]},modules:["./nexus-plugin"]}});e.Z=function(t){return(0,o.jsx)(i,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t))}},92524:function(t,e,r){"use strict";var n=r(85893);r(67294);e.Z=function(t){var e=t.title,r=t.subtitle,o=t.hint,c=t.primaryColor,i=void 0===c?"yellow":c,a=t.primary;return(0,n.jsxs)("div",{className:"".concat("title__","basis ").concat(a?"primary":""," ").concat(i),children:[r&&!a&&(0,n.jsx)("h4",{className:"text-white",children:r}),e&&(0,n.jsx)("h2",{role:"title",className:"text-white",children:e}),r&&a&&(0,n.jsx)("h4",{className:"text-white",children:r}),o&&(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:o}})]})}},61166:function(t,e,r){"use strict";var n=r(85893);r(67294);e.Z=function(t){var e=t.children,r=t.backgroundAlt,o=t.id,c=void 0===o?"filters":o;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{id:c,className:"".concat("filters__","basis ").concat(r?"background-alt":""),children:e})})}},85056:function(t,e,r){"use strict";r.d(e,{PC:function(){return n},$W:function(){return o},tr:function(){return c},d_:function(){return i}});var n=function(t,e){return t&&e?{from:0,size:100,query:{bool:{filter:[{bool:{must:[{term:{"@type":"https://neuroshapes.org/Trace"}}]}},{bool:{must:{term:{"name.raw":e}}}},{nested:{path:"annotation.hasBody",query:{bool:{filter:{term:{"annotation.hasBody.label.raw":t}}}}}},{nested:{path:"distribution",query:{bool:{must:{match:{"distribution.encodingFormat":"application/nwb"}}}}}}]}}}:null},o=function(t){return t?{from:0,size:200,query:{bool:{filter:[{bool:{should:[{term:{_deprecated:!1}}]}},{bool:{should:[{term:{"@type":"https://neuroshapes.org/ReconstructedCell"}}]}},{nested:{path:"annotation.hasBody",query:{bool:{filter:[{term:{"annotation.hasBody.label.raw":t}}]}}}}]}}}:null},c=function(t,e){return t&&e?{from:0,size:100,query:{bool:{filter:[{bool:{should:[{term:{_deprecated:!1}}]}},{bool:{should:[{term:{"@type":"https://neuroshapes.org/NeuronMorphology"}}]}},{bool:{should:[{term:{"name.raw":e}}]}}]}}}:null},i=function(t){return t?{from:0,size:1e4,query:{bool:{filter:[{bool:{must:[{term:{"@type":"https://neuroshapes.org/Trace"}}]}},{bool:{must_not:{exists:{field:"note"}}}},{nested:{path:"annotation.hasBody",query:{bool:{filter:{term:{"annotation.hasBody.label.raw":t}}}}}},{nested:{path:"distribution",query:{bool:{must:{match:{"distribution.encodingFormat":"application/rab"}}}}}}]}}}:null}},16159:function(t,e,r){"use strict";r.d(e,{rp:function(){return o}});var n=r(71134),o="grey-1";n.FN[o]},95737:function(t){t.exports={container:"styles_container__9zB6A"}},47591:function(t,e,r){"use strict";var n=r(70655),o=r(34155),c="Invariant Violation",i=Object.setPrototypeOf,a=void 0===i?function(t,e){return t.__proto__=e,t}:i,s=function(t){function e(r){void 0===r&&(r=c);var n=t.call(this,"number"===typeof r?c+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=c,a(n,e.prototype),n}return(0,n.ZT)(e,t),e}(Error);function u(t,e){if(!t)throw new s(e)}function l(t){return function(){return console[t].apply(console,arguments)}}!function(t){t.warn=l("warn"),t.error=l("error")}(u||(u={}));var f={env:{}};if("object"===typeof o)f=o;else try{Function("stub","process = stub")(f)}catch(p){}var d=u;e.ZP=d},70655:function(t,e,r){"use strict";r.d(e,{ZT:function(){return o},pi:function(){return c},_T:function(){return i},XA:function(){return a},CR:function(){return s},fl:function(){return u}});var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function i(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function a(t){var e="function"===typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,c=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=c.next()).done;)i.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=c.return)&&r.call(c)}finally{if(o)throw o.error}}return i}function u(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t}}}]);
//# sourceMappingURL=244-5386410f5210ba8e0620.js.map