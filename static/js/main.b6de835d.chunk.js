(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{129:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"AUTH_USER_GET",(function(){return O})),n.d(r,"AUTH_USER_GET_INPROGRESS",(function(){return h})),n.d(r,"AUTH_USER_GET_SUCCESS",(function(){return g})),n.d(r,"AUTH_USER_GET_FAILURE",(function(){return m})),n.d(r,"AUTH_CLEAR_TOKEN",(function(){return E})),n.d(r,"AUTH_SAVE_TOKEN",(function(){return x}));var c={};n.r(c),n.d(c,"DEVICES_GET_ALL",(function(){return ke})),n.d(c,"DEVICES_GET_ALL_INPROGRESS",(function(){return _e})),n.d(c,"DEVICES_GET_ALL_SUCCESS",(function(){return Re})),n.d(c,"DEVICES_GET_ALL_FAILURE",(function(){return Ie})),n.d(c,"DEVICES_GET",(function(){return we})),n.d(c,"DEVICES_GET_INPROGRESS",(function(){return Te})),n.d(c,"DEVICES_GET_SUCCESS",(function(){return Ne})),n.d(c,"DEVICES_GET_FAILURE",(function(){return Le})),n.d(c,"DEVICES_CLONE",(function(){return Ue})),n.d(c,"DEVICES_CLONE_INPROGRESS",(function(){return Ge})),n.d(c,"DEVICES_CLONE_SUCCESS",(function(){return Pe})),n.d(c,"DEVICES_CLONE_FAILURE",(function(){return Ae})),n.d(c,"DEVICES_SET_SOURCE",(function(){return De})),n.d(c,"DEVICES_SET_REVISION",(function(){return Ve})),n.d(c,"DEVICES_SET_CLONE_USER_META",(function(){return Fe})),n.d(c,"DEVICES_SET_DESTINATION",(function(){return Me})),n.d(c,"DEVICES_CLEAN_FORM",(function(){return We})),n.d(c,"DEVICE_SET_FORM_ERRORS",(function(){return Be})),n.d(c,"DEVICE_SET_PLATFORM_TO_CLONE",(function(){return He}));var a=n(0),o=n.n(a),i=n(15),s=n.n(i),u=(n(129),n(196)),l=n(73),d=n(200),f=n(199),j=n(201),p=n(36),b=n(9),v=n(14),O="AUTH_USER_GET",h="auth/user/get/inprogress",g="auth/user/get/success",m="auth/user/get/failure",E="auth/token/clear",x="auth/token/save",S=n(10),y=n(5),C=function(e,t,n){return t.payload};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{success:function(n){return{type:e["".concat(t,"_SUCCESS")],payload:n}},failure:function(n){return{type:e["".concat(t,"_FAILURE")],error:n}},inProgress:function(){return{type:e["".concat(t,"_INPROGRESS")]}}}}function _(e,t,n,r){var c,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"error",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:C,i=t["".concat(n,"_INPROGRESS")],s=t["".concat(n,"_FAILURE")],u=t["".concat(n,"_SUCCESS")];return c={},Object(S.a)(c,i,(function(t,n){return Object(y.a)(Object(y.a)({},t),{},{status:e.IN_PROGRESS})})),Object(S.a)(c,s,(function(t,n){var r;return Object(y.a)(Object(y.a)({},t),{},(r={},Object(S.a)(r,"".concat(a),n.error),Object(S.a)(r,"status",e.FAILURE),r))})),Object(S.a)(c,u,(function(t,n){var c;return r?Object(y.a)(Object(y.a)({},t),{},(c={},Object(S.a)(c,r,o(t,n,r)),Object(S.a)(c,"status",e.SUCCESS),c)):Object(y.a)(Object(y.a)(Object(y.a)({},t),o(t,n,r)),{},{status:e.SUCCESS})})),c}var R=n(96),I=n.n(R),w="https://api.pantahub.com",T=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t){var n,r,c,a,o,i,s=arguments;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2&&void 0!==s[2]?s[2]:"application/json",c=s.length>3&&void 0!==s[3]?s[3]:"GET",a=s.length>4&&void 0!==s[4]?s[4]:{},o={"Content-Type":r},n&&(o.Authorization="Bearer ".concat(n)),i={method:c,headers:o},"GET"!==c&&"HEAD"!==c&&(i.body=JSON.stringify(a)),e.abrupt("return",I()(t,i));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t){var n,r,c,a,o,i=arguments;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:"",c=i.length>3&&void 0!==i[3]?i[3]:{},e.next=5,T(t,r,"application/json",n,c);case 5:return a=e.sent,e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",{ok:a.ok,redirected:a.redirected,headers:a.headers,status:a.status,json:o});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(t,"GET",n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n,r){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(t,"POST",n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();function G(e,t,n){return P.apply(this,arguments)}function P(){return(P=Object(v.a)(Object(b.a)().mark((function e(t,n,r){var c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:(c=e.sent).ok?n(c.json):r("string"===typeof c.json.Error?{code:c.status,message:c.json.Error}:c.json),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c={ok:!1,json:{code:0,message:e.t0}},r(c.json);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var A="error/set",D="error/clean",V=function(e,t){return function(n){n(function(e,t){if(401===e)return Q();return{type:A,payload:{type:e,error:t}}}(e.code,e.messsage)),n(t(e))}};var F=n(16),M="".concat(w,"/auth/auth_status"),W="".concat("https://hub.pantacor.com","/oauth2/authorize"),B="prn:pantahub.com:apis:/cloner",H="prn:pantahub.com:apis:/base/user.readonly",z=function(){return"".concat(location.href)},Y="_ph_token";var J=function(){localStorage.removeItem(Y),location.href=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"token",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B;return t=t||z(),encodeURI("".concat(W,"?client_id=").concat(r,"&scope=").concat(e,"&redirect_uri=").concat(t,"&response_type=").concat(n))}()};function K(e){return $.apply(this,arguments)}function $(){return($=Object(v.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(M,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=k(r,O),Q=function(){return J(),{type:E}},X=function(e){var t=function(e){return(e.match(/([^#=&]+)(=([^&]*))?/g)||[]).reduce((function(e,t){var n=t.split("="),r=Object(F.a)(n,2),c=r[0],a=r[1];return e[c]=a,e}),{})}(e);return function(e){localStorage.setItem(Y,e)}(t.access_token),{type:x,payload:t.access_token}},Z=n(198),ee=n(4),te=Object(u.a)((function(e){return{fab:{position:"absolute",top:e.spacing(2),right:e.spacing(2)}}}));var ne=Object(p.b)((function(e){return{token:e.auth.token}}),{Logout:function(){return localStorage.removeItem(Y),{type:E}}})((function(e){var t=e.token,n=e.Logout,r=te();return null===t?null:Object(ee.jsx)(Z.a,{className:r.fab,variant:"outlined",onClick:n,children:"Log out"})})),re=Object(u.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,0,6)},heroButtons:{marginTop:e.spacing(8)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},linearProgress:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},flex:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center","& > *":{margin:e.spacing(1)}},vertialSpace:{marginBottom:e.spacing(2)},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function ce(){return Object(ee.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(ee.jsx)(f.a,{color:"inherit",href:"https://www.github.com/highercomve/dolly",children:"Sergio Marin"})," ",(new Date).getFullYear(),"."]})}function ae(e){var t=e.children,n=re();return Object(ee.jsxs)(o.a.Fragment,{children:[Object(ee.jsx)(d.a,{}),Object(ee.jsx)(ne,{}),Object(ee.jsx)("header",{children:Object(ee.jsx)(j.a,{maxWidth:"md",children:Object(ee.jsx)("img",{src:"/dolly/logo.png",alt:"Dolly",height:"100px"})})}),Object(ee.jsx)("main",{children:t}),Object(ee.jsxs)("footer",{className:n.footer,children:[Object(ee.jsx)(l.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Pantahub cloner is a thirdparty opensource project"}),Object(ee.jsx)(ce,{})]})]})}var oe,ie=n(214),se=n(218),ue=n(212),le=n(213),de=n(215),fe=n(104),je=n.n(fe),pe=n(219),be=n(101),ve=(localStorage.getItem(Y)||"").split("|"),Oe=Object(F.a)(ve,2),he=Oe[0],ge=Oe[1],me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{return Object(be.a)(e)}catch(t){return{}}},Ee={IN_PROGRESS:"INPROGRESS",SUCCESS:"SUCCESS",FAILURE:"FAILURE"},xe=Object(y.a)({username:ge||"",token:he||null,exp:null,id:"",nick:"",orig_iat:null,prn:"",roles:"",type:"",gettingToken:!1,getTokenError:null,status:null},me(he)),Se=Object(y.a)(Object(y.a)({},_(Ee,r,O,void 0,void 0,(function(e,t,n){return Object(y.a)(Object(y.a)({},e),t.payload)}))),{},(oe={},Object(S.a)(oe,x,(function(e,t){return Object(y.a)(Object(y.a)(Object(y.a)({},e),me(t.payload)),{},{token:t.payload})})),Object(S.a)(oe,E,(function(e,t){return Object(y.a)(Object(y.a)({},xe),{},{token:null})})),oe));function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;return Se[t.type]?Se[t.type](e,t):e}var Ce,ke="DEVICES_GET_ALL",_e="devices/get/all/inprogress",Re="devices/get/all/success",Ie="devices/get/all/failure",we="DEVICES_GET",Te="devices/get/inprogress",Ne="devices/get/success",Le="devices/get/failure",Ue="DEVICES_CLONE",Ge="devices/clone/inprogress",Pe="devices/clone/success",Ae="devices/clone/failure",De="devices/set/source",Ve="devices/set/selected-revision",Fe="devices/set/clone-user-meta",Me="devices/set/destination",We="devices/clear/form",Be="devices/set/form-errors",He="devices/set/platform-to-clone";function ze(e,t,n){return t.split(".").reduce((function(e,t){return e&&e.hasOwnProperty(t)?e[t]:n}),e)}function Ye(e){return Object.keys(e).reduce((function(t,n){return t[n]=e[n].selected,t}),{})}function Je(e,t){return Object.keys(t).reduce((function(n,r){return r.indexOf("_config")>=0?n[r]=!0:e[r]?n[r]=!1:n[r]=t[r],n}),{})}function Ke(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object.keys(e).reduce((function(n,r,c){if(r.indexOf("src.json")>=0||r.indexOf("_config")>=0){var a=r.replace("/src.json","");n[a]=Object(y.a)(Object(y.a)({},e[r]),{},{selected:t,name:a})}return n}),{})}function $e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n?{}:Object(y.a)({},e);return Object.keys(t).forEach((function(c){!1!==t[c]||n||Object.keys(r).forEach((function(e){0===e.indexOf(c)&&delete r[e]})),!0===t[c]&&n&&Object.keys(e).forEach((function(t){0===t.indexOf(c)&&(r[t]=e[t])}))})),r}function qe(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n)return e;var r=Ye(Ke(e,!0)),c=Je(r,Ye(Ke(t,!0))),a=$e(t,c,!1),o=$e(e,r,!0),i=Object(y.a)(Object(y.a)({},o),a);return i}function Qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ze(e,"revisions",[]).find((function(t){return t.rev===e.revision}))}var Xe={IN_PROGRESS:"IN_PROGRESS",FAILURE:"FAILURE",SUCCESS:"SUCCESS",CLONING:{IN_PROGRESS:"CLONING_IN_PROGRESS",FAILURE:"CLONING_FAILURE",SUCCESS:"CLONING_SUCCESS"},WAITING_DEPLOY:"WAITING_DEPLOY"},Ze={list:[],status:null,clone:null,source:null,destination:null,cloneUserMeta:!1,selectedRevision:{src:null,dest:null},platformToClone:{src:null,dest:null},formErrors:{}},et=function(e,t,n){return Object(y.a)(Object(y.a)({},e[n]),t.payload)},tt=Object(y.a)(Object(y.a)(Object(y.a)({},_(Xe,c,ke,"list",void 0,et)),_(Xe.CLONING,c,Ue,"clone",void 0,et)),{},(Ce={},Object(S.a)(Ce,Me,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{destination:t.payload,selectedRevision:Object(y.a)(Object(y.a)({},e.selectedRevision),{},{dest:Qe(t.payload)})})})),Object(S.a)(Ce,Fe,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{cloneUserMeta:t.payload})})),Object(S.a)(Ce,Be,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{formErrors:t.payload})})),Object(S.a)(Ce,Ve,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{selectedRevision:Object(y.a)(Object(y.a)({},e.selectedRevision),{},Object(S.a)({},t.pointer,t.payload))})})),Object(S.a)(Ce,De,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{source:t.payload?t.payload:null,selectedRevision:Object(y.a)(Object(y.a)({},e.selectedRevision),{},{src:t.payload&&t.payload.revisions&&t.payload.revisions.length?Qe(t.payload):null})})})),Object(S.a)(Ce,He,(function(e,t){return Object(y.a)(Object(y.a)({},e),{},{platformToClone:Object(y.a)(Object(y.a)({},e.platformToClone),{},Object(S.a)({},t.pointer,t.payload))})})),Object(S.a)(Ce,We,(function(e){return Object(y.a)(Object(y.a)({},Ze),{},{list:e.list})})),Ce));function nt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;return tt[t.type]?tt[t.type](e,t):e}var rt=n(216),ct=n(202),at=n(217),ot=Object(u.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}}),it=Object(ct.a)();function st(e){var t=e.value,n=e.defaultClasses,r=void 0===n?{}:n,c=e.devices,a=e.label,i=e.onChange,s=void 0===i?function(){return null}:i,u=ot();return Object(ee.jsx)(at.a,{id:"devices-select",clearOnEscape:!0,freeSolo:!0,autoHighlight:!0,style:{width:"100%"},options:c,value:t,classes:Object(y.a)(Object(y.a)({},r),{},{option:u.option}),getOptionLabel:function(e){return e["device-nick"]},filterOptions:function(e,t){var n=it(e,t);return""!==t.inputValue&&n.push({"device-nick":"Search ".concat(t.inputValue," ..."),deviceid:t.inputValue}),n},onChange:function(e,t){s(t)},renderOption:function(e){return Object(ee.jsx)(o.a.Fragment,{children:e["device-nick"]})},renderInput:function(e){return Object(ee.jsx)(rt.a,Object(y.a)(Object(y.a)({},e),{},{label:a,variant:"outlined",fullWidth:!0,inputProps:Object(y.a)(Object(y.a)({},e.inputProps),{},{autoComplete:"Device nick"})}))}})}var ut=n(221),lt=n(210),dt=n(208),ft=n(209),jt=n(207);function pt(e){var t=e.buttonTxt,n=void 0===t?"":t,r=e.variant,c=void 0===r?"outlined":r,a=e.color,i=void 0===a?"primary":a,s=e.dialogText,u=void 0===s?"":s,l=e.dialogBody,d=void 0===l?null:l,f=e.cancelTxt,j=void 0===f?"Cancel":f,p=e.confirmTxt,b=void 0===p?"Confirm":p,v=e.onConfirm,O=void 0===v?function(){return null}:v,h=e.disabled,g=o.a.useState(!1),m=Object(F.a)(g,2),E=m[0],x=m[1],S=function(){x(!1)};return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(Z.a,{variant:c,color:i,onClick:function(){x(!0)},disabled:h,children:n}),Object(ee.jsxs)(ut.a,{open:E,onClose:S,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(ee.jsx)(jt.a,{id:"alert-dialog-title",children:u}),Object(ee.jsx)(dt.a,{children:Object(ee.jsx)(ft.a,{id:"alert-dialog-description",children:d})}),Object(ee.jsxs)(lt.a,{children:[Object(ee.jsx)(Z.a,{onClick:S,color:"primary",children:j}),Object(ee.jsx)(Z.a,{onClick:function(){x(!1),O()},color:"primary",autoFocus:!0,children:b})]})]})]})}var bt="".concat(w,"/devices"),vt="".concat(w,"/trails/summary"),Ot=function(e){return"".concat(w,"/trails/").concat(e,"/steps")},ht=function(e){return"".concat(w,"/trails/").concat(e,"/summary")},gt=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(ht(n),t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),mt=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(vt,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Et=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(bt+"/",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xt=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n,r){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U(Ot(n),t,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),St=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(Ot(n)+"?progress.status={%22$ne%22:%22%22}",t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),yt=function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L("".concat(bt,"/np/").concat(n),t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ct=k(c,ke),kt=k(c,we),_t=k(c,Ue),Rt=function(e){var t={valid:!0},n=Object.values(e.list);return null===e.source&&(t.source="Please select a source device"),null===e.destination&&(t.destination="Please select a destination device"),null===e.destination||n.some((function(t){return t.deviceid===e.destination.deviceid}))||(t.destination="You need to be owner of the destination device"),Object.keys(t).length>1&&(t.valid=!1),t},It=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"src";return{type:He,payload:e,pointer:t}},wt=function(e){return{type:De,payload:e}},Tt=function(e){return function(){var t=Object(v.a)(Object(b.a)().mark((function t(n,r){var c;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(kt.inProgress()),c=r(),t.abrupt("return",G(Object(v.a)(Object(b.a)().mark((function t(){var n,r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gt(c.auth.token,e);case 2:return n=t.sent,t.next=5,St(c.auth.token,e);case 5:return r=t.sent,n.json.revisions=r.json,t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)}))),(function(e){return n(kt.success(e))}),(function(e){return n(V(e,kt.failure))})));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Nt=function(e){return function(){var t=Object(v.a)(Object(b.a)().mark((function t(n,r){var c;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(kt.inProgress()),c=r(),t.abrupt("return",G(Object(v.a)(Object(b.a)().mark((function t(){var n,r,a;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,yt(c.auth.token,e);case 2:return n=t.sent,t.next=5,gt(c.auth.token,n.json.id);case 5:return r=t.sent,t.next=8,St(c.auth.token,n.json.id);case 8:return a=t.sent,r.json.revisions=a.json,t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)}))),(function(e){return n(kt.success(e))}),(function(e){return n(V(e,kt.failure))})));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Lt=Object(u.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}});function Ut(e){var t=e.device,n=e.revision,r=e.label,c=e.onChange,a=void 0===c?function(){return null}:c,i=Lt();return t?Object(ee.jsx)(at.a,{clearOnEscape:!0,autoHighlight:!0,id:"devices-revision-select",style:{width:"100%"},options:t.revisions,classes:{option:i.option},onChange:function(e,t){a(t)},value:n,getOptionLabel:function(e){return"".concat(e.rev," (").concat(e["state-sha"],")")},renderOption:function(e){return Object(ee.jsxs)(o.a.Fragment,{children:[Object(ee.jsx)("span",{children:e.rev}),e["commit-msg"]]})},renderInput:function(e){return Object(ee.jsx)(rt.a,Object(y.a)(Object(y.a)({},e),{},{label:r,variant:"outlined",fullWidth:!0,inputProps:Object(y.a)(Object(y.a)({},e.inputProps),{},{autoComplete:"Device nick"})}))}}):null}var Gt=n(211),Pt=n(103),At=n.n(Pt)()((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}},xs:{transform:"scale(1)"},sm:{transform:"scale(2)"},lg:{transform:"scale(3)"}}}));function Dt(e){var t=e.message,n=e.size,r=At();return Object(ee.jsxs)("div",{className:r.root,children:[Object(ee.jsx)(Gt.a,{className:r[n]}),t&&Object(ee.jsx)("h4",{children:t})]})}var Vt=n(206);function Ft(e){var t=e.revision,n=void 0===t?{}:t,r=e.device,c=e.onChange,o=e.label,i=Object(a.useState)({}),s=Object(F.a)(i,2),u=s[0],l=s[1];if(Object(a.useEffect)((function(){n&&n.state&&l(Ke(n.state,!0))}),[n]),Object(a.useEffect)((function(){c(Object.keys(u).reduce((function(e,t){return e[t]=u[t].selected,e}),{}))}),[u,c]),!r||!n||!n.state)return null;if(u.length<=0)return Object(ee.jsx)("div",{children:"This device doesn't have any platform to clone"});var d=function(e){l(Object(y.a)(Object(y.a)({},u),{},Object(S.a)({},e.target.value,Object(y.a)(Object(y.a)({},u[e.target.value]),{},{selected:e.target.checked}))))};return Object(ee.jsxs)(ue.a,{justify:"",style:{marginTop:"2em"},children:[o&&Object(ee.jsx)(Vt.a,{style:{textAlign:"left"},children:o}),Object.keys(u).map((function(e){return u[e]})).map((function(e){return Object(ee.jsx)(le.a,{control:Object(ee.jsx)(se.a,{id:"user-meta",color:"primary",value:e.name,checked:e.selected,onChange:d,inputProps:{"aria-label":e.name}}),label:e.name},e.name)}))]})}var Mt=Object(p.b)((function(e){return{devices:e.devices,user:e.auth}}),{getDevices:function(){return function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n){var r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ct.inProgress()),r=n(),e.abrupt("return",G(Object(v.a)(Object(b.a)().mark((function e(){var t,n,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,mt(r.auth.token);case 2:return t=e.sent,e.next=5,Et(r.auth.token);case 5:return n=e.sent,e.next=8,Promise.all(t.json.map(function(){var e=Object(v.a)(Object(b.a)().mark((function e(t){var c,a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,St(r.auth.token,t.deviceid);case 3:return c=e.sent,(a=ze(n,"json",[]).find((function(e){return e.id===t.deviceid})))&&Object.assign(t,a),t.revisions=c.json.sort((function(e,t){return e.rev<t.rev})),e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(0),console.info(e.t0),e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()));case 8:return c=e.sent,e.abrupt("return",Object(y.a)(Object(y.a)({},t),{},{json:c}));case 10:case"end":return e.stop()}}),e)}))),(function(e){return t(Ct.success(e))}),(function(e){return t(V(e,Ct.failure))})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},setSourceAndGetPublic:function(e){return function(){var t=Object(v.a)(Object(b.a)().mark((function t(n,r){var c,a;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",n(wt(null)));case 2:if(c=r(),!Object.keys(c.devices.list).some((function(t){return c.devices.list[t].deviceid===e.deviceid}))){t.next=6;break}return t.abrupt("return",n(wt(e)));case 6:return a=e.deviceid.indexOf("/")>=0?Nt:Tt,t.abrupt("return",G(Object(v.a)(Object(b.a)().mark((function t(){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n(a(e.deviceid)));case 1:case"end":return t.stop()}}),t)}))),(function(e){return n(wt(e))}),(function(e){return console.info(e)})));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},setDestination:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"src";return{type:Me,payload:e,pointer:t}},setCloneUserMeta:function(e){return{type:Fe,payload:e}},cleanForm:function(){return{type:We}},setSelectedRevision:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"src";return{type:Ve,payload:e,pointer:t}},cloneDevice:function(){return function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n){var r,c,a,o,i,s;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(_t.inProgress()),r=n(),(c=Rt(r.devices)).valid){e.next=7;break}return t(_t.failure({type:"invalid",error:"invalid form"})),t({type:Be,payload:c}),e.abrupt("return");case 7:return a=$e(r.devices.selectedRevision.src.state,r.devices.platformToClone.src),o=$e(r.devices.selectedRevision.dest.state,r.devices.platformToClone.dest),i={state:qe(a,o),rev:-1,"commit-msg":"Cloned from device ".concat(r.devices.source["device-nick"]," rev (").concat(r.devices.selectedRevision.src.rev,")")},e.next=12,G(xt.bind(null,r.auth.token,r.devices.destination.deviceid,i),(function(e){return t(_t.success(e))}),(function(e){return t(V(e,_t.failure))}));case 12:return s=e.sent,r.devices.cloneUserMeta&&console.info("TODO: Clone user-meta is not implemented yet"),e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},setPlatformToClone:It,setDestinationPlatformToClone:function(e){return It(e,"dest")}})((function(e){var t,n=e.user,r=e.devices,c=e.getDevices,o=e.setSourceAndGetPublic,i=e.setDestination,s=e.setCloneUserMeta,u=e.cleanForm,d=e.setSelectedRevision,f=e.cloneDevice,p=e.setPlatformToClone,b=e.setDestinationPlatformToClone,v=re(),O=Object(a.useState)(!1),h=Object(F.a)(O,2),g=h[0],m=h[1];return Object(a.useEffect)((function(){n.status===Ee.SUCCESS&&null===r.status&&c()}),[r,r.status,c,n,n.status]),Object(a.useEffect)((function(){r.status===Xe.CLONING.IN_PROGRESS||r.status===Xe.WAITING_DEPLOY?m(!0):m(!1)}),[r,r.status]),r.status===Xe.IN_PROGRESS?Object(ee.jsx)("div",{className:v.heroContent,children:Object(ee.jsxs)(j.a,{maxWidth:"md",children:[Object(ee.jsxs)(l.a,{component:"h4",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0,children:["Welcome, ",n.nick]}),Object(ee.jsx)(l.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Please wait a second, first we need to load your devices."}),Object(ee.jsx)("div",{className:v.flex,style:{height:"200px"},children:Object(ee.jsx)(Dt,{size:"lg"})})]})}):r.list.length<=0?null:Object(ee.jsx)("div",{className:v.heroContent,children:Object(ee.jsxs)(j.a,{maxWidth:"md",children:[Object(ee.jsxs)(l.a,{component:"h4",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0,children:["Welcome, ",n.nick]}),Object(ee.jsx)(l.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Lets start cloning devices, this feature works with public devices or personal devices."}),Object(ee.jsx)("div",{className:v.heroButtons,children:Object(ee.jsxs)(ie.a,{container:!0,spacing:2,justify:"center",children:[Object(ee.jsxs)(ie.a,{item:!0,md:5,xs:12,children:[Object(ee.jsx)(st,{value:r.source,devices:Object.values(r.list),label:"Choose a device source",onChange:o}),Object(ee.jsx)("br",{}),Object(ee.jsx)(Ut,{className:v.vertialSpace,device:r.source,revision:r.selectedRevision.src,label:"Choose revision source",onChange:d}),Object(ee.jsx)(Ft,{device:r.source,label:"Select platforms to be cloned",revision:r.selectedRevision.src,onChange:p}),r.selectedRevision.src&&Object(ee.jsx)(ue.a,{justify:"center",children:Object(ee.jsx)(le.a,{control:Object(ee.jsx)(se.a,{id:"user-meta",color:"primary",checked:r.cloneUserMeta,onChange:function(e){return s(e.target.checked)},inputProps:{"aria-label":"Clone all user-meta data (only if you are the owner)"}}),label:"Clone all user-meta data (only device owner)"})})]}),Object(ee.jsx)(ie.a,{item:!0,md:2,xs:12,children:Object(ee.jsx)(je.a,{className:"clone-icon",fontSize:"large"})}),Object(ee.jsxs)(ie.a,{item:!0,md:5,xs:12,children:[Object(ee.jsx)(st,{value:r.destination,devices:Object.values(r.list).filter((t=r.source,function(e){return!ze(e,"device-meta",{})["pantavisor.arch"]||!ze(t,"device-meta",{})["pantavisor.arch"]||ze(t,"device-meta",{})["pantavisor.arch"]===ze(e,"device-meta",{})["pantavisor.arch"]})),label:"Choose a device destination",onChange:i}),r.destination&&Object(ee.jsx)("div",{className:"mt-sm--2 mt--7",children:Object(ee.jsx)(Ft,{device:r.destination,label:"Select platforms you want to keep",revision:r.selectedRevision.dest,onChange:b})})]}),Object(ee.jsxs)(ie.a,{item:!0,md:12,children:[r.status!==Xe.CLONING.SUCCESS&&g&&Object(ee.jsxs)("div",{className:v.linearProgress,children:[Object(ee.jsx)(de.a,{})," "]}),r.status!==Xe.CLONING.SUCCESS&&!g&&Object(ee.jsxs)("div",{className:v.flex,children:[Object(ee.jsx)(Z.a,{variant:"contained",color:"default",onClick:u,children:"Clear form"}),Object(ee.jsx)(pt,{variant:"contained",color:"primary",buttonTxt:"Start update process",disabled:!r.source||!r.destination||!r.selectedRevision.src,dialogText:r.source&&r.destination&&r.selectedRevision.src?"Are you sure you want to clone ".concat(r.source["device-nick"]," (").concat(r.selectedRevision.src.rev,") to ").concat(r.destination["device-nick"],"?"):"",onConfirm:f})]}),r.status===Xe.CLONING.SUCCESS&&Object(ee.jsx)(pe.a,{severity:"success",children:"Your device has been cloned!"})]})]})})]})})})),Wt=n(26),Bt=n(43),Ht=(n(162),n(105)),zt={type:null,error:null};function Yt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return zt;case A:return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}}var Jt=function(){return Object(Bt.combineReducers)({devices:nt,errors:Yt,auth:ye})},Kt=Bt.compose;var $t=Object(p.b)((function(e){return{token:e.auth.token,status:e.auth.status}}),{Login:Q,GetUser:function(){return function(){var e=Object(v.a)(Object(b.a)().mark((function e(t,n){var r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(q.inProgress()),(r=n()).auth.token){e.next=4;break}return e.abrupt("return",null);case 4:return e.abrupt("return",G(K.bind(null,r.auth.token),(function(e){return t(q.success(e))}),(function(e){return t(V(e,q.failure))})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},SaveTokenAndRedirect:function(e){return function(t){t(X(e)),location.hash=""}}})((function(e){var t=e.children,n=e.status,r=e.token,c=e.Login,o=e.GetUser,i=e.SaveTokenAndRedirect;return Object(a.useEffect)((function(){var e=location.hash;""===e?e||r||c():i(e)}),[r,i,c]),Object(a.useEffect)((function(){null===n&&o()}),[o,n]),n===Ee.INPROGRESS?Object(ee.jsx)(Gt.a,{}):Object(ee.jsx)("div",{className:"App",children:t})})),qt=(n(163),Object(Bt.createStore)(Jt(),Kt(Bt.applyMiddleware.apply(void 0,Object(Wt.a)([Ht.a].filter((function(e){return!!e})))))));var Qt=function(){return Object(ee.jsx)(p.a,{store:qt,children:Object(ee.jsx)($t,{children:Object(ee.jsx)(ae,{children:Object(ee.jsx)(Mt,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(ee.jsx)(Qt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[164,1,2]]]);
//# sourceMappingURL=main.b6de835d.chunk.js.map