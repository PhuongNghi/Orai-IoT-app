webpackJsonp([1,0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(4),s=a(i),r=n(26),o=(a(r),n(25)),l=a(o),c=n(5),f=a(c),d=n(3),u=(a(d),n(38)),v=a(u),p=n(14),m=(a(p),n(13)),h=(a(m),n(12)),_=(a(h),n(20)),b=(a(_),n(11)),g=a(b),k=n(27),C=a(k);s.default.use(l.default),s.default.use(f.default),s.default.use(v.default),new s.default({el:"#app",template:"<app/>",framework7:{root:"#app",material:!0,routes:g.default},components:{app:C.default}})},,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),s=(a(i),n(3)),r=a(s),o=r.default.initializeApp({databaseURL:"https://orai-c91c3.firebaseio.com/"});e.default=o.database()},,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(28),s=a(i);e.default={components:{MyBlockEvent:s.default},data:function(){return{}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=a(i),r=n(4),o=(a(r),s.default.ref("events")),l="http://orai.kevinmoutier.com/set";e.default={data:function(){return{eventdate:"",linkEvent:"",progress:"",date:""}},firebase:{events:o},methods:{checkEvent:function(t){this.linkEvent="/detail/"+t},sendSablier:function(t,e){for(var n=0;n<this.events.length;n++)n==e?o.child(this.events[e][".key"]).child("status").set(!0):o.child(this.events[n][".key"]).child("status").set(!1);this.$http.get(l).then(function(t){console.log(t)},function(t){})}},mounted:function(){var t,e,n,a,i,s,r,l,c,f,d=this.events,u=o,v=function(o,d){t=(new Date).getTime();for(var u=0;u<o.length;u++)l=o[u],e=(new Date).toLocaleDateString(),n=e.split("/"),a=n[2]+"-"+n[1]+"-"+n[0],i=new Date(a).getTime(),s=new Date(o[u].endDate).getTime(),t=(new Date).getTime(),r=Math.round((t-i)/(s-i)*100),c=Math.abs(s-t),f=Math.ceil(c/864e5),d.child(l[".key"]).child("startDate").set(a),d.child(l[".key"]).child("progress").set(r),d.child(l[".key"]).child("daysDiff").set(f),t>s&&d.child(l[".key"]).remove()};setTimeout(function(){v(d,u)},1500)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=a(i);e.default={data:function(){return{eventname:"",eventcolor:"",progress:"",status:!1,daysDiff:"",endDate:"",startDate:""}},firebase:{events:s.default.ref("events")},methods:{addItem:function(){this.eventDateString=new Date(this.endDate).toLocaleDateString(),this.eventDateSplit=this.eventDateString.split("/"),this.eventDateNew=this.eventDateSplit[2]+"-"+this.eventDateSplit[1]+"-"+this.eventDateSplit[0],this.nowString=(new Date).toLocaleDateString(),this.nowSplit=this.nowString.split("/"),this.nowNew=this.nowSplit[2]+"-"+this.nowSplit[1]+"-"+this.nowSplit[0],this.end=new Date(this.eventDateNew),this.start=new Date(this.nowNew),this.now=new Date,this.timeDiff=Math.abs(this.end.getTime()-this.now.getTime()),this.diffDays=Math.ceil(this.timeDiff/864e5),this.progress=Math.round((this.now-this.start)/(this.end-this.start)*100),this.$firebaseRefs.events.push({name:this.eventname,endDate:this.endDate,startDate:this.nowNew,color:this.eventcolor,progress:this.progress,status:this.status,daysDiff:this.diffDays})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=a(i);e.default={data:function(){return{eventname:"",eventdate:"",eventcolor:"",progress:"",status:!1,daysDiff:""}},created:function(){this.fetchData()},watch:{$route:"fetchData"},firebase:{events:s.default.ref("events")},methods:{fetchData:function(){this.id=this.$route.params.id}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"/add/",component:n(29)},{path:"/compte/",component:n(30)},{path:"/infos/",component:n(32)},{path:"/detail/:id",component:n(31)}]},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,n){var a,i;n(18),a=n(6);var s=n(36);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(16),a=n(7);var s=n(34);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(17),a=n(8);var s=n(35);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(15),a=n(9);var s=n(33);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(19),a=n(10);var s=n(37);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e){var n,a;a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"compte-page"},[n("f7-navbar",{attrs:{title:"","back-link":"Back",sliding:""}},[n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1),t._v(" "),n("div",[t._v("\n    MON COMPTE\n  ")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.events,function(e,a){return n("f7-list-group",{staticClass:"progress-event"},[n("f7-link",{attrs:{href:t.linkEvent},on:{click:function(e){t.checkEvent(a)}}},[n("f7-block",[n("f7-progressbar",{staticClass:"progress-value",attrs:{progress:e.progress,color:e.color}})],1),t._v(" "),n("f7-list-item",{attrs:{title:e.name}},[n("f7-block",[t._v("\n        "+t._s(e.daysDiff)+" jours restants\n      ")]),t._v(" "),e.status?n("f7-block",[t._v("\n        ACTIF\n      ")]):t._e(),t._v(" "),n("f7-button",{staticClass:"btn-send-to-sablier",on:{click:function(n){t.sendSablier(e,a)}}},[t._v("Sablier")])],1)],1)],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"add-page"},[n("f7-navbar",{attrs:{title:"","back-link":"Back",sliding:""}},[n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1),t._v(" "),n("form",{attrs:{id:"createEvent"}},[n("div",{staticClass:"list-block"},[n("ul",[n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.eventname,expression:"eventname"}],attrs:{type:"text",placeholder:"Nom de l'événement"},domProps:{value:t._s(t.eventname)},on:{input:function(e){e.target.composing||(t.eventname=e.target.value)}}})])])])]),t._v(" "),n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{type:"date",placeholder:"Date"},domProps:{value:t._s(t.endDate)},on:{input:function(e){e.target.composing||(t.endDate=e.target.value)}}}),t._v(" "),n("f7-button",{attrs:{round:"",color:"pink"}},[t._v("Synchroniser")]),t._v(" "),n("br")],1)])])]),t._v(" "),n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-inner"},[n("ul",{staticClass:"choose-colors"},[n("li",[n("label",{staticClass:"label-radio item-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.eventcolor,expression:"eventcolor"}],attrs:{type:"radio",name:"lightcolor",value:"red"},domProps:{checked:t._q(t.eventcolor,"red")},on:{click:function(e){t.eventcolor="red"}}}),t._v(" "),n("div",{staticClass:"item-media"},[n("i",{staticClass:"icon icon-form-radio"})]),t._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title"},[t._v("Rouge")])])])]),t._v(" "),n("li",[n("label",{staticClass:"label-radio item-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.eventcolor,expression:"eventcolor"}],attrs:{type:"radio",name:"lightcolor",value:"green"},domProps:{checked:t._q(t.eventcolor,"green")},on:{click:function(e){t.eventcolor="green"}}}),t._v(" "),n("div",{staticClass:"item-media"},[n("i",{staticClass:"icon icon-form-radio"})]),t._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title"},[t._v("Vert")])])])])])])])]),t._v(" "),n("li",{staticClass:"add-buttons-bonus"},[n("a",{attrs:{href:""}},[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("f7-icon",{attrs:{f7:"bell"}})],1),t._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title"},[t._v("Choisir une annonce de fin")])])])]),t._v(" "),n("a",{attrs:{href:""}},[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("f7-icon",{attrs:{f7:"compose"}})],1),t._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title"},[t._v("Ajouter une note")])])])]),t._v(" "),n("a",{attrs:{href:""}},[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("f7-icon",{attrs:{f7:"person"}})],1),t._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title"},[t._v("Inviter quelqu'un")])])])])]),t._v(" "),n("li",{staticClass:"add-btn-valid"},[n("a",{attrs:{href:""}},[n("f7-button",{attrs:{round:"",color:"pink",type:"submit"},on:{click:t.addItem}},[t._v("Valider")])],1)])])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("f7-statusbar"),t._v(" "),n("f7-panel",{attrs:{right:"",reveal:"",layout:"dark"}},[n("f7-view",{attrs:{id:"right-panel-view","navbar-through":"","dynamic-navbar":!0}},[n("f7-navbar",{attrs:{title:"Menu"}}),t._v(" "),n("f7-pages",[n("f7-page",[n("f7-list",[n("f7-list-item",{attrs:{link:"#"}},[n("a",{staticClass:"menu-link close-panel",attrs:{href:"/compte/","data-view":".main-view"}},[t._v("Mon Compte")])]),t._v(" "),n("f7-list-item",{attrs:{link:"#"}},[n("a",{staticClass:"menu-link close-panel",attrs:{href:"/infos/","data-view":".main-view"}},[t._v("Informations")])]),t._v(" "),n("f7-list-item",{attrs:{link:"#"}},[n("a",{staticClass:"menu-link close-panel",attrs:{href:"/veille/","data-view":".main-view"}},[t._v("Mettre en veille")])])],1)],1)],1)],1)],1),t._v(" "),n("f7-views",[n("f7-view",{staticClass:"main-view",attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[n("f7-pages",[n("f7-page",{staticClass:"home-page"},[n("f7-navbar",[n("f7-nav-left"),t._v(" "),n("f7-nav-center",{attrs:{sliding:""}},[t._v("Oraï App")]),t._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"left"}})],1)],1),t._v(" "),n("f7-list",[n("f7-subnavbar",[n("f7-buttons",[n("f7-button",{attrs:{"tab-link":"#event",active:""}},[t._v("Évènements")]),t._v(" "),n("f7-button",{attrs:{"tab-link":"#minuteur"}},[t._v("Minuteurs")])],1)],1),t._v(" "),n("f7-page",{attrs:{tabs:"","no-page-content":""}},[n("f7-page-content",{attrs:{tab:"",active:"",id:"event"}},[n("my-block-event")],1),t._v(" "),n("f7-page-content",{attrs:{tab:"",id:"minuteur"}},[t._v("\n               Tab 2 Content ...\n            ")])],1),t._v(" "),n("f7-link",{attrs:{href:"/add/"}},[n("f7-fab",{attrs:{color:"pink"}},[n("f7-icon",{attrs:{f7:"add"}})],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"detail-page"},[n("f7-navbar",{attrs:{title:"","back-link":"Back",sliding:""}},[n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1),t._v(" "),n("div",[t._v("\n    "+t._s(t.events[t.id].name)+"\n  ")])],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.86d83b9976bfc2f85161.js.map