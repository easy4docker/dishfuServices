(this["webpackJsonpservice-app"]=this["webpackJsonpservice-app"]||[]).push([[0],{117:function(e,t,n){"use strict";var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(0)),r=n(74),s=c(n(212));t.default=function(e){var t=e.width,n=e.height,c=e.onUpdate,i=a.default.useRef(null),o=new r.BrowserMultiFormatReader,l=a.default.useCallback((function(){var e,t=null===(e=null===i||void 0===i?void 0:i.current)||void 0===e?void 0:e.getScreenshot();t&&o.decodeFromImage(void 0,t).then((function(e){c(null,e)})).catch((function(e){c(e)}))}),[o,c]);return a.default.useEffect((function(){setInterval(l,100)}),[]),a.default.createElement(s.default,{width:t,height:n,ref:i,screenshotFormat:"image/png",videoConstraints:{facingMode:"environment"}})}},124:function(e,t,n){},216:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(35),s=n.n(r),i=(n(124),n(41)),o=n(4),l=n(220),u=n(221),d=(n(112),n(2));function f(){return Object(d.jsxs)("div",{className:"border rounded p-1 m-0",style:{color:"yellow",fontSize:"1.5rem"},children:["\u83dc\u8b5c",Object(d.jsx)("span",{className:"ml-1",style:{fontSize:"1rem"},children:"Dishfu"})]})}var j=function(e){return Object(c.useEffect)((function(){}),[]),Object(d.jsx)(l.a,{className:"bg-primary",fluid:!0,children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(u.a,{expand:"lg",className:"p-1",children:[Object(d.jsx)(u.a.Brand,{as:i.b,to:"/",className:"menu_color",children:Object(d.jsx)(f,{})}),Object(d.jsx)(u.a.Brand,{as:i.b,to:"/auth",className:"text-left menu-color",children:"Service"})]})})})};var h=function(){return Object(d.jsx)(l.a,{fluid:!0,className:"footer"})},b=n(118),m=n(117),O=n.n(m);var v=function(e){var t=a.a.useState("--"),n=Object(b.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){}),[]),Object(d.jsxs)(l.a,{fluid:!0,className:"m-0 p-0",children:[Object(d.jsx)(O.a,{width:"100%",height:"100%",onUpdate:function(e,t){s(t?t.text:"Not Found")}}),Object(d.jsx)("p",{children:r})]})},x=(n(216),n(217),function(e){return Object(c.useEffect)((function(){}),[]),console.log("called localStorage.clear()"),Object(d.jsx)(i.a,{className:"p-0 m-0",children:Object(d.jsx)(o.c,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(v,{}),Object(d.jsx)(h,{})]})})})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),p()}},[[218,1,2]]]);
//# sourceMappingURL=main.c42a9698.chunk.js.map