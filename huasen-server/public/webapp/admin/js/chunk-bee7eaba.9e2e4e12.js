(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bee7eaba"],{"1d34":function(t,e,i){"use strict";i("e9e4")},e9e4:function(t,e,i){},f6af:function(t,e,i){"use strict";i.r(e);i("14d9");var a=i("ca7f"),o=i("102f"),l=i("dc92"),n={name:"SiteManage",components:{TableList:a.a,DialogForm:o.a},data(){return{total:0,tableData:[],tableMap:[{label:"网站名称",key:"name"},{label:"网站链接",key:"url"},{label:"网站描述",key:"description"},{label:"网站图标",key:"icon",width:100},{label:"权限码",key:"code"},{label:"是否可用",key:"enabled"}],searchForm:{name:"",code:"",tag:""},searchFormMap:[{label:"名称",type:"input",key:"name"},{label:"标签",type:"input",key:"tag"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,showImport:!1,mode:"add",importMode:"add",formMap:[{label:"名称",key:"name",type:"input"},{label:"链接",key:"url",type:"input"},{label:"图标",key:"icon",type:"icon"},{label:"描述",key:"description",type:"input"},{label:"网站标签",key:"siteTag",type:"select",selectOptions:[],selectConfig:{"allow-create":!0,filterable:!0,multiple:!0}},{label:"置顶标记",key:"sitePin",type:"select",selectOptions:this.CONSTANT.dictionary.pin,selectConfig:{filterable:!0,multiple:!0}},{label:"所属栏目",key:"columnId",type:"select",selectOptions:[],selectConfig:{"allow-create":!0,filterable:!0,multiple:!0}},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code},{label:"备注",key:"remarks",type:"input"},{label:"是否可用",key:"enabled",type:"switch"}],importFormMap:[{label:"网站标签",key:"siteTag",type:"select",selectOptions:[],selectConfig:{"allow-create":!0,filterable:!0,multiple:!0}},{label:"所属栏目",key:"columnId",type:"select",selectOptions:[],selectConfig:{filterable:!0,multiple:!0}},{label:"网站数据",key:"siteData",type:"textarea"}],rule:{name:[{validator:Object(l.b)(["isNoEmpty::必填项","minLength:2::长度不能小于2","maxLength:20::长度不能大于20"]),trigger:"blur"}],url:[{validator:Object(l.b)(["isNoEmpty::必填项","isUrl::请输入正确的网址"]),trigger:"blur"}],expand:[{validator:Object(l.b)(["isNoEmpty::必填项","isJSONObject::请输入JSON对象"]),trigger:"blur"}]},importRule:{siteData:[{validator:Object(l.b)(['isSiteList::格式: [{"name":"名称","url":"http://huasenjio.top/","description":"描述"}]']),trigger:"blur"}]},form:{name:"",url:"",icon:"",description:"",remarks:"",expand:"{}",enabled:!0,code:0,siteTag:[],sitePin:[],columnId:[]},importForm:{siteTag:[],columnId:[],siteData:""},initForm:null,pageNo:1,pageSize:10,siteTagNameOptions:[],columnOptions:[]}},mounted(){this.queryData(),this.queryColumnData()},methods:{queryData(){let t=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findSiteByPage(t,{notify:!1}).then(t=>{this.tableData=t.data.list,this.total=t.data.total,this.cancel(),this.cancelImportSite()}),this.API.findSiteTagByList({},{notify:!1}).then(t=>{let e=this.formMap.find(t=>"siteTag"===t.key),i=this.importFormMap.find(t=>"siteTag"===t.key);this.siteTagNameOptions=t.data.map(t=>({label:t,value:t})),e&&(e.selectOptions=[...this.siteTagNameOptions]),i&&(i.selectOptions=[...this.siteTagNameOptions])})},queryColumnData(){this.API.findColumnByList({},{notify:!1}).then(t=>{this.columnOptions=t.data.map(t=>({label:t.name,value:t._id}));let e=this.importFormMap.find(t=>"columnId"===t.key),i=this.formMap.find(t=>"columnId"===t.key);e&&(e.selectOptions=[...this.columnOptions]),i&&(i.selectOptions=[...this.columnOptions])})},updatePagination(t,e){this.pageNo=t,this.pageSize=e},handleRemove(t,e){this.API.removeSite({_id:e._id}).then(t=>{this.queryData()})},handleRemoveMany(t){let e=t.map(t=>t._id);this.API.removeManySite({_ids:e}).then(t=>{this.queryData()})},handleAdd(){this.show=!0,this.mode="add",this.$nextTick(()=>{this.initForm=this.LODASH.cloneDeep(this.form)})},handleAddMany(){this.showImport=!0},handleEdit(t,e){this.show=!0,this.mode="edit",this.$nextTick(async()=>{let t=[],i=[],a=[];try{let o=JSON.parse(e.expand||"{}");t=o.tag||[],i=o.pin||[],a=(await this.API.findSiteColmunByList({siteId:e._id},{notify:!1})).data||[]}catch(t){this.$tips("error","初始化编辑数据异常","top-right",2e3)}this.form=Object.assign(this.form,e,{siteTag:t,sitePin:i,columnId:a}),this.initForm=this.LODASH.cloneDeep(this.form)})},paginationChange(){this.queryData()},async save(t){let e={...this.form},i=[],a=[],o=[],l=[];if(this.initForm.columnId.forEach(t=>{-1===e.columnId.indexOf(t)&&i.push(t)}),e.columnId.forEach((t,i)=>{if(-1===this.initForm.columnId.indexOf(t)){this.columnOptions.find(e=>e.value===t)?a.push(t):(o.push({name:t}),e.columnId.splice(i,1))}}),o.length){l=(await this.API.addColumn({data:o},{notify:!1})).data.map(t=>t._id)}let n=JSON.parse(e.expand);n="[object Object]"===Object.prototype.toString.call(n)?n:{},n.tag=e.siteTag,n.pin=e.sitePin,n.columnStore=e.columnId.concat(l);let s=JSON.stringify(n);e.expand=s;let r=[];if("edit"===this.mode)await this.API.updateSite(e),r.push(e._id);else if("add"===this.mode){delete e._id,delete e._v;let t=await this.API.addSite(e);r.push(t.data[0]._id)}let m=a.concat(l);m.length&&await this.API.bindSiteToColumn({columnIds:m,siteIds:r},{notify:!1}),i.length&&await this.API.unbindSiteToColumn({columnIds:i,siteIds:r},{notify:!1}),this.queryColumnData(),this.queryData()},async saveImportSite(){let t={...this.importForm};try{let e=JSON.parse(t.siteData);e=e.map(t=>{let{name:e,url:i,description:a}=t;return{name:e,url:i,description:a}}),e.forEach(e=>{if(t.siteTag.length){let i={};i.tag=t.siteTag,i.columnStore=t.columnId.length?[...t.columnId]:void 0,e.expand=JSON.stringify(i)}});let i=await this.API.addManySite({sites:e});if(t.columnId.length){let e=i.data.map(t=>t._id);await this.API.bindSiteToColumn({columnIds:t.columnId,siteIds:e},{notify:!1})}this.queryData()}catch(t){this.$tips("error","导入失败","top-right",2e3)}},cancelImportSite(){this.$refs.dialogImportForm&&this.$refs.dialogImportForm.close(),this.showImport=!1},cancel(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1,this.initForm=null}}},s=(i("1d34"),i("2877")),r=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-manage"},[e("TableList",{attrs:{tableData:t.tableData,tableMap:t.tableMap,formData:t.searchForm,formMap:t.searchFormMap,total:t.total,showAdd:!0,showAddMany:!0,showSelection:!0},on:{"update:formData":function(e){t.searchForm=e},"update:form-data":function(e){t.searchForm=e},edit:t.handleEdit,add:t.handleAdd,addMany:t.handleAddMany,remove:t.handleRemove,removeMany:t.handleRemoveMany,search:t.queryData,paginationChange:t.paginationChange,updatePagination:t.updatePagination}}),t.show?e("DialogForm",{ref:"dialogForm",attrs:{width:"520",maxHeight:"480",title:"add"==t.mode?"添加网链":"编辑网链",visible:t.show,formMap:t.formMap,formData:t.form,formRule:t.rule,"close-on-click-modal":!1,mode:t.mode,buttons:{comfirm:"确 认",cancel:"取 消"}},on:{"update:visible":function(e){t.show=e},"update:formData":function(e){t.form=e},"update:form-data":function(e){t.form=e},comfirmForm:t.save,cancelForm:t.cancel}}):t._e(),t.showImport?e("DialogForm",{ref:"dialogImportForm",attrs:{width:"420",maxHeight:"480",title:"导入站点",visible:t.showImport,formMap:t.importFormMap,formData:t.importForm,formRule:t.importRule,"close-on-click-modal":!1,mode:t.importMode,buttons:{comfirm:"确 认",cancel:"取 消"}},on:{"update:visible":function(e){t.showImport=e},"update:formData":function(e){t.importForm=e},"update:form-data":function(e){t.importForm=e},comfirmForm:t.saveImportSite,cancelForm:t.cancelImportSite}}):t._e()],1)}),[],!1,null,"2f1bdcab",null);e.default=r.exports}}]);