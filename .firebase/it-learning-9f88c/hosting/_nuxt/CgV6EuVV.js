import{F as v,a as b}from"./CLZrmjW9.js";import{_ as h}from"./BfCubmGH.js";import{e as w,u as y,r,c as u,b as d,w as c,K as s,o as m,a as e,L as k,t as f,M as S}from"./V3PcRQWG.js";import{g as F,t as B}from"./BPUVw4Yf.js";import"./CTAeZCIZ.js";import"./RGmgZce_.js";const C={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"},E={class:"bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12"},K=["disabled"],L={key:1,class:"text-center"},M={class:"mt-2 text-sm text-gray-500"},A=w({__name:"forgot-password",setup(j){const p=y(),o=r(!1),i=r(!1),n=r(""),g=async l=>{o.value=!0,n.value=l.email;try{await S(p,l.email),i.value=!0}catch(t){let a=F(t==null?void 0:t.code);B("",a)}finally{o.value=!1}},_=()=>{i.value=!1,n.value=""};return(l,t)=>{const a=b,x=h;return m(),u("div",C,[d(s(v),{"config-file":"true"},{default:c(()=>[e("div",E,[s(i)?(m(),u("div",L,[t[0]||(t[0]=e("div",{class:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"},[e("svg",{class:"h-6 w-6 text-green-600",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1)),t[1]||(t[1]=e("h3",{class:"mt-3 text-base font-semibold text-gray-900"},"Check your email",-1)),e("p",M," We've sent a password reset link to "+f(s(n)),1),e("div",{class:"mt-6"},[e("button",{type:"button",onClick:_,class:"text-sm font-semibold text-indigo-600 hover:text-indigo-500"}," Send another email ")])])):(m(),k(a,{key:0,type:"form",actions:!1,onSubmit:g},{default:c(()=>[d(a,{type:"email",name:"email",label:"Email address",validation:"required|email"}),e("div",null,[e("button",{type:"submit",disabled:s(o),class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},f(s(o)?"Sending...":"Send reset link"),9,K)])]),_:1}))]),d(x)]),_:1})])}}});export{A as default};