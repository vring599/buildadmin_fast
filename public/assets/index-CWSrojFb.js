import{j as h,z as B,A as w,_ as I,B as V}from"./index-KPShGsqr.js";import{e as S,r as T,f as g,h as s,k as i,U as p,s as u,a7 as j,Z as _,Y as k,V as F,$ as y,a9 as $,o as l,j as z,a1 as L,a2 as N,l as R,aa as D}from"./vue-BZJL1-P9.js";const x=o=>(L("data-v-c6505233"),o=o(),N(),o),E=["id"],U={key:0,class:"loading"},Y={key:1,class:"captcha-img-box"},A=["src","alt"],M=["onClick"],P={key:2,class:"captcha-prompt"},X={key:3,class:"captcha-prompt"},Z={class:"captcha-refresh-box"},q=x(()=>i("div",{class:"captcha-refresh-line captcha-refresh-line-l"},null,-1)),G=["title"],H=x(()=>i("div",{class:"captcha-refresh-line captcha-refresh-line-r"},null,-1)),J=S({__name:"index",props:{uuid:{default:""},callback:{type:Function,default:()=>{}},class:{default:""},unset:{type:Boolean,default:!1},error:{default:h.global.t("validate.The correct area is not clicked, please try again!")},success:{default:h.global.t("validate.Verification is successful!")}},setup(o){$(t=>({d12e9cce:C.value,"384b94fa":b.value,"91648b58":a.captcha.width,"189a9659":a.captcha.height}));const e=o,a=T({loading:!0,xy:[],tip:"",captcha:{id:"",text:"",base64:"",width:350,height:200}}),n=()=>{a.loading=!0,B(e.uuid).then(t=>{a.xy=[],a.tip="",a.loading=!1,a.captcha=t.data})},m=t=>{if(a.xy.length<a.captcha.text.length&&(a.xy.push(t.offsetX+","+t.offsetY),a.xy.length==a.captcha.text.length)){const d=[a.xy.join("-"),t.target.width,t.target.height].join(";");w(e.uuid,d,e.unset).then(()=>{a.tip=e.success,setTimeout(()=>{var c;(c=e.callback)==null||c.call(e,d),f()},1500)}).catch(()=>{a.tip=e.error,setTimeout(()=>{n()},1500)})}},v=t=>{a.xy.splice(t,1)},f=()=>{var t;(t=document.getElementById(e.uuid))==null||t.remove()},b=g(()=>(a.captcha.height+200)/2+"px"),C=g(()=>(a.captcha.width+24)/2+"px");return n(),(t,d)=>(l(),s("div",{id:t.uuid},[i("div",{class:y(["ba-click-captcha",e.class])},[a.loading?(l(),s("div",U,p(u(h).global.t("utils.Loading")),1)):(l(),s("div",Y,[i("img",{class:"captcha-img",onClick:d[0]||(d[0]=j(c=>m(c),["prevent"])),src:a.captcha.base64,alt:u(h).global.t("validate.Captcha loading failed, please click refresh button")},null,8,A),(l(!0),s(_,null,k(a.xy,(c,r)=>(l(),s("span",{key:r,class:"step",onClick:O=>v(r),style:z(`left:${parseFloat(c.split(",")[0])-13}px;top:${parseFloat(c.split(",")[1])-13}px`)},p(r+1),13,M))),128))])),a.tip?(l(),s("div",P,p(a.tip),1)):(l(),s("div",X,[F(p(u(h).global.t("validate.Please click"))+" ",1),(l(!0),s(_,null,k(a.captcha.text,(c,r)=>(l(),s("span",{key:r,class:y(a.xy.length>r?"clicaptcha-clicked":"")},p(c),3))),128))])),i("div",Z,[q,i("i",{class:"fa fa-refresh captcha-refresh-btn",title:u(h).global.t("Refresh"),onClick:n},null,8,G),H])],2),i("div",{class:"ba-layout-shade",onClick:f})],8,E))}}),K=I(J,[["__scopeId","data-v-c6505233"]]),aa=(o,e,a={})=>{let n=R(K,{uuid:o,callback:e,...a,key:V()});D(n,document.body),n=null};export{aa as c};
