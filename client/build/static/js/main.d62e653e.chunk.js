(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(41),r=n.n(s),a=(n(57),n(21)),i=n.n(a),l=n(29),j=n(27),b=(n(59),n(2));function h(e){var t=e.handleSearch,n=e.handleSubmit,c=e.search;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Search a Book or Author"}),Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsx)("input",{type:"text",onChange:t,value:c,placeholder:"Search Books"}),Object(b.jsx)("input",{type:"submit"})]})]})}var d=n(97),u=n(102),x=n(105),O=n(106),p=n(101),m=n(103),f=n(104),v=n(100),g=n(99),k=n(18),w=n.n(k),I=Object(d.a)({root:{width:"100%"},container:{maxHeight:1e7}});function S(e){var t=e.apiResponse,n=I();return t?Object(b.jsx)(g.a,{item:!0,xs:12,children:Object(b.jsx)(v.a,{className:n.root,children:Object(b.jsx)(p.a,{className:n.container,children:Object(b.jsxs)(u.a,{stickyHeader:!0,size:"small","aria-label":"book table",children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(O.a,{align:"center",children:"Title"}),Object(b.jsx)(O.a,{align:"center",children:"Author/s"}),Object(b.jsx)(O.a,{align:"center",children:"Description"}),Object(b.jsx)(O.a,{align:"center",children:"Image"}),Object(b.jsx)(O.a,{align:"center",children:"Link"}),Object(b.jsx)(O.a,{align:"center",children:"Add to Database"})]})}),Object(b.jsx)(x.a,{children:t.map((function(e){return Object(b.jsxs)(f.a,{children:[Object(b.jsx)(O.a,{component:"th",scope:"row",children:e.volumeInfo.subtitle?Object(b.jsxs)("p",{children:[e.volumeInfo.title,": ",e.volumeInfo.subtitle]}):Object(b.jsx)("p",{children:e.volumeInfo.title})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:e.volumeInfo.authors?Object(b.jsx)("p",{children:e.volumeInfo.authors.join(", ")}):""}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("p",{children:e.volumeInfo.description})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:e.volumeInfo.imageLinks?Object(b.jsx)("img",{src:e.volumeInfo.imageLinks.smallThumbnail}):""}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("a",{href:e.volumeInfo.infoLink,children:"Link"})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("button",{onClick:function(){return function(e){var n=t.find((function(t){return t.id===e}));console.log("found",n);var c=n.volumeInfo.authors.join(", "),o={id:n.id,title:n.volumeInfo.title,authors:c,description:n.volumeInfo.description,image:n.volumeInfo.imageLinks.smallThumbnail,link:n.volumeInfo.infoLink};console.log("obj",o),w.a.post("/api/books",o)}(e.id)},children:"Add book to database"})})]},e.id)}))})]})})})}):Object(b.jsx)(b.Fragment,{})}var y=Object(d.a)({root:{width:"100%"},container:{maxHeight:1e7}});function A(e){var t=e.books,n=y();return console.log("savedbooks",t),Object(b.jsx)(g.a,{item:!0,xs:12,children:Object(b.jsx)(v.a,{className:n.root,children:Object(b.jsx)(p.a,{className:n.container,children:Object(b.jsxs)(u.a,{stickyHeader:!0,size:"small","aria-label":"book table",children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(O.a,{align:"center",children:"Title"}),Object(b.jsx)(O.a,{align:"center",children:"Author/s"}),Object(b.jsx)(O.a,{align:"center",children:"Description"}),Object(b.jsx)(O.a,{align:"center",children:"Image"}),Object(b.jsx)(O.a,{align:"center",children:"Link"}),Object(b.jsx)(O.a,{align:"center",children:"Add to Database"})]})}),Object(b.jsx)(x.a,{children:t.length>0?t.map((function(e){return Object(b.jsxs)(f.a,{children:[Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("p",{children:e.title})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("p",{children:e.authors})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("p",{children:e.description})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("img",{src:e.image})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("a",{href:e.link,children:"Link"})}),Object(b.jsx)(O.a,{component:"th",scope:"row",children:Object(b.jsx)("button",{onClick:function(){e.id},children:"Delete book"})})]},e.id)})):""})]})})})})}var B=n(17);function L(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B.b,{to:"/",children:Object(b.jsx)("button",{children:"Home"})}),Object(b.jsx)(B.b,{to:"/savedbooks",children:Object(b.jsx)("button",{children:"Saved Books"})})]})}var E=n(4);function C(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(),r=Object(j.a)(s,2),a=r[0],d=r[1],u=Object(c.useState)([]),x=Object(j.a)(u,2),O=x[0],p=x[1],m=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"AIzaSyBiRAp_gwEMeGdVrexvBfEnvJYmBC0iUEk",c="https://www.googleapis.com/books/v1/volumes?q=".concat(n,"&maxResults=20&printType=books&key=").concat("AIzaSyBiRAp_gwEMeGdVrexvBfEnvJYmBC0iUEk"),e.prev=3,e.next=6,fetch(c);case 6:return o=e.sent,e.next=9,o.json();case 9:s=e.sent,console.log("results",s.items),d(s.items),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("apiresponse",a)})),Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w()("/api/books");case 3:t=e.sent,console.log("response",t.data),p(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)(B.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(E.c,{children:[Object(b.jsxs)(E.a,{path:"/savedbooks",children:[Object(b.jsx)(L,{}),Object(b.jsx)(A,{books:O})]}),Object(b.jsxs)(E.a,{path:"/",children:[Object(b.jsx)(L,{}),Object(b.jsx)(h,{handleSearch:function(e){o(e.target.value)},handleSubmit:m,bookSearch:n}),Object(b.jsx)(S,{apiResponse:a})]})]})})})}var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),D()}},[[84,1,2]]]);
//# sourceMappingURL=main.d62e653e.chunk.js.map