/*! For license information please see main.64c82790.chunk.js.LICENSE.txt */
(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{40:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(33),r=n.n(c),o=n(12),i=n(11),u=n(2),l=(n(40),n(0)),d=function(e){var t=e.isAuthenticated,n=e.logoutHandler,a=e.username;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/",children:" Home page"})}),t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{children:Object(l.jsxs)(o.b,{onClick:n,to:"/auth",children:[" ","Log out"]})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/todolist",children:" My TodoList"})})]}):Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/auth",children:" Login / Sign Up"})}),t?Object(l.jsxs)("li",{className:"welcome",children:[" ","Hello",Object(l.jsxs)("span",{className:"username",children:[" ",a]})," "]}):null]})})},j=n(4),h=n.n(j),p=n(9),b=n(10),f=n.n(b),O=(n(67),n(14)),x="https://todolist-server-hc2k.onrender.com",m=function(e){var t=e.isAuthenticated,n=e.authHandler,s=Object(a.useState)(!0),c=Object(i.a)(s,2),r=c[0],o=c[1],d=new O.a,j=function(){var e=Object(p.a)(h.a.mark((function e(t){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={username:t.target[0].value,password:t.target[1].value},e.prev=2,e.next=5,f.a.post("".concat(x,"/api/v1/users/login/"),a);case 5:s=e.sent,d.set("token",s.data.token),n(),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",alert(e.t0.response.data.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(h.a.mark((function e(t){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={username:t.target[0].value,email:t.target[1].value,password:t.target[2].value},e.prev=2,e.next=5,f.a.post("".concat(x,"/api/v1/users/signup/"),a);case 5:s=e.sent,d.set("token",s.data.token),n(),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",alert(e.t0.response.data.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return t?Object(l.jsx)(u.a,{to:"/todoList"}):Object(l.jsxs)("div",{className:"auth",children:[Object(l.jsx)("h1",{className:"title",children:"Log In or Sign Up"}),Object(l.jsxs)("div",{className:"auth-container",children:[Object(l.jsxs)("div",{className:"toggle",children:[Object(l.jsx)("h2",{className:r?"active":"",onClick:function(){return o(!0)},children:"LogIn"}),Object(l.jsx)("h2",{className:r?"":"active",onClick:function(){return o(!1)},children:"SignUp"})]}),r?Object(l.jsxs)("form",{onSubmit:j,className:"auth-form",children:[Object(l.jsx)("input",{className:"username-input",placeholder:"username",type:"text"}),Object(l.jsx)("input",{className:"password-input",placeholder:"password",type:"password"}),Object(l.jsx)("button",{className:"submit-btn",children:"Log in"})]}):Object(l.jsxs)("form",{onSubmit:b,className:"auth-form",children:[Object(l.jsx)("input",{className:"username-input",placeholder:"username",type:"text"}),Object(l.jsx)("input",{className:"email-input",placeholder:"email",type:"email"}),Object(l.jsx)("input",{className:"password-input",placeholder:"password",type:"password"}),Object(l.jsx)("button",{className:"submit-btn",children:"Register"})]})]})]})},v=function(e){var t=e.isAuthenticated,n=e.authHandler;return Object(l.jsx)(m,{isAuthenticated:t,authHandler:n})},k=n(35),g=(n(68),function(e){var t=e.token,n=e.todos,s=e.setSelectedOption,c=e.setTodos,r=e.selectedFilter,o=Object(a.useState)(""),u=Object(i.a)(o,2),d=u[0],j=u[1],b=function(){var e=Object(p.a)(h.a.mark((function e(a){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==d){e.next=3;break}return e.abrupt("return",alert("Nothing has been submited!"));case 3:return e.prev=3,e.next=6,f.a.post("http://localhost:8000/api/v1/todos/",{name:"todos",TodoText:d,isChecked:!1},{headers:{Authorization:"Bearer ".concat(t)}});case 6:s=e.sent,console.log(s),c([].concat(Object(k.a)(n),[{TodoText:d,isChecked:!1,_id:s.data.data._id}])),j(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0.response);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"todo-container",children:[Object(l.jsx)("h1",{className:"title",children:"Todo List"}),Object(l.jsxs)("form",{className:"add-form",action:"",onSubmit:b,children:[Object(l.jsx)("input",{onChange:function(e){return j(e.target.value)},placeholder:"add task to do",value:d,type:"text"}),Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)("i",{className:"fas fa-plus"})}),Object(l.jsxs)("div",{className:"filter-bar",children:[Object(l.jsx)("i",{className:"fas fa-sort-down"}),Object(l.jsxs)("select",{onChange:function(e){s(e.target.value)},value:r,children:[Object(l.jsx)("option",{value:"all",children:" All"}),Object(l.jsx)("option",{value:"finished",children:" Finished"}),Object(l.jsx)("option",{value:"unfinished",children:" Unfinished"})]})]})]})]})}),w=n(22),N=(n(69),function(e){var t=e.token,n=e.todo,a=e.todos,s=e.setTodos,c=function(){var e=Object(p.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("http://localhost:8000/api/v1/todos/".concat(n._id),{headers:{Authorization:"Bearer ".concat(t)}});case 3:c=e.sent,s(a.filter((function(e){return e._id!==n._id}))),console.log(c),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",alert(e.t0.response));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(p.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.patch("http://localhost:8000/api/v1/todos/".concat(n._id),{isChecked:!n.isChecked},{headers:{Authorization:"Bearer ".concat(t)}});case 3:c=e.sent,console.log(c),s(a.map((function(e){return e._id===n._id?Object(w.a)(Object(w.a)({},e),{},{isChecked:!e.isChecked}):e}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"todo-list",children:Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"task-name ".concat(n.isChecked?"completed":""),children:n.TodoText}),Object(l.jsxs)("span",{children:[Object(l.jsx)("button",{className:"complete-btn",onClick:r,children:Object(l.jsx)("i",{className:"fas fa-check"})}),Object(l.jsx)("button",{className:"delete-btn",onClick:c,children:Object(l.jsx)("i",{className:"fas fa-trash-alt"})})]})]})})})}),y=function(e){var t=e.token,n=e.todos,a=e.filteredTodos,s=e.setTodos;return Object(l.jsx)("div",{children:a.map((function(e){return Object(l.jsx)(N,{token:t,todo:e,todos:n,setTodos:s},e._id)}))})},S=function(e){var t=e.setUsername,n=Object(a.useState)([]),s=Object(i.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),d=u[0],j=u[1],b=Object(a.useState)("all"),x=Object(i.a)(b,2),m=x[0],v=x[1],k=(new O.a).get("token");Object(a.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("http://localhost:8000/api/v1/users/me",{headers:{Authorization:"Bearer ".concat(k)}});case 3:n=e.sent,console.log(n.data.data.doc.username),t(n.data.data.doc.username),w(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:8000/api/v1/todos",{headers:{Authorization:"Bearer ".concat(k)}});case 2:t=e.sent,console.log(t),r(t.data.todos);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){N()}),[c,m]);var N=function(){switch(m){case"finished":j(c.filter((function(e){return!0===e.isChecked})));break;case"unfinished":j(c.filter((function(e){return!1===e.isChecked})));break;default:j(c)}};return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{token:k,todos:c,setSelectedOption:v,setTodos:r,selectedFilter:m}),Object(l.jsx)(y,{token:k,todos:c,filteredTodos:d,setTodos:r})]})},C=function(e){var t=e.setUsername;return Object(l.jsx)(S,{setUsername:t})},T=function(){return Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)("span",{className:"welcome-home",children:"Welcome to ToDo List App"}),Object(l.jsx)("div",{className:"description",children:"An app to manage your tasks."}),Object(l.jsxs)("div",{className:"description",children:["Developed And Created By ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/shyam-kuntal-8762971a0/",children:"Shyam Kuntal"})," "]})]})},A=function(e){var t=e.children;return e.auth?Object(l.jsxs)(u.b,{children:[" ",t]}):Object(l.jsx)(u.a,{to:"/auth"})},L=(n(70),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),r=Object(i.a)(c,2),o=r[0],j=r[1],h=new O.a;Object(a.useEffect)((function(){h.get("token")?p():b()}),[]);var p=function(){s(!0)},b=function(){s(!1),h.remove("token")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{isAuthenticated:n,logoutHandler:b,username:o}),Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{path:"/",exact:!0,component:T}),Object(l.jsx)(u.b,{path:"/auth",children:Object(l.jsx)(v,{isAuthenticated:n,authHandler:p})}),Object(l.jsx)(A,{auth:n,path:"/todolist",children:Object(l.jsx)(C,{setUsername:j})})]})]})});r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(L,{})})}),document.querySelector("#root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.64c82790.chunk.js.map