webpackJsonp([7],{"+L9U":function(e,t,n){e.exports=n.p+"static/img/qian.3431472.gif"},DSJe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("31+P"),a=n("pFYg"),o=n.n(a),r=n("Zrlr"),s=n.n(r),u=n("wxAW"),l=n.n(u),d=function(){function e(){s()(this,e)}return l()(e,null,[{key:"getParams",value:function(e,t){return e.$route.params[t]}},{key:"formatTime",value:function(e,t){if(0===arguments.length)return null;10===(e+"").length&&(e=1e3*+e);var n,i=t||"{y}-{m}-{d} {h}:{i}:{s}",a={y:(n="object"===(void 0===e?"undefined":o()(e))?e:new Date(e)).getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return i.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=a[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}},{key:"h5shake",value:function(e,t){window.DeviceMotionEvent?"build"==e?(console.log("构建摇一摇函数"),window.addEventListener("devicemotion",t,!1)):"destroy"==e&&(console.log("摧毁摇一摇函数"),window.removeEventListener("devicemotion",t,!1)):alert("您的设备不支持该功能")}},{key:"deviceMotionHandler",value:function(e){var t,n,i,a,o,r;a=o=r=0;var s=e.accelerationIncludingGravity;t=s.x,n=s.y,i=s.z,(Math.abs(t-a)>25||Math.abs(n-o)>25||Math.abs(i-r)>25)&&alert("恭喜你中奖了"),a=t,o=n,r=i}}]),e}(),c={components:{modal:i.a},data:function(){return{bgsrc:n("+L9U"),bgmusic:n("dwlN"),prize:0,prizesList:[n("+nCy"),n("6ljX"),n("ocLm"),n("ABYv"),n("UMxn"),n("4Hd+"),n("5BuB"),n("a/EL")],prizeName:["5元红包","0.5元红包","1元红包","10元红包","vivox9","王者荣耀皮肤","小天鹅洗衣机","谢谢参与"],lotteryBtn:{img:n("Q0um")},modalShow:!1,modaltitle:"抽签结果",modalcontent:"哈哈哈，中招了吧，这是钓鱼链接，你的微信要被盗号了"}},beforeMount:function(){document.title="摇摇你的幸运签"},mounted:function(){d.h5shake("build",this.shakemain)},destroyed:function(){d.h5shake("destroy",this.shakemain)},methods:{shakemain:function(){var e,t,n,i,a,o,r=this;i=a=o=0;var s=event.accelerationIncludingGravity;e=s.x,t=s.y,n=s.z,(Math.abs(e-i)>50||Math.abs(t-a)>50||Math.abs(n-o)>50)&&(this.$refs.audio.play(),setTimeout(function(){r.modalShow=!0},2e3)),i=e,a=t,o=n}}},m={render:function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"h5shakeCom"},[i("img",{staticClass:"bgimg",attrs:{src:t.bgsrc}}),t._v(" "),i("audio",{ref:"audio",attrs:{src:t.bgmusic,preload:"preload",id:"shakingAudio"}}),t._v(" "),i("modal",{attrs:{modalShow:t.modalShow,modaltitle:t.modaltitle,modalcontent:t.modalcontent,cancel:function(){e.modalShow=!1},confirm:function(){e.modalShow=!1},useimg:!0,src:t.prizesList[t.prize]}})],1)},staticRenderFns:[]};var f=n("VU/8")(c,m,!1,function(e){n("KMBy")},"data-v-0a76186c",null);t.default=f.exports},KMBy:function(e,t){},Q0um:function(e,t){e.exports="data:image/png;base64,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"},Zrlr:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dwlN:function(e,t,n){e.exports=n.p+"static/media/yaoyiyao.30304c0.mp3"},wxAW:function(e,t,n){"use strict";t.__esModule=!0;var i,a=n("C4MV"),o=(i=a)&&i.__esModule?i:{default:i};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()}});
//# sourceMappingURL=7.030f2b818d48a924c405.js.map