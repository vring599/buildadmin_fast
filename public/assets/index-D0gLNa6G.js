import{d as L,b as I,T as k,a as x}from"./index-Bu_rpr0j.js";import{u as w,r as T,i as z,I as v}from"./info-CuDubmOs.js";import{a5 as B,al as C,_ as E}from"./index-KPShGsqr.js";import{e as q,v as P,at as D,x as A,m as c,X as K,o as i,h as F,s as o,O as u,W as O,l as r,P as n,k as y,_ as N,U as S}from"./vue-BZJL1-P9.js";import"./index-DkzA5vqp.js";const V={class:"default-main ba-table-box"},H={class:"mlr-12"},U={class:"table-header-operate-text"},j=q({name:"security/dataRecycleLog",__name:"index",setup(G){const{t:e}=P.useI18n();let s=[{render:"tipButton",name:"info",title:"Info",text:"",type:"primary",icon:"fa fa-search-plus",class:"table-row-info",disabledTip:!1,click:a=>{p(a[t.table.pk])}},{render:"confirmButton",name:"restore",title:"security.dataRecycleLog.restore",text:"",type:"success",icon:"el-icon-RefreshRight",class:"table-row-edit",popconfirm:{confirmButtonText:e("security.dataRecycleLog.restore"),cancelButtonText:e("Cancel"),confirmButtonType:"success",title:e("security.dataRecycleLog.Are you sure to restore the selected records?")},disabledTip:!1,click:a=>{d([a[t.table.pk]])}}];s=s.concat(L(["delete"]));const t=new I(new B(w),{column:[{type:"selection",align:"center",operator:!1},{label:e("Id"),prop:"id",align:"center",operator:"=",operatorPlaceholder:e("Id"),width:70},{label:e("security.dataRecycleLog.Operation administrator"),prop:"admin.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycleLog.Recycling rule name"),prop:"recycle.name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycleLog.controller"),prop:"recycle.controller_as",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("Connection"),prop:"connection",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycleLog.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycleLog.DeletedData"),prop:"data",align:"center",operator:"LIKE",operatorPlaceholder:e("security.dataRecycleLog.Arbitrary fragment fuzzy query"),showOverflowTooltip:!0},{label:"IP",prop:"ip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{show:!1,label:"User Agent",prop:"useragent",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),showOverflowTooltip:!0},{label:e("security.dataRecycleLog.Delete time"),prop:"create_time",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("Operate"),align:"center",width:120,render:"buttons",buttons:s,operator:!1}],dblClickNotEditColumn:[void 0]},{},{onTableDblclick:({row:a})=>(p(a[t.table.pk]),!1)}),d=a=>{T(a).then(()=>{t.onTableHeaderAction("refresh",{})})},f=()=>{d(t.getSelectionIds())},p=a=>{t.form.extend.info={},t.form.operate="Info",t.form.loading=!0,z(a).then(l=>{l.data.row.data=l.data.row.data?[{label:e("security.dataRecycleLog.Click to expand"),children:C(l.data.row.data)}]:[],t.form.extend.info=l.data.row,t.form.loading=!1})};return D("baTable",t),A(()=>{t.mount(),t.getIndex()}),(a,l)=>{const b=c("el-alert"),m=c("Icon"),h=c("el-button"),_=c("el-tooltip"),g=c("el-popconfirm"),R=K("blur");return i(),F("div",V,[o(t).table.remark?(i(),u(b,{key:0,class:"ba-table-alert",title:o(t).table.remark,type:"info","show-icon":""},null,8,["title"])):O("",!0),r(k,{buttons:["refresh","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":o(e)("Quick search placeholder",{fields:o(e)("security.dataRecycleLog.Rule name")})},{default:n(()=>[r(g,{onConfirm:f,"confirm-button-text":o(e)("security.dataRecycleLog.restore"),"cancel-button-text":o(e)("Cancel"),confirmButtonType:"success",title:o(e)("security.dataRecycleLog.Are you sure to restore the selected records?"),disabled:!(o(t).table.selection.length>0)},{reference:n(()=>[y("div",H,[r(_,{content:o(e)("security.dataRecycleLog.Restore the selected record to the original data table"),placement:"top"},{default:n(()=>[N((i(),u(h,{disabled:!(o(t).table.selection.length>0),class:"table-header-operate",type:"success"},{default:n(()=>[r(m,{color:"#ffffff",name:"el-icon-RefreshRight"}),y("span",U,S(o(e)("security.dataRecycleLog.restore")),1)]),_:1},8,["disabled"])),[[R]])]),_:1},8,["content"])])]),_:1},8,["confirm-button-text","cancel-button-text","title","disabled"])]),_:1},8,["quick-search-placeholder"]),r(x),r(v)])}}}),$=E(j,[["__scopeId","data-v-528e7dc4"]]);export{$ as default};
