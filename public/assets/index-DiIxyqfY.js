import{j as h,z as B,A as w,_ as I,B as V}from"./index-CPy2hEef.js";import{e as S,r as T,f as _,h as s,k as i,V as p,s as u,a8 as j,_ as g,Z as k,W as F,a0 as y,aa as z,o as l,j as L,a2 as N,a3 as R,l as $,ab as D}from"./vue-DFhsJZqQ.js";const x=o=>(N("data-v-c6505233"),o=o(),R(),o),E=["id"],A={key:0,class:"loading"},M={key:1,class:"captcha-img-box"},P=["src","alt"],U=["onClick"],W={key:2,class:"captcha-prompt"},X={key:3,class:"captcha-prompt"},Y={class:"captcha-refresh-box"},Z=x(()=>i("div",{class:"captcha-refresh-line captcha-refresh-line-l"},null,-1)),q=["title"],G=x(()=>i("div",{class:"captcha-refresh-line captcha-refresh-line-r"},null,-1)),H=S({__name:"index",props:{uuid:{default:""},callback:{type:Function,default:()=>{}},class:{default:""},unset:{type:Boolean,default:!1},error:{default:h.global.t("validate.The correct area is not clicked, please try again!")},success:{default:h.global.t("validate.Verification is successful!")}},setup(o){z(t=>({d12e9cce:C.value,"384b94fa":v.value,"91648b58":a.captcha.width,"189a9659":a.captcha.height}));const e=o,a=T({loading:!0,xy:[],tip:"",captcha:{id:"",text:"",base64:"",width:350,height:200}}),n=()=>{a.loading=!0,B(e.uuid).then(t=>{a.xy=[],a.tip="",a.loading=!1,a.captcha=t.data})},m=t=>{if(a.xy.length<a.captcha.text.length&&(a.xy.push(t.offsetX+","+t.offsetY),a.xy.length==a.captcha.text.length)){const d=[a.xy.join("-"),t.target.width,t.target.height].join(";");w(e.uuid,d,e.unset).then(()=>{a.tip=e.success,setTimeout(()=>{var c;(c=e.callback)==null||c.call(e,d),f()},1500)}).catch(()=>{a.tip=e.error,setTimeout(()=>{n()},1500)})}},b=t=>{a.xy.splice(t,1)},f=()=>{var t;(t=document.getElementById(e.uuid))==null||t.remove()},v=_(()=>(a.captcha.height+200)/2+"px"),C=_(()=>(a.captcha.width+24)/2+"px");return n(),(t,d)=>(l(),s("div",{id:t.uuid},[i("div",{class:y(["ba-click-captcha",e.class])},[a.loading?(l(),s("div",A,p(u(h).global.t("utils.Loading")),1)):(l(),s("div",M,[i("img",{class:"captcha-img",onClick:d[0]||(d[0]=j(c=>m(c),["prevent"])),src:a.captcha.base64,alt:u(h).global.t("validate.Captcha loading failed, please click refresh button")},null,8,P),(l(!0),s(g,null,k(a.xy,(c,r)=>(l(),s("span",{key:r,class:"step",onClick:K=>b(r),style:L(`left:${parseFloat(c.split(",")[0])-13}px;top:${parseFloat(c.split(",")[1])-13}px`)},p(r+1),13,U))),128))])),a.tip?(l(),s("div",W,p(a.tip),1)):(l(),s("div",X,[F(p(u(h).global.t("validate.Please click"))+" ",1),(l(!0),s(g,null,k(a.captcha.text,(c,r)=>(l(),s("span",{key:r,class:y(a.xy.length>r?"clicaptcha-clicked":"")},p(c),3))),128))])),i("div",Y,[Z,i("i",{class:"fa fa-refresh captcha-refresh-btn",title:u(h).global.t("Refresh"),onClick:n},null,8,q),G])],2),i("div",{class:"ba-layout-shade",onClick:f})],8,E))}}),J=I(H,[["__scopeId","data-v-c6505233"]]),aa=(o,e,a={})=>{let n=$(J,{uuid:o,callback:e,...a,key:V()});D(n,document.body),n=null};export{aa as c};
