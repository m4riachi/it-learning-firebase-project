const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CBV1DPjJ.js","./rSl9R3HM.js","./CTAeZCIZ.js","./BPUVw4Yf.js","./RGmgZce_.js","./index.Dhfs5r89.css","./CgV6EuVV.js","./CLZrmjW9.js","./BfCubmGH.js","./OtMYH9xd.js","./Dcx0dQFn.js","./iR6gjg70.js","./BP_7Dxcs.js","./YAroTRNn.js","./gnPeoup1.js","./BdyHTcMX.js","./BZHVtlFp.js","./error-404.CoZKRZXM.css","./DPxvJjsa.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},Ii=[],Wn=()=>{},KA=()=>!1,Ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wd=t=>t.startsWith("onUpdate:"),lt=Object.assign,Kd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},GA=Object.prototype.hasOwnProperty,Oe=(t,e)=>GA.call(t,e),ue=Array.isArray,bi=t=>Ba(t)==="[object Map]",FE=t=>Ba(t)==="[object Set]",zA=t=>Ba(t)==="[object RegExp]",fe=t=>typeof t=="function",Ke=t=>typeof t=="string",Ir=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",UE=t=>(je(t)||fe(t))&&fe(t.then)&&fe(t.catch),BE=Object.prototype.toString,Ba=t=>BE.call(t),QA=t=>Ba(t).slice(8,-1),jE=t=>Ba(t)==="[object Object]",Gd=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ri=qd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),au=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},YA=/-(\w)/g,yn=au(t=>t.replace(YA,(e,n)=>n?n.toUpperCase():"")),XA=/\B([A-Z])/g,Ys=au(t=>t.replace(XA,"-$1").toLowerCase()),cu=au(t=>t.charAt(0).toUpperCase()+t.slice(1)),vh=au(t=>t?`on${cu(t)}`:""),zr=(t,e)=>!Object.is(t,e),Ai=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$E=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},hf=t=>{const e=parseFloat(t);return isNaN(e)?t:e},HE=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Hm;const lu=()=>Hm||(Hm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uu(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?tC(r):uu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||je(t))return t}const JA=/;(?![^(]*\))/g,ZA=/:([^]+)/,eC=/\/\*[^]*?\*\//g;function tC(t){const e={};return t.replace(eC,"").split(JA).forEach(n=>{if(n){const r=n.split(ZA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hu(t){let e="";if(Ke(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=hu(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function nC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=hu(e)),n&&(t.style=uu(n)),t}const rC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sC=qd(rC);function qE(t){return!!t||t===""}const WE=t=>!!(t&&t.__v_isRef===!0),iC=t=>Ke(t)?t:t==null?"":ue(t)||je(t)&&(t.toString===BE||!fe(t.toString))?WE(t)?iC(t.value):JSON.stringify(t,KE,2):String(t),KE=(t,e)=>WE(e)?KE(t,e.value):bi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Eh(r,i)+" =>"]=s,n),{})}:FE(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Eh(n))}:Ir(e)?Eh(e):je(e)&&!ue(e)&&!jE(e)?String(e):e,Eh=(t,e="")=>{var n;return Ir(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class GE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function fu(t){return new GE(t)}function zd(){return Kt}function oC(t,e=!1){Kt&&Kt.cleanups.push(t)}let Ue;const Th=new WeakSet;class zE{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Th.has(this)&&(Th.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||YE(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qm(this),XE(this);const e=Ue,n=Sn;Ue=this,Sn=!0;try{return this.fn()}finally{JE(this),Ue=e,Sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xd(e);this.deps=this.depsTail=void 0,qm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Th.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ff(this)&&this.run()}get dirty(){return ff(this)}}let QE=0,Wo,Ko;function YE(t,e=!1){if(t.flags|=8,e){t.next=Ko,Ko=t;return}t.next=Wo,Wo=t}function Qd(){QE++}function Yd(){if(--QE>0)return;if(Ko){let e=Ko;for(Ko=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Wo;){let e=Wo;for(Wo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function XE(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function JE(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Xd(r),aC(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ff(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ZE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ZE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===da))return;t.globalVersion=da;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ff(t)){t.flags&=-3;return}const n=Ue,r=Sn;Ue=t,Sn=!0;try{XE(t);const s=t.fn(t._value);(e.version===0||zr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,Sn=r,JE(t),t.flags&=-3}}function Xd(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function aC(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Sn=!0;const eT=[];function us(){eT.push(Sn),Sn=!1}function hs(){const t=eT.pop();Sn=t===void 0?!0:t}function qm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let da=0;class cC{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!Sn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new cC(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,tT(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,da++,this.notify(e)}notify(e){Qd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yd()}}}function tT(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tT(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dl=new WeakMap,Os=Symbol(""),df=Symbol(""),pa=Symbol("");function Ot(t,e,n){if(Sn&&Ue){let r=dl.get(t);r||dl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Jd),s.map=r,s.key=n),s.track()}}function ar(t,e,n,r,s,i){const o=dl.get(t);if(!o){da++;return}const a=c=>{c&&c.trigger()};if(Qd(),e==="clear")o.forEach(a);else{const c=ue(t),u=c&&Gd(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===pa||!Ir(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(pa)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Os)),bi(t)&&a(o.get(df)));break;case"delete":c||(a(o.get(Os)),bi(t)&&a(o.get(df)));break;case"set":bi(t)&&a(o.get(Os));break}}Yd()}function lC(t,e){const n=dl.get(t);return n&&n.get(e)}function li(t){const e=Ce(t);return e===t?e:(Ot(e,"iterate",pa),mn(t)?e:e.map(Dt))}function du(t){return Ot(t=Ce(t),"iterate",pa),t}const uC={__proto__:null,[Symbol.iterator](){return wh(this,Symbol.iterator,Dt)},concat(...t){return li(this).concat(...t.map(e=>ue(e)?li(e):e))},entries(){return wh(this,"entries",t=>(t[1]=Dt(t[1]),t))},every(t,e){return nr(this,"every",t,e,void 0,arguments)},filter(t,e){return nr(this,"filter",t,e,n=>n.map(Dt),arguments)},find(t,e){return nr(this,"find",t,e,Dt,arguments)},findIndex(t,e){return nr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nr(this,"findLast",t,e,Dt,arguments)},findLastIndex(t,e){return nr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ih(this,"includes",t)},indexOf(...t){return Ih(this,"indexOf",t)},join(t){return li(this).join(t)},lastIndexOf(...t){return Ih(this,"lastIndexOf",t)},map(t,e){return nr(this,"map",t,e,void 0,arguments)},pop(){return Ro(this,"pop")},push(...t){return Ro(this,"push",t)},reduce(t,...e){return Wm(this,"reduce",t,e)},reduceRight(t,...e){return Wm(this,"reduceRight",t,e)},shift(){return Ro(this,"shift")},some(t,e){return nr(this,"some",t,e,void 0,arguments)},splice(...t){return Ro(this,"splice",t)},toReversed(){return li(this).toReversed()},toSorted(t){return li(this).toSorted(t)},toSpliced(...t){return li(this).toSpliced(...t)},unshift(...t){return Ro(this,"unshift",t)},values(){return wh(this,"values",Dt)}};function wh(t,e,n){const r=du(t),s=r[e]();return r!==t&&!mn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const hC=Array.prototype;function nr(t,e,n,r,s,i){const o=du(t),a=o!==t&&!mn(t),c=o[e];if(c!==hC[e]){const f=c.apply(t,i);return a?Dt(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,Dt(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,r);return a&&s?s(h):h}function Wm(t,e,n,r){const s=du(t);let i=n;return s!==t&&(mn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Dt(a),c,t)}),s[e](i,...r)}function Ih(t,e,n){const r=Ce(t);Ot(r,"iterate",pa);const s=r[e](...n);return(s===-1||s===!1)&&tp(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Ro(t,e,n=[]){us(),Qd();const r=Ce(t)[e].apply(t,n);return Yd(),hs(),r}const fC=qd("__proto__,__v_isRef,__isVue"),nT=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ir));function dC(t){Ir(t)||(t=String(t));const e=Ce(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class rT{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?IC:aT:i?oT:iT).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=uC[n]))return c;if(n==="hasOwnProperty")return dC}const a=Reflect.get(e,n,et(e)?e:r);return(Ir(n)?nT.has(n):fC(n))||(s||Ot(e,"get",n),i)?a:et(a)?o&&Gd(n)?a:a.value:je(a)?s?cT(a):Xn(a):a}}class sT extends rT{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ts(i);if(!mn(r)&&!ts(r)&&(i=Ce(i),r=Ce(r)),!ue(e)&&et(i)&&!et(r))return c?!1:(i.value=r,!0)}const o=ue(e)&&Gd(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,r,et(e)?e:s);return e===Ce(s)&&(o?zr(r,i)&&ar(e,"set",n,r):ar(e,"add",n,r)),a}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ar(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ir(n)||!nT.has(n))&&Ot(e,"has",n),r}ownKeys(e){return Ot(e,"iterate",ue(e)?"length":Os),Reflect.ownKeys(e)}}class pC extends rT{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gC=new sT,mC=new pC,_C=new sT(!0);const pf=t=>t,Ic=t=>Reflect.getPrototypeOf(t);function yC(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=bi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?pf:e?gf:Dt;return!e&&Ot(i,"iterate",c?df:Os),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function bc(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vC(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),a=Ce(s);t||(zr(s,a)&&Ot(o,"get",s),Ot(o,"get",a));const{has:c}=Ic(o),u=e?pf:t?gf:Dt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ot(Ce(s),"iterate",Os),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ce(i),a=Ce(s);return t||(zr(s,a)&&Ot(o,"has",s),Ot(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Ce(a),u=e?pf:t?gf:Dt;return!t&&Ot(c,"iterate",Os),a.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return lt(n,t?{add:bc("add"),set:bc("set"),delete:bc("delete"),clear:bc("clear")}:{add(s){!e&&!mn(s)&&!ts(s)&&(s=Ce(s));const i=Ce(this);return Ic(i).has.call(i,s)||(i.add(s),ar(i,"add",s,s)),this},set(s,i){!e&&!mn(i)&&!ts(i)&&(i=Ce(i));const o=Ce(this),{has:a,get:c}=Ic(o);let u=a.call(o,s);u||(s=Ce(s),u=a.call(o,s));const h=c.call(o,s);return o.set(s,i),u?zr(i,h)&&ar(o,"set",s,i):ar(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:a}=Ic(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&ar(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&ar(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yC(s,t,e)}),n}function Zd(t,e){const n=vC(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const EC={get:Zd(!1,!1)},TC={get:Zd(!1,!0)},wC={get:Zd(!0,!1)};const iT=new WeakMap,oT=new WeakMap,aT=new WeakMap,IC=new WeakMap;function bC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function RC(t){return t.__v_skip||!Object.isExtensible(t)?0:bC(QA(t))}function Xn(t){return ts(t)?t:ep(t,!1,gC,EC,iT)}function lr(t){return ep(t,!1,_C,TC,oT)}function cT(t){return ep(t,!0,mC,wC,aT)}function ep(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=RC(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function pr(t){return ts(t)?pr(t.__v_raw):!!(t&&t.__v_isReactive)}function ts(t){return!!(t&&t.__v_isReadonly)}function mn(t){return!!(t&&t.__v_isShallow)}function tp(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function ga(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&$E(t,"__v_skip",!0),t}const Dt=t=>je(t)?Xn(t):t,gf=t=>je(t)?cT(t):t;function et(t){return t?t.__v_isRef===!0:!1}function _n(t){return lT(t,!1)}function ma(t){return lT(t,!0)}function lT(t,e){return et(t)?t:new AC(t,e)}class AC{constructor(e,n){this.dep=new Jd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:Dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||mn(e)||ts(e);e=r?e:Ce(e),zr(e,n)&&(this._rawValue=e,this._value=r?e:Dt(e),this.dep.trigger())}}function UH(t){t.dep&&t.dep.trigger()}function Be(t){return et(t)?t.value:t}const CC={get:(t,e,n)=>e==="__v_raw"?t:Be(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return et(s)&&!et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uT(t){return pr(t)?t:new Proxy(t,CC)}function SC(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=hT(t,n);return e}class PC{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return lC(Ce(this._object),this._key)}}class kC{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function NC(t,e,n){return et(t)?t:fe(t)?new kC(t):je(t)&&arguments.length>1?hT(t,e,n):_n(t)}function hT(t,e,n){const r=t[e];return et(r)?r:new PC(t,e,n)}class OC{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Jd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=da-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return YE(this,!0),!0}get value(){const e=this.dep.track();return ZE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function DC(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new OC(r,s,n)}const Rc={},pl=new WeakMap;let Rs;function xC(t,e=!1,n=Rs){if(n){let r=pl.get(n);r||pl.set(n,r=[]),r.push(t)}}function LC(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=k=>s?k:mn(k)||s===!1||s===0?cr(k,1):cr(k);let h,f,p,m,E=!1,R=!1;if(et(t)?(f=()=>t.value,E=mn(t)):pr(t)?(f=()=>u(t),E=!0):ue(t)?(R=!0,E=t.some(k=>pr(k)||mn(k)),f=()=>t.map(k=>{if(et(k))return k.value;if(pr(k))return u(k);if(fe(k))return c?c(k,2):k()})):fe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){us();try{p()}finally{hs()}}const k=Rs;Rs=h;try{return c?c(t,3,[m]):t(m)}finally{Rs=k}}:f=Wn,e&&s){const k=f,x=s===!0?1/0:s;f=()=>cr(k(),x)}const S=zd(),D=()=>{h.stop(),S&&S.active&&Kd(S.effects,h)};if(i&&e){const k=e;e=(...x)=>{k(...x),D()}}let O=R?new Array(t.length).fill(Rc):Rc;const w=k=>{if(!(!(h.flags&1)||!h.dirty&&!k))if(e){const x=h.run();if(s||E||(R?x.some((L,I)=>zr(L,O[I])):zr(x,O))){p&&p();const L=Rs;Rs=h;try{const I=[x,O===Rc?void 0:R&&O[0]===Rc?[]:O,m];c?c(e,3,I):e(...I),O=x}finally{Rs=L}}}else h.run()};return a&&a(w),h=new zE(f),h.scheduler=o?()=>o(w,!1):w,m=k=>xC(k,!1,h),p=h.onStop=()=>{const k=pl.get(h);if(k){if(c)c(k,4);else for(const x of k)x();pl.delete(h)}},e?r?w(!0):O=h.run():o?o(w.bind(null,!0),!0):h.run(),D.pause=h.pause.bind(h),D.resume=h.resume.bind(h),D.stop=D,D}function cr(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,et(t))cr(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)cr(t[r],e,n);else if(FE(t)||bi(t))t.forEach(r=>{cr(r,e,n)});else if(jE(t)){for(const r in t)cr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&cr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ja(t,e,n,r){try{return r?t(...r):t()}catch(s){Xi(s,e,n)}}function On(t,e,n,r){if(fe(t)){const s=ja(t,e,n,r);return s&&UE(s)&&s.catch(i=>{Xi(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(On(t[i],e,n,r));return s}}function Xi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(i){us(),ja(i,null,10,[t,c,u]),hs();return}}MC(t,n,s,r,o)}function MC(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Gt=[];let Fn=-1;const Ci=[];let Mr=null,fi=0;const fT=Promise.resolve();let gl=null;function Xs(t){const e=gl||fT;return t?e.then(this?t.bind(this):t):e}function VC(t){let e=Fn+1,n=Gt.length;for(;e<n;){const r=e+n>>>1,s=Gt[r],i=_a(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function np(t){if(!(t.flags&1)){const e=_a(t),n=Gt[Gt.length-1];!n||!(t.flags&2)&&e>=_a(n)?Gt.push(t):Gt.splice(VC(e),0,t),t.flags|=1,dT()}}function dT(){gl||(gl=fT.then(pT))}function mf(t){ue(t)?Ci.push(...t):Mr&&t.id===-1?Mr.splice(fi+1,0,t):t.flags&1||(Ci.push(t),t.flags|=1),dT()}function Km(t,e,n=Fn+1){for(;n<Gt.length;n++){const r=Gt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Gt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ml(t){if(Ci.length){const e=[...new Set(Ci)].sort((n,r)=>_a(n)-_a(r));if(Ci.length=0,Mr){Mr.push(...e);return}for(Mr=e,fi=0;fi<Mr.length;fi++){const n=Mr[fi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mr=null,fi=0}}const _a=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pT(t){try{for(Fn=0;Fn<Gt.length;Fn++){const e=Gt[Fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ja(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fn<Gt.length;Fn++){const e=Gt[Fn];e&&(e.flags&=-2)}Fn=-1,Gt.length=0,ml(),gl=null,(Gt.length||Ci.length)&&pT()}}let pt=null,gT=null;function _l(t){const e=pt;return pt=t,gT=t&&t.type.__scopeId||null,e}function rp(t,e=pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&a_(-1);const i=_l(e);let o;try{o=t(...s)}finally{_l(i),r._d&&a_(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function BH(t,e){if(pt===null)return t;const n=yu(pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Fe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&cr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Un(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(us(),On(c,n,8,[t.el,a,t,e]),hs())}}const mT=Symbol("_vte"),_T=t=>t.__isTeleport,Go=t=>t&&(t.disabled||t.disabled===""),Gm=t=>t&&(t.defer||t.defer===""),zm=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Qm=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,_f=(t,e)=>{const n=t&&t.to;return Ke(n)?e?e(n):null:n},yT={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,u){const{mc:h,pc:f,pbc:p,o:{insert:m,querySelector:E,createText:R,createComment:S}}=u,D=Go(e.props);let{shapeFlag:O,children:w,dynamicChildren:k}=e;if(t==null){const x=e.el=R(""),L=e.anchor=R("");m(x,n,r),m(L,n,r);const I=(_,T)=>{O&16&&(s&&s.isCE&&(s.ce._teleportTarget=_),h(w,_,T,s,i,o,a,c))},y=()=>{const _=e.target=_f(e.props,E),T=vT(_,e,R,m);_&&(o!=="svg"&&zm(_)?o="svg":o!=="mathml"&&Qm(_)&&(o="mathml"),D||(I(_,T),zc(e,!1)))};D&&(I(n,L),zc(e,!0)),Gm(e.props)?ht(()=>{y(),e.el.__isMounted=!0},i):y()}else{if(Gm(e.props)&&!t.el.__isMounted){ht(()=>{yT.process(t,e,n,r,s,i,o,a,c,u),delete t.el.__isMounted},i);return}e.el=t.el,e.targetStart=t.targetStart;const x=e.anchor=t.anchor,L=e.target=t.target,I=e.targetAnchor=t.targetAnchor,y=Go(t.props),_=y?n:L,T=y?x:I;if(o==="svg"||zm(L)?o="svg":(o==="mathml"||Qm(L))&&(o="mathml"),k?(p(t.dynamicChildren,k,_,s,i,o,a),up(t,e,!0)):c||f(t,e,_,T,s,i,o,a,!1),D)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ac(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const P=e.target=_f(e.props,E);P&&Ac(e,P,null,u,0)}else y&&Ac(e,L,I,u,1);zc(e,D)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:f,props:p}=t;if(f&&(s(u),s(h)),i&&s(c),o&16){const m=i||!Go(p);for(let E=0;E<a.length;E++){const R=a[E];r(R,e,n,m,!!R.dynamicChildren)}}},move:Ac,hydrate:FC};function Ac(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,f=i===2;if(f&&r(o,e,n),(!f||Go(h))&&c&16)for(let p=0;p<u.length;p++)s(u[p],e,n,2);f&&r(a,e,n)}function FC(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},f){const p=e.target=_f(e.props,c);if(p){const m=Go(e.props),E=p._lpa||p.firstChild;if(e.shapeFlag&16)if(m)e.anchor=f(o(t),e,a(t),n,r,s,i),e.targetStart=E,e.targetAnchor=E&&o(E);else{e.anchor=o(t);let R=E;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")e.targetStart=R;else if(R.data==="teleport anchor"){e.targetAnchor=R,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}R=o(R)}e.targetAnchor||vT(p,e,h,u),f(E&&o(E),e,p,n,r,s,i)}zc(e,m)}return e.anchor&&o(e.anchor)}const jH=yT;function zc(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function vT(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[mT]=i,t&&(r(s,t),r(i,t)),i}const Vr=Symbol("_leaveCb"),Cc=Symbol("_enterCb");function UC(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ip(()=>{t.isMounted=!0}),op(()=>{t.isUnmounting=!0}),t}const fn=[Function,Array],ET={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fn,onEnter:fn,onAfterEnter:fn,onEnterCancelled:fn,onBeforeLeave:fn,onLeave:fn,onAfterLeave:fn,onLeaveCancelled:fn,onBeforeAppear:fn,onAppear:fn,onAfterAppear:fn,onAppearCancelled:fn},TT=t=>{const e=t.subTree;return e.component?TT(e.component):e},BC={name:"BaseTransition",props:ET,setup(t,{slots:e}){const n=_u(),r=UC();return()=>{const s=e.default&&bT(e.default(),!0);if(!s||!s.length)return;const i=wT(s),o=Ce(t),{mode:a}=o;if(r.isLeaving)return bh(i);const c=Ym(i);if(!c)return bh(i);let u=yf(c,o,r,n,f=>u=f);c.type!==ft&&Li(c,u);let h=n.subTree&&Ym(n.subTree);if(h&&h.type!==ft&&!Rn(c,h)&&TT(n).type!==ft){let f=yf(h,o,r,n);if(Li(h,f),a==="out-in"&&c.type!==ft)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},bh(i);a==="in-out"&&c.type!==ft?f.delayLeave=(p,m,E)=>{const R=IT(r,h);R[String(h.key)]=h,p[Vr]=()=>{m(),p[Vr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{E(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function wT(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ft){e=n;break}}return e}const jC=BC;function IT(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yf(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:E,onLeaveCancelled:R,onBeforeAppear:S,onAppear:D,onAfterAppear:O,onAppearCancelled:w}=e,k=String(t.key),x=IT(n,t),L=(_,T)=>{_&&On(_,r,9,T)},I=(_,T)=>{const P=T[1];L(_,T),ue(_)?_.every(C=>C.length<=1)&&P():_.length<=1&&P()},y={mode:o,persisted:a,beforeEnter(_){let T=c;if(!n.isMounted)if(i)T=S||c;else return;_[Vr]&&_[Vr](!0);const P=x[k];P&&Rn(t,P)&&P.el[Vr]&&P.el[Vr](),L(T,[_])},enter(_){let T=u,P=h,C=f;if(!n.isMounted)if(i)T=D||u,P=O||h,C=w||f;else return;let b=!1;const pe=_[Cc]=ye=>{b||(b=!0,ye?L(C,[_]):L(P,[_]),y.delayedLeave&&y.delayedLeave(),_[Cc]=void 0)};T?I(T,[_,pe]):pe()},leave(_,T){const P=String(t.key);if(_[Cc]&&_[Cc](!0),n.isUnmounting)return T();L(p,[_]);let C=!1;const b=_[Vr]=pe=>{C||(C=!0,T(),pe?L(R,[_]):L(E,[_]),_[Vr]=void 0,x[P]===t&&delete x[P])};x[P]=t,m?I(m,[_,b]):b()},clone(_){const T=yf(_,e,n,r,s);return s&&s(T),T}};return y}function bh(t){if($a(t))return t=yr(t),t.children=null,t}function Ym(t){if(!$a(t))return _T(t.type)&&t.children?wT(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Li(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Li(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bT(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xt?(o.patchFlag&128&&s++,r=r.concat(bT(o.children,e,a))):(e||o.type!==ft)&&r.push(a!=null?yr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function br(t,e){return fe(t)?lt({name:t.name},e,{setup:t}):t}function sp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ya(t,e,n,r,s=!1){if(ue(t)){t.forEach((E,R)=>ya(E,e&&(ue(e)?e[R]:e),n,r,s));return}if(Qr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ya(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?yu(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,f=a.setupState,p=Ce(f),m=f===Fe?()=>!1:E=>Oe(p,E);if(u!=null&&u!==c&&(Ke(u)?(h[u]=null,m(u)&&(f[u]=null)):et(u)&&(u.value=null)),fe(c))ja(c,a,12,[o,h]);else{const E=Ke(c),R=et(c);if(E||R){const S=()=>{if(t.f){const D=E?m(c)?f[c]:h[c]:c.value;s?ue(D)&&Kd(D,i):ue(D)?D.includes(i)||D.push(i):E?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else E?(h[c]=o,m(c)&&(f[c]=o)):R&&(c.value=o,t.k&&(h[t.k]=o))};o?(S.id=-1,ht(S,n)):S()}}}let Xm=!1;const ui=()=>{Xm||(console.error("Hydration completed but contains mismatches."),Xm=!0)},$C=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",HC=t=>t.namespaceURI.includes("MathML"),Sc=t=>{if(t.nodeType===1){if($C(t))return"svg";if(HC(t))return"mathml"}},vi=t=>t.nodeType===8;function qC(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,h=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),ml(),k._vnode=w;return}f(k.firstChild,w,null,null,null),ml(),k._vnode=w},f=(w,k,x,L,I,y=!1)=>{y=y||!!k.dynamicChildren;const _=vi(w)&&w.data==="[",T=()=>R(w,k,x,L,I,_),{type:P,ref:C,shapeFlag:b,patchFlag:pe}=k;let ye=w.nodeType;k.el=w,pe===-2&&(y=!1,k.dynamicChildren=null);let Z=null;switch(P){case Ms:ye!==3?k.children===""?(c(k.el=s(""),o(w),w),Z=w):Z=T():(w.data!==k.children&&(ui(),w.data=k.children),Z=i(w));break;case ft:O(w)?(Z=i(w),D(k.el=w.content.firstChild,w,x)):ye!==8||_?Z=T():Z=i(w);break;case Qo:if(_&&(w=i(w),ye=w.nodeType),ye===1||ye===3){Z=w;const ie=!k.children.length;for(let re=0;re<k.staticCount;re++)ie&&(k.children+=Z.nodeType===1?Z.outerHTML:Z.data),re===k.staticCount-1&&(k.anchor=Z),Z=i(Z);return _?i(Z):Z}else T();break;case xt:_?Z=E(w,k,x,L,I,y):Z=T();break;default:if(b&1)(ye!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!O(w)?Z=T():Z=p(w,k,x,L,I,y);else if(b&6){k.slotScopeIds=I;const ie=o(w);if(_?Z=S(w):vi(w)&&w.data==="teleport start"?Z=S(w,w.data,"teleport end"):Z=i(w),e(k,ie,null,x,L,Sc(ie),y),Qr(k)&&!k.type.__asyncResolved){let re;_?(re=Xe(xt),re.anchor=Z?Z.previousSibling:ie.lastChild):re=w.nodeType===3?nw(""):Xe("div"),re.el=w,k.component.subTree=re}}else b&64?ye!==8?Z=T():Z=k.type.hydrate(w,k,x,L,I,y,t,m):b&128&&(Z=k.type.hydrate(w,k,x,L,Sc(o(w)),I,y,t,f))}return C!=null&&ya(C,null,L,k),Z},p=(w,k,x,L,I,y)=>{y=y||!!k.dynamicChildren;const{type:_,props:T,patchFlag:P,shapeFlag:C,dirs:b,transition:pe}=k,ye=_==="input"||_==="option";if(ye||P!==-1){b&&Un(k,null,x,"created");let Z=!1;if(O(w)){Z=WT(null,pe)&&x&&x.vnode.props&&x.vnode.props.appear;const re=w.content.firstChild;Z&&pe.beforeEnter(re),D(re,w,x),k.el=w=re}if(C&16&&!(T&&(T.innerHTML||T.textContent))){let re=m(w.firstChild,k,w,x,L,I,y);for(;re;){Pc(w,1)||ui();const ze=re;re=re.nextSibling,a(ze)}}else if(C&8){let re=k.children;re[0]===`
`&&(w.tagName==="PRE"||w.tagName==="TEXTAREA")&&(re=re.slice(1)),w.textContent!==re&&(Pc(w,0)||ui(),w.textContent=k.children)}if(T){if(ye||!y||P&48){const re=w.tagName.includes("-");for(const ze in T)(ye&&(ze.endsWith("value")||ze==="indeterminate")||Ua(ze)&&!Ri(ze)||ze[0]==="."||re)&&r(w,ze,null,T[ze],void 0,x)}else if(T.onClick)r(w,"onClick",null,T.onClick,void 0,x);else if(P&4&&pr(T.style))for(const re in T.style)T.style[re]}let ie;(ie=T&&T.onVnodeBeforeMount)&&Yt(ie,x,k),b&&Un(k,null,x,"beforeMount"),((ie=T&&T.onVnodeMounted)||b||Z)&&YT(()=>{ie&&Yt(ie,x,k),Z&&pe.enter(w),b&&Un(k,null,x,"mounted")},L)}return w.nextSibling},m=(w,k,x,L,I,y,_)=>{_=_||!!k.dynamicChildren;const T=k.children,P=T.length;for(let C=0;C<P;C++){const b=_?T[C]:T[C]=nn(T[C]),pe=b.type===Ms;w?(pe&&!_&&C+1<P&&nn(T[C+1]).type===Ms&&(c(s(w.data.slice(b.children.length)),x,i(w)),w.data=b.children),w=f(w,b,L,I,y,_)):pe&&!b.children?c(b.el=s(""),x):(Pc(x,1)||ui(),n(null,b,x,null,L,I,Sc(x),y))}return w},E=(w,k,x,L,I,y)=>{const{slotScopeIds:_}=k;_&&(I=I?I.concat(_):_);const T=o(w),P=m(i(w),k,T,x,L,I,y);return P&&vi(P)&&P.data==="]"?i(k.anchor=P):(ui(),c(k.anchor=u("]"),T,P),P)},R=(w,k,x,L,I,y)=>{if(Pc(w.parentElement,1)||ui(),k.el=null,y){const P=S(w);for(;;){const C=i(w);if(C&&C!==P)a(C);else break}}const _=i(w),T=o(w);return a(w),n(null,k,T,_,x,L,Sc(T),I),x&&(x.vnode.el=k.el,mu(x,k.el)),_},S=(w,k="[",x="]")=>{let L=0;for(;w;)if(w=i(w),w&&vi(w)&&(w.data===k&&L++,w.data===x)){if(L===0)return i(w);L--}return w},D=(w,k,x)=>{const L=k.parentNode;L&&L.replaceChild(w,k);let I=x;for(;I;)I.vnode.el===k&&(I.vnode.el=I.subTree.el=w),I=I.parent},O=w=>w.nodeType===1&&w.tagName==="TEMPLATE";return[h,f]}const Jm="data-allow-mismatch",WC={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Pc(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Jm);)t=t.parentElement;const n=t&&t.getAttribute(Jm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(WC[e])}}lu().requestIdleCallback;lu().cancelIdleCallback;function KC(t,e){if(vi(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(vi(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Qr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function yl(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,f=0;const p=()=>(f++,u=null,m()),m=()=>{let E;return u||(E=u=e().catch(R=>{if(R=R instanceof Error?R:new Error(String(R)),c)return new Promise((S,D)=>{c(R,()=>S(p()),()=>D(R),f+1)});throw R}).then(R=>E!==u&&u?u:(R&&(R.__esModule||R[Symbol.toStringTag]==="Module")&&(R=R.default),h=R,R)))};return br({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(E,R,S){const D=i?()=>{const O=i(S,w=>KC(E,w));O&&(R.bum||(R.bum=[])).push(O)}:S;h?D():m().then(()=>!R.isUnmounted&&D())},get __asyncResolved(){return h},setup(){const E=dt;if(sp(E),h)return()=>Rh(h,E);const R=w=>{u=null,Xi(w,E,13,!r)};if(a&&E.suspense||Vi)return m().then(w=>()=>Rh(w,E)).catch(w=>(R(w),()=>r?Xe(r,{error:w}):null));const S=_n(!1),D=_n(),O=_n(!!s);return s&&setTimeout(()=>{O.value=!1},s),o!=null&&setTimeout(()=>{if(!S.value&&!D.value){const w=new Error(`Async component timed out after ${o}ms.`);R(w),D.value=w}},o),m().then(()=>{S.value=!0,E.parent&&$a(E.parent.vnode)&&E.parent.update()}).catch(w=>{R(w),D.value=w}),()=>{if(S.value&&h)return Rh(h,E);if(D.value&&r)return Xe(r,{error:D.value});if(n&&!O.value)return Xe(n)}}})}function Rh(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Xe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const $a=t=>t.type.__isKeepAlive,GC={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=_u(),r=n.ctx;if(!r.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:f}}}=r,p=f("div");r.activate=(O,w,k,x,L)=>{const I=O.component;u(O,w,k,0,a),c(I.vnode,O,w,k,I,a,x,O.slotScopeIds,L),ht(()=>{I.isDeactivated=!1,I.a&&Ai(I.a);const y=O.props&&O.props.onVnodeMounted;y&&Yt(y,I.parent,O)},a)},r.deactivate=O=>{const w=O.component;El(w.m),El(w.a),u(O,p,null,1,a),ht(()=>{w.da&&Ai(w.da);const k=O.props&&O.props.onVnodeUnmounted;k&&Yt(k,w.parent,O),w.isDeactivated=!0},a)};function m(O){Ah(O),h(O,n,a,!0)}function E(O){s.forEach((w,k)=>{const x=Af(w.type);x&&!O(x)&&R(k)})}function R(O){const w=s.get(O);w&&(!o||!Rn(w,o))?m(w):o&&Ah(o),s.delete(O),i.delete(O)}Ls(()=>[t.include,t.exclude],([O,w])=>{O&&E(k=>Mo(O,k)),w&&E(k=>!Mo(w,k))},{flush:"post",deep:!0});let S=null;const D=()=>{S!=null&&(Tl(n.subTree.type)?ht(()=>{s.set(S,kc(n.subTree))},n.subTree.suspense):s.set(S,kc(n.subTree)))};return ip(D),AT(D),op(()=>{s.forEach(O=>{const{subTree:w,suspense:k}=n,x=kc(w);if(O.type===x.type&&O.key===x.key){Ah(x);const L=x.component.da;L&&ht(L,k);return}m(O)})}),()=>{if(S=null,!e.default)return o=null;const O=e.default(),w=O[0];if(O.length>1)return o=null,O;if(!js(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let k=kc(w);if(k.type===ft)return o=null,k;const x=k.type,L=Af(Qr(k)?k.type.__asyncResolved||{}:x),{include:I,exclude:y,max:_}=t;if(I&&(!L||!Mo(I,L))||y&&L&&Mo(y,L))return k.shapeFlag&=-257,o=k,w;const T=k.key==null?x:k.key,P=s.get(T);return k.el&&(k=yr(k),w.shapeFlag&128&&(w.ssContent=k)),S=T,P?(k.el=P.el,k.component=P.component,k.transition&&Li(k,k.transition),k.shapeFlag|=512,i.delete(T),i.add(T)):(i.add(T),_&&i.size>parseInt(_,10)&&R(i.values().next().value)),k.shapeFlag|=256,o=k,Tl(w.type)?w:k}}},zC=GC;function Mo(t,e){return ue(t)?t.some(n=>Mo(n,e)):Ke(t)?t.split(",").includes(e):zA(t)?(t.lastIndex=0,t.test(e)):!1}function QC(t,e){RT(t,"a",e)}function YC(t,e){RT(t,"da",e)}function RT(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pu(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$a(s.parent.vnode)&&XC(r,e,n,s),s=s.parent}}function XC(t,e,n,r){const s=pu(e,t,r,!0);CT(()=>{Kd(r[e],s)},n)}function Ah(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function kc(t){return t.shapeFlag&128?t.ssContent:t}function pu(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{us();const a=Ha(n),c=On(e,n,t,o);return a(),hs(),c});return r?s.unshift(i):s.push(i),i}}const Rr=t=>(e,n=dt)=>{(!Vi||t==="sp")&&pu(t,(...r)=>e(...r),n)},JC=Rr("bm"),ip=Rr("m"),ZC=Rr("bu"),AT=Rr("u"),op=Rr("bum"),CT=Rr("um"),eS=Rr("sp"),tS=Rr("rtg"),nS=Rr("rtc");function ST(t,e=dt){pu("ec",t,e)}const PT="components";function $H(t,e){return NT(PT,t,!0,e)||t}const kT=Symbol.for("v-ndc");function rS(t){return Ke(t)?NT(PT,t,!1)||t:t||kT}function NT(t,e,n=!0,r=!1){const s=pt||dt;if(s){const i=s.type;{const a=Af(i,!1);if(a&&(a===e||a===yn(e)||a===cu(yn(e))))return i}const o=Zm(s[t]||i[t],e)||Zm(s.appContext[t],e);return!o&&r?i:o}}function Zm(t,e){return t&&(t[e]||t[yn(e)]||t[cu(yn(e))])}function HH(t,e,n,r){let s;const i=n,o=ue(t);if(o||Ke(t)){const a=o&&pr(t);let c=!1;a&&(c=!mn(t),t=du(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(c?Dt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function qH(t,e,n={},r,s){if(pt.ce||pt.parent&&Qr(pt.parent)&&pt.parent.ce)return pn(),jn(xt,null,[Xe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),pn();const o=i&&OT(i(n)),a=n.key||o&&o.key,c=jn(xt,{key:(a&&!Ir(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function OT(t){return t.some(e=>js(e)?!(e.type===ft||e.type===xt&&!OT(e.children)):!0)?t:null}const vf=t=>t?sw(t)?yu(t):vf(t.parent):null,zo=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vf(t.parent),$root:t=>vf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ap(t),$forceUpdate:t=>t.f||(t.f=()=>{np(t.update)}),$nextTick:t=>t.n||(t.n=Xs.bind(t.proxy)),$watch:t=>IS.bind(t)}),Ch=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),sS={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ch(r,e))return o[e]=1,r[e];if(s!==Fe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];Ef&&(o[e]=0)}}const h=zo[e];let f,p;if(h)return e==="$attrs"&&Ot(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ch(s,e)?(s[e]=n,!0):r!==Fe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&Oe(t,o)||Ch(e,o)||(a=i[0])&&Oe(a,o)||Oe(r,o)||Oe(zo,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function e_(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ef=!0;function iS(t){const e=ap(t),n=t.proxy,r=t.ctx;Ef=!1,e.beforeCreate&&t_(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:E,activated:R,deactivated:S,beforeDestroy:D,beforeUnmount:O,destroyed:w,unmounted:k,render:x,renderTracked:L,renderTriggered:I,errorCaptured:y,serverPrefetch:_,expose:T,inheritAttrs:P,components:C,directives:b,filters:pe}=e;if(u&&oS(u,r,null),o)for(const ie in o){const re=o[ie];fe(re)&&(r[ie]=re.bind(n))}if(s){const ie=s.call(n,n);je(ie)&&(t.data=Xn(ie))}if(Ef=!0,i)for(const ie in i){const re=i[ie],ze=fe(re)?re.bind(n,n):fe(re.get)?re.get.bind(n,n):Wn,wn=!fe(re)&&fe(re.set)?re.set.bind(n):Wn,un=rn({get:ze,set:wn});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>un.value,set:Qe=>un.value=Qe})}if(a)for(const ie in a)DT(a[ie],r,n,ie);if(c){const ie=fe(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(re=>{xs(re,ie[re])})}h&&t_(h,t,"c");function Z(ie,re){ue(re)?re.forEach(ze=>ie(ze.bind(n))):re&&ie(re.bind(n))}if(Z(JC,f),Z(ip,p),Z(ZC,m),Z(AT,E),Z(QC,R),Z(YC,S),Z(ST,y),Z(nS,L),Z(tS,I),Z(op,O),Z(CT,k),Z(eS,_),ue(T))if(T.length){const ie=t.exposed||(t.exposed={});T.forEach(re=>{Object.defineProperty(ie,re,{get:()=>n[re],set:ze=>n[re]=ze})})}else t.exposed||(t.exposed={});x&&t.render===Wn&&(t.render=x),P!=null&&(t.inheritAttrs=P),C&&(t.components=C),b&&(t.directives=b),_&&sp(t)}function oS(t,e,n=Wn){ue(t)&&(t=Tf(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=at(s.from||r,s.default,!0):i=at(s.from||r):i=at(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function t_(t,e,n){On(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function DT(t,e,n,r){let s=r.includes(".")?GT(n,r):()=>n[r];if(Ke(t)){const i=e[t];fe(i)&&Ls(s,i)}else if(fe(t))Ls(s,t.bind(n));else if(je(t))if(ue(t))t.forEach(i=>DT(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ls(s,i,t)}}function ap(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>vl(c,u,o,!0)),vl(c,e,o)),je(e)&&i.set(e,c),c}function vl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vl(t,i,n,!0),s&&s.forEach(o=>vl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=aS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const aS={data:n_,props:r_,emits:r_,methods:Vo,computed:Vo,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Vo,directives:Vo,watch:lS,provide:n_,inject:cS};function n_(t,e){return e?t?function(){return lt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function cS(t,e){return Vo(Tf(t),Tf(e))}function Tf(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vo(t,e){return t?lt(Object.create(null),t,e):e}function r_(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:lt(Object.create(null),e_(t),e_(e??{})):e}function lS(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Wt(t[r],e[r]);return n}function xT(){return{app:null,config:{isNativeTag:KA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uS=0;function hS(t,e){return function(r,s=null){fe(r)||(r=lt({},r)),s!=null&&!je(s)&&(s=null);const i=xT(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:uS++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ow,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...f)):fe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!c){const m=u._ceVNode||Xe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,h):t(m,h,p),c=!0,u._container=h,h.__vue_app__=u,yu(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(On(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Ds;Ds=u;try{return h()}finally{Ds=f}}};return u}}let Ds=null;function xs(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function at(t,e,n=!1){const r=dt||pt;if(r||Ds){const s=Ds?Ds._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function cp(){return!!(dt||pt||Ds)}const LT={},MT=()=>Object.create(LT),VT=t=>Object.getPrototypeOf(t)===LT;function fS(t,e,n,r=!1){const s={},i=MT();t.propsDefaults=Object.create(null),FT(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lr(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dS(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ce(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(gu(t.emitsOptions,p))continue;const m=e[p];if(c)if(Oe(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const E=yn(p);s[E]=wf(c,a,E,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{FT(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=Ys(f))===f||!Oe(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=wf(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Oe(e,f))&&(delete i[f],u=!0)}u&&ar(t.attrs,"set","")}function FT(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ri(c))continue;const u=e[c];let h;s&&Oe(s,h=yn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:gu(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ce(n),u=a||Fe;for(let h=0;h<i.length;h++){const f=i[h];n[f]=wf(s,c,f,u[f],t,!Oe(u,f))}}return o}function wf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Ha(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ys(n))&&(r=!0))}return r}const pS=new WeakMap;function UT(t,e,n=!1){const r=n?pS:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!fe(t)){const h=f=>{c=!0;const[p,m]=UT(f,e,!0);lt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return je(t)&&r.set(t,Ii),Ii;if(ue(i))for(let h=0;h<i.length;h++){const f=yn(i[h]);s_(f)&&(o[f]=Fe)}else if(i)for(const h in i){const f=yn(h);if(s_(f)){const p=i[h],m=o[f]=ue(p)||fe(p)?{type:p}:lt({},p),E=m.type;let R=!1,S=!0;if(ue(E))for(let D=0;D<E.length;++D){const O=E[D],w=fe(O)&&O.name;if(w==="Boolean"){R=!0;break}else w==="String"&&(S=!1)}else R=fe(E)&&E.name==="Boolean";m[0]=R,m[1]=S,(R||Oe(m,"default"))&&a.push(f)}}const u=[o,a];return je(t)&&r.set(t,u),u}function s_(t){return t[0]!=="$"&&!Ri(t)}const BT=t=>t[0]==="_"||t==="$stable",lp=t=>ue(t)?t.map(nn):[nn(t)],gS=(t,e,n)=>{if(e._n)return e;const r=rp((...s)=>lp(e(...s)),n);return r._c=!1,r},jT=(t,e,n)=>{const r=t._ctx;for(const s in t){if(BT(s))continue;const i=t[s];if(fe(i))e[s]=gS(s,i,r);else if(i!=null){const o=lp(i);e[s]=()=>o}}},$T=(t,e)=>{const n=lp(e);t.slots.default=()=>n},HT=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},mS=(t,e,n)=>{const r=t.slots=MT();if(t.vnode.shapeFlag&32){const s=e._;s?(HT(r,e,n),n&&$E(r,"_",s,!0)):jT(e,r)}else e&&$T(t,e)},_S=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:HT(s,e,n):(i=!e.$stable,jT(e,s)),o=e}else e&&($T(t,e),o={default:1});if(i)for(const a in s)!BT(a)&&o[a]==null&&delete s[a]},ht=YT;function yS(t){return qT(t)}function vS(t){return qT(t,qC)}function qT(t,e){const n=lu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=Wn,insertStaticContent:E}=t,R=(A,N,V,H=null,U=null,q=null,Q=void 0,G=null,K=!!N.dynamicChildren)=>{if(A===N)return;A&&!Rn(A,N)&&(H=B(A),Qe(A,U,q,!0),A=null),N.patchFlag===-2&&(K=!1,N.dynamicChildren=null);const{type:W,ref:le,shapeFlag:J}=N;switch(W){case Ms:S(A,N,V,H);break;case ft:D(A,N,V,H);break;case Qo:A==null&&O(N,V,H,Q);break;case xt:C(A,N,V,H,U,q,Q,G,K);break;default:J&1?x(A,N,V,H,U,q,Q,G,K):J&6?b(A,N,V,H,U,q,Q,G,K):(J&64||J&128)&&W.process(A,N,V,H,U,q,Q,G,K,se)}le!=null&&U&&ya(le,A&&A.ref,q,N||A,!N)},S=(A,N,V,H)=>{if(A==null)r(N.el=a(N.children),V,H);else{const U=N.el=A.el;N.children!==A.children&&u(U,N.children)}},D=(A,N,V,H)=>{A==null?r(N.el=c(N.children||""),V,H):N.el=A.el},O=(A,N,V,H)=>{[A.el,A.anchor]=E(A.children,N,V,H,A.el,A.anchor)},w=({el:A,anchor:N},V,H)=>{let U;for(;A&&A!==N;)U=p(A),r(A,V,H),A=U;r(N,V,H)},k=({el:A,anchor:N})=>{let V;for(;A&&A!==N;)V=p(A),s(A),A=V;s(N)},x=(A,N,V,H,U,q,Q,G,K)=>{N.type==="svg"?Q="svg":N.type==="math"&&(Q="mathml"),A==null?L(N,V,H,U,q,Q,G,K):_(A,N,U,q,Q,G,K)},L=(A,N,V,H,U,q,Q,G)=>{let K,W;const{props:le,shapeFlag:J,transition:ae,dirs:oe}=A;if(K=A.el=o(A.type,q,le&&le.is,le),J&8?h(K,A.children):J&16&&y(A.children,K,null,H,U,Sh(A,q),Q,G),oe&&Un(A,null,H,"created"),I(K,A,A.scopeId,Q,H),le){for(const ke in le)ke!=="value"&&!Ri(ke)&&i(K,ke,null,le[ke],q,H);"value"in le&&i(K,"value",null,le.value,q),(W=le.onVnodeBeforeMount)&&Yt(W,H,A)}oe&&Un(A,null,H,"beforeMount");const he=WT(U,ae);he&&ae.beforeEnter(K),r(K,N,V),((W=le&&le.onVnodeMounted)||he||oe)&&ht(()=>{W&&Yt(W,H,A),he&&ae.enter(K),oe&&Un(A,null,H,"mounted")},U)},I=(A,N,V,H,U)=>{if(V&&m(A,V),H)for(let q=0;q<H.length;q++)m(A,H[q]);if(U){let q=U.subTree;if(N===q||Tl(q.type)&&(q.ssContent===N||q.ssFallback===N)){const Q=U.vnode;I(A,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(A,N,V,H,U,q,Q,G,K=0)=>{for(let W=K;W<A.length;W++){const le=A[W]=G?Fr(A[W]):nn(A[W]);R(null,le,N,V,H,U,q,Q,G)}},_=(A,N,V,H,U,q,Q)=>{const G=N.el=A.el;let{patchFlag:K,dynamicChildren:W,dirs:le}=N;K|=A.patchFlag&16;const J=A.props||Fe,ae=N.props||Fe;let oe;if(V&&Ts(V,!1),(oe=ae.onVnodeBeforeUpdate)&&Yt(oe,V,N,A),le&&Un(N,A,V,"beforeUpdate"),V&&Ts(V,!0),(J.innerHTML&&ae.innerHTML==null||J.textContent&&ae.textContent==null)&&h(G,""),W?T(A.dynamicChildren,W,G,V,H,Sh(N,U),q):Q||re(A,N,G,null,V,H,Sh(N,U),q,!1),K>0){if(K&16)P(G,J,ae,V,U);else if(K&2&&J.class!==ae.class&&i(G,"class",null,ae.class,U),K&4&&i(G,"style",J.style,ae.style,U),K&8){const he=N.dynamicProps;for(let ke=0;ke<he.length;ke++){const Se=he[ke],At=J[Se],mt=ae[Se];(mt!==At||Se==="value")&&i(G,Se,At,mt,U,V)}}K&1&&A.children!==N.children&&h(G,N.children)}else!Q&&W==null&&P(G,J,ae,V,U);((oe=ae.onVnodeUpdated)||le)&&ht(()=>{oe&&Yt(oe,V,N,A),le&&Un(N,A,V,"updated")},H)},T=(A,N,V,H,U,q,Q)=>{for(let G=0;G<N.length;G++){const K=A[G],W=N[G],le=K.el&&(K.type===xt||!Rn(K,W)||K.shapeFlag&70)?f(K.el):V;R(K,W,le,null,H,U,q,Q,!0)}},P=(A,N,V,H,U)=>{if(N!==V){if(N!==Fe)for(const q in N)!Ri(q)&&!(q in V)&&i(A,q,N[q],null,U,H);for(const q in V){if(Ri(q))continue;const Q=V[q],G=N[q];Q!==G&&q!=="value"&&i(A,q,G,Q,U,H)}"value"in V&&i(A,"value",N.value,V.value,U)}},C=(A,N,V,H,U,q,Q,G,K)=>{const W=N.el=A?A.el:a(""),le=N.anchor=A?A.anchor:a("");let{patchFlag:J,dynamicChildren:ae,slotScopeIds:oe}=N;oe&&(G=G?G.concat(oe):oe),A==null?(r(W,V,H),r(le,V,H),y(N.children||[],V,le,U,q,Q,G,K)):J>0&&J&64&&ae&&A.dynamicChildren?(T(A.dynamicChildren,ae,V,U,q,Q,G),(N.key!=null||U&&N===U.subTree)&&up(A,N,!0)):re(A,N,V,le,U,q,Q,G,K)},b=(A,N,V,H,U,q,Q,G,K)=>{N.slotScopeIds=G,A==null?N.shapeFlag&512?U.ctx.activate(N,V,H,Q,K):pe(N,V,H,U,q,Q,K):ye(A,N,K)},pe=(A,N,V,H,U,q,Q)=>{const G=A.component=BS(A,H,U);if($a(A)&&(G.ctx.renderer=se),jS(G,!1,Q),G.asyncDep){if(U&&U.registerDep(G,Z,Q),!A.el){const K=G.subTree=Xe(ft);D(null,K,N,V)}}else Z(G,A,N,V,U,q,Q)},ye=(A,N,V)=>{const H=N.component=A.component;if(PS(A,N,V))if(H.asyncDep&&!H.asyncResolved){ie(H,N,V);return}else H.next=N,H.update();else N.el=A.el,H.vnode=N},Z=(A,N,V,H,U,q,Q)=>{const G=()=>{if(A.isMounted){let{next:J,bu:ae,u:oe,parent:he,vnode:ke}=A;{const Ct=KT(A);if(Ct){J&&(J.el=ke.el,ie(A,J,Q)),Ct.asyncDep.then(()=>{A.isUnmounted||G()});return}}let Se=J,At;Ts(A,!1),J?(J.el=ke.el,ie(A,J,Q)):J=ke,ae&&Ai(ae),(At=J.props&&J.props.onVnodeBeforeUpdate)&&Yt(At,he,J,ke),Ts(A,!0);const mt=Ph(A),Tt=A.subTree;A.subTree=mt,R(Tt,mt,f(Tt.el),B(Tt),A,U,q),J.el=mt.el,Se===null&&mu(A,mt.el),oe&&ht(oe,U),(At=J.props&&J.props.onVnodeUpdated)&&ht(()=>Yt(At,he,J,ke),U)}else{let J;const{el:ae,props:oe}=N,{bm:he,m:ke,parent:Se,root:At,type:mt}=A,Tt=Qr(N);if(Ts(A,!1),he&&Ai(he),!Tt&&(J=oe&&oe.onVnodeBeforeMount)&&Yt(J,Se,N),Ts(A,!0),ae&&Le){const Ct=()=>{A.subTree=Ph(A),Le(ae,A.subTree,A,U,null)};Tt&&mt.__asyncHydrate?mt.__asyncHydrate(ae,A,Ct):Ct()}else{At.ce&&At.ce._injectChildStyle(mt);const Ct=A.subTree=Ph(A);R(null,Ct,V,H,A,U,q),N.el=Ct.el}if(ke&&ht(ke,U),!Tt&&(J=oe&&oe.onVnodeMounted)){const Ct=N;ht(()=>Yt(J,Se,Ct),U)}(N.shapeFlag&256||Se&&Qr(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&ht(A.a,U),A.isMounted=!0,N=V=H=null}};A.scope.on();const K=A.effect=new zE(G);A.scope.off();const W=A.update=K.run.bind(K),le=A.job=K.runIfDirty.bind(K);le.i=A,le.id=A.uid,K.scheduler=()=>np(le),Ts(A,!0),W()},ie=(A,N,V)=>{N.component=A;const H=A.vnode.props;A.vnode=N,A.next=null,dS(A,N.props,H,V),_S(A,N.children,V),us(),Km(A),hs()},re=(A,N,V,H,U,q,Q,G,K=!1)=>{const W=A&&A.children,le=A?A.shapeFlag:0,J=N.children,{patchFlag:ae,shapeFlag:oe}=N;if(ae>0){if(ae&128){wn(W,J,V,H,U,q,Q,G,K);return}else if(ae&256){ze(W,J,V,H,U,q,Q,G,K);return}}oe&8?(le&16&&Qt(W,U,q),J!==W&&h(V,J)):le&16?oe&16?wn(W,J,V,H,U,q,Q,G,K):Qt(W,U,q,!0):(le&8&&h(V,""),oe&16&&y(J,V,H,U,q,Q,G,K))},ze=(A,N,V,H,U,q,Q,G,K)=>{A=A||Ii,N=N||Ii;const W=A.length,le=N.length,J=Math.min(W,le);let ae;for(ae=0;ae<J;ae++){const oe=N[ae]=K?Fr(N[ae]):nn(N[ae]);R(A[ae],oe,V,null,U,q,Q,G,K)}W>le?Qt(A,U,q,!0,!1,J):y(N,V,H,U,q,Q,G,K,J)},wn=(A,N,V,H,U,q,Q,G,K)=>{let W=0;const le=N.length;let J=A.length-1,ae=le-1;for(;W<=J&&W<=ae;){const oe=A[W],he=N[W]=K?Fr(N[W]):nn(N[W]);if(Rn(oe,he))R(oe,he,V,null,U,q,Q,G,K);else break;W++}for(;W<=J&&W<=ae;){const oe=A[J],he=N[ae]=K?Fr(N[ae]):nn(N[ae]);if(Rn(oe,he))R(oe,he,V,null,U,q,Q,G,K);else break;J--,ae--}if(W>J){if(W<=ae){const oe=ae+1,he=oe<le?N[oe].el:H;for(;W<=ae;)R(null,N[W]=K?Fr(N[W]):nn(N[W]),V,he,U,q,Q,G,K),W++}}else if(W>ae)for(;W<=J;)Qe(A[W],U,q,!0),W++;else{const oe=W,he=W,ke=new Map;for(W=he;W<=ae;W++){const $t=N[W]=K?Fr(N[W]):nn(N[W]);$t.key!=null&&ke.set($t.key,W)}let Se,At=0;const mt=ae-he+1;let Tt=!1,Ct=0;const Pr=new Array(mt);for(W=0;W<mt;W++)Pr[W]=0;for(W=oe;W<=J;W++){const $t=A[W];if(At>=mt){Qe($t,U,q,!0);continue}let hn;if($t.key!=null)hn=ke.get($t.key);else for(Se=he;Se<=ae;Se++)if(Pr[Se-he]===0&&Rn($t,N[Se])){hn=Se;break}hn===void 0?Qe($t,U,q,!0):(Pr[hn-he]=W+1,hn>=Ct?Ct=hn:Tt=!0,R($t,N[hn],V,null,U,q,Q,G,K),At++)}const ri=Tt?ES(Pr):Ii;for(Se=ri.length-1,W=mt-1;W>=0;W--){const $t=he+W,hn=N[$t],si=$t+1<le?N[$t+1].el:H;Pr[W]===0?R(null,hn,V,si,U,q,Q,G,K):Tt&&(Se<0||W!==ri[Se]?un(hn,V,si,2):Se--)}}},un=(A,N,V,H,U=null)=>{const{el:q,type:Q,transition:G,children:K,shapeFlag:W}=A;if(W&6){un(A.component.subTree,N,V,H);return}if(W&128){A.suspense.move(N,V,H);return}if(W&64){Q.move(A,N,V,se);return}if(Q===xt){r(q,N,V);for(let J=0;J<K.length;J++)un(K[J],N,V,H);r(A.anchor,N,V);return}if(Q===Qo){w(A,N,V);return}if(H!==2&&W&1&&G)if(H===0)G.beforeEnter(q),r(q,N,V),ht(()=>G.enter(q),U);else{const{leave:J,delayLeave:ae,afterLeave:oe}=G,he=()=>r(q,N,V),ke=()=>{J(q,()=>{he(),oe&&oe()})};ae?ae(q,he,ke):ke()}else r(q,N,V)},Qe=(A,N,V,H=!1,U=!1)=>{const{type:q,props:Q,ref:G,children:K,dynamicChildren:W,shapeFlag:le,patchFlag:J,dirs:ae,cacheIndex:oe}=A;if(J===-2&&(U=!1),G!=null&&ya(G,null,V,A,!0),oe!=null&&(N.renderCache[oe]=void 0),le&256){N.ctx.deactivate(A);return}const he=le&1&&ae,ke=!Qr(A);let Se;if(ke&&(Se=Q&&Q.onVnodeBeforeUnmount)&&Yt(Se,N,A),le&6)Vn(A.component,V,H);else{if(le&128){A.suspense.unmount(V,H);return}he&&Un(A,null,N,"beforeUnmount"),le&64?A.type.remove(A,N,V,se,H):W&&!W.hasOnce&&(q!==xt||J>0&&J&64)?Qt(W,N,V,!1,!0):(q===xt&&J&384||!U&&le&16)&&Qt(K,N,V),H&&Ye(A)}(ke&&(Se=Q&&Q.onVnodeUnmounted)||he)&&ht(()=>{Se&&Yt(Se,N,A),he&&Un(A,null,N,"unmounted")},V)},Ye=A=>{const{type:N,el:V,anchor:H,transition:U}=A;if(N===xt){Sr(V,H);return}if(N===Qo){k(A);return}const q=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:G}=U,K=()=>Q(V,q);G?G(A.el,q,K):K()}else q()},Sr=(A,N)=>{let V;for(;A!==N;)V=p(A),s(A),A=V;s(N)},Vn=(A,N,V)=>{const{bum:H,scope:U,job:q,subTree:Q,um:G,m:K,a:W}=A;El(K),El(W),H&&Ai(H),U.stop(),q&&(q.flags|=8,Qe(Q,A,N,V)),G&&ht(G,N),ht(()=>{A.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},Qt=(A,N,V,H=!1,U=!1,q=0)=>{for(let Q=q;Q<A.length;Q++)Qe(A[Q],N,V,H,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const N=p(A.anchor||A.el),V=N&&N[mT];return V?p(V):N};let ee=!1;const X=(A,N,V)=>{A==null?N._vnode&&Qe(N._vnode,null,null,!0):R(N._vnode||null,A,N,null,null,null,V),N._vnode=A,ee||(ee=!0,Km(),ml(),ee=!1)},se={p:R,um:Qe,m:un,r:Ye,mt:pe,mc:y,pc:re,pbc:T,n:B,o:t};let Te,Le;return e&&([Te,Le]=e(se)),{render:X,hydrate:Te,createApp:hS(X,Te)}}function Sh({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ts({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function WT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function up(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Fr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&up(o,a)),a.type===Ms&&(a.el=o.el)}}function ES(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function KT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:KT(e)}function El(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const TS=Symbol.for("v-scx"),wS=()=>at(TS);function WH(t,e){return hp(t,null,e)}function Ls(t,e,n){return hp(t,e,n)}function hp(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=lt({},n),c=e&&r||!e&&i!=="post";let u;if(Vi){if(i==="sync"){const m=wS();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Wn,m.resume=Wn,m.pause=Wn,m}}const h=dt;a.call=(m,E,R)=>On(m,h,E,R);let f=!1;i==="post"?a.scheduler=m=>{ht(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,E)=>{E?m():np(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=LC(t,e,a);return Vi&&(u?u.push(p):c&&p()),p}function IS(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?GT(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ha(this),a=hp(s,i.bind(r),n);return o(),a}function GT(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const bS=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${Ys(e)}Modifiers`];function RS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&bS(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Ke(h)?h.trim():h)),o.number&&(s=n.map(hf)));let a,c=r[a=vh(e)]||r[a=vh(yn(e))];!c&&i&&(c=r[a=vh(Ys(e))]),c&&On(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,On(u,t,6,s)}}function zT(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!fe(t)){const c=u=>{const h=zT(u,e,!0);h&&(a=!0,lt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(je(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):lt(o,i),je(t)&&r.set(t,o),o)}function gu(t,e){return!t||!Ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Ys(e))||Oe(t,e))}function Ph(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:p,setupState:m,ctx:E,inheritAttrs:R}=t,S=_l(t);let D,O;try{if(n.shapeFlag&4){const k=s||r,x=k;D=nn(u.call(x,k,h,f,m,p,E)),O=a}else{const k=e;D=nn(k.length>1?k(f,{attrs:a,slots:o,emit:c}):k(f,null)),O=e.props?a:CS(a)}}catch(k){Yo.length=0,Xi(k,t,1),D=Xe(ft)}let w=D;if(O&&R!==!1){const k=Object.keys(O),{shapeFlag:x}=w;k.length&&x&7&&(i&&k.some(Wd)&&(O=SS(O,i)),w=yr(w,O,!1,!0))}return n.dirs&&(w=yr(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Li(w,n.transition),D=w,_l(S),D}function AS(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(js(s)){if(s.type!==ft||s.children==="v-if"){if(n)return;n=s}}else return}return n}const CS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ua(n))&&((e||(e={}))[n]=t[n]);return e},SS=(t,e)=>{const n={};for(const r in t)(!Wd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function PS(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?i_(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!gu(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?i_(r,o,u):!0:!!o;return!1}function i_(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!gu(n,i))return!0}return!1}function mu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tl=t=>t.__isSuspense;let If=0;const kS={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)NS(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}OS(t,e,n,r,s,o,a,c,u)}},hydrate:DS,normalize:xS},fp=kS;function va(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function NS(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:h}}=c,f=h("div"),p=t.suspense=QT(t,s,r,e,f,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(va(t,"onPending"),va(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Si(p,t.ssFallback)):p.resolve(!1,!0)}function OS(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:E,pendingBranch:R,isInFallback:S,isHydrating:D}=f;if(R)f.pendingBranch=p,Rn(p,R)?(c(R,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():S&&(D||(c(E,m,n,r,s,null,i,o,a),Si(f,m)))):(f.pendingId=If++,D?(f.isHydrating=!1,f.activeBranch=R):u(R,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),S?(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(E,m,n,r,s,null,i,o,a),Si(f,m))):E&&Rn(p,E)?(c(E,p,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(E&&Rn(p,E))c(E,p,n,r,s,f,i,o,a),Si(f,p);else if(va(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=If++,c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:O,pendingId:w}=f;O>0?setTimeout(()=>{f.pendingId===w&&f.fallback(m)},O):O===0&&f.fallback(m)}}function QT(t,e,n,r,s,i,o,a,c,u,h=!1){const{p:f,m:p,um:m,n:E,o:{parentNode:R,remove:S}}=u;let D;const O=LS(t);O&&e&&e.pendingBranch&&(D=e.pendingId,e.deps++);const w=t.props?HE(t.props.timeout):void 0,k=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:If++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(L=!1,I=!1){const{vnode:y,activeBranch:_,pendingBranch:T,pendingId:P,effects:C,parentComponent:b,container:pe}=x;let ye=!1;x.isHydrating?x.isHydrating=!1:L||(ye=_&&T.transition&&T.transition.mode==="out-in",ye&&(_.transition.afterLeave=()=>{P===x.pendingId&&(p(T,pe,i===k?E(_):i,0),mf(C))}),_&&(R(_.el)===pe&&(i=E(_)),m(_,b,x,!0)),ye||p(T,pe,i,0)),Si(x,T),x.pendingBranch=null,x.isInFallback=!1;let Z=x.parent,ie=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...C),ie=!0;break}Z=Z.parent}!ie&&!ye&&mf(C),x.effects=[],O&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!I&&e.resolve()),va(y,"onResolve")},fallback(L){if(!x.pendingBranch)return;const{vnode:I,activeBranch:y,parentComponent:_,container:T,namespace:P}=x;va(I,"onFallback");const C=E(y),b=()=>{x.isInFallback&&(f(null,L,T,C,_,null,P,a,c),Si(x,L))},pe=L.transition&&L.transition.mode==="out-in";pe&&(y.transition.afterLeave=b),x.isInFallback=!0,m(y,_,null,!0),pe||b()},move(L,I,y){x.activeBranch&&p(x.activeBranch,L,I,y),x.container=L},next(){return x.activeBranch&&E(x.activeBranch)},registerDep(L,I,y){const _=!!x.pendingBranch;_&&x.deps++;const T=L.vnode.el;L.asyncDep.catch(P=>{Xi(P,L,0)}).then(P=>{if(L.isUnmounted||x.isUnmounted||x.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:C}=L;Rf(L,P,!1),T&&(C.el=T);const b=!T&&L.subTree.el;I(L,C,R(T||L.subTree.el),T?null:E(L.subTree),x,o,y),b&&S(b),mu(L,C.el),_&&--x.deps===0&&x.resolve()})},unmount(L,I){x.isUnmounted=!0,x.activeBranch&&m(x.activeBranch,n,L,I),x.pendingBranch&&m(x.pendingBranch,n,L,I)}};return x}function DS(t,e,n,r,s,i,o,a,c){const u=e.suspense=QT(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function xS(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=o_(r?n.default:n),t.ssFallback=r?o_(n.fallback):Xe(ft)}function o_(t){let e;if(fe(t)){const n=Mi&&t._c;n&&(t._d=!1,pn()),t=t(),n&&(t._d=!0,e=Zt,XT())}return ue(t)&&(t=AS(t)),t=nn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function YT(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):mf(t)}function Si(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,mu(r,s))}function LS(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const xt=Symbol.for("v-fgt"),Ms=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),Yo=[];let Zt=null;function pn(t=!1){Yo.push(Zt=t?null:[])}function XT(){Yo.pop(),Zt=Yo[Yo.length-1]||null}let Mi=1;function a_(t,e=!1){Mi+=t,t<0&&Zt&&e&&(Zt.hasOnce=!0)}function JT(t){return t.dynamicChildren=Mi>0?Zt||Ii:null,XT(),Mi>0&&Zt&&Zt.push(t),t}function MS(t,e,n,r,s,i){return JT(ew(t,e,n,r,s,i,!0))}function jn(t,e,n,r,s){return JT(Xe(t,e,n,r,s,!0))}function js(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const ZT=({key:t})=>t??null,Qc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||et(t)||fe(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function ew(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ZT(e),ref:e&&Qc(e),scopeId:gT,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return a?(dp(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Mi>0&&!o&&Zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Zt.push(c),c}const Xe=VS;function VS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===kT)&&(t=ft),js(t)){const a=yr(t,e,!0);return n&&dp(a,n),Mi>0&&!i&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(t)]=a:Zt.push(a)),a.patchFlag=-2,a}if(WS(t)&&(t=t.__vccOpts),e){e=tw(e);let{class:a,style:c}=e;a&&!Ke(a)&&(e.class=hu(a)),je(c)&&(tp(c)&&!ue(c)&&(c=lt({},c)),e.style=uu(c))}const o=Ke(t)?1:Tl(t)?128:_T(t)?64:je(t)?4:fe(t)?2:0;return ew(t,e,n,r,s,o,i,!0)}function tw(t){return t?tp(t)||VT(t)?lt({},t):t:null}function yr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?rw(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ZT(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Qc(e)):[i,Qc(e)]:Qc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Li(h,c.clone(h)),h}function nw(t=" ",e=0){return Xe(Ms,null,t,e)}function KH(t,e){const n=Xe(Qo,null,t);return n.staticCount=e,n}function GH(t="",e=!1){return e?(pn(),jn(ft,null,t)):Xe(ft,null,t)}function nn(t){return t==null||typeof t=="boolean"?Xe(ft):ue(t)?Xe(xt,null,t.slice()):js(t)?Fr(t):Xe(Ms,null,String(t))}function Fr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yr(t)}function dp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),dp(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!VT(e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[nw(e)]):n=8);t.children=e,t.shapeFlag|=n}function rw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=hu([e.class,r.class]));else if(s==="style")e.style=uu([e.style,r.style]);else if(Ua(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){On(t,e,7,[n,r])}const FS=xT();let US=0;function BS(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||FS,i={uid:US++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new GE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:UT(r,s),emitsOptions:zT(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=RS.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const _u=()=>dt||pt;let wl,bf;{const t=lu(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};wl=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),bf=e("__VUE_SSR_SETTERS__",n=>Vi=n)}const Ha=t=>{const e=dt;return wl(t),t.scope.on(),()=>{t.scope.off(),wl(e)}},c_=()=>{dt&&dt.scope.off(),wl(null)};function sw(t){return t.vnode.shapeFlag&4}let Vi=!1;function jS(t,e=!1,n=!1){e&&bf(e);const{props:r,children:s}=t.vnode,i=sw(t);fS(t,r,i,e),mS(t,s,n);const o=i?$S(t,e):void 0;return e&&bf(!1),o}function $S(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sS);const{setup:r}=n;if(r){us();const s=t.setupContext=r.length>1?qS(t):null,i=Ha(t),o=ja(r,t,0,[t.props,s]),a=UE(o);if(hs(),i(),(a||t.sp)&&!Qr(t)&&sp(t),a){if(o.then(c_,c_),e)return o.then(c=>{Rf(t,c,e)}).catch(c=>{Xi(c,t,0)});t.asyncDep=o}else Rf(t,o,e)}else iw(t,e)}function Rf(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=uT(e)),iw(t,n)}let l_;function iw(t,e,n){const r=t.type;if(!t.render){if(!e&&l_&&!r.render){const s=r.template||ap(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=lt(lt({isCustomElement:i,delimiters:a},o),c);r.render=l_(s,u)}}t.render=r.render||Wn}{const s=Ha(t);us();try{iS(t)}finally{hs(),s()}}}const HS={get(t,e){return Ot(t,"get",""),t[e]}};function qS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,HS),slots:t.slots,emit:t.emit,expose:e}}function yu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uT(ga(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zo)return zo[n](t)},has(e,n){return n in e||n in zo}})):t.proxy}function Af(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function WS(t){return fe(t)&&"__vccOpts"in t}const rn=(t,e)=>DC(t,e,Vi);function Ft(t,e,n){const r=arguments.length;return r===2?je(e)&&!ue(e)?js(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&js(n)&&(n=[n]),Xe(t,e,n))}const ow="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cf;const u_=typeof window<"u"&&window.trustedTypes;if(u_)try{Cf=u_.createPolicy("vue",{createHTML:t=>t})}catch{}const aw=Cf?t=>Cf.createHTML(t):t=>t,KS="http://www.w3.org/2000/svg",GS="http://www.w3.org/1998/Math/MathML",or=typeof document<"u"?document:null,h_=or&&or.createElement("template"),zS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?or.createElementNS(KS,t):e==="mathml"?or.createElementNS(GS,t):n?or.createElement(t,{is:n}):or.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{h_.innerHTML=aw(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=h_.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dr="transition",Ao="animation",Ea=Symbol("_vtc"),cw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},QS=lt({},ET,cw),YS=t=>(t.displayName="Transition",t.props=QS,t),lw=YS((t,{slots:e})=>Ft(jC,XS(t),e)),ws=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},f_=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function XS(t){const e={};for(const C in t)C in cw||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,E=JS(s),R=E&&E[0],S=E&&E[1],{onBeforeEnter:D,onEnter:O,onEnterCancelled:w,onLeave:k,onLeaveCancelled:x,onBeforeAppear:L=D,onAppear:I=O,onAppearCancelled:y=w}=e,_=(C,b,pe,ye)=>{C._enterCancelled=ye,Is(C,b?h:a),Is(C,b?u:o),pe&&pe()},T=(C,b)=>{C._isLeaving=!1,Is(C,f),Is(C,m),Is(C,p),b&&b()},P=C=>(b,pe)=>{const ye=C?I:O,Z=()=>_(b,C,pe);ws(ye,[b,Z]),d_(()=>{Is(b,C?c:i),rr(b,C?h:a),f_(ye)||p_(b,r,R,Z)})};return lt(e,{onBeforeEnter(C){ws(D,[C]),rr(C,i),rr(C,o)},onBeforeAppear(C){ws(L,[C]),rr(C,c),rr(C,u)},onEnter:P(!1),onAppear:P(!0),onLeave(C,b){C._isLeaving=!0;const pe=()=>T(C,b);rr(C,f),C._enterCancelled?(rr(C,p),__()):(__(),rr(C,p)),d_(()=>{C._isLeaving&&(Is(C,f),rr(C,m),f_(k)||p_(C,r,S,pe))}),ws(k,[C,pe])},onEnterCancelled(C){_(C,!1,void 0,!0),ws(w,[C])},onAppearCancelled(C){_(C,!0,void 0,!0),ws(y,[C])},onLeaveCancelled(C){T(C),ws(x,[C])}})}function JS(t){if(t==null)return null;if(je(t))return[kh(t.enter),kh(t.leave)];{const e=kh(t);return[e,e]}}function kh(t){return HE(t)}function rr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ea]||(t[Ea]=new Set)).add(e)}function Is(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ea];n&&(n.delete(e),n.size||(t[Ea]=void 0))}function d_(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ZS=0;function p_(t,e,n,r){const s=t._endId=++ZS,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=eP(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,p)}function eP(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${Dr}Delay`),i=r(`${Dr}Duration`),o=g_(s,i),a=r(`${Ao}Delay`),c=r(`${Ao}Duration`),u=g_(a,c);let h=null,f=0,p=0;e===Dr?o>0&&(h=Dr,f=o,p=i.length):e===Ao?u>0&&(h=Ao,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?Dr:Ao:null,p=h?h===Dr?i.length:c.length:0);const m=h===Dr&&/\b(transform|all)(,|$)/.test(r(`${Dr}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:m}}function g_(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>m_(n)+m_(t[r])))}function m_(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function __(){return document.body.offsetHeight}function tP(t,e,n){const r=t[Ea];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const y_=Symbol("_vod"),nP=Symbol("_vsh"),rP=Symbol(""),sP=/(^|;)\s*display\s*:/;function iP(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Yc(r,a,"")}else for(const o in e)n[o]==null&&Yc(r,o,"");for(const o in n)o==="display"&&(i=!0),Yc(r,o,n[o])}else if(s){if(e!==n){const o=r[rP];o&&(n+=";"+o),r.cssText=n,i=sP.test(n)}}else e&&t.removeAttribute("style");y_ in t&&(t[y_]=i?r.display:"",t[nP]&&(r.display="none"))}const v_=/\s*!important$/;function Yc(t,e,n){if(ue(n))n.forEach(r=>Yc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=oP(t,e);v_.test(n)?t.setProperty(Ys(r),n.replace(v_,""),"important"):t[r]=n}}const E_=["Webkit","Moz","ms"],Nh={};function oP(t,e){const n=Nh[e];if(n)return n;let r=yn(e);if(r!=="filter"&&r in t)return Nh[e]=r;r=cu(r);for(let s=0;s<E_.length;s++){const i=E_[s]+r;if(i in t)return Nh[e]=i}return e}const T_="http://www.w3.org/1999/xlink";function w_(t,e,n,r,s,i=sC(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(T_,e.slice(6,e.length)):t.setAttributeNS(T_,e,n):n==null||i&&!qE(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ir(n)?String(n):n)}function I_(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?aw(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=qE(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function di(t,e,n,r){t.addEventListener(e,n,r)}function aP(t,e,n,r){t.removeEventListener(e,n,r)}const b_=Symbol("_vei");function cP(t,e,n,r,s=null){const i=t[b_]||(t[b_]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=lP(e);if(r){const u=i[e]=fP(r,s);di(t,a,u,c)}else o&&(aP(t,a,o,c),i[e]=void 0)}}const R_=/(?:Once|Passive|Capture)$/;function lP(t){let e;if(R_.test(t)){e={};let r;for(;r=t.match(R_);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ys(t.slice(2)),e]}let Oh=0;const uP=Promise.resolve(),hP=()=>Oh||(uP.then(()=>Oh=0),Oh=Date.now());function fP(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;On(dP(r,n.value),e,5,[r])};return n.value=t,n.attached=hP(),n}function dP(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const A_=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pP=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?tP(t,r,o):e==="style"?iP(t,n,r):Ua(e)?Wd(e)||cP(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gP(t,e,r,o))?(I_(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&w_(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?I_(t,yn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),w_(t,e,r,o))};function gP(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&A_(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return A_(e)&&Ke(n)?!1:e in t}const C_=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Ai(e,n):e};function mP(t){t.target.composing=!0}function S_(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dh=Symbol("_assign"),zH={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Dh]=C_(s);const i=r||s.props&&s.props.type==="number";di(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hf(a)),t[Dh](a)}),n&&di(t,"change",()=>{t.value=t.value.trim()}),e||(di(t,"compositionstart",mP),di(t,"compositionend",S_),di(t,"change",S_))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Dh]=C_(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?hf(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},_P=["ctrl","shift","alt","meta"],yP={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_P.some(n=>t[`${n}Key`]&&!e.includes(n))},QH=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=yP[e[o]];if(a&&a(s,e))return}return t(s,...i)})},uw=lt({patchProp:pP},zS);let Xo,P_=!1;function vP(){return Xo||(Xo=yS(uw))}function EP(){return Xo=P_?Xo:vS(uw),P_=!0,Xo}const TP=(...t)=>{const e=vP().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=fw(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,hw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},wP=(...t)=>{const e=EP().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=fw(r);if(s)return n(s,!0,hw(s))},e};function hw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fw(t){return Ke(t)?document.querySelector(t):t}const IP=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,bP=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,RP=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function AP(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){CP(t);return}return e}function CP(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Il(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!RP.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(IP.test(t)||bP.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,AP)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const SP=/#/g,PP=/&/g,kP=/\//g,NP=/=/g,pp=/\+/g,OP=/%5e/gi,DP=/%60/gi,xP=/%7c/gi,LP=/%20/gi;function MP(t){return encodeURI(""+t).replace(xP,"|")}function Sf(t){return MP(typeof t=="string"?t:JSON.stringify(t)).replace(pp,"%2B").replace(LP,"+").replace(SP,"%23").replace(PP,"%26").replace(DP,"`").replace(OP,"^").replace(kP,"%2F")}function xh(t){return Sf(t).replace(NP,"%3D")}function bl(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function VP(t){return bl(t.replace(pp," "))}function FP(t){return bl(t.replace(pp," "))}function UP(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=VP(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=FP(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function BP(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${xh(t)}=${Sf(n)}`).join("&"):`${xh(t)}=${Sf(e)}`:xh(t)}function jP(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>BP(e,t[e])).filter(Boolean).join("&")}const $P=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,HP=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,qP=/^([/\\]\s*){2,}[^/\\]/,WP=/^[\s\0]*(blob|data|javascript|vbscript):$/i,KP=/\/$|\/\?|\/#/,GP=/^\.?\//;function Js(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?$P.test(t):HP.test(t)||(e.acceptRelative?qP.test(t):!1)}function zP(t){return!!t&&WP.test(t)}function Pf(t="",e){return e?KP.test(t):t.endsWith("/")}function gp(t="",e){if(!e)return(Pf(t)?t.slice(0,-1):t)||"/";if(!Pf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function kf(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Pf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function QP(t=""){return t.startsWith("/")}function k_(t=""){return QP(t)?t:"/"+t}function YP(t,e){if(pw(e)||Js(t))return t;const n=gp(e);return t.startsWith(n)?t:mp(n,t)}function N_(t,e){if(pw(e))return t;const n=gp(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function dw(t,e){const n=ZP(t),r={...UP(n.search),...e};return n.search=jP(r),ek(n)}function pw(t){return!t||t==="/"}function XP(t){return t&&t!=="/"}function mp(t,...e){let n=t||"";for(const r of e.filter(s=>XP(s)))if(n){const s=r.replace(GP,"");n=kf(n)+s}else n=r;return n}function gw(...t){var o,a,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[f,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&Js(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function JP(t,e,n={}){return n.trailingSlash||(t=kf(t),e=kf(e)),n.leadingSlash||(t=k_(t),e=k_(e)),n.encoding||(t=bl(t),e=bl(e)),t===e}const mw=Symbol.for("ufo:protocolRelative");function ZP(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!Js(t,{acceptRelative:!0}))return O_(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:h}=O_(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:h,[mw]:!r}}function O_(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function ek(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[mw]?(t.protocol||"")+"//":"")+s+i+e+n+r}class tk extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function nk(t){var c,u,h,f,p;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((f=t.options)==null?void 0:f.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new tk(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return t[m]}});for(const[m,E]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return t.response&&t.response[E]}});return a}const rk=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function D_(t="GET"){return rk.has(t.toUpperCase())}function sk(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const ik=new Set(["image/svg","application/xml","application/xhtml","application/html"]),ok=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function ak(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return ok.test(e)?"json":ik.has(e)||e.startsWith("text/")?"text":"blob"}function ck(t,e,n,r){const s=lk((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function lk(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Nc(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const uk=new Set([408,409,425,429,500,502,503,504]),hk=new Set([101,204,205,304]);function _w(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let h;typeof a.options.retry=="number"?h=a.options.retry:h=D_(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):uk.has(f))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=nk(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const h={request:c,options:ck(c,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Nc(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=YP(h.request,h.options.baseURL)),h.options.query&&(h.request=dw(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&D_(h.options.method)&&(sk(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const m=new r;f=setTimeout(()=>{const E=new Error("[TimeoutError]: The operation was aborted due to timeout");E.name="TimeoutError",E.code=23,m.abort(E)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await Nc(h,h.options.onRequestError),await s(h)}finally{f&&clearTimeout(f)}if((h.response.body||h.response._bodyInit)&&!hk.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||ak(h.response.headers.get("content-type")||"");switch(m){case"json":{const E=await h.response.text(),R=h.options.parseResponse||Il;h.response._data=R(E);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await Nc(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Nc(h,h.options.onResponseError),await s(h)):h.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>_w({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const Rl=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),fk=Rl.fetch?(...t)=>Rl.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),dk=Rl.Headers,pk=Rl.AbortController,gk=_w({fetch:fk,Headers:dk,AbortController:pk}),mk=gk,_k=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Al=_k().app,yk=()=>Al.baseURL,vk=()=>Al.buildAssetsDir,_p=(...t)=>gw(yw(),vk(),...t),yw=(...t)=>{const e=Al.cdnURL||Al.baseURL;return t.length?gw(e,...t):e};globalThis.__buildAssetsURL=_p,globalThis.__publicAssetsURL=yw;globalThis.$fetch||(globalThis.$fetch=mk.create({baseURL:yk()}));function Nf(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Nf(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const Ek={run:t=>t()},Tk=()=>Ek,vw=typeof console.createTask<"u"?console.createTask:Tk;function wk(t,e){const n=e.shift(),r=vw(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function Ik(t,e){const n=e.shift(),r=vw(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Lh(t,e){for(const n of[...t])n(e)}class bk{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Nf(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Nf(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(wk,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Ik,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Lh(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Lh(this._after,s)}):(this._after&&s&&Lh(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Ew(){return new bk}function Rk(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;Of.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Of.delete(u)}}}}function Ak(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=Rk({...t,...r})),e[n]}}}const Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},x_="__unctx__",Ck=Cl[x_]||(Cl[x_]=Ak()),Sk=(t,e={})=>Ck.get(t,e),L_="__unctx_async_handlers__",Of=Cl[L_]||(Cl[L_]=new Set);function Vs(t){const e=[];for(const s of Of){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Pk=!1,Df=!1,kk=!1,YH={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},Nk=null,Ok="#__nuxt",Tw="nuxt-app",M_=36e5,Dk="vite:preloadError";function ww(t=Tw){return Sk(t,{asyncContext:!1})}const xk="__nuxt_plugin";function Lk(t){var s;let e=0;const n={_id:t.id||Tw||"nuxt-app",_scope:fu(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return n.vueApp.version}},payload:lr({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:lr({}),state:Xn({}),once:new Set,_errors:lr({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!zd()?n._scope.run(()=>V_(n,i)):V_(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:lr({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=Ew(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Oc(n,a,o),Oc(n.vueApp.config.globalProperties,a,o)},Oc(n.vueApp,"$nuxt",n),Oc(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(Dk,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Je;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function Mk(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function Vk(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function Fk(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(c){var h;const u=((h=c.dependsOn)==null?void 0:h.filter(f=>e.some(p=>p._name===f)&&!n.includes(f)))??[];if(u.length>0)r.push([new Set(u),c]);else{const f=Vk(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(r.map(async([p,m])=>{p.has(c._name)&&(p.delete(c._name),p.size===0&&(o++,await a(m)))})))});c.parallel?s.push(f.catch(p=>i.push(p))):await f}}for(const c of e)Mk(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function zt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[xk]:!0,_name:e})}const Iw=zt;function V_(t,e,n){const r=()=>e();return ww(t._id).set(t),t.vueApp.runWithContext(r)}function Uk(t){var n;let e;return cp()&&(e=(n=_u())==null?void 0:n.appContext.app.$nuxt),e=e||ww(t).tryUse(),e||null}function Je(t){const e=Uk(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ji(t){return Je().$config}function Oc(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function Bk(t,e){return{ctx:{table:t},matchAll:n=>Rw(n,t)}}function bw(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,bw(s)])):new Map(Object.entries(t[n]));return e}function jk(t){return Bk(bw(t))}function Rw(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of F_(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of F_(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Rw(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function F_(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Mh(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function xf(t,e,n=".",r){if(!Mh(e))return xf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Mh(o)&&Mh(s[i])?s[i]=xf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Aw(t){return(...e)=>e.reduce((n,r)=>xf(n,r,"",t),{})}const Cw=Aw(),$k=Aw((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function Hk(t,e){try{return e in t}catch{return!1}}var qk=Object.defineProperty,Wk=(t,e,n)=>e in t?qk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,As=(t,e,n)=>(Wk(t,typeof e!="symbol"?e+"":e,n),n);class Lf extends Error{constructor(e,n={}){super(e,n),As(this,"statusCode",500),As(this,"fatal",!1),As(this,"unhandled",!1),As(this,"statusMessage"),As(this,"data"),As(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Vf(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Sw(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}As(Lf,"__h3_error__",!0);function Mf(t){if(typeof t=="string")return new Lf(t);if(Kk(t))return t;const e=new Lf(t.message??t.statusMessage??"",{cause:t.cause||t});if(Hk(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Vf(t.statusCode,e.statusCode):t.status&&(e.statusCode=Vf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Sw(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Kk(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Gk=/[^\u0009\u0020-\u007E]/g;function Sw(t=""){return t.replace(Gk,"")}function Vf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Pw=Symbol("layout-meta"),qa=Symbol("route"),vn=()=>{var t;return(t=Je())==null?void 0:t.$router},yp=()=>cp()?at(qa,Je()._route):Je()._route;const zk=()=>{try{if(Je()._processingMiddleware)return!0}catch{return!1}return!1},Qk=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Yk(t):vn().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([f,p])=>p!==void 0).map(([f,p])=>`${f.toLowerCase()}=${p}`).join(", ");return open(n,c,h),Promise.resolve()}const r=Js(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&zP(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=zk();if(!s&&i)return t;const o=vn(),a=Je();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Yk(t){return dw(t.path||"",t.query||{})+(t.hash||"")}const kw="__nuxt_error",vu=()=>NC(Je().payload,"error"),Ei=t=>{const e=Eu(t);try{const n=Je(),r=vu();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},Xk=async(t={})=>{const e=Je(),n=vu();e.callHook("app:error:cleared",t),t.redirect&&await vn().replace(t.redirect),n.value=Nk},Jk=t=>!!t&&typeof t=="object"&&kw in t,Eu=t=>{const e=Mf(t);return Object.defineProperty(e,kw,{value:!0,configurable:!1,writable:!1}),e},Zk=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Nw;const Wa=t=>Nw=t,Ow=Symbol();function Ff(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Jo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Jo||(Jo={}));function eN(){const t=fu(!0),e=t.run(()=>_n({}));let n=[],r=[];const s=ga({install(i){Wa(s),s._a=i,i.provide(Ow,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Zk?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Dw=()=>{};function U_(t,e,n,r=Dw){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&zd()&&oC(s),s}function hi(t,...e){t.slice().forEach(n=>{n(...e)})}const tN=t=>t(),B_=Symbol(),Vh=Symbol();function Uf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ff(s)&&Ff(r)&&t.hasOwnProperty(n)&&!et(r)&&!pr(r)?t[n]=Uf(s,r):t[n]=r}return t}const nN=Symbol();function rN(t){return!Ff(t)||!t.hasOwnProperty(nN)}const{assign:Lr}=Object;function sN(t){return!!(et(t)&&t.effect)}function iN(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const h=SC(n.state.value[t]);return Lr(h,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=ga(rn(()=>{Wa(n);const m=n._s.get(t);return o[p].call(m,m)})),f),{}))}return c=xw(t,u,e,n,r,!0),c}function xw(t,e,n={},r,s,i){let o;const a=Lr({actions:{}},n),c={deep:!0};let u,h,f=[],p=[],m;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),_n({});let R;function S(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Jo.patchFunction,storeId:t,events:m}):(Uf(r.state.value[t],y),_={type:Jo.patchObject,payload:y,storeId:t,events:m});const T=R=Symbol();Xs().then(()=>{R===T&&(u=!0)}),h=!0,hi(f,_,r.state.value[t])}const D=i?function(){const{state:_}=n,T=_?_():{};this.$patch(P=>{Lr(P,T)})}:Dw;function O(){o.stop(),f=[],p=[],r._s.delete(t)}const w=(y,_="")=>{if(B_ in y)return y[Vh]=_,y;const T=function(){Wa(r);const P=Array.from(arguments),C=[],b=[];function pe(ie){C.push(ie)}function ye(ie){b.push(ie)}hi(p,{args:P,name:T[Vh],store:x,after:pe,onError:ye});let Z;try{Z=y.apply(this&&this.$id===t?this:x,P)}catch(ie){throw hi(b,ie),ie}return Z instanceof Promise?Z.then(ie=>(hi(C,ie),ie)).catch(ie=>(hi(b,ie),Promise.reject(ie))):(hi(C,Z),Z)};return T[B_]=!0,T[Vh]=_,T},k={_p:r,$id:t,$onAction:U_.bind(null,p),$patch:S,$reset:D,$subscribe(y,_={}){const T=U_(f,y,_.detached,()=>P()),P=o.run(()=>Ls(()=>r.state.value[t],C=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:Jo.direct,events:m},C)},Lr({},c,_)));return T},$dispose:O},x=Xn(k);r._s.set(t,x);const I=(r._a&&r._a.runWithContext||tN)(()=>r._e.run(()=>(o=fu()).run(()=>e({action:w}))));for(const y in I){const _=I[y];if(et(_)&&!sN(_)||pr(_))i||(E&&rN(_)&&(et(_)?_.value=E[y]:Uf(_,E[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const T=w(_,y);I[y]=T,a.actions[y]=_}}return Lr(x,I),Lr(Ce(x),I),Object.defineProperty(x,"$state",{get:()=>r.state.value[t],set:y=>{S(_=>{Lr(_,y)})}}),r._p.forEach(y=>{Lr(x,o.run(()=>y({store:x,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(x.$state,E),u=!0,h=!0,x}/*! #__NO_SIDE_EFFECTS__ */function XH(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const u=cp();return a=a||(u?at(Ow,null):null),a&&Wa(a),a=Nw,a._s.has(r)||(i?xw(r,e,s,a):iN(r,s,a)),a._s.get(r)}return o.$id=r,o}function j_(t){const e=aN(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const oN="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function aN(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=oN.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const cN=-1,lN=-2,uN=-3,hN=-4,fN=-5,dN=-6;function pN(t,e){return gN(JSON.parse(t),e)}function gN(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===cN)return;if(i===uN)return NaN;if(i===hN)return 1/0;if(i===fN)return-1/0;if(i===dN)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e==null?void 0:e[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let m=1;m<a.length;m+=1)h.add(s(a[m]));break;case"Map":const f=new Map;r[i]=f;for(let m=1;m<a.length;m+=2)f.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[c],E=a[1],R=j_(E),S=new m(R);r[i]=S;break}case"ArrayBuffer":{const m=a[1],E=j_(m);r[i]=E;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const h=a[u];h!==lN&&(c[u]=s(h))}}else{const c={};r[i]=c;for(const u in a){const h=a[u];c[u]=s(h)}}return r[i]}return s(0)}const mN=new Set(["title","titleTemplate","script","style","noscript"]),Xc=new Set(["base","meta","link","style","script","noscript"]),_N=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),yN=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Lw=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),vN=typeof window<"u";function Sl(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Bf(t){if(t._h)return t._h;if(t._d)return Sl(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Sl(e)}function EN(t,e){return t instanceof Promise?t.then(e):e(t)}function jf(t,e,n,r){const s=r||Vw(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>jf(t,e,n,o));const i={tag:t,props:s};for(const o of Lw){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||mN.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function TN(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function Mw(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=TN(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,Mw(t,e,n,s)));if(!e&&!Lw.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function Vw(t,e=!1){const n=Mw(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const wN=10;function Fw(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,Fw(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function IN(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!_N.has(s))){if(Array.isArray(i)){for(const o of i)e.push(jf(s,o,t));continue}e.push(jf(s,i,t))}}if(e.length===0)return[];const r=[];return EN(Fw(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<wN)+i,s)))}const $_=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),H_={base:-10,title:10},q_={critical:-80,high:-10,low:20};function Pl(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in H_&&(n=H_[t.tag]),e&&e in q_?n+q_[e]:n}const bN=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],RN=["name","property","http-equiv"];function Uw(t){const{props:e,tag:n}=t;if(yN.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of RN)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Ur="%separator";function AN(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const CN=new RegExp(`${Ur}(?:\\s*${Ur})*`,"g");function Dc(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Ur);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Ur||!i.includes(a))return a;const c=AN(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Ur)&&(t=t.slice(0,-Ur.length)),t.startsWith(Ur)&&(t=t.slice(Ur.length)),t=t.replace(CN,n).trim()),t}function W_(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function Bw(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var f;const i=(await t.resolveTags()).map(p=>({tag:p,id:Xc.has(p.tag)?Bf(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const m of["body","head"]){const E=(f=n[m])==null?void 0:f.children;for(const R of E){const S=R.tagName.toLowerCase();if(!Xc.has(S))continue;const D={tag:S,props:await Vw(R.getAttributeNames().reduce((x,L)=>({...x,[L]:R.getAttribute(L)}),{})),innerHTML:R.innerHTML},O=Uw(D);let w=O,k=1;for(;w&&p.has(w);)w=`${O}:${k++}`;w&&(D._d=w,p.add(w)),o.elMap[R.getAttribute("data-hid")||Bf(D)]=R}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,m,E){const R=`${p}:${m}`;o.sideEffects[R]=E,delete o.pendingSideEffects[R]}function c({id:p,$el:m,tag:E}){const R=E.tag.endsWith("Attrs");if(o.elMap[p]=m,R||(E.textContent&&E.textContent!==m.textContent&&(m.textContent=E.textContent),E.innerHTML&&E.innerHTML!==m.innerHTML&&(m.innerHTML=E.innerHTML),a(p,"el",()=>{var S;(S=o.elMap[p])==null||S.remove(),delete o.elMap[p]})),E._eventHandlers)for(const S in E._eventHandlers)Object.prototype.hasOwnProperty.call(E._eventHandlers,S)&&m.getAttribute(`data-${S}`)!==""&&((E.tag==="bodyAttrs"?n.defaultView:m).addEventListener(S.substring(2),E._eventHandlers[S].bind(m)),m.setAttribute(`data-${S}`,""));for(const S in E.props){if(!Object.prototype.hasOwnProperty.call(E.props,S))continue;const D=E.props[S],O=`attr:${S}`;if(S==="class"){if(!D)continue;for(const w of D.split(" "))R&&a(p,`${O}:${w}`,()=>m.classList.remove(w)),!m.classList.contains(w)&&m.classList.add(w)}else if(S==="style"){if(!D)continue;for(const w of D.split(";")){const k=w.indexOf(":"),x=w.substring(0,k).trim(),L=w.substring(k+1).trim();a(p,`${O}:${x}`,()=>{m.style.removeProperty(x)}),m.style.setProperty(x,L)}}else m.getAttribute(S)!==D&&m.setAttribute(S,D===!0?"":String(D)),R&&a(p,O,()=>m.removeAttribute(S))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:m,shouldRender:E,id:R}=p;if(E){if(m.tag==="title"){n.title=m.textContent;continue}p.$el=p.$el||o.elMap[R],p.$el?c(p):Xc.has(m.tag)&&u.push(p)}}for(const p of u){const m=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),c(p),h[m]=h[m]||n.createDocumentFragment(),h[m].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function SN(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>Bw(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function PN(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{SN(i,t)}}}}}const kN=new Set(["templateParams","htmlAttrs","bodyAttrs"]),NN={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=Uw(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Bf(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&kN.has(r.tag)&&(a="merge"),a==="merge"){const c=i.props;c.style&&r.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),r.props.style=`${c.style} ${r.props.style}`),c.class&&r.props.class?r.props.class=`${c.class} ${r.props.class}`:c.class&&(r.props.class=c.class),e[s].props={...c,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Pl(r)>Pl(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Xc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},ON=new Set(["script","link","bodyAttrs"]),DN=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!ON.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&$_.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Sl(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);$_.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),xN=new Set(["link","style","script","noscript"]),LN={hooks:{"tag:normalise":({tag:t})=>{t.key&&xN.has(t.tag)&&(t.props["data-hid"]=t._h=Sl(t.key))}}},MN={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},VN={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of bN){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Pl(n),i=Pl(r);return s<i?-1:s>i?1:n._p-r._p})}}},FN={meta:"content",link:"href",htmlAttrs:"lang"},UN=["innerHTML","textContent"],BN=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Dc(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const c=FN[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=Dc(a.props[c],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of UN)typeof a[u]=="string"&&(a[u]=Dc(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Dc(n.textContent,t._templateParams,t._separator))}}}),jN={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=W_(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=W_(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},$N={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let jw;function HN(t={}){const e=qN(t);return e.use(PN()),jw=e}function K_(t,e){return!t||t==="server"&&e||t==="client"&&!e}function qN(t={}){const e=Ew();e.addHooks(t.hooks||{}),t.document=t.document||(vN?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const u=typeof c=="function"?c(a):c;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),K_(u.mode,n)&&e.addHooks(u.hooks||{}))},push(c,u){u==null||delete u.head;const h={_i:s++,input:c,...u};return K_(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(f=>f._i!==h._i),r()},patch(f){for(const p of i)p._i===h._i&&(p.input=h.input=f);r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const u of c.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const f of await IN(u)){const p={tag:f,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),c.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[NN,MN,DN,LN,VN,BN,jN,$N,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function WN(){return jw}const KN=ow[0]==="3";function GN(t){return typeof t=="function"?t():Be(t)}function $f(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=GN(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>$f(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Be(e[r]);continue}n[r]=$f(e[r])}return n}return e}const zN={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=$f(e.input)}}},$w="usehead";function QN(t){return{install(n){KN&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide($w,t))}}.install}function YN(t={}){t.domDelayFn=t.domDelayFn||(n=>Xs(()=>setTimeout(()=>n(),0)));const e=HN(t);return e.use(zN),e.install=QN(e),e}const Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qf="__unhead_injection_handler__";function XN(t){Hf[qf]=t}function JH(){return qf in Hf?Hf[qf]():at($w)||WN()}let Jc,Zc;function JN(){return Jc=$fetch(_p(`builds/meta/${Ji().app.buildId}.json`),{responseType:"json"}),Jc.then(t=>{Zc=jk(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Jc}function Tu(){return Jc||JN()}async function vp(t){if(await Tu(),!Zc)return console.error("[nuxt] Error creating app manifest matcher.",Zc),{};try{return Cw({},...Zc.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function G_(t,e={}){const n=await eO(t,e),r=Je(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=qw(t).then(i=>i?Hw(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const ZN="_payload.json";async function eO(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Js(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ji(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await qw(t)?i:r.app.baseURL;return mp(o,n.pathname,ZN+(s?`?${s}`:""))}async function Hw(t){const e=fetch(t).then(n=>n.text().then(Ww));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function qw(t=yp().path){if(t=gp(t),(await Tu()).prerendered.includes(t))return!0;const n=await vp(t);return!!n.prerender&&!n.redirect}let bs=null;async function tO(){var r;if(bs)return bs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Ww(t.textContent||""),n=t.dataset.src?await Hw(t.dataset.src):void 0;return bs={...e,...n,...window.__NUXT__},(r=bs.config)!=null&&r.public&&(bs.config.public=Xn(bs.config.public)),bs}async function Ww(t){return await pN(t,Je()._payloadRevivers)}function Zo(t,e){Je()._payloadRevivers[t]=e}const nO=Iw(()=>{Zo("skipHydrate",t=>{})});var z_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=function(t,e){if(!t)throw Zi(e)},Zi=function(t){return new Error("Firebase Database ("+Kw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),r.push(n[h],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new sO;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const E=u<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zw=function(t){const e=Gw(t);return wu.encodeByteArray(e,!0)},kl=function(t){return zw(t).replace(/\./g,"")},Nl=function(t){try{return wu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){return Qw(void 0,t)}function Qw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!oO(n)||(t[n]=Qw(t[n],e[n]));return t}function oO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=()=>aO().__FIREBASE_DEFAULTS__,lO=()=>{if(typeof process>"u"||typeof z_>"u")return;const t=z_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nl(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return cO()||lO()||uO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hO=t=>{var e,n;return(n=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yw=t=>{const e=hO(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xw=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config},fO=t=>{var e;return(e=Iu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ep(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function dO(){var t;const e=(t=Iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function pO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mO(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eI(){return Kw.NODE_ADMIN===!0}function _O(){return!dO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tI(){try{return typeof indexedDB=="object"}catch{return!1}}function yO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="FirebaseError";class Jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vO,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EO(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Jn(s,a,r)}}function EO(t,e){return t.replace(TO,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){return JSON.parse(t)}function It(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=wa(Nl(i[0])||""),n=wa(Nl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},wO=function(t){const e=nI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},IO=function(t){const e=nI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ol(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Q_(i)&&Q_(o)){if(!Dl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Q_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+c+h+r[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function RO(t,e){const n=new AO(t,e);return n.subscribe.bind(n)}class AO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CO(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fh),s.error===void 0&&(s.error=Fh),s.complete===void 0&&(s.complete=Fh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}function SO(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,Y(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ta;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OO(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NO(t){return t===Cs?void 0:t}function OO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const xO={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},LO=ve.INFO,MO={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},VO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=MO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=LO,this._logHandler=VO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const FO=(t,e)=>e.some(n=>t instanceof n);let Y_,X_;function UO(){return Y_||(Y_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BO(){return X_||(X_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rI=new WeakMap,Kf=new WeakMap,sI=new WeakMap,Uh=new WeakMap,Tp=new WeakMap;function jO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rI.set(n,t)}).catch(()=>{}),Tp.set(e,t),e}function $O(t){if(Kf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kf.set(t,e)}let Gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HO(t){Gf=t(Gf)}function qO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bh(this),e,...n);return sI.set(r,e.sort?e.sort():[e]),Yr(r)}:BO().includes(t)?function(...e){return t.apply(Bh(this),e),Yr(rI.get(this))}:function(...e){return Yr(t.apply(Bh(this),e))}}function WO(t){return typeof t=="function"?qO(t):(t instanceof IDBTransaction&&$O(t),FO(t,UO())?new Proxy(t,Gf):t)}function Yr(t){if(t instanceof IDBRequest)return jO(t);if(Uh.has(t))return Uh.get(t);const e=WO(t);return e!==t&&(Uh.set(t,e),Tp.set(e,t)),e}const Bh=t=>Tp.get(t);function KO(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yr(o.result),c.oldVersion,c.newVersion,Yr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GO=["get","getKey","getAll","getAllKeys","count"],zO=["put","add","delete","clear"],jh=new Map;function J_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jh.get(e))return jh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GO.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return jh.set(e,i),i}HO(t=>({...t,get:(e,n,r)=>J_(e,n)||t.get(e,n,r),has:(e,n)=>!!J_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zf="@firebase/app",Z_="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Ka("@firebase/app"),XO="@firebase/app-compat",JO="@firebase/analytics-compat",ZO="@firebase/analytics",e1="@firebase/app-check-compat",t1="@firebase/app-check",n1="@firebase/auth",r1="@firebase/auth-compat",s1="@firebase/database",i1="@firebase/data-connect",o1="@firebase/database-compat",a1="@firebase/functions",c1="@firebase/functions-compat",l1="@firebase/installations",u1="@firebase/installations-compat",h1="@firebase/messaging",f1="@firebase/messaging-compat",d1="@firebase/performance",p1="@firebase/performance-compat",g1="@firebase/remote-config",m1="@firebase/remote-config-compat",_1="@firebase/storage",y1="@firebase/storage-compat",v1="@firebase/firestore",E1="@firebase/vertexai",T1="@firebase/firestore-compat",w1="firebase",I1="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="[DEFAULT]",b1={[zf]:"fire-core",[XO]:"fire-core-compat",[ZO]:"fire-analytics",[JO]:"fire-analytics-compat",[t1]:"fire-app-check",[e1]:"fire-app-check-compat",[n1]:"fire-auth",[r1]:"fire-auth-compat",[s1]:"fire-rtdb",[i1]:"fire-data-connect",[o1]:"fire-rtdb-compat",[a1]:"fire-fn",[c1]:"fire-fn-compat",[l1]:"fire-iid",[u1]:"fire-iid-compat",[h1]:"fire-fcm",[f1]:"fire-fcm-compat",[d1]:"fire-perf",[p1]:"fire-perf-compat",[g1]:"fire-rc",[m1]:"fire-rc-compat",[_1]:"fire-gcs",[y1]:"fire-gcs-compat",[v1]:"fire-fst",[T1]:"fire-fst-compat",[E1]:"fire-vertex","fire-js":"fire-js",[w1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map,R1=new Map,Yf=new Map;function ey(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(Yf.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;Yf.set(e,t);for(const n of xl.values())ey(n,t);for(const n of R1.values())ey(n,t);return!0}function wp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function An(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new eo("app","Firebase",A1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=I1;function iI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xr.create("bad-app-name",{appName:String(s)});if(n||(n=Xw()),!n)throw Xr.create("no-options");const i=xl.get(s);if(i){if(Dl(n,i.options)&&Dl(r,i.config))return i;throw Xr.create("duplicate-app",{appName:s})}const o=new DO(s);for(const c of Yf.values())o.addComponent(c);const a=new C1(n,r,o);return xl.set(s,a),a}function Ip(t=Qf){const e=xl.get(t);if(!e&&t===Qf&&Xw())return iI();if(!e)throw Xr.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=b1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}Qn(new Dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="firebase-heartbeat-database",P1=1,Ia="firebase-heartbeat-store";let $h=null;function oI(){return $h||($h=KO(S1,P1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),$h}async function k1(t){try{const n=(await oI()).transaction(Ia),r=await n.objectStore(Ia).get(aI(t));return await n.done,r}catch(e){if(e instanceof Jn)vr.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function ty(t,e){try{const r=(await oI()).transaction(Ia,"readwrite");await r.objectStore(Ia).put(e,aI(t)),await r.done}catch(n){if(n instanceof Jn)vr.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function aI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=1024,O1=30*24*60*60*1e3;class D1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ny();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=O1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){vr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ny(),{heartbeatsToSend:r,unsentEntries:s}=x1(this._heartbeatsCache.heartbeats),i=kl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vr.warn(n),""}}}function ny(){return new Date().toISOString().substring(0,10)}function x1(t,e=N1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ry(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ry(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tI()?yO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await k1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ry(t){return kl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){Qn(new Dn("platform-logger",e=>new QO(e),"PRIVATE")),Qn(new Dn("heartbeat",e=>new D1(e),"PRIVATE")),an(zf,Z_,t),an(zf,Z_,"esm2017"),an("fire-js","")}M1("");var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fs,cI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function _(){}_.prototype=y.prototype,I.D=y.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,P,C){for(var b=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)b[pe-2]=arguments[pe];return y.prototype[P].apply(T,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)T[P]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(P=0;16>P;++P)T[P]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=I.g[0],_=I.g[1],P=I.g[2];var C=I.g[3],b=y+(C^_&(P^C))+T[0]+3614090360&4294967295;y=_+(b<<7&4294967295|b>>>25),b=C+(P^y&(_^P))+T[1]+3905402710&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(_^C&(y^_))+T[2]+606105819&4294967295,P=C+(b<<17&4294967295|b>>>15),b=_+(y^P&(C^y))+T[3]+3250441966&4294967295,_=P+(b<<22&4294967295|b>>>10),b=y+(C^_&(P^C))+T[4]+4118548399&4294967295,y=_+(b<<7&4294967295|b>>>25),b=C+(P^y&(_^P))+T[5]+1200080426&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(_^C&(y^_))+T[6]+2821735955&4294967295,P=C+(b<<17&4294967295|b>>>15),b=_+(y^P&(C^y))+T[7]+4249261313&4294967295,_=P+(b<<22&4294967295|b>>>10),b=y+(C^_&(P^C))+T[8]+1770035416&4294967295,y=_+(b<<7&4294967295|b>>>25),b=C+(P^y&(_^P))+T[9]+2336552879&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(_^C&(y^_))+T[10]+4294925233&4294967295,P=C+(b<<17&4294967295|b>>>15),b=_+(y^P&(C^y))+T[11]+2304563134&4294967295,_=P+(b<<22&4294967295|b>>>10),b=y+(C^_&(P^C))+T[12]+1804603682&4294967295,y=_+(b<<7&4294967295|b>>>25),b=C+(P^y&(_^P))+T[13]+4254626195&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(_^C&(y^_))+T[14]+2792965006&4294967295,P=C+(b<<17&4294967295|b>>>15),b=_+(y^P&(C^y))+T[15]+1236535329&4294967295,_=P+(b<<22&4294967295|b>>>10),b=y+(P^C&(_^P))+T[1]+4129170786&4294967295,y=_+(b<<5&4294967295|b>>>27),b=C+(_^P&(y^_))+T[6]+3225465664&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^_&(C^y))+T[11]+643717713&4294967295,P=C+(b<<14&4294967295|b>>>18),b=_+(C^y&(P^C))+T[0]+3921069994&4294967295,_=P+(b<<20&4294967295|b>>>12),b=y+(P^C&(_^P))+T[5]+3593408605&4294967295,y=_+(b<<5&4294967295|b>>>27),b=C+(_^P&(y^_))+T[10]+38016083&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^_&(C^y))+T[15]+3634488961&4294967295,P=C+(b<<14&4294967295|b>>>18),b=_+(C^y&(P^C))+T[4]+3889429448&4294967295,_=P+(b<<20&4294967295|b>>>12),b=y+(P^C&(_^P))+T[9]+568446438&4294967295,y=_+(b<<5&4294967295|b>>>27),b=C+(_^P&(y^_))+T[14]+3275163606&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^_&(C^y))+T[3]+4107603335&4294967295,P=C+(b<<14&4294967295|b>>>18),b=_+(C^y&(P^C))+T[8]+1163531501&4294967295,_=P+(b<<20&4294967295|b>>>12),b=y+(P^C&(_^P))+T[13]+2850285829&4294967295,y=_+(b<<5&4294967295|b>>>27),b=C+(_^P&(y^_))+T[2]+4243563512&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^_&(C^y))+T[7]+1735328473&4294967295,P=C+(b<<14&4294967295|b>>>18),b=_+(C^y&(P^C))+T[12]+2368359562&4294967295,_=P+(b<<20&4294967295|b>>>12),b=y+(_^P^C)+T[5]+4294588738&4294967295,y=_+(b<<4&4294967295|b>>>28),b=C+(y^_^P)+T[8]+2272392833&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^_)+T[11]+1839030562&4294967295,P=C+(b<<16&4294967295|b>>>16),b=_+(P^C^y)+T[14]+4259657740&4294967295,_=P+(b<<23&4294967295|b>>>9),b=y+(_^P^C)+T[1]+2763975236&4294967295,y=_+(b<<4&4294967295|b>>>28),b=C+(y^_^P)+T[4]+1272893353&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^_)+T[7]+4139469664&4294967295,P=C+(b<<16&4294967295|b>>>16),b=_+(P^C^y)+T[10]+3200236656&4294967295,_=P+(b<<23&4294967295|b>>>9),b=y+(_^P^C)+T[13]+681279174&4294967295,y=_+(b<<4&4294967295|b>>>28),b=C+(y^_^P)+T[0]+3936430074&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^_)+T[3]+3572445317&4294967295,P=C+(b<<16&4294967295|b>>>16),b=_+(P^C^y)+T[6]+76029189&4294967295,_=P+(b<<23&4294967295|b>>>9),b=y+(_^P^C)+T[9]+3654602809&4294967295,y=_+(b<<4&4294967295|b>>>28),b=C+(y^_^P)+T[12]+3873151461&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^_)+T[15]+530742520&4294967295,P=C+(b<<16&4294967295|b>>>16),b=_+(P^C^y)+T[2]+3299628645&4294967295,_=P+(b<<23&4294967295|b>>>9),b=y+(P^(_|~C))+T[0]+4096336452&4294967295,y=_+(b<<6&4294967295|b>>>26),b=C+(_^(y|~P))+T[7]+1126891415&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~_))+T[14]+2878612391&4294967295,P=C+(b<<15&4294967295|b>>>17),b=_+(C^(P|~y))+T[5]+4237533241&4294967295,_=P+(b<<21&4294967295|b>>>11),b=y+(P^(_|~C))+T[12]+1700485571&4294967295,y=_+(b<<6&4294967295|b>>>26),b=C+(_^(y|~P))+T[3]+2399980690&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~_))+T[10]+4293915773&4294967295,P=C+(b<<15&4294967295|b>>>17),b=_+(C^(P|~y))+T[1]+2240044497&4294967295,_=P+(b<<21&4294967295|b>>>11),b=y+(P^(_|~C))+T[8]+1873313359&4294967295,y=_+(b<<6&4294967295|b>>>26),b=C+(_^(y|~P))+T[15]+4264355552&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~_))+T[6]+2734768916&4294967295,P=C+(b<<15&4294967295|b>>>17),b=_+(C^(P|~y))+T[13]+1309151649&4294967295,_=P+(b<<21&4294967295|b>>>11),b=y+(P^(_|~C))+T[4]+4149444226&4294967295,y=_+(b<<6&4294967295|b>>>26),b=C+(_^(y|~P))+T[11]+3174756917&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~_))+T[2]+718787259&4294967295,P=C+(b<<15&4294967295|b>>>17),b=_+(C^(P|~y))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(P+(b<<21&4294967295|b>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var _=y-this.blockSize,T=this.B,P=this.h,C=0;C<y;){if(P==0)for(;C<=_;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(T[P++]=I.charCodeAt(C++),P==this.blockSize){s(this,T),P=0;break}}else for(;C<y;)if(T[P++]=I[C++],P==this.blockSize){s(this,T),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var _=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=_&255,_/=256;for(this.u(I),I=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)I[_++]=this.g[y]>>>T&255;return I};function i(I,y){var _=a;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=y(I)}function o(I,y){this.h=y;for(var _=[],T=!0,P=I.length-1;0<=P;P--){var C=I[P]|0;T&&C==y||(_[P]=C,T=!1)}this.g=_}var a={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return S(u(-I));for(var y=[],_=1,T=0;I>=_;T++)y[T]=I/_|0,_*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return S(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),T=f,P=0;P<I.length;P+=8){var C=Math.min(8,I.length-P),b=parseInt(I.substring(P,P+C),y);8>C?(C=u(Math.pow(y,C)),T=T.j(C).add(u(b))):(T=T.j(_),T=T.add(u(b)))}return T}var f=c(0),p=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-S(this).m();for(var I=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(E(this))return"0";if(R(this))return"-"+S(this).toString(I);for(var y=u(Math.pow(I,6)),_=this,T="";;){var P=k(_,y).g;_=D(_,P.j(y));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=P,E(_))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function E(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function R(I){return I.h==-1}t.l=function(I){return I=D(this,I),R(I)?-1:E(I)?0:1};function S(I){for(var y=I.g.length,_=[],T=0;T<y;T++)_[T]=~I.g[T];return new o(_,~I.h).add(p)}t.abs=function(){return R(this)?S(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0,P=0;P<=y;P++){var C=T+(this.i(P)&65535)+(I.i(P)&65535),b=(C>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);T=b>>>16,C&=65535,b&=65535,_[P]=b<<16|C}return new o(_,_[_.length-1]&-2147483648?-1:0)};function D(I,y){return I.add(S(y))}t.j=function(I){if(E(this)||E(I))return f;if(R(this))return R(I)?S(this).j(S(I)):S(S(this).j(I));if(R(I))return S(this.j(S(I)));if(0>this.l(m)&&0>I.l(m))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var P=0;P<I.g.length;P++){var C=this.i(T)>>>16,b=this.i(T)&65535,pe=I.i(P)>>>16,ye=I.i(P)&65535;_[2*T+2*P]+=b*ye,O(_,2*T+2*P),_[2*T+2*P+1]+=C*ye,O(_,2*T+2*P+1),_[2*T+2*P+1]+=b*pe,O(_,2*T+2*P+1),_[2*T+2*P+2]+=C*pe,O(_,2*T+2*P+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new o(_,0)};function O(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function w(I,y){this.g=I,this.h=y}function k(I,y){if(E(y))throw Error("division by zero");if(E(I))return new w(f,f);if(R(I))return y=k(S(I),y),new w(S(y.g),S(y.h));if(R(y))return y=k(I,S(y)),new w(S(y.g),y.h);if(30<I.g.length){if(R(I)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,T=y;0>=T.l(I);)_=x(_),T=x(T);var P=L(_,1),C=L(T,1);for(T=L(T,2),_=L(_,2);!E(T);){var b=C.add(T);0>=b.l(I)&&(P=P.add(_),C=b),T=L(T,1),_=L(_,1)}return y=D(I,P.j(y)),new w(P,y)}for(P=f;0<=I.l(y);){for(_=Math.max(1,Math.floor(I.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=u(_),b=C.j(y);R(b)||0<b.l(I);)_-=T,C=u(_),b=C.j(y);E(C)&&(C=p),P=P.add(C),I=D(I,b)}return new w(P,I)}t.A=function(I){return k(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&I.i(T);return new o(_,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|I.i(T);return new o(_,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^I.i(T);return new o(_,this.h^I.h)};function x(I){for(var y=I.g.length+1,_=[],T=0;T<y;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(_,I.h)}function L(I,y){var _=y>>5;y%=32;for(var T=I.g.length-_,P=[],C=0;C<T;C++)P[C]=0<y?I.i(C+_)>>>y|I.i(C+_+1)<<32-y:I.i(C+_);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Fs=o}).apply(typeof sy<"u"?sy:typeof self<"u"?self:typeof window<"u"?window:{});var xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lI,Bo,uI,el,Xf,hI,fI,dI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof xc=="object"&&xc];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var M=l[v];if(!(M in g))break e;g=g[M]}l=l[l.length-1],v=g[l],d=d(v),d!=v&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,v=!1,M={next:function(){if(!v&&g<l.length){var F=g++;return{value:d(F,l[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,g){return l.call.apply(l.bind,arguments)}function f(l,d,g){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,v),l.apply(d,M)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function m(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function E(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(v,M,F){for(var z=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)z[Ve-2]=arguments[Ve];return d.prototype[M].apply(v,z)}}function R(l){const d=l.length;if(0<d){const g=Array(d);for(let v=0;v<d;v++)g[v]=l[v];return g}return[]}function S(l,d){for(let g=1;g<arguments.length;g++){const v=arguments[g];if(c(v)){const M=l.length||0,F=v.length||0;l.length=M+F;for(let z=0;z<F;z++)l[M+z]=v[z]}else l.push(v)}}class D{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function k(l){return k[" "](l),l}k[" "]=function(){};var x=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function L(l,d,g){for(const v in l)d.call(g,l[v],v,l)}function I(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function y(l){const d={};for(const g in l)d[g]=l[g];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,d){let g,v;for(let M=1;M<arguments.length;M++){v=arguments[M];for(g in v)l[g]=v[g];for(let F=0;F<_.length;F++)g=_[F],Object.prototype.hasOwnProperty.call(v,g)&&(l[g]=v[g])}}function P(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function C(l){a.setTimeout(()=>{throw l},0)}function b(){var l=ze;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class pe{constructor(){this.h=this.g=null}add(d,g){const v=ye.get();v.set(d,g),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new D(()=>new Z,l=>l.reset());class Z{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,re=!1,ze=new pe,wn=()=>{const l=a.Promise.resolve(void 0);ie=()=>{l.then(un)}};var un=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(g){C(g)}var d=ye;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}re=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var Sr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function Vn(l,d){if(Ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(x){e:{try{k(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Qt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Vn.aa.h.call(this)}}E(Vn,Ye);var Qt={2:"touch",3:"pen",4:"mouse"};Vn.prototype.h=function(){Vn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(l,d,g,v,M){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!v,this.ha=M,this.key=++ee,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Te(l){this.src=l,this.g={},this.h=0}Te.prototype.add=function(l,d,g,v,M){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var z=A(l,d,v,M);return-1<z?(d=l[z],g||(d.fa=!1)):(d=new X(d,this.src,F,!!v,M),d.fa=g,l.push(d)),d};function Le(l,d){var g=d.type;if(g in l.g){var v=l.g[g],M=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=M)&&Array.prototype.splice.call(v,M,1),F&&(se(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function A(l,d,g,v){for(var M=0;M<l.length;++M){var F=l[M];if(!F.da&&F.listener==d&&F.capture==!!g&&F.ha==v)return M}return-1}var N="closure_lm_"+(1e6*Math.random()|0),V={};function H(l,d,g,v,M){if(Array.isArray(d)){for(var F=0;F<d.length;F++)H(l,d[F],g,v,M);return null}return g=ae(g),l&&l[B]?l.K(d,g,u(v)?!!v.capture:!!v,M):U(l,d,g,!1,v,M)}function U(l,d,g,v,M,F){if(!d)throw Error("Invalid event type");var z=u(M)?!!M.capture:!!M,Ve=le(l);if(Ve||(l[N]=Ve=new Te(l)),g=Ve.add(d,g,v,z,F),g.proxy)return g;if(v=q(),g.proxy=v,v.src=l,v.listener=g,l.addEventListener)Sr||(M=z),M===void 0&&(M=!1),l.addEventListener(d.toString(),v,M);else if(l.attachEvent)l.attachEvent(K(d.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function q(){function l(g){return d.call(l.src,l.listener,g)}const d=W;return l}function Q(l,d,g,v,M){if(Array.isArray(d))for(var F=0;F<d.length;F++)Q(l,d[F],g,v,M);else v=u(v)?!!v.capture:!!v,g=ae(g),l&&l[B]?(l=l.i,d=String(d).toString(),d in l.g&&(F=l.g[d],g=A(F,g,v,M),-1<g&&(se(F[g]),Array.prototype.splice.call(F,g,1),F.length==0&&(delete l.g[d],l.h--)))):l&&(l=le(l))&&(d=l.g[d.toString()],l=-1,d&&(l=A(d,g,v,M)),(g=-1<l?d[l]:null)&&G(g))}function G(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[B])Le(d.i,l);else{var g=l.type,v=l.proxy;d.removeEventListener?d.removeEventListener(g,v,l.capture):d.detachEvent?d.detachEvent(K(g),v):d.addListener&&d.removeListener&&d.removeListener(v),(g=le(d))?(Le(g,l),g.h==0&&(g.src=null,d[N]=null)):se(l)}}}function K(l){return l in V?V[l]:V[l]="on"+l}function W(l,d){if(l.da)l=!0;else{d=new Vn(d,this);var g=l.listener,v=l.ha||l.src;l.fa&&G(l),l=g.call(v,d)}return l}function le(l){return l=l[N],l instanceof Te?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[J]||(l[J]=function(d){return l.handleEvent(d)}),l[J])}function oe(){Qe.call(this),this.i=new Te(this),this.M=this,this.F=null}E(oe,Qe),oe.prototype[B]=!0,oe.prototype.removeEventListener=function(l,d,g,v){Q(this,l,d,g,v)};function he(l,d){var g,v=l.F;if(v)for(g=[];v;v=v.F)g.push(v);if(l=l.M,v=d.type||d,typeof d=="string")d=new Ye(d,l);else if(d instanceof Ye)d.target=d.target||l;else{var M=d;d=new Ye(v,l),T(d,M)}if(M=!0,g)for(var F=g.length-1;0<=F;F--){var z=d.g=g[F];M=ke(z,v,!0,d)&&M}if(z=d.g=l,M=ke(z,v,!0,d)&&M,M=ke(z,v,!1,d)&&M,g)for(F=0;F<g.length;F++)z=d.g=g[F],M=ke(z,v,!1,d)&&M}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],v=0;v<g.length;v++)se(g[v]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,g,v){return this.i.add(String(l),d,!1,g,v)},oe.prototype.L=function(l,d,g,v){return this.i.add(String(l),d,!0,g,v)};function ke(l,d,g,v){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,F=0;F<d.length;++F){var z=d[F];if(z&&!z.da&&z.capture==g){var Ve=z.listener,wt=z.ha||z.src;z.fa&&Le(l.i,z),M=Ve.call(wt,v)!==!1&&M}}return M&&!v.defaultPrevented}function Se(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function At(l){l.g=Se(()=>{l.g=null,l.i&&(l.i=!1,At(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class mt extends Qe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:At(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(l){Qe.call(this),this.h=l,this.g={}}E(Tt,Qe);var Ct=[];function Pr(l){L(l.g,function(d,g){this.g.hasOwnProperty(g)&&G(d)},l),l.g={}}Tt.prototype.N=function(){Tt.aa.N.call(this),Pr(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ri=a.JSON.stringify,$t=a.JSON.parse,hn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function si(){}si.prototype.h=null;function Jg(l){return l.h||(l.h=l.i())}function Zg(){}var fo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ih(){Ye.call(this,"d")}E(ih,Ye);function oh(){Ye.call(this,"c")}E(oh,Ye);var _s={},em=null;function cc(){return em=em||new oe}_s.La="serverreachability";function tm(l){Ye.call(this,_s.La,l)}E(tm,Ye);function po(l){const d=cc();he(d,new tm(d))}_s.STAT_EVENT="statevent";function nm(l,d){Ye.call(this,_s.STAT_EVENT,l),this.stat=d}E(nm,Ye);function Ht(l){const d=cc();he(d,new nm(d,l))}_s.Ma="timingevent";function rm(l,d){Ye.call(this,_s.Ma,l),this.size=d}E(rm,Ye);function go(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function mo(){this.g=!0}mo.prototype.xa=function(){this.g=!1};function IA(l,d,g,v,M,F){l.info(function(){if(l.g)if(F)for(var z="",Ve=F.split("&"),wt=0;wt<Ve.length;wt++){var Pe=Ve[wt].split("=");if(1<Pe.length){var St=Pe[0];Pe=Pe[1];var Pt=St.split("_");z=2<=Pt.length&&Pt[1]=="type"?z+(St+"="+Pe+"&"):z+(St+"=redacted&")}}else z=null;else z=F;return"XMLHTTP REQ ("+v+") [attempt "+M+"]: "+d+`
`+g+`
`+z})}function bA(l,d,g,v,M,F,z){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+M+"]: "+d+`
`+g+`
`+F+" "+z})}function ii(l,d,g,v){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+AA(l,g)+(v?" "+v:"")})}function RA(l,d){l.info(function(){return"TIMEOUT: "+d})}mo.prototype.info=function(){};function AA(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var v=g[l];if(!(2>v.length)){var M=v[1];if(Array.isArray(M)&&!(1>M.length)){var F=M[0];if(F!="noop"&&F!="stop"&&F!="close")for(var z=1;z<M.length;z++)M[z]=""}}}}return ri(g)}catch{return d}}var lc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ah;function uc(){}E(uc,si),uc.prototype.g=function(){return new XMLHttpRequest},uc.prototype.i=function(){return{}},ah=new uc;function kr(l,d,g,v){this.j=l,this.i=d,this.l=g,this.R=v||1,this.U=new Tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new im}function im(){this.i=null,this.g="",this.h=!1}var om={},ch={};function lh(l,d,g){l.L=1,l.v=pc(er(d)),l.m=g,l.P=!0,am(l,null)}function am(l,d){l.F=Date.now(),hc(l),l.A=er(l.v);var g=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Tm(g.i,"t",v),l.C=0,g=l.j.J,l.h=new im,l.g=Um(l.j,g?d:null,!l.m),0<l.O&&(l.M=new mt(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,v=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ct[0]=M.toString()),M=Ct);for(var F=0;F<M.length;F++){var z=H(g,M[F],v||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),po(),IA(l.i,l.u,l.A,l.l,l.R,l.m)}kr.prototype.ca=function(l){l=l.target;const d=this.M;d&&tr(l)==3?d.j():this.Y(l)},kr.prototype.Y=function(l){try{if(l==this.g)e:{const Pt=tr(this.g);var d=this.g.Ba();const ci=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Sm(this.g)))){this.J||Pt!=4||d==7||(d==8||0>=ci?po(3):po(2)),uh(this);var g=this.g.Z();this.X=g;t:if(cm(this)){var v=Sm(this.g);l="";var M=v.length,F=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ys(this),_o(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,l+=this.h.i.decode(v[d],{stream:!(F&&d==M-1)});v.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=g==200,bA(this.i,this.u,this.A,this.l,this.R,Pt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,wt=this.g;if((Ve=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ve)){var Pe=Ve;break t}}Pe=null}if(g=Pe)ii(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hh(this,g);else{this.o=!1,this.s=3,Ht(12),ys(this),_o(this);break e}}if(this.P){g=!0;let In;for(;!this.J&&this.C<z.length;)if(In=CA(this,z),In==ch){Pt==4&&(this.s=4,Ht(14),g=!1),ii(this.i,this.l,null,"[Incomplete Response]");break}else if(In==om){this.s=4,Ht(15),ii(this.i,this.l,z,"[Invalid Chunk]"),g=!1;break}else ii(this.i,this.l,In,null),hh(this,In);if(cm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||z.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)ii(this.i,this.l,z,"[Invalid Chunked Response]"),ys(this),_o(this);else if(0<z.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),_h(St),St.M=!0,Ht(11))}}else ii(this.i,this.l,z,null),hh(this,z);Pt==4&&ys(this),this.o&&!this.J&&(Pt==4?Lm(this.j,this):(this.o=!1,hc(this)))}else qA(this.g),g==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),ys(this),_o(this)}}}catch{}finally{}};function cm(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function CA(l,d){var g=l.C,v=d.indexOf(`
`,g);return v==-1?ch:(g=Number(d.substring(g,v)),isNaN(g)?om:(v+=1,v+g>d.length?ch:(d=d.slice(v,v+g),l.C=v+g,d)))}kr.prototype.cancel=function(){this.J=!0,ys(this)};function hc(l){l.S=Date.now()+l.I,lm(l,l.I)}function lm(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=go(p(l.ba,l),d)}function uh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}kr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(RA(this.i,this.A),this.L!=2&&(po(),Ht(17)),ys(this),this.s=2,_o(this)):lm(this,this.S-l)};function _o(l){l.j.G==0||l.J||Lm(l.j,l)}function ys(l){uh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Pr(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function hh(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||fh(g.h,l))){if(!l.K&&fh(g.h,l)&&g.G==3){try{var v=g.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var M=v;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ec(g),yc(g);else break e;mh(g),Ht(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=go(p(g.Za,g),6e3));if(1>=fm(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Es(g,11)}else if((l.K||g.g==l)&&Ec(g),!O(d))for(M=g.Da.g.parse(d),d=0;d<M.length;d++){let Pe=M[d];if(g.T=Pe[0],Pe=Pe[1],g.G==2)if(Pe[0]=="c"){g.K=Pe[1],g.ia=Pe[2];const St=Pe[3];St!=null&&(g.la=St,g.j.info("VER="+g.la));const Pt=Pe[4];Pt!=null&&(g.Aa=Pt,g.j.info("SVER="+g.Aa));const ci=Pe[5];ci!=null&&typeof ci=="number"&&0<ci&&(v=1.5*ci,g.L=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const In=l.g;if(In){const wc=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wc){var F=v.h;F.g||wc.indexOf("spdy")==-1&&wc.indexOf("quic")==-1&&wc.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(dh(F,F.h),F.h=null))}if(v.D){const yh=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;yh&&(v.ya=yh,$e(v.I,v.D,yh))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),v=g;var z=l;if(v.qa=Fm(v,v.J?v.ia:null,v.W),z.K){dm(v.h,z);var Ve=z,wt=v.L;wt&&(Ve.I=wt),Ve.B&&(uh(Ve),hc(Ve)),v.g=z}else Dm(v);0<g.i.length&&vc(g)}else Pe[0]!="stop"&&Pe[0]!="close"||Es(g,7);else g.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Es(g,7):gh(g):Pe[0]!="noop"&&g.l&&g.l.ta(Pe),g.v=0)}}po(4)}catch{}}var SA=class{constructor(l,d){this.g=l,this.map=d}};function um(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function fm(l){return l.h?1:l.g?l.g.size:0}function fh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function dh(l,d){l.g?l.g.add(d):l.h=d}function dm(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}um.prototype.cancel=function(){if(this.i=pm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function pm(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return R(l.i)}function PA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,v=0;v<g;v++)d.push(l[v]);return d}d=[],g=0;for(v in l)d[g++]=l[v];return d}function kA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const v in l)d[g++]=v;return d}}}function gm(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=kA(l),v=PA(l),M=v.length,F=0;F<M;F++)d.call(void 0,v[F],g&&g[F],l)}var mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NA(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var v=l[g].indexOf("="),M=null;if(0<=v){var F=l[g].substring(0,v);M=l[g].substring(v+1)}else F=l[g];d(F,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function vs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof vs){this.h=l.h,fc(this,l.j),this.o=l.o,this.g=l.g,dc(this,l.s),this.l=l.l;var d=l.i,g=new Eo;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),_m(this,g),this.m=l.m}else l&&(d=String(l).match(mm))?(this.h=!1,fc(this,d[1]||"",!0),this.o=yo(d[2]||""),this.g=yo(d[3]||"",!0),dc(this,d[4]),this.l=yo(d[5]||"",!0),_m(this,d[6]||"",!0),this.m=yo(d[7]||"")):(this.h=!1,this.i=new Eo(null,this.h))}vs.prototype.toString=function(){var l=[],d=this.j;d&&l.push(vo(d,ym,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(vo(d,ym,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(vo(g,g.charAt(0)=="/"?xA:DA,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",vo(g,MA)),l.join("")};function er(l){return new vs(l)}function fc(l,d,g){l.j=g?yo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function dc(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function _m(l,d,g){d instanceof Eo?(l.i=d,VA(l.i,l.h)):(g||(d=vo(d,LA)),l.i=new Eo(d,l.h))}function $e(l,d,g){l.i.set(d,g)}function pc(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function yo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function vo(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,OA),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function OA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ym=/[#\/\?@]/g,DA=/[#\?:]/g,xA=/[#\?]/g,LA=/[#\?@]/g,MA=/#/g;function Eo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Nr(l){l.g||(l.g=new Map,l.h=0,l.i&&NA(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Eo.prototype,t.add=function(l,d){Nr(this),this.i=null,l=oi(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function vm(l,d){Nr(l),d=oi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Em(l,d){return Nr(l),d=oi(l,d),l.g.has(d)}t.forEach=function(l,d){Nr(this),this.g.forEach(function(g,v){g.forEach(function(M){l.call(d,M,v,this)},this)},this)},t.na=function(){Nr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let v=0;v<d.length;v++){const M=l[v];for(let F=0;F<M.length;F++)g.push(d[v])}return g},t.V=function(l){Nr(this);let d=[];if(typeof l=="string")Em(this,l)&&(d=d.concat(this.g.get(oi(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return Nr(this),this.i=null,l=oi(this,l),Em(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Tm(l,d,g){vm(l,d),0<g.length&&(l.i=null,l.g.set(oi(l,d),R(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var v=d[g];const F=encodeURIComponent(String(v)),z=this.V(v);for(v=0;v<z.length;v++){var M=F;z[v]!==""&&(M+="="+encodeURIComponent(String(z[v]))),l.push(M)}}return this.i=l.join("&")};function oi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function VA(l,d){d&&!l.j&&(Nr(l),l.i=null,l.g.forEach(function(g,v){var M=v.toLowerCase();v!=M&&(vm(this,v),Tm(this,M,g))},l)),l.j=d}function FA(l,d){const g=new mo;if(a.Image){const v=new Image;v.onload=m(Or,g,"TestLoadImage: loaded",!0,d,v),v.onerror=m(Or,g,"TestLoadImage: error",!1,d,v),v.onabort=m(Or,g,"TestLoadImage: abort",!1,d,v),v.ontimeout=m(Or,g,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else d(!1)}function UA(l,d){const g=new mo,v=new AbortController,M=setTimeout(()=>{v.abort(),Or(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:v.signal}).then(F=>{clearTimeout(M),F.ok?Or(g,"TestPingServer: ok",!0,d):Or(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),Or(g,"TestPingServer: error",!1,d)})}function Or(l,d,g,v,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),v(g)}catch{}}function BA(){this.g=new hn}function jA(l,d,g){const v=g||"";try{gm(l,function(M,F){let z=M;u(M)&&(z=ri(M)),d.push(v+F+"="+encodeURIComponent(z))})}catch(M){throw d.push(v+"type="+encodeURIComponent("_badmap")),M}}function gc(l){this.l=l.Ub||null,this.j=l.eb||!1}E(gc,si),gc.prototype.g=function(){return new mc(this.l,this.j)},gc.prototype.i=function(l){return function(){return l}}({});function mc(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(mc,oe),t=mc.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,wo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,To(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wm(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function wm(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?To(this):wo(this),this.readyState==3&&wm(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,To(this))},t.Qa=function(l){this.g&&(this.response=l,To(this))},t.ga=function(){this.g&&To(this)};function To(l){l.readyState=4,l.l=null,l.j=null,l.v=null,wo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function wo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Im(l){let d="";return L(l,function(g,v){d+=v,d+=":",d+=g,d+=`\r
`}),d}function ph(l,d,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=Im(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):$e(l,d,g))}function Ze(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ze,oe);var $A=/^https?$/i,HA=["POST","PUT"];t=Ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ah.g(),this.v=this.o?Jg(this.o):Jg(ah),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(F){bm(this,F);return}if(l=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var M in v)g.set(M,v[M]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())g.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(HA,d,void 0))||v||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,z]of g)this.g.setRequestHeader(F,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cm(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){bm(this,F)}};function bm(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Rm(l),_c(l)}function Rm(l){l.A||(l.A=!0,he(l,"complete"),he(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,he(this,"complete"),he(this,"abort"),_c(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_c(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Am(this):this.bb())},t.bb=function(){Am(this)};function Am(l){if(l.h&&typeof o<"u"&&(!l.v[1]||tr(l)!=4||l.Z()!=2)){if(l.u&&tr(l)==4)Se(l.Ea,0,l);else if(he(l,"readystatechange"),tr(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var v;if(v=z===0){var M=String(l.D).match(mm)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),v=!$A.test(M?M.toLowerCase():"")}g=v}if(g)he(l,"complete"),he(l,"success");else{l.m=6;try{var F=2<tr(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Rm(l)}}finally{_c(l)}}}}function _c(l,d){if(l.g){Cm(l);const g=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||he(l,"ready");try{g.onreadystatechange=v}catch{}}}function Cm(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function tr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),$t(d)}};function Sm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function qA(l){const d={};l=(l.g&&2<=tr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(O(l[v]))continue;var g=P(l[v]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=d[M]||[];d[M]=F,F.push(g)}I(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Io(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Pm(l){this.Aa=0,this.i=[],this.j=new mo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Io("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Io("baseRetryDelayMs",5e3,l),this.cb=Io("retryDelaySeedMs",1e4,l),this.Wa=Io("forwardChannelMaxRetries",2,l),this.wa=Io("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new um(l&&l.concurrentRequestLimit),this.Da=new BA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pm.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,v){Ht(0),this.W=l,this.H=d||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.I=Fm(this,null,this.W),vc(this)};function gh(l){if(km(l),l.G==3){var d=l.U++,g=er(l.I);if($e(g,"SID",l.K),$e(g,"RID",d),$e(g,"TYPE","terminate"),bo(l,g),d=new kr(l,l.j,d),d.L=2,d.v=pc(er(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Um(d.j,null),d.g.ea(d.v)),d.F=Date.now(),hc(d)}Vm(l)}function yc(l){l.g&&(_h(l),l.g.cancel(),l.g=null)}function km(l){yc(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ec(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function vc(l){if(!hm(l.h)&&!l.s){l.s=!0;var d=l.Ga;ie||wn(),re||(ie(),re=!0),ze.add(d,l),l.B=0}}function WA(l,d){return fm(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=go(p(l.Ga,l,d),Mm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new kr(this,this.j,l);let F=this.o;if(this.S&&(F?(F=y(F),T(F,this.S)):F=this.S),this.m!==null||this.O||(M.H=F,F=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Om(this,M,d),g=er(this.I),$e(g,"RID",l),$e(g,"CVER",22),this.D&&$e(g,"X-HTTP-Session-Id",this.D),bo(this,g),F&&(this.O?d="headers="+encodeURIComponent(String(Im(F)))+"&"+d:this.m&&ph(g,this.m,F)),dh(this.h,M),this.Ua&&$e(g,"TYPE","init"),this.P?($e(g,"$req",d),$e(g,"SID","null"),M.T=!0,lh(M,g,null)):lh(M,g,d),this.G=2}}else this.G==3&&(l?Nm(this,l):this.i.length==0||hm(this.h)||Nm(this))};function Nm(l,d){var g;d?g=d.l:g=l.U++;const v=er(l.I);$e(v,"SID",l.K),$e(v,"RID",g),$e(v,"AID",l.T),bo(l,v),l.m&&l.o&&ph(v,l.m,l.o),g=new kr(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Om(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),dh(l.h,g),lh(g,v,d)}function bo(l,d){l.H&&L(l.H,function(g,v){$e(d,v,g)}),l.l&&gm({},function(g,v){$e(d,v,g)})}function Om(l,d,g){g=Math.min(l.i.length,g);var v=l.l?p(l.l.Na,l.l,l):null;e:{var M=l.i;let F=-1;for(;;){const z=["count="+g];F==-1?0<g?(F=M[0].g,z.push("ofs="+F)):F=0:z.push("ofs="+F);let Ve=!0;for(let wt=0;wt<g;wt++){let Pe=M[wt].g;const St=M[wt].map;if(Pe-=F,0>Pe)F=Math.max(0,M[wt].g-100),Ve=!1;else try{jA(St,z,"req"+Pe+"_")}catch{v&&v(St)}}if(Ve){v=z.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,v}function Dm(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ie||wn(),re||(ie(),re=!0),ze.add(d,l),l.v=0}}function mh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=go(p(l.Fa,l),Mm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,xm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=go(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),yc(this),xm(this))};function _h(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function xm(l){l.g=new kr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=er(l.qa);$e(d,"RID","rpc"),$e(d,"SID",l.K),$e(d,"AID",l.T),$e(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(d,"TO",l.ja),$e(d,"TYPE","xmlhttp"),bo(l,d),l.m&&l.o&&ph(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=pc(er(d)),g.m=null,g.P=!0,am(g,l)}t.Za=function(){this.C!=null&&(this.C=null,yc(this),mh(this),Ht(19))};function Ec(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Lm(l,d){var g=null;if(l.g==d){Ec(l),_h(l),l.g=null;var v=2}else if(fh(l.h,d))g=d.D,dm(l.h,d),v=1;else return;if(l.G!=0){if(d.o)if(v==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var M=l.B;v=cc(),he(v,new rm(v,g)),vc(l)}else Dm(l);else if(M=d.s,M==3||M==0&&0<d.X||!(v==1&&WA(l,d)||v==2&&mh(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),M){case 1:Es(l,5);break;case 4:Es(l,10);break;case 3:Es(l,6);break;default:Es(l,2)}}}function Mm(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function Es(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),v=l.Xa;const M=!v;v=new vs(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fc(v,"https"),pc(v),M?FA(v.toString(),g):UA(v.toString(),g)}else Ht(2);l.G=0,l.l&&l.l.sa(d),Vm(l),km(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function Vm(l){if(l.G=0,l.ka=[],l.l){const d=pm(l.h);(d.length!=0||l.i.length!=0)&&(S(l.ka,d),S(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Fm(l,d,g){var v=g instanceof vs?er(g):new vs(g);if(v.g!="")d&&(v.g=d+"."+v.g),dc(v,v.s);else{var M=a.location;v=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var F=new vs(null);v&&fc(F,v),d&&(F.g=d),M&&dc(F,M),g&&(F.l=g),v=F}return g=l.D,d=l.ya,g&&d&&$e(v,g,d),$e(v,"VER",l.la),bo(l,v),v}function Um(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ze(new gc({eb:g})):new Ze(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bm(){}t=Bm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Tc(){}Tc.prototype.g=function(l,d){return new tn(l,d)};function tn(l,d){oe.call(this),this.g=new Pm(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!O(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ai(this)}E(tn,oe),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){gh(this.g)},tn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=ri(l),l=g);d.i.push(new SA(d.Ya++,l)),d.G==3&&vc(d)},tn.prototype.N=function(){this.g.l=null,delete this.j,gh(this.g),delete this.g,tn.aa.N.call(this)};function jm(l){ih.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}E(jm,ih);function $m(){oh.call(this),this.status=1}E($m,oh);function ai(l){this.g=l}E(ai,Bm),ai.prototype.ua=function(){he(this.g,"a")},ai.prototype.ta=function(l){he(this.g,new jm(l))},ai.prototype.sa=function(l){he(this.g,new $m)},ai.prototype.ra=function(){he(this.g,"b")},Tc.prototype.createWebChannel=Tc.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,dI=function(){return new Tc},fI=function(){return cc()},hI=_s,Xf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lc.NO_ERROR=0,lc.TIMEOUT=8,lc.HTTP_ERROR=6,el=lc,sm.COMPLETE="complete",uI=sm,Zg.EventType=fo,fo.OPEN="a",fo.CLOSE="b",fo.ERROR="c",fo.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Bo=Zg,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,lI=Ze}).apply(typeof xc<"u"?xc:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Ka("@firebase/firestore");function pi(){return $s.logLevel}function te(t,...e){if($s.logLevel<=ve.DEBUG){const n=e.map(bp);$s.debug(`Firestore (${no}): ${t}`,...n)}}function Er(t,...e){if($s.logLevel<=ve.ERROR){const n=e.map(bp);$s.error(`Firestore (${no}): ${t}`,...n)}}function Ui(t,...e){if($s.logLevel<=ve.WARN){const n=e.map(bp);$s.warn(`Firestore (${no}): ${t}`,...n)}}function bp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+t;throw Er(e),new Error(e)}function xe(t,e){t||de()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class F1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class U1{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new pI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Nt(e)}}class B1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class j1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new B1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new $1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=q1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Bi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new ct(0,0))}static max(){return new me(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ba?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends ba{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const W1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends ba{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return W1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ne(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ne(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(We.fromString(e))}static fromName(e){return new ce(We.fromString(e).popFirst(5))}static empty(){return new ce(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new We(e.slice()))}}function K1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new ns(s,ce.empty(),e)}function G1(t){return new ns(t.readTime,t.key,-1)}class ns{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ns(me.min(),ce.empty(),-1)}static max(){return new ns(me.max(),ce.empty(),-1)}}function z1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==Q1)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function X1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ru.oe=-1;function Au(t){return t==null}function Ll(t){return t===0&&1/t==-1/0}function J1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ll(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=oy(e)),e=eD(t.get(n),e);return oy(e)}function eD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function oy(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=class Jf{constructor(e,n){this.comparator=e,this.root=n||Jr.EMPTY}insert(e,n){return new Jf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Jr.BLACK,null,null))}remove(e){return new Jf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}},Lc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Jr=class ir{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ir.RED,this.left=s??ir.EMPTY,this.right=i??ir.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ir(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ir.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ir.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ir.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ir.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}};Jr.EMPTY=null,Jr.RED=!0,Jr.BLACK=!1;Jr.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Jr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(e){return new cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new gt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _I("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const tD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(xe(!!t),typeof t=="string"){let e=0;const n=tD.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cu(t){const e=t.mapValue.fields.__previous_value__;return Rp(e)?Cu(e):e}function Ra(t){const e=rs(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Aa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Aa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rp(t)?4:sD(t)?9007199254740991:rD(t)?10:11:de()}function Yn(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rs(s.timestampValue),a=rs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ss(s.bytesValue).isEqual(ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=st(s.doubleValue),a=st(i.doubleValue);return o===a?Ll(o)===Ll(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bi(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ay(o)!==ay(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Yn(o[c],a[c])))return!1;return!0}(t,e);default:return de()}}function Ca(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=st(i.integerValue||i.doubleValue),c=st(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ly(t.timestampValue,e.timestampValue);case 4:return ly(Ra(t),Ra(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ss(i),c=ss(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=we(a[u],c[u]);if(h!==0)return h}return we(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=we(st(i.latitude),st(o.latitude));return a!==0?a:we(st(i.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return uy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},p=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=we(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:uy(m,E)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Mc.mapValue&&o===Mc.mapValue)return 0;if(i===Mc.mapValue)return 1;if(o===Mc.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=we(c[f],h[f]);if(p!==0)return p;const m=ji(a[c[f]],u[h[f]]);if(m!==0)return m}return we(c.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=rs(t),r=rs(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function uy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ji(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function $i(t){return Zf(t)}function Zf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Zf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Zf(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function tl(t){switch(is(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cu(t);return e?16+tl(e):16;case 5:return 2*t.stringValue.length;case 6:return ss(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+tl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ds(r.fields,(i,o)=>{s+=i.length+tl(o)}),s}(t.mapValue);default:throw de()}}function hy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ed(t){return!!t&&"integerValue"in t}function Ap(t){return!!t&&"arrayValue"in t}function fy(t){return!!t&&"nullValue"in t}function dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nl(t){return!!t&&"mapValue"in t}function rD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=bt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ea(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];nl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(ea(this.value))}}function yI(t){const e=[];return ds(t.fields,(n,r)=>{const s=new bt([n]);if(nl(r)){const i=yI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Lt(e,0,me.min(),me.min(),me.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new Lt(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new Lt(e,2,n,me.min(),me.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,me.min(),me.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.position=e,this.inclusive=n}}function py(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=ji(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function iD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{}class ot extends vI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aD(e,n,r):n==="array-contains"?new uD(e,r):n==="in"?new hD(e,r):n==="not-in"?new fD(e,r):n==="array-contains-any"?new dD(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cD(e,r):new lD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ji(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends vI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return EI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function EI(t){return t.op==="and"}function TI(t){return oD(t)&&EI(t)}function oD(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function td(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+$i(t.value);if(TI(t))return t.filters.map(e=>td(e)).join(",");{const e=t.filters.map(n=>td(n)).join(",");return`${t.op}(${e})`}}function wI(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&Yn(r.value,s.value)}(t,e):t instanceof xn?function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&wI(o,s.filters[a]),!0):!1}(t,e):void de()}function II(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${$i(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(II).join(" ,")+"}"}(t):"Filter"}class aD extends ot{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class cD extends ot{constructor(e,n){super(e,"in",n),this.keys=bI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lD extends ot{constructor(e,n){super(e,"not-in",n),this.keys=bI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class uD extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ap(n)&&Ca(n.arrayValue,this.value)}}class hD extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ca(this.value.arrayValue,n)}}class fD extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ca(this.value.arrayValue,n)}}class dD extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ap(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ca(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function my(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pD(t,e,n,r,s,i,o)}function Cp(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>td(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$i(r)).join(",")),e.ue=n}return e.ue}function Sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gy(t.startAt,e.startAt)&&gy(t.endAt,e.endAt)}function nd(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gD(t,e,n,r,s,i,o,a){return new io(t,e,n,r,s,i,o,a)}function Su(t){return new io(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RI(t){return t.collectionGroup!==null}function ta(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(bt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Sa(i,r))}),n.has(bt.keyField().canonicalString())||e.ce.push(new Sa(bt.keyField(),r))}return e.ce}function Kn(t){const e=_e(t);return e.le||(e.le=mD(e,ta(t))),e.le}function mD(t,e){if(t.limitType==="F")return my(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Sa(s.field,i)});const n=t.endAt?new Ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ml(t.startAt.position,t.startAt.inclusive):null;return my(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rd(t,e){const n=t.filters.concat([e]);return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sd(t,e,n){return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pu(t,e){return Sp(Kn(t),Kn(e))&&t.limitType===e.limitType}function AI(t){return`${Cp(Kn(t))}|lt:${t.limitType}`}function gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>II(s)).join(", ")}]`),Au(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>$i(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>$i(s)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ta(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=py(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ta(r),s)||r.endAt&&!function(o,a,c){const u=py(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ta(r),s))}(t,e)}function _D(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CI(t){return(e,n)=>{let r=!1;for(const s of ta(t)){const i=yD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yD(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?ji(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new ut(ce.comparator);function Tr(){return vD}const SI=new ut(ce.comparator);function jo(...t){let e=SI;for(const n of t)e=e.insert(n.key,n);return e}function PI(t){let e=SI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ps(){return na()}function kI(){return na()}function na(){return new Zs(t=>t.toString(),(t,e)=>t.isEqual(e))}const ED=new ut(ce.comparator),TD=new gt(ce.comparator);function Ee(...t){let e=TD;for(const n of t)e=e.add(n);return e}const wD=new gt(we);function ID(){return wD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ll(e)?"-0":e}}function NI(t){return{integerValue:""+t}}function bD(t,e){return J1(e)?NI(e):Pp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this._=void 0}}function RD(t,e,n){return t instanceof Pa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Rp(i)&&(i=Cu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ka?DI(t,e):t instanceof Na?xI(t,e):function(s,i){const o=OI(s,i),a=yy(o)+yy(s.Pe);return ed(o)&&ed(s.Pe)?NI(a):Pp(s.serializer,a)}(t,e)}function AD(t,e,n){return t instanceof ka?DI(t,e):t instanceof Na?xI(t,e):n}function OI(t,e){return t instanceof Vl?function(r){return ed(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Pa extends Nu{}class ka extends Nu{constructor(e){super(),this.elements=e}}function DI(t,e){const n=LI(e);for(const r of t.elements)n.some(s=>Yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Na extends Nu{constructor(e){super(),this.elements=e}}function xI(t,e){let n=LI(e);for(const r of t.elements)n=n.filter(s=>!Yn(s,r));return{arrayValue:{values:n}}}class Vl extends Nu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yy(t){return st(t.integerValue||t.doubleValue)}function LI(t){return Ap(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.field=e,this.transform=n}}function SD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ka&&s instanceof ka||r instanceof Na&&s instanceof Na?Bi(r.elements,s.elements,Yn):r instanceof Vl&&s instanceof Vl?Yn(r.Pe,s.Pe):r instanceof Pa&&s instanceof Pa}(t.transform,e.transform)}class PD{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function MI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new FI(t.key,Pn.none()):new Ga(t.key,t.data,Pn.none());{const n=t.data,r=Jt.empty();let s=new gt(bt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new sn(s.toArray()),Pn.none())}}function kD(t,e,n){t instanceof Ga?function(s,i,o){const a=s.value.clone(),c=Ey(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,i,o){if(!rl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ey(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(VI(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ra(t,e,n,r){return t instanceof Ga?function(i,o,a,c){if(!rl(i.precondition,o))return a;const u=i.value.clone(),h=Ty(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ps?function(i,o,a,c){if(!rl(i.precondition,o))return a;const u=Ty(i.fieldTransforms,c,o),h=o.data;return h.setAll(VI(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return rl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ND(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=OI(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bi(r,s,(i,o)=>SD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends Ou{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends Ou{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function VI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ey(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,AD(o,a,n[s]))}return r}function Ty(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RD(i,o,e))}return r}class FI extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OD extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=MI(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Bi(this.mutations,e.mutations,(n,r)=>vy(n,r))&&Bi(this.baseMutations,e.baseMutations,(n,r)=>vy(n,r))}}class kp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return ED}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new kp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,be;function MD(t){switch(t){default:return de();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function UI(t){if(t===void 0)return Er("GRPC error has no .code"),j.UNKNOWN;switch(t){case it.OK:return j.OK;case it.CANCELLED:return j.CANCELLED;case it.UNKNOWN:return j.UNKNOWN;case it.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case it.INTERNAL:return j.INTERNAL;case it.UNAVAILABLE:return j.UNAVAILABLE;case it.UNAUTHENTICATED:return j.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case it.NOT_FOUND:return j.NOT_FOUND;case it.ALREADY_EXISTS:return j.ALREADY_EXISTS;case it.PERMISSION_DENIED:return j.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case it.ABORTED:return j.ABORTED;case it.OUT_OF_RANGE:return j.OUT_OF_RANGE;case it.UNIMPLEMENTED:return j.UNIMPLEMENTED;case it.DATA_LOSS:return j.DATA_LOSS;default:return de()}}(be=it||(it={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new Fs([4294967295,4294967295],0);function wy(t){const e=VD().encode(t),n=new cI;return n.update(e),new Uint8Array(n.digest())}function Iy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fs([n,r],0),new Fs([s,i],0)]}class Np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $o(`Invalid padding: ${n}`);if(r<0)throw new $o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $o(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Fs.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Fs.fromNumber(r)));return s.compare(FD)===1&&(s=new Fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=wy(e),[r,s]=Iy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Np(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=wy(e),[r,s]=Iy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Du(me.min(),s,new ut(we),Tr(),Ee())}}class za{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new za(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class BI{constructor(e,n){this.targetId=e,this.me=n}}class jI{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class by{constructor(){this.fe=0,this.ge=Ry(),this.pe=Rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new za(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ry()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class UD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tr(),this.qe=Vc(),this.Qe=Vc(),this.Ke=new ut(we)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(nd(i))if(r===0){const o=new ce(i.path);this.We(n,o,Lt.newNoDocument(o,me.min()))}else xe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ss(r).toUint8Array()}catch(c){if(c instanceof _I)return Ui("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Np(o,s,i)}catch(c){return Ui(c instanceof $o?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&nd(a.target)){const c=new ce(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Lt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Du(e,n,this.Ke,this.ke,r);return this.ke=Tr(),this.qe=Vc(),this.Qe=Vc(),this.Ke=new ut(we),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new by,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new gt(we),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(we),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new by),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Vc(){return new ut(ce.comparator)}function Ry(){return new ut(ce.comparator)}const BD={asc:"ASCENDING",desc:"DESCENDING"},jD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$D={and:"AND",or:"OR"};class HD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function id(t,e){return t.useProto3Json||Au(e)?e:{value:e}}function Fl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $I(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qD(t,e){return Fl(t,e.toTimestamp())}function Gn(t){return xe(!!t),me.fromTimestamp(function(n){const r=rs(n);return new ct(r.seconds,r.nanos)}(t))}function Op(t,e){return od(t,e).canonicalString()}function od(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HI(t){const e=We.fromString(t);return xe(zI(e)),e}function ad(t,e){return Op(t.databaseId,e.path)}function Hh(t,e){const n=HI(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(WI(n))}function qI(t,e){return Op(t.databaseId,e)}function WD(t){const e=HI(t);return e.length===4?We.emptyPath():WI(e)}function cd(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function WI(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ay(t,e,n){return{name:ad(t,e),fields:n.value.mapValue.fields}}function KD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string"),Rt.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Rt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:UI(u.code);return new ne(h,u.message||"")}(o);n=new jI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hh(t,r.document.name),i=Gn(r.document.updateTime),o=r.document.createTime?Gn(r.document.createTime):me.min(),a=new Jt({mapValue:{fields:r.document.fields}}),c=Lt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new sl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hh(t,r.document),i=r.readTime?Gn(r.readTime):me.min(),o=Lt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hh(t,r.document),i=r.removedTargetIds||[];n=new sl([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new LD(s,i),a=r.targetId;n=new BI(a,o)}}return n}function GD(t,e){let n;if(e instanceof Ga)n={update:Ay(t,e.key,e.value)};else if(e instanceof FI)n={delete:ad(t,e.key)};else if(e instanceof ps)n={update:Ay(t,e.key,e.data),updateMask:nx(e.fieldMask)};else{if(!(e instanceof OD))return de();n={verify:ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ka)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Na)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function zD(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Gn(s.updateTime):Gn(i);return o.isEqual(me.min())&&(o=Gn(i)),new PD(o,s.transformResults||[])}(n,e))):[]}function QD(t,e){return{documents:[qI(t,e.path)]}}function YD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qI(t,s);const i=function(u){if(u.length!==0)return GI(xn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:mi(p.field),direction:ZD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=id(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function XD(t){let e=WD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=KI(f);return p instanceof xn&&TI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(E){return new Sa(_i(E.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Au(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,m=f.values||[];return new Ml(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,m=f.values||[];return new Ml(m,p)}(n.endAt)),gD(e,s,o,i,a,"F",c,u)}function JD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_i(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_i(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(_i(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>KI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function ZD(t){return BD[t]}function ex(t){return jD[t]}function tx(t){return $D[t]}function mi(t){return{fieldPath:t.canonicalString()}}function _i(t){return bt.fromServerFormat(t.fieldPath)}function GI(t){return t instanceof ot?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(fy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(fy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:ex(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(s=>GI(s));return r.length===1?r[0]:{compositeFilter:{op:tx(n.op),filters:r}}}(t):de()}function nx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r,s,i=me.min(),o=me.min(),a=Rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.ht=e}}function sx(t){const e=XD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.ln=new ox}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ns.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class ox{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Hi(0)}static Qn(){return new Hi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class ax{constructor(e){this.Gn=e,this.buffer=new gt(Sy),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.Yn(3e5)})}}class lx{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Ru.oe);const r=new ax(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Cy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cy):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),pi()<=ve.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function ux(t,e){return new lx(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.changes=new Zs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ra(r.mutation,s,sn.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=jo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tr();const o=na(),a=function(){return na()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ps)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ra(h.mutation,u,h.mutation.getFieldMask(),ct.now())):o.set(u.key,sn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new fx(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=na();let s=new ut((o,a)=>o-a),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||sn.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(s.get(a.batchId)||Ee()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=kI();h.forEach(p=>{if(!i.has(p)){const m=MI(n.get(p),r.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Ps());let a=-1,c=i;return o.next(u=>$.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ee())).next(h=>({batchId:a,changes:PI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=jo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=jo();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,c=>{const u=function(f,p){return new io(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Lt.newInvalidDocument(h)))});let a=jo();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&ra(h.mutation,u,sn.empty(),ct.now()),ku(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Gn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:sx(s.bundledQuery),readTime:Gn(s.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this.overlays=new ut(ce.comparator),this.Er=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ps();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Ps(),i=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ut((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Ps(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return $.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xD(n,r));let i=this.Er.get(n);i===void 0&&(i=Ee(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.dr=new gt(yt.Ar),this.Rr=new gt(yt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new yt(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ce(new We([])),r=new yt(n,e),s=new yt(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ce(new We([])),r=new yt(n,e),s=new yt(n,e+1);let i=Ee();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new yt(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ce.comparator(e.key,n.key)||we(e.br,n.br)}static Vr(e,n){return we(e.br,n.br)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new gt(yt.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new yt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),s=new yt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(we);return n.forEach(s=>{const i=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new yt(new ce(i),0);let a=new gt(we);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.br)),!0)},o),$.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(n.mutations,s=>{const i=new yt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new yt(n,0),s=this.vr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.Nr=e,this.docs=function(){return new ut(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Lt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,a=new ce(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||z1(G1(h),r)<=0||(s.has(h.key)||ku(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Lr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vx(this)}getSize(e){return $.resolve(this.size)}}class vx extends hx{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.persistence=e,this.Br=new Zs(n=>Cp(n),Sp),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new Dp,this.targetCount=0,this.Qr=Hi.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ru(0),this.Ur=!1,this.Ur=!0,this.Wr=new mx,this.referenceDelegate=e(this),this.Gr=new Ex(this),this.indexManager=new ix,this.remoteDocumentCache=function(s){return new yx(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new rx(n),this.jr=new px(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new _x(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new Tx(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class Tx extends Y1{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.Zr=new Dp,this.Xr=null}static ei(e){return new xp(e)}get ti(){if(this.Xr)return this.Xr;throw de()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const s=ce.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ul{constructor(e,n){this.persistence=e,this.ri=new Zs(r=>Z1(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ux(this,n)}static ei(e,n){return new Ul(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,me.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=tl(e.data.value)),n}ir(e,n,r){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return _O()?8:X1(jt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wx;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(pi()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(pi()<=ve.DEBUG&&te("QueryEngine","Query:",gi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(pi()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):$.resolve())}Xi(e,n){if(_y(n))return $.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=sd(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,sd(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return _y(n)||s.isEqual(me.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?$.resolve(null):(pi()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gi(n)),this.os(e,o,n,K1(s,-1)).next(a=>a))})}rs(e,n){let r=new gt(CI(e));return n.forEach((s,i)=>{ku(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return pi()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",gi(n)),this.Zi.getDocumentsMatchingQuery(e,n,ns.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new ut(we),this.cs=new Zs(i=>Cp(i),Sp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dx(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function Rx(t,e,n,r){return new bx(t,e,n,r)}async function YI(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ee();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Ax(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let m=$.resolve();return p.forEach(E=>{m=m.next(()=>h.getEntry(c,E)).next(R=>{const S=u.docVersions.get(E);xe(S!==null),R.version.compareTo(S)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ee();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function XI(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function Cx(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Rt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(f,m),function(R,S,D){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,m,h)&&a.push(n.Gr.updateTargetData(i,m))});let c=Tr(),u=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Sx(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!r.isEqual(me.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(f=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function Sx(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function Px(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kx(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function ld(t,e,n){const r=_e(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!so(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Py(t,e,n){const r=_e(t);let s=me.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=_e(c),p=f.cs.get(h);return p!==void 0?$.resolve(f.us.get(p)):f.Gr.getTargetData(u,h)}(r,o,Kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:Ee())).next(a=>(Nx(r,_D(e),a),{documents:a,ds:i})))}function Nx(t,e,n){let r=t.ls.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class ky{constructor(){this.activeTargetIds=ID()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ox{constructor(){this._o=new ky,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc=null;function qh(){return Fc===null?Fc=function(){return 268435456+Math.round(2147483648*Math.random())}():Fc++,"0x"+Fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class Mx extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=qh(),c=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(h=>(te("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ui("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=xx[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=qh();return new Promise((o,a)=>{const c=new lI;c.setWithCredentials(!0),c.listenOnce(uI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case el.NO_ERROR:const h=c.getResponseJson();te(kt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case el.TIMEOUT:te(kt,`RPC '${e}' ${i} timed out`),a(new ne(j.DEADLINE_EXCEEDED,"Request time out"));break;case el.HTTP_ERROR:const f=c.getStatus();if(te(kt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const E=function(S){const D=S.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(D)>=0?D:j.UNKNOWN}(m.status);a(new ne(E,m.message))}else a(new ne(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ne(j.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{te(kt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(kt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=qh(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dI(),a=fI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");te(kt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,m=!1;const E=new Lx({Eo:S=>{m?te(kt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(p||(te(kt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),te(kt,`RPC '${e}' stream ${s} sending:`,S),f.send(S))},Ao:()=>f.close()}),R=(S,D,O)=>{S.listen(D,w=>{try{O(w)}catch(k){setTimeout(()=>{throw k},0)}})};return R(f,Bo.EventType.OPEN,()=>{m||(te(kt,`RPC '${e}' stream ${s} transport opened.`),E.So())}),R(f,Bo.EventType.CLOSE,()=>{m||(m=!0,te(kt,`RPC '${e}' stream ${s} transport closed`),E.Do())}),R(f,Bo.EventType.ERROR,S=>{m||(m=!0,Ui(kt,`RPC '${e}' stream ${s} transport errored:`,S),E.Do(new ne(j.UNAVAILABLE,"The operation could not be completed")))}),R(f,Bo.EventType.MESSAGE,S=>{var D;if(!m){const O=S.data[0];xe(!!O);const w=O,k=(w==null?void 0:w.error)||((D=w[0])===null||D===void 0?void 0:D.error);if(k){te(kt,`RPC '${e}' stream ${s} received error:`,k);const x=k.status;let L=function(_){const T=it[_];if(T!==void 0)return UI(T)}(x),I=k.message;L===void 0&&(L=j.INTERNAL,I="Unknown error status: "+x+" with message "+k.message),m=!0,E.Do(new ne(L,I)),f.close()}else te(kt,`RPC '${e}' stream ${s} received:`,O),E.vo(O)}}),R(a,hI.STAT_EVENT,S=>{S.stat===Xf.PROXY?te(kt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Xf.NOPROXY&&te(kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.bo()},0),E}}function Wh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t){return new HD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n,r,s,i,o,a,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new JI(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ne(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vx extends ZI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=KD(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?Gn(o.readTime):me.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=cd(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=nd(c)?{documents:QD(i,c)}:{query:YD(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$I(i,o.resumeToken);const u=id(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=Fl(i,o.snapshotVersion.toTimestamp());const u=id(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=JD(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=cd(this.serializer),n.removeTarget=e,this.c_(n)}}class Fx extends ZI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=zD(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=cd(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GD(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,od(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(j.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,od(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Bx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Er(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ei(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.k_.add(4),await Qa(u),u.K_.set("Unknown"),u.k_.delete(4),await Lu(u)}(this))})}),this.K_=new Bx(r,s)}}async function Lu(t){if(ei(t))for(const e of t.q_)await e(!0)}async function Qa(t){for(const e of t.q_)await e(!1)}function eb(t,e){const n=_e(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Up(n)?Fp(n):oo(n).s_()&&Vp(n,e))}function Mp(t,e){const n=_e(t),r=oo(n);n.B_.delete(e),r.s_()&&tb(n,e),n.B_.size===0&&(r.s_()?r.a_():ei(n)&&n.K_.set("Unknown"))}function Vp(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oo(t).V_(e)}function tb(t,e){t.U_.xe(e),oo(t).m_(e)}function Fp(t){t.U_=new UD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),oo(t).start(),t.K_.F_()}function Up(t){return ei(t)&&!oo(t).i_()&&t.B_.size>0}function ei(t){return _e(t).k_.size===0}function nb(t){t.U_=void 0}async function $x(t){t.K_.set("Online")}async function Hx(t){t.B_.forEach((e,n)=>{Vp(t,e)})}async function qx(t,e){nb(t),Up(t)?(t.K_.O_(e),Fp(t)):t.K_.set("Unknown")}async function Wx(t,e,n){if(t.K_.set("Online"),e instanceof jI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bl(t,r)}else if(e instanceof sl?t.U_.$e(e):e instanceof BI?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(me.min()))try{const r=await XI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(Rt.EMPTY_BYTE_STRING,h.snapshotVersion)),tb(i,c);const f=new Kr(h.target,c,u,h.sequenceNumber);Vp(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await Bl(t,r)}}async function Bl(t,e,n){if(!so(e))throw e;t.k_.add(1),await Qa(t),t.K_.set("Offline"),n||(n=()=>XI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Lu(t)})}function rb(t,e){return e().catch(n=>Bl(t,n,e))}async function Mu(t){const e=_e(t),n=os(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Kx(e);)try{const s=await Px(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,Gx(e,s)}catch(s){await Bl(e,s)}sb(e)&&ib(e)}function Kx(t){return ei(t)&&t.L_.length<10}function Gx(t,e){t.L_.push(e);const n=os(t);n.s_()&&n.f_&&n.g_(e.mutations)}function sb(t){return ei(t)&&!os(t).i_()&&t.L_.length>0}function ib(t){os(t).start()}async function zx(t){os(t).w_()}async function Qx(t){const e=os(t);for(const n of t.L_)e.g_(n.mutations)}async function Yx(t,e,n){const r=t.L_.shift(),s=kp.from(r,e,n);await rb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Mu(t)}async function Xx(t,e){e&&os(t).f_&&await async function(r,s){if(function(o){return MD(o)&&o!==j.ABORTED}(s.code)){const i=r.L_.shift();os(r).__(),await rb(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mu(r)}}(t,e),sb(t)&&ib(t)}async function Oy(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=ei(n);n.k_.add(3),await Qa(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Lu(n)}async function Jx(t,e){const n=_e(t);e?(n.k_.delete(2),await Lu(n)):e||(n.k_.add(2),await Qa(n),n.K_.set("Unknown"))}function oo(t){return t.W_||(t.W_=function(n,r,s){const i=_e(n);return i.b_(),new Vx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:$x.bind(null,t),mo:Hx.bind(null,t),po:qx.bind(null,t),R_:Wx.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Up(t)?Fp(t):t.K_.set("Unknown")):(await t.W_.stop(),nb(t))})),t.W_}function os(t){return t.G_||(t.G_=function(n,r,s){const i=_e(n);return i.b_(),new Fx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:zx.bind(null,t),po:Xx.bind(null,t),p_:Qx.bind(null,t),y_:Yx.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Mu(t)):(await t.G_.stop(),t.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Bp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jp(t,e){if(Er("AsyncQueue",`${e}: ${t}`),so(t))return new ne(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{static emptySet(e){return new Pi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=jo(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.z_=new ut(ce.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):de():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qi(e,n,Pi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class eL{constructor(){this.queries=xy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=xy(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(r)})})(this,new ne(j.ABORTED,"Firestore shutting down"))}}function xy(){return new Zs(t=>AI(t),Pu)}async function $p(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new Zx,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=jp(o,`Initialization of query '${gi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&qp(n)}async function Hp(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tL(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&qp(n)}function nL(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function qp(t){t.X_.forEach(e=>{e.next()})}var ud,Ly;(Ly=ud||(ud={})).na="default",Ly.Cache="cache";class Wp{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ud.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.key=e}}class ab{constructor(e){this.key=e}}class rL{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ee(),this.mutatedKeys=Ee(),this.Va=CI(e),this.ma=new Pi(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Dy,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),m=ku(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;p&&m?p.data.isEqual(m.data)?E!==R&&(r.track({type:3,doc:m}),S=!0):this.ya(p,m)||(r.track({type:2,doc:m}),S=!0,(c&&this.Va(m,c)>0||u&&this.Va(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),S=!0):p&&!m&&(r.track({type:1,doc:p}),S=!0,(c||u)&&(a=!0)),S&&(m?(o=o.add(m),i=R?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(m,E){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return R(m)-R(E)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new qi(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Dy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ee(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new ab(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new ob(r))}),n}va(e){this.da=e.ds,this.Ra=Ee();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return qi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class sL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iL{constructor(e){this.key=e,this.Fa=!1}}class oL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Zs(a=>AI(a),Pu),this.Oa=new Map,this.Na=new Set,this.La=new ut(ce.comparator),this.Ba=new Map,this.ka=new Dp,this.qa={},this.Qa=new Map,this.Ka=Hi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function aL(t,e,n=!0){const r=db(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await cb(r,e,n,!0),s}async function cL(t,e){const n=db(t);await cb(n,e,!0,!1)}async function cb(t,e,n,r){const s=await kx(t.localStore,Kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await lL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&eb(t.remoteStore,s),a}async function lL(t,e,n,r,s){t.Ua=(f,p,m)=>async function(R,S,D,O){let w=S.view.ga(D);w.ss&&(w=await Py(R.localStore,S.query,!1).then(({documents:I})=>S.view.ga(I,w)));const k=O&&O.targetChanges.get(S.targetId),x=O&&O.targetMismatches.get(S.targetId)!=null,L=S.view.applyChanges(w,R.isPrimaryClient,k,x);return Vy(R,S.targetId,L.ba),L.snapshot}(t,f,p,m);const i=await Py(t.localStore,e,!0),o=new rL(e,i.ds),a=o.ga(i.documents),c=za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);Vy(t,n,u.ba);const h=new sL(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function uL(t,e,n){const r=_e(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Pu(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ld(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Mp(r.remoteStore,s.targetId),hd(r,s.targetId)}).catch(ro)):(hd(r,s.targetId),await ld(r.localStore,s.targetId,!0))}async function hL(t,e){const n=_e(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mp(n.remoteStore,r.targetId))}async function fL(t,e,n){const r=vL(t);try{const s=await function(o,a){const c=_e(o),u=ct.now(),h=a.reduce((m,E)=>m.add(E.key),Ee());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=Tr(),R=Ee();return c.hs.getEntries(m,h).next(S=>{E=S,E.forEach((D,O)=>{O.isValidDocument()||(R=R.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,E)).next(S=>{f=S;const D=[];for(const O of a){const w=ND(O,f.get(O.key).overlayedDocument);w!=null&&D.push(new ps(O.key,w,yI(w.value.mapValue),Pn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,D,a)}).next(S=>{p=S;const D=S.applyToLocalDocumentSet(f,R);return c.documentOverlayCache.saveOverlays(m,S.batchId,D)})}).then(()=>({batchId:p.batchId,changes:PI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new ut(we)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ya(r,s.changes),await Mu(r.remoteStore)}catch(s){const i=jp(s,"Failed to persist write");n.reject(i)}}async function lb(t,e){const n=_e(t);try{const r=await Cx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?xe(o.Fa):s.removedDocuments.size>0&&(xe(o.Fa),o.Fa=!1))}),await Ya(n,r,e)}catch(r){await ro(r)}}function My(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.J_)p.ea(a)&&(u=!0)}),u&&qp(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dL(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new ut(ce.comparator);o=o.insert(i,Lt.newNoDocument(i,me.min()));const a=Ee().add(i),c=new Du(me.min(),new Map,new ut(we),o,a);await lb(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Kp(r)}else await ld(r.localStore,e,!1).then(()=>hd(r,e,n)).catch(ro)}async function pL(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await Ax(n.localStore,e);hb(n,r,null),ub(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ya(n,s)}catch(s){await ro(s)}}async function gL(t,e,n){const r=_e(t);try{const s=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(xe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);hb(r,e,n),ub(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ya(r,s)}catch(s){await ro(s)}}function ub(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function hb(t,e,n){const r=_e(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||fb(t,r)})}function fb(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Mp(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Kp(t))}function Vy(t,e,n){for(const r of n)r instanceof ob?(t.ka.addReference(r.key,e),mL(t,r)):r instanceof ab?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||fb(t,r.key)):de()}function mL(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),Kp(t))}function Kp(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ce(We.fromString(e)),r=t.Ka.next();t.Ba.set(r,new iL(n)),t.La=t.La.insert(n,r),eb(t.remoteStore,new Kr(Kn(Su(n.path)),r,"TargetPurposeLimboResolution",Ru.oe))}}async function Ya(t,e,n){const r=_e(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,c)=>{o.push(r.Ua(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Lp.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const h=_e(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,p=>$.forEach(p.Wi,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>$.forEach(p.Gi,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!so(f))throw f;te("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.us.get(p),E=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(E);h.us=h.us.insert(p,R)}}}(r.localStore,i))}async function _L(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await YI(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new ne(j.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ya(n,r.Ts)}}function yL(t,e){const n=_e(t),r=n.Ba.get(e);if(r&&r.Fa)return Ee().add(r.key);{let s=Ee();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function db(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dL.bind(null,e),e.Ma.R_=tL.bind(null,e.eventManager),e.Ma.Wa=nL.bind(null,e.eventManager),e}function vL(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gL.bind(null,e),e}class jl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return Rx(this.persistence,new Ix,e.initialUser,this.serializer)}ja(e){return new QI(xp.ei,this.serializer)}za(e){return new Ox}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jl.provider={build:()=>new jl};class EL extends jl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){xe(this.persistence.referenceDelegate instanceof Ul);const r=this.persistence.referenceDelegate.garbageCollector;return new cx(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new QI(r=>Ul.ei(r,n),this.serializer)}}class fd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_L.bind(null,this.syncEngine),await Jx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eL}()}createDatastore(e){const n=xu(e.databaseInfo.databaseId),r=function(i){return new Mx(i)}(e.databaseInfo);return function(i,o,a,c){return new Ux(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new jx(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>My(this.syncEngine,n,0),function(){return Ny.p()?new Ny:new Dx}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,h){const f=new oL(s,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Qa(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}fd.provider={build:()=>new fd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=gI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await YI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wL(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Oy(e.remoteStore,s)),t._onlineComponents=e}async function wL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new jl)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new EL(void 0));return t._offlineComponents}async function pb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Fy(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Fy(t,new fd))),t._onlineComponents}function IL(t){return pb(t).then(e=>e.syncEngine)}async function $l(t){const e=await pb(t),n=e.eventManager;return n.onListen=aL.bind(null,e.syncEngine),n.onUnlisten=uL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hL.bind(null,e.syncEngine),n}function bL(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Gp({next:p=>{h.eu(),o.enqueueAndForget(()=>Hp(i,f));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new ne(j.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?u.reject(new ne(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new Wp(Su(a.path),h,{includeMetadataChanges:!0,ua:!0});return $p(i,f)}(await $l(t),t.asyncQueue,e,n,r)),r.promise}function RL(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Gp({next:p=>{h.eu(),o.enqueueAndForget(()=>Hp(i,f)),p.fromCache&&c.source==="server"?u.reject(new ne(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new Wp(a,h,{includeMetadataChanges:!0,ua:!0});return $p(i,f)}(await $l(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t,e,n){if(!n)throw new ne(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AL(t,e,n,r){if(e===!0&&r===!0)throw new ne(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function By(t){if(!ce.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jy(t){if(ce.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vu(t);throw new ne(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new V1;switch(r.type){case"firstParty":return new j1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uy.get(n);r&&(te("ComponentProvider","Removing Datastore"),Uy.delete(n),r.terminate())}(this),Promise.resolve()}}function CL(t,e,n,r={}){var s;const i=(t=cn(t,Fu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Nt.MOCK_USER;else{a=Jw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Nt(u)}t._authCredentials=new F1(new pI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Zr extends gs{constructor(e,n,r){super(e,n,Su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ce(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function r9(t,e,...n){if(t=tt(t),mb("collection","path",e),t instanceof Fu){const r=We.fromString(e,...n);return jy(r),new Zr(t,null,r)}{if(!(t instanceof Bt||t instanceof Zr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return jy(r),new Zr(t.firestore,null,r)}}function SL(t,e,...n){if(t=tt(t),arguments.length===1&&(e=gI.newId()),mb("doc","path",e),t instanceof Fu){const r=We.fromString(e,...n);return By(r),new Bt(t,null,new ce(r))}{if(!(t instanceof Bt||t instanceof Zr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return By(r),new Bt(t.firestore,t instanceof Zr?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new JI(this,"async_queue_retry"),this.fu=()=>{const r=Wh();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Wh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new gr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!so(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Er("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Bp.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&de()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function qy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class as extends Fu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Hy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hy(e),this._firestoreClient=void 0,await e}}}function PL(t,e){const n=typeof t=="object"?t:Ip(),r=typeof t=="string"?t:"(default)",s=wp(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Yw("firestore");i&&CL(s,...i)}return s}function Uu(t){if(t._terminated)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kL(t),t._firestoreClient}function kL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,h){return new nD(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,gb(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new TL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(Rt.fromBase64String(e))}catch(n){throw new ne(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=/^__.*__$/;class OL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}class _b{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Qp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Hl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(yb(this.Mu)&&NL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class DL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xu(e)}$u(e,n,r,s=!1){return new Qp({Mu:e,methodName:n,Ku:r,path:bt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hu(t){const e=t._freezeSettings(),n=xu(t._databaseId);return new DL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vb(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Xp("Data must be an object, but it was:",o,r);const a=Eb(r,o);let c,u;if(i.merge)c=new sn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=dd(e,f,n);if(!o.contains(p))throw new ne(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);wb(h,p)||h.push(p)}c=new sn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new OL(new Jt(a),c,u)}class qu extends ju{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qu}}class Yp extends ju{_toFieldTransform(e){return new CD(e.path,new Pa)}isEqual(e){return e instanceof Yp}}function xL(t,e,n,r){const s=t.$u(1,e,n);Xp("Data must be an object, but it was:",s,r);const i=[],o=Jt.empty();ds(r,(c,u)=>{const h=Jp(e,c,n);u=tt(u);const f=s.Bu(h);if(u instanceof qu)i.push(h);else{const p=Xa(u,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new sn(i);return new _b(o,a,s.fieldTransforms)}function LL(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[dd(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(dd(e,i[p])),c.push(i[p+1]);const u=[],h=Jt.empty();for(let p=a.length-1;p>=0;--p)if(!wb(u,a[p])){const m=a[p];let E=c[p];E=tt(E);const R=o.Bu(m);if(E instanceof qu)u.push(m);else{const S=Xa(E,R);S!=null&&(u.push(m),h.set(m,S))}}const f=new sn(u);return new _b(h,f,o.fieldTransforms)}function ML(t,e,n,r=!1){return Xa(n,t.$u(r?4:3,e))}function Xa(t,e){if(Tb(t=tt(t)))return Xp("Unsupported field value:",e,t),Eb(t,e);if(t instanceof ju)return function(r,s){if(!yb(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Xa(a,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:Fl(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fl(s.serializer,i)}}if(r instanceof $u)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wi)return{bytesValue:$I(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Op(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zp)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Pp(a.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Vu(r)}`)}(t,e)}function Eb(t,e){const n={};return mI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,s)=>{const i=Xa(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof $u||t instanceof Wi||t instanceof Bt||t instanceof ju||t instanceof zp)}function Xp(t,e,n){if(!Tb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Vu(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function dd(t,e,n){if((e=tt(e))instanceof Bu)return e._internalPath;if(typeof e=="string")return Jp(t,e);throw Hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const VL=new RegExp("[~\\*/\\[\\]]");function Jp(t,e,n){if(e.search(VL)>=0)throw Hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bu(...e.split("."))._internalPath}catch{throw Hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(j.INVALID_ARGUMENT,a+t+c)}function wb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FL extends Ib{data(){return super.data()}}function Wu(t,e){return typeof e=="string"?Jp(t,e):e instanceof Bu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zp{}class Rb extends Zp{}function s9(t,e,...n){let r=[];e instanceof Zp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof eg).length,a=i.filter(c=>c instanceof Ku).length;if(o>1||o>0&&a>0)throw new ne(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ku extends Rb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ku(e,n,r)}_apply(e){const n=this._parse(e);return Ab(e._query,n),new gs(e.firestore,e.converter,rd(e._query,n))}_parse(e){const n=Hu(e.firestore);return function(i,o,a,c,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ne(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ky(f,h);const m=[];for(const E of f)m.push(Wy(c,i,E));p={arrayValue:{values:m}}}else p=Wy(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ky(f,h),p=ML(a,o,f,h==="in"||h==="not-in");return ot.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function i9(t,e,n){const r=e,s=Wu("where",t);return Ku._create(s,r,n)}class eg extends Zp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new eg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Ab(o,c),o=rd(o,c)}(e._query,n),new gs(e.firestore,e.converter,rd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tg extends Rb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tg(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Sa(i,o)}(e._query,this._field,this._direction);return new gs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new io(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function o9(t,e="asc"){const n=e,r=Wu("orderBy",t);return tg._create(r,n)}function Wy(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new ne(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RI(e)&&n.indexOf("/")!==-1)throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!ce.isDocumentKey(r))throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hy(t,new ce(r))}if(n instanceof Bt)return hy(t,n._key);throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vu(n)}.`)}function Ky(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ab(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class UL{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>st(o.doubleValue));return new zp(i)}convertGeoPoint(e){return new $u(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=rs(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);xe(zI(r));const s=new Aa(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||Er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sb extends Ib{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class il extends Sb{data(e={}){return super.data(e)}}class Pb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ho(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new il(this._firestore,this._userDataWriter,r.key,r,new Ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new il(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new il(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:BL(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a9(t){t=cn(t,Bt);const e=cn(t.firestore,as);return bL(Uu(e),t._key).then(n=>kb(e,t,n))}class ng extends UL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function c9(t){t=cn(t,gs);const e=cn(t.firestore,as),n=Uu(e),r=new ng(e);return bb(t._query),RL(n,t._query).then(s=>new Pb(e,r,t,s))}function l9(t,e,n){t=cn(t,Bt);const r=cn(t.firestore,as),s=Cb(t.converter,e,n);return rg(r,[vb(Hu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pn.none())])}function u9(t,e,n,...r){t=cn(t,Bt);const s=cn(t.firestore,as),i=Hu(s);let o;return o=typeof(e=tt(e))=="string"||e instanceof Bu?LL(i,"updateDoc",t._key,e,n,r):xL(i,"updateDoc",t._key,e),rg(s,[o.toMutation(t._key,Pn.exists(!0))])}function h9(t,e){const n=cn(t.firestore,as),r=SL(t),s=Cb(t.converter,e);return rg(n,[vb(Hu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Pn.exists(!1))]).then(()=>r)}function f9(t,...e){var n,r,s;t=tt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||qy(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(qy(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let c,u,h;if(t instanceof Bt)u=cn(t.firestore,as),h=Su(t._key.path),c={next:f=>{e[o]&&e[o](kb(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=cn(t,gs);u=cn(f.firestore,as),h=f._query;const p=new ng(u);c={next:m=>{e[o]&&e[o](new Pb(u,p,f,m))},error:e[o+1],complete:e[o+2]},bb(t._query)}return function(p,m,E,R){const S=new Gp(R),D=new Wp(m,S,E);return p.asyncQueue.enqueueAndForget(async()=>$p(await $l(p),D)),()=>{S.eu(),p.asyncQueue.enqueueAndForget(async()=>Hp(await $l(p),D))}}(Uu(u),h,a,c)}function rg(t,e){return function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget(async()=>fL(await IL(r),s,i)),i.promise}(Uu(t),e)}function kb(t,e,n){const r=n.docs.get(e._key),s=new ng(t);return new Sb(t,s,e._key,r,new Ho(n.hasPendingWrites,n.fromCache),e.converter)}function d9(){return new Yp("serverTimestamp")}(function(e,n=!0){(function(s){no=s})(fs),Qn(new Dn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new as(new U1(r.getProvider("auth-internal")),new H1(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),an(iy,"4.7.5",e),an(iy,"4.7.5","esm2017")})();const jL=Iw(()=>{Zo("FirebaseTimestamp",t=>ga(new ct(t.seconds,t.nanoseconds))),Zo("FirebaseGeoPoint",t=>ga(new $u(t.latitude,t.longitude))),Zo("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),$L=[["NuxtError",t=>Eu(t)],["EmptyShallowRef",t=>ma(t==="_"?void 0:t==="0n"?BigInt(0):Il(t))],["EmptyRef",t=>_n(t==="_"?void 0:t==="0n"?BigInt(0):Il(t))],["ShallowRef",t=>ma(t)],["ShallowReactive",t=>lr(t)],["Ref",t=>_n(t)],["Reactive",t=>Xn(t)]],HL=zt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of $L)Zo(r,s);Object.assign(t.payload,([e,n]=Vs(()=>t.runWithContext(tO)),e=await e,n(),e)),window.__NUXT__=t.payload}}),qL=[],WL=zt({name:"nuxt:head",enforce:"pre",setup(t){const e=YN({plugins:qL});XN(()=>Je().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Bw(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const yi=typeof document<"u";function Nb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function KL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Nb(t.default)}const Ne=Object.assign;function Gh(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ln(s)?s.map(t):t(s)}return n}const sa=()=>{},Ln=Array.isArray,Ob=/#/g,GL=/&/g,zL=/\//g,QL=/=/g,YL=/\?/g,Db=/\+/g,XL=/%5B/g,JL=/%5D/g,xb=/%5E/g,ZL=/%60/g,Lb=/%7B/g,eM=/%7C/g,Mb=/%7D/g,tM=/%20/g;function sg(t){return encodeURI(""+t).replace(eM,"|").replace(XL,"[").replace(JL,"]")}function nM(t){return sg(t).replace(Lb,"{").replace(Mb,"}").replace(xb,"^")}function pd(t){return sg(t).replace(Db,"%2B").replace(tM,"+").replace(Ob,"%23").replace(GL,"%26").replace(ZL,"`").replace(Lb,"{").replace(Mb,"}").replace(xb,"^")}function rM(t){return pd(t).replace(QL,"%3D")}function sM(t){return sg(t).replace(Ob,"%23").replace(YL,"%3F")}function iM(t){return t==null?"":sM(t).replace(zL,"%2F")}function Oa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const oM=/\/$/,aM=t=>t.replace(oM,"");function zh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=hM(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Oa(o)}}function cM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lM(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ki(e.matched[r],n.matched[s])&&Vb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ki(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uM(t[n],e[n]))return!1;return!0}function uM(t,e){return Ln(t)?zy(t,e):Ln(e)?zy(e,t):t===e}function zy(t,e){return Ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Da;(function(t){t.pop="pop",t.push="push"})(Da||(Da={}));var ia;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ia||(ia={}));function fM(t){if(!t)if(yi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aM(t)}const dM=/^[^#]+#/;function pM(t,e){return t.replace(dM,"#")+e}function gM(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Gu=()=>({left:window.scrollX,top:window.scrollY});function mM(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gM(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Qy(t,e){return(history.state?history.state.position-e:-1)+t}const gd=new Map;function _M(t,e){gd.set(t,e)}function yM(t){const e=gd.get(t);return gd.delete(t),e}let vM=()=>location.protocol+"//"+location.host;function Fb(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Gy(c,"")}return Gy(n,t)+r+s}function EM(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Fb(t,location),E=n.value,R=e.value;let S=0;if(p){if(n.value=m,e.value=p,o&&o===E){o=null;return}S=R?p.position-R.position:0}else r(m);s.forEach(D=>{D(n.value,E,{delta:S,type:Da.pop,direction:S?S>0?ia.forward:ia.back:ia.unknown})})};function c(){o=n.value}function u(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Ne({},p.state,{scroll:Gu()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Yy(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Gu():null}}function TM(t){const{history:e,location:n}=window,r={value:Fb(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:vM()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(c,u){const h=Ne({},e.state,Yy(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function a(c,u){const h=Ne({},s.value,e.state,{forward:c,scroll:Gu()});i(h.current,h,!0);const f=Ne({},Yy(r.value,c,null),{position:h.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ub(t){t=fM(t);const e=TM(t),n=EM(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:pM.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wM(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Ub(t)}function IM(t){return typeof t=="string"||t&&typeof t=="object"}function Bb(t){return typeof t=="string"||typeof t=="symbol"}const jb=Symbol("");var Xy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xy||(Xy={}));function Gi(t,e){return Ne(new Error,{type:t,[jb]:!0},e)}function sr(t,e){return t instanceof Error&&jb in t&&(e==null||!!(t.type&e))}const Jy="[^/]+?",bM={sensitive:!1,strict:!1,start:!0,end:!0},RM=/[.+*?^${}()[\]/\\]/g;function AM(t,e){const n=Ne({},bM,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(RM,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:R,optional:S,regexp:D}=p;i.push({name:E,repeatable:R,optional:S});const O=D||Jy;if(O!==Jy){m+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${O}): `+k.message)}}let w=R?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(w=S&&u.length<2?`(?:/${w})`:"/"+w),S&&(w+="?"),s+=w,m+=20,S&&(m+=-8),R&&(m+=-20),O===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",E=i[p-1];f[E.name]=m&&E.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:E,repeatable:R,optional:S}=m,D=E in u?u[E]:"";if(Ln(D)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const O=Ln(D)?D.join("/"):D;if(!O)if(S)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);h+=O}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function CM(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $b(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=CM(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Zy(r))return 1;if(Zy(s))return-1}return s.length-r.length}function Zy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const SM={type:0,value:""},PM=/[a-zA-Z0-9_]/;function kM(t){if(!t)return[[]];if(t==="/")return[[SM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:PM.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function NM(t,e,n){const r=AM(kM(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function OM(t,e){const n=[],r=new Map;e=rv({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const E=!m,R=tv(f);R.aliasOf=m&&m.record;const S=rv(e,f),D=[R];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of k)D.push(tv(Ne({},R,{components:m?m.record.components:R.components,path:x,aliasOf:m?m.record:R})))}let O,w;for(const k of D){const{path:x}=k;if(p&&x[0]!=="/"){const L=p.record.path,I=L[L.length-1]==="/"?"":"/";k.path=p.record.path+(x&&I+x)}if(O=NM(k,p,S),m?m.alias.push(O):(w=w||O,w!==O&&w.alias.push(O),E&&f.name&&!nv(O)&&o(f.name)),Hb(O)&&c(O),R.children){const L=R.children;for(let I=0;I<L.length;I++)i(L[I],O,m&&m.children[I])}m=m||O}return w?()=>{o(w)}:sa}function o(f){if(Bb(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=LM(f,n);n.splice(p,0,f),f.record.name&&!nv(f)&&r.set(f.record.name,f)}function u(f,p){let m,E={},R,S;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Gi(1,{location:f});S=m.record.name,E=Ne(ev(p.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),f.params&&ev(f.params,m.keys.map(w=>w.name))),R=m.stringify(E)}else if(f.path!=null)R=f.path,m=n.find(w=>w.re.test(R)),m&&(E=m.parse(R),S=m.record.name);else{if(m=p.name?r.get(p.name):n.find(w=>w.re.test(p.path)),!m)throw Gi(1,{location:f,currentLocation:p});S=m.record.name,E=Ne({},p.params,f.params),R=m.stringify(E)}const D=[];let O=m;for(;O;)D.unshift(O.record),O=O.parent;return{name:S,path:R,params:E,matched:D,meta:xM(D)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function ev(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function tv(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:DM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function DM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function nv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xM(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function rv(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function LM(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$b(t,e[i])<0?r=i:n=i+1}const s=MM(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function MM(t){let e=t;for(;e=e.parent;)if(Hb(e)&&$b(t,e)===0)return e}function Hb({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function VM(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Db," "),o=i.indexOf("="),a=Oa(o<0?i:i.slice(0,o)),c=o<0?null:Oa(i.slice(o+1));if(a in e){let u=e[a];Ln(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function sv(t){let e="";for(let n in t){const r=t[n];if(n=rM(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ln(r)?r.map(i=>i&&pd(i)):[r&&pd(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FM(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const UM=Symbol(""),iv=Symbol(""),zu=Symbol(""),ig=Symbol(""),md=Symbol("");function Co(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Br(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Gi(4,{from:n,to:e})):p instanceof Error?c(p):IM(p)?c(Gi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Qh(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Nb(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Br(h,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=KL(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Br(m,n,r,o,a,s)()}))}}return i}function ov(t){const e=at(zu),n=at(ig),r=rn(()=>{const c=Be(t.to);return e.resolve(c)}),s=rn(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(Ki.bind(null,h));if(p>-1)return p;const m=av(c[u-2]);return u>1&&av(h)===m&&f[f.length-1].path!==m?f.findIndex(Ki.bind(null,c[u-2])):p}),i=rn(()=>s.value>-1&&qM(n.params,r.value.params)),o=rn(()=>s.value>-1&&s.value===n.matched.length-1&&Vb(n.params,r.value.params));function a(c={}){if(HM(c)){const u=e[Be(t.replace)?"replace":"push"](Be(t.to)).catch(sa);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:rn(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function BM(t){return t.length===1?t[0]:t}const jM=br({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ov,setup(t,{slots:e}){const n=Xn(ov(t)),{options:r}=at(zu),s=rn(()=>({[cv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&BM(e.default(n));return t.custom?i:Ft("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$M=jM;function HM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qM(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function av(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cv=(t,e,n)=>t??e??n,WM=br({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=at(md),s=rn(()=>t.route||r.value),i=at(iv,0),o=rn(()=>{let u=Be(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=rn(()=>s.value.matched[o.value]);xs(iv,rn(()=>o.value+1)),xs(UM,a),xs(md,s);const c=_n();return Ls(()=>[c.value,a.value,t.name],([u,h,f],[p,m,E])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Ki(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return lv(n.default,{Component:p,route:u});const m=f.props[h],E=m?m===!0?u.params:typeof m=="function"?m(u):m:null,S=Ft(p,Ne({},E,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return lv(n.default,{Component:S,route:u})||S}}});function lv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qb=WM;function KM(t){const e=OM(t.routes,t),n=t.parseQuery||VM,r=t.stringifyQuery||sv,s=t.history,i=Co(),o=Co(),a=Co(),c=ma(bn);let u=bn;yi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Gh.bind(null,B=>""+B),f=Gh.bind(null,iM),p=Gh.bind(null,Oa);function m(B,ee){let X,se;return Bb(B)?(X=e.getRecordMatcher(B),se=ee):se=B,e.addRoute(se,X)}function E(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function R(){return e.getRoutes().map(B=>B.record)}function S(B){return!!e.getRecordMatcher(B)}function D(B,ee){if(ee=Ne({},ee||c.value),typeof B=="string"){const N=zh(n,B,ee.path),V=e.resolve({path:N.path},ee),H=s.createHref(N.fullPath);return Ne(N,V,{params:p(V.params),hash:Oa(N.hash),redirectedFrom:void 0,href:H})}let X;if(B.path!=null)X=Ne({},B,{path:zh(n,B.path,ee.path).path});else{const N=Ne({},B.params);for(const V in N)N[V]==null&&delete N[V];X=Ne({},B,{params:f(N)}),ee.params=f(ee.params)}const se=e.resolve(X,ee),Te=B.hash||"";se.params=h(p(se.params));const Le=cM(r,Ne({},B,{hash:nM(Te),path:se.path})),A=s.createHref(Le);return Ne({fullPath:Le,hash:Te,query:r===sv?FM(B.query):B.query||{}},se,{redirectedFrom:void 0,href:A})}function O(B){return typeof B=="string"?zh(n,B,c.value.path):Ne({},B)}function w(B,ee){if(u!==B)return Gi(8,{from:ee,to:B})}function k(B){return I(B)}function x(B){return k(Ne(O(B),{replace:!0}))}function L(B){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let se=typeof X=="function"?X(B):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=O(se):{path:se},se.params={}),Ne({query:B.query,hash:B.hash,params:se.path!=null?{}:B.params},se)}}function I(B,ee){const X=u=D(B),se=c.value,Te=B.state,Le=B.force,A=B.replace===!0,N=L(X);if(N)return I(Ne(O(N),{state:typeof N=="object"?Ne({},Te,N.state):Te,force:Le,replace:A}),ee||X);const V=X;V.redirectedFrom=ee;let H;return!Le&&lM(r,se,X)&&(H=Gi(16,{to:V,from:se}),un(se,se,!0,!1)),(H?Promise.resolve(H):T(V,se)).catch(U=>sr(U)?sr(U,2)?U:wn(U):re(U,V,se)).then(U=>{if(U){if(sr(U,2))return I(Ne({replace:A},O(U.to),{state:typeof U.to=="object"?Ne({},Te,U.to.state):Te,force:Le}),ee||V)}else U=C(V,se,!0,A,Te);return P(V,se,U),U})}function y(B,ee){const X=w(B,ee);return X?Promise.reject(X):Promise.resolve()}function _(B){const ee=Sr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function T(B,ee){let X;const[se,Te,Le]=GM(B,ee);X=Qh(se.reverse(),"beforeRouteLeave",B,ee);for(const N of se)N.leaveGuards.forEach(V=>{X.push(Br(V,B,ee))});const A=y.bind(null,B,ee);return X.push(A),Qt(X).then(()=>{X=[];for(const N of i.list())X.push(Br(N,B,ee));return X.push(A),Qt(X)}).then(()=>{X=Qh(Te,"beforeRouteUpdate",B,ee);for(const N of Te)N.updateGuards.forEach(V=>{X.push(Br(V,B,ee))});return X.push(A),Qt(X)}).then(()=>{X=[];for(const N of Le)if(N.beforeEnter)if(Ln(N.beforeEnter))for(const V of N.beforeEnter)X.push(Br(V,B,ee));else X.push(Br(N.beforeEnter,B,ee));return X.push(A),Qt(X)}).then(()=>(B.matched.forEach(N=>N.enterCallbacks={}),X=Qh(Le,"beforeRouteEnter",B,ee,_),X.push(A),Qt(X))).then(()=>{X=[];for(const N of o.list())X.push(Br(N,B,ee));return X.push(A),Qt(X)}).catch(N=>sr(N,8)?N:Promise.reject(N))}function P(B,ee,X){a.list().forEach(se=>_(()=>se(B,ee,X)))}function C(B,ee,X,se,Te){const Le=w(B,ee);if(Le)return Le;const A=ee===bn,N=yi?history.state:{};X&&(se||A?s.replace(B.fullPath,Ne({scroll:A&&N&&N.scroll},Te)):s.push(B.fullPath,Te)),c.value=B,un(B,ee,X,A),wn()}let b;function pe(){b||(b=s.listen((B,ee,X)=>{if(!Vn.listening)return;const se=D(B),Te=L(se);if(Te){I(Ne(Te,{replace:!0,force:!0}),se).catch(sa);return}u=se;const Le=c.value;yi&&_M(Qy(Le.fullPath,X.delta),Gu()),T(se,Le).catch(A=>sr(A,12)?A:sr(A,2)?(I(Ne(O(A.to),{force:!0}),se).then(N=>{sr(N,20)&&!X.delta&&X.type===Da.pop&&s.go(-1,!1)}).catch(sa),Promise.reject()):(X.delta&&s.go(-X.delta,!1),re(A,se,Le))).then(A=>{A=A||C(se,Le,!1),A&&(X.delta&&!sr(A,8)?s.go(-X.delta,!1):X.type===Da.pop&&sr(A,20)&&s.go(-1,!1)),P(se,Le,A)}).catch(sa)}))}let ye=Co(),Z=Co(),ie;function re(B,ee,X){wn(B);const se=Z.list();return se.length?se.forEach(Te=>Te(B,ee,X)):console.error(B),Promise.reject(B)}function ze(){return ie&&c.value!==bn?Promise.resolve():new Promise((B,ee)=>{ye.add([B,ee])})}function wn(B){return ie||(ie=!B,pe(),ye.list().forEach(([ee,X])=>B?X(B):ee()),ye.reset()),B}function un(B,ee,X,se){const{scrollBehavior:Te}=t;if(!yi||!Te)return Promise.resolve();const Le=!X&&yM(Qy(B.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Xs().then(()=>Te(B,ee,Le)).then(A=>A&&mM(A)).catch(A=>re(A,B,ee))}const Qe=B=>s.go(B);let Ye;const Sr=new Set,Vn={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:R,resolve:D,options:t,push:k,replace:x,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:ze,install(B){const ee=this;B.component("RouterLink",$M),B.component("RouterView",qb),B.config.globalProperties.$router=ee,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(c)}),yi&&!Ye&&c.value===bn&&(Ye=!0,k(s.location).catch(Te=>{}));const X={};for(const Te in bn)Object.defineProperty(X,Te,{get:()=>c.value[Te],enumerable:!0});B.provide(zu,ee),B.provide(ig,lr(X)),B.provide(md,c);const se=B.unmount;Sr.add(B),B.unmount=function(){Sr.delete(B),Sr.size<1&&(u=bn,b&&b(),b=null,c.value=bn,Ye=!1,ie=!1),se()}}};function Qt(B){return B.reduce((ee,X)=>ee.then(()=>_(X)),Promise.resolve())}return Vn}function GM(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ki(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ki(u,c))||s.push(c))}return[n,r,s]}function p9(){return at(zu)}function zM(t){return at(ig)}const QM=/(:\w+)\([^)]+\)/g,YM=/(:\w+)[?+*]/g,XM=/:\w+/g,JM=(t,e)=>e.path.replace(QM,"$1").replace(YM,"$1").replace(XM,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),_d=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&JM(t.route,n));return typeof r=="function"?r(t.route):r},ZM=(t,e)=>({default:()=>t?Ft(zC,t===!0?{}:t,e):e});function og(t){return Array.isArray(t)?t:[t]}const eV="modulepreload",tV=function(t,e){return new URL(t,e).href},uv={},Bn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=tV(u,r),u in uv)return;uv[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!r)for(let E=o.length-1;E>=0;E--){const R=o[E];if(R.href===u&&(!h||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":eV,h||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),h)return new Promise((E,R)=>{m.addEventListener("load",E),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},nV={layout:"auth"},rV={layout:"auth"},sV={layout:"auth"},Yh=[{name:"Chat",path:"/Chat",component:()=>Bn(()=>import("./CZ_4f2Pc.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>Bn(()=>import("./CBV1DPjJ.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{name:"login-forgot-password",path:"/login/forgot-password",meta:nV,component:()=>Bn(()=>import("./CgV6EuVV.js"),__vite__mapDeps([6,7,8,2,3,4]),import.meta.url)},{name:"login",path:"/login",meta:rV,component:()=>Bn(()=>import("./OtMYH9xd.js"),__vite__mapDeps([9,7,2,10,3,4]),import.meta.url)},{name:"login-signup",path:"/login/signup",meta:sV,component:()=>Bn(()=>import("./iR6gjg70.js"),__vite__mapDeps([11,7,10,8,2,3,4]),import.meta.url)},{name:"profile",path:"/profile",component:()=>Bn(()=>import("./BP_7Dxcs.js"),__vite__mapDeps([12,7,13,14,4,3]),import.meta.url)}],Wb=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?Ft(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),iV=/(:\w+)\([^)]+\)/g,oV=/(:\w+)[?+*]/g,aV=/:\w+/g;function hv(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(iV,"$1").replace(oV,"$1").replace(aV,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function cV(t,e){return t===e||e===bn?!1:hv(t)!==hv(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const lV={scrollBehavior(t,e,n){var u;const r=Je(),s=((u=vn().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&cV(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:fv(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Df),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(c,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(i={el:t.hash,top:fv(t.hash),behavior:s}),h(i)})})}};function fv(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const uV={hashMode:!1,scrollBehaviorType:"auto"},dn={...uV,...lV},hV=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=Je(),s=vn(),i=([e,n]=Vs(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Eu({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Ei(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})};function ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Kb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gb=Kb,zb=new eo("auth","Firebase",Kb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Ka("@firebase/auth");function fV(t,...e){ql.logLevel<=ve.WARN&&ql.warn(`Auth (${fs}): ${t}`,...e)}function ol(t,...e){ql.logLevel<=ve.ERROR&&ql.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw lg(t,...e)}function kn(t,...e){return lg(t,...e)}function cg(t,e,n){const r=Object.assign(Object.assign({},Gb()),{[e]:n});return new eo("auth","Firebase",r).create(e,{appName:t.name})}function mr(t){return cg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dV(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(t,"argument-error"),cg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zb.create(t,...e)}function ge(t,e,...n){if(!t)throw lg(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function wr(t,e){t||ur(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pV(){return dv()==="http:"||dv()==="https:"}function dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pV()||gO()||"connection"in navigator)?navigator.onLine:!0}function mV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,wr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ep()||Zw()}get(){return gV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){wr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV=new Ja(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,s={}){return Yb(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=to(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return pO()||(u.referrerPolicy="no-referrer"),Qb.fetch()(Xb(t,t.config.apiHost,n,a),u)})}async function Yb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_V),e);try{const s=new EV(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Uc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Uc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Uc(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cg(t,h,u);En(t,h)}}catch(s){if(s instanceof Jn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function Za(t,e,n,r,s={}){const i=await Zn(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xb(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ug(t.config,s):`${t.config.apiScheme}://${s}`}function vV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),yV.get())})}}function Uc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kn(t,e,r);return s.customData._tokenResponse=n,s}function pv(t){return t!==void 0&&t.enterprise!==void 0}class TV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wV(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IV(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function Jb(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bV(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=hg(r);ge(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oa(Xh(s.auth_time)),issuedAtTime:oa(Xh(s.iat)),expirationTime:oa(Xh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function hg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nl(n);return s?JSON.parse(s):(ol("Failed to decode base64 JWT payload"),null)}catch(s){return ol("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gv(t){const e=hg(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jn&&RV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oa(this.lastLoginAt),this.creationTime=oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await zi(t,Jb(n,{idToken:r}));ge(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zb(i.providerUserInfo):[],a=SV(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function CV(t){const e=tt(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SV(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zb(t){return t.map(e=>{var{providerId:n}=e,r=ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV(t,e){const n=await Yb(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Xb(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kV(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=gv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PV(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ki;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bV(this,e)}reload(){return CV(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await zi(this,IV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:k,isAnonymous:x,providerData:L,stsTokenManager:I}=n;ge(w&&I,e,"internal-error");const y=ki.fromJSON(this.name,I);ge(typeof w=="string",e,"internal-error"),xr(f,e.name),xr(p,e.name),ge(typeof k=="boolean",e,"internal-error"),ge(typeof x=="boolean",e,"internal-error"),xr(m,e.name),xr(E,e.name),xr(R,e.name),xr(S,e.name),xr(D,e.name),xr(O,e.name);const _=new hr({uid:w,auth:e,email:p,emailVerified:k,displayName:f,isAnonymous:x,photoURL:E,phoneNumber:m,tenantId:R,stsTokenManager:y,createdAt:D,lastLoginAt:O});return L&&Array.isArray(L)&&(_.providerData=L.map(T=>Object.assign({},T))),S&&(_._redirectEventId=S),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ki;s.updateFromServerResponse(n);const i=new hr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zb(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ki;a.updateFromIdToken(r);const c=new hr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=new Map;function fr(t){wr(t instanceof Function,"Expected a class definition");let e=mv.get(t);return e?(wr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e0.type="NONE";const _v=e0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=al(this.userKey,s.apiKey,i),this.fullPersistenceKey=al("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(fr(_v),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||fr(_v);const o=al(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=hr._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ni(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ni(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o0(e))return"Blackberry";if(a0(e))return"Webos";if(n0(e))return"Safari";if((e.includes("chrome/")||r0(e))&&!e.includes("edge/"))return"Chrome";if(i0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function t0(t=jt()){return/firefox\//i.test(t)}function n0(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r0(t=jt()){return/crios\//i.test(t)}function s0(t=jt()){return/iemobile/i.test(t)}function i0(t=jt()){return/android/i.test(t)}function o0(t=jt()){return/blackberry/i.test(t)}function a0(t=jt()){return/webos/i.test(t)}function fg(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NV(t=jt()){var e;return fg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OV(){return mO()&&document.documentMode===10}function c0(t=jt()){return fg(t)||i0(t)||a0(t)||o0(t)||/windows phone/i.test(t)||s0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e=[]){let n;switch(t){case"Browser":n=yv(jt());break;case"Worker":n=`${yv(jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xV(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV=6;class MV{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vv(this),this.idTokenSubscription=new vv(this),this.beforeStateQueue=new DV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jb(this,{idToken:e}),r=await hr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(An(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(mr(this));const n=e?tt(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xV(this),n=new MV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ms(t){return tt(t)}class vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=RO(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FV(t){Qu=t}function u0(t){return Qu.loadJS(t)}function UV(){return Qu.recaptchaEnterpriseScript}function BV(){return Qu.gapiScript}function jV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $V{constructor(){this.enterprise=new HV}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HV{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qV="recaptcha-enterprise",h0="NO_RECAPTCHA";class WV{constructor(e){this.type=qV,this.auth=ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{wV(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new TV(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;pv(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(h0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $V().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&pv(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=UV();c.length!==0&&(c+=a),u0(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ev(t,e,n,r=!1,s=!1){const i=new WV(t);let o;if(s)o=h0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ev(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ev(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t,e){const n=wp(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dl(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function GV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function zV(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QV(t,e){return Za(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}async function YV(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Cr(t,e))}async function XV(t,e){return YV(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JV(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function ZV(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends dg{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,n,"signInWithPassword",QV);case"emailLink":return JV(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,r,"signUpPassword",zV);case"emailLink":return ZV(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e){return Za(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF="http://localhost";class Hs extends dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ag(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:eF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nF(t){const e=Fo(Uo(t)).link,n=e?Fo(Uo(e)).deep_link_id:null,r=Fo(Uo(t)).deep_link_id;return(r?Fo(Uo(r)).link:null)||r||n||e||t}class pg{constructor(e){var n,r,s,i,o,a;const c=Fo(Uo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=tF((s=c.mode)!==null&&s!==void 0?s:null);ge(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nF(e);try{return new pg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.providerId=ao.PROVIDER_ID}static credential(e,n){return xa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pg.parseLink(n);return ge(r,"argument-error"),xa._fromEmailAndCode(e,r.code,r.tenantId)}}ao.PROVIDER_ID="password";ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends gg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends ec{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends ec{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends ec{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rF(t,e){return Za(t,"POST","/v1/accounts:signUp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hr._fromIdTokenResponse(e,r,s),o=Tv(r);return new qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tv(r);return new qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Jn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gl(e,n,r,s)}}function f0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,i,e,r):i})}async function sF(t,e,n=!1){const r=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iF(t,e,n=!1){const{auth:r}=t;if(An(r.app))return Promise.reject(mr(r));const s="reauthenticate";try{const i=await zi(t,f0(r,s,e,t),n);ge(i.idToken,r,"internal-error");const o=hg(i.idToken);ge(o,r,"internal-error");const{sub:a}=o;return ge(t.uid===a,r,"user-mismatch"),qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e,n=!1){if(An(t.app))return Promise.reject(mr(t));const r="signIn",s=await f0(t,r,e),i=await qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function oF(t,e){return d0(ms(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t){const e=ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g9(t,e,n){const r=ms(t);await Kl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",XV)}async function m9(t,e,n){if(An(t.app))return Promise.reject(mr(t));const r=ms(t),o=await Kl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rF).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&p0(t),c}),a=await qs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function _9(t,e,n){return An(t.app)?Promise.reject(mr(t)):oF(tt(t),ao.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&p0(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aF(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y9(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=tt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zi(r,aF(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function cF(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}const zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF=1e3,uF=10;class m0 extends g0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);OV()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uF):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m0.type="LOCAL";const hF=m0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0 extends g0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_0.type="SESSION";const fF=_0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await dF(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=mg("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function gF(t){zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function mF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _F(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yF(){return y0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="firebaseLocalStorageDb",vF=1,Ql="firebaseLocalStorage",E0="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xu(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function EF(){const t=indexedDB.deleteDatabase(v0);return new tc(t).toPromise()}function Ed(){const t=indexedDB.open(v0,vF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:E0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await EF(),e(await Ed()))})})}async function wv(t,e,n){const r=Xu(t,!0).put({[E0]:e,value:n});return new tc(r).toPromise()}async function TF(t,e){const n=Xu(t,!1).get(e),r=await new tc(n).toPromise();return r===void 0?null:r.value}function Iv(t,e){const n=Xu(t,!0).delete(e);return new tc(n).toPromise()}const wF=800,IF=3;class T0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yu._getInstance(yF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mF(),!this.activeServiceWorker)return;this.sender=new pF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_F()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ed();return await wv(e,zl,"1"),await Iv(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xu(s,!1).getAll();return new tc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T0.type="LOCAL";const bF=T0;new Ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){return e?fr(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RF(t){return d0(t.auth,new _g(t),t.bypassAuthState)}function AF(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),iF(n,new _g(t),t.bypassAuthState)}async function CF(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),sF(n,new _g(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RF;case"linkViaPopup":case"linkViaRedirect":return CF;case"reauthViaPopup":case"reauthViaRedirect":return AF;default:En(this.auth,"internal-error")}}resolve(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF=new Ja(2e3,1e4);async function v9(t,e,n){if(An(t.app))return Promise.reject(kn(t,"operation-not-supported-in-this-environment"));const r=ms(t);dV(t,e,gg);const s=w0(r,n);return new ks(r,"signInViaPopup",e,s).executeNotNull()}class ks extends I0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){wr(this.filter.length===1,"Popup operations only handle one event");const e=mg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SF.get())};e()}}ks.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF="pendingRedirect",cl=new Map;class kF extends I0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await NF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NF(t,e){const n=xF(e),r=DF(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OF(t,e){cl.set(t._key(),e)}function DF(t){return fr(t._redirectPersistence)}function xF(t){return al(PF,t.config.apiKey,t.name)}async function LF(t,e,n=!1){if(An(t.app))return Promise.reject(mr(t));const r=ms(t),s=w0(r,e),o=await new kF(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF=10*60*1e3;class VF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!b0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MF&&this.cachedEventUids.clear(),this.cachedEventUids.has(bv(e))}saveEventToCache(e){this.cachedEventUids.add(bv(e)),this.lastProcessedEventTime=Date.now()}}function bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function b0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UF(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jF=/^https?/;async function $F(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UF(t);for(const n of e)try{if(HF(n))return}catch{}En(t,"unauthorized-domain")}function HF(t){const e=yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jF.test(n))return!1;if(BF.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qF=new Ja(3e4,6e4);function Rv(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WF(t){return new Promise((e,n)=>{var r,s,i;function o(){Rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rv(),n(kn(t,"network-request-failed"))},timeout:qF.get()})}if(!((s=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=zn().gapi)===null||i===void 0)&&i.load)o();else{const a=jV("iframefcb");return zn()[a]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},u0(`${BV()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ll=null,e})}let ll=null;function KF(t){return ll=ll||WF(t),ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GF=new Ja(5e3,15e3),zF="__/auth/iframe",QF="emulator/auth/iframe",YF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JF(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ug(e,QF):`https://${t.config.authDomain}/${zF}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=XF.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${to(r).slice(1)}`}async function ZF(t){const e=await KF(t),n=zn().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:JF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YF,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=zn().setTimeout(()=>{i(o)},GF.get());function c(){zn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tU=500,nU=600,rU="_blank",sU="http://localhost";class Av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iU(t,e,n,r=tU,s=nU){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eU),{width:r.toString(),height:s.toString(),top:i,left:o}),u=jt().toLowerCase();n&&(a=r0(u)?rU:n),t0(u)&&(e=e||sU,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(NV(u)&&a!=="_self")return oU(e||"",a),new Av(null);const f=window.open(e||"",a,h);ge(f,t,"popup-blocked");try{f.focus()}catch{}return new Av(f)}function oU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aU="__/auth/handler",cU="emulator/auth/handler",lU=encodeURIComponent("fac");async function Cv(t,e,n,r,s,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof gg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ec){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${lU}=${encodeURIComponent(c)}`:"";return`${uU(t)}?${to(a).slice(1)}${u}`}function uU({config:t}){return t.emulator?ug(t,cU):`https://${t.authDomain}/${aU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="webStorageSupport";class hU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fF,this._completeRedirectFn=LF,this._overrideRedirectResult=OF}async _openPopup(e,n,r,s){var i;wr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cv(e,n,r,yd(),s);return iU(e,o,mg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cv(e,n,r,yd(),s);return gF(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZF(e),r=new VF(e);return n.register("authEvent",s=>(ge(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jh,{type:Jh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Jh];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$F(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return c0()||n0()||fg()}}const fU=hU;var Sv="@firebase/auth",Pv="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gU(t){Qn(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l0(t)},u=new VV(r,s,i,c);return GV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new Dn("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(r=>new dU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Sv,Pv,pU(t)),an(Sv,Pv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU=5*60;fO("authIdTokenMaxAge");function _U(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_U().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gU("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU=new Map,vU={activated:!1,tokenObservers:[]};function Mn(t){return yU.get(t)||Object.assign({},vU)}const kv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ta,this.pending.promise.catch(n=>{}),await TU(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ta,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function TU(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Yl=new eo("appCheck","AppCheck",wU);function R0(t){if(!Mn(t).activated)throw Yl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IU="firebase-app-check-database",bU=1,Td="firebase-app-check-store";let Bc=null;function RU(){return Bc||(Bc=new Promise((t,e)=>{try{const n=indexedDB.open(IU,bU);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Yl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Td,{keyPath:"compositeKey"})}}}catch(n){e(Yl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Bc)}function AU(t,e){return CU(SU(t),e)}async function CU(t,e){const r=(await RU()).transaction(Td,"readwrite"),i=r.objectStore(Td).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;a(Yl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function SU(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new Ka("@firebase/app-check");function Nv(t,e){return tI()?AU(t,e).catch(n=>{wd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PU={error:"UNKNOWN_ERROR"};function kU(t){return wu.encodeString(JSON.stringify(t),!1)}async function Id(t,e=!1){const n=t.app;R0(n);const r=Mn(n);let s=r.token,i;if(s&&!qo(s)&&(r.token=void 0,s=void 0),!s){const c=await r.cachedTokenPromise;c&&(qo(c)?s=c:await Nv(n,void 0))}if(!e&&s&&qo(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Mn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?wd.warn(c.message):wd.error(c),i=c}let a;return s?i?qo(s)?a={token:s.token,internalError:i}:a=Dv(i):(a={token:s.token},r.token=s,await Nv(n,s)):a=Dv(i),o&&xU(n,a),a}async function NU(t){const e=t.app;R0(e);const{provider:n}=Mn(e);{const{token:r}=await n.getToken();return{token:r}}}function OU(t,e,n,r){const{app:s}=t,i=Mn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&qo(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Ov(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Ov(t))}function A0(t,e){const n=Mn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Ov(t){const{app:e}=t,n=Mn(e);let r=n.tokenRefresher;r||(r=DU(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function DU(t){const{app:e}=t;return new EU(async()=>{const n=Mn(e);let r;if(n.token?r=await Id(t,!0):r=await Id(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Mn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},kv.RETRIAL_MIN_WAIT,kv.RETRIAL_MAX_WAIT)}function xU(t,e){const n=Mn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function qo(t){return t.expireTimeMillis-Date.now()>0}function Dv(t){return{token:kU(PU),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Mn(this.app);for(const n of e)A0(this.app,n.next);return Promise.resolve()}}function MU(t,e){return new LU(t,e)}function VU(t){return{getToken:e=>Id(t,e),getLimitedUseToken:()=>NU(t),addTokenListener:e=>OU(t,"INTERNAL",e),removeTokenListener:e=>A0(t.app,e)}}const FU="@firebase/app-check",UU="0.8.10",BU="app-check",xv="app-check-internal";function jU(){Qn(new Dn(BU,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return MU(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(xv).initialize()})),Qn(new Dn(xv,t=>{const e=t.getProvider("app-check").getImmediate();return VU(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),an(FU,UU)}jU();var $U="firebase",HU="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an($U,HU,"app");const C0=Symbol("firebaseApp");function yg(t){return _u()&&at(C0,null)||Ip(t)}const qU=typeof window<"u",jc=new WeakMap;function WU(t,e){if(!jc.has(t)){const n=fu(!0);jc.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),jc.delete(t)}}return jc.get(t)}const KU=new WeakMap,$c=new WeakMap;function S0(t){const e=yg(t);if(!$c.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{$c.set(e,i),n(i.value)}];$c.set(e,s)}return $c.get(e)}function GU(t){const e=S0(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function zU(t,e){cF(e,n=>{const r=S0();t.value=n,Array.isArray(r)&&r[1](t)})}var Lv={};const Mv="@firebase/database",Vv="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P0="";function QU(t){P0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),It(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ar(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new YU(e)}}catch{}return new XU},Ns=k0("localStorage"),JU=k0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Ka("@firebase/database"),ZU=function(){let t=1;return function(){return t++}}(),N0=function(t){const e=PO(t),n=new bO;n.update(e);const r=n.digest();return wu.encodeByteArray(r)},nc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=nc.apply(null,r):typeof r=="object"?e+=It(r):e+=r,e+=" "}return e};let aa=null,Fv=!0;const e2=function(t,e){Y(!e,"Can't turn on custom loggers persistently."),Di.logLevel=ve.VERBOSE,aa=Di.log.bind(Di)},Mt=function(...t){if(Fv===!0&&(Fv=!1,aa===null&&JU.get("logging_enabled")===!0&&e2()),aa){const e=nc.apply(null,t);aa(e)}},rc=function(t){return function(...e){Mt(t,...e)}},bd=function(...t){const e="FIREBASE INTERNAL ERROR: "+nc(...t);Di.error(e)},Ws=function(...t){const e=`FIREBASE FATAL ERROR: ${nc(...t)}`;throw Di.error(e),new Error(e)},ln=function(...t){const e="FIREBASE WARNING: "+nc(...t);Di.warn(e)},t2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ln("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},n2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qi="[MIN_NAME]",Ks="[MAX_NAME]",co=function(t,e){if(t===e)return 0;if(t===Qi||e===Ks)return-1;if(e===Qi||t===Ks)return 1;{const n=Uv(t),r=Uv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},r2=function(t,e){return t===e?0:t<e?-1:1},So=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+It(e))},vg=function(t){if(typeof t!="object"||t===null)return It(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=It(e[r]),n+=":",n+=vg(t[e[r]]);return n+="}",n},D0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const x0=function(t){Y(!O0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},s2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},i2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},o2=new RegExp("^-?(0*)\\d{1,10}$"),a2=-2147483648,c2=2147483647,Uv=function(t){if(o2.test(t)){const e=Number(t);if(e>=a2&&e<=c2)return e}return null},sc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ln("Exception was thrown by user callback.",n),e},Math.floor(0))}},l2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ca=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ln(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ln(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="5",L0="v",M0="s",V0="r",F0="f",U0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,B0="ls",j0="p",Rd="ac",$0="websocket",H0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r,s,i=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ns.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ns.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function d2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function q0(t,e,n){Y(typeof e=="string","typeof type must == string"),Y(typeof n=="object","typeof params must == object");let r;if(e===$0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===H0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);d2(t)&&(n.ns=t.namespace);const s=[];return Tn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.counters_={}}incrementCounter(e,n=1){Ar(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return iO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={},ef={};function Tg(t){const e=t.toString();return Zh[e]||(Zh[e]=new p2),Zh[e]}function g2(t,e){const n=t.toString();return ef[n]||(ef[n]=e()),ef[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&sc(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="start",_2="close",y2="pLPCommand",v2="pRTLPCB",W0="id",K0="pw",G0="ser",E2="cb",T2="seg",w2="ts",I2="d",b2="dframe",z0=1870,Q0=30,R2=z0-Q0,A2=25e3,C2=3e4;class Ti{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rc(e),this.stats_=Tg(n),this.urlFn=c=>(this.appCheckToken&&(c[Rd]=this.appCheckToken),q0(n,H0,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new m2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(C2)),n2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wg((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bv)this.id=a,this.password=c;else if(o===_2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bv]="t",r[G0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[E2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[L0]=Eg,this.transportSessionId&&(r[M0]=this.transportSessionId),this.lastSessionId&&(r[B0]=this.lastSessionId),this.applicationId&&(r[j0]=this.applicationId),this.appCheckToken&&(r[Rd]=this.appCheckToken),typeof location<"u"&&location.hostname&&U0.test(location.hostname)&&(r[V0]=F0);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ti.forceAllow_=!0}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){return Ti.forceAllow_?!0:!Ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!s2()&&!i2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=It(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zw(n),s=D0(r,R2);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[b2]="t",r[W0]=e,r[K0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=It(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ZU(),window[y2+this.uniqueCallbackIdentifier]=e,window[v2+this.uniqueCallbackIdentifier]=n,this.myIFrame=wg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Mt("frame writing exception"),a.stack&&Mt(a.stack),Mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[W0]=this.myID,e[K0]=this.myPW,e[G0]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Q0+r.length<=z0;){const o=this.pendingSegs.shift();r=r+"&"+T2+s+"="+o.seg+"&"+w2+s+"="+o.ts+"&"+I2+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(A2)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=16384,P2=45e3;let Xl=null;typeof MozWebSocket<"u"?Xl=MozWebSocket:typeof WebSocket<"u"&&(Xl=WebSocket);class $n{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rc(this.connId),this.stats_=Tg(n),this.connURL=$n.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[L0]=Eg,typeof location<"u"&&location.hostname&&U0.test(location.hostname)&&(o[V0]=F0),n&&(o[M0]=n),r&&(o[B0]=r),s&&(o[Rd]=s),i&&(o[j0]=i),q0(e,$0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ns.set("previous_websocket_failure",!0);try{let r;eI(),this.mySock=new Xl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){$n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xl!==null&&!$n.forceDisallow_}static previouslyFailed(){return Ns.isInMemoryStorage||Ns.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ns.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=wa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Y(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=It(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=D0(n,S2);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(P2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$n.responsesRequiredToBeHealthy=2;$n.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{static get ALL_TRANSPORTS(){return[Ti,$n]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$n.isAvailable();let r=n&&!$n.previouslyFailed();if(e.webSocketOnly&&(n||ln("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$n];else{const s=this.transports_=[];for(const i of La.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);La.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}La.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=6e4,N2=5e3,O2=10*1024,D2=100*1024,tf="t",jv="d",x2="s",$v="r",L2="e",Hv="o",qv="a",Wv="n",Kv="p",M2="h";class V2{constructor(e,n,r,s,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rc("c:"+this.id+":"),this.transportManager_=new La(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ca(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>D2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>O2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tf in e){const n=e[tf];n===qv?this.upgradeIfSecondaryHealthy_():n===$v?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=So("t",e),r=So("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=So("t",e),r=So("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=So(tf,e);if(jv in e){const r=e[jv];if(n===M2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Wv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===x2?this.onConnectionShutdown_(r):n===$v?this.onReset_(r):n===L2?bd("Server Error: "+r):n===Hv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Eg!==r&&ln("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ca(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(k2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ca(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(N2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.allowedEvents_=e,this.listeners_={},Y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){Y(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends X0{static getInstance(){return new Jl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ep()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=32,zv=768;class Ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Me(){return new Ge("")}function Re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function cs(t){return t.pieces_.length-t.pieceNum_}function qe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ge(t.pieces_,e)}function J0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function F2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Z0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function eR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ge(e,0)}function Et(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ge)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ge(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function gn(t,e){const n=Re(t),r=Re(e);if(n===null)return e;if(n===r)return gn(qe(t),qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tR(t,e){if(cs(t)!==cs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(cs(t)>cs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class U2{constructor(e,n){this.errorPrefix_=n,this.parts_=Z0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bu(this.parts_[r]);nR(this)}}function B2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bu(e),nR(t)}function j2(t){const e=t.parts_.pop();t.byteLength_-=bu(e),t.parts_.length>0&&(t.byteLength_-=1)}function nR(t){if(t.byteLength_>zv)throw new Error(t.errorPrefix_+"has a key path longer than "+zv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gv+") or object contains a cycle "+Ss(t))}function Ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig extends X0{static getInstance(){return new Ig}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return Y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=1e3,$2=60*5*1e3,Qv=30*1e3,H2=1.3,q2=3e4,W2="server_kill",Yv=3;class _r extends Y0{constructor(e,n,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=_r.nextPersistentConnectionId_++,this.log_=rc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Po,this.maxReconnectDelay_=$2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!eI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ig.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(It(i)),Y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Ta,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Y(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;_r.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ar(e,"w")){const r=Fi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();ln(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||IO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+It(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bd("Unrecognized action received from server: "+It(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Po,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Po,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>q2&&(this.reconnectDelay_=Po),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*H2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+_r.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(f){Y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Mt("getToken() completed but was canceled"):(Mt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new V2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{ln(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(W2)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ln(f),c())}}}interrupt(e){Mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wf(this.interruptReasons_)&&(this.reconnectDelay_=Po,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>vg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ge(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yv&&(this.reconnectDelay_=Qv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+P0.replace(/\./g,"-")]=1,Ep()?e["framework.cordova"]=1:Zw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jl.getInstance().currentlyOnline();return Wf(this.interruptReasons_)&&e}}_r.nextPersistentConnectionId_=0;_r.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ae(Qi,e),s=new Ae(Qi,n);return this.compare(r,s)!==0}minPost(){return Ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc;class rR extends Ju{static get __EMPTY_NODE(){return Hc}static set __EMPTY_NODE(e){Hc=e}compare(e,n){return co(e.name,n.name)}isDefinedOn(e){throw Zi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Ks,Hc)}makePost(e,n){return Y(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,Hc)}toString(){return".key"}}const xi=new rR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??en.EMPTY_NODE,this.right=i??en.EMPTY_NODE}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return en.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return en.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}vt.RED=!0;vt.BLACK=!1;class K2{copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class en{constructor(e,n=en.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new en(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,vt.BLACK,null,null))}remove(e){return new en(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qc(this.root_,null,this.comparator_,!0,e)}}en.EMPTY_NODE=new K2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t,e){return co(t.name,e.name)}function bg(t,e){return co(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad;function z2(t){Ad=t}const sR=function(t){return typeof t=="number"?"number:"+x0(t):"string:"+t},iR=function(t){if(t.isLeafNode()){const e=t.val();Y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ar(e,".sv"),"Priority must be a string or number.")}else Y(t===Ad||t.isEmpty(),"priority of unexpected type.");Y(t===Ad||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xv;class _t{static set __childrenNodeConstructor(e){Xv=e}static get __childrenNodeConstructor(){return Xv}constructor(e,n=_t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),iR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Re(e)===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(Y(r!==".priority"||cs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_t.__childrenNodeConstructor.EMPTY_NODE.updateChild(qe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sR(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=x0(this.value_):e+=this.value_,this.lazyHash_=N0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _t.__childrenNodeConstructor?-1:(Y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=_t.VALUE_TYPE_ORDER.indexOf(n),i=_t.VALUE_TYPE_ORDER.indexOf(r);return Y(s>=0,"Unknown leaf type: "+n),Y(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oR,aR;function Q2(t){oR=t}function Y2(t){aR=t}class X2 extends Ju{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?co(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Ks,new _t("[PRIORITY-POST]",aR))}makePost(e,n){const r=oR(e);return new Ae(n,new _t("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ut=new X2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=Math.log(2);class Z2{constructor(e){const n=i=>parseInt(Math.log(i)/J2,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zl=function(t,e,n,r){t.sort(e);const s=function(c,u){const h=u-c;let f,p;if(h===0)return null;if(h===1)return f=t[c],p=n?n(f):f,new vt(p,f.node,vt.BLACK,null,null);{const m=parseInt(h/2,10)+c,E=s(c,m),R=s(m+1,u);return f=t[m],p=n?n(f):f,new vt(p,f.node,vt.BLACK,E,R)}},i=function(c){let u=null,h=null,f=t.length;const p=function(E,R){const S=f-E,D=f;f-=E;const O=s(S+1,D),w=t[S],k=n?n(w):w;m(new vt(k,w.node,R,null,O))},m=function(E){u?(u.left=E,u=E):(h=E,u=E)};for(let E=0;E<c.count;++E){const R=c.nextBitIsOne(),S=Math.pow(2,c.count-(E+1));R?p(S,vt.BLACK):(p(S,vt.BLACK),p(S,vt.RED))}return h},o=new Z2(t.length),a=i(o);return new en(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;const ko={};class dr{static get Default(){return Y(Ut,"ChildrenNode.ts has not been loaded"),nf=nf||new dr({".priority":ko},{".priority":Ut}),nf}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof en?n:null}hasIndex(e){return Ar(this.indexSet_,e.toString())}addIndex(e,n){Y(e!==xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Zl(r,e.getCompare()):a=ko;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new dr(h,u)}addToIndexes(e,n){const r=Ol(this.indexes_,(s,i)=>{const o=Fi(this.indexSet_,i);if(Y(o,"Missing index implementation for "+i),s===ko)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Zl(a,o.getCompare())}else return ko;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new Ae(e.name,a))),c.insert(e,e.node)}});return new dr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ol(this.indexes_,s=>{if(s===ko)return s;{const i=n.get(e.name);return i?s.remove(new Ae(e.name,i)):s}});return new dr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No;class De{static get EMPTY_NODE(){return No||(No=new De(new en(bg),null,dr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&iR(this.priorityNode_),this.children_.isEmpty()&&Y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||No}updatePriority(e){return this.children_.isEmpty()?this:new De(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?No:n}}getChild(e){const n=Re(e);return n===null?this:this.getImmediateChild(n).getChild(qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Y(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ae(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?No:this.priorityNode_;return new De(s,o,i)}}updateChild(e,n){const r=Re(e);if(r===null)return n;{Y(Re(e)!==".priority"||cs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(qe(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Ut,(o,a)=>{n[o]=a.val(e),r++,i&&De.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sR(this.getPriority().val())+":"),this.forEachChild(Ut,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":N0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ic?-1:0}withIndex(e){if(e===xi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new De(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ut),s=n.getIterator(Ut);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xi?null:this.indexMap_.get(e.toString())}}De.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eB extends De{constructor(){super(new en(bg),De.EMPTY_NODE,dr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return De.EMPTY_NODE}isEmpty(){return!1}}const ic=new eB;Object.defineProperties(Ae,{MIN:{value:new Ae(Qi,De.EMPTY_NODE)},MAX:{value:new Ae(Ks,ic)}});rR.__EMPTY_NODE=De.EMPTY_NODE;_t.__childrenNodeConstructor=De;z2(ic);Y2(ic);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tB=!0;function Vt(t,e=null){if(t===null)return De.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _t(n,Vt(e))}if(!(t instanceof Array)&&tB){const n=[];let r=!1;if(Tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Vt(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new Ae(o,c)))}}),n.length===0)return De.EMPTY_NODE;const i=Zl(n,G2,o=>o.name,bg);if(r){const o=Zl(n,Ut.getCompare());return new De(i,Vt(e),new dr({".priority":o},{".priority":Ut}))}else return new De(i,Vt(e),dr.Default)}else{let n=De.EMPTY_NODE;return Tn(t,(r,s)=>{if(Ar(t,r)&&r.substring(0,1)!=="."){const i=Vt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Vt(e))}}Q2(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB extends Ju{constructor(e){super(),this.indexPath_=e,Y(!Ie(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?co(e.name,n.name):i}makePost(e,n){const r=Vt(e),s=De.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ae(n,s)}maxPost(){const e=De.EMPTY_NODE.updateChild(this.indexPath_,ic);return new Ae(Ks,e)}toString(){return Z0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB extends Ju{compare(e,n){const r=e.node.compareTo(n.node);return r===0?co(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const r=Vt(e);return new Ae(n,r)}toString(){return".value"}}const sB=new rB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iB(t){return{type:"value",snapshotNode:t}}function oB(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function aB(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cB(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ut}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qi}hasEnd(){return this.endSet_}getIndexEndValue(){return Y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ut}copy(){const e=new Rg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ut?n="$priority":t.index_===sB?n="$value":t.index_===xi?n="$key":(Y(t.index_ instanceof nB,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=It(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=It(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+It(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=It(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+It(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function eE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ut&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Y0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=rc("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=eu.getListenId_(e,r),a={};this.listens_[o]=a;const c=Zv(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),Fi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=eu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Zv(e._queryParams),r=e._path.toString(),s=new Ta;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+to(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=wa(a.responseText)}catch{ln("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&ln("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB{constructor(){this.rootNode_=De.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){return{value:null,children:new Map}}function cR(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Re(e);t.children.has(r)||t.children.set(r,tu());const s=t.children.get(r);e=qe(e),cR(s,e,n)}}function Cd(t,e,n){t.value!==null?n(e,t.value):uB(t,(r,s)=>{const i=new Ge(e.toString()+"/"+r);Cd(s,i,n)})}function uB(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=10*1e3,fB=30*1e3,dB=5*60*1e3;class pB{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hB(e);const r=tE+(fB-tE)*Math.random();ca(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tn(e,(s,i)=>{i>0&&Ar(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ca(this.reportStats_.bind(this),Math.floor(Math.random()*2*dB))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Hn||(Hn={}));function lR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hR(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Hn.ACK_USER_WRITE,this.source=lR()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return Y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ge(e));return new nu(Me(),n,this.revert)}}else return Y(Re(this.path)===e,"operationForChild called for unrelated child."),new nu(qe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Hn.OVERWRITE}operationForChild(e){return Ie(this.path)?new Gs(this.source,Me(),this.snap.getImmediateChild(e)):new Gs(this.source,qe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Hn.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new Ge(e));return n.isEmpty()?null:n.value?new Gs(this.source,Me(),n.value):new Ma(this.source,Me(),n)}else return Y(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ma(this.source,qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function gB(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(cB(o.childName,o.snapshotNode))}),Oo(t,s,"child_removed",e,r,n),Oo(t,s,"child_added",e,r,n),Oo(t,s,"child_moved",i,r,n),Oo(t,s,"child_changed",e,r,n),Oo(t,s,"value",e,r,n),s}function Oo(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,c)=>_B(t,a,c)),o.forEach(a=>{const c=mB(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function mB(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _B(t,e,n){if(e.childName==null||n.childName==null)throw Zi("Should only compare child_ events.");const r=new Ae(e.childName,e.snapshotNode),s=new Ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t,e){return{eventCache:t,serverCache:e}}function la(t,e,n,r){return fR(new Ag(e,n,r),t.serverCache)}function dR(t,e,n,r){return fR(t.eventCache,new Ag(e,n,r))}function Sd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;const yB=()=>(rf||(rf=new en(r2)),rf);class He{static fromObject(e){let n=new He(null);return Tn(e,(r,s)=>{n=n.set(new Ge(r),s)}),n}constructor(e,n=yB()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Me(),value:this.value};if(Ie(e))return null;{const r=Re(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(qe(e),n);return i!=null?{path:Et(new Ge(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Re(e),r=this.children.get(n);return r!==null?r.subtree(qe(e)):new He(null)}}set(e,n){if(Ie(e))return new He(n,this.children);{const r=Re(e),i=(this.children.get(r)||new He(null)).set(qe(e),n),o=this.children.insert(r,i);return new He(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new He(null):new He(null,this.children);{const n=Re(e),r=this.children.get(n);if(r){const s=r.remove(qe(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new He(null):new He(this.value,i)}else return this}}get(e){if(Ie(e))return this.value;{const n=Re(e),r=this.children.get(n);return r?r.get(qe(e)):null}}setTree(e,n){if(Ie(e))return n;{const r=Re(e),i=(this.children.get(r)||new He(null)).setTree(qe(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new He(this.value,o)}}fold(e){return this.fold_(Me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Et(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Me(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Ie(e))return null;{const i=Re(e),o=this.children.get(i);return o?o.findOnPath_(qe(e),Et(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Me(),n)}foreachOnPath_(e,n,r){if(Ie(e))return this;{this.value&&r(n,this.value);const s=Re(e),i=this.children.get(s);return i?i.foreachOnPath_(qe(e),Et(n,s),r):new He(null)}}foreach(e){this.foreach_(Me(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Et(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.writeTree_=e}static empty(){return new Nn(new He(null))}}function ua(t,e,n){if(Ie(e))return new Nn(new He(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=gn(s,e);return i=i.updateChild(o,n),new Nn(t.writeTree_.set(s,i))}else{const s=new He(n),i=t.writeTree_.setTree(e,s);return new Nn(i)}}}function nE(t,e,n){let r=t;return Tn(n,(s,i)=>{r=ua(r,Et(e,s),i)}),r}function rE(t,e){if(Ie(e))return Nn.empty();{const n=t.writeTree_.setTree(e,new He(null));return new Nn(n)}}function Pd(t,e){return ti(t,e)!=null}function ti(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(gn(n.path,e)):null}function sE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ut,(r,s)=>{e.push(new Ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ae(r,s.value))}),e}function es(t,e){if(Ie(e))return t;{const n=ti(t,e);return n!=null?new Nn(new He(n)):new Nn(t.writeTree_.subtree(e))}}function kd(t){return t.writeTree_.isEmpty()}function Yi(t,e){return pR(Me(),t.writeTree_,e)}function pR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(Y(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=pR(Et(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Et(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t,e){return ER(e,t)}function vB(t,e,n,r,s){Y(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ua(t.visibleWrites,e,n)),t.lastWriteId=r}function EB(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function TB(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Y(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&wB(a,r.path)?s=!1:Cn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return IB(t),!0;if(r.snap)t.visibleWrites=rE(t.visibleWrites,r.path);else{const a=r.children;Tn(a,c=>{t.visibleWrites=rE(t.visibleWrites,Et(r.path,c))})}return!0}else return!1}function wB(t,e){if(t.snap)return Cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Cn(Et(t.path,n),e))return!0;return!1}function IB(t){t.visibleWrites=mR(t.allWrites,bB,Me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bB(t){return t.visible}function mR(t,e,n){let r=Nn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)Cn(n,o)?(a=gn(n,o),r=ua(r,a,i.snap)):Cn(o,n)&&(a=gn(o,n),r=ua(r,Me(),i.snap.getChild(a)));else if(i.children){if(Cn(n,o))a=gn(n,o),r=nE(r,a,i.children);else if(Cn(o,n))if(a=gn(o,n),Ie(a))r=nE(r,Me(),i.children);else{const c=Fi(i.children,Re(a));if(c){const u=c.getChild(qe(a));r=ua(r,Me(),u)}}}else throw Zi("WriteRecord should have .snap or .children")}}return r}function _R(t,e,n,r,s){if(!r&&!s){const i=ti(t.visibleWrites,e);if(i!=null)return i;{const o=es(t.visibleWrites,e);if(kd(o))return n;if(n==null&&!Pd(o,Me()))return null;{const a=n||De.EMPTY_NODE;return Yi(o,a)}}}else{const i=es(t.visibleWrites,e);if(!s&&kd(i))return n;if(!s&&n==null&&!Pd(i,Me()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Cn(u.path,e)||Cn(e,u.path))},a=mR(t.allWrites,o,e),c=n||De.EMPTY_NODE;return Yi(a,c)}}}function RB(t,e,n){let r=De.EMPTY_NODE;const s=ti(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ut,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=es(t.visibleWrites,e);return n.forEachChild(Ut,(o,a)=>{const c=Yi(es(i,new Ge(o)),a);r=r.updateImmediateChild(o,c)}),sE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=es(t.visibleWrites,e);return sE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function AB(t,e,n,r,s){Y(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Et(e,n);if(Pd(t.visibleWrites,i))return null;{const o=es(t.visibleWrites,i);return kd(o)?s.getChild(n):Yi(o,s.getChild(n))}}function CB(t,e,n,r){const s=Et(e,n),i=ti(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=es(t.visibleWrites,s);return Yi(o,r.getNode().getImmediateChild(n))}else return null}function SB(t,e){return ti(t.visibleWrites,e)}function PB(t,e,n,r,s,i,o){let a;const c=es(t.visibleWrites,e),u=ti(c,Me());if(u!=null)a=u;else if(n!=null)a=Yi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=p.getNext();for(;m&&h.length<s;)f(m,r)!==0&&h.push(m),m=p.getNext();return h}else return[]}function kB(){return{visibleWrites:Nn.empty(),allWrites:[],lastWriteId:-1}}function Nd(t,e,n,r){return _R(t.writeTree,t.treePath,e,n,r)}function yR(t,e){return RB(t.writeTree,t.treePath,e)}function iE(t,e,n,r){return AB(t.writeTree,t.treePath,e,n,r)}function ru(t,e){return SB(t.writeTree,Et(t.treePath,e))}function NB(t,e,n,r,s,i){return PB(t.writeTree,t.treePath,e,n,r,s,i)}function Cg(t,e,n){return CB(t.writeTree,t.treePath,e,n)}function vR(t,e){return ER(Et(t.treePath,e),t.writeTree)}function ER(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OB{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;Y(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Y(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Jv(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,aB(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,oB(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Jv(r,e.snapshotNode,s.oldSnap));else throw Zi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const TR=new DB;class Sg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ag(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zs(this.viewCache_),i=NB(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function xB(t,e){Y(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Y(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function LB(t,e,n,r,s){const i=new OB;let o,a;if(n.type===Hn.OVERWRITE){const u=n;u.source.fromUser?o=Od(t,e,u.path,u.snap,r,s,i):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=su(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Hn.MERGE){const u=n;u.source.fromUser?o=VB(t,e,u.path,u.children,r,s,i):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Dd(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Hn.ACK_USER_WRITE){const u=n;u.revert?o=BB(t,e,u.path,r,s,i):o=FB(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Hn.LISTEN_COMPLETE)o=UB(t,e,n.path,r,i);else throw Zi("Unknown operation type: "+n.type);const c=i.getChanges();return MB(e,o,c),{viewCache:o,changes:c}}function MB(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Sd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(iB(Sd(e)))}}function wR(t,e,n,r,s,i){const o=e.eventCache;if(ru(r,n)!=null)return e;{let a,c;if(Ie(n))if(Y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=zs(e),h=u instanceof De?u:De.EMPTY_NODE,f=yR(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Nd(r,zs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Re(n);if(u===".priority"){Y(cs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=iE(r,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=qe(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=iE(r,n,o.getNode(),c);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=Cg(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return la(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function su(t,e,n,r,s,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);u=h.updateFullNode(c.getNode(),m,null)}else{const m=Re(n);if(!c.isCompleteForPath(n)&&cs(n)>1)return e;const E=qe(n),S=c.getNode().getImmediateChild(m).updateChild(E,r);m===".priority"?u=h.updatePriority(c.getNode(),S):u=h.updateChild(c.getNode(),m,S,E,TR,null)}const f=dR(e,u,c.isFullyInitialized()||Ie(n),h.filtersNodes()),p=new Sg(s,f,i);return wR(t,f,n,s,p,a)}function Od(t,e,n,r,s,i,o){const a=e.eventCache;let c,u;const h=new Sg(s,e,i);if(Ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=la(e,u,!0,t.filter.filtersNodes());else{const f=Re(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=la(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=qe(n),m=a.getNode().getImmediateChild(f);let E;if(Ie(p))E=r;else{const R=h.getCompleteChild(f);R!=null?J0(p)===".priority"&&R.getChild(eR(p)).isEmpty()?E=R:E=R.updateChild(p,r):E=De.EMPTY_NODE}if(m.equals(E))c=e;else{const R=t.filter.updateChild(a.getNode(),f,E,p,h,o);c=la(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function oE(t,e){return t.eventCache.isCompleteForChild(e)}function VB(t,e,n,r,s,i,o){let a=e;return r.foreach((c,u)=>{const h=Et(n,c);oE(e,Re(h))&&(a=Od(t,a,h,u,s,i,o))}),r.foreach((c,u)=>{const h=Et(n,c);oE(e,Re(h))||(a=Od(t,a,h,u,s,i,o))}),a}function aE(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Dd(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ie(n)?u=r:u=new He(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),E=aE(t,m,p);c=su(t,c,new Ge(f),E,s,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!m){const E=e.serverCache.getNode().getImmediateChild(f),R=aE(t,E,p);c=su(t,c,new Ge(f),R,s,i,o,a)}}),c}function FB(t,e,n,r,s,i,o){if(ru(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Ie(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return su(t,e,n,c.getNode().getChild(n),s,i,a,o);if(Ie(n)){let u=new He(null);return c.getNode().forEachChild(xi,(h,f)=>{u=u.set(new Ge(h),f)}),Dd(t,e,n,u,s,i,a,o)}else return e}else{let u=new He(null);return r.foreach((h,f)=>{const p=Et(n,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),Dd(t,e,n,u,s,i,a,o)}}function UB(t,e,n,r,s){const i=e.serverCache,o=dR(e,i.getNode(),i.isFullyInitialized()||Ie(n),i.isFiltered());return wR(t,o,n,r,TR,s)}function BB(t,e,n,r,s,i){let o;if(ru(r,n)!=null)return e;{const a=new Sg(r,e,s),c=e.eventCache.getNode();let u;if(Ie(n)||Re(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Nd(r,zs(e));else{const f=e.serverCache.getNode();Y(f instanceof De,"serverChildren would be complete if leaf node"),h=yR(r,f)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Re(n);let f=Cg(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,qe(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,De.EMPTY_NODE,qe(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nd(r,zs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||ru(r,Me())!=null,la(e,u,o,t.filter.filtersNodes())}}function jB(t,e){const n=zs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Re(e)).isEmpty())?n.getChild(e):null}function cE(t,e,n,r){e.type===Hn.MERGE&&e.source.queryId!==null&&(Y(zs(t.viewCache_),"We should always have a full cache before handling merges"),Y(Sd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=LB(t.processor_,s,e,n,r);return xB(t.processor_,i.viewCache),Y(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,$B(t,i.changes,i.viewCache.eventCache.getNode())}function $B(t,e,n,r){const s=t.eventRegistrations_;return gB(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lE;function HB(t){Y(!lE,"__referenceConstructor has already been defined"),lE=t}function Pg(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return Y(i!=null,"SyncTree gave us an op for an invalid query."),cE(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(cE(o,e,n,r));return i}}function kg(t,e){let n=null;for(const r of t.views.values())n=n||jB(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uE;function qB(t){Y(!uE,"__referenceConstructor has already been defined"),uE=t}class hE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new He(null),this.pendingWriteTree_=kB(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WB(t,e,n,r,s){return vB(t.pendingWriteTree_,e,n,r,s),s?eh(t,new Gs(lR(),e,n)):[]}function wi(t,e,n=!1){const r=EB(t.pendingWriteTree_,e);if(TB(t.pendingWriteTree_,e)){let i=new He(null);return r.snap!=null?i=i.set(Me(),!0):Tn(r.children,o=>{i=i.set(new Ge(o),!0)}),eh(t,new nu(r.path,i,n))}else return[]}function Zu(t,e,n){return eh(t,new Gs(uR(),e,n))}function KB(t,e,n){const r=He.fromObject(n);return eh(t,new Ma(uR(),e,r))}function GB(t,e,n,r){const s=AR(t,r);if(s!=null){const i=CR(s),o=i.path,a=i.queryId,c=gn(o,e),u=new Gs(hR(a),c,n);return SR(t,o,u)}else return[]}function zB(t,e,n,r){const s=AR(t,r);if(s){const i=CR(s),o=i.path,a=i.queryId,c=gn(o,e),u=He.fromObject(n),h=new Ma(hR(a),c,u);return SR(t,o,h)}else return[]}function IR(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=gn(o,e),u=kg(a,c);if(u)return u});return _R(s,e,i,n,!0)}function eh(t,e){return bR(e,t.syncPointTree_,null,gR(t.pendingWriteTree_,Me()))}function bR(t,e,n,r){if(Ie(t.path))return RR(t,e,n,r);{const s=e.get(Me());n==null&&s!=null&&(n=kg(s,Me()));let i=[];const o=Re(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=vR(r,o);i=i.concat(bR(a,c,u,h))}return s&&(i=i.concat(Pg(s,t,r,n))),i}}function RR(t,e,n,r){const s=e.get(Me());n==null&&s!=null&&(n=kg(s,Me()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=vR(r,o),h=t.operationForChild(o);h&&(i=i.concat(RR(h,a,c,u)))}),s&&(i=i.concat(Pg(s,t,r,n))),i}function AR(t,e){return t.tagToQueryMap.get(e)}function CR(t){const e=t.indexOf("$");return Y(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ge(t.substr(0,e))}}function SR(t,e,n){const r=t.syncPointTree_.get(e);Y(r,"Missing sync point for query tag that we're tracking");const s=gR(t.pendingWriteTree_,e);return Pg(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ng(n)}node(){return this.node_}}class Og{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Et(this.path_,e);return new Og(this.syncTree_,n)}node(){return IR(this.syncTree_,this.path_)}}const QB=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fE=function(t,e,n){if(!t||typeof t!="object")return t;if(Y(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return YB(t[".sv"],e,n);if(typeof t[".sv"]=="object")return XB(t[".sv"],e);Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},YB=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Y(!1,"Unexpected server value: "+t)}},XB=function(t,e,n){t.hasOwnProperty("increment")||Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&Y(!1,"Unexpected increment value: "+r);const s=e.node();if(Y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},JB=function(t,e,n,r){return Dg(e,new Og(n,t),r)},ZB=function(t,e,n){return Dg(t,new Ng(e),n)};function Dg(t,e,n){const r=t.getPriority().val(),s=fE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=fE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new _t(a,Vt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new _t(s))),o.forEachChild(Ut,(a,c)=>{const u=Dg(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Lg(t,e){let n=e instanceof Ge?e:new Ge(e),r=t,s=Re(n);for(;s!==null;){const i=Fi(r.node.children,s)||{children:{},childCount:0};r=new xg(s,r,i),n=qe(n),s=Re(n)}return r}function lo(t){return t.node.value}function PR(t,e){t.node.value=e,xd(t)}function kR(t){return t.node.childCount>0}function e4(t){return lo(t)===void 0&&!kR(t)}function th(t,e){Tn(t.node.children,(n,r)=>{e(new xg(n,t,r))})}function NR(t,e,n,r){n&&!r&&e(t),th(t,s=>{NR(s,e,!0,r)})}function t4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function oc(t){return new Ge(t.parent===null?t.name:oc(t.parent)+"/"+t.name)}function xd(t){t.parent!==null&&n4(t.parent,t.name,t)}function n4(t,e,n){const r=e4(n),s=Ar(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,xd(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,xd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=/[\[\].#$\/\u0000-\u001F\u007F]/,s4=/[\[\].#$\u0000-\u001F\u007F]/,sf=10*1024*1024,OR=function(t){return typeof t=="string"&&t.length!==0&&!r4.test(t)},i4=function(t){return typeof t=="string"&&t.length!==0&&!s4.test(t)},o4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),i4(t)},DR=function(t,e,n){const r=n instanceof Ge?new U2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ss(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ss(r)+" with contents = "+e.toString());if(O0(e))throw new Error(t+"contains "+e.toString()+" "+Ss(r));if(typeof e=="string"&&e.length>sf/3&&bu(e)>sf)throw new Error(t+"contains a string greater than "+sf+" utf8 bytes "+Ss(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Tn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!OR(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ss(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);B2(r,o),DR(t,a,r),j2(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ss(r)+" in addition to actual children.")}},a4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!OR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!o4(n))throw new Error(SO(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function l4(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!tR(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ni(t,e,n){l4(t,n),u4(t,r=>Cn(r,e)||Cn(e,r))}function u4(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(h4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function h4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();aa&&Mt("event: "+n.toString()),sc(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4="repo_interrupt",d4=25;class p4{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new c4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tu(),this.transactionQueueTree_=new xg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function g4(t,e,n){if(t.stats_=Tg(t.repoInfo_),t.forceRestClient_||l2())t.server_=new eu(t.repoInfo_,(r,s,i,o)=>{dE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{It(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new _r(t.repoInfo_,e,(r,s,i,o)=>{dE(t,r,s,i,o)},r=>{pE(t,r)},r=>{_4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=g2(t.repoInfo_,()=>new pB(t.stats_,t.server_)),t.infoData_=new lB,t.infoSyncTree_=new hE({startListening:(r,s,i,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Zu(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mg(t,"connected",!1),t.serverSyncTree_=new hE({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,c)=>{const u=o(a,c);ni(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function m4(t){const n=t.infoData_.getNode(new Ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xR(t){return QB({timestamp:m4(t)})}function dE(t,e,n,r,s){t.dataUpdateCount++;const i=new Ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=Ol(n,u=>Vt(u));o=zB(t.serverSyncTree_,i,c,s)}else{const c=Vt(n);o=GB(t.serverSyncTree_,i,c,s)}else if(r){const c=Ol(n,u=>Vt(u));o=KB(t.serverSyncTree_,i,c)}else{const c=Vt(n);o=Zu(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Fg(t,i)),ni(t.eventQueue_,a,o)}function pE(t,e){Mg(t,"connected",e),e===!1&&v4(t)}function _4(t,e){Tn(e,(n,r)=>{Mg(t,n,r)})}function Mg(t,e,n){const r=new Ge("/.info/"+e),s=Vt(n);t.infoData_.updateSnapshot(r,s);const i=Zu(t.infoSyncTree_,r,s);ni(t.eventQueue_,r,i)}function y4(t){return t.nextWriteId_++}function v4(t){LR(t,"onDisconnectEvents");const e=xR(t),n=tu();Cd(t.onDisconnect_,Me(),(s,i)=>{const o=JB(s,i,t.serverSyncTree_,e);cR(n,s,o)});let r=[];Cd(n,Me(),(s,i)=>{r=r.concat(Zu(t.serverSyncTree_,s,i));const o=I4(t,s);Fg(t,o)}),t.onDisconnect_=tu(),ni(t.eventQueue_,Me(),r)}function E4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(f4)}function LR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Mt(n,...e)}function MR(t,e,n){return IR(t.serverSyncTree_,e,n)||De.EMPTY_NODE}function Vg(t,e=t.transactionQueueTree_){if(e||nh(t,e),lo(e)){const n=FR(t,e);Y(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&T4(t,oc(e),n)}else kR(e)&&th(e,n=>{Vg(t,n)})}function T4(t,e,n){const r=n.map(u=>u.currentWriteId),s=MR(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];Y(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=gn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{LR(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(wi(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();nh(t,Lg(t.transactionQueueTree_,e)),Vg(t,t.transactionQueueTree_),ni(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)sc(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ln("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Fg(t,e)}},o)}function Fg(t,e){const n=VR(t,e),r=oc(n),s=FR(t,n);return w4(t,s,r),r}function w4(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=gn(n,c.path);let h=!1,f;if(Y(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,s=s.concat(wi(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=d4)h=!0,f="maxretry",s=s.concat(wi(t.serverSyncTree_,c.currentWriteId,!0));else{const p=MR(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){DR("transaction failed: Data returned ",m,c.path);let E=Vt(m);typeof m=="object"&&m!=null&&Ar(m,".priority")||(E=E.updatePriority(p.getPriority()));const S=c.currentWriteId,D=xR(t),O=ZB(E,p,D);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=O,c.currentWriteId=y4(t),o.splice(o.indexOf(S),1),s=s.concat(WB(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),s=s.concat(wi(t.serverSyncTree_,S,!0))}else h=!0,f="nodata",s=s.concat(wi(t.serverSyncTree_,c.currentWriteId,!0))}ni(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}nh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)sc(r[a]);Vg(t,t.transactionQueueTree_)}function VR(t,e){let n,r=t.transactionQueueTree_;for(n=Re(e);n!==null&&lo(r)===void 0;)r=Lg(r,n),e=qe(e),n=Re(e);return r}function FR(t,e){const n=[];return UR(t,e,n),n.sort((r,s)=>r.order-s.order),n}function UR(t,e,n){const r=lo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);th(e,s=>{UR(t,s,n)})}function nh(t,e){const n=lo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,PR(e,n.length>0?n:void 0)}th(e,r=>{nh(t,r)})}function I4(t,e){const n=oc(VR(t,e)),r=Lg(t.transactionQueueTree_,e);return t4(r,s=>{of(t,s)}),of(t,r),NR(r,s=>{of(t,s)}),n}function of(t,e){const n=lo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Y(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(Y(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(wi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?PR(e,void 0):n.length=i+1,ni(t.eventQueue_,oc(e),s);for(let o=0;o<r.length;o++)sc(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function R4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ln(`Invalid query segment '${n}' in query '${t}'`)}return e}const gE=function(t,e){const n=A4(t),r=n.namespace;n.domain==="firebase.com"&&Ws(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ws("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||t2();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new f2(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ge(n.pathString)}},A4=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=b4(t.substring(h,f)));const p=R4(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Ie(this._path)?null:J0(this._path)}get ref(){return new uo(this._repo,this._path)}get _queryIdentifier(){const e=eE(this._queryParams),n=vg(e);return n==="{}"?"default":n}get _queryObject(){return eE(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof Ug))return!1;const n=this._repo===e._repo,r=tR(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+F2(this._path)}}class uo extends Ug{constructor(e,n){super(e,n,new Rg,!1)}get parent(){const e=eR(this._path);return e===null?null:new uo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}HB(uo);qB(uo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4="FIREBASE_DATABASE_EMULATOR_HOST",Ld={};let S4=!1;function P4(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Ws("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Mt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gE(i,s),a=o.repoInfo,c;typeof process<"u"&&Lv&&(c=Lv[C4]),c?(i=`http://${c}?ns=${a.namespace}`,o=gE(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new h2(t.name,t.options,e);a4("Invalid Firebase Database URL",o),Ie(o.path)||Ws("Database URL must point to the root of a Firebase Database (not including a child path).");const h=N4(a,t,u,new u2(t.name,n));return new O4(h,t)}function k4(t,e){const n=Ld[e];(!n||n[t.key]!==t)&&Ws(`Database ${e}(${t.repoInfo_}) has already been deleted.`),E4(t),delete n[t.key]}function N4(t,e,n,r){let s=Ld[e.name];s||(s={},Ld[e.name]=s);let i=s[t.toURLString()];return i&&Ws("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new p4(t,S4,n,r),s[t.toURLString()]=i,i}class O4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(g4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new uo(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(k4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ws("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(t){QU(fs),Qn(new Dn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return P4(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),an(Mv,Vv,t),an(Mv,Vv,"esm2017")}_r.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_r.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};D4();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="firebasestorage.googleapis.com",jR="storageBucket",x4=2*60*1e3,L4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Jn{constructor(e,n,r=0){super(af(e),`Firebase Storage: ${n} (${af(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function af(t){return"storage/"+t}function Bg(){const t="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,t)}function M4(t){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function V4(t){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function F4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,t)}function U4(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function B4(t){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function j4(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $4(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function H4(t){return new rt(nt.INVALID_URL,"Invalid URL '"+t+"'.")}function q4(t){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function W4(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jR+"' property when initializing the app?")}function K4(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function G4(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function z4(t){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Md(t){return new rt(nt.INVALID_ARGUMENT,t)}function $R(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function Q4(t){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ha(t,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Do(t){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw q4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),E={bucket:1,path:3},R=n===BR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",D=new RegExp(`^https?://${R}/${s}/${S}`,"i"),w=[{regex:a,indices:c,postModify:i},{regex:m,indices:E,postModify:u},{regex:D,indices:{bucket:1,path:2},postModify:u}];for(let k=0;k<w.length;k++){const x=w[k],L=x.regex.exec(e);if(L){const I=L[x.indices.bucket];let y=L[x.indices.path];y||(y=""),r=new on(I,y),x.postModify(r);break}}if(r==null)throw H4(e);return r}}class Y4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function f(S){s=setTimeout(()=>{s=null,t(m,c())},S)}function p(){i&&clearTimeout(i)}function m(S,...D){if(u){p();return}if(S){p(),h.call(null,S,...D);return}if(c()||o){p(),h.call(null,S,...D);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let E=!1;function R(S){E||(E=!0,p(),!u&&(s!==null?(S||(a=2),clearTimeout(s),f(0)):S||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function J4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(t){return t!==void 0}function ej(t){return typeof t=="object"&&!Array.isArray(t)}function jg(t){return typeof t=="string"||t instanceof String}function mE(t){return $g()&&t instanceof Blob}function $g(){return typeof Blob<"u"}function _E(t,e,n,r){if(r<e)throw Md(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Md(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function HR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Us;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Us||(Us={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tj(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n,r,s,i,o,a,c,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,E)=>{this.resolve_=m,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Wc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Us.NO_ERROR,c=i.getStatus();if(!a||tj(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Us.ABORT;r(!1,new Wc(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Wc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Z4(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Bg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?$R():$4();o(c)}else{const c=j4();o(c)}};this.canceled_?n(!1,new Wc(!1,null,!0)):this.backoffId_=X4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&J4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ij(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aj(t,e,n,r,s,i,o=!0){const a=HR(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return ij(u,e),rj(u,n),sj(u,i),oj(u,r),new nj(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lj(...t){const e=cj();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if($g())return new Blob(t);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uj(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(t){if(typeof atob>"u")throw z4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cf{constructor(e,n){this.data=e,this.contentType=n||null}}function fj(t,e){switch(t){case qn.RAW:return new cf(qR(e));case qn.BASE64:case qn.BASE64URL:return new cf(WR(t,e));case qn.DATA_URL:return new cf(pj(e),gj(e))}throw Bg()}function qR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dj(t){let e;try{e=decodeURIComponent(t)}catch{throw ha(qn.DATA_URL,"Malformed data URL.")}return qR(e)}function WR(t,e){switch(t){case qn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ha(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case qn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ha(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=hj(e)}catch(s){throw s.message.includes("polyfill")?s:ha(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class KR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ha(qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=mj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pj(t){const e=new KR(t);return e.base64?WR(qn.BASE64,e.rest):dj(e.rest)}function gj(t){return new KR(t).contentType}function mj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){let r=0,s="";mE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(mE(this.data_)){const r=this.data_,s=uj(r,e,n);return s===null?null:new Wr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Wr(r,!0)}}static getBlob(...e){if($g()){const n=e.map(r=>r instanceof Wr?r.data_:r);return new Wr(lj.apply(null,n))}else{const n=e.map(o=>jg(o)?fj(qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Wr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){let e;try{e=JSON.parse(t)}catch{return null}return ej(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _j(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vj(t,e){return e}class qt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||vj}}let Kc=null;function Ej(t){return!jg(t)||t.length<2?t:zR(t)}function QR(){if(Kc)return Kc;const t=[];t.push(new qt("bucket")),t.push(new qt("generation")),t.push(new qt("metageneration")),t.push(new qt("name","fullPath",!0));function e(i,o){return Ej(o)}const n=new qt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new qt("size");return s.xform=r,t.push(s),t.push(new qt("timeCreated")),t.push(new qt("updated")),t.push(new qt("md5Hash",null,!0)),t.push(new qt("cacheControl",null,!0)),t.push(new qt("contentDisposition",null,!0)),t.push(new qt("contentEncoding",null,!0)),t.push(new qt("contentLanguage",null,!0)),t.push(new qt("contentType",null,!0)),t.push(new qt("metadata","customMetadata",!0)),Kc=t,Kc}function Tj(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new on(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function wj(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Tj(r,t),r}function YR(t,e,n){const r=GR(e);return r===null?null:wj(t,r,n)}function Ij(t,e,n,r){const s=GR(e);if(s===null||!jg(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),m=Hg(p,n,r),E=HR({alt:"media",token:u});return m+E})[0]}function bj(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class XR{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){if(!t)throw Bg()}function Rj(t,e){function n(r,s){const i=YR(t,s,e);return JR(i!==null),i}return n}function Aj(t,e){function n(r,s){const i=YR(t,s,e);return JR(i!==null),Ij(i,s,t.host,t._protocol)}return n}function ZR(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=U4():s=F4():n.getStatus()===402?s=V4(t.bucket):n.getStatus()===403?s=B4(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Cj(t){const e=ZR(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=M4(t.path)),i.serverResponse=s.serverResponse,i}return n}function Sj(t,e,n){const r=e.fullServerUrl(),s=Hg(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new XR(s,i,Aj(t,n),o);return a.errorHandler=Cj(e),a}function Pj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kj(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Pj(null,e)),r}function Nj(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let k=0;k<2;k++)w=w+Math.random().toString().slice(2);return w}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=kj(e,r,s),h=bj(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=Wr.getBlob(f,r,p);if(m===null)throw K4();const E={name:u.fullPath},R=Hg(i,t.host,t._protocol),S="POST",D=t.maxUploadRetryTime,O=new XR(R,S,Rj(t,n),D);return O.urlParams=E,O.headers=o,O.body=m.uploadData(),O.errorHandler=ZR(e),O}class Oj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Do("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Do("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Do("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Do("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Do("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Dj extends Oj{initXhr(){this.xhr_.responseType="text"}}function eA(){return new Dj}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qs(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zR(this._location.path)}get storage(){return this._service}get parent(){const e=_j(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new Qs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Q4(e)}}function xj(t,e,n){t._throwIfRoot("uploadBytes");const r=Nj(t.storage,t._location,QR(),new Wr(e,!0),n);return t.storage.makeRequestWithTokens(r,eA).then(s=>({metadata:s,ref:t}))}function Lj(t){t._throwIfRoot("getDownloadURL");const e=Sj(t.storage,t._location,QR());return t.storage.makeRequestWithTokens(e,eA).then(n=>{if(n===null)throw G4();return n})}function Mj(t,e){const n=yj(t._location.path,e),r=new on(t._location.bucket,n);return new Qs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vj(t){return/^[A-Za-z]+:\/\//.test(t)}function Fj(t,e){return new Qs(t,e)}function tA(t,e){if(t instanceof qg){const n=t;if(n._bucket==null)throw W4();const r=new Qs(n,n._bucket);return e!=null?tA(r,e):r}else return e!==void 0?Mj(t,e):t}function Uj(t,e){if(e&&Vj(e)){if(t instanceof qg)return Fj(t,e);throw Md("To use ref(service, url), the first argument must be a Storage instance.")}else return tA(t,e)}function yE(t,e){const n=e==null?void 0:e[jR];return n==null?null:on.makeFromBucketSpec(n,t)}function Bj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Jw(s,t.app.options.projectId))}class qg{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=BR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=x4,this._maxUploadRetryTime=L4,this._requests=new Set,s!=null?this._bucket=on.makeFromBucketSpec(s,this._host):this._bucket=yE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=yE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Y4($R());{const o=aj(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const vE="@firebase/storage",EE="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="storage";function E9(t,e,n){return t=tt(t),xj(t,e,n)}function T9(t){return t=tt(t),Lj(t)}function w9(t,e){return t=tt(t),Uj(t,e)}function jj(t=Ip(),e){t=tt(t);const r=wp(t,nA).getImmediate({identifier:e}),s=Yw("storage");return s&&$j(r,...s),r}function $j(t,e,n,r={}){Bj(t,e,n,r)}function Hj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new qg(n,r,s,e,fs)}function qj(){Qn(new Dn(nA,Hj,"PUBLIC").setMultipleInstances(!0)),an(vE,EE,""),an(vE,EE,"esm2017")}qj();function I9(t){return PL(yg(t))}const Wg=Symbol("VueFireAuth");function Wj({dependencies:t,initialUser:e}){return(n,r)=>{const[s,i]=Kj(n,r,e,t);zU(s,i)}}function Kj(t,e,n,r,s=KV(t,r)){const i=WU(t,e).run(()=>_n(n));return KU.set(t,i),e.provide(Wg,s),[i,s]}function b9(t){return qU?at(Wg):null}function R9(t){return jj(yg(t))}function Gj(t,{firebaseApp:e,modules:n=[]}){t.provide(C0,e);for(const r of n)r(e,t)}const zj=()=>Je().$firebaseApp,Qj=t=>GU(zj().name),Yj=async(t,e)=>{let n,r;if(!([n,r]=Vs(()=>Qj()),n=await n,r(),n)&&!t.path.includes("/login"))return Qk({path:"/login"})},Xj=async t=>{let e,n;const r=([e,n]=Vs(()=>vp(t.path)),e=await e,n(),e);if(r.redirect)return Js(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},Jj=[hV,Yj,Xj],fa={};function Zj(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),N_(h,"")}const a=N_(r,t),c=!n||JP(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const e$=zt({name:"nuxt:router",enforce:"pre",async setup(t){var S;let e,n,r=Ji().app.baseURL;dn.hashMode&&!r.includes("#")&&(r+="#");const s=((S=dn.history)==null?void 0:S.call(dn,r))??(dn.hashMode?wM(r):Ub(r)),i=dn.routes?([e,n]=Vs(()=>dn.routes(Yh)),e=await e,n(),e??Yh):Yh;let o;const a=KM({...dn,scrollBehavior:(D,O,w)=>{if(O===bn){o=w;return}if(dn.scrollBehavior){if(a.options.scrollBehavior=dn.scrollBehavior,"scrollRestoration"in window.history){const k=a.beforeEach(()=>{k(),window.history.scrollRestoration="manual"})}return dn.scrollBehavior(D,bn,o||w)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=ma(a.currentRoute.value);a.afterEach((D,O)=>{c.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=Zj(r,window.location,t.payload.path),h=ma(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((D,O)=>{var w,k,x,L;((k=(w=D.matched[0])==null?void 0:w.components)==null?void 0:k.default)===((L=(x=O.matched[0])==null?void 0:x.components)==null?void 0:L.default)&&f()});const p={};for(const D in h.value)Object.defineProperty(p,D,{get:()=>h.value[D],enumerable:!0});t._route=lr(p),t._middleware=t._middleware||{global:[],named:{}};const m=vu();a.afterEach(async(D,O,w)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(Xk),w&&await t.callHook("page:loading:end")});try{[e,n]=Vs(()=>a.isReady()),await e,n()}catch(D){[e,n]=Vs(()=>t.runWithContext(()=>Ei(D))),await e,n()}const E=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const R=t.payload.state._layout;return a.beforeEach(async(D,O)=>{var w;await t.callHook("page:loading:start"),D.meta=Xn(D.meta),t.isHydrating&&R&&!ts(D.meta.layout)&&(D.meta.layout=R),t._processingMiddleware=!0;{const k=new Set([...Jj,...t._middleware.global]);for(const x of D.matched){const L=x.meta.middleware;if(L)for(const I of og(L))k.add(I)}{const x=await t.runWithContext(()=>vp(D.path));if(x.appMiddleware)for(const L in x.appMiddleware)x.appMiddleware[L]?k.add(L):k.delete(L)}for(const x of k){const L=typeof x=="string"?t._middleware.named[x]||await((w=fa[x])==null?void 0:w.call(fa).then(y=>y.default||y)):x;if(!L)throw new Error(`Unknown route middleware: '${x}'.`);const I=await t.runWithContext(()=>L(D,O));if(!t.payload.serverRendered&&t.isHydrating&&(I===!1||I instanceof Error)){const y=I||Mf({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ei(y)),!1}if(I!==!0&&(I||I===!1))return I}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(D,O)=>{D.matched.length===0&&await t.runWithContext(()=>Ei(Mf({statusCode:404,fatal:!1,statusMessage:`Page not found: ${D.fullPath}`,data:{path:D.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in E&&(E.name=void 0),await a.replace({...E,force:!0}),a.options.scrollBehavior=dn.scrollBehavior}catch(D){await t.runWithContext(()=>Ei(D))}}),{provide:{router:a}}}}),TE=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),A9=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Kg=t=>{const e=Je();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{TE(()=>t())}):TE(()=>t())},t$=zt({name:"nuxt:payload",setup(t){vn().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await G_(e.path);r&&Object.assign(t.static.data,r.data)}),Kg(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await G_(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Tu,1e3)})}}),n$=zt(()=>{const t=vn();Kg(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),r$=zt(t=>{let e;async function n(){const r=await Tu();e&&clearTimeout(e),e=setTimeout(n,M_);try{const s=await $fetch(_p("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Kg(()=>{e=setTimeout(n,M_)})});function s$(t={}){const e=t.path||window.location.pathname;let n={};try{n=Il(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Je().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const i$=zt({name:"nuxt:chunk-reload",setup(t){const e=vn(),n=Ji(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:mp(n.app.baseURL,i.fullPath);s$({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),o$={nuxt:{},icon:{provider:"iconify",class:"",aliases:{},iconifyApiEndpoint:"https://api.iconify.design",localApiEndpoint:"/api/_nuxt_icon",fallbackToApi:!0,cssSelectorPrefix:"i-",cssWherePseudo:!0,mode:"css",attrs:{"aria-hidden":!0},collections:["academicons","akar-icons","ant-design","arcticons","basil","bi","bitcoin-icons","bpmn","brandico","bx","bxl","bxs","bytesize","carbon","catppuccin","cbi","charm","ci","cib","cif","cil","circle-flags","circum","clarity","codicon","covid","cryptocurrency","cryptocurrency-color","dashicons","devicon","devicon-plain","ei","el","emojione","emojione-monotone","emojione-v1","entypo","entypo-social","eos-icons","ep","et","eva","f7","fa","fa-brands","fa-regular","fa-solid","fa6-brands","fa6-regular","fa6-solid","fad","fe","feather","file-icons","flag","flagpack","flat-color-icons","flat-ui","flowbite","fluent","fluent-emoji","fluent-emoji-flat","fluent-emoji-high-contrast","fluent-mdl2","fontelico","fontisto","formkit","foundation","fxemoji","gala","game-icons","geo","gg","gis","gravity-ui","gridicons","grommet-icons","guidance","healthicons","heroicons","heroicons-outline","heroicons-solid","hugeicons","humbleicons","ic","icomoon-free","icon-park","icon-park-outline","icon-park-solid","icon-park-twotone","iconamoon","iconoir","icons8","il","ion","iwwa","jam","la","lets-icons","line-md","logos","ls","lucide","lucide-lab","mage","majesticons","maki","map","marketeq","material-symbols","material-symbols-light","mdi","mdi-light","medical-icon","memory","meteocons","mi","mingcute","mono-icons","mynaui","nimbus","nonicons","noto","noto-v1","octicon","oi","ooui","openmoji","oui","pajamas","pepicons","pepicons-pencil","pepicons-pop","pepicons-print","ph","pixelarticons","prime","ps","quill","radix-icons","raphael","ri","rivet-icons","si-glyph","simple-icons","simple-line-icons","skill-icons","solar","streamline","streamline-emojis","subway","svg-spinners","system-uicons","tabler","tdesign","teenyicons","token","token-branded","topcoat","twemoji","typcn","uil","uim","uis","uit","uiw","unjs","vaadin","vs","vscode-icons","websymbol","weui","whh","wi","wpf","zmdi","zondicons"],fetchTimeout:1500}},a$=$k(o$);function c$(){const t=Je();return t._appConfig||(t._appConfig=Xn(a$)),t._appConfig}const l$=zt({name:"pinia",setup(t){const e=eN();return t.vueApp.use(e),Wa(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),u$=yl(()=>Bn(()=>import("./gnPeoup1.js"),[],import.meta.url).then(t=>t.default||t.default||t)),h$=[["Icon",u$]],f$=zt({name:"nuxt:global-components",setup(t){for(const[e,n]of h$)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),Gr={auth:yl(()=>Bn(()=>import("./BdyHTcMX.js"),__vite__mapDeps([15,13,14,4,1]),import.meta.url))},d$=zt({name:"nuxt:prefetch",setup(t){const e=vn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Gr[r]=="function"&&await Gr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Js(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=og(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof fa[o]=="function"&&fa[o]();s&&typeof Gr[s]=="function"&&Gr[s]()})}}),p$=zt(()=>({provide:{firebaseApp:iI(Ji().public.vuefire.config)}})),g$=zt(t=>{const e=t.$firebaseApp;return Wj({initialUser:t.payload.vuefireUser,dependencies:{errorMap:Gb,persistence:[bF,hF],popupRedirectResolver:fU}})(e,t.vueApp),{provide:{firebaseAuth:t.vueApp.runWithContext(()=>at(Wg))}}}),m$=zt(t=>{const e=t.$firebaseApp;t.vueApp.use(Gj,{firebaseApp:e})}),rA=/^[a-z0-9]+(-[a-z0-9]+)*$/,ac=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),c=s.pop(),u={provider:s.length>0?s[0]:r,prefix:c,name:a};return e&&!ul(u)?null:u}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!ul(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!ul(a,n)?null:a}return null},ul=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,sA=Object.freeze({left:0,top:0,width:16,height:16}),iu=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ho=Object.freeze({...sA,...iu}),Vd=Object.freeze({...ho,body:"",hidden:!1});function _$(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function wE(t,e){const n=_$(t,e);for(const r in Vd)r in iu?r in t&&!(r in n)&&(n[r]=iu[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function y$(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,c=a&&i(a);c&&(s[o]=[a].concat(c))}return s[o]}return Object.keys(n).concat(Object.keys(r)).forEach(i),s}function v$(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=wE(r[a]||s[a],i)}return o(e),n.forEach(o),wE(t,i)}function iA(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=y$(t);for(const s in r){const i=r[s];i&&(e(s,v$(t,s,i)),n.push(s))}return n}const E$={provider:"",aliases:{},not_found:{},...sA};function lf(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function oA(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!lf(t,E$))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s||typeof i.body!="string"||!lf(i,Vd))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s||typeof o!="string"||!n[o]&&!r[o]||!lf(i,Vd))return null}return e}const IE=Object.create(null);function T$(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function ls(t,e){const n=IE[t]||(IE[t]=Object.create(null));return n[e]||(n[e]=T$(t,e))}function Gg(t,e){return oA(e)?iA(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function w$(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Va=!1;function aA(t){return typeof t=="boolean"&&(Va=t),Va}function zg(t){const e=typeof t=="string"?ac(t,!0,Va):t;if(e){const n=ls(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function I$(t,e){const n=ac(t,!0,Va);if(!n)return!1;const r=ls(n.provider,n.prefix);return e?w$(r,n.name,e):(r.missing.add(n.name),!0)}function b$(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Va&&!e&&!t.prefix){let s=!1;return oA(t)&&(t.prefix="",iA(t,(i,o)=>{I$(i,o)&&(s=!0)})),s}const n=t.prefix;if(!ul({provider:e,prefix:n,name:"a"}))return!1;const r=ls(e,n);return!!Gg(r,t)}function C9(t){const e=zg(t);return e&&{...ho,...e}}const cA=Object.freeze({width:null,height:null}),lA=Object.freeze({...cA,...iu}),R$=/(-?[0-9.]*[0-9]+[0-9.]*)/g,A$=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function bE(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(R$);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=A$.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function C$(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const s=t.indexOf(">",r),i=t.indexOf("</"+e);if(s===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(s+1,i).trim(),t=t.slice(0,r).trim()+t.slice(o+1)}return{defs:n,content:t}}function S$(t,e){return t?"<defs>"+t+"</defs>"+e:e}function P$(t,e,n){const r=C$(t);return S$(r.defs,e+r.content+n)}const k$=t=>t==="unset"||t==="undefined"||t==="none";function N$(t,e){const n={...ho,...t},r={...lA,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(R=>{const S=[],D=R.hFlip,O=R.vFlip;let w=R.rotate;D?O?w+=2:(S.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),S.push("scale(-1 1)"),s.top=s.left=0):O&&(S.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),S.push("scale(1 -1)"),s.top=s.left=0);let k;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:k=s.height/2+s.top,S.unshift("rotate(90 "+k.toString()+" "+k.toString()+")");break;case 2:S.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:k=s.width/2+s.left,S.unshift("rotate(-90 "+k.toString()+" "+k.toString()+")");break}w%2===1&&(s.left!==s.top&&(k=s.left,s.left=s.top,s.top=k),s.width!==s.height&&(k=s.width,s.width=s.height,s.height=k)),S.length&&(i=P$(i,'<g transform="'+S.join(" ")+'">',"</g>"))});const o=r.width,a=r.height,c=s.width,u=s.height;let h,f;o===null?(f=a===null?"1em":a==="auto"?u:a,h=bE(f,c/u)):(h=o==="auto"?c:o,f=a===null?bE(h,u/c):a==="auto"?u:a);const p={},m=(R,S)=>{k$(S)||(p[R]=S.toString())};m("width",h),m("height",f);const E=[s.left,s.top,c,u];return p.viewBox=E.join(" "),{attributes:p,viewBox:E,body:i}}const O$=/\sid="(\S+)"/g,D$="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let x$=0;function L$(t,e=D$){const n=[];let r;for(;r=O$.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(x$++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Fd=Object.create(null);function uA(t,e){Fd[t]=e}function Ud(t){return Fd[t]||Fd[""]}function Qg(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const rh=Object.create(null),xo=["https://api.simplesvg.com","https://api.unisvg.com"],hl=[];for(;xo.length>0;)xo.length===1||Math.random()>.5?hl.push(xo.shift()):hl.push(xo.pop());rh[""]=Qg({resources:["https://api.iconify.design"].concat(hl)});function hA(t,e){const n=Qg(e);return n===null?!1:(rh[t]=n,!0)}function sh(t){return rh[t]}function M$(){return Object.keys(rh)}const V$=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let ou=V$();function F$(t){ou=t}function U$(){return ou}function B$(t,e){const n=sh(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function j$(t){return t===404}const $$=(t,e,n)=>{const r=[],s=B$(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,u)=>{a+=c.length+1,a>=s&&u>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),r.push(o),r};function H$(t){if(typeof t=="string"){const e=sh(t);if(e)return e.path}return"/"}const q$=(t,e,n)=>{if(!ou){n("abort",424);return}let r=H$(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;ou(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(j$(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},W$={prepare:$$,send:q$};function K$(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=ls(i,o));let h;a in u.icons?h=e.loaded:o===""||u.missing.has(a)?h=e.missing:h=e.pending;const f={provider:i,prefix:o,name:a};h.push(f)}),e}function fA(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function G$(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:r,prefix:s,name:u});else if(t.missing.has(u))o.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||fA([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let z$=0;function Q$(t,e,n){const r=z$++,s=fA.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function Y$(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?ac(s,e,n):s;i&&r.push(i)}),r}var X$={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function J$(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let L=t.resources.slice(0);for(o=[];L.length>1;){const I=Math.floor(Math.random()*L.length);o.push(L[I]),L=L.slice(0,I).concat(L.slice(I+1))}o=o.concat(L)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",u=0,h,f=null,p=[],m=[];typeof r=="function"&&m.push(r);function E(){f&&(clearTimeout(f),f=null)}function R(){c==="pending"&&(c="aborted"),E(),p.forEach(L=>{L.status==="pending"&&(L.status="aborted")}),p=[]}function S(L,I){I&&(m=[]),typeof L=="function"&&m.push(L)}function D(){return{startTime:a,payload:e,status:c,queriesSent:u,queriesPending:p.length,subscribe:S,abort:R}}function O(){c="failed",m.forEach(L=>{L(void 0,h)})}function w(){p.forEach(L=>{L.status==="pending"&&(L.status="aborted")}),p=[]}function k(L,I,y){const _=I!=="success";switch(p=p.filter(T=>T!==L),c){case"pending":break;case"failed":if(_||!t.dataAfterTimeout)return;break;default:return}if(I==="abort"){h=y,O();return}if(_){h=y,p.length||(o.length?x():O());return}if(E(),w(),!t.random){const T=t.resources.indexOf(L.resource);T!==-1&&T!==t.index&&(t.index=T)}c="completed",m.forEach(T=>{T(y)})}function x(){if(c!=="pending")return;E();const L=o.shift();if(L===void 0){if(p.length){f=setTimeout(()=>{E(),c==="pending"&&(w(),O())},t.timeout);return}O();return}const I={status:"pending",resource:L,callback:(y,_)=>{k(I,y,_)}};p.push(I),u++,f=setTimeout(x,t.rotate),n(L,e,I.callback)}return setTimeout(x),D}function dA(t){const e={...X$,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,c,u){const h=J$(e,a,c,(f,p)=>{r(),u&&u(f,p)});return n.push(h),h}function i(a){return n.find(c=>a(c))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function RE(){}const uf=Object.create(null);function Z$(t){if(!uf[t]){const e=sh(t);if(!e)return;const n=dA(e),r={config:e,redundancy:n};uf[t]=r}return uf[t]}function pA(t,e,n){let r,s;if(typeof t=="string"){const i=Ud(t);if(!i)return n(void 0,424),RE;s=i.send;const o=Z$(t);o&&(r=o.redundancy)}else{const i=Qg(t);if(i){r=dA(i);const o=t.resources?t.resources[0]:"",a=Ud(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),RE):r.query(e,s,n)().abort}const AE="iconify2",Fa="iconify",gA=Fa+"-count",CE=Fa+"-version",mA=36e5,eH=168,tH=50;function Bd(t,e){try{return t.getItem(e)}catch{}}function Yg(t,e,n){try{return t.setItem(e,n),!0}catch{}}function SE(t,e){try{t.removeItem(e)}catch{}}function jd(t,e){return Yg(t,gA,e.toString())}function $d(t){return parseInt(Bd(t,gA))||0}const Bs={local:!0,session:!0},_A={local:new Set,session:new Set};let Xg=!1;function nH(t){Xg=t}let Gc=typeof window>"u"?{}:window;function yA(t){const e=t+"Storage";try{if(Gc&&Gc[e]&&typeof Gc[e].length=="number")return Gc[e]}catch{}Bs[t]=!1}function vA(t,e){const n=yA(t);if(!n)return;const r=Bd(n,CE);if(r!==AE){if(r){const a=$d(n);for(let c=0;c<a;c++)SE(n,Fa+c.toString())}Yg(n,CE,AE),jd(n,0);return}const s=Math.floor(Date.now()/mA)-eH,i=a=>{const c=Fa+a.toString(),u=Bd(n,c);if(typeof u=="string"){try{const h=JSON.parse(u);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>s&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&e(h,a))return!0}catch{}SE(n,c)}};let o=$d(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,jd(n,o)):_A[t].add(a))}function EA(){if(!Xg){nH(!0);for(const t in Bs)vA(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=ls(r,s);if(!Gg(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function rH(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in Bs)vA(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function sH(t,e){Xg||EA();function n(r){let s;if(!Bs[r]||!(s=yA(r)))return;const i=_A[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=$d(s),o>=tH||!jd(s,o+1))return;const a={cached:Math.floor(Date.now()/mA),provider:t.provider,data:e};return Yg(s,Fa+o.toString(),JSON.stringify(a))}e.lastModified&&!rH(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function PE(){}function iH(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,G$(t)}))}function oH(t){const e=[],n=[];return t.forEach(r=>{(r.match(rA)?e:n).push(r)}),{valid:e,invalid:n}}function Lo(t,e,n,r){function s(){const i=t.pendingIcons;e.forEach(o=>{i&&i.delete(o),t.icons[o]||t.missing.add(o)})}if(n&&typeof n=="object")try{if(!Gg(t,n).length){s();return}r&&sH(t,n)}catch(i){console.error(i)}s(),iH(t)}function kE(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function aH(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const i=t.loadIcon;if(t.loadIcons&&(s.length>1||!i)){kE(t.loadIcons(s,r,n),h=>{Lo(t,s,h,!1)});return}if(i){s.forEach(h=>{const f=i(h,r,n);kE(f,p=>{const m=p?{prefix:r,icons:{[h]:p}}:null;Lo(t,[h],m,!1)})});return}const{valid:o,invalid:a}=oH(s);if(a.length&&Lo(t,a,null,!1),!o.length)return;const c=r.match(rA)?Ud(n):null;if(!c){Lo(t,o,null,!1);return}c.prepare(n,r,o).forEach(h=>{pA(n,h,f=>{Lo(t,h.icons,f,!0)})})}))}const TA=(t,e)=>{const n=Y$(t,!0,aA()),r=K$(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,PE)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(c=>{const{provider:u,prefix:h}=c;if(h===a&&u===o)return;o=u,a=h,i.push(ls(u,h));const f=s[u]||(s[u]=Object.create(null));f[h]||(f[h]=[])}),r.pending.forEach(c=>{const{provider:u,prefix:h,name:f}=c,p=ls(u,h),m=p.pendingIcons||(p.pendingIcons=new Set);m.has(f)||(m.add(f),s[u][h].push(f))}),i.forEach(c=>{const u=s[c.provider][c.prefix];u.length&&aH(c,u)}),e?Q$(e,r,i):PE},S9=t=>new Promise((e,n)=>{const r=typeof t=="string"?ac(t,!0):t;if(!r){n(t);return}TA([r||t],s=>{if(s.length&&r){const i=zg(r);if(i){e({...ho,...i});return}}n(t)})});function cH(t,e,n){ls("",e).loadIcons=t}function lH(t,e){switch(t){case"local":case"session":Bs[t]=e;break;case"all":for(const n in Bs)Bs[n]=e;break}}function uH(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in cA?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const hH=/[\s,]+/;function fH(t,e){e.split(hH).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function dH(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function pH(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function gH(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function mH(t){return"data:image/svg+xml,"+gH(t)}function _H(t){return'url("'+mH(t)+'")'}const NE={...lA,inline:!1},yH={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},vH={display:"inline-block"},Hd={backgroundColor:"currentColor"},wA={backgroundColor:"transparent"},OE={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},DE={webkitMask:Hd,mask:Hd,background:wA};for(const t in DE){const e=DE[t];for(const n in OE)e[t+n]=OE[n]}const fl={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";fl[t+"-flip"]=e,fl[t.slice(0,1)+"-flip"]=e,fl[t+"Flip"]=e});function xE(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const LE=(t,e)=>{const n=uH(NE,e),r={...yH},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let R in e){const S=e[R];if(S!==void 0)switch(R){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[R]=S===!0||S==="true"||S===1;break;case"flip":typeof S=="string"&&fH(n,S);break;case"color":i.color=S;break;case"rotate":typeof S=="string"?n[R]=dH(S):typeof S=="number"&&(n[R]=S);break;case"ariaHidden":case"aria-hidden":S!==!0&&S!=="true"&&delete r["aria-hidden"];break;default:{const D=fl[R];D?(S===!0||S==="true"||S===1)&&(n[D]=!0):NE[R]===void 0&&(r[R]=S)}}}const c=N$(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,u);let R=0,S=e.id;return typeof S=="string"&&(S=S.replace(/-/g,"_")),r.innerHTML=L$(c.body,S?()=>S+"ID"+R++:"iconifyVue"),Ft("svg",r)}const{body:h,width:f,height:p}=t,m=s==="mask"||(s==="bg"?!1:h.indexOf("currentColor")!==-1),E=pH(h,{...u,width:f+"",height:p+""});return r.style={...i,"--svg":_H(E),width:xE(u.width),height:xE(u.height),...vH,...m?Hd:wA,...a},Ft("span",r)};function EH(t){lH(t,!1)}aA(!0);uA("",W$);if(typeof document<"u"&&typeof window<"u"){EA();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!b$(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;hA(n,s)||console.error(r)}catch{console.error(r)}}}}const TH={...ho,body:""},P9=br({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let r;if(typeof t!="string"||(r=ac(t,!1,!0))===null)return this.abortLoading(),null;let s=zg(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:TA([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,r.name,r.prefix,r.provider);typeof o=="string"&&(s.body=o)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:s,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return LE(TH,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),LE({...ho,...e.data},n)}}),wH={getAPIConfig:sh,setAPIModule:uA,sendAPIQuery:pA,setFetch:F$,getFetch:U$,listAPIProviders:M$},IH=zt({name:"@nuxt/icon",setup(){var s,i;const t=Ji(),e=c$().icon;wH.setFetch($fetch.native),EH("all");const n=[];if(e.provider==="server"){const o=((i=(s=t.app)==null?void 0:s.baseURL)==null?void 0:i.replace(/\/$/,""))??"";n.push(o+(e.localApiEndpoint||"/api/_nuxt_icon")),(e.fallbackToApi===!0||e.fallbackToApi==="client-only")&&n.push(e.iconifyApiEndpoint)}else n.push(e.iconifyApiEndpoint);async function r(o,a){try{const c=await $fetch(n[0]+"/"+a+".json",{query:{icons:o.join(",")}});if(!c||c.prefix!==a||!c.icons)throw new Error("Invalid data"+JSON.stringify(c));return c}catch(c){return console.error("Failed to load custom icons",c),null}}hA("",{resources:n});for(const o of e.customCollections||[])o&&cH(r,o)}}),bH=[nO,jL,HL,WL,e$,t$,n$,r$,i$,l$,f$,d$,p$,g$,m$,IH],RH=br({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return xs(qa,lr(r)),()=>Ft(t.vnode,{ref:t.vnodeRef})}}),AH=br({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Je(),i=_n(),o=at(qa,null);let a;r({pageRef:i});const c=at(Pw,null);let u;const h=s.deferHydration();if(s.isHydrating){const f=s.hooks.hookOnce("app:error",h);vn().beforeEach(f)}return t.pageKey&&Ls(()=>t.pageKey,(f,p)=>{f!==p&&s.callHook("page:loading:start")}),()=>Ft(qb,{name:t.name,route:t.route,...e},{default:f=>{const p=SH(o,f.route,f.Component),m=o&&o.matched.length===f.route.matched.length;if(!f.Component){if(u&&!m)return u;h();return}if(u&&c&&!c.isCurrent(f.route))return u;if(p&&o&&(!c||c!=null&&c.isCurrent(o)))return m?u:null;const E=_d(f,t.pageKey);!s.isHydrating&&!PH(o,f.route,f.Component)&&a===E&&s.callHook("page:loading:end"),a=E;const R=!!(t.transition??f.route.meta.pageTransition??Df),S=R&&CH([t.transition,f.route.meta.pageTransition,Df,{onAfterLeave:()=>{s.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),D=t.keepalive??f.route.meta.keepalive??kk;return u=Wb(lw,R&&S,ZM(D,Ft(fp,{suspensible:!0,onPending:()=>s.callHook("page:start",f.Component),onResolve:()=>{Xs(()=>s.callHook("page:finish",f.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const O=Ft(RH,{key:E||void 0,vnode:n.default?Ft(xt,void 0,n.default(f)):f.Component,route:f.route,renderKey:E||void 0,trackRootNodes:R,vnodeRef:i});return D&&(O.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),O}}))).default(),u}})}});function CH(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?og(n.onAfterLeave):void 0}));return Cw(...e)}function SH(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&_d({route:e,Component:n})!==_d({route:t,Component:n})}function PH(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const kH=br({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Ft(Gr[t.name],t.layoutProps,e.slots)}}),NH=br({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=Je(),r=at(qa),s=r===yp()?zM():r,i=rn(()=>{let c=Be(t.name)??s.meta.layout??"default";return c&&!(c in Gr)&&t.fallback&&(c=Be(t.fallback)),c}),o=_n();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",a);vn().beforeEach(c)}return()=>{const c=i.value&&i.value in Gr,u=s.meta.layoutTransition??Pk;return Wb(lw,c&&u,{default:()=>Ft(fp,{suspensible:!0,onResolve:()=>{Xs(a)}},{default:()=>Ft(OH,{layoutProps:rw(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),OH=br({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&xs(Pw,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Gr)?(s=(r=e.slots).default)==null?void 0:s.call(r):Ft(kH,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),DH=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xH={};function LH(t,e){const n=AH,r=NH;return pn(),jn(r,null,{default:rp(()=>[Xe(n)]),_:1})}const MH=DH(xH,[["render",LH]]),VH={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?yl(()=>Bn(()=>import("./BZHVtlFp.js"),__vite__mapDeps([16,2,1,17]),import.meta.url)):yl(()=>Bn(()=>import("./DPxvJjsa.js"),__vite__mapDeps([18,1,19]),import.meta.url));return(f,p)=>(pn(),jn(Be(h),nC(tw({statusCode:Be(r),statusMessage:Be(i),description:Be(o),stack:Be(a)})),null,16))}},FH={key:0},ME={__name:"nuxt-root",setup(t){const e=()=>null,n=Je(),r=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",r);vn().beforeEach(c)}const s=!1;xs(qa,yp()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const i=vu(),o=!1;ST((c,u,h)=>{if(n.hooks.callHook("vue:error",c,u,h).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),Jk(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>Ei(c)),!1});const a=!1;return(c,u)=>(pn(),jn(fp,{onResolve:Be(r)},{default:rp(()=>[Be(o)?(pn(),MS("div",FH)):Be(i)?(pn(),jn(Be(VH),{key:1,error:Be(i)},null,8,["error"])):Be(a)?(pn(),jn(Be(e),{key:2,context:Be(a)},null,8,["context"])):Be(s)?(pn(),jn(rS(Be(s)),{key:3})):(pn(),jn(Be(MH),{key:4}))]),_:1},8,["onResolve"]))}};let VE;{let t;VE=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?wP(ME):TP(ME),s=Lk({vueApp:r});async function i(c){await s.callHook("app:error",c),s.payload.error=s.payload.error||Eu(c)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await Fk(s,bH)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(Ok),await s.hooks.callHook("app:mounted",r),await Xs()}catch(c){i(c)}return r},t=VE().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{YH as $,SL as A,a9 as B,l9 as C,d9 as D,u9 as E,xt as F,hu as G,h9 as H,KH as I,vn as J,Be as K,jn as L,g9 as M,_9 as N,m9 as O,y9 as P,$r as Q,v9 as R,Je as S,Kg as T,TE as U,op as V,A9 as W,Ft as X,$H as Y,UP as Z,DH as _,ew as a,Js as a0,Yk as a1,mp as a2,Qk as a3,Ji as a4,kf as a5,gp as a6,R9 as a7,I9 as a8,w9 as a9,S9 as aA,I$ as aB,P9 as aC,E9 as aa,T9 as ab,at as ac,fp as ad,Xs as ae,Xn as af,ga as ag,UH as ah,et as ai,pr as aj,Bn as ak,_u as al,WH as am,xs as an,NC as ao,CT as ap,qH as aq,JH as ar,YC as as,QC as at,$f as au,lw as av,jH as aw,XH as ax,c$ as ay,C9 as az,Xe as b,MS as c,nw as d,br as e,p9 as f,PL as g,rn as h,ip as i,r9 as j,i9 as k,o9 as l,f9 as m,c9 as n,pn as o,Ls as p,s9 as q,_n as r,HH as s,iC as t,b9 as u,QH as v,rp as w,BH as x,zH as y,GH as z};
