import{e as z,p as B,ao as D,v as N,r as W,m,Y as n,o as r,P as u,Q as i,$ as f,h as $,W as b,V as v,s as e,k as c,j as V,l as s,a0 as P,a8 as T,a9 as E,X as K}from"./vue-DFhsJZqQ.js";import{F as d}from"./index-64RmlQoR.js";import{e as M}from"./index-CPy2hEef.js";import{b as y}from"./validate-BUeDMdsM.js";const R={class:"title"},X=z({__name:"popupForm",props:{card:{type:Object,required:!1}},setup(w){const g=M(),p=B(),o=D("baTable"),{t:l}=N.useI18n(),h=w,k=W({update_time:[y({name:"date",title:l("business.video.update_time")})],create_time:[y({name:"date",title:l("business.video.create_time")})]});return(q,t)=>{const C=m("el-form"),x=m("el-scrollbar"),_=m("el-button"),S=m("el-dialog"),F=n("drag"),I=n("zoom"),U=n("loading"),j=n("blur");return r(),u(S,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:i(()=>[f((r(),$("div",R,[b(v(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[F,[".ba-operate-dialog",".el-dialog__header"]],[I,".ba-operate-dialog"]])]),footer:i(()=>[c("div",{style:V("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[s(_,{onClick:t[7]||(t[7]=a=>e(o).toggleForm())},{default:i(()=>[b(v(e(l)("Cancel")),1)]),_:1}),f((r(),u(_,{loading:e(o).form.submitLoading,onClick:t[8]||(t[8]=a=>{e(o).form.items.card_id=h.card.id,e(o).onSubmit(p.value)}),type:"primary"},{default:i(()=>[b(v(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[j]])],4)]),default:i(()=>[f((r(),u(x,{class:"ba-table-form-scrollbar"},{default:i(()=>[c("div",{class:P(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:V(e(g).layout.shrink?"":"width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?K("",!0):(r(),u(C,{key:0,ref_key:"formRef",ref:p,onSubmit:t[5]||(t[5]=T(()=>{},["prevent"])),onKeyup:t[6]||(t[6]=E(a=>e(o).onSubmit(p.value),["enter"])),model:e(o).form.items,"label-position":e(g).layout.shrink?"top":"right","label-width":e(o).form.labelWidth+"px",rules:k},{default:i(()=>[s(d,{label:e(l)("business.video.title"),type:"string",modelValue:e(o).form.items.title,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).form.items.title=a),prop:"title",placeholder:e(l)("Please input field",{field:e(l)("business.video.title")})},null,8,["label","modelValue","placeholder"]),s(d,{label:e(l)("business.video.weigh"),type:"number",prop:"weigh","input-attr":{step:1},modelValue:e(o).form.items.weigh,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).form.items.weigh=a),modelModifiers:{number:!0},placeholder:e(l)("Please input field",{field:e(l)("business.video.weigh")})},null,8,["label","modelValue","placeholder"]),s(d,{label:e(l)("business.video.status"),type:"switch",modelValue:e(o).form.items.status,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).form.items.status=a),prop:"status","input-attr":{content:{0:e(l)("business.video.status 0"),1:e(l)("business.video.status 1")}}},null,8,["label","modelValue","input-attr"]),s(d,{label:e(l)("business.video.video_bg_img"),type:"image",modelValue:e(o).form.items.video_bg_img,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).form.items.video_bg_img=a),prop:"video_bg_img"},null,8,["label","modelValue"]),s(d,{label:e(l)("business.video.video_url"),type:"file",modelValue:e(o).form.items.video_url,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).form.items.video_url=a),prop:"video_url"},null,8,["label","modelValue"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[U,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{X as _};
