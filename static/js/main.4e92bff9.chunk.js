(this["webpackJsonpcream-play-h5"]=this["webpackJsonpcream-play-h5"]||[]).push([[0],{100:function(A,e,n){"use strict";n.r(e);n(8);var t=n(0),c=n.n(t),o=n(29),a=n.n(o),i=n(11),g=n(20),B=n(55),r=n(2),p="ADD",s="MINUS",l={num:100};var u="LOAD_USER_DATA",Q="CLEAR_USER_DATA",E="LOAD_CURRENT_USER_DATA",w="CLEAR_CURRENT_USER_DATA",j={currentUser:Object(r.a)({},{login:!1,permissions:[],authority:[],role:[],token:null,username:null,userId:null})};var M=n(27),D=(n(33),{save:function(A,e){return window.localStorage.setItem(A,e)},get:function(A){return window.localStorage.getItem(A)},remove:function(A){return window.localStorage.removeItem(A)}}),O="LOAD_SETTING_DATA",G="CLEAR_SETTING_DATA",U={locale:D.get("locale")||"zh-CN",theme:"light"};var k=Object(g.c)({counter:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(r.a)(Object(r.a)({},A),{},{num:A.num+1});case s:return Object(r.a)(Object(r.a)({},A),{},{num:A.num-1});default:return A}},user:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(r.a)(Object(r.a)({},A),e.payload);case Q:return Object(r.a)({},j);case E:return Object(r.a)(Object(r.a)({},j),{},{currentUser:Object(r.a)(Object(r.a)({},A.currentUser),e.payload)});case w:return Object(r.a)(Object(r.a)({},j),{},{currentUser:Object(r.a)({},j.currentUser)});default:return A}},setting:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(r.a)(Object(r.a)({},A),e.payload);case G:return Object(r.a)({},U);default:return A}}}),h="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):g.d,I=[B.a],C=h(g.a.apply(void 0,I));var m=n(12),d=n(104),R={"en-US":{"navBar.lang":"Languages","layout.user.link.help":"Help","layout.user.link.privacy":"Privacy","layout.user.link.terms":"Terms","app.preview.down.block":"Download this page to your local project","app.welcome.link.fetch-blocks":"Get all block","app.welcome.link.block-list":"Quickly build standard, pages based on `block` development"},"zh-CN":{"navBar.lang":"\u8bed\u8a00","layout.user.link.help":"\u5e2e\u52a9","layout.user.link.privacy":"\u9690\u79c1","layout.user.link.terms":"\u6761\u6b3e","app.preview.down.block":"\u4e0b\u8f7d\u6b64\u9875\u9762\u5230\u672c\u5730\u9879\u76ee","app.welcome.link.fetch-blocks":"\u83b7\u53d6\u5168\u90e8\u533a\u5757","app.welcome.link.block-list":"\u57fa\u4e8e block \u5f00\u53d1\uff0c\u5feb\u901f\u6784\u5efa\u6807\u51c6\u9875\u9762"},"zh-TW":{"navBar.lang":"\u8a9e\u8a00","layout.user.link.help":"\u5e6b\u52a9","layout.user.link.privacy":"\u96b1\u79c1","layout.user.link.terms":"\u689d\u6b3e","app.preview.down.block":"\u4e0b\u8f09\u6b64\u9801\u9762\u5230\u672c\u5730\u9805\u76ee"}};var H=function(A){var e=A.children,n=(Object(i.c)((function(A){return A.setting}))||{}).locale,o=Object(t.useState)(R["zh-CN"]),a=Object(m.a)(o,2),g=a[0],B=a[1];return Object(t.useEffect)((function(){B(Object(r.a)(Object(r.a)({},R["zh-CN"]),R[n]))}),[n]),c.a.createElement(d.a,{messages:g,locale:n,key:n,defaultLocale:"zh-CN"},e)},S=n(57),y=n(6),T=n(22),K=n(28),P=(n(32),n(58),n(41)),b=n.n(P),Y=n(59),N="token",x="refreshToken",f={TOKEN:N,REFRESH_TOKEN:x,HEADER_TOKEN:"Token",saveToken:function(A,e){var n=N;A===x&&(n=x),D.save(n,e)},getToken:function(A){var e=N;A===x&&(e=x),D.get(e);var n=D.get(e);return null===n?"":n},removeToken:function(A){var e=N;A===x&&(e=x),D.remove(e)},saveSession:function(A,e){A&&this.saveToken(this.TOKEN,A),e&&this.saveToken(this.REFRESH_TOKEN,e)},clearSession:function(){this.removeToken(this.TOKEN),this.removeToken(this.REFRESH_TOKEN)},continueSession:function(){return Object(Y.a)(b.a.mark((function A(){return b.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:case"end":return A.stop()}}),A)})))()}},Z=function(A){return A?"/mockapi":"/api"};var q={user:{login:"".concat("").concat(Z(),"/login"),logout:"".concat("").concat(Z(),"/logout"),currentUser:"".concat("").concat(Z(),"/user/info")},core:{demo:"".concat("").concat(Z(),"/demo/:id")},common:{}},J=(Z(),function(){return new Promise((function(A){setTimeout((function(){A({status:200,msg:"success",data:{username:"abc",token:"token_123456",userId:"123abc"}})}),200)}))}),F={login:function(A){return J()},logout:function(A){return J()},currentUser:function(A){return J()}},z=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:E,payload:A}};function V(A,e,n){return function(t){F.login(A).then((function(A){var n=A.data||{},c=n.token,o=Object(K.a)(n,["token"]),a=Object(r.a)({login:!0,token:c,authority:["user"]},o);t(z(a)),f.saveSession(c),"function"===typeof e&&e(A)})).catch((function(A){"function"===typeof n&&n(A)}))}}n(93);n(103);var v=function(){var A=Object(i.c)((function(A){return A.user.currentUser})),e=Object(i.b)(),n=Object(y.g)(),o=Object(t.useState)(""),a=Object(m.a)(o,2),g=a[0],B=a[1],r=Object(t.useState)(""),p=Object(m.a)(r,2),s=p[0],l=p[1];return c.a.createElement("div",{className:"page-dashboard"},c.a.createElement("h1",null,"Login Page"),c.a.createElement("div",{className:"page-body"},c.a.createElement("div",null,JSON.stringify(A)),c.a.createElement("form",{action:"demo-form.php"},"name: ",c.a.createElement("input",{type:"text",value:g,onChange:function(A){return B(A.target.value)}}),c.a.createElement("br",null),"password: ",c.a.createElement("input",{type:"text",value:s,onChange:function(A){return l(A.target.value)}}),c.a.createElement("br",null),c.a.createElement("button",{type:"button",onClick:function(){e(V({name:g,password:s},(function(A){console.log("\u767b\u5f55\u6210\u529f",A),n.push("/dashboard")})))}},"\u767b\u5f55"))))},W=(n(95),function(A){var e=A.active,n=void 0!==e&&e,t=A.url;return c.a.createElement("div",{className:"option-item ".concat(n?"active":"")},c.a.createElement("div",{className:"image-wrap"},c.a.createElement("img",{src:t})),n&&c.a.createElement("div",{className:"result"},c.a.createElement("img",{src:"/assets/question/right.png"})))}),X=function(A){var e=A.children,n=A.title;return c.a.createElement("div",{className:"question-section"},c.a.createElement("div",{className:"title"},n),c.a.createElement("div",{className:"question-body"},e))},L="/cream-play-h5/";console.log("PUBLIC_URL",L);var _=[{id:"1",type:"select",options:[{url:L+"/assets/question/topic_1/shao.png"},{url:L+"/assets/question/topic_1/gun.png"},{url:L+"/assets/question/topic_1/qianbi.png"}],rightIndex:0}],$=function(){var A=Object(y.g)().location,e=Object(M.parse)(A.search.split("?")[1]);console.log("query",e);var n=Object(t.useState)(e.id),o=Object(m.a)(n,2),a=o[0],i=(o[1],Object(t.useState)((function(){return function(A,e){return A.find((function(A){return A.id===e}))}(_,a)}))),g=Object(m.a)(i,2),B=g[0],r=(g[1],Object(t.useState)(!1)),p=Object(m.a)(r,2);p[0],p[1];return console.log("info",B),c.a.createElement("div",{className:"page-question"},c.a.createElement("div",{className:"page-body"},c.a.createElement(X,{title:"\u8bf7\u95ee\u5c0f\u670b\u53cb, \u54ea\u6837\u4e1c\u897f\u80fd\u5e2e\u52a9\u5927\u8c61\u83ab\u5361\u7684\u9f3b\u5b50\u53d8\u957f\uff1f"},c.a.createElement(W,{active:!0,url:L+"/assets/question/topic_1/shao.png"}),c.a.createElement(W,{active:!1,url:L+"/assets/question/topic_1/gun.png"}),c.a.createElement(W,{active:!1,url:L+"/assets/question/topic_1/qianbi.png"}))))},AA=[{path:"/cream-play-h5",exact:!0,redirect:"/cream-play-h5/question"},{path:"/login",component:v,exact:!0},{path:"/cream-play-h5/question",component:$,exact:!0},{path:"/question",component:$,exact:!0}],eA=function A(e){return e.render?c.a.createElement(y.b,{key:e.path,path:e.path,exact:e.exact,render:e.render}):c.a.createElement(y.b,{key:e.path,path:e.path,exact:e.exact,render:function(){var n=c.a.createElement(y.d,null,e.routes&&e.routes.map((function(e){return c.a.createElement(A,Object(S.a)({key:e.path},e))})));return e.redirect?c.a.createElement(y.a,{to:e.redirect}):e.component?c.a.createElement(e.component,{authority:e.authority||[]},n):n}})};var nA=function(){return c.a.createElement(T.a,null,c.a.createElement(y.d,null,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(A){return eA(A)}))}(AA)))},tA=(n(97),function(){return c.a.createElement(H,null,c.a.createElement("div",{className:"app"},c.a.createElement(nA,null)))}),cA=(n(99),Object(g.e)(k,C));a.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:cA},c.a.createElement(tA,null))),document.getElementById("root"))},93:function(A,e,n){var t=n(38),c=n(94);"string"===typeof(c=c.__esModule?c.default:c)&&(c=[[A.i,c,""]]);var o={insert:"head",singleton:!1};t(c,o);A.exports=c.locals||{}},94:function(A,e,n){"use strict";n.r(e);var t=n(24),c=n.n(t)()(!1);c.push([A.i,".basic-layout {\n  position: relative;\n  height: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n.basic-layout .main-container {\n  width: 100%;\n  min-height: 100%;\n  padding-bottom: 100px;\n  box-sizing: border-box;\n}\n",""]),e.default=c},95:function(A,e,n){var t=n(38),c=n(96);"string"===typeof(c=c.__esModule?c.default:c)&&(c=[[A.i,c,""]]);var o={insert:"head",singleton:!1};t(c,o);A.exports=c.locals||{}},96:function(A,e,n){"use strict";n.r(e);var t=n(24),c=n.n(t)()(!1);c.push([A.i,".page-question {\n  width: 100%;\n  height: 100%;\n}\n.page-question .page-body {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.page-question .page-body .question-section .title {\n  font-size: 1.4rem;\n  line-height: 1.8rem;\n  padding: 10px 20px;\n  text-align: center;\n}\n.page-question .page-body .question-section .question-body {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-top: 30px;\n}\n.page-question .page-body .question-section .question-body .option-item {\n  width: 8rem;\n  height: 8rem;\n  border-radius: 1rem;\n  margin-right: 20px;\n  position: relative;\n  padding: 3px;\n}\n.page-question .page-body .question-section .question-body .option-item.active {\n  background-image: url('data:image/jpg;base64,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');\n}\n.page-question .page-body .question-section .question-body .option-item img {\n  width: 100%;\n  height: 100%;\n}\n.page-question .page-body .question-section .question-body .option-item .result {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 30px;\n  height: 30px;\n}\n.page-question .page-body .question-section .question-body .option-item .result img {\n  width: 30px;\n  height: 30px;\n}\n.page-question .page-body .question-section .question-body .option-item:last-of-type {\n  margin-right: 0px;\n}\n",""]),e.default=c},97:function(A,e,n){var t=n(38),c=n(98);"string"===typeof(c=c.__esModule?c.default:c)&&(c=[[A.i,c,""]]);var o={insert:"head",singleton:!1};t(c,o);A.exports=c.locals||{}},98:function(A,e,n){"use strict";n.r(e);var t=n(24),c=n.n(t)()(!1);c.push([A.i,".app {\n  width: 100%;\n  height: 100%;\n}\n/* .App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n} */\n/* .App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n} */\n/* .App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n} */\n",""]),e.default=c},99:function(A,e,n){}},[[100,1,2]]]);