import{e as I,p as U,ao as z,v as B,r as N,m as d,Y as n,o as s,P as m,Q as r,$ as f,h as P,W as c,V as b,s as e,k as _,j as v,l as i,a0 as T,a8 as W,a9 as $,X as j}from"./vue-DFhsJZqQ.js";import{F as p}from"./index-64RmlQoR.js";import{e as D}from"./index-CPy2hEef.js";const E={class:"title"},L=I({__name:"popupForm",setup(K){const g=D(),u=U(),t=z("baTable"),{t:o}=B.useI18n(),h=N({title:[{required:!0,message:"请输入分类名称",trigger:"change"}]});return(M,l)=>{const V=d("el-form"),w=d("el-scrollbar"),y=d("el-button"),k=d("el-dialog"),C=n("drag"),x=n("zoom"),S=n("loading"),F=n("blur");return s(),m(k,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,width:"50%"},{header:r(()=>[f((s(),P("div",E,[c(b(e(t).form.operate?e(o)(e(t).form.operate):""),1)])),[[C,[".ba-operate-dialog",".el-dialog__header"]],[x,".ba-operate-dialog"]])]),footer:r(()=>[_("div",{style:v("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[i(y,{onClick:l[6]||(l[6]=a=>e(t).toggleForm())},{default:r(()=>[c(b(e(o)("Cancel")),1)]),_:1}),f((s(),m(y,{loading:e(t).form.submitLoading,onClick:l[7]||(l[7]=a=>e(t).onSubmit(u.value)),type:"primary"},{default:r(()=>[c(b(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[F]])],4)]),default:r(()=>[f((s(),m(w,{class:"ba-table-form-scrollbar"},{default:r(()=>[_("div",{class:T(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:v(e(g).layout.shrink?"":"width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?j("",!0):(s(),m(V,{key:0,ref_key:"formRef",ref:u,onSubmit:l[4]||(l[4]=W(()=>{},["prevent"])),onKeyup:l[5]||(l[5]=$(a=>e(t).onSubmit(u.value),["enter"])),model:e(t).form.items,"label-position":e(g).layout.shrink?"top":"right","label-width":e(t).form.labelWidth+"px",rules:h},{default:r(()=>[i(p,{label:e(o)("product.classify.pid"),prop:"pid",modelValue:e(t).form.items.pid,"onUpdate:modelValue":l[0]||(l[0]=a=>e(t).form.items.pid=a),type:"remoteSelect","input-attr":{params:{isTree:!0},pk:"classify.id",field:"title",remoteUrl:"/admin/product.Classify/index"},placeholder:e(o)("Please input field",{field:e(o)("product.classify.pid")})+",不填默认为顶级"},null,8,["label","modelValue","placeholder"]),i(p,{label:e(o)("product.classify.title"),type:"string",modelValue:e(t).form.items.title,"onUpdate:modelValue":l[1]||(l[1]=a=>e(t).form.items.title=a),prop:"title",placeholder:e(o)("Please input field",{field:e(o)("product.classify.title")})},null,8,["label","modelValue","placeholder"]),i(p,{label:e(o)("product.classify.status"),type:"switch",modelValue:e(t).form.items.status,"onUpdate:modelValue":l[2]||(l[2]=a=>e(t).form.items.status=a),prop:"status","input-attr":{content:{0:e(o)("product.classify.status 0"),1:e(o)("product.classify.status 1")}}},null,8,["label","modelValue","input-attr"]),i(p,{label:e(o)("product.classify.weigh"),type:"number",prop:"weigh","input-attr":{step:1},modelValue:e(t).form.items.weigh,"onUpdate:modelValue":l[3]||(l[3]=a=>e(t).form.items.weigh=a),modelModifiers:{number:!0},placeholder:e(o)("Please input field",{field:e(o)("product.classify.weigh")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[S,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{L as _};
