webpackJsonp([29],{"1+AF":function(e,t,a){"use strict";t.a={name:"Base",props:{isLong:{type:Boolean},params:{type:Object}},mounted:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)},activated:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)}}},JsM0:function(e,t,a){"use strict";var l=a("vgQg").a.apiHost,u={queryOutOrder:l+"/outorder/findOutOrderPage",createOutOrder:l+"/outorder/createOutOrder",updateOutOrder:l+"/outorder/editOutOrder",changeOutOrder:l+"/outorder/changeOutOrderStatus",detailOutOrder:l+"/outorder/getOutOrderDetails"},n=a("KvKp"),i={queryOutOrder:function(e){e.method="post";var t=u.queryOutOrder;n.a.sendReq({queryUrl:t,req:e})},createOutOrder:function(e){e.method="post";var t=u.createOutOrder;n.a.sendReq({queryUrl:t,req:e})},updateOutOrder:function(e){e.method="post";var t=u.updateOutOrder;n.a.sendReq({queryUrl:t,req:e})},changeOutOrder:function(e){e.method="post";var t=u.changeOutOrder;n.a.sendReq({queryUrl:t,req:e})},detailOutOrder:function(e){e.method="post";var t=u.detailOutOrder;n.a.sendReq({queryUrl:t,req:e})}};t.a=i},Ugjb:function(e,t,a){e.exports=a.p+"spop/static/img/u3546.d8ba4de.jpg"},bnya:function(e,t){},jsdL:function(e,t,a){"use strict";var l={PageSizeOptions:[10,20,50,100],NormalHeight:265,WindowHeight:document.documentElement.clientHeight,StaffTypes:[{key:"MANAGER",value:"管理员"},{key:"COMMON",value:"普通员工"}],StatusList:[{key:"ON",value:"启用"},{key:"OFF",value:"禁用"}],GoodsTypeList:[{key:"PH",value:"普货"},{key:"MG",value:"敏感"}],OwnershipTypeList:[{key:"GY",value:"国有"},{key:"SZ",value:"三资"},{key:"MY",value:"民营"}],SalesChannelList:[{key:"DL",value:"代理"},{key:"ZJ",value:"直接"},{key:"YCX",value:"一次性客户"}],StrategicNatureList:[{key:"FZLGJ",value:"非战略改进"},{key:"FZLWX",value:"非战略维系"},{key:"ZLMB",value:"战略目标"},{key:"ZLWX",value:"战略维系"}],TradeIdentityList:[{key:"KH",value:"客户"},{key:"GYS",value:"供应商"}],AuthStatusList:[{key:"WRZ",value:"未认证"},{key:"SHZ",value:"待审核"},{key:"RZTG",value:"认证通过"},{key:"RZBTG",value:"认证不通过"}],ReletedFunctionList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITYFM",value:"身份证反面"},{key:"IDENTITYZM",value:"身份证正面"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"NVOCC"}],PrivateList:[{key:"Y",value:"私有"},{key:"N",value:"公有"}],EffectiveList:[{key:"Y",value:"是"},{key:"N",value:"否"}],ChargeTypeList:[{key:"YJFM",value:"月结费目"},{key:"YSDFM",value:"运输单费目"},{key:"ZCDFM",value:"装车单费目"}],PaymentTypeList:[{key:"YJ",value:"月结"},{key:"XJ",value:"现结"},{key:"ZZ",value:"转账"},{key:"YFK",value:"预付款"}],ChargePlanTypeList:[{key:"zcdjf",value:"装车单计费"},{key:"ckddjf",value:"出库订单计费"}],RpTypeList:[{key:"ar",value:"应收"},{key:"ap",value:"应付"},{key:"dd",value:"代收代付"},{key:"ds",value:"代收"},{key:"df",value:"代付"},{key:"sf",value:"收和付"}],AuthTemplateList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITY",value:"身份证"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"nvocc"}],IsSigns:[{key:"Y",value:"已签约"},{key:"N",value:"未签约"}]};t.a=l},uoFw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("JsM0");var l=a("1+AF"),u=(a("jsdL"),{name:"FileRelease",extends:l.a,components:{},data:function(){return{input:"",uploadFileStatus:!1,uploadDetailStatus:!0,tableData:[{date:"2016-05-03",name:"临时司机",address:"70"},{date:"2016-05-02",name:"访客",address:"70"}],multipleSelection:[],fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],checked:1}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)},handleSelectionChange:function(e){this.multipleSelection=e},changeuploadFileStatus:function(){this.uploadFileStatus=!this.uploadFileStatus,console.log(66)},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")}}}),n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"FileRelease"},[l("div",{staticClass:"top"},[l("div",{staticClass:"same"},[l("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.changeuploadFileStatus}},[e._v("上传文件")])],1),e._v(" "),l("div",{staticClass:"same",staticStyle:{width:"200px"}},[l("el-input",{attrs:{placeholder:"请输入关键字","prefix-icon":"el-icon-search"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)]),e._v(" "),l("div",{staticClass:"content"},[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),l("el-table-column",{attrs:{label:"视频",width:"500"}},[[l("div",{staticClass:"player"},[l("div",{staticClass:"video"},[l("img",{attrs:{src:a("Ugjb"),alt:""}})]),e._v(" "),l("div",{staticClass:"title"},[l("p",[e._v("如何正确穿戴安全帽?")]),e._v(" "),l("p",[e._v("2019-07-10 22:31")])])])]],2),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"文件类型",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"热度"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(u,n,!1,function(e){a("bnya")},null,null);t.default=i.exports}});