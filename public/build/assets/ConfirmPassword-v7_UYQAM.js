import{W as d,r as p,j as s,b as l}from"./app-zG4up2OY.js";import{G as c}from"./GuestLayout-TlnGEg-E.js";import{I as u,T as f,a as x}from"./TextInput-WrpmY6zO.js";import{P as w}from"./PrimaryButton-MSz8POA2.js";import"./ApplicationLogo-M-cTcxWL.js";import"./clsx-Zbgk8kpT.js";import"./transition-DPY1_IGr.js";function P(){const{data:a,setData:e,post:t,processing:o,errors:i,reset:m}=d({password:""});p.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(u,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(x,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{P as default};
