(()=>{var e={};e.id=974,e.ids=[974],e.modules={304:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,5814,23)),Promise.resolve().then(n.bind(n,743))},743:(e,t,n)=>{"use strict";n.d(t,{Panel:()=>l,PanelBody:()=>d,PanelHeader:()=>i});var r=n(687),s=n(3210),a=n(8087);let o=(0,s.createContext)(void 0);function l({theme:e="inverse",className:t="",children:n}){let[l,i]=(0,s.useState)(!1),[d,c]=(0,s.useState)(!1),[p,u]=(0,s.useState)(!1),m=(0,s.useRef)(null);return(0,r.jsx)(o.Provider,{value:{expand:l,reload:d,remove:p,toggleExpand:()=>i(e=>!e),toggleReload:()=>{d||(c(!0),setTimeout(()=>c(!1),2e3))},toggleRemove:()=>u(e=>!e),toggleCollapse:()=>{m.current&&(0,a.m)(m.current)},panelBodyRef:m},children:!p&&(0,r.jsx)("div",{className:`panel panel-${e} ${l?"panel-expand":""} ${d?"panel-loading":""} ${t}`,children:n})})}function i({className:e="",noButton:t=!1,children:n}){let a=(0,s.useContext)(o);if(!a)throw Error("PanelHeader must be used within a Panel");let{toggleExpand:l,toggleReload:i,toggleRemove:d,toggleCollapse:c}=a;return(0,r.jsxs)("div",{className:`panel-heading ${e}`,children:[(0,r.jsx)("h4",{className:"panel-title",children:n}),!t&&(0,r.jsxs)("div",{className:"panel-heading-btn",children:[(0,r.jsx)("button",{className:"btn btn-xs btn-icon btn-circle btn-default",onClick:l,children:(0,r.jsx)("i",{className:"fa fa-expand"})}),"\xa0\xa0",(0,r.jsx)("button",{className:"btn btn-xs btn-icon btn-circle btn-success",onClick:i,children:(0,r.jsx)("i",{className:"fa fa-redo"})}),"\xa0\xa0",(0,r.jsx)("button",{className:"btn btn-xs btn-icon btn-circle btn-warning",onClick:c,children:(0,r.jsx)("i",{className:"fa fa-minus"})}),"\xa0\xa0",(0,r.jsx)("button",{className:"btn btn-xs btn-icon btn-circle btn-danger",onClick:d,children:(0,r.jsx)("i",{className:"fa fa-times"})})]})]})}function d({className:e="",children:t}){let n=(0,s.useContext)(o);if(!n)throw Error("PanelBody must be used within a Panel");let{reload:a,panelBodyRef:l}=n;return(0,r.jsxs)("div",{ref:l,className:`panel-body ${e}`,children:[t,a&&(0,r.jsx)("div",{className:"panel-loader",children:(0,r.jsx)("span",{className:"spinner spinner-sm"})})]})}},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1204:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(7413),s=n(4536),a=n.n(s),o=n(7909);function l(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("ol",{className:"breadcrumb float-xl-end",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(a(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(a(),{href:"/",children:"Library"})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:"Data"})]}),(0,r.jsxs)("h1",{className:"page-header",children:["Page Header ",(0,r.jsx)("small",{children:"header small text goes here..."})]}),(0,r.jsxs)(o.Panel,{children:[(0,r.jsx)(o.PanelHeader,{children:"Panel Title here"}),(0,r.jsx)(o.PanelBody,{children:"Panel Content Here"})]})]})}},1838:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=n(5239),s=n(8088),a=n(8170),o=n.n(a),l=n(893),i={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);n.d(t,i);let d={children:["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,1204)),"D:\\template_nextjs_startup\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,4431)),"D:\\template_nextjs_startup\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,4413)),"D:\\template_nextjs_startup\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["D:\\template_nextjs_startup\\src\\app\\page.tsx"],p={require:n,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4536:(e,t,n)=>{let{createProxy:r}=n(9844);e.exports=r("D:\\template_nextjs_startup\\node_modules\\next\\dist\\client\\app-dir\\link.js")},7280:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,4536,23)),Promise.resolve().then(n.bind(n,7909))},7909:(e,t,n)=>{"use strict";n.d(t,{Panel:()=>s,PanelBody:()=>o,PanelHeader:()=>a});var r=n(2907);let s=(0,r.registerClientReference)(function(){throw Error("Attempted to call Panel() from the server but Panel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\template_nextjs_startup\\src\\components\\panel\\panel.tsx","Panel"),a=(0,r.registerClientReference)(function(){throw Error("Attempted to call PanelHeader() from the server but PanelHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\template_nextjs_startup\\src\\components\\panel\\panel.tsx","PanelHeader"),o=(0,r.registerClientReference)(function(){throw Error("Attempted to call PanelBody() from the server but PanelBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\template_nextjs_startup\\src\\components\\panel\\panel.tsx","PanelBody");(0,r.registerClientReference)(function(){throw Error("Attempted to call PanelFooter() from the server but PanelFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\template_nextjs_startup\\src\\components\\panel\\panel.tsx","PanelFooter")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")}};var t=require("../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[447,163,350],()=>n(1838));module.exports=r})();