import{e as j,v as E,p as S,r as V,m,Y,o as u,h as R,k as l,V as s,s as e,l as c,Q as n,W as i,P as b,X as g,$ as U,a9 as k,a8 as q,_ as z,J,a2 as W,a3 as X}from"./vue-DFhsJZqQ.js";import{c as D,s as d,i as A}from"./crud-B6mCKCsW.js";import{F as L}from"./index-64RmlQoR.js";import{b as G}from"./validate-BUeDMdsM.js";import{_ as H}from"./log.vue_vue_type_style_index_0_lang-YBuqPnVz.js";import{an as O,ao as Z,_ as ee}from"./index-CPy2hEef.js";import"./index-Cgr755Cc.js";import"./index-BVMar5_0.js";const te=_=>(W("data-v-730631b9"),_=_(),X(),_),ae={class:"default-main"},se={class:"crud-title"},le={class:"start-opt"},oe={class:"start-item-title"},re={class:"start-item-remark"},de={class:"start-item suspension"},ne={class:"start-item-title"},ce={class:"start-item-remark"},ie={class:"start-item suspension"},ue={class:"start-item-title"},pe={class:"start-item-remark"},me={target:"_blank",href:"https://doc.buildadmin.com/guide/other/developerMustSee.html",rel:"noopener noreferrer"},be=te(()=>l("code",null,"test_build",-1)),_e={target:"_blank",href:"https://doc.buildadmin.com/guide/other/developerMustSee.html",rel:"noopener noreferrer"},fe={style:{width:"calc(100% * 0.9)"}},ge=j({__name:"start",setup(_){const{t}=E.useI18n(),$=S(),h=S(),o=V({dialog:{type:"",visible:!1},showLog:!1,loading:!1,successRecord:0}),I=p=>{o.dialog.type=p,o.dialog.visible=!0,o.successRecord=0,d.startData.table=""},P=V({table:[G({name:"required",message:t("crud.crud.Please select a data table")})]}),v=()=>{if(h.value){if(o.dialog.type=="sql"&&!d.startData.sql){J({type:"error",message:t("crud.crud.Please enter the table creation SQL")});return}h.value.validate(p=>{p&&D(o.dialog.type)})}},N=()=>{o.successRecord=0,d.startData.table=""},T=()=>{d.startData.table&&(o.loading=!0,A(d.startData.table,d.startData.databaseConnection).then(p=>{o.successRecord=p.data.id}).finally(()=>{o.loading=!1}))},B=()=>{o.successRecord&&(d.startData.logId=o.successRecord.toString(),D("log"))},F=()=>!1;return(p,a)=>{const f=m("el-col"),w=m("el-row"),x=m("el-alert"),Q=m("el-input"),K=m("el-form"),y=m("el-button"),M=m("el-dialog"),C=Y("blur");return u(),R("div",ae,[l("div",se,s(e(t)("crud.crud.start")),1),l("div",le,[c(w,{gutter:20},{default:n(()=>[c(f,{xs:24,span:8},{default:n(()=>[l("div",{onClick:a[0]||(a[0]=r=>e(D)("create")),class:"start-item suspension"},[l("div",oe,s(e(t)("crud.crud.create")),1),l("div",re,s(e(t)("crud.crud.New background CRUD from zero")),1)])]),_:1}),c(f,{onClick:a[1]||(a[1]=r=>I("db")),xs:24,span:8},{default:n(()=>[l("div",de,[l("div",ne,s(e(t)("crud.crud.Select Data Table")),1),l("div",ce,s(e(t)("crud.crud.Select a designed data table from the database")),1)])]),_:1}),c(f,{onClick:a[2]||(a[2]=r=>o.showLog=!0),xs:24,span:8},{default:n(()=>[l("div",ie,[l("div",ue,s(e(t)("crud.crud.CRUD record")),1),l("div",pe,s(e(t)("crud.crud.Start with previously generated CRUD code")),1)])]),_:1})]),_:1}),c(w,{justify:"center"},{default:n(()=>[c(f,{span:20,class:"ba-markdown crud-tips suspension"},{default:n(()=>[l("b",null,s(e(t)("crud.crud.Fast experience")),1),l("ol",null,[l("li",null,[i(s(e(t)("crud.crud.experience 1 1"))+" ",1),l("a",me,s(e(t)("crud.crud.experience 1 2")),1),i(" "+s(e(t)("crud.crud.experience 1 3")),1)]),l("li",null,[i(s(e(t)("crud.crud.experience 2 1"))+" ",1),l("code",null,s(e(t)("crud.crud.experience 2 2")),1),i(" "+s(e(t)("crud.crud.experience 2 3")),1),be,i(s(e(t)("crud.crud.data sheet")),1)]),l("li",null,[i(s(e(t)("crud.crud.experience 3 1")),1),l("code",null,s(e(t)("crud.crud.experience 3 2")),1),i(" "+s(e(t)("crud.crud.experience 3 3"))+" ",1),l("code",null,s(e(t)("crud.crud.experience 3 4")),1)])]),F()?g("",!0):(u(),b(x,{key:0,class:"no-dev",type:"warning","show-icon":!0,closable:!1},{title:n(()=>[l("span",null,s(e(t)("crud.crud.experience 4 1")),1),l("a",_e,s(e(t)("crud.crud.experience 4 2")),1),l("span",null,[i(s(e(t)("crud.crud.experience 4 3")),1),l("code",null,s(e(t)("crud.crud.experience 4 4")),1)])]),_:1}))]),_:1})]),_:1}),c(M,{class:"ba-operate-dialog select-table-dialog",modelValue:o.dialog.visible,"onUpdate:modelValue":a[11]||(a[11]=r=>o.dialog.visible=r),title:o.dialog.type=="sql"?e(t)("crud.crud.Please enter SQL"):e(t)("crud.crud.Please select a data table"),"destroy-on-close":!0},{footer:n(()=>[l("div",fe,[c(y,{onClick:a[9]||(a[9]=r=>o.dialog.visible=!1)},{default:n(()=>[i(s(p.$t("Cancel")),1)]),_:1}),U((u(),b(y,{loading:o.loading,onClick:a[10]||(a[10]=r=>v()),type:"primary"},{default:n(()=>[i(s(e(t)("Confirm")),1)]),_:1},8,["loading"])),[[C]]),o.successRecord?U((u(),b(y,{key:0,onClick:B,type:"success"},{default:n(()=>[i(s(e(t)("crud.crud.Start with the historical record")),1)]),_:1})),[[C]]):g("",!0)])]),default:n(()=>[c(K,{"label-width":140,onKeyup:a[8]||(a[8]=k(r=>v(),["enter"])),class:"select-table-form",ref_key:"formRef",ref:h,model:e(d).startData,rules:P},{default:n(()=>[o.dialog.type=="sql"?(u(),b(Q,{key:0,class:"sql-input",prop:"sql",ref_key:"sqlInputRef",ref:$,modelValue:e(d).startData.sql,"onUpdate:modelValue":a[3]||(a[3]=r=>e(d).startData.sql=r),type:"textarea",placeholder:e(t)("crud.crud.table create SQL"),rows:10,onKeyup:[a[4]||(a[4]=k(q(()=>{},["stop"]),["enter"])),a[5]||(a[5]=k(q(r=>v(),["ctrl"]),["enter"]))]},null,8,["modelValue","placeholder"])):o.dialog.type=="db"?(u(),R(z,{key:1},[c(L,{label:e(t)("Database connection"),modelValue:e(d).startData.databaseConnection,"onUpdate:modelValue":a[6]||(a[6]=r=>e(d).startData.databaseConnection=r),type:"remoteSelect","label-width":140,"block-help":e(t)("Database connection help"),"input-attr":{pk:"key",field:"key",remoteUrl:e(O),onChange:N}},null,8,["label","modelValue","block-help","input-attr"]),(u(),b(L,{label:e(t)("crud.crud.data sheet"),modelValue:e(d).startData.table,"onUpdate:modelValue":a[7]||(a[7]=r=>e(d).startData.table=r),type:"remoteSelect",key:e(d).startData.databaseConnection,placeholder:e(t)("crud.crud.Please select a data table"),"label-width":140,"block-help":e(t)("crud.crud.data sheet help"),"input-attr":{pk:"table",field:"comment",params:{connection:e(d).startData.databaseConnection,samePrefix:1,excludeTable:["area","token","captcha","admin_group_access","config","admin_log","user_money_log","user_score_log"]},remoteUrl:e(Z),onRow:T},prop:"table"},null,8,["label","modelValue","placeholder","block-help","input-attr"])),o.successRecord?(u(),b(x,{key:0,class:"success-record-alert",title:e(t)("crud.crud.The selected table has already generated records You are advised to start with historical records"),"show-icon":!0,closable:!1,type:"warning"},null,8,["title"])):g("",!0)],64)):g("",!0)]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),c(H,{modelValue:o.showLog,"onUpdate:modelValue":a[12]||(a[12]=r=>o.showLog=r)},null,8,["modelValue"])])])}}}),Se=ee(ge,[["__scopeId","data-v-730631b9"]]);export{Se as default};
