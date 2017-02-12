webpackJsonp([1,2],{157:function(t,e,a){"use strict";var n=a(18),s=a.n(n),i=a(542),o=a.n(i);a(91);s.a.use(o.a),e.a=new o.a({linkActiveClass:"is-active",routes:[{path:"/",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:a(513)},{path:"/charts",name:"charts",component:a(510)},{path:"/charts/column",name:"column",component:a(496)},{path:"/components",name:"components",component:a(512)},{path:"/components/backToTop",name:"backToTop",component:a(511)},{path:"*",redirect:"/"}]})},159:function(t,e){},160:function(t,e,a){a(467);var n=a(4)(a(187),a(523),null,null);t.exports=n.exports},161:function(t,e,a){a(484);var n=a(4)(a(188),a(540),null,null);t.exports=n.exports},184:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{list:{type:Array,required:!0,default:function(){return[]}},separator:String},mounted:function(){this.separator&&this.$el.style.setProperty("--separator",'"'+this.separator+'"')},methods:{isLast:function(t){return t===this.list.length-1},showName:function(t){return t.meta&&t.meta.label||t.name}}}},185:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{beforeEnter:function(t){t.classList.remove("collapse"),t.style.display="block",t.classList.add("collapsing"),t.style.height=t.scrollHeight+"px"},afterEnter:function(t){t.classList.remove("collapsing"),t.classList.add("collapse","in")},beforeLeave:function(t){t.classList.add("collapsing"),t.classList.remove("collapse","in"),t.style.height=0},afterLeave:function(t){t.classList.remove("collapsing"),t.classList.add("collapse"),t.style.display="none"}}}},186:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nprogress-container"}},187:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(63),s=a.n(n),i=["legendselectchanged","legendselected","legendunselected","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected"],o=["click","dblclick","mouseover","mouseout","mousedown","mouseup","globalout"];e.default={props:{options:Object,theme:String,initOptions:Object,group:Object},data:function(){return{chart:null}},computed:{width:{cache:!1,getter:function(){return this.chart.getWidth()}},height:{cache:!1,getter:function(){return this.chart.getHeight()}},isDisposed:{cache:!1,getter:function(){return this.chart.isDisposed()}}},methods:{mergeOptions:function(t){this.chart.setOption(t)},resize:function(){this.chart.resize()},dispatchAction:function(t){this.chart.dispatchAction(t)},showLoading:function(){this.chart.showLoading()},hideLoading:function(){this.chart.hideLoading()},getDataURL:function(){return this.chart.getDataURL()},clear:function(){this.chart.clear()},dispose:function(){this.chart.dispose()}},mounted:function(){var t=this,e=s.a.init(this.$el,this.theme,this.initOptions);e.setOption(this.options),this.$watch("options",function(t){e.setOption(t,!0)},{deep:!0}),e.group=this.group,this.$watch("group",function(t){e.group=t}),i.forEach(function(a){e.on(a,function(e){t.$emit(a,e)})}),o.forEach(function(a){e.on(a,function(e){t.$emit("chart"+a,e)})}),this.chart=e},connect:function(t){"string"!=typeof t&&(t=t.map(function(t){return t.chart})),s.a.connect(t)},disconnect:function(t){s.a.connect(t)},registerMap:function(t,e,a){s.a.registerMap(t,e,a)},registerTheme:function(t,e){s.a.registerTheme(t,e)}}},188:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(490),s=a.n(n),i=a(495),o=a.n(i);e.default={name:"app",components:{NprogressContainer:s.a,MainPart:o.a}}},189:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(493),s=a.n(n);e.default={name:"appMain",components:{LevelBar:s.a}}},190:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header"}},191:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(488),s=a.n(n);e.default={name:"LevelBar",components:{Breadcrumb:s.a},data:function(){return{list:null}},created:function(){this.getList()},computed:{name:function(){return this.$route.name}},methods:{getList:function(){var t=this.$route.matched.filter(function(t){return t.name}),e=t[0];!e||"Home"===e.name&&""===e.path||(t=[{name:"Home",path:"/"}].concat(t)),this.list=t}},watch:{$route:function(){this.getList()}}}},192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(91),s=a(489),i=a.n(s);e.default={components:{Expanding:i.a},props:{show:Boolean},data:function(){return{menu:n.a}},methods:{isExpanded:function(t){return t.meta.expanded},toggle:function(t,e){e.meta.expanded=!e.meta.expanded},generatePath:function(t,e){return t.path+"/"+e.path}}}},193:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(492),s=a.n(n),i=a(494),o=a.n(i),r=a(491),l=a.n(r);e.default={name:"main",components:{vHeader:s.a,Sidebar:o.a,AppMain:l.a},data:function(){return{}}}},194:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(497),s=a.n(n),i=a(502),o=a.n(i),r=a(503),l=a.n(r),c=a(504),u=a.n(c),d=a(505),p=a.n(d),m=a(506),f=a.n(m),v=a(507),h=a.n(v),b=a(508),x=a.n(b),_=a(509),g=a.n(_),y=a(498),C=a.n(y),w=a(499),k=a.n(w),L=a(500),P=a.n(L),A=a(501),E=a.n(A);e.default={components:{column1:s.a,column2:o.a,column3:l.a,column4:u.a,column5:p.a,column6:f.a,column7:h.a,column8:x.a,column9:g.a,column10:C.a,column11:k.a,column12:P.a,column13:E.a}}},195:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-1",data:function(){for(var t=[],e=[],a=[],n=0;n<100;n++)t.push("类目"+n),e.push(5*(Math.sin(n/5)*(n/5-10)+n/6)),a.push(5*(Math.cos(n/5)*(n/5-10)+n/6));return{column:{legend:{data:["bar","bar2"],align:"left"},toolbox:{feature:{magicType:{type:["stack","tiled"]},dataView:{},saveAsImage:{pixelRatio:2}}},tooltip:{},xAxis:{data:t,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:e,animationDelay:function(t){return 10*t}},{name:"bar2",type:"bar",data:a,animationDelay:function(t){return 10*t+100}}],animationEasing:"elasticOut",animationDelayUpdate:function(t){return 5*t}}}}}},196:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-10",data:function(){return{column:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]},series:[{name:"直接访问",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[320,302,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[150,212,201,154,190,330,410]},{name:"搜索引擎",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[820,832,901,934,1290,1330,1320]}]}}}}},197:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-11",data:function(){return{column:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["2011年","2012年"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["巴西","印尼","美国","印度","中国","世界人口(万)"]},series:[{name:"2011年",type:"bar",data:[18203,23489,29034,104970,131744,630230]},{name:"2012年",type:"bar",data:[19325,23438,31e3,121594,134141,681807]}]}}}}},198:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-12",data:function(){return{column:{tooltip:{trigger:"axis"},legend:{data:["蒸发量","降水量"]},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value"}],series:[{name:"蒸发量",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"降水量",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],markPoint:{data:[{name:"年最高",value:182.2,xAxis:7,yAxis:183},{name:"年最低",value:2.3,xAxis:11,yAxis:3}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}}}}},199:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-13",data:function(){return{column:{tooltip:{trigger:"axis"},legend:{data:["最新成交价","预购队列"]},toolbox:{show:!0,feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},dataZoom:{show:!1,start:0,end:100},xAxis:[{type:"category",boundaryGap:!0,data:function(){for(var t=new Date,e=[],a=10;a--;)e.unshift(t.toLocaleTimeString().replace(/^\D*/,"")),t=new Date(t-2e3);return e}()},{type:"category",boundaryGap:!0,data:function(){for(var t=[],e=10;e--;)t.push(e+1);return t}()}],yAxis:[{type:"value",scale:!0,name:"价格",max:30,min:0,boundaryGap:[.2,.2]},{type:"value",scale:!0,name:"预购量",max:1200,min:0,boundaryGap:[.2,.2]}],series:[{name:"预购队列",type:"bar",xAxisIndex:1,yAxisIndex:1,data:function(){for(var t=[],e=10;e--;)t.push(Math.round(1e3*Math.random()));return t}()},{name:"最新成交价",type:"line",data:function(){for(var t=[],e=0;e<10;)t.push((10*Math.random()+5).toFixed(1)-0),e++;return t}()}]}}}}},200:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-2",data:function(){for(var t=[],e=[],a=[],n=[],s=[],i=0;i<10;i++)t.push("Class"+i),e.push((2*Math.random()).toFixed(2)),a.push(-Math.random().toFixed(2)),n.push((5*Math.random()).toFixed(2)),s.push((Math.random()+.3).toFixed(2));var o={normal:{},emphasis:{barBorderWidth:1,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"rgba(0,0,0,0.5)"}};return{column:{backgroundColor:"#eee",legend:{data:["bar","bar2","bar3","bar4"],align:"left",left:10},brush:{toolbox:["rect","polygon","lineX","lineY","keep","clear"],xAxisIndex:0},toolbox:{feature:{magicType:{type:["stack","tiled"]},dataView:{}}},tooltip:{},xAxis:{data:t,name:"X Axis",silent:!1,axisLine:{onZero:!0},splitLine:{show:!1},splitArea:{show:!1}},yAxis:{inverse:!0,splitArea:{show:!1}},grid:{left:100},visualMap:{type:"continuous",dimension:1,text:["High","Low"],inverse:!0,itemHeight:200,calculable:!0,min:-2,max:6,top:60,left:10,inRange:{colorLightness:[.4,.8]},outOfRange:{color:"#bbb"},controller:{inRange:{color:"#2f4554"}}},series:[{name:"bar",type:"bar",stack:"one",itemStyle:o,data:e},{name:"bar2",type:"bar",stack:"one",itemStyle:o,data:a},{name:"bar3",type:"bar",stack:"two",itemStyle:o,data:n},{name:"bar4",type:"bar",stack:"two",itemStyle:o,data:s}]}}}}},201:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(63),s=a.n(n);e.default={name:"column-3",data:function t(){for(var e=["点","击","柱","子","或","者","两","指","在","触","屏","上","滑","动","能","够","自","动","缩","放"],t=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220],a=500,n=[],i=0;i<t.length;i++)n.push(a);return{column:{xAxis:{data:e,axisLabel:{inside:!0,textStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{normal:{color:"rgba(0,0,0,0.05)"}},barGap:"-100%",barCategoryGap:"40%",data:n,animation:!1},{type:"bar",itemStyle:{normal:{color:new s.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{color:new s.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:t}]}}}}},202:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(63);a.n(n);e.default={name:"column-4",data:function(){return{column:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["利润","支出","收入"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value"}],yAxis:[{type:"category",axisTick:{show:!1},data:["周一","周二","周三","周四","周五","周六","周日"]}],series:[{name:"利润",type:"bar",label:{normal:{show:!0,position:"inside"}},data:[200,170,240,244,200,220,210]},{name:"收入",type:"bar",stack:"总量",label:{normal:{show:!0}},data:[320,302,341,374,390,450,420]},{name:"支出",type:"bar",stack:"总量",label:{normal:{show:!0,position:"left"}},data:[-120,-132,-101,-134,-190,-230,-210]}]}}}}},203:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-5",data:function(){var t={normal:{position:"right"}};return{column:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:80,bottom:30},xAxis:{type:"value",position:"top",splitLine:{lineStyle:{type:"dashed"}}},yAxis:{type:"category",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["ten","nine","eight","seven","six","five","four","three","two","one"]},series:[{name:"生活费",type:"bar",stack:"总量",label:{normal:{show:!0,formatter:"{b}"}},data:[{value:-.07,label:t},{value:-.09,label:t},.2,.44,{value:-.23,label:t},.08,{value:-.17,label:t},.47,{value:-.36,label:t},.18]}]}}}}},204:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-6",data:function(){return{column:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎","百度","谷歌","必应","其他"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",data:[320,332,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"广告",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"广告",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"广告",data:[150,232,201,154,190,330,410]},{name:"搜索引擎",type:"bar",data:[862,1018,964,1026,1679,1600,1570],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"百度",type:"bar",barWidth:5,stack:"搜索引擎",data:[620,732,701,734,1090,1130,1120]},{name:"谷歌",type:"bar",stack:"搜索引擎",data:[120,132,101,134,290,230,220]},{name:"必应",type:"bar",stack:"搜索引擎",data:[60,72,71,74,190,130,110]},{name:"其他",type:"bar",stack:"搜索引擎",data:[62,82,91,84,109,110,120]}]}}}}},205:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-7",data:function(){return{column:{color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}}}}},206:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-8",data:function(){return{column:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e=t[1];return e.name+"<br/>"+e.seriesName+" : "+e.value}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:["总费用","房租","水电费","交通费","伙食费","日用品数"]},yAxis:{type:"value"},series:[{name:"辅助",type:"bar",stack:"总量",itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,1700,1400,1200,300,0]},{name:"生活费",type:"bar",stack:"总量",label:{normal:{show:!0,position:"inside"}},data:[2900,1200,300,200,900,300]}]}}}}},207:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"column-9",data:function(){return{column:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e;return e="-"!=t[1].value?t[1]:t[0],e.name+"<br/>"+e.seriesName+" : "+e.value}},legend:{data:["支出","收入"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:function(){for(var t=[],e=1;e<=11;e++)t.push("11月"+e+"日");return t}()},yAxis:{type:"value"},series:[{name:"辅助",type:"bar",stack:"总量",itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,900,1245,1530,1376,1376,1511,1689,1856,1495,1292]},{name:"收入",type:"bar",stack:"总量",label:{normal:{show:!0,position:"top"}},data:[900,345,393,"-","-",135,178,286,"-","-","-"]},{name:"支出",type:"bar",stack:"总量",label:{normal:{show:!0,position:"bottom"}},data:["-","-","-",108,154,"-","-","-",119,361,203]}]}}}}},208:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},209:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},210:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},211:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},212:function(t,e,a){"use strict";e.a={name:"Charts",path:"/charts",meta:{icon:"fa-bar-chart-o",expanded:!1},children:[{name:"Column",path:"column"}]}},213:function(t,e,a){"use strict";e.a={path:"/components",meta:{icon:"fa-building-o",expanded:!1,label:"Components"},children:[{name:"BackToTop",path:"backToTop",meta:{description:"Jump component is based on jump.js",repository:"https://github.com/vue-bulma/jump"}}]}},458:function(t,e){},459:function(t,e){},460:function(t,e){},461:function(t,e){},462:function(t,e){},463:function(t,e){},464:function(t,e){},465:function(t,e){},466:function(t,e){},467:function(t,e){},468:function(t,e){},469:function(t,e){},470:function(t,e){},471:function(t,e){},472:function(t,e){},473:function(t,e){},474:function(t,e){},475:function(t,e){},476:function(t,e){},477:function(t,e){},478:function(t,e){},479:function(t,e){},480:function(t,e){},481:function(t,e){},482:function(t,e){},483:function(t,e){},484:function(t,e){},485:function(t,e){},487:function(t,e,a){t.exports=a.p+"static/img/user.31517ba.png"},488:function(t,e,a){a(464);var n=a(4)(a(184),a(520),null,null);t.exports=n.exports},489:function(t,e,a){a(466);var n=a(4)(a(185),a(522),null,null);t.exports=n.exports},490:function(t,e,a){a(470);var n=a(4)(a(186),a(526),null,null);t.exports=n.exports},491:function(t,e,a){a(473);var n=a(4)(a(189),a(529),null,null);t.exports=n.exports},492:function(t,e,a){a(465);var n=a(4)(a(190),a(521),null,null);t.exports=n.exports},493:function(t,e,a){a(469);var n=a(4)(a(191),a(525),null,null);t.exports=n.exports},494:function(t,e,a){a(471);var n=a(4)(a(192),a(527),null,null);t.exports=n.exports},495:function(t,e,a){a(468);var n=a(4)(a(193),a(524),"data-v-5c7abb4f",null);t.exports=n.exports},496:function(t,e,a){a(483);var n=a(4)(a(194),a(539),null,null);t.exports=n.exports},497:function(t,e,a){a(482);var n=a(4)(a(195),a(538),null,null);t.exports=n.exports},498:function(t,e,a){a(461);var n=a(4)(a(196),a(517),null,null);t.exports=n.exports},499:function(t,e,a){a(460);var n=a(4)(a(197),a(516),null,null);t.exports=n.exports},500:function(t,e,a){a(459);var n=a(4)(a(198),a(515),null,null);t.exports=n.exports},501:function(t,e,a){a(458);var n=a(4)(a(199),a(514),null,null);t.exports=n.exports},502:function(t,e,a){a(481);var n=a(4)(a(200),a(537),null,null);t.exports=n.exports},503:function(t,e,a){a(480);var n=a(4)(a(201),a(536),null,null);t.exports=n.exports},504:function(t,e,a){a(479);var n=a(4)(a(202),a(535),null,null);t.exports=n.exports},505:function(t,e,a){a(478);var n=a(4)(a(203),a(534),null,null);t.exports=n.exports},506:function(t,e,a){a(477);var n=a(4)(a(204),a(533),null,null);t.exports=n.exports},507:function(t,e,a){a(476);var n=a(4)(a(205),a(532),null,null);t.exports=n.exports},508:function(t,e,a){a(475);var n=a(4)(a(206),a(531),null,null);t.exports=n.exports},509:function(t,e,a){a(474);var n=a(4)(a(207),a(530),null,null);t.exports=n.exports},510:function(t,e,a){a(485);var n=a(4)(a(208),a(541),null,null);t.exports=n.exports},511:function(t,e,a){a(463);var n=a(4)(a(209),a(519),null,null);t.exports=n.exports},512:function(t,e,a){a(472);var n=a(4)(a(210),a(528),null,null);t.exports=n.exports},513:function(t,e,a){a(462);var n=a(4)(a(211),a(518),null,null);t.exports=n.exports},514:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-13"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},515:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-12"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},516:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-11"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},517:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-10"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},518:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboardPanel"},[t._v("\n  我是dashboard\n")])},staticRenderFns:[]}},519:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backToTopPanel"},[t._v("\n  我是backToTop\n")])},staticRenderFns:[]}},520:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",{staticClass:"breadcrumb"},t._l(t.list,function(e,n){return a("li",[t.isLast(n)?a("span",{staticClass:"active"},[t._v(t._s(t.showName(e)))]):a("router-link",{attrs:{to:e.path}},[t._v(t._s(t.showName(e)))])],1)}))},staticRenderFns:[]}},521:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("a",{staticClass:"va-logo clearfix",attrs:{href:"#"}},[n("span",[t._v("Vue-")]),t._v("Admin\n  ")]),t._v(" "),n("a",{staticClass:"collapse-menu-link",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-bars"})]),t._v(" "),n("div",{staticClass:"search"},[n("label",{staticClass:"fa fa-search",attrs:{for:"searchInput"}}),t._v(" "),n("input",{attrs:{type:"text",name:"searchInput",id:"searchInput",placeholder:"Search for ..."}})]),t._v(" "),n("div",{staticClass:"user-profile clearfix"},[n("div",{staticClass:"va-user-profile"},[n("a",{staticClass:"profile-toggle-link",attrs:{href:"#",id:"user-profile-dd"}},[n("img",{attrs:{src:a(487),alt:"用户头像"}})])]),t._v(" "),n("ul",{staticClass:"va-msg-center clearfix"},[n("li",{staticClass:"dropdown"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#",id:"msg-dd1"}},[n("i",{staticClass:"fa fa-bell-o"}),t._v(" "),n("span",[t._v("5")]),t._v(" "),n("div",{staticClass:"notification-ring"})])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#",id:"msg-dd2"}},[n("i",{staticClass:"fa fa-envelope-o"}),t._v(" "),n("span",[t._v("5")]),t._v(" "),n("div",{staticClass:"notification-ring"})])])])]),t._v(" "),n("div",{staticClass:"questions-section"},[t._v("\n    Have questions?"),n("a",{attrs:{href:"#"}},[t._v("liujianhuan@360.cn")])])])}]}},522:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{on:{beforeEnter:t.beforeEnter,afterEnter:t.afterEnter,beforeLeave:t.beforeLeave,afterLeave:t.afterLeave}},[t._t("default")],2)},staticRenderFns:[]}},523:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"echarts"})},staticRenderFns:[]}},524:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainPage"},[a("v-header"),t._v(" "),a("sidebar"),t._v(" "),a("app-main")],1)},staticRenderFns:[]}},525:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"va-levelbar"},[a("h1",{staticClass:"va-title"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"va-breadcrumb"},[a("breadcrumb",{attrs:{list:t.list}},[a("breadcrumb")],1)],1)])},staticRenderFns:[]}},526:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nprogress-container"})},staticRenderFns:[]}},527:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"va-sidebar"},[a("ul",{staticClass:"va-sidebar-list"},t._l(t.menu,function(e,n){return a("li",{staticClass:"va-sidebar-list-item"},[e.path?a("router-link",{staticClass:"va-sidebar-list-link",attrs:{to:e.path,exact:!0,"aria-expanded":t.isExpanded(e)?"true":"false"},nativeOn:{click:function(a){t.toggle(n,e)}}},[a("span",[a("i",{class:["fa",e.meta.icon]})]),t._v("\n        "+t._s(e.meta.label||e.name)+"\n        "),e.children&&e.children.length?a("span",[t.isExpanded(e)?a("b",{staticClass:"fa fa-angle-up"}):a("b",{staticClass:"fa fa-angle-down"})]):t._e()]):a("a",{staticClass:"va-sidebar-list-link",attrs:{"aria-expanded":t.isExpanded(e)},on:{click:function(a){t.toggle(n,e)}}},[a("span",[a("i",{class:["fa",e.meta.icon]})]),t._v("\n        "+t._s(e.meta.label||e.name)+"\n        "),e.children&&e.children.length?a("span",[a("b",{staticClass:"fa fa-angle-down"})]):t._e()]),t._v(" "),e.children&&e.children.length?a("expanding",[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.isExpanded(e),expression:"isExpanded(item)"}],staticClass:"va-sidebar-sublist"},t._l(e.children,function(n){return n.path?a("li",{staticClass:"va-sidebar-sublist-item"},[a("router-link",{staticClass:"va-sidebar-sublist-link",attrs:{to:t.generatePath(e,n)}},[t._v("\n              "+t._s(n.meta&&n.meta.label||n.name)+"\n            ")])],1):t._e()}))]):t._e()],1)})),t._v(" "),a("div",{staticClass:"sidebar-hover-elem"})])},staticRenderFns:[]}},528:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"componentsPanel"},[t._v("\n  我是components\n")])},staticRenderFns:[]}},529:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"va-main"},[a("div",{staticClass:"va-content"},[a("level-bar"),t._v(" "),a("router-view")],1)])},staticRenderFns:[]}},530:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-9"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-8"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-7"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-6"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-5"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},535:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-4"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},536:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-3"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-2"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},538:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column-1"},[a("chart",{attrs:{options:t.column}})],1)},staticRenderFns:[]}},539:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columnPanel"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            柱状图动画延迟\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column1")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            柱状图框选\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column2")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            特性示例：渐变色 阴影 点击缩放\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column3")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            正负条形图\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column4")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            交错正负轴标签\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column5")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            堆叠柱状图\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column6")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            坐标轴刻度与标签对齐\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column7")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            总体数值为部分数值之和\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column8")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            阶梯瀑布图\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column9")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            堆叠条形图\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column10")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            条形图\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column11")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            某地区降水量与蒸发量\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column12")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{
staticClass:"columnGrid"},[a("div",{staticClass:"columnHeader"},[a("h4",{staticClass:"columnTitle"},[t._v("\n            动态数据\n          ")])]),t._v(" "),a("div",{staticClass:"columnContent"},[a("column13")],1)])])],1)],1)},staticRenderFns:[]}},540:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nprogress-container"),t._v(" "),a("main-part")],1)},staticRenderFns:[]}},541:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chartsPanel"},[t._v("\n  我是Charts\n")])},staticRenderFns:[]}},578:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(18),s=a.n(n),i=a(161),o=a.n(i),r=a(157),l=a(162),c=a.n(l),u=a(158),d=a.n(u),p=a(159),m=(a.n(p),a(160)),f=a.n(m);s.a.use(d.a),s.a.use(c.a);new c.a({parent:".nprogress-container"});s.a.component("chart",f.a),new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})},91:function(t,e,a){"use strict";var n=a(213),s=a(212),i={items:[{name:"Dashboard",path:"/dashboard",meta:{icon:"fa-tachometer"}},s.a,n.a]};e.a=i.items}},[578]);