import{r as s,j as e,a as S,y as I}from"./app-zG4up2OY.js";import{A as P}from"./AuthenticatedLayout-KagFa5dD.js";import{C as v}from"./Card-vP5jYToF.js";import{I as E,T as A}from"./TextInput-WrpmY6zO.js";import{P as L}from"./PrimaryButton-MSz8POA2.js";import{S as M}from"./SelectInput-Hr0xqvHd.js";import{f as T}from"./BaseHelper-6NPqXJkh.js";import"./clsx-Zbgk8kpT.js";import"./ApplicationLogo-M-cTcxWL.js";import"./transition-DPY1_IGr.js";import"./keyboard-hFqIR8aE.js";function H({auth:p,category:x,products:o,isPln:m}){const[n,c]=s.useState(0),[l,g]=s.useState(""),[b,C]=s.useState(!1),[j,N]=s.useState(""),[r,u]=s.useState(!1);new AbortController().signal;const w=async()=>{var t,i;if(!r){u(!0);const a=await S.post("/transaction/postpaid",{id_customer:l,id_product:n});a.status===200&&((i=(t=a.data)==null?void 0:t.data)!=null&&i.id)&&I.get(`/history/${a.data.data.id}`),u(!1)}};s.useEffect(()=>{o.length===1&&c(o[0].id)},[]);const f=(t,i)=>{let a=t,d=5;m&&(a=T(t),d=12);const h=a.length>=d;N(h?"":`Number too short, minimim ${d} number`),C(h&&i>0),g(a)},y=t=>{c(t),f(l,t)};return e.jsx(P,{auth:p,title:"Transaction",children:e.jsxs(v,{className:"flex flex-col px-10 gap-y-3 py-3",children:[e.jsx("h3",{className:"text-3xl font-medium mb-5 dark:text-white",children:x.name}),o.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(E,{children:"Provider/Operator"}),e.jsx(M,{widthClass:"w-full md:w-1/3",data:o,value:n,onChange:y})]}),e.jsx(A,{title:m?"Meter Number":"ID Customer",value:l,loading:r,errorMessage:j,isFocused:!0,disabled:r,onChange:t=>f(t.target.value,n),className:"md:w-1/3 mr-3"}),e.jsx("div",{className:"w-full text-right my-5",children:e.jsx(L,{disabled:!b||r,onClick:()=>w(),children:r?"Loading...":"Process"})})]})})}export{H as default};
