(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],d=0,v=[];d<c.length;d++)r=c[d],a[r]&&v.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/my-resume/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"042c":function(t,e,i){},"0903":function(t,e,i){},"14cf":function(t,e,i){},"1fa4":function(t,e,i){},"25b2":function(t,e,i){t.exports=i.p+"img/1.d0d26874.jpg"},"309c":function(t,e,i){},3481:function(t,e,i){"use strict";var s=i("f032"),a=i.n(s);a.a},"37b1":function(t,e,i){"use strict";var s=i("14cf"),a=i.n(s);a.a},"3b25":function(t,e,i){"use strict";var s=i("1fa4"),a=i.n(s);a.a},"3bf3":function(t,e,i){},"4d13":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"flex wrapper"},[i("mainNav"),i("div",{staticClass:"container"},[i("router-view")],1)],1),i("particle")],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"minNav-wrapper"},[i("div",{staticClass:"nav"},[t._m(0),i("ul",{staticClass:"list"},t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item",on:{click:t.go}},[i("router-link",{attrs:{to:e.href}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":e.icon}})]),t._v("\n          "+t._s(e.label)+"\n        ")])],1)}),0),t._m(1)]),i("div",{staticClass:"nav-top fixed-top"},[i("div",{staticClass:"flex-between"},[i("h1",[t._v("Shuwang's Resume")]),i("button",{staticClass:"btn-default animated jello",on:{click:t.showNav}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-topBtn"}})])])])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h1",{staticClass:"text-center"},[t._v("Shuwang's Resume")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn-default btnpdf animated swing"},[i("a",{attrs:{href:"https://wanggege919.github.io/my-resume/pdf/pdf.html",target:"_blank"}},[t._v("查看PDF")])])}],o=i("1157"),l=i.n(o),u={name:"HelloWorld",props:{msg:String},data:function(){return{touchStartX:"",diffX:"",navShow:!0,list:[{label:"个人  About me",href:"/person",icon:"#icon-gerenzhongxin",id:1001},{label:"技能 Technology stack",href:"/skill",icon:"#icon-topBtn",id:1002},{label:"项目 Portfolio",icon:"#icon-project",href:"/portfolio",id:1003},{label:"精选博客 Blog",href:"/blog",icon:"#icon-ego-blog",id:1004},{label:"联系我 Concat me",icon:"#icon-call1",href:"/concat",id:1005}],icons:[{src:"",alt:""}]}},mounted:function(){var t=this;l()("#app").on("touchstart",function(e){t.touchStartX=e.changedTouches[0].clientX}),l()("#app").on("touchend",function(e){var i=e.changedTouches[0].clientX;t.diffX=i-t.touchStartX,t.diffX<-20&&l()(".minNav-wrapper .nav").removeClass("show")}),l()(".container").on("click",function(t){console.log(1),l()(".minNav-wrapper .nav").removeClass("show")})},methods:{showNav:function(){l()(".minNav-wrapper .nav").toggleClass("show")},go:function(){l()(".minNav-wrapper .nav").removeClass("show")}}},d=u,v=(i("3481"),i("2877")),h=Object(v["a"])(d,r,c,!1,null,"e6f42378",null),f=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"particles-js"}})},p=[],_=(i("572f"),i("9b1b"),{data:function(){return{}},mounted:function(){var t=this;this.$nextTick(function(){t.initParticlesJS()})},methods:{initParticlesJS:function(){particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"edge",stroke:{width:0,color:"#222"},polygon:{nb_sides:5},image:{width:50,height:50}},opacity:{value:.8,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:1,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:100,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1400}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})}}}),g=_,C=(i("3b25"),Object(v["a"])(g,m,p,!1,null,"5d8983c2",null)),b=C.exports,w={name:"app",components:{mainNav:f,particle:b}},x=w,k=(i("998e"),Object(v["a"])(x,a,n,!1,null,"ad729ec2",null)),y=k.exports,j=i("8c4f"),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"person"},[i("div",{staticClass:"section section1 clearfix"},[t._m(0),i("div",{staticClass:"info-wrapper fr animated bounceInRight"},[i("div",{staticClass:"info",attrs:{"data-tilt":""}},[i("div",{staticClass:"tem"},[i("h1",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-geren9"}})]),t._v("\n            刘书旺\n          ")]),i("hr"),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])]),i("div",{staticClass:"section section2"},[t._m(7),i("div",{staticClass:"content jus-around"},[i("div",{staticClass:"item item-left"},[i("div",{staticClass:"box process",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiaoyujingli"}})]),i("h1",[t._v("Learning process")]),i("p",[t._v("自学前端开发，学习资源是视频课程，相关书籍以及MDN,从基本的静态页面到响应式页面，熟练弹性布局及移动端页面开发，熟练Vue技术栈，熟悉工程化，模块化，组件化开发，有小程序、移动端开发经验。")])])]),i("div",{staticClass:"item item-right"},[i("div",{staticClass:"box honor",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-rongyu"}})]),i("h1",[t._v("Working experience")]),t._m(8)])])])])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pic-wrapper fl animated bounceInLeft"},[s("div",{staticClass:"pic",attrs:{"data-tilt":""}},[s("img",{attrs:{src:i("68c4"),alt:"",width:"250"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("应聘职位")]),i("dd",[t._v("前端工程师")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("年龄")]),i("dd",[t._v("25")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("现住址")]),i("dd",[t._v("河南郑州")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("英语等级")]),i("dd",[t._v("CET-4")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("学校")]),i("dd",[t._v("本科 洛阳理工学院")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[t._v("专业")]),i("dd",[t._v("土木工程")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("h1",[t._v("Experience")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[i("h3",[t._v("公司名称：苏州乐精灵信息科技有限公司")]),i("p",{staticClass:"work-content"},[t._v("工作内容：使用"),i("strong",[t._v("Vue + element-ui")]),t._v("重构公司的PC端项目，期间也使用 Vue 做了一些移动端业务以及小程序业务。")]),i("p",[t._v("技术栈：Vue + Element-ui + Webpack + 移动端 + 小程序")])])])}],I=i("58f1"),$=i.n(I),T={mounted:function(){this.init(),l()(window).width()>500&&this.initVanilaTilt(),this.initScroll(),console.log(l()(".info-wrapper")),console.log(l.a)},destroyed:function(){l()(".container").animate({scrollTop:0},500)},methods:{initVanilaTilt:function(){$.a.init(document.querySelector(".pic"),{max:25,speed:400}),$.a.init(document.querySelector(".info"),{max:25,speed:400}),$.a.init(document.querySelector(".process"),{max:25,speed:400}),$.a.init(document.querySelector(".honor"),{max:25,speed:400})},initScroll:function(){l()("#app .container").on("scroll",function(t){l()(t.currentTarget).scrollTop()>0&&l()(".section2 .header").addClass("animated bounceInRight").show(),l()(t.currentTarget).scrollTop()>=l()(".section2 .header").height()&&(l()(".section2 .item-left").addClass("animated bounceInLeft").show(),l()(".section2 .item-right .box").height(l()(".section2 .item-left .box").height()),l()(".section2 .item-right").addClass("animated bounceInRight").show())})},init:function(){}}},V=T,z=(i("57ca"),Object(v["a"])(V,S,E,!1,null,"6f9ed7a2",null)),O=z.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portfolio",on:{touchstart:t.touchStart,touchend:t.touchEnd}},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Portfolio")]),i("section",{staticClass:"section1 item-wrapper animated bounceInUp"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content flex"},[i("transition",{attrs:{name:"leftMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(0,"showLeft"),expression:"show(0,'showLeft')"}],staticClass:"left jusCenter-alignCenter"},[i("div",{staticClass:"tem"},[i("div",{staticClass:"title"},[i("h2",[t._v("Vue2.5 开发去哪儿网")])]),i("div",{staticClass:"desc"},[t._v("仿移动端去哪儿网，使用mock数据，支持根据不同城市选择不同景点的功能，首页多区域轮播，城市的展示搜索，城市左侧字母与右侧区块动画联动等等")]),i("div",{staticClass:"info"},[i("ol",{staticClass:"showStyle"},[i("li",[t._v("使用语言：vue + vue-cli + axios + vuex + vue-router + stylus + eslint + es6")]),i("li",[t._v("使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置")]),i("li",[t._v("使用 axios + promise 异步请求")]),i("li",[t._v("使用 swiper + better-scroll + animate.css 插件")]),i("li",[t._v("使用 stylus 语法：嵌套，混入，函数等")])])]),i("div",{staticClass:"link"},[i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://github.com/wanggege919/travel-new",target:"_blank"}},[t._v("项目源码")])]),i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://wanggege919.github.io/travel-new/dist/index.html",target:"_blank"}},[t._v("项目预览")])])]),i("div",{staticClass:"slide-icon"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuoyouhuadong"}})])])])])])],1)])]),i("section",{staticClass:"section2 item-wrapper"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content flex"},[i("transition",{attrs:{name:"leftMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(1,"showLeft"),expression:"show(1,'showLeft')"}],staticClass:"left jusCenter-alignCenter"},[i("div",{staticClass:"tem"},[i("div",{staticClass:"title"},[i("h2",[t._v("Vue.js搭建CNODE社区")])]),i("div",{staticClass:"desc"},[t._v("该项目是利用Vue.js以及CNODE社区API搭建的一个简易版CNODE社区")]),i("div",{staticClass:"info"},[i("ol",{staticClass:"showStyle"},[i("li",[t._v("技术栈：vue + vue-cli + axios + vue-router + es6")]),i("li",[t._v("项目内容：包括文章列表页，文章详情页，作者页面等")]),i("li",[t._v("利用组件化开发，项目由Header,PostList,Artical,UserInfo,SlideBar,Pagination等组件组成")]),i("li",[t._v("使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置")])])]),i("div",{staticClass:"link"},[i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://github.com/wanggege919/cnode",target:"_blank"}},[t._v("项目源码")])]),i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:" https://wanggege919.github.io/cnode/dist/index.html",target:"_blank"}},[t._v("项目预览")])])]),i("div",{staticClass:"slide-icon"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuoyouhuadong"}})])])])])])],1)])]),i("section",{staticClass:"section3 item-wrapper"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content flex"},[i("transition",{attrs:{name:"leftMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(2,"showLeft"),expression:"show(2,'showLeft')"}],staticClass:"left jusCenter-alignCenter"},[i("div",{staticClass:"tem"},[i("div",{staticClass:"title"},[i("h2",[t._v("Vue.js搭建音乐播放器")])]),i("div",{staticClass:"desc"},[t._v("该项目是利用Vue.js以及从QQ音乐的开放的接口抓来的数据完成的一款音乐播放器")]),i("div",{staticClass:"info"},[i("ol",{staticClass:"showStyle"},[i("li",[t._v("使用语言：vue + vue-cli + axios + vuex + vue-router + stylus + eslint + es6 + jsonp")]),i("li",[t._v("使用 vue-router 进行路由管理，与vueJs集成构建单页应用，分模块化配置")]),i("li",[t._v("使用 vuex 进行地址状态管理，支持增删改查")]),i("li",[t._v("使用 axios + promise 异步请求")]),i("li",[t._v("使用 组件化开发，整个项目由页面的基本组件，公用组件完成")]),i("li",[t._v("使用 swiper + better-scroll + animate.css 插件")]),i("li",[t._v("使用 stylus 语法：嵌套，混入，函数等")])])]),i("div",{staticClass:"link"},[i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://github.com/wanggege919/vue-music",target:"_blank"}},[t._v("项目源码")])]),i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://wanggege919.github.io/vue-music/dist/index.html",target:"_blank"}},[t._v("项目预览")])])]),i("div",{staticClass:"slide-icon"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuoyouhuadong"}})])])])])])],1)])]),i("section",{staticClass:"section3 item-wrapper"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content flex"},[i("transition",{attrs:{name:"leftMove"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show(2,"showLeft"),expression:"show(2,'showLeft')"}],staticClass:"left jusCenter-alignCenter"},[i("div",{staticClass:"tem"},[i("div",{staticClass:"title"},[i("h2",[t._v("文章电影小分享(小程序)")])]),i("div",{staticClass:"desc"},[t._v("该项目是通过 mock 数据中的文章音乐以及豆瓣接口抓取的电影资源组成的一个微信端小程序。")]),i("div",{staticClass:"info"},[i("ol",{staticClass:"showStyle"},[i("li",[t._v("熟悉了小程序的模板以及组件的使用")]),i("li",[t._v("学习了小程序内音乐播放前后台切换以及页面的显示和隐藏的同步")])])]),i("div",{staticClass:"link"},[i("button",{},[i("a",{staticClass:"btn-default",attrs:{href:"https://github.com/wanggege919/movieShareApplet",target:"_blank"}},[t._v("项目源码")])])]),i("div",{staticClass:"slide-icon"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zuoyouhuadong"}})])])])])])],1)])])])},P=[],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"content"},[i("transition-group",{attrs:{name:"toLeft",tag:"div"}},t._l(t.lists,function(e,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:s===t.curIndex,expression:"index === curIndex"}],key:s,staticClass:"item"},[i("img",{attrs:{src:e.img,alt:""}})])}),0)],1),i("div",{staticClass:"dot"},t._l(t.number,function(e,s){return i("span",{key:s,class:{active:s===t.curIndex}})}),0)])},M=[],X={props:{lists:{type:Array,require:!0}},data:function(){return{number:this.lists.length,curIndex:0,timer:null}},mounted:function(){this.autoMove()},methods:{autoMove:function(){var t=this;this.timer=setInterval(function(){t.gotoLeft()},2e3)},gotoLeft:function(){this.curIndex++,this.curIndex===this.number&&(this.curIndex=0)}}},q=X,J=(i("cfc0"),Object(v["a"])(q,N,M,!1,null,"92d6cc90",null)),A=J.exports,U={data:function(){return{len:3,touchStartX:0,touchDiffX:0,page:0,dir:"hor",status:"showLeft",media:"",DoraemonList:[{img:i("25b2")},{img:i("fac3")}]}},mounted:function(){l()(".container").animate({scrollTop:0},500),this.init(),this.onScroll()},components:{myswiper:A},watch:{touchDiffX:function(t){t>100&&(this.status="showLeft",this.dir="hor"),t<-100&&(this.status="showRight",this.dir="hor")}},methods:{init:function(){this.media=this.resize(),l()(".portfolio section").first().css({opaicty:1}).nextAll(".item-wrapper").css({opacity:0})},show:function(t,e){return"pc"===this.media||(e?"showLeft"==e?"hor"!==this.dir||this.status===e:t===this.page&&this.status===e:void 0)},onScroll:function(){var t=this;l()(".container").on("scroll",function(){l()(".portfolio .item-wrapper").each(function(e,i){l()(i).offset().top<l()(i).height()/1.2&&(t.page=e,0==l()(i).css("opacity")&&l()(".portfolio section").eq(e).addClass("animated bounceInUp").css({opacity:1}).siblings().removeClass("animated bounceInUp"))})})},resize:function(){return l()(window).width()>500?"pc":"phone"},touchStart:function(t){this.touchStartX=t.changedTouches[0].clientX},touchEnd:function(t){if("phone"===this.media){var e=t.changedTouches[0].clientX;this.touchDiffX=e-this.touchStartX}}}},B=U,D=(i("9bfd"),Object(v["a"])(B,L,P,!1,null,"065511f3",null)),R=D.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill"},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Technology stack")]),i("div",{staticClass:"content flex-wrap jus-around"},[i("div",{staticClass:"box odd"},[i("div",{staticClass:"item item1",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("01")]),i("ol",[i("li",[t._v("熟练 HTML,了解语义化标签，熟练DOM事件")]),i("li",[t._v("熟练 CSS 核心概念，盒模型，文档流，浮动，定位，BFC，各种居中")]),i("li",[t._v("熟练 flex 弹性布局，移动端配置")])])])]),i("div",{staticClass:"box even"},[i("div",{staticClass:"item item2",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("02")]),i("ol",[i("li",[t._v("1. 熟练 JavaScript 及 常用ES6语法")]),i("li",[t._v("2. 了解原型，闭包，this")]),i("li",[t._v("3. 熟练 web存储，熟练异步操作Ajax，promise，Await/Async")]),i("li",[t._v("4. 熟练常用正则表达式")])])])]),i("div",{staticClass:"box odd"},[i("div",{staticClass:"item item3",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("03")]),i("ol",[i("li",[t._v("熟练 JQuery，Bootstrap")]),i("li",[t._v("熟练 Sass 嵌套，函数，mixin")]),i("li",[t._v("熟悉 同源协议，跨域，Jsonp")])])])]),i("div",{staticClass:"box even"},[i("div",{staticClass:"item item4",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("04")]),i("ol",[i("li",[t._v("熟练 VueJs 语法，了解生命周期，指令，计算属性等")]),i("li",[t._v("熟练 Vue-router 路由配置，Vuex 状态管理")]),i("li",[t._v("了解 MVC MVVM 开发模式，代码层面向模块化组件化靠近")])])])]),i("div",{staticClass:"box odd"},[i("div",{staticClass:"item item5",attrs:{"data-tilt":"","data-tilt-scale":"1.1"}},[i("h1",[t._v("05")]),i("ol",[i("li",[t._v("熟悉 HTTP 协议")]),i("li",[t._v("使用过 Gulp，Webpack 基本配置，用过 Parcel")]),i("li",[t._v("熟练小程序基本语法及云开发，有项目经验")]),i("li",[t._v("热爱前端，对新技术无限好奇，喜欢写博客")])])])])])])}],F={mounted:function(){l()(window).width()>500?(this.initVanilaTilt(),this.toggleClass(1)):(this.init(),this.initScroll())},destroyed:function(){l()(".container").animate({scrollTop:0},500)},methods:{init:function(){setTimeout(function(){l()(".skill .box").first().addClass("scale")},50),console.log(l()(".skill .box").first().offset().top)},initScroll:function(){l()("#app .container").on("scroll",function(t){l()(".skill .box").each(function(t,e){l()(e).offset().top<=259&&l()(e).offset().top+l()(e).height()<=553&&l()(e).addClass("scale").siblings().removeClass("scale")})})},toggleClass:function(t){1===t&&(l()(".skill .box.even").addClass("animated bounceInUp"),l()(".skill .box.odd").addClass("animated bounceInDown"))},initVanilaTilt:function(){$.a.init(document.querySelector(".content .item1"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item2"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item3"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item4"),{max:25,speed:400}),$.a.init(document.querySelector(".content .item5"),{max:25,speed:400})}}},W=F,G=(i("37b1"),Object(v["a"])(W,H,Q,!1,null,"cc347db2",null)),K=G.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"concat"},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Concat me")]),i("div",{staticClass:"wrapper flex-wrap animated bounceInUp"},[i("div",{staticClass:"item"},[i("div",{staticClass:"content tel"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-call"}})])]),i("div",[t._v("18848956986")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"content wei"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-weixin"}})])]),t._m(0)])]),i("div",{staticClass:"item"},[i("div",{staticClass:"content email"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-email"}})])]),i("div",[t._v("1914161290@qq.com")])])]),i("div",{staticClass:"item uniq"},[i("div",{staticClass:"content zhihu"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zhihu"}})])]),t._m(1)])]),i("div",{staticClass:"item"},[i("div",{staticClass:"content git"},[i("div",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-github"}})])]),t._m(2)])])])])},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"https://i.loli.net/2019/08/09/qirdQAxPE3fTkBc.jpg",target:"_blank"}},[t._v("活在当下")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"https://www.jianshu.com/u/6806081fb1cd",target:"_blank"}},[t._v("在路上919")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"https://github.com/wanggege919",target:"_blank"}},[t._v("wanggege919")])])}],tt={mounted:function(){this.initVanilaTilt(),this.fixHeight()},methods:{initVanilaTilt:function(){$.a.init(document.querySelectorAll(".concat dl"),{max:50,speed:400})},fixHeight:function(){l()(".concat .item .content").each(function(t,e){l()(e).height(l()(e).width())})}}},et=tt,it=(i("99ad"),Object(v["a"])(et,Y,Z,!1,null,"0a3628be",null)),st=it.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog"},[i("h1",{staticClass:"main-title animated bounceInRight"},[t._v("Blog")]),i("div",{staticClass:"card card1 animated bounceInUp"},[i("h2",{staticClass:"title"},[i("a",{attrs:{href:"https://www.jianshu.com/p/153e30559c8a",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        Vue.js学习总结\n        "),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zhifeiji"}})])])]),t._m(0),i("div",{staticClass:"link"},[i("a",{attrs:{href:"https://www.jianshu.com/p/153e30559c8a",target:"_blank"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-cc-arrow-right"}})])])])]),i("div",{staticClass:"card card2 animated bounceInUp"},[i("h2",{staticClass:"title"},[i("a",{attrs:{href:"https://www.jianshu.com/p/f7e56e3b2f73",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        学会正则表达式\n        "),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zhifeiji"}})])])]),t._m(1),i("div",{staticClass:"link"},[i("a",{attrs:{href:"https://www.jianshu.com/p/f7e56e3b2f73",target:"_blank"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-cc-arrow-right"}})])])])]),i("div",{staticClass:"card card3 animated bounceInUp"},[i("h2",{staticClass:"title"},[i("a",{attrs:{href:"https://www.jianshu.com/p/1eee289337d7",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        数组与伪数组(jQuery初探)\n        "),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zhifeiji"}})])])]),t._m(2),i("div",{staticClass:"link"},[i("a",{attrs:{href:"https://www.jianshu.com/p/1eee289337d7",target:"_blank"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-cc-arrow-right"}})])])])]),i("div",{staticClass:"card card4 animated bounceInUp"},[i("h2",{staticClass:"title"},[i("a",{attrs:{href:"https://www.jianshu.com/p/cc0300067462",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        html和css概括总结\n        "),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zhifeiji"}})])])]),t._m(3),i("div",{staticClass:"link"},[i("a",{attrs:{href:"https://www.jianshu.com/p/cc0300067462",target:"_blank"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-cc-arrow-right"}})])])])]),i("div",{staticClass:"card card5 animated bounceInUp"},[i("h2",{staticClass:"title"},[i("a",{attrs:{href:"https://www.jianshu.com/p/b52861616919",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        了解一些常见的排序算法\n        "),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-zhifeiji"}})])])]),t._m(4),i("div",{staticClass:"link"},[i("a",{attrs:{href:"https://www.jianshu.com/p/b52861616919",target:"_blank"}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-cc-arrow-right"}})])])])])])},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"keyword flex-wrap"},[t._v("关键词：\n      "),i("li",[t._v("Vue指令")]),i("li",[t._v("Vue组件")]),i("li",[t._v("生命周期")]),i("li",[t._v("Vue动画")]),i("li",[t._v("Vue-router")]),i("li",[t._v("Vuex")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"keyword flex-wrap"},[t._v("关键词：\n      "),i("li",[t._v("修饰符")]),i("li",[t._v("元字符")]),i("li",[t._v("前瞻")]),i("li",[t._v("常用属性、方法")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"keyword flex-wrap"},[t._v("关键词：\n      "),i("li",[t._v("arguments")]),i("li",[t._v("数组与伪数组对比")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"keyword flex-wrap"},[t._v("关键词：\n      "),i("li",[t._v("html常见元素的理解")]),t._v(",\n      "),i("li",[t._v("css非布局样式")]),t._v(",\n      "),i("li",[t._v("css布局")]),i("li",[t._v("css动画")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"keyword flex-wrap"},[t._v("关键词：\n      "),i("li",[t._v("冒泡排序")]),t._v(",\n      "),i("li",[t._v("选择排序")]),t._v(",\n      "),i("li",[t._v("计数排序")]),t._v(",\n      "),i("li",[t._v("桶排序")])])}],rt={},ct=rt,ot=(i("bbdd"),Object(v["a"])(ct,at,nt,!1,null,"469f301c",null)),lt=ot.exports;s["a"].use(j["a"]);var ut=new j["a"]({routes:[{path:"/",redirect:"/person"},{path:"/person",component:O,name:"person"},{path:"/portfolio",component:R,name:"portfolio"},{path:"/skill",component:K,name:"skill"},{path:"/concat",component:st,name:"concat"},{path:"/blog",component:lt,name:"blog"}]}),dt=(i("b059"),i("042c"),i("0631")),vt=i.n(dt);vt.a.init({appId:"B5R0wHBw9EBMnySC05HI6F4J-gzGzoHsz",appKey:"P1FaA4nhUFJAVK2ksJxvQbAm"});i("4b3c");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(y)},router:ut}).$mount("#app")},"57ca":function(t,e,i){"use strict";var s=i("6ea6"),a=i.n(s);a.a},"68c4":function(t,e,i){t.exports=i.p+"img/书旺.7a6088a6.jpg"},"6ea6":function(t,e,i){},"998e":function(t,e,i){"use strict";var s=i("d3c2"),a=i.n(s);a.a},"99ad":function(t,e,i){"use strict";var s=i("3bf3"),a=i.n(s);a.a},"9b1b":function(t){t.exports={}},"9bfd":function(t,e,i){"use strict";var s=i("309c"),a=i.n(s);a.a},b059:function(t,e,i){},bbdd:function(t,e,i){"use strict";var s=i("4d13"),a=i.n(s);a.a},cfc0:function(t,e,i){"use strict";var s=i("0903"),a=i.n(s);a.a},d3c2:function(t,e,i){},f032:function(t,e,i){},fac3:function(t,e,i){t.exports=i.p+"img/2.04fd1398.jpg"}});
//# sourceMappingURL=app.ada076a6.js.map