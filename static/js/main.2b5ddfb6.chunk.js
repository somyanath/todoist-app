(window.webpackJsonptodoapp=window.webpackJsonptodoapp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(14),n(8)),l=n(1),s=n(2),d=n(4),u=n(3),m=n(5),h=function(t){var e=t.todos,n=t.deleteTodo,a=e.length?e.map((function(t){return o.a.createElement("div",{className:"collection-item",key:t.id},o.a.createElement("span",{onClick:function(){n(t.id)}},t.content))})):o.a.createElement("p",{className:"center"},"You have no tasks left, Have fun..!!");return o.a.createElement("div",{className:"todos collection"},a)},p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={content:""},n.handleSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.content),n.setState({content:""})},n.handleChange=function(t){n.setState({content:t.target.value})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Add new task:"),o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),e}(a.Component),f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[{id:1,content:"pick up kids"},{id:2,content:"buy groceries"}]},n.deleteTodo=function(t){var e=n.state.todos.filter((function(e){return e.id!==t}));n.setState({todos:e})},n.addTodo=function(t){var e={id:Math.random(),content:t},a=[].concat(Object(i.a)(n.state.todos),[e]);n.setState({todos:a})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-app container"},o.a.createElement("h1",{className:"center blue-text"},"Todo's"),o.a.createElement(h,{todos:this.state.todos,deleteTodo:this.deleteTodo}),o.a.createElement(p,{addTodo:this.addTodo}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2b5ddfb6.chunk.js.map