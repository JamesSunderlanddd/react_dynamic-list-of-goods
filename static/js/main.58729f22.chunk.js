(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),s=n(9),a=n(3),c=n(6),i=n(7),u=n(11),d=n(10),l=n(1),f=n.n(l),p=n(2),b=n.n(p),j=(n(17),n(0)),g=function(t){var e=t.goods,n=t.isLoading;return Object(j.jsxs)(j.Fragment,{children:[n&&Object(j.jsx)("p",{children:"Loading in progress..."}),Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{style:{color:"".concat(t.color)},children:t.name},t.id)}))})]})};function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var m=function(){var t=Object(a.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={goods:[],listIsVisible:!1,isLoading:!1,errorMessage:""},t.loadGoodsFromServer=function(){var e=Object(a.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({goods:[],listIsVisible:!0,isLoading:!0}),e.prev=1,e.next=4,n();case 4:r=e.sent,t.setState({goods:Object(s.a)(r),isLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({errorMessage:"No goods were found...",isLoading:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,r=e.listIsVisible,o=e.isLoading,s=e.errorMessage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Dynamic list of Goods"}),Object(j.jsx)("button",{type:"submit",onClick:function(){return t.loadGoodsFromServer(h)},children:"Load All goods"}),Object(j.jsx)("button",{type:"submit",onClick:function(){return t.loadGoodsFromServer(m)},children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"submit",onClick:function(){return t.loadGoodsFromServer(v)},children:"Load red goods"}),r&&Object(j.jsx)(g,{goods:n,isLoading:o}),s&&Object(j.jsx)("p",{children:s})]})}}]),n}(b.a.Component),x=O;o.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.58729f22.chunk.js.map