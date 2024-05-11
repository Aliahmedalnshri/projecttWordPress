!function(){"use strict";var e=window.wp.blocks,t=window.wp.blockEditor,a=window.wp.i18n,l=window.React,n=l.forwardRef((function({title:e,titleId:t,...a},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"}))})),r=l.forwardRef((function({title:e,titleId:t,...a},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));const o=(()=>{const e={};return Object.seal({on:(t,a)=>{e[t]||(e[t]=[]),e[t].push(a)},emit:function(t){for(var a=arguments.length,l=new Array(a>1?a-1:0),n=1;n<a;n++)l[n-1]=arguments[n];const r=e[t];r&&r.forEach((e=>e(...l)))},removeListener:(t,a)=>{const l=e[t];if(l){const e=l.findIndex((e=>e===a));-1!==e&&l.splice(e,1)}},removeAllListeners:t=>{e[t]&&delete e[t]}})})();var c=o;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s.apply(this,arguments)}var i=JSON.parse('{"u2":"gutenberg-templates/spectra-ai"}');(0,e.registerBlockType)(i.u2,{icon:React.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16343 24.8366 0 16 0C7.16343 0 0 7.16343 0 16C0 24.8366 7.16343 32 16 32ZM20.9202 20.688C21.8453 20.1032 22.4 19.1247 22.4 18.0775C22.4 16.6224 21.3376 15.357 19.8308 15.0174L15.3161 13.8968C14.8905 13.8009 14.7885 13.2761 15.1506 13.0452L18.6679 10.8017C20.3051 9.75739 20.7308 7.66455 19.6187 6.12718C19.4797 5.93499 19.2011 5.88503 18.9964 6.01559L11.0507 11.3753C10.1433 11.9541 9.6 12.9173 9.6 13.9473C9.6 15.3851 10.6496 16.6352 12.1385 16.9708L16.7267 18.108C17.1533 18.2042 17.2544 18.7307 16.8905 18.9607L13.3473 21.2006C11.7055 22.2385 11.2706 24.3297 12.3759 25.8714C12.5141 26.0641 12.7925 26.1152 12.9977 25.9854L20.9202 20.688Z",fill:"var(--colors-accent-spectra)"})),attributes:{isOpen:{type:"boolean",default:!0}},useOnce:!0,supports:{customClassName:!1,className:!1,html:!1},edit:e=>{let{onReplace:l}=e;const{blockProps:o}=(0,t.useBlockProps)();return React.createElement("div",s({className:"spectra-ai-block-layout block-wrapper border border-solid border-border-primary relative"},o),React.createElement("div",{className:"block-heading-wrapper"},React.createElement("h5",{className:"block-title"},(0,a.__)("Spectra AI Block","ast-block-templates")),React.createElement("p",{className:"block-description"},(0,a.__)("Eu lectus mauris vulputate et sem consequat ornare. Et consectetur sagittis faucibus eget.","ast-block-templates"))),React.createElement("div",{className:"block-buttons"},React.createElement("button",{className:"block-button button-primary prefix-icon",onClick:()=>{c.emit("toggle-onboarding-page-ai"),l([])}},React.createElement(n,{className:"button-icon"}),React.createElement("span",null,(0,a.__)("Build using AI","ast-block-templates"))),React.createElement("button",{className:"block-button button-secondary",onClick:()=>{const e=document.querySelector("#ast-block-templates-button");l([]),e&&e.click()}},React.createElement("span",null,(0,a.__)("Template Kits","ast-block-templates")))),React.createElement("button",{className:"close-button",onClick:()=>{l([])}},React.createElement(r,{className:"close-button-icon"})))},save:()=>!1})}();