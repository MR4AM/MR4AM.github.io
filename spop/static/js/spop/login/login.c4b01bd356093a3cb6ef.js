webpackJsonp([9],{FhoZ:function(e,o,t){"use strict";(function(o){var s=t("o/zv");e.exports={moduleName:"spop",dev:{assetsSubDirectory:"spop/static",assetsPublicPath:"/",proxyTable:{"/spop-web/":{target:"http://test.newmedia.baina.com",changeOrigin:!0,pathRewrite:{"^/spop-web/":"/spop-web/"}}},host:"127.0.0.1",port:8081,autoOpenBrowser:!1,disableHostCheck:!0,errorOverlay:!0,notifyOnErrors:!0,poll:!1,useEslint:!1,showEslintErrorsInOverlay:!1,devtool:"source-map",cacheBusting:!0,cssSourceMap:!0},build:{manage:s.resolve(o,"../dist/spop/manage/manage.html"),login:s.resolve(o,"../dist/spop/login/login.html"),assetsRoot:s.resolve(o,"../dist"),assetsSubDirectory:"spop/static",assetsPublicPath:"/",productionSourceMap:!1,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(o,"/")},XMeI:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=t("7+uW"),n=t("/ocq"),a=t("FhoZ"),r=t.n(a);s.default.use(n.a);var i=new n.a({mode:"hash",routes:[{path:"/cscp-web/spop/login",redirect:"/"+r.a.moduleName+"/login/"},{path:"/"+r.a.moduleName+"/login/",name:"Login",component:function(){return t.e(3).then(t.bind(null,"TR5l"))},meta:{title:"登录"}},{path:"*",name:"NotFound",component:function(){return t.e(0).then(t.bind(null,"csQh"))},meta:{title:"找不到页面"}}]});o.default=i}},["XMeI"]);