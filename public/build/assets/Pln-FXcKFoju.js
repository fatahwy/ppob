import{r as s,j as a,a as P,y as S}from"./app-zG4up2OY.js";import{A as k}from"./AuthenticatedLayout-KagFa5dD.js";import{C as v}from"./Card-vP5jYToF.js";import{T as I}from"./TextInput-WrpmY6zO.js";import{P as E}from"./PrimaryButton-MSz8POA2.js";import M from"./Product-oTQ6pTan.js";import{f as T}from"./BaseHelper-6NPqXJkh.js";import"./clsx-Zbgk8kpT.js";import"./ApplicationLogo-M-cTcxWL.js";import"./transition-DPY1_IGr.js";function G({auth:x,csrf_token:_,category:f,products:h}){const[r,i]=s.useState(""),[g,j]=s.useState(!1),[C,N]=s.useState(""),[n,d]=s.useState(!1),[o,m]=s.useState(0),b=async()=>{var e,c,u,p;d(!0);const t=await P.post("/transaction/prepaid",{id_product:o,id_customer:r});(c=(e=t==null?void 0:t.data)==null?void 0:e.data)!=null&&c.id&&(m(0),i(""),S.get(`/history/${(p=(u=t==null?void 0:t.data)==null?void 0:u.data)==null?void 0:p.id}`)),d(!1)},l=(t,e)=>{m(e),i(t),j(t.length>=10&&e>0)},w=t=>{const e=T(t);N(e.length<10?"Number too short, minimim 11 number":""),l(e,o)},y=t=>{l(r,t.id)};return a.jsx(k,{auth:x,title:"Transaction",children:a.jsxs(v,{className:"flex flex-col px-10 gap-y-3 py-3",children:[a.jsx("h3",{className:"text-3xl font-medium mb-5 dark:text-white",children:f.name}),a.jsx(I,{title:"Meter Number",disabled:n,value:r,errorMessage:C,isFocused:!0,onChange:t=>w(t.target.value),className:"w-full md:w-1/3"}),a.jsx("label",{className:"dark:text-white",children:"Nominal"}),a.jsx("div",{className:"flex-wrap inline-flex min-w-full gap-8 max-h-96 overflow-y-auto rounded-sm",children:h.sort((t,e)=>t.price-e.price).map((t,e)=>a.jsx(M,{data:t,idProduct:o,onClick:()=>t.status&&y(t)},e))}),a.jsx("div",{className:"w-full text-right my-5",children:a.jsx(E,{disabled:!g||n,onClick:()=>b(),children:"Process"})})]})})}export{G as default};
