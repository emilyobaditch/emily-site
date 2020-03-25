(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,n,t){e.exports=t(36)},29:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(18),i=t.n(c),o=(t(29),t(1)),l=t(9),u=t(8),m=t(2),f=t(3);function d(){var e=Object(m.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return d=function(){return e},e}var s=o.c.div(d(),f.l,f.e,f.f,f.k,f.h,f.c,f.n,f.i,f.d,f.g,f.b,f.a,f.j,f.m),g={ultra:"#FFF",dull:"#2d4159",accent:"#0677a1",default:"#895061",dark:"#78244c",darker:"#59253a"},p="Spartan",h="Spartan",b={H1:{fontSize:[50,51,52,57],fontWeight:700,fontFamily:p,as:"h1",color:g.ultra},H2:{fontSize:[37,39,41,43],fontWeight:700,color:g.ultra,fontFamily:p,as:"h2"},H3:{fontSize:[27,28,30,32],fontWeight:700,color:g.dark,fontFamily:p,as:"h3"},H4:{fontSize:[18,20,22,24],fontWeight:700,color:g.dull,fontFamily:p,as:"h4"},H5:{fontWeight:700,fontSize:[16,17,19,21],color:g.ultra,fontFamily:p,as:"h5"},LargeLead:{fontWeight:500,color:g.accent,fontSize:[18,20,22,24],fontFamily:p,as:"p"},SmallLead:{fontWeight:500,color:g.accent,fontSize:[17,18,19,21],fontFamily:p,as:"p"},Paragraph:{fontSize:[14,15,15,16],fontWeight:300,color:g.darker,fontFamily:h,as:"p",lineHeight:2},SmallParagraph:{fontSize:[13,14,14,15],fontWeight:300,color:g.darker,fontFamily:h,as:"p"}},E=function(e,n){var t=function(n){return r.a.createElement(s,Object.assign({},e,n),n.children)};return t.displayName=n,t},x={H1:E(b.H1,"H1"),H2:E(b.H2,"H2"),H3:E(b.H3,"H3"),H4:E(b.H4,"H4"),H5:E(b.H5,"H5"),LargeLead:E(b.LargeLead,"LargeLead"),SmallLead:E(b.SmallLead,"SmallLead"),Paragraph:E(b.Paragraph,"Paragraph"),SmallParagraph:E(b.SmallParagraph,"SmallParagraph")},y=function(e){var n=function(n){return r.a.createElement(s,Object.assign({},e,n),n.children)};return n.displayName="Box",n}({});function v(){var e=Object(m.a)(["\n  display: flex;\n  margin-right: 12px;\n"]);return v=function(){return e},e}var j=x.H5,O=Object(o.c)(y)(v());function k(){return r.a.createElement(O,null,r.a.createElement(l.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement(j,{paddingRight:"12px"},"Home")),r.a.createElement(l.b,{style:{textDecoration:"none"},to:"/bio"},r.a.createElement(j,{paddingRight:"12px"},"Bio")),r.a.createElement(l.b,{style:{textDecoration:"none"},to:"/contact"},r.a.createElement(j,{paddingRight:"12px"},"Contact")),r.a.createElement(l.b,{style:{textDecoration:"none"},to:"/games"},r.a.createElement(j,{paddingRight:"12px"},"Bored?")))}function w(){var e=Object(m.a)(["\n  display: flex;\n"]);return w=function(){return e},e}function S(){var e=Object(m.a)(["\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  position: fixed;\n  top: 0;\n  height: 62px;\n  width: 100%;\n  z-index: 99;\n  background-color: ",";\n"]);return S=function(){return e},e}var L=x.H2,H=o.c.div(S(),(function(e){return e.theme.colors.dull})),C=Object(o.c)(y)(w());function F(){return r.a.createElement(H,null,r.a.createElement(L,{paddingLeft:"12px"},"emily"),r.a.createElement(C,null,r.a.createElement(k,null)))}function z(){var e=Object(m.a)(["\n  display: flex;\n"]);return z=function(){return e},e}function P(){var e=Object(m.a)(["\n  width: 24px;\n  height: 24px;\n  padding-right: 12px;\n"]);return P=function(){return e},e}var W=o.c.img(P()),A=Object(o.c)(y)(z());function X(){return r.a.createElement(A,null,r.a.createElement("a",{href:"https://github.com/emilyobaditch"},r.a.createElement(W,{src:"images/github.png"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/emily-obaditch-a0090511b/"},r.a.createElement(W,{src:"images/linkedin.png"})))}function I(){var e=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  height: 42px;\n  width: 100%;\n  z-index: 99;\n  background-color: ",";\n"]);return I=function(){return e},e}var M=x.SmallLead,N=o.c.div(I(),(function(e){return e.theme.colors.darker}));function R(){return r.a.createElement(N,null,r.a.createElement(M,{padding:"0px 12px"},"Contact Me"),r.a.createElement(X,null))}function B(){var e=Object(m.a)(["\n  margin-top: 64px;\n  overflow: hidden;\n"]);return B=function(){return e},e}function D(){var e=Object(m.a)(["\n  min-height: calc(100vh - 104px);\n  align-items: center;\n  display: flex;\n"]);return D=function(){return e},e}var J=Object(o.c)(y)(D()),Y=Object(o.c)(y)(B());function T(e){var n=e.children;return r.a.createElement(Y,null,r.a.createElement(F,null),r.a.createElement(J,null,n),r.a.createElement(R,null))}var U=t(7);function $(e){var n=Object(a.useState)(!1),t=Object(U.a)(n,2),r=t[0],c=t[1],i=Object(a.useContext)(o.a).breakpoints;return Object(a.useLayoutEffect)((function(){var n=null,t=null;"function"===typeof e?n=e:"number"===typeof e&&(t=e);var a=function(e){return c(e.matches)},r=n?n():window.matchMedia("(min-width: ".concat(i[t||0],")"));return a(r),r.addListener(a),function(){return r.removeListener(a)}}),[e,i]),r}function q(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n"]);return q=function(){return e},e}function G(){var e=Object(m.a)(["\n  position: fixed;\n  opacity: 0.2;\n  bottom: 0;\n  z-index: -1;\n"]);return G=function(){return e},e}function K(){var e=Object(m.a)(["\n  width: 60%;\n  height: 60%;\n  z-index: -1;\n"]);return K=function(){return e},e}var Q=x.LargeLead,V=x.H2,Z=o.c.img(K()),_=o.c.img(G()),ee=Object(o.c)(y)(q());function ne(){var e=$(2);return r.a.createElement(T,null,r.a.createElement(ee,null,r.a.createElement(y,{paddingLeft:"5px"},r.a.createElement(V,{color:"darker",textAlign:"center"},"Hey, there! I'm Emily."),r.a.createElement(Q,{textAlign:"center"},"Frontend engineer, UX enthusiast, and chocolate lover based in New York City."," ")),e?r.a.createElement(Z,{src:"images/emily.jpeg"}):r.a.createElement(_,{src:"images/emily.jpeg"})))}function te(){var e=Object(m.a)(["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  opacity: 0.2;\n  z-index: -1;\n"]);return te=function(){return e},e}function ae(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  position: relative;\n"]);return ae=function(){return e},e}var re=x.H3,ce=x.Paragraph,ie=x.SmallLead,oe=Object(o.c)(y)(ae()),le=o.c.img(te());function ue(){return r.a.createElement(T,null,r.a.createElement(oe,null,r.a.createElement(re,{textAlign:"center"},"About Me"),r.a.createElement(ie,{textAlign:"center"},"10% Software Engineer, 90% Coffee "),r.a.createElement(ce,{padding:["0px 8px","0px 8px","0px 200px"],textAlign:"center"},"I'm Emily, thanks for coming to my site! Here's little bit about me. I was born in New Jersey, studied Computer Science at the University of Notre Dame (go Irish!) and currently live in New York city. I am a frontend engineer with a strong love for React. When I'm not creating awesome code I spend my time searching for the best NYC steak, going to spin class, and listening to music.",r.a.createElement("br",null),r.a.createElement("br",null),"I've made this website to learn new skills and have something to call completely my own. Currently refining my TypeScript acumen and playing around with color palettes.",r.a.createElement("br",null),r.a.createElement("br",null),"That's about it for now!"),r.a.createElement(le,{src:"images/background.png"})))}function me(){var e=Object(m.a)(["\n  color: ",";\n"]);return me=function(){return e},e}function fe(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n"]);return fe=function(){return e},e}var de=x.LargeLead,se=x.H2,ge=x.SmallLead,pe=Object(o.c)(y)(fe()),he=o.c.a(me(),(function(e){return e.theme.colors.darker}));function be(){return r.a.createElement(T,null,r.a.createElement(pe,null,r.a.createElement(se,{color:"darker",textAlign:"center"},"Contact Me"),r.a.createElement(de,{padding:["0px 8px"],textAlign:"center"},"Looking to connect? Feel free to reach out!"),r.a.createElement(ge,{padding:["0px 16px"],textAlign:"center"},"Email"," ",r.a.createElement(he,{href:"mailto:ecobaditch@gmail.com?subject=Reaching%20Out"},"ecobaditch@gmail.com")," ","for resume"),r.a.createElement(X,null)))}var Ee=t(14),xe=t(10);function ye(){var e=Object(m.a)(["\n  height: 100px;\n  width: 100px;\n  border: 1px solid ",";\n  background-color: ",";\n"]);return ye=function(){return e},e}var ve=x.SmallLead,je=o.c.button(ye(),(function(e){return e.theme.colors.darker}),(function(e){return e.theme.colors.infra})),Oe=function(e){var n=e.id,t=e.symbol,r=void 0===t?"":t,c=e.onClick,i=e.disabled;return a.createElement(je,{onClick:function(){return c(n)},disabled:i},a.createElement(ve,{textAlign:"center"},r))};function ke(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]);return ke=function(){return e},e}function we(){var e=Object(m.a)(["\n  background-color: #fff;\n  border: none;\n  height: 25px;\n"]);return we=function(){return e},e}var Se=o.c.button(we()),Le=Object(o.c)(y)(ke()),He=function(e){var n=e.onClick,t=e.children,r=a.useState(!1),c=Object(U.a)(r,2),i=c[0],o=c[1];return a.createElement(Le,null,a.createElement(Se,{type:"button",onClick:function(){o(!i),n()}},a.createElement("img",{alt:"checkbox",src:i?"images/checked.png":"images/unchecked.png"})),t)},Ce=[[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]],Fe=[1,4,7];function ze(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n"]);return ze=function(){return e},e}function Pe(){var e=Object(m.a)(["\n  background-color: #fff;\n  border: none;\n  color: ",";\n"]);return Pe=function(){return e},e}function We(){var e=Object(m.a)(["\n  display: flex;\n"]);return We=function(){return e},e}var Ae=x.LargeLead,Xe=x.SmallLead,Ie=Object(o.c)(y)(We()),Me=o.c.button(Pe(),(function(e){return e.theme.colors.darker})),Ne=Object(o.c)(y)(ze()),Re=function(){var e=a.useState("X"),n=Object(U.a)(e,2),t=n[0],r=n[1],c=a.useState(!1),i=Object(U.a)(c,2),o=i[0],l=i[1],u=a.useState(!1),m=Object(U.a)(u,2),f=m[0],d=m[1],s=a.useState(null),g=Object(U.a)(s,2),p=g[0],h=g[1],b=a.useState(null),E=Object(U.a)(b,2),x=E[0],y=E[1],v=a.useCallback((function(e){var n=Object(xe.a)({},p,Object(Ee.a)({},e,t));h(Object(xe.a)({},n)),r("X"===t?"O":"X")}),[t,p]),j=function(){h({}),d(!1),r("X")},O=function(e){return p&&e in p?p[e]:""};return a.useEffect((function(){if(p){var e=function(e){for(var n=e.gameState,t=0;t<Ce.length;t++)if(n[Ce[t][0]]===n[Ce[t][1]]&&n[Ce[t][1]]===n[Ce[t][2]])return[!0,n[Ce[t][0]]];return[!1,""]}({gameState:p}),n=Object(U.a)(e,2),t=n[0],a=n[1];t&&y(a),9===Object.keys(p).length&&d(!0)}}),[p]),a.useEffect((function(){if(o&&"O"===t&&p&&Object.keys(p).length<9){for(var e=Math.floor(10*Math.random());e in p;)e=Math.floor(10*Math.random());v(String(e))}}),[t,p,o,v]),a.createElement(Ne,null,x||f?a.createElement(a.Fragment,null,a.createElement(Xe,null,x?"Player ".concat(x," wins!"):"Oop, that's a draw!"),a.createElement(Me,{onClick:j},"Play again?")):a.createElement(Ae,null,"Current Player: ".concat(o?"X":t," ")),Fe.map((function(e){return a.createElement(Ie,{key:e},a.createElement(Oe,{disabled:!!x||f,id:e,onClick:v,symbol:O(e)}),a.createElement(Oe,{disabled:!!x||f,id:e+1,onClick:v,symbol:O(e+1)}),a.createElement(Oe,{disabled:!!x||f,id:e+2,onClick:v,symbol:O(e+2)}))})),a.createElement(Me,{onClick:j},"Reset"),a.createElement(He,{onClick:function(){l(!o),j()}},"One Player"))};function Be(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  position: relative;\n"]);return Be=function(){return e},e}var De=x.H2,Je=Object(o.c)(y)(Be());function Ye(){return r.a.createElement(T,null,r.a.createElement(Je,null,r.a.createElement(De,{color:"darker",textAlign:"center"},"Bored? Play some games:"),r.a.createElement(Re,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te={space:Object(xe.a)({},{NONE:0,XS:2,S:4,M:8,L:16,XL:32,XXL:64}),breakpoints:["319px","424px","767px","1023px"],colors:Object(xe.a)({},g)};i.a.render(r.a.createElement(o.b,{theme:Te},r.a.createElement((function(){return r.a.createElement("div",{style:{fontFamily:"Spartan"}},r.a.createElement(l.a,{basename:"/emily-site"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:ne}),r.a.createElement(u.a,{exact:!0,path:"/bio",component:ue}),r.a.createElement(u.a,{exact:!0,path:"/contact",component:be}),r.a.createElement(u.a,{exact:!0,path:"/games",component:Ye}))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9b6653bc.chunk.js.map