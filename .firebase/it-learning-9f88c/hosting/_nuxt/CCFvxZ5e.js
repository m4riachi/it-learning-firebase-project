import{_ as f}from"./DLODZTTY.js";import{_ as l,o as m,c as u,a as r,b as o,w as p,d,t as b,f as w,j as h,u as v,k as y,g as L}from"./BtgEQtGO.js";import{_ as $}from"./D1q9gOaN.js";import{d as k,g as S,t as j}from"./RQZS7StH.js";import"./BY4eh0DY.js";const F={},N={class:"flex items-center justify-end"},q={class:"text-sm/6"};function E(a,e){const t=f;return m(),u("div",N,[r("div",q,[o(t,{to:"/login/forgot-password",class:"font-semibold text-indigo-600 hover:text-indigo-500"},{default:p(()=>e[0]||(e[0]=[d("Forgot password?")])),_:1})])])}const P=l(F,[["render",E],["__file","/home/taoufiq/workspaces/it-learning/firebase/firebase-project/components/Login/ForgoutPassword.vue"]]),B={},C={class:"mt-10 text-center text-sm/6 text-gray-500"};function V(a,e){const t=f;return m(),u("p",C,[e[1]||(e[1]=d(" Not a member? "+b(" ")+" ")),o(t,{to:"/login/signup",class:"font-semibold text-indigo-600 hover:text-indigo-500"},{default:p(()=>e[0]||(e[0]=[d("Sign Up")])),_:1})])}const A=l(B,[["render",V],["__file","/home/taoufiq/workspaces/it-learning/firebase/firebase-project/components/Login/SignupLink.vue"]]),K=w({__name:"index",setup(a,{expose:e}){e(),k();const t=h(),i=v(),_={router:t,auth:i,handleLogin:async s=>{try{await y(i,s.email,s.password),t.push("/")}catch(n){let c=S(n==null?void 0:n.code);j("",c)}}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),M={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"},D={class:"bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12"};function G(a,e,t,i,g,_){const s=L("FormKit"),n=P,c=$,x=A;return m(),u("div",M,[r("div",D,[o(s,{type:"form",actions:!1,onSubmit:i.handleLogin},{default:p(()=>[o(s,{type:"email",name:"email",label:"Email address",validation:"required"}),o(s,{type:"password",name:"password",label:"password",validation:"required"}),o(n),e[0]||(e[0]=r("div",null,[r("button",{type:"submit",class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Sign in")],-1))]),_:1}),o(c)]),o(x)])}const W=l(K,[["render",G],["__file","/home/taoufiq/workspaces/it-learning/firebase/firebase-project/pages/login/index.vue"]]);export{W as default};
//# sourceMappingURL=CCFvxZ5e.js.map
