import{e as z,p as B,an as D,v as N,r as W,m,X as n,o as i,O as d,P as s,_ as g,h as $,V as f,U as b,s as e,k as v,j as y,l as r,$ as T,a7 as E,a8 as K,W as O}from"./vue-BZJL1-P9.js";import{F as p}from"./index-B3Hzgth0.js";import{e as R}from"./index-KPShGsqr.js";import{b as V}from"./validate-45bXqi5h.js";const q={class:"title"},G=z({__name:"popupForm",props:{card:{type:Object,required:!1}},setup(k){const c=R(),u=B(),o=D("baTable"),{t:l}=N.useI18n(),C=k,w=W({update_time:[V({name:"date",title:l("business.galleryimgs.update_time")})],create_time:[V({name:"date",title:l("business.galleryimgs.create_time")})]});return(A,a)=>{const x=m("el-form"),S=m("el-scrollbar"),_=m("el-button"),h=m("el-dialog"),F=n("drag"),I=n("zoom"),U=n("loading"),j=n("blur");return i(),d(h,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:s(()=>[g((i(),$("div",q,[f(b(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[F,[".ba-operate-dialog",".el-dialog__header"]],[I,".ba-operate-dialog"]])]),footer:s(()=>[v("div",{style:y("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[r(_,{onClick:a[6]||(a[6]=t=>e(o).toggleForm())},{default:s(()=>[f(b(e(l)("Cancel")),1)]),_:1}),g((i(),d(_,{loading:e(o).form.submitLoading,onClick:a[7]||(a[7]=t=>{e(o).form.items.card_id=C.card.id,e(o).onSubmit(u.value)}),type:"primary"},{default:s(()=>[f(b(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[j]])],4)]),default:s(()=>[g((i(),d(S,{class:"ba-table-form-scrollbar"},{default:s(()=>[v("div",{class:T(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:y(e(c).layout.shrink?"":"width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?O("",!0):(i(),d(x,{key:0,ref_key:"formRef",ref:u,onSubmit:a[4]||(a[4]=E(()=>{},["prevent"])),onKeyup:a[5]||(a[5]=K(t=>e(o).onSubmit(u.value),["enter"])),model:e(o).form.items,"label-position":e(c).layout.shrink?"top":"right","label-width":e(o).form.labelWidth+"px",rules:w},{default:s(()=>[r(p,{label:e(l)("business.galleryimgs.images"),type:"images",modelValue:e(o).form.items.images,"onUpdate:modelValue":a[0]||(a[0]=t=>e(o).form.items.images=t),prop:"images"},null,8,["label","modelValue"]),r(p,{label:e(l)("business.galleryimgs.images1"),type:"images",modelValue:e(o).form.items.images1,"onUpdate:modelValue":a[1]||(a[1]=t=>e(o).form.items.images1=t),prop:"images1"},null,8,["label","modelValue"]),r(p,{label:e(l)("business.galleryimgs.images2"),type:"images",modelValue:e(o).form.items.images2,"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).form.items.images2=t),prop:"images2"},null,8,["label","modelValue"]),r(p,{label:e(l)("business.galleryimgs.images3"),type:"images",modelValue:e(o).form.items.images3,"onUpdate:modelValue":a[3]||(a[3]=t=>e(o).form.items.images3=t),prop:"images3"},null,8,["label","modelValue"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[U,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{G as _};
