import{i as c,B as d}from"./index-Bu_rpr0j.js";import{e as m,aC as f,f as b,l,m as u}from"./vue-BZJL1-P9.js";import{_ as y}from"./index-KPShGsqr.js";const v=m({name:"formItem",props:{type:{type:String,required:!0,validator:e=>c.includes(e)},modelValue:{required:!0},inputAttr:{type:Object,default:()=>{}},blockHelp:{type:String,default:""},tip:[String,Object],attr:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},placeholder:{type:String,default:""},...f},emits:["update:modelValue"],setup(e,{emit:p}){const s=["type","modelValue","inputAttr","attr","data","placeholder"],a=b(()=>{const t=e.attr||{};for(const o in e){const n=e[o];!s.includes(o)&&(n||n===!1)&&(t[o]=n)}return t}),i=t=>{p("update:modelValue",t)},r={};if(r.default=()=>{let t=l(d,{type:e.type,attr:{placeholder:e.placeholder,...e.inputAttr,...e.data},modelValue:e.modelValue,"onUpdate:modelValue":i});return a.value.blockHelp?[t,l("div",{class:"block-help"},a.value.blockHelp)]:t},a.value.tip){const t=()=>{const o=typeof a.value.tip=="string"?{content:a.value.tip,placement:"top"}:a.value.tip;return l(u("el-tooltip"),o,{default:()=>[l("i",{class:"fa fal fa-question-circle"})]})};r.label=()=>l("span",{class:"ba-form-item-label"},[l("span",null,a.value.label),l("span",{class:"ba-form-item-label-tip"},[t()])])}return()=>l(u("el-form-item"),{class:"ba-input-item-"+e.type,...a.value},{...r})}}),h=y(v,[["__scopeId","data-v-cedb464b"]]);export{h as F};
