var M;(c=>(c.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,c.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),c.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),c.isSafari=c.isWebKit&&!c.isChrome,c.isSafariDesktop=c.isSafari&&!c.isTouch,c.isWindows=/Win/u.test(navigator.platform),c.isMacOS=/Mac/u.test(navigator.platform),c.isAndroidWebView=c.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),c.isIosWebView=c.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),c.isWebView=c.isAndroidWebView||c.isIosWebView))(M||={});var N=class extends Promise{_state="initial";resolve;reject;get state(){return this._state}pending(){return this._state="pending",this}isResolved(){return this._state==="fulfilled"||this._state==="rejected"}constructor(){let o,i;super((a,t)=>{o=a,i=t}),this.resolve=a=>{this._state="fulfilled",o(a)},this.reject=a=>{this._state="rejected",i(a)}}};N.prototype.constructor=Promise;var j="framer_",y="editSite";var k="__framer_hide_editorbar_until",D="2147483647";var v="__framer-editorbar-smooth-gutter-transition";function U(e,o){return function(a,t){let[s,r]=o(!1);return e(()=>{let p=d=>{d.origin===a&&typeof d.data=="object"&&d.data&&"apiVersion"in d.data&&"type"in d.data&&"component"in d.data&&d.data.apiVersion===1&&d.data.type==="initializeComponent"&&d.data.component===t&&r(!0)};return window.addEventListener("message",p),()=>{window.removeEventListener("message",p)}},[a,t]),s}}function Y(e,o){let i=U(e,o);function a(t,s){let r=()=>{t?.current&&t.current.contentWindow?.postMessage({apiVersion:1,type:"updateScrollPosition",position:{top:window.scrollY}},s)};return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)}return function(s,r){let p=i(r,"OnPageSandboxStore/scrollRelayer");e(()=>{if(!p)return;let d=a(s,r);return()=>d()},[r,s,p])}}function G(e,o,i,a,t){return function(){let r=e(),p=i()?.activeLocale??void 0,{collectionUtils:d}=a(),[E,c]=t(),h=r?.id,C=r?.collectionId,x=r?.pathVariables;return o(()=>{if(!h)return;let A=!1;return ne(p,C,d,x).then(F=>{A||c({collectionItemNodeId:F,webPageNodeId:h})}).catch(()=>{A||c({collectionItemNodeId:void 0,webPageNodeId:h})}),()=>{A=!0}},[p,C,d,x,h]),E}}async function ne(e,o,i,a){if(!o)return;let t=Object.values(a??{}),[s]=t;if(t.length!==1||!s||typeof s!="string")return;let r=i?.[o];return(await r?.())?.getRecordIdBySlug(s,e)}function X(e,o,i,a,t){let s=G(e,o,i,a,t),r=U(o,t);return function(d,E){let c=s(),h=r(E,"OnPageActiveRouteStore");o(()=>{h&&d.current?.contentWindow?.postMessage({apiVersion:1,type:"updateNodeIds",nodeIds:c},E)},[d,c,E,h])}}var W=12,Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApNJREFUSA2tlUtLlFEYgEe7mtFFQ8NLFBG1SJAwahtiLVy5ceVSEPQH1LZf0Lp9FO1bdYNyI7gyBFcS2kAzilYq3sfxeYZ55Zv6FGfohWfOd97vnPd23u9MXeZoaeb1Q7gPHXAFzsAS5GACxiEPqVKXqs1kmtAPQi+cAtedToz1PJ8ExxPwDl7CAlRImoN7rBiF86ABHTiGAzMIh8n3O+ifwWc4EL0n5TGTYQijvjNSxbUadozInUeGZ3nuh1WYgpIkM+hGMwYajAgdrfUn+AaLoLTCAxiAOxCZxL4RdB+gZMjxEjwHo4hS8Jh5DR9hz0mKaNizegoNEI7Wee6FXJTISG6AUgDr+QImoAiHie+mwZJow/PRps4uwnsnRj8Epqc4voVJJ8eULOtW4BFYYjPpgjc+3IWI2sh/wFeoVl6xYQ48dDGLfjOwc/ygQqz595hUMVouS9QHBm4l6k3HWpnBLqicgVrlCxujSbR1Swd+UDpQYRS/oVaZZ2MWwlZBB9Zdxf+QTYw8SRgq6sAvz7vH6JULEB9USVHFjzZskgPRQR4ayxoXXIdaHdg9HrB2rErByWxZERnYtrWUzD0esDbtTmXPhzXwHrKLxEUbYGbVyDkWWwkdadfqbPmwDXZSCyh2VAf8BM/nOOJH5Y0QopMt2I5U/KO4DZZJB47XwEX+ex0mGroMV8sLwp56gyuGwiyW4SZ4c8bt2cZzO7jBNeqtsRHbeZ1g9krsMbhfYPv/c5gecA+4yAVuitFszE5Hjva872OMdXagF19JIoOYWyozMTI3J0tmA6gLvXPfO1cc/XOqOLe/HbjwD8yCXRD3VNJROEgatiRZMJsKsbZHia3nAdphtq8fkiWyXJbBe8uM1aXKPouNnz2Bm1kwAAAAAElFTkSuQmCC",B="__framer-editorbar-container",S="__framer-editorbar-label",w="__framer-editorbar-button",z="__framer-editorbar-loading-spinner",ae=`
#${B} {
    align-items: center;
    bottom: 50%;
    display: flex;
    gap: 8px;
    position: fixed;
    right: 10px;
    transform: translateY(50%);
    z-index: ${D};
}

#${S} {
    background-color: #111;
    border-radius: 8px;
    font-family: "Inter", "Inter-Regular", system-ui, Arial, sans-serif;
    font-size: 12px;
    height: fit-content;
    opacity: 0;
    padding: 4px 8px;
    transition: opacity 0.4s ease-out;
    font-weight: 500;
}

#${w} {
    all: unset;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
}

#${S}:has(+ #${w}:hover) {
    opacity: 1;
}

#${S}, #${w} {
    background-color: #111;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
    color: #fff;
}

#${S}, #${w}:hover {
    background-color: #282828;
}

#${z} {
    width: ${W}px;
    height: ${W}px;
    -webkit-mask: url(${Z});
    mask: url(${Z});
    -webkit-mask-size: ${W}px;
    mask-size: ${W}px;
    background-color: #fff;


    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-name: __framer-loading-spin;
    animation-timing-function: linear;
}

@keyframes __framer-loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`,V=document.createElement("style");V.type="text/css";V.innerHTML=ae;document.head.appendChild(V);function $(e){function o(){return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",fill:"none",children:[e("path",{d:"M 0 1.414 C 0 0.633 0.633 0 1.414 0 L 1.414 0 C 2.195 0 2.828 0.633 2.828 1.414 L 2.828 12.021 L 1.414 13.435 L 0 12.021 Z",transform:"translate(4.336 -0.468) rotate(45 1.5 6.75)",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M 7 11 L 11 11",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round"})]})}function i(){return e("div",{id:z})}return function({isLoading:t,onClick:s}){return e("div",{children:[e("span",{"aria-label":"Edit Framer Content",children:"Edit Content",id:S}),e("button",{"aria-labelledby":S,children:t?i():o(),id:w,onClick:s})],id:B})}}function K(e,o){return function(a=!0){let[t,s]=o(J);return e(()=>{if(!a)return;let r=new ResizeObserver(()=>{s(J())});return r.observe(document.documentElement),()=>{r.disconnect()}},[a]),t}}function J(){return window.innerWidth-document.documentElement.clientWidth}var se=300;function Q(e,o){let i=K(e,o);return function(t){let r=i(t)>0;e(()=>{if(t&&r)document.documentElement.classList.add(v);else{let p=()=>document.documentElement.classList.remove(v);if(r){let d=window.setTimeout(p,300+se);return()=>{window.clearTimeout(d)}}else p()}},[t,r])}}var ce=Date.now();function de(){let e=localStorage.getItem(k);if(!e)return!1;let o=Date.now(),i=Number(e);return o>=i||Number.isNaN(i)?(localStorage.removeItem(k),!1):!0}function ue(){return window.self!==window.top}var le=`
#__framer-editorbar {
    --padding-right: 10px;
    color-scheme: light;
    overflow: hidden;
    position: fixed;
    right: var(--padding-right);
    border: none;
    z-index: ${D};
    top: 0;
    width: calc(100vw - var(--padding-right));
    height: 100vh;
}

#__framer-editorbar.status_hidden {
    display: none;
}

#__framer-editorbar.status_visually_hidden {
    --padding-right: 0px;
    clip-path: circle(1px at calc(100% - 20px) calc(50% + 4px));
    z-index: ${Number(D)-1};
}

#__framer-editorbar.status_measuring {
    clip-path: unset;
}

#__framer-editorbar.fullscreen {
    --padding-right: 0px;
    left: 0;
    right: initial;
}

body:has(#__framer-editorbar.fullscreen) {
    overflow: hidden;
}

html.${v}:has(#__framer-editorbar:not(.status_hidden)) {
    scrollbar-gutter: stable;
}
`,H=document.createElement("style");H.type="text/css";H.innerHTML=le;document.head.appendChild(H);var b=new URL(import.meta.url).origin;function pe(){let e=new URL(window.location.href),o=e.searchParams.has(y),i=e.searchParams.has(y.toLowerCase());if(!o&&!i)return!1;let a=o?y:y.toLowerCase(),t=e.searchParams.get(a);if(t!==""&&t!==null)return!1;for(let s of e.searchParams.keys())if(s!==y&&s!==y.toLowerCase()&&!s.startsWith(j))return!1;return e.searchParams.delete(y),e.searchParams.delete(y.toLowerCase()),window.history.replaceState({},"",e.toString()),!0}var fe=pe();function je({dependencies:e}){if(e.__version!==1)throw new Error("Unsupported dependencies version");if(de()||ue()||M.isWebView)return function(){return null};let{createElement:o,memo:i,useCallback:a,useEffect:t,useRef:s,useState:r}=e.react,{createPortal:p}=e["react-dom"],{useCurrentRoute:d,useLocaleInfo:E,useRouter:c}=e.framer,h=Y(t,r);function C(){let[m,l]=r(!1),u=a(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{l(!0)}):setTimeout(()=>{l(!0)},300)},[]);return t(()=>{document.readyState==="complete"?u():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&u()},{once:!0})},[u]),m}let x=Q(t,r);function A(m){let[l,u]=r({className:"status_hidden"});return x(!m&&l.className!=="status_hidden"&&l.className!=="fullscreen"),t(()=>{if(m)return;function f(n){n.origin===b&&typeof n.data=="object"&&n.data?.apiVersion===1&&(n.data.type==="beginSizeMeasuring"&&u({className:"status_measuring"}),n.data.type==="updateStyle"&&u({style:{clipPath:n.data.clipPath}}),n.data.type==="editorBarHidden"&&(u({className:"status_hidden"}),window.removeEventListener("message",f)),n.data.type==="enterFullscreen"&&u({className:"fullscreen"}))}return window.addEventListener("message",f),()=>{window.removeEventListener("message",f)}},[]),l}function F(m){let[l,u]=r(!1);return t(()=>{if(l||m)return;function f(n){if(n.origin===b&&typeof n.data=="object"&&n.data?.apiVersion===1&&n.data.type==="editorBarHidden"&&!l){let R=Date.now()+6048e5;localStorage.setItem(k,R.toString()),u(!0),window.removeEventListener("message",f)}}return window.addEventListener("message",f),()=>{window.removeEventListener("message",f)}},[]),l}function q(m,l){let[u,f]=r(!1),[n,I]=r(!0),[R,P]=r(!1),[O,T]=r("hidden"),_=s();return _.current??=new N,x(l&&u&&(O!=="fullscreen"||n)),t(()=>{if(!l)return;function L(g){g.origin===b&&typeof g.data=="object"&&g.data?.apiVersion===1&&(g.data.type==="accessResult"&&g.data.data.status==="success"?f(!0):g.data.type==="exitFullscreen"?T("hidden"):g.data.type==="sandboxReadyState"&&g.data.data.status==="ready"&&(I(!1),setTimeout(()=>{_.current?.resolve()},50)))}return window.addEventListener("message",L),()=>{window.removeEventListener("message",L)}},[f,I,T]),{showEntrypointButton:u,entrypointButtonLoading:R?n:!1,iframeState:O,onEditContent:()=>{m.current?.contentWindow?.postMessage({apiVersion:1,type:"enterOnPageEditing"},b),T("fullscreen"),P(!0),_.current?.then(()=>{m.current?.contentWindow?.postMessage({apiVersion:1,type:"showCanvas",position:{top:window.scrollY}},b),P(!1)})}}}let ee=X(d,t,E,c,r);function te({framerSiteId:m,features:l,iframeRef:u,measuringProps:f}){ee(u,b);let n=new URL(import.meta.url),I=n.pathname.lastIndexOf("/");if(I<0)throw new Error("Invalid pathname");let R=l?.editorBarDisableFrameAncestorsSecurity?"fake-domain.example":window.location.hostname;return n.pathname=n.pathname.slice(0,I),n.searchParams.set("framerSiteId",m),n.searchParams.set("source",R),n.searchParams.set("features",JSON.stringify(l||{})),n.searchParams.set("loadStart",ce.toString()),fe&&n.searchParams.set("forceShow","true"),o("iframe",{...f,id:"__framer-editorbar",ref:u,src:n.href})}let re=$(o);function oe({framerSiteId:m,features:l}){let u=l?.editorBarOnPageEditing||!1,f=s(null),n=C(),I=A(u);F(u),h(f,b);let{showEntrypointButton:R,entrypointButtonLoading:P,iframeState:O,onEditContent:T}=q(f,u);if(!n)return null;let _;O==="fullscreen"?_="fullscreen":R?_="status_visually_hidden":_="status_hidden";let L=o(te,{framerSiteId:m,features:l,iframeRef:f,measuringProps:u?{className:_}:I}),g=R?o(re,{isLoading:P,onClick:T}):null;return p(u?[g,L]:L,document.body)}return i(oe)}export{je as createEditorBar};
