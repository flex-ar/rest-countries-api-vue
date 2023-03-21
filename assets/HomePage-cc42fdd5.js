import{o as d,c as u,a as e,t as _,b as x,F as k,r as g,i as $,w as R,v as j,d as C,e as V,u as S,f as F,g as w,h as y,j as O}from"./index-61cdc6df.js";const I=["src"],B={class:"py-7 px-6"},E={class:"text-lg font-extrabold mb-5"},L={class:"mt-3 text-sm"},N={class:"mb-1"},P=e("b",{class:"font-extrabold"},"Population: ",-1),q={class:"mb-1"},z=e("b",{class:"font-extrabold"},"Region: ",-1),D={class:"mb-1"},H=e("b",{class:"font-extrabold"},"Capital: ",-1),K={__name:"SimpleCountryCard",props:{country:{type:Object,required:!0}},setup(n){return(s,o)=>(d(),u(k,null,[e("img",{src:n.country.flags.png,class:"w-[264px] h-[160px]"},null,8,I),e("div",B,[e("b",E,_(n.country.name.common),1),e("div",L,[e("p",N,[P,x(" "+_(n.country.population),1)]),e("p",q,[z,x(" "+_(n.country.region),1)]),e("p",D,[H,x(" "+_(n.country.capital),1)])])])],64))}},M={class:"relative"},Q=e("div",null,"Filter by Region",-1),T=e("div",null,"+",-1),U=[Q,T],G={class:"flex flex-col gap-2 absolute z-10 rounded-lg mt-1 p-5 bg-primary-light dark:bg-primary-dark font-semibold w-full shadow-md"},J={__name:"CountriesFilter",setup(n){const s=g(!1),{state:o}=$("state"),i=()=>s.value=!s.value,a=l=>{var t;o.data=(t=o.data)==null?void 0:t.map(r=>({...r,isVisible:r.region===l}))},p=()=>{var l;o.data=(l=o.data)==null?void 0:l.map(t=>({...t,isVisible:!0}))};return(l,t)=>(d(),u("div",M,[e("div",{onClick:i,class:"flex justify-between items-center bg-primary-light dark:bg-primary-dark shadow-md py-4 px-5 rounded-lg text-base font-semibold w-52 cursor-pointer"},U),R(e("div",G,[e("p",{onClick:p,class:"cursor-pointer"},"All word"),e("p",{onClick:t[0]||(t[0]=r=>a("Africa")),class:"cursor-pointer"},"Africa"),e("p",{onClick:t[1]||(t[1]=r=>a("Americas")),class:"cursor-pointer"}," America "),e("p",{onClick:t[2]||(t[2]=r=>a("Asia")),class:"cursor-pointer"},"Asia"),e("p",{onClick:t[3]||(t[3]=r=>a("Europe")),class:"cursor-pointer"},"Europe"),e("p",{onClick:t[4]||(t[4]=r=>a("Oceania")),class:"cursor-pointer"}," Oceania ")],512),[[j,s.value]])]))}},W={class:"flex bg-primary-light dark:bg-primary-dark shadow-md sm:w-2/5 w-full py-4 px-7 rounded-lg text-base font-semibold"},X=e("div",{class:"mr-4"},"🔎",-1),Y=["textContent"],Z={__name:"CountrySearch",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(n,{emit:s}){return(o,i)=>(d(),u("div",W,[X,e("input",{onKeyup:i[0]||(i[0]=a=>s("update:modelValue",a.target.value)),textContent:_(n.modelValue),type:"text",class:"focus:outline-none bg-inherit w-full",placeholder:"Search for a country..."},null,40,Y)]))}},ee=(n,s)=>{const o=g(s),i=()=>o.value=s,a=g([]),p=C(()=>a.value[o.value-1]),l=(r,f)=>{const{isIntersecting:b}=r[0];if(b){if(o.value>=(n==null?void 0:n.length))return f.disconnect();f.disconnect(),o.value+=s}},t=new IntersectionObserver(l);return V(p,r=>{r!==void 0&&t.observe(r)}),{loaded:o,resetLoaded:i,itemsRef:a}};const te={class:"max-w-7xl m-auto mt-10 mb-2 px-4"},se={class:"flex justify-between gap-y-9 sm:items-center sm:flex-row items-start flex-col"},oe={key:0},re=e("div",{class:"w-20 h-20 m-auto my-40 border-t-4 border-primary-dark dark:border-primary-light rounded-full animate-spin"},null,-1),ne=[re],ae={key:1},ie={key:2,class:"max-w-7xl m-auto py-10 px-4"},le={class:"grid gap-16 justify-center"},ce=["onClick"],me={__name:"HomePage",setup(n){const{state:s,fetchCountries:o}=$("state"),i=g(""),a=S(),{loaded:p,resetLoaded:l,itemsRef:t}=ee(s.data,4*3),r=c=>{var h;return(h=s.data)==null?void 0:h.filter(({isVisible:m,name:v})=>m&&v.common.toLowerCase().includes(c))},f=C(()=>{if(!s.data)return[];const c=i.value.toLowerCase();return r(c)});V(f,l);const b=C(()=>{var c;return(c=f.value)==null?void 0:c.slice(0,p.value)}),A=c=>a.push({name:"detail",params:{country:c}});return F(()=>{s.data===null&&o()}),(c,h)=>(d(),u(k,null,[e("div",te,[e("div",se,[w(Z,{modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=m=>i.value=m)},null,8,["modelValue"]),w(J)])]),y(s).loading?(d(),u("div",oe,ne)):y(s).error?(d(),u("div",ae,_(y(s).error),1)):(d(),u("div",ie,[e("ul",le,[(d(!0),u(k,null,O(y(b),(m,v)=>(d(),u("li",{ref_for:!0,ref_key:"itemsRef",ref:t,onClick:de=>A(m.name.common),key:v,class:"rounded-lg bg-primary-light dark:bg-primary-dark overflow-hidden cursor-pointer shadow-lg transition-[transform,box-shadow] hover:scale-105 hover:shadow-2xl"},[w(K,{country:m},null,8,["country"])],8,ce))),128))])]))],64))}};export{me as default};