!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4b699e30-e2b4-4491-9884-58117bee71ce",e._sentryDebugIdIdentifier="sentry-dbid-4b699e30-e2b4-4491-9884-58117bee71ce")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3356],{83588:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/predictions/spontaneouns-activity",function(){return n(78863)}])},78863:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return SpontaneousActivityPage}});var s=n(85893),a=n(9008),i=n.n(a),l=n(67294),c=n(11163),r=n(71376),o=n(82718),p=n(78433),m=n(67264),d=n(13210),u=n(3725),y=n(50818),h=n(35930),f=n(64632),x=n(22923),g=n(17931),j=n(33638),_=n(91968),v=n(42978);let b=[25e-5,5e-4,75e-5,.001,.00125,.0015,.00175,.002],w=[1,1.5,2],getMinisRate=()=>b,getCa0=()=>w,getMtypes=()=>[...new Set(x.map(e=>e.mtype))].sort(),getEtypes=e=>[...new Set(x.filter(t=>t.mtype===e).map(e=>e.etype))].sort();var SpontaneounsActivity=()=>{let e=(0,c.useRouter)(),[t,n]=(0,l.useState)({}),[a,i]=(0,l.useState)(null),[x,S]=(0,l.useState)(null),[k,N]=(0,l.useState)(null),[E,T]=(0,l.useState)(null);(0,l.useEffect)(()=>{if(!e.isReady)return;let{mtype:t,etype:s,ca_o:a,minis_rate:i}=e.query,l={};if("string"==typeof t&&(l.mtype=t),"string"==typeof a&&(l.ca_o=parseFloat(a)),"string"==typeof i&&(l.minis_rate=parseFloat(i)),"string"==typeof t){let e=getEtypes(t);"string"==typeof s&&e.includes(s)?l.etype=s:l.etype=e[0]||""}if(n(l),0===Object.keys(l).length){let t=getMtypes()[0],s={mtype:t,etype:getEtypes(t)[0]||"",ca_o:1,minis_rate:25e-5};n(s),e.replace({query:s},void 0,{shallow:!0})}},[e.isReady,e.query]),(0,l.useEffect)(()=>{let fetchData=async()=>{let{ca_o:e,minis_rate:n,mtype:s,etype:a}=t;if(void 0===e||void 0===n||!s||!a)return;let l="".concat(g.$N,"/5_prediction/spontaneous-activity/").concat(e,"-").concat(n,"/").concat(s,"-").concat(a);for(let{name:e,setter:t}of[{name:"spike-time",setter:i},{name:"mean-firing-rate",setter:S},{name:"trace",setter:N}])try{let n=await fetch("".concat(l,"/").concat(e,".json"));if(n.ok){let e=await n.json();t(e)}else if(404===n.status)console.warn("".concat(e," data not found")),t(null);else throw Error("HTTP error! status: ".concat(n.status))}catch(n){console.error("Error fetching ".concat(e," data:"),n),t(null)}try{let e=await fetch("".concat(l,"/spike-time-plot.svg"));if(e.ok){let t=await e.text();T(t)}else if(404===e.status)console.warn("Spike time plot SVG not found"),T(null);else throw Error("HTTP error! status: ".concat(e.status))}catch(e){console.error("Error fetching spike-time-plot.svg:",e),T(null)}};fetchData()},[t]);let setParams=t=>{let n={...e.query,...t};e.push({query:n,pathname:e.pathname},void 0,{shallow:!0})},handleMtypeSelect=e=>{let t=getEtypes(e),s=t[0]||"";n(t=>({...t,mtype:e,etype:s})),setParams({mtype:e,etype:s})},handleEtypeSelect=e=>{n(t=>({...t,etype:e})),setParams({etype:e})},M=getMtypes(),R=getEtypes(t.mtype);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{theme:5,children:(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full lg:items-center mt-40 lg:mt-0",children:[(0,s.jsx)("div",{className:"w-full lg:w-1/3 md:w-full md:flex-none mb-8 md:mb-8 lg:pr-0",children:(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(p.Z,{title:"Spontaneous Activity",subtitle:"Predictions",theme:5}),(0,s.jsx)("div",{className:"w-full",role:"information",children:(0,s.jsx)(m.Z,{children:(0,s.jsx)("p",{children:"We simulated the network using different levels of spontaneous synaptic release (0.00025 - 0.002 Hz) and different extracellular calcium concentration (1 - 2 mM). These simulations can give a prediction on how the CA1 could behave without any external inputs at in vivo or in vitro extracellular calcium concentrations (respectively 1 and 2 mM). In these conditions, the activity is very sparse and irregular."})})})]})}),(0,s.jsxs)("div",{className:"flex flex-col-reverse md:flex-row-reverse gap-8 mb-12 md:mb-0 mx-8 md:mx-0 lg:w-2/3 md:w-full flex-grow md:flex-none",children:[(0,s.jsxs)("div",{className:"selector__column theme-".concat(5," w-full"),children:[(0,s.jsx)("div",{className:"selector__head theme-".concat(5),children:"Select reconstruction"}),(0,s.jsxs)("div",{className:"selector__body",children:[(0,s.jsx)(d.Z,{block:!0,list:M,value:t.mtype,title:"M-type ".concat(M.length?"("+M.length+")":""),onSelect:handleMtypeSelect,theme:5}),(0,s.jsx)(d.Z,{block:!0,list:R,value:t.etype,title:"E-type ".concat(R.length?"("+R.length+")":""),onSelect:handleEtypeSelect,theme:5})]})]}),(0,s.jsxs)("div",{className:"selector__column theme-".concat(5," w-full"),children:[(0,s.jsx)("div",{className:"selector__head theme-".concat(5),children:"Configure"}),(0,s.jsx)("div",{className:"selector__body",children:(0,s.jsx)(u.Z,{path:"5_prediction/spontaneous-activity/",xRange:w,yRange:b,xAxisLabel:"Ca2+ (mM)",yAxisLabel:"Spontaneous synaptic release (Hz)",theme:5,onSelect:(e,t)=>{n(n=>({...n,ca_o:e,minis_rate:t})),setParams({ca_o:e,minis_rate:t})},selectedX:t.ca_o,selectedY:t.minis_rate})})]})]})]})}),(0,s.jsxs)(y.Z,{theme:5,navItems:[{id:"spikeTimeSection",label:"Spike Time"},{id:"meanFiringRateSection",label:"Mean Firing Rate"},{id:"traceSection",label:"Traces"}],quickSelectorEntries:[{title:"CA_0",key:"ca_o",getValuesFn:getCa0,sliderRange:w},{title:"Minis Rate",key:"minis_rate",getValuesFn:getMinisRate,sliderRange:b},{title:"M-type",key:"mtype",values:M,setFn:handleMtypeSelect},{title:"E-Type",key:"etype",values:R,setFn:handleEtypeSelect}],children:[(0,s.jsxs)(h.Z,{id:"spikeTimeSection",properties:[t.mtype+"-"+t.etype],title:"Spike Time",children:[(0,s.jsx)("div",{className:"graph",children:E?(0,s.jsx)("div",{className:"svg-container",style:{width:"100%",height:"550px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:E},className:"svg-content"})}):(0,s.jsx)("p",{children:"Spike time plot not available"})}),(0,s.jsxs)(j.Z,{theme:5,onClick:()=>a&&(0,v.KO)(a,"spike-time-".concat(t.mtype,"-").concat(t.etype,"_").concat(t.minis_rate,"-").concat(t.ca_o)),children:["Spike time","  ",(0,s.jsxs)("span",{className:"!ml-0 collapsible-property small",children:[t.mtype,"-",t.etype]}),(0,s.jsxs)("span",{className:"!ml-0 collapsible-property small",children:[t.minis_rate,"-",t.ca_o]})]})]}),(0,s.jsxs)(h.Z,{id:"meanFiringRateSection",properties:[t.mtype+"-"+t.etype],title:"Mean Firing Rate",children:[(0,s.jsx)("div",{className:"graph",children:(0,s.jsx)(f.Z,{plotData:x,xAxis:"Firing Rate (Hz)",yAxis:"Frequency",xAxisTickStep:.1})}),(0,s.jsxs)(j.Z,{theme:5,onClick:()=>(0,v.KO)(x,"mean-firing-trate-".concat(t.mtype,"-").concat(t.etype,"_").concat(t.minis_rate,"-").concat(t.ca_o)),children:["Mean Firing Rate","  ",(0,s.jsxs)("span",{className:"!ml-0 collapsible-property small",children:[t.mtype,"-",t.etype]}),(0,s.jsxs)("span",{className:"!ml-0 collapsible-property small",children:[t.minis_rate,"-",t.ca_o]})]})]}),(0,s.jsxs)(h.Z,{id:"traceSection",properties:[t.mtype+"-"+t.etype],title:"Traces",children:[(0,s.jsx)("div",{className:"graph",children:(0,s.jsx)(_.Z,{plotData:k})}),(0,s.jsxs)(j.Z,{theme:5,onClick:()=>(0,v.KO)(k,"mean-firing-trate-".concat(t.mtype,"-").concat(t.etype,"_").concat(t.minis_rate,"-").concat(t.ca_o)),children:["Trace","  ",(0,s.jsxs)("span",{className:"!ml-0 collapsible-property small",children:[t.mtype,"-",t.etype]}),(0,s.jsxs)("span",{className:"!ml-0 collapsible-property small",children:[t.minis_rate,"-",t.ca_o]})]})]})]})]})};function SpontaneousActivityPage(){let e={title:"Spontaneous Activity - Predictions | The Hippocampus Hub",description:"Explore predictions on spontaneous network activity in the hippocampus. Understand synaptic release probabilities, extracellular calcium concentrations, and their effects on spike time, mean firing rate, and membrane potential traces.",keywords:["Spontaneous Activity","Calcium","Synaptic Release","Spike Time","Firing Rate","Hippocampus","Neuroscience","Blue Brain Project","The Hippocampus Hub"],author:"Blue Brain Project",creator:"EPFL Blue Brain Project",publisher:"The Hippocampus Hub"};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{name:"description",content:e.description}),(0,s.jsx)("meta",{name:"keywords",content:e.keywords.join(", ")}),(0,s.jsx)("meta",{name:"author",content:e.author}),(0,s.jsx)("meta",{name:"creator",content:e.creator}),(0,s.jsx)("meta",{name:"publisher",content:e.publisher})]}),(0,s.jsx)(SpontaneounsActivity,{})]})}}},function(e){e.O(0,[2196,7056,9676,4922,8287,7577,9774,2888,179],function(){return e(e.s=83588)}),_N_E=e.O()}]);
//# sourceMappingURL=spontaneouns-activity-e4f47e29cb3e1df1.js.map