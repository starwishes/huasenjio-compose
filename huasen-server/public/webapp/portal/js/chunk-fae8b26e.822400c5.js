(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fae8b26e","chunk-56d6a6c2","chunk-57a1afc2","chunk-0be59312"],{1840:function(t,e,s){},"197f":function(t,e,s){"use strict";s("3c7c")},"1b8b":function(t,e,s){"use strict";s.r(e);var i=s("6f90"),a=s("934a"),n=s("2f62"),o={name:"HomeNav",computed:{...Object(n.e)(["categorySites"])},methods:{changeAnchorPosition(t){let e=document.getElementById("site-anchor-"+encodeURI(t));e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),[...e.parentNode.children].map(t=>{t.classList.remove("active-anchor")}),e.className=e.className+" active-anchor",this.$nextTick(()=>{i.a.pubEv(a.d,e.offsetTop)}))}}},c=(s("bc23"),s("2877")),r=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"home-nav",attrs:{id:"js-home-nav"}},[e("header"),e("main",{directives:[{name:"discolor",rawName:"v-discolor"}],attrs:{id:"js-home-nav__main"}},[e("ul",{directives:[{name:"balance",rawName:"v-balance"},{name:"discolor",rawName:"v-discolor"}],attrs:{id:"js-home-nav__main-ul"}},t._l(t.categorySites,(function(s,i){return e("li",{key:i,staticClass:"record-item pointer text",on:{click:function(e){return t.changeAnchorPosition(i)}}},[t._v(" "+t._s(s.typeName)+" ")])})),0)])])}),[],!1,null,"09350337",null);e.default=r.exports},"1c22":function(t,e,s){"use strict";s("f485")},"1fe2":function(t,e,s){"use strict";var i=[function(){var t=this._self._c;return t("main",[t("img",{staticClass:"w-full",attrs:{src:s("653f")}}),t("div",{staticClass:"w-full text"},[this._v("空空如也")])])}],a={name:"Empty",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"}},computed:{style(){return{"--emptyWidth":this.TOOL.handleSize(this.width),"--emptyHeight":this.TOOL.handleSize(this.height)}}}},n=(s("197f"),s("2877")),o=Object(n.a)(a,(function(){return(0,this._self._c)("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"empty",style:this.style,attrs:{id:"js-empty"}},[this._m(0)])}),i,!1,null,"51dbe8cd",null);e.a=o.exports},3619:function(t,e,s){"use strict";s("abdc")},"3c7c":function(t,e,s){},"508ea":function(t,e,s){t.exports=s.p+"img/tianqiicon_duoyun_heiye.73e2a4b5.png"},"51c2":function(t,e,s){},"5a7f":function(t,e,s){t.exports=s.p+"img/tianqiicon_qingtian_baitian.52defb70.png"},"5cb6":function(t,e,s){t.exports=s.p+"img/tianqiicon_dayu.0b94af12.png"},6068:function(t,e,s){t.exports=s.p+"img/tianqiicon_duoyun_baitian.ea7ea788.png"},"653f":function(t,e,s){t.exports=s.p+"img/empty.ef9dd5f7.png"},"6c0e":function(t,e,s){t.exports=s.p+"img/tianqiicon_leidian.7abc6d20.png"},"6ed0":function(t,e,s){},7267:function(t,e,s){"use strict";s.r(e);var i=s("2f62"),a={name:"HsClock",data:()=>({hours:"00",minutes:"00",seconds:"00"}),mounted(){setInterval(this.clock,1e3)},methods:{clock(){let t=(new Date).getHours(),e=(new Date).getMinutes(),s=(new Date).getSeconds();this.$data.hours=t<10?"0"+t:t,this.$data.minutes=e<10?"0"+e:e,this.$data.seconds=s<10?"0"+s:s}}},n=(s("1c22"),s("2877")),o=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"hs-clock"},[e("div",{staticClass:"time"},[e("span",{ref:"hour",staticClass:"hour"},[t._v(t._s(t.hours))]),e("div",{staticClass:"text"},[t._v("时")]),e("span",{ref:"minute",staticClass:"minute"},[t._v(t._s(t.minutes))]),e("div",{staticClass:"text"},[t._v("分")]),e("span",{ref:"second",staticClass:"second"},[t._v(t._s(t.seconds))]),e("div",{staticClass:"text"},[t._v("秒")])])])}),[],!1,null,"77315c13",null).exports;const c=new(s("dfa1").a)(void 0,200),r={0:s("5a7f"),1:s("6068"),2:s("a15ae"),3:s("d9c1"),4:s("6c0e"),7:s("b4b4"),8:s("f878"),9:s("f878"),10:s("5cb6"),18:s("e044")},l={0:s("d116"),1:s("508ea"),2:s("a15ae"),3:s("9120"),4:s("6c0e"),7:s("b4b4"),8:s("f878"),9:s("f878"),10:s("5cb6"),18:s("e044")};var d={name:"Weather",data:()=>({loaded:!1,showWeather:!0,imgDaytimeMap:r,weather:{}}),computed:{...Object(i.e)(["user"]),isDaytime(){const t=(new Date).getHours();return t>=6&&t<18},iconStyle(){let t=this.isDaytime?r:l;return{backgroundImage:`url(${t[this.weather.img]||t[0]})`}}},watch:{"user.config.cityCode":{handler(t,e){c.run(()=>{this.queryWeather()})},immediate:!0}},mounted(){},methods:{queryWeather(){this.loaded=!1,this.user.config.cityCode&&this.API.getWeatherByCityCode({cityId:this.user.config.cityCode},{notify:!1}).then(t=>{this.loaded=!0,this.weather=t.data,console.log("天气信息：",t.data)})}}},h=(s("cdc1"),{name:"HomeHead",components:{Clock:o,Weather:Object(n.a)(d,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showWeather&&t.loaded,expression:"showWeather && loaded"}],staticClass:"flex items-center",attrs:{id:"hs-weather"}},[e("div",{staticClass:"city text",attrs:{title:t.weather.cityName}},[t._v(t._s(t.weather.cityName))]),e("div",{staticClass:"icon",style:t.iconStyle}),e("div",{staticClass:"weather text",attrs:{title:t.weather.weather}},[t._v(t._s(t.weather.weather))]),e("div",{staticClass:"temp text",attrs:{title:t.weather.minTemp+"°C"}},[t._v(t._s(t.weather.minTemp+"°C"))]),e("div",{staticClass:"quality text",attrs:{title:t.weather.quality}},[t._v(t._s(t.weather.quality))])])}),[],!1,null,"fa4da3e4",null).exports},props:{headBgConfig:{type:Object,default:()=>({clear:!1,white:!1,grossGlass:!0})}},data:()=>({showMenu:!1,selectedTake:"常用热门",takes:[],journals:[],currentJournal:{}}),computed:{...Object(i.e)(["user"]),showGrossGlass(){return!!(this.showMenu&&document.body.clientWidth<=1024)},signText(){return this.user.token?this.user.name:"注册登录"},links(){let t=this.$store.state.appConfig.site;return[{iconfontClass:"iconfont icon-md-home",text:t.guidePageName,url:t.guidePageUrl,isArticle:!1}]}},mounted(){this.querySites(),this.queryJournals(),this.initMenu()},methods:{...Object(i.d)(["commitAll"]),querySites(){this.API.findSiteByCode({},{notify:!1}).then(t=>{this.commitAll({sites:t.data})})},queryJournals(){this.API.findJournal({},{notify:!1}).then(t=>{0!==t.data.length&&(this.journals=t.data||[],this.handleSelectJournal(this.journals[0]._id))})},handleSelectJournal(t){this.journals.find(e=>e._id===t)&&this.API.findJournalInformationById({_id:t},{notify:!1}).then(t=>{this.selectJournal(t.data)})},selectJournal(t){this.currentJournal=t,this.commitAll({categorySites:t.series})},handleNavbar(){this.commitAll({user:{config:{showNavbar:!this.user.config.showNavbar}}}),this.$store.dispatch("snapshoot")},sign(){this.user.token?this.commitAll({showWrapPerson:!0}):this.commitAll({showWrapSign:!0})},handleMenu(){this.showMenu=!this.showMenu},initMenu(){let t=this.LODASH.debounce(()=>{document.body.clientWidth>1024?this.showMenu=!0:this.showMenu=!1},100,{leading:!0,trailing:!0});window.addEventListener("resize",t),this.$once("hook:beforeDestory",()=>{window.removeEventListener("resize",t)}),this.$nextTick(()=>{let t=new Event("resize",{bubbles:!0,cancelable:!1});document.dispatchEvent(t)})},jump(t,e){let s=t.url;0===e?this.TOOL.openPage(s):this.TOOL.jumpToRead(this,s)}}}),u=(s("3619"),Object(n.a)(h,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"home-head",class:{clear:!t.showGrossGlass&&t.headBgConfig.clear,white:t.headBgConfig.white,"gross-glass":t.showGrossGlass||t.headBgConfig.grossGlass},attrs:{id:"js-home-head"}},[e("section",{staticClass:"fold",on:{click:t.handleNavbar}},[e("i",{staticClass:"iconfont icon-a-unfoldcross-line"})]),e("section",{staticClass:"menu",on:{click:t.handleMenu}},[e("i",{staticClass:"iconfont icon-md-menu"})]),t.showMenu?e("section",{staticClass:"collapse"},[e("ul",{staticClass:"links"},t._l(t.links,(function(s,i){return e("li",{key:i,on:{click:function(e){return t.jump(s,i)}}},[e("i",{staticClass:"icon",class:s.iconfontClass}),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])})),0)]):t._e(),e("section",{staticClass:"today"},[e("div",{staticClass:"clock-group"},[e("Clock")],1),e("div",{staticClass:"weather-group"},[e("Weather")],1)]),t.showMenu?e("section",{staticClass:"take"},[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"},on:{command:t.handleSelectJournal}},[e("span",{staticClass:"el-dropdown-link pointer"},[t._v(" "+t._s(t.currentJournal.name||"无订阅源")+" "),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t.journals.length?t._l(t.journals,(function(s){return e("el-dropdown-item",{key:s._id,attrs:{command:s._id}},[t._v(" "+t._s(s.name)+" ")])})):[e("el-dropdown-item",{attrs:{disabled:!0}},[t._v(" 空空如也 ")])]],2)],1)],1):t._e(),t.showMenu?e("section",{staticClass:"sign",on:{click:t.sign}},[t._v(" "+t._s(t.signText||"初级花酱")+" ")]):t._e()])}),[],!1,null,"4930bb5c",null));e.default=u.exports},"8d1c":function(t,e,s){"use strict";s("1840")},9120:function(t,e,s){t.exports=s.p+"img/tianqiicon_zhenyu_heiye.ff0abcb7.png"},"9bd2":function(t,e,s){"use strict";s.r(e);s("1e70"),s("79a4"),s("c1a1"),s("8b00"),s("a4e7"),s("1e5a"),s("72c3");var i=s("2f62"),a={name:"HomeSite",data:()=>({loadedTag:!1,pinMap:{1:{label:"热",color:"var(--danger)"},2:{label:"墙",color:"var(--warning)"},3:{label:"优",color:"var(--success)"},4:{label:"免",color:"var(--primary)"}}}),computed:{...Object(i.e)(["appConfig","categorySites"]),categorySitesData(){let t=this.LODASH.cloneDeep(this.categorySites)||[];return t.forEach(t=>{t.selectedTag="",t.allTags=this.handleCategoryAllTag(t)}),t}},mounted(){this.$store.dispatch("initLocalStyleInfo")},methods:{showTag(t){return this.LODASH.get(this.appConfig,"site.openLabelClassification")&&0!==t.allTags.length},imgUrl:t=>t.icon?t.icon:s("4101"),handleSelectTag(t,e){t.selectedTag=t.selectedTag===e?"":e,this.$forceUpdate()},handleDisplaySites:t=>t.selectedTag?t.sites.filter(e=>e.tags&&e.tags.includes(t.selectedTag)):t.sites,handleCategoryAllTag(t){let e=[];return(this.LODASH.get(t,"sites")||[]).forEach(t=>{let s=this.TOOL.parseJSON(t.expand,{}),i=this.LODASH.get(s,"tag");Array.isArray(i)&&(t.tags=i,e=e.concat(i))}),e=Array.from(new Set(e)),e},handlePin(t){let e=[];try{e=JSON.parse(t.expand).pin.slice(0,6)}catch(t){e=[]}return e}}},n=(s("8d1c"),s("2877")),o=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"home-site",attrs:{id:"js-home-site"}},t._l(t.categorySitesData,(function(s,i){return e("section",{key:`${s.typeName}-${i}`,attrs:{id:"site-anchor-"+encodeURI(i)}},[e("div",{directives:[{name:"discolor",rawName:"v-discolor"}],staticClass:"site-item"},[e("header",[e("i",{staticClass:"category-icon relative left-px-2 iconfont icon-tag"}),e("a",{staticClass:"category-title",attrs:{name:s.typeName}},[t._v(t._s(s.typeName))]),t.showTag(s)?e("div",{staticClass:"w-full pb-px-4 my-px-4 overflow-x-auto overflow-y-hidden"},[e("div",{staticClass:"inherit-bg tag-container flex items-center p-px-4 bg-gray-100 rounded-full"},[e("div",{staticClass:"inherit-bg flex-shrink-0 text-12px text text-center w-px-80 px-px-2 py-px-4 ml-px-6 first:ml-px-0 hover:bg-blue-400 hover:text-white transition rounded-full pointer",class:{selected:""===s.selectedTag},attrs:{title:"全部"},on:{click:function(e){return t.handleSelectTag(s,"")}}},[t._v(" 全部 ")]),t._l(s.allTags,(function(i){return e("div",{key:i,staticClass:"inherit-bg flex-shrink-0 text-12px text text-center w-px-80 px-px-2 py-px-4 ml-px-6 first:ml-px-0 hover:bg-blue-400 hover:text-white transition rounded-full pointer",class:{selected:s.selectedTag===i},attrs:{title:i},on:{click:function(e){return t.handleSelectTag(s,i)}}},[t._v(" "+t._s(i)+" ")])}))],2)]):t._e()]),e("main",[e("ul",{directives:[{name:"balance",rawName:"v-balance"}]},t._l(t.handleDisplaySites(s),(function(s,i){return e("a",{key:`${s.url}-${i}`,staticClass:"relative site inherit-text",attrs:{href:s.url,title:s.describe,target:"_blank"}},[e("div",{staticClass:"pin-group absolute -top-px-6 right-px-0 w-full h-px-16 flex justify-end"},t._l(t.handlePin(s),(function(s,i){return e("div",{key:`${s}-${i}`,staticClass:"w-px-16 h-px-16 mr-px-2 text-12px text-gray-0 flex justify-center items-center rounded-full",style:{backgroundColor:t.LODASH.get(t.pinMap,s+".color")}},[t.LODASH.get(t.pinMap,s)?[t._v(" "+t._s(t.LODASH.get(t.pinMap,s+".label"))+" ")]:t._e()],2)})),0),e("div",{staticClass:"site-card inherit-text text w-px-180 sm:w-px-150"},[e("div",{staticClass:"img-group"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],attrs:{src:t.imgUrl(s)}})]),e("div",{staticClass:"text-group"},[e("div",{staticClass:"name text"},[t._v(t._s(s.name))]),e("div",{staticClass:"describe inherit-text text"},[t._v(t._s(s.describe))])])])])})),0)])])])})),0)}),[],!1,null,"35e81c29",null);e.default=o.exports},a15ae:function(t,e,s){t.exports=s.p+"img/tianqiicon_yintian.a95f8b9c.png"},abdc:function(t,e,s){},b3d7:function(t,e,s){"use strict";s.r(e);var i=s("2f62"),a=s("6f90"),n=s("934a"),o=s("7267"),c=s("17c3"),r=s("cf4c"),l=s("0159"),d=s("1b8b"),h=s("9bd2"),u=s("1fe2"),m={name:"Home",components:{HomeHead:o.default,HomeWallpaper:c.default,HomeSearch:r.default,HomeRecord:l.default,HomeNav:d.default,HomeSite:h.default,Empty:u.a},data:()=>({headBgConfig:{clear:!0,white:!1,grossGlass:!1}}),computed:{...Object(i.e)(["categorySites"]),categoryEmpty(){return 0===this.categorySites.length}},watch:{"$route.path":{handler(t,e){if("/home"===t){let t=new Event("scroll",{bubbles:!0,cancelable:!1});this.$refs.homeContent.dispatchEvent(t)}}}},mounted(){this.initScrollEvent(),this.initEventBus(),this.initLocalStyleInfo(),a.a.pubEv(n.a)},destroyed(){a.a.pubEv(n.b),a.a.unSubEv(n.d),a.a.unSubEv(n.a),a.a.unSubEv(n.b)},methods:{...Object(i.d)(["commitAll"]),...Object(i.b)(["initLocalStyleInfo"]),handleHomeSearchFucos(t){a.a.pubEv(n.c,t.key)},initScrollEvent(){let t=this.TOOL.debounce(t=>{let e={clear:!1,white:!1,grossGlass:!1};t.target.scrollTop>210?(this.commitAll({showWrapSidebarSocket:!0}),e.white=!0):t.target.scrollTop>30?(this.commitAll({showWrapSidebarSocket:!0}),e.grossGlass=!0):(this.commitAll({showWrapSidebarSocket:!1}),e.clear=!0),this.headBgConfig=e},10);this.$refs.homeContent.addEventListener("scroll",t),this.$once("hook:beforeDestory",()=>{this.$refs.homeContent.removeEventListener("scroll",t)})},initEventBus(){a.a.subEv(n.d,(t,e)=>{let s=e?t:this.$refs.siteContent.$el.offsetTop-85+t;this.homeContentScrollTo(s)}),a.a.subEv(n.a,()=>{document.addEventListener("keyup",this.handleHomeSearchFucos)}),a.a.subEv(n.b,()=>{document.removeEventListener("keyup",this.handleHomeSearchFucos)})},homeContentScrollTo(t){this.$refs.homeContent.scrollTo({top:t,behavior:"smooth"})}}},p=(s("f49f"),s("2877")),f=Object(p.a)(m,(function(){var t=this._self._c;return t("div",{staticClass:"home"},[t("HomeWallpaper"),t("section",{staticClass:"content"},[t("HomeHead",{attrs:{headBgConfig:this.headBgConfig}}),t("main",{ref:"homeContent",staticClass:"home-content"},[t("HomeSearch"),t("HomeRecord"),this.categoryEmpty?this._e():t("HomeNav"),this.categoryEmpty?this._e():t("HomeSite",{ref:"siteContent"}),this.categoryEmpty?t("div",{staticClass:"empty-panel"},[t("Empty")],1):this._e()],1)],1)],1)}),[],!1,null,"c5893f68",null);e.default=f.exports},b4b4:function(t,e,s){t.exports=s.p+"img/tianqiicon_xiaoyu.6e3beeca.png"},bc23:function(t,e,s){"use strict";s("c787")},c787:function(t,e,s){},cdc1:function(t,e,s){"use strict";s("6ed0")},d116:function(t,e,s){t.exports=s.p+"img/tianqiicon_qingtian_heiye.85f3e3ee.png"},d9c1:function(t,e,s){t.exports=s.p+"img/tianqiicon_zhenyu_baitian.6f8bfd03.png"},e044:function(t,e,s){t.exports=s.p+"img/tianqiicon_wu.18f9294e.png"},f485:function(t,e,s){},f49f:function(t,e,s){"use strict";s("51c2")},f878:function(t,e,s){t.exports=s.p+"img/tianqiicon_zhongyu.0b94af12.png"}}]);