webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("ZDSe"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("ul",{staticClass:"nav"},[t("router-link",{attrs:{to:{path:"/"},tag:"li"}},[this._v("主页")]),this._v(" "),t("router-link",{attrs:{to:{path:"/Empty"},tag:"li"}},[this._v("空白页")])],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var r=n("ZsJ+")({name:"App"},i,!1,function(e){n("xmv4")},"data-v-4c289b08",null).exports,a=n("/wpA"),s=n("Xsnf"),c=n.n(s),l=n("bWTL"),u={name:"HelloWorld",components:{VueUeditorWrap:n.n(l).a},data:function(){return{msg:'<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',config:{autoHeightEnabled:!1,initialFrameHeight:240,initialFrameWidth:"100%",serverUrl:"http://35.201.165.105:8000/controller.php"}}},mounted:function(){console.log("%c注意：本Demo提供的serverUrl是为了方便小伙伴们体验图片文件等上传功能。\n请勿在生产环境使用此serverUrl！！！","background:#f33;color:#fff")},methods:{ready:function(e){console.log("实例"+e.key+"已经初始化:",e)},showData:function(){alert(this.msg),console.log(this.msg)},addCustomUI:function(e,t){console.log(e+"的配置参数是:",c()(t,null,2)),window.UE.registerUI("test-button"+e,function(t,n){t.registerCommand(n,{execCommand:function(){t.execCommand("inserthtml",'<span style="color: #'+e.substr(-3)+';">这是一段由自定义按钮添加的文字，你点击的编辑器ID是'+e+"</span>")}});var o=new window.UE.ui.Button({name:n,title:"鼠标悬停时的提示文字",cssRules:"background-image: url('/static/test-button.png') !important;background-size: cover;",onclick:function(){t.execCommand(n)}});return t.addListener("selectionchange",function(){var e=t.queryCommandState(n);-1===e?(o.setDisabled(!0),o.setChecked(!1)):(o.setDisabled(!1),o.setChecked(e))}),o},0,e),window.UE.registerUI("table-center-button"+e,function(e,t){e.registerCommand(t,{execCommand:function(){var t=e.document.querySelectorAll("table");t.length?t.forEach(function(e){e.style.margin="0 auto"}):e.trigger("showmessage",{content:"没有表格",timeout:2e3})}});var n=new window.UE.ui.Button({name:t,title:"点击设置表格居中",cssRules:"background-image: url('/static/center.png') !important;background-size: cover;",onclick:function(){e.execCommand(t)}});return e.addListener("selectionchange",function(){var o=e.queryCommandState(t);-1===o?(n.setDisabled(!0),n.setChecked(!1)):(n.setDisabled(!1),n.setChecked(o))}),n},1,e),window.UE.registerUI("test-dialog"+e,function(e,t){var n=new window.UE.ui.Dialog({iframeUrl:"/static/customizeDialogPage.html",editor:e,name:t,title:"这是一个自定义的 Dialog 浮层",cssRules:"width:600px;height:300px;",buttons:[{className:"edui-okbutton",label:"确定",onclick:function(){n.close(!0)}},{className:"edui-cancelbutton",label:"取消",onclick:function(){n.close(!1)}}]});return new window.UE.ui.Button({name:"dialog-button",title:"鼠标悬停时的提示文字",cssRules:"background-image: url('/static/test-dialog.png') !important;background-size: cover;",onclick:function(){n.render(),n.open()}})},2,e)}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preview",domProps:{innerHTML:e._s(e.msg)},on:{click:e.showData}}),e._v(" "),e._l(2,function(t){return n("vue-ueditor-wrap",{key:t,ref:"ueditor",refInFor:!0,attrs:{destroy:!1,config:e.config},on:{ready:e.ready,beforeInit:e.addCustomUI},model:{value:e.msg,callback:function(t){e.msg=t},expression:"msg"}})})],2)},staticRenderFns:[]};var m=n("ZsJ+")(u,d,!1,function(e){n("zmwg")},null,null).exports,g={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("你瞅啥?")])},staticRenderFns:[]},p=n("ZsJ+")(null,g,!1,null,null,null).exports;o.a.use(a.a);var f=new a.a({routes:[{path:"/",component:m},{path:"/Empty",component:p}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:f,components:{App:r},template:"<App/>"})},bWTL:function(e,t){e.exports=VueUeditorWrap},xmv4:function(e,t){},zmwg:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.46f38d1fda6f5b38729a.js.map