webpackJsonp([19],{Zlqd:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});t("7+uW");var s={data:function(){return{imgArr:[],imageUrl:"",value3:null}},beforeMount:function(){},mounted:function(){for(var e=0;e<4;e++)this.imgArr.push("https://img.shuixindk.cn/loan-index-new/banner1.png")},methods:{handleAvatarSuccess:function(e,a){this.imageUrl=URL.createObjectURL(a.raw)},beforeAvatarUpload:function(e){var a="image/jpeg"===e.type||"image/png",t=e.size/1024/1024<2;return a||this.$message.error("上传头像图片只能是 JPG 格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),a&&t}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"element"},[t("h1",[e._v("轮播图")]),e._v(" "),t("div",{staticClass:"block"},[t("el-carousel",{attrs:{height:"150px"}},e._l(e.imgArr,function(e,a){return t("el-carousel-item",{key:a},[t("img",{staticClass:"banner",attrs:{src:e}})])}),1)],1),e._v(" "),t("div",{staticClass:"unload"},[t("h1",[e._v("文件上传")]),e._v(" "),t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),t("div",{staticClass:"rate"},[t("el-rate",{attrs:{"show-text":""},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)])},staticRenderFns:[]};var i=t("VU/8")(s,r,!1,function(e){t("o+DB")},"data-v-40d69c12",null);a.default=i.exports},"o+DB":function(e,a){}});
//# sourceMappingURL=19.2bc82bcb765e97b47b5d.js.map