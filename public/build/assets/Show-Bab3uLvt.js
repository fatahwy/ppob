import{r as f,j as e,a as g,y as j}from"./app-Bu5qAY3h.js";import{A as C}from"./AuthenticatedLayout-Cew62ZIr.js";import{C as b}from"./Card-B2LgLLI7.js";import{c as d}from"./clsx-B-dksMZM.js";import{l as S,f as I,r as _}from"./BaseHelper-CIKuMXkW.js";import{D as L,a as p}from"./deposit-CjoSG_RJ.js";import{T as U}from"./TextInput-CiG5bZCT.js";import{I as T}from"./ImagePreview-DI_tmImk.js";import{B as x}from"./react-toastify.esm-DQCmDO0r.js";import"./ApplicationLogo-D2vjWGdC.js";import"./transition-DaRqfOr-.js";const u=({label:i,value:a,align:t="text-left"})=>e.jsxs("div",{className:d("p-2",t),children:[e.jsx("div",{className:"dark:text-white leading-8",children:i}),e.jsx("div",{className:"text-xl font-semibold dark:text-white inline-flex",children:a})]}),w=({label:i,loading:a,className:t="",...m})=>e.jsx("button",{disabled:a,...m,className:d("w-full p-2 rounded-xl text-center text-white transition-all duration-300 disabled:opacity-50",t),children:a?"Loading...":i});function H({data:i,deposit:a}){const[t,m]=f.useState(!1),[r,v]=f.useState(""),N=s=>{v(s.target.files[0])},y=async()=>{var l,n,c;const s=await g.delete(`/deposit/${a.id}`);if((l=s.data)!=null&&l.success){x.success((n=s.data)==null?void 0:n.message),j.get("/deposit");return}else x.error((c=s.data)==null?void 0:c.message)},k=async()=>{var n,c,h;m(!0);const s=new FormData;s.append("_method","PUT"),s.append("image",r);const l=await g.post(`/deposit/${a.id}`,s);if((n=l.data)!=null&&n.success){x.success((c=l.data)==null?void 0:c.message),j.get("/deposit");return}else x.error((h=l.data)==null?void 0:h.message);m(!1)};let o="";switch(typeof r){case"object":o=URL.createObjectURL(r);break;case"string":a.image&&(o=`/images/deposit/${a.image}`);break}const D=S[a.status];return e.jsxs(C,{data:i,children:[e.jsxs("div",{className:"text-3xl dark:text-white",children:["Deposit : ",a.id]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-x-10 gap-y-5",children:[e.jsxs(b,{className:"px-4 py-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(u,{label:"Bank",value:a.bank}),e.jsxs("div",{className:"p-3 text-right",children:[e.jsx("div",{className:"dark:text-white",children:"Date"}),e.jsx("div",{className:"dark:text-white",children:I(a.created_at)})]})]}),e.jsx(u,{label:"Account Number",value:a.account_number}),e.jsx(u,{label:"Nominal",value:_(a.nominal)}),e.jsx(u,{label:"Status",value:e.jsx("div",{className:d("px-4 py-2 rounded-xl text-white",D.color),children:L[a.status]})}),a.status===p.waiting_payment&&e.jsx("div",{className:"p-3 mt-5 flex gap-x-8 justify-between",children:e.jsx(w,{label:"Cancel",loading:t,onClick:()=>y(),className:d("bg-red-500",!t&&"hover:bg-red-600")})})]}),e.jsxs(b,{className:"px-4 py-3 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"dark:text-white mb-10 text-xl",children:"Upload Transfer Evidence"}),a.status==p.waiting_payment&&e.jsx(U,{type:"file",accept:"image/*",onChange:N,className:"w-full md:w-1/2 mb-2"}),e.jsx("div",{id:"galleryID",children:o&&e.jsx(T,{src:o,height:210})})]}),a.status==p.waiting_payment&&e.jsx("div",{className:"p-3 mt-5 flex gap-x-8 justify-between",children:e.jsx(w,{label:"Upload",loading:t,disabled:!r,onClick:()=>k(),className:d("bg-green-500",!t&&r&&"hover:bg-green-600")})})]})]})]})}export{H as default};