!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ca113f1a-9043-4471-b64b-a57276422a80",e._sentryDebugIdIdentifier="sentry-dbid-ca113f1a-9043-4471-b64b-a57276422a80")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5524],{48230:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reconstruction-data/neuron-models",function(){return n(90622)}])},1655:function(e,t,n){"use strict";var r=n(85893),a=n(67294),o=n(55733),c=n.n(o),l=n(93162),s=n(33638);t.Z=e=>{let{theme:t,resources:n}=e,[o,i]=(0,a.useState)(!1),[p,y]=(0,a.useState)(null),addResourceToZip=async(e,t)=>{try{let n=await fetch(t);if(!n.ok)throw Error("Failed to fetch resource: ".concat(t));let r=t.split("/").pop()||"",a=await n.blob();if(r.endsWith(".zip"))e.file(r,a);else{let o=n.headers.get("content-type");if(o&&o.includes("application/json")){let r=await n.json(),a=t.split("/").filter(Boolean).pop()||"",o=e.folder(a);if(o)for(let e of r){let n="".concat(t).concat(e);await addResourceToZip(o,n)}}else e.file(r,a)}}catch(e){console.warn("Failed to add resource: ".concat(t),e)}},downloadResources=async()=>{i(!0),y(null);let e=new(c());try{for(let t of n)await addResourceToZip(e,t);let t=await e.generateAsync({type:"blob"});(0,l.saveAs)(t,"neuron_model.zip")}catch(e){console.error("Error downloading resources:",e),y(e instanceof Error?e.message:"An unknown error occurred")}finally{i(!1)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{onClick:downloadResources,theme:t,isLoading:o,children:o?"Downloading...":"Download Model"}),p&&(0,r.jsx)("div",{style:{color:"red",marginTop:"10px"},children:p})]})}},97145:function(e,t,n){"use strict";var r=n(85893),a=n(67294),o=n(99477),c=n(97157),l=n(71711),s=n(61267),i=n(17931);t.Z=e=>{let{value:t,onSelect:n,theme:p=1}=e,y=(0,a.useRef)(null),[_,d]=(0,a.useState)(null),[m,u]=(0,a.useState)([]),[h,A]=(0,a.useState)([]),[C,S]=(0,a.useState)([]),[P,g]=(0,a.useState)(!1),[x,f]=(0,a.useState)(null),[b,j]=(0,a.useState)(null),[N,w]=(0,a.useState)(null),v={SLM:.224*1.6,SR:.684656,SP:.144,SO:.258*1.6};return(0,a.useEffect)(()=>{if(!y.current)return;let e=new o.xsS;e.background=new o.Ilk(3224404);let t=y.current.clientWidth/y.current.clientHeight,n=new o.iKG(-(5*t/2),5*t/2,2.5,-2.5,.1,1e3);n.position.set(0,-10,90),n.lookAt(0,0,1),n.zoom=2.2,n.updateProjectionMatrix();let r=new o.CP7({antialias:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(y.current.clientWidth,y.current.clientHeight),y.current.appendChild(r.domElement),f(e),j(n),w(r),g(!0);let handleResize=()=>{if(y.current&&r&&n){let e=y.current.clientWidth,t=y.current.clientHeight;r.setSize(e,t);let a=e/t;n.left=-5*a/2,n.right=5*a/2,n.top=2.5,n.bottom=-2.5,n.updateProjectionMatrix()}};return window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize),y.current&&y.current.removeChild(r.domElement)}},[]),(0,a.useEffect)(()=>{if(!P||!x||!b||!N)return;let e=new o.vBJ({color:16777215}),t=[],n=[],r=[],a=s.ug.length,p=0,y=1.5,_=s.ug.reduce((e,t)=>e+(v[t]||1)+0,-0);p=_/2;let d=new c.J;d.load("".concat(i.sb,"/assets/fonts/Titillium_Web_Light_.json"),c=>{for(let i=0;i<a;i++){let a=v[s.ug[i]]||1,_=o.M8C.degToRad(10),d=y-2*a*Math.tan(_),m=new o.YT8([new o.Pa4(-y/2,a/2,0),new o.Pa4(0,a/2+.02,0),new o.Pa4(y/2,a/2,0)]),u=new o.YT8([new o.Pa4(-d/2,-a/2,0),new o.Pa4(0,-a/2+.02,0),new o.Pa4(d/2,-a/2,0)]),h=m.getPoints(20),A=u.getPoints(20),C=new o.bnF;C.moveTo(h[0].x,h[0].y),h.forEach(e=>C.lineTo(e.x,e.y)),A.reverse().forEach(e=>C.lineTo(e.x,e.y)),C.lineTo(h[0].x,h[0].y);let S=new o.O7d(C,{depth:1,bevelEnabled:!1}),P=new o.Kj0(S,e.clone());P.userData.layer=s.ug[i],P.userData.index=i,P.position.set(0,p-a/2,.05),x.add(P),t.push(P);let g=new o.TOt(S),f=new o.nls({color:16777215,linewidth:1,linecap:"round",linejoin:"round"}),b=new o.ejS(g,f);b.position.set(0,p-a/2,.05),x.add(b),n.push(b);let j=new l.M(s.ug[i],{font:c,size:.06,height:.001,curveSegments:24,bevelEnabled:!0,bevelThickness:.005,bevelSize:.002});j.computeBoundingBox();let N=j.boundingBox.max.x-j.boundingBox.min.x,w=new o.vBJ({color:16777215}),B=new o.Kj0(j,w);B.position.set(-N/2,p-a+.06,1.05),x.add(B),r.push(B),p-=a+0,y=d}u(t),A(n),S(r)})},[P,x,b,N]),(0,a.useEffect)(()=>{if(!P||!x||!b||!N||0===m.length)return;let e=new o.iMs,t=new o.FM8(-10,-10),r=null,updateMousePosition=e=>{let n=N.domElement.getBoundingClientRect();t.x=(e.clientX-n.left)/n.width*2-1,t.y=-(2*((e.clientY-n.top)/n.height))+1},onMouseMove=e=>{updateMousePosition(e)},onClick=r=>{updateMousePosition(r),e.setFromCamera(t,b);let a=e.intersectObjects(m);if(a.length>0){let e=a[0].object,t=e.userData.layer;n&&t&&(n(t),d(null))}},onHover=()=>{e.setFromCamera(t,b);let n=e.intersectObjects(m);if(n.length>0){document.body.style.cursor="pointer";let e=n[0].object,t=e.userData.index;r!==e&&(d(t),r=e)}else document.body.style.cursor="default",r&&(d(null),r=null)};window.addEventListener("mousemove",onMouseMove),window.addEventListener("click",onClick);let animate=()=>{requestAnimationFrame(animate),onHover(),N.render(x,b)};return animate(),e.setFromCamera(t,b),onHover(),()=>{window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("click",onClick),y.current&&y.current.removeChild(N.domElement)}},[P,x,b,N,m]),(0,a.useEffect)(()=>{P&&0!==m.length&&m.forEach((e,n)=>{let r=e.material,a=h[n].material,o=C[n].material,c=s.rS[p];n===_&&t!==s.ug[n]?(r.color.set(c.hover),a.color.set(c.selected),o.color.set(c.selected)):t===s.ug[n]?(r.color.set(c.selected),a.color.set(c.selectedEdges),o.color.set(16777215)):(r.color.set(c.default),a.color.set(c.selected),o.color.set(c.selected)),r.needsUpdate=!0,a.needsUpdate=!0,o.needsUpdate=!0})},[_,t,p,P,m,h,C]),(0,r.jsx)("div",{className:"flex align-middle justify-center",style:{width:"100%",minHeight:"400px"},children:(0,r.jsx)("div",{ref:y,style:{width:"calc(100% - 2px)",minHeight:"400px"}})})}},90622:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return NeuronModelsPage}});var r=n(85893),a=n(9008),o=n.n(a),c=n(67294),l=n(41664),s=n.n(l),i=n(11163),p=n(78433),y=n(67264),_=n(71376),d=n(50818),m=n(13210),u=n(35930),h=n(61267),A=n(28354),C=n(56154),S=n(17931),P=n(42978),g=n(33638),x=n(91968),f=n(8404),b=JSON.parse('[{"name":"CA1_int_bAC_011017HP2_20190329115307","morphology":"011017HP2","layer":"SO","etype":"bAC","mtype":"SO_OLM"},{"name":"CA1_int_bAC_011023HP2_20190329115556","morphology":"011023HP2","layer":"SO","etype":"bAC","mtype":"SO_BS"},{"name":"CA1_int_bAC_011127HP1_20190329115610","morphology":"011127HP1","layer":"SLM","etype":"bAC","mtype":"SLM_PPA"},{"name":"CA1_int_bAC_060314AM2_20190329115909","morphology":"060314AM2","layer":"SP","etype":"bAC","mtype":"SP_PVBC"},{"name":"CA1_int_bAC_971114B_20190329120113","morphology":"971114B","layer":"SO","etype":"bAC","mtype":"SO_Tri"},{"name":"CA1_int_bAC_980120A_20190329120234","morphology":"980120A","layer":"SO","etype":"bAC","mtype":"SO_BP"},{"name":"CA1_int_cAC_010710HP2_20190328145252","morphology":"010710HP2","layer":"SP","etype":"cAC","mtype":"SP_Ivy"},{"name":"CA1_int_cAC_011017HP2_20190328145524","morphology":"011017HP2","layer":"SO","etype":"cAC","mtype":"SO_OLM"},{"name":"CA1_int_cAC_031031AM1_20190328150015","morphology":"031031AM1","layer":"SP","etype":"cAC","mtype":"SP_CCKBC"},{"name":"CA1_int_cAC_970627BHP1_20190328160727","morphology":"970627BHP1","layer":"SP","etype":"cAC","mtype":"SP_PVBC"},{"name":"CA1_int_cAC_980120A_20190328160925","morphology":"980120A","layer":"SO","etype":"cAC","mtype":"SO_BP"},{"name":"CA1_int_cAC_980513B_20190328161527","morphology":"980513B","layer":"SP","etype":"cAC","mtype":"SP_BS"},{"name":"CA1_int_cAC_990611HP2_20190328162145","morphology":"990611HP2","layer":"SR","etype":"cAC","mtype":"SR_SCA"},{"name":"CA1_int_cNAC_010710HP2_20190328163258","morphology":"010710HP2","layer":"SP","etype":"cNAC","mtype":"SP_Ivy"},{"name":"CA1_int_cNAC_011017HP2_20190328164612","morphology":"011017HP2","layer":"SO","etype":"cNAC","mtype":"SO_OLM"},{"name":"CA1_int_cNAC_011023HP2_20190328164923","morphology":"011023HP2","layer":"SO","etype":"cNAC","mtype":"SO_BS"},{"name":"CA1_int_cNAC_060314AM2_20190328165336","morphology":"060314AM2","layer":"SP","etype":"cNAC","mtype":"SP_PVBC"},{"name":"CA1_int_cNAC_970509HP2_20190305115627","morphology":"970509HP2","layer":"SO","etype":"cNAC","mtype":"SO_Tri"},{"name":"CA1_int_cNAC_970627BHP1_20190306162834","morphology":"970627BHP1","layer":"SP","etype":"cNAC","mtype":"SP_PVBC"},{"name":"CA1_int_cNAC_970717D_20190307182510","morphology":"970717D","layer":"SP","etype":"cNAC","mtype":"SP_Ivy"},{"name":"CA1_int_cNAC_970911C_20190305120404","morphology":"970911C","layer":"SP","etype":"cNAC","mtype":"SP_AA"},{"name":"CA1_int_cNAC_971114B_20190329154607","morphology":"971114B","layer":"SO","etype":"cNAC","mtype":"SO_Tri"},{"name":"CA1_int_cNAC_980120A_20190329155034","morphology":"980120A","layer":"SO","etype":"cNAC","mtype":"SO_BP"},{"name":"CA1_int_cNAC_980513B_20190329155523","morphology":"980513B","layer":"SP","etype":"cNAC","mtype":"SP_BS"},{"name":"CA1_int_cNAC_990111HP2_20190329155703","morphology":"990111HP2","layer":"SP","etype":"cNAC","mtype":"SP_PVBC"},{"name":"CA1_int_cNAC_990611HP2_20190328165521","morphology":"990611HP2","layer":"SR","etype":"cNAC","mtype":"SR_SCA"},{"name":"CA1_pyr_cACpyr_mpg141017_a1-2_idC_20190328143405","morphology":"mpg141017_a1-2_idC","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_mpg141208_B_idA_20190328144006","morphology":"mpg141208_B_idA","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_mpg141209_A_idA_20190328144646","morphology":"mpg141209_A_idA","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_mpg141216_A_idA_20190305133333","morphology":"mpg141216_A_idA","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_mpg141217_A_idB_20190305112803","morphology":"mpg141217_A_idB","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_mpg150305_A_idB_20190305112012","morphology":"mpg150305_A_idB","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_oh140807_A0_idA_20190305112828","morphology":"oh140807_A0_idA","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_oh140807_A0_idB_20190305105211","morphology":"oh140807_A0_idB","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_oh140807_A0_idC_20190305103627","morphology":"oh140807_A0_idC","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_oh140807_A0_idF_20190305115459","morphology":"oh140807_A0_idF","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_oh140807_A0_idG_20190328143451","morphology":"oh140807_A0_idG","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_oh140807_A0_idH_20190328143152","morphology":"oh140807_A0_idH","layer":"SP","etype":"cACpyr","mtype":"SP_PC"},{"name":"CA1_pyr_cACpyr_oh140807_A0_idJ_20190328142723","morphology":"oh140807_A0_idJ","layer":"SP","etype":"cACpyr","mtype":"SP_PC"}]'),j=JSON.parse('[{"layer":"SO","mtype":"SO_OLM","etype":"bAC","instance":"CA1_int_bAC_011017HP2_20190329115307"},{"layer":"SO","mtype":"SO_BS","etype":"bAC","instance":"CA1_int_bAC_011023HP2_20190329115556"},{"layer":"SLM","mtype":"SLM_PPA","etype":"bAC","instance":"CA1_int_bAC_011127HP1_20190329115610"},{"layer":"SP","mtype":"SP_PVBC","etype":"bAC","instance":"CA1_int_bAC_060314AM2_20190329115909"},{"layer":"SO","mtype":"SO_Tri","etype":"bAC","instance":"CA1_int_bAC_971114B_20190329120113"},{"layer":"SO","mtype":"SO_BP","etype":"bAC","instance":"CA1_int_bAC_980120A_20190329120234"},{"layer":"SP","mtype":"SP_Ivy","etype":"cAC","instance":"CA1_int_cAC_010710HP2_20190328145252"},{"layer":"SO","mtype":"SO_OLM","etype":"cAC","instance":"CA1_int_cAC_011017HP2_20190328145524"},{"layer":"SP","mtype":"SP_CCKBC","etype":"cAC","instance":"CA1_int_cAC_031031AM1_20190328150015"},{"layer":"SP","mtype":"SP_PVBC","etype":"cAC","instance":"CA1_int_cAC_970627BHP1_20190328160727"},{"layer":"SO","mtype":"SO_BP","etype":"cAC","instance":"CA1_int_cAC_980120A_20190328160925"},{"layer":"SP","mtype":"SP_BS","etype":"cAC","instance":"CA1_int_cAC_980513B_20190328161527"},{"layer":"SR","mtype":"SR_SCA","etype":"cAC","instance":"CA1_int_cAC_990611HP2_20190328162145"},{"layer":"SP","mtype":"SP_Ivy","etype":"cNAC","instance":"CA1_int_cNAC_010710HP2_20190328163258"},{"layer":"SO","mtype":"SO_OLM","etype":"cNAC","instance":"CA1_int_cNAC_011017HP2_20190328164612"},{"layer":"SO","mtype":"SO_BS","etype":"cNAC","instance":"CA1_int_cNAC_011023HP2_20190328164923"},{"layer":"SP","mtype":"SP_PVBC","etype":"cNAC","instance":"CA1_int_cNAC_060314AM2_20190328165336"},{"layer":"SP","mtype":"SP_PVBC","etype":"cNAC","instance":"CA1_int_cNAC_970509HP2_20190305115627"},{"layer":"SP","mtype":"SP_PVBC","etype":"cNAC","instance":"CA1_int_cNAC_970627BHP1_20190306162834"},{"layer":"SP","mtype":"SP_Ivy","etype":"cNAC","instance":"CA1_int_cNAC_970717D_20190307182510"},{"layer":"SP","mtype":"SP_AA","etype":"cNAC","instance":"CA1_int_cNAC_970911C_20190305120404"},{"layer":"SO","mtype":"SO_Tri","etype":"cNAC","instance":"CA1_int_cNAC_971114B_20190329154607"},{"layer":"SO","mtype":"SO_BP","etype":"cNAC","instance":"CA1_int_cNAC_980120A_20190329155034"},{"layer":"SP","mtype":"SP_BS","etype":"cNAC","instance":"CA1_int_cNAC_980513B_20190329155523"},{"layer":"SP","mtype":"SP_PVBC","etype":"cNAC","instance":"CA1_int_cNAC_990111HP2_20190329155703"},{"layer":"SR","mtype":"SR_SCA","etype":"cNAC","instance":"CA1_int_cNAC_990611HP2_20190328165521"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_mpg141017_a1-2_idC_20190328143405"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_mpg141208_B_idA_20190328144006"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_mpg141209_A_idA_20190328144646"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_mpg141216_A_idA_20190305133333"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_mpg141217_A_idB_20190305112803"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_mpg150305_A_idB_20190305112012"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_oh140807_A0_idA_20190305112828"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_oh140807_A0_idB_20190305105211"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_oh140807_A0_idC_20190305103627"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_oh140807_A0_idF_20190305115459"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_oh140807_A0_idG_20190328143451"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_oh140807_A0_idH_20190328143152"},{"layer":"SP","mtype":"SP_PC","etype":"cACpyr","instance":"CA1_pyr_cACpyr_oh140807_A0_idJ_20190328142723"}]'),N=n(97145),w=n(94055),v=n(52720),B=n(70109),M=n(29009),k=n(77180),O=n(56880),E=n(14195),H=n(3023),F=n(75358),R=n(26050),T=c.memo(e=>{var t;let{mechanism:n}=e,a=(0,c.useCallback)((e,t)=>{if(!t)return 0;if(!isNaN(Number(t)))return Number(t);if(t.includes("math.exp")){let n=t.match(/math\.exp\(\(-\{distance\}\)\/(\d+)\)\*(\d+(?:\.\d+)?(?:e-?\d+)?)/);if(n){let[,t,r]=n;return Math.exp(-e/Number(t))*Number(r)}}return t.includes("e")?Number(t):0},[]),o=(0,c.useMemo)(()=>{if(!n)return[];let e=Array.from({length:100},(e,t)=>t);return e.map(e=>({distance:e,value:a(e,n.function)}))},[n,a]);return n?(0,r.jsxs)("div",{className:"flex flex-col justify-center h-full",children:[(0,r.jsx)("div",{className:"mt-4 flex-grow h-[150px] ",children:(0,r.jsx)(M.h,{width:"100%",height:"100%",children:(0,r.jsxs)(k.w,{data:o,margin:{top:5,right:20,bottom:5,left:10},children:[(0,r.jsx)(O.x,{type:"monotone",dataKey:"value",stroke:"#3B4165",strokeWidth:2,dot:!1}),(0,r.jsx)(E.q,{stroke:"#ccc",strokeDasharray:"5 5"}),(0,r.jsx)(H.K,{dataKey:"distance",ticks:[0,25,50,75,100],domain:[0,100],tick:{fontSize:10}}),(0,r.jsx)(F.B,{tick:{fontSize:10},tickFormatter:e=>e.toFixed(5),width:40}),(0,r.jsx)(R.u,{formatter:e=>"number"==typeof e?e.toExponential(4):e})]})})}),(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(v.Z,{children:(0,r.jsx)(B.Z,{children:"\\[f(x) = ".concat((t=n.function)?isNaN(Number(t))&&t.includes("math.exp")?t.replace("{distance}","x").replace("math.exp","e"):t:"undefined","\\]")})})})]}):(0,r.jsx)("div",{children:"No mechanism data available"})}),neuron_model_MechanismTable=e=>{let{theme:t,data:n,instance:a}=e,[o,l]=(0,c.useState)({});return(0,c.useEffect)(()=>{n&&"object"==typeof n&&l(n)},[n]),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsxs)("table",{className:"w-full border-collapse",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left p-2 border-b-2",children:"Sections"}),(0,r.jsx)("th",{className:"text-left p-2 border-b-2",children:"Mechanisms"})]})}),(0,r.jsx)("tbody",{children:["axonal","somatic","alldend"].map(e=>{var t;return(0,r.jsxs)("tr",{className:"border-b",children:[(0,r.jsx)("td",{className:"p-2 font-medium",children:e}),(0,r.jsx)("td",{className:"p-2",children:null===(t=o[e])||void 0===t?void 0:t.map(e=>(0,r.jsx)(w.default,{title:(0,r.jsx)(T,{mechanism:e}),trigger:"hover",placement:"top",overlayInnerStyle:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.15)",width:"350px"},children:(0,r.jsx)("span",{className:"inline-block mr-2 mb-1 px-2 py-1 bg-blue-100 text-blue-800 cursor-pointer",children:e.channel_name})},e.channel_name))})]},e)})})]})})},Z=n(21906),I=n(5379),D=n.n(I),L=n(2307),z=n(25675),V=n.n(z),q=n(92889),neuron_model_ExperimentalRecordingsTable=e=>{let{data:t}=e,[n,a]=(0,c.useState)(1),o=(0,c.useRef)(null),l=[{title:"Electrophysiology",dataIndex:"ephys_id",key:"ephys_id",width:150,render:(e,t)=>(0,r.jsx)(s(),{href:"http://localhost:3000/hippocampus-portal-dev/experimental-data/neuronal-electrophysiology/?etype=".concat(t.etype,"&etype_instance=").concat(e),children:e})},{title:"E-type",dataIndex:"etype",key:"etype",width:100},{title:"Preview",dataIndex:"ephys_id",key:"preview",width:220,render:e=>(0,r.jsx)(V(),{src:"".concat(S.wz,"/2_neuron-models/trace-preview/").concat(e,".png"),alt:"neuron trace preview ".concat(e),width:200,height:100,style:{height:"auto"}})}],getEtypeForEphysId=e=>{for(let[t,n]of Object.entries(q))if(n.includes(e))return t;return"Unknown"},i=(0,c.useMemo)(()=>t.ephys_ids.map(e=>({key:e,etype:getEtypeForEphysId(e),ephys_id:e})),[t.ephys_ids]),p=i.length,y=(0,c.useMemo)(()=>{let e=(n-1)*5,t=e+5;return i.slice(e,t)},[i,n]),handlePageChange=e=>{a(e),o.current&&o.current.scrollIntoView({behavior:"smooth",block:"start"})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:o,className:D().dynamic([["766addc28397037f",[h.x8.blue,h.x8.blue]]]),children:(0,r.jsx)(L.Z,{columns:l,dataSource:y,pagination:!1,scroll:{x:"max-content"}})}),p>5&&(0,r.jsx)("div",{className:D().dynamic([["766addc28397037f",[h.x8.blue,h.x8.blue]]])+" pagination",children:Array.from({length:Math.ceil(p/5)},(e,t)=>(0,r.jsx)("button",{onClick:()=>handlePageChange(t+1),className:D().dynamic([["766addc28397037f",[h.x8.blue,h.x8.blue]]])+" "+((n===t+1?"active":"")||""),children:t+1},t+1))}),(0,r.jsx)(D(),{id:"766addc28397037f",dynamic:[h.x8.blue,h.x8.blue],children:".pagination.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:20px}.pagination.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{margin:0 5px;padding:5px 10px;border:1px solid#d9d9d9;background-color:#fff;cursor:pointer;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.pagination.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{color:#40a9ff;border-color:#40a9ff}.pagination.__jsx-style-dynamic-selector button.active.__jsx-style-dynamic-selector{color:#fff;background-color:".concat(h.x8.blue,";border-color:").concat(h.x8.blue,"}")})]})},neuron_model_EFeature=e=>{let{data:t}=e,[n,a]=(0,c.useState)(null),o=Object.keys(t.efeatures),l=(0,c.useMemo)(()=>{if(!n)return[];let e=t.efeatures[n].soma;return Object.keys(e).map(t=>({name:t,description:t,values:e[t]}))},[n,t]);return(0,r.jsxs)("div",{className:"efeature-container",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-xs-6 gap-6 flex",children:[(0,r.jsx)("label",{children:"Select Step:"}),(0,r.jsxs)("select",{value:n||"",onChange:e=>{a(e.target.value)},children:[(0,r.jsx)("option",{value:"",children:"Select Step"}),o.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]})]})}),(0,r.jsx)("div",{className:" mt-4",children:n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.Z,{facts:l})}):(0,r.jsx)("p",{children:"Please select a step to view the metrics"})})]})},U=n(1655),$=n(32071);n(55733),n(93162);var K=n(8940);let getUniqueValues=(e,t,n,r,a)=>Array.from(new Set(j.filter(e=>(!t||!n||e[t]===n)&&(!r||!a||e[r]===a)).map(t=>t[e]))).sort((e,t)=>e.toString().localeCompare(t.toString())),getFilteredInstances=(e,t,n)=>j.filter(r=>(!e||r.layer===e)&&(!t||r.mtype===t)&&(!n||r.etype===n)).map(e=>e.instance);var J=(0,A.Z)(()=>{let e=(0,i.useRouter)(),{query:t}=e,[n,a]=(0,c.useState)(""),[o,l]=(0,c.useState)(""),[h,A]=(0,c.useState)(""),[j,w]=(0,c.useState)(""),[v,B]=(0,c.useState)(null),[M,k]=(0,c.useState)(null),[O,E]=(0,c.useState)(null),[H,F]=(0,c.useState)(null),[R,T]=(0,c.useState)(null),I=(0,c.useMemo)(()=>getUniqueValues("layer"),[]),D=(0,c.useMemo)(()=>getUniqueValues("mtype","layer",n),[n]),L=(0,c.useMemo)(()=>getUniqueValues("etype","layer",n,"mtype",o),[n,o]),z=(0,c.useMemo)(()=>getFilteredInstances(n,o,h),[n,o,h]);(0,c.useEffect)(()=>{if(0===Object.keys(t).length)return;let e=t.layer&&"string"==typeof t.layer&&I.includes(t.layer)?t.layer:I[0]||"",n=getUniqueValues("mtype","layer",e),r=t.mtype&&"string"==typeof t.mtype&&n.includes(t.mtype)?t.mtype:n[0]||"",o=getUniqueValues("etype","layer",e,"mtype",r),c=t.etype&&"string"==typeof t.etype&&o.includes(t.etype)?t.etype:o[0]||"",s=getFilteredInstances(e,r,c),i=t.instance&&"string"==typeof t.instance&&s.includes(t.instance)?t.instance:s[0]||"";a(e),l(r),A(c),w(i)},[t,I]),(0,c.useEffect)(()=>{let fetchData=async()=>{if(j)try{let[e,t,n,r,a]=await Promise.all([fetch("".concat(S.$N,"/2_reconstruction-data/neuron-models/").concat(j,"/trace.json")),fetch("".concat(S.$N,"/2_reconstruction-data/neuron-models/").concat(j,"/features_with_rheobase.json")),fetch("".concat(S.$N,"/2_reconstruction-data/neuron-models/").concat(j,"/mechanisms.json")),fetch("".concat(S.$N,"/2_reconstruction-data/neuron-models/").concat(j,"/efeature.json")),fetch("".concat(S.$N,"/2_reconstruction-data/neuron-models/").concat(j,"/experimental-recordings.json"))]),o=await e.json(),c=await t.json(),l=await n.json(),s=await r.json(),i=await a.json();B(o),k(c),T(l),F(s),E(i)}catch(e){console.error("Error fetching data:",e),B(null),k(null),T(null),F(null),E(null)}};fetchData()},[j]);let setParams=t=>{let n={...e.query,...t};console.log("Setting new params:",n),e.push({query:n,pathname:e.pathname},void 0,{shallow:!0})},setLayer=e=>{let t=getUniqueValues("mtype","layer",e),n=t[0]||"",r=getUniqueValues("etype","layer",e,"mtype",n),a=r[0]||"",o=getFilteredInstances(e,n,a),c=o[0]||"";setParams({layer:e,mtype:n,etype:a,instance:c})},setMtype=e=>{let t=getUniqueValues("etype","layer",n,"mtype",e),r=t[0]||"",a=getFilteredInstances(n,e,r),o=a[0]||"";setParams({mtype:e,etype:r,instance:o})},setEtype=e=>{let t=getFilteredInstances(n,o,e),r=t[0]||"";setParams({etype:e,instance:r})},setInstance=e=>{setParams({instance:e})},V=[{title:"Layer",key:"layer",values:I,setFn:setLayer},{title:"M-Type",key:"mtype",values:D,setFn:setMtype},{title:"E-Type",key:"etype",values:L,setFn:setEtype},{title:"Instance",key:"instance",values:z,setFn:setInstance}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Z,{theme:3,children:(0,r.jsxs)("div",{className:"row w-100 content-center",children:[(0,r.jsxs)("div",{className:"col-xs-12 col-lg-6 content-center",children:[(0,r.jsx)(p.Z,{primaryColor:C.rp,title:"Neuron models",subtitle:"Reconstruction Data",theme:3}),(0,r.jsx)(y.Z,{color:C.rp,children:(0,r.jsxs)("p",{children:["Starting from a subset of"," ",(0,r.jsx)(s(),{className:"link theme-".concat(3),href:"/experimental-data/neuronal-morphology/",children:"morphological reconstructions"}),", we develop an initial set of single cell models by optimizing model parameters against a set of features extracted from"," ",(0,r.jsx)(s(),{className:"link theme-".concat(3),href:"/experimental-data/neuronal-electrophysiology/",children:"electrophysiological recordings"}),"."]})})]}),(0,r.jsx)("div",{className:"col-xs-12 col-lg-6",children:(0,r.jsxs)("div",{className:"selector",children:[(0,r.jsxs)("div",{className:"selector__column theme-".concat(3),children:[(0,r.jsx)("div",{className:"selector__head theme-".concat(3),children:"Choose a layer"}),(0,r.jsx)("div",{className:"selector__selector-container",children:(0,r.jsx)(N.Z,{value:n||void 0,onSelect:setLayer,theme:3})})]}),(0,r.jsxs)("div",{className:"selector__column theme-".concat(3),children:[(0,r.jsx)("div",{className:"selector__head theme-".concat(3),children:"Select reconstruction"}),(0,r.jsxs)("div",{className:"selector__body",children:[(0,r.jsx)(m.Z,{block:!0,list:D,value:o,title:"M-type ".concat(D.length?"(".concat(D.length,")"):""),color:C.rp,onSelect:setMtype,theme:3}),(0,r.jsx)(m.Z,{block:!0,list:L,value:h,title:"E-type ".concat(L.length?"(".concat(L.length,")"):""),color:C.rp,onSelect:setEtype,theme:3}),(0,r.jsx)(m.Z,{block:!0,list:z,value:j,title:"Instance ".concat(z.length?"(".concat(z.length,")"):""),color:C.rp,onSelect:setInstance,anchor:"data",theme:3})]})]})]})})]})}),(0,r.jsxs)(d.Z,{theme:3,navItems:[{id:"morphologySection",label:"Morphology"},{id:"traceSection",label:"Trace"},{id:"bPAPPSPSection",label:"bPAP & PSP"},{id:"factsheetSection",label:"Factsheet"},{id:"efeaturesSection",label:"E-features"},{id:"mechansimsSection",label:"Mechanisms"},{id:"ExperimentalMorphologySection",label:"Experimental morphology used for this model"},{id:"experimentalRecordingsSection",label:"Experimental recordings used for this model"}],quickSelectorEntries:V,children:[(0,r.jsxs)(u.Z,{id:"morphologySection",className:"mt-4",title:"Morphology",children:[(0,r.jsx)($.f,{href:"".concat(S.$N,"/2_reconstruction-data/neuron-models/").concat(j,"/morphology.swc")}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(U.Z,{theme:3,resources:["".concat(S.$N,"/2_reconstruction-data/neuron-models/").concat(j,"/morphology.swc"),"".concat(S.$N,"/2_reconstruction-data/neuron-models/README.md"),"".concat(S.$N,"/2_reconstruction-data/neuron-models/neuron_simulation.py"),"".concat(S.$N,"2_reconstruction-data/neuron-models/").concat(j,"/mechanisms.zip"),"".concat(S.$N,"2_reconstruction-data/neuron-models/").concat(j,"/electrophysiology.zip")]})})]}),(0,r.jsxs)(u.Z,{id:"traceSection",className:"mt-4",title:"Trace",children:[(0,r.jsx)("div",{className:"graph",children:v&&(0,r.jsx)(x.Z,{plotData:v})}),v&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(g.Z,{onClick:()=>(0,P.KO)(v,"".concat(n,"-").concat(o,"-").concat(h,"-").concat(j,"-trace.json")),theme:3,children:"Trace data"})})]}),(0,r.jsx)(u.Z,{id:"factsheetSection",className:"mt-4",title:"Factsheet",children:M&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{facts:M}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(g.Z,{onClick:()=>(0,P.KO)(M,"".concat(n,"-").concat(o,"-").concat(h,"-").concat(j,"-factsheet.json")),theme:3,children:"Factsheet"})})]})}),(0,r.jsx)(K.c,{url:"".concat(S.$N,"/epsp-bpap/neurons_model/").concat(j)}),(0,r.jsx)(u.Z,{id:"efeaturesSection",className:"mt-4",title:"E-features",children:H&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(neuron_model_EFeature,{data:H}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(g.Z,{onClick:()=>(0,P.KO)(M,"".concat(n,"-").concat(o,"-").concat(h,"-").concat(j,"-factsheet.json")),theme:3,children:"Factsheet"})})]})}),(0,r.jsx)(u.Z,{id:"mechansimsSection",className:"mt-4",title:"Mechanisms",children:(0,r.jsx)(neuron_model_MechanismTable,{data:R,instance:j})}),(0,r.jsx)(u.Z,{id:"ExperimentalMorphologySection",className:"mt-4",title:"Experimental morphology used for this model",children:(0,r.jsx)(Z.Z,{MorphologyData:b,currentInstance:j})}),(0,r.jsx)(u.Z,{id:"experimentalRecordingsSection",className:"mt-4",title:"Experimental recordings used for this model",children:O&&(0,r.jsx)(neuron_model_ExperimentalRecordingsTable,{data:O})})]})]})},{key:"layer",defaultQuery:h.defaultSelection.digitalReconstruction.neurons});function NeuronModelsPage(){let e={title:"Neuron Models - Reconstruction Data | The Hippocampus Hub",description:"Examine neuron models developed from a subset of morphologically reconstructed neurons. These models are optimized based on electrophysiological recordings and provide insights into the functional properties of hippocampal neurons.",keywords:["Neuron Models","Hippocampus","Electrophysiology","Reconstruction Data","Neuroscience","Blue Brain Project","CA1 Neurons"],author:"Blue Brain Project",creator:"EPFL Blue Brain Project",publisher:"The Hippocampus Hub"};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{name:"keywords",content:e.keywords.join(", ")}),(0,r.jsx)("meta",{name:"author",content:e.author}),(0,r.jsx)("meta",{name:"creator",content:e.creator}),(0,r.jsx)("meta",{name:"publisher",content:e.publisher})]}),(0,r.jsx)(J,{})]})}},56154:function(e,t,n){"use strict";n.d(t,{rp:function(){return a}});var r=n(17931);let a="grey-2";r.FN[a]},92889:function(e){"use strict";e.exports=JSON.parse('{"cACpyr":["95824006","95912002","95824005","95822016","95831006","95831000","95822014","95824002","95914000","95914005","95912005","95914004","95914003","95912004","95912006","95912007","95914002","95914001","95817005","95810006","95810014","95810008","95810007","95810019","95810010","95810011","95810009","95810020","95831005","95810015","95810021","95810013","95822008","95810017","95810016","95822003","95822020","95810029","95822011","95810034","95822010","95822019","95822009","95822002","95822015","95824003","95831003","95822004","95822021","95912003","95822018","95831004","95822000","95822005","95822017","95822007","95824001","95824004","95912000","95912001","95831002","95824000","95831001","95810012","95810030","95810025","95810037","95810026","95810022","95810027","95810018","95810024","95810028","95817010","95822013","95817003","95810031","95817006","95810039","95810032","95822006","95810043","95817007","95810023","95810041","95817009","95810040","95810038","95810033","95817004","95810044","95817008","95810042","95822001","95822012","95808025","95808024","95808021","95808023","95808022"],"cAC":["98205022","98205018","98205021","98205025","98205017","98205020","98205024","97428002","97428001","97428000","97428003","97509009","97509008","97509010","97509011"],"bAC":["99111000","95810036","99111002","99111001","95810035","96711009","97911002","97911001","97911000"],"cNAC":["98D15009","95817000","95817002","95817001","98D15008","99111004","99111007","99111006","99111008","99111005","98513011","98120001","98120000","97717005","98120002","98513009","98513010"]}')}},function(e){e.O(0,[3737,7056,4055,9006,685,5060,2307,5675,9837,8764,2905,2688,8287,4088,7386,9774,2888,179],function(){return e(e.s=48230)}),_N_E=e.O()}]);
//# sourceMappingURL=neuron-models-e89792ed30d7749d.js.map