import w from"./popupForm-D6e2w7cf.js";import{d as v,b as k,T as x,a as z}from"./index-Bu_rpr0j.js";import{p as I}from"./index-DkzA5vqp.js";import{a5 as B,a3 as F,_ as T}from"./index-KPShGsqr.js";import{e as q,v as E,p as P,at as A,x as O,m as r,X as D,o as i,h as K,k as u,s as t,O as m,W as h,l,P as c,_ as L,U as R}from"./vue-BZJL1-P9.js";const C={class:"default-main"},M={class:"ba-table-box"},N={class:"mlr-12"},S={class:"table-header-operate-text"},G=q({name:"routine/attachment",__name:"index",setup(U){const{t:e}=E.useI18n(),b=P(),f=v(["edit","delete"]);f[1].popconfirm.title=e("routine.attachment.Files and records will be deleted at the same time Are you sure?");const o=new k(new B("/admin/routine.Attachment/"),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("utils.Breakdown"),prop:"topic",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("routine.attachment.Upload administrator"),prop:"admin.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("routine.attachment.Upload user"),prop:"user.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("utils.size"),prop:"size",align:"center",formatter:(n,p,d)=>{const s=parseFloat(d),a=Math.floor(Math.log(s)/Math.log(1024));return(s/Math.pow(1024,a)).toFixed(a<1?0:2)+" "+["B","KB","MB","GB","TB"][a]},operator:"RANGE",sortable:"custom",operatorPlaceholder:"bytes"},{label:e("utils.type"),prop:"mimetype",align:"center",operator:"LIKE",showOverflowTooltip:!0,operatorPlaceholder:e("Fuzzy query")},{label:e("utils.preview"),prop:"suffix",align:"center",renderFormatter:I,render:"image",operator:!1},{label:e("utils.Upload (Reference) times"),prop:"quote",align:"center",width:150,operator:"RANGE",sortable:"custom"},{label:e("utils.Original name"),prop:"name",align:"center",showOverflowTooltip:!0,operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("routine.attachment.Storage mode"),prop:"storage",align:"center",width:100,operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("utils.Last upload time"),prop:"last_upload_time",align:"center",render:"datetime",operator:"RANGE",width:160,sortable:"custom"},{label:e("Operate"),align:"center",width:"100",render:"buttons",buttons:f,operator:!1}],defaultOrder:{prop:"last_upload_time",order:"desc"}});return A("baTable",o),O(()=>{var n;o.table.ref=b.value,o.mount(),(n=o.getIndex())==null||n.then(()=>{o.initSort()})}),(n,p)=>{const d=r("el-alert"),s=r("Icon"),a=r("el-button"),_=r("el-tooltip"),g=r("el-popconfirm"),y=D("blur");return i(),K("div",C,[u("div",M,[t(o).table.remark?(i(),m(d,{key:0,class:"ba-table-alert",title:t(o).table.remark,type:"info","show-icon":""},null,8,["title"])):h("",!0),l(x,{buttons:["refresh","edit","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("Quick search placeholder",{fields:t(e)("utils.Original name")})},{default:c(()=>[t(F)("del")?(i(),m(g,{key:0,onConfirm:p[0]||(p[0]=V=>t(o).onTableHeaderAction("delete",{})),"confirm-button-text":t(e)("Delete"),"cancel-button-text":t(e)("Cancel"),confirmButtonType:"danger",title:t(e)("routine.attachment.Files and records will be deleted at the same time Are you sure?"),disabled:!(t(o).table.selection.length>0)},{reference:c(()=>[u("div",N,[l(_,{content:t(e)("Delete selected row"),placement:"top"},{default:c(()=>[L((i(),m(a,{disabled:!(t(o).table.selection.length>0),class:"table-header-operate",type:"danger"},{default:c(()=>[l(s,{color:"#ffffff",name:"fa fa-trash"}),u("span",S,R(t(e)("Delete")),1)]),_:1},8,["disabled"])),[[y]])]),_:1},8,["content"])])]),_:1},8,["confirm-button-text","cancel-button-text","title","disabled"])):h("",!0)]),_:1},8,["quick-search-placeholder"]),l(z,{ref_key:"tableRef",ref:b},null,512),l(w)])])}}}),X=T(G,[["__scopeId","data-v-2a86eeff"]]);export{X as default};
