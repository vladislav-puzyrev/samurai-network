(this["webpackJsonpsamurai-network"]=this["webpackJsonpsamurai-network"]||[]).push([[4],{298:function(e,a,t){e.exports={messages:"Messages_messages__2WosV",output:"Messages_output__248O2",dialogs:"Messages_dialogs__3vxNW",chat:"Messages_chat__1jnvH"}},299:function(e,a,t){e.exports={dialog:"Dialog_dialog__1TBUV"}},300:function(e,a,t){e.exports={chatItem:"Message_chatItem__1uDfr",profile:"Message_profile__2ZXh3",avatar:"Message_avatar__1ezTO"}},307:function(e,a,t){"use strict";t.r(a);var n=t(124),s=t(0),r=t.n(s),c=t(298),i=t.n(c),m=t(299),u=t.n(m),l=t(14);var o=function(e){return r.a.createElement("li",{className:u.a.dialog},r.a.createElement(l.b,{to:"/messages/".concat(String(e.id))},e.name))},g=t(300),d=t.n(g);var p=function(e){return r.a.createElement("li",{className:d.a.chatItem},r.a.createElement("div",{className:d.a.profile},r.a.createElement("img",{className:d.a.avatar,src:"https://miro.medium.com/max/480/1*5LGjgBL2kWpog3AodB569A.jpeg",alt:"avatar"}),r.a.createElement("div",null,e.name)),r.a.createElement("div",null,e.message))},f=t(125),b=t(126),_=t(92),v=t(70),h=Object(v.a)(10),E=Object(_.a)("textarea");var O=Object(b.a)({form:"addMessage"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(f.a,{name:"message",validate:[v.b,h],component:E})),r.a.createElement("div",null,r.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),j=function(e){var a=e.state.dialogs.map((function(e){return r.a.createElement(o,{key:e.id,id:e.id,name:e.username})})),t=e.state.messages.map((function(e){return r.a.createElement(p,{key:e.id,name:e.username,message:e.message})}));return r.a.createElement("div",{className:i.a.messages},r.a.createElement("div",{className:i.a.output},r.a.createElement("ul",{className:i.a.dialogs},a),r.a.createElement("ul",{className:i.a.chat},t)),r.a.createElement(O,{onSubmit:function(a){e.buttonOnClick(a)}}))},k=t(19),N=t(47),M=t(48),x=t(58),A=t(49),w=t(59),y=t(29);function S(e){return{isAuth:e.auth.isAuth}}var B=t(7);a.default=Object(B.d)(Object(k.b)((function(e){return{state:e.messagesPage}}),(function(e){return{buttonOnClick:function(a){e(Object(n.b)(a))}}})),(function(e){var a=function(a){function t(){return Object(N.a)(this,t),Object(x.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(w.a)(t,a),Object(M.a)(t,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(y.a,{to:"/login"})}}]),t}(r.a.Component);return Object(k.b)(S)(a)}))(j)}}]);
//# sourceMappingURL=4.1667a164.chunk.js.map