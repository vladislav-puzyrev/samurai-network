(this["webpackJsonpsamurai-network"]=this["webpackJsonpsamurai-network"]||[]).push([[0],{10:function(e,t,n){e.exports={menu:"Menu_menu__27qdF",menuLink:"Menu_menuLink__EHAtu",active:"Menu_active__2D1vX"}},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(2),r=n.n(a),s=n(135),c=n.n(s).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"13d142c2-4a3d-479d-864d-57ee538f7fe2"}}),u={getUsers:function(e,t){var n,a,s=arguments;return r.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:"",u.next=3,r.a.awrap(c.get("users?count=".concat(e,"&page=").concat(t,"&term=").concat(n)));case 3:return a=u.sent,u.abrupt("return",a.data);case 5:case"end":return u.stop()}}))},isFollowing:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.get("follow/".concat(e)));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},follow:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.post("follow/".concat(e)));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},unfollow:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.delete("follow/".concat(e)));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))}},o={getProfile:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.get("profile/".concat(e)));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},getStatus:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.get("profile/status/".concat(e)));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},updateStatus:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.put("profile/status",{status:e}));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},updatePhoto:function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return(t=new FormData).append("image",e),a.next=4,r.a.awrap(c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}));case 4:return n=a.sent,a.abrupt("return",n.data);case 6:case"end":return a.stop()}}))},updateProfile:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.put("profile",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))}},i={me:function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(c.get("auth/me"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},login:function(e,t){var n,a,s,u=arguments;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=!(u.length>2&&void 0!==u[2])||u[2],a=u.length>3?u[3]:void 0,o.next=4,r.a.awrap(c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}));case 4:return s=o.sent,o.abrupt("return",s.data);case 6:case"end":return o.stop()}}))},logout:function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(c.post("auth/logout"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))}},l={getCaptcha:function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(c.get("security/get-captcha-url"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))}}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(38),r=n(8),s="samurai-network/messages/SEND_MESSAGE",c={dialogs:[{id:1,username:"\u0414\u0438\u043c\u044b\u0447"},{id:2,username:"\u0421\u0430\u0448\u0430"},{id:3,username:"\u0412\u0430\u043b\u0435\u0440\u0430"},{id:4,username:"\u0418\u0432\u0430\u043d"},{id:5,username:"\u0421\u0432\u0435\u0442\u0430"}],messages:[{id:1,username:"\u0414\u0438\u043c\u044b\u0447",message:"\u042f \u043b\u044e\u0431\u043b\u044e react!"},{id:2,username:"\u0414\u0438\u043c\u044b\u0447",message:"\u042f \u043b\u044e\u0431\u043b\u044e react!"}]};var u=function(e){return{type:s,formData:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messages[e.messages.length-1].id+1,username:"username",message:t.formData.message};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},129:function(e,t,n){e.exports={footer:"Footer_footer__3hmYT"}},130:function(e,t,n){e.exports={aside:"Sidebar_aside__1e2NK"}},132:function(e,t,n){e.exports={content:"Content_content__fZ86A"}},133:function(e,t,n){e.exports={preloader:"Preloader_preloader__oGcz1"}},134:function(e,t,n){e.exports=n.p+"static/media/preloader.584b607f.gif"},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){e.exports={error:"FormsControls_error__JuxJL"}},169:function(e,t,n){e.exports=n(296)},174:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),s=n(55),c=n.n(s),u=(n(174),n(15)),o=n(80),i=n.n(o),l=n(129),p=n.n(l);var f=function(){return r.a.createElement("footer",{className:p.a.footer},"samurai-network")},m=n(130),d=n.n(m),g=n(14),h=n(10),v=n.n(h);var w=function(){return r.a.createElement("ul",{className:v.a.menu},r.a.createElement("li",{className:v.a.menuItem},r.a.createElement(g.b,{exact:!0,to:"/profile",className:v.a.menuLink,activeClassName:v.a.active},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("li",{className:v.a.menuItem},r.a.createElement(g.b,{to:"/messages",className:v.a.menuLink,activeClassName:v.a.active},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),r.a.createElement("li",{className:v.a.menuItem},r.a.createElement(g.b,{to:"/users",className:v.a.menuLink,activeClassName:v.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),r.a.createElement("li",{className:v.a.menuItem},r.a.createElement(g.b,{to:"/news",className:v.a.menuLink,activeClassName:v.a.active},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),r.a.createElement("li",{className:v.a.menuItem},r.a.createElement(g.b,{to:"/music",className:v.a.menuLink,activeClassName:v.a.active},"\u041c\u0443\u0437\u044b\u043a\u0430")),r.a.createElement("li",{className:v.a.menuItem},r.a.createElement(g.b,{to:"/settings",className:v.a.menuLink,activeClassName:v.a.active},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))};var b=function(){return r.a.createElement("aside",{className:d.a.aside},r.a.createElement(w,null))},E=n(28),_=n(132),x=n.n(_),y=n(87),O=n(88),P=n(91),C=n(89),k=n(92),j=n(60),S=n.n(j),N=n(82),I=n.n(N);var U=function(e){var t=e.active?I.a.paginationItemActive:"";return r.a.createElement("li",{className:I.a.paginationItem+" "+t},e.number)},A=n(83),T=n.n(A),L=n(95),F=n.n(L);var R=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return r.a.createElement("li",{className:T.a.user},r.a.createElement("div",{className:T.a.avatarBox},r.a.createElement(g.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{src:t.photos.small||F.a,alt:"avatar",width:"100"})),t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)}},"follow")),r.a.createElement("div",null,t.name,t.status))},D=n(34),z=function(e){for(var t=e.currentPage,n=e.totalUsersCount,a=e.onPageChanged,s=e.setCurrentPage,c=e.isFetching,u=e.users,o=e.follow,i=e.unfollow,l=e.followingInProgress,p=[],f=+t;f<+t+5;f++)f<+n&&p.push(r.a.createElement(U,{key:f,number:f,active:t===+f}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:S.a.title},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),r.a.createElement("ul",{className:S.a.pagination,onClick:function(e){a(e.target.textContent),s(e.target.textContent)}},p),c&&r.a.createElement(D.a,null),r.a.createElement("ul",{className:S.a.users},u.map((function(e){return r.a.createElement(R,{key:e.id,user:e,followingInProgress:l,follow:o,unfollow:i})}))))},G=n(2),M=n.n(G),H=n(38),W=n(8),q=n(11),B="samurai-network/users/FOLLOW",J="samurai-network/users/UNFOLLOW",X="samurai-network/users/SET_USERS",K="samurai-network/users/SET_CURRENT_PAGE",Y="samurai-network/users/SET_TOTAL_USERS_COUNT",V="samurai-network/users/TOGGLE_IS_FETCHING",Z="samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS",$={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]};var Q=function(e){return{type:B,id:e}},ee=function(e){return{type:J,id:e}},te=function(e){return{type:V,isFetching:e}},ne=function(e,t){return{type:Z,isFetching:e,userId:t}},ae=function(e,t,n,a){return M.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e(ne(!0,t)),r.next=3,M.a.awrap(n(t));case 3:0===r.sent.resultCode&&e(a(t)),e(ne(!1,t));case 6:case"end":return r.stop()}}))},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(W.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(W.a)({},e,{followed:!0}):e}))});case J:return Object(W.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(W.a)({},e,{followed:!1}):e}))});case X:return Object(W.a)({},e,{users:t.users});case K:return Object(W.a)({},e,{currentPage:t.currentPage});case Y:return Object(W.a)({},e,{totalUsersCount:t.totalUsers});case V:return Object(W.a)({},e,{isFetching:t.isFetching});case Z:return Object(W.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},se=n(136),ce=function(e){return e.usersPage.users},ue=Object(se.a)(ce,(function(e){return e.filter((function(){return!0}))})),oe=function(e){return e.usersPage.pageSize},ie=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},pe=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},me=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(P.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getRequestUsers(n.props.pageSize,e)},n}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.getRequestUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return r.a.createElement(z,{onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,setCurrentPage:this.props.setCurrentPage,isFetching:this.props.isFetching,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})}}]),t}(r.a.Component);var de=Object(u.b)((function(e){return{users:ue(e),pageSize:oe(e),totalUsersCount:ie(e),currentPage:le(e),isFetching:pe(e),followingInProgress:fe(e)}}),{setCurrentPage:function(e){return{type:K,currentPage:e}},setIsFetching:te,getRequestUsers:function(e,t){return function(n,a){var r;return M.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n(te(!0)),a.next=3,M.a.awrap(q.d.getUsers(e,t));case 3:r=a.sent,n((c=r.items,{type:X,users:c})),n((s=r.totalCount,{type:Y,totalUsers:s})),n(te(!1));case 7:case"end":return a.stop()}var s,c}))}},follow:function(e){return function(t,n){var a;return M.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:a=q.d.follow.bind(q.d),ae(t,e,a,Q);case 2:case"end":return n.stop()}}))}},unfollow:function(e){return function(t,n){var a;return M.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:a=q.d.unfollow.bind(q.d),ae(t,e,a,ee);case 2:case"end":return n.stop()}}))}}})(me),ge=n(137),he=n.n(ge);var ve=function(){return r.a.createElement("div",{className:he.a.messages},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")},we=n(138),be=n.n(we);var Ee=function(){return r.a.createElement("div",{className:be.a.messages},"\u041c\u0443\u0437\u044b\u043a\u0430")},_e=n(139),xe=n.n(_e);var ye=function(){return r.a.createElement("div",{className:xe.a.messages},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")},Oe=n(125),Pe=n(126),Ce=n(86),ke=n(46),je=n(31),Se="samurai-network/auth/SET_USER_DATA",Ne="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",Ie={userId:null,email:null,login:null,isFetching:!1,isAuth:!1,captchaUrl:null};var Ue=function(e,t,n,a){return{type:Se,payload:{userId:e,email:t,login:n,isAuth:a}}},Ae=function(e){return{type:Ne,captchaUrl:e}},Te=function(){return function(e){var t,n,a,r,s;return M.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,M.a.awrap(q.a.me());case 2:0===(t=c.sent).resultCode&&(n=t.data,a=n.id,r=n.email,s=n.login,e(Ue(a,r,s,!0)));case 4:case"end":return c.stop()}}))}},Le=function(){return function(e){var t,n;return M.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M.a.awrap(q.c.getCaptcha());case 2:t=a.sent,n=t.url,e(Ae(n));case 5:case"end":return a.stop()}}))}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(W.a)({},e,{},t.payload);case Ne:return Object(W.a)({},e,{captchaUrl:t.captchaUrl});default:return e}},Re=Object(Ce.a)("input");var De=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Oe.a,{type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d",name:"login",component:Re,validate:[ke.b]})),r.a.createElement("div",null,r.a.createElement(Oe.a,{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",component:Re,validate:[ke.b]})),r.a.createElement(Oe.a,{type:"checkbox",name:"rememberMe",id:"rememberMe",component:Re,checked:!0}),r.a.createElement("label",{htmlFor:"rememberMe"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),a&&r.a.createElement("img",{src:a,alt:"captcha"}),a&&r.a.createElement(Oe.a,{type:"text",placeholder:"\u041a\u0430\u043f\u0447\u0430",name:"captcha",component:Re,validate:[ke.b]}),n?r.a.createElement("div",{style:{color:"red"}},n):null,r.a.createElement("div",null,r.a.createElement("button",null,"\u0412\u043e\u0439\u0442\u0438")))})),ze=Object(u.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(r){var s;return M.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,M.a.awrap(q.a.login(e,t,n,a));case 2:0===(s=c.sent).resultCode?r(Te()):(10===s.resultCode&&r(Le()),r(Object(je.a)("login",{_error:s.messages[0]})));case 4:case"end":return c.stop()}}))}}})((function(e){return e.isAuth?r.a.createElement(E.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),"// @ts-ignore",r.a.createElement(De,{captchaUrl:e.captchaUrl,onSubmit:function(t){var n=t.login,a=t.password,r=t.rememberMe,s=t.captcha;e.login(n,a,r,s)}}))}));function Ge(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(D.a,null)},r.a.createElement(e,t))}}var Me=r.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),He=r.a.lazy((function(){return n.e(3).then(n.bind(null,305))}));var We=function(){return r.a.createElement("div",{className:x.a.content},r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",render:function(){return r.a.createElement(E.a,{to:"/profile"})}}),r.a.createElement(E.b,{path:"/profile/:userId?",render:Ge(He)}),r.a.createElement(E.b,{path:"/messages",render:Ge(Me)}),r.a.createElement(E.b,{path:"/users",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(E.b,{path:"/news",component:ve}),r.a.createElement(E.b,{path:"/music",component:Ee}),r.a.createElement(E.b,{path:"/settings",component:ye}),r.a.createElement(E.b,{path:"/login",render:function(){return r.a.createElement(ze,null)}}),r.a.createElement(E.b,{path:"*",render:function(){return"404"}})))},qe=n(62),Be=n.n(qe),Je=function(e){return r.a.createElement("header",{className:Be.a.header},r.a.createElement("div",{className:Be.a.container},r.a.createElement("div",null,"LOGO"),e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"\u0412\u044b\u0439\u0442\u0438")):r.a.createElement(g.b,{to:"/login",className:Be.a.login},"Login")))},Xe=Object(u.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){return M.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.awrap(q.a.logout());case 2:0===t.sent.resultCode&&e(Ue(null,null,null,!1));case 4:case"end":return t.stop()}}))}}})((function(e){return r.a.createElement(Je,e)})),Ke="samurai-network/app/INITIALIZED_SUCCESS",Ye={initialized:!1};var Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;switch((arguments.length>1?arguments[1]:void 0).type){case Ke:return Object(W.a)({},e,{initialized:!0});default:return e}};var Ze=Object(u.b)((function(e){return{initialized:e.init.initialized}}),{initializeApp:function(){return function(e){Promise.all([e(Te())]).then((function(){e({type:Ke})}))}}})((function(e){return Object(a.useEffect)((function(){e.initializeApp()}),[]),e.initialized?r.a.createElement(g.a,null,r.a.createElement("div",{className:i.a.page},r.a.createElement(Xe,null),r.a.createElement("main",{className:i.a.main},r.a.createElement(b,null),r.a.createElement(We,null)),r.a.createElement(f,null))):r.a.createElement(D.a,null)})),$e=n(9),Qe=n(90),et=n(124),tt={friends:[{id:1,username:"\u0414\u0438\u043c\u044b\u0447",avatar:"https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"},{id:2,username:"\u041a\u043e\u043b\u044f\u043d",avatar:"https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"},{id:3,username:"\u0421\u0435\u0440\u0435\u0433\u0430",avatar:"https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"}]};var nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt;return arguments.length>1&&arguments[1],e},at=n(143),rt=n(127),st=Object($e.c)({profilePage:Qe.b,messagesPage:et.a,usersPage:re,sidebar:nt,auth:Fe,init:Ve,form:rt.a}),ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$e.d,ut=Object($e.e)(st,ct(Object($e.a)(at.a)));window._store=ut;var ot=ut;c.a.render(r.a.createElement(u.a,{store:ot},r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(133),c=n.n(s),u=n(134),o=n.n(u);t.a=function(){return r.a.createElement("img",{className:c.a.preloader,src:o.a,alt:"load"})}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435"},r=function(e){return function(t){if(t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - ".concat(e)}}},60:function(e,t,n){e.exports={pagination:"Users_pagination__nolDT",users:"Users_users__2YeWT"}},62:function(e,t,n){e.exports={header:"Header_header__2CR8J",container:"Header_container__HDvgl"}},80:function(e,t,n){e.exports={page:"App_page__4Klr-",main:"App_main__1nCkj"}},82:function(e,t,n){e.exports={paginationItem:"PaginationItem_paginationItem__10Dwb",paginationItemActive:"PaginationItem_paginationItemActive__vaSqg"}},83:function(e,t,n){e.exports={avatarBox:"User_avatarBox__1_XPd"}},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(140),r=n(0),s=n.n(r),c=n(141),u=n.n(c);function o(e){return function(t){var n=t.meta,r=t.input,c=Object(a.a)(t,["meta","input"]),o=n.error&&n.touched;return s.a.createElement("span",{className:o?u.a.error:null},s.a.createElement(e,Object.assign({},r,c)),o&&s.a.createElement("span",null,n.error))}}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return w})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return _}));var a=n(2),r=n.n(a),s=n(38),c=n(8),u=n(11),o=n(31),i="samurai-network/profile/ADD_POST",l="samurai-network/profile/SET_USER_PROFILE",p="samurai-network/profile/SET_STATUS",f="samurai-network/profile/DELETE_POST",m="samurai-network/profile/SAVE_PHOTO_SUCCESS",d={posts:[{id:1,text:"\u0412\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f React?",likes:4},{id:2,text:"hey",likes:2}],profile:null,status:"",postText:""};var g=function(e){return{type:i,post:e.newPost}},h=function(e){return{type:p,status:e}},v=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(u.b.getProfile(e));case 2:n=a.sent,t({type:l,profile:n});case 4:case"end":return a.stop()}}))}},w=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(u.b.getStatus(e));case 2:n=a.sent,t(h(n));case 4:case"end":return a.stop()}}))}},b=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(u.b.updateStatus(e));case 2:0===n.sent.resultCode&&t(h(e));case 4:case"end":return n.stop()}}))}},E=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(u.b.updatePhoto(e));case 2:0===(n=a.sent).resultCode&&t((s=n.data.photos,{type:m,photos:s}));case 4:case"end":return a.stop()}var s}))}},_=function(e){return function(t,n){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(u.b.updateProfile(e));case 2:if(0!==a.sent.resultCode){a.next=7;break}t(v(n().auth.userId)),a.next=9;break;case 7:return t(Object(o.a)("edit-profile",{_error:"response.data.messages[0]"})),a.abrupt("return",Promise.reject());case 9:case"end":return a.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:e.posts[e.posts.length-1].id+1,text:t.post,likes:0};return Object(c.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n]),postText:""});case l:return Object(c.a)({},e,{profile:t.profile});case p:return Object(c.a)({},e,{status:t.status});case f:return Object(c.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case m:return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}}},95:function(e,t,n){e.exports=n.p+"static/media/defaultAvatar.b4b85090.png"}},[[169,1,2]]]);
//# sourceMappingURL=main.953378fe.chunk.js.map