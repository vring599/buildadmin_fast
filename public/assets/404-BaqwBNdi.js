import{e as h,a0 as v,p as f,x as g,D as k,m as C,o as $,h as w,k as e,U as t,V as c,l as d,P as p,a1 as b,a2 as B}from"./vue-BZJL1-P9.js";import{_ as I}from"./index-KPShGsqr.js";const R=""+new URL("qr-CamScR9_.png",import.meta.url).href,_=s=>(b("data-v-1e5abc9c"),s=s(),B(),s),S={class:"page"},M={class:"container"},V=_(()=>e("div",{class:"font-h1"},":(",-1)),N={class:"tip"},T={class:"complete"},U={class:"percentage"},q={class:"details"},x=_(()=>e("div",{class:"qr-image"},[e("img",{src:R,alt:"QR Code"})],-1)),y={class:"stopcode"},D={class:"stopcode-text"},E={class:"stopcode-text"},L=h({__name:"404",setup(s){const u=v(),a=f(0);var n=null;function m(){a.value+=Math.floor(Math.random()*50),a.value>=100?(a.value=100,u.back()):r()}function r(){n=setTimeout(m,Math.random()*500+500)}return g(()=>{r()}),k(()=>{clearTimeout(n)}),(o,i)=>{const l=C("router-link");return $(),w("div",S,[e("div",M,[V,e("div",N,t(o.$t("404.problems tip")),1),e("div",T,[c(t(o.$t("Complete"))+" ",1),e("span",U,t(a.value),1),c("% ")]),e("div",q,[x,e("div",y,[e("div",D,t(o.$t("404.We will automatically return to the previous page when we are finished")),1),e("div",E,[d(l,{class:"stopcode-a",to:""},{default:p(()=>[e("span",{onClick:i[0]||(i[0]=P=>o.$router.back())},t(o.$t("404.Back to previous page")),1)]),_:1}),d(l,{class:"stopcode-a",to:"/"},{default:p(()=>[c(t(o.$t("404.Return to home page")),1)]),_:1})])])])])])}}}),j=I(L,[["__scopeId","data-v-1e5abc9c"]]);export{j as default};
