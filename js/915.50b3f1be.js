"use strict";(self["webpackChunkmymihua"]=self["webpackChunkmymihua"]||[]).push([[915],{7915:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"authority-view"},[t("div",{staticClass:"authority-view-top"},[t("div",{staticClass:"top-left"},[e._m(0),t("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"请输入内容"},on:{input:e.sousuo},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),t("div",[t("el-button",{staticClass:"el-icon-plus",staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:e.addinfo}},[e._v("添加系统角色")]),t("el-dialog",{attrs:{title:"角色操作",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleClose}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"角色名称","label-width":"100px",prop:"rolename"}},[t("el-input",{attrs:{placeholder:"请输入1-20个字符"},model:{value:e.form.rolename,callback:function(t){e.$set(e.form,"rolename",t)},expression:"form.rolename"}})],1),t("el-form-item",{attrs:{label:"描述","label-width":"100px",prop:"describe"}},[t("el-input",{attrs:{placeholder:"请输入修改描述"},model:{value:e.form.describe,callback:function(t){e.$set(e.form,"describe",t)},expression:"form.describe"}})],1),t("el-form-item",{attrs:{label:"是否启用","label-width":"100px",prop:"status"}},[t("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[t("el-radio",{attrs:{label:1}},[e._v("启用")]),t("el-radio",{attrs:{label:0}},[e._v("停用")])],1)],1),t("el-form-item",{attrs:{label:"权限配置"}},[t("div",{staticStyle:{border:"1px solid #ebebeb"}},[t("el-tree",{ref:"tree",attrs:{data:e.data,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps}})],1)])],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.confirmEdit}},[e._v("确 定")])],1)],1)],1)]),t("div",{staticClass:"table"},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection"}}),t("el-table-column",{attrs:{label:"角色名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.rolename))]}}])}),t("el-table-column",{attrs:{label:"角色描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.describe))]}}])}),t("el-table-column",{attrs:{label:"角色权限配置"},scopedSlots:e._u([{key:"default",fn:function(s){return t("div",{staticClass:"power-cell"},[e._v(e._s(e.getNamesByIds(e.set_arr,s.row.powers)))])}}])}),t("el-table-column",{attrs:{label:"角色启用状态"},scopedSlots:e._u([{key:"default",fn:function(s){return t("div",{staticStyle:{display:"flex",width:"80px"}},[t("div",{class:0===s.row.status?"status-on":"status-off",staticStyle:{width:"8px",height:"8px","border-radius":"50%","margin-top":"8px","margin-right":"8px"}}),t("span",[e._v(e._s(s.row.status?"开启":"停用"))])])}}])}),t("el-table-column",{attrs:{label:"最后编辑时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.formatDate(t.row.lasttime)))]}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{icon:"el-icon-edit",circle:"",size:"mini"},on:{click:function(t){return e.handleEdit(s.$index,s.row)}}}),t("el-button",{attrs:{size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.handleDelete(s.$index,s.row)}}}),t("el-button",{attrs:{size:"mini",icon:0===s.row.status?"el-icon-switch-button":"el-icon-video-play",circle:""},on:{click:function(t){return e.handleStatus(s.$index,s.row)}}})]}}])})],1),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","page-size":e.pagesize,total:e.pagecount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},i=[function(){var e=this,t=e._self._c;return t("span",{staticClass:"el-dropdown-link",staticStyle:{display:"inline-block",padding:"5px","text-align":"center",width:"100px",height:"25px","background-color":"rgb(233, 243, 251)","margin-right":"20px"}},[e._v(" 客户测"),t("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{"margin-left":"30px"}})])}],a=(s(4114),s(2525)),o={data(){return{data:[{id:0,label:"开放所有权限",children:[{id:1,label:"首页"},{id:2,label:"企业管理"},{id:3,label:"通话统计",children:[{id:4,label:"并发统计"}]},{id:5,label:"权限管理",children:[{id:6,label:"系统角色管理"},{id:7,label:"系统用户管理"}]},{id:8,label:"系统配置",children:[{id:9,label:"呼转计费"},{id:10,label:"客户端版本维护"}]}]}],defaultProps:{children:"children",label:"label"},dialogVisible:!1,id:"",form:{rolename:"",describe:"",powers:"",status:""},rules:{rolename:[{required:!0,message:"角色名称不能为空",trigger:"blur"},{min:1,max:20,message:"角色名称长度应在1-20个字符之间",trigger:"blur"}],describe:[{required:!0,message:"描述不能为空",trigger:"blur"}],status:[{required:!0,message:"请选择是否启用",trigger:"change"}]},input1:"",tableData:[],multipleSelection:[],pagecount:0,search:"",set_arr:[],pagesize:0}},mounted(){this.GetRol(),this.setRol()},methods:{SetStatusOFF(e){(0,a.RU)(e).then((e=>{console.log(e),this.GetRol()}))},handleStatus(e,t){console.log(e,t),this.SetStatusOFF({id:t.id,status:1==t.status?0:1})},setRol(){(0,a.L4)().then((e=>{this.set_arr=e.data.data}))},getNamesByIds(e,t){const s=t.split(",").map((e=>parseInt(e.trim())));let l=[];return e.forEach((e=>{s.includes(e.id)&&l.push(e.name)})),l.join(", ")},getCheckedKeys(){console.log(this.$refs.tree.getCheckedKeys());let e=this.$refs.tree.getCheckedKeys(),t=e.join(",");return console.log(t),t},sousuo(){let e={rolename:this.input1};(0,a.$P)(e).then((e=>{console.log(e),this.tableData=e.data.data}))},setCheckedKeys(e){this.$refs.tree.setCheckedKeys(e)},handleEdit(e,t){console.log(e,t),this.form={rolename:t.rolename,describe:t.describe,status:t.status},this.dialogVisible=!0,this.id=t.id,console.log(this.id),this.form.powers=t.powers.split(","),console.log(this.form.powers),this.$nextTick((()=>{this.setCheckedKeys(this.form.powers)}))},updateRo(e,t){(0,a.S0)(e,t).then((e=>{console.log(e,22222),"修改成功"===e.msg?(this.$message({type:"success",message:"修改成功!"}),this.GetRol(),this.dialogVisible=!1):this.$message.error("修改失败，请稍后重试!")})).catch((e=>{console.error("更新角色信息时发生错误:",e),this.$message.error("修改失败，请稍后重试!"),this.dialogVisible=!1}))},handleDelete(e,t){console.log(e,t),console.log(e,t),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.tableData.splice(e,1),this.deleteRo(t.id),this.$message({type:"success",message:"删除成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},formatDate(e){const t=1e3*e,s=new Date(t),l=s.getFullYear(),i=String(s.getMonth()+1).padStart(2,"0"),a=String(s.getDate()).padStart(2,"0");return`${l}-${i}-${a}`},deleteRo(e){(0,a.EO)(e).then((e=>{console.log(e)}))},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},GetRol(e){(0,a.h3)(e).then((e=>{console.log(e.data),this.tableData=e.data.data,this.pagecount=e.data.pagecount}))},handleSizeChange(e){this.GetRol({pagelimit:e})},handleCurrentChange(e){this.GetRol({page:e})},handleClose(){},addinfo(){this.dialogVisible=!0},Adduserinfo(e){(0,a.VX)(e).then((e=>{console.log(e)})).then((e=>{e&&"系统角色添加成功"===e.msg?(this.GetRol(),this.$message({type:"success",message:"添加成功!"})):this.$message.error("添加失败!"),this.dialogVisible=!1})).catch((e=>{console.error("添加用户信息时发生错误:",e),this.$message.error("添加失败，请稍后重试!"),this.dialogVisible=!1}))},confirmEdit(){this.id?(this.updateRo(this.id,{id:this.id,rolename:this.form.rolename,describe:this.form.describe,powers:this.getCheckedKeys(),status:this.form.status}),this.GetRol(),this.dialogVisible=!1):(console.log(this.form),this.Adduserinfo({rolename:this.form.rolename,describe:this.form.describe,powers:this.getCheckedKeys(),status:this.form.status}))}}},r=o,n=s(1656),c=(0,n.A)(r,l,i,!1,null,"29144017",null),d=c.exports}}]);
//# sourceMappingURL=915.50b3f1be.js.map