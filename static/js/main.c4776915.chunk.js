(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(22),s=c.n(a),n=c(7),i=c(2),b=(c(30),c(31),c(32),c(11)),j=c.n(b),r=c(3),l=function(){return"home"===Object(i.r)().path&&i.a,Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{})})})]})},d=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e=Object(i.r)().tabId;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:o.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":t.id===e}),children:Object(r.jsx)(n.b,{to:t.id,children:t.title})},t.id)}))})}),e?Object(r.jsx)(i.b,{}):Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})},x=function(){var e=Object(i.r)().tabId,t=o.find((function(t){return t.id===e}));return Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(i.e,{children:Object(r.jsx)(i.c,{children:Object(r.jsxs)(i.c,{path:"/:path?",element:Object(r.jsx)(l,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(d,{})}),Object(r.jsx)(i.c,{path:"tabs",element:Object(r.jsx)(h,{}),children:Object(r.jsx)(i.c,{path:":tabId?",element:Object(r.jsx)(x,{})})}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c4776915.chunk.js.map