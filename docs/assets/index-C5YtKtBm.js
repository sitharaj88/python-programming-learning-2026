(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();function Jc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cc={exports:{}},Da={};var vh;function Mb(){if(vh)return Da;vh=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(o,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var d in s)d!=="key"&&(c[d]=s[d])}else c=s;return s=c.ref,{$$typeof:t,type:o,key:f,ref:s!==void 0?s:null,props:c}}return Da.Fragment=r,Da.jsx=a,Da.jsxs=a,Da}var Sh;function Nb(){return Sh||(Sh=1,cc.exports=Mb()),cc.exports}var E=Nb(),fc={exports:{}},yn={};var wh;function Db(){if(wh)return yn;wh=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,z={};function P(k,F,w){this.props=k,this.context=F,this.refs=z,this.updater=w||_}P.prototype.isReactComponent={},P.prototype.setState=function(k,F){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,F,"setState")},P.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function L(){}L.prototype=P.prototype;function I(k,F,w){this.props=k,this.context=F,this.refs=z,this.updater=w||_}var rn=I.prototype=new L;rn.constructor=I,O(rn,P.prototype),rn.isPureReactComponent=!0;var J=Array.isArray;function U(){}var X={H:null,A:null,T:null,S:null},cn=Object.prototype.hasOwnProperty;function ln(k,F,w){var nn=w.ref;return{$$typeof:t,type:k,key:F,ref:nn!==void 0?nn:null,props:w}}function N(k,F){return ln(k.type,F,k.props)}function en(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function tn(k){var F={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(w){return F[w]})}var bn=/\/+/g;function an(k,F){return typeof k=="object"&&k!==null&&k.key!=null?tn(""+k.key):F.toString(36)}function Q(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(U,U):(k.status="pending",k.then(function(F){k.status==="pending"&&(k.status="fulfilled",k.value=F)},function(F){k.status==="pending"&&(k.status="rejected",k.reason=F)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function R(k,F,w,nn,hn){var fn=typeof k;(fn==="undefined"||fn==="boolean")&&(k=null);var kn=!1;if(k===null)kn=!0;else switch(fn){case"bigint":case"string":case"number":kn=!0;break;case"object":switch(k.$$typeof){case t:case r:kn=!0;break;case b:return kn=k._init,R(kn(k._payload),F,w,nn,hn)}}if(kn)return hn=hn(k),kn=nn===""?"."+an(k,0):nn,J(hn)?(w="",kn!=null&&(w=kn.replace(bn,"$&/")+"/"),R(hn,F,w,"",function(Ye){return Ye})):hn!=null&&(en(hn)&&(hn=N(hn,w+(hn.key==null||k&&k.key===hn.key?"":(""+hn.key).replace(bn,"$&/")+"/")+kn)),F.push(hn)),1;kn=0;var Qn=nn===""?".":nn+":";if(J(k))for(var Bn=0;Bn<k.length;Bn++)nn=k[Bn],fn=Qn+an(nn,Bn),kn+=R(nn,F,w,fn,hn);else if(Bn=x(k),typeof Bn=="function")for(k=Bn.call(k),Bn=0;!(nn=k.next()).done;)nn=nn.value,fn=Qn+an(nn,Bn++),kn+=R(nn,F,w,fn,hn);else if(fn==="object"){if(typeof k.then=="function")return R(Q(k),F,w,nn,hn);throw F=String(k),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return kn}function Z(k,F,w){if(k==null)return k;var nn=[],hn=0;return R(k,nn,"","",function(fn){return F.call(w,fn,hn++)}),nn}function sn(k){if(k._status===-1){var F=k._result;F=F(),F.then(function(w){(k._status===0||k._status===-1)&&(k._status=1,k._result=w)},function(w){(k._status===0||k._status===-1)&&(k._status=2,k._result=w)}),k._status===-1&&(k._status=0,k._result=F)}if(k._status===1)return k._result.default;throw k._result}var vn=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},C={map:Z,forEach:function(k,F,w){Z(k,function(){F.apply(this,arguments)},w)},count:function(k){var F=0;return Z(k,function(){F++}),F},toArray:function(k){return Z(k,function(F){return F})||[]},only:function(k){if(!en(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return yn.Activity=g,yn.Children=C,yn.Component=P,yn.Fragment=a,yn.Profiler=s,yn.PureComponent=I,yn.StrictMode=o,yn.Suspense=h,yn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,yn.__COMPILER_RUNTIME={__proto__:null,c:function(k){return X.H.useMemoCache(k)}},yn.cache=function(k){return function(){return k.apply(null,arguments)}},yn.cacheSignal=function(){return null},yn.cloneElement=function(k,F,w){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var nn=O({},k.props),hn=k.key;if(F!=null)for(fn in F.key!==void 0&&(hn=""+F.key),F)!cn.call(F,fn)||fn==="key"||fn==="__self"||fn==="__source"||fn==="ref"&&F.ref===void 0||(nn[fn]=F[fn]);var fn=arguments.length-2;if(fn===1)nn.children=w;else if(1<fn){for(var kn=Array(fn),Qn=0;Qn<fn;Qn++)kn[Qn]=arguments[Qn+2];nn.children=kn}return ln(k.type,hn,nn)},yn.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:c,_context:k},k},yn.createElement=function(k,F,w){var nn,hn={},fn=null;if(F!=null)for(nn in F.key!==void 0&&(fn=""+F.key),F)cn.call(F,nn)&&nn!=="key"&&nn!=="__self"&&nn!=="__source"&&(hn[nn]=F[nn]);var kn=arguments.length-2;if(kn===1)hn.children=w;else if(1<kn){for(var Qn=Array(kn),Bn=0;Bn<kn;Bn++)Qn[Bn]=arguments[Bn+2];hn.children=Qn}if(k&&k.defaultProps)for(nn in kn=k.defaultProps,kn)hn[nn]===void 0&&(hn[nn]=kn[nn]);return ln(k,fn,hn)},yn.createRef=function(){return{current:null}},yn.forwardRef=function(k){return{$$typeof:d,render:k}},yn.isValidElement=en,yn.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:sn}},yn.memo=function(k,F){return{$$typeof:m,type:k,compare:F===void 0?null:F}},yn.startTransition=function(k){var F=X.T,w={};X.T=w;try{var nn=k(),hn=X.S;hn!==null&&hn(w,nn),typeof nn=="object"&&nn!==null&&typeof nn.then=="function"&&nn.then(U,vn)}catch(fn){vn(fn)}finally{F!==null&&w.types!==null&&(F.types=w.types),X.T=F}},yn.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},yn.use=function(k){return X.H.use(k)},yn.useActionState=function(k,F,w){return X.H.useActionState(k,F,w)},yn.useCallback=function(k,F){return X.H.useCallback(k,F)},yn.useContext=function(k){return X.H.useContext(k)},yn.useDebugValue=function(){},yn.useDeferredValue=function(k,F){return X.H.useDeferredValue(k,F)},yn.useEffect=function(k,F){return X.H.useEffect(k,F)},yn.useEffectEvent=function(k){return X.H.useEffectEvent(k)},yn.useId=function(){return X.H.useId()},yn.useImperativeHandle=function(k,F,w){return X.H.useImperativeHandle(k,F,w)},yn.useInsertionEffect=function(k,F){return X.H.useInsertionEffect(k,F)},yn.useLayoutEffect=function(k,F){return X.H.useLayoutEffect(k,F)},yn.useMemo=function(k,F){return X.H.useMemo(k,F)},yn.useOptimistic=function(k,F){return X.H.useOptimistic(k,F)},yn.useReducer=function(k,F,w){return X.H.useReducer(k,F,w)},yn.useRef=function(k){return X.H.useRef(k)},yn.useState=function(k){return X.H.useState(k)},yn.useSyncExternalStore=function(k,F,w){return X.H.useSyncExternalStore(k,F,w)},yn.useTransition=function(){return X.H.useTransition()},yn.version="19.2.3",yn}var Ch;function Kc(){return Ch||(Ch=1,fc.exports=Db()),fc.exports}var D=Kc();const Nr=Jc(D);var pc={exports:{}},Oa={},dc={exports:{}},mc={};var Eh;function Ob(){return Eh||(Eh=1,(function(t){function r(R,Z){var sn=R.length;R.push(Z);n:for(;0<sn;){var vn=sn-1>>>1,C=R[vn];if(0<s(C,Z))R[vn]=Z,R[sn]=C,sn=vn;else break n}}function a(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var Z=R[0],sn=R.pop();if(sn!==Z){R[0]=sn;n:for(var vn=0,C=R.length,k=C>>>1;vn<k;){var F=2*(vn+1)-1,w=R[F],nn=F+1,hn=R[nn];if(0>s(w,sn))nn<C&&0>s(hn,w)?(R[vn]=hn,R[nn]=sn,vn=nn):(R[vn]=w,R[F]=sn,vn=F);else if(nn<C&&0>s(hn,sn))R[vn]=hn,R[nn]=sn,vn=nn;else break n}}return Z}function s(R,Z){var sn=R.sortIndex-Z.sortIndex;return sn!==0?sn:R.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();t.unstable_now=function(){return f.now()-d}}var h=[],m=[],b=1,g=null,S=3,x=!1,_=!1,O=!1,z=!1,P=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function rn(R){for(var Z=a(m);Z!==null;){if(Z.callback===null)o(m);else if(Z.startTime<=R)o(m),Z.sortIndex=Z.expirationTime,r(h,Z);else break;Z=a(m)}}function J(R){if(O=!1,rn(R),!_)if(a(h)!==null)_=!0,U||(U=!0,tn());else{var Z=a(m);Z!==null&&Q(J,Z.startTime-R)}}var U=!1,X=-1,cn=5,ln=-1;function N(){return z?!0:!(t.unstable_now()-ln<cn)}function en(){if(z=!1,U){var R=t.unstable_now();ln=R;var Z=!0;try{n:{_=!1,O&&(O=!1,L(X),X=-1),x=!0;var sn=S;try{e:{for(rn(R),g=a(h);g!==null&&!(g.expirationTime>R&&N());){var vn=g.callback;if(typeof vn=="function"){g.callback=null,S=g.priorityLevel;var C=vn(g.expirationTime<=R);if(R=t.unstable_now(),typeof C=="function"){g.callback=C,rn(R),Z=!0;break e}g===a(h)&&o(h),rn(R)}else o(h);g=a(h)}if(g!==null)Z=!0;else{var k=a(m);k!==null&&Q(J,k.startTime-R),Z=!1}}break n}finally{g=null,S=sn,x=!1}Z=void 0}}finally{Z?tn():U=!1}}}var tn;if(typeof I=="function")tn=function(){I(en)};else if(typeof MessageChannel<"u"){var bn=new MessageChannel,an=bn.port2;bn.port1.onmessage=en,tn=function(){an.postMessage(null)}}else tn=function(){P(en,0)};function Q(R,Z){X=P(function(){R(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):cn=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(R){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var sn=S;S=Z;try{return R()}finally{S=sn}},t.unstable_requestPaint=function(){z=!0},t.unstable_runWithPriority=function(R,Z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var sn=S;S=R;try{return Z()}finally{S=sn}},t.unstable_scheduleCallback=function(R,Z,sn){var vn=t.unstable_now();switch(typeof sn=="object"&&sn!==null?(sn=sn.delay,sn=typeof sn=="number"&&0<sn?vn+sn:vn):sn=vn,R){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=sn+C,R={id:b++,callback:Z,priorityLevel:R,startTime:sn,expirationTime:C,sortIndex:-1},sn>vn?(R.sortIndex=sn,r(m,R),a(h)===null&&R===a(m)&&(O?(L(X),X=-1):O=!0,Q(J,sn-vn))):(R.sortIndex=C,r(h,R),_||x||(_=!0,U||(U=!0,tn()))),R},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(R){var Z=S;return function(){var sn=S;S=Z;try{return R.apply(this,arguments)}finally{S=sn}}}})(mc)),mc}var Th;function Rb(){return Th||(Th=1,dc.exports=Ob()),dc.exports}var hc={exports:{}},ye={};var _h;function zb(){if(_h)return ye;_h=1;var t=Kc();function r(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(h,m,b){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:h,containerInfo:m,implementation:b}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ye.createPortal=function(h,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return c(h,m,null,b)},ye.flushSync=function(h){var m=f.T,b=o.p;try{if(f.T=null,o.p=2,h)return h()}finally{f.T=m,o.p=b,o.d.f()}},ye.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(h,m))},ye.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},ye.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var b=m.as,g=d(b,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?o.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:x}):b==="script"&&o.d.X(h,{crossOrigin:g,integrity:S,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ye.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=d(m.as,m.crossOrigin);o.d.M(h,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(h)},ye.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,g=d(b,m.crossOrigin);o.d.L(h,b,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ye.preloadModule=function(h,m){if(typeof h=="string")if(m){var b=d(m.as,m.crossOrigin);o.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(h)},ye.requestFormReset=function(h){o.d.r(h)},ye.unstable_batchedUpdates=function(h,m){return h(m)},ye.useFormState=function(h,m,b){return f.H.useFormState(h,m,b)},ye.useFormStatus=function(){return f.H.useHostTransitionStatus()},ye.version="19.2.3",ye}var kh;function Lb(){if(kh)return hc.exports;kh=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),hc.exports=zb(),hc.exports}var Ah;function jb(){if(Ah)return Oa;Ah=1;var t=Rb(),r=Kc(),a=Lb();function o(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var e=n,i=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(i=e.return),n=e.return;while(n)}return e.tag===3?i:null}function f(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function d(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function h(n){if(c(n)!==n)throw Error(o(188))}function m(n){var e=n.alternate;if(!e){if(e=c(n),e===null)throw Error(o(188));return e!==n?null:n}for(var i=n,l=e;;){var u=i.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===i)return h(u),n;if(p===l)return h(u),e;p=p.sibling}throw Error(o(188))}if(i.return!==l.return)i=u,l=p;else{for(var y=!1,v=u.child;v;){if(v===i){y=!0,i=u,l=p;break}if(v===l){y=!0,l=u,i=p;break}v=v.sibling}if(!y){for(v=p.child;v;){if(v===i){y=!0,i=p,l=u;break}if(v===l){y=!0,l=p,i=u;break}v=v.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?n:e}function b(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=b(n),e!==null)return e;n=n.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),I=Symbol.for("react.context"),rn=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),ln=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),en=Symbol.iterator;function tn(n){return n===null||typeof n!="object"?null:(n=en&&n[en]||n["@@iterator"],typeof n=="function"?n:null)}var bn=Symbol.for("react.client.reference");function an(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===bn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case P:return"Profiler";case z:return"StrictMode";case J:return"Suspense";case U:return"SuspenseList";case ln:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case _:return"Portal";case I:return n.displayName||"Context";case L:return(n._context.displayName||"Context")+".Consumer";case rn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return e=n.displayName||null,e!==null?e:an(n.type)||"Memo";case cn:e=n._payload,n=n._init;try{return an(n(e))}catch{}}return null}var Q=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sn={pending:!1,data:null,method:null,action:null},vn=[],C=-1;function k(n){return{current:n}}function F(n){0>C||(n.current=vn[C],vn[C]=null,C--)}function w(n,e){C++,vn[C]=n.current,n.current=e}var nn=k(null),hn=k(null),fn=k(null),kn=k(null);function Qn(n,e){switch(w(fn,e),w(hn,n),w(nn,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Fm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Fm(e),n=Vm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}F(nn),w(nn,n)}function Bn(){F(nn),F(hn),F(fn)}function Ye(n){n.memoizedState!==null&&w(kn,n);var e=nn.current,i=Vm(e,n.type);e!==i&&(w(hn,n),w(nn,i))}function yt(n){hn.current===n&&(F(nn),F(hn)),kn.current===n&&(F(kn),Aa._currentValue=sn)}var Ur,il;function bt(n){if(Ur===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Ur=e&&e[1]||"",il=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ur+n+il}var Ui=!1;function Hi(n,e){if(!n||Ui)return"";Ui=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(q){var H=q}Reflect.construct(n,[],W)}else{try{W.call()}catch(q){H=q}n.call(W.prototype)}}else{try{throw Error()}catch(q){H=q}(W=n())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(q){if(q&&H&&typeof q.stack=="string")return[q.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),y=p[0],v=p[1];if(y&&v){var T=y.split(`
`),B=v.split(`
`);for(u=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;u<B.length&&!B[u].includes("DetermineComponentFrameRoot");)u++;if(l===T.length||u===B.length)for(l=T.length-1,u=B.length-1;1<=l&&0<=u&&T[l]!==B[u];)u--;for(;1<=l&&0<=u;l--,u--)if(T[l]!==B[u]){if(l!==1||u!==1)do if(l--,u--,0>u||T[l]!==B[u]){var V=`
`+T[l].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=l&&0<=u);break}}}finally{Ui=!1,Error.prepareStackTrace=i}return(i=n?n.displayName||n.name:"")?bt(i):""}function rl(n,e){switch(n.tag){case 26:case 27:case 5:return bt(n.type);case 16:return bt("Lazy");case 13:return n.child!==e&&e!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return Hi(n.type,!1);case 11:return Hi(n.type.render,!1);case 1:return Hi(n.type,!0);case 31:return bt("Activity");default:return""}}function al(n){try{var e="",i=null;do e+=rl(n,i),i=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ii=Object.prototype.hasOwnProperty,qi=t.unstable_scheduleCallback,Hr=t.unstable_cancelCallback,Xo=t.unstable_shouldYield,Zo=t.unstable_requestPaint,ve=t.unstable_now,$o=t.unstable_getCurrentPriorityLevel,Y=t.unstable_ImmediatePriority,K=t.unstable_UserBlockingPriority,gn=t.unstable_NormalPriority,Cn=t.unstable_LowPriority,zn=t.unstable_IdlePriority,Re=t.log,xt=t.unstable_setDisableYieldValue,Se=null,le=null;function Ee(n){if(typeof Re=="function"&&xt(n),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(Se,n)}catch{}}var qn=Math.clz32?Math.clz32:g0,It=Math.log,rt=Math.LN2;function g0(n){return n>>>=0,n===0?32:31-(It(n)/rt|0)|0}var ll=256,ol=262144,sl=4194304;function hi(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ul(n,e,i){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,y=n.pingedLanes;n=n.warmLanes;var v=l&134217727;return v!==0?(l=v&~p,l!==0?u=hi(l):(y&=v,y!==0?u=hi(y):i||(i=v&~n,i!==0&&(u=hi(i))))):(v=l&~p,v!==0?u=hi(v):y!==0?u=hi(y):i||(i=l&~n,i!==0&&(u=hi(i)))),u===0?0:e!==0&&e!==u&&(e&p)===0&&(p=u&-u,i=e&-e,p>=i||p===32&&(i&4194048)!==0)?e:u}function Ir(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function y0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(){var n=sl;return sl<<=1,(sl&62914560)===0&&(sl=4194304),n}function Jo(n){for(var e=[],i=0;31>i;i++)e.push(n);return e}function qr(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function b0(n,e,i,l,u,p){var y=n.pendingLanes;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=i,n.entangledLanes&=i,n.errorRecoveryDisabledLanes&=i,n.shellSuspendCounter=0;var v=n.entanglements,T=n.expirationTimes,B=n.hiddenUpdates;for(i=y&~i;0<i;){var V=31-qn(i),W=1<<V;v[V]=0,T[V]=-1;var H=B[V];if(H!==null)for(B[V]=null,V=0;V<H.length;V++){var q=H[V];q!==null&&(q.lane&=-536870913)}i&=~W}l!==0&&Tf(n,l,0),p!==0&&u===0&&n.tag!==0&&(n.suspendedLanes|=p&~(y&~e))}function Tf(n,e,i){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-qn(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|i&261930}function _f(n,e){var i=n.entangledLanes|=e;for(n=n.entanglements;i;){var l=31-qn(i),u=1<<l;u&e|n[l]&e&&(n[l]|=e),i&=~u}}function kf(n,e){var i=e&-e;return i=(i&42)!==0?1:Ko(i),(i&(n.suspendedLanes|e))!==0?0:i}function Ko(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ns(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Af(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:dh(n.type))}function Pf(n,e){var i=Z.p;try{return Z.p=n,e()}finally{Z.p=i}}var qt=Math.random().toString(36).slice(2),fe="__reactFiber$"+qt,Te="__reactProps$"+qt,Fi="__reactContainer$"+qt,es="__reactEvents$"+qt,x0="__reactListeners$"+qt,v0="__reactHandles$"+qt,Mf="__reactResources$"+qt,Fr="__reactMarker$"+qt;function ts(n){delete n[fe],delete n[Te],delete n[es],delete n[x0],delete n[v0]}function Vi(n){var e=n[fe];if(e)return e;for(var i=n.parentNode;i;){if(e=i[Fi]||i[fe]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(n=$m(n);n!==null;){if(i=n[fe])return i;n=$m(n)}return e}n=i,i=n.parentNode}return null}function Yi(n){if(n=n[fe]||n[Fi]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Vr(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(o(33))}function Gi(n){var e=n[Mf];return e||(e=n[Mf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function se(n){n[Fr]=!0}var Nf=new Set,Df={};function gi(n,e){Wi(n,e),Wi(n+"Capture",e)}function Wi(n,e){for(Df[n]=e,n=0;n<e.length;n++)Nf.add(e[n])}var S0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Rf={};function w0(n){return Ii.call(Rf,n)?!0:Ii.call(Of,n)?!1:S0.test(n)?Rf[n]=!0:(Of[n]=!0,!1)}function cl(n,e,i){if(w0(e))if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+i)}}function fl(n,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+i)}}function vt(n,e,i,l){if(l===null)n.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttributeNS(e,i,""+l)}}function Ge(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function zf(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function C0(n,e,i){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,p=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return u.call(this)},set:function(y){i=""+y,p.call(this,y)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function is(n){if(!n._valueTracker){var e=zf(n)?"checked":"value";n._valueTracker=C0(n,e,""+n[e])}}function Lf(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var i=e.getValue(),l="";return n&&(l=zf(n)?n.checked?"true":"false":n.value),n=l,n!==i?(e.setValue(n),!0):!1}function pl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var E0=/[\n"\\]/g;function We(n){return n.replace(E0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function rs(n,e,i,l,u,p,y,v){n.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?n.type=y:n.removeAttribute("type"),e!=null?y==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Ge(e)):n.value!==""+Ge(e)&&(n.value=""+Ge(e)):y!=="submit"&&y!=="reset"||n.removeAttribute("value"),e!=null?as(n,y,Ge(e)):i!=null?as(n,y,Ge(i)):l!=null&&n.removeAttribute("value"),u==null&&p!=null&&(n.defaultChecked=!!p),u!=null&&(n.checked=u&&typeof u!="function"&&typeof u!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.name=""+Ge(v):n.removeAttribute("name")}function jf(n,e,i,l,u,p,y,v){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),e!=null||i!=null){if(!(p!=="submit"&&p!=="reset"||e!=null)){is(n);return}i=i!=null?""+Ge(i):"",e=e!=null?""+Ge(e):i,v||e===n.value||(n.value=e),n.defaultValue=e}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=v?n.checked:!!l,n.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(n.name=y),is(n)}function as(n,e,i){e==="number"&&pl(n.ownerDocument)===n||n.defaultValue===""+i||(n.defaultValue=""+i)}function Qi(n,e,i,l){if(n=n.options,e){e={};for(var u=0;u<i.length;u++)e["$"+i[u]]=!0;for(i=0;i<n.length;i++)u=e.hasOwnProperty("$"+n[i].value),n[i].selected!==u&&(n[i].selected=u),u&&l&&(n[i].defaultSelected=!0)}else{for(i=""+Ge(i),e=null,u=0;u<n.length;u++){if(n[u].value===i){n[u].selected=!0,l&&(n[u].defaultSelected=!0);return}e!==null||n[u].disabled||(e=n[u])}e!==null&&(e.selected=!0)}}function Bf(n,e,i){if(e!=null&&(e=""+Ge(e),e!==n.value&&(n.value=e),i==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=i!=null?""+Ge(i):""}function Uf(n,e,i,l){if(e==null){if(l!=null){if(i!=null)throw Error(o(92));if(Q(l)){if(1<l.length)throw Error(o(93));l=l[0]}i=l}i==null&&(i=""),e=i}i=Ge(e),n.defaultValue=i,l=n.textContent,l===i&&l!==""&&l!==null&&(n.value=l),is(n)}function Xi(n,e){if(e){var i=n.firstChild;if(i&&i===n.lastChild&&i.nodeType===3){i.nodeValue=e;return}}n.textContent=e}var T0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hf(n,e,i){var l=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,i):typeof i!="number"||i===0||T0.has(e)?e==="float"?n.cssFloat=i:n[e]=(""+i).trim():n[e]=i+"px"}function If(n,e,i){if(e!=null&&typeof e!="object")throw Error(o(62));if(n=n.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var u in e)l=e[u],e.hasOwnProperty(u)&&i[u]!==l&&Hf(n,u,l)}else for(var p in e)e.hasOwnProperty(p)&&Hf(n,p,e[p])}function ls(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(n){return k0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function St(){}var os=null;function ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Zi=null,$i=null;function qf(n){var e=Yi(n);if(e&&(n=e.stateNode)){var i=n[Te]||null;n:switch(n=e.stateNode,e.type){case"input":if(rs(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=n;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+We(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var l=i[e];if(l!==n&&l.form===n.form){var u=l[Te]||null;if(!u)throw Error(o(90));rs(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<i.length;e++)l=i[e],l.form===n.form&&Lf(l)}break n;case"textarea":Bf(n,i.value,i.defaultValue);break n;case"select":e=i.value,e!=null&&Qi(n,!!i.multiple,e,!1)}}}var us=!1;function Ff(n,e,i){if(us)return n(e,i);us=!0;try{var l=n(e);return l}finally{if(us=!1,(Zi!==null||$i!==null)&&(no(),Zi&&(e=Zi,n=$i,$i=Zi=null,qf(e),n)))for(e=0;e<n.length;e++)qf(n[e])}}function Yr(n,e){var i=n.stateNode;if(i===null)return null;var l=i[Te]||null;if(l===null)return null;i=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(i&&typeof i!="function")throw Error(o(231,e,typeof i));return i}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cs=!1;if(wt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{cs=!1}var Ft=null,fs=null,ml=null;function Vf(){if(ml)return ml;var n,e=fs,i=e.length,l,u="value"in Ft?Ft.value:Ft.textContent,p=u.length;for(n=0;n<i&&e[n]===u[n];n++);var y=i-n;for(l=1;l<=y&&e[i-l]===u[p-l];l++);return ml=u.slice(n,1<l?1-l:void 0)}function hl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function gl(){return!0}function Yf(){return!1}function _e(n){function e(i,l,u,p,y){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var v in n)n.hasOwnProperty(v)&&(i=n[v],this[v]=i?i(p):p[v]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?gl:Yf,this.isPropagationStopped=Yf,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=_e(yi),Wr=g({},yi,{view:0,detail:0}),A0=_e(Wr),ps,ds,Qr,bl=g({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qr&&(Qr&&n.type==="mousemove"?(ps=n.screenX-Qr.screenX,ds=n.screenY-Qr.screenY):ds=ps=0,Qr=n),ps)},movementY:function(n){return"movementY"in n?n.movementY:ds}}),Gf=_e(bl),P0=g({},bl,{dataTransfer:0}),M0=_e(P0),N0=g({},Wr,{relatedTarget:0}),ms=_e(N0),D0=g({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=_e(D0),R0=g({},yi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),z0=_e(R0),L0=g({},yi,{data:0}),Wf=_e(L0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=U0[n])?!!e[n]:!1}function hs(){return H0}var I0=g({},Wr,{key:function(n){if(n.key){var e=j0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=hl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?B0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(n){return n.type==="keypress"?hl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?hl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q0=_e(I0),F0=g({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=_e(F0),V0=g({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),Y0=_e(V0),G0=g({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),W0=_e(G0),Q0=g({},bl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=_e(Q0),Z0=g({},yi,{newState:0,oldState:0}),$0=_e(Z0),J0=[9,13,27,32],gs=wt&&"CompositionEvent"in window,Xr=null;wt&&"documentMode"in document&&(Xr=document.documentMode);var K0=wt&&"TextEvent"in window&&!Xr,Xf=wt&&(!gs||Xr&&8<Xr&&11>=Xr),Zf=" ",$f=!1;function Jf(n,e){switch(n){case"keyup":return J0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ji=!1;function n1(n,e){switch(n){case"compositionend":return Kf(e);case"keypress":return e.which!==32?null:($f=!0,Zf);case"textInput":return n=e.data,n===Zf&&$f?null:n;default:return null}}function e1(n,e){if(Ji)return n==="compositionend"||!gs&&Jf(n,e)?(n=Vf(),ml=fs=Ft=null,Ji=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xf&&e.locale!=="ko"?null:e.data;default:return null}}var t1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!t1[n.type]:e==="textarea"}function ep(n,e,i,l){Zi?$i?$i.push(l):$i=[l]:Zi=l,e=oo(e,"onChange"),0<e.length&&(i=new yl("onChange","change",null,i,l),n.push({event:i,listeners:e}))}var Zr=null,$r=null;function i1(n){jm(n,0)}function xl(n){var e=Vr(n);if(Lf(e))return n}function tp(n,e){if(n==="change")return e}var ip=!1;if(wt){var ys;if(wt){var bs="oninput"in document;if(!bs){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),bs=typeof rp.oninput=="function"}ys=bs}else ys=!1;ip=ys&&(!document.documentMode||9<document.documentMode)}function ap(){Zr&&(Zr.detachEvent("onpropertychange",lp),$r=Zr=null)}function lp(n){if(n.propertyName==="value"&&xl($r)){var e=[];ep(e,$r,n,ss(n)),Ff(i1,e)}}function r1(n,e,i){n==="focusin"?(ap(),Zr=e,$r=i,Zr.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function a1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl($r)}function l1(n,e){if(n==="click")return xl(e)}function o1(n,e){if(n==="input"||n==="change")return xl(e)}function s1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ze=typeof Object.is=="function"?Object.is:s1;function Jr(n,e){if(ze(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var i=Object.keys(n),l=Object.keys(e);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!Ii.call(e,u)||!ze(n[u],e[u]))return!1}return!0}function op(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sp(n,e){var i=op(n);n=0;for(var l;i;){if(i.nodeType===3){if(l=n+i.textContent.length,n<=e&&l>=e)return{node:i,offset:e-n};n=l}n:{for(;i;){if(i.nextSibling){i=i.nextSibling;break n}i=i.parentNode}i=void 0}i=op(i)}}function up(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?up(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function cp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=pl(n.document);e instanceof n.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)n=e.contentWindow;else break;e=pl(n.document)}return e}function xs(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var u1=wt&&"documentMode"in document&&11>=document.documentMode,Ki=null,vs=null,Kr=null,Ss=!1;function fp(n,e,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ss||Ki==null||Ki!==pl(l)||(l=Ki,"selectionStart"in l&&xs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Kr&&Jr(Kr,l)||(Kr=l,l=oo(vs,"onSelect"),0<l.length&&(e=new yl("onSelect","select",null,e,i),n.push({event:e,listeners:l}),e.target=Ki)))}function bi(n,e){var i={};return i[n.toLowerCase()]=e.toLowerCase(),i["Webkit"+n]="webkit"+e,i["Moz"+n]="moz"+e,i}var nr={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionrun:bi("Transition","TransitionRun"),transitionstart:bi("Transition","TransitionStart"),transitioncancel:bi("Transition","TransitionCancel"),transitionend:bi("Transition","TransitionEnd")},ws={},pp={};wt&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function xi(n){if(ws[n])return ws[n];if(!nr[n])return n;var e=nr[n],i;for(i in e)if(e.hasOwnProperty(i)&&i in pp)return ws[n]=e[i];return n}var dp=xi("animationend"),mp=xi("animationiteration"),hp=xi("animationstart"),c1=xi("transitionrun"),f1=xi("transitionstart"),p1=xi("transitioncancel"),gp=xi("transitionend"),yp=new Map,Cs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cs.push("scrollEnd");function at(n,e){yp.set(n,e),gi(e,[n])}var vl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Qe=[],er=0,Es=0;function Sl(){for(var n=er,e=Es=er=0;e<n;){var i=Qe[e];Qe[e++]=null;var l=Qe[e];Qe[e++]=null;var u=Qe[e];Qe[e++]=null;var p=Qe[e];if(Qe[e++]=null,l!==null&&u!==null){var y=l.pending;y===null?u.next=u:(u.next=y.next,y.next=u),l.pending=u}p!==0&&bp(i,u,p)}}function wl(n,e,i,l){Qe[er++]=n,Qe[er++]=e,Qe[er++]=i,Qe[er++]=l,Es|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ts(n,e,i,l){return wl(n,e,i,l),Cl(n)}function vi(n,e){return wl(n,null,null,e),Cl(n)}function bp(n,e,i){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i);for(var u=!1,p=n.return;p!==null;)p.childLanes|=i,l=p.alternate,l!==null&&(l.childLanes|=i),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(u=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,u&&e!==null&&(u=31-qn(i),n=p.hiddenUpdates,l=n[u],l===null?n[u]=[e]:l.push(e),e.lane=i|536870912),p):null}function Cl(n){if(50<Sa)throw Sa=0,Ru=null,Error(o(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var tr={};function d1(n,e,i,l){this.tag=n,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(n,e,i,l){return new d1(n,e,i,l)}function _s(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ct(n,e){var i=n.alternate;return i===null?(i=Le(n.tag,e,n.key,n.mode),i.elementType=n.elementType,i.type=n.type,i.stateNode=n.stateNode,i.alternate=n,n.alternate=i):(i.pendingProps=e,i.type=n.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=n.flags&65011712,i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=n.sibling,i.index=n.index,i.ref=n.ref,i.refCleanup=n.refCleanup,i}function xp(n,e){n.flags&=65011714;var i=n.alternate;return i===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=i.childLanes,n.lanes=i.lanes,n.child=i.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue,n.type=i.type,e=i.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function El(n,e,i,l,u,p){var y=0;if(l=n,typeof n=="function")_s(n)&&(y=1);else if(typeof n=="string")y=bb(n,i,nn.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case ln:return n=Le(31,i,e,u),n.elementType=ln,n.lanes=p,n;case O:return Si(i.children,u,p,e);case z:y=8,u|=24;break;case P:return n=Le(12,i,e,u|2),n.elementType=P,n.lanes=p,n;case J:return n=Le(13,i,e,u),n.elementType=J,n.lanes=p,n;case U:return n=Le(19,i,e,u),n.elementType=U,n.lanes=p,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case I:y=10;break n;case L:y=9;break n;case rn:y=11;break n;case X:y=14;break n;case cn:y=16,l=null;break n}y=29,i=Error(o(130,n===null?"null":typeof n,"")),l=null}return e=Le(y,i,e,u),e.elementType=n,e.type=l,e.lanes=p,e}function Si(n,e,i,l){return n=Le(7,n,l,e),n.lanes=i,n}function ks(n,e,i){return n=Le(6,n,null,e),n.lanes=i,n}function vp(n){var e=Le(18,null,null,0);return e.stateNode=n,e}function As(n,e,i){return e=Le(4,n.children!==null?n.children:[],n.key,e),e.lanes=i,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Sp=new WeakMap;function Xe(n,e){if(typeof n=="object"&&n!==null){var i=Sp.get(n);return i!==void 0?i:(e={value:n,source:e,stack:al(e)},Sp.set(n,e),e)}return{value:n,source:e,stack:al(e)}}var ir=[],rr=0,Tl=null,na=0,Ze=[],$e=0,Vt=null,ft=1,pt="";function Et(n,e){ir[rr++]=na,ir[rr++]=Tl,Tl=n,na=e}function wp(n,e,i){Ze[$e++]=ft,Ze[$e++]=pt,Ze[$e++]=Vt,Vt=n;var l=ft;n=pt;var u=32-qn(l)-1;l&=~(1<<u),i+=1;var p=32-qn(e)+u;if(30<p){var y=u-u%5;p=(l&(1<<y)-1).toString(32),l>>=y,u-=y,ft=1<<32-qn(e)+u|i<<u|l,pt=p+n}else ft=1<<p|i<<u|l,pt=n}function Ps(n){n.return!==null&&(Et(n,1),wp(n,1,0))}function Ms(n){for(;n===Tl;)Tl=ir[--rr],ir[rr]=null,na=ir[--rr],ir[rr]=null;for(;n===Vt;)Vt=Ze[--$e],Ze[$e]=null,pt=Ze[--$e],Ze[$e]=null,ft=Ze[--$e],Ze[$e]=null}function Cp(n,e){Ze[$e++]=ft,Ze[$e++]=pt,Ze[$e++]=Vt,ft=e.id,pt=e.overflow,Vt=n}var pe=null,Gn=null,Mn=!1,Yt=null,Je=!1,Ns=Error(o(519));function Gt(n){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ea(Xe(e,n)),Ns}function Ep(n){var e=n.stateNode,i=n.type,l=n.memoizedProps;switch(e[fe]=n,e[Te]=l,i){case"dialog":Tn("cancel",e),Tn("close",e);break;case"iframe":case"object":case"embed":Tn("load",e);break;case"video":case"audio":for(i=0;i<Ca.length;i++)Tn(Ca[i],e);break;case"source":Tn("error",e);break;case"img":case"image":case"link":Tn("error",e),Tn("load",e);break;case"details":Tn("toggle",e);break;case"input":Tn("invalid",e),jf(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tn("invalid",e);break;case"textarea":Tn("invalid",e),Uf(e,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||l.suppressHydrationWarning===!0||Im(e.textContent,i)?(l.popover!=null&&(Tn("beforetoggle",e),Tn("toggle",e)),l.onScroll!=null&&Tn("scroll",e),l.onScrollEnd!=null&&Tn("scrollend",e),l.onClick!=null&&(e.onclick=St),e=!0):e=!1,e||Gt(n,!0)}function Tp(n){for(pe=n.return;pe;)switch(pe.tag){case 5:case 31:case 13:Je=!1;return;case 27:case 3:Je=!0;return;default:pe=pe.return}}function ar(n){if(n!==pe)return!1;if(!Mn)return Tp(n),Mn=!0,!1;var e=n.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=n.type,i=!(i!=="form"&&i!=="button")||Xu(n.type,n.memoizedProps)),i=!i),i&&Gn&&Gt(n),Tp(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Gn=Zm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Gn=Zm(n)}else e===27?(e=Gn,li(n.type)?(n=nc,nc=null,Gn=n):Gn=e):Gn=pe?nt(n.stateNode.nextSibling):null;return!0}function wi(){Gn=pe=null,Mn=!1}function Ds(){var n=Yt;return n!==null&&(Me===null?Me=n:Me.push.apply(Me,n),Yt=null),n}function ea(n){Yt===null?Yt=[n]:Yt.push(n)}var Os=k(null),Ci=null,Tt=null;function Wt(n,e,i){w(Os,e._currentValue),e._currentValue=i}function _t(n){n._currentValue=Os.current,F(Os)}function Rs(n,e,i){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===i)break;n=n.return}}function zs(n,e,i,l){var u=n.child;for(u!==null&&(u.return=n);u!==null;){var p=u.dependencies;if(p!==null){var y=u.child;p=p.firstContext;n:for(;p!==null;){var v=p;p=u;for(var T=0;T<e.length;T++)if(v.context===e[T]){p.lanes|=i,v=p.alternate,v!==null&&(v.lanes|=i),Rs(p.return,i,n),l||(y=null);break n}p=v.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(o(341));y.lanes|=i,p=y.alternate,p!==null&&(p.lanes|=i),Rs(y,i,n),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===n){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function lr(n,e,i,l){n=null;for(var u=e,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var v=u.type;ze(u.pendingProps.value,y.value)||(n!==null?n.push(v):n=[v])}}else if(u===kn.current){if(y=u.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(n!==null?n.push(Aa):n=[Aa])}u=u.return}n!==null&&zs(e,n,i,l),e.flags|=262144}function _l(n){for(n=n.firstContext;n!==null;){if(!ze(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ei(n){Ci=n,Tt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function de(n){return _p(Ci,n)}function kl(n,e){return Ci===null&&Ei(n),_p(n,e)}function _p(n,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},Tt===null){if(n===null)throw Error(o(308));Tt=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Tt=Tt.next=e;return i}var m1=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(i,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(i){return i()})}},h1=t.unstable_scheduleCallback,g1=t.unstable_NormalPriority,ee={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ls(){return{controller:new m1,data:new Map,refCount:0}}function ta(n){n.refCount--,n.refCount===0&&h1(g1,function(){n.controller.abort()})}var ia=null,js=0,or=0,sr=null;function y1(n,e){if(ia===null){var i=ia=[];js=0,or=Hu(),sr={status:"pending",value:void 0,then:function(l){i.push(l)}}}return js++,e.then(kp,kp),e}function kp(){if(--js===0&&ia!==null){sr!==null&&(sr.status="fulfilled");var n=ia;ia=null,or=0,sr=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function b1(n,e){var i=[],l={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var u=0;u<i.length;u++)(0,i[u])(e)},function(u){for(l.status="rejected",l.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),l}var Ap=R.S;R.S=function(n,e){fm=ve(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&y1(n,e),Ap!==null&&Ap(n,e)};var Ti=k(null);function Bs(){var n=Ti.current;return n!==null?n:Fn.pooledCache}function Al(n,e){e===null?w(Ti,Ti.current):w(Ti,e.pool)}function Pp(){var n=Bs();return n===null?null:{parent:ee._currentValue,pool:n}}var ur=Error(o(460)),Us=Error(o(474)),Pl=Error(o(542)),Ml={then:function(){}};function Mp(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Np(n,e,i){switch(i=n[i],i===void 0?n.push(e):i!==e&&(e.then(St,St),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Op(n),n;default:if(typeof e.status=="string")e.then(St,St);else{if(n=Fn,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=l}},function(l){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Op(n),n}throw ki=e,ur}}function _i(n){try{var e=n._init;return e(n._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(ki=i,ur):i}}var ki=null;function Dp(){if(ki===null)throw Error(o(459));var n=ki;return ki=null,n}function Op(n){if(n===ur||n===Pl)throw Error(o(483))}var cr=null,ra=0;function Nl(n){var e=ra;return ra+=1,cr===null&&(cr=[]),Np(cr,n,e)}function aa(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Dl(n,e){throw e.$$typeof===S?Error(o(525)):(n=Object.prototype.toString.call(e),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Rp(n){function e(M,A){if(n){var j=M.deletions;j===null?(M.deletions=[A],M.flags|=16):j.push(A)}}function i(M,A){if(!n)return null;for(;A!==null;)e(M,A),A=A.sibling;return null}function l(M){for(var A=new Map;M!==null;)M.key!==null?A.set(M.key,M):A.set(M.index,M),M=M.sibling;return A}function u(M,A){return M=Ct(M,A),M.index=0,M.sibling=null,M}function p(M,A,j){return M.index=j,n?(j=M.alternate,j!==null?(j=j.index,j<A?(M.flags|=67108866,A):j):(M.flags|=67108866,A)):(M.flags|=1048576,A)}function y(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function v(M,A,j,G){return A===null||A.tag!==6?(A=ks(j,M.mode,G),A.return=M,A):(A=u(A,j),A.return=M,A)}function T(M,A,j,G){var pn=j.type;return pn===O?V(M,A,j.props.children,G,j.key):A!==null&&(A.elementType===pn||typeof pn=="object"&&pn!==null&&pn.$$typeof===cn&&_i(pn)===A.type)?(A=u(A,j.props),aa(A,j),A.return=M,A):(A=El(j.type,j.key,j.props,null,M.mode,G),aa(A,j),A.return=M,A)}function B(M,A,j,G){return A===null||A.tag!==4||A.stateNode.containerInfo!==j.containerInfo||A.stateNode.implementation!==j.implementation?(A=As(j,M.mode,G),A.return=M,A):(A=u(A,j.children||[]),A.return=M,A)}function V(M,A,j,G,pn){return A===null||A.tag!==7?(A=Si(j,M.mode,G,pn),A.return=M,A):(A=u(A,j),A.return=M,A)}function W(M,A,j){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=ks(""+A,M.mode,j),A.return=M,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return j=El(A.type,A.key,A.props,null,M.mode,j),aa(j,A),j.return=M,j;case _:return A=As(A,M.mode,j),A.return=M,A;case cn:return A=_i(A),W(M,A,j)}if(Q(A)||tn(A))return A=Si(A,M.mode,j,null),A.return=M,A;if(typeof A.then=="function")return W(M,Nl(A),j);if(A.$$typeof===I)return W(M,kl(M,A),j);Dl(M,A)}return null}function H(M,A,j,G){var pn=A!==null?A.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return pn!==null?null:v(M,A,""+j,G);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return j.key===pn?T(M,A,j,G):null;case _:return j.key===pn?B(M,A,j,G):null;case cn:return j=_i(j),H(M,A,j,G)}if(Q(j)||tn(j))return pn!==null?null:V(M,A,j,G,null);if(typeof j.then=="function")return H(M,A,Nl(j),G);if(j.$$typeof===I)return H(M,A,kl(M,j),G);Dl(M,j)}return null}function q(M,A,j,G,pn){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return M=M.get(j)||null,v(A,M,""+G,pn);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return M=M.get(G.key===null?j:G.key)||null,T(A,M,G,pn);case _:return M=M.get(G.key===null?j:G.key)||null,B(A,M,G,pn);case cn:return G=_i(G),q(M,A,j,G,pn)}if(Q(G)||tn(G))return M=M.get(j)||null,V(A,M,G,pn,null);if(typeof G.then=="function")return q(M,A,j,Nl(G),pn);if(G.$$typeof===I)return q(M,A,j,kl(A,G),pn);Dl(A,G)}return null}function on(M,A,j,G){for(var pn=null,Dn=null,un=A,Sn=A=0,Pn=null;un!==null&&Sn<j.length;Sn++){un.index>Sn?(Pn=un,un=null):Pn=un.sibling;var On=H(M,un,j[Sn],G);if(On===null){un===null&&(un=Pn);break}n&&un&&On.alternate===null&&e(M,un),A=p(On,A,Sn),Dn===null?pn=On:Dn.sibling=On,Dn=On,un=Pn}if(Sn===j.length)return i(M,un),Mn&&Et(M,Sn),pn;if(un===null){for(;Sn<j.length;Sn++)un=W(M,j[Sn],G),un!==null&&(A=p(un,A,Sn),Dn===null?pn=un:Dn.sibling=un,Dn=un);return Mn&&Et(M,Sn),pn}for(un=l(un);Sn<j.length;Sn++)Pn=q(un,M,Sn,j[Sn],G),Pn!==null&&(n&&Pn.alternate!==null&&un.delete(Pn.key===null?Sn:Pn.key),A=p(Pn,A,Sn),Dn===null?pn=Pn:Dn.sibling=Pn,Dn=Pn);return n&&un.forEach(function(fi){return e(M,fi)}),Mn&&Et(M,Sn),pn}function mn(M,A,j,G){if(j==null)throw Error(o(151));for(var pn=null,Dn=null,un=A,Sn=A=0,Pn=null,On=j.next();un!==null&&!On.done;Sn++,On=j.next()){un.index>Sn?(Pn=un,un=null):Pn=un.sibling;var fi=H(M,un,On.value,G);if(fi===null){un===null&&(un=Pn);break}n&&un&&fi.alternate===null&&e(M,un),A=p(fi,A,Sn),Dn===null?pn=fi:Dn.sibling=fi,Dn=fi,un=Pn}if(On.done)return i(M,un),Mn&&Et(M,Sn),pn;if(un===null){for(;!On.done;Sn++,On=j.next())On=W(M,On.value,G),On!==null&&(A=p(On,A,Sn),Dn===null?pn=On:Dn.sibling=On,Dn=On);return Mn&&Et(M,Sn),pn}for(un=l(un);!On.done;Sn++,On=j.next())On=q(un,M,Sn,On.value,G),On!==null&&(n&&On.alternate!==null&&un.delete(On.key===null?Sn:On.key),A=p(On,A,Sn),Dn===null?pn=On:Dn.sibling=On,Dn=On);return n&&un.forEach(function(Pb){return e(M,Pb)}),Mn&&Et(M,Sn),pn}function In(M,A,j,G){if(typeof j=="object"&&j!==null&&j.type===O&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case x:n:{for(var pn=j.key;A!==null;){if(A.key===pn){if(pn=j.type,pn===O){if(A.tag===7){i(M,A.sibling),G=u(A,j.props.children),G.return=M,M=G;break n}}else if(A.elementType===pn||typeof pn=="object"&&pn!==null&&pn.$$typeof===cn&&_i(pn)===A.type){i(M,A.sibling),G=u(A,j.props),aa(G,j),G.return=M,M=G;break n}i(M,A);break}else e(M,A);A=A.sibling}j.type===O?(G=Si(j.props.children,M.mode,G,j.key),G.return=M,M=G):(G=El(j.type,j.key,j.props,null,M.mode,G),aa(G,j),G.return=M,M=G)}return y(M);case _:n:{for(pn=j.key;A!==null;){if(A.key===pn)if(A.tag===4&&A.stateNode.containerInfo===j.containerInfo&&A.stateNode.implementation===j.implementation){i(M,A.sibling),G=u(A,j.children||[]),G.return=M,M=G;break n}else{i(M,A);break}else e(M,A);A=A.sibling}G=As(j,M.mode,G),G.return=M,M=G}return y(M);case cn:return j=_i(j),In(M,A,j,G)}if(Q(j))return on(M,A,j,G);if(tn(j)){if(pn=tn(j),typeof pn!="function")throw Error(o(150));return j=pn.call(j),mn(M,A,j,G)}if(typeof j.then=="function")return In(M,A,Nl(j),G);if(j.$$typeof===I)return In(M,A,kl(M,j),G);Dl(M,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,A!==null&&A.tag===6?(i(M,A.sibling),G=u(A,j),G.return=M,M=G):(i(M,A),G=ks(j,M.mode,G),G.return=M,M=G),y(M)):i(M,A)}return function(M,A,j,G){try{ra=0;var pn=In(M,A,j,G);return cr=null,pn}catch(un){if(un===ur||un===Pl)throw un;var Dn=Le(29,un,null,M.mode);return Dn.lanes=G,Dn.return=M,Dn}}}var Ai=Rp(!0),zp=Rp(!1),Qt=!1;function Hs(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Is(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Xt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Zt(n,e,i){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Rn&2)!==0){var u=l.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e,e=Cl(n),bp(n,null,i),e}return wl(n,l,e,i),Cl(n)}function la(n,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,i|=l,e.lanes=i,_f(n,i)}}function qs(n,e){var i=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var y={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};p===null?u=p=y:p=p.next=y,i=i.next}while(i!==null);p===null?u=p=e:p=p.next=e}else u=p=e;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},n.updateQueue=i;return}n=i.lastBaseUpdate,n===null?i.firstBaseUpdate=e:n.next=e,i.lastBaseUpdate=e}var Fs=!1;function oa(){if(Fs){var n=sr;if(n!==null)throw n}}function sa(n,e,i,l){Fs=!1;var u=n.updateQueue;Qt=!1;var p=u.firstBaseUpdate,y=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var T=v,B=T.next;T.next=null,y===null?p=B:y.next=B,y=T;var V=n.alternate;V!==null&&(V=V.updateQueue,v=V.lastBaseUpdate,v!==y&&(v===null?V.firstBaseUpdate=B:v.next=B,V.lastBaseUpdate=T))}if(p!==null){var W=u.baseState;y=0,V=B=T=null,v=p;do{var H=v.lane&-536870913,q=H!==v.lane;if(q?(An&H)===H:(l&H)===H){H!==0&&H===or&&(Fs=!0),V!==null&&(V=V.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});n:{var on=n,mn=v;H=e;var In=i;switch(mn.tag){case 1:if(on=mn.payload,typeof on=="function"){W=on.call(In,W,H);break n}W=on;break n;case 3:on.flags=on.flags&-65537|128;case 0:if(on=mn.payload,H=typeof on=="function"?on.call(In,W,H):on,H==null)break n;W=g({},W,H);break n;case 2:Qt=!0}}H=v.callback,H!==null&&(n.flags|=64,q&&(n.flags|=8192),q=u.callbacks,q===null?u.callbacks=[H]:q.push(H))}else q={lane:H,tag:v.tag,payload:v.payload,callback:v.callback,next:null},V===null?(B=V=q,T=W):V=V.next=q,y|=H;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;q=v,v=q.next,q.next=null,u.lastBaseUpdate=q,u.shared.pending=null}}while(!0);V===null&&(T=W),u.baseState=T,u.firstBaseUpdate=B,u.lastBaseUpdate=V,p===null&&(u.shared.lanes=0),ei|=y,n.lanes=y,n.memoizedState=W}}function Lp(n,e){if(typeof n!="function")throw Error(o(191,n));n.call(e)}function jp(n,e){var i=n.callbacks;if(i!==null)for(n.callbacks=null,n=0;n<i.length;n++)Lp(i[n],e)}var fr=k(null),Ol=k(0);function Bp(n,e){n=zt,w(Ol,n),w(fr,e),zt=n|e.baseLanes}function Vs(){w(Ol,zt),w(fr,fr.current)}function Ys(){zt=Ol.current,F(fr),F(Ol)}var je=k(null),Ke=null;function $t(n){var e=n.alternate;w(Kn,Kn.current&1),w(je,n),Ke===null&&(e===null||fr.current!==null||e.memoizedState!==null)&&(Ke=n)}function Gs(n){w(Kn,Kn.current),w(je,n),Ke===null&&(Ke=n)}function Up(n){n.tag===22?(w(Kn,Kn.current),w(je,n),Ke===null&&(Ke=n)):Jt()}function Jt(){w(Kn,Kn.current),w(je,je.current)}function Be(n){F(je),Ke===n&&(Ke=null),F(Kn)}var Kn=k(0);function Rl(n){for(var e=n;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Ju(i)||Ku(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kt=0,xn=null,Un=null,te=null,zl=!1,pr=!1,Pi=!1,Ll=0,ua=0,dr=null,x1=0;function $n(){throw Error(o(321))}function Ws(n,e){if(e===null)return!1;for(var i=0;i<e.length&&i<n.length;i++)if(!ze(n[i],e[i]))return!1;return!0}function Qs(n,e,i,l,u,p){return kt=p,xn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=n===null||n.memoizedState===null?wd:uu,Pi=!1,p=i(l,u),Pi=!1,pr&&(p=Ip(e,i,l,u)),Hp(n),p}function Hp(n){R.H=pa;var e=Un!==null&&Un.next!==null;if(kt=0,te=Un=xn=null,zl=!1,ua=0,dr=null,e)throw Error(o(300));n===null||ie||(n=n.dependencies,n!==null&&_l(n)&&(ie=!0))}function Ip(n,e,i,l){xn=n;var u=0;do{if(pr&&(dr=null),ua=0,pr=!1,25<=u)throw Error(o(301));if(u+=1,te=Un=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}R.H=Cd,p=e(i,l)}while(pr);return p}function v1(){var n=R.H,e=n.useState()[0];return e=typeof e.then=="function"?ca(e):e,n=n.useState()[0],(Un!==null?Un.memoizedState:null)!==n&&(xn.flags|=1024),e}function Xs(){var n=Ll!==0;return Ll=0,n}function Zs(n,e,i){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i}function $s(n){if(zl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}zl=!1}kt=0,te=Un=xn=null,pr=!1,ua=Ll=0,dr=null}function we(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?xn.memoizedState=te=n:te=te.next=n,te}function ne(){if(Un===null){var n=xn.alternate;n=n!==null?n.memoizedState:null}else n=Un.next;var e=te===null?xn.memoizedState:te.next;if(e!==null)te=e,Un=n;else{if(n===null)throw xn.alternate===null?Error(o(467)):Error(o(310));Un=n,n={memoizedState:Un.memoizedState,baseState:Un.baseState,baseQueue:Un.baseQueue,queue:Un.queue,next:null},te===null?xn.memoizedState=te=n:te=te.next=n}return te}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ca(n){var e=ua;return ua+=1,dr===null&&(dr=[]),n=Np(dr,n,e),e=xn,(te===null?e.memoizedState:te.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?wd:uu),n}function Bl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ca(n);if(n.$$typeof===I)return de(n)}throw Error(o(438,String(n)))}function Js(n){var e=null,i=xn.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var l=xn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=jl(),xn.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(n),l=0;l<n;l++)i[l]=N;return e.index++,i}function At(n,e){return typeof e=="function"?e(n):e}function Ul(n){var e=ne();return Ks(e,Un,n)}function Ks(n,e,i){var l=n.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=i;var u=n.baseQueue,p=l.pending;if(p!==null){if(u!==null){var y=u.next;u.next=p.next,p.next=y}e.baseQueue=u=p,l.pending=null}if(p=n.baseState,u===null)n.memoizedState=p;else{e=u.next;var v=y=null,T=null,B=e,V=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(An&W)===W:(kt&W)===W){var H=B.revertLane;if(H===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===or&&(V=!0);else if((kt&H)===H){B=B.next,H===or&&(V=!0);continue}else W={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},T===null?(v=T=W,y=p):T=T.next=W,xn.lanes|=H,ei|=H;W=B.action,Pi&&i(p,W),p=B.hasEagerState?B.eagerState:i(p,W)}else H={lane:W,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},T===null?(v=T=H,y=p):T=T.next=H,xn.lanes|=W,ei|=W;B=B.next}while(B!==null&&B!==e);if(T===null?y=p:T.next=v,!ze(p,n.memoizedState)&&(ie=!0,V&&(i=sr,i!==null)))throw i;n.memoizedState=p,n.baseState=y,n.baseQueue=T,l.lastRenderedState=p}return u===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function nu(n){var e=ne(),i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var l=i.dispatch,u=i.pending,p=e.memoizedState;if(u!==null){i.pending=null;var y=u=u.next;do p=n(p,y.action),y=y.next;while(y!==u);ze(p,e.memoizedState)||(ie=!0),e.memoizedState=p,e.baseQueue===null&&(e.baseState=p),i.lastRenderedState=p}return[p,l]}function qp(n,e,i){var l=xn,u=ne(),p=Mn;if(p){if(i===void 0)throw Error(o(407));i=i()}else i=e();var y=!ze((Un||u).memoizedState,i);if(y&&(u.memoizedState=i,ie=!0),u=u.queue,iu(Yp.bind(null,l,u,n),[n]),u.getSnapshot!==e||y||te!==null&&te.memoizedState.tag&1){if(l.flags|=2048,mr(9,{destroy:void 0},Vp.bind(null,l,u,i,e),null),Fn===null)throw Error(o(349));p||(kt&127)!==0||Fp(l,e,i)}return i}function Fp(n,e,i){n.flags|=16384,n={getSnapshot:e,value:i},e=xn.updateQueue,e===null?(e=jl(),xn.updateQueue=e,e.stores=[n]):(i=e.stores,i===null?e.stores=[n]:i.push(n))}function Vp(n,e,i,l){e.value=i,e.getSnapshot=l,Gp(e)&&Wp(n)}function Yp(n,e,i){return i(function(){Gp(e)&&Wp(n)})}function Gp(n){var e=n.getSnapshot;n=n.value;try{var i=e();return!ze(n,i)}catch{return!0}}function Wp(n){var e=vi(n,2);e!==null&&Ne(e,n,2)}function eu(n){var e=we();if(typeof n=="function"){var i=n;if(n=i(),Pi){Ee(!0);try{i()}finally{Ee(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:n},e}function Qp(n,e,i,l){return n.baseState=i,Ks(n,Un,typeof l=="function"?l:At)}function S1(n,e,i,l,u){if(ql(n))throw Error(o(485));if(n=e.action,n!==null){var p={payload:u,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){p.listeners.push(y)}};R.T!==null?i(!0):p.isTransition=!1,l(p),i=e.pending,i===null?(p.next=e.pending=p,Xp(e,p)):(p.next=i.next,e.pending=i.next=p)}}function Xp(n,e){var i=e.action,l=e.payload,u=n.state;if(e.isTransition){var p=R.T,y={};R.T=y;try{var v=i(u,l),T=R.S;T!==null&&T(y,v),Zp(n,e,v)}catch(B){tu(n,e,B)}finally{p!==null&&y.types!==null&&(p.types=y.types),R.T=p}}else try{p=i(u,l),Zp(n,e,p)}catch(B){tu(n,e,B)}}function Zp(n,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){$p(n,e,l)},function(l){return tu(n,e,l)}):$p(n,e,i)}function $p(n,e,i){e.status="fulfilled",e.value=i,Jp(e),n.state=i,e=n.pending,e!==null&&(i=e.next,i===e?n.pending=null:(i=i.next,e.next=i,Xp(n,i)))}function tu(n,e,i){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=i,Jp(e),e=e.next;while(e!==l)}n.action=null}function Jp(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Kp(n,e){return e}function nd(n,e){if(Mn){var i=Fn.formState;if(i!==null){n:{var l=xn;if(Mn){if(Gn){e:{for(var u=Gn,p=Je;u.nodeType!==8;){if(!p){u=null;break e}if(u=nt(u.nextSibling),u===null){u=null;break e}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){Gn=nt(u.nextSibling),l=u.data==="F!";break n}}Gt(l)}l=!1}l&&(e=i[0])}}return i=we(),i.memoizedState=i.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:e},i.queue=l,i=xd.bind(null,xn,l),l.dispatch=i,l=eu(!1),p=su.bind(null,xn,!1,l.queue),l=we(),u={state:e,dispatch:null,action:n,pending:null},l.queue=u,i=S1.bind(null,xn,u,p,i),u.dispatch=i,l.memoizedState=n,[e,i,!1]}function ed(n){var e=ne();return td(e,Un,n)}function td(n,e,i){if(e=Ks(n,e,Kp)[0],n=Ul(At)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=ca(e)}catch(y){throw y===ur?Pl:y}else l=e;e=ne();var u=e.queue,p=u.dispatch;return i!==e.memoizedState&&(xn.flags|=2048,mr(9,{destroy:void 0},w1.bind(null,u,i),null)),[l,p,n]}function w1(n,e){n.action=e}function id(n){var e=ne(),i=Un;if(i!==null)return td(e,i,n);ne(),e=e.memoizedState,i=ne();var l=i.queue.dispatch;return i.memoizedState=n,[e,l,!1]}function mr(n,e,i,l){return n={tag:n,create:i,deps:l,inst:e,next:null},e=xn.updateQueue,e===null&&(e=jl(),xn.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=n.next=n:(l=i.next,i.next=n,n.next=l,e.lastEffect=n),n}function rd(){return ne().memoizedState}function Hl(n,e,i,l){var u=we();xn.flags|=n,u.memoizedState=mr(1|e,{destroy:void 0},i,l===void 0?null:l)}function Il(n,e,i,l){var u=ne();l=l===void 0?null:l;var p=u.memoizedState.inst;Un!==null&&l!==null&&Ws(l,Un.memoizedState.deps)?u.memoizedState=mr(e,p,i,l):(xn.flags|=n,u.memoizedState=mr(1|e,p,i,l))}function ad(n,e){Hl(8390656,8,n,e)}function iu(n,e){Il(2048,8,n,e)}function C1(n){xn.flags|=4;var e=xn.updateQueue;if(e===null)e=jl(),xn.updateQueue=e,e.events=[n];else{var i=e.events;i===null?e.events=[n]:i.push(n)}}function ld(n){var e=ne().memoizedState;return C1({ref:e,nextImpl:n}),function(){if((Rn&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function od(n,e){return Il(4,2,n,e)}function sd(n,e){return Il(4,4,n,e)}function ud(n,e){if(typeof e=="function"){n=n();var i=e(n);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function cd(n,e,i){i=i!=null?i.concat([n]):null,Il(4,4,ud.bind(null,e,n),i)}function ru(){}function fd(n,e){var i=ne();e=e===void 0?null:e;var l=i.memoizedState;return e!==null&&Ws(e,l[1])?l[0]:(i.memoizedState=[n,e],n)}function pd(n,e){var i=ne();e=e===void 0?null:e;var l=i.memoizedState;if(e!==null&&Ws(e,l[1]))return l[0];if(l=n(),Pi){Ee(!0);try{n()}finally{Ee(!1)}}return i.memoizedState=[l,e],l}function au(n,e,i){return i===void 0||(kt&1073741824)!==0&&(An&261930)===0?n.memoizedState=e:(n.memoizedState=i,n=dm(),xn.lanes|=n,ei|=n,i)}function dd(n,e,i,l){return ze(i,e)?i:fr.current!==null?(n=au(n,i,l),ze(n,e)||(ie=!0),n):(kt&42)===0||(kt&1073741824)!==0&&(An&261930)===0?(ie=!0,n.memoizedState=i):(n=dm(),xn.lanes|=n,ei|=n,e)}function md(n,e,i,l,u){var p=Z.p;Z.p=p!==0&&8>p?p:8;var y=R.T,v={};R.T=v,su(n,!1,e,i);try{var T=u(),B=R.S;if(B!==null&&B(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var V=b1(T,l);fa(n,e,V,Ie(n))}else fa(n,e,l,Ie(n))}catch(W){fa(n,e,{then:function(){},status:"rejected",reason:W},Ie())}finally{Z.p=p,y!==null&&v.types!==null&&(y.types=v.types),R.T=y}}function E1(){}function lu(n,e,i,l){if(n.tag!==5)throw Error(o(476));var u=hd(n).queue;md(n,u,e,sn,i===null?E1:function(){return gd(n),i(l)})}function hd(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:sn,baseState:sn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:sn},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:At,lastRenderedState:i},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function gd(n){var e=hd(n);e.next===null&&(e=n.alternate.memoizedState),fa(n,e.next.queue,{},Ie())}function ou(){return de(Aa)}function yd(){return ne().memoizedState}function bd(){return ne().memoizedState}function T1(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var i=Ie();n=Xt(i);var l=Zt(e,n,i);l!==null&&(Ne(l,e,i),la(l,e,i)),e={cache:Ls()},n.payload=e;return}e=e.return}}function _1(n,e,i){var l=Ie();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ql(n)?vd(e,i):(i=Ts(n,e,i,l),i!==null&&(Ne(i,n,l),Sd(i,e,l)))}function xd(n,e,i){var l=Ie();fa(n,e,i,l)}function fa(n,e,i,l){var u={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ql(n))vd(e,u);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=e.lastRenderedReducer,p!==null))try{var y=e.lastRenderedState,v=p(y,i);if(u.hasEagerState=!0,u.eagerState=v,ze(v,y))return wl(n,e,u,0),Fn===null&&Sl(),!1}catch{}if(i=Ts(n,e,u,l),i!==null)return Ne(i,n,l),Sd(i,e,l),!0}return!1}function su(n,e,i,l){if(l={lane:2,revertLane:Hu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ql(n)){if(e)throw Error(o(479))}else e=Ts(n,i,l,2),e!==null&&Ne(e,n,2)}function ql(n){var e=n.alternate;return n===xn||e!==null&&e===xn}function vd(n,e){pr=zl=!0;var i=n.pending;i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e}function Sd(n,e,i){if((i&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,i|=l,e.lanes=i,_f(n,i)}}var pa={readContext:de,use:Bl,useCallback:$n,useContext:$n,useEffect:$n,useImperativeHandle:$n,useLayoutEffect:$n,useInsertionEffect:$n,useMemo:$n,useReducer:$n,useRef:$n,useState:$n,useDebugValue:$n,useDeferredValue:$n,useTransition:$n,useSyncExternalStore:$n,useId:$n,useHostTransitionStatus:$n,useFormState:$n,useActionState:$n,useOptimistic:$n,useMemoCache:$n,useCacheRefresh:$n};pa.useEffectEvent=$n;var wd={readContext:de,use:Bl,useCallback:function(n,e){return we().memoizedState=[n,e===void 0?null:e],n},useContext:de,useEffect:ad,useImperativeHandle:function(n,e,i){i=i!=null?i.concat([n]):null,Hl(4194308,4,ud.bind(null,e,n),i)},useLayoutEffect:function(n,e){return Hl(4194308,4,n,e)},useInsertionEffect:function(n,e){Hl(4,2,n,e)},useMemo:function(n,e){var i=we();e=e===void 0?null:e;var l=n();if(Pi){Ee(!0);try{n()}finally{Ee(!1)}}return i.memoizedState=[l,e],l},useReducer:function(n,e,i){var l=we();if(i!==void 0){var u=i(e);if(Pi){Ee(!0);try{i(e)}finally{Ee(!1)}}}else u=e;return l.memoizedState=l.baseState=u,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:u},l.queue=n,n=n.dispatch=_1.bind(null,xn,n),[l.memoizedState,n]},useRef:function(n){var e=we();return n={current:n},e.memoizedState=n},useState:function(n){n=eu(n);var e=n.queue,i=xd.bind(null,xn,e);return e.dispatch=i,[n.memoizedState,i]},useDebugValue:ru,useDeferredValue:function(n,e){var i=we();return au(i,n,e)},useTransition:function(){var n=eu(!1);return n=md.bind(null,xn,n.queue,!0,!1),we().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,i){var l=xn,u=we();if(Mn){if(i===void 0)throw Error(o(407));i=i()}else{if(i=e(),Fn===null)throw Error(o(349));(An&127)!==0||Fp(l,e,i)}u.memoizedState=i;var p={value:i,getSnapshot:e};return u.queue=p,ad(Yp.bind(null,l,p,n),[n]),l.flags|=2048,mr(9,{destroy:void 0},Vp.bind(null,l,p,i,e),null),i},useId:function(){var n=we(),e=Fn.identifierPrefix;if(Mn){var i=pt,l=ft;i=(l&~(1<<32-qn(l)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Ll++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=x1++,e="_"+e+"r_"+i.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:ou,useFormState:nd,useActionState:nd,useOptimistic:function(n){var e=we();e.memoizedState=e.baseState=n;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=su.bind(null,xn,!0,i),i.dispatch=e,[n,e]},useMemoCache:Js,useCacheRefresh:function(){return we().memoizedState=T1.bind(null,xn)},useEffectEvent:function(n){var e=we(),i={impl:n};return e.memoizedState=i,function(){if((Rn&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},uu={readContext:de,use:Bl,useCallback:fd,useContext:de,useEffect:iu,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:sd,useMemo:pd,useReducer:Ul,useRef:rd,useState:function(){return Ul(At)},useDebugValue:ru,useDeferredValue:function(n,e){var i=ne();return dd(i,Un.memoizedState,n,e)},useTransition:function(){var n=Ul(At)[0],e=ne().memoizedState;return[typeof n=="boolean"?n:ca(n),e]},useSyncExternalStore:qp,useId:yd,useHostTransitionStatus:ou,useFormState:ed,useActionState:ed,useOptimistic:function(n,e){var i=ne();return Qp(i,Un,n,e)},useMemoCache:Js,useCacheRefresh:bd};uu.useEffectEvent=ld;var Cd={readContext:de,use:Bl,useCallback:fd,useContext:de,useEffect:iu,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:sd,useMemo:pd,useReducer:nu,useRef:rd,useState:function(){return nu(At)},useDebugValue:ru,useDeferredValue:function(n,e){var i=ne();return Un===null?au(i,n,e):dd(i,Un.memoizedState,n,e)},useTransition:function(){var n=nu(At)[0],e=ne().memoizedState;return[typeof n=="boolean"?n:ca(n),e]},useSyncExternalStore:qp,useId:yd,useHostTransitionStatus:ou,useFormState:id,useActionState:id,useOptimistic:function(n,e){var i=ne();return Un!==null?Qp(i,Un,n,e):(i.baseState=n,[n,i.queue.dispatch])},useMemoCache:Js,useCacheRefresh:bd};Cd.useEffectEvent=ld;function cu(n,e,i,l){e=n.memoizedState,i=i(l,e),i=i==null?e:g({},e,i),n.memoizedState=i,n.lanes===0&&(n.updateQueue.baseState=i)}var fu={enqueueSetState:function(n,e,i){n=n._reactInternals;var l=Ie(),u=Xt(l);u.payload=e,i!=null&&(u.callback=i),e=Zt(n,u,l),e!==null&&(Ne(e,n,l),la(e,n,l))},enqueueReplaceState:function(n,e,i){n=n._reactInternals;var l=Ie(),u=Xt(l);u.tag=1,u.payload=e,i!=null&&(u.callback=i),e=Zt(n,u,l),e!==null&&(Ne(e,n,l),la(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var i=Ie(),l=Xt(i);l.tag=2,e!=null&&(l.callback=e),e=Zt(n,l,i),e!==null&&(Ne(e,n,i),la(e,n,i))}};function Ed(n,e,i,l,u,p,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,p,y):e.prototype&&e.prototype.isPureReactComponent?!Jr(i,l)||!Jr(u,p):!0}function Td(n,e,i,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,l),e.state!==n&&fu.enqueueReplaceState(e,e.state,null)}function Mi(n,e){var i=e;if("ref"in e){i={};for(var l in e)l!=="ref"&&(i[l]=e[l])}if(n=n.defaultProps){i===e&&(i=g({},i));for(var u in n)i[u]===void 0&&(i[u]=n[u])}return i}function _d(n){vl(n)}function kd(n){console.error(n)}function Ad(n){vl(n)}function Fl(n,e){try{var i=n.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Pd(n,e,i){try{var l=n.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pu(n,e,i){return i=Xt(i),i.tag=3,i.payload={element:null},i.callback=function(){Fl(n,e)},i}function Md(n){return n=Xt(n),n.tag=3,n}function Nd(n,e,i,l){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var p=l.value;n.payload=function(){return u(p)},n.callback=function(){Pd(e,i,l)}}var y=i.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(n.callback=function(){Pd(e,i,l),typeof u!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function k1(n,e,i,l,u){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=i.alternate,e!==null&&lr(e,i,u,!0),i=je.current,i!==null){switch(i.tag){case 31:case 13:return Ke===null?eo():i.alternate===null&&Jn===0&&(Jn=3),i.flags&=-257,i.flags|=65536,i.lanes=u,l===Ml?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([l]):e.add(l),ju(n,l,u)),!1;case 22:return i.flags|=65536,l===Ml?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([l]):i.add(l)),ju(n,l,u)),!1}throw Error(o(435,i.tag))}return ju(n,l,u),eo(),!1}if(Mn)return e=je.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,l!==Ns&&(n=Error(o(422),{cause:l}),ea(Xe(n,i)))):(l!==Ns&&(e=Error(o(423),{cause:l}),ea(Xe(e,i))),n=n.current.alternate,n.flags|=65536,u&=-u,n.lanes|=u,l=Xe(l,i),u=pu(n.stateNode,l,u),qs(n,u),Jn!==4&&(Jn=2)),!1;var p=Error(o(520),{cause:l});if(p=Xe(p,i),va===null?va=[p]:va.push(p),Jn!==4&&(Jn=2),e===null)return!0;l=Xe(l,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,n=u&-u,i.lanes|=n,n=pu(i.stateNode,l,n),qs(i,n),!1;case 1:if(e=i.type,p=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ti===null||!ti.has(p))))return i.flags|=65536,u&=-u,i.lanes|=u,u=Md(u),Nd(u,n,i,l),qs(i,u),!1}i=i.return}while(i!==null);return!1}var du=Error(o(461)),ie=!1;function me(n,e,i,l){e.child=n===null?zp(e,null,i,l):Ai(e,n.child,i,l)}function Dd(n,e,i,l,u){i=i.render;var p=e.ref;if("ref"in l){var y={};for(var v in l)v!=="ref"&&(y[v]=l[v])}else y=l;return Ei(e),l=Qs(n,e,i,y,p,u),v=Xs(),n!==null&&!ie?(Zs(n,e,u),Pt(n,e,u)):(Mn&&v&&Ps(e),e.flags|=1,me(n,e,l,u),e.child)}function Od(n,e,i,l,u){if(n===null){var p=i.type;return typeof p=="function"&&!_s(p)&&p.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=p,Rd(n,e,p,l,u)):(n=El(i.type,null,l,e,e.mode,u),n.ref=e.ref,n.return=e,e.child=n)}if(p=n.child,!Su(n,u)){var y=p.memoizedProps;if(i=i.compare,i=i!==null?i:Jr,i(y,l)&&n.ref===e.ref)return Pt(n,e,u)}return e.flags|=1,n=Ct(p,l),n.ref=e.ref,n.return=e,e.child=n}function Rd(n,e,i,l,u){if(n!==null){var p=n.memoizedProps;if(Jr(p,l)&&n.ref===e.ref)if(ie=!1,e.pendingProps=l=p,Su(n,u))(n.flags&131072)!==0&&(ie=!0);else return e.lanes=n.lanes,Pt(n,e,u)}return mu(n,e,i,l,u)}function zd(n,e,i,l){var u=l.children,p=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(p=p!==null?p.baseLanes|i:i,n!==null){for(l=e.child=n.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~p}else l=0,e.child=null;return Ld(n,e,p,i,l)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Al(e,p!==null?p.cachePool:null),p!==null?Bp(e,p):Vs(),Up(e);else return l=e.lanes=536870912,Ld(n,e,p!==null?p.baseLanes|i:i,i,l)}else p!==null?(Al(e,p.cachePool),Bp(e,p),Jt(),e.memoizedState=null):(n!==null&&Al(e,null),Vs(),Jt());return me(n,e,u,i),e.child}function da(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ld(n,e,i,l,u){var p=Bs();return p=p===null?null:{parent:ee._currentValue,pool:p},e.memoizedState={baseLanes:i,cachePool:p},n!==null&&Al(e,null),Vs(),Up(e),n!==null&&lr(n,e,l,!0),e.childLanes=u,null}function Vl(n,e){return e=Gl({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function jd(n,e,i){return Ai(e,n.child,null,i),n=Vl(e,e.pendingProps),n.flags|=2,Be(e),e.memoizedState=null,n}function A1(n,e,i){var l=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Mn){if(l.mode==="hidden")return n=Vl(e,l),e.lanes=536870912,da(null,n);if(Gs(e),(n=Gn)?(n=Xm(n,Je),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Vt!==null?{id:ft,overflow:pt}:null,retryLane:536870912,hydrationErrors:null},i=vp(n),i.return=e,e.child=i,pe=e,Gn=null)):n=null,n===null)throw Gt(e);return e.lanes=536870912,null}return Vl(e,l)}var p=n.memoizedState;if(p!==null){var y=p.dehydrated;if(Gs(e),u)if(e.flags&256)e.flags&=-257,e=jd(n,e,i);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(o(558));else if(ie||lr(n,e,i,!1),u=(i&n.childLanes)!==0,ie||u){if(l=Fn,l!==null&&(y=kf(l,i),y!==0&&y!==p.retryLane))throw p.retryLane=y,vi(n,y),Ne(l,n,y),du;eo(),e=jd(n,e,i)}else n=p.treeContext,Gn=nt(y.nextSibling),pe=e,Mn=!0,Yt=null,Je=!1,n!==null&&Cp(e,n),e=Vl(e,l),e.flags|=4096;return e}return n=Ct(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Yl(n,e){var i=e.ref;if(i===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(n===null||n.ref!==i)&&(e.flags|=4194816)}}function mu(n,e,i,l,u){return Ei(e),i=Qs(n,e,i,l,void 0,u),l=Xs(),n!==null&&!ie?(Zs(n,e,u),Pt(n,e,u)):(Mn&&l&&Ps(e),e.flags|=1,me(n,e,i,u),e.child)}function Bd(n,e,i,l,u,p){return Ei(e),e.updateQueue=null,i=Ip(e,l,i,u),Hp(n),l=Xs(),n!==null&&!ie?(Zs(n,e,p),Pt(n,e,p)):(Mn&&l&&Ps(e),e.flags|=1,me(n,e,i,p),e.child)}function Ud(n,e,i,l,u){if(Ei(e),e.stateNode===null){var p=tr,y=i.contextType;typeof y=="object"&&y!==null&&(p=de(y)),p=new i(l,p),e.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=fu,e.stateNode=p,p._reactInternals=e,p=e.stateNode,p.props=l,p.state=e.memoizedState,p.refs={},Hs(e),y=i.contextType,p.context=typeof y=="object"&&y!==null?de(y):tr,p.state=e.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(cu(e,i,y,l),p.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(y=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),y!==p.state&&fu.enqueueReplaceState(p,p.state,null),sa(e,l,p,u),oa(),p.state=e.memoizedState),typeof p.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){p=e.stateNode;var v=e.memoizedProps,T=Mi(i,v);p.props=T;var B=p.context,V=i.contextType;y=tr,typeof V=="object"&&V!==null&&(y=de(V));var W=i.getDerivedStateFromProps;V=typeof W=="function"||typeof p.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,V||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v||B!==y)&&Td(e,p,l,y),Qt=!1;var H=e.memoizedState;p.state=H,sa(e,l,p,u),oa(),B=e.memoizedState,v||H!==B||Qt?(typeof W=="function"&&(cu(e,i,W,l),B=e.memoizedState),(T=Qt||Ed(e,i,T,l,H,B,y))?(V||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(e.flags|=4194308)):(typeof p.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=B),p.props=l,p.state=B,p.context=y,l=T):(typeof p.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{p=e.stateNode,Is(n,e),y=e.memoizedProps,V=Mi(i,y),p.props=V,W=e.pendingProps,H=p.context,B=i.contextType,T=tr,typeof B=="object"&&B!==null&&(T=de(B)),v=i.getDerivedStateFromProps,(B=typeof v=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==W||H!==T)&&Td(e,p,l,T),Qt=!1,H=e.memoizedState,p.state=H,sa(e,l,p,u),oa();var q=e.memoizedState;y!==W||H!==q||Qt||n!==null&&n.dependencies!==null&&_l(n.dependencies)?(typeof v=="function"&&(cu(e,i,v,l),q=e.memoizedState),(V=Qt||Ed(e,i,V,l,H,q,T)||n!==null&&n.dependencies!==null&&_l(n.dependencies))?(B||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,q,T),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,q,T)),typeof p.componentDidUpdate=="function"&&(e.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===n.memoizedProps&&H===n.memoizedState||(e.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&H===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=q),p.props=l,p.state=q,p.context=T,l=V):(typeof p.componentDidUpdate!="function"||y===n.memoizedProps&&H===n.memoizedState||(e.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&H===n.memoizedState||(e.flags|=1024),l=!1)}return p=l,Yl(n,e),l=(e.flags&128)!==0,p||l?(p=e.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:p.render(),e.flags|=1,n!==null&&l?(e.child=Ai(e,n.child,null,u),e.child=Ai(e,null,i,u)):me(n,e,i,u),e.memoizedState=p.state,n=e.child):n=Pt(n,e,u),n}function Hd(n,e,i,l){return wi(),e.flags|=256,me(n,e,i,l),e.child}var hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gu(n){return{baseLanes:n,cachePool:Pp()}}function yu(n,e,i){return n=n!==null?n.childLanes&~i:0,e&&(n|=He),n}function Id(n,e,i){var l=e.pendingProps,u=!1,p=(e.flags&128)!==0,y;if((y=p)||(y=n!==null&&n.memoizedState===null?!1:(Kn.current&2)!==0),y&&(u=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,n===null){if(Mn){if(u?$t(e):Jt(),(n=Gn)?(n=Xm(n,Je),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Vt!==null?{id:ft,overflow:pt}:null,retryLane:536870912,hydrationErrors:null},i=vp(n),i.return=e,e.child=i,pe=e,Gn=null)):n=null,n===null)throw Gt(e);return Ku(n)?e.lanes=32:e.lanes=536870912,null}var v=l.children;return l=l.fallback,u?(Jt(),u=e.mode,v=Gl({mode:"hidden",children:v},u),l=Si(l,u,i,null),v.return=e,l.return=e,v.sibling=l,e.child=v,l=e.child,l.memoizedState=gu(i),l.childLanes=yu(n,y,i),e.memoizedState=hu,da(null,l)):($t(e),bu(e,v))}var T=n.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(p)e.flags&256?($t(e),e.flags&=-257,e=xu(n,e,i)):e.memoizedState!==null?(Jt(),e.child=n.child,e.flags|=128,e=null):(Jt(),v=l.fallback,u=e.mode,l=Gl({mode:"visible",children:l.children},u),v=Si(v,u,i,null),v.flags|=2,l.return=e,v.return=e,l.sibling=v,e.child=l,Ai(e,n.child,null,i),l=e.child,l.memoizedState=gu(i),l.childLanes=yu(n,y,i),e.memoizedState=hu,e=da(null,l));else if($t(e),Ku(v)){if(y=v.nextSibling&&v.nextSibling.dataset,y)var B=y.dgst;y=B,l=Error(o(419)),l.stack="",l.digest=y,ea({value:l,source:null,stack:null}),e=xu(n,e,i)}else if(ie||lr(n,e,i,!1),y=(i&n.childLanes)!==0,ie||y){if(y=Fn,y!==null&&(l=kf(y,i),l!==0&&l!==T.retryLane))throw T.retryLane=l,vi(n,l),Ne(y,n,l),du;Ju(v)||eo(),e=xu(n,e,i)}else Ju(v)?(e.flags|=192,e.child=n.child,e=null):(n=T.treeContext,Gn=nt(v.nextSibling),pe=e,Mn=!0,Yt=null,Je=!1,n!==null&&Cp(e,n),e=bu(e,l.children),e.flags|=4096);return e}return u?(Jt(),v=l.fallback,u=e.mode,T=n.child,B=T.sibling,l=Ct(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,B!==null?v=Ct(B,v):(v=Si(v,u,i,null),v.flags|=2),v.return=e,l.return=e,l.sibling=v,e.child=l,da(null,l),l=e.child,v=n.child.memoizedState,v===null?v=gu(i):(u=v.cachePool,u!==null?(T=ee._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=Pp(),v={baseLanes:v.baseLanes|i,cachePool:u}),l.memoizedState=v,l.childLanes=yu(n,y,i),e.memoizedState=hu,da(n.child,l)):($t(e),i=n.child,n=i.sibling,i=Ct(i,{mode:"visible",children:l.children}),i.return=e,i.sibling=null,n!==null&&(y=e.deletions,y===null?(e.deletions=[n],e.flags|=16):y.push(n)),e.child=i,e.memoizedState=null,i)}function bu(n,e){return e=Gl({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Gl(n,e){return n=Le(22,n,null,e),n.lanes=0,n}function xu(n,e,i){return Ai(e,n.child,null,i),n=bu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function qd(n,e,i){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),Rs(n.return,e,i)}function vu(n,e,i,l,u,p){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u,treeForkCount:p}:(y.isBackwards=e,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=i,y.tailMode=u,y.treeForkCount=p)}function Fd(n,e,i){var l=e.pendingProps,u=l.revealOrder,p=l.tail;l=l.children;var y=Kn.current,v=(y&2)!==0;if(v?(y=y&1|2,e.flags|=128):y&=1,w(Kn,y),me(n,e,l,i),l=Mn?na:0,!v&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qd(n,i,e);else if(n.tag===19)qd(n,i,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(u){case"forwards":for(i=e.child,u=null;i!==null;)n=i.alternate,n!==null&&Rl(n)===null&&(u=i),i=i.sibling;i=u,i===null?(u=e.child,e.child=null):(u=i.sibling,i.sibling=null),vu(e,!1,u,i,p,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,u=e.child,e.child=null;u!==null;){if(n=u.alternate,n!==null&&Rl(n)===null){e.child=u;break}n=u.sibling,u.sibling=i,i=u,u=n}vu(e,!0,i,null,p,l);break;case"together":vu(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Pt(n,e,i){if(n!==null&&(e.dependencies=n.dependencies),ei|=e.lanes,(i&e.childLanes)===0)if(n!==null){if(lr(n,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(o(153));if(e.child!==null){for(n=e.child,i=Ct(n,n.pendingProps),e.child=i,i.return=e;n.sibling!==null;)n=n.sibling,i=i.sibling=Ct(n,n.pendingProps),i.return=e;i.sibling=null}return e.child}function Su(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&_l(n)))}function P1(n,e,i){switch(e.tag){case 3:Qn(e,e.stateNode.containerInfo),Wt(e,ee,n.memoizedState.cache),wi();break;case 27:case 5:Ye(e);break;case 4:Qn(e,e.stateNode.containerInfo);break;case 10:Wt(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Gs(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?($t(e),e.flags|=128,null):(i&e.child.childLanes)!==0?Id(n,e,i):($t(e),n=Pt(n,e,i),n!==null?n.sibling:null);$t(e);break;case 19:var u=(n.flags&128)!==0;if(l=(i&e.childLanes)!==0,l||(lr(n,e,i,!1),l=(i&e.childLanes)!==0),u){if(l)return Fd(n,e,i);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),w(Kn,Kn.current),l)break;return null;case 22:return e.lanes=0,zd(n,e,i,e.pendingProps);case 24:Wt(e,ee,n.memoizedState.cache)}return Pt(n,e,i)}function Vd(n,e,i){if(n!==null)if(n.memoizedProps!==e.pendingProps)ie=!0;else{if(!Su(n,i)&&(e.flags&128)===0)return ie=!1,P1(n,e,i);ie=(n.flags&131072)!==0}else ie=!1,Mn&&(e.flags&1048576)!==0&&wp(e,na,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=_i(e.elementType),e.type=n,typeof n=="function")_s(n)?(l=Mi(n,l),e.tag=1,e=Ud(null,e,n,l,i)):(e.tag=0,e=mu(null,e,n,l,i));else{if(n!=null){var u=n.$$typeof;if(u===rn){e.tag=11,e=Dd(null,e,n,l,i);break n}else if(u===X){e.tag=14,e=Od(null,e,n,l,i);break n}}throw e=an(n)||n,Error(o(306,e,""))}}return e;case 0:return mu(n,e,e.type,e.pendingProps,i);case 1:return l=e.type,u=Mi(l,e.pendingProps),Ud(n,e,l,u,i);case 3:n:{if(Qn(e,e.stateNode.containerInfo),n===null)throw Error(o(387));l=e.pendingProps;var p=e.memoizedState;u=p.element,Is(n,e),sa(e,l,null,i);var y=e.memoizedState;if(l=y.cache,Wt(e,ee,l),l!==p.cache&&zs(e,[ee],i,!0),oa(),l=y.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=p,e.memoizedState=p,e.flags&256){e=Hd(n,e,l,i);break n}else if(l!==u){u=Xe(Error(o(424)),e),ea(u),e=Hd(n,e,l,i);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Gn=nt(n.firstChild),pe=e,Mn=!0,Yt=null,Je=!0,i=zp(e,null,l,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(wi(),l===u){e=Pt(n,e,i);break n}me(n,e,l,i)}e=e.child}return e;case 26:return Yl(n,e),n===null?(i=eh(e.type,null,e.pendingProps,null))?e.memoizedState=i:Mn||(i=e.type,n=e.pendingProps,l=so(fn.current).createElement(i),l[fe]=e,l[Te]=n,he(l,i,n),se(l),e.stateNode=l):e.memoizedState=eh(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ye(e),n===null&&Mn&&(l=e.stateNode=Jm(e.type,e.pendingProps,fn.current),pe=e,Je=!0,u=Gn,li(e.type)?(nc=u,Gn=nt(l.firstChild)):Gn=u),me(n,e,e.pendingProps.children,i),Yl(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Mn&&((u=l=Gn)&&(l=ab(l,e.type,e.pendingProps,Je),l!==null?(e.stateNode=l,pe=e,Gn=nt(l.firstChild),Je=!1,u=!0):u=!1),u||Gt(e)),Ye(e),u=e.type,p=e.pendingProps,y=n!==null?n.memoizedProps:null,l=p.children,Xu(u,p)?l=null:y!==null&&Xu(u,y)&&(e.flags|=32),e.memoizedState!==null&&(u=Qs(n,e,v1,null,null,i),Aa._currentValue=u),Yl(n,e),me(n,e,l,i),e.child;case 6:return n===null&&Mn&&((n=i=Gn)&&(i=lb(i,e.pendingProps,Je),i!==null?(e.stateNode=i,pe=e,Gn=null,n=!0):n=!1),n||Gt(e)),null;case 13:return Id(n,e,i);case 4:return Qn(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=Ai(e,null,l,i):me(n,e,l,i),e.child;case 11:return Dd(n,e,e.type,e.pendingProps,i);case 7:return me(n,e,e.pendingProps,i),e.child;case 8:return me(n,e,e.pendingProps.children,i),e.child;case 12:return me(n,e,e.pendingProps.children,i),e.child;case 10:return l=e.pendingProps,Wt(e,e.type,l.value),me(n,e,l.children,i),e.child;case 9:return u=e.type._context,l=e.pendingProps.children,Ei(e),u=de(u),l=l(u),e.flags|=1,me(n,e,l,i),e.child;case 14:return Od(n,e,e.type,e.pendingProps,i);case 15:return Rd(n,e,e.type,e.pendingProps,i);case 19:return Fd(n,e,i);case 31:return A1(n,e,i);case 22:return zd(n,e,i,e.pendingProps);case 24:return Ei(e),l=de(ee),n===null?(u=Bs(),u===null&&(u=Fn,p=Ls(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=i),u=p),e.memoizedState={parent:l,cache:u},Hs(e),Wt(e,ee,u)):((n.lanes&i)!==0&&(Is(n,e),sa(e,null,null,i),oa()),u=n.memoizedState,p=e.memoizedState,u.parent!==l?(u={parent:l,cache:l},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Wt(e,ee,l)):(l=p.cache,Wt(e,ee,l),l!==u.cache&&zs(e,[ee],i,!0))),me(n,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Mt(n){n.flags|=4}function wu(n,e,i,l,u){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(u&335544128)===u)if(n.stateNode.complete)n.flags|=8192;else if(ym())n.flags|=8192;else throw ki=Ml,Us}else n.flags&=-16777217}function Yd(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!lh(e))if(ym())n.flags|=8192;else throw ki=Ml,Us}function Wl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Ef():536870912,n.lanes|=e,br|=e)}function ma(n,e){if(!Mn)switch(n.tailMode){case"hidden":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?n.tail=null:i.sibling=null;break;case"collapsed":i=n.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Wn(n){var e=n.alternate!==null&&n.alternate.child===n.child,i=0,l=0;if(e)for(var u=n.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=l,n.childLanes=i,e}function M1(n,e,i){var l=e.pendingProps;switch(Ms(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wn(e),null;case 1:return Wn(e),null;case 3:return i=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),_t(ee),Bn(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ar(e)?Mt(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ds())),Wn(e),null;case 26:var u=e.type,p=e.memoizedState;return n===null?(Mt(e),p!==null?(Wn(e),Yd(e,p)):(Wn(e),wu(e,u,null,l,i))):p?p!==n.memoizedState?(Mt(e),Wn(e),Yd(e,p)):(Wn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&Mt(e),Wn(e),wu(e,u,n,l,i)),null;case 27:if(yt(e),i=fn.current,u=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Mt(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Wn(e),null}n=nn.current,ar(e)?Ep(e):(n=Jm(u,l,i),e.stateNode=n,Mt(e))}return Wn(e),null;case 5:if(yt(e),u=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&Mt(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Wn(e),null}if(p=nn.current,ar(e))Ep(e);else{var y=so(fn.current);switch(p){case 1:p=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:p=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":p=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":p=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":p=y.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?y.createElement(u,{is:l.is}):y.createElement(u)}}p[fe]=e,p[Te]=l;n:for(y=e.child;y!==null;){if(y.tag===5||y.tag===6)p.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break n;for(;y.sibling===null;){if(y.return===null||y.return===e)break n;y=y.return}y.sibling.return=y.return,y=y.sibling}e.stateNode=p;n:switch(he(p,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&Mt(e)}}return Wn(e),wu(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,i),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&Mt(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(o(166));if(n=fn.current,ar(e)){if(n=e.stateNode,i=e.memoizedProps,l=null,u=pe,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}n[fe]=e,n=!!(n.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||Im(n.nodeValue,i)),n||Gt(e,!0)}else n=so(n).createTextNode(l),n[fe]=e,e.stateNode=n}return Wn(e),null;case 31:if(i=e.memoizedState,n===null||n.memoizedState!==null){if(l=ar(e),i!==null){if(n===null){if(!l)throw Error(o(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));n[fe]=e}else wi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Wn(e),n=!1}else i=Ds(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),n=!0;if(!n)return e.flags&256?(Be(e),e):(Be(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Wn(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(u=ar(e),l!==null&&l.dehydrated!==null){if(n===null){if(!u)throw Error(o(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[fe]=e}else wi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Wn(e),u=!1}else u=Ds(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(Be(e),e):(Be(e),null)}return Be(e),(e.flags&128)!==0?(e.lanes=i,e):(i=l!==null,n=n!==null&&n.memoizedState!==null,i&&(l=e.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==u&&(l.flags|=2048)),i!==n&&i&&(e.child.flags|=8192),Wl(e,e.updateQueue),Wn(e),null);case 4:return Bn(),n===null&&Vu(e.stateNode.containerInfo),Wn(e),null;case 10:return _t(e.type),Wn(e),null;case 19:if(F(Kn),l=e.memoizedState,l===null)return Wn(e),null;if(u=(e.flags&128)!==0,p=l.rendering,p===null)if(u)ma(l,!1);else{if(Jn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(p=Rl(n),p!==null){for(e.flags|=128,ma(l,!1),n=p.updateQueue,e.updateQueue=n,Wl(e,n),e.subtreeFlags=0,n=i,i=e.child;i!==null;)xp(i,n),i=i.sibling;return w(Kn,Kn.current&1|2),Mn&&Et(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&ve()>Jl&&(e.flags|=128,u=!0,ma(l,!1),e.lanes=4194304)}else{if(!u)if(n=Rl(p),n!==null){if(e.flags|=128,u=!0,n=n.updateQueue,e.updateQueue=n,Wl(e,n),ma(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Mn)return Wn(e),null}else 2*ve()-l.renderingStartTime>Jl&&i!==536870912&&(e.flags|=128,u=!0,ma(l,!1),e.lanes=4194304);l.isBackwards?(p.sibling=e.child,e.child=p):(n=l.last,n!==null?n.sibling=p:e.child=p,l.last=p)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ve(),n.sibling=null,i=Kn.current,w(Kn,u?i&1|2:i&1),Mn&&Et(e,l.treeForkCount),n):(Wn(e),null);case 22:case 23:return Be(e),Ys(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(i&536870912)!==0&&(e.flags&128)===0&&(Wn(e),e.subtreeFlags&6&&(e.flags|=8192)):Wn(e),i=e.updateQueue,i!==null&&Wl(e,i.retryQueue),i=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==i&&(e.flags|=2048),n!==null&&F(Ti),null;case 24:return i=null,n!==null&&(i=n.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),_t(ee),Wn(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function N1(n,e){switch(Ms(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return _t(ee),Bn(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return yt(e),null;case 31:if(e.memoizedState!==null){if(Be(e),e.alternate===null)throw Error(o(340));wi()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(Be(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(o(340));wi()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return F(Kn),null;case 4:return Bn(),null;case 10:return _t(e.type),null;case 22:case 23:return Be(e),Ys(),n!==null&&F(Ti),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return _t(ee),null;case 25:return null;default:return null}}function Gd(n,e){switch(Ms(e),e.tag){case 3:_t(ee),Bn();break;case 26:case 27:case 5:yt(e);break;case 4:Bn();break;case 31:e.memoizedState!==null&&Be(e);break;case 13:Be(e);break;case 19:F(Kn);break;case 10:_t(e.type);break;case 22:case 23:Be(e),Ys(),n!==null&&F(Ti);break;case 24:_t(ee)}}function ha(n,e){try{var i=e.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&n)===n){l=void 0;var p=i.create,y=i.inst;l=p(),y.destroy=l}i=i.next}while(i!==u)}}catch(v){jn(e,e.return,v)}}function Kt(n,e,i){try{var l=e.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var p=u.next;l=p;do{if((l.tag&n)===n){var y=l.inst,v=y.destroy;if(v!==void 0){y.destroy=void 0,u=e;var T=i,B=v;try{B()}catch(V){jn(u,T,V)}}}l=l.next}while(l!==p)}}catch(V){jn(e,e.return,V)}}function Wd(n){var e=n.updateQueue;if(e!==null){var i=n.stateNode;try{jp(e,i)}catch(l){jn(n,n.return,l)}}}function Qd(n,e,i){i.props=Mi(n.type,n.memoizedProps),i.state=n.memoizedState;try{i.componentWillUnmount()}catch(l){jn(n,e,l)}}function ga(n,e){try{var i=n.ref;if(i!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof i=="function"?n.refCleanup=i(l):i.current=l}}catch(u){jn(n,e,u)}}function dt(n,e){var i=n.ref,l=n.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(u){jn(n,e,u)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){jn(n,e,u)}else i.current=null}function Xd(n){var e=n.type,i=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break n;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(u){jn(n,n.return,u)}}function Cu(n,e,i){try{var l=n.stateNode;K1(l,n.type,i,e),l[Te]=e}catch(u){jn(n,n.return,u)}}function Zd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&li(n.type)||n.tag===4}function Eu(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Zd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&li(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tu(n,e,i){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(n,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(n),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=St));else if(l!==4&&(l===27&&li(n.type)&&(i=n.stateNode,e=null),n=n.child,n!==null))for(Tu(n,e,i),n=n.sibling;n!==null;)Tu(n,e,i),n=n.sibling}function Ql(n,e,i){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?i.insertBefore(n,e):i.appendChild(n);else if(l!==4&&(l===27&&li(n.type)&&(i=n.stateNode),n=n.child,n!==null))for(Ql(n,e,i),n=n.sibling;n!==null;)Ql(n,e,i),n=n.sibling}function $d(n){var e=n.stateNode,i=n.memoizedProps;try{for(var l=n.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);he(e,l,i),e[fe]=n,e[Te]=i}catch(p){jn(n,n.return,p)}}var Nt=!1,re=!1,_u=!1,Jd=typeof WeakSet=="function"?WeakSet:Set,ue=null;function D1(n,e){if(n=n.containerInfo,Wu=go,n=cp(n),xs(n)){if("selectionStart"in n)var i={start:n.selectionStart,end:n.selectionEnd};else n:{i=(i=n.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break n}var y=0,v=-1,T=-1,B=0,V=0,W=n,H=null;e:for(;;){for(var q;W!==i||u!==0&&W.nodeType!==3||(v=y+u),W!==p||l!==0&&W.nodeType!==3||(T=y+l),W.nodeType===3&&(y+=W.nodeValue.length),(q=W.firstChild)!==null;)H=W,W=q;for(;;){if(W===n)break e;if(H===i&&++B===u&&(v=y),H===p&&++V===l&&(T=y),(q=W.nextSibling)!==null)break;W=H,H=W.parentNode}W=q}i=v===-1||T===-1?null:{start:v,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(Qu={focusedElem:n,selectionRange:i},go=!1,ue=e;ue!==null;)if(e=ue,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ue=n;else for(;ue!==null;){switch(e=ue,p=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(i=0;i<n.length;i++)u=n[i],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,i=e,u=p.memoizedProps,p=p.memoizedState,l=i.stateNode;try{var on=Mi(i.type,u);n=l.getSnapshotBeforeUpdate(on,p),l.__reactInternalSnapshotBeforeUpdate=n}catch(mn){jn(i,i.return,mn)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,i=n.nodeType,i===9)$u(n);else if(i===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":$u(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(o(163))}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}}function Kd(n,e,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:Ot(n,i),l&4&&ha(5,i);break;case 1:if(Ot(n,i),l&4)if(n=i.stateNode,e===null)try{n.componentDidMount()}catch(y){jn(i,i.return,y)}else{var u=Mi(i.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(u,e,n.__reactInternalSnapshotBeforeUpdate)}catch(y){jn(i,i.return,y)}}l&64&&Wd(i),l&512&&ga(i,i.return);break;case 3:if(Ot(n,i),l&64&&(n=i.updateQueue,n!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{jp(n,e)}catch(y){jn(i,i.return,y)}}break;case 27:e===null&&l&4&&$d(i);case 26:case 5:Ot(n,i),e===null&&l&4&&Xd(i),l&512&&ga(i,i.return);break;case 12:Ot(n,i);break;case 31:Ot(n,i),l&4&&tm(n,i);break;case 13:Ot(n,i),l&4&&im(n,i),l&64&&(n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(i=I1.bind(null,i),ob(n,i))));break;case 22:if(l=i.memoizedState!==null||Nt,!l){e=e!==null&&e.memoizedState!==null||re,u=Nt;var p=re;Nt=l,(re=e)&&!p?Rt(n,i,(i.subtreeFlags&8772)!==0):Ot(n,i),Nt=u,re=p}break;case 30:break;default:Ot(n,i)}}function nm(n){var e=n.alternate;e!==null&&(n.alternate=null,nm(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&ts(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Xn=null,ke=!1;function Dt(n,e,i){for(i=i.child;i!==null;)em(n,e,i),i=i.sibling}function em(n,e,i){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(Se,i)}catch{}switch(i.tag){case 26:re||dt(i,e),Dt(n,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:re||dt(i,e);var l=Xn,u=ke;li(i.type)&&(Xn=i.stateNode,ke=!1),Dt(n,e,i),Ta(i.stateNode),Xn=l,ke=u;break;case 5:re||dt(i,e);case 6:if(l=Xn,u=ke,Xn=null,Dt(n,e,i),Xn=l,ke=u,Xn!==null)if(ke)try{(Xn.nodeType===9?Xn.body:Xn.nodeName==="HTML"?Xn.ownerDocument.body:Xn).removeChild(i.stateNode)}catch(p){jn(i,e,p)}else try{Xn.removeChild(i.stateNode)}catch(p){jn(i,e,p)}break;case 18:Xn!==null&&(ke?(n=Xn,Wm(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,i.stateNode),_r(n)):Wm(Xn,i.stateNode));break;case 4:l=Xn,u=ke,Xn=i.stateNode.containerInfo,ke=!0,Dt(n,e,i),Xn=l,ke=u;break;case 0:case 11:case 14:case 15:Kt(2,i,e),re||Kt(4,i,e),Dt(n,e,i);break;case 1:re||(dt(i,e),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Qd(i,e,l)),Dt(n,e,i);break;case 21:Dt(n,e,i);break;case 22:re=(l=re)||i.memoizedState!==null,Dt(n,e,i),re=l;break;default:Dt(n,e,i)}}function tm(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{_r(n)}catch(i){jn(e,e.return,i)}}}function im(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{_r(n)}catch(i){jn(e,e.return,i)}}function O1(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Jd),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Jd),e;default:throw Error(o(435,n.tag))}}function Xl(n,e){var i=O1(n);e.forEach(function(l){if(!i.has(l)){i.add(l);var u=q1.bind(null,n,l);l.then(u,u)}})}function Ae(n,e){var i=e.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l],p=n,y=e,v=y;n:for(;v!==null;){switch(v.tag){case 27:if(li(v.type)){Xn=v.stateNode,ke=!1;break n}break;case 5:Xn=v.stateNode,ke=!1;break n;case 3:case 4:Xn=v.stateNode.containerInfo,ke=!0;break n}v=v.return}if(Xn===null)throw Error(o(160));em(p,y,u),Xn=null,ke=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)rm(e,n),e=e.sibling}var lt=null;function rm(n,e){var i=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ae(e,n),Pe(n),l&4&&(Kt(3,n,n.return),ha(3,n),Kt(5,n,n.return));break;case 1:Ae(e,n),Pe(n),l&512&&(re||i===null||dt(i,i.return)),l&64&&Nt&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(i=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var u=lt;if(Ae(e,n),Pe(n),l&512&&(re||i===null||dt(i,i.return)),l&4){var p=i!==null?i.memoizedState:null;if(l=n.memoizedState,i===null)if(l===null)if(n.stateNode===null){n:{l=n.type,i=n.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":p=u.getElementsByTagName("title")[0],(!p||p[Fr]||p[fe]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(l),u.head.insertBefore(p,u.querySelector("head > title"))),he(p,l,i),p[fe]=n,se(p),l=p;break n;case"link":var y=rh("link","href",u).get(l+(i.href||""));if(y){for(var v=0;v<y.length;v++)if(p=y[v],p.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&p.getAttribute("rel")===(i.rel==null?null:i.rel)&&p.getAttribute("title")===(i.title==null?null:i.title)&&p.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){y.splice(v,1);break e}}p=u.createElement(l),he(p,l,i),u.head.appendChild(p);break;case"meta":if(y=rh("meta","content",u).get(l+(i.content||""))){for(v=0;v<y.length;v++)if(p=y[v],p.getAttribute("content")===(i.content==null?null:""+i.content)&&p.getAttribute("name")===(i.name==null?null:i.name)&&p.getAttribute("property")===(i.property==null?null:i.property)&&p.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&p.getAttribute("charset")===(i.charSet==null?null:i.charSet)){y.splice(v,1);break e}}p=u.createElement(l),he(p,l,i),u.head.appendChild(p);break;default:throw Error(o(468,l))}p[fe]=n,se(p),l=p}n.stateNode=l}else ah(u,n.type,n.stateNode);else n.stateNode=ih(u,l,n.memoizedProps);else p!==l?(p===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):p.count--,l===null?ah(u,n.type,n.stateNode):ih(u,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Cu(n,n.memoizedProps,i.memoizedProps)}break;case 27:Ae(e,n),Pe(n),l&512&&(re||i===null||dt(i,i.return)),i!==null&&l&4&&Cu(n,n.memoizedProps,i.memoizedProps);break;case 5:if(Ae(e,n),Pe(n),l&512&&(re||i===null||dt(i,i.return)),n.flags&32){u=n.stateNode;try{Xi(u,"")}catch(on){jn(n,n.return,on)}}l&4&&n.stateNode!=null&&(u=n.memoizedProps,Cu(n,u,i!==null?i.memoizedProps:u)),l&1024&&(_u=!0);break;case 6:if(Ae(e,n),Pe(n),l&4){if(n.stateNode===null)throw Error(o(162));l=n.memoizedProps,i=n.stateNode;try{i.nodeValue=l}catch(on){jn(n,n.return,on)}}break;case 3:if(fo=null,u=lt,lt=uo(e.containerInfo),Ae(e,n),lt=u,Pe(n),l&4&&i!==null&&i.memoizedState.isDehydrated)try{_r(e.containerInfo)}catch(on){jn(n,n.return,on)}_u&&(_u=!1,am(n));break;case 4:l=lt,lt=uo(n.stateNode.containerInfo),Ae(e,n),Pe(n),lt=l;break;case 12:Ae(e,n),Pe(n);break;case 31:Ae(e,n),Pe(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Xl(n,l)));break;case 13:Ae(e,n),Pe(n),n.child.flags&8192&&n.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&($l=ve()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Xl(n,l)));break;case 22:u=n.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,B=Nt,V=re;if(Nt=B||u,re=V||T,Ae(e,n),re=V,Nt=B,Pe(n),l&8192)n:for(e=n.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(i===null||T||Nt||re||Ni(n)),i=null,e=n;;){if(e.tag===5||e.tag===26){if(i===null){T=i=e;try{if(p=T.stateNode,u)y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{v=T.stateNode;var W=T.memoizedProps.style,H=W!=null&&W.hasOwnProperty("display")?W.display:null;v.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(on){jn(T,T.return,on)}}}else if(e.tag===6){if(i===null){T=e;try{T.stateNode.nodeValue=u?"":T.memoizedProps}catch(on){jn(T,T.return,on)}}}else if(e.tag===18){if(i===null){T=e;try{var q=T.stateNode;u?Qm(q,!0):Qm(T.stateNode,!1)}catch(on){jn(T,T.return,on)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=n.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,Xl(n,i))));break;case 19:Ae(e,n),Pe(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Xl(n,l)));break;case 30:break;case 21:break;default:Ae(e,n),Pe(n)}}function Pe(n){var e=n.flags;if(e&2){try{for(var i,l=n.return;l!==null;){if(Zd(l)){i=l;break}l=l.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var u=i.stateNode,p=Eu(n);Ql(n,p,u);break;case 5:var y=i.stateNode;i.flags&32&&(Xi(y,""),i.flags&=-33);var v=Eu(n);Ql(n,v,y);break;case 3:case 4:var T=i.stateNode.containerInfo,B=Eu(n);Tu(n,B,T);break;default:throw Error(o(161))}}catch(V){jn(n,n.return,V)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function am(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;am(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Ot(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Kd(n,e.alternate,e),e=e.sibling}function Ni(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:Kt(4,e,e.return),Ni(e);break;case 1:dt(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&Qd(e,e.return,i),Ni(e);break;case 27:Ta(e.stateNode);case 26:case 5:dt(e,e.return),Ni(e);break;case 22:e.memoizedState===null&&Ni(e);break;case 30:Ni(e);break;default:Ni(e)}n=n.sibling}}function Rt(n,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,u=n,p=e,y=p.flags;switch(p.tag){case 0:case 11:case 15:Rt(u,p,i),ha(4,p);break;case 1:if(Rt(u,p,i),l=p,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(B){jn(l,l.return,B)}if(l=p,u=l.updateQueue,u!==null){var v=l.stateNode;try{var T=u.shared.hiddenCallbacks;if(T!==null)for(u.shared.hiddenCallbacks=null,u=0;u<T.length;u++)Lp(T[u],v)}catch(B){jn(l,l.return,B)}}i&&y&64&&Wd(p),ga(p,p.return);break;case 27:$d(p);case 26:case 5:Rt(u,p,i),i&&l===null&&y&4&&Xd(p),ga(p,p.return);break;case 12:Rt(u,p,i);break;case 31:Rt(u,p,i),i&&y&4&&tm(u,p);break;case 13:Rt(u,p,i),i&&y&4&&im(u,p);break;case 22:p.memoizedState===null&&Rt(u,p,i),ga(p,p.return);break;case 30:break;default:Rt(u,p,i)}e=e.sibling}}function ku(n,e){var i=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(n!=null&&n.refCount++,i!=null&&ta(i))}function Au(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ta(n))}function ot(n,e,i,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lm(n,e,i,l),e=e.sibling}function lm(n,e,i,l){var u=e.flags;switch(e.tag){case 0:case 11:case 15:ot(n,e,i,l),u&2048&&ha(9,e);break;case 1:ot(n,e,i,l);break;case 3:ot(n,e,i,l),u&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ta(n)));break;case 12:if(u&2048){ot(n,e,i,l),n=e.stateNode;try{var p=e.memoizedProps,y=p.id,v=p.onPostCommit;typeof v=="function"&&v(y,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(T){jn(e,e.return,T)}}else ot(n,e,i,l);break;case 31:ot(n,e,i,l);break;case 13:ot(n,e,i,l);break;case 23:break;case 22:p=e.stateNode,y=e.alternate,e.memoizedState!==null?p._visibility&2?ot(n,e,i,l):ya(n,e):p._visibility&2?ot(n,e,i,l):(p._visibility|=2,hr(n,e,i,l,(e.subtreeFlags&10256)!==0||!1)),u&2048&&ku(y,e);break;case 24:ot(n,e,i,l),u&2048&&Au(e.alternate,e);break;default:ot(n,e,i,l)}}function hr(n,e,i,l,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var p=n,y=e,v=i,T=l,B=y.flags;switch(y.tag){case 0:case 11:case 15:hr(p,y,v,T,u),ha(8,y);break;case 23:break;case 22:var V=y.stateNode;y.memoizedState!==null?V._visibility&2?hr(p,y,v,T,u):ya(p,y):(V._visibility|=2,hr(p,y,v,T,u)),u&&B&2048&&ku(y.alternate,y);break;case 24:hr(p,y,v,T,u),u&&B&2048&&Au(y.alternate,y);break;default:hr(p,y,v,T,u)}e=e.sibling}}function ya(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=n,l=e,u=l.flags;switch(l.tag){case 22:ya(i,l),u&2048&&ku(l.alternate,l);break;case 24:ya(i,l),u&2048&&Au(l.alternate,l);break;default:ya(i,l)}e=e.sibling}}var ba=8192;function gr(n,e,i){if(n.subtreeFlags&ba)for(n=n.child;n!==null;)om(n,e,i),n=n.sibling}function om(n,e,i){switch(n.tag){case 26:gr(n,e,i),n.flags&ba&&n.memoizedState!==null&&xb(i,lt,n.memoizedState,n.memoizedProps);break;case 5:gr(n,e,i);break;case 3:case 4:var l=lt;lt=uo(n.stateNode.containerInfo),gr(n,e,i),lt=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=ba,ba=16777216,gr(n,e,i),ba=l):gr(n,e,i));break;default:gr(n,e,i)}}function sm(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function xa(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var l=e[i];ue=l,cm(l,n)}sm(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)um(n),n=n.sibling}function um(n){switch(n.tag){case 0:case 11:case 15:xa(n),n.flags&2048&&Kt(9,n,n.return);break;case 3:xa(n);break;case 12:xa(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Zl(n)):xa(n);break;default:xa(n)}}function Zl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var l=e[i];ue=l,cm(l,n)}sm(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Kt(8,e,e.return),Zl(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Zl(e));break;default:Zl(e)}n=n.sibling}}function cm(n,e){for(;ue!==null;){var i=ue;switch(i.tag){case 0:case 11:case 15:Kt(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ta(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,ue=l;else n:for(i=n;ue!==null;){l=ue;var u=l.sibling,p=l.return;if(nm(l),l===i){ue=null;break n}if(u!==null){u.return=p,ue=u;break n}ue=p}}}var R1={getCacheForType:function(n){var e=de(ee),i=e.data.get(n);return i===void 0&&(i=n(),e.data.set(n,i)),i},cacheSignal:function(){return de(ee).controller.signal}},z1=typeof WeakMap=="function"?WeakMap:Map,Rn=0,Fn=null,En=null,An=0,Ln=0,Ue=null,ni=!1,yr=!1,Pu=!1,zt=0,Jn=0,ei=0,Di=0,Mu=0,He=0,br=0,va=null,Me=null,Nu=!1,$l=0,fm=0,Jl=1/0,Kl=null,ti=null,oe=0,ii=null,xr=null,Lt=0,Du=0,Ou=null,pm=null,Sa=0,Ru=null;function Ie(){return(Rn&2)!==0&&An!==0?An&-An:R.T!==null?Hu():Af()}function dm(){if(He===0)if((An&536870912)===0||Mn){var n=ol;ol<<=1,(ol&3932160)===0&&(ol=262144),He=n}else He=536870912;return n=je.current,n!==null&&(n.flags|=32),He}function Ne(n,e,i){(n===Fn&&(Ln===2||Ln===9)||n.cancelPendingCommit!==null)&&(vr(n,0),ri(n,An,He,!1)),qr(n,i),((Rn&2)===0||n!==Fn)&&(n===Fn&&((Rn&2)===0&&(Di|=i),Jn===4&&ri(n,An,He,!1)),mt(n))}function mm(n,e,i){if((Rn&6)!==0)throw Error(o(327));var l=!i&&(e&127)===0&&(e&n.expiredLanes)===0||Ir(n,e),u=l?B1(n,e):Lu(n,e,!0),p=l;do{if(u===0){yr&&!l&&ri(n,e,0,!1);break}else{if(i=n.current.alternate,p&&!L1(i)){u=Lu(n,e,!1),p=!1;continue}if(u===2){if(p=e,n.errorRecoveryDisabledLanes&p)var y=0;else y=n.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;n:{var v=n;u=va;var T=v.current.memoizedState.isDehydrated;if(T&&(vr(v,y).flags|=256),y=Lu(v,y,!1),y!==2){if(Pu&&!T){v.errorRecoveryDisabledLanes|=p,Di|=p,u=4;break n}p=Me,Me=u,p!==null&&(Me===null?Me=p:Me.push.apply(Me,p))}u=y}if(p=!1,u!==2)continue}}if(u===1){vr(n,0),ri(n,e,0,!0);break}n:{switch(l=n,p=u,p){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:ri(l,e,He,!ni);break n;case 2:Me=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(u=$l+300-ve(),10<u)){if(ri(l,e,He,!ni),ul(l,0,!0)!==0)break n;Lt=e,l.timeoutHandle=Ym(hm.bind(null,l,i,Me,Kl,Nu,e,He,Di,br,ni,p,"Throttled",-0,0),u);break n}hm(l,i,Me,Kl,Nu,e,He,Di,br,ni,p,null,-0,0)}}break}while(!0);mt(n)}function hm(n,e,i,l,u,p,y,v,T,B,V,W,H,q){if(n.timeoutHandle=-1,W=e.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:St},om(e,p,W);var on=(p&62914560)===p?$l-ve():(p&4194048)===p?fm-ve():0;if(on=vb(W,on),on!==null){Lt=p,n.cancelPendingCommit=on(Cm.bind(null,n,e,p,i,l,u,y,v,T,V,W,null,H,q)),ri(n,p,y,!B);return}}Cm(n,e,p,i,l,u,y,v,T)}function L1(n){for(var e=n;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var u=i[l],p=u.getSnapshot;u=u.value;try{if(!ze(p(),u))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(n,e,i,l){e&=~Mu,e&=~Di,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var u=e;0<u;){var p=31-qn(u),y=1<<p;l[p]=-1,u&=~y}i!==0&&Tf(n,i,e)}function no(){return(Rn&6)===0?(wa(0),!1):!0}function zu(){if(En!==null){if(Ln===0)var n=En.return;else n=En,Tt=Ci=null,$s(n),cr=null,ra=0,n=En;for(;n!==null;)Gd(n.alternate,n),n=n.return;En=null}}function vr(n,e){var i=n.timeoutHandle;i!==-1&&(n.timeoutHandle=-1,tb(i)),i=n.cancelPendingCommit,i!==null&&(n.cancelPendingCommit=null,i()),Lt=0,zu(),Fn=n,En=i=Ct(n.current,null),An=e,Ln=0,Ue=null,ni=!1,yr=Ir(n,e),Pu=!1,br=He=Mu=Di=ei=Jn=0,Me=va=null,Nu=!1,(e&8)!==0&&(e|=e&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=e;0<l;){var u=31-qn(l),p=1<<u;e|=n[u],l&=~p}return zt=e,Sl(),i}function gm(n,e){xn=null,R.H=pa,e===ur||e===Pl?(e=Dp(),Ln=3):e===Us?(e=Dp(),Ln=4):Ln=e===du?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ue=e,En===null&&(Jn=1,Fl(n,Xe(e,n.current)))}function ym(){var n=je.current;return n===null?!0:(An&4194048)===An?Ke===null:(An&62914560)===An||(An&536870912)!==0?n===Ke:!1}function bm(){var n=R.H;return R.H=pa,n===null?pa:n}function xm(){var n=R.A;return R.A=R1,n}function eo(){Jn=4,ni||(An&4194048)!==An&&je.current!==null||(yr=!0),(ei&134217727)===0&&(Di&134217727)===0||Fn===null||ri(Fn,An,He,!1)}function Lu(n,e,i){var l=Rn;Rn|=2;var u=bm(),p=xm();(Fn!==n||An!==e)&&(Kl=null,vr(n,e)),e=!1;var y=Jn;n:do try{if(Ln!==0&&En!==null){var v=En,T=Ue;switch(Ln){case 8:zu(),y=6;break n;case 3:case 2:case 9:case 6:je.current===null&&(e=!0);var B=Ln;if(Ln=0,Ue=null,Sr(n,v,T,B),i&&yr){y=0;break n}break;default:B=Ln,Ln=0,Ue=null,Sr(n,v,T,B)}}j1(),y=Jn;break}catch(V){gm(n,V)}while(!0);return e&&n.shellSuspendCounter++,Tt=Ci=null,Rn=l,R.H=u,R.A=p,En===null&&(Fn=null,An=0,Sl()),y}function j1(){for(;En!==null;)vm(En)}function B1(n,e){var i=Rn;Rn|=2;var l=bm(),u=xm();Fn!==n||An!==e?(Kl=null,Jl=ve()+500,vr(n,e)):yr=Ir(n,e);n:do try{if(Ln!==0&&En!==null){e=En;var p=Ue;e:switch(Ln){case 1:Ln=0,Ue=null,Sr(n,e,p,1);break;case 2:case 9:if(Mp(p)){Ln=0,Ue=null,Sm(e);break}e=function(){Ln!==2&&Ln!==9||Fn!==n||(Ln=7),mt(n)},p.then(e,e);break n;case 3:Ln=7;break n;case 4:Ln=5;break n;case 7:Mp(p)?(Ln=0,Ue=null,Sm(e)):(Ln=0,Ue=null,Sr(n,e,p,7));break;case 5:var y=null;switch(En.tag){case 26:y=En.memoizedState;case 5:case 27:var v=En;if(y?lh(y):v.stateNode.complete){Ln=0,Ue=null;var T=v.sibling;if(T!==null)En=T;else{var B=v.return;B!==null?(En=B,to(B)):En=null}break e}}Ln=0,Ue=null,Sr(n,e,p,5);break;case 6:Ln=0,Ue=null,Sr(n,e,p,6);break;case 8:zu(),Jn=6;break n;default:throw Error(o(462))}}U1();break}catch(V){gm(n,V)}while(!0);return Tt=Ci=null,R.H=l,R.A=u,Rn=i,En!==null?0:(Fn=null,An=0,Sl(),Jn)}function U1(){for(;En!==null&&!Xo();)vm(En)}function vm(n){var e=Vd(n.alternate,n,zt);n.memoizedProps=n.pendingProps,e===null?to(n):En=e}function Sm(n){var e=n,i=e.alternate;switch(e.tag){case 15:case 0:e=Bd(i,e,e.pendingProps,e.type,void 0,An);break;case 11:e=Bd(i,e,e.pendingProps,e.type.render,e.ref,An);break;case 5:$s(e);default:Gd(i,e),e=En=xp(e,zt),e=Vd(i,e,zt)}n.memoizedProps=n.pendingProps,e===null?to(n):En=e}function Sr(n,e,i,l){Tt=Ci=null,$s(e),cr=null,ra=0;var u=e.return;try{if(k1(n,u,e,i,An)){Jn=1,Fl(n,Xe(i,n.current)),En=null;return}}catch(p){if(u!==null)throw En=u,p;Jn=1,Fl(n,Xe(i,n.current)),En=null;return}e.flags&32768?(Mn||l===1?n=!0:yr||(An&536870912)!==0?n=!1:(ni=n=!0,(l===2||l===9||l===3||l===6)&&(l=je.current,l!==null&&l.tag===13&&(l.flags|=16384))),wm(e,n)):to(e)}function to(n){var e=n;do{if((e.flags&32768)!==0){wm(e,ni);return}n=e.return;var i=M1(e.alternate,e,zt);if(i!==null){En=i;return}if(e=e.sibling,e!==null){En=e;return}En=e=n}while(e!==null);Jn===0&&(Jn=5)}function wm(n,e){do{var i=N1(n.alternate,n);if(i!==null){i.flags&=32767,En=i;return}if(i=n.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(n=n.sibling,n!==null)){En=n;return}En=n=i}while(n!==null);Jn=6,En=null}function Cm(n,e,i,l,u,p,y,v,T){n.cancelPendingCommit=null;do io();while(oe!==0);if((Rn&6)!==0)throw Error(o(327));if(e!==null){if(e===n.current)throw Error(o(177));if(p=e.lanes|e.childLanes,p|=Es,b0(n,i,p,y,v,T),n===Fn&&(En=Fn=null,An=0),xr=e,ii=n,Lt=i,Du=p,Ou=u,pm=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,F1(gn,function(){return Am(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,u=Z.p,Z.p=2,y=Rn,Rn|=4;try{D1(n,e,i)}finally{Rn=y,Z.p=u,R.T=l}}oe=1,Em(),Tm(),_m()}}function Em(){if(oe===1){oe=0;var n=ii,e=xr,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var l=Z.p;Z.p=2;var u=Rn;Rn|=4;try{rm(e,n);var p=Qu,y=cp(n.containerInfo),v=p.focusedElem,T=p.selectionRange;if(y!==v&&v&&v.ownerDocument&&up(v.ownerDocument.documentElement,v)){if(T!==null&&xs(v)){var B=T.start,V=T.end;if(V===void 0&&(V=B),"selectionStart"in v)v.selectionStart=B,v.selectionEnd=Math.min(V,v.value.length);else{var W=v.ownerDocument||document,H=W&&W.defaultView||window;if(H.getSelection){var q=H.getSelection(),on=v.textContent.length,mn=Math.min(T.start,on),In=T.end===void 0?mn:Math.min(T.end,on);!q.extend&&mn>In&&(y=In,In=mn,mn=y);var M=sp(v,mn),A=sp(v,In);if(M&&A&&(q.rangeCount!==1||q.anchorNode!==M.node||q.anchorOffset!==M.offset||q.focusNode!==A.node||q.focusOffset!==A.offset)){var j=W.createRange();j.setStart(M.node,M.offset),q.removeAllRanges(),mn>In?(q.addRange(j),q.extend(A.node,A.offset)):(j.setEnd(A.node,A.offset),q.addRange(j))}}}}for(W=[],q=v;q=q.parentNode;)q.nodeType===1&&W.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<W.length;v++){var G=W[v];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}go=!!Wu,Qu=Wu=null}finally{Rn=u,Z.p=l,R.T=i}}n.current=e,oe=2}}function Tm(){if(oe===2){oe=0;var n=ii,e=xr,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var l=Z.p;Z.p=2;var u=Rn;Rn|=4;try{Kd(n,e.alternate,e)}finally{Rn=u,Z.p=l,R.T=i}}oe=3}}function _m(){if(oe===4||oe===3){oe=0,Zo();var n=ii,e=xr,i=Lt,l=pm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?oe=5:(oe=0,xr=ii=null,km(n,n.pendingLanes));var u=n.pendingLanes;if(u===0&&(ti=null),ns(i),e=e.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(Se,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=R.T,u=Z.p,Z.p=2,R.T=null;try{for(var p=n.onRecoverableError,y=0;y<l.length;y++){var v=l[y];p(v.value,{componentStack:v.stack})}}finally{R.T=e,Z.p=u}}(Lt&3)!==0&&io(),mt(n),u=n.pendingLanes,(i&261930)!==0&&(u&42)!==0?n===Ru?Sa++:(Sa=0,Ru=n):Sa=0,wa(0)}}function km(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,ta(e)))}function io(){return Em(),Tm(),_m(),Am()}function Am(){if(oe!==5)return!1;var n=ii,e=Du;Du=0;var i=ns(Lt),l=R.T,u=Z.p;try{Z.p=32>i?32:i,R.T=null,i=Ou,Ou=null;var p=ii,y=Lt;if(oe=0,xr=ii=null,Lt=0,(Rn&6)!==0)throw Error(o(331));var v=Rn;if(Rn|=4,um(p.current),lm(p,p.current,y,i),Rn=v,wa(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(Se,p)}catch{}return!0}finally{Z.p=u,R.T=l,km(n,e)}}function Pm(n,e,i){e=Xe(i,e),e=pu(n.stateNode,e,2),n=Zt(n,e,2),n!==null&&(qr(n,2),mt(n))}function jn(n,e,i){if(n.tag===3)Pm(n,n,i);else for(;e!==null;){if(e.tag===3){Pm(e,n,i);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ti===null||!ti.has(l))){n=Xe(i,n),i=Md(2),l=Zt(e,i,2),l!==null&&(Nd(i,l,e,n),qr(l,2),mt(l));break}}e=e.return}}function ju(n,e,i){var l=n.pingCache;if(l===null){l=n.pingCache=new z1;var u=new Set;l.set(e,u)}else u=l.get(e),u===void 0&&(u=new Set,l.set(e,u));u.has(i)||(Pu=!0,u.add(i),n=H1.bind(null,n,e,i),e.then(n,n))}function H1(n,e,i){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&i,n.warmLanes&=~i,Fn===n&&(An&i)===i&&(Jn===4||Jn===3&&(An&62914560)===An&&300>ve()-$l?(Rn&2)===0&&vr(n,0):Mu|=i,br===An&&(br=0)),mt(n)}function Mm(n,e){e===0&&(e=Ef()),n=vi(n,e),n!==null&&(qr(n,e),mt(n))}function I1(n){var e=n.memoizedState,i=0;e!==null&&(i=e.retryLane),Mm(n,i)}function q1(n,e){var i=0;switch(n.tag){case 31:case 13:var l=n.stateNode,u=n.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(e),Mm(n,i)}function F1(n,e){return qi(n,e)}var ro=null,wr=null,Bu=!1,ao=!1,Uu=!1,ai=0;function mt(n){n!==wr&&n.next===null&&(wr===null?ro=wr=n:wr=wr.next=n),ao=!0,Bu||(Bu=!0,Y1())}function wa(n,e){if(!Uu&&ao){Uu=!0;do for(var i=!1,l=ro;l!==null;){if(n!==0){var u=l.pendingLanes;if(u===0)var p=0;else{var y=l.suspendedLanes,v=l.pingedLanes;p=(1<<31-qn(42|n)+1)-1,p&=u&~(y&~v),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(i=!0,Rm(l,p))}else p=An,p=ul(l,l===Fn?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ir(l,p)||(i=!0,Rm(l,p));l=l.next}while(i);Uu=!1}}function V1(){Nm()}function Nm(){ao=Bu=!1;var n=0;ai!==0&&eb()&&(n=ai);for(var e=ve(),i=null,l=ro;l!==null;){var u=l.next,p=Dm(l,e);p===0?(l.next=null,i===null?ro=u:i.next=u,u===null&&(wr=i)):(i=l,(n!==0||(p&3)!==0)&&(ao=!0)),l=u}oe!==0&&oe!==5||wa(n),ai!==0&&(ai=0)}function Dm(n,e){for(var i=n.suspendedLanes,l=n.pingedLanes,u=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var y=31-qn(p),v=1<<y,T=u[y];T===-1?((v&i)===0||(v&l)!==0)&&(u[y]=y0(v,e)):T<=e&&(n.expiredLanes|=v),p&=~v}if(e=Fn,i=An,i=ul(n,n===e?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,i===0||n===e&&(Ln===2||Ln===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Hr(l),n.callbackNode=null,n.callbackPriority=0;if((i&3)===0||Ir(n,i)){if(e=i&-i,e===n.callbackPriority)return e;switch(l!==null&&Hr(l),ns(i)){case 2:case 8:i=K;break;case 32:i=gn;break;case 268435456:i=zn;break;default:i=gn}return l=Om.bind(null,n),i=qi(i,l),n.callbackPriority=e,n.callbackNode=i,e}return l!==null&&l!==null&&Hr(l),n.callbackPriority=2,n.callbackNode=null,2}function Om(n,e){if(oe!==0&&oe!==5)return n.callbackNode=null,n.callbackPriority=0,null;var i=n.callbackNode;if(io()&&n.callbackNode!==i)return null;var l=An;return l=ul(n,n===Fn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(mm(n,l,e),Dm(n,ve()),n.callbackNode!=null&&n.callbackNode===i?Om.bind(null,n):null)}function Rm(n,e){if(io())return null;mm(n,e,!0)}function Y1(){ib(function(){(Rn&6)!==0?qi(Y,V1):Nm()})}function Hu(){if(ai===0){var n=or;n===0&&(n=ll,ll<<=1,(ll&261888)===0&&(ll=256)),ai=n}return ai}function zm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:dl(""+n)}function Lm(n,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,n.id&&i.setAttribute("form",n.id),e.parentNode.insertBefore(i,e),n=new FormData(n),i.parentNode.removeChild(i),n}function G1(n,e,i,l,u){if(e==="submit"&&i&&i.stateNode===u){var p=zm((u[Te]||null).action),y=l.submitter;y&&(e=(e=y[Te]||null)?zm(e.formAction):y.getAttribute("formAction"),e!==null&&(p=e,y=null));var v=new yl("action","action",null,l,u);n.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ai!==0){var T=y?Lm(u,y):new FormData(u);lu(i,{pending:!0,data:T,method:u.method,action:p},null,T)}}else typeof p=="function"&&(v.preventDefault(),T=y?Lm(u,y):new FormData(u),lu(i,{pending:!0,data:T,method:u.method,action:p},p,T))},currentTarget:u}]})}}for(var Iu=0;Iu<Cs.length;Iu++){var qu=Cs[Iu],W1=qu.toLowerCase(),Q1=qu[0].toUpperCase()+qu.slice(1);at(W1,"on"+Q1)}at(dp,"onAnimationEnd"),at(mp,"onAnimationIteration"),at(hp,"onAnimationStart"),at("dblclick","onDoubleClick"),at("focusin","onFocus"),at("focusout","onBlur"),at(c1,"onTransitionRun"),at(f1,"onTransitionStart"),at(p1,"onTransitionCancel"),at(gp,"onTransitionEnd"),Wi("onMouseEnter",["mouseout","mouseover"]),Wi("onMouseLeave",["mouseout","mouseover"]),Wi("onPointerEnter",["pointerout","pointerover"]),Wi("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ca));function jm(n,e){e=(e&4)!==0;for(var i=0;i<n.length;i++){var l=n[i],u=l.event;l=l.listeners;n:{var p=void 0;if(e)for(var y=l.length-1;0<=y;y--){var v=l[y],T=v.instance,B=v.currentTarget;if(v=v.listener,T!==p&&u.isPropagationStopped())break n;p=v,u.currentTarget=B;try{p(u)}catch(V){vl(V)}u.currentTarget=null,p=T}else for(y=0;y<l.length;y++){if(v=l[y],T=v.instance,B=v.currentTarget,v=v.listener,T!==p&&u.isPropagationStopped())break n;p=v,u.currentTarget=B;try{p(u)}catch(V){vl(V)}u.currentTarget=null,p=T}}}}function Tn(n,e){var i=e[es];i===void 0&&(i=e[es]=new Set);var l=n+"__bubble";i.has(l)||(Bm(e,n,2,!1),i.add(l))}function Fu(n,e,i){var l=0;e&&(l|=4),Bm(i,n,l,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Vu(n){if(!n[lo]){n[lo]=!0,Nf.forEach(function(i){i!=="selectionchange"&&(X1.has(i)||Fu(i,!1,n),Fu(i,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[lo]||(e[lo]=!0,Fu("selectionchange",!1,e))}}function Bm(n,e,i,l){switch(dh(e)){case 2:var u=Cb;break;case 8:u=Eb;break;default:u=ac}i=u.bind(null,e,i,n),u=void 0,!cs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),l?u!==void 0?n.addEventListener(e,i,{capture:!0,passive:u}):n.addEventListener(e,i,!0):u!==void 0?n.addEventListener(e,i,{passive:u}):n.addEventListener(e,i,!1)}function Yu(n,e,i,l,u){var p=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var v=l.stateNode.containerInfo;if(v===u)break;if(y===4)for(y=l.return;y!==null;){var T=y.tag;if((T===3||T===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;v!==null;){if(y=Vi(v),y===null)return;if(T=y.tag,T===5||T===6||T===26||T===27){l=p=y;continue n}v=v.parentNode}}l=l.return}Ff(function(){var B=p,V=ss(i),W=[];n:{var H=yp.get(n);if(H!==void 0){var q=yl,on=n;switch(n){case"keypress":if(hl(i)===0)break n;case"keydown":case"keyup":q=q0;break;case"focusin":on="focus",q=ms;break;case"focusout":on="blur",q=ms;break;case"beforeblur":case"afterblur":q=ms;break;case"click":if(i.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Y0;break;case dp:case mp:case hp:q=O0;break;case gp:q=W0;break;case"scroll":case"scrollend":q=A0;break;case"wheel":q=X0;break;case"copy":case"cut":case"paste":q=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Qf;break;case"toggle":case"beforetoggle":q=$0}var mn=(e&4)!==0,In=!mn&&(n==="scroll"||n==="scrollend"),M=mn?H!==null?H+"Capture":null:H;mn=[];for(var A=B,j;A!==null;){var G=A;if(j=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||j===null||M===null||(G=Yr(A,M),G!=null&&mn.push(Ea(A,G,j))),In)break;A=A.return}0<mn.length&&(H=new q(H,on,null,i,V),W.push({event:H,listeners:mn}))}}if((e&7)===0){n:{if(H=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",H&&i!==os&&(on=i.relatedTarget||i.fromElement)&&(Vi(on)||on[Fi]))break n;if((q||H)&&(H=V.window===V?V:(H=V.ownerDocument)?H.defaultView||H.parentWindow:window,q?(on=i.relatedTarget||i.toElement,q=B,on=on?Vi(on):null,on!==null&&(In=c(on),mn=on.tag,on!==In||mn!==5&&mn!==27&&mn!==6)&&(on=null)):(q=null,on=B),q!==on)){if(mn=Gf,G="onMouseLeave",M="onMouseEnter",A="mouse",(n==="pointerout"||n==="pointerover")&&(mn=Qf,G="onPointerLeave",M="onPointerEnter",A="pointer"),In=q==null?H:Vr(q),j=on==null?H:Vr(on),H=new mn(G,A+"leave",q,i,V),H.target=In,H.relatedTarget=j,G=null,Vi(V)===B&&(mn=new mn(M,A+"enter",on,i,V),mn.target=j,mn.relatedTarget=In,G=mn),In=G,q&&on)e:{for(mn=Z1,M=q,A=on,j=0,G=M;G;G=mn(G))j++;G=0;for(var pn=A;pn;pn=mn(pn))G++;for(;0<j-G;)M=mn(M),j--;for(;0<G-j;)A=mn(A),G--;for(;j--;){if(M===A||A!==null&&M===A.alternate){mn=M;break e}M=mn(M),A=mn(A)}mn=null}else mn=null;q!==null&&Um(W,H,q,mn,!1),on!==null&&In!==null&&Um(W,In,on,mn,!0)}}n:{if(H=B?Vr(B):window,q=H.nodeName&&H.nodeName.toLowerCase(),q==="select"||q==="input"&&H.type==="file")var Dn=tp;else if(np(H))if(ip)Dn=o1;else{Dn=a1;var un=r1}else q=H.nodeName,!q||q.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?B&&ls(B.elementType)&&(Dn=tp):Dn=l1;if(Dn&&(Dn=Dn(n,B))){ep(W,Dn,i,V);break n}un&&un(n,H,B),n==="focusout"&&B&&H.type==="number"&&B.memoizedProps.value!=null&&as(H,"number",H.value)}switch(un=B?Vr(B):window,n){case"focusin":(np(un)||un.contentEditable==="true")&&(Ki=un,vs=B,Kr=null);break;case"focusout":Kr=vs=Ki=null;break;case"mousedown":Ss=!0;break;case"contextmenu":case"mouseup":case"dragend":Ss=!1,fp(W,i,V);break;case"selectionchange":if(u1)break;case"keydown":case"keyup":fp(W,i,V)}var Sn;if(gs)n:{switch(n){case"compositionstart":var Pn="onCompositionStart";break n;case"compositionend":Pn="onCompositionEnd";break n;case"compositionupdate":Pn="onCompositionUpdate";break n}Pn=void 0}else Ji?Jf(n,i)&&(Pn="onCompositionEnd"):n==="keydown"&&i.keyCode===229&&(Pn="onCompositionStart");Pn&&(Xf&&i.locale!=="ko"&&(Ji||Pn!=="onCompositionStart"?Pn==="onCompositionEnd"&&Ji&&(Sn=Vf()):(Ft=V,fs="value"in Ft?Ft.value:Ft.textContent,Ji=!0)),un=oo(B,Pn),0<un.length&&(Pn=new Wf(Pn,n,null,i,V),W.push({event:Pn,listeners:un}),Sn?Pn.data=Sn:(Sn=Kf(i),Sn!==null&&(Pn.data=Sn)))),(Sn=K0?n1(n,i):e1(n,i))&&(Pn=oo(B,"onBeforeInput"),0<Pn.length&&(un=new Wf("onBeforeInput","beforeinput",null,i,V),W.push({event:un,listeners:Pn}),un.data=Sn)),G1(W,n,B,i,V)}jm(W,e)})}function Ea(n,e,i){return{instance:n,listener:e,currentTarget:i}}function oo(n,e){for(var i=e+"Capture",l=[];n!==null;){var u=n,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=Yr(n,i),u!=null&&l.unshift(Ea(n,u,p)),u=Yr(n,e),u!=null&&l.push(Ea(n,u,p))),n.tag===3)return l;n=n.return}return[]}function Z1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Um(n,e,i,l,u){for(var p=e._reactName,y=[];i!==null&&i!==l;){var v=i,T=v.alternate,B=v.stateNode;if(v=v.tag,T!==null&&T===l)break;v!==5&&v!==26&&v!==27||B===null||(T=B,u?(B=Yr(i,p),B!=null&&y.unshift(Ea(i,B,T))):u||(B=Yr(i,p),B!=null&&y.push(Ea(i,B,T)))),i=i.return}y.length!==0&&n.push({event:e,listeners:y})}var $1=/\r\n?/g,J1=/\u0000|\uFFFD/g;function Hm(n){return(typeof n=="string"?n:""+n).replace($1,`
`).replace(J1,"")}function Im(n,e){return e=Hm(e),Hm(n)===e}function Hn(n,e,i,l,u,p){switch(i){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Xi(n,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Xi(n,""+l);break;case"className":fl(n,"class",l);break;case"tabIndex":fl(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fl(n,i,l);break;case"style":If(n,l,p);break;case"data":if(e!=="object"){fl(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||i!=="href")){n.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(i);break}l=dl(""+l),n.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(i==="formAction"?(e!=="input"&&Hn(n,e,"name",u.name,u,null),Hn(n,e,"formEncType",u.formEncType,u,null),Hn(n,e,"formMethod",u.formMethod,u,null),Hn(n,e,"formTarget",u.formTarget,u,null)):(Hn(n,e,"encType",u.encType,u,null),Hn(n,e,"method",u.method,u,null),Hn(n,e,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(i);break}l=dl(""+l),n.setAttribute(i,l);break;case"onClick":l!=null&&(n.onclick=St);break;case"onScroll":l!=null&&Tn("scroll",n);break;case"onScrollEnd":l!=null&&Tn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=i}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}i=dl(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(i,""+l):n.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(i,""):n.removeAttribute(i);break;case"capture":case"download":l===!0?n.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(i,l):n.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(i,l):n.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(i):n.setAttribute(i,l);break;case"popover":Tn("beforetoggle",n),Tn("toggle",n),cl(n,"popover",l);break;case"xlinkActuate":vt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":vt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":vt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":vt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":vt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":vt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":vt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":vt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":vt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":cl(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=_0.get(i)||i,cl(n,i,l))}}function Gu(n,e,i,l,u,p){switch(i){case"style":If(n,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=i}}break;case"children":typeof l=="string"?Xi(n,l):(typeof l=="number"||typeof l=="bigint")&&Xi(n,""+l);break;case"onScroll":l!=null&&Tn("scroll",n);break;case"onScrollEnd":l!=null&&Tn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=St);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Df.hasOwnProperty(i))n:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),e=i.slice(2,u?i.length-7:void 0),p=n[Te]||null,p=p!=null?p[i]:null,typeof p=="function"&&n.removeEventListener(e,p,u),typeof l=="function")){typeof p!="function"&&p!==null&&(i in n?n[i]=null:n.hasAttribute(i)&&n.removeAttribute(i)),n.addEventListener(e,l,u);break n}i in n?n[i]=l:l===!0?n.setAttribute(i,""):cl(n,i,l)}}}function he(n,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tn("error",n),Tn("load",n);var l=!1,u=!1,p;for(p in i)if(i.hasOwnProperty(p)){var y=i[p];if(y!=null)switch(p){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Hn(n,e,p,y,i,null)}}u&&Hn(n,e,"srcSet",i.srcSet,i,null),l&&Hn(n,e,"src",i.src,i,null);return;case"input":Tn("invalid",n);var v=p=y=u=null,T=null,B=null;for(l in i)if(i.hasOwnProperty(l)){var V=i[l];if(V!=null)switch(l){case"name":u=V;break;case"type":y=V;break;case"checked":T=V;break;case"defaultChecked":B=V;break;case"value":p=V;break;case"defaultValue":v=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,e));break;default:Hn(n,e,l,V,i,null)}}jf(n,p,v,T,B,y,u,!1);return;case"select":Tn("invalid",n),l=y=p=null;for(u in i)if(i.hasOwnProperty(u)&&(v=i[u],v!=null))switch(u){case"value":p=v;break;case"defaultValue":y=v;break;case"multiple":l=v;default:Hn(n,e,u,v,i,null)}e=p,i=y,n.multiple=!!l,e!=null?Qi(n,!!l,e,!1):i!=null&&Qi(n,!!l,i,!0);return;case"textarea":Tn("invalid",n),p=u=l=null;for(y in i)if(i.hasOwnProperty(y)&&(v=i[y],v!=null))switch(y){case"value":l=v;break;case"defaultValue":u=v;break;case"children":p=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Hn(n,e,y,v,i,null)}Uf(n,l,u,p);return;case"option":for(T in i)i.hasOwnProperty(T)&&(l=i[T],l!=null)&&(T==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":Hn(n,e,T,l,i,null));return;case"dialog":Tn("beforetoggle",n),Tn("toggle",n),Tn("cancel",n),Tn("close",n);break;case"iframe":case"object":Tn("load",n);break;case"video":case"audio":for(l=0;l<Ca.length;l++)Tn(Ca[l],n);break;case"image":Tn("error",n),Tn("load",n);break;case"details":Tn("toggle",n);break;case"embed":case"source":case"link":Tn("error",n),Tn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in i)if(i.hasOwnProperty(B)&&(l=i[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Hn(n,e,B,l,i,null)}return;default:if(ls(e)){for(V in i)i.hasOwnProperty(V)&&(l=i[V],l!==void 0&&Gu(n,e,V,l,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(l=i[v],l!=null&&Hn(n,e,v,l,i,null))}function K1(n,e,i,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,y=null,v=null,T=null,B=null,V=null;for(q in i){var W=i[q];if(i.hasOwnProperty(q)&&W!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":T=W;default:l.hasOwnProperty(q)||Hn(n,e,q,null,l,W)}}for(var H in l){var q=l[H];if(W=i[H],l.hasOwnProperty(H)&&(q!=null||W!=null))switch(H){case"type":p=q;break;case"name":u=q;break;case"checked":B=q;break;case"defaultChecked":V=q;break;case"value":y=q;break;case"defaultValue":v=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,e));break;default:q!==W&&Hn(n,e,H,q,l,W)}}rs(n,y,v,T,B,V,p,u);return;case"select":q=y=v=H=null;for(p in i)if(T=i[p],i.hasOwnProperty(p)&&T!=null)switch(p){case"value":break;case"multiple":q=T;default:l.hasOwnProperty(p)||Hn(n,e,p,null,l,T)}for(u in l)if(p=l[u],T=i[u],l.hasOwnProperty(u)&&(p!=null||T!=null))switch(u){case"value":H=p;break;case"defaultValue":v=p;break;case"multiple":y=p;default:p!==T&&Hn(n,e,u,p,l,T)}e=v,i=y,l=q,H!=null?Qi(n,!!i,H,!1):!!l!=!!i&&(e!=null?Qi(n,!!i,e,!0):Qi(n,!!i,i?[]:"",!1));return;case"textarea":q=H=null;for(v in i)if(u=i[v],i.hasOwnProperty(v)&&u!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Hn(n,e,v,null,l,u)}for(y in l)if(u=l[y],p=i[y],l.hasOwnProperty(y)&&(u!=null||p!=null))switch(y){case"value":H=u;break;case"defaultValue":q=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==p&&Hn(n,e,y,u,l,p)}Bf(n,H,q);return;case"option":for(var on in i)H=i[on],i.hasOwnProperty(on)&&H!=null&&!l.hasOwnProperty(on)&&(on==="selected"?n.selected=!1:Hn(n,e,on,null,l,H));for(T in l)H=l[T],q=i[T],l.hasOwnProperty(T)&&H!==q&&(H!=null||q!=null)&&(T==="selected"?n.selected=H&&typeof H!="function"&&typeof H!="symbol":Hn(n,e,T,H,l,q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mn in i)H=i[mn],i.hasOwnProperty(mn)&&H!=null&&!l.hasOwnProperty(mn)&&Hn(n,e,mn,null,l,H);for(B in l)if(H=l[B],q=i[B],l.hasOwnProperty(B)&&H!==q&&(H!=null||q!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,e));break;default:Hn(n,e,B,H,l,q)}return;default:if(ls(e)){for(var In in i)H=i[In],i.hasOwnProperty(In)&&H!==void 0&&!l.hasOwnProperty(In)&&Gu(n,e,In,void 0,l,H);for(V in l)H=l[V],q=i[V],!l.hasOwnProperty(V)||H===q||H===void 0&&q===void 0||Gu(n,e,V,H,l,q);return}}for(var M in i)H=i[M],i.hasOwnProperty(M)&&H!=null&&!l.hasOwnProperty(M)&&Hn(n,e,M,null,l,H);for(W in l)H=l[W],q=i[W],!l.hasOwnProperty(W)||H===q||H==null&&q==null||Hn(n,e,W,H,l,q)}function qm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nb(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var u=i[l],p=u.transferSize,y=u.initiatorType,v=u.duration;if(p&&v&&qm(y)){for(y=0,v=u.responseEnd,l+=1;l<i.length;l++){var T=i[l],B=T.startTime;if(B>v)break;var V=T.transferSize,W=T.initiatorType;V&&qm(W)&&(T=T.responseEnd,y+=V*(T<v?1:(v-B)/(T-B)))}if(--l,e+=8*(p+y)/(u.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Wu=null,Qu=null;function so(n){return n.nodeType===9?n:n.ownerDocument}function Fm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Xu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=null;function eb(){var n=window.event;return n&&n.type==="popstate"?n===Zu?!1:(Zu=n,!0):(Zu=null,!1)}var Ym=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(n){return Gm.resolve(null).then(n).catch(rb)}:Ym;function rb(n){setTimeout(function(){throw n})}function li(n){return n==="head"}function Wm(n,e){var i=e,l=0;do{var u=i.nextSibling;if(n.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"||i==="/&"){if(l===0){n.removeChild(u),_r(e);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Ta(n.ownerDocument.documentElement);else if(i==="head"){i=n.ownerDocument.head,Ta(i);for(var p=i.firstChild;p;){var y=p.nextSibling,v=p.nodeName;p[Fr]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&p.rel.toLowerCase()==="stylesheet"||i.removeChild(p),p=y}}else i==="body"&&Ta(n.ownerDocument.body);i=u}while(i);_r(e)}function Qm(n,e){var i=n;n=0;do{var l=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(n===0)break;n--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||n++;i=l}while(i)}function $u(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":$u(i),ts(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}n.removeChild(i)}}function ab(n,e,i,l){for(;n.nodeType===1;){var u=i;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Fr])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==u.rel||n.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||n.getAttribute("title")!==(u.title==null?null:u.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(u.src==null?null:u.src)||n.getAttribute("type")!==(u.type==null?null:u.type)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=nt(n.nextSibling),n===null)break}return null}function lb(n,e,i){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=nt(n.nextSibling),n===null))return null;return n}function Xm(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=nt(n.nextSibling),n===null))return null;return n}function Ju(n){return n.data==="$?"||n.data==="$~"}function Ku(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function ob(n,e){var i=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||i.readyState!=="loading")e();else{var l=function(){e(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function nt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var nc=null;function Zm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var i=n.data;if(i==="/$"||i==="/&"){if(e===0)return nt(n.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}n=n.nextSibling}return null}function $m(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var i=n.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return n;e--}else i!=="/$"&&i!=="/&"||e++}n=n.previousSibling}return null}function Jm(n,e,i){switch(e=so(i),n){case"html":if(n=e.documentElement,!n)throw Error(o(452));return n;case"head":if(n=e.head,!n)throw Error(o(453));return n;case"body":if(n=e.body,!n)throw Error(o(454));return n;default:throw Error(o(451))}}function Ta(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);ts(n)}var et=new Map,Km=new Set;function uo(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var jt=Z.d;Z.d={f:sb,r:ub,D:cb,C:fb,L:pb,m:db,X:hb,S:mb,M:gb};function sb(){var n=jt.f(),e=no();return n||e}function ub(n){var e=Yi(n);e!==null&&e.tag===5&&e.type==="form"?gd(e):jt.r(n)}var Cr=typeof document>"u"?null:document;function nh(n,e,i){var l=Cr;if(l&&typeof e=="string"&&e){var u=We(e);u='link[rel="'+n+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),Km.has(u)||(Km.add(u),n={rel:n,crossOrigin:i,href:e},l.querySelector(u)===null&&(e=l.createElement("link"),he(e,"link",n),se(e),l.head.appendChild(e)))}}function cb(n){jt.D(n),nh("dns-prefetch",n,null)}function fb(n,e){jt.C(n,e),nh("preconnect",n,e)}function pb(n,e,i){jt.L(n,e,i);var l=Cr;if(l&&n&&e){var u='link[rel="preload"][as="'+We(e)+'"]';e==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+We(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+We(i.imageSizes)+'"]')):u+='[href="'+We(n)+'"]';var p=u;switch(e){case"style":p=Er(n);break;case"script":p=Tr(n)}et.has(p)||(n=g({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:n,as:e},i),et.set(p,n),l.querySelector(u)!==null||e==="style"&&l.querySelector(_a(p))||e==="script"&&l.querySelector(ka(p))||(e=l.createElement("link"),he(e,"link",n),se(e),l.head.appendChild(e)))}}function db(n,e){jt.m(n,e);var i=Cr;if(i&&n){var l=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+We(l)+'"][href="'+We(n)+'"]',p=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Tr(n)}if(!et.has(p)&&(n=g({rel:"modulepreload",href:n},e),et.set(p,n),i.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ka(p)))return}l=i.createElement("link"),he(l,"link",n),se(l),i.head.appendChild(l)}}}function mb(n,e,i){jt.S(n,e,i);var l=Cr;if(l&&n){var u=Gi(l).hoistableStyles,p=Er(n);e=e||"default";var y=u.get(p);if(!y){var v={loading:0,preload:null};if(y=l.querySelector(_a(p)))v.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":e},i),(i=et.get(p))&&ec(n,i);var T=y=l.createElement("link");se(T),he(T,"link",n),T._p=new Promise(function(B,V){T.onload=B,T.onerror=V}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,co(y,e,l)}y={type:"stylesheet",instance:y,count:1,state:v},u.set(p,y)}}}function hb(n,e){jt.X(n,e);var i=Cr;if(i&&n){var l=Gi(i).hoistableScripts,u=Tr(n),p=l.get(u);p||(p=i.querySelector(ka(u)),p||(n=g({src:n,async:!0},e),(e=et.get(u))&&tc(n,e),p=i.createElement("script"),se(p),he(p,"link",n),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function gb(n,e){jt.M(n,e);var i=Cr;if(i&&n){var l=Gi(i).hoistableScripts,u=Tr(n),p=l.get(u);p||(p=i.querySelector(ka(u)),p||(n=g({src:n,async:!0,type:"module"},e),(e=et.get(u))&&tc(n,e),p=i.createElement("script"),se(p),he(p,"link",n),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function eh(n,e,i,l){var u=(u=fn.current)?uo(u):null;if(!u)throw Error(o(446));switch(n){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=Er(i.href),i=Gi(u).hoistableStyles,l=i.get(e),l||(l={type:"style",instance:null,count:0,state:null},i.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){n=Er(i.href);var p=Gi(u).hoistableStyles,y=p.get(n);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,y),(p=u.querySelector(_a(n)))&&!p._p&&(y.instance=p,y.state.loading=5),et.has(n)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},et.set(n,i),p||yb(u,n,i,y.state))),e&&l===null)throw Error(o(528,""));return y}if(e&&l!==null)throw Error(o(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Tr(i),i=Gi(u).hoistableScripts,l=i.get(e),l||(l={type:"script",instance:null,count:0,state:null},i.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,n))}}function Er(n){return'href="'+We(n)+'"'}function _a(n){return'link[rel="stylesheet"]['+n+"]"}function th(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function yb(n,e,i,l){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=n.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),he(e,"link",i),se(e),n.head.appendChild(e))}function Tr(n){return'[src="'+We(n)+'"]'}function ka(n){return"script[async]"+n}function ih(n,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+We(i.href)+'"]');if(l)return e.instance=l,se(l),l;var u=g({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),se(l),he(l,"style",u),co(l,i.precedence,n),e.instance=l;case"stylesheet":u=Er(i.href);var p=n.querySelector(_a(u));if(p)return e.state.loading|=4,e.instance=p,se(p),p;l=th(i),(u=et.get(u))&&ec(l,u),p=(n.ownerDocument||n).createElement("link"),se(p);var y=p;return y._p=new Promise(function(v,T){y.onload=v,y.onerror=T}),he(p,"link",l),e.state.loading|=4,co(p,i.precedence,n),e.instance=p;case"script":return p=Tr(i.src),(u=n.querySelector(ka(p)))?(e.instance=u,se(u),u):(l=i,(u=et.get(p))&&(l=g({},i),tc(l,u)),n=n.ownerDocument||n,u=n.createElement("script"),se(u),he(u,"link",l),n.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,co(l,i.precedence,n));return e.instance}function co(n,e,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,p=u,y=0;y<l.length;y++){var v=l[y];if(v.dataset.precedence===e)p=v;else if(p!==u)break}p?p.parentNode.insertBefore(n,p.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(n,e.firstChild))}function ec(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function tc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var fo=null;function rh(n,e,i){if(fo===null){var l=new Map,u=fo=new Map;u.set(i,l)}else u=fo,l=u.get(i),l||(l=new Map,u.set(i,l));if(l.has(n))return l;for(l.set(n,null),i=i.getElementsByTagName(n),u=0;u<i.length;u++){var p=i[u];if(!(p[Fr]||p[fe]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var y=p.getAttribute(e)||"";y=n+y;var v=l.get(y);v?v.push(p):l.set(y,[p])}}return l}function ah(n,e,i){n=n.ownerDocument||n,n.head.insertBefore(i,e==="title"?n.querySelector("head > title"):null)}function bb(n,e,i){if(i===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function lh(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function xb(n,e,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=Er(l.href),p=e.querySelector(_a(u));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=po.bind(n),e.then(n,n)),i.state.loading|=4,i.instance=p,se(p);return}p=e.ownerDocument||e,l=th(l),(u=et.get(u))&&ec(l,u),p=p.createElement("link"),se(p);var y=p;y._p=new Promise(function(v,T){y.onload=v,y.onerror=T}),he(p,"link",l),i.instance=p}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(n.count++,i=po.bind(n),e.addEventListener("load",i),e.addEventListener("error",i))}}var ic=0;function vb(n,e){return n.stylesheets&&n.count===0&&ho(n,n.stylesheets),0<n.count||0<n.imgCount?function(i){var l=setTimeout(function(){if(n.stylesheets&&ho(n,n.stylesheets),n.unsuspend){var p=n.unsuspend;n.unsuspend=null,p()}},6e4+e);0<n.imgBytes&&ic===0&&(ic=62500*nb());var u=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ho(n,n.stylesheets),n.unsuspend)){var p=n.unsuspend;n.unsuspend=null,p()}},(n.imgBytes>ic?50:800)+e);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ho(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var mo=null;function ho(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,mo=new Map,e.forEach(Sb,n),mo=null,po.call(n))}function Sb(n,e){if(!(e.state.loading&4)){var i=mo.get(n);if(i)var l=i.get(null);else{i=new Map,mo.set(n,i);for(var u=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var y=u[p];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,y),l=y)}l&&i.set(null,l)}u=e.instance,y=u.getAttribute("data-precedence"),p=i.get(y)||l,p===l&&i.set(null,u),i.set(y,u),this.count++,l=po.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),p?p.parentNode.insertBefore(u,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(u,n.firstChild)),e.state.loading|=4}}var Aa={$$typeof:I,Provider:null,Consumer:null,_currentValue:sn,_currentValue2:sn,_threadCount:0};function wb(n,e,i,l,u,p,y,v,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.hiddenUpdates=Jo(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function oh(n,e,i,l,u,p,y,v,T,B,V,W){return n=new wb(n,e,i,y,T,B,V,W,v),e=1,p===!0&&(e|=24),p=Le(3,null,null,e),n.current=p,p.stateNode=n,e=Ls(),e.refCount++,n.pooledCache=e,e.refCount++,p.memoizedState={element:l,isDehydrated:i,cache:e},Hs(p),n}function sh(n){return n?(n=tr,n):tr}function uh(n,e,i,l,u,p){u=sh(u),l.context===null?l.context=u:l.pendingContext=u,l=Xt(e),l.payload={element:i},p=p===void 0?null:p,p!==null&&(l.callback=p),i=Zt(n,l,e),i!==null&&(Ne(i,n,e),la(i,n,e))}function ch(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var i=n.retryLane;n.retryLane=i!==0&&i<e?i:e}}function rc(n,e){ch(n,e),(n=n.alternate)&&ch(n,e)}function fh(n){if(n.tag===13||n.tag===31){var e=vi(n,67108864);e!==null&&Ne(e,n,67108864),rc(n,67108864)}}function ph(n){if(n.tag===13||n.tag===31){var e=Ie();e=Ko(e);var i=vi(n,e);i!==null&&Ne(i,n,e),rc(n,e)}}var go=!0;function Cb(n,e,i,l){var u=R.T;R.T=null;var p=Z.p;try{Z.p=2,ac(n,e,i,l)}finally{Z.p=p,R.T=u}}function Eb(n,e,i,l){var u=R.T;R.T=null;var p=Z.p;try{Z.p=8,ac(n,e,i,l)}finally{Z.p=p,R.T=u}}function ac(n,e,i,l){if(go){var u=lc(l);if(u===null)Yu(n,e,l,yo,i),mh(n,l);else if(_b(u,n,e,i,l))l.stopPropagation();else if(mh(n,l),e&4&&-1<Tb.indexOf(n)){for(;u!==null;){var p=Yi(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var y=hi(p.pendingLanes);if(y!==0){var v=p;for(v.pendingLanes|=2,v.entangledLanes|=2;y;){var T=1<<31-qn(y);v.entanglements[1]|=T,y&=~T}mt(p),(Rn&6)===0&&(Jl=ve()+500,wa(0))}}break;case 31:case 13:v=vi(p,2),v!==null&&Ne(v,p,2),no(),rc(p,2)}if(p=lc(l),p===null&&Yu(n,e,l,yo,i),p===u)break;u=p}u!==null&&l.stopPropagation()}else Yu(n,e,l,null,i)}}function lc(n){return n=ss(n),oc(n)}var yo=null;function oc(n){if(yo=null,n=Vi(n),n!==null){var e=c(n);if(e===null)n=null;else{var i=e.tag;if(i===13){if(n=f(e),n!==null)return n;n=null}else if(i===31){if(n=d(e),n!==null)return n;n=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return yo=n,null}function dh(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($o()){case Y:return 2;case K:return 8;case gn:case Cn:return 32;case zn:return 268435456;default:return 32}default:return 32}}var sc=!1,oi=null,si=null,ui=null,Pa=new Map,Ma=new Map,ci=[],Tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mh(n,e){switch(n){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":ui=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Na(n,e,i,l,u,p){return n===null||n.nativeEvent!==p?(n={blockedOn:e,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},e!==null&&(e=Yi(e),e!==null&&fh(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),n)}function _b(n,e,i,l,u){switch(e){case"focusin":return oi=Na(oi,n,e,i,l,u),!0;case"dragenter":return si=Na(si,n,e,i,l,u),!0;case"mouseover":return ui=Na(ui,n,e,i,l,u),!0;case"pointerover":var p=u.pointerId;return Pa.set(p,Na(Pa.get(p)||null,n,e,i,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Ma.set(p,Na(Ma.get(p)||null,n,e,i,l,u)),!0}return!1}function hh(n){var e=Vi(n.target);if(e!==null){var i=c(e);if(i!==null){if(e=i.tag,e===13){if(e=f(i),e!==null){n.blockedOn=e,Pf(n.priority,function(){ph(i)});return}}else if(e===31){if(e=d(i),e!==null){n.blockedOn=e,Pf(n.priority,function(){ph(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){n.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bo(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var i=lc(n.nativeEvent);if(i===null){i=n.nativeEvent;var l=new i.constructor(i.type,i);os=l,i.target.dispatchEvent(l),os=null}else return e=Yi(i),e!==null&&fh(e),n.blockedOn=i,!1;e.shift()}return!0}function gh(n,e,i){bo(n)&&i.delete(e)}function kb(){sc=!1,oi!==null&&bo(oi)&&(oi=null),si!==null&&bo(si)&&(si=null),ui!==null&&bo(ui)&&(ui=null),Pa.forEach(gh),Ma.forEach(gh)}function xo(n,e){n.blockedOn===e&&(n.blockedOn=null,sc||(sc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kb)))}var vo=null;function yh(n){vo!==n&&(vo=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){vo===n&&(vo=null);for(var e=0;e<n.length;e+=3){var i=n[e],l=n[e+1],u=n[e+2];if(typeof l!="function"){if(oc(l||i)===null)continue;break}var p=Yi(i);p!==null&&(n.splice(e,3),e-=3,lu(p,{pending:!0,data:u,method:i.method,action:l},l,u))}}))}function _r(n){function e(T){return xo(T,n)}oi!==null&&xo(oi,n),si!==null&&xo(si,n),ui!==null&&xo(ui,n),Pa.forEach(e),Ma.forEach(e);for(var i=0;i<ci.length;i++){var l=ci[i];l.blockedOn===n&&(l.blockedOn=null)}for(;0<ci.length&&(i=ci[0],i.blockedOn===null);)hh(i),i.blockedOn===null&&ci.shift();if(i=(n.ownerDocument||n).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var u=i[l],p=i[l+1],y=u[Te]||null;if(typeof p=="function")y||yh(i);else if(y){var v=null;if(p&&p.hasAttribute("formAction")){if(u=p,y=p[Te]||null)v=y.formAction;else if(oc(u)!==null)continue}else v=y.action;typeof v=="function"?i[l+1]=v:(i.splice(l,3),l-=3),yh(i)}}}function bh(){function n(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function uc(n){this._internalRoot=n}So.prototype.render=uc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(o(409));var i=e.current,l=Ie();uh(i,l,n,e,null,null)},So.prototype.unmount=uc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;uh(n.current,2,null,n,null,null),no(),e[Fi]=null}};function So(n){this._internalRoot=n}So.prototype.unstable_scheduleHydration=function(n){if(n){var e=Af();n={blockedOn:null,target:n,priority:e};for(var i=0;i<ci.length&&e!==0&&e<ci[i].priority;i++);ci.splice(i,0,n),i===0&&hh(n)}};var xh=r.version;if(xh!=="19.2.3")throw Error(o(527,xh,"19.2.3"));Z.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=m(e),n=n!==null?b(n):null,n=n===null?null:n.stateNode,n};var Ab={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{Se=wo.inject(Ab),le=wo}catch{}}return Oa.createRoot=function(n,e){if(!s(n))throw Error(o(299));var i=!1,l="",u=_d,p=kd,y=Ad;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(p=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError)),e=oh(n,1,!1,null,null,i,l,null,u,p,y,bh),n[Fi]=e.current,Vu(n),new uc(e)},Oa.hydrateRoot=function(n,e,i){if(!s(n))throw Error(o(299));var l=!1,u="",p=_d,y=kd,v=Ad,T=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.formState!==void 0&&(T=i.formState)),e=oh(n,1,!0,e,i??null,l,u,T,p,y,v,bh),e.context=sh(null),i=e.current,l=Ie(),l=Ko(l),u=Xt(l),u.callback=null,Zt(i,u,l),i=l,e.current.lanes=i,qr(e,i),mt(e),n[Fi]=e.current,Vu(n),new So(e)},Oa.version="19.2.3",Oa}var Ph;function Bb(){if(Ph)return pc.exports;Ph=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),pc.exports=jb(),pc.exports}var Ub=Bb();var Mh="popstate";function Hb(t={}){function r(o,s){let{pathname:c,search:f,hash:d}=o.location;return Uc("",{pathname:c,search:f,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function a(o,s){return typeof s=="string"?s:Ya(s)}return qb(r,a,null,t)}function Zn(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function ut(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ib(){return Math.random().toString(36).substring(2,10)}function Nh(t,r){return{usr:t.state,key:t.key,idx:r}}function Uc(t,r,a=null,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?zr(r):r,state:a,key:r&&r.key||o||Ib()}}function Ya({pathname:t="/",search:r="",hash:a=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function zr(t){let r={};if(t){let a=t.indexOf("#");a>=0&&(r.hash=t.substring(a),t=t.substring(0,a));let o=t.indexOf("?");o>=0&&(r.search=t.substring(o),t=t.substring(0,o)),t&&(r.pathname=t)}return r}function qb(t,r,a,o={}){let{window:s=document.defaultView,v5Compat:c=!1}=o,f=s.history,d="POP",h=null,m=b();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function b(){return(f.state||{idx:null}).idx}function g(){d="POP";let z=b(),P=z==null?null:z-m;m=z,h&&h({action:d,location:O.location,delta:P})}function S(z,P){d="PUSH";let L=Uc(O.location,z,P);m=b()+1;let I=Nh(L,m),rn=O.createHref(L);try{f.pushState(I,"",rn)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;s.location.assign(rn)}c&&h&&h({action:d,location:O.location,delta:1})}function x(z,P){d="REPLACE";let L=Uc(O.location,z,P);m=b();let I=Nh(L,m),rn=O.createHref(L);f.replaceState(I,"",rn),c&&h&&h({action:d,location:O.location,delta:0})}function _(z){return Fb(z)}let O={get action(){return d},get location(){return t(s,f)},listen(z){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(Mh,g),h=z,()=>{s.removeEventListener(Mh,g),h=null}},createHref(z){return r(s,z)},createURL:_,encodeLocation(z){let P=_(z);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:S,replace:x,go(z){return f.go(z)}};return O}function Fb(t,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Zn(a,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:Ya(t);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=a+o),new URL(o,a)}function Dg(t,r,a="/"){return Vb(t,r,a,!1)}function Vb(t,r,a,o){let s=typeof r=="string"?zr(r):r,c=Ut(s.pathname||"/",a);if(c==null)return null;let f=Og(t);Yb(f);let d=null;for(let h=0;d==null&&h<f.length;++h){let m=tx(c);d=nx(f[h],m,o)}return d}function Og(t,r=[],a=[],o="",s=!1){let c=(f,d,h=s,m)=>{let b={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&h)return;Zn(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let g=Bt([o,b.relativePath]),S=a.concat(b);f.children&&f.children.length>0&&(Zn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Og(f.children,r,S,g,h)),!(f.path==null&&!f.index)&&r.push({path:g,score:Jb(g,f.index),routesMeta:S})};return t.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let h of Rg(f.path))c(f,d,!0,h)}),r}function Rg(t){let r=t.split("/");if(r.length===0)return[];let[a,...o]=r,s=a.endsWith("?"),c=a.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let f=Rg(o.join("/")),d=[];return d.push(...f.map(h=>h===""?c:[c,h].join("/"))),s&&d.push(...f),d.map(h=>t.startsWith("/")&&h===""?"/":h)}function Yb(t){t.sort((r,a)=>r.score!==a.score?a.score-r.score:Kb(r.routesMeta.map(o=>o.childrenIndex),a.routesMeta.map(o=>o.childrenIndex)))}var Gb=/^:[\w-]+$/,Wb=3,Qb=2,Xb=1,Zb=10,$b=-2,Dh=t=>t==="*";function Jb(t,r){let a=t.split("/"),o=a.length;return a.some(Dh)&&(o+=$b),r&&(o+=Qb),a.filter(s=>!Dh(s)).reduce((s,c)=>s+(Gb.test(c)?Wb:c===""?Xb:Zb),o)}function Kb(t,r){return t.length===r.length&&t.slice(0,-1).every((o,s)=>o===r[s])?t[t.length-1]-r[r.length-1]:0}function nx(t,r,a=!1){let{routesMeta:o}=t,s={},c="/",f=[];for(let d=0;d<o.length;++d){let h=o[d],m=d===o.length-1,b=c==="/"?r:r.slice(c.length)||"/",g=Oo({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},b),S=h.route;if(!g&&m&&a&&!o[o.length-1].route.index&&(g=Oo({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},b)),!g)return null;Object.assign(s,g.params),f.push({params:s,pathname:Bt([c,g.pathname]),pathnameBase:lx(Bt([c,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(c=Bt([c,g.pathnameBase]))}return f}function Oo(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,o]=ex(t.path,t.caseSensitive,t.end),s=r.match(a);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:o.reduce((m,{paramName:b,isOptional:g},S)=>{if(b==="*"){let _=d[S]||"";f=c.slice(0,c.length-_.length).replace(/(.)\/+$/,"$1")}const x=d[S];return g&&!x?m[b]=void 0:m[b]=(x||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:t}}function ex(t,r=!1,a=!0){ut(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let o=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,h)=>(o.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(o.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function tx(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ut(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function Ut(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,o=t.charAt(a);return o&&o!=="/"?null:t.slice(a)||"/"}var zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ix=t=>zg.test(t);function rx(t,r="/"){let{pathname:a,search:o="",hash:s=""}=typeof t=="string"?zr(t):t,c;if(a)if(ix(a))c=a;else{if(a.includes("//")){let f=a;a=a.replace(/\/\/+/g,"/"),ut(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${a}`)}a.startsWith("/")?c=Oh(a.substring(1),"/"):c=Oh(a,r)}else c=r;return{pathname:c,search:ox(o),hash:sx(s)}}function Oh(t,r){let a=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?a.length>1&&a.pop():s!=="."&&a.push(s)}),a.length>1?a.join("/"):"/"}function gc(t,r,a,o){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ax(t){return t.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function Lg(t){let r=ax(t);return r.map((a,o)=>o===r.length-1?a.pathname:a.pathnameBase)}function jg(t,r,a,o=!1){let s;typeof t=="string"?s=zr(t):(s={...t},Zn(!s.pathname||!s.pathname.includes("?"),gc("?","pathname","search",s)),Zn(!s.pathname||!s.pathname.includes("#"),gc("#","pathname","hash",s)),Zn(!s.search||!s.search.includes("#"),gc("#","search","hash",s)));let c=t===""||s.pathname==="",f=c?"/":s.pathname,d;if(f==null)d=a;else{let g=r.length-1;if(!o&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),g-=1;s.pathname=S.join("/")}d=g>=0?r[g]:"/"}let h=rx(s,d),m=f&&f!=="/"&&f.endsWith("/"),b=(c||f===".")&&a.endsWith("/");return!h.pathname.endsWith("/")&&(m||b)&&(h.pathname+="/"),h}var Bt=t=>t.join("/").replace(/\/\/+/g,"/"),lx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ox=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,ux=class{constructor(t,r,a,o=!1){this.status=t,this.statusText=r||"",this.internal=o,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function cx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function fx(t){return t.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ug(t,r){let a=t;if(typeof a!="string"||!zg.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let o=a,s=!1;if(Bg)try{let c=new URL(window.location.href),f=a.startsWith("//")?new URL(c.protocol+a):new URL(a),d=Ut(f.pathname,r);f.origin===c.origin&&d!=null?a=d+f.search+f.hash:s=!0}catch{ut(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Hg=["POST","PUT","PATCH","DELETE"];new Set(Hg);var px=["GET",...Hg];new Set(px);var Lr=D.createContext(null);Lr.displayName="DataRouter";var Ho=D.createContext(null);Ho.displayName="DataRouterState";var dx=D.createContext(!1),Ig=D.createContext({isTransitioning:!1});Ig.displayName="ViewTransition";var mx=D.createContext(new Map);mx.displayName="Fetchers";var hx=D.createContext(null);hx.displayName="Await";var it=D.createContext(null);it.displayName="Navigation";var Za=D.createContext(null);Za.displayName="Location";var ct=D.createContext({outlet:null,matches:[],isDataRoute:!1});ct.displayName="Route";var nf=D.createContext(null);nf.displayName="RouteError";var qg="REACT_ROUTER_ERROR",gx="REDIRECT",yx="ROUTE_ERROR_RESPONSE";function bx(t){if(t.startsWith(`${qg}:${gx}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function xx(t){if(t.startsWith(`${qg}:${yx}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new ux(r.status,r.statusText,r.data)}catch{}}function vx(t,{relative:r}={}){Zn($a(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=D.useContext(it),{hash:s,pathname:c,search:f}=Ja(t,{relative:r}),d=c;return a!=="/"&&(d=c==="/"?a:Bt([a,c])),o.createHref({pathname:d,search:f,hash:s})}function $a(){return D.useContext(Za)!=null}function Li(){return Zn($a(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Za).location}var Fg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vg(t){D.useContext(it).static||D.useLayoutEffect(t)}function Sx(){let{isDataRoute:t}=D.useContext(ct);return t?Lx():wx()}function wx(){Zn($a(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(Lr),{basename:r,navigator:a}=D.useContext(it),{matches:o}=D.useContext(ct),{pathname:s}=Li(),c=JSON.stringify(Lg(o)),f=D.useRef(!1);return Vg(()=>{f.current=!0}),D.useCallback((h,m={})=>{if(ut(f.current,Fg),!f.current)return;if(typeof h=="number"){a.go(h);return}let b=jg(h,JSON.parse(c),s,m.relative==="path");t==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:Bt([r,b.pathname])),(m.replace?a.replace:a.push)(b,m.state,m)},[r,a,c,s,t])}var Cx=D.createContext(null);function Ex(t){let r=D.useContext(ct).outlet;return D.useMemo(()=>r&&D.createElement(Cx.Provider,{value:t},r),[r,t])}function Yg(){let{matches:t}=D.useContext(ct),r=t[t.length-1];return r?r.params:{}}function Ja(t,{relative:r}={}){let{matches:a}=D.useContext(ct),{pathname:o}=Li(),s=JSON.stringify(Lg(a));return D.useMemo(()=>jg(t,JSON.parse(s),o,r==="path"),[t,s,o,r])}function Tx(t,r){return Gg(t,r)}function Gg(t,r,a,o,s){Zn($a(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=D.useContext(it),{matches:f}=D.useContext(ct),d=f[f.length-1],h=d?d.params:{},m=d?d.pathname:"/",b=d?d.pathnameBase:"/",g=d&&d.route;{let L=g&&g.path||"";Qg(m,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let S=Li(),x;if(r){let L=typeof r=="string"?zr(r):r;Zn(b==="/"||L.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${L.pathname}" was given in the \`location\` prop.`),x=L}else x=S;let _=x.pathname||"/",O=_;if(b!=="/"){let L=b.replace(/^\//,"").split("/");O="/"+_.replace(/^\//,"").split("/").slice(L.length).join("/")}let z=Dg(t,{pathname:O});ut(g||z!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),ut(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=Mx(z&&z.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:Bt([b,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?b:Bt([b,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,a,o,s);return r&&P?D.createElement(Za.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},P):P}function _x(){let t=zx(),r=cx(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:c},"ErrorBoundary")," or"," ",D.createElement("code",{style:c},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},r),a?D.createElement("pre",{style:s},a):null,f)}var kx=D.createElement(_x,null),Wg=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=xx(t.digest);a&&(t=a)}let r=t!==void 0?D.createElement(ct.Provider,{value:this.props.routeContext},D.createElement(nf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?D.createElement(Ax,{error:t},r):r}};Wg.contextType=dx;var yc=new WeakMap;function Ax({children:t,error:r}){let{basename:a}=D.useContext(it);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=bx(r.digest);if(o){let s=yc.get(r);if(s)throw s;let c=Ug(o.location,a);if(Bg&&!yc.get(r))if(c.isExternal||o.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw yc.set(r,f),f}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return t}function Px({routeContext:t,match:r,children:a}){let o=D.useContext(Lr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),D.createElement(ct.Provider,{value:t},a)}function Mx(t,r=[],a=null,o=null,s=null){if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(r.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let c=t,f=a?.errors;if(f!=null){let b=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Zn(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,b+1))}let d=!1,h=-1;if(a)for(let b=0;b<c.length;b++){let g=c[b];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=b),g.route.id){let{loaderData:S,errors:x}=a,_=g.route.loader&&!S.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||_){d=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}let m=a&&o?(b,g)=>{o(b,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:fx(a.matches),errorInfo:g})}:void 0;return c.reduceRight((b,g,S)=>{let x,_=!1,O=null,z=null;a&&(x=f&&g.route.id?f[g.route.id]:void 0,O=g.route.errorElement||kx,d&&(h<0&&S===0?(Qg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,z=null):h===S&&(_=!0,z=g.route.hydrateFallbackElement||null)));let P=r.concat(c.slice(0,S+1)),L=()=>{let I;return x?I=O:_?I=z:g.route.Component?I=D.createElement(g.route.Component,null):g.route.element?I=g.route.element:I=b,D.createElement(Px,{match:g,routeContext:{outlet:b,matches:P,isDataRoute:a!=null},children:I})};return a&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?D.createElement(Wg,{location:a.location,revalidation:a.revalidation,component:O,error:x,children:L(),routeContext:{outlet:null,matches:P,isDataRoute:!0},onError:m}):L()},null)}function ef(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nx(t){let r=D.useContext(Lr);return Zn(r,ef(t)),r}function Dx(t){let r=D.useContext(Ho);return Zn(r,ef(t)),r}function Ox(t){let r=D.useContext(ct);return Zn(r,ef(t)),r}function tf(t){let r=Ox(t),a=r.matches[r.matches.length-1];return Zn(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function Rx(){return tf("useRouteId")}function zx(){let t=D.useContext(nf),r=Dx("useRouteError"),a=tf("useRouteError");return t!==void 0?t:r.errors?.[a]}function Lx(){let{router:t}=Nx("useNavigate"),r=tf("useNavigate"),a=D.useRef(!1);return Vg(()=>{a.current=!0}),D.useCallback(async(s,c={})=>{ut(a.current,Fg),a.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:r,...c}))},[t,r])}var Rh={};function Qg(t,r,a){!r&&!Rh[t]&&(Rh[t]=!0,ut(!1,a))}D.memo(jx);function jx({routes:t,future:r,state:a,onError:o}){return Gg(t,void 0,a,o,r)}function Bx(t){return Ex(t.context)}function Ua(t){Zn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ux({basename:t="/",children:r=null,location:a,navigationType:o="POP",navigator:s,static:c=!1,unstable_useTransitions:f}){Zn(!$a(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),h=D.useMemo(()=>({basename:d,navigator:s,static:c,unstable_useTransitions:f,future:{}}),[d,s,c,f]);typeof a=="string"&&(a=zr(a));let{pathname:m="/",search:b="",hash:g="",state:S=null,key:x="default"}=a,_=D.useMemo(()=>{let O=Ut(m,d);return O==null?null:{location:{pathname:O,search:b,hash:g,state:S,key:x},navigationType:o}},[d,m,b,g,S,x,o]);return ut(_!=null,`<Router basename="${d}"> is not able to match the URL "${m}${b}${g}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:D.createElement(it.Provider,{value:h},D.createElement(Za.Provider,{children:r,value:_}))}function Hx({children:t,location:r}){return Tx(Hc(t),r)}function Hc(t,r=[]){let a=[];return D.Children.forEach(t,(o,s)=>{if(!D.isValidElement(o))return;let c=[...r,s];if(o.type===D.Fragment){a.push.apply(a,Hc(o.props.children,c));return}Zn(o.type===Ua,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zn(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Hc(o.props.children,c)),a.push(f)}),a}var Mo="get",No="application/x-www-form-urlencoded";function Io(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Ix(t){return Io(t)&&t.tagName.toLowerCase()==="button"}function qx(t){return Io(t)&&t.tagName.toLowerCase()==="form"}function Fx(t){return Io(t)&&t.tagName.toLowerCase()==="input"}function Vx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Yx(t,r){return t.button===0&&(!r||r==="_self")&&!Vx(t)}var Co=null;function Gx(){if(Co===null)try{new FormData(document.createElement("form"),0),Co=!1}catch{Co=!0}return Co}var Wx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bc(t){return t!=null&&!Wx.has(t)?(ut(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${No}"`),null):t}function Qx(t,r){let a,o,s,c,f;if(qx(t)){let d=t.getAttribute("action");o=d?Ut(d,r):null,a=t.getAttribute("method")||Mo,s=bc(t.getAttribute("enctype"))||No,c=new FormData(t)}else if(Ix(t)||Fx(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||d.getAttribute("action");if(o=h?Ut(h,r):null,a=t.getAttribute("formmethod")||d.getAttribute("method")||Mo,s=bc(t.getAttribute("formenctype"))||bc(d.getAttribute("enctype"))||No,c=new FormData(d,t),!Gx()){let{name:m,type:b,value:g}=t;if(b==="image"){let S=m?`${m}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else m&&c.append(m,g)}}else{if(Io(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Mo,o=null,s=No,f=t}return c&&s==="text/plain"&&(f=c,c=void 0),{action:o,method:a.toLowerCase(),encType:s,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rf(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Xx(t,r,a,o){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:r&&Ut(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function Zx(t,r){if(t.id in r)return r[t.id];try{let a=await import(t.module);return r[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $x(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Jx(t,r,a){let o=await Promise.all(t.map(async s=>{let c=r.routes[s.route.id];if(c){let f=await Zx(c,a);return f.links?f.links():[]}return[]}));return tv(o.flat(1).filter($x).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function zh(t,r,a,o,s,c){let f=(h,m)=>a[m]?h.route.id!==a[m].route.id:!0,d=(h,m)=>a[m].pathname!==h.pathname||a[m].route.path?.endsWith("*")&&a[m].params["*"]!==h.params["*"];return c==="assets"?r.filter((h,m)=>f(h,m)||d(h,m)):c==="data"?r.filter((h,m)=>{let b=o.routes[h.route.id];if(!b||!b.hasLoader)return!1;if(f(h,m)||d(h,m))return!0;if(h.route.shouldRevalidate){let g=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Kx(t,r,{includeHydrateFallback:a}={}){return nv(t.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),a&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function nv(t){return[...new Set(t)]}function ev(t){let r={},a=Object.keys(t).sort();for(let o of a)r[o]=t[o];return r}function tv(t,r){let a=new Set;return new Set(r),t.reduce((o,s)=>{let c=JSON.stringify(ev(s));return a.has(c)||(a.add(c),o.push({key:c,link:s})),o},[])}function Xg(){let t=D.useContext(Lr);return rf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function iv(){let t=D.useContext(Ho);return rf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var af=D.createContext(void 0);af.displayName="FrameworkContext";function Zg(){let t=D.useContext(af);return rf(t,"You must render this element inside a <HydratedRouter> element"),t}function rv(t,r){let a=D.useContext(af),[o,s]=D.useState(!1),[c,f]=D.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:m,onMouseLeave:b,onTouchStart:g}=r,S=D.useRef(null);D.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let O=P=>{P.forEach(L=>{f(L.isIntersecting)})},z=new IntersectionObserver(O,{threshold:.5});return S.current&&z.observe(S.current),()=>{z.disconnect()}}},[t]),D.useEffect(()=>{if(o){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[o]);let x=()=>{s(!0)},_=()=>{s(!1),f(!1)};return a?t!=="intent"?[c,S,{}]:[c,S,{onFocus:Ra(d,x),onBlur:Ra(h,_),onMouseEnter:Ra(m,x),onMouseLeave:Ra(b,_),onTouchStart:Ra(g,x)}]:[!1,S,{}]}function Ra(t,r){return a=>{t&&t(a),a.defaultPrevented||r(a)}}function av({page:t,...r}){let{router:a}=Xg(),o=D.useMemo(()=>Dg(a.routes,t,a.basename),[a.routes,t,a.basename]);return o?D.createElement(ov,{page:t,matches:o,...r}):null}function lv(t){let{manifest:r,routeModules:a}=Zg(),[o,s]=D.useState([]);return D.useEffect(()=>{let c=!1;return Jx(t,r,a).then(f=>{c||s(f)}),()=>{c=!0}},[t,r,a]),o}function ov({page:t,matches:r,...a}){let o=Li(),{future:s,manifest:c,routeModules:f}=Zg(),{basename:d}=Xg(),{loaderData:h,matches:m}=iv(),b=D.useMemo(()=>zh(t,r,m,c,o,"data"),[t,r,m,c,o]),g=D.useMemo(()=>zh(t,r,m,c,o,"assets"),[t,r,m,c,o]),S=D.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let O=new Set,z=!1;if(r.forEach(L=>{let I=c.routes[L.route.id];!I||!I.hasLoader||(!b.some(rn=>rn.route.id===L.route.id)&&L.route.id in h&&f[L.route.id]?.shouldRevalidate||I.hasClientLoader?z=!0:O.add(L.route.id))}),O.size===0)return[];let P=Xx(t,d,s.unstable_trailingSlashAwareDataRequests,"data");return z&&O.size>0&&P.searchParams.set("_routes",r.filter(L=>O.has(L.route.id)).map(L=>L.route.id).join(",")),[P.pathname+P.search]},[d,s.unstable_trailingSlashAwareDataRequests,h,o,c,b,r,t,f]),x=D.useMemo(()=>Kx(g,c),[g,c]),_=lv(g);return D.createElement(D.Fragment,null,S.map(O=>D.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...a})),x.map(O=>D.createElement("link",{key:O,rel:"modulepreload",href:O,...a})),_.map(({key:O,link:z})=>D.createElement("link",{key:O,nonce:a.nonce,...z})))}function sv(...t){return r=>{t.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uv&&(window.__reactRouterVersion="7.12.0")}catch{}function cv({basename:t,children:r,unstable_useTransitions:a,window:o}){let s=D.useRef();s.current==null&&(s.current=Hb({window:o,v5Compat:!0}));let c=s.current,[f,d]=D.useState({action:c.action,location:c.location}),h=D.useCallback(m=>{a===!1?d(m):D.startTransition(()=>d(m))},[a]);return D.useLayoutEffect(()=>c.listen(h),[c,h]),D.createElement(Ux,{basename:t,children:r,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:a})}var $g=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=D.forwardRef(function({onClick:r,discover:a="render",prefetch:o="none",relative:s,reloadDocument:c,replace:f,state:d,target:h,to:m,preventScrollReset:b,viewTransition:g,unstable_defaultShouldRevalidate:S,...x},_){let{basename:O,unstable_useTransitions:z}=D.useContext(it),P=typeof m=="string"&&$g.test(m),L=Ug(m,O);m=L.to;let I=vx(m,{relative:s}),[rn,J,U]=rv(o,x),X=mv(m,{replace:f,state:d,target:h,preventScrollReset:b,relative:s,viewTransition:g,unstable_defaultShouldRevalidate:S,unstable_useTransitions:z});function cn(N){r&&r(N),N.defaultPrevented||X(N)}let ln=D.createElement("a",{...x,...U,href:L.absoluteURL||I,onClick:L.isExternal||c?r:cn,ref:sv(_,J),target:h,"data-discover":!P&&a==="render"?"true":void 0});return rn&&!P?D.createElement(D.Fragment,null,ln,D.createElement(av,{page:I})):ln});ge.displayName="Link";var fv=D.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:o="",end:s=!1,style:c,to:f,viewTransition:d,children:h,...m},b){let g=Ja(f,{relative:m.relative}),S=Li(),x=D.useContext(Ho),{navigator:_,basename:O}=D.useContext(it),z=x!=null&&xv(g)&&d===!0,P=_.encodeLocation?_.encodeLocation(g).pathname:g.pathname,L=S.pathname,I=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(L=L.toLowerCase(),I=I?I.toLowerCase():null,P=P.toLowerCase()),I&&O&&(I=Ut(I,O)||I);const rn=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let J=L===P||!s&&L.startsWith(P)&&L.charAt(rn)==="/",U=I!=null&&(I===P||!s&&I.startsWith(P)&&I.charAt(P.length)==="/"),X={isActive:J,isPending:U,isTransitioning:z},cn=J?r:void 0,ln;typeof o=="function"?ln=o(X):ln=[o,J?"active":null,U?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(X):c;return D.createElement(ge,{...m,"aria-current":cn,className:ln,ref:b,style:N,to:f,viewTransition:d},typeof h=="function"?h(X):h)});fv.displayName="NavLink";var pv=D.forwardRef(({discover:t="render",fetcherKey:r,navigate:a,reloadDocument:o,replace:s,state:c,method:f=Mo,action:d,onSubmit:h,relative:m,preventScrollReset:b,viewTransition:g,unstable_defaultShouldRevalidate:S,...x},_)=>{let{unstable_useTransitions:O}=D.useContext(it),z=yv(),P=bv(d,{relative:m}),L=f.toLowerCase()==="get"?"get":"post",I=typeof d=="string"&&$g.test(d),rn=J=>{if(h&&h(J),J.defaultPrevented)return;J.preventDefault();let U=J.nativeEvent.submitter,X=U?.getAttribute("formmethod")||f,cn=()=>z(U||J.currentTarget,{fetcherKey:r,method:X,navigate:a,replace:s,state:c,relative:m,preventScrollReset:b,viewTransition:g,unstable_defaultShouldRevalidate:S});O&&a!==!1?D.startTransition(()=>cn()):cn()};return D.createElement("form",{ref:_,method:L,action:P,onSubmit:o?h:rn,...x,"data-discover":!I&&t==="render"?"true":void 0})});pv.displayName="Form";function dv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jg(t){let r=D.useContext(Lr);return Zn(r,dv(t)),r}function mv(t,{target:r,replace:a,state:o,preventScrollReset:s,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:h}={}){let m=Sx(),b=Li(),g=Ja(t,{relative:c});return D.useCallback(S=>{if(Yx(S,r)){S.preventDefault();let x=a!==void 0?a:Ya(b)===Ya(g),_=()=>m(t,{replace:x,state:o,preventScrollReset:s,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});h?D.startTransition(()=>_()):_()}},[b,m,g,a,o,r,t,s,c,f,d,h])}var hv=0,gv=()=>`__${String(++hv)}__`;function yv(){let{router:t}=Jg("useSubmit"),{basename:r}=D.useContext(it),a=Rx(),o=t.fetch,s=t.navigate;return D.useCallback(async(c,f={})=>{let{action:d,method:h,encType:m,formData:b,body:g}=Qx(c,r);if(f.navigate===!1){let S=f.fetcherKey||gv();await o(S,a,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:b,body:g,formMethod:f.method||h,formEncType:f.encType||m,flushSync:f.flushSync})}else await s(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:b,body:g,formMethod:f.method||h,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:a,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,s,r,a])}function bv(t,{relative:r}={}){let{basename:a}=D.useContext(it),o=D.useContext(ct);Zn(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),c={...Ja(t||".",{relative:r})},f=Li();if(t==null){c.search=f.search;let d=new URLSearchParams(c.search),h=d.getAll("index");if(h.some(b=>b==="")){d.delete("index"),h.filter(g=>g).forEach(g=>d.append("index",g));let b=d.toString();c.search=b?`?${b}`:""}}return(!t||t===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:Bt([a,c.pathname])),Ya(c)}function xv(t,{relative:r}={}){let a=D.useContext(Ig);Zn(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Jg("useViewTransitionState"),s=Ja(t,{relative:r});if(!a.isTransitioning)return!1;let c=Ut(a.currentLocation.pathname,o)||a.currentLocation.pathname,f=Ut(a.nextLocation.pathname,o)||a.nextLocation.pathname;return Oo(s.pathname,f)!=null||Oo(s.pathname,c)!=null}const Kg=D.createContext();function vv({children:t}){const[r,a]=D.useState(()=>{if(typeof window<"u"){const s=localStorage.getItem("theme");return s||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});D.useEffect(()=>{localStorage.setItem("theme",r),document.documentElement.classList.toggle("dark",r==="dark")},[r]);const o=()=>{a(s=>s==="dark"?"light":"dark")};return E.jsx(Kg.Provider,{value:{theme:r,toggleTheme:o},children:t})}function ji(){const t=D.useContext(Kg);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t}const Sv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,a,o)=>o?o.toUpperCase():a.toLowerCase()),Lh=t=>{const r=wv(t);return r.charAt(0).toUpperCase()+r.slice(1)},ny=(...t)=>t.filter((r,a,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===a).join(" ").trim(),Cv=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Ev={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Tv=D.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:c,iconNode:f,...d},h)=>D.createElement("svg",{ref:h,...Ev,width:r,height:r,stroke:t,strokeWidth:o?Number(a)*24/Number(r):a,className:ny("lucide",s),...!c&&!Cv(d)&&{"aria-hidden":"true"},...d},[...f.map(([m,b])=>D.createElement(m,b)),...Array.isArray(c)?c:[c]]));const ce=(t,r)=>{const a=D.forwardRef(({className:o,...s},c)=>D.createElement(Tv,{ref:c,iconNode:r,className:ny(`lucide-${Sv(Lh(t))}`,`lucide-${t}`,o),...s}));return a.displayName=Lh(t),a};const _v=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ey=ce("arrow-left",_v);const kv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Dr=ce("arrow-right",kv);const Av=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ga=ce("book-open",Av);const Pv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ty=ce("check",Pv);const Mv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Nv=ce("chevron-down",Mv);const Dv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ov=ce("chevron-right",Dv);const Rv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],zv=ce("chevron-up",Rv);const Lv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jv=ce("circle-check",Lv);const Bv=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Uv=ce("clock",Bv);const Hv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],qo=ce("code-xml",Hv);const Iv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],iy=ce("copy",Iv);const qv=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Fv=ce("github",qv);const Vv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Yv=ce("menu",Vv);const Gv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Wv=ce("moon",Gv);const Qv=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Xv=ce("rocket",Qv);const Zv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],$v=ce("sun",Zv);const Jv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Kv=ce("users",Jv);const n2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],e2=ce("x",n2),Ri=[{id:1,title:"Foundations",description:"Learn Python basics from installation to data types",posts:[{id:1,slug:"01-why-python-in-2026",title:"Why Python in 2026",description:"The case for learning Python today"},{id:2,slug:"02-installing-python",title:"Installing Python & Environment Setup",description:"Get your system ready"},{id:3,slug:"03-your-first-python-program",title:"Your First Python Program",description:"Hello, World! and beyond"},{id:4,slug:"04-python-syntax-basics",title:"Python Syntax Basics",description:"Understanding Python's structure"},{id:5,slug:"05-variables-and-naming-conventions",title:"Variables & Naming Conventions",description:"Storing and naming data"},{id:6,slug:"06-python-data-types-overview",title:"Python Data Types Overview",description:"Understanding types"},{id:7,slug:"07-numbers-in-python",title:"Numbers in Python",description:"Integers, floats, and math"},{id:8,slug:"08-strings-in-python",title:"Strings in Python",description:"Working with text"},{id:9,slug:"09-string-methods-and-f-strings",title:"String Methods & f-Strings",description:"Advanced string manipulation"},{id:10,slug:"10-type-conversion-and-type-checking",title:"Type Conversion & Type Checking",description:"Converting between types"}]},{id:2,title:"Core Data Structures",description:"Master lists, tuples, sets, and dictionaries",posts:[{id:11,slug:"11-lists",title:"Lists",description:"Ordered, mutable sequences"},{id:12,slug:"12-tuples",title:"Tuples",description:"Immutable sequences"},{id:13,slug:"13-sets",title:"Sets",description:"Unique collections"},{id:14,slug:"14-dictionaries",title:"Dictionaries",description:"Key-value mapping"},{id:15,slug:"15-nested-data-structures",title:"Nested Data Structures",description:"Complex data organization"},{id:16,slug:"16-iterating-over-collections",title:"Iterating Over Collections",description:"Looping through data"},{id:17,slug:"17-choosing-the-right-data-structure",title:"Choosing the Right Data Structure",description:"When to use what"},{id:18,slug:"18-common-data-structure-mistakes",title:"Common Data Structure Mistakes",description:"Avoid these pitfalls"},{id:19,slug:"19-practical-data-structure-examples",title:"Practical Data Structure Examples",description:"Real-world applications"},{id:20,slug:"20-mini-project-data-organizer",title:"Mini Project: Data Organizer",description:"Build a contact manager"}]},{id:3,title:"Control Flow",description:"Conditionals, loops, and program logic",posts:[{id:21,slug:"21-conditional-statements",title:"Conditional Statements",description:"if, elif, else"},{id:22,slug:"22-logical-and-comparison-operators",title:"Logical & Comparison Operators",description:"Combining conditions"},{id:23,slug:"23-for-loops",title:"for Loops",description:"Iterating with for"},{id:24,slug:"24-while-loops",title:"while Loops",description:"Conditional iteration"},{id:25,slug:"25-break-continue-pass",title:"break, continue, pass",description:"Loop control"},{id:26,slug:"26-nested-loops",title:"Nested Loops",description:"Loops within loops"},{id:27,slug:"27-loop-patterns",title:"Loop Patterns",description:"Common iteration patterns"},{id:28,slug:"28-writing-clean-conditions",title:"Writing Clean Conditions",description:"Readable conditionals"},{id:29,slug:"29-debugging-logic-errors",title:"Debugging Logic Errors",description:"Finding and fixing bugs"},{id:30,slug:"30-mini-project-cli-decision-app",title:"Mini Project: CLI Decision App",description:"Build a quiz game"}]},{id:4,title:"Functions & Modularity",description:"Organize code with functions and modules",posts:[{id:31,slug:"31-functions-basics",title:"Functions Basics",description:"Defining and calling functions"},{id:32,slug:"32-parameters-and-return-values",title:"Parameters & Return Values",description:"Function inputs and outputs"},{id:33,slug:"33-default-and-keyword-arguments",title:"Default & Keyword Arguments",description:"Flexible function calls"},{id:34,slug:"34-args-and-kwargs",title:"*args and **kwargs",description:"Variable arguments"},{id:35,slug:"35-variable-scope",title:"Variable Scope",description:"Local vs global"},{id:36,slug:"36-lambda-functions",title:"Lambda Functions",description:"Anonymous functions"},{id:37,slug:"37-docstrings-and-documentation",title:"Docstrings & Documentation",description:"Documenting your code"},{id:38,slug:"38-modules-and-packages",title:"Modules & Packages",description:"Organizing code"},{id:39,slug:"39-python-import-system",title:"Python Import System",description:"How imports work"},{id:40,slug:"40-mini-project-utility-library",title:"Mini Project: Utility Library",description:"Build a reusable toolkit"}]},{id:5,title:"Error Handling",description:"Handle errors gracefully and debug effectively",posts:[{id:41,slug:"41-understanding-python-errors",title:"Understanding Python Errors",description:"Reading error messages"},{id:42,slug:"42-try-except-else-finally",title:"try / except / else / finally",description:"Exception handling"},{id:43,slug:"43-raising-custom-exceptions",title:"Raising Custom Exceptions",description:"Creating your own errors"},{id:44,slug:"44-built-in-exceptions",title:"Built-in Exceptions",description:"Python's exception hierarchy"},{id:45,slug:"45-debugging-techniques",title:"Debugging Techniques",description:"Professional debugging"},{id:46,slug:"46-print-vs-logging",title:"print vs logging",description:"Proper output handling"},{id:47,slug:"47-defensive-programming",title:"Defensive Programming",description:"Writing robust code"},{id:48,slug:"48-error-handling-best-practices",title:"Error Handling Best Practices",description:"Industry standards"},{id:49,slug:"49-runtime-error-patterns",title:"Runtime Error Patterns",description:"Common error patterns"},{id:50,slug:"50-mini-project-fault-tolerant-script",title:"Mini Project: Fault-Tolerant Script",description:"Build resilient code"}]},{id:6,title:"Object-Oriented Programming",description:"Master classes, objects, and OOP principles",posts:[{id:51,slug:"51-oop-concepts",title:"OOP Concepts",description:"The OOP paradigm"},{id:52,slug:"52-classes-and-objects",title:"Classes & Objects",description:"Creating classes"},{id:53,slug:"53-init-and-instance-variables",title:"__init__ & Instance Variables",description:"Object initialization"},{id:54,slug:"54-class-vs-instance-variables",title:"Class vs Instance Variables",description:"Shared vs unique data"},{id:55,slug:"55-methods-and-self",title:"Methods & self",description:"Object behavior"},{id:56,slug:"56-inheritance",title:"Inheritance",description:"Extending classes"},{id:57,slug:"57-polymorphism",title:"Polymorphism",description:"Many forms, one interface"},{id:58,slug:"58-encapsulation-and-abstraction",title:"Encapsulation & Abstraction",description:"Hiding complexity"},{id:59,slug:"59-dunder-methods",title:"Dunder Methods",description:"Magic methods"},{id:60,slug:"60-mini-project-oop-application",title:"Mini Project: OOP Application",description:"Build a bank system"}]},{id:7,title:"Files & OS",description:"Work with files, paths, and the operating system",posts:[{id:61,slug:"61-reading-files",title:"Reading Files",description:"Opening and reading"},{id:62,slug:"62-writing-files",title:"Writing Files",description:"Creating and writing"},{id:63,slug:"63-csv-files",title:"CSV Files",description:"Tabular data"},{id:64,slug:"64-json-files",title:"JSON Files",description:"Structured data"},{id:65,slug:"65-file-paths",title:"File Paths",description:"Working with paths"},{id:66,slug:"66-os-module",title:"os Module",description:"Operating system interface"},{id:67,slug:"67-shutil-module",title:"shutil Module",description:"High-level file operations"},{id:68,slug:"68-environment-variables",title:"Environment Variables",description:"Configuration management"},{id:69,slug:"69-argparse-and-cli-args",title:"argparse & CLI Args",description:"Command-line interfaces"},{id:70,slug:"70-mini-project-file-automation-tool",title:"Mini Project: File Automation Tool",description:"Build a file organizer"}]},{id:8,title:"Standard Library Power",description:"Leverage Python's powerful built-in modules",posts:[{id:71,slug:"71-datetime-and-time",title:"datetime & time",description:"Working with dates"},{id:72,slug:"72-math-and-random",title:"math & random",description:"Mathematical operations"},{id:73,slug:"73-collections",title:"collections",description:"Specialized containers"},{id:74,slug:"74-itertools",title:"itertools",description:"Iterator building blocks"},{id:75,slug:"75-functools",title:"functools",description:"Higher-order functions"},{id:76,slug:"76-regular-expressions",title:"Regular Expressions",description:"Pattern matching"},{id:77,slug:"77-subprocess",title:"subprocess",description:"Running external commands"},{id:78,slug:"78-sys-module",title:"sys Module",description:"System-specific parameters"},{id:79,slug:"79-virtual-environments",title:"Virtual Environments",description:"Isolated Python environments"},{id:80,slug:"80-mini-project-productivity-tool",title:"Mini Project: Productivity Tool",description:"Build a task scheduler"}]},{id:9,title:"Testing & Packaging",description:"Write tests and package your code for distribution",posts:[{id:81,slug:"81-writing-clean-code",title:"Writing Clean Code",description:"Code quality principles"},{id:82,slug:"82-pep8-and-style",title:"PEP-8 & Style",description:"Python style guide"},{id:83,slug:"83-unittest",title:"unittest",description:"Built-in testing framework"},{id:84,slug:"84-pytest",title:"pytest",description:"Modern testing with pytest"},{id:85,slug:"85-test-driven-development",title:"Test-Driven Development",description:"TDD methodology"},{id:86,slug:"86-logging-best-practices",title:"Logging Best Practices",description:"Professional logging"},{id:87,slug:"87-packaging-python-code",title:"Packaging Python Code",description:"Creating packages"},{id:88,slug:"88-pyproject-toml",title:"pyproject.toml",description:"Modern project config"},{id:89,slug:"89-publishing-to-pypi",title:"Publishing to PyPI",description:"Share your code"},{id:90,slug:"90-mini-project-publish-a-package",title:"Mini Project: Publish a Package",description:"Create and publish"}]},{id:10,title:"Advanced Python",description:"Master advanced concepts and Python internals",posts:[{id:91,slug:"91-comprehensions",title:"Comprehensions",description:"List, dict, set comprehensions"},{id:92,slug:"92-generators-and-yield",title:"Generators & yield",description:"Lazy evaluation"},{id:93,slug:"93-iterators",title:"Iterators",description:"The iterator protocol"},{id:94,slug:"94-decorators",title:"Decorators",description:"Function wrappers"},{id:95,slug:"95-context-managers",title:"Context Managers",description:"Resource management"},{id:96,slug:"96-shallow-vs-deep-copy",title:"Shallow vs Deep Copy",description:"Object copying"},{id:97,slug:"97-memory-management",title:"Memory Management",description:"How Python handles memory"},{id:98,slug:"98-performance-optimization",title:"Performance Optimization",description:"Making code faster"},{id:99,slug:"99-python-internals",title:"Python Internals",description:"Under the hood"},{id:100,slug:"100-advanced-mini-project",title:"Advanced Mini Project",description:"Build a caching system"}]},{id:11,title:"Real-World Python",description:"Apply Python in real-world applications",posts:[{id:101,slug:"101-automation-scripts",title:"Automation Scripts",description:"Automate repetitive tasks"},{id:102,slug:"102-backend-with-fastapi",title:"Backend with FastAPI",description:"Building APIs"},{id:103,slug:"103-data-processing",title:"Data Processing",description:"ETL and pipelines"},{id:104,slug:"104-python-scripting",title:"Python Scripting",description:"System scripting"},{id:105,slug:"105-python-for-devops",title:"Python for DevOps",description:"DevOps automation"},{id:106,slug:"106-testing-tools",title:"Testing Tools",description:"Advanced testing"},{id:107,slug:"107-python-for-ai-ml",title:"Python for AI/ML",description:"Machine learning intro"},{id:108,slug:"108-cli-tool-development",title:"CLI Tool Development",description:"Professional CLIs"},{id:109,slug:"109-project-structuring",title:"Project Structuring",description:"Organizing real projects"},{id:110,slug:"110-capstone-project",title:"Capstone Project",description:"Build a complete app"}]},{id:12,title:"Career & Mastery",description:"Become a professional Python developer",posts:[{id:111,slug:"111-production-grade-python",title:"Production-Grade Python",description:"Production best practices"},{id:112,slug:"112-code-reviews-and-refactoring",title:"Code Reviews & Refactoring",description:"Improving code"},{id:113,slug:"113-project-architecture",title:"Project Architecture",description:"Designing systems"},{id:114,slug:"114-security-best-practices",title:"Security Best Practices",description:"Secure coding"},{id:115,slug:"115-interview-preparation",title:"Interview Preparation",description:"Ace the interview"},{id:116,slug:"116-system-design-basics",title:"System Design Basics",description:"Designing at scale"},{id:117,slug:"117-open-source-contribution",title:"Open-Source Contribution",description:"Contributing to OSS"},{id:118,slug:"118-building-a-python-portfolio",title:"Building a Python Portfolio",description:"Showcase your work"},{id:119,slug:"119-python-career-roadmap-2026",title:"Python Career Roadmap 2026",description:"Career paths"},{id:120,slug:"120-series-wrap-up-and-next-steps",title:"Series Wrap-Up & Next Steps",description:"What's next"}]}],Ro={name:"Sitharaj Seenivasan",series:"Python Programming Learning 2026"};function t2(){const[t,r]=D.useState(!1),{theme:a,toggleTheme:o}=ji();return E.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${a==="dark"?"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900":"bg-gradient-to-br from-slate-50 via-white to-slate-100"}`,children:[E.jsx("header",{className:`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${a==="dark"?"border-slate-700/50 bg-slate-900/80":"border-slate-200 bg-white/80"}`,children:E.jsxs("div",{className:"mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[E.jsx("button",{onClick:()=>r(!t),className:`rounded-lg p-2 transition lg:hidden ${a==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:t?E.jsx(e2,{size:22}):E.jsx(Yv,{size:22})}),E.jsxs(ge,{to:"/",className:"flex items-center gap-2 sm:gap-3",children:[E.jsxs("div",{className:"flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25",children:[E.jsx(Ga,{size:18,className:"sm:hidden"}),E.jsx(Ga,{size:20,className:"hidden sm:block"})]}),E.jsxs("div",{className:"hidden xs:block",children:[E.jsx("h1",{className:`text-base sm:text-lg font-bold ${a==="dark"?"text-white":"text-slate-900"}`,children:"Python Learning"}),E.jsx("p",{className:`text-xs ${a==="dark"?"text-slate-400":"text-slate-500"}`,children:"2026 Edition"})]})]})]}),E.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[E.jsx("button",{onClick:o,className:`rounded-lg p-2 transition ${a==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-yellow-400":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,"aria-label":"Toggle theme",children:a==="dark"?E.jsx($v,{size:20}):E.jsx(Wv,{size:20})}),E.jsxs("a",{href:"https://github.com/sitharaj88/python-programming-learning-2026",target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${a==="dark"?"bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white":"bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"}`,children:[E.jsx(Fv,{size:18}),E.jsx("span",{className:"hidden sm:inline",children:"GitHub"})]})]})]})}),E.jsxs("div",{className:"mx-auto flex max-w-7xl",children:[E.jsx("aside",{className:`fixed inset-y-0 left-0 z-40 w-64 sm:w-72 transform border-r backdrop-blur-xl transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${t?"translate-x-0":"-translate-x-full"} ${a==="dark"?"border-slate-700/50 bg-slate-900/95":"border-slate-200 bg-white/95"}`,style:{top:"56px",height:"calc(100vh - 56px)"},children:E.jsx("nav",{className:"h-full overflow-y-auto p-3 sm:p-4",children:E.jsx("div",{className:"space-y-3 sm:space-y-4",children:Ri.map(s=>E.jsxs("div",{className:`rounded-xl p-2.5 sm:p-3 ${a==="dark"?"bg-slate-800/50":"bg-slate-100"}`,children:[E.jsxs(ge,{to:`/phase/${s.id}`,onClick:()=>r(!1),className:`group flex items-center justify-between text-xs sm:text-sm font-semibold transition ${a==="dark"?"text-slate-200 hover:text-emerald-400":"text-slate-700 hover:text-emerald-600"}`,children:[E.jsxs("span",{className:"flex items-center gap-2",children:[E.jsx("span",{className:"flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-xs font-bold text-emerald-400",children:s.id}),E.jsx("span",{className:"truncate",children:s.title})]}),E.jsx(Ov,{size:14,className:`flex-shrink-0 transition group-hover:translate-x-1 ${a==="dark"?"text-slate-500 group-hover:text-emerald-400":"text-slate-400 group-hover:text-emerald-600"}`})]}),E.jsxs("p",{className:"mt-1 text-xs truncate text-slate-500",children:[s.posts.length," posts"]})]},s.id))})})}),t&&E.jsx("div",{className:"fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden",style:{top:"56px"},onClick:()=>r(!1)}),E.jsx("main",{className:"flex-1 min-w-0 px-3 py-4 sm:px-6 sm:py-8 lg:px-8",children:E.jsx(Bx,{})})]}),E.jsx("footer",{className:`border-t transition-colors duration-300 ${a==="dark"?"border-slate-700/50 bg-slate-900/50":"border-slate-200 bg-slate-50"}`,children:E.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:py-8 text-center sm:px-6 lg:px-8",children:E.jsxs("p",{className:`text-xs sm:text-sm ${a==="dark"?"text-slate-400":"text-slate-600"}`,children:[Ro.series," • By ",E.jsx("span",{className:"text-emerald-500",children:Ro.name})]})})})]})}const i2=[{icon:Ga,label:"Posts",value:"120"},{icon:qo,label:"Examples",value:"360+"},{icon:Kv,label:"Phases",value:"12"},{icon:Xv,label:"Projects",value:"12"}],r2=["Comprehensive book-chapter-level tutorials","Executable Python examples in every post","Progressive difficulty from beginner to expert","Real-world applications and projects","PEP-8 compliant, professionally written code","Career-focused content for 2026 and beyond"];function a2(){const{theme:t}=ji();return E.jsxs("div",{className:"space-y-8 sm:space-y-16",children:[E.jsxs("section",{className:"relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 p-5 sm:p-8 md:p-12 text-white shadow-2xl",children:[E.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-30"}),E.jsxs("div",{className:"relative z-10",children:[E.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-emerald-200",children:[E.jsx("span",{className:"rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur",children:"2026 Edition"}),E.jsx("span",{className:"text-xs sm:text-sm",children:"• 120 Complete Posts"})]}),E.jsxs("h1",{className:"mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",children:["Python Programming",E.jsx("br",{}),E.jsx("span",{className:"text-emerald-200",children:"Learning Journey"})]}),E.jsxs("p",{className:"mt-4 max-w-2xl text-sm sm:text-lg md:text-xl text-white/80",children:["A comprehensive, structured curriculum from absolute beginner to professional developer. Not a blog. Not short posts. A ",E.jsx("strong",{children:"permanent reference"}),"."]}),E.jsxs("div",{className:"mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4",children:[E.jsxs(ge,{to:"/phase/1",className:"group flex items-center gap-2 rounded-xl bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-emerald-600 shadow-lg transition hover:bg-emerald-50 hover:shadow-xl",children:["Start Learning",E.jsx(Dr,{size:16,className:"transition group-hover:translate-x-1"})]}),E.jsx("a",{href:"https://github.com/sitharaj88/python-programming-learning-2026",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white backdrop-blur transition hover:bg-white/20",children:"View on GitHub"})]})]})]}),E.jsx("section",{className:"grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",children:i2.map(({icon:r,label:a,value:o})=>E.jsxs("div",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 text-center backdrop-blur transition-colors ${t==="dark"?"border-slate-700/50 bg-slate-800/50":"border-slate-200 bg-white shadow-sm"}`,children:[E.jsx(r,{className:"mx-auto h-6 w-6 sm:h-8 sm:w-8 text-emerald-500"}),E.jsx("p",{className:`mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:o}),E.jsx("p",{className:`text-xs sm:text-sm ${t==="dark"?"text-slate-400":"text-slate-600"}`,children:a})]},a))}),E.jsxs("section",{className:`rounded-xl sm:rounded-2xl border p-5 sm:p-8 transition-colors ${t==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white shadow-sm"}`,children:[E.jsx("h2",{className:`text-lg sm:text-2xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:"What Makes This Different"}),E.jsx("div",{className:"mt-4 sm:mt-6 grid gap-2 sm:gap-3 md:grid-cols-2",children:r2.map(r=>E.jsxs("div",{className:"flex items-start gap-2 sm:gap-3",children:[E.jsx(jv,{className:"mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-emerald-500"}),E.jsx("span",{className:`text-sm sm:text-base ${t==="dark"?"text-slate-300":"text-slate-700"}`,children:r})]},r))})]}),E.jsxs("section",{children:[E.jsx("h2",{className:`mb-4 sm:mb-6 text-lg sm:text-2xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:"12-Phase Curriculum"}),E.jsx("div",{className:"grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Ri.map(r=>E.jsxs(ge,{to:`/phase/${r.id}`,className:`group relative overflow-hidden rounded-xl sm:rounded-2xl border p-4 sm:p-6 transition ${t==="dark"?"border-slate-700/50 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800":"border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-md"}`,children:[E.jsx("div",{className:"absolute -right-4 -top-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-2xl transition group-hover:from-emerald-500/20 group-hover:to-cyan-500/20"}),E.jsxs("div",{className:"relative",children:[E.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[E.jsx("span",{className:"flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm sm:text-lg font-bold text-white shadow-lg shadow-emerald-500/25",children:r.id}),E.jsxs("div",{className:"min-w-0",children:[E.jsx("h3",{className:`font-semibold text-sm sm:text-base truncate ${t==="dark"?"text-white":"text-slate-900"}`,children:r.title}),E.jsxs("p",{className:`text-xs ${t==="dark"?"text-slate-400":"text-slate-500"}`,children:["Posts ",(r.id-1)*10+1,"-",r.id*10]})]})]}),E.jsx("p",{className:`mt-2 sm:mt-3 text-xs sm:text-sm line-clamp-2 ${t==="dark"?"text-slate-400":"text-slate-600"}`,children:r.description}),E.jsxs("div",{className:"mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-500 transition group-hover:gap-3",children:[E.jsx("span",{children:"View posts"}),E.jsx(Dr,{size:14})]})]})]},r.id))})]}),E.jsxs("section",{className:`rounded-xl sm:rounded-2xl border p-5 sm:p-8 text-center ${t==="dark"?"border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10":"border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50"}`,children:[E.jsx("h2",{className:`text-lg sm:text-2xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:"Ready to Master Python?"}),E.jsx("p",{className:`mt-2 text-sm sm:text-base ${t==="dark"?"text-slate-400":"text-slate-600"}`,children:"Start with Phase 1 and work your way through all 120 comprehensive posts."}),E.jsxs(ge,{to:"/phase/1",className:"mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-xl hover:shadow-emerald-500/30",children:["Begin Your Journey",E.jsx(Dr,{size:16})]})]}),E.jsxs("section",{className:"text-center text-xs sm:text-sm text-slate-500",children:[E.jsxs("p",{children:["Created by ",E.jsx("span",{className:"text-emerald-500",children:Ro.name})]}),E.jsx("p",{className:"mt-1",children:Ro.series})]})]})}function l2(){const{phaseId:t}=Yg(),{theme:r}=ji(),a=Ri.find(c=>c.id===parseInt(t));if(!a)return E.jsxs("div",{className:"text-center py-16",children:[E.jsx("h1",{className:`text-2xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Phase not found"}),E.jsx(ge,{to:"/",className:"mt-4 inline-block text-emerald-500 hover:underline",children:"Go back home"})]});const o=Ri.find(c=>c.id===a.id-1),s=Ri.find(c=>c.id===a.id+1);return E.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[E.jsxs("nav",{className:`flex items-center gap-2 text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:[E.jsx(ge,{to:"/",className:"hover:text-emerald-500",children:"Home"}),E.jsx("span",{children:"/"}),E.jsxs("span",{className:r==="dark"?"text-white":"text-slate-900",children:["Phase ",a.id]})]}),E.jsxs("header",{className:`rounded-xl sm:rounded-2xl border p-5 sm:p-8 transition-colors ${r==="dark"?"border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-800/50":"border-slate-200 bg-white shadow-sm"}`,children:[E.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[E.jsx("div",{className:"flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-xl sm:text-2xl font-bold text-white shadow-lg shadow-emerald-500/25",children:a.id}),E.jsxs("div",{children:[E.jsxs("p",{className:"text-xs sm:text-sm font-medium text-emerald-500",children:["Phase ",a.id," of 12"]}),E.jsx("h1",{className:`text-xl sm:text-3xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:a.title})]})]}),E.jsx("p",{className:`mt-3 sm:mt-4 text-sm sm:text-lg ${r==="dark"?"text-slate-300":"text-slate-600"}`,children:a.description}),E.jsxs("div",{className:`mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:[E.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[E.jsx(Ga,{size:14,className:"text-emerald-500"}),E.jsxs("span",{children:[a.posts.length," posts"]})]}),E.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[E.jsx(qo,{size:14,className:"text-emerald-500"}),E.jsxs("span",{children:[a.posts.length*3,"+ examples"]})]}),E.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[E.jsx(Uv,{size:14,className:"text-emerald-500"}),E.jsxs("span",{children:["~",a.posts.length*15," min read"]})]})]})]}),E.jsxs("section",{children:[E.jsx("h2",{className:`mb-3 sm:mb-4 text-lg sm:text-xl font-semibold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Posts in this Phase"}),E.jsx("div",{className:"space-y-2 sm:space-y-3",children:a.posts.map(c=>E.jsxs(ge,{to:`/post/${c.id}`,className:`group flex items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border p-3 sm:p-4 transition ${r==="dark"?"border-slate-700/50 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800":"border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-sm"}`,children:[E.jsx("div",{className:`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-lg font-bold transition ${r==="dark"?"bg-slate-700/50 text-slate-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-400":"bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-600"}`,children:String(c.id).padStart(2,"0")}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsx("h3",{className:`font-medium text-sm sm:text-base truncate transition ${r==="dark"?"text-white group-hover:text-emerald-400":"text-slate-900 group-hover:text-emerald-600"}`,children:c.title}),E.jsx("p",{className:`text-xs sm:text-sm truncate ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:c.description})]}),E.jsx(Dr,{size:16,className:`flex-shrink-0 transition group-hover:translate-x-1 ${r==="dark"?"text-slate-500 group-hover:text-emerald-400":"text-slate-400 group-hover:text-emerald-600"}`})]},c.id))})]}),E.jsxs("nav",{className:`flex items-center justify-between border-t pt-4 sm:pt-6 ${r==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[o?E.jsxs(ge,{to:`/phase/${o.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[E.jsx(ey,{size:14,className:"transition group-hover:-translate-x-1"}),E.jsxs("span",{className:"hidden sm:inline",children:["Phase ",o.id,": "]}),o.title]}):E.jsx("div",{}),s&&E.jsxs(ge,{to:`/phase/${s.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[E.jsxs("span",{className:"hidden sm:inline",children:["Phase ",s.id,": "]}),s.title,E.jsx(Dr,{size:14,className:"transition group-hover:translate-x-1"})]})]})]})}function o2(t,r){const a={};return(t[t.length-1]===""?[...t,""]:t).join((a.padRight?" ":"")+","+(a.padLeft===!1?"":" ")).trim()}const s2=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,u2=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,c2={};function jh(t,r){return(c2.jsx?u2:s2).test(t)}const f2=/[ \t\n\f\r]/g;function p2(t){return typeof t=="object"?t.type==="text"?Bh(t.value):!1:Bh(t)}function Bh(t){return t.replace(f2,"")===""}class Ka{constructor(r,a,o){this.normal=a,this.property=r,o&&(this.space=o)}}Ka.prototype.normal={};Ka.prototype.property={};Ka.prototype.space=void 0;function ry(t,r){const a={},o={};for(const s of t)Object.assign(a,s.property),Object.assign(o,s.normal);return new Ka(a,o,r)}function Ic(t){return t.toLowerCase()}class Oe{constructor(r,a){this.attribute=a,this.property=r}}Oe.prototype.attribute="";Oe.prototype.booleanish=!1;Oe.prototype.boolean=!1;Oe.prototype.commaOrSpaceSeparated=!1;Oe.prototype.commaSeparated=!1;Oe.prototype.defined=!1;Oe.prototype.mustUseProperty=!1;Oe.prototype.number=!1;Oe.prototype.overloadedBoolean=!1;Oe.prototype.property="";Oe.prototype.spaceSeparated=!1;Oe.prototype.space=void 0;let d2=0;const wn=Bi(),ae=Bi(),qc=Bi(),$=Bi(),Yn=Bi(),Or=Bi(),qe=Bi();function Bi(){return 2**++d2}const Fc=Object.freeze(Object.defineProperty({__proto__:null,boolean:wn,booleanish:ae,commaOrSpaceSeparated:qe,commaSeparated:Or,number:$,overloadedBoolean:qc,spaceSeparated:Yn},Symbol.toStringTag,{value:"Module"})),xc=Object.keys(Fc);class lf extends Oe{constructor(r,a,o,s){let c=-1;if(super(r,a),Uh(this,"space",s),typeof o=="number")for(;++c<xc.length;){const f=xc[c];Uh(this,xc[c],(o&Fc[f])===Fc[f])}}}lf.prototype.defined=!0;function Uh(t,r,a){a&&(t[r]=a)}function jr(t){const r={},a={};for(const[o,s]of Object.entries(t.properties)){const c=new lf(o,t.transform(t.attributes||{},o),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(c.mustUseProperty=!0),r[o]=c,a[Ic(o)]=o,a[Ic(c.attribute)]=o}return new Ka(r,a,t.space)}const ay=jr({properties:{ariaActiveDescendant:null,ariaAtomic:ae,ariaAutoComplete:null,ariaBusy:ae,ariaChecked:ae,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:Yn,ariaCurrent:null,ariaDescribedBy:Yn,ariaDetails:null,ariaDisabled:ae,ariaDropEffect:Yn,ariaErrorMessage:null,ariaExpanded:ae,ariaFlowTo:Yn,ariaGrabbed:ae,ariaHasPopup:null,ariaHidden:ae,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Yn,ariaLevel:$,ariaLive:null,ariaModal:ae,ariaMultiLine:ae,ariaMultiSelectable:ae,ariaOrientation:null,ariaOwns:Yn,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:ae,ariaReadOnly:ae,ariaRelevant:null,ariaRequired:ae,ariaRoleDescription:Yn,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:ae,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null},transform(t,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function ly(t,r){return r in t?t[r]:r}function oy(t,r){return ly(t,r.toLowerCase())}const m2=jr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Or,acceptCharset:Yn,accessKey:Yn,action:null,allow:null,allowFullScreen:wn,allowPaymentRequest:wn,allowUserMedia:wn,alt:null,as:null,async:wn,autoCapitalize:null,autoComplete:Yn,autoFocus:wn,autoPlay:wn,blocking:Yn,capture:null,charSet:null,checked:wn,cite:null,className:Yn,cols:$,colSpan:null,content:null,contentEditable:ae,controls:wn,controlsList:Yn,coords:$|Or,crossOrigin:null,data:null,dateTime:null,decoding:null,default:wn,defer:wn,dir:null,dirName:null,disabled:wn,download:qc,draggable:ae,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:wn,formTarget:null,headers:Yn,height:$,hidden:qc,high:$,href:null,hrefLang:null,htmlFor:Yn,httpEquiv:Yn,id:null,imageSizes:null,imageSrcSet:null,inert:wn,inputMode:null,integrity:null,is:null,isMap:wn,itemId:null,itemProp:Yn,itemRef:Yn,itemScope:wn,itemType:Yn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:wn,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:wn,muted:wn,name:null,nonce:null,noModule:wn,noValidate:wn,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:wn,optimum:$,pattern:null,ping:Yn,placeholder:null,playsInline:wn,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:wn,referrerPolicy:null,rel:Yn,required:wn,reversed:wn,rows:$,rowSpan:$,sandbox:Yn,scope:null,scoped:wn,seamless:wn,selected:wn,shadowRootClonable:wn,shadowRootDelegatesFocus:wn,shadowRootMode:null,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:ae,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:wn,useMap:null,value:ae,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Yn,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:wn,declare:wn,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:wn,noHref:wn,noShade:wn,noWrap:wn,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:ae,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:wn,disableRemotePlayback:wn,prefix:null,property:null,results:$,security:null,unselectable:null},space:"html",transform:oy}),h2=jr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qe,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:Yn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:wn,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Or,g2:Or,glyphName:Or,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:qe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Yn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qe,rev:qe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qe,requiredFeatures:qe,requiredFonts:qe,requiredFormats:qe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:qe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qe,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ly}),sy=jr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,r){return"xlink:"+r.slice(5).toLowerCase()}}),uy=jr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:oy}),cy=jr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,r){return"xml:"+r.slice(3).toLowerCase()}}),g2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},y2=/[A-Z]/g,Hh=/-[a-z]/g,b2=/^data[-\w.:]+$/i;function x2(t,r){const a=Ic(r);let o=r,s=Oe;if(a in t.normal)return t.property[t.normal[a]];if(a.length>4&&a.slice(0,4)==="data"&&b2.test(r)){if(r.charAt(4)==="-"){const c=r.slice(5).replace(Hh,S2);o="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=r.slice(4);if(!Hh.test(c)){let f=c.replace(y2,v2);f.charAt(0)!=="-"&&(f="-"+f),r="data"+f}}s=lf}return new s(o,r)}function v2(t){return"-"+t.toLowerCase()}function S2(t){return t.charAt(1).toUpperCase()}const w2=ry([ay,m2,sy,uy,cy],"html"),of=ry([ay,h2,sy,uy,cy],"svg");function C2(t){return t.join(" ").trim()}var kr={},vc,Ih;function E2(){if(Ih)return vc;Ih=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,a=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,d=/^\s+|\s+$/g,h=`
`,m="/",b="*",g="",S="comment",x="declaration";function _(z,P){if(typeof z!="string")throw new TypeError("First argument must be a string");if(!z)return[];P=P||{};var L=1,I=1;function rn(an){var Q=an.match(r);Q&&(L+=Q.length);var R=an.lastIndexOf(h);I=~R?an.length-R:I+an.length}function J(){var an={line:L,column:I};return function(Q){return Q.position=new U(an),ln(),Q}}function U(an){this.start=an,this.end={line:L,column:I},this.source=P.source}U.prototype.content=z;function X(an){var Q=new Error(P.source+":"+L+":"+I+": "+an);if(Q.reason=an,Q.filename=P.source,Q.line=L,Q.column=I,Q.source=z,!P.silent)throw Q}function cn(an){var Q=an.exec(z);if(Q){var R=Q[0];return rn(R),z=z.slice(R.length),Q}}function ln(){cn(a)}function N(an){var Q;for(an=an||[];Q=en();)Q!==!1&&an.push(Q);return an}function en(){var an=J();if(!(m!=z.charAt(0)||b!=z.charAt(1))){for(var Q=2;g!=z.charAt(Q)&&(b!=z.charAt(Q)||m!=z.charAt(Q+1));)++Q;if(Q+=2,g===z.charAt(Q-1))return X("End of comment missing");var R=z.slice(2,Q-2);return I+=2,rn(R),z=z.slice(Q),I+=2,an({type:S,comment:R})}}function tn(){var an=J(),Q=cn(o);if(Q){if(en(),!cn(s))return X("property missing ':'");var R=cn(c),Z=an({type:x,property:O(Q[0].replace(t,g)),value:R?O(R[0].replace(t,g)):g});return cn(f),Z}}function bn(){var an=[];N(an);for(var Q;Q=tn();)Q!==!1&&(an.push(Q),N(an));return an}return ln(),bn()}function O(z){return z?z.replace(d,g):g}return vc=_,vc}var qh;function T2(){if(qh)return kr;qh=1;var t=kr&&kr.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(kr,"__esModule",{value:!0}),kr.default=a;const r=t(E2());function a(o,s){let c=null;if(!o||typeof o!="string")return c;const f=(0,r.default)(o),d=typeof s=="function";return f.forEach(h=>{if(h.type!=="declaration")return;const{property:m,value:b}=h;d?s(m,b,h):b&&(c=c||{},c[m]=b)}),c}return kr}var za={},Fh;function _2(){if(Fh)return za;Fh=1,Object.defineProperty(za,"__esModule",{value:!0}),za.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,a=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,c=function(m){return!m||a.test(m)||t.test(m)},f=function(m,b){return b.toUpperCase()},d=function(m,b){return"".concat(b,"-")},h=function(m,b){return b===void 0&&(b={}),c(m)?m:(m=m.toLowerCase(),b.reactCompat?m=m.replace(s,d):m=m.replace(o,d),m.replace(r,f))};return za.camelCase=h,za}var La,Vh;function k2(){if(Vh)return La;Vh=1;var t=La&&La.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},r=t(T2()),a=_2();function o(s,c){var f={};return!s||typeof s!="string"||(0,r.default)(s,function(d,h){d&&h&&(f[(0,a.camelCase)(d,c)]=h)}),f}return o.default=o,La=o,La}var A2=k2();const P2=Jc(A2),fy=py("end"),sf=py("start");function py(t){return r;function r(a){const o=a&&a.position&&a.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function M2(t){const r=sf(t),a=fy(t);if(r&&a)return{start:r,end:a}}function Ia(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Yh(t.position):"start"in t||"end"in t?Yh(t):"line"in t||"column"in t?Vc(t):""}function Vc(t){return Gh(t&&t.line)+":"+Gh(t&&t.column)}function Yh(t){return Vc(t&&t.start)+"-"+Vc(t&&t.end)}function Gh(t){return t&&typeof t=="number"?t:1}class xe extends Error{constructor(r,a,o){super(),typeof a=="string"&&(o=a,a=void 0);let s="",c={},f=!1;if(a&&("line"in a&&"column"in a?c={place:a}:"start"in a&&"end"in a?c={place:a}:"type"in a?c={ancestors:[a],place:a.position}:c={...a}),typeof r=="string"?s=r:!c.cause&&r&&(f=!0,s=r.message,c.cause=r),!c.ruleId&&!c.source&&typeof o=="string"){const h=o.indexOf(":");h===-1?c.ruleId=o:(c.source=o.slice(0,h),c.ruleId=o.slice(h+1))}if(!c.place&&c.ancestors&&c.ancestors){const h=c.ancestors[c.ancestors.length-1];h&&(c.place=h.position)}const d=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=d?d.line:void 0,this.name=Ia(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=f&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xe.prototype.file="";xe.prototype.name="";xe.prototype.reason="";xe.prototype.message="";xe.prototype.stack="";xe.prototype.column=void 0;xe.prototype.line=void 0;xe.prototype.ancestors=void 0;xe.prototype.cause=void 0;xe.prototype.fatal=void 0;xe.prototype.place=void 0;xe.prototype.ruleId=void 0;xe.prototype.source=void 0;const uf={}.hasOwnProperty,N2=new Map,D2=/[A-Z]/g,O2=new Set(["table","tbody","thead","tfoot","tr"]),R2=new Set(["td","th"]),dy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function z2(t,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const a=r.filePath||void 0;let o;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=F2(a,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=q2(a,r.jsx,r.jsxs)}const s={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:o,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:a,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?of:w2,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},c=my(s,t,void 0);return c&&typeof c!="string"?c:s.create(t,s.Fragment,{children:c||void 0},void 0)}function my(t,r,a){if(r.type==="element")return L2(t,r,a);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return j2(t,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return U2(t,r,a);if(r.type==="mdxjsEsm")return B2(t,r);if(r.type==="root")return H2(t,r,a);if(r.type==="text")return I2(t,r)}function L2(t,r,a){const o=t.schema;let s=o;r.tagName.toLowerCase()==="svg"&&o.space==="html"&&(s=of,t.schema=s),t.ancestors.push(r);const c=gy(t,r.tagName,!1),f=V2(t,r);let d=ff(t,r);return O2.has(r.tagName)&&(d=d.filter(function(h){return typeof h=="string"?!p2(h):!0})),hy(t,f,c,r),cf(f,d),t.ancestors.pop(),t.schema=o,t.create(r,c,f,a)}function j2(t,r){if(r.data&&r.data.estree&&t.evaluater){const o=r.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}Wa(t,r.position)}function B2(t,r){if(r.data&&r.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(r.data.estree);Wa(t,r.position)}function U2(t,r,a){const o=t.schema;let s=o;r.name==="svg"&&o.space==="html"&&(s=of,t.schema=s),t.ancestors.push(r);const c=r.name===null?t.Fragment:gy(t,r.name,!0),f=Y2(t,r),d=ff(t,r);return hy(t,f,c,r),cf(f,d),t.ancestors.pop(),t.schema=o,t.create(r,c,f,a)}function H2(t,r,a){const o={};return cf(o,ff(t,r)),t.create(r,t.Fragment,o,a)}function I2(t,r){return r.value}function hy(t,r,a,o){typeof a!="string"&&a!==t.Fragment&&t.passNode&&(r.node=o)}function cf(t,r){if(r.length>0){const a=r.length>1?r:r[0];a&&(t.children=a)}}function q2(t,r,a){return o;function o(s,c,f,d){const m=Array.isArray(f.children)?a:r;return d?m(c,f,d):m(c,f)}}function F2(t,r){return a;function a(o,s,c,f){const d=Array.isArray(c.children),h=sf(o);return r(s,c,f,d,{columnNumber:h?h.column-1:void 0,fileName:t,lineNumber:h?h.line:void 0},void 0)}}function V2(t,r){const a={};let o,s;for(s in r.properties)if(s!=="children"&&uf.call(r.properties,s)){const c=G2(t,s,r.properties[s]);if(c){const[f,d]=c;t.tableCellAlignToStyle&&f==="align"&&typeof d=="string"&&R2.has(r.tagName)?o=d:a[f]=d}}if(o){const c=a.style||(a.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return a}function Y2(t,r){const a={};for(const o of r.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const c=o.data.estree.body[0];c.type;const f=c.expression;f.type;const d=f.properties[0];d.type,Object.assign(a,t.evaluater.evaluateExpression(d.argument))}else Wa(t,r.position);else{const s=o.name;let c;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const d=o.value.data.estree.body[0];d.type,c=t.evaluater.evaluateExpression(d.expression)}else Wa(t,r.position);else c=o.value===null?!0:o.value;a[s]=c}return a}function ff(t,r){const a=[];let o=-1;const s=t.passKeys?new Map:N2;for(;++o<r.children.length;){const c=r.children[o];let f;if(t.passKeys){const h=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(h){const m=s.get(h)||0;f=h+"-"+m,s.set(h,m+1)}}const d=my(t,c,f);d!==void 0&&a.push(d)}return a}function G2(t,r,a){const o=x2(t.schema,r);if(!(a==null||typeof a=="number"&&Number.isNaN(a))){if(Array.isArray(a)&&(a=o.commaSeparated?o2(a):C2(a)),o.property==="style"){let s=typeof a=="object"?a:W2(t,String(a));return t.stylePropertyNameCase==="css"&&(s=Q2(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&o.space?g2[o.property]||o.property:o.attribute,a]}}function W2(t,r){try{return P2(r,{reactCompat:!0})}catch(a){if(t.ignoreInvalidStyle)return{};const o=a,s=new xe("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=dy+"#cannot-parse-style-attribute",s}}function gy(t,r,a){let o;if(!a)o={type:"Literal",value:r};else if(r.includes(".")){const s=r.split(".");let c=-1,f;for(;++c<s.length;){const d=jh(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};f=f?{type:"MemberExpression",object:f,property:d,computed:!!(c&&d.type==="Literal"),optional:!1}:d}o=f}else o=jh(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(o.type==="Literal"){const s=o.value;return uf.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(o);Wa(t)}function Wa(t,r){const a=new xe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw a.file=t.filePath||void 0,a.url=dy+"#cannot-handle-mdx-estrees-without-createevaluater",a}function Q2(t){const r={};let a;for(a in t)uf.call(t,a)&&(r[X2(a)]=t[a]);return r}function X2(t){let r=t.replace(D2,Z2);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function Z2(t){return"-"+t.toLowerCase()}const Sc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},$2={};function pf(t,r){const a=$2,o=typeof a.includeImageAlt=="boolean"?a.includeImageAlt:!0,s=typeof a.includeHtml=="boolean"?a.includeHtml:!0;return yy(t,o,s)}function yy(t,r,a){if(J2(t)){if("value"in t)return t.type==="html"&&!a?"":t.value;if(r&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Wh(t.children,r,a)}return Array.isArray(t)?Wh(t,r,a):""}function Wh(t,r,a){const o=[];let s=-1;for(;++s<t.length;)o[s]=yy(t[s],r,a);return o.join("")}function J2(t){return!!(t&&typeof t=="object")}const Qh=document.createElement("i");function df(t){const r="&"+t+";";Qh.innerHTML=r;const a=Qh.textContent;return a.charCodeAt(a.length-1)===59&&t!=="semi"||a===r?!1:a}function Ve(t,r,a,o){const s=t.length;let c=0,f;if(r<0?r=-r>s?0:s+r:r=r>s?s:r,a=a>0?a:0,o.length<1e4)f=Array.from(o),f.unshift(r,a),t.splice(...f);else for(a&&t.splice(r,a);c<o.length;)f=o.slice(c,c+1e4),f.unshift(r,0),t.splice(...f),c+=1e4,r+=1e4}function tt(t,r){return t.length>0?(Ve(t,t.length,0,r),t):r}const Xh={}.hasOwnProperty;function by(t){const r={};let a=-1;for(;++a<t.length;)K2(r,t[a]);return r}function K2(t,r){let a;for(a in r){const s=(Xh.call(t,a)?t[a]:void 0)||(t[a]={}),c=r[a];let f;if(c)for(f in c){Xh.call(s,f)||(s[f]=[]);const d=c[f];nS(s[f],Array.isArray(d)?d:d?[d]:[])}}}function nS(t,r){let a=-1;const o=[];for(;++a<r.length;)(r[a].add==="after"?t:o).push(r[a]);Ve(t,0,0,o)}function xy(t,r){const a=Number.parseInt(t,r);return a<9||a===11||a>13&&a<32||a>126&&a<160||a>55295&&a<57344||a>64975&&a<65008||(a&65535)===65535||(a&65535)===65534||a>1114111?"�":String.fromCodePoint(a)}function st(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ce=mi(/[A-Za-z]/),be=mi(/[\dA-Za-z]/),eS=mi(/[#-'*+\--9=?A-Z^-~]/);function zo(t){return t!==null&&(t<32||t===127)}const Yc=mi(/\d/),tS=mi(/[\dA-Fa-f]/),iS=mi(/[!-/:-@[-`{-~]/);function dn(t){return t!==null&&t<-2}function Vn(t){return t!==null&&(t<0||t===32)}function _n(t){return t===-2||t===-1||t===32}const Fo=mi(new RegExp("\\p{P}|\\p{S}","u")),zi=mi(/\s/);function mi(t){return r;function r(a){return a!==null&&a>-1&&t.test(String.fromCharCode(a))}}function Br(t){const r=[];let a=-1,o=0,s=0;for(;++a<t.length;){const c=t.charCodeAt(a);let f="";if(c===37&&be(t.charCodeAt(a+1))&&be(t.charCodeAt(a+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(f=String.fromCharCode(c));else if(c>55295&&c<57344){const d=t.charCodeAt(a+1);c<56320&&d>56319&&d<57344?(f=String.fromCharCode(c,d),s=1):f="�"}else f=String.fromCharCode(c);f&&(r.push(t.slice(o,a),encodeURIComponent(f)),o=a+s+1,f=""),s&&(a+=s,s=0)}return r.join("")+t.slice(o)}function Nn(t,r,a,o){const s=o?o-1:Number.POSITIVE_INFINITY;let c=0;return f;function f(h){return _n(h)?(t.enter(a),d(h)):r(h)}function d(h){return _n(h)&&c++<s?(t.consume(h),d):(t.exit(a),r(h))}}const rS={tokenize:aS};function aS(t){const r=t.attempt(this.parser.constructs.contentInitial,o,s);let a;return r;function o(d){if(d===null){t.consume(d);return}return t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),Nn(t,r,"linePrefix")}function s(d){return t.enter("paragraph"),c(d)}function c(d){const h=t.enter("chunkText",{contentType:"text",previous:a});return a&&(a.next=h),a=h,f(d)}function f(d){if(d===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(d);return}return dn(d)?(t.consume(d),t.exit("chunkText"),c):(t.consume(d),f)}}const lS={tokenize:oS},Zh={tokenize:sS};function oS(t){const r=this,a=[];let o=0,s,c,f;return d;function d(I){if(o<a.length){const rn=a[o];return r.containerState=rn[1],t.attempt(rn[0].continuation,h,m)(I)}return m(I)}function h(I){if(o++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,s&&L();const rn=r.events.length;let J=rn,U;for(;J--;)if(r.events[J][0]==="exit"&&r.events[J][1].type==="chunkFlow"){U=r.events[J][1].end;break}P(o);let X=rn;for(;X<r.events.length;)r.events[X][1].end={...U},X++;return Ve(r.events,J+1,0,r.events.slice(rn)),r.events.length=X,m(I)}return d(I)}function m(I){if(o===a.length){if(!s)return S(I);if(s.currentConstruct&&s.currentConstruct.concrete)return _(I);r.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return r.containerState={},t.check(Zh,b,g)(I)}function b(I){return s&&L(),P(o),S(I)}function g(I){return r.parser.lazy[r.now().line]=o!==a.length,f=r.now().offset,_(I)}function S(I){return r.containerState={},t.attempt(Zh,x,_)(I)}function x(I){return o++,a.push([r.currentConstruct,r.containerState]),S(I)}function _(I){if(I===null){s&&L(),P(0),t.consume(I);return}return s=s||r.parser.flow(r.now()),t.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:c}),O(I)}function O(I){if(I===null){z(t.exit("chunkFlow"),!0),P(0),t.consume(I);return}return dn(I)?(t.consume(I),z(t.exit("chunkFlow")),o=0,r.interrupt=void 0,d):(t.consume(I),O)}function z(I,rn){const J=r.sliceStream(I);if(rn&&J.push(null),I.previous=c,c&&(c.next=I),c=I,s.defineSkip(I.start),s.write(J),r.parser.lazy[I.start.line]){let U=s.events.length;for(;U--;)if(s.events[U][1].start.offset<f&&(!s.events[U][1].end||s.events[U][1].end.offset>f))return;const X=r.events.length;let cn=X,ln,N;for(;cn--;)if(r.events[cn][0]==="exit"&&r.events[cn][1].type==="chunkFlow"){if(ln){N=r.events[cn][1].end;break}ln=!0}for(P(o),U=X;U<r.events.length;)r.events[U][1].end={...N},U++;Ve(r.events,cn+1,0,r.events.slice(X)),r.events.length=U}}function P(I){let rn=a.length;for(;rn-- >I;){const J=a[rn];r.containerState=J[1],J[0].exit.call(r,t)}a.length=I}function L(){s.write([null]),c=void 0,s=void 0,r.containerState._closeFlow=void 0}}function sS(t,r,a){return Nn(t,t.attempt(this.parser.constructs.document,r,a),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Rr(t){if(t===null||Vn(t)||zi(t))return 1;if(Fo(t))return 2}function Vo(t,r,a){const o=[];let s=-1;for(;++s<t.length;){const c=t[s].resolveAll;c&&!o.includes(c)&&(r=c(r,a),o.push(c))}return r}const Gc={name:"attention",resolveAll:uS,tokenize:cS};function uS(t,r){let a=-1,o,s,c,f,d,h,m,b;for(;++a<t.length;)if(t[a][0]==="enter"&&t[a][1].type==="attentionSequence"&&t[a][1]._close){for(o=a;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&r.sliceSerialize(t[o][1]).charCodeAt(0)===r.sliceSerialize(t[a][1]).charCodeAt(0)){if((t[o][1]._close||t[a][1]._open)&&(t[a][1].end.offset-t[a][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[a][1].end.offset-t[a][1].start.offset)%3))continue;h=t[o][1].end.offset-t[o][1].start.offset>1&&t[a][1].end.offset-t[a][1].start.offset>1?2:1;const g={...t[o][1].end},S={...t[a][1].start};$h(g,-h),$h(S,h),f={type:h>1?"strongSequence":"emphasisSequence",start:g,end:{...t[o][1].end}},d={type:h>1?"strongSequence":"emphasisSequence",start:{...t[a][1].start},end:S},c={type:h>1?"strongText":"emphasisText",start:{...t[o][1].end},end:{...t[a][1].start}},s={type:h>1?"strong":"emphasis",start:{...f.start},end:{...d.end}},t[o][1].end={...f.start},t[a][1].start={...d.end},m=[],t[o][1].end.offset-t[o][1].start.offset&&(m=tt(m,[["enter",t[o][1],r],["exit",t[o][1],r]])),m=tt(m,[["enter",s,r],["enter",f,r],["exit",f,r],["enter",c,r]]),m=tt(m,Vo(r.parser.constructs.insideSpan.null,t.slice(o+1,a),r)),m=tt(m,[["exit",c,r],["enter",d,r],["exit",d,r],["exit",s,r]]),t[a][1].end.offset-t[a][1].start.offset?(b=2,m=tt(m,[["enter",t[a][1],r],["exit",t[a][1],r]])):b=0,Ve(t,o-1,a-o+3,m),a=o+m.length-b-2;break}}for(a=-1;++a<t.length;)t[a][1].type==="attentionSequence"&&(t[a][1].type="data");return t}function cS(t,r){const a=this.parser.constructs.attentionMarkers.null,o=this.previous,s=Rr(o);let c;return f;function f(h){return c=h,t.enter("attentionSequence"),d(h)}function d(h){if(h===c)return t.consume(h),d;const m=t.exit("attentionSequence"),b=Rr(h),g=!b||b===2&&s||a.includes(h),S=!s||s===2&&b||a.includes(o);return m._open=!!(c===42?g:g&&(s||!S)),m._close=!!(c===42?S:S&&(b||!g)),r(h)}}function $h(t,r){t.column+=r,t.offset+=r,t._bufferIndex+=r}const fS={name:"autolink",tokenize:pS};function pS(t,r,a){let o=0;return s;function s(x){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(x){return Ce(x)?(t.consume(x),f):x===64?a(x):m(x)}function f(x){return x===43||x===45||x===46||be(x)?(o=1,d(x)):m(x)}function d(x){return x===58?(t.consume(x),o=0,h):(x===43||x===45||x===46||be(x))&&o++<32?(t.consume(x),d):(o=0,m(x))}function h(x){return x===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.exit("autolink"),r):x===null||x===32||x===60||zo(x)?a(x):(t.consume(x),h)}function m(x){return x===64?(t.consume(x),b):eS(x)?(t.consume(x),m):a(x)}function b(x){return be(x)?g(x):a(x)}function g(x){return x===46?(t.consume(x),o=0,b):x===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.exit("autolink"),r):S(x)}function S(x){if((x===45||be(x))&&o++<63){const _=x===45?S:g;return t.consume(x),_}return a(x)}}const nl={partial:!0,tokenize:dS};function dS(t,r,a){return o;function o(c){return _n(c)?Nn(t,s,"linePrefix")(c):s(c)}function s(c){return c===null||dn(c)?r(c):a(c)}}const vy={continuation:{tokenize:hS},exit:gS,name:"blockQuote",tokenize:mS};function mS(t,r,a){const o=this;return s;function s(f){if(f===62){const d=o.containerState;return d.open||(t.enter("blockQuote",{_container:!0}),d.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(f),t.exit("blockQuoteMarker"),c}return a(f)}function c(f){return _n(f)?(t.enter("blockQuotePrefixWhitespace"),t.consume(f),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),r):(t.exit("blockQuotePrefix"),r(f))}}function hS(t,r,a){const o=this;return s;function s(f){return _n(f)?Nn(t,c,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):c(f)}function c(f){return t.attempt(vy,r,a)(f)}}function gS(t){t.exit("blockQuote")}const Sy={name:"characterEscape",tokenize:yS};function yS(t,r,a){return o;function o(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),s}function s(c){return iS(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),r):a(c)}}const wy={name:"characterReference",tokenize:bS};function bS(t,r,a){const o=this;let s=0,c,f;return d;function d(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),h}function h(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),m):(t.enter("characterReferenceValue"),c=31,f=be,b(g))}function m(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,f=tS,b):(t.enter("characterReferenceValue"),c=7,f=Yc,b(g))}function b(g){if(g===59&&s){const S=t.exit("characterReferenceValue");return f===be&&!df(o.sliceSerialize(S))?a(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),r)}return f(g)&&s++<c?(t.consume(g),b):a(g)}}const Jh={partial:!0,tokenize:vS},Kh={concrete:!0,name:"codeFenced",tokenize:xS};function xS(t,r,a){const o=this,s={partial:!0,tokenize:J};let c=0,f=0,d;return h;function h(U){return m(U)}function m(U){const X=o.events[o.events.length-1];return c=X&&X[1].type==="linePrefix"?X[2].sliceSerialize(X[1],!0).length:0,d=U,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),b(U)}function b(U){return U===d?(f++,t.consume(U),b):f<3?a(U):(t.exit("codeFencedFenceSequence"),_n(U)?Nn(t,g,"whitespace")(U):g(U))}function g(U){return U===null||dn(U)?(t.exit("codeFencedFence"),o.interrupt?r(U):t.check(Jh,O,rn)(U)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),S(U))}function S(U){return U===null||dn(U)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(U)):_n(U)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Nn(t,x,"whitespace")(U)):U===96&&U===d?a(U):(t.consume(U),S)}function x(U){return U===null||dn(U)?g(U):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),_(U))}function _(U){return U===null||dn(U)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(U)):U===96&&U===d?a(U):(t.consume(U),_)}function O(U){return t.attempt(s,rn,z)(U)}function z(U){return t.enter("lineEnding"),t.consume(U),t.exit("lineEnding"),P}function P(U){return c>0&&_n(U)?Nn(t,L,"linePrefix",c+1)(U):L(U)}function L(U){return U===null||dn(U)?t.check(Jh,O,rn)(U):(t.enter("codeFlowValue"),I(U))}function I(U){return U===null||dn(U)?(t.exit("codeFlowValue"),L(U)):(t.consume(U),I)}function rn(U){return t.exit("codeFenced"),r(U)}function J(U,X,cn){let ln=0;return N;function N(Q){return U.enter("lineEnding"),U.consume(Q),U.exit("lineEnding"),en}function en(Q){return U.enter("codeFencedFence"),_n(Q)?Nn(U,tn,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):tn(Q)}function tn(Q){return Q===d?(U.enter("codeFencedFenceSequence"),bn(Q)):cn(Q)}function bn(Q){return Q===d?(ln++,U.consume(Q),bn):ln>=f?(U.exit("codeFencedFenceSequence"),_n(Q)?Nn(U,an,"whitespace")(Q):an(Q)):cn(Q)}function an(Q){return Q===null||dn(Q)?(U.exit("codeFencedFence"),X(Q)):cn(Q)}}}function vS(t,r,a){const o=this;return s;function s(f){return f===null?a(f):(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c)}function c(f){return o.parser.lazy[o.now().line]?a(f):r(f)}}const wc={name:"codeIndented",tokenize:wS},SS={partial:!0,tokenize:CS};function wS(t,r,a){const o=this;return s;function s(m){return t.enter("codeIndented"),Nn(t,c,"linePrefix",5)(m)}function c(m){const b=o.events[o.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(m):a(m)}function f(m){return m===null?h(m):dn(m)?t.attempt(SS,f,h)(m):(t.enter("codeFlowValue"),d(m))}function d(m){return m===null||dn(m)?(t.exit("codeFlowValue"),f(m)):(t.consume(m),d)}function h(m){return t.exit("codeIndented"),r(m)}}function CS(t,r,a){const o=this;return s;function s(f){return o.parser.lazy[o.now().line]?a(f):dn(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),s):Nn(t,c,"linePrefix",5)(f)}function c(f){const d=o.events[o.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(f):dn(f)?s(f):a(f)}}const ES={name:"codeText",previous:_S,resolve:TS,tokenize:kS};function TS(t){let r=t.length-4,a=3,o,s;if((t[a][1].type==="lineEnding"||t[a][1].type==="space")&&(t[r][1].type==="lineEnding"||t[r][1].type==="space")){for(o=a;++o<r;)if(t[o][1].type==="codeTextData"){t[a][1].type="codeTextPadding",t[r][1].type="codeTextPadding",a+=2,r-=2;break}}for(o=a-1,r++;++o<=r;)s===void 0?o!==r&&t[o][1].type!=="lineEnding"&&(s=o):(o===r||t[o][1].type==="lineEnding")&&(t[s][1].type="codeTextData",o!==s+2&&(t[s][1].end=t[o-1][1].end,t.splice(s+2,o-s-2),r-=o-s-2,o=s+2),s=void 0);return t}function _S(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function kS(t,r,a){let o=0,s,c;return f;function f(g){return t.enter("codeText"),t.enter("codeTextSequence"),d(g)}function d(g){return g===96?(t.consume(g),o++,d):(t.exit("codeTextSequence"),h(g))}function h(g){return g===null?a(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),h):g===96?(c=t.enter("codeTextSequence"),s=0,b(g)):dn(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),h):(t.enter("codeTextData"),m(g))}function m(g){return g===null||g===32||g===96||dn(g)?(t.exit("codeTextData"),h(g)):(t.consume(g),m)}function b(g){return g===96?(t.consume(g),s++,b):s===o?(t.exit("codeTextSequence"),t.exit("codeText"),r(g)):(c.type="codeTextData",m(g))}}class AS{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,a){const o=a??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(r,o):r>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(r,a,o){const s=a||0;this.setCursor(Math.trunc(r));const c=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return o&&ja(this.left,o),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),ja(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),ja(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const a=this.left.splice(r,Number.POSITIVE_INFINITY);ja(this.right,a.reverse())}else{const a=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);ja(this.left,a.reverse())}}}function ja(t,r){let a=0;if(r.length<1e4)t.push(...r);else for(;a<r.length;)t.push(...r.slice(a,a+1e4)),a+=1e4}function Cy(t){const r={};let a=-1,o,s,c,f,d,h,m;const b=new AS(t);for(;++a<b.length;){for(;a in r;)a=r[a];if(o=b.get(a),a&&o[1].type==="chunkFlow"&&b.get(a-1)[1].type==="listItemPrefix"&&(h=o[1]._tokenizer.events,c=0,c<h.length&&h[c][1].type==="lineEndingBlank"&&(c+=2),c<h.length&&h[c][1].type==="content"))for(;++c<h.length&&h[c][1].type!=="content";)h[c][1].type==="chunkText"&&(h[c][1]._isInFirstContentOfListItem=!0,c++);if(o[0]==="enter")o[1].contentType&&(Object.assign(r,PS(b,a)),a=r[a],m=!0);else if(o[1]._container){for(c=a,s=void 0;c--;)if(f=b.get(c),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(s&&(b.get(s)[1].type="lineEndingBlank"),f[1].type="lineEnding",s=c);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;s&&(o[1].end={...b.get(s)[1].start},d=b.slice(s,a),d.unshift(o),b.splice(s,a-s+1,d))}}return Ve(t,0,Number.POSITIVE_INFINITY,b.slice(0)),!m}function PS(t,r){const a=t.get(r)[1],o=t.get(r)[2];let s=r-1;const c=[];let f=a._tokenizer;f||(f=o.parser[a.contentType](a.start),a._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const d=f.events,h=[],m={};let b,g,S=-1,x=a,_=0,O=0;const z=[O];for(;x;){for(;t.get(++s)[1]!==x;);c.push(s),x._tokenizer||(b=o.sliceStream(x),x.next||b.push(null),g&&f.defineSkip(x.start),x._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),x._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),g=x,x=x.next}for(x=a;++S<d.length;)d[S][0]==="exit"&&d[S-1][0]==="enter"&&d[S][1].type===d[S-1][1].type&&d[S][1].start.line!==d[S][1].end.line&&(O=S+1,z.push(O),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(f.events=[],x?(x._tokenizer=void 0,x.previous=void 0):z.pop(),S=z.length;S--;){const P=d.slice(z[S],z[S+1]),L=c.pop();h.push([L,L+P.length-1]),t.splice(L,2,P)}for(h.reverse(),S=-1;++S<h.length;)m[_+h[S][0]]=_+h[S][1],_+=h[S][1]-h[S][0]-1;return m}const MS={resolve:DS,tokenize:OS},NS={partial:!0,tokenize:RS};function DS(t){return Cy(t),t}function OS(t,r){let a;return o;function o(d){return t.enter("content"),a=t.enter("chunkContent",{contentType:"content"}),s(d)}function s(d){return d===null?c(d):dn(d)?t.check(NS,f,c)(d):(t.consume(d),s)}function c(d){return t.exit("chunkContent"),t.exit("content"),r(d)}function f(d){return t.consume(d),t.exit("chunkContent"),a.next=t.enter("chunkContent",{contentType:"content",previous:a}),a=a.next,s}}function RS(t,r,a){const o=this;return s;function s(f){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Nn(t,c,"linePrefix")}function c(f){if(f===null||dn(f))return a(f);const d=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(f):t.interrupt(o.parser.constructs.flow,a,r)(f)}}function Ey(t,r,a,o,s,c,f,d,h){const m=h||Number.POSITIVE_INFINITY;let b=0;return g;function g(P){return P===60?(t.enter(o),t.enter(s),t.enter(c),t.consume(P),t.exit(c),S):P===null||P===32||P===41||zo(P)?a(P):(t.enter(o),t.enter(f),t.enter(d),t.enter("chunkString",{contentType:"string"}),O(P))}function S(P){return P===62?(t.enter(c),t.consume(P),t.exit(c),t.exit(s),t.exit(o),r):(t.enter(d),t.enter("chunkString",{contentType:"string"}),x(P))}function x(P){return P===62?(t.exit("chunkString"),t.exit(d),S(P)):P===null||P===60||dn(P)?a(P):(t.consume(P),P===92?_:x)}function _(P){return P===60||P===62||P===92?(t.consume(P),x):x(P)}function O(P){return!b&&(P===null||P===41||Vn(P))?(t.exit("chunkString"),t.exit(d),t.exit(f),t.exit(o),r(P)):b<m&&P===40?(t.consume(P),b++,O):P===41?(t.consume(P),b--,O):P===null||P===32||P===40||zo(P)?a(P):(t.consume(P),P===92?z:O)}function z(P){return P===40||P===41||P===92?(t.consume(P),O):O(P)}}function Ty(t,r,a,o,s,c){const f=this;let d=0,h;return m;function m(x){return t.enter(o),t.enter(s),t.consume(x),t.exit(s),t.enter(c),b}function b(x){return d>999||x===null||x===91||x===93&&!h||x===94&&!d&&"_hiddenFootnoteSupport"in f.parser.constructs?a(x):x===93?(t.exit(c),t.enter(s),t.consume(x),t.exit(s),t.exit(o),r):dn(x)?(t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),b):(t.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===null||x===91||x===93||dn(x)||d++>999?(t.exit("chunkString"),b(x)):(t.consume(x),h||(h=!_n(x)),x===92?S:g)}function S(x){return x===91||x===92||x===93?(t.consume(x),d++,g):g(x)}}function _y(t,r,a,o,s,c){let f;return d;function d(S){return S===34||S===39||S===40?(t.enter(o),t.enter(s),t.consume(S),t.exit(s),f=S===40?41:S,h):a(S)}function h(S){return S===f?(t.enter(s),t.consume(S),t.exit(s),t.exit(o),r):(t.enter(c),m(S))}function m(S){return S===f?(t.exit(c),h(f)):S===null?a(S):dn(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),Nn(t,m,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),b(S))}function b(S){return S===f||S===null||dn(S)?(t.exit("chunkString"),m(S)):(t.consume(S),S===92?g:b)}function g(S){return S===f||S===92?(t.consume(S),b):b(S)}}function qa(t,r){let a;return o;function o(s){return dn(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),a=!0,o):_n(s)?Nn(t,o,a?"linePrefix":"lineSuffix")(s):r(s)}}const zS={name:"definition",tokenize:jS},LS={partial:!0,tokenize:BS};function jS(t,r,a){const o=this;let s;return c;function c(x){return t.enter("definition"),f(x)}function f(x){return Ty.call(o,t,d,a,"definitionLabel","definitionLabelMarker","definitionLabelString")(x)}function d(x){return s=st(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),x===58?(t.enter("definitionMarker"),t.consume(x),t.exit("definitionMarker"),h):a(x)}function h(x){return Vn(x)?qa(t,m)(x):m(x)}function m(x){return Ey(t,b,a,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(x)}function b(x){return t.attempt(LS,g,g)(x)}function g(x){return _n(x)?Nn(t,S,"whitespace")(x):S(x)}function S(x){return x===null||dn(x)?(t.exit("definition"),o.parser.defined.push(s),r(x)):a(x)}}function BS(t,r,a){return o;function o(d){return Vn(d)?qa(t,s)(d):a(d)}function s(d){return _y(t,c,a,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function c(d){return _n(d)?Nn(t,f,"whitespace")(d):f(d)}function f(d){return d===null||dn(d)?r(d):a(d)}}const US={name:"hardBreakEscape",tokenize:HS};function HS(t,r,a){return o;function o(c){return t.enter("hardBreakEscape"),t.consume(c),s}function s(c){return dn(c)?(t.exit("hardBreakEscape"),r(c)):a(c)}}const IS={name:"headingAtx",resolve:qS,tokenize:FS};function qS(t,r){let a=t.length-2,o=3,s,c;return t[o][1].type==="whitespace"&&(o+=2),a-2>o&&t[a][1].type==="whitespace"&&(a-=2),t[a][1].type==="atxHeadingSequence"&&(o===a-1||a-4>o&&t[a-2][1].type==="whitespace")&&(a-=o+1===a?2:4),a>o&&(s={type:"atxHeadingText",start:t[o][1].start,end:t[a][1].end},c={type:"chunkText",start:t[o][1].start,end:t[a][1].end,contentType:"text"},Ve(t,o,a-o+1,[["enter",s,r],["enter",c,r],["exit",c,r],["exit",s,r]])),t}function FS(t,r,a){let o=0;return s;function s(b){return t.enter("atxHeading"),c(b)}function c(b){return t.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&o++<6?(t.consume(b),f):b===null||Vn(b)?(t.exit("atxHeadingSequence"),d(b)):a(b)}function d(b){return b===35?(t.enter("atxHeadingSequence"),h(b)):b===null||dn(b)?(t.exit("atxHeading"),r(b)):_n(b)?Nn(t,d,"whitespace")(b):(t.enter("atxHeadingText"),m(b))}function h(b){return b===35?(t.consume(b),h):(t.exit("atxHeadingSequence"),d(b))}function m(b){return b===null||b===35||Vn(b)?(t.exit("atxHeadingText"),d(b)):(t.consume(b),m)}}const VS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ng=["pre","script","style","textarea"],YS={concrete:!0,name:"htmlFlow",resolveTo:QS,tokenize:XS},GS={partial:!0,tokenize:$S},WS={partial:!0,tokenize:ZS};function QS(t){let r=t.length;for(;r--&&!(t[r][0]==="enter"&&t[r][1].type==="htmlFlow"););return r>1&&t[r-2][1].type==="linePrefix"&&(t[r][1].start=t[r-2][1].start,t[r+1][1].start=t[r-2][1].start,t.splice(r-2,2)),t}function XS(t,r,a){const o=this;let s,c,f,d,h;return m;function m(w){return b(w)}function b(w){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(w),g}function g(w){return w===33?(t.consume(w),S):w===47?(t.consume(w),c=!0,O):w===63?(t.consume(w),s=3,o.interrupt?r:C):Ce(w)?(t.consume(w),f=String.fromCharCode(w),z):a(w)}function S(w){return w===45?(t.consume(w),s=2,x):w===91?(t.consume(w),s=5,d=0,_):Ce(w)?(t.consume(w),s=4,o.interrupt?r:C):a(w)}function x(w){return w===45?(t.consume(w),o.interrupt?r:C):a(w)}function _(w){const nn="CDATA[";return w===nn.charCodeAt(d++)?(t.consume(w),d===nn.length?o.interrupt?r:tn:_):a(w)}function O(w){return Ce(w)?(t.consume(w),f=String.fromCharCode(w),z):a(w)}function z(w){if(w===null||w===47||w===62||Vn(w)){const nn=w===47,hn=f.toLowerCase();return!nn&&!c&&ng.includes(hn)?(s=1,o.interrupt?r(w):tn(w)):VS.includes(f.toLowerCase())?(s=6,nn?(t.consume(w),P):o.interrupt?r(w):tn(w)):(s=7,o.interrupt&&!o.parser.lazy[o.now().line]?a(w):c?L(w):I(w))}return w===45||be(w)?(t.consume(w),f+=String.fromCharCode(w),z):a(w)}function P(w){return w===62?(t.consume(w),o.interrupt?r:tn):a(w)}function L(w){return _n(w)?(t.consume(w),L):N(w)}function I(w){return w===47?(t.consume(w),N):w===58||w===95||Ce(w)?(t.consume(w),rn):_n(w)?(t.consume(w),I):N(w)}function rn(w){return w===45||w===46||w===58||w===95||be(w)?(t.consume(w),rn):J(w)}function J(w){return w===61?(t.consume(w),U):_n(w)?(t.consume(w),J):I(w)}function U(w){return w===null||w===60||w===61||w===62||w===96?a(w):w===34||w===39?(t.consume(w),h=w,X):_n(w)?(t.consume(w),U):cn(w)}function X(w){return w===h?(t.consume(w),h=null,ln):w===null||dn(w)?a(w):(t.consume(w),X)}function cn(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Vn(w)?J(w):(t.consume(w),cn)}function ln(w){return w===47||w===62||_n(w)?I(w):a(w)}function N(w){return w===62?(t.consume(w),en):a(w)}function en(w){return w===null||dn(w)?tn(w):_n(w)?(t.consume(w),en):a(w)}function tn(w){return w===45&&s===2?(t.consume(w),R):w===60&&s===1?(t.consume(w),Z):w===62&&s===4?(t.consume(w),k):w===63&&s===3?(t.consume(w),C):w===93&&s===5?(t.consume(w),vn):dn(w)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(GS,F,bn)(w)):w===null||dn(w)?(t.exit("htmlFlowData"),bn(w)):(t.consume(w),tn)}function bn(w){return t.check(WS,an,F)(w)}function an(w){return t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),Q}function Q(w){return w===null||dn(w)?bn(w):(t.enter("htmlFlowData"),tn(w))}function R(w){return w===45?(t.consume(w),C):tn(w)}function Z(w){return w===47?(t.consume(w),f="",sn):tn(w)}function sn(w){if(w===62){const nn=f.toLowerCase();return ng.includes(nn)?(t.consume(w),k):tn(w)}return Ce(w)&&f.length<8?(t.consume(w),f+=String.fromCharCode(w),sn):tn(w)}function vn(w){return w===93?(t.consume(w),C):tn(w)}function C(w){return w===62?(t.consume(w),k):w===45&&s===2?(t.consume(w),C):tn(w)}function k(w){return w===null||dn(w)?(t.exit("htmlFlowData"),F(w)):(t.consume(w),k)}function F(w){return t.exit("htmlFlow"),r(w)}}function ZS(t,r,a){const o=this;return s;function s(f){return dn(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c):a(f)}function c(f){return o.parser.lazy[o.now().line]?a(f):r(f)}}function $S(t,r,a){return o;function o(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(nl,r,a)}}const JS={name:"htmlText",tokenize:KS};function KS(t,r,a){const o=this;let s,c,f;return d;function d(C){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(C),h}function h(C){return C===33?(t.consume(C),m):C===47?(t.consume(C),J):C===63?(t.consume(C),I):Ce(C)?(t.consume(C),cn):a(C)}function m(C){return C===45?(t.consume(C),b):C===91?(t.consume(C),c=0,_):Ce(C)?(t.consume(C),L):a(C)}function b(C){return C===45?(t.consume(C),x):a(C)}function g(C){return C===null?a(C):C===45?(t.consume(C),S):dn(C)?(f=g,Z(C)):(t.consume(C),g)}function S(C){return C===45?(t.consume(C),x):g(C)}function x(C){return C===62?R(C):C===45?S(C):g(C)}function _(C){const k="CDATA[";return C===k.charCodeAt(c++)?(t.consume(C),c===k.length?O:_):a(C)}function O(C){return C===null?a(C):C===93?(t.consume(C),z):dn(C)?(f=O,Z(C)):(t.consume(C),O)}function z(C){return C===93?(t.consume(C),P):O(C)}function P(C){return C===62?R(C):C===93?(t.consume(C),P):O(C)}function L(C){return C===null||C===62?R(C):dn(C)?(f=L,Z(C)):(t.consume(C),L)}function I(C){return C===null?a(C):C===63?(t.consume(C),rn):dn(C)?(f=I,Z(C)):(t.consume(C),I)}function rn(C){return C===62?R(C):I(C)}function J(C){return Ce(C)?(t.consume(C),U):a(C)}function U(C){return C===45||be(C)?(t.consume(C),U):X(C)}function X(C){return dn(C)?(f=X,Z(C)):_n(C)?(t.consume(C),X):R(C)}function cn(C){return C===45||be(C)?(t.consume(C),cn):C===47||C===62||Vn(C)?ln(C):a(C)}function ln(C){return C===47?(t.consume(C),R):C===58||C===95||Ce(C)?(t.consume(C),N):dn(C)?(f=ln,Z(C)):_n(C)?(t.consume(C),ln):R(C)}function N(C){return C===45||C===46||C===58||C===95||be(C)?(t.consume(C),N):en(C)}function en(C){return C===61?(t.consume(C),tn):dn(C)?(f=en,Z(C)):_n(C)?(t.consume(C),en):ln(C)}function tn(C){return C===null||C===60||C===61||C===62||C===96?a(C):C===34||C===39?(t.consume(C),s=C,bn):dn(C)?(f=tn,Z(C)):_n(C)?(t.consume(C),tn):(t.consume(C),an)}function bn(C){return C===s?(t.consume(C),s=void 0,Q):C===null?a(C):dn(C)?(f=bn,Z(C)):(t.consume(C),bn)}function an(C){return C===null||C===34||C===39||C===60||C===61||C===96?a(C):C===47||C===62||Vn(C)?ln(C):(t.consume(C),an)}function Q(C){return C===47||C===62||Vn(C)?ln(C):a(C)}function R(C){return C===62?(t.consume(C),t.exit("htmlTextData"),t.exit("htmlText"),r):a(C)}function Z(C){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(C),t.exit("lineEnding"),sn}function sn(C){return _n(C)?Nn(t,vn,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):vn(C)}function vn(C){return t.enter("htmlTextData"),f(C)}}const mf={name:"labelEnd",resolveAll:iw,resolveTo:rw,tokenize:aw},nw={tokenize:lw},ew={tokenize:ow},tw={tokenize:sw};function iw(t){let r=-1;const a=[];for(;++r<t.length;){const o=t[r][1];if(a.push(t[r]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const s=o.type==="labelImage"?4:2;o.type="data",r+=s}}return t.length!==a.length&&Ve(t,0,t.length,a),t}function rw(t,r){let a=t.length,o=0,s,c,f,d;for(;a--;)if(s=t[a][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[a][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(f){if(t[a][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=a,s.type!=="labelLink")){o=2;break}}else s.type==="labelEnd"&&(f=a);const h={type:t[c][1].type==="labelLink"?"link":"image",start:{...t[c][1].start},end:{...t[t.length-1][1].end}},m={type:"label",start:{...t[c][1].start},end:{...t[f][1].end}},b={type:"labelText",start:{...t[c+o+2][1].end},end:{...t[f-2][1].start}};return d=[["enter",h,r],["enter",m,r]],d=tt(d,t.slice(c+1,c+o+3)),d=tt(d,[["enter",b,r]]),d=tt(d,Vo(r.parser.constructs.insideSpan.null,t.slice(c+o+4,f-3),r)),d=tt(d,[["exit",b,r],t[f-2],t[f-1],["exit",m,r]]),d=tt(d,t.slice(f+1)),d=tt(d,[["exit",h,r]]),Ve(t,c,t.length,d),t}function aw(t,r,a){const o=this;let s=o.events.length,c,f;for(;s--;)if((o.events[s][1].type==="labelImage"||o.events[s][1].type==="labelLink")&&!o.events[s][1]._balanced){c=o.events[s][1];break}return d;function d(S){return c?c._inactive?g(S):(f=o.parser.defined.includes(st(o.sliceSerialize({start:c.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(S),t.exit("labelMarker"),t.exit("labelEnd"),h):a(S)}function h(S){return S===40?t.attempt(nw,b,f?b:g)(S):S===91?t.attempt(ew,b,f?m:g)(S):f?b(S):g(S)}function m(S){return t.attempt(tw,b,g)(S)}function b(S){return r(S)}function g(S){return c._balanced=!0,a(S)}}function lw(t,r,a){return o;function o(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),s}function s(g){return Vn(g)?qa(t,c)(g):c(g)}function c(g){return g===41?b(g):Ey(t,f,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function f(g){return Vn(g)?qa(t,h)(g):b(g)}function d(g){return a(g)}function h(g){return g===34||g===39||g===40?_y(t,m,a,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):b(g)}function m(g){return Vn(g)?qa(t,b)(g):b(g)}function b(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),r):a(g)}}function ow(t,r,a){const o=this;return s;function s(d){return Ty.call(o,t,c,f,"reference","referenceMarker","referenceString")(d)}function c(d){return o.parser.defined.includes(st(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?r(d):a(d)}function f(d){return a(d)}}function sw(t,r,a){return o;function o(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),s}function s(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),r):a(c)}}const uw={name:"labelStartImage",resolveAll:mf.resolveAll,tokenize:cw};function cw(t,r,a){const o=this;return s;function s(d){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(d),t.exit("labelImageMarker"),c}function c(d){return d===91?(t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelImage"),f):a(d)}function f(d){return d===94&&"_hiddenFootnoteSupport"in o.parser.constructs?a(d):r(d)}}const fw={name:"labelStartLink",resolveAll:mf.resolveAll,tokenize:pw};function pw(t,r,a){const o=this;return s;function s(f){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelLink"),c}function c(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?a(f):r(f)}}const Cc={name:"lineEnding",tokenize:dw};function dw(t,r){return a;function a(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Nn(t,r,"linePrefix")}}const Do={name:"thematicBreak",tokenize:mw};function mw(t,r,a){let o=0,s;return c;function c(m){return t.enter("thematicBreak"),f(m)}function f(m){return s=m,d(m)}function d(m){return m===s?(t.enter("thematicBreakSequence"),h(m)):o>=3&&(m===null||dn(m))?(t.exit("thematicBreak"),r(m)):a(m)}function h(m){return m===s?(t.consume(m),o++,h):(t.exit("thematicBreakSequence"),_n(m)?Nn(t,d,"whitespace")(m):d(m))}}const De={continuation:{tokenize:bw},exit:vw,name:"list",tokenize:yw},hw={partial:!0,tokenize:Sw},gw={partial:!0,tokenize:xw};function yw(t,r,a){const o=this,s=o.events[o.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,f=0;return d;function d(x){const _=o.containerState.type||(x===42||x===43||x===45?"listUnordered":"listOrdered");if(_==="listUnordered"?!o.containerState.marker||x===o.containerState.marker:Yc(x)){if(o.containerState.type||(o.containerState.type=_,t.enter(_,{_container:!0})),_==="listUnordered")return t.enter("listItemPrefix"),x===42||x===45?t.check(Do,a,m)(x):m(x);if(!o.interrupt||x===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),h(x)}return a(x)}function h(x){return Yc(x)&&++f<10?(t.consume(x),h):(!o.interrupt||f<2)&&(o.containerState.marker?x===o.containerState.marker:x===41||x===46)?(t.exit("listItemValue"),m(x)):a(x)}function m(x){return t.enter("listItemMarker"),t.consume(x),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||x,t.check(nl,o.interrupt?a:b,t.attempt(hw,S,g))}function b(x){return o.containerState.initialBlankLine=!0,c++,S(x)}function g(x){return _n(x)?(t.enter("listItemPrefixWhitespace"),t.consume(x),t.exit("listItemPrefixWhitespace"),S):a(x)}function S(x){return o.containerState.size=c+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,r(x)}}function bw(t,r,a){const o=this;return o.containerState._closeFlow=void 0,t.check(nl,s,c);function s(d){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Nn(t,r,"listItemIndent",o.containerState.size+1)(d)}function c(d){return o.containerState.furtherBlankLines||!_n(d)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,f(d)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(gw,r,f)(d))}function f(d){return o.containerState._closeFlow=!0,o.interrupt=void 0,Nn(t,t.attempt(De,r,a),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function xw(t,r,a){const o=this;return Nn(t,s,"listItemIndent",o.containerState.size+1);function s(c){const f=o.events[o.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===o.containerState.size?r(c):a(c)}}function vw(t){t.exit(this.containerState.type)}function Sw(t,r,a){const o=this;return Nn(t,s,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const f=o.events[o.events.length-1];return!_n(c)&&f&&f[1].type==="listItemPrefixWhitespace"?r(c):a(c)}}const eg={name:"setextUnderline",resolveTo:ww,tokenize:Cw};function ww(t,r){let a=t.length,o,s,c;for(;a--;)if(t[a][0]==="enter"){if(t[a][1].type==="content"){o=a;break}t[a][1].type==="paragraph"&&(s=a)}else t[a][1].type==="content"&&t.splice(a,1),!c&&t[a][1].type==="definition"&&(c=a);const f={type:"setextHeading",start:{...t[o][1].start},end:{...t[t.length-1][1].end}};return t[s][1].type="setextHeadingText",c?(t.splice(s,0,["enter",f,r]),t.splice(c+1,0,["exit",t[o][1],r]),t[o][1].end={...t[c][1].end}):t[o][1]=f,t.push(["exit",f,r]),t}function Cw(t,r,a){const o=this;let s;return c;function c(m){let b=o.events.length,g;for(;b--;)if(o.events[b][1].type!=="lineEnding"&&o.events[b][1].type!=="linePrefix"&&o.events[b][1].type!=="content"){g=o.events[b][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||g)?(t.enter("setextHeadingLine"),s=m,f(m)):a(m)}function f(m){return t.enter("setextHeadingLineSequence"),d(m)}function d(m){return m===s?(t.consume(m),d):(t.exit("setextHeadingLineSequence"),_n(m)?Nn(t,h,"lineSuffix")(m):h(m))}function h(m){return m===null||dn(m)?(t.exit("setextHeadingLine"),r(m)):a(m)}}const Ew={tokenize:Tw};function Tw(t){const r=this,a=t.attempt(nl,o,t.attempt(this.parser.constructs.flowInitial,s,Nn(t,t.attempt(this.parser.constructs.flow,s,t.attempt(MS,s)),"linePrefix")));return a;function o(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),r.currentConstruct=void 0,a}function s(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),r.currentConstruct=void 0,a}}const _w={resolveAll:Ay()},kw=ky("string"),Aw=ky("text");function ky(t){return{resolveAll:Ay(t==="text"?Pw:void 0),tokenize:r};function r(a){const o=this,s=this.parser.constructs[t],c=a.attempt(s,f,d);return f;function f(b){return m(b)?c(b):d(b)}function d(b){if(b===null){a.consume(b);return}return a.enter("data"),a.consume(b),h}function h(b){return m(b)?(a.exit("data"),c(b)):(a.consume(b),h)}function m(b){if(b===null)return!0;const g=s[b];let S=-1;if(g)for(;++S<g.length;){const x=g[S];if(!x.previous||x.previous.call(o,o.previous))return!0}return!1}}}function Ay(t){return r;function r(a,o){let s=-1,c;for(;++s<=a.length;)c===void 0?a[s]&&a[s][1].type==="data"&&(c=s,s++):(!a[s]||a[s][1].type!=="data")&&(s!==c+2&&(a[c][1].end=a[s-1][1].end,a.splice(c+2,s-c-2),s=c+2),c=void 0);return t?t(a,o):a}}function Pw(t,r){let a=0;for(;++a<=t.length;)if((a===t.length||t[a][1].type==="lineEnding")&&t[a-1][1].type==="data"){const o=t[a-1][1],s=r.sliceStream(o);let c=s.length,f=-1,d=0,h;for(;c--;){const m=s[c];if(typeof m=="string"){for(f=m.length;m.charCodeAt(f-1)===32;)d++,f--;if(f)break;f=-1}else if(m===-2)h=!0,d++;else if(m!==-1){c++;break}}if(r._contentTypeTextTrailing&&a===t.length&&(d=0),d){const m={type:a===t.length||h||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?f:o.start._bufferIndex+f,_index:o.start._index+c,line:o.end.line,column:o.end.column-d,offset:o.end.offset-d},end:{...o.end}};o.end={...m.start},o.start.offset===o.end.offset?Object.assign(o,m):(t.splice(a,0,["enter",m,r],["exit",m,r]),a+=2)}a++}return t}const Mw={42:De,43:De,45:De,48:De,49:De,50:De,51:De,52:De,53:De,54:De,55:De,56:De,57:De,62:vy},Nw={91:zS},Dw={[-2]:wc,[-1]:wc,32:wc},Ow={35:IS,42:Do,45:[eg,Do],60:YS,61:eg,95:Do,96:Kh,126:Kh},Rw={38:wy,92:Sy},zw={[-5]:Cc,[-4]:Cc,[-3]:Cc,33:uw,38:wy,42:Gc,60:[fS,JS],91:fw,92:[US,Sy],93:mf,95:Gc,96:ES},Lw={null:[Gc,_w]},jw={null:[42,95]},Bw={null:[]},Uw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:jw,contentInitial:Nw,disable:Bw,document:Mw,flow:Ow,flowInitial:Dw,insideSpan:Lw,string:Rw,text:zw},Symbol.toStringTag,{value:"Module"}));function Hw(t,r,a){let o={_bufferIndex:-1,_index:0,line:a&&a.line||1,column:a&&a.column||1,offset:a&&a.offset||0};const s={},c=[];let f=[],d=[];const h={attempt:X(J),check:X(U),consume:L,enter:I,exit:rn,interrupt:X(U,{interrupt:!0})},m={code:null,containerState:{},defineSkip:O,events:[],now:_,parser:t,previous:null,sliceSerialize:S,sliceStream:x,write:g};let b=r.tokenize.call(m,h);return r.resolveAll&&c.push(r),m;function g(en){return f=tt(f,en),z(),f[f.length-1]!==null?[]:(cn(r,0),m.events=Vo(c,m.events,m),m.events)}function S(en,tn){return qw(x(en),tn)}function x(en){return Iw(f,en)}function _(){const{_bufferIndex:en,_index:tn,line:bn,column:an,offset:Q}=o;return{_bufferIndex:en,_index:tn,line:bn,column:an,offset:Q}}function O(en){s[en.line]=en.column,N()}function z(){let en;for(;o._index<f.length;){const tn=f[o._index];if(typeof tn=="string")for(en=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===en&&o._bufferIndex<tn.length;)P(tn.charCodeAt(o._bufferIndex));else P(tn)}}function P(en){b=b(en)}function L(en){dn(en)?(o.line++,o.column=1,o.offset+=en===-3?2:1,N()):en!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===f[o._index].length&&(o._bufferIndex=-1,o._index++)),m.previous=en}function I(en,tn){const bn=tn||{};return bn.type=en,bn.start=_(),m.events.push(["enter",bn,m]),d.push(bn),bn}function rn(en){const tn=d.pop();return tn.end=_(),m.events.push(["exit",tn,m]),tn}function J(en,tn){cn(en,tn.from)}function U(en,tn){tn.restore()}function X(en,tn){return bn;function bn(an,Q,R){let Z,sn,vn,C;return Array.isArray(an)?F(an):"tokenize"in an?F([an]):k(an);function k(fn){return kn;function kn(Qn){const Bn=Qn!==null&&fn[Qn],Ye=Qn!==null&&fn.null,yt=[...Array.isArray(Bn)?Bn:Bn?[Bn]:[],...Array.isArray(Ye)?Ye:Ye?[Ye]:[]];return F(yt)(Qn)}}function F(fn){return Z=fn,sn=0,fn.length===0?R:w(fn[sn])}function w(fn){return kn;function kn(Qn){return C=ln(),vn=fn,fn.partial||(m.currentConstruct=fn),fn.name&&m.parser.constructs.disable.null.includes(fn.name)?hn():fn.tokenize.call(tn?Object.assign(Object.create(m),tn):m,h,nn,hn)(Qn)}}function nn(fn){return en(vn,C),Q}function hn(fn){return C.restore(),++sn<Z.length?w(Z[sn]):R}}}function cn(en,tn){en.resolveAll&&!c.includes(en)&&c.push(en),en.resolve&&Ve(m.events,tn,m.events.length-tn,en.resolve(m.events.slice(tn),m)),en.resolveTo&&(m.events=en.resolveTo(m.events,m))}function ln(){const en=_(),tn=m.previous,bn=m.currentConstruct,an=m.events.length,Q=Array.from(d);return{from:an,restore:R};function R(){o=en,m.previous=tn,m.currentConstruct=bn,m.events.length=an,d=Q,N()}}function N(){o.line in s&&o.column<2&&(o.column=s[o.line],o.offset+=s[o.line]-1)}}function Iw(t,r){const a=r.start._index,o=r.start._bufferIndex,s=r.end._index,c=r.end._bufferIndex;let f;if(a===s)f=[t[a].slice(o,c)];else{if(f=t.slice(a,s),o>-1){const d=f[0];typeof d=="string"?f[0]=d.slice(o):f.shift()}c>0&&f.push(t[s].slice(0,c))}return f}function qw(t,r){let a=-1;const o=[];let s;for(;++a<t.length;){const c=t[a];let f;if(typeof c=="string")f=c;else switch(c){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=r?" ":"	";break}case-1:{if(!r&&s)continue;f=" ";break}default:f=String.fromCharCode(c)}s=c===-2,o.push(f)}return o.join("")}function Fw(t){const o={constructs:by([Uw,...(t||{}).extensions||[]]),content:s(rS),defined:[],document:s(lS),flow:s(Ew),lazy:{},string:s(kw),text:s(Aw)};return o;function s(c){return f;function f(d){return Hw(o,c,d)}}}function Vw(t){for(;!Cy(t););return t}const tg=/[\0\t\n\r]/g;function Yw(){let t=1,r="",a=!0,o;return s;function s(c,f,d){const h=[];let m,b,g,S,x;for(c=r+(typeof c=="string"?c.toString():new TextDecoder(f||void 0).decode(c)),g=0,r="",a&&(c.charCodeAt(0)===65279&&g++,a=void 0);g<c.length;){if(tg.lastIndex=g,m=tg.exec(c),S=m&&m.index!==void 0?m.index:c.length,x=c.charCodeAt(S),!m){r=c.slice(g);break}if(x===10&&g===S&&o)h.push(-3),o=void 0;else switch(o&&(h.push(-5),o=void 0),g<S&&(h.push(c.slice(g,S)),t+=S-g),x){case 0:{h.push(65533),t++;break}case 9:{for(b=Math.ceil(t/4)*4,h.push(-2);t++<b;)h.push(-1);break}case 10:{h.push(-4),t=1;break}default:o=!0,t=1}g=S+1}return d&&(o&&h.push(-5),r&&h.push(r),h.push(null)),h}}const Gw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ww(t){return t.replace(Gw,Qw)}function Qw(t,r,a){if(r)return r;if(a.charCodeAt(0)===35){const s=a.charCodeAt(1),c=s===120||s===88;return xy(a.slice(c?2:1),c?16:10)}return df(a)||t}const Py={}.hasOwnProperty;function Xw(t,r,a){return typeof r!="string"&&(a=r,r=void 0),Zw(a)(Vw(Fw(a).document().write(Yw()(t,r,!0))))}function Zw(t){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Ii),autolinkProtocol:ln,autolinkEmail:ln,atxHeading:c(Ui),blockQuote:c(Ye),characterEscape:ln,characterReference:ln,codeFenced:c(yt),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:c(yt,f),codeText:c(Ur,f),codeTextData:ln,data:ln,codeFlowValue:ln,definition:c(il),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:c(bt),hardBreakEscape:c(Hi),hardBreakTrailing:c(Hi),htmlFlow:c(rl,f),htmlFlowData:ln,htmlText:c(rl,f),htmlTextData:ln,image:c(al),label:f,link:c(Ii),listItem:c(Hr),listItemValue:S,listOrdered:c(qi,g),listUnordered:c(qi),paragraph:c(Xo),reference:w,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:c(Ui),strong:c(Zo),thematicBreak:c($o)},exit:{atxHeading:h(),atxHeadingSequence:J,autolink:h(),autolinkEmail:Bn,autolinkProtocol:Qn,blockQuote:h(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:hn,characterReferenceMarkerNumeric:hn,characterReferenceValue:fn,characterReference:kn,codeFenced:h(z),codeFencedFence:O,codeFencedFenceInfo:x,codeFencedFenceMeta:_,codeFlowValue:N,codeIndented:h(P),codeText:h(Q),codeTextData:N,data:N,definition:h(),definitionDestinationString:rn,definitionLabelString:L,definitionTitleString:I,emphasis:h(),hardBreakEscape:h(tn),hardBreakTrailing:h(tn),htmlFlow:h(bn),htmlFlowData:N,htmlText:h(an),htmlTextData:N,image:h(Z),label:vn,labelText:sn,lineEnding:en,link:h(R),listItem:h(),listOrdered:h(),listUnordered:h(),paragraph:h(),referenceString:nn,resourceDestinationString:C,resourceTitleString:k,resource:F,setextHeading:h(cn),setextHeadingLineSequence:X,setextHeadingText:U,strong:h(),thematicBreak:h()}};My(r,(t||{}).mdastExtensions||[]);const a={};return o;function o(Y){let K={type:"root",children:[]};const gn={stack:[K],tokenStack:[],config:r,enter:d,exit:m,buffer:f,resume:b,data:a},Cn=[];let zn=-1;for(;++zn<Y.length;)if(Y[zn][1].type==="listOrdered"||Y[zn][1].type==="listUnordered")if(Y[zn][0]==="enter")Cn.push(zn);else{const Re=Cn.pop();zn=s(Y,Re,zn)}for(zn=-1;++zn<Y.length;){const Re=r[Y[zn][0]];Py.call(Re,Y[zn][1].type)&&Re[Y[zn][1].type].call(Object.assign({sliceSerialize:Y[zn][2].sliceSerialize},gn),Y[zn][1])}if(gn.tokenStack.length>0){const Re=gn.tokenStack[gn.tokenStack.length-1];(Re[1]||ig).call(gn,void 0,Re[0])}for(K.position={start:pi(Y.length>0?Y[0][1].start:{line:1,column:1,offset:0}),end:pi(Y.length>0?Y[Y.length-2][1].end:{line:1,column:1,offset:0})},zn=-1;++zn<r.transforms.length;)K=r.transforms[zn](K)||K;return K}function s(Y,K,gn){let Cn=K-1,zn=-1,Re=!1,xt,Se,le,Ee;for(;++Cn<=gn;){const qn=Y[Cn];switch(qn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qn[0]==="enter"?zn++:zn--,Ee=void 0;break}case"lineEndingBlank":{qn[0]==="enter"&&(xt&&!Ee&&!zn&&!le&&(le=Cn),Ee=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ee=void 0}if(!zn&&qn[0]==="enter"&&qn[1].type==="listItemPrefix"||zn===-1&&qn[0]==="exit"&&(qn[1].type==="listUnordered"||qn[1].type==="listOrdered")){if(xt){let It=Cn;for(Se=void 0;It--;){const rt=Y[It];if(rt[1].type==="lineEnding"||rt[1].type==="lineEndingBlank"){if(rt[0]==="exit")continue;Se&&(Y[Se][1].type="lineEndingBlank",Re=!0),rt[1].type="lineEnding",Se=It}else if(!(rt[1].type==="linePrefix"||rt[1].type==="blockQuotePrefix"||rt[1].type==="blockQuotePrefixWhitespace"||rt[1].type==="blockQuoteMarker"||rt[1].type==="listItemIndent"))break}le&&(!Se||le<Se)&&(xt._spread=!0),xt.end=Object.assign({},Se?Y[Se][1].start:qn[1].end),Y.splice(Se||Cn,0,["exit",xt,qn[2]]),Cn++,gn++}if(qn[1].type==="listItemPrefix"){const It={type:"listItem",_spread:!1,start:Object.assign({},qn[1].start),end:void 0};xt=It,Y.splice(Cn,0,["enter",It,qn[2]]),Cn++,gn++,le=void 0,Ee=!0}}}return Y[K][1]._spread=Re,gn}function c(Y,K){return gn;function gn(Cn){d.call(this,Y(Cn),Cn),K&&K.call(this,Cn)}}function f(){this.stack.push({type:"fragment",children:[]})}function d(Y,K,gn){this.stack[this.stack.length-1].children.push(Y),this.stack.push(Y),this.tokenStack.push([K,gn||void 0]),Y.position={start:pi(K.start),end:void 0}}function h(Y){return K;function K(gn){Y&&Y.call(this,gn),m.call(this,gn)}}function m(Y,K){const gn=this.stack.pop(),Cn=this.tokenStack.pop();if(Cn)Cn[0].type!==Y.type&&(K?K.call(this,Y,Cn[0]):(Cn[1]||ig).call(this,Y,Cn[0]));else throw new Error("Cannot close `"+Y.type+"` ("+Ia({start:Y.start,end:Y.end})+"): it’s not open");gn.position.end=pi(Y.end)}function b(){return pf(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function S(Y){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(Y),10),this.data.expectingFirstListItemValue=void 0}}function x(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.lang=Y}function _(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.meta=Y}function O(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.value=Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function P(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.value=Y.replace(/(\r?\n|\r)$/g,"")}function L(Y){const K=this.resume(),gn=this.stack[this.stack.length-1];gn.label=K,gn.identifier=st(this.sliceSerialize(Y)).toLowerCase()}function I(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.title=Y}function rn(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.url=Y}function J(Y){const K=this.stack[this.stack.length-1];if(!K.depth){const gn=this.sliceSerialize(Y).length;K.depth=gn}}function U(){this.data.setextHeadingSlurpLineEnding=!0}function X(Y){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(Y).codePointAt(0)===61?1:2}function cn(){this.data.setextHeadingSlurpLineEnding=void 0}function ln(Y){const gn=this.stack[this.stack.length-1].children;let Cn=gn[gn.length-1];(!Cn||Cn.type!=="text")&&(Cn=ve(),Cn.position={start:pi(Y.start),end:void 0},gn.push(Cn)),this.stack.push(Cn)}function N(Y){const K=this.stack.pop();K.value+=this.sliceSerialize(Y),K.position.end=pi(Y.end)}function en(Y){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const gn=K.children[K.children.length-1];gn.position.end=pi(Y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(K.type)&&(ln.call(this,Y),N.call(this,Y))}function tn(){this.data.atHardBreak=!0}function bn(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.value=Y}function an(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.value=Y}function Q(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.value=Y}function R(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=K,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function Z(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=K,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function sn(Y){const K=this.sliceSerialize(Y),gn=this.stack[this.stack.length-2];gn.label=Ww(K),gn.identifier=st(K).toLowerCase()}function vn(){const Y=this.stack[this.stack.length-1],K=this.resume(),gn=this.stack[this.stack.length-1];if(this.data.inReference=!0,gn.type==="link"){const Cn=Y.children;gn.children=Cn}else gn.alt=K}function C(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.url=Y}function k(){const Y=this.resume(),K=this.stack[this.stack.length-1];K.title=Y}function F(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function nn(Y){const K=this.resume(),gn=this.stack[this.stack.length-1];gn.label=K,gn.identifier=st(this.sliceSerialize(Y)).toLowerCase(),this.data.referenceType="full"}function hn(Y){this.data.characterReferenceType=Y.type}function fn(Y){const K=this.sliceSerialize(Y),gn=this.data.characterReferenceType;let Cn;gn?(Cn=xy(K,gn==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Cn=df(K);const zn=this.stack[this.stack.length-1];zn.value+=Cn}function kn(Y){const K=this.stack.pop();K.position.end=pi(Y.end)}function Qn(Y){N.call(this,Y);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(Y)}function Bn(Y){N.call(this,Y);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(Y)}function Ye(){return{type:"blockquote",children:[]}}function yt(){return{type:"code",lang:null,meta:null,value:""}}function Ur(){return{type:"inlineCode",value:""}}function il(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bt(){return{type:"emphasis",children:[]}}function Ui(){return{type:"heading",depth:0,children:[]}}function Hi(){return{type:"break"}}function rl(){return{type:"html",value:""}}function al(){return{type:"image",title:null,url:"",alt:null}}function Ii(){return{type:"link",title:null,url:"",children:[]}}function qi(Y){return{type:"list",ordered:Y.type==="listOrdered",start:null,spread:Y._spread,children:[]}}function Hr(Y){return{type:"listItem",spread:Y._spread,checked:null,children:[]}}function Xo(){return{type:"paragraph",children:[]}}function Zo(){return{type:"strong",children:[]}}function ve(){return{type:"text",value:""}}function $o(){return{type:"thematicBreak"}}}function pi(t){return{line:t.line,column:t.column,offset:t.offset}}function My(t,r){let a=-1;for(;++a<r.length;){const o=r[a];Array.isArray(o)?My(t,o):$w(t,o)}}function $w(t,r){let a;for(a in r)if(Py.call(r,a))switch(a){case"canContainEols":{const o=r[a];o&&t[a].push(...o);break}case"transforms":{const o=r[a];o&&t[a].push(...o);break}case"enter":case"exit":{const o=r[a];o&&Object.assign(t[a],o);break}}}function ig(t,r){throw t?new Error("Cannot close `"+t.type+"` ("+Ia({start:t.start,end:t.end})+"): a different token (`"+r.type+"`, "+Ia({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Ia({start:r.start,end:r.end})+") is still open")}function Jw(t){const r=this;r.parser=a;function a(o){return Xw(o,{...r.data("settings"),...t,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function Kw(t,r){const a={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(r),!0)};return t.patch(r,a),t.applyData(r,a)}function nC(t,r){const a={type:"element",tagName:"br",properties:{},children:[]};return t.patch(r,a),[t.applyData(r,a),{type:"text",value:`
`}]}function eC(t,r){const a=r.value?r.value+`
`:"",o={},s=r.lang?r.lang.split(/\s+/):[];s.length>0&&(o.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:o,children:[{type:"text",value:a}]};return r.meta&&(c.data={meta:r.meta}),t.patch(r,c),c=t.applyData(r,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(r,c),c}function tC(t,r){const a={type:"element",tagName:"del",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function iC(t,r){const a={type:"element",tagName:"em",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function rC(t,r){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(r.identifier).toUpperCase(),s=Br(o.toLowerCase()),c=t.footnoteOrder.indexOf(o);let f,d=t.footnoteCounts.get(o);d===void 0?(d=0,t.footnoteOrder.push(o),f=t.footnoteOrder.length):f=c+1,d+=1,t.footnoteCounts.set(o,d);const h={type:"element",tagName:"a",properties:{href:"#"+a+"fn-"+s,id:a+"fnref-"+s+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};t.patch(r,h);const m={type:"element",tagName:"sup",properties:{},children:[h]};return t.patch(r,m),t.applyData(r,m)}function aC(t,r){const a={type:"element",tagName:"h"+r.depth,properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function lC(t,r){if(t.options.allowDangerousHtml){const a={type:"raw",value:r.value};return t.patch(r,a),t.applyData(r,a)}}function Ny(t,r){const a=r.referenceType;let o="]";if(a==="collapsed"?o+="[]":a==="full"&&(o+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+o}];const s=t.all(r),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const f=s[s.length-1];return f&&f.type==="text"?f.value+=o:s.push({type:"text",value:o}),s}function oC(t,r){const a=String(r.identifier).toUpperCase(),o=t.definitionById.get(a);if(!o)return Ny(t,r);const s={src:Br(o.url||""),alt:r.alt};o.title!==null&&o.title!==void 0&&(s.title=o.title);const c={type:"element",tagName:"img",properties:s,children:[]};return t.patch(r,c),t.applyData(r,c)}function sC(t,r){const a={src:Br(r.url)};r.alt!==null&&r.alt!==void 0&&(a.alt=r.alt),r.title!==null&&r.title!==void 0&&(a.title=r.title);const o={type:"element",tagName:"img",properties:a,children:[]};return t.patch(r,o),t.applyData(r,o)}function uC(t,r){const a={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};t.patch(r,a);const o={type:"element",tagName:"code",properties:{},children:[a]};return t.patch(r,o),t.applyData(r,o)}function cC(t,r){const a=String(r.identifier).toUpperCase(),o=t.definitionById.get(a);if(!o)return Ny(t,r);const s={href:Br(o.url||"")};o.title!==null&&o.title!==void 0&&(s.title=o.title);const c={type:"element",tagName:"a",properties:s,children:t.all(r)};return t.patch(r,c),t.applyData(r,c)}function fC(t,r){const a={href:Br(r.url)};r.title!==null&&r.title!==void 0&&(a.title=r.title);const o={type:"element",tagName:"a",properties:a,children:t.all(r)};return t.patch(r,o),t.applyData(r,o)}function pC(t,r,a){const o=t.all(r),s=a?dC(a):Dy(r),c={},f=[];if(typeof r.checked=="boolean"){const b=o[0];let g;b&&b.type==="element"&&b.tagName==="p"?g=b:(g={type:"element",tagName:"p",properties:{},children:[]},o.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let d=-1;for(;++d<o.length;){const b=o[d];(s||d!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!s?f.push(...b.children):f.push(b)}const h=o[o.length-1];h&&(s||h.type!=="element"||h.tagName!=="p")&&f.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:c,children:f};return t.patch(r,m),t.applyData(r,m)}function dC(t){let r=!1;if(t.type==="list"){r=t.spread||!1;const a=t.children;let o=-1;for(;!r&&++o<a.length;)r=Dy(a[o])}return r}function Dy(t){const r=t.spread;return r??t.children.length>1}function mC(t,r){const a={},o=t.all(r);let s=-1;for(typeof r.start=="number"&&r.start!==1&&(a.start=r.start);++s<o.length;){const f=o[s];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){a.className=["contains-task-list"];break}}const c={type:"element",tagName:r.ordered?"ol":"ul",properties:a,children:t.wrap(o,!0)};return t.patch(r,c),t.applyData(r,c)}function hC(t,r){const a={type:"element",tagName:"p",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function gC(t,r){const a={type:"root",children:t.wrap(t.all(r))};return t.patch(r,a),t.applyData(r,a)}function yC(t,r){const a={type:"element",tagName:"strong",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function bC(t,r){const a=t.all(r),o=a.shift(),s=[];if(o){const f={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(r.children[0],f),s.push(f)}if(a.length>0){const f={type:"element",tagName:"tbody",properties:{},children:t.wrap(a,!0)},d=sf(r.children[1]),h=fy(r.children[r.children.length-1]);d&&h&&(f.position={start:d,end:h}),s.push(f)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(r,c),t.applyData(r,c)}function xC(t,r,a){const o=a?a.children:void 0,c=(o?o.indexOf(r):1)===0?"th":"td",f=a&&a.type==="table"?a.align:void 0,d=f?f.length:r.children.length;let h=-1;const m=[];for(;++h<d;){const g=r.children[h],S={},x=f?f[h]:void 0;x&&(S.align=x);let _={type:"element",tagName:c,properties:S,children:[]};g&&(_.children=t.all(g),t.patch(g,_),_=t.applyData(g,_)),m.push(_)}const b={type:"element",tagName:"tr",properties:{},children:t.wrap(m,!0)};return t.patch(r,b),t.applyData(r,b)}function vC(t,r){const a={type:"element",tagName:"td",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}const rg=9,ag=32;function SC(t){const r=String(t),a=/\r?\n|\r/g;let o=a.exec(r),s=0;const c=[];for(;o;)c.push(lg(r.slice(s,o.index),s>0,!0),o[0]),s=o.index+o[0].length,o=a.exec(r);return c.push(lg(r.slice(s),s>0,!1)),c.join("")}function lg(t,r,a){let o=0,s=t.length;if(r){let c=t.codePointAt(o);for(;c===rg||c===ag;)o++,c=t.codePointAt(o)}if(a){let c=t.codePointAt(s-1);for(;c===rg||c===ag;)s--,c=t.codePointAt(s-1)}return s>o?t.slice(o,s):""}function wC(t,r){const a={type:"text",value:SC(String(r.value))};return t.patch(r,a),t.applyData(r,a)}function CC(t,r){const a={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(r,a),t.applyData(r,a)}const EC={blockquote:Kw,break:nC,code:eC,delete:tC,emphasis:iC,footnoteReference:rC,heading:aC,html:lC,imageReference:oC,image:sC,inlineCode:uC,linkReference:cC,link:fC,listItem:pC,list:mC,paragraph:hC,root:gC,strong:yC,table:bC,tableCell:vC,tableRow:xC,text:wC,thematicBreak:CC,toml:Eo,yaml:Eo,definition:Eo,footnoteDefinition:Eo};function Eo(){}const Oy=-1,Yo=0,Fa=1,Lo=2,hf=3,gf=4,yf=5,bf=6,Ry=7,zy=8,og=typeof self=="object"?self:globalThis,TC=(t,r)=>{const a=(s,c)=>(t.set(c,s),s),o=s=>{if(t.has(s))return t.get(s);const[c,f]=r[s];switch(c){case Yo:case Oy:return a(f,s);case Fa:{const d=a([],s);for(const h of f)d.push(o(h));return d}case Lo:{const d=a({},s);for(const[h,m]of f)d[o(h)]=o(m);return d}case hf:return a(new Date(f),s);case gf:{const{source:d,flags:h}=f;return a(new RegExp(d,h),s)}case yf:{const d=a(new Map,s);for(const[h,m]of f)d.set(o(h),o(m));return d}case bf:{const d=a(new Set,s);for(const h of f)d.add(o(h));return d}case Ry:{const{name:d,message:h}=f;return a(new og[d](h),s)}case zy:return a(BigInt(f),s);case"BigInt":return a(Object(BigInt(f)),s);case"ArrayBuffer":return a(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:d}=new Uint8Array(f);return a(new DataView(d),f)}}return a(new og[c](f),s)};return o},sg=t=>TC(new Map,t)(0),Ar="",{toString:_C}={},{keys:kC}=Object,Ba=t=>{const r=typeof t;if(r!=="object"||!t)return[Yo,r];const a=_C.call(t).slice(8,-1);switch(a){case"Array":return[Fa,Ar];case"Object":return[Lo,Ar];case"Date":return[hf,Ar];case"RegExp":return[gf,Ar];case"Map":return[yf,Ar];case"Set":return[bf,Ar];case"DataView":return[Fa,a]}return a.includes("Array")?[Fa,a]:a.includes("Error")?[Ry,a]:[Lo,a]},To=([t,r])=>t===Yo&&(r==="function"||r==="symbol"),AC=(t,r,a,o)=>{const s=(f,d)=>{const h=o.push(f)-1;return a.set(d,h),h},c=f=>{if(a.has(f))return a.get(f);let[d,h]=Ba(f);switch(d){case Yo:{let b=f;switch(h){case"bigint":d=zy,b=f.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+h);b=null;break;case"undefined":return s([Oy],f)}return s([d,b],f)}case Fa:{if(h){let S=f;return h==="DataView"?S=new Uint8Array(f.buffer):h==="ArrayBuffer"&&(S=new Uint8Array(f)),s([h,[...S]],f)}const b=[],g=s([d,b],f);for(const S of f)b.push(c(S));return g}case Lo:{if(h)switch(h){case"BigInt":return s([h,f.toString()],f);case"Boolean":case"Number":case"String":return s([h,f.valueOf()],f)}if(r&&"toJSON"in f)return c(f.toJSON());const b=[],g=s([d,b],f);for(const S of kC(f))(t||!To(Ba(f[S])))&&b.push([c(S),c(f[S])]);return g}case hf:return s([d,f.toISOString()],f);case gf:{const{source:b,flags:g}=f;return s([d,{source:b,flags:g}],f)}case yf:{const b=[],g=s([d,b],f);for(const[S,x]of f)(t||!(To(Ba(S))||To(Ba(x))))&&b.push([c(S),c(x)]);return g}case bf:{const b=[],g=s([d,b],f);for(const S of f)(t||!To(Ba(S)))&&b.push(c(S));return g}}const{message:m}=f;return s([d,{name:h,message:m}],f)};return c},ug=(t,{json:r,lossy:a}={})=>{const o=[];return AC(!(r||a),!!r,new Map,o)(t),o},jo=typeof structuredClone=="function"?(t,r)=>r&&("json"in r||"lossy"in r)?sg(ug(t,r)):structuredClone(t):(t,r)=>sg(ug(t,r));function PC(t,r){const a=[{type:"text",value:"↩"}];return r>1&&a.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),a}function MC(t,r){return"Back to reference "+(t+1)+(r>1?"-"+r:"")}function NC(t){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",a=t.options.footnoteBackContent||PC,o=t.options.footnoteBackLabel||MC,s=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",f=t.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let h=-1;for(;++h<t.footnoteOrder.length;){const m=t.footnoteById.get(t.footnoteOrder[h]);if(!m)continue;const b=t.all(m),g=String(m.identifier).toUpperCase(),S=Br(g.toLowerCase());let x=0;const _=[],O=t.footnoteCounts.get(g);for(;O!==void 0&&++x<=O;){_.length>0&&_.push({type:"text",value:" "});let L=typeof a=="string"?a:a(h,x);typeof L=="string"&&(L={type:"text",value:L}),_.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+S+(x>1?"-"+x:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(h,x),className:["data-footnote-backref"]},children:Array.isArray(L)?L:[L]})}const z=b[b.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const L=z.children[z.children.length-1];L&&L.type==="text"?L.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(..._)}else b.push(..._);const P={type:"element",tagName:"li",properties:{id:r+"fn-"+S},children:t.wrap(b,!0)};t.patch(m,P),d.push(P)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...jo(f),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(d,!0)},{type:"text",value:`
`}]}}const Go=(function(t){if(t==null)return zC;if(typeof t=="function")return Wo(t);if(typeof t=="object")return Array.isArray(t)?DC(t):OC(t);if(typeof t=="string")return RC(t);throw new Error("Expected function, string, or object as test")});function DC(t){const r=[];let a=-1;for(;++a<t.length;)r[a]=Go(t[a]);return Wo(o);function o(...s){let c=-1;for(;++c<r.length;)if(r[c].apply(this,s))return!0;return!1}}function OC(t){const r=t;return Wo(a);function a(o){const s=o;let c;for(c in t)if(s[c]!==r[c])return!1;return!0}}function RC(t){return Wo(r);function r(a){return a&&a.type===t}}function Wo(t){return r;function r(a,o,s){return!!(LC(a)&&t.call(this,a,typeof o=="number"?o:void 0,s||void 0))}}function zC(){return!0}function LC(t){return t!==null&&typeof t=="object"&&"type"in t}const Ly=[],jC=!0,Wc=!1,BC="skip";function jy(t,r,a,o){let s;typeof r=="function"&&typeof a!="function"?(o=a,a=r):s=r;const c=Go(s),f=o?-1:1;d(t,void 0,[])();function d(h,m,b){const g=h&&typeof h=="object"?h:{};if(typeof g.type=="string"){const x=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(h.type+(x?"<"+x+">":""))+")"})}return S;function S(){let x=Ly,_,O,z;if((!r||c(h,m,b[b.length-1]||void 0))&&(x=UC(a(h,b)),x[0]===Wc))return x;if("children"in h&&h.children){const P=h;if(P.children&&x[0]!==BC)for(O=(o?P.children.length:-1)+f,z=b.concat(P);O>-1&&O<P.children.length;){const L=P.children[O];if(_=d(L,O,z)(),_[0]===Wc)return _;O=typeof _[1]=="number"?_[1]:O+f}}return x}}}function UC(t){return Array.isArray(t)?t:typeof t=="number"?[jC,t]:t==null?Ly:[t]}function xf(t,r,a,o){let s,c,f;typeof r=="function"&&typeof a!="function"?(c=void 0,f=r,s=a):(c=r,f=a,s=o),jy(t,c,d,s);function d(h,m){const b=m[m.length-1],g=b?b.children.indexOf(h):void 0;return f(h,g,b)}}const Qc={}.hasOwnProperty,HC={};function IC(t,r){const a=r||HC,o=new Map,s=new Map,c=new Map,f={...EC,...a.handlers},d={all:m,applyData:FC,definitionById:o,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:f,one:h,options:a,patch:qC,wrap:YC};return xf(t,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const g=b.type==="definition"?o:s,S=String(b.identifier).toUpperCase();g.has(S)||g.set(S,b)}}),d;function h(b,g){const S=b.type,x=d.handlers[S];if(Qc.call(d.handlers,S)&&x)return x(d,b,g);if(d.options.passThrough&&d.options.passThrough.includes(S)){if("children"in b){const{children:O,...z}=b,P=jo(z);return P.children=d.all(b),P}return jo(b)}return(d.options.unknownHandler||VC)(d,b,g)}function m(b){const g=[];if("children"in b){const S=b.children;let x=-1;for(;++x<S.length;){const _=d.one(S[x],b);if(_){if(x&&S[x-1].type==="break"&&(!Array.isArray(_)&&_.type==="text"&&(_.value=cg(_.value)),!Array.isArray(_)&&_.type==="element")){const O=_.children[0];O&&O.type==="text"&&(O.value=cg(O.value))}Array.isArray(_)?g.push(..._):g.push(_)}}}return g}}function qC(t,r){t.position&&(r.position=M2(t))}function FC(t,r){let a=r;if(t&&t.data){const o=t.data.hName,s=t.data.hChildren,c=t.data.hProperties;if(typeof o=="string")if(a.type==="element")a.tagName=o;else{const f="children"in a?a.children:[a];a={type:"element",tagName:o,properties:{},children:f}}a.type==="element"&&c&&Object.assign(a.properties,jo(c)),"children"in a&&a.children&&s!==null&&s!==void 0&&(a.children=s)}return a}function VC(t,r){const a=r.data||{},o="value"in r&&!(Qc.call(a,"hProperties")||Qc.call(a,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:t.all(r)};return t.patch(r,o),t.applyData(r,o)}function YC(t,r){const a=[];let o=-1;for(r&&a.push({type:"text",value:`
`});++o<t.length;)o&&a.push({type:"text",value:`
`}),a.push(t[o]);return r&&t.length>0&&a.push({type:"text",value:`
`}),a}function cg(t){let r=0,a=t.charCodeAt(r);for(;a===9||a===32;)r++,a=t.charCodeAt(r);return t.slice(r)}function fg(t,r){const a=IC(t,r),o=a.one(t,void 0),s=NC(a),c=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function GC(t,r){return t&&"run"in t?async function(a,o){const s=fg(a,{file:o,...r});await t.run(s,o)}:function(a,o){return fg(a,{file:o,...t||r})}}function pg(t){if(t)throw t}var Ec,dg;function WC(){if(dg)return Ec;dg=1;var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},c=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var b=t.call(m,"constructor"),g=m.constructor&&m.constructor.prototype&&t.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!b&&!g)return!1;var S;for(S in m);return typeof S>"u"||t.call(m,S)},f=function(m,b){a&&b.name==="__proto__"?a(m,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):m[b.name]=b.newValue},d=function(m,b){if(b==="__proto__")if(t.call(m,b)){if(o)return o(m,b).value}else return;return m[b]};return Ec=function h(){var m,b,g,S,x,_,O=arguments[0],z=1,P=arguments.length,L=!1;for(typeof O=="boolean"&&(L=O,O=arguments[1]||{},z=2),(O==null||typeof O!="object"&&typeof O!="function")&&(O={});z<P;++z)if(m=arguments[z],m!=null)for(b in m)g=d(O,b),S=d(m,b),O!==S&&(L&&S&&(c(S)||(x=s(S)))?(x?(x=!1,_=g&&s(g)?g:[]):_=g&&c(g)?g:{},f(O,{name:b,newValue:h(L,_,S)})):typeof S<"u"&&f(O,{name:b,newValue:S}));return O},Ec}var QC=WC();const Tc=Jc(QC);function Xc(t){if(typeof t!="object"||t===null)return!1;const r=Object.getPrototypeOf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function XC(){const t=[],r={run:a,use:o};return r;function a(...s){let c=-1;const f=s.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);d(null,...s);function d(h,...m){const b=t[++c];let g=-1;if(h){f(h);return}for(;++g<s.length;)(m[g]===null||m[g]===void 0)&&(m[g]=s[g]);s=m,b?ZC(b,d)(...m):f(null,...m)}}function o(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),r}}function ZC(t,r){let a;return o;function o(...f){const d=t.length>f.length;let h;d&&f.push(s);try{h=t.apply(this,f)}catch(m){const b=m;if(d&&a)throw b;return s(b)}d||(h&&h.then&&typeof h.then=="function"?h.then(c,s):h instanceof Error?s(h):c(h))}function s(f,...d){a||(a=!0,r(f,...d))}function c(f){s(null,f)}}const ht={basename:$C,dirname:JC,extname:KC,join:nE,sep:"/"};function $C(t,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');el(t);let a=0,o=-1,s=t.length,c;if(r===void 0||r.length===0||r.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(c){a=s+1;break}}else o<0&&(c=!0,o=s+1);return o<0?"":t.slice(a,o)}if(r===t)return"";let f=-1,d=r.length-1;for(;s--;)if(t.codePointAt(s)===47){if(c){a=s+1;break}}else f<0&&(c=!0,f=s+1),d>-1&&(t.codePointAt(s)===r.codePointAt(d--)?d<0&&(o=s):(d=-1,o=f));return a===o?o=f:o<0&&(o=t.length),t.slice(a,o)}function JC(t){if(el(t),t.length===0)return".";let r=-1,a=t.length,o;for(;--a;)if(t.codePointAt(a)===47){if(o){r=a;break}}else o||(o=!0);return r<0?t.codePointAt(0)===47?"/":".":r===1&&t.codePointAt(0)===47?"//":t.slice(0,r)}function KC(t){el(t);let r=t.length,a=-1,o=0,s=-1,c=0,f;for(;r--;){const d=t.codePointAt(r);if(d===47){if(f){o=r+1;break}continue}a<0&&(f=!0,a=r+1),d===46?s<0?s=r:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||a<0||c===0||c===1&&s===a-1&&s===o+1?"":t.slice(s,a)}function nE(...t){let r=-1,a;for(;++r<t.length;)el(t[r]),t[r]&&(a=a===void 0?t[r]:a+"/"+t[r]);return a===void 0?".":eE(a)}function eE(t){el(t);const r=t.codePointAt(0)===47;let a=tE(t,!r);return a.length===0&&!r&&(a="."),a.length>0&&t.codePointAt(t.length-1)===47&&(a+="/"),r?"/"+a:a}function tE(t,r){let a="",o=0,s=-1,c=0,f=-1,d,h;for(;++f<=t.length;){if(f<t.length)d=t.codePointAt(f);else{if(d===47)break;d=47}if(d===47){if(!(s===f-1||c===1))if(s!==f-1&&c===2){if(a.length<2||o!==2||a.codePointAt(a.length-1)!==46||a.codePointAt(a.length-2)!==46){if(a.length>2){if(h=a.lastIndexOf("/"),h!==a.length-1){h<0?(a="",o=0):(a=a.slice(0,h),o=a.length-1-a.lastIndexOf("/")),s=f,c=0;continue}}else if(a.length>0){a="",o=0,s=f,c=0;continue}}r&&(a=a.length>0?a+"/..":"..",o=2)}else a.length>0?a+="/"+t.slice(s+1,f):a=t.slice(s+1,f),o=f-s-1;s=f,c=0}else d===46&&c>-1?c++:c=-1}return a}function el(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const iE={cwd:rE};function rE(){return"/"}function Zc(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function aE(t){if(typeof t=="string")t=new URL(t);else if(!Zc(t)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(t.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return lE(t)}function lE(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const r=t.pathname;let a=-1;for(;++a<r.length;)if(r.codePointAt(a)===37&&r.codePointAt(a+1)===50){const o=r.codePointAt(a+2);if(o===70||o===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(r)}const _c=["history","path","basename","stem","extname","dirname"];class By{constructor(r){let a;r?Zc(r)?a={path:r}:typeof r=="string"||oE(r)?a={value:r}:a=r:a={},this.cwd="cwd"in a?"":iE.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<_c.length;){const c=_c[o];c in a&&a[c]!==void 0&&a[c]!==null&&(this[c]=c==="history"?[...a[c]]:a[c])}let s;for(s in a)_c.includes(s)||(this[s]=a[s])}get basename(){return typeof this.path=="string"?ht.basename(this.path):void 0}set basename(r){Ac(r,"basename"),kc(r,"basename"),this.path=ht.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?ht.dirname(this.path):void 0}set dirname(r){mg(this.basename,"dirname"),this.path=ht.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?ht.extname(this.path):void 0}set extname(r){if(kc(r,"extname"),mg(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ht.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){Zc(r)&&(r=aE(r)),Ac(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?ht.basename(this.path,this.extname):void 0}set stem(r){Ac(r,"stem"),kc(r,"stem"),this.path=ht.join(this.dirname||"",r+(this.extname||""))}fail(r,a,o){const s=this.message(r,a,o);throw s.fatal=!0,s}info(r,a,o){const s=this.message(r,a,o);return s.fatal=void 0,s}message(r,a,o){const s=new xe(r,a,o);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function kc(t,r){if(t&&t.includes(ht.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+ht.sep+"`")}function Ac(t,r){if(!t)throw new Error("`"+r+"` cannot be empty")}function mg(t,r){if(!t)throw new Error("Setting `"+r+"` requires `path` to be set too")}function oE(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const sE=(function(t){const o=this.constructor.prototype,s=o[t],c=function(){return s.apply(c,arguments)};return Object.setPrototypeOf(c,o),c}),uE={}.hasOwnProperty;class vf extends sE{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=XC()}copy(){const r=new vf;let a=-1;for(;++a<this.attachers.length;){const o=this.attachers[a];r.use(...o)}return r.data(Tc(!0,{},this.namespace)),r}data(r,a){return typeof r=="string"?arguments.length===2?(Nc("data",this.frozen),this.namespace[r]=a,this):uE.call(this.namespace,r)&&this.namespace[r]||void 0:r?(Nc("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[a,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const s=a.call(r,...o);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const a=_o(r),o=this.parser||this.Parser;return Pc("parse",o),o(String(a),a)}process(r,a){const o=this;return this.freeze(),Pc("process",this.parser||this.Parser),Mc("process",this.compiler||this.Compiler),a?s(void 0,a):new Promise(s);function s(c,f){const d=_o(r),h=o.parse(d);o.run(h,d,function(b,g,S){if(b||!g||!S)return m(b);const x=g,_=o.stringify(x,S);pE(_)?S.value=_:S.result=_,m(b,S)});function m(b,g){b||!g?f(b):c?c(g):a(void 0,g)}}}processSync(r){let a=!1,o;return this.freeze(),Pc("processSync",this.parser||this.Parser),Mc("processSync",this.compiler||this.Compiler),this.process(r,s),gg("processSync","process",a),o;function s(c,f){a=!0,pg(c),o=f}}run(r,a,o){hg(r),this.freeze();const s=this.transformers;return!o&&typeof a=="function"&&(o=a,a=void 0),o?c(void 0,o):new Promise(c);function c(f,d){const h=_o(a);s.run(r,h,m);function m(b,g,S){const x=g||r;b?d(b):f?f(x):o(void 0,x,S)}}}runSync(r,a){let o=!1,s;return this.run(r,a,c),gg("runSync","run",o),s;function c(f,d){pg(f),s=d,o=!0}}stringify(r,a){this.freeze();const o=_o(a),s=this.compiler||this.Compiler;return Mc("stringify",s),hg(r),s(r,o)}use(r,...a){const o=this.attachers,s=this.namespace;if(Nc("use",this.frozen),r!=null)if(typeof r=="function")h(r,a);else if(typeof r=="object")Array.isArray(r)?d(r):f(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function c(m){if(typeof m=="function")h(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[b,...g]=m;h(b,g)}else f(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function f(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(m.plugins),m.settings&&(s.settings=Tc(!0,s.settings,m.settings))}function d(m){let b=-1;if(m!=null)if(Array.isArray(m))for(;++b<m.length;){const g=m[b];c(g)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function h(m,b){let g=-1,S=-1;for(;++g<o.length;)if(o[g][0]===m){S=g;break}if(S===-1)o.push([m,...b]);else if(b.length>0){let[x,..._]=b;const O=o[S][1];Xc(O)&&Xc(x)&&(x=Tc(!0,O,x)),o[S]=[m,x,..._]}}}}const cE=new vf().freeze();function Pc(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Mc(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Nc(t,r){if(r)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hg(t){if(!Xc(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function gg(t,r,a){if(!a)throw new Error("`"+t+"` finished async. Use `"+r+"` instead")}function _o(t){return fE(t)?t:new By(t)}function fE(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function pE(t){return typeof t=="string"||dE(t)}function dE(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const mE="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",yg=[],bg={allowDangerousHtml:!0},hE=/^(https?|ircs?|mailto|xmpp)$/i,gE=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function yE(t){const r=bE(t),a=xE(t);return vE(r.runSync(r.parse(a),a),t)}function bE(t){const r=t.rehypePlugins||yg,a=t.remarkPlugins||yg,o=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...bg}:bg;return cE().use(Jw).use(a).use(GC,o).use(r)}function xE(t){const r=t.children||"",a=new By;return typeof r=="string"&&(a.value=r),a}function vE(t,r){const a=r.allowedElements,o=r.allowElement,s=r.components,c=r.disallowedElements,f=r.skipHtml,d=r.unwrapDisallowed,h=r.urlTransform||SE;for(const b of gE)Object.hasOwn(r,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+mE+b.id,void 0);return xf(t,m),z2(t,{Fragment:E.Fragment,components:s,ignoreInvalidStyle:!0,jsx:E.jsx,jsxs:E.jsxs,passKeys:!0,passNode:!0});function m(b,g,S){if(b.type==="raw"&&S&&typeof g=="number")return f?S.children.splice(g,1):S.children[g]={type:"text",value:b.value},g;if(b.type==="element"){let x;for(x in Sc)if(Object.hasOwn(Sc,x)&&Object.hasOwn(b.properties,x)){const _=b.properties[x],O=Sc[x];(O===null||O.includes(b.tagName))&&(b.properties[x]=h(String(_||""),x,b))}}if(b.type==="element"){let x=a?!a.includes(b.tagName):c?c.includes(b.tagName):!1;if(!x&&o&&typeof g=="number"&&(x=!o(b,g,S)),x&&S&&typeof g=="number")return d&&b.children?S.children.splice(g,1,...b.children):S.children.splice(g,1),g}}}function SE(t){const r=t.indexOf(":"),a=t.indexOf("?"),o=t.indexOf("#"),s=t.indexOf("/");return r===-1||s!==-1&&r>s||a!==-1&&r>a||o!==-1&&r>o||hE.test(t.slice(0,r))?t:""}function xg(t,r){const a=String(t);if(typeof r!="string")throw new TypeError("Expected character");let o=0,s=a.indexOf(r);for(;s!==-1;)o++,s=a.indexOf(r,s+r.length);return o}function wE(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function CE(t,r,a){const s=Go((a||{}).ignore||[]),c=EE(r);let f=-1;for(;++f<c.length;)jy(t,"text",d);function d(m,b){let g=-1,S;for(;++g<b.length;){const x=b[g],_=S?S.children:void 0;if(s(x,_?_.indexOf(x):void 0,S))return;S=x}if(S)return h(m,b)}function h(m,b){const g=b[b.length-1],S=c[f][0],x=c[f][1];let _=0;const z=g.children.indexOf(m);let P=!1,L=[];S.lastIndex=0;let I=S.exec(m.value);for(;I;){const rn=I.index,J={index:I.index,input:I.input,stack:[...b,m]};let U=x(...I,J);if(typeof U=="string"&&(U=U.length>0?{type:"text",value:U}:void 0),U===!1?S.lastIndex=rn+1:(_!==rn&&L.push({type:"text",value:m.value.slice(_,rn)}),Array.isArray(U)?L.push(...U):U&&L.push(U),_=rn+I[0].length,P=!0),!S.global)break;I=S.exec(m.value)}return P?(_<m.value.length&&L.push({type:"text",value:m.value.slice(_)}),g.children.splice(z,1,...L)):L=[m],z+L.length}}function EE(t){const r=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const a=!t[0]||Array.isArray(t[0])?t:[t];let o=-1;for(;++o<a.length;){const s=a[o];r.push([TE(s[0]),_E(s[1])])}return r}function TE(t){return typeof t=="string"?new RegExp(wE(t),"g"):t}function _E(t){return typeof t=="function"?t:function(){return t}}const Dc="phrasing",Oc=["autolink","link","image","label"];function kE(){return{transforms:[RE],enter:{literalAutolink:PE,literalAutolinkEmail:Rc,literalAutolinkHttp:Rc,literalAutolinkWww:Rc},exit:{literalAutolink:OE,literalAutolinkEmail:DE,literalAutolinkHttp:ME,literalAutolinkWww:NE}}}function AE(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Dc,notInConstruct:Oc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Dc,notInConstruct:Oc},{character:":",before:"[ps]",after:"\\/",inConstruct:Dc,notInConstruct:Oc}]}}function PE(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Rc(t){this.config.enter.autolinkProtocol.call(this,t)}function ME(t){this.config.exit.autolinkProtocol.call(this,t)}function NE(t){this.config.exit.data.call(this,t);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(t)}function DE(t){this.config.exit.autolinkEmail.call(this,t)}function OE(t){this.exit(t)}function RE(t){CE(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,zE],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),LE]],{ignore:["link","linkReference"]})}function zE(t,r,a,o,s){let c="";if(!Uy(s)||(/^w/i.test(r)&&(a=r+a,r="",c="http://"),!jE(a)))return!1;const f=BE(a+o);if(!f[0])return!1;const d={type:"link",title:null,url:c+r+f[0],children:[{type:"text",value:r+f[0]}]};return f[1]?[d,{type:"text",value:f[1]}]:d}function LE(t,r,a,o){return!Uy(o,!0)||/[-\d_]$/.test(a)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+a,children:[{type:"text",value:r+"@"+a}]}}function jE(t){const r=t.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function BE(t){const r=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!r)return[t,void 0];t=t.slice(0,r.index);let a=r[0],o=a.indexOf(")");const s=xg(t,"(");let c=xg(t,")");for(;o!==-1&&s>c;)t+=a.slice(0,o+1),a=a.slice(o+1),o=a.indexOf(")"),c++;return[t,a]}function Uy(t,r){const a=t.input.charCodeAt(t.index-1);return(t.index===0||zi(a)||Fo(a))&&(!r||a!==47)}Hy.peek=WE;function UE(){this.buffer()}function HE(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function IE(){this.buffer()}function qE(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function FE(t){const r=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=st(this.sliceSerialize(t)).toLowerCase(),a.label=r}function VE(t){this.exit(t)}function YE(t){const r=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=st(this.sliceSerialize(t)).toLowerCase(),a.label=r}function GE(t){this.exit(t)}function WE(){return"["}function Hy(t,r,a,o){const s=a.createTracker(o);let c=s.move("[^");const f=a.enter("footnoteReference"),d=a.enter("reference");return c+=s.move(a.safe(a.associationId(t),{after:"]",before:c})),d(),f(),c+=s.move("]"),c}function QE(){return{enter:{gfmFootnoteCallString:UE,gfmFootnoteCall:HE,gfmFootnoteDefinitionLabelString:IE,gfmFootnoteDefinition:qE},exit:{gfmFootnoteCallString:FE,gfmFootnoteCall:VE,gfmFootnoteDefinitionLabelString:YE,gfmFootnoteDefinition:GE}}}function XE(t){let r=!1;return t&&t.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:a,footnoteReference:Hy},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function a(o,s,c,f){const d=c.createTracker(f);let h=d.move("[^");const m=c.enter("footnoteDefinition"),b=c.enter("label");return h+=d.move(c.safe(c.associationId(o),{before:h,after:"]"})),b(),h+=d.move("]:"),o.children&&o.children.length>0&&(d.shift(4),h+=d.move((r?`
`:" ")+c.indentLines(c.containerFlow(o,d.current()),r?Iy:ZE))),m(),h}}function ZE(t,r,a){return r===0?t:Iy(t,r,a)}function Iy(t,r,a){return(a?"":"    ")+t}const $E=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];qy.peek=tT;function JE(){return{canContainEols:["delete"],enter:{strikethrough:nT},exit:{strikethrough:eT}}}function KE(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:$E}],handlers:{delete:qy}}}function nT(t){this.enter({type:"delete",children:[]},t)}function eT(t){this.exit(t)}function qy(t,r,a,o){const s=a.createTracker(o),c=a.enter("strikethrough");let f=s.move("~~");return f+=a.containerPhrasing(t,{...s.current(),before:f,after:"~"}),f+=s.move("~~"),c(),f}function tT(){return"~"}function iT(t){return t.length}function rT(t,r){const a=r||{},o=(a.align||[]).concat(),s=a.stringLength||iT,c=[],f=[],d=[],h=[];let m=0,b=-1;for(;++b<t.length;){const O=[],z=[];let P=-1;for(t[b].length>m&&(m=t[b].length);++P<t[b].length;){const L=aT(t[b][P]);if(a.alignDelimiters!==!1){const I=s(L);z[P]=I,(h[P]===void 0||I>h[P])&&(h[P]=I)}O.push(L)}f[b]=O,d[b]=z}let g=-1;if(typeof o=="object"&&"length"in o)for(;++g<m;)c[g]=vg(o[g]);else{const O=vg(o);for(;++g<m;)c[g]=O}g=-1;const S=[],x=[];for(;++g<m;){const O=c[g];let z="",P="";O===99?(z=":",P=":"):O===108?z=":":O===114&&(P=":");let L=a.alignDelimiters===!1?1:Math.max(1,h[g]-z.length-P.length);const I=z+"-".repeat(L)+P;a.alignDelimiters!==!1&&(L=z.length+L+P.length,L>h[g]&&(h[g]=L),x[g]=L),S[g]=I}f.splice(1,0,S),d.splice(1,0,x),b=-1;const _=[];for(;++b<f.length;){const O=f[b],z=d[b];g=-1;const P=[];for(;++g<m;){const L=O[g]||"";let I="",rn="";if(a.alignDelimiters!==!1){const J=h[g]-(z[g]||0),U=c[g];U===114?I=" ".repeat(J):U===99?J%2?(I=" ".repeat(J/2+.5),rn=" ".repeat(J/2-.5)):(I=" ".repeat(J/2),rn=I):rn=" ".repeat(J)}a.delimiterStart!==!1&&!g&&P.push("|"),a.padding!==!1&&!(a.alignDelimiters===!1&&L==="")&&(a.delimiterStart!==!1||g)&&P.push(" "),a.alignDelimiters!==!1&&P.push(I),P.push(L),a.alignDelimiters!==!1&&P.push(rn),a.padding!==!1&&P.push(" "),(a.delimiterEnd!==!1||g!==m-1)&&P.push("|")}_.push(a.delimiterEnd===!1?P.join("").replace(/ +$/,""):P.join(""))}return _.join(`
`)}function aT(t){return t==null?"":String(t)}function vg(t){const r=typeof t=="string"?t.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function lT(t,r,a,o){const s=a.enter("blockquote"),c=a.createTracker(o);c.move("> "),c.shift(2);const f=a.indentLines(a.containerFlow(t,c.current()),oT);return s(),f}function oT(t,r,a){return">"+(a?"":" ")+t}function sT(t,r){return Sg(t,r.inConstruct,!0)&&!Sg(t,r.notInConstruct,!1)}function Sg(t,r,a){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return a;let o=-1;for(;++o<r.length;)if(t.includes(r[o]))return!0;return!1}function wg(t,r,a,o){let s=-1;for(;++s<a.unsafe.length;)if(a.unsafe[s].character===`
`&&sT(a.stack,a.unsafe[s]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function uT(t,r){const a=String(t);let o=a.indexOf(r),s=o,c=0,f=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===s?++c>f&&(f=c):c=1,s=o+r.length,o=a.indexOf(r,s);return f}function cT(t,r){return!!(r.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function fT(t){const r=t.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function pT(t,r,a,o){const s=fT(a),c=t.value||"",f=s==="`"?"GraveAccent":"Tilde";if(cT(t,a)){const g=a.enter("codeIndented"),S=a.indentLines(c,dT);return g(),S}const d=a.createTracker(o),h=s.repeat(Math.max(uT(c,s)+1,3)),m=a.enter("codeFenced");let b=d.move(h);if(t.lang){const g=a.enter(`codeFencedLang${f}`);b+=d.move(a.safe(t.lang,{before:b,after:" ",encode:["`"],...d.current()})),g()}if(t.lang&&t.meta){const g=a.enter(`codeFencedMeta${f}`);b+=d.move(" "),b+=d.move(a.safe(t.meta,{before:b,after:`
`,encode:["`"],...d.current()})),g()}return b+=d.move(`
`),c&&(b+=d.move(c+`
`)),b+=d.move(h),m(),b}function dT(t,r,a){return(a?"":"    ")+t}function Sf(t){const r=t.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function mT(t,r,a,o){const s=Sf(a),c=s==='"'?"Quote":"Apostrophe",f=a.enter("definition");let d=a.enter("label");const h=a.createTracker(o);let m=h.move("[");return m+=h.move(a.safe(a.associationId(t),{before:m,after:"]",...h.current()})),m+=h.move("]: "),d(),!t.url||/[\0- \u007F]/.test(t.url)?(d=a.enter("destinationLiteral"),m+=h.move("<"),m+=h.move(a.safe(t.url,{before:m,after:">",...h.current()})),m+=h.move(">")):(d=a.enter("destinationRaw"),m+=h.move(a.safe(t.url,{before:m,after:t.title?" ":`
`,...h.current()}))),d(),t.title&&(d=a.enter(`title${c}`),m+=h.move(" "+s),m+=h.move(a.safe(t.title,{before:m,after:s,...h.current()})),m+=h.move(s),d()),f(),m}function hT(t){const r=t.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function Qa(t){return"&#x"+t.toString(16).toUpperCase()+";"}function Bo(t,r,a){const o=Rr(t),s=Rr(r);return o===void 0?s===void 0?a==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:o===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Fy.peek=gT;function Fy(t,r,a,o){const s=hT(a),c=a.enter("emphasis"),f=a.createTracker(o),d=f.move(s);let h=f.move(a.containerPhrasing(t,{after:s,before:d,...f.current()}));const m=h.charCodeAt(0),b=Bo(o.before.charCodeAt(o.before.length-1),m,s);b.inside&&(h=Qa(m)+h.slice(1));const g=h.charCodeAt(h.length-1),S=Bo(o.after.charCodeAt(0),g,s);S.inside&&(h=h.slice(0,-1)+Qa(g));const x=f.move(s);return c(),a.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},d+h+x}function gT(t,r,a){return a.options.emphasis||"*"}function yT(t,r){let a=!1;return xf(t,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return a=!0,Wc}),!!((!t.depth||t.depth<3)&&pf(t)&&(r.options.setext||a))}function bT(t,r,a,o){const s=Math.max(Math.min(6,t.depth||1),1),c=a.createTracker(o);if(yT(t,a)){const b=a.enter("headingSetext"),g=a.enter("phrasing"),S=a.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return g(),b(),S+`
`+(s===1?"=":"-").repeat(S.length-(Math.max(S.lastIndexOf("\r"),S.lastIndexOf(`
`))+1))}const f="#".repeat(s),d=a.enter("headingAtx"),h=a.enter("phrasing");c.move(f+" ");let m=a.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(m)&&(m=Qa(m.charCodeAt(0))+m.slice(1)),m=m?f+" "+m:f,a.options.closeAtx&&(m+=" "+f),h(),d(),m}Vy.peek=xT;function Vy(t){return t.value||""}function xT(){return"<"}Yy.peek=vT;function Yy(t,r,a,o){const s=Sf(a),c=s==='"'?"Quote":"Apostrophe",f=a.enter("image");let d=a.enter("label");const h=a.createTracker(o);let m=h.move("![");return m+=h.move(a.safe(t.alt,{before:m,after:"]",...h.current()})),m+=h.move("]("),d(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(d=a.enter("destinationLiteral"),m+=h.move("<"),m+=h.move(a.safe(t.url,{before:m,after:">",...h.current()})),m+=h.move(">")):(d=a.enter("destinationRaw"),m+=h.move(a.safe(t.url,{before:m,after:t.title?" ":")",...h.current()}))),d(),t.title&&(d=a.enter(`title${c}`),m+=h.move(" "+s),m+=h.move(a.safe(t.title,{before:m,after:s,...h.current()})),m+=h.move(s),d()),m+=h.move(")"),f(),m}function vT(){return"!"}Gy.peek=ST;function Gy(t,r,a,o){const s=t.referenceType,c=a.enter("imageReference");let f=a.enter("label");const d=a.createTracker(o);let h=d.move("![");const m=a.safe(t.alt,{before:h,after:"]",...d.current()});h+=d.move(m+"]["),f();const b=a.stack;a.stack=[],f=a.enter("reference");const g=a.safe(a.associationId(t),{before:h,after:"]",...d.current()});return f(),a.stack=b,c(),s==="full"||!m||m!==g?h+=d.move(g+"]"):s==="shortcut"?h=h.slice(0,-1):h+=d.move("]"),h}function ST(){return"!"}Wy.peek=wT;function Wy(t,r,a){let o=t.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(o);)s+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++c<a.unsafe.length;){const f=a.unsafe[c],d=a.compilePattern(f);let h;if(f.atBreak)for(;h=d.exec(o);){let m=h.index;o.charCodeAt(m)===10&&o.charCodeAt(m-1)===13&&m--,o=o.slice(0,m)+" "+o.slice(h.index+1)}}return s+o+s}function wT(){return"`"}function Qy(t,r){const a=pf(t);return!!(!r.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(a===t.url||"mailto:"+a===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}Xy.peek=CT;function Xy(t,r,a,o){const s=Sf(a),c=s==='"'?"Quote":"Apostrophe",f=a.createTracker(o);let d,h;if(Qy(t,a)){const b=a.stack;a.stack=[],d=a.enter("autolink");let g=f.move("<");return g+=f.move(a.containerPhrasing(t,{before:g,after:">",...f.current()})),g+=f.move(">"),d(),a.stack=b,g}d=a.enter("link"),h=a.enter("label");let m=f.move("[");return m+=f.move(a.containerPhrasing(t,{before:m,after:"](",...f.current()})),m+=f.move("]("),h(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(h=a.enter("destinationLiteral"),m+=f.move("<"),m+=f.move(a.safe(t.url,{before:m,after:">",...f.current()})),m+=f.move(">")):(h=a.enter("destinationRaw"),m+=f.move(a.safe(t.url,{before:m,after:t.title?" ":")",...f.current()}))),h(),t.title&&(h=a.enter(`title${c}`),m+=f.move(" "+s),m+=f.move(a.safe(t.title,{before:m,after:s,...f.current()})),m+=f.move(s),h()),m+=f.move(")"),d(),m}function CT(t,r,a){return Qy(t,a)?"<":"["}Zy.peek=ET;function Zy(t,r,a,o){const s=t.referenceType,c=a.enter("linkReference");let f=a.enter("label");const d=a.createTracker(o);let h=d.move("[");const m=a.containerPhrasing(t,{before:h,after:"]",...d.current()});h+=d.move(m+"]["),f();const b=a.stack;a.stack=[],f=a.enter("reference");const g=a.safe(a.associationId(t),{before:h,after:"]",...d.current()});return f(),a.stack=b,c(),s==="full"||!m||m!==g?h+=d.move(g+"]"):s==="shortcut"?h=h.slice(0,-1):h+=d.move("]"),h}function ET(){return"["}function wf(t){const r=t.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function TT(t){const r=wf(t),a=t.options.bulletOther;if(!a)return r==="*"?"-":"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(a===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+a+"`) to be different");return a}function _T(t){const r=t.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function $y(t){const r=t.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function kT(t,r,a,o){const s=a.enter("list"),c=a.bulletCurrent;let f=t.ordered?_T(a):wf(a);const d=t.ordered?f==="."?")":".":TT(a);let h=r&&a.bulletLastUsed?f===a.bulletLastUsed:!1;if(!t.ordered){const b=t.children?t.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&a.stack[a.stack.length-1]==="list"&&a.stack[a.stack.length-2]==="listItem"&&a.stack[a.stack.length-3]==="list"&&a.stack[a.stack.length-4]==="listItem"&&a.indexStack[a.indexStack.length-1]===0&&a.indexStack[a.indexStack.length-2]===0&&a.indexStack[a.indexStack.length-3]===0&&(h=!0),$y(a)===f&&b){let g=-1;for(;++g<t.children.length;){const S=t.children[g];if(S&&S.type==="listItem"&&S.children&&S.children[0]&&S.children[0].type==="thematicBreak"){h=!0;break}}}}h&&(f=d),a.bulletCurrent=f;const m=a.containerFlow(t,o);return a.bulletLastUsed=f,a.bulletCurrent=c,s(),m}function AT(t){const r=t.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function PT(t,r,a,o){const s=AT(a);let c=a.bulletCurrent||wf(a);r&&r.type==="list"&&r.ordered&&(c=(typeof r.start=="number"&&r.start>-1?r.start:1)+(a.options.incrementListMarker===!1?0:r.children.indexOf(t))+c);let f=c.length+1;(s==="tab"||s==="mixed"&&(r&&r.type==="list"&&r.spread||t.spread))&&(f=Math.ceil(f/4)*4);const d=a.createTracker(o);d.move(c+" ".repeat(f-c.length)),d.shift(f);const h=a.enter("listItem"),m=a.indentLines(a.containerFlow(t,d.current()),b);return h(),m;function b(g,S,x){return S?(x?"":" ".repeat(f))+g:(x?c:c+" ".repeat(f-c.length))+g}}function MT(t,r,a,o){const s=a.enter("paragraph"),c=a.enter("phrasing"),f=a.containerPhrasing(t,o);return c(),s(),f}const NT=Go(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function DT(t,r,a,o){return(t.children.some(function(f){return NT(f)})?a.containerPhrasing:a.containerFlow).call(a,t,o)}function OT(t){const r=t.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}Jy.peek=RT;function Jy(t,r,a,o){const s=OT(a),c=a.enter("strong"),f=a.createTracker(o),d=f.move(s+s);let h=f.move(a.containerPhrasing(t,{after:s,before:d,...f.current()}));const m=h.charCodeAt(0),b=Bo(o.before.charCodeAt(o.before.length-1),m,s);b.inside&&(h=Qa(m)+h.slice(1));const g=h.charCodeAt(h.length-1),S=Bo(o.after.charCodeAt(0),g,s);S.inside&&(h=h.slice(0,-1)+Qa(g));const x=f.move(s+s);return c(),a.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},d+h+x}function RT(t,r,a){return a.options.strong||"*"}function zT(t,r,a,o){return a.safe(t.value,o)}function LT(t){const r=t.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function jT(t,r,a){const o=($y(a)+(a.options.ruleSpaces?" ":"")).repeat(LT(a));return a.options.ruleSpaces?o.slice(0,-1):o}const Ky={blockquote:lT,break:wg,code:pT,definition:mT,emphasis:Fy,hardBreak:wg,heading:bT,html:Vy,image:Yy,imageReference:Gy,inlineCode:Wy,link:Xy,linkReference:Zy,list:kT,listItem:PT,paragraph:MT,root:DT,strong:Jy,text:zT,thematicBreak:jT};function BT(){return{enter:{table:UT,tableData:Cg,tableHeader:Cg,tableRow:IT},exit:{codeText:qT,table:HT,tableData:zc,tableHeader:zc,tableRow:zc}}}function UT(t){const r=t._align;this.enter({type:"table",align:r.map(function(a){return a==="none"?null:a}),children:[]},t),this.data.inTable=!0}function HT(t){this.exit(t),this.data.inTable=void 0}function IT(t){this.enter({type:"tableRow",children:[]},t)}function zc(t){this.exit(t)}function Cg(t){this.enter({type:"tableCell",children:[]},t)}function qT(t){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,FT));const a=this.stack[this.stack.length-1];a.type,a.value=r,this.exit(t)}function FT(t,r){return r==="|"?r:t}function VT(t){const r=t||{},a=r.tableCellPadding,o=r.tablePipeAlign,s=r.stringLength,c=a?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:S,table:f,tableCell:h,tableRow:d}};function f(x,_,O,z){return m(b(x,O,z),x.align)}function d(x,_,O,z){const P=g(x,O,z),L=m([P]);return L.slice(0,L.indexOf(`
`))}function h(x,_,O,z){const P=O.enter("tableCell"),L=O.enter("phrasing"),I=O.containerPhrasing(x,{...z,before:c,after:c});return L(),P(),I}function m(x,_){return rT(x,{align:_,alignDelimiters:o,padding:a,stringLength:s})}function b(x,_,O){const z=x.children;let P=-1;const L=[],I=_.enter("table");for(;++P<z.length;)L[P]=g(z[P],_,O);return I(),L}function g(x,_,O){const z=x.children;let P=-1;const L=[],I=_.enter("tableRow");for(;++P<z.length;)L[P]=h(z[P],x,_,O);return I(),L}function S(x,_,O){let z=Ky.inlineCode(x,_,O);return O.stack.includes("tableCell")&&(z=z.replace(/\|/g,"\\$&")),z}}function YT(){return{exit:{taskListCheckValueChecked:Eg,taskListCheckValueUnchecked:Eg,paragraph:WT}}}function GT(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:QT}}}function Eg(t){const r=this.stack[this.stack.length-2];r.type,r.checked=t.type==="taskListCheckValueChecked"}function WT(t){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const a=this.stack[this.stack.length-1];a.type;const o=a.children[0];if(o&&o.type==="text"){const s=r.children;let c=-1,f;for(;++c<s.length;){const d=s[c];if(d.type==="paragraph"){f=d;break}}f===a&&(o.value=o.value.slice(1),o.value.length===0?a.children.shift():a.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,a.position.start=Object.assign({},o.position.start)))}}this.exit(t)}function QT(t,r,a,o){const s=t.children[0],c=typeof t.checked=="boolean"&&s&&s.type==="paragraph",f="["+(t.checked?"x":" ")+"] ",d=a.createTracker(o);c&&d.move(f);let h=Ky.listItem(t,r,a,{...o,...d.current()});return c&&(h=h.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,m)),h;function m(b){return b+f}}function XT(){return[kE(),QE(),JE(),BT(),YT()]}function ZT(t){return{extensions:[AE(),XE(t),KE(),VT(t),GT()]}}const $T={tokenize:i_,partial:!0},n0={tokenize:r_,partial:!0},e0={tokenize:a_,partial:!0},t0={tokenize:l_,partial:!0},JT={tokenize:o_,partial:!0},i0={name:"wwwAutolink",tokenize:e_,previous:a0},r0={name:"protocolAutolink",tokenize:t_,previous:l0},Ht={name:"emailAutolink",tokenize:n_,previous:o0},gt={};function KT(){return{text:gt}}let Oi=48;for(;Oi<123;)gt[Oi]=Ht,Oi++,Oi===58?Oi=65:Oi===91&&(Oi=97);gt[43]=Ht;gt[45]=Ht;gt[46]=Ht;gt[95]=Ht;gt[72]=[Ht,r0];gt[104]=[Ht,r0];gt[87]=[Ht,i0];gt[119]=[Ht,i0];function n_(t,r,a){const o=this;let s,c;return f;function f(g){return!$c(g)||!o0.call(o,o.previous)||Cf(o.events)?a(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),d(g))}function d(g){return $c(g)?(t.consume(g),d):g===64?(t.consume(g),h):a(g)}function h(g){return g===46?t.check(JT,b,m)(g):g===45||g===95||be(g)?(c=!0,t.consume(g),h):b(g)}function m(g){return t.consume(g),s=!0,h}function b(g){return c&&s&&Ce(o.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),r(g)):a(g)}}function e_(t,r,a){const o=this;return s;function s(f){return f!==87&&f!==119||!a0.call(o,o.previous)||Cf(o.events)?a(f):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check($T,t.attempt(n0,t.attempt(e0,c),a),a)(f))}function c(f){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),r(f)}}function t_(t,r,a){const o=this;let s="",c=!1;return f;function f(g){return(g===72||g===104)&&l0.call(o,o.previous)&&!Cf(o.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),s+=String.fromCodePoint(g),t.consume(g),d):a(g)}function d(g){if(Ce(g)&&s.length<5)return s+=String.fromCodePoint(g),t.consume(g),d;if(g===58){const S=s.toLowerCase();if(S==="http"||S==="https")return t.consume(g),h}return a(g)}function h(g){return g===47?(t.consume(g),c?m:(c=!0,h)):a(g)}function m(g){return g===null||zo(g)||Vn(g)||zi(g)||Fo(g)?a(g):t.attempt(n0,t.attempt(e0,b),a)(g)}function b(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),r(g)}}function i_(t,r,a){let o=0;return s;function s(f){return(f===87||f===119)&&o<3?(o++,t.consume(f),s):f===46&&o===3?(t.consume(f),c):a(f)}function c(f){return f===null?a(f):r(f)}}function r_(t,r,a){let o,s,c;return f;function f(m){return m===46||m===95?t.check(t0,h,d)(m):m===null||Vn(m)||zi(m)||m!==45&&Fo(m)?h(m):(c=!0,t.consume(m),f)}function d(m){return m===95?o=!0:(s=o,o=void 0),t.consume(m),f}function h(m){return s||o||!c?a(m):r(m)}}function a_(t,r){let a=0,o=0;return s;function s(f){return f===40?(a++,t.consume(f),s):f===41&&o<a?c(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?t.check(t0,r,c)(f):f===null||Vn(f)||zi(f)?r(f):(t.consume(f),s)}function c(f){return f===41&&o++,t.consume(f),s}}function l_(t,r,a){return o;function o(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(t.consume(d),o):d===38?(t.consume(d),c):d===93?(t.consume(d),s):d===60||d===null||Vn(d)||zi(d)?r(d):a(d)}function s(d){return d===null||d===40||d===91||Vn(d)||zi(d)?r(d):o(d)}function c(d){return Ce(d)?f(d):a(d)}function f(d){return d===59?(t.consume(d),o):Ce(d)?(t.consume(d),f):a(d)}}function o_(t,r,a){return o;function o(c){return t.consume(c),s}function s(c){return be(c)?a(c):r(c)}}function a0(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Vn(t)}function l0(t){return!Ce(t)}function o0(t){return!(t===47||$c(t))}function $c(t){return t===43||t===45||t===46||t===95||be(t)}function Cf(t){let r=t.length,a=!1;for(;r--;){const o=t[r][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){a=!0;break}if(o._gfmAutolinkLiteralWalkedInto){a=!1;break}}return t.length>0&&!a&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),a}const s_={tokenize:g_,partial:!0};function u_(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:d_,continuation:{tokenize:m_},exit:h_}},text:{91:{name:"gfmFootnoteCall",tokenize:p_},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:c_,resolveTo:f_}}}}function c_(t,r,a){const o=this;let s=o.events.length;const c=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let f;for(;s--;){const h=o.events[s][1];if(h.type==="labelImage"){f=h;break}if(h.type==="gfmFootnoteCall"||h.type==="labelLink"||h.type==="label"||h.type==="image"||h.type==="link")break}return d;function d(h){if(!f||!f._balanced)return a(h);const m=st(o.sliceSerialize({start:f.end,end:o.now()}));return m.codePointAt(0)!==94||!c.includes(m.slice(1))?a(h):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(h),t.exit("gfmFootnoteCallLabelMarker"),r(h))}}function f_(t,r){let a=t.length;for(;a--;)if(t[a][1].type==="labelImage"&&t[a][0]==="enter"){t[a][1];break}t[a+1][1].type="data",t[a+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},t[a+3][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},t[a+3][1].end),end:Object.assign({},t[a+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},t[t.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},d=[t[a+1],t[a+2],["enter",o,r],t[a+3],t[a+4],["enter",s,r],["exit",s,r],["enter",c,r],["enter",f,r],["exit",f,r],["exit",c,r],t[t.length-2],t[t.length-1],["exit",o,r]];return t.splice(a,t.length-a+1,...d),t}function p_(t,r,a){const o=this,s=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c=0,f;return d;function d(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),h}function h(g){return g!==94?a(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",m)}function m(g){if(c>999||g===93&&!f||g===null||g===91||Vn(g))return a(g);if(g===93){t.exit("chunkString");const S=t.exit("gfmFootnoteCallString");return s.includes(st(o.sliceSerialize(S)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),r):a(g)}return Vn(g)||(f=!0),c++,t.consume(g),g===92?b:m}function b(g){return g===91||g===92||g===93?(t.consume(g),c++,m):m(g)}}function d_(t,r,a){const o=this,s=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c,f=0,d;return h;function h(_){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(_),t.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(_){return _===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(_),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",b):a(_)}function b(_){if(f>999||_===93&&!d||_===null||_===91||Vn(_))return a(_);if(_===93){t.exit("chunkString");const O=t.exit("gfmFootnoteDefinitionLabelString");return c=st(o.sliceSerialize(O)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(_),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),S}return Vn(_)||(d=!0),f++,t.consume(_),_===92?g:b}function g(_){return _===91||_===92||_===93?(t.consume(_),f++,b):b(_)}function S(_){return _===58?(t.enter("definitionMarker"),t.consume(_),t.exit("definitionMarker"),s.includes(c)||s.push(c),Nn(t,x,"gfmFootnoteDefinitionWhitespace")):a(_)}function x(_){return r(_)}}function m_(t,r,a){return t.check(nl,r,t.attempt(s_,r,a))}function h_(t){t.exit("gfmFootnoteDefinition")}function g_(t,r,a){const o=this;return Nn(t,s,"gfmFootnoteDefinitionIndent",5);function s(c){const f=o.events[o.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?r(c):a(c)}}function y_(t){let a=(t||{}).singleTilde;const o={name:"strikethrough",tokenize:c,resolveAll:s};return a==null&&(a=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function s(f,d){let h=-1;for(;++h<f.length;)if(f[h][0]==="enter"&&f[h][1].type==="strikethroughSequenceTemporary"&&f[h][1]._close){let m=h;for(;m--;)if(f[m][0]==="exit"&&f[m][1].type==="strikethroughSequenceTemporary"&&f[m][1]._open&&f[h][1].end.offset-f[h][1].start.offset===f[m][1].end.offset-f[m][1].start.offset){f[h][1].type="strikethroughSequence",f[m][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[m][1].start),end:Object.assign({},f[h][1].end)},g={type:"strikethroughText",start:Object.assign({},f[m][1].end),end:Object.assign({},f[h][1].start)},S=[["enter",b,d],["enter",f[m][1],d],["exit",f[m][1],d],["enter",g,d]],x=d.parser.constructs.insideSpan.null;x&&Ve(S,S.length,0,Vo(x,f.slice(m+1,h),d)),Ve(S,S.length,0,[["exit",g,d],["enter",f[h][1],d],["exit",f[h][1],d],["exit",b,d]]),Ve(f,m-1,h-m+3,S),h=m+S.length-2;break}}for(h=-1;++h<f.length;)f[h][1].type==="strikethroughSequenceTemporary"&&(f[h][1].type="data");return f}function c(f,d,h){const m=this.previous,b=this.events;let g=0;return S;function S(_){return m===126&&b[b.length-1][1].type!=="characterEscape"?h(_):(f.enter("strikethroughSequenceTemporary"),x(_))}function x(_){const O=Rr(m);if(_===126)return g>1?h(_):(f.consume(_),g++,x);if(g<2&&!a)return h(_);const z=f.exit("strikethroughSequenceTemporary"),P=Rr(_);return z._open=!P||P===2&&!!O,z._close=!O||O===2&&!!P,d(_)}}}class b_{constructor(){this.map=[]}add(r,a,o){x_(this,r,a,o)}consume(r){if(this.map.sort(function(c,f){return c[0]-f[0]}),this.map.length===0)return;let a=this.map.length;const o=[];for(;a>0;)a-=1,o.push(r.slice(this.map[a][0]+this.map[a][1]),this.map[a][2]),r.length=this.map[a][0];o.push(r.slice()),r.length=0;let s=o.pop();for(;s;){for(const c of s)r.push(c);s=o.pop()}this.map.length=0}}function x_(t,r,a,o){let s=0;if(!(a===0&&o.length===0)){for(;s<t.map.length;){if(t.map[s][0]===r){t.map[s][1]+=a,t.map[s][2].push(...o);return}s+=1}t.map.push([r,a,o])}}function v_(t,r){let a=!1;const o=[];for(;r<t.length;){const s=t[r];if(a){if(s[0]==="enter")s[1].type==="tableContent"&&o.push(t[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(t[r-1][1].type==="tableDelimiterMarker"){const c=o.length-1;o[c]=o[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(a=!0);r+=1}return o}function S_(){return{flow:{null:{name:"table",tokenize:w_,resolveAll:C_}}}}function w_(t,r,a){const o=this;let s=0,c=0,f;return d;function d(N){let en=o.events.length-1;for(;en>-1;){const an=o.events[en][1].type;if(an==="lineEnding"||an==="linePrefix")en--;else break}const tn=en>-1?o.events[en][1].type:null,bn=tn==="tableHead"||tn==="tableRow"?U:h;return bn===U&&o.parser.lazy[o.now().line]?a(N):bn(N)}function h(N){return t.enter("tableHead"),t.enter("tableRow"),m(N)}function m(N){return N===124||(f=!0,c+=1),b(N)}function b(N){return N===null?a(N):dn(N)?c>1?(c=0,o.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(N),t.exit("lineEnding"),x):a(N):_n(N)?Nn(t,b,"whitespace")(N):(c+=1,f&&(f=!1,s+=1),N===124?(t.enter("tableCellDivider"),t.consume(N),t.exit("tableCellDivider"),f=!0,b):(t.enter("data"),g(N)))}function g(N){return N===null||N===124||Vn(N)?(t.exit("data"),b(N)):(t.consume(N),N===92?S:g)}function S(N){return N===92||N===124?(t.consume(N),g):g(N)}function x(N){return o.interrupt=!1,o.parser.lazy[o.now().line]?a(N):(t.enter("tableDelimiterRow"),f=!1,_n(N)?Nn(t,_,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):_(N))}function _(N){return N===45||N===58?z(N):N===124?(f=!0,t.enter("tableCellDivider"),t.consume(N),t.exit("tableCellDivider"),O):J(N)}function O(N){return _n(N)?Nn(t,z,"whitespace")(N):z(N)}function z(N){return N===58?(c+=1,f=!0,t.enter("tableDelimiterMarker"),t.consume(N),t.exit("tableDelimiterMarker"),P):N===45?(c+=1,P(N)):N===null||dn(N)?rn(N):J(N)}function P(N){return N===45?(t.enter("tableDelimiterFiller"),L(N)):J(N)}function L(N){return N===45?(t.consume(N),L):N===58?(f=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(N),t.exit("tableDelimiterMarker"),I):(t.exit("tableDelimiterFiller"),I(N))}function I(N){return _n(N)?Nn(t,rn,"whitespace")(N):rn(N)}function rn(N){return N===124?_(N):N===null||dn(N)?!f||s!==c?J(N):(t.exit("tableDelimiterRow"),t.exit("tableHead"),r(N)):J(N)}function J(N){return a(N)}function U(N){return t.enter("tableRow"),X(N)}function X(N){return N===124?(t.enter("tableCellDivider"),t.consume(N),t.exit("tableCellDivider"),X):N===null||dn(N)?(t.exit("tableRow"),r(N)):_n(N)?Nn(t,X,"whitespace")(N):(t.enter("data"),cn(N))}function cn(N){return N===null||N===124||Vn(N)?(t.exit("data"),X(N)):(t.consume(N),N===92?ln:cn)}function ln(N){return N===92||N===124?(t.consume(N),cn):cn(N)}}function C_(t,r){let a=-1,o=!0,s=0,c=[0,0,0,0],f=[0,0,0,0],d=!1,h=0,m,b,g;const S=new b_;for(;++a<t.length;){const x=t[a],_=x[1];x[0]==="enter"?_.type==="tableHead"?(d=!1,h!==0&&(Tg(S,r,h,m,b),b=void 0,h=0),m={type:"table",start:Object.assign({},_.start),end:Object.assign({},_.end)},S.add(a,0,[["enter",m,r]])):_.type==="tableRow"||_.type==="tableDelimiterRow"?(o=!0,g=void 0,c=[0,0,0,0],f=[0,a+1,0,0],d&&(d=!1,b={type:"tableBody",start:Object.assign({},_.start),end:Object.assign({},_.end)},S.add(a,0,[["enter",b,r]])),s=_.type==="tableDelimiterRow"?2:b?3:1):s&&(_.type==="data"||_.type==="tableDelimiterMarker"||_.type==="tableDelimiterFiller")?(o=!1,f[2]===0&&(c[1]!==0&&(f[0]=f[1],g=ko(S,r,c,s,void 0,g),c=[0,0,0,0]),f[2]=a)):_.type==="tableCellDivider"&&(o?o=!1:(c[1]!==0&&(f[0]=f[1],g=ko(S,r,c,s,void 0,g)),c=f,f=[c[1],a,0,0])):_.type==="tableHead"?(d=!0,h=a):_.type==="tableRow"||_.type==="tableDelimiterRow"?(h=a,c[1]!==0?(f[0]=f[1],g=ko(S,r,c,s,a,g)):f[1]!==0&&(g=ko(S,r,f,s,a,g)),s=0):s&&(_.type==="data"||_.type==="tableDelimiterMarker"||_.type==="tableDelimiterFiller")&&(f[3]=a)}for(h!==0&&Tg(S,r,h,m,b),S.consume(r.events),a=-1;++a<r.events.length;){const x=r.events[a];x[0]==="enter"&&x[1].type==="table"&&(x[1]._align=v_(r.events,a))}return t}function ko(t,r,a,o,s,c){const f=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",d="tableContent";a[0]!==0&&(c.end=Object.assign({},Pr(r.events,a[0])),t.add(a[0],0,[["exit",c,r]]));const h=Pr(r.events,a[1]);if(c={type:f,start:Object.assign({},h),end:Object.assign({},h)},t.add(a[1],0,[["enter",c,r]]),a[2]!==0){const m=Pr(r.events,a[2]),b=Pr(r.events,a[3]),g={type:d,start:Object.assign({},m),end:Object.assign({},b)};if(t.add(a[2],0,[["enter",g,r]]),o!==2){const S=r.events[a[2]],x=r.events[a[3]];if(S[1].end=Object.assign({},x[1].end),S[1].type="chunkText",S[1].contentType="text",a[3]>a[2]+1){const _=a[2]+1,O=a[3]-a[2]-1;t.add(_,O,[])}}t.add(a[3]+1,0,[["exit",g,r]])}return s!==void 0&&(c.end=Object.assign({},Pr(r.events,s)),t.add(s,0,[["exit",c,r]]),c=void 0),c}function Tg(t,r,a,o,s){const c=[],f=Pr(r.events,a);s&&(s.end=Object.assign({},f),c.push(["exit",s,r])),o.end=Object.assign({},f),c.push(["exit",o,r]),t.add(a+1,0,c)}function Pr(t,r){const a=t[r],o=a[0]==="enter"?"start":"end";return a[1][o]}const E_={name:"tasklistCheck",tokenize:__};function T_(){return{text:{91:E_}}}function __(t,r,a){const o=this;return s;function s(h){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?a(h):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(h),t.exit("taskListCheckMarker"),c)}function c(h){return Vn(h)?(t.enter("taskListCheckValueUnchecked"),t.consume(h),t.exit("taskListCheckValueUnchecked"),f):h===88||h===120?(t.enter("taskListCheckValueChecked"),t.consume(h),t.exit("taskListCheckValueChecked"),f):a(h)}function f(h){return h===93?(t.enter("taskListCheckMarker"),t.consume(h),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),d):a(h)}function d(h){return dn(h)?r(h):_n(h)?t.check({tokenize:k_},r,a)(h):a(h)}}function k_(t,r,a){return Nn(t,o,"whitespace");function o(s){return s===null?a(s):r(s)}}function A_(t){return by([KT(),u_(),y_(t),S_(),T_()])}const P_={};function M_(t){const r=this,a=t||P_,o=r.data(),s=o.micromarkExtensions||(o.micromarkExtensions=[]),c=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),f=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);s.push(A_(a)),c.push(XT()),f.push(ZT(a))}function _g(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,o=Array(r);a<r;a++)o[a]=t[a];return o}function N_(t){if(Array.isArray(t))return t}function D_(t,r,a){return(r=U_(r))in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function O_(t,r){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var o,s,c,f,d=[],h=!0,m=!1;try{if(c=(a=a.call(t)).next,r!==0)for(;!(h=(o=c.call(a)).done)&&(d.push(o.value),d.length!==r);h=!0);}catch(b){m=!0,s=b}finally{try{if(!h&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(m)throw s}}return d}}function R_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kg(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,o)}return a}function Ag(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?kg(Object(a),!0).forEach(function(o){D_(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):kg(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function z_(t,r){if(t==null)return{};var a,o,s=L_(t,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)a=c[o],r.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}function L_(t,r){if(t==null)return{};var a={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(r.indexOf(o)!==-1)continue;a[o]=t[o]}return a}function j_(t,r){return N_(t)||O_(t,r)||H_(t,r)||R_()}function B_(t,r){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var o=a.call(t,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function U_(t){var r=B_(t,"string");return typeof r=="symbol"?r:r+""}function H_(t,r){if(t){if(typeof t=="string")return _g(t,r);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_g(t,r):void 0}}function I_(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function Pg(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,o)}return a}function Mg(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?Pg(Object(a),!0).forEach(function(o){I_(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Pg(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function q_(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(o){return r.reduceRight(function(s,c){return c(s)},o)}}function Ha(t){return function r(){for(var a=this,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return s.length>=t.length?t.apply(this,s):function(){for(var f=arguments.length,d=new Array(f),h=0;h<f;h++)d[h]=arguments[h];return r.apply(a,[].concat(s,d))}}}function Uo(t){return{}.toString.call(t).includes("Object")}function F_(t){return!Object.keys(t).length}function Xa(t){return typeof t=="function"}function V_(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function Y_(t,r){return Uo(r)||di("changeType"),Object.keys(r).some(function(a){return!V_(t,a)})&&di("changeField"),r}function G_(t){Xa(t)||di("selectorType")}function W_(t){Xa(t)||Uo(t)||di("handlerType"),Uo(t)&&Object.values(t).some(function(r){return!Xa(r)})&&di("handlersType")}function Q_(t){t||di("initialIsRequired"),Uo(t)||di("initialType"),F_(t)&&di("initialContent")}function X_(t,r){throw new Error(t[r]||t.default)}var Z_={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},di=Ha(X_)(Z_),Ao={changes:Y_,selector:G_,handler:W_,initial:Q_};function $_(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ao.initial(t),Ao.handler(r);var a={current:t},o=Ha(n3)(a,r),s=Ha(K_)(a),c=Ha(Ao.changes)(t),f=Ha(J_)(a);function d(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(b){return b};return Ao.selector(m),m(a.current)}function h(m){q_(o,s,c,f)(m)}return[d,h]}function J_(t,r){return Xa(r)?r(t.current):r}function K_(t,r){return t.current=Mg(Mg({},t.current),r),r}function n3(t,r,a){return Xa(r)?r(t.current):Object.keys(a).forEach(function(o){var s;return(s=r[o])===null||s===void 0?void 0:s.call(r,t.current[o])}),a}var e3={create:$_},t3={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function i3(t){return function r(){for(var a=this,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return s.length>=t.length?t.apply(this,s):function(){for(var f=arguments.length,d=new Array(f),h=0;h<f;h++)d[h]=arguments[h];return r.apply(a,[].concat(s,d))}}}function r3(t){return{}.toString.call(t).includes("Object")}function a3(t){return t||Ng("configIsRequired"),r3(t)||Ng("configType"),t.urls?(l3(),{paths:{vs:t.urls.monacoBase}}):t}function l3(){console.warn(s0.deprecation)}function o3(t,r){throw new Error(t[r]||t.default)}var s0={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ng=i3(o3)(s0),s3={config:a3},u3=function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return function(s){return a.reduceRight(function(c,f){return f(c)},s)}};function u0(t,r){return Object.keys(r).forEach(function(a){r[a]instanceof Object&&t[a]&&Object.assign(r[a],u0(t[a],r[a]))}),Ag(Ag({},t),r)}var c3={type:"cancelation",msg:"operation is manually canceled"};function Lc(t){var r=!1,a=new Promise(function(o,s){t.then(function(c){return r?s(c3):o(c)}),t.catch(s)});return a.cancel=function(){return r=!0},a}var f3=["monaco"],p3=e3.create({config:t3,isInitialized:!1,resolve:null,reject:null,monaco:null}),c0=j_(p3,2),tl=c0[0],Qo=c0[1];function d3(t){var r=s3.config(t),a=r.monaco,o=z_(r,f3);Qo(function(s){return{config:u0(s.config,o),monaco:a}})}function m3(){var t=tl(function(r){var a=r.monaco,o=r.isInitialized,s=r.resolve;return{monaco:a,isInitialized:o,resolve:s}});if(!t.isInitialized){if(Qo({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),Lc(jc);if(window.monaco&&window.monaco.editor)return f0(window.monaco),t.resolve(window.monaco),Lc(jc);u3(h3,y3)(b3)}return Lc(jc)}function h3(t){return document.body.appendChild(t)}function g3(t){var r=document.createElement("script");return t&&(r.src=t),r}function y3(t){var r=tl(function(o){var s=o.config,c=o.reject;return{config:s,reject:c}}),a=g3("".concat(r.config.paths.vs,"/loader.js"));return a.onload=function(){return t()},a.onerror=r.reject,a}function b3(){var t=tl(function(a){var o=a.config,s=a.resolve,c=a.reject;return{config:o,resolve:s,reject:c}}),r=window.require;r.config(t.config),r(["vs/editor/editor.main"],function(a){var o=a.m||a;f0(o),t.resolve(o)},function(a){t.reject(a)})}function f0(t){tl().monaco||Qo({monaco:t})}function x3(){return tl(function(t){var r=t.monaco;return r})}var jc=new Promise(function(t,r){return Qo({resolve:t,reject:r})}),p0={config:d3,init:m3,__getMonacoInstance:x3},v3={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Bc=v3,S3={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},w3=S3;function C3({children:t}){return Nr.createElement("div",{style:w3.container},t)}var E3=C3,T3=E3;function _3({width:t,height:r,isEditorReady:a,loading:o,_ref:s,className:c,wrapperProps:f}){return Nr.createElement("section",{style:{...Bc.wrapper,width:t,height:r},...f},!a&&Nr.createElement(T3,null,o),Nr.createElement("div",{ref:s,style:{...Bc.fullWidth,...!a&&Bc.hide},className:c}))}var k3=_3,d0=D.memo(k3);function A3(t){D.useEffect(t,[])}var m0=A3;function P3(t,r,a=!0){let o=D.useRef(!0);D.useEffect(o.current||!a?()=>{o.current=!1}:t,r)}var Fe=P3;function Va(){}function Mr(t,r,a,o){return M3(t,o)||N3(t,r,a,o)}function M3(t,r){return t.editor.getModel(h0(t,r))}function N3(t,r,a,o){return t.editor.createModel(r,a,o?h0(t,o):void 0)}function h0(t,r){return t.Uri.parse(r)}function D3({original:t,modified:r,language:a,originalLanguage:o,modifiedLanguage:s,originalModelPath:c,modifiedModelPath:f,keepCurrentOriginalModel:d=!1,keepCurrentModifiedModel:h=!1,theme:m="light",loading:b="Loading...",options:g={},height:S="100%",width:x="100%",className:_,wrapperProps:O={},beforeMount:z=Va,onMount:P=Va}){let[L,I]=D.useState(!1),[rn,J]=D.useState(!0),U=D.useRef(null),X=D.useRef(null),cn=D.useRef(null),ln=D.useRef(P),N=D.useRef(z),en=D.useRef(!1);m0(()=>{let Q=p0.init();return Q.then(R=>(X.current=R)&&J(!1)).catch(R=>R?.type!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>U.current?an():Q.cancel()}),Fe(()=>{if(U.current&&X.current){let Q=U.current.getOriginalEditor(),R=Mr(X.current,t||"",o||a||"text",c||"");R!==Q.getModel()&&Q.setModel(R)}},[c],L),Fe(()=>{if(U.current&&X.current){let Q=U.current.getModifiedEditor(),R=Mr(X.current,r||"",s||a||"text",f||"");R!==Q.getModel()&&Q.setModel(R)}},[f],L),Fe(()=>{let Q=U.current.getModifiedEditor();Q.getOption(X.current.editor.EditorOption.readOnly)?Q.setValue(r||""):r!==Q.getValue()&&(Q.executeEdits("",[{range:Q.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),Q.pushUndoStop())},[r],L),Fe(()=>{U.current?.getModel()?.original.setValue(t||"")},[t],L),Fe(()=>{let{original:Q,modified:R}=U.current.getModel();X.current.editor.setModelLanguage(Q,o||a||"text"),X.current.editor.setModelLanguage(R,s||a||"text")},[a,o,s],L),Fe(()=>{X.current?.editor.setTheme(m)},[m],L),Fe(()=>{U.current?.updateOptions(g)},[g],L);let tn=D.useCallback(()=>{if(!X.current)return;N.current(X.current);let Q=Mr(X.current,t||"",o||a||"text",c||""),R=Mr(X.current,r||"",s||a||"text",f||"");U.current?.setModel({original:Q,modified:R})},[a,r,s,t,o,c,f]),bn=D.useCallback(()=>{!en.current&&cn.current&&(U.current=X.current.editor.createDiffEditor(cn.current,{automaticLayout:!0,...g}),tn(),X.current?.editor.setTheme(m),I(!0),en.current=!0)},[g,m,tn]);D.useEffect(()=>{L&&ln.current(U.current,X.current)},[L]),D.useEffect(()=>{!rn&&!L&&bn()},[rn,L,bn]);function an(){let Q=U.current?.getModel();d||Q?.original?.dispose(),h||Q?.modified?.dispose(),U.current?.dispose()}return Nr.createElement(d0,{width:x,height:S,isEditorReady:L,loading:b,_ref:cn,className:_,wrapperProps:O})}var O3=D3;D.memo(O3);function R3(t){let r=D.useRef();return D.useEffect(()=>{r.current=t},[t]),r.current}var z3=R3,Po=new Map;function L3({defaultValue:t,defaultLanguage:r,defaultPath:a,value:o,language:s,path:c,theme:f="light",line:d,loading:h="Loading...",options:m={},overrideServices:b={},saveViewState:g=!0,keepCurrentModel:S=!1,width:x="100%",height:_="100%",className:O,wrapperProps:z={},beforeMount:P=Va,onMount:L=Va,onChange:I,onValidate:rn=Va}){let[J,U]=D.useState(!1),[X,cn]=D.useState(!0),ln=D.useRef(null),N=D.useRef(null),en=D.useRef(null),tn=D.useRef(L),bn=D.useRef(P),an=D.useRef(),Q=D.useRef(o),R=z3(c),Z=D.useRef(!1),sn=D.useRef(!1);m0(()=>{let k=p0.init();return k.then(F=>(ln.current=F)&&cn(!1)).catch(F=>F?.type!=="cancelation"&&console.error("Monaco initialization: error:",F)),()=>N.current?C():k.cancel()}),Fe(()=>{let k=Mr(ln.current,t||o||"",r||s||"",c||a||"");k!==N.current?.getModel()&&(g&&Po.set(R,N.current?.saveViewState()),N.current?.setModel(k),g&&N.current?.restoreViewState(Po.get(c)))},[c],J),Fe(()=>{N.current?.updateOptions(m)},[m],J),Fe(()=>{!N.current||o===void 0||(N.current.getOption(ln.current.editor.EditorOption.readOnly)?N.current.setValue(o):o!==N.current.getValue()&&(sn.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),N.current.pushUndoStop(),sn.current=!1))},[o],J),Fe(()=>{let k=N.current?.getModel();k&&s&&ln.current?.editor.setModelLanguage(k,s)},[s],J),Fe(()=>{d!==void 0&&N.current?.revealLine(d)},[d],J),Fe(()=>{ln.current?.editor.setTheme(f)},[f],J);let vn=D.useCallback(()=>{if(!(!en.current||!ln.current)&&!Z.current){bn.current(ln.current);let k=c||a,F=Mr(ln.current,o||t||"",r||s||"",k||"");N.current=ln.current?.editor.create(en.current,{model:F,automaticLayout:!0,...m},b),g&&N.current.restoreViewState(Po.get(k)),ln.current.editor.setTheme(f),d!==void 0&&N.current.revealLine(d),U(!0),Z.current=!0}},[t,r,a,o,s,c,m,b,g,f,d]);D.useEffect(()=>{J&&tn.current(N.current,ln.current)},[J]),D.useEffect(()=>{!X&&!J&&vn()},[X,J,vn]),Q.current=o,D.useEffect(()=>{J&&I&&(an.current?.dispose(),an.current=N.current?.onDidChangeModelContent(k=>{sn.current||I(N.current.getValue(),k)}))},[J,I]),D.useEffect(()=>{if(J){let k=ln.current.editor.onDidChangeMarkers(F=>{let w=N.current.getModel()?.uri;if(w&&F.find(nn=>nn.path===w.path)){let nn=ln.current.editor.getModelMarkers({resource:w});rn?.(nn)}});return()=>{k?.dispose()}}return()=>{}},[J,rn]);function C(){an.current?.dispose(),S?g&&Po.set(c,N.current.saveViewState()):N.current.getModel()?.dispose(),N.current.dispose()}return Nr.createElement(d0,{width:x,height:_,isEditorReady:J,loading:h,_ref:en,className:O,wrapperProps:z})}var j3=L3,B3=D.memo(j3),U3=B3;const H3={1:{slug:"01-why-python-in-2026",readme:`# Post 01: Why Python in 2026

[← Back to Index](../../README.md) | [Next: Installing Python →](../02-installing-python/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 01 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 15 minutes

---

## 🎯 Target Audience

This post is for:

- **Complete beginners** with no programming experience
- **Career changers** exploring their first programming language
- **Curious learners** wondering why Python is worth their time
- **Decision makers** evaluating Python for their team or organization

No prior programming knowledge is required.

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand what Python is and its core philosophy
2. Learn why Python remains the top choice in 2026
3. Discover the industries and domains where Python dominates
4. See concrete examples of what you can build with Python
5. Feel confident that investing time in Python is worthwhile

---

## 💡 Why This Matters in 2026

In a world of hundreds of programming languages, choosing the right one to learn is critical. Your time is valuable, and you want to invest in a skill that will:

- **Open doors** to career opportunities
- **Remain relevant** for years to come
- **Be enjoyable** to learn and use
- **Solve real problems** you care about

Python checks all these boxes, and in 2026, it's stronger than ever. Let's explore why.

---

## 🔍 What Is Python?

Python is a **high-level, general-purpose programming language** created by Guido van Rossum and first released in 1991. It emphasizes:

- **Readability**: Code that looks almost like English
- **Simplicity**: Fewer lines to accomplish tasks
- **Versatility**: One language for many domains
- **Community**: Millions of developers sharing knowledge and code

### Python's Philosophy: The Zen of Python

Python has a guiding philosophy captured in "The Zen of Python." Here are some key principles:

\`\`\`
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Readability counts.
\`\`\`

This philosophy shapes every aspect of the language, making it approachable for beginners while remaining powerful for experts.

---

## 📊 Python by the Numbers in 2026

Let's look at the data that demonstrates Python's dominance:

### Industry Rankings

| Source | Python's Position |
|--------|-------------------|
| TIOBE Index | #1 (since 2021) |
| Stack Overflow Survey | Most Wanted Language |
| GitHub Octoverse | Top 3 Languages |
| IEEE Spectrum | #1 for 6 consecutive years |

### Job Market Statistics

- **1.2 million+** Python-related job postings globally
- **$95,000 - $180,000** average salary range (varies by specialization)
- **40%** year-over-year growth in AI/ML Python positions
- **Python developers** are among the top 5 most sought-after tech roles

### Community Size

- **15 million+** Python developers worldwide
- **400,000+** packages available on PyPI (Python Package Index)
- **Billions** of downloads per month from PyPI

---

## 🏆 Why Python Dominates: Key Strengths

### 1. Readability and Simplicity

Compare these "Hello, World!" programs:

**Python:**
\`\`\`python
print("Hello, World!")
\`\`\`

**Java:**
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

**C++:**
\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

Python's simplicity isn't just about fewer keystrokes—it's about **cognitive load**. When your code is readable, you spend less time deciphering syntax and more time solving problems.

### 2. Beginner-Friendly, Expert-Powerful

Python's learning curve is gentle, but it scales to complex applications:

\`\`\`
Beginner     →     Intermediate     →     Expert
   ↓                    ↓                    ↓
Scripts          Web Applications      AI/ML Systems
Automation       APIs & Databases      Distributed Computing
Basic I/O        Data Analysis         High-Performance Code
\`\`\`

You start with simple scripts and grow into building sophisticated systems—all in the same language.

### 3. "Batteries Included" Philosophy

Python comes with a rich standard library that handles:

- File operations
- Network communication
- Data manipulation
- Text processing
- Database access
- And much more...

This means you can accomplish significant tasks without installing additional packages.

### 4. Massive Ecosystem

Beyond the standard library, Python's package ecosystem is unmatched:

| Domain | Popular Packages |
|--------|------------------|
| Web Development | Django, Flask, FastAPI |
| Data Science | Pandas, NumPy, Matplotlib |
| Machine Learning | TensorFlow, PyTorch, Scikit-learn |
| Automation | Selenium, Beautiful Soup, Requests |
| DevOps | Ansible, Fabric, Boto3 |

### 5. Cross-Platform Compatibility

Write Python on macOS, run it on Windows or Linux. Python's portability means your skills transfer across environments.

---

## 🌍 Where Python Is Used: Real-World Applications

### Artificial Intelligence & Machine Learning

Python is the **de facto language for AI**. Major AI frameworks are Python-first:

- **OpenAI** uses Python for API interactions
- **Google's TensorFlow** and **Meta's PyTorch** are Python-based
- **ChatGPT, DALL-E, Stable Diffusion** all leverage Python

\`\`\`python
# Example: Simple AI model prediction (conceptual)
import ml_framework

model = ml_framework.load("sentiment_analyzer")
result = model.predict("I love learning Python!")
print(result)  # Output: positive (0.95 confidence)
\`\`\`

### Data Science & Analytics

Python dominates data analysis:

- **Netflix** uses Python for content recommendations
- **Spotify** analyzes listening patterns with Python
- **Banks** detect fraud using Python-based systems

\`\`\`python
# Example: Quick data analysis
import pandas as pd

sales_data = pd.read_csv("sales.csv")
monthly_totals = sales_data.groupby("month")["amount"].sum()
print(monthly_totals)
\`\`\`

### Web Development

Python powers millions of websites:

- **Instagram**: 2 billion+ users, Python backend
- **Pinterest**: Heavy Python infrastructure
- **Dropbox**: Started as a Python project

\`\`\`python
# Example: Simple web API
from fastapi import FastAPI

app = FastAPI()

@app.get("/hello/{name}")
def greet(name: str):
    return {"message": f"Hello, {name}!"}
\`\`\`

### Automation & Scripting

Python excels at automating repetitive tasks:

\`\`\`python
# Example: Rename all files in a folder
import os

for filename in os.listdir("./documents"):
    if filename.endswith(".txt"):
        new_name = filename.replace(" ", "_").lower()
        os.rename(f"./documents/{filename}", f"./documents/{new_name}")
        print(f"Renamed: {filename} → {new_name}")
\`\`\`

### Scientific Computing

Python is standard in research:

- **NASA** uses Python for data analysis
- **CERN** processes physics data with Python
- **Universities worldwide** teach Python as the first language

### DevOps & Cloud

Python automates infrastructure:

- **AWS Lambda** supports Python natively
- **Ansible** is written in Python
- **Docker** and **Kubernetes** have rich Python SDKs

---

## 🆚 Python vs. Other Languages: When to Choose What

### Python vs. JavaScript

| Aspect | Python | JavaScript |
|--------|--------|------------|
| Primary Domain | Backend, Data, AI | Frontend Web |
| Learning Curve | Gentler | Moderate |
| Execution | Server-side | Browser + Server |
| Best For | Data/AI, Automation | Web Interactivity |

**Choose Python** for data science, AI, automation, and backend services.  
**Choose JavaScript** for interactive web frontends.

### Python vs. Java

| Aspect | Python | Java |
|--------|--------|------|
| Verbosity | Low | High |
| Typing | Dynamic | Static |
| Startup Speed | Fast | Slower |
| Enterprise Adoption | Growing | Established |

**Choose Python** for rapid development, scripting, and data work.  
**Choose Java** for large-scale enterprise systems where static typing helps.

### Python vs. C++

| Aspect | Python | C++ |
|--------|--------|-----|
| Performance | Slower | Faster |
| Memory Control | Automatic | Manual |
| Development Speed | Fast | Slower |
| Use Cases | High-level apps | Systems, Games |

**Choose Python** for most applications.  
**Choose C++** for performance-critical systems (games, embedded).

---

## ⚠️ Common Beginner Misconceptions

### ❌ "Python is too slow for real applications"

**Reality**: Python's speed is sufficient for 95% of applications. For performance-critical parts, Python interfaces with C libraries (NumPy, TensorFlow) that run at native speed.

### ❌ "Python is only for beginners"

**Reality**: Instagram serves 2 billion users with Python. Dropbox, Netflix, and Google use Python extensively. It's a professional-grade language.

### ❌ "I should learn a 'real' language first"

**Reality**: Python IS a real language. Starting with Python lets you focus on programming concepts without fighting syntax.

### ❌ "Python is dying / will be replaced soon"

**Reality**: Python has grown every year for the past decade. Its role in AI ensures relevance for years to come.

---

## ✅ Best Practices: Starting Your Python Journey

1. **Set Clear Goals**: Know what you want to build (websites, data analysis, automation)
2. **Learn Actively**: Type code yourself, don't just read
3. **Build Projects**: Apply knowledge immediately to real problems
4. **Join Communities**: Reddit, Discord, Stack Overflow—get help when stuck
5. **Be Patient**: Programming is a skill that develops over months, not days

---

## 💼 Real-World Use Cases: What You Can Build

### After Phase 1 (Posts 1-10): Foundations
- Simple calculators
- Text-based games
- Basic automation scripts

### After Phase 4 (Posts 31-40): Functions & Modules
- Utility tools
- Password generators
- File organizers

### After Phase 7 (Posts 61-70): Files & OS
- CSV data processors
- Log file analyzers
- Backup automation

### After Phase 11 (Posts 101-110): Real-World Python
- Web APIs and backends
- Data pipelines
- Machine learning models
- Complete applications

---

## 📝 Mini Exercises

1. **Research Exercise**: Look up 3 companies you admire. Find out if they use Python.

2. **Reflection Exercise**: Write down 3 tasks you do repeatedly on your computer that could potentially be automated.

3. **Exploration Exercise**: Visit [PyPI.org](https://pypi.org) and browse popular packages. Note 5 that interest you.

---

## 🔮 What's Next?

In **Post 02: Installing Python & Environment Setup**, you'll:

- Install Python on your computer
- Set up a proper development environment
- Configure your code editor
- Run your first commands in Python

You're about to join millions of developers who've chosen Python. Let's get started!

---

## 📖 Summary

| Key Point | Details |
|-----------|---------|
| What is Python? | A high-level, readable, versatile programming language |
| Why learn it? | #1 in rankings, massive job market, AI/ML dominance |
| Where is it used? | AI, data science, web, automation, DevOps |
| Who uses it? | Google, Netflix, Instagram, NASA, banks, researchers |
| When to choose it? | Most general-purpose programming needs |

---

## 🔗 Additional Resources

- [Official Python Website](https://www.python.org/)
- [Python Documentation](https://docs.python.org/)
- [PEP 20 – The Zen of Python](https://peps.python.org/pep-0020/)
- [TIOBE Index](https://www.tiobe.com/tiobe-index/)

---

[← Back to Index](../../README.md) | [Next: Installing Python →](../02-installing-python/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Python vs Other Languages - Readability Comparison
Python Programming Learning 2026 - Post 01

This example demonstrates Python's clean, readable syntax
by showing a simple "Hello, World!" program.

Author: Sitharaj Seenivasan
"""

# Python's "Hello, World!" is just one line
print("Hello, World!")

# Compare this to other languages that require:
# - Java: class declaration, main method, System.out.println
# - C++: includes, main function, std::cout, return statement
# - C#: namespace, class, Main method, Console.WriteLine

# Python lets you focus on WHAT you want to do,
# not HOW to satisfy the language's requirements

# Let's extend this slightly
print("Welcome to Python Programming Learning 2026!")
print("Your journey to Python mastery starts here.")

# Output:
# Hello, World!
# Welcome to Python Programming Learning 2026!
# Your journey to Python mastery starts here.
`},{name:"example_2.py",content:`"""
Example 2: Python's Versatility - Multiple Domains
Python Programming Learning 2026 - Post 01

This example shows how Python can be used across different domains
using just a few lines of code for each task.

Author: Sitharaj Seenivasan
"""

# ============================================
# DOMAIN 1: Basic Calculations (Data Science Preview)
# ============================================
print("=== Basic Calculations ===")

numbers = [10, 20, 30, 40, 50]

# Calculate average
total = sum(numbers)
count = len(numbers)
average = total / count

print(f"Numbers: {numbers}")
print(f"Sum: {total}")
print(f"Average: {average}")

# ============================================
# DOMAIN 2: Text Processing (Automation Preview)
# ============================================
print("\\n=== Text Processing ===")

# Clean and format user input
raw_email = "   JOHN.DOE@EXAMPLE.COM   "
clean_email = raw_email.strip().lower()

print(f"Original: '{raw_email}'")
print(f"Cleaned: '{clean_email}'")

# ============================================
# DOMAIN 3: Data Structures (Web Dev Preview)
# ============================================
print("\\n=== Data Structures ===")

# A simple user profile (like you'd see in web applications)
user = {
    "name": "Alice",
    "age": 28,
    "skills": ["Python", "Data Analysis", "Machine Learning"],
    "is_active": True
}

print(f"User: {user['name']}")
print(f"Skills: {', '.join(user['skills'])}")

# ============================================
# DOMAIN 4: Logic and Decisions (All Domains)
# ============================================
print("\\n=== Decision Making ===")

score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score: {score} → Grade: {grade}")

# ============================================
# Key Takeaway
# ============================================
print("\\n=== Key Takeaway ===")
print("Notice how each of these tasks uses clear, readable syntax.")
print("Python lets you express complex ideas with simple code.")

# Output:
# === Basic Calculations ===
# Numbers: [10, 20, 30, 40, 50]
# Sum: 150
# Average: 30.0
#
# === Text Processing ===
# Original: '   JOHN.DOE@EXAMPLE.COM   '
# Cleaned: 'john.doe@example.com'
#
# === Data Structures ===
# User: Alice
# Skills: Python, Data Analysis, Machine Learning
#
# === Decision Making ===
# Score: 85 → Grade: B
#
# === Key Takeaway ===
# Notice how each of these tasks uses clear, readable syntax.
# Python lets you express complex ideas with simple code.
`},{name:"example_3.py",content:`"""
Example 3: Python's "Batteries Included" Standard Library
Python Programming Learning 2026 - Post 01

This example demonstrates Python's rich standard library -
you can do a lot without installing any additional packages.

Author: Sitharaj Seenivasan
"""

# ============================================
# 1. Working with Dates and Times
# ============================================
from datetime import datetime, timedelta

print("=== Date and Time ===")
now = datetime.now()
print(f"Current time: {now.strftime('%Y-%m-%d %H:%M:%S')}")

# Calculate a date 30 days from now
future = now + timedelta(days=30)
print(f"30 days from now: {future.strftime('%Y-%m-%d')}")

# ============================================
# 2. Working with Random Numbers
# ============================================
import random

print("\\n=== Random Numbers ===")
# Random number between 1 and 100
random_num = random.randint(1, 100)
print(f"Random number (1-100): {random_num}")

# Choose a random item from a list
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
random_fruit = random.choice(fruits)
print(f"Random fruit: {random_fruit}")

# ============================================
# 3. Working with Math
# ============================================
import math

print("\\n=== Math Operations ===")
number = 16
print(f"Square root of {number}: {math.sqrt(number)}")
print(f"Pi: {math.pi:.4f}")
print(f"Ceiling of 4.3: {math.ceil(4.3)}")
print(f"Floor of 4.7: {math.floor(4.7)}")

# ============================================
# 4. Working with Operating System
# ============================================
import os

print("\\n=== OS Information ===")
print(f"Current directory: {os.getcwd()}")
print(f"Python file: {os.path.basename(__file__)}")

# ============================================
# 5. Working with JSON Data
# ============================================
import json

print("\\n=== JSON Handling ===")
# Convert Python dict to JSON string
data = {"name": "Python", "year": 2026, "awesome": True}
json_string = json.dumps(data, indent=2)
print(f"JSON output:\\n{json_string}")

# Parse JSON back to Python
parsed = json.loads(json_string)
print(f"Parsed back: {parsed['name']} is awesome: {parsed['awesome']}")

# ============================================
# Key Takeaway
# ============================================
print("\\n=== Key Takeaway ===")
print("All of this was done with Python's BUILT-IN libraries!")
print("No pip install needed for these common tasks.")

# Output will vary based on current time and random values, but format is:
# === Date and Time ===
# Current time: 2026-01-11 00:15:30
# 30 days from now: 2026-02-10
#
# === Random Numbers ===
# Random number (1-100): 42
# Random fruit: cherry
#
# === Math Operations ===
# Square root of 16: 4.0
# Pi: 3.1416
# Ceiling of 4.3: 5
# Floor of 4.7: 4
#
# === OS Information ===
# Current directory: /path/to/examples
# Python file: example_3.py
#
# === JSON Handling ===
# JSON output:
# {
#   "name": "Python",
#   "year": 2026,
#   "awesome": true
# }
# Parsed back: Python is awesome: True
`}]},2:{slug:"02-installing-python",readme:`# Post 02: Installing Python & Environment Setup

[← Previous: Why Python in 2026](../01-why-python-in-2026/) | [Back to Index](../../README.md) | [Next: Your First Python Program →](../03-your-first-python-program/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 02 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 20 minutes

---

## 🎯 Target Audience

This post is for:

- **Complete beginners** setting up Python for the first time
- **Users on any operating system** (Windows, macOS, Linux)
- **Developers** who want a professional Python setup
- **Anyone** who wants to follow along with this series

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand Python versions and which to install
2. Install Python on your specific operating system
3. Verify your Python installation
4. Set up a code editor (VS Code recommended)
5. Understand the difference between Python and pip
6. Run your first Python command in the terminal

---

## 💡 Why This Matters in 2026

A proper development environment is your foundation for everything that follows. Getting this right means:

- **No frustrating errors** when running examples
- **Professional workflow** from day one
- **Easy package management** for libraries you'll need
- **Consistent experience** across all 120 posts

Take your time with this post. A solid setup now saves hours of debugging later.

---

## 🔍 Understanding Python Versions

### Python 3 vs Python 2

**Always use Python 3.** Python 2 reached end-of-life on January 1, 2020, and is no longer maintained. All modern Python development uses Python 3.

### Which Python 3 Version?

As of 2026, the recommended versions are:

| Version | Status | Recommendation |
|---------|--------|----------------|
| Python 3.12 | Active | ✅ Recommended |
| Python 3.13 | Active | ✅ Also good |
| Python 3.11 | Security fixes only | Acceptable |
| Python 3.10 or older | Various | Not recommended |

This series is tested with **Python 3.12+**.

---

## 💻 Installation by Operating System

### Installing on Windows

#### Step 1: Download Python

1. Go to [python.org/downloads](https://www.python.org/downloads/)
2. Click the yellow "Download Python 3.12.x" button
3. The installer (\`.exe\` file) will download

#### Step 2: Run the Installer

1. Open the downloaded installer
2. **CRITICAL**: Check "Add Python to PATH" at the bottom ✅
3. Click "Install Now"
4. Wait for installation to complete
5. Click "Close"

\`\`\`
┌─────────────────────────────────────────────────────┐
│  Install Python 3.12.x                              │
│                                                     │
│  ☑️ Add Python 3.12 to PATH  ← CHECK THIS!          │
│                                                     │
│  [Install Now]                                      │
└─────────────────────────────────────────────────────┘
\`\`\`

#### Step 3: Verify Installation

Open **Command Prompt** (search for "cmd") and type:

\`\`\`cmd
python --version
\`\`\`

Expected output:
\`\`\`
Python 3.12.x
\`\`\`

Also verify pip:
\`\`\`cmd
pip --version
\`\`\`

Expected output:
\`\`\`
pip 24.x from ... (python 3.12)
\`\`\`

---

### Installing on macOS

#### Option 1: Using the Official Installer (Recommended for Beginners)

1. Go to [python.org/downloads](https://www.python.org/downloads/)
2. Click "Download Python 3.12.x"
3. Open the downloaded \`.pkg\` file
4. Follow the installation wizard
5. Click "Install"

#### Step 2: Verify Installation

Open **Terminal** (Cmd + Space, type "Terminal") and type:

\`\`\`bash
python3 --version
\`\`\`

Expected output:
\`\`\`
Python 3.12.x
\`\`\`

**Note for macOS users**: Use \`python3\` instead of \`python\` (macOS has a system Python).

Verify pip:
\`\`\`bash
pip3 --version
\`\`\`

#### Option 2: Using Homebrew (Recommended for Developers)

If you have Homebrew installed:

\`\`\`bash
brew install python@3.12
\`\`\`

Then verify:
\`\`\`bash
python3 --version
\`\`\`

---

### Installing on Linux

#### Ubuntu / Debian

\`\`\`bash
# Update package list
sudo apt update

# Install Python 3.12
sudo apt install python3.12 python3.12-venv python3-pip

# Verify installation
python3.12 --version
\`\`\`

#### Fedora

\`\`\`bash
sudo dnf install python3.12

python3 --version
\`\`\`

#### Arch Linux

\`\`\`bash
sudo pacman -S python python-pip

python --version
\`\`\`

---

## ⚙️ Setting Up Your Code Editor

### Why VS Code?

Visual Studio Code is the most popular editor for Python development. It's:

- **Free and open source**
- **Cross-platform** (Windows, macOS, Linux)
- **Excellent Python support** with extensions
- **Industry standard** for many developers

### Installing VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Download for your operating system
3. Run the installer and follow prompts

### Installing the Python Extension

1. Open VS Code
2. Click the Extensions icon (left sidebar) or press \`Ctrl+Shift+X\`
3. Search for "Python"
4. Install the one by **Microsoft** (verified publisher)

\`\`\`
┌─────────────────────────────────────────────────────┐
│  Extensions: Marketplace                            │
│                                                     │
│  🔍 Python                                          │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  Python                                      │   │
│  │  Microsoft ✓                                 │   │
│  │  ⭐⭐⭐⭐⭐ (100M+ installs)                   │   │
│  │  [Install]                                   │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
\`\`\`

### Configure Python Interpreter

1. Open VS Code
2. Press \`Ctrl+Shift+P\` (or \`Cmd+Shift+P\` on macOS)
3. Type "Python: Select Interpreter"
4. Choose Python 3.12.x

---

## 🔧 Understanding Key Components

### What is Python?

\`python\` (or \`python3\`) is the **interpreter** that runs your Python code.

\`\`\`bash
# Run a Python script
python my_script.py

# Start interactive Python shell
python
\`\`\`

### What is pip?

\`pip\` is Python's **package manager**. It installs libraries from PyPI.

\`\`\`bash
# Install a package
pip install requests

# List installed packages
pip list

# Uninstall a package
pip uninstall requests
\`\`\`

### What is a Virtual Environment?

A virtual environment is an isolated Python environment for your project. We'll cover this in detail in Post 79, but here's a preview:

\`\`\`bash
# Create a virtual environment
python -m venv myenv

# Activate it (Windows)
myenv\\Scripts\\activate

# Activate it (macOS/Linux)
source myenv/bin/activate

# Deactivate
deactivate
\`\`\`

---

## 🖥️ Your First Python Commands

### Using the Interactive Shell

Open your terminal and type \`python\` (or \`python3\` on macOS/Linux):

\`\`\`
$ python
Python 3.12.x (main, ...) 
Type "help", "copyright", "credits" or "license" for more information.
>>> 
\`\`\`

The \`>>>\` prompt means Python is ready for your commands.

Try these:

\`\`\`python
>>> print("Hello, Python!")
Hello, Python!

>>> 2 + 2
4

>>> "Python" * 3
'PythonPythonPython'

>>> exit()
\`\`\`

Type \`exit()\` or press \`Ctrl+D\` (macOS/Linux) or \`Ctrl+Z\` then Enter (Windows) to exit.

### Running a Python File

1. Create a file called \`hello.py\` with this content:
   \`\`\`python
   print("My Python installation works!")
   \`\`\`

2. Open terminal in the same directory

3. Run it:
   \`\`\`bash
   python hello.py
   \`\`\`

4. See the output:
   \`\`\`
   My Python installation works!
   \`\`\`

---

## ⚠️ Common Installation Problems & Solutions

### Problem: "python is not recognized"

**Cause**: Python wasn't added to PATH during installation.

**Windows Solution**:
1. Re-run the installer
2. Click "Modify"
3. Check "Add Python to PATH"

**Alternative**: Use the full path:
\`\`\`cmd
C:\\Users\\YourName\\AppData\\Local\\Programs\\Python\\Python312\\python.exe --version
\`\`\`

### Problem: \`python\` runs Python 2 on macOS/Linux

**Solution**: Use \`python3\` instead of \`python\`:
\`\`\`bash
python3 --version
python3 hello.py
\`\`\`

### Problem: pip installs packages globally

**Solution**: Use virtual environments (covered in Post 79) or the \`--user\` flag:
\`\`\`bash
pip install --user package_name
\`\`\`

### Problem: Permission denied on Linux

**Solution**: Don't use \`sudo\` with pip. Use \`--user\`:
\`\`\`bash
pip install --user package_name
\`\`\`

---

## 📝 Step-by-Step Verification Checklist

Run these commands to verify your setup:

| Command | Expected Result |
|---------|-----------------|
| \`python --version\` (or \`python3 --version\`) | Python 3.12.x |
| \`pip --version\` (or \`pip3 --version\`) | pip 24.x |
| \`python -c "print('Hello')"\` | Hello |

If all three work, you're ready to proceed!

---

## ✅ Best Practices for Your Setup

1. **Always use Python 3.12+** for new projects
2. **Add Python to PATH** during installation
3. **Use VS Code** with the Python extension
4. **Learn virtual environments** early (Post 79)
5. **Keep Python updated** for security and features

---

## 💼 Real-World Setup Scenarios

### Scenario 1: Learning Python (You!)
- Install Python 3.12
- Install VS Code
- You're ready!

### Scenario 2: Data Science
- Python 3.12
- VS Code or Jupyter Notebook
- \`pip install numpy pandas matplotlib\`

### Scenario 3: Web Development
- Python 3.12
- VS Code
- \`pip install django\` or \`pip install fastapi\`

### Scenario 4: Professional Development
- Python 3.12
- VS Code with extensions
- Virtual environments for each project
- Git for version control

---

## 📝 Mini Exercises

1. **Verification Exercise**: Open your terminal and run all three commands from the checklist above. Screenshot your results.

2. **Interactive Exercise**: In the Python shell, calculate:
   - 100 / 7
   - 2 ** 10 (2 to the power of 10)
   - len("Python")

3. **File Exercise**: Create a file called \`setup_check.py\` with:
   \`\`\`python
   import sys
   print(f"Python version: {sys.version}")
   print("Setup complete!")
   \`\`\`
   Run it and verify the output.

---

## 🔮 What's Next?

In **Post 03: Your First Python Program**, you'll:

- Write your first complete Python program
- Learn about the \`print()\` function in depth
- Understand how Python executes code
- Create interactive programs with \`input()\`

Your environment is ready. Let's write some code!

---

## 📖 Summary

| Task | Status |
|------|--------|
| Install Python 3.12+ | ✅ completed |
| Add to PATH | ✅ completed |
| Verify with \`python --version\` | ✅ completed |
| Install VS Code | ✅ completed |
| Install Python extension | ✅ completed |
| Run first command | ✅ completed |

---

## 🔗 Additional Resources

- [Official Python Downloads](https://www.python.org/downloads/)
- [VS Code Download](https://code.visualstudio.com/)
- [VS Code Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Python Setup Guide (Official)](https://docs.python.org/3/using/index.html)

---

[← Previous: Why Python in 2026](../01-why-python-in-2026/) | [Back to Index](../../README.md) | [Next: Your First Python Program →](../03-your-first-python-program/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Verifying Python Installation
Python Programming Learning 2026 - Post 02

This script helps verify that Python is installed correctly.
Run this after installing Python to confirm your setup.

Author: Sitharaj Seenivasan
"""

import sys
import platform

# Print a welcome message
print("=" * 50)
print("Python Installation Verification")
print("=" * 50)

# Check Python version
print(f"\\nPython Version: {sys.version}")
print(f"Version Info: {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}")

# Check if we're using Python 3.12 or higher
if sys.version_info.major >= 3 and sys.version_info.minor >= 12:
    print("✅ Python version is 3.12 or higher - Perfect!")
elif sys.version_info.major >= 3:
    print("⚠️ Python 3 detected, but consider upgrading to 3.12+")
else:
    print("❌ Python 2 detected - Please install Python 3.12+")

# Operating system information
print(f"\\nOperating System: {platform.system()}")
print(f"OS Version: {platform.version()}")
print(f"Machine: {platform.machine()}")

# Python executable location
print(f"\\nPython Executable: {sys.executable}")

# Simple functionality test
print("\\n" + "=" * 50)
print("Functionality Test")
print("=" * 50)

# Test basic arithmetic
result = 10 + 20
print(f"10 + 20 = {result} ✅")

# Test string operations
greeting = "Hello, Python!"
print(f'String test: "{greeting}" ✅')

# Test list operations
numbers = [1, 2, 3, 4, 5]
print(f"List test: {numbers} ✅")

print("\\n" + "=" * 50)
print("All tests passed! Your Python installation is working.")
print("=" * 50)

# Output example:
# ==================================================
# Python Installation Verification
# ==================================================
#
# Python Version: 3.12.1 (main, Dec  8 2025, 00:00:00) [Clang 15.0.0]
# Version Info: 3.12.1
# ✅ Python version is 3.12 or higher - Perfect!
#
# Operating System: Darwin
# OS Version: 23.0.0
# Machine: arm64
#
# Python Executable: /usr/local/bin/python3
#
# ==================================================
# Functionality Test
# ==================================================
# 10 + 20 = 30 ✅
# String test: "Hello, Python!" ✅
# List test: [1, 2, 3, 4, 5] ✅
#
# ==================================================
# All tests passed! Your Python installation is working.
# ==================================================
`},{name:"example_2.py",content:`"""
Example 2: Interactive Python Shell Demo
Python Programming Learning 2026 - Post 02

This script simulates what you can do in the Python interactive shell.
It demonstrates basic calculations and expressions.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Things You Can Do in the Python Interactive Shell")
print("=" * 50)

# Basic arithmetic - just like a calculator
print("\\n--- Basic Arithmetic ---")
print(f"2 + 2 = {2 + 2}")
print(f"10 - 3 = {10 - 3}")
print(f"5 * 6 = {5 * 6}")
print(f"20 / 4 = {20 / 4}")

# More math operations
print("\\n--- More Operations ---")
print(f"2 ** 10 (power) = {2 ** 10}")  # Exponentiation
print(f"17 // 5 (floor division) = {17 // 5}")  # Integer division
print(f"17 % 5 (modulo) = {17 % 5}")  # Remainder

# String operations
print("\\n--- String Operations ---")
print(f'"Python" * 3 = {"Python" * 3}')
print(f'"Hello" + " World" = {"Hello" + " World"}')
print(f'len("Python") = {len("Python")}')

# Quick data checks
print("\\n--- Quick Data Checks ---")
print(f"type(42) = {type(42)}")
print(f"type(3.14) = {type(3.14)}")
print(f'type("text") = {type("text")}')
print(f"type([1, 2, 3]) = {type([1, 2, 3])}")

# Boolean expressions
print("\\n--- Boolean Expressions ---")
print(f"5 > 3 = {5 > 3}")
print(f"10 == 10 = {10 == 10}")
print(f"'a' in 'apple' = {'a' in 'apple'}")

print("\\n" + "=" * 50)
print("Try these yourself in the Python shell!")
print("Type 'python' in your terminal to start.")
print("=" * 50)

# Output:
# ==================================================
# Things You Can Do in the Python Interactive Shell
# ==================================================
#
# --- Basic Arithmetic ---
# 2 + 2 = 4
# 10 - 3 = 7
# 5 * 6 = 30
# 20 / 4 = 5.0
#
# --- More Operations ---
# 2 ** 10 (power) = 1024
# 17 // 5 (floor division) = 3
# 17 % 5 (modulo) = 2
#
# --- String Operations ---
# "Python" * 3 = PythonPythonPython
# "Hello" + " World" = Hello World
# len("Python") = 6
#
# --- Quick Data Checks ---
# type(42) = <class 'int'>
# type(3.14) = <class 'float'>
# type("text") = <class 'str'>
# type([1, 2, 3]) = <class 'list'>
#
# --- Boolean Expressions ---
# 5 > 3 = True
# 10 == 10 = True
# 'a' in 'apple' = True
`},{name:"example_3.py",content:`"""
Example 3: Understanding pip - Python Package Manager
Python Programming Learning 2026 - Post 02

This script demonstrates pip concepts and shows how to check
installed packages programmatically.

Author: Sitharaj Seenivasan
"""

import subprocess
import sys

print("=" * 50)
print("Understanding pip - Python's Package Manager")
print("=" * 50)

# What is pip?
print("""
pip stands for "Pip Installs Packages" (recursive acronym).
It's Python's official package installer.

Common pip commands:
  pip install package_name    → Install a package
  pip uninstall package_name  → Remove a package
  pip list                    → Show installed packages
  pip show package_name       → Show package details
  pip freeze                  → List packages in requirements format
""")

# Show pip version
print("-" * 50)
print("Your pip installation:")
print("-" * 50)

try:
    result = subprocess.run(
        [sys.executable, "-m", "pip", "--version"],
        capture_output=True,
        text=True
    )
    print(result.stdout.strip())
except Exception as e:
    print(f"Could not get pip version: {e}")

# Show a few installed packages
print("\\n" + "-" * 50)
print("Some built-in modules (no pip install needed):")
print("-" * 50)

# These are standard library modules - always available
standard_modules = [
    ("os", "Operating system interface"),
    ("sys", "System-specific parameters"),
    ("json", "JSON encoder/decoder"),
    ("datetime", "Date and time handling"),
    ("math", "Mathematical functions"),
    ("random", "Random number generation"),
    ("re", "Regular expressions"),
    ("collections", "Specialized container types"),
]

for module, description in standard_modules:
    try:
        __import__(module)
        print(f"  ✅ {module:15} - {description}")
    except ImportError:
        print(f"  ❌ {module:15} - Not available")

# Popular packages you might install later
print("\\n" + "-" * 50)
print("Popular packages to install later in your journey:")
print("-" * 50)

popular_packages = [
    ("requests", "HTTP library for web requests"),
    ("numpy", "Numerical computing"),
    ("pandas", "Data analysis"),
    ("flask", "Web framework"),
    ("django", "Full-stack web framework"),
    ("pytest", "Testing framework"),
]

for package, description in popular_packages:
    print(f"  pip install {package:10} → {description}")

print("\\n" + "=" * 50)
print("Remember: Use virtual environments for projects!")
print("We'll cover this in Post 79.")
print("=" * 50)

# Output:
# ==================================================
# Understanding pip - Python's Package Manager
# ==================================================
#
# pip stands for "Pip Installs Packages" (recursive acronym).
# It's Python's official package installer.
# ...
`}]},3:{slug:"03-your-first-python-program",readme:`# Post 03: Your First Python Program

[← Previous: Installing Python](../02-installing-python/) | [Back to Index](../../README.md) | [Next: Python Syntax Basics →](../04-python-syntax-basics/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 03 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 18 minutes

---

## 🎯 Target Audience

This post is for:

- **Complete beginners** writing their first lines of code
- **Learners** who have just installed Python
- **Anyone** ready to move beyond "Hello, World!"

Prerequisites: Post 02 completed (Python installed and verified)

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand how Python executes code line by line
2. Master the \`print()\` function for output
3. Use the \`input()\` function for user interaction
4. Create your first interactive program
5. Understand basic program flow

---

## 💡 Why This Matters in 2026

Every Python program you'll ever write—from simple scripts to AI applications—builds on these fundamentals:

- **Output**: Showing results to users (\`print()\`)
- **Input**: Getting data from users (\`input()\`)
- **Sequential execution**: Understanding code flows top to bottom

These concepts are the foundation of all programming. Master them here, and everything else becomes easier.

---

## 🔍 Understanding Program Execution

### How Python Reads Your Code

Python is an **interpreted language**, meaning it reads and executes code **line by line** from top to bottom.

\`\`\`python
# Line 1 executes first
print("First line")

# Line 2 executes second
print("Second line")

# Line 3 executes third
print("Third line")
\`\`\`

Output:
\`\`\`
First line
Second line
Third line
\`\`\`

This is called **sequential execution**. Python doesn't skip ahead or jump around (unless you tell it to later with control flow).

---

## 📤 The print() Function: Your Voice to the World

The \`print()\` function displays output to the screen. It's how your program communicates with users.

### Basic Usage

\`\`\`python
print("Hello, World!")
\`\`\`

Output:
\`\`\`
Hello, World!
\`\`\`

### What Can You Print?

\`\`\`python
# Text (strings)
print("I am learning Python")

# Numbers
print(42)
print(3.14159)

# Results of calculations
print(2 + 2)
print(10 * 5)

# Multiple values
print("The answer is", 42)

# Empty line
print()
\`\`\`

Output:
\`\`\`
I am learning Python
42
3.14159
4
50
The answer is 42

\`\`\`

### Print Multiple Items

\`\`\`python
# Separate with commas - Python adds spaces automatically
print("Name:", "Alice", "| Age:", 30)

# Output: Name: Alice | Age: 30
\`\`\`

### The \`sep\` Parameter

Control what goes between items:

\`\`\`python
print("2026", "01", "11", sep="-")
# Output: 2026-01-11

print("apple", "banana", "cherry", sep=", ")
# Output: apple, banana, cherry

print("Python", "is", "awesome", sep="***")
# Output: Python***is***awesome
\`\`\`

### The \`end\` Parameter

Control what comes at the end (default is newline):

\`\`\`python
print("Hello", end=" ")
print("World")
# Output: Hello World (on same line)

print("Loading", end="...")
print("Done!")
# Output: Loading...Done!
\`\`\`

---

## 📥 The input() Function: Listening to Users

The \`input()\` function pauses your program and waits for the user to type something.

### Basic Usage

\`\`\`python
name = input("What is your name? ")
print("Hello,", name)
\`\`\`

Execution:
\`\`\`
What is your name? Alice
Hello, Alice
\`\`\`

### How input() Works

1. Displays the prompt message (the string inside parentheses)
2. Pauses and waits for user to type
3. User presses Enter
4. Returns whatever the user typed (as a string)

### Important: input() Always Returns a String

\`\`\`python
age = input("Enter your age: ")
print(type(age))  # <class 'str'>

# Even if user types 25, age is "25" not 25
\`\`\`

To use the input as a number, you must convert it:

\`\`\`python
age = input("Enter your age: ")
age_number = int(age)  # Convert string to integer
next_year = age_number + 1
print("Next year you'll be", next_year)
\`\`\`

We'll cover type conversion in detail in Post 10.

---

## 🛠️ Building Your First Interactive Program

Let's create a complete program that combines what we've learned:

### Program: Personal Greeter

\`\`\`python
# Personal Greeter Program
# This program gets user information and creates a personalized greeting

print("=" * 40)
print("Welcome to the Personal Greeter!")
print("=" * 40)
print()

# Get user information
name = input("What is your name? ")
city = input("What city do you live in? ")
hobby = input("What is your favorite hobby? ")

# Create personalized output
print()
print("=" * 40)
print("Here's your personalized greeting:")
print("=" * 40)
print()
print(f"Hello, {name}!")
print(f"Greetings from a fellow programmer to someone in {city}!")
print(f"I hear you enjoy {hobby} - that's awesome!")
print()
print("Welcome to your Python journey!")
print("=" * 40)
\`\`\`

Sample execution:
\`\`\`
========================================
Welcome to the Personal Greeter!
========================================

What is your name? Sarah
What city do you live in? Seattle
What is your favorite hobby? hiking

========================================
Here's your personalized greeting:
========================================

Hello, Sarah!
Greetings from a fellow programmer to someone in Seattle!
I hear you enjoy hiking - that's awesome!

Welcome to your Python journey!
========================================
\`\`\`

### Breaking Down the Program

1. **Print decorative header** using \`print()\` and string multiplication
2. **Collect input** with three \`input()\` calls
3. **Store data** in variables (\`name\`, \`city\`, \`hobby\`)
4. **Display output** using f-strings (formatted strings)

---

## 📝 Understanding f-Strings

f-strings (formatted string literals) are a powerful way to embed expressions in strings:

\`\`\`python
name = "Python"
version = 3.12

# f-string syntax: f"text {expression} more text"
print(f"I am learning {name} version {version}")
# Output: I am learning Python version 3.12
\`\`\`

Key points:
- Start with \`f\` before the opening quote
- Use \`{variable}\` to insert variables
- Expressions inside \`{}\` are evaluated

More examples:

\`\`\`python
price = 19.99
quantity = 3
total = price * quantity

print(f"Total: \${total}")
# Output: Total: $59.97

print(f"Total: \${price * quantity}")  # Expression inside {}
# Output: Total: $59.97
\`\`\`

---

## 🔄 Program Flow: Putting It All Together

Here's the complete flow of a Python program:

\`\`\`
┌─────────────────────────────────────────────┐
│  Program Execution Flow                     │
├─────────────────────────────────────────────┤
│                                             │
│   1. Start at the top                       │
│         ↓                                   │
│   2. Execute line 1                         │
│         ↓                                   │
│   3. Execute line 2                         │
│         ↓                                   │
│   4. If input() → pause, wait for user      │
│         ↓                                   │
│   5. Continue to next line                  │
│         ↓                                   │
│   6. Repeat until end of file               │
│         ↓                                   │
│   7. Program ends                           │
│                                             │
└─────────────────────────────────────────────┘
\`\`\`

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Forgetting Quotes Around Strings

\`\`\`python
# ❌ Wrong
print(Hello World)  # Error!

# ✅ Correct
print("Hello World")
\`\`\`

### Mistake 2: Mismatched Quotes

\`\`\`python
# ❌ Wrong
print("Hello World')  # Starts with " ends with '

# ✅ Correct
print("Hello World")
print('Hello World')  # Both work if matched
\`\`\`

### Mistake 3: Treating input() as a Number

\`\`\`python
# ❌ Wrong
age = input("Age: ")
future_age = age + 5  # Error! Can't add string and int

# ✅ Correct
age = input("Age: ")
future_age = int(age) + 5
\`\`\`

### Mistake 4: Missing Parentheses

\`\`\`python
# ❌ Wrong
print "Hello"  # This was Python 2 syntax

# ✅ Correct
print("Hello")
\`\`\`

### Mistake 5: Using input() Without Assigning

\`\`\`python
# ❌ Not useful - input is discarded
input("Enter name: ")

# ✅ Correct - store it in a variable
name = input("Enter name: ")
\`\`\`

---

## ✅ Best Practices

1. **Use descriptive prompts** in \`input()\`:
   \`\`\`python
   # ❌ Vague
   x = input("? ")
   
   # ✅ Clear
   name = input("Please enter your name: ")
   \`\`\`

2. **Add a space at the end of prompts**:
   \`\`\`python
   # ❌ No space - looks cramped
   name = input("Name:")  # Output: Name:John
   
   # ✅ Space included
   name = input("Name: ")  # Output: Name: John
   \`\`\`

3. **Use print() for visual separation**:
   \`\`\`python
   print()  # Empty line for spacing
   print("-" * 40)  # Visual separator
   \`\`\`

4. **Comment your code**:
   \`\`\`python
   # Get user's name
   name = input("Enter your name: ")
   
   # Display personalized greeting
   print(f"Hello, {name}!")
   \`\`\`

---

## 💼 Real-World Use Cases

### Simple Calculator Interaction

\`\`\`python
print("Simple Calculator")
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")
result = float(num1) + float(num2)
print(f"The sum is: {result}")
\`\`\`

### Basic Form Collection

\`\`\`python
print("User Registration")
email = input("Email: ")
username = input("Username: ")
print(f"Account created for {username} ({email})")
\`\`\`

### Quick Note Taker

\`\`\`python
note = input("Enter your note: ")
print(f"Note saved: '{note}'")
\`\`\`

---

## 📝 Mini Exercises

### Exercise 1: Temperature Converter (Display Only)
Create a program that:
1. Asks for a temperature in Celsius
2. Converts it to Fahrenheit (Formula: F = C × 9/5 + 32)
3. Displays the result

### Exercise 2: Mad Libs Game
Create a program that:
1. Asks for a noun, verb, and adjective
2. Prints a silly sentence using those words

### Exercise 3: Receipt Generator
Create a program that:
1. Asks for an item name
2. Asks for quantity
3. Asks for price per item
4. Displays a formatted receipt

---

## 🎯 Mini Project: Interactive Story

Create a short interactive story that uses at least:
- 3 \`input()\` calls
- 5 \`print()\` statements
- f-strings for personalization

Example idea: An adventure where the user chooses their character name, picks a path, and gets a personalized ending.

---

## 🔮 What's Next?

In **Post 04: Python Syntax Basics**, you'll learn:

- Python's indentation rules
- Comments and documentation
- Statement structure
- The importance of whitespace

You've written your first interactive program! Let's now understand how Python's syntax works.

---

## 📖 Summary

| Concept | Purpose | Example |
|---------|---------|---------|
| \`print()\` | Display output | \`print("Hello")\` |
| \`input()\` | Get user input | \`name = input("Name: ")\` |
| f-strings | Format strings | \`f"Hello, {name}"\` |
| Sequential execution | Top-to-bottom flow | Line 1 → Line 2 → Line 3 |

---

## 🔗 Additional Resources

- [Python print() Documentation](https://docs.python.org/3/library/functions.html#print)
- [Python input() Documentation](https://docs.python.org/3/library/functions.html#input)
- [f-String Guide](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals)

---

[← Previous: Installing Python](../02-installing-python/) | [Back to Index](../../README.md) | [Next: Python Syntax Basics →](../04-python-syntax-basics/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: The print() Function - Complete Guide
Python Programming Learning 2026 - Post 03

This example demonstrates all the ways to use the print() function.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("The print() Function - Complete Guide")
print("=" * 50)

# ============================================
# 1. Basic Printing
# ============================================
print("\\n--- 1. Basic Printing ---")

print("Hello, World!")
print('Single quotes work too!')
print(42)
print(3.14159)

# ============================================
# 2. Printing Multiple Items
# ============================================
print("\\n--- 2. Printing Multiple Items ---")

# Python automatically adds spaces between items
print("Python", "is", "awesome")
print("Score:", 100)
print("Name:", "Alice", "| Age:", 30)

# ============================================
# 3. The sep Parameter
# ============================================
print("\\n--- 3. The sep Parameter ---")

# Default separator is a space
print("A", "B", "C")  # A B C

# Custom separators
print("A", "B", "C", sep="-")  # A-B-C
print("2026", "01", "11", sep="/")  # 2026/01/11
print("apple", "banana", "cherry", sep=", ")  # apple, banana, cherry
print("P", "Y", "T", "H", "O", "N", sep="")  # PYTHON (no separator)

# ============================================
# 4. The end Parameter
# ============================================
print("\\n--- 4. The end Parameter ---")

# Default end is newline (\\n)
print("Line 1")
print("Line 2")

# Custom endings
print("Loading", end="...")
print("Done!")

print("Same", end=" ")
print("line", end=" ")
print("output")

# ============================================
# 5. Combining sep and end
# ============================================
print("\\n--- 5. Combining sep and end ---")

print("X", "Y", "Z", sep="-", end=" | ")
print("A", "B", "C", sep="-")

# ============================================
# 6. Printing Empty Lines
# ============================================
print("\\n--- 6. Empty Lines ---")

print("Before empty line")
print()  # Prints an empty line
print("After empty line")

# ============================================
# 7. Printing Special Characters
# ============================================
print("\\n--- 7. Special Characters ---")

print("Tab:\\tIndented text")
print("Newline:\\nSecond line")
print("Backslash: \\\\")
print("Quotes: \\"Hello\\" and 'World'")

# ============================================
# 8. String Multiplication
# ============================================
print("\\n--- 8. String Multiplication ---")

print("=" * 30)
print("*" * 20)
print("-" * 40)

print("=" * 50)
print("All print() examples complete!")
print("=" * 50)
`},{name:"example_2.py",content:`"""
Example 2: The input() Function and User Interaction
Python Programming Learning 2026 - Post 03

This example demonstrates how to get input from users.
NOTE: This script is interactive - run it to try!

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("The input() Function - Interactive Demo")
print("=" * 50)
print()

# ============================================
# 1. Basic Input
# ============================================
print("--- Basic Input ---")
name = input("What is your name? ")
print(f"Hello, {name}!")
print()

# ============================================
# 2. Input Always Returns a String
# ============================================
print("--- Input Returns Strings ---")
favorite_number = input("Enter your favorite number: ")
print(f"Your number: {favorite_number}")
print(f"Type: {type(favorite_number)}")  # Will show <class 'str'>
print()

# ============================================
# 3. Converting Input to Numbers
# ============================================
print("--- Converting to Numbers ---")
age_str = input("Enter your age: ")
age = int(age_str)  # Convert string to integer
next_year_age = age + 1
print(f"You are {age} years old")
print(f"Next year you'll be {next_year_age}")
print()

# ============================================
# 4. Direct Conversion (Shorthand)
# ============================================
print("--- Direct Conversion ---")
# You can wrap input() directly with int() or float()
birth_year = int(input("Enter your birth year: "))
current_year = 2026
age_approx = current_year - birth_year
print(f"You are approximately {age_approx} years old")
print()

# ============================================
# 5. Float Input
# ============================================
print("--- Float Input ---")
price = float(input("Enter a price: $"))
tax = price * 0.08
total = price + tax
print(f"Price: \${price:.2f}")
print(f"Tax (8%): \${tax:.2f}")
print(f"Total: \${total:.2f}")
print()

# ============================================
# 6. Multiple Inputs
# ============================================
print("--- Multiple Inputs ---")
first_name = input("First name: ")
last_name = input("Last name: ")
city = input("City: ")
print()
print(f"Profile: {first_name} {last_name} from {city}")

print()
print("=" * 50)
print("Interactive demo complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: Complete Interactive Program - Personal Profile Creator
Python Programming Learning 2026 - Post 03

A complete program that demonstrates input, output, and f-strings.
Run this to create your personal Python programmer profile!

Author: Sitharaj Seenivasan
"""

# ============================================
# Program: Personal Profile Creator
# ============================================

# Header
print()
print("╔" + "═" * 48 + "╗")
print("║" + " " * 12 + "PYTHON PROGRAMMER PROFILE" + " " * 11 + "║")
print("║" + " " * 14 + "Profile Generator v1.0" + " " * 12 + "║")
print("╚" + "═" * 48 + "╝")
print()

# Collect user information
print("Please answer the following questions:")
print("-" * 50)
print()

name = input("Your name: ")
age = input("Your age: ")
country = input("Your country: ")
programming_level = input("Programming experience (beginner/intermediate/advanced): ")
goal = input("What do you want to build with Python? ")
hours_per_week = input("Hours you can dedicate per week: ")
favorite_food = input("Your favorite food (for fun!): ")

# Calculate estimated completion
hours = int(hours_per_week) if hours_per_week.isdigit() else 5
weeks_to_complete = 240 // hours  # Approximate hours for 120 posts

# Generate profile
print()
print("╔" + "═" * 48 + "╗")
print("║" + " " * 16 + "YOUR PROFILE" + " " * 20 + "║")
print("╠" + "═" * 48 + "╣")
print()
print(f"  👤 Name: {name}")
print(f"  🎂 Age: {age}")
print(f"  🌍 Country: {country}")
print(f"  📊 Level: {programming_level.capitalize()}")
print(f"  🎯 Goal: {goal}")
print()
print("  " + "-" * 44)
print()
print(f"  📅 Study Plan: {hours_per_week} hours/week")
print(f"  ⏱️  Est. Completion: ~{weeks_to_complete} weeks")
print(f"  🍕 Fuel: {favorite_food}")
print()
print("╠" + "═" * 48 + "╣")
print("║" + " " * 14 + "PERSONALIZED MESSAGE" + " " * 14 + "║")
print("╠" + "═" * 48 + "╣")
print()

# Personalized message based on level
if programming_level.lower() == "beginner":
    message = "Perfect starting point! Take your time with each post."
elif programming_level.lower() == "intermediate":
    message = "Great foundation! Focus on phases 6-10 for growth."
else:
    message = "Welcome, pro! Check out phases 10-12 for advanced topics."

print(f"  {message}")
print()
print(f"  Remember, {name}: You're not just learning Python")
print(f"  You're building the skills to create {goal}!")
print()
print("╚" + "═" * 48 + "╝")
print()
print(f"Good luck, {name}! 🐍")
print("Let's start with Post 01 when you're ready.")
print()

# Sample run output (when user provides input):
# 
# ╔════════════════════════════════════════════════╗
# ║            PYTHON PROGRAMMER PROFILE           ║
# ║              Profile Generator v1.0            ║
# ╚════════════════════════════════════════════════╝
# 
# Please answer the following questions:
# --------------------------------------------------
# 
# Your name: Alex
# Your age: 25
# Your country: Canada
# Programming experience (beginner/intermediate/advanced): beginner
# What do you want to build with Python? web applications
# Hours you can dedicate per week: 10
# Your favorite food (for fun!): pizza
# 
# ╔════════════════════════════════════════════════╗
# ║                YOUR PROFILE                    ║
# ╠════════════════════════════════════════════════╣
# 
#   👤 Name: Alex
#   🎂 Age: 25
#   🌍 Country: Canada
#   📊 Level: Beginner
#   🎯 Goal: web applications
# 
#   --------------------------------------------
# 
#   📅 Study Plan: 10 hours/week
#   ⏱️  Est. Completion: ~24 weeks
#   🍕 Fuel: pizza
# 
# ╠════════════════════════════════════════════════╣
# ║              PERSONALIZED MESSAGE              ║
# ╠════════════════════════════════════════════════╣
# 
#   Perfect starting point! Take your time with each post.
# 
#   Remember, Alex: You're not just learning Python
#   You're building the skills to create web applications!
# 
# ╚════════════════════════════════════════════════╝
# 
# Good luck, Alex! 🐍
# Let's start with Post 01 when you're ready.
`}]},4:{slug:"04-python-syntax-basics",readme:`# Post 04: Python Syntax Basics

[← Previous: Your First Python Program](../03-your-first-python-program/) | [Back to Index](../../README.md) | [Next: Variables & Naming Conventions →](../05-variables-and-naming-conventions/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 04 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 16 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** learning Python's structure and rules
- **Developers from other languages** adjusting to Python's style
- **Anyone** who wants to understand why Python looks the way it does

Prerequisites: Posts 01-03 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand Python's indentation rules (critical!)
2. Write proper comments to document code
3. Know how Python statements work
4. Recognize Python's significant whitespace
5. Avoid common syntax errors

---

## 💡 Why This Matters in 2026

Python's syntax is designed for **readability**. Understanding these rules means:

- Your code will run without syntax errors
- You'll write code others can easily read
- You'll understand code from tutorials and documentation
- You'll form good habits from the start

---

## 🔍 Python's Philosophy: Readability Counts

Python is famous for clean, readable code. This isn't an accident—it's enforced by the language itself. Let's understand the key syntax rules.

---

## 📐 Indentation: Python's Defining Feature

### What Makes Python Different

In most languages, code blocks are defined by braces \`{}\`:

\`\`\`javascript
// JavaScript
if (condition) {
    doSomething();
    doMore();
}
\`\`\`

In Python, code blocks are defined by **indentation**:

\`\`\`python
# Python
if condition:
    do_something()
    do_more()
\`\`\`

### The Rules of Indentation

#### Rule 1: Use Consistent Indentation

Pick 4 spaces (recommended) and stick with it:

\`\`\`python
# ✅ Correct - 4 spaces
if True:
    print("Line 1")
    print("Line 2")

# ❌ Wrong - inconsistent
if True:
    print("Line 1")
      print("Line 2")  # IndentationError!
\`\`\`

#### Rule 2: Indent After Colons

Any line ending with \`:\` requires an indented block:

\`\`\`python
# After if/elif/else
if x > 0:
    print("Positive")

# After for/while loops
for item in items:
    print(item)

# After function definitions
def greet():
    print("Hello")

# After class definitions
class Dog:
    def bark(self):
        print("Woof!")
\`\`\`

#### Rule 3: Same Block = Same Indentation

\`\`\`python
if condition:
    statement_1()  # Same indent level
    statement_2()  # Same indent level
    statement_3()  # Same indent level
\`\`\`

#### Rule 4: Nested Blocks Add Another Level

\`\`\`python
if outer_condition:
    print("Outer block")  # 4 spaces
    if inner_condition:
        print("Inner block")  # 8 spaces
        print("Still inner")  # 8 spaces
    print("Back to outer")  # 4 spaces
\`\`\`

### Visual Representation

\`\`\`
Level 0: No indent (top-level code)
│
└── Level 1: 4 spaces (first block)
    │
    └── Level 2: 8 spaces (nested block)
        │
        └── Level 3: 12 spaces (deeply nested)
\`\`\`

---

## 💬 Comments: Explaining Your Code

Comments are notes in your code that Python ignores. They help humans understand your code.

### Single-Line Comments

Use \`#\` for single-line comments:

\`\`\`python
# This is a comment - Python ignores this line
print("Hello")  # This is an inline comment

# Calculate area of a circle
radius = 5
area = 3.14159 * radius ** 2  # pi * r^2
\`\`\`

### Multi-Line Comments

Python doesn't have a special multi-line comment syntax, but you have options:

\`\`\`python
# Option 1: Multiple # symbols
# This is a longer comment
# that spans multiple lines
# explaining something complex

# Option 2: Triple-quoted strings (often used as docstrings)
"""
This is a multi-line string.
If not assigned to a variable,
Python essentially ignores it.
"""
\`\`\`

### Docstrings: Special Documentation

Docstrings are triple-quoted strings at the start of functions, classes, or modules:

\`\`\`python
def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius: The radius of the circle
        
    Returns:
        The area of the circle (pi * r^2)
    """
    return 3.14159 * radius ** 2
\`\`\`

### Comment Best Practices

\`\`\`python
# ❌ Bad: Obvious comments
x = x + 1  # Add 1 to x

# ✅ Good: Explain WHY, not WHAT
x = x + 1  # Increment to next index after processing

# ❌ Bad: Outdated comment
# Calculate sum of squares
result = x * 2  # This doesn't match the comment!

# ✅ Good: Comment matches code
# Double the value for display scaling
result = x * 2
\`\`\`

---

## 📝 Statements and Lines

### Simple Statements

Most Python statements are one line:

\`\`\`python
x = 10
print(x)
name = "Python"
\`\`\`

### Multiple Statements Per Line (Avoid Usually)

You can use \`;\` but it's rarely recommended:

\`\`\`python
# Technically valid, but not Pythonic
x = 1; y = 2; z = 3

# Preferred: One statement per line
x = 1
y = 2
z = 3
\`\`\`

### Long Lines: Line Continuation

When a line is too long, you can continue it:

\`\`\`python
# Method 1: Backslash continuation
total = price + tax + shipping + \\
        handling + discount

# Method 2: Implicit continuation (inside brackets)
colors = [
    "red",
    "green",
    "blue",
    "yellow"
]

# Method 2 with function calls
result = some_function(
    argument1,
    argument2,
    argument3
)
\`\`\`

### Maximum Line Length

PEP 8 recommends **79 characters** maximum. Most teams use **100-120** in practice:

\`\`\`python
# Too long (hard to read on smaller screens)
message = "This is a very long string that exceeds the recommended maximum line length and makes the code harder to read"

# Better: Break it up
message = (
    "This is a very long string that has been "
    "broken across multiple lines for better "
    "readability in the codebase"
)
\`\`\`

---

## 📦 Code Blocks and Scope

### What Is a Code Block?

A code block is a group of statements that belong together:

\`\`\`python
# Block 1: if statement body
if temperature > 30:
    print("It's hot!")        # Part of the if block
    print("Stay hydrated!")   # Part of the if block

# Block 2: for loop body
for number in [1, 2, 3]:
    doubled = number * 2      # Part of the for block
    print(doubled)            # Part of the for block
\`\`\`

### Empty Blocks: The pass Statement

You can't have an empty block in Python. Use \`pass\` as a placeholder:

\`\`\`python
# ❌ Wrong: Empty block causes error
if condition:
# IndentationError: expected an indented block

# ✅ Correct: Use pass for empty blocks
if condition:
    pass  # TODO: Implement this later

def future_function():
    pass  # Placeholder for now

class EmptyClass:
    pass
\`\`\`

---

## 🔤 Case Sensitivity

Python is **case-sensitive**. These are all different:

\`\`\`python
name = "Alice"
Name = "Bob"
NAME = "Charlie"

print(name)   # Alice
print(Name)   # Bob
print(NAME)   # Charlie

# Common mistake:
Print("Hello")  # NameError: name 'Print' is not defined
print("Hello")  # ✅ Correct: lowercase 'print'
\`\`\`

---

## ⚠️ Common Syntax Errors

### Error 1: Indentation Errors

\`\`\`python
# ❌ Wrong: Missing indentation
if True:
print("Hello")  # IndentationError

# ✅ Correct
if True:
    print("Hello")
\`\`\`

### Error 2: Missing Colons

\`\`\`python
# ❌ Wrong: Missing colon
if True
    print("Hello")  # SyntaxError

# ✅ Correct
if True:
    print("Hello")
\`\`\`

### Error 3: Mixing Tabs and Spaces

\`\`\`python
# ❌ Wrong: Tab then space (invisible error!)
if True:
	print("Tab")    # Uses tab
    print("Space")  # Uses spaces
# TabError: inconsistent use of tabs and spaces

# ✅ Correct: Use only spaces (4 spaces is standard)
if True:
    print("Consistent")
    print("Spacing")
\`\`\`

### Error 4: Forgetting Quotes

\`\`\`python
# ❌ Wrong
message = Hello  # NameError: name 'Hello' is not defined

# ✅ Correct
message = "Hello"
\`\`\`

### Error 5: Unclosed Parentheses

\`\`\`python
# ❌ Wrong
print("Hello"  # SyntaxError: unexpected EOF

# ✅ Correct
print("Hello")
\`\`\`

---

## ✅ Best Practices

1. **Always use 4 spaces** for indentation (configure your editor)
2. **Use blank lines** to separate logical sections
3. **Comment judiciously** - explain why, not what
4. **Keep lines under 100 characters** when possible
5. **Be consistent** - pick a style and stick with it

### Good Code Structure Example

\`\`\`python
"""
temperature_checker.py - Check if it's comfortable outside.

This module provides a simple temperature evaluation.
"""

# Constants
COMFORTABLE_LOW = 18
COMFORTABLE_HIGH = 26

def check_temperature(temp):
    """Evaluate if temperature is comfortable."""
    if temp < COMFORTABLE_LOW:
        return "Too cold!"
    elif temp > COMFORTABLE_HIGH:
        return "Too hot!"
    else:
        return "Perfect!"


# Main execution
current_temp = 22
result = check_temperature(current_temp)
print(f"Temperature {current_temp}°C: {result}")
\`\`\`

---

## 💼 Real-World Applications

### Configuration Files

\`\`\`python
# Database configuration
DB_HOST = "localhost"
DB_PORT = 5432
DB_NAME = "myapp"

# Feature flags
ENABLE_LOGGING = True
ENABLE_CACHE = False
\`\`\`

### Simple Decision Logic

\`\`\`python
# Age-based access control
age = 18

if age >= 21:
    access_level = "full"
elif age >= 18:
    access_level = "standard"
else:
    access_level = "restricted"
\`\`\`

---

## 📝 Mini Exercises

### Exercise 1: Fix the Indentation
What's wrong with this code? Fix it:

\`\`\`python
def greet(name):
print("Hello,", name)
    print("Welcome!")
\`\`\`

### Exercise 2: Add Comments
Add appropriate comments to explain this code:

\`\`\`python
price = 100
discount = 0.20
final_price = price * (1 - discount)
print(f"Final price: \${final_price}")
\`\`\`

### Exercise 3: Line Continuation
Rewrite this long line properly:

\`\`\`python
message = "This is a very long message that explains something important and should really be split across multiple lines for better readability."
\`\`\`

---

## 🔮 What's Next?

In **Post 05: Variables & Naming Conventions**, you'll learn:

- How to create and use variables
- Python naming conventions
- Reserved keywords
- Variable assignment patterns

Understanding syntax is the foundation. Now let's learn how to store and work with data!

---

## 📖 Summary

| Concept | Key Rule |
|---------|----------|
| Indentation | 4 spaces, consistent throughout |
| Comments | \`#\` for single line, explain the "why" |
| Colons | Required before code blocks |
| Case | Python is case-sensitive |
| Line Length | Keep under 100 characters |

---

## 🔗 Additional Resources

- [PEP 8 – Style Guide](https://peps.python.org/pep-0008/)
- [Python Indentation Guide](https://docs.python.org/3/reference/lexical_analysis.html#indentation)
- [Writing Good Comments](https://realpython.com/python-comments-guide/)

---

[← Previous: Your First Python Program](../03-your-first-python-program/) | [Back to Index](../../README.md) | [Next: Variables & Naming Conventions →](../05-variables-and-naming-conventions/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Understanding Python Indentation
Python Programming Learning 2026 - Post 04

This example demonstrates how Python uses indentation 
to define code blocks.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Understanding Python Indentation")
print("=" * 50)

# ============================================
# 1. Basic Indentation After Colon
# ============================================
print("\\n--- 1. Basic Indentation ---")

condition = True

if condition:
    print("This is inside the if block")
    print("This is also inside the if block")
    print("All these have the same indentation")

print("This is outside the if block (no indentation)")

# ============================================
# 2. Nested Indentation
# ============================================
print("\\n--- 2. Nested Indentation ---")

level_1 = True
level_2 = True

if level_1:
    print("Level 1 - 4 spaces")
    
    if level_2:
        print("Level 2 - 8 spaces")
        print("Still at level 2")
    
    print("Back to level 1")

print("Back to level 0 (no indentation)")

# ============================================
# 3. Loop Indentation
# ============================================
print("\\n--- 3. Loop Indentation ---")

for i in range(3):
    print(f"  Loop iteration {i}")
    print(f"  Still in loop, same block")

print("Outside the loop now")

# ============================================
# 4. Function Indentation
# ============================================
print("\\n--- 4. Function Indentation ---")


def greet(name):
    """Function body is indented."""
    message = f"Hello, {name}!"
    return message


# Function call is at outer level
result = greet("Python Learner")
print(result)

# ============================================
# 5. Multiple Levels (Complex Example)
# ============================================
print("\\n--- 5. Multiple Levels ---")

categories = {
    "fruits": ["apple", "banana"],
    "vegetables": ["carrot", "broccoli"]
}

for category, items in categories.items():
    print(f"Category: {category}")
    
    for item in items:
        print(f"  - {item}")
        
        if item.startswith("a"):
            print(f"    (starts with 'a')")
    
    print()  # Empty line between categories

print("=" * 50)
print("Indentation examples complete!")
print("=" * 50)
`},{name:"example_2.py",content:`"""
Example 2: Comments and Documentation
Python Programming Learning 2026 - Post 04

This example shows different types of comments and 
how to document your Python code properly.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Comments and Documentation in Python")
print("=" * 50)

# ============================================
# 1. Single-Line Comments
# ============================================
print("\\n--- 1. Single-Line Comments ---")

# This is a single-line comment
# Python completely ignores these lines
# Use them to explain your code

x = 10  # Inline comment: initial value
y = 20  # Inline comment: second value

print(f"x = {x}, y = {y}")

# ============================================
# 2. Multi-Line Comments (Using #)
# ============================================
print("\\n--- 2. Multi-Line Comments ---")

# This is a multi-line comment using
# multiple hash symbols. Each line
# needs its own # symbol at the start.
# This is common for longer explanations.

result = x + y
print(f"Sum: {result}")

# ============================================
# 3. Triple-Quoted Strings (Multi-Line Text)
# ============================================
print("\\n--- 3. Triple-Quoted Strings ---")

"""
This is a triple-quoted string.
It can span multiple lines.
When not assigned to a variable,
it acts like a multi-line comment.
"""

explanation = """
Triple-quoted strings can also be
assigned to variables. They preserve
line breaks and formatting.
"""

print("Triple-quoted string content:")
print(explanation)

# ============================================
# 4. Docstrings (Documentation Strings)
# ============================================
print("\\n--- 4. Docstrings ---")


def calculate_rectangle_area(width, height):
    """
    Calculate the area of a rectangle.
    
    This function takes the width and height of a rectangle
    and returns the calculated area.
    
    Args:
        width (float): The width of the rectangle
        height (float): The height of the rectangle
        
    Returns:
        float: The area of the rectangle (width * height)
        
    Example:
        >>> calculate_rectangle_area(5, 3)
        15
    """
    return width * height


# Access docstring programmatically
print("Function docstring:")
print(calculate_rectangle_area.__doc__)
print()

# Use the function
area = calculate_rectangle_area(10, 5)
print(f"Area of 10x5 rectangle: {area}")

# ============================================
# 5. Comment Best Practices
# ============================================
print("\\n--- 5. Comment Best Practices ---")

# BAD: Obvious comment that adds no value
counter = 0  # Set counter to 0

# GOOD: Explains WHY, not WHAT
counter = 0  # Reset counter for new calculation batch

# BAD: Comment doesn't match code
# Calculate the sum
result = x * y  # This is multiplication, not sum!

# GOOD: Comment accurately describes code
# Calculate the product for area calculation
result = x * y

print(f"Result: {result}")

# ============================================
# 6. TODO Comments
# ============================================
print("\\n--- 6. TODO Comments ---")

# TODO: Add error handling for negative numbers
# TODO: Implement caching for better performance
# FIXME: This calculation may overflow for large numbers
# NOTE: This assumes input is already validated

# These special comments help track work items
print("TODO comments help track future work!")

# ============================================
# 7. Section Dividers
# ============================================
print("\\n--- 7. Section Dividers ---")

# ========== CONFIGURATION ==========
config_value = 100

# ========== MAIN LOGIC ==========
processed = config_value * 2

# ========== OUTPUT ==========
print(f"Processed value: {processed}")

print("\\n" + "=" * 50)
print("Comments examples complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: Line Continuation and Code Structure
Python Programming Learning 2026 - Post 04

This example demonstrates how to handle long lines
and structure Python code properly.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Line Continuation and Code Structure")
print("=" * 50)

# ============================================
# 1. Explicit Line Continuation (Backslash)
# ============================================
print("\\n--- 1. Backslash Continuation ---")

# Long mathematical expression
result = 100 + 200 + 300 + \\
         400 + 500 + 600 + \\
         700 + 800 + 900

print(f"Sum: {result}")

# Long conditional
age = 25
has_license = True
is_insured = True

if age >= 18 and \\
   has_license and \\
   is_insured:
    print("Can rent a car")

# ============================================
# 2. Implicit Continuation (Brackets)
# ============================================
print("\\n--- 2. Bracket Continuation ---")

# Lists naturally continue across lines
colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple"
]
print(f"Colors: {colors}")

# Dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "city": "Seattle",
    "occupation": "Developer"
}
print(f"Person: {person}")

# Function calls with many arguments
print(
    "This is a message",
    "that spans multiple",
    "function arguments",
    sep="\\n"
)

# ============================================
# 3. String Continuation
# ============================================
print("\\n--- 3. String Continuation ---")

# Method 1: Adjacent strings (automatically concatenated)
message = (
    "This is a long message "
    "that has been split across "
    "multiple lines for readability."
)
print(message)

# Method 2: Triple-quoted strings
paragraph = """
This is a paragraph that spans
multiple lines. It preserves
the line breaks in the output.
"""
print(paragraph)

# Method 3: Explicit concatenation
greeting = "Hello, " + \\
           "Python " + \\
           "programmer!"
print(greeting)

# ============================================
# 4. Proper Code Formatting
# ============================================
print("\\n--- 4. Proper Formatting ---")


# Good: Blank lines between logical sections
def calculate_total(items):
    """Calculate total with tax."""
    subtotal = sum(items)
    
    # Apply tax
    tax_rate = 0.08
    tax = subtotal * tax_rate
    
    # Calculate final total
    total = subtotal + tax
    
    return total


items = [10, 20, 30, 40]
total = calculate_total(items)
print(f"Total with tax: \${total:.2f}")

# ============================================
# 5. The pass Statement
# ============================================
print("\\n--- 5. The pass Statement ---")


# Empty function (placeholder)
def future_feature():
    pass  # TODO: Implement later


# Empty class (placeholder)
class FutureClass:
    pass


# Empty conditional branch
x = 10
if x < 5:
    pass  # Handle small numbers later
elif x < 20:
    print(f"{x} is medium")
else:
    pass  # Handle large numbers later

print("pass statement examples complete")

# ============================================
# 6. Multiple Statements (Avoid Usually)
# ============================================
print("\\n--- 6. Multiple Statements ---")

# Technical valid but not recommended
a = 1; b = 2; c = 3
print(f"a={a}, b={b}, c={c}")

# Preferred: One statement per line
x = 1
y = 2
z = 3
print(f"x={x}, y={y}, z={z}")

# ============================================
# 7. Case Sensitivity Demo
# ============================================
print("\\n--- 7. Case Sensitivity ---")

# These are all different variables
name = "lowercase"
Name = "capitalized"
NAME = "uppercase"
nAmE = "mixed_case"

print(f"name: {name}")
print(f"Name: {Name}")
print(f"NAME: {NAME}")
print(f"nAmE: {nAmE}")

print("\\n" + "=" * 50)
print("Code structure examples complete!")
print("=" * 50)
`}]},5:{slug:"05-variables-and-naming-conventions",readme:`# Post 05: Variables & Naming Conventions

[← Previous: Python Syntax Basics](../04-python-syntax-basics/) | [Back to Index](../../README.md) | [Next: Python Data Types Overview →](../06-python-data-types-overview/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 05 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 17 minutes

---

## 🎯 Target Audience

This post is for:

- **Complete beginners** learning how to store data
- **Developers from other languages** learning Python's variable rules
- **Anyone** wanting to write clean, Pythonic code

Prerequisites: Posts 01-04 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand what variables are and how they work
2. Create and assign values to variables
3. Follow Python naming conventions (PEP 8)
4. Know Python's reserved keywords
5. Use different assignment patterns

---

## 💡 Why This Matters in 2026

Variables are the building blocks of every program. They let you:

- **Store data** for later use
- **Give meaning** to values (what is \`42\`? Oh, it's the \`user_age\`)
- **Write maintainable code** that others can understand
- **Build complex applications** by managing state

Good variable naming is a mark of a professional programmer.

---

## 🔍 What Is a Variable?

A variable is a **named container** that stores a value. Think of it as a labeled box:

\`\`\`
┌─────────────────┐
│    "Alice"      │  ← Value stored inside
├─────────────────┤
│      name       │  ← Label (variable name)
└─────────────────┘
\`\`\`

In Python:

\`\`\`python
name = "Alice"
\`\`\`

Here:
- \`name\` is the variable (the label)
- \`"Alice"\` is the value (what's stored inside)
- \`=\` is the assignment operator (puts value in the box)

---

## ✏️ Creating Variables

### Basic Assignment

\`\`\`python
# Creating variables
name = "Python"
version = 3.12
is_awesome = True
year = 2026
\`\`\`

### No Declaration Needed

Unlike some languages, Python doesn't require type declarations:

\`\`\`python
# Python - just assign
age = 25

# Java - need to declare type first
# int age = 25;

# Python figures out the type automatically
\`\`\`

### Variables Can Change

Variables can be reassigned to new values (even different types):

\`\`\`python
x = 10        # x is an integer
print(x)      # 10

x = "hello"   # Now x is a string
print(x)      # hello

x = [1, 2, 3] # Now x is a list
print(x)      # [1, 2, 3]
\`\`\`

### Variables Reference Objects

In Python, variables are **references** to objects in memory:

\`\`\`python
a = [1, 2, 3]
b = a           # b points to the SAME list
b.append(4)
print(a)        # [1, 2, 3, 4] - a changed too!

# To create a copy instead:
c = a.copy()    # c points to a NEW list
c.append(5)
print(a)        # [1, 2, 3, 4] - a unchanged
\`\`\`

---

## 📛 Naming Rules (Required)

These rules are **enforced by Python**. Breaking them causes errors.

### Rule 1: Start with a Letter or Underscore

\`\`\`python
# ✅ Valid
name = "Alice"
_private = "hidden"
Name2 = "Bob"

# ❌ Invalid
2name = "Error"     # Can't start with number
\`\`\`

### Rule 2: Contain Only Letters, Numbers, Underscores

\`\`\`python
# ✅ Valid
user_name = "alice"
userName2 = "bob"
_count = 10

# ❌ Invalid
user-name = "Error"   # No hyphens
user name = "Error"   # No spaces
user@name = "Error"   # No special characters
\`\`\`

### Rule 3: Case Sensitive

\`\`\`python
# These are all DIFFERENT variables
name = "lowercase"
Name = "capitalized"
NAME = "uppercase"

print(name)  # lowercase
print(Name)  # capitalized
print(NAME)  # uppercase
\`\`\`

### Rule 4: Cannot Be Reserved Keywords

Python has reserved words that have special meaning:

\`\`\`python
# ❌ Invalid - these are keywords
if = 10       # SyntaxError
class = "A"   # SyntaxError
True = 5      # SyntaxError
\`\`\`

---

## 📝 Naming Conventions (Recommended)

These are **style guidelines** from PEP 8. They're not enforced but are expected.

### Use snake_case for Variables and Functions

\`\`\`python
# ✅ Recommended (snake_case)
user_name = "Alice"
total_price = 99.99
is_active = True

# ❌ Not recommended (but valid)
userName = "Alice"      # camelCase
TotalPrice = 99.99      # PascalCase
ISACTIVE = True         # UPPERCASE
\`\`\`

### Use UPPER_CASE for Constants

\`\`\`python
# Constants (values that shouldn't change)
MAX_USERS = 100
PI = 3.14159
API_KEY = "secret-key-here"
DEFAULT_TIMEOUT = 30
\`\`\`

### Use PascalCase for Classes

\`\`\`python
# Classes (covered in Post 52)
class UserProfile:
    pass

class ShoppingCart:
    pass
\`\`\`

### Use Leading Underscores for Special Purposes

\`\`\`python
# Single underscore: "private" (convention only)
_internal_value = 42

# Double underscore: name mangling (advanced)
__private_var = "very private"

# Dunder (double underscore both sides): special methods
__init__()  # Constructor
__str__()   # String representation
\`\`\`

### Naming Summary Table

| Type | Convention | Example |
|------|------------|---------|
| Variables | snake_case | \`user_name\`, \`total_price\` |
| Functions | snake_case | \`calculate_total()\`, \`get_user()\` |
| Constants | UPPER_CASE | \`MAX_SIZE\`, \`PI\` |
| Classes | PascalCase | \`UserProfile\`, \`ShoppingCart\` |
| Private | _leading_underscore | \`_internal\`, \`_helper()\` |
| Modules | snake_case | \`my_module.py\` |

---

## 🚫 Python Reserved Keywords

These words have special meaning and **cannot be used as variable names**:

\`\`\`python
# View all keywords in Python
import keyword
print(keyword.kwlist)
\`\`\`

| Keywords | | | | |
|----------|--|--|--|--|
| False | None | True | and | as |
| assert | async | await | break | class |
| continue | def | del | elif | else |
| except | finally | for | from | global |
| if | import | in | is | lambda |
| nonlocal | not | or | pass | raise |
| return | try | while | with | yield |

---

## 🔄 Assignment Patterns

### Multiple Assignment

\`\`\`python
# Assign same value to multiple variables
x = y = z = 0
print(x, y, z)  # 0 0 0

# Assign different values in one line
a, b, c = 1, 2, 3
print(a, b, c)  # 1 2 3

# Swap values (Pythonic way!)
a, b = b, a
print(a, b)  # 2 1 (swapped!)
\`\`\`

### Unpacking

\`\`\`python
# Unpack a list/tuple into variables
coordinates = (10, 20)
x, y = coordinates
print(x)  # 10
print(y)  # 20

# Unpack with rest
numbers = [1, 2, 3, 4, 5]
first, *rest = numbers
print(first)  # 1
print(rest)   # [2, 3, 4, 5]

*start, last = numbers
print(start)  # [1, 2, 3, 4]
print(last)   # 5
\`\`\`

### Augmented Assignment

\`\`\`python
# Regular assignment
count = 0
count = count + 1
print(count)  # 1

# Augmented assignment (shorthand)
count += 1  # Same as: count = count + 1
print(count)  # 2

# Other augmented operators
x = 10
x -= 3   # x = x - 3  → 7
x *= 2   # x = x * 2  → 14
x /= 7   # x = x / 7  → 2.0
x //= 2  # x = x // 2 → 1.0
x **= 3  # x = x ** 3 → 1.0
\`\`\`

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Using Reserved Keywords

\`\`\`python
# ❌ Wrong
class = "Python 101"  # SyntaxError

# ✅ Correct
class_name = "Python 101"
\`\`\`

### Mistake 2: Starting with Numbers

\`\`\`python
# ❌ Wrong
1st_place = "Gold"  # SyntaxError

# ✅ Correct
first_place = "Gold"
place_1st = "Gold"
\`\`\`

### Mistake 3: Using Hyphens

\`\`\`python
# ❌ Wrong
user-name = "Alice"  # Python sees subtraction

# ✅ Correct
user_name = "Alice"
\`\`\`

### Mistake 4: Inconsistent Naming

\`\`\`python
# ❌ Inconsistent
userName = "Alice"
user_age = 25
UserCity = "Seattle"

# ✅ Consistent (snake_case)
user_name = "Alice"
user_age = 25
user_city = "Seattle"
\`\`\`

### Mistake 5: Non-Descriptive Names

\`\`\`python
# ❌ Cryptic
x = 100
y = 0.08
z = x * y

# ✅ Descriptive
price = 100
tax_rate = 0.08
tax_amount = price * tax_rate
\`\`\`

---

## ✅ Best Practices

### 1. Use Descriptive Names

\`\`\`python
# ❌ Bad
d = 7
# What is d? Days? Distance? Discount?

# ✅ Good
days_until_deadline = 7
\`\`\`

### 2. Be Consistent

\`\`\`python
# Pick a style and stick with it
user_first_name = "Alice"
user_last_name = "Smith"
user_email = "alice@example.com"
\`\`\`

### 3. Avoid Single Letters (Usually)

\`\`\`python
# ❌ Avoid (except in specific cases)
n = "Alice"

# ✅ Exception: Loop counters and math
for i in range(10):
    print(i)

# Math formulas where letters are standard
e = m * c ** 2
\`\`\`

### 4. Use Meaningful Prefixes for Booleans

\`\`\`python
# ✅ Good boolean names (read like questions)
is_active = True
has_permission = False
can_edit = True
should_retry = False
\`\`\`

### 5. Avoid Abbreviations

\`\`\`python
# ❌ Abbreviations
usr_nm = "Alice"
btn_clr = "blue"

# ✅ Full words
user_name = "Alice"
button_color = "blue"
\`\`\`

---

## 💼 Real-World Examples

### User Profile

\`\`\`python
# User information
user_id = 12345
user_name = "alice_smith"
user_email = "alice@example.com"
is_verified = True
account_balance = 150.75
\`\`\`

### E-Commerce

\`\`\`python
# Product details
product_id = "SKU-001"
product_name = "Wireless Mouse"
unit_price = 29.99
quantity_in_stock = 150
is_available = quantity_in_stock > 0
\`\`\`

### Configuration

\`\`\`python
# Application settings (constants)
MAX_LOGIN_ATTEMPTS = 3
SESSION_TIMEOUT_MINUTES = 30
API_BASE_URL = "https://api.example.com"
DEBUG_MODE = False
\`\`\`

---

## 📝 Mini Exercises

### Exercise 1: Fix the Names
What's wrong with these variable names? Fix them:

\`\`\`python
1user = "Alice"
user-age = 25
class = "Python"
USER NAME = "Bob"
\`\`\`

### Exercise 2: Convert to snake_case
Convert these to proper Python naming:

\`\`\`python
firstName = "Alice"
lastName = "Smith"  
totalPrice = 99.99
isActive = True
\`\`\`

### Exercise 3: Swap Values
Write code to swap the values of \`a\` and \`b\` without using a temporary variable.

\`\`\`python
a = "first"
b = "second"
# Your code here
# Result: a should be "second", b should be "first"
\`\`\`

---

## 🎯 Mini Project: Variable Showcase

Create a program that:
1. Stores information about yourself (name, age, city, hobby)
2. Uses proper naming conventions
3. Includes at least one constant
4. Uses multiple assignment
5. Displays all information formatted nicely

---

## 🔮 What's Next?

In **Post 06: Python Data Types Overview**, you'll learn:

- The different types of data in Python
- How to check a variable's type
- Mutable vs immutable types
- When to use which type

You now know how to store data. Let's learn about the different kinds of data you can store!

---

## 📖 Summary

| Concept | Rule/Convention |
|---------|----------------|
| Variable creation | \`name = value\` |
| Naming rules | Start with letter/underscore, alphanumeric, case-sensitive |
| Variables | \`snake_case\` |
| Constants | \`UPPER_CASE\` |
| Classes | \`PascalCase\` |
| Reserved keywords | Cannot be used as names |

---

## 🔗 Additional Resources

- [PEP 8 – Naming Conventions](https://peps.python.org/pep-0008/#naming-conventions)
- [Python Keywords](https://docs.python.org/3/reference/lexical_analysis.html#keywords)
- [Variables in Python (Real Python)](https://realpython.com/python-variables/)

---

[← Previous: Python Syntax Basics](../04-python-syntax-basics/) | [Back to Index](../../README.md) | [Next: Python Data Types Overview →](../06-python-data-types-overview/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Creating and Using Variables
Python Programming Learning 2026 - Post 05

This example demonstrates how to create, assign,
and use variables in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Creating and Using Variables")
print("=" * 50)

# ============================================
# 1. Basic Variable Assignment
# ============================================
print("\\n--- 1. Basic Assignment ---")

# Creating variables with different types
name = "Alice"           # String
age = 25                 # Integer
height = 5.7             # Float
is_student = True        # Boolean

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Is Student: {is_student}")

# ============================================
# 2. Variables Can Change
# ============================================
print("\\n--- 2. Variables Can Change ---")

score = 0
print(f"Initial score: {score}")

score = 10
print(f"After first round: {score}")

score = 25
print(f"After second round: {score}")

# Even the type can change (dynamic typing)
value = 42
print(f"value = {value} (type: {type(value).__name__})")

value = "forty-two"
print(f"value = {value} (type: {type(value).__name__})")

# ============================================
# 3. Using Variables in Expressions
# ============================================
print("\\n--- 3. Variables in Expressions ---")

price = 100
tax_rate = 0.08
quantity = 3

# Using variables in calculations
subtotal = price * quantity
tax = subtotal * tax_rate
total = subtotal + tax

print(f"Price per item: \${price}")
print(f"Quantity: {quantity}")
print(f"Subtotal: \${subtotal}")
print(f"Tax (8%): \${tax:.2f}")
print(f"Total: \${total:.2f}")

# ============================================
# 4. Variables Reference Objects
# ============================================
print("\\n--- 4. Variable References ---")

# Simple values (immutable) - assignment creates new object
a = 10
b = a    # b gets a copy of the value
b = 20   # Changing b doesn't affect a
print(f"a = {a}, b = {b}")

# Lists (mutable) - assignment creates reference to same object
list_a = [1, 2, 3]
list_b = list_a      # Both point to SAME list
list_b.append(4)     # Modifying through list_b
print(f"list_a = {list_a}")  # list_a also changed!
print(f"list_b = {list_b}")

# To create an independent copy:
list_c = list_a.copy()
list_c.append(5)
print(f"list_a = {list_a}")  # Unchanged
print(f"list_c = {list_c}")  # Only list_c has 5

# ============================================
# 5. Checking Variable Information
# ============================================
print("\\n--- 5. Variable Information ---")

message = "Hello, Python!"

print(f"Value: {message}")
print(f"Type: {type(message)}")
print(f"ID (memory address): {id(message)}")
print(f"Length: {len(message)}")

print("\\n" + "=" * 50)
print("Variable basics complete!")
print("=" * 50)
`},{name:"example_2.py",content:`"""
Example 2: Naming Conventions in Python
Python Programming Learning 2026 - Post 05

This example demonstrates proper Python naming conventions
according to PEP 8 style guide.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Python Naming Conventions (PEP 8)")
print("=" * 50)

# ============================================
# 1. Variables and Functions: snake_case
# ============================================
print("\\n--- 1. snake_case (variables & functions) ---")

# ✅ Good variable names
user_name = "alice_smith"
account_balance = 1250.50
items_in_cart = 5
last_login_date = "2026-01-11"

print(f"Username: {user_name}")
print(f"Balance: \${account_balance}")
print(f"Cart items: {items_in_cart}")
print(f"Last login: {last_login_date}")


# ✅ Good function names (with snake_case)
def calculate_total_price(price, quantity):
    """Calculate total price with tax."""
    tax_rate = 0.08
    subtotal = price * quantity
    return subtotal * (1 + tax_rate)


def get_user_full_name(first_name, last_name):
    """Combine first and last name."""
    return f"{first_name} {last_name}"


total = calculate_total_price(29.99, 2)
print(f"\\nTotal price: \${total:.2f}")

full_name = get_user_full_name("Alice", "Smith")
print(f"Full name: {full_name}")

# ============================================
# 2. Constants: UPPER_CASE
# ============================================
print("\\n--- 2. UPPER_CASE (constants) ---")

# ✅ Good constant names
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30
PI = 3.14159
API_BASE_URL = "https://api.example.com"
DEBUG_MODE = False

print(f"Max connections: {MAX_CONNECTIONS}")
print(f"Default timeout: {DEFAULT_TIMEOUT}s")
print(f"Pi value: {PI}")
print(f"API URL: {API_BASE_URL}")
print(f"Debug mode: {DEBUG_MODE}")

# ============================================
# 3. Boolean Variables: is_, has_, can_, should_
# ============================================
print("\\n--- 3. Boolean Prefixes ---")

# ✅ Good boolean names (read like questions)
is_active = True
is_admin = False
has_permission = True
has_discount = False
can_edit = True
can_delete = False
should_notify = True
should_retry = False

print(f"Is active? {is_active}")
print(f"Is admin? {is_admin}")
print(f"Has permission? {has_permission}")
print(f"Can edit? {can_edit}")
print(f"Should notify? {should_notify}")

# ============================================
# 4. Private Variables: _single_underscore
# ============================================
print("\\n--- 4. Private Convention ---")

# Convention for "internal use" variables
_internal_counter = 0
_cache_data = {}
public_value = 42

print(f"Public value: {public_value}")
print(f"Internal counter: {_internal_counter}")
print("(Underscore prefix suggests internal use)")

# ============================================
# 5. Comparison: Good vs Bad Names
# ============================================
print("\\n--- 5. Good vs Bad Names ---")

print("\\n❌ Bad naming examples:")
bad_examples = """
d = 7                  # What is d?
n = "Alice"            # What is n?
temp = 98.6            # Temperature? Temporary?
data = [1, 2, 3]       # What kind of data?
x = 0.08               # What does x represent?
"""
print(bad_examples)

print("✅ Good naming examples:")
good_examples = """
days_until_deadline = 7
user_name = "Alice"
body_temperature = 98.6
order_quantities = [1, 2, 3]
tax_rate = 0.08
"""
print(good_examples)

# ============================================
# 6. Real-World Naming Example
# ============================================
print("\\n--- 6. Real-World Example ---")

# E-commerce order processing
ORDER_STATUS_PENDING = "pending"
ORDER_STATUS_SHIPPED = "shipped"
ORDER_STATUS_DELIVERED = "delivered"

MAX_ITEMS_PER_ORDER = 50
FREE_SHIPPING_THRESHOLD = 100.00

customer_name = "John Doe"
customer_email = "john@example.com"
order_items = ["Widget", "Gadget", "Gizmo"]
order_total = 125.50
is_premium_member = True
has_free_shipping = order_total >= FREE_SHIPPING_THRESHOLD

print(f"Customer: {customer_name}")
print(f"Email: {customer_email}")
print(f"Items: {order_items}")
print(f"Total: \${order_total}")
print(f"Premium member: {is_premium_member}")
print(f"Free shipping: {has_free_shipping}")

print("\\n" + "=" * 50)
print("Naming conventions complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: Advanced Assignment Patterns
Python Programming Learning 2026 - Post 05

This example demonstrates various ways to assign
values to variables in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Advanced Assignment Patterns")
print("=" * 50)

# ============================================
# 1. Multiple Assignment (Same Value)
# ============================================
print("\\n--- 1. Multiple Assignment (Same Value) ---")

# Assign same value to multiple variables
a = b = c = 0
print(f"a = {a}, b = {b}, c = {c}")

# Useful for initialization
red = green = blue = 255
print(f"RGB: ({red}, {green}, {blue})")

# ============================================
# 2. Multiple Assignment (Different Values)
# ============================================
print("\\n--- 2. Multiple Assignment (Different Values) ---")

# Assign different values in one line
x, y, z = 1, 2, 3
print(f"x = {x}, y = {y}, z = {z}")

# Practical example
name, age, city = "Alice", 25, "Seattle"
print(f"{name} is {age} years old, lives in {city}")

# From a list/tuple
coordinates = (10.5, 20.3, 30.1)
lat, lng, alt = coordinates
print(f"Latitude: {lat}, Longitude: {lng}, Altitude: {alt}")

# ============================================
# 3. Variable Swapping
# ============================================
print("\\n--- 3. Variable Swapping ---")

# Traditional way (other languages)
a = "first"
b = "second"
print(f"Before swap: a = '{a}', b = '{b}'")

# temp = a
# a = b
# b = temp

# Pythonic way (no temp variable needed!)
a, b = b, a
print(f"After swap: a = '{a}', b = '{b}'")

# Swapping numbers
x, y = 10, 20
print(f"Before: x = {x}, y = {y}")
x, y = y, x
print(f"After: x = {x}, y = {y}")

# ============================================
# 4. Unpacking with * (Star/Splat)
# ============================================
print("\\n--- 4. Extended Unpacking ---")

numbers = [1, 2, 3, 4, 5]

# Get first and rest
first, *rest = numbers
print(f"First: {first}, Rest: {rest}")

# Get first, last, and middle
first, *middle, last = numbers
print(f"First: {first}, Middle: {middle}, Last: {last}")

# Get first two and rest
first, second, *others = numbers
print(f"First: {first}, Second: {second}, Others: {others}")

# Get last only
*beginning, last = numbers
print(f"Beginning: {beginning}, Last: {last}")

# ============================================
# 5. Augmented Assignment Operators
# ============================================
print("\\n--- 5. Augmented Assignment ---")

# Addition
count = 0
count += 1   # count = count + 1
count += 5   # count = count + 5
print(f"count after += : {count}")

# Subtraction
balance = 100
balance -= 25  # balance = balance - 25
print(f"balance after -= : {balance}")

# Multiplication
value = 3
value *= 4    # value = value * 4
print(f"value after *= : {value}")

# Division
amount = 100
amount /= 4   # amount = amount / 4
print(f"amount after /= : {amount}")

# Floor division
total = 17
total //= 5   # total = total // 5 (integer division)
print(f"total after //= : {total}")

# Modulo
remainder = 17
remainder %= 5  # remainder = remainder % 5
print(f"remainder after %= : {remainder}")

# Power
base = 2
base **= 8    # base = base ** 8
print(f"base after **= : {base}")

# String concatenation
message = "Hello"
message += " World"  # message = message + " World"
print(f"message after += : {message}")

# List extension
items = [1, 2]
items += [3, 4]  # items = items + [3, 4]
print(f"items after += : {items}")

# ============================================
# 6. Practical Complete Example
# ============================================
print("\\n--- 6. Complete Example ---")

# Shopping cart example using various assignment patterns
DISCOUNT_RATE = 0.10
TAX_RATE = 0.08

# Product data
products = [
    ("Widget", 25.00, 2),
    ("Gadget", 15.50, 3),
    ("Gizmo", 42.00, 1)
]

total = 0

print("Shopping Cart:")
print("-" * 40)

for product_name, unit_price, quantity in products:
    subtotal = unit_price * quantity
    total += subtotal  # Augmented assignment
    print(f"{product_name}: \${unit_price} x {quantity} = \${subtotal:.2f}")

print("-" * 40)

# Apply discount
discount = total * DISCOUNT_RATE
total -= discount

# Apply tax
tax = total * TAX_RATE
total += tax

print(f"Subtotal: \${total + discount - tax:.2f}")
print(f"Discount (10%): -\${discount:.2f}")
print(f"Tax (8%): +\${tax:.2f}")
print(f"Total: \${total:.2f}")

print("\\n" + "=" * 50)
print("Assignment patterns complete!")
print("=" * 50)
`}]},6:{slug:"06-python-data-types-overview",readme:`# Post 06: Python Data Types Overview

[← Previous: Variables & Naming Conventions](../05-variables-and-naming-conventions/) | [Back to Index](../../README.md) | [Next: Numbers in Python →](../07-numbers-in-python/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 06 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 18 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** understanding how Python categorizes data
- **Programmers** from other languages learning Python's type system
- **Anyone** wanting a comprehensive overview before diving into specific types

Prerequisites: Posts 01-05 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand Python's built-in data types
2. Know the difference between mutable and immutable types
3. Use \`type()\` and \`isinstance()\` to check types
4. Recognize when to use each data type
5. Understand Python's dynamic typing

---

## 💡 Why This Matters in 2026

Understanding data types is fundamental because:

- **Choosing the right type** makes code efficient and clear
- **Avoiding type errors** saves debugging time
- **Modern Python** (with type hints) expects you to understand types
- **Every variable** you create has a type, whether you declare it or not

---

## 🔍 Python's Type System

### Static vs Dynamic Typing

Python uses **dynamic typing**: variables don't have a fixed type; they can hold any value.

\`\`\`python
# Python (dynamic typing)
x = 10          # x holds an integer
x = "hello"     # Now x holds a string - valid!
x = [1, 2, 3]   # Now x holds a list - also valid!
\`\`\`

Compare with statically-typed languages:

\`\`\`java
// Java (static typing)
int x = 10;
x = "hello";  // Error! x must stay an int
\`\`\`

### Strong Typing

Python is **strongly typed**: it doesn't implicitly convert between incompatible types.

\`\`\`python
# Python (strong typing)
"hello" + 5  # TypeError! Can't add string and int

# JavaScript (weak typing)
# "hello" + 5  // Would give "hello5"
\`\`\`

---

## 📊 Built-in Data Types Overview

Python has several built-in data types organized into categories:

### Numeric Types

| Type | Description | Example |
|------|-------------|---------|
| \`int\` | Integer (whole number) | \`42\`, \`-17\`, \`1000000\` |
| \`float\` | Floating-point (decimal) | \`3.14\`, \`-0.001\`, \`2.0\` |
| \`complex\` | Complex number | \`3+4j\`, \`1j\` |

### Text Type

| Type | Description | Example |
|------|-------------|---------|
| \`str\` | String (text) | \`"hello"\`, \`'Python'\` |

### Boolean Type

| Type | Description | Example |
|------|-------------|---------|
| \`bool\` | Boolean (True/False) | \`True\`, \`False\` |

### Sequence Types

| Type | Description | Example |
|------|-------------|---------|
| \`list\` | Ordered, mutable sequence | \`[1, 2, 3]\` |
| \`tuple\` | Ordered, immutable sequence | \`(1, 2, 3)\` |
| \`range\` | Sequence of numbers | \`range(10)\` |

### Mapping Type

| Type | Description | Example |
|------|-------------|---------|
| \`dict\` | Key-value pairs | \`{"name": "Alice"}\` |

### Set Types

| Type | Description | Example |
|------|-------------|---------|
| \`set\` | Unordered, unique elements | \`{1, 2, 3}\` |
| \`frozenset\` | Immutable set | \`frozenset({1, 2, 3})\` |

### None Type

| Type | Description | Example |
|------|-------------|---------|
| \`NoneType\` | Represents absence of value | \`None\` |

---

## 🔬 Checking Data Types

### The type() Function

\`\`\`python
# Check the type of any value
print(type(42))           # <class 'int'>
print(type(3.14))         # <class 'float'>
print(type("hello"))      # <class 'str'>
print(type(True))         # <class 'bool'>
print(type([1, 2, 3]))    # <class 'list'>
print(type({"a": 1}))     # <class 'dict'>
print(type(None))         # <class 'NoneType'>
\`\`\`

### The isinstance() Function

Check if a value is of a specific type:

\`\`\`python
x = 42

print(isinstance(x, int))    # True
print(isinstance(x, float))  # False
print(isinstance(x, str))    # False

# Check multiple types
print(isinstance(x, (int, float)))  # True (is either int or float)
\`\`\`

### Comparing type() vs isinstance()

\`\`\`python
# type() checks exact type
print(type(True) == bool)  # True
print(type(True) == int)   # False

# isinstance() considers inheritance
print(isinstance(True, bool))  # True
print(isinstance(True, int))   # True! (bool is subclass of int)
\`\`\`

---

## 🔄 Mutable vs Immutable Types

This is a **critical concept** in Python.

### Immutable Types

**Cannot be changed** after creation. Modifying them creates a new object.

\`\`\`python
# Immutable types: int, float, str, tuple, frozenset, bool

# Strings are immutable
s = "hello"
print(id(s))      # Memory address: 140234567890

s = s + " world"  # Creates NEW string
print(id(s))      # Different address: 140234567999
\`\`\`

### Mutable Types

**Can be changed** in place. The object itself is modified.

\`\`\`python
# Mutable types: list, dict, set

# Lists are mutable
my_list = [1, 2, 3]
print(id(my_list))  # Memory address: 140234567123

my_list.append(4)   # Modifies the SAME list
print(id(my_list))  # Same address: 140234567123
print(my_list)      # [1, 2, 3, 4]
\`\`\`

### Why Does This Matter?

\`\`\`python
# Immutable - safe to share
a = "hello"
b = a
b = b.upper()  # Creates new string, a is unchanged
print(a)  # "hello"
print(b)  # "HELLO"

# Mutable - be careful when sharing!
x = [1, 2, 3]
y = x          # y points to the SAME list
y.append(4)    # Modifies the list
print(x)       # [1, 2, 3, 4] - x also changed!
\`\`\`

### Mutability Summary

| Type | Mutable? |
|------|----------|
| \`int\`, \`float\`, \`complex\` | ❌ Immutable |
| \`str\` | ❌ Immutable |
| \`bool\` | ❌ Immutable |
| \`tuple\` | ❌ Immutable |
| \`frozenset\` | ❌ Immutable |
| \`list\` | ✅ Mutable |
| \`dict\` | ✅ Mutable |
| \`set\` | ✅ Mutable |

---

## 📝 Quick Tour of Each Type

### Numbers (int, float)

\`\`\`python
count = 42              # int
price = 19.99           # float
large = 1_000_000       # int with underscore separator
scientific = 1.5e10     # 15000000000.0

print(count + price)    # 61.99 (int + float = float)
\`\`\`

### Strings (str)

\`\`\`python
name = "Python"
greeting = 'Hello'
multiline = """This is
a multiline string"""

print(name[0])          # 'P' (indexing)
print(len(greeting))    # 5 (length)
\`\`\`

### Booleans (bool)

\`\`\`python
is_active = True
is_empty = False

# Booleans in conditions
if is_active:
    print("Active!")

# Boolean from comparisons
print(5 > 3)            # True
print(10 == 5)          # False
\`\`\`

### Lists (list)

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])        # "apple"
fruits.append("date")   # Add item
print(len(fruits))      # 4
\`\`\`

### Tuples (tuple)

\`\`\`python
coordinates = (10, 20)
rgb = (255, 128, 0)

print(coordinates[0])   # 10
# coordinates[0] = 5    # Error! Tuples are immutable
\`\`\`

### Dictionaries (dict)

\`\`\`python
person = {
    "name": "Alice",
    "age": 30,
    "city": "Seattle"
}

print(person["name"])   # "Alice"
person["email"] = "alice@example.com"  # Add key
\`\`\`

### Sets (set)

\`\`\`python
unique_numbers = {1, 2, 3, 3, 3}
print(unique_numbers)   # {1, 2, 3} (duplicates removed)

unique_numbers.add(4)
print(unique_numbers)   # {1, 2, 3, 4}
\`\`\`

### None

\`\`\`python
result = None

if result is None:
    print("No result yet")

# Common use: default parameters
def greet(name=None):
    if name is None:
        print("Hello, stranger!")
    else:
        print(f"Hello, {name}!")
\`\`\`

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Comparing Types Wrong

\`\`\`python
# ❌ Wrong - type returns a class
if type(x) == "int":
    print("Is int")

# ✅ Correct
if type(x) == int:
    print("Is int")

# ✅ Better - use isinstance
if isinstance(x, int):
    print("Is int")
\`\`\`

### Mistake 2: Modifying Shared Mutable Objects

\`\`\`python
# ❌ Unexpected behavior
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # [1, 2, 3, 4] - oops!

# ✅ Make a copy if needed
a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a)  # [1, 2, 3] - unchanged
\`\`\`

### Mistake 3: Expecting String Changes In-Place

\`\`\`python
# ❌ Won't work - strings are immutable
s = "hello"
s.upper()  # Returns new string, doesn't change s
print(s)   # "hello" - unchanged!

# ✅ Assign the result
s = "hello"
s = s.upper()
print(s)   # "HELLO"
\`\`\`

---

## ✅ Best Practices

1. **Use isinstance()** for type checking:
   \`\`\`python
   if isinstance(value, (int, float)):
       # Works with both
   \`\`\`

2. **Know mutability** before sharing objects:
   \`\`\`python
   # Copy mutable objects when needed
   new_list = old_list.copy()
   \`\`\`

3. **Choose appropriate types**:
   - Need to modify? Use \`list\`
   - Fixed collection? Use \`tuple\`
   - Need uniqueness? Use \`set\`
   - Need key-value pairs? Use \`dict\`

4. **Use type hints** (covered later) for documentation:
   \`\`\`python
   def greet(name: str) -> str:
       return f"Hello, {name}!"
   \`\`\`

---

## 💼 Real-World Type Usage

\`\`\`python
# User profile example
user = {
    "id": 12345,                    # int
    "name": "Alice Smith",          # str
    "email": "alice@example.com",   # str
    "is_active": True,              # bool
    "balance": 150.75,              # float
    "roles": ["user", "admin"],     # list
    "preferences": {                # dict (nested)
        "theme": "dark",
        "notifications": True
    },
    "tags": {"premium", "early-adopter"},  # set
    "last_login": None              # NoneType (not yet logged in)
}
\`\`\`

---

## 📝 Mini Exercises

### Exercise 1: Type Detective
What type is each of these? Use \`type()\` to check:
\`\`\`python
a = 42
b = 42.0
c = "42"
d = [42]
e = (42,)
f = {42}
g = {"answer": 42}
\`\`\`

### Exercise 2: Mutable or Immutable?
For each operation, predict if the original changes:
\`\`\`python
x = "hello"
y = x.upper()

a = [1, 2, 3]
b = a
b.append(4)
\`\`\`

### Exercise 3: Type Conversion
Convert the string \`"3.14"\` to a float, then to an integer.

---

## 🔮 What's Next?

In **Post 07: Numbers in Python**, you'll dive deep into:

- Integer operations and limits
- Floating-point precision
- Mathematical operators
- The \`math\` module

You now have an overview of Python's type system. Let's explore numbers in detail!

---

## 📖 Summary

| Concept | Key Points |
|---------|------------|
| Dynamic typing | Variables can hold any type |
| Strong typing | No implicit conversion between incompatible types |
| Mutable | \`list\`, \`dict\`, \`set\` - can be modified |
| Immutable | \`int\`, \`str\`, \`tuple\`, \`bool\`, \`float\` - cannot be modified |
| Type checking | \`type()\` for exact type, \`isinstance()\` for inheritance |

---

## 🔗 Additional Resources

- [Python Built-in Types](https://docs.python.org/3/library/stdtypes.html)
- [Type Checking in Python](https://realpython.com/python-type-checking/)
- [Mutable vs Immutable](https://realpython.com/python-mutable-vs-immutable-types/)

---

[← Previous: Variables & Naming Conventions](../05-variables-and-naming-conventions/) | [Back to Index](../../README.md) | [Next: Numbers in Python →](../07-numbers-in-python/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Exploring Python Data Types
Python Programming Learning 2026 - Post 06

This example demonstrates all the built-in data types in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Python Built-in Data Types")
print("=" * 50)

# ============================================
# 1. Numeric Types
# ============================================
print("\\n--- 1. Numeric Types ---")

# Integer
integer_value = 42
print(f"Integer: {integer_value} (type: {type(integer_value).__name__})")

# Float
float_value = 3.14159
print(f"Float: {float_value} (type: {type(float_value).__name__})")

# Complex
complex_value = 3 + 4j
print(f"Complex: {complex_value} (type: {type(complex_value).__name__})")

# ============================================
# 2. Text Type
# ============================================
print("\\n--- 2. Text Type ---")

string_single = 'Hello'
string_double = "World"
string_multi = """Multi
line"""

print(f"String: '{string_single}' (type: {type(string_single).__name__})")

# ============================================
# 3. Boolean Type
# ============================================
print("\\n--- 3. Boolean Type ---")

bool_true = True
bool_false = False

print(f"Boolean True: {bool_true} (type: {type(bool_true).__name__})")
print(f"Boolean False: {bool_false} (type: {type(bool_false).__name__})")

# ============================================
# 4. Sequence Types
# ============================================
print("\\n--- 4. Sequence Types ---")

# List - ordered, mutable
my_list = [1, 2, 3, "mixed", True]
print(f"List: {my_list} (type: {type(my_list).__name__})")

# Tuple - ordered, immutable
my_tuple = (1, 2, 3, "mixed", True)
print(f"Tuple: {my_tuple} (type: {type(my_tuple).__name__})")

# Range - sequence of numbers
my_range = range(5)
print(f"Range: {list(my_range)} (type: {type(my_range).__name__})")

# ============================================
# 5. Mapping Type
# ============================================
print("\\n--- 5. Mapping Type ---")

my_dict = {
    "name": "Alice",
    "age": 30,
    "active": True
}
print(f"Dictionary: {my_dict}")
print(f"  (type: {type(my_dict).__name__})")

# ============================================
# 6. Set Types
# ============================================
print("\\n--- 6. Set Types ---")

my_set = {1, 2, 3, 3, 3}  # Duplicates removed
print(f"Set: {my_set} (type: {type(my_set).__name__})")

my_frozenset = frozenset({1, 2, 3})
print(f"Frozenset: {my_frozenset} (type: {type(my_frozenset).__name__})")

# ============================================
# 7. None Type
# ============================================
print("\\n--- 7. None Type ---")

nothing = None
print(f"None: {nothing} (type: {type(nothing).__name__})")

# ============================================
# Summary Table
# ============================================
print("\\n" + "=" * 50)
print("Summary of Data Types")
print("=" * 50)

types_data = [
    ("int", 42, "Whole numbers"),
    ("float", 3.14, "Decimal numbers"),
    ("str", "hello", "Text"),
    ("bool", True, "True/False"),
    ("list", [1, 2, 3], "Ordered, mutable"),
    ("tuple", (1, 2, 3), "Ordered, immutable"),
    ("dict", {"a": 1}, "Key-value pairs"),
    ("set", {1, 2, 3}, "Unique elements"),
    ("NoneType", None, "Absence of value"),
]

print(f"\\n{'Type':<12} {'Example':<20} {'Description'}")
print("-" * 50)
for type_name, example, description in types_data:
    print(f"{type_name:<12} {str(example):<20} {description}")
`},{name:"example_2.py",content:`"""
Example 2: Type Checking with type() and isinstance()
Python Programming Learning 2026 - Post 06

This example shows how to check and verify data types.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Type Checking in Python")
print("=" * 50)

# ============================================
# 1. Using type()
# ============================================
print("\\n--- 1. Using type() ---")

values = [
    42,
    3.14,
    "hello",
    True,
    [1, 2, 3],
    (1, 2, 3),
    {"a": 1},
    {1, 2, 3},
    None
]

for value in values:
    print(f"type({str(value):15}) = {type(value)}")

# ============================================
# 2. Comparing Types
# ============================================
print("\\n--- 2. Comparing Types ---")

x = 42

print(f"x = {x}")
print(f"type(x) == int: {type(x) == int}")
print(f"type(x) == float: {type(x) == float}")
print(f"type(x) == str: {type(x) == str}")

# ============================================
# 3. Using isinstance()
# ============================================
print("\\n--- 3. Using isinstance() ---")

x = 42

print(f"isinstance({x}, int): {isinstance(x, int)}")
print(f"isinstance({x}, float): {isinstance(x, float)}")
print(f"isinstance({x}, str): {isinstance(x, str)}")

# ============================================
# 4. isinstance() with Multiple Types
# ============================================
print("\\n--- 4. Check Multiple Types ---")

values = [42, 3.14, "hello"]

for val in values:
    is_numeric = isinstance(val, (int, float))
    is_text = isinstance(val, str)
    print(f"{val:>8}: numeric={is_numeric}, text={is_text}")

# ============================================
# 5. type() vs isinstance() - The Difference
# ============================================
print("\\n--- 5. type() vs isinstance() ---")

# Boolean is a subclass of int
value = True

print(f"value = {value}")
print(f"type(value) == bool: {type(value) == bool}")     # True
print(f"type(value) == int: {type(value) == int}")       # False
print(f"isinstance(value, bool): {isinstance(value, bool)}")  # True
print(f"isinstance(value, int): {isinstance(value, int)}")    # True!

print("\\nExplanation: bool is a subclass of int in Python")
print("isinstance() checks inheritance, type() checks exact type")

# ============================================
# 6. Practical Type Checking Function
# ============================================
print("\\n--- 6. Practical Example ---")


def describe_value(value):
    """Describe the type and characteristics of a value."""
    if value is None:
        return "None (no value)"
    elif isinstance(value, bool):  # Check bool BEFORE int (bool is subclass)
        return f"Boolean: {value}"
    elif isinstance(value, int):
        return f"Integer: {value}"
    elif isinstance(value, float):
        return f"Float: {value}"
    elif isinstance(value, str):
        return f"String: '{value}' (length: {len(value)})"
    elif isinstance(value, list):
        return f"List: {value} (length: {len(value)})"
    elif isinstance(value, dict):
        return f"Dictionary: {len(value)} keys"
    else:
        return f"Unknown type: {type(value)}"


test_values = [42, 3.14, "hello", True, None, [1, 2, 3], {"a": 1}]

for val in test_values:
    print(describe_value(val))

# ============================================
# 7. Getting Type Name as String
# ============================================
print("\\n--- 7. Type Name as String ---")

x = [1, 2, 3]

# Get type name
type_obj = type(x)
type_name = type(x).__name__

print(f"Full type: {type_obj}")
print(f"Type name: {type_name}")

print("\\n" + "=" * 50)
print("Type checking examples complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: Mutable vs Immutable Types
Python Programming Learning 2026 - Post 06

This example demonstrates the critical difference between
mutable and immutable types in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Mutable vs Immutable Types")
print("=" * 50)

# ============================================
# 1. Immutable Types Demo (int, str, tuple)
# ============================================
print("\\n--- 1. Immutable Types ---")

# Integers are immutable
print("\\n[Integer]")
a = 10
print(f"a = {a}, id(a) = {id(a)}")

a = a + 5  # Creates NEW object
print(f"a = {a}, id(a) = {id(a)}  ← Different id (new object)")

# Strings are immutable
print("\\n[String]")
s = "hello"
print(f"s = '{s}', id(s) = {id(s)}")

s = s.upper()  # Creates NEW string
print(f"s = '{s}', id(s) = {id(s)}  ← Different id (new object)")

# Tuples are immutable
print("\\n[Tuple]")
t = (1, 2, 3)
print(f"t = {t}, id(t) = {id(t)}")
# t[0] = 10  # This would raise TypeError!
print("Cannot modify tuple elements")

# ============================================
# 2. Mutable Types Demo (list, dict, set)
# ============================================
print("\\n--- 2. Mutable Types ---")

# Lists are mutable
print("\\n[List]")
my_list = [1, 2, 3]
print(f"my_list = {my_list}, id = {id(my_list)}")

my_list.append(4)  # Modifies SAME object
print(f"my_list = {my_list}, id = {id(my_list)}  ← Same id!")

# Dictionaries are mutable
print("\\n[Dictionary]")
my_dict = {"a": 1}
print(f"my_dict = {my_dict}, id = {id(my_dict)}")

my_dict["b"] = 2  # Modifies SAME object
print(f"my_dict = {my_dict}, id = {id(my_dict)}  ← Same id!")

# Sets are mutable
print("\\n[Set]")
my_set = {1, 2, 3}
print(f"my_set = {my_set}, id = {id(my_set)}")

my_set.add(4)  # Modifies SAME object
print(f"my_set = {my_set}, id = {id(my_set)}  ← Same id!")

# ============================================
# 3. The Sharing Problem with Mutables
# ============================================
print("\\n--- 3. The Sharing Problem ---")

print("\\n[Immutable - Safe to share]")
a = "hello"
b = a
b = b.upper()

print(f"a = '{a}'  (original unchanged)")
print(f"b = '{b}'  (new value)")

print("\\n[Mutable - Be careful when sharing!]")
list_a = [1, 2, 3]
list_b = list_a  # list_b points to SAME list

print(f"Before: list_a = {list_a}, list_b = {list_b}")
list_b.append(4)
print(f"After:  list_a = {list_a}, list_b = {list_b}")
print("Both changed because they're the same object!")

# ============================================
# 4. How to Copy Mutable Objects
# ============================================
print("\\n--- 4. Making Copies ---")

original = [1, 2, 3]

# Method 1: .copy()
copy1 = original.copy()

# Method 2: list() constructor
copy2 = list(original)

# Method 3: slice
copy3 = original[:]

# Now modify copies
copy1.append(4)
copy2.append(5)
copy3.append(6)

print(f"Original: {original}  (unchanged)")
print(f"Copy 1:   {copy1}")
print(f"Copy 2:   {copy2}")
print(f"Copy 3:   {copy3}")

# ============================================
# 5. Deep vs Shallow Copy
# ============================================
print("\\n--- 5. Deep vs Shallow Copy ---")

import copy

# Nested list
nested = [[1, 2], [3, 4]]

# Shallow copy - nested lists are still shared
shallow = nested.copy()

# Deep copy - everything is copied
deep = copy.deepcopy(nested)

# Modify nested list in shallow copy
shallow[0].append(99)

print(f"Original: {nested}  ← Also changed!")
print(f"Shallow:  {shallow}")
print(f"Deep:     {deep}  ← Not affected")

print("\\nShallow copy only copies the outer list")
print("Deep copy copies everything recursively")

# ============================================
# 6. Quick Reference
# ============================================
print("\\n" + "=" * 50)
print("Mutability Quick Reference")
print("=" * 50)

print("""
IMMUTABLE (cannot change):
  ❄️ int, float, complex
  ❄️ str (string)
  ❄️ tuple
  ❄️ frozenset
  ❄️ bool

MUTABLE (can change):
  🔥 list
  🔥 dict (dictionary)
  🔥 set
""")

print("=" * 50)
print("Mutability examples complete!")
print("=" * 50)
`}]},7:{slug:"07-numbers-in-python",readme:`# Post 07: Numbers in Python

[← Previous: Python Data Types Overview](../06-python-data-types-overview/) | [Back to Index](../../README.md) | [Next: Strings in Python →](../08-strings-in-python/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 07 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 17 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** learning to work with numbers
- **Anyone** needing to understand Python's numeric capabilities
- **Developers** coming from languages with different numeric models

Prerequisites: Posts 01-06 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Work confidently with integers and floats
2. Use all arithmetic operators
3. Understand operator precedence
4. Use the \`math\` module for advanced operations
5. Handle common numeric pitfalls

---

## 💡 Why This Matters in 2026

Numbers are everywhere in programming:

- **Calculations**: Prices, statistics, measurements
- **Counting**: Loops, iterations, indexes
- **Data Science**: The foundation of all analysis
- **Game Development**: Positions, scores, physics
- **Financial Applications**: Currency, percentages, interest

---

## 🔢 Numeric Types in Python

### Integers (int)

Whole numbers without decimal points:

\`\`\`python
count = 42
negative = -17
big_number = 1000000
really_big = 999999999999999999999  # Python handles any size!

# Underscore separators for readability
million = 1_000_000
credit_card = 1234_5678_9012_3456
\`\`\`

### Floating-Point Numbers (float)

Numbers with decimal points:

\`\`\`python
price = 19.99
temperature = -3.5
pi = 3.14159

# Scientific notation
light_speed = 3e8      # 3 × 10^8 = 300,000,000
tiny = 1.5e-10         # 0.00000000015
\`\`\`

### Complex Numbers (complex)

Numbers with real and imaginary parts:

\`\`\`python
c = 3 + 4j
print(c.real)    # 3.0
print(c.imag)    # 4.0
\`\`\`

---

## ➕ Arithmetic Operators

### Basic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Subtraction | \`5 - 3\` | \`2\` |
| \`*\` | Multiplication | \`5 * 3\` | \`15\` |
| \`/\` | Division | \`5 / 3\` | \`1.666...\` |
| \`//\` | Floor Division | \`5 // 3\` | \`1\` |
| \`%\` | Modulo (Remainder) | \`5 % 3\` | \`2\` |
| \`**\` | Exponentiation | \`5 ** 3\` | \`125\` |

### Division Types

\`\`\`python
# Regular division (always returns float)
print(10 / 3)     # 3.333...
print(10 / 2)     # 5.0 (still a float!)

# Floor division (rounds down to integer)
print(10 // 3)    # 3
print(-10 // 3)   # -4 (rounds toward negative infinity)

# Modulo (remainder after division)
print(10 % 3)     # 1 (10 = 3*3 + 1)
print(17 % 5)     # 2 (17 = 5*3 + 2)
\`\`\`

### Exponentiation

\`\`\`python
print(2 ** 3)     # 8 (2³)
print(10 ** 2)    # 100 (10²)
print(2 ** 0.5)   # 1.414... (square root of 2)
print(27 ** (1/3)) # 3.0 (cube root of 27)
\`\`\`

---

## 📊 Operator Precedence

Python follows mathematical order of operations (PEMDAS):

1. **P**arentheses \`()\`
2. **E**xponents \`**\`
3. **M**ultiplication/Division \`* / // %\`
4. **A**ddition/Subtraction \`+ -\`

\`\`\`python
# Without parentheses
result = 2 + 3 * 4      # 14 (not 20!)
# Multiplication first: 3 * 4 = 12
# Then addition: 2 + 12 = 14

# With parentheses
result = (2 + 3) * 4    # 20
# Parentheses first: 2 + 3 = 5
# Then multiplication: 5 * 4 = 20

# Complex example
result = 2 ** 3 * 4 + 5
# Step 1: 2 ** 3 = 8
# Step 2: 8 * 4 = 32
# Step 3: 32 + 5 = 37
\`\`\`

### Best Practice: Use Parentheses for Clarity

\`\`\`python
# Even if not required, parentheses improve readability
average = (a + b + c) / 3
area = (base * height) / 2
\`\`\`

---

## 🧮 Built-in Numeric Functions

### abs() - Absolute Value

\`\`\`python
print(abs(-5))      # 5
print(abs(5))       # 5
print(abs(-3.14))   # 3.14
\`\`\`

### round() - Rounding

\`\`\`python
print(round(3.7))       # 4
print(round(3.2))       # 3
print(round(3.14159, 2)) # 3.14 (2 decimal places)
print(round(1234, -2))   # 1200 (round to hundreds)
\`\`\`

### pow() - Power

\`\`\`python
print(pow(2, 3))        # 8 (same as 2 ** 3)
print(pow(2, 3, 5))     # 3 (2³ mod 5 = 8 mod 5)
\`\`\`

### divmod() - Division and Modulo Together

\`\`\`python
quotient, remainder = divmod(17, 5)
print(quotient)     # 3
print(remainder)    # 2
\`\`\`

### min() and max()

\`\`\`python
print(min(3, 1, 4, 1, 5))   # 1
print(max(3, 1, 4, 1, 5))   # 5
print(min([10, 20, 5]))     # 5 (works with lists)
\`\`\`

### sum()

\`\`\`python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))         # 15
print(sum(numbers, 10))     # 25 (start from 10)
\`\`\`

---

## 📐 The math Module

For advanced mathematical operations, import the \`math\` module:

\`\`\`python
import math
\`\`\`

### Constants

\`\`\`python
print(math.pi)      # 3.141592653589793
print(math.e)       # 2.718281828459045
print(math.inf)     # Infinity
print(math.nan)     # Not a Number
\`\`\`

### Common Functions

\`\`\`python
# Square root
print(math.sqrt(16))      # 4.0

# Power (alternative to **)
print(math.pow(2, 3))     # 8.0

# Logarithms
print(math.log(10))       # 2.302... (natural log)
print(math.log10(100))    # 2.0

# Ceiling and floor
print(math.ceil(4.1))     # 5 (rounds up)
print(math.floor(4.9))    # 4 (rounds down)

# Trigonometry (angles in radians)
print(math.sin(0))        # 0.0
print(math.cos(0))        # 1.0
print(math.degrees(math.pi))  # 180.0

# Factorial
print(math.factorial(5))  # 120 (5! = 5*4*3*2*1)

# Greatest common divisor
print(math.gcd(48, 18))   # 6
\`\`\`

---

## ⚠️ Common Pitfalls

### Floating-Point Precision

\`\`\`python
# Seems wrong, but it's floating-point representation
print(0.1 + 0.2)          # 0.30000000000000004

# Solution 1: Use round()
print(round(0.1 + 0.2, 1))  # 0.3

# Solution 2: Use decimal module for precision
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3
\`\`\`

### Division by Zero

\`\`\`python
# print(10 / 0)   # ZeroDivisionError!

# Always check before dividing
divisor = 0
if divisor != 0:
    result = 10 / divisor
else:
    result = None
    print("Cannot divide by zero")
\`\`\`

### Integer Division Gotcha

\`\`\`python
# Regular division always returns float
print(type(10 / 2))   # <class 'float'>

# Floor division returns int (if both operands are int)
print(type(10 // 2))  # <class 'int'>
\`\`\`

---

## ✅ Best Practices

1. **Use underscores** for large numbers: \`1_000_000\`
2. **Use parentheses** for clarity in complex expressions
3. **Be careful with floats** in comparisons:
   \`\`\`python
   # ❌ May fail due to precision
   if 0.1 + 0.2 == 0.3:
       print("Equal")
   
   # ✅ Use tolerance for float comparison
   if abs((0.1 + 0.2) - 0.3) < 0.0001:
       print("Equal")
   \`\`\`
4. **Use the right type**: \`int\` for counting, \`float\` for measurements
5. **Import math** for advanced operations

---

## 💼 Real-World Examples

### Price Calculation

\`\`\`python
unit_price = 29.99
quantity = 3
discount_rate = 0.10
tax_rate = 0.08

subtotal = unit_price * quantity
discount = subtotal * discount_rate
after_discount = subtotal - discount
tax = after_discount * tax_rate
total = after_discount + tax

print(f"Total: \${total:.2f}")  # Total: $87.57
\`\`\`

### Temperature Conversion

\`\`\`python
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")  # 25°C = 77.0°F
\`\`\`

### Percentage Calculations

\`\`\`python
total_students = 150
passed = 127
pass_rate = (passed / total_students) * 100
print(f"Pass rate: {pass_rate:.1f}%")  # Pass rate: 84.7%
\`\`\`

---

## 📝 Mini Exercises

1. Write code to calculate the area of a circle with radius 7.
2. Convert 98.6°F to Celsius: C = (F - 32) × 5/9
3. Calculate 15% tip on a $48.50 bill.
4. Find the remainder when 1000 is divided by 33.

---

## 🔮 What's Next?

In **Post 08: Strings in Python**, you'll learn:

- Creating and manipulating text
- String indexing and slicing
- String operations
- Escape characters

You now have the power of numbers! Let's learn about text.

---

## 📖 Summary

| Topic | Key Points |
|-------|------------|
| Integer | Whole numbers, unlimited size |
| Float | Decimal numbers, approximate |
| Operators | \`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\` |
| Built-ins | \`abs()\`, \`round()\`, \`min()\`, \`max()\`, \`sum()\` |
| math module | \`sqrt()\`, \`ceil()\`, \`floor()\`, \`pi\` |

---

[← Previous: Python Data Types Overview](../06-python-data-types-overview/) | [Back to Index](../../README.md) | [Next: Strings in Python →](../08-strings-in-python/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Numeric Types and Arithmetic Operators
Python Programming Learning 2026 - Post 07

This example covers integers, floats, and all arithmetic operators.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Numeric Types and Arithmetic Operators")
print("=" * 50)

# ============================================
# 1. Integer Examples
# ============================================
print("\\n--- 1. Integers ---")

count = 42
negative = -17
big_number = 999_999_999_999  # Underscore for readability

print(f"Count: {count}")
print(f"Negative: {negative}")
print(f"Big number: {big_number:,}")  # Format with commas

# Python can handle HUGE integers
huge = 10 ** 100  # 10 with 100 zeros
print(f"Huge number has {len(str(huge))} digits!")

# ============================================
# 2. Float Examples
# ============================================
print("\\n--- 2. Floats ---")

price = 19.99
temperature = -3.5
pi = 3.14159

print(f"Price: \${price}")
print(f"Temperature: {temperature}°C")
print(f"Pi: {pi}")

# Scientific notation
light_speed = 3e8  # 3 × 10^8
tiny = 1.5e-10

print(f"Speed of light: {light_speed:,.0f} m/s")
print(f"Tiny number: {tiny}")

# ============================================
# 3. Basic Arithmetic
# ============================================
print("\\n--- 3. Basic Arithmetic ---")

a, b = 15, 4

print(f"a = {a}, b = {b}")
print(f"Addition:       {a} + {b} = {a + b}")
print(f"Subtraction:    {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division:       {a} / {b} = {a / b}")

# ============================================
# 4. Floor Division and Modulo
# ============================================
print("\\n--- 4. Floor Division & Modulo ---")

print(f"Floor Division: {a} // {b} = {a // b}")
print(f"Modulo:         {a} % {b} = {a % b}")

# Verify: a = (a // b) * b + (a % b)
print(f"\\nVerification: {a} = ({a // b}) * {b} + {a % b}")
print(f"             {a} = {(a // b) * b + (a % b)}")

# Practical use of modulo
print("\\n--- Modulo Use Cases ---")
number = 17

if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")

# ============================================
# 5. Exponentiation
# ============================================
print("\\n--- 5. Exponentiation ---")

print(f"2 ** 3 = {2 ** 3}")    # 8
print(f"10 ** 2 = {10 ** 2}")  # 100
print(f"2 ** 10 = {2 ** 10}")  # 1024

# Roots using fractional exponent
print(f"Square root of 16: 16 ** 0.5 = {16 ** 0.5}")
print(f"Cube root of 27: 27 ** (1/3) = {27 ** (1/3)}")

# ============================================
# 6. Operator Precedence
# ============================================
print("\\n--- 6. Operator Precedence ---")

# Without parentheses
result1 = 2 + 3 * 4
print(f"2 + 3 * 4 = {result1} (multiplication first)")

# With parentheses
result2 = (2 + 3) * 4
print(f"(2 + 3) * 4 = {result2} (parentheses first)")

# Complex expression
result3 = 2 ** 3 + 4 * 5 - 6 / 2
print(f"2 ** 3 + 4 * 5 - 6 / 2 = {result3}")
print("  Step 1: 2 ** 3 = 8")
print("  Step 2: 4 * 5 = 20")
print("  Step 3: 6 / 2 = 3")
print("  Step 4: 8 + 20 - 3 = 25")

print("\\n" + "=" * 50)
print("Arithmetic examples complete!")
print("=" * 50)
`},{name:"example_2.py",content:`"""
Example 2: Built-in Numeric Functions
Python Programming Learning 2026 - Post 07

This example covers Python's built-in functions for numbers.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Built-in Numeric Functions")
print("=" * 50)

# ============================================
# 1. abs() - Absolute Value
# ============================================
print("\\n--- 1. abs() ---")

print(f"abs(-5) = {abs(-5)}")
print(f"abs(5) = {abs(5)}")
print(f"abs(-3.14) = {abs(-3.14)}")
print(f"abs(0) = {abs(0)}")

# ============================================
# 2. round() - Rounding
# ============================================
print("\\n--- 2. round() ---")

print(f"round(3.7) = {round(3.7)}")
print(f"round(3.2) = {round(3.2)}")
print(f"round(3.5) = {round(3.5)}")  # Banker's rounding
print(f"round(4.5) = {round(4.5)}")  # Rounds to even

# With decimal places
print(f"round(3.14159, 2) = {round(3.14159, 2)}")
print(f"round(3.14159, 4) = {round(3.14159, 4)}")

# Rounding to tens, hundreds
print(f"round(1234, -1) = {round(1234, -1)}")  # 1230
print(f"round(1234, -2) = {round(1234, -2)}")  # 1200

# ============================================
# 3. pow() - Power
# ============================================
print("\\n--- 3. pow() ---")

print(f"pow(2, 3) = {pow(2, 3)}")      # 8
print(f"pow(10, 2) = {pow(10, 2)}")    # 100

# Three-argument form: pow(base, exp, mod)
print(f"pow(2, 10, 100) = {pow(2, 10, 100)}")  # 2^10 % 100 = 1024 % 100 = 24

# ============================================
# 4. divmod() - Division and Modulo
# ============================================
print("\\n--- 4. divmod() ---")

quotient, remainder = divmod(17, 5)
print(f"divmod(17, 5) = ({quotient}, {remainder})")
print(f"  17 = 5 × {quotient} + {remainder}")

# Time conversion example
total_minutes = 137
hours, minutes = divmod(total_minutes, 60)
print(f"\\n{total_minutes} minutes = {hours} hours {minutes} minutes")

# ============================================
# 5. min() and max()
# ============================================
print("\\n--- 5. min() and max() ---")

numbers = [45, 12, 78, 3, 56]

print(f"Numbers: {numbers}")
print(f"min: {min(numbers)}")
print(f"max: {max(numbers)}")

# With multiple arguments
print(f"min(10, 5, 20) = {min(10, 5, 20)}")
print(f"max(10, 5, 20) = {max(10, 5, 20)}")

# With key function
words = ["apple", "pie", "delicious"]
print(f"\\nWords: {words}")
print(f"Shortest word: {min(words, key=len)}")
print(f"Longest word: {max(words, key=len)}")

# ============================================
# 6. sum()
# ============================================
print("\\n--- 6. sum() ---")

numbers = [1, 2, 3, 4, 5]
print(f"Numbers: {numbers}")
print(f"sum: {sum(numbers)}")

# With start value
print(f"sum with start=10: {sum(numbers, 10)}")

# Calculate average
average = sum(numbers) / len(numbers)
print(f"Average: {average}")

# ============================================
# 7. Conversion Functions
# ============================================
print("\\n--- 7. Type Conversion ---")

# int() - convert to integer
print(f'int("42") = {int("42")}')
print(f"int(3.9) = {int(3.9)}")  # Truncates (not rounds)
print(f"int(-3.9) = {int(-3.9)}")

# float() - convert to float
print(f'float("3.14") = {float("3.14")}')
print(f"float(42) = {float(42)}")

# Binary, Octal, Hexadecimal
print(f"\\nbinary 1010: int('1010', 2) = {int('1010', 2)}")
print(f"octal 17: int('17', 8) = {int('17', 8)}")
print(f"hex FF: int('FF', 16) = {int('FF', 16)}")

# Reverse: number to other bases
print(f"\\n42 in binary: {bin(42)}")
print(f"42 in octal: {oct(42)}")
print(f"42 in hex: {hex(42)}")

print("\\n" + "=" * 50)
print("Built-in functions complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: The math Module and Practical Calculations
Python Programming Learning 2026 - Post 07

This example covers the math module and real-world number usage.

Author: Sitharaj Seenivasan
"""

import math

print("=" * 50)
print("The math Module and Practical Calculations")
print("=" * 50)

# ============================================
# 1. Math Constants
# ============================================
print("\\n--- 1. Math Constants ---")

print(f"Pi (π): {math.pi}")
print(f"Euler's number (e): {math.e}")
print(f"Tau (τ = 2π): {math.tau}")
print(f"Infinity: {math.inf}")
print(f"Not a Number: {math.nan}")

# ============================================
# 2. Root Functions
# ============================================
print("\\n--- 2. Roots ---")

print(f"sqrt(16) = {math.sqrt(16)}")
print(f"sqrt(2) = {math.sqrt(2):.6f}")

# Other roots using power
print(f"Cube root of 27: {27 ** (1/3):.6f}")
print(f"Fourth root of 16: {16 ** (1/4):.6f}")

# ============================================
# 3. Rounding Functions
# ============================================
print("\\n--- 3. Rounding ---")

values = [1.4, 1.5, 1.6, -1.4, -1.5, -1.6]

print("Value   | floor | ceil  | trunc | round")
print("-" * 45)
for v in values:
    print(f"{v:7.1f} | {math.floor(v):5} | {math.ceil(v):5} | {math.trunc(v):5} | {round(v):5}")

# ============================================
# 4. Logarithms
# ============================================
print("\\n--- 4. Logarithms ---")

print(f"log(e) = {math.log(math.e)}")       # Natural log
print(f"log10(100) = {math.log10(100)}")     # Base 10
print(f"log2(8) = {math.log2(8)}")           # Base 2
print(f"log(100, 10) = {math.log(100, 10)}") # Custom base

# ============================================
# 5. Trigonometry
# ============================================
print("\\n--- 5. Trigonometry ---")

angle_deg = 45
angle_rad = math.radians(angle_deg)

print(f"Angle: {angle_deg}° = {angle_rad:.4f} radians")
print(f"sin({angle_deg}°) = {math.sin(angle_rad):.6f}")
print(f"cos({angle_deg}°) = {math.cos(angle_rad):.6f}")
print(f"tan({angle_deg}°) = {math.tan(angle_rad):.6f}")

# ============================================
# 6. Factorial and Combinations
# ============================================
print("\\n--- 6. Factorial & Combinations ---")

n = 5
print(f"{n}! = {math.factorial(n)}")

# Combinations: C(n, k) = n! / (k! * (n-k)!)
print(f"C(10, 3) = {math.comb(10, 3)}")  # 120

# Permutations: P(n, k) = n! / (n-k)!
print(f"P(10, 3) = {math.perm(10, 3)}")  # 720

# ============================================
# 7. Practical: Circle Calculations
# ============================================
print("\\n--- 7. Circle Calculations ---")

radius = 5

# Area = π × r²
area = math.pi * radius ** 2
print(f"Circle with radius {radius}:")
print(f"  Area = π × r² = {area:.2f}")

# Circumference = 2 × π × r
circumference = 2 * math.pi * radius
print(f"  Circumference = 2πr = {circumference:.2f}")

# ============================================
# 8. Practical: Distance Calculation
# ============================================
print("\\n--- 8. Distance Between Points ---")

# Two points
x1, y1 = 1, 2
x2, y2 = 4, 6

# Distance formula: sqrt((x2-x1)² + (y2-y1)²)
distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
print(f"Point A: ({x1}, {y1})")
print(f"Point B: ({x2}, {y2})")
print(f"Distance: {distance:.2f}")

# Or use math.dist (Python 3.8+)
distance2 = math.dist([x1, y1], [x2, y2])
print(f"Using math.dist: {distance2:.2f}")

# ============================================
# 9. Financial Calculation: Compound Interest
# ============================================
print("\\n--- 9. Compound Interest ---")

principal = 1000        # Initial investment
rate = 0.05             # 5% annual interest
years = 10              # Investment period
compounds = 12          # Monthly compounding

# Formula: A = P(1 + r/n)^(nt)
amount = principal * (1 + rate / compounds) ** (compounds * years)
interest_earned = amount - principal

print(f"Initial: \${principal:,.2f}")
print(f"Rate: {rate * 100}% annually")
print(f"Period: {years} years")
print(f"Compounding: {compounds} times/year")
print(f"Final amount: \${amount:,.2f}")
print(f"Interest earned: \${interest_earned:,.2f}")

# ============================================
# 10. Floating-Point Precision
# ============================================
print("\\n--- 10. Floating-Point Precision ---")

print(f"0.1 + 0.2 = {0.1 + 0.2}")  # Imprecise!
print(f"Expected: 0.3")

# Solutions:
print(f"\\nUsing round(): {round(0.1 + 0.2, 1)}")

from decimal import Decimal
result = Decimal('0.1') + Decimal('0.2')
print(f"Using Decimal: {result}")

# math.isclose for comparisons
print(f"\\nmath.isclose(0.1 + 0.2, 0.3): {math.isclose(0.1 + 0.2, 0.3)}")

print("\\n" + "=" * 50)
print("Math module examples complete!")
print("=" * 50)
`}]},8:{slug:"08-strings-in-python",readme:`# Post 08: Strings in Python

[← Previous: Numbers in Python](../07-numbers-in-python/) | [Back to Index](../../README.md) | [Next: String Methods & f-Strings →](../09-string-methods-and-f-strings/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 08 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 18 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** learning to work with text data
- **Anyone** processing user input, files, or web data
- **Developers** needing solid string fundamentals

Prerequisites: Posts 01-07 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Create strings using various methods
2. Access characters with indexing and slicing
3. Understand string immutability
4. Use common string operations
5. Work with escape characters

---

## 💡 Why This Matters in 2026

Strings are everywhere:

- **User interfaces**: Forms, messages, prompts
- **Data processing**: Files, APIs, databases
- **Web development**: HTML, URLs, JSON
- **Output formatting**: Reports, logs, displays

Almost every program you write will manipulate text.

---

## ✏️ Creating Strings

### Single and Double Quotes

\`\`\`python
# Both work the same
name = 'Alice'
greeting = "Hello, World!"

# Use one when you need the other inside
message = "It's a beautiful day"
quote = 'She said "Hello"'
\`\`\`

### Triple Quotes for Multi-line

\`\`\`python
# Multi-line strings
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you!"""

# Preserves line breaks
print(poem)
\`\`\`

### Raw Strings (Ignore Escapes)

\`\`\`python
# Normal string - \\n is newline
path = "C:\\new\\folder"   # \\n and \\f are escape sequences!

# Raw string - treats backslash literally
path = r"C:\\new\\folder"  # Properly preserved
print(path)  # C:\\new\\folder
\`\`\`

---

## 🔤 String Indexing

Strings are sequences of characters. Each character has an index.

\`\`\`
   H   e   l   l   o
   0   1   2   3   4    ← Positive index
  -5  -4  -3  -2  -1    ← Negative index
\`\`\`

### Accessing Characters

\`\`\`python
greeting = "Hello"

# Positive indexing (from start)
print(greeting[0])   # 'H' (first character)
print(greeting[1])   # 'e'
print(greeting[4])   # 'o' (last character)

# Negative indexing (from end)
print(greeting[-1])  # 'o' (last character)
print(greeting[-2])  # 'l' (second to last)
print(greeting[-5])  # 'H' (first, same as [0])
\`\`\`

### Index Errors

\`\`\`python
greeting = "Hello"
# print(greeting[10])  # IndexError: string index out of range
\`\`\`

---

## ✂️ String Slicing

Extract a portion of a string using \`[start:stop:step]\`.

### Basic Slicing

\`\`\`python
text = "Python Programming"
#       0123456789...

print(text[0:6])     # 'Python' (index 0 to 5)
print(text[7:18])    # 'Programming'
print(text[:6])      # 'Python' (from start)
print(text[7:])      # 'Programming' (to end)
print(text[:])       # 'Python Programming' (full copy)
\`\`\`

### Slicing with Step

\`\`\`python
text = "Python Programming"

print(text[::2])     # 'Pto rgamn' (every 2nd character)
print(text[::3])     # 'Ph oai' (every 3rd character)
print(text[::-1])    # 'gnimmargorP nohtyP' (reversed!)
\`\`\`

### Practical Examples

\`\`\`python
email = "user@example.com"

# Get username
username = email[:email.index('@')]
print(username)  # 'user'

# Get domain
domain = email[email.index('@')+1:]
print(domain)  # 'example.com'
\`\`\`

---

## 🔒 String Immutability

Strings **cannot be changed** after creation.

\`\`\`python
name = "Python"
# name[0] = 'J'  # TypeError: 'str' object doesn't support item assignment

# Instead, create a new string
name = "J" + name[1:]
print(name)  # 'Jython'
\`\`\`

---

## 🔗 String Operations

### Concatenation (+)

\`\`\`python
first = "Hello"
second = "World"

combined = first + " " + second
print(combined)  # 'Hello World'
\`\`\`

### Repetition (*)

\`\`\`python
line = "-" * 40
print(line)  # '----------------------------------------'

echo = "Hello! " * 3
print(echo)  # 'Hello! Hello! Hello! '
\`\`\`

### Length (len)

\`\`\`python
message = "Hello, Python!"
print(len(message))  # 14
\`\`\`

### Membership (in)

\`\`\`python
text = "Python Programming"

print("Python" in text)     # True
print("python" in text)     # False (case-sensitive)
print("Java" in text)       # False
print("Java" not in text)   # True
\`\`\`

---

## 🔡 Escape Characters

Special characters that start with backslash \`\\\`:

| Escape | Meaning | Example |
|--------|---------|---------|
| \`\\n\` | Newline | \`"Line1\\nLine2"\` |
| \`\\t\` | Tab | \`"Col1\\tCol2"\` |
| \`\\\\\` | Backslash | \`"C:\\\\path"\` |
| \`\\'\` | Single quote | \`'It\\'s fine'\` |
| \`\\"\` | Double quote | \`"She said \\"Hi\\""\` |
| \`\\r\` | Carriage return | Used in some files |

\`\`\`python
# Newlines
print("Hello\\nWorld")
# Hello
# World

# Tabs (for alignment)
print("Name\\tAge\\tCity")
print("Alice\\t25\\tSeattle")
# Name    Age     City
# Alice   25      Seattle

# Quotes within quotes
print("She said \\"Python is awesome!\\"")
# She said "Python is awesome!"
\`\`\`

---

## 📊 String Comparisons

Strings are compared lexicographically (dictionary order):

\`\`\`python
print("apple" < "banana")   # True (a comes before b)
print("apple" < "Apple")    # False (lowercase > uppercase in ASCII)
print("abc" == "abc")       # True
print("abc" != "ABC")       # True

# Comparison is character by character
print("apple" < "application")  # True (at 'l' vs 'i')
\`\`\`

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Modifying Strings Directly

\`\`\`python
# ❌ Won't work
s = "hello"
s[0] = "H"  # TypeError!

# ✅ Create new string
s = "H" + s[1:]
\`\`\`

### Mistake 2: Off-by-One in Slicing

\`\`\`python
# Remember: end index is EXCLUSIVE
text = "Hello"
print(text[0:3])  # 'Hel' (not 'Hell')
print(text[0:4])  # 'Hell'
\`\`\`

### Mistake 3: Forgetting Case Sensitivity

\`\`\`python
# ❌ Won't find it
if "Python" in "python is fun":
    print("Found!")  # Won't print

# ✅ Convert to same case
if "Python".lower() in "python is fun":
    print("Found!")  # Will print
\`\`\`

---

## ✅ Best Practices

1. **Use f-strings** for formatting (covered in Post 09)
2. **Use raw strings** for file paths: \`r"C:\\Users\\name"\`
3. **Check string length** before indexing
4. **Be consistent** with quote style
5. **Use triple quotes** for multi-line strings or docstrings

---

## 💼 Real-World Examples

### Basic User Input Processing

\`\`\`python
user_input = "  John Smith  "
clean_name = user_input.strip()  # Remove whitespace
print(f"Hello, {clean_name}!")
\`\`\`

### Extracting File Extension

\`\`\`python
filename = "document.pdf"
extension = filename[filename.rfind('.')+1:]
print(f"Extension: {extension}")  # pdf
\`\`\`

### Creating Formatted Output

\`\`\`python
title = "Python Programming"
line = "=" * len(title)
print(line)
print(title)
print(line)
\`\`\`

---

## 📝 Mini Exercises

1. Create a string and print its first, last, and middle characters.
2. Reverse a string using slicing.
3. Check if a word is in a sentence (case-insensitive).
4. Extract the year from the string "Date: 2026-01-11".

---

## 🔮 What's Next?

In **Post 09: String Methods & f-Strings**, you'll learn:

- Powerful string methods (.upper(), .split(), etc.)
- f-String formatting
- Advanced string manipulation

You now understand string basics. Let's explore powerful string methods!

---

## 📖 Summary

| Concept | Example |
|---------|---------|
| Create string | \`"hello"\` or \`'hello'\` |
| Index | \`s[0]\` first, \`s[-1]\` last |
| Slice | \`s[0:5]\` or \`s[::-1]\` reverse |
| Concatenate | \`"hello" + "world"\` |
| Repeat | \`"-" * 40\` |
| Length | \`len(s)\` |
| Contains | \`"py" in "python"\` |

---

[← Previous: Numbers in Python](../07-numbers-in-python/) | [Back to Index](../../README.md) | [Next: String Methods & f-Strings →](../09-string-methods-and-f-strings/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Creating and Accessing Strings
Python Programming Learning 2026 - Post 08

This example covers string creation, indexing, and slicing.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Creating and Accessing Strings")
print("=" * 50)

# ============================================
# 1. Creating Strings
# ============================================
print("\\n--- 1. Creating Strings ---")

# Single quotes
single = 'Hello, Python!'
print(f"Single quotes: {single}")

# Double quotes
double = "Hello, Python!"
print(f"Double quotes: {double}")

# Quotes inside strings
with_apostrophe = "It's a beautiful day"
with_quotes = 'She said "Hello"'
print(f"Apostrophe: {with_apostrophe}")
print(f"Quotes: {with_quotes}")

# Triple quotes (multi-line)
multi_line = """This is a
multi-line
string"""
print(f"Multi-line:\\n{multi_line}")

# Raw strings (for paths)
normal_path = "C:\\\\Users\\\\name\\\\folder"
raw_path = r"C:\\Users\\name\\folder"
print(f"\\nNormal: {normal_path}")
print(f"Raw: {raw_path}")

# ============================================
# 2. String Indexing
# ============================================
print("\\n--- 2. String Indexing ---")

text = "Python"
print(f"String: '{text}'")
print(f"Length: {len(text)}")

# Show index positions
print("\\nPositive indexes:")
for i, char in enumerate(text):
    print(f"  text[{i}] = '{char}'")

print("\\nNegative indexes:")
for i in range(-len(text), 0):
    print(f"  text[{i}] = '{text[i]}'")

# Accessing characters
print(f"\\nFirst character: text[0] = '{text[0]}'")
print(f"Last character: text[-1] = '{text[-1]}'")
print(f"Third character: text[2] = '{text[2]}'")

# ============================================
# 3. String Slicing
# ============================================
print("\\n--- 3. String Slicing ---")

text = "Python Programming"
print(f"String: '{text}'")

# Basic slicing [start:stop]
print(f"\\ntext[0:6]  = '{text[0:6]}'")   # Python
print(f"text[7:18] = '{text[7:18]}'")    # Programming

# Omitting start or stop
print(f"\\ntext[:6]   = '{text[:6]}'")    # From start
print(f"text[7:]   = '{text[7:]}'")      # To end
print(f"text[:]    = '{text[:]}'")       # Full copy

# Slicing with step
print(f"\\ntext[::2]  = '{text[::2]}'")   # Every 2nd
print(f"text[::-1] = '{text[::-1]}'")    # Reversed

# ============================================
# 4. Practical Slicing Examples
# ============================================
print("\\n--- 4. Practical Examples ---")

# Get file extension
filename = "document.pdf"
extension = filename[-3:]
print(f"File: {filename}")
print(f"Extension: {extension}")

# Get first name from full name
full_name = "John Smith"
first_name = full_name[:full_name.find(' ')]
print(f"\\nFull name: {full_name}")
print(f"First name: {first_name}")

# Reverse a word
word = "Python"
reversed_word = word[::-1]
print(f"\\nOriginal: {word}")
print(f"Reversed: {reversed_word}")

# Check palindrome
test_word = "radar"
is_palindrome = test_word == test_word[::-1]
print(f"\\n'{test_word}' is palindrome: {is_palindrome}")

print("\\n" + "=" * 50)
print("String access examples complete!")
print("=" * 50)
`},{name:"example_2.py",content:`"""
Example 2: String Operations and Immutability
Python Programming Learning 2026 - Post 08

This example covers string operations and demonstrates immutability.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("String Operations and Immutability")
print("=" * 50)

# ============================================
# 1. Concatenation (+)
# ============================================
print("\\n--- 1. Concatenation ---")

first_name = "John"
last_name = "Smith"

# Using +
full_name = first_name + " " + last_name
print(f"Full name: {full_name}")

# Building strings
greeting = "Hello"
greeting = greeting + ", "
greeting = greeting + "Python"
greeting = greeting + "!"
print(f"Greeting: {greeting}")

# ============================================
# 2. Repetition (*)
# ============================================
print("\\n--- 2. Repetition ---")

line = "-" * 40
print(line)

echo = "Hello! " * 3
print(echo)

box = "* " * 10
print(box)

# ============================================
# 3. Length (len)
# ============================================
print("\\n--- 3. Length ---")

messages = ["Hello", "Hello, World!", "Python Programming"]

for msg in messages:
    print(f"'{msg}' has {len(msg)} characters")

# Empty string
empty = ""
print(f"Empty string length: {len(empty)}")

# ============================================
# 4. Membership (in)
# ============================================
print("\\n--- 4. Membership Testing ---")

sentence = "Python is a great programming language"

words_to_check = ["Python", "python", "great", "Java", "is"]

for word in words_to_check:
    if word in sentence:
        print(f"  '{word}' IS in sentence")
    else:
        print(f"  '{word}' NOT in sentence")

# Using 'not in'
print(f"\\n'Java' not in sentence: {'Java' not in sentence}")

# ============================================
# 5. String Immutability
# ============================================
print("\\n--- 5. Immutability ---")

original = "Hello"
print(f"Original: '{original}' (id: {id(original)})")

# Concatenation creates NEW string
modified = original + " World"
print(f"Modified: '{modified}' (id: {id(modified)})")
print(f"Original unchanged: '{original}'")

# This would fail:
# original[0] = 'J'  # TypeError!

# Instead, create new string
fixed = "J" + original[1:]
print(f"Fixed: '{fixed}'")

# ============================================
# 6. String Comparisons
# ============================================
print("\\n--- 6. Comparisons ---")

# Equality
print(f"'hello' == 'hello': {'hello' == 'hello'}")
print(f"'hello' == 'Hello': {'hello' == 'Hello'}")

# Ordering (lexicographic)
print(f"\\n'apple' < 'banana': {'apple' < 'banana'}")
print(f"'apple' < 'Apple': {'apple' < 'Apple'}")  # lowercase > uppercase

# Compare alphabetically
words = ["banana", "Apple", "cherry", "apple"]
sorted_words = sorted(words)
print(f"\\nOriginal: {words}")
print(f"Sorted: {sorted_words}")

# Case-insensitive sort
sorted_case_insensitive = sorted(words, key=str.lower)
print(f"Sorted (case-insensitive): {sorted_case_insensitive}")

# ============================================
# 7. Combining Operations
# ============================================
print("\\n--- 7. Combined Example ---")

# Creating a simple text box
title = "Python"
width = len(title) + 4

border = "+" + "-" * (width - 2) + "+"
content = "| " + title + " |"

print(border)
print(content)
print(border)

print("\\n" + "=" * 50)
print("String operations complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: Escape Characters and Special Strings
Python Programming Learning 2026 - Post 08

This example covers escape characters and special string types.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Escape Characters and Special Strings")
print("=" * 50)

# ============================================
# 1. Common Escape Characters
# ============================================
print("\\n--- 1. Common Escape Characters ---")

# Newline \\n
print("Hello\\nWorld")
print()

# Tab \\t
print("Name\\tAge\\tCity")
print("Alice\\t25\\tSeattle")
print("Bob\\t30\\tPortland")
print()

# Backslash \\\\
print("File path: C:\\\\Users\\\\name\\\\Documents")
print()

# Quotes
print("She said \\"Hello, World!\\"")
print('It\\'s a sunny day')

# ============================================
# 2. All Escape Sequences
# ============================================
print("\\n--- 2. Escape Sequence Reference ---")

escapes = [
    ("\\\\n", "Newline", "Line1\\nLine2"),
    ("\\\\t", "Tab", "Col1\\tCol2"),
    ("\\\\\\\\", "Backslash", "path\\\\to\\\\file"),
    ("\\\\'", "Single Quote", "It's"),
    ("\\\\\\"", "Double Quote", "Say \\"Hi\\""),
    ("\\\\r", "Carriage Return", "ABC\\rXY"),  # XY overwrites AB
]

for escape, name, example in escapes:
    print(f"  {escape:6} {name:20}")

# ============================================
# 3. Raw Strings (r"...")
# ============================================
print("\\n--- 3. Raw Strings ---")

# Normal string - escapes are processed
normal = "C:\\new\\folder\\test"
print(f"Normal: {repr(normal)}")

# Raw string - escapes are literal
raw = r"C:\\new\\folder\\test"
print(f"Raw: {repr(raw)}")

# Useful for:
# - File paths
# - Regular expressions
# - URLs

regex_pattern = r"\\d{3}-\\d{3}-\\d{4}"  # Phone pattern
print(f"Regex pattern: {regex_pattern}")

# ============================================
# 4. Multi-line Strings
# ============================================
print("\\n--- 4. Multi-line Strings ---")

# Using triple quotes
poem = """
    Roses are red,
    Violets are blue,
    Python is awesome,
    And so are you!
"""
print(poem)

# Preserves all formatting
sql_query = """
SELECT name, age, city
FROM users
WHERE age > 18
ORDER BY name;
"""
print("SQL Query:", sql_query)

# ============================================
# 5. String Encoding
# ============================================
print("\\n--- 5. Unicode and Special Characters ---")

# Unicode characters
heart = "\\u2764"
star = "\\u2605"
check = "\\u2714"
cross = "\\u2718"

print(f"Heart: {heart}")
print(f"Star: {star}")
print(f"Check: {check}")
print(f"Cross: {cross}")

# Emoji (using Unicode)
python = "\\U0001F40D"
rocket = "\\U0001F680"
fire = "\\U0001F525"

print(f"\\nEmoji: {python} {rocket} {fire}")

# International text
languages = [
    ("English", "Hello"),
    ("Spanish", "Hola"),
    ("Japanese", "こんにちは"),
    ("Korean", "안녕하세요"),
    ("Arabic", "مرحبا"),
    ("Russian", "Привет"),
]

print("\\n--- Greetings ---")
for lang, greeting in languages:
    print(f"  {lang}: {greeting}")

# ============================================
# 6. Practical Formatting Example
# ============================================
print("\\n--- 6. Practical Example ---")

def print_receipt():
    """Print a formatted receipt."""
    print("\\n" + "=" * 40)
    print("\\t\\tPYTHON STORE")
    print("=" * 40)
    print("Item\\t\\t\\tPrice")
    print("-" * 40)
    print("Widget\\t\\t\\t$10.00")
    print("Gadget\\t\\t\\t$15.50")
    print("Gizmo\\t\\t\\t$22.99")
    print("-" * 40)
    print("Total:\\t\\t\\t$48.49")
    print("=" * 40)
    print("\\n\\tThank you for shopping!")
    print("\\t\\"Come back soon!\\"\\n")

print_receipt()

print("=" * 50)
print("Escape characters complete!")
print("=" * 50)
`}]},9:{slug:"09-string-methods-and-f-strings",readme:`# Post 09: String Methods & f-Strings

[← Previous: Strings in Python](../08-strings-in-python/) | [Back to Index](../../README.md) | [Next: Type Conversion & Type Checking →](../10-type-conversion-and-type-checking/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 09 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 20 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** wanting to master string manipulation
- **Anyone** working with text processing
- **Developers** needing efficient string formatting

Prerequisites: Posts 01-08 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Use essential string methods confidently
2. Master f-String formatting
3. Format numbers, dates, and alignment
4. Chain methods for complex operations
5. Choose the right method for each task

---

## 💡 Why This Matters in 2026

String methods are used constantly for:

- **Data cleaning**: Removing whitespace, normalizing case
- **Validation**: Checking formats, content types
- **Transformation**: Splitting, joining, replacing
- **Display**: Formatting output beautifully

---

## 🔧 Essential String Methods

### Case Methods

\`\`\`python
text = "Hello, World!"

print(text.upper())       # HELLO, WORLD!
print(text.lower())       # hello, world!
print(text.capitalize())  # Hello, world!
print(text.title())       # Hello, World!
print(text.swapcase())    # hELLO, wORLD!
\`\`\`

### Whitespace Methods

\`\`\`python
text = "   Hello, World!   "

print(text.strip())       # "Hello, World!" (both sides)
print(text.lstrip())      # "Hello, World!   " (left only)
print(text.rstrip())      # "   Hello, World!" (right only)

# Strip specific characters
url = "///path/to/file///"
print(url.strip('/'))     # "path/to/file"
\`\`\`

### Search Methods

\`\`\`python
text = "Python Programming"

# Find index
print(text.find('Pro'))      # 7 (index of first match)
print(text.find('Java'))     # -1 (not found)
print(text.index('Pro'))     # 7 (same, but raises error if not found)

# Count occurrences
print(text.count('P'))       # 2
print(text.count('o'))       # 2

# Check start/end
print(text.startswith('Py')) # True
print(text.endswith('ing'))  # True
\`\`\`

### Check Methods (Return Boolean)

\`\`\`python
# Check content type
print("Hello".isalpha())     # True (only letters)
print("12345".isdigit())     # True (only digits)
print("Hello123".isalnum())  # True (letters or digits)
print("   ".isspace())       # True (only whitespace)

# Check case
print("HELLO".isupper())     # True
print("hello".islower())     # True
print("Hello World".istitle()) # True
\`\`\`

### Replace and Translate

\`\`\`python
text = "Hello, World!"

# Replace
print(text.replace("World", "Python"))  # Hello, Python!
print(text.replace("l", "L"))           # HeLLo, WorLd!
print(text.replace("l", "L", 1))        # HeLlo, World! (only first)
\`\`\`

### Split and Join

\`\`\`python
# Split - break string into list
sentence = "Python is awesome"
words = sentence.split()
print(words)                 # ['Python', 'is', 'awesome']

csv = "apple,banana,cherry"
fruits = csv.split(',')
print(fruits)                # ['apple', 'banana', 'cherry']

# Join - combine list into string
words = ['Python', 'is', 'awesome']
sentence = ' '.join(words)
print(sentence)              # "Python is awesome"

path = '/'.join(['home', 'user', 'documents'])
print(path)                  # "home/user/documents"
\`\`\`

### Alignment Methods

\`\`\`python
text = "Python"

print(text.center(20))       # "       Python       "
print(text.center(20, '-'))  # "-------Python-------"
print(text.ljust(20, '.'))   # "Python.............."
print(text.rjust(20, '.'))   # "..............Python"
print(text.zfill(10))        # "0000Python" (zero-fill)

# Numbers
num = "42"
print(num.zfill(5))          # "00042"
\`\`\`

---

## 📝 f-Strings: Modern String Formatting

f-Strings (formatted string literals) are the modern, preferred way to format strings in Python.

### Basic Syntax

\`\`\`python
name = "Alice"
age = 30

# Old way (avoid)
message = "Name: " + name + ", Age: " + str(age)

# f-String way ✅
message = f"Name: {name}, Age: {age}"
print(message)  # Name: Alice, Age: 30
\`\`\`

### Expressions Inside f-Strings

\`\`\`python
x = 10
y = 5

print(f"{x} + {y} = {x + y}")      # 10 + 5 = 15
print(f"{x} * {y} = {x * y}")      # 10 * 5 = 50

# Call functions
name = "python"
print(f"Upper: {name.upper()}")    # Upper: PYTHON
\`\`\`

### Number Formatting

\`\`\`python
# Decimal places
pi = 3.14159265359
print(f"Pi: {pi:.2f}")             # Pi: 3.14
print(f"Pi: {pi:.4f}")             # Pi: 3.1416

# Thousands separator
big_num = 1234567890
print(f"Number: {big_num:,}")      # Number: 1,234,567,890
print(f"Number: {big_num:_}")      # Number: 1_234_567_890

# Percentage
rate = 0.856
print(f"Rate: {rate:.1%}")         # Rate: 85.6%

# Currency-like
price = 99.5
print(f"Price: \${price:,.2f}")     # Price: $99.50
\`\`\`

### Width and Alignment

\`\`\`python
name = "Alice"
score = 95

# Width specification
print(f"|{name:10}|")              # |Alice     | (left, width 10)
print(f"|{name:>10}|")             # |     Alice| (right)
print(f"|{name:^10}|")             # |  Alice   | (center)
print(f"|{name:=^10}|")            # |==Alice===| (center, fill)

# Numbers
print(f"|{score:5}|")              # |   95| (right by default)
print(f"|{score:<5}|")             # |95   | (left)
print(f"|{score:05}|")             # |00095| (zero-padded)
\`\`\`

### Formatting Types

\`\`\`python
num = 255

print(f"Decimal: {num:d}")         # Decimal: 255
print(f"Binary: {num:b}")          # Binary: 11111111
print(f"Octal: {num:o}")           # Octal: 377
print(f"Hex: {num:x}")             # Hex: ff
print(f"Hex: {num:X}")             # Hex: FF (uppercase)
print(f"Scientific: {num:e}")      # Scientific: 2.550000e+02
\`\`\`

### Debug Mode (Python 3.8+)

\`\`\`python
x = 10
y = 20

# Self-documenting expressions
print(f"{x=}")                     # x=10
print(f"{y=}")                     # y=20
print(f"{x + y=}")                 # x + y=30
\`\`\`

---

## 🔗 Method Chaining

Combine multiple string operations:

\`\`\`python
text = "  Python Programming  "

# Chain methods
result = text.strip().lower().replace(' ', '-')
print(result)  # "python-programming"

# Clean user input
user_input = "   JOHN.DOE@EMAIL.COM   "
email = user_input.strip().lower()
print(email)   # "john.doe@email.com"
\`\`\`

---

## ✅ Best Practices

1. **Use f-strings** for most formatting (Python 3.6+)
2. **Chain methods** for cleaner code
3. **Use \`.strip()\`** for user input
4. **Validate with \`is*\` methods** before processing
5. **Use \`.join()\`** instead of \`+\` in loops

\`\`\`python
# ❌ Slow - creates many intermediate strings
result = ""
for word in words:
    result = result + word + " "

# ✅ Fast - single operation
result = " ".join(words)
\`\`\`

---

## 💼 Real-World Examples

### Data Cleaning

\`\`\`python
raw_data = "  John   Smith  "
clean_data = " ".join(raw_data.split())
print(clean_data)  # "John Smith"
\`\`\`

### Format Table

\`\`\`python
data = [
    ("Alice", 28, 85.5),
    ("Bob", 34, 92.3),
    ("Charlie", 22, 78.9)
]

print(f"{'Name':<10} {'Age':>5} {'Score':>8}")
print("-" * 25)
for name, age, score in data:
    print(f"{name:<10} {age:>5} {score:>8.1f}")
\`\`\`

### Slug Generator

\`\`\`python
title = "Hello World! This is a Test"
slug = title.lower().replace(" ", "-").replace("!", "")
print(slug)  # "hello-world-this-is-a-test"
\`\`\`

---

## 📝 Mini Exercises

1. Convert "hELLO wORLD" to proper title case.
2. Split "apple;banana;cherry" by semicolon and join with commas.
3. Format 1234567.89 with commas and 2 decimal places.
4. Create a centered title box with asterisks.

---

## 🔮 What's Next?

In **Post 10: Type Conversion & Type Checking**, you'll learn:

- Converting between data types
- Handling conversion errors
- Validation techniques
- Type checking best practices

You've mastered string manipulation! Let's learn type conversion.

---

## 📖 Summary

| Category | Methods |
|----------|---------|
| Case | \`.upper()\`, \`.lower()\`, \`.title()\` |
| Whitespace | \`.strip()\`, \`.lstrip()\`, \`.rstrip()\` |
| Search | \`.find()\`, \`.count()\`, \`.startswith()\` |
| Check | \`.isdigit()\`, \`.isalpha()\`, \`.isspace()\` |
| Transform | \`.replace()\`, \`.split()\`, \`.join()\` |
| Format | f-strings: \`f"{var:.2f}"\` |

---

[← Previous: Strings in Python](../08-strings-in-python/) | [Back to Index](../../README.md) | [Next: Type Conversion & Type Checking →](../10-type-conversion-and-type-checking/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Essential String Methods
Python Programming Learning 2026 - Post 09

This example covers the most commonly used string methods.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Essential String Methods")
print("=" * 50)

# ============================================
# 1. Case Methods
# ============================================
print("\\n--- 1. Case Methods ---")

text = "Hello, World!"

print(f"Original:   '{text}'")
print(f".upper():   '{text.upper()}'")
print(f".lower():   '{text.lower()}'")
print(f".title():   '{text.title()}'")
print(f".capitalize(): '{text.capitalize()}'")
print(f".swapcase(): '{text.swapcase()}'")

# Practical use
name = "jOHN sMITH"
fixed = name.title()
print(f"\\nFixed name: '{name}' → '{fixed}'")

# ============================================
# 2. Whitespace Methods
# ============================================
print("\\n--- 2. Whitespace Methods ---")

padded = "   Hello, World!   "
print(f"Original: '{padded}'")
print(f".strip():  '{padded.strip()}'")
print(f".lstrip(): '{padded.lstrip()}'")
print(f".rstrip(): '{padded.rstrip()}'")

# Strip specific characters
url = "///path/to/file///"
print(f"\\nURL: '{url}'")
print(f".strip('/'): '{url.strip('/')}'")

# ============================================
# 3. Search Methods
# ============================================
print("\\n--- 3. Search Methods ---")

text = "Python Programming is fun. Python is great!"
print(f"Text: '{text}'")

# Find
print(f"\\n.find('Python'): {text.find('Python')}")  # First occurrence
print(f".find('Java'): {text.find('Java')}")        # Not found = -1
print(f".rfind('Python'): {text.rfind('Python')}")  # Last occurrence

# Count
print(f".count('Python'): {text.count('Python')}")
print(f".count('is'): {text.count('is')}")

# Startswith / Endswith
print(f".startswith('Python'): {text.startswith('Python')}")
print(f".endswith('!'): {text.endswith('!')}")

# ============================================
# 4. Check Methods (is* methods)
# ============================================
print("\\n--- 4. Check Methods ---")

test_strings = [
    ("Hello", "letters only"),
    ("12345", "digits only"),
    ("Hello123", "letters and digits"),
    ("   ", "whitespace only"),
    ("HELLO", "uppercase letters"),
    ("hello", "lowercase letters"),
    ("Hello World", "title case"),
]

for string, description in test_strings:
    print(f"'{string}' ({description}):")
    print(f"  .isalpha(): {string.isalpha()}")
    print(f"  .isdigit(): {string.isdigit()}")
    print(f"  .isalnum(): {string.isalnum()}")
    print()

# ============================================
# 5. Replace
# ============================================
print("\\n--- 5. Replace Method ---")

text = "Hello, World! Hello, Python!"
print(f"Original: '{text}'")

# Replace all
print(f".replace('Hello', 'Hi'): '{text.replace('Hello', 'Hi')}'")

# Replace limited
print(f".replace('Hello', 'Hi', 1): '{text.replace('Hello', 'Hi', 1)}'")

# Common use: remove characters
dirty = "a...b...c...d"
clean = dirty.replace("...", " ")
print(f"\\nClean: '{dirty}' → '{clean}'")

print("\\n" + "=" * 50)
print("String methods complete!")
print("=" * 50)
`},{name:"example_2.py",content:`"""
Example 2: Split, Join, and Alignment Methods
Python Programming Learning 2026 - Post 09

This example covers splitting, joining, and text alignment.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Split, Join, and Alignment")
print("=" * 50)

# ============================================
# 1. Split Method
# ============================================
print("\\n--- 1. Split ---")

# Split by whitespace (default)
sentence = "Python is a great language"
words = sentence.split()
print(f"Original: '{sentence}'")
print(f"Split by whitespace: {words}")

# Split by specific character
data = "apple,banana,cherry,date"
fruits = data.split(',')
print(f"\\nCSV data: '{data}'")
print(f"Split by comma: {fruits}")

# Split with max splits
text = "one-two-three-four-five"
print(f"\\nText: '{text}'")
print(f".split('-'): {text.split('-')}")
print(f".split('-', 2): {text.split('-', 2)}")  # Only 2 splits

# Splitlines
multi = "Line 1\\nLine 2\\nLine 3"
lines = multi.splitlines()
print(f"\\nSplitlines: {lines}")

# ============================================
# 2. Join Method
# ============================================
print("\\n--- 2. Join ---")

words = ['Python', 'is', 'awesome']

# Join with space
sentence = ' '.join(words)
print(f"Words: {words}")
print(f"' '.join(): '{sentence}'")

# Join with different separators
print(f"'-'.join(): '{'-'.join(words)}'")
print(f"'_'.join(): '{'_'.join(words)}'")
print(f"''.join(): '{''.join(words)}'")  # No separator

# Practical: Create path
parts = ['home', 'user', 'documents', 'file.txt']
path = '/'.join(parts)
print(f"\\nPath parts: {parts}")
print(f"Path: '{path}'")

# Practical: Create CSV line
values = ['Alice', '25', 'Seattle']
csv_line = ','.join(values)
print(f"\\nValues: {values}")
print(f"CSV: '{csv_line}'")

# ============================================
# 3. Alignment Methods
# ============================================
print("\\n--- 3. Alignment ---")

text = "Python"
width = 20

print(f"Text: '{text}' (width: {width})")
print(f".center({width}):    '{text.center(width)}'")
print(f".ljust({width}):     '{text.ljust(width)}'")
print(f".rjust({width}):     '{text.rjust(width)}'")

# With fill character
print(f"\\nWith fill characters:")
print(f".center({width}, '-'): '{text.center(width, '-')}'")
print(f".ljust({width}, '.'):  '{text.ljust(width, '.')}'")
print(f".rjust({width}, '.'):  '{text.rjust(width, '.')}'")

# zfill for numbers
print("\\n.zfill() for numbers:")
numbers = ['1', '42', '123', '1000']
for num in numbers:
    print(f"  '{num}'.zfill(5) = '{num.zfill(5)}'")

# ============================================
# 4. Practical: Format Table
# ============================================
print("\\n--- 4. Formatted Table ---")

headers = ["Name", "Age", "City"]
data = [
    ["Alice", "28", "Seattle"],
    ["Bob", "34", "Portland"],
    ["Charlie", "22", "Boston"],
]

# Print headers
header_line = " | ".join(h.center(10) for h in headers)
separator = "-" * len(header_line)

print(separator)
print(header_line)
print(separator)

# Print data rows
for row in data:
    row_line = " | ".join(cell.center(10) for cell in row)
    print(row_line)

print(separator)

# ============================================
# 5. Method Chaining
# ============================================
print("\\n--- 5. Method Chaining ---")

# Clean and format data in one line
raw_input = "   JOHN.DOE@EMAIL.COM   "
email = raw_input.strip().lower()
print(f"Raw: '{raw_input}'")
print(f"Clean: '{email}'")

# Create URL slug
title = "  Hello World! This is a Test...  "
slug = title.strip().lower().replace(" ", "-").replace("!", "").replace(".", "")
print(f"\\nTitle: '{title}'")
print(f"Slug: '{slug}'")

print("\\n" + "=" * 50)
print("Split, Join, Alignment complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: f-String Formatting Masterclass
Python Programming Learning 2026 - Post 09

This example covers all f-string formatting capabilities.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("f-String Formatting Masterclass")
print("=" * 50)

# ============================================
# 1. Basic f-Strings
# ============================================
print("\\n--- 1. Basic f-Strings ---")

name = "Alice"
age = 30
city = "Seattle"

# Simple variable insertion
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"{name} is {age} years old and lives in {city}.")

# ============================================
# 2. Expressions in f-Strings
# ============================================
print("\\n--- 2. Expressions ---")

x, y = 10, 5

print(f"{x} + {y} = {x + y}")
print(f"{x} - {y} = {x - y}")
print(f"{x} * {y} = {x * y}")
print(f"{x} / {y} = {x / y}")

# Function calls
name = "python"
print(f"Uppercase: {name.upper()}")
print(f"Length: {len(name)}")

# ============================================
# 3. Number Formatting
# ============================================
print("\\n--- 3. Number Formatting ---")

# Decimal places
pi = 3.14159265359
print(f"Pi (default): {pi}")
print(f"Pi (2 places): {pi:.2f}")
print(f"Pi (4 places): {pi:.4f}")
print(f"Pi (0 places): {pi:.0f}")

# Thousands separator
big = 1234567890
print(f"\\nBig number: {big}")
print(f"With commas: {big:,}")
print(f"With underscores: {big:_}")

# Percentage
rate = 0.8567
print(f"\\nRate: {rate}")
print(f"As percentage: {rate:.1%}")
print(f"As percentage: {rate:.2%}")

# ============================================
# 4. Width and Alignment
# ============================================
print("\\n--- 4. Width and Alignment ---")

text = "Hi"
num = 42

# Text alignment
print(f"|{text:10}|  ← left (default for strings)")
print(f"|{text:>10}| ← right")
print(f"|{text:^10}| ← center")

# With fill character
print(f"|{text:*<10}| ← left, fill with *")
print(f"|{text:*>10}| ← right, fill with *")
print(f"|{text:*^10}| ← center, fill with *")

# Number alignment
print(f"\\n|{num:10}|  ← right (default for numbers)")
print(f"|{num:<10}| ← left")
print(f"|{num:010}| ← zero-padded")

# ============================================
# 5. Format Types
# ============================================
print("\\n--- 5. Format Types ---")

num = 255

print(f"Decimal: {num:d}")
print(f"Binary: {num:b}")
print(f"Octal: {num:o}")
print(f"Hex (lower): {num:x}")
print(f"Hex (upper): {num:X}")
print(f"Character: {num:c}")  # ÿ

sci = 12345.6789
print(f"\\nScientific: {sci:e}")
print(f"Scientific: {sci:.2e}")
print(f"Fixed: {sci:f}")
print(f"General: {sci:g}")

# ============================================
# 6. Debug Mode (Python 3.8+)
# ============================================
print("\\n--- 6. Debug Mode (=) ---")

x = 10
y = 20
name = "Python"

print(f"{x=}")
print(f"{y=}")
print(f"{name=}")
print(f"{x + y=}")
print(f"{name.upper()=}")

# ============================================
# 7. Practical: Receipt Formatting
# ============================================
print("\\n--- 7. Practical: Receipt ---")

items = [
    ("Widget", 2, 15.99),
    ("Gadget", 1, 24.50),
    ("Gizmo", 3, 8.75),
]

print("=" * 45)
print(f"{'Item':<15} {'Qty':>5} {'Price':>10} {'Total':>10}")
print("-" * 45)

grand_total = 0
for name, qty, price in items:
    total = qty * price
    grand_total += total
    print(f"{name:<15} {qty:>5} \${price:>9.2f} \${total:>9.2f}")

print("-" * 45)
tax = grand_total * 0.08
final = grand_total + tax
print(f"{'Subtotal:':<22} \${grand_total:>20.2f}")
print(f"{'Tax (8%):':<22} \${tax:>20.2f}")
print(f"{'Total:':<22} \${final:>20.2f}")
print("=" * 45)

print("\\n" + "=" * 50)
print("f-String formatting complete!")
print("=" * 50)
`}]},10:{slug:"10-type-conversion-and-type-checking",readme:`# Post 10: Type Conversion & Type Checking

[← Previous: String Methods & f-Strings](../09-string-methods-and-f-strings/) | [Back to Index](../../README.md) | [Next: Lists →](../11-lists/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 10 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 16 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** understanding type conversion
- **Anyone** handling user input or data from files
- **Developers** needing robust data validation

Prerequisites: Posts 01-09 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Convert between Python's built-in types
2. Handle conversion errors gracefully
3. Validate data before conversion
4. Use type checking effectively
5. Understand implicit vs explicit conversion

---

## 💡 Why This Matters in 2026

Type conversion is essential because:

- **User input** is always a string
- **File data** comes as text
- **APIs** return various formats
- **Calculations** require proper types

Without proper conversion, your programs crash or produce wrong results.

---

## 🔄 Basic Type Conversion Functions

### Converting to Integer (int)

\`\`\`python
# From string
num = int("42")          # 42

# From float (truncates, doesn't round)
num = int(3.9)           # 3
num = int(-3.9)          # -3

# From boolean
num = int(True)          # 1
num = int(False)         # 0

# With base (for binary, hex, etc.)
num = int("1010", 2)     # 10 (binary)
num = int("ff", 16)      # 255 (hexadecimal)
\`\`\`

### Converting to Float (float)

\`\`\`python
# From string
price = float("19.99")   # 19.99

# From integer
price = float(42)        # 42.0

# Scientific notation
val = float("3.5e10")    # 35000000000.0

# Special values
inf = float("inf")       # Infinity
neg_inf = float("-inf")  # -Infinity
\`\`\`

### Converting to String (str)

\`\`\`python
# From numbers
text = str(42)           # "42"
text = str(3.14)         # "3.14"

# From boolean
text = str(True)         # "True"

# From any object
text = str([1, 2, 3])    # "[1, 2, 3]"
\`\`\`

### Converting to Boolean (bool)

\`\`\`python
# "Truthy" values → True
bool(1)                  # True
bool(-1)                 # True
bool("hello")            # True
bool([1, 2, 3])          # True

# "Falsy" values → False
bool(0)                  # False
bool(0.0)                # False
bool("")                 # False
bool([])                 # False
bool(None)               # False
\`\`\`

### Converting to List, Tuple, Set

\`\`\`python
# String to list of characters
list("hello")            # ['h', 'e', 'l', 'l', 'o']

# Range to list
list(range(5))           # [0, 1, 2, 3, 4]

# List to tuple
tuple([1, 2, 3])         # (1, 2, 3)

# List to set (removes duplicates)
set([1, 2, 2, 3, 3, 3])  # {1, 2, 3}

# String to set
set("hello")             # {'h', 'e', 'l', 'o'}
\`\`\`

---

## ⚠️ Handling Conversion Errors

Conversions can fail. Always handle potential errors.

### The Problem

\`\`\`python
# This will crash!
age = int("twenty")      # ValueError
age = int("3.14")        # ValueError (can't convert float string directly)
age = int("")            # ValueError
\`\`\`

### The Solution: try/except

\`\`\`python
user_input = "twenty"

try:
    age = int(user_input)
    print(f"Age: {age}")
except ValueError:
    print(f"'{user_input}' is not a valid number")
\`\`\`

### Validation Before Conversion

\`\`\`python
user_input = "42"

# Check if it's a valid integer
if user_input.isdigit():
    age = int(user_input)
else:
    print("Please enter a valid number")

# Note: isdigit() doesn't handle negative numbers
# For negatives, use try/except
\`\`\`

### Safe Conversion Function

\`\`\`python
def safe_int(value, default=0):
    """Convert to int safely, return default on failure."""
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

# Usage
print(safe_int("42"))       # 42
print(safe_int("hello"))    # 0
print(safe_int("hello", -1)) # -1
print(safe_int(None))        # 0
\`\`\`

---

## 🔍 Type Checking

### Using type()

\`\`\`python
x = 42
print(type(x))               # <class 'int'>
print(type(x) == int)        # True
print(type(x).__name__)      # "int"
\`\`\`

### Using isinstance() (Preferred)

\`\`\`python
x = 42

print(isinstance(x, int))            # True
print(isinstance(x, (int, float)))   # True (check multiple)
print(isinstance(True, int))         # True! (bool is subclass of int)
\`\`\`

### Why isinstance() is Better

\`\`\`python
# type() checks exact type
# isinstance() considers inheritance

class MyInt(int):
    pass

x = MyInt(42)

print(type(x) == int)        # False
print(isinstance(x, int))    # True
\`\`\`

---

## 🔀 Implicit vs Explicit Conversion

### Implicit Conversion (Automatic)

Python automatically converts in some operations:

\`\`\`python
# int + float → float
result = 5 + 3.14
print(type(result))          # <class 'float'>

# int * float → float
result = 2 * 3.5
print(type(result))          # <class 'float'>
\`\`\`

### Explicit Conversion (Manual)

You must do it yourself:

\`\`\`python
# String + int → Error!
# "Age: " + 25 → TypeError

# Solution: explicit conversion
age = 25
message = "Age: " + str(age)
# Or use f-string
message = f"Age: {age}"
\`\`\`

---

## 📊 Common Conversion Patterns

### User Input to Number

\`\`\`python
# Always returns string
user_input = input("Enter a number: ")

# Convert for calculations
number = int(user_input)
# or
number = float(user_input)
\`\`\`

### String to Float, Then Int

\`\`\`python
# Can't do int("3.14") directly
value = int(float("3.14"))   # 3
\`\`\`

### Clean String to Number

\`\`\`python
dirty = "  42  "
clean = int(dirty.strip())   # 42

price = "$19.99"
value = float(price.replace("$", ""))  # 19.99
\`\`\`

### Number Formatting

\`\`\`python
num = 42
formatted = f"{num:05d}"     # "00042"

price = 19
formatted = f"\${price:.2f}"  # "$19.00"
\`\`\`

---

## ✅ Best Practices

1. **Always validate** user input before conversion
2. **Use try/except** for robust error handling
3. **Use isinstance()** instead of \`type() ==\`
4. **Use f-strings** instead of \`str()\` concatenation
5. **Be explicit** — don't rely on implicit conversion

### Good Input Handling Pattern

\`\`\`python
def get_integer_input(prompt, min_val=None, max_val=None):
    """Get validated integer input from user."""
    while True:
        user_input = input(prompt)
        try:
            value = int(user_input)
            if min_val is not None and value < min_val:
                print(f"Must be at least {min_val}")
                continue
            if max_val is not None and value > max_val:
                print(f"Must be at most {max_val}")
                continue
            return value
        except ValueError:
            print("Please enter a valid integer")

# Usage
age = get_integer_input("Enter age (1-120): ", 1, 120)
\`\`\`

---

## 💼 Real-World Examples

### Processing CSV Data

\`\`\`python
data = "Alice,28,85.5"
name, age, score = data.split(",")

# Convert from strings
age = int(age)
score = float(score)

print(f"{name} is {age} years old with score {score}")
\`\`\`

### API Response Handling

\`\`\`python
api_response = {"count": "42", "price": "19.99", "active": "true"}

count = int(api_response["count"])
price = float(api_response["price"])
active = api_response["active"].lower() == "true"

print(f"Count: {count}, Price: {price}, Active: {active}")
\`\`\`

---

## 📝 Mini Exercises

1. Convert "3.14159" to integer (hint: two steps).
2. Write a safe_float() function similar to safe_int().
3. Check if a variable is numeric (int or float).
4. Parse "$1,234.56" into a float.

---

## 🎯 Phase 1 Complete!

**Congratulations!** You've completed Phase 1: Foundations.

You now understand:
- Why Python matters in 2026
- Python installation and setup
- Basic syntax and variables
- Data types and numbers
- Strings and formatting
- Type conversion

---

## 🔮 What's Next?

In **Phase 2: Core Data Structures**, you'll learn:

- **Post 11**: Lists - Ordered, mutable sequences
- **Post 12**: Tuples - Immutable sequences
- **Post 13**: Sets - Unique collections
- **Post 14**: Dictionaries - Key-value pairs

You have the foundation. Now let's build data structures!

---

## 📖 Summary

| Conversion | Function | Example |
|------------|----------|---------|
| To integer | \`int()\` | \`int("42")\` → 42 |
| To float | \`float()\` | \`float("3.14")\` → 3.14 |
| To string | \`str()\` | \`str(42)\` → "42" |
| To boolean | \`bool()\` | \`bool(1)\` → True |
| To list | \`list()\` | \`list("abc")\` → ['a','b','c'] |
| Type check | \`isinstance()\` | \`isinstance(x, int)\` |

---

[← Previous: String Methods & f-Strings](../09-string-methods-and-f-strings/) | [Back to Index](../../README.md) | [Next: Lists →](../11-lists/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026
`,examples:[{name:"example_1.py",content:`"""
Example 1: Basic Type Conversion Functions
Python Programming Learning 2026 - Post 10

This example demonstrates all the basic type conversion functions.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Basic Type Conversion Functions")
print("=" * 50)

# ============================================
# 1. Converting to Integer (int)
# ============================================
print("\\n--- 1. int() Conversion ---")

# From string
print(f"int('42') = {int('42')}")
print(f"int('-17') = {int('-17')}")

# From float (truncates toward zero)
print(f"int(3.9) = {int(3.9)}")
print(f"int(-3.9) = {int(-3.9)}")
print(f"int(3.1) = {int(3.1)}")

# From boolean
print(f"int(True) = {int(True)}")
print(f"int(False) = {int(False)}")

# With base
print(f"int('1010', 2) = {int('1010', 2)} (binary)")
print(f"int('ff', 16) = {int('ff', 16)} (hex)")
print(f"int('77', 8) = {int('77', 8)} (octal)")

# ============================================
# 2. Converting to Float (float)
# ============================================
print("\\n--- 2. float() Conversion ---")

# From string
print(f"float('3.14') = {float('3.14')}")
print(f"float('-2.5') = {float('-2.5')}")
print(f"float('42') = {float('42')}")

# From integer
print(f"float(42) = {float(42)}")

# Scientific notation
print(f"float('3.5e10') = {float('3.5e10')}")
print(f"float('1.5e-5') = {float('1.5e-5')}")

# Special values
print(f"float('inf') = {float('inf')}")
print(f"float('-inf') = {float('-inf')}")

# ============================================
# 3. Converting to String (str)
# ============================================
print("\\n--- 3. str() Conversion ---")

# From numbers
print(f"str(42) = '{str(42)}'")
print(f"str(3.14) = '{str(3.14)}'")
print(f"str(-17) = '{str(-17)}'")

# From boolean
print(f"str(True) = '{str(True)}'")
print(f"str(False) = '{str(False)}'")

# From collections
print(f"str([1, 2, 3]) = '{str([1, 2, 3])}'")
print(f"str({{'a': 1}}) = '{str({'a': 1})}'")

# ============================================
# 4. Converting to Boolean (bool)
# ============================================
print("\\n--- 4. bool() Conversion ---")

print("Truthy values (→ True):")
truthy = [1, -1, 3.14, "hello", [1], {"a": 1}]
for val in truthy:
    print(f"  bool({str(val):15}) = {bool(val)}")

print("\\nFalsy values (→ False):")
falsy = [0, 0.0, "", [], {}, None]
for val in falsy:
    print(f"  bool({str(val):15}) = {bool(val)}")

# ============================================
# 5. Converting to List, Tuple, Set
# ============================================
print("\\n--- 5. Collection Conversions ---")

# String to list
print(f"list('hello') = {list('hello')}")

# Range to list
print(f"list(range(5)) = {list(range(5))}")

# List to tuple
print(f"tuple([1, 2, 3]) = {tuple([1, 2, 3])}")

# List to set (removes duplicates)
print(f"set([1, 2, 2, 3, 3]) = {set([1, 2, 2, 3, 3])}")

# Tuple to list
print(f"list((1, 2, 3)) = {list((1, 2, 3))}")

# Dict keys/values
d = {"a": 1, "b": 2}
print(f"list(d.keys()) = {list(d.keys())}")
print(f"list(d.values()) = {list(d.values())}")

print("\\n" + "=" * 50)
print("Basic conversion complete!")
print("=" * 50)
`},{name:"example_2.py",content:`"""
Example 2: Error Handling in Type Conversion
Python Programming Learning 2026 - Post 10

This example shows how to handle conversion errors safely.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Error Handling in Type Conversion")
print("=" * 50)

# ============================================
# 1. Common Conversion Errors
# ============================================
print("\\n--- 1. Common Errors ---")

test_values = ["42", "3.14", "hello", "", None]

for val in test_values:
    print(f"\\nTrying: int({repr(val)})")
    try:
        result = int(val)
        print(f"  Success: {result}")
    except ValueError as e:
        print(f"  ValueError: {e}")
    except TypeError as e:
        print(f"  TypeError: {e}")

# ============================================
# 2. Safe Conversion Functions
# ============================================
print("\\n--- 2. Safe Conversion Functions ---")


def safe_int(value, default=0):
    """Convert to int safely, return default on failure."""
    try:
        return int(value)
    except (ValueError, TypeError):
        return default


def safe_float(value, default=0.0):
    """Convert to float safely, return default on failure."""
    try:
        return float(value)
    except (ValueError, TypeError):
        return default


# Test safe_int
print("Testing safe_int():")
test_cases = ["42", "3.14", "hello", "", None, True]
for val in test_cases:
    result = safe_int(val)
    print(f"  safe_int({repr(val):10}) = {result}")

print("\\nTesting safe_float():")
for val in test_cases:
    result = safe_float(val)
    print(f"  safe_float({repr(val):10}) = {result}")

# ============================================
# 3. Validation Before Conversion
# ============================================
print("\\n--- 3. Validation Before Conversion ---")

test_strings = ["42", "-17", "3.14", "hello", "42abc", ""]

print("Checking with .isdigit():")
for s in test_strings:
    is_digit = s.isdigit() if s else False
    print(f"  '{s}'.isdigit() = {is_digit}")

# Note: isdigit() limitation
print("\\nLimitation: isdigit() doesn't handle negatives or floats")
print("  '-17'.isdigit() =", "-17".isdigit())  # False
print("  '3.14'.isdigit() =", "3.14".isdigit())  # False


# Better validation
def is_integer_string(s):
    """Check if string represents an integer."""
    if not s:
        return False
    if s[0] in ('+', '-'):
        return s[1:].isdigit()
    return s.isdigit()


def is_float_string(s):
    """Check if string represents a float."""
    try:
        float(s)
        return True
    except (ValueError, TypeError):
        return False


print("\\nBetter validation:")
for s in test_strings:
    is_int = is_integer_string(s)
    is_flt = is_float_string(s)
    print(f"  '{s}': is_int={is_int}, is_float={is_flt}")

# ============================================
# 4. Robust Input Function
# ============================================
print("\\n--- 4. Robust Input Pattern ---")


def get_validated_number(prompt, num_type=float, min_val=None, max_val=None):
    """
    Get validated numeric input.
    (Demo version - doesn't actually read input)
    """
    # Simulating user input for demo
    test_inputs = ["abc", "-5", "150", "25"]
    
    for user_input in test_inputs:
        print(f"  User enters: '{user_input}'")
        try:
            value = num_type(user_input)
            if min_val is not None and value < min_val:
                print(f"    → Error: Must be at least {min_val}")
                continue
            if max_val is not None and value > max_val:
                print(f"    → Error: Must be at most {max_val}")
                continue
            print(f"    → Valid: {value}")
            return value
        except ValueError:
            print("    → Error: Not a valid number")
            continue
    
    return None


print("\\nSimulating: get_validated_number('Age', int, 0, 120)")
result = get_validated_number("Enter age: ", int, 0, 120)

print("\\n" + "=" * 50)
print("Error handling complete!")
print("=" * 50)
`},{name:"example_3.py",content:`"""
Example 3: Type Checking and Practical Patterns
Python Programming Learning 2026 - Post 10

This example covers type checking and real-world conversion patterns.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Type Checking and Practical Patterns")
print("=" * 50)

# ============================================
# 1. type() vs isinstance()
# ============================================
print("\\n--- 1. type() vs isinstance() ---")

x = 42
y = True  # Note: bool is subclass of int

print(f"x = {x}, y = {y}")
print()

print("Using type():")
print(f"  type(x) == int: {type(x) == int}")
print(f"  type(y) == bool: {type(y) == bool}")
print(f"  type(y) == int: {type(y) == int}")  # False!

print("\\nUsing isinstance():")
print(f"  isinstance(x, int): {isinstance(x, int)}")
print(f"  isinstance(y, bool): {isinstance(y, bool)}")
print(f"  isinstance(y, int): {isinstance(y, int)}")  # True!

print("\\nisinstance() considers inheritance (preferred)")

# ============================================
# 2. Checking Multiple Types
# ============================================
print("\\n--- 2. Checking Multiple Types ---")

values = [42, 3.14, "hello", [1, 2], True]

for val in values:
    is_numeric = isinstance(val, (int, float)) and not isinstance(val, bool)
    is_text = isinstance(val, str)
    is_sequence = isinstance(val, (list, tuple))
    
    print(f"{str(val):12} → numeric: {is_numeric:5}, text: {is_text:5}, sequence: {is_sequence}")

# ============================================
# 3. Implicit vs Explicit Conversion
# ============================================
print("\\n--- 3. Implicit vs Explicit Conversion ---")

print("Implicit (automatic):")
result = 5 + 3.14
print(f"  5 + 3.14 = {result} (type: {type(result).__name__})")

result = 2 * 3.5
print(f"  2 * 3.5 = {result} (type: {type(result).__name__})")

print("\\nExplicit (manual required):")
age = 25
# message = "Age: " + age  # TypeError!
message = "Age: " + str(age)
print(f"  'Age: ' + str({age}) = '{message}'")

# ============================================
# 4. Practical: Data Cleaning
# ============================================
print("\\n--- 4. Practical: Data Cleaning ---")

# Raw data from various sources
raw_data = [
    "  42  ",           # Padded number
    "$1,234.56",        # Currency
    "85%",              # Percentage  
    " True ",           # Boolean string
    "N/A",              # Missing value
]

def clean_and_convert(value):
    """Clean and convert various data formats."""
    # Trim whitespace
    value = str(value).strip()
    
    # Handle currency
    if value.startswith('$'):
        return float(value.replace('$', '').replace(',', ''))
    
    # Handle percentage
    if value.endswith('%'):
        return float(value.rstrip('%')) / 100
    
    # Handle boolean strings
    if value.lower() in ('true', 'yes', '1'):
        return True
    if value.lower() in ('false', 'no', '0'):
        return False
    
    # Handle missing values
    if value.lower() in ('n/a', 'na', 'null', 'none', ''):
        return None
    
    # Try numeric conversion
    try:
        if '.' in value:
            return float(value)
        return int(value)
    except ValueError:
        return value  # Return as-is

print("Cleaning raw data:")
for raw in raw_data:
    cleaned = clean_and_convert(raw)
    print(f"  '{raw:15}' → {cleaned:10} ({type(cleaned).__name__})")

# ============================================
# 5. Practical: CSV Row Processing
# ============================================
print("\\n--- 5. Practical: CSV Processing ---")

# Simulated CSV data
csv_rows = [
    "Alice,28,85.5,true",
    "Bob,34,92.3,false",
    "Charlie,,78.9,true",  # Missing age
]

def process_csv_row(row):
    """Process a CSV row with proper type conversion."""
    parts = row.split(',')
    
    name = parts[0]
    age = int(parts[1]) if parts[1] else None
    score = float(parts[2])
    active = parts[3].lower() == 'true'
    
    return {
        'name': name,
        'age': age,
        'score': score,
        'active': active
    }

print("Processed CSV data:")
for row in csv_rows:
    data = process_csv_row(row)
    print(f"  {data}")

# ============================================
# 6. Type Summary
# ============================================
print("\\n--- 6. Conversion Quick Reference ---")

print("""
┌─────────────────────────────────────────────────┐
│         Type Conversion Quick Reference         │
├─────────────┬───────────────────────────────────┤
│ int(x)      │ Convert to integer                │
│ float(x)    │ Convert to float                  │
│ str(x)      │ Convert to string                 │
│ bool(x)     │ Convert to boolean                │
│ list(x)     │ Convert to list                   │
│ tuple(x)    │ Convert to tuple                  │
│ set(x)      │ Convert to set                    │
├─────────────┼───────────────────────────────────┤
│ type(x)     │ Get exact type                    │
│ isinstance()│ Check type (with inheritance)     │
└─────────────┴───────────────────────────────────┘
""")

print("=" * 50)
print("Type checking complete!")
print("=" * 50)

print("\\n🎉 Congratulations! You've completed Phase 1: Foundations!")
print("   Next up: Phase 2 - Core Data Structures")
`}]}};function I3({code:t,language:r}){const[a,o]=D.useState(!1),{theme:s}=ji(),c=()=>{navigator.clipboard.writeText(t),o(!0),setTimeout(()=>o(!1),2e3)};return E.jsxs("div",{className:`rounded-lg sm:rounded-xl border overflow-hidden my-3 sm:my-4 ${s==="dark"?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"}`,children:[E.jsxs("div",{className:`flex items-center justify-between px-3 sm:px-4 py-2 border-b ${s==="dark"?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-100"}`,children:[E.jsx("span",{className:"text-xs font-medium text-emerald-500",children:r}),E.jsxs("button",{onClick:c,className:`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${s==="dark"?"text-slate-400 hover:text-white hover:bg-slate-700":"text-slate-600 hover:text-slate-900 hover:bg-slate-200"}`,children:[a?E.jsx(ty,{size:14,className:"text-emerald-500"}):E.jsx(iy,{size:14}),a?"Copied!":"Copy"]})]}),E.jsx("pre",{className:`overflow-x-auto p-3 sm:p-4 text-xs sm:text-sm leading-relaxed ${s==="dark"?"text-slate-300":"text-slate-700"}`,children:E.jsx("code",{children:t})})]})}function q3({code:t,language:r="python",height:a="300px"}){const[o,s]=D.useState(!1),{theme:c}=ji(),f=D.useRef(null),d=()=>{navigator.clipboard.writeText(t),s(!0),setTimeout(()=>s(!1),2e3)};return D.useEffect(()=>{const h=f.current;if(!h)return;const m=b=>{const g=h.querySelector(".monaco-editor");if(g){const S=g.querySelector(".monaco-scrollable-element");if(S){const{scrollTop:x,scrollHeight:_,clientHeight:O}=S,z=x===0,P=x+O>=_-1;if(b.deltaY<0&&z||b.deltaY>0&&P)return}}};return h.addEventListener("wheel",m,{passive:!0}),()=>h.removeEventListener("wheel",m)},[]),E.jsxs("div",{ref:f,className:`rounded-lg sm:rounded-xl border overflow-hidden ${c==="dark"?"border-slate-700":"border-slate-300"}`,children:[E.jsxs("div",{className:`flex items-center justify-between px-3 sm:px-4 py-2 border-b ${c==="dark"?"bg-slate-800 border-slate-700":"bg-slate-100 border-slate-300"}`,children:[E.jsx("span",{className:"text-xs font-medium text-emerald-500",children:r}),E.jsxs("button",{onClick:d,className:`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${c==="dark"?"text-slate-400 hover:text-white hover:bg-slate-700":"text-slate-600 hover:text-slate-900 hover:bg-slate-200"}`,children:[o?E.jsx(ty,{size:14,className:"text-emerald-500"}):E.jsx(iy,{size:14}),o?"Copied!":"Copy"]})]}),E.jsx(U3,{height:a,language:r,value:t,theme:c==="dark"?"vs-dark":"light",options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,padding:{top:12,bottom:12},folding:!1,wordWrap:"on",scrollbar:{vertical:"visible",horizontal:"visible",alwaysConsumeMouseWheel:!1},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,domReadOnly:!0}})]})}function F3({name:t,content:r}){const[a,o]=D.useState(!1),{theme:s}=ji(),c=r.split(`
`).length,f=Math.min(Math.max(c*22+24,200),500);return E.jsxs("div",{className:`rounded-lg sm:rounded-xl border overflow-hidden ${s==="dark"?"border-slate-700 bg-slate-800/50":"border-slate-200 bg-slate-50"}`,children:[E.jsxs("button",{onClick:()=>o(!a),className:`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-left transition ${s==="dark"?"hover:bg-slate-700/50":"hover:bg-slate-100"}`,children:[E.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[E.jsx(qo,{size:16,className:"text-emerald-500"}),E.jsx("span",{className:`font-medium text-sm ${s==="dark"?"text-white":"text-slate-900"}`,children:t}),E.jsxs("span",{className:"text-xs text-slate-500",children:[c," lines"]})]}),a?E.jsx(zv,{size:16,className:s==="dark"?"text-slate-400":"text-slate-500"}):E.jsx(Nv,{size:16,className:s==="dark"?"text-slate-400":"text-slate-500"})]}),a&&E.jsx("div",{className:`border-t ${s==="dark"?"border-slate-700":"border-slate-200"}`,children:E.jsx(q3,{code:r,language:"python",height:`${f}px`})})]})}function V3(){const{postId:t}=Yg(),{theme:r}=ji(),a=parseInt(t);let o=null,s=null;for(const g of Ri){const S=g.posts.find(x=>x.id===a);if(S){o=S,s=g;break}}if(!o)return E.jsxs("div",{className:"text-center py-16",children:[E.jsx("h1",{className:`text-2xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Post not found"}),E.jsx(ge,{to:"/",className:"mt-4 inline-block text-emerald-500 hover:underline",children:"Go back home"})]});const c=H3[a],f=c&&c.readme,d=Ri.flatMap(g=>g.posts),h=d.findIndex(g=>g.id===a),m=h>0?d[h-1]:null,b=h<d.length-1?d[h+1]:null;return E.jsxs("div",{className:"space-y-5 sm:space-y-8",children:[E.jsxs("nav",{className:`flex items-center gap-2 text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:[E.jsx(ge,{to:"/",className:"hover:text-emerald-500",children:"Home"}),E.jsx("span",{children:"/"}),E.jsxs(ge,{to:`/phase/${s.id}`,className:"hover:text-emerald-500",children:["Phase ",s.id]}),E.jsx("span",{children:"/"}),E.jsxs("span",{className:r==="dark"?"text-white":"text-slate-900",children:["Post ",o.id]})]}),E.jsx("header",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 transition-colors ${r==="dark"?"border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-800/50":"border-slate-200 bg-white shadow-sm"}`,children:E.jsxs("div",{className:"flex items-start gap-3 sm:gap-4",children:[E.jsx("div",{className:"flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg sm:text-xl font-bold text-white shadow-lg shadow-emerald-500/25",children:String(o.id).padStart(2,"0")}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3",children:[E.jsxs("span",{className:"rounded-full bg-emerald-500/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-emerald-500",children:["Phase ",s.id]}),E.jsxs("span",{className:`text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:["Post ",o.id," of 120"]})]}),E.jsx("h1",{className:`mt-2 text-xl sm:text-2xl md:text-3xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:o.title})]})]})}),f?E.jsx("article",{className:"prose prose-slate max-w-none",children:E.jsx("div",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 transition-colors ${r==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white shadow-sm"}`,children:E.jsx(yE,{remarkPlugins:[M_],components:{code({node:g,inline:S,className:x,children:_,...O}){const z=String(_).replace(/\n$/,""),P=x?.replace("language-","")||"text";return S||!x&&!z.includes(`
`)?E.jsx("code",{className:`inline-code rounded px-1.5 py-0.5 text-xs sm:text-sm font-mono whitespace-nowrap ${r==="dark"?"bg-slate-700 text-emerald-400":"bg-slate-200 text-emerald-600"}`,...O,children:_}):E.jsx(I3,{code:z,language:P})},h1:({children:g})=>E.jsx("h1",{className:`text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 first:mt-0 ${r==="dark"?"text-white":"text-slate-900"}`,children:g}),h2:({children:g})=>E.jsx("h2",{className:`text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 pb-2 border-b ${r==="dark"?"text-white border-slate-700":"text-slate-900 border-slate-200"}`,children:g}),h3:({children:g})=>E.jsx("h3",{className:`text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-2 sm:mb-3 ${r==="dark"?"text-white":"text-slate-900"}`,children:g}),p:({children:g})=>E.jsx("p",{className:`leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base ${r==="dark"?"text-slate-300":"text-slate-700"}`,children:g}),ul:({children:g})=>E.jsx("ul",{className:`list-disc list-inside space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ${r==="dark"?"text-slate-300":"text-slate-700"}`,children:g}),ol:({children:g})=>E.jsx("ol",{className:`list-decimal list-inside space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ${r==="dark"?"text-slate-300":"text-slate-700"}`,children:g}),li:({children:g})=>E.jsx("li",{className:r==="dark"?"text-slate-300":"text-slate-700",children:g}),blockquote:({children:g})=>E.jsx("blockquote",{className:`border-l-4 border-emerald-500 pl-3 sm:pl-4 italic my-3 sm:my-4 ${r==="dark"?"text-slate-400":"text-slate-600"}`,children:g}),table:({children:g})=>E.jsx("div",{className:"overflow-x-auto my-3 sm:my-4",children:E.jsx("table",{className:`min-w-full border rounded-lg overflow-hidden text-sm ${r==="dark"?"border-slate-700":"border-slate-200"}`,children:g})}),thead:({children:g})=>E.jsx("thead",{className:r==="dark"?"bg-slate-800":"bg-slate-100",children:g}),th:({children:g})=>E.jsx("th",{className:`px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold border-b ${r==="dark"?"text-white border-slate-700":"text-slate-900 border-slate-200"}`,children:g}),td:({children:g})=>E.jsx("td",{className:`px-3 sm:px-4 py-2 text-xs sm:text-sm border-b ${r==="dark"?"text-slate-300 border-slate-700/50":"text-slate-700 border-slate-200"}`,children:g}),a:({href:g,children:S})=>E.jsx("a",{href:g,className:"text-emerald-500 hover:text-emerald-400 underline",children:S}),hr:()=>E.jsx("hr",{className:`my-6 sm:my-8 ${r==="dark"?"border-slate-700":"border-slate-200"}`}),strong:({children:g})=>E.jsx("strong",{className:`font-semibold ${r==="dark"?"text-white":"text-slate-900"}`,children:g}),pre:({children:g})=>E.jsx(E.Fragment,{children:g})},children:c.readme})})}):E.jsxs("div",{className:`rounded-xl sm:rounded-2xl border p-8 text-center ${r==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white"}`,children:[E.jsx(Ga,{size:48,className:r==="dark"?"mx-auto text-slate-600":"mx-auto text-slate-400"}),E.jsx("h2",{className:`mt-4 text-xl font-semibold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Content Coming Soon"}),E.jsx("p",{className:`mt-2 ${r==="dark"?"text-slate-400":"text-slate-600"}`,children:"This post is part of future phases and will be added soon."})]}),c?.examples?.length>0&&E.jsxs("section",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 ${r==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white shadow-sm"}`,children:[E.jsxs("h2",{className:`flex items-center gap-2 text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${r==="dark"?"text-white":"text-slate-900"}`,children:[E.jsx(qo,{size:18,className:"text-emerald-500"}),"Python Examples"]}),E.jsx("p",{className:`mb-3 sm:mb-4 text-sm ${r==="dark"?"text-slate-400":"text-slate-600"}`,children:"Click on each file to view the executable Python code:"}),E.jsx("div",{className:"space-y-2 sm:space-y-3",children:c.examples.map(g=>E.jsx(F3,{name:g.name,content:g.content},g.name))})]}),E.jsxs("nav",{className:`flex items-center justify-between border-t pt-4 sm:pt-6 ${r==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[m?E.jsxs(ge,{to:`/post/${m.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[E.jsx(ey,{size:14,className:"transition group-hover:-translate-x-1"}),E.jsxs("span",{className:"max-w-[120px] sm:max-w-[200px] truncate",children:[String(m.id).padStart(2,"0"),". ",m.title]})]}):E.jsx("div",{}),b&&E.jsxs(ge,{to:`/post/${b.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[E.jsxs("span",{className:"max-w-[120px] sm:max-w-[200px] truncate",children:[String(b.id).padStart(2,"0"),". ",b.title]}),E.jsx(Dr,{size:14,className:"transition group-hover:translate-x-1"})]})]})]})}function Y3(){return E.jsx(vv,{children:E.jsx(cv,{basename:"/python-programming-learning-2026",children:E.jsx(Hx,{children:E.jsxs(Ua,{path:"/",element:E.jsx(t2,{}),children:[E.jsx(Ua,{index:!0,element:E.jsx(a2,{})}),E.jsx(Ua,{path:"phase/:phaseId",element:E.jsx(l2,{})}),E.jsx(Ua,{path:"post/:postId",element:E.jsx(V3,{})})]})})})})}Ub.createRoot(document.getElementById("root")).render(E.jsx(D.StrictMode,{children:E.jsx(Y3,{})}));
