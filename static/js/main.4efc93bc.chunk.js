(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n),s=r(9),a=r(3),c=r(6),i=r(7),u=r(11),d=r(10),l=r(1),f=r.n(l),b=r(2),p=r.n(b),g=(r(17),r(0)),j=function(e){var t=e.goods;return Object(g.jsx)("ul",{children:t.map((function(e){return Object(g.jsx)("li",{style:{color:"".concat(e.color)},children:e.name},e.id)}))})};function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(e){return e.json()}))}var m=function(){var e=Object(a.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,e.abrupt("return",t.sort((function(e,t){return e.name.localeCompare(t.name)})).slice(0,5));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(a.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,e.abrupt("return",t.filter((function(e){return"red"===e.color})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={goods:[],listIsVisible:!1,isLoading:!1,errorMessage:"",hasError:!1,loadingMessage:"Loading in progress"},e.loadGoodsFromServer=function(){var t=Object(a.a)(f.a.mark((function t(r){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({goods:[],isLoading:!0}),t.prev=1,t.next=4,r();case 4:n=t.sent,e.setState({goods:Object(s.a)(n),isLoading:!1,listIsVisible:!0}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({errorMessage:"No goods were found...",isLoading:!1,hasError:!0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.goods,n=t.listIsVisible,o=t.isLoading,s=t.errorMessage,a=t.hasError,c=t.loadingMessage;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Dynamic list of Goods"}),Object(g.jsx)("button",{type:"submit",onClick:function(){return e.loadGoodsFromServer(h)},children:"Load All goods"}),Object(g.jsx)("button",{type:"submit",onClick:function(){return e.loadGoodsFromServer(m)},children:"Load 5 first goods"}),Object(g.jsx)("button",{type:"submit",onClick:function(){return e.loadGoodsFromServer(v)},children:"Load red goods"}),Object(g.jsx)("br",{}),!a&&(o?c:n&&Object(g.jsx)(j,{goods:r})),a&&s&&Object(g.jsx)("p",{children:s})]})}}]),r}(p.a.Component),x=O;o.a.render(Object(g.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4efc93bc.chunk.js.map