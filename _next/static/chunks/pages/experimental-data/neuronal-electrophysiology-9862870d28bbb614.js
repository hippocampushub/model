!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="92324fd6-98bd-4082-bb73-2c7dacbafd4e",e._sentryDebugIdIdentifier="sentry-dbid-92324fd6-98bd-4082-bb73-2c7dacbafd4e")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5157],{44174:function(e){e.exports=function(e,t,n,r){for(var s=-1,a=null==e?0:e.length;++s<a;){var i=e[s];t(r,i,n(i),e)}return r}},81119:function(e,t,n){var r=n(89881);e.exports=function(e,t,n,s){return r(e,function(e,r,a){t(s,e,n(e),a)}),s}},55189:function(e,t,n){var r=n(44174),s=n(81119),a=n(67206),i=n(1469);e.exports=function(e,t){return function(n,o){var l=i(n)?r:s,c=t?t():{};return l(n,e,a(o,2),c)}}},7739:function(e,t,n){var r=n(89465),s=n(55189),a=Object.prototype.hasOwnProperty,i=s(function(e,t,n){a.call(e,n)?e[n].push(t):r(e,n,[t])});e.exports=i},9370:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experimental-data/neuronal-electrophysiology",function(){return n(45074)}])},597:function(e,t,n){var r=n(83454);n(91479);var s=n(67294),a=s&&"object"==typeof s&&"default"in s?s:{default:s};function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=void 0!==r&&r.env&&!0,isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function StyleSheet(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,a=void 0===s?i:s;invariant$1(isString(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",invariant$1("boolean"==typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var e,t=StyleSheet.prototype;return t.setOptimizeForSpeed=function(e){invariant$1("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),invariant$1(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(invariant$1(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(invariant$1(isString(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];invariant$1(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},t.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];invariant$1(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},t.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&invariant$1(isString(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},_defineProperties(StyleSheet.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e&&_defineProperties(StyleSheet,e),StyleSheet}();function invariant$1(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var stringHash=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},l={};function computeId(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return l[r]||(l[r]="jsx-"+stringHash(e+"-"+n)),l[r]}function computeSelector(e,t){var n=e+t;return l[n]||(l[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),l[n]}var c=function(){function StyleSheetRegistry(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,a=void 0!==s&&s;this._sheet=r||new o({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"==typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var e=StyleSheetRegistry.prototype;return e.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var a=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=a,this._instancesCounts[r]=1},e.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},e.update=function(e,t){this.add(t),this.remove(e)},e.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},e.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},e.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return a.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},e.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var s=computeId(r,n);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return computeSelector(s,e)}):[computeSelector(s,t)]}}return{styleId:computeId(r),rules:Array.isArray(t)?t:[t]}},e.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},StyleSheetRegistry}(),u=s.createContext(null);u.displayName="StyleSheetContext";var d=a.default.useInsertionEffect||a.default.useLayoutEffect,h=new c;function JSXStyle(e){var t=h||s.useContext(u);return t&&d(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}JSXStyle.dynamic=function(e){return e.map(function(e){return computeId(e[0],e[1])}).join(" ")},t.style=JSXStyle},5379:function(e,t,n){"use strict";e.exports=n(597).style},55832:function(e,t,n){"use strict";var r=n(85893);n(67294);var s=n(81873),a=n(15443),i=n.n(a);t.Z=e=>{let{children:t,hasIcon:n=!0}=e;return(0,r.jsxs)("div",{className:"".concat(i().authorBox," flex flex-row flex-grow-0"),children:[(0,r.jsx)("div",{className:"flex justify-center pt-1 mr-2",children:n&&(0,r.jsx)(s.lp0,{className:"".concat(i().icon," ")})}),(0,r.jsxs)("div",{className:"flex-grow",children:[" ",t]})]})}},8404:function(e,t,n){"use strict";n.d(t,{Z:function(){return components_Factsheet}});var r=n(85893);n(67294);var s=n(76343),a=n(14293),i=n.n(a);let o={MOhm:"MΩ"};var components_Unit=e=>{var t;let{value:n=""}=e;return(0,r.jsx)(r.Fragment,{children:null!==(t=o[n])&&void 0!==t?t:n})},l=n(43483);let c=(0,l.o)(),FactsheetSingleValueEntry=e=>{let{fact:t}=e;return(0,r.jsxs)("div",{className:"row mt-1",children:[(0,r.jsx)("div",{className:"col-xs-6 col-sm-4 name",children:(0,r.jsx)(c,{term:t.name,description:t.description})}),(0,r.jsx)("div",{className:"col-xs-6 col-sm-8 value",children:i()(t.value)?(0,r.jsx)("span",{children:"-"}):(0,r.jsxs)("span",{children:[(0,r.jsx)(s.Z,{value:t.value})," ",(0,r.jsx)(components_Unit,{value:t.units||t.unit})]})})]})},FactsheetSingleMeanStdEntry=e=>{var t,n,s,a,i,o,l,u;let{fact:d}=e,h=null!==(o=null===(t=d.value_map)||void 0===t?void 0:t.mean)&&void 0!==o?o:null!==(i=null===(n=d.values)||void 0===n?void 0:n[0])&&void 0!==i?i:"-",p=null!==(u=null===(s=d.value_map)||void 0===s?void 0:s.std)&&void 0!==u?u:null!==(l=null===(a=d.values)||void 0===a?void 0:a[1])&&void 0!==l?l:"-",formatValue=e=>"number"==typeof e?e.toFixed(3):e,formatNumberWithoutCommas=e=>"number"==typeof e?e.toString().replace(/,/g,""):e;return(0,r.jsxs)("div",{className:"row mt-1",children:[(0,r.jsx)("div",{className:"col-xs-4 name",children:(0,r.jsx)(c,{term:d.name,description:d.description})}),(0,r.jsxs)("div",{className:"col-xs-4 value",children:[formatNumberWithoutCommas(formatValue(h)),"-"!==p?(0,r.jsxs)(r.Fragment,{children:[" \xb1 ",formatNumberWithoutCommas(formatValue(p))]}):"",d.units||d.unit&&(0,r.jsxs)(r.Fragment,{children:[" ",d.units||d.unit]})]})]})},FactsheetMapValueEntry=e=>{let{fact:t}=e,n=Math.max.apply(null,Object.values(t.value_map).map(e=>parseFloat(e))),a=t.units||t.unit,i=Object.entries(t.value_map).map(e=>{let[t,i]=e,o=parseFloat(i)/n*80;return(0,r.jsxs)("div",{className:"row mb-1",children:[(0,r.jsxs)("div",{className:"col-xs-6 pos-relative",children:[t,(0,r.jsx)("div",{className:"bar",style:{width:"".concat(o,"%")}})]}),(0,r.jsxs)("div",{className:"col-xs-6",children:[(0,r.jsx)(s.Z,{value:i})," ",(0,r.jsx)(components_Unit,{value:a})]})]},t)});return(0,r.jsxs)("div",{className:"row mt-1",children:[(0,r.jsx)("div",{className:"col-xs-6 col-lg-4 name",children:(0,r.jsx)(c,{term:t.name,description:t.description})}),(0,r.jsx)("div",{className:"col-xs-6 col-lg-8",children:i})]})},FactsheetEntry=e=>{let{fact:t}=e;return t.value_map&&!i()(t.value_map.mean)&&!i()(t.value_map.std)||Array.isArray(t.values)?(0,r.jsx)(FactsheetSingleMeanStdEntry,{fact:t}):t.value_map?(0,r.jsx)(FactsheetMapValueEntry,{fact:t}):(0,r.jsx)(FactsheetSingleValueEntry,{fact:t})};var components_Factsheet=e=>{let{facts:t,className:n=""}=e;return(0,r.jsx)("div",{className:"".concat("factsheet__","basis ").concat(n),children:t.map((e,t)=>(0,r.jsx)(FactsheetEntry,{fact:e},"".concat(e.name,"-").concat(t)))})}},69313:function(e,t,n){"use strict";var r=n(85893),s=n(67294),a=n(34966),i=n(46262);t.Z=e=>{let{path:t,children:n,label:o=""}=e,l=null==t?void 0:t.match(/\.msgpack/),[c,u]=s.useState({data:null,loading:!0,error:null});return(s.useEffect(()=>{t&&(u({...c,loading:!0}),fetch(t).then(async e=>{if(e.ok){if(l){if(e.body)return(0,i.ti)(e.body);let n=Error("Response body is null for ".concat(t));return(0,a.Tb)(n),Promise.reject(n)}let n=await e.text();return JSON.parse(n.replace(/NaN/g,"null"))}let n=Error("Can't fetch ".concat(t));return(0,a.Tb)(n),Promise.reject(n)}).then(e=>u({...c,data:e,error:null,loading:!1})).catch(e=>u({...c,error:e,data:null,loading:!1})))},[t]),t)?c.error?(0,r.jsx)("p",{children:t}):(0,r.jsx)(r.Fragment,{children:n(c.data,c.loading,c.error)}):null}},13210:function(e,t,n){"use strict";var r=n(85893);n(67294),t.Z=e=>{let{title:t,list:n,value:s,onSelect:a=()=>{},color:i,theme:o=1,className:l="",block:c=!1,grow:u}=e,handleSelectedElement=e=>a(e);return(0,r.jsxs)("div",{className:"".concat("list__","basis  ").concat(u&&"flex-1 !flex flex-col"," set-accent-color--").concat(i," selected theme-").concat(o," ").concat(l," ").concat(c?"block":""),role:"radiogroup",children:[t&&(0,r.jsx)("p",{className:"theme-".concat(o),children:t}),(0,r.jsx)("div",{className:"elements ".concat(u&&"flex-grow"),children:n.map(e=>(0,r.jsx)("div",{role:"radio","aria-checked":s===e,tabIndex:0,className:"".concat("list-element__","basis theme-").concat(o," ").concat(s===e?"selected ":""),onClick:()=>handleSelectedElement(e),title:e,children:e},e))})]})}},45074:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return NeuronElectrophysiologyPage}});var r=n(85893),s=n(9008),a=n.n(s),i=n(67294),o=n(11163),l=n(48818),c=n(72286),u=n(50818),d=n(5152),h=n.n(d);let p=h()(()=>n.e(8100).then(n.bind(n,48100)),{loadableGenerated:{webpack:()=>[48100]},ssr:!1});var NexusPlugin=e=>(0,r.jsx)(p,{...e}),m=n(71376),f=n(78433),y=n(67264),x=n(13210),v=n(35930),g=n(41664),_=n.n(g),j=n(95922),b=n(42978);let S=(0,b.SX)("name"),N=/(\w+)_(.+)/,MorphologyLink=e=>{let{morphology:t}=e,n=t.annotation,s=n?n.hasBody:null,a=s?s.label:null;if(!a)return null;let i=N.exec(a);if(!i)return null;let[,o,l]=i,c=t.name,u=new URLSearchParams({layer:o,mtype:l,instance:c}),d="/experimental-data/neuronal-morphology/?".concat(u.toString(),"#data");return(0,r.jsx)(_(),{href:d,prefetch:!1,legacyBehavior:!0,children:t.name})};var components_TraceRelatedMorphologies=e=>{let{trace:t}=e;if(!t.isRelatedTo)return(0,r.jsx)("span",{children:"No morphology reconstruction found for this cell."});let n=(0,b.Tn)(t.isRelatedTo).map(e=>e["@id"]);return(0,r.jsx)(c.Z,{query:(0,j.jr)(n),children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"Cell's reconstructed morphology: "}),e?e.map(e=>e._source).sort(S).map((e,t)=>(0,r.jsxs)(i.Fragment,{children:[t>0&&", ",(0,r.jsx)(MorphologyLink,{morphology:e})]},e.name)):"...","."]})})},w=n(82718),F=n(55832),k=n(23148),C=n(26495),E=n(17931),R=n(61267),T=n(33638);k.kL.register(k.f$,k.od,k.jn,k.u,k.De);var neuron_electrophysiology_IfCurvePerCellGraph=e=>{let{instance:t,theme:n}=e,[s,a]=(0,i.useState)([]);(0,i.useEffect)(()=>{let fetchData=async()=>{if(!t){console.error("No instance provided"),a([]);return}try{let e=await fetch("".concat(E.$N,"/1_experimental-data/neuronal-electophysiology/if-curve-per-cell-data.json")),n=await e.json(),r=t.endsWith(".nwb")?t:"".concat(t,".nwb");if(n[r]){let e=Object.values(n[r]).map(e=>({amplitude:e.amplitude,mean_frequency:e.mean_frequency})).sort((e,t)=>e.amplitude-t.amplitude);a(e)}else console.error("No data found for instance: ".concat(r)),a([])}catch(e){console.error("Error fetching data:",e),a([])}};fetchData()},[t]);let o={datasets:[{label:"IF Curve",data:s.map(e=>({x:e.amplitude,y:e.mean_frequency})),backgroundColor:R.x8.blue,showLine:!0,borderColor:R.x8.blue,borderWidth:2,pointRadius:3,pointHoverRadius:5}]};return 0===s.length?(0,r.jsx)("div",{children:"No data available for this instance."}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"graph",children:(0,r.jsx)(C.bp,{data:o,options:{scales:{x:{type:"linear",position:"bottom",title:{display:!0,text:"Amplitude (nA)"}},y:{type:"linear",position:"left",title:{display:!0,text:"Mean Frequency (Hz)"}}},animation:{duration:0},plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>"Amplitude: ".concat(e.parsed.x.toFixed(2)," nA, Frequency: ").concat(e.parsed.y.toFixed(2)," Hz")}}}}})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsxs)(T.Z,{theme:n,onClick:()=>(0,b.KO)(s,"If-Curve-data-".concat(t,".json")),children:["IF curve data for",(0,r.jsx)("span",{className:"collapsible-property small",children:t})]})})]})};k.kL.register(k.uw,k.f$,k.od,k.jn,k.Dx,k.u,k.De);let I={id:"errorBar",afterDatasetsDraw(e,t,n){let{ctx:r,data:s,scales:{x:a,y:i}}=e;r.save(),r.strokeStyle=R.x8.blue,r.lineWidth=1,s.datasets[0].data.forEach(e=>{let t=a.getPixelForValue(e.x);i.getPixelForValue(e.y);let n=Math.sqrt(e.variance),s=i.getPixelForValue(e.y+n),o=i.getPixelForValue(e.y-n);r.beginPath(),r.moveTo(t,s),r.lineTo(t,o),r.stroke(),r.beginPath(),r.moveTo(t-5,s),r.lineTo(t+5,s),r.moveTo(t-5,o),r.lineTo(t+5,o),r.stroke()}),r.restore()}};var neuron_electrophysiology_IfCurvePerETypeGraph=e=>{let{eType:t,theme:n}=e,[s,a]=(0,i.useState)(null),[o,l]=(0,i.useState)(!0),[c,u]=(0,i.useState)(null);if((0,i.useEffect)(()=>{let fetchData=async()=>{try{let e=await fetch("".concat(E.$N,"/1_experimental-data/neuronal-electophysiology/if-curve-per-e-type-data.json"));if(!e.ok)throw Error("Network response was not ok");let t=await e.json();a(t)}catch(e){u(e instanceof Error?e.message:"An unknown error occurred")}finally{l(!1)}};fetchData()},[]),o)return(0,r.jsx)("div",{children:"Loading..."});if(c)return(0,r.jsxs)("div",{children:["Error: ",c]});if(!s)return(0,r.jsx)("div",{children:"No data available."});if(!s[t])return(0,r.jsxs)("div",{children:["No data available for e-type: ",t]});let d=s[t];if(0===Object.keys(d).length)return(0,r.jsxs)("div",{children:["No data points available for e-type: ",t]});let h=Object.entries(d).map(e=>{let[t,n]=e;return{x:parseFloat(t),y:n.mean,variance:n.variance}}).sort((e,t)=>e.x-t.x),p={datasets:[{data:h,borderColor:R.x8.blue,backgroundColor:R.x8.blue,borderWidth:2,pointRadius:3,pointHoverRadius:5}]};return(0,r.jsxs)("div",{className:"if-curve-graph",children:[(0,r.jsx)("div",{className:"graph",children:(0,r.jsx)(C.x1,{data:p,options:{responsive:!0,animation:{duration:0},scales:{x:{type:"linear",position:"bottom",title:{display:!0,text:"Amplitude (nA)"}},y:{title:{display:!0,text:"Mean Frequency (Hz)"}}},plugins:{tooltip:{callbacks:{label:e=>{let t=e.raw;return t&&"number"==typeof t.y&&"number"==typeof t.variance?["Mean: ".concat(t.y.toFixed(2)," Hz"),"Std Dev: ".concat(Math.sqrt(t.variance).toFixed(2))]:"No data available"}}},legend:{display:!1}}},plugins:[I]})}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(T.Z,{theme:n,onClick:()=>(0,b.KO)(s,"If-Curve-Data.json"),children:"IF curve per e-type"})})]})},P=n(6777),z=n(28354),A=n(92889),O=n(69313),D=n(7739),Z=n.n(D),M=n(8404),neuron_electrophysiology_NeuronFactsheet=e=>{let{theme:t,facts:n,id:s}=e,a=n.map(e=>{let[t,n]=e.value;return{name:e.name,value:Number(t.toFixed(3)),unit:void 0!==n?"\xb1 ".concat(Number(n.toFixed(3))):"",description:e.description||"",type:e.type||""}}),i=Z()(a,e=>e.type&&R.N4.find(t=>e.type===t)||""),renderFactsheet=(e,t)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"capitalize",children:t||"General"}),(0,r.jsx)(M.Z,{facts:e})]},t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"text-xl mb-2 mt-10",children:"Factsheet"}),(0,r.jsx)("div",{id:s,children:Object.entries(i).map(e=>{let[t,n]=e;return renderFactsheet(n,t)})})]})},$=n(5379),q=n.n($),B=n(2307),H=n(25675),L=n.n(H),neuron_electrophysiology_ElectrophysiologyTable=e=>{let{data:t}=e,[n,s]=(0,i.useState)(1),a=(0,o.useRouter)(),l=(0,i.useRef)(null),c=[{title:"Electrophysiology",dataIndex:"ephys_id",key:"ephys_id",width:150,render:e=>(0,r.jsx)(_(),{href:"/experimental-data/neuronal-electrophysiology/?etype=".concat(t.etype,"&etype_instance=").concat(e),onClick:n=>handleClick(n,t.etype,e),children:e})},{title:"E-type",dataIndex:"etype",key:"etype",width:100},{title:"Preview",dataIndex:"ephys_id",key:"preview",width:220,render:e=>(0,r.jsx)(L(),{src:"".concat(E.wz,"/2_neuron-models/trace-preview/").concat(e,".png"),alt:"neuron trace preview ".concat(e),width:200,height:100,style:{height:"auto"}})}],u=(0,i.useMemo)(()=>t?Array.isArray(t.ephys_ids)?t.ephys_ids.map(e=>({key:e,etype:t.etype||"Unknown",ephys_id:e})):(console.error("data.ephys_ids is not an array:",t.ephys_ids),[]):(console.error("Data is undefined or null"),[]),[t]),d=u.length,h=(0,i.useMemo)(()=>{let e=(n-1)*5,t=e+5;return u.slice(e,t)},[u,n]),handlePageChange=e=>{s(e),l.current&&l.current.scrollIntoView({behavior:"smooth",block:"start"})},handleClick=(e,t,n)=>{e.preventDefault(),a.push("/experimental-data/neuronal-electrophysiology/?etype=".concat(t,"&etype_instance=").concat(n),void 0,{shallow:!0}),setTimeout(()=>{let e=document.querySelector(".data-container");e&&e.scrollIntoView({behavior:"smooth"})},100)};return(0,r.jsxs)(r.Fragment,{children:[t?0===u.length?(0,r.jsx)("div",{className:q().dynamic([["766addc28397037f",[R.x8.blue,R.x8.blue]]]),children:"No data available"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:l,className:q().dynamic([["766addc28397037f",[R.x8.blue,R.x8.blue]]]),children:(0,r.jsx)(B.Z,{columns:c,dataSource:h,pagination:!1,scroll:{x:"max-content"}})}),d>5&&(0,r.jsx)("div",{className:q().dynamic([["766addc28397037f",[R.x8.blue,R.x8.blue]]])+" pagination",children:Array.from({length:Math.ceil(d/5)},(e,t)=>(0,r.jsx)("button",{onClick:()=>handlePageChange(t+1),className:q().dynamic([["766addc28397037f",[R.x8.blue,R.x8.blue]]])+" "+((n===t+1?"active":"")||""),children:t+1},t+1))})]}):(0,r.jsx)("div",{className:q().dynamic([["766addc28397037f",[R.x8.blue,R.x8.blue]]]),children:"Loading data..."}),(0,r.jsx)(q(),{id:"766addc28397037f",dynamic:[R.x8.blue,R.x8.blue],children:".pagination.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:20px}.pagination.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{margin:0 5px;padding:5px 10px;border:1px solid#d9d9d9;background-color:#fff;cursor:pointer;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.pagination.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{color:#40a9ff;border-color:#40a9ff}.pagination.__jsx-style-dynamic-selector button.active.__jsx-style-dynamic-selector{color:#fff;background-color:".concat(R.x8.blue,";border-color:").concat(R.x8.blue,"}")})]})};let getEtype=()=>Object.keys(A).sort(),getInstance=e=>e&&A[e]?A[e].sort():[],V=(0,z.Z)(()=>{let[e,t]=(0,i.useState)(null),n=(0,o.useRouter)(),s=(0,l.I)(),{query:a}=n,d=(0,i.useCallback)(e=>{n.push({query:{...a,...e},pathname:n.pathname},void 0,{shallow:!0})},[a,n]),h=(0,i.useCallback)(e=>{let t=getInstance(e),n=t.length>0?t[0]:void 0;d({etype:e,etype_instance:n})},[d]),p=(0,i.useCallback)(e=>{d({etype_instance:e})},[d]),g="string"==typeof a.etype?a.etype:void 0,_="string"==typeof a.etype_instance?a.etype_instance:void 0,S=(0,i.useMemo)(()=>getEtype(),[]),N=(0,i.useMemo)(()=>getInstance(g),[g]),k=(0,i.useMemo)(()=>g&&_?(0,j.PC)(g,_):null,[g,_]);(0,i.useMemo)(()=>g?(0,j.d_)(g):null,[g]);let C=(0,i.useMemo)(()=>[{title:"E-type",key:"etype",values:S,setFn:h},{title:"Instance",key:"etype_instance",values:N,setFn:p}],[S,N,h,p]);(0,i.useEffect)(()=>{let fetchData=async()=>{if(_)try{let e=await fetch("".concat(E.$N,"/1_experimental-data/neuronal-electophysiology/efeatures-per-etype/").concat(g,"/electropysiology-table.json"));if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let n=await e.json();t(n)}catch(e){console.error("Error fetching experimental recording data:",e),t(null)}};fetchData()},[g]);let R=(0,i.useCallback)(()=>{_&&n.push("".concat(E.QK,"/build/data/electrophysiology?query=").concat(encodeURIComponent(_)))},[_,n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{theme:1,hasData:!!_,children:(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row w-full lg:items-center mt-40 lg:mt-0",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/3 md:w-full md:flex-none mb-8 md:mb-8 lg:pr-0",children:(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(f.Z,{primaryColor:P.rp,title:(0,r.jsxs)("span",{children:["Neuron ",(0,r.jsx)("br",{})," Electrophysiology"]}),subtitle:"Experimental Data",theme:1}),(0,r.jsx)("div",{className:"w-full",role:"information",children:(0,r.jsx)(y.Z,{children:(0,r.jsx)("p",{children:"We recorded electrical traces from neurons using single-cell recording experiments in brain slices. Then, we classified the traces in different electrical types (e-types) based on their firing patterns. We identified one e-type for excitatory cells and four e-types for inhibitory cells."})})})]})}),(0,r.jsx)("div",{className:"flex flex-col-reverse md:flex-row-reverse gap-8 mb-12 md:mb-0 mx-8 md:mx-0 lg:w-2/3 md:w-full flex-grow md:flex-none justify-center",children:(0,r.jsxs)("div",{className:"selector__column theme-".concat(1," w-full"),children:[(0,r.jsx)("div",{className:"selector__head theme-".concat(1),children:"Select reconstruction"}),(0,r.jsxs)("div",{className:"selector__body",children:[(0,r.jsx)(x.Z,{block:!0,list:S,value:g,title:"e-type",color:P.rp,onSelect:h,theme:1}),(0,r.jsx)(x.Z,{block:!0,list:N,value:_,title:"Experiment instance (".concat(N.length,")"),color:P.rp,onSelect:p,anchor:"data",theme:1})]})]})})]})}),(0,r.jsxs)(u.Z,{theme:1,visible:!!_,navItems:[{id:"instanceSection",label:"Instance"},{id:"etypeSection",label:"Population"}],quickSelectorEntries:C,children:[(0,r.jsx)("div",{className:"data-container"}),(0,r.jsxs)(v.Z,{id:"instanceSection",properties:[g,_],title:"Electrophysiological Recordings",children:[(0,r.jsx)(F.Z,{children:"Alex Thomson: supervision, Audrey Mercer: supervision, University College London."}),(0,r.jsx)("p",{className:"mt-4 ",children:"We provide visualization and features for the selected recording."}),(0,r.jsx)(c.Z,{query:k,children:e=>(0,r.jsx)(r.Fragment,{children:!!e&&!!e.length&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"mt-3  mb-2",children:"Patch clamp recording"}),(0,r.jsx)(NexusPlugin,{name:"neuron-electrophysiology",resource:e[0]._source,nexusClient:s}),(0,r.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,r.jsx)(T.Z,{onClick:()=>(0,b.Sv)("".concat(E.$N,"/1_experimental-data/neuronal-electophysiology/nwb/").concat(_,".nwb"),"".concat(_,".nwb")),theme:1,children:"Trace"}),(0,r.jsx)(T.Z,{theme:1,buildIcon:!0,onClick:R,children:"Send to the Build section"})]}),(0,r.jsx)("div",{className:"mt-3",children:(0,r.jsx)(components_TraceRelatedMorphologies,{trace:e[0]._source})})]})})}),(0,r.jsx)(neuron_electrophysiology_IfCurvePerCellGraph,{theme:1,instance:_}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(O.Z,{path:"".concat(E.$N,"/1_experimental-data/neuronal-electophysiology/efeatures-per-cell/").concat(_,"/features.json"),children:e=>(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(neuron_electrophysiology_NeuronFactsheet,{id:"morphometrics",facts:e}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(T.Z,{onClick:()=>(0,b.KO)(e,"".concat(g,"-factsheet.json")),theme:1,children:"Instance factsheet"})})]})})})})]}),(0,r.jsxs)(v.Z,{id:"etypeSection",className:"mt-4",title:"Population",properties:[g],children:[(0,r.jsx)("p",{className:"mb-4",children:"We provide features for the entire e-type group selected."}),g&&(0,r.jsx)(neuron_electrophysiology_IfCurvePerETypeGraph,{theme:1,eType:g}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(O.Z,{path:"".concat(E.$N,"/1_experimental-data/neuronal-electophysiology/efeatures-per-etype/").concat(g,"/features.json"),children:e=>(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(neuron_electrophysiology_NeuronFactsheet,{id:"morphometrics",facts:e}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(T.Z,{onClick:()=>(0,b.KO)(e.values,"".concat(g,"-factsheet.json")),theme:1,children:"Population factsheet"})})]})})})}),(0,r.jsx)(neuron_electrophysiology_ElectrophysiologyTable,{data:e})]})]})]})},{key:"etype",defaultQuery:R.defaultSelection.experimentalData.neuronElectrophysiology});function NeuronElectrophysiologyPage(){let e={title:"Neuron Electrophysiology - Experimental Data | The Hippocampus Hub",description:"Explore neuron electrophysiology data collected from the rat hippocampus. Analyze electrical traces recorded from neurons during single-cell recordings.",keywords:["Neuron Electrophysiology","Hippocampus","Experimental Data","Neuroscience","Single-cell recordings","Electrical Traces","Blue Brain Project"],authors:[{name:"Blue Brain Project"}],creator:"EPFL Blue Brain Project",publisher:"The Hippocampus Hub"};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{name:"keywords",content:e.keywords.join(", ")}),(0,r.jsx)("meta",{name:"author",content:e.authors[0].name}),(0,r.jsx)("meta",{name:"creator",content:e.creator}),(0,r.jsx)("meta",{name:"publisher",content:e.publisher})]}),(0,r.jsx)(V,{})]})}},91479:function(){},15443:function(e){e.exports={authorBox:"styles_authorBox__aSXcg",icon:"styles_icon__2JEej"}},26495:function(e,t,n){"use strict";n.d(t,{$Q:function(){return l},bp:function(){return c},x1:function(){return o}});var r=n(67294),s=n(23148);let a="label";function reforwardRef(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function setDatasets(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,r=[];e.datasets=t.map(t=>{let s=e.datasets.find(e=>e[n]===t[n]);return!s||!t.data||r.includes(s)?{...t}:(r.push(s),Object.assign(s,t),s)})}let i=(0,r.forwardRef)(function(e,t){let{height:n=150,width:i=300,redraw:o=!1,datasetIdKey:l,type:c,data:u,options:d,plugins:h=[],fallbackContent:p,updateMode:m,...f}=e,y=(0,r.useRef)(null),x=(0,r.useRef)(),renderChart=()=>{y.current&&(x.current=new s.kL(y.current,{type:c,data:function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r={labels:[],datasets:[]};return t=e.labels,r.labels=t,setDatasets(r,e.datasets,n),r}(u,l),options:d&&{...d},plugins:h}),reforwardRef(t,x.current))},destroyChart=()=>{reforwardRef(t,null),x.current&&(x.current.destroy(),x.current=null)};return(0,r.useEffect)(()=>{!o&&x.current&&d&&function(e,t){let n=e.options;n&&t&&Object.assign(n,t)}(x.current,d)},[o,d]),(0,r.useEffect)(()=>{if(!o&&x.current){var e,t;e=x.current.config.data,t=u.labels,e.labels=t}},[o,u.labels]),(0,r.useEffect)(()=>{!o&&x.current&&u.datasets&&setDatasets(x.current.config.data,u.datasets,l)},[o,u.datasets]),(0,r.useEffect)(()=>{x.current&&(o?(destroyChart(),setTimeout(renderChart)):x.current.update(m))},[o,d,u.labels,u.datasets,m]),(0,r.useEffect)(()=>{x.current&&(destroyChart(),setTimeout(renderChart))},[c]),(0,r.useEffect)(()=>(renderChart(),()=>destroyChart()),[]),r.createElement("canvas",Object.assign({ref:y,role:"img",height:n,width:i},f),p)});function createTypedChart(e,t){return s.kL.register(t),(0,r.forwardRef)((t,n)=>r.createElement(i,Object.assign({},t,{ref:n,type:e})))}let o=createTypedChart("line",s.ST),l=createTypedChart("bar",s.vn),c=createTypedChart("scatter",s.ho)},92889:function(e){"use strict";e.exports=JSON.parse('{"cACpyr":["95824006","95912002","95824005","95822016","95831006","95831000","95822014","95824002","95914000","95914005","95912005","95914004","95914003","95912004","95912006","95912007","95914002","95914001","95817005","95810006","95810014","95810008","95810007","95810019","95810010","95810011","95810009","95810020","95831005","95810015","95810021","95810013","95822008","95810017","95810016","95822003","95822020","95810029","95822011","95810034","95822010","95822019","95822009","95822002","95822015","95824003","95831003","95822004","95822021","95912003","95822018","95831004","95822000","95822005","95822017","95822007","95824001","95824004","95912000","95912001","95831002","95824000","95831001","95810012","95810030","95810025","95810037","95810026","95810022","95810027","95810018","95810024","95810028","95817010","95822013","95817003","95810031","95817006","95810039","95810032","95822006","95810043","95817007","95810023","95810041","95817009","95810040","95810038","95810033","95817004","95810044","95817008","95810042","95822001","95822012","95808025","95808024","95808021","95808023","95808022"],"cAC":["98205022","98205018","98205021","98205025","98205017","98205020","98205024","97428002","97428001","97428000","97428003","97509009","97509008","97509010","97509011"],"bAC":["99111000","95810036","99111002","99111001","95810035","96711009","97911002","97911001","97911000"],"cNAC":["98D15009","95817000","95817002","95817001","98D15008","99111004","99111007","99111006","99111008","99111005","98513011","98120001","98120000","97717005","98120002","98513009","98513010"]}')}},function(e){e.O(0,[2196,1086,7056,4055,9676,9006,685,5060,2307,9227,9672,5675,9837,8287,9349,9774,2888,179],function(){return e(e.s=9370)}),_N_E=e.O()}]);
//# sourceMappingURL=neuronal-electrophysiology-9862870d28bbb614.js.map