(this["webpackJsonpto-drag-list"]=this["webpackJsonpto-drag-list"]||[]).push([[0],{25:function(e,t,n){e.exports=n(49)},31:function(e,t,n){},32:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n.n(a),o=n(17),i=n(2),c=n.n(i),s=n(18),u=n.n(s),l=(n(31),n(7)),m=n(6),f=n(5),p=n(4),d=n.n(p),g=(n(32),n(11));function b(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|localhost|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}function O(e){return e?{left:e.x,top:e.y}:{}}var v=function(e){var t=e.title,n=e.onClick,a=Object(g.a)(e,["title","onClick"]),r=Object(i.useState)(!1),o=Object(f.a)(r,2),s=o[0],u=o[1];function l(){if(b(t)){var e=t.replace(/(https?:\/\/)?(www\.)?/,"");return e.length>43?e.slice(0,40)+"...":e}return t}return c.a.createElement("li",Object.assign({},a,{onClick:function(){u(!0),setTimeout((function(){n()}),200)},className:d()("item ",{"item--collapse":s})}),c.a.createElement("span",{className:"item-content"},b(t)?c.a.createElement("a",{href:t,rel:"noreferrer noopener",target:"_blank",onClick:function(e){e.stopPropagation()}},l()):l()))};v.defaultProps={onClick:function(){}};var h=v,y=n(8),j=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.title,a=void 0===n?"":n,r=t.position,o=void 0===r?null:r,i=t.timeStamp,c=void 0===i?Date.now():i,s=t.items;Object(y.a)(this,e),this.title=a,this.position=o,this.timeStamp=c,this.items=s},E=function(e){var t=e.isGrouped,n=void 0!==t&&t,a=e.position,r=e.onCreate,o=e.onClose,s=Object(i.useState)(""),u=Object(f.a)(s,2),l=u[0],m=u[1];return c.a.createElement("form",{className:d()("new-item item",{"item--absolute":a}),style:O(a),onSubmit:n?function(e){if(e.preventDefault(),l.length){var t=new j({position:a,title:l});r(t),m("")}}:function(){var e=new j({position:a,title:l,items:[]});r(e)}},c.a.createElement("input",{type:"text",className:"item-content",autoFocus:!0,value:l,onChange:function(e){var t=e.target.value;m(t)},onKeyDown:function(e){switch(e.keyCode){case 27:return o();case 8:if(l.length)return;return o();default:return}}}))};var S=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.x,a=void 0===n?0:n,r=t.y,o=void 0===r?0:r;Object(y.a)(this,e),this.x=a,this.y=o},w=n(19),P=n.n(w),C=n(20),D=n(23),k=n(21),N=n(24);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var I=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(D.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).ref=Object(i.createRef)(),n.state={dragPosition:null},n.dragStartOffset=null,n.isValidDragTarget=function(e){return!!!e.closest(".undraggable")},n.handleItemDragStart=function(e){if(n.isValidDragTarget(e.target)){var t=e.pageX,a=e.pageY,r=function(e){var t=e.getBoundingClientRect();return{x:t.left+window.scrollX,y:t.top+window.scrollY}}(e.currentTarget);n.dragStartOffset={x:t-r.x,y:a-r.y},document.addEventListener("mousemove",n.handleItemDrag)}},n.handleItemDrag=function(e){var t=new S({x:e.pageX-n.dragStartOffset.x,y:e.pageY-n.dragStartOffset.y});n.setState({dragPosition:t})},n.handleItemDragEnd=function(){document.removeEventListener("mousemove",n.handleItemDrag),n.state.dragPosition&&(n.props.onDragEnd(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.dragPosition)),n.setState({dragPosition:null}))},n}return Object(N.a)(t,e),Object(C.a)(t,[{key:"getStyle",value:function(e){return{left:e.x,top:e.y}}},{key:"render",value:function(){return c.a.createElement("div",{className:"draggable item--absolute",ref:this.ref,onMouseDown:this.handleItemDragStart,onMouseUp:this.handleItemDragEnd,style:this.getStyle(this.state.dragPosition||this.props.position)},this.props.children)}}]),t}(i.Component),z=function(e){var t=e.children,n=e.className,a=Object(g.a)(e,["children","className"]);return c.a.createElement("div",Object.assign({className:d()("undraggable",n)},a),t)};z.defaultProps={className:""};var A=z;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var J=c.a.memo((function(e){var t=e.position,n=e.title,a=e.items,r=e.timeStamp,o=e.onChange,s=e.onRemove,u=!a.length,p=Object(i.useState)(u),g=Object(f.a)(p,2),b=g[0],O=g[1],v=Object(i.useState)(!1),y=Object(f.a)(v,2),S=y[0],w=y[1];function C(e){O(!b)}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new j(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({position:t,title:n,items:a,timeStamp:r},e))}return c.a.createElement("div",{className:d()("item group",{"item--collapse":S}),style:{transform:S?"scale(0.7)":""}},n&&c.a.createElement("span",{className:"item-content"},n),c.a.createElement(A,{className:"item-add item-button",onClick:C},"+"),c.a.createElement(A,{className:"item-remove item-button",onClick:function(){w(!0),setTimeout((function(){s()}),200)}},"\xd7"),(a.length||b)&&c.a.createElement("div",{className:"group-items"},c.a.createElement(A,null,c.a.createElement(P.a,{tag:"ul",onChange:function(e){var t=D({items:e.map((function(e){return a.find((function(t){return t.timeStamp===parseInt(e)}))}))});o(t)}},a.map((function(e){return c.a.createElement(h,{key:e.timeStamp,"data-id":e.timeStamp,title:e.title,onClick:function(){return function(e){var t=D({items:a.filter((function(t){return t.timeStamp!==e.timeStamp}))});o(t),O(!1)}(e)}})}))),b&&c.a.createElement(E,{isGrouped:!0,onCreate:function(e){var t=D({items:[].concat(Object(m.a)(a),[e])});o(t)},onClose:C}))),c.a.createElement(A,{onClick:function(){!function(e){var t=document.createElement("textarea");t.style={position:"absolute",top:"-1000px"},t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(function(e){var t=e.title,n=e.items,a=(void 0===n?[]:n).map((function(e){var t=e.title;return"- ".concat(t)}));return[t].concat(Object(m.a)(a)).join("\n")}({title:n,items:a}))},className:"item-copy"},c.a.createElement("button",null,"copy")))}));function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var L=JSON.parse(localStorage.getItem("dragly-items")||"[]");var G=function(e){var t=e.db,n=e.userId,a=Object(i.useState)([]),r=Object(f.a)(a,2),o=r[0],s=r[1],u=Object(i.useState)(L),p=Object(f.a)(u,2),g=p[0],b=p[1],O=Object(i.useState)(null),v=Object(f.a)(O,2),h=v[0],y=v[1],j=Object(i.useState)(!1),w=Object(f.a)(j,2),P=w[0],C=w[1];function D(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&s([].concat(Object(m.a)(o),[g])),b(e),localStorage.setItem("dragly-items",JSON.stringify(e)),n&&t.collection("items").doc(n).set({items:JSON.parse(JSON.stringify(e))})}function k(e,t){var n=g.filter((function(e){return e.timeStamp!==t.timeStamp}));D([].concat(Object(m.a)(n),[e])),y(null)}function N(){if(o.length){D(o[o.length-1]||[],!1);var e=Object(m.a)(o);e.pop(),s(e)}}function x(e){return c.a.createElement(I,{position:e.position,onDragEnd:function(t){return k(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{position:t}),e)},key:e.timeStamp},c.a.createElement(J,Object.assign({},e,{onRemove:function(){return function(e){var t=g.filter((function(t){return t.timeStamp!==e.timeStamp}));D(Object(m.a)(t))}(e)},onChange:function(t){return k(t,e)}})))}Object(i.useEffect)((function(){document.addEventListener("keydown",(function(e){90===e.keyCode&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),N())}))})),Object(i.useEffect)((function(){n&&t.collection("items").doc(n).get().then((function(e){e.exists&&b(e.data().items)}))}),[t,n]);var z=g.map((function(e){return x(e)}));return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:d()("board",{obfuscated:P},"production"),onClick:function(e){if(e.target===e.currentTarget){var t=new S({x:e.pageX,y:e.pageY});y(t)}}},c.a.createElement("ul",null,z),h&&c.a.createElement(E,{onCreate:function(e){D([].concat(Object(m.a)(g),[e])),y(null)},position:h,onClose:function(){return y(null)}}),c.a.createElement("button",{className:d()("undo action",{visible:o.length}),onClick:N},c.a.createElement("span",{role:"img","aria-label":"Undo"},"\ud83e\udd2d")),c.a.createElement("button",{className:d()("obfuscate action ",{visible:g.length}),onClick:function(){C(!P)}},c.a.createElement("span",{role:"img","aria-label":"Obfuscate"},P?"\ud83d\udc35":"\ud83d\ude48"))))},K=n(38);n(48);K.initializeApp({apiKey:"AIzaSyC5Er4oZT-e4woRNxf9ZG59c4-MnP9ussQ",authDomain:"dragly-359ad.firebaseapp.com",projectId:"dragly-359ad",storageBucket:"",messagingSenderId:"747702472609",appId:"1:747702472609:web:3f48f2bbe7117d8c87c5e0"});var X=K.firestore();function Y(){return(Y=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return n=new K.auth.GoogleAuthProvider,e.next=4,K.auth().setPersistence(K.auth.Auth.Persistence.LOCAL);case 4:return e.next=6,K.auth().signInWithPopup(n);case 6:u.a.render(c.a.createElement(G,{db:X,userId:t&&t.uid}),document.getElementById("root"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}K.auth().onAuthStateChanged((function(e){!function(e){Y.apply(this,arguments)}(e)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2ef1866d.chunk.js.map