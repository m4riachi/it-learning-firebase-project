import{F as c,a as p}from"./CLZrmjW9.js";import{_ as f}from"./Dcx0dQFn.js";import{_}from"./BfCubmGH.js";import{e as g,J as w,u as v,c as b,b as s,w as i,K as h,o as x,a as t,O as y,P}from"./V3PcRQWG.js";import{g as F,t as q}from"./BPUVw4Yf.js";import"./CTAeZCIZ.js";import"./RGmgZce_.js";const E={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"},L={class:"bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12"},V=g({__name:"signup",setup(B){const n=w(),r=v(),l=o=>o.value===o.parent.value.password,m=async o=>{try{const e=await y(r,o.email,o.password);e.user&&await P(e.user,{displayName:o.name}),n.push("/")}catch(e){const a=F(e==null?void 0:e.code);q("",a)}};return(o,e)=>{const a=p,d=f,u=_;return x(),b("div",E,[s(h(c),{"config-file":"true"},{default:i(()=>[t("div",L,[s(a,{type:"form",actions:!1,onSubmit:m},{default:i(()=>[s(a,{type:"text",name:"name",label:"Full name",validation:"required"}),s(a,{type:"email",name:"email",label:"Email address",validation:"required|email"}),s(a,{type:"password",name:"password",label:"Password",validation:"required|length:6","validation-messages":{length:"Minimum 6 charactéres"}}),s(a,{type:"password",name:"confirmPassword",label:"Confirm password",validation:"required|confirm","validation-label":"Password confirmation","validation-rules":{confirm:l},"validation-messages":{confirm:"Les deux mot de pass ne sont pas identique"}},null,8,["validation-rules"]),e[0]||(e[0]=t("div",null,[t("button",{type:"submit",class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Sign up ")],-1))]),_:1}),s(d)]),s(u)]),_:1})])}}});export{V as default};