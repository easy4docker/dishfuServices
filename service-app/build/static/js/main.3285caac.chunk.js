(this["webpackJsonpservice-app"]=this["webpackJsonpservice-app"]||[]).push([[0],{119:function(e,t,c){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(c(0)),s=c(76),i=n(c(213));t.default=function(e){var t=e.width,c=e.height,n=e.onUpdate,r=a.default.useRef(null),l=new s.BrowserMultiFormatReader,o=a.default.useCallback((function(){var e,t=null===(e=null===r||void 0===r?void 0:r.current)||void 0===e?void 0:e.getScreenshot();t&&l.decodeFromImage(void 0,t).then((function(e){n(null,e)})).catch((function(e){n(e)}))}),[l,n]);return a.default.useEffect((function(){setInterval(o,100)}),[]),a.default.createElement(i.default,{width:t,height:c,ref:r,screenshotFormat:"image/png",videoConstraints:{facingMode:"environment"}})}},125:function(e,t,c){},217:function(e,t,c){},219:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(36),i=c.n(s),r=(c(125),c(42)),l=c(5),o=c(221),u=c(222),f=(c(114),c(1));function d(){return Object(f.jsxs)("div",{className:"border rounded p-1 m-0",style:{color:"yellow",fontSize:"1.5rem"},children:["\u83dc\u8b5c",Object(f.jsx)("span",{className:"ml-1",style:{fontSize:"1rem"},children:"Dishfu"})]})}var j=function(e){return Object(n.useEffect)((function(){}),[]),Object(f.jsx)(o.a,{className:"bg-primary",fluid:!0,children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(u.a,{expand:"lg",className:"p-1",children:[Object(f.jsx)(u.a.Brand,{as:r.b,to:"/",className:"menu_color",children:Object(f.jsx)(d,{})}),Object(f.jsx)(u.a.Brand,{as:r.b,to:"/auth",className:"text-left menu-color",children:"Service"})]})})})};var b=function(){return Object(f.jsx)(o.a,{fluid:!0,className:"footer"})},h=c(74),m=c(223),O=c(119),x=c.n(O);function p(e){var t=a.a.useState(""),c=Object(h.a)(t,2),s=c[0],i=c[1],r=a.a.useState(!1),l=Object(h.a)(r,2),u=l[0],d=l[1];Object(n.useEffect)((function(){}),[]),Object(n.useEffect)((function(){s&&j()}),[s]);var j=function(){d(!u)};return Object(f.jsxs)(o.a,{fluid:!0,className:"m-1 p-1 text-center",children:[u?Object(f.jsx)(x.a,{width:"300",height:"300",onUpdate:function(e,t){i(t?t.text:"")}}):"",Object(f.jsx)("p",{children:s}),u?Object(f.jsx)(m.a,{onClick:j,className:"m-1",children:"Stop Scan"}):Object(f.jsx)(m.a,{onClick:j,className:"m-1",children:"Start Scan"}),Object(f.jsx)(m.a,{onClick:function(){alert(s)},className:"m-1",children:"Use Data"}),Object(f.jsx)(m.a,{onClick:function(){i("")},className:"m-1",children:"Skip Data"})]})}var v=function(e){return Object(n.useEffect)((function(){}),[]),Object(f.jsx)(o.a,{fluid:!0,className:"m-1 p-1",children:Object(f.jsx)(p,{})})},g=(c(217),c(218),function(e){return Object(n.useEffect)((function(){}),[]),console.log("called localStorage.clear()"),Object(f.jsx)(r.a,{className:"p-0 m-0",children:Object(f.jsx)(l.c,{children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(j,{}),Object(f.jsx)(v,{}),Object(f.jsx)(b,{})]})})})}),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,224)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),N()}},[[219,1,2]]]);
//# sourceMappingURL=main.3285caac.chunk.js.map