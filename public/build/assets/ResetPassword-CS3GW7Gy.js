import{W as f,r as x,j as s}from"./app-Bu5qAY3h.js";import{G as j}from"./GuestLayout-FDBkMStI.js";import{I as t,T as m,a as l}from"./TextInput-CiG5bZCT.js";import{P as v}from"./PrimaryButton-nmJZB-UY.js";import"./ApplicationLogo-D2vjWGdC.js";import"./clsx-B-dksMZM.js";import"./transition-DaRqfOr-.js";function y({token:i,email:n,...d}){const{data:e,setData:r,post:p,processing:c,errors:o,reset:u}=f({token:i,email:n,password:"",password_confirmation:""});x.useEffect(()=>()=>{u("password","password_confirmation")},[]);const w=a=>{a.preventDefault(),p(route("password.store"))};return s.jsx(j,{title:"Reset Password",data:d.data,children:s.jsxs("form",{onSubmit:w,children:[s.jsxs("div",{children:[s.jsx(t,{htmlFor:"email",value:"Email"}),s.jsx(m,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value)}),s.jsx(l,{message:o.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(t,{htmlFor:"password",value:"Password"}),s.jsx(m,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>r("password",a.target.value)}),s.jsx(l,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(t,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(m,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value)}),s.jsx(l,{message:o.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(v,{className:"ms-4",disabled:c,children:"Reset Password"})})]})})}export{y as default};
