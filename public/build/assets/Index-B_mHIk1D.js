import{j as e,d as s}from"./app-Bu5qAY3h.js";import{A as i}from"./AuthenticatedLayout-Cew62ZIr.js";import{P as o}from"./PaginateDataTable-rA0FGzng.js";import{C as m}from"./Card-B2LgLLI7.js";import{r as n,f as l}from"./BaseHelper-CIKuMXkW.js";import{P as c}from"./PrimaryButton-nmJZB-UY.js";import"./clsx-B-dksMZM.js";import"./react-toastify.esm-DQCmDO0r.js";import"./ApplicationLogo-D2vjWGdC.js";import"./transition-DaRqfOr-.js";import"./Api-X4T11fsj.js";function g({data:r}){const a=[{name:"Name",selector:t=>t.name},{name:"E-Mail",selector:t=>t.email},{name:"Saldo",selector:t=>n(t.saldo)},{name:"Register Date",selector:t=>l(t.created_at)},{name:"Status",selector:t=>t.status?"Active":"Inactive"},{selector:t=>e.jsx(s,{href:`/admin/user/${t.id}/edit`,children:e.jsx(c,{children:"Edit"})})}];return e.jsx(i,{data:r,title:"Product",children:e.jsx(m,{className:"p-4",children:e.jsx(o,{title:"Products",url:"/admin/user/list",columns:a})})})}export{g as default};
