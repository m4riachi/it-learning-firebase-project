import{_ as i,o as u,c as l,a as t,t as s}from"./BtgEQtGO.js";import{u as a}from"./B98V5Umt.js";const c={__name:"error-dev",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:500},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."},stack:{type:String,default:""}},setup(o,{expose:r}){r();const e=o;a({title:`${e.statusCode} - ${e.statusMessage} | ${e.appName}`,script:[{children:`!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`}],style:[{children:'*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}h1,p,pre{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]});const n={props:e,get useHead(){return a}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},d={class:"antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"},p=["textContent"],f=["textContent"],g={class:"bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"},h=["innerHTML"];function m(o,r,e,n,b,x){return u(),l("div",d,[r[0]||(r[0]=t("div",{class:"fixed left-0 right-0 spotlight"},null,-1)),t("h1",{class:"font-medium mb-6 sm:text-8xl text-6xl",textContent:s(e.statusCode)},null,8,p),t("p",{class:"font-light leading-tight mb-8 sm:text-2xl text-xl",textContent:s(e.description)},null,8,f),t("div",g,[t("pre",{class:"font-light leading-tight p-8 text-xl z-10",innerHTML:e.stack},null,8,h)])])}const k=i(c,[["render",m],["__scopeId","data-v-103ec3e2"],["__file","/home/taoufiq/workspaces/it-learning/firebase/firebase-project/node_modules/nuxt/dist/app/components/error-dev.vue"]]);export{k as default};
//# sourceMappingURL=CgyzbQJE.js.map
