webpackJsonp([43],{"1ZPu":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),a=n("NYxO"),l={name:"Aside",props:{userInfo:{type:Object}},data:function(){return{isCollapse:!1}},methods:{handleSelect:function(t){this.$store.commit("setDefaultIndex",t.toString())},changeCollapse:function(){this.isCollapse=!this.isCollapse}},computed:s()({},Object(a.b)(["defaultIndex"])),watch:{defaultIndex:function(t){var e=t.split("@longgap@").length>1?t.split("@longgap@")[1]:void 0;t=t.split("@longgap@")[0];var n=document.querySelectorAll('li[nav-index="'+t+'"]');if(n.length){var i=n[0].getAttribute("cp-name"),s=n[0].innerText;this.$emit("changeCp",{component:i,title:s,navIndex:t})}else if("-1"!==t){var a=t.split("@gap@");this.$emit("changeCp",{component:a[0],title:a[1],navIndex:t,props:e?JSON.parse(e):null})}else this.$emit("changeCp",{component:"HomePage",title:"首页",navIndex:-1})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-aside",{staticClass:"b-aside",attrs:{width:"160px;"}},[n("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":t.defaultIndex,active:t.defaultIndex,collapse:t.isCollapse,"unique-opened":!0},on:{select:t.handleSelect}},[n("div",{staticClass:"collapse-btn",on:{click:t.changeCollapse}},[n("span",{class:[t.isCollapse?"iconfont icon-celanshouqi":"iconfont icon-celanzhankai"]})]),t._v(" "),t._l(t.userInfo?t.userInfo.menu:[],function(e,i){return[e.list&&e.list.length?[n("el-submenu",{key:i,staticClass:"aside-item",attrs:{"cp-name":e.componentName,"nav-index":(i+1).toString(),index:(i+1).toString()}},[n("template",{slot:"title"},[n("i",{class:["iconfont",e.icon]}),t._v(" "),n("span",{staticClass:"aside-detail",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])])]),t._v(" "),t._l(e.list,function(e,s){return[e.title?[n("el-menu-item-group",{key:s,attrs:{"cp-name":e.componentName,"nav-index":i+1+"-"+(s+1),index:i+1+"-"+(s+1)}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])]),t._v(" "),e.child&&e.child.length?[t._l(e.child,function(e,a){return[e.child&&e.child.length?[n("el-submenu",{key:a,attrs:{"cp-name":e.componentName,"nav-index":i+1+"-"+(s+1)+"-"+(a+1),index:i+1+"-"+(s+1)+"-"+(a+1)}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.child,function(e,l){return[n("el-menu-item",{key:l,attrs:{"cp-name":e.componentName,"nav-index":i+1+"-"+(s+1)+"-"+(a+1)+"-"+(l+1),index:i+1+"-"+(s+1)+"-"+(a+1)+"-"+(l+1)}},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])])]})],2)]:[n("el-menu-item",{key:a,attrs:{"cp-name":e.componentName,"nav-index":i+1+"-"+(s+1)+"-"+(a+1),index:i+1+"-"+(s+1)+"-"+(a+1)}},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])])]]})]:t._e()],2)]:[t._l(e.child,function(e,a){return[e.child.length?[n("el-submenu",{key:a,attrs:{"cp-name":e.componentName,"nav-index":i+1+"-"+(s+1)+"-"+(a+1),index:i+1+"-"+(s+1)+"-"+(a+1)}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.child,function(e,l){return[n("el-menu-item",{key:l,attrs:{"cp-name":e.componentName,"nav-index":i+1+"-"+(s+1)+"-"+(a+1)+"-"+(l+1),index:i+1+"-"+(s+1)+"-"+(a+1)+"-"+(l+1)}},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])])]})],2)]:[n("el-menu-item",{key:e.title,attrs:{"cp-name":e.componentName,"nav-index":i+1+"-"+(s+1)+"-"+(a+1),index:i+1+"-"+(s+1)+"-"+(a+1)}},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.title))])])]]})]]})],2)]:[n("el-menu-item",{key:i,staticClass:"aside-item",attrs:{"cp-name":e.componentName,"nav-index":(i+1).toString(),index:(i+1).toString()}},[n("i",{class:["iconfont",e.icon]}),t._v(" "),n("span",{staticClass:"aside-detail",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"aside-title",attrs:{title:e.title}},[t._v(t._s(e.menuCode))])])])]]})],2)],1)},staticRenderFns:[]};var o=n("VU/8")(l,c,!1,function(t){n("AhEG")},"data-v-9afe1d44",null);e.default=o.exports},AhEG:function(t,e){}});