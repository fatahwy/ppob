import{j as r,d as m}from"./app-Bu5qAY3h.js";import{A as s}from"./AuthenticatedLayout-Cew62ZIr.js";import{P as a}from"./PaginateDataTable-rA0FGzng.js";import{C as c}from"./Card-B2LgLLI7.js";import{r as e}from"./BaseHelper-CIKuMXkW.js";import{P as n}from"./PrimaryButton-nmJZB-UY.js";import"./clsx-B-dksMZM.js";import"./react-toastify.esm-DQCmDO0r.js";import"./ApplicationLogo-D2vjWGdC.js";import"./transition-DaRqfOr-.js";import"./Api-X4T11fsj.js";function g({data:i}){const o=[{name:"Name",selector:t=>t.name},{name:"Price",selector:t=>e(t.price)},{name:"Commission",selector:t=>e(t.commission)},{name:"Selling Price",selector:t=>e(t.total)},{name:"Status",selector:t=>t.status?"Active":"Inactive"},{selector:t=>t.price>0&&r.jsx(m,{href:`/admin/product/${t.id}`,children:r.jsx(n,{children:"Edit"})})}];return r.jsx(s,{data:i,title:"Product",children:r.jsx(c,{className:"p-4",children:r.jsx(a,{title:"Products",url:"/admin/product/list",columns:o})})})}export{g as default};
