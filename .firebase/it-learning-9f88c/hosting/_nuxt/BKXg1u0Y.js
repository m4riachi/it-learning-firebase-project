import{$ as x,a0 as v,r as d}from"./BxzS_gTc.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function I(e,n=0){return(r[e[n+0]]+r[e[n+1]]+r[e[n+2]]+r[e[n+3]]+"-"+r[e[n+4]]+r[e[n+5]]+"-"+r[e[n+6]]+r[e[n+7]]+"-"+r[e[n+8]]+r[e[n+9]]+"-"+r[e[n+10]]+r[e[n+11]]+r[e[n+12]]+r[e[n+13]]+r[e[n+14]]+r[e[n+15]]).toLowerCase()}let u;const D=new Uint8Array(16);function S(){if(!u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");u=crypto.getRandomValues.bind(crypto)}return u(D)}const T=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:T};function b(e,n,l){if(m.randomUUID&&!n&&!e)return m.randomUUID();e=e||{};const o=e.random||(e.rng||S)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,I(o)}var h=(e=>(e.error="error",e.warning="warning",e.success="success",e))(h||{});const $=x("error-handler",()=>{const e=v([]),n=d(""),l=d(!1),o=d(!1),U=t=>{o.value=t},w=({type:t,title:s="",message:c="",error:a,timeout:p=0})=>{const i=b();s||(s=h[t]);let y="";return a&&typeof a.message=="string"&&(y=a.message),t==="error"&&(c=`${c}`),e.push({key:i,type:t,title:s,message:`${c}  ${y}`}),p>0&&setTimeout(()=>{g(i)},p),i},g=t=>{let s=-1;e.forEach((c,a)=>{c.key===t&&(s=a)}),e.splice(s,1)};return{toastList:e,addToast:w,closeToast:g,errorMessage:n,shouldInvalidateQueries:l,clearToastsWarning:()=>{for(let t=e.length-1;t>=0;t--)e[t].type==="warning"&&e.splice(t,1)},showErrorMessage:o,setShowErrorMessage:U}});export{h as T,$ as u};