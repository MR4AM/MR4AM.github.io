webpackJsonp([22],{"1+AF":function(e,t,a){"use strict";t.a={name:"Base",props:{isLong:{type:Boolean},params:{type:Object}},mounted:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)},activated:function(){var e=this;setTimeout(function(){e.$store.commit("setLoading",!1)},100)}}},PZNv:function(e,t){},"Un+A":function(e,t){},jsdL:function(e,t,a){"use strict";var i={PageSizeOptions:[10,20,50,100],NormalHeight:265,WindowHeight:document.documentElement.clientHeight,StaffTypes:[{key:"MANAGER",value:"管理员"},{key:"COMMON",value:"普通员工"}],StatusList:[{key:"ON",value:"启用"},{key:"OFF",value:"禁用"}],GoodsTypeList:[{key:"PH",value:"普货"},{key:"MG",value:"敏感"}],OwnershipTypeList:[{key:"GY",value:"国有"},{key:"SZ",value:"三资"},{key:"MY",value:"民营"}],SalesChannelList:[{key:"DL",value:"代理"},{key:"ZJ",value:"直接"},{key:"YCX",value:"一次性客户"}],StrategicNatureList:[{key:"FZLGJ",value:"非战略改进"},{key:"FZLWX",value:"非战略维系"},{key:"ZLMB",value:"战略目标"},{key:"ZLWX",value:"战略维系"}],TradeIdentityList:[{key:"KH",value:"客户"},{key:"GYS",value:"供应商"}],AuthStatusList:[{key:"WRZ",value:"未认证"},{key:"SHZ",value:"待审核"},{key:"RZTG",value:"认证通过"},{key:"RZBTG",value:"认证不通过"}],ReletedFunctionList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITYFM",value:"身份证反面"},{key:"IDENTITYZM",value:"身份证正面"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"NVOCC"}],PrivateList:[{key:"Y",value:"私有"},{key:"N",value:"公有"}],EffectiveList:[{key:"Y",value:"是"},{key:"N",value:"否"}],ChargeTypeList:[{key:"YJFM",value:"月结费目"},{key:"YSDFM",value:"运输单费目"},{key:"ZCDFM",value:"装车单费目"}],PaymentTypeList:[{key:"YJ",value:"月结"},{key:"XJ",value:"现结"},{key:"ZZ",value:"转账"},{key:"YFK",value:"预付款"}],ChargePlanTypeList:[{key:"zcdjf",value:"装车单计费"},{key:"ckddjf",value:"出库订单计费"}],RpTypeList:[{key:"ar",value:"应收"},{key:"ap",value:"应付"},{key:"dd",value:"代收代付"},{key:"ds",value:"代收"},{key:"df",value:"代付"},{key:"sf",value:"收和付"}],AuthTemplateList:[{key:"BUSINESS",value:"营业执照"},{key:"IDENTITY",value:"身份证"},{key:"LETTER",value:"企业公函"},{key:"RTPC",value:"道路运输许可证"},{key:"NVOCC",value:"nvocc"}],IsSigns:[{key:"Y",value:"已签约"},{key:"N",value:"未签约"}]};t.a=i},nRbx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),s=a.n(i),n=a("vgQg").a.apiHost,o={queryExamQuestion:n+"/examquestion/findExamQuestionPage",createExamQuestion:n+"/examquestion/createExamQuestion",updateExamQuestion:n+"/examquestion/editExamQuestion",changeExamQuestion:n+"/examquestion/changeExamQuestionStatus",detailExamQuestion:n+"/examquestion/getExamQuestionDetails"},l=a("KvKp"),r={queryExamQuestion:function(e){e.method="post";var t=o.queryExamQuestion;l.a.sendReq({queryUrl:t,req:e})},createExamQuestion:function(e){e.method="post";var t=o.createExamQuestion;l.a.sendReq({queryUrl:t,req:e})},updateExamQuestion:function(e){e.method="post";var t=o.updateExamQuestion;l.a.sendReq({queryUrl:t,req:e})},changeExamQuestion:function(e){e.method="post";var t=o.changeExamQuestion;l.a.sendReq({queryUrl:t,req:e})},detailExamQuestion:function(e){e.method="post";var t=o.detailExamQuestion;l.a.sendReq({queryUrl:t,req:e})}},u=a("1+AF"),c={name:"ExamQuestionSearch",extends:u.a,data:function(){return{searchForm:{}}},methods:{handleFilter:function(){this.$emit("on-search",this.searchForm)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchDiv"},[a("div",{staticClass:"filter-container",staticStyle:{width:"100%"}},[a("el-form",{ref:"searchForm",attrs:{"label-position":"right",model:e.searchForm}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"考点:"}},[a("el-select",{attrs:{placeholder:"请选择考点",clearable:""},model:{value:e.searchForm.target,callback:function(t){e.$set(e.searchForm,"target",t)},expression:"searchForm.target"}},[a("el-option",{attrs:{label:"全部",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"司机",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"访客",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"司机访客",value:"4"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"题型:"}},[a("el-select",{attrs:{placeholder:"请选择题型",clearable:""},model:{value:e.searchForm.questionType,callback:function(t){e.$set(e.searchForm,"questionType",t)},expression:"searchForm.questionType"}},[a("el-option",{attrs:{label:"全部",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"单选题",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"多选题",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"判断题",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"填空题",value:"5"}}),e._v(" "),a("el-option",{attrs:{label:"简答题",value:"6"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"创建时间:"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"createTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.searchForm.createTime,callback:function(t){e.$set(e.searchForm,"createTime",t)},expression:"searchForm.createTime"}})],1)],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"createTime"}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.searchForm.createTime,callback:function(t){e.$set(e.searchForm,"createTime",t)},expression:"searchForm.createTime"}})],1)],1)],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"fixedSeachBtn"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v("查询")])],1)],1)])},staticRenderFns:[]};var m=a("VU/8")(c,d,!1,function(e){a("oEC9")},"data-v-9ea67760",null).exports,v={name:"ExamQuestionModal",extends:u.a,props:{ExamQuestionModal:{}},data:function(){return{dataForm:{},rules:{}}},computed:{dialogFormVisible:function(){return this.ExamQuestionModal.visible}},methods:{beforeOpen:function(){this.dataForm=this.ExamQuestionModal.current,this.$refs.dataForm&&this.$refs.dataForm.clearValidate()},ok:function(){var e=this;e.$refs.dataForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$emit("ExamQuestionModal-ok",e.dataForm)})},handleClose:function(e){this.$emit("ExamQuestionModal-cancel",{})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-dialog",{attrs:{title:e.ExamQuestionModal.title,visible:e.dialogFormVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogFormVisible=t},open:e.beforeOpen}},[a("div",{staticClass:"projDetail"},[a("div",{staticClass:"tableForm"},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.dataForm,"label-position":"right","label-width":"15%"}})],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["detail"!=e.ExamQuestionModal.type?a("el-button",{on:{click:e.handleClose}},[e._v("取消")]):e._e(),e._v(" "),"detail"!=e.ExamQuestionModal.type?a("el-button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("确定")]):e._e(),e._v(" "),"detail"==e.ExamQuestionModal.type?a("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("关闭")]):e._e()],1)])],1)},staticRenderFns:[]};var h=a("VU/8")(v,p,!1,function(e){a("Un+A")},"data-v-28767eda",null).exports,f=a("jsdL"),y={name:"ExamQuestionList",extends:u.a,components:{ExamQuestionSearch:m,ExamQuestionModal:h},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{currentPage:1,pageSize:10},pageInfo:{},RowSelection:[],searchParams:{},ExamQuestionModal:{visible:!1,title:"",type:"",current:{}},pageSizeOptions:f.a.PageSizeOptions,tableHeight:f.a.WindowHeight-300}},created:function(){this.getList()},computed:{deleteStatus:function(){return!(this.RowSelection.length>0)}},methods:{getList:function(){var e=this;e.listLoading=!0;var t=e.listQuery;t=s()({},t,e.searchParams),r.queryExamQuestion({data:t,success:function(t){e.list=t.data.data,e.pageInfo=t.data.pageInfo,setTimeout(function(){e.listLoading=!1},500)},fail:function(t){e.listLoading=!1,e.$notify.error({title:"提示",message:t.data.message})}})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.currentPage=e,this.getList()},handleCreate:function(){this.ExamQuestionModal.visible=!0,this.ExamQuestionModal.title="新增试题",this.ExamQuestionModal.type="create",this.ExamQuestionModal.current={}},handleUpdate:function(e){this.ExamQuestionModal.visible=!0,this.ExamQuestionModal.title="编辑试题",this.ExamQuestionModal.type="update",this.ExamQuestionModal.current=e},onView:function(e){this.ExamQuestionModal.current=e,this.ExamQuestionModal.title="查看详情",this.ExamQuestionModal.type="detail",this.ExamQuestionModal.visible=!0},handleDelete:function(){var e=this,t=[];for(var a in e.RowSelection)t.push(e.RowSelection[a].userId);e.$confirm("自定义删除信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){r.changeExamQuestion({data:{ExamQuestionIds:t,status:"delete"},success:function(t){e.$message({type:"success",message:t.data.message}),e.getList()},fail:function(t){e.$notify.error({title:"提示",message:t.data.message})}})})},handleSelectionChange:function(e){this.RowSelection=e},modalCancel:function(){this.ExamQuestionModal.visible=!1,this.ExamQuestionModal.current={},this.ExamQuestionModal.title="",this.ExamQuestionModal.type=""},modalOk:function(e){var t=this;"create"==t.ExamQuestionModal.type?r.createExamQuestion({data:e,success:function(e){t.$message({type:"success",message:"操作成功!"}),t.getList(),t.ExamQuestionModal.visible=!1},fail:function(e){t.$notify.error({title:"提示",message:e.data.message})}}):r.updateExamQuestion({data:e,success:function(e){t.$message({type:"success",message:"操作成功!"}),t.getList(),t.ExamQuestionModal.visible=!1},fail:function(e){t.$notify.error({title:"提示",message:e.data.message})}})},searchSubmit:function(e){this.searchParams=e,this.listQuery.currentPage=1,this.listLoading=!0,this.getList()}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("ExamQuestion-search",{on:{"on-search":e.searchSubmit}}),e._v(" "),a("div",{staticClass:"projBtns"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.handleCreate}},[e._v("添加试题")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.handleCreate}},[e._v("删除试题")])],1),e._v(" "),a("div",{staticClass:"tableDiv"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,attrs:{stripe:"",data:e.list,fit:"","highlight-current-row":"",height:e.tableHeight},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"题型",type:"index",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"考点",align:"center",prop:"examQuestionId",width:"150","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"试题内容",align:"center",prop:"stem",width:"400","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"创建人",align:"center",prop:"creatorName",width:"150","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"150","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.onView(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",[a("el-pagination",{attrs:{align:"center","current-page":e.pageInfo.currentPage,"page-sizes":e.pageSizeOptions,layout:"total ,prev, pager, next, jumper",total:e.pageInfo.totalRows},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.pageInfo,"currentPage",t)},"update:current-page":function(t){return e.$set(e.pageInfo,"currentPage",t)}}})],1)],1),e._v(" "),a("ExamQuestion-modal",{attrs:{ExamQuestionModal:e.ExamQuestionModal},on:{"ExamQuestionModal-cancel":e.modalCancel,"ExamQuestionModal-ok":e.modalOk}})],1)},staticRenderFns:[]};var x=a("VU/8")(y,g,!1,function(e){a("PZNv")},"data-v-681e9d02",null);t.default=x.exports},oEC9:function(e,t){}});