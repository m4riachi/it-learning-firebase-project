import{_ as p}from"./D1q9gOaN.js";import{_ as c}from"./cFmoQLJB.js";import{f,j as _,u as g,l as w,m as b,_ as v,g as h,c as x,a as r,b as a,w as y,o as P}from"./BtgEQtGO.js";import{d as S,g as q,t as E}from"./RQZS7StH.js";import"./DLODZTTY.js";import"./BY4eh0DY.js";const C=f({__name:"signup",setup(l,{expose:n}){n(),S();const i=_(),t=g(),e={router:i,auth:t,confirmPassword:s=>s.value===s.parent.value.password,handleSignup:async s=>{try{const o=await w(t,s.email,s.password);o.user&&await b(o.user,{displayName:s.name}),i.push("/")}catch(o){const u=q(o==null?void 0:o.code);E("",u)}}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),j={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"},k={class:"bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12"};function B(l,n,i,t,d,m){const e=h("FormKit"),s=p,o=c;return P(),x("div",j,[r("div",k,[a(e,{type:"form",actions:!1,onSubmit:t.handleSignup},{default:y(()=>[a(e,{type:"text",name:"name",label:"Full name",validation:"required"}),a(e,{type:"email",name:"email",label:"Email address",validation:"required|email"}),a(e,{type:"password",name:"password",label:"Password",validation:"required|length:6","validation-messages":{length:"Minimum 6 charactéres"}}),a(e,{type:"password",name:"confirmPassword",label:"Confirm password",validation:"required|confirm","validation-label":"Password confirmation","validation-rules":{confirm:t.confirmPassword},"validation-messages":{confirm:"Les deux mot de pass ne sont pas identique"}},null,8,["validation-rules"]),n[0]||(n[0]=r("div",null,[r("button",{type:"submit",class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Sign up ")],-1))]),_:1}),a(s)]),a(o)])}const V=v(C,[["render",B],["__file","/home/taoufiq/workspaces/it-learning/firebase/firebase-project/pages/login/signup.vue"]]);export{V as default};
//# sourceMappingURL=DAmqRljf.js.map
