import{r as s,j as a,a as I,y as k}from"./app-Bu5qAY3h.js";import{A as E}from"./AuthenticatedLayout-Cew62ZIr.js";import{C as M}from"./Card-B2LgLLI7.js";import{T}from"./TextInput-CiG5bZCT.js";import{P as A}from"./PrimaryButton-nmJZB-UY.js";import B from"./Product-DgrUdU_v.js";import{a as V}from"./BaseHelper-CIKuMXkW.js";import{B as f}from"./react-toastify.esm-DQCmDO0r.js";import"./clsx-B-dksMZM.js";import"./ApplicationLogo-D2vjWGdC.js";import"./transition-DaRqfOr-.js";function K({data:g,category:j,products:C}){const[r,d]=s.useState(""),[N,b]=s.useState(!1),[y,P]=s.useState(""),[o,m]=s.useState(!1),[i,n]=s.useState(0),S=async()=>{var t,c,u,p,x,h;m(!0);const e=await I.post("/transaction/prepaid",{id_product:i,id_customer:r});if((c=(t=e==null?void 0:e.data)==null?void 0:t.data)!=null&&c.id){f.success(e.data.message),n(0),d(""),k.get(`/history/${(p=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:p.id}`);return}else(x=e.data)!=null&&x.message&&f.error((h=e.data)==null?void 0:h.message);m(!1)},l=(e,t)=>{n(t),d(e),b(e.length>=10&&t>0)},v=e=>{const t=V(e);P(t.length<10?"Number too short, minimim 11 number":""),l(t,i)},w=e=>{l(r,e.id)};return a.jsx(E,{data:g,title:"Transaction",children:a.jsxs(M,{className:"flex flex-col md:px-10 p-6 gap-y-3",children:[a.jsx("h3",{className:"text-3xl font-medium mb-5 dark:text-white",children:j.name}),a.jsx(T,{title:"Meter Number",type:"tel",disabled:o,value:r,errorMessage:y,isFocused:!0,onChange:e=>v(e.target.value),className:"max-w-xl"}),a.jsx("label",{className:"dark:text-white",children:"Nominal"}),a.jsx("div",{className:"grid lg:grid-cols-5 md:grid-cols-3 gap-8 max-h-96 overflow-y-auto rounded-sm pr-5",children:C.sort((e,t)=>e.price-t.price).map((e,t)=>a.jsx(B,{data:e,idProduct:i,onClick:()=>e.status&&w(e)},t))}),a.jsx("div",{className:"w-full text-right my-5",children:a.jsx(A,{loading:o,disabled:!N||o,onClick:()=>S(),children:"Process"})})]})})}export{K as default};
