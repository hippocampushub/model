(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{67066:function(e,t,n){"use strict";var r=n(85893),o=n(64121),c=n(67294),i=n(51649);t.Z=function(e){var t=e.collapsed,n=e.title,s=e.children,a=e.color,l=void 0===a?"":a,u=e.className,d=void 0===u?"":u,f=c.useState(t),h=(0,o.Z)(f,2),p=h[0],m=h[1];return(0,r.jsxs)("div",{id:"data",className:"".concat("collapsible__").concat(p?"collapsed":"expanded"," ").concat(l," ").concat(d),children:[(0,r.jsxs)("div",{className:"header",title:n,onClick:function(){return m(!p)},children:[n,(0,r.jsx)("span",{className:"arrow",children:(0,r.jsx)(i.Vmf,{})})]}),(0,r.jsx)("div",{className:"content",children:s})]})}},60681:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),o=(n(67294),n(51649)),c="scroll-to__",i=function(e){var t=e.anchor,n=e.direction,i=e.children,s=e.color,a=void 0===s?"":s;return(0,r.jsxs)("div",{onClick:function(){var e=document.querySelector("#".concat(t));e&&e.scrollIntoView()},className:"".concat(c,"basis bg-").concat(a),children:[i,(0,r.jsxs)("span",{className:"".concat(c,"direction"),children:["up"===n&&(0,r.jsx)(o.Vmf,{}),"down"===n&&(0,r.jsx)(o.OId,{})]})]})},s=function(e){var t=e.children;return(0,r.jsxs)("div",{className:"".concat("data-container__","basis"),children:[(0,r.jsx)("div",{className:"center",children:t}),(0,r.jsx)("div",{className:"scroll-to",children:(0,r.jsx)(i,{anchor:"filters",direction:"up",children:"Return to selectors"})})]})}},861:function(e,t,n){"use strict";var r=n(85893),o=n(26265),c=n(64121),i=n(67294),s=n(48818),a=n(71134);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.query,n=e.children,o=i.useState({data:null,loading:!1,error:null}),l=(0,c.Z)(o,2),d=l[0],f=l[1],h=(0,s.I)();return i.useEffect((function(){t&&(f(u(u({},d),{},{loading:!0,data:null})),h.View.elasticSearchQuery(a.a.org,a.a.project,a.a.datasetViewId,t).then((function(e){return f(u(u({},d),{},{loading:!1,data:e.hits.hits}))})).catch((function(e){return f(u(u({},d),{},{loading:!1,error:e}))})))}),[t]),(0,r.jsx)(r.Fragment,{children:n(d.data,d.loading,d.error)})}},30760:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),n(11823)),c=n.n(o);t.Z=function(e){var t=e.title,n=e.text,o=e.color,i=void 0===o?"":o;return(0,r.jsxs)("div",{className:"".concat(c().container," bg-").concat(i),children:[t&&(0,r.jsx)("h3",{children:t}),(0,r.jsx)("p",{children:n})]})}},84032:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),"list__");t.Z=function(e){var t=e.title,n=e.list,c=e.value,i=e.onSelect,s=void 0===i?function(){}:i,a=e.color,l=e.anchor,u=void 0===l?"":l,d=e.className,f=void 0===d?"":d,h=t?t.replace(/\s/g,""):"no_title";return(0,r.jsxs)("div",{className:"".concat(o,"basis bg-").concat(a," ").concat(f),role:"radiogroup","aria-labelledby":"".concat(o).concat(h),children:[t&&(0,r.jsx)("p",{children:t}),(0,r.jsx)("div",{className:"elements",children:n.map((function(e){return(0,r.jsx)("div",{role:"radio","aria-checked":c===e,tabIndex:0,className:"".concat("list-element__","basis ").concat(c===e?"selected":""),onClick:function(){return function(e){var t=u&&document.querySelector("#".concat(u));t&&window.setTimeout((function(){return t.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}),0),s(e)}(e)},title:e,children:e},e)}))})]})}},85332:function(e,t,n){"use strict";var r=n(26265),o=n(85893);n(67294);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var i=(0,n(5152).default)((function(){return n.e(232).then(n.bind(n,29232))}),{ssr:!1,loadableGenerated:{webpack:function(){return[29232]},modules:["../components/NexusPlugin/index.tsx -> ./nexus-plugin"]}});t.Z=function(e){return(0,o.jsx)(i,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},92524:function(e,t,n){"use strict";var r=n(85893);n(67294);t.Z=function(e){var t=e.title,n=e.subtitle,o=e.hint,c=e.primaryColor,i=void 0===c?"yellow":c,s=e.primary;return(0,r.jsxs)("div",{className:"".concat("title__","basis ").concat(s?"primary":""," ").concat(i),children:[n&&!s&&(0,r.jsx)("h4",{className:"text-white",children:n}),t&&(0,r.jsx)("h2",{role:"title",className:"text-white",children:t}),n&&s&&(0,r.jsx)("h4",{className:"text-white",children:n}),o&&(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:o}})]})}},61166:function(e,t,n){"use strict";var r=n(85893);n(67294);t.Z=function(e){var t=e.children,n=e.backgroundAlt,o=e.id,c=void 0===o?"filters":o;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{id:c,className:"".concat("filters__","basis ").concat(n?"background-alt":""),children:t})})}},77522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(85893),o=n(67294),c=n(27828),i=n(26265),s=n(11163),a=n(48818),l=n(861),u=n(60681),d=n(85332),f=n(85056),h=n(61166),p=n(92524),m=n(30760),y=n(16159),b=n(84032),j=n(67066),x=n(59999),v=n(96486),g=n(71134);function _(e){return Array.isArray(e)?e:[e]}function O(e){return e.name?e.name:"".concat(e.givenName," ").concat(e.familyName)}function w(e){return e.name?"institution":"person"}var N=function(e){var t=e.traces,n=void 0===t?[]:t,c=(0,a.I)(),i=n.reduce((function(e,t){var n=_(t.contribution).map((function(e){var t;return null===(t=e.agent)||void 0===t?void 0:t["@id"]})).filter(Boolean);return Array.from(new Set([].concat((0,x.Z)(e),(0,x.Z)(n))))}),[]),s=(0,o.useState)(null),l=s[0],u=s[1];return(0,o.useEffect)((function(){if(i.length){var e={from:0,size:100,query:{terms:{_id:i}}};c.View.elasticSearchQuery(g.a.org,g.a.project,g.a.datasetViewId,e).then((function(e){return e.hits.hits})).then((function(e){return e.map((function(e){return e._source}))})).then((function(e){return e.map((function(e){return{id:e["@id"],label:O(e),type:w(e)}}))})).then((function(e){return(0,v.keyBy)(e,"id")})).then((function(e){return u(e)}))}}),[n]),(0,r.jsx)("div",{className:"layer-anatomy-summary__basis mt-2",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"E-Type"}),(0,r.jsx)("th",{children:"Contribution"})]})}),(0,r.jsx)("tbody",{children:n.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-capitalize",children:e.name}),(0,r.jsx)("td",{children:e.annotation.hasBody.label}),(0,r.jsx)("td",{children:l&&_(e.contribution).map((function(e){return l[e.agent["@id"]]})).sort((function(e,t){return e.type>t.type?1:-1})).map((function(e){return(0,r.jsxs)("span",{children:[e.label," ",(0,r.jsx)("br",{})]},e.label)}))})]},e.name)}))})]})})},P=JSON.parse('{"cNAC":["95817000","95817001","95817002","99111004","99111006","98D15008","97717005","98D15009","98513011"],"cACpyr":["95810008","95831004","95817004","95810007","95810013","95810006","95810012","95810022","95810037","95817003","95810023","95810039","95810028","95810010","95810011","95810038","95810014","95824000","95824004","95912005","95810029","95822000","95810015","95824006","95817008","95912006","95822001","95914002","95822003","95822011","95914004","95914003","95822009","95810033","95822010","95810031","95831000","95810032","95822002","95810040","95817005","95810041","95810030","95810025","95810026","95817006","95831003","95810027","95831002","95810024","95817007"],"cAC":["97428000","97428001","98205021","97509010","98205025","98205024","97509011","98205022","97509009","97509008"],"bAC":["95810035","95810036","97911002","97911001","97911000","99111001","99111000","99111002"]}'),Z=n(19069),S=n.n(Z);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var k=function(){var e=(0,s.useRouter)(),t=(0,a.I)(),n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.query),o=function(t){e.push({query:t,pathname:e.pathname},void 0,{shallow:!0})},c=n.etype,x=n.etype_instance,v=Object.keys(P).sort(),g=c?P[c].sort():[],_=function(e){return e.map((function(e){return e._source})).sort((function(e,t){return e.name>t.name?1:-1}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{backgroundAlt:!0,children:(0,r.jsxs)("div",{className:"row bottom-xs w-100",children:[(0,r.jsxs)("div",{className:"col-xs-12 col-lg-6",children:[(0,r.jsx)(p.Z,{primaryColor:y.rp,title:(0,r.jsxs)("span",{children:["Neuron ",(0,r.jsx)("br",{})," Electrophysiology"]}),subtitle:"Experimental Data"}),(0,r.jsx)(m.Z,{color:"grey-1",text:"We recorded electrical traces from neurons using single-cell recording experiments in brain slices. Then, we classified the traces in different electrical types (e-types) based on their firing patterns. We have identified one e-type for excitatory cells and four e-types for inhibitory cells."})]}),(0,r.jsx)("div",{className:"col-xs-12 col-lg-4 col-lg-offset-1",children:(0,r.jsxs)("div",{className:S().selector,children:[(0,r.jsx)("div",{className:S().selectorHead,children:"Select cell type"}),(0,r.jsxs)("div",{className:S().selectorBody,children:[(0,r.jsx)(b.Z,{list:v,value:c,title:"e-type",color:y.rp,onSelect:function(e){o({etype:e,etype_instance:x})}}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(b.Z,{list:g,value:x,title:"Experiment instance (".concat(g.length,")"),color:y.rp,onSelect:function(e){o({etype:c,etype_instance:e})},anchor:"data"})]})]})})]})}),(0,r.jsx)("div",{id:"data"}),!!c&&!!x&&(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(j.Z,{title:"Electrophysiological Recordings for ".concat(c,"_").concat(x),children:(0,r.jsx)(l.Z,{query:(0,f.PC)(c,x),children:function(e){return(0,r.jsx)(r.Fragment,{children:!!e&&!!e.length&&(0,r.jsx)(d.Z,{name:"neuron-electrophysiology",resource:e[0]._source,nexusClient:t})})}})}),(0,r.jsxs)(j.Z,{title:"Population",className:"mt-4",children:[(0,r.jsx)("h3",{className:"mt-3",children:"Experimental instances"}),(0,r.jsx)(l.Z,{query:(0,f.d_)(c),children:function(e){return(0,r.jsx)(r.Fragment,{children:!!e&&(0,r.jsx)(N,{traces:_(e)})})}})]})]})]})};function q(){return(0,r.jsx)(c.Z,{children:(0,r.jsx)(k,{})})}},85056:function(e,t,n){"use strict";n.d(t,{PC:function(){return r},$W:function(){return o},tr:function(){return c},d_:function(){return i}});var r=function(e,t){return e&&t?{from:0,size:100,query:{bool:{filter:[{bool:{must:[{term:{"@type":"Trace"}}]}},{bool:{must:{term:{"name.raw":t}}}},{nested:{path:"annotation.hasBody",query:{bool:{filter:{term:{"annotation.hasBody.label.raw":e}}}}}},{nested:{path:"distribution",query:{bool:{must:{match:{"distribution.encodingFormat":"application/nwb"}}}}}}]}}}:null},o=function(e){return e?{from:0,size:200,query:{bool:{filter:[{bool:{should:[{term:{_deprecated:!1}}]}},{bool:{should:[{term:{"@type":"ReconstructedCell"}}]}},{nested:{path:"annotation.hasBody",query:{bool:{filter:[{term:{"annotation.hasBody.label.raw":e}}]}}}}]}}}:null},c=function(e,t){return e&&t?{from:0,size:100,query:{bool:{filter:[{bool:{should:[{term:{_deprecated:!1}}]}},{bool:{should:[{term:{"@type":"NeuronMorphology"}}]}},{bool:{should:[{term:{"name.raw":t}}]}}]}}}:null},i=function(e){return e?{from:0,size:1e4,query:{bool:{filter:[{bool:{must:[{term:{"@type":"Trace"}}]}},{bool:{must_not:{exists:{field:"note"}}}},{nested:{path:"annotation.hasBody",query:{bool:{filter:{term:{"annotation.hasBody.label.raw":e}}}}}},{nested:{path:"distribution",query:{bool:{must:{match:{"distribution.encodingFormat":"application/rab"}}}}}}]}}}:null}},16159:function(e,t,n){"use strict";n.d(t,{rp:function(){return o}});var r=n(71134),o="grey-1";r.FN[o]},6757:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experimental-data/neuronal-electrophysiology",function(){return n(77522)}])},11823:function(e){e.exports={container:"styles_container__9zB6A"}},19069:function(e){e.exports={selector:"neuron-electrophysiology_selector__1wLqj",selectorColumn:"neuron-electrophysiology_selectorColumn__37KZ_",selectorHead:"neuron-electrophysiology_selectorHead__3N8Kc",selectorBody:"neuron-electrophysiology_selectorBody__35I10"}}},function(e){e.O(0,[774,866,662,739,828,888,179],(function(){return t=6757,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=neuronal-electrophysiology-54e9b43fec8b05c7b932.js.map