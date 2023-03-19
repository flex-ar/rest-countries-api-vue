import{o as n,c as i,a as e,t as p,b as f,F as b,r as y,i as x,w as V,v as S,u as A,d as q,e as F,f as h,g as _,h as j}from"./index-76f3c042.js";const N=["src"],B={class:"py-7 px-6"},E={class:"text-lg font-extrabold mb-5"},L={class:"mt-3 text-sm"},P={class:"mb-1"},R=e("b",{class:"font-extrabold"},"Population: ",-1),D={class:"mb-1"},H=e("b",{class:"font-extrabold"},"Region: ",-1),O={class:"mb-1"},z=e("b",{class:"font-extrabold"},"Capital: ",-1),K={__name:"SimpleCountryCard",props:{name:{type:String,required:!0},population:{type:Number,required:!0},region:{type:String,required:!0},capital:{type:String,default:"",required:!1},flag:{type:String,required:!0}},setup(a){return(l,s)=>(n(),i(b,null,[e("img",{src:a.flag,class:"w-[264px] h-[160px]"},null,8,N),e("div",B,[e("b",E,p(a.name),1),e("div",L,[e("p",P,[R,f(" "+p(a.population),1)]),e("p",D,[H,f(" "+p(a.region),1)]),e("p",O,[z,f(" "+p(a.capital),1)])])])],64))}},M={class:"relative"},Q=e("div",null,"Filter by Region",-1),T=e("div",null,"+",-1),U=[Q,T],G={class:"flex flex-col gap-2 absolute z-10 rounded-lg mt-1 p-5 bg-primary-light dark:bg-primary-dark font-semibold w-full shadow-md"},I={__name:"CountriesFilter",setup(a){const l=y(!1),{state:s}=x("state"),d=()=>l.value=!l.value,o=c=>{s.data=s.data.map(t=>({...t,isVisible:t.region===c}))},g=()=>{s.data=s.data.map(c=>({...c,isVisible:!0}))};return(c,t)=>(n(),i("div",M,[e("div",{onClick:d,class:"flex justify-between items-center bg-primary-light dark:bg-primary-dark shadow-md py-4 px-5 rounded-lg text-base font-semibold w-52 cursor-pointer"},U),V(e("div",G,[e("p",{onClick:g,class:"cursor-pointer"},"All word"),e("p",{onClick:t[0]||(t[0]=r=>o("Africa")),class:"cursor-pointer"},"Africa"),e("p",{onClick:t[1]||(t[1]=r=>o("Americas")),class:"cursor-pointer"}," America "),e("p",{onClick:t[2]||(t[2]=r=>o("Asia")),class:"cursor-pointer"},"Asia"),e("p",{onClick:t[3]||(t[3]=r=>o("Europe")),class:"cursor-pointer"},"Europe"),e("p",{onClick:t[4]||(t[4]=r=>o("Oceania")),class:"cursor-pointer"}," Oceania ")],512),[[S,l.value]])]))}},J={class:"flex bg-primary-light dark:bg-primary-dark shadow-md sm:w-2/5 w-full py-4 px-7 rounded-lg text-base font-semibold"},W=e("div",{class:"mr-4"},"🔎",-1),X=["textContent"],Y={__name:"CountrySearch",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(a,{emit:l}){return(s,d)=>(n(),i("div",J,[W,e("input",{onKeyup:d[0]||(d[0]=o=>l("update:modelValue",o.target.value)),textContent:p(a.modelValue),type:"text",class:"focus:outline-none bg-inherit w-full",placeholder:"Search for a country..."},null,40,X)]))}};const Z={class:"max-w-7xl m-auto mt-10 mb-2 px-4"},ee={class:"flex justify-between gap-y-9 sm:items-center sm:flex-row items-start flex-col"},te={key:0},se=e("div",{class:"w-20 h-20 m-auto my-40 border-t-4 border-primary-dark dark:border-primary-light rounded-full animate-spin"},null,-1),oe=[se],re={key:1},ae={key:2,class:"max-w-7xl m-auto py-10 px-4"},ne={class:"grid gap-16 justify-center"},ie=["onClick"],ce={__name:"HomePage",setup(a){const l=A(),{state:s,fetchCountries:d}=x("state"),o=y(""),g=r=>s.data.filter(({isVisible:m,name:u})=>m&&u.common.toLowerCase().includes(r)),c=q(()=>{if(!s.data)return[];const r=o.value.toLowerCase();return g(r)}),t=r=>l.push({name:"detail",params:{country:r}});return F(()=>{s.data===null&&d()}),(r,m)=>(n(),i(b,null,[e("div",Z,[e("div",ee,[h(Y,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=u=>o.value=u)},null,8,["modelValue"]),h(I)])]),_(s).loading?(n(),i("div",te,oe)):_(s).error?(n(),i("div",re,p(_(s).error),1)):(n(),i("div",ae,[e("ul",ne,[(n(!0),i(b,null,j(_(c),({name:u,population:v,region:k,capital:w,flags:C},$)=>(n(),i("li",{onClick:le=>t(u.common),key:$,class:"rounded-lg bg-primary-light dark:bg-primary-dark overflow-hidden cursor-pointer shadow-lg transition-[transform,box-shadow] hover:scale-105 hover:shadow-2xl"},[h(K,{name:u.common,population:v,region:k,capital:w,flag:C.png},null,8,["name","population","region","capital","flag"])],8,ie))),128))])]))],64))}};export{ce as default};