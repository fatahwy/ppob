import{r as j,j as e,a as p,y as b}from"./app-zG4up2OY.js";import{A as N}from"./AuthenticatedLayout-KagFa5dD.js";import{C as n}from"./Card-vP5jYToF.js";import{c as a}from"./clsx-Zbgk8kpT.js";import{l as o,r as v}from"./BaseHelper-6NPqXJkh.js";import"./ApplicationLogo-M-cTcxWL.js";import"./transition-DPY1_IGr.js";const l=({label:r,value:s,align:i="text-left"})=>e.jsxs("div",{className:a("p-2",i),children:[e.jsx("div",{className:"dark:text-white leading-8",children:r}),e.jsx("div",{className:"text-xl font-semibold dark:text-white inline-flex",children:s})]}),u=({label:r,loading:s,className:i="",...t})=>e.jsx("button",{disabled:s,...t,className:a("w-full p-2 rounded-xl text-center text-white transition-all duration-300",i),children:s?"Loading...":r});function D({auth:r,transaction:s,category:i}){const[t,x]=j.useState(!1),c=o[s.status],m=async d=>{x(!0),await p.put(`/transaction/postpaid/${s.id}`,{type:d}),b.reload(),x(!1)};return e.jsxs(N,{auth:r,children:[e.jsx("div",{className:"text-3xl dark:text-white",children:"History"}),e.jsxs("div",{className:"flex justify-between gap-x-10",children:[e.jsxs(n,{className:"px-4 py-3 w-full md:w-1/2",children:[e.jsx(l,{label:i.name,value:s.product_name}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(l,{label:"Order ID",value:s.id}),e.jsxs("div",{className:"p-3 text-right",children:[e.jsx("div",{className:"dark:text-white",children:"Date"}),e.jsx("div",{className:"dark:text-white",children:s.created_at_formatted})]})]}),e.jsx(l,{label:"Number/ID Customer",value:s.mtrpln?s.mtrpln:s.target}),e.jsx(l,{label:"Serial Number / Token / Security Code",value:s.token||"-"}),e.jsx(l,{label:"Price",value:v(s.total)}),e.jsx(l,{label:"Status",value:e.jsx("div",{className:a("px-4 py-2 rounded-xl text-white",c.color),children:c.label})}),e.jsxs("div",{className:"p-3",children:[e.jsx("div",{className:"dark:text-white",children:"Note"}),e.jsx("div",{className:"dark:text-white",children:s.note})]}),s.status===3&&e.jsxs("div",{className:"p-3 mt-5 flex gap-x-8 justify-between",children:[e.jsx(u,{label:"Cancel",loading:t,onClick:()=>m(0),className:a("bg-red-500",!t&&"hover:bg-red-600")}),e.jsx(u,{label:"Pay Now",loading:t,onClick:()=>m(1),className:a("bg-blue-500",!t&&"hover:bg-blue-600")})]})]}),e.jsxs(n,{className:"px-4 py-3 w-full md:w-1/2",children:[e.jsx("div",{className:"dark:text-white mb-10 text-xl",children:"Transaction Status Note"}),e.jsx("table",{children:e.jsx("tbody",{children:o.map((d,h)=>e.jsxs("tr",{children:[e.jsx("td",{className:"pb-3",children:e.jsx("div",{className:a("px-4 py-2 rounded-xl text-white text-center",d.color),children:d.label})}),e.jsx("td",{className:"pb-3 pl-10 dark:text-white",children:d.desc})]},h))})})]})]})]})}export{D as default};
