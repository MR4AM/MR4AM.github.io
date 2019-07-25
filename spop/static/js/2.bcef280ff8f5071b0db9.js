webpackJsonp([2],{KvKp:function(e,n,t){"use strict";var o=t("LcI6"),r=t.n(o),a=t("//Fk"),i=t.n(a),s=t("mtWM"),c=t.n(s),g=t("7+uW"),l=t("vgQg"),u=c.a.create({timeout:5e3});l.a.axiosLoginConfig;window.isRefreshing=!1;u.interceptors.request.use(function(e){window.localStorage.getItem("access_token"),window.localStorage.getItem("refresh_token");return e},function(e){return i.a.reject(e)});var f=u,d=t("mw3O"),p=t.n(d),m=t("lbHh"),h=t.n(m),q={setPageTitle:function(e){e&&(window.document.title=e)},Logline:{setLog:function(e,n,t,o){r.a.using(r.a.PROTOCOL.INDEXEDDB),e||(e="api-request");var a=new r.a(e);switch(n){case"info":a.info(t);break;case"error":a.error(t,o);break;case"warning":a.warning(t);break;default:a.error(t,o)}},getLog:function(e,n,t){e&&n?r.a.get(e,n,function(e){t?t(e):console.log(e)}):e&&!n?r.a.get(e,function(e){t?t(e):console.log(e)}):r.a.all(function(e){t?t(e):console.log(e)})},cleanLog:function(){r.a.clean()}},sendReq:function(e){var n=void 0,t=void 0;switch(e.req.ctxType){case"json":n=l.a.axiosJsonConfig,t=e.req.data;break;case"formdata":n=l.a.axiosFormDataConfig,t=p.a.stringify(e.req.data);break;default:n=l.a.axiosJsonConfig,t=e.req.data}"post"===e.req.method?f.post(e.queryUrl,t,n).then(function(n){"0"===n.data.code?e.req.success?e.req.success(n):console.log(n):(q.Logline.setLog("","error","api fail",{errMsg:n.data.message,params:e}),e.req.fail?e.req.fail(n):console.log(n))}).catch(function(n){q.Logline.setLog("","error","request fail",{errMsg:n.toString(),params:e}),e.req.error?e.req.error(n):g.default.prototype.$message.error("请求接口失败，请检查网络")}):f.get(e.queryUrl,t).then(function(n){0===n.data.code?e.req.success?e.req.success(n):console.log(n):(q.Logline.setLog("","error","api fail",{errMsg:n.data.message,params:e}),e.req.fail?e.req.fail(n):console.log(n))}).catch(function(n){q.Logline.setLog("","error","request fail",{errMsg:n.toString(),params:e}),e.req.error?e.req.error(n):g.default.prototype.$message.error("请求接口失败，请检查网络")})},getDeviceInfo:function(e){var n=navigator.userAgent;if("browser"===e){var t=n.indexOf("Opera")>-1,o=n.indexOf("compatible")>-1&&n.indexOf("MSIE")>-1&&!t,r=n.indexOf("Firefox")>-1,a=n.indexOf("Safari")>-1,i=n.indexOf("Chrome")>-1,s=n.indexOf("Edge")>-1;if(!o)return r?"Firefox":t?"Opera":i?"Chrome":s?"Edge":a?"Safari":"Unknown";var c,g,l,u,f,d,p;new RegExp("MSIE (\\d+\\.\\d+);").test(n);var m=parseFloat(RegExp.$1);if(c="5.5"===m,g="6.0"===m,l="7.0"===m,u="8.0"===m,f="9.0"===m,d="10.0"===m,p="11.0"===m,"5"===m)return"IE5";if(c)return"IE55";if(g)return"IE6";if(l)return"IE7";if(u)return"IE8";if(f)return"IE9";if(d)return"IE10";if(p)return"IE11"}else{if("device"===e){var h=n.indexOf("Android")>-1,q=n.indexOf("iPhone")>-1,w=n.indexOf("iPad")>-1;return h?"Android":q?"Iphone":w?"Ipad":"Unknown"}if("platform"===e)return navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)?"MOBILE":"PC"}},setToken:function(e){h.a.set("spoptoken",e,{expires:new Date((new Date).getTime()+216e5)||1})},getToken:function(){var e=h.a.get("spoptoken");return e||!1}};n.a=q},RTpq:function(e,n,t){"use strict";var o=t("Dd8w"),r=t.n(o),a=t("vgQg").a.apiHost,i={login:a+"/oauth/token",logout:a+"/logout",getUserRightInfo:a+"/basic/menu/findMenuTree",getMenus:a+"/basic/menu/findMenuTree",getSysMsg:a+"/getSysMsg",getMessageNum:a+"/mq/msg/findMsgPage"},s=t("KvKp"),c={login:function(e){e.method="post";var n=i.login;s.a.sendReq({queryUrl:n,req:r()({},e)})},logout:function(e){e.method="post";var n=i.logout;s.a.sendReq({queryUrl:n,req:e})},getUserRightInfo:function(e){e.method="post";var n=i.getUserRightInfo;s.a.sendReq({queryUrl:n,req:e})},getMenus:function(e){e.method="post";var n=i.getMenus;s.a.sendReq({queryUrl:n,req:e})},getSysMsg:function(e){e.method="post";var n=i.getSysMsg;s.a.sendReq({queryUrl:n,req:e})},getMessageNum:function(e){e.method="post";var n=i.getMessageNum;s.a.sendReq({queryUrl:n,req:e})}};n.a=c},Wqoj:function(e,n){},gQXa:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Dd8w"),r=t.n(o),a=t("NYxO"),i=(t("RTpq"),{name:"LoginHeader",components:{},data:function(){return{langIconDict:{en:"iwl-icon-zhongwenmoshi",zh:"iwl-icon-yingwenmoshi"}}},computed:r()({},Object(a.b)(["curLang"])),methods:{changeLang:function(){var e=localStorage.getItem("lang");e&&"zh"!==e?localStorage.setItem("lang","zh"):localStorage.setItem("lang","en"),window.location.reload()},toWelcomePage:function(){window.location.href="/spop/manage/"}}}),s={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-container",{staticClass:"manage-wrp is-vertical"},[t("el-header",{attrs:{height:"64px"}},[t("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[t("div",{staticClass:"left-part"},[t("span",{staticClass:"icon icon-wlogo head-item"})]),e._v(" "),t("div",{staticClass:"right-part"},[t("div",{staticClass:"lang-change el-dropdown",attrs:{title:e.$t("manage.header.changeLang")},on:{click:e.changeLang}},[t("span",{class:["iconfont",e.langIconDict[e.curLang]]})]),e._v(" "),t("div",{staticClass:"el-dropdown homeText",on:{click:e.toWelcomePage}},[e._v("首页")])])])],1),e._v(" "),t("el-container",{staticClass:"pageContent"},[t("router-view")],1)],1)},staticRenderFns:[]};var c=t("VU/8")(i,s,!1,function(e){t("Wqoj")},null,null);n.default=c.exports},vgQg:function(e,n,t){"use strict";n.a={apiHost:"/spop-web",isMock:!1,axiosFormDataConfig:{headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:2e4},axiosJsonConfig:{headers:{"Content-Type":"application/json"},timeout:2e4},axiosLoginConfig:{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic YW5kcm9pZDphbmRyb2lk"},timeout:2e4}}}});