(this["webpackJsonpboxing-timer"]=this["webpackJsonpboxing-timer"]||[]).push([[0],{24:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o,u,l,s,d,b,j,f,x,O,m,p=t(0),h=t.n(p),g=t(15),v=t.n(g),w=(t(24),t(6)),k=t(4),y=t(2),C=t(16),A=t(11),E=t.n(A),S=["audio/time-is-now.mp3","audio/point-blank.mp3"],z=t(5),T=[Date.now(),Date.now()],I=t(8),R=function(n){for(var e="",t=0;t<n.length;t++)e+=n[t].duration+","+n[t].name+",";return",,"===e.slice(-2)&&(e=e.slice(0,-1)),e},D=function(n,e){var t=e.idx,i=e.field,c=e.value,a=e.to;switch(e.type){case"add":return[].concat(Object(z.a)(n),[{name:"new action",duration:60}]);case"remove":return 1===n.length?n:[].concat(Object(z.a)(n.slice(0,t)),Object(z.a)(n.slice(t+1)));case"edit":if("duration"===i){if(""===c&&(c=0),c=parseInt(c),isNaN(c))return n;if(c<0)return n}return[].concat(Object(z.a)(n.slice(0,t)),[Object(w.a)(Object(w.a)({},n[t]),{},Object(I.a)({},i,c))],Object(z.a)(n.slice(t+1)));case"move":if(Math.min(t,a)===Math.max(t,a))return n;var r=n.slice();return r[t]=n[a],r[a]=n[t],r;case"set":return c;default:return n}},F=function(n){var e=Object(p.useState)(null),t=Object(k.a)(e,2),i=t[0],c=t[1],a=Object(p.useReducer)(D,n),r=Object(k.a)(a,2),o=r[0],u=r[1],l=Object(p.useState)((function(){return R(n)})),s=Object(k.a)(l,2),d=s[0],b=s[1],j=Object(p.useCallback)((function(){var n=window.location.hash;if("#"===n[0]&&(n=n.slice(1)),0!==n.length){var e=function(n){var e=n.split(",");""===e[e.length-1]&&(e=e.slice(0,-1));for(var t=[],i=0;i<e.length;i++){var c=parseFloat(e[i]);if(!(isFinite(c)&&c>=0))return["".concat(i," item, expected finite >= 0 float, got ").concat(e[i])];var a="";if(++i<e.length)try{a=decodeURIComponent(e[i])}catch(r){return["".concat(i," item, decodeURIComponent error ").concat(r,", got ").concat(e[i])]}t.push({duration:c,name:a})}return[null,t]}(n),t=Object(k.a)(e,2),i=t[0],a=t[1];if(i)return c(i);c(null),u({type:"set",value:a}),b(R(a))}}),[]);return Object(p.useEffect)((function(){window.location.hash.length>2&&j(),window.addEventListener("hashchange",(function(){j()}))}),[j]),Object(p.useEffect)((function(){b(R(o))}),[o]),{table:o,setTable:u,error:i,tableString:d}},L=t(3),M=L.a.button(i||(i=Object(y.a)(["\n  display: inline-block;\n  background-color: #000;\n  margin: 3px;\n  border: 1px solid #eee;\n  color: #eee;\n  font-size: 2rem;\n  box-sizing: border-box;\n  padding: 5px;\n\n  &:focus {\n    outline: 3px solid #eee;\n  }\n\n  @media (min-width: 600px) {\n    font-size: 1rem;\n  }\n"]))),N=t(1),U=L.a.nav(c||(c=Object(y.a)(["\n  display: flex;\n  align-items: baseline;\n  & > * {\n    flex-basis: 150px;\n  }\n\n  @media (max-width: 600px) {\n    & > * {\n      font-size: 1em;\n      flex-grow: 1;\n      flex-basis: 0;\n    }\n  }\n"]))),H=h.a.memo((function(n){var e=n.running,t=n.onRunning,i=n.onReset,c=n.audio,a=n.onAudio;return Object(N.jsxs)("header",{children:[Object(N.jsxs)("h1",{children:["Timeboxing timer ",Object(N.jsxs)("span",{children:["- ",e?"running":"stopped"]})]}),Object(N.jsxs)(U,{children:[Object(N.jsx)(M,{onClick:t,children:e?"stop":"run"}),Object(N.jsx)(M,{onClick:i,children:"reset timer"}),Object(N.jsx)(M,{onClick:a,children:c?"audio playing":"audio muted"})]})]})})),_=L.a.h1(a||(a=Object(y.a)(["\n  font-family: monospace;\n  margin: 0;\n"]))),B=L.a.div(r||(r=Object(y.a)(["\n  margin: 20px 0;\n"]))),J=L.a.h2(o||(o=Object(y.a)(["\n  margin: 20px 0 0 0;\n  font-size: 1.2rem;\n"]))),P=L.a.div(u||(u=Object(y.a)([""]))),V=h.a.memo((function(n){var e=n.currentAction,t=n.currentDuration,i=n.nextAction,c=n.nextDuration,a=n.restTime;return Object(N.jsxs)(B,{children:[Object(N.jsxs)(_,{children:["rest time: ",(a/1e3).toFixed(0),"s"]}),Object(N.jsxs)(_,{children:[t,"s - ",e]}),Object(N.jsx)(J,{children:"next"}),Object(N.jsxs)(P,{children:[c,"s - ",i]})]})})),q=L.a.div(l||(l=Object(y.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  background-color: #d83c3499;\n\n  border: 2px solid #fff4;\n  padding: 10px 5px;\n  font-size: 1.1rem;\n"]))),G=function(n){var e=n.children;return Object(N.jsx)(q,{children:e})},K=L.a.select(s||(s=Object(y.a)(["\n  background-color: #000;\n  margin: 3px;\n  border: 1px solid #eee;\n  color: #eee;\n  font-size: 2rem;\n  box-sizing: border-box;\n  padding: 5px;\n\n  &:focus {\n    outline: 3px solid #eee;\n  }\n\n  @media (min-width: 600px) {\n    font-size: 1rem;\n  }\n"]))),Q=L.a.input(d||(d=Object(y.a)(["\n  background-color: #000;\n  margin: 3px;\n  color: #eee;\n  border: 1px solid #eee;\n  font-size: 2rem;\n  box-sizing: border-box;\n  padding: 5px;\n\n  &:focus {\n    outline: 3px solid #eee;\n  }\n\n  @media (min-width: 600px) {\n    font-size: 1rem;\n  }\n"]))),W=L.a.ul(b||(b=Object(y.a)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),X=L.a.li(j||(j=Object(y.a)(["\n  &:nth-child(even) {\n    background: #222;\n  }\n\n  & {\n    padding: 5px;\n    box-sizing: border-box;\n\n    ","\n  }\n\n  @media (max-width: 600px) {\n    & {\n      display: flex;\n      flex-wrap: wrap;\n      width: 100%;\n      padding: 10px;\n    }\n\n    & > input {\n      order: -1;\n      width: 100%;\n      flex-basis: 100%;\n      flex-grow: 1;\n    }\n\n    & > .item {\n      flex-grow: 1;\n      flex-basis: 0;\n    }\n  }\n"])),(function(n){return n.current&&"background-color: #666 !important"})),Y=h.a.memo((function(n){var e=n.changeTable,t=n.children,i=n.gotoAction,c=n.currentAction,a=Object(p.useCallback)((function(){return e({type:"add"})}),[e]),r=Object(p.useCallback)((function(n){return function(){return e({type:"remove",idx:n})}}),[e]),o=Object(p.useCallback)((function(n){return function(t){return e({type:"edit",idx:n,field:t.target.name,value:t.target.value})}}),[e]),u=Object(p.useCallback)((function(n){return function(t){return e({type:"move",idx:n,to:parseInt(t.target.value)})}}),[e]);return Object(N.jsxs)(W,{children:[Object(N.jsx)(X,{children:Object(N.jsx)(M,{onClick:a,children:"add action"})}),t.map((function(n,e){return Object(N.jsxs)(X,{current:c===e,children:[Object(N.jsx)(M,{className:"item",onClick:r(e),children:"-"}),Object(N.jsx)(K,{className:"item",value:e,onChange:u(e),children:t.map((function(n,e){return Object(N.jsx)("option",{value:e,children:e+1},e)}))}),Object(N.jsx)(Q,{type:"number",name:"duration",onInput:o(e),value:n.duration}),Object(N.jsx)(Q,{type:"text",name:"name",onInput:o(e),value:n.name}),Object(N.jsx)(M,{className:"item",onClick:function(){return i(e)},children:"goto"})]},e)}))]})})),Z=L.a.div(f||(f=Object(y.a)(["\n  white-space: no;\n"]))),$=L.a.ul(x||(x=Object(y.a)(["\n  padding: 0 20px 0 25px;\n"]))),nn=L.a.a(O||(O=Object(y.a)(["\n  color: #eee;\n  word-break: break-all;\n"]))),en=h.a.memo((function(n){var e=n.tableString,t=window.location.href.lastIndexOf(window.location.hash),i=window.location.href.slice(0,t)+"#"+e;return Object(N.jsxs)(Z,{children:[Object(N.jsx)("h2",{children:"How to use it"}),Object(N.jsxs)($,{children:[Object(N.jsx)("li",{children:"Audio - by default muted"}),Object(N.jsx)("li",{children:"run/stop button - resets timer on stop"}),Object(N.jsx)("li",{children:"you can save your schedule as link - all information are stored in URL"}),Object(N.jsxs)("li",{children:["current share link:"," ",Object(N.jsx)(nn,{href:i,target:"_blank",rel:"noopener noreferrer",children:i})]})]})]})})),tn=L.a.div(m||(m=Object(y.a)(["\n  background: #000;\n  color: #eee;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n"]))),cn=[{name:"switching to anki",duration:5},{name:"anki",duration:300},{name:"switching to anime",duration:5},{name:"anime",duration:300}],an=function(){var n=function(){var n=Object(p.useState)(T),e=Object(k.a)(n,2),t=e[0],i=e[1];return Object(p.useEffect)((function(){setInterval((function(){i((function(n){return[].concat(Object(z.a)(n),[Date.now()]).slice(-2)}))}),500)}),[]),t}(),e=Object(k.a)(n,2),t=e[0],i=e[1],c=function(){var n=Object(p.useState)([]),e=Object(k.a)(n,2),t=e[0],i=e[1],c=Object(p.useState)(!1),a=Object(k.a)(c,2),r=a[0],o=a[1],u=Object(p.useState)(null),l=Object(k.a)(u,2),s=l[0],d=l[1],b=t.length;Object(p.useEffect)((function(){i(S.map((function(n){return new Audio(n)})))}),[]);var j=Object(p.useCallback)((function(){o((function(n){return n&&d(null),!n}))}),[]),f=Object(p.useCallback)(function(){var n=Object(C.a)(E.a.mark((function n(e){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r&&b>0)){n.next=15;break}if(e=(b+e)%t.length,!(t[e].readyState>=HTMLMediaElement.HAVE_CURRENT_DATA)){n.next=15;break}if(null!=t[e]){n.next=6;break}return d("audioEl[".concat(e,"] is null")),n.abrupt("return");case 6:return t[e].currentTime=0,n.prev=7,n.next=10,t[e].play();case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(7),d("audioEl[".concat(e,"] : ").concat(n.t0));case 15:case"end":return n.stop()}}),n,null,[[7,12]])})));return function(e){return n.apply(this,arguments)}}(),[t,b,r]);return{audio:r,switchAudio:j,playAudio:f,audioError:s}}(),a=c.audio,r=c.switchAudio,o=c.playAudio,u=F(cn),l=u.table,s=u.setTable,d=u.error,b=u.tableString,j=Object(p.useState)(0),f=Object(k.a)(j,2),x=f[0],O=f[1],m=Object(p.useState)(!1),h=Object(k.a)(m,2),g=h[0],v=h[1],y=Object(p.useState)(1e3*l[0].duration),A=Object(k.a)(y,2),I=A[0],R=A[1],D=Object(p.useState)({}),L=Object(k.a)(D,2),M=L[0],U=L[1],_=(x+1)%l.length;Object(p.useEffect)((function(){g&&R((function(n){var e=n-(i-t);return e>0?e:(o(_),O(_),U(Object(w.a)({},l[_])),1e3*l[_].duration+e)}))}),[o,x,l,g,i,t,_]),Object(p.useEffect)((function(){if(!g){var n=x<l.length?x:0;U(Object(w.a)({},l[n])),R(1e3*l[n].duration),O(n)}}),[l,g,x]);var B=Object(p.useMemo)((function(){return function(){v((function(n){return n||o(x),!n}))}}),[x,o]),J=Object(p.useCallback)((function(){v(!1),O(0),R(1e3*l[0].duration)}),[l]),P=Object(p.useCallback)((function(n){v(!1),U(Object(w.a)({},l[n])),R(1e3*l[n].duration),O(n)}),[l]);return Object(N.jsxs)(tn,{children:[d&&Object(N.jsx)(G,{children:d}),Object(N.jsx)(en,{tableString:b}),Object(N.jsx)(H,{onRunning:B,running:g,onReset:J,audio:a,onAudio:r}),Object(N.jsx)(V,{restTime:I,currentAction:M.name,currentDuration:M.duration,nextAction:l[_].name,nextDuration:l[_].duration}),Object(N.jsx)(Y,{changeTable:s,gotoAction:P,currentAction:x,children:l})]})},rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};v.a.render(Object(N.jsx)(h.a.StrictMode,{children:Object(N.jsx)(an,{})}),document.getElementById("root")),document.addEventListener("wheel",(function(n){"number"===document.activeElement.type&&document.activeElement.classList.contains("noscroll")&&document.activeElement.blur()})),rn()}},[[31,1,2]]]);
//# sourceMappingURL=main.55decf22.chunk.js.map