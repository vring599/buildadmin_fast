import{e as I,p as $,ao as z,v as B,r as D,m as u,Y as d,o as s,P as p,Q as i,$ as f,h as N,W as _,V as c,s as e,k as V,j as k,l as r,a0 as W,a8 as b,a9 as y,X as j}from"./vue-DFhsJZqQ.js";import{F as n}from"./index-64RmlQoR.js";import{e as K}from"./index-CPy2hEef.js";import{b as v}from"./validate-BUeDMdsM.js";const T={class:"title"},X=I({__name:"popupForm",setup(E){const g=K(),m=$(),t=z("baTable"),{t:o}=B.useI18n(),w=D({user_id:[v({name:"number",title:o("quotation.compute.user_id")})],handletime:[v({name:"date",title:o("quotation.compute.handletime")})],createtime:[v({name:"date",title:o("quotation.compute.createtime")})]});return(M,l)=>{const C=u("el-form"),h=u("el-scrollbar"),q=u("el-button"),x=u("el-dialog"),S=d("drag"),P=d("zoom"),U=d("loading"),F=d("blur");return s(),p(x,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,width:"50%"},{header:i(()=>[f((s(),N("div",T,[_(c(e(t).form.operate?e(o)(e(t).form.operate):""),1)])),[[S,[".ba-operate-dialog",".el-dialog__header"]],[P,".ba-operate-dialog"]])]),footer:i(()=>[V("div",{style:k("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[r(q,{onClick:l[10]||(l[10]=a=>e(t).toggleForm())},{default:i(()=>[_(c(e(o)("Cancel")),1)]),_:1}),f((s(),p(q,{loading:e(t).form.submitLoading,onClick:l[11]||(l[11]=a=>e(t).onSubmit(m.value)),type:"primary"},{default:i(()=>[_(c(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[F]])],4)]),default:i(()=>[f((s(),p(h,{class:"ba-table-form-scrollbar"},{default:i(()=>[V("div",{class:W(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:k(e(g).layout.shrink?"":"width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?j("",!0):(s(),p(C,{key:0,ref_key:"formRef",ref:m,onSubmit:l[8]||(l[8]=b(()=>{},["prevent"])),onKeyup:l[9]||(l[9]=y(a=>e(t).onSubmit(m.value),["enter"])),model:e(t).form.items,"label-position":e(g).layout.shrink?"top":"right","label-width":e(t).form.labelWidth+"px",rules:w},{default:i(()=>[r(n,{label:e(o)("quotation.compute.user_id"),type:"number",prop:"user_id","input-attr":{step:1},modelValue:e(t).form.items.user_id,"onUpdate:modelValue":l[0]||(l[0]=a=>e(t).form.items.user_id=a),modelModifiers:{number:!0},placeholder:e(o)("Please input field",{field:e(o)("quotation.compute.user_id")})},null,8,["label","modelValue","placeholder"]),r(n,{label:e(o)("quotation.compute.quotation_sn"),type:"string",modelValue:e(t).form.items.quotation_sn,"onUpdate:modelValue":l[1]||(l[1]=a=>e(t).form.items.quotation_sn=a),prop:"quotation_sn",placeholder:e(o)("Please input field",{field:e(o)("quotation.compute.quotation_sn")})},null,8,["label","modelValue","placeholder"]),r(n,{label:e(o)("quotation.compute.inventory_files_type"),type:"select",modelValue:e(t).form.items.inventory_files_type,"onUpdate:modelValue":l[2]||(l[2]=a=>e(t).form.items.inventory_files_type=a),prop:"inventory_files_type","input-attr":{content:{0:e(o)("quotation.compute.inventory_files_type 0"),1:e(o)("quotation.compute.inventory_files_type 1"),2:e(o)("quotation.compute.inventory_files_type 2")}},placeholder:e(o)("Please select field",{field:e(o)("quotation.compute.inventory_files_type")})},null,8,["label","modelValue","input-attr","placeholder"]),r(n,{label:e(o)("quotation.compute.inventory_files_ids"),type:"string",modelValue:e(t).form.items.inventory_files_ids,"onUpdate:modelValue":l[3]||(l[3]=a=>e(t).form.items.inventory_files_ids=a),prop:"inventory_files_ids",placeholder:e(o)("Please input field",{field:e(o)("quotation.compute.inventory_files_ids")})},null,8,["label","modelValue","placeholder"]),r(n,{label:e(o)("quotation.compute.status"),type:"switch",modelValue:e(t).form.items.status,"onUpdate:modelValue":l[4]||(l[4]=a=>e(t).form.items.status=a),prop:"status","input-attr":{content:{0:e(o)("quotation.compute.status 0"),1:e(o)("quotation.compute.status 1"),2:e(o)("quotation.compute.status 2"),3:e(o)("quotation.compute.status 3")}}},null,8,["label","modelValue","input-attr"]),r(n,{label:e(o)("quotation.compute.remark"),type:"textarea",modelValue:e(t).form.items.remark,"onUpdate:modelValue":l[5]||(l[5]=a=>e(t).form.items.remark=a),prop:"remark","input-attr":{rows:3},onKeyup:[l[6]||(l[6]=y(b(()=>{},["stop"]),["enter"])),l[7]||(l[7]=y(b(a=>e(t).onSubmit(m.value),["ctrl"]),["enter"]))],placeholder:e(o)("Please input field",{field:e(o)("quotation.compute.remark")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[U,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{X as _};
