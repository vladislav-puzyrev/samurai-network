(this["webpackJsonpsamurai-network"]=this["webpackJsonpsamurai-network"]||[]).push([[3],{301:function(e,t,a){e.exports={profile:"Profile_profile__2BglU"}},302:function(e,t,a){e.exports={user:"User_user__26rxK",avatar:"User_avatar__2CBqR",info:"User_info__24maK",name:"User_name__3bQpI",about:"User_about__3_B8Y",contacts:"User_contacts__SeENQ",contLI:"User_contLI__Pt66L"}},303:function(e,t,a){},304:function(e,t,a){e.exports={posts:"Posts_posts__3ouA4",title:"Posts_title__1vXq0",textarea:"Posts_textarea__1Xf1T",button:"Posts_button__1fVur",postsList:"Posts_postsList__2cN7d"}},305:function(e,t,a){e.exports={post:"Post_post__3GWhO",avatar:"Post_avatar__2boOG",message:"Post_message__1x5Ew"}},306:function(e,t,a){"use strict";a.r(t);var n=a(88),r=a(89),l=a(92),o=a(90),s=a(93),c=a(0),i=a.n(c),u=a(301),m=a.n(u);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(c){r=!0,l=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=a(302),d=a.n(f),v=a(35),E=a(303),b=a.n(E);var h=function(e){var t=p(Object(c.useState)(!1),2),a=t[0],n=t[1],r=p(Object(c.useState)(e.status),2),l=r[0],o=r[1];return Object(c.useEffect)((function(){o(e.status)}),[e.status]),i.a.createElement("div",{className:b.a.status},!a&&i.a.createElement("div",{onClick:function(){n(!0)}},e.status||"null"),a&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onChange:function(e){o(e.currentTarget.value)},onBlur:function(){n(!1),e.updateStatus(l)},onFocus:function(e){e.currentTarget.select()},type:"text",value:l})))},_=a(96),g=a.n(_),O=a(87),P=a(47),j=a(126),y=a(127),k=Object(O.a)("input"),N=Object(O.a)("textarea");var S=Object(y.a)({form:"edit-profile"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement("button",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),e.error&&i.a.createElement("div",null,e.error),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("label",null,"\u0418\u043c\u044f:",i.a.createElement(j.a,{type:"text",placeholder:"\u0418\u043c\u044f",name:"fullName",component:k,validate:[P.b]}))),i.a.createElement("div",null,i.a.createElement("label",null,"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:",i.a.createElement(j.a,{type:"checkbox",name:"lookingForAJob",component:k}))),i.a.createElement("div",null,i.a.createElement("label",null,"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:",i.a.createElement(j.a,{name:"lookingForAJobDescription",component:N,validate:[P.b]}))),i.a.createElement("div",null,i.a.createElement("label",null,"\u041e\u0431\u043e \u043c\u043d\u0435:",i.a.createElement(j.a,{name:"aboutMe",component:N,validate:[P.b]}))),i.a.createElement("div",null,i.a.createElement("b",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),Object.keys(e.profile.contacts).map((function(e){return i.a.createElement("div",{key:e},i.a.createElement("b",null,e),":",i.a.createElement(j.a,{type:"text",placeholder:e,name:"contacts."+e,component:k}))})))))}));function x(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("li",null,t,": ",a)}function w(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement(i.a.Fragment,null,a&&i.a.createElement("button",{onClick:n},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),i.a.createElement("ul",{className:d.a.about},i.a.createElement("li",null,"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",t.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"),t.lookingForAJob&&i.a.createElement("li",null,"\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438: ",t.lookingForAJobDescription),t.aboutMe&&i.a.createElement("li",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ",t.aboutMe),i.a.createElement("li",{className:d.a.contLI},"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:",i.a.createElement("ul",{className:d.a.contacts},Object.keys(t.contacts).map((function(e){return i.a.createElement(x,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))))}var A=function(e){var t=e.profile,a=e.savePhoto,n=e.status,r=e.updateStatus,l=e.isOwner,o=e.saveProfile,s=p(Object(c.useState)(!1),2),u=s[0],m=s[1];return t?i.a.createElement("div",{className:d.a.user},i.a.createElement("img",{className:d.a.avatar,src:t.photos.large||g.a,alt:"avatar"}),i.a.createElement("div",{className:d.a.info},i.a.createElement("h1",{className:d.a.name},t&&t.fullName),i.a.createElement(h,{status:n,updateStatus:r}),u?i.a.createElement(S,{profile:t,initialValues:t,onSubmit:function(e){o(e).then((function(){m(!1)}))}}):i.a.createElement(w,{goToEditMode:function(){m(!0)},isOwner:l,profile:t}),l&&i.a.createElement("input",{onChange:function(e){e.target.files.length&&a(e.target.files[0])},type:"file",style:{color:"white"}}))):i.a.createElement(v.a,null)},I=a(91),U=a(304),L=a.n(U),F=a(305),T=a.n(F);var J=function(e){return i.a.createElement("div",{className:T.a.post},i.a.createElement("div",null,i.a.createElement("img",{className:T.a.avatar,src:"https://miro.medium.com/max/480/1*5LGjgBL2kWpog3AodB569A.jpeg",alt:""})),i.a.createElement("div",{className:T.a.message},i.a.createElement("div",null,e.text),i.a.createElement("div",null,e.likes,"\u2665")))},B=Object(P.a)(10),C=Object(O.a)("textarea");var M=Object(y.a)({form:"profileAddNewPost"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(j.a,{className:L.a.textarea,name:"newPost",component:C,placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",validate:[P.b,B]})),i.a.createElement("div",null,i.a.createElement("button",{className:L.a.button},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))}));var D=function(e){var t=e.state.profilePage.posts.map((function(e){return i.a.createElement(J,{key:e.id,text:e.text,likes:e.likes})})).reverse();return i.a.createElement("div",{className:L.a.posts},i.a.createElement("h2",{className:L.a.title},"\u041f\u043e\u0441\u0442\u044b"),i.a.createElement(M,{onSubmit:function(t){e.addPost(t)}}),i.a.createElement("div",{className:L.a.postsList},t))},V=a(19);var G=Object(V.b)((function(e){return{state:e}}),(function(e){return{addPost:function(t){e(Object(I.a)(t))}}}))(D);var q=function(e){return i.a.createElement("div",{className:m.a.profile},i.a.createElement(A,{savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,saveProfile:e.saveProfile}),i.a.createElement(G,null))},K=a(29),Q=a(9),W=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId||this.props.userId||this.props.history.push("/login");this.props.getUsersProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(q,Object.assign({},this.props,{isOwner:!this.props.match.params.userId}))}}]),t}(i.a.Component);t.default=Object(Q.d)(Object(V.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId}}),{getUsersProfile:I.d,getStatus:I.c,updateStatus:I.g,savePhoto:I.e,saveProfile:I.f}),K.g)(W)}}]);
//# sourceMappingURL=3.80ed17fe.chunk.js.map