(this["webpackJsonpto-drag-list"]=this["webpackJsonpto-drag-list"]||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var i=n(21),a=n.n(i),o=n(24),c=n(7),r=n.n(c),s=n(25),u=n.n(s),l=(n(36),n(9)),d=n(12),m=n(11),f=n(10),b=n.n(f),j=(n(37),n(18)),p=n(26),h=n.n(p);function v(t){return h()(t)}function O(t){return t?{left:t.x,top:t.y}:{}}var g=n(3),x=["title","onClick"],y=function(t){var e=t.title,n=t.onClick,i=Object(j.a)(t,x),a=Object(c.useState)(!1),o=Object(m.a)(a,2),r=o[0],s=o[1];return Object(g.jsx)("li",Object(l.a)(Object(l.a)({},i),{},{onClick:function(){s(!0),setTimeout((function(){n()}),200)},className:b()("item ",{"item--collapse":r}),children:Object(g.jsx)("span",{className:"item-content item-content-block",title:e,children:v(e)?Object(g.jsx)("a",{href:e,rel:"noreferrer noopener",target:"_blank",onClick:function(t){t.stopPropagation()},children:v(e)?e.replace(/(https?:\/\/)?(www\.)?/,""):e}):e})}))},S=n(15),C=function t(e){var n=e.title,i=void 0===n?"":n,a=e.position,o=e.timeStamp,c=void 0===o?Date.now():o,r=e.items,s=void 0===r?[]:r;Object(S.a)(this,t),this.id=void 0,this.title=void 0,this.position=void 0,this.timeStamp=void 0,this.items=void 0,this.id=c,this.title=i,this.position=a,this.timeStamp=c,this.items=s},w=function(t){var e=t.isGrouped,n=void 0!==e&&e,i=t.position,a=t.onCreate,o=t.onClose,r=Object(c.useState)(""),s=Object(m.a)(r,2),u=s[0],l=s[1];return Object(g.jsx)("form",{className:b()("new-item item",{"item--absolute":i}),style:O(i),onSubmit:n?function(t){if(t.preventDefault(),u.length){var e=new C({position:i,title:u});a(e),l("")}}:function(){var t=new C({position:i,title:u,items:[]});a(t)},children:Object(g.jsx)("input",{type:"text",className:"item-content",autoFocus:!0,value:u,onChange:function(t){var e=t.target.value;l(e)},onKeyDown:function(t){switch(t.keyCode){case 27:return o();case 8:if(u.length)return;return o();default:return}}})})};function k(t){var e=t.getBoundingClientRect();return{x:e.left+window.scrollX,y:e.top+window.scrollY}}var N=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.x,i=void 0===n?0:n,a=e.y,o=void 0===a?0:a;Object(S.a)(this,t),this.x=void 0,this.y=void 0,this.x=i,this.y=o},D=n(27),I=n(28),E=n(30),P=n(29),A=function(t){Object(E.a)(n,t);var e=Object(P.a)(n);function n(){var t;Object(S.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).ref=Object(c.createRef)(),t.state={dragPosition:void 0},t.dragStartOffset={x:0,y:0},t.isValidDragTarget=function(t){return!!!t.closest(".undraggable")},t.handleItemDragStart=function(e){if(t.isValidDragTarget(e.target)){var n=e.pageX,i=e.pageY,a=k(e.currentTarget);t.dragStartOffset={x:n-a.x,y:i-a.y},document.addEventListener("mousemove",t.handleItemDrag)}},t.handleItemDrag=function(e){var n=new N({x:e.pageX-t.dragStartOffset.x,y:e.pageY-t.dragStartOffset.y});t.setState({dragPosition:n})},t.handleItemDragEnd=function(){document.removeEventListener("mousemove",t.handleItemDrag),t.state.dragPosition&&(t.props.onDragEnd(Object(l.a)({},t.state.dragPosition)),t.setState({dragPosition:null}))},t}return Object(I.a)(n,[{key:"getStyle",value:function(t){return{left:null===t||void 0===t?void 0:t.x,top:null===t||void 0===t?void 0:t.y}}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"draggable item--absolute",ref:this.ref,onMouseDown:this.handleItemDragStart,onMouseUp:this.handleItemDragEnd,style:this.getStyle(this.state.dragPosition||this.props.position),children:this.props.children})}}]),n}(c.Component),T=["children","className"],L=function(t){var e=t.children,n=t.className,i=void 0===n?"":n,a=Object(j.a)(t,T);return Object(g.jsx)("div",Object(l.a)(Object(l.a)({className:b()("undraggable",i)},a),{},{children:e}))};var R=function(t){var e=t.position,n=t.title,i=t.items,a=t.timeStamp,o=t.onChange,r=t.onRemove,s=!i.length,u=Object(c.useState)(s),f=Object(m.a)(u,2),j=f[0],p=f[1],h=Object(c.useState)(!1),v=Object(m.a)(h,2),O=v[0],x=v[1];function S(){p(!j)}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new C(Object(l.a)({position:e,title:n,items:i,timeStamp:a},t))}return Object(g.jsxs)("div",{className:b()("item group",{"item--collapse":O}),style:{transform:O?"scale(0.7)":""},children:[Object(g.jsxs)("div",{className:"group-header",children:[Object(g.jsxs)("div",{className:"group-header-left",children:[n&&Object(g.jsx)("span",{className:"item-content",children:n}),Object(g.jsx)(L,{className:"item-add item-button",onClick:S,children:"+"})]}),Object(g.jsx)(L,{className:"item-remove item-button",onClick:function(){x(!0),setTimeout((function(){r()}),200)},children:"\xd7"})]}),(i.length||j)&&Object(g.jsx)("div",{className:"group-items",children:Object(g.jsxs)(L,{children:[Object(g.jsx)(D.ReactSortable,{list:i,tag:"ul",setList:function(t){var e=k({items:t});o(e)},children:i.map((function(t){return Object(g.jsx)(y,{title:t.title,onClick:function(){return function(t){var e=k({items:i.filter((function(e){return e.timeStamp!==t.timeStamp}))});o(e),p(!1)}(t)}},t.timeStamp)}))}),j&&Object(g.jsx)(w,{isGrouped:!0,onCreate:function(t){var e=k({items:[].concat(Object(d.a)(i),[t])});o(e)},onClose:S})]})}),!!i.length&&Object(g.jsx)(L,{onClick:function(){!function(t){var e=document.createElement("textarea");e.style={position:"absolute",top:"-1000px"},e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(function(t){var e=t.title,n=t.items,i=(void 0===n?[]:n).map((function(t){var e=t.title;return"- ".concat(e)}));return[e].concat(Object(d.a)(i)).join("\n")}({title:n,items:i}))},className:"item-copy",children:Object(g.jsx)("button",{children:"copy"})})]})},G=r.a.memo(R),J="production",K=function(t){var e=t.db,n=t.userId,i=Object(c.useState)([]),a=Object(m.a)(i,2),o=a[0],r=a[1],s=Object(c.useState)([]),u=Object(m.a)(s,2),f=u[0],j=u[1],p=Object(c.useState)(),h=Object(m.a)(p,2),v=h[0],O=h[1],x=Object(c.useState)(!1),y=Object(m.a)(x,2),S=y[0],C=y[1];function k(t){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i&&r([].concat(Object(d.a)(o),[f])),j(t),e.collection("items").doc(n).set({items:JSON.parse(JSON.stringify(t))})}function D(t,e){var n=f.filter((function(t){return t.timeStamp!==e.timeStamp}));k([].concat(Object(d.a)(n),[t])),O(void 0)}function I(){if(o.length){k(o[o.length-1]||[],!1);var t=Object(d.a)(o);t.pop(),r(t)}}function E(t){return Object(g.jsx)(A,{position:t.position,onDragEnd:function(e){return D(Object(l.a)(Object(l.a)({},t),{},{position:e}),t)},children:Object(g.jsx)(G,Object(l.a)(Object(l.a)({},t),{},{onRemove:function(){return function(t){var e=f.filter((function(e){return e.timeStamp!==t.timeStamp}));k(Object(d.a)(e))}(t)},onChange:function(e){return D(e,t)}}))},t.timeStamp)}Object(c.useEffect)((function(){document.addEventListener("keydown",(function(t){90===t.keyCode&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),I())}))})),Object(c.useEffect)((function(){e.collection("items").doc(n).get().then((function(t){var e;t.exists&&j(null===(e=t.data())||void 0===e?void 0:e.items)}))}),[e,n]);var P=f.map((function(t){return E(t)}));return Object(g.jsx)("div",{className:"app",children:Object(g.jsxs)("div",{className:b()("board",{obfuscated:S},J),onClick:function(t){if(t.target===t.currentTarget){var e=new N({x:t.pageX,y:t.pageY});O(e)}},children:[Object(g.jsx)("ul",{children:P}),v&&Object(g.jsx)(w,{onCreate:function(t){k([].concat(Object(d.a)(f),[t])),O(void 0)},position:v,onClose:function(){return O(void 0)}}),Object(g.jsx)("button",{className:b()("undo action",{visible:o.length}),onClick:I,children:Object(g.jsx)("span",{role:"img","aria-label":"Undo",children:"\ud83e\udd2d"})}),Object(g.jsx)("button",{className:b()("obfuscate action ",{visible:f.length}),onClick:function(){C(!S)},children:Object(g.jsx)("span",{role:"img","aria-label":"Obfuscate",children:S?"\ud83d\udc35":"\ud83d\ude48"})})]})})},X=n(14);n(45);X.a.initializeApp({apiKey:"AIzaSyC5Er4oZT-e4woRNxf9ZG59c4-MnP9ussQ",authDomain:"dragly-359ad.firebaseapp.com",projectId:"dragly-359ad",storageBucket:"",messagingSenderId:"747702472609",appId:"1:747702472609:web:3f48f2bbe7117d8c87c5e0"});var Y=X.a.firestore();function B(){return(B=Object(o.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=6;break}return n=new X.a.auth.GoogleAuthProvider,t.next=4,X.a.auth().setPersistence(X.a.auth.Auth.Persistence.LOCAL);case 4:return t.next=6,X.a.auth().signInWithPopup(n);case 6:e&&u.a.render(Object(g.jsx)(K,{db:Y,userId:e.uid}),document.getElementById("root"));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}X.a.auth().onAuthStateChanged((function(t){!function(t){B.apply(this,arguments)}(t)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.f25f3048.chunk.js.map