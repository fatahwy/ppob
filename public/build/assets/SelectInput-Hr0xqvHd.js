import{r as s,m as U,j as P}from"./app-zG4up2OY.js";import{c as Re}from"./clsx-Zbgk8kpT.js";import{s as oe,b as w,o as f,O as _,U as E,y as F,u as C,p as H,g as Se,e as q,x as Le,C as k,d as Ie,c as Y}from"./transition-DPY1_IGr.js";import{b as Te,h as De,T as $e,f as we,a as Pe,I as G,o as Ce,c as m,r as Ee,d as Fe}from"./keyboard-hFqIR8aE.js";function ie(e,n){let[t,o]=s.useState(e),a=oe(e);return w(()=>o(a.current),[a,o,...n]),t}function ke(e,n,t){let[o,a]=s.useState(t),r=e!==void 0,i=s.useRef(r),u=s.useRef(!1),p=s.useRef(!1);return r&&!i.current&&!u.current?(u.current=!0,i.current=r,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!r&&i.current&&!p.current&&(p.current=!0,i.current=r,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[r?e:o,f(v=>(r||a(v),n==null?void 0:n(v)))]}function ee(e){var n;if(e.type)return e.type;let t=(n=e.as)!=null?n:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function Ae(e,n){let[t,o]=s.useState(()=>ee(e));return w(()=>{o(ee(e))},[e.type,e.as]),w(()=>{t||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")},[t,n]),t}function te(e){return[e.screenX,e.screenY]}function Me(){let e=s.useRef([-1,-1]);return{wasMoved(n){let t=te(n);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(n){e.current=te(n)}}}function Ne(e){throw new Error("Unexpected object: "+e)}var S=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(S||{});function je(e,n){let t=n.resolveItems();if(t.length<=0)return null;let o=n.resolveActiveIndex(),a=o??-1;switch(e.focus){case 0:{for(let r=0;r<t.length;++r)if(!n.resolveDisabled(t[r],r,t))return r;return o}case 1:{for(let r=a-1;r>=0;--r)if(!n.resolveDisabled(t[r],r,t))return r;return o}case 2:{for(let r=a+1;r<t.length;++r)if(!n.resolveDisabled(t[r],r,t))return r;return o}case 3:{for(let r=t.length-1;r>=0;--r)if(!n.resolveDisabled(t[r],r,t))return r;return o}case 4:{for(let r=0;r<t.length;++r)if(n.resolveId(t[r],r,t)===e.id)return r;return o}case 5:return null;default:Ne(e)}}function ae(e={},n=null,t=[]){for(let[o,a]of Object.entries(e))ue(t,le(n,o),a);return t}function le(e,n){return e?e+"["+n+"]":n}function ue(e,n,t){if(Array.isArray(t))for(let[o,a]of t.entries())ue(e,le(n,o.toString()),a);else t instanceof Date?e.push([n,t.toISOString()]):typeof t=="boolean"?e.push([n,t?"1":"0"]):typeof t=="string"?e.push([n,t]):typeof t=="number"?e.push([n,`${t}`]):t==null?e.push([n,""]):ae(t,n,e)}let re=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ne(e){var n,t;let o=(n=e.innerText)!=null?n:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return o;let r=!1;for(let u of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))u.remove(),r=!0;let i=r?(t=a.innerText)!=null?t:"":o;return re.test(i)&&(i=i.replace(re,"")),i}function Be(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let o=t.split(" ").map(a=>{let r=document.getElementById(a);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():ne(r).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return ne(e).trim()}function Qe(e){let n=s.useRef(""),t=s.useRef("");return f(()=>{let o=e.current;if(!o)return"";let a=o.innerText;if(n.current===a)return t.current;let r=Be(o).trim().toLowerCase();return n.current=a,t.current=r,r})}var Ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ue||{}),ze=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ze||{}),He=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(He||{}),qe=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(qe||{});function X(e,n=t=>t){let t=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=Fe(n(e.options.slice()),r=>r.dataRef.current.domRef.current),a=t?o.indexOf(t):null;return a===-1&&(a=null),{options:o,activeOptionIndex:a}}let Ge={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:t}=e.dataRef.current,o=e.options.findIndex(a=>t(a.dataRef.current.value));return o!==-1&&(n=o),{...e,listboxState:0,activeOptionIndex:n}},2(e,n){var t;if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=X(e),a=je(n,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled});return{...e,...o,searchQuery:"",activeOptionIndex:a,activationTrigger:(t=n.trigger)!=null?t:1}},3:(e,n)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.searchQuery!==""?0:1,o=e.searchQuery+n.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+t).concat(e.options.slice(0,e.activeOptionIndex+t)):e.options).find(i=>{var u;return!i.dataRef.current.disabled&&((u=i.dataRef.current.textValue)==null?void 0:u.startsWith(o))}),r=a?e.options.indexOf(a):-1;return r===-1||r===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:r,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,n)=>{let t={id:n.id,dataRef:n.dataRef},o=X(e,a=>[...a,t]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(n.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(t)),{...e,...o}},6:(e,n)=>{let t=X(e,o=>{let a=o.findIndex(r=>r.id===n.id);return a!==-1&&o.splice(a,1),o});return{...e,...t,activationTrigger:1}},7:(e,n)=>({...e,labelId:n.id})},J=s.createContext(null);J.displayName="ListboxActionsContext";function A(e){let n=s.useContext(J);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return n}let Z=s.createContext(null);Z.displayName="ListboxDataContext";function M(e){let n=s.useContext(Z);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return n}function Ke(e,n){return C(n.type,Ge,e,n)}let We=s.Fragment;function Xe(e,n){let{value:t,defaultValue:o,form:a,name:r,onChange:i,by:u=(c,d)=>c===d,disabled:p=!1,horizontal:v=!1,multiple:h=!1,...I}=e;const $=v?"horizontal":"vertical";let T=F(n),[O=h?[]:void 0,L]=ke(t,i,o),[x,l]=s.useReducer(Ke,{dataRef:s.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),g=s.useRef({static:!1,hold:!1}),N=s.useRef(null),j=s.useRef(null),K=s.useRef(null),y=f(typeof u=="string"?(c,d)=>{let R=u;return(c==null?void 0:c[R])===(d==null?void 0:d[R])}:u),D=s.useCallback(c=>C(b.mode,{1:()=>O.some(d=>y(d,c)),0:()=>y(O,c)}),[O]),b=s.useMemo(()=>({...x,value:O,disabled:p,mode:h?1:0,orientation:$,compare:y,isSelected:D,optionsPropsRef:g,labelRef:N,buttonRef:j,optionsRef:K}),[O,p,h,x]);w(()=>{x.dataRef.current=b},[b]),Te([b.buttonRef,b.optionsRef],(c,d)=>{var R;l({type:1}),De(d,$e.Loose)||(c.preventDefault(),(R=b.buttonRef.current)==null||R.focus())},b.listboxState===0);let se=s.useMemo(()=>({open:b.listboxState===0,disabled:p,value:O}),[b,p,O]),ce=f(c=>{let d=b.options.find(R=>R.id===c);d&&W(d.dataRef.current.value)}),de=f(()=>{if(b.activeOptionIndex!==null){let{dataRef:c,id:d}=b.options[b.activeOptionIndex];W(c.current.value),l({type:2,focus:S.Specific,id:d})}}),pe=f(()=>l({type:0})),fe=f(()=>l({type:1})),be=f((c,d,R)=>c===S.Specific?l({type:2,focus:S.Specific,id:d,trigger:R}):l({type:2,focus:c,trigger:R})),ve=f((c,d)=>(l({type:5,id:c,dataRef:d}),()=>l({type:6,id:c}))),xe=f(c=>(l({type:7,id:c}),()=>l({type:7,id:null}))),W=f(c=>C(b.mode,{0(){return L==null?void 0:L(c)},1(){let d=b.value.slice(),R=d.findIndex(Q=>y(Q,c));return R===-1?d.push(c):d.splice(R,1),L==null?void 0:L(d)}})),ge=f(c=>l({type:3,value:c})),me=f(()=>l({type:4})),he=s.useMemo(()=>({onChange:W,registerOption:ve,registerLabel:xe,goToOption:be,closeListbox:fe,openListbox:pe,selectActiveOption:de,selectOption:ce,search:ge,clearSearch:me}),[]),Oe={ref:T},B=s.useRef(null),ye=H();return s.useEffect(()=>{B.current&&o!==void 0&&ye.addEventListener(B.current,"reset",()=>{L==null||L(o)})},[B,L]),U.createElement(J.Provider,{value:he},U.createElement(Z.Provider,{value:b},U.createElement(Se,{value:C(b.listboxState,{0:q.Open,1:q.Closed})},r!=null&&O!=null&&ae({[r]:O}).map(([c,d],R)=>U.createElement(we,{features:Pe.Hidden,ref:R===0?Q=>{var V;B.current=(V=Q==null?void 0:Q.closest("form"))!=null?V:null}:void 0,...Le({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,name:c,value:d})})),k({ourProps:Oe,theirProps:I,slot:se,defaultTag:We,name:"Listbox"}))))}let Ye="button";function Je(e,n){var t;let o=G(),{id:a=`headlessui-listbox-button-${o}`,...r}=e,i=M("Listbox.Button"),u=A("Listbox.Button"),p=F(i.buttonRef,n),v=H(),h=f(x=>{switch(x.key){case m.Space:case m.Enter:case m.ArrowDown:x.preventDefault(),u.openListbox(),v.nextFrame(()=>{i.value||u.goToOption(S.First)});break;case m.ArrowUp:x.preventDefault(),u.openListbox(),v.nextFrame(()=>{i.value||u.goToOption(S.Last)});break}}),I=f(x=>{switch(x.key){case m.Space:x.preventDefault();break}}),$=f(x=>{if(Ee(x.currentTarget))return x.preventDefault();i.listboxState===0?(u.closeListbox(),v.nextFrame(()=>{var l;return(l=i.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})})):(x.preventDefault(),u.openListbox())}),T=ie(()=>{if(i.labelId)return[i.labelId,a].join(" ")},[i.labelId,a]),O=s.useMemo(()=>({open:i.listboxState===0,disabled:i.disabled,value:i.value}),[i]),L={ref:p,id:a,type:Ae(e,i.buttonRef),"aria-haspopup":"listbox","aria-controls":(t=i.optionsRef.current)==null?void 0:t.id,"aria-expanded":i.listboxState===0,"aria-labelledby":T,disabled:i.disabled,onKeyDown:h,onKeyUp:I,onClick:$};return k({ourProps:L,theirProps:r,slot:O,defaultTag:Ye,name:"Listbox.Button"})}let Ze="label";function Ve(e,n){let t=G(),{id:o=`headlessui-listbox-label-${t}`,...a}=e,r=M("Listbox.Label"),i=A("Listbox.Label"),u=F(r.labelRef,n);w(()=>i.registerLabel(o),[o]);let p=f(()=>{var h;return(h=r.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})}),v=s.useMemo(()=>({open:r.listboxState===0,disabled:r.disabled}),[r]);return k({ourProps:{ref:u,id:o,onClick:p},theirProps:a,slot:v,defaultTag:Ze,name:"Listbox.Label"})}let _e="ul",et=_.RenderStrategy|_.Static;function tt(e,n){var t;let o=G(),{id:a=`headlessui-listbox-options-${o}`,...r}=e,i=M("Listbox.Options"),u=A("Listbox.Options"),p=F(i.optionsRef,n),v=H(),h=H(),I=Ie(),$=I!==null?(I&q.Open)===q.Open:i.listboxState===0;s.useEffect(()=>{var l;let g=i.optionsRef.current;g&&i.listboxState===0&&g!==((l=Ce(g))==null?void 0:l.activeElement)&&g.focus({preventScroll:!0})},[i.listboxState,i.optionsRef]);let T=f(l=>{switch(h.dispose(),l.key){case m.Space:if(i.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),u.search(l.key);case m.Enter:if(l.preventDefault(),l.stopPropagation(),i.activeOptionIndex!==null){let{dataRef:g}=i.options[i.activeOptionIndex];u.onChange(g.current.value)}i.mode===0&&(u.closeListbox(),Y().nextFrame(()=>{var g;return(g=i.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})}));break;case C(i.orientation,{vertical:m.ArrowDown,horizontal:m.ArrowRight}):return l.preventDefault(),l.stopPropagation(),u.goToOption(S.Next);case C(i.orientation,{vertical:m.ArrowUp,horizontal:m.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),u.goToOption(S.Previous);case m.Home:case m.PageUp:return l.preventDefault(),l.stopPropagation(),u.goToOption(S.First);case m.End:case m.PageDown:return l.preventDefault(),l.stopPropagation(),u.goToOption(S.Last);case m.Escape:return l.preventDefault(),l.stopPropagation(),u.closeListbox(),v.nextFrame(()=>{var g;return(g=i.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})});case m.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(u.search(l.key),h.setTimeout(()=>u.clearSearch(),350));break}}),O=ie(()=>{var l;return(l=i.buttonRef.current)==null?void 0:l.id},[i.buttonRef.current]),L=s.useMemo(()=>({open:i.listboxState===0}),[i]),x={"aria-activedescendant":i.activeOptionIndex===null||(t=i.options[i.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":i.mode===1?!0:void 0,"aria-labelledby":O,"aria-orientation":i.orientation,id:a,onKeyDown:T,role:"listbox",tabIndex:0,ref:p};return k({ourProps:x,theirProps:r,slot:L,defaultTag:_e,features:et,visible:$,name:"Listbox.Options"})}let rt="li";function nt(e,n){let t=G(),{id:o=`headlessui-listbox-option-${t}`,disabled:a=!1,value:r,...i}=e,u=M("Listbox.Option"),p=A("Listbox.Option"),v=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===o:!1,h=u.isSelected(r),I=s.useRef(null),$=Qe(I),T=oe({disabled:a,value:r,domRef:I,get textValue(){return $()}}),O=F(n,I);w(()=>{if(u.listboxState!==0||!v||u.activationTrigger===0)return;let y=Y();return y.requestAnimationFrame(()=>{var D,b;(b=(D=I.current)==null?void 0:D.scrollIntoView)==null||b.call(D,{block:"nearest"})}),y.dispose},[I,v,u.listboxState,u.activationTrigger,u.activeOptionIndex]),w(()=>p.registerOption(o,T),[T,o]);let L=f(y=>{if(a)return y.preventDefault();p.onChange(r),u.mode===0&&(p.closeListbox(),Y().nextFrame(()=>{var D;return(D=u.buttonRef.current)==null?void 0:D.focus({preventScroll:!0})}))}),x=f(()=>{if(a)return p.goToOption(S.Nothing);p.goToOption(S.Specific,o)}),l=Me(),g=f(y=>l.update(y)),N=f(y=>{l.wasMoved(y)&&(a||v||p.goToOption(S.Specific,o,0))}),j=f(y=>{l.wasMoved(y)&&(a||v&&p.goToOption(S.Nothing))}),K=s.useMemo(()=>({active:v,selected:h,disabled:a}),[v,h,a]);return k({ourProps:{id:o,ref:O,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":h,disabled:void 0,onClick:L,onFocus:x,onPointerEnter:g,onMouseEnter:g,onPointerMove:N,onMouseMove:N,onPointerLeave:j,onMouseLeave:j},theirProps:i,slot:K,defaultTag:rt,name:"Listbox.Option"})}let ot=E(Xe),it=E(Je),at=E(Ve),lt=E(tt),ut=E(nt),z=Object.assign(ot,{Button:it,Label:at,Options:lt,Option:ut});function ft({data:e,value:n,onChange:t,widthClass:o}){const a=[{id:0,name:"Choose"}].concat(e),r=a.find(i=>i.id===n);return P.jsx("div",{className:"w-full relative",children:P.jsxs(z,{value:r,onChange:i=>t(i.id),children:[P.jsx(z.Button,{className:`dark:bg-gray-100 outline outline-1 outline-gray-300 rounded px-3 py-2 text-left text leading-5 ${o}`,children:r==null?void 0:r.name}),P.jsx(z.Options,{className:`absolute ${o} top-[110%] max-h-80 overflow-y-auto z-10`,children:a.map(i=>P.jsx(z.Option,{value:i,as:s.Fragment,children:({active:u,selected:p})=>P.jsx("li",{className:Re("py-1 pl-3 flex items-center bg-white",u&&"dark:bg-gray-500 text-white ",(r==null?void 0:r.id)!==void 0&&(r==null?void 0:r.id)>0&&p&&"dark:bg-gray-600 text-white "),children:i.name})},i.id))})]})})}export{ft as S};
