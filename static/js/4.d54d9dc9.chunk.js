(this["webpackJsonpsamurai-network"]=this["webpackJsonpsamurai-network"]||[]).push([[4],{295:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},296:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},297:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},298:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return o}))},299:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},300:function(e,t,n){e.exports={messages:"Messages_messages__sE-hE",output:"Messages_output__3DU-1",dialogs:"Messages_dialogs__2NDBb",chat:"Messages_chat__3KJVi"}},301:function(e,t,n){e.exports={dialog:"Dialog_dialog__PhsES"}},302:function(e,t,n){e.exports={chatItem:"Message_chatItem__1I8h1",profile:"Message_profile__PfNrB",avatar:"Message_avatar__2V5Z4"}},309:function(e,t,n){"use strict";n.r(t);var a=n(121),r=n(0),o=n.n(r),c=n(300),u=n.n(c),i=n(301),s=n.n(i),l=n(14);var m=function(e){return o.a.createElement("li",{className:s.a.dialog},o.a.createElement(l.b,{to:"/messages/".concat(String(e.id))},e.name))},f=n(302),p=n.n(f);var b=function(e){return o.a.createElement("li",{className:p.a.chatItem},o.a.createElement("div",{className:p.a.profile},o.a.createElement("img",{className:p.a.avatar,src:"https://miro.medium.com/max/480/1*5LGjgBL2kWpog3AodB569A.jpeg",alt:"avatar"}),o.a.createElement("div",null,e.name)),o.a.createElement("div",null,e.message))},y=n(122),g=n(123),d=n(87),_=n(46),h=Object(_.a)(10),E=Object(d.a)("textarea");var v=Object(g.a)({form:"addMessage"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(y.a,{name:"message",validate:[_.b,h],component:E})),o.a.createElement("div",null,o.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),O=function(e){var t=e.state.dialogs.map((function(e){return o.a.createElement(m,{key:e.id,id:e.id,name:e.username})})),n=e.state.messages.map((function(e){return o.a.createElement(b,{key:e.id,name:e.username,message:e.message})}));return o.a.createElement("div",{className:u.a.messages},o.a.createElement("div",{className:u.a.output},o.a.createElement("ul",{className:u.a.dialogs},t),o.a.createElement("ul",{className:u.a.chat},n)),o.a.createElement(v,{onSubmit:function(t){e.buttonOnClick(t)}}))},j=n(15),S=n(295),w=n(296),k=n(298),N=n(297),M=n(299),P=n(28);function x(e){return{isAuth:e.auth.isAuth}}var A=n(8);t.default=Object(A.d)(Object(j.b)((function(e){return{state:e.messagesPage}}),(function(e){return{buttonOnClick:function(t){e(Object(a.b)(t))}}})),(function(e){var t=function(t){function n(){return Object(S.a)(this,n),Object(k.a)(this,Object(N.a)(n).apply(this,arguments))}return Object(M.a)(n,t),Object(w.a)(n,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(P.a,{to:"/login"})}}]),n}(o.a.Component);return Object(j.b)(x)(t)}))(O)}}]);
//# sourceMappingURL=4.d54d9dc9.chunk.js.map