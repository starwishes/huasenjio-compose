(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-433e942a"],{3022:function(a,e,t){"use strict";t("62ac")},"46eb":function(a,e,t){"use strict";t.r(e);var i=t("ca7f"),o=t("102f"),s=t("dc92"),n={name:"AccountAdmin",components:{TableList:i.a,DialogForm:o.a},data(){return{manages:[],tableMap:[{label:"账号",key:"id"},{label:"密码",key:"password"},{label:"权限码",key:"code"}],total:0,searchForm:{id:"",code:""},searchFormMap:[{label:"账号",type:"input",key:"id"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,mode:"add",formMap:[{label:"账号",key:"id",type:"input",editDisabled:!0},{label:"密码",key:"password",type:"input"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],rule:{id:[{validator:Object(s.b)(["isNoEmpty::必填项","minLength:5::长度小于5","maxLength:20::长度大于20","isEmail::请输入邮箱"]),trigger:"blur"}],password:[{validator:Object(s.b)(["isNoEmpty::必填项","minLength:5::长度小于5","maxLength:50::长度大于50"]),trigger:"blur"}]},form:{id:"",password:"",code:0},pageNo:1,pageSize:10}},mounted(){this.queryManage()},methods:{queryManage(){let a=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findManageByPage(a,{notify:!1}).then(a=>{this.manages=a.data.list,this.total=a.data.total,this.cancel()})},updatePagination(a,e){this.pageNo=a,this.pageSize=e},removeManage(a,e,t,i){this.API.removeManage({_id:e._id}).then(a=>{this.queryManage()})},addManage(){this.show=!0,this.mode="add"},editManage(a,e){this.show=!0,this.mode="edit",this.$nextTick(()=>{this.form=Object.assign(this.form,e)})},paginationChange(a,e){this.queryManage()},save(){"edit"===this.mode?this.API.updateManage(this.form).then(a=>{this.queryManage()}):"add"===this.mode&&(delete this.form._id,delete this.form._v,this.API.addManage(this.form).then(a=>{this.queryManage()}))},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1}}},d=(t("3022"),t("2877")),r=Object(d.a)(n,(function(){var a=this,e=a._self._c;return e("div",{staticClass:"account-admin"},[e("TableList",{attrs:{tableData:a.manages,tableMap:a.tableMap,formData:a.searchForm,formMap:a.searchFormMap,showAdd:!0,total:a.total},on:{"update:formData":function(e){a.searchForm=e},"update:form-data":function(e){a.searchForm=e},edit:a.editManage,add:a.addManage,remove:a.removeManage,search:a.queryManage,paginationChange:a.paginationChange,updatePagination:a.updatePagination}}),a.show?e("DialogForm",{ref:"dialogForm",attrs:{width:"460",title:"add"==a.mode?"添加管理员":"编辑管理员",visible:a.show,mode:a.mode,"close-on-click-modal":!1,buttons:{comfirm:"确 认",cancel:"取 消"},formMap:a.formMap,formData:a.form,formRule:a.rule},on:{"update:visible":function(e){a.show=e},"update:formData":function(e){a.form=e},"update:form-data":function(e){a.form=e},comfirmForm:a.save,cancelForm:a.cancel}}):a._e()],1)}),[],!1,null,null,null);e.default=r.exports},"62ac":function(a,e,t){}}]);