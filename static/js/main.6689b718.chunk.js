(this["webpackJsonpto-drag-list"]=this["webpackJsonpto-drag-list"]||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var i=n(16),a=n.n(i),c=n(18),o=n(6),r=n.n(o),s=n(25),l=n.n(s),u=(n(36),n(10)),d=n(12),m=n(11),b=n(9),j=n.n(b),f=(n(37),n(20)),p=n(26),h=n.n(p);function v(t){return h()(t)}function O(t){return t?{left:t.x,top:t.y}:{}}var g=n(3),x=["title","onClick"],y=function(t){var e=t.title,n=t.onClick,i=Object(f.a)(t,x),a=Object(o.useState)(!1),c=Object(m.a)(a,2),r=c[0],s=c[1];return Object(g.jsx)("li",Object(u.a)(Object(u.a)({},i),{},{onClick:function(){s(!0),setTimeout((function(){n()}),200)},className:j()("item ",{"item--collapse":r}),children:Object(g.jsx)("span",{className:"item-content item-content-block",title:e,children:v(e)?Object(g.jsx)("a",{href:e,rel:"noreferrer noopener",target:"_blank",onClick:function(t){t.stopPropagation()},children:v(e)?e.replace(/(https?:\/\/)?(www\.)?/,""):e}):e})}))},S=n(15),C=function t(e){var n=e.title,i=void 0===n?"":n,a=e.position,c=e.timeStamp,o=void 0===c?Date.now():c,r=e.items,s=void 0===r?[]:r;Object(S.a)(this,t),this.id=void 0,this.title=void 0,this.position=void 0,this.timeStamp=void 0,this.items=void 0,this.id=o,this.title=i,this.position=a,this.timeStamp=o,this.items=s},w=function(t){var e=t.isGrouped,n=void 0!==e&&e,i=t.position,a=t.onCreate,c=t.onClose,r=Object(o.useState)(""),s=Object(m.a)(r,2),l=s[0],u=s[1];return Object(g.jsx)("form",{className:j()("new-item item",{"item--absolute":i}),style:O(i),onSubmit:n?function(t){if(t.preventDefault(),l.length){var e=new C({position:i,title:l});a(e),u("")}}:function(){var t=new C({position:i,title:l,items:[]});a(t)},children:Object(g.jsx)("input",{type:"text",className:"item-content",autoFocus:!0,value:l,onChange:function(t){var e=t.target.value;u(e)},onKeyDown:function(t){switch(t.keyCode){case 27:return c();case 8:if(l.length)return;return c();default:return}}})})};function k(t){var e=t.getBoundingClientRect();return{x:e.left+window.scrollX,y:e.top+window.scrollY}}var N=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.x,i=void 0===n?0:n,a=e.y,c=void 0===a?0:a;Object(S.a)(this,t),this.x=void 0,this.y=void 0,this.x=i,this.y=c},D=n(27),I=n(28),E=n(30),P=n(29),A=function(t){Object(E.a)(n,t);var e=Object(P.a)(n);function n(){var t;Object(S.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).ref=Object(o.createRef)(),t.state={dragPosition:void 0},t.dragStartOffset={x:0,y:0},t.isValidDragTarget=function(t){return!!!t.closest(".undraggable")},t.handleItemDragStart=function(e){if(t.isValidDragTarget(e.target)){var n=e.pageX,i=e.pageY,a=k(e.currentTarget);t.dragStartOffset={x:n-a.x,y:i-a.y},document.addEventListener("mousemove",t.handleItemDrag)}},t.handleItemDrag=function(e){var n=new N({x:e.pageX-t.dragStartOffset.x,y:e.pageY-t.dragStartOffset.y});t.setState({dragPosition:n})},t.handleItemDragEnd=function(){document.removeEventListener("mousemove",t.handleItemDrag),t.state.dragPosition&&(t.props.onDragEnd(Object(u.a)({},t.state.dragPosition)),t.setState({dragPosition:null}))},t}return Object(I.a)(n,[{key:"getStyle",value:function(t){return{left:null===t||void 0===t?void 0:t.x,top:null===t||void 0===t?void 0:t.y}}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"draggable item--absolute",ref:this.ref,onMouseDown:this.handleItemDragStart,onMouseUp:this.handleItemDragEnd,style:this.getStyle(this.state.dragPosition||this.props.position),children:this.props.children})}}]),n}(o.Component),L=["children","className"],T=function(t){var e=t.children,n=t.className,i=void 0===n?"":n,a=Object(f.a)(t,L);return Object(g.jsx)("div",Object(u.a)(Object(u.a)({className:j()("undraggable",i)},a),{},{children:e}))};var R=function(t){var e=t.position,n=t.title,i=t.items,a=t.timeStamp,c=t.onChange,r=t.onRemove,s=!i.length,l=Object(o.useState)(s),b=Object(m.a)(l,2),f=b[0],p=b[1],h=Object(o.useState)(!1),v=Object(m.a)(h,2),O=v[0],x=v[1];function S(){p(!f)}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new C(Object(u.a)({position:e,title:n,items:i,timeStamp:a},t))}return Object(g.jsxs)("div",{className:j()("item group",{"item--collapse":O}),style:{transform:O?"scale(0.7)":""},children:[Object(g.jsxs)("div",{className:"group-header",children:[Object(g.jsxs)("div",{className:"group-header-left",children:[n&&Object(g.jsx)("span",{className:"item-content",children:n}),Object(g.jsx)(T,{className:"item-add item-button",onClick:S,children:"+"})]}),Object(g.jsx)(T,{className:"item-remove item-button",onClick:function(){x(!0),setTimeout((function(){r()}),200)},children:"\xd7"})]}),(i.length||f)&&Object(g.jsx)("div",{className:"group-items",children:Object(g.jsxs)(T,{children:[Object(g.jsx)(D.ReactSortable,{list:i,tag:"ul",setList:function(t){var e=k({items:t});c(e)},children:i.map((function(t){return Object(g.jsx)(y,{title:t.title,onClick:function(){return function(t){var e=k({items:i.filter((function(e){return e.timeStamp!==t.timeStamp}))});c(e),p(!1)}(t)}},t.timeStamp)}))}),f&&Object(g.jsx)(w,{isGrouped:!0,onCreate:function(t){var e=k({items:[].concat(Object(d.a)(i),[t])});c(e)},onClose:S})]})}),!!i.length&&Object(g.jsx)(T,{onClick:function(){!function(t){var e=document.createElement("textarea");e.style={position:"absolute",top:"-1000px"},e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(function(t){var e=t.title,n=t.items,i=(void 0===n?[]:n).map((function(t){var e=t.title;return"- ".concat(e)}));return[e].concat(Object(d.a)(i)).join("\n")}({title:n,items:i}))},className:"item-copy",children:Object(g.jsx)("button",{children:"copy"})})]})},G=r.a.memo(R),J="production",K=function(t){var e=t.db,n=t.userId,i=Object(o.useState)([]),r=Object(m.a)(i,2),s=r[0],l=r[1],b=Object(o.useState)([]),f=Object(m.a)(b,2),p=f[0],h=f[1],v=Object(o.useState)(),O=Object(m.a)(v,2),x=O[0],y=O[1],S=Object(o.useState)(!1),C=Object(m.a)(S,2),k=C[0],D=C[1],I=Object(o.useState)(!1),E=Object(m.a)(I,2),P=E[0],L=E[1],T=Object(o.useState)(!1),R=Object(m.a)(T,2),K=R[0],X=R[1];function Y(t){return B.apply(this,arguments)}function B(){return(B=Object(c.a)(a.a.mark((function t(i){var c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(!(c.length>1&&void 0!==c[1])||c[1])&&l([].concat(Object(d.a)(s),[p])),h(i),L(!0),X(!1),t.prev=6,t.next=9,e.collection("items").doc(n).set({items:JSON.parse(JSON.stringify(i))});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),X(!0);case 14:L(!1);case 15:case"end":return t.stop()}}),t,null,[[6,11]])})))).apply(this,arguments)}function M(t,e){var n=p.filter((function(t){return t.timeStamp!==e.timeStamp}));Y([].concat(Object(d.a)(n),[t])),y(void 0)}function z(){if(s.length){Y(s[s.length-1]||[],!1);var t=Object(d.a)(s);t.pop(),l(t)}}function U(t){return Object(g.jsx)(A,{position:t.position,onDragEnd:function(e){return M(Object(u.a)(Object(u.a)({},t),{},{position:e}),t)},children:Object(g.jsx)(G,Object(u.a)(Object(u.a)({},t),{},{onRemove:function(){return function(t){var e=p.filter((function(e){return e.timeStamp!==t.timeStamp}));Y(Object(d.a)(e))}(t)},onChange:function(e){return M(e,t)}}))},t.timeStamp)}Object(o.useEffect)((function(){document.addEventListener("keydown",(function(t){90===t.keyCode&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),z())}))})),Object(o.useEffect)((function(){L(!0),X(!1),e.collection("items").doc(n).get().then((function(t){var e;t.exists?h(null===(e=t.data())||void 0===e?void 0:e.items):X(!0);L(!1)})).catch((function(){return X(!0)}))}),[e,n]);var V=p.map((function(t){return U(t)}));return Object(g.jsx)("div",{className:"app",children:Object(g.jsxs)("div",{className:j()("board",{obfuscated:k},J),onClick:function(t){if(t.target===t.currentTarget){var e=new N({x:t.pageX,y:t.pageY});y(e)}},children:[Object(g.jsx)("ul",{children:V}),x&&Object(g.jsx)(w,{onCreate:function(t){Y([].concat(Object(d.a)(p),[t])),y(void 0)},position:x,onClose:function(){return y(void 0)}}),Object(g.jsx)("button",{className:j()("undo action",{visible:s.length}),onClick:z,children:Object(g.jsx)("span",{role:"img","aria-label":"Undo",children:"\ud83e\udd2d"})}),Object(g.jsx)("div",{className:j()("loading action",{visible:P}),children:Object(g.jsx)("span",{role:"img","aria-label":"Loading",children:"\u267b\ufe0f"})}),Object(g.jsx)("div",{className:j()("error action",{visible:K}),children:Object(g.jsx)("span",{role:"img","aria-label":"Error",children:"\u26d4"})}),Object(g.jsx)("button",{className:j()("obfuscate action ",{visible:p.length}),onClick:function(){D(!k)},children:Object(g.jsx)("span",{role:"img","aria-label":"Obfuscate",children:k?"\ud83d\udc35":"\ud83d\ude48"})})]})})},X=n(14);n(45);X.a.initializeApp({apiKey:"AIzaSyC5Er4oZT-e4woRNxf9ZG59c4-MnP9ussQ",authDomain:"dragly-359ad.firebaseapp.com",projectId:"dragly-359ad",storageBucket:"",messagingSenderId:"747702472609",appId:"1:747702472609:web:3f48f2bbe7117d8c87c5e0"});var Y=X.a.firestore();function B(){return(B=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=6;break}return n=new X.a.auth.GoogleAuthProvider,t.next=4,X.a.auth().setPersistence(X.a.auth.Auth.Persistence.LOCAL);case 4:return t.next=6,X.a.auth().signInWithPopup(n);case 6:e&&l.a.render(Object(g.jsx)(K,{db:Y,userId:e.uid}),document.getElementById("root"));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}X.a.auth().onAuthStateChanged((function(t){!function(t){B.apply(this,arguments)}(t)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.6689b718.chunk.js.map