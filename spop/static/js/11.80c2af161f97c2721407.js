webpackJsonp([11],{"1+AF":function(e,r,t){"use strict";r.a={name:"Base",props:{isLong:{type:Boolean},params:{type:Object}},mounted:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)},activated:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)}}},"9IsJ":function(e,r){},CmwZ:function(e,r){},H6Mi:function(e,r,t){"use strict";var a=t("vgQg").a.apiHost,l={queryInOrder:a+"/inorder/findInOrderPage",createInOrder:a+"/inorder/createInOrder",updateInOrder:a+"/inorder/editInOrder",changeInOrder:a+"/inorder/changeInOrderStatus",detailInOrder:a+"/inorder/getInOrderDetails"},s=t("KvKp"),o={queryInOrder:function(e){e.method="post";var r=l.queryInOrder;s.a.sendReq({queryUrl:r,req:e})},createInOrder:function(e){e.method="post";var r=l.createInOrder;s.a.sendReq({queryUrl:r,req:e})},updateInOrder:function(e){e.method="post";var r=l.updateInOrder;s.a.sendReq({queryUrl:r,req:e})},changeInOrder:function(e){e.method="post";var r=l.changeInOrder;s.a.sendReq({queryUrl:r,req:e})},detailInOrder:function(e){e.method="post";var r=l.detailInOrder;s.a.sendReq({queryUrl:r,req:e})}};r.a=o},NFNR:function(e,r){},OZ6d:function(e,r){},Shzw:function(e,r){},hL7W:function(e,r){},jsdL:function(e,r,t){"use strict";var a={PageSizeOptions:[10,20,50,100],NormalHeight:265,WindowHeight:document.documentElement.clientHeight,StaffTypes:[{key:"MANAGER",value:"管理员"},{key:"COMMON",value:"普通员工"}],StatusList:[{key:"ON",value:"启用"},{key:"OFF",value:"禁用"}],GoodsTypeList:[{key:"PH",value:"普货"},{key:"MG",value:"敏感"}],OwnershipTypeList:[{key:"GY",value:"国有"},{key:"SZ",value:"三资"},{key:"MY",value:"民营"}],SalesChannelList:[{key:"DL",value:"代理"},{key:"ZJ",value:"直接"},{key:"YCX",value:"一次性客户"}],StrategicNatureList:[{key:"FZLGJ",value:"非战略改进"},{key:"FZLWX",value:"非战略维系"},{key:"ZLMB",value:"战略目标"},{key:"ZLWX",value:"战略维系"}],TradeIdentityList:[{key:"KH",value:"客户"},{key:"GYS",value:"供应商"}],AuthStatusList:[{key:"WRZ",value:"未认证"},{key:"SHZ",value:"待审核"},{key:"RZTG",value:"认证通过"},{key:"RZBTG",value:"认证不通过"}],ReletedFunctionList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITYFM",value:"身份证反面"},{key:"IDENTITYZM",value:"身份证正面"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"NVOCC"}],PrivateList:[{key:"Y",value:"私有"},{key:"N",value:"公有"}],EffectiveList:[{key:"Y",value:"是"},{key:"N",value:"否"}],ChargeTypeList:[{key:"YJFM",value:"月结费目"},{key:"YSDFM",value:"运输单费目"},{key:"ZCDFM",value:"装车单费目"}],PaymentTypeList:[{key:"YJ",value:"月结"},{key:"XJ",value:"现结"},{key:"ZZ",value:"转账"},{key:"YFK",value:"预付款"}],ChargePlanTypeList:[{key:"zcdjf",value:"装车单计费"},{key:"ckddjf",value:"出库订单计费"}],RpTypeList:[{key:"ar",value:"应收"},{key:"ap",value:"应付"},{key:"dd",value:"代收代付"},{key:"ds",value:"代收"},{key:"df",value:"代付"},{key:"sf",value:"收和付"}],AuthTemplateList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITY",value:"身份证"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"nvocc"}],IsSigns:[{key:"Y",value:"已签约"},{key:"N",value:"未签约"}]};r.a=a},qdT0:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});t("H6Mi");var a=t("1+AF"),l={name:"OutOrderSearch",extends:a.a,data:function(){return{searchForm:{}}},methods:{handleFilter:function(){this.$emit("on-search",this.searchForm)}}},s={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"searchDiv"},[t("div",{staticClass:"filter-container",staticStyle:{width:"100%"}},[t("el-form",{ref:"searchForm",staticStyle:{width:"90%"},attrs:{"label-position":"right",model:e.searchForm}},[t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"SAP订单号:",prop:"sapOrderNo"}},[t("el-input",{attrs:{placeholder:"请输入SAP订单号"},model:{value:e.searchForm.sapOrderNo,callback:function(r){e.$set(e.searchForm,"sapOrderNo",r)},expression:"searchForm.sapOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"客户订单号:",prop:"customerOrderNo"}},[t("el-input",{attrs:{placeholder:"请输入客户订单号"},model:{value:e.searchForm.customerOrderNo,callback:function(r){e.$set(e.searchForm,"customerOrderNo",r)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"订单状态:"}},[t("el-input",{attrs:{placeholder:"请输入客户订单号"},model:{value:e.searchForm.customerOrderNo,callback:function(r){e.$set(e.searchForm,"customerOrderNo",r)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"客户:",prop:"customerName"}},[t("el-input",{attrs:{placeholder:"请输入客户名称"},model:{value:e.searchForm.customerName,callback:function(r){e.$set(e.searchForm,"customerName",r)},expression:"searchForm.customerName"}})],1)],1)],1),e._v(" "),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"要求配送时间:",prop:"sapOrderNo"}},[t("el-input",{attrs:{placeholder:"请输入SAP订单号"},model:{value:e.searchForm.sapOrderNo,callback:function(r){e.$set(e.searchForm,"sapOrderNo",r)},expression:"searchForm.sapOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"园区名称:",prop:"customerOrderNo"}},[t("el-input",{attrs:{placeholder:"请输入客户订单号"},model:{value:e.searchForm.customerOrderNo,callback:function(r){e.$set(e.searchForm,"customerOrderNo",r)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"所属项目:"}},[t("el-input",{attrs:{placeholder:"请输入客户订单号"},model:{value:e.searchForm.customerOrderNo,callback:function(r){e.$set(e.searchForm,"customerOrderNo",r)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"承运商",prop:"supplierName"}},[t("el-select",{attrs:{placeholder:"请输入承运商",clearable:""},model:{value:e.searchForm.supplierName,callback:function(r){e.$set(e.searchForm,"supplierName",r)},expression:"searchForm.supplierName"}},[t("el-option",{attrs:{label:"承运商A",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"承运商B",value:"2"}}),e._v(" "),t("el-option",{attrs:{label:"承运商C",value:"3"}})],1)],1)],1)],1),e._v(" "),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"预约时间:",prop:"sapOrderNo"}},[t("el-input",{attrs:{placeholder:"请输入SAP订单号"},model:{value:e.searchForm.sapOrderNo,callback:function(r){e.$set(e.searchForm,"sapOrderNo",r)},expression:"searchForm.sapOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"分配时间:",prop:"customerOrderNo"}},[t("el-input",{attrs:{placeholder:"请输入客户订单号"},model:{value:e.searchForm.customerOrderNo,callback:function(r){e.$set(e.searchForm,"customerOrderNo",r)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"分配垛口:"}},[t("el-input",{attrs:{placeholder:"请输入客户订单号"},model:{value:e.searchForm.customerOrderNo,callback:function(r){e.$set(e.searchForm,"customerOrderNo",r)},expression:"searchForm.customerOrderNo"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"分配库区:",prop:"customerName"}},[t("el-input",{attrs:{placeholder:"请输入客户名称"},model:{value:e.searchForm.customerName,callback:function(r){e.$set(e.searchForm,"customerName",r)},expression:"searchForm.customerName"}})],1)],1)],1),e._v(" "),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"送达方:",prop:"deliveryCompany"}},[t("el-input",{attrs:{placeholder:"请输入送达方"},model:{value:e.searchForm.deliveryCompany,callback:function(r){e.$set(e.searchForm,"deliveryCompany",r)},expression:" searchForm.deliveryCompany"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"fixedSeachBtn"},[t("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v("承运商分配")])],1)])],1)],1)],1)])},staticRenderFns:[]};var o=t("VU/8")(l,s,!1,function(e){t("OZ6d"),t("NFNR")},"data-v-41a07e80",null).exports,n={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"InOrderDetailAddress"},[t("header",{staticClass:"header"},[e._v("车辆司机信息")]),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"plate_numbers",label:"车牌号",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"size",label:"车辆尺柜",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"driver_number",label:"司机编号",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"driver_name",label:"司机名称",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"driver_tel",label:"司机电话",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"driver_status",label:"司机状态",width:"180"}})],1)],1)},staticRenderFns:[]};var i=t("VU/8")({data:function(){return{tableData:[{plate_numbers:"粤A8888888",size:"20",driver_number:"E10001",driver_name:"黄聪",driver_tel:"1339999999999",driver_status:"考核通过"}]}}},n,!1,function(e){t("Shzw")},null,null).exports,c={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"InOrderDetailDriver"},[t("header",{staticClass:"header"},[e._v("货物信息")]),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"OrderID",label:"订单号",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"item_number",label:"行项目号",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"goods_name",label:"货物名称",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"goods_square",label:"货物方量",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"goods_weight",label:"货物重量",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"goods_packages",label:"货物件数",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"goods_unit",label:"货物单位",width:"180"}})],1)],1)},staticRenderFns:[]};var u=t("VU/8")({data:function(){return{tableData:[{OrderID:"100001",item_number:"100120",goods_name:"洗发水",goods_square:"100",goods_weight:"100kg",goods_packages:"100",goods_unit:"瓶"},{OrderID:"100001",item_number:"100120",goods_name:"洗发水",goods_square:"100",goods_weight:"100kg",goods_packages:"100",goods_unit:"瓶"}]}}},c,!1,function(e){t("CmwZ")},"data-v-3dc176a9",null).exports,d={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"OutOrderDetailAddres"},[r("header",{staticClass:"header"},[this._v("送货地址信息")]),this._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,border:""}},[r("el-table-column",{attrs:{prop:"plate_numbers",label:"省",width:"180"}}),this._v(" "),r("el-table-column",{attrs:{prop:"size",label:"市",width:"180"}}),this._v(" "),r("el-table-column",{attrs:{prop:"driver_number",label:"区",width:"180"}}),this._v(" "),r("el-table-column",{attrs:{prop:"driver_name",label:"送货地址",width:"180"}}),this._v(" "),r("el-table-column",{attrs:{prop:"driver_tel",label:"卸货地址",width:"180"}})],1)],1)},staticRenderFns:[]};var m=t("VU/8")({data:function(){return{tableData:[{plate_numbers:"广东",size:"广州",driver_number:"天河",driver_name:"广东省广州市天河区xxxxx号",driver_tel:"广东省广州市天河区xxxxx号"}]}}},d,!1,function(e){t("9IsJ")},"data-v-2f1c3486",null).exports,p=(t("jsdL"),{name:"OutOrderListDetail",extends:a.a,components:{OutOrderDetailInfo:o,OutOrderDetailAddress:m,OutOrderDetailDriver:i,OutOrderDetailGoods:u},data:function(){return{}},created:function(){},computed:{},methods:{}}),v={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"app-container"},[r("OutOrderDetailInfo"),this._v(" "),r("OutOrderDetailAddress"),this._v(" "),r("OutOrderDetailDriver"),this._v(" "),r("OutOrderDetailGoods")],1)},staticRenderFns:[]};var h=t("VU/8")(p,v,!1,function(e){t("hL7W")},"data-v-72583ba9",null);r.default=h.exports}});