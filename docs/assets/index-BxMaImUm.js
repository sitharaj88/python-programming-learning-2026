(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();function Os(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vc={exports:{}},Al={};var Dm;function Ux(){if(Dm)return Al;Dm=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(o,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var d in s)d!=="key"&&(c[d]=s[d])}else c=s;return s=c.ref,{$$typeof:t,type:o,key:f,ref:s!==void 0?s:null,props:c}}return Al.Fragment=r,Al.jsx=a,Al.jsxs=a,Al}var zm;function Hx(){return zm||(zm=1,Vc.exports=Ux()),Vc.exports}var C=Hx(),Gc={exports:{}},Nn={};var Lm;function Ix(){if(Lm)return Nn;Lm=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,D={};function M(T,V,w){this.props=T,this.context=V,this.refs=D,this.updater=w||_}M.prototype.isReactComponent={},M.prototype.setState=function(T,V){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,V,"setState")},M.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function j(){}j.prototype=M.prototype;function I(T,V,w){this.props=T,this.context=V,this.refs=D,this.updater=w||_}var on=I.prototype=new j;on.constructor=I,N(on,M.prototype),on.isPureReactComponent=!0;var J=Array.isArray;function B(){}var Z={H:null,A:null,T:null,S:null},hn=Object.prototype.hasOwnProperty;function pn(T,V,w){var un=w.ref;return{$$typeof:t,type:T,key:V,ref:un!==void 0?un:null,props:w}}function R(T,V){return pn(T.type,V,T.props)}function ln(T){return typeof T=="object"&&T!==null&&T.$$typeof===t}function sn(T){var V={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(w){return V[w]})}var Pn=/\/+/g;function fn(T,V){return typeof T=="object"&&T!==null&&T.key!=null?sn(""+T.key):V.toString(36)}function Q(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(B,B):(T.status="pending",T.then(function(V){T.status==="pending"&&(T.status="fulfilled",T.value=V)},function(V){T.status==="pending"&&(T.status="rejected",T.reason=V)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function L(T,V,w,un,wn){var xn=typeof T;(xn==="undefined"||xn==="boolean")&&(T=null);var jn=!1;if(T===null)jn=!0;else switch(xn){case"bigint":case"string":case"number":jn=!0;break;case"object":switch(T.$$typeof){case t:case r:jn=!0;break;case y:return jn=T._init,L(jn(T._payload),V,w,un,wn)}}if(jn)return wn=wn(T),jn=un===""?"."+fn(T,0):un,J(wn)?(w="",jn!=null&&(w=jn.replace(Pn,"$&/")+"/"),L(wn,V,w,"",function(Be){return Be})):wn!=null&&(ln(wn)&&(wn=R(wn,w+(wn.key==null||T&&T.key===wn.key?"":(""+wn.key).replace(Pn,"$&/")+"/")+jn)),V.push(wn)),1;jn=0;var ue=un===""?".":un+":";if(J(T))for(var Zn=0;Zn<T.length;Zn++)un=T[Zn],xn=ue+fn(un,Zn),jn+=L(un,V,w,xn,wn);else if(Zn=x(T),typeof Zn=="function")for(T=Zn.call(T),Zn=0;!(un=T.next()).done;)un=un.value,xn=ue+fn(un,Zn++),jn+=L(un,V,w,xn,wn);else if(xn==="object"){if(typeof T.then=="function")return L(Q(T),V,w,un,wn);throw V=String(T),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return jn}function K(T,V,w){if(T==null)return T;var un=[],wn=0;return L(T,un,"","",function(xn){return V.call(w,xn,wn++)}),un}function an(T){if(T._status===-1){var V=T._result;V=V(),V.then(function(w){(T._status===0||T._status===-1)&&(T._status=1,T._result=w)},function(w){(T._status===0||T._status===-1)&&(T._status=2,T._result=w)}),T._status===-1&&(T._status=0,T._result=V)}if(T._status===1)return T._result.default;throw T._result}var Tn=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},E={map:K,forEach:function(T,V,w){K(T,function(){V.apply(this,arguments)},w)},count:function(T){var V=0;return K(T,function(){V++}),V},toArray:function(T){return K(T,function(V){return V})||[]},only:function(T){if(!ln(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return Nn.Activity=g,Nn.Children=E,Nn.Component=M,Nn.Fragment=a,Nn.Profiler=s,Nn.PureComponent=I,Nn.StrictMode=o,Nn.Suspense=m,Nn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,Nn.__COMPILER_RUNTIME={__proto__:null,c:function(T){return Z.H.useMemoCache(T)}},Nn.cache=function(T){return function(){return T.apply(null,arguments)}},Nn.cacheSignal=function(){return null},Nn.cloneElement=function(T,V,w){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var un=N({},T.props),wn=T.key;if(V!=null)for(xn in V.key!==void 0&&(wn=""+V.key),V)!hn.call(V,xn)||xn==="key"||xn==="__self"||xn==="__source"||xn==="ref"&&V.ref===void 0||(un[xn]=V[xn]);var xn=arguments.length-2;if(xn===1)un.children=w;else if(1<xn){for(var jn=Array(xn),ue=0;ue<xn;ue++)jn[ue]=arguments[ue+2];un.children=jn}return pn(T.type,wn,un)},Nn.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:c,_context:T},T},Nn.createElement=function(T,V,w){var un,wn={},xn=null;if(V!=null)for(un in V.key!==void 0&&(xn=""+V.key),V)hn.call(V,un)&&un!=="key"&&un!=="__self"&&un!=="__source"&&(wn[un]=V[un]);var jn=arguments.length-2;if(jn===1)wn.children=w;else if(1<jn){for(var ue=Array(jn),Zn=0;Zn<jn;Zn++)ue[Zn]=arguments[Zn+2];wn.children=ue}if(T&&T.defaultProps)for(un in jn=T.defaultProps,jn)wn[un]===void 0&&(wn[un]=jn[un]);return pn(T,xn,wn)},Nn.createRef=function(){return{current:null}},Nn.forwardRef=function(T){return{$$typeof:d,render:T}},Nn.isValidElement=ln,Nn.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:an}},Nn.memo=function(T,V){return{$$typeof:h,type:T,compare:V===void 0?null:V}},Nn.startTransition=function(T){var V=Z.T,w={};Z.T=w;try{var un=T(),wn=Z.S;wn!==null&&wn(w,un),typeof un=="object"&&un!==null&&typeof un.then=="function"&&un.then(B,Tn)}catch(xn){Tn(xn)}finally{V!==null&&w.types!==null&&(V.types=w.types),Z.T=V}},Nn.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},Nn.use=function(T){return Z.H.use(T)},Nn.useActionState=function(T,V,w){return Z.H.useActionState(T,V,w)},Nn.useCallback=function(T,V){return Z.H.useCallback(T,V)},Nn.useContext=function(T){return Z.H.useContext(T)},Nn.useDebugValue=function(){},Nn.useDeferredValue=function(T,V){return Z.H.useDeferredValue(T,V)},Nn.useEffect=function(T,V){return Z.H.useEffect(T,V)},Nn.useEffectEvent=function(T){return Z.H.useEffectEvent(T)},Nn.useId=function(){return Z.H.useId()},Nn.useImperativeHandle=function(T,V,w){return Z.H.useImperativeHandle(T,V,w)},Nn.useInsertionEffect=function(T,V){return Z.H.useInsertionEffect(T,V)},Nn.useLayoutEffect=function(T,V){return Z.H.useLayoutEffect(T,V)},Nn.useMemo=function(T,V){return Z.H.useMemo(T,V)},Nn.useOptimistic=function(T,V){return Z.H.useOptimistic(T,V)},Nn.useReducer=function(T,V,w){return Z.H.useReducer(T,V,w)},Nn.useRef=function(T){return Z.H.useRef(T)},Nn.useState=function(T){return Z.H.useState(T)},Nn.useSyncExternalStore=function(T,V,w){return Z.H.useSyncExternalStore(T,V,w)},Nn.useTransition=function(){return Z.H.useTransition()},Nn.version="19.2.3",Nn}var jm;function Df(){return jm||(jm=1,Gc.exports=Ix()),Gc.exports}var z=Df();const Ca=Os(z);var Yc={exports:{}},Ml={},Wc={exports:{}},$c={};var Bm;function Fx(){return Bm||(Bm=1,(function(t){function r(L,K){var an=L.length;L.push(K);n:for(;0<an;){var Tn=an-1>>>1,E=L[Tn];if(0<s(E,K))L[Tn]=K,L[an]=E,an=Tn;else break n}}function a(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var K=L[0],an=L.pop();if(an!==K){L[0]=an;n:for(var Tn=0,E=L.length,T=E>>>1;Tn<T;){var V=2*(Tn+1)-1,w=L[V],un=V+1,wn=L[un];if(0>s(w,an))un<E&&0>s(wn,w)?(L[Tn]=wn,L[un]=an,Tn=un):(L[Tn]=w,L[V]=an,Tn=V);else if(un<E&&0>s(wn,an))L[Tn]=wn,L[un]=an,Tn=un;else break n}}return K}function s(L,K){var an=L.sortIndex-K.sortIndex;return an!==0?an:L.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();t.unstable_now=function(){return f.now()-d}}var m=[],h=[],y=1,g=null,v=3,x=!1,_=!1,N=!1,D=!1,M=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function on(L){for(var K=a(h);K!==null;){if(K.callback===null)o(h);else if(K.startTime<=L)o(h),K.sortIndex=K.expirationTime,r(m,K);else break;K=a(h)}}function J(L){if(N=!1,on(L),!_)if(a(m)!==null)_=!0,B||(B=!0,sn());else{var K=a(h);K!==null&&Q(J,K.startTime-L)}}var B=!1,Z=-1,hn=5,pn=-1;function R(){return D?!0:!(t.unstable_now()-pn<hn)}function ln(){if(D=!1,B){var L=t.unstable_now();pn=L;var K=!0;try{n:{_=!1,N&&(N=!1,j(Z),Z=-1),x=!0;var an=v;try{e:{for(on(L),g=a(m);g!==null&&!(g.expirationTime>L&&R());){var Tn=g.callback;if(typeof Tn=="function"){g.callback=null,v=g.priorityLevel;var E=Tn(g.expirationTime<=L);if(L=t.unstable_now(),typeof E=="function"){g.callback=E,on(L),K=!0;break e}g===a(m)&&o(m),on(L)}else o(m);g=a(m)}if(g!==null)K=!0;else{var T=a(h);T!==null&&Q(J,T.startTime-L),K=!1}}break n}finally{g=null,v=an,x=!1}K=void 0}}finally{K?sn():B=!1}}}var sn;if(typeof I=="function")sn=function(){I(ln)};else if(typeof MessageChannel<"u"){var Pn=new MessageChannel,fn=Pn.port2;Pn.port1.onmessage=ln,sn=function(){fn.postMessage(null)}}else sn=function(){M(ln,0)};function Q(L,K){Z=M(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):hn=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_next=function(L){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var an=v;v=K;try{return L()}finally{v=an}},t.unstable_requestPaint=function(){D=!0},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var an=v;v=L;try{return K()}finally{v=an}},t.unstable_scheduleCallback=function(L,K,an){var Tn=t.unstable_now();switch(typeof an=="object"&&an!==null?(an=an.delay,an=typeof an=="number"&&0<an?Tn+an:Tn):an=Tn,L){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=an+E,L={id:y++,callback:K,priorityLevel:L,startTime:an,expirationTime:E,sortIndex:-1},an>Tn?(L.sortIndex=an,r(h,L),a(m)===null&&L===a(h)&&(N?(j(Z),Z=-1):N=!0,Q(J,an-Tn))):(L.sortIndex=E,r(m,L),_||x||(_=!0,B||(B=!0,sn()))),L},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(L){var K=v;return function(){var an=v;v=K;try{return L.apply(this,arguments)}finally{v=an}}}})($c)),$c}var Um;function qx(){return Um||(Um=1,Wc.exports=Fx()),Wc.exports}var Xc={exports:{}},Xe={};var Hm;function Vx(){if(Hm)return Xe;Hm=1;var t=Df();function r(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(m,h,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:m,containerInfo:h,implementation:y}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Xe.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return c(m,h,null,y)},Xe.flushSync=function(m){var h=f.T,y=o.p;try{if(f.T=null,o.p=2,m)return m()}finally{f.T=h,o.p=y,o.d.f()}},Xe.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(m,h))},Xe.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Xe.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,g=d(y,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?o.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):y==="script"&&o.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Xe.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=d(h.as,h.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(m)},Xe.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,g=d(y,h.crossOrigin);o.d.L(m,y,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Xe.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=d(h.as,h.crossOrigin);o.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(m)},Xe.requestFormReset=function(m){o.d.r(m)},Xe.unstable_batchedUpdates=function(m,h){return m(h)},Xe.useFormState=function(m,h,y){return f.H.useFormState(m,h,y)},Xe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Xe.version="19.2.3",Xe}var Im;function Gx(){if(Im)return Xc.exports;Im=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Xc.exports=Vx(),Xc.exports}var Fm;function Yx(){if(Fm)return Ml;Fm=1;var t=qx(),r=Df(),a=Gx();function o(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var e=n,i=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(i=e.return),n=e.return;while(n)}return e.tag===3?i:null}function f(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function d(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function m(n){if(c(n)!==n)throw Error(o(188))}function h(n){var e=n.alternate;if(!e){if(e=c(n),e===null)throw Error(o(188));return e!==n?null:n}for(var i=n,l=e;;){var u=i.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===i)return m(u),n;if(p===l)return m(u),e;p=p.sibling}throw Error(o(188))}if(i.return!==l.return)i=u,l=p;else{for(var b=!1,S=u.child;S;){if(S===i){b=!0,i=u,l=p;break}if(S===l){b=!0,l=u,i=p;break}S=S.sibling}if(!b){for(S=p.child;S;){if(S===i){b=!0,i=p,l=u;break}if(S===l){b=!0,l=p,i=u;break}S=S.sibling}if(!b)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?n:e}function y(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=y(n),e!==null)return e;n=n.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),I=Symbol.for("react.context"),on=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),pn=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),ln=Symbol.iterator;function sn(n){return n===null||typeof n!="object"?null:(n=ln&&n[ln]||n["@@iterator"],typeof n=="function"?n:null)}var Pn=Symbol.for("react.client.reference");function fn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Pn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case M:return"Profiler";case D:return"StrictMode";case J:return"Suspense";case B:return"SuspenseList";case pn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case _:return"Portal";case I:return n.displayName||"Context";case j:return(n._context.displayName||"Context")+".Consumer";case on:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return e=n.displayName||null,e!==null?e:fn(n.type)||"Memo";case hn:e=n._payload,n=n._init;try{return fn(n(e))}catch{}}return null}var Q=Array.isArray,L=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,an={pending:!1,data:null,method:null,action:null},Tn=[],E=-1;function T(n){return{current:n}}function V(n){0>E||(n.current=Tn[E],Tn[E]=null,E--)}function w(n,e){E++,Tn[E]=n.current,n.current=e}var un=T(null),wn=T(null),xn=T(null),jn=T(null);function ue(n,e){switch(w(xn,e),w(wn,n),w(un,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?im(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=im(e),n=rm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}V(un),w(un,n)}function Zn(){V(un),V(wn),V(xn)}function Be(n){n.memoizedState!==null&&w(jn,n);var e=un.current,i=rm(e,n.type);e!==i&&(w(wn,n),w(un,i))}function jt(n){wn.current===n&&(V(un),V(wn)),jn.current===n&&(V(jn),_l._currentValue=an)}var rr,Or;function Bt(n){if(rr===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);rr=e&&e[1]||"",Or=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rr+n+Or}var _i=!1;function Ci(n,e){if(!n||_i)return"";_i=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var F=q}Reflect.construct(n,[],X)}else{try{X.call()}catch(q){F=q}n.call(X.prototype)}}else{try{throw Error()}catch(q){F=q}(X=n())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),b=p[0],S=p[1];if(b&&S){var k=b.split(`
`),H=S.split(`
`);for(u=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;if(l===k.length||u===H.length)for(l=k.length-1,u=H.length-1;1<=l&&0<=u&&k[l]!==H[u];)u--;for(;1<=l&&0<=u;l--,u--)if(k[l]!==H[u]){if(l!==1||u!==1)do if(l--,u--,0>u||k[l]!==H[u]){var Y=`
`+k[l].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=l&&0<=u);break}}}finally{_i=!1,Error.prepareStackTrace=i}return(i=n?n.displayName||n.name:"")?Bt(i):""}function Dr(n,e){switch(n.tag){case 26:case 27:case 5:return Bt(n.type);case 16:return Bt("Lazy");case 13:return n.child!==e&&e!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Ci(n.type,!1);case 11:return Ci(n.type.render,!1);case 1:return Ci(n.type,!0);case 31:return Bt("Activity");default:return""}}function zr(n){try{var e="",i=null;do e+=Dr(n,i),i=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ti=Object.prototype.hasOwnProperty,ni=t.unstable_scheduleCallback,ar=t.unstable_cancelCallback,Da=t.unstable_shouldYield,Lr=t.unstable_requestPaint,ye=t.unstable_now,jr=t.unstable_getCurrentPriorityLevel,G=t.unstable_ImmediatePriority,tn=t.unstable_UserBlockingPriority,_n=t.unstable_NormalPriority,Ln=t.unstable_LowPriority,Wn=t.unstable_IdlePriority,Ke=t.log,Ut=t.unstable_setDisableYieldValue,Ue=null,ve=null;function Ye(n){if(typeof Ke=="function"&&Ut(n),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(Ue,n)}catch{}}var Kn=Math.clz32?Math.clz32:Jl,Yt=Math.log,Je=Math.LN2;function Jl(n){return n>>>=0,n===0?32:31-(Yt(n)/Je|0)|0}var lr=256,Br=262144,or=4194304;function it(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function A(n,e,i){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var S=l&134217727;return S!==0?(l=S&~p,l!==0?u=it(l):(b&=S,b!==0?u=it(b):i||(i=S&~n,i!==0&&(u=it(i))))):(S=l&~p,S!==0?u=it(S):b!==0?u=it(b):i||(i=l&~n,i!==0&&(u=it(i)))),u===0?0:e!==0&&e!==u&&(e&p)===0&&(p=u&-u,i=e&-e,p>=i||p===32&&(i&4194048)!==0)?e:u}function W(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function cn(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(){var n=or;return or<<=1,(or&62914560)===0&&(or=4194304),n}function pe(n){for(var e=[],i=0;31>i;i++)e.push(n);return e}function le(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function gn(n,e,i,l,u,p){var b=n.pendingLanes;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=i,n.entangledLanes&=i,n.errorRecoveryDisabledLanes&=i,n.shellSuspendCounter=0;var S=n.entanglements,k=n.expirationTimes,H=n.hiddenUpdates;for(i=b&~i;0<i;){var Y=31-Kn(i),X=1<<Y;S[Y]=0,k[Y]=-1;var F=H[Y];if(F!==null)for(H[Y]=null,Y=0;Y<F.length;Y++){var q=F[Y];q!==null&&(q.lane&=-536870913)}i&=~X}l!==0&&dn(n,l,0),p!==0&&u===0&&n.tag!==0&&(n.suspendedLanes|=p&~(b&~e))}function dn(n,e,i){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-Kn(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|i&261930}function An(n,e){var i=n.entangledLanes|=e;for(n=n.entanglements;i;){var l=31-Kn(i),u=1<<l;u&e|n[l]&e&&(n[l]|=e),i&=~u}}function Ee(n,e){var i=e&-e;return i=(i&42)!==0?1:me(i),(i&(n.suspendedLanes|e))!==0?0:i}function me(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ei(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ur(){var n=K.p;return n!==0?n:(n=window.event,n===void 0?32:km(n.type))}function Hr(n,e){var i=K.p;try{return K.p=n,e()}finally{K.p=i}}var Wt=Math.random().toString(36).slice(2),_e="__reactFiber$"+Wt,We="__reactProps$"+Wt,ki="__reactContainer$"+Wt,za="__reactEvents$"+Wt,no="__reactListeners$"+Wt,Ir="__reactHandles$"+Wt,eo="__reactResources$"+Wt,sr="__reactMarker$"+Wt;function La(n){delete n[_e],delete n[We],delete n[za],delete n[no],delete n[Ir]}function nt(n){var e=n[_e];if(e)return e;for(var i=n.parentNode;i;){if(e=i[ki]||i[_e]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(n=fm(n);n!==null;){if(i=n[_e])return i;n=fm(n)}return e}n=i,i=n.parentNode}return null}function ti(n){if(n=n[_e]||n[ki]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Ai(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(o(33))}function Mi(n){var e=n[eo];return e||(e=n[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ae(n){n[sr]=!0}var to=new Set,ur={};function ii(n,e){nn(n,e),nn(n+"Capture",e)}function nn(n,e){for(ur[n]=e,n=0;n<e.length;n++)to.add(e[n])}var vn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},Jn={};function Ce(n){return Ti.call(Jn,n)?!0:Ti.call(Bn,n)?!1:vn.test(n)?Jn[n]=!0:(Bn[n]=!0,!1)}function $e(n,e,i){if(Ce(e))if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+i)}}function ht(n,e,i){if(i===null)n.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+i)}}function rt(n,e,i,l){if(l===null)n.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttributeNS(e,i,""+l)}}function ce(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function mt(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function io(n,e,i){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,p=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return u.call(this)},set:function(b){i=""+b,p.call(this,b)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(b){i=""+b},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Fr(n){if(!n._valueTracker){var e=mt(n)?"checked":"value";n._valueTracker=io(n,e,""+n[e])}}function ja(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var i=e.getValue(),l="";return n&&(l=mt(n)?n.checked?"true":"false":n.value),n=l,n!==i?(e.setValue(n),!0):!1}function qr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var qs=/[\n"\\]/g;function at(n){return n.replace(qs,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ba(n,e,i,l,u,p,b,S){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),e!=null?b==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+ce(e)):n.value!==""+ce(e)&&(n.value=""+ce(e)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),e!=null?Vr(n,b,ce(e)):i!=null?Vr(n,b,ce(i)):l!=null&&n.removeAttribute("value"),u==null&&p!=null&&(n.defaultChecked=!!p),u!=null&&(n.checked=u&&typeof u!="function"&&typeof u!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+ce(S):n.removeAttribute("name")}function cr(n,e,i,l,u,p,b,S){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),e!=null||i!=null){if(!(p!=="submit"&&p!=="reset"||e!=null)){Fr(n);return}i=i!=null?""+ce(i):"",e=e!=null?""+ce(e):i,S||e===n.value||(n.value=e),n.defaultValue=e}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=S?n.checked:!!l,n.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),Fr(n)}function Vr(n,e,i){e==="number"&&qr(n.ownerDocument)===n||n.defaultValue===""+i||(n.defaultValue=""+i)}function He(n,e,i,l){if(n=n.options,e){e={};for(var u=0;u<i.length;u++)e["$"+i[u]]=!0;for(i=0;i<n.length;i++)u=e.hasOwnProperty("$"+n[i].value),n[i].selected!==u&&(n[i].selected=u),u&&l&&(n[i].defaultSelected=!0)}else{for(i=""+ce(i),e=null,u=0;u<n.length;u++){if(n[u].value===i){n[u].selected=!0,l&&(n[u].defaultSelected=!0);return}e!==null||n[u].disabled||(e=n[u])}e!==null&&(e.selected=!0)}}function ro(n,e,i){if(e!=null&&(e=""+ce(e),e!==n.value&&(n.value=e),i==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=i!=null?""+ce(i):""}function Gr(n,e,i,l){if(e==null){if(l!=null){if(i!=null)throw Error(o(92));if(Q(l)){if(1<l.length)throw Error(o(93));l=l[0]}i=l}i==null&&(i=""),e=i}i=ce(e),n.defaultValue=i,l=n.textContent,l===i&&l!==""&&l!==null&&(n.value=l),Fr(n)}function kn(n,e){if(e){var i=n.firstChild;if(i&&i===n.lastChild&&i.nodeType===3){i.nodeValue=e;return}}n.textContent=e}var ao=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Me(n,e,i){var l=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,i):typeof i!="number"||i===0||ao.has(e)?e==="float"?n.cssFloat=i:n[e]=(""+i).trim():n[e]=i+"px"}function ne(n,e,i){if(e!=null&&typeof e!="object")throw Error(o(62));if(n=n.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var u in e)l=e[u],e.hasOwnProperty(u)&&i[u]!==l&&Me(n,u,l)}else for(var p in e)e.hasOwnProperty(p)&&Me(n,p,e[p])}function Pi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(n){return Ua.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function rn(){}var yn=null;function Rn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fn=null,be=null;function Tt(n){var e=ti(n);if(e&&(n=e.stateNode)){var i=n[We]||null;n:switch(n=e.stateNode,e.type){case"input":if(Ba(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=n;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+at(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var l=i[e];if(l!==n&&l.form===n.form){var u=l[We]||null;if(!u)throw Error(o(90));Ba(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<i.length;e++)l=i[e],l.form===n.form&&ja(l)}break n;case"textarea":ro(n,i.value,i.defaultValue);break n;case"select":e=i.value,e!=null&&He(n,!!i.multiple,e,!1)}}}var Ha=!1;function lo(n,e,i){if(Ha)return n(e,i);Ha=!0;try{var l=n(e);return l}finally{if(Ha=!1,(Fn!==null||be!==null)&&($o(),Fn&&(e=Fn,n=be,be=Fn=null,Tt(e),n)))for(e=0;e<n.length;e++)Tt(n[e])}}function Ia(n,e){var i=n.stateNode;if(i===null)return null;var l=i[We]||null;if(l===null)return null;i=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(i&&typeof i!="function")throw Error(o(231,e,typeof i));return i}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=!1;if(ai)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{Vs=!1}var Ri=null,Gs=null,oo=null;function rp(){if(oo)return oo;var n,e=Gs,i=e.length,l,u="value"in Ri?Ri.value:Ri.textContent,p=u.length;for(n=0;n<i&&e[n]===u[n];n++);var b=i-n;for(l=1;l<=b&&e[i-l]===u[p-l];l++);return oo=u.slice(n,1<l?1-l:void 0)}function so(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function uo(){return!0}function ap(){return!1}function lt(n){function e(i,l,u,p,b){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(i=n[S],this[S]=i?i(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?uo:ap,this.isPropagationStopped=ap,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=lt(fr),qa=g({},fr,{view:0,detail:0}),j0=lt(qa),Ys,Ws,Va,fo=g({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Va&&(Va&&n.type==="mousemove"?(Ys=n.screenX-Va.screenX,Ws=n.screenY-Va.screenY):Ws=Ys=0,Va=n),Ys)},movementY:function(n){return"movementY"in n?n.movementY:Ws}}),lp=lt(fo),B0=g({},fo,{dataTransfer:0}),U0=lt(B0),H0=g({},qa,{relatedTarget:0}),$s=lt(H0),I0=g({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=lt(I0),q0=g({},fr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V0=lt(q0),G0=g({},fr,{data:0}),op=lt(G0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=$0[n])?!!e[n]:!1}function Xs(){return X0}var Q0=g({},qa,{key:function(n){if(n.key){var e=Y0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=so(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?W0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(n){return n.type==="keypress"?so(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?so(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Z0=lt(Q0),K0=g({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=lt(K0),J0=g({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),nb=lt(J0),eb=g({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tb=lt(eb),ib=g({},fo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rb=lt(ib),ab=g({},fr,{newState:0,oldState:0}),lb=lt(ab),ob=[9,13,27,32],Qs=ai&&"CompositionEvent"in window,Ga=null;ai&&"documentMode"in document&&(Ga=document.documentMode);var sb=ai&&"TextEvent"in window&&!Ga,up=ai&&(!Qs||Ga&&8<Ga&&11>=Ga),cp=" ",fp=!1;function pp(n,e){switch(n){case"keyup":return ob.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Yr=!1;function ub(n,e){switch(n){case"compositionend":return dp(e);case"keypress":return e.which!==32?null:(fp=!0,cp);case"textInput":return n=e.data,n===cp&&fp?null:n;default:return null}}function cb(n,e){if(Yr)return n==="compositionend"||!Qs&&pp(n,e)?(n=rp(),oo=Gs=Ri=null,Yr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return up&&e.locale!=="ko"?null:e.data;default:return null}}var fb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!fb[n.type]:e==="textarea"}function mp(n,e,i,l){Fn?be?be.push(l):be=[l]:Fn=l,e=es(e,"onChange"),0<e.length&&(i=new co("onChange","change",null,i,l),n.push({event:i,listeners:e}))}var Ya=null,Wa=null;function pb(n){Zh(n,0)}function po(n){var e=Ai(n);if(ja(e))return n}function gp(n,e){if(n==="change")return e}var yp=!1;if(ai){var Zs;if(ai){var Ks="oninput"in document;if(!Ks){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Ks=typeof bp.oninput=="function"}Zs=Ks}else Zs=!1;yp=Zs&&(!document.documentMode||9<document.documentMode)}function xp(){Ya&&(Ya.detachEvent("onpropertychange",vp),Wa=Ya=null)}function vp(n){if(n.propertyName==="value"&&po(Wa)){var e=[];mp(e,Wa,n,Rn(n)),lo(pb,e)}}function db(n,e,i){n==="focusin"?(xp(),Ya=e,Wa=i,Ya.attachEvent("onpropertychange",vp)):n==="focusout"&&xp()}function hb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return po(Wa)}function mb(n,e){if(n==="click")return po(e)}function gb(n,e){if(n==="input"||n==="change")return po(e)}function yb(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gt=typeof Object.is=="function"?Object.is:yb;function $a(n,e){if(gt(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var i=Object.keys(n),l=Object.keys(e);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!Ti.call(e,u)||!gt(n[u],e[u]))return!1}return!0}function Sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wp(n,e){var i=Sp(n);n=0;for(var l;i;){if(i.nodeType===3){if(l=n+i.textContent.length,n<=e&&l>=e)return{node:i,offset:e-n};n=l}n:{for(;i;){if(i.nextSibling){i=i.nextSibling;break n}i=i.parentNode}i=void 0}i=Sp(i)}}function Ep(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ep(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function _p(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=qr(n.document);e instanceof n.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)n=e.contentWindow;else break;e=qr(n.document)}return e}function Js(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var bb=ai&&"documentMode"in document&&11>=document.documentMode,Wr=null,nu=null,Xa=null,eu=!1;function Cp(n,e,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;eu||Wr==null||Wr!==qr(l)||(l=Wr,"selectionStart"in l&&Js(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xa&&$a(Xa,l)||(Xa=l,l=es(nu,"onSelect"),0<l.length&&(e=new co("onSelect","select",null,e,i),n.push({event:e,listeners:l}),e.target=Wr)))}function pr(n,e){var i={};return i[n.toLowerCase()]=e.toLowerCase(),i["Webkit"+n]="webkit"+e,i["Moz"+n]="moz"+e,i}var $r={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},tu={},Tp={};ai&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function dr(n){if(tu[n])return tu[n];if(!$r[n])return n;var e=$r[n],i;for(i in e)if(e.hasOwnProperty(i)&&i in Tp)return tu[n]=e[i];return n}var kp=dr("animationend"),Ap=dr("animationiteration"),Mp=dr("animationstart"),xb=dr("transitionrun"),vb=dr("transitionstart"),Sb=dr("transitioncancel"),Pp=dr("transitionend"),Np=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function Ht(n,e){Np.set(n,e),ii(e,[n])}var ho=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},kt=[],Xr=0,ru=0;function mo(){for(var n=Xr,e=ru=Xr=0;e<n;){var i=kt[e];kt[e++]=null;var l=kt[e];kt[e++]=null;var u=kt[e];kt[e++]=null;var p=kt[e];if(kt[e++]=null,l!==null&&u!==null){var b=l.pending;b===null?u.next=u:(u.next=b.next,b.next=u),l.pending=u}p!==0&&Rp(i,u,p)}}function go(n,e,i,l){kt[Xr++]=n,kt[Xr++]=e,kt[Xr++]=i,kt[Xr++]=l,ru|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function au(n,e,i,l){return go(n,e,i,l),yo(n)}function hr(n,e){return go(n,null,null,e),yo(n)}function Rp(n,e,i){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i);for(var u=!1,p=n.return;p!==null;)p.childLanes|=i,l=p.alternate,l!==null&&(l.childLanes|=i),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(u=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,u&&e!==null&&(u=31-Kn(i),n=p.hiddenUpdates,l=n[u],l===null?n[u]=[e]:l.push(e),e.lane=i|536870912),p):null}function yo(n){if(50<yl)throw yl=0,hc=null,Error(o(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Qr={};function wb(n,e,i,l){this.tag=n,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(n,e,i,l){return new wb(n,e,i,l)}function lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function li(n,e){var i=n.alternate;return i===null?(i=yt(n.tag,e,n.key,n.mode),i.elementType=n.elementType,i.type=n.type,i.stateNode=n.stateNode,i.alternate=n,n.alternate=i):(i.pendingProps=e,i.type=n.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=n.flags&65011712,i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=n.sibling,i.index=n.index,i.ref=n.ref,i.refCleanup=n.refCleanup,i}function Op(n,e){n.flags&=65011714;var i=n.alternate;return i===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=i.childLanes,n.lanes=i.lanes,n.child=i.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue,n.type=i.type,e=i.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function bo(n,e,i,l,u,p){var b=0;if(l=n,typeof n=="function")lu(n)&&(b=1);else if(typeof n=="string")b=kx(n,i,un.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case pn:return n=yt(31,i,e,u),n.elementType=pn,n.lanes=p,n;case N:return mr(i.children,u,p,e);case D:b=8,u|=24;break;case M:return n=yt(12,i,e,u|2),n.elementType=M,n.lanes=p,n;case J:return n=yt(13,i,e,u),n.elementType=J,n.lanes=p,n;case B:return n=yt(19,i,e,u),n.elementType=B,n.lanes=p,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case I:b=10;break n;case j:b=9;break n;case on:b=11;break n;case Z:b=14;break n;case hn:b=16,l=null;break n}b=29,i=Error(o(130,n===null?"null":typeof n,"")),l=null}return e=yt(b,i,e,u),e.elementType=n,e.type=l,e.lanes=p,e}function mr(n,e,i,l){return n=yt(7,n,l,e),n.lanes=i,n}function ou(n,e,i){return n=yt(6,n,null,e),n.lanes=i,n}function Dp(n){var e=yt(18,null,null,0);return e.stateNode=n,e}function su(n,e,i){return e=yt(4,n.children!==null?n.children:[],n.key,e),e.lanes=i,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var zp=new WeakMap;function At(n,e){if(typeof n=="object"&&n!==null){var i=zp.get(n);return i!==void 0?i:(e={value:n,source:e,stack:zr(e)},zp.set(n,e),e)}return{value:n,source:e,stack:zr(e)}}var Zr=[],Kr=0,xo=null,Qa=0,Mt=[],Pt=0,Oi=null,$t=1,Xt="";function oi(n,e){Zr[Kr++]=Qa,Zr[Kr++]=xo,xo=n,Qa=e}function Lp(n,e,i){Mt[Pt++]=$t,Mt[Pt++]=Xt,Mt[Pt++]=Oi,Oi=n;var l=$t;n=Xt;var u=32-Kn(l)-1;l&=~(1<<u),i+=1;var p=32-Kn(e)+u;if(30<p){var b=u-u%5;p=(l&(1<<b)-1).toString(32),l>>=b,u-=b,$t=1<<32-Kn(e)+u|i<<u|l,Xt=p+n}else $t=1<<p|i<<u|l,Xt=n}function uu(n){n.return!==null&&(oi(n,1),Lp(n,1,0))}function cu(n){for(;n===xo;)xo=Zr[--Kr],Zr[Kr]=null,Qa=Zr[--Kr],Zr[Kr]=null;for(;n===Oi;)Oi=Mt[--Pt],Mt[Pt]=null,Xt=Mt[--Pt],Mt[Pt]=null,$t=Mt[--Pt],Mt[Pt]=null}function jp(n,e){Mt[Pt++]=$t,Mt[Pt++]=Xt,Mt[Pt++]=Oi,$t=e.id,Xt=e.overflow,Oi=n}var Ie=null,de=null,Gn=!1,Di=null,Nt=!1,fu=Error(o(519));function zi(n){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(At(e,n)),fu}function Bp(n){var e=n.stateNode,i=n.type,l=n.memoizedProps;switch(e[_e]=n,e[We]=l,i){case"dialog":Hn("cancel",e),Hn("close",e);break;case"iframe":case"object":case"embed":Hn("load",e);break;case"video":case"audio":for(i=0;i<xl.length;i++)Hn(xl[i],e);break;case"source":Hn("error",e);break;case"img":case"image":case"link":Hn("error",e),Hn("load",e);break;case"details":Hn("toggle",e);break;case"input":Hn("invalid",e),cr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Hn("invalid",e);break;case"textarea":Hn("invalid",e),Gr(e,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||l.suppressHydrationWarning===!0||em(e.textContent,i)?(l.popover!=null&&(Hn("beforetoggle",e),Hn("toggle",e)),l.onScroll!=null&&Hn("scroll",e),l.onScrollEnd!=null&&Hn("scrollend",e),l.onClick!=null&&(e.onclick=rn),e=!0):e=!1,e||zi(n,!0)}function Up(n){for(Ie=n.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ie=Ie.return}}function Jr(n){if(n!==Ie)return!1;if(!Gn)return Up(n),Gn=!0,!1;var e=n.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=n.type,i=!(i!=="form"&&i!=="button")||Mc(n.type,n.memoizedProps)),i=!i),i&&de&&zi(n),Up(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));de=cm(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));de=cm(n)}else e===27?(e=de,Xi(n.type)?(n=Dc,Dc=null,de=n):de=e):de=Ie?Ot(n.stateNode.nextSibling):null;return!0}function gr(){de=Ie=null,Gn=!1}function pu(){var n=Di;return n!==null&&(ct===null?ct=n:ct.push.apply(ct,n),Di=null),n}function Za(n){Di===null?Di=[n]:Di.push(n)}var du=T(null),yr=null,si=null;function Li(n,e,i){w(du,e._currentValue),e._currentValue=i}function ui(n){n._currentValue=du.current,V(du)}function hu(n,e,i){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===i)break;n=n.return}}function mu(n,e,i,l){var u=n.child;for(u!==null&&(u.return=n);u!==null;){var p=u.dependencies;if(p!==null){var b=u.child;p=p.firstContext;n:for(;p!==null;){var S=p;p=u;for(var k=0;k<e.length;k++)if(S.context===e[k]){p.lanes|=i,S=p.alternate,S!==null&&(S.lanes|=i),hu(p.return,i,n),l||(b=null);break n}p=S.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(o(341));b.lanes|=i,p=b.alternate,p!==null&&(p.lanes|=i),hu(b,i,n),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===n){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function na(n,e,i,l){n=null;for(var u=e,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(o(387));if(b=b.memoizedProps,b!==null){var S=u.type;gt(u.pendingProps.value,b.value)||(n!==null?n.push(S):n=[S])}}else if(u===jn.current){if(b=u.alternate,b===null)throw Error(o(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(n!==null?n.push(_l):n=[_l])}u=u.return}n!==null&&mu(e,n,i,l),e.flags|=262144}function vo(n){for(n=n.firstContext;n!==null;){if(!gt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function br(n){yr=n,si=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Fe(n){return Hp(yr,n)}function So(n,e){return yr===null&&br(n),Hp(n,e)}function Hp(n,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},si===null){if(n===null)throw Error(o(308));si=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else si=si.next=e;return i}var Eb=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(i,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(i){return i()})}},_b=t.unstable_scheduleCallback,Cb=t.unstable_NormalPriority,Pe={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new Eb,data:new Map,refCount:0}}function Ka(n){n.refCount--,n.refCount===0&&_b(Cb,function(){n.controller.abort()})}var Ja=null,yu=0,ea=0,ta=null;function Tb(n,e){if(Ja===null){var i=Ja=[];yu=0,ea=vc(),ta={status:"pending",value:void 0,then:function(l){i.push(l)}}}return yu++,e.then(Ip,Ip),e}function Ip(){if(--yu===0&&Ja!==null){ta!==null&&(ta.status="fulfilled");var n=Ja;Ja=null,ea=0,ta=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function kb(n,e){var i=[],l={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var u=0;u<i.length;u++)(0,i[u])(e)},function(u){for(l.status="rejected",l.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),l}var Fp=L.S;L.S=function(n,e){Ch=ye(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Tb(n,e),Fp!==null&&Fp(n,e)};var xr=T(null);function bu(){var n=xr.current;return n!==null?n:oe.pooledCache}function wo(n,e){e===null?w(xr,xr.current):w(xr,e.pool)}function qp(){var n=bu();return n===null?null:{parent:Pe._currentValue,pool:n}}var ia=Error(o(460)),xu=Error(o(474)),Eo=Error(o(542)),_o={then:function(){}};function Vp(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Gp(n,e,i){switch(i=n[i],i===void 0?n.push(e):i!==e&&(e.then(rn,rn),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Wp(n),n;default:if(typeof e.status=="string")e.then(rn,rn);else{if(n=oe,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=l}},function(l){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Wp(n),n}throw Sr=e,ia}}function vr(n){try{var e=n._init;return e(n._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Sr=i,ia):i}}var Sr=null;function Yp(){if(Sr===null)throw Error(o(459));var n=Sr;return Sr=null,n}function Wp(n){if(n===ia||n===Eo)throw Error(o(483))}var ra=null,nl=0;function Co(n){var e=nl;return nl+=1,ra===null&&(ra=[]),Gp(ra,n,e)}function el(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function To(n,e){throw e.$$typeof===v?Error(o(525)):(n=Object.prototype.toString.call(e),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function $p(n){function e(O,P){if(n){var U=O.deletions;U===null?(O.deletions=[P],O.flags|=16):U.push(P)}}function i(O,P){if(!n)return null;for(;P!==null;)e(O,P),P=P.sibling;return null}function l(O){for(var P=new Map;O!==null;)O.key!==null?P.set(O.key,O):P.set(O.index,O),O=O.sibling;return P}function u(O,P){return O=li(O,P),O.index=0,O.sibling=null,O}function p(O,P,U){return O.index=U,n?(U=O.alternate,U!==null?(U=U.index,U<P?(O.flags|=67108866,P):U):(O.flags|=67108866,P)):(O.flags|=1048576,P)}function b(O){return n&&O.alternate===null&&(O.flags|=67108866),O}function S(O,P,U,$){return P===null||P.tag!==6?(P=ou(U,O.mode,$),P.return=O,P):(P=u(P,U),P.return=O,P)}function k(O,P,U,$){var Sn=U.type;return Sn===N?Y(O,P,U.props.children,$,U.key):P!==null&&(P.elementType===Sn||typeof Sn=="object"&&Sn!==null&&Sn.$$typeof===hn&&vr(Sn)===P.type)?(P=u(P,U.props),el(P,U),P.return=O,P):(P=bo(U.type,U.key,U.props,null,O.mode,$),el(P,U),P.return=O,P)}function H(O,P,U,$){return P===null||P.tag!==4||P.stateNode.containerInfo!==U.containerInfo||P.stateNode.implementation!==U.implementation?(P=su(U,O.mode,$),P.return=O,P):(P=u(P,U.children||[]),P.return=O,P)}function Y(O,P,U,$,Sn){return P===null||P.tag!==7?(P=mr(U,O.mode,$,Sn),P.return=O,P):(P=u(P,U),P.return=O,P)}function X(O,P,U){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=ou(""+P,O.mode,U),P.return=O,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case x:return U=bo(P.type,P.key,P.props,null,O.mode,U),el(U,P),U.return=O,U;case _:return P=su(P,O.mode,U),P.return=O,P;case hn:return P=vr(P),X(O,P,U)}if(Q(P)||sn(P))return P=mr(P,O.mode,U,null),P.return=O,P;if(typeof P.then=="function")return X(O,Co(P),U);if(P.$$typeof===I)return X(O,So(O,P),U);To(O,P)}return null}function F(O,P,U,$){var Sn=P!==null?P.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return Sn!==null?null:S(O,P,""+U,$);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return U.key===Sn?k(O,P,U,$):null;case _:return U.key===Sn?H(O,P,U,$):null;case hn:return U=vr(U),F(O,P,U,$)}if(Q(U)||sn(U))return Sn!==null?null:Y(O,P,U,$,null);if(typeof U.then=="function")return F(O,P,Co(U),$);if(U.$$typeof===I)return F(O,P,So(O,U),$);To(O,U)}return null}function q(O,P,U,$,Sn){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return O=O.get(U)||null,S(P,O,""+$,Sn);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return O=O.get($.key===null?U:$.key)||null,k(P,O,$,Sn);case _:return O=O.get($.key===null?U:$.key)||null,H(P,O,$,Sn);case hn:return $=vr($),q(O,P,U,$,Sn)}if(Q($)||sn($))return O=O.get(U)||null,Y(P,O,$,Sn,null);if(typeof $.then=="function")return q(O,P,U,Co($),Sn);if($.$$typeof===I)return q(O,P,U,So(P,$),Sn);To(P,$)}return null}function mn(O,P,U,$){for(var Sn=null,$n=null,bn=P,Dn=P=0,Vn=null;bn!==null&&Dn<U.length;Dn++){bn.index>Dn?(Vn=bn,bn=null):Vn=bn.sibling;var Xn=F(O,bn,U[Dn],$);if(Xn===null){bn===null&&(bn=Vn);break}n&&bn&&Xn.alternate===null&&e(O,bn),P=p(Xn,P,Dn),$n===null?Sn=Xn:$n.sibling=Xn,$n=Xn,bn=Vn}if(Dn===U.length)return i(O,bn),Gn&&oi(O,Dn),Sn;if(bn===null){for(;Dn<U.length;Dn++)bn=X(O,U[Dn],$),bn!==null&&(P=p(bn,P,Dn),$n===null?Sn=bn:$n.sibling=bn,$n=bn);return Gn&&oi(O,Dn),Sn}for(bn=l(bn);Dn<U.length;Dn++)Vn=q(bn,O,Dn,U[Dn],$),Vn!==null&&(n&&Vn.alternate!==null&&bn.delete(Vn.key===null?Dn:Vn.key),P=p(Vn,P,Dn),$n===null?Sn=Vn:$n.sibling=Vn,$n=Vn);return n&&bn.forEach(function(nr){return e(O,nr)}),Gn&&oi(O,Dn),Sn}function Cn(O,P,U,$){if(U==null)throw Error(o(151));for(var Sn=null,$n=null,bn=P,Dn=P=0,Vn=null,Xn=U.next();bn!==null&&!Xn.done;Dn++,Xn=U.next()){bn.index>Dn?(Vn=bn,bn=null):Vn=bn.sibling;var nr=F(O,bn,Xn.value,$);if(nr===null){bn===null&&(bn=Vn);break}n&&bn&&nr.alternate===null&&e(O,bn),P=p(nr,P,Dn),$n===null?Sn=nr:$n.sibling=nr,$n=nr,bn=Vn}if(Xn.done)return i(O,bn),Gn&&oi(O,Dn),Sn;if(bn===null){for(;!Xn.done;Dn++,Xn=U.next())Xn=X(O,Xn.value,$),Xn!==null&&(P=p(Xn,P,Dn),$n===null?Sn=Xn:$n.sibling=Xn,$n=Xn);return Gn&&oi(O,Dn),Sn}for(bn=l(bn);!Xn.done;Dn++,Xn=U.next())Xn=q(bn,O,Dn,Xn.value,$),Xn!==null&&(n&&Xn.alternate!==null&&bn.delete(Xn.key===null?Dn:Xn.key),P=p(Xn,P,Dn),$n===null?Sn=Xn:$n.sibling=Xn,$n=Xn);return n&&bn.forEach(function(Bx){return e(O,Bx)}),Gn&&oi(O,Dn),Sn}function ae(O,P,U,$){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case x:n:{for(var Sn=U.key;P!==null;){if(P.key===Sn){if(Sn=U.type,Sn===N){if(P.tag===7){i(O,P.sibling),$=u(P,U.props.children),$.return=O,O=$;break n}}else if(P.elementType===Sn||typeof Sn=="object"&&Sn!==null&&Sn.$$typeof===hn&&vr(Sn)===P.type){i(O,P.sibling),$=u(P,U.props),el($,U),$.return=O,O=$;break n}i(O,P);break}else e(O,P);P=P.sibling}U.type===N?($=mr(U.props.children,O.mode,$,U.key),$.return=O,O=$):($=bo(U.type,U.key,U.props,null,O.mode,$),el($,U),$.return=O,O=$)}return b(O);case _:n:{for(Sn=U.key;P!==null;){if(P.key===Sn)if(P.tag===4&&P.stateNode.containerInfo===U.containerInfo&&P.stateNode.implementation===U.implementation){i(O,P.sibling),$=u(P,U.children||[]),$.return=O,O=$;break n}else{i(O,P);break}else e(O,P);P=P.sibling}$=su(U,O.mode,$),$.return=O,O=$}return b(O);case hn:return U=vr(U),ae(O,P,U,$)}if(Q(U))return mn(O,P,U,$);if(sn(U)){if(Sn=sn(U),typeof Sn!="function")throw Error(o(150));return U=Sn.call(U),Cn(O,P,U,$)}if(typeof U.then=="function")return ae(O,P,Co(U),$);if(U.$$typeof===I)return ae(O,P,So(O,U),$);To(O,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,P!==null&&P.tag===6?(i(O,P.sibling),$=u(P,U),$.return=O,O=$):(i(O,P),$=ou(U,O.mode,$),$.return=O,O=$),b(O)):i(O,P)}return function(O,P,U,$){try{nl=0;var Sn=ae(O,P,U,$);return ra=null,Sn}catch(bn){if(bn===ia||bn===Eo)throw bn;var $n=yt(29,bn,null,O.mode);return $n.lanes=$,$n.return=O,$n}}}var wr=$p(!0),Xp=$p(!1),ji=!1;function vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Bi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ui(n,e,i){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Qn&2)!==0){var u=l.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e,e=yo(n),Rp(n,null,i),e}return go(n,l,e,i),yo(n)}function tl(n,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,i|=l,e.lanes=i,An(n,i)}}function wu(n,e){var i=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var b={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};p===null?u=p=b:p=p.next=b,i=i.next}while(i!==null);p===null?u=p=e:p=p.next=e}else u=p=e;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},n.updateQueue=i;return}n=i.lastBaseUpdate,n===null?i.firstBaseUpdate=e:n.next=e,i.lastBaseUpdate=e}var Eu=!1;function il(){if(Eu){var n=ta;if(n!==null)throw n}}function rl(n,e,i,l){Eu=!1;var u=n.updateQueue;ji=!1;var p=u.firstBaseUpdate,b=u.lastBaseUpdate,S=u.shared.pending;if(S!==null){u.shared.pending=null;var k=S,H=k.next;k.next=null,b===null?p=H:b.next=H,b=k;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==b&&(S===null?Y.firstBaseUpdate=H:S.next=H,Y.lastBaseUpdate=k))}if(p!==null){var X=u.baseState;b=0,Y=H=k=null,S=p;do{var F=S.lane&-536870913,q=F!==S.lane;if(q?(qn&F)===F:(l&F)===F){F!==0&&F===ea&&(Eu=!0),Y!==null&&(Y=Y.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});n:{var mn=n,Cn=S;F=e;var ae=i;switch(Cn.tag){case 1:if(mn=Cn.payload,typeof mn=="function"){X=mn.call(ae,X,F);break n}X=mn;break n;case 3:mn.flags=mn.flags&-65537|128;case 0:if(mn=Cn.payload,F=typeof mn=="function"?mn.call(ae,X,F):mn,F==null)break n;X=g({},X,F);break n;case 2:ji=!0}}F=S.callback,F!==null&&(n.flags|=64,q&&(n.flags|=8192),q=u.callbacks,q===null?u.callbacks=[F]:q.push(F))}else q={lane:F,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(H=Y=q,k=X):Y=Y.next=q,b|=F;if(S=S.next,S===null){if(S=u.shared.pending,S===null)break;q=S,S=q.next,q.next=null,u.lastBaseUpdate=q,u.shared.pending=null}}while(!0);Y===null&&(k=X),u.baseState=k,u.firstBaseUpdate=H,u.lastBaseUpdate=Y,p===null&&(u.shared.lanes=0),Vi|=b,n.lanes=b,n.memoizedState=X}}function Qp(n,e){if(typeof n!="function")throw Error(o(191,n));n.call(e)}function Zp(n,e){var i=n.callbacks;if(i!==null)for(n.callbacks=null,n=0;n<i.length;n++)Qp(i[n],e)}var aa=T(null),ko=T(0);function Kp(n,e){n=bi,w(ko,n),w(aa,e),bi=n|e.baseLanes}function _u(){w(ko,bi),w(aa,aa.current)}function Cu(){bi=ko.current,V(aa),V(ko)}var bt=T(null),Rt=null;function Hi(n){var e=n.alternate;w(Te,Te.current&1),w(bt,n),Rt===null&&(e===null||aa.current!==null||e.memoizedState!==null)&&(Rt=n)}function Tu(n){w(Te,Te.current),w(bt,n),Rt===null&&(Rt=n)}function Jp(n){n.tag===22?(w(Te,Te.current),w(bt,n),Rt===null&&(Rt=n)):Ii()}function Ii(){w(Te,Te.current),w(bt,bt.current)}function xt(n){V(bt),Rt===n&&(Rt=null),V(Te)}var Te=T(0);function Ao(n){for(var e=n;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Rc(i)||Oc(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ci=0,On=null,ie=null,Ne=null,Mo=!1,la=!1,Er=!1,Po=0,al=0,oa=null,Ab=0;function Se(){throw Error(o(321))}function ku(n,e){if(e===null)return!1;for(var i=0;i<e.length&&i<n.length;i++)if(!gt(n[i],e[i]))return!1;return!0}function Au(n,e,i,l,u,p){return ci=p,On=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,L.H=n===null||n.memoizedState===null?Ld:qu,Er=!1,p=i(l,u),Er=!1,la&&(p=ed(e,i,l,u)),nd(n),p}function nd(n){L.H=sl;var e=ie!==null&&ie.next!==null;if(ci=0,Ne=ie=On=null,Mo=!1,al=0,oa=null,e)throw Error(o(300));n===null||Re||(n=n.dependencies,n!==null&&vo(n)&&(Re=!0))}function ed(n,e,i,l){On=n;var u=0;do{if(la&&(oa=null),al=0,la=!1,25<=u)throw Error(o(301));if(u+=1,Ne=ie=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}L.H=jd,p=e(i,l)}while(la);return p}function Mb(){var n=L.H,e=n.useState()[0];return e=typeof e.then=="function"?ll(e):e,n=n.useState()[0],(ie!==null?ie.memoizedState:null)!==n&&(On.flags|=1024),e}function Mu(){var n=Po!==0;return Po=0,n}function Pu(n,e,i){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i}function Nu(n){if(Mo){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Mo=!1}ci=0,Ne=ie=On=null,la=!1,al=Po=0,oa=null}function et(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?On.memoizedState=Ne=n:Ne=Ne.next=n,Ne}function ke(){if(ie===null){var n=On.alternate;n=n!==null?n.memoizedState:null}else n=ie.next;var e=Ne===null?On.memoizedState:Ne.next;if(e!==null)Ne=e,ie=n;else{if(n===null)throw On.alternate===null?Error(o(467)):Error(o(310));ie=n,n={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},Ne===null?On.memoizedState=Ne=n:Ne=Ne.next=n}return Ne}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(n){var e=al;return al+=1,oa===null&&(oa=[]),n=Gp(oa,n,e),e=On,(Ne===null?e.memoizedState:Ne.next)===null&&(e=e.alternate,L.H=e===null||e.memoizedState===null?Ld:qu),n}function Ro(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ll(n);if(n.$$typeof===I)return Fe(n)}throw Error(o(438,String(n)))}function Ru(n){var e=null,i=On.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var l=On.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=No(),On.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(n),l=0;l<n;l++)i[l]=R;return e.index++,i}function fi(n,e){return typeof e=="function"?e(n):e}function Oo(n){var e=ke();return Ou(e,ie,n)}function Ou(n,e,i){var l=n.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=i;var u=n.baseQueue,p=l.pending;if(p!==null){if(u!==null){var b=u.next;u.next=p.next,p.next=b}e.baseQueue=u=p,l.pending=null}if(p=n.baseState,u===null)n.memoizedState=p;else{e=u.next;var S=b=null,k=null,H=e,Y=!1;do{var X=H.lane&-536870913;if(X!==H.lane?(qn&X)===X:(ci&X)===X){var F=H.revertLane;if(F===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),X===ea&&(Y=!0);else if((ci&F)===F){H=H.next,F===ea&&(Y=!0);continue}else X={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},k===null?(S=k=X,b=p):k=k.next=X,On.lanes|=F,Vi|=F;X=H.action,Er&&i(p,X),p=H.hasEagerState?H.eagerState:i(p,X)}else F={lane:X,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},k===null?(S=k=F,b=p):k=k.next=F,On.lanes|=X,Vi|=X;H=H.next}while(H!==null&&H!==e);if(k===null?b=p:k.next=S,!gt(p,n.memoizedState)&&(Re=!0,Y&&(i=ta,i!==null)))throw i;n.memoizedState=p,n.baseState=b,n.baseQueue=k,l.lastRenderedState=p}return u===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Du(n){var e=ke(),i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var l=i.dispatch,u=i.pending,p=e.memoizedState;if(u!==null){i.pending=null;var b=u=u.next;do p=n(p,b.action),b=b.next;while(b!==u);gt(p,e.memoizedState)||(Re=!0),e.memoizedState=p,e.baseQueue===null&&(e.baseState=p),i.lastRenderedState=p}return[p,l]}function td(n,e,i){var l=On,u=ke(),p=Gn;if(p){if(i===void 0)throw Error(o(407));i=i()}else i=e();var b=!gt((ie||u).memoizedState,i);if(b&&(u.memoizedState=i,Re=!0),u=u.queue,ju(ad.bind(null,l,u,n),[n]),u.getSnapshot!==e||b||Ne!==null&&Ne.memoizedState.tag&1){if(l.flags|=2048,sa(9,{destroy:void 0},rd.bind(null,l,u,i,e),null),oe===null)throw Error(o(349));p||(ci&127)!==0||id(l,e,i)}return i}function id(n,e,i){n.flags|=16384,n={getSnapshot:e,value:i},e=On.updateQueue,e===null?(e=No(),On.updateQueue=e,e.stores=[n]):(i=e.stores,i===null?e.stores=[n]:i.push(n))}function rd(n,e,i,l){e.value=i,e.getSnapshot=l,ld(e)&&od(n)}function ad(n,e,i){return i(function(){ld(e)&&od(n)})}function ld(n){var e=n.getSnapshot;n=n.value;try{var i=e();return!gt(n,i)}catch{return!0}}function od(n){var e=hr(n,2);e!==null&&ft(e,n,2)}function zu(n){var e=et();if(typeof n=="function"){var i=n;if(n=i(),Er){Ye(!0);try{i()}finally{Ye(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:n},e}function sd(n,e,i,l){return n.baseState=i,Ou(n,ie,typeof l=="function"?l:fi)}function Pb(n,e,i,l,u){if(Lo(n))throw Error(o(485));if(n=e.action,n!==null){var p={payload:u,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){p.listeners.push(b)}};L.T!==null?i(!0):p.isTransition=!1,l(p),i=e.pending,i===null?(p.next=e.pending=p,ud(e,p)):(p.next=i.next,e.pending=i.next=p)}}function ud(n,e){var i=e.action,l=e.payload,u=n.state;if(e.isTransition){var p=L.T,b={};L.T=b;try{var S=i(u,l),k=L.S;k!==null&&k(b,S),cd(n,e,S)}catch(H){Lu(n,e,H)}finally{p!==null&&b.types!==null&&(p.types=b.types),L.T=p}}else try{p=i(u,l),cd(n,e,p)}catch(H){Lu(n,e,H)}}function cd(n,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){fd(n,e,l)},function(l){return Lu(n,e,l)}):fd(n,e,i)}function fd(n,e,i){e.status="fulfilled",e.value=i,pd(e),n.state=i,e=n.pending,e!==null&&(i=e.next,i===e?n.pending=null:(i=i.next,e.next=i,ud(n,i)))}function Lu(n,e,i){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=i,pd(e),e=e.next;while(e!==l)}n.action=null}function pd(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function dd(n,e){return e}function hd(n,e){if(Gn){var i=oe.formState;if(i!==null){n:{var l=On;if(Gn){if(de){e:{for(var u=de,p=Nt;u.nodeType!==8;){if(!p){u=null;break e}if(u=Ot(u.nextSibling),u===null){u=null;break e}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){de=Ot(u.nextSibling),l=u.data==="F!";break n}}zi(l)}l=!1}l&&(e=i[0])}}return i=et(),i.memoizedState=i.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:e},i.queue=l,i=Od.bind(null,On,l),l.dispatch=i,l=zu(!1),p=Fu.bind(null,On,!1,l.queue),l=et(),u={state:e,dispatch:null,action:n,pending:null},l.queue=u,i=Pb.bind(null,On,u,p,i),u.dispatch=i,l.memoizedState=n,[e,i,!1]}function md(n){var e=ke();return gd(e,ie,n)}function gd(n,e,i){if(e=Ou(n,e,dd)[0],n=Oo(fi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=ll(e)}catch(b){throw b===ia?Eo:b}else l=e;e=ke();var u=e.queue,p=u.dispatch;return i!==e.memoizedState&&(On.flags|=2048,sa(9,{destroy:void 0},Nb.bind(null,u,i),null)),[l,p,n]}function Nb(n,e){n.action=e}function yd(n){var e=ke(),i=ie;if(i!==null)return gd(e,i,n);ke(),e=e.memoizedState,i=ke();var l=i.queue.dispatch;return i.memoizedState=n,[e,l,!1]}function sa(n,e,i,l){return n={tag:n,create:i,deps:l,inst:e,next:null},e=On.updateQueue,e===null&&(e=No(),On.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=n.next=n:(l=i.next,i.next=n,n.next=l,e.lastEffect=n),n}function bd(){return ke().memoizedState}function Do(n,e,i,l){var u=et();On.flags|=n,u.memoizedState=sa(1|e,{destroy:void 0},i,l===void 0?null:l)}function zo(n,e,i,l){var u=ke();l=l===void 0?null:l;var p=u.memoizedState.inst;ie!==null&&l!==null&&ku(l,ie.memoizedState.deps)?u.memoizedState=sa(e,p,i,l):(On.flags|=n,u.memoizedState=sa(1|e,p,i,l))}function xd(n,e){Do(8390656,8,n,e)}function ju(n,e){zo(2048,8,n,e)}function Rb(n){On.flags|=4;var e=On.updateQueue;if(e===null)e=No(),On.updateQueue=e,e.events=[n];else{var i=e.events;i===null?e.events=[n]:i.push(n)}}function vd(n){var e=ke().memoizedState;return Rb({ref:e,nextImpl:n}),function(){if((Qn&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Sd(n,e){return zo(4,2,n,e)}function wd(n,e){return zo(4,4,n,e)}function Ed(n,e){if(typeof e=="function"){n=n();var i=e(n);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function _d(n,e,i){i=i!=null?i.concat([n]):null,zo(4,4,Ed.bind(null,e,n),i)}function Bu(){}function Cd(n,e){var i=ke();e=e===void 0?null:e;var l=i.memoizedState;return e!==null&&ku(e,l[1])?l[0]:(i.memoizedState=[n,e],n)}function Td(n,e){var i=ke();e=e===void 0?null:e;var l=i.memoizedState;if(e!==null&&ku(e,l[1]))return l[0];if(l=n(),Er){Ye(!0);try{n()}finally{Ye(!1)}}return i.memoizedState=[l,e],l}function Uu(n,e,i){return i===void 0||(ci&1073741824)!==0&&(qn&261930)===0?n.memoizedState=e:(n.memoizedState=i,n=kh(),On.lanes|=n,Vi|=n,i)}function kd(n,e,i,l){return gt(i,e)?i:aa.current!==null?(n=Uu(n,i,l),gt(n,e)||(Re=!0),n):(ci&42)===0||(ci&1073741824)!==0&&(qn&261930)===0?(Re=!0,n.memoizedState=i):(n=kh(),On.lanes|=n,Vi|=n,e)}function Ad(n,e,i,l,u){var p=K.p;K.p=p!==0&&8>p?p:8;var b=L.T,S={};L.T=S,Fu(n,!1,e,i);try{var k=u(),H=L.S;if(H!==null&&H(S,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Y=kb(k,l);ol(n,e,Y,wt(n))}else ol(n,e,l,wt(n))}catch(X){ol(n,e,{then:function(){},status:"rejected",reason:X},wt())}finally{K.p=p,b!==null&&S.types!==null&&(b.types=S.types),L.T=b}}function Ob(){}function Hu(n,e,i,l){if(n.tag!==5)throw Error(o(476));var u=Md(n).queue;Ad(n,u,e,an,i===null?Ob:function(){return Pd(n),i(l)})}function Md(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:an,baseState:an,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:an},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:i},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Pd(n){var e=Md(n);e.next===null&&(e=n.alternate.memoizedState),ol(n,e.next.queue,{},wt())}function Iu(){return Fe(_l)}function Nd(){return ke().memoizedState}function Rd(){return ke().memoizedState}function Db(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var i=wt();n=Bi(i);var l=Ui(e,n,i);l!==null&&(ft(l,e,i),tl(l,e,i)),e={cache:gu()},n.payload=e;return}e=e.return}}function zb(n,e,i){var l=wt();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Lo(n)?Dd(e,i):(i=au(n,e,i,l),i!==null&&(ft(i,n,l),zd(i,e,l)))}function Od(n,e,i){var l=wt();ol(n,e,i,l)}function ol(n,e,i,l){var u={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Lo(n))Dd(e,u);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=e.lastRenderedReducer,p!==null))try{var b=e.lastRenderedState,S=p(b,i);if(u.hasEagerState=!0,u.eagerState=S,gt(S,b))return go(n,e,u,0),oe===null&&mo(),!1}catch{}if(i=au(n,e,u,l),i!==null)return ft(i,n,l),zd(i,e,l),!0}return!1}function Fu(n,e,i,l){if(l={lane:2,revertLane:vc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Lo(n)){if(e)throw Error(o(479))}else e=au(n,i,l,2),e!==null&&ft(e,n,2)}function Lo(n){var e=n.alternate;return n===On||e!==null&&e===On}function Dd(n,e){la=Mo=!0;var i=n.pending;i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e}function zd(n,e,i){if((i&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,i|=l,e.lanes=i,An(n,i)}}var sl={readContext:Fe,use:Ro,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};sl.useEffectEvent=Se;var Ld={readContext:Fe,use:Ro,useCallback:function(n,e){return et().memoizedState=[n,e===void 0?null:e],n},useContext:Fe,useEffect:xd,useImperativeHandle:function(n,e,i){i=i!=null?i.concat([n]):null,Do(4194308,4,Ed.bind(null,e,n),i)},useLayoutEffect:function(n,e){return Do(4194308,4,n,e)},useInsertionEffect:function(n,e){Do(4,2,n,e)},useMemo:function(n,e){var i=et();e=e===void 0?null:e;var l=n();if(Er){Ye(!0);try{n()}finally{Ye(!1)}}return i.memoizedState=[l,e],l},useReducer:function(n,e,i){var l=et();if(i!==void 0){var u=i(e);if(Er){Ye(!0);try{i(e)}finally{Ye(!1)}}}else u=e;return l.memoizedState=l.baseState=u,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:u},l.queue=n,n=n.dispatch=zb.bind(null,On,n),[l.memoizedState,n]},useRef:function(n){var e=et();return n={current:n},e.memoizedState=n},useState:function(n){n=zu(n);var e=n.queue,i=Od.bind(null,On,e);return e.dispatch=i,[n.memoizedState,i]},useDebugValue:Bu,useDeferredValue:function(n,e){var i=et();return Uu(i,n,e)},useTransition:function(){var n=zu(!1);return n=Ad.bind(null,On,n.queue,!0,!1),et().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,i){var l=On,u=et();if(Gn){if(i===void 0)throw Error(o(407));i=i()}else{if(i=e(),oe===null)throw Error(o(349));(qn&127)!==0||id(l,e,i)}u.memoizedState=i;var p={value:i,getSnapshot:e};return u.queue=p,xd(ad.bind(null,l,p,n),[n]),l.flags|=2048,sa(9,{destroy:void 0},rd.bind(null,l,p,i,e),null),i},useId:function(){var n=et(),e=oe.identifierPrefix;if(Gn){var i=Xt,l=$t;i=(l&~(1<<32-Kn(l)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Po++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=Ab++,e="_"+e+"r_"+i.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Iu,useFormState:hd,useActionState:hd,useOptimistic:function(n){var e=et();e.memoizedState=e.baseState=n;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Fu.bind(null,On,!0,i),i.dispatch=e,[n,e]},useMemoCache:Ru,useCacheRefresh:function(){return et().memoizedState=Db.bind(null,On)},useEffectEvent:function(n){var e=et(),i={impl:n};return e.memoizedState=i,function(){if((Qn&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},qu={readContext:Fe,use:Ro,useCallback:Cd,useContext:Fe,useEffect:ju,useImperativeHandle:_d,useInsertionEffect:Sd,useLayoutEffect:wd,useMemo:Td,useReducer:Oo,useRef:bd,useState:function(){return Oo(fi)},useDebugValue:Bu,useDeferredValue:function(n,e){var i=ke();return kd(i,ie.memoizedState,n,e)},useTransition:function(){var n=Oo(fi)[0],e=ke().memoizedState;return[typeof n=="boolean"?n:ll(n),e]},useSyncExternalStore:td,useId:Nd,useHostTransitionStatus:Iu,useFormState:md,useActionState:md,useOptimistic:function(n,e){var i=ke();return sd(i,ie,n,e)},useMemoCache:Ru,useCacheRefresh:Rd};qu.useEffectEvent=vd;var jd={readContext:Fe,use:Ro,useCallback:Cd,useContext:Fe,useEffect:ju,useImperativeHandle:_d,useInsertionEffect:Sd,useLayoutEffect:wd,useMemo:Td,useReducer:Du,useRef:bd,useState:function(){return Du(fi)},useDebugValue:Bu,useDeferredValue:function(n,e){var i=ke();return ie===null?Uu(i,n,e):kd(i,ie.memoizedState,n,e)},useTransition:function(){var n=Du(fi)[0],e=ke().memoizedState;return[typeof n=="boolean"?n:ll(n),e]},useSyncExternalStore:td,useId:Nd,useHostTransitionStatus:Iu,useFormState:yd,useActionState:yd,useOptimistic:function(n,e){var i=ke();return ie!==null?sd(i,ie,n,e):(i.baseState=n,[n,i.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:Rd};jd.useEffectEvent=vd;function Vu(n,e,i,l){e=n.memoizedState,i=i(l,e),i=i==null?e:g({},e,i),n.memoizedState=i,n.lanes===0&&(n.updateQueue.baseState=i)}var Gu={enqueueSetState:function(n,e,i){n=n._reactInternals;var l=wt(),u=Bi(l);u.payload=e,i!=null&&(u.callback=i),e=Ui(n,u,l),e!==null&&(ft(e,n,l),tl(e,n,l))},enqueueReplaceState:function(n,e,i){n=n._reactInternals;var l=wt(),u=Bi(l);u.tag=1,u.payload=e,i!=null&&(u.callback=i),e=Ui(n,u,l),e!==null&&(ft(e,n,l),tl(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var i=wt(),l=Bi(i);l.tag=2,e!=null&&(l.callback=e),e=Ui(n,l,i),e!==null&&(ft(e,n,i),tl(e,n,i))}};function Bd(n,e,i,l,u,p,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,p,b):e.prototype&&e.prototype.isPureReactComponent?!$a(i,l)||!$a(u,p):!0}function Ud(n,e,i,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,l),e.state!==n&&Gu.enqueueReplaceState(e,e.state,null)}function _r(n,e){var i=e;if("ref"in e){i={};for(var l in e)l!=="ref"&&(i[l]=e[l])}if(n=n.defaultProps){i===e&&(i=g({},i));for(var u in n)i[u]===void 0&&(i[u]=n[u])}return i}function Hd(n){ho(n)}function Id(n){console.error(n)}function Fd(n){ho(n)}function jo(n,e){try{var i=n.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function qd(n,e,i){try{var l=n.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Yu(n,e,i){return i=Bi(i),i.tag=3,i.payload={element:null},i.callback=function(){jo(n,e)},i}function Vd(n){return n=Bi(n),n.tag=3,n}function Gd(n,e,i,l){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var p=l.value;n.payload=function(){return u(p)},n.callback=function(){qd(e,i,l)}}var b=i.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){qd(e,i,l),typeof u!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function Lb(n,e,i,l,u){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=i.alternate,e!==null&&na(e,i,u,!0),i=bt.current,i!==null){switch(i.tag){case 31:case 13:return Rt===null?Xo():i.alternate===null&&we===0&&(we=3),i.flags&=-257,i.flags|=65536,i.lanes=u,l===_o?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([l]):e.add(l),yc(n,l,u)),!1;case 22:return i.flags|=65536,l===_o?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([l]):i.add(l)),yc(n,l,u)),!1}throw Error(o(435,i.tag))}return yc(n,l,u),Xo(),!1}if(Gn)return e=bt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,l!==fu&&(n=Error(o(422),{cause:l}),Za(At(n,i)))):(l!==fu&&(e=Error(o(423),{cause:l}),Za(At(e,i))),n=n.current.alternate,n.flags|=65536,u&=-u,n.lanes|=u,l=At(l,i),u=Yu(n.stateNode,l,u),wu(n,u),we!==4&&(we=2)),!1;var p=Error(o(520),{cause:l});if(p=At(p,i),gl===null?gl=[p]:gl.push(p),we!==4&&(we=2),e===null)return!0;l=At(l,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,n=u&-u,i.lanes|=n,n=Yu(i.stateNode,l,n),wu(i,n),!1;case 1:if(e=i.type,p=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gi===null||!Gi.has(p))))return i.flags|=65536,u&=-u,i.lanes|=u,u=Vd(u),Gd(u,n,i,l),wu(i,u),!1}i=i.return}while(i!==null);return!1}var Wu=Error(o(461)),Re=!1;function qe(n,e,i,l){e.child=n===null?Xp(e,null,i,l):wr(e,n.child,i,l)}function Yd(n,e,i,l,u){i=i.render;var p=e.ref;if("ref"in l){var b={};for(var S in l)S!=="ref"&&(b[S]=l[S])}else b=l;return br(e),l=Au(n,e,i,b,p,u),S=Mu(),n!==null&&!Re?(Pu(n,e,u),pi(n,e,u)):(Gn&&S&&uu(e),e.flags|=1,qe(n,e,l,u),e.child)}function Wd(n,e,i,l,u){if(n===null){var p=i.type;return typeof p=="function"&&!lu(p)&&p.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=p,$d(n,e,p,l,u)):(n=bo(i.type,null,l,e,e.mode,u),n.ref=e.ref,n.return=e,e.child=n)}if(p=n.child,!ec(n,u)){var b=p.memoizedProps;if(i=i.compare,i=i!==null?i:$a,i(b,l)&&n.ref===e.ref)return pi(n,e,u)}return e.flags|=1,n=li(p,l),n.ref=e.ref,n.return=e,e.child=n}function $d(n,e,i,l,u){if(n!==null){var p=n.memoizedProps;if($a(p,l)&&n.ref===e.ref)if(Re=!1,e.pendingProps=l=p,ec(n,u))(n.flags&131072)!==0&&(Re=!0);else return e.lanes=n.lanes,pi(n,e,u)}return $u(n,e,i,l,u)}function Xd(n,e,i,l){var u=l.children,p=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(p=p!==null?p.baseLanes|i:i,n!==null){for(l=e.child=n.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~p}else l=0,e.child=null;return Qd(n,e,p,i,l)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&wo(e,p!==null?p.cachePool:null),p!==null?Kp(e,p):_u(),Jp(e);else return l=e.lanes=536870912,Qd(n,e,p!==null?p.baseLanes|i:i,i,l)}else p!==null?(wo(e,p.cachePool),Kp(e,p),Ii(),e.memoizedState=null):(n!==null&&wo(e,null),_u(),Ii());return qe(n,e,u,i),e.child}function ul(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Qd(n,e,i,l,u){var p=bu();return p=p===null?null:{parent:Pe._currentValue,pool:p},e.memoizedState={baseLanes:i,cachePool:p},n!==null&&wo(e,null),_u(),Jp(e),n!==null&&na(n,e,l,!0),e.childLanes=u,null}function Bo(n,e){return e=Ho({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Zd(n,e,i){return wr(e,n.child,null,i),n=Bo(e,e.pendingProps),n.flags|=2,xt(e),e.memoizedState=null,n}function jb(n,e,i){var l=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(Gn){if(l.mode==="hidden")return n=Bo(e,l),e.lanes=536870912,ul(null,n);if(Tu(e),(n=de)?(n=um(n,Nt),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Oi!==null?{id:$t,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},i=Dp(n),i.return=e,e.child=i,Ie=e,de=null)):n=null,n===null)throw zi(e);return e.lanes=536870912,null}return Bo(e,l)}var p=n.memoizedState;if(p!==null){var b=p.dehydrated;if(Tu(e),u)if(e.flags&256)e.flags&=-257,e=Zd(n,e,i);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(o(558));else if(Re||na(n,e,i,!1),u=(i&n.childLanes)!==0,Re||u){if(l=oe,l!==null&&(b=Ee(l,i),b!==0&&b!==p.retryLane))throw p.retryLane=b,hr(n,b),ft(l,n,b),Wu;Xo(),e=Zd(n,e,i)}else n=p.treeContext,de=Ot(b.nextSibling),Ie=e,Gn=!0,Di=null,Nt=!1,n!==null&&jp(e,n),e=Bo(e,l),e.flags|=4096;return e}return n=li(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function Uo(n,e){var i=e.ref;if(i===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(n===null||n.ref!==i)&&(e.flags|=4194816)}}function $u(n,e,i,l,u){return br(e),i=Au(n,e,i,l,void 0,u),l=Mu(),n!==null&&!Re?(Pu(n,e,u),pi(n,e,u)):(Gn&&l&&uu(e),e.flags|=1,qe(n,e,i,u),e.child)}function Kd(n,e,i,l,u,p){return br(e),e.updateQueue=null,i=ed(e,l,i,u),nd(n),l=Mu(),n!==null&&!Re?(Pu(n,e,p),pi(n,e,p)):(Gn&&l&&uu(e),e.flags|=1,qe(n,e,i,p),e.child)}function Jd(n,e,i,l,u){if(br(e),e.stateNode===null){var p=Qr,b=i.contextType;typeof b=="object"&&b!==null&&(p=Fe(b)),p=new i(l,p),e.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Gu,e.stateNode=p,p._reactInternals=e,p=e.stateNode,p.props=l,p.state=e.memoizedState,p.refs={},vu(e),b=i.contextType,p.context=typeof b=="object"&&b!==null?Fe(b):Qr,p.state=e.memoizedState,b=i.getDerivedStateFromProps,typeof b=="function"&&(Vu(e,i,b,l),p.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(b=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),b!==p.state&&Gu.enqueueReplaceState(p,p.state,null),rl(e,l,p,u),il(),p.state=e.memoizedState),typeof p.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){p=e.stateNode;var S=e.memoizedProps,k=_r(i,S);p.props=k;var H=p.context,Y=i.contextType;b=Qr,typeof Y=="object"&&Y!==null&&(b=Fe(Y));var X=i.getDerivedStateFromProps;Y=typeof X=="function"||typeof p.getSnapshotBeforeUpdate=="function",S=e.pendingProps!==S,Y||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S||H!==b)&&Ud(e,p,l,b),ji=!1;var F=e.memoizedState;p.state=F,rl(e,l,p,u),il(),H=e.memoizedState,S||F!==H||ji?(typeof X=="function"&&(Vu(e,i,X,l),H=e.memoizedState),(k=ji||Bd(e,i,k,l,F,H,b))?(Y||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(e.flags|=4194308)):(typeof p.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=H),p.props=l,p.state=H,p.context=b,l=k):(typeof p.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{p=e.stateNode,Su(n,e),b=e.memoizedProps,Y=_r(i,b),p.props=Y,X=e.pendingProps,F=p.context,H=i.contextType,k=Qr,typeof H=="object"&&H!==null&&(k=Fe(H)),S=i.getDerivedStateFromProps,(H=typeof S=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==X||F!==k)&&Ud(e,p,l,k),ji=!1,F=e.memoizedState,p.state=F,rl(e,l,p,u),il();var q=e.memoizedState;b!==X||F!==q||ji||n!==null&&n.dependencies!==null&&vo(n.dependencies)?(typeof S=="function"&&(Vu(e,i,S,l),q=e.memoizedState),(Y=ji||Bd(e,i,Y,l,F,q,k)||n!==null&&n.dependencies!==null&&vo(n.dependencies))?(H||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,q,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,q,k)),typeof p.componentDidUpdate=="function"&&(e.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof p.componentDidUpdate!="function"||b===n.memoizedProps&&F===n.memoizedState||(e.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&F===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=q),p.props=l,p.state=q,p.context=k,l=Y):(typeof p.componentDidUpdate!="function"||b===n.memoizedProps&&F===n.memoizedState||(e.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&F===n.memoizedState||(e.flags|=1024),l=!1)}return p=l,Uo(n,e),l=(e.flags&128)!==0,p||l?(p=e.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:p.render(),e.flags|=1,n!==null&&l?(e.child=wr(e,n.child,null,u),e.child=wr(e,null,i,u)):qe(n,e,i,u),e.memoizedState=p.state,n=e.child):n=pi(n,e,u),n}function nh(n,e,i,l){return gr(),e.flags|=256,qe(n,e,i,l),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(n){return{baseLanes:n,cachePool:qp()}}function Zu(n,e,i){return n=n!==null?n.childLanes&~i:0,e&&(n|=St),n}function eh(n,e,i){var l=e.pendingProps,u=!1,p=(e.flags&128)!==0,b;if((b=p)||(b=n!==null&&n.memoizedState===null?!1:(Te.current&2)!==0),b&&(u=!0,e.flags&=-129),b=(e.flags&32)!==0,e.flags&=-33,n===null){if(Gn){if(u?Hi(e):Ii(),(n=de)?(n=um(n,Nt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:Oi!==null?{id:$t,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},i=Dp(n),i.return=e,e.child=i,Ie=e,de=null)):n=null,n===null)throw zi(e);return Oc(n)?e.lanes=32:e.lanes=536870912,null}var S=l.children;return l=l.fallback,u?(Ii(),u=e.mode,S=Ho({mode:"hidden",children:S},u),l=mr(l,u,i,null),S.return=e,l.return=e,S.sibling=l,e.child=S,l=e.child,l.memoizedState=Qu(i),l.childLanes=Zu(n,b,i),e.memoizedState=Xu,ul(null,l)):(Hi(e),Ku(e,S))}var k=n.memoizedState;if(k!==null&&(S=k.dehydrated,S!==null)){if(p)e.flags&256?(Hi(e),e.flags&=-257,e=Ju(n,e,i)):e.memoizedState!==null?(Ii(),e.child=n.child,e.flags|=128,e=null):(Ii(),S=l.fallback,u=e.mode,l=Ho({mode:"visible",children:l.children},u),S=mr(S,u,i,null),S.flags|=2,l.return=e,S.return=e,l.sibling=S,e.child=l,wr(e,n.child,null,i),l=e.child,l.memoizedState=Qu(i),l.childLanes=Zu(n,b,i),e.memoizedState=Xu,e=ul(null,l));else if(Hi(e),Oc(S)){if(b=S.nextSibling&&S.nextSibling.dataset,b)var H=b.dgst;b=H,l=Error(o(419)),l.stack="",l.digest=b,Za({value:l,source:null,stack:null}),e=Ju(n,e,i)}else if(Re||na(n,e,i,!1),b=(i&n.childLanes)!==0,Re||b){if(b=oe,b!==null&&(l=Ee(b,i),l!==0&&l!==k.retryLane))throw k.retryLane=l,hr(n,l),ft(b,n,l),Wu;Rc(S)||Xo(),e=Ju(n,e,i)}else Rc(S)?(e.flags|=192,e.child=n.child,e=null):(n=k.treeContext,de=Ot(S.nextSibling),Ie=e,Gn=!0,Di=null,Nt=!1,n!==null&&jp(e,n),e=Ku(e,l.children),e.flags|=4096);return e}return u?(Ii(),S=l.fallback,u=e.mode,k=n.child,H=k.sibling,l=li(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,H!==null?S=li(H,S):(S=mr(S,u,i,null),S.flags|=2),S.return=e,l.return=e,l.sibling=S,e.child=l,ul(null,l),l=e.child,S=n.child.memoizedState,S===null?S=Qu(i):(u=S.cachePool,u!==null?(k=Pe._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=qp(),S={baseLanes:S.baseLanes|i,cachePool:u}),l.memoizedState=S,l.childLanes=Zu(n,b,i),e.memoizedState=Xu,ul(n.child,l)):(Hi(e),i=n.child,n=i.sibling,i=li(i,{mode:"visible",children:l.children}),i.return=e,i.sibling=null,n!==null&&(b=e.deletions,b===null?(e.deletions=[n],e.flags|=16):b.push(n)),e.child=i,e.memoizedState=null,i)}function Ku(n,e){return e=Ho({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Ho(n,e){return n=yt(22,n,null,e),n.lanes=0,n}function Ju(n,e,i){return wr(e,n.child,null,i),n=Ku(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function th(n,e,i){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),hu(n.return,e,i)}function nc(n,e,i,l,u,p){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u,treeForkCount:p}:(b.isBackwards=e,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=i,b.tailMode=u,b.treeForkCount=p)}function ih(n,e,i){var l=e.pendingProps,u=l.revealOrder,p=l.tail;l=l.children;var b=Te.current,S=(b&2)!==0;if(S?(b=b&1|2,e.flags|=128):b&=1,w(Te,b),qe(n,e,l,i),l=Gn?Qa:0,!S&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&th(n,i,e);else if(n.tag===19)th(n,i,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(u){case"forwards":for(i=e.child,u=null;i!==null;)n=i.alternate,n!==null&&Ao(n)===null&&(u=i),i=i.sibling;i=u,i===null?(u=e.child,e.child=null):(u=i.sibling,i.sibling=null),nc(e,!1,u,i,p,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,u=e.child,e.child=null;u!==null;){if(n=u.alternate,n!==null&&Ao(n)===null){e.child=u;break}n=u.sibling,u.sibling=i,i=u,u=n}nc(e,!0,i,null,p,l);break;case"together":nc(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function pi(n,e,i){if(n!==null&&(e.dependencies=n.dependencies),Vi|=e.lanes,(i&e.childLanes)===0)if(n!==null){if(na(n,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(o(153));if(e.child!==null){for(n=e.child,i=li(n,n.pendingProps),e.child=i,i.return=e;n.sibling!==null;)n=n.sibling,i=i.sibling=li(n,n.pendingProps),i.return=e;i.sibling=null}return e.child}function ec(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&vo(n)))}function Bb(n,e,i){switch(e.tag){case 3:ue(e,e.stateNode.containerInfo),Li(e,Pe,n.memoizedState.cache),gr();break;case 27:case 5:Be(e);break;case 4:ue(e,e.stateNode.containerInfo);break;case 10:Li(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Tu(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Hi(e),e.flags|=128,null):(i&e.child.childLanes)!==0?eh(n,e,i):(Hi(e),n=pi(n,e,i),n!==null?n.sibling:null);Hi(e);break;case 19:var u=(n.flags&128)!==0;if(l=(i&e.childLanes)!==0,l||(na(n,e,i,!1),l=(i&e.childLanes)!==0),u){if(l)return ih(n,e,i);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),w(Te,Te.current),l)break;return null;case 22:return e.lanes=0,Xd(n,e,i,e.pendingProps);case 24:Li(e,Pe,n.memoizedState.cache)}return pi(n,e,i)}function rh(n,e,i){if(n!==null)if(n.memoizedProps!==e.pendingProps)Re=!0;else{if(!ec(n,i)&&(e.flags&128)===0)return Re=!1,Bb(n,e,i);Re=(n.flags&131072)!==0}else Re=!1,Gn&&(e.flags&1048576)!==0&&Lp(e,Qa,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=vr(e.elementType),e.type=n,typeof n=="function")lu(n)?(l=_r(n,l),e.tag=1,e=Jd(null,e,n,l,i)):(e.tag=0,e=$u(null,e,n,l,i));else{if(n!=null){var u=n.$$typeof;if(u===on){e.tag=11,e=Yd(null,e,n,l,i);break n}else if(u===Z){e.tag=14,e=Wd(null,e,n,l,i);break n}}throw e=fn(n)||n,Error(o(306,e,""))}}return e;case 0:return $u(n,e,e.type,e.pendingProps,i);case 1:return l=e.type,u=_r(l,e.pendingProps),Jd(n,e,l,u,i);case 3:n:{if(ue(e,e.stateNode.containerInfo),n===null)throw Error(o(387));l=e.pendingProps;var p=e.memoizedState;u=p.element,Su(n,e),rl(e,l,null,i);var b=e.memoizedState;if(l=b.cache,Li(e,Pe,l),l!==p.cache&&mu(e,[Pe],i,!0),il(),l=b.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:b.cache},e.updateQueue.baseState=p,e.memoizedState=p,e.flags&256){e=nh(n,e,l,i);break n}else if(l!==u){u=At(Error(o(424)),e),Za(u),e=nh(n,e,l,i);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,de=Ot(n.firstChild),Ie=e,Gn=!0,Di=null,Nt=!0,i=Xp(e,null,l,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(gr(),l===u){e=pi(n,e,i);break n}qe(n,e,l,i)}e=e.child}return e;case 26:return Uo(n,e),n===null?(i=mm(e.type,null,e.pendingProps,null))?e.memoizedState=i:Gn||(i=e.type,n=e.pendingProps,l=ts(xn.current).createElement(i),l[_e]=e,l[We]=n,Ve(l,i,n),Ae(l),e.stateNode=l):e.memoizedState=mm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Be(e),n===null&&Gn&&(l=e.stateNode=pm(e.type,e.pendingProps,xn.current),Ie=e,Nt=!0,u=de,Xi(e.type)?(Dc=u,de=Ot(l.firstChild)):de=u),qe(n,e,e.pendingProps.children,i),Uo(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&Gn&&((u=l=de)&&(l=hx(l,e.type,e.pendingProps,Nt),l!==null?(e.stateNode=l,Ie=e,de=Ot(l.firstChild),Nt=!1,u=!0):u=!1),u||zi(e)),Be(e),u=e.type,p=e.pendingProps,b=n!==null?n.memoizedProps:null,l=p.children,Mc(u,p)?l=null:b!==null&&Mc(u,b)&&(e.flags|=32),e.memoizedState!==null&&(u=Au(n,e,Mb,null,null,i),_l._currentValue=u),Uo(n,e),qe(n,e,l,i),e.child;case 6:return n===null&&Gn&&((n=i=de)&&(i=mx(i,e.pendingProps,Nt),i!==null?(e.stateNode=i,Ie=e,de=null,n=!0):n=!1),n||zi(e)),null;case 13:return eh(n,e,i);case 4:return ue(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=wr(e,null,l,i):qe(n,e,l,i),e.child;case 11:return Yd(n,e,e.type,e.pendingProps,i);case 7:return qe(n,e,e.pendingProps,i),e.child;case 8:return qe(n,e,e.pendingProps.children,i),e.child;case 12:return qe(n,e,e.pendingProps.children,i),e.child;case 10:return l=e.pendingProps,Li(e,e.type,l.value),qe(n,e,l.children,i),e.child;case 9:return u=e.type._context,l=e.pendingProps.children,br(e),u=Fe(u),l=l(u),e.flags|=1,qe(n,e,l,i),e.child;case 14:return Wd(n,e,e.type,e.pendingProps,i);case 15:return $d(n,e,e.type,e.pendingProps,i);case 19:return ih(n,e,i);case 31:return jb(n,e,i);case 22:return Xd(n,e,i,e.pendingProps);case 24:return br(e),l=Fe(Pe),n===null?(u=bu(),u===null&&(u=oe,p=gu(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=i),u=p),e.memoizedState={parent:l,cache:u},vu(e),Li(e,Pe,u)):((n.lanes&i)!==0&&(Su(n,e),rl(e,null,null,i),il()),u=n.memoizedState,p=e.memoizedState,u.parent!==l?(u={parent:l,cache:l},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Li(e,Pe,l)):(l=p.cache,Li(e,Pe,l),l!==u.cache&&mu(e,[Pe],i,!0))),qe(n,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function di(n){n.flags|=4}function tc(n,e,i,l,u){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(u&335544128)===u)if(n.stateNode.complete)n.flags|=8192;else if(Nh())n.flags|=8192;else throw Sr=_o,xu}else n.flags&=-16777217}function ah(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!vm(e))if(Nh())n.flags|=8192;else throw Sr=_o,xu}function Io(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?Mn():536870912,n.lanes|=e,pa|=e)}function cl(n,e){if(!Gn)switch(n.tailMode){case"hidden":e=n.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?n.tail=null:i.sibling=null;break;case"collapsed":i=n.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function he(n){var e=n.alternate!==null&&n.alternate.child===n.child,i=0,l=0;if(e)for(var u=n.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=l,n.childLanes=i,e}function Ub(n,e,i){var l=e.pendingProps;switch(cu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(e),null;case 1:return he(e),null;case 3:return i=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ui(Pe),Zn(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Jr(e)?di(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,pu())),he(e),null;case 26:var u=e.type,p=e.memoizedState;return n===null?(di(e),p!==null?(he(e),ah(e,p)):(he(e),tc(e,u,null,l,i))):p?p!==n.memoizedState?(di(e),he(e),ah(e,p)):(he(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&di(e),he(e),tc(e,u,n,l,i)),null;case 27:if(jt(e),i=xn.current,u=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&di(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return he(e),null}n=un.current,Jr(e)?Bp(e):(n=pm(u,l,i),e.stateNode=n,di(e))}return he(e),null;case 5:if(jt(e),u=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&di(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return he(e),null}if(p=un.current,Jr(e))Bp(e);else{var b=ts(xn.current);switch(p){case 1:p=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:p=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":p=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":p=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":p=b.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?b.createElement(u,{is:l.is}):b.createElement(u)}}p[_e]=e,p[We]=l;n:for(b=e.child;b!==null;){if(b.tag===5||b.tag===6)p.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break n;for(;b.sibling===null;){if(b.return===null||b.return===e)break n;b=b.return}b.sibling.return=b.return,b=b.sibling}e.stateNode=p;n:switch(Ve(p,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&di(e)}}return he(e),tc(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,i),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&di(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(o(166));if(n=xn.current,Jr(e)){if(n=e.stateNode,i=e.memoizedProps,l=null,u=Ie,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}n[_e]=e,n=!!(n.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||em(n.nodeValue,i)),n||zi(e,!0)}else n=ts(n).createTextNode(l),n[_e]=e,e.stateNode=n}return he(e),null;case 31:if(i=e.memoizedState,n===null||n.memoizedState!==null){if(l=Jr(e),i!==null){if(n===null){if(!l)throw Error(o(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));n[_e]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;he(e),n=!1}else i=pu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),n=!0;if(!n)return e.flags&256?(xt(e),e):(xt(e),null);if((e.flags&128)!==0)throw Error(o(558))}return he(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(u=Jr(e),l!==null&&l.dehydrated!==null){if(n===null){if(!u)throw Error(o(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[_e]=e}else gr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;he(e),u=!1}else u=pu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(xt(e),e):(xt(e),null)}return xt(e),(e.flags&128)!==0?(e.lanes=i,e):(i=l!==null,n=n!==null&&n.memoizedState!==null,i&&(l=e.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==u&&(l.flags|=2048)),i!==n&&i&&(e.child.flags|=8192),Io(e,e.updateQueue),he(e),null);case 4:return Zn(),n===null&&_c(e.stateNode.containerInfo),he(e),null;case 10:return ui(e.type),he(e),null;case 19:if(V(Te),l=e.memoizedState,l===null)return he(e),null;if(u=(e.flags&128)!==0,p=l.rendering,p===null)if(u)cl(l,!1);else{if(we!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(p=Ao(n),p!==null){for(e.flags|=128,cl(l,!1),n=p.updateQueue,e.updateQueue=n,Io(e,n),e.subtreeFlags=0,n=i,i=e.child;i!==null;)Op(i,n),i=i.sibling;return w(Te,Te.current&1|2),Gn&&oi(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&ye()>Yo&&(e.flags|=128,u=!0,cl(l,!1),e.lanes=4194304)}else{if(!u)if(n=Ao(p),n!==null){if(e.flags|=128,u=!0,n=n.updateQueue,e.updateQueue=n,Io(e,n),cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Gn)return he(e),null}else 2*ye()-l.renderingStartTime>Yo&&i!==536870912&&(e.flags|=128,u=!0,cl(l,!1),e.lanes=4194304);l.isBackwards?(p.sibling=e.child,e.child=p):(n=l.last,n!==null?n.sibling=p:e.child=p,l.last=p)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ye(),n.sibling=null,i=Te.current,w(Te,u?i&1|2:i&1),Gn&&oi(e,l.treeForkCount),n):(he(e),null);case 22:case 23:return xt(e),Cu(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(i&536870912)!==0&&(e.flags&128)===0&&(he(e),e.subtreeFlags&6&&(e.flags|=8192)):he(e),i=e.updateQueue,i!==null&&Io(e,i.retryQueue),i=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==i&&(e.flags|=2048),n!==null&&V(xr),null;case 24:return i=null,n!==null&&(i=n.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ui(Pe),he(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Hb(n,e){switch(cu(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ui(Pe),Zn(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return jt(e),null;case 31:if(e.memoizedState!==null){if(xt(e),e.alternate===null)throw Error(o(340));gr()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(xt(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(o(340));gr()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return V(Te),null;case 4:return Zn(),null;case 10:return ui(e.type),null;case 22:case 23:return xt(e),Cu(),n!==null&&V(xr),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return ui(Pe),null;case 25:return null;default:return null}}function lh(n,e){switch(cu(e),e.tag){case 3:ui(Pe),Zn();break;case 26:case 27:case 5:jt(e);break;case 4:Zn();break;case 31:e.memoizedState!==null&&xt(e);break;case 13:xt(e);break;case 19:V(Te);break;case 10:ui(e.type);break;case 22:case 23:xt(e),Cu(),n!==null&&V(xr);break;case 24:ui(Pe)}}function fl(n,e){try{var i=e.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&n)===n){l=void 0;var p=i.create,b=i.inst;l=p(),b.destroy=l}i=i.next}while(i!==u)}}catch(S){te(e,e.return,S)}}function Fi(n,e,i){try{var l=e.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var p=u.next;l=p;do{if((l.tag&n)===n){var b=l.inst,S=b.destroy;if(S!==void 0){b.destroy=void 0,u=e;var k=i,H=S;try{H()}catch(Y){te(u,k,Y)}}}l=l.next}while(l!==p)}}catch(Y){te(e,e.return,Y)}}function oh(n){var e=n.updateQueue;if(e!==null){var i=n.stateNode;try{Zp(e,i)}catch(l){te(n,n.return,l)}}}function sh(n,e,i){i.props=_r(n.type,n.memoizedProps),i.state=n.memoizedState;try{i.componentWillUnmount()}catch(l){te(n,e,l)}}function pl(n,e){try{var i=n.ref;if(i!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof i=="function"?n.refCleanup=i(l):i.current=l}}catch(u){te(n,e,u)}}function Qt(n,e){var i=n.ref,l=n.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(u){te(n,e,u)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){te(n,e,u)}else i.current=null}function uh(n){var e=n.type,i=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break n;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(u){te(n,n.return,u)}}function ic(n,e,i){try{var l=n.stateNode;sx(l,n.type,i,e),l[We]=e}catch(u){te(n,n.return,u)}}function ch(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Xi(n.type)||n.tag===4}function rc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||ch(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Xi(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ac(n,e,i){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(n,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(n),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=rn));else if(l!==4&&(l===27&&Xi(n.type)&&(i=n.stateNode,e=null),n=n.child,n!==null))for(ac(n,e,i),n=n.sibling;n!==null;)ac(n,e,i),n=n.sibling}function Fo(n,e,i){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?i.insertBefore(n,e):i.appendChild(n);else if(l!==4&&(l===27&&Xi(n.type)&&(i=n.stateNode),n=n.child,n!==null))for(Fo(n,e,i),n=n.sibling;n!==null;)Fo(n,e,i),n=n.sibling}function fh(n){var e=n.stateNode,i=n.memoizedProps;try{for(var l=n.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);Ve(e,l,i),e[_e]=n,e[We]=i}catch(p){te(n,n.return,p)}}var hi=!1,Oe=!1,lc=!1,ph=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Ib(n,e){if(n=n.containerInfo,kc=us,n=_p(n),Js(n)){if("selectionStart"in n)var i={start:n.selectionStart,end:n.selectionEnd};else n:{i=(i=n.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break n}var b=0,S=-1,k=-1,H=0,Y=0,X=n,F=null;e:for(;;){for(var q;X!==i||u!==0&&X.nodeType!==3||(S=b+u),X!==p||l!==0&&X.nodeType!==3||(k=b+l),X.nodeType===3&&(b+=X.nodeValue.length),(q=X.firstChild)!==null;)F=X,X=q;for(;;){if(X===n)break e;if(F===i&&++H===u&&(S=b),F===p&&++Y===l&&(k=b),(q=X.nextSibling)!==null)break;X=F,F=X.parentNode}X=q}i=S===-1||k===-1?null:{start:S,end:k}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ac={focusedElem:n,selectionRange:i},us=!1,Le=e;Le!==null;)if(e=Le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Le=n;else for(;Le!==null;){switch(e=Le,p=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(i=0;i<n.length;i++)u=n[i],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,i=e,u=p.memoizedProps,p=p.memoizedState,l=i.stateNode;try{var mn=_r(i.type,u);n=l.getSnapshotBeforeUpdate(mn,p),l.__reactInternalSnapshotBeforeUpdate=n}catch(Cn){te(i,i.return,Cn)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,i=n.nodeType,i===9)Nc(n);else if(i===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Nc(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(o(163))}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function dh(n,e,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:gi(n,i),l&4&&fl(5,i);break;case 1:if(gi(n,i),l&4)if(n=i.stateNode,e===null)try{n.componentDidMount()}catch(b){te(i,i.return,b)}else{var u=_r(i.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(u,e,n.__reactInternalSnapshotBeforeUpdate)}catch(b){te(i,i.return,b)}}l&64&&oh(i),l&512&&pl(i,i.return);break;case 3:if(gi(n,i),l&64&&(n=i.updateQueue,n!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Zp(n,e)}catch(b){te(i,i.return,b)}}break;case 27:e===null&&l&4&&fh(i);case 26:case 5:gi(n,i),e===null&&l&4&&uh(i),l&512&&pl(i,i.return);break;case 12:gi(n,i);break;case 31:gi(n,i),l&4&&gh(n,i);break;case 13:gi(n,i),l&4&&yh(n,i),l&64&&(n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(i=Qb.bind(null,i),gx(n,i))));break;case 22:if(l=i.memoizedState!==null||hi,!l){e=e!==null&&e.memoizedState!==null||Oe,u=hi;var p=Oe;hi=l,(Oe=e)&&!p?yi(n,i,(i.subtreeFlags&8772)!==0):gi(n,i),hi=u,Oe=p}break;case 30:break;default:gi(n,i)}}function hh(n){var e=n.alternate;e!==null&&(n.alternate=null,hh(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&La(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ge=null,ot=!1;function mi(n,e,i){for(i=i.child;i!==null;)mh(n,e,i),i=i.sibling}function mh(n,e,i){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(Ue,i)}catch{}switch(i.tag){case 26:Oe||Qt(i,e),mi(n,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Oe||Qt(i,e);var l=ge,u=ot;Xi(i.type)&&(ge=i.stateNode,ot=!1),mi(n,e,i),Sl(i.stateNode),ge=l,ot=u;break;case 5:Oe||Qt(i,e);case 6:if(l=ge,u=ot,ge=null,mi(n,e,i),ge=l,ot=u,ge!==null)if(ot)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(i.stateNode)}catch(p){te(i,e,p)}else try{ge.removeChild(i.stateNode)}catch(p){te(i,e,p)}break;case 18:ge!==null&&(ot?(n=ge,om(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,i.stateNode),va(n)):om(ge,i.stateNode));break;case 4:l=ge,u=ot,ge=i.stateNode.containerInfo,ot=!0,mi(n,e,i),ge=l,ot=u;break;case 0:case 11:case 14:case 15:Fi(2,i,e),Oe||Fi(4,i,e),mi(n,e,i);break;case 1:Oe||(Qt(i,e),l=i.stateNode,typeof l.componentWillUnmount=="function"&&sh(i,e,l)),mi(n,e,i);break;case 21:mi(n,e,i);break;case 22:Oe=(l=Oe)||i.memoizedState!==null,mi(n,e,i),Oe=l;break;default:mi(n,e,i)}}function gh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{va(n)}catch(i){te(e,e.return,i)}}}function yh(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{va(n)}catch(i){te(e,e.return,i)}}function Fb(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new ph),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new ph),e;default:throw Error(o(435,n.tag))}}function qo(n,e){var i=Fb(n);e.forEach(function(l){if(!i.has(l)){i.add(l);var u=Zb.bind(null,n,l);l.then(u,u)}})}function st(n,e){var i=e.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l],p=n,b=e,S=b;n:for(;S!==null;){switch(S.tag){case 27:if(Xi(S.type)){ge=S.stateNode,ot=!1;break n}break;case 5:ge=S.stateNode,ot=!1;break n;case 3:case 4:ge=S.stateNode.containerInfo,ot=!0;break n}S=S.return}if(ge===null)throw Error(o(160));mh(p,b,u),ge=null,ot=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)bh(e,n),e=e.sibling}var It=null;function bh(n,e){var i=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:st(e,n),ut(n),l&4&&(Fi(3,n,n.return),fl(3,n),Fi(5,n,n.return));break;case 1:st(e,n),ut(n),l&512&&(Oe||i===null||Qt(i,i.return)),l&64&&hi&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(i=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var u=It;if(st(e,n),ut(n),l&512&&(Oe||i===null||Qt(i,i.return)),l&4){var p=i!==null?i.memoizedState:null;if(l=n.memoizedState,i===null)if(l===null)if(n.stateNode===null){n:{l=n.type,i=n.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":p=u.getElementsByTagName("title")[0],(!p||p[sr]||p[_e]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(l),u.head.insertBefore(p,u.querySelector("head > title"))),Ve(p,l,i),p[_e]=n,Ae(p),l=p;break n;case"link":var b=bm("link","href",u).get(l+(i.href||""));if(b){for(var S=0;S<b.length;S++)if(p=b[S],p.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&p.getAttribute("rel")===(i.rel==null?null:i.rel)&&p.getAttribute("title")===(i.title==null?null:i.title)&&p.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){b.splice(S,1);break e}}p=u.createElement(l),Ve(p,l,i),u.head.appendChild(p);break;case"meta":if(b=bm("meta","content",u).get(l+(i.content||""))){for(S=0;S<b.length;S++)if(p=b[S],p.getAttribute("content")===(i.content==null?null:""+i.content)&&p.getAttribute("name")===(i.name==null?null:i.name)&&p.getAttribute("property")===(i.property==null?null:i.property)&&p.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&p.getAttribute("charset")===(i.charSet==null?null:i.charSet)){b.splice(S,1);break e}}p=u.createElement(l),Ve(p,l,i),u.head.appendChild(p);break;default:throw Error(o(468,l))}p[_e]=n,Ae(p),l=p}n.stateNode=l}else xm(u,n.type,n.stateNode);else n.stateNode=ym(u,l,n.memoizedProps);else p!==l?(p===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):p.count--,l===null?xm(u,n.type,n.stateNode):ym(u,l,n.memoizedProps)):l===null&&n.stateNode!==null&&ic(n,n.memoizedProps,i.memoizedProps)}break;case 27:st(e,n),ut(n),l&512&&(Oe||i===null||Qt(i,i.return)),i!==null&&l&4&&ic(n,n.memoizedProps,i.memoizedProps);break;case 5:if(st(e,n),ut(n),l&512&&(Oe||i===null||Qt(i,i.return)),n.flags&32){u=n.stateNode;try{kn(u,"")}catch(mn){te(n,n.return,mn)}}l&4&&n.stateNode!=null&&(u=n.memoizedProps,ic(n,u,i!==null?i.memoizedProps:u)),l&1024&&(lc=!0);break;case 6:if(st(e,n),ut(n),l&4){if(n.stateNode===null)throw Error(o(162));l=n.memoizedProps,i=n.stateNode;try{i.nodeValue=l}catch(mn){te(n,n.return,mn)}}break;case 3:if(as=null,u=It,It=is(e.containerInfo),st(e,n),It=u,ut(n),l&4&&i!==null&&i.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(mn){te(n,n.return,mn)}lc&&(lc=!1,xh(n));break;case 4:l=It,It=is(n.stateNode.containerInfo),st(e,n),ut(n),It=l;break;case 12:st(e,n),ut(n);break;case 31:st(e,n),ut(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,qo(n,l)));break;case 13:st(e,n),ut(n),n.child.flags&8192&&n.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Go=ye()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,qo(n,l)));break;case 22:u=n.memoizedState!==null;var k=i!==null&&i.memoizedState!==null,H=hi,Y=Oe;if(hi=H||u,Oe=Y||k,st(e,n),Oe=Y,hi=H,ut(n),l&8192)n:for(e=n.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(i===null||k||hi||Oe||Cr(n)),i=null,e=n;;){if(e.tag===5||e.tag===26){if(i===null){k=i=e;try{if(p=k.stateNode,u)b=p.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{S=k.stateNode;var X=k.memoizedProps.style,F=X!=null&&X.hasOwnProperty("display")?X.display:null;S.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(mn){te(k,k.return,mn)}}}else if(e.tag===6){if(i===null){k=e;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(mn){te(k,k.return,mn)}}}else if(e.tag===18){if(i===null){k=e;try{var q=k.stateNode;u?sm(q,!0):sm(k.stateNode,!1)}catch(mn){te(k,k.return,mn)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=n.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,qo(n,i))));break;case 19:st(e,n),ut(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,qo(n,l)));break;case 30:break;case 21:break;default:st(e,n),ut(n)}}function ut(n){var e=n.flags;if(e&2){try{for(var i,l=n.return;l!==null;){if(ch(l)){i=l;break}l=l.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var u=i.stateNode,p=rc(n);Fo(n,p,u);break;case 5:var b=i.stateNode;i.flags&32&&(kn(b,""),i.flags&=-33);var S=rc(n);Fo(n,S,b);break;case 3:case 4:var k=i.stateNode.containerInfo,H=rc(n);ac(n,H,k);break;default:throw Error(o(161))}}catch(Y){te(n,n.return,Y)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function xh(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;xh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function gi(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)dh(n,e.alternate,e),e=e.sibling}function Cr(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:Fi(4,e,e.return),Cr(e);break;case 1:Qt(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&sh(e,e.return,i),Cr(e);break;case 27:Sl(e.stateNode);case 26:case 5:Qt(e,e.return),Cr(e);break;case 22:e.memoizedState===null&&Cr(e);break;case 30:Cr(e);break;default:Cr(e)}n=n.sibling}}function yi(n,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,u=n,p=e,b=p.flags;switch(p.tag){case 0:case 11:case 15:yi(u,p,i),fl(4,p);break;case 1:if(yi(u,p,i),l=p,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(H){te(l,l.return,H)}if(l=p,u=l.updateQueue,u!==null){var S=l.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)Qp(k[u],S)}catch(H){te(l,l.return,H)}}i&&b&64&&oh(p),pl(p,p.return);break;case 27:fh(p);case 26:case 5:yi(u,p,i),i&&l===null&&b&4&&uh(p),pl(p,p.return);break;case 12:yi(u,p,i);break;case 31:yi(u,p,i),i&&b&4&&gh(u,p);break;case 13:yi(u,p,i),i&&b&4&&yh(u,p);break;case 22:p.memoizedState===null&&yi(u,p,i),pl(p,p.return);break;case 30:break;default:yi(u,p,i)}e=e.sibling}}function oc(n,e){var i=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(n!=null&&n.refCount++,i!=null&&Ka(i))}function sc(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Ka(n))}function Ft(n,e,i,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vh(n,e,i,l),e=e.sibling}function vh(n,e,i,l){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Ft(n,e,i,l),u&2048&&fl(9,e);break;case 1:Ft(n,e,i,l);break;case 3:Ft(n,e,i,l),u&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Ka(n)));break;case 12:if(u&2048){Ft(n,e,i,l),n=e.stateNode;try{var p=e.memoizedProps,b=p.id,S=p.onPostCommit;typeof S=="function"&&S(b,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(k){te(e,e.return,k)}}else Ft(n,e,i,l);break;case 31:Ft(n,e,i,l);break;case 13:Ft(n,e,i,l);break;case 23:break;case 22:p=e.stateNode,b=e.alternate,e.memoizedState!==null?p._visibility&2?Ft(n,e,i,l):dl(n,e):p._visibility&2?Ft(n,e,i,l):(p._visibility|=2,ua(n,e,i,l,(e.subtreeFlags&10256)!==0||!1)),u&2048&&oc(b,e);break;case 24:Ft(n,e,i,l),u&2048&&sc(e.alternate,e);break;default:Ft(n,e,i,l)}}function ua(n,e,i,l,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var p=n,b=e,S=i,k=l,H=b.flags;switch(b.tag){case 0:case 11:case 15:ua(p,b,S,k,u),fl(8,b);break;case 23:break;case 22:var Y=b.stateNode;b.memoizedState!==null?Y._visibility&2?ua(p,b,S,k,u):dl(p,b):(Y._visibility|=2,ua(p,b,S,k,u)),u&&H&2048&&oc(b.alternate,b);break;case 24:ua(p,b,S,k,u),u&&H&2048&&sc(b.alternate,b);break;default:ua(p,b,S,k,u)}e=e.sibling}}function dl(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=n,l=e,u=l.flags;switch(l.tag){case 22:dl(i,l),u&2048&&oc(l.alternate,l);break;case 24:dl(i,l),u&2048&&sc(l.alternate,l);break;default:dl(i,l)}e=e.sibling}}var hl=8192;function ca(n,e,i){if(n.subtreeFlags&hl)for(n=n.child;n!==null;)Sh(n,e,i),n=n.sibling}function Sh(n,e,i){switch(n.tag){case 26:ca(n,e,i),n.flags&hl&&n.memoizedState!==null&&Ax(i,It,n.memoizedState,n.memoizedProps);break;case 5:ca(n,e,i);break;case 3:case 4:var l=It;It=is(n.stateNode.containerInfo),ca(n,e,i),It=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=hl,hl=16777216,ca(n,e,i),hl=l):ca(n,e,i));break;default:ca(n,e,i)}}function wh(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ml(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var l=e[i];Le=l,_h(l,n)}wh(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eh(n),n=n.sibling}function Eh(n){switch(n.tag){case 0:case 11:case 15:ml(n),n.flags&2048&&Fi(9,n,n.return);break;case 3:ml(n);break;case 12:ml(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Vo(n)):ml(n);break;default:ml(n)}}function Vo(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var l=e[i];Le=l,_h(l,n)}wh(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Fi(8,e,e.return),Vo(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Vo(e));break;default:Vo(e)}n=n.sibling}}function _h(n,e){for(;Le!==null;){var i=Le;switch(i.tag){case 0:case 11:case 15:Fi(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ka(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,Le=l;else n:for(i=n;Le!==null;){l=Le;var u=l.sibling,p=l.return;if(hh(l),l===i){Le=null;break n}if(u!==null){u.return=p,Le=u;break n}Le=p}}}var qb={getCacheForType:function(n){var e=Fe(Pe),i=e.data.get(n);return i===void 0&&(i=n(),e.data.set(n,i)),i},cacheSignal:function(){return Fe(Pe).controller.signal}},Vb=typeof WeakMap=="function"?WeakMap:Map,Qn=0,oe=null,Un=null,qn=0,ee=0,vt=null,qi=!1,fa=!1,uc=!1,bi=0,we=0,Vi=0,Tr=0,cc=0,St=0,pa=0,gl=null,ct=null,fc=!1,Go=0,Ch=0,Yo=1/0,Wo=null,Gi=null,ze=0,Yi=null,da=null,xi=0,pc=0,dc=null,Th=null,yl=0,hc=null;function wt(){return(Qn&2)!==0&&qn!==0?qn&-qn:L.T!==null?vc():Ur()}function kh(){if(St===0)if((qn&536870912)===0||Gn){var n=Br;Br<<=1,(Br&3932160)===0&&(Br=262144),St=n}else St=536870912;return n=bt.current,n!==null&&(n.flags|=32),St}function ft(n,e,i){(n===oe&&(ee===2||ee===9)||n.cancelPendingCommit!==null)&&(ha(n,0),Wi(n,qn,St,!1)),le(n,i),((Qn&2)===0||n!==oe)&&(n===oe&&((Qn&2)===0&&(Tr|=i),we===4&&Wi(n,qn,St,!1)),Zt(n))}function Ah(n,e,i){if((Qn&6)!==0)throw Error(o(327));var l=!i&&(e&127)===0&&(e&n.expiredLanes)===0||W(n,e),u=l?Wb(n,e):gc(n,e,!0),p=l;do{if(u===0){fa&&!l&&Wi(n,e,0,!1);break}else{if(i=n.current.alternate,p&&!Gb(i)){u=gc(n,e,!1),p=!1;continue}if(u===2){if(p=e,n.errorRecoveryDisabledLanes&p)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){e=b;n:{var S=n;u=gl;var k=S.current.memoizedState.isDehydrated;if(k&&(ha(S,b).flags|=256),b=gc(S,b,!1),b!==2){if(uc&&!k){S.errorRecoveryDisabledLanes|=p,Tr|=p,u=4;break n}p=ct,ct=u,p!==null&&(ct===null?ct=p:ct.push.apply(ct,p))}u=b}if(p=!1,u!==2)continue}}if(u===1){ha(n,0),Wi(n,e,0,!0);break}n:{switch(l=n,p=u,p){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Wi(l,e,St,!qi);break n;case 2:ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(u=Go+300-ye(),10<u)){if(Wi(l,e,St,!qi),A(l,0,!0)!==0)break n;xi=e,l.timeoutHandle=am(Mh.bind(null,l,i,ct,Wo,fc,e,St,Tr,pa,qi,p,"Throttled",-0,0),u);break n}Mh(l,i,ct,Wo,fc,e,St,Tr,pa,qi,p,null,-0,0)}}break}while(!0);Zt(n)}function Mh(n,e,i,l,u,p,b,S,k,H,Y,X,F,q){if(n.timeoutHandle=-1,X=e.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},Sh(e,p,X);var mn=(p&62914560)===p?Go-ye():(p&4194048)===p?Ch-ye():0;if(mn=Mx(X,mn),mn!==null){xi=p,n.cancelPendingCommit=mn(jh.bind(null,n,e,p,i,l,u,b,S,k,Y,X,null,F,q)),Wi(n,p,b,!H);return}}jh(n,e,p,i,l,u,b,S,k)}function Gb(n){for(var e=n;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var u=i[l],p=u.getSnapshot;u=u.value;try{if(!gt(p(),u))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(n,e,i,l){e&=~cc,e&=~Tr,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var u=e;0<u;){var p=31-Kn(u),b=1<<p;l[p]=-1,u&=~b}i!==0&&dn(n,i,e)}function $o(){return(Qn&6)===0?(bl(0),!1):!0}function mc(){if(Un!==null){if(ee===0)var n=Un.return;else n=Un,si=yr=null,Nu(n),ra=null,nl=0,n=Un;for(;n!==null;)lh(n.alternate,n),n=n.return;Un=null}}function ha(n,e){var i=n.timeoutHandle;i!==-1&&(n.timeoutHandle=-1,fx(i)),i=n.cancelPendingCommit,i!==null&&(n.cancelPendingCommit=null,i()),xi=0,mc(),oe=n,Un=i=li(n.current,null),qn=e,ee=0,vt=null,qi=!1,fa=W(n,e),uc=!1,pa=St=cc=Tr=Vi=we=0,ct=gl=null,fc=!1,(e&8)!==0&&(e|=e&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=e;0<l;){var u=31-Kn(l),p=1<<u;e|=n[u],l&=~p}return bi=e,mo(),i}function Ph(n,e){On=null,L.H=sl,e===ia||e===Eo?(e=Yp(),ee=3):e===xu?(e=Yp(),ee=4):ee=e===Wu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,vt=e,Un===null&&(we=1,jo(n,At(e,n.current)))}function Nh(){var n=bt.current;return n===null?!0:(qn&4194048)===qn?Rt===null:(qn&62914560)===qn||(qn&536870912)!==0?n===Rt:!1}function Rh(){var n=L.H;return L.H=sl,n===null?sl:n}function Oh(){var n=L.A;return L.A=qb,n}function Xo(){we=4,qi||(qn&4194048)!==qn&&bt.current!==null||(fa=!0),(Vi&134217727)===0&&(Tr&134217727)===0||oe===null||Wi(oe,qn,St,!1)}function gc(n,e,i){var l=Qn;Qn|=2;var u=Rh(),p=Oh();(oe!==n||qn!==e)&&(Wo=null,ha(n,e)),e=!1;var b=we;n:do try{if(ee!==0&&Un!==null){var S=Un,k=vt;switch(ee){case 8:mc(),b=6;break n;case 3:case 2:case 9:case 6:bt.current===null&&(e=!0);var H=ee;if(ee=0,vt=null,ma(n,S,k,H),i&&fa){b=0;break n}break;default:H=ee,ee=0,vt=null,ma(n,S,k,H)}}Yb(),b=we;break}catch(Y){Ph(n,Y)}while(!0);return e&&n.shellSuspendCounter++,si=yr=null,Qn=l,L.H=u,L.A=p,Un===null&&(oe=null,qn=0,mo()),b}function Yb(){for(;Un!==null;)Dh(Un)}function Wb(n,e){var i=Qn;Qn|=2;var l=Rh(),u=Oh();oe!==n||qn!==e?(Wo=null,Yo=ye()+500,ha(n,e)):fa=W(n,e);n:do try{if(ee!==0&&Un!==null){e=Un;var p=vt;e:switch(ee){case 1:ee=0,vt=null,ma(n,e,p,1);break;case 2:case 9:if(Vp(p)){ee=0,vt=null,zh(e);break}e=function(){ee!==2&&ee!==9||oe!==n||(ee=7),Zt(n)},p.then(e,e);break n;case 3:ee=7;break n;case 4:ee=5;break n;case 7:Vp(p)?(ee=0,vt=null,zh(e)):(ee=0,vt=null,ma(n,e,p,7));break;case 5:var b=null;switch(Un.tag){case 26:b=Un.memoizedState;case 5:case 27:var S=Un;if(b?vm(b):S.stateNode.complete){ee=0,vt=null;var k=S.sibling;if(k!==null)Un=k;else{var H=S.return;H!==null?(Un=H,Qo(H)):Un=null}break e}}ee=0,vt=null,ma(n,e,p,5);break;case 6:ee=0,vt=null,ma(n,e,p,6);break;case 8:mc(),we=6;break n;default:throw Error(o(462))}}$b();break}catch(Y){Ph(n,Y)}while(!0);return si=yr=null,L.H=l,L.A=u,Qn=i,Un!==null?0:(oe=null,qn=0,mo(),we)}function $b(){for(;Un!==null&&!Da();)Dh(Un)}function Dh(n){var e=rh(n.alternate,n,bi);n.memoizedProps=n.pendingProps,e===null?Qo(n):Un=e}function zh(n){var e=n,i=e.alternate;switch(e.tag){case 15:case 0:e=Kd(i,e,e.pendingProps,e.type,void 0,qn);break;case 11:e=Kd(i,e,e.pendingProps,e.type.render,e.ref,qn);break;case 5:Nu(e);default:lh(i,e),e=Un=Op(e,bi),e=rh(i,e,bi)}n.memoizedProps=n.pendingProps,e===null?Qo(n):Un=e}function ma(n,e,i,l){si=yr=null,Nu(e),ra=null,nl=0;var u=e.return;try{if(Lb(n,u,e,i,qn)){we=1,jo(n,At(i,n.current)),Un=null;return}}catch(p){if(u!==null)throw Un=u,p;we=1,jo(n,At(i,n.current)),Un=null;return}e.flags&32768?(Gn||l===1?n=!0:fa||(qn&536870912)!==0?n=!1:(qi=n=!0,(l===2||l===9||l===3||l===6)&&(l=bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Lh(e,n)):Qo(e)}function Qo(n){var e=n;do{if((e.flags&32768)!==0){Lh(e,qi);return}n=e.return;var i=Ub(e.alternate,e,bi);if(i!==null){Un=i;return}if(e=e.sibling,e!==null){Un=e;return}Un=e=n}while(e!==null);we===0&&(we=5)}function Lh(n,e){do{var i=Hb(n.alternate,n);if(i!==null){i.flags&=32767,Un=i;return}if(i=n.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(n=n.sibling,n!==null)){Un=n;return}Un=n=i}while(n!==null);we=6,Un=null}function jh(n,e,i,l,u,p,b,S,k){n.cancelPendingCommit=null;do Zo();while(ze!==0);if((Qn&6)!==0)throw Error(o(327));if(e!==null){if(e===n.current)throw Error(o(177));if(p=e.lanes|e.childLanes,p|=ru,gn(n,i,p,b,S,k),n===oe&&(Un=oe=null,qn=0),da=e,Yi=n,xi=i,pc=p,dc=u,Th=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Kb(_n,function(){return Fh(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,u=K.p,K.p=2,b=Qn,Qn|=4;try{Ib(n,e,i)}finally{Qn=b,K.p=u,L.T=l}}ze=1,Bh(),Uh(),Hh()}}function Bh(){if(ze===1){ze=0;var n=Yi,e=da,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=L.T,L.T=null;var l=K.p;K.p=2;var u=Qn;Qn|=4;try{bh(e,n);var p=Ac,b=_p(n.containerInfo),S=p.focusedElem,k=p.selectionRange;if(b!==S&&S&&S.ownerDocument&&Ep(S.ownerDocument.documentElement,S)){if(k!==null&&Js(S)){var H=k.start,Y=k.end;if(Y===void 0&&(Y=H),"selectionStart"in S)S.selectionStart=H,S.selectionEnd=Math.min(Y,S.value.length);else{var X=S.ownerDocument||document,F=X&&X.defaultView||window;if(F.getSelection){var q=F.getSelection(),mn=S.textContent.length,Cn=Math.min(k.start,mn),ae=k.end===void 0?Cn:Math.min(k.end,mn);!q.extend&&Cn>ae&&(b=ae,ae=Cn,Cn=b);var O=wp(S,Cn),P=wp(S,ae);if(O&&P&&(q.rangeCount!==1||q.anchorNode!==O.node||q.anchorOffset!==O.offset||q.focusNode!==P.node||q.focusOffset!==P.offset)){var U=X.createRange();U.setStart(O.node,O.offset),q.removeAllRanges(),Cn>ae?(q.addRange(U),q.extend(P.node,P.offset)):(U.setEnd(P.node,P.offset),q.addRange(U))}}}}for(X=[],q=S;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<X.length;S++){var $=X[S];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}us=!!kc,Ac=kc=null}finally{Qn=u,K.p=l,L.T=i}}n.current=e,ze=2}}function Uh(){if(ze===2){ze=0;var n=Yi,e=da,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=L.T,L.T=null;var l=K.p;K.p=2;var u=Qn;Qn|=4;try{dh(n,e.alternate,e)}finally{Qn=u,K.p=l,L.T=i}}ze=3}}function Hh(){if(ze===4||ze===3){ze=0,Lr();var n=Yi,e=da,i=xi,l=Th;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ze=5:(ze=0,da=Yi=null,Ih(n,n.pendingLanes));var u=n.pendingLanes;if(u===0&&(Gi=null),ei(i),e=e.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(Ue,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=L.T,u=K.p,K.p=2,L.T=null;try{for(var p=n.onRecoverableError,b=0;b<l.length;b++){var S=l[b];p(S.value,{componentStack:S.stack})}}finally{L.T=e,K.p=u}}(xi&3)!==0&&Zo(),Zt(n),u=n.pendingLanes,(i&261930)!==0&&(u&42)!==0?n===hc?yl++:(yl=0,hc=n):yl=0,bl(0)}}function Ih(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Ka(e)))}function Zo(){return Bh(),Uh(),Hh(),Fh()}function Fh(){if(ze!==5)return!1;var n=Yi,e=pc;pc=0;var i=ei(xi),l=L.T,u=K.p;try{K.p=32>i?32:i,L.T=null,i=dc,dc=null;var p=Yi,b=xi;if(ze=0,da=Yi=null,xi=0,(Qn&6)!==0)throw Error(o(331));var S=Qn;if(Qn|=4,Eh(p.current),vh(p,p.current,b,i),Qn=S,bl(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(Ue,p)}catch{}return!0}finally{K.p=u,L.T=l,Ih(n,e)}}function qh(n,e,i){e=At(i,e),e=Yu(n.stateNode,e,2),n=Ui(n,e,2),n!==null&&(le(n,2),Zt(n))}function te(n,e,i){if(n.tag===3)qh(n,n,i);else for(;e!==null;){if(e.tag===3){qh(e,n,i);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Gi===null||!Gi.has(l))){n=At(i,n),i=Vd(2),l=Ui(e,i,2),l!==null&&(Gd(i,l,e,n),le(l,2),Zt(l));break}}e=e.return}}function yc(n,e,i){var l=n.pingCache;if(l===null){l=n.pingCache=new Vb;var u=new Set;l.set(e,u)}else u=l.get(e),u===void 0&&(u=new Set,l.set(e,u));u.has(i)||(uc=!0,u.add(i),n=Xb.bind(null,n,e,i),e.then(n,n))}function Xb(n,e,i){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&i,n.warmLanes&=~i,oe===n&&(qn&i)===i&&(we===4||we===3&&(qn&62914560)===qn&&300>ye()-Go?(Qn&2)===0&&ha(n,0):cc|=i,pa===qn&&(pa=0)),Zt(n)}function Vh(n,e){e===0&&(e=Mn()),n=hr(n,e),n!==null&&(le(n,e),Zt(n))}function Qb(n){var e=n.memoizedState,i=0;e!==null&&(i=e.retryLane),Vh(n,i)}function Zb(n,e){var i=0;switch(n.tag){case 31:case 13:var l=n.stateNode,u=n.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(e),Vh(n,i)}function Kb(n,e){return ni(n,e)}var Ko=null,ga=null,bc=!1,Jo=!1,xc=!1,$i=0;function Zt(n){n!==ga&&n.next===null&&(ga===null?Ko=ga=n:ga=ga.next=n),Jo=!0,bc||(bc=!0,nx())}function bl(n,e){if(!xc&&Jo){xc=!0;do for(var i=!1,l=Ko;l!==null;){if(n!==0){var u=l.pendingLanes;if(u===0)var p=0;else{var b=l.suspendedLanes,S=l.pingedLanes;p=(1<<31-Kn(42|n)+1)-1,p&=u&~(b&~S),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(i=!0,$h(l,p))}else p=qn,p=A(l,l===oe?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||W(l,p)||(i=!0,$h(l,p));l=l.next}while(i);xc=!1}}function Jb(){Gh()}function Gh(){Jo=bc=!1;var n=0;$i!==0&&cx()&&(n=$i);for(var e=ye(),i=null,l=Ko;l!==null;){var u=l.next,p=Yh(l,e);p===0?(l.next=null,i===null?Ko=u:i.next=u,u===null&&(ga=i)):(i=l,(n!==0||(p&3)!==0)&&(Jo=!0)),l=u}ze!==0&&ze!==5||bl(n),$i!==0&&($i=0)}function Yh(n,e){for(var i=n.suspendedLanes,l=n.pingedLanes,u=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var b=31-Kn(p),S=1<<b,k=u[b];k===-1?((S&i)===0||(S&l)!==0)&&(u[b]=cn(S,e)):k<=e&&(n.expiredLanes|=S),p&=~S}if(e=oe,i=qn,i=A(n,n===e?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,i===0||n===e&&(ee===2||ee===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&ar(l),n.callbackNode=null,n.callbackPriority=0;if((i&3)===0||W(n,i)){if(e=i&-i,e===n.callbackPriority)return e;switch(l!==null&&ar(l),ei(i)){case 2:case 8:i=tn;break;case 32:i=_n;break;case 268435456:i=Wn;break;default:i=_n}return l=Wh.bind(null,n),i=ni(i,l),n.callbackPriority=e,n.callbackNode=i,e}return l!==null&&l!==null&&ar(l),n.callbackPriority=2,n.callbackNode=null,2}function Wh(n,e){if(ze!==0&&ze!==5)return n.callbackNode=null,n.callbackPriority=0,null;var i=n.callbackNode;if(Zo()&&n.callbackNode!==i)return null;var l=qn;return l=A(n,n===oe?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Ah(n,l,e),Yh(n,ye()),n.callbackNode!=null&&n.callbackNode===i?Wh.bind(null,n):null)}function $h(n,e){if(Zo())return null;Ah(n,e,!0)}function nx(){px(function(){(Qn&6)!==0?ni(G,Jb):Gh()})}function vc(){if($i===0){var n=ea;n===0&&(n=lr,lr<<=1,(lr&261888)===0&&(lr=256)),$i=n}return $i}function Xh(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ni(""+n)}function Qh(n,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,n.id&&i.setAttribute("form",n.id),e.parentNode.insertBefore(i,e),n=new FormData(n),i.parentNode.removeChild(i),n}function ex(n,e,i,l,u){if(e==="submit"&&i&&i.stateNode===u){var p=Xh((u[We]||null).action),b=l.submitter;b&&(e=(e=b[We]||null)?Xh(e.formAction):b.getAttribute("formAction"),e!==null&&(p=e,b=null));var S=new co("action","action",null,l,u);n.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($i!==0){var k=b?Qh(u,b):new FormData(u);Hu(i,{pending:!0,data:k,method:u.method,action:p},null,k)}}else typeof p=="function"&&(S.preventDefault(),k=b?Qh(u,b):new FormData(u),Hu(i,{pending:!0,data:k,method:u.method,action:p},p,k))},currentTarget:u}]})}}for(var Sc=0;Sc<iu.length;Sc++){var wc=iu[Sc],tx=wc.toLowerCase(),ix=wc[0].toUpperCase()+wc.slice(1);Ht(tx,"on"+ix)}Ht(kp,"onAnimationEnd"),Ht(Ap,"onAnimationIteration"),Ht(Mp,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(xb,"onTransitionRun"),Ht(vb,"onTransitionStart"),Ht(Sb,"onTransitionCancel"),Ht(Pp,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function Zh(n,e){e=(e&4)!==0;for(var i=0;i<n.length;i++){var l=n[i],u=l.event;l=l.listeners;n:{var p=void 0;if(e)for(var b=l.length-1;0<=b;b--){var S=l[b],k=S.instance,H=S.currentTarget;if(S=S.listener,k!==p&&u.isPropagationStopped())break n;p=S,u.currentTarget=H;try{p(u)}catch(Y){ho(Y)}u.currentTarget=null,p=k}else for(b=0;b<l.length;b++){if(S=l[b],k=S.instance,H=S.currentTarget,S=S.listener,k!==p&&u.isPropagationStopped())break n;p=S,u.currentTarget=H;try{p(u)}catch(Y){ho(Y)}u.currentTarget=null,p=k}}}}function Hn(n,e){var i=e[za];i===void 0&&(i=e[za]=new Set);var l=n+"__bubble";i.has(l)||(Kh(e,n,2,!1),i.add(l))}function Ec(n,e,i){var l=0;e&&(l|=4),Kh(i,n,l,e)}var ns="_reactListening"+Math.random().toString(36).slice(2);function _c(n){if(!n[ns]){n[ns]=!0,to.forEach(function(i){i!=="selectionchange"&&(rx.has(i)||Ec(i,!1,n),Ec(i,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ns]||(e[ns]=!0,Ec("selectionchange",!1,e))}}function Kh(n,e,i,l){switch(km(e)){case 2:var u=Rx;break;case 8:u=Ox;break;default:u=Uc}i=u.bind(null,e,i,n),u=void 0,!Vs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),l?u!==void 0?n.addEventListener(e,i,{capture:!0,passive:u}):n.addEventListener(e,i,!0):u!==void 0?n.addEventListener(e,i,{passive:u}):n.addEventListener(e,i,!1)}function Cc(n,e,i,l,u){var p=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var S=l.stateNode.containerInfo;if(S===u)break;if(b===4)for(b=l.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;S!==null;){if(b=nt(S),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){l=p=b;continue n}S=S.parentNode}}l=l.return}lo(function(){var H=p,Y=Rn(i),X=[];n:{var F=Np.get(n);if(F!==void 0){var q=co,mn=n;switch(n){case"keypress":if(so(i)===0)break n;case"keydown":case"keyup":q=Z0;break;case"focusin":mn="focus",q=$s;break;case"focusout":mn="blur",q=$s;break;case"beforeblur":case"afterblur":q=$s;break;case"click":if(i.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=nb;break;case kp:case Ap:case Mp:q=F0;break;case Pp:q=tb;break;case"scroll":case"scrollend":q=j0;break;case"wheel":q=rb;break;case"copy":case"cut":case"paste":q=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=sp;break;case"toggle":case"beforetoggle":q=lb}var Cn=(e&4)!==0,ae=!Cn&&(n==="scroll"||n==="scrollend"),O=Cn?F!==null?F+"Capture":null:F;Cn=[];for(var P=H,U;P!==null;){var $=P;if(U=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||U===null||O===null||($=Ia(P,O),$!=null&&Cn.push(vl(P,$,U))),ae)break;P=P.return}0<Cn.length&&(F=new q(F,mn,null,i,Y),X.push({event:F,listeners:Cn}))}}if((e&7)===0){n:{if(F=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",F&&i!==yn&&(mn=i.relatedTarget||i.fromElement)&&(nt(mn)||mn[ki]))break n;if((q||F)&&(F=Y.window===Y?Y:(F=Y.ownerDocument)?F.defaultView||F.parentWindow:window,q?(mn=i.relatedTarget||i.toElement,q=H,mn=mn?nt(mn):null,mn!==null&&(ae=c(mn),Cn=mn.tag,mn!==ae||Cn!==5&&Cn!==27&&Cn!==6)&&(mn=null)):(q=null,mn=H),q!==mn)){if(Cn=lp,$="onMouseLeave",O="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(Cn=sp,$="onPointerLeave",O="onPointerEnter",P="pointer"),ae=q==null?F:Ai(q),U=mn==null?F:Ai(mn),F=new Cn($,P+"leave",q,i,Y),F.target=ae,F.relatedTarget=U,$=null,nt(Y)===H&&(Cn=new Cn(O,P+"enter",mn,i,Y),Cn.target=U,Cn.relatedTarget=ae,$=Cn),ae=$,q&&mn)e:{for(Cn=ax,O=q,P=mn,U=0,$=O;$;$=Cn($))U++;$=0;for(var Sn=P;Sn;Sn=Cn(Sn))$++;for(;0<U-$;)O=Cn(O),U--;for(;0<$-U;)P=Cn(P),$--;for(;U--;){if(O===P||P!==null&&O===P.alternate){Cn=O;break e}O=Cn(O),P=Cn(P)}Cn=null}else Cn=null;q!==null&&Jh(X,F,q,Cn,!1),mn!==null&&ae!==null&&Jh(X,ae,mn,Cn,!0)}}n:{if(F=H?Ai(H):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var $n=gp;else if(hp(F))if(yp)$n=gb;else{$n=hb;var bn=db}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?H&&Pi(H.elementType)&&($n=gp):$n=mb;if($n&&($n=$n(n,H))){mp(X,$n,i,Y);break n}bn&&bn(n,F,H),n==="focusout"&&H&&F.type==="number"&&H.memoizedProps.value!=null&&Vr(F,"number",F.value)}switch(bn=H?Ai(H):window,n){case"focusin":(hp(bn)||bn.contentEditable==="true")&&(Wr=bn,nu=H,Xa=null);break;case"focusout":Xa=nu=Wr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Cp(X,i,Y);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":Cp(X,i,Y)}var Dn;if(Qs)n:{switch(n){case"compositionstart":var Vn="onCompositionStart";break n;case"compositionend":Vn="onCompositionEnd";break n;case"compositionupdate":Vn="onCompositionUpdate";break n}Vn=void 0}else Yr?pp(n,i)&&(Vn="onCompositionEnd"):n==="keydown"&&i.keyCode===229&&(Vn="onCompositionStart");Vn&&(up&&i.locale!=="ko"&&(Yr||Vn!=="onCompositionStart"?Vn==="onCompositionEnd"&&Yr&&(Dn=rp()):(Ri=Y,Gs="value"in Ri?Ri.value:Ri.textContent,Yr=!0)),bn=es(H,Vn),0<bn.length&&(Vn=new op(Vn,n,null,i,Y),X.push({event:Vn,listeners:bn}),Dn?Vn.data=Dn:(Dn=dp(i),Dn!==null&&(Vn.data=Dn)))),(Dn=sb?ub(n,i):cb(n,i))&&(Vn=es(H,"onBeforeInput"),0<Vn.length&&(bn=new op("onBeforeInput","beforeinput",null,i,Y),X.push({event:bn,listeners:Vn}),bn.data=Dn)),ex(X,n,H,i,Y)}Zh(X,e)})}function vl(n,e,i){return{instance:n,listener:e,currentTarget:i}}function es(n,e){for(var i=e+"Capture",l=[];n!==null;){var u=n,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=Ia(n,i),u!=null&&l.unshift(vl(n,u,p)),u=Ia(n,e),u!=null&&l.push(vl(n,u,p))),n.tag===3)return l;n=n.return}return[]}function ax(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Jh(n,e,i,l,u){for(var p=e._reactName,b=[];i!==null&&i!==l;){var S=i,k=S.alternate,H=S.stateNode;if(S=S.tag,k!==null&&k===l)break;S!==5&&S!==26&&S!==27||H===null||(k=H,u?(H=Ia(i,p),H!=null&&b.unshift(vl(i,H,k))):u||(H=Ia(i,p),H!=null&&b.push(vl(i,H,k)))),i=i.return}b.length!==0&&n.push({event:e,listeners:b})}var lx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function nm(n){return(typeof n=="string"?n:""+n).replace(lx,`
`).replace(ox,"")}function em(n,e){return e=nm(e),nm(n)===e}function re(n,e,i,l,u,p){switch(i){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||kn(n,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&kn(n,""+l);break;case"className":ht(n,"class",l);break;case"tabIndex":ht(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ht(n,i,l);break;case"style":ne(n,l,p);break;case"data":if(e!=="object"){ht(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||i!=="href")){n.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(i);break}l=Ni(""+l),n.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(i==="formAction"?(e!=="input"&&re(n,e,"name",u.name,u,null),re(n,e,"formEncType",u.formEncType,u,null),re(n,e,"formMethod",u.formMethod,u,null),re(n,e,"formTarget",u.formTarget,u,null)):(re(n,e,"encType",u.encType,u,null),re(n,e,"method",u.method,u,null),re(n,e,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(i);break}l=Ni(""+l),n.setAttribute(i,l);break;case"onClick":l!=null&&(n.onclick=rn);break;case"onScroll":l!=null&&Hn("scroll",n);break;case"onScrollEnd":l!=null&&Hn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=i}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}i=Ni(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(i,""+l):n.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(i,""):n.removeAttribute(i);break;case"capture":case"download":l===!0?n.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(i,l):n.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(i,l):n.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(i):n.setAttribute(i,l);break;case"popover":Hn("beforetoggle",n),Hn("toggle",n),$e(n,"popover",l);break;case"xlinkActuate":rt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":rt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":rt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":rt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":rt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":rt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":rt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":rt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":rt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$e(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ri.get(i)||i,$e(n,i,l))}}function Tc(n,e,i,l,u,p){switch(i){case"style":ne(n,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=i}}break;case"children":typeof l=="string"?kn(n,l):(typeof l=="number"||typeof l=="bigint")&&kn(n,""+l);break;case"onScroll":l!=null&&Hn("scroll",n);break;case"onScrollEnd":l!=null&&Hn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=rn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ur.hasOwnProperty(i))n:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),e=i.slice(2,u?i.length-7:void 0),p=n[We]||null,p=p!=null?p[i]:null,typeof p=="function"&&n.removeEventListener(e,p,u),typeof l=="function")){typeof p!="function"&&p!==null&&(i in n?n[i]=null:n.hasAttribute(i)&&n.removeAttribute(i)),n.addEventListener(e,l,u);break n}i in n?n[i]=l:l===!0?n.setAttribute(i,""):$e(n,i,l)}}}function Ve(n,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Hn("error",n),Hn("load",n);var l=!1,u=!1,p;for(p in i)if(i.hasOwnProperty(p)){var b=i[p];if(b!=null)switch(p){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:re(n,e,p,b,i,null)}}u&&re(n,e,"srcSet",i.srcSet,i,null),l&&re(n,e,"src",i.src,i,null);return;case"input":Hn("invalid",n);var S=p=b=u=null,k=null,H=null;for(l in i)if(i.hasOwnProperty(l)){var Y=i[l];if(Y!=null)switch(l){case"name":u=Y;break;case"type":b=Y;break;case"checked":k=Y;break;case"defaultChecked":H=Y;break;case"value":p=Y;break;case"defaultValue":S=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,e));break;default:re(n,e,l,Y,i,null)}}cr(n,p,S,k,H,b,u,!1);return;case"select":Hn("invalid",n),l=b=p=null;for(u in i)if(i.hasOwnProperty(u)&&(S=i[u],S!=null))switch(u){case"value":p=S;break;case"defaultValue":b=S;break;case"multiple":l=S;default:re(n,e,u,S,i,null)}e=p,i=b,n.multiple=!!l,e!=null?He(n,!!l,e,!1):i!=null&&He(n,!!l,i,!0);return;case"textarea":Hn("invalid",n),p=u=l=null;for(b in i)if(i.hasOwnProperty(b)&&(S=i[b],S!=null))switch(b){case"value":l=S;break;case"defaultValue":u=S;break;case"children":p=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(91));break;default:re(n,e,b,S,i,null)}Gr(n,l,u,p);return;case"option":for(k in i)i.hasOwnProperty(k)&&(l=i[k],l!=null)&&(k==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":re(n,e,k,l,i,null));return;case"dialog":Hn("beforetoggle",n),Hn("toggle",n),Hn("cancel",n),Hn("close",n);break;case"iframe":case"object":Hn("load",n);break;case"video":case"audio":for(l=0;l<xl.length;l++)Hn(xl[l],n);break;case"image":Hn("error",n),Hn("load",n);break;case"details":Hn("toggle",n);break;case"embed":case"source":case"link":Hn("error",n),Hn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in i)if(i.hasOwnProperty(H)&&(l=i[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:re(n,e,H,l,i,null)}return;default:if(Pi(e)){for(Y in i)i.hasOwnProperty(Y)&&(l=i[Y],l!==void 0&&Tc(n,e,Y,l,i,void 0));return}}for(S in i)i.hasOwnProperty(S)&&(l=i[S],l!=null&&re(n,e,S,l,i,null))}function sx(n,e,i,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,b=null,S=null,k=null,H=null,Y=null;for(q in i){var X=i[q];if(i.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":k=X;default:l.hasOwnProperty(q)||re(n,e,q,null,l,X)}}for(var F in l){var q=l[F];if(X=i[F],l.hasOwnProperty(F)&&(q!=null||X!=null))switch(F){case"type":p=q;break;case"name":u=q;break;case"checked":H=q;break;case"defaultChecked":Y=q;break;case"value":b=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,e));break;default:q!==X&&re(n,e,F,q,l,X)}}Ba(n,b,S,k,H,Y,p,u);return;case"select":q=b=S=F=null;for(p in i)if(k=i[p],i.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":q=k;default:l.hasOwnProperty(p)||re(n,e,p,null,l,k)}for(u in l)if(p=l[u],k=i[u],l.hasOwnProperty(u)&&(p!=null||k!=null))switch(u){case"value":F=p;break;case"defaultValue":S=p;break;case"multiple":b=p;default:p!==k&&re(n,e,u,p,l,k)}e=S,i=b,l=q,F!=null?He(n,!!i,F,!1):!!l!=!!i&&(e!=null?He(n,!!i,e,!0):He(n,!!i,i?[]:"",!1));return;case"textarea":q=F=null;for(S in i)if(u=i[S],i.hasOwnProperty(S)&&u!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:re(n,e,S,null,l,u)}for(b in l)if(u=l[b],p=i[b],l.hasOwnProperty(b)&&(u!=null||p!=null))switch(b){case"value":F=u;break;case"defaultValue":q=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==p&&re(n,e,b,u,l,p)}ro(n,F,q);return;case"option":for(var mn in i)F=i[mn],i.hasOwnProperty(mn)&&F!=null&&!l.hasOwnProperty(mn)&&(mn==="selected"?n.selected=!1:re(n,e,mn,null,l,F));for(k in l)F=l[k],q=i[k],l.hasOwnProperty(k)&&F!==q&&(F!=null||q!=null)&&(k==="selected"?n.selected=F&&typeof F!="function"&&typeof F!="symbol":re(n,e,k,F,l,q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Cn in i)F=i[Cn],i.hasOwnProperty(Cn)&&F!=null&&!l.hasOwnProperty(Cn)&&re(n,e,Cn,null,l,F);for(H in l)if(F=l[H],q=i[H],l.hasOwnProperty(H)&&F!==q&&(F!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(o(137,e));break;default:re(n,e,H,F,l,q)}return;default:if(Pi(e)){for(var ae in i)F=i[ae],i.hasOwnProperty(ae)&&F!==void 0&&!l.hasOwnProperty(ae)&&Tc(n,e,ae,void 0,l,F);for(Y in l)F=l[Y],q=i[Y],!l.hasOwnProperty(Y)||F===q||F===void 0&&q===void 0||Tc(n,e,Y,F,l,q);return}}for(var O in i)F=i[O],i.hasOwnProperty(O)&&F!=null&&!l.hasOwnProperty(O)&&re(n,e,O,null,l,F);for(X in l)F=l[X],q=i[X],!l.hasOwnProperty(X)||F===q||F==null&&q==null||re(n,e,X,F,l,q)}function tm(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ux(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var u=i[l],p=u.transferSize,b=u.initiatorType,S=u.duration;if(p&&S&&tm(b)){for(b=0,S=u.responseEnd,l+=1;l<i.length;l++){var k=i[l],H=k.startTime;if(H>S)break;var Y=k.transferSize,X=k.initiatorType;Y&&tm(X)&&(k=k.responseEnd,b+=Y*(k<S?1:(S-H)/(k-H)))}if(--l,e+=8*(p+b)/(u.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var kc=null,Ac=null;function ts(n){return n.nodeType===9?n:n.ownerDocument}function im(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Mc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=null;function cx(){var n=window.event;return n&&n.type==="popstate"?n===Pc?!1:(Pc=n,!0):(Pc=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(n){return lm.resolve(null).then(n).catch(dx)}:am;function dx(n){setTimeout(function(){throw n})}function Xi(n){return n==="head"}function om(n,e){var i=e,l=0;do{var u=i.nextSibling;if(n.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"||i==="/&"){if(l===0){n.removeChild(u),va(e);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Sl(n.ownerDocument.documentElement);else if(i==="head"){i=n.ownerDocument.head,Sl(i);for(var p=i.firstChild;p;){var b=p.nextSibling,S=p.nodeName;p[sr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&p.rel.toLowerCase()==="stylesheet"||i.removeChild(p),p=b}}else i==="body"&&Sl(n.ownerDocument.body);i=u}while(i);va(e)}function sm(n,e){var i=n;n=0;do{var l=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(n===0)break;n--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||n++;i=l}while(i)}function Nc(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Nc(i),La(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}n.removeChild(i)}}function hx(n,e,i,l){for(;n.nodeType===1;){var u=i;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[sr])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==u.rel||n.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||n.getAttribute("title")!==(u.title==null?null:u.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(u.src==null?null:u.src)||n.getAttribute("type")!==(u.type==null?null:u.type)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=Ot(n.nextSibling),n===null)break}return null}function mx(n,e,i){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Ot(n.nextSibling),n===null))return null;return n}function um(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Ot(n.nextSibling),n===null))return null;return n}function Rc(n){return n.data==="$?"||n.data==="$~"}function Oc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function gx(n,e){var i=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||i.readyState!=="loading")e();else{var l=function(){e(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Ot(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Dc=null;function cm(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var i=n.data;if(i==="/$"||i==="/&"){if(e===0)return Ot(n.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}n=n.nextSibling}return null}function fm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var i=n.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return n;e--}else i!=="/$"&&i!=="/&"||e++}n=n.previousSibling}return null}function pm(n,e,i){switch(e=ts(i),n){case"html":if(n=e.documentElement,!n)throw Error(o(452));return n;case"head":if(n=e.head,!n)throw Error(o(453));return n;case"body":if(n=e.body,!n)throw Error(o(454));return n;default:throw Error(o(451))}}function Sl(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);La(n)}var Dt=new Map,dm=new Set;function is(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var vi=K.d;K.d={f:yx,r:bx,D:xx,C:vx,L:Sx,m:wx,X:_x,S:Ex,M:Cx};function yx(){var n=vi.f(),e=$o();return n||e}function bx(n){var e=ti(n);e!==null&&e.tag===5&&e.type==="form"?Pd(e):vi.r(n)}var ya=typeof document>"u"?null:document;function hm(n,e,i){var l=ya;if(l&&typeof e=="string"&&e){var u=at(e);u='link[rel="'+n+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),dm.has(u)||(dm.add(u),n={rel:n,crossOrigin:i,href:e},l.querySelector(u)===null&&(e=l.createElement("link"),Ve(e,"link",n),Ae(e),l.head.appendChild(e)))}}function xx(n){vi.D(n),hm("dns-prefetch",n,null)}function vx(n,e){vi.C(n,e),hm("preconnect",n,e)}function Sx(n,e,i){vi.L(n,e,i);var l=ya;if(l&&n&&e){var u='link[rel="preload"][as="'+at(e)+'"]';e==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+at(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+at(i.imageSizes)+'"]')):u+='[href="'+at(n)+'"]';var p=u;switch(e){case"style":p=ba(n);break;case"script":p=xa(n)}Dt.has(p)||(n=g({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:n,as:e},i),Dt.set(p,n),l.querySelector(u)!==null||e==="style"&&l.querySelector(wl(p))||e==="script"&&l.querySelector(El(p))||(e=l.createElement("link"),Ve(e,"link",n),Ae(e),l.head.appendChild(e)))}}function wx(n,e){vi.m(n,e);var i=ya;if(i&&n){var l=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+at(l)+'"][href="'+at(n)+'"]',p=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=xa(n)}if(!Dt.has(p)&&(n=g({rel:"modulepreload",href:n},e),Dt.set(p,n),i.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(El(p)))return}l=i.createElement("link"),Ve(l,"link",n),Ae(l),i.head.appendChild(l)}}}function Ex(n,e,i){vi.S(n,e,i);var l=ya;if(l&&n){var u=Mi(l).hoistableStyles,p=ba(n);e=e||"default";var b=u.get(p);if(!b){var S={loading:0,preload:null};if(b=l.querySelector(wl(p)))S.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":e},i),(i=Dt.get(p))&&zc(n,i);var k=b=l.createElement("link");Ae(k),Ve(k,"link",n),k._p=new Promise(function(H,Y){k.onload=H,k.onerror=Y}),k.addEventListener("load",function(){S.loading|=1}),k.addEventListener("error",function(){S.loading|=2}),S.loading|=4,rs(b,e,l)}b={type:"stylesheet",instance:b,count:1,state:S},u.set(p,b)}}}function _x(n,e){vi.X(n,e);var i=ya;if(i&&n){var l=Mi(i).hoistableScripts,u=xa(n),p=l.get(u);p||(p=i.querySelector(El(u)),p||(n=g({src:n,async:!0},e),(e=Dt.get(u))&&Lc(n,e),p=i.createElement("script"),Ae(p),Ve(p,"link",n),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function Cx(n,e){vi.M(n,e);var i=ya;if(i&&n){var l=Mi(i).hoistableScripts,u=xa(n),p=l.get(u);p||(p=i.querySelector(El(u)),p||(n=g({src:n,async:!0,type:"module"},e),(e=Dt.get(u))&&Lc(n,e),p=i.createElement("script"),Ae(p),Ve(p,"link",n),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function mm(n,e,i,l){var u=(u=xn.current)?is(u):null;if(!u)throw Error(o(446));switch(n){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=ba(i.href),i=Mi(u).hoistableStyles,l=i.get(e),l||(l={type:"style",instance:null,count:0,state:null},i.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){n=ba(i.href);var p=Mi(u).hoistableStyles,b=p.get(n);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,b),(p=u.querySelector(wl(n)))&&!p._p&&(b.instance=p,b.state.loading=5),Dt.has(n)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Dt.set(n,i),p||Tx(u,n,i,b.state))),e&&l===null)throw Error(o(528,""));return b}if(e&&l!==null)throw Error(o(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=xa(i),i=Mi(u).hoistableScripts,l=i.get(e),l||(l={type:"script",instance:null,count:0,state:null},i.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,n))}}function ba(n){return'href="'+at(n)+'"'}function wl(n){return'link[rel="stylesheet"]['+n+"]"}function gm(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function Tx(n,e,i,l){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=n.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Ve(e,"link",i),Ae(e),n.head.appendChild(e))}function xa(n){return'[src="'+at(n)+'"]'}function El(n){return"script[async]"+n}function ym(n,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+at(i.href)+'"]');if(l)return e.instance=l,Ae(l),l;var u=g({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Ae(l),Ve(l,"style",u),rs(l,i.precedence,n),e.instance=l;case"stylesheet":u=ba(i.href);var p=n.querySelector(wl(u));if(p)return e.state.loading|=4,e.instance=p,Ae(p),p;l=gm(i),(u=Dt.get(u))&&zc(l,u),p=(n.ownerDocument||n).createElement("link"),Ae(p);var b=p;return b._p=new Promise(function(S,k){b.onload=S,b.onerror=k}),Ve(p,"link",l),e.state.loading|=4,rs(p,i.precedence,n),e.instance=p;case"script":return p=xa(i.src),(u=n.querySelector(El(p)))?(e.instance=u,Ae(u),u):(l=i,(u=Dt.get(p))&&(l=g({},i),Lc(l,u)),n=n.ownerDocument||n,u=n.createElement("script"),Ae(u),Ve(u,"link",l),n.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,rs(l,i.precedence,n));return e.instance}function rs(n,e,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,p=u,b=0;b<l.length;b++){var S=l[b];if(S.dataset.precedence===e)p=S;else if(p!==u)break}p?p.parentNode.insertBefore(n,p.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(n,e.firstChild))}function zc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Lc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var as=null;function bm(n,e,i){if(as===null){var l=new Map,u=as=new Map;u.set(i,l)}else u=as,l=u.get(i),l||(l=new Map,u.set(i,l));if(l.has(n))return l;for(l.set(n,null),i=i.getElementsByTagName(n),u=0;u<i.length;u++){var p=i[u];if(!(p[sr]||p[_e]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var b=p.getAttribute(e)||"";b=n+b;var S=l.get(b);S?S.push(p):l.set(b,[p])}}return l}function xm(n,e,i){n=n.ownerDocument||n,n.head.insertBefore(i,e==="title"?n.querySelector("head > title"):null)}function kx(n,e,i){if(i===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function vm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Ax(n,e,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ba(l.href),p=e.querySelector(wl(u));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=ls.bind(n),e.then(n,n)),i.state.loading|=4,i.instance=p,Ae(p);return}p=e.ownerDocument||e,l=gm(l),(u=Dt.get(u))&&zc(l,u),p=p.createElement("link"),Ae(p);var b=p;b._p=new Promise(function(S,k){b.onload=S,b.onerror=k}),Ve(p,"link",l),i.instance=p}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(n.count++,i=ls.bind(n),e.addEventListener("load",i),e.addEventListener("error",i))}}var jc=0;function Mx(n,e){return n.stylesheets&&n.count===0&&ss(n,n.stylesheets),0<n.count||0<n.imgCount?function(i){var l=setTimeout(function(){if(n.stylesheets&&ss(n,n.stylesheets),n.unsuspend){var p=n.unsuspend;n.unsuspend=null,p()}},6e4+e);0<n.imgBytes&&jc===0&&(jc=62500*ux());var u=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ss(n,n.stylesheets),n.unsuspend)){var p=n.unsuspend;n.unsuspend=null,p()}},(n.imgBytes>jc?50:800)+e);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function ls(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ss(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var os=null;function ss(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,os=new Map,e.forEach(Px,n),os=null,ls.call(n))}function Px(n,e){if(!(e.state.loading&4)){var i=os.get(n);if(i)var l=i.get(null);else{i=new Map,os.set(n,i);for(var u=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var b=u[p];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(i.set(b.dataset.precedence,b),l=b)}l&&i.set(null,l)}u=e.instance,b=u.getAttribute("data-precedence"),p=i.get(b)||l,p===l&&i.set(null,u),i.set(b,u),this.count++,l=ls.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),p?p.parentNode.insertBefore(u,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(u,n.firstChild)),e.state.loading|=4}}var _l={$$typeof:I,Provider:null,Consumer:null,_currentValue:an,_currentValue2:an,_threadCount:0};function Nx(n,e,i,l,u,p,b,S,k){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pe(0),this.hiddenUpdates=pe(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Sm(n,e,i,l,u,p,b,S,k,H,Y,X){return n=new Nx(n,e,i,b,k,H,Y,X,S),e=1,p===!0&&(e|=24),p=yt(3,null,null,e),n.current=p,p.stateNode=n,e=gu(),e.refCount++,n.pooledCache=e,e.refCount++,p.memoizedState={element:l,isDehydrated:i,cache:e},vu(p),n}function wm(n){return n?(n=Qr,n):Qr}function Em(n,e,i,l,u,p){u=wm(u),l.context===null?l.context=u:l.pendingContext=u,l=Bi(e),l.payload={element:i},p=p===void 0?null:p,p!==null&&(l.callback=p),i=Ui(n,l,e),i!==null&&(ft(i,n,e),tl(i,n,e))}function _m(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var i=n.retryLane;n.retryLane=i!==0&&i<e?i:e}}function Bc(n,e){_m(n,e),(n=n.alternate)&&_m(n,e)}function Cm(n){if(n.tag===13||n.tag===31){var e=hr(n,67108864);e!==null&&ft(e,n,67108864),Bc(n,67108864)}}function Tm(n){if(n.tag===13||n.tag===31){var e=wt();e=me(e);var i=hr(n,e);i!==null&&ft(i,n,e),Bc(n,e)}}var us=!0;function Rx(n,e,i,l){var u=L.T;L.T=null;var p=K.p;try{K.p=2,Uc(n,e,i,l)}finally{K.p=p,L.T=u}}function Ox(n,e,i,l){var u=L.T;L.T=null;var p=K.p;try{K.p=8,Uc(n,e,i,l)}finally{K.p=p,L.T=u}}function Uc(n,e,i,l){if(us){var u=Hc(l);if(u===null)Cc(n,e,l,cs,i),Am(n,l);else if(zx(u,n,e,i,l))l.stopPropagation();else if(Am(n,l),e&4&&-1<Dx.indexOf(n)){for(;u!==null;){var p=ti(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var b=it(p.pendingLanes);if(b!==0){var S=p;for(S.pendingLanes|=2,S.entangledLanes|=2;b;){var k=1<<31-Kn(b);S.entanglements[1]|=k,b&=~k}Zt(p),(Qn&6)===0&&(Yo=ye()+500,bl(0))}}break;case 31:case 13:S=hr(p,2),S!==null&&ft(S,p,2),$o(),Bc(p,2)}if(p=Hc(l),p===null&&Cc(n,e,l,cs,i),p===u)break;u=p}u!==null&&l.stopPropagation()}else Cc(n,e,l,null,i)}}function Hc(n){return n=Rn(n),Ic(n)}var cs=null;function Ic(n){if(cs=null,n=nt(n),n!==null){var e=c(n);if(e===null)n=null;else{var i=e.tag;if(i===13){if(n=f(e),n!==null)return n;n=null}else if(i===31){if(n=d(e),n!==null)return n;n=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return cs=n,null}function km(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jr()){case G:return 2;case tn:return 8;case _n:case Ln:return 32;case Wn:return 268435456;default:return 32}default:return 32}}var Fc=!1,Qi=null,Zi=null,Ki=null,Cl=new Map,Tl=new Map,Ji=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(n,e){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Cl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(e.pointerId)}}function kl(n,e,i,l,u,p){return n===null||n.nativeEvent!==p?(n={blockedOn:e,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},e!==null&&(e=ti(e),e!==null&&Cm(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),n)}function zx(n,e,i,l,u){switch(e){case"focusin":return Qi=kl(Qi,n,e,i,l,u),!0;case"dragenter":return Zi=kl(Zi,n,e,i,l,u),!0;case"mouseover":return Ki=kl(Ki,n,e,i,l,u),!0;case"pointerover":var p=u.pointerId;return Cl.set(p,kl(Cl.get(p)||null,n,e,i,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Tl.set(p,kl(Tl.get(p)||null,n,e,i,l,u)),!0}return!1}function Mm(n){var e=nt(n.target);if(e!==null){var i=c(e);if(i!==null){if(e=i.tag,e===13){if(e=f(i),e!==null){n.blockedOn=e,Hr(n.priority,function(){Tm(i)});return}}else if(e===31){if(e=d(i),e!==null){n.blockedOn=e,Hr(n.priority,function(){Tm(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){n.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fs(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var i=Hc(n.nativeEvent);if(i===null){i=n.nativeEvent;var l=new i.constructor(i.type,i);yn=l,i.target.dispatchEvent(l),yn=null}else return e=ti(i),e!==null&&Cm(e),n.blockedOn=i,!1;e.shift()}return!0}function Pm(n,e,i){fs(n)&&i.delete(e)}function Lx(){Fc=!1,Qi!==null&&fs(Qi)&&(Qi=null),Zi!==null&&fs(Zi)&&(Zi=null),Ki!==null&&fs(Ki)&&(Ki=null),Cl.forEach(Pm),Tl.forEach(Pm)}function ps(n,e){n.blockedOn===e&&(n.blockedOn=null,Fc||(Fc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Lx)))}var ds=null;function Nm(n){ds!==n&&(ds=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){ds===n&&(ds=null);for(var e=0;e<n.length;e+=3){var i=n[e],l=n[e+1],u=n[e+2];if(typeof l!="function"){if(Ic(l||i)===null)continue;break}var p=ti(i);p!==null&&(n.splice(e,3),e-=3,Hu(p,{pending:!0,data:u,method:i.method,action:l},l,u))}}))}function va(n){function e(k){return ps(k,n)}Qi!==null&&ps(Qi,n),Zi!==null&&ps(Zi,n),Ki!==null&&ps(Ki,n),Cl.forEach(e),Tl.forEach(e);for(var i=0;i<Ji.length;i++){var l=Ji[i];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ji.length&&(i=Ji[0],i.blockedOn===null);)Mm(i),i.blockedOn===null&&Ji.shift();if(i=(n.ownerDocument||n).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var u=i[l],p=i[l+1],b=u[We]||null;if(typeof p=="function")b||Nm(i);else if(b){var S=null;if(p&&p.hasAttribute("formAction")){if(u=p,b=p[We]||null)S=b.formAction;else if(Ic(u)!==null)continue}else S=b.action;typeof S=="function"?i[l+1]=S:(i.splice(l,3),l-=3),Nm(i)}}}function Rm(){function n(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function qc(n){this._internalRoot=n}hs.prototype.render=qc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(o(409));var i=e.current,l=wt();Em(i,l,n,e,null,null)},hs.prototype.unmount=qc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Em(n.current,2,null,n,null,null),$o(),e[ki]=null}};function hs(n){this._internalRoot=n}hs.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ur();n={blockedOn:null,target:n,priority:e};for(var i=0;i<Ji.length&&e!==0&&e<Ji[i].priority;i++);Ji.splice(i,0,n),i===0&&Mm(n)}};var Om=r.version;if(Om!=="19.2.3")throw Error(o(527,Om,"19.2.3"));K.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=h(e),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var jx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{Ue=ms.inject(jx),ve=ms}catch{}}return Ml.createRoot=function(n,e){if(!s(n))throw Error(o(299));var i=!1,l="",u=Hd,p=Id,b=Fd;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(p=e.onCaughtError),e.onRecoverableError!==void 0&&(b=e.onRecoverableError)),e=Sm(n,1,!1,null,null,i,l,null,u,p,b,Rm),n[ki]=e.current,_c(n),new qc(e)},Ml.hydrateRoot=function(n,e,i){if(!s(n))throw Error(o(299));var l=!1,u="",p=Hd,b=Id,S=Fd,k=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(b=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.formState!==void 0&&(k=i.formState)),e=Sm(n,1,!0,e,i??null,l,u,k,p,b,S,Rm),e.context=wm(null),i=e.current,l=wt(),l=me(l),u=Bi(l),u.callback=null,Ui(i,u,l),i=l,e.current.lanes=i,le(e,i),Zt(e),n[ki]=e.current,_c(n),new hs(e)},Ml.version="19.2.3",Ml}var qm;function Wx(){if(qm)return Yc.exports;qm=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Yc.exports=Yx(),Yc.exports}var $x=Wx();var Vm="popstate";function Xx(t={}){function r(o,s){let{pathname:c,search:f,hash:d}=o.location;return Sf("",{pathname:c,search:f,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function a(o,s){return typeof s=="string"?s:Il(s)}return Zx(r,a,null,t)}function xe(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Vt(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Qx(){return Math.random().toString(36).substring(2,10)}function Gm(t,r){return{usr:t.state,key:t.key,idx:r}}function Sf(t,r,a=null,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?Ma(r):r,state:a,key:r&&r.key||o||Qx()}}function Il({pathname:t="/",search:r="",hash:a=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Ma(t){let r={};if(t){let a=t.indexOf("#");a>=0&&(r.hash=t.substring(a),t=t.substring(0,a));let o=t.indexOf("?");o>=0&&(r.search=t.substring(o),t=t.substring(0,o)),t&&(r.pathname=t)}return r}function Zx(t,r,a,o={}){let{window:s=document.defaultView,v5Compat:c=!1}=o,f=s.history,d="POP",m=null,h=y();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function y(){return(f.state||{idx:null}).idx}function g(){d="POP";let D=y(),M=D==null?null:D-h;h=D,m&&m({action:d,location:N.location,delta:M})}function v(D,M){d="PUSH";let j=Sf(N.location,D,M);h=y()+1;let I=Gm(j,h),on=N.createHref(j);try{f.pushState(I,"",on)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;s.location.assign(on)}c&&m&&m({action:d,location:N.location,delta:1})}function x(D,M){d="REPLACE";let j=Sf(N.location,D,M);h=y();let I=Gm(j,h),on=N.createHref(j);f.replaceState(I,"",on),c&&m&&m({action:d,location:N.location,delta:0})}function _(D){return Kx(D)}let N={get action(){return d},get location(){return t(s,f)},listen(D){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(Vm,g),m=D,()=>{s.removeEventListener(Vm,g),m=null}},createHref(D){return r(s,D)},createURL:_,encodeLocation(D){let M=_(D);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:v,replace:x,go(D){return f.go(D)}};return N}function Kx(t,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),xe(a,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:Il(t);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=a+o),new URL(o,a)}function $g(t,r,a="/"){return Jx(t,r,a,!1)}function Jx(t,r,a,o){let s=typeof r=="string"?Ma(r):r,c=wi(s.pathname||"/",a);if(c==null)return null;let f=Xg(t);n1(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let h=f1(c);d=u1(f[m],h,o)}return d}function Xg(t,r=[],a=[],o="",s=!1){let c=(f,d,m=s,h)=>{let y={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&m)return;xe(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let g=Si([o,y.relativePath]),v=a.concat(y);f.children&&f.children.length>0&&(xe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Xg(f.children,r,v,g,m)),!(f.path==null&&!f.index)&&r.push({path:g,score:o1(g,f.index),routesMeta:v})};return t.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of Qg(f.path))c(f,d,!0,m)}),r}function Qg(t){let r=t.split("/");if(r.length===0)return[];let[a,...o]=r,s=a.endsWith("?"),c=a.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let f=Qg(o.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),s&&d.push(...f),d.map(m=>t.startsWith("/")&&m===""?"/":m)}function n1(t){t.sort((r,a)=>r.score!==a.score?a.score-r.score:s1(r.routesMeta.map(o=>o.childrenIndex),a.routesMeta.map(o=>o.childrenIndex)))}var e1=/^:[\w-]+$/,t1=3,i1=2,r1=1,a1=10,l1=-2,Ym=t=>t==="*";function o1(t,r){let a=t.split("/"),o=a.length;return a.some(Ym)&&(o+=l1),r&&(o+=i1),a.filter(s=>!Ym(s)).reduce((s,c)=>s+(e1.test(c)?t1:c===""?r1:a1),o)}function s1(t,r){return t.length===r.length&&t.slice(0,-1).every((o,s)=>o===r[s])?t[t.length-1]-r[r.length-1]:0}function u1(t,r,a=!1){let{routesMeta:o}=t,s={},c="/",f=[];for(let d=0;d<o.length;++d){let m=o[d],h=d===o.length-1,y=c==="/"?r:r.slice(c.length)||"/",g=Ts({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},y),v=m.route;if(!g&&h&&a&&!o[o.length-1].route.index&&(g=Ts({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!g)return null;Object.assign(s,g.params),f.push({params:s,pathname:Si([c,g.pathname]),pathnameBase:m1(Si([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=Si([c,g.pathnameBase]))}return f}function Ts(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,o]=c1(t.path,t.caseSensitive,t.end),s=r.match(a);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:o.reduce((h,{paramName:y,isOptional:g},v)=>{if(y==="*"){let _=d[v]||"";f=c.slice(0,c.length-_.length).replace(/(.)\/+$/,"$1")}const x=d[v];return g&&!x?h[y]=void 0:h[y]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:t}}function c1(t,r=!1,a=!0){Vt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let o=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(o.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(o.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function f1(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Vt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function wi(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,o=t.charAt(a);return o&&o!=="/"?null:t.slice(a)||"/"}var Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p1=t=>Zg.test(t);function d1(t,r="/"){let{pathname:a,search:o="",hash:s=""}=typeof t=="string"?Ma(t):t,c;if(a)if(p1(a))c=a;else{if(a.includes("//")){let f=a;a=a.replace(/\/\/+/g,"/"),Vt(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${a}`)}a.startsWith("/")?c=Wm(a.substring(1),"/"):c=Wm(a,r)}else c=r;return{pathname:c,search:g1(o),hash:y1(s)}}function Wm(t,r){let a=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?a.length>1&&a.pop():s!=="."&&a.push(s)}),a.length>1?a.join("/"):"/"}function Qc(t,r,a,o){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function h1(t){return t.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function Kg(t){let r=h1(t);return r.map((a,o)=>o===r.length-1?a.pathname:a.pathnameBase)}function Jg(t,r,a,o=!1){let s;typeof t=="string"?s=Ma(t):(s={...t},xe(!s.pathname||!s.pathname.includes("?"),Qc("?","pathname","search",s)),xe(!s.pathname||!s.pathname.includes("#"),Qc("#","pathname","hash",s)),xe(!s.search||!s.search.includes("#"),Qc("#","search","hash",s)));let c=t===""||s.pathname==="",f=c?"/":s.pathname,d;if(f==null)d=a;else{let g=r.length-1;if(!o&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),g-=1;s.pathname=v.join("/")}d=g>=0?r[g]:"/"}let m=d1(s,d),h=f&&f!=="/"&&f.endsWith("/"),y=(c||f===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(h||y)&&(m.pathname+="/"),m}var Si=t=>t.join("/").replace(/\/\/+/g,"/"),m1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),g1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,y1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,b1=class{constructor(t,r,a,o=!1){this.status=t,this.statusText=r||"",this.internal=o,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function x1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function v1(t){return t.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ey(t,r){let a=t;if(typeof a!="string"||!Zg.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let o=a,s=!1;if(ny)try{let c=new URL(window.location.href),f=a.startsWith("//")?new URL(c.protocol+a):new URL(a),d=wi(f.pathname,r);f.origin===c.origin&&d!=null?a=d+f.search+f.hash:s=!0}catch{Vt(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ty=["POST","PUT","PATCH","DELETE"];new Set(ty);var S1=["GET",...ty];new Set(S1);var Pa=z.createContext(null);Pa.displayName="DataRouter";var Ds=z.createContext(null);Ds.displayName="DataRouterState";var w1=z.createContext(!1),iy=z.createContext({isTransitioning:!1});iy.displayName="ViewTransition";var E1=z.createContext(new Map);E1.displayName="Fetchers";var _1=z.createContext(null);_1.displayName="Await";var Lt=z.createContext(null);Lt.displayName="Navigation";var Yl=z.createContext(null);Yl.displayName="Location";var Gt=z.createContext({outlet:null,matches:[],isDataRoute:!1});Gt.displayName="Route";var zf=z.createContext(null);zf.displayName="RouteError";var ry="REACT_ROUTER_ERROR",C1="REDIRECT",T1="ROUTE_ERROR_RESPONSE";function k1(t){if(t.startsWith(`${ry}:${C1}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function A1(t){if(t.startsWith(`${ry}:${T1}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new b1(r.status,r.statusText,r.data)}catch{}}function M1(t,{relative:r}={}){xe(Wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=z.useContext(Lt),{hash:s,pathname:c,search:f}=$l(t,{relative:r}),d=c;return a!=="/"&&(d=c==="/"?a:Si([a,c])),o.createHref({pathname:d,search:f,hash:s})}function Wl(){return z.useContext(Yl)!=null}function Pr(){return xe(Wl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Yl).location}var ay="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ly(t){z.useContext(Lt).static||z.useLayoutEffect(t)}function P1(){let{isDataRoute:t}=z.useContext(Gt);return t?G1():N1()}function N1(){xe(Wl(),"useNavigate() may be used only in the context of a <Router> component.");let t=z.useContext(Pa),{basename:r,navigator:a}=z.useContext(Lt),{matches:o}=z.useContext(Gt),{pathname:s}=Pr(),c=JSON.stringify(Kg(o)),f=z.useRef(!1);return ly(()=>{f.current=!0}),z.useCallback((m,h={})=>{if(Vt(f.current,ay),!f.current)return;if(typeof m=="number"){a.go(m);return}let y=Jg(m,JSON.parse(c),s,h.relative==="path");t==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:Si([r,y.pathname])),(h.replace?a.replace:a.push)(y,h.state,h)},[r,a,c,s,t])}var R1=z.createContext(null);function O1(t){let r=z.useContext(Gt).outlet;return z.useMemo(()=>r&&z.createElement(R1.Provider,{value:t},r),[r,t])}function oy(){let{matches:t}=z.useContext(Gt),r=t[t.length-1];return r?r.params:{}}function $l(t,{relative:r}={}){let{matches:a}=z.useContext(Gt),{pathname:o}=Pr(),s=JSON.stringify(Kg(a));return z.useMemo(()=>Jg(t,JSON.parse(s),o,r==="path"),[t,s,o,r])}function D1(t,r){return sy(t,r)}function sy(t,r,a,o,s){xe(Wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=z.useContext(Lt),{matches:f}=z.useContext(Gt),d=f[f.length-1],m=d?d.params:{},h=d?d.pathname:"/",y=d?d.pathnameBase:"/",g=d&&d.route;{let j=g&&g.path||"";cy(h,!g||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let v=Pr(),x;if(r){let j=typeof r=="string"?Ma(r):r;xe(y==="/"||j.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${j.pathname}" was given in the \`location\` prop.`),x=j}else x=v;let _=x.pathname||"/",N=_;if(y!=="/"){let j=y.replace(/^\//,"").split("/");N="/"+_.replace(/^\//,"").split("/").slice(j.length).join("/")}let D=$g(t,{pathname:N});Vt(g||D!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Vt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=U1(D&&D.map(j=>Object.assign({},j,{params:Object.assign({},m,j.params),pathname:Si([y,c.encodeLocation?c.encodeLocation(j.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?y:Si([y,c.encodeLocation?c.encodeLocation(j.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),f,a,o,s);return r&&M?z.createElement(Yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},M):M}function z1(){let t=V1(),r=x1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:c},"ErrorBoundary")," or"," ",z.createElement("code",{style:c},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},r),a?z.createElement("pre",{style:s},a):null,f)}var L1=z.createElement(z1,null),uy=class extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=A1(t.digest);a&&(t=a)}let r=t!==void 0?z.createElement(Gt.Provider,{value:this.props.routeContext},z.createElement(zf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?z.createElement(j1,{error:t},r):r}};uy.contextType=w1;var Zc=new WeakMap;function j1({children:t,error:r}){let{basename:a}=z.useContext(Lt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=k1(r.digest);if(o){let s=Zc.get(r);if(s)throw s;let c=ey(o.location,a);if(ny&&!Zc.get(r))if(c.isExternal||o.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw Zc.set(r,f),f}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return t}function B1({routeContext:t,match:r,children:a}){let o=z.useContext(Pa);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),z.createElement(Gt.Provider,{value:t},a)}function U1(t,r=[],a=null,o=null,s=null){if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(r.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let c=t,f=a?.errors;if(f!=null){let y=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);xe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let d=!1,m=-1;if(a)for(let y=0;y<c.length;y++){let g=c[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=y),g.route.id){let{loaderData:v,errors:x}=a,_=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||_){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let h=a&&o?(y,g)=>{o(y,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:v1(a.matches),errorInfo:g})}:void 0;return c.reduceRight((y,g,v)=>{let x,_=!1,N=null,D=null;a&&(x=f&&g.route.id?f[g.route.id]:void 0,N=g.route.errorElement||L1,d&&(m<0&&v===0?(cy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,D=null):m===v&&(_=!0,D=g.route.hydrateFallbackElement||null)));let M=r.concat(c.slice(0,v+1)),j=()=>{let I;return x?I=N:_?I=D:g.route.Component?I=z.createElement(g.route.Component,null):g.route.element?I=g.route.element:I=y,z.createElement(B1,{match:g,routeContext:{outlet:y,matches:M,isDataRoute:a!=null},children:I})};return a&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?z.createElement(uy,{location:a.location,revalidation:a.revalidation,component:N,error:x,children:j(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:h}):j()},null)}function Lf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H1(t){let r=z.useContext(Pa);return xe(r,Lf(t)),r}function I1(t){let r=z.useContext(Ds);return xe(r,Lf(t)),r}function F1(t){let r=z.useContext(Gt);return xe(r,Lf(t)),r}function jf(t){let r=F1(t),a=r.matches[r.matches.length-1];return xe(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function q1(){return jf("useRouteId")}function V1(){let t=z.useContext(zf),r=I1("useRouteError"),a=jf("useRouteError");return t!==void 0?t:r.errors?.[a]}function G1(){let{router:t}=H1("useNavigate"),r=jf("useNavigate"),a=z.useRef(!1);return ly(()=>{a.current=!0}),z.useCallback(async(s,c={})=>{Vt(a.current,ay),a.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:r,...c}))},[t,r])}var $m={};function cy(t,r,a){!r&&!$m[t]&&($m[t]=!0,Vt(!1,a))}z.memo(Y1);function Y1({routes:t,future:r,state:a,onError:o}){return sy(t,void 0,a,o,r)}function W1(t){return O1(t.context)}function zl(t){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $1({basename:t="/",children:r=null,location:a,navigationType:o="POP",navigator:s,static:c=!1,unstable_useTransitions:f}){xe(!Wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:d,navigator:s,static:c,unstable_useTransitions:f,future:{}}),[d,s,c,f]);typeof a=="string"&&(a=Ma(a));let{pathname:h="/",search:y="",hash:g="",state:v=null,key:x="default"}=a,_=z.useMemo(()=>{let N=wi(h,d);return N==null?null:{location:{pathname:N,search:y,hash:g,state:v,key:x},navigationType:o}},[d,h,y,g,v,x,o]);return Vt(_!=null,`<Router basename="${d}"> is not able to match the URL "${h}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:z.createElement(Lt.Provider,{value:m},z.createElement(Yl.Provider,{children:r,value:_}))}function X1({children:t,location:r}){return D1(wf(t),r)}function wf(t,r=[]){let a=[];return z.Children.forEach(t,(o,s)=>{if(!z.isValidElement(o))return;let c=[...r,s];if(o.type===z.Fragment){a.push.apply(a,wf(o.props.children,c));return}xe(o.type===zl,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=wf(o.props.children,c)),a.push(f)}),a}var Es="get",_s="application/x-www-form-urlencoded";function zs(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Q1(t){return zs(t)&&t.tagName.toLowerCase()==="button"}function Z1(t){return zs(t)&&t.tagName.toLowerCase()==="form"}function K1(t){return zs(t)&&t.tagName.toLowerCase()==="input"}function J1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nv(t,r){return t.button===0&&(!r||r==="_self")&&!J1(t)}var gs=null;function ev(){if(gs===null)try{new FormData(document.createElement("form"),0),gs=!1}catch{gs=!0}return gs}var tv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kc(t){return t!=null&&!tv.has(t)?(Vt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_s}"`),null):t}function iv(t,r){let a,o,s,c,f;if(Z1(t)){let d=t.getAttribute("action");o=d?wi(d,r):null,a=t.getAttribute("method")||Es,s=Kc(t.getAttribute("enctype"))||_s,c=new FormData(t)}else if(Q1(t)||K1(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||d.getAttribute("action");if(o=m?wi(m,r):null,a=t.getAttribute("formmethod")||d.getAttribute("method")||Es,s=Kc(t.getAttribute("formenctype"))||Kc(d.getAttribute("enctype"))||_s,c=new FormData(d,t),!ev()){let{name:h,type:y,value:g}=t;if(y==="image"){let v=h?`${h}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else h&&c.append(h,g)}}else{if(zs(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Es,o=null,s=_s,f=t}return c&&s==="text/plain"&&(f=c,c=void 0),{action:o,method:a.toLowerCase(),encType:s,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bf(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function rv(t,r,a,o){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:r&&wi(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function av(t,r){if(t.id in r)return r[t.id];try{let a=await import(t.module);return r[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lv(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function ov(t,r,a){let o=await Promise.all(t.map(async s=>{let c=r.routes[s.route.id];if(c){let f=await av(c,a);return f.links?f.links():[]}return[]}));return fv(o.flat(1).filter(lv).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Xm(t,r,a,o,s,c){let f=(m,h)=>a[h]?m.route.id!==a[h].route.id:!0,d=(m,h)=>a[h].pathname!==m.pathname||a[h].route.path?.endsWith("*")&&a[h].params["*"]!==m.params["*"];return c==="assets"?r.filter((m,h)=>f(m,h)||d(m,h)):c==="data"?r.filter((m,h)=>{let y=o.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(f(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function sv(t,r,{includeHydrateFallback:a}={}){return uv(t.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),a&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function uv(t){return[...new Set(t)]}function cv(t){let r={},a=Object.keys(t).sort();for(let o of a)r[o]=t[o];return r}function fv(t,r){let a=new Set;return new Set(r),t.reduce((o,s)=>{let c=JSON.stringify(cv(s));return a.has(c)||(a.add(c),o.push({key:c,link:s})),o},[])}function fy(){let t=z.useContext(Pa);return Bf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function pv(){let t=z.useContext(Ds);return Bf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Uf=z.createContext(void 0);Uf.displayName="FrameworkContext";function py(){let t=z.useContext(Uf);return Bf(t,"You must render this element inside a <HydratedRouter> element"),t}function dv(t,r){let a=z.useContext(Uf),[o,s]=z.useState(!1),[c,f]=z.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:y,onTouchStart:g}=r,v=z.useRef(null);z.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let N=M=>{M.forEach(j=>{f(j.isIntersecting)})},D=new IntersectionObserver(N,{threshold:.5});return v.current&&D.observe(v.current),()=>{D.disconnect()}}},[t]),z.useEffect(()=>{if(o){let N=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(N)}}},[o]);let x=()=>{s(!0)},_=()=>{s(!1),f(!1)};return a?t!=="intent"?[c,v,{}]:[c,v,{onFocus:Pl(d,x),onBlur:Pl(m,_),onMouseEnter:Pl(h,x),onMouseLeave:Pl(y,_),onTouchStart:Pl(g,x)}]:[!1,v,{}]}function Pl(t,r){return a=>{t&&t(a),a.defaultPrevented||r(a)}}function hv({page:t,...r}){let{router:a}=fy(),o=z.useMemo(()=>$g(a.routes,t,a.basename),[a.routes,t,a.basename]);return o?z.createElement(gv,{page:t,matches:o,...r}):null}function mv(t){let{manifest:r,routeModules:a}=py(),[o,s]=z.useState([]);return z.useEffect(()=>{let c=!1;return ov(t,r,a).then(f=>{c||s(f)}),()=>{c=!0}},[t,r,a]),o}function gv({page:t,matches:r,...a}){let o=Pr(),{future:s,manifest:c,routeModules:f}=py(),{basename:d}=fy(),{loaderData:m,matches:h}=pv(),y=z.useMemo(()=>Xm(t,r,h,c,o,"data"),[t,r,h,c,o]),g=z.useMemo(()=>Xm(t,r,h,c,o,"assets"),[t,r,h,c,o]),v=z.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let N=new Set,D=!1;if(r.forEach(j=>{let I=c.routes[j.route.id];!I||!I.hasLoader||(!y.some(on=>on.route.id===j.route.id)&&j.route.id in m&&f[j.route.id]?.shouldRevalidate||I.hasClientLoader?D=!0:N.add(j.route.id))}),N.size===0)return[];let M=rv(t,d,s.unstable_trailingSlashAwareDataRequests,"data");return D&&N.size>0&&M.searchParams.set("_routes",r.filter(j=>N.has(j.route.id)).map(j=>j.route.id).join(",")),[M.pathname+M.search]},[d,s.unstable_trailingSlashAwareDataRequests,m,o,c,y,r,t,f]),x=z.useMemo(()=>sv(g,c),[g,c]),_=mv(g);return z.createElement(z.Fragment,null,v.map(N=>z.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...a})),x.map(N=>z.createElement("link",{key:N,rel:"modulepreload",href:N,...a})),_.map(({key:N,link:D})=>z.createElement("link",{key:N,nonce:a.nonce,...D})))}function yv(...t){return r=>{t.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bv&&(window.__reactRouterVersion="7.12.0")}catch{}function xv({basename:t,children:r,unstable_useTransitions:a,window:o}){let s=z.useRef();s.current==null&&(s.current=Xx({window:o,v5Compat:!0}));let c=s.current,[f,d]=z.useState({action:c.action,location:c.location}),m=z.useCallback(h=>{a===!1?d(h):z.startTransition(()=>d(h))},[a]);return z.useLayoutEffect(()=>c.listen(m),[c,m]),z.createElement($1,{basename:t,children:r,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:a})}var dy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=z.forwardRef(function({onClick:r,discover:a="render",prefetch:o="none",relative:s,reloadDocument:c,replace:f,state:d,target:m,to:h,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:v,...x},_){let{basename:N,unstable_useTransitions:D}=z.useContext(Lt),M=typeof h=="string"&&dy.test(h),j=ey(h,N);h=j.to;let I=M1(h,{relative:s}),[on,J,B]=dv(o,x),Z=Ev(h,{replace:f,state:d,target:m,preventScrollReset:y,relative:s,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:D});function hn(R){r&&r(R),R.defaultPrevented||Z(R)}let pn=z.createElement("a",{...x,...B,href:j.absoluteURL||I,onClick:j.isExternal||c?r:hn,ref:yv(_,J),target:m,"data-discover":!M&&a==="render"?"true":void 0});return on&&!M?z.createElement(z.Fragment,null,pn,z.createElement(hv,{page:I})):pn});Ge.displayName="Link";var vv=z.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:o="",end:s=!1,style:c,to:f,viewTransition:d,children:m,...h},y){let g=$l(f,{relative:h.relative}),v=Pr(),x=z.useContext(Ds),{navigator:_,basename:N}=z.useContext(Lt),D=x!=null&&Av(g)&&d===!0,M=_.encodeLocation?_.encodeLocation(g).pathname:g.pathname,j=v.pathname,I=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(j=j.toLowerCase(),I=I?I.toLowerCase():null,M=M.toLowerCase()),I&&N&&(I=wi(I,N)||I);const on=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let J=j===M||!s&&j.startsWith(M)&&j.charAt(on)==="/",B=I!=null&&(I===M||!s&&I.startsWith(M)&&I.charAt(M.length)==="/"),Z={isActive:J,isPending:B,isTransitioning:D},hn=J?r:void 0,pn;typeof o=="function"?pn=o(Z):pn=[o,J?"active":null,B?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(Z):c;return z.createElement(Ge,{...h,"aria-current":hn,className:pn,ref:y,style:R,to:f,viewTransition:d},typeof m=="function"?m(Z):m)});vv.displayName="NavLink";var Sv=z.forwardRef(({discover:t="render",fetcherKey:r,navigate:a,reloadDocument:o,replace:s,state:c,method:f=Es,action:d,onSubmit:m,relative:h,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:v,...x},_)=>{let{unstable_useTransitions:N}=z.useContext(Lt),D=Tv(),M=kv(d,{relative:h}),j=f.toLowerCase()==="get"?"get":"post",I=typeof d=="string"&&dy.test(d),on=J=>{if(m&&m(J),J.defaultPrevented)return;J.preventDefault();let B=J.nativeEvent.submitter,Z=B?.getAttribute("formmethod")||f,hn=()=>D(B||J.currentTarget,{fetcherKey:r,method:Z,navigate:a,replace:s,state:c,relative:h,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:v});N&&a!==!1?z.startTransition(()=>hn()):hn()};return z.createElement("form",{ref:_,method:j,action:M,onSubmit:o?m:on,...x,"data-discover":!I&&t==="render"?"true":void 0})});Sv.displayName="Form";function wv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hy(t){let r=z.useContext(Pa);return xe(r,wv(t)),r}function Ev(t,{target:r,replace:a,state:o,preventScrollReset:s,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let h=P1(),y=Pr(),g=$l(t,{relative:c});return z.useCallback(v=>{if(nv(v,r)){v.preventDefault();let x=a!==void 0?a:Il(y)===Il(g),_=()=>h(t,{replace:x,state:o,preventScrollReset:s,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});m?z.startTransition(()=>_()):_()}},[y,h,g,a,o,r,t,s,c,f,d,m])}var _v=0,Cv=()=>`__${String(++_v)}__`;function Tv(){let{router:t}=hy("useSubmit"),{basename:r}=z.useContext(Lt),a=q1(),o=t.fetch,s=t.navigate;return z.useCallback(async(c,f={})=>{let{action:d,method:m,encType:h,formData:y,body:g}=iv(c,r);if(f.navigate===!1){let v=f.fetcherKey||Cv();await o(v,a,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await s(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:a,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,s,r,a])}function kv(t,{relative:r}={}){let{basename:a}=z.useContext(Lt),o=z.useContext(Gt);xe(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),c={...$l(t||".",{relative:r})},f=Pr();if(t==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(y=>y==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let y=d.toString();c.search=y?`?${y}`:""}}return(!t||t===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:Si([a,c.pathname])),Il(c)}function Av(t,{relative:r}={}){let a=z.useContext(iy);xe(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=hy("useViewTransitionState"),s=$l(t,{relative:r});if(!a.isTransitioning)return!1;let c=wi(a.currentLocation.pathname,o)||a.currentLocation.pathname,f=wi(a.nextLocation.pathname,o)||a.nextLocation.pathname;return Ts(s.pathname,f)!=null||Ts(s.pathname,c)!=null}const my=z.createContext();function Mv({children:t}){const[r,a]=z.useState(()=>{if(typeof window<"u"){const s=localStorage.getItem("theme");return s||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}return"dark"});z.useEffect(()=>{localStorage.setItem("theme",r),document.documentElement.classList.toggle("dark",r==="dark")},[r]);const o=()=>{a(s=>s==="dark"?"light":"dark")};return C.jsx(my.Provider,{value:{theme:r,toggleTheme:o},children:t})}function Nr(){const t=z.useContext(my);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t}const Pv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,a,o)=>o?o.toUpperCase():a.toLowerCase()),Qm=t=>{const r=Nv(t);return r.charAt(0).toUpperCase()+r.slice(1)},gy=(...t)=>t.filter((r,a,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===a).join(" ").trim(),Rv=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Ov={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Dv=z.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:c,iconNode:f,...d},m)=>z.createElement("svg",{ref:m,...Ov,width:r,height:r,stroke:t,strokeWidth:o?Number(a)*24/Number(r):a,className:gy("lucide",s),...!c&&!Rv(d)&&{"aria-hidden":"true"},...d},[...f.map(([h,y])=>z.createElement(h,y)),...Array.isArray(c)?c:[c]]));const je=(t,r)=>{const a=z.forwardRef(({className:o,...s},c)=>z.createElement(Dv,{ref:c,iconNode:r,className:gy(`lucide-${Pv(Qm(t))}`,`lucide-${t}`,o),...s}));return a.displayName=Qm(t),a};const zv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],yy=je("arrow-left",zv);const Lv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ta=je("arrow-right",Lv);const jv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Fl=je("book-open",jv);const Bv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],by=je("check",Bv);const Uv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Hv=je("chevron-down",Uv);const Iv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Fv=je("chevron-right",Iv);const qv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Vv=je("chevron-up",qv);const Gv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Yv=je("circle-check",Gv);const Wv=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$v=je("clock",Wv);const Xv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ls=je("code-xml",Xv);const Qv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],xy=je("copy",Qv);const Zv=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Kv=je("github",Zv);const Jv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],nS=je("menu",Jv);const eS=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],tS=je("moon",eS);const iS=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],rS=je("rocket",iS);const aS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],lS=je("sun",aS);const oS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],sS=je("users",oS);const uS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],cS=je("x",uS),Ar=[{id:1,title:"Foundations",description:"Learn Python basics from installation to data types",posts:[{id:1,slug:"01-why-python-in-2026",title:"Why Python in 2026",description:"The case for learning Python today"},{id:2,slug:"02-installing-python",title:"Installing Python & Environment Setup",description:"Get your system ready"},{id:3,slug:"03-your-first-python-program",title:"Your First Python Program",description:"Hello, World! and beyond"},{id:4,slug:"04-python-syntax-basics",title:"Python Syntax Basics",description:"Understanding Python's structure"},{id:5,slug:"05-variables-and-naming-conventions",title:"Variables & Naming Conventions",description:"Storing and naming data"},{id:6,slug:"06-python-data-types-overview",title:"Python Data Types Overview",description:"Understanding types"},{id:7,slug:"07-numbers-in-python",title:"Numbers in Python",description:"Integers, floats, and math"},{id:8,slug:"08-strings-in-python",title:"Strings in Python",description:"Working with text"},{id:9,slug:"09-string-methods-and-f-strings",title:"String Methods & f-Strings",description:"Advanced string manipulation"},{id:10,slug:"10-type-conversion-and-type-checking",title:"Type Conversion & Type Checking",description:"Converting between types"}]},{id:2,title:"Core Data Structures",description:"Master lists, tuples, sets, and dictionaries",posts:[{id:11,slug:"11-lists",title:"Lists",description:"Ordered, mutable sequences"},{id:12,slug:"12-tuples",title:"Tuples",description:"Immutable sequences"},{id:13,slug:"13-sets",title:"Sets",description:"Unique collections"},{id:14,slug:"14-dictionaries",title:"Dictionaries",description:"Key-value mapping"},{id:15,slug:"15-nested-data-structures",title:"Nested Data Structures",description:"Complex data organization"},{id:16,slug:"16-iterating-over-collections",title:"Iterating Over Collections",description:"Looping through data"},{id:17,slug:"17-choosing-the-right-data-structure",title:"Choosing the Right Data Structure",description:"When to use what"},{id:18,slug:"18-common-data-structure-mistakes",title:"Common Data Structure Mistakes",description:"Avoid these pitfalls"},{id:19,slug:"19-practical-data-structure-examples",title:"Practical Data Structure Examples",description:"Real-world applications"},{id:20,slug:"20-mini-project-data-organizer",title:"Mini Project: Data Organizer",description:"Build a contact manager"}]},{id:3,title:"Control Flow",description:"Conditionals, loops, and program logic",posts:[{id:21,slug:"21-conditional-statements",title:"Conditional Statements",description:"if, elif, else"},{id:22,slug:"22-logical-and-comparison-operators",title:"Logical & Comparison Operators",description:"Combining conditions"},{id:23,slug:"23-for-loops",title:"for Loops",description:"Iterating with for"},{id:24,slug:"24-while-loops",title:"while Loops",description:"Conditional iteration"},{id:25,slug:"25-break-continue-pass",title:"break, continue, pass",description:"Loop control"},{id:26,slug:"26-nested-loops",title:"Nested Loops",description:"Loops within loops"},{id:27,slug:"27-loop-patterns",title:"Loop Patterns",description:"Common iteration patterns"},{id:28,slug:"28-writing-clean-conditions",title:"Writing Clean Conditions",description:"Readable conditionals"},{id:29,slug:"29-debugging-logic-errors",title:"Debugging Logic Errors",description:"Finding and fixing bugs"},{id:30,slug:"30-mini-project-cli-decision-app",title:"Mini Project: CLI Decision App",description:"Build a quiz game"}]},{id:4,title:"Functions & Modularity",description:"Organize code with functions and modules",posts:[{id:31,slug:"31-functions-basics",title:"Functions Basics",description:"Defining and calling functions"},{id:32,slug:"32-parameters-and-return-values",title:"Parameters & Return Values",description:"Function inputs and outputs"},{id:33,slug:"33-default-and-keyword-arguments",title:"Default & Keyword Arguments",description:"Flexible function calls"},{id:34,slug:"34-args-and-kwargs",title:"*args and **kwargs",description:"Variable arguments"},{id:35,slug:"35-variable-scope",title:"Variable Scope",description:"Local vs global"},{id:36,slug:"36-lambda-functions",title:"Lambda Functions",description:"Anonymous functions"},{id:37,slug:"37-docstrings-and-documentation",title:"Docstrings & Documentation",description:"Documenting your code"},{id:38,slug:"38-modules-and-packages",title:"Modules & Packages",description:"Organizing code"},{id:39,slug:"39-python-import-system",title:"Python Import System",description:"How imports work"},{id:40,slug:"40-mini-project-utility-library",title:"Mini Project: Utility Library",description:"Build a reusable toolkit"}]},{id:5,title:"Error Handling",description:"Handle errors gracefully and debug effectively",posts:[{id:41,slug:"41-understanding-python-errors",title:"Understanding Python Errors",description:"Reading error messages"},{id:42,slug:"42-try-except-else-finally",title:"try / except / else / finally",description:"Exception handling"},{id:43,slug:"43-raising-custom-exceptions",title:"Raising Custom Exceptions",description:"Creating your own errors"},{id:44,slug:"44-built-in-exceptions",title:"Built-in Exceptions",description:"Python's exception hierarchy"},{id:45,slug:"45-debugging-techniques",title:"Debugging Techniques",description:"Professional debugging"},{id:46,slug:"46-print-vs-logging",title:"print vs logging",description:"Proper output handling"},{id:47,slug:"47-defensive-programming",title:"Defensive Programming",description:"Writing robust code"},{id:48,slug:"48-error-handling-best-practices",title:"Error Handling Best Practices",description:"Industry standards"},{id:49,slug:"49-runtime-error-patterns",title:"Runtime Error Patterns",description:"Common error patterns"},{id:50,slug:"50-mini-project-fault-tolerant-script",title:"Mini Project: Fault-Tolerant Script",description:"Build resilient code"}]},{id:6,title:"Object-Oriented Programming",description:"Master classes, objects, and OOP principles",posts:[{id:51,slug:"51-oop-concepts",title:"OOP Concepts",description:"The OOP paradigm"},{id:52,slug:"52-classes-and-objects",title:"Classes & Objects",description:"Creating classes"},{id:53,slug:"53-init-and-instance-variables",title:"__init__ & Instance Variables",description:"Object initialization"},{id:54,slug:"54-class-vs-instance-variables",title:"Class vs Instance Variables",description:"Shared vs unique data"},{id:55,slug:"55-methods-and-self",title:"Methods & self",description:"Object behavior"},{id:56,slug:"56-inheritance",title:"Inheritance",description:"Extending classes"},{id:57,slug:"57-polymorphism",title:"Polymorphism",description:"Many forms, one interface"},{id:58,slug:"58-encapsulation-and-abstraction",title:"Encapsulation & Abstraction",description:"Hiding complexity"},{id:59,slug:"59-dunder-methods",title:"Dunder Methods",description:"Magic methods"},{id:60,slug:"60-mini-project-oop-application",title:"Mini Project: OOP Application",description:"Build a bank system"}]},{id:7,title:"Files & OS",description:"Work with files, paths, and the operating system",posts:[{id:61,slug:"61-reading-files",title:"Reading Files",description:"Opening and reading"},{id:62,slug:"62-writing-files",title:"Writing Files",description:"Creating and writing"},{id:63,slug:"63-csv-files",title:"CSV Files",description:"Tabular data"},{id:64,slug:"64-json-files",title:"JSON Files",description:"Structured data"},{id:65,slug:"65-file-paths",title:"File Paths",description:"Working with paths"},{id:66,slug:"66-os-module",title:"os Module",description:"Operating system interface"},{id:67,slug:"67-shutil-module",title:"shutil Module",description:"High-level file operations"},{id:68,slug:"68-environment-variables",title:"Environment Variables",description:"Configuration management"},{id:69,slug:"69-argparse-and-cli-args",title:"argparse & CLI Args",description:"Command-line interfaces"},{id:70,slug:"70-mini-project-file-automation-tool",title:"Mini Project: File Automation Tool",description:"Build a file organizer"}]},{id:8,title:"Standard Library Power",description:"Leverage Python's powerful built-in modules",posts:[{id:71,slug:"71-datetime-and-time",title:"datetime & time",description:"Working with dates"},{id:72,slug:"72-math-and-random",title:"math & random",description:"Mathematical operations"},{id:73,slug:"73-collections",title:"collections",description:"Specialized containers"},{id:74,slug:"74-itertools",title:"itertools",description:"Iterator building blocks"},{id:75,slug:"75-functools",title:"functools",description:"Higher-order functions"},{id:76,slug:"76-regular-expressions",title:"Regular Expressions",description:"Pattern matching"},{id:77,slug:"77-subprocess",title:"subprocess",description:"Running external commands"},{id:78,slug:"78-sys-module",title:"sys Module",description:"System-specific parameters"},{id:79,slug:"79-virtual-environments",title:"Virtual Environments",description:"Isolated Python environments"},{id:80,slug:"80-mini-project-productivity-tool",title:"Mini Project: Productivity Tool",description:"Build a task scheduler"}]},{id:9,title:"Testing & Packaging",description:"Write tests and package your code for distribution",posts:[{id:81,slug:"81-writing-clean-code",title:"Writing Clean Code",description:"Code quality principles"},{id:82,slug:"82-pep8-and-style",title:"PEP-8 & Style",description:"Python style guide"},{id:83,slug:"83-unittest",title:"unittest",description:"Built-in testing framework"},{id:84,slug:"84-pytest",title:"pytest",description:"Modern testing with pytest"},{id:85,slug:"85-test-driven-development",title:"Test-Driven Development",description:"TDD methodology"},{id:86,slug:"86-logging-best-practices",title:"Logging Best Practices",description:"Professional logging"},{id:87,slug:"87-packaging-python-code",title:"Packaging Python Code",description:"Creating packages"},{id:88,slug:"88-pyproject-toml",title:"pyproject.toml",description:"Modern project config"},{id:89,slug:"89-publishing-to-pypi",title:"Publishing to PyPI",description:"Share your code"},{id:90,slug:"90-mini-project-publish-a-package",title:"Mini Project: Publish a Package",description:"Create and publish"}]},{id:10,title:"Advanced Python",description:"Master advanced concepts and Python internals",posts:[{id:91,slug:"91-comprehensions",title:"Comprehensions",description:"List, dict, set comprehensions"},{id:92,slug:"92-generators-and-yield",title:"Generators & yield",description:"Lazy evaluation"},{id:93,slug:"93-iterators",title:"Iterators",description:"The iterator protocol"},{id:94,slug:"94-decorators",title:"Decorators",description:"Function wrappers"},{id:95,slug:"95-context-managers",title:"Context Managers",description:"Resource management"},{id:96,slug:"96-shallow-vs-deep-copy",title:"Shallow vs Deep Copy",description:"Object copying"},{id:97,slug:"97-memory-management",title:"Memory Management",description:"How Python handles memory"},{id:98,slug:"98-performance-optimization",title:"Performance Optimization",description:"Making code faster"},{id:99,slug:"99-python-internals",title:"Python Internals",description:"Under the hood"},{id:100,slug:"100-advanced-mini-project",title:"Advanced Mini Project",description:"Build a caching system"}]},{id:11,title:"Real-World Python",description:"Apply Python in real-world applications",posts:[{id:101,slug:"101-automation-scripts",title:"Automation Scripts",description:"Automate repetitive tasks"},{id:102,slug:"102-backend-with-fastapi",title:"Backend with FastAPI",description:"Building APIs"},{id:103,slug:"103-data-processing",title:"Data Processing",description:"ETL and pipelines"},{id:104,slug:"104-python-scripting",title:"Python Scripting",description:"System scripting"},{id:105,slug:"105-python-for-devops",title:"Python for DevOps",description:"DevOps automation"},{id:106,slug:"106-testing-tools",title:"Testing Tools",description:"Advanced testing"},{id:107,slug:"107-python-for-ai-ml",title:"Python for AI/ML",description:"Machine learning intro"},{id:108,slug:"108-cli-tool-development",title:"CLI Tool Development",description:"Professional CLIs"},{id:109,slug:"109-project-structuring",title:"Project Structuring",description:"Organizing real projects"},{id:110,slug:"110-capstone-project",title:"Capstone Project",description:"Build a complete app"}]},{id:12,title:"Career & Mastery",description:"Become a professional Python developer",posts:[{id:111,slug:"111-production-grade-python",title:"Production-Grade Python",description:"Production best practices"},{id:112,slug:"112-code-reviews-and-refactoring",title:"Code Reviews & Refactoring",description:"Improving code"},{id:113,slug:"113-project-architecture",title:"Project Architecture",description:"Designing systems"},{id:114,slug:"114-security-best-practices",title:"Security Best Practices",description:"Secure coding"},{id:115,slug:"115-interview-preparation",title:"Interview Preparation",description:"Ace the interview"},{id:116,slug:"116-system-design-basics",title:"System Design Basics",description:"Designing at scale"},{id:117,slug:"117-open-source-contribution",title:"Open-Source Contribution",description:"Contributing to OSS"},{id:118,slug:"118-building-a-python-portfolio",title:"Building a Python Portfolio",description:"Showcase your work"},{id:119,slug:"119-python-career-roadmap-2026",title:"Python Career Roadmap 2026",description:"Career paths"},{id:120,slug:"120-series-wrap-up-and-next-steps",title:"Series Wrap-Up & Next Steps",description:"What's next"}]}],ks={name:"Sitharaj Seenivasan",series:"Python Programming Learning 2026"};function fS(){const[t,r]=z.useState(!1),{theme:a,toggleTheme:o}=Nr();return C.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${a==="dark"?"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900":"bg-gradient-to-br from-slate-50 via-white to-slate-100"}`,children:[C.jsx("header",{className:`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${a==="dark"?"border-slate-700/50 bg-slate-900/80":"border-slate-200 bg-white/80"}`,children:C.jsxs("div",{className:"mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8",children:[C.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[C.jsx("button",{onClick:()=>r(!t),className:`rounded-lg p-2 transition lg:hidden ${a==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:t?C.jsx(cS,{size:22}):C.jsx(nS,{size:22})}),C.jsxs(Ge,{to:"/",className:"flex items-center gap-2 sm:gap-3",children:[C.jsxs("div",{className:"flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25",children:[C.jsx(Fl,{size:18,className:"sm:hidden"}),C.jsx(Fl,{size:20,className:"hidden sm:block"})]}),C.jsxs("div",{className:"hidden xs:block",children:[C.jsx("h1",{className:`text-base sm:text-lg font-bold ${a==="dark"?"text-white":"text-slate-900"}`,children:"Python Learning"}),C.jsx("p",{className:`text-xs ${a==="dark"?"text-slate-400":"text-slate-500"}`,children:"2026 Edition"})]})]})]}),C.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[C.jsx("button",{onClick:o,className:`rounded-lg p-2 transition ${a==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-yellow-400":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,"aria-label":"Toggle theme",children:a==="dark"?C.jsx(lS,{size:20}):C.jsx(tS,{size:20})}),C.jsxs("a",{href:"https://github.com/sitharaj88/python-programming-learning-2026",target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${a==="dark"?"bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white":"bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"}`,children:[C.jsx(Kv,{size:18}),C.jsx("span",{className:"hidden sm:inline",children:"GitHub"})]})]})]})}),C.jsxs("div",{className:"mx-auto flex max-w-7xl",children:[C.jsx("aside",{className:`fixed inset-y-0 left-0 z-40 w-64 sm:w-72 transform border-r backdrop-blur-xl transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${t?"translate-x-0":"-translate-x-full"} ${a==="dark"?"border-slate-700/50 bg-slate-900/95":"border-slate-200 bg-white/95"}`,style:{top:"56px",height:"calc(100vh - 56px)"},children:C.jsx("nav",{className:"h-full overflow-y-auto p-3 sm:p-4",children:C.jsx("div",{className:"space-y-3 sm:space-y-4",children:Ar.map(s=>C.jsxs("div",{className:`rounded-xl p-2.5 sm:p-3 ${a==="dark"?"bg-slate-800/50":"bg-slate-100"}`,children:[C.jsxs(Ge,{to:`/phase/${s.id}`,onClick:()=>r(!1),className:`group flex items-center justify-between text-xs sm:text-sm font-semibold transition ${a==="dark"?"text-slate-200 hover:text-emerald-400":"text-slate-700 hover:text-emerald-600"}`,children:[C.jsxs("span",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-xs font-bold text-emerald-400",children:s.id}),C.jsx("span",{className:"truncate",children:s.title})]}),C.jsx(Fv,{size:14,className:`flex-shrink-0 transition group-hover:translate-x-1 ${a==="dark"?"text-slate-500 group-hover:text-emerald-400":"text-slate-400 group-hover:text-emerald-600"}`})]}),C.jsxs("p",{className:"mt-1 text-xs truncate text-slate-500",children:[s.posts.length," posts"]})]},s.id))})})}),t&&C.jsx("div",{className:"fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden",style:{top:"56px"},onClick:()=>r(!1)}),C.jsx("main",{className:"flex-1 min-w-0 px-3 py-4 sm:px-6 sm:py-8 lg:px-8",children:C.jsx(W1,{})})]}),C.jsx("footer",{className:`border-t transition-colors duration-300 ${a==="dark"?"border-slate-700/50 bg-slate-900/50":"border-slate-200 bg-slate-50"}`,children:C.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:py-8 text-center sm:px-6 lg:px-8",children:C.jsxs("p",{className:`text-xs sm:text-sm ${a==="dark"?"text-slate-400":"text-slate-600"}`,children:[ks.series," • By ",C.jsx("span",{className:"text-emerald-500",children:ks.name})]})})})]})}const pS=[{icon:Fl,label:"Posts",value:"120"},{icon:Ls,label:"Examples",value:"360+"},{icon:sS,label:"Phases",value:"12"},{icon:rS,label:"Projects",value:"12"}],dS=["Comprehensive book-chapter-level tutorials","Executable Python examples in every post","Progressive difficulty from beginner to expert","Real-world applications and projects","PEP-8 compliant, professionally written code","Career-focused content for 2026 and beyond"];function hS(){const{theme:t}=Nr();return C.jsxs("div",{className:"space-y-8 sm:space-y-16",children:[C.jsxs("section",{className:"relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 p-5 sm:p-8 md:p-12 text-white shadow-2xl",children:[C.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-30"}),C.jsxs("div",{className:"relative z-10",children:[C.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-emerald-200",children:[C.jsx("span",{className:"rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur",children:"2026 Edition"}),C.jsx("span",{className:"text-xs sm:text-sm",children:"• 120 Complete Posts"})]}),C.jsxs("h1",{className:"mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",children:["Python Programming",C.jsx("br",{}),C.jsx("span",{className:"text-emerald-200",children:"Learning Journey"})]}),C.jsxs("p",{className:"mt-4 max-w-2xl text-sm sm:text-lg md:text-xl text-white/80",children:["A comprehensive, structured curriculum from absolute beginner to professional developer. Not a blog. Not short posts. A ",C.jsx("strong",{children:"permanent reference"}),"."]}),C.jsxs("div",{className:"mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4",children:[C.jsxs(Ge,{to:"/phase/1",className:"group flex items-center gap-2 rounded-xl bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-emerald-600 shadow-lg transition hover:bg-emerald-50 hover:shadow-xl",children:["Start Learning",C.jsx(Ta,{size:16,className:"transition group-hover:translate-x-1"})]}),C.jsx("a",{href:"https://github.com/sitharaj88/python-programming-learning-2026",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white backdrop-blur transition hover:bg-white/20",children:"View on GitHub"})]})]})]}),C.jsx("section",{className:"grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",children:pS.map(({icon:r,label:a,value:o})=>C.jsxs("div",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 text-center backdrop-blur transition-colors ${t==="dark"?"border-slate-700/50 bg-slate-800/50":"border-slate-200 bg-white shadow-sm"}`,children:[C.jsx(r,{className:"mx-auto h-6 w-6 sm:h-8 sm:w-8 text-emerald-500"}),C.jsx("p",{className:`mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:o}),C.jsx("p",{className:`text-xs sm:text-sm ${t==="dark"?"text-slate-400":"text-slate-600"}`,children:a})]},a))}),C.jsxs("section",{className:`rounded-xl sm:rounded-2xl border p-5 sm:p-8 transition-colors ${t==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white shadow-sm"}`,children:[C.jsx("h2",{className:`text-lg sm:text-2xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:"What Makes This Different"}),C.jsx("div",{className:"mt-4 sm:mt-6 grid gap-2 sm:gap-3 md:grid-cols-2",children:dS.map(r=>C.jsxs("div",{className:"flex items-start gap-2 sm:gap-3",children:[C.jsx(Yv,{className:"mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-emerald-500"}),C.jsx("span",{className:`text-sm sm:text-base ${t==="dark"?"text-slate-300":"text-slate-700"}`,children:r})]},r))})]}),C.jsxs("section",{children:[C.jsx("h2",{className:`mb-4 sm:mb-6 text-lg sm:text-2xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:"12-Phase Curriculum"}),C.jsx("div",{className:"grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3",children:Ar.map(r=>C.jsxs(Ge,{to:`/phase/${r.id}`,className:`group relative overflow-hidden rounded-xl sm:rounded-2xl border p-4 sm:p-6 transition ${t==="dark"?"border-slate-700/50 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800":"border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-md"}`,children:[C.jsx("div",{className:"absolute -right-4 -top-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-2xl transition group-hover:from-emerald-500/20 group-hover:to-cyan-500/20"}),C.jsxs("div",{className:"relative",children:[C.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[C.jsx("span",{className:"flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm sm:text-lg font-bold text-white shadow-lg shadow-emerald-500/25",children:r.id}),C.jsxs("div",{className:"min-w-0",children:[C.jsx("h3",{className:`font-semibold text-sm sm:text-base truncate ${t==="dark"?"text-white":"text-slate-900"}`,children:r.title}),C.jsxs("p",{className:`text-xs ${t==="dark"?"text-slate-400":"text-slate-500"}`,children:["Posts ",(r.id-1)*10+1,"-",r.id*10]})]})]}),C.jsx("p",{className:`mt-2 sm:mt-3 text-xs sm:text-sm line-clamp-2 ${t==="dark"?"text-slate-400":"text-slate-600"}`,children:r.description}),C.jsxs("div",{className:"mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-500 transition group-hover:gap-3",children:[C.jsx("span",{children:"View posts"}),C.jsx(Ta,{size:14})]})]})]},r.id))})]}),C.jsxs("section",{className:`rounded-xl sm:rounded-2xl border p-5 sm:p-8 text-center ${t==="dark"?"border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10":"border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50"}`,children:[C.jsx("h2",{className:`text-lg sm:text-2xl font-bold ${t==="dark"?"text-white":"text-slate-900"}`,children:"Ready to Master Python?"}),C.jsx("p",{className:`mt-2 text-sm sm:text-base ${t==="dark"?"text-slate-400":"text-slate-600"}`,children:"Start with Phase 1 and work your way through all 120 comprehensive posts."}),C.jsxs(Ge,{to:"/phase/1",className:"mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-xl hover:shadow-emerald-500/30",children:["Begin Your Journey",C.jsx(Ta,{size:16})]})]}),C.jsxs("section",{className:"text-center text-xs sm:text-sm text-slate-500",children:[C.jsxs("p",{children:["Created by ",C.jsx("span",{className:"text-emerald-500",children:ks.name})]}),C.jsx("p",{className:"mt-1",children:ks.series})]})]})}function mS(){const{phaseId:t}=oy(),{theme:r}=Nr(),a=Ar.find(c=>c.id===parseInt(t));if(!a)return C.jsxs("div",{className:"text-center py-16",children:[C.jsx("h1",{className:`text-2xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Phase not found"}),C.jsx(Ge,{to:"/",className:"mt-4 inline-block text-emerald-500 hover:underline",children:"Go back home"})]});const o=Ar.find(c=>c.id===a.id-1),s=Ar.find(c=>c.id===a.id+1);return C.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[C.jsxs("nav",{className:`flex items-center gap-2 text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:[C.jsx(Ge,{to:"/",className:"hover:text-emerald-500",children:"Home"}),C.jsx("span",{children:"/"}),C.jsxs("span",{className:r==="dark"?"text-white":"text-slate-900",children:["Phase ",a.id]})]}),C.jsxs("header",{className:`rounded-xl sm:rounded-2xl border p-5 sm:p-8 transition-colors ${r==="dark"?"border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-800/50":"border-slate-200 bg-white shadow-sm"}`,children:[C.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[C.jsx("div",{className:"flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-xl sm:text-2xl font-bold text-white shadow-lg shadow-emerald-500/25",children:a.id}),C.jsxs("div",{children:[C.jsxs("p",{className:"text-xs sm:text-sm font-medium text-emerald-500",children:["Phase ",a.id," of 12"]}),C.jsx("h1",{className:`text-xl sm:text-3xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:a.title})]})]}),C.jsx("p",{className:`mt-3 sm:mt-4 text-sm sm:text-lg ${r==="dark"?"text-slate-300":"text-slate-600"}`,children:a.description}),C.jsxs("div",{className:`mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:[C.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[C.jsx(Fl,{size:14,className:"text-emerald-500"}),C.jsxs("span",{children:[a.posts.length," posts"]})]}),C.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[C.jsx(Ls,{size:14,className:"text-emerald-500"}),C.jsxs("span",{children:[a.posts.length*3,"+ examples"]})]}),C.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[C.jsx($v,{size:14,className:"text-emerald-500"}),C.jsxs("span",{children:["~",a.posts.length*15," min read"]})]})]})]}),C.jsxs("section",{children:[C.jsx("h2",{className:`mb-3 sm:mb-4 text-lg sm:text-xl font-semibold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Posts in this Phase"}),C.jsx("div",{className:"space-y-2 sm:space-y-3",children:a.posts.map(c=>C.jsxs(Ge,{to:`/post/${c.id}`,className:`group flex items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border p-3 sm:p-4 transition ${r==="dark"?"border-slate-700/50 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800":"border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-sm"}`,children:[C.jsx("div",{className:`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-lg font-bold transition ${r==="dark"?"bg-slate-700/50 text-slate-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-400":"bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-600"}`,children:String(c.id).padStart(2,"0")}),C.jsxs("div",{className:"flex-1 min-w-0",children:[C.jsx("h3",{className:`font-medium text-sm sm:text-base truncate transition ${r==="dark"?"text-white group-hover:text-emerald-400":"text-slate-900 group-hover:text-emerald-600"}`,children:c.title}),C.jsx("p",{className:`text-xs sm:text-sm truncate ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:c.description})]}),C.jsx(Ta,{size:16,className:`flex-shrink-0 transition group-hover:translate-x-1 ${r==="dark"?"text-slate-500 group-hover:text-emerald-400":"text-slate-400 group-hover:text-emerald-600"}`})]},c.id))})]}),C.jsxs("nav",{className:`flex items-center justify-between border-t pt-4 sm:pt-6 ${r==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[o?C.jsxs(Ge,{to:`/phase/${o.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[C.jsx(yy,{size:14,className:"transition group-hover:-translate-x-1"}),C.jsxs("span",{className:"hidden sm:inline",children:["Phase ",o.id,": "]}),o.title]}):C.jsx("div",{}),s&&C.jsxs(Ge,{to:`/phase/${s.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[C.jsxs("span",{className:"hidden sm:inline",children:["Phase ",s.id,": "]}),s.title,C.jsx(Ta,{size:14,className:"transition group-hover:translate-x-1"})]})]})]})}function gS(t,r){const a={};return(t[t.length-1]===""?[...t,""]:t).join((a.padRight?" ":"")+","+(a.padLeft===!1?"":" ")).trim()}const yS=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,bS=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,xS={};function Zm(t,r){return(xS.jsx?bS:yS).test(t)}const vS=/[ \t\n\f\r]/g;function SS(t){return typeof t=="object"?t.type==="text"?Km(t.value):!1:Km(t)}function Km(t){return t.replace(vS,"")===""}class Xl{constructor(r,a,o){this.normal=a,this.property=r,o&&(this.space=o)}}Xl.prototype.normal={};Xl.prototype.property={};Xl.prototype.space=void 0;function vy(t,r){const a={},o={};for(const s of t)Object.assign(a,s.property),Object.assign(o,s.normal);return new Xl(a,o,r)}function Ef(t){return t.toLowerCase()}class dt{constructor(r,a){this.attribute=a,this.property=r}}dt.prototype.attribute="";dt.prototype.booleanish=!1;dt.prototype.boolean=!1;dt.prototype.commaOrSpaceSeparated=!1;dt.prototype.commaSeparated=!1;dt.prototype.defined=!1;dt.prototype.mustUseProperty=!1;dt.prototype.number=!1;dt.prototype.overloadedBoolean=!1;dt.prototype.property="";dt.prototype.spaceSeparated=!1;dt.prototype.space=void 0;let wS=0;const zn=Rr(),De=Rr(),_f=Rr(),en=Rr(),fe=Rr(),ka=Rr(),Et=Rr();function Rr(){return 2**++wS}const Cf=Object.freeze(Object.defineProperty({__proto__:null,boolean:zn,booleanish:De,commaOrSpaceSeparated:Et,commaSeparated:ka,number:en,overloadedBoolean:_f,spaceSeparated:fe},Symbol.toStringTag,{value:"Module"})),Jc=Object.keys(Cf);class Hf extends dt{constructor(r,a,o,s){let c=-1;if(super(r,a),Jm(this,"space",s),typeof o=="number")for(;++c<Jc.length;){const f=Jc[c];Jm(this,Jc[c],(o&Cf[f])===Cf[f])}}}Hf.prototype.defined=!0;function Jm(t,r,a){a&&(t[r]=a)}function Na(t){const r={},a={};for(const[o,s]of Object.entries(t.properties)){const c=new Hf(o,t.transform(t.attributes||{},o),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(c.mustUseProperty=!0),r[o]=c,a[Ef(o)]=o,a[Ef(c.attribute)]=o}return new Xl(r,a,t.space)}const Sy=Na({properties:{ariaActiveDescendant:null,ariaAtomic:De,ariaAutoComplete:null,ariaBusy:De,ariaChecked:De,ariaColCount:en,ariaColIndex:en,ariaColSpan:en,ariaControls:fe,ariaCurrent:null,ariaDescribedBy:fe,ariaDetails:null,ariaDisabled:De,ariaDropEffect:fe,ariaErrorMessage:null,ariaExpanded:De,ariaFlowTo:fe,ariaGrabbed:De,ariaHasPopup:null,ariaHidden:De,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:fe,ariaLevel:en,ariaLive:null,ariaModal:De,ariaMultiLine:De,ariaMultiSelectable:De,ariaOrientation:null,ariaOwns:fe,ariaPlaceholder:null,ariaPosInSet:en,ariaPressed:De,ariaReadOnly:De,ariaRelevant:null,ariaRequired:De,ariaRoleDescription:fe,ariaRowCount:en,ariaRowIndex:en,ariaRowSpan:en,ariaSelected:De,ariaSetSize:en,ariaSort:null,ariaValueMax:en,ariaValueMin:en,ariaValueNow:en,ariaValueText:null,role:null},transform(t,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function wy(t,r){return r in t?t[r]:r}function Ey(t,r){return wy(t,r.toLowerCase())}const ES=Na({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ka,acceptCharset:fe,accessKey:fe,action:null,allow:null,allowFullScreen:zn,allowPaymentRequest:zn,allowUserMedia:zn,alt:null,as:null,async:zn,autoCapitalize:null,autoComplete:fe,autoFocus:zn,autoPlay:zn,blocking:fe,capture:null,charSet:null,checked:zn,cite:null,className:fe,cols:en,colSpan:null,content:null,contentEditable:De,controls:zn,controlsList:fe,coords:en|ka,crossOrigin:null,data:null,dateTime:null,decoding:null,default:zn,defer:zn,dir:null,dirName:null,disabled:zn,download:_f,draggable:De,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:zn,formTarget:null,headers:fe,height:en,hidden:_f,high:en,href:null,hrefLang:null,htmlFor:fe,httpEquiv:fe,id:null,imageSizes:null,imageSrcSet:null,inert:zn,inputMode:null,integrity:null,is:null,isMap:zn,itemId:null,itemProp:fe,itemRef:fe,itemScope:zn,itemType:fe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:zn,low:en,manifest:null,max:null,maxLength:en,media:null,method:null,min:null,minLength:en,multiple:zn,muted:zn,name:null,nonce:null,noModule:zn,noValidate:zn,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:zn,optimum:en,pattern:null,ping:fe,placeholder:null,playsInline:zn,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:zn,referrerPolicy:null,rel:fe,required:zn,reversed:zn,rows:en,rowSpan:en,sandbox:fe,scope:null,scoped:zn,seamless:zn,selected:zn,shadowRootClonable:zn,shadowRootDelegatesFocus:zn,shadowRootMode:null,shape:null,size:en,sizes:null,slot:null,span:en,spellCheck:De,src:null,srcDoc:null,srcLang:null,srcSet:null,start:en,step:null,style:null,tabIndex:en,target:null,title:null,translate:null,type:null,typeMustMatch:zn,useMap:null,value:De,width:en,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:fe,axis:null,background:null,bgColor:null,border:en,borderColor:null,bottomMargin:en,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:zn,declare:zn,event:null,face:null,frame:null,frameBorder:null,hSpace:en,leftMargin:en,link:null,longDesc:null,lowSrc:null,marginHeight:en,marginWidth:en,noResize:zn,noHref:zn,noShade:zn,noWrap:zn,object:null,profile:null,prompt:null,rev:null,rightMargin:en,rules:null,scheme:null,scrolling:De,standby:null,summary:null,text:null,topMargin:en,valueType:null,version:null,vAlign:null,vLink:null,vSpace:en,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:zn,disableRemotePlayback:zn,prefix:null,property:null,results:en,security:null,unselectable:null},space:"html",transform:Ey}),_S=Na({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Et,accentHeight:en,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:en,amplitude:en,arabicForm:null,ascent:en,attributeName:null,attributeType:null,azimuth:en,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:en,by:null,calcMode:null,capHeight:en,className:fe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:en,diffuseConstant:en,direction:null,display:null,dur:null,divisor:en,dominantBaseline:null,download:zn,dx:null,dy:null,edgeMode:null,editable:null,elevation:en,enableBackground:null,end:null,event:null,exponent:en,externalResourcesRequired:null,fill:null,fillOpacity:en,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ka,g2:ka,glyphName:ka,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:en,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:en,horizOriginX:en,horizOriginY:en,id:null,ideographic:en,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:en,k:en,k1:en,k2:en,k3:en,k4:en,kernelMatrix:Et,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:en,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:en,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:en,overlineThickness:en,paintOrder:null,panose1:null,path:null,pathLength:en,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:fe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:en,pointsAtY:en,pointsAtZ:en,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Et,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Et,rev:Et,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Et,requiredFeatures:Et,requiredFonts:Et,requiredFormats:Et,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:en,specularExponent:en,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:en,strikethroughThickness:en,string:null,stroke:null,strokeDashArray:Et,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:en,strokeOpacity:en,strokeWidth:null,style:null,surfaceScale:en,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Et,tabIndex:en,tableValues:null,target:null,targetX:en,targetY:en,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Et,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:en,underlineThickness:en,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:en,values:null,vAlphabetic:en,vMathematical:en,vectorEffect:null,vHanging:en,vIdeographic:en,version:null,vertAdvY:en,vertOriginX:en,vertOriginY:en,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:en,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:wy}),_y=Na({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,r){return"xlink:"+r.slice(5).toLowerCase()}}),Cy=Na({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ey}),Ty=Na({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,r){return"xml:"+r.slice(3).toLowerCase()}}),CS={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},TS=/[A-Z]/g,ng=/-[a-z]/g,kS=/^data[-\w.:]+$/i;function AS(t,r){const a=Ef(r);let o=r,s=dt;if(a in t.normal)return t.property[t.normal[a]];if(a.length>4&&a.slice(0,4)==="data"&&kS.test(r)){if(r.charAt(4)==="-"){const c=r.slice(5).replace(ng,PS);o="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=r.slice(4);if(!ng.test(c)){let f=c.replace(TS,MS);f.charAt(0)!=="-"&&(f="-"+f),r="data"+f}}s=Hf}return new s(o,r)}function MS(t){return"-"+t.toLowerCase()}function PS(t){return t.charAt(1).toUpperCase()}const NS=vy([Sy,ES,_y,Cy,Ty],"html"),If=vy([Sy,_S,_y,Cy,Ty],"svg");function RS(t){return t.join(" ").trim()}var Sa={},nf,eg;function OS(){if(eg)return nf;eg=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,a=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,d=/^\s+|\s+$/g,m=`
`,h="/",y="*",g="",v="comment",x="declaration";function _(D,M){if(typeof D!="string")throw new TypeError("First argument must be a string");if(!D)return[];M=M||{};var j=1,I=1;function on(fn){var Q=fn.match(r);Q&&(j+=Q.length);var L=fn.lastIndexOf(m);I=~L?fn.length-L:I+fn.length}function J(){var fn={line:j,column:I};return function(Q){return Q.position=new B(fn),pn(),Q}}function B(fn){this.start=fn,this.end={line:j,column:I},this.source=M.source}B.prototype.content=D;function Z(fn){var Q=new Error(M.source+":"+j+":"+I+": "+fn);if(Q.reason=fn,Q.filename=M.source,Q.line=j,Q.column=I,Q.source=D,!M.silent)throw Q}function hn(fn){var Q=fn.exec(D);if(Q){var L=Q[0];return on(L),D=D.slice(L.length),Q}}function pn(){hn(a)}function R(fn){var Q;for(fn=fn||[];Q=ln();)Q!==!1&&fn.push(Q);return fn}function ln(){var fn=J();if(!(h!=D.charAt(0)||y!=D.charAt(1))){for(var Q=2;g!=D.charAt(Q)&&(y!=D.charAt(Q)||h!=D.charAt(Q+1));)++Q;if(Q+=2,g===D.charAt(Q-1))return Z("End of comment missing");var L=D.slice(2,Q-2);return I+=2,on(L),D=D.slice(Q),I+=2,fn({type:v,comment:L})}}function sn(){var fn=J(),Q=hn(o);if(Q){if(ln(),!hn(s))return Z("property missing ':'");var L=hn(c),K=fn({type:x,property:N(Q[0].replace(t,g)),value:L?N(L[0].replace(t,g)):g});return hn(f),K}}function Pn(){var fn=[];R(fn);for(var Q;Q=sn();)Q!==!1&&(fn.push(Q),R(fn));return fn}return pn(),Pn()}function N(D){return D?D.replace(d,g):g}return nf=_,nf}var tg;function DS(){if(tg)return Sa;tg=1;var t=Sa&&Sa.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Sa,"__esModule",{value:!0}),Sa.default=a;const r=t(OS());function a(o,s){let c=null;if(!o||typeof o!="string")return c;const f=(0,r.default)(o),d=typeof s=="function";return f.forEach(m=>{if(m.type!=="declaration")return;const{property:h,value:y}=m;d?s(h,y,m):y&&(c=c||{},c[h]=y)}),c}return Sa}var Nl={},ig;function zS(){if(ig)return Nl;ig=1,Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,a=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,c=function(h){return!h||a.test(h)||t.test(h)},f=function(h,y){return y.toUpperCase()},d=function(h,y){return"".concat(y,"-")},m=function(h,y){return y===void 0&&(y={}),c(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(s,d):h=h.replace(o,d),h.replace(r,f))};return Nl.camelCase=m,Nl}var Rl,rg;function LS(){if(rg)return Rl;rg=1;var t=Rl&&Rl.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},r=t(DS()),a=zS();function o(s,c){var f={};return!s||typeof s!="string"||(0,r.default)(s,function(d,m){d&&m&&(f[(0,a.camelCase)(d,c)]=m)}),f}return o.default=o,Rl=o,Rl}var jS=LS();const BS=Os(jS),ky=Ay("end"),Ff=Ay("start");function Ay(t){return r;function r(a){const o=a&&a.position&&a.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function US(t){const r=Ff(t),a=ky(t);if(r&&a)return{start:r,end:a}}function jl(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?ag(t.position):"start"in t||"end"in t?ag(t):"line"in t||"column"in t?Tf(t):""}function Tf(t){return lg(t&&t.line)+":"+lg(t&&t.column)}function ag(t){return Tf(t&&t.start)+"-"+Tf(t&&t.end)}function lg(t){return t&&typeof t=="number"?t:1}class Ze extends Error{constructor(r,a,o){super(),typeof a=="string"&&(o=a,a=void 0);let s="",c={},f=!1;if(a&&("line"in a&&"column"in a?c={place:a}:"start"in a&&"end"in a?c={place:a}:"type"in a?c={ancestors:[a],place:a.position}:c={...a}),typeof r=="string"?s=r:!c.cause&&r&&(f=!0,s=r.message,c.cause=r),!c.ruleId&&!c.source&&typeof o=="string"){const m=o.indexOf(":");m===-1?c.ruleId=o:(c.source=o.slice(0,m),c.ruleId=o.slice(m+1))}if(!c.place&&c.ancestors&&c.ancestors){const m=c.ancestors[c.ancestors.length-1];m&&(c.place=m.position)}const d=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=d?d.line:void 0,this.name=jl(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=f&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ze.prototype.file="";Ze.prototype.name="";Ze.prototype.reason="";Ze.prototype.message="";Ze.prototype.stack="";Ze.prototype.column=void 0;Ze.prototype.line=void 0;Ze.prototype.ancestors=void 0;Ze.prototype.cause=void 0;Ze.prototype.fatal=void 0;Ze.prototype.place=void 0;Ze.prototype.ruleId=void 0;Ze.prototype.source=void 0;const qf={}.hasOwnProperty,HS=new Map,IS=/[A-Z]/g,FS=new Set(["table","tbody","thead","tfoot","tr"]),qS=new Set(["td","th"]),My="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function VS(t,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const a=r.filePath||void 0;let o;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=KS(a,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=ZS(a,r.jsx,r.jsxs)}const s={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:o,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:a,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?If:NS,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},c=Py(s,t,void 0);return c&&typeof c!="string"?c:s.create(t,s.Fragment,{children:c||void 0},void 0)}function Py(t,r,a){if(r.type==="element")return GS(t,r,a);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return YS(t,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return $S(t,r,a);if(r.type==="mdxjsEsm")return WS(t,r);if(r.type==="root")return XS(t,r,a);if(r.type==="text")return QS(t,r)}function GS(t,r,a){const o=t.schema;let s=o;r.tagName.toLowerCase()==="svg"&&o.space==="html"&&(s=If,t.schema=s),t.ancestors.push(r);const c=Ry(t,r.tagName,!1),f=JS(t,r);let d=Gf(t,r);return FS.has(r.tagName)&&(d=d.filter(function(m){return typeof m=="string"?!SS(m):!0})),Ny(t,f,c,r),Vf(f,d),t.ancestors.pop(),t.schema=o,t.create(r,c,f,a)}function YS(t,r){if(r.data&&r.data.estree&&t.evaluater){const o=r.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}ql(t,r.position)}function WS(t,r){if(r.data&&r.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(r.data.estree);ql(t,r.position)}function $S(t,r,a){const o=t.schema;let s=o;r.name==="svg"&&o.space==="html"&&(s=If,t.schema=s),t.ancestors.push(r);const c=r.name===null?t.Fragment:Ry(t,r.name,!0),f=n2(t,r),d=Gf(t,r);return Ny(t,f,c,r),Vf(f,d),t.ancestors.pop(),t.schema=o,t.create(r,c,f,a)}function XS(t,r,a){const o={};return Vf(o,Gf(t,r)),t.create(r,t.Fragment,o,a)}function QS(t,r){return r.value}function Ny(t,r,a,o){typeof a!="string"&&a!==t.Fragment&&t.passNode&&(r.node=o)}function Vf(t,r){if(r.length>0){const a=r.length>1?r:r[0];a&&(t.children=a)}}function ZS(t,r,a){return o;function o(s,c,f,d){const h=Array.isArray(f.children)?a:r;return d?h(c,f,d):h(c,f)}}function KS(t,r){return a;function a(o,s,c,f){const d=Array.isArray(c.children),m=Ff(o);return r(s,c,f,d,{columnNumber:m?m.column-1:void 0,fileName:t,lineNumber:m?m.line:void 0},void 0)}}function JS(t,r){const a={};let o,s;for(s in r.properties)if(s!=="children"&&qf.call(r.properties,s)){const c=e2(t,s,r.properties[s]);if(c){const[f,d]=c;t.tableCellAlignToStyle&&f==="align"&&typeof d=="string"&&qS.has(r.tagName)?o=d:a[f]=d}}if(o){const c=a.style||(a.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return a}function n2(t,r){const a={};for(const o of r.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const c=o.data.estree.body[0];c.type;const f=c.expression;f.type;const d=f.properties[0];d.type,Object.assign(a,t.evaluater.evaluateExpression(d.argument))}else ql(t,r.position);else{const s=o.name;let c;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const d=o.value.data.estree.body[0];d.type,c=t.evaluater.evaluateExpression(d.expression)}else ql(t,r.position);else c=o.value===null?!0:o.value;a[s]=c}return a}function Gf(t,r){const a=[];let o=-1;const s=t.passKeys?new Map:HS;for(;++o<r.children.length;){const c=r.children[o];let f;if(t.passKeys){const m=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(m){const h=s.get(m)||0;f=m+"-"+h,s.set(m,h+1)}}const d=Py(t,c,f);d!==void 0&&a.push(d)}return a}function e2(t,r,a){const o=AS(t.schema,r);if(!(a==null||typeof a=="number"&&Number.isNaN(a))){if(Array.isArray(a)&&(a=o.commaSeparated?gS(a):RS(a)),o.property==="style"){let s=typeof a=="object"?a:t2(t,String(a));return t.stylePropertyNameCase==="css"&&(s=i2(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&o.space?CS[o.property]||o.property:o.attribute,a]}}function t2(t,r){try{return BS(r,{reactCompat:!0})}catch(a){if(t.ignoreInvalidStyle)return{};const o=a,s=new Ze("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=My+"#cannot-parse-style-attribute",s}}function Ry(t,r,a){let o;if(!a)o={type:"Literal",value:r};else if(r.includes(".")){const s=r.split(".");let c=-1,f;for(;++c<s.length;){const d=Zm(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};f=f?{type:"MemberExpression",object:f,property:d,computed:!!(c&&d.type==="Literal"),optional:!1}:d}o=f}else o=Zm(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(o.type==="Literal"){const s=o.value;return qf.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(o);ql(t)}function ql(t,r){const a=new Ze("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw a.file=t.filePath||void 0,a.url=My+"#cannot-handle-mdx-estrees-without-createevaluater",a}function i2(t){const r={};let a;for(a in t)qf.call(t,a)&&(r[r2(a)]=t[a]);return r}function r2(t){let r=t.replace(IS,a2);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function a2(t){return"-"+t.toLowerCase()}const ef={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},l2={};function Yf(t,r){const a=l2,o=typeof a.includeImageAlt=="boolean"?a.includeImageAlt:!0,s=typeof a.includeHtml=="boolean"?a.includeHtml:!0;return Oy(t,o,s)}function Oy(t,r,a){if(o2(t)){if("value"in t)return t.type==="html"&&!a?"":t.value;if(r&&"alt"in t&&t.alt)return t.alt;if("children"in t)return og(t.children,r,a)}return Array.isArray(t)?og(t,r,a):""}function og(t,r,a){const o=[];let s=-1;for(;++s<t.length;)o[s]=Oy(t[s],r,a);return o.join("")}function o2(t){return!!(t&&typeof t=="object")}const sg=document.createElement("i");function Wf(t){const r="&"+t+";";sg.innerHTML=r;const a=sg.textContent;return a.charCodeAt(a.length-1)===59&&t!=="semi"||a===r?!1:a}function Ct(t,r,a,o){const s=t.length;let c=0,f;if(r<0?r=-r>s?0:s+r:r=r>s?s:r,a=a>0?a:0,o.length<1e4)f=Array.from(o),f.unshift(r,a),t.splice(...f);else for(a&&t.splice(r,a);c<o.length;)f=o.slice(c,c+1e4),f.unshift(r,0),t.splice(...f),c+=1e4,r+=1e4}function zt(t,r){return t.length>0?(Ct(t,t.length,0,r),t):r}const ug={}.hasOwnProperty;function Dy(t){const r={};let a=-1;for(;++a<t.length;)s2(r,t[a]);return r}function s2(t,r){let a;for(a in r){const s=(ug.call(t,a)?t[a]:void 0)||(t[a]={}),c=r[a];let f;if(c)for(f in c){ug.call(s,f)||(s[f]=[]);const d=c[f];u2(s[f],Array.isArray(d)?d:d?[d]:[])}}}function u2(t,r){let a=-1;const o=[];for(;++a<r.length;)(r[a].add==="after"?t:o).push(r[a]);Ct(t,0,0,o)}function zy(t,r){const a=Number.parseInt(t,r);return a<9||a===11||a>13&&a<32||a>126&&a<160||a>55295&&a<57344||a>64975&&a<65008||(a&65535)===65535||(a&65535)===65534||a>1114111?"�":String.fromCodePoint(a)}function qt(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const tt=ir(/[A-Za-z]/),Qe=ir(/[\dA-Za-z]/),c2=ir(/[#-'*+\--9=?A-Z^-~]/);function As(t){return t!==null&&(t<32||t===127)}const kf=ir(/\d/),f2=ir(/[\dA-Fa-f]/),p2=ir(/[!-/:-@[-`{-~]/);function En(t){return t!==null&&t<-2}function se(t){return t!==null&&(t<0||t===32)}function In(t){return t===-2||t===-1||t===32}const js=ir(new RegExp("\\p{P}|\\p{S}","u")),Mr=ir(/\s/);function ir(t){return r;function r(a){return a!==null&&a>-1&&t.test(String.fromCharCode(a))}}function Ra(t){const r=[];let a=-1,o=0,s=0;for(;++a<t.length;){const c=t.charCodeAt(a);let f="";if(c===37&&Qe(t.charCodeAt(a+1))&&Qe(t.charCodeAt(a+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(f=String.fromCharCode(c));else if(c>55295&&c<57344){const d=t.charCodeAt(a+1);c<56320&&d>56319&&d<57344?(f=String.fromCharCode(c,d),s=1):f="�"}else f=String.fromCharCode(c);f&&(r.push(t.slice(o,a),encodeURIComponent(f)),o=a+s+1,f=""),s&&(a+=s,s=0)}return r.join("")+t.slice(o)}function Yn(t,r,a,o){const s=o?o-1:Number.POSITIVE_INFINITY;let c=0;return f;function f(m){return In(m)?(t.enter(a),d(m)):r(m)}function d(m){return In(m)&&c++<s?(t.consume(m),d):(t.exit(a),r(m))}}const d2={tokenize:h2};function h2(t){const r=t.attempt(this.parser.constructs.contentInitial,o,s);let a;return r;function o(d){if(d===null){t.consume(d);return}return t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),Yn(t,r,"linePrefix")}function s(d){return t.enter("paragraph"),c(d)}function c(d){const m=t.enter("chunkText",{contentType:"text",previous:a});return a&&(a.next=m),a=m,f(d)}function f(d){if(d===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(d);return}return En(d)?(t.consume(d),t.exit("chunkText"),c):(t.consume(d),f)}}const m2={tokenize:g2},cg={tokenize:y2};function g2(t){const r=this,a=[];let o=0,s,c,f;return d;function d(I){if(o<a.length){const on=a[o];return r.containerState=on[1],t.attempt(on[0].continuation,m,h)(I)}return h(I)}function m(I){if(o++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,s&&j();const on=r.events.length;let J=on,B;for(;J--;)if(r.events[J][0]==="exit"&&r.events[J][1].type==="chunkFlow"){B=r.events[J][1].end;break}M(o);let Z=on;for(;Z<r.events.length;)r.events[Z][1].end={...B},Z++;return Ct(r.events,J+1,0,r.events.slice(on)),r.events.length=Z,h(I)}return d(I)}function h(I){if(o===a.length){if(!s)return v(I);if(s.currentConstruct&&s.currentConstruct.concrete)return _(I);r.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return r.containerState={},t.check(cg,y,g)(I)}function y(I){return s&&j(),M(o),v(I)}function g(I){return r.parser.lazy[r.now().line]=o!==a.length,f=r.now().offset,_(I)}function v(I){return r.containerState={},t.attempt(cg,x,_)(I)}function x(I){return o++,a.push([r.currentConstruct,r.containerState]),v(I)}function _(I){if(I===null){s&&j(),M(0),t.consume(I);return}return s=s||r.parser.flow(r.now()),t.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:c}),N(I)}function N(I){if(I===null){D(t.exit("chunkFlow"),!0),M(0),t.consume(I);return}return En(I)?(t.consume(I),D(t.exit("chunkFlow")),o=0,r.interrupt=void 0,d):(t.consume(I),N)}function D(I,on){const J=r.sliceStream(I);if(on&&J.push(null),I.previous=c,c&&(c.next=I),c=I,s.defineSkip(I.start),s.write(J),r.parser.lazy[I.start.line]){let B=s.events.length;for(;B--;)if(s.events[B][1].start.offset<f&&(!s.events[B][1].end||s.events[B][1].end.offset>f))return;const Z=r.events.length;let hn=Z,pn,R;for(;hn--;)if(r.events[hn][0]==="exit"&&r.events[hn][1].type==="chunkFlow"){if(pn){R=r.events[hn][1].end;break}pn=!0}for(M(o),B=Z;B<r.events.length;)r.events[B][1].end={...R},B++;Ct(r.events,hn+1,0,r.events.slice(Z)),r.events.length=B}}function M(I){let on=a.length;for(;on-- >I;){const J=a[on];r.containerState=J[1],J[0].exit.call(r,t)}a.length=I}function j(){s.write([null]),c=void 0,s=void 0,r.containerState._closeFlow=void 0}}function y2(t,r,a){return Yn(t,t.attempt(this.parser.constructs.document,r,a),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Aa(t){if(t===null||se(t)||Mr(t))return 1;if(js(t))return 2}function Bs(t,r,a){const o=[];let s=-1;for(;++s<t.length;){const c=t[s].resolveAll;c&&!o.includes(c)&&(r=c(r,a),o.push(c))}return r}const Af={name:"attention",resolveAll:b2,tokenize:x2};function b2(t,r){let a=-1,o,s,c,f,d,m,h,y;for(;++a<t.length;)if(t[a][0]==="enter"&&t[a][1].type==="attentionSequence"&&t[a][1]._close){for(o=a;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&r.sliceSerialize(t[o][1]).charCodeAt(0)===r.sliceSerialize(t[a][1]).charCodeAt(0)){if((t[o][1]._close||t[a][1]._open)&&(t[a][1].end.offset-t[a][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[a][1].end.offset-t[a][1].start.offset)%3))continue;m=t[o][1].end.offset-t[o][1].start.offset>1&&t[a][1].end.offset-t[a][1].start.offset>1?2:1;const g={...t[o][1].end},v={...t[a][1].start};fg(g,-m),fg(v,m),f={type:m>1?"strongSequence":"emphasisSequence",start:g,end:{...t[o][1].end}},d={type:m>1?"strongSequence":"emphasisSequence",start:{...t[a][1].start},end:v},c={type:m>1?"strongText":"emphasisText",start:{...t[o][1].end},end:{...t[a][1].start}},s={type:m>1?"strong":"emphasis",start:{...f.start},end:{...d.end}},t[o][1].end={...f.start},t[a][1].start={...d.end},h=[],t[o][1].end.offset-t[o][1].start.offset&&(h=zt(h,[["enter",t[o][1],r],["exit",t[o][1],r]])),h=zt(h,[["enter",s,r],["enter",f,r],["exit",f,r],["enter",c,r]]),h=zt(h,Bs(r.parser.constructs.insideSpan.null,t.slice(o+1,a),r)),h=zt(h,[["exit",c,r],["enter",d,r],["exit",d,r],["exit",s,r]]),t[a][1].end.offset-t[a][1].start.offset?(y=2,h=zt(h,[["enter",t[a][1],r],["exit",t[a][1],r]])):y=0,Ct(t,o-1,a-o+3,h),a=o+h.length-y-2;break}}for(a=-1;++a<t.length;)t[a][1].type==="attentionSequence"&&(t[a][1].type="data");return t}function x2(t,r){const a=this.parser.constructs.attentionMarkers.null,o=this.previous,s=Aa(o);let c;return f;function f(m){return c=m,t.enter("attentionSequence"),d(m)}function d(m){if(m===c)return t.consume(m),d;const h=t.exit("attentionSequence"),y=Aa(m),g=!y||y===2&&s||a.includes(m),v=!s||s===2&&y||a.includes(o);return h._open=!!(c===42?g:g&&(s||!v)),h._close=!!(c===42?v:v&&(y||!g)),r(m)}}function fg(t,r){t.column+=r,t.offset+=r,t._bufferIndex+=r}const v2={name:"autolink",tokenize:S2};function S2(t,r,a){let o=0;return s;function s(x){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(x){return tt(x)?(t.consume(x),f):x===64?a(x):h(x)}function f(x){return x===43||x===45||x===46||Qe(x)?(o=1,d(x)):h(x)}function d(x){return x===58?(t.consume(x),o=0,m):(x===43||x===45||x===46||Qe(x))&&o++<32?(t.consume(x),d):(o=0,h(x))}function m(x){return x===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.exit("autolink"),r):x===null||x===32||x===60||As(x)?a(x):(t.consume(x),m)}function h(x){return x===64?(t.consume(x),y):c2(x)?(t.consume(x),h):a(x)}function y(x){return Qe(x)?g(x):a(x)}function g(x){return x===46?(t.consume(x),o=0,y):x===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(x),t.exit("autolinkMarker"),t.exit("autolink"),r):v(x)}function v(x){if((x===45||Qe(x))&&o++<63){const _=x===45?v:g;return t.consume(x),_}return a(x)}}const Ql={partial:!0,tokenize:w2};function w2(t,r,a){return o;function o(c){return In(c)?Yn(t,s,"linePrefix")(c):s(c)}function s(c){return c===null||En(c)?r(c):a(c)}}const Ly={continuation:{tokenize:_2},exit:C2,name:"blockQuote",tokenize:E2};function E2(t,r,a){const o=this;return s;function s(f){if(f===62){const d=o.containerState;return d.open||(t.enter("blockQuote",{_container:!0}),d.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(f),t.exit("blockQuoteMarker"),c}return a(f)}function c(f){return In(f)?(t.enter("blockQuotePrefixWhitespace"),t.consume(f),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),r):(t.exit("blockQuotePrefix"),r(f))}}function _2(t,r,a){const o=this;return s;function s(f){return In(f)?Yn(t,c,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):c(f)}function c(f){return t.attempt(Ly,r,a)(f)}}function C2(t){t.exit("blockQuote")}const jy={name:"characterEscape",tokenize:T2};function T2(t,r,a){return o;function o(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),s}function s(c){return p2(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),r):a(c)}}const By={name:"characterReference",tokenize:k2};function k2(t,r,a){const o=this;let s=0,c,f;return d;function d(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),m}function m(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),c=31,f=Qe,y(g))}function h(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,f=f2,y):(t.enter("characterReferenceValue"),c=7,f=kf,y(g))}function y(g){if(g===59&&s){const v=t.exit("characterReferenceValue");return f===Qe&&!Wf(o.sliceSerialize(v))?a(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),r)}return f(g)&&s++<c?(t.consume(g),y):a(g)}}const pg={partial:!0,tokenize:M2},dg={concrete:!0,name:"codeFenced",tokenize:A2};function A2(t,r,a){const o=this,s={partial:!0,tokenize:J};let c=0,f=0,d;return m;function m(B){return h(B)}function h(B){const Z=o.events[o.events.length-1];return c=Z&&Z[1].type==="linePrefix"?Z[2].sliceSerialize(Z[1],!0).length:0,d=B,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),y(B)}function y(B){return B===d?(f++,t.consume(B),y):f<3?a(B):(t.exit("codeFencedFenceSequence"),In(B)?Yn(t,g,"whitespace")(B):g(B))}function g(B){return B===null||En(B)?(t.exit("codeFencedFence"),o.interrupt?r(B):t.check(pg,N,on)(B)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),v(B))}function v(B){return B===null||En(B)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(B)):In(B)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Yn(t,x,"whitespace")(B)):B===96&&B===d?a(B):(t.consume(B),v)}function x(B){return B===null||En(B)?g(B):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),_(B))}function _(B){return B===null||En(B)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(B)):B===96&&B===d?a(B):(t.consume(B),_)}function N(B){return t.attempt(s,on,D)(B)}function D(B){return t.enter("lineEnding"),t.consume(B),t.exit("lineEnding"),M}function M(B){return c>0&&In(B)?Yn(t,j,"linePrefix",c+1)(B):j(B)}function j(B){return B===null||En(B)?t.check(pg,N,on)(B):(t.enter("codeFlowValue"),I(B))}function I(B){return B===null||En(B)?(t.exit("codeFlowValue"),j(B)):(t.consume(B),I)}function on(B){return t.exit("codeFenced"),r(B)}function J(B,Z,hn){let pn=0;return R;function R(Q){return B.enter("lineEnding"),B.consume(Q),B.exit("lineEnding"),ln}function ln(Q){return B.enter("codeFencedFence"),In(Q)?Yn(B,sn,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):sn(Q)}function sn(Q){return Q===d?(B.enter("codeFencedFenceSequence"),Pn(Q)):hn(Q)}function Pn(Q){return Q===d?(pn++,B.consume(Q),Pn):pn>=f?(B.exit("codeFencedFenceSequence"),In(Q)?Yn(B,fn,"whitespace")(Q):fn(Q)):hn(Q)}function fn(Q){return Q===null||En(Q)?(B.exit("codeFencedFence"),Z(Q)):hn(Q)}}}function M2(t,r,a){const o=this;return s;function s(f){return f===null?a(f):(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c)}function c(f){return o.parser.lazy[o.now().line]?a(f):r(f)}}const tf={name:"codeIndented",tokenize:N2},P2={partial:!0,tokenize:R2};function N2(t,r,a){const o=this;return s;function s(h){return t.enter("codeIndented"),Yn(t,c,"linePrefix",5)(h)}function c(h){const y=o.events[o.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?f(h):a(h)}function f(h){return h===null?m(h):En(h)?t.attempt(P2,f,m)(h):(t.enter("codeFlowValue"),d(h))}function d(h){return h===null||En(h)?(t.exit("codeFlowValue"),f(h)):(t.consume(h),d)}function m(h){return t.exit("codeIndented"),r(h)}}function R2(t,r,a){const o=this;return s;function s(f){return o.parser.lazy[o.now().line]?a(f):En(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),s):Yn(t,c,"linePrefix",5)(f)}function c(f){const d=o.events[o.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(f):En(f)?s(f):a(f)}}const O2={name:"codeText",previous:z2,resolve:D2,tokenize:L2};function D2(t){let r=t.length-4,a=3,o,s;if((t[a][1].type==="lineEnding"||t[a][1].type==="space")&&(t[r][1].type==="lineEnding"||t[r][1].type==="space")){for(o=a;++o<r;)if(t[o][1].type==="codeTextData"){t[a][1].type="codeTextPadding",t[r][1].type="codeTextPadding",a+=2,r-=2;break}}for(o=a-1,r++;++o<=r;)s===void 0?o!==r&&t[o][1].type!=="lineEnding"&&(s=o):(o===r||t[o][1].type==="lineEnding")&&(t[s][1].type="codeTextData",o!==s+2&&(t[s][1].end=t[o-1][1].end,t.splice(s+2,o-s-2),r-=o-s-2,o=s+2),s=void 0);return t}function z2(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function L2(t,r,a){let o=0,s,c;return f;function f(g){return t.enter("codeText"),t.enter("codeTextSequence"),d(g)}function d(g){return g===96?(t.consume(g),o++,d):(t.exit("codeTextSequence"),m(g))}function m(g){return g===null?a(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),m):g===96?(c=t.enter("codeTextSequence"),s=0,y(g)):En(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),m):(t.enter("codeTextData"),h(g))}function h(g){return g===null||g===32||g===96||En(g)?(t.exit("codeTextData"),m(g)):(t.consume(g),h)}function y(g){return g===96?(t.consume(g),s++,y):s===o?(t.exit("codeTextSequence"),t.exit("codeText"),r(g)):(c.type="codeTextData",h(g))}}class j2{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,a){const o=a??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(r,o):r>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(r,a,o){const s=a||0;this.setCursor(Math.trunc(r));const c=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return o&&Ol(this.left,o),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),Ol(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),Ol(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const a=this.left.splice(r,Number.POSITIVE_INFINITY);Ol(this.right,a.reverse())}else{const a=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);Ol(this.left,a.reverse())}}}function Ol(t,r){let a=0;if(r.length<1e4)t.push(...r);else for(;a<r.length;)t.push(...r.slice(a,a+1e4)),a+=1e4}function Uy(t){const r={};let a=-1,o,s,c,f,d,m,h;const y=new j2(t);for(;++a<y.length;){for(;a in r;)a=r[a];if(o=y.get(a),a&&o[1].type==="chunkFlow"&&y.get(a-1)[1].type==="listItemPrefix"&&(m=o[1]._tokenizer.events,c=0,c<m.length&&m[c][1].type==="lineEndingBlank"&&(c+=2),c<m.length&&m[c][1].type==="content"))for(;++c<m.length&&m[c][1].type!=="content";)m[c][1].type==="chunkText"&&(m[c][1]._isInFirstContentOfListItem=!0,c++);if(o[0]==="enter")o[1].contentType&&(Object.assign(r,B2(y,a)),a=r[a],h=!0);else if(o[1]._container){for(c=a,s=void 0;c--;)if(f=y.get(c),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(s&&(y.get(s)[1].type="lineEndingBlank"),f[1].type="lineEnding",s=c);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;s&&(o[1].end={...y.get(s)[1].start},d=y.slice(s,a),d.unshift(o),y.splice(s,a-s+1,d))}}return Ct(t,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function B2(t,r){const a=t.get(r)[1],o=t.get(r)[2];let s=r-1;const c=[];let f=a._tokenizer;f||(f=o.parser[a.contentType](a.start),a._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const d=f.events,m=[],h={};let y,g,v=-1,x=a,_=0,N=0;const D=[N];for(;x;){for(;t.get(++s)[1]!==x;);c.push(s),x._tokenizer||(y=o.sliceStream(x),x.next||y.push(null),g&&f.defineSkip(x.start),x._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(y),x._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),g=x,x=x.next}for(x=a;++v<d.length;)d[v][0]==="exit"&&d[v-1][0]==="enter"&&d[v][1].type===d[v-1][1].type&&d[v][1].start.line!==d[v][1].end.line&&(N=v+1,D.push(N),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(f.events=[],x?(x._tokenizer=void 0,x.previous=void 0):D.pop(),v=D.length;v--;){const M=d.slice(D[v],D[v+1]),j=c.pop();m.push([j,j+M.length-1]),t.splice(j,2,M)}for(m.reverse(),v=-1;++v<m.length;)h[_+m[v][0]]=_+m[v][1],_+=m[v][1]-m[v][0]-1;return h}const U2={resolve:I2,tokenize:F2},H2={partial:!0,tokenize:q2};function I2(t){return Uy(t),t}function F2(t,r){let a;return o;function o(d){return t.enter("content"),a=t.enter("chunkContent",{contentType:"content"}),s(d)}function s(d){return d===null?c(d):En(d)?t.check(H2,f,c)(d):(t.consume(d),s)}function c(d){return t.exit("chunkContent"),t.exit("content"),r(d)}function f(d){return t.consume(d),t.exit("chunkContent"),a.next=t.enter("chunkContent",{contentType:"content",previous:a}),a=a.next,s}}function q2(t,r,a){const o=this;return s;function s(f){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Yn(t,c,"linePrefix")}function c(f){if(f===null||En(f))return a(f);const d=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(f):t.interrupt(o.parser.constructs.flow,a,r)(f)}}function Hy(t,r,a,o,s,c,f,d,m){const h=m||Number.POSITIVE_INFINITY;let y=0;return g;function g(M){return M===60?(t.enter(o),t.enter(s),t.enter(c),t.consume(M),t.exit(c),v):M===null||M===32||M===41||As(M)?a(M):(t.enter(o),t.enter(f),t.enter(d),t.enter("chunkString",{contentType:"string"}),N(M))}function v(M){return M===62?(t.enter(c),t.consume(M),t.exit(c),t.exit(s),t.exit(o),r):(t.enter(d),t.enter("chunkString",{contentType:"string"}),x(M))}function x(M){return M===62?(t.exit("chunkString"),t.exit(d),v(M)):M===null||M===60||En(M)?a(M):(t.consume(M),M===92?_:x)}function _(M){return M===60||M===62||M===92?(t.consume(M),x):x(M)}function N(M){return!y&&(M===null||M===41||se(M))?(t.exit("chunkString"),t.exit(d),t.exit(f),t.exit(o),r(M)):y<h&&M===40?(t.consume(M),y++,N):M===41?(t.consume(M),y--,N):M===null||M===32||M===40||As(M)?a(M):(t.consume(M),M===92?D:N)}function D(M){return M===40||M===41||M===92?(t.consume(M),N):N(M)}}function Iy(t,r,a,o,s,c){const f=this;let d=0,m;return h;function h(x){return t.enter(o),t.enter(s),t.consume(x),t.exit(s),t.enter(c),y}function y(x){return d>999||x===null||x===91||x===93&&!m||x===94&&!d&&"_hiddenFootnoteSupport"in f.parser.constructs?a(x):x===93?(t.exit(c),t.enter(s),t.consume(x),t.exit(s),t.exit(o),r):En(x)?(t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),y):(t.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===null||x===91||x===93||En(x)||d++>999?(t.exit("chunkString"),y(x)):(t.consume(x),m||(m=!In(x)),x===92?v:g)}function v(x){return x===91||x===92||x===93?(t.consume(x),d++,g):g(x)}}function Fy(t,r,a,o,s,c){let f;return d;function d(v){return v===34||v===39||v===40?(t.enter(o),t.enter(s),t.consume(v),t.exit(s),f=v===40?41:v,m):a(v)}function m(v){return v===f?(t.enter(s),t.consume(v),t.exit(s),t.exit(o),r):(t.enter(c),h(v))}function h(v){return v===f?(t.exit(c),m(f)):v===null?a(v):En(v)?(t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),Yn(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),y(v))}function y(v){return v===f||v===null||En(v)?(t.exit("chunkString"),h(v)):(t.consume(v),v===92?g:y)}function g(v){return v===f||v===92?(t.consume(v),y):y(v)}}function Bl(t,r){let a;return o;function o(s){return En(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),a=!0,o):In(s)?Yn(t,o,a?"linePrefix":"lineSuffix")(s):r(s)}}const V2={name:"definition",tokenize:Y2},G2={partial:!0,tokenize:W2};function Y2(t,r,a){const o=this;let s;return c;function c(x){return t.enter("definition"),f(x)}function f(x){return Iy.call(o,t,d,a,"definitionLabel","definitionLabelMarker","definitionLabelString")(x)}function d(x){return s=qt(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),x===58?(t.enter("definitionMarker"),t.consume(x),t.exit("definitionMarker"),m):a(x)}function m(x){return se(x)?Bl(t,h)(x):h(x)}function h(x){return Hy(t,y,a,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(x)}function y(x){return t.attempt(G2,g,g)(x)}function g(x){return In(x)?Yn(t,v,"whitespace")(x):v(x)}function v(x){return x===null||En(x)?(t.exit("definition"),o.parser.defined.push(s),r(x)):a(x)}}function W2(t,r,a){return o;function o(d){return se(d)?Bl(t,s)(d):a(d)}function s(d){return Fy(t,c,a,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function c(d){return In(d)?Yn(t,f,"whitespace")(d):f(d)}function f(d){return d===null||En(d)?r(d):a(d)}}const $2={name:"hardBreakEscape",tokenize:X2};function X2(t,r,a){return o;function o(c){return t.enter("hardBreakEscape"),t.consume(c),s}function s(c){return En(c)?(t.exit("hardBreakEscape"),r(c)):a(c)}}const Q2={name:"headingAtx",resolve:Z2,tokenize:K2};function Z2(t,r){let a=t.length-2,o=3,s,c;return t[o][1].type==="whitespace"&&(o+=2),a-2>o&&t[a][1].type==="whitespace"&&(a-=2),t[a][1].type==="atxHeadingSequence"&&(o===a-1||a-4>o&&t[a-2][1].type==="whitespace")&&(a-=o+1===a?2:4),a>o&&(s={type:"atxHeadingText",start:t[o][1].start,end:t[a][1].end},c={type:"chunkText",start:t[o][1].start,end:t[a][1].end,contentType:"text"},Ct(t,o,a-o+1,[["enter",s,r],["enter",c,r],["exit",c,r],["exit",s,r]])),t}function K2(t,r,a){let o=0;return s;function s(y){return t.enter("atxHeading"),c(y)}function c(y){return t.enter("atxHeadingSequence"),f(y)}function f(y){return y===35&&o++<6?(t.consume(y),f):y===null||se(y)?(t.exit("atxHeadingSequence"),d(y)):a(y)}function d(y){return y===35?(t.enter("atxHeadingSequence"),m(y)):y===null||En(y)?(t.exit("atxHeading"),r(y)):In(y)?Yn(t,d,"whitespace")(y):(t.enter("atxHeadingText"),h(y))}function m(y){return y===35?(t.consume(y),m):(t.exit("atxHeadingSequence"),d(y))}function h(y){return y===null||y===35||se(y)?(t.exit("atxHeadingText"),d(y)):(t.consume(y),h)}}const J2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hg=["pre","script","style","textarea"],nw={concrete:!0,name:"htmlFlow",resolveTo:iw,tokenize:rw},ew={partial:!0,tokenize:lw},tw={partial:!0,tokenize:aw};function iw(t){let r=t.length;for(;r--&&!(t[r][0]==="enter"&&t[r][1].type==="htmlFlow"););return r>1&&t[r-2][1].type==="linePrefix"&&(t[r][1].start=t[r-2][1].start,t[r+1][1].start=t[r-2][1].start,t.splice(r-2,2)),t}function rw(t,r,a){const o=this;let s,c,f,d,m;return h;function h(w){return y(w)}function y(w){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(w),g}function g(w){return w===33?(t.consume(w),v):w===47?(t.consume(w),c=!0,N):w===63?(t.consume(w),s=3,o.interrupt?r:E):tt(w)?(t.consume(w),f=String.fromCharCode(w),D):a(w)}function v(w){return w===45?(t.consume(w),s=2,x):w===91?(t.consume(w),s=5,d=0,_):tt(w)?(t.consume(w),s=4,o.interrupt?r:E):a(w)}function x(w){return w===45?(t.consume(w),o.interrupt?r:E):a(w)}function _(w){const un="CDATA[";return w===un.charCodeAt(d++)?(t.consume(w),d===un.length?o.interrupt?r:sn:_):a(w)}function N(w){return tt(w)?(t.consume(w),f=String.fromCharCode(w),D):a(w)}function D(w){if(w===null||w===47||w===62||se(w)){const un=w===47,wn=f.toLowerCase();return!un&&!c&&hg.includes(wn)?(s=1,o.interrupt?r(w):sn(w)):J2.includes(f.toLowerCase())?(s=6,un?(t.consume(w),M):o.interrupt?r(w):sn(w)):(s=7,o.interrupt&&!o.parser.lazy[o.now().line]?a(w):c?j(w):I(w))}return w===45||Qe(w)?(t.consume(w),f+=String.fromCharCode(w),D):a(w)}function M(w){return w===62?(t.consume(w),o.interrupt?r:sn):a(w)}function j(w){return In(w)?(t.consume(w),j):R(w)}function I(w){return w===47?(t.consume(w),R):w===58||w===95||tt(w)?(t.consume(w),on):In(w)?(t.consume(w),I):R(w)}function on(w){return w===45||w===46||w===58||w===95||Qe(w)?(t.consume(w),on):J(w)}function J(w){return w===61?(t.consume(w),B):In(w)?(t.consume(w),J):I(w)}function B(w){return w===null||w===60||w===61||w===62||w===96?a(w):w===34||w===39?(t.consume(w),m=w,Z):In(w)?(t.consume(w),B):hn(w)}function Z(w){return w===m?(t.consume(w),m=null,pn):w===null||En(w)?a(w):(t.consume(w),Z)}function hn(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||se(w)?J(w):(t.consume(w),hn)}function pn(w){return w===47||w===62||In(w)?I(w):a(w)}function R(w){return w===62?(t.consume(w),ln):a(w)}function ln(w){return w===null||En(w)?sn(w):In(w)?(t.consume(w),ln):a(w)}function sn(w){return w===45&&s===2?(t.consume(w),L):w===60&&s===1?(t.consume(w),K):w===62&&s===4?(t.consume(w),T):w===63&&s===3?(t.consume(w),E):w===93&&s===5?(t.consume(w),Tn):En(w)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(ew,V,Pn)(w)):w===null||En(w)?(t.exit("htmlFlowData"),Pn(w)):(t.consume(w),sn)}function Pn(w){return t.check(tw,fn,V)(w)}function fn(w){return t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),Q}function Q(w){return w===null||En(w)?Pn(w):(t.enter("htmlFlowData"),sn(w))}function L(w){return w===45?(t.consume(w),E):sn(w)}function K(w){return w===47?(t.consume(w),f="",an):sn(w)}function an(w){if(w===62){const un=f.toLowerCase();return hg.includes(un)?(t.consume(w),T):sn(w)}return tt(w)&&f.length<8?(t.consume(w),f+=String.fromCharCode(w),an):sn(w)}function Tn(w){return w===93?(t.consume(w),E):sn(w)}function E(w){return w===62?(t.consume(w),T):w===45&&s===2?(t.consume(w),E):sn(w)}function T(w){return w===null||En(w)?(t.exit("htmlFlowData"),V(w)):(t.consume(w),T)}function V(w){return t.exit("htmlFlow"),r(w)}}function aw(t,r,a){const o=this;return s;function s(f){return En(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c):a(f)}function c(f){return o.parser.lazy[o.now().line]?a(f):r(f)}}function lw(t,r,a){return o;function o(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(Ql,r,a)}}const ow={name:"htmlText",tokenize:sw};function sw(t,r,a){const o=this;let s,c,f;return d;function d(E){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(E),m}function m(E){return E===33?(t.consume(E),h):E===47?(t.consume(E),J):E===63?(t.consume(E),I):tt(E)?(t.consume(E),hn):a(E)}function h(E){return E===45?(t.consume(E),y):E===91?(t.consume(E),c=0,_):tt(E)?(t.consume(E),j):a(E)}function y(E){return E===45?(t.consume(E),x):a(E)}function g(E){return E===null?a(E):E===45?(t.consume(E),v):En(E)?(f=g,K(E)):(t.consume(E),g)}function v(E){return E===45?(t.consume(E),x):g(E)}function x(E){return E===62?L(E):E===45?v(E):g(E)}function _(E){const T="CDATA[";return E===T.charCodeAt(c++)?(t.consume(E),c===T.length?N:_):a(E)}function N(E){return E===null?a(E):E===93?(t.consume(E),D):En(E)?(f=N,K(E)):(t.consume(E),N)}function D(E){return E===93?(t.consume(E),M):N(E)}function M(E){return E===62?L(E):E===93?(t.consume(E),M):N(E)}function j(E){return E===null||E===62?L(E):En(E)?(f=j,K(E)):(t.consume(E),j)}function I(E){return E===null?a(E):E===63?(t.consume(E),on):En(E)?(f=I,K(E)):(t.consume(E),I)}function on(E){return E===62?L(E):I(E)}function J(E){return tt(E)?(t.consume(E),B):a(E)}function B(E){return E===45||Qe(E)?(t.consume(E),B):Z(E)}function Z(E){return En(E)?(f=Z,K(E)):In(E)?(t.consume(E),Z):L(E)}function hn(E){return E===45||Qe(E)?(t.consume(E),hn):E===47||E===62||se(E)?pn(E):a(E)}function pn(E){return E===47?(t.consume(E),L):E===58||E===95||tt(E)?(t.consume(E),R):En(E)?(f=pn,K(E)):In(E)?(t.consume(E),pn):L(E)}function R(E){return E===45||E===46||E===58||E===95||Qe(E)?(t.consume(E),R):ln(E)}function ln(E){return E===61?(t.consume(E),sn):En(E)?(f=ln,K(E)):In(E)?(t.consume(E),ln):pn(E)}function sn(E){return E===null||E===60||E===61||E===62||E===96?a(E):E===34||E===39?(t.consume(E),s=E,Pn):En(E)?(f=sn,K(E)):In(E)?(t.consume(E),sn):(t.consume(E),fn)}function Pn(E){return E===s?(t.consume(E),s=void 0,Q):E===null?a(E):En(E)?(f=Pn,K(E)):(t.consume(E),Pn)}function fn(E){return E===null||E===34||E===39||E===60||E===61||E===96?a(E):E===47||E===62||se(E)?pn(E):(t.consume(E),fn)}function Q(E){return E===47||E===62||se(E)?pn(E):a(E)}function L(E){return E===62?(t.consume(E),t.exit("htmlTextData"),t.exit("htmlText"),r):a(E)}function K(E){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(E),t.exit("lineEnding"),an}function an(E){return In(E)?Yn(t,Tn,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):Tn(E)}function Tn(E){return t.enter("htmlTextData"),f(E)}}const $f={name:"labelEnd",resolveAll:pw,resolveTo:dw,tokenize:hw},uw={tokenize:mw},cw={tokenize:gw},fw={tokenize:yw};function pw(t){let r=-1;const a=[];for(;++r<t.length;){const o=t[r][1];if(a.push(t[r]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const s=o.type==="labelImage"?4:2;o.type="data",r+=s}}return t.length!==a.length&&Ct(t,0,t.length,a),t}function dw(t,r){let a=t.length,o=0,s,c,f,d;for(;a--;)if(s=t[a][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[a][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(f){if(t[a][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=a,s.type!=="labelLink")){o=2;break}}else s.type==="labelEnd"&&(f=a);const m={type:t[c][1].type==="labelLink"?"link":"image",start:{...t[c][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[c][1].start},end:{...t[f][1].end}},y={type:"labelText",start:{...t[c+o+2][1].end},end:{...t[f-2][1].start}};return d=[["enter",m,r],["enter",h,r]],d=zt(d,t.slice(c+1,c+o+3)),d=zt(d,[["enter",y,r]]),d=zt(d,Bs(r.parser.constructs.insideSpan.null,t.slice(c+o+4,f-3),r)),d=zt(d,[["exit",y,r],t[f-2],t[f-1],["exit",h,r]]),d=zt(d,t.slice(f+1)),d=zt(d,[["exit",m,r]]),Ct(t,c,t.length,d),t}function hw(t,r,a){const o=this;let s=o.events.length,c,f;for(;s--;)if((o.events[s][1].type==="labelImage"||o.events[s][1].type==="labelLink")&&!o.events[s][1]._balanced){c=o.events[s][1];break}return d;function d(v){return c?c._inactive?g(v):(f=o.parser.defined.includes(qt(o.sliceSerialize({start:c.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(v),t.exit("labelMarker"),t.exit("labelEnd"),m):a(v)}function m(v){return v===40?t.attempt(uw,y,f?y:g)(v):v===91?t.attempt(cw,y,f?h:g)(v):f?y(v):g(v)}function h(v){return t.attempt(fw,y,g)(v)}function y(v){return r(v)}function g(v){return c._balanced=!0,a(v)}}function mw(t,r,a){return o;function o(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),s}function s(g){return se(g)?Bl(t,c)(g):c(g)}function c(g){return g===41?y(g):Hy(t,f,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function f(g){return se(g)?Bl(t,m)(g):y(g)}function d(g){return a(g)}function m(g){return g===34||g===39||g===40?Fy(t,h,a,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function h(g){return se(g)?Bl(t,y)(g):y(g)}function y(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),r):a(g)}}function gw(t,r,a){const o=this;return s;function s(d){return Iy.call(o,t,c,f,"reference","referenceMarker","referenceString")(d)}function c(d){return o.parser.defined.includes(qt(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?r(d):a(d)}function f(d){return a(d)}}function yw(t,r,a){return o;function o(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),s}function s(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),r):a(c)}}const bw={name:"labelStartImage",resolveAll:$f.resolveAll,tokenize:xw};function xw(t,r,a){const o=this;return s;function s(d){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(d),t.exit("labelImageMarker"),c}function c(d){return d===91?(t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelImage"),f):a(d)}function f(d){return d===94&&"_hiddenFootnoteSupport"in o.parser.constructs?a(d):r(d)}}const vw={name:"labelStartLink",resolveAll:$f.resolveAll,tokenize:Sw};function Sw(t,r,a){const o=this;return s;function s(f){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelLink"),c}function c(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?a(f):r(f)}}const rf={name:"lineEnding",tokenize:ww};function ww(t,r){return a;function a(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Yn(t,r,"linePrefix")}}const Cs={name:"thematicBreak",tokenize:Ew};function Ew(t,r,a){let o=0,s;return c;function c(h){return t.enter("thematicBreak"),f(h)}function f(h){return s=h,d(h)}function d(h){return h===s?(t.enter("thematicBreakSequence"),m(h)):o>=3&&(h===null||En(h))?(t.exit("thematicBreak"),r(h)):a(h)}function m(h){return h===s?(t.consume(h),o++,m):(t.exit("thematicBreakSequence"),In(h)?Yn(t,d,"whitespace")(h):d(h))}}const pt={continuation:{tokenize:kw},exit:Mw,name:"list",tokenize:Tw},_w={partial:!0,tokenize:Pw},Cw={partial:!0,tokenize:Aw};function Tw(t,r,a){const o=this,s=o.events[o.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,f=0;return d;function d(x){const _=o.containerState.type||(x===42||x===43||x===45?"listUnordered":"listOrdered");if(_==="listUnordered"?!o.containerState.marker||x===o.containerState.marker:kf(x)){if(o.containerState.type||(o.containerState.type=_,t.enter(_,{_container:!0})),_==="listUnordered")return t.enter("listItemPrefix"),x===42||x===45?t.check(Cs,a,h)(x):h(x);if(!o.interrupt||x===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),m(x)}return a(x)}function m(x){return kf(x)&&++f<10?(t.consume(x),m):(!o.interrupt||f<2)&&(o.containerState.marker?x===o.containerState.marker:x===41||x===46)?(t.exit("listItemValue"),h(x)):a(x)}function h(x){return t.enter("listItemMarker"),t.consume(x),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||x,t.check(Ql,o.interrupt?a:y,t.attempt(_w,v,g))}function y(x){return o.containerState.initialBlankLine=!0,c++,v(x)}function g(x){return In(x)?(t.enter("listItemPrefixWhitespace"),t.consume(x),t.exit("listItemPrefixWhitespace"),v):a(x)}function v(x){return o.containerState.size=c+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,r(x)}}function kw(t,r,a){const o=this;return o.containerState._closeFlow=void 0,t.check(Ql,s,c);function s(d){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Yn(t,r,"listItemIndent",o.containerState.size+1)(d)}function c(d){return o.containerState.furtherBlankLines||!In(d)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,f(d)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(Cw,r,f)(d))}function f(d){return o.containerState._closeFlow=!0,o.interrupt=void 0,Yn(t,t.attempt(pt,r,a),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function Aw(t,r,a){const o=this;return Yn(t,s,"listItemIndent",o.containerState.size+1);function s(c){const f=o.events[o.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===o.containerState.size?r(c):a(c)}}function Mw(t){t.exit(this.containerState.type)}function Pw(t,r,a){const o=this;return Yn(t,s,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const f=o.events[o.events.length-1];return!In(c)&&f&&f[1].type==="listItemPrefixWhitespace"?r(c):a(c)}}const mg={name:"setextUnderline",resolveTo:Nw,tokenize:Rw};function Nw(t,r){let a=t.length,o,s,c;for(;a--;)if(t[a][0]==="enter"){if(t[a][1].type==="content"){o=a;break}t[a][1].type==="paragraph"&&(s=a)}else t[a][1].type==="content"&&t.splice(a,1),!c&&t[a][1].type==="definition"&&(c=a);const f={type:"setextHeading",start:{...t[o][1].start},end:{...t[t.length-1][1].end}};return t[s][1].type="setextHeadingText",c?(t.splice(s,0,["enter",f,r]),t.splice(c+1,0,["exit",t[o][1],r]),t[o][1].end={...t[c][1].end}):t[o][1]=f,t.push(["exit",f,r]),t}function Rw(t,r,a){const o=this;let s;return c;function c(h){let y=o.events.length,g;for(;y--;)if(o.events[y][1].type!=="lineEnding"&&o.events[y][1].type!=="linePrefix"&&o.events[y][1].type!=="content"){g=o.events[y][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||g)?(t.enter("setextHeadingLine"),s=h,f(h)):a(h)}function f(h){return t.enter("setextHeadingLineSequence"),d(h)}function d(h){return h===s?(t.consume(h),d):(t.exit("setextHeadingLineSequence"),In(h)?Yn(t,m,"lineSuffix")(h):m(h))}function m(h){return h===null||En(h)?(t.exit("setextHeadingLine"),r(h)):a(h)}}const Ow={tokenize:Dw};function Dw(t){const r=this,a=t.attempt(Ql,o,t.attempt(this.parser.constructs.flowInitial,s,Yn(t,t.attempt(this.parser.constructs.flow,s,t.attempt(U2,s)),"linePrefix")));return a;function o(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),r.currentConstruct=void 0,a}function s(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),r.currentConstruct=void 0,a}}const zw={resolveAll:Vy()},Lw=qy("string"),jw=qy("text");function qy(t){return{resolveAll:Vy(t==="text"?Bw:void 0),tokenize:r};function r(a){const o=this,s=this.parser.constructs[t],c=a.attempt(s,f,d);return f;function f(y){return h(y)?c(y):d(y)}function d(y){if(y===null){a.consume(y);return}return a.enter("data"),a.consume(y),m}function m(y){return h(y)?(a.exit("data"),c(y)):(a.consume(y),m)}function h(y){if(y===null)return!0;const g=s[y];let v=-1;if(g)for(;++v<g.length;){const x=g[v];if(!x.previous||x.previous.call(o,o.previous))return!0}return!1}}}function Vy(t){return r;function r(a,o){let s=-1,c;for(;++s<=a.length;)c===void 0?a[s]&&a[s][1].type==="data"&&(c=s,s++):(!a[s]||a[s][1].type!=="data")&&(s!==c+2&&(a[c][1].end=a[s-1][1].end,a.splice(c+2,s-c-2),s=c+2),c=void 0);return t?t(a,o):a}}function Bw(t,r){let a=0;for(;++a<=t.length;)if((a===t.length||t[a][1].type==="lineEnding")&&t[a-1][1].type==="data"){const o=t[a-1][1],s=r.sliceStream(o);let c=s.length,f=-1,d=0,m;for(;c--;){const h=s[c];if(typeof h=="string"){for(f=h.length;h.charCodeAt(f-1)===32;)d++,f--;if(f)break;f=-1}else if(h===-2)m=!0,d++;else if(h!==-1){c++;break}}if(r._contentTypeTextTrailing&&a===t.length&&(d=0),d){const h={type:a===t.length||m||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?f:o.start._bufferIndex+f,_index:o.start._index+c,line:o.end.line,column:o.end.column-d,offset:o.end.offset-d},end:{...o.end}};o.end={...h.start},o.start.offset===o.end.offset?Object.assign(o,h):(t.splice(a,0,["enter",h,r],["exit",h,r]),a+=2)}a++}return t}const Uw={42:pt,43:pt,45:pt,48:pt,49:pt,50:pt,51:pt,52:pt,53:pt,54:pt,55:pt,56:pt,57:pt,62:Ly},Hw={91:V2},Iw={[-2]:tf,[-1]:tf,32:tf},Fw={35:Q2,42:Cs,45:[mg,Cs],60:nw,61:mg,95:Cs,96:dg,126:dg},qw={38:By,92:jy},Vw={[-5]:rf,[-4]:rf,[-3]:rf,33:bw,38:By,42:Af,60:[v2,ow],91:vw,92:[$2,jy],93:$f,95:Af,96:O2},Gw={null:[Af,zw]},Yw={null:[42,95]},Ww={null:[]},$w=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Yw,contentInitial:Hw,disable:Ww,document:Uw,flow:Fw,flowInitial:Iw,insideSpan:Gw,string:qw,text:Vw},Symbol.toStringTag,{value:"Module"}));function Xw(t,r,a){let o={_bufferIndex:-1,_index:0,line:a&&a.line||1,column:a&&a.column||1,offset:a&&a.offset||0};const s={},c=[];let f=[],d=[];const m={attempt:Z(J),check:Z(B),consume:j,enter:I,exit:on,interrupt:Z(B,{interrupt:!0})},h={code:null,containerState:{},defineSkip:N,events:[],now:_,parser:t,previous:null,sliceSerialize:v,sliceStream:x,write:g};let y=r.tokenize.call(h,m);return r.resolveAll&&c.push(r),h;function g(ln){return f=zt(f,ln),D(),f[f.length-1]!==null?[]:(hn(r,0),h.events=Bs(c,h.events,h),h.events)}function v(ln,sn){return Zw(x(ln),sn)}function x(ln){return Qw(f,ln)}function _(){const{_bufferIndex:ln,_index:sn,line:Pn,column:fn,offset:Q}=o;return{_bufferIndex:ln,_index:sn,line:Pn,column:fn,offset:Q}}function N(ln){s[ln.line]=ln.column,R()}function D(){let ln;for(;o._index<f.length;){const sn=f[o._index];if(typeof sn=="string")for(ln=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ln&&o._bufferIndex<sn.length;)M(sn.charCodeAt(o._bufferIndex));else M(sn)}}function M(ln){y=y(ln)}function j(ln){En(ln)?(o.line++,o.column=1,o.offset+=ln===-3?2:1,R()):ln!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===f[o._index].length&&(o._bufferIndex=-1,o._index++)),h.previous=ln}function I(ln,sn){const Pn=sn||{};return Pn.type=ln,Pn.start=_(),h.events.push(["enter",Pn,h]),d.push(Pn),Pn}function on(ln){const sn=d.pop();return sn.end=_(),h.events.push(["exit",sn,h]),sn}function J(ln,sn){hn(ln,sn.from)}function B(ln,sn){sn.restore()}function Z(ln,sn){return Pn;function Pn(fn,Q,L){let K,an,Tn,E;return Array.isArray(fn)?V(fn):"tokenize"in fn?V([fn]):T(fn);function T(xn){return jn;function jn(ue){const Zn=ue!==null&&xn[ue],Be=ue!==null&&xn.null,jt=[...Array.isArray(Zn)?Zn:Zn?[Zn]:[],...Array.isArray(Be)?Be:Be?[Be]:[]];return V(jt)(ue)}}function V(xn){return K=xn,an=0,xn.length===0?L:w(xn[an])}function w(xn){return jn;function jn(ue){return E=pn(),Tn=xn,xn.partial||(h.currentConstruct=xn),xn.name&&h.parser.constructs.disable.null.includes(xn.name)?wn():xn.tokenize.call(sn?Object.assign(Object.create(h),sn):h,m,un,wn)(ue)}}function un(xn){return ln(Tn,E),Q}function wn(xn){return E.restore(),++an<K.length?w(K[an]):L}}}function hn(ln,sn){ln.resolveAll&&!c.includes(ln)&&c.push(ln),ln.resolve&&Ct(h.events,sn,h.events.length-sn,ln.resolve(h.events.slice(sn),h)),ln.resolveTo&&(h.events=ln.resolveTo(h.events,h))}function pn(){const ln=_(),sn=h.previous,Pn=h.currentConstruct,fn=h.events.length,Q=Array.from(d);return{from:fn,restore:L};function L(){o=ln,h.previous=sn,h.currentConstruct=Pn,h.events.length=fn,d=Q,R()}}function R(){o.line in s&&o.column<2&&(o.column=s[o.line],o.offset+=s[o.line]-1)}}function Qw(t,r){const a=r.start._index,o=r.start._bufferIndex,s=r.end._index,c=r.end._bufferIndex;let f;if(a===s)f=[t[a].slice(o,c)];else{if(f=t.slice(a,s),o>-1){const d=f[0];typeof d=="string"?f[0]=d.slice(o):f.shift()}c>0&&f.push(t[s].slice(0,c))}return f}function Zw(t,r){let a=-1;const o=[];let s;for(;++a<t.length;){const c=t[a];let f;if(typeof c=="string")f=c;else switch(c){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=r?" ":"	";break}case-1:{if(!r&&s)continue;f=" ";break}default:f=String.fromCharCode(c)}s=c===-2,o.push(f)}return o.join("")}function Kw(t){const o={constructs:Dy([$w,...(t||{}).extensions||[]]),content:s(d2),defined:[],document:s(m2),flow:s(Ow),lazy:{},string:s(Lw),text:s(jw)};return o;function s(c){return f;function f(d){return Xw(o,c,d)}}}function Jw(t){for(;!Uy(t););return t}const gg=/[\0\t\n\r]/g;function nE(){let t=1,r="",a=!0,o;return s;function s(c,f,d){const m=[];let h,y,g,v,x;for(c=r+(typeof c=="string"?c.toString():new TextDecoder(f||void 0).decode(c)),g=0,r="",a&&(c.charCodeAt(0)===65279&&g++,a=void 0);g<c.length;){if(gg.lastIndex=g,h=gg.exec(c),v=h&&h.index!==void 0?h.index:c.length,x=c.charCodeAt(v),!h){r=c.slice(g);break}if(x===10&&g===v&&o)m.push(-3),o=void 0;else switch(o&&(m.push(-5),o=void 0),g<v&&(m.push(c.slice(g,v)),t+=v-g),x){case 0:{m.push(65533),t++;break}case 9:{for(y=Math.ceil(t/4)*4,m.push(-2);t++<y;)m.push(-1);break}case 10:{m.push(-4),t=1;break}default:o=!0,t=1}g=v+1}return d&&(o&&m.push(-5),r&&m.push(r),m.push(null)),m}}const eE=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function tE(t){return t.replace(eE,iE)}function iE(t,r,a){if(r)return r;if(a.charCodeAt(0)===35){const s=a.charCodeAt(1),c=s===120||s===88;return zy(a.slice(c?2:1),c?16:10)}return Wf(a)||t}const Gy={}.hasOwnProperty;function rE(t,r,a){return typeof r!="string"&&(a=r,r=void 0),aE(a)(Jw(Kw(a).document().write(nE()(t,r,!0))))}function aE(t){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Ti),autolinkProtocol:pn,autolinkEmail:pn,atxHeading:c(_i),blockQuote:c(Be),characterEscape:pn,characterReference:pn,codeFenced:c(jt),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:c(jt,f),codeText:c(rr,f),codeTextData:pn,data:pn,codeFlowValue:pn,definition:c(Or),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:c(Bt),hardBreakEscape:c(Ci),hardBreakTrailing:c(Ci),htmlFlow:c(Dr,f),htmlFlowData:pn,htmlText:c(Dr,f),htmlTextData:pn,image:c(zr),label:f,link:c(Ti),listItem:c(ar),listItemValue:v,listOrdered:c(ni,g),listUnordered:c(ni),paragraph:c(Da),reference:w,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:c(_i),strong:c(Lr),thematicBreak:c(jr)},exit:{atxHeading:m(),atxHeadingSequence:J,autolink:m(),autolinkEmail:Zn,autolinkProtocol:ue,blockQuote:m(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:wn,characterReferenceMarkerNumeric:wn,characterReferenceValue:xn,characterReference:jn,codeFenced:m(D),codeFencedFence:N,codeFencedFenceInfo:x,codeFencedFenceMeta:_,codeFlowValue:R,codeIndented:m(M),codeText:m(Q),codeTextData:R,data:R,definition:m(),definitionDestinationString:on,definitionLabelString:j,definitionTitleString:I,emphasis:m(),hardBreakEscape:m(sn),hardBreakTrailing:m(sn),htmlFlow:m(Pn),htmlFlowData:R,htmlText:m(fn),htmlTextData:R,image:m(K),label:Tn,labelText:an,lineEnding:ln,link:m(L),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:un,resourceDestinationString:E,resourceTitleString:T,resource:V,setextHeading:m(hn),setextHeadingLineSequence:Z,setextHeadingText:B,strong:m(),thematicBreak:m()}};Yy(r,(t||{}).mdastExtensions||[]);const a={};return o;function o(G){let tn={type:"root",children:[]};const _n={stack:[tn],tokenStack:[],config:r,enter:d,exit:h,buffer:f,resume:y,data:a},Ln=[];let Wn=-1;for(;++Wn<G.length;)if(G[Wn][1].type==="listOrdered"||G[Wn][1].type==="listUnordered")if(G[Wn][0]==="enter")Ln.push(Wn);else{const Ke=Ln.pop();Wn=s(G,Ke,Wn)}for(Wn=-1;++Wn<G.length;){const Ke=r[G[Wn][0]];Gy.call(Ke,G[Wn][1].type)&&Ke[G[Wn][1].type].call(Object.assign({sliceSerialize:G[Wn][2].sliceSerialize},_n),G[Wn][1])}if(_n.tokenStack.length>0){const Ke=_n.tokenStack[_n.tokenStack.length-1];(Ke[1]||yg).call(_n,void 0,Ke[0])}for(tn.position={start:er(G.length>0?G[0][1].start:{line:1,column:1,offset:0}),end:er(G.length>0?G[G.length-2][1].end:{line:1,column:1,offset:0})},Wn=-1;++Wn<r.transforms.length;)tn=r.transforms[Wn](tn)||tn;return tn}function s(G,tn,_n){let Ln=tn-1,Wn=-1,Ke=!1,Ut,Ue,ve,Ye;for(;++Ln<=_n;){const Kn=G[Ln];switch(Kn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Kn[0]==="enter"?Wn++:Wn--,Ye=void 0;break}case"lineEndingBlank":{Kn[0]==="enter"&&(Ut&&!Ye&&!Wn&&!ve&&(ve=Ln),Ye=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ye=void 0}if(!Wn&&Kn[0]==="enter"&&Kn[1].type==="listItemPrefix"||Wn===-1&&Kn[0]==="exit"&&(Kn[1].type==="listUnordered"||Kn[1].type==="listOrdered")){if(Ut){let Yt=Ln;for(Ue=void 0;Yt--;){const Je=G[Yt];if(Je[1].type==="lineEnding"||Je[1].type==="lineEndingBlank"){if(Je[0]==="exit")continue;Ue&&(G[Ue][1].type="lineEndingBlank",Ke=!0),Je[1].type="lineEnding",Ue=Yt}else if(!(Je[1].type==="linePrefix"||Je[1].type==="blockQuotePrefix"||Je[1].type==="blockQuotePrefixWhitespace"||Je[1].type==="blockQuoteMarker"||Je[1].type==="listItemIndent"))break}ve&&(!Ue||ve<Ue)&&(Ut._spread=!0),Ut.end=Object.assign({},Ue?G[Ue][1].start:Kn[1].end),G.splice(Ue||Ln,0,["exit",Ut,Kn[2]]),Ln++,_n++}if(Kn[1].type==="listItemPrefix"){const Yt={type:"listItem",_spread:!1,start:Object.assign({},Kn[1].start),end:void 0};Ut=Yt,G.splice(Ln,0,["enter",Yt,Kn[2]]),Ln++,_n++,ve=void 0,Ye=!0}}}return G[tn][1]._spread=Ke,_n}function c(G,tn){return _n;function _n(Ln){d.call(this,G(Ln),Ln),tn&&tn.call(this,Ln)}}function f(){this.stack.push({type:"fragment",children:[]})}function d(G,tn,_n){this.stack[this.stack.length-1].children.push(G),this.stack.push(G),this.tokenStack.push([tn,_n||void 0]),G.position={start:er(tn.start),end:void 0}}function m(G){return tn;function tn(_n){G&&G.call(this,_n),h.call(this,_n)}}function h(G,tn){const _n=this.stack.pop(),Ln=this.tokenStack.pop();if(Ln)Ln[0].type!==G.type&&(tn?tn.call(this,G,Ln[0]):(Ln[1]||yg).call(this,G,Ln[0]));else throw new Error("Cannot close `"+G.type+"` ("+jl({start:G.start,end:G.end})+"): it’s not open");_n.position.end=er(G.end)}function y(){return Yf(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function v(G){if(this.data.expectingFirstListItemValue){const tn=this.stack[this.stack.length-2];tn.start=Number.parseInt(this.sliceSerialize(G),10),this.data.expectingFirstListItemValue=void 0}}function x(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.lang=G}function _(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.meta=G}function N(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function D(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.value=G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function M(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.value=G.replace(/(\r?\n|\r)$/g,"")}function j(G){const tn=this.resume(),_n=this.stack[this.stack.length-1];_n.label=tn,_n.identifier=qt(this.sliceSerialize(G)).toLowerCase()}function I(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.title=G}function on(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.url=G}function J(G){const tn=this.stack[this.stack.length-1];if(!tn.depth){const _n=this.sliceSerialize(G).length;tn.depth=_n}}function B(){this.data.setextHeadingSlurpLineEnding=!0}function Z(G){const tn=this.stack[this.stack.length-1];tn.depth=this.sliceSerialize(G).codePointAt(0)===61?1:2}function hn(){this.data.setextHeadingSlurpLineEnding=void 0}function pn(G){const _n=this.stack[this.stack.length-1].children;let Ln=_n[_n.length-1];(!Ln||Ln.type!=="text")&&(Ln=ye(),Ln.position={start:er(G.start),end:void 0},_n.push(Ln)),this.stack.push(Ln)}function R(G){const tn=this.stack.pop();tn.value+=this.sliceSerialize(G),tn.position.end=er(G.end)}function ln(G){const tn=this.stack[this.stack.length-1];if(this.data.atHardBreak){const _n=tn.children[tn.children.length-1];_n.position.end=er(G.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(tn.type)&&(pn.call(this,G),R.call(this,G))}function sn(){this.data.atHardBreak=!0}function Pn(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.value=G}function fn(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.value=G}function Q(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.value=G}function L(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const tn=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=tn,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function K(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const tn=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=tn,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function an(G){const tn=this.sliceSerialize(G),_n=this.stack[this.stack.length-2];_n.label=tE(tn),_n.identifier=qt(tn).toLowerCase()}function Tn(){const G=this.stack[this.stack.length-1],tn=this.resume(),_n=this.stack[this.stack.length-1];if(this.data.inReference=!0,_n.type==="link"){const Ln=G.children;_n.children=Ln}else _n.alt=tn}function E(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.url=G}function T(){const G=this.resume(),tn=this.stack[this.stack.length-1];tn.title=G}function V(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function un(G){const tn=this.resume(),_n=this.stack[this.stack.length-1];_n.label=tn,_n.identifier=qt(this.sliceSerialize(G)).toLowerCase(),this.data.referenceType="full"}function wn(G){this.data.characterReferenceType=G.type}function xn(G){const tn=this.sliceSerialize(G),_n=this.data.characterReferenceType;let Ln;_n?(Ln=zy(tn,_n==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ln=Wf(tn);const Wn=this.stack[this.stack.length-1];Wn.value+=Ln}function jn(G){const tn=this.stack.pop();tn.position.end=er(G.end)}function ue(G){R.call(this,G);const tn=this.stack[this.stack.length-1];tn.url=this.sliceSerialize(G)}function Zn(G){R.call(this,G);const tn=this.stack[this.stack.length-1];tn.url="mailto:"+this.sliceSerialize(G)}function Be(){return{type:"blockquote",children:[]}}function jt(){return{type:"code",lang:null,meta:null,value:""}}function rr(){return{type:"inlineCode",value:""}}function Or(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Bt(){return{type:"emphasis",children:[]}}function _i(){return{type:"heading",depth:0,children:[]}}function Ci(){return{type:"break"}}function Dr(){return{type:"html",value:""}}function zr(){return{type:"image",title:null,url:"",alt:null}}function Ti(){return{type:"link",title:null,url:"",children:[]}}function ni(G){return{type:"list",ordered:G.type==="listOrdered",start:null,spread:G._spread,children:[]}}function ar(G){return{type:"listItem",spread:G._spread,checked:null,children:[]}}function Da(){return{type:"paragraph",children:[]}}function Lr(){return{type:"strong",children:[]}}function ye(){return{type:"text",value:""}}function jr(){return{type:"thematicBreak"}}}function er(t){return{line:t.line,column:t.column,offset:t.offset}}function Yy(t,r){let a=-1;for(;++a<r.length;){const o=r[a];Array.isArray(o)?Yy(t,o):lE(t,o)}}function lE(t,r){let a;for(a in r)if(Gy.call(r,a))switch(a){case"canContainEols":{const o=r[a];o&&t[a].push(...o);break}case"transforms":{const o=r[a];o&&t[a].push(...o);break}case"enter":case"exit":{const o=r[a];o&&Object.assign(t[a],o);break}}}function yg(t,r){throw t?new Error("Cannot close `"+t.type+"` ("+jl({start:t.start,end:t.end})+"): a different token (`"+r.type+"`, "+jl({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+jl({start:r.start,end:r.end})+") is still open")}function oE(t){const r=this;r.parser=a;function a(o){return rE(o,{...r.data("settings"),...t,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function sE(t,r){const a={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(r),!0)};return t.patch(r,a),t.applyData(r,a)}function uE(t,r){const a={type:"element",tagName:"br",properties:{},children:[]};return t.patch(r,a),[t.applyData(r,a),{type:"text",value:`
`}]}function cE(t,r){const a=r.value?r.value+`
`:"",o={},s=r.lang?r.lang.split(/\s+/):[];s.length>0&&(o.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:o,children:[{type:"text",value:a}]};return r.meta&&(c.data={meta:r.meta}),t.patch(r,c),c=t.applyData(r,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(r,c),c}function fE(t,r){const a={type:"element",tagName:"del",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function pE(t,r){const a={type:"element",tagName:"em",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function dE(t,r){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(r.identifier).toUpperCase(),s=Ra(o.toLowerCase()),c=t.footnoteOrder.indexOf(o);let f,d=t.footnoteCounts.get(o);d===void 0?(d=0,t.footnoteOrder.push(o),f=t.footnoteOrder.length):f=c+1,d+=1,t.footnoteCounts.set(o,d);const m={type:"element",tagName:"a",properties:{href:"#"+a+"fn-"+s,id:a+"fnref-"+s+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};t.patch(r,m);const h={type:"element",tagName:"sup",properties:{},children:[m]};return t.patch(r,h),t.applyData(r,h)}function hE(t,r){const a={type:"element",tagName:"h"+r.depth,properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function mE(t,r){if(t.options.allowDangerousHtml){const a={type:"raw",value:r.value};return t.patch(r,a),t.applyData(r,a)}}function Wy(t,r){const a=r.referenceType;let o="]";if(a==="collapsed"?o+="[]":a==="full"&&(o+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+o}];const s=t.all(r),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const f=s[s.length-1];return f&&f.type==="text"?f.value+=o:s.push({type:"text",value:o}),s}function gE(t,r){const a=String(r.identifier).toUpperCase(),o=t.definitionById.get(a);if(!o)return Wy(t,r);const s={src:Ra(o.url||""),alt:r.alt};o.title!==null&&o.title!==void 0&&(s.title=o.title);const c={type:"element",tagName:"img",properties:s,children:[]};return t.patch(r,c),t.applyData(r,c)}function yE(t,r){const a={src:Ra(r.url)};r.alt!==null&&r.alt!==void 0&&(a.alt=r.alt),r.title!==null&&r.title!==void 0&&(a.title=r.title);const o={type:"element",tagName:"img",properties:a,children:[]};return t.patch(r,o),t.applyData(r,o)}function bE(t,r){const a={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};t.patch(r,a);const o={type:"element",tagName:"code",properties:{},children:[a]};return t.patch(r,o),t.applyData(r,o)}function xE(t,r){const a=String(r.identifier).toUpperCase(),o=t.definitionById.get(a);if(!o)return Wy(t,r);const s={href:Ra(o.url||"")};o.title!==null&&o.title!==void 0&&(s.title=o.title);const c={type:"element",tagName:"a",properties:s,children:t.all(r)};return t.patch(r,c),t.applyData(r,c)}function vE(t,r){const a={href:Ra(r.url)};r.title!==null&&r.title!==void 0&&(a.title=r.title);const o={type:"element",tagName:"a",properties:a,children:t.all(r)};return t.patch(r,o),t.applyData(r,o)}function SE(t,r,a){const o=t.all(r),s=a?wE(a):$y(r),c={},f=[];if(typeof r.checked=="boolean"){const y=o[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},o.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let d=-1;for(;++d<o.length;){const y=o[d];(s||d!==0||y.type!=="element"||y.tagName!=="p")&&f.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?f.push(...y.children):f.push(y)}const m=o[o.length-1];m&&(s||m.type!=="element"||m.tagName!=="p")&&f.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:c,children:f};return t.patch(r,h),t.applyData(r,h)}function wE(t){let r=!1;if(t.type==="list"){r=t.spread||!1;const a=t.children;let o=-1;for(;!r&&++o<a.length;)r=$y(a[o])}return r}function $y(t){const r=t.spread;return r??t.children.length>1}function EE(t,r){const a={},o=t.all(r);let s=-1;for(typeof r.start=="number"&&r.start!==1&&(a.start=r.start);++s<o.length;){const f=o[s];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){a.className=["contains-task-list"];break}}const c={type:"element",tagName:r.ordered?"ol":"ul",properties:a,children:t.wrap(o,!0)};return t.patch(r,c),t.applyData(r,c)}function _E(t,r){const a={type:"element",tagName:"p",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function CE(t,r){const a={type:"root",children:t.wrap(t.all(r))};return t.patch(r,a),t.applyData(r,a)}function TE(t,r){const a={type:"element",tagName:"strong",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}function kE(t,r){const a=t.all(r),o=a.shift(),s=[];if(o){const f={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(r.children[0],f),s.push(f)}if(a.length>0){const f={type:"element",tagName:"tbody",properties:{},children:t.wrap(a,!0)},d=Ff(r.children[1]),m=ky(r.children[r.children.length-1]);d&&m&&(f.position={start:d,end:m}),s.push(f)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(r,c),t.applyData(r,c)}function AE(t,r,a){const o=a?a.children:void 0,c=(o?o.indexOf(r):1)===0?"th":"td",f=a&&a.type==="table"?a.align:void 0,d=f?f.length:r.children.length;let m=-1;const h=[];for(;++m<d;){const g=r.children[m],v={},x=f?f[m]:void 0;x&&(v.align=x);let _={type:"element",tagName:c,properties:v,children:[]};g&&(_.children=t.all(g),t.patch(g,_),_=t.applyData(g,_)),h.push(_)}const y={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(r,y),t.applyData(r,y)}function ME(t,r){const a={type:"element",tagName:"td",properties:{},children:t.all(r)};return t.patch(r,a),t.applyData(r,a)}const bg=9,xg=32;function PE(t){const r=String(t),a=/\r?\n|\r/g;let o=a.exec(r),s=0;const c=[];for(;o;)c.push(vg(r.slice(s,o.index),s>0,!0),o[0]),s=o.index+o[0].length,o=a.exec(r);return c.push(vg(r.slice(s),s>0,!1)),c.join("")}function vg(t,r,a){let o=0,s=t.length;if(r){let c=t.codePointAt(o);for(;c===bg||c===xg;)o++,c=t.codePointAt(o)}if(a){let c=t.codePointAt(s-1);for(;c===bg||c===xg;)s--,c=t.codePointAt(s-1)}return s>o?t.slice(o,s):""}function NE(t,r){const a={type:"text",value:PE(String(r.value))};return t.patch(r,a),t.applyData(r,a)}function RE(t,r){const a={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(r,a),t.applyData(r,a)}const OE={blockquote:sE,break:uE,code:cE,delete:fE,emphasis:pE,footnoteReference:dE,heading:hE,html:mE,imageReference:gE,image:yE,inlineCode:bE,linkReference:xE,link:vE,listItem:SE,list:EE,paragraph:_E,root:CE,strong:TE,table:kE,tableCell:ME,tableRow:AE,text:NE,thematicBreak:RE,toml:ys,yaml:ys,definition:ys,footnoteDefinition:ys};function ys(){}const Xy=-1,Us=0,Ul=1,Ms=2,Xf=3,Qf=4,Zf=5,Kf=6,Qy=7,Zy=8,Sg=typeof self=="object"?self:globalThis,DE=(t,r)=>{const a=(s,c)=>(t.set(c,s),s),o=s=>{if(t.has(s))return t.get(s);const[c,f]=r[s];switch(c){case Us:case Xy:return a(f,s);case Ul:{const d=a([],s);for(const m of f)d.push(o(m));return d}case Ms:{const d=a({},s);for(const[m,h]of f)d[o(m)]=o(h);return d}case Xf:return a(new Date(f),s);case Qf:{const{source:d,flags:m}=f;return a(new RegExp(d,m),s)}case Zf:{const d=a(new Map,s);for(const[m,h]of f)d.set(o(m),o(h));return d}case Kf:{const d=a(new Set,s);for(const m of f)d.add(o(m));return d}case Qy:{const{name:d,message:m}=f;return a(new Sg[d](m),s)}case Zy:return a(BigInt(f),s);case"BigInt":return a(Object(BigInt(f)),s);case"ArrayBuffer":return a(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:d}=new Uint8Array(f);return a(new DataView(d),f)}}return a(new Sg[c](f),s)};return o},wg=t=>DE(new Map,t)(0),wa="",{toString:zE}={},{keys:LE}=Object,Dl=t=>{const r=typeof t;if(r!=="object"||!t)return[Us,r];const a=zE.call(t).slice(8,-1);switch(a){case"Array":return[Ul,wa];case"Object":return[Ms,wa];case"Date":return[Xf,wa];case"RegExp":return[Qf,wa];case"Map":return[Zf,wa];case"Set":return[Kf,wa];case"DataView":return[Ul,a]}return a.includes("Array")?[Ul,a]:a.includes("Error")?[Qy,a]:[Ms,a]},bs=([t,r])=>t===Us&&(r==="function"||r==="symbol"),jE=(t,r,a,o)=>{const s=(f,d)=>{const m=o.push(f)-1;return a.set(d,m),m},c=f=>{if(a.has(f))return a.get(f);let[d,m]=Dl(f);switch(d){case Us:{let y=f;switch(m){case"bigint":d=Zy,y=f.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+m);y=null;break;case"undefined":return s([Xy],f)}return s([d,y],f)}case Ul:{if(m){let v=f;return m==="DataView"?v=new Uint8Array(f.buffer):m==="ArrayBuffer"&&(v=new Uint8Array(f)),s([m,[...v]],f)}const y=[],g=s([d,y],f);for(const v of f)y.push(c(v));return g}case Ms:{if(m)switch(m){case"BigInt":return s([m,f.toString()],f);case"Boolean":case"Number":case"String":return s([m,f.valueOf()],f)}if(r&&"toJSON"in f)return c(f.toJSON());const y=[],g=s([d,y],f);for(const v of LE(f))(t||!bs(Dl(f[v])))&&y.push([c(v),c(f[v])]);return g}case Xf:return s([d,f.toISOString()],f);case Qf:{const{source:y,flags:g}=f;return s([d,{source:y,flags:g}],f)}case Zf:{const y=[],g=s([d,y],f);for(const[v,x]of f)(t||!(bs(Dl(v))||bs(Dl(x))))&&y.push([c(v),c(x)]);return g}case Kf:{const y=[],g=s([d,y],f);for(const v of f)(t||!bs(Dl(v)))&&y.push(c(v));return g}}const{message:h}=f;return s([d,{name:m,message:h}],f)};return c},Eg=(t,{json:r,lossy:a}={})=>{const o=[];return jE(!(r||a),!!r,new Map,o)(t),o},Ps=typeof structuredClone=="function"?(t,r)=>r&&("json"in r||"lossy"in r)?wg(Eg(t,r)):structuredClone(t):(t,r)=>wg(Eg(t,r));function BE(t,r){const a=[{type:"text",value:"↩"}];return r>1&&a.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),a}function UE(t,r){return"Back to reference "+(t+1)+(r>1?"-"+r:"")}function HE(t){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",a=t.options.footnoteBackContent||BE,o=t.options.footnoteBackLabel||UE,s=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",f=t.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let m=-1;for(;++m<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[m]);if(!h)continue;const y=t.all(h),g=String(h.identifier).toUpperCase(),v=Ra(g.toLowerCase());let x=0;const _=[],N=t.footnoteCounts.get(g);for(;N!==void 0&&++x<=N;){_.length>0&&_.push({type:"text",value:" "});let j=typeof a=="string"?a:a(m,x);typeof j=="string"&&(j={type:"text",value:j}),_.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+v+(x>1?"-"+x:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(m,x),className:["data-footnote-backref"]},children:Array.isArray(j)?j:[j]})}const D=y[y.length-1];if(D&&D.type==="element"&&D.tagName==="p"){const j=D.children[D.children.length-1];j&&j.type==="text"?j.value+=" ":D.children.push({type:"text",value:" "}),D.children.push(..._)}else y.push(..._);const M={type:"element",tagName:"li",properties:{id:r+"fn-"+v},children:t.wrap(y,!0)};t.patch(h,M),d.push(M)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...Ps(f),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(d,!0)},{type:"text",value:`
`}]}}const Hs=(function(t){if(t==null)return VE;if(typeof t=="function")return Is(t);if(typeof t=="object")return Array.isArray(t)?IE(t):FE(t);if(typeof t=="string")return qE(t);throw new Error("Expected function, string, or object as test")});function IE(t){const r=[];let a=-1;for(;++a<t.length;)r[a]=Hs(t[a]);return Is(o);function o(...s){let c=-1;for(;++c<r.length;)if(r[c].apply(this,s))return!0;return!1}}function FE(t){const r=t;return Is(a);function a(o){const s=o;let c;for(c in t)if(s[c]!==r[c])return!1;return!0}}function qE(t){return Is(r);function r(a){return a&&a.type===t}}function Is(t){return r;function r(a,o,s){return!!(GE(a)&&t.call(this,a,typeof o=="number"?o:void 0,s||void 0))}}function VE(){return!0}function GE(t){return t!==null&&typeof t=="object"&&"type"in t}const Ky=[],YE=!0,Mf=!1,WE="skip";function Jy(t,r,a,o){let s;typeof r=="function"&&typeof a!="function"?(o=a,a=r):s=r;const c=Hs(s),f=o?-1:1;d(t,void 0,[])();function d(m,h,y){const g=m&&typeof m=="object"?m:{};if(typeof g.type=="string"){const x=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(m.type+(x?"<"+x+">":""))+")"})}return v;function v(){let x=Ky,_,N,D;if((!r||c(m,h,y[y.length-1]||void 0))&&(x=$E(a(m,y)),x[0]===Mf))return x;if("children"in m&&m.children){const M=m;if(M.children&&x[0]!==WE)for(N=(o?M.children.length:-1)+f,D=y.concat(M);N>-1&&N<M.children.length;){const j=M.children[N];if(_=d(j,N,D)(),_[0]===Mf)return _;N=typeof _[1]=="number"?_[1]:N+f}}return x}}}function $E(t){return Array.isArray(t)?t:typeof t=="number"?[YE,t]:t==null?Ky:[t]}function Jf(t,r,a,o){let s,c,f;typeof r=="function"&&typeof a!="function"?(c=void 0,f=r,s=a):(c=r,f=a,s=o),Jy(t,c,d,s);function d(m,h){const y=h[h.length-1],g=y?y.children.indexOf(m):void 0;return f(m,g,y)}}const Pf={}.hasOwnProperty,XE={};function QE(t,r){const a=r||XE,o=new Map,s=new Map,c=new Map,f={...OE,...a.handlers},d={all:h,applyData:KE,definitionById:o,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:f,one:m,options:a,patch:ZE,wrap:n_};return Jf(t,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?o:s,v=String(y.identifier).toUpperCase();g.has(v)||g.set(v,y)}}),d;function m(y,g){const v=y.type,x=d.handlers[v];if(Pf.call(d.handlers,v)&&x)return x(d,y,g);if(d.options.passThrough&&d.options.passThrough.includes(v)){if("children"in y){const{children:N,...D}=y,M=Ps(D);return M.children=d.all(y),M}return Ps(y)}return(d.options.unknownHandler||JE)(d,y,g)}function h(y){const g=[];if("children"in y){const v=y.children;let x=-1;for(;++x<v.length;){const _=d.one(v[x],y);if(_){if(x&&v[x-1].type==="break"&&(!Array.isArray(_)&&_.type==="text"&&(_.value=_g(_.value)),!Array.isArray(_)&&_.type==="element")){const N=_.children[0];N&&N.type==="text"&&(N.value=_g(N.value))}Array.isArray(_)?g.push(..._):g.push(_)}}}return g}}function ZE(t,r){t.position&&(r.position=US(t))}function KE(t,r){let a=r;if(t&&t.data){const o=t.data.hName,s=t.data.hChildren,c=t.data.hProperties;if(typeof o=="string")if(a.type==="element")a.tagName=o;else{const f="children"in a?a.children:[a];a={type:"element",tagName:o,properties:{},children:f}}a.type==="element"&&c&&Object.assign(a.properties,Ps(c)),"children"in a&&a.children&&s!==null&&s!==void 0&&(a.children=s)}return a}function JE(t,r){const a=r.data||{},o="value"in r&&!(Pf.call(a,"hProperties")||Pf.call(a,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:t.all(r)};return t.patch(r,o),t.applyData(r,o)}function n_(t,r){const a=[];let o=-1;for(r&&a.push({type:"text",value:`
`});++o<t.length;)o&&a.push({type:"text",value:`
`}),a.push(t[o]);return r&&t.length>0&&a.push({type:"text",value:`
`}),a}function _g(t){let r=0,a=t.charCodeAt(r);for(;a===9||a===32;)r++,a=t.charCodeAt(r);return t.slice(r)}function Cg(t,r){const a=QE(t,r),o=a.one(t,void 0),s=HE(a),c=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function e_(t,r){return t&&"run"in t?async function(a,o){const s=Cg(a,{file:o,...r});await t.run(s,o)}:function(a,o){return Cg(a,{file:o,...t||r})}}function Tg(t){if(t)throw t}var af,kg;function t_(){if(kg)return af;kg=1;var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):r.call(h)==="[object Array]"},c=function(h){if(!h||r.call(h)!=="[object Object]")return!1;var y=t.call(h,"constructor"),g=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!g)return!1;var v;for(v in h);return typeof v>"u"||t.call(h,v)},f=function(h,y){a&&y.name==="__proto__"?a(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},d=function(h,y){if(y==="__proto__")if(t.call(h,y)){if(o)return o(h,y).value}else return;return h[y]};return af=function m(){var h,y,g,v,x,_,N=arguments[0],D=1,M=arguments.length,j=!1;for(typeof N=="boolean"&&(j=N,N=arguments[1]||{},D=2),(N==null||typeof N!="object"&&typeof N!="function")&&(N={});D<M;++D)if(h=arguments[D],h!=null)for(y in h)g=d(N,y),v=d(h,y),N!==v&&(j&&v&&(c(v)||(x=s(v)))?(x?(x=!1,_=g&&s(g)?g:[]):_=g&&c(g)?g:{},f(N,{name:y,newValue:m(j,_,v)})):typeof v<"u"&&f(N,{name:y,newValue:v}));return N},af}var i_=t_();const lf=Os(i_);function Nf(t){if(typeof t!="object"||t===null)return!1;const r=Object.getPrototypeOf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function r_(){const t=[],r={run:a,use:o};return r;function a(...s){let c=-1;const f=s.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);d(null,...s);function d(m,...h){const y=t[++c];let g=-1;if(m){f(m);return}for(;++g<s.length;)(h[g]===null||h[g]===void 0)&&(h[g]=s[g]);s=h,y?a_(y,d)(...h):f(null,...h)}}function o(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),r}}function a_(t,r){let a;return o;function o(...f){const d=t.length>f.length;let m;d&&f.push(s);try{m=t.apply(this,f)}catch(h){const y=h;if(d&&a)throw y;return s(y)}d||(m&&m.then&&typeof m.then=="function"?m.then(c,s):m instanceof Error?s(m):c(m))}function s(f,...d){a||(a=!0,r(f,...d))}function c(f){s(null,f)}}const Kt={basename:l_,dirname:o_,extname:s_,join:u_,sep:"/"};function l_(t,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Zl(t);let a=0,o=-1,s=t.length,c;if(r===void 0||r.length===0||r.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(c){a=s+1;break}}else o<0&&(c=!0,o=s+1);return o<0?"":t.slice(a,o)}if(r===t)return"";let f=-1,d=r.length-1;for(;s--;)if(t.codePointAt(s)===47){if(c){a=s+1;break}}else f<0&&(c=!0,f=s+1),d>-1&&(t.codePointAt(s)===r.codePointAt(d--)?d<0&&(o=s):(d=-1,o=f));return a===o?o=f:o<0&&(o=t.length),t.slice(a,o)}function o_(t){if(Zl(t),t.length===0)return".";let r=-1,a=t.length,o;for(;--a;)if(t.codePointAt(a)===47){if(o){r=a;break}}else o||(o=!0);return r<0?t.codePointAt(0)===47?"/":".":r===1&&t.codePointAt(0)===47?"//":t.slice(0,r)}function s_(t){Zl(t);let r=t.length,a=-1,o=0,s=-1,c=0,f;for(;r--;){const d=t.codePointAt(r);if(d===47){if(f){o=r+1;break}continue}a<0&&(f=!0,a=r+1),d===46?s<0?s=r:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||a<0||c===0||c===1&&s===a-1&&s===o+1?"":t.slice(s,a)}function u_(...t){let r=-1,a;for(;++r<t.length;)Zl(t[r]),t[r]&&(a=a===void 0?t[r]:a+"/"+t[r]);return a===void 0?".":c_(a)}function c_(t){Zl(t);const r=t.codePointAt(0)===47;let a=f_(t,!r);return a.length===0&&!r&&(a="."),a.length>0&&t.codePointAt(t.length-1)===47&&(a+="/"),r?"/"+a:a}function f_(t,r){let a="",o=0,s=-1,c=0,f=-1,d,m;for(;++f<=t.length;){if(f<t.length)d=t.codePointAt(f);else{if(d===47)break;d=47}if(d===47){if(!(s===f-1||c===1))if(s!==f-1&&c===2){if(a.length<2||o!==2||a.codePointAt(a.length-1)!==46||a.codePointAt(a.length-2)!==46){if(a.length>2){if(m=a.lastIndexOf("/"),m!==a.length-1){m<0?(a="",o=0):(a=a.slice(0,m),o=a.length-1-a.lastIndexOf("/")),s=f,c=0;continue}}else if(a.length>0){a="",o=0,s=f,c=0;continue}}r&&(a=a.length>0?a+"/..":"..",o=2)}else a.length>0?a+="/"+t.slice(s+1,f):a=t.slice(s+1,f),o=f-s-1;s=f,c=0}else d===46&&c>-1?c++:c=-1}return a}function Zl(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const p_={cwd:d_};function d_(){return"/"}function Rf(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function h_(t){if(typeof t=="string")t=new URL(t);else if(!Rf(t)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(t.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return m_(t)}function m_(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const r=t.pathname;let a=-1;for(;++a<r.length;)if(r.codePointAt(a)===37&&r.codePointAt(a+1)===50){const o=r.codePointAt(a+2);if(o===70||o===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(r)}const of=["history","path","basename","stem","extname","dirname"];class n0{constructor(r){let a;r?Rf(r)?a={path:r}:typeof r=="string"||g_(r)?a={value:r}:a=r:a={},this.cwd="cwd"in a?"":p_.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<of.length;){const c=of[o];c in a&&a[c]!==void 0&&a[c]!==null&&(this[c]=c==="history"?[...a[c]]:a[c])}let s;for(s in a)of.includes(s)||(this[s]=a[s])}get basename(){return typeof this.path=="string"?Kt.basename(this.path):void 0}set basename(r){uf(r,"basename"),sf(r,"basename"),this.path=Kt.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?Kt.dirname(this.path):void 0}set dirname(r){Ag(this.basename,"dirname"),this.path=Kt.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?Kt.extname(this.path):void 0}set extname(r){if(sf(r,"extname"),Ag(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Kt.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){Rf(r)&&(r=h_(r)),uf(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?Kt.basename(this.path,this.extname):void 0}set stem(r){uf(r,"stem"),sf(r,"stem"),this.path=Kt.join(this.dirname||"",r+(this.extname||""))}fail(r,a,o){const s=this.message(r,a,o);throw s.fatal=!0,s}info(r,a,o){const s=this.message(r,a,o);return s.fatal=void 0,s}message(r,a,o){const s=new Ze(r,a,o);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function sf(t,r){if(t&&t.includes(Kt.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+Kt.sep+"`")}function uf(t,r){if(!t)throw new Error("`"+r+"` cannot be empty")}function Ag(t,r){if(!t)throw new Error("Setting `"+r+"` requires `path` to be set too")}function g_(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const y_=(function(t){const o=this.constructor.prototype,s=o[t],c=function(){return s.apply(c,arguments)};return Object.setPrototypeOf(c,o),c}),b_={}.hasOwnProperty;class np extends y_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=r_()}copy(){const r=new np;let a=-1;for(;++a<this.attachers.length;){const o=this.attachers[a];r.use(...o)}return r.data(lf(!0,{},this.namespace)),r}data(r,a){return typeof r=="string"?arguments.length===2?(pf("data",this.frozen),this.namespace[r]=a,this):b_.call(this.namespace,r)&&this.namespace[r]||void 0:r?(pf("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[a,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const s=a.call(r,...o);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const a=xs(r),o=this.parser||this.Parser;return cf("parse",o),o(String(a),a)}process(r,a){const o=this;return this.freeze(),cf("process",this.parser||this.Parser),ff("process",this.compiler||this.Compiler),a?s(void 0,a):new Promise(s);function s(c,f){const d=xs(r),m=o.parse(d);o.run(m,d,function(y,g,v){if(y||!g||!v)return h(y);const x=g,_=o.stringify(x,v);S_(_)?v.value=_:v.result=_,h(y,v)});function h(y,g){y||!g?f(y):c?c(g):a(void 0,g)}}}processSync(r){let a=!1,o;return this.freeze(),cf("processSync",this.parser||this.Parser),ff("processSync",this.compiler||this.Compiler),this.process(r,s),Pg("processSync","process",a),o;function s(c,f){a=!0,Tg(c),o=f}}run(r,a,o){Mg(r),this.freeze();const s=this.transformers;return!o&&typeof a=="function"&&(o=a,a=void 0),o?c(void 0,o):new Promise(c);function c(f,d){const m=xs(a);s.run(r,m,h);function h(y,g,v){const x=g||r;y?d(y):f?f(x):o(void 0,x,v)}}}runSync(r,a){let o=!1,s;return this.run(r,a,c),Pg("runSync","run",o),s;function c(f,d){Tg(f),s=d,o=!0}}stringify(r,a){this.freeze();const o=xs(a),s=this.compiler||this.Compiler;return ff("stringify",s),Mg(r),s(r,o)}use(r,...a){const o=this.attachers,s=this.namespace;if(pf("use",this.frozen),r!=null)if(typeof r=="function")m(r,a);else if(typeof r=="object")Array.isArray(r)?d(r):f(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function c(h){if(typeof h=="function")m(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...g]=h;m(y,g)}else f(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function f(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(h.plugins),h.settings&&(s.settings=lf(!0,s.settings,h.settings))}function d(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const g=h[y];c(g)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function m(h,y){let g=-1,v=-1;for(;++g<o.length;)if(o[g][0]===h){v=g;break}if(v===-1)o.push([h,...y]);else if(y.length>0){let[x,..._]=y;const N=o[v][1];Nf(N)&&Nf(x)&&(x=lf(!0,N,x)),o[v]=[h,x,..._]}}}}const x_=new np().freeze();function cf(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function ff(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function pf(t,r){if(r)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Mg(t){if(!Nf(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Pg(t,r,a){if(!a)throw new Error("`"+t+"` finished async. Use `"+r+"` instead")}function xs(t){return v_(t)?t:new n0(t)}function v_(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function S_(t){return typeof t=="string"||w_(t)}function w_(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const E_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Ng=[],Rg={allowDangerousHtml:!0},__=/^(https?|ircs?|mailto|xmpp)$/i,C_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function T_(t){const r=k_(t),a=A_(t);return M_(r.runSync(r.parse(a),a),t)}function k_(t){const r=t.rehypePlugins||Ng,a=t.remarkPlugins||Ng,o=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Rg}:Rg;return x_().use(oE).use(a).use(e_,o).use(r)}function A_(t){const r=t.children||"",a=new n0;return typeof r=="string"&&(a.value=r),a}function M_(t,r){const a=r.allowedElements,o=r.allowElement,s=r.components,c=r.disallowedElements,f=r.skipHtml,d=r.unwrapDisallowed,m=r.urlTransform||P_;for(const y of C_)Object.hasOwn(r,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+E_+y.id,void 0);return Jf(t,h),VS(t,{Fragment:C.Fragment,components:s,ignoreInvalidStyle:!0,jsx:C.jsx,jsxs:C.jsxs,passKeys:!0,passNode:!0});function h(y,g,v){if(y.type==="raw"&&v&&typeof g=="number")return f?v.children.splice(g,1):v.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let x;for(x in ef)if(Object.hasOwn(ef,x)&&Object.hasOwn(y.properties,x)){const _=y.properties[x],N=ef[x];(N===null||N.includes(y.tagName))&&(y.properties[x]=m(String(_||""),x,y))}}if(y.type==="element"){let x=a?!a.includes(y.tagName):c?c.includes(y.tagName):!1;if(!x&&o&&typeof g=="number"&&(x=!o(y,g,v)),x&&v&&typeof g=="number")return d&&y.children?v.children.splice(g,1,...y.children):v.children.splice(g,1),g}}}function P_(t){const r=t.indexOf(":"),a=t.indexOf("?"),o=t.indexOf("#"),s=t.indexOf("/");return r===-1||s!==-1&&r>s||a!==-1&&r>a||o!==-1&&r>o||__.test(t.slice(0,r))?t:""}function Og(t,r){const a=String(t);if(typeof r!="string")throw new TypeError("Expected character");let o=0,s=a.indexOf(r);for(;s!==-1;)o++,s=a.indexOf(r,s+r.length);return o}function N_(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function R_(t,r,a){const s=Hs((a||{}).ignore||[]),c=O_(r);let f=-1;for(;++f<c.length;)Jy(t,"text",d);function d(h,y){let g=-1,v;for(;++g<y.length;){const x=y[g],_=v?v.children:void 0;if(s(x,_?_.indexOf(x):void 0,v))return;v=x}if(v)return m(h,y)}function m(h,y){const g=y[y.length-1],v=c[f][0],x=c[f][1];let _=0;const D=g.children.indexOf(h);let M=!1,j=[];v.lastIndex=0;let I=v.exec(h.value);for(;I;){const on=I.index,J={index:I.index,input:I.input,stack:[...y,h]};let B=x(...I,J);if(typeof B=="string"&&(B=B.length>0?{type:"text",value:B}:void 0),B===!1?v.lastIndex=on+1:(_!==on&&j.push({type:"text",value:h.value.slice(_,on)}),Array.isArray(B)?j.push(...B):B&&j.push(B),_=on+I[0].length,M=!0),!v.global)break;I=v.exec(h.value)}return M?(_<h.value.length&&j.push({type:"text",value:h.value.slice(_)}),g.children.splice(D,1,...j)):j=[h],D+j.length}}function O_(t){const r=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const a=!t[0]||Array.isArray(t[0])?t:[t];let o=-1;for(;++o<a.length;){const s=a[o];r.push([D_(s[0]),z_(s[1])])}return r}function D_(t){return typeof t=="string"?new RegExp(N_(t),"g"):t}function z_(t){return typeof t=="function"?t:function(){return t}}const df="phrasing",hf=["autolink","link","image","label"];function L_(){return{transforms:[q_],enter:{literalAutolink:B_,literalAutolinkEmail:mf,literalAutolinkHttp:mf,literalAutolinkWww:mf},exit:{literalAutolink:F_,literalAutolinkEmail:I_,literalAutolinkHttp:U_,literalAutolinkWww:H_}}}function j_(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:df,notInConstruct:hf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:df,notInConstruct:hf},{character:":",before:"[ps]",after:"\\/",inConstruct:df,notInConstruct:hf}]}}function B_(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function mf(t){this.config.enter.autolinkProtocol.call(this,t)}function U_(t){this.config.exit.autolinkProtocol.call(this,t)}function H_(t){this.config.exit.data.call(this,t);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(t)}function I_(t){this.config.exit.autolinkEmail.call(this,t)}function F_(t){this.exit(t)}function q_(t){R_(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,V_],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),G_]],{ignore:["link","linkReference"]})}function V_(t,r,a,o,s){let c="";if(!e0(s)||(/^w/i.test(r)&&(a=r+a,r="",c="http://"),!Y_(a)))return!1;const f=W_(a+o);if(!f[0])return!1;const d={type:"link",title:null,url:c+r+f[0],children:[{type:"text",value:r+f[0]}]};return f[1]?[d,{type:"text",value:f[1]}]:d}function G_(t,r,a,o){return!e0(o,!0)||/[-\d_]$/.test(a)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+a,children:[{type:"text",value:r+"@"+a}]}}function Y_(t){const r=t.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function W_(t){const r=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!r)return[t,void 0];t=t.slice(0,r.index);let a=r[0],o=a.indexOf(")");const s=Og(t,"(");let c=Og(t,")");for(;o!==-1&&s>c;)t+=a.slice(0,o+1),a=a.slice(o+1),o=a.indexOf(")"),c++;return[t,a]}function e0(t,r){const a=t.input.charCodeAt(t.index-1);return(t.index===0||Mr(a)||js(a))&&(!r||a!==47)}t0.peek=tC;function $_(){this.buffer()}function X_(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function Q_(){this.buffer()}function Z_(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function K_(t){const r=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=qt(this.sliceSerialize(t)).toLowerCase(),a.label=r}function J_(t){this.exit(t)}function nC(t){const r=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=qt(this.sliceSerialize(t)).toLowerCase(),a.label=r}function eC(t){this.exit(t)}function tC(){return"["}function t0(t,r,a,o){const s=a.createTracker(o);let c=s.move("[^");const f=a.enter("footnoteReference"),d=a.enter("reference");return c+=s.move(a.safe(a.associationId(t),{after:"]",before:c})),d(),f(),c+=s.move("]"),c}function iC(){return{enter:{gfmFootnoteCallString:$_,gfmFootnoteCall:X_,gfmFootnoteDefinitionLabelString:Q_,gfmFootnoteDefinition:Z_},exit:{gfmFootnoteCallString:K_,gfmFootnoteCall:J_,gfmFootnoteDefinitionLabelString:nC,gfmFootnoteDefinition:eC}}}function rC(t){let r=!1;return t&&t.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:a,footnoteReference:t0},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function a(o,s,c,f){const d=c.createTracker(f);let m=d.move("[^");const h=c.enter("footnoteDefinition"),y=c.enter("label");return m+=d.move(c.safe(c.associationId(o),{before:m,after:"]"})),y(),m+=d.move("]:"),o.children&&o.children.length>0&&(d.shift(4),m+=d.move((r?`
`:" ")+c.indentLines(c.containerFlow(o,d.current()),r?i0:aC))),h(),m}}function aC(t,r,a){return r===0?t:i0(t,r,a)}function i0(t,r,a){return(a?"":"    ")+t}const lC=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];r0.peek=fC;function oC(){return{canContainEols:["delete"],enter:{strikethrough:uC},exit:{strikethrough:cC}}}function sC(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:lC}],handlers:{delete:r0}}}function uC(t){this.enter({type:"delete",children:[]},t)}function cC(t){this.exit(t)}function r0(t,r,a,o){const s=a.createTracker(o),c=a.enter("strikethrough");let f=s.move("~~");return f+=a.containerPhrasing(t,{...s.current(),before:f,after:"~"}),f+=s.move("~~"),c(),f}function fC(){return"~"}function pC(t){return t.length}function dC(t,r){const a=r||{},o=(a.align||[]).concat(),s=a.stringLength||pC,c=[],f=[],d=[],m=[];let h=0,y=-1;for(;++y<t.length;){const N=[],D=[];let M=-1;for(t[y].length>h&&(h=t[y].length);++M<t[y].length;){const j=hC(t[y][M]);if(a.alignDelimiters!==!1){const I=s(j);D[M]=I,(m[M]===void 0||I>m[M])&&(m[M]=I)}N.push(j)}f[y]=N,d[y]=D}let g=-1;if(typeof o=="object"&&"length"in o)for(;++g<h;)c[g]=Dg(o[g]);else{const N=Dg(o);for(;++g<h;)c[g]=N}g=-1;const v=[],x=[];for(;++g<h;){const N=c[g];let D="",M="";N===99?(D=":",M=":"):N===108?D=":":N===114&&(M=":");let j=a.alignDelimiters===!1?1:Math.max(1,m[g]-D.length-M.length);const I=D+"-".repeat(j)+M;a.alignDelimiters!==!1&&(j=D.length+j+M.length,j>m[g]&&(m[g]=j),x[g]=j),v[g]=I}f.splice(1,0,v),d.splice(1,0,x),y=-1;const _=[];for(;++y<f.length;){const N=f[y],D=d[y];g=-1;const M=[];for(;++g<h;){const j=N[g]||"";let I="",on="";if(a.alignDelimiters!==!1){const J=m[g]-(D[g]||0),B=c[g];B===114?I=" ".repeat(J):B===99?J%2?(I=" ".repeat(J/2+.5),on=" ".repeat(J/2-.5)):(I=" ".repeat(J/2),on=I):on=" ".repeat(J)}a.delimiterStart!==!1&&!g&&M.push("|"),a.padding!==!1&&!(a.alignDelimiters===!1&&j==="")&&(a.delimiterStart!==!1||g)&&M.push(" "),a.alignDelimiters!==!1&&M.push(I),M.push(j),a.alignDelimiters!==!1&&M.push(on),a.padding!==!1&&M.push(" "),(a.delimiterEnd!==!1||g!==h-1)&&M.push("|")}_.push(a.delimiterEnd===!1?M.join("").replace(/ +$/,""):M.join(""))}return _.join(`
`)}function hC(t){return t==null?"":String(t)}function Dg(t){const r=typeof t=="string"?t.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function mC(t,r,a,o){const s=a.enter("blockquote"),c=a.createTracker(o);c.move("> "),c.shift(2);const f=a.indentLines(a.containerFlow(t,c.current()),gC);return s(),f}function gC(t,r,a){return">"+(a?"":" ")+t}function yC(t,r){return zg(t,r.inConstruct,!0)&&!zg(t,r.notInConstruct,!1)}function zg(t,r,a){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return a;let o=-1;for(;++o<r.length;)if(t.includes(r[o]))return!0;return!1}function Lg(t,r,a,o){let s=-1;for(;++s<a.unsafe.length;)if(a.unsafe[s].character===`
`&&yC(a.stack,a.unsafe[s]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function bC(t,r){const a=String(t);let o=a.indexOf(r),s=o,c=0,f=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===s?++c>f&&(f=c):c=1,s=o+r.length,o=a.indexOf(r,s);return f}function xC(t,r){return!!(r.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function vC(t){const r=t.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function SC(t,r,a,o){const s=vC(a),c=t.value||"",f=s==="`"?"GraveAccent":"Tilde";if(xC(t,a)){const g=a.enter("codeIndented"),v=a.indentLines(c,wC);return g(),v}const d=a.createTracker(o),m=s.repeat(Math.max(bC(c,s)+1,3)),h=a.enter("codeFenced");let y=d.move(m);if(t.lang){const g=a.enter(`codeFencedLang${f}`);y+=d.move(a.safe(t.lang,{before:y,after:" ",encode:["`"],...d.current()})),g()}if(t.lang&&t.meta){const g=a.enter(`codeFencedMeta${f}`);y+=d.move(" "),y+=d.move(a.safe(t.meta,{before:y,after:`
`,encode:["`"],...d.current()})),g()}return y+=d.move(`
`),c&&(y+=d.move(c+`
`)),y+=d.move(m),h(),y}function wC(t,r,a){return(a?"":"    ")+t}function ep(t){const r=t.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function EC(t,r,a,o){const s=ep(a),c=s==='"'?"Quote":"Apostrophe",f=a.enter("definition");let d=a.enter("label");const m=a.createTracker(o);let h=m.move("[");return h+=m.move(a.safe(a.associationId(t),{before:h,after:"]",...m.current()})),h+=m.move("]: "),d(),!t.url||/[\0- \u007F]/.test(t.url)?(d=a.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(a.safe(t.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(d=a.enter("destinationRaw"),h+=m.move(a.safe(t.url,{before:h,after:t.title?" ":`
`,...m.current()}))),d(),t.title&&(d=a.enter(`title${c}`),h+=m.move(" "+s),h+=m.move(a.safe(t.title,{before:h,after:s,...m.current()})),h+=m.move(s),d()),f(),h}function _C(t){const r=t.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function Vl(t){return"&#x"+t.toString(16).toUpperCase()+";"}function Ns(t,r,a){const o=Aa(t),s=Aa(r);return o===void 0?s===void 0?a==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:o===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}a0.peek=CC;function a0(t,r,a,o){const s=_C(a),c=a.enter("emphasis"),f=a.createTracker(o),d=f.move(s);let m=f.move(a.containerPhrasing(t,{after:s,before:d,...f.current()}));const h=m.charCodeAt(0),y=Ns(o.before.charCodeAt(o.before.length-1),h,s);y.inside&&(m=Vl(h)+m.slice(1));const g=m.charCodeAt(m.length-1),v=Ns(o.after.charCodeAt(0),g,s);v.inside&&(m=m.slice(0,-1)+Vl(g));const x=f.move(s);return c(),a.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},d+m+x}function CC(t,r,a){return a.options.emphasis||"*"}function TC(t,r){let a=!1;return Jf(t,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return a=!0,Mf}),!!((!t.depth||t.depth<3)&&Yf(t)&&(r.options.setext||a))}function kC(t,r,a,o){const s=Math.max(Math.min(6,t.depth||1),1),c=a.createTracker(o);if(TC(t,a)){const y=a.enter("headingSetext"),g=a.enter("phrasing"),v=a.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return g(),y(),v+`
`+(s===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const f="#".repeat(s),d=a.enter("headingAtx"),m=a.enter("phrasing");c.move(f+" ");let h=a.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(h)&&(h=Vl(h.charCodeAt(0))+h.slice(1)),h=h?f+" "+h:f,a.options.closeAtx&&(h+=" "+f),m(),d(),h}l0.peek=AC;function l0(t){return t.value||""}function AC(){return"<"}o0.peek=MC;function o0(t,r,a,o){const s=ep(a),c=s==='"'?"Quote":"Apostrophe",f=a.enter("image");let d=a.enter("label");const m=a.createTracker(o);let h=m.move("![");return h+=m.move(a.safe(t.alt,{before:h,after:"]",...m.current()})),h+=m.move("]("),d(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(d=a.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(a.safe(t.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(d=a.enter("destinationRaw"),h+=m.move(a.safe(t.url,{before:h,after:t.title?" ":")",...m.current()}))),d(),t.title&&(d=a.enter(`title${c}`),h+=m.move(" "+s),h+=m.move(a.safe(t.title,{before:h,after:s,...m.current()})),h+=m.move(s),d()),h+=m.move(")"),f(),h}function MC(){return"!"}s0.peek=PC;function s0(t,r,a,o){const s=t.referenceType,c=a.enter("imageReference");let f=a.enter("label");const d=a.createTracker(o);let m=d.move("![");const h=a.safe(t.alt,{before:m,after:"]",...d.current()});m+=d.move(h+"]["),f();const y=a.stack;a.stack=[],f=a.enter("reference");const g=a.safe(a.associationId(t),{before:m,after:"]",...d.current()});return f(),a.stack=y,c(),s==="full"||!h||h!==g?m+=d.move(g+"]"):s==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function PC(){return"!"}u0.peek=NC;function u0(t,r,a){let o=t.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(o);)s+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++c<a.unsafe.length;){const f=a.unsafe[c],d=a.compilePattern(f);let m;if(f.atBreak)for(;m=d.exec(o);){let h=m.index;o.charCodeAt(h)===10&&o.charCodeAt(h-1)===13&&h--,o=o.slice(0,h)+" "+o.slice(m.index+1)}}return s+o+s}function NC(){return"`"}function c0(t,r){const a=Yf(t);return!!(!r.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(a===t.url||"mailto:"+a===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}f0.peek=RC;function f0(t,r,a,o){const s=ep(a),c=s==='"'?"Quote":"Apostrophe",f=a.createTracker(o);let d,m;if(c0(t,a)){const y=a.stack;a.stack=[],d=a.enter("autolink");let g=f.move("<");return g+=f.move(a.containerPhrasing(t,{before:g,after:">",...f.current()})),g+=f.move(">"),d(),a.stack=y,g}d=a.enter("link"),m=a.enter("label");let h=f.move("[");return h+=f.move(a.containerPhrasing(t,{before:h,after:"](",...f.current()})),h+=f.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=a.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(a.safe(t.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(m=a.enter("destinationRaw"),h+=f.move(a.safe(t.url,{before:h,after:t.title?" ":")",...f.current()}))),m(),t.title&&(m=a.enter(`title${c}`),h+=f.move(" "+s),h+=f.move(a.safe(t.title,{before:h,after:s,...f.current()})),h+=f.move(s),m()),h+=f.move(")"),d(),h}function RC(t,r,a){return c0(t,a)?"<":"["}p0.peek=OC;function p0(t,r,a,o){const s=t.referenceType,c=a.enter("linkReference");let f=a.enter("label");const d=a.createTracker(o);let m=d.move("[");const h=a.containerPhrasing(t,{before:m,after:"]",...d.current()});m+=d.move(h+"]["),f();const y=a.stack;a.stack=[],f=a.enter("reference");const g=a.safe(a.associationId(t),{before:m,after:"]",...d.current()});return f(),a.stack=y,c(),s==="full"||!h||h!==g?m+=d.move(g+"]"):s==="shortcut"?m=m.slice(0,-1):m+=d.move("]"),m}function OC(){return"["}function tp(t){const r=t.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function DC(t){const r=tp(t),a=t.options.bulletOther;if(!a)return r==="*"?"-":"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(a===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+a+"`) to be different");return a}function zC(t){const r=t.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function d0(t){const r=t.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function LC(t,r,a,o){const s=a.enter("list"),c=a.bulletCurrent;let f=t.ordered?zC(a):tp(a);const d=t.ordered?f==="."?")":".":DC(a);let m=r&&a.bulletLastUsed?f===a.bulletLastUsed:!1;if(!t.ordered){const y=t.children?t.children[0]:void 0;if((f==="*"||f==="-")&&y&&(!y.children||!y.children[0])&&a.stack[a.stack.length-1]==="list"&&a.stack[a.stack.length-2]==="listItem"&&a.stack[a.stack.length-3]==="list"&&a.stack[a.stack.length-4]==="listItem"&&a.indexStack[a.indexStack.length-1]===0&&a.indexStack[a.indexStack.length-2]===0&&a.indexStack[a.indexStack.length-3]===0&&(m=!0),d0(a)===f&&y){let g=-1;for(;++g<t.children.length;){const v=t.children[g];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(f=d),a.bulletCurrent=f;const h=a.containerFlow(t,o);return a.bulletLastUsed=f,a.bulletCurrent=c,s(),h}function jC(t){const r=t.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function BC(t,r,a,o){const s=jC(a);let c=a.bulletCurrent||tp(a);r&&r.type==="list"&&r.ordered&&(c=(typeof r.start=="number"&&r.start>-1?r.start:1)+(a.options.incrementListMarker===!1?0:r.children.indexOf(t))+c);let f=c.length+1;(s==="tab"||s==="mixed"&&(r&&r.type==="list"&&r.spread||t.spread))&&(f=Math.ceil(f/4)*4);const d=a.createTracker(o);d.move(c+" ".repeat(f-c.length)),d.shift(f);const m=a.enter("listItem"),h=a.indentLines(a.containerFlow(t,d.current()),y);return m(),h;function y(g,v,x){return v?(x?"":" ".repeat(f))+g:(x?c:c+" ".repeat(f-c.length))+g}}function UC(t,r,a,o){const s=a.enter("paragraph"),c=a.enter("phrasing"),f=a.containerPhrasing(t,o);return c(),s(),f}const HC=Hs(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function IC(t,r,a,o){return(t.children.some(function(f){return HC(f)})?a.containerPhrasing:a.containerFlow).call(a,t,o)}function FC(t){const r=t.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}h0.peek=qC;function h0(t,r,a,o){const s=FC(a),c=a.enter("strong"),f=a.createTracker(o),d=f.move(s+s);let m=f.move(a.containerPhrasing(t,{after:s,before:d,...f.current()}));const h=m.charCodeAt(0),y=Ns(o.before.charCodeAt(o.before.length-1),h,s);y.inside&&(m=Vl(h)+m.slice(1));const g=m.charCodeAt(m.length-1),v=Ns(o.after.charCodeAt(0),g,s);v.inside&&(m=m.slice(0,-1)+Vl(g));const x=f.move(s+s);return c(),a.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},d+m+x}function qC(t,r,a){return a.options.strong||"*"}function VC(t,r,a,o){return a.safe(t.value,o)}function GC(t){const r=t.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function YC(t,r,a){const o=(d0(a)+(a.options.ruleSpaces?" ":"")).repeat(GC(a));return a.options.ruleSpaces?o.slice(0,-1):o}const m0={blockquote:mC,break:Lg,code:SC,definition:EC,emphasis:a0,hardBreak:Lg,heading:kC,html:l0,image:o0,imageReference:s0,inlineCode:u0,link:f0,linkReference:p0,list:LC,listItem:BC,paragraph:UC,root:IC,strong:h0,text:VC,thematicBreak:YC};function WC(){return{enter:{table:$C,tableData:jg,tableHeader:jg,tableRow:QC},exit:{codeText:ZC,table:XC,tableData:gf,tableHeader:gf,tableRow:gf}}}function $C(t){const r=t._align;this.enter({type:"table",align:r.map(function(a){return a==="none"?null:a}),children:[]},t),this.data.inTable=!0}function XC(t){this.exit(t),this.data.inTable=void 0}function QC(t){this.enter({type:"tableRow",children:[]},t)}function gf(t){this.exit(t)}function jg(t){this.enter({type:"tableCell",children:[]},t)}function ZC(t){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,KC));const a=this.stack[this.stack.length-1];a.type,a.value=r,this.exit(t)}function KC(t,r){return r==="|"?r:t}function JC(t){const r=t||{},a=r.tableCellPadding,o=r.tablePipeAlign,s=r.stringLength,c=a?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:f,tableCell:m,tableRow:d}};function f(x,_,N,D){return h(y(x,N,D),x.align)}function d(x,_,N,D){const M=g(x,N,D),j=h([M]);return j.slice(0,j.indexOf(`
`))}function m(x,_,N,D){const M=N.enter("tableCell"),j=N.enter("phrasing"),I=N.containerPhrasing(x,{...D,before:c,after:c});return j(),M(),I}function h(x,_){return dC(x,{align:_,alignDelimiters:o,padding:a,stringLength:s})}function y(x,_,N){const D=x.children;let M=-1;const j=[],I=_.enter("table");for(;++M<D.length;)j[M]=g(D[M],_,N);return I(),j}function g(x,_,N){const D=x.children;let M=-1;const j=[],I=_.enter("tableRow");for(;++M<D.length;)j[M]=m(D[M],x,_,N);return I(),j}function v(x,_,N){let D=m0.inlineCode(x,_,N);return N.stack.includes("tableCell")&&(D=D.replace(/\|/g,"\\$&")),D}}function nT(){return{exit:{taskListCheckValueChecked:Bg,taskListCheckValueUnchecked:Bg,paragraph:tT}}}function eT(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:iT}}}function Bg(t){const r=this.stack[this.stack.length-2];r.type,r.checked=t.type==="taskListCheckValueChecked"}function tT(t){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const a=this.stack[this.stack.length-1];a.type;const o=a.children[0];if(o&&o.type==="text"){const s=r.children;let c=-1,f;for(;++c<s.length;){const d=s[c];if(d.type==="paragraph"){f=d;break}}f===a&&(o.value=o.value.slice(1),o.value.length===0?a.children.shift():a.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,a.position.start=Object.assign({},o.position.start)))}}this.exit(t)}function iT(t,r,a,o){const s=t.children[0],c=typeof t.checked=="boolean"&&s&&s.type==="paragraph",f="["+(t.checked?"x":" ")+"] ",d=a.createTracker(o);c&&d.move(f);let m=m0.listItem(t,r,a,{...o,...d.current()});return c&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),m;function h(y){return y+f}}function rT(){return[L_(),iC(),oC(),WC(),nT()]}function aT(t){return{extensions:[j_(),rC(t),sC(),JC(t),eT()]}}const lT={tokenize:pT,partial:!0},g0={tokenize:dT,partial:!0},y0={tokenize:hT,partial:!0},b0={tokenize:mT,partial:!0},oT={tokenize:gT,partial:!0},x0={name:"wwwAutolink",tokenize:cT,previous:S0},v0={name:"protocolAutolink",tokenize:fT,previous:w0},Ei={name:"emailAutolink",tokenize:uT,previous:E0},Jt={};function sT(){return{text:Jt}}let kr=48;for(;kr<123;)Jt[kr]=Ei,kr++,kr===58?kr=65:kr===91&&(kr=97);Jt[43]=Ei;Jt[45]=Ei;Jt[46]=Ei;Jt[95]=Ei;Jt[72]=[Ei,v0];Jt[104]=[Ei,v0];Jt[87]=[Ei,x0];Jt[119]=[Ei,x0];function uT(t,r,a){const o=this;let s,c;return f;function f(g){return!Of(g)||!E0.call(o,o.previous)||ip(o.events)?a(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),d(g))}function d(g){return Of(g)?(t.consume(g),d):g===64?(t.consume(g),m):a(g)}function m(g){return g===46?t.check(oT,y,h)(g):g===45||g===95||Qe(g)?(c=!0,t.consume(g),m):y(g)}function h(g){return t.consume(g),s=!0,m}function y(g){return c&&s&&tt(o.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),r(g)):a(g)}}function cT(t,r,a){const o=this;return s;function s(f){return f!==87&&f!==119||!S0.call(o,o.previous)||ip(o.events)?a(f):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(lT,t.attempt(g0,t.attempt(y0,c),a),a)(f))}function c(f){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),r(f)}}function fT(t,r,a){const o=this;let s="",c=!1;return f;function f(g){return(g===72||g===104)&&w0.call(o,o.previous)&&!ip(o.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),s+=String.fromCodePoint(g),t.consume(g),d):a(g)}function d(g){if(tt(g)&&s.length<5)return s+=String.fromCodePoint(g),t.consume(g),d;if(g===58){const v=s.toLowerCase();if(v==="http"||v==="https")return t.consume(g),m}return a(g)}function m(g){return g===47?(t.consume(g),c?h:(c=!0,m)):a(g)}function h(g){return g===null||As(g)||se(g)||Mr(g)||js(g)?a(g):t.attempt(g0,t.attempt(y0,y),a)(g)}function y(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),r(g)}}function pT(t,r,a){let o=0;return s;function s(f){return(f===87||f===119)&&o<3?(o++,t.consume(f),s):f===46&&o===3?(t.consume(f),c):a(f)}function c(f){return f===null?a(f):r(f)}}function dT(t,r,a){let o,s,c;return f;function f(h){return h===46||h===95?t.check(b0,m,d)(h):h===null||se(h)||Mr(h)||h!==45&&js(h)?m(h):(c=!0,t.consume(h),f)}function d(h){return h===95?o=!0:(s=o,o=void 0),t.consume(h),f}function m(h){return s||o||!c?a(h):r(h)}}function hT(t,r){let a=0,o=0;return s;function s(f){return f===40?(a++,t.consume(f),s):f===41&&o<a?c(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?t.check(b0,r,c)(f):f===null||se(f)||Mr(f)?r(f):(t.consume(f),s)}function c(f){return f===41&&o++,t.consume(f),s}}function mT(t,r,a){return o;function o(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(t.consume(d),o):d===38?(t.consume(d),c):d===93?(t.consume(d),s):d===60||d===null||se(d)||Mr(d)?r(d):a(d)}function s(d){return d===null||d===40||d===91||se(d)||Mr(d)?r(d):o(d)}function c(d){return tt(d)?f(d):a(d)}function f(d){return d===59?(t.consume(d),o):tt(d)?(t.consume(d),f):a(d)}}function gT(t,r,a){return o;function o(c){return t.consume(c),s}function s(c){return Qe(c)?a(c):r(c)}}function S0(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||se(t)}function w0(t){return!tt(t)}function E0(t){return!(t===47||Of(t))}function Of(t){return t===43||t===45||t===46||t===95||Qe(t)}function ip(t){let r=t.length,a=!1;for(;r--;){const o=t[r][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){a=!0;break}if(o._gfmAutolinkLiteralWalkedInto){a=!1;break}}return t.length>0&&!a&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),a}const yT={tokenize:CT,partial:!0};function bT(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:wT,continuation:{tokenize:ET},exit:_T}},text:{91:{name:"gfmFootnoteCall",tokenize:ST},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:xT,resolveTo:vT}}}}function xT(t,r,a){const o=this;let s=o.events.length;const c=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let f;for(;s--;){const m=o.events[s][1];if(m.type==="labelImage"){f=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return d;function d(m){if(!f||!f._balanced)return a(m);const h=qt(o.sliceSerialize({start:f.end,end:o.now()}));return h.codePointAt(0)!==94||!c.includes(h.slice(1))?a(m):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(m),t.exit("gfmFootnoteCallLabelMarker"),r(m))}}function vT(t,r){let a=t.length;for(;a--;)if(t[a][1].type==="labelImage"&&t[a][0]==="enter"){t[a][1];break}t[a+1][1].type="data",t[a+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},t[a+3][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},t[a+3][1].end),end:Object.assign({},t[a+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},t[t.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},d=[t[a+1],t[a+2],["enter",o,r],t[a+3],t[a+4],["enter",s,r],["exit",s,r],["enter",c,r],["enter",f,r],["exit",f,r],["exit",c,r],t[t.length-2],t[t.length-1],["exit",o,r]];return t.splice(a,t.length-a+1,...d),t}function ST(t,r,a){const o=this,s=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c=0,f;return d;function d(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),m}function m(g){return g!==94?a(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(g){if(c>999||g===93&&!f||g===null||g===91||se(g))return a(g);if(g===93){t.exit("chunkString");const v=t.exit("gfmFootnoteCallString");return s.includes(qt(o.sliceSerialize(v)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),r):a(g)}return se(g)||(f=!0),c++,t.consume(g),g===92?y:h}function y(g){return g===91||g===92||g===93?(t.consume(g),c++,h):h(g)}}function wT(t,r,a){const o=this,s=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c,f=0,d;return m;function m(_){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(_),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(_){return _===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(_),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",y):a(_)}function y(_){if(f>999||_===93&&!d||_===null||_===91||se(_))return a(_);if(_===93){t.exit("chunkString");const N=t.exit("gfmFootnoteDefinitionLabelString");return c=qt(o.sliceSerialize(N)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(_),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),v}return se(_)||(d=!0),f++,t.consume(_),_===92?g:y}function g(_){return _===91||_===92||_===93?(t.consume(_),f++,y):y(_)}function v(_){return _===58?(t.enter("definitionMarker"),t.consume(_),t.exit("definitionMarker"),s.includes(c)||s.push(c),Yn(t,x,"gfmFootnoteDefinitionWhitespace")):a(_)}function x(_){return r(_)}}function ET(t,r,a){return t.check(Ql,r,t.attempt(yT,r,a))}function _T(t){t.exit("gfmFootnoteDefinition")}function CT(t,r,a){const o=this;return Yn(t,s,"gfmFootnoteDefinitionIndent",5);function s(c){const f=o.events[o.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?r(c):a(c)}}function TT(t){let a=(t||{}).singleTilde;const o={name:"strikethrough",tokenize:c,resolveAll:s};return a==null&&(a=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function s(f,d){let m=-1;for(;++m<f.length;)if(f[m][0]==="enter"&&f[m][1].type==="strikethroughSequenceTemporary"&&f[m][1]._close){let h=m;for(;h--;)if(f[h][0]==="exit"&&f[h][1].type==="strikethroughSequenceTemporary"&&f[h][1]._open&&f[m][1].end.offset-f[m][1].start.offset===f[h][1].end.offset-f[h][1].start.offset){f[m][1].type="strikethroughSequence",f[h][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},f[h][1].start),end:Object.assign({},f[m][1].end)},g={type:"strikethroughText",start:Object.assign({},f[h][1].end),end:Object.assign({},f[m][1].start)},v=[["enter",y,d],["enter",f[h][1],d],["exit",f[h][1],d],["enter",g,d]],x=d.parser.constructs.insideSpan.null;x&&Ct(v,v.length,0,Bs(x,f.slice(h+1,m),d)),Ct(v,v.length,0,[["exit",g,d],["enter",f[m][1],d],["exit",f[m][1],d],["exit",y,d]]),Ct(f,h-1,m-h+3,v),m=h+v.length-2;break}}for(m=-1;++m<f.length;)f[m][1].type==="strikethroughSequenceTemporary"&&(f[m][1].type="data");return f}function c(f,d,m){const h=this.previous,y=this.events;let g=0;return v;function v(_){return h===126&&y[y.length-1][1].type!=="characterEscape"?m(_):(f.enter("strikethroughSequenceTemporary"),x(_))}function x(_){const N=Aa(h);if(_===126)return g>1?m(_):(f.consume(_),g++,x);if(g<2&&!a)return m(_);const D=f.exit("strikethroughSequenceTemporary"),M=Aa(_);return D._open=!M||M===2&&!!N,D._close=!N||N===2&&!!M,d(_)}}}class kT{constructor(){this.map=[]}add(r,a,o){AT(this,r,a,o)}consume(r){if(this.map.sort(function(c,f){return c[0]-f[0]}),this.map.length===0)return;let a=this.map.length;const o=[];for(;a>0;)a-=1,o.push(r.slice(this.map[a][0]+this.map[a][1]),this.map[a][2]),r.length=this.map[a][0];o.push(r.slice()),r.length=0;let s=o.pop();for(;s;){for(const c of s)r.push(c);s=o.pop()}this.map.length=0}}function AT(t,r,a,o){let s=0;if(!(a===0&&o.length===0)){for(;s<t.map.length;){if(t.map[s][0]===r){t.map[s][1]+=a,t.map[s][2].push(...o);return}s+=1}t.map.push([r,a,o])}}function MT(t,r){let a=!1;const o=[];for(;r<t.length;){const s=t[r];if(a){if(s[0]==="enter")s[1].type==="tableContent"&&o.push(t[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(t[r-1][1].type==="tableDelimiterMarker"){const c=o.length-1;o[c]=o[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(a=!0);r+=1}return o}function PT(){return{flow:{null:{name:"table",tokenize:NT,resolveAll:RT}}}}function NT(t,r,a){const o=this;let s=0,c=0,f;return d;function d(R){let ln=o.events.length-1;for(;ln>-1;){const fn=o.events[ln][1].type;if(fn==="lineEnding"||fn==="linePrefix")ln--;else break}const sn=ln>-1?o.events[ln][1].type:null,Pn=sn==="tableHead"||sn==="tableRow"?B:m;return Pn===B&&o.parser.lazy[o.now().line]?a(R):Pn(R)}function m(R){return t.enter("tableHead"),t.enter("tableRow"),h(R)}function h(R){return R===124||(f=!0,c+=1),y(R)}function y(R){return R===null?a(R):En(R)?c>1?(c=0,o.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),x):a(R):In(R)?Yn(t,y,"whitespace")(R):(c+=1,f&&(f=!1,s+=1),R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),f=!0,y):(t.enter("data"),g(R)))}function g(R){return R===null||R===124||se(R)?(t.exit("data"),y(R)):(t.consume(R),R===92?v:g)}function v(R){return R===92||R===124?(t.consume(R),g):g(R)}function x(R){return o.interrupt=!1,o.parser.lazy[o.now().line]?a(R):(t.enter("tableDelimiterRow"),f=!1,In(R)?Yn(t,_,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):_(R))}function _(R){return R===45||R===58?D(R):R===124?(f=!0,t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),N):J(R)}function N(R){return In(R)?Yn(t,D,"whitespace")(R):D(R)}function D(R){return R===58?(c+=1,f=!0,t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),M):R===45?(c+=1,M(R)):R===null||En(R)?on(R):J(R)}function M(R){return R===45?(t.enter("tableDelimiterFiller"),j(R)):J(R)}function j(R){return R===45?(t.consume(R),j):R===58?(f=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(R),t.exit("tableDelimiterMarker"),I):(t.exit("tableDelimiterFiller"),I(R))}function I(R){return In(R)?Yn(t,on,"whitespace")(R):on(R)}function on(R){return R===124?_(R):R===null||En(R)?!f||s!==c?J(R):(t.exit("tableDelimiterRow"),t.exit("tableHead"),r(R)):J(R)}function J(R){return a(R)}function B(R){return t.enter("tableRow"),Z(R)}function Z(R){return R===124?(t.enter("tableCellDivider"),t.consume(R),t.exit("tableCellDivider"),Z):R===null||En(R)?(t.exit("tableRow"),r(R)):In(R)?Yn(t,Z,"whitespace")(R):(t.enter("data"),hn(R))}function hn(R){return R===null||R===124||se(R)?(t.exit("data"),Z(R)):(t.consume(R),R===92?pn:hn)}function pn(R){return R===92||R===124?(t.consume(R),hn):hn(R)}}function RT(t,r){let a=-1,o=!0,s=0,c=[0,0,0,0],f=[0,0,0,0],d=!1,m=0,h,y,g;const v=new kT;for(;++a<t.length;){const x=t[a],_=x[1];x[0]==="enter"?_.type==="tableHead"?(d=!1,m!==0&&(Ug(v,r,m,h,y),y=void 0,m=0),h={type:"table",start:Object.assign({},_.start),end:Object.assign({},_.end)},v.add(a,0,[["enter",h,r]])):_.type==="tableRow"||_.type==="tableDelimiterRow"?(o=!0,g=void 0,c=[0,0,0,0],f=[0,a+1,0,0],d&&(d=!1,y={type:"tableBody",start:Object.assign({},_.start),end:Object.assign({},_.end)},v.add(a,0,[["enter",y,r]])),s=_.type==="tableDelimiterRow"?2:y?3:1):s&&(_.type==="data"||_.type==="tableDelimiterMarker"||_.type==="tableDelimiterFiller")?(o=!1,f[2]===0&&(c[1]!==0&&(f[0]=f[1],g=vs(v,r,c,s,void 0,g),c=[0,0,0,0]),f[2]=a)):_.type==="tableCellDivider"&&(o?o=!1:(c[1]!==0&&(f[0]=f[1],g=vs(v,r,c,s,void 0,g)),c=f,f=[c[1],a,0,0])):_.type==="tableHead"?(d=!0,m=a):_.type==="tableRow"||_.type==="tableDelimiterRow"?(m=a,c[1]!==0?(f[0]=f[1],g=vs(v,r,c,s,a,g)):f[1]!==0&&(g=vs(v,r,f,s,a,g)),s=0):s&&(_.type==="data"||_.type==="tableDelimiterMarker"||_.type==="tableDelimiterFiller")&&(f[3]=a)}for(m!==0&&Ug(v,r,m,h,y),v.consume(r.events),a=-1;++a<r.events.length;){const x=r.events[a];x[0]==="enter"&&x[1].type==="table"&&(x[1]._align=MT(r.events,a))}return t}function vs(t,r,a,o,s,c){const f=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",d="tableContent";a[0]!==0&&(c.end=Object.assign({},Ea(r.events,a[0])),t.add(a[0],0,[["exit",c,r]]));const m=Ea(r.events,a[1]);if(c={type:f,start:Object.assign({},m),end:Object.assign({},m)},t.add(a[1],0,[["enter",c,r]]),a[2]!==0){const h=Ea(r.events,a[2]),y=Ea(r.events,a[3]),g={type:d,start:Object.assign({},h),end:Object.assign({},y)};if(t.add(a[2],0,[["enter",g,r]]),o!==2){const v=r.events[a[2]],x=r.events[a[3]];if(v[1].end=Object.assign({},x[1].end),v[1].type="chunkText",v[1].contentType="text",a[3]>a[2]+1){const _=a[2]+1,N=a[3]-a[2]-1;t.add(_,N,[])}}t.add(a[3]+1,0,[["exit",g,r]])}return s!==void 0&&(c.end=Object.assign({},Ea(r.events,s)),t.add(s,0,[["exit",c,r]]),c=void 0),c}function Ug(t,r,a,o,s){const c=[],f=Ea(r.events,a);s&&(s.end=Object.assign({},f),c.push(["exit",s,r])),o.end=Object.assign({},f),c.push(["exit",o,r]),t.add(a+1,0,c)}function Ea(t,r){const a=t[r],o=a[0]==="enter"?"start":"end";return a[1][o]}const OT={name:"tasklistCheck",tokenize:zT};function DT(){return{text:{91:OT}}}function zT(t,r,a){const o=this;return s;function s(m){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?a(m):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),c)}function c(m){return se(m)?(t.enter("taskListCheckValueUnchecked"),t.consume(m),t.exit("taskListCheckValueUnchecked"),f):m===88||m===120?(t.enter("taskListCheckValueChecked"),t.consume(m),t.exit("taskListCheckValueChecked"),f):a(m)}function f(m){return m===93?(t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),d):a(m)}function d(m){return En(m)?r(m):In(m)?t.check({tokenize:LT},r,a)(m):a(m)}}function LT(t,r,a){return Yn(t,o,"whitespace");function o(s){return s===null?a(s):r(s)}}function jT(t){return Dy([sT(),bT(),TT(t),PT(),DT()])}const BT={};function UT(t){const r=this,a=t||BT,o=r.data(),s=o.micromarkExtensions||(o.micromarkExtensions=[]),c=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),f=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);s.push(jT(a)),c.push(rT()),f.push(aT(a))}function Hg(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,o=Array(r);a<r;a++)o[a]=t[a];return o}function HT(t){if(Array.isArray(t))return t}function IT(t,r,a){return(r=$T(r))in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function FT(t,r){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var o,s,c,f,d=[],m=!0,h=!1;try{if(c=(a=a.call(t)).next,r!==0)for(;!(m=(o=c.call(a)).done)&&(d.push(o.value),d.length!==r);m=!0);}catch(y){h=!0,s=y}finally{try{if(!m&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(h)throw s}}return d}}function qT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ig(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,o)}return a}function Fg(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?Ig(Object(a),!0).forEach(function(o){IT(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ig(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function VT(t,r){if(t==null)return{};var a,o,s=GT(t,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)a=c[o],r.indexOf(a)===-1&&{}.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}function GT(t,r){if(t==null)return{};var a={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(r.indexOf(o)!==-1)continue;a[o]=t[o]}return a}function YT(t,r){return HT(t)||FT(t,r)||XT(t,r)||qT()}function WT(t,r){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var o=a.call(t,r);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function $T(t){var r=WT(t,"string");return typeof r=="symbol"?r:r+""}function XT(t,r){if(t){if(typeof t=="string")return Hg(t,r);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Hg(t,r):void 0}}function QT(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function qg(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,o)}return a}function Vg(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?qg(Object(a),!0).forEach(function(o){QT(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):qg(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function ZT(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(o){return r.reduceRight(function(s,c){return c(s)},o)}}function Ll(t){return function r(){for(var a=this,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return s.length>=t.length?t.apply(this,s):function(){for(var f=arguments.length,d=new Array(f),m=0;m<f;m++)d[m]=arguments[m];return r.apply(a,[].concat(s,d))}}}function Rs(t){return{}.toString.call(t).includes("Object")}function KT(t){return!Object.keys(t).length}function Gl(t){return typeof t=="function"}function JT(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function nk(t,r){return Rs(r)||tr("changeType"),Object.keys(r).some(function(a){return!JT(t,a)})&&tr("changeField"),r}function ek(t){Gl(t)||tr("selectorType")}function tk(t){Gl(t)||Rs(t)||tr("handlerType"),Rs(t)&&Object.values(t).some(function(r){return!Gl(r)})&&tr("handlersType")}function ik(t){t||tr("initialIsRequired"),Rs(t)||tr("initialType"),KT(t)&&tr("initialContent")}function rk(t,r){throw new Error(t[r]||t.default)}var ak={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},tr=Ll(rk)(ak),Ss={changes:nk,selector:ek,handler:tk,initial:ik};function lk(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ss.initial(t),Ss.handler(r);var a={current:t},o=Ll(uk)(a,r),s=Ll(sk)(a),c=Ll(Ss.changes)(t),f=Ll(ok)(a);function d(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(y){return y};return Ss.selector(h),h(a.current)}function m(h){ZT(o,s,c,f)(h)}return[d,m]}function ok(t,r){return Gl(r)?r(t.current):r}function sk(t,r){return t.current=Vg(Vg({},t.current),r),r}function uk(t,r,a){return Gl(r)?r(t.current):Object.keys(a).forEach(function(o){var s;return(s=r[o])===null||s===void 0?void 0:s.call(r,t.current[o])}),a}var ck={create:lk},fk={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function pk(t){return function r(){for(var a=this,o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return s.length>=t.length?t.apply(this,s):function(){for(var f=arguments.length,d=new Array(f),m=0;m<f;m++)d[m]=arguments[m];return r.apply(a,[].concat(s,d))}}}function dk(t){return{}.toString.call(t).includes("Object")}function hk(t){return t||Gg("configIsRequired"),dk(t)||Gg("configType"),t.urls?(mk(),{paths:{vs:t.urls.monacoBase}}):t}function mk(){console.warn(_0.deprecation)}function gk(t,r){throw new Error(t[r]||t.default)}var _0={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Gg=pk(gk)(_0),yk={config:hk},bk=function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return function(s){return a.reduceRight(function(c,f){return f(c)},s)}};function C0(t,r){return Object.keys(r).forEach(function(a){r[a]instanceof Object&&t[a]&&Object.assign(r[a],C0(t[a],r[a]))}),Fg(Fg({},t),r)}var xk={type:"cancelation",msg:"operation is manually canceled"};function yf(t){var r=!1,a=new Promise(function(o,s){t.then(function(c){return r?s(xk):o(c)}),t.catch(s)});return a.cancel=function(){return r=!0},a}var vk=["monaco"],Sk=ck.create({config:fk,isInitialized:!1,resolve:null,reject:null,monaco:null}),T0=YT(Sk,2),Kl=T0[0],Fs=T0[1];function wk(t){var r=yk.config(t),a=r.monaco,o=VT(r,vk);Fs(function(s){return{config:C0(s.config,o),monaco:a}})}function Ek(){var t=Kl(function(r){var a=r.monaco,o=r.isInitialized,s=r.resolve;return{monaco:a,isInitialized:o,resolve:s}});if(!t.isInitialized){if(Fs({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),yf(bf);if(window.monaco&&window.monaco.editor)return k0(window.monaco),t.resolve(window.monaco),yf(bf);bk(_k,Tk)(kk)}return yf(bf)}function _k(t){return document.body.appendChild(t)}function Ck(t){var r=document.createElement("script");return t&&(r.src=t),r}function Tk(t){var r=Kl(function(o){var s=o.config,c=o.reject;return{config:s,reject:c}}),a=Ck("".concat(r.config.paths.vs,"/loader.js"));return a.onload=function(){return t()},a.onerror=r.reject,a}function kk(){var t=Kl(function(a){var o=a.config,s=a.resolve,c=a.reject;return{config:o,resolve:s,reject:c}}),r=window.require;r.config(t.config),r(["vs/editor/editor.main"],function(a){var o=a.m||a;k0(o),t.resolve(o)},function(a){t.reject(a)})}function k0(t){Kl().monaco||Fs({monaco:t})}function Ak(){return Kl(function(t){var r=t.monaco;return r})}var bf=new Promise(function(t,r){return Fs({resolve:t,reject:r})}),A0={config:wk,init:Ek,__getMonacoInstance:Ak},Mk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},xf=Mk,Pk={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Nk=Pk;function Rk({children:t}){return Ca.createElement("div",{style:Nk.container},t)}var Ok=Rk,Dk=Ok;function zk({width:t,height:r,isEditorReady:a,loading:o,_ref:s,className:c,wrapperProps:f}){return Ca.createElement("section",{style:{...xf.wrapper,width:t,height:r},...f},!a&&Ca.createElement(Dk,null,o),Ca.createElement("div",{ref:s,style:{...xf.fullWidth,...!a&&xf.hide},className:c}))}var Lk=zk,M0=z.memo(Lk);function jk(t){z.useEffect(t,[])}var P0=jk;function Bk(t,r,a=!0){let o=z.useRef(!0);z.useEffect(o.current||!a?()=>{o.current=!1}:t,r)}var _t=Bk;function Hl(){}function _a(t,r,a,o){return Uk(t,o)||Hk(t,r,a,o)}function Uk(t,r){return t.editor.getModel(N0(t,r))}function Hk(t,r,a,o){return t.editor.createModel(r,a,o?N0(t,o):void 0)}function N0(t,r){return t.Uri.parse(r)}function Ik({original:t,modified:r,language:a,originalLanguage:o,modifiedLanguage:s,originalModelPath:c,modifiedModelPath:f,keepCurrentOriginalModel:d=!1,keepCurrentModifiedModel:m=!1,theme:h="light",loading:y="Loading...",options:g={},height:v="100%",width:x="100%",className:_,wrapperProps:N={},beforeMount:D=Hl,onMount:M=Hl}){let[j,I]=z.useState(!1),[on,J]=z.useState(!0),B=z.useRef(null),Z=z.useRef(null),hn=z.useRef(null),pn=z.useRef(M),R=z.useRef(D),ln=z.useRef(!1);P0(()=>{let Q=A0.init();return Q.then(L=>(Z.current=L)&&J(!1)).catch(L=>L?.type!=="cancelation"&&console.error("Monaco initialization: error:",L)),()=>B.current?fn():Q.cancel()}),_t(()=>{if(B.current&&Z.current){let Q=B.current.getOriginalEditor(),L=_a(Z.current,t||"",o||a||"text",c||"");L!==Q.getModel()&&Q.setModel(L)}},[c],j),_t(()=>{if(B.current&&Z.current){let Q=B.current.getModifiedEditor(),L=_a(Z.current,r||"",s||a||"text",f||"");L!==Q.getModel()&&Q.setModel(L)}},[f],j),_t(()=>{let Q=B.current.getModifiedEditor();Q.getOption(Z.current.editor.EditorOption.readOnly)?Q.setValue(r||""):r!==Q.getValue()&&(Q.executeEdits("",[{range:Q.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),Q.pushUndoStop())},[r],j),_t(()=>{B.current?.getModel()?.original.setValue(t||"")},[t],j),_t(()=>{let{original:Q,modified:L}=B.current.getModel();Z.current.editor.setModelLanguage(Q,o||a||"text"),Z.current.editor.setModelLanguage(L,s||a||"text")},[a,o,s],j),_t(()=>{Z.current?.editor.setTheme(h)},[h],j),_t(()=>{B.current?.updateOptions(g)},[g],j);let sn=z.useCallback(()=>{if(!Z.current)return;R.current(Z.current);let Q=_a(Z.current,t||"",o||a||"text",c||""),L=_a(Z.current,r||"",s||a||"text",f||"");B.current?.setModel({original:Q,modified:L})},[a,r,s,t,o,c,f]),Pn=z.useCallback(()=>{!ln.current&&hn.current&&(B.current=Z.current.editor.createDiffEditor(hn.current,{automaticLayout:!0,...g}),sn(),Z.current?.editor.setTheme(h),I(!0),ln.current=!0)},[g,h,sn]);z.useEffect(()=>{j&&pn.current(B.current,Z.current)},[j]),z.useEffect(()=>{!on&&!j&&Pn()},[on,j,Pn]);function fn(){let Q=B.current?.getModel();d||Q?.original?.dispose(),m||Q?.modified?.dispose(),B.current?.dispose()}return Ca.createElement(M0,{width:x,height:v,isEditorReady:j,loading:y,_ref:hn,className:_,wrapperProps:N})}var Fk=Ik;z.memo(Fk);function qk(t){let r=z.useRef();return z.useEffect(()=>{r.current=t},[t]),r.current}var Vk=qk,ws=new Map;function Gk({defaultValue:t,defaultLanguage:r,defaultPath:a,value:o,language:s,path:c,theme:f="light",line:d,loading:m="Loading...",options:h={},overrideServices:y={},saveViewState:g=!0,keepCurrentModel:v=!1,width:x="100%",height:_="100%",className:N,wrapperProps:D={},beforeMount:M=Hl,onMount:j=Hl,onChange:I,onValidate:on=Hl}){let[J,B]=z.useState(!1),[Z,hn]=z.useState(!0),pn=z.useRef(null),R=z.useRef(null),ln=z.useRef(null),sn=z.useRef(j),Pn=z.useRef(M),fn=z.useRef(),Q=z.useRef(o),L=Vk(c),K=z.useRef(!1),an=z.useRef(!1);P0(()=>{let T=A0.init();return T.then(V=>(pn.current=V)&&hn(!1)).catch(V=>V?.type!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>R.current?E():T.cancel()}),_t(()=>{let T=_a(pn.current,t||o||"",r||s||"",c||a||"");T!==R.current?.getModel()&&(g&&ws.set(L,R.current?.saveViewState()),R.current?.setModel(T),g&&R.current?.restoreViewState(ws.get(c)))},[c],J),_t(()=>{R.current?.updateOptions(h)},[h],J),_t(()=>{!R.current||o===void 0||(R.current.getOption(pn.current.editor.EditorOption.readOnly)?R.current.setValue(o):o!==R.current.getValue()&&(an.current=!0,R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),R.current.pushUndoStop(),an.current=!1))},[o],J),_t(()=>{let T=R.current?.getModel();T&&s&&pn.current?.editor.setModelLanguage(T,s)},[s],J),_t(()=>{d!==void 0&&R.current?.revealLine(d)},[d],J),_t(()=>{pn.current?.editor.setTheme(f)},[f],J);let Tn=z.useCallback(()=>{if(!(!ln.current||!pn.current)&&!K.current){Pn.current(pn.current);let T=c||a,V=_a(pn.current,o||t||"",r||s||"",T||"");R.current=pn.current?.editor.create(ln.current,{model:V,automaticLayout:!0,...h},y),g&&R.current.restoreViewState(ws.get(T)),pn.current.editor.setTheme(f),d!==void 0&&R.current.revealLine(d),B(!0),K.current=!0}},[t,r,a,o,s,c,h,y,g,f,d]);z.useEffect(()=>{J&&sn.current(R.current,pn.current)},[J]),z.useEffect(()=>{!Z&&!J&&Tn()},[Z,J,Tn]),Q.current=o,z.useEffect(()=>{J&&I&&(fn.current?.dispose(),fn.current=R.current?.onDidChangeModelContent(T=>{an.current||I(R.current.getValue(),T)}))},[J,I]),z.useEffect(()=>{if(J){let T=pn.current.editor.onDidChangeMarkers(V=>{let w=R.current.getModel()?.uri;if(w&&V.find(un=>un.path===w.path)){let un=pn.current.editor.getModelMarkers({resource:w});on?.(un)}});return()=>{T?.dispose()}}return()=>{}},[J,on]);function E(){fn.current?.dispose(),v?g&&ws.set(c,R.current.saveViewState()):R.current.getModel()?.dispose(),R.current.dispose()}return Ca.createElement(M0,{width:x,height:_,isEditorReady:J,loading:m,_ref:ln,className:N,wrapperProps:D})}var Yk=Gk,Wk=z.memo(Yk),$k=Wk,vf,Yg;function Xk(){if(Yg)return vf;Yg=1;function t(A){return A instanceof Map?A.clear=A.delete=A.set=function(){throw new Error("map is read-only")}:A instanceof Set&&(A.add=A.clear=A.delete=function(){throw new Error("set is read-only")}),Object.freeze(A),Object.getOwnPropertyNames(A).forEach(W=>{const cn=A[W],Mn=typeof cn;(Mn==="object"||Mn==="function")&&!Object.isFrozen(cn)&&t(cn)}),A}class r{constructor(W){W.data===void 0&&(W.data={}),this.data=W.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(A){return A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(A,...W){const cn=Object.create(null);for(const Mn in A)cn[Mn]=A[Mn];return W.forEach(function(Mn){for(const pe in Mn)cn[pe]=Mn[pe]}),cn}const s="</span>",c=A=>!!A.scope,f=(A,{prefix:W})=>{if(A.startsWith("language:"))return A.replace("language:","language-");if(A.includes(".")){const cn=A.split(".");return[`${W}${cn.shift()}`,...cn.map((Mn,pe)=>`${Mn}${"_".repeat(pe+1)}`)].join(" ")}return`${W}${A}`};class d{constructor(W,cn){this.buffer="",this.classPrefix=cn.classPrefix,W.walk(this)}addText(W){this.buffer+=a(W)}openNode(W){if(!c(W))return;const cn=f(W.scope,{prefix:this.classPrefix});this.span(cn)}closeNode(W){c(W)&&(this.buffer+=s)}value(){return this.buffer}span(W){this.buffer+=`<span class="${W}">`}}const m=(A={})=>{const W={children:[]};return Object.assign(W,A),W};class h{constructor(){this.rootNode=m(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(W){this.top.children.push(W)}openNode(W){const cn=m({scope:W});this.add(cn),this.stack.push(cn)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(W){return this.constructor._walk(W,this.rootNode)}static _walk(W,cn){return typeof cn=="string"?W.addText(cn):cn.children&&(W.openNode(cn),cn.children.forEach(Mn=>this._walk(W,Mn)),W.closeNode(cn)),W}static _collapse(W){typeof W!="string"&&W.children&&(W.children.every(cn=>typeof cn=="string")?W.children=[W.children.join("")]:W.children.forEach(cn=>{h._collapse(cn)}))}}class y extends h{constructor(W){super(),this.options=W}addText(W){W!==""&&this.add(W)}startScope(W){this.openNode(W)}endScope(){this.closeNode()}__addSublanguage(W,cn){const Mn=W.root;cn&&(Mn.scope=`language:${cn}`),this.add(Mn)}toHTML(){return new d(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function g(A){return A?typeof A=="string"?A:A.source:null}function v(A){return N("(?=",A,")")}function x(A){return N("(?:",A,")*")}function _(A){return N("(?:",A,")?")}function N(...A){return A.map(cn=>g(cn)).join("")}function D(A){const W=A[A.length-1];return typeof W=="object"&&W.constructor===Object?(A.splice(A.length-1,1),W):{}}function M(...A){return"("+(D(A).capture?"":"?:")+A.map(Mn=>g(Mn)).join("|")+")"}function j(A){return new RegExp(A.toString()+"|").exec("").length-1}function I(A,W){const cn=A&&A.exec(W);return cn&&cn.index===0}const on=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function J(A,{joinWith:W}){let cn=0;return A.map(Mn=>{cn+=1;const pe=cn;let le=g(Mn),gn="";for(;le.length>0;){const dn=on.exec(le);if(!dn){gn+=le;break}gn+=le.substring(0,dn.index),le=le.substring(dn.index+dn[0].length),dn[0][0]==="\\"&&dn[1]?gn+="\\"+String(Number(dn[1])+pe):(gn+=dn[0],dn[0]==="("&&cn++)}return gn}).map(Mn=>`(${Mn})`).join(W)}const B=/\b\B/,Z="[a-zA-Z]\\w*",hn="[a-zA-Z_]\\w*",pn="\\b\\d+(\\.\\d+)?",R="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ln="\\b(0b[01]+)",sn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Pn=(A={})=>{const W=/^#![ ]*\//;return A.binary&&(A.begin=N(W,/.*\b/,A.binary,/\b.*/)),o({scope:"meta",begin:W,end:/$/,relevance:0,"on:begin":(cn,Mn)=>{cn.index!==0&&Mn.ignoreMatch()}},A)},fn={begin:"\\\\[\\s\\S]",relevance:0},Q={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[fn]},L={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[fn]},K={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},an=function(A,W,cn={}){const Mn=o({scope:"comment",begin:A,end:W,contains:[]},cn);Mn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const pe=M("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return Mn.contains.push({begin:N(/[ ]+/,"(",pe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),Mn},Tn=an("//","$"),E=an("/\\*","\\*/"),T=an("#","$"),V={scope:"number",begin:pn,relevance:0},w={scope:"number",begin:R,relevance:0},un={scope:"number",begin:ln,relevance:0},wn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[fn,{begin:/\[/,end:/\]/,relevance:0,contains:[fn]}]},xn={scope:"title",begin:Z,relevance:0},jn={scope:"title",begin:hn,relevance:0},ue={begin:"\\.\\s*"+hn,relevance:0};var Be=Object.freeze({__proto__:null,APOS_STRING_MODE:Q,BACKSLASH_ESCAPE:fn,BINARY_NUMBER_MODE:un,BINARY_NUMBER_RE:ln,COMMENT:an,C_BLOCK_COMMENT_MODE:E,C_LINE_COMMENT_MODE:Tn,C_NUMBER_MODE:w,C_NUMBER_RE:R,END_SAME_AS_BEGIN:function(A){return Object.assign(A,{"on:begin":(W,cn)=>{cn.data._beginMatch=W[1]},"on:end":(W,cn)=>{cn.data._beginMatch!==W[1]&&cn.ignoreMatch()}})},HASH_COMMENT_MODE:T,IDENT_RE:Z,MATCH_NOTHING_RE:B,METHOD_GUARD:ue,NUMBER_MODE:V,NUMBER_RE:pn,PHRASAL_WORDS_MODE:K,QUOTE_STRING_MODE:L,REGEXP_MODE:wn,RE_STARTERS_RE:sn,SHEBANG:Pn,TITLE_MODE:xn,UNDERSCORE_IDENT_RE:hn,UNDERSCORE_TITLE_MODE:jn});function jt(A,W){A.input[A.index-1]==="."&&W.ignoreMatch()}function rr(A,W){A.className!==void 0&&(A.scope=A.className,delete A.className)}function Or(A,W){W&&A.beginKeywords&&(A.begin="\\b("+A.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",A.__beforeBegin=jt,A.keywords=A.keywords||A.beginKeywords,delete A.beginKeywords,A.relevance===void 0&&(A.relevance=0))}function Bt(A,W){Array.isArray(A.illegal)&&(A.illegal=M(...A.illegal))}function _i(A,W){if(A.match){if(A.begin||A.end)throw new Error("begin & end are not supported with match");A.begin=A.match,delete A.match}}function Ci(A,W){A.relevance===void 0&&(A.relevance=1)}const Dr=(A,W)=>{if(!A.beforeMatch)return;if(A.starts)throw new Error("beforeMatch cannot be used with starts");const cn=Object.assign({},A);Object.keys(A).forEach(Mn=>{delete A[Mn]}),A.keywords=cn.keywords,A.begin=N(cn.beforeMatch,v(cn.begin)),A.starts={relevance:0,contains:[Object.assign(cn,{endsParent:!0})]},A.relevance=0,delete cn.beforeMatch},zr=["of","and","for","in","not","or","if","then","parent","list","value"],Ti="keyword";function ni(A,W,cn=Ti){const Mn=Object.create(null);return typeof A=="string"?pe(cn,A.split(" ")):Array.isArray(A)?pe(cn,A):Object.keys(A).forEach(function(le){Object.assign(Mn,ni(A[le],W,le))}),Mn;function pe(le,gn){W&&(gn=gn.map(dn=>dn.toLowerCase())),gn.forEach(function(dn){const An=dn.split("|");Mn[An[0]]=[le,ar(An[0],An[1])]})}}function ar(A,W){return W?Number(W):Da(A)?0:1}function Da(A){return zr.includes(A.toLowerCase())}const Lr={},ye=A=>{console.error(A)},jr=(A,...W)=>{console.log(`WARN: ${A}`,...W)},G=(A,W)=>{Lr[`${A}/${W}`]||(console.log(`Deprecated as of ${A}. ${W}`),Lr[`${A}/${W}`]=!0)},tn=new Error;function _n(A,W,{key:cn}){let Mn=0;const pe=A[cn],le={},gn={};for(let dn=1;dn<=W.length;dn++)gn[dn+Mn]=pe[dn],le[dn+Mn]=!0,Mn+=j(W[dn-1]);A[cn]=gn,A[cn]._emit=le,A[cn]._multi=!0}function Ln(A){if(Array.isArray(A.begin)){if(A.skip||A.excludeBegin||A.returnBegin)throw ye("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),tn;if(typeof A.beginScope!="object"||A.beginScope===null)throw ye("beginScope must be object"),tn;_n(A,A.begin,{key:"beginScope"}),A.begin=J(A.begin,{joinWith:""})}}function Wn(A){if(Array.isArray(A.end)){if(A.skip||A.excludeEnd||A.returnEnd)throw ye("skip, excludeEnd, returnEnd not compatible with endScope: {}"),tn;if(typeof A.endScope!="object"||A.endScope===null)throw ye("endScope must be object"),tn;_n(A,A.end,{key:"endScope"}),A.end=J(A.end,{joinWith:""})}}function Ke(A){A.scope&&typeof A.scope=="object"&&A.scope!==null&&(A.beginScope=A.scope,delete A.scope)}function Ut(A){Ke(A),typeof A.beginScope=="string"&&(A.beginScope={_wrap:A.beginScope}),typeof A.endScope=="string"&&(A.endScope={_wrap:A.endScope}),Ln(A),Wn(A)}function Ue(A){function W(gn,dn){return new RegExp(g(gn),"m"+(A.case_insensitive?"i":"")+(A.unicodeRegex?"u":"")+(dn?"g":""))}class cn{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(dn,An){An.position=this.position++,this.matchIndexes[this.matchAt]=An,this.regexes.push([An,dn]),this.matchAt+=j(dn)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const dn=this.regexes.map(An=>An[1]);this.matcherRe=W(J(dn,{joinWith:"|"}),!0),this.lastIndex=0}exec(dn){this.matcherRe.lastIndex=this.lastIndex;const An=this.matcherRe.exec(dn);if(!An)return null;const Ee=An.findIndex((ei,Ur)=>Ur>0&&ei!==void 0),me=this.matchIndexes[Ee];return An.splice(0,Ee),Object.assign(An,me)}}class Mn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(dn){if(this.multiRegexes[dn])return this.multiRegexes[dn];const An=new cn;return this.rules.slice(dn).forEach(([Ee,me])=>An.addRule(Ee,me)),An.compile(),this.multiRegexes[dn]=An,An}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(dn,An){this.rules.push([dn,An]),An.type==="begin"&&this.count++}exec(dn){const An=this.getMatcher(this.regexIndex);An.lastIndex=this.lastIndex;let Ee=An.exec(dn);if(this.resumingScanAtSamePosition()&&!(Ee&&Ee.index===this.lastIndex)){const me=this.getMatcher(0);me.lastIndex=this.lastIndex+1,Ee=me.exec(dn)}return Ee&&(this.regexIndex+=Ee.position+1,this.regexIndex===this.count&&this.considerAll()),Ee}}function pe(gn){const dn=new Mn;return gn.contains.forEach(An=>dn.addRule(An.begin,{rule:An,type:"begin"})),gn.terminatorEnd&&dn.addRule(gn.terminatorEnd,{type:"end"}),gn.illegal&&dn.addRule(gn.illegal,{type:"illegal"}),dn}function le(gn,dn){const An=gn;if(gn.isCompiled)return An;[rr,_i,Ut,Dr].forEach(me=>me(gn,dn)),A.compilerExtensions.forEach(me=>me(gn,dn)),gn.__beforeBegin=null,[Or,Bt,Ci].forEach(me=>me(gn,dn)),gn.isCompiled=!0;let Ee=null;return typeof gn.keywords=="object"&&gn.keywords.$pattern&&(gn.keywords=Object.assign({},gn.keywords),Ee=gn.keywords.$pattern,delete gn.keywords.$pattern),Ee=Ee||/\w+/,gn.keywords&&(gn.keywords=ni(gn.keywords,A.case_insensitive)),An.keywordPatternRe=W(Ee,!0),dn&&(gn.begin||(gn.begin=/\B|\b/),An.beginRe=W(An.begin),!gn.end&&!gn.endsWithParent&&(gn.end=/\B|\b/),gn.end&&(An.endRe=W(An.end)),An.terminatorEnd=g(An.end)||"",gn.endsWithParent&&dn.terminatorEnd&&(An.terminatorEnd+=(gn.end?"|":"")+dn.terminatorEnd)),gn.illegal&&(An.illegalRe=W(gn.illegal)),gn.contains||(gn.contains=[]),gn.contains=[].concat(...gn.contains.map(function(me){return Ye(me==="self"?gn:me)})),gn.contains.forEach(function(me){le(me,An)}),gn.starts&&le(gn.starts,dn),An.matcher=pe(An),An}if(A.compilerExtensions||(A.compilerExtensions=[]),A.contains&&A.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return A.classNameAliases=o(A.classNameAliases||{}),le(A)}function ve(A){return A?A.endsWithParent||ve(A.starts):!1}function Ye(A){return A.variants&&!A.cachedVariants&&(A.cachedVariants=A.variants.map(function(W){return o(A,{variants:null},W)})),A.cachedVariants?A.cachedVariants:ve(A)?o(A,{starts:A.starts?o(A.starts):null}):Object.isFrozen(A)?o(A):A}var Kn="11.11.1";class Yt extends Error{constructor(W,cn){super(W),this.name="HTMLInjectionError",this.html=cn}}const Je=a,Jl=o,lr=Symbol("nomatch"),Br=7,or=function(A){const W=Object.create(null),cn=Object.create(null),Mn=[];let pe=!0;const le="Could not find the language '{}', did you forget to load/include a language module?",gn={disableAutodetect:!0,name:"Plain text",contains:[]};let dn={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:y};function An(nn){return dn.noHighlightRe.test(nn)}function Ee(nn){let vn=nn.className+" ";vn+=nn.parentNode?nn.parentNode.className:"";const Bn=dn.languageDetectRe.exec(vn);if(Bn){const Jn=nt(Bn[1]);return Jn||(jr(le.replace("{}",Bn[1])),jr("Falling back to no-highlight mode for this block.",nn)),Jn?Bn[1]:"no-highlight"}return vn.split(/\s+/).find(Jn=>An(Jn)||nt(Jn))}function me(nn,vn,Bn){let Jn="",Ce="";typeof vn=="object"?(Jn=nn,Bn=vn.ignoreIllegals,Ce=vn.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),G("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Ce=nn,Jn=vn),Bn===void 0&&(Bn=!0);const $e={code:Jn,language:Ce};ur("before:highlight",$e);const ht=$e.result?$e.result:ei($e.language,$e.code,Bn);return ht.code=$e.code,ur("after:highlight",ht),ht}function ei(nn,vn,Bn,Jn){const Ce=Object.create(null);function $e(rn,yn){return rn.keywords[yn]}function ht(){if(!kn.keywords){Me.addText(ne);return}let rn=0;kn.keywordPatternRe.lastIndex=0;let yn=kn.keywordPatternRe.exec(ne),Rn="";for(;yn;){Rn+=ne.substring(rn,yn.index);const Fn=He.case_insensitive?yn[0].toLowerCase():yn[0],be=$e(kn,Fn);if(be){const[Tt,Ha]=be;if(Me.addText(Rn),Rn="",Ce[Fn]=(Ce[Fn]||0)+1,Ce[Fn]<=Br&&(Pi+=Ha),Tt.startsWith("_"))Rn+=yn[0];else{const lo=He.classNameAliases[Tt]||Tt;mt(yn[0],lo)}}else Rn+=yn[0];rn=kn.keywordPatternRe.lastIndex,yn=kn.keywordPatternRe.exec(ne)}Rn+=ne.substring(rn),Me.addText(Rn)}function rt(){if(ne==="")return;let rn=null;if(typeof kn.subLanguage=="string"){if(!W[kn.subLanguage]){Me.addText(ne);return}rn=ei(kn.subLanguage,ne,!0,ao[kn.subLanguage]),ao[kn.subLanguage]=rn._top}else rn=Hr(ne,kn.subLanguage.length?kn.subLanguage:null);kn.relevance>0&&(Pi+=rn.relevance),Me.__addSublanguage(rn._emitter,rn.language)}function ce(){kn.subLanguage!=null?rt():ht(),ne=""}function mt(rn,yn){rn!==""&&(Me.startScope(yn),Me.addText(rn),Me.endScope())}function io(rn,yn){let Rn=1;const Fn=yn.length-1;for(;Rn<=Fn;){if(!rn._emit[Rn]){Rn++;continue}const be=He.classNameAliases[rn[Rn]]||rn[Rn],Tt=yn[Rn];be?mt(Tt,be):(ne=Tt,ht(),ne=""),Rn++}}function Fr(rn,yn){return rn.scope&&typeof rn.scope=="string"&&Me.openNode(He.classNameAliases[rn.scope]||rn.scope),rn.beginScope&&(rn.beginScope._wrap?(mt(ne,He.classNameAliases[rn.beginScope._wrap]||rn.beginScope._wrap),ne=""):rn.beginScope._multi&&(io(rn.beginScope,yn),ne="")),kn=Object.create(rn,{parent:{value:kn}}),kn}function ja(rn,yn,Rn){let Fn=I(rn.endRe,Rn);if(Fn){if(rn["on:end"]){const be=new r(rn);rn["on:end"](yn,be),be.isMatchIgnored&&(Fn=!1)}if(Fn){for(;rn.endsParent&&rn.parent;)rn=rn.parent;return rn}}if(rn.endsWithParent)return ja(rn.parent,yn,Rn)}function qr(rn){return kn.matcher.regexIndex===0?(ne+=rn[0],1):(Ni=!0,0)}function qs(rn){const yn=rn[0],Rn=rn.rule,Fn=new r(Rn),be=[Rn.__beforeBegin,Rn["on:begin"]];for(const Tt of be)if(Tt&&(Tt(rn,Fn),Fn.isMatchIgnored))return qr(yn);return Rn.skip?ne+=yn:(Rn.excludeBegin&&(ne+=yn),ce(),!Rn.returnBegin&&!Rn.excludeBegin&&(ne=yn)),Fr(Rn,rn),Rn.returnBegin?0:yn.length}function at(rn){const yn=rn[0],Rn=vn.substring(rn.index),Fn=ja(kn,rn,Rn);if(!Fn)return lr;const be=kn;kn.endScope&&kn.endScope._wrap?(ce(),mt(yn,kn.endScope._wrap)):kn.endScope&&kn.endScope._multi?(ce(),io(kn.endScope,rn)):be.skip?ne+=yn:(be.returnEnd||be.excludeEnd||(ne+=yn),ce(),be.excludeEnd&&(ne=yn));do kn.scope&&Me.closeNode(),!kn.skip&&!kn.subLanguage&&(Pi+=kn.relevance),kn=kn.parent;while(kn!==Fn.parent);return Fn.starts&&Fr(Fn.starts,rn),be.returnEnd?0:yn.length}function Ba(){const rn=[];for(let yn=kn;yn!==He;yn=yn.parent)yn.scope&&rn.unshift(yn.scope);rn.forEach(yn=>Me.openNode(yn))}let cr={};function Vr(rn,yn){const Rn=yn&&yn[0];if(ne+=rn,Rn==null)return ce(),0;if(cr.type==="begin"&&yn.type==="end"&&cr.index===yn.index&&Rn===""){if(ne+=vn.slice(yn.index,yn.index+1),!pe){const Fn=new Error(`0 width match regex (${nn})`);throw Fn.languageName=nn,Fn.badRule=cr.rule,Fn}return 1}if(cr=yn,yn.type==="begin")return qs(yn);if(yn.type==="illegal"&&!Bn){const Fn=new Error('Illegal lexeme "'+Rn+'" for mode "'+(kn.scope||"<unnamed>")+'"');throw Fn.mode=kn,Fn}else if(yn.type==="end"){const Fn=at(yn);if(Fn!==lr)return Fn}if(yn.type==="illegal"&&Rn==="")return ne+=`
`,1;if(Ua>1e5&&Ua>yn.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ne+=Rn,Rn.length}const He=nt(nn);if(!He)throw ye(le.replace("{}",nn)),new Error('Unknown language: "'+nn+'"');const ro=Ue(He);let Gr="",kn=Jn||ro;const ao={},Me=new dn.__emitter(dn);Ba();let ne="",Pi=0,ri=0,Ua=0,Ni=!1;try{if(He.__emitTokens)He.__emitTokens(vn,Me);else{for(kn.matcher.considerAll();;){Ua++,Ni?Ni=!1:kn.matcher.considerAll(),kn.matcher.lastIndex=ri;const rn=kn.matcher.exec(vn);if(!rn)break;const yn=vn.substring(ri,rn.index),Rn=Vr(yn,rn);ri=rn.index+Rn}Vr(vn.substring(ri))}return Me.finalize(),Gr=Me.toHTML(),{language:nn,value:Gr,relevance:Pi,illegal:!1,_emitter:Me,_top:kn}}catch(rn){if(rn.message&&rn.message.includes("Illegal"))return{language:nn,value:Je(vn),illegal:!0,relevance:0,_illegalBy:{message:rn.message,index:ri,context:vn.slice(ri-100,ri+100),mode:rn.mode,resultSoFar:Gr},_emitter:Me};if(pe)return{language:nn,value:Je(vn),illegal:!1,relevance:0,errorRaised:rn,_emitter:Me,_top:kn};throw rn}}function Ur(nn){const vn={value:Je(nn),illegal:!1,relevance:0,_top:gn,_emitter:new dn.__emitter(dn)};return vn._emitter.addText(nn),vn}function Hr(nn,vn){vn=vn||dn.languages||Object.keys(W);const Bn=Ur(nn),Jn=vn.filter(nt).filter(Ai).map(ce=>ei(ce,nn,!1));Jn.unshift(Bn);const Ce=Jn.sort((ce,mt)=>{if(ce.relevance!==mt.relevance)return mt.relevance-ce.relevance;if(ce.language&&mt.language){if(nt(ce.language).supersetOf===mt.language)return 1;if(nt(mt.language).supersetOf===ce.language)return-1}return 0}),[$e,ht]=Ce,rt=$e;return rt.secondBest=ht,rt}function Wt(nn,vn,Bn){const Jn=vn&&cn[vn]||Bn;nn.classList.add("hljs"),nn.classList.add(`language-${Jn}`)}function _e(nn){let vn=null;const Bn=Ee(nn);if(An(Bn))return;if(ur("before:highlightElement",{el:nn,language:Bn}),nn.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",nn);return}if(nn.children.length>0&&(dn.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(nn)),dn.throwUnescapedHTML))throw new Yt("One of your code blocks includes unescaped HTML.",nn.innerHTML);vn=nn;const Jn=vn.textContent,Ce=Bn?me(Jn,{language:Bn,ignoreIllegals:!0}):Hr(Jn);nn.innerHTML=Ce.value,nn.dataset.highlighted="yes",Wt(nn,Bn,Ce.language),nn.result={language:Ce.language,re:Ce.relevance,relevance:Ce.relevance},Ce.secondBest&&(nn.secondBest={language:Ce.secondBest.language,relevance:Ce.secondBest.relevance}),ur("after:highlightElement",{el:nn,result:Ce,text:Jn})}function We(nn){dn=Jl(dn,nn)}const ki=()=>{Ir(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function za(){Ir(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let no=!1;function Ir(){function nn(){Ir()}if(document.readyState==="loading"){no||window.addEventListener("DOMContentLoaded",nn,!1),no=!0;return}document.querySelectorAll(dn.cssSelector).forEach(_e)}function eo(nn,vn){let Bn=null;try{Bn=vn(A)}catch(Jn){if(ye("Language definition for '{}' could not be registered.".replace("{}",nn)),pe)ye(Jn);else throw Jn;Bn=gn}Bn.name||(Bn.name=nn),W[nn]=Bn,Bn.rawDefinition=vn.bind(null,A),Bn.aliases&&ti(Bn.aliases,{languageName:nn})}function sr(nn){delete W[nn];for(const vn of Object.keys(cn))cn[vn]===nn&&delete cn[vn]}function La(){return Object.keys(W)}function nt(nn){return nn=(nn||"").toLowerCase(),W[nn]||W[cn[nn]]}function ti(nn,{languageName:vn}){typeof nn=="string"&&(nn=[nn]),nn.forEach(Bn=>{cn[Bn.toLowerCase()]=vn})}function Ai(nn){const vn=nt(nn);return vn&&!vn.disableAutodetect}function Mi(nn){nn["before:highlightBlock"]&&!nn["before:highlightElement"]&&(nn["before:highlightElement"]=vn=>{nn["before:highlightBlock"](Object.assign({block:vn.el},vn))}),nn["after:highlightBlock"]&&!nn["after:highlightElement"]&&(nn["after:highlightElement"]=vn=>{nn["after:highlightBlock"](Object.assign({block:vn.el},vn))})}function Ae(nn){Mi(nn),Mn.push(nn)}function to(nn){const vn=Mn.indexOf(nn);vn!==-1&&Mn.splice(vn,1)}function ur(nn,vn){const Bn=nn;Mn.forEach(function(Jn){Jn[Bn]&&Jn[Bn](vn)})}function ii(nn){return G("10.7.0","highlightBlock will be removed entirely in v12.0"),G("10.7.0","Please use highlightElement now."),_e(nn)}Object.assign(A,{highlight:me,highlightAuto:Hr,highlightAll:Ir,highlightElement:_e,highlightBlock:ii,configure:We,initHighlighting:ki,initHighlightingOnLoad:za,registerLanguage:eo,unregisterLanguage:sr,listLanguages:La,getLanguage:nt,registerAliases:ti,autoDetection:Ai,inherit:Jl,addPlugin:Ae,removePlugin:to}),A.debugMode=function(){pe=!1},A.safeMode=function(){pe=!0},A.versionString=Kn,A.regex={concat:N,lookahead:v,either:M,optional:_,anyNumberOfTimes:x};for(const nn in Be)typeof Be[nn]=="object"&&t(Be[nn]);return Object.assign(A,Be),A},it=or({});return it.newInstance=()=>or({}),vf=it,it.HighlightJS=it,it.default=it,vf}var Qk=Xk();const Oa=Os(Qk);function Zk(t){const r=t.regex,a=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),o=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],d={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:o,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},m={className:"meta",begin:/^(>>>|\.\.\.) /},h={className:"subst",begin:/\{/,end:/\}/,keywords:d,illegal:/#/},y={begin:/\{\{/,relevance:0},g={className:"string",contains:[t.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,m],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,m],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,m,y,h]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,m,y,h]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[t.BACKSLASH_ESCAPE,y,h]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,y,h]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},v="[0-9](_?[0-9])*",x=`(\\b(${v}))?\\.(${v})|\\b(${v})\\.`,_=`\\b|${o.join("|")}`,N={className:"number",relevance:0,variants:[{begin:`(\\b(${v})|(${x}))[eE][+-]?(${v})[jJ]?(?=${_})`},{begin:`(${x})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${_})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${_})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`},{begin:`\\b(${v})[jJ](?=${_})`}]},D={className:"comment",begin:r.lookahead(/# type:/),end:/$/,keywords:d,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},M={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:["self",m,N,g,t.HASH_COMMENT_MODE]}]};return h.contains=[g,N,m],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:d,illegal:/(<\/|\?)|=>/,contains:[m,N,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},g,D,t.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[M]},{variants:[{match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[N,M,g]}]}}const Wg="[A-Za-z$_][0-9A-Za-z$_]*",Kk=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Jk=["true","false","null","undefined","NaN","Infinity"],R0=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],O0=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],D0=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],nA=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],eA=[].concat(D0,R0,O0);function z0(t){const r=t.regex,a=(an,{after:Tn})=>{const E="</"+an[0].slice(1);return an.input.indexOf(E,Tn)!==-1},o=Wg,s={begin:"<>",end:"</>"},c=/<[A-Za-z0-9\\._:-]+\s*\/>/,f={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(an,Tn)=>{const E=an[0].length+an.index,T=an.input[E];if(T==="<"||T===","){Tn.ignoreMatch();return}T===">"&&(a(an,{after:E})||Tn.ignoreMatch());let V;const w=an.input.substring(E);if(V=w.match(/^\s*=/)){Tn.ignoreMatch();return}if((V=w.match(/^\s+extends\s+/))&&V.index===0){Tn.ignoreMatch();return}}},d={$pattern:Wg,keyword:Kk,literal:Jk,built_in:eA,"variable.language":nA},m="[0-9](_?[0-9])*",h=`\\.(${m})`,y="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${y})((${h})|\\.)?|(${h}))[eE][+-]?(${m})\\b`},{begin:`\\b(${y})\\b((${h})\\b|\\.)?|(${h})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},v={className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},x={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,v],subLanguage:"xml"}},_={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,v],subLanguage:"css"}},N={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,v],subLanguage:"graphql"}},D={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,v]},j={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},I=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,x,_,N,D,{match:/\$\d+/},g];v.contains=I.concat({begin:/\{/,end:/\}/,keywords:d,contains:["self"].concat(I)});const on=[].concat(j,v.contains),J=on.concat([{begin:/(\s*)\(/,end:/\)/,keywords:d,contains:["self"].concat(on)}]),B={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:J},Z={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,r.concat(o,"(",r.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},hn={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...R0,...O0]}},pn={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},R={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[B],illegal:/%/},ln={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function sn(an){return r.concat("(?!",an.join("|"),")")}const Pn={match:r.concat(/\b/,sn([...D0,"super","import"].map(an=>`${an}\\s*\\(`)),o,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},fn={begin:r.concat(/\./,r.lookahead(r.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Q={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},B]},L="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",K={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(L)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[B]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:J,CLASS_REFERENCE:hn},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),pn,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,x,_,N,D,j,{match:/\$\d+/},g,hn,{scope:"attr",match:o+r.lookahead(":"),relevance:0},K,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[j,t.REGEXP_MODE,{className:"function",begin:L,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:J}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:c},{begin:f.begin,"on:begin":f.isTrulyOpeningTag,end:f.end}],subLanguage:"xml",contains:[{begin:f.begin,end:f.end,skip:!0,contains:["self"]}]}]},R,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[B,t.inherit(t.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},fn,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[B]},Pn,ln,Z,Q,{match:/\$[(.]/}]}}function L0(t){const r=t.regex,a={},o={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[a]}]};Object.assign(a,{className:"variable",variants:[{begin:r.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},o]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[t.BACKSLASH_ESCAPE]},c=t.inherit(t.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),f={begin:/<<-?\s*(?=\w+)/,starts:{contains:[t.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},d={className:"string",begin:/"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,a,s]};s.contains.push(d);const m={match:/\\"/},h={className:"string",begin:/'/,end:/'/},y={match:/\\'/},g={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},t.NUMBER_MODE,a]},v=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],x=t.SHEBANG({binary:`(${v.join("|")})`,relevance:10}),_={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[t.inherit(t.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},N=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],D=["true","false"],M={match:/(\/[a-z._-]+)+/},j=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],I=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],on=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],J=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:N,literal:D,built_in:[...j,...I,"set","shopt",...on,...J]},contains:[x,t.SHEBANG(),_,g,c,f,M,d,m,h,y,a]}}const tA={1:{slug:"01-why-python-in-2026",readme:`# Post 01: Why Python in 2026

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
`}]}};Oa.registerLanguage("python",Zk);Oa.registerLanguage("javascript",z0);Oa.registerLanguage("js",z0);Oa.registerLanguage("bash",L0);Oa.registerLanguage("shell",L0);function iA({code:t,language:r}){const[a,o]=z.useState(!1),{theme:s}=Nr(),c=z.useRef(null);z.useEffect(()=>{c.current&&(c.current.removeAttribute("data-highlighted"),Oa.highlightElement(c.current))},[t,r]);const f=()=>{navigator.clipboard.writeText(t),o(!0),setTimeout(()=>o(!1),2e3)},m={py:"python",js:"javascript",sh:"bash",shell:"bash",text:"plaintext","":"plaintext"}[r]||r;return C.jsxs("div",{className:`rounded-lg sm:rounded-xl border overflow-hidden my-3 sm:my-4 ${s==="dark"?"bg-slate-900 border-slate-700":"bg-slate-50 border-slate-200"}`,children:[C.jsxs("div",{className:`flex items-center justify-between px-3 sm:px-4 py-2 border-b ${s==="dark"?"border-slate-700 bg-slate-800":"border-slate-200 bg-slate-100"}`,children:[C.jsx("span",{className:"text-xs font-medium text-emerald-500",children:r||"code"}),C.jsxs("button",{onClick:f,className:`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${s==="dark"?"text-slate-400 hover:text-white hover:bg-slate-700":"text-slate-600 hover:text-slate-900 hover:bg-slate-200"}`,children:[a?C.jsx(by,{size:14,className:"text-emerald-500"}):C.jsx(xy,{size:14}),a?"Copied!":"Copy"]})]}),C.jsx("pre",{className:"overflow-x-auto p-3 sm:p-4 text-xs sm:text-sm leading-relaxed !bg-transparent !m-0",children:C.jsx("code",{ref:c,className:`language-${m} !bg-transparent`,children:t})})]})}function rA({code:t,language:r="python",height:a="300px"}){const[o,s]=z.useState(!1),{theme:c}=Nr(),f=z.useRef(null),d=()=>{navigator.clipboard.writeText(t),s(!0),setTimeout(()=>s(!1),2e3)};return z.useEffect(()=>{const m=f.current;if(!m)return;const h=y=>{const g=m.querySelector(".monaco-editor");if(g){const v=g.querySelector(".monaco-scrollable-element");if(v){const{scrollTop:x,scrollHeight:_,clientHeight:N}=v,D=x===0,M=x+N>=_-1;if(y.deltaY<0&&D||y.deltaY>0&&M)return}}};return m.addEventListener("wheel",h,{passive:!0}),()=>m.removeEventListener("wheel",h)},[]),C.jsxs("div",{ref:f,className:`rounded-lg sm:rounded-xl border overflow-hidden ${c==="dark"?"border-slate-700":"border-slate-300"}`,children:[C.jsxs("div",{className:`flex items-center justify-between px-3 sm:px-4 py-2 border-b ${c==="dark"?"bg-slate-800 border-slate-700":"bg-slate-100 border-slate-300"}`,children:[C.jsx("span",{className:"text-xs font-medium text-emerald-500",children:r}),C.jsxs("button",{onClick:d,className:`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${c==="dark"?"text-slate-400 hover:text-white hover:bg-slate-700":"text-slate-600 hover:text-slate-900 hover:bg-slate-200"}`,children:[o?C.jsx(by,{size:14,className:"text-emerald-500"}):C.jsx(xy,{size:14}),o?"Copied!":"Copy"]})]}),C.jsx($k,{height:a,language:r,value:t,theme:c==="dark"?"vs-dark":"light",options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,padding:{top:12,bottom:12},folding:!1,wordWrap:"on",scrollbar:{vertical:"visible",horizontal:"visible",alwaysConsumeMouseWheel:!1},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,domReadOnly:!0}})]})}function aA({name:t,content:r}){const[a,o]=z.useState(!1),{theme:s}=Nr(),c=r.split(`
`).length,f=Math.min(Math.max(c*22+24,200),500);return C.jsxs("div",{className:`rounded-lg sm:rounded-xl border overflow-hidden ${s==="dark"?"border-slate-700 bg-slate-800/50":"border-slate-200 bg-slate-50"}`,children:[C.jsxs("button",{onClick:()=>o(!a),className:`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-left transition ${s==="dark"?"hover:bg-slate-700/50":"hover:bg-slate-100"}`,children:[C.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[C.jsx(Ls,{size:16,className:"text-emerald-500"}),C.jsx("span",{className:`font-medium text-sm ${s==="dark"?"text-white":"text-slate-900"}`,children:t}),C.jsxs("span",{className:"text-xs text-slate-500",children:[c," lines"]})]}),a?C.jsx(Vv,{size:16,className:s==="dark"?"text-slate-400":"text-slate-500"}):C.jsx(Hv,{size:16,className:s==="dark"?"text-slate-400":"text-slate-500"})]}),a&&C.jsx("div",{className:`border-t ${s==="dark"?"border-slate-700":"border-slate-200"}`,children:C.jsx(rA,{code:r,language:"python",height:`${f}px`})})]})}function lA(){const{postId:t}=oy(),{theme:r}=Nr(),a=parseInt(t);let o=null,s=null;for(const g of Ar){const v=g.posts.find(x=>x.id===a);if(v){o=v,s=g;break}}if(!o)return C.jsxs("div",{className:"text-center py-16",children:[C.jsx("h1",{className:`text-2xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Post not found"}),C.jsx(Ge,{to:"/",className:"mt-4 inline-block text-emerald-500 hover:underline",children:"Go back home"})]});const c=tA[a],f=c&&c.readme,d=Ar.flatMap(g=>g.posts),m=d.findIndex(g=>g.id===a),h=m>0?d[m-1]:null,y=m<d.length-1?d[m+1]:null;return C.jsxs("div",{className:"space-y-5 sm:space-y-8",children:[C.jsxs("nav",{className:`flex items-center gap-2 text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:[C.jsx(Ge,{to:"/",className:"hover:text-emerald-500",children:"Home"}),C.jsx("span",{children:"/"}),C.jsxs(Ge,{to:`/phase/${s.id}`,className:"hover:text-emerald-500",children:["Phase ",s.id]}),C.jsx("span",{children:"/"}),C.jsxs("span",{className:r==="dark"?"text-white":"text-slate-900",children:["Post ",o.id]})]}),C.jsx("header",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 transition-colors ${r==="dark"?"border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-800/50":"border-slate-200 bg-white shadow-sm"}`,children:C.jsxs("div",{className:"flex items-start gap-3 sm:gap-4",children:[C.jsx("div",{className:"flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg sm:text-xl font-bold text-white shadow-lg shadow-emerald-500/25",children:String(o.id).padStart(2,"0")}),C.jsxs("div",{className:"flex-1 min-w-0",children:[C.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3",children:[C.jsxs("span",{className:"rounded-full bg-emerald-500/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-emerald-500",children:["Phase ",s.id]}),C.jsxs("span",{className:`text-xs sm:text-sm ${r==="dark"?"text-slate-400":"text-slate-500"}`,children:["Post ",o.id," of 120"]})]}),C.jsx("h1",{className:`mt-2 text-xl sm:text-2xl md:text-3xl font-bold ${r==="dark"?"text-white":"text-slate-900"}`,children:o.title})]})]})}),f?C.jsx("article",{className:"prose prose-slate max-w-none",children:C.jsx("div",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 transition-colors ${r==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white shadow-sm"}`,children:C.jsx(T_,{remarkPlugins:[UT],components:{code({node:g,inline:v,className:x,children:_,...N}){const D=String(_).replace(/\n$/,""),M=x?.replace("language-","")||"text";return v||!x&&!D.includes(`
`)?C.jsx("code",{className:`inline-code rounded px-1.5 py-0.5 text-xs sm:text-sm font-mono whitespace-nowrap ${r==="dark"?"bg-slate-700 text-emerald-400":"bg-slate-200 text-emerald-600"}`,...N,children:_}):C.jsx(iA,{code:D,language:M})},h1:({children:g})=>C.jsx("h1",{className:`text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 first:mt-0 ${r==="dark"?"text-white":"text-slate-900"}`,children:g}),h2:({children:g})=>C.jsx("h2",{className:`text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 pb-2 border-b ${r==="dark"?"text-white border-slate-700":"text-slate-900 border-slate-200"}`,children:g}),h3:({children:g})=>C.jsx("h3",{className:`text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-2 sm:mb-3 ${r==="dark"?"text-white":"text-slate-900"}`,children:g}),p:({children:g})=>C.jsx("p",{className:`leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base ${r==="dark"?"text-slate-300":"text-slate-700"}`,children:g}),ul:({children:g})=>C.jsx("ul",{className:`list-disc list-inside space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ${r==="dark"?"text-slate-300":"text-slate-700"}`,children:g}),ol:({children:g})=>C.jsx("ol",{className:`list-decimal list-inside space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ${r==="dark"?"text-slate-300":"text-slate-700"}`,children:g}),li:({children:g})=>C.jsx("li",{className:r==="dark"?"text-slate-300":"text-slate-700",children:g}),blockquote:({children:g})=>C.jsx("blockquote",{className:`border-l-4 border-emerald-500 pl-3 sm:pl-4 italic my-3 sm:my-4 ${r==="dark"?"text-slate-400":"text-slate-600"}`,children:g}),table:({children:g})=>C.jsx("div",{className:"overflow-x-auto my-3 sm:my-4",children:C.jsx("table",{className:`min-w-full border rounded-lg overflow-hidden text-sm ${r==="dark"?"border-slate-700":"border-slate-200"}`,children:g})}),thead:({children:g})=>C.jsx("thead",{className:r==="dark"?"bg-slate-800":"bg-slate-100",children:g}),th:({children:g})=>C.jsx("th",{className:`px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold border-b ${r==="dark"?"text-white border-slate-700":"text-slate-900 border-slate-200"}`,children:g}),td:({children:g})=>C.jsx("td",{className:`px-3 sm:px-4 py-2 text-xs sm:text-sm border-b ${r==="dark"?"text-slate-300 border-slate-700/50":"text-slate-700 border-slate-200"}`,children:g}),a:({href:g,children:v})=>C.jsx("a",{href:g,className:"text-emerald-500 hover:text-emerald-400 underline",children:v}),hr:()=>C.jsx("hr",{className:`my-6 sm:my-8 ${r==="dark"?"border-slate-700":"border-slate-200"}`}),strong:({children:g})=>C.jsx("strong",{className:`font-semibold ${r==="dark"?"text-white":"text-slate-900"}`,children:g}),pre:({children:g})=>C.jsx(C.Fragment,{children:g})},children:c.readme})})}):C.jsxs("div",{className:`rounded-xl sm:rounded-2xl border p-8 text-center ${r==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white"}`,children:[C.jsx(Fl,{size:48,className:r==="dark"?"mx-auto text-slate-600":"mx-auto text-slate-400"}),C.jsx("h2",{className:`mt-4 text-xl font-semibold ${r==="dark"?"text-white":"text-slate-900"}`,children:"Content Coming Soon"}),C.jsx("p",{className:`mt-2 ${r==="dark"?"text-slate-400":"text-slate-600"}`,children:"This post is part of future phases and will be added soon."})]}),c?.examples?.length>0&&C.jsxs("section",{className:`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 ${r==="dark"?"border-slate-700/50 bg-slate-800/30":"border-slate-200 bg-white shadow-sm"}`,children:[C.jsxs("h2",{className:`flex items-center gap-2 text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${r==="dark"?"text-white":"text-slate-900"}`,children:[C.jsx(Ls,{size:18,className:"text-emerald-500"}),"Python Examples"]}),C.jsx("p",{className:`mb-3 sm:mb-4 text-sm ${r==="dark"?"text-slate-400":"text-slate-600"}`,children:"Click on each file to view the executable Python code:"}),C.jsx("div",{className:"space-y-2 sm:space-y-3",children:c.examples.map(g=>C.jsx(aA,{name:g.name,content:g.content},g.name))})]}),C.jsxs("nav",{className:`flex items-center justify-between border-t pt-4 sm:pt-6 ${r==="dark"?"border-slate-700/50":"border-slate-200"}`,children:[h?C.jsxs(Ge,{to:`/post/${h.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[C.jsx(yy,{size:14,className:"transition group-hover:-translate-x-1"}),C.jsxs("span",{className:"max-w-[120px] sm:max-w-[200px] truncate",children:[String(h.id).padStart(2,"0"),". ",h.title]})]}):C.jsx("div",{}),y&&C.jsxs(Ge,{to:`/post/${y.id}`,className:`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${r==="dark"?"text-slate-400 hover:bg-slate-800 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[C.jsxs("span",{className:"max-w-[120px] sm:max-w-[200px] truncate",children:[String(y.id).padStart(2,"0"),". ",y.title]}),C.jsx(Ta,{size:14,className:"transition group-hover:translate-x-1"})]})]})]})}function oA(){return C.jsx(Mv,{children:C.jsx(xv,{basename:"/python-programming-learning-2026",children:C.jsx(X1,{children:C.jsxs(zl,{path:"/",element:C.jsx(fS,{}),children:[C.jsx(zl,{index:!0,element:C.jsx(hS,{})}),C.jsx(zl,{path:"phase/:phaseId",element:C.jsx(mS,{})}),C.jsx(zl,{path:"post/:postId",element:C.jsx(lA,{})})]})})})})}$x.createRoot(document.getElementById("root")).render(C.jsx(z.StrictMode,{children:C.jsx(oA,{})}));
