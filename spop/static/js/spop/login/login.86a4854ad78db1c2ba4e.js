webpackJsonp([9],{FhoZ:function(e,t,o){"use strict";(function(t){var s=o("o/zv");e.exports={moduleName:"spop",dev:{assetsSubDirectory:"spop/static",assetsPublicPath:"/",proxyTable:{"/spop-web/":{target:"http://test.newmedia.baina.com",changeOrigin:!0,pathRewrite:{"^/spop-web/":"/spop-web/"}}},host:"127.0.0.1",port:8081,autoOpenBrowser:!1,disableHostCheck:!0,errorOverlay:!0,notifyOnErrors:!0,poll:!1,useEslint:!1,showEslintErrorsInOverlay:!1,devtool:"source-map",cacheBusting:!0,cssSourceMap:!0},build:{manage:s.resolve(t,"../dist/manage.html"),login:s.resolve(t,"../dist/login.html"),assetsRoot:s.resolve(t,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"./",productionSourceMap:!1,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(t,"/")},XMeI:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("7+uW"),n=o("/ocq"),r=o("FhoZ"),a=o.n(r);s.default.use(n.a);var i=new n.a({mode:"history",routes:[{path:"/cscp-web/spop/login",redirect:"/"+a.a.moduleName+"/login/"},{path:"/"+a.a.moduleName+"/login/",name:"Login",component:function(){return o.e(3).then(o.bind(null,"TR5l"))},meta:{title:"登录"}},{path:"*",name:"NotFound",component:function(){return o.e(0).then(o.bind(null,"csQh"))},meta:{title:"找不到页面"}}]});t.default=i}},["XMeI"]);