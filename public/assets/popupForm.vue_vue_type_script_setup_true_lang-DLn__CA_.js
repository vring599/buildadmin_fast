import{e as B,p as D,ao as N,v as P,r as U,m,Y as d,o as i,P as p,Q as r,$ as f,h as W,W as c,V as b,s as e,k as y,j as w,l as s,a0 as j,a8 as g,a9 as v,X as K}from"./vue-DFhsJZqQ.js";import{F as u}from"./index-64RmlQoR.js";import{e as R}from"./index-CPy2hEef.js";import{b as h}from"./validate-BUeDMdsM.js";const T={class:"title"},X=B({__name:"popupForm",setup(E){const _=R(),n=D(),t=N("baTable"),{t:l}=P.useI18n(),k=U({content:[h({name:"editorRequired",title:l("articles.content")})],createtime:[h({name:"date",title:l("articles.createtime")})]});return(M,o)=>{const C=m("el-form"),x=m("el-scrollbar"),V=m("el-button"),S=m("el-dialog"),F=d("drag"),I=d("zoom"),$=d("loading"),z=d("blur");return i(),p(S,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,width:"50%"},{header:r(()=>[f((i(),W("div",T,[c(b(e(t).form.operate?e(l)(e(t).form.operate):""),1)])),[[F,[".ba-operate-dialog",".el-dialog__header"]],[I,".ba-operate-dialog"]])]),footer:r(()=>[y("div",{style:w("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[s(V,{onClick:o[8]||(o[8]=a=>e(t).toggleForm())},{default:r(()=>[c(b(e(l)("Cancel")),1)]),_:1}),f((i(),p(V,{loading:e(t).form.submitLoading,onClick:o[9]||(o[9]=a=>e(t).onSubmit(n.value)),type:"primary"},{default:r(()=>[c(b(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:r(()=>[f((i(),p(x,{class:"ba-table-form-scrollbar"},{default:r(()=>[y("div",{class:j(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:w(e(_).layout.shrink?"":"width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?K("",!0):(i(),p(C,{key:0,ref_key:"formRef",ref:n,onSubmit:o[6]||(o[6]=g(()=>{},["prevent"])),onKeyup:o[7]||(o[7]=v(a=>e(t).onSubmit(n.value),["enter"])),model:e(t).form.items,"label-position":e(_).layout.shrink?"top":"right","label-width":e(t).form.labelWidth+"px",rules:k},{default:r(()=>[s(u,{label:e(l)("articles.title"),type:"string",modelValue:e(t).form.items.title,"onUpdate:modelValue":o[0]||(o[0]=a=>e(t).form.items.title=a),prop:"title",placeholder:e(l)("Please input field",{field:e(l)("articles.title")})},null,8,["label","modelValue","placeholder"]),s(u,{label:e(l)("articles.content"),type:"editor",modelValue:e(t).form.items.content,"onUpdate:modelValue":o[1]||(o[1]=a=>e(t).form.items.content=a),prop:"content",onKeyup:[o[2]||(o[2]=v(g(()=>{},["stop"]),["enter"])),o[3]||(o[3]=v(g(a=>e(t).onSubmit(n.value),["ctrl"]),["enter"]))],placeholder:e(l)("Please input field",{field:e(l)("articles.content")})},null,8,["label","modelValue","placeholder"]),s(u,{label:e(l)("articles.weigh"),type:"number",prop:"weigh","input-attr":{step:1},modelValue:e(t).form.items.weigh,"onUpdate:modelValue":o[4]||(o[4]=a=>e(t).form.items.weigh=a),modelModifiers:{number:!0},placeholder:e(l)("Please input field",{field:e(l)("articles.weigh")})},null,8,["label","modelValue","placeholder"]),s(u,{label:e(l)("articles.status"),type:"switch",modelValue:e(t).form.items.status,"onUpdate:modelValue":o[5]||(o[5]=a=>e(t).form.items.status=a),prop:"status","input-attr":{content:{0:e(l)("articles.status 0"),1:e(l)("articles.status 1")}}},null,8,["label","modelValue","input-attr"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[$,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{X as _};
