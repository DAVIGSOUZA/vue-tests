(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6baf7168"],{"1dde":function(t,e,a){var n=a("d039"),i=a("b622"),s=a("2d00"),r=i("species");t.exports=function(t){return s>=51||!n((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"4de4":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").filter,s=a("1dde"),r=s("filter");n({target:"Array",proto:!0,forced:!r},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,a){var n=a("861d"),i=a("e8b5"),s=a("b622"),r=s("species");t.exports=function(t,e){var a;return i(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?n(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"7c08":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showFilter?a("div",{staticClass:"filter-wrapper p-3"},[a("p",{staticClass:"title"},[t._v("FILTRE POR")]),a("p",{staticClass:"subtitle mb-0"},[t._v("CATEGORIAS")]),a("ul",{staticClass:"mb-5"},t._l(t.categories,(function(e){return a("li",{key:e.id,staticClass:"pt-3"},[a("router-link",{staticClass:"text-muted filter-button",attrs:{to:{name:"Category",params:{path:e.path}}}},[a("span",[t._v(" "+t._s(e.name)+" ")])])],1)})),0),a("p",{staticClass:"subtitle mb-0"},[t._v(" CORES ")]),a("div",{staticClass:"d-flex flex-wrap mb-5"},t._l(t.colorFilterOptions,(function(e){return a("button",{key:e.name,staticClass:"color-option m-1",style:{"background-color":e.value},on:{click:function(a){return t.setFilter(e.name,"color")}}})})),0),a("p",{staticClass:"subtitle mb-0"},[t._v(" GÊNERO ")]),a("ul",[a("li",{staticClass:"text-muted filter-button pt-3",on:{click:function(e){return t.setFilter("Masculina","gender")}}},[t._v(" Masculino ")]),a("li",{staticClass:"text-muted filter-button pt-3",on:{click:function(e){return t.setFilter("Feminina","gender")}}},[t._v(" Feminino ")])])]):a("nav",{staticClass:"nav-wrapper"},[a("ul",[a("li",{staticClass:"pt-3"},[a("router-link",{staticClass:"nav-button",attrs:{to:{name:"Home"}}},[a("span",[t._v(" Página Inicial ")])])],1),t._l(t.categories,(function(e){return a("li",{key:e.id,staticClass:"pt-3"},[a("router-link",{staticClass:"nav-button",attrs:{to:{name:"Category",params:{path:e.path}}}},[a("span",[t._v(" "+t._s(e.name)+" ")])])],1)})),a("li",{staticClass:"pt-3"},[a("router-link",{staticClass:"nav-button",attrs:{to:{name:"Contact"}}},[a("span",[t._v(" Contato ")])])],1)],2)])])},i=[],s=(a("4de4"),a("bc3a")),r=a.n(s),o=a("025e"),c={name:"side-bar",props:{showFilter:Boolean},data:function(){return{categories:[],colorFilterOptions:o["c"],filter:{}}},mounted:function(){var t=this;r.a.get("".concat(o["a"],"list")).then((function(e){t.categories=e.data.items}))},methods:{setFilter:function(t,e){this.filter={value:t,type:e},this.$emit("update:filter",this.filter)}}},l=c,u=(a("7c89"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"158f66aa",null);e["a"]=d.exports},"7c89":function(t,e,a){"use strict";a("d8fc")},b727:function(t,e,a){var n=a("0366"),i=a("44ad"),s=a("7b0b"),r=a("50c4"),o=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,d=6==t,p=7==t,f=5==t||d;return function(m,v,b,C){for(var h,_,g=s(m),k=i(g),x=n(v,b,3),y=r(k.length),w=0,F=C||o,A=e?F(m,y):a||p?F(m,0):void 0;y>w;w++)if((f||w in k)&&(h=k[w],_=x(h,w,g),t))if(e)A[w]=_;else if(_)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:c.call(A,h)}else switch(t){case 4:return!1;case 7:c.call(A,h)}return d?-1:l||u?u:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home d-flex mb-3"},[a("SideBar",{staticClass:"side-bar d-none d-md-block"}),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper flex-fill"},[a("div",{staticClass:"banner mb-3"}),a("section",[a("h3",[t._v(" Seja Bem Vindo!")]),a("p",[t._v(" Lojas virtuais seguras, com design focado na experiência do usuário e integração com qualquer sistema externo, fazem parte do portfólio da Webjump: agência especializada no desenvolvimento de eCommerce personalizado para clientes middle market e enterprise, principalmente. ")]),a("p",[t._v(" Prezando por qualidade, transparência e comunicação assertiva em todas as fases dos projetos desenvolvidos, a empresa se destaca pela metodologia ágil que utiliza, buscando customizar e alinhar a plataforma às necessidades das marcas e dos clientes. ")]),a("p",[t._v(" Atualmente, a Webjump é a principal Magento Partner na América Latina e está em constante aprimoramento para se manter atualizada neste dinâmico universo do comércio eletrônico global. ")])])])}],s=a("7c08"),r={name:"Home",components:{SideBar:s["a"]}},o=r,c=(a("21bb"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=l.exports},d8fc:function(t,e,a){},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-6baf7168.93716df1.js.map