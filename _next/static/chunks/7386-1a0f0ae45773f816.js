!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bdae86be-5da4-4680-a205-21ffc95de49c",e._sentryDebugIdIdentifier="sentry-dbid-bdae86be-5da4-4680-a205-21ffc95de49c")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7386],{21906:function(e,t,a){"use strict";var n=a(85893),r=a(67294),l=a(2307),o=a(25675),i=a.n(o),s=a(41664),c=a.n(s),d=a(17931);t.Z=e=>{let{currentInstance:t,MorphologyData:a,isMorphologyLibrary:o}=e,s=(0,r.useMemo)(()=>{let e=[{title:"Morphology",dataIndex:"morphology",key:"morphology",width:150,render:(e,t)=>o?(0,n.jsx)(c(),{href:"/reconstruction-data/morphology-library/?layer=".concat(t.layer,"&etype=").concat(t.etype,"&mtype=").concat(t.mtype,"&morphology=").concat(e),children:e}):(0,n.jsx)(c(),{href:"/experimental-data/neuronal-morphology/?layer=".concat(t.layer,"&mtype=").concat(t.mtype,"&instance=").concat(t.morphology),children:e})},{title:"M-type",dataIndex:"mtype",key:"mtype",width:150}];return o||e.push({title:"Preview",dataIndex:"morphology",key:"preview",width:220,render:e=>(0,n.jsx)(i(),{src:"".concat(d.$N,"/images/1_experimental-data/neuronal-morphology/").concat(e,".png"),alt:"morphology preview ".concat(e),width:200,height:100,style:{height:"auto"}})}),e},[o]),u=(0,r.useMemo)(()=>{let e;return Array.isArray(a)&&(e=o?a.find(e=>e.morphology===t):a.find(e=>e.name===t))?[{key:e.name||e.morphology,layer:e.layer,mtype:e.mtype,morphology:e.morphology}]:[]},[t,o,a]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{columns:s,dataSource:u,pagination:!1,scroll:{x:"max-content"}}),0===u.length&&(0,n.jsxs)("p",{children:["No data found for the current instance: ",t]})]})}},8404:function(e,t,a){"use strict";a.d(t,{Z:function(){return components_Factsheet}});var n=a(85893);a(67294);var r=a(76343),l=a(14293),o=a.n(l);let i={MOhm:"MΩ"};var components_Unit=e=>{var t;let{value:a=""}=e;return(0,n.jsx)(n.Fragment,{children:null!==(t=i[a])&&void 0!==t?t:a})},s=a(43483);let c=(0,s.o)(),FactsheetSingleValueEntry=e=>{let{fact:t}=e;return(0,n.jsxs)("div",{className:"row mt-1",children:[(0,n.jsx)("div",{className:"col-xs-6 col-sm-4 name",children:(0,n.jsx)(c,{term:t.name,description:t.description})}),(0,n.jsx)("div",{className:"col-xs-6 col-sm-8 value",children:o()(t.value)?(0,n.jsx)("span",{children:"-"}):(0,n.jsxs)("span",{children:[(0,n.jsx)(r.Z,{value:t.value})," ",(0,n.jsx)(components_Unit,{value:t.units||t.unit})]})})]})},FactsheetSingleMeanStdEntry=e=>{var t,a,r,l,o,i,s,d;let{fact:u}=e,m=null!==(i=null===(t=u.value_map)||void 0===t?void 0:t.mean)&&void 0!==i?i:null!==(o=null===(a=u.values)||void 0===a?void 0:a[0])&&void 0!==o?o:"-",p=null!==(d=null===(r=u.value_map)||void 0===r?void 0:r.std)&&void 0!==d?d:null!==(s=null===(l=u.values)||void 0===l?void 0:l[1])&&void 0!==s?s:"-",formatValue=e=>"number"==typeof e?e.toFixed(3):e,formatNumberWithoutCommas=e=>"number"==typeof e?e.toString().replace(/,/g,""):e;return(0,n.jsxs)("div",{className:"row mt-1",children:[(0,n.jsx)("div",{className:"col-xs-4 name",children:(0,n.jsx)(c,{term:u.name,description:u.description})}),(0,n.jsxs)("div",{className:"col-xs-4 value",children:[formatNumberWithoutCommas(formatValue(m)),"-"!==p?(0,n.jsxs)(n.Fragment,{children:[" \xb1 ",formatNumberWithoutCommas(formatValue(p))]}):"",u.units||u.unit&&(0,n.jsxs)(n.Fragment,{children:[" ",u.units||u.unit]})]})]})},FactsheetMapValueEntry=e=>{let{fact:t}=e,a=Math.max.apply(null,Object.values(t.value_map).map(e=>parseFloat(e))),l=t.units||t.unit,o=Object.entries(t.value_map).map(e=>{let[t,o]=e,i=parseFloat(o)/a*80;return(0,n.jsxs)("div",{className:"row mb-1",children:[(0,n.jsxs)("div",{className:"col-xs-6 pos-relative",children:[t,(0,n.jsx)("div",{className:"bar",style:{width:"".concat(i,"%")}})]}),(0,n.jsxs)("div",{className:"col-xs-6",children:[(0,n.jsx)(r.Z,{value:o})," ",(0,n.jsx)(components_Unit,{value:l})]})]},t)});return(0,n.jsxs)("div",{className:"row mt-1",children:[(0,n.jsx)("div",{className:"col-xs-6 col-lg-4 name",children:(0,n.jsx)(c,{term:t.name,description:t.description})}),(0,n.jsx)("div",{className:"col-xs-6 col-lg-8",children:o})]})},FactsheetEntry=e=>{let{fact:t}=e;return t.value_map&&!o()(t.value_map.mean)&&!o()(t.value_map.std)||Array.isArray(t.values)?(0,n.jsx)(FactsheetSingleMeanStdEntry,{fact:t}):t.value_map?(0,n.jsx)(FactsheetMapValueEntry,{fact:t}):(0,n.jsx)(FactsheetSingleValueEntry,{fact:t})};var components_Factsheet=e=>{let{facts:t,className:a=""}=e;return(0,n.jsx)("div",{className:"".concat("factsheet__","basis ").concat(a),children:t.map((e,t)=>(0,n.jsx)(FactsheetEntry,{fact:e},"".concat(e.name,"-").concat(t)))})}},76343:function(e,t,a){"use strict";a(67294),t.Z=e=>{let{value:t,significantFigures:a=5,thousandSeparator:n=!0,prefix:r="",suffix:l=""}=e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=parseFloat(e);if(!Number.isFinite(l))return e;let o=a?l.toLocaleString("en",{maximumSignificantDigits:t}):l.toPrecision(t);return"".concat(n).concat(o).concat(r)}(t,a,n,r,l)}},8940:function(e,t,a){"use strict";a.d(t,{c:function(){return PranavViewer}});var n=a(85893),r=a(67294),l=a(64713),o=a(42978),i=a(32071),s=a(8380),c=a(14561),d=a(35829),u=a(40949),m=a.n(u);let p=["#004282","#3d6099","#238ec8","#17b2dc","#b0dcf1","#26a065","#99c68e","#fecd70","#e97c1d","#dc1921"];function Options(e){return(0,n.jsx)(l.default.Group,{options:e.options.map(e=>({label:e,value:e})),onChange:t=>{let{target:{value:a}}=t;return e.onChange(a)},value:e.value,optionType:"button",buttonStyle:"solid"})}function PranavViewer(e){let{className:t,url:a}=e,[l,s]=r.useState("BPAP"),[c,d]=r.useState("Amplitude");return(0,n.jsxs)("div",{className:(0,o.AK)(m().main,t),children:[(0,n.jsxs)("header",{children:[(0,n.jsx)(Options,{options:["BPAP","EPSP"],value:l,onChange:s}),(0,n.jsx)(Options,{options:["Amplitude","Delay"],value:c,onChange:d})]}),(0,n.jsx)(i.f,{href:"".concat(a,"/").concat(l.toLowerCase(),"_result.csv"),loader:"Amplitude"===c?pranavLoaderAmplitude:pranavLoaderDelay})]})}async function pranavLoad(e,t,a){let n=await fetch(e);if(!n.ok)throw Error("Error #".concat(n.status,": ").concat(n.statusText));let r=await n.text(),[l,...o]=r.split("\n").filter(e=>e.trim().length>0),i=function(e,t){var a;let n=e.split(",").map(e=>e.trim().toLowerCase()),r=null!==(a=t.find(e=>n.indexOf(e)>-1))&&void 0!==a?a:"";return n.indexOf("voltage_attenuation"),{id:makeFieldGetter(n.indexOf("unique_int_id")),parent:makeFieldGetter(n.indexOf("parent_unique_int_id")),x:makeFieldGetter(n.indexOf("x")),y:makeFieldGetter(n.indexOf("y")),z:makeFieldGetter(n.indexOf("z")),radius:makeFieldGetter(n.indexOf("radius")),u:makeFieldGetter(n.indexOf(r)),v:makeFieldGetter(n.indexOf(r))}}(l,t),u=0,m=0,h=0,v=0,x=o.map(e=>{let t=e.split(","),a=i.parent(t),n=i.x(t),r=i.y(t),l=i.z(t);a<1&&(u++,m+=n,h+=r,v+=l);let o={type:c.d.Unknown,index:i.id(t),parent:a,x:n,y:r,z:l,radius:i.radius(t),u:i.u(t),v:i.v(t)};return o});x.forEach((e,t)=>{Number.isNaN(e.u)&&console.log("\uD83D\uDE80 [PranavViewer] index, node = ",t,e)});let y=x.reduce((e,t)=>Math.min(e,t.u),Number.MAX_VALUE),f=x.reduce((e,t)=>Math.max(e,t.u),-Number.MAX_VALUE),g=1/(f-y);x.forEach((e,t)=>{x[t].u=g*(e.u-y),x[t].v=g*(e.v-y)});let b=u>0?new d.Ui(m,h,v).scale(1/u):void 0;return{legend:{colorRamp:p,labelMin:"".concat(y.toFixed(3)," ").concat(a),labelMax:"".concat(f.toFixed(3)," ").concat(a)},morphologies:[{nodes:new s.D(x),colors:p,texture:{magFilter:"LINEAR",minFilter:"LINEAR"},center:b}]}}let pranavLoaderAmplitude=async e=>pranavLoad(e,["voltage_attenuation","psp_amplitude_ratio"],""),pranavLoaderDelay=async e=>pranavLoad(e,["delay","peak_delays"],"ms");function makeFieldGetter(e){return t=>parseFloat(t[e])}},43483:function(e,t,a){"use strict";a.d(t,{o:function(){return termFactory}});var n=a(85893);a(67294);var r=a(94055),l=a(33511),o=a.n(l);let termFactory=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return a=>{let{className:l,term:i,description:s}=a,c=s||e[i],d=t?t(i):i;return c?(0,n.jsx)(r.default,{title:c,destroyTooltipOnHide:!0,children:(0,n.jsx)("span",{className:"".concat(o().container," ").concat(null!=l?l:""),children:d})}):(0,n.jsx)("span",{className:l,children:d})}}},28354:function(e,t,a){"use strict";var n=a(85893),r=a(67294),l=a(11163);t.Z=(e,t)=>()=>{let a=(0,l.useRouter)();return(0,r.useEffect)(()=>{if(a.isReady&&!a.query[t.key]){let e=t.defaultQuery;a.replace({query:e},void 0,{shallow:!0})}},[a.query]),(0,n.jsx)(e,{})}},91968:function(e,t,a){"use strict";var n=a(85893),r=a(67294),l=a(60192),o=a(5152),i=a.n(o),s=a(61267);let c=i()(()=>Promise.all([a.e(2960),a.e(8660)]).then(a.bind(a,58660)),{loadableGenerated:{webpack:()=>[58660]},ssr:!1});t.Z=e=>{let{plotData:t}=e,[a,o]=(0,r.useState)([]),[i,d]=(0,r.useState)({}),[u,m]=(0,r.useState)(!0),[p,h]=(0,r.useState)(!1),[v,x]=(0,r.useState)(null),[y,f]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{if(!t||!t.value_map||Array.isArray(t.value_map)&&0===t.value_map.length||0===Object.keys(t.value_map).length){console.log("No plot data available"),m(!1),h(!0);return}try{let e;m(!0),h(!1),e=Array.isArray(t.value_map)?t.value_map.map((e,t)=>({x:Array.from({length:e.length},(t,a)=>a*(5e3/(e.length-1))),y:e,type:"scatter",mode:"lines",name:"Trace ".concat(t+1),line:{color:"hsl(".concat(137.5*t%360,", 70%, 50%)"),width:1},visible:!!y||"legendonly"})):Object.entries(t.value_map).map((e,t)=>{let[a,n]=e;return{x:Array.from({length:n.length},(e,t)=>t*(5e3/(n.length-1))),y:n,type:"scatter",mode:"lines",name:a,line:{color:"hsl(".concat(137.5*t%360,", 70%, 50%)"),width:1},visible:!!y||"legendonly"}}),o(e),d({xaxis:{title:{text:"Time(s)",standoff:20},showticklabels:!0,tickmode:"array",tickvals:[0,1e3,2e3,3e3,4e3,5e3],ticktext:["0 ms","1","2","3","4","5"],range:[0,5e3]},yaxis:{title:{text:t.units?"Voltage (".concat(t.units,")"):"Voltage",standoff:40},showticklabels:!0},autosize:!0,margin:{l:60,r:50,b:100,t:50,pad:4},hovermode:"x unified",showlegend:!0,legend:{orientation:"h",x:0,y:1.2},plot_bgcolor:"#EFF1F8",paper_bgcolor:"#EFF1F8"}),m(!1)}catch(e){console.error("Error processing plot data:",e),m(!1),h(!0)}},[t,y]),(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{onClick:()=>{f(!y);let e=a.map(e=>({...e,visible:!y||"legendonly"}));o(e)},style:{marginBottom:"1rem",padding:"0.25rem .5rem",backgroundColor:s.x8.blue,color:"white",border:"none",borderRadius:"3px",cursor:"pointer"},children:y?"Hide All Traces":"Show All Traces"}),(0,n.jsx)("div",{style:{width:"100%",height:"500px",position:"relative"},children:u?(0,n.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,n.jsx)(l.Z,{className:"w-8 h-8 animate-spin"})}):p||!a.length?(0,n.jsx)("p",{className:"text-center text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:"No data available."}):(0,n.jsx)(c,{data:a,layout:i,useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{responsive:!0},onLegendItemClick:()=>!1,onLegendItemHover:e=>{x(e.curveNumber)},onLegendItemUnhover:()=>{x(null)}})})]})}},40949:function(e){e.exports={main:"pranav-viewer_main__vNeI_"}},33511:function(e){e.exports={container:"styles_container__pHcWR"}}}]);
//# sourceMappingURL=7386-1a0f0ae45773f816.js.map