webpackJsonp([15],{"0uDn":function(e,t){},"1+AF":function(e,t,r){"use strict";t.a={name:"Base",props:{isLong:{type:Boolean},params:{type:Object}},mounted:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)},activated:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)}}},Dr16:function(e,t){},"Eu+0":function(e,t){},"H/1R":function(e,t){},JsM0:function(e,t,r){"use strict";var a=r("vgQg").a.apiHost,l={queryOutOrder:a+"/outorder/findOutOrderPage",createOutOrder:a+"/outorder/createOutOrder",updateOutOrder:a+"/outorder/editOutOrder",changeOutOrder:a+"/outorder/changeOutOrderStatus",detailOutOrder:a+"/operational/outorder/getWebOutOrderDetails"},s=r("KvKp"),o={queryOutOrder:function(e){e.method="post";var t=l.queryOutOrder;s.a.sendReq({queryUrl:t,req:e})},createOutOrder:function(e){e.method="post";var t=l.createOutOrder;s.a.sendReq({queryUrl:t,req:e})},updateOutOrder:function(e){e.method="post";var t=l.updateOutOrder;s.a.sendReq({queryUrl:t,req:e})},changeOutOrder:function(e){e.method="post";var t=l.changeOutOrder;s.a.sendReq({queryUrl:t,req:e})},detailOutOrder:function(e){e.method="post";var t=l.detailOutOrder;s.a.sendReq({queryUrl:t,req:e,outOrderId:1})}};t.a=o},QqCc:function(e,t){},ebhN:function(e,t){},jsdL:function(e,t,r){"use strict";var a={PageSizeOptions:[10,20,50,100],NormalHeight:265,WindowHeight:document.documentElement.clientHeight,StaffTypes:[{key:"MANAGER",value:"管理员"},{key:"COMMON",value:"普通员工"}],StatusList:[{key:"ON",value:"启用"},{key:"OFF",value:"禁用"}],GoodsTypeList:[{key:"PH",value:"普货"},{key:"MG",value:"敏感"}],OwnershipTypeList:[{key:"GY",value:"国有"},{key:"SZ",value:"三资"},{key:"MY",value:"民营"}],SalesChannelList:[{key:"DL",value:"代理"},{key:"ZJ",value:"直接"},{key:"YCX",value:"一次性客户"}],StrategicNatureList:[{key:"FZLGJ",value:"非战略改进"},{key:"FZLWX",value:"非战略维系"},{key:"ZLMB",value:"战略目标"},{key:"ZLWX",value:"战略维系"}],TradeIdentityList:[{key:"KH",value:"客户"},{key:"GYS",value:"供应商"}],AuthStatusList:[{key:"WRZ",value:"未认证"},{key:"SHZ",value:"待审核"},{key:"RZTG",value:"认证通过"},{key:"RZBTG",value:"认证不通过"}],ReletedFunctionList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITYFM",value:"身份证反面"},{key:"IDENTITYZM",value:"身份证正面"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"NVOCC"}],PrivateList:[{key:"Y",value:"私有"},{key:"N",value:"公有"}],EffectiveList:[{key:"Y",value:"是"},{key:"N",value:"否"}],ChargeTypeList:[{key:"YJFM",value:"月结费目"},{key:"YSDFM",value:"运输单费目"},{key:"ZCDFM",value:"装车单费目"}],PaymentTypeList:[{key:"YJ",value:"月结"},{key:"XJ",value:"现结"},{key:"ZZ",value:"转账"},{key:"YFK",value:"预付款"}],ChargePlanTypeList:[{key:"zcdjf",value:"装车单计费"},{key:"ckddjf",value:"出库订单计费"}],RpTypeList:[{key:"ar",value:"应收"},{key:"ap",value:"应付"},{key:"dd",value:"代收代付"},{key:"ds",value:"代收"},{key:"df",value:"代付"},{key:"sf",value:"收和付"}],AuthTemplateList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITY",value:"身份证"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"nvocc"}],IsSigns:[{key:"Y",value:"已签约"},{key:"N",value:"未签约"}]};t.a=a},qdT0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),l=r.n(a),s=r("JsM0"),o=r("1+AF"),n={name:"OutOrderSearch",extends:o.a,data:function(){return{searchForm:{}}},methods:{handleFilter:function(){this.$emit("on-search",this.searchForm)}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"searchDiv"},[r("div",{staticClass:"filter-container",staticStyle:{width:"100%"}},[r("el-form",{ref:"searchForm",staticStyle:{width:"90%"},attrs:{"label-position":"right",model:e.searchForm}},[r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"SAP订单号:",prop:"sapOrderNo"}},[r("el-input",{attrs:{placeholder:"请输入SAP订单号",readonly:!0},model:{value:e.searchForm.sapOrderNo,callback:function(t){e.$set(e.searchForm,"sapOrderNo",t)},expression:"searchForm.sapOrderNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"客户订单号:",prop:"customerOrderNo"}},[r("el-input",{attrs:{placeholder:"请输入客户订单号",readonly:!0},model:{value:e.searchForm.customerOrderNo,callback:function(t){e.$set(e.searchForm,"customerOrderNo",t)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"承运商:"}},[r("el-input",{attrs:{placeholder:"承运商",readonly:!0},model:{value:e.searchForm.customerOrderNo,callback:function(t){e.$set(e.searchForm,"customerOrderNo",t)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"fixedSeachBtn",staticStyle:{padding:"12px 20px 0 20px"}},[r("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v("承运商分配")])],1)])],1),e._v(" "),r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"要求配送时间:",prop:"sapOrderNo"}},[r("el-input",{attrs:{placeholder:"请输入SAP订单号",readonly:!0},model:{value:e.searchForm.sapOrderNo,callback:function(t){e.$set(e.searchForm,"sapOrderNo",t)},expression:"searchForm.sapOrderNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"园区名称:",prop:"customerOrderNo"}},[r("el-input",{attrs:{placeholder:"请输入客户订单号",readonly:!0},model:{value:e.searchForm.customerOrderNo,callback:function(t){e.$set(e.searchForm,"customerOrderNo",t)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"客户:"}},[r("el-input",{attrs:{placeholder:"请输入客户订单号",readonly:!0},model:{value:e.searchForm.customerOrderNo,callback:function(t){e.$set(e.searchForm,"customerOrderNo",t)},expression:"searchForm.customerOrderNo"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单状态:",prop:"sapOrderNo"}},[r("el-input",{attrs:{placeholder:"请输入SAP订单号",readonly:!0},model:{value:e.searchForm.sapOrderNo,callback:function(t){e.$set(e.searchForm,"sapOrderNo",t)},expression:"searchForm.sapOrderNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"订单导入时间:",prop:"customerOrderNo"}},[r("el-input",{attrs:{placeholder:"请输入客户订单号",readonly:!0},model:{value:e.searchForm.customerOrderNo,callback:function(t){e.$set(e.searchForm,"customerOrderNo",t)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"项目名称:"}},[r("el-input",{attrs:{placeholder:"请输入客户订单号",readonly:!0},model:{value:e.searchForm.customerOrderNo,callback:function(t){e.$set(e.searchForm,"customerOrderNo",t)},expression:"searchForm.customerOrderNo"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"预约时间:",prop:"customerName"}},[r("el-input",{attrs:{placeholder:"请输入客户名称",readonly:!0},model:{value:e.searchForm.customerName,callback:function(t){e.$set(e.searchForm,"customerName",t)},expression:"searchForm.customerName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"分配时间:",prop:"customerName"}},[r("el-input",{attrs:{placeholder:"请输入客户名称",readonly:!0},model:{value:e.searchForm.customerName,callback:function(t){e.$set(e.searchForm,"customerName",t)},expression:"searchForm.customerName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"送达方:",prop:"deliveryCompany"}},[r("el-input",{attrs:{placeholder:"请输入送达方",readonly:!0},model:{value:e.searchForm.deliveryCompany,callback:function(t){e.$set(e.searchForm,"deliveryCompany",t)},expression:" searchForm.deliveryCompany"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}})],1)],1)],1)])},staticRenderFns:[]};var i=r("VU/8")(n,u,!1,function(e){r("QqCc"),r("ebhN")},"data-v-598bbeb8",null).exports,c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"InOrderDetailAddress"},[r("header",{staticClass:"header"},[e._v("车辆司机信息")]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"plate_numbers",label:"车牌号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"size",label:"车辆尺柜"}}),e._v(" "),r("el-table-column",{attrs:{prop:"driver_number",label:"司机编号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"driver_name",label:"司机名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"driver_tel",label:"司机电话"}}),e._v(" "),r("el-table-column",{attrs:{prop:"driver_status",label:"司机状态"}})],1)],1)},staticRenderFns:[]};var d=r("VU/8")({data:function(){return{tableData:[{plate_numbers:"粤A8888888",size:"20",driver_number:"E10001",driver_name:"黄聪",driver_tel:"1339999999999",driver_status:"考核通过"}]}}},c,!1,function(e){r("H/1R")},null,null).exports,m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"InOrderDetailDriver"},[r("header",{staticClass:"header"},[e._v("货物信息")]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"OrderID",label:"订单号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"item_number",label:"行项目号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goods_name",label:"货物名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goods_square",label:"货物方量"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goods_weight",label:"货物重量"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goods_packages",label:"货物件数"}}),e._v(" "),r("el-table-column",{attrs:{prop:"goods_unit",label:"货物单位"}})],1)],1)},staticRenderFns:[]};var p=r("VU/8")({data:function(){return{tableData:[{OrderID:"100001",item_number:"100120",goods_name:"洗发水",goods_square:"100",goods_weight:"100kg",goods_packages:"100",goods_unit:"瓶"},{OrderID:"100001",item_number:"100120",goods_name:"洗发水",goods_square:"100",goods_weight:"100kg",goods_packages:"100",goods_unit:"瓶"}]}}},m,!1,function(e){r("Eu+0")},"data-v-610c7515",null).exports,v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"OutOrderDetailAddres"},[t("header",{staticClass:"header"},[this._v("送货地址信息")]),this._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,border:""}},[t("el-table-column",{attrs:{prop:"plate_numbers",label:"省"}}),this._v(" "),t("el-table-column",{attrs:{prop:"size",label:"市"}}),this._v(" "),t("el-table-column",{attrs:{prop:"driver_number",label:"区"}}),this._v(" "),t("el-table-column",{attrs:{prop:"driver_name",label:"送货地址"}}),this._v(" "),t("el-table-column",{attrs:{prop:"driver_tel",label:"卸货地址"}})],1)],1)},staticRenderFns:[]};var h=r("VU/8")({data:function(){return{tableData:[{plate_numbers:"广东",size:"广州",driver_number:"天河",driver_name:"广东省广州市天河区xxxxx号",driver_tel:"广东省广州市天河区xxxxx号"}]}}},v,!1,function(e){r("Dr16")},"data-v-7310990a",null).exports,O=(r("jsdL"),{name:"OutOrderListDetail",extends:o.a,components:{OutOrderDetailInfo:i,OutOrderDetailAddress:h,OutOrderDetailDriver:d,OutOrderDetailGoods:p},data:function(){return{}},created:function(){this.getList()},computed:{},methods:{getList:function(){var e=this;e.listLoading=!0;var t=e.listQuery;t=l()({},t,e.searchParams),s.a.detailOutOrder({data:t,success:function(t){console.log(t),e.list=t.data.data,e.pageInfo=t.data.pageInfo,setTimeout(function(){e.listLoading=!1},500)},fail:function(t){e.listLoading=!1,e.$notify.error({title:"提示",message:t.data.message})}})}}}),y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-container"},[t("OutOrderDetailInfo"),this._v(" "),t("OutOrderDetailAddress"),this._v(" "),t("OutOrderDetailDriver"),this._v(" "),t("OutOrderDetailGoods")],1)},staticRenderFns:[]};var b=r("VU/8")(O,y,!1,function(e){r("0uDn")},"data-v-5aee91b2",null);t.default=b.exports}});