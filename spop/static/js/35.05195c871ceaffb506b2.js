webpackJsonp([35],{"0jP3":function(e,t){},"1+AF":function(e,t,a){"use strict";t.a={name:"Base",props:{isLong:{type:Boolean},params:{type:Object}},mounted:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)},activated:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)}}},"3NWE":function(e,t){},jDiq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),l=a.n(i),n=a("vgQg").a.apiHost,o={queryExam:n+"/exam/findExamPage",createExam:n+"/exam/createExam",updateExam:n+"/exam/editExam",changeExam:n+"/exam/changeExamStatus",detailExam:n+"/exam/getExamDetails"},s=a("KvKp"),r={queryExam:function(e){e.method="post";var t=o.queryExam;s.a.sendReq({queryUrl:t,req:e})},createExam:function(e){e.method="post";var t=o.createExam;s.a.sendReq({queryUrl:t,req:e})},updateExam:function(e){e.method="post";var t=o.updateExam;s.a.sendReq({queryUrl:t,req:e})},changeExam:function(e){e.method="post";var t=o.changeExam;s.a.sendReq({queryUrl:t,req:e})},detailExam:function(e){e.method="post";var t=o.detailExam;s.a.sendReq({queryUrl:t,req:e})}},u=a("1+AF"),c={name:"ExamSearch",extends:u.a,data:function(){return{input:"",searchForm:{}}},methods:{handleFilter:function(){this.$emit("on-search",this.searchForm)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchDiv"},[a("div",{staticClass:"filter-container",staticStyle:{width:"100%"}},[a("el-form",{ref:"searchForm",attrs:{"label-position":"right",model:e.searchForm}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入名称","suffix-icon":"el-icon-search"},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1)],1)],1)],1)],1)])},staticRenderFns:[]};var m=a("VU/8")(c,d,!1,function(e){a("0jP3")},"data-v-d3f71b62",null).exports,v={name:"ExamModal",extends:u.a,props:{ExamModal:{}},data:function(){return{dataForm:{},rules:{}}},computed:{dialogFormVisible:function(){return this.ExamModal.visible}},methods:{beforeOpen:function(){this.dataForm=this.ExamModal.current,this.$refs.dataForm&&this.$refs.dataForm.clearValidate()},ok:function(){var e=this;e.$refs.dataForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$emit("ExamModal-ok",e.dataForm)})},handleClose:function(e){this.$emit("ExamModal-cancel",{})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-dialog",{attrs:{title:e.ExamModal.title,visible:e.dialogFormVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t},open:e.beforeOpen}},[a("div",{staticClass:"projDetail"},[a("div",{staticClass:"tableForm"},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.dataForm,"label-position":"right","label-width":"15%"}})],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["detail"!=e.ExamModal.type?a("el-button",{on:{click:e.handleClose}},[e._v("取消")]):e._e(),e._v(" "),"detail"!=e.ExamModal.type?a("el-button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("确定")]):e._e(),e._v(" "),"detail"==e.ExamModal.type?a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("关闭")]):e._e()],1)])],1)},staticRenderFns:[]};var p=a("VU/8")(v,h,!1,function(e){a("3NWE")},"data-v-19167eda",null).exports,f=a("jsdL"),y={name:"ExamList",extends:u.a,components:{ExamSearch:m,ExamModal:p},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{currentPage:1,pageSize:10},pageInfo:{},RowSelection:[],searchParams:{},ExamModal:{visible:!1,title:"",type:"",current:{}},pageSizeOptions:f.a.PageSizeOptions,tableHeight:f.a.WindowHeight-300}},created:function(){this.getList()},computed:{deleteStatus:function(){return!(this.RowSelection.length>0)}},methods:{getList:function(){var e=this;e.listLoading=!0;var t=e.listQuery;t=l()({},t,e.searchParams),r.queryExam({data:t,success:function(t){e.list=t.data.data,e.pageInfo=t.data.pageInfo,setTimeout(function(){e.listLoading=!1},500)},fail:function(t){e.listLoading=!1,e.$notify.error({title:"提示",message:t.data.message})}})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.currentPage=e,this.getList()},handleCreate:function(){this.ExamModal.visible=!0,this.ExamModal.title="新增试卷",this.ExamModal.type="create",this.ExamModal.current={}},handleUpdate:function(e){this.ExamModal.visible=!0,this.ExamModal.title="编辑试卷",this.ExamModal.type="update",this.ExamModal.current=e},onView:function(e){this.ExamModal.current=e,this.ExamModal.title="查看详情",this.ExamModal.type="detail",this.ExamModal.visible=!0},handleDelete:function(){var e=this,t=[];for(var a in e.RowSelection)t.push(e.RowSelection[a].userId);e.$confirm("自定义删除信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){r.changeExam({data:{ExamIds:t,status:"delete"},success:function(t){e.$message({type:"success",message:t.data.message}),e.getList()},fail:function(t){e.$notify.error({title:"提示",message:t.data.message})}})})},handleSelectionChange:function(e){this.RowSelection=e},modalCancel:function(){this.ExamModal.visible=!1,this.ExamModal.current={},this.ExamModal.title="",this.ExamModal.type=""},modalOk:function(e){var t=this;"create"==t.ExamModal.type?r.createExam({data:e,success:function(e){t.$message({type:"success",message:"操作成功!"}),t.getList(),t.ExamModal.visible=!1},fail:function(e){t.$notify.error({title:"提示",message:e.data.message})}}):r.updateExam({data:e,success:function(e){t.$message({type:"success",message:"操作成功!"}),t.getList(),t.ExamModal.visible=!1},fail:function(e){t.$notify.error({title:"提示",message:e.data.message})}})},searchSubmit:function(e){this.searchParams=e,this.listQuery.currentPage=1,this.listLoading=!0,this.getList()}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("Exam-search",{on:{"on-search":e.searchSubmit}}),e._v(" "),a("div",{staticClass:"projBtns"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.handleCreate}},[e._v("创建试卷 ")])],1),e._v(" "),a("div",{staticClass:"tableDiv"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,attrs:{stripe:"",data:e.list,fit:"","highlight-current-row":"",height:e.tableHeight},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"名称",align:"center",prop:"title","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"试卷分类",align:"center",prop:"examineeType","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"答题时长",align:"center",prop:"time","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"总分",align:"center",prop:"qualified","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"创建人",align:"center",prop:"creatorName","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200"}},[a("el-button",{attrs:{type:"text",size:"mini"}},[e._v("禁用")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.onView(e.scope.row)}}},[e._v("成绩查询")])],1)],1),e._v(" "),a("div",[a("el-pagination",{attrs:{align:"center","current-page":e.pageInfo.currentPage,"page-sizes":e.pageSizeOptions,layout:"prev, pager, next,total,jumper",total:e.pageInfo.totalRows},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.pageInfo,"currentPage",t)},"update:current-page":function(t){return e.$set(e.pageInfo,"currentPage",t)}}})],1)],1),e._v(" "),a("Exam-modal",{attrs:{ExamModal:e.ExamModal},on:{"ExamModal-cancel":e.modalCancel,"ExamModal-ok":e.modalOk}})],1)},staticRenderFns:[]};var x=a("VU/8")(y,g,!1,function(e){a("uQcP")},"data-v-1fc0101a",null);t.default=x.exports},jsdL:function(e,t,a){"use strict";var i={PageSizeOptions:[10,20,50,100],NormalHeight:265,WindowHeight:document.documentElement.clientHeight,StaffTypes:[{key:"MANAGER",value:"管理员"},{key:"COMMON",value:"普通员工"}],StatusList:[{key:"ON",value:"启用"},{key:"OFF",value:"禁用"}],GoodsTypeList:[{key:"PH",value:"普货"},{key:"MG",value:"敏感"}],OwnershipTypeList:[{key:"GY",value:"国有"},{key:"SZ",value:"三资"},{key:"MY",value:"民营"}],SalesChannelList:[{key:"DL",value:"代理"},{key:"ZJ",value:"直接"},{key:"YCX",value:"一次性客户"}],StrategicNatureList:[{key:"FZLGJ",value:"非战略改进"},{key:"FZLWX",value:"非战略维系"},{key:"ZLMB",value:"战略目标"},{key:"ZLWX",value:"战略维系"}],TradeIdentityList:[{key:"KH",value:"客户"},{key:"GYS",value:"供应商"}],AuthStatusList:[{key:"WRZ",value:"未认证"},{key:"SHZ",value:"待审核"},{key:"RZTG",value:"认证通过"},{key:"RZBTG",value:"认证不通过"}],ReletedFunctionList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITYFM",value:"身份证反面"},{key:"IDENTITYZM",value:"身份证正面"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"NVOCC"}],PrivateList:[{key:"Y",value:"私有"},{key:"N",value:"公有"}],EffectiveList:[{key:"Y",value:"是"},{key:"N",value:"否"}],ChargeTypeList:[{key:"YJFM",value:"月结费目"},{key:"YSDFM",value:"运输单费目"},{key:"ZCDFM",value:"装车单费目"}],PaymentTypeList:[{key:"YJ",value:"月结"},{key:"XJ",value:"现结"},{key:"ZZ",value:"转账"},{key:"YFK",value:"预付款"}],ChargePlanTypeList:[{key:"zcdjf",value:"装车单计费"},{key:"ckddjf",value:"出库订单计费"}],RpTypeList:[{key:"ar",value:"应收"},{key:"ap",value:"应付"},{key:"dd",value:"代收代付"},{key:"ds",value:"代收"},{key:"df",value:"代付"},{key:"sf",value:"收和付"}],AuthTemplateList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITY",value:"身份证"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"nvocc"}],IsSigns:[{key:"Y",value:"已签约"},{key:"N",value:"未签约"}]};t.a=i},uQcP:function(e,t){}});