import{r as l,t as m}from"./app-Bu5qAY3h.js";import{U as d,y as f,l as g,C as h,o as x}from"./transition-DaRqfOr-.js";import{I as E}from"./keyboard-DRMpaH0s.js";let u=l.createContext(null);function c(){let o=l.useContext(u);if(o===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,c),t}return o}function T(){let[o,t]=l.useState([]);return[o.length>0?o.join(" "):void 0,l.useMemo(()=>function(e){let n=x(r=>(t(i=>[...i,r]),()=>t(i=>{let s=i.slice(),p=s.indexOf(r);return p!==-1&&s.splice(p,1),s}))),a=l.useMemo(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return m.createElement(u.Provider,{value:a},e.children)},[t])]}let v="p";function S(o,t){let e=E(),{id:n=`headlessui-description-${e}`,...a}=o,r=c(),i=f(t);g(()=>r.register(n),[n,r.register]);let s={ref:i,...r.props,id:n};return h({ourProps:s,theirProps:a,slot:r.slot||{},defaultTag:v,name:r.name||"Description"})}let w=d(S),$=Object.assign(w,{});export{$ as G,T as w};
