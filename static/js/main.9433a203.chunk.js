(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{126:function(e,t,n){e.exports=n(164)},131:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"AUTH_USER_GET",(function(){return h})),n.d(r,"AUTH_USER_GET_INPROGRESS",(function(){return O})),n.d(r,"AUTH_USER_GET_SUCCESS",(function(){return g})),n.d(r,"AUTH_USER_GET_FAILURE",(function(){return j})),n.d(r,"AUTH_CLEAR_TOKEN",(function(){return S})),n.d(r,"AUTH_SAVE_TOKEN",(function(){return y}));var a={};n.r(a),n.d(a,"DEVICES_GET_ALL",(function(){return Se})),n.d(a,"DEVICES_GET_ALL_INPROGRESS",(function(){return ye})),n.d(a,"DEVICES_GET_ALL_SUCCESS",(function(){return Ce})),n.d(a,"DEVICES_GET_ALL_FAILURE",(function(){return ke})),n.d(a,"DEVICES_GET",(function(){return _e})),n.d(a,"DEVICES_GET_INPROGRESS",(function(){return Re})),n.d(a,"DEVICES_GET_SUCCESS",(function(){return Ie})),n.d(a,"DEVICES_GET_FAILURE",(function(){return xe})),n.d(a,"DEVICES_CLONE",(function(){return we})),n.d(a,"DEVICES_CLONE_INPROGRESS",(function(){return Te})),n.d(a,"DEVICES_CLONE_SUCCESS",(function(){return Ne})),n.d(a,"DEVICES_CLONE_FAILURE",(function(){return Ue})),n.d(a,"DEVICES_SET_SOURCE",(function(){return Le})),n.d(a,"DEVICES_SET_REVISION",(function(){return Ge})),n.d(a,"DEVICES_SET_CLONE_USER_META",(function(){return Pe})),n.d(a,"DEVICES_SET_DESTINATION",(function(){return Ae})),n.d(a,"DEVICES_CLEAN_FORM",(function(){return De})),n.d(a,"DEVICE_SET_FORM_ERRORS",(function(){return Ve})),n.d(a,"DEVICE_SET_PLATFORM_TO_CLONE",(function(){return Fe}));var c=n(0),o=n.n(c),i=n(14),u=n.n(i),s=(n(131),n(197)),l=n(73),d=n(201),f=n(200),p=n(202),v=n(34),m=n(8),E=n.n(m),b=n(12),h="AUTH_USER_GET",O="auth/user/get/inprogress",g="auth/user/get/success",j="auth/user/get/failure",S="auth/token/clear",y="auth/token/save",C=n(15),k=n(5),_=function(e,t,n){return t.payload};function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{success:function(n){return{type:e["".concat(t,"_SUCCESS")],payload:n}},failure:function(n){return{type:e["".concat(t,"_FAILURE")],error:n}},inProgress:function(){return{type:e["".concat(t,"_INPROGRESS")]}}}}function I(e,t,n,r){var a,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"error",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:_,i=t["".concat(n,"_INPROGRESS")],u=t["".concat(n,"_FAILURE")],s=t["".concat(n,"_SUCCESS")];return a={},Object(C.a)(a,i,(function(t,n){return Object(k.a)(Object(k.a)({},t),{},{status:e.IN_PROGRESS})})),Object(C.a)(a,u,(function(t,n){var r;return Object(k.a)(Object(k.a)({},t),{},(r={},Object(C.a)(r,"".concat(c),n.error),Object(C.a)(r,"status",e.FAILURE),r))})),Object(C.a)(a,s,(function(t,n){var a;return r?Object(k.a)(Object(k.a)({},t),{},(a={},Object(C.a)(a,r,o(t,n,r)),Object(C.a)(a,"status",e.SUCCESS),a)):Object(k.a)(Object(k.a)(Object(k.a)({},t),o(t,n,r)),{},{status:e.SUCCESS})})),a}var x=n(97),w=n.n(x),T="https://api.pantahub.com",N=function(){var e=Object(b.a)(E.a.mark((function e(t){var n,r,a,c,o,i,u=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"",r=u.length>2&&void 0!==u[2]?u[2]:"application/json",a=u.length>3&&void 0!==u[3]?u[3]:"GET",c=u.length>4&&void 0!==u[4]?u[4]:{},o={"Content-Type":r},n&&(o.Authorization="Bearer ".concat(n)),i={method:a,headers:o},"GET"!==a&&"HEAD"!==a&&(i.body=JSON.stringify(c)),e.abrupt("return",w()(t,i));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(E.a.mark((function e(t){var n,r,a,c,o,i=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:"",a=i.length>3&&void 0!==i[3]?i[3]:{},e.next=5,N(t,r,"application/json",n,a);case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",{ok:c.ok,redirected:c.redirected,headers:c.headers,status:c.status,json:o});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U(t,"GET",n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(b.a)(E.a.mark((function e(t,n,r){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U(t,"POST",n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();function P(e,t,n){return A.apply(this,arguments)}function A(){return(A=Object(b.a)(E.a.mark((function e(t,n,r){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:(a=e.sent).ok?n(a.json):r("string"===typeof a.json.Error?{code:a.status,message:a.json.Error}:a.json),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a={ok:!1,json:{code:0,message:e.t0}},r(a.json);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var D=function(e,t){return function(n){n(function(e,t){if(401===e)return J();return{type:"error/set",payload:{type:e,error:t}}}(e.code,e.messsage)),n(t(e))}};var V=n(26),F="".concat(T,"/auth/auth_status"),M="".concat("https://www.pantahub.com","/oauth2/authorize"),W=function(){return"".concat(location.href)};var B=function(){localStorage.removeItem("_ph_token"),location.href=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"prn:pantahub.com:apis:/base/user.readonly",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"token",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"prn:pantahub.com:apis:/cloner";return t=t||W(),encodeURI("".concat(M,"?client_id=").concat(r,"&scope=").concat(e,"&redirect_uri=").concat(t,"&response_type=").concat(n))}()};function H(e){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(F,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=R(r,h),J=function(){return B(),{type:S}},K=function(e){var t=function(e){return(e.match(/([^#=&]+)(=([^&]*))?/g)||[]).reduce((function(e,t){var n=t.split("="),r=Object(V.a)(n,2),a=r[0],c=r[1];return e[a]=c,e}),{})}(e);return function(e){localStorage.setItem("_ph_token",e)}(t.access_token),{type:y,payload:t.access_token}},$=n(199),q=Object(s.a)((function(e){return{fab:{position:"absolute",top:e.spacing(2),right:e.spacing(2)}}}));var Q=Object(v.b)((function(e){return{token:e.auth.token}}),{Logout:function(){return localStorage.removeItem("_ph_token"),{type:S}}})((function(e){var t=e.token,n=e.Logout,r=q();return null===t?null:o.a.createElement($.a,{className:r.fab,variant:"outlined",onClick:n},"Log out")})),X=Object(s.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,0,6)},heroButtons:{marginTop:e.spacing(8)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},linearProgress:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},flex:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center","& > *":{margin:e.spacing(1)}},vertialSpace:{marginBottom:e.spacing(2)},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function Z(){return o.a.createElement(l.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(f.a,{color:"inherit",href:"https://www.github.com/highercomve/dolly"},"Sergio Marin")," ",(new Date).getFullYear(),".")}function ee(e){var t=e.children,n=X();return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null),o.a.createElement(Q,null),o.a.createElement("header",null,o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement("img",{src:"/dolly/logo.png",alt:"Dolly",height:"100px"}))),o.a.createElement("main",null,t),o.a.createElement("footer",{className:n.footer},o.a.createElement(l.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Pantahub cloner is a thirdparty opensource project"),o.a.createElement(Z,null)))}var te,ne=n(214),re=n(218),ae=n(212),ce=n(213),oe=n(215),ie=n(104),ue=n.n(ie),se=n(219),le=n(101),de=n.n(le),fe=(localStorage.getItem("_ph_token")||"").split("|"),pe=Object(V.a)(fe,2),ve=pe[0],me=pe[1],Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{return de()(e)}catch(t){return{}}},be={IN_PROGRESS:"INPROGRESS",SUCCESS:"SUCCESS",FAILURE:"FAILURE"},he=Object(k.a)({username:me||"",token:ve||null,exp:null,id:"",nick:"",orig_iat:null,prn:"",roles:"",type:"",gettingToken:!1,getTokenError:null,status:null},Ee(ve)),Oe=Object(k.a)(Object(k.a)({},I(be,r,h,void 0,void 0,(function(e,t,n){return Object(k.a)(Object(k.a)({},e),t.payload)}))),{},(te={},Object(C.a)(te,y,(function(e,t){return Object(k.a)(Object(k.a)(Object(k.a)({},e),Ee(t.payload)),{},{token:t.payload})})),Object(C.a)(te,S,(function(e,t){return Object(k.a)(Object(k.a)({},he),{},{token:null})})),te));function ge(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;return Oe[t.type]?Oe[t.type](e,t):e}var je,Se="DEVICES_GET_ALL",ye="devices/get/all/inprogress",Ce="devices/get/all/success",ke="devices/get/all/failure",_e="DEVICES_GET",Re="devices/get/inprogress",Ie="devices/get/success",xe="devices/get/failure",we="DEVICES_CLONE",Te="devices/clone/inprogress",Ne="devices/clone/success",Ue="devices/clone/failure",Le="devices/set/source",Ge="devices/set/selected-revision",Pe="devices/set/clone-user-meta",Ae="devices/set/destination",De="devices/clear/form",Ve="devices/set/form-errors",Fe="devices/set/platform-to-clone";function Me(e){return Object.keys(e).reduce((function(t,n){return t[n]=e[n].selected,t}),{})}function We(e,t){return Object.keys(t).reduce((function(n,r){return e[r]?n[r]=!1:n[r]=t[r],n}),{})}function Be(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object.keys(e).reduce((function(n,r,a){if(r.indexOf("src.json")>=0){var c=r.replace("/src.json","");n[c]=Object(k.a)(Object(k.a)({},e[r]),{},{selected:t,name:c})}return n}),{})}function He(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n?{}:Object(k.a)({},e);return Object.keys(t).forEach((function(a){!1!==t[a]||n||Object.keys(r).forEach((function(e){e.indexOf(a)>=0&&delete r[e]})),!0===t[a]&&n&&Object.keys(e).forEach((function(t){t.indexOf(a)>=0&&(r[t]=e[t])}))})),r}function ze(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n)return e;var r=Me(Be(e,!0)),a=We(r,Me(Be(t,!0))),c=He(t,a,!1,!0),o=He(e,r,!0),i=Object(k.a)(Object(k.a)({},c),o);return i}function Ye(e){return e.revisions.find((function(t){return t.rev===e.revision}))}var Je={IN_PROGRESS:"IN_PROGRESS",FAILURE:"FAILURE",SUCCESS:"SUCCESS",CLONING:{IN_PROGRESS:"CLONING_IN_PROGRESS",FAILURE:"CLONING_FAILURE",SUCCESS:"CLONING_SUCCESS"},WAITING_DEPLOY:"WAITING_DEPLOY"},Ke={list:[],status:null,clone:null,source:null,destination:null,selectedRevision:{src:null,dest:null},cloneUserMeta:!1,platformToClone:{src:null,dest:null},formErrors:{}},$e=function(e,t,n){return Object(k.a)(Object(k.a)({},e[n]),t.payload)},qe=Object(k.a)(Object(k.a)(Object(k.a)({},I(Je,a,Se,"list",void 0,$e)),I(Je.CLONING,a,we,"clone",void 0,$e)),{},(je={},Object(C.a)(je,Ae,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{destination:t.payload,selectedRevision:Object(k.a)(Object(k.a)({},e.selectedRevision),{},{dest:Ye(t.payload)})})})),Object(C.a)(je,Pe,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{cloneUserMeta:t.payload})})),Object(C.a)(je,Ve,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{formErrors:t.payload})})),Object(C.a)(je,Ge,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{selectedRevision:Object(k.a)(Object(k.a)({},e.selectedRevision),{},Object(C.a)({},t.pointer,t.payload))})})),Object(C.a)(je,Le,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{source:t.payload?t.payload:null,selectedRevision:Object(k.a)(Object(k.a)({},e.selectedRevision),{},{src:t.payload&&t.payload.revisions&&t.payload.revisions.length?Ye(t.payload):null})})})),Object(C.a)(je,Fe,(function(e,t){return Object(k.a)(Object(k.a)({},e),{},{platformToClone:Object(k.a)(Object(k.a)({},e.platformToClone),{},Object(C.a)({},t.pointer,t.payload))})})),Object(C.a)(je,De,(function(e){return Object(k.a)(Object(k.a)({},e),{},{source:null,destination:null,selectedRevision:null,cloneUserMeta:!1})})),je));function Qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;return qe[t.type]?qe[t.type](e,t):e}var Xe=n(216),Ze=n(222),et=n(217),tt=Object(s.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}}),nt=Object(Ze.a)();function rt(e){var t=e.value,n=e.defaultClasses,r=void 0===n?{}:n,a=e.devices,c=e.label,i=e.onChange,u=void 0===i?function(){return null}:i,s=tt();return o.a.createElement(et.a,{id:"devices-select",clearOnEscape:!0,freeSolo:!0,autoHighlight:!0,style:{width:"100%"},options:a,value:t,classes:Object(k.a)(Object(k.a)({},r),{},{option:s.option}),getOptionLabel:function(e){return e["device-nick"]},filterOptions:function(e,t){var n=nt(e,t);return""!==t.inputValue&&n.push({"device-nick":"Search ".concat(t.inputValue," ..."),deviceid:t.inputValue}),n},onChange:function(e,t){u(t)},renderOption:function(e){return o.a.createElement(o.a.Fragment,null,e["device-nick"])},renderInput:function(e){return o.a.createElement(Xe.a,Object.assign({},e,{label:c,variant:"outlined",fullWidth:!0,inputProps:Object(k.a)(Object(k.a)({},e.inputProps),{},{autoComplete:"Device nick"})}))}})}var at=n(221),ct=n(210),ot=n(208),it=n(209),ut=n(207);function st(e){var t=e.buttonTxt,n=void 0===t?"":t,r=e.variant,a=void 0===r?"outlined":r,c=e.color,i=void 0===c?"primary":c,u=e.dialogText,s=void 0===u?"":u,l=e.dialogBody,d=void 0===l?null:l,f=e.cancelTxt,p=void 0===f?"Cancel":f,v=e.confirmTxt,m=void 0===v?"Confirm":v,E=e.onConfirm,b=void 0===E?function(){return null}:E,h=e.disabled,O=o.a.useState(!1),g=Object(V.a)(O,2),j=g[0],S=g[1],y=function(){S(!1)};return o.a.createElement("div",null,o.a.createElement($.a,{variant:a,color:i,onClick:function(){S(!0)},disabled:h},n),o.a.createElement(at.a,{open:j,onClose:y,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(ut.a,{id:"alert-dialog-title"},s),o.a.createElement(ot.a,null,o.a.createElement(it.a,{id:"alert-dialog-description"},d)),o.a.createElement(ct.a,null,o.a.createElement($.a,{onClick:y,color:"primary"},p),o.a.createElement($.a,{onClick:function(){S(!1),b()},color:"primary",autoFocus:!0},m))))}var lt="".concat(T,"/devices"),dt="".concat(T,"/trails/summary"),ft=function(e){return"".concat(T,"/trails/").concat(e,"/steps")},pt=function(e){return"".concat(T,"/trails/").concat(e,"/summary")},vt=function(){var e=Object(b.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(pt(n),t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),mt=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(dt,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Et=function(){var e=Object(b.a)(E.a.mark((function e(t,n,r){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(ft(n),t,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),bt=function(){var e=Object(b.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(ft(n)+"?progress.status={%22$ne%22:%22%22}",t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ht=function(){var e=Object(b.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L("".concat(lt,"/np/").concat(n),t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ot=R(a,Se),gt=R(a,_e),jt=R(a,we),St=function(e){var t={valid:!0},n=Object.values(e.list);return null===e.source&&(t.source="Please select a source device"),null===e.destination&&(t.destination="Please select a destination device"),null===e.destination||n.some((function(t){return t.deviceid===e.destination.deviceid}))||(t.destination="You need to be owner of the destination device"),null!==e.source&&null!==e.destination&&e.source.deviceid===e.destination.deviceid&&(t.destionation="Please select another destination device, the destination can't be the same as source"),Object.keys(t).length>1&&(t.valid=!1),t},yt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"src";return{type:Fe,payload:e,pointer:t}},Ct=function(e){return{type:Le,payload:e}},kt=function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n,r){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(gt.inProgress()),a=r(),t.abrupt("return",P(Object(b.a)(E.a.mark((function t(){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vt(a.auth.token,e);case 2:return n=t.sent,t.next=5,bt(a.auth.token,e);case 5:return r=t.sent,n.json.revisions=r.json,t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)}))),(function(e){return n(gt.success(e))}),(function(e){return n(D(e,gt.failure))})));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},_t=function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n,r){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(gt.inProgress()),a=r(),t.abrupt("return",P(Object(b.a)(E.a.mark((function t(){var n,r,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ht(a.auth.token,e);case 2:return n=t.sent,t.next=5,vt(a.auth.token,n.json.id);case 5:return r=t.sent,t.next=8,bt(a.auth.token,n.json.id);case 8:return c=t.sent,r.json.revisions=c.json,t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)}))),(function(e){return n(gt.success(e))}),(function(e){return n(D(e,gt.failure))})));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Rt=Object(s.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}});function It(e){var t=e.device,n=e.revision,r=e.label,a=e.onChange,c=void 0===a?function(){return null}:a,i=Rt();return t?o.a.createElement(et.a,{clearOnEscape:!0,autoHighlight:!0,id:"devices-revision-select",style:{width:"100%"},options:t.revisions,classes:{option:i.option},onChange:function(e,t){c(t)},value:n,getOptionLabel:function(e){return"".concat(e.rev," (").concat(e["state-sha"],")")},renderOption:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,e.rev),e["commit-msg"])},renderInput:function(e){return o.a.createElement(Xe.a,Object.assign({},e,{label:r,variant:"outlined",fullWidth:!0,inputProps:Object(k.a)(Object(k.a)({},e.inputProps),{},{autoComplete:"Device nick"})}))}}):null}var xt=n(211),wt=n(103),Tt=n.n(wt)()((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}},xs:{transform:"scale(1)"},sm:{transform:"scale(2)"},lg:{transform:"scale(3)"}}}));function Nt(e){var t=e.message,n=e.size,r=Tt();return o.a.createElement("div",{className:r.root},o.a.createElement(xt.a,{className:r[n]}),t&&o.a.createElement("h4",null,t))}var Ut=n(206);function Lt(e){var t=e.revision,n=void 0===t?{}:t,r=e.device,a=e.onChange,i=e.label,u=Object(c.useState)({}),s=Object(V.a)(u,2),l=s[0],d=s[1];if(Object(c.useEffect)((function(){n&&n.state&&d(Be(n.state,!0))}),[n]),Object(c.useEffect)((function(){a(Object.keys(l).reduce((function(e,t){return e[t]=l[t].selected,e}),{}))}),[l,a]),!r||!n||!n.state)return null;if(l.length<=0)return o.a.createElement("div",null,"This device doesn't have any platform to clone");var f=function(e){d(Object(k.a)(Object(k.a)({},l),{},Object(C.a)({},e.target.value,Object(k.a)(Object(k.a)({},l[e.target.value]),{},{selected:e.target.checked}))))};return o.a.createElement(ae.a,{justify:"",style:{marginTop:"2em"}},i&&o.a.createElement(Ut.a,{style:{textAlign:"left"}},i),Object.keys(l).map((function(e){return l[e]})).map((function(e){return o.a.createElement(ce.a,{key:e.name,control:o.a.createElement(re.a,{id:"user-meta",color:"primary",value:e.name,checked:e.selected,onChange:f,inputProps:{"aria-label":e.name}}),label:e.name})})))}var Gt=Object(v.b)((function(e){return{devices:e.devices,user:e.auth}}),{getDevices:function(){return function(){var e=Object(b.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ot.inProgress()),r=n(),e.abrupt("return",P(Object(b.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,mt(r.auth.token);case 2:return t=e.sent,e.next=5,Promise.all(t.json.map(function(){var e=Object(b.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,bt(r.auth.token,t.deviceid);case 3:return n=e.sent,t.revisions=n.json.sort((function(e,t){return e.rev<t.rev})),e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),console.info(e.t0),e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()));case 5:return n=e.sent,e.abrupt("return",Object(k.a)(Object(k.a)({},t),{},{json:n}));case 7:case"end":return e.stop()}}),e)}))),(function(e){return t(Ot.success(e))}),(function(e){return t(D(e,Ot.failure))})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},setSourceAndGetPublic:function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n,r){var a,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",n(Ct(null)));case 2:if(a=r(),!Object.keys(a.devices.list).some((function(t){return a.devices.list[t].deviceid===e.deviceid}))){t.next=6;break}return t.abrupt("return",n(Ct(e)));case 6:return c=e.deviceid.indexOf("/")>=0?_t:kt,t.abrupt("return",P(Object(b.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n(c(e.deviceid)));case 1:case"end":return t.stop()}}),t)}))),(function(e){return n(Ct(e))}),(function(e){return console.info(e)})));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},setDestination:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"src";return{type:Ae,payload:e,pointer:t}},setCloneUserMeta:function(e){return{type:Pe,payload:e}},cleanForm:function(){return{type:De}},setSelectedRevision:function(e){return{type:Ge,payload:e}},cloneDevice:function(){return function(){var e=Object(b.a)(E.a.mark((function e(t,n){var r,a,c,o,i,u;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(jt.inProgress()),r=n(),(a=St(r.devices)).valid){e.next=7;break}return t(jt.failure({type:"invalid",error:"invalid form"})),t({type:Ve,payload:a}),e.abrupt("return");case 7:return c=He(r.devices.selectedRevision.src.state,r.devices.platformToClone.src),o=He(r.devices.selectedRevision.dest.state,r.devices.platformToClone.dest),i={state:ze(c,o),rev:-1,"commit-msg":"Cloned from device ".concat(r.devices.source["device-nick"]," rev (").concat(r.devices.selectedRevision.src.rev,")")},e.next=12,P(Et.bind(null,r.auth.token,r.devices.destination.deviceid,i),(function(e){return t(jt.success(e))}),(function(e){return t(D(e,jt.failure))}));case 12:return u=e.sent,r.devices.cloneUserMeta&&console.info("TODO: Clone user-meta is not implemented yet"),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},setPlatformToClone:yt,setDestinationPlatformToClone:function(e){return yt(e,"dest")}})((function(e){var t=e.user,n=e.devices,r=e.getDevices,a=e.setSourceAndGetPublic,i=e.setDestination,u=e.setCloneUserMeta,s=e.cleanForm,d=e.setSelectedRevision,f=e.cloneDevice,v=e.setPlatformToClone,m=e.setDestinationPlatformToClone,E=X(),b=Object(c.useState)(!1),h=Object(V.a)(b,2),O=h[0],g=h[1];return Object(c.useEffect)((function(){t.status===be.SUCCESS&&null===n.status&&r()}),[n,n.status,r,t,t.status]),Object(c.useEffect)((function(){n.status===Je.CLONING.IN_PROGRESS||n.status===Je.WAITING_DEPLOY?g(!0):g(!1)}),[n,n.status]),n.status===Je.IN_PROGRESS?o.a.createElement("div",{className:E.heroContent},o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement(l.a,{component:"h4",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0},"Welcome, ",t.nick),o.a.createElement(l.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Please wait a second, first we need to load your devices."),o.a.createElement("div",{className:E.flex,style:{height:"200px"}},o.a.createElement(Nt,{size:"lg"})))):n.list.length<=0?null:o.a.createElement("div",{className:E.heroContent},o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement(l.a,{component:"h4",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0},"Welcome, ",t.nick),o.a.createElement(l.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Lets start cloning devices, this feature works with public devices or personal devices."),o.a.createElement("div",{className:E.heroButtons},o.a.createElement(ne.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(ne.a,{item:!0,md:5,xs:12},o.a.createElement(rt,{value:n.source,devices:Object.values(n.list),label:"Choose a device source",onChange:a}),o.a.createElement("br",null),o.a.createElement(It,{className:E.vertialSpace,device:n.source,revision:n.selectedRevision.src,label:"Choose revision source",onChange:d}),o.a.createElement(Lt,{device:n.source,label:"Select platforms to be cloned",revision:n.selectedRevision.src,onChange:v}),n.selectedRevision.src&&o.a.createElement(ae.a,{justify:"center"},o.a.createElement(ce.a,{control:o.a.createElement(re.a,{id:"user-meta",color:"primary",checked:n.cloneUserMeta,onChange:function(e){return u(e.target.checked)},inputProps:{"aria-label":"Clone all user-meta data (only if you are the owner)"}}),label:"Clone all user-meta data (only device owner)"}))),o.a.createElement(ne.a,{item:!0,md:2,xs:12},o.a.createElement(ue.a,{className:"clone-icon",fontSize:"large"})),o.a.createElement(ne.a,{item:!0,md:5,xs:12},o.a.createElement(rt,{value:n.destination,devices:Object.values(n.list),label:"Choose a device destination",onChange:i}),n.destination&&o.a.createElement("div",{className:"mt-sm--2 mt--7"},o.a.createElement(Lt,{device:n.destination,label:"Select platform you want to remove",revision:n.selectedRevision.dest,onChange:m}))),o.a.createElement(ne.a,{item:!0,md:12},n.status!==Je.CLONING.SUCCESS&&O&&o.a.createElement("div",{className:E.linearProgress},o.a.createElement(oe.a,null)," "),n.status!==Je.CLONING.SUCCESS&&!O&&o.a.createElement("div",{className:E.flex},o.a.createElement($.a,{variant:"contained",color:"default",onClick:s},"Clear form"),o.a.createElement(st,{variant:"contained",color:"primary",buttonTxt:"Start update process",disabled:!n.source||!n.destination||!n.selectedRevision.src,dialogText:n.source&&n.destination&&n.selectedRevision.src?"Are you sure you want to clone ".concat(n.source["device-nick"]," (").concat(n.selectedRevision.src.rev,") to ").concat(n.destination["device-nick"],"?"):"",onConfirm:f})),n.status===Je.CLONING.SUCCESS&&o.a.createElement(se.a,{severity:"success"},"Your device has been cloned!"))))))})),Pt=n(106),At=n(32),Dt=(n(162),n(105)),Vt={type:null,error:null};function Ft(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"error/clean":return Vt;case"error/set":return Object(k.a)(Object(k.a)({},e),t.payload);default:return e}}var Mt=function(){return Object(At.combineReducers)({devices:Qe,errors:Ft,auth:ge})},Wt=At.compose;var Bt=Object(v.b)((function(e){return{token:e.auth.token,status:e.auth.status}}),{Login:J,GetUser:function(){return function(){var e=Object(b.a)(E.a.mark((function e(t,n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(Y.inProgress()),(r=n()).auth.token){e.next=4;break}return e.abrupt("return",null);case 4:return e.abrupt("return",P(H.bind(null,r.auth.token),(function(e){return t(Y.success(e))}),(function(e){return t(D(e,Y.failure))})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},SaveTokenAndRedirect:function(e){return function(t){t(K(e)),location.hash=""}}})((function(e){var t=e.children,n=e.status,r=e.token,a=e.Login,i=e.GetUser,u=e.SaveTokenAndRedirect;return Object(c.useEffect)((function(){var e=location.hash;""===e?e||r||a():u(e)}),[r,u,a]),Object(c.useEffect)((function(){null===n&&i()}),[i,n]),n===be.INPROGRESS?o.a.createElement(xt.a,null):o.a.createElement("div",{className:"App"},t)})),Ht=(n(163),Object(At.createStore)(Mt(),Wt(At.applyMiddleware.apply(void 0,Object(Pt.a)([Dt.a].filter((function(e){return!!e})))))));var zt=function(){return o.a.createElement(v.a,{store:Ht},o.a.createElement(Bt,null,o.a.createElement(ee,null,o.a.createElement(Gt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(zt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[126,1,2]]]);
//# sourceMappingURL=main.9433a203.chunk.js.map