import{S as q,i as F,s as N,e as h,k as E,t as V,c as M,a as B,d as m,m as T,h as j,b as n,L as z,g,J as k,K as U,l as S,q as L,o as C,M as Q,n as G,p as J,N as W,w as X,x as Y,y as Z,B as x}from"./vendor-d7306fc4.js";import{d as $}from"./data-b0732e84.js";function ee(s){let l,a,e,t,c,d,r,f,w,v,o,p,D,y;return{c(){l=h("div"),a=h("div"),e=h("button"),t=h("img"),d=E(),r=h("div"),f=h("a"),w=V("Download"),o=E(),p=h("a"),D=V("Details"),this.h()},l(_){l=M(_,"DIV",{class:!0});var i=B(l);a=M(i,"DIV",{class:!0});var b=B(a);e=M(b,"BUTTON",{});var u=B(e);t=M(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(m),b.forEach(m),d=T(i),r=M(i,"DIV",{class:!0});var A=B(r);f=M(A,"A",{download:!0,href:!0,class:!0});var I=B(f);w=j(I,"Download"),I.forEach(m),o=T(A),p=M(A,"A",{href:!0,class:!0});var R=B(p);D=j(R,"Details"),R.forEach(m),A.forEach(m),i.forEach(m),this.h()},h(){n(t,"class","w-full border-2 border-stone-800 rounded-t-lg border-b-0"),z(t.src,c=s[0])||n(t,"src",c),n(t,"alt",s[1]),n(a,"class","h-0 w-[100%] pb-[100%]"),n(f,"download",""),n(f,"href",v="/"+s[2]),n(f,"class","w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-bl-lg border-r border-stone-800 text-white"),n(p,"href",y="/"+s[3]),n(p,"class","w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-br-lg border-l border-stone-800 text-white"),n(r,"class","flex rounded-b-lg border-2 border-stone-800 bg-black"),n(l,"class","sm:max-w-sm max-w-[18rem] rounded-lg overflow-hidden shadow-lg")},m(_,i){g(_,l,i),k(l,a),k(a,e),k(e,t),k(l,d),k(l,r),k(r,f),k(f,w),k(r,o),k(r,p),k(p,D)},p(_,[i]){i&1&&!z(t.src,c=_[0])&&n(t,"src",c),i&2&&n(t,"alt",_[1]),i&4&&v!==(v="/"+_[2])&&n(f,"href",v),i&8&&y!==(y="/"+_[3])&&n(p,"href",y)},i:U,o:U,d(_){_&&m(l)}}}function te(s,l,a){let{imageURL:e}=l,{imageAltText:t}=l,{downloadLink:c}=l,{detailsLink:d}=l;return s.$$set=r=>{"imageURL"in r&&a(0,e=r.imageURL),"imageAltText"in r&&a(1,t=r.imageAltText),"downloadLink"in r&&a(2,c=r.downloadLink),"detailsLink"in r&&a(3,d=r.detailsLink)},[e,t,c,d]}class le extends q{constructor(l){super();F(this,l,te,ee,N,{imageURL:0,imageAltText:1,downloadLink:2,detailsLink:3})}}function K(s,l,a){const e=s.slice();return e[1]=l[a],e}function oe(s){let l,a,e=(s[1].type===s[0]||s[0]==="all")&&O(s);return{c(){e&&e.c(),l=S()},l(t){e&&e.l(t),l=S()},m(t,c){e&&e.m(t,c),g(t,l,c),a=!0},p(t,c){t[1].type===t[0]||t[0]==="all"?e?(e.p(t,c),c&1&&L(e,1)):(e=O(t),e.c(),L(e,1),e.m(l.parentNode,l)):e&&(G(),C(e,1,1,()=>{e=null}),J())},i(t){a||(L(e),a=!0)},o(t){C(e),a=!1},d(t){e&&e.d(t),t&&m(l)}}}function O(s){let l,a;return l=new le({props:{imageURL:s[1].image_name,imageAltText:s[1].endpoint,downloadLink:s[1].file_name,detailsLink:s[1].endpoint}}),{c(){X(l.$$.fragment)},l(e){Y(l.$$.fragment,e)},m(e,t){Z(l,e,t),a=!0},p:U,i(e){a||(L(l.$$.fragment,e),a=!0)},o(e){C(l.$$.fragment,e),a=!1},d(e){x(l,e)}}}function H(s){let l,a,e=s[1].hidden!==!0&&oe(s);return{c(){e&&e.c(),l=S()},l(t){e&&e.l(t),l=S()},m(t,c){e&&e.m(t,c),g(t,l,c),a=!0},p(t,c){t[1].hidden!==!0&&e.p(t,c)},i(t){a||(L(e),a=!0)},o(t){C(e),a=!1},d(t){e&&e.d(t),t&&m(l)}}}function re(s){let l,a,e,t,c,d,r,f,w,v;return document.title=l=(s[0].charAt(0).toUpperCase()+s[0].slice(1)+"s").replace("Miscs","Misc Models"),{c(){a=E(),e=h("meta"),c=E(),d=h("meta"),f=E(),w=h("meta"),this.h()},l(o){a=T(o),e=M(o,"META",{content:!0,property:!0}),c=T(o),d=M(o,"META",{name:!0,content:!0}),f=T(o),w=M(o,"META",{content:!0,property:!0}),this.h()},h(){n(e,"content",t=(s[0].charAt(0).toUpperCase()+s[0].slice(1)+"s").replace("Miscs","Misc Models")),n(e,"property","og:title"),n(d,"name","description"),n(d,"content",r=`Download Bobbie's Custom ${(s[0].charAt(0).toUpperCase()+s[0].slice(1)+"s").replace("Miscs","Misc Models")} for Beat Saber.`),n(w,"content",v="Download Bobbie's Custom "+(s[0].charAt(0).toUpperCase()+s[0].slice(1)+"s").replace("Miscs","Misc Models")+" for Beat Saber."),n(w,"property","og:description")},m(o,p){g(o,a,p),g(o,e,p),g(o,c,p),g(o,d,p),g(o,f,p),g(o,w,p)},p(o,p){p&1&&l!==(l=(o[0].charAt(0).toUpperCase()+o[0].slice(1)+"s").replace("Miscs","Misc Models"))&&(document.title=l),p&1&&t!==(t=(o[0].charAt(0).toUpperCase()+o[0].slice(1)+"s").replace("Miscs","Misc Models"))&&n(e,"content",t),p&1&&r!==(r=`Download Bobbie's Custom ${(o[0].charAt(0).toUpperCase()+o[0].slice(1)+"s").replace("Miscs","Misc Models")} for Beat Saber.`)&&n(d,"content",r),p&1&&v!==(v="Download Bobbie's Custom "+(o[0].charAt(0).toUpperCase()+o[0].slice(1)+"s").replace("Miscs","Misc Models")+" for Beat Saber.")&&n(w,"content",v)},d(o){o&&m(a),o&&m(e),o&&m(c),o&&m(d),o&&m(f),o&&m(w)}}}function ae(s){let l,a,e,t,c,d;return{c(){l=E(),a=h("meta"),e=E(),t=h("meta"),c=E(),d=h("meta"),this.h()},l(r){l=T(r),a=M(r,"META",{name:!0,content:!0}),e=T(r),t=M(r,"META",{content:!0,property:!0}),c=T(r),d=M(r,"META",{content:!0,property:!0}),this.h()},h(){document.title="Bobbie's Model Site",n(a,"name","description"),n(a,"content","Download Bobbie's model packs, notes, walls, and more!"),n(t,"content","Bobbie's Model Site"),n(t,"property","og:title"),n(d,"content","Download Bobbie's model packs, notes, walls, and more!"),n(d,"property","og:description")},m(r,f){g(r,l,f),g(r,a,f),g(r,e,f),g(r,t,f),g(r,c,f),g(r,d,f)},p:U,d(r){r&&m(l),r&&m(a),r&&m(e),r&&m(t),r&&m(c),r&&m(d)}}}function ie(s){let l,a,e,t,c,d,r,f,w,v=P,o=[];for(let i=0;i<v.length;i+=1)o[i]=H(K(s,v,i));const p=i=>C(o[i],1,1,()=>{o[i]=null});function D(i,b){return i[0]=="all"?ae:re}let y=D(s),_=y(s);return{c(){l=h("div");for(let i=0;i<o.length;i+=1)o[i].c();a=E(),e=h("meta"),t=h("meta"),_.c(),c=h("meta"),d=h("meta"),r=h("meta"),f=h("meta"),this.h()},l(i){l=M(i,"DIV",{class:!0});var b=B(l);for(let A=0;A<o.length;A+=1)o[A].l(b);b.forEach(m),a=T(i);const u=Q('[data-svelte="svelte-pzw6bp"]',document.head);e=M(u,"META",{charset:!0}),t=M(u,"META",{name:!0,content:!0}),_.l(u),c=M(u,"META",{content:!0,property:!0}),d=M(u,"META",{content:!0,property:!0}),r=M(u,"META",{name:!0,content:!0}),f=M(u,"META",{name:!0,value:!0}),u.forEach(m),this.h()},h(){n(l,"class","grid mx-auto w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-[90%] 2xl:w-[75%] pt-32 pb-0 gap-8 container"),n(e,"charset","utf-8"),n(t,"name","viewport"),n(t,"content","width=device-width,initial-scale=1"),n(c,"content","https://bobbie.dev/bobbie.png"),n(c,"property","og:image"),n(d,"content","bobbie.dev"),n(d,"property","og:site_name"),n(r,"name","theme-color"),n(r,"content","#96e3ff"),n(f,"name","twitter:card"),n(f,"value","summary")},m(i,b){g(i,l,b);for(let u=0;u<o.length;u+=1)o[u].m(l,null);g(i,a,b),k(document.head,e),k(document.head,t),_.m(document.head,null),k(document.head,c),k(document.head,d),k(document.head,r),k(document.head,f),w=!0},p(i,[b]){if(b&1){v=P;let u;for(u=0;u<v.length;u+=1){const A=K(i,v,u);o[u]?(o[u].p(A,b),L(o[u],1)):(o[u]=H(A),o[u].c(),L(o[u],1),o[u].m(l,null))}for(G(),u=v.length;u<o.length;u+=1)p(u);J()}y===(y=D(i))&&_?_.p(i,b):(_.d(1),_=y(i),_&&(_.c(),_.m(c.parentNode,c)))},i(i){if(!w){for(let b=0;b<v.length;b+=1)L(o[b]);w=!0}},o(i){o=o.filter(Boolean);for(let b=0;b<o.length;b+=1)C(o[b]);w=!1},d(i){i&&m(l),W(o,i),i&&m(a),m(e),m(t),_.d(i),m(c),m(d),m(r),m(f)}}}const P=$;function ne(s,l,a){let{modelFiltering:e}=l;return s.$$set=t=>{"modelFiltering"in t&&a(0,e=t.modelFiltering)},[e]}class ue extends q{constructor(l){super();F(this,l,ne,ie,N,{modelFiltering:0})}}export{ue as M};
