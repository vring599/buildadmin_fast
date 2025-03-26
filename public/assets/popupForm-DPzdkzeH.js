import{e as z,p as B,an as L,v as N,r as T,C as W,m as d,X as c,o as i,O as n,P as s,_ as v,h as Y,V as b,U as g,s as e,k as x,j as S,l as t,$ as K,a8 as w,W as k,a7 as A}from"./vue-BZJL1-P9.js";import{b as p,r as M}from"./validate-45bXqi5h.js";import{F as _}from"./index-B3Hzgth0.js";import{e as G,r as R,_ as O}from"./index-KPShGsqr.js";import"./index-Bu_rpr0j.js";import"./index-DkzA5vqp.js";const X={class:"title"},H=z({__name:"popupForm",setup(J){const U=G(),V=B(),l=L("baTable"),{t:o}=N.useI18n(),P=T({username:[p({name:"required",title:o("user.user.User name")}),p({name:"account"})],nickname:[p({name:"required",title:o("user.user.nickname")})],group_id:[p({name:"required",message:o("Please select field",{field:o("user.user.grouping")})})],email:[p({name:"email",title:o("user.user.email")})],mobile:[p({name:"mobile"})],password:[{validator:(f,r,m)=>{if(l.form.operate=="Add"){if(!r)return m(new Error(o("Please input field",{field:o("user.user.password")})))}else if(!r)return m();return M(r)?m():m(new Error(o("validate.Please enter the correct password")))},trigger:"blur"}]}),C=f=>{l.toggleForm(),R.push({name:f=="money"?"user/moneyLog":"user/scoreLog",query:{user_id:l.form.items.id}})};return W(()=>l.form.operate,f=>{P.password[0].required=f=="Add"}),(f,r)=>{const m=d("el-input"),u=d("el-form-item"),D=d("el-date-picker"),y=d("el-button"),E=d("el-form"),F=d("el-scrollbar"),$=d("el-dialog"),h=c("drag"),q=c("zoom"),I=c("loading"),j=c("blur");return i(),n($,{class:"ba-operate-dialog","close-on-click-modal":!1,"destroy-on-close":!0,"model-value":["Add","Edit"].includes(e(l).form.operate),onClose:e(l).toggleForm},{header:s(()=>[v((i(),Y("div",X,[b(g(e(l).form.operate?e(o)(e(l).form.operate):""),1)])),[[h,[".ba-operate-dialog",".el-dialog__header"]],[q,".ba-operate-dialog"]])]),footer:s(()=>[x("div",{style:S("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[t(y,{onClick:r[18]||(r[18]=a=>e(l).toggleForm(""))},{default:s(()=>[b(g(e(o)("Cancel")),1)]),_:1}),v((i(),n(y,{loading:e(l).form.submitLoading,onClick:r[19]||(r[19]=a=>e(l).onSubmit(V.value)),type:"primary"},{default:s(()=>[b(g(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[j]])],4)]),default:s(()=>[v((i(),n(F,{class:"ba-table-form-scrollbar"},{default:s(()=>[x("div",{class:K(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:S(e(U).layout.shrink?"":"width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?k("",!0):(i(),n(E,{key:0,ref_key:"formRef",ref:V,onKeyup:r[17]||(r[17]=w(a=>e(l).onSubmit(V.value),["enter"])),model:e(l).form.items,"label-position":e(U).layout.shrink?"top":"right","label-width":e(l).form.labelWidth+"px",rules:P},{default:s(()=>[t(u,{prop:"username",label:e(o)("user.user.User name")},{default:s(()=>[t(m,{modelValue:e(l).form.items.username,"onUpdate:modelValue":r[0]||(r[0]=a=>e(l).form.items.username=a),type:"string",placeholder:e(o)("Please input field",{field:e(o)("user.user.User name")+"("+e(o)("user.user.Login account")+")"})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,{prop:"nickname",label:e(o)("user.user.nickname")},{default:s(()=>[t(m,{modelValue:e(l).form.items.nickname,"onUpdate:modelValue":r[1]||(r[1]=a=>e(l).form.items.nickname=a),type:"string",placeholder:e(o)("Please input field",{field:e(o)("user.user.nickname")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(_,{type:"remoteSelect",label:e(o)("user.user.grouping"),modelValue:e(l).form.items.group_id,"onUpdate:modelValue":r[2]||(r[2]=a=>e(l).form.items.group_id=a),prop:"group_id",placeholder:e(o)("user.user.grouping"),"input-attr":{params:{isTree:!0,search:[{field:"status",val:"1",operator:"eq"}]},field:"name",remoteUrl:"/admin/user.Group/index"}},null,8,["label","modelValue","placeholder"]),t(_,{label:e(o)("user.user.head portrait"),type:"image",modelValue:e(l).form.items.avatar,"onUpdate:modelValue":r[3]||(r[3]=a=>e(l).form.items.avatar=a)},null,8,["label","modelValue"]),t(u,{prop:"email",label:e(o)("user.user.email")},{default:s(()=>[t(m,{modelValue:e(l).form.items.email,"onUpdate:modelValue":r[4]||(r[4]=a=>e(l).form.items.email=a),type:"string",placeholder:e(o)("Please input field",{field:e(o)("user.user.email")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,{prop:"mobile",label:e(o)("user.user.mobile")},{default:s(()=>[t(m,{modelValue:e(l).form.items.mobile,"onUpdate:modelValue":r[5]||(r[5]=a=>e(l).form.items.mobile=a),type:"string",placeholder:e(o)("Please input field",{field:e(o)("user.user.mobile")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(_,{label:e(o)("user.user.Gender"),modelValue:e(l).form.items.gender,"onUpdate:modelValue":r[6]||(r[6]=a=>e(l).form.items.gender=a),type:"radio","input-attr":{border:!0,content:{0:e(o)("Unknown"),1:e(o)("user.user.male"),2:e(o)("user.user.female")}}},null,8,["label","modelValue","input-attr"]),t(u,{label:e(o)("user.user.birthday")},{default:s(()=>[t(D,{class:"w100","value-format":"YYYY-MM-DD",modelValue:e(l).form.items.birthday,"onUpdate:modelValue":r[7]||(r[7]=a=>e(l).form.items.birthday=a),type:"date",placeholder:e(o)("Please select field",{field:e(o)("user.user.birthday")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(l).form.operate=="Edit"?(i(),n(u,{key:0,label:e(o)("user.user.balance")},{default:s(()=>[t(m,{modelValue:e(l).form.items.money,"onUpdate:modelValue":r[9]||(r[9]=a=>e(l).form.items.money=a),readonly:""},{append:s(()=>[t(y,{onClick:r[8]||(r[8]=a=>C("money"))},{default:s(()=>[b(g(e(o)("user.user.Adjustment balance")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):k("",!0),e(l).form.operate=="Edit"?(i(),n(u,{key:1,label:e(o)("user.user.integral")},{default:s(()=>[t(m,{modelValue:e(l).form.items.score,"onUpdate:modelValue":r[11]||(r[11]=a=>e(l).form.items.score=a),readonly:""},{append:s(()=>[t(y,{onClick:r[10]||(r[10]=a=>C("score"))},{default:s(()=>[b(g(e(o)("user.user.Adjust integral")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):k("",!0),t(u,{prop:"password",label:e(o)("user.user.password")},{default:s(()=>[t(m,{modelValue:e(l).form.items.password,"onUpdate:modelValue":r[12]||(r[12]=a=>e(l).form.items.password=a),type:"password",placeholder:e(l).form.operate=="Add"?e(o)("Please input field",{field:e(o)("user.user.password")}):e(o)("user.user.Please leave blank if not modified")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,{prop:"motto",label:e(o)("user.user.Personal signature")},{default:s(()=>[t(m,{onKeyup:[r[13]||(r[13]=w(A(()=>{},["stop"]),["enter"])),r[14]||(r[14]=w(A(a=>e(l).onSubmit(V.value),["ctrl"]),["enter"]))],modelValue:e(l).form.items.motto,"onUpdate:modelValue":r[15]||(r[15]=a=>e(l).form.items.motto=a),type:"textarea",placeholder:e(o)("Please input field",{field:e(o)("user.user.Personal signature")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(_,{label:e(o)("State"),modelValue:e(l).form.items.status,"onUpdate:modelValue":r[16]||(r[16]=a=>e(l).form.items.status=a),type:"radio","input-attr":{border:!0,content:{disable:e(o)("Disable"),enable:e(o)("Enable")}}},null,8,["label","modelValue","input-attr"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[I,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}}),ae=O(H,[["__scopeId","data-v-f64f9e0d"]]);export{ae as default};
