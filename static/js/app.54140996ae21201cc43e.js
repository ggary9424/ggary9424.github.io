webpackJsonp([1],{M93x:function(e,t,r){"use strict";function o(e){r("tKJ6")}var n=r("xJD8"),a=r("TnSX"),i=r("VU/8"),c=o,s=i(n.a,a.a,!1,c,null,null);t.a=s.exports},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),n=r("M93x");o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:n.a}})},TnSX:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"video-container"},[r("video",{ref:"ref-video",attrs:{controls:"",preload:"",poster:"https://c.s-microsoft.com/zh-tw/CMSImages/Surface_Where2buy_Hero_JL_V3.jpg?version=15923625-15a3-6fbd-a28c-0a0d89b960e3",controlsList:"nodownload"}},[r("source",{attrs:{src:e.videoSrc,type:"video/mp4"}})]),e._v(" "),r("div",{staticClass:"video-overlay"},[r("p",{style:{opacity:e.textOpacity}},[e._v(" "+e._s(e.name)+" ")])])])])},n=[],a={render:o,staticRenderFns:n};t.a=a},tKJ6:function(e,t){},xJD8:function(e,t,r){"use strict";t.a={name:"app",data:function(){return{videoId:this.getParameterByName("id"),name:this.getParameterByName("name"),textOpacity:0}},computed:{videoSrc:function(){return"https://s3-ap-northeast-1.amazonaws.com/microsoft-videos/"+this.videoId+".mp4"}},mounted:function(){var e=this;this.$refs["ref-video"].ontimeupdate=function(t){console.log(e.$refs["ref-video"].currentTime),e.$refs["ref-video"].currentTime>=10&&e.$refs["ref-video"].currentTime<15?e.textOpacity=1:(e.$refs["ref-video"].currentTime,e.textOpacity=0)}},methods:{getParameterByName:function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),o=r.exec(t);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}}}}},["NHnr"]);
//# sourceMappingURL=app.54140996ae21201cc43e.js.map