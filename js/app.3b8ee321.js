(function(){var e={8262:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{"label-width":"70px",model:e.form,rules:e.rules,inline:!0}},[t("h3",{staticClass:"login-title"},[e._v("系统登录")]),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("登 陆")])],1),t("el-form-item",[t("el-button",{on:{click:e.resetInput}},[e._v("重 置")])],1)],1)},r=[],o=(n(7658),n(680)),s=n(586),i={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0,s.r7)(this.form).then((e=>{let{data:t}=e;2e4===t.code?(o.Z.set("token",t.data.token),this.$store.commit("setMenu",t.data.menu),this.$store.commit("addMenu",this.$router),this.$router.push("/home"),this.$message({message:this.form.username+"，欢迎回来",type:"success"})):this.$message.error(t.data.message)}))}))},resetInput(){this.$refs.form.resetFields()}}},u=i,l=n(1001),c=(0,l.Z)(u,a,r,!1,null,"f5da33ba",null),m=c.exports},1960:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("CommonAside")],1),t("el-container",[t("el-header",[t("CommonHeader")],1),t("CommonTag"),t("el-main",[t("router-view")],1)],1)],1)],1)},r=[],o=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"home",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(n){return t("el-menu-item",{key:n.name,attrs:{index:n.name},on:{click:function(t){return e.clickMenu(n)}}},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])})),e._l(e.hasChildren,(function(n){return t("el-submenu",{key:n.label,attrs:{index:n.label}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])]),e._l(n.children,(function(n){return t("el-menu-item-group",{key:n.name},[t("el-menu-item",{attrs:{index:n.name},on:{click:function(t){return e.clickMenu(n)}}},[e._v(e._s(n.label))])],1)}))],2)}))],2)},s=[],i=(n(7658),n(680)),u={name:"CommonAside",methods:{clickMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return JSON.parse(i.Z.get("menu"))||this.$store.state.tab.menu}}},l=u,c=n(1001),m=(0,c.Z)(l,o,s,!1,null,"338ab354",null),d=m.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-container"},[t("div",{staticClass:"l-content"},[t("el-button",{staticStyle:{"margin-right":"20px"},attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(n){return t("el-breadcrumb-item",{key:n.path,attrs:{to:{path:n.path}}},[e._v(e._s(n.label))])})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",{attrs:{"hide-on-click":!1},on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:n(4353),alt:"user"}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[e._v("退出")])],1)],1)],1)])},f=[],h=n(3822),g={methods:{handleMenu(){this.$store.commit("collapseMenu")},handleClick(e){"logout"===e&&(i.Z.remove("token"),i.Z.remove("menu"),this.$message({message:"成功登出",type:"success"}),this.$router.push("/login"))}},computed:{...(0,h.rn)({tags:e=>e.tab.tabsList})}},v=g,b=(0,c.Z)(v,p,f,!1,null,"a4f431c6",null),y=b.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(n,a){return t("el-tag",{key:n.path,attrs:{closable:"home"!==n.name,effect:e.$route.name===n.name?"dark":"plain",size:"small"},on:{click:function(t){return e.changeMenu(n)},close:function(t){return e.handleClose(n,a)}}},[e._v(" "+e._s(n.label)+" ")])})),1)},w=[],C={name:"CommonTag",data(){return{}},computed:{...(0,h.rn)({tags:e=>e.tab.tabsList})},methods:{...(0,h.OI)(["closeTag"]),changeMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push({name:e.name})},handleClose(e,t){this.closeTag(e);const n=this.tags.length;e.name===this.$route.name&&(t===n?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},_=C,x=(0,c.Z)(_,k,w,!1,null,"f7c4586e",null),O=x.exports,B={name:"Main",components:{CommonAside:d,CommonHeader:y,CommonTag:O}},M=B,$=(0,c.Z)(M,a,r,!1,null,"0149fc1a",null),P=$.exports},586:function(e,t,n){"use strict";n.d(t,{cn:function(){return u},ti:function(){return c},uz:function(){return l},Yu:function(){return s},r7:function(){return m},PR:function(){return i}});var a=n(4311);const r=a.Z.create({baseURL:"/api",timeout:3e3});r.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var o=r;const s=()=>o.get("/home/getData"),i=e=>o.get("/user/getUser",e),u=e=>o.post("/user/add",e),l=e=>o.post("/user/edit",e),c=e=>o.post("/user/del",e),m=e=>o.post("/permission/getMenu",e)},4789:function(e,t,n){"use strict";var a=n(7754),r=n.n(a),o=n(6369),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u={name:"App"},l=u,c=n(1001),m=(0,c.Z)(l,s,i,!1,null,null,null),d=m.exports,p=n(2631),f=n(1960),h=n(8262),g=n(680);o["default"].use(p.ZP);const v=[{path:"/",name:"Main",component:f["default"],redirect:"/home",children:[]},{path:"/login",name:"login",component:h["default"]}],b=new p.ZP({routes:v,mode:"hash"});b.beforeEach(((e,t,n)=>{const a=g.Z.get("token");a||"login"===e.name?a&&"login"===e.name?n({name:"home"}):n():n({name:"login"})}));var y=b,k=n(3822),w=(n(7658),{state:{isCollapse:!1,tabsList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],menu:[]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){if("home"!==t.name){const n=e.tabsList.findIndex((e=>e.name===t.name));-1===n&&e.tabsList.push(t)}},closeTag(e,t){const n=e.tabsList.findIndex((e=>e.name===t.name));e.tabsList.splice(n,1)},setMenu(e,t){e.menu=t,g.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!g.Z.get("menu"))return;const a=JSON.parse(g.Z.get("menu"));e.menu=a;const r=[];a.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>n(6968)(`./${e.url}`),e))),r.push(...e.children)):(e.component=()=>n(6968)(`./${e.url}`),r.push(e))})),r.forEach((e=>{t.addRoute("Main",e)}))}}});o["default"].use(k.ZP);var C=new k.ZP.Store({modules:{tab:w}}),_=n(7634),x=n.n(_);const O=[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}];var B=O;const M=[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}];var $=M;const P=[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}];var S=P;let T=[];var Z={getStatisticalData:()=>{for(let e=0;e<7;e++)T.push(x().mock({"苹果":x().Random.float(100,8e3,0,0),vivo:x().Random.float(100,8e3,0,0),oppo:x().Random.float(100,8e3,0,0),"魅族":x().Random.float(100,8e3,0,0),"三星":x().Random.float(100,8e3,0,0),"小米":x().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:B,userData:$,orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:T},tableData:S}}}};n(541);function L(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let N=[];const U=200;for(let j=0;j<U;j++)N.push(x().mock({id:x().Random.guid(),name:x().Random.cname(),addr:x().mock("@county(true)"),"age|18-60":1,birth:x().Random.date(),sex:x().Random.integer(0,1)}));var E={getUserList:e=>{const{name:t,page:n=1,limit:a=20}=L(e.url),r=N.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),o=r.filter(((e,t)=>t<a*n&&t>=a*(n-1)));return{code:2e4,count:r.length,list:o}},createUser:e=>{const{name:t,addr:n,age:a,birth:r,sex:o}=JSON.parse(e.body);return N.unshift({id:x().Random.guid(),name:t,addr:n,age:a,birth:r,sex:o}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(N=N.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=L(e.url);return t=t.split(","),N=N.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:n,addr:a,age:r,birth:o,sex:s}=JSON.parse(e.body),i=parseInt(s);return N.some((e=>{if(e.id===t)return e.name=n,e.addr=a,e.age=r,e.birth=o,e.sex=i,!0})),{code:2e4,data:{message:"编辑成功"}}}},R={getMenu:e=>{const{username:t,password:n}=JSON.parse(e.body);return"admin"===t&&"admin"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:x().Random.guid(),message:"获取成功"}}:"daxian"===t&&"daxian"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:x().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};x().mock("/api/home/getData",Z.getStatisticalData),x().mock("/api/user/add","post",E.createUser),x().mock("/api/user/edit","post",E.updateUser),x().mock("/api/user/del","post",E.deleteUser),x().mock(/api\/user\/getUser/,E.getUserList),x().mock(/api\/permission\/getMenu/,"post",R.getMenu),o["default"].config.productionTip=!1,o["default"].use(r()),new o["default"]({store:C,router:y,render:e=>e(d),created(){C.commit("addMenu",y)}}).$mount("#app")},6968:function(e,t,n){var a={"./Home":[845,845],"./Home.vue":[845,845],"./Login":[8262],"./Login.vue":[8262],"./Main":[1960],"./Main.vue":[1960],"./Mall":[7449,449],"./Mall.vue":[7449,449],"./PageOne":[7625,625],"./PageOne.vue":[7625,625],"./PageTwo":[7222,222],"./PageTwo.vue":[7222,222],"./User":[8273,273],"./User.vue":[8273,273]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=6968,e.exports=r},4353:function(e,t,n){"use strict";e.exports=n.p+"img/user.52ffb10e.png"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var i=!0,u=0;u<a.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{222:"cdabd411",273:"411c04b7",449:"411c2d72",625:"cb3cb54d",845:"5efd940d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{273:"e15f4e53",845:"4be7ed97"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-app:";n.l=function(a,r,o,s){if(e[a])e[a].push(r);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var m=l[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+o){i=m;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[r];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=s,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){r=s[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var s=n.miniCssF(a),i=n.p+s;if(t(s,i))return r();e(a,i,null,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={273:1,845:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var s=n.p+n.u(t),i=new Error,u=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,s=a[0],i=a[1],u=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var c=u(n)}for(t&&t(a);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4789)}));a=n.O(a)})();
//# sourceMappingURL=app.3b8ee321.js.map