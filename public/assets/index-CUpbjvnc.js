var h=Object.defineProperty;var b=(o,e,a)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var l=(o,e,a)=>(b(o,typeof e!="symbol"?e+"":e,a),a);import{b as y,d as g,T as _,a as x}from"./index-Bu_rpr0j.js";import{c as k,x as d,ap as v,a5 as D}from"./index-KPShGsqr.js";import F from"./popupForm-v62qegMW.js";import{e as L,v as R,p as c,at as w,x as E,m as q,o as m,h as z,s as n,O as C,W as S,l as f}from"./vue-BZJL1-P9.js";import"./index-DkzA5vqp.js";import"./index-B3Hzgth0.js";import"./validate-45bXqi5h.js";const u="/admin/security.SensitiveData/";function I(){return k({url:u+"add",method:"get"})}class T extends y{constructor(a,t,r={},i={},s={}){super(a,t,r,i,s);l(this,"requestEdit",a=>(this.runBefore("requestEdit",{id:a}),this.form.loading=!0,this.form.items={},this.api.edit({id:a}).then(t=>{const r=[],i=[];for(const s in t.data.row.data_fields)r.push(s),i.push({name:s,value:t.data.row.data_fields[s]??""});this.form.items.connection=t.data.row.connection?t.data.row.connection:"",this.form.extend.controllerList=t.data.controllers,t.data.row.data_table&&(this.onTableChange(t.data.row.data_table),this.form.extend.parentRef&&this.form.extend.parentRef.setDataFields(i)),t.data.row.data_fields=r,this.form.loading=!1,this.form.items=t.data.row,this.runAfter("requestEdit",{res:t})})));l(this,"onConnectionChange",()=>{this.form.extend.fieldList={},this.form.extend.fieldSelect={},this.form.extend.fieldSelectKey=d(),this.form.items.data_table="",this.form.items.data_fields=[],this.form.extend.parentRef&&this.form.extend.parentRef.setDataFields([])});l(this,"onTableChange",a=>{this.form.extend=Object.assign(this.form.extend,{fieldLoading:!0,fieldList:{},fieldSelect:{},fieldSelectKey:d()}),this.form.items.data_fields=[],this.form.extend.parentRef&&this.form.extend.parentRef.setDataFields([]),v(a,!0,this.form.items.connection).then(t=>{this.form.items.primary_key=t.data.pk,this.form.defaultItems.primary_key=t.data.pk;const r={};for(const i in t.data.fieldList)r[i]=(i?i+" - ":"")+t.data.fieldList[i];this.form.extend=Object.assign(this.form.extend,{fieldLoading:!1,fieldList:t.data.fieldList,fieldSelect:r,fieldSelectKey:d()})})});l(this,"toggleForm",(a="",t=[])=>{if(this.runBefore("toggleForm",{operate:a,operateIds:t}),this.form.ref&&this.form.ref.resetFields(),this.form.extend.parentRef&&this.form.extend.parentRef.setDataFields([]),a=="Edit"){if(!t.length)return!1;this.requestEdit(t[0])}else a=="Add"&&(this.form.loading=!0,I().then(r=>{this.form.extend.controllerList=r.data.controllers,this.form.items=Object.assign({},this.form.defaultItems),this.form.loading=!1}));this.form.operate=a,this.form.operateIds=t,this.runAfter("toggleForm",{operate:a,operateIds:t})})}}const K={class:"default-main ba-table-box"},M=L({name:"security/dataRecycle",__name:"index",setup(o){const{t:e}=R.useI18n(),a=c(),t=c(),r=new T(new D(u),{column:[{type:"selection",align:"center",operator:!1},{label:"ID",prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("security.sensitiveData.Rule name"),prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveData.controller"),prop:"controller",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("Connection"),prop:"connection",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveData.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveData.Data table primary key"),prop:"primary_key",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:100},{label:e("security.sensitiveData.Sensitive fields"),prop:"data_fields",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tags"},{label:e("State"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("security.sensitiveData.Modifying monitoring")}},{label:e("Update time"),prop:"update_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Create time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Operate"),align:"center",width:"130",render:"buttons",buttons:g(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{status:"1"}},{onSubmit:()=>{r.form.items.fields=t.value.getDataFields()}});return w("baTable",r),E(()=>{r.form.extend.parentRef=t.value,r.table.ref=a.value,r.mount(),r.getIndex()}),(i,s)=>{const p=q("el-alert");return m(),z("div",K,[n(r).table.remark?(m(),C(p,{key:0,class:"ba-table-alert",title:n(r).table.remark,type:"info","show-icon":""},null,8,["title"])):S("",!0),f(_,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":n(e)("Quick search placeholder",{fields:n(e)("security.sensitiveData.controller")})},null,8,["quick-search-placeholder"]),f(x,{ref_key:"tableRef",ref:a},null,512),f(F,{ref_key:"formRef",ref:t},null,512)])}}});export{M as default};
