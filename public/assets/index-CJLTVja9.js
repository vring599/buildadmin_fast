import{e as u,v as i,p as d,au as p,x as m,m as b,o as s,h as f,s as a,P as _,X as h,l as o}from"./vue-DFhsJZqQ.js";import{_ as k}from"./popupForm.vue_vue_type_script_setup_true_lang-DQ3KQspG.js";import{a5 as g}from"./index-CPy2hEef.js";import{d as y,b as v,T as w,a as T}from"./index-Cgr755Cc.js";import"./index-64RmlQoR.js";import"./validate-BUeDMdsM.js";import"./index-BVMar5_0.js";const q={class:"default-main ba-table-box"},G=u({name:"user/cancelout",__name:"index",setup(x){const{t:e}=i.useI18n(),l=d(),c=y(["edit","delete"]),t=new v(new g("/admin/user.Cancelout/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("user.cancelout.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("user.cancelout.status"),prop:"status",align:"center",render:"tag",operator:"eq",sortable:!1,replaceValue:{0:e("user.cancelout.status 0"),1:e("user.cancelout.status 1"),2:e("user.cancelout.status 2")}},{label:e("user.cancelout.user_id"),prop:"user_id",align:"center",operator:"RANGE",sortable:!1},{label:e("user.cancelout.cancel_time"),prop:"cancel_time",align:"center",operator:"eq",sortable:"custom",width:160},{label:e("user.cancelout.createtime"),prop:"createtime",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("Operate"),align:"center",width:100,render:"buttons",buttons:c,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{status:"0"}});return p("baTable",t),m(()=>{var r;t.table.ref=l.value,t.mount(),(r=t.getIndex())==null||r.then(()=>{t.initSort(),t.dragSort()})}),(r,C)=>{const n=b("el-alert");return s(),f("div",q,[a(t).table.remark?(s(),_(n,{key:0,class:"ba-table-alert",title:a(t).table.remark,type:"info","show-icon":""},null,8,["title"])):h("",!0),o(w,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("Quick search placeholder",{fields:a(e)("user.cancelout.quick Search Fields")})},null,8,["quick-search-placeholder"]),o(T,{ref_key:"tableRef",ref:l},null,512),o(k)])}}});export{G as default};
