!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="16bfb3aa-30d2-4b50-b442-7c195a596d30",t._sentryDebugIdIdentifier="sentry-dbid-16bfb3aa-30d2-4b50-b442-7c195a596d30")}catch(t){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1604],{91604:function(t,e,r){"use strict";r.r(e);var n=r(85893),a=r(67294),i=r(79958),o=r.n(i),s=r(5994),c=r.n(s);let u={responsive:!0,displayModeBar:!1,staticPlot:!0},useIntersectionObserver=t=>{let[e,r]=(0,a.useState)(!1),n=(0,a.useRef)(null),i=(0,a.useCallback)(t=>{let[e]=t;r(e.isIntersecting)},[]);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(i,t);return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}},[i,t]),[n,e]},getPlotData=(t,e,r,n)=>t?[{type:"histogram",x:t,nbinsx:10,marker:{color:n,opacity:.8}}]:e&&r?[{type:"bar",x:e,y:r,marker:{color:n,opacity:.8}}]:[],formatScientificNotation=t=>{if(1e3>Math.abs(t)&&Number.isInteger(t))return t.toString();if(0===t)return"0";let e=Math.floor(Math.log10(Math.abs(t))),r=t/Math.pow(10,e),n=["⁰","\xb9","\xb2","\xb3","⁴","⁵","⁶","⁷","⁸","⁹"],a=Math.abs(e).toString().split("").map(t=>n[parseInt(t)]).join("");return"".concat(Math.round(100*r)/100,"\xd710").concat(e<0?"⁻":"").concat(a)};e.default=t=>{let{title:e,color:r,values:i,bins:s,counts:l}=t,[b,f]=useIntersectionObserver({rootMargin:"200px 0px"}),d=(0,a.useMemo)(()=>{let t={margin:{l:24,t:24,r:16,b:16},font:{size:10,family:"Titillium Web"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargap:0,title:e,xaxis:{tickmode:"auto",nticks:5,tickformat:formatScientificNotation},yaxis:{tickmode:"auto",nticks:5,tickformat:formatScientificNotation}},r=i||s;if(r&&1===r.length){let e=r[0];t.xaxis.range=[e-1,e+1],t.xaxis.fixedrange=!0}return t},[e,i,s]);return(0,a.useEffect)(()=>{if(!f||!b.current)return;let t=b.current,e=getPlotData(i,s,l,r),drawPlot=()=>{o().newPlot(t,e,d,u)};return"requestIdleCallback"in window?window.requestIdleCallback(drawPlot):setTimeout(drawPlot,0),()=>{o().purge(t)}},[d,i,s,l,r,f]),(0,n.jsx)("div",{className:c().container,ref:b})}},5994:function(t){t.exports={container:"histogram_container__5TzzG"}}}]);
//# sourceMappingURL=1604.4b2ccb13246ac9fe.js.map